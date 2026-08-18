/**
 * Local Mac scraper (Puppeteer) → SQL upsert file for FastComet MySQL
 *
 * Usage:
 *   cd scraper && npm install
 *   node scrape-to-sql.js
 *
 * Output:
 *   ../sql/monthly-update.sql
 *   ../data/live-data.json
 */

const fs = require('fs');
const path = require('path');

const OUT_SQL = path.join(__dirname, '..', 'sql', 'monthly-update.sql');
const OUT_JSON = path.join(__dirname, '..', 'data', 'live-data.json');

const SOURCES = [
  { id: 'govuk_visitor', dest: 'gb', visa: 'tourist', url: 'https://www.gov.uk/standard-visitor', prefer: 'http' },
  { id: 'govuk_family', dest: 'gb', visa: 'family', url: 'https://www.gov.uk/uk-family-visa', prefer: 'http' },
  { id: 'govuk_student', dest: 'gb', visa: 'student', url: 'https://www.gov.uk/student-visa', prefer: 'http' },
  { id: 'govuk_tb', dest: 'gb', visa: null, url: 'https://www.gov.uk/tb-test-visa', prefer: 'http' },
  { id: 'us_visitor', dest: 'us', visa: 'tourist', url: 'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html', prefer: 'puppeteer' },
  { id: 'us_student', dest: 'us', visa: 'student', url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html', prefer: 'puppeteer' },
  { id: 'ircc_visit', dest: 'ca', visa: 'tourist', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html', prefer: 'http' },
  { id: 'ircc_study', dest: 'ca', visa: 'student', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html', prefer: 'http' },
  { id: 'au_homeaffairs', dest: 'au', visa: null, url: 'https://immi.homeaffairs.gov.au/', prefer: 'puppeteer' },
  { id: 'au_student', dest: 'au', visa: 'student', url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500', prefer: 'puppeteer' },
  { id: 'france_visas', dest: 'fr', visa: null, url: 'https://france-visas.gouv.fr/', prefer: 'http' },
  { id: 'germany_visa', dest: 'de', visa: null, url: 'https://www.auswaertiges-amt.de/en/visa-service', prefer: 'http' },
  { id: 'spain_visas', dest: 'es', visa: null, url: 'https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Visados.aspx', prefer: 'http' },
  { id: 'eu_schengen', dest: 'eu', visa: null, url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en', prefer: 'http' },
  { id: 'nz_imm', dest: 'nz', visa: null, url: 'https://www.immigration.govt.nz/', prefer: 'http' },
  { id: 'ie_imm', dest: 'ie', visa: null, url: 'https://www.irishimmigration.ie/', prefer: 'http' },
];

function esc(s) {
  if (s == null) return 'NULL';
  return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "''") + "'";
}

async function fetchHttp(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'VisaCheckProResearch/1.0 (local research; +https://hhcvisa.ffgpak.com)',
      'Accept': 'text/html,application/xhtml+xml',
    },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const text = await res.text();
  return text.slice(0, 500000);
}

async function fetchPuppeteer(url) {
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.setUserAgent('VisaCheckProResearch/1.0');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    const text = await page.evaluate(() => document.body ? document.body.innerText : '');
    return String(text).slice(0, 500000);
  } finally {
    await browser.close();
  }
}

function extractSignals(text) {
  const t = text.replace(/\s+/g, ' ').slice(0, 20000);
  const signals = [];
  const money = t.match(/£\s?[\d,]+|\€\s?[\d,]+|\$\s?[\d,]+|CAD\s?[\d,]+|AUD\s?[\d,]+/g);
  if (money) signals.push('Amounts mentioned: ' + [...new Set(money)].slice(0, 8).join(', '));
  if (/tuberculosis|\bTB test\b/i.test(t)) signals.push('TB testing mentioned on page');
  if (/biometric/i.test(t)) signals.push('Biometrics mentioned on page');
  if (/28 days|28-day/i.test(t)) signals.push('28-day style funds holding rule language detected');
  if (/Appendix FM/i.test(t)) signals.push('Appendix FM referenced');
  if (/Confirmation of Acceptance for Studies|\bCAS\b/i.test(t)) signals.push('CAS referenced');
  if (/\bI-20\b|SEVIS/i.test(t)) signals.push('I-20/SEVIS referenced');
  if (/Genuine Student|GTE/i.test(t)) signals.push('Genuine Student/GTE language detected');
  return signals;
}

async function main() {
  const started = new Date().toISOString();
  const results = [];
  const sql = [];
  sql.push('-- monthly-update.sql generated ' + started);
  sql.push('SET NAMES utf8mb4;');
  sql.push("INSERT INTO scrape_runs (started_at, notes) VALUES (UTC_TIMESTAMP(), 'local Mac puppeteer scrape');");
  sql.push('SET @run_id = LAST_INSERT_ID();');

  let ok = 0, fail = 0;

  for (const src of SOURCES) {
    process.stdout.write('Fetching ' + src.id + ' ... ');
    try {
      let body;
      if (src.prefer === 'puppeteer') {
        try {
          body = await fetchPuppeteer(src.url);
        } catch (e) {
          body = await fetchHttp(src.url);
        }
      } else {
        try {
          body = await fetchHttp(src.url);
        } catch (e) {
          body = await fetchPuppeteer(src.url);
        }
      }
      const signals = extractSignals(body);
      ok++;
      console.log('OK', signals.length, 'signals');
      results.push({ id: src.id, dest: src.dest, url: src.url, ok: true, signals, at: new Date().toISOString() });

      sql.push(
        'INSERT INTO scrape_sources (run_id, source_id, dest_code, url, ok, snippet, fetched_at) VALUES (' +
        '@run_id, ' + esc(src.id) + ', ' + esc(src.dest) + ', ' + esc(src.url) + ', 1, ' +
        esc(signals.join(' | ').slice(0, 1000)) + ', UTC_TIMESTAMP());'
      );

      if (src.dest && src.dest !== 'eu') {
        sql.push(
          'INSERT INTO portals (dest_code, url, label, updated_at) VALUES (' +
          esc(src.dest) + ', ' + esc(src.url) + ', ' + esc(src.id) + ', UTC_TIMESTAMP()) ' +
          'ON DUPLICATE KEY UPDATE url=VALUES(url), updated_at=UTC_TIMESTAMP();'
        );
      }

      // Attach research note lines into requirements as Research section (active, sourced)
      if (src.visa && signals.length) {
        signals.forEach((sig, i) => {
          sql.push(
            'INSERT INTO requirements (dest_code, visa_code, origin_code, section, item_text, sort_order, is_active, source_url, updated_at) VALUES (' +
            esc(src.dest) + ', ' + esc(src.visa) + ', NULL, ' + esc('Live research signals') + ', ' +
            esc(sig) + ', ' + (100 + i) + ', 1, ' + esc(src.url) + ', UTC_TIMESTAMP());'
          );
        });
      }
    } catch (e) {
      fail++;
      console.log('FAIL', e.message);
      results.push({ id: src.id, dest: src.dest, url: src.url, ok: false, error: e.message, at: new Date().toISOString() });
      sql.push(
        'INSERT INTO scrape_sources (run_id, source_id, dest_code, url, ok, error_text, fetched_at) VALUES (' +
        '@run_id, ' + esc(src.id) + ', ' + esc(src.dest) + ', ' + esc(src.url) + ', 0, ' +
        esc(String(e.message).slice(0, 400)) + ', UTC_TIMESTAMP());'
      );
    }
  }

  sql.push('UPDATE scrape_runs SET finished_at=UTC_TIMESTAMP(), success_count=' + ok + ', fail_count=' + fail + ' WHERE id=@run_id;');

  fs.mkdirSync(path.dirname(OUT_SQL), { recursive: true });
  fs.writeFileSync(OUT_SQL, sql.join('\n') + '\n', 'utf8');
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify({
    scrapedAt: started,
    finishedAt: new Date().toISOString(),
    successCount: ok,
    failCount: fail,
    sources: results,
  }, null, 2));

  console.log('\nWrote', OUT_SQL);
  console.log('Wrote', OUT_JSON);
  console.log('Success:', ok, 'Fail:', fail);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
