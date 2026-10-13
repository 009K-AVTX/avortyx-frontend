/* Avortyx translations: the one piece of code that finds translatable text in a DOM and swaps it.
   Used at build time (scripts/prerender.js, on a linkedom document) to write /ru, /ja and /zh
   pages, and in the browser (runtime.js) for text that scripts add after the page loads.

   A "segment" is a run of text plus inline elements inside one block, e.g. the inside of a <p>.
   Inline elements become numbered placeholders, so a sentence translates as a whole:
     Write to <0>support@avortyx.com</0> for help.   ->   <0>support@avortyx.com</0>までご連絡ください。
   Void inline elements (br, img, icons) are <n/>. The translation must keep every placeholder. */
(function (root) {
  'use strict';

  var INLINE = { A: 1, ABBR: 1, B: 1, BR: 1, CODE: 1, EM: 1, I: 1, IMG: 1, KBD: 1, MARK: 1, S: 1, SMALL: 1, SPAN: 1, STRONG: 1, SUB: 1, SUP: 1, TIME: 1, U: 1, BDI: 1, WBR: 1 };
  var SKIP = { SCRIPT: 1, STYLE: 1, SVG: 1, PRE: 1, TEMPLATE: 1, NOSCRIPT: 1, CANVAS: 1, TEXTAREA: 1, SELECT: 0 };
  var TEXT_BLOCK = { P: 1, LI: 1, H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1, TD: 1, TH: 1, DD: 1, DT: 1, BLOCKQUOTE: 1, FIGCAPTION: 1, SUMMARY: 1 };
  var ATTRS = ['alt', 'title', 'aria-label', 'placeholder', 'data-avx-i18n-text'];
  var LETTERS = /[A-Za-z]{2}/;
  // text that is a name, address, number or code, not prose: left as it is
  var LITERAL = /^(?:[\w.+-]+@[\w-]+\.[\w.]+|https?:\/\/\S+|[@#$€£]?[\d.,:%+\-–\/ ]+[a-zA-Z]{0,3}|Avortyx|AVO AI|Trustpilot|Telegram ID: @\w+|@\w+)$/;

  function tag(n) { return n.nodeType === 1 ? n.tagName.toUpperCase() : ''; }
  function skipped(el) {
    return SKIP[tag(el)] || (el.getAttribute && (el.getAttribute('translate') === 'no' || el.hasAttribute('data-avx-no-i18n')));
  }
  // an element that can sit inside a sentence: inline, with only inline content
  function inlineDeep(el) {
    if (!INLINE[tag(el)] || skipped(el)) return false;
    for (var c = el.firstChild; c; c = c.nextSibling) if (c.nodeType === 1 && !inlineDeep(c)) return false;
    return true;
  }
  function norm(s) { return s.replace(/\s+/g, ' '); }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function unesc(s) { return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'); }

  // serialise a run of sibling nodes to a key; `els` collects the elements behind each placeholder
  function ser(nodes, els) {
    var out = '';
    nodes.forEach(function (n) {
      if (n.nodeType === 3) out += esc(norm(n.data));
      else if (n.nodeType === 1) {
        var k = els.length;
        els.push(n);
        var kids = [];
        for (var c = n.firstChild; c; c = c.nextSibling) kids.push(c);
        var inner = ser(kids, els);
        out += /\S/.test(inner) || kids.length ? '<' + k + '>' + inner + '</' + k + '>' : '<' + k + '/>';
      }
    });
    return out;
  }

  // rebuild nodes from a translated key, reusing the original elements (shallow clones)
  function build(doc, str, els) {
    var frag = [], stack = [{ kids: frag }], re = /<(\/?)(\d+)(\/?)>|[^<]+|</g, m;
    while ((m = re.exec(str))) {
      var top = stack[stack.length - 1];
      if (m[2] === undefined) { top.kids.push(doc.createTextNode(unesc(m[0]))); continue; }
      var src = els[+m[2]];
      if (!src) throw new Error('unknown placeholder ' + m[0]);
      if (m[1]) { stack.pop(); continue; }
      var el = src.cloneNode(false);
      top.kids.push(el);
      if (m[3]) {
        // a void placeholder keeps its original content (an icon <i>, say)
        for (var c = src.firstChild; c; c = c.nextSibling) el.appendChild(c.cloneNode(true));
      } else stack.push({ kids: { push: function (n) { this.el.appendChild(n); }, el: el } });
    }
    return frag;
  }

  // every translatable spot under `node`: {key, set(translation)}
  function segments(node, out) {
    out = out || [];
    if (node.nodeType === 1 && skipped(node)) return out;
    if (node.nodeType === 1) attrSegments(node, out);
    var run = [];
    function flush() {
      if (!run.length) return;
      var nodes = run;
      run = [];
      // elements with no loose text between them are separate items (a lone link, a label and
      // its value), not a sentence: each one is looked at on its own
      var solid = nodes.filter(function (n) { return n.nodeType === 1 || /\S/.test(n.data); });
      // ...except a paragraph-like block made only of <span> pieces (documents exported from a
      // word processor split sentences, even words, across spans): that is one sentence
      var spanSentence = TEXT_BLOCK[tag(node)] && node.closest && node.closest('.mktg-legal-content') && solid.length > 1 && solid.every(function (n) { return tag(n) === 'SPAN'; });
      if (solid.length && !spanSentence && solid.every(function (n) { return n.nodeType === 1; })) {
        solid.forEach(function (el) {
          if (!el.firstChild) return attrSegments(el, out);
          attrSegments(el, out);
          var kids = [];
          for (var k = el.firstChild; k; k = k.nextSibling) kids.push(k);
          var saved = run;
          run = kids;
          flush();
          run = saved;
        });
        return;
      }
      var els = [], raw = ser(nodes, els);
      var key = raw.trim(), plain = unesc(key.replace(/<[^>]+>/g, '')).trim();
      if (!LETTERS.test(plain) || LITERAL.test(plain)) return;
      var lead = /^\s/.test(raw) ? ' ' : '', trail = /\s$/.test(raw) ? ' ' : '';
      out.push({
        key: key,
        set: function (t) {
          var parent = nodes[0].parentNode, doc = parent.ownerDocument, built = build(doc, t, els);
          var anchor = nodes[nodes.length - 1].nextSibling;
          nodes.forEach(function (n) { parent.removeChild(n); });
          if (lead) built.unshift(doc.createTextNode(lead));
          if (trail) built.push(doc.createTextNode(trail));
          built.forEach(function (n) { parent.insertBefore(n, anchor); });
        },
      });
    }
    for (var c = node.firstChild; c; c = c.nextSibling) {
      if (c.nodeType === 3 || (c.nodeType === 1 && inlineDeep(c))) run.push(c);
      else if (c.nodeType === 8) continue;
      else { flush(); if (c.nodeType === 1) segments(c, out); }
    }
    flush();
    // attributes of inline elements inside a sentence (an <img alt>, say)
    return out;
  }

  function attrSegments(el, out) {
    ATTRS.forEach(function (a) {
      var v = el.getAttribute(a);
      if (!v || !LETTERS.test(v) || LITERAL.test(v.trim())) return;
      out.push({ key: norm(v).trim(), set: function (t) { el.setAttribute(a, t); } });
    });
    var t = tag(el);
    if (t === 'INPUT' && /^(submit|button)$/i.test(el.getAttribute('type') || '')) {
      var v = el.getAttribute('value');
      if (v && LETTERS.test(v)) out.push({ key: norm(v).trim(), set: function (x) { el.setAttribute('value', x); } });
    }
    // inline descendants of a sentence are not visited by segments(), so cover their attributes
    for (var c = el.firstChild; c; c = c.nextSibling) if (c.nodeType === 1 && inlineDeep(c)) attrSegments(c, out);
  }

  // head: <title>, description and share text
  function headSegments(doc, out) {
    var title = doc.querySelector('title');
    if (title && LETTERS.test(title.textContent)) out.push({ key: norm(title.textContent).trim(), set: function (t) { title.textContent = t; } });
    var metas = doc.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]');
    for (var i = 0; i < metas.length; i++) (function (m) {
      var v = m.getAttribute('content');
      if (v && LETTERS.test(v)) out.push({ key: norm(v).trim(), set: function (t) { m.setAttribute('content', t); } });
    })(metas[i]);
    return out;
  }

  // numbers outside placeholders, for template keys: "Bridged in {#}ms" matches "Bridged in 84ms"
  var NUM = /(<[^>]*>)|\d+(?:[.,]\d+)*/g;
  function template(key) { return key.replace(NUM, function (m, t) { return t || '{#}'; }); }
  // keys compared with every kind of space (nbsp, em space, zero-width) collapsed to one
  var SPACES = /[\s\u00a0\u2000-\u200b\u3000]+/g;
  var canonMaps = typeof WeakMap === 'function' ? new WeakMap() : null;
  function canon(dict, key) {
    if (!canonMaps) return undefined;
    var m = canonMaps.get(dict);
    if (!m) {
      m = {};
      Object.keys(dict).forEach(function (k) { m[k.replace(SPACES, ' ')] = dict[k]; });
      canonMaps.set(dict, m);
    }
    return m[key.replace(SPACES, ' ')];
  }
  function lookup(dict, key) {
    if (dict[key] !== undefined) return dict[key];
    var c = canon(dict, key);
    if (c !== undefined) return c;
    // generated labels joined with " · " (offer · source, name · phone): translate piece by piece
    if (key.indexOf(' · ') > -1 && key.indexOf('<') < 0) {
      var changed = false;
      var parts = key.split(' · ').map(function (part) {
        var t = dict[part] !== undefined ? dict[part] : canon(dict, part);
        if (t === undefined && /\d/.test(part)) t = lookup(dict, part);
        if (t !== undefined && t !== part) { changed = true; return t; }
        return part;
      });
      if (changed) return parts.join(' · ');
    }
    if (!/\d/.test(key.replace(/<[^>]*>/g, ''))) return undefined;
    var tpl = dict[template(key)];
    if (tpl === undefined) return undefined;
    var nums = [];
    key.replace(NUM, function (m, t) { if (!t) nums.push(m); return m; });
    var i = 0;
    return tpl.replace(/\{#\}/g, function () { return nums[i++] || ''; });
  }

  // translate a subtree (or a whole document with head); returns the keys with no translation
  function translate(node, dict, withHead) {
    var segs = segments(node.body || node);
    if (withHead) headSegments(node, segs);
    var missing = [];
    segs.forEach(function (s) {
      var t = lookup(dict, s.key);
      if (t === undefined) missing.push(s.key);
      else if (t !== s.key) {
        try { s.set(t); } catch (e) { missing.push(s.key); }
      }
    });
    return missing;
  }

  function collect(node, withHead) {
    var segs = segments(node.body || node);
    if (withHead) headSegments(node, segs);
    return segs.map(function (s) { return s.key; });
  }

  root.AVXI18N = { segments: segments, translate: translate, collect: collect, template: template, lookup: lookup, LANGS: ['ru', 'ja', 'zh'] };
})(typeof globalThis !== 'undefined' ? globalThis : this);
