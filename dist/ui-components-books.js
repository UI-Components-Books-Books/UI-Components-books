import * as zt from "react";
import ke, { Children as Re, useState as ee, useEffect as J, isValidElement as ct, cloneElement as Pe, forwardRef as _t, useRef as Q, useLayoutEffect as co, useMemo as _e, useCallback as Le, createContext as ut, memo as $a, useReducer as uo, useContext as Te, useId as At, createElement as ws } from "react";
import * as xs from "react-dom";
import ka, { unstable_batchedUpdates as vn, createPortal as La } from "react-dom";
var Hn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Os(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var a = [null];
        a.push.apply(a, arguments);
        var i = Function.bind.apply(t, a);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Rn = {}, Es = {
  get exports() {
    return Rn;
  },
  set exports(e) {
    Rn = e;
  }
}, hn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o;
function Ts() {
  if ($o)
    return hn;
  $o = 1;
  var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, u, f) {
    var l, d = {}, v = null, h = null;
    f !== void 0 && (v = "" + f), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (l in u)
      r.call(u, l) && !i.hasOwnProperty(l) && (d[l] = u[l]);
    if (s && s.defaultProps)
      for (l in u = s.defaultProps, u)
        d[l] === void 0 && (d[l] = u[l]);
    return { $$typeof: t, type: s, key: v, ref: h, props: d, _owner: a.current };
  }
  return hn.Fragment = n, hn.jsx = c, hn.jsxs = c, hn;
}
var gn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function Ss() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function w(g) {
      if (g === null || typeof g != "object")
        return null;
      var $ = m && g[m] || g[b];
      return typeof $ == "function" ? $ : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(g) {
      {
        for (var $ = arguments.length, Y = new Array($ > 1 ? $ - 1 : 0), re = 1; re < $; re++)
          Y[re - 1] = arguments[re];
        E("error", g, Y);
      }
    }
    function E(g, $, Y) {
      {
        var re = _.ReactDebugCurrentFrame, ue = re.getStackAddendum();
        ue !== "" && ($ += "%s", Y = Y.concat([ue]));
        var ve = Y.map(function(se) {
          return String(se);
        });
        ve.unshift("Warning: " + $), Function.prototype.apply.call(console[g], console, ve);
      }
    }
    var I = !1, x = !1, F = !1, T = !1, A = !1, W;
    W = Symbol.for("react.module.reference");
    function H(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || A || g === a || g === f || g === l || T || g === h || I || x || F || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === d || g.$$typeof === c || g.$$typeof === s || g.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === W || g.getModuleId !== void 0));
    }
    function B(g, $, Y) {
      var re = g.displayName;
      if (re)
        return re;
      var ue = $.displayName || $.name || "";
      return ue !== "" ? Y + "(" + ue + ")" : Y;
    }
    function z(g) {
      return g.displayName || "Context";
    }
    function G(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case s:
            var $ = g;
            return z($) + ".Consumer";
          case c:
            var Y = g;
            return z(Y._context) + ".Provider";
          case u:
            return B(g, g.render, "ForwardRef");
          case d:
            var re = g.displayName || null;
            return re !== null ? re : G(g.type) || "Memo";
          case v: {
            var ue = g, ve = ue._payload, se = ue._init;
            try {
              return G(se(ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, oe = 0, Z, X, ce, ie, S, L, y;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function C() {
      {
        if (oe === 0) {
          Z = console.log, X = console.info, ce = console.warn, ie = console.error, S = console.group, L = console.groupCollapsed, y = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        oe++;
      }
    }
    function R() {
      {
        if (oe--, oe === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, g, {
              value: Z
            }),
            info: K({}, g, {
              value: X
            }),
            warn: K({}, g, {
              value: ce
            }),
            error: K({}, g, {
              value: ie
            }),
            group: K({}, g, {
              value: S
            }),
            groupCollapsed: K({}, g, {
              value: L
            }),
            groupEnd: K({}, g, {
              value: y
            })
          });
        }
        oe < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = _.ReactCurrentDispatcher, M;
    function q(g, $, Y) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (ue) {
            var re = ue.stack.trim().match(/\n( *(at )?)/);
            M = re && re[1] || "";
          }
        return `
` + M + g;
      }
    }
    var U = !1, V;
    {
      var j = typeof WeakMap == "function" ? WeakMap : Map;
      V = new j();
    }
    function D(g, $) {
      if (!g || U)
        return "";
      {
        var Y = V.get(g);
        if (Y !== void 0)
          return Y;
      }
      var re;
      U = !0;
      var ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ve;
      ve = P.current, P.current = null, C();
      try {
        if ($) {
          var se = function() {
            throw Error();
          };
          if (Object.defineProperty(se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(se, []);
            } catch (Et) {
              re = Et;
            }
            Reflect.construct(g, [], se);
          } else {
            try {
              se.call();
            } catch (Et) {
              re = Et;
            }
            g.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            re = Et;
          }
          g();
        }
      } catch (Et) {
        if (Et && re && typeof Et.stack == "string") {
          for (var ae = Et.stack.split(`
`), Be = re.stack.split(`
`), Ee = ae.length - 1, Se = Be.length - 1; Ee >= 1 && Se >= 0 && ae[Ee] !== Be[Se]; )
            Se--;
          for (; Ee >= 1 && Se >= 0; Ee--, Se--)
            if (ae[Ee] !== Be[Se]) {
              if (Ee !== 1 || Se !== 1)
                do
                  if (Ee--, Se--, Se < 0 || ae[Ee] !== Be[Se]) {
                    var ot = `
` + ae[Ee].replace(" at new ", " at ");
                    return g.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", g.displayName)), typeof g == "function" && V.set(g, ot), ot;
                  }
                while (Ee >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        U = !1, P.current = ve, R(), Error.prepareStackTrace = ue;
      }
      var Xt = g ? g.displayName || g.name : "", Mo = Xt ? q(Xt) : "";
      return typeof g == "function" && V.set(g, Mo), Mo;
    }
    function ne(g, $, Y) {
      return D(g, !1);
    }
    function de(g) {
      var $ = g.prototype;
      return !!($ && $.isReactComponent);
    }
    function ye(g, $, Y) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return D(g, de(g));
      if (typeof g == "string")
        return q(g);
      switch (g) {
        case f:
          return q("Suspense");
        case l:
          return q("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case u:
            return ne(g.render);
          case d:
            return ye(g.type, $, Y);
          case v: {
            var re = g, ue = re._payload, ve = re._init;
            try {
              return ye(ve(ue), $, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, je = {}, dt = _.ReactDebugCurrentFrame;
    function Ze(g) {
      if (g) {
        var $ = g._owner, Y = ye(g.type, g._source, $ ? $.type : null);
        dt.setExtraStackFrame(Y);
      } else
        dt.setExtraStackFrame(null);
    }
    function Oe(g, $, Y, re, ue) {
      {
        var ve = Function.call.bind(xe);
        for (var se in g)
          if (ve(g, se)) {
            var ae = void 0;
            try {
              if (typeof g[se] != "function") {
                var Be = Error((re || "React class") + ": " + Y + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              ae = g[se]($, se, re, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              ae = Ee;
            }
            ae && !(ae instanceof Error) && (Ze(ue), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", Y, se, typeof ae), Ze(null)), ae instanceof Error && !(ae.message in je) && (je[ae.message] = !0, Ze(ue), N("Failed %s type: %s", Y, ae.message), Ze(null));
          }
      }
    }
    var qe = Array.isArray;
    function Xe(g) {
      return qe(g);
    }
    function $t(g) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, Y = $ && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return Y;
      }
    }
    function St(g) {
      try {
        return kt(g), !1;
      } catch {
        return !0;
      }
    }
    function kt(g) {
      return "" + g;
    }
    function Lt(g) {
      if (St(g))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(g)), kt(g);
    }
    var Fe = _.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ct, fn, nt;
    nt = {};
    function Vn(g) {
      if (xe.call(g, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(g, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Or(g) {
      if (xe.call(g, "key")) {
        var $ = Object.getOwnPropertyDescriptor(g, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Er(g, $) {
      if (typeof g.ref == "string" && Fe.current && $ && Fe.current.stateNode !== $) {
        var Y = G(Fe.current.type);
        nt[Y] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Fe.current.type), g.ref), nt[Y] = !0);
      }
    }
    function Yn(g, $) {
      {
        var Y = function() {
          Ct || (Ct = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        Y.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function Tr(g, $) {
      {
        var Y = function() {
          fn || (fn = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        Y.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var zn = function(g, $, Y, re, ue, ve, se) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: $,
        ref: Y,
        props: se,
        // Record the component responsible for creating this element.
        _owner: ve
      };
      return ae._store = {}, Object.defineProperty(ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function Sr(g, $, Y, re, ue) {
      {
        var ve, se = {}, ae = null, Be = null;
        Y !== void 0 && (Lt(Y), ae = "" + Y), Or($) && (Lt($.key), ae = "" + $.key), Vn($) && (Be = $.ref, Er($, ue));
        for (ve in $)
          xe.call($, ve) && !ft.hasOwnProperty(ve) && (se[ve] = $[ve]);
        if (g && g.defaultProps) {
          var Ee = g.defaultProps;
          for (ve in Ee)
            se[ve] === void 0 && (se[ve] = Ee[ve]);
        }
        if (ae || Be) {
          var Se = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ae && Yn(se, Se), Be && Tr(se, Se);
        }
        return zn(g, ae, Be, ue, re, Fe.current, se);
      }
    }
    var pn = _.ReactCurrentOwner, Wn = _.ReactDebugCurrentFrame;
    function be(g) {
      if (g) {
        var $ = g._owner, Y = ye(g.type, g._source, $ ? $.type : null);
        Wn.setExtraStackFrame(Y);
      } else
        Wn.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Ae(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function pt() {
      {
        if (pn.current) {
          var g = G(pn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Ve(g) {
      {
        if (g !== void 0) {
          var $ = g.fileName.replace(/^.*[\\\/]/, ""), Y = g.lineNumber;
          return `

Check your code at ` + $ + ":" + Y + ".";
        }
        return "";
      }
    }
    var Ye = {};
    function rt(g) {
      {
        var $ = pt();
        if (!$) {
          var Y = typeof g == "string" ? g : g.displayName || g.name;
          Y && ($ = `

Check the top-level render call using <` + Y + ">.");
        }
        return $;
      }
    }
    function Ot(g, $) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var Y = rt($);
        if (Ye[Y])
          return;
        Ye[Y] = !0;
        var re = "";
        g && g._owner && g._owner !== pn.current && (re = " It was passed a child from " + G(g._owner.type) + "."), be(g), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, re), be(null);
      }
    }
    function ze(g, $) {
      {
        if (typeof g != "object")
          return;
        if (Xe(g))
          for (var Y = 0; Y < g.length; Y++) {
            var re = g[Y];
            Ae(re) && Ot(re, $);
          }
        else if (Ae(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var ue = w(g);
          if (typeof ue == "function" && ue !== g.entries)
            for (var ve = ue.call(g), se; !(se = ve.next()).done; )
              Ae(se.value) && Ot(se.value, $);
        }
      }
    }
    function jt(g) {
      {
        var $ = g.type;
        if ($ == null || typeof $ == "string")
          return;
        var Y;
        if (typeof $ == "function")
          Y = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === d))
          Y = $.propTypes;
        else
          return;
        if (Y) {
          var re = G($);
          Oe(Y, g.props, "prop", re, g);
        } else if ($.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var ue = G($);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(g) {
      {
        for (var $ = Object.keys(g.props), Y = 0; Y < $.length; Y++) {
          var re = $[Y];
          if (re !== "children" && re !== "key") {
            be(g), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), be(null);
            break;
          }
        }
        g.ref !== null && (be(g), N("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    function Bt(g, $, Y, re, ue, ve) {
      {
        var se = H(g);
        if (!se) {
          var ae = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = Ve(ue);
          Be ? ae += Be : ae += pt();
          var Ee;
          g === null ? Ee = "null" : Xe(g) ? Ee = "array" : g !== void 0 && g.$$typeof === t ? (Ee = "<" + (G(g.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ae);
        }
        var Se = Sr(g, $, Y, ue, ve);
        if (Se == null)
          return Se;
        if (se) {
          var ot = $.children;
          if (ot !== void 0)
            if (re)
              if (Xe(ot)) {
                for (var Xt = 0; Xt < ot.length; Xt++)
                  ze(ot[Xt], g);
                Object.freeze && Object.freeze(ot);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(ot, g);
        }
        return g === r ? Ft(Se) : jt(Se), Se;
      }
    }
    function Zt(g, $, Y) {
      return Bt(g, $, Y, !0);
    }
    function Un(g, $, Y) {
      return Bt(g, $, Y, !1);
    }
    var qt = Un, Vt = Zt;
    gn.Fragment = r, gn.jsx = qt, gn.jsxs = Vt;
  }()), gn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ts() : e.exports = Ss();
})(Es);
const bt = Rn.Fragment, p = Rn.jsx, k = Rn.jsxs;
var o = {}, Lo = {
  get exports() {
    return o;
  },
  set exports(e) {
    o = e;
  }
}, tr = {}, Cs = {
  get exports() {
    return tr;
  },
  set exports(e) {
    tr = e;
  }
}, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function Ps() {
  if (jo)
    return fe;
  jo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function E(x) {
    if (typeof x == "object" && x !== null) {
      var F = x.$$typeof;
      switch (F) {
        case t:
          switch (x = x.type, x) {
            case u:
            case f:
            case r:
            case i:
            case a:
            case d:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case l:
                case m:
                case h:
                case c:
                  return x;
                default:
                  return F;
              }
          }
        case n:
          return F;
      }
    }
  }
  function I(x) {
    return E(x) === f;
  }
  return fe.AsyncMode = u, fe.ConcurrentMode = f, fe.ContextConsumer = s, fe.ContextProvider = c, fe.Element = t, fe.ForwardRef = l, fe.Fragment = r, fe.Lazy = m, fe.Memo = h, fe.Portal = n, fe.Profiler = i, fe.StrictMode = a, fe.Suspense = d, fe.isAsyncMode = function(x) {
    return I(x) || E(x) === u;
  }, fe.isConcurrentMode = I, fe.isContextConsumer = function(x) {
    return E(x) === s;
  }, fe.isContextProvider = function(x) {
    return E(x) === c;
  }, fe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, fe.isForwardRef = function(x) {
    return E(x) === l;
  }, fe.isFragment = function(x) {
    return E(x) === r;
  }, fe.isLazy = function(x) {
    return E(x) === m;
  }, fe.isMemo = function(x) {
    return E(x) === h;
  }, fe.isPortal = function(x) {
    return E(x) === n;
  }, fe.isProfiler = function(x) {
    return E(x) === i;
  }, fe.isStrictMode = function(x) {
    return E(x) === a;
  }, fe.isSuspense = function(x) {
    return E(x) === d;
  }, fe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === f || x === i || x === a || x === d || x === v || typeof x == "object" && x !== null && (x.$$typeof === m || x.$$typeof === h || x.$$typeof === c || x.$$typeof === s || x.$$typeof === l || x.$$typeof === w || x.$$typeof === _ || x.$$typeof === N || x.$$typeof === b);
  }, fe.typeOf = E, fe;
}
var pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fo;
function Rs() {
  return Fo || (Fo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function E(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === f || D === i || D === a || D === d || D === v || typeof D == "object" && D !== null && (D.$$typeof === m || D.$$typeof === h || D.$$typeof === c || D.$$typeof === s || D.$$typeof === l || D.$$typeof === w || D.$$typeof === _ || D.$$typeof === N || D.$$typeof === b);
    }
    function I(D) {
      if (typeof D == "object" && D !== null) {
        var ne = D.$$typeof;
        switch (ne) {
          case t:
            var de = D.type;
            switch (de) {
              case u:
              case f:
              case r:
              case i:
              case a:
              case d:
                return de;
              default:
                var ye = de && de.$$typeof;
                switch (ye) {
                  case s:
                  case l:
                  case m:
                  case h:
                  case c:
                    return ye;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var x = u, F = f, T = s, A = c, W = t, H = l, B = r, z = m, G = h, K = n, oe = i, Z = a, X = d, ce = !1;
    function ie(D) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(D) || I(D) === u;
    }
    function S(D) {
      return I(D) === f;
    }
    function L(D) {
      return I(D) === s;
    }
    function y(D) {
      return I(D) === c;
    }
    function O(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function C(D) {
      return I(D) === l;
    }
    function R(D) {
      return I(D) === r;
    }
    function P(D) {
      return I(D) === m;
    }
    function M(D) {
      return I(D) === h;
    }
    function q(D) {
      return I(D) === n;
    }
    function U(D) {
      return I(D) === i;
    }
    function V(D) {
      return I(D) === a;
    }
    function j(D) {
      return I(D) === d;
    }
    pe.AsyncMode = x, pe.ConcurrentMode = F, pe.ContextConsumer = T, pe.ContextProvider = A, pe.Element = W, pe.ForwardRef = H, pe.Fragment = B, pe.Lazy = z, pe.Memo = G, pe.Portal = K, pe.Profiler = oe, pe.StrictMode = Z, pe.Suspense = X, pe.isAsyncMode = ie, pe.isConcurrentMode = S, pe.isContextConsumer = L, pe.isContextProvider = y, pe.isElement = O, pe.isForwardRef = C, pe.isFragment = R, pe.isLazy = P, pe.isMemo = M, pe.isPortal = q, pe.isProfiler = U, pe.isStrictMode = V, pe.isSuspense = j, pe.isValidElementType = E, pe.typeOf = I;
  }()), pe;
}
var Bo;
function ja() {
  return Bo || (Bo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Ps() : e.exports = Rs();
  }(Cs)), tr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Cr, qo;
function Ds() {
  if (qo)
    return Cr;
  qo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var c = {}, s = 0; s < 10; s++)
        c["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(c).map(function(l) {
        return c[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        f[l] = l;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Cr = a() ? Object.assign : function(i, c) {
    for (var s, u = r(i), f, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var d in s)
        t.call(s, d) && (u[d] = s[d]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          n.call(s, f[v]) && (u[f[v]] = s[f[v]]);
      }
    }
    return u;
  }, Cr;
}
var Pr, Vo;
function fo() {
  if (Vo)
    return Pr;
  Vo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pr = e, Pr;
}
var Rr, Yo;
function Fa() {
  return Yo || (Yo = 1, Rr = Function.call.bind(Object.prototype.hasOwnProperty)), Rr;
}
var Dr, zo;
function Ns() {
  if (zo)
    return Dr;
  zo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = fo(), n = {}, r = Fa();
    e = function(i) {
      var c = "Warning: " + i;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function a(i, c, s, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (r(i, l)) {
          var d;
          try {
            if (typeof i[l] != "function") {
              var v = Error(
                (u || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            d = i[l](c, l, u, s, null, t);
          } catch (m) {
            d = m;
          }
          if (d && !(d instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var h = f ? f() : "";
            e(
              "Failed " + s + " type: " + d.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Dr = a, Dr;
}
var Nr, Wo;
function Is() {
  if (Wo)
    return Nr;
  Wo = 1;
  var e = ja(), t = Ds(), n = fo(), r = Fa(), a = Ns(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Nr = function(s, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function d(S) {
      var L = S && (f && S[f] || S[l]);
      if (typeof L == "function")
        return L;
    }
    var v = "<<anonymous>>", h = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: N(),
      arrayOf: E,
      element: I(),
      elementType: x(),
      instanceOf: F,
      node: H(),
      objectOf: A,
      oneOf: T,
      oneOfType: W,
      shape: z,
      exact: G
    };
    function m(S, L) {
      return S === L ? S !== 0 || 1 / S === 1 / L : S !== S && L !== L;
    }
    function b(S, L) {
      this.message = S, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function w(S) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, y = 0;
      function O(R, P, M, q, U, V, j) {
        if (q = q || v, V = V || M, j !== n) {
          if (u) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = q + ":" + M;
            !L[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[ne] = !0, y++);
          }
        }
        return P[M] == null ? R ? P[M] === null ? new b("The " + U + " `" + V + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new b("The " + U + " `" + V + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : S(P, M, q, U, V);
      }
      var C = O.bind(null, !1);
      return C.isRequired = O.bind(null, !0), C;
    }
    function _(S) {
      function L(y, O, C, R, P, M) {
        var q = y[O], U = Z(q);
        if (U !== S) {
          var V = X(q);
          return new b(
            "Invalid " + R + " `" + P + "` of type " + ("`" + V + "` supplied to `" + C + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return w(L);
    }
    function N() {
      return w(c);
    }
    function E(S) {
      function L(y, O, C, R, P) {
        if (typeof S != "function")
          return new b("Property `" + P + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var M = y[O];
        if (!Array.isArray(M)) {
          var q = Z(M);
          return new b("Invalid " + R + " `" + P + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected an array."));
        }
        for (var U = 0; U < M.length; U++) {
          var V = S(M, U, C, R, P + "[" + U + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return w(L);
    }
    function I() {
      function S(L, y, O, C, R) {
        var P = L[y];
        if (!s(P)) {
          var M = Z(P);
          return new b("Invalid " + C + " `" + R + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(S);
    }
    function x() {
      function S(L, y, O, C, R) {
        var P = L[y];
        if (!e.isValidElementType(P)) {
          var M = Z(P);
          return new b("Invalid " + C + " `" + R + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(S);
    }
    function F(S) {
      function L(y, O, C, R, P) {
        if (!(y[O] instanceof S)) {
          var M = S.name || v, q = ie(y[O]);
          return new b("Invalid " + R + " `" + P + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return w(L);
    }
    function T(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function L(y, O, C, R, P) {
        for (var M = y[O], q = 0; q < S.length; q++)
          if (m(M, S[q]))
            return null;
        var U = JSON.stringify(S, function(j, D) {
          var ne = X(D);
          return ne === "symbol" ? String(D) : D;
        });
        return new b("Invalid " + R + " `" + P + "` of value `" + String(M) + "` " + ("supplied to `" + C + "`, expected one of " + U + "."));
      }
      return w(L);
    }
    function A(S) {
      function L(y, O, C, R, P) {
        if (typeof S != "function")
          return new b("Property `" + P + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var M = y[O], q = Z(M);
        if (q !== "object")
          return new b("Invalid " + R + " `" + P + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected an object."));
        for (var U in M)
          if (r(M, U)) {
            var V = S(M, U, C, R, P + "." + U, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return w(L);
    }
    function W(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var L = 0; L < S.length; L++) {
        var y = S[L];
        if (typeof y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(y) + " at index " + L + "."
          ), c;
      }
      function O(C, R, P, M, q) {
        for (var U = [], V = 0; V < S.length; V++) {
          var j = S[V], D = j(C, R, P, M, q, n);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && U.push(D.data.expectedType);
        }
        var ne = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new b("Invalid " + M + " `" + q + "` supplied to " + ("`" + P + "`" + ne + "."));
      }
      return w(O);
    }
    function H() {
      function S(L, y, O, C, R) {
        return K(L[y]) ? null : new b("Invalid " + C + " `" + R + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return w(S);
    }
    function B(S, L, y, O, C) {
      return new b(
        (S || "React class") + ": " + L + " type `" + y + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function z(S) {
      function L(y, O, C, R, P) {
        var M = y[O], q = Z(M);
        if (q !== "object")
          return new b("Invalid " + R + " `" + P + "` of type `" + q + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var U in S) {
          var V = S[U];
          if (typeof V != "function")
            return B(C, R, P, U, X(V));
          var j = V(M, U, C, R, P + "." + U, n);
          if (j)
            return j;
        }
        return null;
      }
      return w(L);
    }
    function G(S) {
      function L(y, O, C, R, P) {
        var M = y[O], q = Z(M);
        if (q !== "object")
          return new b("Invalid " + R + " `" + P + "` of type `" + q + "` " + ("supplied to `" + C + "`, expected `object`."));
        var U = t({}, y[O], S);
        for (var V in U) {
          var j = S[V];
          if (r(S, V) && typeof j != "function")
            return B(C, R, P, V, X(j));
          if (!j)
            return new b(
              "Invalid " + R + " `" + P + "` key `" + V + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(y[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var D = j(M, V, C, R, P + "." + V, n);
          if (D)
            return D;
        }
        return null;
      }
      return w(L);
    }
    function K(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(K);
          if (S === null || s(S))
            return !0;
          var L = d(S);
          if (L) {
            var y = L.call(S), O;
            if (L !== S.entries) {
              for (; !(O = y.next()).done; )
                if (!K(O.value))
                  return !1;
            } else
              for (; !(O = y.next()).done; ) {
                var C = O.value;
                if (C && !K(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(S, L) {
      return S === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function Z(S) {
      var L = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : oe(L, S) ? "symbol" : L;
    }
    function X(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var L = Z(S);
      if (L === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function ce(S) {
      var L = X(S);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function ie(S) {
      return !S.constructor || !S.constructor.name ? v : S.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Nr;
}
var Ir, Uo;
function As() {
  if (Uo)
    return Ir;
  Uo = 1;
  var e = fo();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ir = function() {
    function r(c, s, u, f, l, d) {
      if (d !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ir;
}
if (process.env.NODE_ENV !== "production") {
  var Ms = ja(), $s = !0;
  Lo.exports = Is()(Ms.isElement, $s);
} else
  Lo.exports = As()();
const ks = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, He = (e, t) => Re.toArray(e).filter((n) => t.indexOf(ks(n)) !== -1), Ls = ({ children: e, allowMultiple: t, defaultIndex: n, allowDifferentChildren: r }) => {
  const [a, i] = ee(), c = (u) => {
    t ? a.includes(u) ? i(a.filter((f) => f !== u)) : i([...a, u]) : i(u);
  };
  J(() => (i(t ? n || [] : n ?? null), () => {
    i(null);
  }), [t, n]);
  const s = Re.map(e, (u, f) => ct(u) ? Pe(u, { ...u.props, id: f, isOpen: a, onToggle: c }) : null);
  return /* @__PURE__ */ p("div", { children: r ? s : He(s, ["AccordionItem"]) });
};
Ls.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  allowDifferentChildren: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
var Kr = {}, js = {
  get exports() {
    return Kr;
  },
  set exports(e) {
    Kr = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var c = typeof i;
          if (c === "string" || c === "number")
            r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (c === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var u in i)
              t.call(i, u) && i[u] && r.push(u);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(js);
const te = Kr, me = (e) => (t, n, r) => {
  if (t[n] !== e)
    return new Error(
      `'${n}' in '${r}' 

 NO puedes pasar un valor de props para '${n}'.La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.`
    );
}, nr = {
  "c-accordion__item": "_c-accordion__item_s7jwr_1",
  "c-accordion__button": "_c-accordion__button_s7jwr_10",
  "c-accordion__panel": "_c-accordion__panel_s7jwr_29",
  "c-accordion__panel-content": "_c-accordion__panel-content_s7jwr_48"
}, Ba = ({
  children: e,
  id: t,
  onExpanded: n,
  isExpanded: r,
  expanded: a,
  addClass: i,
  icon: c,
  defaultStyle: s,
  __TYPE: u,
  ...f
}) => /* @__PURE__ */ k(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: te({
      [`${nr["c-accordion__button"]} u-flex`]: !s,
      [i]: i,
      [r]: a
    }),
    onClick: n,
    "data-type": u,
    ...f,
    children: [
      e,
      c && c(r)
    ]
  }
);
Ba.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  onExpanded: o.func,
  isExpanded: o.bool,
  expanded: o.string,
  addClass: o.string,
  icon: o.func,
  defaultStyle: o.bool,
  __TYPE: me("AccordionButton")
};
Ba.defaultProps = {
  __TYPE: "AccordionButton"
};
const qa = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a, defaultStyle: i, allowDifferentChildren: c }) => {
  const s = () => r(t), u = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, f = Re.map(e, (l) => ct(l) ? l.props.__TYPE === "AccordionButton" ? Pe(l, { ...l.props, id: t, onExpanded: s, isExpanded: u() }) : Pe(l, { ...l.props, id: t, isExpanded: u() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: te({
        [nr["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: c ? f : He(f, ["AccordionButton", "AccordionPanel"])
    }
  );
};
qa.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  defaultStyle: o.bool,
  allowDifferentChildren: o.bool,
  __TYPE: me("AccordionItem")
};
qa.defaultProps = {
  __TYPE: "AccordionItem"
};
const Va = ({
  children: e,
  id: t,
  isExpanded: n,
  addClass: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => /* @__PURE__ */ p(
  "div",
  {
    id: `accordion-panel-${t}`,
    role: "region",
    "aria-hidden": !n,
    "aria-labelledby": `accordion-button-${t}`,
    "data-type": i,
    className: te(nr["c-accordion__panel"], {
      [r]: r
    }),
    ...c,
    children: /* @__PURE__ */ p(
      "div",
      {
        className: te({
          [nr["c-accordion__panel-content"]]: !a
        }),
        children: e
      }
    )
  }
);
Va.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  isExpanded: o.bool,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("AccordionPanel")
};
Va.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Gn = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Fs = /\w+\.svg/gi, Ce = ({
  children: e,
  path: t,
  size: n,
  addClass: r,
  viewBox: a,
  width: i,
  height: c,
  __TYPE: s,
  ...u
}) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", { children: "Doesn't exist" });
  if (Re.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const f = t && t.match(Fs).toString().replace(/.svg/gi, ""), l = `${t}#${f}`;
  return e ? Pe(e, {
    ...e.props,
    className: `${Gn["c-icon"]} ${Gn[`c-${n}`]} ${r ?? ""}`,
    "aria-hidden": !0,
    "data-testid": f,
    "data-component": s
  }) : /* @__PURE__ */ p(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: c,
      viewBox: a,
      className: `${Gn["c-icon"]} ${Gn[`c-${n}`]} ${r ?? ""}`,
      "aria-hidden": "true",
      "data-testid": f,
      "data-component": s,
      ...u,
      children: /* @__PURE__ */ p("use", { xlinkHref: l })
    }
  );
};
Ce.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  path: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  addClass: o.string,
  viewBox: o.string,
  height: o.string,
  width: o.string,
  __TYPE: me("Icon")
};
Ce.defaultProps = {
  size: "normal",
  viewBox: "0 0 48 48",
  height: "48",
  width: "48",
  __TYPE: "Icon"
};
const mn = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, Wt = _t((e, t) => {
  const {
    label: n,
    size: r,
    icon: a,
    type: i,
    variant: c,
    hasAriaLabel: s,
    disabled: u,
    onClick: f,
    children: l,
    addClass: d,
    defaultStyle: v,
    ...h
  } = e;
  return /* @__PURE__ */ k(
    "button",
    {
      ref: t,
      className: te({
        [`${mn["c-button"]} ${mn[`c-${c}`]} ${mn[`c-${r}`]}`]: !v,
        [mn["c-round"]]: a && a.path && s,
        [mn["c-reverse"]]: a && a.position === "right",
        [d]: d
      }),
      disabled: u,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...h,
      children: [
        l,
        a && /* @__PURE__ */ p(Ce, { path: a.path, size: a.size }),
        s ? null : n
      ]
    }
  );
});
Wt.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  label: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  variant: o.oneOf(["primary", "secondary", "no-line"]),
  type: o.oneOf(["button", "submit", "reset"]),
  hasAriaLabel: o.bool,
  icon: o.shape({
    path: o.string,
    size: o.oneOf(["small", "normal", "big"]),
    position: o.oneOf(["left", "right"])
  }),
  disabled: o.bool,
  onClick: o.func,
  addClass: o.string,
  defaultStyle: o.bool
};
Wt.defaultProps = {
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const Bs = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), qs = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || Bs, [a, i] = ee(!1), [c, s] = ee(null);
  return J(() => {
    if (!c) {
      i(!1);
      return;
    }
    const u = new IntersectionObserver(
      ([f]) => {
        i(f.isIntersecting);
      },
      {
        /**
             * configuraciones del la IntersectionObserver API.
             */
        root: t,
        rootMargin: n,
        threshold: r
      }
    );
    return u.observe(c), () => {
      u.unobserve(c);
    };
  }, [r, n, t, c]), [s, a];
}, Kt = {
  "c-audio": "_c-audio_c6ix7_1",
  "c-audio--small": "_c-audio--small_c6ix7_15",
  "c-audio--hidden": "_c-audio--hidden_c6ix7_33",
  "c-button": "_c-button_c6ix7_37",
  "is-button-paused": "_is-button-paused_c6ix7_62",
  "is-button-playing": "_is-button-playing_c6ix7_70"
}, Vs = Object.freeze({
  BUTTON: "Button",
  BAR: "Bar"
}), Ya = ({
  src: e,
  format: t,
  a11y: n,
  size: r,
  type: a,
  addClass: i,
  defaultStyle: c,
  ...s
}) => {
  const [u, f] = ee(!1), l = Q(), d = Q(), [v, h] = qs(), m = (b) => {
    l.current && (l.current.paused ? l.current.play() : l.current.pause(), f(!u));
  };
  return J(() => {
    (u || !l.current.paused) && !h && (f(!u), l.current.pause(), l.current.currentTime = 0);
  }, [h]), co(() => {
    const b = d.current || l.current;
    b && v(b);
  }, [l, d]), a === Vs.BAR ? /* @__PURE__ */ p(
    "audio",
    {
      ref: l,
      preload: "metadata",
      controls: !0,
      className: te({
        [Kt["c-audio"]]: !c,
        [Kt[`c-audio--${r}`]]: r,
        [i]: i
      }),
      "data-a11y": n,
      ...s,
      children: /* @__PURE__ */ p("source", { src: e, type: t })
    }
  ) : /* @__PURE__ */ k(bt, { children: [
    /* @__PURE__ */ p(
      "audio",
      {
        ref: l,
        src: e,
        type: t,
        onEnded: () => f(!u),
        className: Kt["c-audio--hidden"]
      }
    ),
    /* @__PURE__ */ p(
      Wt,
      {
        ref: d,
        label: u ? "Pausar" : "Reproduccir",
        "data-a11y": n,
        addClass: te({
          [Kt["c-button"]]: !c,
          [Kt["is-button-playing"]]: u,
          [Kt["is-button-paused"]]: !u,
          [i]: i
        }),
        onClick: m,
        hasAriaLabel: !0,
        ...c && { defaultStyle: c },
        ...n && { disabled: n },
        ...s
      }
    )
  ] });
};
Ya.defaultProps = {
  a11y: !1,
  type: "Bar"
};
Ya.propTypes = {
  src: o.string,
  a11y: o.bool,
  format: o.string,
  size: o.oneOf(["small"]),
  type: o.oneOf(["Bar", "Button"]),
  addClass: o.string,
  defaultStyle: o.bool
};
var Ys = typeof Hn == "object" && Hn && Hn.Object === Object && Hn, zs = Ys, Ws = zs, Us = typeof self == "object" && self && self.Object === Object && self, Hs = Ws || Us || Function("return this")(), Gs = Hs, Zs = Gs, Xs = Zs.Symbol, po = Xs;
function Ks(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Qs = Ks, Js = Array.isArray, el = Js, Ho = po, za = Object.prototype, tl = za.hasOwnProperty, nl = za.toString, bn = Ho ? Ho.toStringTag : void 0;
function rl(e) {
  var t = tl.call(e, bn), n = e[bn];
  try {
    e[bn] = void 0;
    var r = !0;
  } catch {
  }
  var a = nl.call(e);
  return r && (t ? e[bn] = n : delete e[bn]), a;
}
var ol = rl, al = Object.prototype, il = al.toString;
function sl(e) {
  return il.call(e);
}
var ll = sl, Go = po, cl = ol, ul = ll, dl = "[object Null]", fl = "[object Undefined]", Zo = Go ? Go.toStringTag : void 0;
function pl(e) {
  return e == null ? e === void 0 ? fl : dl : Zo && Zo in Object(e) ? cl(e) : ul(e);
}
var vl = pl;
function hl(e) {
  return e != null && typeof e == "object";
}
var gl = hl, ml = vl, bl = gl, yl = "[object Symbol]";
function _l(e) {
  return typeof e == "symbol" || bl(e) && ml(e) == yl;
}
var wl = _l, Xo = po, xl = Qs, Ol = el, El = wl, Tl = 1 / 0, Ko = Xo ? Xo.prototype : void 0, Qo = Ko ? Ko.toString : void 0;
function Wa(e) {
  if (typeof e == "string")
    return e;
  if (Ol(e))
    return xl(e, Wa) + "";
  if (El(e))
    return Qo ? Qo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Tl ? "-0" : t;
}
var Sl = Wa, Cl = Sl;
function Pl(e) {
  return e == null ? "" : Cl(e);
}
var Rl = Pl, Dl = Rl, Nl = 0;
function Il(e) {
  var t = ++Nl;
  return Dl(e) + t;
}
var Ua = Il;
const Qt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, Ha = _t(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: c, isDisabled: s, defaultChecked: u, onChange: f, __TYPE: l, inherit: d, ...v }, h) => {
    const m = _e(() => e || Ua(`ui-${n}`), [e, n]), b = Object.freeze({
      right: /* @__PURE__ */ p("path", { id: "done_all", d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z" }),
      wrong: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }),
      normal: n === "checkbox" ? /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }) : null
    }), w = ({ target: _ }) => {
      if (f) {
        if (_.checked) {
          f({ id: _.id, value: _.value });
          return;
        }
        f({ id: _.id, value: "" });
      }
    };
    return /* @__PURE__ */ k(
      "label",
      {
        htmlFor: m,
        className: `${Qt["c-input"]} u-flex ${c ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": l,
        ...!d && { ...v },
        children: [
          /* @__PURE__ */ k("div", { className: Qt["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: m,
                ref: h,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: Qt["c-input__check"],
                onChange: w,
                ...s && { disabled: !0 },
                ...d && { ...v },
                ...u && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${Qt["c-input__icon"]} ${u ? Qt["c-input-defaultChecked"] : ""} `, children: b[a] && /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                children: b[a]
              }
            ) }) })
          ] }),
          /* @__PURE__ */ p("span", { className: Qt["c-input__label"], children: r })
        ]
      }
    );
  }
);
Ha.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
Ha.propTypes = {
  id: o.string,
  name: o.string,
  type: o.oneOf(["radio", "checkbox"]),
  label: o.string.isRequired,
  state: o.oneOf(["normal", "right", "wrong"]),
  value: o.oneOfType([o.string, o.number, o.bool]),
  addClass: o.string,
  isDisabled: o.bool,
  defaultChecked: o.bool,
  inherit: o.bool,
  onChange: o.func,
  __TYPE: me("CheckBox")
};
const Al = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = ee([]), c = Q(), s = (d) => {
    c.current = d || "";
  }, u = (d) => c.current === "radio" ? [{ ...d }] : a.filter((h) => h.id === d.id).length ? [...a.filter((h) => h.id !== d.id)] : [...a, { ...d }], f = (d) => {
    const v = u(d);
    n && n(v), i(v);
  }, l = Re.map(t, (d) => ct(d) ? d.props.__TYPE === "CheckBox" ? (d.props.type && s(d.props.type), Pe(d, { ...d.props, onChange: f })) : d : null);
  return /* @__PURE__ */ k("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: He(l, ["CheckBox"]) })
  ] });
};
Al.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const Ml = "_col_wu095_1", $l = {
  col: Ml
}, kl = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${$l.col} ${e ?? ""}`, ...t }));
kl.propTypes = {
  addClass: o.string
};
const Ll = {
  "c-content": "_c-content_u325r_1"
}, jl = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "section",
  {
    className: te({
      [Ll["c-content"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
jl.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  defaultStyle: o.bool,
  addClass: o.string
};
const ur = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function cn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function vo(e) {
  return "nodeType" in e;
}
function Ge(e) {
  var t, n;
  return e ? cn(e) ? e : vo(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ho(e) {
  const {
    Document: t
  } = Ge(e);
  return e instanceof t;
}
function Ln(e) {
  return cn(e) ? !1 : e instanceof Ge(e).HTMLElement;
}
function Fl(e) {
  return e instanceof Ge(e).SVGElement;
}
function un(e) {
  return e ? cn(e) ? e.document : vo(e) ? ho(e) ? e : Ln(e) ? e.ownerDocument : document : document : document;
}
const Tt = ur ? co : J;
function go(e) {
  const t = Q(e);
  return Tt(() => {
    t.current = e;
  }), Le(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Bl() {
  const e = Q(null), t = Le((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = Le(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Dn(e, t) {
  t === void 0 && (t = [e]);
  const n = Q(e);
  return Tt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function jn(e, t) {
  const n = Q();
  return _e(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function rr(e) {
  const t = go(e), n = Q(null), r = Le(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Qr(e) {
  const t = Q();
  return J(() => {
    t.current = e;
  }, [e]), t.current;
}
let Ar = {};
function dr(e, t) {
  return _e(() => {
    if (t)
      return t;
    const n = Ar[e] == null ? 0 : Ar[e] + 1;
    return Ar[e] = n, e + "-" + n;
  }, [e, t]);
}
function Ga(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return r.reduce((i, c) => {
      const s = Object.entries(c);
      for (const [u, f] of s) {
        const l = i[u];
        l != null && (i[u] = l + e * f);
      }
      return i;
    }, {
      ...t
    });
  };
}
const tn = /* @__PURE__ */ Ga(1), or = /* @__PURE__ */ Ga(-1);
function ql(e) {
  return "clientX" in e && "clientY" in e;
}
function Za(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ge(e.target);
  return t && e instanceof t;
}
function Vl(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ge(e.target);
  return t && e instanceof t;
}
function Jr(e) {
  if (Vl(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return ql(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const eo = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [eo.Translate.toString(e), eo.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), Jo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Yl(e) {
  return e.matches(Jo) ? e : e.querySelector(Jo);
}
const zl = {
  display: "none"
};
function Wl(e) {
  let {
    id: t,
    value: n
  } = e;
  return ke.createElement("div", {
    id: t,
    style: zl
  }, n);
}
const Ul = {
  position: "fixed",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(100%)",
  whiteSpace: "nowrap"
};
function Hl(e) {
  let {
    id: t,
    announcement: n
  } = e;
  return ke.createElement("div", {
    id: t,
    style: Ul,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, n);
}
function Gl() {
  const [e, t] = ee("");
  return {
    announce: Le((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Xa = /* @__PURE__ */ ut(null);
function Zl(e) {
  const t = Te(Xa);
  J(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Xl() {
  const [e] = ee(() => /* @__PURE__ */ new Set()), t = Le((r) => (e.add(r), () => e.delete(r)), [e]);
  return [Le((r) => {
    let {
      type: a,
      event: i
    } = r;
    e.forEach((c) => {
      var s;
      return (s = c[a]) == null ? void 0 : s.call(c, i);
    });
  }, [e]), t];
}
const Kl = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Ql = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function Jl(e) {
  let {
    announcements: t = Ql,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: a = Kl
  } = e;
  const {
    announce: i,
    announcement: c
  } = Gl(), s = dr("DndLiveRegion"), [u, f] = ee(!1);
  if (J(() => {
    f(!0);
  }, []), Zl(_e(() => ({
    onDragStart(d) {
      let {
        active: v
      } = d;
      i(t.onDragStart({
        active: v
      }));
    },
    onDragMove(d) {
      let {
        active: v,
        over: h
      } = d;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: h
      }));
    },
    onDragOver(d) {
      let {
        active: v,
        over: h
      } = d;
      i(t.onDragOver({
        active: v,
        over: h
      }));
    },
    onDragEnd(d) {
      let {
        active: v,
        over: h
      } = d;
      i(t.onDragEnd({
        active: v,
        over: h
      }));
    },
    onDragCancel(d) {
      let {
        active: v,
        over: h
      } = d;
      i(t.onDragCancel({
        active: v,
        over: h
      }));
    }
  }), [i, t])), !u)
    return null;
  const l = ke.createElement(ke.Fragment, null, ke.createElement(Wl, {
    id: r,
    value: a.draggable
  }), ke.createElement(Hl, {
    id: s,
    announcement: c
  }));
  return n ? La(l, n) : l;
}
var De;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(De || (De = {}));
function ar() {
}
function Mr(e, t) {
  return _e(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function ec() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return _e(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const gt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function tc(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function nc(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function rc(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function ea(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: a
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + a,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + a,
    y: n + r
  }];
}
function Ka(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
const oc = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = ea(t), i = [];
  for (const c of r) {
    const {
      id: s
    } = c, u = n.get(s);
    if (u) {
      const f = ea(u), l = a.reduce((v, h, m) => v + tc(f[m], h), 0), d = Number((l / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: c,
          value: d
        }
      });
    }
  }
  return i.sort(nc);
};
function ac(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), c = a - r, s = i - n;
  if (r < a && n < i) {
    const u = t.width * t.height, f = e.width * e.height, l = c * s, d = l / (u + f - l);
    return Number(d.toFixed(4));
  }
  return 0;
}
const ic = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = [];
  for (const i of r) {
    const {
      id: c
    } = i, s = n.get(c);
    if (s) {
      const u = ac(s, t);
      u > 0 && a.push({
        id: c,
        data: {
          droppableContainer: i,
          value: u
        }
      });
    }
  }
  return a.sort(rc);
};
function sc(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Qa(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : gt;
}
function lc(e) {
  return function(n) {
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      a[i - 1] = arguments[i];
    return a.reduce((c, s) => ({
      ...c,
      top: c.top + e * s.y,
      bottom: c.bottom + e * s.y,
      left: c.left + e * s.x,
      right: c.right + e * s.x
    }), {
      ...n
    });
  };
}
const cc = /* @__PURE__ */ lc(1);
function uc(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function dc(e, t, n) {
  const r = uc(t);
  if (!r)
    return e;
  const {
    scaleX: a,
    scaleY: i,
    x: c,
    y: s
  } = r, u = e.left - c - (1 - a) * parseFloat(n), f = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = a ? e.width / a : e.width, d = i ? e.height / i : e.height;
  return {
    width: l,
    height: d,
    top: f,
    right: u + l,
    bottom: f + d,
    left: u
  };
}
const fc = {
  ignoreTransform: !1
};
function Fn(e, t) {
  t === void 0 && (t = fc);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: l
    } = Ge(e).getComputedStyle(e);
    f && (n = dc(n, f, l));
  }
  const {
    top: r,
    left: a,
    width: i,
    height: c,
    bottom: s,
    right: u
  } = n;
  return {
    top: r,
    left: a,
    width: i,
    height: c,
    bottom: s,
    right: u
  };
}
function ta(e) {
  return Fn(e, {
    ignoreTransform: !0
  });
}
function pc(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function vc(e, t) {
  return t === void 0 && (t = Ge(e).getComputedStyle(e)), t.position === "fixed";
}
function hc(e, t) {
  t === void 0 && (t = Ge(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((a) => {
    const i = t[a];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function mo(e, t) {
  const n = [];
  function r(a) {
    if (t != null && n.length >= t || !a)
      return n;
    if (ho(a) && a.scrollingElement != null && !n.includes(a.scrollingElement))
      return n.push(a.scrollingElement), n;
    if (!Ln(a) || Fl(a) || n.includes(a))
      return n;
    const i = Ge(e).getComputedStyle(a);
    return a !== e && hc(a, i) && n.push(a), vc(a, i) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function Ja(e) {
  const [t] = mo(e, 1);
  return t ?? null;
}
function $r(e) {
  return !ur || !e ? null : cn(e) ? e : vo(e) ? ho(e) || e === un(e).scrollingElement ? window : Ln(e) ? e : null : null;
}
function ei(e) {
  return cn(e) ? e.scrollX : e.scrollLeft;
}
function ti(e) {
  return cn(e) ? e.scrollY : e.scrollTop;
}
function to(e) {
  return {
    x: ei(e),
    y: ti(e)
  };
}
var Ne;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ne || (Ne = {}));
function ni(e) {
  return !ur || !e ? !1 : e === document.scrollingElement;
}
function ri(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ni(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, a = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, c = e.scrollTop >= r.y, s = e.scrollLeft >= r.x;
  return {
    isTop: a,
    isLeft: i,
    isBottom: c,
    isRight: s,
    maxScroll: r,
    minScroll: t
  };
}
const gc = {
  x: 0.2,
  y: 0.2
};
function mc(e, t, n, r, a) {
  let {
    top: i,
    left: c,
    right: s,
    bottom: u
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = gc);
  const {
    isTop: f,
    isBottom: l,
    isLeft: d,
    isRight: v
  } = ri(e), h = {
    x: 0,
    y: 0
  }, m = {
    x: 0,
    y: 0
  }, b = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + b.height ? (h.y = Ne.Backward, m.y = r * Math.abs((t.top + b.height - i) / b.height)) : !l && u >= t.bottom - b.height && (h.y = Ne.Forward, m.y = r * Math.abs((t.bottom - b.height - u) / b.height)), !v && s >= t.right - b.width ? (h.x = Ne.Forward, m.x = r * Math.abs((t.right - b.width - s) / b.width)) : !d && c <= t.left + b.width && (h.x = Ne.Backward, m.x = r * Math.abs((t.left + b.width - c) / b.width)), {
    direction: h,
    speed: m
  };
}
function bc(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: c
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: c,
      width: i,
      height: c
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: a
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: a,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function oi(e) {
  return e.reduce((t, n) => tn(t, to(n)), gt);
}
function yc(e) {
  return e.reduce((t, n) => t + ei(n), 0);
}
function _c(e) {
  return e.reduce((t, n) => t + ti(n), 0);
}
function wc(e, t) {
  if (t === void 0 && (t = Fn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: a,
    right: i
  } = t(e);
  Ja(e) && (a <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const xc = [["x", ["left", "right"], yc], ["y", ["top", "bottom"], _c]];
class bo {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = mo(n), a = oi(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, c, s] of xc)
      for (const u of c)
        Object.defineProperty(this, u, {
          get: () => {
            const f = s(r), l = a[i] - f;
            return this.rect[u] + l;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class On {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var a;
    (a = this.target) == null || a.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function Oc(e) {
  const {
    EventTarget: t
  } = Ge(e);
  return e instanceof t ? e : un(e);
}
function kr(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var it;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(it || (it = {}));
function na(e) {
  e.preventDefault();
}
function Ec(e) {
  e.stopPropagation();
}
var le;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(le || (le = {}));
const ai = {
  start: [le.Space, le.Enter],
  cancel: [le.Esc],
  end: [le.Space, le.Enter]
}, Tc = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case le.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case le.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case le.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case le.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class yo {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new On(un(n)), this.windowListeners = new On(Ge(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(it.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && wc(r), n(gt);
  }
  handleKeyDown(t) {
    if (Za(t)) {
      const {
        active: n,
        context: r,
        options: a
      } = this.props, {
        keyboardCodes: i = ai,
        coordinateGetter: c = Tc,
        scrollBehavior: s = "smooth"
      } = a, {
        code: u
      } = t;
      if (i.end.includes(u)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(u)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: f
      } = r.current, l = f ? {
        x: f.left,
        y: f.top
      } : gt;
      this.referenceCoordinates || (this.referenceCoordinates = l);
      const d = c(t, {
        active: n,
        context: r.current,
        currentCoordinates: l
      });
      if (d) {
        const v = or(d, l), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: m
        } = r.current;
        for (const b of m) {
          const w = t.code, {
            isTop: _,
            isRight: N,
            isLeft: E,
            isBottom: I,
            maxScroll: x,
            minScroll: F
          } = ri(b), T = bc(b), A = {
            x: Math.min(w === le.Right ? T.right - T.width / 2 : T.right, Math.max(w === le.Right ? T.left : T.left + T.width / 2, d.x)),
            y: Math.min(w === le.Down ? T.bottom - T.height / 2 : T.bottom, Math.max(w === le.Down ? T.top : T.top + T.height / 2, d.y))
          }, W = w === le.Right && !N || w === le.Left && !E, H = w === le.Down && !I || w === le.Up && !_;
          if (W && A.x !== d.x) {
            const B = b.scrollLeft + v.x, z = w === le.Right && B <= x.x || w === le.Left && B >= F.x;
            if (z && !v.y) {
              b.scrollTo({
                left: B,
                behavior: s
              });
              return;
            }
            z ? h.x = b.scrollLeft - B : h.x = w === le.Right ? b.scrollLeft - x.x : b.scrollLeft - F.x, h.x && b.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (H && A.y !== d.y) {
            const B = b.scrollTop + v.y, z = w === le.Down && B <= x.y || w === le.Up && B >= F.y;
            if (z && !v.x) {
              b.scrollTo({
                top: B,
                behavior: s
              });
              return;
            }
            z ? h.y = b.scrollTop - B : h.y = w === le.Down ? b.scrollTop - x.y : b.scrollTop - F.y, h.y && b.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, tn(or(d, this.referenceCoordinates), h));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
yo.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = ai,
      onActivation: a
    } = t, {
      active: i
    } = n;
    const {
      code: c
    } = e.nativeEvent;
    if (r.start.includes(c)) {
      const s = i.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), a == null || a({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function ra(e) {
  return !!(e && "distance" in e);
}
function oa(e) {
  return !!(e && "delay" in e);
}
class _o {
  constructor(t, n, r) {
    var a;
    r === void 0 && (r = Oc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: c
    } = i;
    this.props = t, this.events = n, this.document = un(c), this.documentListeners = new On(this.document), this.listeners = new On(r), this.windowListeners = new On(Ge(c)), this.initialCoordinates = (a = Jr(i)) != null ? a : gt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.DragStart, na), this.windowListeners.add(it.VisibilityChange, this.handleCancel), this.windowListeners.add(it.ContextMenu, na), this.documentListeners.add(it.Keydown, this.handleKeydown), n) {
      if (ra(n))
        return;
      if (oa(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(it.Click, Ec, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(it.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: a,
      props: i
    } = this, {
      onMove: c,
      options: {
        activationConstraint: s
      }
    } = i;
    if (!a)
      return;
    const u = (n = Jr(t)) != null ? n : gt, f = or(a, u);
    if (!r && s) {
      if (oa(s))
        return kr(f, s.tolerance) ? this.handleCancel() : void 0;
      if (ra(s))
        return s.tolerance != null && kr(f, s.tolerance) ? this.handleCancel() : kr(f, s.distance) ? this.handleStart() : void 0;
    }
    t.cancelable && t.preventDefault(), c(u);
  }
  handleEnd() {
    const {
      onEnd: t
    } = this.props;
    this.detach(), t();
  }
  handleCancel() {
    const {
      onCancel: t
    } = this.props;
    this.detach(), t();
  }
  handleKeydown(t) {
    t.code === le.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Sc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ii extends _o {
  constructor(t) {
    const {
      event: n
    } = t, r = un(n.target);
    super(t, Sc, r);
  }
}
ii.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Cc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var no;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(no || (no = {}));
class si extends _o {
  constructor(t) {
    super(t, Cc, un(t.event.target));
  }
}
si.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === no.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Lr = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class li extends _o {
  constructor(t) {
    super(t, Lr);
  }
  static setup() {
    return window.addEventListener(Lr.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Lr.move.name, t);
    };
    function t() {
    }
  }
}
li.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: a
    } = n;
    return a.length > 1 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
var En;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(En || (En = {}));
var ir;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(ir || (ir = {}));
function Pc(e) {
  let {
    acceleration: t,
    activator: n = En.Pointer,
    canScroll: r,
    draggingRect: a,
    enabled: i,
    interval: c = 5,
    order: s = ir.TreeOrder,
    pointerCoordinates: u,
    scrollableAncestors: f,
    scrollableAncestorRects: l,
    delta: d,
    threshold: v
  } = e;
  const h = Dc({
    delta: d,
    disabled: !i
  }), [m, b] = Bl(), w = Q({
    x: 0,
    y: 0
  }), _ = Q({
    x: 0,
    y: 0
  }), N = _e(() => {
    switch (n) {
      case En.Pointer:
        return u ? {
          top: u.y,
          bottom: u.y,
          left: u.x,
          right: u.x
        } : null;
      case En.DraggableRect:
        return a;
    }
  }, [n, a, u]), E = Q(null), I = Le(() => {
    const F = E.current;
    if (!F)
      return;
    const T = w.current.x * _.current.x, A = w.current.y * _.current.y;
    F.scrollBy(T, A);
  }, []), x = _e(() => s === ir.TreeOrder ? [...f].reverse() : f, [s, f]);
  J(
    () => {
      if (!i || !f.length || !N) {
        b();
        return;
      }
      for (const F of x) {
        if ((r == null ? void 0 : r(F)) === !1)
          continue;
        const T = f.indexOf(F), A = l[T];
        if (!A)
          continue;
        const {
          direction: W,
          speed: H
        } = mc(F, A, N, t, v);
        for (const B of ["x", "y"])
          h[B][W[B]] || (H[B] = 0, W[B] = 0);
        if (H.x > 0 || H.y > 0) {
          b(), E.current = F, m(I, c), w.current = H, _.current = W;
          return;
        }
      }
      w.current = {
        x: 0,
        y: 0
      }, _.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      I,
      r,
      b,
      i,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      m,
      f,
      x,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const Rc = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function Dc(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Qr(t);
  return jn((a) => {
    if (n || !r || !a)
      return Rc;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Ne.Backward]: a.x[Ne.Backward] || i.x === -1,
        [Ne.Forward]: a.x[Ne.Forward] || i.x === 1
      },
      y: {
        [Ne.Backward]: a.y[Ne.Backward] || i.y === -1,
        [Ne.Forward]: a.y[Ne.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function Nc(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return jn((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function Ic(e, t) {
  return _e(() => e.reduce((n, r) => {
    const {
      sensor: a
    } = r, i = a.activators.map((c) => ({
      eventName: c.eventName,
      handler: t(c.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var Nn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Nn || (Nn = {}));
var ro;
(function(e) {
  e.Optimized = "optimized";
})(ro || (ro = {}));
const aa = /* @__PURE__ */ new Map();
function Ac(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, c] = ee(null), {
    frequency: s,
    measure: u,
    strategy: f
  } = a, l = Q(e), d = w(), v = Dn(d), h = Le(function(_) {
    _ === void 0 && (_ = []), !v.current && c((N) => N === null ? _ : N.concat(_.filter((E) => !N.includes(E))));
  }, [v]), m = Q(null), b = jn((_) => {
    if (d && !n)
      return aa;
    if (!_ || _ === aa || l.current !== e || i != null) {
      const N = /* @__PURE__ */ new Map();
      for (let E of e) {
        if (!E)
          continue;
        if (i && i.length > 0 && !i.includes(E.id) && E.rect.current) {
          N.set(E.id, E.rect.current);
          continue;
        }
        const I = E.node.current, x = I ? new bo(u(I), I) : null;
        E.rect.current = x, x && N.set(E.id, x);
      }
      return N;
    }
    return _;
  }, [e, i, n, d, u]);
  return J(() => {
    l.current = e;
  }, [e]), J(
    () => {
      d || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), J(
    () => {
      i && i.length > 0 && c(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), J(
    () => {
      d || typeof s != "number" || m.current !== null || (m.current = setTimeout(() => {
        h(), m.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, d, h, ...r]
  ), {
    droppableRects: b,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function w() {
    switch (f) {
      case Nn.Always:
        return !1;
      case Nn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function ci(e, t) {
  return jn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Mc(e, t) {
  return ci(e, t);
}
function $c(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = go(t), a = _e(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return J(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function fr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = go(t), a = _e(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return J(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function kc(e) {
  return new bo(Fn(e), e);
}
function ia(e, t, n) {
  t === void 0 && (t = kc);
  const [r, a] = uo(s, null), i = $c({
    callback(u) {
      if (e)
        for (const f of u) {
          const {
            type: l,
            target: d
          } = f;
          if (l === "childList" && d instanceof HTMLElement && d.contains(e)) {
            a();
            break;
          }
        }
    }
  }), c = fr({
    callback: a
  });
  return Tt(() => {
    a(), e ? (c == null || c.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (c == null || c.disconnect(), i == null || i.disconnect());
  }, [e]), r;
  function s(u) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var f;
      return (f = u ?? n) != null ? f : null;
    }
    const l = t(e);
    return JSON.stringify(u) === JSON.stringify(l) ? u : l;
  }
}
function Lc(e) {
  const t = ci(e);
  return Qa(e, t);
}
const sa = [];
function jc(e) {
  const t = Q(e), n = jn((r) => e ? r && r !== sa && e && t.current && e.parentNode === t.current.parentNode ? r : mo(e) : sa, [e]);
  return J(() => {
    t.current = e;
  }, [e]), n;
}
function Fc(e) {
  const [t, n] = ee(null), r = Q(e), a = Le((i) => {
    const c = $r(i.target);
    c && n((s) => s ? (s.set(c, to(c)), new Map(s)) : null);
  }, []);
  return J(() => {
    const i = r.current;
    if (e !== i) {
      c(i);
      const s = e.map((u) => {
        const f = $r(u);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, to(f)]) : null;
      }).filter((u) => u != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      c(e), c(i);
    };
    function c(s) {
      s.forEach((u) => {
        const f = $r(u);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), _e(() => e.length ? t ? Array.from(t.values()).reduce((i, c) => tn(i, c), gt) : oi(e) : gt, [e, t]);
}
function la(e, t) {
  t === void 0 && (t = []);
  const n = Q(null);
  return J(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), J(() => {
    const r = e !== gt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? or(e, n.current) : gt;
}
function Bc(e) {
  J(
    () => {
      if (!ur)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n == null || n();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function qc(e, t) {
  return _e(() => e.reduce((n, r) => {
    let {
      eventName: a,
      handler: i
    } = r;
    return n[a] = (c) => {
      i(c, t);
    }, n;
  }, {}), [e, t]);
}
function ui(e) {
  return _e(() => e ? pc(e) : null, [e]);
}
const jr = [];
function Vc(e, t) {
  t === void 0 && (t = Fn);
  const [n] = e, r = ui(n ? Ge(n) : null), [a, i] = uo(s, jr), c = fr({
    callback: i
  });
  return e.length > 0 && a === jr && i(), Tt(() => {
    e.length ? e.forEach((u) => c == null ? void 0 : c.observe(u)) : (c == null || c.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((u) => ni(u) ? r : new bo(t(u), u)) : jr;
  }
}
function Yc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Ln(t) ? t : e;
}
function zc(e) {
  let {
    measure: t
  } = e;
  const [n, r] = ee(null), a = Le((f) => {
    for (const {
      target: l
    } of f)
      if (Ln(l)) {
        r((d) => {
          const v = t(l);
          return d ? {
            ...d,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = fr({
    callback: a
  }), c = Le((f) => {
    const l = Yc(f);
    i == null || i.disconnect(), l && (i == null || i.observe(l)), r(l ? t(l) : null);
  }, [t, i]), [s, u] = rr(c);
  return _e(() => ({
    nodeRef: s,
    rect: n,
    setRef: u
  }), [n, s, u]);
}
const Wc = [{
  sensor: ii,
  options: {}
}, {
  sensor: yo,
  options: {}
}], Uc = {
  current: {}
}, Kn = {
  draggable: {
    measure: ta
  },
  droppable: {
    measure: ta,
    strategy: Nn.WhileDragging,
    frequency: ro.Optimized
  },
  dragOverlay: {
    measure: Fn
  }
};
class Tn extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const Hc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Tn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: ar
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Kn,
  measureDroppableContainers: ar,
  windowRect: null,
  measuringScheduled: !1
}, Gc = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: ar,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: ar
}, pr = /* @__PURE__ */ ut(Gc), Zc = /* @__PURE__ */ ut(Hc);
function Xc() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Tn()
    }
  };
}
function Kc(e, t) {
  switch (t.type) {
    case De.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case De.DragMove:
      return e.draggable.active ? {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      } : e;
    case De.DragEnd:
    case De.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case De.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, a = new Tn(e.droppable.containers);
      return a.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case De.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: a
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const c = new Tn(e.droppable.containers);
      return c.set(n, {
        ...i,
        disabled: a
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: c
        }
      };
    }
    case De.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, a = e.droppable.containers.get(n);
      if (!a || r !== a.key)
        return e;
      const i = new Tn(e.droppable.containers);
      return i.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    default:
      return e;
  }
}
function Qc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: a
  } = Te(pr), i = Qr(r), c = Qr(n == null ? void 0 : n.id);
  return J(() => {
    if (!t && !r && i && c != null) {
      if (!Za(i) || document.activeElement === i.target)
        return;
      const s = a.get(c);
      if (!s)
        return;
      const {
        activatorNode: u,
        node: f
      } = s;
      if (!u.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const l of [u.current, f.current]) {
          if (!l)
            continue;
          const d = Yl(l);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [r, t, a, c, i]), null;
}
function Jc(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...r
  }), n) : n;
}
function eu(e) {
  return _e(
    () => ({
      draggable: {
        ...Kn.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Kn.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Kn.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function tu(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: a = !0
  } = e;
  const i = Q(!1), {
    x: c,
    y: s
  } = typeof a == "boolean" ? {
    x: a,
    y: a
  } : a;
  Tt(() => {
    if (!c && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const l = n(f), d = Qa(l, r);
    if (c || (d.x = 0), s || (d.y = 0), i.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const v = Ja(f);
      v && v.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [t, c, s, r, n]);
}
const di = /* @__PURE__ */ ut({
  ...gt,
  scaleX: 1,
  scaleY: 1
});
var Nt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Nt || (Nt = {}));
const nu = /* @__PURE__ */ $a(function(t) {
  var n, r, a, i;
  let {
    id: c,
    accessibility: s,
    autoScroll: u = !0,
    children: f,
    sensors: l = Wc,
    collisionDetection: d = ic,
    measuring: v,
    modifiers: h,
    ...m
  } = t;
  const b = uo(Kc, void 0, Xc), [w, _] = b, [N, E] = Xl(), [I, x] = ee(Nt.Uninitialized), F = I === Nt.Initialized, {
    draggable: {
      active: T,
      nodes: A,
      translate: W
    },
    droppable: {
      containers: H
    }
  } = w, B = T ? A.get(T) : null, z = Q({
    initial: null,
    translated: null
  }), G = _e(() => {
    var be;
    return T != null ? {
      id: T,
      // It's possible for the active node to unmount while dragging
      data: (be = B == null ? void 0 : B.data) != null ? be : Uc,
      rect: z
    } : null;
  }, [T, B]), K = Q(null), [oe, Z] = ee(null), [X, ce] = ee(null), ie = Dn(m, Object.values(m)), S = dr("DndDescribedBy", c), L = _e(() => H.getEnabled(), [H]), y = eu(v), {
    droppableRects: O,
    measureDroppableContainers: C,
    measuringScheduled: R
  } = Ac(L, {
    dragging: F,
    dependencies: [W.x, W.y],
    config: y.droppable
  }), P = Nc(A, T), M = _e(() => X ? Jr(X) : null, [X]), q = Wn(), U = Mc(P, y.draggable.measure);
  tu({
    activeNode: T ? A.get(T) : null,
    config: q.layoutShiftCompensation,
    initialRect: U,
    measure: y.draggable.measure
  });
  const V = ia(P, y.draggable.measure, U), j = ia(P ? P.parentElement : null), D = Q({
    activatorEvent: null,
    active: null,
    activeNode: P,
    collisionRect: null,
    collisions: null,
    droppableRects: O,
    draggableNodes: A,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: H,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ne = H.getNodeFor((n = D.current.over) == null ? void 0 : n.id), de = zc({
    measure: y.dragOverlay.measure
  }), ye = (r = de.nodeRef.current) != null ? r : P, xe = F ? (a = de.rect) != null ? a : V : null, je = !!(de.nodeRef.current && de.rect), dt = Lc(je ? null : V), Ze = ui(ye ? Ge(ye) : null), Oe = jc(F ? ne ?? P : null), qe = Vc(Oe), Xe = Jc(h, {
    transform: {
      x: W.x - dt.x,
      y: W.y - dt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: X,
    active: G,
    activeNodeRect: V,
    containerNodeRect: j,
    draggingNodeRect: xe,
    over: D.current.over,
    overlayNodeRect: de.rect,
    scrollableAncestors: Oe,
    scrollableAncestorRects: qe,
    windowRect: Ze
  }), $t = M ? tn(M, W) : null, St = Fc(Oe), kt = la(St), Lt = la(St, [V]), Fe = tn(Xe, kt), ft = xe ? cc(xe, Xe) : null, Ct = G && ft ? d({
    active: G,
    collisionRect: ft,
    droppableRects: O,
    droppableContainers: L,
    pointerCoordinates: $t
  }) : null, fn = Ka(Ct, "id"), [nt, Vn] = ee(null), Or = je ? Xe : tn(Xe, Lt), Er = sc(Or, (i = nt == null ? void 0 : nt.rect) != null ? i : null, V), Yn = Le(
    (be, Ie) => {
      let {
        sensor: Ae,
        options: pt
      } = Ie;
      if (K.current == null)
        return;
      const Ve = A.get(K.current);
      if (!Ve)
        return;
      const Ye = be.nativeEvent, rt = new Ae({
        active: K.current,
        activeNode: Ve,
        event: Ye,
        options: pt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: D,
        onStart(ze) {
          const jt = K.current;
          if (jt == null)
            return;
          const Ft = A.get(jt);
          if (!Ft)
            return;
          const {
            onDragStart: Bt
          } = ie.current, Zt = {
            active: {
              id: jt,
              data: Ft.data,
              rect: z
            }
          };
          vn(() => {
            Bt == null || Bt(Zt), x(Nt.Initializing), _({
              type: De.DragStart,
              initialCoordinates: ze,
              active: jt
            }), N({
              type: "onDragStart",
              event: Zt
            });
          });
        },
        onMove(ze) {
          _({
            type: De.DragMove,
            coordinates: ze
          });
        },
        onEnd: Ot(De.DragEnd),
        onCancel: Ot(De.DragCancel)
      });
      vn(() => {
        Z(rt), ce(be.nativeEvent);
      });
      function Ot(ze) {
        return async function() {
          const {
            active: Ft,
            collisions: Bt,
            over: Zt,
            scrollAdjustedTranslate: Un
          } = D.current;
          let qt = null;
          if (Ft && Un) {
            const {
              cancelDrop: Vt
            } = ie.current;
            qt = {
              activatorEvent: Ye,
              active: Ft,
              collisions: Bt,
              delta: Un,
              over: Zt
            }, ze === De.DragEnd && typeof Vt == "function" && await Promise.resolve(Vt(qt)) && (ze = De.DragCancel);
          }
          K.current = null, vn(() => {
            _({
              type: ze
            }), x(Nt.Uninitialized), Vn(null), Z(null), ce(null);
            const Vt = ze === De.DragEnd ? "onDragEnd" : "onDragCancel";
            if (qt) {
              const g = ie.current[Vt];
              g == null || g(qt), N({
                type: Vt,
                event: qt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [A]
  ), Tr = Le((be, Ie) => (Ae, pt) => {
    const Ve = Ae.nativeEvent, Ye = A.get(pt);
    if (
      // Another sensor is already instantiating
      K.current !== null || // No active draggable
      !Ye || // Event has already been captured
      Ve.dndKit || Ve.defaultPrevented
    )
      return;
    const rt = {
      active: Ye
    };
    be(Ae, Ie.options, rt) === !0 && (Ve.dndKit = {
      capturedBy: Ie.sensor
    }, K.current = pt, Yn(Ae, Ie));
  }, [A, Yn]), zn = Ic(l, Tr);
  Bc(l), Tt(() => {
    V && I === Nt.Initializing && x(Nt.Initialized);
  }, [V, I]), J(
    () => {
      const {
        onDragMove: be
      } = ie.current, {
        active: Ie,
        activatorEvent: Ae,
        collisions: pt,
        over: Ve
      } = D.current;
      if (!Ie || !Ae)
        return;
      const Ye = {
        active: Ie,
        activatorEvent: Ae,
        collisions: pt,
        delta: {
          x: Fe.x,
          y: Fe.y
        },
        over: Ve
      };
      vn(() => {
        be == null || be(Ye), N({
          type: "onDragMove",
          event: Ye
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Fe.x, Fe.y]
  ), J(
    () => {
      const {
        active: be,
        activatorEvent: Ie,
        collisions: Ae,
        droppableContainers: pt,
        scrollAdjustedTranslate: Ve
      } = D.current;
      if (!be || K.current == null || !Ie || !Ve)
        return;
      const {
        onDragOver: Ye
      } = ie.current, rt = pt.get(fn), Ot = rt && rt.rect.current ? {
        id: rt.id,
        rect: rt.rect.current,
        data: rt.data,
        disabled: rt.disabled
      } : null, ze = {
        active: be,
        activatorEvent: Ie,
        collisions: Ae,
        delta: {
          x: Ve.x,
          y: Ve.y
        },
        over: Ot
      };
      vn(() => {
        Vn(Ot), Ye == null || Ye(ze), N({
          type: "onDragOver",
          event: ze
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fn]
  ), Tt(() => {
    D.current = {
      activatorEvent: X,
      active: G,
      activeNode: P,
      collisionRect: ft,
      collisions: Ct,
      droppableRects: O,
      draggableNodes: A,
      draggingNode: ye,
      draggingNodeRect: xe,
      droppableContainers: H,
      over: nt,
      scrollableAncestors: Oe,
      scrollAdjustedTranslate: Fe
    }, z.current = {
      initial: xe,
      translated: ft
    };
  }, [G, P, Ct, ft, A, ye, xe, O, H, nt, Oe, Fe]), Pc({
    ...q,
    delta: W,
    draggingRect: ft,
    pointerCoordinates: $t,
    scrollableAncestors: Oe,
    scrollableAncestorRects: qe
  });
  const Sr = _e(() => ({
    active: G,
    activeNode: P,
    activeNodeRect: V,
    activatorEvent: X,
    collisions: Ct,
    containerNodeRect: j,
    dragOverlay: de,
    draggableNodes: A,
    droppableContainers: H,
    droppableRects: O,
    over: nt,
    measureDroppableContainers: C,
    scrollableAncestors: Oe,
    scrollableAncestorRects: qe,
    measuringConfiguration: y,
    measuringScheduled: R,
    windowRect: Ze
  }), [G, P, V, X, Ct, j, de, A, H, O, nt, C, Oe, qe, y, R, Ze]), pn = _e(() => ({
    activatorEvent: X,
    activators: zn,
    active: G,
    activeNodeRect: V,
    ariaDescribedById: {
      draggable: S
    },
    dispatch: _,
    draggableNodes: A,
    over: nt,
    measureDroppableContainers: C
  }), [X, zn, G, V, _, S, A, nt, C]);
  return ke.createElement(Xa.Provider, {
    value: E
  }, ke.createElement(pr.Provider, {
    value: pn
  }, ke.createElement(Zc.Provider, {
    value: Sr
  }, ke.createElement(di.Provider, {
    value: Er
  }, f)), ke.createElement(Qc, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), ke.createElement(Jl, {
    ...s,
    hiddenTextDescribedById: S
  }));
  function Wn() {
    const be = (oe == null ? void 0 : oe.autoScrollEnabled) === !1, Ie = typeof u == "object" ? u.enabled === !1 : u === !1, Ae = F && !be && !Ie;
    return typeof u == "object" ? {
      ...u,
      enabled: Ae
    } : {
      enabled: Ae
    };
  }
}), ru = /* @__PURE__ */ ut(null), ca = "button", ou = "Droppable";
function au(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = dr(ou), {
    activators: c,
    activatorEvent: s,
    active: u,
    activeNodeRect: f,
    ariaDescribedById: l,
    draggableNodes: d,
    over: v
  } = Te(pr), {
    role: h = ca,
    roleDescription: m = "draggable",
    tabIndex: b = 0
  } = a ?? {}, w = (u == null ? void 0 : u.id) === t, _ = Te(w ? di : ru), [N, E] = rr(), [I, x] = rr(), F = qc(c, t), T = Dn(n);
  Tt(
    () => (d.set(t, {
      id: t,
      key: i,
      node: N,
      activatorNode: I,
      data: T
    }), () => {
      const W = d.get(t);
      W && W.key === i && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const A = _e(() => ({
    role: h,
    tabIndex: b,
    "aria-disabled": r,
    "aria-pressed": w && h === ca ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": l.draggable
  }), [r, h, b, w, m, l.draggable]);
  return {
    active: u,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: A,
    isDragging: w,
    listeners: r ? void 0 : F,
    node: N,
    over: v,
    setNodeRef: E,
    setActivatorNodeRef: x,
    transform: _
  };
}
const iu = "Droppable", su = {
  timeout: 25
};
function fi(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: a
  } = e;
  const i = dr(iu), {
    active: c,
    dispatch: s,
    over: u,
    measureDroppableContainers: f
  } = Te(pr), l = Q({
    disabled: n
  }), d = Q(!1), v = Q(null), h = Q(null), {
    disabled: m,
    updateMeasurementsFor: b,
    timeout: w
  } = {
    ...su,
    ...a
  }, _ = Dn(b ?? r), N = Le(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(_.current) ? _.current : [_.current]), h.current = null;
      }, w);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [w]
  ), E = fr({
    callback: N,
    disabled: m || !c
  }), I = Le((A, W) => {
    E && (W && (E.unobserve(W), d.current = !1), A && E.observe(A));
  }, [E]), [x, F] = rr(I), T = Dn(t);
  return J(() => {
    !E || !x.current || (E.disconnect(), d.current = !1, E.observe(x.current));
  }, [x, E]), Tt(
    () => (s({
      type: De.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: x,
        rect: v,
        data: T
      }
    }), () => s({
      type: De.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), J(() => {
    n !== l.current.disabled && (s({
      type: De.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), l.current.disabled = n);
  }, [r, i, n, s]), {
    active: c,
    rect: v,
    isOver: (u == null ? void 0 : u.id) === r,
    node: x,
    over: u,
    setNodeRef: F
  };
}
const lu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, cu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, uu = [le.Down, le.Right, le.Up, le.Left], du = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (uu.includes(e.code)) {
    e.preventDefault();
    const c = 20;
    if (!t || !a)
      return;
    const s = [];
    r.getEnabled().forEach((l) => {
      if (!l || l != null && l.disabled)
        return;
      const d = n.get(l.id);
      if (d)
        switch (e.code) {
          case le.Down:
            a.top < d.top && s.push(l);
            break;
          case le.Up:
            a.top > d.top + c && s.push(l);
            break;
          case le.Left:
            a.left >= d.left + d.width && s.push(l);
            break;
          case le.Right:
            a.left + a.width <= d.left && s.push(l);
            break;
        }
    });
    const u = oc({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = Ka(u, "id");
    if (f != null) {
      const l = r.get(f), d = l == null ? void 0 : l.node.current, v = l == null ? void 0 : l.rect.current;
      if (d && v)
        return ((i = l.data.current) == null ? void 0 : i.type) === "container" ? {
          x: v.left,
          y: v.top + c
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, pi = ut(), xn = (e, t) => Re.map(e, (n) => {
  var r;
  if (ct(n) && n.props) {
    if (((r = n == null ? void 0 : n.props) == null ? void 0 : r.__TYPE) === t)
      return n;
    if (n.props.children)
      return xn(n.props.children, t);
  }
}), fu = {
  onDragStart({ active: e }) {
    return `Se ha agarrado el elemento arrastrable ${e.data.current.label}.`;
  },
  onDragOver({ active: e, over: t }) {
    return t ? `El elemento arrastrable ${e.data.current.label} se movió sobre la área desplegable ${t.data.current.label}.` : `El elemento arrastrable ${e.data.current.label} ya no está sobre una área desplegable.`;
  },
  onDragEnd({ active: e, over: t }) {
    return t ? `El elemento arrastrable ${e.data.current.label} se soltó sobre la área desplegable ${t.data.current.label}.` : `El elemento arrastrable item ${e.data.current.label} se eliminó.`;
  },
  onDragCancel({ active: e }) {
    return `Se cancelo el arrastre. El elemento arrastrable ${e.data.current.label} se eliminó.`;
  }
}, vi = ({
  children: e,
  multipleDrags: t,
  onValidate: n,
  validate: r,
  reboot: a,
  propValidate: i,
  modifiers: c,
  screenReaderInstructions: s,
  announcements: u,
  defaultState: f,
  defaultValidate: l,
  onState: d,
  id: v
}) => {
  const [h, m] = ee([]), [b, w] = ee(null), [_, N] = ee(
    () => Object.keys(f).length > 0 ? f : I()
  ), E = Q(!1);
  function I() {
    return [
      ...xn(e, "droppable"),
      ...xn(e, "general-draggable")
    ].reduce(
      (B, z) => ({
        ...B,
        [z.props.id]: z.props.children ? [
          ...xn(z.props.children, "draggable").map(
            (G) => G.props.id
          )
        ] : []
      }),
      {}
    );
  }
  const x = Object.freeze({
    restrictToVerticalAxis: cu,
    restrictToHorizontalAxis: lu
  }), F = ec(
    Mr(si),
    Mr(li),
    Mr(yo, {
      coordinateGetter: du
    })
  ), T = (B, z) => {
    if (Object.keys(_).pop() === B.id)
      return;
    let K = [
      ...h.filter((oe) => oe !== z),
      B.data.current.validate.includes(z) ? z : ""
    ].filter((oe) => !!oe);
    if (!t) {
      const oe = _[B.id][0];
      K = oe ? K.filter((Z) => Z !== oe) : K;
    }
    n && n({ validate: [...K], active: !0 }), m(K);
  }, A = (B) => B in _ ? B : Object.keys(_).find((z) => _[z].includes(B)), W = ({ active: B, over: z }) => {
    if (!z)
      return;
    w(null);
    const G = Object.keys(_).pop(), K = A(z.id), oe = A(B.id);
    oe !== K && (G !== z.id && T(z, B.id), N((Z) => {
      E.current = !0;
      const X = Z[oe].filter(
        (S) => S !== B.id
      ), ce = [...Z[K]];
      return t ? {
        ...Z,
        [oe]: X,
        [K]: [...ce, B.id]
      } : {
        ...{
          ...Z,
          [oe]: X,
          [K]: K === G ? [...ce, B.id] : [B.id]
        },
        ...K !== G && Z[K].length > 0 && {
          [G]: [
            ...Z[G].filter((S) => S !== B.id),
            ...Z[K]
          ]
        }
      };
    }));
  }, H = (B) => Re.map(B, (z) => {
    if (!z.props)
      return z;
    if (z.props.__TYPE !== "draggable")
      return z.props.id in _ && _[z.props.id].length > 0 ? Pe(z, { ...z.props }, [
        ..._[z.props.id].map(
          (G) => xn(e, "draggable").filter(
            (K) => K.props.id === G
          )
        ).flat()
      ]) : z.props.children ? Pe(z, {
        ...z.props,
        children: H(z.props.children)
      }) : z;
  });
  return J(() => {
    a && (N(() => I()), n && n({ validate: [], active: !1 }));
  }, [a]), J(() => {
    Object.keys(f).length !== 0 && N(f);
  }, [f]), J(() => {
    l.length !== 0 && m(l);
  }, [l]), J(() => {
    d && E.current && (E.current = !1, d({
      state: { key: v, newObjectState: { ..._ }, validateId: h }
    }));
  }, [d, _]), /* @__PURE__ */ p(
    pi.Provider,
    {
      value: {
        listId: h,
        propValidate: i,
        validate: r,
        isDragging: b
      },
      children: /* @__PURE__ */ k(
        nu,
        {
          sensors: F,
          screenReaderInstructions: {
            draggable: s
          },
          accessibility: { announcements: u },
          onDragStart: ({ active: B }) => w(B.id),
          onDragEnd: W,
          onDragCancel: () => w(null),
          ...c && { modifiers: [x[c]] },
          children: [
            H(e),
            /* @__PURE__ */ p("p", { children: "a" })
          ]
        }
      )
    }
  );
};
vi.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: fu,
  defaultState: {},
  defaultValidate: [],
  screenReaderInstructions: "Para recoger un elemento arrastrable, presiona la barra espaciadora o la tecla Enter. Mientras arrastras, usa las teclas de flecha para mover el elemento en cualquier dirección deseada. Presiona nuevamente la barra espaciadora o la tecla Enter para soltar el elemento en su nueva posición, o presiona escape para cancelar."
};
vi.propTypes = {
  children: o.oneOfType([
    o.element,
    o.arrayOf(o.element),
    o.node,
    o.arrayOf(o.node)
  ]),
  multipleDrags: o.bool,
  onValidate: o.func,
  reboot: o.bool,
  validate: o.bool.isRequired,
  propValidate: o.string.isRequired,
  modifiers: o.oneOf([
    "restrictToVerticalAxis",
    "restrictToHorizontalAxis"
  ]),
  screenReaderInstructions: o.string.isRequired,
  announcements: o.object.isRequired,
  defaultState: o.object,
  defaultValidate: o.array,
  onState: o.func,
  id: o.string
};
const pu = "_pop_1elvh_1", nn = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: pu
}, hi = ({ children: e, id: t, addClass: n, dragging: r, label: a, attribute: i, disabledDefaultAttributes: c, element: s, defaultStyle: u, __TYPE: f, ...l }) => {
  const d = s || "div", { listId: v, propValidate: h, validate: m, isDragging: b } = Te(pi), { attributes: w, listeners: _, setNodeRef: N, transform: E } = au({
    id: t,
    disabled: m,
    data: {
      label: a
    },
    attributes: i
  });
  return /* @__PURE__ */ p(
    d,
    {
      id: t,
      ref: N,
      "data-type": f,
      className: te({
        [nn["c-draggable"]]: !u,
        [`${r} ${nn["is-draggable--active-animation"]}`]: b === t && !u,
        [n]: n
      }),
      style: { transform: eo.Translate.toString(E) },
      ...m && { [h]: !!v.includes(t) },
      ...!c && { ...w },
      ..._,
      ...l,
      children: e
    }
  );
};
hi.defaultProps = {
  __TYPE: "draggable",
  dragging: nn["c-draggable--active"],
  disabledDefaultAttributes: !1
};
hi.propTypes = {
  children: o.oneOfType([o.node, o.element]),
  id: o.string.isRequired,
  addClass: o.string,
  dragging: o.string,
  label: o.string.isRequired,
  attribute: o.shape({
    role: o.string,
    roleDescription: o.string,
    tabIndex: o.number
  }),
  disabledDefaultAttributes: o.bool,
  element: o.string,
  defaultStyle: o.bool,
  __TYPE: me("draggable")
};
const gi = ({
  children: e,
  id: t,
  validate: n,
  addClass: r,
  over: a,
  label: i,
  element: c,
  defaultStyle: s,
  __TYPE: u,
  ...f
}) => {
  const l = c || "div", { isOver: d, setNodeRef: v } = fi({
    id: t,
    data: {
      validate: n,
      label: i,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(
    l,
    {
      ref: v,
      "data-type": u,
      className: te({
        [nn["c-droppable"]]: !s,
        [a]: d && !s,
        [r]: r
      }),
      ...f,
      children: e
    }
  );
};
gi.defaultProps = {
  __TYPE: "droppable",
  over: nn["c-droppable--active"]
};
gi.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  id: o.string.isRequired,
  validate: o.array.isRequired,
  addClass: o.string,
  over: o.string,
  label: o.string.isRequired,
  element: o.string,
  defaultStyle: o.bool,
  __TYPE: me("droppable")
};
const mi = ({
  children: e,
  addClass: t,
  over: n,
  id: r,
  label: a,
  element: i,
  defaultStyle: c,
  __TYPE: s,
  ...u
}) => {
  const f = i || "div", { isOver: l, setNodeRef: d } = fi({
    id: r,
    data: {
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(
    f,
    {
      id: r,
      ref: d,
      "data-type": s,
      className: te({
        [nn["c-droppable"]]: !c,
        [n]: l && !c,
        [t]: t
      }),
      ...u,
      children: e
    }
  );
};
mi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  over: o.string,
  id: o.string.isRequired,
  label: o.string.isRequired,
  element: o.string,
  defaultStyle: o.bool,
  __TYPE: me("general-draggable")
};
mi.defaultProps = {
  __TYPE: "general-draggable",
  id: Ua("unique-id-general-"),
  label: "contendor inicial"
};
const _p = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ k("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ k("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" })
  ] }) }),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_highcontrast",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ k("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "3.0" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "3.0" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "3.0" })
      ] })
    }
  ),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_highcontrast_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ k("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_grayscale",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
          }
        ),
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "3" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "3" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "3" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_grayscale_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ k("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_invert",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ k("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
      ] })
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_invert_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "1.7" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_yellow_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
        ] }),
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: "0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_yellow_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_red_on_white",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      filterUnits: "objectBoundingBox",
      primitiveUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: "                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }
        ),
        /* @__PURE__ */ k("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0.97 0.52" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0.03" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0.98 0.06" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_red_on_white_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_green_on_blue",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      filterUnits: "objectBoundingBox",
      primitiveUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }
        ),
        /* @__PURE__ */ k("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0.09 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0.16" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_green_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_yellow_on_blue",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      filterUnits: "objectBoundingBox",
      primitiveUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }
        ),
        /* @__PURE__ */ k("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0.99 0.16" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_yellow_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_white_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      filterUnits: "objectBoundingBox",
      primitiveUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }
        ),
        /* @__PURE__ */ k("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0.98 0" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ k(
    "filter",
    {
      id: "hc_extension_white_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ k("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  )
] }) }) }), ua = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, bi = ({ url: e, alt: t, title: n, width: r, addClass: a, noCaption: i, defaultStyle: c, ...s }) => {
  const [u, f] = ee(!1), l = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, d = (h) => f(h), v = u ? l : `${e}`;
  return /* @__PURE__ */ k(
    "figure",
    {
      className: te({
        [ua["c-image"]]: !c,
        [a]: a
      }),
      ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } },
      children: [
        /* @__PURE__ */ p("img", { src: v, onError: d, alt: t, ...s }),
        !i && /* @__PURE__ */ p("figcaption", { className: ua["c-image__figcaption"], children: /* @__PURE__ */ k("p", { children: [
          /* @__PURE__ */ k("strong", { children: [
            n,
            " "
          ] }),
          t
        ] }) })
      ]
    }
  );
};
bi.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
bi.propTypes = {
  url: o.string,
  alt: o.string,
  title: o.string,
  width: o.string,
  addClass: o.string,
  noCaption: o.bool,
  defaultStyle: o.bool
};
const In = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, yi = _t(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: c, isDisabled: s, isRequired: u, isReadOnly: f, defaultStyle: l, onValue: d }, v) => {
  const h = e || At(), m = ({ target: b }) => {
    d && d({ id: h, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ k(
    "label",
    {
      htmlFor: h,
      className: te({
        [In["c-label"]]: !l,
        [i]: i
      }),
      children: [
        /* @__PURE__ */ k("span", { className: `${!c && "u-sr-only"}`, children: [
          " ",
          a,
          " "
        ] }),
        /* @__PURE__ */ p(
          "input",
          {
            id: h,
            ref: v,
            type: t,
            name: h,
            value: n,
            disabled: s,
            required: u,
            placeholder: r,
            autoComplete: "off",
            onChange: m,
            className: te({
              [In["c-input"]]: !l
            }),
            ...f && { readOnly: f, "aria-readonly": f }
          }
        )
      ]
    }
  ) : null;
});
yi.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
yi.propTypes = {
  id: o.string,
  type: o.oneOf(["text", "email", "password", "date"]),
  value: o.oneOfType([o.string, o.number]),
  placeholder: o.string,
  label: o.string.isRequired,
  addClass: o.string,
  isLabelVisible: o.bool,
  isDisabled: o.bool,
  isRequired: o.bool,
  isReadOnly: o.bool,
  defaultStyle: o.bool,
  onValue: o.func,
  __TYPE: me("Input")
};
const vu = ({ children: e, onAllValue: t }) => {
  const [n, r] = ee([]), a = (s) => r([...n.filter((u) => u.id !== s.id), { ...s }]);
  J(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, u, f) => Re.toArray(s).map((l) => l.props.__TYPE === u ? Pe(l, { ...l.props, ...f }) : l);
  return Re.map(e, (s) => {
    var u, f;
    return ct(s) ? ((u = s == null ? void 0 : s.props) == null ? void 0 : u.__TYPE) === "InputStyle" ? Pe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? Pe(s, { ...s.props, onValue: a }) : s : null;
  });
};
vu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const _i = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: te({
      [In["c-input__wrapper-style"]]: !n,
      [t]: t
    }),
    children: He(e, ["InputLeftAddon", "InputRightAddon", "Input"])
  }
);
_i.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("InputStyle")
};
_i.defaultProps = {
  __TYPE: "InputStyle"
};
const wi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: te({
      [In["c-input__left-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
wi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("InputLeftAddon")
};
wi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const xi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: te({
      [In["c-input__right-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
xi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("InputRightAddon")
};
xi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const hu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, gu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: te({
      [hu["c-kbd"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
gu.propTypes = {
  children: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
const Oi = ({ children: e, link: t, addClass: n, isExternal: r, label: a, ...i }) => /* @__PURE__ */ p(
  "a",
  {
    "aria-label": a,
    href: t,
    ...n && { className: `${n}` },
    ...r && { target: "_blank", rel: "noopener" },
    ...i,
    children: e
  }
);
Oi.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Oi.propTypes = {
  children: o.oneOfType([
    o.string,
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  link: o.string,
  isExternal: o.bool,
  label: o.string.isRequired
};
const Ei = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, mu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "ul",
  {
    className: te({
      [Ei["c-List"]]: !n,
      [t]: t
    }),
    ...r,
    children: He(e, ["ListItem"])
  }
);
mu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool
};
const Ti = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = Re.map(e, (i) => {
    var c;
    return ((c = i == null ? void 0 : i.props) == null ? void 0 : c.__TYPE) === "Icon" ? Pe(i, { ...i.props, addClass: Ei["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
Ti.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: me("ListItem")
};
Ti.defaultProps = {
  __TYPE: "ListItem"
};
const bu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: He(e, ["ListItem"]) });
bu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const yu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: He(e, ["ListItem"]) });
yu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
var Fr = function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}();
function Br(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), r = function() {
    function f(l, d) {
      Br(this, f), this._inertManager = d, this._rootElement = l, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return Fr(f, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(d) {
          this._unmanageNode(d.node);
        }, this), this._observer = /** @type {?} */
        null, this._rootElement = /** @type {?} */
        null, this._managedNodes = /** @type {?} */
        null, this._inertManager = /** @type {?} */
        null;
      }
      /**
       * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
       */
    }, {
      key: "_makeSubtreeUnfocusable",
      /**
       * @param {!Node} startNode
       */
      value: function(d) {
        var v = this;
        c(d, function(w) {
          return v._visitNode(w);
        });
        var h = document.activeElement;
        if (!document.body.contains(d)) {
          for (var m = d, b = void 0; m; ) {
            if (m.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              b = /** @type {!ShadowRoot} */
              m;
              break;
            }
            m = m.parentNode;
          }
          b && (h = b.activeElement);
        }
        d.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
      }
      /**
       * @param {!Node} node
       */
    }, {
      key: "_visitNode",
      value: function(d) {
        if (d.nodeType === Node.ELEMENT_NODE) {
          var v = (
            /** @type {!HTMLElement} */
            d
          );
          v !== this._rootElement && v.hasAttribute("inert") && this._adoptInertRoot(v), (t.call(v, n) || v.hasAttribute("tabindex")) && this._manageNode(v);
        }
      }
      /**
       * Register the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_manageNode",
      value: function(d) {
        var v = this._inertManager.register(d, this);
        this._managedNodes.add(v);
      }
      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_unmanageNode",
      value: function(d) {
        var v = this._inertManager.deregister(d, this);
        v && this._managedNodes.delete(v);
      }
      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */
    }, {
      key: "_unmanageSubtree",
      value: function(d) {
        var v = this;
        c(d, function(h) {
          return v._unmanageNode(h);
        });
      }
      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!HTMLElement} node
       */
    }, {
      key: "_adoptInertRoot",
      value: function(d) {
        var v = this._inertManager.getInertRoot(d);
        v || (this._inertManager.setInert(d, !0), v = this._inertManager.getInertRoot(d)), v.managedNodes.forEach(function(h) {
          this._manageNode(h.node);
        }, this);
      }
      /**
       * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_onMutation",
      value: function(d, v) {
        d.forEach(function(h) {
          var m = (
            /** @type {!HTMLElement} */
            h.target
          );
          if (h.type === "childList")
            e.call(h.addedNodes).forEach(function(w) {
              this._makeSubtreeUnfocusable(w);
            }, this), e.call(h.removedNodes).forEach(function(w) {
              this._unmanageSubtree(w);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(m);
            else if (m !== this._rootElement && h.attributeName === "inert" && m.hasAttribute("inert")) {
              this._adoptInertRoot(m);
              var b = this._inertManager.getInertRoot(m);
              this._managedNodes.forEach(function(w) {
                m.contains(w.node) && b._manageNode(w.node);
              });
            }
          }
        }, this);
      }
    }, {
      key: "managedNodes",
      get: function() {
        return new Set(this._managedNodes);
      }
      /** @return {boolean} */
    }, {
      key: "hasSavedAriaHidden",
      get: function() {
        return this._savedAriaHidden !== null;
      }
      /** @param {?string} ariaHidden */
    }, {
      key: "savedAriaHidden",
      set: function(d) {
        this._savedAriaHidden = d;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), f;
  }(), a = function() {
    function f(l, d) {
      Br(this, f), this._node = l, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([d]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return Fr(f, [{
      key: "destructor",
      value: function() {
        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var d = (
            /** @type {!HTMLElement} */
            this._node
          );
          this._savedTabIndex !== null ? d.setAttribute("tabindex", this._savedTabIndex) : d.removeAttribute("tabindex"), this._overrodeFocusMethod && delete d.focus;
        }
        this._node = /** @type {?} */
        null, this._inertRoots = /** @type {?} */
        null, this._destroyed = !0;
      }
      /**
       * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
       * If the object has been destroyed, any attempt to access it will cause an exception.
       */
    }, {
      key: "_throwIfDestroyed",
      /**
       * Throw if user tries to access destroyed InertNode.
       */
      value: function() {
        if (this.destroyed)
          throw new Error("Trying to access destroyed InertNode");
      }
      /** @return {boolean} */
    }, {
      key: "ensureUntabbable",
      /** Save the existing tabindex value and make the node untabbable and unfocusable */
      value: function() {
        if (this.node.nodeType === Node.ELEMENT_NODE) {
          var d = (
            /** @type {!HTMLElement} */
            this.node
          );
          if (t.call(d, n)) {
            if (
              /** @type {!HTMLElement} */
              d.tabIndex === -1 && this.hasSavedTabIndex
            )
              return;
            d.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            d.tabIndex), d.setAttribute("tabindex", "-1"), d.nodeType === Node.ELEMENT_NODE && (d.focus = function() {
            }, this._overrodeFocusMethod = !0);
          } else
            d.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            d.tabIndex, d.removeAttribute("tabindex"));
        }
      }
      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "addInertRoot",
      value: function(d) {
        this._throwIfDestroyed(), this._inertRoots.add(d);
      }
      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "removeInertRoot",
      value: function(d) {
        this._throwIfDestroyed(), this._inertRoots.delete(d), this._inertRoots.size === 0 && this.destructor();
      }
    }, {
      key: "destroyed",
      get: function() {
        return (
          /** @type {!InertNode} */
          this._destroyed
        );
      }
    }, {
      key: "hasSavedTabIndex",
      get: function() {
        return this._savedTabIndex !== null;
      }
      /** @return {!Node} */
    }, {
      key: "node",
      get: function() {
        return this._throwIfDestroyed(), this._node;
      }
      /** @param {?number} tabIndex */
    }, {
      key: "savedTabIndex",
      set: function(d) {
        this._throwIfDestroyed(), this._savedTabIndex = d;
      },
      get: function() {
        return this._throwIfDestroyed(), this._savedTabIndex;
      }
    }]), f;
  }(), i = function() {
    function f(l) {
      if (Br(this, f), !l)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = l, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(l.head || l.body || l.documentElement), l.readyState === "loading" ? l.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return Fr(f, [{
      key: "setInert",
      value: function(d, v) {
        if (v) {
          if (this._inertRoots.has(d))
            return;
          var h = new r(d, this);
          if (d.setAttribute("inert", ""), this._inertRoots.set(d, h), !this._document.body.contains(d))
            for (var m = d.parentNode; m; )
              m.nodeType === 11 && s(m), m = m.parentNode;
        } else {
          if (!this._inertRoots.has(d))
            return;
          var b = this._inertRoots.get(d);
          b.destructor(), this._inertRoots.delete(d), d.removeAttribute("inert");
        }
      }
      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {!Node} element
       * @return {!InertRoot|undefined}
       */
    }, {
      key: "getInertRoot",
      value: function(d) {
        return this._inertRoots.get(d);
      }
      /**
       * Register the given InertRoot as managing the given node.
       * In the case where the node has a previously existing inert root, this inert root will
       * be added to its set of inert roots.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {!InertNode} inertNode
       */
    }, {
      key: "register",
      value: function(d, v) {
        var h = this._managedNodes.get(d);
        return h !== void 0 ? h.addInertRoot(v) : h = new a(d, v), this._managedNodes.set(d, h), h;
      }
      /**
       * De-register the given InertRoot as managing the given inert node.
       * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
       * node from the InertManager's set of managed nodes if it is destroyed.
       * If the node is not currently managed, this is essentially a no-op.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
       */
    }, {
      key: "deregister",
      value: function(d, v) {
        var h = this._managedNodes.get(d);
        return h ? (h.removeInertRoot(v), h.destroyed && this._managedNodes.delete(d), h) : null;
      }
      /**
       * Callback used when document has finished loading.
       */
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var d = e.call(this._document.querySelectorAll("[inert]"));
        d.forEach(function(v) {
          this.setInert(v, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
      /**
       * Callback used when mutation observer detects attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_watchForInert",
      value: function(d, v) {
        var h = this;
        d.forEach(function(m) {
          switch (m.type) {
            case "childList":
              e.call(m.addedNodes).forEach(function(_) {
                if (_.nodeType === Node.ELEMENT_NODE) {
                  var N = e.call(_.querySelectorAll("[inert]"));
                  t.call(_, "[inert]") && N.unshift(_), N.forEach(function(E) {
                    this.setInert(E, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (m.attributeName !== "inert")
                return;
              var b = (
                /** @type {!HTMLElement} */
                m.target
              ), w = b.hasAttribute("inert");
              h.setInert(b, w);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function c(f, l, d) {
    if (f.nodeType == Node.ELEMENT_NODE) {
      var v = (
        /** @type {!HTMLElement} */
        f
      );
      l && l(v);
      var h = (
        /** @type {!HTMLElement} */
        v.shadowRoot
      );
      if (h) {
        c(h, l);
        return;
      }
      if (v.localName == "content") {
        for (var m = (
          /** @type {!HTMLContentElement} */
          v
        ), b = m.getDistributedNodes ? m.getDistributedNodes() : [], w = 0; w < b.length; w++)
          c(b[w], l);
        return;
      }
      if (v.localName == "slot") {
        for (var _ = (
          /** @type {!HTMLSlotElement} */
          v
        ), N = _.assignedNodes ? _.assignedNodes({ flatten: !0 }) : [], E = 0; E < N.length; E++)
          c(N[E], l);
        return;
      }
    }
    for (var I = f.firstChild; I != null; )
      c(I, l), I = I.nextSibling;
  }
  function s(f) {
    if (!f.querySelector("style#inert-style, link#inert-style")) {
      var l = document.createElement("style");
      l.setAttribute("id", "inert-style"), l.textContent = `
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`, f.appendChild(l);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var u = new i(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      /** @this {!HTMLElement} */
      get: function() {
        return this.hasAttribute("inert");
      },
      /** @this {!HTMLElement} */
      set: function(l) {
        u.setInert(this, l);
      }
    });
  }
})();
const vr = ut(), _u = Object.freeze({
  ESC: 27
}), Si = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = Q(), i = (f) => {
    const l = document.querySelector("#root");
    l.inert = f;
  }, c = (f) => {
    (f.keyCode || f.which) === _u.ESC && u();
  }, s = (f, l) => {
    a.current.classList.replace(f, l);
  }, u = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), n(!t), Object.keys(r).length !== 0 && r.current.focus();
    }, 500);
  };
  return J(() => (t && (i(!0), a.current && a.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(
    vr.Provider,
    {
      value: { isOpen: t, onKeyDown: c, onCloseModal: u, refModal: a },
      children: /* @__PURE__ */ p(dn, { id: "js-modal", children: He(e, ["ModalContent", "ModalOverlay"]) })
    }
  );
};
Si.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Si.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  label: o.string.isRequired,
  finalFocusRef: o.object.isRequired
};
const Qn = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, Ci = ({
  label: e,
  addClass: t,
  children: n,
  onClick: r,
  onKeyDown: a,
  defaultStyle: i,
  __TYPE: c,
  ...s
}) => {
  const {
    isOpen: u,
    onKeyDown: f,
    onCloseModal: l,
    refModal: d
  } = Te(vr), v = (m) => {
    r && typeof r == "function" && r(m), l();
  };
  return /* @__PURE__ */ k(
    "div",
    {
      ref: d,
      role: "dialog",
      tabIndex: "-1",
      hidden: !u,
      "aria-label": e,
      "aria-modal": "true",
      "data-type": c,
      onKeyDown: (m) => {
        a && typeof a == "function" && a(m), f(m);
      },
      className: te(
        "animate__animated animate__fadeIn animate__faster video-interpreter-ui-modal",
        {
          [`${Qn["c-modal"]} u-px-3 u-py-3`]: !i,
          [t]: t
        }
      ),
      ...s,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: te({ [Qn["c-modal-container"]]: !i }),
            "data-class": "c-modal__container",
            children: n
          }
        ),
        /* @__PURE__ */ p(
          Wt,
          {
            addClass: te({ [Qn["c-close-button"]]: !i }),
            "data-class": "c-modal__close-button",
            label: "Cerrar modal",
            hasAriaLabel: !0,
            onClick: v,
            ...i && { defaultStyle: i },
            children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                height: "48",
                width: "48",
                viewBox: "0 0 48 48",
                children: /* @__PURE__ */ p(
                  "path",
                  {
                    id: "close",
                    d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
                  }
                )
              }
            ) })
          }
        )
      ]
    }
  );
};
Ci.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  label: o.string.isRequired,
  onClick: o.func,
  onKeyDown: o.func,
  defaultStyle: o.bool,
  __TYPE: me("ModalContent")
};
Ci.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const Pi = ({ addClass: e, onClick: t, defaultStyle: n }) => {
  const { isOpen: r, onCloseModal: a } = Te(vr), i = (c) => {
    t && typeof t == "function" && t(c), a();
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: te({
        [Qn["c-layout"]]: !n,
        [e]: e
      }),
      onClick: i,
      hidden: !r
    }
  );
};
Pi.propTypes = {
  addClass: o.string,
  onClick: o.func,
  defaultStyle: o.bool,
  __TYPE: me("ModalOverlay")
};
Pi.defaultProps = {
  __TYPE: "ModalOverlay"
};
const wu = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = Te(vr), r = (a) => {
    t && t(a), n();
  };
  return Pe(e, { ...e.props, onClick: r });
};
wu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const rn = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, hr = ut(), Ri = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: c, onValue: s }) => {
  const [u, f] = ee(r || 0), l = () => {
    if (n && u > i)
      return f(i);
    f((m) => m + c);
  }, d = () => {
    if (n && u < a)
      return f(a);
    f((m) => m - c);
  }, v = (m) => f(m), h = (m) => n && u === m;
  return J(() => {
    s && s(u);
  }, [u, s]), /* @__PURE__ */ p(
    hr.Provider,
    {
      value: {
        counter: u,
        min: a || Number.MIN_SAFE_INTEGER,
        max: i || Number.MAX_SAFE_INTEGER,
        validate: h,
        onChangeValue: v,
        onIncrementValue: l,
        onDecrementValue: d
      },
      children: /* @__PURE__ */ p("div", { className: `${rn["c-number-input"]} ${t ?? ""}`, children: He(e, ["NumberInputField", "NumberInputStepper"]) })
    }
  );
};
Ri.propTypes = {
  children: o.arrayOf(o.element),
  addClass: o.string,
  max: o.number,
  min: o.number,
  defaultValue: o.number,
  step: o.number,
  onValue: o.func,
  keepWithinRange: o.bool
};
Ri.defaultProps = {
  step: 1
};
const Di = _t(
  ({ id: e, name: t, label: n, pattern: r, addClass: a, isLabelVisible: i }, c) => {
    const {
      counter: s,
      onChangeValue: u,
      onIncrementValue: f,
      onDecrementValue: l,
      min: d,
      max: v
    } = Te(hr), h = e || At(), m = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), b = ({ target: _ }) => {
      if (!isNaN(_.value) && _.value)
        return u(parseInt(_.value));
      u(0);
    }, w = (_) => {
      switch (_.keyCode || _.which) {
        case m.UP:
          f();
          break;
        case m.DOWN:
          l();
          break;
        case m.END:
          u(v);
          break;
        case m.HOME:
          u(d);
          break;
        default:
          return null;
      }
    };
    return /* @__PURE__ */ k(
      "label",
      {
        htmlFor: h,
        className: `${rn["c-number-input__label"]} ${a ?? ""}`,
        children: [
          /* @__PURE__ */ k("span", { className: `${!i && "u-sr-only"}`, children: [
            " ",
            n,
            " "
          ] }),
          /* @__PURE__ */ p(
            "input",
            {
              id: h,
              ref: c,
              type: "text",
              name: t,
              role: "spinbutton",
              inputMode: "decimal",
              pattern: r,
              autoCorrect: "off",
              autoComplete: "off",
              className: rn["c-number-input__input"],
              onChange: b,
              onKeyDown: w,
              ...s || s === 0 ? {
                value: s,
                "aria-valuemax": v,
                "aria-valuemin": d,
                "aria-valuenow": s,
                "aria-valuetext": `${s}`
              } : { value: "" }
            }
          )
        ]
      }
    );
  }
);
Di.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Di.propTypes = {
  id: o.string,
  name: o.string,
  label: o.string,
  pattern: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  __TYPE: me("NumberInputField")
};
const Ni = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${rn["c-number-input__stepper"]} ${t ?? ""}`, children: He(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Ni.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberInputStepper")
};
Ni.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Ii = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = Te(hr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Decrementar valor"}`,
      className: `${rn["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Ii.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberDecrementStepper"),
  label: o.string
};
Ii.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Ai = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: r, validate: a, max: i } = Te(hr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Incrementar valor"}`,
      className: `${rn["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
Ai.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberIncrementStepper"),
  label: o.string
};
Ai.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const xu = (e) => {
  const {
    boundaryCount: t = 1,
    count: n = 1,
    defaultPage: r,
    disabled: a = !1,
    hideNextButton: i = !1,
    hidePrevButton: c = !1,
    onChange: s,
    showFirstButton: u = !1,
    showLastButton: f = !1,
    siblingCount: l = 1,
    ...d
  } = e, [v, h] = ee(r || 1);
  J(() => {
    r && h(r);
  }, [r]);
  const m = (T, A) => {
    h(A), s && s(T, A);
  }, b = (T, A) => {
    const W = A - T + 1;
    return Array.from({ length: W }, (H, B) => T + B);
  }, w = b(1, Math.min(t, n)), _ = b(
    Math.max(n - t + 1, t + 1),
    n
  ), N = Math.max(
    Math.min(
      // Inicio natural
      v - l,
      // Limite inferior cuando la página es mayor
      n - t - l * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), E = Math.min(
    Math.max(
      // Final natural
      v + l,
      // Limite superior cuando la página es menor
      t + l * 2 + 2
    ),
    // Menor que el endPages
    _.length > 0 ? _[0] - 2 : n - 1
  ), I = [
    ...u ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...w,
    // Comienza el ellipsis
    ...N > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...b(N, E),
    // Finaliza el ellipsis
    ...E < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ..._,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], x = (T) => {
    switch (T) {
      case "first":
        return 1;
      case "previous":
        return v - 1;
      case "next":
        return v + 1;
      case "last":
        return n;
      default:
        return null;
    }
  };
  return {
    items: I.map((T) => typeof T == "number" ? {
      onClick: (A) => {
        m(A, T);
      },
      type: "page",
      page: T,
      selected: T === v,
      disabled: a,
      "aria-current": T === v ? "page" : void 0
    } : {
      onClick: (A) => {
        m(A, x(T));
      },
      type: T,
      page: x(T),
      selected: !1,
      disabled: a || T.indexOf("ellipsis") === -1 && (T === "next" || T === "last" ? v >= n : v <= 1)
    }),
    ...d
  };
}, Sn = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, Ou = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), Eu = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${Ou[e]} página`, Mi = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: r,
  ...a
}) => {
  const { items: i } = xu({ ...a });
  return /* @__PURE__ */ p(
    "nav",
    {
      className: te({
        [Sn["c-pagination"]]: !r,
        [n]: n
      }),
      children: /* @__PURE__ */ p(
        "ul",
        {
          className: te({
            [Sn["c-pagination__ul"]]: !r
          }),
          "data-class": "c-pagination__ul",
          children: i.map((c, s) => /* @__PURE__ */ p("li", { "data-class": "c-pagination__ul-li", children: e({
            ...c,
            "aria-label": t(
              c.type,
              c.page,
              c.selected
            ),
            ...r && { defaultStyle: r }
          }) }, `pagination-item-${s}`))
        }
      )
    }
  );
};
Mi.defaultProps = {
  boundaryCount: 1,
  count: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(wo, { ...e }),
  getItemAriaLabel: Eu
};
Mi.propTypes = {
  addClass: o.string,
  boundaryCount: o.number,
  count: o.number,
  defaultPage: o.number,
  disabled: o.bool,
  hideNextButton: o.bool,
  hidePrevButton: o.bool,
  onChange: o.func,
  showFirstButton: o.bool,
  showLastButton: o.bool,
  siblingCount: o.number,
  renderItem: o.func,
  getItemAriaLabel: o.func,
  defaultStyle: o.bool
};
const wo = ({ page: e, type: t, addClass: n, disabled: r, element: a, icons: i, selected: c, defaultStyle: s, ...u }) => {
  const l = {
    previous: (i == null ? void 0 : i.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (i == null ? void 0 : i.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" }),
    last: (i == null ? void 0 : i.last) || /* @__PURE__ */ p("path", { id: "last_page", d: "m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z" }),
    first: (i == null ? void 0 : i.first) || /* @__PURE__ */ p("path", { id: "first_page", d: "M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z" })
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? (
    // Devolvemos '...' si es de tipo ellipsis.
    /* @__PURE__ */ p("div", { className: Sn["c-pagination-item__ellipsis"], children: "..." })
  ) : Pe(
    a,
    {
      disabled: r,
      className: te({
        [Sn["c-pagination-item"]]: !s,
        [Sn["c-pagination-item--selected"]]: !s && c,
        [n]: n
      }),
      ...a.props,
      ...u
    },
    [
      // Si es de tipo página colocar la página e.g 1,2,3.
      t === "page" && e,
      // Si existe el icono agregarlo e.g icon = 'last_page'
      l ? i ? /* @__PURE__ */ p(Ce, { path: l }, t) : /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: l }) }, t) : null
    ]
  );
};
wo.propTypes = {
  page: o.number,
  type: o.string,
  addClass: o.string,
  disabled: o.bool,
  selected: o.bool,
  element: o.oneOfType([o.element, o.node, o.string]),
  defaultStyle: o.bool,
  icons: o.shape({
    first: o.string,
    last: o.string,
    next: o.string,
    previous: o.string
  })
};
wo.defaultProps = {
  element: /* @__PURE__ */ p("button", {})
};
const Jt = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, gr = ut(), Tu = ({ children: e, defaultIndex: t, addClass: n, type: r, defaultStyle: a }) => {
  const [i, c] = ee(null), s = Q([]), u = (h) => {
    s.current.includes(h) || (s.current = [...s.current, h]);
  }, f = (h) => c(s.current[h]), l = (h) => /:.*?:/g.test(h) ? i === h : s.current[h - 1] === i, d = () => [...s.current].reduce((h, m, b) => [...h, b + 1], []), v = (h) => s.current.indexOf(h) + 1;
  return J(() => {
    s.current.length !== 0 && (t !== void 0 ? f(t - 1) : c(s.current[0]));
  }, [t, s]), /* @__PURE__ */ p(
    gr.Provider,
    {
      value: {
        validation: l,
        onToggle: f,
        listId: d(),
        currentSection: v(i),
        getIndexById: v,
        addNewIdToSection: u,
        type: r
      },
      children: /* @__PURE__ */ p(
        "div",
        {
          className: te("video-interpreter-ui-panel", {
            [Jt["c-panel"]]: !a,
            [n]: n
          }),
          "data-value": i,
          ...r === "carrousel" && {
            role: "group",
            "aria-roledescription": "Slider"
          },
          children: e
        }
      )
    }
  );
};
Tu.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element,
    o.arrayOf(o.node),
    o.node,
    o.string
  ]),
  defaultIndex: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  type: o.string
};
const $i = _t(
  ({ children: e, addClass: t, defaultStyle: n, __TYPE: r, ...a }, i) => {
    const { validation: c, addNewIdToSection: s, getIndexById: u, type: f } = Te(gr), l = At(), d = c(l);
    return J(() => {
      l && s(l);
    }, [l]), /* @__PURE__ */ k(
      "section",
      {
        ref: i,
        role: f === "carrousel" ? "group" : "tabpanel",
        hidden: !d,
        "data-type": r,
        "aria-hidden": !d,
        "data-value": l,
        "aria-labelledby": `section-${l}`,
        className: te({
          [Jt["c-section"]]: !n,
          "video-interpreter-ui-section": "video-interpreter-ui-section",
          [t]: t
        }),
        ...f === "carrousel" && {
          "aria-roledescription": "Sección"
        },
        ...a,
        children: [
          /* @__PURE__ */ k("span", { id: `section-${l}`, className: "u-sr-only", children: [
            "Sección ",
            u(l)
          ] }),
          e
        ]
      }
    );
  }
);
$i.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("Section")
};
$i.defaultProps = {
  __TYPE: "Section"
};
const Su = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), da = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Cu = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${Su[e]} sección`, ki = ({
  renderItem: e,
  showPrevButton: t,
  showNextButton: n,
  icons: r,
  label: a,
  orientation: i,
  onValue: c,
  addClass: s,
  getItemAriaLabel: u,
  defaultStyle: f
}) => {
  const { validation: l, onToggle: d, listId: v, currentSection: h } = Te(gr), m = Q([]), b = Object.freeze({
    previous: h - 1,
    next: h + 1
  }), w = {
    previous: (r == null ? void 0 : r.previous) || /* @__PURE__ */ p(
      "path",
      {
        id: "navigate_before",
        d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
      }
    ),
    next: (r == null ? void 0 : r.next) || /* @__PURE__ */ p(
      "path",
      {
        id: "navigate_next",
        d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
      }
    )
  }, [_, N] = ee([]);
  J(() => {
    v.length !== 0 && N([
      // Botón para navegar a la sección anterior.
      ...t ? ["previous"] : [],
      // Lista de todas la secciones.
      ...v || [],
      // Botón para navegar a la siguiente sección.
      ...n ? ["next"] : []
    ]);
  }, [v]);
  const E = (T) => !m.current.includes(T) && T ? m.current = [...m.current, T] : m.current, I = (T) => {
    const A = m.current[0], W = m.current[m.current.length - 1];
    if ((T.keyCode || T.which) === da.LEFT)
      if (T.target === A)
        W.focus();
      else {
        const H = m.current.indexOf(T.target) - 1;
        m.current[H].focus();
      }
    else if ((T.keyCode || T.which) === da.RIGHT)
      if (T.target === W)
        A.focus();
      else {
        const H = m.current.indexOf(T.target) + 1;
        m.current[H].focus();
      }
  }, x = (T) => {
    d(v.findIndex((A) => A === T)), c !== void 0 && c(T, v.length);
  }, F = _.map((T) => {
    let A = [...v];
    return A = A.pop(), typeof T == "number" ? {
      onClick: (W) => {
        x(T);
      },
      type: "section",
      section: T,
      selected: l(T),
      ref: E,
      onKeyDown: I
    } : {
      onClick: () => {
        x(b[T]);
      },
      type: T,
      section: b[T],
      selected: !1,
      disabled: T === "next" ? h >= A : h <= v[0]
    };
  });
  return J(() => {
    c !== void 0 && c(h, v.length);
  }, []), /* @__PURE__ */ k(bt, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: te({
          [Jt["c-navigation"]]: !f,
          [s]: s
        }),
        children: e ? e(F) : F.map(({ section: T, type: A, selected: W, ...H }, B) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: te({
              [Jt["c-navigation__item"]]: !f
            }),
            children: A === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${T}`,
                role: "tab",
                tabIndex: `${W ? 0 : -1}`,
                "aria-selected": W,
                "data-class": "c-navigation__section",
                className: te({
                  [Jt["c-navigation__section"]]: !f
                }),
                "aria-label": u(A, T, W),
                ...H
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: te({
                  [Jt["c-navigation__button"]]: !f
                }),
                "aria-label": u(A, T, W),
                ...H,
                children: w[A] ? r ? /* @__PURE__ */ p(Ce, { path: w[A] }, A) : /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: w[A]
                  }
                ) }, A) : null
              }
            )
          },
          `navigation-section-item-${B}`
        ))
      }
    )
  ] });
};
ki.propTypes = {
  renderItem: o.func,
  showNextButton: o.bool,
  showPrevButton: o.bool,
  icons: o.shape({
    next: o.string,
    previous: o.string
  }),
  label: o.string,
  orientation: o.string,
  onValue: o.func,
  addClass: o.string,
  getItemAriaLabel: o.func,
  defaultStyle: o.bool
};
ki.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: Cu
};
const Pu = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = Te(gr), a = (i) => {
    r(t - 1), n && n(i);
  };
  return Re.map(e, (i) => Pe(i, { ...i.props, onClick: a }));
};
Pu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const Ru = {
  "c-paper": "_c-paper_1sbf6_1"
}, Du = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = Q(null);
  return co(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${Ru["c-paper"]} ${n ?? ""}`,
      ...r,
      children: e
    }
  );
};
Du.propTypes = {
  children: o.oneOfType([
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  color: o.string
};
const Nu = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Iu = (e) => {
  document.body.append(e);
}, Au = (e) => {
  const t = Q(null);
  J(() => {
    const r = document.querySelector(`#${e}`), a = r || Nu(e);
    return r || Iu(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, dn = ({ children: e, id: t }) => {
  const n = Au(t);
  return La(e, n);
};
dn.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const Mu = "_row_1adiy_1", $u = {
  row: Mu
}, ku = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${$u.row} ${e ?? ""}`, ...t }));
ku.propTypes = {
  addClass: o.string
};
const yn = {
  "c-select-label": "_c-select-label_16c2e_1",
  "c-select-wrapper": "_c-select-wrapper_16c2e_11",
  "c-select": "_c-select_16c2e_1",
  "c-select__icon": "_c-select__icon_16c2e_38"
}, Li = _t(
  ({
    children: e,
    id: t,
    placeholder: n,
    label: r,
    icon: a,
    addClass: i,
    isLabelVisible: c,
    isDisabled: s,
    isRequired: u,
    onChoise: f,
    defaultValue: l,
    defaultStyle: d
  }, v) => {
    const h = t || At(), m = ({ target: b }) => {
      f && f({ id: h, value: b.value });
    };
    return /* @__PURE__ */ k(
      "label",
      {
        htmlFor: h,
        className: te({
          [yn["c-select-label"]]: !d,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ k("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            r,
            " "
          ] }),
          /* @__PURE__ */ k("div", { className: yn["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
            /* @__PURE__ */ k(
              "select",
              {
                id: h,
                ref: v,
                name: h,
                defaultValue: l,
                className: te({
                  [yn["c-select"]]: !d
                }),
                "data-class": "c-select",
                onChange: m,
                disabled: s,
                required: u,
                children: [
                  /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
                  He(e, ["option", "optgroup"])
                ]
              }
            ),
            a ? /* @__PURE__ */ p(
              Ce,
              {
                path: a,
                "data-class": "c-select__icon",
                addClass: te({ [yn["c-select__icon"]]: !d })
              }
            ) : /* @__PURE__ */ p(
              Ce,
              {
                "data-class": "c-select__icon",
                addClass: te({ [yn["c-select__icon"]]: !d }),
                children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" })
                  }
                )
              }
            )
          ] })
        ]
      }
    );
  }
);
Li.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Li.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.node
  ]),
  id: o.string,
  placeholder: o.string,
  label: o.string.isRequired,
  icon: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  isDisabled: o.bool,
  isRequired: o.bool,
  onChoise: o.func,
  defaultValue: o.string,
  defaultStyle: o.bool,
  __TYPE: me("Select")
};
const Lu = ({ children: e, onAllSelect: t }) => {
  const [n, r] = ee([]), a = (c) => r([
    ...n.filter((s) => s.id !== c.id),
    { ...c }
  ]);
  return J(() => {
    t && t(n);
  }, [n, t]), Re.map(e, (c) => {
    var s;
    return ct(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? Pe(c, { ...c.props, onChoise: a }) : c : null;
  });
};
Lu.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onAllSelect: o.func
};
const qr = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, fa = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), ji = _t(
  ({
    id: e,
    name: t,
    size: n,
    value: r,
    label: a,
    addClass: i,
    isDisabled: c,
    defaultChecked: s,
    isLabelVisible: u,
    onChange: f
  }, l) => {
    const [d, v] = ee(!1), h = e || At(), m = ({ target: w }) => {
      if (v(w.checked), !!f) {
        if (w.checked) {
          f({ id: w.id, value: w.value });
          return;
        }
        f({ id: w.id, value: "" });
      }
    }, b = (w) => {
      ((w.keyCode || w.which) === fa.SPACE || (w.keyCode || w.which) === fa.ENTER) && v((_) => (f && f(_ ? { id: h, value: "" } : { id: h, value: `${r}` }), !_));
    };
    return J(() => (s && v(!!s), () => {
      v(!1);
    }), [s]), /* @__PURE__ */ k(
      "label",
      {
        htmlFor: h,
        className: `${qr["c-label"]} ${qr[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ k("span", { className: `${!u && "u-sr-only"}`, children: [
            " ",
            a,
            " "
          ] }),
          /* @__PURE__ */ p(
            "input",
            {
              id: h,
              ref: l,
              role: "switch",
              type: "checkbox",
              name: t,
              value: r,
              checked: d,
              "aria-disabled": c,
              className: `${qr["c-switch"]} ${i ?? ""}`,
              onChange: m,
              onKeyDown: b,
              ...c && { disabled: !0 }
            }
          )
        ]
      }
    );
  }
);
ji.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
ji.propTypes = {
  id: o.string,
  name: o.string,
  size: o.string.isRequired,
  value: o.oneOfType([
    o.string,
    o.number,
    o.bool
  ]),
  label: o.string,
  addClass: o.string,
  isDisabled: o.bool,
  defaultChecked: o.bool,
  isLabelVisible: o.bool,
  onChange: o.func
};
const xo = ut(), ju = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = ee(0), c = (u) => i(u), s = (u) => a === u;
  return J(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(xo.Provider, { value: { validation: s, onToggle: c }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: He(e, ["TabList", "TabPanels"]) }) });
};
ju.propTypes = {
  children: o.arrayOf(o.element),
  defaultIndex: o.number,
  addClass: o.string
};
const An = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, Fi = ({
  children: e,
  id: t,
  selected: n,
  addClass: r,
  icon: a,
  addNewRef: i,
  onNavigation: c,
  onClick: s,
  defaultStyle: u,
  __TYPE: f,
  ...l
}) => {
  const d = Q(), { validation: v, onToggle: h } = Te(xo), m = v(t), b = (w) => {
    s && s(w), h(t);
  };
  return J(() => (d.current && i(d.current), () => {
    d.current = null;
  }), [d]), /* @__PURE__ */ k(
    "button",
    {
      id: `tab-${t}`,
      role: "tab",
      ref: d,
      "data-type": f,
      tabIndex: `${m ? 0 : -1}`,
      "aria-controls": `panel-${t}`,
      "aria-selected": m,
      onKeyDown: c,
      onClick: b,
      className: te({
        [`${An["c-tab__button"]} u-flex`]: !u,
        [r]: r,
        [m]: n
      }),
      ...l,
      children: [
        e,
        a && a(m)
      ]
    }
  );
};
Fi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  selected: o.string,
  addClass: o.string,
  icon: o.func,
  addNewRef: o.func,
  onClick: o.func,
  onNavigation: o.func,
  defaultStyle: o.bool,
  __TYPE: me("Tab")
};
Fi.defaultProps = {
  __TYPE: "Tab"
};
const pa = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Bi = ({
  children: e,
  addClass: t,
  label: n,
  orientation: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const s = Q([]), u = (d) => s.current = [...s.current, d], f = (d) => {
    const v = s.current[0], h = s.current[s.current.length - 1];
    if ((d.keyCode || d.which) === pa.LEFT)
      if (d.target === v)
        h.focus();
      else {
        const m = s.current.indexOf(d.target) - 1;
        s.current[m].focus();
      }
    else if ((d.keyCode || d.which) === pa.RIGHT)
      if (d.target === h)
        v.focus();
      else {
        const m = s.current.indexOf(d.target) + 1;
        s.current[m].focus();
      }
  }, l = Re.map(e, (d, v) => ct(d) ? Pe(d, {
    ...d.props,
    id: v,
    addNewRef: u,
    onNavigation: f
  }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      role: "tablist",
      "data-type": i,
      "aria-label": n,
      "aria-orientation": r,
      className: te({
        [An["c-tab__list"]]: !a,
        [t]: t
      }),
      ...c,
      children: He(l, ["Tab"])
    }
  );
};
Bi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  label: o.string,
  orientation: o.string,
  defaultStyle: o.bool,
  __TYPE: me("TabList")
};
Bi.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const qi = ({ children: e, id: t, addClass: n, defaultStyle: r, __TYPE: a, ...i }) => {
  const { validation: c } = Te(xo), s = c(t);
  return /* @__PURE__ */ p(
    "div",
    {
      id: `panel-${t}`,
      role: "tabpanel",
      tabIndex: 0,
      "data-type": a,
      "aria-hidden": !s,
      hidden: !s,
      "aria-labelledby": `tab-${t}`,
      className: te({
        [An["c-tab__panel--active"]]: !r && s,
        [An["c-tab__panel"]]: !r && !s,
        ["video-interpreter-ui-tabpanel"]: "video-interpreter-ui-tabpanel",
        [n]: n
      }),
      ...i,
      children: e
    }
  );
};
qi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("TabPanel")
};
qi.defaultProps = {
  __TYPE: "TabPanel"
};
const Vi = ({
  children: e,
  addClass: t,
  defaultStyle: n,
  __TYPE: r,
  ...a
}) => {
  const i = Re.map(e, (c, s) => ct(c) ? Pe(c, { ...c.props, id: s }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: te({
        [An["c-tab__panels"]]: !n,
        [t]: t
      }),
      "data-type": r,
      ...a,
      children: He(i, ["TabPanel"])
    }
  );
};
Vi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("TabPanels")
};
Vi.defaultProps = {
  __TYPE: "TabPanels"
};
const Vr = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, Yi = _t(
  ({
    id: e,
    value: t,
    resize: n,
    placeholder: r,
    label: a,
    addClass: i,
    isLabelVisible: c,
    isDisabled: s,
    isRequired: u,
    defaultStyle: f,
    onValue: l,
    ...d
  }, v) => {
    const h = e || At(), m = ({ target: b }) => {
      l && l({ id: h, value: b.value });
    };
    return /* @__PURE__ */ k(
      "label",
      {
        htmlFor: h,
        className: te({
          [Vr["c-label"]]: !f,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ k("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            a,
            " "
          ] }),
          /* @__PURE__ */ p(
            "textarea",
            {
              id: h,
              ref: v,
              defaultValue: t,
              disabled: s,
              required: u,
              placeholder: r,
              autoComplete: "off",
              onChange: m,
              "data-class": "c-textarea",
              className: te({
                [`${Vr["c-textarea"]} ${Vr[`c-textarea--${n}`]}`]: !f
              }),
              ...d
            }
          )
        ]
      }
    );
  }
);
Yi.defaultProps = {
  resize: "vertical",
  placeholder: "This is an example of a placeholder"
};
Yi.propTypes = {
  id: o.string,
  value: o.string,
  resize: o.oneOf(["none", "horizontal", "vertical"]),
  placeholder: o.string,
  label: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  isDisabled: o.bool,
  isRequired: o.bool,
  defaultStyle: o.bool,
  onValue: o.func
};
const Fu = $a(({ children: e, theme: t = {} }) => {
  const n = (r) => {
    const a = document.createElement("style");
    document.head.append(a);
    const i = a.sheet;
    let c = "";
    for (const s in r)
      c += `--clr-${s}: ${r[s]};
`;
    i.insertRule(`:root{${c}}`);
  };
  return J(() => {
    if (Object.entries(t).length !== 0)
      return n(t), () => {
        t = {};
      };
  }, [t]), e;
});
Fu.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var va = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, ha = typeof window < "u" && window.document && window.document.createElement ? zt.useLayoutEffect : zt.useEffect, We = "top", st = "bottom", lt = "right", Ue = "left", mr = "auto", Bn = [We, st, lt, Ue], on = "start", Mn = "end", Bu = "clippingParents", zi = "viewport", _n = "popper", qu = "reference", ga = /* @__PURE__ */ Bn.reduce(function(e, t) {
  return e.concat([t + "-" + on, t + "-" + Mn]);
}, []), Wi = /* @__PURE__ */ [].concat(Bn, [mr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + on, t + "-" + Mn]);
}, []), Vu = "beforeRead", Yu = "read", zu = "afterRead", Wu = "beforeMain", Uu = "main", Hu = "afterMain", Gu = "beforeWrite", Zu = "write", Xu = "afterWrite", oo = [Vu, Yu, zu, Wu, Uu, Hu, Gu, Zu, Xu];
function yt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function tt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ht(e) {
  var t = tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Je(e) {
  var t = tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Oo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ku(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !Je(i) || !yt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Qu(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var a = t.elements[r], i = t.attributes[r] || {}, c = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = c.reduce(function(u, f) {
        return u[f] = "", u;
      }, {});
      !Je(a) || !yt(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
const Ju = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ku,
  effect: Qu,
  requires: ["computeStyles"]
};
function ht(e) {
  return e.split("-")[0];
}
var Ut = Math.max, sr = Math.min, an = Math.round;
function ao() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ui() {
  return !/^((?!chrome|android).)*safari/i.test(ao());
}
function sn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && Je(e) && (a = e.offsetWidth > 0 && an(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && an(r.height) / e.offsetHeight || 1);
  var c = Ht(e) ? tt(e) : window, s = c.visualViewport, u = !Ui() && n, f = (r.left + (u && s ? s.offsetLeft : 0)) / a, l = (r.top + (u && s ? s.offsetTop : 0)) / i, d = r.width / a, v = r.height / i;
  return {
    width: d,
    height: v,
    top: l,
    right: f + d,
    bottom: l + v,
    left: f,
    x: f,
    y: l
  };
}
function Eo(e) {
  var t = sn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Hi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Oo(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function mt(e) {
  return tt(e).getComputedStyle(e);
}
function ed(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
function Mt(e) {
  return ((Ht(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function br(e) {
  return yt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Oo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mt(e)
  );
}
function ma(e) {
  return !Je(e) || // https://github.com/popperjs/popper-core/issues/837
  mt(e).position === "fixed" ? null : e.offsetParent;
}
function td(e) {
  var t = /firefox/i.test(ao()), n = /Trident/i.test(ao());
  if (n && Je(e)) {
    var r = mt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = br(e);
  for (Oo(a) && (a = a.host); Je(a) && ["html", "body"].indexOf(yt(a)) < 0; ) {
    var i = mt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function qn(e) {
  for (var t = tt(e), n = ma(e); n && ed(n) && mt(n).position === "static"; )
    n = ma(n);
  return n && (yt(n) === "html" || yt(n) === "body" && mt(n).position === "static") ? t : n || td(e) || t;
}
function To(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cn(e, t, n) {
  return Ut(e, sr(t, n));
}
function nd(e, t, n) {
  var r = Cn(e, t, n);
  return r > n ? n : r;
}
function Gi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Zi(e) {
  return Object.assign({}, Gi(), e);
}
function Xi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var rd = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Zi(typeof t != "number" ? t : Xi(t, Bn));
};
function od(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = ht(n.placement), u = To(s), f = [Ue, lt].indexOf(s) >= 0, l = f ? "height" : "width";
  if (!(!i || !c)) {
    var d = rd(a.padding, n), v = Eo(i), h = u === "y" ? We : Ue, m = u === "y" ? st : lt, b = n.rects.reference[l] + n.rects.reference[u] - c[u] - n.rects.popper[l], w = c[u] - n.rects.reference[u], _ = qn(i), N = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, E = b / 2 - w / 2, I = d[h], x = N - v[l] - d[m], F = N / 2 - v[l] / 2 + E, T = Cn(I, F, x), A = u;
    n.modifiersData[r] = (t = {}, t[A] = T, t.centerOffset = T - F, t);
  }
}
function ad(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (Je(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Hi(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const id = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: od,
  effect: ad,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ln(e) {
  return e.split("-")[1];
}
var sd = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ld(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: an(n * a) / a || 0,
    y: an(r * a) / a || 0
  };
}
function ba(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, u = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, d = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, m = c.y, b = m === void 0 ? 0 : m, w = typeof l == "function" ? l({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = w.x, b = w.y;
  var _ = c.hasOwnProperty("x"), N = c.hasOwnProperty("y"), E = Ue, I = We, x = window;
  if (f) {
    var F = qn(n), T = "clientHeight", A = "clientWidth";
    if (F === tt(n) && (F = Mt(n), mt(F).position !== "static" && s === "absolute" && (T = "scrollHeight", A = "scrollWidth")), F = F, a === We || (a === Ue || a === lt) && i === Mn) {
      I = st;
      var W = d && F === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        F[T]
      );
      b -= W - r.height, b *= u ? 1 : -1;
    }
    if (a === Ue || (a === We || a === st) && i === Mn) {
      E = lt;
      var H = d && F === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        F[A]
      );
      h -= H - r.width, h *= u ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: s
  }, f && sd), z = l === !0 ? ld({
    x: h,
    y: b
  }, tt(n)) : {
    x: h,
    y: b
  };
  if (h = z.x, b = z.y, u) {
    var G;
    return Object.assign({}, B, (G = {}, G[I] = N ? "0" : "", G[E] = _ ? "0" : "", G.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", G));
  }
  return Object.assign({}, B, (t = {}, t[I] = N ? b + "px" : "", t[E] = _ ? h + "px" : "", t.transform = "", t));
}
function cd(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, c = i === void 0 ? !0 : i, s = n.roundOffsets, u = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = mt(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return f.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var l = {
    placement: ht(t.placement),
    variation: ln(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ba(Object.assign({}, l, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ba(Object.assign({}, l, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ud = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: cd,
  data: {}
};
var Zn = {
  passive: !0
};
function dd(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, c = r.resize, s = c === void 0 ? !0 : c, u = tt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, Zn);
  }), s && u.addEventListener("resize", n.update, Zn), function() {
    i && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Zn);
    }), s && u.removeEventListener("resize", n.update, Zn);
  };
}
const fd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: dd,
  data: {}
};
var pd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Jn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return pd[t];
  });
}
var vd = {
  start: "end",
  end: "start"
};
function ya(e) {
  return e.replace(/start|end/g, function(t) {
    return vd[t];
  });
}
function So(e) {
  var t = tt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Co(e) {
  return sn(Mt(e)).left + So(e).scrollLeft;
}
function hd(e, t) {
  var n = tt(e), r = Mt(e), a = n.visualViewport, i = r.clientWidth, c = r.clientHeight, s = 0, u = 0;
  if (a) {
    i = a.width, c = a.height;
    var f = Ui();
    (f || !f && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s + Co(e),
    y: u
  };
}
function gd(e) {
  var t, n = Mt(e), r = So(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ut(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Ut(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Co(e), u = -r.scrollTop;
  return mt(a || n).direction === "rtl" && (s += Ut(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: u
  };
}
function Po(e) {
  var t = mt(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Ki(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : Je(e) && Po(e) ? e : Ki(br(e));
}
function Pn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ki(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = tt(r), c = a ? [i].concat(i.visualViewport || [], Po(r) ? r : []) : r, s = t.concat(c);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Pn(br(c)))
  );
}
function io(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function md(e, t) {
  var n = sn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _a(e, t, n) {
  return t === zi ? io(hd(e, n)) : Ht(t) ? md(t, n) : io(gd(Mt(e)));
}
function bd(e) {
  var t = Pn(br(e)), n = ["absolute", "fixed"].indexOf(mt(e).position) >= 0, r = n && Je(e) ? qn(e) : e;
  return Ht(r) ? t.filter(function(a) {
    return Ht(a) && Hi(a, r) && yt(a) !== "body";
  }) : [];
}
function yd(e, t, n, r) {
  var a = t === "clippingParents" ? bd(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(u, f) {
    var l = _a(e, f, r);
    return u.top = Ut(l.top, u.top), u.right = sr(l.right, u.right), u.bottom = sr(l.bottom, u.bottom), u.left = Ut(l.left, u.left), u;
  }, _a(e, c, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Qi(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? ht(r) : null, i = r ? ln(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
    case We:
      u = {
        x: c,
        y: t.y - n.height
      };
      break;
    case st:
      u = {
        x: c,
        y: t.y + t.height
      };
      break;
    case lt:
      u = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Ue:
      u = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var f = a ? To(a) : null;
  if (f != null) {
    var l = f === "y" ? "height" : "width";
    switch (i) {
      case on:
        u[f] = u[f] - (t[l] / 2 - n[l] / 2);
        break;
      case Mn:
        u[f] = u[f] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return u;
}
function $n(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, u = s === void 0 ? Bu : s, f = n.rootBoundary, l = f === void 0 ? zi : f, d = n.elementContext, v = d === void 0 ? _n : d, h = n.altBoundary, m = h === void 0 ? !1 : h, b = n.padding, w = b === void 0 ? 0 : b, _ = Zi(typeof w != "number" ? w : Xi(w, Bn)), N = v === _n ? qu : _n, E = e.rects.popper, I = e.elements[m ? N : v], x = yd(Ht(I) ? I : I.contextElement || Mt(e.elements.popper), u, l, c), F = sn(e.elements.reference), T = Qi({
    reference: F,
    element: E,
    strategy: "absolute",
    placement: a
  }), A = io(Object.assign({}, E, T)), W = v === _n ? A : F, H = {
    top: x.top - W.top + _.top,
    bottom: W.bottom - x.bottom + _.bottom,
    left: x.left - W.left + _.left,
    right: W.right - x.right + _.right
  }, B = e.modifiersData.offset;
  if (v === _n && B) {
    var z = B[a];
    Object.keys(H).forEach(function(G) {
      var K = [lt, st].indexOf(G) >= 0 ? 1 : -1, oe = [We, st].indexOf(G) >= 0 ? "y" : "x";
      H[G] += z[oe] * K;
    });
  }
  return H;
}
function _d(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, u = n.allowedAutoPlacements, f = u === void 0 ? Wi : u, l = ln(r), d = l ? s ? ga : ga.filter(function(m) {
    return ln(m) === l;
  }) : Bn, v = d.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  v.length === 0 && (v = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(m, b) {
    return m[b] = $n(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[ht(b)], m;
  }, {});
  return Object.keys(h).sort(function(m, b) {
    return h[m] - h[b];
  });
}
function wd(e) {
  if (ht(e) === mr)
    return [];
  var t = Jn(e);
  return [ya(e), t, ya(t)];
}
function xd(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, u = n.fallbackPlacements, f = n.padding, l = n.boundary, d = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, b = n.allowedAutoPlacements, w = t.options.placement, _ = ht(w), N = _ === w, E = u || (N || !m ? [Jn(w)] : wd(w)), I = [w].concat(E).reduce(function(C, R) {
      return C.concat(ht(R) === mr ? _d(t, {
        placement: R,
        boundary: l,
        rootBoundary: d,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : R);
    }, []), x = t.rects.reference, F = t.rects.popper, T = /* @__PURE__ */ new Map(), A = !0, W = I[0], H = 0; H < I.length; H++) {
      var B = I[H], z = ht(B), G = ln(B) === on, K = [We, st].indexOf(z) >= 0, oe = K ? "width" : "height", Z = $n(t, {
        placement: B,
        boundary: l,
        rootBoundary: d,
        altBoundary: v,
        padding: f
      }), X = K ? G ? lt : Ue : G ? st : We;
      x[oe] > F[oe] && (X = Jn(X));
      var ce = Jn(X), ie = [];
      if (i && ie.push(Z[z] <= 0), s && ie.push(Z[X] <= 0, Z[ce] <= 0), ie.every(function(C) {
        return C;
      })) {
        W = B, A = !1;
        break;
      }
      T.set(B, ie);
    }
    if (A)
      for (var S = m ? 3 : 1, L = function(R) {
        var P = I.find(function(M) {
          var q = T.get(M);
          if (q)
            return q.slice(0, R).every(function(U) {
              return U;
            });
        });
        if (P)
          return W = P, "break";
      }, y = S; y > 0; y--) {
        var O = L(y);
        if (O === "break")
          break;
      }
    t.placement !== W && (t.modifiersData[r]._skip = !0, t.placement = W, t.reset = !0);
  }
}
const Od = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: xd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function wa(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function xa(e) {
  return [We, lt, st, Ue].some(function(t) {
    return e[t] >= 0;
  });
}
function Ed(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = $n(t, {
    elementContext: "reference"
  }), s = $n(t, {
    altBoundary: !0
  }), u = wa(c, r), f = wa(s, a, i), l = xa(u), d = xa(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: f,
    isReferenceHidden: l,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": l,
    "data-popper-escaped": d
  });
}
const Td = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ed
};
function Sd(e, t, n) {
  var r = ht(e), a = [Ue, We].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, c = i[0], s = i[1];
  return c = c || 0, s = (s || 0) * a, [Ue, lt].indexOf(r) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function Cd(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = Wi.reduce(function(l, d) {
    return l[d] = Sd(d, t.rects, i), l;
  }, {}), s = c[t.placement], u = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
}
const Pd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Cd
};
function Rd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Qi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Dd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Rd,
  data: {}
};
function Nd(e) {
  return e === "x" ? "y" : "x";
}
function Id(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, u = n.boundary, f = n.rootBoundary, l = n.altBoundary, d = n.padding, v = n.tether, h = v === void 0 ? !0 : v, m = n.tetherOffset, b = m === void 0 ? 0 : m, w = $n(t, {
    boundary: u,
    rootBoundary: f,
    padding: d,
    altBoundary: l
  }), _ = ht(t.placement), N = ln(t.placement), E = !N, I = To(_), x = Nd(I), F = t.modifiersData.popperOffsets, T = t.rects.reference, A = t.rects.popper, W = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, H = typeof W == "number" ? {
    mainAxis: W,
    altAxis: W
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, W), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (F) {
    if (i) {
      var G, K = I === "y" ? We : Ue, oe = I === "y" ? st : lt, Z = I === "y" ? "height" : "width", X = F[I], ce = X + w[K], ie = X - w[oe], S = h ? -A[Z] / 2 : 0, L = N === on ? T[Z] : A[Z], y = N === on ? -A[Z] : -T[Z], O = t.elements.arrow, C = h && O ? Eo(O) : {
        width: 0,
        height: 0
      }, R = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gi(), P = R[K], M = R[oe], q = Cn(0, T[Z], C[Z]), U = E ? T[Z] / 2 - S - q - P - H.mainAxis : L - q - P - H.mainAxis, V = E ? -T[Z] / 2 + S + q + M + H.mainAxis : y + q + M + H.mainAxis, j = t.elements.arrow && qn(t.elements.arrow), D = j ? I === "y" ? j.clientTop || 0 : j.clientLeft || 0 : 0, ne = (G = B == null ? void 0 : B[I]) != null ? G : 0, de = X + U - ne - D, ye = X + V - ne, xe = Cn(h ? sr(ce, de) : ce, X, h ? Ut(ie, ye) : ie);
      F[I] = xe, z[I] = xe - X;
    }
    if (s) {
      var je, dt = I === "x" ? We : Ue, Ze = I === "x" ? st : lt, Oe = F[x], qe = x === "y" ? "height" : "width", Xe = Oe + w[dt], $t = Oe - w[Ze], St = [We, Ue].indexOf(_) !== -1, kt = (je = B == null ? void 0 : B[x]) != null ? je : 0, Lt = St ? Xe : Oe - T[qe] - A[qe] - kt + H.altAxis, Fe = St ? Oe + T[qe] + A[qe] - kt - H.altAxis : $t, ft = h && St ? nd(Lt, Oe, Fe) : Cn(h ? Lt : Xe, Oe, h ? Fe : $t);
      F[x] = ft, z[x] = ft - Oe;
    }
    t.modifiersData[r] = z;
  }
}
const Ad = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Id,
  requiresIfExists: ["offset"]
};
function Md(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function $d(e) {
  return e === tt(e) || !Je(e) ? So(e) : Md(e);
}
function kd(e) {
  var t = e.getBoundingClientRect(), n = an(t.width) / e.offsetWidth || 1, r = an(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Ld(e, t, n) {
  n === void 0 && (n = !1);
  var r = Je(t), a = Je(t) && kd(t), i = Mt(t), c = sn(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((yt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Po(i)) && (s = $d(t)), Je(t) ? (u = sn(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : i && (u.x = Co(i))), {
    x: c.left + s.scrollLeft - u.x,
    y: c.top + s.scrollTop - u.y,
    width: c.width,
    height: c.height
  };
}
function jd(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var c = [].concat(i.requires || [], i.requiresIfExists || []);
    c.forEach(function(s) {
      if (!n.has(s)) {
        var u = t.get(s);
        u && a(u);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function Fd(e) {
  var t = jd(e);
  return oo.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Bd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Pt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(a, i) {
    return a.replace(/%s/, i);
  }, e);
}
var Yt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', qd = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Oa = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Vd(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Oa).filter(function(n, r, a) {
      return a.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Pt(Yt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Pt(Yt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          oo.indexOf(t.phase) < 0 && console.error(Pt(Yt, t.name, '"phase"', "either " + oo.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Pt(Yt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Pt(Yt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Pt(Yt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Pt(Yt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Oa.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(r) {
        e.find(function(a) {
          return a.name === r;
        }) == null && console.error(Pt(qd, String(t.name), r, r));
      });
    });
  });
}
function Yd(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var a = t(r);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function zd(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ea = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Wd = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ta = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Sa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Ud(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Ta : a;
  return function(s, u, f) {
    f === void 0 && (f = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ta, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: u
      },
      attributes: {},
      styles: {}
    }, d = [], v = !1, h = {
      state: l,
      setOptions: function(_) {
        var N = typeof _ == "function" ? _(l.options) : _;
        b(), l.options = Object.assign({}, i, l.options, N), l.scrollParents = {
          reference: Ht(s) ? Pn(s) : s.contextElement ? Pn(s.contextElement) : [],
          popper: Pn(u)
        };
        var E = Fd(zd([].concat(r, l.options.modifiers)));
        if (l.orderedModifiers = E.filter(function(B) {
          return B.enabled;
        }), process.env.NODE_ENV !== "production") {
          var I = Yd([].concat(E, l.options.modifiers), function(B) {
            var z = B.name;
            return z;
          });
          if (Vd(I), ht(l.options.placement) === mr) {
            var x = l.orderedModifiers.find(function(B) {
              var z = B.name;
              return z === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var F = mt(u), T = F.marginTop, A = F.marginRight, W = F.marginBottom, H = F.marginLeft;
          [T, A, W, H].some(function(B) {
            return parseFloat(B);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return m(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var _ = l.elements, N = _.reference, E = _.popper;
          if (!Sa(N, E)) {
            process.env.NODE_ENV !== "production" && console.error(Ea);
            return;
          }
          l.rects = {
            reference: Ld(N, qn(E), l.options.strategy === "fixed"),
            popper: Eo(E)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(B) {
            return l.modifiersData[B.name] = Object.assign({}, B.data);
          });
          for (var I = 0, x = 0; x < l.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && (I += 1, I > 100)) {
              console.error(Wd);
              break;
            }
            if (l.reset === !0) {
              l.reset = !1, x = -1;
              continue;
            }
            var F = l.orderedModifiers[x], T = F.fn, A = F.options, W = A === void 0 ? {} : A, H = F.name;
            typeof T == "function" && (l = T({
              state: l,
              options: W,
              name: H,
              instance: h
            }) || l);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Bd(function() {
        return new Promise(function(w) {
          h.forceUpdate(), w(l);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Sa(s, u))
      return process.env.NODE_ENV !== "production" && console.error(Ea), h;
    h.setOptions(f).then(function(w) {
      !v && f.onFirstUpdate && f.onFirstUpdate(w);
    });
    function m() {
      l.orderedModifiers.forEach(function(w) {
        var _ = w.name, N = w.options, E = N === void 0 ? {} : N, I = w.effect;
        if (typeof I == "function") {
          var x = I({
            state: l,
            name: _,
            instance: h,
            options: E
          }), F = function() {
          };
          d.push(x || F);
        }
      });
    }
    function b() {
      d.forEach(function(w) {
        return w();
      }), d = [];
    }
    return h;
  };
}
var Hd = [fd, Dd, ud, Ju, Pd, Od, Ad, id, Td], Gd = /* @__PURE__ */ Ud({
  defaultModifiers: Hd
}), Zd = typeof Element < "u", Xd = typeof Map == "function", Kd = typeof Set == "function", Qd = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function er(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, a;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!er(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (Xd && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!er(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Kd && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Qd && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, a[r]))
        return !1;
    if (Zd && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !er(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Jd = function(t, n) {
  try {
    return er(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, ef = [], yr = function(t, n, r) {
  r === void 0 && (r = {});
  var a = zt.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || ef
  }, c = zt.useState({
    styles: {
      popper: {
        position: i.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = c[0], u = c[1], f = zt.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var m = h.state, b = Object.keys(m.elements);
        xs.flushSync(function() {
          u({
            styles: va(b.map(function(w) {
              return [w, m.styles[w] || {}];
            })),
            attributes: va(b.map(function(w) {
              return [w, m.attributes[w]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), l = zt.useMemo(function() {
    var v = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Jd(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), d = zt.useRef();
  return ha(function() {
    d.current && d.current.setOptions(l);
  }, [l]), ha(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Gd, h = v(t, n, l);
      return d.current = h, function() {
        h.destroy(), d.current = null;
      };
    }
  }, [t, n, r.createPopper]), {
    state: d.current ? d.current.state : null,
    styles: s.styles,
    attributes: s.attributes,
    update: d.current ? d.current.update : null,
    forceUpdate: d.current ? d.current.forceUpdate : null
  };
};
const Yr = {
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, tf = Object.freeze({
  ESC: 27
}), Ji = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s,
  isVisible: u,
  onClick: f
}) => {
  const [l, d] = ee(!1), v = Q(null), h = Q(null), m = t || At(), b = (x) => d(!1), w = (x) => {
    d(!l), l && document.activeElement === v.current && !u && setTimeout(() => {
      d((F) => !F);
    }, 100), f && f(x);
  }, _ = (x) => {
    (x.keyCode | x.which) === tf.ESC && l && d(!l);
  }, N = Re.map(e, (x) => ct(x) ? Pe(x, {
    ...x.props,
    "aria-describedby": t,
    ref: v,
    onClick: w,
    "data-open": l,
    ...u ? {} : { onBlur: b, onKeyDown: _ }
  }) : null), { styles: E, attributes: I } = yr(
    v.current,
    h.current,
    {
      placement: r,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, c || 8]
          }
        },
        {
          name: "flip",
          options: {
            padding: 10
          }
        },
        { name: "eventListeners", enabled: l }
      ]
    }
  );
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(bt, { children: e }) : /* @__PURE__ */ k(bt, { children: [
    N,
    /* @__PURE__ */ p(dn, { id: "js-toggletip-portal", children: /* @__PURE__ */ k(
      "div",
      {
        id: m,
        ref: h,
        role: "status",
        className: `${Yr["c-toggletip"]} ${l && Yr["c-toggletip--active"]} ${a ?? ""}`,
        style: E.popper,
        ...I.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Yr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: E.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
Ji.defaultProps = {
  placement: "auto"
};
Ji.propTypes = {
  children: o.oneOfType([
    o.node,
    o.element,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  id: o.string,
  label: o.string.isRequired,
  addClass: o.string,
  hasArrow: o.bool,
  isDisabled: o.bool,
  distance: o.number,
  onClick: o.func,
  isVisible: o.bool,
  placement: o.oneOf([
    "auto",
    "auto-start",
    "auto-end",
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "right",
    "right-start",
    "right-end",
    "left",
    "left-start",
    "left-end"
  ])
};
const zr = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, nf = Object.freeze({
  ESC: 27
}), es = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s
}) => {
  const [u, f] = ee(!1), l = Q(null), d = Q(null), v = Q(), h = t || At(), m = (T) => {
    u || f(!u);
  }, b = (T) => f(!1), w = (T) => {
    (!u || document.activeElement !== l.current) && f(!u);
  }, _ = () => {
    window.clearTimeout(v.current);
  }, N = (T) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, E = (T) => {
    (T.keyCode | T.which) === nf.ESC && u && f(!u);
  }, I = Re.map(e, (T) => ct(T) ? Pe(T, {
    ...T.props,
    "aria-describedby": t,
    ref: l,
    onFocus: m,
    onBlur: b,
    onMouseEnter: w,
    onMouseLeave: N,
    onKeyDown: E
  }) : null), { styles: x, attributes: F } = yr(
    l.current,
    d.current,
    {
      placement: r,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, c || 8]
          }
        },
        {
          name: "flip",
          options: {
            padding: 10
          }
        },
        { name: "eventListeners", enabled: u }
      ]
    }
  );
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(bt, { children: e }) : /* @__PURE__ */ k(bt, { children: [
    I,
    /* @__PURE__ */ p(dn, { id: "js-tooltip-portal", children: /* @__PURE__ */ k(
      "div",
      {
        id: h,
        ref: d,
        role: "tooltip",
        "data-open": u,
        onMouseEnter: _,
        onMouseLeave: N,
        className: `${zr["c-tooltip"]} ${u && zr["c-tooltip--active"]} ${a ?? ""}`,
        style: x.popper,
        ...F.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: zr["c-tooltip__arrow"],
              "data-popper-arrow": !0,
              style: x.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
es.defaultProps = {
  placement: "auto"
};
es.propTypes = {
  children: o.oneOfType([
    o.node,
    o.element,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  id: o.string,
  label: o.string.isRequired,
  addClass: o.string,
  hasArrow: o.bool,
  isDisabled: o.bool,
  distance: o.number,
  placement: o.oneOf([
    "auto",
    "auto-start",
    "auto-end",
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "right",
    "right-start",
    "right-end",
    "left",
    "left-start",
    "left-end"
  ])
};
const Ro = ut(), ts = ({
  steps: e,
  isOpen: t,
  onClose: n,
  finalFocusRef: r,
  hideCloseButton: a,
  hideBackButton: i,
  ariaAttributes: c,
  defaultStyle: s,
  addClass: u
}) => {
  const [f, l] = ee(null), d = [
    ...e.reduce(
      (_, N, E) => [
        ..._,
        document.querySelector(N.target) ? { id: E + 1, ...N } : null
      ],
      []
    ).filter((_) => _ !== null)
  ], v = (_) => d.filter((N) => N.id === _).reduce((N, E) => ({ ...N, ...E }), {}), h = (_) => {
    const N = document.querySelector("#root");
    N.inert = _;
  }, m = () => {
    l((_) => _ < d.length ? _ + 1 : _);
  }, b = () => {
    l((_) => _ > 0 + 1 ? _ - 1 : _);
  }, w = () => {
    l(null), n(!t), h(!1), r && r.current.focus();
  };
  return J(() => {
    t && (l(d.shift().id), h(!0));
  }, [t]), /* @__PURE__ */ p(
    Ro.Provider,
    {
      value: {
        isOpen: t,
        lastId: d.length,
        ...v(f),
        methods: {
          onNext: m,
          onPrev: b,
          onClose: w
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(dn, { id: "js-tour", children: t && /* @__PURE__ */ k(bt, { children: [
        /* @__PURE__ */ p(rf, {}),
        /* @__PURE__ */ p(
          ns,
          {
            ariaAttributes: c,
            hideCloseButton: a,
            hideBackButton: i,
            addClass: u
          }
        )
      ] }) })
    }
  );
};
ts.defaultProps = {
  isOpen: !1,
  hideCloseButton: !1,
  hideBackButton: !1,
  ariaAttributes: {
    role: "dialog",
    tabIndex: -1,
    "aria-label": "Tour por la plataforma",
    "aria-modal": !0
  },
  defaultStyle: !1
};
ts.propTypes = {
  steps: o.arrayOf(
    o.shape({
      target: o.string.isRequired,
      content: o.oneOfType([o.string, o.element]),
      placement: o.oneOf([
        "auto",
        "auto-start",
        "auto-end",
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end"
      ]),
      distance: o.number,
      elementClass: o.string,
      helpLayerClass: o.string
    })
  ),
  isOpen: o.bool,
  onClose: o.func,
  finalFocusRef: o.any.isRequired,
  hideCloseButton: o.bool,
  hideBackButton: o.bool,
  defaultStyle: o.bool,
  addClass: o.string,
  ariaAttributes: o.shape({
    role: o.string,
    tabIndex: o.oneOfType([o.string, o.number]),
    "aria-label": o.string,
    "aria-modal": o.oneOfType([o.string, o.bool])
  })
};
const It = {
  "c-layout": "_c-layout_15ivg_1",
  "c-tour-content": "_c-tour-content_15ivg_9",
  "c-tour-progress": "_c-tour-progress_15ivg_30",
  "c-tour-progress-bar": "_c-tour-progress-bar_15ivg_38",
  "c-tour-button-container": "_c-tour-button-container_15ivg_49",
  "c-tour-help": "_c-tour-help_15ivg_91",
  "c-tour-number": "_c-tour-number_15ivg_101"
}, ns = ({
  ariaAttributes: e,
  hideCloseButton: t,
  hideBackButton: n,
  addClass: r
}) => {
  const {
    isOpen: a,
    lastId: i,
    methods: c,
    id: s,
    target: u,
    content: f,
    placement: l,
    distance: d,
    defaultStyle: v
  } = Te(Ro), h = Q(), { onClose: m, onPrev: b, onNext: w } = c, { styles: _, attributes: N } = yr(
    document.querySelector(u),
    h.current,
    {
      placement: l,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, d || 8]
          }
        },
        {
          name: "computeStyles",
          options: {
            adaptive: !1
          }
        },
        { name: "eventListeners", enabled: a }
      ]
    }
  ), E = () => ct(f) ? f : ws("p", { className: It["tour-description"] }, [
    f
  ]), I = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), w();
  };
  return /* @__PURE__ */ k(bt, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: te({ [It["c-layout"]]: !v }),
        "data-class": "c-layout"
      }
    ),
    /* @__PURE__ */ k(
      "div",
      {
        id: `unique-id-tour-element-${s}`,
        ref: h,
        style: _.popper,
        className: te({
          [It["c-tour-content"]]: !v,
          "animate__animated animate__fadeIn animate__faster": a,
          [r]: r
        }),
        ...e,
        ...N.popper,
        children: [
          /* @__PURE__ */ k("span", { className: "u-sr-only", children: [
            "Parte ",
            s,
            " de ",
            i,
            "."
          ] }),
          /* @__PURE__ */ p(
            "div",
            {
              "aria-hidden": !0,
              className: te({ [It["c-tour-progress"]]: !v }),
              "data-class": "c-tour-progress",
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: It["c-tour-progress-bar"],
                  "data-class": "c-tour-progress__bar",
                  style: { transform: `scaleX(${s / i})` }
                }
              )
            }
          ),
          E(),
          /* @__PURE__ */ k(
            "div",
            {
              className: te({
                [It["c-tour-button-container"]]: !v
              }),
              "data-class": "c-tour-button-container",
              children: [
                !t && /* @__PURE__ */ p(
                  Wt,
                  {
                    hasAriaLabel: !0,
                    label: "Salir",
                    "data-class": "c-button__close",
                    onClick: m,
                    icon: { path: new URL("/ui-components-books/dist/assets/icons/svg/close.svg", self.location).href, size: "big" },
                    ...v && { defaultStyle: v }
                  }
                ),
                !n && /* @__PURE__ */ p(
                  Wt,
                  {
                    disabled: s === 1,
                    hasAriaLabel: !0,
                    label: "Anterior",
                    "data-class": "c-button__before",
                    onClick: b,
                    icon: { path: new URL("/ui-components-books/dist/assets/icons/svg/navigate_before.svg", self.location).href, size: "big" },
                    ...v && { defaultStyle: v }
                  }
                ),
                /* @__PURE__ */ p(
                  Wt,
                  {
                    disabled: s === i,
                    hasAriaLabel: !0,
                    label: "Siguiente",
                    "data-class": "c-button__after",
                    onClick: I,
                    icon: { path: new URL("/ui-components-books/dist/assets/icons/svg/navigate_next.svg", self.location).href, size: "big" },
                    ...v && { defaultStyle: v }
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
};
ns.propTypes = {
  ariaAttributes: o.shape({
    role: o.string,
    tabIndex: o.oneOfType([o.string, o.number]),
    "aria-label": o.string,
    "aria-modal": o.oneOfType([o.string, o.bool])
  }),
  hideCloseButton: o.bool,
  hideBackButton: o.bool,
  addClass: o.string
};
const rf = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r, defaultStyle: a } = Te(Ro), [i, c] = ee({}), s = () => {
    const {
      x: u,
      y: f,
      width: l,
      height: d
    } = document.querySelector(n).getBoundingClientRect();
    c({
      width: `${l}px`,
      height: `${d}px`,
      top: `${f}px`,
      left: `${u}px`
    });
  };
  return J(() => (n && s(), () => {
    c({});
  }), [n]), J(() => {
    if (!e || !n)
      return;
    const u = (f) => {
      s();
    };
    return e && window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    };
  }, [e, n]), /* @__PURE__ */ p(
    "div",
    {
      className: te({
        [It["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [r]: r
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: It["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, of = "_active_i7dnv_90", af = "_iconPulse_i7dnv_1", ge = {
  "c-vid": "_c-vid_i7dnv_1",
  "c-vid__caption": "_c-vid__caption_i7dnv_19",
  "c-vid__container": "_c-vid__container_i7dnv_24",
  "c-vid__video": "_c-vid__video_i7dnv_44",
  "no-captions": "_no-captions_i7dnv_56",
  "c-vid__wrapper": "_c-vid__wrapper_i7dnv_60",
  "c-vid__icon-container": "_c-vid__icon-container_i7dnv_70",
  "c-vid__icon": "_c-vid__icon_i7dnv_70",
  active: of,
  iconPulse: af,
  "c-vid__progress-bg": "_c-vid__progress-bg_i7dnv_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_i7dnv_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_i7dnv_140",
  "c-vid__controls": "_c-vid__controls_i7dnv_150",
  "c-vid__button": "_c-vid__button_i7dnv_165",
  "c-vid__volume": "_c-vid__volume_i7dnv_180",
  "c-vid__volume-item": "_c-vid__volume-item_i7dnv_191",
  "c-vid__time": "_c-vid__time_i7dnv_202",
  "c-vid__subtitles": "_c-vid__subtitles_i7dnv_208"
}, rs = ({ src: e, width: t = "1000", hasDescription: n, description: r, addClass: a, poster: i, ...c }) => {
  const [s, u] = ee({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, l] = ee({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [d, v] = ee({
    state: !1,
    label: "Reproducir video"
  }), [h, m] = ee({
    state: !0,
    label: "Volumen"
  }), [b, w] = ee(100), [_, N] = ee({
    state: !1,
    label: "Ver en pantalla completa"
  }), [E, I] = ee(!1), [x, F] = ee(100), T = Q(null), A = Q(null), W = Q(null), H = Q(null), B = Q(null), z = Q(null), G = Q(null), K = Q(null), [oe, Z] = ee(!1), X = (j) => {
    j.classList.add(`${ge.active}`), setTimeout(() => {
      j.classList.remove(`${ge.active}`);
    }, 650);
  };
  function ce() {
    const j = A.current;
    d.state ? (j.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (j.play(), v({
      state: !0,
      label: "Pausar video"
    })), X(z.current);
  }
  function ie() {
    const j = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, D = T.current;
    j ? (N({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (N({
      state: !0,
      label: "Salir de pantalla completa"
    }), D.requestFullscreen ? D.requestFullscreen() : D.mozRequestFullScreen ? D.mozRequestFullScreen() : D.webkitRequestFullScreen ? D.webkitRequestFullScreen() : D.msRequestFullscreen && D.msRequestFullscreen());
  }
  function S(j) {
    const D = parseInt(j, 10), ne = D >= 3600 ? Math.floor(D / 3600) : 0, de = Math.floor((D - ne * 3600) / 60), ye = D - ne * 3600 - de * 60, xe = C(O(ne)), je = C(O(de)), dt = C(O(ye));
    return {
      hours: xe,
      minutes: je,
      seconds: dt
    };
  }
  function L(j) {
    const D = y(j.duration), ne = y(j.currentTime);
    l({
      totalSeconds: j.currentTime,
      hours: parseInt(S(j.currentTime).hours),
      minutes: parseInt(S(j.currentTime).minutes),
      seconds: parseInt(S(j.currentTime).seconds),
      string: ne
    }), u({
      totalSeconds: Math.floor(j.duration),
      hours: parseInt(S(j.duration).hours),
      minutes: parseInt(S(j.duration).minutes),
      seconds: parseInt(S(j.duration).seconds),
      string: D
    });
  }
  function y(j) {
    return parseInt(j, 10) <= 3600 ? `${S(j).minutes}:${S(j).seconds}` : `${S(j).hours}:${S(j).minutes}:${S(j).seconds}`;
  }
  function O(j) {
    return j < 10 ? j = "0" + j : j;
  }
  function C(j) {
    return isNaN(j) ? "00" : j;
  }
  function R(j) {
    const D = H.current, ne = A.current, ye = j.nativeEvent.offsetX / D.offsetWidth * ne.duration;
    ne.currentTime = ye;
  }
  function P(j) {
    const D = A.current, ne = j.target.value, de = ne / 100;
    F(ne), w(ne), D.volume = de, h.state || m({
      state: !0,
      label: "Volumen"
    });
  }
  const M = () => {
    if (h.state) {
      m({
        state: !1,
        label: "Mutear video"
      });
      const j = A.current, D = 0, ne = D;
      F(D), j.volume = ne;
    } else {
      m({
        state: !0,
        label: "Volumen"
      });
      const j = A.current, D = b, ne = D / 100;
      F(D), j.volume = ne;
    }
  }, q = function(j) {
    (j.keyCode || j.which) === 32 && ce();
  }, U = function(j) {
    const D = Math.floor(H.current.getAttribute("aria-valuenow"));
    if (document.activeElement === B.current)
      return null;
    if ((j.keyCode || j.which) === 37) {
      const ne = D - 5;
      ne >= 0 ? A.current.currentTime = ne : A.current.currentTime = 0, X(K.current);
    }
    if ((j.keyCode || j.which) === 39) {
      const ne = D + 5;
      ne >= A.current.duration ? A.current.currentTime = A.current.duration : A.current.currentTime = ne, X(G.current);
    }
  }, V = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return J(() => {
    const j = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(j, "caption") && Z(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(j, "volume") && F(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), J(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: oe, volume: x }));
  }, [oe, x]), J(() => (W.current ? W.current.addEventListener("error", () => {
    I(!0);
  }) : I(!0), e.caption && I(!1), () => {
    W.current && W.current.removeEventListener("error", () => {
      I(!0);
    });
  }), [e.caption]), /* @__PURE__ */ k(
    "figure",
    {
      className: `${ge["c-vid"]} ${a}`,
      style: { maxWidth: `${t}px` },
      onKeyDown: (j) => U(j),
      ...c,
      children: [
        /* @__PURE__ */ k("div", { className: `${ge["c-vid__container"]} ${a}`, ref: T, children: [
          /* @__PURE__ */ k("div", { className: ge["c-vid__wrapper"], children: [
            /* @__PURE__ */ k(
              "video",
              {
                preload: "none",
                ref: A,
                onTimeUpdate: (j) => L(j.target),
                onLoadedData: (j) => L(j.target),
                onClick: ce,
                className: `${ge["c-vid__video"]} ${oe ? "" : ge["no-captions"]}`,
                ...i && { poster: i },
                children: [
                  /* @__PURE__ */ p("source", { src: e.video }),
                  e.caption ? /* @__PURE__ */ p(
                    "track",
                    {
                      ref: W,
                      src: e.caption,
                      label: "Subtítulos en español",
                      kind: "subtitles",
                      srcLang: "es",
                      default: !0
                    }
                  ) : ""
                ]
              }
            ),
            /* @__PURE__ */ k("div", { className: ge["c-vid__icon-container"], children: [
              /* @__PURE__ */ p("div", { ref: K, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: z, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: G, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
            ] })
          ] }),
          /* @__PURE__ */ p("div", { className: ge["progress-container"], children: /* @__PURE__ */ k(
            "div",
            {
              role: "slider",
              "aria-label": "Progreso del video",
              "aria-valuemin": "0",
              "aria-valuenow": Math.round(f.totalSeconds),
              "aria-valuemax": Math.round(s.totalSeconds),
              "aria-valuetext": V(),
              tabIndex: "0",
              onKeyDown: q,
              className: ge["c-vid__progress-bg"],
              onClick: R,
              ref: H,
              children: [
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: ge["c-vid__progress-bar"],
                    style: {
                      transform: `scaleX(${isNaN(f.totalSeconds / s.totalSeconds) ? 0 : f.totalSeconds / s.totalSeconds})`
                    }
                  }
                ),
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: ge["progress-sphere"],
                    style: {
                      left: `min(calc((${f.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ k("div", { className: ge["c-vid__controls"], children: [
            /* @__PURE__ */ p(
              "button",
              {
                className: `${ge["c-vid__button"]} js-button-video-play`,
                "aria-label": d.label,
                onClick: ce,
                "data-description": "Este botón reproduce el video",
                children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${ge["c-vid__button"]} js-button-video-volumen`,
                "aria-label": h.label,
                "data-description": "Este botón controla el volumen",
                onClick: M,
                children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: h.state ? /* @__PURE__ */ p(
                  "path",
                  {
                    id: "volume_on",
                    d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z"
                  }
                ) : /* @__PURE__ */ p(
                  "path",
                  {
                    id: "volume_off",
                    d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z"
                  }
                ) }) })
              }
            ),
            /* @__PURE__ */ k("label", { className: ge["c-vid__volume"], htmlFor: "volumeControl", children: [
              /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
              /* @__PURE__ */ p(
                "input",
                {
                  className: ge["c-vid__volume-item"],
                  ref: B,
                  id: "volumeControl",
                  type: "range",
                  min: "0",
                  max: "100",
                  step: "5",
                  value: x,
                  onChange: P,
                  "aria-valuetext": `${x}%`
                }
              )
            ] }),
            /* @__PURE__ */ k("p", { className: ge["c-vid__time"], "aria-hidden": "true", children: [
              /* @__PURE__ */ p("span", { children: f.string }),
              "/",
              /* @__PURE__ */ p("span", { children: s.string })
            ] }),
            /* @__PURE__ */ p(
              "button",
              {
                disabled: E,
                "aria-pressed": E ? void 0 : oe,
                onClick: () => Z(!oe),
                "aria-label": "Subtítulos",
                className: `${ge["c-vid__button"]} ${ge["c-vid__subtitles"]}`,
                children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: E ? /* @__PURE__ */ p(
                  "path",
                  {
                    id: "closed_caption_disabled",
                    d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z"
                  }
                ) : /* @__PURE__ */ p(
                  "path",
                  {
                    id: "closed_caption",
                    d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z"
                  }
                ) }) })
              }
            ),
            /* @__PURE__ */ p("button", { className: ge["c-vid__button"], "aria-label": _.label, onClick: ie, children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: _.state ? /* @__PURE__ */ p(
              "path",
              {
                id: "fullscreen_exit",
                d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z"
              }
            ) : /* @__PURE__ */ p(
              "path",
              {
                id: "fullscreen",
                d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z"
              }
            ) }) }) })
          ] })
        ] }),
        n && /* @__PURE__ */ k("figcaption", { className: ge["c-vid__caption"], children: [
          /* @__PURE__ */ k("strong", { children: [
            r.title,
            ":"
          ] }),
          " ",
          r.content
        ] })
      ]
    }
  );
};
rs.propTypes = {
  src: o.shape({
    video: o.string.isRequired,
    caption: o.string
  }),
  width: o.string,
  addClass: o.string,
  hasDescription: o.bool,
  description: o.shape({
    title: o.string,
    content: o.string
  }),
  poster: o.string
};
rs.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
var kn = {}, sf = {
  get exports() {
    return kn;
  },
  set exports(e) {
    kn = e;
  }
}, os = {};
function as(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = as(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Ca() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = as(e)) && (r && (r += " "), r += t);
  return r;
}
const lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Ca,
  default: Ca
}, Symbol.toStringTag, { value: "Module" })), cf = /* @__PURE__ */ Os(lf);
var we = {}, wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.dontSetMe = vf;
wt.findInArray = uf;
wt.int = pf;
wt.isFunction = df;
wt.isNum = ff;
function uf(e, t) {
  for (var n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function df(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function ff(e) {
  return typeof e == "number" && !isNaN(e);
}
function pf(e) {
  return parseInt(e, 10);
}
function vf(e, t, n) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
Gt.browserPrefixToKey = ss;
Gt.browserPrefixToStyle = hf;
Gt.default = void 0;
Gt.getPrefix = is;
var Wr = ["Moz", "Webkit", "O", "ms"];
function is() {
  var e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var r = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!r || n in r)
    return "";
  for (var a = 0; a < Wr.length; a++)
    if (ss(n, Wr[a]) in r)
      return Wr[a];
  return "";
}
function ss(e, t) {
  return t ? "".concat(t).concat(gf(e)) : e;
}
function hf(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function gf(e) {
  for (var t = "", n = !0, r = 0; r < e.length; r++)
    n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
  return t;
}
var mf = is();
Gt.default = mf;
function so(e) {
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, so(e);
}
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.addClassName = fs;
we.addEvent = _f;
we.addUserSelectStyles = Nf;
we.createCSSTransform = Cf;
we.createSVGTransform = Pf;
we.getTouch = Rf;
we.getTouchIdentifier = Df;
we.getTranslation = Do;
we.innerHeight = Ef;
we.innerWidth = Tf;
we.matchesSelector = ds;
we.matchesSelectorAndParentsTo = yf;
we.offsetXYFromParent = Sf;
we.outerHeight = xf;
we.outerWidth = Of;
we.removeClassName = ps;
we.removeEvent = wf;
we.removeUserSelectStyles = If;
var et = wt, Pa = bf(Gt);
function ls(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ls = function(a) {
    return a ? n : t;
  })(e);
}
function bf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || so(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = ls(t);
  if (n && n.has(e))
    return n.get(e);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var c = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      c && (c.get || c.set) ? Object.defineProperty(r, i, c) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Ra(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ra(Object(n), !0).forEach(function(r) {
      us(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ra(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function us(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xn = "";
function ds(e, t) {
  return Xn || (Xn = (0, et.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, et.isFunction)(e[n]);
  })), (0, et.isFunction)(e[Xn]) ? e[Xn](t) : !1;
}
function yf(e, t, n) {
  var r = e;
  do {
    if (ds(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function _f(e, t, n, r) {
  if (e) {
    var a = cs({
      capture: !0
    }, r);
    e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
  }
}
function wf(e, t, n, r) {
  if (e) {
    var a = cs({
      capture: !0
    }, r);
    e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
  }
}
function xf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, et.int)(n.borderTopWidth), t += (0, et.int)(n.borderBottomWidth), t;
}
function Of(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, et.int)(n.borderLeftWidth), t += (0, et.int)(n.borderRightWidth), t;
}
function Ef(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingTop), t -= (0, et.int)(n.paddingBottom), t;
}
function Tf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingLeft), t -= (0, et.int)(n.paddingRight), t;
}
function Sf(e, t, n) {
  var r = t === t.ownerDocument.body, a = r ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - a.left) / n, c = (e.clientY + t.scrollTop - a.top) / n;
  return {
    x: i,
    y: c
  };
}
function Cf(e, t) {
  var n = Do(e, t, "px");
  return us({}, (0, Pa.browserPrefixToKey)("transform", Pa.default), n);
}
function Pf(e, t) {
  var n = Do(e, t, "");
  return n;
}
function Do(e, t, n) {
  var r = e.x, a = e.y, i = "translate(".concat(r).concat(n, ",").concat(a).concat(n, ")");
  if (t) {
    var c = "".concat(typeof t.x == "string" ? t.x : t.x + n), s = "".concat(typeof t.y == "string" ? t.y : t.y + n);
    i = "translate(".concat(c, ", ").concat(s, ")") + i;
  }
  return i;
}
function Rf(e, t) {
  return e.targetTouches && (0, et.findInArray)(e.targetTouches, function(n) {
    return t === n.identifier;
  }) || e.changedTouches && (0, et.findInArray)(e.changedTouches, function(n) {
    return t === n.identifier;
  });
}
function Df(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Nf(e) {
  if (e) {
    var t = e.getElementById("react-draggable-style-el");
    t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && fs(e.body, "react-draggable-transparent-selection");
  }
}
function If(e) {
  if (e)
    try {
      if (e.body && ps(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function fs(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function ps(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var xt = {};
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.canDragX = $f;
xt.canDragY = kf;
xt.createCoreData = jf;
xt.createDraggableData = Ff;
xt.getBoundPosition = Af;
xt.getControlPosition = Lf;
xt.snapToGrid = Mf;
var Qe = wt, en = we;
function Af(e, t, n) {
  if (!e.props.bounds)
    return [t, n];
  var r = e.props.bounds;
  r = typeof r == "string" ? r : Bf(r);
  var a = No(e);
  if (typeof r == "string") {
    var i = a.ownerDocument, c = i.defaultView, s;
    if (r === "parent" ? s = a.parentNode : s = i.querySelector(r), !(s instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    var u = s, f = c.getComputedStyle(a), l = c.getComputedStyle(u);
    r = {
      left: -a.offsetLeft + (0, Qe.int)(l.paddingLeft) + (0, Qe.int)(f.marginLeft),
      top: -a.offsetTop + (0, Qe.int)(l.paddingTop) + (0, Qe.int)(f.marginTop),
      right: (0, en.innerWidth)(u) - (0, en.outerWidth)(a) - a.offsetLeft + (0, Qe.int)(l.paddingRight) - (0, Qe.int)(f.marginRight),
      bottom: (0, en.innerHeight)(u) - (0, en.outerHeight)(a) - a.offsetTop + (0, Qe.int)(l.paddingBottom) - (0, Qe.int)(f.marginBottom)
    };
  }
  return (0, Qe.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Qe.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Qe.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Qe.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Mf(e, t, n) {
  var r = Math.round(t / e[0]) * e[0], a = Math.round(n / e[1]) * e[1];
  return [r, a];
}
function $f(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function kf(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Lf(e, t, n) {
  var r = typeof t == "number" ? (0, en.getTouch)(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  var a = No(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, en.offsetXYFromParent)(r || e, i, n.props.scale);
}
function jf(e, t, n) {
  var r = e.state, a = !(0, Qe.isNum)(r.lastX), i = No(e);
  return a ? {
    node: i,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: n,
    x: t,
    y: n
  } : {
    node: i,
    deltaX: t - r.lastX,
    deltaY: n - r.lastY,
    lastX: r.lastX,
    lastY: r.lastY,
    x: t,
    y: n
  };
}
function Ff(e, t) {
  var n = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / n,
    y: e.state.y + t.deltaY / n,
    deltaX: t.deltaX / n,
    deltaY: t.deltaY / n,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Bf(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function No(e) {
  var t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var _r = {}, wr = {};
Object.defineProperty(wr, "__esModule", {
  value: !0
});
wr.default = qf;
function qf() {
}
function lr(e) {
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lr(e);
}
Object.defineProperty(_r, "__esModule", {
  value: !0
});
_r.default = void 0;
var Ur = Yf(ke), Ke = Io(o), Vf = Io(ka), Me = we, Rt = xt, Hr = wt, wn = Io(wr);
function Io(e) {
  return e && e.__esModule ? e : { default: e };
}
function vs(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (vs = function(a) {
    return a ? n : t;
  })(e);
}
function Yf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || lr(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = vs(t);
  if (n && n.has(e))
    return n.get(e);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var c = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      c && (c.get || c.set) ? Object.defineProperty(r, i, c) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Da(e, t) {
  return Hf(e) || Uf(e, t) || Wf(e, t) || zf();
}
function zf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Na(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Na(e, t);
  }
}
function Na(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Uf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, c, s;
    try {
      for (n = n.call(e); !(a = (c = n.next()).done) && (r.push(c.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, s = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function Hf(e) {
  if (Array.isArray(e))
    return e;
}
function Gf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ia(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Zf(e, t, n) {
  return t && Ia(e.prototype, t), n && Ia(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && lo(e, t);
}
function lo(e, t) {
  return lo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, lo(e, t);
}
function Kf(e) {
  var t = Jf();
  return function() {
    var r = cr(e), a;
    if (t) {
      var i = cr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Qf(this, a);
  };
}
function Qf(e, t) {
  if (t && (lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $e(e);
}
function $e(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function cr(e) {
  return cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, cr(e);
}
function at(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vt = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
}, Dt = vt.mouse, xr = /* @__PURE__ */ function(e) {
  Xf(n, e);
  var t = Kf(n);
  function n() {
    var r;
    Gf(this, n);
    for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++)
      i[c] = arguments[c];
    return r = t.call.apply(t, [this].concat(i)), at($e(r), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), at($e(r), "mounted", !1), at($e(r), "handleDragStart", function(s) {
      if (r.props.onMouseDown(s), !r.props.allowAnyClick && typeof s.button == "number" && s.button !== 0)
        return !1;
      var u = r.findDOMNode();
      if (!u || !u.ownerDocument || !u.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var f = u.ownerDocument;
      if (!(r.props.disabled || !(s.target instanceof f.defaultView.Node) || r.props.handle && !(0, Me.matchesSelectorAndParentsTo)(s.target, r.props.handle, u) || r.props.cancel && (0, Me.matchesSelectorAndParentsTo)(s.target, r.props.cancel, u))) {
        s.type === "touchstart" && s.preventDefault();
        var l = (0, Me.getTouchIdentifier)(s);
        r.setState({
          touchIdentifier: l
        });
        var d = (0, Rt.getControlPosition)(s, l, $e(r));
        if (d != null) {
          var v = d.x, h = d.y, m = (0, Rt.createCoreData)($e(r), v, h);
          (0, wn.default)("DraggableCore: handleDragStart: %j", m), (0, wn.default)("calling", r.props.onStart);
          var b = r.props.onStart(s, m);
          b === !1 || r.mounted === !1 || (r.props.enableUserSelectHack && (0, Me.addUserSelectStyles)(f), r.setState({
            dragging: !0,
            lastX: v,
            lastY: h
          }), (0, Me.addEvent)(f, Dt.move, r.handleDrag), (0, Me.addEvent)(f, Dt.stop, r.handleDragStop));
        }
      }
    }), at($e(r), "handleDrag", function(s) {
      var u = (0, Rt.getControlPosition)(s, r.state.touchIdentifier, $e(r));
      if (u != null) {
        var f = u.x, l = u.y;
        if (Array.isArray(r.props.grid)) {
          var d = f - r.state.lastX, v = l - r.state.lastY, h = (0, Rt.snapToGrid)(r.props.grid, d, v), m = Da(h, 2);
          if (d = m[0], v = m[1], !d && !v)
            return;
          f = r.state.lastX + d, l = r.state.lastY + v;
        }
        var b = (0, Rt.createCoreData)($e(r), f, l);
        (0, wn.default)("DraggableCore: handleDrag: %j", b);
        var w = r.props.onDrag(s, b);
        if (w === !1 || r.mounted === !1) {
          try {
            r.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var _ = document.createEvent("MouseEvents");
            _.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.handleDragStop(_);
          }
          return;
        }
        r.setState({
          lastX: f,
          lastY: l
        });
      }
    }), at($e(r), "handleDragStop", function(s) {
      if (r.state.dragging) {
        var u = (0, Rt.getControlPosition)(s, r.state.touchIdentifier, $e(r));
        if (u != null) {
          var f = u.x, l = u.y;
          if (Array.isArray(r.props.grid)) {
            var d = f - r.state.lastX || 0, v = l - r.state.lastY || 0, h = (0, Rt.snapToGrid)(r.props.grid, d, v), m = Da(h, 2);
            d = m[0], v = m[1], f = r.state.lastX + d, l = r.state.lastY + v;
          }
          var b = (0, Rt.createCoreData)($e(r), f, l), w = r.props.onStop(s, b);
          if (w === !1 || r.mounted === !1)
            return !1;
          var _ = r.findDOMNode();
          _ && r.props.enableUserSelectHack && (0, Me.removeUserSelectStyles)(_.ownerDocument), (0, wn.default)("DraggableCore: handleDragStop: %j", b), r.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), _ && ((0, wn.default)("DraggableCore: Removing handlers"), (0, Me.removeEvent)(_.ownerDocument, Dt.move, r.handleDrag), (0, Me.removeEvent)(_.ownerDocument, Dt.stop, r.handleDragStop));
        }
      }
    }), at($e(r), "onMouseDown", function(s) {
      return Dt = vt.mouse, r.handleDragStart(s);
    }), at($e(r), "onMouseUp", function(s) {
      return Dt = vt.mouse, r.handleDragStop(s);
    }), at($e(r), "onTouchStart", function(s) {
      return Dt = vt.touch, r.handleDragStart(s);
    }), at($e(r), "onTouchEnd", function(s) {
      return Dt = vt.touch, r.handleDragStop(s);
    }), r;
  }
  return Zf(n, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var a = this.findDOMNode();
      a && (0, Me.addEvent)(a, vt.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.findDOMNode();
      if (a) {
        var i = a.ownerDocument;
        (0, Me.removeEvent)(i, vt.mouse.move, this.handleDrag), (0, Me.removeEvent)(i, vt.touch.move, this.handleDrag), (0, Me.removeEvent)(i, vt.mouse.stop, this.handleDragStop), (0, Me.removeEvent)(i, vt.touch.stop, this.handleDragStop), (0, Me.removeEvent)(a, vt.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, Me.removeUserSelectStyles)(i);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var a, i, c;
      return (a = this.props) !== null && a !== void 0 && a.nodeRef ? (i = this.props) === null || i === void 0 || (c = i.nodeRef) === null || c === void 0 ? void 0 : c.current : Vf.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Ur.cloneElement(Ur.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]), n;
}(Ur.Component);
_r.default = xr;
at(xr, "displayName", "DraggableCore");
at(xr, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: Ke.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: Ke.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: Ke.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(t, n) {
    if (t[n] && t[n].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: Ke.default.arrayOf(Ke.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: Ke.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: Ke.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: Ke.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: Ke.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: Ke.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: Ke.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: Ke.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: Ke.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Hr.dontSetMe,
  style: Hr.dontSetMe,
  transform: Hr.dontSetMe
});
at(xr, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  function t(y) {
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(O) {
      return typeof O;
    } : function(O) {
      return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
    }, t(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return f.default;
    }
  }), e.default = void 0;
  var n = m(ke), r = v(o), a = v(ka), i = v(cf), c = we, s = xt, u = wt, f = v(_r), l = v(wr), d = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function v(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function h(y) {
    if (typeof WeakMap != "function")
      return null;
    var O = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
    return (h = function(P) {
      return P ? C : O;
    })(y);
  }
  function m(y, O) {
    if (!O && y && y.__esModule)
      return y;
    if (y === null || t(y) !== "object" && typeof y != "function")
      return { default: y };
    var C = h(O);
    if (C && C.has(y))
      return C.get(y);
    var R = {}, P = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var M in y)
      if (M !== "default" && Object.prototype.hasOwnProperty.call(y, M)) {
        var q = P ? Object.getOwnPropertyDescriptor(y, M) : null;
        q && (q.get || q.set) ? Object.defineProperty(R, M, q) : R[M] = y[M];
      }
    return R.default = y, C && C.set(y, R), R;
  }
  function b() {
    return b = Object.assign || function(y) {
      for (var O = 1; O < arguments.length; O++) {
        var C = arguments[O];
        for (var R in C)
          Object.prototype.hasOwnProperty.call(C, R) && (y[R] = C[R]);
      }
      return y;
    }, b.apply(this, arguments);
  }
  function w(y, O) {
    if (y == null)
      return {};
    var C = _(y, O), R, P;
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(y);
      for (P = 0; P < M.length; P++)
        R = M[P], !(O.indexOf(R) >= 0) && Object.prototype.propertyIsEnumerable.call(y, R) && (C[R] = y[R]);
    }
    return C;
  }
  function _(y, O) {
    if (y == null)
      return {};
    var C = {}, R = Object.keys(y), P, M;
    for (M = 0; M < R.length; M++)
      P = R[M], !(O.indexOf(P) >= 0) && (C[P] = y[P]);
    return C;
  }
  function N(y, O) {
    var C = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(y);
      O && (R = R.filter(function(P) {
        return Object.getOwnPropertyDescriptor(y, P).enumerable;
      })), C.push.apply(C, R);
    }
    return C;
  }
  function E(y) {
    for (var O = 1; O < arguments.length; O++) {
      var C = arguments[O] != null ? arguments[O] : {};
      O % 2 ? N(Object(C), !0).forEach(function(R) {
        S(y, R, C[R]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C)) : N(Object(C)).forEach(function(R) {
        Object.defineProperty(y, R, Object.getOwnPropertyDescriptor(C, R));
      });
    }
    return y;
  }
  function I(y, O) {
    return W(y) || A(y, O) || F(y, O) || x();
  }
  function x() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function F(y, O) {
    if (y) {
      if (typeof y == "string")
        return T(y, O);
      var C = Object.prototype.toString.call(y).slice(8, -1);
      if (C === "Object" && y.constructor && (C = y.constructor.name), C === "Map" || C === "Set")
        return Array.from(y);
      if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))
        return T(y, O);
    }
  }
  function T(y, O) {
    (O == null || O > y.length) && (O = y.length);
    for (var C = 0, R = new Array(O); C < O; C++)
      R[C] = y[C];
    return R;
  }
  function A(y, O) {
    var C = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (C != null) {
      var R = [], P = !0, M = !1, q, U;
      try {
        for (C = C.call(y); !(P = (q = C.next()).done) && (R.push(q.value), !(O && R.length === O)); P = !0)
          ;
      } catch (V) {
        M = !0, U = V;
      } finally {
        try {
          !P && C.return != null && C.return();
        } finally {
          if (M)
            throw U;
        }
      }
      return R;
    }
  }
  function W(y) {
    if (Array.isArray(y))
      return y;
  }
  function H(y, O) {
    if (!(y instanceof O))
      throw new TypeError("Cannot call a class as a function");
  }
  function B(y, O) {
    for (var C = 0; C < O.length; C++) {
      var R = O[C];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(y, R.key, R);
    }
  }
  function z(y, O, C) {
    return O && B(y.prototype, O), C && B(y, C), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function G(y, O) {
    if (typeof O != "function" && O !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(O && O.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), O && K(y, O);
  }
  function K(y, O) {
    return K = Object.setPrototypeOf || function(R, P) {
      return R.__proto__ = P, R;
    }, K(y, O);
  }
  function oe(y) {
    var O = ce();
    return function() {
      var R = ie(y), P;
      if (O) {
        var M = ie(this).constructor;
        P = Reflect.construct(R, arguments, M);
      } else
        P = R.apply(this, arguments);
      return Z(this, P);
    };
  }
  function Z(y, O) {
    if (O && (t(O) === "object" || typeof O == "function"))
      return O;
    if (O !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return X(y);
  }
  function X(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function ce() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function ie(y) {
    return ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
      return C.__proto__ || Object.getPrototypeOf(C);
    }, ie(y);
  }
  function S(y, O, C) {
    return O in y ? Object.defineProperty(y, O, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : y[O] = C, y;
  }
  var L = /* @__PURE__ */ function(y) {
    G(C, y);
    var O = oe(C);
    function C(R) {
      var P;
      return H(this, C), P = O.call(this, R), S(X(P), "onDragStart", function(M, q) {
        (0, l.default)("Draggable: onDragStart: %j", q);
        var U = P.props.onStart(M, (0, s.createDraggableData)(X(P), q));
        if (U === !1)
          return !1;
        P.setState({
          dragging: !0,
          dragged: !0
        });
      }), S(X(P), "onDrag", function(M, q) {
        if (!P.state.dragging)
          return !1;
        (0, l.default)("Draggable: onDrag: %j", q);
        var U = (0, s.createDraggableData)(X(P), q), V = {
          x: U.x,
          y: U.y
        };
        if (P.props.bounds) {
          var j = V.x, D = V.y;
          V.x += P.state.slackX, V.y += P.state.slackY;
          var ne = (0, s.getBoundPosition)(X(P), V.x, V.y), de = I(ne, 2), ye = de[0], xe = de[1];
          V.x = ye, V.y = xe, V.slackX = P.state.slackX + (j - V.x), V.slackY = P.state.slackY + (D - V.y), U.x = V.x, U.y = V.y, U.deltaX = V.x - P.state.x, U.deltaY = V.y - P.state.y;
        }
        var je = P.props.onDrag(M, U);
        if (je === !1)
          return !1;
        P.setState(V);
      }), S(X(P), "onDragStop", function(M, q) {
        if (!P.state.dragging)
          return !1;
        var U = P.props.onStop(M, (0, s.createDraggableData)(X(P), q));
        if (U === !1)
          return !1;
        (0, l.default)("Draggable: onDragStop: %j", q);
        var V = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, j = !!P.props.position;
        if (j) {
          var D = P.props.position, ne = D.x, de = D.y;
          V.x = ne, V.y = de;
        }
        P.setState(V);
      }), P.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: R.position ? R.position.x : R.defaultPosition.x,
        y: R.position ? R.position.y : R.defaultPosition.y,
        prevPropsPosition: E({}, R.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, R.position && !(R.onDrag || R.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), P;
    }
    return z(C, [{
      key: "componentDidMount",
      value: function() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.setState({
          dragging: !1
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
    }, {
      key: "findDOMNode",
      value: function() {
        var P, M, q;
        return (P = (M = this.props) === null || M === void 0 || (q = M.nodeRef) === null || q === void 0 ? void 0 : q.current) !== null && P !== void 0 ? P : a.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var P, M = this.props;
        M.axis, M.bounds;
        var q = M.children, U = M.defaultPosition, V = M.defaultClassName, j = M.defaultClassNameDragging, D = M.defaultClassNameDragged, ne = M.position, de = M.positionOffset;
        M.scale;
        var ye = w(M, d), xe = {}, je = null, dt = !!ne, Ze = !dt || this.state.dragging, Oe = ne || U, qe = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && Ze ? this.state.x : Oe.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && Ze ? this.state.y : Oe.y
        };
        this.state.isElementSVG ? je = (0, c.createSVGTransform)(qe, de) : xe = (0, c.createCSSTransform)(qe, de);
        var Xe = (0, i.default)(q.props.className || "", V, (P = {}, S(P, j, this.state.dragging), S(P, D, this.state.dragged), P));
        return /* @__PURE__ */ n.createElement(f.default, b({}, ye, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ n.cloneElement(n.Children.only(q), {
          className: Xe,
          style: E(E({}, q.props.style), xe),
          transform: je
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(P, M) {
          var q = P.position, U = M.prevPropsPosition;
          return q && (!U || q.x !== U.x || q.y !== U.y) ? ((0, l.default)("Draggable: getDerivedStateFromProps %j", {
            position: q,
            prevPropsPosition: U
          }), {
            x: q.x,
            y: q.y,
            prevPropsPosition: E({}, q)
          }) : null;
        }
      )
    }]), C;
  }(n.Component);
  e.default = L, S(L, "displayName", "Draggable"), S(L, "propTypes", E(E({}, f.default.propTypes), {}, {
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: r.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: r.default.oneOfType([r.default.shape({
      left: r.default.number,
      right: r.default.number,
      top: r.default.number,
      bottom: r.default.number
    }), r.default.string, r.default.oneOf([!1])]),
    defaultClassName: r.default.string,
    defaultClassNameDragging: r.default.string,
    defaultClassNameDragged: r.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    positionOffset: r.default.shape({
      x: r.default.oneOfType([r.default.number, r.default.string]),
      y: r.default.oneOfType([r.default.number, r.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: u.dontSetMe,
    style: u.dontSetMe,
    transform: u.dontSetMe
  })), S(L, "defaultProps", E(E({}, f.default.defaultProps), {}, {
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  }));
})(os);
var hs = os, gs = hs.default, ep = hs.DraggableCore;
sf.exports = gs;
kn.default = gs;
kn.DraggableCore = ep;
const tp = (e, t, n) => {
  const [r, a] = ee({ video1: "", video2: "" }), i = { video1: "/", video2: "/" }, c = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  }, s = (l, d = 0) => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const v = t.filter((h) => h.to === l);
      if (v.length > 0) {
        const { slides: h } = v[0], m = h[d < 0 ? 0 : d];
        a(m || i);
      } else
        a(i);
    } else
      a(i);
  }, u = (l, d = 0, v = "") => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const h = t.filter((m) => m.to === l);
      if (h.length > 0) {
        const { slides: m } = h[0], { modals: b } = m[d < 0 ? 0 : d], _ = (b || []).filter((N) => N.id === v)[0];
        a(_ || i);
      } else
        a(i);
    } else
      a(i);
  }, f = () => {
    const l = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (l) {
      const d = [...l].findIndex((w) => !w.hasAttribute("hidden"));
      s(n, d < 0 ? 0 : d);
      const v = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (v.length > 0) {
        const w = [...v].findIndex((_) => !_.hasAttribute("hidden"));
        s(n, w < 0 ? 0 : w);
      }
      const h = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      h && u(n, d, h.id);
      const m = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      m && u(n, d, m.id);
      const b = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      b && u(n, d, b.id);
    }
  };
  return J(() => {
    if (e) {
      const l = new MutationObserver(f);
      return l.observe(document.querySelector(e || "body"), c), () => l.disconnect();
    }
  }, [f, c]), r;
}, np = "_progress_18ffq_85", rp = "_flex_18ffq_95", op = "_gap_18ffq_152", ap = "_secondary_18ffq_189", ip = "_close_18ffq_285", sp = "_hide_18ffq_291", lp = "_ico_smart_18ffq_299", he = {
  "c-vid-container": "_c-vid-container_18ffq_1",
  "c-vid": "_c-vid_18ffq_1",
  "c-vid-controls": "_c-vid-controls_18ffq_34",
  "c-vid-controls-text": "_c-vid-controls-text_18ffq_75",
  progress: np,
  flex: rp,
  "progress-bar": "_progress-bar_18ffq_101",
  "c-vid-controls-volume": "_c-vid-controls-volume_18ffq_108",
  "c-vid-controls-volume-item": "_c-vid-controls-volume-item_18ffq_129",
  "no-captions": "_no-captions_18ffq_140",
  gap: op,
  "menu-float": "_menu-float_18ffq_160",
  "menu-float-active": "_menu-float-active_18ffq_173",
  "menu-float-btn": "_menu-float-btn_18ffq_179",
  secondary: ap,
  "menu-float-btn-disable": "_menu-float-btn-disable_18ffq_213",
  "menu-float-btndrop": "_menu-float-btndrop_18ffq_223",
  "menu-float-dropdown": "_menu-float-dropdown_18ffq_242",
  "menu-float-dropdown-content": "_menu-float-dropdown-content_18ffq_250",
  close: ip,
  hide: sp,
  "image-Video": "_image-Video_18ffq_295",
  ico_smart: lp
}, ms = ({ width: e, addClass: t, image: n, pathVideo: r, pathname: a }) => {
  const [i, c] = ee("00:00"), [s, u] = ee(!1), [f, l] = ee(!1), [d, v] = ee(!1), { video1: h, video2: m } = tp("body", r, a), [b, w] = ee({
    state: !1,
    icon: Gr,
    label: "Reproducir video"
  }), [_, N] = ee({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  }), { deltaPosition: E } = _;
  function I() {
    const Z = s ? z.current : G.current;
    b.state ? (Z.pause(), w({
      state: !1,
      icon: Gr,
      label: "Reproducir video"
    })) : (Z.play(), w({
      state: !0,
      icon: fp,
      label: "Pausar video"
    }));
  }
  function x() {
    const Z = s ? z.current : G.current, X = oe.current, ce = Z.currentTime / Z.duration * 100;
    X.style.flexBasis = `${ce}%`;
  }
  function F() {
    const Z = s ? z.current : G.current;
    X(Z);
    function X(L) {
      const y = ce(L.currentTime);
      c(y);
    }
    function ce(L) {
      const y = parseInt(L, 10), O = Math.floor(y / 3600), C = Math.floor((y - O * 3600) / 60), R = y - O * 3600 - C * 60, P = S(ie(O)), M = S(ie(C)), q = S(ie(R));
      return `${P}:${M}:${q}`;
    }
    function ie(L) {
      return L < 10 ? L = "0" + L : L;
    }
    function S(L) {
      return isNaN(L) ? "00" : L;
    }
  }
  function T(Z) {
    const X = K.current, ce = s ? z.current : G.current, S = Z.nativeEvent.offsetX / X.offsetWidth * ce.duration;
    ce.currentTime = S;
  }
  const A = (Z, X) => {
    u(!1), l(!1), X(Z), W();
  }, W = () => {
    const Z = oe.current;
    Z.style.flexBasis = "0%", w({
      state: !1,
      icon: Gr,
      label: "Reproducir video"
    });
  }, H = (Z, X) => {
    const { x: ce, y: ie } = _.deltaPosition;
    N({
      ..._,
      deltaPosition: {
        x: ce + X.deltaX,
        y: ie + X.deltaY
      }
    });
  };
  J(() => {
    W();
  }, [h, m]);
  const B = Q(null), z = Q(), G = Q(), K = Q(), oe = Q();
  return /* @__PURE__ */ p(kn, { nodeRef: B, handle: "strong", position: E, onDrag: H, children: /* @__PURE__ */ k(
    "div",
    {
      ref: B,
      className: `${he["menu-float"]} ${(s || f) && he["menu-float-active"]} ${he["menu-float-box"]} ${he.box} ${he["no-cursor"]}`,
      children: [
        /* @__PURE__ */ k("div", { className: he["menu-float-dropdown"], children: [
          (!s && !f || !!h && !s && !f || !!m && (s || f) || !!m && (s || f) && !s) && /* @__PURE__ */ k(
            "button",
            {
              onClick: () => {
                d || (A(!0, u), v(!0));
              },
              className: `${he["menu-float-btn"]} ${he["menu-float-btndrop"]} ${!s && !f && he["menu-float-btn-disable"]}`,
              "aria-label": "Intérprete de lenguaje de señas",
              children: [
                !s && !f && (n ? /* @__PURE__ */ p("img", { className: he["image-Video"], src: n }) : /* @__PURE__ */ k(
                  "svg",
                  {
                    id: "Capa_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    x: 0,
                    y: 0,
                    viewBox: "0 0 157.39 157.39",
                    style: {
                      enableBackground: "new 0 0 157.39 157.39"
                    },
                    xmlSpace: "preserve",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ p(
                        "path",
                        {
                          className: "st0",
                          d: "M76.31 74.62s9.79 5.59 11.53 7.69c1.75 2.1 2.45 5.59 0 6.64C85.4 90 48.7 82.31 45.9 81.79c-2.8-.52-4.89 5.61 0 7.26s14.68 2.35 17.83 3.75 4.89 4.89.7 4.54c-4.19-.35-22.02-2.45-25.86-2.8-3.84-.35-6.29 4.89-2.1 6.29 4.19 1.4 22.56 2.1 23.86 2.8s4.94 4.89.5 5.24c-4.44.35-18.07-.7-20.52 0-2.45.7-5.94 6.64 2.1 7.34s19.57 0 22.02 0c2.45 0 4.54 2.45.7 3.15s-11.18 2.1-13.98 3.15c-2.8 1.05-5.59 6.99 2.45 6.29 8.04-.7 43.69-5.59 47.53-5.94 3.84-.35 4.19-2.8 5.59-8.39s2.8-13.98 2.8-16.78-1.4-5.24-3.5-7.69-6.64-7.69-12.93-12.93c-6.29-5.24-11.03-7.09-12.93-8.04-3.5-1.74-6.84 3.83-3.85 5.59z"
                        }
                      ),
                      /* @__PURE__ */ p(
                        "path",
                        {
                          className: "st0",
                          d: "M119.84 50.55c-.52-3.87-7.01-3.51-6.79-.04 0 0 .87 11.24.12 13.86-.75 2.62-3.25 5.17-5.49 3.73-2.24-1.43-16.5-36.11-17.64-38.72-1.14-2.61-7.39-.89-6.01 4.08 1.39 4.97 6.31 13.46 6.92 16.85s-1.3 6.8-3.37 3.13-10.34-19.58-12.22-22.96-7.58-2.45-6.38 1.8c1.2 4.25 10.94 19.84 11.1 21.31.15 1.47-1.27 6.83-4.06 3.36-2.78-3.48-9.58-15.34-11.53-16.97-1.95-1.63-8.83-1.18-4.89 5.86s11 16.19 12.37 18.21c1.37 2.02.53 5.13-2.21 2.35-2.74-2.79-8.02-8.07-10.46-9.8s-8.92-.7-3.83 5.56c2.89 3.55 11.88 13.68 19.57 22.33 4.28.22 10.16.41 9.83-.26-.52-1.05-10.31-6.82-12.06-8.91-1.75-2.1-1.05-6.64 1.05-8.74 2.1-2.1 6.47-1.92 9.26-.7 2.8 1.22 16.78 10.49 19.75 13.98 1.89 2.22 6.31 7.68 9.29 11.37.17-.11.33-.21.47-.3 2.31-1.57 3.55-4.1 4.4-7.21s2.63-9.81 3.43-17.96c.8-8.14-.34-13.1-.62-15.21z"
                        }
                      ),
                      /* @__PURE__ */ p(
                        "path",
                        {
                          className: "st0",
                          d: "M78.7 157.39C35.3 157.39 0 122.09 0 78.7 0 35.3 35.3 0 78.7 0c43.39 0 78.69 35.3 78.69 78.7 0 43.39-35.3 78.69-78.69 78.69zm0-145.13c-36.63 0-66.44 29.8-66.44 66.44s29.8 66.44 66.44 66.44 66.44-29.8 66.44-66.44-29.81-66.44-66.44-66.44z"
                        }
                      )
                    ]
                  }
                )),
                /* @__PURE__ */ p(cp, {}),
                (s || f) && (s ? "1" : "2")
              ]
            }
          ),
          (s || f) && /* @__PURE__ */ k(bt, { children: [
            /* @__PURE__ */ k(
              "button",
              {
                tabIndex: -1,
                className: `${he["menu-float-btn"]} ${he.secondary}`,
                onClick: () => {
                  f && A(!0, u);
                },
                children: [
                  "1",
                  /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Aa, {}) })
                ]
              }
            ),
            /* @__PURE__ */ k(
              "button",
              {
                tabIndex: -1,
                className: `${he["menu-float-btn"]} ${he.secondary}`,
                onClick: () => {
                  s && A(!0, l);
                },
                children: [
                  "2",
                  /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Aa, {}) })
                ]
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                tabIndex: -1,
                className: `${he["menu-float-btn"]}`,
                onClick: () => !1,
                onMouseEnter: () => v(!0),
                onMouseLeave: () => v(!1),
                "aria-label": "Arrastrar video",
                children: /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(dp, {}) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${he["menu-float-btn"]} ${he.close}`,
                onClick: () => {
                  u(!1), l(!1), N({
                    deltaPosition: {
                      x: 0,
                      y: 0
                    }
                  }), v(!1);
                },
                onFocus: () => v(!0),
                onBlur: () => v(!0),
                "aria-label": "Cerrar",
                children: /* @__PURE__ */ p(up, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p("div", { className: `${he["c-vid-container"]} ${t}`, display: s || f ? "true" : "false", children: /* @__PURE__ */ k("div", { className: `${he["c-vid"]} ${t}`, style: { maxWidth: `${e}px` }, children: [
          s && /* @__PURE__ */ p(
            "video",
            {
              src: h,
              ref: z,
              onTimeUpdate: () => {
                x(), F();
              },
              className: `${he["no-captions"]}`
            }
          ),
          f && /* @__PURE__ */ p(
            "video",
            {
              src: m,
              ref: G,
              onTimeUpdate: () => {
                x(), F();
              },
              className: `${he["no-captions"]}`
            }
          ),
          /* @__PURE__ */ k("div", { className: he["c-vid-controls"], children: [
            /* @__PURE__ */ p("button", { "aria-label": b.label, onClick: I, children: b.icon }),
            /* @__PURE__ */ p("div", { className: he.flex, children: /* @__PURE__ */ k(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                focusable: "false",
                children: [
                  /* @__PURE__ */ p("path", { fill: "none", d: "M0 0h24v24H0z" }),
                  /* @__PURE__ */ p("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" })
                ]
              }
            ) }),
            /* @__PURE__ */ p("p", { className: he["c-vid-controls-text"], children: /* @__PURE__ */ p("span", { children: i }) }),
            /* @__PURE__ */ p("div", { className: he["progress-content"], children: /* @__PURE__ */ p("div", { ref: K, className: he.progress, onClick: T, children: /* @__PURE__ */ p("div", { ref: oe, className: he["progress-bar"], onChange: x }) }) })
          ] })
        ] }) })
      ]
    }
  ) });
};
ms.propTypes = {
  width: o.string,
  addClass: o.string,
  image: o.string,
  pathVideo: o.array,
  pathname: o.string
};
ms.defaultProps = {
  width: "210"
};
const cp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", viewBox: "0 96 960 960", width: "48", children: /* @__PURE__ */ p("path", { d: "M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" }) }), up = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "close",
    d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
  }
) }), dp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "open_with",
    d: "m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z"
  }
) }), Aa = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 96 960 960", "aria-hidden": "true", children: /* @__PURE__ */ p("path", { d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z" }) }), Gr = /* @__PURE__ */ k(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false",
    children: [
      /* @__PURE__ */ p("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ p("path", { d: "M8 5v14l11-7z" })
    ]
  }
), fp = /* @__PURE__ */ k(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "48px",
    viewBox: "0 0 24 24",
    width: "48px",
    fill: "#000000",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false",
    children: [
      /* @__PURE__ */ p("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ p("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
    ]
  }
), Ao = ut(), bs = ({ children: e, isVisible: t }) => {
  const [n, r] = ee(!1), a = Q(), i = () => r(!n), c = (s) => {
    a.current || (a.current = s);
  };
  return J(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p(Ao.Provider, { value: { isOpen: n, onOpen: i, setRefButton: c, refButton: a }, children: e });
};
bs.defaultProps = {
  isVisible: !1
};
bs.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const pp = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r, refButton: a, isOpen: i } = Te(Ao);
  if (Re.count(e) > 1)
    return null;
  const c = (l) => {
    n(), t && t(l);
  }, s = (l) => {
    var d;
    return !!(l && !((d = l.dataset) != null && d.popper) && l !== a.current);
  }, u = (l) => {
    i && s(l.relatedTarget) && n();
  }, f = (l) => {
    if (!ct(l))
      return null;
    const { onBlur: d, ...v } = l.props;
    return Pe(l, {
      ...v,
      ref: r,
      onClick: c,
      onBlur: (h) => {
        d == null || d(h), u(h);
      }
    });
  };
  return Re.map(e, f);
};
pp.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onClick: o.func
};
const vp = ({
  ref: e,
  onInteractionOutside: t,
  onInteractionOutsideStart: n
}) => {
  const a = Q({
    isPointerDown: !1,
    // Bandera para indicar si se ha hecho clic en el elemento
    onInteractionOutsideStart: n,
    onInteractionOutside: t
  }).current;
  a.onInteractionOutside = t, a.onInteractionOutsideStart = n, J(() => {
    const i = (s) => {
      Ma(s, e) && a.onInteractionOutside && (a.onInteractionOutsideStart && a.onInteractionOutsideStart(s), a.isPointerDown = !0);
    }, c = (s) => {
      a.isPointerDown && a.onInteractionOutside && Ma(s, e) && (a.onInteractionOutside(s), a.isPointerDown = !1);
    };
    return document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", c, !0), () => {
      document.removeEventListener("mousedown", i, !0), document.removeEventListener("mouseup", c, !0);
    };
  }, [e, a]);
};
function Ma(e, t) {
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
const Zr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, Xr = Object.freeze({
  ESC: 27,
  TAB: 9
}), hp = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', ys = ({
  id: e,
  children: t,
  addClass: n,
  hasArrow: r,
  isDisabled: a,
  distance: i,
  placement: c,
  disabledInteractOutside: s,
  defaultStyle: u
}) => {
  const { isOpen: f, onOpen: l, refButton: d } = Te(Ao), v = Q(), h = Q(), m = (E, I) => E === I.current;
  vp({ ref: h, onInteractionOutside: (E) => {
    !s && !m(E.target, d) && (l(), E.stopPropagation(), E.preventDefault());
  } });
  const w = (E) => {
    const I = v.current.querySelectorAll(hp), x = d.current, F = I[0], T = I[I.length - 1];
    if ((E.keyCode || E.which) === Xr.TAB && document.activeElement === T)
      return x.focus(), E.preventDefault();
    E.shiftKey && (E.keyCode || E.which) === Xr.TAB && document.activeElement === F && (x.focus(), E.preventDefault()), (E.keyCode || E.which) === Xr.ESC && x.focus();
  }, { styles: _, attributes: N } = yr(
    d.current,
    v.current,
    {
      placement: c,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, i || 8]
          }
        },
        {
          name: "flip",
          options: {
            padding: 10
          }
        },
        { name: "eventListeners", enabled: f }
      ]
    }
  );
  return J(() => {
    const E = v.current;
    f ? (E.focus(), h.current = E) : h.current = null;
  }, [f, v]), a ? /* @__PURE__ */ p(bt, { children: t }) : /* @__PURE__ */ p(dn, { id: "js-popover-modal-portal", children: /* @__PURE__ */ k(
    "div",
    {
      id: e,
      ref: v,
      role: "status",
      tabIndex: -1,
      className: te({
        [Zr["c-popover-modal"]]: !u,
        [Zr["c-popover-modal--active"]]: !u && f,
        "video-interpreter-ui-popover": "video-interpreter-ui-popover",
        [n]: n
      }),
      style: _.popper,
      onKeyDown: w,
      "data-hidden": !f,
      "data-popper": !0,
      ...!f && { hidden: !0 },
      ...N.popper,
      children: [
        t,
        r && /* @__PURE__ */ p(
          "div",
          {
            className: te({
              [Zr["c-popover-modal__arrow"]]: !u
            }),
            "data-class": "c-popover-modal__arrow",
            "data-popper-arrow": !0,
            style: _.arrow
          }
        )
      ]
    }
  ) });
};
ys.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.arrayOf(o.node),
    o.element,
    o.node
  ]),
  id: o.string,
  addClass: o.string,
  hasArrow: o.bool,
  isDisabled: o.bool,
  distance: o.number,
  defaultStyle: o.bool,
  disabledInteractOutside: o.bool,
  placement: o.oneOf([
    "auto",
    "auto-start",
    "auto-end",
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "right",
    "right-start",
    "right-end",
    "left",
    "left-start",
    "left-end"
  ])
};
ys.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  disabledInteractOutside: !1
};
const gp = (e, t) => {
  const [n, r] = ee(() => {
    if (typeof window > "u")
      return t;
    try {
      const i = window.localStorage.getItem(e);
      return i ? JSON.parse(i) : t;
    } catch (i) {
      return console.warn(`Error in useLocalStorage: ${i}`), t;
    }
  });
  return [n, (i) => {
    try {
      const c = i instanceof Function ? i(n) : i;
      r(c), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(c));
    } catch (c) {
      console.warn(`Error in useLocalStorage: ${c}`);
    }
  }];
}, mp = (e, t, n) => {
  const [r, a] = ee(n), i = e.map((s) => window.matchMedia(s)), c = () => {
    const s = i.findIndex((u) => u.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return J(() => {
    a(c);
    const s = (u) => a(c);
    return i.forEach((u) => u.addEventListener("change", s)), () => {
      i.forEach((u) => u.removeEventListener("change", s));
    };
  }, []), r;
}, wp = () => {
  const [e, t] = gp("dark-mode-enabled"), n = mp(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return J(() => {
    t(n);
  }, [n]), J(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, _s = (e) => {
  let t = {};
  for (const n in e)
    if (typeof e[n] == "object") {
      const r = _s(e[n]);
      for (const a in r)
        t = {
          ...t,
          [n.includes("accents") || n.includes("palette") ? a : `${n}-${a}`]: r[a]
        };
    } else
      t[n] = e[n];
  return t;
}, xp = (e) => _s(e);
export {
  Ls as Accordion,
  Ba as AccordionButton,
  qa as AccordionItem,
  Va as AccordionPanel,
  Ya as Audio,
  Wt as Button,
  Pu as ButtonSection,
  Ha as CheckBox,
  Al as CheckBoxGroup,
  kl as Col,
  jl as Content,
  vi as DragAndDrop,
  pi as DragAndDropContext,
  hi as Draggable,
  gi as Droppable,
  _p as Filter,
  mi as GeneralDraggable,
  Ce as Icon,
  bi as Image,
  yi as Input,
  vu as InputGroup,
  wi as InputLeftAddon,
  xi as InputRightAddon,
  _i as InputStyle,
  ms as Interpreter,
  gu as Kbd,
  Oi as Link,
  mu as List,
  Ti as ListItem,
  Si as Modal,
  wu as ModalCloseButton,
  Ci as ModalContent,
  vr as ModalContext,
  Pi as ModalOverlay,
  ki as NavSection,
  Ii as NumberDecrementStepper,
  Ai as NumberIncrementStepper,
  Ri as NumberInput,
  hr as NumberInputContext,
  Di as NumberInputField,
  Ni as NumberInputStepper,
  bu as OrderedList,
  Mi as Pagination,
  wo as PaginationItem,
  Tu as Panel,
  gr as PanelContext,
  Du as Paper,
  bs as PopoverModal,
  pp as PopoverModalButton,
  ys as PopoverModalContent,
  Ao as PopoverModalContext,
  dn as Portal,
  ku as Row,
  $i as Section,
  Li as Select,
  Lu as SelectGroup,
  ji as Switch,
  Fi as Tab,
  Bi as TabList,
  qi as TabPanel,
  Vi as TabPanels,
  ju as Tabs,
  xo as TabsContext,
  Yi as TextArea,
  Fu as ThemeProvider,
  Ji as Toggletip,
  es as Tooltip,
  ts as Tour,
  Ro as TourContext,
  ns as TourElement,
  rf as TourHelpLayer,
  yu as UnorderedList,
  rs as Video,
  xp as createTheme,
  wp as useDarkMode,
  vp as useInteractOutside,
  gp as useLocalStorage,
  mp as useMedia,
  qs as useOnScreen,
  xu as usePagination,
  Au as usePortal
};
