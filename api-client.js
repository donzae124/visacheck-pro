/**
 * api-client.js – Website reads MySQL via PHP API only (no browser scrape)
 * Load AFTER countries.js and BEFORE or after global-app.js
 *
 * Set API base if needed:
 *   window.VISA_API_BASE = 'https://hhcvisa.ffgpak.com/api';
 */
(function () {
  var API_BASE = window.VISA_API_BASE || 'api';

  window.fetchChecklistFromDb = function (origin, dest, visa, education) {
    var q =
      '?origin=' + encodeURIComponent(origin) +
      '&dest=' + encodeURIComponent(dest) +
      '&visa=' + encodeURIComponent(visa) +
      '&education=' + encodeURIComponent(education || origin);
    return fetch(API_BASE + '/checklist.php' + q, { credentials: 'omit' })
      .then(function (r) {
        if (!r.ok) throw new Error('API HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        if (!data || data.ok === false) throw new Error((data && data.error) || 'API error');
        return data;
      });
  };

  /**
   * Prefer DB API; fall back to client buildPair if API unavailable
   */
  window.renderContentFromApiOrLocal = function () {
    var originEl = document.getElementById('originCountry');
    var destEl = document.getElementById('destCountry') || document.getElementById('country');
    var visaEl = document.getElementById('visaType');
    var eduEl = document.getElementById('educationCountry');
    if (!originEl || !destEl || !visaEl) {
      alert('Selectors missing');
      return;
    }
    var origin = originEl.value;
    var dest = destEl.value;
    var visa = visaEl.value;
    var education = (eduEl && eduEl.value) || origin;
    if (!origin || !dest || !visa) {
      alert('Select origin, destination and visa type');
      return;
    }

    var btn = document.querySelector('button[onclick*="renderContent"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Loading from database…';
    }

    window.fetchChecklistFromDb(origin, dest, visa, education)
      .then(function (data) {
        paintApiChecklist(data);
      })
      .catch(function (err) {
        console.warn('API unavailable, using local builder', err);
        if (typeof window.renderContent === 'function') {
          // local global-app path
          window.__forceLocalRender = true;
          window.renderContent();
        } else {
          alert('Could not load checklist from database and no local fallback.');
        }
      })
      .finally(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Generate Full Checklist (Merged Research)';
        }
      });
  };

  function paintApiChecklist(data) {
    var originC = data.origin;
    var destC = data.destination;
    var educationC = data.education;

    document.getElementById('emptyState') && document.getElementById('emptyState').classList.add('hidden');
    document.getElementById('results') && document.getElementById('results').classList.remove('hidden');
    document.getElementById('visaFreePanel') && document.getElementById('visaFreePanel').classList.add('hidden');
    document.getElementById('specialPanel') && document.getElementById('specialPanel').classList.add('hidden');

    if (document.getElementById('printTitle')) {
      document.getElementById('printTitle').textContent =
        (originC.flag || '') + ' ' + originC.name + ' → ' + (destC.flag || '') + ' ' + destC.name + ' – ' + data.title;
    }

    if (document.getElementById('summaryCards')) {
      document.getElementById('summaryCards').innerHTML =
        '<div class="bg-white rounded-xl border border-slate-200 p-4 text-center"><div class="text-2xl mb-1">' + (originC.flag || '') + '</div><div class="text-xs text-slate-500">Origin</div><div class="font-semibold text-sm">' + originC.name + '</div></div>' +
        '<div class="bg-white rounded-xl border border-slate-200 p-4 text-center"><div class="text-2xl mb-1">' + (destC.flag || '') + '</div><div class="text-xs text-slate-500">Destination</div><div class="font-semibold text-sm">' + destC.name + '</div></div>' +
        '<div class="bg-white rounded-xl border border-slate-200 p-4 text-center"><div class="text-sm font-bold text-primary-700">' + (data.financial && data.financial.main ? data.financial.main.slice(0, 80) : 'See financial tab') + '</div><div class="text-xs text-slate-500 mt-1">Funds</div></div>' +
        '<div class="bg-white rounded-xl border border-slate-200 p-4 text-center"><div class="text-sm font-bold text-green-700">MySQL</div><div class="text-xs text-slate-500 mt-1">Source: database</div></div>';
    }

    var checklistHtml = '<div class="bg-white rounded-xl border border-slate-200 p-5">';
    checklistHtml += '<h2 class="text-lg font-bold text-primary-800 mb-1">' + (originC.flag || '') + ' ' + originC.name + ' → ' + (destC.flag || '') + ' ' + destC.name + '</h2>';
    checklistHtml += '<p class="text-sm text-slate-600 mb-3">' + data.title + '</p>';
    if (educationC && /student/i.test(data.visa + data.title)) {
      checklistHtml += '<p class="text-xs text-teal-700 mb-3">Nationality: <strong>' + originC.name + '</strong> · Education country: <strong>' + educationC.name + '</strong></p>';
    }
    Object.keys(data.docs || {}).forEach(function (section) {
      checklistHtml += '<div class="mb-4"><h3 class="font-semibold text-sm text-primary-700 mb-2 border-b border-slate-100 pb-1">' + section + '</h3><div class="space-y-1">';
      (data.docs[section] || []).forEach(function (item) {
        checklistHtml += '<label class="check-item flex items-start gap-2.5 px-2 py-1.5 rounded cursor-pointer text-sm"><input type="checkbox" class="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-600"><span>' + item + '</span></label>';
      });
      checklistHtml += '</div></div>';
    });
    if (data.portal && data.portal.url) {
      checklistHtml += '<p class="text-xs text-slate-500 mt-2">Official portal: <a class="text-primary-600 underline" href="' + data.portal.url + '" target="_blank" rel="noopener">' + (data.portal.label || data.portal.url) + '</a></p>';
    }
    checklistHtml += '</div>';
    document.getElementById('panel-checklist') && (document.getElementById('panel-checklist').innerHTML = checklistHtml);

    var f = data.financial || {};
    var finHtml = '<div class="bg-white rounded-xl border border-slate-200 p-5"><h2 class="text-lg font-bold text-primary-800 mb-3">' + (f.title || 'Financial') + '</h2>';
    finHtml += '<div class="bg-primary-50 border border-primary-100 rounded-lg p-4"><div class="font-bold text-primary-800">' + (f.main || '') + '</div>';
    if (f.note) finHtml += '<p class="text-sm text-primary-700 mt-1">' + f.note + '</p>';
    finHtml += '</div></div>';
    document.getElementById('panel-financial') && (document.getElementById('panel-financial').innerHTML = finHtml);

    var steps = (data.process && data.process.steps) || [];
    var procHtml = '<div class="bg-white rounded-xl border border-slate-200 p-5"><h2 class="text-lg font-bold text-primary-800 mb-4">Application process</h2><ol class="space-y-3 mb-6">';
    steps.forEach(function (step, i) {
      procHtml += '<li class="flex gap-3"><div class="w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">' + (i + 1) + '</div><div class="text-sm pt-1">' + step + '</div></li>';
    });
    procHtml += '</ol><div class="bg-slate-50 rounded-lg p-4 text-sm"><strong>Fees:</strong> ' + ((data.process && data.process.fees) || '') + '</div></div>';
    document.getElementById('panel-process') && (document.getElementById('panel-process').innerHTML = procHtml);

    var resHtml = '<div class="bg-white rounded-xl border border-slate-200 p-5"><h2 class="text-lg font-bold text-primary-800 mb-3">Database source</h2>';
    resHtml += '<p class="text-sm text-slate-600">This checklist was loaded from MySQL via the API (not live browser scraping).</p>';
    resHtml += '<p class="text-xs text-slate-500 mt-2">Generated: ' + ((data.meta && data.meta.generated_at) || '') + '</p></div>';
    document.getElementById('panel-research') && (document.getElementById('panel-research').innerHTML = resHtml);

    if (typeof showTab === 'function') showTab('checklist');
  }

  // Hook generate button to API path when DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('button').forEach(function (b) {
      var t = (b.textContent || '');
      if (/Generate Full Checklist/i.test(t)) {
        b.removeAttribute('onclick');
        b.addEventListener('click', function (e) {
          e.preventDefault();
          window.renderContentFromApiOrLocal();
        });
      }
    });
  });
})();
