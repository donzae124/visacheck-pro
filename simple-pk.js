/**
 * simple-pk.js – Pakistan origin fixed; limited destinations
 * Visa option values match app.js DB keys exactly.
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

  var _origRender = null;

  function install() {
    if (!_origRender && typeof window.renderContent === 'function') {
      _origRender = window.renderContent;
    }
    window.renderContent = function () {
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
      var dbVisa = uiVisa;
      // Remap UI codes that differ from DB
      if (dbCountry === 'uk' && dbVisa === 'business') dbVisa = 'visit';
      if (dbCountry === 'uae' && dbVisa === 'visit') dbVisa = 'tourist';
      if (dbCountry === 'uae' && dbVisa === 'work') dbVisa = 'employment';
      if (dbCountry === 'uae' && dbVisa === 'family') dbVisa = 'tourist';

      function ensureOption(select, value) {
        for (var i = 0; i < select.options.length; i++) {
          if (select.options[i].value === value) return;
        }
        var o = document.createElement('option');
        o.value = value;
        o.textContent = value;
        select.appendChild(o);
      }

      ensureOption(cEl, dbCountry);
      cEl.value = dbCountry;
      ensureOption(vEl, dbVisa);
      vEl.value = dbVisa;

      if (typeof DB !== 'undefined') {
        var keys = (DB[dbCountry] && DB[dbCountry].visas) ? Object.keys(DB[dbCountry].visas) : [];
        if (!DB[dbCountry] || !DB[dbCountry].visas || !DB[dbCountry].visas[dbVisa]) {
          alert('Checklist data not available for ' + dbCountry + ' / ' + dbVisa + '.\nAvailable: ' + keys.join(', '));
          cEl.value = uiCountry;
          onCountryChangePK();
          vEl.value = uiVisa;
          return;
        }
      }

      try {
        if (typeof _origRender === 'function') _origRender();
        else alert('app.js not loaded correctly.');
      } finally {
        cEl.value = uiCountry;
        onCountryChangePK();
        vEl.value = uiVisa;
      }
    };
    window.onCountryChange = onCountryChangePK;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      install();
      var c = document.getElementById('country');
      if (c) {
        c.removeAttribute('onchange');
        c.addEventListener('change', onCountryChangePK);
      }
    });
  } else {
    install();
  }
})();
