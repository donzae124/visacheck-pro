/**
 * simple-pk.js – Pakistan origin fixed; limited destinations only
 * Loaded after app.js. Uses existing DB + visaOptions from app.js / extra-data.js
 */
(function () {
  const DEST_VISAS = {
    uk: [
      ['visit', 'Standard Visitor'],
      ['business', 'Business Visitor'],
      ['student', 'Student visa'],
      ['spouse', 'Spouse / Partner (Family)'],
      ['work', 'Skilled Worker']
    ],
    usa: [
      ['b1b2', 'B-1/B-2 Visitor'],
      ['f1', 'F-1 Student'],
      ['work', 'Work (H-1B / other – check category)']
    ],
    canada: [
      ['visitor', 'Visitor (TRV)'],
      ['student', 'Study permit'],
      ['work', 'Work permit'],
      ['family', 'Family sponsorship']
    ],
    australia: [
      ['visitor', 'Visitor (600)'],
      ['student', 'Student (500)'],
      ['work', 'Work / TSS']
    ],
    europe: [
      ['tourist', 'Schengen Tourist (Type C)'],
      ['business', 'Schengen Business (Type C)'],
      ['student', 'National Student (Type D)']
    ],
    china: [
      ['tourist', 'Tourist (L)'],
      ['business', 'Business (M)'],
      ['student', 'Student (X)']
    ],
    gulf: [
      ['visit', 'Visit / Tourist'],
      ['work', 'Employment'],
      ['family', 'Family residency']
    ],
    saudi: [
      ['visit', 'Visit / Tourist'],
      ['work', 'Work / Iqama route'],
      ['family', 'Family']
    ],
    malaysia: [
      ['tourist', 'Tourist / Social'],
      ['student', 'Student'],
      ['work', 'Employment']
    ]
  };

  // Map UI destination to DB keys used in app.js
  function resolveDbKey() {
    var c = document.getElementById('country');
    if (!c || !c.value) return null;
    if (c.value === 'europe') {
      var e = document.getElementById('europeCountry');
      return (e && e.value) || 'spain';
    }
    if (c.value === 'gulf') {
      var g = document.getElementById('gulfCountry');
      return (g && g.value) || 'uae';
    }
    return c.value; // uk, usa, canada, australia, china, saudi, malaysia
  }

  function onCountryChangePK() {
    var c = document.getElementById('country');
    var visa = document.getElementById('visaType');
    var eu = document.getElementById('europeCountryWrap');
    var gu = document.getElementById('gulfCountryWrap');
    if (!c || !visa) return;

    if (eu) eu.classList.toggle('hidden', c.value !== 'europe');
    if (gu) gu.classList.toggle('hidden', c.value !== 'gulf');

    visa.innerHTML = '<option value="">— Select visa type —</option>';
    visa.disabled = !c.value;
    if (!c.value) return;

    var list = DEST_VISAS[c.value] || [];
    list.forEach(function (pair) {
      var opt = document.createElement('option');
      opt.value = pair[0];
      opt.textContent = pair[1];
      visa.appendChild(opt);
    });
  }

  // Wrap original renderContent to use resolved Europe/Gulf country key
  var _origRender = window.renderContent;
  window.renderContent = function () {
    var c = document.getElementById('country');
    if (!c || !c.value) {
      alert('Please select a destination.');
      return;
    }
    var visa = document.getElementById('visaType');
    if (!visa || !visa.value) {
      alert('Please select a visa type.');
      return;
    }

    // Temporarily set #country value to concrete DB key for legacy renderContent
    var uiVal = c.value;
    var dbKey = resolveDbKey();
    var visaVal = visa.value;

    // Map visa codes to DB keys where needed
    var visaMap = {
      visit: 'visit',
      visitor: 'visitor',
      business: 'business',
      student: 'student',
      spouse: 'spouse',
      family: 'family',
      work: 'work',
      tourist: 'tourist',
      b1b2: 'b1b2',
      f1: 'f1'
    };

    // Point country select to concrete key so old DB[country] lookup works
    var hadOption = false;
    for (var i = 0; i < c.options.length; i++) {
      if (c.options[i].value === dbKey) { hadOption = true; break; }
    }
    if (!hadOption) {
      var o = document.createElement('option');
      o.value = dbKey;
      o.textContent = dbKey;
      c.appendChild(o);
    }
    c.value = dbKey;

    // Ensure visa option exists for DB
    var vHad = false;
    for (var j = 0; j < visa.options.length; j++) {
      if (visa.options[j].value === visaVal) { vHad = true; break; }
    }
    if (!vHad) {
      var vo = document.createElement('option');
      vo.value = visaVal;
      vo.textContent = visaVal;
      visa.appendChild(vo);
      visa.value = visaVal;
    }

    try {
      if (typeof _origRender === 'function') {
        _origRender();
      } else {
        alert('Core app.js renderContent not found.');
      }
    } finally {
      // restore UI selection
      c.value = uiVal;
      onCountryChangePK();
      visa.value = visaVal;
    }
  };

  window.onCountryChange = onCountryChangePK;

  document.addEventListener('DOMContentLoaded', function () {
    var c = document.getElementById('country');
    if (c) {
      c.removeAttribute('onchange');
      c.addEventListener('change', onCountryChangePK);
    }
    var e = document.getElementById('europeCountry');
    var g = document.getElementById('gulfCountry');
    if (e) e.addEventListener('change', function () {});
    if (g) g.addEventListener('change', function () {});
    console.log('VisaCheck Pro – Pakistan origin, limited destinations');
  });
})();
