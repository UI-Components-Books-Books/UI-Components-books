import * as zt from "react";
import $e, { Children as De, useState as G, useEffect as H, isValidElement as st, cloneElement as Pe, forwardRef as yt, useRef as W, useId as Ot, useLayoutEffect as sr, useMemo as we, useCallback as ke, createContext as lt, memo as Da, useReducer as so, useContext as Ee, createElement as gs } from "react";
import * as ms from "react-dom";
import Ra, { unstable_batchedUpdates as hn, createPortal as Na } from "react-dom";
var Un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function bs(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
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
var Xr = { exports: {} }, vn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ao;
function ys() {
  if (Ao)
    return vn;
  Ao = 1;
  var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, d, f) {
    var l, u = {}, v = null, h = null;
    f !== void 0 && (v = "" + f), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (h = d.ref);
    for (l in d)
      r.call(d, l) && !i.hasOwnProperty(l) && (u[l] = d[l]);
    if (s && s.defaultProps)
      for (l in d = s.defaultProps, d)
        u[l] === void 0 && (u[l] = d[l]);
    return { $$typeof: t, type: s, key: v, ref: h, props: u, _owner: a.current };
  }
  return vn.Fragment = n, vn.jsx = c, vn.jsxs = c, vn;
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
var $o;
function _s() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, y = "@@iterator";
    function T(g) {
      if (g === null || typeof g != "object")
        return null;
      var R = b && g[b] || g[y];
      return typeof R == "function" ? R : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(g) {
      {
        for (var R = arguments.length, L = new Array(R > 1 ? R - 1 : 0), oe = 1; oe < R; oe++)
          L[oe - 1] = arguments[oe];
        _("error", g, L);
      }
    }
    function _(g, R, L) {
      {
        var oe = w.ReactDebugCurrentFrame, de = oe.getStackAddendum();
        de !== "" && (R += "%s", L = L.concat([de]));
        var he = L.map(function(ce) {
          return String(ce);
        });
        he.unshift("Warning: " + R), Function.prototype.apply.call(console[g], console, he);
      }
    }
    var S = !1, m = !1, P = !1, x = !1, C = !1, k;
    k = Symbol.for("react.module.reference");
    function j(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || C || g === a || g === f || g === l || x || g === h || S || m || P || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === u || g.$$typeof === c || g.$$typeof === s || g.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === k || g.getModuleId !== void 0));
    }
    function N(g, R, L) {
      var oe = g.displayName;
      if (oe)
        return oe;
      var de = R.displayName || R.name || "";
      return de !== "" ? L + "(" + de + ")" : L;
    }
    function $(g) {
      return g.displayName || "Context";
    }
    function B(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
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
            var R = g;
            return $(R) + ".Consumer";
          case c:
            var L = g;
            return $(L._context) + ".Provider";
          case d:
            return N(g, g.render, "ForwardRef");
          case u:
            var oe = g.displayName || null;
            return oe !== null ? oe : B(g.type) || "Memo";
          case v: {
            var de = g, he = de._payload, ce = de._init;
            try {
              return B(ce(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, te = 0, Y, X, le, Z, O, I, F;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function z() {
      {
        if (te === 0) {
          Y = console.log, X = console.info, le = console.warn, Z = console.error, O = console.group, I = console.groupCollapsed, F = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: U,
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
        te++;
      }
    }
    function Q() {
      {
        if (te--, te === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, g, {
              value: Y
            }),
            info: q({}, g, {
              value: X
            }),
            warn: q({}, g, {
              value: le
            }),
            error: q({}, g, {
              value: Z
            }),
            group: q({}, g, {
              value: O
            }),
            groupCollapsed: q({}, g, {
              value: I
            }),
            groupEnd: q({}, g, {
              value: F
            })
          });
        }
        te < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = w.ReactCurrentDispatcher, J;
    function ee(g, R, L) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (de) {
            var oe = de.stack.trim().match(/\n( *(at )?)/);
            J = oe && oe[1] || "";
          }
        return `
` + J + g;
      }
    }
    var ae = !1, K;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ve();
    }
    function M(g, R) {
      if (!g || ae)
        return "";
      {
        var L = K.get(g);
        if (L !== void 0)
          return L;
      }
      var oe;
      ae = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = V.current, V.current = null, z();
      try {
        if (R) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (Et) {
              oe = Et;
            }
            Reflect.construct(g, [], ce);
          } else {
            try {
              ce.call();
            } catch (Et) {
              oe = Et;
            }
            g.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            oe = Et;
          }
          g();
        }
      } catch (Et) {
        if (Et && oe && typeof Et.stack == "string") {
          for (var se = Et.stack.split(`
`), Fe = oe.stack.split(`
`), Te = se.length - 1, Ce = Fe.length - 1; Te >= 1 && Ce >= 0 && se[Te] !== Fe[Ce]; )
            Ce--;
          for (; Te >= 1 && Ce >= 0; Te--, Ce--)
            if (se[Te] !== Fe[Ce]) {
              if (Te !== 1 || Ce !== 1)
                do
                  if (Te--, Ce--, Ce < 0 || se[Te] !== Fe[Ce]) {
                    var nt = `
` + se[Te].replace(" at new ", " at ");
                    return g.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", g.displayName)), typeof g == "function" && K.set(g, nt), nt;
                  }
                while (Te >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        ae = !1, V.current = he, Q(), Error.prepareStackTrace = de;
      }
      var Xt = g ? g.displayName || g.name : "", Mo = Xt ? ee(Xt) : "";
      return typeof g == "function" && K.set(g, Mo), Mo;
    }
    function A(g, R, L) {
      return M(g, !1);
    }
    function re(g) {
      var R = g.prototype;
      return !!(R && R.isReactComponent);
    }
    function ie(g, R, L) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return M(g, re(g));
      if (typeof g == "string")
        return ee(g);
      switch (g) {
        case f:
          return ee("Suspense");
        case l:
          return ee("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case d:
            return A(g.render);
          case u:
            return ie(g.type, R, L);
          case v: {
            var oe = g, de = oe._payload, he = oe._init;
            try {
              return ie(he(de), R, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Qe = {}, xt = w.ReactDebugCurrentFrame;
    function Je(g) {
      if (g) {
        var R = g._owner, L = ie(g.type, g._source, R ? R.type : null);
        xt.setExtraStackFrame(L);
      } else
        xt.setExtraStackFrame(null);
    }
    function Oe(g, R, L, oe, de) {
      {
        var he = Function.call.bind(Se);
        for (var ce in g)
          if (he(g, ce)) {
            var se = void 0;
            try {
              if (typeof g[ce] != "function") {
                var Fe = Error((oe || "React class") + ": " + L + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fe.name = "Invariant Violation", Fe;
              }
              se = g[ce](R, ce, oe, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Te) {
              se = Te;
            }
            se && !(se instanceof Error) && (Je(de), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", L, ce, typeof se), Je(null)), se instanceof Error && !(se.message in Qe) && (Qe[se.message] = !0, Je(de), E("Failed %s type: %s", L, se.message), Je(null));
          }
      }
    }
    var ut = Array.isArray;
    function dt(g) {
      return ut(g);
    }
    function $t(g) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, L = R && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return L;
      }
    }
    function Ct(g) {
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
      if (Ct(g))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(g)), kt(g);
    }
    var Le = w.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pt, fn, et;
    et = {};
    function Vn(g) {
      if (Se.call(g, "ref")) {
        var R = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function xr(g) {
      if (Se.call(g, "key")) {
        var R = Object.getOwnPropertyDescriptor(g, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Tr(g, R) {
      if (typeof g.ref == "string" && Le.current && R && Le.current.stateNode !== R) {
        var L = B(Le.current.type);
        et[L] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Le.current.type), g.ref), et[L] = !0);
      }
    }
    function qn(g, R) {
      {
        var L = function() {
          Pt || (Pt = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        L.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function Er(g, R) {
      {
        var L = function() {
          fn || (fn = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        L.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var Yn = function(g, R, L, oe, de, he, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: R,
        ref: L,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: he
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Sr(g, R, L, oe, de) {
      {
        var he, ce = {}, se = null, Fe = null;
        L !== void 0 && (Lt(L), se = "" + L), xr(R) && (Lt(R.key), se = "" + R.key), Vn(R) && (Fe = R.ref, Tr(R, de));
        for (he in R)
          Se.call(R, he) && !ft.hasOwnProperty(he) && (ce[he] = R[he]);
        if (g && g.defaultProps) {
          var Te = g.defaultProps;
          for (he in Te)
            ce[he] === void 0 && (ce[he] = Te[he]);
        }
        if (se || Fe) {
          var Ce = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          se && qn(ce, Ce), Fe && Er(ce, Ce);
        }
        return Yn(g, se, Fe, de, oe, Le.current, ce);
      }
    }
    var pn = w.ReactCurrentOwner, zn = w.ReactDebugCurrentFrame;
    function be(g) {
      if (g) {
        var R = g._owner, L = ie(g.type, g._source, R ? R.type : null);
        zn.setExtraStackFrame(L);
      } else
        zn.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Me(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function pt() {
      {
        if (pn.current) {
          var g = B(pn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Be(g) {
      {
        if (g !== void 0) {
          var R = g.fileName.replace(/^.*[\\\/]/, ""), L = g.lineNumber;
          return `

Check your code at ` + R + ":" + L + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function tt(g) {
      {
        var R = pt();
        if (!R) {
          var L = typeof g == "string" ? g : g.displayName || g.name;
          L && (R = `

Check the top-level render call using <` + L + ">.");
        }
        return R;
      }
    }
    function Tt(g, R) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var L = tt(R);
        if (Ve[L])
          return;
        Ve[L] = !0;
        var oe = "";
        g && g._owner && g._owner !== pn.current && (oe = " It was passed a child from " + B(g._owner.type) + "."), be(g), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, oe), be(null);
      }
    }
    function qe(g, R) {
      {
        if (typeof g != "object")
          return;
        if (dt(g))
          for (var L = 0; L < g.length; L++) {
            var oe = g[L];
            Me(oe) && Tt(oe, R);
          }
        else if (Me(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var de = T(g);
          if (typeof de == "function" && de !== g.entries)
            for (var he = de.call(g), ce; !(ce = he.next()).done; )
              Me(ce.value) && Tt(ce.value, R);
        }
      }
    }
    function Ft(g) {
      {
        var R = g.type;
        if (R == null || typeof R == "string")
          return;
        var L;
        if (typeof R == "function")
          L = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === u))
          L = R.propTypes;
        else
          return;
        if (L) {
          var oe = B(R);
          Oe(L, g.props, "prop", oe, g);
        } else if (R.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var de = B(R);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jt(g) {
      {
        for (var R = Object.keys(g.props), L = 0; L < R.length; L++) {
          var oe = R[L];
          if (oe !== "children" && oe !== "key") {
            be(g), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), be(null);
            break;
          }
        }
        g.ref !== null && (be(g), E("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    function Bt(g, R, L, oe, de, he) {
      {
        var ce = j(g);
        if (!ce) {
          var se = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = Be(de);
          Fe ? se += Fe : se += pt();
          var Te;
          g === null ? Te = "null" : dt(g) ? Te = "array" : g !== void 0 && g.$$typeof === t ? (Te = "<" + (B(g.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof g, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, se);
        }
        var Ce = Sr(g, R, L, de, he);
        if (Ce == null)
          return Ce;
        if (ce) {
          var nt = R.children;
          if (nt !== void 0)
            if (oe)
              if (dt(nt)) {
                for (var Xt = 0; Xt < nt.length; Xt++)
                  qe(nt[Xt], g);
                Object.freeze && Object.freeze(nt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qe(nt, g);
        }
        return g === r ? jt(Ce) : Ft(Ce), Ce;
      }
    }
    function Gt(g, R, L) {
      return Bt(g, R, L, !0);
    }
    function Wn(g, R, L) {
      return Bt(g, R, L, !1);
    }
    var Vt = Wn, qt = Gt;
    gn.Fragment = r, gn.jsx = Vt, gn.jsxs = qt;
  }()), gn;
}
process.env.NODE_ENV === "production" ? Xr.exports = ys() : Xr.exports = _s();
var lo = Xr.exports;
const ot = lo.Fragment, p = lo.jsx, D = lo.jsxs;
var Kr = { exports: {} }, Hn = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function ws() {
  if (ko)
    return fe;
  ko = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function _(m) {
    if (typeof m == "object" && m !== null) {
      var P = m.$$typeof;
      switch (P) {
        case t:
          switch (m = m.type, m) {
            case d:
            case f:
            case r:
            case i:
            case a:
            case u:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case l:
                case b:
                case h:
                case c:
                  return m;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function S(m) {
    return _(m) === f;
  }
  return fe.AsyncMode = d, fe.ConcurrentMode = f, fe.ContextConsumer = s, fe.ContextProvider = c, fe.Element = t, fe.ForwardRef = l, fe.Fragment = r, fe.Lazy = b, fe.Memo = h, fe.Portal = n, fe.Profiler = i, fe.StrictMode = a, fe.Suspense = u, fe.isAsyncMode = function(m) {
    return S(m) || _(m) === d;
  }, fe.isConcurrentMode = S, fe.isContextConsumer = function(m) {
    return _(m) === s;
  }, fe.isContextProvider = function(m) {
    return _(m) === c;
  }, fe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, fe.isForwardRef = function(m) {
    return _(m) === l;
  }, fe.isFragment = function(m) {
    return _(m) === r;
  }, fe.isLazy = function(m) {
    return _(m) === b;
  }, fe.isMemo = function(m) {
    return _(m) === h;
  }, fe.isPortal = function(m) {
    return _(m) === n;
  }, fe.isProfiler = function(m) {
    return _(m) === i;
  }, fe.isStrictMode = function(m) {
    return _(m) === a;
  }, fe.isSuspense = function(m) {
    return _(m) === u;
  }, fe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === f || m === i || m === a || m === u || m === v || typeof m == "object" && m !== null && (m.$$typeof === b || m.$$typeof === h || m.$$typeof === c || m.$$typeof === s || m.$$typeof === l || m.$$typeof === T || m.$$typeof === w || m.$$typeof === E || m.$$typeof === y);
  }, fe.typeOf = _, fe;
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
var Lo;
function xs() {
  return Lo || (Lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function _(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === f || M === i || M === a || M === u || M === v || typeof M == "object" && M !== null && (M.$$typeof === b || M.$$typeof === h || M.$$typeof === c || M.$$typeof === s || M.$$typeof === l || M.$$typeof === T || M.$$typeof === w || M.$$typeof === E || M.$$typeof === y);
    }
    function S(M) {
      if (typeof M == "object" && M !== null) {
        var A = M.$$typeof;
        switch (A) {
          case t:
            var re = M.type;
            switch (re) {
              case d:
              case f:
              case r:
              case i:
              case a:
              case u:
                return re;
              default:
                var ie = re && re.$$typeof;
                switch (ie) {
                  case s:
                  case l:
                  case b:
                  case h:
                  case c:
                    return ie;
                  default:
                    return A;
                }
            }
          case n:
            return A;
        }
      }
    }
    var m = d, P = f, x = s, C = c, k = t, j = l, N = r, $ = b, B = h, q = n, te = i, Y = a, X = u, le = !1;
    function Z(M) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(M) || S(M) === d;
    }
    function O(M) {
      return S(M) === f;
    }
    function I(M) {
      return S(M) === s;
    }
    function F(M) {
      return S(M) === c;
    }
    function U(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function z(M) {
      return S(M) === l;
    }
    function Q(M) {
      return S(M) === r;
    }
    function V(M) {
      return S(M) === b;
    }
    function J(M) {
      return S(M) === h;
    }
    function ee(M) {
      return S(M) === n;
    }
    function ae(M) {
      return S(M) === i;
    }
    function K(M) {
      return S(M) === a;
    }
    function ve(M) {
      return S(M) === u;
    }
    pe.AsyncMode = m, pe.ConcurrentMode = P, pe.ContextConsumer = x, pe.ContextProvider = C, pe.Element = k, pe.ForwardRef = j, pe.Fragment = N, pe.Lazy = $, pe.Memo = B, pe.Portal = q, pe.Profiler = te, pe.StrictMode = Y, pe.Suspense = X, pe.isAsyncMode = Z, pe.isConcurrentMode = O, pe.isContextConsumer = I, pe.isContextProvider = F, pe.isElement = U, pe.isForwardRef = z, pe.isFragment = Q, pe.isLazy = V, pe.isMemo = J, pe.isPortal = ee, pe.isProfiler = ae, pe.isStrictMode = K, pe.isSuspense = ve, pe.isValidElementType = _, pe.typeOf = S;
  }()), pe;
}
var Fo;
function Ia() {
  return Fo || (Fo = 1, process.env.NODE_ENV === "production" ? Hn.exports = ws() : Hn.exports = xs()), Hn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Or, jo;
function Ts() {
  if (jo)
    return Or;
  jo = 1;
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
      var d = Object.getOwnPropertyNames(c).map(function(l) {
        return c[l];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        f[l] = l;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Or = a() ? Object.assign : function(i, c) {
    for (var s, d = r(i), f, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var u in s)
        t.call(s, u) && (d[u] = s[u]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          n.call(s, f[v]) && (d[f[v]] = s[f[v]]);
      }
    }
    return d;
  }, Or;
}
var Cr, Bo;
function co() {
  if (Bo)
    return Cr;
  Bo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Cr = e, Cr;
}
var Pr, Vo;
function Ma() {
  return Vo || (Vo = 1, Pr = Function.call.bind(Object.prototype.hasOwnProperty)), Pr;
}
var Dr, qo;
function Es() {
  if (qo)
    return Dr;
  qo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = co(), n = {}, r = Ma();
    e = function(i) {
      var c = "Warning: " + i;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function a(i, c, s, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (r(i, l)) {
          var u;
          try {
            if (typeof i[l] != "function") {
              var v = Error(
                (d || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            u = i[l](c, l, d, s, null, t);
          } catch (b) {
            u = b;
          }
          if (u && !(u instanceof Error) && e(
            (d || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = !0;
            var h = f ? f() : "";
            e(
              "Failed " + s + " type: " + u.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Dr = a, Dr;
}
var Rr, Yo;
function Ss() {
  if (Yo)
    return Rr;
  Yo = 1;
  var e = Ia(), t = Ts(), n = co(), r = Ma(), a = Es(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var d = "Warning: " + s;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Rr = function(s, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function u(O) {
      var I = O && (f && O[f] || O[l]);
      if (typeof I == "function")
        return I;
    }
    var v = "<<anonymous>>", h = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: E(),
      arrayOf: _,
      element: S(),
      elementType: m(),
      instanceOf: P,
      node: j(),
      objectOf: C,
      oneOf: x,
      oneOfType: k,
      shape: $,
      exact: B
    };
    function b(O, I) {
      return O === I ? O !== 0 || 1 / O === 1 / I : O !== O && I !== I;
    }
    function y(O, I) {
      this.message = O, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function T(O) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, F = 0;
      function U(Q, V, J, ee, ae, K, ve) {
        if (ee = ee || v, K = K || J, ve !== n) {
          if (d) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var A = ee + ":" + J;
            !I[A] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[A] = !0, F++);
          }
        }
        return V[J] == null ? Q ? V[J] === null ? new y("The " + ae + " `" + K + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new y("The " + ae + " `" + K + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : O(V, J, ee, ae, K);
      }
      var z = U.bind(null, !1);
      return z.isRequired = U.bind(null, !0), z;
    }
    function w(O) {
      function I(F, U, z, Q, V, J) {
        var ee = F[U], ae = Y(ee);
        if (ae !== O) {
          var K = X(ee);
          return new y(
            "Invalid " + Q + " `" + V + "` of type " + ("`" + K + "` supplied to `" + z + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return T(I);
    }
    function E() {
      return T(c);
    }
    function _(O) {
      function I(F, U, z, Q, V) {
        if (typeof O != "function")
          return new y("Property `" + V + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var J = F[U];
        if (!Array.isArray(J)) {
          var ee = Y(J);
          return new y("Invalid " + Q + " `" + V + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected an array."));
        }
        for (var ae = 0; ae < J.length; ae++) {
          var K = O(J, ae, z, Q, V + "[" + ae + "]", n);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return T(I);
    }
    function S() {
      function O(I, F, U, z, Q) {
        var V = I[F];
        if (!s(V)) {
          var J = Y(V);
          return new y("Invalid " + z + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(O);
    }
    function m() {
      function O(I, F, U, z, Q) {
        var V = I[F];
        if (!e.isValidElementType(V)) {
          var J = Y(V);
          return new y("Invalid " + z + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(O);
    }
    function P(O) {
      function I(F, U, z, Q, V) {
        if (!(F[U] instanceof O)) {
          var J = O.name || v, ee = Z(F[U]);
          return new y("Invalid " + Q + " `" + V + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return T(I);
    }
    function x(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function I(F, U, z, Q, V) {
        for (var J = F[U], ee = 0; ee < O.length; ee++)
          if (b(J, O[ee]))
            return null;
        var ae = JSON.stringify(O, function(ve, M) {
          var A = X(M);
          return A === "symbol" ? String(M) : M;
        });
        return new y("Invalid " + Q + " `" + V + "` of value `" + String(J) + "` " + ("supplied to `" + z + "`, expected one of " + ae + "."));
      }
      return T(I);
    }
    function C(O) {
      function I(F, U, z, Q, V) {
        if (typeof O != "function")
          return new y("Property `" + V + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var J = F[U], ee = Y(J);
        if (ee !== "object")
          return new y("Invalid " + Q + " `" + V + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected an object."));
        for (var ae in J)
          if (r(J, ae)) {
            var K = O(J, ae, z, Q, V + "." + ae, n);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return T(I);
    }
    function k(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var I = 0; I < O.length; I++) {
        var F = O[I];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(F) + " at index " + I + "."
          ), c;
      }
      function U(z, Q, V, J, ee) {
        for (var ae = [], K = 0; K < O.length; K++) {
          var ve = O[K], M = ve(z, Q, V, J, ee, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && ae.push(M.data.expectedType);
        }
        var A = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new y("Invalid " + J + " `" + ee + "` supplied to " + ("`" + V + "`" + A + "."));
      }
      return T(U);
    }
    function j() {
      function O(I, F, U, z, Q) {
        return q(I[F]) ? null : new y("Invalid " + z + " `" + Q + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return T(O);
    }
    function N(O, I, F, U, z) {
      return new y(
        (O || "React class") + ": " + I + " type `" + F + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function $(O) {
      function I(F, U, z, Q, V) {
        var J = F[U], ee = Y(J);
        if (ee !== "object")
          return new y("Invalid " + Q + " `" + V + "` of type `" + ee + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var ae in O) {
          var K = O[ae];
          if (typeof K != "function")
            return N(z, Q, V, ae, X(K));
          var ve = K(J, ae, z, Q, V + "." + ae, n);
          if (ve)
            return ve;
        }
        return null;
      }
      return T(I);
    }
    function B(O) {
      function I(F, U, z, Q, V) {
        var J = F[U], ee = Y(J);
        if (ee !== "object")
          return new y("Invalid " + Q + " `" + V + "` of type `" + ee + "` " + ("supplied to `" + z + "`, expected `object`."));
        var ae = t({}, F[U], O);
        for (var K in ae) {
          var ve = O[K];
          if (r(O, K) && typeof ve != "function")
            return N(z, Q, V, K, X(ve));
          if (!ve)
            return new y(
              "Invalid " + Q + " `" + V + "` key `" + K + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(F[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var M = ve(J, K, z, Q, V + "." + K, n);
          if (M)
            return M;
        }
        return null;
      }
      return T(I);
    }
    function q(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(q);
          if (O === null || s(O))
            return !0;
          var I = u(O);
          if (I) {
            var F = I.call(O), U;
            if (I !== O.entries) {
              for (; !(U = F.next()).done; )
                if (!q(U.value))
                  return !1;
            } else
              for (; !(U = F.next()).done; ) {
                var z = U.value;
                if (z && !q(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(O, I) {
      return O === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function Y(O) {
      var I = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : te(I, O) ? "symbol" : I;
    }
    function X(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var I = Y(O);
      if (I === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function le(O) {
      var I = X(O);
      switch (I) {
        case "array":
        case "object":
          return "an " + I;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + I;
        default:
          return I;
      }
    }
    function Z(O) {
      return !O.constructor || !O.constructor.name ? v : O.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Rr;
}
var Nr, zo;
function Os() {
  if (zo)
    return Nr;
  zo = 1;
  var e = co();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Nr = function() {
    function r(c, s, d, f, l, u) {
      if (u !== e) {
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
  }, Nr;
}
if (process.env.NODE_ENV !== "production") {
  var Cs = Ia(), Ps = !0;
  Kr.exports = Ss()(Cs.isElement, Ps);
} else
  Kr.exports = Os()();
var uo = Kr.exports;
const o = /* @__PURE__ */ $n(uo), Ds = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ue = (e, t) => De.toArray(e).filter((n) => t.indexOf(Ds(n)) !== -1), Rs = ({ children: e, allowMultiple: t, defaultIndex: n, allowDifferentChildren: r }) => {
  const [a, i] = G(), c = (d) => {
    t ? a.includes(d) ? i(a.filter((f) => f !== d)) : i([...a, d]) : i(d);
  };
  H(() => (i(t ? n || [] : n ?? null), () => {
    i(null);
  }), [t, n]);
  const s = De.map(e, (d, f) => st(d) ? Pe(d, { ...d.props, id: f, isOpen: a, onToggle: c }) : null);
  return /* @__PURE__ */ p("div", { children: r ? s : Ue(s, ["AccordionItem"]) });
};
Rs.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  allowDifferentChildren: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
var Aa = { exports: {} };
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
            for (var d in i)
              t.call(i, d) && i[d] && r.push(d);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Aa);
var Ns = Aa.exports;
const ne = /* @__PURE__ */ $n(Ns), me = (e) => (t, n, r) => {
  if (t[n] !== e)
    return new Error(
      `'${n}' in '${r}' 

 NO puedes pasar un valor de props para '${n}'.La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.`
    );
}, tr = {
  "c-accordion__item": "_c-accordion__item_s7jwr_1",
  "c-accordion__button": "_c-accordion__button_s7jwr_10",
  "c-accordion__panel": "_c-accordion__panel_s7jwr_29",
  "c-accordion__panel-content": "_c-accordion__panel-content_s7jwr_48"
}, $a = ({
  children: e,
  id: t,
  onExpanded: n,
  isExpanded: r,
  expanded: a,
  addClass: i,
  icon: c,
  defaultStyle: s,
  __TYPE: d,
  ...f
}) => /* @__PURE__ */ D(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: ne({
      [`${tr["c-accordion__button"]} u-flex`]: !s,
      [i]: i,
      [r]: a
    }),
    onClick: n,
    "data-type": d,
    ...f,
    children: [
      e,
      c && c(r)
    ]
  }
);
$a.propTypes = {
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
$a.defaultProps = {
  __TYPE: "AccordionButton"
};
const ka = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a, defaultStyle: i, allowDifferentChildren: c }) => {
  const s = () => r(t), d = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, f = De.map(e, (l) => st(l) ? l.props.__TYPE === "AccordionButton" ? Pe(l, { ...l.props, id: t, onExpanded: s, isExpanded: d() }) : Pe(l, { ...l.props, id: t, isExpanded: d() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: ne({
        [tr["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: c ? f : Ue(f, ["AccordionButton", "AccordionPanel"])
    }
  );
};
ka.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  defaultStyle: o.bool,
  allowDifferentChildren: o.bool,
  __TYPE: me("AccordionItem")
};
ka.defaultProps = {
  __TYPE: "AccordionItem"
};
const La = ({
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
    className: ne(tr["c-accordion__panel"], {
      [r]: r
    }),
    ...c,
    children: /* @__PURE__ */ p(
      "div",
      {
        className: ne({
          [tr["c-accordion__panel-content"]]: !a
        }),
        children: e
      }
    )
  }
);
La.propTypes = {
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
La.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Zn = {
  "c-icon": "_c-icon_13de5_1",
  "c-small": "_c-small_13de5_10",
  "c-normal": "_c-normal_13de5_14",
  "c-big": "_c-big_13de5_18"
}, Is = /\w+\.svg/gi, _e = ({
  children: e,
  path: t,
  size: n,
  addClass: r,
  viewBox: a,
  width: i,
  height: c,
  __TYPE: s,
  ...d
}) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", { children: "Doesn't exist" });
  if (De.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const f = t && t.match(Is).toString().replace(/.svg/gi, ""), l = `${t}#${f}`;
  return e ? Pe(e, {
    ...e.props,
    className: `${Zn["c-icon"]} ${Zn[`c-${n}`]} ${r ?? ""}`,
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
      className: `${Zn["c-icon"]} ${Zn[`c-${n}`]} ${r ?? ""}`,
      "aria-hidden": "true",
      "data-testid": f,
      "data-component": s,
      ...d,
      children: /* @__PURE__ */ p("use", { xlinkHref: l })
    }
  );
};
_e.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  path: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  addClass: o.string,
  viewBox: o.string,
  height: o.string,
  width: o.string,
  __TYPE: me("Icon")
};
_e.defaultProps = {
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
}, Wt = yt((e, t) => {
  const {
    label: n,
    size: r,
    icon: a,
    type: i,
    variant: c,
    hasAriaLabel: s,
    disabled: d,
    onClick: f,
    children: l,
    addClass: u,
    defaultStyle: v,
    ...h
  } = e;
  return /* @__PURE__ */ D(
    "button",
    {
      ref: t,
      className: ne({
        [`${mn["c-button"]} ${mn[`c-${c}`]} ${mn[`c-${r}`]}`]: !v,
        [mn["c-round"]]: a && a.path && s,
        [mn["c-reverse"]]: a && a.position === "right",
        [u]: u
      }),
      disabled: d,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...h,
      children: [
        l,
        a && /* @__PURE__ */ p(_e, { path: a.path, size: a.size }),
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
const Ms = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), Fa = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || Ms, [a, i] = G(!1), [c, s] = G(null);
  return H(() => {
    if (!c) {
      i(!1);
      return;
    }
    const d = new window.IntersectionObserver(
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
    return d.observe(c), () => {
      d.unobserve(c);
    };
  }, [r, n, t, c]), [s, a];
}, ja = ({
  ref: e,
  onInteractionOutside: t,
  onInteractionOutsideStart: n
}) => {
  const a = W({
    isPointerDown: !1,
    // Bandera para indicar si se ha hecho clic en el elemento
    onInteractionOutsideStart: n,
    onInteractionOutside: t
  }).current;
  a.onInteractionOutside = t, a.onInteractionOutsideStart = n, H(() => {
    const i = (s) => {
      Wo(s, e) && a.onInteractionOutside && (a.onInteractionOutsideStart && a.onInteractionOutsideStart(s), a.isPointerDown = !0);
    }, c = (s) => {
      a.isPointerDown && a.onInteractionOutside && Wo(s, e) && (a.onInteractionOutside(s), a.isPointerDown = !1);
    };
    return document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", c, !0), () => {
      document.removeEventListener("mousedown", i, !0), document.removeEventListener("mouseup", c, !0);
    };
  }, [e, a]);
};
function Wo(e, t) {
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
const As = "_scrubber_6xazl_142", Ze = {
  "c-audio": "_c-audio_6xazl_1",
  "c-audio--small": "_c-audio--small_6xazl_15",
  "c-audio--hidden": "_c-audio--hidden_6xazl_29",
  "c-button": "_c-button_6xazl_33",
  "is-button-paused": "_is-button-paused_6xazl_66",
  "is-button-playing": "_is-button-playing_6xazl_74",
  "audio-bar": "_audio-bar_6xazl_82",
  "volume-control": "_volume-control_6xazl_129",
  scrubber: As,
  "volume-btn": "_volume-btn_6xazl_147",
  "hidden-box": "_hidden-box_6xazl_151",
  "hidden-description": "_hidden-description_6xazl_159"
}, $s = Object.freeze({
  BUTTON: "Button",
  BAR: "Bar"
}), Kt = Object.freeze({
  play: /* @__PURE__ */ p("path", { id: "play", d: "M306-184v-598l471 299-471 299Z" }),
  pause: /* @__PURE__ */ p("path", { id: "pause", d: "M550-186v-590h201v590H550Zm-340 0v-590h201v590H210Z" }),
  volume_on: /* @__PURE__ */ p(
    "path",
    {
      id: "volume_on",
      d: "M552-94v-75q108-28 176-115t68-198q0-110-68-196.5T552-793v-75q139 28 228 136.5T869-482q0 143-88.5 252T552-94ZM91-350v-260h167l214-215v690L258-350H91Zm441 44v-348q57 18 91.5 66T658-480q0 60-34.5 108T532-306Z"
    }
  ),
  volume_down: /* @__PURE__ */ p(
    "path",
    {
      id: "volume_down",
      d: "M173-337v-287h173l233-231v750L346-337H173Zm466 33v-353q55 18 92 67.5T768-480q0 60-37 108t-92 68Z"
    }
  ),
  volume_off: /* @__PURE__ */ p(
    "path",
    {
      id: "volume_off",
      d: "M821-37 697-160q-34 23-72.5 40T543-94v-75q27-7 52.5-17t48.5-27L463-395v260L249-350H82v-260h165L27-831l52-52L873-90l-52 53Zm-14-247-54-54q18-33 26-69t8-75q0-112-67.5-200.5T543-793v-75q139 28 228 136.5T860-482q0 53-13.5 103T807-284ZM644-447 543-548v-99q49 23 77.5 68t28.5 99q0 9-1 17t-4 16ZM463-628l-98-99 98-98v197Z"
    }
  ),
  a11y: /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ p(
      "path",
      {
        fill: "currentColor",
        d: "M23 14v-2H9v2h5v2.734l-3.868 6.77 1.736.992L15.58 18h.84l3.712 6.496 1.736-.992L18 16.734V14h5z"
      }
    ),
    /* @__PURE__ */ p("circle", { cx: "16", cy: "9", r: "2", fill: "currentColor" }),
    /* @__PURE__ */ p(
      "path",
      {
        fill: "currentColor",
        d: "M16 30a14 14 0 1 1 14-14 14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"
      }
    )
  ] })
}), Ba = ({
  src: e,
  format: t,
  a11y: n,
  size: r,
  type: a,
  addClass: i,
  defaultStyle: c,
  hasDescription: s = !1,
  description: d,
  ...f
}) => {
  const [l, u] = G(!1), [v, h] = G(!1), b = Ot(), [y, T] = G(0), [w, E] = G(0), [_, S] = G(0), m = W(), P = W(), x = W(null), C = W(null), k = (Z, O) => Z === O.current;
  ja({ ref: C, onInteractionOutside: (Z) => {
    k(Z.target, x) || (h(!1), Z.stopPropagation(), Z.preventDefault());
  } });
  const [N, $] = Fa(), B = (Z) => {
    m.current && (m.current.paused ? m.current.play() : m.current.pause(), u(!l));
  }, q = window.matchMedia("(any-hover: none) and (any-pointer: coarse)").matches, te = () => {
    E(Math.round(m.current.duration)), S(q ? 1 : m.current.volume);
  }, Y = () => {
    T(Math.round(m.current.currentTime));
  }, X = (Z) => {
    S(Z.target.volume);
  }, le = (Z) => {
    const O = parseFloat(Z.target.value);
    T(O), m.current.currentTime = O;
  };
  return H(() => {
    (l || !m.current.paused) && !$ && (u(!l), m.current.pause(), m.current.currentTime = 0);
  }, [$]), sr(() => {
    const Z = P.current;
    Z && N(Z);
  }, [P]), a === $s.BAR ? /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ D(
      "div",
      {
        className: `${Ze["audio-bar"]} ${i ?? ""}`,
        role: "group",
        "aria-labelledby": `description${b}`,
        "data-a11y": n,
        "data-class": "c-audio-bar",
        children: [
          /* @__PURE__ */ p(
            "div",
            {
              ref: P,
              className: Ze["hidden-box"],
              tabIndex: "-1",
              "aria-hidden": "true"
            }
          ),
          s ? /* @__PURE__ */ p("span", { id: `description${b}`, className: Ze["hidden-description"], children: n ? "Audio description" : `Barra de audio ${d}` }) : /* @__PURE__ */ p("span", { id: `description${b}`, hidden: !0, children: n ? "Audio description" : "Barra de audio" }),
          "//",
          " ",
          /* @__PURE__ */ D("span", { id: `description${b}`, hidden: !0, children: [
            "// ",
            n ? "Audio description" : "Barra de audio",
            "//",
            " "
          ] }),
          n ? /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: Kt.a11y }) }) : null,
          /* @__PURE__ */ D("button", { onClick: B, children: [
            /* @__PURE__ */ p("div", { className: "u-sr-only", children: l ? "Pausar" : "Reproducir" }),
            /* @__PURE__ */ p(_e, { size: "big", children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 -960 960 960", children: l ? Kt.pause : Kt.play }) })
          ] }),
          /* @__PURE__ */ D("small", { "aria-hidden": "true", children: [
            String(Math.floor(y / 60)).padStart(2, "0"),
            ":",
            String(y - 60 * Math.floor(y / 60)).padStart(2, "0"),
            " /",
            " ",
            String(Math.floor(w / 60)).padStart(2, "0"),
            ":",
            String(w - 60 * Math.floor(w / 60)).padStart(2, "0")
          ] }),
          /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `time${b}`, children: "Tiempo transcurrido" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: Ze.scrubber,
              id: `time${b}`,
              value: y,
              min: 0,
              max: w,
              "aria-valuetext": `${y} seconds`,
              onChange: le,
              type: "range"
            }
          ),
          /* @__PURE__ */ D(
            "button",
            {
              ref: x,
              "aria-expanded": v,
              className: Ze["volume-btn"],
              onClick: () => h(!v),
              children: [
                /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
                /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 -960 960 960", children: _ === 0 ? Kt.volume_off : _ <= 0.25 ? Kt.volume_down : Kt.volume_on }) })
              ]
            }
          ),
          v ? /* @__PURE__ */ D("div", { className: Ze["volume-control"], ref: C, children: [
            /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `volume${b}`, children: "Volumen" }),
            /* @__PURE__ */ p(
              "input",
              {
                id: `volume${b}`,
                value: _,
                min: 0,
                max: 1,
                step: 0.05,
                type: "range",
                "aria-valuetext": _ * 100,
                "aria-orientation": "vertical",
                orient: "vertical",
                onChange: (Z) => {
                  S(Z.target.value), m.current.volume = Z.target.value;
                }
              }
            )
          ] }) : null
        ]
      }
    ),
    /* @__PURE__ */ p(
      "audio",
      {
        ref: m,
        preload: "metadata",
        controls: !0,
        className: ne({
          [Ze["c-audio"]]: !c,
          [Ze[`c-audio--${r}`]]: r,
          [i]: i
        }),
        onLoadedMetadata: te,
        onTimeUpdate: Y,
        onPlay: () => u(!0),
        onPause: () => u(!1),
        onVolumeChange: (Z) => X(Z),
        "data-a11y": n,
        hidden: !0,
        children: /* @__PURE__ */ p("source", { src: e, type: t })
      }
    )
  ] }) : /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ p(
      "audio",
      {
        ref: m,
        src: e,
        type: t,
        onEnded: () => u(!l),
        className: Ze["c-audio--hidden"]
      }
    ),
    /* @__PURE__ */ p("div", { ref: P, className: Ze["hidden-box"], tabIndex: "-1", "aria-hidden": "true" }),
    /* @__PURE__ */ p(
      Wt,
      {
        label: l ? "Pausar" : "Reproduccir",
        "data-a11y": n,
        "data-class": "c-audio-button",
        addClass: ne({
          [Ze["c-button"]]: !c,
          [Ze["is-button-playing"]]: l,
          [Ze["is-button-paused"]]: !l,
          [i]: i
        }),
        onClick: B,
        hasAriaLabel: !0,
        ...c && { defaultStyle: c },
        ...n && { disabled: n },
        ...f
      }
    )
  ] });
};
Ba.defaultProps = {
  a11y: !1,
  type: "Bar"
};
Ba.propTypes = {
  src: o.string,
  a11y: o.bool,
  format: o.string,
  size: o.oneOf(["small"]),
  type: o.oneOf(["Bar", "Button"]),
  hasDescription: o.bool,
  description: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
var ks = typeof Un == "object" && Un && Un.Object === Object && Un, Ls = ks, Fs = Ls, js = typeof self == "object" && self && self.Object === Object && self, Bs = Fs || js || Function("return this")(), Vs = Bs, qs = Vs, Ys = qs.Symbol, fo = Ys;
function zs(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Ws = zs, Us = Array.isArray, Hs = Us, Uo = fo, Va = Object.prototype, Zs = Va.hasOwnProperty, Gs = Va.toString, bn = Uo ? Uo.toStringTag : void 0;
function Xs(e) {
  var t = Zs.call(e, bn), n = e[bn];
  try {
    e[bn] = void 0;
    var r = !0;
  } catch {
  }
  var a = Gs.call(e);
  return r && (t ? e[bn] = n : delete e[bn]), a;
}
var Ks = Xs, Qs = Object.prototype, Js = Qs.toString;
function el(e) {
  return Js.call(e);
}
var tl = el, Ho = fo, nl = Ks, rl = tl, ol = "[object Null]", al = "[object Undefined]", Zo = Ho ? Ho.toStringTag : void 0;
function il(e) {
  return e == null ? e === void 0 ? al : ol : Zo && Zo in Object(e) ? nl(e) : rl(e);
}
var sl = il;
function ll(e) {
  return e != null && typeof e == "object";
}
var cl = ll, ul = sl, dl = cl, fl = "[object Symbol]";
function pl(e) {
  return typeof e == "symbol" || dl(e) && ul(e) == fl;
}
var hl = pl, Go = fo, vl = Ws, gl = Hs, ml = hl, bl = 1 / 0, Xo = Go ? Go.prototype : void 0, Ko = Xo ? Xo.toString : void 0;
function qa(e) {
  if (typeof e == "string")
    return e;
  if (gl(e))
    return vl(e, qa) + "";
  if (ml(e))
    return Ko ? Ko.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -bl ? "-0" : t;
}
var yl = qa, _l = yl;
function wl(e) {
  return e == null ? "" : _l(e);
}
var xl = wl, Tl = xl, El = 0;
function Sl(e) {
  var t = ++El;
  return Tl(e) + t;
}
var Ol = Sl;
const Ya = /* @__PURE__ */ $n(Ol), Qt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, Cl = (e) => {
  const t = /* @__PURE__ */ p(
    "path",
    {
      id: "done_all",
      d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z"
    }
  ), n = /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }), r = /* @__PURE__ */ p(
    "path",
    {
      id: "close",
      d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
    }
  );
  return e === "checkbox" ? {
    right: t,
    wrong: r,
    normal: n
  } : {
    right: n,
    wrong: r,
    normal: null
  };
}, za = yt(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: c, isDisabled: s, defaultChecked: d, onChange: f, __TYPE: l, inherit: u, ...v }, h) => {
    const b = we(() => e || Ya(`ui-${n}`), [e, n]), y = Object.freeze(Cl(n)), T = ({ target: w }) => {
      if (f) {
        if (w.checked) {
          f({ id: w.id, value: w.value });
          return;
        }
        f({ id: w.id, value: "" });
      }
    };
    return /* @__PURE__ */ D(
      "label",
      {
        htmlFor: b,
        className: `c-input-radio ${Qt["c-input"]} u-flex ${c ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": l,
        ...!u && { ...v },
        children: [
          /* @__PURE__ */ D("div", { className: Qt["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: b,
                ref: h,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: Qt["c-input__check"],
                onChange: T,
                ...s && { disabled: !0 },
                ...u && { ...v },
                ...d && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${Qt["c-input__icon"]} ${d ? Qt["c-input-defaultChecked"] : ""} `, children: y[a] && /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", children: y[a] }) }) })
          ] }),
          /* @__PURE__ */ p("span", { className: Qt["c-input__label"], children: r })
        ]
      }
    );
  }
);
za.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
za.propTypes = {
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
const Pl = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = G([]), c = W(), s = (u) => {
    c.current = u || "";
  }, d = (u) => c.current === "radio" ? [{ ...u }] : a.filter((h) => h.id === u.id).length ? [...a.filter((h) => h.id !== u.id)] : [...a, { ...u }], f = (u) => {
    const v = d(u);
    n && n(v), i(v);
  }, l = De.map(t, (u) => st(u) ? u.props.__TYPE === "CheckBox" ? (u.props.type && s(u.props.type), Pe(u, { ...u.props, onChange: f })) : u : null);
  return /* @__PURE__ */ D("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Ue(l, ["CheckBox"]) })
  ] });
};
Pl.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const Dl = "_col_wu095_1", Rl = {
  col: Dl
}, Nl = yt(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Rl.col} ${e ?? ""}`, ...t }));
Nl.propTypes = {
  addClass: o.string
};
const Il = {
  "c-content": "_c-content_u325r_1"
}, Ml = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "section",
  {
    className: ne({
      [Il["c-content"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
Ml.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  defaultStyle: o.bool,
  addClass: o.string
};
const lr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function cn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function po(e) {
  return "nodeType" in e;
}
function He(e) {
  var t, n;
  return e ? cn(e) ? e : po(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ho(e) {
  const {
    Document: t
  } = He(e);
  return e instanceof t;
}
function kn(e) {
  return cn(e) ? !1 : e instanceof He(e).HTMLElement;
}
function Wa(e) {
  return e instanceof He(e).SVGElement;
}
function un(e) {
  return e ? cn(e) ? e.document : po(e) ? ho(e) ? e : kn(e) || Wa(e) ? e.ownerDocument : document : document : document;
}
const St = lr ? sr : H;
function vo(e) {
  const t = W(e);
  return St(() => {
    t.current = e;
  }), ke(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Al() {
  const e = W(null), t = ke((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = ke(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Dn(e, t) {
  t === void 0 && (t = [e]);
  const n = W(e);
  return St(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Ln(e, t) {
  const n = W();
  return we(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function nr(e) {
  const t = vo(e), n = W(null), r = ke(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Qr(e) {
  const t = W();
  return H(() => {
    t.current = e;
  }, [e]), t.current;
}
let Ir = {};
function cr(e, t) {
  return we(() => {
    if (t)
      return t;
    const n = Ir[e] == null ? 0 : Ir[e] + 1;
    return Ir[e] = n, e + "-" + n;
  }, [e, t]);
}
function Ua(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return r.reduce((i, c) => {
      const s = Object.entries(c);
      for (const [d, f] of s) {
        const l = i[d];
        l != null && (i[d] = l + e * f);
      }
      return i;
    }, {
      ...t
    });
  };
}
const tn = /* @__PURE__ */ Ua(1), rr = /* @__PURE__ */ Ua(-1);
function $l(e) {
  return "clientX" in e && "clientY" in e;
}
function Ha(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = He(e.target);
  return t && e instanceof t;
}
function kl(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = He(e.target);
  return t && e instanceof t;
}
function Jr(e) {
  if (kl(e)) {
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
  return $l(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Qo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Ll(e) {
  return e.matches(Qo) ? e : e.querySelector(Qo);
}
const Fl = {
  display: "none"
};
function jl(e) {
  let {
    id: t,
    value: n
  } = e;
  return $e.createElement("div", {
    id: t,
    style: Fl
  }, n);
}
function Bl(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const a = {
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
  return $e.createElement("div", {
    id: t,
    style: a,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Vl() {
  const [e, t] = G("");
  return {
    announce: ke((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Za = /* @__PURE__ */ lt(null);
function ql(e) {
  const t = Ee(Za);
  H(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Yl() {
  const [e] = G(() => /* @__PURE__ */ new Set()), t = ke((r) => (e.add(r), () => e.delete(r)), [e]);
  return [ke((r) => {
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
const zl = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Wl = {
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
function Ul(e) {
  let {
    announcements: t = Wl,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: a = zl
  } = e;
  const {
    announce: i,
    announcement: c
  } = Vl(), s = cr("DndLiveRegion"), [d, f] = G(!1);
  if (H(() => {
    f(!0);
  }, []), ql(we(() => ({
    onDragStart(u) {
      let {
        active: v
      } = u;
      i(t.onDragStart({
        active: v
      }));
    },
    onDragMove(u) {
      let {
        active: v,
        over: h
      } = u;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: h
      }));
    },
    onDragOver(u) {
      let {
        active: v,
        over: h
      } = u;
      i(t.onDragOver({
        active: v,
        over: h
      }));
    },
    onDragEnd(u) {
      let {
        active: v,
        over: h
      } = u;
      i(t.onDragEnd({
        active: v,
        over: h
      }));
    },
    onDragCancel(u) {
      let {
        active: v,
        over: h
      } = u;
      i(t.onDragCancel({
        active: v,
        over: h
      }));
    }
  }), [i, t])), !d)
    return null;
  const l = $e.createElement($e.Fragment, null, $e.createElement(jl, {
    id: r,
    value: a.draggable
  }), $e.createElement(Bl, {
    id: s,
    announcement: c
  }));
  return n ? Na(l, n) : l;
}
var Re;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Re || (Re = {}));
function or() {
}
function Mr(e, t) {
  return we(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Hl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return we(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const gt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Zl(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Gl(e, t) {
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
function Xl(e, t) {
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
function Jo(e) {
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
function Ga(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
const Kl = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = Jo(t), i = [];
  for (const c of r) {
    const {
      id: s
    } = c, d = n.get(s);
    if (d) {
      const f = Jo(d), l = a.reduce((v, h, b) => v + Zl(f[b], h), 0), u = Number((l / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: c,
          value: u
        }
      });
    }
  }
  return i.sort(Gl);
};
function Ql(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), c = a - r, s = i - n;
  if (r < a && n < i) {
    const d = t.width * t.height, f = e.width * e.height, l = c * s, u = l / (d + f - l);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Jl = (e) => {
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
      const d = Ql(s, t);
      d > 0 && a.push({
        id: c,
        data: {
          droppableContainer: i,
          value: d
        }
      });
    }
  }
  return a.sort(Xl);
};
function ec(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Xa(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : gt;
}
function tc(e) {
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
const nc = /* @__PURE__ */ tc(1);
function rc(e) {
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
function oc(e, t, n) {
  const r = rc(t);
  if (!r)
    return e;
  const {
    scaleX: a,
    scaleY: i,
    x: c,
    y: s
  } = r, d = e.left - c - (1 - a) * parseFloat(n), f = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = a ? e.width / a : e.width, u = i ? e.height / i : e.height;
  return {
    width: l,
    height: u,
    top: f,
    right: d + l,
    bottom: f + u,
    left: d
  };
}
const ac = {
  ignoreTransform: !1
};
function Fn(e, t) {
  t === void 0 && (t = ac);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: l
    } = He(e).getComputedStyle(e);
    f && (n = oc(n, f, l));
  }
  const {
    top: r,
    left: a,
    width: i,
    height: c,
    bottom: s,
    right: d
  } = n;
  return {
    top: r,
    left: a,
    width: i,
    height: c,
    bottom: s,
    right: d
  };
}
function ea(e) {
  return Fn(e, {
    ignoreTransform: !0
  });
}
function ic(e) {
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
function sc(e, t) {
  return t === void 0 && (t = He(e).getComputedStyle(e)), t.position === "fixed";
}
function lc(e, t) {
  t === void 0 && (t = He(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((a) => {
    const i = t[a];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function go(e, t) {
  const n = [];
  function r(a) {
    if (t != null && n.length >= t || !a)
      return n;
    if (ho(a) && a.scrollingElement != null && !n.includes(a.scrollingElement))
      return n.push(a.scrollingElement), n;
    if (!kn(a) || Wa(a) || n.includes(a))
      return n;
    const i = He(e).getComputedStyle(a);
    return a !== e && lc(a, i) && n.push(a), sc(a, i) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function Ka(e) {
  const [t] = go(e, 1);
  return t ?? null;
}
function Ar(e) {
  return !lr || !e ? null : cn(e) ? e : po(e) ? ho(e) || e === un(e).scrollingElement ? window : kn(e) ? e : null : null;
}
function Qa(e) {
  return cn(e) ? e.scrollX : e.scrollLeft;
}
function Ja(e) {
  return cn(e) ? e.scrollY : e.scrollTop;
}
function eo(e) {
  return {
    x: Qa(e),
    y: Ja(e)
  };
}
var Ne;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ne || (Ne = {}));
function ei(e) {
  return !lr || !e ? !1 : e === document.scrollingElement;
}
function ti(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ei(e) ? {
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
const cc = {
  x: 0.2,
  y: 0.2
};
function uc(e, t, n, r, a) {
  let {
    top: i,
    left: c,
    right: s,
    bottom: d
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = cc);
  const {
    isTop: f,
    isBottom: l,
    isLeft: u,
    isRight: v
  } = ti(e), h = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, y = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + y.height ? (h.y = Ne.Backward, b.y = r * Math.abs((t.top + y.height - i) / y.height)) : !l && d >= t.bottom - y.height && (h.y = Ne.Forward, b.y = r * Math.abs((t.bottom - y.height - d) / y.height)), !v && s >= t.right - y.width ? (h.x = Ne.Forward, b.x = r * Math.abs((t.right - y.width - s) / y.width)) : !u && c <= t.left + y.width && (h.x = Ne.Backward, b.x = r * Math.abs((t.left + y.width - c) / y.width)), {
    direction: h,
    speed: b
  };
}
function dc(e) {
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
function ni(e) {
  return e.reduce((t, n) => tn(t, eo(n)), gt);
}
function fc(e) {
  return e.reduce((t, n) => t + Qa(n), 0);
}
function pc(e) {
  return e.reduce((t, n) => t + Ja(n), 0);
}
function hc(e, t) {
  if (t === void 0 && (t = Fn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: a,
    right: i
  } = t(e);
  Ka(e) && (a <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const vc = [["x", ["left", "right"], fc], ["y", ["top", "bottom"], pc]];
class mo {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = go(n), a = ni(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, c, s] of vc)
      for (const d of c)
        Object.defineProperty(this, d, {
          get: () => {
            const f = s(r), l = a[i] - f;
            return this.rect[d] + l;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Tn {
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
function gc(e) {
  const {
    EventTarget: t
  } = He(e);
  return e instanceof t ? e : un(e);
}
function $r(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var rt;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(rt || (rt = {}));
function ta(e) {
  e.preventDefault();
}
function mc(e) {
  e.stopPropagation();
}
var ue;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(ue || (ue = {}));
const ri = {
  start: [ue.Space, ue.Enter],
  cancel: [ue.Esc],
  end: [ue.Space, ue.Enter]
}, bc = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ue.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ue.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ue.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ue.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class bo {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Tn(un(n)), this.windowListeners = new Tn(He(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(rt.Resize, this.handleCancel), this.windowListeners.add(rt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(rt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && hc(r), n(gt);
  }
  handleKeyDown(t) {
    if (Ha(t)) {
      const {
        active: n,
        context: r,
        options: a
      } = this.props, {
        keyboardCodes: i = ri,
        coordinateGetter: c = bc,
        scrollBehavior: s = "smooth"
      } = a, {
        code: d
      } = t;
      if (i.end.includes(d)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(d)) {
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
      const u = c(t, {
        active: n,
        context: r.current,
        currentCoordinates: l
      });
      if (u) {
        const v = rr(u, l), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = r.current;
        for (const y of b) {
          const T = t.code, {
            isTop: w,
            isRight: E,
            isLeft: _,
            isBottom: S,
            maxScroll: m,
            minScroll: P
          } = ti(y), x = dc(y), C = {
            x: Math.min(T === ue.Right ? x.right - x.width / 2 : x.right, Math.max(T === ue.Right ? x.left : x.left + x.width / 2, u.x)),
            y: Math.min(T === ue.Down ? x.bottom - x.height / 2 : x.bottom, Math.max(T === ue.Down ? x.top : x.top + x.height / 2, u.y))
          }, k = T === ue.Right && !E || T === ue.Left && !_, j = T === ue.Down && !S || T === ue.Up && !w;
          if (k && C.x !== u.x) {
            const N = y.scrollLeft + v.x, $ = T === ue.Right && N <= m.x || T === ue.Left && N >= P.x;
            if ($ && !v.y) {
              y.scrollTo({
                left: N,
                behavior: s
              });
              return;
            }
            $ ? h.x = y.scrollLeft - N : h.x = T === ue.Right ? y.scrollLeft - m.x : y.scrollLeft - P.x, h.x && y.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (j && C.y !== u.y) {
            const N = y.scrollTop + v.y, $ = T === ue.Down && N <= m.y || T === ue.Up && N >= P.y;
            if ($ && !v.x) {
              y.scrollTo({
                top: N,
                behavior: s
              });
              return;
            }
            $ ? h.y = y.scrollTop - N : h.y = T === ue.Down ? y.scrollTop - m.y : y.scrollTop - P.y, h.y && y.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, tn(rr(u, this.referenceCoordinates), h));
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
bo.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = ri,
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
function na(e) {
  return !!(e && "distance" in e);
}
function ra(e) {
  return !!(e && "delay" in e);
}
class yo {
  constructor(t, n, r) {
    var a;
    r === void 0 && (r = gc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: c
    } = i;
    this.props = t, this.events = n, this.document = un(c), this.documentListeners = new Tn(this.document), this.listeners = new Tn(r), this.windowListeners = new Tn(He(c)), this.initialCoordinates = (a = Jr(i)) != null ? a : gt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(rt.Resize, this.handleCancel), this.windowListeners.add(rt.DragStart, ta), this.windowListeners.add(rt.VisibilityChange, this.handleCancel), this.windowListeners.add(rt.ContextMenu, ta), this.documentListeners.add(rt.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (ra(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
      if (na(n))
        return;
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
    t && (this.activated = !0, this.documentListeners.add(rt.Click, mc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(rt.SelectionChange, this.removeTextSelection), n(t));
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
    const d = (n = Jr(t)) != null ? n : gt, f = rr(a, d);
    if (!r && s) {
      if (na(s)) {
        if (s.tolerance != null && $r(f, s.tolerance))
          return this.handleCancel();
        if ($r(f, s.distance))
          return this.handleStart();
      }
      return ra(s) && $r(f, s.tolerance) ? this.handleCancel() : void 0;
    }
    t.cancelable && t.preventDefault(), c(d);
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
    t.code === ue.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const yc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class oi extends yo {
  constructor(t) {
    const {
      event: n
    } = t, r = un(n.target);
    super(t, yc, r);
  }
}
oi.activators = [{
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
const _c = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var to;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(to || (to = {}));
class ai extends yo {
  constructor(t) {
    super(t, _c, un(t.event.target));
  }
}
ai.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === to.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const kr = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class ii extends yo {
  constructor(t) {
    super(t, kr);
  }
  static setup() {
    return window.addEventListener(kr.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(kr.move.name, t);
    };
    function t() {
    }
  }
}
ii.activators = [{
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
var ar;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(ar || (ar = {}));
function wc(e) {
  let {
    acceleration: t,
    activator: n = En.Pointer,
    canScroll: r,
    draggingRect: a,
    enabled: i,
    interval: c = 5,
    order: s = ar.TreeOrder,
    pointerCoordinates: d,
    scrollableAncestors: f,
    scrollableAncestorRects: l,
    delta: u,
    threshold: v
  } = e;
  const h = Tc({
    delta: u,
    disabled: !i
  }), [b, y] = Al(), T = W({
    x: 0,
    y: 0
  }), w = W({
    x: 0,
    y: 0
  }), E = we(() => {
    switch (n) {
      case En.Pointer:
        return d ? {
          top: d.y,
          bottom: d.y,
          left: d.x,
          right: d.x
        } : null;
      case En.DraggableRect:
        return a;
    }
  }, [n, a, d]), _ = W(null), S = ke(() => {
    const P = _.current;
    if (!P)
      return;
    const x = T.current.x * w.current.x, C = T.current.y * w.current.y;
    P.scrollBy(x, C);
  }, []), m = we(() => s === ar.TreeOrder ? [...f].reverse() : f, [s, f]);
  H(
    () => {
      if (!i || !f.length || !E) {
        y();
        return;
      }
      for (const P of m) {
        if ((r == null ? void 0 : r(P)) === !1)
          continue;
        const x = f.indexOf(P), C = l[x];
        if (!C)
          continue;
        const {
          direction: k,
          speed: j
        } = uc(P, C, E, t, v);
        for (const N of ["x", "y"])
          h[N][k[N]] || (j[N] = 0, k[N] = 0);
        if (j.x > 0 || j.y > 0) {
          y(), _.current = P, b(S, c), T.current = j, w.current = k;
          return;
        }
      }
      T.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      S,
      r,
      y,
      i,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(E),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      b,
      f,
      m,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const xc = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function Tc(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Qr(t);
  return Ln((a) => {
    if (n || !r || !a)
      return xc;
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
function Ec(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Ln((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function Sc(e, t) {
  return we(() => e.reduce((n, r) => {
    const {
      sensor: a
    } = r, i = a.activators.map((c) => ({
      eventName: c.eventName,
      handler: t(c.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var Rn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Rn || (Rn = {}));
var no;
(function(e) {
  e.Optimized = "optimized";
})(no || (no = {}));
const oa = /* @__PURE__ */ new Map();
function Oc(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, c] = G(null), {
    frequency: s,
    measure: d,
    strategy: f
  } = a, l = W(e), u = T(), v = Dn(u), h = ke(function(w) {
    w === void 0 && (w = []), !v.current && c((E) => E === null ? w : E.concat(w.filter((_) => !E.includes(_))));
  }, [v]), b = W(null), y = Ln((w) => {
    if (u && !n)
      return oa;
    if (!w || w === oa || l.current !== e || i != null) {
      const E = /* @__PURE__ */ new Map();
      for (let _ of e) {
        if (!_)
          continue;
        if (i && i.length > 0 && !i.includes(_.id) && _.rect.current) {
          E.set(_.id, _.rect.current);
          continue;
        }
        const S = _.node.current, m = S ? new mo(d(S), S) : null;
        _.rect.current = m, m && E.set(_.id, m);
      }
      return E;
    }
    return w;
  }, [e, i, n, u, d]);
  return H(() => {
    l.current = e;
  }, [e]), H(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), H(
    () => {
      i && i.length > 0 && c(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), H(
    () => {
      u || typeof s != "number" || b.current !== null || (b.current = setTimeout(() => {
        h(), b.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, u, h, ...r]
  ), {
    droppableRects: y,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function T() {
    switch (f) {
      case Rn.Always:
        return !1;
      case Rn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function si(e, t) {
  return Ln((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Cc(e, t) {
  return si(e, t);
}
function Pc(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = vo(t), a = we(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return H(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function ur(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = vo(t), a = we(
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
  return H(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Dc(e) {
  return new mo(Fn(e), e);
}
function aa(e, t, n) {
  t === void 0 && (t = Dc);
  const [r, a] = so(s, null), i = Pc({
    callback(d) {
      if (e)
        for (const f of d) {
          const {
            type: l,
            target: u
          } = f;
          if (l === "childList" && u instanceof HTMLElement && u.contains(e)) {
            a();
            break;
          }
        }
    }
  }), c = ur({
    callback: a
  });
  return St(() => {
    a(), e ? (c == null || c.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (c == null || c.disconnect(), i == null || i.disconnect());
  }, [e]), r;
  function s(d) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var f;
      return (f = d ?? n) != null ? f : null;
    }
    const l = t(e);
    return JSON.stringify(d) === JSON.stringify(l) ? d : l;
  }
}
function Rc(e) {
  const t = si(e);
  return Xa(e, t);
}
const ia = [];
function Nc(e) {
  const t = W(e), n = Ln((r) => e ? r && r !== ia && e && t.current && e.parentNode === t.current.parentNode ? r : go(e) : ia, [e]);
  return H(() => {
    t.current = e;
  }, [e]), n;
}
function Ic(e) {
  const [t, n] = G(null), r = W(e), a = ke((i) => {
    const c = Ar(i.target);
    c && n((s) => s ? (s.set(c, eo(c)), new Map(s)) : null);
  }, []);
  return H(() => {
    const i = r.current;
    if (e !== i) {
      c(i);
      const s = e.map((d) => {
        const f = Ar(d);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, eo(f)]) : null;
      }).filter((d) => d != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      c(e), c(i);
    };
    function c(s) {
      s.forEach((d) => {
        const f = Ar(d);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), we(() => e.length ? t ? Array.from(t.values()).reduce((i, c) => tn(i, c), gt) : ni(e) : gt, [e, t]);
}
function sa(e, t) {
  t === void 0 && (t = []);
  const n = W(null);
  return H(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), H(() => {
    const r = e !== gt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? rr(e, n.current) : gt;
}
function Mc(e) {
  H(
    () => {
      if (!lr)
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
function Ac(e, t) {
  return we(() => e.reduce((n, r) => {
    let {
      eventName: a,
      handler: i
    } = r;
    return n[a] = (c) => {
      i(c, t);
    }, n;
  }, {}), [e, t]);
}
function li(e) {
  return we(() => e ? ic(e) : null, [e]);
}
const Lr = [];
function $c(e, t) {
  t === void 0 && (t = Fn);
  const [n] = e, r = li(n ? He(n) : null), [a, i] = so(s, Lr), c = ur({
    callback: i
  });
  return e.length > 0 && a === Lr && i(), St(() => {
    e.length ? e.forEach((d) => c == null ? void 0 : c.observe(d)) : (c == null || c.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((d) => ei(d) ? r : new mo(t(d), d)) : Lr;
  }
}
function kc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return kn(t) ? t : e;
}
function Lc(e) {
  let {
    measure: t
  } = e;
  const [n, r] = G(null), a = ke((f) => {
    for (const {
      target: l
    } of f)
      if (kn(l)) {
        r((u) => {
          const v = t(l);
          return u ? {
            ...u,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = ur({
    callback: a
  }), c = ke((f) => {
    const l = kc(f);
    i == null || i.disconnect(), l && (i == null || i.observe(l)), r(l ? t(l) : null);
  }, [t, i]), [s, d] = nr(c);
  return we(() => ({
    nodeRef: s,
    rect: n,
    setRef: d
  }), [n, s, d]);
}
const Fc = [{
  sensor: oi,
  options: {}
}, {
  sensor: bo,
  options: {}
}], jc = {
  current: {}
}, Kn = {
  draggable: {
    measure: ea
  },
  droppable: {
    measure: ea,
    strategy: Rn.WhileDragging,
    frequency: no.Optimized
  },
  dragOverlay: {
    measure: Fn
  }
};
class Sn extends Map {
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
const Bc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Sn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: or
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Kn,
  measureDroppableContainers: or,
  windowRect: null,
  measuringScheduled: !1
}, Vc = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: or,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: or
}, dr = /* @__PURE__ */ lt(Vc), qc = /* @__PURE__ */ lt(Bc);
function Yc() {
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
      containers: new Sn()
    }
  };
}
function zc(e, t) {
  switch (t.type) {
    case Re.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Re.DragMove:
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
    case Re.DragEnd:
    case Re.DragCancel:
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
    case Re.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, a = new Sn(e.droppable.containers);
      return a.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case Re.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: a
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const c = new Sn(e.droppable.containers);
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
    case Re.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, a = e.droppable.containers.get(n);
      if (!a || r !== a.key)
        return e;
      const i = new Sn(e.droppable.containers);
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
function Wc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: a
  } = Ee(dr), i = Qr(r), c = Qr(n == null ? void 0 : n.id);
  return H(() => {
    if (!t && !r && i && c != null) {
      if (!Ha(i) || document.activeElement === i.target)
        return;
      const s = a.get(c);
      if (!s)
        return;
      const {
        activatorNode: d,
        node: f
      } = s;
      if (!d.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const l of [d.current, f.current]) {
          if (!l)
            continue;
          const u = Ll(l);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, a, c, i]), null;
}
function Uc(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...r
  }), n) : n;
}
function Hc(e) {
  return we(
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
function Zc(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: a = !0
  } = e;
  const i = W(!1), {
    x: c,
    y: s
  } = typeof a == "boolean" ? {
    x: a,
    y: a
  } : a;
  St(() => {
    if (!c && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const l = n(f), u = Xa(l, r);
    if (c || (u.x = 0), s || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const v = Ka(f);
      v && v.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, c, s, r, n]);
}
const ci = /* @__PURE__ */ lt({
  ...gt,
  scaleX: 1,
  scaleY: 1
});
var It;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(It || (It = {}));
const Gc = /* @__PURE__ */ Da(function(t) {
  var n, r, a, i;
  let {
    id: c,
    accessibility: s,
    autoScroll: d = !0,
    children: f,
    sensors: l = Fc,
    collisionDetection: u = Jl,
    measuring: v,
    modifiers: h,
    ...b
  } = t;
  const y = so(zc, void 0, Yc), [T, w] = y, [E, _] = Yl(), [S, m] = G(It.Uninitialized), P = S === It.Initialized, {
    draggable: {
      active: x,
      nodes: C,
      translate: k
    },
    droppable: {
      containers: j
    }
  } = T, N = x ? C.get(x) : null, $ = W({
    initial: null,
    translated: null
  }), B = we(() => {
    var be;
    return x != null ? {
      id: x,
      // It's possible for the active node to unmount while dragging
      data: (be = N == null ? void 0 : N.data) != null ? be : jc,
      rect: $
    } : null;
  }, [x, N]), q = W(null), [te, Y] = G(null), [X, le] = G(null), Z = Dn(b, Object.values(b)), O = cr("DndDescribedBy", c), I = we(() => j.getEnabled(), [j]), F = Hc(v), {
    droppableRects: U,
    measureDroppableContainers: z,
    measuringScheduled: Q
  } = Oc(I, {
    dragging: P,
    dependencies: [k.x, k.y],
    config: F.droppable
  }), V = Ec(C, x), J = we(() => X ? Jr(X) : null, [X]), ee = zn(), ae = Cc(V, F.draggable.measure);
  Zc({
    activeNode: x ? C.get(x) : null,
    config: ee.layoutShiftCompensation,
    initialRect: ae,
    measure: F.draggable.measure
  });
  const K = aa(V, F.draggable.measure, ae), ve = aa(V ? V.parentElement : null), M = W({
    activatorEvent: null,
    active: null,
    activeNode: V,
    collisionRect: null,
    collisions: null,
    droppableRects: U,
    draggableNodes: C,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: j,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), A = j.getNodeFor((n = M.current.over) == null ? void 0 : n.id), re = Lc({
    measure: F.dragOverlay.measure
  }), ie = (r = re.nodeRef.current) != null ? r : V, Se = P ? (a = re.rect) != null ? a : K : null, Qe = !!(re.nodeRef.current && re.rect), xt = Rc(Qe ? null : K), Je = li(ie ? He(ie) : null), Oe = Nc(P ? A ?? V : null), ut = $c(Oe), dt = Uc(h, {
    transform: {
      x: k.x - xt.x,
      y: k.y - xt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: X,
    active: B,
    activeNodeRect: K,
    containerNodeRect: ve,
    draggingNodeRect: Se,
    over: M.current.over,
    overlayNodeRect: re.rect,
    scrollableAncestors: Oe,
    scrollableAncestorRects: ut,
    windowRect: Je
  }), $t = J ? tn(J, k) : null, Ct = Ic(Oe), kt = sa(Ct), Lt = sa(Ct, [K]), Le = tn(dt, kt), ft = Se ? nc(Se, dt) : null, Pt = B && ft ? u({
    active: B,
    collisionRect: ft,
    droppableRects: U,
    droppableContainers: I,
    pointerCoordinates: $t
  }) : null, fn = Ga(Pt, "id"), [et, Vn] = G(null), xr = Qe ? dt : tn(dt, Lt), Tr = ec(xr, (i = et == null ? void 0 : et.rect) != null ? i : null, K), qn = ke(
    (be, Ie) => {
      let {
        sensor: Me,
        options: pt
      } = Ie;
      if (q.current == null)
        return;
      const Be = C.get(q.current);
      if (!Be)
        return;
      const Ve = be.nativeEvent, tt = new Me({
        active: q.current,
        activeNode: Be,
        event: Ve,
        options: pt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: M,
        onStart(qe) {
          const Ft = q.current;
          if (Ft == null)
            return;
          const jt = C.get(Ft);
          if (!jt)
            return;
          const {
            onDragStart: Bt
          } = Z.current, Gt = {
            active: {
              id: Ft,
              data: jt.data,
              rect: $
            }
          };
          hn(() => {
            Bt == null || Bt(Gt), m(It.Initializing), w({
              type: Re.DragStart,
              initialCoordinates: qe,
              active: Ft
            }), E({
              type: "onDragStart",
              event: Gt
            });
          });
        },
        onMove(qe) {
          w({
            type: Re.DragMove,
            coordinates: qe
          });
        },
        onEnd: Tt(Re.DragEnd),
        onCancel: Tt(Re.DragCancel)
      });
      hn(() => {
        Y(tt), le(be.nativeEvent);
      });
      function Tt(qe) {
        return async function() {
          const {
            active: jt,
            collisions: Bt,
            over: Gt,
            scrollAdjustedTranslate: Wn
          } = M.current;
          let Vt = null;
          if (jt && Wn) {
            const {
              cancelDrop: qt
            } = Z.current;
            Vt = {
              activatorEvent: Ve,
              active: jt,
              collisions: Bt,
              delta: Wn,
              over: Gt
            }, qe === Re.DragEnd && typeof qt == "function" && await Promise.resolve(qt(Vt)) && (qe = Re.DragCancel);
          }
          q.current = null, hn(() => {
            w({
              type: qe
            }), m(It.Uninitialized), Vn(null), Y(null), le(null);
            const qt = qe === Re.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Vt) {
              const g = Z.current[qt];
              g == null || g(Vt), E({
                type: qt,
                event: Vt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), Er = ke((be, Ie) => (Me, pt) => {
    const Be = Me.nativeEvent, Ve = C.get(pt);
    if (
      // Another sensor is already instantiating
      q.current !== null || // No active draggable
      !Ve || // Event has already been captured
      Be.dndKit || Be.defaultPrevented
    )
      return;
    const tt = {
      active: Ve
    };
    be(Me, Ie.options, tt) === !0 && (Be.dndKit = {
      capturedBy: Ie.sensor
    }, q.current = pt, qn(Me, Ie));
  }, [C, qn]), Yn = Sc(l, Er);
  Mc(l), St(() => {
    K && S === It.Initializing && m(It.Initialized);
  }, [K, S]), H(
    () => {
      const {
        onDragMove: be
      } = Z.current, {
        active: Ie,
        activatorEvent: Me,
        collisions: pt,
        over: Be
      } = M.current;
      if (!Ie || !Me)
        return;
      const Ve = {
        active: Ie,
        activatorEvent: Me,
        collisions: pt,
        delta: {
          x: Le.x,
          y: Le.y
        },
        over: Be
      };
      hn(() => {
        be == null || be(Ve), E({
          type: "onDragMove",
          event: Ve
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Le.x, Le.y]
  ), H(
    () => {
      const {
        active: be,
        activatorEvent: Ie,
        collisions: Me,
        droppableContainers: pt,
        scrollAdjustedTranslate: Be
      } = M.current;
      if (!be || q.current == null || !Ie || !Be)
        return;
      const {
        onDragOver: Ve
      } = Z.current, tt = pt.get(fn), Tt = tt && tt.rect.current ? {
        id: tt.id,
        rect: tt.rect.current,
        data: tt.data,
        disabled: tt.disabled
      } : null, qe = {
        active: be,
        activatorEvent: Ie,
        collisions: Me,
        delta: {
          x: Be.x,
          y: Be.y
        },
        over: Tt
      };
      hn(() => {
        Vn(Tt), Ve == null || Ve(qe), E({
          type: "onDragOver",
          event: qe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fn]
  ), St(() => {
    M.current = {
      activatorEvent: X,
      active: B,
      activeNode: V,
      collisionRect: ft,
      collisions: Pt,
      droppableRects: U,
      draggableNodes: C,
      draggingNode: ie,
      draggingNodeRect: Se,
      droppableContainers: j,
      over: et,
      scrollableAncestors: Oe,
      scrollAdjustedTranslate: Le
    }, $.current = {
      initial: Se,
      translated: ft
    };
  }, [B, V, Pt, ft, C, ie, Se, U, j, et, Oe, Le]), wc({
    ...ee,
    delta: k,
    draggingRect: ft,
    pointerCoordinates: $t,
    scrollableAncestors: Oe,
    scrollableAncestorRects: ut
  });
  const Sr = we(() => ({
    active: B,
    activeNode: V,
    activeNodeRect: K,
    activatorEvent: X,
    collisions: Pt,
    containerNodeRect: ve,
    dragOverlay: re,
    draggableNodes: C,
    droppableContainers: j,
    droppableRects: U,
    over: et,
    measureDroppableContainers: z,
    scrollableAncestors: Oe,
    scrollableAncestorRects: ut,
    measuringConfiguration: F,
    measuringScheduled: Q,
    windowRect: Je
  }), [B, V, K, X, Pt, ve, re, C, j, U, et, z, Oe, ut, F, Q, Je]), pn = we(() => ({
    activatorEvent: X,
    activators: Yn,
    active: B,
    activeNodeRect: K,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: w,
    draggableNodes: C,
    over: et,
    measureDroppableContainers: z
  }), [X, Yn, B, K, w, O, C, et, z]);
  return $e.createElement(Za.Provider, {
    value: _
  }, $e.createElement(dr.Provider, {
    value: pn
  }, $e.createElement(qc.Provider, {
    value: Sr
  }, $e.createElement(ci.Provider, {
    value: Tr
  }, f)), $e.createElement(Wc, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), $e.createElement(Ul, {
    ...s,
    hiddenTextDescribedById: O
  }));
  function zn() {
    const be = (te == null ? void 0 : te.autoScrollEnabled) === !1, Ie = typeof d == "object" ? d.enabled === !1 : d === !1, Me = P && !be && !Ie;
    return typeof d == "object" ? {
      ...d,
      enabled: Me
    } : {
      enabled: Me
    };
  }
}), Xc = /* @__PURE__ */ lt(null), la = "button", Kc = "Droppable";
function Qc(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = cr(Kc), {
    activators: c,
    activatorEvent: s,
    active: d,
    activeNodeRect: f,
    ariaDescribedById: l,
    draggableNodes: u,
    over: v
  } = Ee(dr), {
    role: h = la,
    roleDescription: b = "draggable",
    tabIndex: y = 0
  } = a ?? {}, T = (d == null ? void 0 : d.id) === t, w = Ee(T ? ci : Xc), [E, _] = nr(), [S, m] = nr(), P = Ac(c, t), x = Dn(n);
  St(
    () => (u.set(t, {
      id: t,
      key: i,
      node: E,
      activatorNode: S,
      data: x
    }), () => {
      const k = u.get(t);
      k && k.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const C = we(() => ({
    role: h,
    tabIndex: y,
    "aria-disabled": r,
    "aria-pressed": T && h === la ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": l.draggable
  }), [r, h, y, T, b, l.draggable]);
  return {
    active: d,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: C,
    isDragging: T,
    listeners: r ? void 0 : P,
    node: E,
    over: v,
    setNodeRef: _,
    setActivatorNodeRef: m,
    transform: w
  };
}
const Jc = "Droppable", eu = {
  timeout: 25
};
function ui(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: a
  } = e;
  const i = cr(Jc), {
    active: c,
    dispatch: s,
    over: d,
    measureDroppableContainers: f
  } = Ee(dr), l = W({
    disabled: n
  }), u = W(!1), v = W(null), h = W(null), {
    disabled: b,
    updateMeasurementsFor: y,
    timeout: T
  } = {
    ...eu,
    ...a
  }, w = Dn(y ?? r), E = ke(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(w.current) ? w.current : [w.current]), h.current = null;
      }, T);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [T]
  ), _ = ur({
    callback: E,
    disabled: b || !c
  }), S = ke((C, k) => {
    _ && (k && (_.unobserve(k), u.current = !1), C && _.observe(C));
  }, [_]), [m, P] = nr(S), x = Dn(t);
  return H(() => {
    !_ || !m.current || (_.disconnect(), u.current = !1, _.observe(m.current));
  }, [m, _]), St(
    () => (s({
      type: Re.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: m,
        rect: v,
        data: x
      }
    }), () => s({
      type: Re.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), H(() => {
    n !== l.current.disabled && (s({
      type: Re.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), l.current.disabled = n);
  }, [r, i, n, s]), {
    active: c,
    rect: v,
    isOver: (d == null ? void 0 : d.id) === r,
    node: m,
    over: d,
    setNodeRef: P
  };
}
const ro = /* @__PURE__ */ Object.freeze({
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
        return [ro.Translate.toString(e), ro.Scale.toString(e)].join(" ");
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
}), tu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, nu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, ru = [ue.Down, ue.Right, ue.Up, ue.Left], ou = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (ru.includes(e.code)) {
    e.preventDefault();
    const c = 20;
    if (!t || !a)
      return;
    const s = [];
    r.getEnabled().forEach((l) => {
      if (!l || l != null && l.disabled)
        return;
      const u = n.get(l.id);
      if (u)
        switch (e.code) {
          case ue.Down:
            a.top < u.top && s.push(l);
            break;
          case ue.Up:
            a.top > u.top + c && s.push(l);
            break;
          case ue.Left:
            a.left >= u.left + u.width && s.push(l);
            break;
          case ue.Right:
            a.left + a.width <= u.left && s.push(l);
            break;
        }
    });
    const d = Kl({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = Ga(d, "id");
    if (f != null) {
      const l = r.get(f), u = l == null ? void 0 : l.node.current, v = l == null ? void 0 : l.rect.current;
      if (u && v)
        return ((i = l.data.current) == null ? void 0 : i.type) === "container" ? {
          x: v.left,
          y: v.top + c
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, di = lt(), xn = (e, t) => De.map(e, (n) => {
  var r;
  if (st(n) && n.props) {
    if (((r = n == null ? void 0 : n.props) == null ? void 0 : r.__TYPE) === t)
      return n;
    if (n.props.children)
      return xn(n.props.children, t);
  }
}), au = {
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
}, fi = ({
  children: e,
  multipleDrags: t,
  onValidate: n,
  validate: r,
  reboot: a,
  propValidate: i,
  modifiers: c,
  screenReaderInstructions: s,
  announcements: d,
  defaultState: f,
  defaultValidate: l,
  onState: u,
  id: v
}) => {
  const [h, b] = G([]), [y, T] = G(null), [w, E] = G(
    () => Object.keys(f).length > 0 ? f : S()
  ), _ = W(!1);
  function S() {
    return [
      ...xn(e, "droppable"),
      ...xn(e, "general-draggable")
    ].reduce(
      (N, $) => ({
        ...N,
        [$.props.id]: $.props.children ? [
          ...xn($.props.children, "draggable").map(
            (B) => B.props.id
          )
        ] : []
      }),
      {}
    );
  }
  const m = Object.freeze({
    restrictToVerticalAxis: nu,
    restrictToHorizontalAxis: tu
  }), P = Hl(
    Mr(ai),
    Mr(ii),
    Mr(bo, {
      coordinateGetter: ou
    })
  ), x = (N, $) => {
    const B = Object.keys(w).pop();
    let q = [...h];
    if (B === N.id && h.includes($) && (q = h.filter((te) => te !== $)), B !== N.id && (q = [
      ...h.filter((te) => te !== $),
      N.data.current.validate.includes($) ? $ : ""
    ].filter((te) => !!te)), !t) {
      const te = w[N.id][0];
      q = te ? q.filter((Y) => Y !== te) : q;
    }
    n && n({ validate: [...q], active: !0 }), b(q);
  }, C = (N) => N in w ? N : Object.keys(w).find(($) => w[$].includes(N)), k = ({ active: N, over: $ }) => {
    if (!$)
      return;
    T(null);
    const B = Object.keys(w).pop(), q = C($.id), te = C(N.id);
    te !== q && (x($, N.id), E((Y) => {
      _.current = !0;
      const X = Y[te].filter(
        (O) => O !== N.id
      ), le = [...Y[q]];
      return t ? {
        ...Y,
        [te]: X,
        [q]: [...le, N.id]
      } : {
        ...{
          ...Y,
          [te]: X,
          [q]: q === B ? [...le, N.id] : [N.id]
        },
        ...q !== B && Y[q].length > 0 && {
          [B]: [
            ...Y[B].filter((O) => O !== N.id),
            ...Y[q]
          ]
        }
      };
    }));
  }, j = (N) => De.map(N, ($) => {
    if (!$.props)
      return $;
    if ($.props.__TYPE !== "draggable")
      return $.props.id in w && w[$.props.id].length > 0 ? Pe($, { ...$.props }, [
        ...w[$.props.id].map(
          (B) => xn(e, "draggable").filter(
            (q) => q.props.id === B
          )
        ).flat()
      ]) : $.props.children ? Pe($, {
        ...$.props,
        children: j($.props.children)
      }) : $;
  });
  return H(() => {
    a && (E(() => S()), b([]), n && n({ validate: [], active: !1 }));
  }, [a]), H(() => {
    Object.keys(f).length !== 0 && E(f);
  }, [f]), H(() => {
    l.length !== 0 && b(l);
  }, [l]), H(() => {
    u && _.current && (_.current = !1, u({
      state: { key: v, newObjectState: { ...w }, validateId: h }
    }));
  }, [u, w]), /* @__PURE__ */ p(
    di.Provider,
    {
      value: {
        listId: h,
        propValidate: i,
        validate: r,
        isDragging: y
      },
      children: /* @__PURE__ */ p(
        Gc,
        {
          sensors: P,
          screenReaderInstructions: {
            draggable: s
          },
          accessibility: { announcements: d },
          onDragStart: ({ active: N }) => T(N.id),
          onDragEnd: k,
          onDragCancel: () => T(null),
          ...c && { modifiers: [m[c]] },
          children: j(e)
        }
      )
    }
  );
};
fi.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: au,
  defaultState: {},
  defaultValidate: [],
  screenReaderInstructions: "Para recoger un elemento arrastrable, presiona la barra espaciadora o la tecla Enter. Mientras arrastras, usa las teclas de flecha para mover el elemento en cualquier dirección deseada. Presiona nuevamente la barra espaciadora o la tecla Enter para soltar el elemento en su nueva posición, o presiona escape para cancelar."
};
fi.propTypes = {
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
const iu = "_pop_1elvh_1", nn = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: iu
}, pi = ({
  children: e,
  id: t,
  addClass: n,
  dragging: r,
  label: a,
  attribute: i,
  disabledDefaultAttributes: c,
  element: s,
  defaultStyle: d,
  __TYPE: f,
  ...l
}) => {
  const u = s || "div", { listId: v, propValidate: h, validate: b, isDragging: y } = Ee(di), { attributes: T, listeners: w, setNodeRef: E, transform: _ } = Qc({
    id: t,
    disabled: b,
    data: {
      label: a
    },
    attributes: i
  });
  return /* @__PURE__ */ p(
    u,
    {
      id: t,
      ref: E,
      "data-type": f,
      className: ne({
        [nn["c-draggable"]]: !d,
        [`${r} ${nn["is-draggable--active-animation"]}`]: y === t && !d,
        [n]: n
      }),
      style: { transform: ro.Translate.toString(_) },
      ...b && { [h]: !!v.includes(t) },
      ...!c && { ...T },
      ...w,
      ...l,
      children: e
    }
  );
};
pi.defaultProps = {
  __TYPE: "draggable",
  dragging: nn["c-draggable--active"],
  disabledDefaultAttributes: !1
};
pi.propTypes = {
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
const hi = ({
  children: e,
  id: t,
  validate: n,
  addClass: r,
  over: a,
  label: i,
  element: c,
  defaultStyle: s,
  __TYPE: d,
  ...f
}) => {
  const l = c || "div", { isOver: u, setNodeRef: v } = ui({
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
      "data-type": d,
      className: ne({
        [nn["c-droppable"]]: !s,
        [a]: u && !s,
        [r]: r
      }),
      ...f,
      children: e
    }
  );
};
hi.defaultProps = {
  __TYPE: "droppable",
  over: nn["c-droppable--active"]
};
hi.propTypes = {
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
const vi = ({
  children: e,
  addClass: t,
  over: n,
  id: r,
  label: a,
  element: i,
  defaultStyle: c,
  __TYPE: s,
  ...d
}) => {
  const f = i || "div", { isOver: l, setNodeRef: u } = ui({
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
      ref: u,
      "data-type": s,
      className: ne({
        [nn["c-droppable"]]: !c,
        [n]: l && !c,
        [t]: t
      }),
      ...d,
      children: e
    }
  );
};
vi.propTypes = {
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
vi.defaultProps = {
  __TYPE: "general-draggable",
  id: Ya("unique-id-general-"),
  label: "contendor inicial"
};
const ap = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ D("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ D("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ D("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ D("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ D(
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
        /* @__PURE__ */ D("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ D("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ D("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
      ] })
    }
  ),
  /* @__PURE__ */ D(
    "filter",
    {
      id: "hc_extension_invert_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "1.7" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ D(
    "filter",
    {
      id: "hc_extension_yellow_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ D("feComponentTransfer", { children: [
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
  /* @__PURE__ */ D(
    "filter",
    {
      id: "hc_extension_yellow_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ D(
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
        /* @__PURE__ */ D("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ D(
    "filter",
    {
      id: "hc_extension_red_on_white_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ D(
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
        /* @__PURE__ */ D("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ D(
    "filter",
    {
      id: "hc_extension_green_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ D(
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
        /* @__PURE__ */ D("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ D(
    "filter",
    {
      id: "hc_extension_yellow_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ D(
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
        /* @__PURE__ */ D("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ D(
    "filter",
    {
      id: "hc_extension_white_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ D("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  )
] }) }) }), ca = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, gi = ({
  url: e,
  alt: t,
  title: n,
  width: r,
  addClass: a,
  noCaption: i,
  defaultStyle: c,
  lazySize: s,
  ...d
}) => {
  const [f, l] = G(!1), u = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, v = (b) => l(b), h = f ? u : `${e}`;
  return /* @__PURE__ */ D(
    "figure",
    {
      className: ne({
        [ca["c-image"]]: !c,
        [a]: a
      }),
      ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } },
      children: [
        /* @__PURE__ */ p(
          "img",
          {
            src: h,
            onError: v,
            alt: t,
            ...s && { ...s },
            ...d
          }
        ),
        !i && /* @__PURE__ */ p("figcaption", { className: ca["c-image__figcaption"], children: /* @__PURE__ */ D("p", { children: [
          /* @__PURE__ */ D("strong", { children: [
            n,
            " "
          ] }),
          t
        ] }) })
      ]
    }
  );
};
gi.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
gi.propTypes = {
  url: o.string,
  alt: o.string,
  title: o.string,
  width: o.string,
  addClass: o.string,
  noCaption: o.bool,
  defaultStyle: o.bool,
  lazySize: o.shape({
    width: o.string,
    height: o.string
  })
};
const Nn = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, mi = yt(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: c, isDisabled: s, isRequired: d, isReadOnly: f, defaultStyle: l, onValue: u }, v) => {
  const h = e || Ot(), b = ({ target: y }) => {
    u && u({ id: h, value: y.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ D(
    "label",
    {
      htmlFor: h,
      className: ne({
        [Nn["c-label"]]: !l,
        [i]: i
      }),
      children: [
        /* @__PURE__ */ D("span", { className: `${!c && "u-sr-only"}`, children: [
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
            required: d,
            placeholder: r,
            autoComplete: "off",
            onChange: b,
            className: ne({
              [Nn["c-input"]]: !l
            }),
            ...f && { readOnly: f, "aria-readonly": f }
          }
        )
      ]
    }
  ) : null;
});
mi.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
mi.propTypes = {
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
const su = ({ children: e, onAllValue: t }) => {
  const [n, r] = G([]), a = (s) => r([...n.filter((d) => d.id !== s.id), { ...s }]);
  H(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, d, f) => De.toArray(s).map((l) => l.props.__TYPE === d ? Pe(l, { ...l.props, ...f }) : l);
  return De.map(e, (s) => {
    var d, f;
    return st(s) ? ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "InputStyle" ? Pe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? Pe(s, { ...s.props, onValue: a }) : s : null;
  });
};
su.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const bi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [Nn["c-input__wrapper-style"]]: !n,
      [t]: t
    }),
    children: Ue(e, ["InputLeftAddon", "InputRightAddon", "Input"])
  }
);
bi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("InputStyle")
};
bi.defaultProps = {
  __TYPE: "InputStyle"
};
const yi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [Nn["c-input__left-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
yi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("InputLeftAddon")
};
yi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const _i = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [Nn["c-input__right-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
_i.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("InputRightAddon")
};
_i.defaultProps = {
  __TYPE: "InputRightAddon"
};
const lu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, cu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: ne({
      [lu["c-kbd"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
cu.propTypes = {
  children: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
const wi = ({ children: e, link: t, addClass: n, isExternal: r, label: a, ...i }) => /* @__PURE__ */ p(
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
wi.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
wi.propTypes = {
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
const xi = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, uu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "ul",
  {
    className: ne({
      [xi["c-List"]]: !n,
      [t]: t
    }),
    ...r,
    children: Ue(e, ["ListItem"])
  }
);
uu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool
};
const Ti = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = De.map(e, (i) => {
    var c;
    return ((c = i == null ? void 0 : i.props) == null ? void 0 : c.__TYPE) === "Icon" ? Pe(i, { ...i.props, addClass: xi["c-list-item__icon"] }) : i;
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
const du = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: Ue(e, ["ListItem"]) });
du.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const fu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: Ue(e, ["ListItem"]) });
fu.propTypes = {
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
function jr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), r = function() {
    function f(l, u) {
      jr(this, f), this._inertManager = u, this._rootElement = l, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return Fr(f, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(u) {
          this._unmanageNode(u.node);
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
      value: function(u) {
        var v = this;
        c(u, function(T) {
          return v._visitNode(T);
        });
        var h = document.activeElement;
        if (!document.body.contains(u)) {
          for (var b = u, y = void 0; b; ) {
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              y = /** @type {!ShadowRoot} */
              b;
              break;
            }
            b = b.parentNode;
          }
          y && (h = y.activeElement);
        }
        u.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
      }
      /**
       * @param {!Node} node
       */
    }, {
      key: "_visitNode",
      value: function(u) {
        if (u.nodeType === Node.ELEMENT_NODE) {
          var v = (
            /** @type {!HTMLElement} */
            u
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
      value: function(u) {
        var v = this._inertManager.register(u, this);
        this._managedNodes.add(v);
      }
      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_unmanageNode",
      value: function(u) {
        var v = this._inertManager.deregister(u, this);
        v && this._managedNodes.delete(v);
      }
      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */
    }, {
      key: "_unmanageSubtree",
      value: function(u) {
        var v = this;
        c(u, function(h) {
          return v._unmanageNode(h);
        });
      }
      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!HTMLElement} node
       */
    }, {
      key: "_adoptInertRoot",
      value: function(u) {
        var v = this._inertManager.getInertRoot(u);
        v || (this._inertManager.setInert(u, !0), v = this._inertManager.getInertRoot(u)), v.managedNodes.forEach(function(h) {
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
      value: function(u, v) {
        u.forEach(function(h) {
          var b = (
            /** @type {!HTMLElement} */
            h.target
          );
          if (h.type === "childList")
            e.call(h.addedNodes).forEach(function(T) {
              this._makeSubtreeUnfocusable(T);
            }, this), e.call(h.removedNodes).forEach(function(T) {
              this._unmanageSubtree(T);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(b);
            else if (b !== this._rootElement && h.attributeName === "inert" && b.hasAttribute("inert")) {
              this._adoptInertRoot(b);
              var y = this._inertManager.getInertRoot(b);
              this._managedNodes.forEach(function(T) {
                b.contains(T.node) && y._manageNode(T.node);
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
      set: function(u) {
        this._savedAriaHidden = u;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), f;
  }(), a = function() {
    function f(l, u) {
      jr(this, f), this._node = l, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([u]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return Fr(f, [{
      key: "destructor",
      value: function() {
        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var u = (
            /** @type {!HTMLElement} */
            this._node
          );
          this._savedTabIndex !== null ? u.setAttribute("tabindex", this._savedTabIndex) : u.removeAttribute("tabindex"), this._overrodeFocusMethod && delete u.focus;
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
          var u = (
            /** @type {!HTMLElement} */
            this.node
          );
          if (t.call(u, n)) {
            if (
              /** @type {!HTMLElement} */
              u.tabIndex === -1 && this.hasSavedTabIndex
            )
              return;
            u.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            u.tabIndex), u.setAttribute("tabindex", "-1"), u.nodeType === Node.ELEMENT_NODE && (u.focus = function() {
            }, this._overrodeFocusMethod = !0);
          } else
            u.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            u.tabIndex, u.removeAttribute("tabindex"));
        }
      }
      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "addInertRoot",
      value: function(u) {
        this._throwIfDestroyed(), this._inertRoots.add(u);
      }
      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "removeInertRoot",
      value: function(u) {
        this._throwIfDestroyed(), this._inertRoots.delete(u), this._inertRoots.size === 0 && this.destructor();
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
      set: function(u) {
        this._throwIfDestroyed(), this._savedTabIndex = u;
      },
      get: function() {
        return this._throwIfDestroyed(), this._savedTabIndex;
      }
    }]), f;
  }(), i = function() {
    function f(l) {
      if (jr(this, f), !l)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = l, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(l.head || l.body || l.documentElement), l.readyState === "loading" ? l.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return Fr(f, [{
      key: "setInert",
      value: function(u, v) {
        if (v) {
          if (this._inertRoots.has(u))
            return;
          var h = new r(u, this);
          if (u.setAttribute("inert", ""), this._inertRoots.set(u, h), !this._document.body.contains(u))
            for (var b = u.parentNode; b; )
              b.nodeType === 11 && s(b), b = b.parentNode;
        } else {
          if (!this._inertRoots.has(u))
            return;
          var y = this._inertRoots.get(u);
          y.destructor(), this._inertRoots.delete(u), u.removeAttribute("inert");
        }
      }
      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {!Node} element
       * @return {!InertRoot|undefined}
       */
    }, {
      key: "getInertRoot",
      value: function(u) {
        return this._inertRoots.get(u);
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
      value: function(u, v) {
        var h = this._managedNodes.get(u);
        return h !== void 0 ? h.addInertRoot(v) : h = new a(u, v), this._managedNodes.set(u, h), h;
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
      value: function(u, v) {
        var h = this._managedNodes.get(u);
        return h ? (h.removeInertRoot(v), h.destroyed && this._managedNodes.delete(u), h) : null;
      }
      /**
       * Callback used when document has finished loading.
       */
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var u = e.call(this._document.querySelectorAll("[inert]"));
        u.forEach(function(v) {
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
      value: function(u, v) {
        var h = this;
        u.forEach(function(b) {
          switch (b.type) {
            case "childList":
              e.call(b.addedNodes).forEach(function(w) {
                if (w.nodeType === Node.ELEMENT_NODE) {
                  var E = e.call(w.querySelectorAll("[inert]"));
                  t.call(w, "[inert]") && E.unshift(w), E.forEach(function(_) {
                    this.setInert(_, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (b.attributeName !== "inert")
                return;
              var y = (
                /** @type {!HTMLElement} */
                b.target
              ), T = y.hasAttribute("inert");
              h.setInert(y, T);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function c(f, l, u) {
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
        for (var b = (
          /** @type {!HTMLContentElement} */
          v
        ), y = b.getDistributedNodes ? b.getDistributedNodes() : [], T = 0; T < y.length; T++)
          c(y[T], l);
        return;
      }
      if (v.localName == "slot") {
        for (var w = (
          /** @type {!HTMLSlotElement} */
          v
        ), E = w.assignedNodes ? w.assignedNodes({ flatten: !0 }) : [], _ = 0; _ < E.length; _++)
          c(E[_], l);
        return;
      }
    }
    for (var S = f.firstChild; S != null; )
      c(S, l), S = S.nextSibling;
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
    var d = new i(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      /** @this {!HTMLElement} */
      get: function() {
        return this.hasAttribute("inert");
      },
      /** @this {!HTMLElement} */
      set: function(l) {
        d.setInert(this, l);
      }
    });
  }
})();
const fr = lt(), pu = Object.freeze({
  ESC: 27
}), hu = "section[data-type='Section']:not([hidden]), div:not([hidden])", Ei = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = W(), i = W(!1), c = (v) => {
    const h = document.querySelector("#root");
    h.inert = v;
  }, s = (v) => {
    (v.keyCode || v.which) === pu.ESC && u();
  }, d = (v, h) => {
    a.current.classList.replace(v, h);
  }, f = (v) => {
    document.querySelectorAll(v).forEach((b) => {
      b.closest(hu) && !b.disabled && b.focus();
    });
  }, l = async (v) => {
    try {
      d("animate__fadeIn", "animate__fadeOut"), await new Promise((h) => setTimeout(h, 500)), d("animate__fadeOut", "animate__fadeIn"), c(!1), typeof v == "function" && v(), typeof r == "string" || Array.isArray(r) ? f(r) : typeof r == "object" && r.current.focus();
    } catch (h) {
      console.error("An error occurred:", h);
    }
  }, u = () => {
    l(n(!t));
  };
  return H(() => {
    const v = async () => {
      t || !i.current || (i.current = !1, c(!1), await l());
    };
    return t && (c(!0), i.current = !0, a.current && a.current.focus()), v(), () => {
      document.querySelector("#root").hasAttribute("inert") && c(!1);
    };
  }, [t]), /* @__PURE__ */ p(
    fr.Provider,
    {
      value: { isOpen: t, onKeyDown: s, onCloseModal: u, refModal: a },
      children: /* @__PURE__ */ p(dn, { id: "js-modal", children: Ue(e, ["ModalContent", "ModalOverlay"]) })
    }
  );
};
Ei.defaultProps = {
  isOpen: !1
};
Ei.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  finalFocusRef: o.oneOfType([
    o.object,
    o.string,
    o.arrayOf(o.string)
  ]).isRequired
};
const Qn = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, Si = ({
  addClass: e,
  children: t,
  onClick: n,
  onKeyDown: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const {
    isOpen: s,
    onKeyDown: d,
    onCloseModal: f,
    refModal: l
  } = Ee(fr), u = (h) => {
    n && typeof n == "function" && n(h), f();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: l,
      role: "dialog",
      tabIndex: "-1",
      hidden: !s,
      "aria-modal": "true",
      "data-type": i,
      onKeyDown: (h) => {
        r && typeof r == "function" && r(h), d(h);
      },
      className: ne(
        "animate__animated animate__fadeIn animate__faster video-interpreter-ui-modal",
        {
          [`${Qn["c-modal"]} u-px-3 u-py-3`]: !a,
          [e]: e
        }
      ),
      ...c,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: ne({ [Qn["c-modal-container"]]: !a }),
            "data-class": "c-modal__container",
            children: s ? t : null
          }
        ),
        /* @__PURE__ */ p(
          Wt,
          {
            addClass: ne({ [Qn["c-close-button"]]: !a }),
            "data-class": "c-modal__close-button",
            label: "Cerrar modal",
            hasAriaLabel: !0,
            onClick: u,
            ...a && { defaultStyle: a },
            children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p(
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
Si.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  onClick: o.func,
  onKeyDown: o.func,
  defaultStyle: o.bool,
  __TYPE: me("ModalContent")
};
Si.defaultProps = {
  __TYPE: "ModalContent"
};
const Oi = ({ addClass: e, onClick: t, defaultStyle: n }) => {
  const { isOpen: r, onCloseModal: a } = Ee(fr), i = (c) => {
    t && typeof t == "function" && t(c), a();
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: ne({
        [Qn["c-layout"]]: !n,
        [e]: e
      }),
      onClick: i,
      hidden: !r
    }
  );
};
Oi.propTypes = {
  addClass: o.string,
  onClick: o.func,
  defaultStyle: o.bool,
  __TYPE: me("ModalOverlay")
};
Oi.defaultProps = {
  __TYPE: "ModalOverlay"
};
const vu = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = Ee(fr), r = (a) => {
    t && t(a), n();
  };
  return Pe(e, { ...e.props, onClick: r });
};
vu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const rn = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, pr = lt(), Ci = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: c, onValue: s }) => {
  const [d, f] = G(r || 0), l = () => {
    if (n && d > i)
      return f(i);
    f((b) => b + c);
  }, u = () => {
    if (n && d < a)
      return f(a);
    f((b) => b - c);
  }, v = (b) => f(b), h = (b) => n && d === b;
  return H(() => {
    s && s(d);
  }, [d, s]), /* @__PURE__ */ p(
    pr.Provider,
    {
      value: {
        counter: d,
        min: a || Number.MIN_SAFE_INTEGER,
        max: i || Number.MAX_SAFE_INTEGER,
        validate: h,
        onChangeValue: v,
        onIncrementValue: l,
        onDecrementValue: u
      },
      children: /* @__PURE__ */ p("div", { className: `${rn["c-number-input"]} ${t ?? ""}`, children: Ue(e, ["NumberInputField", "NumberInputStepper"]) })
    }
  );
};
Ci.propTypes = {
  children: o.arrayOf(o.element),
  addClass: o.string,
  max: o.number,
  min: o.number,
  defaultValue: o.number,
  step: o.number,
  onValue: o.func,
  keepWithinRange: o.bool
};
Ci.defaultProps = {
  step: 1
};
const Pi = yt(
  ({ id: e, name: t, label: n, pattern: r, addClass: a, isLabelVisible: i }, c) => {
    const {
      counter: s,
      onChangeValue: d,
      onIncrementValue: f,
      onDecrementValue: l,
      min: u,
      max: v
    } = Ee(pr), h = e || Ot(), b = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), y = ({ target: w }) => {
      if (!isNaN(w.value) && w.value)
        return d(parseInt(w.value));
      d(0);
    }, T = (w) => {
      switch (w.keyCode || w.which) {
        case b.UP:
          f();
          break;
        case b.DOWN:
          l();
          break;
        case b.END:
          d(v);
          break;
        case b.HOME:
          d(u);
          break;
        default:
          return null;
      }
    };
    return /* @__PURE__ */ D(
      "label",
      {
        htmlFor: h,
        className: `${rn["c-number-input__label"]} ${a ?? ""}`,
        children: [
          /* @__PURE__ */ D("span", { className: `${!i && "u-sr-only"}`, children: [
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
              onChange: y,
              onKeyDown: T,
              ...s || s === 0 ? {
                value: s,
                "aria-valuemax": v,
                "aria-valuemin": u,
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
Pi.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Pi.propTypes = {
  id: o.string,
  name: o.string,
  label: o.string,
  pattern: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  __TYPE: me("NumberInputField")
};
const Di = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${rn["c-number-input__stepper"]} ${t ?? ""}`, children: Ue(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Di.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberInputStepper")
};
Di.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Ri = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = Ee(pr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Decrementar valor"}`,
      className: `${rn["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Ri.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberDecrementStepper"),
  label: o.string
};
Ri.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Ni = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: r, validate: a, max: i } = Ee(pr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Incrementar valor"}`,
      className: `${rn["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
Ni.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberIncrementStepper"),
  label: o.string
};
Ni.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const gu = (e) => {
  const {
    boundaryCount: t = 1,
    count: n = 1,
    defaultPage: r,
    disabled: a = !1,
    hideNextButton: i = !1,
    hidePrevButton: c = !1,
    onChange: s,
    showFirstButton: d = !1,
    showLastButton: f = !1,
    siblingCount: l = 1,
    ...u
  } = e, [v, h] = G(r || 1);
  H(() => {
    r && h(r);
  }, [r]);
  const b = (x, C) => {
    h(C), s && s(x, C);
  }, y = (x, C) => {
    const k = C - x + 1;
    return Array.from({ length: k }, (j, N) => x + N);
  }, T = y(1, Math.min(t, n)), w = y(
    Math.max(n - t + 1, t + 1),
    n
  ), E = Math.max(
    Math.min(
      // Inicio natural
      v - l,
      // Limite inferior cuando la página es mayor
      n - t - l * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), _ = Math.min(
    Math.max(
      // Final natural
      v + l,
      // Limite superior cuando la página es menor
      t + l * 2 + 2
    ),
    // Menor que el endPages
    w.length > 0 ? w[0] - 2 : n - 1
  ), S = [
    ...d ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...T,
    // Comienza el ellipsis
    ...E > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...y(E, _),
    // Finaliza el ellipsis
    ..._ < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...w,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], m = (x) => {
    switch (x) {
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
    items: S.map((x) => typeof x == "number" ? {
      onClick: (C) => {
        b(C, x);
      },
      type: "page",
      page: x,
      selected: x === v,
      disabled: a,
      "aria-current": x === v ? "page" : void 0
    } : {
      onClick: (C) => {
        b(C, m(x));
      },
      type: x,
      page: m(x),
      selected: !1,
      disabled: a || x.indexOf("ellipsis") === -1 && (x === "next" || x === "last" ? v >= n : v <= 1)
    }),
    ...u
  };
}, On = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, mu = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), bu = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${mu[e]} página`, Ii = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: r,
  ...a
}) => {
  const { items: i } = gu({ ...a });
  return /* @__PURE__ */ p(
    "nav",
    {
      className: ne({
        [On["c-pagination"]]: !r,
        [n]: n
      }),
      children: /* @__PURE__ */ p(
        "ul",
        {
          className: ne({
            [On["c-pagination__ul"]]: !r
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
Ii.defaultProps = {
  boundaryCount: 1,
  count: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(_o, { ...e }),
  getItemAriaLabel: bu
};
Ii.propTypes = {
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
const _o = ({ page: e, type: t, addClass: n, disabled: r, element: a, icons: i, selected: c, defaultStyle: s, ...d }) => {
  const l = {
    previous: (i == null ? void 0 : i.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (i == null ? void 0 : i.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" }),
    last: (i == null ? void 0 : i.last) || /* @__PURE__ */ p("path", { id: "last_page", d: "m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z" }),
    first: (i == null ? void 0 : i.first) || /* @__PURE__ */ p("path", { id: "first_page", d: "M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z" })
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? (
    // Devolvemos '...' si es de tipo ellipsis.
    /* @__PURE__ */ p("div", { className: On["c-pagination-item__ellipsis"], children: "..." })
  ) : Pe(
    a,
    {
      disabled: r,
      className: ne({
        [On["c-pagination-item"]]: !s,
        [On["c-pagination-item--selected"]]: !s && c,
        [n]: n
      }),
      ...a.props,
      ...d
    },
    [
      // Si es de tipo página colocar la página e.g 1,2,3.
      t === "page" && e,
      // Si existe el icono agregarlo e.g icon = 'last_page'
      l ? i ? /* @__PURE__ */ p(_e, { path: l }, t) : /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: l }) }, t) : null
    ]
  );
};
_o.propTypes = {
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
_o.defaultProps = {
  element: /* @__PURE__ */ p("button", {})
};
const Jt = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, hr = lt(), yu = ({ children: e, defaultIndex: t, addClass: n, type: r, defaultStyle: a }) => {
  const [i, c] = G(null), s = W([]), d = (h) => {
    s.current.includes(h) || (s.current = [...s.current, h]);
  }, f = (h) => c(s.current[h]), l = (h) => /:.*?:/g.test(h) ? i === h : s.current[h - 1] === i, u = () => [...s.current].reduce((h, b, y) => [...h, y + 1], []), v = (h) => s.current.indexOf(h) + 1;
  return H(() => {
    s.current.length !== 0 && (t !== void 0 ? f(t - 1) : c(s.current[0]));
  }, [t, s]), /* @__PURE__ */ p(
    hr.Provider,
    {
      value: {
        validation: l,
        onToggle: f,
        listId: u(),
        currentSection: v(i),
        getIndexById: v,
        addNewIdToSection: d,
        type: r
      },
      children: /* @__PURE__ */ p(
        "div",
        {
          className: ne("video-interpreter-ui-panel", {
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
yu.propTypes = {
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
const Mi = yt(
  ({ children: e, addClass: t, defaultStyle: n, __TYPE: r, ...a }, i) => {
    const { validation: c, addNewIdToSection: s, getIndexById: d, type: f } = Ee(hr), l = Ot(), u = c(l);
    return H(() => {
      l && s(l);
    }, [l]), /* @__PURE__ */ D(
      "section",
      {
        ref: i,
        role: f === "carrousel" ? "group" : "tabpanel",
        hidden: !u,
        "data-type": r,
        "aria-hidden": !u,
        "data-value": l,
        "aria-labelledby": `section-${l}`,
        className: ne({
          [Jt["c-section"]]: !n,
          "video-interpreter-ui-section": "video-interpreter-ui-section",
          [t]: t
        }),
        ...f === "carrousel" && {
          "aria-roledescription": "Sección"
        },
        ...a,
        children: [
          /* @__PURE__ */ D("span", { id: `section-${l}`, className: "u-sr-only", children: [
            "Sección ",
            d(l)
          ] }),
          e
        ]
      }
    );
  }
);
Mi.propTypes = {
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
Mi.defaultProps = {
  __TYPE: "Section"
};
const _u = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), ua = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), wu = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${_u[e]} sección`, Ai = ({
  renderItem: e,
  showPrevButton: t,
  showNextButton: n,
  icons: r,
  label: a,
  orientation: i,
  onValue: c,
  addClass: s,
  getItemAriaLabel: d,
  defaultStyle: f
}) => {
  const { validation: l, onToggle: u, listId: v, currentSection: h } = Ee(hr), b = W([]), y = Object.freeze({
    previous: h - 1,
    next: h + 1
  }), T = {
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
  }, [w, E] = G([]);
  H(() => {
    v.length !== 0 && E([
      // Botón para navegar a la sección anterior.
      ...t ? ["previous"] : [],
      // Lista de todas la secciones.
      ...v || [],
      // Botón para navegar a la siguiente sección.
      ...n ? ["next"] : []
    ]);
  }, [v]);
  const _ = (x) => !b.current.includes(x) && x ? b.current = [...b.current, x] : b.current, S = (x) => {
    const C = b.current[0], k = b.current[b.current.length - 1];
    if ((x.keyCode || x.which) === ua.LEFT)
      if (x.target === C)
        k.focus();
      else {
        const j = b.current.indexOf(x.target) - 1;
        b.current[j].focus();
      }
    else if ((x.keyCode || x.which) === ua.RIGHT)
      if (x.target === k)
        C.focus();
      else {
        const j = b.current.indexOf(x.target) + 1;
        b.current[j].focus();
      }
  }, m = (x) => {
    u(v.findIndex((C) => C === x)), c !== void 0 && c(x, v.length);
  }, P = w.map((x) => {
    let C = [...v];
    return C = C.pop(), typeof x == "number" ? {
      onClick: (k) => {
        m(x);
      },
      type: "section",
      section: x,
      selected: l(x),
      ref: _,
      onKeyDown: S
    } : {
      onClick: () => {
        m(y[x]);
      },
      type: x,
      section: y[x],
      selected: !1,
      disabled: x === "next" ? h >= C : h <= v[0]
    };
  });
  return H(() => {
    c !== void 0 && c(h, v.length);
  }, []), /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: ne({
          [Jt["c-navigation"]]: !f,
          [s]: s
        }),
        children: e ? e(P) : P.map(({ section: x, type: C, selected: k, ...j }, N) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: ne({
              [Jt["c-navigation__item"]]: !f
            }),
            children: C === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${x}`,
                role: "tab",
                tabIndex: `${k ? 0 : -1}`,
                "aria-selected": k,
                "data-class": "c-navigation__section",
                className: ne({
                  [Jt["c-navigation__section"]]: !f
                }),
                "aria-label": d(C, x, k),
                ...j
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: ne({
                  [Jt["c-navigation__button"]]: !f
                }),
                "aria-label": d(C, x, k),
                ...j,
                children: T[C] ? r ? /* @__PURE__ */ p(_e, { path: T[C] }, C) : /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: T[C]
                  }
                ) }, C) : null
              }
            )
          },
          `navigation-section-item-${N}`
        ))
      }
    )
  ] });
};
Ai.propTypes = {
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
Ai.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: wu
};
const xu = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = Ee(hr), a = (i) => {
    r(t - 1), n && n(i);
  };
  return De.map(e, (i) => Pe(i, { ...i.props, onClick: a }));
};
xu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const Tu = {
  "c-paper": "_c-paper_1sbf6_1"
}, Eu = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = W(null);
  return sr(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${Tu["c-paper"]} ${n ?? ""}`,
      ...r,
      children: e
    }
  );
};
Eu.propTypes = {
  children: o.oneOfType([
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  color: o.string
};
const Su = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Ou = (e) => {
  document.body.append(e);
}, Cu = (e) => {
  const t = W(null);
  H(() => {
    const r = document.querySelector(`#${e}`), a = r || Su(e);
    return r || Ou(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, dn = ({ children: e, id: t }) => {
  const n = Cu(t);
  return Na(e, n);
};
dn.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const Pu = "_row_1adiy_1", Du = {
  row: Pu
}, Ru = yt(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Du.row} ${e ?? ""}`, ...t }));
Ru.propTypes = {
  addClass: o.string
};
const yn = {
  "c-select-label": "_c-select-label_16c2e_1",
  "c-select-wrapper": "_c-select-wrapper_16c2e_11",
  "c-select": "_c-select_16c2e_1",
  "c-select__icon": "_c-select__icon_16c2e_38"
}, $i = yt(
  ({
    children: e,
    id: t,
    placeholder: n,
    label: r,
    icon: a,
    addClass: i,
    isLabelVisible: c,
    isDisabled: s,
    isRequired: d,
    onChoise: f,
    defaultValue: l,
    defaultStyle: u
  }, v) => {
    const h = t || Ot(), b = ({ target: y }) => {
      f && f({ id: h, value: y.value });
    };
    return /* @__PURE__ */ D(
      "label",
      {
        htmlFor: h,
        className: ne({
          [yn["c-select-label"]]: !u,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ D("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            r,
            " "
          ] }),
          /* @__PURE__ */ D("div", { className: yn["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
            /* @__PURE__ */ D(
              "select",
              {
                id: h,
                ref: v,
                name: h,
                defaultValue: l,
                className: ne({
                  [yn["c-select"]]: !u
                }),
                "data-class": "c-select",
                onChange: b,
                disabled: s,
                required: d,
                children: [
                  /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
                  Ue(e, ["option", "optgroup"])
                ]
              }
            ),
            a ? /* @__PURE__ */ p(
              _e,
              {
                path: a,
                "data-class": "c-select__icon",
                addClass: ne({ [yn["c-select__icon"]]: !u })
              }
            ) : /* @__PURE__ */ p(
              _e,
              {
                "data-class": "c-select__icon",
                addClass: ne({ [yn["c-select__icon"]]: !u }),
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
$i.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
$i.propTypes = {
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
const Nu = ({ children: e, onAllSelect: t }) => {
  const [n, r] = G([]), a = (c) => r([
    ...n.filter((s) => s.id !== c.id),
    { ...c }
  ]);
  return H(() => {
    t && t(n);
  }, [n, t]), De.map(e, (c) => {
    var s;
    return st(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? Pe(c, { ...c.props, onChoise: a }) : c : null;
  });
};
Nu.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onAllSelect: o.func
};
const Br = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, da = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), ki = yt(
  ({
    id: e,
    name: t,
    size: n,
    value: r,
    label: a,
    addClass: i,
    isDisabled: c,
    defaultChecked: s,
    isLabelVisible: d,
    onChange: f
  }, l) => {
    const [u, v] = G(!1), h = e || Ot(), b = ({ target: T }) => {
      if (v(T.checked), !!f) {
        if (T.checked) {
          f({ id: T.id, value: T.value });
          return;
        }
        f({ id: T.id, value: "" });
      }
    }, y = (T) => {
      ((T.keyCode || T.which) === da.SPACE || (T.keyCode || T.which) === da.ENTER) && v((w) => (f && f(w ? { id: h, value: "" } : { id: h, value: `${r}` }), !w));
    };
    return H(() => (s && v(!!s), () => {
      v(!1);
    }), [s]), /* @__PURE__ */ D(
      "label",
      {
        htmlFor: h,
        className: `${Br["c-label"]} ${Br[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ D("span", { className: `${!d && "u-sr-only"}`, children: [
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
              checked: u,
              "aria-disabled": c,
              className: `${Br["c-switch"]} ${i ?? ""}`,
              onChange: b,
              onKeyDown: y,
              ...c && { disabled: !0 }
            }
          )
        ]
      }
    );
  }
);
ki.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
ki.propTypes = {
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
const wo = lt(), Iu = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = G(0), c = (d) => i(d), s = (d) => a === d;
  return H(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(wo.Provider, { value: { validation: s, onToggle: c }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: Ue(e, ["TabList", "TabPanels"]) }) });
};
Iu.propTypes = {
  children: o.arrayOf(o.element),
  defaultIndex: o.number,
  addClass: o.string
};
const In = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, Li = ({
  children: e,
  id: t,
  selected: n,
  addClass: r,
  icon: a,
  addNewRef: i,
  onNavigation: c,
  onClick: s,
  defaultStyle: d,
  __TYPE: f,
  ...l
}) => {
  const u = W(), { validation: v, onToggle: h } = Ee(wo), b = v(t), y = (T) => {
    s && s(T), h(t);
  };
  return H(() => (u.current && i(u.current), () => {
    u.current = null;
  }), [u]), /* @__PURE__ */ D(
    "button",
    {
      id: `tab-${t}`,
      role: "tab",
      ref: u,
      "data-type": f,
      tabIndex: `${b ? 0 : -1}`,
      "aria-controls": `panel-${t}`,
      "aria-selected": b,
      onKeyDown: c,
      onClick: y,
      className: ne({
        [`${In["c-tab__button"]} u-flex`]: !d,
        [r]: r,
        [b]: n
      }),
      ...l,
      children: [
        e,
        a && a(b)
      ]
    }
  );
};
Li.propTypes = {
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
Li.defaultProps = {
  __TYPE: "Tab"
};
const fa = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Fi = ({
  children: e,
  addClass: t,
  label: n,
  orientation: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const s = W([]), d = (u) => s.current = [...s.current, u], f = (u) => {
    const v = s.current[0], h = s.current[s.current.length - 1];
    if ((u.keyCode || u.which) === fa.LEFT)
      if (u.target === v)
        h.focus();
      else {
        const b = s.current.indexOf(u.target) - 1;
        s.current[b].focus();
      }
    else if ((u.keyCode || u.which) === fa.RIGHT)
      if (u.target === h)
        v.focus();
      else {
        const b = s.current.indexOf(u.target) + 1;
        s.current[b].focus();
      }
  }, l = De.map(e, (u, v) => st(u) ? Pe(u, {
    ...u.props,
    id: v,
    addNewRef: d,
    onNavigation: f
  }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      role: "tablist",
      "data-type": i,
      "aria-label": n,
      "aria-orientation": r,
      className: ne({
        [In["c-tab__list"]]: !a,
        [t]: t
      }),
      ...c,
      children: Ue(l, ["Tab"])
    }
  );
};
Fi.propTypes = {
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
Fi.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const ji = ({ children: e, id: t, addClass: n, defaultStyle: r, __TYPE: a, ...i }) => {
  const { validation: c } = Ee(wo), s = c(t);
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
      className: ne({
        [In["c-tab__panel--active"]]: !r && s,
        [In["c-tab__panel"]]: !r && !s,
        "video-interpreter-ui-tabpanel": "video-interpreter-ui-tabpanel",
        [n]: n
      }),
      ...i,
      children: e
    }
  );
};
ji.propTypes = {
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
ji.defaultProps = {
  __TYPE: "TabPanel"
};
const Bi = ({
  children: e,
  addClass: t,
  defaultStyle: n,
  __TYPE: r,
  ...a
}) => {
  const i = De.map(e, (c, s) => st(c) ? Pe(c, { ...c.props, id: s }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: ne({
        [In["c-tab__panels"]]: !n,
        [t]: t
      }),
      "data-type": r,
      ...a,
      children: Ue(i, ["TabPanel"])
    }
  );
};
Bi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("TabPanels")
};
Bi.defaultProps = {
  __TYPE: "TabPanels"
};
const Vr = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, Vi = yt(
  ({
    id: e,
    value: t,
    resize: n,
    placeholder: r,
    label: a,
    addClass: i,
    isLabelVisible: c,
    isDisabled: s,
    isRequired: d,
    defaultStyle: f,
    onValue: l,
    ...u
  }, v) => {
    const h = e || Ot(), b = ({ target: y }) => {
      l && l({ id: h, value: y.value });
    };
    return /* @__PURE__ */ D(
      "label",
      {
        htmlFor: h,
        className: ne({
          [Vr["c-label"]]: !f,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ D("span", { className: `${!c && "u-sr-only"}`, children: [
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
              required: d,
              placeholder: r,
              autoComplete: "off",
              onChange: b,
              "data-class": "c-textarea",
              className: ne({
                [`${Vr["c-textarea"]} ${Vr[`c-textarea--${n}`]}`]: !f
              }),
              ...u
            }
          )
        ]
      }
    );
  }
);
Vi.defaultProps = {
  resize: "vertical",
  placeholder: "This is an example of a placeholder"
};
Vi.propTypes = {
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
const Mu = Da(({ children: e, theme: t = {} }) => {
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
  return H(() => {
    if (Object.entries(t).length !== 0)
      return n(t), () => {
        t = {};
      };
  }, [t]), e;
});
Mu.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var pa = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, ha = typeof window < "u" && window.document && window.document.createElement ? zt.useLayoutEffect : zt.useEffect, ze = "top", at = "bottom", it = "right", We = "left", vr = "auto", jn = [ze, at, it, We], on = "start", Mn = "end", Au = "clippingParents", qi = "viewport", _n = "popper", $u = "reference", va = /* @__PURE__ */ jn.reduce(function(e, t) {
  return e.concat([t + "-" + on, t + "-" + Mn]);
}, []), Yi = /* @__PURE__ */ [].concat(jn, [vr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + on, t + "-" + Mn]);
}, []), ku = "beforeRead", Lu = "read", Fu = "afterRead", ju = "beforeMain", Bu = "main", Vu = "afterMain", qu = "beforeWrite", Yu = "write", zu = "afterWrite", oo = [ku, Lu, Fu, ju, Bu, Vu, qu, Yu, zu];
function bt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ct(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ht(e) {
  var t = ct(e).Element;
  return e instanceof t || e instanceof Element;
}
function Xe(e) {
  var t = ct(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function xo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ct(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Wu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !Xe(i) || !bt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Uu(e) {
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
      var a = t.elements[r], i = t.attributes[r] || {}, c = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = c.reduce(function(d, f) {
        return d[f] = "", d;
      }, {});
      !Xe(a) || !bt(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(d) {
        a.removeAttribute(d);
      }));
    });
  };
}
const Hu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Wu,
  effect: Uu,
  requires: ["computeStyles"]
};
function vt(e) {
  return e.split("-")[0];
}
var Ut = Math.max, ir = Math.min, an = Math.round;
function ao() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function zi() {
  return !/^((?!chrome|android).)*safari/i.test(ao());
}
function sn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && Xe(e) && (a = e.offsetWidth > 0 && an(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && an(r.height) / e.offsetHeight || 1);
  var c = Ht(e) ? ct(e) : window, s = c.visualViewport, d = !zi() && n, f = (r.left + (d && s ? s.offsetLeft : 0)) / a, l = (r.top + (d && s ? s.offsetTop : 0)) / i, u = r.width / a, v = r.height / i;
  return {
    width: u,
    height: v,
    top: l,
    right: f + u,
    bottom: l + v,
    left: f,
    x: f,
    y: l
  };
}
function To(e) {
  var t = sn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Wi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && xo(n)) {
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
  return ct(e).getComputedStyle(e);
}
function Zu(e) {
  return ["table", "td", "th"].indexOf(bt(e)) >= 0;
}
function At(e) {
  return ((Ht(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function gr(e) {
  return bt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (xo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    At(e)
  );
}
function ga(e) {
  return !Xe(e) || // https://github.com/popperjs/popper-core/issues/837
  mt(e).position === "fixed" ? null : e.offsetParent;
}
function Gu(e) {
  var t = /firefox/i.test(ao()), n = /Trident/i.test(ao());
  if (n && Xe(e)) {
    var r = mt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = gr(e);
  for (xo(a) && (a = a.host); Xe(a) && ["html", "body"].indexOf(bt(a)) < 0; ) {
    var i = mt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Bn(e) {
  for (var t = ct(e), n = ga(e); n && Zu(n) && mt(n).position === "static"; )
    n = ga(n);
  return n && (bt(n) === "html" || bt(n) === "body" && mt(n).position === "static") ? t : n || Gu(e) || t;
}
function Eo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cn(e, t, n) {
  return Ut(e, ir(t, n));
}
function Xu(e, t, n) {
  var r = Cn(e, t, n);
  return r > n ? n : r;
}
function Ui() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Hi(e) {
  return Object.assign({}, Ui(), e);
}
function Zi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Ku = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Hi(typeof t != "number" ? t : Zi(t, jn));
};
function Qu(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = vt(n.placement), d = Eo(s), f = [We, it].indexOf(s) >= 0, l = f ? "height" : "width";
  if (!(!i || !c)) {
    var u = Ku(a.padding, n), v = To(i), h = d === "y" ? ze : We, b = d === "y" ? at : it, y = n.rects.reference[l] + n.rects.reference[d] - c[d] - n.rects.popper[l], T = c[d] - n.rects.reference[d], w = Bn(i), E = w ? d === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, _ = y / 2 - T / 2, S = u[h], m = E - v[l] - u[b], P = E / 2 - v[l] / 2 + _, x = Cn(S, P, m), C = d;
    n.modifiersData[r] = (t = {}, t[C] = x, t.centerOffset = x - P, t);
  }
}
function Ju(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (Xe(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Wi(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const ed = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Qu,
  effect: Ju,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ln(e) {
  return e.split("-")[1];
}
var td = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function nd(e) {
  var t = e.x, n = e.y, r = window, a = r.devicePixelRatio || 1;
  return {
    x: an(t * a) / a || 0,
    y: an(n * a) / a || 0
  };
}
function ma(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, d = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, u = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, b = c.y, y = b === void 0 ? 0 : b, T = typeof l == "function" ? l({
    x: h,
    y
  }) : {
    x: h,
    y
  };
  h = T.x, y = T.y;
  var w = c.hasOwnProperty("x"), E = c.hasOwnProperty("y"), _ = We, S = ze, m = window;
  if (f) {
    var P = Bn(n), x = "clientHeight", C = "clientWidth";
    if (P === ct(n) && (P = At(n), mt(P).position !== "static" && s === "absolute" && (x = "scrollHeight", C = "scrollWidth")), P = P, a === ze || (a === We || a === it) && i === Mn) {
      S = at;
      var k = u && P === m && m.visualViewport ? m.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[x]
      );
      y -= k - r.height, y *= d ? 1 : -1;
    }
    if (a === We || (a === ze || a === at) && i === Mn) {
      _ = it;
      var j = u && P === m && m.visualViewport ? m.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[C]
      );
      h -= j - r.width, h *= d ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: s
  }, f && td), $ = l === !0 ? nd({
    x: h,
    y
  }) : {
    x: h,
    y
  };
  if (h = $.x, y = $.y, d) {
    var B;
    return Object.assign({}, N, (B = {}, B[S] = E ? "0" : "", B[_] = w ? "0" : "", B.transform = (m.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + y + "px)" : "translate3d(" + h + "px, " + y + "px, 0)", B));
  }
  return Object.assign({}, N, (t = {}, t[S] = E ? y + "px" : "", t[_] = w ? h + "px" : "", t.transform = "", t));
}
function rd(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, c = i === void 0 ? !0 : i, s = n.roundOffsets, d = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = mt(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(u) {
      return f.indexOf(u) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var l = {
    placement: vt(t.placement),
    variation: ln(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ma(Object.assign({}, l, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ma(Object.assign({}, l, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const od = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: rd,
  data: {}
};
var Gn = {
  passive: !0
};
function ad(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, c = r.resize, s = c === void 0 ? !0 : c, d = ct(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, Gn);
  }), s && d.addEventListener("resize", n.update, Gn), function() {
    i && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Gn);
    }), s && d.removeEventListener("resize", n.update, Gn);
  };
}
const id = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ad,
  data: {}
};
var sd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Jn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sd[t];
  });
}
var ld = {
  start: "end",
  end: "start"
};
function ba(e) {
  return e.replace(/start|end/g, function(t) {
    return ld[t];
  });
}
function So(e) {
  var t = ct(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Oo(e) {
  return sn(At(e)).left + So(e).scrollLeft;
}
function cd(e, t) {
  var n = ct(e), r = At(e), a = n.visualViewport, i = r.clientWidth, c = r.clientHeight, s = 0, d = 0;
  if (a) {
    i = a.width, c = a.height;
    var f = zi();
    (f || !f && t === "fixed") && (s = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s + Oo(e),
    y: d
  };
}
function ud(e) {
  var t, n = At(e), r = So(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ut(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Ut(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Oo(e), d = -r.scrollTop;
  return mt(a || n).direction === "rtl" && (s += Ut(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: d
  };
}
function Co(e) {
  var t = mt(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Gi(e) {
  return ["html", "body", "#document"].indexOf(bt(e)) >= 0 ? e.ownerDocument.body : Xe(e) && Co(e) ? e : Gi(gr(e));
}
function Pn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Gi(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = ct(r), c = a ? [i].concat(i.visualViewport || [], Co(r) ? r : []) : r, s = t.concat(c);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Pn(gr(c)))
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
function dd(e, t) {
  var n = sn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ya(e, t, n) {
  return t === qi ? io(cd(e, n)) : Ht(t) ? dd(t, n) : io(ud(At(e)));
}
function fd(e) {
  var t = Pn(gr(e)), n = ["absolute", "fixed"].indexOf(mt(e).position) >= 0, r = n && Xe(e) ? Bn(e) : e;
  return Ht(r) ? t.filter(function(a) {
    return Ht(a) && Wi(a, r) && bt(a) !== "body";
  }) : [];
}
function pd(e, t, n, r) {
  var a = t === "clippingParents" ? fd(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(d, f) {
    var l = ya(e, f, r);
    return d.top = Ut(l.top, d.top), d.right = ir(l.right, d.right), d.bottom = ir(l.bottom, d.bottom), d.left = Ut(l.left, d.left), d;
  }, ya(e, c, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Xi(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? vt(r) : null, i = r ? ln(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, d;
  switch (a) {
    case ze:
      d = {
        x: c,
        y: t.y - n.height
      };
      break;
    case at:
      d = {
        x: c,
        y: t.y + t.height
      };
      break;
    case it:
      d = {
        x: t.x + t.width,
        y: s
      };
      break;
    case We:
      d = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      d = {
        x: t.x,
        y: t.y
      };
  }
  var f = a ? Eo(a) : null;
  if (f != null) {
    var l = f === "y" ? "height" : "width";
    switch (i) {
      case on:
        d[f] = d[f] - (t[l] / 2 - n[l] / 2);
        break;
      case Mn:
        d[f] = d[f] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return d;
}
function An(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, d = s === void 0 ? Au : s, f = n.rootBoundary, l = f === void 0 ? qi : f, u = n.elementContext, v = u === void 0 ? _n : u, h = n.altBoundary, b = h === void 0 ? !1 : h, y = n.padding, T = y === void 0 ? 0 : y, w = Hi(typeof T != "number" ? T : Zi(T, jn)), E = v === _n ? $u : _n, _ = e.rects.popper, S = e.elements[b ? E : v], m = pd(Ht(S) ? S : S.contextElement || At(e.elements.popper), d, l, c), P = sn(e.elements.reference), x = Xi({
    reference: P,
    element: _,
    strategy: "absolute",
    placement: a
  }), C = io(Object.assign({}, _, x)), k = v === _n ? C : P, j = {
    top: m.top - k.top + w.top,
    bottom: k.bottom - m.bottom + w.bottom,
    left: m.left - k.left + w.left,
    right: k.right - m.right + w.right
  }, N = e.modifiersData.offset;
  if (v === _n && N) {
    var $ = N[a];
    Object.keys(j).forEach(function(B) {
      var q = [it, at].indexOf(B) >= 0 ? 1 : -1, te = [ze, at].indexOf(B) >= 0 ? "y" : "x";
      j[B] += $[te] * q;
    });
  }
  return j;
}
function hd(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, d = n.allowedAutoPlacements, f = d === void 0 ? Yi : d, l = ln(r), u = l ? s ? va : va.filter(function(b) {
    return ln(b) === l;
  }) : jn, v = u.filter(function(b) {
    return f.indexOf(b) >= 0;
  });
  v.length === 0 && (v = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(b, y) {
    return b[y] = An(e, {
      placement: y,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[vt(y)], b;
  }, {});
  return Object.keys(h).sort(function(b, y) {
    return h[b] - h[y];
  });
}
function vd(e) {
  if (vt(e) === vr)
    return [];
  var t = Jn(e);
  return [ba(e), t, ba(t)];
}
function gd(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, d = n.fallbackPlacements, f = n.padding, l = n.boundary, u = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, b = h === void 0 ? !0 : h, y = n.allowedAutoPlacements, T = t.options.placement, w = vt(T), E = w === T, _ = d || (E || !b ? [Jn(T)] : vd(T)), S = [T].concat(_).reduce(function(z, Q) {
      return z.concat(vt(Q) === vr ? hd(t, {
        placement: Q,
        boundary: l,
        rootBoundary: u,
        padding: f,
        flipVariations: b,
        allowedAutoPlacements: y
      }) : Q);
    }, []), m = t.rects.reference, P = t.rects.popper, x = /* @__PURE__ */ new Map(), C = !0, k = S[0], j = 0; j < S.length; j++) {
      var N = S[j], $ = vt(N), B = ln(N) === on, q = [ze, at].indexOf($) >= 0, te = q ? "width" : "height", Y = An(t, {
        placement: N,
        boundary: l,
        rootBoundary: u,
        altBoundary: v,
        padding: f
      }), X = q ? B ? it : We : B ? at : ze;
      m[te] > P[te] && (X = Jn(X));
      var le = Jn(X), Z = [];
      if (i && Z.push(Y[$] <= 0), s && Z.push(Y[X] <= 0, Y[le] <= 0), Z.every(function(z) {
        return z;
      })) {
        k = N, C = !1;
        break;
      }
      x.set(N, Z);
    }
    if (C)
      for (var O = b ? 3 : 1, I = function(Q) {
        var V = S.find(function(J) {
          var ee = x.get(J);
          if (ee)
            return ee.slice(0, Q).every(function(ae) {
              return ae;
            });
        });
        if (V)
          return k = V, "break";
      }, F = O; F > 0; F--) {
        var U = I(F);
        if (U === "break")
          break;
      }
    t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const md = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: gd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _a(e, t, n) {
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
function wa(e) {
  return [ze, it, at, We].some(function(t) {
    return e[t] >= 0;
  });
}
function bd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = An(t, {
    elementContext: "reference"
  }), s = An(t, {
    altBoundary: !0
  }), d = _a(c, r), f = _a(s, a, i), l = wa(d), u = wa(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: d,
    popperEscapeOffsets: f,
    isReferenceHidden: l,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": l,
    "data-popper-escaped": u
  });
}
const yd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: bd
};
function _d(e, t, n) {
  var r = vt(e), a = [We, ze].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, c = i[0], s = i[1];
  return c = c || 0, s = (s || 0) * a, [We, it].indexOf(r) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function wd(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = Yi.reduce(function(l, u) {
    return l[u] = _d(u, t.rects, i), l;
  }, {}), s = c[t.placement], d = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
}
const xd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: wd
};
function Td(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Xi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ed = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Td,
  data: {}
};
function Sd(e) {
  return e === "x" ? "y" : "x";
}
function Od(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, d = n.boundary, f = n.rootBoundary, l = n.altBoundary, u = n.padding, v = n.tether, h = v === void 0 ? !0 : v, b = n.tetherOffset, y = b === void 0 ? 0 : b, T = An(t, {
    boundary: d,
    rootBoundary: f,
    padding: u,
    altBoundary: l
  }), w = vt(t.placement), E = ln(t.placement), _ = !E, S = Eo(w), m = Sd(S), P = t.modifiersData.popperOffsets, x = t.rects.reference, C = t.rects.popper, k = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, j = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, $ = {
    x: 0,
    y: 0
  };
  if (P) {
    if (i) {
      var B, q = S === "y" ? ze : We, te = S === "y" ? at : it, Y = S === "y" ? "height" : "width", X = P[S], le = X + T[q], Z = X - T[te], O = h ? -C[Y] / 2 : 0, I = E === on ? x[Y] : C[Y], F = E === on ? -C[Y] : -x[Y], U = t.elements.arrow, z = h && U ? To(U) : {
        width: 0,
        height: 0
      }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ui(), V = Q[q], J = Q[te], ee = Cn(0, x[Y], z[Y]), ae = _ ? x[Y] / 2 - O - ee - V - j.mainAxis : I - ee - V - j.mainAxis, K = _ ? -x[Y] / 2 + O + ee + J + j.mainAxis : F + ee + J + j.mainAxis, ve = t.elements.arrow && Bn(t.elements.arrow), M = ve ? S === "y" ? ve.clientTop || 0 : ve.clientLeft || 0 : 0, A = (B = N == null ? void 0 : N[S]) != null ? B : 0, re = X + ae - A - M, ie = X + K - A, Se = Cn(h ? ir(le, re) : le, X, h ? Ut(Z, ie) : Z);
      P[S] = Se, $[S] = Se - X;
    }
    if (s) {
      var Qe, xt = S === "x" ? ze : We, Je = S === "x" ? at : it, Oe = P[m], ut = m === "y" ? "height" : "width", dt = Oe + T[xt], $t = Oe - T[Je], Ct = [ze, We].indexOf(w) !== -1, kt = (Qe = N == null ? void 0 : N[m]) != null ? Qe : 0, Lt = Ct ? dt : Oe - x[ut] - C[ut] - kt + j.altAxis, Le = Ct ? Oe + x[ut] + C[ut] - kt - j.altAxis : $t, ft = h && Ct ? Xu(Lt, Oe, Le) : Cn(h ? Lt : dt, Oe, h ? Le : $t);
      P[m] = ft, $[m] = ft - Oe;
    }
    t.modifiersData[r] = $;
  }
}
const Cd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Od,
  requiresIfExists: ["offset"]
};
function Pd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Dd(e) {
  return e === ct(e) || !Xe(e) ? So(e) : Pd(e);
}
function Rd(e) {
  var t = e.getBoundingClientRect(), n = an(t.width) / e.offsetWidth || 1, r = an(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Nd(e, t, n) {
  n === void 0 && (n = !1);
  var r = Xe(t), a = Xe(t) && Rd(t), i = At(t), c = sn(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((bt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Co(i)) && (s = Dd(t)), Xe(t) ? (d = sn(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : i && (d.x = Oo(i))), {
    x: c.left + s.scrollLeft - d.x,
    y: c.top + s.scrollTop - d.y,
    width: c.width,
    height: c.height
  };
}
function Id(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var c = [].concat(i.requires || [], i.requiresIfExists || []);
    c.forEach(function(s) {
      if (!n.has(s)) {
        var d = t.get(s);
        d && a(d);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function Md(e) {
  var t = Id(e);
  return oo.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Ad(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Dt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(a, i) {
    return a.replace(/%s/, i);
  }, e);
}
var Yt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', $d = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', xa = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function kd(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), xa).filter(function(n, r, a) {
      return a.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Dt(Yt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Dt(Yt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          oo.indexOf(t.phase) < 0 && console.error(Dt(Yt, t.name, '"phase"', "either " + oo.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Dt(Yt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Dt(Yt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Dt(Yt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Dt(Yt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + xa.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(r) {
        e.find(function(a) {
          return a.name === r;
        }) == null && console.error(Dt($d, String(t.name), r, r));
      });
    });
  });
}
function Ld(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var a = t(r);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function Fd(e) {
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
var Ta = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", jd = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ea = {
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
function Bd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Ea : a;
  return function(s, d, f) {
    f === void 0 && (f = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ea, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: d
      },
      attributes: {},
      styles: {}
    }, u = [], v = !1, h = {
      state: l,
      setOptions: function(w) {
        var E = typeof w == "function" ? w(l.options) : w;
        y(), l.options = Object.assign({}, i, l.options, E), l.scrollParents = {
          reference: Ht(s) ? Pn(s) : s.contextElement ? Pn(s.contextElement) : [],
          popper: Pn(d)
        };
        var _ = Md(Fd([].concat(r, l.options.modifiers)));
        if (l.orderedModifiers = _.filter(function(N) {
          return N.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Ld([].concat(_, l.options.modifiers), function(N) {
            var $ = N.name;
            return $;
          });
          if (kd(S), vt(l.options.placement) === vr) {
            var m = l.orderedModifiers.find(function(N) {
              var $ = N.name;
              return $ === "flip";
            });
            m || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var P = mt(d), x = P.marginTop, C = P.marginRight, k = P.marginBottom, j = P.marginLeft;
          [x, C, k, j].some(function(N) {
            return parseFloat(N);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = l.elements, E = w.reference, _ = w.popper;
          if (!Sa(E, _)) {
            process.env.NODE_ENV !== "production" && console.error(Ta);
            return;
          }
          l.rects = {
            reference: Nd(E, Bn(_), l.options.strategy === "fixed"),
            popper: To(_)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(N) {
            return l.modifiersData[N.name] = Object.assign({}, N.data);
          });
          for (var S = 0, m = 0; m < l.orderedModifiers.length; m++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(jd);
              break;
            }
            if (l.reset === !0) {
              l.reset = !1, m = -1;
              continue;
            }
            var P = l.orderedModifiers[m], x = P.fn, C = P.options, k = C === void 0 ? {} : C, j = P.name;
            typeof x == "function" && (l = x({
              state: l,
              options: k,
              name: j,
              instance: h
            }) || l);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ad(function() {
        return new Promise(function(T) {
          h.forceUpdate(), T(l);
        });
      }),
      destroy: function() {
        y(), v = !0;
      }
    };
    if (!Sa(s, d))
      return process.env.NODE_ENV !== "production" && console.error(Ta), h;
    h.setOptions(f).then(function(T) {
      !v && f.onFirstUpdate && f.onFirstUpdate(T);
    });
    function b() {
      l.orderedModifiers.forEach(function(T) {
        var w = T.name, E = T.options, _ = E === void 0 ? {} : E, S = T.effect;
        if (typeof S == "function") {
          var m = S({
            state: l,
            name: w,
            instance: h,
            options: _
          }), P = function() {
          };
          u.push(m || P);
        }
      });
    }
    function y() {
      u.forEach(function(T) {
        return T();
      }), u = [];
    }
    return h;
  };
}
var Vd = [id, Ed, od, Hu, xd, md, Cd, ed, yd], qd = /* @__PURE__ */ Bd({
  defaultModifiers: Vd
}), Yd = typeof Element < "u", zd = typeof Map == "function", Wd = typeof Set == "function", Ud = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (zd && e instanceof Map && t instanceof Map) {
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
    if (Wd && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Ud && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, a[r]))
        return !1;
    if (Yd && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !er(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Hd = function(t, n) {
  try {
    return er(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Zd = /* @__PURE__ */ $n(Hd);
var Gd = [], mr = function(t, n, r) {
  r === void 0 && (r = {});
  var a = zt.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || Gd
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
  }), s = c[0], d = c[1], f = zt.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var b = h.state, y = Object.keys(b.elements);
        ms.flushSync(function() {
          d({
            styles: pa(y.map(function(T) {
              return [T, b.styles[T] || {}];
            })),
            attributes: pa(y.map(function(T) {
              return [T, b.attributes[T]];
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
    return Zd(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), u = zt.useRef();
  return ha(function() {
    u.current && u.current.setOptions(l);
  }, [l]), ha(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || qd, h = v(t, n, l);
      return u.current = h, function() {
        h.destroy(), u.current = null;
      };
    }
  }, [t, n, r.createPopper]), {
    state: u.current ? u.current.state : null,
    styles: s.styles,
    attributes: s.attributes,
    update: u.current ? u.current.update : null,
    forceUpdate: u.current ? u.current.forceUpdate : null
  };
};
const qr = {
  "c-toggletip": "_c-toggletip_7t6cz_1",
  "c-toggletip--active": "_c-toggletip--active_7t6cz_17",
  "c-toggletip__arrow": "_c-toggletip__arrow_7t6cz_21"
}, Xd = Object.freeze({
  ESC: 27
}), Ki = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s,
  isVisible: d,
  onClick: f
}) => {
  const [l, u] = G(!1), v = W(null), h = W(null), b = t || Ot(), y = (m) => u(!1), T = (m) => {
    u(!l), l && document.activeElement === v.current && !d && setTimeout(() => {
      u((P) => !P);
    }, 100), f && f(m);
  }, w = (m) => {
    (m.keyCode | m.which) === Xd.ESC && l && u(!l);
  }, E = De.map(e, (m) => st(m) ? Pe(m, {
    ...m.props,
    "aria-describedby": t,
    ref: v,
    onClick: T,
    "data-open": l,
    ...d ? {} : { onBlur: y, onKeyDown: w }
  }) : null), { styles: _, attributes: S } = mr(
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
  return !n || De.count(e) > 1 || s ? /* @__PURE__ */ p(ot, { children: e }) : /* @__PURE__ */ D(ot, { children: [
    E,
    /* @__PURE__ */ p(dn, { id: "js-toggletip-portal", children: /* @__PURE__ */ D(
      "div",
      {
        id: b,
        ref: h,
        role: "status",
        className: `${qr["c-toggletip"]} ${l && qr["c-toggletip--active"]} ${a ?? ""}`,
        style: _.popper,
        ...S.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: qr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: _.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
Ki.defaultProps = {
  placement: "auto"
};
Ki.propTypes = {
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
const Yr = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, Kd = Object.freeze({
  ESC: 27
}), Qi = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s
}) => {
  const [d, f] = G(!1), l = W(null), u = W(null), v = W(), h = t || Ot(), b = (x) => {
    d || f(!d);
  }, y = (x) => f(!1), T = (x) => {
    (!d || document.activeElement !== l.current) && f(!d);
  }, w = () => {
    window.clearTimeout(v.current);
  }, E = (x) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, _ = (x) => {
    (x.keyCode | x.which) === Kd.ESC && d && f(!d);
  }, S = De.map(e, (x) => st(x) ? Pe(x, {
    ...x.props,
    "aria-describedby": t,
    ref: l,
    onFocus: b,
    onBlur: y,
    onMouseEnter: T,
    onMouseLeave: E,
    onKeyDown: _
  }) : null), { styles: m, attributes: P } = mr(
    l.current,
    u.current,
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
        { name: "eventListeners", enabled: d }
      ]
    }
  );
  return !n || De.count(e) > 1 || s ? /* @__PURE__ */ p(ot, { children: e }) : /* @__PURE__ */ D(ot, { children: [
    S,
    /* @__PURE__ */ p(dn, { id: "js-tooltip-portal", children: /* @__PURE__ */ D(
      "div",
      {
        id: h,
        ref: u,
        role: "tooltip",
        "data-open": d,
        onMouseEnter: w,
        onMouseLeave: E,
        className: `${Yr["c-tooltip"]} ${d && Yr["c-tooltip--active"]} ${a ?? ""}`,
        style: m.popper,
        ...P.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Yr["c-tooltip__arrow"],
              "data-popper-arrow": !0,
              style: m.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
Qi.defaultProps = {
  placement: "auto"
};
Qi.propTypes = {
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
const Po = lt(), Ji = ({
  steps: e,
  isOpen: t,
  onClose: n,
  finalFocusRef: r,
  hideCloseButton: a,
  hideBackButton: i,
  ariaAttributes: c,
  defaultStyle: s,
  addClass: d
}) => {
  const [f, l] = G(null), u = [
    ...e.reduce(
      (w, E, _) => [
        ...w,
        document.querySelector(E.target) ? { id: _ + 1, ...E } : null
      ],
      []
    ).filter((w) => w !== null)
  ], v = (w) => u.filter((E) => E.id === w).reduce((E, _) => ({ ...E, ..._ }), {}), h = (w) => {
    const E = document.querySelector("#root");
    E.inert = w;
  }, b = () => {
    l((w) => w < u.length ? w + 1 : w);
  }, y = () => {
    l((w) => w > 0 + 1 ? w - 1 : w);
  }, T = () => {
    l(null), n(!t), h(!1), r && r.current.focus();
  };
  return H(() => {
    t && (l(u.shift().id), h(!0));
  }, [t]), /* @__PURE__ */ p(
    Po.Provider,
    {
      value: {
        isOpen: t,
        lastId: u.length,
        ...v(f),
        methods: {
          onNext: b,
          onPrev: y,
          onClose: T
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(dn, { id: "js-tour", children: t && /* @__PURE__ */ D(ot, { children: [
        /* @__PURE__ */ p(Qd, {}),
        /* @__PURE__ */ p(
          es,
          {
            ariaAttributes: c,
            hideCloseButton: a,
            hideBackButton: i,
            addClass: d
          }
        )
      ] }) })
    }
  );
};
Ji.defaultProps = {
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
Ji.propTypes = {
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
const Mt = {
  "c-layout": "_c-layout_15ivg_1",
  "c-tour-content": "_c-tour-content_15ivg_9",
  "c-tour-progress": "_c-tour-progress_15ivg_30",
  "c-tour-progress-bar": "_c-tour-progress-bar_15ivg_38",
  "c-tour-button-container": "_c-tour-button-container_15ivg_49",
  "c-tour-help": "_c-tour-help_15ivg_91",
  "c-tour-number": "_c-tour-number_15ivg_101"
}, es = ({
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
    target: d,
    content: f,
    placement: l,
    distance: u,
    defaultStyle: v
  } = Ee(Po), h = W(), { onClose: b, onPrev: y, onNext: T } = c, { styles: w, attributes: E } = mr(
    document.querySelector(d),
    h.current,
    {
      placement: l,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, u || 8]
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
  ), _ = () => st(f) ? f : gs("p", { className: Mt["tour-description"] }, [
    f
  ]), S = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), T();
  };
  return /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: ne({ [Mt["c-layout"]]: !v }),
        "data-class": "c-layout"
      }
    ),
    /* @__PURE__ */ D(
      "div",
      {
        id: `unique-id-tour-element-${s}`,
        ref: h,
        style: w.popper,
        className: ne({
          [Mt["c-tour-content"]]: !v,
          "animate__animated animate__fadeIn animate__faster": a,
          [r]: r
        }),
        ...e,
        ...E.popper,
        children: [
          /* @__PURE__ */ D("span", { className: "u-sr-only", children: [
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
              className: ne({ [Mt["c-tour-progress"]]: !v }),
              "data-class": "c-tour-progress",
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: Mt["c-tour-progress-bar"],
                  "data-class": "c-tour-progress__bar",
                  style: { transform: `scaleX(${s / i})` }
                }
              )
            }
          ),
          _(),
          /* @__PURE__ */ D(
            "div",
            {
              className: ne({
                [Mt["c-tour-button-container"]]: !v
              }),
              "data-class": "c-tour-button-container",
              children: [
                !t && /* @__PURE__ */ p(
                  Wt,
                  {
                    hasAriaLabel: !0,
                    label: "Salir",
                    "data-class": "c-button__close",
                    onClick: b,
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
                    onClick: y,
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
                    onClick: S,
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
es.propTypes = {
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
const Qd = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r, defaultStyle: a } = Ee(Po), [i, c] = G({}), s = () => {
    const {
      x: d,
      y: f,
      width: l,
      height: u
    } = document.querySelector(n).getBoundingClientRect();
    c({
      width: `${l}px`,
      height: `${u}px`,
      top: `${f}px`,
      left: `${d}px`
    });
  };
  return H(() => (n && s(), () => {
    c({});
  }), [n]), H(() => {
    if (!e || !n)
      return;
    const d = (f) => {
      s();
    };
    return e && window.addEventListener("resize", d), () => {
      window.removeEventListener("resize", d);
    };
  }, [e, n]), /* @__PURE__ */ p(
    "div",
    {
      className: ne({
        [Mt["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [r]: r
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: Mt["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, Jd = "_active_i7dnv_90", ef = "_iconPulse_i7dnv_1", ge = {
  "c-vid": "_c-vid_i7dnv_1",
  "c-vid__caption": "_c-vid__caption_i7dnv_19",
  "c-vid__container": "_c-vid__container_i7dnv_24",
  "c-vid__video": "_c-vid__video_i7dnv_44",
  "no-captions": "_no-captions_i7dnv_56",
  "c-vid__wrapper": "_c-vid__wrapper_i7dnv_60",
  "c-vid__icon-container": "_c-vid__icon-container_i7dnv_70",
  "c-vid__icon": "_c-vid__icon_i7dnv_70",
  active: Jd,
  iconPulse: ef,
  "c-vid__progress-bg": "_c-vid__progress-bg_i7dnv_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_i7dnv_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_i7dnv_140",
  "c-vid__controls": "_c-vid__controls_i7dnv_150",
  "c-vid__button": "_c-vid__button_i7dnv_165",
  "c-vid__volume": "_c-vid__volume_i7dnv_180",
  "c-vid__volume-item": "_c-vid__volume-item_i7dnv_191",
  "c-vid__time": "_c-vid__time_i7dnv_202",
  "c-vid__subtitles": "_c-vid__subtitles_i7dnv_208"
}, ts = ({ src: e, width: t = "1000", hasDescription: n, description: r, addClass: a, poster: i, ...c }) => {
  const [s, d] = G({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, l] = G({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [u, v] = G({
    state: !1,
    label: "Reproducir video"
  }), [h, b] = G({
    state: !0,
    label: "Volumen"
  }), [y, T] = G(100), [w, E] = G({
    state: !1,
    label: "Ver en pantalla completa"
  }), [_, S] = G(!1), [m, P] = G(100), x = W(null), C = W(null), k = W(null), j = W(null), N = W(null), $ = W(null), B = W(null), q = W(null), [te, Y] = G(!1), [X, le] = Fa({
    rootMargin: "20px 10px",
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }), Z = (A) => {
    A.classList.add(`${ge.active}`), setTimeout(() => {
      A.classList.remove(`${ge.active}`);
    }, 650);
  };
  function O() {
    const A = C.current;
    u.state ? (A.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (A.play(), v({
      state: !0,
      label: "Pausar video"
    })), Z($.current);
  }
  function I() {
    const A = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, re = x.current;
    A ? (E({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (E({
      state: !0,
      label: "Salir de pantalla completa"
    }), re.requestFullscreen ? re.requestFullscreen() : re.mozRequestFullScreen ? re.mozRequestFullScreen() : re.webkitRequestFullScreen ? re.webkitRequestFullScreen() : re.msRequestFullscreen && re.msRequestFullscreen());
  }
  function F(A) {
    const re = parseInt(A, 10), ie = re >= 3600 ? Math.floor(re / 3600) : 0, Se = Math.floor((re - ie * 3600) / 60), Qe = re - ie * 3600 - Se * 60, xt = V(Q(ie)), Je = V(Q(Se)), Oe = V(Q(Qe));
    return {
      hours: xt,
      minutes: Je,
      seconds: Oe
    };
  }
  function U(A) {
    const re = z(A.duration), ie = z(A.currentTime);
    l({
      totalSeconds: A.currentTime,
      hours: parseInt(F(A.currentTime).hours),
      minutes: parseInt(F(A.currentTime).minutes),
      seconds: parseInt(F(A.currentTime).seconds),
      string: ie
    }), d({
      totalSeconds: Math.floor(A.duration),
      hours: parseInt(F(A.duration).hours),
      minutes: parseInt(F(A.duration).minutes),
      seconds: parseInt(F(A.duration).seconds),
      string: re
    });
  }
  function z(A) {
    return parseInt(A, 10) <= 3600 ? `${F(A).minutes}:${F(A).seconds}` : `${F(A).hours}:${F(A).minutes}:${F(A).seconds}`;
  }
  function Q(A) {
    return A < 10 ? A = "0" + A : A;
  }
  function V(A) {
    return isNaN(A) ? "00" : A;
  }
  function J(A) {
    const re = j.current, ie = C.current, Qe = A.nativeEvent.offsetX / re.offsetWidth * ie.duration;
    ie.currentTime = Qe;
  }
  function ee(A) {
    const re = C.current, ie = A.target.value, Se = ie / 100;
    P(ie), T(ie), re.volume = Se, h.state || b({
      state: !0,
      label: "Volumen"
    });
  }
  const ae = () => {
    if (h.state) {
      b({
        state: !1,
        label: "Mutear video"
      });
      const A = C.current, re = 0, ie = re;
      P(re), A.volume = ie;
    } else {
      b({
        state: !0,
        label: "Volumen"
      });
      const A = C.current, re = y, ie = re / 100;
      P(re), A.volume = ie;
    }
  }, K = function(A) {
    (A.keyCode || A.which) === 32 && O();
  }, ve = function(A) {
    const re = Math.floor(j.current.getAttribute("aria-valuenow"));
    if (document.activeElement === N.current)
      return null;
    if ((A.keyCode || A.which) === 37) {
      const ie = re - 5;
      ie >= 0 ? C.current.currentTime = ie : C.current.currentTime = 0, Z(q.current);
    }
    if ((A.keyCode || A.which) === 39) {
      const ie = re + 5;
      ie >= C.current.duration ? C.current.currentTime = C.current.duration : C.current.currentTime = ie, Z(B.current);
    }
  }, M = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return H(() => {
    const A = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(A, "caption") && Y(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(A, "volume") && P(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), H(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: te, volume: m }));
  }, [te, m]), H(() => (k.current ? k.current.addEventListener("error", () => {
    S(!0);
  }) : S(!0), e.caption && S(!1), () => {
    k.current && k.current.removeEventListener("error", () => {
      S(!0);
    });
  }), [e.caption]), H(() => {
    u.state && !le && O();
  }, [le]), sr(() => {
    C.current && X(C.current);
  }, [C]), /* @__PURE__ */ D(
    "figure",
    {
      className: `${ge["c-vid"]} ${a}`,
      style: { maxWidth: `${t}px` },
      onKeyDown: (A) => ve(A),
      ...c,
      children: [
        /* @__PURE__ */ D("div", { className: `${ge["c-vid__container"]} ${a}`, ref: x, children: [
          /* @__PURE__ */ D("div", { className: ge["c-vid__wrapper"], children: [
            /* @__PURE__ */ D(
              "video",
              {
                preload: "none",
                ref: C,
                onTimeUpdate: (A) => U(A.target),
                onLoadedData: (A) => U(A.target),
                onClick: O,
                className: `${ge["c-vid__video"]} ${te ? "" : ge["no-captions"]}`,
                ...i && { poster: i },
                children: [
                  /* @__PURE__ */ p("source", { src: e.video }),
                  e.caption ? /* @__PURE__ */ p(
                    "track",
                    {
                      ref: k,
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
            /* @__PURE__ */ D("div", { className: ge["c-vid__icon-container"], children: [
              /* @__PURE__ */ p("div", { ref: q, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: $, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: B, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
            ] })
          ] }),
          /* @__PURE__ */ p("div", { className: ge["progress-container"], children: /* @__PURE__ */ D(
            "div",
            {
              role: "slider",
              "aria-label": "Progreso del video",
              "aria-valuemin": "0",
              "aria-valuenow": Math.round(f.totalSeconds),
              "aria-valuemax": Math.round(s.totalSeconds),
              "aria-valuetext": M(),
              tabIndex: "0",
              onKeyDown: K,
              className: ge["c-vid__progress-bg"],
              onClick: J,
              ref: j,
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
          /* @__PURE__ */ D("div", { className: `controls ${ge["c-vid__controls"]}`, children: [
            /* @__PURE__ */ p(
              "button",
              {
                className: `${ge["c-vid__button"]} js-button-video-play`,
                "aria-label": u.label,
                onClick: O,
                "data-description": "Este botón reproduce el video",
                children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${ge["c-vid__button"]} js-button-video-volumen`,
                "aria-label": h.label,
                "data-description": "Este botón controla el volumen",
                onClick: ae,
                children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: h.state ? /* @__PURE__ */ p(
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
            /* @__PURE__ */ D("label", { className: ge["c-vid__volume"], htmlFor: "volumeControl", children: [
              /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
              /* @__PURE__ */ p(
                "input",
                {
                  className: ge["c-vid__volume-item"],
                  ref: N,
                  id: "volumeControl",
                  type: "range",
                  min: "0",
                  max: "100",
                  step: "5",
                  value: m,
                  onChange: ee,
                  "aria-valuetext": `${m}%`
                }
              )
            ] }),
            /* @__PURE__ */ D("p", { className: ge["c-vid__time"], "aria-hidden": "true", children: [
              /* @__PURE__ */ p("span", { children: f.string }),
              "/",
              /* @__PURE__ */ p("span", { children: s.string })
            ] }),
            /* @__PURE__ */ p(
              "button",
              {
                disabled: _,
                "aria-pressed": _ ? void 0 : te,
                onClick: () => Y(!te),
                "aria-label": "Subtítulos",
                className: `${ge["c-vid__button"]} ${ge["c-vid__subtitles"]}`,
                children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: _ ? /* @__PURE__ */ p(
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
            /* @__PURE__ */ p("button", { className: ge["c-vid__button"], "aria-label": w.label, onClick: I, children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: w.state ? /* @__PURE__ */ p(
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
        n && /* @__PURE__ */ D("figcaption", { className: ge["c-vid__caption"], children: [
          /* @__PURE__ */ p("strong", { children: r.title }),
          " ",
          r.content
        ] })
      ]
    }
  );
};
ts.propTypes = {
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
ts.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
var br = { exports: {} }, ns = {};
function rs(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = rs(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Oa() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = rs(e)) && (r && (r += " "), r += t);
  return r;
}
const tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Oa,
  default: Oa
}, Symbol.toStringTag, { value: "Module" })), nf = /* @__PURE__ */ bs(tf);
var xe = {}, _t = {};
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.dontSetMe = lf;
_t.findInArray = rf;
_t.int = sf;
_t.isFunction = of;
_t.isNum = af;
function rf(e, t) {
  for (let n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function of(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function af(e) {
  return typeof e == "number" && !isNaN(e);
}
function sf(e) {
  return parseInt(e, 10);
}
function lf(e, t, n) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var Zt = {};
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
Zt.browserPrefixToKey = as;
Zt.browserPrefixToStyle = cf;
Zt.default = void 0;
Zt.getPrefix = os;
const zr = ["Moz", "Webkit", "O", "ms"];
function os() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!n || t in n)
    return "";
  for (let r = 0; r < zr.length; r++)
    if (as(t, zr[r]) in n)
      return zr[r];
  return "";
}
function as(e, t) {
  return t ? "".concat(t).concat(uf(e)) : e;
}
function cf(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function uf(e) {
  let t = "", n = !0;
  for (let r = 0; r < e.length; r++)
    n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
  return t;
}
Zt.default = os();
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.addClassName = ls;
xe.addEvent = pf;
xe.addUserSelectStyles = Ef;
xe.createCSSTransform = _f;
xe.createSVGTransform = wf;
xe.getTouch = xf;
xe.getTouchIdentifier = Tf;
xe.getTranslation = Do;
xe.innerHeight = mf;
xe.innerWidth = bf;
xe.matchesSelector = ss;
xe.matchesSelectorAndParentsTo = ff;
xe.offsetXYFromParent = yf;
xe.outerHeight = vf;
xe.outerWidth = gf;
xe.removeClassName = cs;
xe.removeEvent = hf;
xe.removeUserSelectStyles = Sf;
var Ke = _t, Ca = df(Zt);
function is(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (is = function(r) {
    return r ? n : t;
  })(e);
}
function df(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = is(t);
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
let Xn = "";
function ss(e, t) {
  return Xn || (Xn = (0, Ke.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, Ke.isFunction)(e[n]);
  })), (0, Ke.isFunction)(e[Xn]) ? e[Xn](t) : !1;
}
function ff(e, t, n) {
  let r = e;
  do {
    if (ss(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function pf(e, t, n, r) {
  if (!e)
    return;
  const a = {
    capture: !0,
    ...r
  };
  e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
}
function hf(e, t, n, r) {
  if (!e)
    return;
  const a = {
    capture: !0,
    ...r
  };
  e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
}
function vf(e) {
  let t = e.clientHeight;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Ke.int)(n.borderTopWidth), t += (0, Ke.int)(n.borderBottomWidth), t;
}
function gf(e) {
  let t = e.clientWidth;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Ke.int)(n.borderLeftWidth), t += (0, Ke.int)(n.borderRightWidth), t;
}
function mf(e) {
  let t = e.clientHeight;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Ke.int)(n.paddingTop), t -= (0, Ke.int)(n.paddingBottom), t;
}
function bf(e) {
  let t = e.clientWidth;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Ke.int)(n.paddingLeft), t -= (0, Ke.int)(n.paddingRight), t;
}
function yf(e, t, n) {
  const a = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - a.left) / n, c = (e.clientY + t.scrollTop - a.top) / n;
  return {
    x: i,
    y: c
  };
}
function _f(e, t) {
  const n = Do(e, t, "px");
  return {
    [(0, Ca.browserPrefixToKey)("transform", Ca.default)]: n
  };
}
function wf(e, t) {
  return Do(e, t, "");
}
function Do(e, t, n) {
  let {
    x: r,
    y: a
  } = e, i = "translate(".concat(r).concat(n, ",").concat(a).concat(n, ")");
  if (t) {
    const c = "".concat(typeof t.x == "string" ? t.x : t.x + n), s = "".concat(typeof t.y == "string" ? t.y : t.y + n);
    i = "translate(".concat(c, ", ").concat(s, ")") + i;
  }
  return i;
}
function xf(e, t) {
  return e.targetTouches && (0, Ke.findInArray)(e.targetTouches, (n) => t === n.identifier) || e.changedTouches && (0, Ke.findInArray)(e.changedTouches, (n) => t === n.identifier);
}
function Tf(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Ef(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && ls(e.body, "react-draggable-transparent-selection");
}
function Sf(e) {
  if (e)
    try {
      if (e.body && cs(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function ls(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function cs(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.canDragX = Pf;
wt.canDragY = Df;
wt.createCoreData = Nf;
wt.createDraggableData = If;
wt.getBoundPosition = Of;
wt.getControlPosition = Rf;
wt.snapToGrid = Cf;
var Ge = _t, en = xe;
function Of(e, t, n) {
  if (!e.props.bounds)
    return [t, n];
  let {
    bounds: r
  } = e.props;
  r = typeof r == "string" ? r : Mf(r);
  const a = Ro(e);
  if (typeof r == "string") {
    const {
      ownerDocument: i
    } = a, c = i.defaultView;
    let s;
    if (r === "parent" ? s = a.parentNode : s = i.querySelector(r), !(s instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    const d = s, f = c.getComputedStyle(a), l = c.getComputedStyle(d);
    r = {
      left: -a.offsetLeft + (0, Ge.int)(l.paddingLeft) + (0, Ge.int)(f.marginLeft),
      top: -a.offsetTop + (0, Ge.int)(l.paddingTop) + (0, Ge.int)(f.marginTop),
      right: (0, en.innerWidth)(d) - (0, en.outerWidth)(a) - a.offsetLeft + (0, Ge.int)(l.paddingRight) - (0, Ge.int)(f.marginRight),
      bottom: (0, en.innerHeight)(d) - (0, en.outerHeight)(a) - a.offsetTop + (0, Ge.int)(l.paddingBottom) - (0, Ge.int)(f.marginBottom)
    };
  }
  return (0, Ge.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Ge.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Ge.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Ge.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Cf(e, t, n) {
  const r = Math.round(t / e[0]) * e[0], a = Math.round(n / e[1]) * e[1];
  return [r, a];
}
function Pf(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Df(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Rf(e, t, n) {
  const r = typeof t == "number" ? (0, en.getTouch)(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  const a = Ro(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, en.offsetXYFromParent)(r || e, i, n.props.scale);
}
function Nf(e, t, n) {
  const r = !(0, Ge.isNum)(e.lastX), a = Ro(e);
  return r ? {
    node: a,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: n,
    x: t,
    y: n
  } : {
    node: a,
    deltaX: t - e.lastX,
    deltaY: n - e.lastY,
    lastX: e.lastX,
    lastY: e.lastY,
    x: t,
    y: n
  };
}
function If(e, t) {
  const n = e.props.scale;
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
function Mf(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Ro(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var yr = {}, _r = {};
Object.defineProperty(_r, "__esModule", {
  value: !0
});
_r.default = Af;
function Af() {
}
Object.defineProperty(yr, "__esModule", {
  value: !0
});
yr.default = void 0;
var Wr = kf($e), Ye = No(uo), $f = No(Ra), Ae = xe, Rt = wt, Ur = _t, wn = No(_r);
function No(e) {
  return e && e.__esModule ? e : { default: e };
}
function us(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (us = function(r) {
    return r ? n : t;
  })(e);
}
function kf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = us(t);
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
function je(e, t, n) {
  return t = Lf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Lf(e) {
  var t = Ff(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Ff(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
const ht = {
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
};
let Nt = ht.mouse, wr = class extends Wr.Component {
  constructor() {
    super(...arguments), je(this, "dragging", !1), je(this, "lastX", NaN), je(this, "lastY", NaN), je(this, "touchIdentifier", null), je(this, "mounted", !1), je(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: r
      } = n;
      if (this.props.disabled || !(t.target instanceof r.defaultView.Node) || this.props.handle && !(0, Ae.matchesSelectorAndParentsTo)(t.target, this.props.handle, n) || this.props.cancel && (0, Ae.matchesSelectorAndParentsTo)(t.target, this.props.cancel, n))
        return;
      t.type === "touchstart" && t.preventDefault();
      const a = (0, Ae.getTouchIdentifier)(t);
      this.touchIdentifier = a;
      const i = (0, Rt.getControlPosition)(t, a, this);
      if (i == null)
        return;
      const {
        x: c,
        y: s
      } = i, d = (0, Rt.createCoreData)(this, c, s);
      (0, wn.default)("DraggableCore: handleDragStart: %j", d), (0, wn.default)("calling", this.props.onStart), !(this.props.onStart(t, d) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Ae.addUserSelectStyles)(r), this.dragging = !0, this.lastX = c, this.lastY = s, (0, Ae.addEvent)(r, Nt.move, this.handleDrag), (0, Ae.addEvent)(r, Nt.stop, this.handleDragStop));
    }), je(this, "handleDrag", (t) => {
      const n = (0, Rt.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let s = r - this.lastX, d = a - this.lastY;
        if ([s, d] = (0, Rt.snapToGrid)(this.props.grid, s, d), !s && !d)
          return;
        r = this.lastX + s, a = this.lastY + d;
      }
      const i = (0, Rt.createCoreData)(this, r, a);
      if ((0, wn.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(t, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const d = document.createEvent("MouseEvents");
          d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(d);
        }
        return;
      }
      this.lastX = r, this.lastY = a;
    }), je(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const n = (0, Rt.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let d = r - this.lastX || 0, f = a - this.lastY || 0;
        [d, f] = (0, Rt.snapToGrid)(this.props.grid, d, f), r = this.lastX + d, a = this.lastY + f;
      }
      const i = (0, Rt.createCoreData)(this, r, a);
      if (this.props.onStop(t, i) === !1 || this.mounted === !1)
        return !1;
      const s = this.findDOMNode();
      s && this.props.enableUserSelectHack && (0, Ae.removeUserSelectStyles)(s.ownerDocument), (0, wn.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, s && ((0, wn.default)("DraggableCore: Removing handlers"), (0, Ae.removeEvent)(s.ownerDocument, Nt.move, this.handleDrag), (0, Ae.removeEvent)(s.ownerDocument, Nt.stop, this.handleDragStop));
    }), je(this, "onMouseDown", (t) => (Nt = ht.mouse, this.handleDragStart(t))), je(this, "onMouseUp", (t) => (Nt = ht.mouse, this.handleDragStop(t))), je(this, "onTouchStart", (t) => (Nt = ht.touch, this.handleDragStart(t))), je(this, "onTouchEnd", (t) => (Nt = ht.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, Ae.addEvent)(t, ht.touch.start, this.onTouchStart, {
      passive: !1
    });
  }
  componentWillUnmount() {
    this.mounted = !1;
    const t = this.findDOMNode();
    if (t) {
      const {
        ownerDocument: n
      } = t;
      (0, Ae.removeEvent)(n, ht.mouse.move, this.handleDrag), (0, Ae.removeEvent)(n, ht.touch.move, this.handleDrag), (0, Ae.removeEvent)(n, ht.mouse.stop, this.handleDragStop), (0, Ae.removeEvent)(n, ht.touch.stop, this.handleDragStop), (0, Ae.removeEvent)(t, ht.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, Ae.removeUserSelectStyles)(n);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, n;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : $f.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Wr.cloneElement(Wr.Children.only(this.props.children), {
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
};
yr.default = wr;
je(wr, "displayName", "DraggableCore");
je(wr, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: Ye.default.bool,
  children: Ye.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: Ye.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: Ye.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(e, t) {
    if (e[t] && e[t].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: Ye.default.arrayOf(Ye.default.number),
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
  handle: Ye.default.string,
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
  cancel: Ye.default.string,
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
  nodeRef: Ye.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: Ye.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: Ye.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: Ye.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: Ye.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: Ye.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Ur.dontSetMe,
  style: Ur.dontSetMe,
  transform: Ur.dontSetMe
});
je(wr, "defaultProps", {
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
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  }), e.default = void 0;
  var t = v($e), n = l(uo), r = l(Ra), a = l(nf), i = xe, c = wt, s = _t, d = l(yr), f = l(_r);
  function l(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function u(E) {
    if (typeof WeakMap != "function")
      return null;
    var _ = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap();
    return (u = function(m) {
      return m ? S : _;
    })(E);
  }
  function v(E, _) {
    if (!_ && E && E.__esModule)
      return E;
    if (E === null || typeof E != "object" && typeof E != "function")
      return { default: E };
    var S = u(_);
    if (S && S.has(E))
      return S.get(E);
    var m = {}, P = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var x in E)
      if (x !== "default" && Object.prototype.hasOwnProperty.call(E, x)) {
        var C = P ? Object.getOwnPropertyDescriptor(E, x) : null;
        C && (C.get || C.set) ? Object.defineProperty(m, x, C) : m[x] = E[x];
      }
    return m.default = E, S && S.set(E, m), m;
  }
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(E) {
      for (var _ = 1; _ < arguments.length; _++) {
        var S = arguments[_];
        for (var m in S)
          Object.prototype.hasOwnProperty.call(S, m) && (E[m] = S[m]);
      }
      return E;
    }, h.apply(this, arguments);
  }
  function b(E, _, S) {
    return _ = y(_), _ in E ? Object.defineProperty(E, _, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : E[_] = S, E;
  }
  function y(E) {
    var _ = T(E, "string");
    return typeof _ == "symbol" ? _ : String(_);
  }
  function T(E, _) {
    if (typeof E != "object" || E === null)
      return E;
    var S = E[Symbol.toPrimitive];
    if (S !== void 0) {
      var m = S.call(E, _ || "default");
      if (typeof m != "object")
        return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(E);
  }
  class w extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(_, S) {
      let {
        position: m
      } = _, {
        prevPropsPosition: P
      } = S;
      return m && (!P || m.x !== P.x || m.y !== P.y) ? ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
        position: m,
        prevPropsPosition: P
      }), {
        x: m.x,
        y: m.y,
        prevPropsPosition: {
          ...m
        }
      }) : null;
    }
    constructor(_) {
      super(_), b(this, "onDragStart", (S, m) => {
        if ((0, f.default)("Draggable: onDragStart: %j", m), this.props.onStart(S, (0, c.createDraggableData)(this, m)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), b(this, "onDrag", (S, m) => {
        if (!this.state.dragging)
          return !1;
        (0, f.default)("Draggable: onDrag: %j", m);
        const P = (0, c.createDraggableData)(this, m), x = {
          x: P.x,
          y: P.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: k,
            y: j
          } = x;
          x.x += this.state.slackX, x.y += this.state.slackY;
          const [N, $] = (0, c.getBoundPosition)(this, x.x, x.y);
          x.x = N, x.y = $, x.slackX = this.state.slackX + (k - x.x), x.slackY = this.state.slackY + (j - x.y), P.x = x.x, P.y = x.y, P.deltaX = x.x - this.state.x, P.deltaY = x.y - this.state.y;
        }
        if (this.props.onDrag(S, P) === !1)
          return !1;
        this.setState(x);
      }), b(this, "onDragStop", (S, m) => {
        if (!this.state.dragging || this.props.onStop(S, (0, c.createDraggableData)(this, m)) === !1)
          return !1;
        (0, f.default)("Draggable: onDragStop: %j", m);
        const x = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: k,
            y: j
          } = this.props.position;
          x.x = k, x.y = j;
        }
        this.setState(x);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: _.position ? _.position.x : _.defaultPosition.x,
        y: _.position ? _.position.y : _.defaultPosition.y,
        prevPropsPosition: {
          ..._.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, _.position && !(_.onDrag || _.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
        isElementSVG: !0
      });
    }
    componentWillUnmount() {
      this.setState({
        dragging: !1
      });
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var _, S;
      return (_ = (S = this.props) === null || S === void 0 || (S = S.nodeRef) === null || S === void 0 ? void 0 : S.current) !== null && _ !== void 0 ? _ : r.default.findDOMNode(this);
    }
    render() {
      const {
        axis: _,
        bounds: S,
        children: m,
        defaultPosition: P,
        defaultClassName: x,
        defaultClassNameDragging: C,
        defaultClassNameDragged: k,
        position: j,
        positionOffset: N,
        scale: $,
        ...B
      } = this.props;
      let q = {}, te = null;
      const X = !!!j || this.state.dragging, le = j || P, Z = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && X ? this.state.x : le.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && X ? this.state.y : le.y
      };
      this.state.isElementSVG ? te = (0, i.createSVGTransform)(Z, N) : q = (0, i.createCSSTransform)(Z, N);
      const O = (0, a.default)(m.props.className || "", x, {
        [C]: this.state.dragging,
        [k]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(d.default, h({}, B, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(m), {
        className: O,
        style: {
          ...m.props.style,
          ...q
        },
        transform: te
      }));
    }
  }
  e.default = w, b(w, "displayName", "Draggable"), b(w, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...d.default.propTypes,
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
    axis: n.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: n.default.oneOfType([n.default.shape({
      left: n.default.number,
      right: n.default.number,
      top: n.default.number,
      bottom: n.default.number
    }), n.default.string, n.default.oneOf([!1])]),
    defaultClassName: n.default.string,
    defaultClassNameDragging: n.default.string,
    defaultClassNameDragged: n.default.string,
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
    defaultPosition: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    positionOffset: n.default.shape({
      x: n.default.oneOfType([n.default.number, n.default.string]),
      y: n.default.oneOfType([n.default.number, n.default.string])
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
    position: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: s.dontSetMe,
    style: s.dontSetMe,
    transform: s.dontSetMe
  }), b(w, "defaultProps", {
    ...d.default.defaultProps,
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
  });
})(ns);
const {
  default: ds,
  DraggableCore: jf
} = ns;
br.exports = ds;
br.exports.default = ds;
br.exports.DraggableCore = jf;
var Bf = br.exports;
const Vf = /* @__PURE__ */ $n(Bf), qf = (e, t, n) => {
  const [r, a] = G({ video1: "", video2: "" }), i = { video1: "/", video2: "/" }, c = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  }, s = (l, u = 0) => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const v = t.filter((h) => h.to === l);
      if (v.length > 0) {
        const { slides: h } = v[0], b = h[u < 0 ? 0 : u];
        a(b || i);
      } else
        a(i);
    } else
      a(i);
  }, d = (l, u = 0, v = "") => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const h = t.filter((b) => b.to === l);
      if (h.length > 0) {
        const { slides: b } = h[0], { modals: y } = b[u < 0 ? 0 : u], w = (y || []).filter((E) => E.id === v)[0];
        a(w || i);
      } else
        a(i);
    } else
      a(i);
  }, f = () => {
    const l = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (l) {
      const u = [...l].findIndex((T) => !T.hasAttribute("hidden"));
      s(n, u < 0 ? 0 : u);
      const v = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (v.length > 0) {
        const T = [...v].findIndex((w) => !w.hasAttribute("hidden"));
        s(n, T < 0 ? 0 : T);
      }
      const h = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      h && d(n, u, h.id);
      const b = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      b && d(n, u, b.id);
      const y = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      y && d(n, u, y.id);
    }
  };
  return H(() => {
    if (e) {
      const l = new MutationObserver(f);
      return l.observe(document.querySelector(e || "body"), c), () => l.disconnect();
    }
  }, [f, c]), r;
}, Yf = "_interpreter_1uacp_1", zf = "_close_1uacp_115", Wf = "_hide_1uacp_121", Uf = "_progress_1uacp_212", Hf = "_flex_1uacp_222", Zf = "_gap_1uacp_279", ye = {
  interpreter: Yf,
  "interpreter-active": "_interpreter-active_1uacp_23",
  "interpreter-btn": "_interpreter-btn_1uacp_29",
  "interpreter-btn--close": "_interpreter-btn--close_1uacp_44",
  "interpreter-btn--video": "_interpreter-btn--video_1uacp_48",
  "interpreter-btn-disable": "_interpreter-btn-disable_1uacp_61",
  "interpreter-btn-switch": "_interpreter-btn-switch_1uacp_67",
  "interpreter-dropdown": "_interpreter-dropdown_1uacp_72",
  "interpreter-dropdown-content": "_interpreter-dropdown-content_1uacp_80",
  "interpreter-btndrop": "_interpreter-btndrop_1uacp_114",
  close: zf,
  hide: Wf,
  "image-Video": "_image-Video_1uacp_125",
  "c-vid-container": "_c-vid-container_1uacp_129",
  "c-vid": "_c-vid_1uacp_129",
  "c-vid-controls": "_c-vid-controls_1uacp_162",
  "c-vid-controls-text": "_c-vid-controls-text_1uacp_202",
  progress: Uf,
  flex: Hf,
  "progress-bar": "_progress-bar_1uacp_228",
  "c-vid-controls-volume": "_c-vid-controls-volume_1uacp_235",
  "c-vid-controls-volume-item": "_c-vid-controls-volume-item_1uacp_256",
  "no-captions": "_no-captions_1uacp_267",
  gap: Zf
}, fs = ({
  width: e,
  addClass: t,
  image: n,
  pathVideo: r,
  pathname: a
}) => {
  const [i, c] = G("00:00"), [s, d] = G(!1), [f, l] = G(!1), [u, v] = G(!1), { video1: h, video2: b } = qf("body", r, a), [y, T] = G({
    state: !1,
    icon: Hr,
    label: "Reproducir video"
  }), [w, E] = G({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  }), { deltaPosition: _ } = w;
  function S() {
    const Y = s ? $.current : B.current;
    y.state ? (Y.pause(), T({
      state: !1,
      icon: Hr,
      label: "Reproducir video"
    })) : (Y.play(), T({
      state: !0,
      icon: Qf,
      label: "Pausar video"
    }));
  }
  function m() {
    const Y = s ? $.current : B.current, X = te.current, le = Y.currentTime / Y.duration * 100;
    X.style.flexBasis = `${le}%`;
  }
  function P() {
    const Y = s ? $.current : B.current;
    X(Y);
    function X(I) {
      const F = le(I.currentTime);
      c(F);
    }
    function le(I) {
      const F = parseInt(I, 10), U = Math.floor(F / 3600), z = Math.floor((F - U * 3600) / 60), Q = F - U * 3600 - z * 60, V = O(Z(U)), J = O(Z(z)), ee = O(Z(Q));
      return `${V}:${J}:${ee}`;
    }
    function Z(I) {
      return I < 10 ? I = "0" + I : I;
    }
    function O(I) {
      return isNaN(I) ? "00" : I;
    }
  }
  function x(Y) {
    const X = q.current, le = s ? $.current : B.current, O = Y.nativeEvent.offsetX / X.offsetWidth * le.duration;
    le.currentTime = O;
  }
  const C = (Y, X) => {
    d(!1), l(!1), X(Y), k();
  }, k = () => {
    const Y = te.current;
    Y.style.flexBasis = "0%", T({
      state: !1,
      icon: Hr,
      label: "Reproducir video"
    });
  }, j = (Y, X) => {
    const { x: le, y: Z } = w.deltaPosition;
    E({
      ...w,
      deltaPosition: {
        x: le + X.deltaX,
        y: Z + X.deltaY
      }
    });
  };
  H(() => {
    k();
  }, [h, b]);
  const N = W(null), $ = W(), B = W(), q = W(), te = W();
  return /* @__PURE__ */ p(
    Vf,
    {
      nodeRef: N,
      handle: "strong",
      position: _,
      onDrag: j,
      children: /* @__PURE__ */ D(
        "div",
        {
          ref: N,
          className: `${ye.interpreter} ${t ?? ""} ${(s || f) && ye["interpreter-active"]}`,
          children: [
            /* @__PURE__ */ D("div", { className: ye["interpreter-dropdown"], children: [
              (!s && !f || !!h && !s && !f || !!b && (s || f) || !!b && (s || f) && !s) && /* @__PURE__ */ D(
                "button",
                {
                  onClick: () => {
                    u || (C(!0, d), v(!0));
                  },
                  className: `${ye["interpreter-btn"]} ${ye["interpreter-btn-switch"]} ${!s && !f && ye["interpreter-btn-disable"]}`,
                  "aria-label": "Intérprete de lenguaje de señas",
                  children: [
                    !s && !f && (n ? /* @__PURE__ */ p("img", { className: ye["image-Video"], src: n, alt: "" }) : /* @__PURE__ */ D(
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
                    /* @__PURE__ */ p(Gf, {}),
                    (s || f) && (s ? "1" : "2")
                  ]
                }
              ),
              (s || f) && /* @__PURE__ */ D(ot, { children: [
                /* @__PURE__ */ D(
                  "button",
                  {
                    tabIndex: -1,
                    className: `${ye["interpreter-btn"]} ${ye["interpreter-btn--video"]}`,
                    onClick: () => {
                      f && C(!0, d);
                    },
                    children: [
                      "1",
                      /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Pa, {}) })
                    ]
                  }
                ),
                /* @__PURE__ */ D(
                  "button",
                  {
                    tabIndex: -1,
                    className: `${ye["interpreter-btn"]} ${ye["interpreter-btn--video"]}`,
                    onClick: () => {
                      s && C(!0, l);
                    },
                    children: [
                      "2",
                      /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Pa, {}) })
                    ]
                  }
                ),
                /* @__PURE__ */ p(
                  "button",
                  {
                    tabIndex: -1,
                    className: `${ye["interpreter-btn"]}`,
                    onClick: () => !1,
                    onMouseEnter: () => v(!0),
                    onMouseLeave: () => v(!1),
                    "aria-label": "Arrastrar video",
                    children: /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Kf, {}) })
                  }
                ),
                /* @__PURE__ */ p(
                  "button",
                  {
                    className: `${ye["interpreter-btn"]} ${ye["interpreter-btn--close"]}`,
                    onClick: () => {
                      d(!1), l(!1), E({
                        deltaPosition: {
                          x: 0,
                          y: 0
                        }
                      }), v(!1);
                    },
                    onFocus: () => v(!0),
                    onBlur: () => v(!0),
                    "aria-label": "Cerrar",
                    children: /* @__PURE__ */ p(Xf, {})
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ p(
              "div",
              {
                className: ye["c-vid-container"],
                display: s || f ? "true" : "false",
                children: /* @__PURE__ */ D("div", { className: ye["c-vid"], style: { maxWidth: `${e}px` }, children: [
                  s && /* @__PURE__ */ p(
                    "video",
                    {
                      src: h,
                      ref: $,
                      onTimeUpdate: () => {
                        m(), P();
                      },
                      className: `${ye["no-captions"]}`
                    }
                  ),
                  f && /* @__PURE__ */ p(
                    "video",
                    {
                      src: b,
                      ref: B,
                      onTimeUpdate: () => {
                        m(), P();
                      },
                      className: `${ye["no-captions"]}`
                    }
                  ),
                  /* @__PURE__ */ D("div", { className: ye["c-vid-controls"], children: [
                    /* @__PURE__ */ p("button", { "aria-label": y.label, onClick: S, children: y.icon }),
                    /* @__PURE__ */ p("div", { className: ye.flex, children: /* @__PURE__ */ D(
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
                    /* @__PURE__ */ p("p", { className: ye["c-vid-controls-text"], children: /* @__PURE__ */ p("span", { children: i }) }),
                    /* @__PURE__ */ p("div", { className: ye["progress-content"], children: /* @__PURE__ */ p(
                      "div",
                      {
                        ref: q,
                        className: ye.progress,
                        onClick: x,
                        children: /* @__PURE__ */ p(
                          "div",
                          {
                            ref: te,
                            className: ye["progress-bar"],
                            onChange: m
                          }
                        )
                      }
                    ) })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    }
  );
};
fs.propTypes = {
  width: o.string,
  addClass: o.string,
  image: o.string,
  pathVideo: o.array,
  pathname: o.string
};
fs.defaultProps = {
  width: "210"
};
const Gf = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "48",
    viewBox: "0 96 960 960",
    width: "48",
    children: /* @__PURE__ */ p("path", { d: "M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" })
  }
), Xf = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    "aria-hidden": "true",
    children: /* @__PURE__ */ p(
      "path",
      {
        id: "close",
        d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
      }
    )
  }
), Kf = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    "aria-hidden": "true",
    children: /* @__PURE__ */ p(
      "path",
      {
        id: "open_with",
        d: "m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z"
      }
    )
  }
), Pa = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 96 960 960",
    "aria-hidden": "true",
    children: /* @__PURE__ */ p("path", { d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z" })
  }
), Hr = /* @__PURE__ */ D(
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
), Qf = /* @__PURE__ */ D(
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
), Io = lt(), ps = ({ children: e, isVisible: t }) => {
  const [n, r] = G(!1), a = W(), i = () => r(!n), c = (s) => {
    a.current || (a.current = s);
  };
  return H(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p(Io.Provider, { value: { isOpen: n, onOpen: i, setRefButton: c, refButton: a }, children: e });
};
ps.defaultProps = {
  isVisible: !1
};
ps.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const Jf = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r, refButton: a, isOpen: i } = Ee(Io);
  if (De.count(e) > 1)
    return null;
  const c = (l) => {
    n(), t && t(l);
  }, s = (l) => {
    var u;
    return !!(l && !((u = l.dataset) != null && u.popper) && l !== a.current);
  }, d = (l) => {
    i && s(l.relatedTarget) && n();
  }, f = (l) => {
    if (!st(l))
      return null;
    const { onBlur: u, ...v } = l.props;
    return Pe(l, {
      ...v,
      ref: r,
      onClick: c,
      onBlur: (h) => {
        u == null || u(h), d(h);
      }
    });
  };
  return De.map(e, f);
};
Jf.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onClick: o.func
};
const Zr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, Gr = Object.freeze({
  ESC: 27,
  TAB: 9
}), ep = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', hs = ({
  id: e,
  children: t,
  addClass: n,
  hasArrow: r,
  isDisabled: a,
  distance: i,
  placement: c,
  disabledInteractOutside: s,
  defaultStyle: d
}) => {
  const { isOpen: f, onOpen: l, refButton: u } = Ee(Io), v = W(), h = W(), b = (_, S) => _ === S.current;
  ja({ ref: h, onInteractionOutside: (_) => {
    !s && !b(_.target, u) && (l(), _.stopPropagation(), _.preventDefault());
  } });
  const T = (_) => {
    const S = v.current.querySelectorAll(ep), m = u.current, P = S[0], x = S[S.length - 1];
    if ((_.keyCode || _.which) === Gr.TAB && document.activeElement === x)
      return m.focus(), _.preventDefault();
    _.shiftKey && (_.keyCode || _.which) === Gr.TAB && document.activeElement === P && (m.focus(), _.preventDefault()), (_.keyCode || _.which) === Gr.ESC && m.focus();
  }, { styles: w, attributes: E } = mr(
    u.current,
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
  return H(() => {
    const _ = v.current;
    f ? (_.focus(), h.current = _) : h.current = null;
  }, [f, v]), a ? /* @__PURE__ */ p(ot, { children: t }) : /* @__PURE__ */ p(dn, { id: "js-popover-modal-portal", children: /* @__PURE__ */ D(
    "div",
    {
      id: e,
      ref: v,
      role: "status",
      tabIndex: -1,
      className: ne({
        [Zr["c-popover-modal"]]: !d,
        [Zr["c-popover-modal--active"]]: !d && f,
        "video-interpreter-ui-popover": "video-interpreter-ui-popover",
        [n]: n
      }),
      style: w.popper,
      onKeyDown: T,
      "data-hidden": !f,
      "data-popper": !0,
      ...!f && { hidden: !0 },
      ...E.popper,
      children: [
        t,
        r && /* @__PURE__ */ p(
          "div",
          {
            className: ne({
              [Zr["c-popover-modal__arrow"]]: !d
            }),
            "data-class": "c-popover-modal__arrow",
            "data-popper-arrow": !0,
            style: w.arrow
          }
        )
      ]
    }
  ) });
};
hs.propTypes = {
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
hs.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  disabledInteractOutside: !1
};
const tp = (e, t) => {
  const [n, r] = G(() => {
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
}, np = (e, t, n) => {
  const [r, a] = G(n), i = e.map((s) => window.matchMedia(s)), c = () => {
    const s = i.findIndex((d) => d.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return H(() => {
    a(c);
    const s = (d) => a(c);
    return i.forEach((d) => d.addEventListener("change", s)), () => {
      i.forEach((d) => d.removeEventListener("change", s));
    };
  }, []), r;
}, sp = () => {
  const [e, t] = tp("dark-mode-enabled"), n = np(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return H(() => {
    t(n);
  }, [n]), H(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, vs = (e) => {
  let t = {};
  for (const n in e)
    if (typeof e[n] == "object") {
      const r = vs(e[n]);
      for (const a in r)
        t = {
          ...t,
          [n.includes("accents") || n.includes("palette") ? a : `${n}-${a}`]: r[a]
        };
    } else
      t[n] = e[n];
  return t;
}, lp = (e) => vs(e);
export {
  Rs as Accordion,
  $a as AccordionButton,
  ka as AccordionItem,
  La as AccordionPanel,
  Ba as Audio,
  Wt as Button,
  xu as ButtonSection,
  za as CheckBox,
  Pl as CheckBoxGroup,
  Nl as Col,
  Ml as Content,
  fi as DragAndDrop,
  di as DragAndDropContext,
  pi as Draggable,
  hi as Droppable,
  ap as Filter,
  vi as GeneralDraggable,
  _e as Icon,
  gi as Image,
  mi as Input,
  su as InputGroup,
  yi as InputLeftAddon,
  _i as InputRightAddon,
  bi as InputStyle,
  fs as Interpreter,
  cu as Kbd,
  wi as Link,
  uu as List,
  Ti as ListItem,
  Ei as Modal,
  vu as ModalCloseButton,
  Si as ModalContent,
  fr as ModalContext,
  Oi as ModalOverlay,
  Ai as NavSection,
  Ri as NumberDecrementStepper,
  Ni as NumberIncrementStepper,
  Ci as NumberInput,
  pr as NumberInputContext,
  Pi as NumberInputField,
  Di as NumberInputStepper,
  du as OrderedList,
  Ii as Pagination,
  _o as PaginationItem,
  yu as Panel,
  hr as PanelContext,
  Eu as Paper,
  ps as PopoverModal,
  Jf as PopoverModalButton,
  hs as PopoverModalContent,
  Io as PopoverModalContext,
  dn as Portal,
  Ru as Row,
  Mi as Section,
  $i as Select,
  Nu as SelectGroup,
  ki as Switch,
  Li as Tab,
  Fi as TabList,
  ji as TabPanel,
  Bi as TabPanels,
  Iu as Tabs,
  wo as TabsContext,
  Vi as TextArea,
  Mu as ThemeProvider,
  Ki as Toggletip,
  Qi as Tooltip,
  Ji as Tour,
  Po as TourContext,
  es as TourElement,
  Qd as TourHelpLayer,
  fu as UnorderedList,
  ts as Video,
  lp as createTheme,
  sp as useDarkMode,
  ja as useInteractOutside,
  tp as useLocalStorage,
  np as useMedia,
  Fa as useOnScreen,
  gu as usePagination,
  Cu as usePortal
};
