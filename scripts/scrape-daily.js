#!/usr/bin/env node
/**
 * VisaCheck Pro – Daily Research Scraper (HTTP + Puppeteer fallback for 403)
 * Run: node scripts/scrape-daily.js
 * Cron: 0 6 * * * /path/to/scripts/run-daily.sh
 *
 * IMPORTANT for FastComet shared hosting:
 * - Do NOT run Puppeteer on shared hosting (no Chrome, no long processes).
 * - Run this scraper on a VPS / GitHub Actions / your PC, then upload data/live-data.json
 *   together with the static site files to FastComet.
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'data');
const OUT_FILE = path.join(OUT_DIR, 'live-data.json');
const LOG_FILE = path.join(OUT_DIR, 'scrape-log.txt');

let puppeteer = null;
try {
  puppeteer = require('puppeteer');
} catch (e) {
  console.warn('Puppeteer not available – HTTP-only mode. Install with: npm install puppeteer');
}

const SOURCES = [
  // Official – UK
  { id: 'uk_family', name: 'UK Family partner/spouse', url: 'https://www.gov.uk/uk-family-visa/partner-spouse', country: 'uk', tags: ['spouse','financial'], prefer: 'http' },
  { id: 'uk_student', name: 'UK Student visa', url: 'https://www.gov.uk/student-visa', country: 'uk', tags: ['student'], prefer: 'http' },
  { id: 'uk_visitor', name: 'UK Standard Visitor', url: 'https://www.gov.uk/standard-visitor', country: 'uk', tags: ['visit'], prefer: 'http' },
  { id: 'uk_tb_pakistan', name: 'UK TB clinics Pakistan', url: 'https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-pakistan', country: 'uk', tags: ['tb'], prefer: 'http' },
  { id: 'uk_fees', name: 'UK visa fees', url: 'https://www.gov.uk/visa-fees', country: 'uk', tags: ['fees'], prefer: 'http' },
  { id: 'uk_fm_se', name: 'UK Appendix FM-SE guidance hub', url: 'https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-fm-se-family-members-specified-evidence', country: 'uk', tags: ['financial','spouse'], prefer: 'http' },
  // Spain / Schengen VAC
  { id: 'spain_vac', name: 'Spain visa Pakistan portal', url: 'https://www.thespainvisa.com/', country: 'spain', tags: ['schengen'], prefer: 'http' },
  { id: 'spain_appointment', name: 'Spain appointment portal', url: 'https://appointment.thespainvisa.com/', country: 'spain', tags: ['appointment'], prefer: 'puppeteer' },
  // Canada
  { id: 'canada_visit', name: 'Canada visit', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html', country: 'canada', tags: ['visit'], prefer: 'http' },
  { id: 'canada_study', name: 'Canada study', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html', country: 'canada', tags: ['student'], prefer: 'http' },
  { id: 'canada_family', name: 'Canada family sponsorship', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html', country: 'canada', tags: ['spouse'], prefer: 'http' },
  // Australia (often 403 on plain HTTP)
  { id: 'australia_visitor', name: 'Australia visitor 600', url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600', country: 'australia', tags: ['visit'], prefer: 'puppeteer' },
  { id: 'australia_student', name: 'Australia student 500', url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500', country: 'australia', tags: ['student'], prefer: 'puppeteer' },
  // USA (often 403)
  { id: 'usa_visitor', name: 'US B1/B2 visitor', url: 'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html', country: 'usa', tags: ['visit'], prefer: 'puppeteer' },
  { id: 'usa_student', name: 'US F-1 student', url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html', country: 'usa', tags: ['student'], prefer: 'puppeteer' },
  // VFS / biometrics Pakistan
  { id: 'vfs_pakistan_uk', name: 'VFS Global Pakistan UK', url: 'https://visa.vfsglobal.com/pak/en/gbr/', country: 'uk', tags: ['vac','biometric'], prefer: 'puppeteer' },
  // Trusted community (use carefully – not official)
  { id: 'forum_reddit_ukvisa', name: 'Reddit r/ukvisa (community signal)', url: 'https://www.reddit.com/r/ukvisa/.json?limit=15', country: 'uk', tags: ['forum'], prefer: 'http', json: true },
  { id: 'forum_reddit_schengen', name: 'Reddit r/SchengenVisa', url: 'https://www.reddit.com/r/SchengenVisa/.json?limit=10', country: 'schengen', tags: ['forum'], prefer: 'http', json: true },
  // Study-abroad platforms (guidance / trends – not official immigration law)
  { id: 'study_applyboard', name: 'ApplyBoard blog', url: 'https://www.applyboard.com/blog', country: 'global', tags: ['student','study'], prefer: 'http' },
  { id: 'study_studies_overseas', name: 'Studies Overseas', url: 'https://www.studies-overseas.com/', country: 'global', tags: ['student','study'], prefer: 'http' },
  { id: 'study_educatly', name: 'Educatly', url: 'https://www.educatly.com/', country: 'global', tags: ['student','study'], prefer: 'http' },
  { id: 'study_adventus', name: 'Adventus', url: 'https://adventus.io/', country: 'global', tags: ['student','study'], prefer: 'http' },
  { id: 'study_edvoy', name: 'Edvoy', url: 'https://edvoy.com/', country: 'global', tags: ['student','study'], prefer: 'http' },
  { id: 'study_idp_pakistan', name: 'IDP Pakistan', url: 'https://www.idp.com/pakistan/', country: 'pakistan', tags: ['student','study'], prefer: 'http' },

  // Worldwide official immigration / visa portals (destination-side research)
  { id: 'portal_us', name: 'US visas', url: 'https://travel.state.gov/content/travel/en/us-visas.html', country: 'us', tags: ['official'], prefer: 'puppeteer' },
  { id: 'portal_gb', name: 'UK visas immigration', url: 'https://www.gov.uk/browse/visas-immigration', country: 'gb', tags: ['official'], prefer: 'http' },
  { id: 'portal_ca', name: 'Canada IRCC', url: 'https://www.canada.ca/en/services/immigration-citizenship.html', country: 'ca', tags: ['official'], prefer: 'http' },
  { id: 'portal_au', name: 'Australia Home Affairs', url: 'https://immi.homeaffairs.gov.au/', country: 'au', tags: ['official'], prefer: 'puppeteer' },
  { id: 'portal_nz', name: 'Immigration NZ', url: 'https://www.immigration.govt.nz/', country: 'nz', tags: ['official'], prefer: 'http' },
  { id: 'portal_de', name: 'Germany AA visas', url: 'https://www.auswaertiges-amt.de/en/visa-service', country: 'de', tags: ['official'], prefer: 'http' },
  { id: 'portal_fr', name: 'France-Visas', url: 'https://france-visas.gouv.fr/', country: 'fr', tags: ['official'], prefer: 'http' },
  { id: 'portal_eu_visa', name: 'EU Schengen visa policy', url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en', country: 'eu', tags: ['official','schengen'], prefer: 'http' },
  { id: 'portal_jp', name: 'Japan MOFA visa', url: 'https://www.mofa.go.jp/j_info/visit/visa/', country: 'jp', tags: ['official'], prefer: 'http' },
  { id: 'portal_kr', name: 'Korea visa', url: 'https://www.visa.go.kr/', country: 'kr', tags: ['official'], prefer: 'http' },
  { id: 'portal_sg', name: 'Singapore ICA', url: 'https://www.ica.gov.sg/', country: 'sg', tags: ['official'], prefer: 'http' },
  { id: 'portal_ae', name: 'UAE ICA', url: 'https://icp.gov.ae/', country: 'ae', tags: ['official'], prefer: 'http' },
  { id: 'portal_tr', name: 'Turkey e-Visa', url: 'https://www.evisa.gov.tr/', country: 'tr', tags: ['official'], prefer: 'http' },
  { id: 'portal_ie', name: 'Ireland Immigration', url: 'https://www.irishimmigration.ie/', country: 'ie', tags: ['official'], prefer: 'http' },
  { id: 'portal_in', name: 'India visa online', url: 'https://indianvisaonline.gov.in/', country: 'in', tags: ['official'], prefer: 'http' },
  { id: 'portal_br', name: 'Brazil MRE', url: 'https://www.gov.br/mre/pt-br', country: 'br', tags: ['official'], prefer: 'http' },
  { id: 'portal_za', name: 'South Africa DHA', url: 'https://www.dha.gov.za/', country: 'za', tags: ['official'], prefer: 'http' },
  { id: 'portal_ng', name: 'Nigeria Immigration', url: 'https://immigration.gov.ng/', country: 'ng', tags: ['official'], prefer: 'http' },
  { id: 'portal_ke', name: 'Kenya eTA', url: 'https://www.etakenya.go.ke/', country: 'ke', tags: ['official'], prefer: 'http' },

  { id: 'study_portals', name: 'Studyportals', url: 'https://studyportals.com/', country: 'global', tags: ['student','study'], prefer: 'http' }
];

function fetchHttp(url, timeoutMs = 25000) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; VisaCheckPro/1.1; +research snapshot)',
        'Accept': 'text/html,application/json,application/xhtml+xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-GB,en;q=0.9'
      },
      timeout: timeoutMs
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        res.resume();
        return fetchHttp(next, timeoutMs).then(resolve).catch(reject);
      }
      const status = res.statusCode;
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const body = Buffer.concat(chunks).toString('utf8');
        if (status === 403 || status === 401 || status === 429) {
          const err = new Error('HTTP ' + status);
          err.status = status;
          err.body = body.slice(0, 200);
          return reject(err);
        }
        if (status !== 200) {
          const err = new Error('HTTP ' + status);
          err.status = status;
          return reject(err);
        }
        resolve({ status, body });
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function fetchPuppeteer(url, browser) {
  const page = await browser.newPage();
  try {
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(1500);
    const body = await page.evaluate(() => document.body ? document.body.innerText : '');
    return { status: 200, body, method: 'puppeteer' };
  } finally {
    await page.close().catch(() => {});
  }
}

function stripHtml(html) {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractSignals(text, source) {
  const lower = text.toLowerCase();
  const signals = {
    mentions_29000: /£\s*29[,.]?000|29000/.test(text),
    mentions_income_threshold: /minimum income|income threshold|financial requirement/.test(lower),
    mentions_tb: /\btb\b|tuberculosis/.test(lower),
    mentions_biometric: /biometric|fingerprints/.test(lower),
    mentions_ihs: /immigration health surcharge|\bihs\b/.test(lower),
    fee_candidates: [...new Set([...(text.match(/£\s?[\d,]+(?:\.\d{2})?/g) || []).slice(0, 8), ...(text.match(/€\s?[\d,]+(?:\.\d{2})?/g) || []).slice(0, 5)])],
    snippets: []
  };
  ['financial requirement', 'minimum income', 'tuberculosis', 'biometric', 'how to apply', 'documents'].forEach((k) => {
    const i = lower.indexOf(k);
    if (i >= 0) {
      const snip = text.slice(Math.max(0, i - 40), Math.min(text.length, i + 180)).replace(/\s+/g, ' ').trim();
      if (snip.length > 25) signals.snippets.push(snip);
    }
  });
  signals.snippets = signals.snippets.slice(0, 6);

  // Reddit JSON titles as community signal only
  if (source.json) {
    try {
      const j = JSON.parse(text);
      const posts = (j.data && j.data.children) || [];
      signals.forum_titles = posts.slice(0, 8).map((p) => (p.data && p.data.title) || '').filter(Boolean);
    } catch (_) {}
  }
  return signals;
}

async function scrapeOne(src, browser) {
  const entry = {
    id: src.id,
    name: src.name,
    url: src.url,
    country: src.country,
    tags: src.tags,
    ok: false,
    method: null,
    fetchedAt: null,
    status: null,
    signals: null,
    error: null,
    textLength: 0
  };

  const tryHttp = async () => {
    const { status, body } = await fetchHttp(src.url);
    const text = src.json ? body : stripHtml(body);
    entry.ok = true;
    entry.method = 'http';
    entry.status = status;
    entry.fetchedAt = new Date().toISOString();
    entry.textLength = text.length;
    entry.signals = extractSignals(text, src);
  };

  const tryPuppeteer = async () => {
    if (!browser) throw new Error('Puppeteer browser not started');
    const { status, body } = await fetchPuppeteer(src.url, browser);
    const text = stripHtml(body);
    entry.ok = true;
    entry.method = 'puppeteer';
    entry.status = status;
    entry.fetchedAt = new Date().toISOString();
    entry.textLength = text.length;
    entry.signals = extractSignals(text, src);
  };

  try {
    if (src.prefer === 'puppeteer' && browser) {
      try {
        await tryPuppeteer();
      } catch (e) {
        await tryHttp();
      }
    } else {
      try {
        await tryHttp();
      } catch (e) {
        if ((e.status === 403 || e.status === 401 || e.status === 429 || /403|401|429|Timeout/.test(e.message)) && browser) {
          await tryPuppeteer();
        } else {
          throw e;
        }
      }
    }
  } catch (e) {
    entry.error = e.message;
    entry.status = e.status || null;
  }
  return entry;
}

async function scrapeAll() {
  const started = new Date().toISOString();
  const log = ['[' + started + '] Daily scrape started (HTTP + Puppeteer fallback)'];
  let browser = null;

  if (puppeteer) {
    try {
      browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
      });
      log.push('Puppeteer launched');
    } catch (e) {
      log.push('Puppeteer launch failed: ' + e.message);
      browser = null;
    }
  } else {
    log.push('Puppeteer not installed – HTTP only');
  }

  const results = [];
  try {
    for (const src of SOURCES) {
      const entry = await scrapeOne(src, browser);
      results.push(entry);
      log.push((entry.ok ? 'OK  ' : 'FAIL ') + src.id + (entry.method ? ' via ' + entry.method : '') + (entry.error ? ': ' + entry.error : '') + (entry.textLength ? ' (' + entry.textLength + ' chars)' : ''));
      await new Promise((r) => setTimeout(r, entry.method === 'puppeteer' ? 2000 : 1000));
    }
  } finally {
    if (browser) await browser.close().catch(() => {});
  }

  const summary = {
    scrapedAt: started,
    finishedAt: new Date().toISOString(),
    sourceCount: SOURCES.length,
    successCount: results.filter((r) => r.ok).length,
    failCount: results.filter((r) => !r.ok).length,
    puppeteerUsed: results.some((r) => r.method === 'puppeteer'),
    flags: {
      uk_income_29000_seen: results.some((r) => r.signals && r.signals.mentions_29000),
      uk_financial_requirement_seen: results.some((r) => r.country === 'uk' && r.signals && r.signals.mentions_income_threshold),
      tb_guidance_seen: results.some((r) => r.signals && r.signals.mentions_tb)
    },
    sources: results,
    hostingNote: 'Run this scraper off shared hosting (VPS/Actions/PC). Upload data/live-data.json to FastComet with the static site.'
  };

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(summary, null, 2), 'utf8');
  fs.appendFileSync(LOG_FILE, log.join('\n') + '\n---\n', 'utf8');

  console.log(JSON.stringify({
    ok: true,
    out: OUT_FILE,
    success: summary.successCount,
    fail: summary.failCount,
    puppeteerUsed: summary.puppeteerUsed,
    flags: summary.flags
  }, null, 2));
}

scrapeAll().catch((e) => {
  console.error('Scrape failed:', e);
  process.exit(1);
});
