/* Translates text that scripts add after the page loads (help chat, forms, hero scenes), using
   the same segments as the build (core.js) and the page language's runtime dictionary
   (window.AVX_DICT, from /assets/avx-i18n/<lang>.js). Also keeps added links in the language.
   On localhost, untranslated strings are kept in window.__avxMissing. With ?i18n-record on an
   English page it records every runtime string in window.__avxKeys (scripts/i18n-runtime.py). */
(function () {
  'use strict';
  var I = window.AVXI18N, lang = window.AVX_LANG, dict = window.AVX_DICT || {};
  var record = !lang && /[?&]i18n-record\b/.test(location.search);
  if (!I || (!lang && !record)) return;
  var dev = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var missing = window.__avxMissing = window.__avxMissing || {};
  var keys = window.__avxKeys = window.__avxKeys || {};
  var LINK = /^\/(?!\/|assets\/|ru\/|ja\/|zh\/|ru$|ja$|zh$)/;

  // text a script types or streams in piece by piece never matches a key while it is half
  // written, so such scripts ask for the whole translation first (motion.js: tr())
  if (lang) window.AVXT = function (s) {
    var t = I.lookup(dict, s);
    if (t === undefined && dev) missing[s] = 1;
    return t === undefined ? s : t;
  };

  function relink(node) {
    if (!lang || node.nodeType !== 1) return;
    var as = node.matches && node.matches('a[href]') ? [node] : [];
    as = as.concat([].slice.call(node.querySelectorAll ? node.querySelectorAll('a[href]') : []));
    as.forEach(function (a) {
      var h = a.getAttribute('href');
      if (h && LINK.test(h) && !a.hasAttribute('data-avx-lang')) a.setAttribute('href', '/' + lang + h.replace(/^\/(?=$|[#?])/, ''));
    });
  }

  function run(node) {
    if (record) {
      I.collect(node).forEach(function (k) { keys[k] = 1; });
      return;
    }
    var miss = I.translate(node, dict);
    if (dev) miss.forEach(function (k) { missing[k] = 1; });
    relink(node);
  }

  var busy = false;
  var obs = new MutationObserver(function (list) {
    if (busy) return;
    busy = true;
    var seen = [];
    list.forEach(function (m) {
      var target = m.type === 'childList' ? m.target : m.target.nodeType === 3 ? m.target.parentNode : m.target;
      if (!target || target.nodeType !== 1 || seen.indexOf(target) > -1) return;
      if (target.closest && target.closest('[data-avx-no-i18n]')) return;
      seen.push(target);
    });
    // translate each changed element, skipping ones inside another changed element
    seen.filter(function (el) { return !seen.some(function (o) { return o !== el && o.contains(el); }); }).forEach(run);
    obs.takeRecords();
    busy = false;
  });

  function start() {
    // the static page is already translated at build time; record mode reads it too
    if (record) run(document.body);
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['aria-label', 'title', 'placeholder', 'alt'] });
  }
  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
})();
