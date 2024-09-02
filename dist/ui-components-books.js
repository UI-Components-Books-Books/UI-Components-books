import * as Vt from "react";
import $e, { Children as De, useState as Z, useEffect as H, isValidElement as st, cloneElement as Pe, forwardRef as gt, useRef as U, useId as Ot, useMemo as we, useLayoutEffect as no, useCallback as ke, createContext as lt, memo as Sa, useReducer as ro, useContext as Ee, createElement as us } from "react";
import * as ds from "react-dom";
import Oa, { unstable_batchedUpdates as fn, createPortal as Ca } from "react-dom";
var zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function An(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fs(e) {
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
var Ur = { exports: {} }, pn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function ps() {
  if (Mo)
    return pn;
  Mo = 1;
  var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return pn.Fragment = n, pn.jsx = c, pn.jsxs = c, pn;
}
var hn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ao;
function hs() {
  return Ao || (Ao = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function x(g) {
      if (g === null || typeof g != "object")
        return null;
      var R = m && g[m] || g[y];
      return typeof R == "function" ? R : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(g) {
      {
        for (var R = arguments.length, k = new Array(R > 1 ? R - 1 : 0), oe = 1; oe < R; oe++)
          k[oe - 1] = arguments[oe];
        S("error", g, k);
      }
    }
    function S(g, R, k) {
      {
        var oe = w.ReactDebugCurrentFrame, de = oe.getStackAddendum();
        de !== "" && (R += "%s", k = k.concat([de]));
        var he = k.map(function(ce) {
          return String(ce);
        });
        he.unshift("Warning: " + R), Function.prototype.apply.call(console[g], console, he);
      }
    }
    var E = !1, b = !1, P = !1, _ = !1, C = !1, $;
    $ = Symbol.for("react.module.reference");
    function B(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || C || g === a || g === f || g === l || _ || g === h || E || b || P || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === d || g.$$typeof === c || g.$$typeof === s || g.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === $ || g.getModuleId !== void 0));
    }
    function A(g, R, k) {
      var oe = g.displayName;
      if (oe)
        return oe;
      var de = R.displayName || R.name || "";
      return de !== "" ? k + "(" + de + ")" : k;
    }
    function L(g) {
      return g.displayName || "Context";
    }
    function j(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
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
            return L(R) + ".Consumer";
          case c:
            var k = g;
            return L(k._context) + ".Provider";
          case u:
            return A(g, g.render, "ForwardRef");
          case d:
            var oe = g.displayName || null;
            return oe !== null ? oe : j(g.type) || "Memo";
          case v: {
            var de = g, he = de._payload, ce = de._init;
            try {
              return j(ce(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, te = 0, Y, G, le, ee, O, N, F;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function z() {
      {
        if (te === 0) {
          Y = console.log, G = console.info, le = console.warn, ee = console.error, O = console.group, N = console.groupCollapsed, F = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: W,
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
    function K() {
      {
        if (te--, te === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, g, {
              value: Y
            }),
            info: V({}, g, {
              value: G
            }),
            warn: V({}, g, {
              value: le
            }),
            error: V({}, g, {
              value: ee
            }),
            group: V({}, g, {
              value: O
            }),
            groupCollapsed: V({}, g, {
              value: N
            }),
            groupEnd: V({}, g, {
              value: F
            })
          });
        }
        te < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = w.ReactCurrentDispatcher, Q;
    function J(g, R, k) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (de) {
            var oe = de.stack.trim().match(/\n( *(at )?)/);
            Q = oe && oe[1] || "";
          }
        return `
` + Q + g;
      }
    }
    var ae = !1, X;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      X = new ve();
    }
    function M(g, R) {
      if (!g || ae)
        return "";
      {
        var k = X.get(g);
        if (k !== void 0)
          return k;
      }
      var oe;
      ae = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = q.current, q.current = null, z();
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
            } catch (Tt) {
              oe = Tt;
            }
            Reflect.construct(g, [], ce);
          } else {
            try {
              ce.call();
            } catch (Tt) {
              oe = Tt;
            }
            g.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tt) {
            oe = Tt;
          }
          g();
        }
      } catch (Tt) {
        if (Tt && oe && typeof Tt.stack == "string") {
          for (var se = Tt.stack.split(`
`), Fe = oe.stack.split(`
`), Te = se.length - 1, Ce = Fe.length - 1; Te >= 1 && Ce >= 0 && se[Te] !== Fe[Ce]; )
            Ce--;
          for (; Te >= 1 && Ce >= 0; Te--, Ce--)
            if (se[Te] !== Fe[Ce]) {
              if (Te !== 1 || Ce !== 1)
                do
                  if (Te--, Ce--, Ce < 0 || se[Te] !== Fe[Ce]) {
                    var tt = `
` + se[Te].replace(" at new ", " at ");
                    return g.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", g.displayName)), typeof g == "function" && X.set(g, tt), tt;
                  }
                while (Te >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        ae = !1, q.current = he, K(), Error.prepareStackTrace = de;
      }
      var Zt = g ? g.displayName || g.name : "", No = Zt ? J(Zt) : "";
      return typeof g == "function" && X.set(g, No), No;
    }
    function I(g, R, k) {
      return M(g, !1);
    }
    function re(g) {
      var R = g.prototype;
      return !!(R && R.isReactComponent);
    }
    function ie(g, R, k) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return M(g, re(g));
      if (typeof g == "string")
        return J(g);
      switch (g) {
        case f:
          return J("Suspense");
        case l:
          return J("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case u:
            return I(g.render);
          case d:
            return ie(g.type, R, k);
          case v: {
            var oe = g, de = oe._payload, he = oe._init;
            try {
              return ie(he(de), R, k);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Ke = {}, wt = w.ReactDebugCurrentFrame;
    function Qe(g) {
      if (g) {
        var R = g._owner, k = ie(g.type, g._source, R ? R.type : null);
        wt.setExtraStackFrame(k);
      } else
        wt.setExtraStackFrame(null);
    }
    function Oe(g, R, k, oe, de) {
      {
        var he = Function.call.bind(Se);
        for (var ce in g)
          if (he(g, ce)) {
            var se = void 0;
            try {
              if (typeof g[ce] != "function") {
                var Fe = Error((oe || "React class") + ": " + k + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fe.name = "Invariant Violation", Fe;
              }
              se = g[ce](R, ce, oe, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Te) {
              se = Te;
            }
            se && !(se instanceof Error) && (Qe(de), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", k, ce, typeof se), Qe(null)), se instanceof Error && !(se.message in Ke) && (Ke[se.message] = !0, Qe(de), T("Failed %s type: %s", k, se.message), Qe(null));
          }
      }
    }
    var ct = Array.isArray;
    function ut(g) {
      return ct(g);
    }
    function It(g) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, k = R && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return k;
      }
    }
    function Ct(g) {
      try {
        return $t(g), !1;
      } catch {
        return !0;
      }
    }
    function $t(g) {
      return "" + g;
    }
    function kt(g) {
      if (Ct(g))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", It(g)), $t(g);
    }
    var Le = w.ReactCurrentOwner, dt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pt, un, Je;
    Je = {};
    function Bn(g) {
      if (Se.call(g, "ref")) {
        var R = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function br(g) {
      if (Se.call(g, "key")) {
        var R = Object.getOwnPropertyDescriptor(g, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function yr(g, R) {
      if (typeof g.ref == "string" && Le.current && R && Le.current.stateNode !== R) {
        var k = j(Le.current.type);
        Je[k] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(Le.current.type), g.ref), Je[k] = !0);
      }
    }
    function jn(g, R) {
      {
        var k = function() {
          Pt || (Pt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function _r(g, R) {
      {
        var k = function() {
          un || (un = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var qn = function(g, R, k, oe, de, he, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: R,
        ref: k,
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
    function wr(g, R, k, oe, de) {
      {
        var he, ce = {}, se = null, Fe = null;
        k !== void 0 && (kt(k), se = "" + k), br(R) && (kt(R.key), se = "" + R.key), Bn(R) && (Fe = R.ref, yr(R, de));
        for (he in R)
          Se.call(R, he) && !dt.hasOwnProperty(he) && (ce[he] = R[he]);
        if (g && g.defaultProps) {
          var Te = g.defaultProps;
          for (he in Te)
            ce[he] === void 0 && (ce[he] = Te[he]);
        }
        if (se || Fe) {
          var Ce = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          se && jn(ce, Ce), Fe && _r(ce, Ce);
        }
        return qn(g, se, Fe, de, oe, Le.current, ce);
      }
    }
    var dn = w.ReactCurrentOwner, Vn = w.ReactDebugCurrentFrame;
    function ye(g) {
      if (g) {
        var R = g._owner, k = ie(g.type, g._source, R ? R.type : null);
        Vn.setExtraStackFrame(k);
      } else
        Vn.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function Ae(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function ft() {
      {
        if (dn.current) {
          var g = j(dn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function je(g) {
      {
        if (g !== void 0) {
          var R = g.fileName.replace(/^.*[\\\/]/, ""), k = g.lineNumber;
          return `

Check your code at ` + R + ":" + k + ".";
        }
        return "";
      }
    }
    var qe = {};
    function et(g) {
      {
        var R = ft();
        if (!R) {
          var k = typeof g == "string" ? g : g.displayName || g.name;
          k && (R = `

Check the top-level render call using <` + k + ">.");
        }
        return R;
      }
    }
    function xt(g, R) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var k = et(R);
        if (qe[k])
          return;
        qe[k] = !0;
        var oe = "";
        g && g._owner && g._owner !== dn.current && (oe = " It was passed a child from " + j(g._owner.type) + "."), ye(g), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, oe), ye(null);
      }
    }
    function Ve(g, R) {
      {
        if (typeof g != "object")
          return;
        if (ut(g))
          for (var k = 0; k < g.length; k++) {
            var oe = g[k];
            Ae(oe) && xt(oe, R);
          }
        else if (Ae(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var de = x(g);
          if (typeof de == "function" && de !== g.entries)
            for (var he = de.call(g), ce; !(ce = he.next()).done; )
              Ae(ce.value) && xt(ce.value, R);
        }
      }
    }
    function Lt(g) {
      {
        var R = g.type;
        if (R == null || typeof R == "string")
          return;
        var k;
        if (typeof R == "function")
          k = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          k = R.propTypes;
        else
          return;
        if (k) {
          var oe = j(R);
          Oe(k, g.props, "prop", oe, g);
        } else if (R.PropTypes !== void 0 && !Me) {
          Me = !0;
          var de = j(R);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(g) {
      {
        for (var R = Object.keys(g.props), k = 0; k < R.length; k++) {
          var oe = R[k];
          if (oe !== "children" && oe !== "key") {
            ye(g), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), ye(null);
            break;
          }
        }
        g.ref !== null && (ye(g), T("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function Bt(g, R, k, oe, de, he) {
      {
        var ce = B(g);
        if (!ce) {
          var se = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = je(de);
          Fe ? se += Fe : se += ft();
          var Te;
          g === null ? Te = "null" : ut(g) ? Te = "array" : g !== void 0 && g.$$typeof === t ? (Te = "<" + (j(g.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof g, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, se);
        }
        var Ce = wr(g, R, k, de, he);
        if (Ce == null)
          return Ce;
        if (ce) {
          var tt = R.children;
          if (tt !== void 0)
            if (oe)
              if (ut(tt)) {
                for (var Zt = 0; Zt < tt.length; Zt++)
                  Ve(tt[Zt], g);
                Object.freeze && Object.freeze(tt);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(tt, g);
        }
        return g === r ? Ft(Ce) : Lt(Ce), Ce;
      }
    }
    function Ht(g, R, k) {
      return Bt(g, R, k, !0);
    }
    function Yn(g, R, k) {
      return Bt(g, R, k, !1);
    }
    var jt = Yn, qt = Ht;
    hn.Fragment = r, hn.jsx = jt, hn.jsxs = qt;
  }()), hn;
}
process.env.NODE_ENV === "production" ? Ur.exports = ps() : Ur.exports = hs();
var oo = Ur.exports;
const ot = oo.Fragment, p = oo.jsx, D = oo.jsxs;
var Hr = { exports: {} }, Wn = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io;
function vs() {
  if (Io)
    return fe;
  Io = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var P = b.$$typeof;
      switch (P) {
        case t:
          switch (b = b.type, b) {
            case u:
            case f:
            case r:
            case i:
            case a:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case l:
                case m:
                case h:
                case c:
                  return b;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function E(b) {
    return S(b) === f;
  }
  return fe.AsyncMode = u, fe.ConcurrentMode = f, fe.ContextConsumer = s, fe.ContextProvider = c, fe.Element = t, fe.ForwardRef = l, fe.Fragment = r, fe.Lazy = m, fe.Memo = h, fe.Portal = n, fe.Profiler = i, fe.StrictMode = a, fe.Suspense = d, fe.isAsyncMode = function(b) {
    return E(b) || S(b) === u;
  }, fe.isConcurrentMode = E, fe.isContextConsumer = function(b) {
    return S(b) === s;
  }, fe.isContextProvider = function(b) {
    return S(b) === c;
  }, fe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, fe.isForwardRef = function(b) {
    return S(b) === l;
  }, fe.isFragment = function(b) {
    return S(b) === r;
  }, fe.isLazy = function(b) {
    return S(b) === m;
  }, fe.isMemo = function(b) {
    return S(b) === h;
  }, fe.isPortal = function(b) {
    return S(b) === n;
  }, fe.isProfiler = function(b) {
    return S(b) === i;
  }, fe.isStrictMode = function(b) {
    return S(b) === a;
  }, fe.isSuspense = function(b) {
    return S(b) === d;
  }, fe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === f || b === i || b === a || b === d || b === v || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === h || b.$$typeof === c || b.$$typeof === s || b.$$typeof === l || b.$$typeof === x || b.$$typeof === w || b.$$typeof === T || b.$$typeof === y);
  }, fe.typeOf = S, fe;
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
var $o;
function gs() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === f || M === i || M === a || M === d || M === v || typeof M == "object" && M !== null && (M.$$typeof === m || M.$$typeof === h || M.$$typeof === c || M.$$typeof === s || M.$$typeof === l || M.$$typeof === x || M.$$typeof === w || M.$$typeof === T || M.$$typeof === y);
    }
    function E(M) {
      if (typeof M == "object" && M !== null) {
        var I = M.$$typeof;
        switch (I) {
          case t:
            var re = M.type;
            switch (re) {
              case u:
              case f:
              case r:
              case i:
              case a:
              case d:
                return re;
              default:
                var ie = re && re.$$typeof;
                switch (ie) {
                  case s:
                  case l:
                  case m:
                  case h:
                  case c:
                    return ie;
                  default:
                    return I;
                }
            }
          case n:
            return I;
        }
      }
    }
    var b = u, P = f, _ = s, C = c, $ = t, B = l, A = r, L = m, j = h, V = n, te = i, Y = a, G = d, le = !1;
    function ee(M) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(M) || E(M) === u;
    }
    function O(M) {
      return E(M) === f;
    }
    function N(M) {
      return E(M) === s;
    }
    function F(M) {
      return E(M) === c;
    }
    function W(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function z(M) {
      return E(M) === l;
    }
    function K(M) {
      return E(M) === r;
    }
    function q(M) {
      return E(M) === m;
    }
    function Q(M) {
      return E(M) === h;
    }
    function J(M) {
      return E(M) === n;
    }
    function ae(M) {
      return E(M) === i;
    }
    function X(M) {
      return E(M) === a;
    }
    function ve(M) {
      return E(M) === d;
    }
    pe.AsyncMode = b, pe.ConcurrentMode = P, pe.ContextConsumer = _, pe.ContextProvider = C, pe.Element = $, pe.ForwardRef = B, pe.Fragment = A, pe.Lazy = L, pe.Memo = j, pe.Portal = V, pe.Profiler = te, pe.StrictMode = Y, pe.Suspense = G, pe.isAsyncMode = ee, pe.isConcurrentMode = O, pe.isContextConsumer = N, pe.isContextProvider = F, pe.isElement = W, pe.isForwardRef = z, pe.isFragment = K, pe.isLazy = q, pe.isMemo = Q, pe.isPortal = J, pe.isProfiler = ae, pe.isStrictMode = X, pe.isSuspense = ve, pe.isValidElementType = S, pe.typeOf = E;
  }()), pe;
}
var ko;
function Pa() {
  return ko || (ko = 1, process.env.NODE_ENV === "production" ? Wn.exports = vs() : Wn.exports = gs()), Wn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xr, Lo;
function ms() {
  if (Lo)
    return xr;
  Lo = 1;
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
  return xr = a() ? Object.assign : function(i, c) {
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
  }, xr;
}
var Tr, Fo;
function ao() {
  if (Fo)
    return Tr;
  Fo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tr = e, Tr;
}
var Er, Bo;
function Da() {
  return Bo || (Bo = 1, Er = Function.call.bind(Object.prototype.hasOwnProperty)), Er;
}
var Sr, jo;
function bs() {
  if (jo)
    return Sr;
  jo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ao(), n = {}, r = Da();
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
  }, Sr = a, Sr;
}
var Or, qo;
function ys() {
  if (qo)
    return Or;
  qo = 1;
  var e = Pa(), t = ms(), n = ao(), r = Da(), a = bs(), i = function() {
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
  return Or = function(s, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function d(O) {
      var N = O && (f && O[f] || O[l]);
      if (typeof N == "function")
        return N;
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
      any: T(),
      arrayOf: S,
      element: E(),
      elementType: b(),
      instanceOf: P,
      node: B(),
      objectOf: C,
      oneOf: _,
      oneOfType: $,
      shape: L,
      exact: j
    };
    function m(O, N) {
      return O === N ? O !== 0 || 1 / O === 1 / N : O !== O && N !== N;
    }
    function y(O, N) {
      this.message = O, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function x(O) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, F = 0;
      function W(K, q, Q, J, ae, X, ve) {
        if (J = J || v, X = X || Q, ve !== n) {
          if (u) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var I = J + ":" + Q;
            !N[I] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[I] = !0, F++);
          }
        }
        return q[Q] == null ? K ? q[Q] === null ? new y("The " + ae + " `" + X + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new y("The " + ae + " `" + X + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : O(q, Q, J, ae, X);
      }
      var z = W.bind(null, !1);
      return z.isRequired = W.bind(null, !0), z;
    }
    function w(O) {
      function N(F, W, z, K, q, Q) {
        var J = F[W], ae = Y(J);
        if (ae !== O) {
          var X = G(J);
          return new y(
            "Invalid " + K + " `" + q + "` of type " + ("`" + X + "` supplied to `" + z + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return x(N);
    }
    function T() {
      return x(c);
    }
    function S(O) {
      function N(F, W, z, K, q) {
        if (typeof O != "function")
          return new y("Property `" + q + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var Q = F[W];
        if (!Array.isArray(Q)) {
          var J = Y(Q);
          return new y("Invalid " + K + " `" + q + "` of type " + ("`" + J + "` supplied to `" + z + "`, expected an array."));
        }
        for (var ae = 0; ae < Q.length; ae++) {
          var X = O(Q, ae, z, K, q + "[" + ae + "]", n);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return x(N);
    }
    function E() {
      function O(N, F, W, z, K) {
        var q = N[F];
        if (!s(q)) {
          var Q = Y(q);
          return new y("Invalid " + z + " `" + K + "` of type " + ("`" + Q + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(O);
    }
    function b() {
      function O(N, F, W, z, K) {
        var q = N[F];
        if (!e.isValidElementType(q)) {
          var Q = Y(q);
          return new y("Invalid " + z + " `" + K + "` of type " + ("`" + Q + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(O);
    }
    function P(O) {
      function N(F, W, z, K, q) {
        if (!(F[W] instanceof O)) {
          var Q = O.name || v, J = ee(F[W]);
          return new y("Invalid " + K + " `" + q + "` of type " + ("`" + J + "` supplied to `" + z + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return x(N);
    }
    function _(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function N(F, W, z, K, q) {
        for (var Q = F[W], J = 0; J < O.length; J++)
          if (m(Q, O[J]))
            return null;
        var ae = JSON.stringify(O, function(ve, M) {
          var I = G(M);
          return I === "symbol" ? String(M) : M;
        });
        return new y("Invalid " + K + " `" + q + "` of value `" + String(Q) + "` " + ("supplied to `" + z + "`, expected one of " + ae + "."));
      }
      return x(N);
    }
    function C(O) {
      function N(F, W, z, K, q) {
        if (typeof O != "function")
          return new y("Property `" + q + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var Q = F[W], J = Y(Q);
        if (J !== "object")
          return new y("Invalid " + K + " `" + q + "` of type " + ("`" + J + "` supplied to `" + z + "`, expected an object."));
        for (var ae in Q)
          if (r(Q, ae)) {
            var X = O(Q, ae, z, K, q + "." + ae, n);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return x(N);
    }
    function $(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var N = 0; N < O.length; N++) {
        var F = O[N];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(F) + " at index " + N + "."
          ), c;
      }
      function W(z, K, q, Q, J) {
        for (var ae = [], X = 0; X < O.length; X++) {
          var ve = O[X], M = ve(z, K, q, Q, J, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && ae.push(M.data.expectedType);
        }
        var I = ae.length > 0 ? ", expected one of type [" + ae.join(", ") + "]" : "";
        return new y("Invalid " + Q + " `" + J + "` supplied to " + ("`" + q + "`" + I + "."));
      }
      return x(W);
    }
    function B() {
      function O(N, F, W, z, K) {
        return V(N[F]) ? null : new y("Invalid " + z + " `" + K + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return x(O);
    }
    function A(O, N, F, W, z) {
      return new y(
        (O || "React class") + ": " + N + " type `" + F + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function L(O) {
      function N(F, W, z, K, q) {
        var Q = F[W], J = Y(Q);
        if (J !== "object")
          return new y("Invalid " + K + " `" + q + "` of type `" + J + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var ae in O) {
          var X = O[ae];
          if (typeof X != "function")
            return A(z, K, q, ae, G(X));
          var ve = X(Q, ae, z, K, q + "." + ae, n);
          if (ve)
            return ve;
        }
        return null;
      }
      return x(N);
    }
    function j(O) {
      function N(F, W, z, K, q) {
        var Q = F[W], J = Y(Q);
        if (J !== "object")
          return new y("Invalid " + K + " `" + q + "` of type `" + J + "` " + ("supplied to `" + z + "`, expected `object`."));
        var ae = t({}, F[W], O);
        for (var X in ae) {
          var ve = O[X];
          if (r(O, X) && typeof ve != "function")
            return A(z, K, q, X, G(ve));
          if (!ve)
            return new y(
              "Invalid " + K + " `" + q + "` key `" + X + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(F[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var M = ve(Q, X, z, K, q + "." + X, n);
          if (M)
            return M;
        }
        return null;
      }
      return x(N);
    }
    function V(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(V);
          if (O === null || s(O))
            return !0;
          var N = d(O);
          if (N) {
            var F = N.call(O), W;
            if (N !== O.entries) {
              for (; !(W = F.next()).done; )
                if (!V(W.value))
                  return !1;
            } else
              for (; !(W = F.next()).done; ) {
                var z = W.value;
                if (z && !V(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(O, N) {
      return O === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function Y(O) {
      var N = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : te(N, O) ? "symbol" : N;
    }
    function G(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var N = Y(O);
      if (N === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function le(O) {
      var N = G(O);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function ee(O) {
      return !O.constructor || !O.constructor.name ? v : O.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Or;
}
var Cr, Vo;
function _s() {
  if (Vo)
    return Cr;
  Vo = 1;
  var e = ao();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Cr = function() {
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
  }, Cr;
}
if (process.env.NODE_ENV !== "production") {
  var ws = Pa(), xs = !0;
  Hr.exports = ys()(ws.isElement, xs);
} else
  Hr.exports = _s()();
var io = Hr.exports;
const o = /* @__PURE__ */ An(io), Ts = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Xe = (e, t) => De.toArray(e).filter((n) => t.indexOf(Ts(n)) !== -1), Es = ({ children: e, allowMultiple: t, defaultIndex: n, allowDifferentChildren: r }) => {
  const [a, i] = Z(), c = (u) => {
    t ? a.includes(u) ? i(a.filter((f) => f !== u)) : i([...a, u]) : i(u);
  };
  H(() => (i(t ? n || [] : n ?? null), () => {
    i(null);
  }), [t, n]);
  const s = De.map(e, (u, f) => st(u) ? Pe(u, { ...u.props, id: f, isOpen: a, onToggle: c }) : null);
  return /* @__PURE__ */ p("div", { children: r ? s : Xe(s, ["AccordionItem"]) });
};
Es.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  allowDifferentChildren: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
var Ra = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", c = 0; c < arguments.length; c++) {
        var s = arguments[c];
        s && (i = a(i, r(s)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var c = "";
      for (var s in i)
        t.call(i, s) && i[s] && (c = a(c, s));
      return c;
    }
    function a(i, c) {
      return c ? i ? i + " " + c : i + c : i;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Ra);
var Ss = Ra.exports;
const ne = /* @__PURE__ */ An(Ss), be = (e) => (t, n, r) => {
  if (t[n] !== e)
    return new Error(
      `'${n}' in '${r}' 

 NO puedes pasar un valor de props para '${n}'.La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.`
    );
}, Jn = {
  "c-accordion__item": "_c-accordion__item_s7jwr_1",
  "c-accordion__button": "_c-accordion__button_s7jwr_10",
  "c-accordion__panel": "_c-accordion__panel_s7jwr_29",
  "c-accordion__panel-content": "_c-accordion__panel-content_s7jwr_48"
}, Na = ({
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
}) => /* @__PURE__ */ D(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: ne({
      [`${Jn["c-accordion__button"]} u-flex`]: !s,
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
Na.propTypes = {
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
  __TYPE: be("AccordionButton")
};
Na.defaultProps = {
  __TYPE: "AccordionButton"
};
const Ma = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a, defaultStyle: i, allowDifferentChildren: c }) => {
  const s = () => r(t), u = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, f = De.map(e, (l) => st(l) ? l.props.__TYPE === "AccordionButton" ? Pe(l, { ...l.props, id: t, onExpanded: s, isExpanded: u() }) : Pe(l, { ...l.props, id: t, isExpanded: u() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: ne({
        [Jn["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: c ? f : Xe(f, ["AccordionButton", "AccordionPanel"])
    }
  );
};
Ma.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  defaultStyle: o.bool,
  allowDifferentChildren: o.bool,
  __TYPE: be("AccordionItem")
};
Ma.defaultProps = {
  __TYPE: "AccordionItem"
};
const Aa = ({
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
    className: ne(Jn["c-accordion__panel"], {
      [r]: r
    }),
    ...c,
    children: /* @__PURE__ */ p(
      "div",
      {
        className: ne({
          [Jn["c-accordion__panel-content"]]: !a
        }),
        children: e
      }
    )
  }
);
Aa.propTypes = {
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
  __TYPE: be("AccordionPanel")
};
Aa.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Un = {
  "c-icon": "_c-icon_13de5_1",
  "c-small": "_c-small_13de5_10",
  "c-normal": "_c-normal_13de5_14",
  "c-big": "_c-big_13de5_18"
}, Os = /\w+\.svg/gi, ge = ({
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
  if (De.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const f = t && t.match(Os).toString().replace(/.svg/gi, ""), l = `${t}#${f}`;
  return e ? Pe(e, {
    ...e.props,
    className: `${Un["c-icon"]} ${Un[`c-${n}`]} ${r ?? ""}`,
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
      className: `${Un["c-icon"]} ${Un[`c-${n}`]} ${r ?? ""}`,
      "aria-hidden": "true",
      "data-testid": f,
      "data-component": s,
      ...u,
      children: /* @__PURE__ */ p("use", { xlinkHref: l })
    }
  );
};
ge.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  path: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  addClass: o.string,
  viewBox: o.string,
  height: o.string,
  width: o.string,
  __TYPE: be("Icon")
};
ge.defaultProps = {
  size: "normal",
  viewBox: "0 0 48 48",
  height: "48",
  width: "48",
  __TYPE: "Icon"
};
const vn = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, Yt = gt((e, t) => {
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
  return /* @__PURE__ */ D(
    "button",
    {
      ref: t,
      className: ne({
        [`${vn["c-button"]} ${vn[`c-${c}`]} ${vn[`c-${r}`]}`]: !v,
        [vn["c-round"]]: a && a.path && s,
        [vn["c-reverse"]]: a && a.position === "right",
        [d]: d
      }),
      disabled: u,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...h,
      children: [
        l,
        a && /* @__PURE__ */ p(ge, { path: a.path, size: a.size }),
        s ? null : n
      ]
    }
  );
});
Yt.propTypes = {
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
Yt.defaultProps = {
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const Ia = ({
  ref: e,
  onInteractionOutside: t,
  onInteractionOutsideStart: n
}) => {
  const a = U({
    isPointerDown: !1,
    // Bandera para indicar si se ha hecho clic en el elemento
    onInteractionOutsideStart: n,
    onInteractionOutside: t
  }).current;
  a.onInteractionOutside = t, a.onInteractionOutsideStart = n, H(() => {
    const i = (s) => {
      Yo(s, e) && a.onInteractionOutside && (a.onInteractionOutsideStart && a.onInteractionOutsideStart(s), a.isPointerDown = !0);
    }, c = (s) => {
      a.isPointerDown && a.onInteractionOutside && Yo(s, e) && (a.onInteractionOutside(s), a.isPointerDown = !1);
    };
    return document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", c, !0), () => {
      document.removeEventListener("mousedown", i, !0), document.removeEventListener("mouseup", c, !0);
    };
  }, [e, a]);
};
function Yo(e, t) {
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
const Cs = "_scrubber_1x5l1_142", pt = {
  "c-audio": "_c-audio_1x5l1_1",
  "c-audio--small": "_c-audio--small_1x5l1_15",
  "c-audio--hidden": "_c-audio--hidden_1x5l1_29",
  "c-button": "_c-button_1x5l1_33",
  "is-button-paused": "_is-button-paused_1x5l1_66",
  "is-button-playing": "_is-button-playing_1x5l1_74",
  "audio-bar": "_audio-bar_1x5l1_82",
  "volume-control": "_volume-control_1x5l1_129",
  scrubber: Cs,
  "volume-btn": "_volume-btn_1x5l1_147",
  "hidden-description": "_hidden-description_1x5l1_151"
}, Ps = Object.freeze({
  BUTTON: "Button",
  BAR: "Bar"
}), Gt = Object.freeze({
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
}), $a = ({
  id: e,
  src: t,
  format: n,
  a11y: r,
  size: a,
  type: i,
  addClass: c,
  defaultStyle: s,
  hasDescription: u = !1,
  description: f,
  ...l
}) => {
  const d = Ot(), v = e ?? d, [h, m] = Z(!1), [y, x] = Z(!1), [w, T] = Z(0), [S, E] = Z(0), [b, P] = Z(0), _ = U(), C = U(null), $ = U(null), B = (ee, O) => ee === O.current;
  Ia({ ref: $, onInteractionOutside: (ee) => {
    B(ee.target, C) || (x(!1), ee.stopPropagation(), ee.preventDefault());
  } });
  const L = () => {
    document.querySelectorAll("audio").forEach((O) => {
      !O.paused && O !== _.current && O.pause();
    });
  }, j = () => {
    _.current && (L(), _.current.paused ? _.current.play() : _.current.pause(), m(!h));
  }, V = window.matchMedia("(any-hover: none) and (any-pointer: coarse)").matches, te = () => {
    E(Math.round(_.current.duration)), P(V ? 1 : _.current.volume);
  }, Y = () => {
    T(Math.round(_.current.currentTime));
  }, G = (ee) => {
    P(ee.target.volume);
  }, le = (ee) => {
    const O = parseFloat(ee.target.value);
    T(O), _.current.currentTime = O;
  };
  return i === Ps.BAR ? /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ D(
      "div",
      {
        className: `${pt["audio-bar"]} ${c ?? ""}`,
        role: "group",
        "aria-labelledby": `description${v}`,
        "data-a11y": r,
        "data-class": "c-audio-bar",
        children: [
          u ? /* @__PURE__ */ p("span", { id: `description${v}`, className: pt["hidden-description"], children: r ? "Audio description" : `Barra de audio ${f}` }) : /* @__PURE__ */ p("span", { id: `description${v}`, hidden: !0, children: r ? "Audio description" : "Barra de audio" }),
          r ? /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: Gt.a11y }) }) : null,
          /* @__PURE__ */ D("button", { type: "button", onClick: j, children: [
            /* @__PURE__ */ p("div", { className: "u-sr-only", children: h ? "Pausar" : "Reproducir" }),
            /* @__PURE__ */ p(ge, { size: "big", children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 -960 960 960", children: h ? Gt.pause : Gt.play }) })
          ] }),
          /* @__PURE__ */ D("small", { "aria-hidden": "true", children: [
            String(Math.floor(w / 60)).padStart(2, "0"),
            ":",
            String(w - 60 * Math.floor(w / 60)).padStart(2, "0"),
            " /",
            " ",
            String(Math.floor(S / 60)).padStart(2, "0"),
            ":",
            String(S - 60 * Math.floor(S / 60)).padStart(2, "0")
          ] }),
          /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `time${v}`, children: "Tiempo transcurrido" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: pt.scrubber,
              id: `time${v}`,
              value: w,
              min: 0,
              max: S,
              "aria-valuetext": `${w} seconds`,
              onChange: le,
              type: "range"
            }
          ),
          /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              ref: C,
              "aria-expanded": y,
              className: pt["volume-btn"],
              onClick: () => x(!y),
              children: [
                /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
                /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 -960 960 960", children: b === 0 ? Gt.volume_off : b <= 0.25 ? Gt.volume_down : Gt.volume_on }) })
              ]
            }
          ),
          y ? /* @__PURE__ */ D("div", { className: pt["volume-control"], ref: $, children: [
            /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `volume${v}`, children: "Volumen" }),
            /* @__PURE__ */ p(
              "input",
              {
                id: `volume${v}`,
                value: b,
                min: 0,
                max: 1,
                step: 0.05,
                type: "range",
                "aria-valuetext": b * 100,
                "aria-orientation": "vertical",
                orient: "vertical",
                onChange: (ee) => {
                  P(ee.target.value), _.current.volume = ee.target.value;
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
        id: v,
        ref: _,
        preload: "metadata",
        controls: !0,
        className: ne({
          [pt["c-audio"]]: !s,
          [pt[`c-audio--${a}`]]: a,
          [c]: c
        }),
        onLoadedMetadata: te,
        onTimeUpdate: Y,
        onPlay: () => m(!0),
        onPause: () => m(!1),
        onVolumeChange: (ee) => G(ee),
        "data-a11y": r,
        hidden: !0,
        children: /* @__PURE__ */ p("source", { src: t, type: n })
      }
    )
  ] }) : /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ p(
      "audio",
      {
        id: v,
        ref: _,
        src: t,
        type: n,
        onPlay: () => m(!0),
        onPause: () => m(!1),
        onEnded: () => m(!1),
        className: pt["c-audio--hidden"]
      }
    ),
    /* @__PURE__ */ p(
      Yt,
      {
        type: "button",
        label: h ? "Pausar" : "Reproducir",
        "data-a11y": r,
        "data-class": "c-audio-button",
        addClass: ne({
          [pt["c-button"]]: !s,
          [pt["is-button-playing"]]: h,
          [pt["is-button-paused"]]: !h,
          [c]: c
        }),
        onClick: j,
        hasAriaLabel: !0,
        ...s && { defaultStyle: s },
        ...r && { disabled: r },
        ...l
      }
    )
  ] });
};
$a.defaultProps = {
  a11y: !1,
  type: "Bar"
};
$a.propTypes = {
  id: o.string,
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
var Ds = typeof zn == "object" && zn && zn.Object === Object && zn, Rs = Ds, Ns = Rs, Ms = typeof self == "object" && self && self.Object === Object && self, As = Ns || Ms || Function("return this")(), Is = As, $s = Is, ks = $s.Symbol, so = ks;
function Ls(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Fs = Ls, Bs = Array.isArray, js = Bs, zo = so, ka = Object.prototype, qs = ka.hasOwnProperty, Vs = ka.toString, gn = zo ? zo.toStringTag : void 0;
function Ys(e) {
  var t = qs.call(e, gn), n = e[gn];
  try {
    e[gn] = void 0;
    var r = !0;
  } catch {
  }
  var a = Vs.call(e);
  return r && (t ? e[gn] = n : delete e[gn]), a;
}
var zs = Ys, Ws = Object.prototype, Us = Ws.toString;
function Hs(e) {
  return Us.call(e);
}
var Zs = Hs, Wo = so, Gs = zs, Xs = Zs, Ks = "[object Null]", Qs = "[object Undefined]", Uo = Wo ? Wo.toStringTag : void 0;
function Js(e) {
  return e == null ? e === void 0 ? Qs : Ks : Uo && Uo in Object(e) ? Gs(e) : Xs(e);
}
var el = Js;
function tl(e) {
  return e != null && typeof e == "object";
}
var nl = tl, rl = el, ol = nl, al = "[object Symbol]";
function il(e) {
  return typeof e == "symbol" || ol(e) && rl(e) == al;
}
var sl = il, Ho = so, ll = Fs, cl = js, ul = sl, dl = 1 / 0, Zo = Ho ? Ho.prototype : void 0, Go = Zo ? Zo.toString : void 0;
function La(e) {
  if (typeof e == "string")
    return e;
  if (cl(e))
    return ll(e, La) + "";
  if (ul(e))
    return Go ? Go.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -dl ? "-0" : t;
}
var fl = La, pl = fl;
function hl(e) {
  return e == null ? "" : pl(e);
}
var vl = hl, gl = vl, ml = 0;
function bl(e) {
  var t = ++ml;
  return gl(e) + t;
}
var yl = bl;
const Fa = /* @__PURE__ */ An(yl), Xt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, _l = (e) => {
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
}, Ba = gt(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: c, isDisabled: s, defaultChecked: u, onChange: f, __TYPE: l, inherit: d, ...v }, h) => {
    const m = we(() => e || Fa(`ui-${n}`), [e, n]), y = Object.freeze(_l(n)), x = ({ target: w }) => {
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
        htmlFor: m,
        className: `c-input-radio ${Xt["c-input"]} u-flex ${c ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": l,
        ...!d && { ...v },
        children: [
          /* @__PURE__ */ D("div", { className: Xt["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: m,
                ref: h,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: Xt["c-input__check"],
                onChange: x,
                ...s && { disabled: !0 },
                ...d && { ...v },
                ...u && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${Xt["c-input__icon"]} ${u ? Xt["c-input-defaultChecked"] : ""} `, children: y[a] && /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", children: y[a] }) }) })
          ] }),
          /* @__PURE__ */ p("span", { className: Xt["c-input__label"], children: r })
        ]
      }
    );
  }
);
Ba.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
Ba.propTypes = {
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
  __TYPE: be("CheckBox")
};
const wl = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = Z([]), c = U(), s = (d) => {
    c.current = d || "";
  }, u = (d) => c.current === "radio" ? [{ ...d }] : a.filter((h) => h.id === d.id).length ? [...a.filter((h) => h.id !== d.id)] : [...a, { ...d }], f = (d) => {
    const v = u(d);
    n && n(v), i(v);
  }, l = De.map(t, (d) => st(d) ? d.props.__TYPE === "CheckBox" ? (d.props.type && s(d.props.type), Pe(d, { ...d.props, onChange: f })) : d : null);
  return /* @__PURE__ */ D("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Xe(l, ["CheckBox"]) })
  ] });
};
wl.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const xl = "_col_wu095_1", Tl = {
  col: xl
}, El = gt(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Tl.col} ${e ?? ""}`, ...t }));
El.propTypes = {
  addClass: o.string
};
const Sl = {
  "c-content": "_c-content_u325r_1"
}, Ol = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "section",
  {
    className: ne({
      [Sl["c-content"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
Ol.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  defaultStyle: o.bool,
  addClass: o.string
};
const ar = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function sn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function lo(e) {
  return "nodeType" in e;
}
function Ue(e) {
  var t, n;
  return e ? sn(e) ? e : lo(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function co(e) {
  const {
    Document: t
  } = Ue(e);
  return e instanceof t;
}
function In(e) {
  return sn(e) ? !1 : e instanceof Ue(e).HTMLElement;
}
function ja(e) {
  return e instanceof Ue(e).SVGElement;
}
function ln(e) {
  return e ? sn(e) ? e.document : lo(e) ? co(e) ? e : In(e) || ja(e) ? e.ownerDocument : document : document : document;
}
const Et = ar ? no : H;
function uo(e) {
  const t = U(e);
  return Et(() => {
    t.current = e;
  }), ke(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Cl() {
  const e = U(null), t = ke((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = ke(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Cn(e, t) {
  t === void 0 && (t = [e]);
  const n = U(e);
  return Et(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function $n(e, t) {
  const n = U();
  return we(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function er(e) {
  const t = uo(e), n = U(null), r = ke(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Zr(e) {
  const t = U();
  return H(() => {
    t.current = e;
  }, [e]), t.current;
}
let Pr = {};
function ir(e, t) {
  return we(() => {
    if (t)
      return t;
    const n = Pr[e] == null ? 0 : Pr[e] + 1;
    return Pr[e] = n, e + "-" + n;
  }, [e, t]);
}
function qa(e) {
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
const Jt = /* @__PURE__ */ qa(1), tr = /* @__PURE__ */ qa(-1);
function Pl(e) {
  return "clientX" in e && "clientY" in e;
}
function Va(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ue(e.target);
  return t && e instanceof t;
}
function Dl(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ue(e.target);
  return t && e instanceof t;
}
function Gr(e) {
  if (Dl(e)) {
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
  return Pl(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Xr = /* @__PURE__ */ Object.freeze({
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
        return [Xr.Translate.toString(e), Xr.Scale.toString(e)].join(" ");
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
}), Xo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Rl(e) {
  return e.matches(Xo) ? e : e.querySelector(Xo);
}
const Nl = {
  display: "none"
};
function Ml(e) {
  let {
    id: t,
    value: n
  } = e;
  return $e.createElement("div", {
    id: t,
    style: Nl
  }, n);
}
function Al(e) {
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
function Il() {
  const [e, t] = Z("");
  return {
    announce: ke((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Ya = /* @__PURE__ */ lt(null);
function $l(e) {
  const t = Ee(Ya);
  H(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function kl() {
  const [e] = Z(() => /* @__PURE__ */ new Set()), t = ke((r) => (e.add(r), () => e.delete(r)), [e]);
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
const Ll = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Fl = {
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
function Bl(e) {
  let {
    announcements: t = Fl,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: a = Ll
  } = e;
  const {
    announce: i,
    announcement: c
  } = Il(), s = ir("DndLiveRegion"), [u, f] = Z(!1);
  if (H(() => {
    f(!0);
  }, []), $l(we(() => ({
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
  const l = $e.createElement($e.Fragment, null, $e.createElement(Ml, {
    id: r,
    value: a.draggable
  }), $e.createElement(Al, {
    id: s,
    announcement: c
  }));
  return n ? Ca(l, n) : l;
}
var Re;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Re || (Re = {}));
function nr() {
}
function Dr(e, t) {
  return we(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function jl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return we(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const vt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function ql(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Vl(e, t) {
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
function Yl(e, t) {
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
function Ko(e) {
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
function za(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
const zl = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = Ko(t), i = [];
  for (const c of r) {
    const {
      id: s
    } = c, u = n.get(s);
    if (u) {
      const f = Ko(u), l = a.reduce((v, h, m) => v + ql(f[m], h), 0), d = Number((l / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: c,
          value: d
        }
      });
    }
  }
  return i.sort(Vl);
};
function Wl(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), c = a - r, s = i - n;
  if (r < a && n < i) {
    const u = t.width * t.height, f = e.width * e.height, l = c * s, d = l / (u + f - l);
    return Number(d.toFixed(4));
  }
  return 0;
}
const Ul = (e) => {
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
      const u = Wl(s, t);
      u > 0 && a.push({
        id: c,
        data: {
          droppableContainer: i,
          value: u
        }
      });
    }
  }
  return a.sort(Yl);
};
function Hl(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Wa(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : vt;
}
function Zl(e) {
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
const Gl = /* @__PURE__ */ Zl(1);
function Xl(e) {
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
function Kl(e, t, n) {
  const r = Xl(t);
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
const Ql = {
  ignoreTransform: !1
};
function kn(e, t) {
  t === void 0 && (t = Ql);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: l
    } = Ue(e).getComputedStyle(e);
    f && (n = Kl(n, f, l));
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
function Qo(e) {
  return kn(e, {
    ignoreTransform: !0
  });
}
function Jl(e) {
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
function ec(e, t) {
  return t === void 0 && (t = Ue(e).getComputedStyle(e)), t.position === "fixed";
}
function tc(e, t) {
  t === void 0 && (t = Ue(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((a) => {
    const i = t[a];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function fo(e, t) {
  const n = [];
  function r(a) {
    if (t != null && n.length >= t || !a)
      return n;
    if (co(a) && a.scrollingElement != null && !n.includes(a.scrollingElement))
      return n.push(a.scrollingElement), n;
    if (!In(a) || ja(a) || n.includes(a))
      return n;
    const i = Ue(e).getComputedStyle(a);
    return a !== e && tc(a, i) && n.push(a), ec(a, i) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function Ua(e) {
  const [t] = fo(e, 1);
  return t ?? null;
}
function Rr(e) {
  return !ar || !e ? null : sn(e) ? e : lo(e) ? co(e) || e === ln(e).scrollingElement ? window : In(e) ? e : null : null;
}
function Ha(e) {
  return sn(e) ? e.scrollX : e.scrollLeft;
}
function Za(e) {
  return sn(e) ? e.scrollY : e.scrollTop;
}
function Kr(e) {
  return {
    x: Ha(e),
    y: Za(e)
  };
}
var Ne;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ne || (Ne = {}));
function Ga(e) {
  return !ar || !e ? !1 : e === document.scrollingElement;
}
function Xa(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Ga(e) ? {
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
const nc = {
  x: 0.2,
  y: 0.2
};
function rc(e, t, n, r, a) {
  let {
    top: i,
    left: c,
    right: s,
    bottom: u
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = nc);
  const {
    isTop: f,
    isBottom: l,
    isLeft: d,
    isRight: v
  } = Xa(e), h = {
    x: 0,
    y: 0
  }, m = {
    x: 0,
    y: 0
  }, y = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + y.height ? (h.y = Ne.Backward, m.y = r * Math.abs((t.top + y.height - i) / y.height)) : !l && u >= t.bottom - y.height && (h.y = Ne.Forward, m.y = r * Math.abs((t.bottom - y.height - u) / y.height)), !v && s >= t.right - y.width ? (h.x = Ne.Forward, m.x = r * Math.abs((t.right - y.width - s) / y.width)) : !d && c <= t.left + y.width && (h.x = Ne.Backward, m.x = r * Math.abs((t.left + y.width - c) / y.width)), {
    direction: h,
    speed: m
  };
}
function oc(e) {
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
function Ka(e) {
  return e.reduce((t, n) => Jt(t, Kr(n)), vt);
}
function ac(e) {
  return e.reduce((t, n) => t + Ha(n), 0);
}
function ic(e) {
  return e.reduce((t, n) => t + Za(n), 0);
}
function sc(e, t) {
  if (t === void 0 && (t = kn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: a,
    right: i
  } = t(e);
  Ua(e) && (a <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const lc = [["x", ["left", "right"], ac], ["y", ["top", "bottom"], ic]];
class po {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = fo(n), a = Ka(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, c, s] of lc)
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
class wn {
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
function cc(e) {
  const {
    EventTarget: t
  } = Ue(e);
  return e instanceof t ? e : ln(e);
}
function Nr(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var nt;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(nt || (nt = {}));
function Jo(e) {
  e.preventDefault();
}
function uc(e) {
  e.stopPropagation();
}
var ue;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(ue || (ue = {}));
const Qa = {
  start: [ue.Space, ue.Enter],
  cancel: [ue.Esc],
  end: [ue.Space, ue.Enter]
}, dc = (e, t) => {
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
class ho {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new wn(ln(n)), this.windowListeners = new wn(Ue(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(nt.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && sc(r), n(vt);
  }
  handleKeyDown(t) {
    if (Va(t)) {
      const {
        active: n,
        context: r,
        options: a
      } = this.props, {
        keyboardCodes: i = Qa,
        coordinateGetter: c = dc,
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
      } : vt;
      this.referenceCoordinates || (this.referenceCoordinates = l);
      const d = c(t, {
        active: n,
        context: r.current,
        currentCoordinates: l
      });
      if (d) {
        const v = tr(d, l), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: m
        } = r.current;
        for (const y of m) {
          const x = t.code, {
            isTop: w,
            isRight: T,
            isLeft: S,
            isBottom: E,
            maxScroll: b,
            minScroll: P
          } = Xa(y), _ = oc(y), C = {
            x: Math.min(x === ue.Right ? _.right - _.width / 2 : _.right, Math.max(x === ue.Right ? _.left : _.left + _.width / 2, d.x)),
            y: Math.min(x === ue.Down ? _.bottom - _.height / 2 : _.bottom, Math.max(x === ue.Down ? _.top : _.top + _.height / 2, d.y))
          }, $ = x === ue.Right && !T || x === ue.Left && !S, B = x === ue.Down && !E || x === ue.Up && !w;
          if ($ && C.x !== d.x) {
            const A = y.scrollLeft + v.x, L = x === ue.Right && A <= b.x || x === ue.Left && A >= P.x;
            if (L && !v.y) {
              y.scrollTo({
                left: A,
                behavior: s
              });
              return;
            }
            L ? h.x = y.scrollLeft - A : h.x = x === ue.Right ? y.scrollLeft - b.x : y.scrollLeft - P.x, h.x && y.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (B && C.y !== d.y) {
            const A = y.scrollTop + v.y, L = x === ue.Down && A <= b.y || x === ue.Up && A >= P.y;
            if (L && !v.x) {
              y.scrollTo({
                top: A,
                behavior: s
              });
              return;
            }
            L ? h.y = y.scrollTop - A : h.y = x === ue.Down ? y.scrollTop - b.y : y.scrollTop - P.y, h.y && y.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Jt(tr(d, this.referenceCoordinates), h));
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
ho.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Qa,
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
function ea(e) {
  return !!(e && "distance" in e);
}
function ta(e) {
  return !!(e && "delay" in e);
}
class vo {
  constructor(t, n, r) {
    var a;
    r === void 0 && (r = cc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: c
    } = i;
    this.props = t, this.events = n, this.document = ln(c), this.documentListeners = new wn(this.document), this.listeners = new wn(r), this.windowListeners = new wn(Ue(c)), this.initialCoordinates = (a = Gr(i)) != null ? a : vt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(nt.Resize, this.handleCancel), this.windowListeners.add(nt.DragStart, Jo), this.windowListeners.add(nt.VisibilityChange, this.handleCancel), this.windowListeners.add(nt.ContextMenu, Jo), this.documentListeners.add(nt.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (ta(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
      if (ea(n))
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
    t && (this.activated = !0, this.documentListeners.add(nt.Click, uc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(nt.SelectionChange, this.removeTextSelection), n(t));
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
    const u = (n = Gr(t)) != null ? n : vt, f = tr(a, u);
    if (!r && s) {
      if (ea(s)) {
        if (s.tolerance != null && Nr(f, s.tolerance))
          return this.handleCancel();
        if (Nr(f, s.distance))
          return this.handleStart();
      }
      return ta(s) && Nr(f, s.tolerance) ? this.handleCancel() : void 0;
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
    t.code === ue.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const fc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Ja extends vo {
  constructor(t) {
    const {
      event: n
    } = t, r = ln(n.target);
    super(t, fc, r);
  }
}
Ja.activators = [{
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
const pc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Qr;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Qr || (Qr = {}));
class ei extends vo {
  constructor(t) {
    super(t, pc, ln(t.event.target));
  }
}
ei.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Qr.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Mr = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class ti extends vo {
  constructor(t) {
    super(t, Mr);
  }
  static setup() {
    return window.addEventListener(Mr.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Mr.move.name, t);
    };
    function t() {
    }
  }
}
ti.activators = [{
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
var xn;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(xn || (xn = {}));
var rr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(rr || (rr = {}));
function hc(e) {
  let {
    acceleration: t,
    activator: n = xn.Pointer,
    canScroll: r,
    draggingRect: a,
    enabled: i,
    interval: c = 5,
    order: s = rr.TreeOrder,
    pointerCoordinates: u,
    scrollableAncestors: f,
    scrollableAncestorRects: l,
    delta: d,
    threshold: v
  } = e;
  const h = gc({
    delta: d,
    disabled: !i
  }), [m, y] = Cl(), x = U({
    x: 0,
    y: 0
  }), w = U({
    x: 0,
    y: 0
  }), T = we(() => {
    switch (n) {
      case xn.Pointer:
        return u ? {
          top: u.y,
          bottom: u.y,
          left: u.x,
          right: u.x
        } : null;
      case xn.DraggableRect:
        return a;
    }
  }, [n, a, u]), S = U(null), E = ke(() => {
    const P = S.current;
    if (!P)
      return;
    const _ = x.current.x * w.current.x, C = x.current.y * w.current.y;
    P.scrollBy(_, C);
  }, []), b = we(() => s === rr.TreeOrder ? [...f].reverse() : f, [s, f]);
  H(
    () => {
      if (!i || !f.length || !T) {
        y();
        return;
      }
      for (const P of b) {
        if ((r == null ? void 0 : r(P)) === !1)
          continue;
        const _ = f.indexOf(P), C = l[_];
        if (!C)
          continue;
        const {
          direction: $,
          speed: B
        } = rc(P, C, T, t, v);
        for (const A of ["x", "y"])
          h[A][$[A]] || (B[A] = 0, $[A] = 0);
        if (B.x > 0 || B.y > 0) {
          y(), S.current = P, m(E, c), x.current = B, w.current = $;
          return;
        }
      }
      x.current = {
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
      E,
      r,
      y,
      i,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(T),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      m,
      f,
      b,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const vc = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function gc(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Zr(t);
  return $n((a) => {
    if (n || !r || !a)
      return vc;
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
function mc(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return $n((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function bc(e, t) {
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
var Pn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Pn || (Pn = {}));
var Jr;
(function(e) {
  e.Optimized = "optimized";
})(Jr || (Jr = {}));
const na = /* @__PURE__ */ new Map();
function yc(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, c] = Z(null), {
    frequency: s,
    measure: u,
    strategy: f
  } = a, l = U(e), d = x(), v = Cn(d), h = ke(function(w) {
    w === void 0 && (w = []), !v.current && c((T) => T === null ? w : T.concat(w.filter((S) => !T.includes(S))));
  }, [v]), m = U(null), y = $n((w) => {
    if (d && !n)
      return na;
    if (!w || w === na || l.current !== e || i != null) {
      const T = /* @__PURE__ */ new Map();
      for (let S of e) {
        if (!S)
          continue;
        if (i && i.length > 0 && !i.includes(S.id) && S.rect.current) {
          T.set(S.id, S.rect.current);
          continue;
        }
        const E = S.node.current, b = E ? new po(u(E), E) : null;
        S.rect.current = b, b && T.set(S.id, b);
      }
      return T;
    }
    return w;
  }, [e, i, n, d, u]);
  return H(() => {
    l.current = e;
  }, [e]), H(
    () => {
      d || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), H(
    () => {
      i && i.length > 0 && c(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), H(
    () => {
      d || typeof s != "number" || m.current !== null || (m.current = setTimeout(() => {
        h(), m.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, d, h, ...r]
  ), {
    droppableRects: y,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function x() {
    switch (f) {
      case Pn.Always:
        return !1;
      case Pn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function ni(e, t) {
  return $n((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function _c(e, t) {
  return ni(e, t);
}
function wc(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = uo(t), a = we(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return H(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function sr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = uo(t), a = we(
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
function xc(e) {
  return new po(kn(e), e);
}
function ra(e, t, n) {
  t === void 0 && (t = xc);
  const [r, a] = ro(s, null), i = wc({
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
  }), c = sr({
    callback: a
  });
  return Et(() => {
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
function Tc(e) {
  const t = ni(e);
  return Wa(e, t);
}
const oa = [];
function Ec(e) {
  const t = U(e), n = $n((r) => e ? r && r !== oa && e && t.current && e.parentNode === t.current.parentNode ? r : fo(e) : oa, [e]);
  return H(() => {
    t.current = e;
  }, [e]), n;
}
function Sc(e) {
  const [t, n] = Z(null), r = U(e), a = ke((i) => {
    const c = Rr(i.target);
    c && n((s) => s ? (s.set(c, Kr(c)), new Map(s)) : null);
  }, []);
  return H(() => {
    const i = r.current;
    if (e !== i) {
      c(i);
      const s = e.map((u) => {
        const f = Rr(u);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, Kr(f)]) : null;
      }).filter((u) => u != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      c(e), c(i);
    };
    function c(s) {
      s.forEach((u) => {
        const f = Rr(u);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), we(() => e.length ? t ? Array.from(t.values()).reduce((i, c) => Jt(i, c), vt) : Ka(e) : vt, [e, t]);
}
function aa(e, t) {
  t === void 0 && (t = []);
  const n = U(null);
  return H(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), H(() => {
    const r = e !== vt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? tr(e, n.current) : vt;
}
function Oc(e) {
  H(
    () => {
      if (!ar)
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
function Cc(e, t) {
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
function ri(e) {
  return we(() => e ? Jl(e) : null, [e]);
}
const Ar = [];
function Pc(e, t) {
  t === void 0 && (t = kn);
  const [n] = e, r = ri(n ? Ue(n) : null), [a, i] = ro(s, Ar), c = sr({
    callback: i
  });
  return e.length > 0 && a === Ar && i(), Et(() => {
    e.length ? e.forEach((u) => c == null ? void 0 : c.observe(u)) : (c == null || c.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((u) => Ga(u) ? r : new po(t(u), u)) : Ar;
  }
}
function Dc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return In(t) ? t : e;
}
function Rc(e) {
  let {
    measure: t
  } = e;
  const [n, r] = Z(null), a = ke((f) => {
    for (const {
      target: l
    } of f)
      if (In(l)) {
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
  }, [t]), i = sr({
    callback: a
  }), c = ke((f) => {
    const l = Dc(f);
    i == null || i.disconnect(), l && (i == null || i.observe(l)), r(l ? t(l) : null);
  }, [t, i]), [s, u] = er(c);
  return we(() => ({
    nodeRef: s,
    rect: n,
    setRef: u
  }), [n, s, u]);
}
const Nc = [{
  sensor: Ja,
  options: {}
}, {
  sensor: ho,
  options: {}
}], Mc = {
  current: {}
}, Gn = {
  draggable: {
    measure: Qo
  },
  droppable: {
    measure: Qo,
    strategy: Pn.WhileDragging,
    frequency: Jr.Optimized
  },
  dragOverlay: {
    measure: kn
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
const Ac = {
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
    setRef: nr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Gn,
  measureDroppableContainers: nr,
  windowRect: null,
  measuringScheduled: !1
}, Ic = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: nr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: nr
}, lr = /* @__PURE__ */ lt(Ic), $c = /* @__PURE__ */ lt(Ac);
function kc() {
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
function Lc(e, t) {
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
      } = n, a = new Tn(e.droppable.containers);
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
    case Re.UnregisterDroppable: {
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
function Fc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: a
  } = Ee(lr), i = Zr(r), c = Zr(n == null ? void 0 : n.id);
  return H(() => {
    if (!t && !r && i && c != null) {
      if (!Va(i) || document.activeElement === i.target)
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
          const d = Rl(l);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [r, t, a, c, i]), null;
}
function Bc(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...r
  }), n) : n;
}
function jc(e) {
  return we(
    () => ({
      draggable: {
        ...Gn.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Gn.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Gn.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function qc(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: a = !0
  } = e;
  const i = U(!1), {
    x: c,
    y: s
  } = typeof a == "boolean" ? {
    x: a,
    y: a
  } : a;
  Et(() => {
    if (!c && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const l = n(f), d = Wa(l, r);
    if (c || (d.x = 0), s || (d.y = 0), i.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const v = Ua(f);
      v && v.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [t, c, s, r, n]);
}
const oi = /* @__PURE__ */ lt({
  ...vt,
  scaleX: 1,
  scaleY: 1
});
var Nt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Nt || (Nt = {}));
const Vc = /* @__PURE__ */ Sa(function(t) {
  var n, r, a, i;
  let {
    id: c,
    accessibility: s,
    autoScroll: u = !0,
    children: f,
    sensors: l = Nc,
    collisionDetection: d = Ul,
    measuring: v,
    modifiers: h,
    ...m
  } = t;
  const y = ro(Lc, void 0, kc), [x, w] = y, [T, S] = kl(), [E, b] = Z(Nt.Uninitialized), P = E === Nt.Initialized, {
    draggable: {
      active: _,
      nodes: C,
      translate: $
    },
    droppable: {
      containers: B
    }
  } = x, A = _ ? C.get(_) : null, L = U({
    initial: null,
    translated: null
  }), j = we(() => {
    var ye;
    return _ != null ? {
      id: _,
      // It's possible for the active node to unmount while dragging
      data: (ye = A == null ? void 0 : A.data) != null ? ye : Mc,
      rect: L
    } : null;
  }, [_, A]), V = U(null), [te, Y] = Z(null), [G, le] = Z(null), ee = Cn(m, Object.values(m)), O = ir("DndDescribedBy", c), N = we(() => B.getEnabled(), [B]), F = jc(v), {
    droppableRects: W,
    measureDroppableContainers: z,
    measuringScheduled: K
  } = yc(N, {
    dragging: P,
    dependencies: [$.x, $.y],
    config: F.droppable
  }), q = mc(C, _), Q = we(() => G ? Gr(G) : null, [G]), J = Vn(), ae = _c(q, F.draggable.measure);
  qc({
    activeNode: _ ? C.get(_) : null,
    config: J.layoutShiftCompensation,
    initialRect: ae,
    measure: F.draggable.measure
  });
  const X = ra(q, F.draggable.measure, ae), ve = ra(q ? q.parentElement : null), M = U({
    activatorEvent: null,
    active: null,
    activeNode: q,
    collisionRect: null,
    collisions: null,
    droppableRects: W,
    draggableNodes: C,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: B,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), I = B.getNodeFor((n = M.current.over) == null ? void 0 : n.id), re = Rc({
    measure: F.dragOverlay.measure
  }), ie = (r = re.nodeRef.current) != null ? r : q, Se = P ? (a = re.rect) != null ? a : X : null, Ke = !!(re.nodeRef.current && re.rect), wt = Tc(Ke ? null : X), Qe = ri(ie ? Ue(ie) : null), Oe = Ec(P ? I ?? q : null), ct = Pc(Oe), ut = Bc(h, {
    transform: {
      x: $.x - wt.x,
      y: $.y - wt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: G,
    active: j,
    activeNodeRect: X,
    containerNodeRect: ve,
    draggingNodeRect: Se,
    over: M.current.over,
    overlayNodeRect: re.rect,
    scrollableAncestors: Oe,
    scrollableAncestorRects: ct,
    windowRect: Qe
  }), It = Q ? Jt(Q, $) : null, Ct = Sc(Oe), $t = aa(Ct), kt = aa(Ct, [X]), Le = Jt(ut, $t), dt = Se ? Gl(Se, ut) : null, Pt = j && dt ? d({
    active: j,
    collisionRect: dt,
    droppableRects: W,
    droppableContainers: N,
    pointerCoordinates: It
  }) : null, un = za(Pt, "id"), [Je, Bn] = Z(null), br = Ke ? ut : Jt(ut, kt), yr = Hl(br, (i = Je == null ? void 0 : Je.rect) != null ? i : null, X), jn = ke(
    (ye, Me) => {
      let {
        sensor: Ae,
        options: ft
      } = Me;
      if (V.current == null)
        return;
      const je = C.get(V.current);
      if (!je)
        return;
      const qe = ye.nativeEvent, et = new Ae({
        active: V.current,
        activeNode: je,
        event: qe,
        options: ft,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: M,
        onStart(Ve) {
          const Lt = V.current;
          if (Lt == null)
            return;
          const Ft = C.get(Lt);
          if (!Ft)
            return;
          const {
            onDragStart: Bt
          } = ee.current, Ht = {
            active: {
              id: Lt,
              data: Ft.data,
              rect: L
            }
          };
          fn(() => {
            Bt == null || Bt(Ht), b(Nt.Initializing), w({
              type: Re.DragStart,
              initialCoordinates: Ve,
              active: Lt
            }), T({
              type: "onDragStart",
              event: Ht
            });
          });
        },
        onMove(Ve) {
          w({
            type: Re.DragMove,
            coordinates: Ve
          });
        },
        onEnd: xt(Re.DragEnd),
        onCancel: xt(Re.DragCancel)
      });
      fn(() => {
        Y(et), le(ye.nativeEvent);
      });
      function xt(Ve) {
        return async function() {
          const {
            active: Ft,
            collisions: Bt,
            over: Ht,
            scrollAdjustedTranslate: Yn
          } = M.current;
          let jt = null;
          if (Ft && Yn) {
            const {
              cancelDrop: qt
            } = ee.current;
            jt = {
              activatorEvent: qe,
              active: Ft,
              collisions: Bt,
              delta: Yn,
              over: Ht
            }, Ve === Re.DragEnd && typeof qt == "function" && await Promise.resolve(qt(jt)) && (Ve = Re.DragCancel);
          }
          V.current = null, fn(() => {
            w({
              type: Ve
            }), b(Nt.Uninitialized), Bn(null), Y(null), le(null);
            const qt = Ve === Re.DragEnd ? "onDragEnd" : "onDragCancel";
            if (jt) {
              const g = ee.current[qt];
              g == null || g(jt), T({
                type: qt,
                event: jt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), _r = ke((ye, Me) => (Ae, ft) => {
    const je = Ae.nativeEvent, qe = C.get(ft);
    if (
      // Another sensor is already instantiating
      V.current !== null || // No active draggable
      !qe || // Event has already been captured
      je.dndKit || je.defaultPrevented
    )
      return;
    const et = {
      active: qe
    };
    ye(Ae, Me.options, et) === !0 && (je.dndKit = {
      capturedBy: Me.sensor
    }, V.current = ft, jn(Ae, Me));
  }, [C, jn]), qn = bc(l, _r);
  Oc(l), Et(() => {
    X && E === Nt.Initializing && b(Nt.Initialized);
  }, [X, E]), H(
    () => {
      const {
        onDragMove: ye
      } = ee.current, {
        active: Me,
        activatorEvent: Ae,
        collisions: ft,
        over: je
      } = M.current;
      if (!Me || !Ae)
        return;
      const qe = {
        active: Me,
        activatorEvent: Ae,
        collisions: ft,
        delta: {
          x: Le.x,
          y: Le.y
        },
        over: je
      };
      fn(() => {
        ye == null || ye(qe), T({
          type: "onDragMove",
          event: qe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Le.x, Le.y]
  ), H(
    () => {
      const {
        active: ye,
        activatorEvent: Me,
        collisions: Ae,
        droppableContainers: ft,
        scrollAdjustedTranslate: je
      } = M.current;
      if (!ye || V.current == null || !Me || !je)
        return;
      const {
        onDragOver: qe
      } = ee.current, et = ft.get(un), xt = et && et.rect.current ? {
        id: et.id,
        rect: et.rect.current,
        data: et.data,
        disabled: et.disabled
      } : null, Ve = {
        active: ye,
        activatorEvent: Me,
        collisions: Ae,
        delta: {
          x: je.x,
          y: je.y
        },
        over: xt
      };
      fn(() => {
        Bn(xt), qe == null || qe(Ve), T({
          type: "onDragOver",
          event: Ve
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [un]
  ), Et(() => {
    M.current = {
      activatorEvent: G,
      active: j,
      activeNode: q,
      collisionRect: dt,
      collisions: Pt,
      droppableRects: W,
      draggableNodes: C,
      draggingNode: ie,
      draggingNodeRect: Se,
      droppableContainers: B,
      over: Je,
      scrollableAncestors: Oe,
      scrollAdjustedTranslate: Le
    }, L.current = {
      initial: Se,
      translated: dt
    };
  }, [j, q, Pt, dt, C, ie, Se, W, B, Je, Oe, Le]), hc({
    ...J,
    delta: $,
    draggingRect: dt,
    pointerCoordinates: It,
    scrollableAncestors: Oe,
    scrollableAncestorRects: ct
  });
  const wr = we(() => ({
    active: j,
    activeNode: q,
    activeNodeRect: X,
    activatorEvent: G,
    collisions: Pt,
    containerNodeRect: ve,
    dragOverlay: re,
    draggableNodes: C,
    droppableContainers: B,
    droppableRects: W,
    over: Je,
    measureDroppableContainers: z,
    scrollableAncestors: Oe,
    scrollableAncestorRects: ct,
    measuringConfiguration: F,
    measuringScheduled: K,
    windowRect: Qe
  }), [j, q, X, G, Pt, ve, re, C, B, W, Je, z, Oe, ct, F, K, Qe]), dn = we(() => ({
    activatorEvent: G,
    activators: qn,
    active: j,
    activeNodeRect: X,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: w,
    draggableNodes: C,
    over: Je,
    measureDroppableContainers: z
  }), [G, qn, j, X, w, O, C, Je, z]);
  return $e.createElement(Ya.Provider, {
    value: S
  }, $e.createElement(lr.Provider, {
    value: dn
  }, $e.createElement($c.Provider, {
    value: wr
  }, $e.createElement(oi.Provider, {
    value: yr
  }, f)), $e.createElement(Fc, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), $e.createElement(Bl, {
    ...s,
    hiddenTextDescribedById: O
  }));
  function Vn() {
    const ye = (te == null ? void 0 : te.autoScrollEnabled) === !1, Me = typeof u == "object" ? u.enabled === !1 : u === !1, Ae = P && !ye && !Me;
    return typeof u == "object" ? {
      ...u,
      enabled: Ae
    } : {
      enabled: Ae
    };
  }
}), Yc = /* @__PURE__ */ lt(null), ia = "button", zc = "Droppable";
function Wc(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = ir(zc), {
    activators: c,
    activatorEvent: s,
    active: u,
    activeNodeRect: f,
    ariaDescribedById: l,
    draggableNodes: d,
    over: v
  } = Ee(lr), {
    role: h = ia,
    roleDescription: m = "draggable",
    tabIndex: y = 0
  } = a ?? {}, x = (u == null ? void 0 : u.id) === t, w = Ee(x ? oi : Yc), [T, S] = er(), [E, b] = er(), P = Cc(c, t), _ = Cn(n);
  Et(
    () => (d.set(t, {
      id: t,
      key: i,
      node: T,
      activatorNode: E,
      data: _
    }), () => {
      const $ = d.get(t);
      $ && $.key === i && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const C = we(() => ({
    role: h,
    tabIndex: y,
    "aria-disabled": r,
    "aria-pressed": x && h === ia ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": l.draggable
  }), [r, h, y, x, m, l.draggable]);
  return {
    active: u,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: C,
    isDragging: x,
    listeners: r ? void 0 : P,
    node: T,
    over: v,
    setNodeRef: S,
    setActivatorNodeRef: b,
    transform: w
  };
}
const Uc = "Droppable", Hc = {
  timeout: 25
};
function ai(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: a
  } = e;
  const i = ir(Uc), {
    active: c,
    dispatch: s,
    over: u,
    measureDroppableContainers: f
  } = Ee(lr), l = U({
    disabled: n
  }), d = U(!1), v = U(null), h = U(null), {
    disabled: m,
    updateMeasurementsFor: y,
    timeout: x
  } = {
    ...Hc,
    ...a
  }, w = Cn(y ?? r), T = ke(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(w.current) ? w.current : [w.current]), h.current = null;
      }, x);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), S = sr({
    callback: T,
    disabled: m || !c
  }), E = ke((C, $) => {
    S && ($ && (S.unobserve($), d.current = !1), C && S.observe(C));
  }, [S]), [b, P] = er(E), _ = Cn(t);
  return H(() => {
    !S || !b.current || (S.disconnect(), d.current = !1, S.observe(b.current));
  }, [b, S]), Et(
    () => (s({
      type: Re.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: b,
        rect: v,
        data: _
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
    isOver: (u == null ? void 0 : u.id) === r,
    node: b,
    over: u,
    setNodeRef: P
  };
}
const Zc = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, Gc = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, Xc = [ue.Down, ue.Right, ue.Up, ue.Left], Kc = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (Xc.includes(e.code)) {
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
          case ue.Down:
            a.top < d.top && s.push(l);
            break;
          case ue.Up:
            a.top > d.top + c && s.push(l);
            break;
          case ue.Left:
            a.left >= d.left + d.width && s.push(l);
            break;
          case ue.Right:
            a.left + a.width <= d.left && s.push(l);
            break;
        }
    });
    const u = zl({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = za(u, "id");
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
}, ii = lt(), _n = (e, t) => De.map(e, (n) => {
  var r;
  if (st(n) && n.props) {
    if (((r = n == null ? void 0 : n.props) == null ? void 0 : r.__TYPE) === t)
      return n;
    if (n.props.children)
      return _n(n.props.children, t);
  }
}), Qc = {
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
}, si = ({
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
  const [h, m] = Z([]), [y, x] = Z(null), [w, T] = Z(
    () => Object.keys(f).length > 0 ? f : E()
  ), S = U(!1);
  function E() {
    return [
      ..._n(e, "droppable"),
      ..._n(e, "general-draggable")
    ].reduce(
      (A, L) => ({
        ...A,
        [L.props.id]: L.props.children ? [
          ..._n(L.props.children, "draggable").map(
            (j) => j.props.id
          )
        ] : []
      }),
      {}
    );
  }
  const b = Object.freeze({
    restrictToVerticalAxis: Gc,
    restrictToHorizontalAxis: Zc
  }), P = jl(
    Dr(ei),
    Dr(ti),
    Dr(ho, {
      coordinateGetter: Kc
    })
  ), _ = (A, L) => {
    const j = Object.keys(w).pop();
    let V = [...h];
    if (j === A.id && h.includes(L) && (V = h.filter((te) => te !== L)), j !== A.id && (V = [
      ...h.filter((te) => te !== L),
      A.data.current.validate.includes(L) ? L : ""
    ].filter((te) => !!te)), !t) {
      const te = w[A.id][0];
      V = te ? V.filter((Y) => Y !== te) : V;
    }
    n && n({ validate: [...V], active: !0 }), m(V);
  }, C = (A) => A in w ? A : Object.keys(w).find((L) => w[L].includes(A)), $ = ({ active: A, over: L }) => {
    if (!L)
      return;
    x(null);
    const j = Object.keys(w).pop(), V = C(L.id), te = C(A.id);
    te !== V && (_(L, A.id), T((Y) => {
      S.current = !0;
      const G = Y[te].filter(
        (O) => O !== A.id
      ), le = [...Y[V]];
      return t ? {
        ...Y,
        [te]: G,
        [V]: [...le, A.id]
      } : {
        ...{
          ...Y,
          [te]: G,
          [V]: V === j ? [...le, A.id] : [A.id]
        },
        ...V !== j && Y[V].length > 0 && {
          [j]: [
            ...Y[j].filter((O) => O !== A.id),
            ...Y[V]
          ]
        }
      };
    }));
  }, B = (A) => De.map(A, (L) => {
    if (!L.props)
      return L;
    if (L.props.__TYPE !== "draggable")
      return L.props.id in w && w[L.props.id].length > 0 ? Pe(L, { ...L.props }, [
        ...w[L.props.id].map(
          (j) => _n(e, "draggable").filter(
            (V) => V.props.id === j
          )
        ).flat()
      ]) : L.props.children ? Pe(L, {
        ...L.props,
        children: B(L.props.children)
      }) : L;
  });
  return H(() => {
    a && (T(() => E()), m([]), n && n({ validate: [], active: !1 }));
  }, [a]), H(() => {
    Object.keys(f).length !== 0 && T(f);
  }, [f]), H(() => {
    l.length !== 0 && m(l);
  }, [l]), H(() => {
    d && S.current && (S.current = !1, d({
      state: { key: v, newObjectState: { ...w }, validateId: h }
    }));
  }, [d, w]), /* @__PURE__ */ p(
    ii.Provider,
    {
      value: {
        listId: h,
        propValidate: i,
        validate: r,
        isDragging: y
      },
      children: /* @__PURE__ */ p(
        Vc,
        {
          sensors: P,
          accessibility: {
            announcements: u,
            screenReaderInstructions: {
              draggable: s
            }
          },
          onDragStart: ({ active: A }) => x(A.id),
          onDragEnd: $,
          onDragCancel: () => x(null),
          ...c && { modifiers: [b[c]] },
          children: B(e)
        }
      )
    }
  );
};
si.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: Qc,
  defaultState: {},
  defaultValidate: [],
  screenReaderInstructions: "Para recoger un elemento arrastrable, presiona la barra espaciadora o la tecla Enter. Mientras arrastras, usa las teclas de flecha para mover el elemento en cualquier dirección deseada. Presiona nuevamente la barra espaciadora o la tecla Enter para soltar el elemento en su nueva posición, o presiona escape para cancelar."
};
si.propTypes = {
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
const Jc = "_pop_1elvh_1", en = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: Jc
}, li = ({
  children: e,
  id: t,
  addClass: n,
  dragging: r,
  label: a,
  attribute: i,
  disabledDefaultAttributes: c,
  element: s,
  defaultStyle: u,
  __TYPE: f,
  ...l
}) => {
  const d = s || "div", { listId: v, propValidate: h, validate: m, isDragging: y } = Ee(ii), { attributes: x, listeners: w, setNodeRef: T, transform: S } = Wc({
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
      ref: T,
      "data-type": f,
      className: ne({
        [en["c-draggable"]]: !u,
        [`${r} ${en["is-draggable--active-animation"]}`]: y === t && !u,
        [n]: n
      }),
      style: { transform: Xr.Translate.toString(S) },
      ...m && { [h]: !!v.includes(t) },
      ...!c && { ...x },
      ...w,
      ...l,
      children: e
    }
  );
};
li.defaultProps = {
  __TYPE: "draggable",
  dragging: en["c-draggable--active"],
  disabledDefaultAttributes: !1
};
li.propTypes = {
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
  __TYPE: be("draggable")
};
const ci = ({
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
  const l = c || "div", { isOver: d, setNodeRef: v } = ai({
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
      className: ne({
        [en["c-droppable"]]: !s,
        [a]: d && !s,
        [r]: r
      }),
      ...f,
      children: e
    }
  );
};
ci.defaultProps = {
  __TYPE: "droppable",
  over: en["c-droppable--active"]
};
ci.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  id: o.string.isRequired,
  validate: o.array.isRequired,
  addClass: o.string,
  over: o.string,
  label: o.string.isRequired,
  element: o.string,
  defaultStyle: o.bool,
  __TYPE: be("droppable")
};
const ui = ({
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
  const f = i || "div", { isOver: l, setNodeRef: d } = ai({
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
      className: ne({
        [en["c-droppable"]]: !c,
        [n]: l && !c,
        [t]: t
      }),
      ...u,
      children: e
    }
  );
};
ui.propTypes = {
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
  __TYPE: be("general-draggable")
};
ui.defaultProps = {
  __TYPE: "general-draggable",
  id: Fa("unique-id-general-"),
  label: "contendor inicial"
};
const Kf = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ D("defs", { children: [
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
] }) }) }), sa = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, go = gt(({
  url: e,
  alt: t,
  title: n,
  width: r,
  addClass: a,
  noCaption: i,
  defaultStyle: c,
  lazySize: s,
  ...u
}, f) => {
  const [l, d] = Z(!1), v = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, h = (y) => d(y), m = l ? v : `${e}`;
  return /* @__PURE__ */ D(
    "figure",
    {
      className: ne({
        [sa["c-image"]]: !c,
        [a]: a
      }),
      ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } },
      children: [
        /* @__PURE__ */ p(
          "img",
          {
            ref: f,
            src: m,
            onError: h,
            alt: t,
            ...s && { ...s },
            ...u
          }
        ),
        !i && /* @__PURE__ */ p("figcaption", { className: sa["c-image__figcaption"], children: /* @__PURE__ */ D("p", { children: [
          /* @__PURE__ */ D("strong", { children: [
            n,
            " "
          ] }),
          t
        ] }) })
      ]
    }
  );
});
go.displayName = "Image";
go.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
go.propTypes = {
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
const Dn = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, di = gt(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: c, isDisabled: s, isRequired: u, isReadOnly: f, defaultStyle: l, onValue: d }, v) => {
  const h = e || Ot(), m = ({ target: y }) => {
    d && d({ id: h, value: y.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ D(
    "label",
    {
      htmlFor: h,
      className: ne({
        [Dn["c-label"]]: !l,
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
            required: u,
            placeholder: r,
            autoComplete: "off",
            onChange: m,
            className: ne({
              [Dn["c-input"]]: !l
            }),
            ...f && { readOnly: f, "aria-readonly": f }
          }
        )
      ]
    }
  ) : null;
});
di.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
di.propTypes = {
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
  __TYPE: be("Input")
};
const eu = ({ children: e, onAllValue: t }) => {
  const [n, r] = Z([]), a = (s) => r([...n.filter((u) => u.id !== s.id), { ...s }]);
  H(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, u, f) => De.toArray(s).map((l) => l.props.__TYPE === u ? Pe(l, { ...l.props, ...f }) : l);
  return De.map(e, (s) => {
    var u, f;
    return st(s) ? ((u = s == null ? void 0 : s.props) == null ? void 0 : u.__TYPE) === "InputStyle" ? Pe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? Pe(s, { ...s.props, onValue: a }) : s : null;
  });
};
eu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const fi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [Dn["c-input__wrapper-style"]]: !n,
      [t]: t
    }),
    children: Xe(e, ["InputLeftAddon", "InputRightAddon", "Input"])
  }
);
fi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("InputStyle")
};
fi.defaultProps = {
  __TYPE: "InputStyle"
};
const pi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [Dn["c-input__left-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
pi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("InputLeftAddon")
};
pi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const hi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [Dn["c-input__right-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
hi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("InputRightAddon")
};
hi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const tu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, nu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: ne({
      [tu["c-kbd"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
nu.propTypes = {
  children: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
const vi = ({ children: e, link: t, addClass: n, isExternal: r, label: a, ...i }) => /* @__PURE__ */ p(
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
vi.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
vi.propTypes = {
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
const gi = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, ru = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "ul",
  {
    className: ne({
      [gi["c-List"]]: !n,
      [t]: t
    }),
    ...r,
    children: Xe(e, ["ListItem"])
  }
);
ru.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool
};
const mi = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = De.map(e, (i) => {
    var c;
    return ((c = i == null ? void 0 : i.props) == null ? void 0 : c.__TYPE) === "Icon" ? Pe(i, { ...i.props, addClass: gi["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
mi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: be("ListItem")
};
mi.defaultProps = {
  __TYPE: "ListItem"
};
const ou = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: Xe(e, ["ListItem"]) });
ou.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const au = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: Xe(e, ["ListItem"]) });
au.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
var Ir = function() {
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
function $r(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u" || typeof Element > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "video", "[contenteditable]"].join(","), r = function() {
    function f(l, d) {
      $r(this, f), this._inertManager = d, this._rootElement = l, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return Ir(f, [{
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
        c(d, function(x) {
          return v._visitNode(x);
        });
        var h = document.activeElement;
        if (!document.body.contains(d)) {
          for (var m = d, y = void 0; m; ) {
            if (m.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              y = /** @type {!ShadowRoot} */
              m;
              break;
            }
            m = m.parentNode;
          }
          y && (h = y.activeElement);
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
            e.call(h.addedNodes).forEach(function(x) {
              this._makeSubtreeUnfocusable(x);
            }, this), e.call(h.removedNodes).forEach(function(x) {
              this._unmanageSubtree(x);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(m);
            else if (m !== this._rootElement && h.attributeName === "inert" && m.hasAttribute("inert")) {
              this._adoptInertRoot(m);
              var y = this._inertManager.getInertRoot(m);
              this._managedNodes.forEach(function(x) {
                m.contains(x.node) && y._manageNode(x.node);
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
      $r(this, f), this._node = l, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([d]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return Ir(f, [{
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
      if ($r(this, f), !l)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = l, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(l.head || l.body || l.documentElement), l.readyState === "loading" ? l.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return Ir(f, [{
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
          var y = this._inertRoots.get(d);
          y.destructor(), this._inertRoots.delete(d), d.removeAttribute("inert");
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
              e.call(m.addedNodes).forEach(function(w) {
                if (w.nodeType === Node.ELEMENT_NODE) {
                  var T = e.call(w.querySelectorAll("[inert]"));
                  t.call(w, "[inert]") && T.unshift(w), T.forEach(function(S) {
                    this.setInert(S, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (m.attributeName !== "inert")
                return;
              var y = (
                /** @type {!HTMLElement} */
                m.target
              ), x = y.hasAttribute("inert");
              h.setInert(y, x);
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
        ), y = m.getDistributedNodes ? m.getDistributedNodes() : [], x = 0; x < y.length; x++)
          c(y[x], l);
        return;
      }
      if (v.localName == "slot") {
        for (var w = (
          /** @type {!HTMLSlotElement} */
          v
        ), T = w.assignedNodes ? w.assignedNodes({ flatten: !0 }) : [], S = 0; S < T.length; S++)
          c(T[S], l);
        return;
      }
    }
    for (var E = f.firstChild; E != null; )
      c(E, l), E = E.nextSibling;
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
const cr = lt(), iu = "section[data-type='Section']:not([hidden]), div:not([hidden])", bi = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = U(), i = U(!1), c = (u) => {
    const f = document.querySelector("#root");
    f && (f.inert = u);
  }, s = (u) => {
    document.querySelectorAll(u).forEach((l) => {
      l.closest(iu) && !l.disabled && l.focus();
    });
  };
  return H(() => {
    var u;
    if (t && a.current) {
      i.current = t, a.current && a.current.focus(), c(t);
      return;
    }
    return i.current && (i.current = t, c(t), typeof r == "string" || Array.isArray(r) ? s(r) : typeof r == "object" && ((u = r == null ? void 0 : r.current) == null || u.focus())), () => {
      c(!1);
    };
  }, [t, a, r]), /* @__PURE__ */ p(cr.Provider, { value: { isOpen: t, onClose: n, refModal: a }, children: /* @__PURE__ */ p(cn, { id: "js-modal", children: t ? e : null }) });
};
bi.defaultProps = {
  isOpen: !1
};
bi.propTypes = {
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
const Xn = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, su = Object.freeze({
  ESC: 27
}), yi = ({
  addClass: e,
  children: t,
  onClick: n,
  onKeyDown: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const { isOpen: s, onClose: u, refModal: f } = Ee(cr), l = (v) => {
    n && typeof n == "function" && n(v), u == null || u();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: f,
      role: "dialog",
      tabIndex: "-1",
      hidden: !s,
      "aria-modal": "true",
      "data-type": i,
      onKeyDown: (v) => {
        r && typeof r == "function" && r(v), (v.keyCode || v.which) === su.ESC && (u == null || u());
      },
      className: ne(
        "animate__animated animate__fadeIn  video-interpreter-ui-modal",
        {
          [`${Xn["c-modal"]} u-px-3 u-py-3`]: !a,
          [e]: e
        }
      ),
      ...c,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: ne({ [Xn["c-modal-container"]]: !a }),
            "data-class": "c-modal__container",
            children: t
          }
        ),
        /* @__PURE__ */ p(
          Yt,
          {
            addClass: ne({ [Xn["c-close-button"]]: !a }),
            "data-class": "c-modal__close-button",
            label: "Cerrar modal",
            hasAriaLabel: !0,
            onClick: l,
            ...a && { defaultStyle: a },
            children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p(
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
yi.propTypes = {
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
  __TYPE: be("ModalContent")
};
yi.defaultProps = {
  __TYPE: "ModalContent"
};
const _i = ({ addClass: e, onClick: t, defaultStyle: n }) => {
  const { isOpen: r, onClose: a } = Ee(cr), i = (c) => {
    t && typeof t == "function" && t(c), a == null || a();
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: ne({
        [Xn["c-layout"]]: !n,
        [e]: e
      }),
      onClick: i,
      hidden: !r
    }
  );
};
_i.propTypes = {
  addClass: o.string,
  onClick: o.func,
  defaultStyle: o.bool,
  __TYPE: be("ModalOverlay")
};
_i.defaultProps = {
  __TYPE: "ModalOverlay"
};
const lu = ({ children: e, onClick: t }) => {
  const { onClose: n } = Ee(cr), r = (a) => {
    t == null || t(a), n == null || n();
  };
  return Pe(e, { ...e.props, onClick: r });
};
lu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const tn = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, ur = lt(), wi = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: c, onValue: s }) => {
  const [u, f] = Z(r || 0), l = () => {
    if (n && u > i)
      return f(i);
    f((m) => m + c);
  }, d = () => {
    if (n && u < a)
      return f(a);
    f((m) => m - c);
  }, v = (m) => f(m), h = (m) => n && u === m;
  return H(() => {
    s && s(u);
  }, [u, s]), /* @__PURE__ */ p(
    ur.Provider,
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
      children: /* @__PURE__ */ p("div", { className: `${tn["c-number-input"]} ${t ?? ""}`, children: Xe(e, ["NumberInputField", "NumberInputStepper"]) })
    }
  );
};
wi.propTypes = {
  children: o.arrayOf(o.element),
  addClass: o.string,
  max: o.number,
  min: o.number,
  defaultValue: o.number,
  step: o.number,
  onValue: o.func,
  keepWithinRange: o.bool
};
wi.defaultProps = {
  step: 1
};
const xi = gt(
  ({ id: e, name: t, label: n, pattern: r, addClass: a, isLabelVisible: i }, c) => {
    const {
      counter: s,
      onChangeValue: u,
      onIncrementValue: f,
      onDecrementValue: l,
      min: d,
      max: v
    } = Ee(ur), h = e || Ot(), m = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), y = ({ target: w }) => {
      if (!isNaN(w.value) && w.value)
        return u(parseInt(w.value));
      u(0);
    }, x = (w) => {
      switch (w.keyCode || w.which) {
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
    return /* @__PURE__ */ D(
      "label",
      {
        htmlFor: h,
        className: `${tn["c-number-input__label"]} ${a ?? ""}`,
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
              className: tn["c-number-input__input"],
              onChange: y,
              onKeyDown: x,
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
xi.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
xi.propTypes = {
  id: o.string,
  name: o.string,
  label: o.string,
  pattern: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  __TYPE: be("NumberInputField")
};
const Ti = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${tn["c-number-input__stepper"]} ${t ?? ""}`, children: Xe(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Ti.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: be("NumberInputStepper")
};
Ti.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Ei = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = Ee(ur);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Decrementar valor"}`,
      className: `${tn["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Ei.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: be("NumberDecrementStepper"),
  label: o.string
};
Ei.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Si = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: r, validate: a, max: i } = Ee(ur);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Incrementar valor"}`,
      className: `${tn["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
Si.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: be("NumberIncrementStepper"),
  label: o.string
};
Si.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const cu = (e) => {
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
  } = e, [v, h] = Z(r || 1);
  H(() => {
    r && h(r);
  }, [r]);
  const m = (_, C) => {
    h(C), s && s(_, C);
  }, y = (_, C) => {
    const $ = C - _ + 1;
    return Array.from({ length: $ }, (B, A) => _ + A);
  }, x = y(1, Math.min(t, n)), w = y(
    Math.max(n - t + 1, t + 1),
    n
  ), T = Math.max(
    Math.min(
      // Inicio natural
      v - l,
      // Limite inferior cuando la página es mayor
      n - t - l * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), S = Math.min(
    Math.max(
      // Final natural
      v + l,
      // Limite superior cuando la página es menor
      t + l * 2 + 2
    ),
    // Menor que el endPages
    w.length > 0 ? w[0] - 2 : n - 1
  ), E = [
    ...u ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...x,
    // Comienza el ellipsis
    ...T > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...y(T, S),
    // Finaliza el ellipsis
    ...S < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...w,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], b = (_) => {
    switch (_) {
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
    items: E.map((_) => typeof _ == "number" ? {
      onClick: (C) => {
        m(C, _);
      },
      type: "page",
      page: _,
      selected: _ === v,
      disabled: a,
      "aria-current": _ === v ? "page" : void 0
    } : {
      onClick: (C) => {
        m(C, b(_));
      },
      type: _,
      page: b(_),
      selected: !1,
      disabled: a || _.indexOf("ellipsis") === -1 && (_ === "next" || _ === "last" ? v >= n : v <= 1)
    }),
    ...d
  };
}, En = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, uu = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), du = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${uu[e]} página`, Oi = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: r,
  ...a
}) => {
  const { items: i } = cu({ ...a });
  return /* @__PURE__ */ p(
    "nav",
    {
      className: ne({
        [En["c-pagination"]]: !r,
        [n]: n
      }),
      children: /* @__PURE__ */ p(
        "ul",
        {
          className: ne({
            [En["c-pagination__ul"]]: !r
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
Oi.defaultProps = {
  boundaryCount: 1,
  count: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(mo, { ...e }),
  getItemAriaLabel: du
};
Oi.propTypes = {
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
const mo = ({ page: e, type: t, addClass: n, disabled: r, element: a, icons: i, selected: c, defaultStyle: s, ...u }) => {
  const l = {
    previous: (i == null ? void 0 : i.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (i == null ? void 0 : i.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" }),
    last: (i == null ? void 0 : i.last) || /* @__PURE__ */ p("path", { id: "last_page", d: "m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z" }),
    first: (i == null ? void 0 : i.first) || /* @__PURE__ */ p("path", { id: "first_page", d: "M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z" })
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? (
    // Devolvemos '...' si es de tipo ellipsis.
    /* @__PURE__ */ p("div", { className: En["c-pagination-item__ellipsis"], children: "..." })
  ) : Pe(
    a,
    {
      disabled: r,
      className: ne({
        [En["c-pagination-item"]]: !s,
        [En["c-pagination-item--selected"]]: !s && c,
        [n]: n
      }),
      ...a.props,
      ...u
    },
    [
      // Si es de tipo página colocar la página e.g 1,2,3.
      t === "page" && e,
      // Si existe el icono agregarlo e.g icon = 'last_page'
      l ? i ? /* @__PURE__ */ p(ge, { path: l }, t) : /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: l }) }, t) : null
    ]
  );
};
mo.propTypes = {
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
mo.defaultProps = {
  element: /* @__PURE__ */ p("button", {})
};
const Kt = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, dr = lt(), fu = ({ children: e, defaultIndex: t, addClass: n, type: r, defaultStyle: a }) => {
  const [i, c] = Z(null), s = U([]), u = (h) => {
    s.current.includes(h) || (s.current = [...s.current, h]);
  }, f = (h) => c(s.current[h]), l = (h) => /:.*?:/g.test(h) ? i === h : s.current[h - 1] === i, d = () => [...s.current].reduce((h, m, y) => [...h, y + 1], []), v = (h) => s.current.indexOf(h) + 1;
  return H(() => {
    s.current.length !== 0 && (t !== void 0 ? f(t - 1) : c(s.current[0]));
  }, [t, s]), /* @__PURE__ */ p(
    dr.Provider,
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
          className: ne("video-interpreter-ui-panel", {
            [Kt["c-panel"]]: !a,
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
fu.propTypes = {
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
const Ci = gt(
  ({ children: e, addClass: t, defaultStyle: n, __TYPE: r, ...a }, i) => {
    const { validation: c, addNewIdToSection: s, getIndexById: u, type: f } = Ee(dr), l = Ot(), d = () => {
      document.querySelectorAll("audio").forEach((m) => {
        m.paused || m.pause();
      });
    }, v = we(() => {
      const h = c(l);
      return h && d(), h;
    }, [l, c]);
    return H(() => {
      l && s(l);
    }, [l]), /* @__PURE__ */ D(
      "section",
      {
        ref: i,
        role: f === "carrousel" ? "group" : "tabpanel",
        hidden: !v,
        "data-type": r,
        "aria-hidden": !v,
        "data-value": l,
        "aria-labelledby": `section-${l}`,
        className: ne({
          [Kt["c-section"]]: !n,
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
            u(l)
          ] }),
          e
        ]
      }
    );
  }
);
Ci.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("Section")
};
Ci.defaultProps = {
  __TYPE: "Section"
};
const pu = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), la = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), hu = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${pu[e]} sección`, Pi = ({
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
  const { validation: l, onToggle: d, listId: v, currentSection: h } = Ee(dr), m = U([]), y = Object.freeze({
    previous: h - 1,
    next: h + 1
  }), x = {
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
  }, [w, T] = Z([]);
  H(() => {
    v.length !== 0 && T([
      // Botón para navegar a la sección anterior.
      ...t ? ["previous"] : [],
      // Lista de todas la secciones.
      ...v || [],
      // Botón para navegar a la siguiente sección.
      ...n ? ["next"] : []
    ]);
  }, [v]);
  const S = (_) => !m.current.includes(_) && _ ? m.current = [...m.current, _] : m.current, E = (_) => {
    const C = m.current[0], $ = m.current[m.current.length - 1];
    if ((_.keyCode || _.which) === la.LEFT)
      if (_.target === C)
        $.focus();
      else {
        const B = m.current.indexOf(_.target) - 1;
        m.current[B].focus();
      }
    else if ((_.keyCode || _.which) === la.RIGHT)
      if (_.target === $)
        C.focus();
      else {
        const B = m.current.indexOf(_.target) + 1;
        m.current[B].focus();
      }
  }, b = (_) => {
    d(v.findIndex((C) => C === _)), c !== void 0 && c(_, v.length);
  }, P = w.map((_) => {
    let C = [...v];
    return C = C.pop(), typeof _ == "number" ? {
      onClick: ($) => {
        b(_);
      },
      type: "section",
      section: _,
      selected: l(_),
      ref: S,
      onKeyDown: E
    } : {
      onClick: () => {
        b(y[_]);
      },
      type: _,
      section: y[_],
      selected: !1,
      disabled: _ === "next" ? h >= C : h <= v[0]
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
          [Kt["c-navigation"]]: !f,
          [s]: s
        }),
        children: e ? e(P) : P.map(({ section: _, type: C, selected: $, ...B }, A) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: ne({
              [Kt["c-navigation__item"]]: !f
            }),
            children: C === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${_}`,
                role: "tab",
                tabIndex: `${$ ? 0 : -1}`,
                "aria-selected": $,
                "data-class": "c-navigation__section",
                className: ne({
                  [Kt["c-navigation__section"]]: !f
                }),
                "aria-label": u(C, _, $),
                ...B
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: ne({
                  [Kt["c-navigation__button"]]: !f
                }),
                "aria-label": u(C, _, $),
                ...B,
                children: x[C] ? r ? /* @__PURE__ */ p(ge, { path: x[C] }, C) : /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: x[C]
                  }
                ) }, C) : null
              }
            )
          },
          `navigation-section-item-${A}`
        ))
      }
    )
  ] });
};
Pi.propTypes = {
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
Pi.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: hu
};
const vu = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = Ee(dr), a = (i) => {
    r(t - 1), n && n(i);
  };
  return De.map(e, (i) => Pe(i, { ...i.props, onClick: a }));
};
vu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const gu = {
  "c-paper": "_c-paper_1sbf6_1"
}, mu = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = U(null);
  return no(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${gu["c-paper"]} ${n ?? ""}`,
      ...r,
      children: e
    }
  );
};
mu.propTypes = {
  children: o.oneOfType([
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  color: o.string
};
const bu = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, yu = (e) => {
  document.body.append(e);
}, _u = (e) => {
  const t = U(null);
  H(() => {
    const r = document.querySelector(`#${e}`), a = r || bu(e);
    return r || yu(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, cn = ({ children: e, id: t }) => {
  const n = _u(t);
  return Ca(e, n);
};
cn.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const wu = "_row_1adiy_1", xu = {
  row: wu
}, Tu = gt(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${xu.row} ${e ?? ""}`, ...t }));
Tu.propTypes = {
  addClass: o.string
};
const mn = {
  "c-select-label": "_c-select-label_16c2e_1",
  "c-select-wrapper": "_c-select-wrapper_16c2e_11",
  "c-select": "_c-select_16c2e_1",
  "c-select__icon": "_c-select__icon_16c2e_38"
}, Di = gt(
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
    const h = t || Ot(), m = ({ target: y }) => {
      f && f({ id: h, value: y.value });
    };
    return /* @__PURE__ */ D(
      "label",
      {
        htmlFor: h,
        className: ne({
          [mn["c-select-label"]]: !d,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ D("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            r,
            " "
          ] }),
          /* @__PURE__ */ D("div", { className: mn["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
            /* @__PURE__ */ D(
              "select",
              {
                id: h,
                ref: v,
                name: h,
                defaultValue: l,
                className: ne({
                  [mn["c-select"]]: !d
                }),
                "data-class": "c-select",
                onChange: m,
                disabled: s,
                required: u,
                children: [
                  /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
                  Xe(e, ["option", "optgroup"])
                ]
              }
            ),
            a ? /* @__PURE__ */ p(
              ge,
              {
                path: a,
                "data-class": "c-select__icon",
                addClass: ne({ [mn["c-select__icon"]]: !d })
              }
            ) : /* @__PURE__ */ p(
              ge,
              {
                "data-class": "c-select__icon",
                addClass: ne({ [mn["c-select__icon"]]: !d }),
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
Di.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Di.propTypes = {
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
  __TYPE: be("Select")
};
const Eu = ({ children: e, onAllSelect: t }) => {
  const [n, r] = Z([]), a = (c) => r([
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
Eu.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onAllSelect: o.func
};
const kr = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, ca = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Ri = gt(
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
    const [d, v] = Z(!1), h = e || Ot(), m = ({ target: x }) => {
      if (v(x.checked), !!f) {
        if (x.checked) {
          f({ id: x.id, value: x.value });
          return;
        }
        f({ id: x.id, value: "" });
      }
    }, y = (x) => {
      ((x.keyCode || x.which) === ca.SPACE || (x.keyCode || x.which) === ca.ENTER) && v((w) => (f && f(w ? { id: h, value: "" } : { id: h, value: `${r}` }), !w));
    };
    return H(() => (s && v(!!s), () => {
      v(!1);
    }), [s]), /* @__PURE__ */ D(
      "label",
      {
        htmlFor: h,
        className: `${kr["c-label"]} ${kr[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ D("span", { className: `${!u && "u-sr-only"}`, children: [
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
              className: `${kr["c-switch"]} ${i ?? ""}`,
              onChange: m,
              onKeyDown: y,
              ...c && { disabled: !0 }
            }
          )
        ]
      }
    );
  }
);
Ri.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Ri.propTypes = {
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
const bo = lt(), Su = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = Z(0), c = (u) => i(u), s = (u) => a === u;
  return H(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(bo.Provider, { value: { validation: s, onToggle: c }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: Xe(e, ["TabList", "TabPanels"]) }) });
};
Su.propTypes = {
  children: o.arrayOf(o.element),
  defaultIndex: o.number,
  addClass: o.string
};
const Rn = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, Ni = ({
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
  const d = U(), { validation: v, onToggle: h } = Ee(bo), m = v(t), y = (x) => {
    s && s(x), h(t);
  };
  return H(() => (d.current && i(d.current), () => {
    d.current = null;
  }), [d]), /* @__PURE__ */ D(
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
      onClick: y,
      className: ne({
        [`${Rn["c-tab__button"]} u-flex`]: !u,
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
Ni.propTypes = {
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
  __TYPE: be("Tab")
};
Ni.defaultProps = {
  __TYPE: "Tab"
};
const ua = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Mi = ({
  children: e,
  addClass: t,
  label: n,
  orientation: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const s = U([]), u = (d) => s.current = [...s.current, d], f = (d) => {
    const v = s.current[0], h = s.current[s.current.length - 1];
    if ((d.keyCode || d.which) === ua.LEFT)
      if (d.target === v)
        h.focus();
      else {
        const m = s.current.indexOf(d.target) - 1;
        s.current[m].focus();
      }
    else if ((d.keyCode || d.which) === ua.RIGHT)
      if (d.target === h)
        v.focus();
      else {
        const m = s.current.indexOf(d.target) + 1;
        s.current[m].focus();
      }
  }, l = De.map(e, (d, v) => st(d) ? Pe(d, {
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
      className: ne({
        [Rn["c-tab__list"]]: !a,
        [t]: t
      }),
      ...c,
      children: Xe(l, ["Tab"])
    }
  );
};
Mi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  label: o.string,
  orientation: o.string,
  defaultStyle: o.bool,
  __TYPE: be("TabList")
};
Mi.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const Ai = ({ children: e, id: t, addClass: n, defaultStyle: r, disableA11y: a, __TYPE: i, ...c }) => {
  const { validation: s } = Ee(bo), u = s(t);
  return /* @__PURE__ */ p(
    "div",
    {
      id: `panel-${t}`,
      role: "tabpanel",
      tabIndex: 0,
      "data-type": i,
      "aria-hidden": !u,
      hidden: !u,
      "aria-labelledby": `tab-${t}`,
      className: ne({
        [Rn["c-tab__panel--active"]]: !r && u,
        [Rn["c-tab__panel"]]: !r && !u,
        "video-interpreter-ui-tabpanel": !a,
        [n]: n
      }),
      ...c,
      children: e
    }
  );
};
Ai.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("TabPanel")
};
Ai.defaultProps = {
  __TYPE: "TabPanel",
  disableA11y: !1
};
const Ii = ({
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
        [Rn["c-tab__panels"]]: !n,
        [t]: t
      }),
      "data-type": r,
      ...a,
      children: Xe(i, ["TabPanel"])
    }
  );
};
Ii.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("TabPanels")
};
Ii.defaultProps = {
  __TYPE: "TabPanels"
};
const Lr = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, $i = gt(
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
    const h = e || Ot(), m = ({ target: y }) => {
      l && l({ id: h, value: y.value });
    };
    return /* @__PURE__ */ D(
      "label",
      {
        htmlFor: h,
        className: ne({
          [Lr["c-label"]]: !f,
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
              required: u,
              placeholder: r,
              autoComplete: "off",
              onChange: m,
              "data-class": "c-textarea",
              className: ne({
                [`${Lr["c-textarea"]} ${Lr[`c-textarea--${n}`]}`]: !f
              }),
              ...d
            }
          )
        ]
      }
    );
  }
);
$i.defaultProps = {
  resize: "vertical",
  placeholder: "This is an example of a placeholder"
};
$i.propTypes = {
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
const Ou = Sa(({ children: e, theme: t = {} }) => {
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
Ou.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var da = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, fa = typeof window < "u" && window.document && window.document.createElement ? Vt.useLayoutEffect : Vt.useEffect, ze = "top", at = "bottom", it = "right", We = "left", yo = "auto", Ln = [ze, at, it, We], nn = "start", Nn = "end", Cu = "clippingParents", ki = "viewport", bn = "popper", Pu = "reference", pa = /* @__PURE__ */ Ln.reduce(function(e, t) {
  return e.concat([t + "-" + nn, t + "-" + Nn]);
}, []), Li = /* @__PURE__ */ [].concat(Ln, [yo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + nn, t + "-" + Nn]);
}, []), Du = "beforeRead", Ru = "read", Nu = "afterRead", Mu = "beforeMain", Au = "main", Iu = "afterMain", $u = "beforeWrite", ku = "write", Lu = "afterWrite", Fu = [Du, Ru, Nu, Mu, Au, Iu, $u, ku, Lu];
function bt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ge(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Wt(e) {
  var t = Ge(e).Element;
  return e instanceof t || e instanceof Element;
}
function rt(e) {
  var t = Ge(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function _o(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ge(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Bu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !rt(i) || !bt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function ju(e) {
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
      !rt(a) || !bt(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
const qu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Bu,
  effect: ju,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var zt = Math.max, or = Math.min, rn = Math.round;
function eo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Fi() {
  return !/^((?!chrome|android).)*safari/i.test(eo());
}
function on(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && rt(e) && (a = e.offsetWidth > 0 && rn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && rn(r.height) / e.offsetHeight || 1);
  var c = Wt(e) ? Ge(e) : window, s = c.visualViewport, u = !Fi() && n, f = (r.left + (u && s ? s.offsetLeft : 0)) / a, l = (r.top + (u && s ? s.offsetTop : 0)) / i, d = r.width / a, v = r.height / i;
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
function wo(e) {
  var t = on(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Bi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && _o(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function St(e) {
  return Ge(e).getComputedStyle(e);
}
function Vu(e) {
  return ["table", "td", "th"].indexOf(bt(e)) >= 0;
}
function At(e) {
  return ((Wt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function fr(e) {
  return bt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (_o(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    At(e)
  );
}
function ha(e) {
  return !rt(e) || // https://github.com/popperjs/popper-core/issues/837
  St(e).position === "fixed" ? null : e.offsetParent;
}
function Yu(e) {
  var t = /firefox/i.test(eo()), n = /Trident/i.test(eo());
  if (n && rt(e)) {
    var r = St(e);
    if (r.position === "fixed")
      return null;
  }
  var a = fr(e);
  for (_o(a) && (a = a.host); rt(a) && ["html", "body"].indexOf(bt(a)) < 0; ) {
    var i = St(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Fn(e) {
  for (var t = Ge(e), n = ha(e); n && Vu(n) && St(n).position === "static"; )
    n = ha(n);
  return n && (bt(n) === "html" || bt(n) === "body" && St(n).position === "static") ? t : n || Yu(e) || t;
}
function xo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Sn(e, t, n) {
  return zt(e, or(t, n));
}
function zu(e, t, n) {
  var r = Sn(e, t, n);
  return r > n ? n : r;
}
function ji() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function qi(e) {
  return Object.assign({}, ji(), e);
}
function Vi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Wu = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, qi(typeof t != "number" ? t : Vi(t, Ln));
};
function Uu(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = mt(n.placement), u = xo(s), f = [We, it].indexOf(s) >= 0, l = f ? "height" : "width";
  if (!(!i || !c)) {
    var d = Wu(a.padding, n), v = wo(i), h = u === "y" ? ze : We, m = u === "y" ? at : it, y = n.rects.reference[l] + n.rects.reference[u] - c[u] - n.rects.popper[l], x = c[u] - n.rects.reference[u], w = Fn(i), T = w ? u === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, S = y / 2 - x / 2, E = d[h], b = T - v[l] - d[m], P = T / 2 - v[l] / 2 + S, _ = Sn(E, P, b), C = u;
    n.modifiersData[r] = (t = {}, t[C] = _, t.centerOffset = _ - P, t);
  }
}
function Hu(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Bi(t.elements.popper, a) && (t.elements.arrow = a));
}
const Zu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Uu,
  effect: Hu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function an(e) {
  return e.split("-")[1];
}
var Gu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Xu(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: rn(n * a) / a || 0,
    y: rn(r * a) / a || 0
  };
}
function va(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, u = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, d = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, m = c.y, y = m === void 0 ? 0 : m, x = typeof l == "function" ? l({
    x: h,
    y
  }) : {
    x: h,
    y
  };
  h = x.x, y = x.y;
  var w = c.hasOwnProperty("x"), T = c.hasOwnProperty("y"), S = We, E = ze, b = window;
  if (f) {
    var P = Fn(n), _ = "clientHeight", C = "clientWidth";
    if (P === Ge(n) && (P = At(n), St(P).position !== "static" && s === "absolute" && (_ = "scrollHeight", C = "scrollWidth")), P = P, a === ze || (a === We || a === it) && i === Nn) {
      E = at;
      var $ = d && P === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[_]
      );
      y -= $ - r.height, y *= u ? 1 : -1;
    }
    if (a === We || (a === ze || a === at) && i === Nn) {
      S = it;
      var B = d && P === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[C]
      );
      h -= B - r.width, h *= u ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: s
  }, f && Gu), L = l === !0 ? Xu({
    x: h,
    y
  }, Ge(n)) : {
    x: h,
    y
  };
  if (h = L.x, y = L.y, u) {
    var j;
    return Object.assign({}, A, (j = {}, j[E] = T ? "0" : "", j[S] = w ? "0" : "", j.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + y + "px)" : "translate3d(" + h + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, A, (t = {}, t[E] = T ? y + "px" : "", t[S] = w ? h + "px" : "", t.transform = "", t));
}
function Ku(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, c = i === void 0 ? !0 : i, s = n.roundOffsets, u = s === void 0 ? !0 : s, f = {
    placement: mt(t.placement),
    variation: an(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, va(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, va(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Qu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ku,
  data: {}
};
var Hn = {
  passive: !0
};
function Ju(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, c = r.resize, s = c === void 0 ? !0 : c, u = Ge(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, Hn);
  }), s && u.addEventListener("resize", n.update, Hn), function() {
    i && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Hn);
    }), s && u.removeEventListener("resize", n.update, Hn);
  };
}
const ed = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ju,
  data: {}
};
var td = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Kn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return td[t];
  });
}
var nd = {
  start: "end",
  end: "start"
};
function ga(e) {
  return e.replace(/start|end/g, function(t) {
    return nd[t];
  });
}
function To(e) {
  var t = Ge(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Eo(e) {
  return on(At(e)).left + To(e).scrollLeft;
}
function rd(e, t) {
  var n = Ge(e), r = At(e), a = n.visualViewport, i = r.clientWidth, c = r.clientHeight, s = 0, u = 0;
  if (a) {
    i = a.width, c = a.height;
    var f = Fi();
    (f || !f && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s + Eo(e),
    y: u
  };
}
function od(e) {
  var t, n = At(e), r = To(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = zt(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = zt(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Eo(e), u = -r.scrollTop;
  return St(a || n).direction === "rtl" && (s += zt(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: u
  };
}
function So(e) {
  var t = St(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Yi(e) {
  return ["html", "body", "#document"].indexOf(bt(e)) >= 0 ? e.ownerDocument.body : rt(e) && So(e) ? e : Yi(fr(e));
}
function On(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Yi(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ge(r), c = a ? [i].concat(i.visualViewport || [], So(r) ? r : []) : r, s = t.concat(c);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(On(fr(c)))
  );
}
function to(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ad(e, t) {
  var n = on(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ma(e, t, n) {
  return t === ki ? to(rd(e, n)) : Wt(t) ? ad(t, n) : to(od(At(e)));
}
function id(e) {
  var t = On(fr(e)), n = ["absolute", "fixed"].indexOf(St(e).position) >= 0, r = n && rt(e) ? Fn(e) : e;
  return Wt(r) ? t.filter(function(a) {
    return Wt(a) && Bi(a, r) && bt(a) !== "body";
  }) : [];
}
function sd(e, t, n, r) {
  var a = t === "clippingParents" ? id(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(u, f) {
    var l = ma(e, f, r);
    return u.top = zt(l.top, u.top), u.right = or(l.right, u.right), u.bottom = or(l.bottom, u.bottom), u.left = zt(l.left, u.left), u;
  }, ma(e, c, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function zi(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? mt(r) : null, i = r ? an(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
    case ze:
      u = {
        x: c,
        y: t.y - n.height
      };
      break;
    case at:
      u = {
        x: c,
        y: t.y + t.height
      };
      break;
    case it:
      u = {
        x: t.x + t.width,
        y: s
      };
      break;
    case We:
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
  var f = a ? xo(a) : null;
  if (f != null) {
    var l = f === "y" ? "height" : "width";
    switch (i) {
      case nn:
        u[f] = u[f] - (t[l] / 2 - n[l] / 2);
        break;
      case Nn:
        u[f] = u[f] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return u;
}
function Mn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, u = s === void 0 ? Cu : s, f = n.rootBoundary, l = f === void 0 ? ki : f, d = n.elementContext, v = d === void 0 ? bn : d, h = n.altBoundary, m = h === void 0 ? !1 : h, y = n.padding, x = y === void 0 ? 0 : y, w = qi(typeof x != "number" ? x : Vi(x, Ln)), T = v === bn ? Pu : bn, S = e.rects.popper, E = e.elements[m ? T : v], b = sd(Wt(E) ? E : E.contextElement || At(e.elements.popper), u, l, c), P = on(e.elements.reference), _ = zi({
    reference: P,
    element: S,
    strategy: "absolute",
    placement: a
  }), C = to(Object.assign({}, S, _)), $ = v === bn ? C : P, B = {
    top: b.top - $.top + w.top,
    bottom: $.bottom - b.bottom + w.bottom,
    left: b.left - $.left + w.left,
    right: $.right - b.right + w.right
  }, A = e.modifiersData.offset;
  if (v === bn && A) {
    var L = A[a];
    Object.keys(B).forEach(function(j) {
      var V = [it, at].indexOf(j) >= 0 ? 1 : -1, te = [ze, at].indexOf(j) >= 0 ? "y" : "x";
      B[j] += L[te] * V;
    });
  }
  return B;
}
function ld(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, u = n.allowedAutoPlacements, f = u === void 0 ? Li : u, l = an(r), d = l ? s ? pa : pa.filter(function(m) {
    return an(m) === l;
  }) : Ln, v = d.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  v.length === 0 && (v = d);
  var h = v.reduce(function(m, y) {
    return m[y] = Mn(e, {
      placement: y,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[mt(y)], m;
  }, {});
  return Object.keys(h).sort(function(m, y) {
    return h[m] - h[y];
  });
}
function cd(e) {
  if (mt(e) === yo)
    return [];
  var t = Kn(e);
  return [ga(e), t, ga(t)];
}
function ud(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, u = n.fallbackPlacements, f = n.padding, l = n.boundary, d = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, y = n.allowedAutoPlacements, x = t.options.placement, w = mt(x), T = w === x, S = u || (T || !m ? [Kn(x)] : cd(x)), E = [x].concat(S).reduce(function(z, K) {
      return z.concat(mt(K) === yo ? ld(t, {
        placement: K,
        boundary: l,
        rootBoundary: d,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: y
      }) : K);
    }, []), b = t.rects.reference, P = t.rects.popper, _ = /* @__PURE__ */ new Map(), C = !0, $ = E[0], B = 0; B < E.length; B++) {
      var A = E[B], L = mt(A), j = an(A) === nn, V = [ze, at].indexOf(L) >= 0, te = V ? "width" : "height", Y = Mn(t, {
        placement: A,
        boundary: l,
        rootBoundary: d,
        altBoundary: v,
        padding: f
      }), G = V ? j ? it : We : j ? at : ze;
      b[te] > P[te] && (G = Kn(G));
      var le = Kn(G), ee = [];
      if (i && ee.push(Y[L] <= 0), s && ee.push(Y[G] <= 0, Y[le] <= 0), ee.every(function(z) {
        return z;
      })) {
        $ = A, C = !1;
        break;
      }
      _.set(A, ee);
    }
    if (C)
      for (var O = m ? 3 : 1, N = function(K) {
        var q = E.find(function(Q) {
          var J = _.get(Q);
          if (J)
            return J.slice(0, K).every(function(ae) {
              return ae;
            });
        });
        if (q)
          return $ = q, "break";
      }, F = O; F > 0; F--) {
        var W = N(F);
        if (W === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const dd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ud,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ba(e, t, n) {
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
function ya(e) {
  return [ze, it, at, We].some(function(t) {
    return e[t] >= 0;
  });
}
function fd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = Mn(t, {
    elementContext: "reference"
  }), s = Mn(t, {
    altBoundary: !0
  }), u = ba(c, r), f = ba(s, a, i), l = ya(u), d = ya(f);
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
const pd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: fd
};
function hd(e, t, n) {
  var r = mt(e), a = [We, ze].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
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
function vd(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = Li.reduce(function(l, d) {
    return l[d] = hd(d, t.rects, i), l;
  }, {}), s = c[t.placement], u = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
}
const gd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vd
};
function md(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = zi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const bd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: md,
  data: {}
};
function yd(e) {
  return e === "x" ? "y" : "x";
}
function _d(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, u = n.boundary, f = n.rootBoundary, l = n.altBoundary, d = n.padding, v = n.tether, h = v === void 0 ? !0 : v, m = n.tetherOffset, y = m === void 0 ? 0 : m, x = Mn(t, {
    boundary: u,
    rootBoundary: f,
    padding: d,
    altBoundary: l
  }), w = mt(t.placement), T = an(t.placement), S = !T, E = xo(w), b = yd(E), P = t.modifiersData.popperOffsets, _ = t.rects.reference, C = t.rects.popper, $ = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, B = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (P) {
    if (i) {
      var j, V = E === "y" ? ze : We, te = E === "y" ? at : it, Y = E === "y" ? "height" : "width", G = P[E], le = G + x[V], ee = G - x[te], O = h ? -C[Y] / 2 : 0, N = T === nn ? _[Y] : C[Y], F = T === nn ? -C[Y] : -_[Y], W = t.elements.arrow, z = h && W ? wo(W) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ji(), q = K[V], Q = K[te], J = Sn(0, _[Y], z[Y]), ae = S ? _[Y] / 2 - O - J - q - B.mainAxis : N - J - q - B.mainAxis, X = S ? -_[Y] / 2 + O + J + Q + B.mainAxis : F + J + Q + B.mainAxis, ve = t.elements.arrow && Fn(t.elements.arrow), M = ve ? E === "y" ? ve.clientTop || 0 : ve.clientLeft || 0 : 0, I = (j = A == null ? void 0 : A[E]) != null ? j : 0, re = G + ae - I - M, ie = G + X - I, Se = Sn(h ? or(le, re) : le, G, h ? zt(ee, ie) : ee);
      P[E] = Se, L[E] = Se - G;
    }
    if (s) {
      var Ke, wt = E === "x" ? ze : We, Qe = E === "x" ? at : it, Oe = P[b], ct = b === "y" ? "height" : "width", ut = Oe + x[wt], It = Oe - x[Qe], Ct = [ze, We].indexOf(w) !== -1, $t = (Ke = A == null ? void 0 : A[b]) != null ? Ke : 0, kt = Ct ? ut : Oe - _[ct] - C[ct] - $t + B.altAxis, Le = Ct ? Oe + _[ct] + C[ct] - $t - B.altAxis : It, dt = h && Ct ? zu(kt, Oe, Le) : Sn(h ? kt : ut, Oe, h ? Le : It);
      P[b] = dt, L[b] = dt - Oe;
    }
    t.modifiersData[r] = L;
  }
}
const wd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: _d,
  requiresIfExists: ["offset"]
};
function xd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Td(e) {
  return e === Ge(e) || !rt(e) ? To(e) : xd(e);
}
function Ed(e) {
  var t = e.getBoundingClientRect(), n = rn(t.width) / e.offsetWidth || 1, r = rn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Sd(e, t, n) {
  n === void 0 && (n = !1);
  var r = rt(t), a = rt(t) && Ed(t), i = At(t), c = on(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((bt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  So(i)) && (s = Td(t)), rt(t) ? (u = on(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : i && (u.x = Eo(i))), {
    x: c.left + s.scrollLeft - u.x,
    y: c.top + s.scrollTop - u.y,
    width: c.width,
    height: c.height
  };
}
function Od(e) {
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
function Cd(e) {
  var t = Od(e);
  return Fu.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Pd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Dd(e) {
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
var _a = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function wa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Rd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? _a : a;
  return function(s, u, f) {
    f === void 0 && (f = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _a, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: u
      },
      attributes: {},
      styles: {}
    }, d = [], v = !1, h = {
      state: l,
      setOptions: function(w) {
        var T = typeof w == "function" ? w(l.options) : w;
        y(), l.options = Object.assign({}, i, l.options, T), l.scrollParents = {
          reference: Wt(s) ? On(s) : s.contextElement ? On(s.contextElement) : [],
          popper: On(u)
        };
        var S = Cd(Dd([].concat(r, l.options.modifiers)));
        return l.orderedModifiers = S.filter(function(E) {
          return E.enabled;
        }), m(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = l.elements, T = w.reference, S = w.popper;
          if (wa(T, S)) {
            l.rects = {
              reference: Sd(T, Fn(S), l.options.strategy === "fixed"),
              popper: wo(S)
            }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(B) {
              return l.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var E = 0; E < l.orderedModifiers.length; E++) {
              if (l.reset === !0) {
                l.reset = !1, E = -1;
                continue;
              }
              var b = l.orderedModifiers[E], P = b.fn, _ = b.options, C = _ === void 0 ? {} : _, $ = b.name;
              typeof P == "function" && (l = P({
                state: l,
                options: C,
                name: $,
                instance: h
              }) || l);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Pd(function() {
        return new Promise(function(x) {
          h.forceUpdate(), x(l);
        });
      }),
      destroy: function() {
        y(), v = !0;
      }
    };
    if (!wa(s, u))
      return h;
    h.setOptions(f).then(function(x) {
      !v && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function m() {
      l.orderedModifiers.forEach(function(x) {
        var w = x.name, T = x.options, S = T === void 0 ? {} : T, E = x.effect;
        if (typeof E == "function") {
          var b = E({
            state: l,
            name: w,
            instance: h,
            options: S
          }), P = function() {
          };
          d.push(b || P);
        }
      });
    }
    function y() {
      d.forEach(function(x) {
        return x();
      }), d = [];
    }
    return h;
  };
}
var Nd = [ed, bd, Qu, qu, gd, dd, wd, Zu, pd], Md = /* @__PURE__ */ Rd({
  defaultModifiers: Nd
}), Ad = typeof Element < "u", Id = typeof Map == "function", $d = typeof Set == "function", kd = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Qn(e, t) {
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
        if (!Qn(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (Id && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Qn(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if ($d && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (kd && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Ad && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !Qn(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Ld = function(t, n) {
  try {
    return Qn(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Fd = /* @__PURE__ */ An(Ld);
var Bd = [], pr = function(t, n, r) {
  r === void 0 && (r = {});
  var a = Vt.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || Bd
  }, c = Vt.useState({
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
  }), s = c[0], u = c[1], f = Vt.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var m = h.state, y = Object.keys(m.elements);
        ds.flushSync(function() {
          u({
            styles: da(y.map(function(x) {
              return [x, m.styles[x] || {}];
            })),
            attributes: da(y.map(function(x) {
              return [x, m.attributes[x]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), l = Vt.useMemo(function() {
    var v = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Fd(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), d = Vt.useRef();
  return fa(function() {
    d.current && d.current.setOptions(l);
  }, [l]), fa(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Md, h = v(t, n, l);
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
const Fr = {
  "c-toggletip": "_c-toggletip_7t6cz_1",
  "c-toggletip--active": "_c-toggletip--active_7t6cz_17",
  "c-toggletip__arrow": "_c-toggletip__arrow_7t6cz_21"
}, jd = Object.freeze({
  ESC: 27
}), Wi = ({
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
  const [l, d] = Z(!1), v = U(null), h = U(null), m = t || Ot(), y = (b) => d(!1), x = (b) => {
    d(!l), l && document.activeElement === v.current && !u && setTimeout(() => {
      d((P) => !P);
    }, 100), f && f(b);
  }, w = (b) => {
    (b.keyCode | b.which) === jd.ESC && l && d(!l);
  }, T = De.map(e, (b) => st(b) ? Pe(b, {
    ...b.props,
    "aria-describedby": t,
    ref: v,
    onClick: x,
    "data-open": l,
    ...u ? {} : { onBlur: y, onKeyDown: w }
  }) : null), { styles: S, attributes: E } = pr(
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
    T,
    /* @__PURE__ */ p(cn, { id: "js-toggletip-portal", children: /* @__PURE__ */ D(
      "div",
      {
        id: m,
        ref: h,
        role: "status",
        className: `${Fr["c-toggletip"]} ${l && Fr["c-toggletip--active"]} ${a ?? ""}`,
        style: S.popper,
        ...E.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Fr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: S.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
Wi.defaultProps = {
  placement: "auto"
};
Wi.propTypes = {
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
const Br = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, qd = Object.freeze({
  ESC: 27
}), Ui = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s
}) => {
  const [u, f] = Z(!1), l = U(null), d = U(null), v = U(), h = t || Ot(), m = (_) => {
    u || f(!u);
  }, y = (_) => f(!1), x = (_) => {
    (!u || document.activeElement !== l.current) && f(!u);
  }, w = () => {
    window.clearTimeout(v.current);
  }, T = (_) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, S = (_) => {
    (_.keyCode | _.which) === qd.ESC && u && f(!u);
  }, E = De.map(e, (_) => st(_) ? Pe(_, {
    ..._.props,
    "aria-describedby": t,
    ref: l,
    onFocus: m,
    onBlur: y,
    onMouseEnter: x,
    onMouseLeave: T,
    onKeyDown: S
  }) : null), { styles: b, attributes: P } = pr(
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
  return !n || De.count(e) > 1 || s ? /* @__PURE__ */ p(ot, { children: e }) : /* @__PURE__ */ D(ot, { children: [
    E,
    /* @__PURE__ */ p(cn, { id: "js-tooltip-portal", children: /* @__PURE__ */ D(
      "div",
      {
        id: h,
        ref: d,
        role: "tooltip",
        "data-open": u,
        onMouseEnter: w,
        onMouseLeave: T,
        className: `${Br["c-tooltip"]} ${u && Br["c-tooltip--active"]} ${a ?? ""}`,
        style: b.popper,
        ...P.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Br["c-tooltip__arrow"],
              "data-popper-arrow": !0,
              style: b.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
Ui.defaultProps = {
  placement: "auto"
};
Ui.propTypes = {
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
const Oo = lt(), Hi = ({
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
  const [f, l] = Z(null), d = [
    ...e.reduce(
      (w, T, S) => [
        ...w,
        document.querySelector(T.target) ? { id: S + 1, ...T } : null
      ],
      []
    ).filter((w) => w !== null)
  ], v = (w) => d.filter((T) => T.id === w).reduce((T, S) => ({ ...T, ...S }), {}), h = (w) => {
    const T = document.querySelector("#root");
    T.inert = w;
  }, m = () => {
    l((w) => w < d.length ? w + 1 : w);
  }, y = () => {
    l((w) => w > 0 + 1 ? w - 1 : w);
  }, x = () => {
    l(null), n(!t), h(!1), r && r.current.focus();
  };
  return H(() => {
    t && (l(d.shift().id), h(!0));
  }, [t]), /* @__PURE__ */ p(
    Oo.Provider,
    {
      value: {
        isOpen: t,
        lastId: d.length,
        ...v(f),
        methods: {
          onNext: m,
          onPrev: y,
          onClose: x
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(cn, { id: "js-tour", children: t && /* @__PURE__ */ D(ot, { children: [
        /* @__PURE__ */ p(Vd, {}),
        /* @__PURE__ */ p(
          Zi,
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
Hi.defaultProps = {
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
Hi.propTypes = {
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
}, Zi = ({
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
  } = Ee(Oo), h = U(), { onClose: m, onPrev: y, onNext: x } = c, { styles: w, attributes: T } = pr(
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
  ), S = () => st(f) ? f : us(
    "p",
    {
      role: "status",
      "aria-live": "polite",
      className: Mt["tour-description"]
    },
    [f]
  ), E = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), x();
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
        ...T.popper,
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
          S(),
          /* @__PURE__ */ D(
            "div",
            {
              className: ne({
                [Mt["c-tour-button-container"]]: !v
              }),
              "data-class": "c-tour-button-container",
              children: [
                !t && /* @__PURE__ */ p(
                  Yt,
                  {
                    hasAriaLabel: !0,
                    label: "Salir",
                    "data-class": "c-button__close",
                    onClick: m,
                    ...v && { defaultStyle: v },
                    children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24",
                        viewBox: "0 -960 960 960",
                        width: "24",
                        children: /* @__PURE__ */ p("path", { d: "M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" })
                      }
                    ) })
                  }
                ),
                !n && /* @__PURE__ */ p(
                  Yt,
                  {
                    disabled: s === 1,
                    hasAriaLabel: !0,
                    label: "Anterior",
                    "data-class": "c-button__before",
                    onClick: y,
                    ...v && { defaultStyle: v },
                    children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24",
                        viewBox: "0 -960 960 960",
                        width: "24",
                        children: /* @__PURE__ */ p("path", { d: "m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z" })
                      }
                    ) })
                  }
                ),
                /* @__PURE__ */ p(
                  Yt,
                  {
                    disabled: s === i,
                    hasAriaLabel: !0,
                    label: "Siguiente",
                    "data-class": "c-button__after",
                    onClick: E,
                    ...v && { defaultStyle: v },
                    children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24",
                        viewBox: "0 -960 960 960",
                        width: "24",
                        children: /* @__PURE__ */ p("path", { d: "M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" })
                      }
                    ) })
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
Zi.propTypes = {
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
const Vd = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r, defaultStyle: a } = Ee(Oo), [i, c] = Z({}), s = () => {
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
  return H(() => (n && s(), () => {
    c({});
  }), [n]), H(() => {
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
      className: ne({
        [Mt["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [r]: r
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: Mt["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, Yd = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), zd = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || Yd, [a, i] = Z(!1), [c, s] = Z(null);
  return H(() => {
    if (!c) {
      i(!1);
      return;
    }
    const u = new window.IntersectionObserver(
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
}, Wd = "_active_1oko4_91", Ud = "_iconPulse_1oko4_1", _e = {
  "c-vid": "_c-vid_1oko4_1",
  "c-vid__caption": "_c-vid__caption_1oko4_19",
  "c-vid__container": "_c-vid__container_1oko4_24",
  "c-vid__video": "_c-vid__video_1oko4_45",
  "no-captions": "_no-captions_1oko4_57",
  "c-vid__wrapper": "_c-vid__wrapper_1oko4_61",
  "c-vid__icon-container": "_c-vid__icon-container_1oko4_71",
  "c-vid__icon": "_c-vid__icon_1oko4_71",
  active: Wd,
  iconPulse: Ud,
  "c-vid__progress-bg": "_c-vid__progress-bg_1oko4_113",
  "c-vid__progress-bar": "_c-vid__progress-bar_1oko4_135",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_1oko4_141",
  "c-vid__controls": "_c-vid__controls_1oko4_151",
  "c-vid__button": "_c-vid__button_1oko4_166",
  "c-vid__volume": "_c-vid__volume_1oko4_181",
  "c-vid__volume-item": "_c-vid__volume-item_1oko4_192",
  "c-vid__time": "_c-vid__time_1oko4_203",
  "c-vid__subtitles": "_c-vid__subtitles_1oko4_209"
}, Gi = ({ src: e, width: t = "1000", hasDescription: n, description: r, addClass: a, poster: i, ...c }) => {
  const [s, u] = Z({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, l] = Z({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [d, v] = Z({
    state: !1,
    label: "Reproducir video"
  }), [h, m] = Z({
    state: !0,
    label: "Volumen"
  }), [y, x] = Z(100), [w, T] = Z({
    state: !1,
    label: "Ver en pantalla completa"
  }), [S, E] = Z(!1), [b, P] = Z(100), _ = U(null), C = U(null), $ = U(null), B = U(null), A = U(null), L = U(null), j = U(null), V = U(null), [te, Y] = Z(!1), [G, le] = zd({
    rootMargin: "20px 10px",
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }), ee = (I) => {
    I.classList.add(`${_e.active}`), setTimeout(() => {
      I.classList.remove(`${_e.active}`);
    }, 650);
  };
  function O() {
    const I = C.current;
    d.state ? (I.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (I.play(), v({
      state: !0,
      label: "Pausar video"
    })), ee(L.current);
  }
  function N() {
    const I = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, re = _.current;
    I ? (T({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (T({
      state: !0,
      label: "Salir de pantalla completa"
    }), re.requestFullscreen ? re.requestFullscreen() : re.mozRequestFullScreen ? re.mozRequestFullScreen() : re.webkitRequestFullScreen ? re.webkitRequestFullScreen() : re.msRequestFullscreen && re.msRequestFullscreen());
  }
  function F(I) {
    const re = parseInt(I, 10), ie = re >= 3600 ? Math.floor(re / 3600) : 0, Se = Math.floor((re - ie * 3600) / 60), Ke = re - ie * 3600 - Se * 60, wt = q(K(ie)), Qe = q(K(Se)), Oe = q(K(Ke));
    return {
      hours: wt,
      minutes: Qe,
      seconds: Oe
    };
  }
  function W(I) {
    const re = z(I.duration), ie = z(I.currentTime);
    l({
      totalSeconds: I.currentTime,
      hours: parseInt(F(I.currentTime).hours),
      minutes: parseInt(F(I.currentTime).minutes),
      seconds: parseInt(F(I.currentTime).seconds),
      string: ie
    }), u({
      totalSeconds: Math.floor(I.duration),
      hours: parseInt(F(I.duration).hours),
      minutes: parseInt(F(I.duration).minutes),
      seconds: parseInt(F(I.duration).seconds),
      string: re
    });
  }
  function z(I) {
    return parseInt(I, 10) <= 3600 ? `${F(I).minutes}:${F(I).seconds}` : `${F(I).hours}:${F(I).minutes}:${F(I).seconds}`;
  }
  function K(I) {
    return I < 10 ? I = "0" + I : I;
  }
  function q(I) {
    return isNaN(I) ? "00" : I;
  }
  function Q(I) {
    const re = B.current, ie = C.current, Ke = I.nativeEvent.offsetX / re.offsetWidth * ie.duration;
    ie.currentTime = Ke;
  }
  function J(I) {
    const re = C.current, ie = I.target.value, Se = ie / 100;
    P(ie), x(ie), re.volume = Se, h.state || m({
      state: !0,
      label: "Volumen"
    });
  }
  const ae = () => {
    if (h.state) {
      m({
        state: !1,
        label: "Mutear video"
      });
      const I = C.current, re = 0, ie = re;
      P(re), I.volume = ie;
    } else {
      m({
        state: !0,
        label: "Volumen"
      });
      const I = C.current, re = y, ie = re / 100;
      P(re), I.volume = ie;
    }
  }, X = function(I) {
    (I.keyCode || I.which) === 32 && O();
  }, ve = function(I) {
    const re = Math.floor(B.current.getAttribute("aria-valuenow"));
    if (document.activeElement === A.current)
      return null;
    if ((I.keyCode || I.which) === 37) {
      const ie = re - 5;
      ie >= 0 ? C.current.currentTime = ie : C.current.currentTime = 0, ee(V.current);
    }
    if ((I.keyCode || I.which) === 39) {
      const ie = re + 5;
      ie >= C.current.duration ? C.current.currentTime = C.current.duration : C.current.currentTime = ie, ee(j.current);
    }
  }, M = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return H(() => {
    const I = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(I, "caption") && Y(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(I, "volume") && P(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), H(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: te, volume: b }));
  }, [te, b]), H(() => ($.current ? $.current.addEventListener("error", () => {
    E(!0);
  }) : E(!0), e.caption && E(!1), () => {
    $.current && $.current.removeEventListener("error", () => {
      E(!0);
    });
  }), [e.caption]), H(() => {
    d.state && !le && O();
  }, [le]), no(() => {
    C.current && G(C.current);
  }, [C]), /* @__PURE__ */ D(
    "figure",
    {
      className: `${_e["c-vid"]} ${a}`,
      style: { maxWidth: `${t}px` },
      onKeyDown: (I) => ve(I),
      ...c,
      children: [
        /* @__PURE__ */ D("div", { className: `${_e["c-vid__container"]} ${a}`, "data-video-full-screen": w.state, ref: _, children: [
          /* @__PURE__ */ D("div", { className: _e["c-vid__wrapper"], children: [
            /* @__PURE__ */ D(
              "div",
              {
                className: _e["c-vid__icon-container"],
                children: [
                  /* @__PURE__ */ p("div", { ref: V, className: _e["c-vid__icon"], children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
                  /* @__PURE__ */ p("div", { ref: L, className: _e["c-vid__icon"], children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
                  /* @__PURE__ */ p("div", { ref: j, className: _e["c-vid__icon"], children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
                ]
              }
            ),
            /* @__PURE__ */ D(
              "video",
              {
                preload: "none",
                ref: C,
                onTimeUpdate: (I) => W(I.target),
                onLoadedData: (I) => W(I.target),
                className: `${_e["c-vid__video"]} ${te ? "" : _e["no-captions"]}`,
                onClick: () => {
                  O(), console.log("mezcla");
                },
                ...i && { poster: i },
                children: [
                  /* @__PURE__ */ p("source", { src: e.video }),
                  e.caption ? /* @__PURE__ */ p(
                    "track",
                    {
                      ref: $,
                      src: e.caption,
                      label: "Subtítulos en español",
                      kind: "subtitles",
                      srcLang: "es",
                      default: !0
                    }
                  ) : ""
                ]
              }
            )
          ] }),
          /* @__PURE__ */ p("div", { className: _e["progress-container"], children: /* @__PURE__ */ D(
            "div",
            {
              role: "slider",
              "aria-label": "Progreso del video",
              "aria-valuemin": "0",
              "aria-valuenow": Math.round(f.totalSeconds),
              "aria-valuemax": Math.round(s.totalSeconds),
              "aria-valuetext": M(),
              tabIndex: "0",
              onKeyDown: X,
              className: _e["c-vid__progress-bg"],
              onClick: Q,
              ref: B,
              children: [
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: _e["c-vid__progress-bar"],
                    style: {
                      transform: `scaleX(${isNaN(f.totalSeconds / s.totalSeconds) ? 0 : f.totalSeconds / s.totalSeconds})`
                    }
                  }
                ),
                /* @__PURE__ */ p(
                  "div",
                  {
                    style: {
                      left: `min(calc((${f.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ D("div", { className: `controls ${_e["c-vid__controls"]}`, children: [
            /* @__PURE__ */ p(
              "button",
              {
                className: `${_e["c-vid__button"]} js-button-video-play`,
                "aria-label": d.label,
                onClick: O,
                "data-description": "Este botón reproduce el video",
                children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${_e["c-vid__button"]} js-button-video-volumen`,
                "aria-label": h.label,
                "data-description": "Este botón controla el volumen",
                onClick: ae,
                children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: h.state ? /* @__PURE__ */ p(
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
            /* @__PURE__ */ D("label", { className: _e["c-vid__volume"], htmlFor: "volumeControl", children: [
              /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
              /* @__PURE__ */ p(
                "input",
                {
                  className: _e["c-vid__volume-item"],
                  ref: A,
                  id: "volumeControl",
                  type: "range",
                  min: "0",
                  max: "100",
                  step: "5",
                  value: b,
                  onChange: J,
                  "aria-valuetext": `${b}%`
                }
              )
            ] }),
            /* @__PURE__ */ D("p", { className: _e["c-vid__time"], "aria-hidden": "true", children: [
              /* @__PURE__ */ p("span", { children: f.string }),
              "/",
              /* @__PURE__ */ p("span", { children: s.string })
            ] }),
            /* @__PURE__ */ p(
              "button",
              {
                disabled: S,
                "aria-pressed": S ? void 0 : te,
                onClick: () => Y(!te),
                "aria-label": "Subtítulos",
                className: `${_e["c-vid__button"]} ${_e["c-vid__subtitles"]}`,
                children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: S ? /* @__PURE__ */ p(
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
            /* @__PURE__ */ p("button", { className: _e["c-vid__button"], "aria-label": w.label, onClick: N, children: /* @__PURE__ */ p(ge, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: w.state ? /* @__PURE__ */ p(
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
        n && /* @__PURE__ */ D("figcaption", { className: _e["c-vid__caption"], children: [
          /* @__PURE__ */ p("strong", { children: r.title }),
          " ",
          r.content
        ] })
      ]
    }
  );
};
Gi.propTypes = {
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
Gi.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
var hr = { exports: {} }, Xi = {};
function Ki(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ki(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function xa() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ki(e)) && (r && (r += " "), r += t);
  return r;
}
const Hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: xa,
  default: xa
}, Symbol.toStringTag, { value: "Module" })), Zd = /* @__PURE__ */ fs(Hd);
var xe = {}, yt = {};
Object.defineProperty(yt, "__esModule", {
  value: !0
});
yt.dontSetMe = Jd;
yt.findInArray = Gd;
yt.int = Qd;
yt.isFunction = Xd;
yt.isNum = Kd;
function Gd(e, t) {
  for (let n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function Xd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function Kd(e) {
  return typeof e == "number" && !isNaN(e);
}
function Qd(e) {
  return parseInt(e, 10);
}
function Jd(e, t, n) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var Ut = {};
Object.defineProperty(Ut, "__esModule", {
  value: !0
});
Ut.browserPrefixToKey = Ji;
Ut.browserPrefixToStyle = ef;
Ut.default = void 0;
Ut.getPrefix = Qi;
const jr = ["Moz", "Webkit", "O", "ms"];
function Qi() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const n = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!n || t in n)
    return "";
  for (let r = 0; r < jr.length; r++)
    if (Ji(t, jr[r]) in n)
      return jr[r];
  return "";
}
function Ji(e, t) {
  return t ? "".concat(t).concat(tf(e)) : e;
}
function ef(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function tf(e) {
  let t = "", n = !0;
  for (let r = 0; r < e.length; r++)
    n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
  return t;
}
Ut.default = Qi();
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.addClassName = ns;
xe.addEvent = of;
xe.addUserSelectStyles = gf;
xe.createCSSTransform = ff;
xe.createSVGTransform = pf;
xe.getTouch = hf;
xe.getTouchIdentifier = vf;
xe.getTranslation = Co;
xe.innerHeight = cf;
xe.innerWidth = uf;
xe.matchesSelector = ts;
xe.matchesSelectorAndParentsTo = rf;
xe.offsetXYFromParent = df;
xe.outerHeight = sf;
xe.outerWidth = lf;
xe.removeClassName = rs;
xe.removeEvent = af;
xe.removeUserSelectStyles = mf;
var Ze = yt, Ta = nf(Ut);
function es(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (es = function(r) {
    return r ? n : t;
  })(e);
}
function nf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = es(t);
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
let Zn = "";
function ts(e, t) {
  return Zn || (Zn = (0, Ze.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, Ze.isFunction)(e[n]);
  })), (0, Ze.isFunction)(e[Zn]) ? e[Zn](t) : !1;
}
function rf(e, t, n) {
  let r = e;
  do {
    if (ts(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function of(e, t, n, r) {
  if (!e)
    return;
  const a = {
    capture: !0,
    ...r
  };
  e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
}
function af(e, t, n, r) {
  if (!e)
    return;
  const a = {
    capture: !0,
    ...r
  };
  e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
}
function sf(e) {
  let t = e.clientHeight;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Ze.int)(n.borderTopWidth), t += (0, Ze.int)(n.borderBottomWidth), t;
}
function lf(e) {
  let t = e.clientWidth;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Ze.int)(n.borderLeftWidth), t += (0, Ze.int)(n.borderRightWidth), t;
}
function cf(e) {
  let t = e.clientHeight;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Ze.int)(n.paddingTop), t -= (0, Ze.int)(n.paddingBottom), t;
}
function uf(e) {
  let t = e.clientWidth;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Ze.int)(n.paddingLeft), t -= (0, Ze.int)(n.paddingRight), t;
}
function df(e, t, n) {
  const a = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - a.left) / n, c = (e.clientY + t.scrollTop - a.top) / n;
  return {
    x: i,
    y: c
  };
}
function ff(e, t) {
  const n = Co(e, t, "px");
  return {
    [(0, Ta.browserPrefixToKey)("transform", Ta.default)]: n
  };
}
function pf(e, t) {
  return Co(e, t, "");
}
function Co(e, t, n) {
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
function hf(e, t) {
  return e.targetTouches && (0, Ze.findInArray)(e.targetTouches, (n) => t === n.identifier) || e.changedTouches && (0, Ze.findInArray)(e.changedTouches, (n) => t === n.identifier);
}
function vf(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function gf(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && ns(e.body, "react-draggable-transparent-selection");
}
function mf(e) {
  if (e)
    try {
      if (e.body && rs(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function ns(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function rs(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var _t = {};
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.canDragX = _f;
_t.canDragY = wf;
_t.createCoreData = Tf;
_t.createDraggableData = Ef;
_t.getBoundPosition = bf;
_t.getControlPosition = xf;
_t.snapToGrid = yf;
var He = yt, Qt = xe;
function bf(e, t, n) {
  if (!e.props.bounds)
    return [t, n];
  let {
    bounds: r
  } = e.props;
  r = typeof r == "string" ? r : Sf(r);
  const a = Po(e);
  if (typeof r == "string") {
    const {
      ownerDocument: i
    } = a, c = i.defaultView;
    let s;
    if (r === "parent" ? s = a.parentNode : s = i.querySelector(r), !(s instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    const u = s, f = c.getComputedStyle(a), l = c.getComputedStyle(u);
    r = {
      left: -a.offsetLeft + (0, He.int)(l.paddingLeft) + (0, He.int)(f.marginLeft),
      top: -a.offsetTop + (0, He.int)(l.paddingTop) + (0, He.int)(f.marginTop),
      right: (0, Qt.innerWidth)(u) - (0, Qt.outerWidth)(a) - a.offsetLeft + (0, He.int)(l.paddingRight) - (0, He.int)(f.marginRight),
      bottom: (0, Qt.innerHeight)(u) - (0, Qt.outerHeight)(a) - a.offsetTop + (0, He.int)(l.paddingBottom) - (0, He.int)(f.marginBottom)
    };
  }
  return (0, He.isNum)(r.right) && (t = Math.min(t, r.right)), (0, He.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, He.isNum)(r.left) && (t = Math.max(t, r.left)), (0, He.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function yf(e, t, n) {
  const r = Math.round(t / e[0]) * e[0], a = Math.round(n / e[1]) * e[1];
  return [r, a];
}
function _f(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function wf(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function xf(e, t, n) {
  const r = typeof t == "number" ? (0, Qt.getTouch)(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  const a = Po(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, Qt.offsetXYFromParent)(r || e, i, n.props.scale);
}
function Tf(e, t, n) {
  const r = !(0, He.isNum)(e.lastX), a = Po(e);
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
function Ef(e, t) {
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
function Sf(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Po(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var vr = {}, gr = {};
Object.defineProperty(gr, "__esModule", {
  value: !0
});
gr.default = Of;
function Of() {
}
Object.defineProperty(vr, "__esModule", {
  value: !0
});
vr.default = void 0;
var qr = Pf($e), Ye = Do(io), Cf = Do(Oa), Ie = xe, Dt = _t, Vr = yt, yn = Do(gr);
function Do(e) {
  return e && e.__esModule ? e : { default: e };
}
function os(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (os = function(r) {
    return r ? n : t;
  })(e);
}
function Pf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = os(t);
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
function Be(e, t, n) {
  return t = Df(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Df(e) {
  var t = Rf(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Rf(e, t) {
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
let Rt = ht.mouse, mr = class extends qr.Component {
  constructor() {
    super(...arguments), Be(this, "dragging", !1), Be(this, "lastX", NaN), Be(this, "lastY", NaN), Be(this, "touchIdentifier", null), Be(this, "mounted", !1), Be(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const n = this.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: r
      } = n;
      if (this.props.disabled || !(t.target instanceof r.defaultView.Node) || this.props.handle && !(0, Ie.matchesSelectorAndParentsTo)(t.target, this.props.handle, n) || this.props.cancel && (0, Ie.matchesSelectorAndParentsTo)(t.target, this.props.cancel, n))
        return;
      t.type === "touchstart" && t.preventDefault();
      const a = (0, Ie.getTouchIdentifier)(t);
      this.touchIdentifier = a;
      const i = (0, Dt.getControlPosition)(t, a, this);
      if (i == null)
        return;
      const {
        x: c,
        y: s
      } = i, u = (0, Dt.createCoreData)(this, c, s);
      (0, yn.default)("DraggableCore: handleDragStart: %j", u), (0, yn.default)("calling", this.props.onStart), !(this.props.onStart(t, u) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, Ie.addUserSelectStyles)(r), this.dragging = !0, this.lastX = c, this.lastY = s, (0, Ie.addEvent)(r, Rt.move, this.handleDrag), (0, Ie.addEvent)(r, Rt.stop, this.handleDragStop));
    }), Be(this, "handleDrag", (t) => {
      const n = (0, Dt.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let s = r - this.lastX, u = a - this.lastY;
        if ([s, u] = (0, Dt.snapToGrid)(this.props.grid, s, u), !s && !u)
          return;
        r = this.lastX + s, a = this.lastY + u;
      }
      const i = (0, Dt.createCoreData)(this, r, a);
      if ((0, yn.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(t, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const u = document.createEvent("MouseEvents");
          u.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(u);
        }
        return;
      }
      this.lastX = r, this.lastY = a;
    }), Be(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const n = (0, Dt.getControlPosition)(t, this.touchIdentifier, this);
      if (n == null)
        return;
      let {
        x: r,
        y: a
      } = n;
      if (Array.isArray(this.props.grid)) {
        let u = r - this.lastX || 0, f = a - this.lastY || 0;
        [u, f] = (0, Dt.snapToGrid)(this.props.grid, u, f), r = this.lastX + u, a = this.lastY + f;
      }
      const i = (0, Dt.createCoreData)(this, r, a);
      if (this.props.onStop(t, i) === !1 || this.mounted === !1)
        return !1;
      const s = this.findDOMNode();
      s && this.props.enableUserSelectHack && (0, Ie.removeUserSelectStyles)(s.ownerDocument), (0, yn.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, s && ((0, yn.default)("DraggableCore: Removing handlers"), (0, Ie.removeEvent)(s.ownerDocument, Rt.move, this.handleDrag), (0, Ie.removeEvent)(s.ownerDocument, Rt.stop, this.handleDragStop));
    }), Be(this, "onMouseDown", (t) => (Rt = ht.mouse, this.handleDragStart(t))), Be(this, "onMouseUp", (t) => (Rt = ht.mouse, this.handleDragStop(t))), Be(this, "onTouchStart", (t) => (Rt = ht.touch, this.handleDragStart(t))), Be(this, "onTouchEnd", (t) => (Rt = ht.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, Ie.addEvent)(t, ht.touch.start, this.onTouchStart, {
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
      (0, Ie.removeEvent)(n, ht.mouse.move, this.handleDrag), (0, Ie.removeEvent)(n, ht.touch.move, this.handleDrag), (0, Ie.removeEvent)(n, ht.mouse.stop, this.handleDragStop), (0, Ie.removeEvent)(n, ht.touch.stop, this.handleDragStop), (0, Ie.removeEvent)(t, ht.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, Ie.removeUserSelectStyles)(n);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, n;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (n = this.props) === null || n === void 0 || (n = n.nodeRef) === null || n === void 0 ? void 0 : n.current : Cf.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ qr.cloneElement(qr.Children.only(this.props.children), {
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
vr.default = mr;
Be(mr, "displayName", "DraggableCore");
Be(mr, "propTypes", {
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
  className: Vr.dontSetMe,
  style: Vr.dontSetMe,
  transform: Vr.dontSetMe
});
Be(mr, "defaultProps", {
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
      return u.default;
    }
  }), e.default = void 0;
  var t = v($e), n = l(io), r = l(Oa), a = l(Zd), i = xe, c = _t, s = yt, u = l(vr), f = l(gr);
  function l(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function d(T) {
    if (typeof WeakMap != "function")
      return null;
    var S = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap();
    return (d = function(b) {
      return b ? E : S;
    })(T);
  }
  function v(T, S) {
    if (!S && T && T.__esModule)
      return T;
    if (T === null || typeof T != "object" && typeof T != "function")
      return { default: T };
    var E = d(S);
    if (E && E.has(T))
      return E.get(T);
    var b = {}, P = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var _ in T)
      if (_ !== "default" && Object.prototype.hasOwnProperty.call(T, _)) {
        var C = P ? Object.getOwnPropertyDescriptor(T, _) : null;
        C && (C.get || C.set) ? Object.defineProperty(b, _, C) : b[_] = T[_];
      }
    return b.default = T, E && E.set(T, b), b;
  }
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(T) {
      for (var S = 1; S < arguments.length; S++) {
        var E = arguments[S];
        for (var b in E)
          Object.prototype.hasOwnProperty.call(E, b) && (T[b] = E[b]);
      }
      return T;
    }, h.apply(this, arguments);
  }
  function m(T, S, E) {
    return S = y(S), S in T ? Object.defineProperty(T, S, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : T[S] = E, T;
  }
  function y(T) {
    var S = x(T, "string");
    return typeof S == "symbol" ? S : String(S);
  }
  function x(T, S) {
    if (typeof T != "object" || T === null)
      return T;
    var E = T[Symbol.toPrimitive];
    if (E !== void 0) {
      var b = E.call(T, S || "default");
      if (typeof b != "object")
        return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (S === "string" ? String : Number)(T);
  }
  class w extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(S, E) {
      let {
        position: b
      } = S, {
        prevPropsPosition: P
      } = E;
      return b && (!P || b.x !== P.x || b.y !== P.y) ? ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
        position: b,
        prevPropsPosition: P
      }), {
        x: b.x,
        y: b.y,
        prevPropsPosition: {
          ...b
        }
      }) : null;
    }
    constructor(S) {
      super(S), m(this, "onDragStart", (E, b) => {
        if ((0, f.default)("Draggable: onDragStart: %j", b), this.props.onStart(E, (0, c.createDraggableData)(this, b)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), m(this, "onDrag", (E, b) => {
        if (!this.state.dragging)
          return !1;
        (0, f.default)("Draggable: onDrag: %j", b);
        const P = (0, c.createDraggableData)(this, b), _ = {
          x: P.x,
          y: P.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: $,
            y: B
          } = _;
          _.x += this.state.slackX, _.y += this.state.slackY;
          const [A, L] = (0, c.getBoundPosition)(this, _.x, _.y);
          _.x = A, _.y = L, _.slackX = this.state.slackX + ($ - _.x), _.slackY = this.state.slackY + (B - _.y), P.x = _.x, P.y = _.y, P.deltaX = _.x - this.state.x, P.deltaY = _.y - this.state.y;
        }
        if (this.props.onDrag(E, P) === !1)
          return !1;
        this.setState(_);
      }), m(this, "onDragStop", (E, b) => {
        if (!this.state.dragging || this.props.onStop(E, (0, c.createDraggableData)(this, b)) === !1)
          return !1;
        (0, f.default)("Draggable: onDragStop: %j", b);
        const _ = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: $,
            y: B
          } = this.props.position;
          _.x = $, _.y = B;
        }
        this.setState(_);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: S.position ? S.position.x : S.defaultPosition.x,
        y: S.position ? S.position.y : S.defaultPosition.y,
        prevPropsPosition: {
          ...S.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, S.position && !(S.onDrag || S.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var S, E;
      return (S = (E = this.props) === null || E === void 0 || (E = E.nodeRef) === null || E === void 0 ? void 0 : E.current) !== null && S !== void 0 ? S : r.default.findDOMNode(this);
    }
    render() {
      const {
        axis: S,
        bounds: E,
        children: b,
        defaultPosition: P,
        defaultClassName: _,
        defaultClassNameDragging: C,
        defaultClassNameDragged: $,
        position: B,
        positionOffset: A,
        scale: L,
        ...j
      } = this.props;
      let V = {}, te = null;
      const G = !!!B || this.state.dragging, le = B || P, ee = {
        // Set left if horizontal drag is enabled
        x: (0, c.canDragX)(this) && G ? this.state.x : le.x,
        // Set top if vertical drag is enabled
        y: (0, c.canDragY)(this) && G ? this.state.y : le.y
      };
      this.state.isElementSVG ? te = (0, i.createSVGTransform)(ee, A) : V = (0, i.createCSSTransform)(ee, A);
      const O = (0, a.default)(b.props.className || "", _, {
        [C]: this.state.dragging,
        [$]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(u.default, h({}, j, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(b), {
        className: O,
        style: {
          ...b.props.style,
          ...V
        },
        transform: te
      }));
    }
  }
  e.default = w, m(w, "displayName", "Draggable"), m(w, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...u.default.propTypes,
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
  }), m(w, "defaultProps", {
    ...u.default.defaultProps,
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
})(Xi);
const {
  default: as,
  DraggableCore: Nf
} = Xi;
hr.exports = as;
hr.exports.default = as;
hr.exports.DraggableCore = Nf;
var Mf = hr.exports;
const Af = /* @__PURE__ */ An(Mf), If = (e, t, n) => {
  const [r, a] = Z({ video1: "", video2: "" }), i = { video1: "/", video2: "/" }, c = {
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
        const { slides: m } = h[0], { modals: y } = m[d < 0 ? 0 : d], w = (y || []).filter((T) => T.id === v)[0];
        a(w || i);
      } else
        a(i);
    } else
      a(i);
  }, f = () => {
    const l = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (l) {
      const d = [...l].findIndex((x) => !x.hasAttribute("hidden"));
      s(n, d < 0 ? 0 : d);
      const v = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (v.length > 0) {
        const x = [...v].findIndex((w) => !w.hasAttribute("hidden"));
        s(n, x < 0 ? 0 : x);
      }
      const h = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      h && u(n, d, h.id);
      const m = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      m && u(n, d, m.id);
      const y = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      y && u(n, d, y.id);
    }
  };
  return H(() => {
    if (e) {
      const l = new MutationObserver(f);
      return l.observe(document.querySelector(e || "body"), c), () => l.disconnect();
    }
  }, [f, c]), r;
}, $f = "_interpreter_gxnug_1", kf = "_close_gxnug_122", Lf = "_hide_gxnug_128", Ff = "_progress_gxnug_219", Bf = "_flex_gxnug_229", jf = "_gap_gxnug_286", me = {
  interpreter: $f,
  "interpreter-active": "_interpreter-active_gxnug_23",
  "interpreter-btn": "_interpreter-btn_gxnug_29",
  "interpreter-btn--close": "_interpreter-btn--close_gxnug_44",
  "interpreter-btn--video": "_interpreter-btn--video_gxnug_48",
  "interpreter-btn-disable": "_interpreter-btn-disable_gxnug_61",
  "interpreter-btn-switch": "_interpreter-btn-switch_gxnug_67",
  "interpreter-btn-switch-svg": "_interpreter-btn-switch-svg_gxnug_72",
  "interpreter-dropdown": "_interpreter-dropdown_gxnug_79",
  "interpreter-dropdown-content": "_interpreter-dropdown-content_gxnug_87",
  "interpreter-btndrop": "_interpreter-btndrop_gxnug_121",
  close: kf,
  hide: Lf,
  "image-Video": "_image-Video_gxnug_132",
  "c-vid-container": "_c-vid-container_gxnug_136",
  "c-vid": "_c-vid_gxnug_136",
  "c-vid-controls": "_c-vid-controls_gxnug_169",
  "c-vid-controls-text": "_c-vid-controls-text_gxnug_209",
  progress: Ff,
  flex: Bf,
  "progress-bar": "_progress-bar_gxnug_235",
  "c-vid-controls-volume": "_c-vid-controls-volume_gxnug_242",
  "c-vid-controls-volume-item": "_c-vid-controls-volume-item_gxnug_263",
  "no-captions": "_no-captions_gxnug_274",
  gap: jf
}, is = ({ width: e, addClass: t, image: n, pathVideo: r, pathname: a }) => {
  const [i, c] = Z("00:00"), [s, u] = Z(!1), [f, l] = Z(!1), [d, v] = Z(!1), { video1: h, video2: m } = If("body", r, a), [y, x] = Z({
    state: !1,
    icon: Yr,
    label: "Reproducir video"
  }), [w, T] = Z({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  }), { deltaPosition: S } = w;
  function E() {
    const Y = s ? L.current : j.current;
    y.state ? (Y.pause(), x({
      state: !1,
      icon: Yr,
      label: "Reproducir video"
    })) : (Y.play(), x({
      state: !0,
      icon: zf,
      label: "Pausar video"
    }));
  }
  function b() {
    const Y = s ? L.current : j.current, G = te.current, le = Y.currentTime / Y.duration * 100;
    G.style.flexBasis = `${le}%`;
  }
  function P() {
    const Y = s ? L.current : j.current;
    G(Y);
    function G(N) {
      const F = le(N.currentTime);
      c(F);
    }
    function le(N) {
      const F = parseInt(N, 10), W = Math.floor(F / 3600), z = Math.floor((F - W * 3600) / 60), K = F - W * 3600 - z * 60, q = O(ee(W)), Q = O(ee(z)), J = O(ee(K));
      return `${q}:${Q}:${J}`;
    }
    function ee(N) {
      return N < 10 ? N = "0" + N : N;
    }
    function O(N) {
      return isNaN(N) ? "00" : N;
    }
  }
  function _(Y) {
    const G = V.current, le = s ? L.current : j.current, O = Y.nativeEvent.offsetX / G.offsetWidth * le.duration;
    le.currentTime = O;
  }
  const C = (Y, G) => {
    u(!1), l(!1), G(Y), $();
  }, $ = () => {
    const Y = te.current;
    Y.style.flexBasis = "0%", x({
      state: !1,
      icon: Yr,
      label: "Reproducir video"
    });
  }, B = (Y, G) => {
    const { x: le, y: ee } = w.deltaPosition;
    T({
      ...w,
      deltaPosition: {
        x: le + G.deltaX,
        y: ee + G.deltaY
      }
    });
  };
  H(() => {
    $();
  }, [h, m]);
  const A = U(null), L = U(), j = U(), V = U(), te = U();
  return /* @__PURE__ */ p(Af, { nodeRef: A, handle: "strong", position: S, onDrag: B, children: /* @__PURE__ */ D(
    "div",
    {
      ref: A,
      className: `${me.interpreter} ${t ?? ""} ${(s || f) && me["interpreter-active"]}`,
      children: [
        /* @__PURE__ */ D("div", { className: me["interpreter-dropdown"], children: [
          (!s && !f || !!h && !s && !f || !!m && (s || f) || !!m && (s || f) && !s) && /* @__PURE__ */ D(
            "button",
            {
              ...!d && !s && !f && { "data-interpreter-primary-button": !0 },
              onClick: () => {
                d || (C(!0, u), v(!0));
              },
              className: `${me["interpreter-btn"]} ${me["interpreter-btn-switch"]} ${!s && !f && me["interpreter-btn-disable"]}`,
              "aria-label": "Intérprete de lenguaje de señas",
              children: [
                !s && !f && (n ? /* @__PURE__ */ p("img", { className: me["image-Video"], src: n, alt: "" }) : /* @__PURE__ */ D(
                  "svg",
                  {
                    id: "Capa_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    x: 0,
                    y: 0,
                    viewBox: "0 0 157.39 157.39",
                    className: me["interpreter-btn-switch-svg"],
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
                /* @__PURE__ */ p(qf, {}),
                (s || f) && (s ? "1" : "2")
              ]
            }
          ),
          (s || f) && /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ D(
              "button",
              {
                className: `${me["interpreter-btn"]} ${me["interpreter-btn--video"]}`,
                onClick: () => {
                  f && C(!0, u);
                },
                children: [
                  "1",
                  /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Ea, {}) })
                ]
              }
            ),
            /* @__PURE__ */ D(
              "button",
              {
                className: `${me["interpreter-btn"]} ${me["interpreter-btn--video"]}`,
                onClick: () => {
                  s && C(!0, l);
                },
                children: [
                  "2",
                  /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Ea, {}) })
                ]
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                tabIndex: -1,
                className: `${me["interpreter-btn"]}`,
                onClick: () => !1,
                onMouseEnter: () => v(!0),
                onMouseLeave: () => v(!1),
                "aria-label": "Arrastrar video",
                children: /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Yf, {}) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${me["interpreter-btn"]} ${me["interpreter-btn--close"]}`,
                onClick: () => {
                  u(!1), l(!1), T({
                    deltaPosition: {
                      x: 0,
                      y: 0
                    }
                  }), v(!1);
                },
                onFocus: () => v(!0),
                onBlur: () => v(!0),
                "aria-label": "Cerrar",
                children: /* @__PURE__ */ p(Vf, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p("div", { className: me["c-vid-container"], display: s || f ? "true" : "false", children: /* @__PURE__ */ D("div", { className: me["c-vid"], style: { maxWidth: `${e}px` }, children: [
          s && /* @__PURE__ */ p(
            "video",
            {
              src: h,
              ref: L,
              onTimeUpdate: () => {
                b(), P();
              },
              className: `${me["no-captions"]}`
            }
          ),
          f && /* @__PURE__ */ p(
            "video",
            {
              src: m,
              ref: j,
              onTimeUpdate: () => {
                b(), P();
              },
              className: `${me["no-captions"]}`
            }
          ),
          /* @__PURE__ */ D("div", { className: me["c-vid-controls"], children: [
            /* @__PURE__ */ p("button", { "aria-label": y.label, onClick: E, children: y.icon }),
            /* @__PURE__ */ p("div", { className: me.flex, children: /* @__PURE__ */ D(
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
            /* @__PURE__ */ p("p", { className: me["c-vid-controls-text"], children: /* @__PURE__ */ p("span", { children: i }) }),
            /* @__PURE__ */ p("div", { className: me["progress-content"], children: /* @__PURE__ */ p("div", { ref: V, className: me.progress, onClick: _, children: /* @__PURE__ */ p("div", { ref: te, className: me["progress-bar"], onChange: b }) }) })
          ] })
        ] }) })
      ]
    }
  ) });
};
is.propTypes = {
  width: o.string,
  addClass: o.string,
  image: o.string,
  pathVideo: o.array,
  pathname: o.string
};
is.defaultProps = {
  width: "210"
};
const qf = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", viewBox: "0 96 960 960", width: "48", children: /* @__PURE__ */ p("path", { d: "M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" }) }), Vf = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "close",
    d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
  }
) }), Yf = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "open_with",
    d: "m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z"
  }
) }), Ea = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 96 960 960", "aria-hidden": "true", children: /* @__PURE__ */ p("path", { d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z" }) }), Yr = /* @__PURE__ */ D(
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
), zf = /* @__PURE__ */ D(
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
), Ro = lt(), ss = ({ children: e, isVisible: t }) => {
  const [n, r] = Z(!1), a = U(), i = () => r(!n), c = (s) => {
    a.current || (a.current = s);
  };
  return H(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p(Ro.Provider, { value: { isOpen: n, onOpen: i, setRefButton: c, refButton: a }, children: e });
};
ss.defaultProps = {
  isVisible: !1
};
ss.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const Wf = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r, refButton: a, isOpen: i } = Ee(Ro);
  if (De.count(e) > 1)
    return null;
  const c = (l) => {
    n(), t && t(l);
  }, s = (l) => {
    var d;
    return !!(l && !((d = l.dataset) != null && d.popper) && l !== a.current);
  }, u = (l) => {
    i && s(l.relatedTarget) && n();
  }, f = (l) => {
    if (!st(l))
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
  return De.map(e, f);
};
Wf.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onClick: o.func
};
const zr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, Wr = Object.freeze({
  ESC: 27,
  TAB: 9
}), Uf = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', ls = ({
  id: e,
  children: t,
  addClass: n,
  hasArrow: r,
  isDisabled: a,
  distance: i,
  placement: c,
  disabledInteractOutside: s,
  noA11y: u,
  defaultStyle: f
}) => {
  const { isOpen: l, onOpen: d, refButton: v } = Ee(Ro), h = U(), m = U(), y = (E, b) => E === b.current;
  Ia({ ref: m, onInteractionOutside: (E) => {
    !s && !y(E.target, v) && (d(), E.stopPropagation(), E.preventDefault());
  } });
  const w = (E) => {
    const b = h.current.querySelectorAll(Uf), P = v.current, _ = b[0], C = b[b.length - 1];
    if ((E.keyCode || E.which) === Wr.TAB && document.activeElement === C)
      return P.focus(), E.preventDefault();
    E.shiftKey && (E.keyCode || E.which) === Wr.TAB && document.activeElement === _ && (P.focus(), E.preventDefault()), (E.keyCode || E.which) === Wr.ESC && P.focus();
  }, { styles: T, attributes: S } = pr(
    v.current,
    h.current,
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
        { name: "eventListeners", enabled: l }
      ]
    }
  );
  return H(() => {
    const E = h.current;
    l ? (E.focus(), m.current = E) : m.current = null;
  }, [l, h]), a ? /* @__PURE__ */ p(ot, { children: t }) : /* @__PURE__ */ p(cn, { id: "js-popover-modal-portal", children: /* @__PURE__ */ D(
    "div",
    {
      id: e,
      ref: h,
      role: "status",
      tabIndex: -1,
      className: ne({
        [zr["c-popover-modal"]]: !f,
        [zr["c-popover-modal--active"]]: !f && l,
        "video-interpreter-ui-popover": !u,
        [n]: n
      }),
      style: T.popper,
      onKeyDown: w,
      "data-hidden": !l,
      "data-popper": !0,
      ...!l && { hidden: !0 },
      ...S.popper,
      children: [
        t,
        r && /* @__PURE__ */ p(
          "div",
          {
            className: ne({
              [zr["c-popover-modal__arrow"]]: !f
            }),
            "data-class": "c-popover-modal__arrow",
            "data-popper-arrow": !0,
            style: T.arrow
          }
        )
      ]
    }
  ) });
};
ls.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.arrayOf(o.node),
    o.element,
    o.node
  ]),
  id: o.string,
  addClass: o.string,
  noA11y: o.bool,
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
ls.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  disabledInteractOutside: !1,
  noA11y: !1
};
const Hf = (e, t) => {
  const [n, r] = Z(() => {
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
}, Zf = (e, t, n) => {
  const [r, a] = Z(n), i = e.map((s) => window.matchMedia(s)), c = () => {
    const s = i.findIndex((u) => u.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return H(() => {
    a(c);
    const s = (u) => a(c);
    return i.forEach((u) => u.addEventListener("change", s)), () => {
      i.forEach((u) => u.removeEventListener("change", s));
    };
  }, []), r;
}, Jf = () => {
  const [e, t] = Hf("dark-mode-enabled"), n = Zf(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return H(() => {
    t(n);
  }, [n]), H(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, cs = (e) => {
  let t = {};
  for (const n in e)
    if (typeof e[n] == "object") {
      const r = cs(e[n]);
      for (const a in r)
        t = {
          ...t,
          [n.includes("accents") || n.includes("palette") ? a : `${n}-${a}`]: r[a]
        };
    } else
      t[n] = e[n];
  return t;
}, ep = (e) => cs(e);
export {
  Es as Accordion,
  Na as AccordionButton,
  Ma as AccordionItem,
  Aa as AccordionPanel,
  $a as Audio,
  Yt as Button,
  vu as ButtonSection,
  Ba as CheckBox,
  wl as CheckBoxGroup,
  El as Col,
  Ol as Content,
  si as DragAndDrop,
  ii as DragAndDropContext,
  li as Draggable,
  ci as Droppable,
  Kf as Filter,
  ui as GeneralDraggable,
  ge as Icon,
  go as Image,
  di as Input,
  eu as InputGroup,
  pi as InputLeftAddon,
  hi as InputRightAddon,
  fi as InputStyle,
  is as Interpreter,
  nu as Kbd,
  vi as Link,
  ru as List,
  mi as ListItem,
  bi as Modal,
  lu as ModalCloseButton,
  yi as ModalContent,
  cr as ModalContext,
  _i as ModalOverlay,
  Pi as NavSection,
  Ei as NumberDecrementStepper,
  Si as NumberIncrementStepper,
  wi as NumberInput,
  ur as NumberInputContext,
  xi as NumberInputField,
  Ti as NumberInputStepper,
  ou as OrderedList,
  Oi as Pagination,
  mo as PaginationItem,
  fu as Panel,
  dr as PanelContext,
  mu as Paper,
  ss as PopoverModal,
  Wf as PopoverModalButton,
  ls as PopoverModalContent,
  Ro as PopoverModalContext,
  cn as Portal,
  Tu as Row,
  Ci as Section,
  Di as Select,
  Eu as SelectGroup,
  Ri as Switch,
  Ni as Tab,
  Mi as TabList,
  Ai as TabPanel,
  Ii as TabPanels,
  Su as Tabs,
  bo as TabsContext,
  $i as TextArea,
  Ou as ThemeProvider,
  Wi as Toggletip,
  Ui as Tooltip,
  Hi as Tour,
  Oo as TourContext,
  Zi as TourElement,
  Vd as TourHelpLayer,
  au as UnorderedList,
  Gi as Video,
  ep as createTheme,
  Jf as useDarkMode,
  Ia as useInteractOutside,
  Hf as useLocalStorage,
  Zf as useMedia,
  zd as useOnScreen,
  cu as usePagination,
  _u as usePortal,
  If as useVideo
};
