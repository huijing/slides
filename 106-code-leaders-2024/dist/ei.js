!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://cpwebassets.codepen.io/assets/packs/",r(r.s=891)}({891:function(e,t,r){"use strict";r.r(t);var n={_HTML_TYPES:["html","xml","haml","markdown","slim","pug","application/x-slim"],_CSS_TYPES:["css","less","scss","sass","stylus","postcss","text/css","text/x-sass","text/x-scss","text/x-less","text/x-styl"],_JS_TYPES:["js","javascript","coffeescript","livescript","typescript","babel","text/javascript","text/x-coffeescript","text/x-livescript","text/typescript"],_CUSTOM_EDITOR_TYPES:{vue:"js",flutter:"js"},cmModeToType:function(e){var t=this._getSafeInputMode(e);return this._getType(t)},_getSafeInputMode:function(e){return("string"==typeof e?e:e.name).toLowerCase()},syntaxToType:function(e){return this._getType(e)},_getType:function(e){return this._HTML_TYPES.includes(e)?"html":this._CSS_TYPES.includes(e)?"css":this._JS_TYPES.includes(e)?"js":this._CUSTOM_EDITOR_TYPES[e]?this._CUSTOM_EDITOR_TYPES[e]:"unknown"}};function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=function e(t){"loading"===document.readyState?setTimeout((function(){e(t)}),9):t()},s=new Set(["title","description","tags","html_classes","head","stylesheets","scripts"]),u=function(e){for(var t={},r=e.attributes,n=0,o=r.length;n<o;n++){var a=r[n].name;0===a.indexOf("data-")&&(t[a.replace("data-","")]=r[n].value)}return t=f(t),c(t)?(t.user=l(t,e),t):null},l=function(e,t){if("string"==typeof e.user)return e.user;for(var r=0,n=t.children.length;r<n;r++){var o=(t.children[r].href||"").match(/codepen\.(io|dev)\/(\w+)\/pen\//i);if(o)return o[2]}return"anon"},c=function(e){return"prefill"in e||e["slug-hash"]},f=function(e){return e.href&&(e["slug-hash"]=e.href),e.type&&(e["default-tab"]=e.type),e.safe&&(e.animations="true"===e.safe?"run":"stop-after-5"),e},p=function(e){var t=d(e),r=e.preview&&"true"===e.preview?"embed/preview":"embed";if("prefill"in e)return[t,r,"prefill"].join("/");var n=h(e),o=e.user||"anon",a=e["slug-hash"];return void 0!==e.token&&(a+="/"+e.token),[t,o,r,a+"?"+n].join("/").replace(/\/\//g,"//")},d=function(e){return e.host?m(e.host):"https://codepen.io"},m=function(e){return e.match(/^\/\//)||!e.match(/https?:/)?document.location.protocol+"//"+e:e},h=function(e){var t="";for(var r in e)"prefill"!==r&&(""!==t&&(t+="&"),t+=r+"="+encodeURIComponent(e[r]));return t},y=function(e){return e.height||300},v=function(e,t){var r,n=document.createDocumentFragment();n.append(b(e)),"prefill"in e&&(r=g(e,t),n.append(r)),S(t,n),r&&r.submit()},_=function(e,t){var r=document.createElement(e);for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.setAttribute(n,t[n]);return r},g=function(e,t){var r=_("form",{class:"cp_embed_form",style:"display: none;",method:"post",action:p(e),target:e.name});for(var a in e.data=function(e){if(Object.hasOwn(e.dataset,"prefill")){var t={},r=e.dataset.prefill;for(var a in r=JSON.parse(decodeURI(r)||"{}"))s.has(a)&&(t[a]=r[a]);var i,u=o(e.querySelectorAll("[data-lang]"));try{for(u.s();!(i=u.n()).done;){var l=i.value,c=l.dataset.lang;l.dataset.optionsAutoprefixer&&(t.css_prefix="autoprefixer");var f=n.syntaxToType(c);t[f]=l.innerText,c!==f&&(t[f+"_pre_processor"]=c);var p=l.dataset.langVersion;p&&(t[f+"_version"]=p)}}catch(e){u.e(e)}finally{u.f()}return JSON.stringify(t)}}(t),e)"prefill"!==a&&r.append(_("input",{type:"hidden",name:a,value:e[a]}));return r},b=function(e){var t,r=p(e);t=e["pen-title"]||"CodePen Embed";var n={allowfullscreen:"true",allowpaymentrequest:"true",allowTransparency:"true",class:"cp_embed_iframe "+(e.class||""),frameborder:"0",height:y(e),width:"100%",name:e.name||"CodePen Embed",scrolling:"no",src:r,style:"width: 100%; overflow:hidden; display:block;",title:t};return"prefill"in e==!1&&(n.loading="lazy"),e["slug-hash"]&&(n.id="cp_embed_"+e["slug-hash"].replace("/","_")),_("iframe",n)},S=function(e,t){if(e.parentNode){var r=document.createElement("div");return r.className="cp_embed_wrapper",r.append(t),e.parentNode.replaceChild(r,e),r}return e.append(t),e},T=1;function x(e){e="string"==typeof e?e:".codepen";for(var t=document.querySelectorAll(e),r=0,n=t.length;r<n;r++){var o=t[r],a=u(o);a&&(a.name="cp_embed_"+T++,v(a,o))}"function"==typeof __CodePenIFrameAddedToPage&&__CodePenIFrameAddedToPage()}window.__cp_domReady=i,window.__CPEmbed=x,i(x)}});