"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slideCount = document.querySelectorAll('section').length;

var controls = function controls(event) {
  var isCover = window.location.hash === '' || window.location.hash === '#start';

  if (isCover) {
    start(event);
  } else {
    navigate(event);
  }
};

var start = function start(event) {
  if (event.code === 'Space' || event.code === 'ArrowRight' || event.code === 'Period') {
    window.location.hash = '#slide1';
  }
};

var navigate = function navigate(event) {
  var isFirstSlide = window.location.hash === '#slide1';
  var isLastSlide = window.location.hash === '#slide' + (slideCount - 1);
  var activeSlide = document.querySelector('[id^="slide"]:target');
  var slideNum = parseInt(activeSlide.getAttribute('id').substring(5));

  if (activeSlide && !isLastSlide && (event.code === 'Space' || event.code === 'ArrowRight' || event.code === 'PageDown')) {
    window.location.hash = 'slide' + (slideNum + 1);
  }

  if (!isFirstSlide && (event.code === 'ArrowLeft' || event.code === 'PageUp')) {
    window.location.hash = 'slide' + (slideNum - 1);
  }

  if (isLastSlide && event.code === 'KeyR') {
    window.location.hash = '#start';
  }

  if (activeSlide && event.code === 'Period') {
    var winHash = window.location.hash;
    var activeList = document.querySelector(winHash + ' .revealable');

    if (activeList) {
      var listArray = _toConsumableArray(document.querySelectorAll(winHash + ' .revealable .fragment'));

      if (listArray[0]) {
        listArray[0].classList.remove('fragment');
      }
    }
  }

  if (activeSlide && event.code === 'Comma') {
    var _winHash = window.location.hash;

    var _activeList = document.querySelector(_winHash + ' .revealable');

    if (_activeList) {
      var _listArray = _toConsumableArray(document.querySelectorAll(_winHash + ' .revealable li'));

      var hideList = _listArray.forEach(function (list) {
        list.classList.add('fragment');
      });

      return hideList;
    }
  }
};

var launchFullscreen = function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
};

var toggleFullScreen = function toggleFullScreen(event) {
  if (event.code === 'KeyF') {
    launchFullscreen(document.documentElement);
  }
};

document.body.addEventListener('keydown', controls, false);
document.addEventListener('keydown', toggleFullScreen, false);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var gamepadConnected = ('ongamepadconnected' in window);
var controllers = {};
var gamepadLand;
var buttonsCache = [];
var buttonsStatus = []; // Mapping is subject to change
// Turn on debugger function to check

var leftJoyConMapping = {
  0: 'Left',
  1: 'Down',
  2: 'Up',
  3: 'Right',
  4: 'LSL',
  5: 'LSR',
  8: 'Minus',
  10: 'LStick',
  13: 'Capture',
  14: 'L',
  15: 'ZL'
};

if (!gamepadConnected) {
  setInterval(pollGamepads, 500);
}

var pollGamepads = function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [];

  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (gamepads[i].index in controllers) {
        controllers[gamepads[i].index] = gamepads[i];
      } else {
        addGamepad(gamepads[i]);
      }
    }
  }
};

var addGamepad = function addGamepad(gamepad) {
  console.log(gamepad);
  window.location.hash = '#start';
  controllers[gamepad.index] = gamepad;
  var d = document.createElement('aside');
  d.className = 'controllers';
  var p = document.createElement('span');
  p.innerHTML = '🕹';
  p.setAttribute('id', 'controller' + gamepad.index);
  d.appendChild(p);
  document.body.appendChild(d);
  gamepadLand = requestAnimationFrame(updateStatus);
};

var updateStatus = function updateStatus() {
  if (!gamepadConnected) {
    pollGamepads();
  }

  for (var j in controllers) {
    var controller = controllers[j];
    var buttonsArray = controller.buttons;

    for (var i = 0; i < buttonsArray.length; i++) {
      if (buttonPressed(buttonsArray[i])) {
        mappingDebugger(i);
        var isCover = window.location.hash === '' || window.location.hash === '#start';
        var isFirstSlide = window.location.hash === '#slide1';
        var isLastSlide = window.location.hash === '#slide' + (slideCount - 1);

        if (isCover) {
          window.location.hash = '#slide1';
        } else {
          var activeSlide = document.querySelector('[id^="slide"]:target');
          var slideNum = parseInt(activeSlide.getAttribute('id').substring(5));

          switch (leftJoyConMapping[i]) {
            case 'Left':
              if (!isFirstSlide) {
                window.location.hash = 'slide' + (slideNum - 1);
              }

              break;

            case 'Right':
              if (activeSlide && !isLastSlide) {
                console.log(slideNum);
                window.location.hash = 'slide' + (slideNum + 1);
              }

              break;

            case 'Up':
              break;

            case 'Down':
              break;

            case 'Minus':
              if (isLastSlide) {
                window.location.hash = '#slide1';
              }

              break;

            case 'L':
              launchFullscreen(document.documentElement);
              break;

            case 'ZL':
              exitFullscreen();
              break;

            default:
              console.log('The mapping is probably off. Turn on debugger to check. ¯\\\_(ツ)_/¯');
          }
        }
      }
    }
  }

  gamepadLand = setTimeout(function () {
    return requestAnimationFrame(updateStatus);
  }, 200);
};

var buttonPressed = function buttonPressed(key) {
  if (_typeof(key) == 'object') {
    return key.pressed;
  }

  return false;
};

var mappingDebugger = function mappingDebugger(index) {
  console.log('Did you press ' + leftJoyConMapping[index] + '? If you see "Undefined", the mapping is off. Index position of pressed button is ' + index);
};

var connectHandler = function connectHandler(event) {
  addGamepad(event.gamepad);
};

var disconnectHandler = function disconnectHandler(event) {
  removeGamepad(event.gamepad);
};

var removeGamepad = function removeGamepad(gamepad) {
  var d = document.getElementById('controller' + gamepad.index);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
  cancelAnimationFrame(gamepadLand);
};

var exitFullscreen = function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

window.addEventListener("gamepadconnected", connectHandler);
window.addEventListener("gamepaddisconnected", disconnectHandler);
"use strict";

/* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (u) {
  var c = /\blang(?:uage)?-([\w-]+)\b/i,
      r = 0,
      C = {
    manual: u.Prism && u.Prism.manual,
    disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
    util: {
      encode: function e(r) {
        return r instanceof _ ? new _(r.type, e(r.content), r.alias) : Array.isArray(r) ? r.map(e) : r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function type(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", {
          value: ++r
        }), e.__id;
      },
      clone: function n(e, t) {
        var a,
            r,
            i = C.util.type(e);

        switch (t = t || {}, i) {
          case "Object":
            if (r = C.util.objId(e), t[r]) return t[r];

            for (var o in a = {}, t[r] = a, e) {
              e.hasOwnProperty(o) && (a[o] = n(e[o], t));
            }

            return a;

          case "Array":
            return r = C.util.objId(e), t[r] ? t[r] : (a = [], t[r] = a, e.forEach(function (e, r) {
              a[r] = n(e, t);
            }), a);

          default:
            return e;
        }
      },
      getLanguage: function getLanguage(e) {
        for (; e && !c.test(e.className);) {
          e = e.parentElement;
        }

        return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
      },
      currentScript: function currentScript() {
        if ("undefined" == typeof document) return null;
        if ("currentScript" in document) return document.currentScript;

        try {
          throw new Error();
        } catch (e) {
          var r = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];

          if (r) {
            var n = document.getElementsByTagName("script");

            for (var t in n) {
              if (n[t].src == r) return n[t];
            }
          }

          return null;
        }
      }
    },
    languages: {
      extend: function extend(e, r) {
        var n = C.util.clone(C.languages[e]);

        for (var t in r) {
          n[t] = r[t];
        }

        return n;
      },
      insertBefore: function insertBefore(n, e, r, t) {
        var a = (t = t || C.languages)[n],
            i = {};

        for (var o in a) {
          if (a.hasOwnProperty(o)) {
            if (o == e) for (var l in r) {
              r.hasOwnProperty(l) && (i[l] = r[l]);
            }
            r.hasOwnProperty(o) || (i[o] = a[o]);
          }
        }

        var s = t[n];
        return t[n] = i, C.languages.DFS(C.languages, function (e, r) {
          r === s && e != n && (this[e] = i);
        }), i;
      },
      DFS: function e(r, n, t, a) {
        a = a || {};
        var i = C.util.objId;

        for (var o in r) {
          if (r.hasOwnProperty(o)) {
            n.call(r, o, r[o], t || o);
            var l = r[o],
                s = C.util.type(l);
            "Object" !== s || a[i(l)] ? "Array" !== s || a[i(l)] || (a[i(l)] = !0, e(l, n, o, a)) : (a[i(l)] = !0, e(l, n, null, a));
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(e, r) {
      C.highlightAllUnder(document, e, r);
    },
    highlightAllUnder: function highlightAllUnder(e, r, n) {
      var t = {
        callback: n,
        container: e,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      C.hooks.run("before-highlightall", t), t.elements = Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)), C.hooks.run("before-all-elements-highlight", t);

      for (var a, i = 0; a = t.elements[i++];) {
        C.highlightElement(a, !0 === r, t.callback);
      }
    },
    highlightElement: function highlightElement(e, r, n) {
      var t = C.util.getLanguage(e),
          a = C.languages[t];
      e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t;
      var i = e.parentNode;
      i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t);
      var o = {
        element: e,
        language: t,
        grammar: a,
        code: e.textContent
      };

      function l(e) {
        o.highlightedCode = e, C.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, C.hooks.run("after-highlight", o), C.hooks.run("complete", o), n && n.call(o.element);
      }

      if (C.hooks.run("before-sanity-check", o), !o.code) return C.hooks.run("complete", o), void (n && n.call(o.element));
      if (C.hooks.run("before-highlight", o), o.grammar) {
        if (r && u.Worker) {
          var s = new Worker(C.filename);
          s.onmessage = function (e) {
            l(e.data);
          }, s.postMessage(JSON.stringify({
            language: o.language,
            code: o.code,
            immediateClose: !0
          }));
        } else l(C.highlight(o.code, o.grammar, o.language));
      } else l(C.util.encode(o.code));
    },
    highlight: function highlight(e, r, n) {
      var t = {
        code: e,
        grammar: r,
        language: n
      };
      return C.hooks.run("before-tokenize", t), t.tokens = C.tokenize(t.code, t.grammar), C.hooks.run("after-tokenize", t), _.stringify(C.util.encode(t.tokens), t.language);
    },
    matchGrammar: function matchGrammar(e, r, n, t, a, i, o) {
      for (var l in n) {
        if (n.hasOwnProperty(l) && n[l]) {
          var s = n[l];
          s = Array.isArray(s) ? s : [s];

          for (var u = 0; u < s.length; ++u) {
            if (o && o == l + "," + u) return;
            var c = s[u],
                g = c.inside,
                f = !!c.lookbehind,
                h = !!c.greedy,
                d = 0,
                m = c.alias;

            if (h && !c.pattern.global) {
              var p = c.pattern.toString().match(/[imsuy]*$/)[0];
              c.pattern = RegExp(c.pattern.source, p + "g");
            }

            c = c.pattern || c;

            for (var y = t, v = a; y < r.length; v += r[y].length, ++y) {
              var k = r[y];
              if (r.length > e.length) return;

              if (!(k instanceof _)) {
                if (h && y != r.length - 1) {
                  if (c.lastIndex = v, !(S = c.exec(e))) break;

                  for (var b = S.index + (f && S[1] ? S[1].length : 0), w = S.index + S[0].length, A = y, P = v, x = r.length; A < x && (P < w || !r[A].type && !r[A - 1].greedy); ++A) {
                    (P += r[A].length) <= b && (++y, v = P);
                  }

                  if (r[y] instanceof _) continue;
                  O = A - y, k = e.slice(v, P), S.index -= v;
                } else {
                  c.lastIndex = 0;
                  var S = c.exec(k),
                      O = 1;
                }

                if (S) {
                  f && (d = S[1] ? S[1].length : 0);
                  w = (b = S.index + d) + (S = S[0].slice(d)).length;
                  var E = k.slice(0, b),
                      N = k.slice(w),
                      j = [y, O];
                  E && (++y, v += E.length, j.push(E));
                  var L = new _(l, g ? C.tokenize(S, g) : S, m, S, h);
                  if (j.push(L), N && j.push(N), Array.prototype.splice.apply(r, j), 1 != O && C.matchGrammar(e, r, n, y, v, !0, l + "," + u), i) break;
                } else if (i) break;
              }
            }
          }
        }
      }
    },
    tokenize: function tokenize(e, r) {
      var n = [e],
          t = r.rest;

      if (t) {
        for (var a in t) {
          r[a] = t[a];
        }

        delete r.rest;
      }

      return C.matchGrammar(e, n, r, 0, 0, !1), n;
    },
    hooks: {
      all: {},
      add: function add(e, r) {
        var n = C.hooks.all;
        n[e] = n[e] || [], n[e].push(r);
      },
      run: function run(e, r) {
        var n = C.hooks.all[e];
        if (n && n.length) for (var t, a = 0; t = n[a++];) {
          t(r);
        }
      }
    },
    Token: _
  };

  function _(e, r, n, t, a) {
    this.type = e, this.content = r, this.alias = n, this.length = 0 | (t || "").length, this.greedy = !!a;
  }

  if (u.Prism = C, _.stringify = function r(e, n) {
    if ("string" == typeof e) return e;

    if (Array.isArray(e)) {
      var t = "";
      return e.forEach(function (e) {
        t += r(e, n);
      }), t;
    }

    var a = {
      type: e.type,
      content: r(e.content, n),
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: n
    },
        i = e.alias;
    i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), C.hooks.run("wrap", a);
    var o = "";

    for (var l in a.attributes) {
      o += " " + l + '="' + (a.attributes[l] || "").replace(/"/g, "&quot;") + '"';
    }

    return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + o + ">" + a.content + "</" + a.tag + ">";
  }, !u.document) return u.addEventListener && (C.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
    var r = JSON.parse(e.data),
        n = r.language,
        t = r.code,
        a = r.immediateClose;
    u.postMessage(C.highlight(t, C.languages[n], n)), a && u.close();
  }, !1)), C;
  var e = C.util.currentScript();

  function n() {
    C.manual || C.highlightAll();
  }

  if (e && (C.filename = e.src, e.hasAttribute("data-manual") && (C.manual = !0)), !C.manual) {
    var t = document.readyState;
    "loading" === t || "interactive" === t && e && e.defer ? document.addEventListener("DOMContentLoaded", n) : window.requestAnimationFrame ? window.requestAnimationFrame(n) : window.setTimeout(n, 16);
  }

  return C;
}(_self);

"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
    greedy: !0
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          punctuation: [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: !0
          }]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function value(a, e) {
    var s = {};
    s["language-" + e] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[e]
    }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: s
      }
    };
    n["language-" + e] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[e]
    };
    var t = {};
    t[a] = {
      pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: n
    }, Prism.languages.insertBefore("markup", "cdata", t);
  }
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
!function (s) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        }
      }
    },
    url: {
      pattern: RegExp("url\\((?:" + e.source + "|[^\n\r()]*)\\)", "i"),
      inside: {
        "function": /^url/i,
        punctuation: /^\(|\)$/
      }
    },
    selector: RegExp("[^{}\\s](?:[^{};\"']|" + e.source + ")*?(?=\\s*\\{)"),
    string: {
      pattern: e,
      greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css;
  var t = s.languages.markup;
  t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        "attr-name": {
          pattern: /^\s*style/i,
          inside: t.tag.inside
        },
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {
          pattern: /.+/i,
          inside: s.languages.css
        }
      },
      alias: "language-css"
    }
  }, t.tag));
}(Prism);
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  "boolean": /\b(?:true|false)\b/,
  "function": /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [Prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0
  }],
  keyword: [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  }],
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  "function": /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: !0,
    greedy: !0
  },
  "function-variable": {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\${|}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;