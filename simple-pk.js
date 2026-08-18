/**
 * simple-pk.js – Pakistan fixed origin; limited destinations
 * Visa values match app.js DB keys. Entry: generateChecklist()
 */
(function () {
  const DEST_VISAS = {
    uk: [
      ['visit', 'Standard Visitor'],
      ['business', 'Business / Standard Visitor'],
      ['student', 'Student visa'],
      ['spouse', 'Spouse / Partner (Family)'],
      ['work', 'Skilled Worker']
    ],
    usa: [
      ['b1b2', 'B-1/B-2 Visitor'],
      ['student', 'F-1 Student'],
      ['work', 'Work (H-1B / L-1 etc.)']
    ],
    canada: [
      ['visitor', 'Visitor (TRV)'],
      ['student', 'Study permit'],
      ['spouse', 'Spouse sponsorship']
    ],
    australia: [
      ['visitor', 'Visitor (600)'],
      ['student', 'Student (500)'],
      ['work', 'Work / TSS']
    ],
    europe: [
      ['tourist', 'Schengen Tourist (Type C)'],
      ['business', 'Schengen Business (Type C)'],
      ['student', 'Student / National']
    ],
    china: [
      ['tourist', 'Tourist (L)'],
      ['business', 'Business (M)'],
      ['student', 'Student (X)']
    ],
    gulf: [
      ['tourist', 'Tourist / Visit'],
      ['employment', 'Employment / Work'],
      ['transit', 'Transit']
    ],
    saudi: [
      ['visit', 'Visit / Tourist'],
      ['work', 'Work / Employment'],
      ['umrah', 'Umrah']
    ],
    malaysia: [
      ['tourist', 'Tourist / Social Visit'],
      ['student', 'Student']
    ]
  };

  function resolveDbCountry() {
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
    return c.value;
  }

  function resolveDbVisa(dbCountry, uiVisa) {
    var v = uiVisa;
    if (dbCountry === 'uk' && v === 'business') v = 'visit';
    if (dbCountry === 'uae' && v === 'visit') v = 'tourist';
    if (dbCountry === 'uae' && v === 'work') v = 'employment';
    if (dbCountry === 'usa' && v === 'f1') v = 'student';
    if ((dbCountry === 'kuwait' || dbCountry === 'bahrain' || dbCountry === 'oman') && v === 'work') v = 'employment';
    if ((dbCountry === 'kuwait' || dbCountry === 'bahrain' || dbCountry === 'oman') && v === 'visit') v = 'tourist';
    return v;
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
    (DEST_VISAS[c.value] || []).forEach(function (pair) {
      var opt = document.createElement('option');
      opt.value = pair[0];
      opt.textContent = pair[1];
      visa.appendChild(opt);
    });
  }

  window.onCountryChange = onCountryChangePK;

  window.generateChecklist = function () {
    var cEl = document.getElementById('country');
    var vEl = document.getElementById('visaType');
    if (!cEl || !cEl.value) {
      alert('Please select a destination.');
      return;
    }
    if (!vEl || !vEl.value) {
      alert('Please select a visa type.');
      return;
    }

    var uiCountry = cEl.value;
    var uiVisa = vEl.value;
    var dbCountry = resolveDbCountry();
    var dbVisa = resolveDbVisa(dbCountry, uiVisa);

    if (typeof DB === 'undefined') {
      alert('App data not loaded. Re-upload app.js.');
      return;
    }
    if (!DB[dbCountry] || !DB[dbCountry].visas || !DB[dbCountry].visas[dbVisa]) {
      var avail = (DB[dbCountry] && DB[dbCountry].visas) ? Object.keys(DB[dbCountry].visas).join(', ') : 'country missing';
      alert('Checklist data not available for ' + dbCountry + ' / ' + dbVisa + '.\nAvailable in app.js: ' + avail);
      return;
    }

    // Point selects at DB keys so original renderContent reads them
    function ensure(select, value) {
      var found = false;
      for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value === value) { found = true; break; }
      }
      if (!found) {
        var o = document.createElement('option');
        o.value = value;
        o.textContent = value;
        select.appendChild(o);
      }
      select.value = value;
    }

    ensure(cEl, dbCountry);
    ensure(vEl, dbVisa);

    try {
      if (typeof window.__coreRenderContent === 'function') {
        window.__coreRenderContent();
      } else if (typeof renderContent === 'function') {
        // unwrap if we previously wrapped
        renderContent();
      }
    } finally {
      cEl.value = uiCountry;
      onCountryChangePK();
      vEl.value = uiVisa;
    }
  };

  // Capture core renderContent once app.js has defined it
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof window.renderContent === 'function' && !window.__coreRenderContent) {
      window.__coreRenderContent = window.renderContent;
    }
    // Always use generateChecklist for the main button path
    window.renderContent = window.generateChecklist;

    var c = document.getElementById('country');
    if (c) {
      c.removeAttribute('onchange');
      c.addEventListener('change', onCountryChangePK);
    }
    console.log('simple-pk ready. USA student present:', !!(window.DB && DB.usa && DB.usa.visas && DB.usa.visas.student));
  });
})();
