/*!
  * Bootstrap v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).bootstrap=t(e.Popper)}(this,(function(e){"use strict";function t(e){const t=Object.create(null,{[Symbol.toStringTag]:{"value":"Module"}});if(e)for(const n in e)if("default"!==n){const i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{"enumerable":!0,"get":()=>e[n]})}return t.default=e,Object.freeze(t)}function n(e,t){return t&&`${t}::${U++}`||e.uidEvent||U++}function i(e){const t=n(e);return e.uidEvent=t,W[t]=W[t]||{},W[t]}function o(e,t){return function n(i){return p(i,{"delegateTarget":e}),n.oneOff&&G.off(e,i.type,t),t.apply(e,[i])}}function r(e,t,n){return function i(o){const r=e.querySelectorAll(t);for(let{"target":s}=o;s&&s!==this;s=s.parentNode)for(const a of r)if(a===s)return p(o,{"delegateTarget":s}),i.oneOff&&G.off(e,o.type,t,n),n.apply(s,[o])}}function s(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function a(e,t,n){const i="string"==typeof t,o=i?n:t||n;let r=u(e);return Y.has(r)||(r=e),[i,o,r]}function l(e,t,l,c,d){if("string"!=typeof t||!e)return;let[u,p,f]=a(t,l,c);if(t in X){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};p=e(p)}const h=i(e),m=h[f]||(h[f]={}),g=s(m,p,u?l:null);if(g)return void(g.oneOff=g.oneOff&&d);const v=n(p,t.replace(z,"")),y=u?r(e,l,p):o(e,p);y.delegationSelector=u?l:null,y.callable=p,y.oneOff=d,y.uidEvent=v,m[v]=y,e.addEventListener(f,y,u)}function c(e,t,n,i,o){const r=s(t[n],i,o);r&&(e.removeEventListener(n,r,Boolean(o)),delete t[n][r.uidEvent])}function d(e,t,n,i){const o=t[n]||{};for(const[r,s]of Object.entries(o))r.includes(i)&&c(e,t,n,s.callable,s.delegationSelector)}function u(e){return e=e.replace(R,""),X[e]||e}function p(e,t={}){for(const[n,i]of Object.entries(t))try{e[n]=i}catch(t){Object.defineProperty(e,n,{"configurable":!0,"get":()=>i})}return e}function f(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function h(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}function m(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const i=(new window.DOMParser).parseFromString(e,"text/html"),o=[].concat(...i.body.querySelectorAll("*"));for(const e of o){const n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const i=[].concat(...e.attributes),o=[].concat(t["*"]||[],t[n]||[]);for(const t of i)Fi(t,o)||e.removeAttribute(t.nodeName)}return i.body.innerHTML}const g=t(e),v=new Map,y={"set"(e,t,n){v.has(e)||v.set(e,new Map);const i=v.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},"get":(e,t)=>v.has(e)&&v.get(e).get(t)||null,"remove"(e,t){if(!v.has(e))return;const n=v.get(e);n.delete(t),0===n.size&&v.delete(e)}},b=1e6,w=1e3,_="transitionend",x=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),k=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),T=e=>{do{e+=Math.floor(Math.random()*b)}while(document.getElementById(e));return e},C=e=>{if(!e)return 0;let{"transitionDuration":t,"transitionDelay":n}=window.getComputedStyle(e);const i=Number.parseFloat(t),o=Number.parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*w):0},E=e=>{e.dispatchEvent(new Event(_))},S=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),A=e=>S(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(x(e)):null,$=e=>{if(!S(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},O=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),j=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?j(e.parentNode):null},I=()=>{},F=e=>{e.offsetHeight},L=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,N=[],D=e=>{"loading"===document.readyState?(N.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of N)e()})),N.push(e)):e()},P=()=>"rtl"===document.documentElement.dir,H=e=>{D((()=>{const t=L();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}}))},M=(e,t=[],n=e)=>"function"==typeof e?e.call(...t):n,V=(e,t,n=!0)=>{if(!n)return void M(e);const i=5,o=C(t)+i;let r=!1;const s=({"target":n})=>{n===t&&(r=!0,t.removeEventListener(_,s),M(e))};t.addEventListener(_,s),setTimeout((()=>{r||E(t)}),o)},q=(e,t,n,i)=>{const o=e.length;let r=e.indexOf(t);return-1===r?!n&&i?e[o-1]:e[0]:(r+=n?1:-1,i&&(r=(r+o)%o),e[Math.max(0,Math.min(r,o-1))])},z=/[^.]*(?=\..*)\.|.*/,R=/\..*/,B=/::\d+$/,W={};let U=1;const X={"mouseenter":"mouseover","mouseleave":"mouseout"},Y=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]),G={"on"(e,t,n,i){l(e,t,n,i,!1)},"one"(e,t,n,i){l(e,t,n,i,!0)},"off"(e,t,n,o){if("string"!=typeof t||!e)return;const[r,s,l]=a(t,n,o),u=l!==t,p=i(e),f=p[l]||{},h=t.startsWith(".");if(void 0===s){if(h)for(const n of Object.keys(p))d(e,p,n,t.slice(1));for(const[n,i]of Object.entries(f)){const o=n.replace(B,"");u&&!t.includes(o)||c(e,p,l,i.callable,i.delegationSelector)}}else{if(!Object.keys(f).length)return;c(e,p,l,s,r?n:null)}},"trigger"(e,t,n){if("string"!=typeof t||!e)return null;const i=L();let o=null,r=!0,s=!0,a=!1;t!==u(t)&&i&&(o=i.Event(t,n),i(e).trigger(o),r=!o.isPropagationStopped(),s=!o.isImmediatePropagationStopped(),a=o.isDefaultPrevented());const l=p(new Event(t,{"bubbles":r,"cancelable":!0}),n);return a&&l.preventDefault(),s&&e.dispatchEvent(l),l.defaultPrevented&&o&&o.preventDefault(),l}},K={"setDataAttribute"(e,t,n){e.setAttribute(`data-bs-${h(t)}`,n)},"removeDataAttribute"(e,t){e.removeAttribute(`data-bs-${h(t)}`)},"getDataAttributes"(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1),t[n]=f(e.dataset[i])}return t},"getDataAttribute":(e,t)=>f(e.getAttribute(`data-bs-${h(t)}`))};class Q{static get"Default"(){return{}}static get"DefaultType"(){return{}}static get"NAME"(){throw new Error('You have to implement the static method "NAME", for each component!')}"_getConfig"(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}"_configAfterMerge"(e){return e}"_mergeConfigObj"(e,t){const n=S(t)?K.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...S(t)?K.getDataAttributes(t):{},..."object"==typeof e?e:{}}}"_typeCheckConfig"(e,t=this.constructor.DefaultType){for(const[n,i]of Object.entries(t)){const t=e[n],o=S(t)?"element":k(t);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`)}}}const Z="5.3.5";class J extends Q{"constructor"(e,t){super(),(e=A(e))&&(this._element=e,this._config=this._getConfig(t),y.set(this._element,this.constructor.DATA_KEY,this))}"dispose"(){y.remove(this._element,this.constructor.DATA_KEY),G.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}"_queueCallback"(e,t,n=!0){V(e,t,n)}"_getConfig"(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static"getInstance"(e){return y.get(A(e),this.DATA_KEY)}static"getOrCreateInstance"(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get"VERSION"(){return Z}static get"DATA_KEY"(){return`bs.${this.NAME}`}static get"EVENT_KEY"(){return`.${this.DATA_KEY}`}static"eventName"(e){return`${e}${this.EVENT_KEY}`}}const ee=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t?t.split(",").map((e=>x(e))).join(","):null},te={"find":(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),"findOne":(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),"children":(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),"parents"(e,t){const n=[];let i=e.parentNode.closest(t);for(;i;)n.push(i),i=i.parentNode.closest(t);return n},"prev"(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},"next"(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},"focusableChildren"(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!O(e)&&$(e)))},"getSelectorFromElement"(e){const t=ee(e);return t&&te.findOne(t)?t:null},"getElementFromSelector"(e){const t=ee(e);return t?te.findOne(t):null},"getMultipleElementsFromSelector"(e){const t=ee(e);return t?te.find(t):[]}},ne=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;G.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),O(this))return;const o=te.getElementFromSelector(this)||this.closest(`.${i}`);e.getOrCreateInstance(o)[t]()}))},ie="alert",oe=`.${"bs.alert"}`,re=`close${oe}`,se=`closed${oe}`,ae="fade",le="show";class ce extends J{static get"NAME"(){return ie}"close"(){if(G.trigger(this._element,re).defaultPrevented)return;this._element.classList.remove(le);const e=this._element.classList.contains(ae);this._queueCallback((()=>this._destroyElement()),this._element,e)}"_destroyElement"(){this._element.remove(),G.trigger(this._element,se),this.dispose()}static"jQueryInterface"(e){return this.each((function(){const t=ce.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}ne(ce,"close"),H(ce);const de="button",ue="active",pe='[data-bs-toggle="button"]',fe=`click${`.${"bs.button"}`}${".data-api"}`;class he extends J{static get"NAME"(){return de}"toggle"(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ue))}static"jQueryInterface"(e){return this.each((function(){const t=he.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}G.on(document,fe,pe,(e=>{e.preventDefault();const t=e.target.closest(pe);he.getOrCreateInstance(t).toggle()})),H(he);const me="swipe",ge=".bs.swipe",ve=`touchstart${ge}`,ye=`touchmove${ge}`,be=`touchend${ge}`,we=`pointerdown${ge}`,_e=`pointerup${ge}`,xe="touch",ke="pen",Te="pointer-event",Ce=40,Ee={"endCallback":null,"leftCallback":null,"rightCallback":null},Se={"endCallback":"(function|null)","leftCallback":"(function|null)","rightCallback":"(function|null)"};class Ae extends Q{"constructor"(e,t){super(),this._element=e,e&&Ae.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get"Default"(){return Ee}static get"DefaultType"(){return Se}static get"NAME"(){return me}"dispose"(){G.off(this._element,ge)}"_start"(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}"_end"(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),M(this._config.endCallback)}"_move"(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}"_handleSwipe"(){const e=Math.abs(this._deltaX);if(e<=Ce)return;const t=e/this._deltaX;this._deltaX=0,t&&M(t>0?this._config.rightCallback:this._config.leftCallback)}"_initEvents"(){this._supportPointerEvents?(G.on(this._element,we,(e=>this._start(e))),G.on(this._element,_e,(e=>this._end(e))),this._element.classList.add(Te)):(G.on(this._element,ve,(e=>this._start(e))),G.on(this._element,ye,(e=>this._move(e))),G.on(this._element,be,(e=>this._end(e))))}"_eventIsPointerPenTouch"(e){return this._supportPointerEvents&&(e.pointerType===ke||e.pointerType===xe)}static"isSupported"(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const $e="carousel",Oe=`.${"bs.carousel"}`,je=".data-api",Ie="ArrowLeft",Fe="ArrowRight",Le=500,Ne="next",De="prev",Pe="left",He="right",Me=`slide${Oe}`,Ve=`slid${Oe}`,qe=`keydown${Oe}`,ze=`mouseenter${Oe}`,Re=`mouseleave${Oe}`,Be=`dragstart${Oe}`,We=`load${Oe}${je}`,Ue=`click${Oe}${je}`,Xe="carousel",Ye="active",Ge="slide",Ke="carousel-item-end",Qe="carousel-item-start",Ze="carousel-item-next",Je="carousel-item-prev",et=".active",tt=".carousel-item",nt=et+tt,it=".carousel-item img",ot=".carousel-indicators",rt="[data-bs-slide], [data-bs-slide-to]",st='[data-bs-ride="carousel"]',at={[Ie]:He,[Fe]:Pe},lt={"interval":5e3,"keyboard":!0,"pause":"hover","ride":!1,"touch":!0,"wrap":!0},ct={"interval":"(number|boolean)","keyboard":"boolean","pause":"(string|boolean)","ride":"(boolean|string)","touch":"boolean","wrap":"boolean"};class dt extends J{"constructor"(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=te.findOne(ot,this._element),this._addEventListeners(),this._config.ride===Xe&&this.cycle()}static get"Default"(){return lt}static get"DefaultType"(){return ct}static get"NAME"(){return $e}"next"(){this._slide(Ne)}"nextWhenVisible"(){!document.hidden&&$(this._element)&&this.next()}"prev"(){this._slide(De)}"pause"(){this._isSliding&&E(this._element),this._clearInterval()}"cycle"(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}"_maybeEnableCycle"(){this._config.ride&&(this._isSliding?G.one(this._element,Ve,(()=>this.cycle())):this.cycle())}"to"(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void G.one(this._element,Ve,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?Ne:De;this._slide(i,t[e])}"dispose"(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}"_configAfterMerge"(e){return e.defaultInterval=e.interval,e}"_addEventListeners"(){this._config.keyboard&&G.on(this._element,qe,(e=>this._keydown(e))),"hover"===this._config.pause&&(G.on(this._element,ze,(()=>this.pause())),G.on(this._element,Re,(()=>this._maybeEnableCycle()))),this._config.touch&&Ae.isSupported()&&this._addTouchEventListeners()}"_addTouchEventListeners"(){for(const e of te.find(it,this._element))G.on(e,Be,(e=>e.preventDefault()));const e={"leftCallback":()=>this._slide(this._directionToOrder(Pe)),"rightCallback":()=>this._slide(this._directionToOrder(He)),"endCallback":()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),Le+this._config.interval))}};this._swipeHelper=new Ae(this._element,e)}"_keydown"(e){if(/input|textarea/i.test(e.target.tagName))return;const t=at[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}"_getItemIndex"(e){return this._getItems().indexOf(e)}"_setActiveIndicatorElement"(e){if(!this._indicatorsElement)return;const t=te.findOne(et,this._indicatorsElement);t.classList.remove(Ye),t.removeAttribute("aria-current");const n=te.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Ye),n.setAttribute("aria-current","true"))}"_updateInterval"(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}"_slide"(e,t=null){if(this._isSliding)return;const n=this._getActive(),i=e===Ne,o=t||q(this._getItems(),n,i,this._config.wrap);if(o===n)return;const r=this._getItemIndex(o),s=t=>G.trigger(this._element,t,{"relatedTarget":o,"direction":this._orderToDirection(e),"from":this._getItemIndex(n),"to":r});if(s(Me).defaultPrevented)return;if(!n||!o)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=o;const l=i?Qe:Ke,c=i?Ze:Je;o.classList.add(c),F(o),n.classList.add(l),o.classList.add(l);const d=()=>{o.classList.remove(l,c),o.classList.add(Ye),n.classList.remove(Ye,c,l),this._isSliding=!1,s(Ve)};this._queueCallback(d,n,this._isAnimated()),a&&this.cycle()}"_isAnimated"(){return this._element.classList.contains(Ge)}"_getActive"(){return te.findOne(nt,this._element)}"_getItems"(){return te.find(tt,this._element)}"_clearInterval"(){this._interval&&(clearInterval(this._interval),this._interval=null)}"_directionToOrder"(e){return P()?e===Pe?De:Ne:e===Pe?Ne:De}"_orderToDirection"(e){return P()?e===De?Pe:He:e===De?He:Pe}static"jQueryInterface"(e){return this.each((function(){const t=dt.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}G.on(document,Ue,rt,(function(e){const t=te.getElementFromSelector(this);if(!t||!t.classList.contains(Xe))return;e.preventDefault();const n=dt.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");return i?(n.to(i),void n._maybeEnableCycle()):"next"===K.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),G.on(window,We,(()=>{const e=te.find(st);for(const t of e)dt.getOrCreateInstance(t)})),H(dt);const ut="collapse",pt=`.${"bs.collapse"}`,ft=`show${pt}`,ht=`shown${pt}`,mt=`hide${pt}`,gt=`hidden${pt}`,vt=`click${pt}${".data-api"}`,yt="show",bt="collapse",wt="collapsing",_t="collapsed",xt=`:scope .${bt} .${bt}`,kt="collapse-horizontal",Tt="width",Ct="height",Et=".collapse.show, .collapse.collapsing",St='[data-bs-toggle="collapse"]',At={"parent":null,"toggle":!0},$t={"parent":"(null|element)","toggle":"boolean"};class Ot extends J{"constructor"(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=te.find(St);for(const e of n){const t=te.getSelectorFromElement(e),n=te.find(t).filter((e=>e===this._element));null!==t&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get"Default"(){return At}static get"DefaultType"(){return $t}static get"NAME"(){return ut}"toggle"(){this._isShown()?this.hide():this.show()}"show"(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(Et).filter((e=>e!==this._element)).map((e=>Ot.getOrCreateInstance(e,{"toggle":!1})))),e.length&&e[0]._isTransitioning)return;if(G.trigger(this._element,ft).defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove(bt),this._element.classList.add(wt),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(wt),this._element.classList.add(bt,yt),this._element.style[t]="",G.trigger(this._element,ht)},i=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback(n,this._element,!0),this._element.style[t]=`${this._element[i]}px`}"hide"(){if(this._isTransitioning||!this._isShown())return;if(G.trigger(this._element,mt).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,F(this._element),this._element.classList.add(wt),this._element.classList.remove(bt,yt);for(const e of this._triggerArray){const t=te.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const t=()=>{this._isTransitioning=!1,this._element.classList.remove(wt),this._element.classList.add(bt),G.trigger(this._element,gt)};this._element.style[e]="",this._queueCallback(t,this._element,!0)}"_isShown"(e=this._element){return e.classList.contains(yt)}"_configAfterMerge"(e){return e.toggle=Boolean(e.toggle),e.parent=A(e.parent),e}"_getDimension"(){return this._element.classList.contains(kt)?Tt:Ct}"_initializeChildren"(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(St);for(const t of e){const e=te.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}"_getFirstLevelChildren"(e){const t=te.find(xt,this._config.parent);return te.find(e,this._config.parent).filter((e=>!t.includes(e)))}"_addAriaAndCollapsedClass"(e,t){if(e.length)for(const n of e)n.classList.toggle(_t,!t),n.setAttribute("aria-expanded",t)}static"jQueryInterface"(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Ot.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}G.on(document,vt,St,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const e of te.getMultipleElementsFromSelector(this))Ot.getOrCreateInstance(e,{"toggle":!1}).toggle()})),H(Ot);const jt="dropdown",It=`.${"bs.dropdown"}`,Ft=".data-api",Lt="Escape",Nt="Tab",Dt="ArrowUp",Pt="ArrowDown",Ht=2,Mt=`hide${It}`,Vt=`hidden${It}`,qt=`show${It}`,zt=`shown${It}`,Rt=`click${It}${Ft}`,Bt=`keydown${It}${Ft}`,Wt=`keyup${It}${Ft}`,Ut="show",Xt="dropup",Yt="dropend",Gt="dropstart",Kt="dropup-center",Qt="dropdown-center",Zt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Jt=`${Zt}.${Ut}`,en=".dropdown-menu",tn=".navbar",nn=".navbar-nav",on=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",rn=P()?"top-end":"top-start",sn=P()?"top-start":"top-end",an=P()?"bottom-end":"bottom-start",ln=P()?"bottom-start":"bottom-end",cn=P()?"left-start":"right-start",dn=P()?"right-start":"left-start",un="top",pn="bottom",fn={"autoClose":!0,"boundary":"clippingParents","display":"dynamic","offset":[0,2],"popperConfig":null,"reference":"toggle"},hn={"autoClose":"(boolean|string)","boundary":"(string|element)","display":"string","offset":"(array|string|function)","popperConfig":"(null|object|function)","reference":"(string|element|object)"};class mn extends J{"constructor"(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=te.next(this._element,en)[0]||te.prev(this._element,en)[0]||te.findOne(en,this._parent),this._inNavbar=this._detectNavbar()}static get"Default"(){return fn}static get"DefaultType"(){return hn}static get"NAME"(){return jt}"toggle"(){return this._isShown()?this.hide():this.show()}"show"(){if(O(this._element)||this._isShown())return;const e={"relatedTarget":this._element};if(!G.trigger(this._element,qt,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(nn))for(const e of[].concat(...document.body.children))G.on(e,"mouseover",I);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ut),this._element.classList.add(Ut),G.trigger(this._element,zt,e)}}"hide"(){if(O(this._element)||!this._isShown())return;const e={"relatedTarget":this._element};this._completeHide(e)}"dispose"(){this._popper&&this._popper.destroy(),super.dispose()}"update"(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}"_completeHide"(e){if(!G.trigger(this._element,Mt,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))G.off(e,"mouseover",I);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ut),this._element.classList.remove(Ut),this._element.setAttribute("aria-expanded","false"),K.removeDataAttribute(this._menu,"popper"),G.trigger(this._element,Vt,e)}}"_getConfig"(e){if("object"==typeof(e=super._getConfig(e)).reference&&!S(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${jt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}"_createPopper"(){if(void 0===g)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;"parent"===this._config.reference?e=this._parent:S(this._config.reference)?e=A(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=g.createPopper(e,this._menu,t)}"_isShown"(){return this._menu.classList.contains(Ut)}"_getPlacement"(){const e=this._parent;if(e.classList.contains(Yt))return cn;if(e.classList.contains(Gt))return dn;if(e.classList.contains(Kt))return un;if(e.classList.contains(Qt))return pn;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(Xt)?t?sn:rn:t?ln:an}"_detectNavbar"(){return null!==this._element.closest(tn)}"_getOffset"(){const{"offset":e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}"_getPopperConfig"(){const e={"placement":this._getPlacement(),"modifiers":[{"name":"preventOverflow","options":{"boundary":this._config.boundary}},{"name":"offset","options":{"offset":this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(K.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{"name":"applyStyles","enabled":!1}]),{...e,...M(this._config.popperConfig,[void 0,e])}}"_selectMenuItem"({"key":e,"target":t}){const n=te.find(on,this._menu).filter((e=>$(e)));n.length&&q(n,t,e===Pt,!n.includes(t)).focus()}static"jQueryInterface"(e){return this.each((function(){const t=mn.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static"clearMenus"(e){if(e.button===Ht||"keyup"===e.type&&e.key!==Nt)return;const t=te.find(Jt);for(const n of t){const t=mn.getInstance(n);if(!t||!1===t._config.autoClose)continue;const i=e.composedPath(),o=i.includes(t._menu);if(i.includes(t._element)||"inside"===t._config.autoClose&&!o||"outside"===t._config.autoClose&&o)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&e.key===Nt||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const r={"relatedTarget":t._element};"click"===e.type&&(r.clickEvent=e),t._completeHide(r)}}static"dataApiKeydownHandler"(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===Lt,i=[Dt,Pt].includes(e.key);if(!i&&!n)return;if(t&&!n)return;e.preventDefault();const o=this.matches(Zt)?this:te.prev(this,Zt)[0]||te.next(this,Zt)[0]||te.findOne(Zt,e.delegateTarget.parentNode),r=mn.getOrCreateInstance(o);if(i)return e.stopPropagation(),r.show(),void r._selectMenuItem(e);r._isShown()&&(e.stopPropagation(),r.hide(),o.focus())}}G.on(document,Bt,Zt,mn.dataApiKeydownHandler),G.on(document,Bt,en,mn.dataApiKeydownHandler),G.on(document,Rt,mn.clearMenus),G.on(document,Wt,mn.clearMenus),G.on(document,Rt,Zt,(function(e){e.preventDefault(),mn.getOrCreateInstance(this).toggle()})),H(mn);const gn="backdrop",vn="fade",yn="show",bn=`mousedown.bs.${gn}`,wn={"className":"modal-backdrop","clickCallback":null,"isAnimated":!1,"isVisible":!0,"rootElement":"body"},_n={"className":"string","clickCallback":"(function|null)","isAnimated":"boolean","isVisible":"boolean","rootElement":"(element|string)"};class xn extends Q{"constructor"(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get"Default"(){return wn}static get"DefaultType"(){return _n}static get"NAME"(){return gn}"show"(e){if(!this._config.isVisible)return void M(e);this._append();const t=this._getElement();this._config.isAnimated&&F(t),t.classList.add(yn),this._emulateAnimation((()=>{M(e)}))}"hide"(e){this._config.isVisible?(this._getElement().classList.remove(yn),this._emulateAnimation((()=>{this.dispose(),M(e)}))):M(e)}"dispose"(){this._isAppended&&(G.off(this._element,bn),this._element.remove(),this._isAppended=!1)}"_getElement"(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(vn),this._element=e}return this._element}"_configAfterMerge"(e){return e.rootElement=A(e.rootElement),e}"_append"(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),G.on(e,bn,(()=>{M(this._config.clickCallback)})),this._isAppended=!0}"_emulateAnimation"(e){V(e,this._getElement(),this._config.isAnimated)}}const kn="focustrap",Tn=`.${"bs.focustrap"}`,Cn=`focusin${Tn}`,En=`keydown.tab${Tn}`,Sn="Tab",An="forward",$n="backward",On={"autofocus":!0,"trapElement":null},jn={"autofocus":"boolean","trapElement":"element"};class In extends Q{"constructor"(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get"Default"(){return On}static get"DefaultType"(){return jn}static get"NAME"(){return kn}"activate"(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),G.off(document,Tn),G.on(document,Cn,(e=>this._handleFocusin(e))),G.on(document,En,(e=>this._handleKeydown(e))),this._isActive=!0)}"deactivate"(){this._isActive&&(this._isActive=!1,G.off(document,Tn))}"_handleFocusin"(e){const{"trapElement":t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=te.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===$n?n[n.length-1].focus():n[0].focus()}"_handleKeydown"(e){e.key===Sn&&(this._lastTabNavDirection=e.shiftKey?$n:An)}}const Fn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ln=".sticky-top",Nn="padding-right",Dn="margin-right";class Pn{"constructor"(){this._element=document.body}"getWidth"(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}"hide"(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Nn,(t=>t+e)),this._setElementAttributes(Fn,Nn,(t=>t+e)),this._setElementAttributes(Ln,Dn,(t=>t-e))}"reset"(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Nn),this._resetElementAttributes(Fn,Nn),this._resetElementAttributes(Ln,Dn)}"isOverflowing"(){return this.getWidth()>0}"_disableOverFlow"(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}"_setElementAttributes"(e,t,n){const i=this.getWidth(),o=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const o=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(o))}px`)};this._applyManipulationCallback(e,o)}"_saveInitialAttribute"(e,t){const n=e.style.getPropertyValue(t);n&&K.setDataAttribute(e,t,n)}"_resetElementAttributes"(e,t){const n=e=>{const n=K.getDataAttribute(e,t);null!==n?(K.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)};this._applyManipulationCallback(e,n)}"_applyManipulationCallback"(e,t){if(S(e))t(e);else for(const n of te.find(e,this._element))t(n)}}const Hn="modal",Mn=`.${"bs.modal"}`,Vn="Escape",qn=`hide${Mn}`,zn=`hidePrevented${Mn}`,Rn=`hidden${Mn}`,Bn=`show${Mn}`,Wn=`shown${Mn}`,Un=`resize${Mn}`,Xn=`click.dismiss${Mn}`,Yn=`mousedown.dismiss${Mn}`,Gn=`keydown.dismiss${Mn}`,Kn=`click${Mn}${".data-api"}`,Qn="modal-open",Zn="fade",Jn="show",ei="modal-static",ti=".modal.show",ni=".modal-dialog",ii=".modal-body",oi='[data-bs-toggle="modal"]',ri={"backdrop":!0,"focus":!0,
"keyboard":!0},si={"backdrop":"(boolean|string)","focus":"boolean","keyboard":"boolean"};class ai extends J{"constructor"(e,t){super(e,t),this._dialog=te.findOne(ni,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Pn,this._addEventListeners()}static get"Default"(){return ri}static get"DefaultType"(){return si}static get"NAME"(){return Hn}"toggle"(e){return this._isShown?this.hide():this.show(e)}"show"(e){if(this._isShown||this._isTransitioning)return;G.trigger(this._element,Bn,{"relatedTarget":e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Qn),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}"hide"(){if(!this._isShown||this._isTransitioning)return;G.trigger(this._element,qn).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Jn),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}"dispose"(){G.off(window,Mn),G.off(this._dialog,Mn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}"handleUpdate"(){this._adjustDialog()}"_initializeBackDrop"(){return new xn({"isVisible":Boolean(this._config.backdrop),"isAnimated":this._isAnimated()})}"_initializeFocusTrap"(){return new In({"trapElement":this._element})}"_showElement"(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=te.findOne(ii,this._dialog);t&&(t.scrollTop=0),F(this._element),this._element.classList.add(Jn);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,G.trigger(this._element,Wn,{"relatedTarget":e})};this._queueCallback(n,this._dialog,this._isAnimated())}"_addEventListeners"(){G.on(this._element,Gn,(e=>{e.key===Vn&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),G.on(window,Un,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),G.on(this._element,Yn,(e=>{G.one(this._element,Xn,(t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}"_hideModal"(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Qn),this._resetAdjustments(),this._scrollBar.reset(),G.trigger(this._element,Rn)}))}"_isAnimated"(){return this._element.classList.contains(Zn)}"_triggerBackdropTransition"(){if(G.trigger(this._element,zn).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;"hidden"===t||this._element.classList.contains(ei)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(ei),this._queueCallback((()=>{this._element.classList.remove(ei),this._queueCallback((()=>{this._element.style.overflowY=t}),this._dialog)}),this._dialog),this._element.focus())}"_adjustDialog"(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=P()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=P()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}"_resetAdjustments"(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static"jQueryInterface"(e,t){return this.each((function(){const n=ai.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}G.on(document,Kn,oi,(function(e){const t=te.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),G.one(t,Bn,(e=>{e.defaultPrevented||G.one(t,Rn,(()=>{$(this)&&this.focus()}))}));const n=te.findOne(ti);n&&ai.getInstance(n).hide();ai.getOrCreateInstance(t).toggle(this)})),ne(ai),H(ai);const li="offcanvas",ci=`.${"bs.offcanvas"}`,di=".data-api",ui=`load${ci}${di}`,pi="Escape",fi="show",hi="showing",mi="hiding",gi="offcanvas-backdrop",vi=".offcanvas.show",yi=`show${ci}`,bi=`shown${ci}`,wi=`hide${ci}`,_i=`hidePrevented${ci}`,xi=`hidden${ci}`,ki=`resize${ci}`,Ti=`click${ci}${di}`,Ci=`keydown.dismiss${ci}`,Ei='[data-bs-toggle="offcanvas"]',Si={"backdrop":!0,"keyboard":!0,"scroll":!1},Ai={"backdrop":"(boolean|string)","keyboard":"boolean","scroll":"boolean"};class $i extends J{"constructor"(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get"Default"(){return Si}static get"DefaultType"(){return Ai}static get"NAME"(){return li}"toggle"(e){return this._isShown?this.hide():this.show(e)}"show"(e){if(this._isShown)return;if(G.trigger(this._element,yi,{"relatedTarget":e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Pn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(hi);const t=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(fi),this._element.classList.remove(hi),G.trigger(this._element,bi,{"relatedTarget":e})};this._queueCallback(t,this._element,!0)}"hide"(){if(!this._isShown)return;if(G.trigger(this._element,wi).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(mi),this._backdrop.hide();const e=()=>{this._element.classList.remove(fi,mi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Pn).reset(),G.trigger(this._element,xi)};this._queueCallback(e,this._element,!0)}"dispose"(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}"_initializeBackDrop"(){const e=()=>{"static"!==this._config.backdrop?this.hide():G.trigger(this._element,_i)},t=Boolean(this._config.backdrop);return new xn({"className":gi,"isVisible":t,"isAnimated":!0,"rootElement":this._element.parentNode,"clickCallback":t?e:null})}"_initializeFocusTrap"(){return new In({"trapElement":this._element})}"_addEventListeners"(){G.on(this._element,Ci,(e=>{e.key===pi&&(this._config.keyboard?this.hide():G.trigger(this._element,_i))}))}static"jQueryInterface"(e){return this.each((function(){const t=$i.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}G.on(document,Ti,Ei,(function(e){const t=te.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),O(this))return;G.one(t,xi,(()=>{$(this)&&this.focus()}));const n=te.findOne(vi);n&&n!==t&&$i.getInstance(n).hide();$i.getOrCreateInstance(t).toggle(this)})),G.on(window,ui,(()=>{for(const e of te.find(vi))$i.getOrCreateInstance(e).show()})),G.on(window,ki,(()=>{for(const e of te.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&$i.getOrCreateInstance(e).hide()})),ne($i),H($i);const Oi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],"a":["target","href","title","rel"],"area":[],"b":[],"br":[],"col":[],"code":[],"dd":[],"div":[],"dl":[],"dt":[],"em":[],"hr":[],"h1":[],"h2":[],"h3":[],"h4":[],"h5":[],"h6":[],"i":[],"img":["src","srcset","alt","title","width","height"],"li":[],"ol":[],"p":[],"pre":[],"s":[],"small":[],"span":[],"sub":[],"sup":[],"strong":[],"u":[],"ul":[]},ji=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ii=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Fi=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!ji.has(n)||Boolean(Ii.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))},Li="TemplateFactory",Ni={"allowList":Oi,"content":{},"extraClass":"","html":!1,"sanitize":!0,"sanitizeFn":null,"template":"<div></div>"},Di={"allowList":"object","content":"object","extraClass":"(string|function)","html":"boolean","sanitize":"boolean","sanitizeFn":"(null|function)","template":"string"},Pi={"entry":"(string|element|function|null)","selector":"(string|element)"};class Hi extends Q{"constructor"(e){super(),this._config=this._getConfig(e)}static get"Default"(){return Ni}static get"DefaultType"(){return Di}static get"NAME"(){return Li}"getContent"(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}"hasContent"(){return this.getContent().length>0}"changeContent"(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}"toHtml"(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}"_typeCheckConfig"(e){super._typeCheckConfig(e),this._checkContent(e.content)}"_checkContent"(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({"selector":t,"entry":n},Pi)}"_setContent"(e,t,n){const i=te.findOne(n,e);i&&((t=this._resolvePossibleFunction(t))?S(t)?this._putElementInTemplate(A(t),i):this._config.html?i.innerHTML=this._maybeSanitize(t):i.textContent=t:i.remove())}"_maybeSanitize"(e){return this._config.sanitize?m(e,this._config.allowList,this._config.sanitizeFn):e}"_resolvePossibleFunction"(e){return M(e,[void 0,this])}"_putElementInTemplate"(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const Mi="tooltip",Vi=new Set(["sanitize","allowList","sanitizeFn"]),qi="fade",zi="show",Ri=".tooltip-inner",Bi=`.${"modal"}`,Wi="hide.bs.modal",Ui="hover",Xi="focus",Yi="click",Gi="manual",Ki="hide",Qi="hidden",Zi="show",Ji="shown",eo="inserted",to="click",no="focusin",io="focusout",oo="mouseenter",ro="mouseleave",so={"AUTO":"auto","TOP":"top","RIGHT":P()?"left":"right","BOTTOM":"bottom","LEFT":P()?"right":"left"},ao={"allowList":Oi,"animation":!0,"boundary":"clippingParents","container":!1,"customClass":"","delay":0,"fallbackPlacements":["top","right","bottom","left"],"html":!1,"offset":[0,6],"placement":"top","popperConfig":null,"sanitize":!0,"sanitizeFn":null,"selector":!1,"template":'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',"title":"","trigger":"hover focus"},lo={"allowList":"object","animation":"boolean","boundary":"(string|element)","container":"(string|element|boolean)","customClass":"(string|function)","delay":"(number|object)","fallbackPlacements":"array","html":"boolean","offset":"(array|string|function)","placement":"(string|function)","popperConfig":"(null|object|function)","sanitize":"boolean","sanitizeFn":"(null|function)","selector":"(string|boolean)","template":"string","title":"(string|element|function)","trigger":"string"};class co extends J{"constructor"(e,t){if(void 0===g)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get"Default"(){return ao}static get"DefaultType"(){return lo}static get"NAME"(){return Mi}"enable"(){this._isEnabled=!0}"disable"(){this._isEnabled=!1}"toggleEnabled"(){this._isEnabled=!this._isEnabled}"toggle"(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}"dispose"(){clearTimeout(this._timeout),G.off(this._element.closest(Bi),Wi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}"show"(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=G.trigger(this._element,this.constructor.eventName(Zi)),t=(j(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();const n=this._getTipElement();this._element.setAttribute("aria-describedby",n.getAttribute("id"));const{"container":i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(n),G.trigger(this._element,this.constructor.eventName(eo))),this._popper=this._createPopper(n),n.classList.add(zi),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))G.on(e,"mouseover",I);const o=()=>{G.trigger(this._element,this.constructor.eventName(Ji)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}"hide"(){if(!this._isShown())return;if(G.trigger(this._element,this.constructor.eventName(Ki)).defaultPrevented)return;if(this._getTipElement().classList.remove(zi),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))G.off(e,"mouseover",I);this._activeTrigger[Yi]=!1,this._activeTrigger[Xi]=!1,this._activeTrigger[Ui]=!1,this._isHovered=null;const e=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),G.trigger(this._element,this.constructor.eventName(Qi)))};this._queueCallback(e,this.tip,this._isAnimated())}"update"(){this._popper&&this._popper.update()}"_isWithContent"(){return Boolean(this._getTitle())}"_getTipElement"(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}"_createTipElement"(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(qi,zi),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=T(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(qi),t}"setContent"(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}"_getTemplateFactory"(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Hi({...this._config,"content":e,"extraClass":this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}"_getContentForTemplate"(){return{[Ri]:this._getTitle()}}"_getTitle"(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}"_initializeOnDelegatedTarget"(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}"_isAnimated"(){return this._config.animation||this.tip&&this.tip.classList.contains(qi)}"_isShown"(){return this.tip&&this.tip.classList.contains(zi)}"_createPopper"(e){const t=M(this._config.placement,[this,e,this._element]),n=so[t.toUpperCase()];return g.createPopper(this._element,e,this._getPopperConfig(n))}"_getOffset"(){const{"offset":e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}"_resolvePossibleFunction"(e){return M(e,[this._element,this._element])}"_getPopperConfig"(e){const t={"placement":e,"modifiers":[{"name":"flip","options":{"fallbackPlacements":this._config.fallbackPlacements}},{"name":"offset","options":{"offset":this._getOffset()}},{"name":"preventOverflow","options":{"boundary":this._config.boundary}},{"name":"arrow","options":{"element":`.${this.constructor.NAME}-arrow`}},{"name":"preSetPlacement","enabled":!0,"phase":"beforeMain","fn":e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...M(this._config.popperConfig,[void 0,t])}}"_setListeners"(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)G.on(this._element,this.constructor.eventName(to),this._config.selector,(e=>{this._initializeOnDelegatedTarget(e).toggle()}));else if(t!==Gi){const e=t===Ui?this.constructor.eventName(oo):this.constructor.eventName(no),n=t===Ui?this.constructor.eventName(ro):this.constructor.eventName(io);G.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?Xi:Ui]=!0,t._enter()})),G.on(this._element,n,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?Xi:Ui]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},G.on(this._element.closest(Bi),Wi,this._hideModalHandler)}"_fixTitle"(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}"_enter"(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}"_leave"(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}"_setTimeout"(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}"_isWithActiveTrigger"(){return Object.values(this._activeTrigger).includes(!0)}"_getConfig"(e){const t=K.getDataAttributes(this._element);for(const e of Object.keys(t))Vi.has(e)&&delete t[e];return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}"_configAfterMerge"(e){return e.container=!1===e.container?document.body:A(e.container),"number"==typeof e.delay&&(e.delay={"show":e.delay,"hide":e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}"_getDelegateConfig"(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}"_disposePopper"(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static"jQueryInterface"(e){return this.each((function(){const t=co.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}H(co);const uo="popover",po=".popover-header",fo=".popover-body",ho={...co.Default,"content":"","offset":[0,8],"placement":"right","template":'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',"trigger":"click"},mo={...co.DefaultType,"content":"(null|string|element|function)"};class go extends co{static get"Default"(){return ho}static get"DefaultType"(){return mo}static get"NAME"(){return uo}"_isWithContent"(){return this._getTitle()||this._getContent()}"_getContentForTemplate"(){return{[po]:this._getTitle(),[fo]:this._getContent()}}"_getContent"(){return this._resolvePossibleFunction(this._config.content)}static"jQueryInterface"(e){return this.each((function(){const t=go.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}H(go);const vo="scrollspy",yo=`.${"bs.scrollspy"}`,bo=`activate${yo}`,wo=`click${yo}`,_o=`load${yo}${".data-api"}`,xo="dropdown-item",ko="active",To='[data-bs-spy="scroll"]',Co="[href]",Eo=".nav, .list-group",So=".nav-link",Ao=`${So}, ${".nav-item"} > ${So}, ${".list-group-item"}`,$o=".dropdown",Oo=".dropdown-toggle",jo={"offset":null,"rootMargin":"0px 0px -25%","smoothScroll":!1,"target":null,"threshold":[.1,.5,1]},Io={"offset":"(number|null)","rootMargin":"string","smoothScroll":"boolean","target":"element","threshold":"array"};class Fo extends J{"constructor"(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={"visibleEntryTop":0,"parentScrollTop":0},this.refresh()}static get"Default"(){return jo}static get"DefaultType"(){return Io}static get"NAME"(){return vo}"refresh"(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}"dispose"(){this._observer.disconnect(),super.dispose()}"_configAfterMerge"(e){return e.target=A(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"==typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}"_maybeEnableSmoothScroll"(){this._config.smoothScroll&&(G.off(this._config.target,wo),G.on(this._config.target,wo,Co,(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({"top":i,"behavior":"smooth"});n.scrollTop=i}})))}"_getNewObserver"(){const e={"root":this._rootElement,"threshold":this._config.threshold,"rootMargin":this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}"_observerCallback"(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},i=(this._rootElement||document.documentElement).scrollTop,o=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const r of e){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(r));continue}const e=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&e){if(n(r),!i)return}else o||e||n(r)}}"_initializeTargetsAndObservables"(){this._targetLinks=new Map,this._observableSections=new Map;const e=te.find(Co,this._config.target);for(const t of e){if(!t.hash||O(t))continue;const e=te.findOne(decodeURI(t.hash),this._element);$(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}"_process"(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(ko),this._activateParents(e),G.trigger(this._element,bo,{"relatedTarget":e}))}"_activateParents"(e){if(e.classList.contains(xo))te.findOne(Oo,e.closest($o)).classList.add(ko);else for(const t of te.parents(e,Eo))for(const e of te.prev(t,Ao))e.classList.add(ko)}"_clearActiveClass"(e){e.classList.remove(ko);const t=te.find(`${Co}.${ko}`,e);for(const e of t)e.classList.remove(ko)}static"jQueryInterface"(e){return this.each((function(){const t=Fo.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}G.on(window,_o,(()=>{for(const e of te.find(To))Fo.getOrCreateInstance(e)})),H(Fo);const Lo="tab",No=`.${"bs.tab"}`,Do=`hide${No}`,Po=`hidden${No}`,Ho=`show${No}`,Mo=`shown${No}`,Vo=`click${No}`,qo=`keydown${No}`,zo=`load${No}`,Ro="ArrowLeft",Bo="ArrowRight",Wo="ArrowUp",Uo="ArrowDown",Xo="Home",Yo="End",Go="active",Ko="fade",Qo="show",Zo="dropdown",Jo=".dropdown-toggle",er=".dropdown-menu",tr=`:not(${Jo})`,nr='.list-group, .nav, [role="tablist"]',ir=".nav-item, .list-group-item",or='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',rr=`${`.nav-link${tr}, .list-group-item${tr}, [role="tab"]${tr}`}, ${or}`,sr=`.${Go}[data-bs-toggle="tab"], .${Go}[data-bs-toggle="pill"], .${Go}[data-bs-toggle="list"]`;class ar extends J{"constructor"(e){super(e),this._parent=this._element.closest(nr),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),G.on(this._element,qo,(e=>this._keydown(e))))}static get"NAME"(){return Lo}"show"(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?G.trigger(t,Do,{"relatedTarget":e}):null;G.trigger(e,Ho,{"relatedTarget":t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}"_activate"(e,t){if(!e)return;e.classList.add(Go),this._activate(te.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),G.trigger(e,Mo,{"relatedTarget":t})):e.classList.add(Qo)};this._queueCallback(n,e,e.classList.contains(Ko))}"_deactivate"(e,t){if(!e)return;e.classList.remove(Go),e.blur(),this._deactivate(te.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),G.trigger(e,Po,{"relatedTarget":t})):e.classList.remove(Qo)};this._queueCallback(n,e,e.classList.contains(Ko))}"_keydown"(e){if(![Ro,Bo,Wo,Uo,Xo,Yo].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter((e=>!O(e)));let n;if([Xo,Yo].includes(e.key))n=t[e.key===Xo?0:t.length-1];else{const i=[Bo,Uo].includes(e.key);n=q(t,e.target,i,!0)}n&&(n.focus({"preventScroll":!0}),ar.getOrCreateInstance(n).show())}"_getChildren"(){return te.find(rr,this._parent)}"_getActiveElem"(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}"_setInitialAttributes"(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const e of t)this._setInitialAttributesOnChild(e)}"_setInitialAttributesOnChild"(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}"_setInitialAttributesOnTargetPanel"(e){const t=te.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}"_toggleDropDown"(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(Zo))return;const i=(e,i)=>{const o=te.findOne(e,n);o&&o.classList.toggle(i,t)};i(Jo,Go),i(er,Qo),n.setAttribute("aria-expanded",t)}"_setAttributeIfNotExists"(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}"_elemIsActive"(e){return e.classList.contains(Go)}"_getInnerElement"(e){return e.matches(rr)?e:te.findOne(rr,e)}"_getOuterElement"(e){return e.closest(ir)||e}static"jQueryInterface"(e){return this.each((function(){const t=ar.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}G.on(document,Vo,or,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),O(this)||ar.getOrCreateInstance(this).show()})),G.on(window,zo,(()=>{for(const e of te.find(sr))ar.getOrCreateInstance(e)})),H(ar);const lr="toast",cr=`.${"bs.toast"}`,dr=`mouseover${cr}`,ur=`mouseout${cr}`,pr=`focusin${cr}`,fr=`focusout${cr}`,hr=`hide${cr}`,mr=`hidden${cr}`,gr=`show${cr}`,vr=`shown${cr}`,yr="fade",br="hide",wr="show",_r="showing",xr={"animation":"boolean","autohide":"boolean","delay":"number"},kr={"animation":!0,"autohide":!0,"delay":5e3};class Tr extends J{"constructor"(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get"Default"(){return kr}static get"DefaultType"(){return xr}static get"NAME"(){return lr}"show"(){if(G.trigger(this._element,gr).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(yr);const e=()=>{this._element.classList.remove(_r),G.trigger(this._element,vr),this._maybeScheduleHide()};this._element.classList.remove(br),F(this._element),this._element.classList.add(wr,_r),this._queueCallback(e,this._element,this._config.animation)}"hide"(){if(!this.isShown())return;if(G.trigger(this._element,hr).defaultPrevented)return;const e=()=>{this._element.classList.add(br),this._element.classList.remove(_r,wr),G.trigger(this._element,mr)};this._element.classList.add(_r),this._queueCallback(e,this._element,this._config.animation)}"dispose"(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(wr),super.dispose()}"isShown"(){return this._element.classList.contains(wr)}"_maybeScheduleHide"(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}"_onInteraction"(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}"_setListeners"(){G.on(this._element,dr,(e=>this._onInteraction(e,!0))),G.on(this._element,ur,(e=>this._onInteraction(e,!1))),G.on(this._element,pr,(e=>this._onInteraction(e,!0))),G.on(this._element,fr,(e=>this._onInteraction(e,!1)))}"_clearTimeout"(){clearTimeout(this._timeout),this._timeout=null}static"jQueryInterface"(e){return this.each((function(){const t=Tr.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}ne(Tr),H(Tr);return{"Alert":ce,"Button":he,"Carousel":dt,"Collapse":Ot,"Dropdown":mn,"Modal":ai,"Offcanvas":$i,"Popover":go,"ScrollSpy":Fo,"Tab":ar,"Toast":Tr,"Tooltip":co}}));
/* feature pop-up: feature links open in the modal */
!function(){"use strict";function e(e){var t=e&&e.closest?e.closest("a[href]"):null;if(!t||"_blank"===t.target)return null;var n=t.getAttribute("href")||"";return 0!==n.indexOf("/features/")||"/features/integrations"===n?null:t.classList.contains("integration-logo-card")||t.classList.contains("mktg-compact-feature-item")||t.classList.contains("feature-modal-link")||t.querySelector(".features-grid-card, .integration-card")||t.closest(".feature-modal")?t:null}function t(e){return!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)}function n(){return!!r||!(!(o=document.getElementById(l))||"undefined"==typeof bootstrap||!bootstrap.Modal)&&(s=o.querySelector("[data-feature-modal-body]"),a=o.querySelector(".feature-modal-fullpage"),r=bootstrap.Modal.getOrCreateInstance(o),!0)}function i(e){if(n()){a&&a.setAttribute("href",e),s.innerHTML=c,s.scrollTop=0,r.show();var t=++d;fetch(e,{"headers":{"X-Requested-With":"XMLHttpRequest","Accept":"text/html"},"credentials":"same-origin"}).then((function(e){if(!e.ok)throw new Error("HTTP "+e.status);return e.text()})).then((function(e){t===d&&(s.innerHTML=e,s.scrollTop=0)})).catch((function(){t===d&&(s.innerHTML='<div class="feature-modal-error text-center p-5"><p class="mb-3 text-muted">This preview could not be loaded.</p><a class="btn btn-td-green" href="'+e+'">Open the full page</a></div>')}))}else window.location.href=e}var o,r,s,a,l="featureModal",c='<div class="feature-modal-loading"><span class="spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></span></div>',d=0;document.addEventListener("click",(function(n){if(t(n)){var o=e(n.target);o&&(n.preventDefault(),i(o.getAttribute("href")))}}))}();
/* deep links scroll to their section once the page has loaded */
!function(){if(window.location.hash){var e=!1,t=function(){e=!0};window.addEventListener("wheel",t,{"passive":!0,"once":!0}),window.addEventListener("touchmove",t,{"passive":!0,"once":!0}),window.addEventListener("keydown",t,{"once":!0}),window.addEventListener("load",(function(){if(!e){var t=document.getElementById(window.location.hash.slice(1));t&&t.scrollIntoView()}}))}}();
/* flash messages close */
!function(){"use strict";function e(e){var t=window.bootstrap&&window.bootstrap.Toast&&window.bootstrap.Toast.getInstance(e);t?t.hide():e.remove()}document.addEventListener("click",(function(t){var n=t.target.closest("[data-ui-flash-dismiss]");if(n){var i=n.closest(".ui-flash");i&&e(i)}}))}();

/* ---------- Avortyx site scripts (no jQuery) ---------- */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function on(type, selector, fn) {
    document.addEventListener(type, function (e) {
      var t = e.target.closest && e.target.closest(selector);
      if (t) fn.call(t, e);
    });
  }

  // ---------- Analytics: which calls to action get clicked, and from where ----------
  // cta_click for sign-up, demo and contact links; feature_explore for links into feature pages.

  var CTAS = [[/^\/sign_up(\.html)?$/, 'sign_up'], [/^\/request-access(\.html)?$/, 'request_access'], [/^\/p\/request_demo(\.html)?$/, 'request_demo'], [/^\/p\/contact(\.html)?$/, 'contact']];

  function clickPlace(a) {
    if (a.closest('.marketing-hero-simple')) return 'hero';
    if (a.closest('nav, .navbar')) return 'navbar';
    if (a.closest('footer')) return 'footer';
    if (a.closest('.avx-mcta')) return 'mobile_bar';
    if (a.closest('.marketing-cta-band')) return 'closing_cta';
    if (a.closest('.modal')) return 'feature_popup';
    var s = a.closest('section');
    if (!s) return 'page';
    if (s.id) return s.id;
    var c = (s.className.match(/(?:avx|mktg|marketing)-[\w-]+/g) || []).filter(function (x) { return x !== 'mktg-section'; });
    return c[0] || 'section';
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || typeof window.gtag !== 'function') return;
    var url = new URL(a.href, location.href);
    // same-site links, plus Request Access on avortyx.com
    if (url.origin !== location.origin && url.host !== 'avortyx.com') return;
    var params = {
      cta_location: clickPlace(a),
      link_text: a.textContent.replace(/\s+/g, ' ').trim().slice(0, 80),
      link_url: url.pathname + url.hash,
      page_path: location.pathname
    };
    for (var i = 0; i < CTAS.length; i++) {
      if (CTAS[i][0].test(url.pathname)) { params.cta = CTAS[i][1]; window.gtag('event', 'cta_click', params); return; }
    }
    if (/^\/features\//.test(url.pathname)) window.gtag('event', 'feature_explore', params);
  }, true);

  // ---------- Cookie notice: a slim bar along the bottom edge, until accepted ----------
  ready(function () {
    if (/(^|;\s*)OKCookie=/.test(document.cookie)) return;
    var box = document.createElement('div');
    box.id = 'okCookie';
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', 'Cookie notice');
    box.innerHTML = '<span>We use cookies to improve your experience on our site. ' +
      '<a href="/privacy_policy">Privacy Policy</a></span><a href="#" id="okClose" role="button">I Accept</a>';
    // never over the stats bar: where a page has one, the notice waits until it has scrolled out of
    // view (it covered the figures under the hero on a laptop screen)
    var stats = document.querySelector('.avx-statsbar');
    if (stats && 'IntersectionObserver' in window) {
      var shown = false;
      var io = new IntersectionObserver(function (entries) {
        var e = entries[entries.length - 1];
        if (shown || e.isIntersecting || e.boundingClientRect.top > 0) return;
        shown = true;
        io.disconnect();
        document.body.appendChild(box);
      });
      io.observe(stats);
    } else {
      document.body.appendChild(box);
    }
    box.querySelector('#okClose').addEventListener('click', function (e) {
      e.preventDefault();
      var until = new Date();
      until.setFullYear(until.getFullYear() + 2);
      document.cookie = 'OKCookie=1; expires=' + until.toUTCString() + '; path=/; SameSite=Lax';
      box.remove();
    });
  });

  // ---------- Pricing: per-minute call cost calculator ----------
  var LEG_LABELS = {
    in_local: 'Consumer Inbound to Local',
    in_toll_free: 'Consumer Inbound to Toll Free',
    out_local: 'Forwarding to Buyer with Local',
    out_toll_free: 'Forwarding to Buyer with Toll Free',
    out_sip: 'Forwarding to Buyer with SIP'
  };
  var LEG_EXAMPLES = {
    in_local: '+17191232222',
    in_toll_free: '+18001232222',
    out_local: '+17191234444',
    out_toll_free: '+18001234444',
    out_sip: '+17191234444@sip.avortyx.com'
  };

  function perMinute(v) { return '$' + v.toFixed(4) + ' /min'; }

  function setText(selector, text) {
    document.querySelectorAll(selector).forEach(function (n) { n.textContent = text; });
  }

  function updateCallCalc() {
    var commit = document.querySelector('.js-calc-commit');
    if (!commit) return;
    var rates = JSON.parse(commit.selectedOptions[0].getAttribute('data-rates'));
    var inbound = document.querySelector('.js-calc-inbound').value;
    var buyer = document.querySelector('.js-calc-buyer').value;
    setText('.js-calc-inbound-label', LEG_LABELS[inbound]);
    setText('.js-calc-inbound-example', LEG_EXAMPLES[inbound]);
    setText('.js-calc-inbound-rate', perMinute(rates[inbound]));
    setText('.js-calc-buyer-label', LEG_LABELS[buyer]);
    setText('.js-calc-buyer-example', LEG_EXAMPLES[buyer]);
    setText('.js-calc-buyer-rate', perMinute(rates[buyer]));
    setText('.js-calc-total', perMinute(rates[inbound] + rates[buyer]));
  }

  // ---------- Pricing: ping cost calculator (its plan follows the call calculator's) ----------
  function count(v) { return Math.round(v).toLocaleString('en-US'); }
  function money(v, digits) { return '$' + v.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }); }

  function updatePingCalc() {
    var calc = document.querySelector('.js-ping-calculator');
    if (!calc) return;
    var days = parseInt(calc.getAttribute('data-days-per-month'), 10);
    var rate = parseFloat(document.querySelector('.js-ping-calc-commit').selectedOptions[0].getAttribute('data-rate-per-1k'));
    var perDay = parseFloat(document.querySelector('.js-ping-calc-per-day').value);
    if (isNaN(perDay) || perDay < 0) perDay = 0;
    var monthly = perDay * days;
    setText('.js-ping-calc-unique-example', count(perDay) + ' per day x ' + days + ' days');
    setText('.js-ping-calc-unique-count', count(monthly) + ' /month');
    setText('.js-ping-calc-rate', money(rate, 4) + ' /1k');
    setText('.js-ping-calc-total', money(monthly / 1000 * rate, 2) + ' /month');
  }

  function syncPlan(from, toSelector) {
    var to = document.querySelector(toSelector);
    if (!to || to.value === from.value) return;
    to.value = from.value;
    to.dispatchEvent(new Event('change', { bubbles: true }));
  }

  ready(function () {
    if (document.querySelector('.pricing-calculator')) {
      on('change', '.pricing-calculator select', updateCallCalc);
      updateCallCalc();
    }
    if (document.querySelector('.js-ping-calculator')) {
      on('input', '.js-ping-calculator input', updatePingCalc);
      on('change', '.js-ping-calculator input', updatePingCalc);
      on('change', '.js-ping-calc-commit', function () { syncPlan(this, '.js-calc-commit'); updatePingCalc(); });
      on('change', '.js-calc-commit', function () { syncPlan(this, '.js-ping-calc-commit'); });
      var commit = document.querySelector('.js-calc-commit');
      if (commit) syncPlan(commit, '.js-ping-calc-commit');
      updatePingCalc();
    }
  });

  // ---------- Google Ads page: show the click values the visitor's own link carried ----------
  ready(function () {
    var box = document.querySelector('.js-google-ads-click-reveal');
    if (!box) return;
    var params = new URLSearchParams(window.location.search);
    var rows = Array.prototype.slice.call(box.querySelectorAll('.js-click-reveal-row'));
    var own = rows.filter(function (r) { return (params.get(r.getAttribute('data-click-key')) || '').trim() !== ''; });
    if (!own.length) return;
    rows.forEach(function (r) { r.classList.add('d-none'); });
    own.forEach(function (r) {
      var v = params.get(r.getAttribute('data-click-key')).trim();
      r.classList.remove('d-none');
      r.querySelector('.js-click-reveal-value').textContent = v.length <= 100 ? v : v.slice(0, 100) + '...';
    });
    box.classList.add('google-ads-click-reveal-own');
    setText('.js-google-ads-click-reveal .js-click-reveal-badge', 'Your click');
    setText('.js-google-ads-click-reveal .js-click-reveal-caption', 'These values came from the link you clicked to reach this page.');
  });
})();

/* ---------- Avortyx Help: a chat that answers from the site's own pages ----------
   Scripted (no AI model): a question is matched to a topic by its words, and every answer
   uses wording from the feature, pricing and FAQ pages, with links to read more. Unmatched
   questions point to the team. The conversation follows the visitor across pages (session). */
(function () {
  'use strict';

  // [id, keywords, answer, links [href, label]]. Keywords of 3 letters or fewer must match a
  // whole word; longer ones match the start of a word ("pric" -> price, pricing)
  var KB = [
    ['pricing', ['pric', 'cost', 'how much', 'rates', 'billing', 'billed', 'per minute', 'pay as you go', 'expensive', 'cheap', 'plan'],
      'Pricing is usage-based with volume discounts and no onboarding fees. Tracking numbers have a monthly rate, and inbound calls are billed per minute, rounded up to the nearest full minute. The inbound rates cover both legs of a call connected to a buyer.',
      [['/pricing', 'See pricing and the calculator']]],
    ['fees', ['onboarding', 'setup fee', 'set up fee', 'hidden fee', 'fees'],
      'No. Avortyx does not charge onboarding fees.', [['/pricing', 'See pricing']]],
    ['discounts', ['discount', 'high volume', 'volume', 'commit'],
      'Yes, for high-volume customers, and committed monthly plans come with lower per-minute rates.',
      [['/pricing', 'Compare plans'], ['/p/contact', 'Contact our team']]],
    ['signup', ['sign up', 'signup', 'get started', 'start', 'free', 'trial', 'register', 'create an account', 'open an account'],
      'You can start free: create your Avortyx account and start tracking, routing and selling calls.',
      [['/request-access', 'Request Access'], ['/p/request_demo', 'Or book a walkthrough']]],
    ['demo', ['demo', 'walkthrough', 'show me', 'sales', 'specialist'],
      'Book a walkthrough with a specialist to see how Avortyx can optimize your call tracking and increase conversions.',
      [['/p/request_demo', 'Request a demo']]],
    ['support', ['support', 'contact', 'human', 'real person', 'talk to', 'email', 'phone number', 'help me', 'my account', 'live chat'],
      'We offer phone, live chat and email support, plus live video sessions with our specialists. You can also write to support@avortyx.com.',
      [['#email-support', 'Email support'], ['/p/contact', 'Contact us']]],
    ['tracking', ['track', 'attribut', 'source', 'campaign', 'keyword', 'dni', 'number insertion', 'swap numbers'],
      'Call tracking shows which ads, pages and offline placements make the phone ring, broken down by traffic source, URL keyword and custom tokens. Dynamic number insertion swaps tracking numbers on your website so every call is tied to its source.',
      [['/features/call_tracking', 'Call tracking'], ['/features/dynamic_number_insertion', 'Number insertion']]],
    ['routing', ['rout', 'ivr', 'call flow', 'filter', 'failover', 'buyer group', 'simultaneous', 'caps'],
      'Every call goes through the same three steps — signal, score, route — before a buyer’s phone rings. The best eligible buyer gets the call, with match rules, caps, hours, concurrency and failover if a buyer misses. Average routing time is 85ms.',
      [['/features/inbound_call_routing', 'Inbound call routing'], ['/#how-it-decides', 'How it decides']]],
    ['integrations', ['integrat', 'connect', 'crm', 'salesforce', 'zoho', 'zapier', 'slack', 'mailchimp', 'typeform', 'google ads', 'adwords', 'voluum', 'cake', 'hasoffers', 'linktrust', 'aws', 'sendgrid', 'mailgun', 'infusionsoft'],
      'Avortyx connects with the tools you already use, including Salesforce, Zoho CRM, Zapier, Slack, Google Ads, Voluum, Cake, HasOffers, Linktrust, AWS S3, MailChimp, Mailgun, SendGrid and Typeform.',
      [['/features/integrations', 'All integrations']]],
    ['carriers', ['carrier', 'telnyx', 'plivo', 'sip', 'voip', 'telephony', 'provider', 'own numbers'],
      'Yes, bring your own: connect Plivo or Telnyx, or any SIP-compatible carrier, and manage the phone numbers from every connected provider in one place.',
      [['/features/multiple_telephone_providers', 'Telephone providers'], ['/features/sip_support', 'SIP support']]],
    ['api', ['api', 'rest', 'developer', 'endpoint', 'access token', 'programmat'],
      'Avortyx is API-first: anything you can do in the dashboard, you can do through the REST API, with access tokens limited to exactly the resources they need.',
      [['/features/api', 'REST API']]],
    ['webhooks', ['webhook', 'postback', 'push data', 'real-time data'],
      'Custom webhooks send real-time call and lead data to any endpoint the moment events happen, with over 30 trigger types.',
      [['/features/custom_webhook', 'Custom webhooks']]],
    ['compliance', ['complian', 'tcpa', 'dnc', 'do not call', 'consent', 'opt out', 'opt-out', 'pii', 'state rule', 'suppression', 'blacklist', 'redact', 'secur'],
      'DNC checks, suppression lists and blacklists run before any call is forwarded or dialed, and state rules enforce calling-hour windows. PII can be cleared or hashed from aged data and restricted to users with the PII permission.',
      [['/features#security-compliance-tools', 'Security and compliance']]],
    ['spam', ['spam', 'scam', 'flagged', 'caller id', 'branded', 'stir', 'shaken', 'kyc', 'kyb', 'verified'],
      'Spam tag mitigation gives you branded caller ID, carrier registration and spam-label removal, so more of your calls get answered. KYC, KYB and STIR/SHAKEN keep your numbers trusted by carriers.',
      [['/features/spam_tag_mitigation', 'Spam tag mitigation'], ['/features/verified_identity', 'Verified identity']]],
    ['transcripts', ['transcri', 'recording', 'record', 'sentiment', 'summar', 'topics', 'listen'],
      'Every recorded call can be transcribed and enriched with AI: summaries, sentiment, topics and a live analytics dashboard. You control who can hear recordings and how long they are kept.',
      [['/features/transcriptions', 'Transcriptions'], ['/features/call_recordings', 'Call recordings']]],
    ['voiceai', ['ai', 'bot', 'chatbot', 'artificial', 'intent', 'scor'],
      'AI scores every caller’s intent and sentiment, and transcribes and summarizes recorded calls. AI SMS bots engage leads, answer questions and schedule calls automatically.',
      [['/features/transcriptions', 'AI transcriptions'], ['/features/ai_sms_bots', 'AI SMS bots']]],
    ['dialer', ['call center', 'disposition', 'transfer', 'agents', 'callback'],
      'The Agent Control Center lets agents interview consumers, transfer to buyers, mute, hold and disposition calls from one interface.',
      [['/features/agent_controls', 'Agent controls']]],
    ['automation', ['automat', 'sequence', 'sms', 'text message', 'web form', 'forms', 'nurture', 'leads'],
      'Lead automation turns web forms into live phone calls with automated SMS, email and outbound call workflows.',
      [['/features/lead_automation', 'Lead automation']]],
    ['data', ['export', 'csv', 'report', 'analytics', 'dashboard', 'metric'],
      'Real-time dashboards show calls, conversions and spend, and you can export calls, leads, recordings and messages to CSV, on demand or on a schedule emailed to your team.',
      [['/features/call_tracking#reports-analytics', 'Reports and analytics'], ['/features/data_export', 'Data exports']]],
    ['hold', ['hold', 'queue', 'busy', 'music'],
      'When every buyer is busy, callers hold with music and connect automatically as capacity frees up.',
      [['/features/hold_queue', 'Hold queue']]],
    ['reliability', ['uptime', 'reliab', 'fast', 'speed', 'latency', 'downtime'],
      'Avortyx runs at 99.9% uptime with an 85ms average routing time, and screening runs on every call before anyone is dialed.',
      [['/#trust', 'Built to be trusted']]],
    ['blog', ['blog', 'article', 'guide', 'learn', 'read'],
      'Our blog has guides and worked examples on call tracking, attribution, routing, compliance and AI.',
      [['/blog', 'Read the blog']]],
    ['careers', ['career', 'job', 'hiring', 'work at', 'join the team'],
      'Help build the platform that decides where every call goes.', [['/careers', 'Careers']]],
    ['legal', ['terms', 'privacy', 'legal', 'cookie'],
      'Here are our policies.', [['/privacy_policy', 'Privacy policy'], ['/terms_of_service', 'Terms of service']]],
    ['hello', ['hi', 'hello', 'hey', 'good morning', 'good afternoon'],
      'Hi! Ask me about pricing, features, integrations or getting started.', []],
    ['thanks', ['thank', 'thanks', 'bye', 'great', 'perfect'],
      'Happy to help. Anything else?', []]
  ];
  var GREETING = 'Hi! I can answer questions about Avortyx — pricing, features, integrations and getting started. What would you like to know?';
  var FALLBACK = ['I don’t have an answer for that one yet. Our team can help, or try one of the topics below.', [['/p/contact', 'Contact us'], ['/p/request_demo', 'Request a demo']]];
  var CHIPS = [['How does pricing work?', 'pricing'], ['How does routing work?', 'routing'], ['Can I bring my own carrier?', 'carriers'], ['Is there an API?', 'api'], ['How do you handle compliance?', 'compliance'], ['Book a demo', 'demo']];
  var STORE = 'avx-help';
  // the team from avortyx.com's chat: [id, name, role, photo]; sales goes to Maya, support to Jordan
  var TEAM = [
    ['maya', 'Maya Decker', 'Sales lead', '/assets/avx-site/img/team/maya-decker.webp'],
    ['jordan', 'Jordan Kim', 'Solutions engineer', '/assets/avx-site/img/team/jordan-kim.webp'],
    ['milena', 'Milena Govich', 'Customer success', '/assets/avx-site/img/team/milena-govich.webp']
  ];
  function member(id) { return TEAM.filter(function (t) { return t[0] === id; })[0]; }
  function face(t, cls) { return '<img class="' + cls + '" src="' + t[3] + '" alt="" loading="lazy" title="' + t[1] + '">'; }

  function norm(s) { return ' ' + s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9/+.-]+/g, ' ').replace(/\s+/g, ' ').trim() + ' '; }

  function find(text) {
    var t = norm(text), best = null, top = 0;
    KB.forEach(function (e) {
      var score = 0;
      e[1].forEach(function (k) {
        var hit = k.length <= 3 ? t.indexOf(' ' + k + ' ') > -1 : t.indexOf(' ' + k) > -1;
        if (hit) score += k.split(' ').length;
      });
      if (score > top) { top = score; best = e; }
    });
    return best;
  }

  function track(name, params) { if (typeof window.gtag === 'function') window.gtag('event', name, params || {}); }

  function load() { try { return JSON.parse(sessionStorage.getItem(STORE)) || null; } catch (e) { return null; } }
  function save(state) { try { sessionStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* storage blocked */ } }

  function init() {
    var state = load() || { open: false, msgs: [] };
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'avx-help-btn';
    btn.setAttribute('aria-label', 'Open Avortyx Help');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'avx-help');
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.4a.5.5 0 0 1-.8-.4V16h0A2.5 2.5 0 0 1 4 13.5v-8z"/></svg>';

    var panel = document.createElement('div');
    panel.className = 'avx-help';
    panel.id = 'avx-help';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Avortyx Help');
    panel.hidden = true;
    panel.innerHTML =
      '<div class="avx-help-head"><span class="avx-help-dot" aria-hidden="true"></span><div><b>Avortyx Help</b><span>Instant answers from our docs</span></div>' +
      '<button type="button" class="avx-help-close" aria-label="Close help">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
      '<div class="avx-help-log" role="log" aria-live="polite"></div>' +
      '<div class="avx-help-chips" aria-label="Suggested questions"></div>' +
      '<form class="avx-help-form"><input type="text" placeholder="Ask a question…" aria-label="Your question" maxlength="200" autocomplete="off">' +
      '<button type="submit" aria-label="Send"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l16-8-6 16-2.5-6.5L4 12z"/></svg></button></form>' +
      '<div class="avx-help-foot"><span>Answers from our docs and pages</span>' +
      '<button type="button" class="avx-help-teamlink"><span class="avx-help-stack">' + TEAM.map(function (t) { return face(t, ''); }).join('') + '</span>Talk to the team</button></div>';
    document.body.appendChild(panel);
    document.body.appendChild(btn);

    var log = panel.querySelector('.avx-help-log'), chips = panel.querySelector('.avx-help-chips');
    var form = panel.querySelector('form'), input = form.querySelector('input');
    var head = panel.querySelector('.avx-help-head > div'), headDot = panel.querySelector('.avx-help-dot');

    // once a visitor picks a teammate, the header shows that person, as on avortyx.com
    function setHead() {
      var t = state.agent && member(state.agent);
      if (!t) return;
      headDot.outerHTML = '<span class="avx-help-dot avx-help-face">' + face(t, '') + '</span>';
      headDot = panel.querySelector('.avx-help-dot');
      head.innerHTML = '<b>' + t[1] + '</b><span>' + t[2] + ' · replies by email</span>';
    }

    // "Need a person?": the team's photos, then sales or support
    function teamCard() {
      var row = document.createElement('div');
      row.className = 'avx-help-team';
      row.innerHTML =
        '<div class="avx-help-team-top"><b>Need a person?</b><span>' + TEAM.length + ' on the team</span></div>' +
        '<div class="avx-help-team-mid"><span class="avx-help-stack avx-help-stack-lg">' +
        TEAM.map(function (t) { return '<button type="button" data-pick="' + t[0] + '" aria-label="' + t[1] + ', ' + t[2] + '">' + face(t, '') + '</button>'; }).join('') +
        '</span><p>Want to talk to someone on the team? Pick a person and they will pick it up from here.</p></div>' +
        '<div class="avx-help-team-cta"><button type="button" data-pick="maya" data-intent="sales">Talk to sales</button>' +
        '<button type="button" data-pick="jordan" data-intent="support">Talk to support</button></div>';
      row.addEventListener('click', function (e) {
        var b = e.target.closest('[data-pick]');
        if (b) pick(b.getAttribute('data-pick'), b.getAttribute('data-intent') || 'direct');
      });
      return row;
    }

    function pick(id, intent) {
      var t = member(id), first = t[1].split(' ')[0];
      track('assistant_team_pick', { member: id, intent: intent });
      state.agent = id;
      add({ who: 'sys', text: 'You’re now talking to ' + t[1] + ' · ' + t[2] });
      var links = [['#email-support', 'Email ' + first], ['https://t.me/avortyxsupport', 'Telegram @avortyxsupport']];
      if (intent === 'sales') links.push(['/p/request_demo', 'Request a demo']);
      add({ who: 'agent', id: id, text: 'Hi! I’m ' + first + '. Send me your details by email or Telegram and I’ll get back to you there.', links: links });
      setHead();
    }

    function bubble(m) {
      if (m.who === 'team') { log.appendChild(teamCard()); log.scrollTop = log.scrollHeight; return; }
      var row = document.createElement('div');
      row.className = 'avx-help-msg avx-help-' + m.who;
      if (m.who === 'me') row.setAttribute('data-avx-no-i18n', '');
      var p = document.createElement('p');
      p.textContent = m.text;
      // a teammate's message: their photo, then name and role over the bubble
      var t = m.who === 'agent' && member(m.id), holder = row;
      if (t) {
        row.className += ' avx-help-bot';
        row.insertAdjacentHTML('beforeend', face(t, 'avx-help-avatar'));
        holder = document.createElement('div');
        holder.insertAdjacentHTML('beforeend', '<small>' + t[1] + ' · ' + t[2] + '</small>');
        row.appendChild(holder);
      }
      holder.appendChild(p);
      if (m.links && m.links.length) {
        var links = document.createElement('div');
        links.className = 'avx-help-links';
        m.links.forEach(function (l) {
          var a = document.createElement('a');
          a.href = l[0];
          a.textContent = l[1] + ' →';
          if (/^https?:/.test(l[0])) { a.target = '_blank'; a.rel = 'noopener'; }
          links.appendChild(a);
        });
        holder.appendChild(links);
      }
      log.appendChild(row);
      log.scrollTop = log.scrollHeight;
    }

    function add(m) {
      state.msgs.push(m);
      if (state.msgs.length > 40) state.msgs = state.msgs.slice(-40);
      save(state);
      bubble(m);
    }

    CHIPS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = c[0];
      b.addEventListener('click', function () { ask(c[0]); });
      chips.appendChild(b);
    });

    function ask(text) {
      text = text.trim();
      if (!text) return;
      add({ who: 'me', text: text });
      var hit = find(text);
      track('assistant_question', { topic: hit ? hit[0] : 'unmatched' });
      var typing = document.createElement('div');
      typing.className = 'avx-help-msg avx-help-bot avx-help-typing';
      typing.innerHTML = '<p><i></i><i></i><i></i></p>';
      log.appendChild(typing);
      log.scrollTop = log.scrollHeight;
      setTimeout(function () {
        typing.remove();
        add(hit ? { who: 'bot', text: hit[2], links: hit[3] } : { who: 'bot', text: FALLBACK[0], links: FALLBACK[1] });
        // offer the team after the first answer, and whenever there is no answer
        if (!state.agent && (!hit || !state.teamShown)) { state.teamShown = true; add({ who: 'team' }); }
      }, 450 + Math.min(500, text.length * 8));
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = input.value;
      input.value = '';
      ask(v);
    });

    function setOpen(on, focus) {
      state.open = on;
      save(state);
      panel.hidden = !on;
      btn.setAttribute('aria-expanded', on ? 'true' : 'false');
      btn.setAttribute('aria-label', on ? 'Close Avortyx Help' : 'Open Avortyx Help');
      document.body.classList.toggle('avx-help-open', on);
      if (on) {
        if (!state.msgs.length) add({ who: 'bot', text: GREETING });
        log.scrollTop = log.scrollHeight;
        if (focus) input.focus();
      } else if (focus) {
        btn.focus();
      }
    }

    btn.addEventListener('click', function () {
      var on = panel.hidden;
      if (on) track('assistant_open', { page_path: location.pathname });
      setOpen(on, true);
    });
    panel.querySelector('.avx-help-close').addEventListener('click', function () { setOpen(false, true); });
    panel.querySelector('.avx-help-teamlink').addEventListener('click', function () { add({ who: 'team' }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) setOpen(false, true); });

    // pick up where the visitor left off on the previous page
    state.msgs.forEach(bubble);
    setHead();
    if (state.open) setOpen(true, false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* ---------- Email support: a short form that writes the message in the visitor's email app ----------
   Opens from any [data-avx-email] link or a link to #email-support (the Support menu, the help
   chat). There is no mail server here: the form builds a mailto: to support@avortyx.com with the
   topic, details, reply address and the page the visitor was on, so nothing is lost or stored. */
(function () {
  'use strict';
  var TO = 'support@avortyx.com';
  var TOPICS = ['Account help', 'Billing', 'Technical issue', 'Number or carrier setup', 'Sales question', 'Something else'];
  var dlg = null;

  function build() {
    dlg = document.createElement('dialog');
    dlg.className = 'avx-mail';
    dlg.setAttribute('aria-labelledby', 'avx-mail-title');
    dlg.innerHTML =
      '<form method="dialog" class="avx-mail-x"><button type="submit" aria-label="Close">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></form>' +
      '<h2 id="avx-mail-title">Email support</h2>' +
      '<p class="avx-mail-sub">Tell us what you need and we will reply by email. This opens your email app with the message ready to send to <b>' + TO + '</b>.</p>' +
      '<form class="avx-mail-form" novalidate>' +
        '<div class="avx-mail-row"><label>Your name<input name="name" autocomplete="name" required></label>' +
        '<label>Your email<input name="email" type="email" autocomplete="email" required></label></div>' +
        '<label>Topic<select name="topic">' + TOPICS.map(function (t) { return '<option>' + t + '</option>'; }).join('') + '</select></label>' +
        '<label>How can we help?<textarea name="message" rows="5" required></textarea></label>' +
        '<p class="avx-mail-err" role="alert" hidden></p>' +
        '<div class="avx-mail-actions"><button type="submit" class="btn btn-td-green">Open in email app</button>' +
        '<button type="button" class="avx-mail-copy">Copy address</button></div>' +
        '<p class="avx-mail-done" role="status" hidden>Your email app should now be open with the message ready. Nothing opened? Write to <a href="mailto:' + TO + '">' + TO + '</a>.</p>' +
      '</form>';
    document.body.appendChild(dlg);
    var form = dlg.querySelector('.avx-mail-form'), err = dlg.querySelector('.avx-mail-err'), done = dlg.querySelector('.avx-mail-done');
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.querySelector('.avx-mail-copy').addEventListener('click', function () {
      var b = this;
      var ok = function () { b.textContent = 'Copied ✓'; setTimeout(function () { b.textContent = 'Copy address'; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(TO).then(ok, function () { b.textContent = TO; });
      else b.textContent = TO;
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements, name = f.name.value.trim(), email = f.email.value.trim(), msg = f.message.value.trim();
      var problem = !name ? 'Please add your name.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Please add a valid email address.' : !msg ? 'Please tell us how we can help.' : '';
      err.hidden = !problem;
      err.textContent = problem;
      if (problem) return;
      var subject = '[' + f.topic.value + '] ' + name;
      var body = msg + '\n\n—\nName: ' + name + '\nReply to: ' + email + '\nTopic: ' + f.topic.value + '\nSent from: ' + location.href;
      if (typeof window.gtag === 'function') window.gtag('event', 'support_email', { topic: f.topic.value, page_path: location.pathname });
      window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      done.hidden = false;
    });
  }

  function open(e) {
    e.preventDefault();
    if (!dlg) build();
    dlg.querySelector('.avx-mail-done').hidden = true;
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    dlg.querySelector('input[name="name"]').focus();
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-avx-email], a[href="#email-support"]');
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    open(e);
  });
})();

/* ---------- Blog: filter the post grid by topic ---------- */
(function () {
  'use strict';
  var bar = document.querySelector('[data-avx-blog-filter]');
  var grid = document.querySelector('[data-avx-blog-grid]');
  if (!bar || !grid) return;
  var empty = grid.parentNode.querySelector('.avx-blog-empty');
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    var cat = b.getAttribute('data-cat');
    bar.querySelectorAll('button').forEach(function (x) {
      var on = x === b;
      x.classList.toggle('avx-on', on);
      x.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    var shown = 0;
    grid.querySelectorAll('.avx-post-card').forEach(function (card) {
      var hit = !cat || card.getAttribute('data-cat') === cat;
      card.hidden = !hit;
      if (hit) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  });
})();

/* ---------- Blog article: highlight the section being read in the contents list ---------- */
(function () {
  'use strict';
  var toc = document.querySelector('.avx-art-toc');
  if (!toc || !('IntersectionObserver' in window)) return;
  var links = Array.prototype.slice.call(toc.querySelectorAll('a'));
  var heads = links.map(function (a) { return document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1))); });
  function mark() {
    var current = 0;
    heads.forEach(function (h, i) { if (h && h.getBoundingClientRect().top < 200) current = i; });
    links.forEach(function (a, i) { a.classList.toggle('avx-on', i === current); });
  }
  // measured in the scroll event itself, where the layout is still clean, rather than in a later
  // animation frame where reading positions would force a fresh layout pass
  window.addEventListener('scroll', mark, { passive: true });
  mark();
})();

/* ---------- Request access: checks the form, then opens an email to the team with it filled in ---------- */
(function () {
  'use strict';
  var form = document.querySelector('[data-avx-request-access]');
  if (!form) return;
  var TO = 'hello@avortyx.io';
  var err = form.querySelector('.avx-ra-err'), done = form.querySelector('.avx-ra-done');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, v = function (k) { return f[k].value.trim(); };
    var problem = !v('name') ? 'Please add your full name.' :
      !v('organization') ? 'Please add your company.' :
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email')) ? 'Please add a valid work email.' :
      !v('use_case') ? 'Please tell us what you are looking to route.' : '';
    err.hidden = !problem;
    err.textContent = problem;
    if (problem) return;
    var body = v('use_case') + '\n\n—\nName: ' + v('name') + '\nCompany: ' + v('organization') +
      '\nWork email: ' + v('email') + '\nPhone: ' + (v('phone') || '—') + '\nSent from: ' + location.href;
    if (typeof window.gtag === 'function') window.gtag('event', 'request_access', { page_path: location.pathname });
    window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent('Access request: ' + v('organization')) + '&body=' + encodeURIComponent(body);
    done.hidden = false;
  });
})();

/* ---------- Careers: filter the open roles by team ---------- */
(function () {
  'use strict';
  var box = document.querySelector('[data-avx-jobs]');
  if (!box) return;
  var chips = box.querySelectorAll('.avx-jobs-chip');
  var jobs = box.querySelectorAll('.avx-job');
  box.addEventListener('click', function (e) {
    var chip = e.target.closest('.avx-jobs-chip');
    if (!chip) return;
    var team = chip.getAttribute('data-team');
    chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
    jobs.forEach(function (j) { j.hidden = !!team && j.getAttribute('data-team') !== team; });
  });
})();

/* ---------- Careers: apply with a CV ----------
   Opens from any [data-avx-apply="<role>"] link. The form posts the CV and details to the
   careers backend named by [data-avx-apply-url], which hands them to the hiring team. The link's own
   mailto: stays as the fallback when script is off or the upload fails. */
(function () {
  'use strict';
  var TO = 'hello@avortyx.io';
  var MAX = 4 * 1024 * 1024;
  var dlg = null, form, err, done, send, role = '';

  function build() {
    dlg = document.createElement('dialog');
    dlg.className = 'avx-mail avx-apply';
    dlg.setAttribute('aria-labelledby', 'avx-apply-title');
    dlg.innerHTML =
      '<form method="dialog" class="avx-mail-x"><button type="submit" aria-label="Close">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></form>' +
      '<h2 id="avx-apply-title">Apply</h2>' +
      '<p class="avx-mail-sub"><b class="avx-apply-role"></b></p>' +
      '<form class="avx-mail-form" novalidate>' +
        '<div class="avx-mail-row"><label>Full name<input name="name" autocomplete="name" required></label>' +
        '<label>Email<input name="email" type="email" autocomplete="email" required></label></div>' +
        '<div class="avx-mail-row"><label><span>Phone <em>(optional)</em></span><input name="phone" type="tel" autocomplete="tel"></label>' +
        '<label><span>Telegram <em>(optional)</em></span><input name="telegram" placeholder="@yourhandle"></label></div>' +
        '<label><span>LinkedIn or portfolio <em>(optional)</em></span><input name="link" type="url" placeholder="https://"></label>' +
        '<label>CV<input name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required>' +
          '<small>PDF or Word, up to 4 MB.</small></label>' +
        '<label><span>Anything you’d like us to know? <em>(optional)</em></span><textarea name="note" rows="4"></textarea></label>' +
        '<input name="company_site" tabindex="-1" autocomplete="off" aria-hidden="true" class="avx-apply-hp">' +
        '<p class="avx-mail-err" role="alert" hidden></p>' +
        '<div class="avx-mail-actions"><button type="submit" class="btn btn-td-green avx-apply-send">Send application</button></div>' +
        '<p class="avx-mail-done" role="status" hidden>Thank you, your application is with our hiring team. We’ll be in touch by email.</p>' +
      '</form>';
    document.body.appendChild(dlg);
    form = dlg.querySelector('.avx-mail-form');
    err = dlg.querySelector('.avx-mail-err');
    done = dlg.querySelector('.avx-mail-done');
    send = dlg.querySelector('.avx-apply-send');
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    form.addEventListener('submit', submit);
  }

  function fail(msg, mail) {
    err.textContent = msg;
    if (mail) {
      var a = document.createElement('a');
      a.href = 'mailto:' + TO + '?subject=' + encodeURIComponent('Application: ' + role);
      a.textContent = TO;
      err.appendChild(document.createTextNode(' You can also email your CV to '));
      err.appendChild(a);
      err.appendChild(document.createTextNode('.'));
    }
    err.hidden = false;
  }

  function submit(e) {
    e.preventDefault();
    var f = form.elements, v = function (k) { return f[k].value.trim(); };
    var cv = f.cv.files && f.cv.files[0];
    var problem = !v('name') ? 'Please add your full name.' :
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email')) ? 'Please add a valid email address.' :
      !cv ? 'Please attach your CV.' :
      !/\.(pdf|docx?)$/i.test(cv.name) ? 'Please attach your CV as a PDF or Word document.' :
      cv.size > MAX ? 'Your CV is over 4 MB. Please send a smaller file.' : '';
    err.hidden = true;
    if (problem) return fail(problem);
    var data = new FormData(form);
    data.set('role', role);
    send.disabled = true;
    send.textContent = 'Sending…';
    var box = document.querySelector('[data-avx-apply-url]');
    fetch(box ? box.getAttribute('data-avx-apply-url') : '/api/apply', { method: 'POST', body: data })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (b) { return { ok: r.ok, body: b }; }); })
      .then(function (r) {
        if (!r.ok) return fail(r.body.error || 'We could not send your application just now.', true);
        if (typeof window.gtag === 'function') window.gtag('event', 'job_application', { role: role });
        form.querySelectorAll('label, .avx-mail-row, .avx-mail-actions').forEach(function (el) { el.hidden = true; });
        done.hidden = false;
      })
      .catch(function () { fail('We could not send your application just now.', true); })
      .then(function () { send.disabled = false; send.textContent = 'Send application'; });
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-avx-apply]');
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    if (!dlg) build();
    var next = a.getAttribute('data-avx-apply');
    // a fresh form for a new role; the same role reopens with what was typed
    if (next !== role || !done.hidden) {
      form.reset();
      form.querySelectorAll('[hidden]').forEach(function (el) { if (el !== err && el !== done) el.hidden = false; });
      err.hidden = true;
      done.hidden = true;
    }
    role = next;
    dlg.querySelector('.avx-apply-role').textContent = role;
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    form.elements.name.focus();
  });
})();

/* ---------- Pricing: monthly cost estimator ----------
   Prices the visitor's volume on every plan with the rate-table figures in data-plans, marks the
   cheapest and itemises it. A plan's commit is a monthly minimum: usage below it is topped up. */
(function () {
  'use strict';
  var box = document.querySelector('[data-avx-est]');
  if (!box) return;
  var PLANS = JSON.parse(box.getAttribute('data-plans'));
  var LOCAL_BUYER = 0.005; // forwarding to a local buyer number, on top of the tracking rate
  var field = function (k) { return box.querySelector('[data-est="' + k + '"]'); };
  var num = function (k) { var v = parseFloat(field(k).value); return isNaN(v) || v < 0 ? 0 : v; };
  var money = function (v) { return '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
  var out = function (k, v) { box.querySelector('[data-est-out="' + k + '"]').textContent = v; };

  function price(p) {
    var numbers = num('numbers'), calls = num('calls'), mins = num('minutes');
    var billed = calls * Math.ceil(mins);
    var pct = Math.min(num('transcribed'), 100) / 100;
    var parts = {
      numbers: numbers * p[3],
      calls: billed * (field('type').value === 'tf' ? p[6] : p[5]),
      buyer: field('buyer').value === 'local' ? billed * LOCAL_BUYER : 0,
      ai: calls * mins * pct * p[8],
      sms: num('sms') * p[7],
      spam: field('spam').checked ? numbers * p[4] : 0
    };
    parts.usage = parts.numbers + parts.calls + parts.buyer + parts.ai + parts.sms + parts.spam;
    parts.topup = Math.max(0, p[2] - parts.usage);
    parts.total = parts.usage + parts.topup;
    return parts;
  }

  function update() {
    var priced = PLANS.map(price), best = 0;
    priced.forEach(function (r, i) { if (r.total < priced[best].total - 1e-9) best = i; });
    box.querySelectorAll('.avx-est-plans li').forEach(function (li, i) {
      li.querySelector('.avx-est-total').textContent = money(priced[i].total);
      li.classList.toggle('avx-on', i === best);
      li.querySelector('.avx-est-best').hidden = i !== best;
    });
    var r = priced[best];
    // the plan's name as the page shows it (translated on /ru, /ja and /zh)
    out('plan', box.querySelectorAll('.avx-est-plan')[best].textContent);
    ['numbers', 'calls', 'buyer', 'ai', 'sms', 'spam', 'usage', 'topup'].forEach(function (k) { out(k, money(r[k])); });
  }

  box.addEventListener('input', update);
  box.addEventListener('change', update);
  update();
})();

/* ---------- Images: fetch the rest of the page's pictures before they are needed ----------
   Below-the-fold images are lazy, so on a quick scroll they used to arrive late. Once the page
   has loaded and the browser is idle, the remaining lazy images are switched to eager a few at
   a time, in page order, so they are already decoded when the visitor reaches them. Skipped on
   data-saver connections. */
(function () {
  'use strict';
  var c = navigator.connection;
  if (c && (c.saveData || /2g/.test(c.effectiveType || ''))) return;
  var idle = window.requestIdleCallback || function (f) { return setTimeout(f, 200); };
  function step() {
    var batch = [].slice.call(document.querySelectorAll('img[loading="lazy"]'), 0, 4);
    if (!batch.length) return;
    batch.forEach(function (img) { img.loading = 'eager'; });
    idle(step, { timeout: 2000 });
  }
  addEventListener('load', function () { setTimeout(function () { idle(step, { timeout: 3000 }); }, 1500); });
})();

/* ---------- Home hero: the background film ----------
   Starts only after the page has loaded, so it never competes with the first paint. Phones get the
   480p file, wider screens the 720p one. It plays only while the hero is on screen and the tab is
   visible; with reduced motion or data saver the poster stays instead. */
(function () {
  'use strict';
  var v = document.querySelector('[data-avx-hero-film]');
  if (!v) return;
  var wrap = v.parentNode;
  var c = navigator.connection;
  var still = (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) ||
    (c && (c.saveData || /2g/.test(c.effectiveType || '')));
  if (still) return;
  var inView = true, started = false;
  function sync() {
    if (!started) return;
    if (inView && !document.hidden && !scrollingNow) { var p = v.play(); if (p) p.catch(function () {}); }
    else v.pause();
  }
  function start() {
    v.muted = true;
    v.src = '/assets/avx-site/video/hero-blue-' + (innerWidth < 768 ? '480' : '720') + '.mp4';
    v.addEventListener('playing', function () { wrap.classList.add('avx-on'); }, { once: true });
    started = true;
    sync();
  }
  // it plays only while at least half the hero is on screen, and holds still while the page is
  // being scrolled (decoding and drawing video on top of every scroll frame caused jank)
  var scrollT = 0, scrollingNow = false;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { inView = e[e.length - 1].isIntersecting; sync(); }, { threshold: 0.5 }).observe(wrap);
  }
  addEventListener('scroll', function () {
    if (!scrollingNow) { scrollingNow = true; if (started) v.pause(); }
    clearTimeout(scrollT);
    scrollT = setTimeout(function () { scrollingNow = false; sync(); }, 250);
  }, { passive: true });
  document.addEventListener('visibilitychange', sync);
  function later() { setTimeout(start, 300); }
  if (document.readyState === 'complete') later(); else addEventListener('load', later);
})();

/* ---------- Legal Center: /legal?doc=NN shows one document ----------
   Every document is in the page; this shows the one in ?doc (or the list), highlights it in the
   menu and switches on click without a reload. Back and forward work. Without JS, all show. */
(function () {
  'use strict';
  var root = document.querySelector('[data-avx-legal]');
  if (!root) return;
  var panels = root.querySelectorAll('[data-doc-panel]');
  var links = root.querySelectorAll('.avx-legal-nav a[data-doc]');

  function show(id, scroll) {
    var found = false;
    panels.forEach(function (p) {
      var on = p.getAttribute('data-doc-panel') === id;
      p.hidden = !on;
      if (on) found = true;
    });
    if (!found) return show('', scroll);
    links.forEach(function (a) {
      if (a.getAttribute('data-doc') === id) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    var panel = root.querySelector('[data-doc-panel="' + id + '"]');
    var title = panel.querySelector('h2').textContent;
    document.title = (id ? title + ' | ' : '') + 'Legal Center | Avortyx';
    if (scroll) root.scrollIntoView({ block: 'start' });
  }

  root.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-doc]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    var id = a.getAttribute('data-doc');
    history.pushState({ doc: id }, '', id ? location.pathname + '?doc=' + id : location.pathname);
    show(id, true);
  });
  window.addEventListener('popstate', function () {
    show(new URLSearchParams(location.search).get('doc') || '', false);
  });

  root.classList.add('avx-legal-ready');
  show(new URLSearchParams(location.search).get('doc') || '', false);
})();

/* ---------- Language menu: the globe in the navbar opens and closes its list ---------- */
(function () {
  'use strict';
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-avx-lang-toggle]');
    document.querySelectorAll('.avx-lang-menu.show').forEach(function (m) {
      if (!btn || m.previousElementSibling !== btn) {
        m.classList.remove('show');
        m.previousElementSibling.setAttribute('aria-expanded', 'false');
      }
    });
    if (!btn) return;
    var menu = btn.nextElementSibling, open = !menu.classList.contains('show');
    menu.classList.toggle('show', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var m = document.querySelector('.avx-lang-menu.show');
    if (!m) return;
    m.classList.remove('show');
    m.previousElementSibling.setAttribute('aria-expanded', 'false');
    m.previousElementSibling.focus();
  });
})();

/* ---------- "Learn more": reveals the detail a section keeps one click away (components/More.jsx) ---------- */
(function () {
  'use strict';
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-avx-more]');
    if (!btn) return;
    var body = document.getElementById(btn.getAttribute('aria-controls'));
    if (!body) return;
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    body.hidden = !open;
    var label = btn.querySelector('.avx-more-label');
    if (label) label.textContent = open ? btn.getAttribute('data-less') : btn.getAttribute('data-label');
  });
})();

/* ---------- People section: reveal on scroll, keep motion only while on screen, tick the call clock ---------- */
(function () {
  'use strict';
  var sec = document.querySelector('[data-avx-people]');
  if (!sec) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) { sec.classList.add('avx-in'); return; }
  sec.classList.add('avx-anim');
  var clock = sec.querySelector('[data-ph="clock"]'), secs = 42, timer = null;
  function tick() {
    secs += 1;
    if (clock) clock.textContent = Math.floor(secs / 60) + ':' + ('0' + (secs % 60)).slice(-2);
  }
  // the lead photo's card plays the call through: scoring, buyer rules, connected (payout pops), hold
  var card = sec.querySelector('[data-ph="card"]'), fig = card && card.closest('.avx-ph');
  var STEPS = [[0, 1900], [1, 1900], [2, 4600]], step = 0, story = null;
  function play() {
    var s = STEPS[step];
    card.setAttribute('data-step', s[0]);
    fig.setAttribute('data-step', s[0]);
    step = (step + 1) % STEPS.length;
    story = setTimeout(play, s[1]);
  }
  new IntersectionObserver(function (entries) {
    var on = entries[entries.length - 1].isIntersecting;
    if (on) sec.classList.add('avx-in');
    sec.classList.toggle('avx-ph-on', on);
    if (on && !timer) timer = setInterval(tick, 1000);
    if (!on && timer) { clearInterval(timer); timer = null; }
    if (card && on && !story) story = setTimeout(play, 1600);
    if (!on && story) { clearTimeout(story); story = null; }
  }, { threshold: 0.2 }).observe(sec);

  // desktop: tilt the mosaic towards the pointer
  var mosaic = sec.querySelector('[data-ph="mosaic"]');
  if (mosaic && window.matchMedia('(hover: hover) and (min-width: 992px)').matches) {
    var raf = 0, mx = 0, my = 0;
    function set() {
      mosaic.style.setProperty('--mx', mx.toFixed(3));
      mosaic.style.setProperty('--my', my.toFixed(3));
      raf = 0;
    }
    mosaic.addEventListener('pointermove', function (e) {
      var r = mosaic.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(set);
    });
    mosaic.addEventListener('pointerleave', function () {
      mx = 0; my = 0;
      if (!raf) raf = requestAnimationFrame(set);
    });
  }
})();

/* ---------- Request Demo / Request Access open at once ----------
   Chromium prerenders the two sign-up pages as soon as the pointer rests on (or a finger touches)
   a link to them, so the click shows a page that is already loaded; their HTML is prefetched up
   front. Browsers without speculation rules fetch the page on hover/touch instead. Works with the
   /ru /ja /zh prefixes too. */
(function () {
  'use strict';
  var PAGES = ['/request-access', '/p/request_demo'];
  var match = [];
  PAGES.forEach(function (p) { match.push(p, '/*' + p); });
  if (HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules')) {
    var rules = document.createElement('script');
    rules.type = 'speculationrules';
    rules.textContent = JSON.stringify({
      prefetch: [{ source: 'document', where: { or: match.map(function (m) { return { href_matches: m }; }) }, eagerness: 'eager' }],
      prerender: [{ source: 'document', where: { or: match.map(function (m) { return { href_matches: m }; }) }, eagerness: 'moderate' }]
    });
    document.head.appendChild(rules);
    return;
  }
  var done = {};
  function warm(e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var path = a.pathname.replace(/^\/(ru|ja|zh)(?=\/)/, '');
    if (PAGES.indexOf(path) < 0 || done[a.href]) return;
    done[a.href] = true;
    var l = document.createElement('link');
    l.rel = 'prefetch';
    l.href = a.href;
    document.head.appendChild(l);
  }
  document.addEventListener('pointerover', warm, { passive: true });
  document.addEventListener('touchstart', warm, { passive: true });
})();

/* ---------- Request Access / Request Demo: a one-line explanation on hover or keyboard focus ----------
   So a new visitor can tell the two apart: access is an application for an account (invite-only,
   reviewed, setup link by email), a demo is a walkthrough with a specialist. */
(function () {
  'use strict';
  var TIPS = {
    '/request-access': 'Apply for your own account. Our team reviews each request and emails you a setup link.',
    '/p/request_demo': 'See Avortyx live with a specialist before you sign up.'
  };
  var tip = null, owner = null;
  function tipFor(a) {
    if (!a || a.closest('.avx-tip-off')) return null;
    var path = a.pathname.replace(/^\/(ru|ja|zh)(?=\/)/, '');
    return TIPS[path] || null;
  }
  function place() {
    if (!owner || !tip) return;
    var r = owner.getBoundingClientRect(), t = tip.getBoundingClientRect(), gap = 10;
    var below = r.bottom + gap + t.height < window.innerHeight;
    var left = Math.min(Math.max(r.left + r.width / 2 - t.width / 2, 12), window.innerWidth - t.width - 12);
    tip.style.left = Math.round(left) + 'px';
    tip.style.top = Math.round(below ? r.bottom + gap : r.top - gap - t.height) + 'px';
    tip.style.setProperty('--avx-tip-x', Math.round(r.left + r.width / 2 - left) + 'px');
    tip.classList.toggle('avx-tip-above', !below);
  }
  function show(a) {
    var text = tipFor(a);
    if (!text) return;
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'avx-cta-tip';
      tip.id = 'avx-cta-tip';
      tip.setAttribute('role', 'tooltip');
      document.body.appendChild(tip);
    }
    owner = a;
    tip.textContent = text;
    a.setAttribute('aria-describedby', 'avx-cta-tip');
    tip.classList.add('avx-on');
    place();
  }
  function hide() {
    if (owner) owner.removeAttribute('aria-describedby');
    owner = null;
    if (tip) tip.classList.remove('avx-on');
  }
  var hover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  if (hover) {
    document.addEventListener('mouseover', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (a && a !== owner && tipFor(a)) show(a);
    });
    document.addEventListener('mouseout', function (e) {
      if (owner && !owner.contains(e.relatedTarget)) hide();
    });
  }
  document.addEventListener('focusin', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (a && tipFor(a)) show(a); else hide();
  });
  document.addEventListener('focusout', hide);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
  window.addEventListener('scroll', function () { if (owner) place(); }, { passive: true });
  window.addEventListener('resize', hide);
})();

/* ---------- Language switch without a wait ----------
   The moment the language menu is about to open (pointer on the globe, a tap or keyboard focus),
   the other languages' versions of this page are prepared in the background: Chromium prerenders
   them, other browsers prefetch them. Picking a language then shows a page that is already there. */
(function () {
  'use strict';
  var warmed = false;
  function warm() {
    if (warmed) return;
    warmed = true;
    var urls = [].slice.call(document.querySelectorAll('a[data-avx-lang]'))
      .filter(function (a) { return a.getAttribute('aria-current') !== 'true'; })
      .map(function (a) { return a.getAttribute('href'); })
      .filter(function (h, i, all) { return h && all.indexOf(h) === i; });
    if (!urls.length) return;
    if (HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules')) {
      var rules = document.createElement('script');
      rules.type = 'speculationrules';
      rules.textContent = JSON.stringify({ prerender: [{ source: 'list', urls: urls, eagerness: 'immediate' }] });
      document.head.appendChild(rules);
    } else {
      urls.forEach(function (u) {
        var l = document.createElement('link');
        l.rel = 'prefetch';
        l.href = u;
        document.head.appendChild(l);
      });
    }
  }
  function maybe(e) {
    if (e.target.closest && e.target.closest('.avx-lang')) warm();
  }
  document.addEventListener('pointerover', maybe, { passive: true });
  document.addEventListener('touchstart', maybe, { passive: true });
  document.addEventListener('focusin', maybe);
})();

/* ---------- Measuring the page: how far visitors read ----------
   section_view fires once per section per visit (as half of it comes on screen), so reports show
   where readers stop; scroll_depth fires at 25, 50, 75 and 100% of the page. */
(function () {
  'use strict';
  function send(name, params) { if (typeof window.gtag === 'function') window.gtag('event', name, params); }
  var main = document.querySelector('main');
  if (!main) return;
  var sections = [].slice.call(main.querySelectorAll(':scope > section'));
  if ('IntersectionObserver' in window && sections.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var s = e.target, i = sections.indexOf(s);
        var name = s.id || ((s.className.match(/(?:avx|mktg|marketing)-[\w-]+/g) || []).filter(function (x) { return x !== 'mktg-section'; })[0]) || 'section';
        send('section_view', { section: name, section_index: i + 1, section_count: sections.length, page_path: location.pathname });
      });
    }, { threshold: 0.5 });
    sections.forEach(function (s) { io.observe(s); });
  }
  // the page height is read once and then kept current by a ResizeObserver (it runs after layout),
  // so a scroll never forces a layout of its own; only new milestones are reported
  var marks = [25, 50, 75, 100], next = 0, pageH = document.documentElement.scrollHeight;
  if ('ResizeObserver' in window) new ResizeObserver(function () { pageH = document.documentElement.scrollHeight; }).observe(document.body);
  function depth() {
    if (next >= marks.length) return;
    var h = pageH;
    var pct = h ? (window.scrollY + window.innerHeight) / h * 100 : 0;
    while (next < marks.length && pct >= marks[next] - 1) {
      send('scroll_depth', { percent: marks[next], page_path: location.pathname });
      next++;
    }
    if (next >= marks.length) window.removeEventListener('scroll', depth);
  }
  window.addEventListener('scroll', depth, { passive: true });
})();

/* ---------- Feature pop-up: "Back to …" stays pinned while the pop-up scrolls ----------
   The page loaded into the pop-up keeps its back link in the hero, which scrolls away. Once the
   content arrives, the link moves into a zero-height sticky strip at the top of the pop-up body. */
(function () {
  'use strict';
  var body = document.querySelector('[data-feature-modal-body]');
  if (!body || !('MutationObserver' in window)) return;
  new MutationObserver(function () {
    if (body.querySelector(':scope > .avx-modal-back')) return;
    var a = body.querySelector('.mktg-subpage-hero .mktg-subpage-back, .mktg-subpage-hero-nav .mktg-subpage-back');
    if (!a) return;
    var bar = document.createElement('nav');
    bar.className = 'avx-modal-back';
    bar.setAttribute('aria-label', 'Back');
    bar.appendChild(a);
    body.insertBefore(bar, body.firstChild);
    // sit just under the pop-up's own sticky strip (language, Request Access, close)
    // (its styles arrive with the content, so its height is followed as it settles)
    var strip = body.querySelector('#injected-modal-header');
    if (!strip) return;
    var place = function () { bar.style.top = (strip.offsetHeight + 10) + 'px'; };
    place();
    if ('ResizeObserver' in window) new ResizeObserver(place).observe(strip);
  }).observe(body, { childList: true });
})();
