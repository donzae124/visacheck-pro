/* global-app.js – Global origin/destination + student education country
   Loaded AFTER app.js so it can override selectors and render entry points.
*/

(function () {
  const DEST_KEY_MAP = {
    gb: 'uk', us: 'usa', ae: 'uae', sa: 'saudi', es: 'spain', de: 'germany',
    fr: 'france', it: 'italy', nl: 'netherlands', ca: 'canada', au: 'australia',
    nz: 'newzealand', tr: 'turkey', my: 'malaysia', cn: 'china', jp: 'japan',
    sg: 'singapore', qa: 'qatar'
  };

  const GENERIC_VISA_TYPES = [
    ['tourist', 'Tourist / Visit'],
    ['business', 'Business'],
    ['student', 'Student'],
    ['work', 'Work / Employment'],
    ['family', 'Family / Spouse / Partner'],
    ['transit', 'Transit']
  ];

  function resolveDestKey(code) {
    return DEST_KEY_MAP[code] || code;
  }

  function isStudentVisa(visa, title) {
    return /student|study|f-1|500/i.test(String(visa || '') + ' ' + String(title || ''));
  }

  function buildPairChecklist(originC, destC, visa, educationC) {
    var destKey = resolveDestKey(destC.code);
    var rich = null;
    try {
      if (typeof DB !== 'undefined' && DB[destKey] && DB[destKey].visas) {
        // map generic names to DB keys
        var vkey = visa;
        if (visa === 'family' && DB[destKey].visas.spouse) vkey = 'spouse';
        if (visa === 'tourist' && DB[destKey].visas.visit) vkey = 'visit';
        if (visa === 'tourist' && DB[destKey].visas.visitor) vkey = 'visitor';
        if (visa === 'tourist' && DB[destKey].visas.b1b2) vkey = 'b1b2';
        if (visa === 'work' && DB[destKey].visas.employment) vkey = 'employment';
        if (DB[destKey].visas[vkey]) rich = DB[destKey].visas[vkey];
        else if (DB[destKey].visas[visa]) rich = DB[destKey].visas[visa];
      }
    } catch (e) {}

    var portal = (typeof portalForDest === 'function') ? portalForDest(destC.code) : null;
    var titles = {
      tourist: 'Tourist / Visit Visa',
      business: 'Business Visa',
      student: 'Student Visa',
      work: 'Work / Employment Visa',
      family: 'Family / Spouse / Partner Visa',
      transit: 'Transit Visa'
    };

    if (rich) {
      // Clone-ish shallow copy and inject origin-specific identity lines
      var docs = {};
      Object.keys(rich.docs || {}).forEach(function (k) {
        docs[k] = (rich.docs[k] || []).slice();
      });
      docs['Origin nationality (' + originC.name + ')'] = [
        'Valid passport issued by / for nationality of ' + originC.name,
        'National ID / civil status documents from ' + originC.name + ' as applicable',
        'Proof of legal status in country of residence if different from nationality'
      ];
      if (isStudentVisa(visa, rich.title) && educationC) {
        docs['Country of education (' + educationC.name + ')'] = [
          'Academic transcripts and certificates from institutions in ' + educationC.name,
          educationC.code !== originC.code
            ? 'Equivalency / recognition if required by ' + destC.name + ' (e.g. Ecctis for UK)'
            : 'Standard academic documents from ' + educationC.name,
          'Medium of instruction letter if claiming English-taught programme',
          'Explain study timeline in statement of purpose'
        ];
      }
      if (portal) {
        docs['Official destination source'] = [
          'Verify current rules on official portal: ' + portal
        ];
      }
      return {
        title: rich.title,
        summary: rich.summary,
        docs: docs,
        financial: rich.financial,
        process: rich.process,
        research: (rich.research || []).concat([
          'Corridor: ' + originC.name + ' → ' + destC.name,
          portal ? 'Official portal: ' + portal : 'Confirm official immigration website for ' + destC.name
        ])
      };
    }

    // Destination-aware structured checklist (not a one-line generic stub)
    var title = titles[visa] || 'Visa';
    var docs = {
      'Identity (nationality: ' + originC.name + ')': [
        'Passport of ' + originC.name + ' valid for the period required by ' + destC.name,
        'Passport bio page copy and prior travel stamps/visas',
        'Photographs meeting ' + destC.name + ' specifications',
        'National ID from ' + originC.name + ' if used in the application pack'
      ],
      'Purpose (' + title + ' to ' + destC.name + ')': [
        'Application form for ' + destC.name + ' (' + title + ')',
        'Cover letter stating nationality (' + originC.name + '), destination purpose and dates'
      ],
      'Financial evidence': [
        'Bank statements showing funds available for stay in ' + destC.name,
        'Income / employment / business proof from country of residence',
        'Sponsor documents if ' + destC.name + ' allows third-party support for this visa class'
      ],
      'Ties & residence': [
        'Evidence of ties to home/residence country (employment, family, property, studies)',
        'If applying from a third country, proof of legal stay there'
      ],
      'Compliance for ' + destC.name: [
        portal ? 'Follow document list on: ' + portal : 'Use official immigration site of ' + destC.name,
        'Biometrics / VAC appointment if required for nationals of ' + originC.name,
        'Police certificate / medical / TB test if required for this nationality–destination pair',
        'Translations and legalisation/apostille if required by ' + destC.name
      ]
    };

    if (visa === 'student') {
      docs['Studies in ' + destC.name] = [
        'Offer / CoE / CAS / I-20 / admission letter from institution in ' + destC.name,
        'Proof of tuition payment or blocked account if required',
        'Language test scores if required by ' + destC.name + ' or the school'
      ];
      if (educationC) {
        docs['Prior education (' + educationC.name + ')'] = [
          'Transcripts and graduation documents from ' + educationC.name,
          educationC.code !== originC.code
            ? 'Credential evaluation if ' + destC.name + ' requires it for foreign prior study'
            : 'Documents issued in nationality country (' + originC.name + ')'
        ];
      }
    }
    if (visa === 'work') {
      docs['Employment in ' + destC.name] = [
        'Job offer / employment contract',
        'Work permit / labour approval / CoS / petition if required before visa',
        'CV and qualification evidence'
      ];
    }
    if (visa === 'family') {
      docs['Family relationship'] = [
        'Marriage / partnership / birth certificates',
        'Sponsor status evidence in ' + destC.name,
        'Proof of ongoing relationship and cohabitation plans if required'
      ];
    }
    if (visa === 'business') {
      docs['Business purpose'] = [
        'Invitation from host company in ' + destC.name,
        'Applicant company registration and role letter from ' + originC.name
      ];
    }

    return {
      title: title,
      summary: {
        threshold: 'Per ' + destC.name + ' official rules',
        english: 'Varies',
        grant: 'Varies',
        vac: 'Embassy / VAC / online portal of ' + destC.name
      },
      docs: docs,
      financial: {
        title: 'Financial requirement (' + destC.name + ')',
        main: 'Funds and income evidence as required by ' + destC.name + ' for ' + title + ' for nationals of ' + originC.name,
        note: portal ? 'Confirm amounts and evidence types on ' + portal : 'Confirm on official ' + destC.name + ' immigration website',
        savings: '',
        methods: []
      },
      process: {
        steps: [
          'Check whether nationals of ' + originC.name + ' need a visa for ' + destC.name + ' for this purpose',
          'Create application on the official channel of ' + destC.name,
          'Prepare nationality documents from ' + originC.name + ' and purpose documents for ' + destC.name,
          'Attend biometrics if required',
          'Track decision and travel only after correct visa/status is issued'
        ],
        fees: 'Official fee schedule of ' + destC.name
      },
      research: [
        'Pair-specific pack: ' + originC.name + ' → ' + destC.name + ' / ' + title,
        portal ? 'Primary official source: ' + portal : 'Locate official immigration authority of ' + destC.name,
        'Live scrape signals (if loaded) may list portal fetch status for this destination'
      ]
    };
  }

  function toggleEducationField() {
    var visa = document.getElementById('visaType');
    var wrap = document.getElementById('educationCountryWrap');
    if (!visa || !wrap) return;
    var show = isStudentVisa(visa.value, '');
    wrap.classList.toggle('hidden', !show);
    if (show) {
      var origin = document.getElementById('originCountry');
      var edu = document.getElementById('educationCountry');
      if (origin && edu && origin.value && !edu.dataset.userSet) {
        edu.value = origin.value;
      }
    }
  }

  function onDestChangeGlobal() {
    var dest = document.getElementById('destCountry');
    var visaSel = document.getElementById('visaType');
    if (!dest || !visaSel) return;
    visaSel.innerHTML = '<option value="">— Select visa type —</option>';
    visaSel.disabled = !dest.value;
    if (!dest.value) return;
    var key = resolveDestKey(dest.value);
    var options = (typeof visaOptions !== 'undefined' && visaOptions[key]) ? visaOptions[key] : GENERIC_VISA_TYPES;
    options.forEach(function (pair) {
      var opt = document.createElement('option');
      opt.value = pair[0];
      opt.textContent = pair[1];
      visaSel.appendChild(opt);
    });
    toggleEducationField();
  }

  // Override generate
  window.renderContent = function () {
    var originEl = document.getElementById('originCountry');
    var destEl = document.getElementById('destCountry') || document.getElementById('country');
    var visaEl = document.getElementById('visaType');
    if (!originEl || !destEl || !visaEl) {
      alert('Page selectors missing. Re-upload index.html.');
      return;
    }
    var origin = originEl.value;
    var dest = destEl.value;
    var visa = visaEl.value;
    if (!origin || !dest || !visa) {
      alert('Please select origin (nationality), destination and visa type.');
      return;
    }
    if (origin === dest) {
      alert('Origin and destination must be different.');
      return;
    }
    var originC = countryByCode(origin);
    var destC = countryByCode(dest);
    if (!originC || !destC) {
      alert('Unknown country code.');
      return;
    }
    var eduEl = document.getElementById('educationCountry');
    var eduCode = (eduEl && eduEl.value) ? eduEl.value : origin;
    var educationC = countryByCode(eduCode) || originC;

    var data = buildPairChecklist(originC, destC, visa, educationC);

    document.getElementById('visaFreePanel') && document.getElementById('visaFreePanel').classList.add('hidden');
    var sp = document.getElementById('specialPanel');
    if (sp) sp.classList.add('hidden');
    document.getElementById('emptyState') && document.getElementById('emptyState').classList.add('hidden');
    document.getElementById('results') && document.getElementById('results').classList.remove('hidden');

    var s = data.summary;
    document.getElementById('printTitle') && (document.getElementById('printTitle').textContent =
      originC.flag + ' ' + originC.name + ' → ' + destC.flag + ' ' + destC.name + ' – ' + data.title);

    if (document.getElementById('summaryCards')) {
      document.getElementById('summaryCards').innerHTML =
        '<div class="bg-white rounded-xl border border-slate-200 p-4 text-center"><div class="text-2xl mb-1">' + originC.flag + '</div><div class="text-xs text-slate-500">Origin</div><div class="font-semibold text-sm">' + originC.name + '</div></div>' +
        '<div class="bg-white rounded-xl border border-slate-200 p-4 text-center"><div class="text-2xl mb-1">' + destC.flag + '</div><div class="text-xs text-slate-500">Destination</div><div class="font-semibold text-sm">' + destC.name + '</div></div>' +
        '<div class="bg-white rounded-xl border border-slate-200 p-4 text-center"><div class="text-lg font-bold text-primary-700">' + s.threshold + '</div><div class="text-xs text-slate-500 mt-1">Funds / Threshold</div></div>' +
        '<div class="bg-white rounded-xl border border-slate-200 p-4 text-center"><div class="text-lg font-bold text-primary-700">' + s.vac + '</div><div class="text-xs text-slate-500 mt-1">Application channel</div></div>';
    }

    var checklistHtml = '<div class="bg-white rounded-xl border border-slate-200 p-5">';
    checklistHtml += '<h2 class="text-lg font-bold text-primary-800 mb-1">' + originC.flag + ' ' + originC.name + ' → ' + destC.flag + ' ' + destC.name + '</h2>';
    checklistHtml += '<p class="text-sm text-slate-600 mb-1">' + data.title + '</p>';
    if (isStudentVisa(visa, data.title)) {
      checklistHtml += '<p class="text-xs text-teal-700 mb-3">Nationality: <strong>' + originC.name + '</strong> · Country of education: <strong>' + educationC.name + '</strong></p>';
    }
    Object.keys(data.docs).forEach(function (section) {
      checklistHtml += '<div class="mb-4"><h3 class="font-semibold text-sm text-primary-700 mb-2 border-b border-slate-100 pb-1">' + section + '</h3><div class="space-y-1">';
      (data.docs[section] || []).forEach(function (item) {
        checklistHtml += '<label class="check-item flex items-start gap-2.5 px-2 py-1.5 rounded cursor-pointer text-sm"><input type="checkbox" class="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-600"><span>' + item + '</span></label>';
      });
      checklistHtml += '</div></div>';
    });
    checklistHtml += '</div>';
    document.getElementById('panel-checklist') && (document.getElementById('panel-checklist').innerHTML = checklistHtml);

    var f = data.financial;
    var finHtml = '<div class="bg-white rounded-xl border border-slate-200 p-5"><h2 class="text-lg font-bold text-primary-800 mb-3">' + f.title + '</h2>';
    finHtml += '<div class="bg-primary-50 border border-primary-100 rounded-lg p-4 mb-4"><div class="font-bold text-primary-800">' + f.main + '</div>';
    if (f.note) finHtml += '<p class="text-sm text-primary-700 mt-1">' + f.note + '</p>';
    finHtml += '</div></div>';
    document.getElementById('panel-financial') && (document.getElementById('panel-financial').innerHTML = finHtml);

    var p = data.process;
    var procHtml = '<div class="bg-white rounded-xl border border-slate-200 p-5"><h2 class="text-lg font-bold text-primary-800 mb-4">Application process</h2><ol class="space-y-3 mb-6">';
    (p.steps || []).forEach(function (step, i) {
      procHtml += '<li class="flex gap-3"><div class="w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">' + (i + 1) + '</div><div class="text-sm pt-1">' + step + '</div></li>';
    });
    procHtml += '</ol><div class="bg-slate-50 rounded-lg p-4 text-sm"><strong>Fees:</strong> ' + (p.fees || '') + '</div></div>';
    document.getElementById('panel-process') && (document.getElementById('panel-process').innerHTML = procHtml);

    var resHtml = '<div class="bg-white rounded-xl border border-slate-200 p-5"><h2 class="text-lg font-bold text-primary-800 mb-3">Research notes</h2><ul class="space-y-2 text-sm">';
    (data.research || []).forEach(function (r) {
      resHtml += '<li class="flex gap-2"><span class="text-green-500">✓</span> ' + r + '</li>';
    });
    resHtml += '</ul><p class="text-xs text-slate-500 mt-4">Deep statutory text differs by nationality and changes often. This pack is corridor-specific; always re-check the official destination portal before filing.</p></div>';
    document.getElementById('panel-research') && (document.getElementById('panel-research').innerHTML = resHtml);

    if (typeof showTab === 'function') showTab('checklist');
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof fillCountrySelect === 'function') {
      fillCountrySelect(document.getElementById('originCountry'), '— Select origin country —');
      fillCountrySelect(document.getElementById('destCountry'), '— Select destination —');
      fillCountrySelect(document.getElementById('educationCountry'), '— Same as origin nationality (default) —');
    }
    var dest = document.getElementById('destCountry') || document.getElementById('country');
    var origin = document.getElementById('originCountry');
    var visa = document.getElementById('visaType');
    var edu = document.getElementById('educationCountry');
    if (dest) {
      dest.removeAttribute('onchange');
      dest.addEventListener('change', onDestChangeGlobal);
    }
    if (origin) origin.addEventListener('change', function () {
      if (edu && !edu.dataset.userSet && origin.value) edu.value = origin.value;
      toggleEducationField();
    });
    if (visa) {
      visa.addEventListener('change', toggleEducationField);
    }
    if (edu) edu.addEventListener('change', function () { edu.dataset.userSet = '1'; });
  });
})();
