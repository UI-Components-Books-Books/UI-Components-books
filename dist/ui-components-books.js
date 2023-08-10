import * as Yt from "react";
import Le, { Children as Re, useState as ee, useEffect as J, isValidElement as ut, cloneElement as Pe, forwardRef as _t, useRef as Q, useId as Ct, useLayoutEffect as sr, useMemo as Te, useCallback as je, createContext as dt, memo as Aa, useReducer as so, useContext as Se, createElement as ws } from "react";
import * as xs from "react-dom";
import Ma, { unstable_batchedUpdates as fn, createPortal as Ia } from "react-dom";
var zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ts(e) {
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
var Gr = { exports: {} }, pn = {};
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
function Os() {
  if ($o)
    return pn;
  $o = 1;
  var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return pn.Fragment = n, pn.jsx = c, pn.jsxs = c, pn;
}
var vn = {};
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
function Es() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function x(g) {
      if (g === null || typeof g != "object")
        return null;
      var k = m && g[m] || g[b];
      return typeof k == "function" ? k : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(g) {
      {
        for (var k = arguments.length, Y = new Array(k > 1 ? k - 1 : 0), oe = 1; oe < k; oe++)
          Y[oe - 1] = arguments[oe];
        T("error", g, Y);
      }
    }
    function T(g, k, Y) {
      {
        var oe = w.ReactDebugCurrentFrame, fe = oe.getStackAddendum();
        fe !== "" && (k += "%s", Y = Y.concat([fe]));
        var he = Y.map(function(ce) {
          return String(ce);
        });
        he.unshift("Warning: " + k), Function.prototype.apply.call(console[g], console, he);
      }
    }
    var N = !1, _ = !1, j = !1, E = !1, M = !1, z;
    z = Symbol.for("react.module.reference");
    function G(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || M || g === a || g === f || g === l || E || g === h || N || _ || j || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === u || g.$$typeof === c || g.$$typeof === s || g.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === z || g.getModuleId !== void 0));
    }
    function q(g, k, Y) {
      var oe = g.displayName;
      if (oe)
        return oe;
      var fe = k.displayName || k.name || "";
      return fe !== "" ? Y + "(" + fe + ")" : Y;
    }
    function W(g) {
      return g.displayName || "Context";
    }
    function H(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
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
            var k = g;
            return W(k) + ".Consumer";
          case c:
            var Y = g;
            return W(Y._context) + ".Provider";
          case d:
            return q(g, g.render, "ForwardRef");
          case u:
            var oe = g.displayName || null;
            return oe !== null ? oe : H(g.type) || "Memo";
          case v: {
            var fe = g, he = fe._payload, ce = fe._init;
            try {
              return H(ce(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, ne = 0, X, K, le, ie, P, A, y;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function C() {
      {
        if (ne === 0) {
          X = console.log, K = console.info, le = console.warn, ie = console.error, P = console.group, A = console.groupCollapsed, y = console.groupEnd;
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
        ne++;
      }
    }
    function R() {
      {
        if (ne--, ne === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, g, {
              value: X
            }),
            info: U({}, g, {
              value: K
            }),
            warn: U({}, g, {
              value: le
            }),
            error: U({}, g, {
              value: ie
            }),
            group: U({}, g, {
              value: P
            }),
            groupCollapsed: U({}, g, {
              value: A
            }),
            groupEnd: U({}, g, {
              value: y
            })
          });
        }
        ne < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var S = w.ReactCurrentDispatcher, $;
    function B(g, k, Y) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (fe) {
            var oe = fe.stack.trim().match(/\n( *(at )?)/);
            $ = oe && oe[1] || "";
          }
        return `
` + $ + g;
      }
    }
    var Z = !1, V;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      V = new de();
    }
    function L(g, k) {
      if (!g || Z)
        return "";
      {
        var Y = V.get(g);
        if (Y !== void 0)
          return Y;
      }
      var oe;
      Z = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = S.current, S.current = null, C();
      try {
        if (k) {
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
            } catch (Ot) {
              oe = Ot;
            }
            Reflect.construct(g, [], ce);
          } else {
            try {
              ce.call();
            } catch (Ot) {
              oe = Ot;
            }
            g.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ot) {
            oe = Ot;
          }
          g();
        }
      } catch (Ot) {
        if (Ot && oe && typeof Ot.stack == "string") {
          for (var se = Ot.stack.split(`
`), qe = oe.stack.split(`
`), Ee = se.length - 1, Ce = qe.length - 1; Ee >= 1 && Ce >= 0 && se[Ee] !== qe[Ce]; )
            Ce--;
          for (; Ee >= 1 && Ce >= 0; Ee--, Ce--)
            if (se[Ee] !== qe[Ce]) {
              if (Ee !== 1 || Ce !== 1)
                do
                  if (Ee--, Ce--, Ce < 0 || se[Ee] !== qe[Ce]) {
                    var rt = `
` + se[Ee].replace(" at new ", " at ");
                    return g.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", g.displayName)), typeof g == "function" && V.set(g, rt), rt;
                  }
                while (Ee >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        Z = !1, S.current = he, R(), Error.prepareStackTrace = fe;
      }
      var Gt = g ? g.displayName || g.name : "", Io = Gt ? B(Gt) : "";
      return typeof g == "function" && V.set(g, Io), Io;
    }
    function F(g, k, Y) {
      return L(g, !1);
    }
    function te(g) {
      var k = g.prototype;
      return !!(k && k.isReactComponent);
    }
    function ae(g, k, Y) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return L(g, te(g));
      if (typeof g == "string")
        return B(g);
      switch (g) {
        case f:
          return B("Suspense");
        case l:
          return B("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case d:
            return F(g.render);
          case u:
            return ae(g.type, k, Y);
          case v: {
            var oe = g, fe = oe._payload, he = oe._init;
            try {
              return ae(he(fe), k, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Ae = {}, ft = w.ReactDebugCurrentFrame;
    function Fe(g) {
      if (g) {
        var k = g._owner, Y = ae(g.type, g._source, k ? k.type : null);
        ft.setExtraStackFrame(Y);
      } else
        ft.setExtraStackFrame(null);
    }
    function we(g, k, Y, oe, fe) {
      {
        var he = Function.call.bind(me);
        for (var ce in g)
          if (he(g, ce)) {
            var se = void 0;
            try {
              if (typeof g[ce] != "function") {
                var qe = Error((oe || "React class") + ": " + Y + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              se = g[ce](k, ce, oe, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (Fe(fe), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", Y, ce, typeof se), Fe(null)), se instanceof Error && !(se.message in Ae) && (Ae[se.message] = !0, Fe(fe), D("Failed %s type: %s", Y, se.message), Fe(null));
          }
      }
    }
    var Ve = Array.isArray;
    function Xe(g) {
      return Ve(g);
    }
    function $t(g) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, Y = k && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return Y;
      }
    }
    function Pt(g) {
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
      if (Pt(g))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(g)), kt(g);
    }
    var Be = w.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, un, tt;
    tt = {};
    function Fn(g) {
      if (me.call(g, "ref")) {
        var k = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function wr(g) {
      if (me.call(g, "key")) {
        var k = Object.getOwnPropertyDescriptor(g, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function xr(g, k) {
      if (typeof g.ref == "string" && Be.current && k && Be.current.stateNode !== k) {
        var Y = H(Be.current.type);
        tt[Y] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Be.current.type), g.ref), tt[Y] = !0);
      }
    }
    function Bn(g, k) {
      {
        var Y = function() {
          Rt || (Rt = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        Y.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function Tr(g, k) {
      {
        var Y = function() {
          un || (un = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        Y.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var qn = function(g, k, Y, oe, fe, he, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: k,
        ref: Y,
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
        value: fe
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Or(g, k, Y, oe, fe) {
      {
        var he, ce = {}, se = null, qe = null;
        Y !== void 0 && (Lt(Y), se = "" + Y), wr(k) && (Lt(k.key), se = "" + k.key), Fn(k) && (qe = k.ref, xr(k, fe));
        for (he in k)
          me.call(k, he) && !pt.hasOwnProperty(he) && (ce[he] = k[he]);
        if (g && g.defaultProps) {
          var Ee = g.defaultProps;
          for (he in Ee)
            ce[he] === void 0 && (ce[he] = Ee[he]);
        }
        if (se || qe) {
          var Ce = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          se && Bn(ce, Ce), qe && Tr(ce, Ce);
        }
        return qn(g, se, qe, fe, oe, Be.current, ce);
      }
    }
    var dn = w.ReactCurrentOwner, Vn = w.ReactDebugCurrentFrame;
    function _e(g) {
      if (g) {
        var k = g._owner, Y = ae(g.type, g._source, k ? k.type : null);
        Vn.setExtraStackFrame(Y);
      } else
        Vn.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function Ie(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function vt() {
      {
        if (dn.current) {
          var g = H(dn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Ye(g) {
      {
        if (g !== void 0) {
          var k = g.fileName.replace(/^.*[\\\/]/, ""), Y = g.lineNumber;
          return `

Check your code at ` + k + ":" + Y + ".";
        }
        return "";
      }
    }
    var ze = {};
    function nt(g) {
      {
        var k = vt();
        if (!k) {
          var Y = typeof g == "string" ? g : g.displayName || g.name;
          Y && (k = `

Check the top-level render call using <` + Y + ">.");
        }
        return k;
      }
    }
    function Tt(g, k) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var Y = nt(k);
        if (ze[Y])
          return;
        ze[Y] = !0;
        var oe = "";
        g && g._owner && g._owner !== dn.current && (oe = " It was passed a child from " + H(g._owner.type) + "."), _e(g), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, oe), _e(null);
      }
    }
    function We(g, k) {
      {
        if (typeof g != "object")
          return;
        if (Xe(g))
          for (var Y = 0; Y < g.length; Y++) {
            var oe = g[Y];
            Ie(oe) && Tt(oe, k);
          }
        else if (Ie(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var fe = x(g);
          if (typeof fe == "function" && fe !== g.entries)
            for (var he = fe.call(g), ce; !(ce = he.next()).done; )
              Ie(ce.value) && Tt(ce.value, k);
        }
      }
    }
    function jt(g) {
      {
        var k = g.type;
        if (k == null || typeof k == "string")
          return;
        var Y;
        if (typeof k == "function")
          Y = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === u))
          Y = k.propTypes;
        else
          return;
        if (Y) {
          var oe = H(k);
          we(Y, g.props, "prop", oe, g);
        } else if (k.PropTypes !== void 0 && !Me) {
          Me = !0;
          var fe = H(k);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(g) {
      {
        for (var k = Object.keys(g.props), Y = 0; Y < k.length; Y++) {
          var oe = k[Y];
          if (oe !== "children" && oe !== "key") {
            _e(g), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), _e(null);
            break;
          }
        }
        g.ref !== null && (_e(g), D("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function Bt(g, k, Y, oe, fe, he) {
      {
        var ce = G(g);
        if (!ce) {
          var se = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Ye(fe);
          qe ? se += qe : se += vt();
          var Ee;
          g === null ? Ee = "null" : Xe(g) ? Ee = "array" : g !== void 0 && g.$$typeof === t ? (Ee = "<" + (H(g.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, se);
        }
        var Ce = Or(g, k, Y, fe, he);
        if (Ce == null)
          return Ce;
        if (ce) {
          var rt = k.children;
          if (rt !== void 0)
            if (oe)
              if (Xe(rt)) {
                for (var Gt = 0; Gt < rt.length; Gt++)
                  We(rt[Gt], g);
                Object.freeze && Object.freeze(rt);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(rt, g);
        }
        return g === r ? Ft(Ce) : jt(Ce), Ce;
      }
    }
    function Zt(g, k, Y) {
      return Bt(g, k, Y, !0);
    }
    function Yn(g, k, Y) {
      return Bt(g, k, Y, !1);
    }
    var qt = Yn, Vt = Zt;
    vn.Fragment = r, vn.jsx = qt, vn.jsxs = Vt;
  }()), vn;
}
process.env.NODE_ENV === "production" ? Gr.exports = Os() : Gr.exports = Es();
var lo = Gr.exports;
const it = lo.Fragment, p = lo.jsx, I = lo.jsxs;
var Xr = { exports: {} }, Wn = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function Ss() {
  if (Lo)
    return pe;
  Lo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function T(_) {
    if (typeof _ == "object" && _ !== null) {
      var j = _.$$typeof;
      switch (j) {
        case t:
          switch (_ = _.type, _) {
            case d:
            case f:
            case r:
            case i:
            case a:
            case u:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case l:
                case m:
                case h:
                case c:
                  return _;
                default:
                  return j;
              }
          }
        case n:
          return j;
      }
    }
  }
  function N(_) {
    return T(_) === f;
  }
  return pe.AsyncMode = d, pe.ConcurrentMode = f, pe.ContextConsumer = s, pe.ContextProvider = c, pe.Element = t, pe.ForwardRef = l, pe.Fragment = r, pe.Lazy = m, pe.Memo = h, pe.Portal = n, pe.Profiler = i, pe.StrictMode = a, pe.Suspense = u, pe.isAsyncMode = function(_) {
    return N(_) || T(_) === d;
  }, pe.isConcurrentMode = N, pe.isContextConsumer = function(_) {
    return T(_) === s;
  }, pe.isContextProvider = function(_) {
    return T(_) === c;
  }, pe.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, pe.isForwardRef = function(_) {
    return T(_) === l;
  }, pe.isFragment = function(_) {
    return T(_) === r;
  }, pe.isLazy = function(_) {
    return T(_) === m;
  }, pe.isMemo = function(_) {
    return T(_) === h;
  }, pe.isPortal = function(_) {
    return T(_) === n;
  }, pe.isProfiler = function(_) {
    return T(_) === i;
  }, pe.isStrictMode = function(_) {
    return T(_) === a;
  }, pe.isSuspense = function(_) {
    return T(_) === u;
  }, pe.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === f || _ === i || _ === a || _ === u || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === h || _.$$typeof === c || _.$$typeof === s || _.$$typeof === l || _.$$typeof === x || _.$$typeof === w || _.$$typeof === D || _.$$typeof === b);
  }, pe.typeOf = T, pe;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function Cs() {
  return jo || (jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function T(L) {
      return typeof L == "string" || typeof L == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      L === r || L === f || L === i || L === a || L === u || L === v || typeof L == "object" && L !== null && (L.$$typeof === m || L.$$typeof === h || L.$$typeof === c || L.$$typeof === s || L.$$typeof === l || L.$$typeof === x || L.$$typeof === w || L.$$typeof === D || L.$$typeof === b);
    }
    function N(L) {
      if (typeof L == "object" && L !== null) {
        var F = L.$$typeof;
        switch (F) {
          case t:
            var te = L.type;
            switch (te) {
              case d:
              case f:
              case r:
              case i:
              case a:
              case u:
                return te;
              default:
                var ae = te && te.$$typeof;
                switch (ae) {
                  case s:
                  case l:
                  case m:
                  case h:
                  case c:
                    return ae;
                  default:
                    return F;
                }
            }
          case n:
            return F;
        }
      }
    }
    var _ = d, j = f, E = s, M = c, z = t, G = l, q = r, W = m, H = h, U = n, ne = i, X = a, K = u, le = !1;
    function ie(L) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(L) || N(L) === d;
    }
    function P(L) {
      return N(L) === f;
    }
    function A(L) {
      return N(L) === s;
    }
    function y(L) {
      return N(L) === c;
    }
    function O(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function C(L) {
      return N(L) === l;
    }
    function R(L) {
      return N(L) === r;
    }
    function S(L) {
      return N(L) === m;
    }
    function $(L) {
      return N(L) === h;
    }
    function B(L) {
      return N(L) === n;
    }
    function Z(L) {
      return N(L) === i;
    }
    function V(L) {
      return N(L) === a;
    }
    function de(L) {
      return N(L) === u;
    }
    ve.AsyncMode = _, ve.ConcurrentMode = j, ve.ContextConsumer = E, ve.ContextProvider = M, ve.Element = z, ve.ForwardRef = G, ve.Fragment = q, ve.Lazy = W, ve.Memo = H, ve.Portal = U, ve.Profiler = ne, ve.StrictMode = X, ve.Suspense = K, ve.isAsyncMode = ie, ve.isConcurrentMode = P, ve.isContextConsumer = A, ve.isContextProvider = y, ve.isElement = O, ve.isForwardRef = C, ve.isFragment = R, ve.isLazy = S, ve.isMemo = $, ve.isPortal = B, ve.isProfiler = Z, ve.isStrictMode = V, ve.isSuspense = de, ve.isValidElementType = T, ve.typeOf = N;
  }()), ve;
}
var Fo;
function $a() {
  return Fo || (Fo = 1, process.env.NODE_ENV === "production" ? Wn.exports = Ss() : Wn.exports = Cs()), Wn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Er, Bo;
function Ps() {
  if (Bo)
    return Er;
  Bo = 1;
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
  return Er = a() ? Object.assign : function(i, c) {
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
  }, Er;
}
var Sr, qo;
function co() {
  if (qo)
    return Sr;
  qo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Sr = e, Sr;
}
var Cr, Vo;
function ka() {
  return Vo || (Vo = 1, Cr = Function.call.bind(Object.prototype.hasOwnProperty)), Cr;
}
var Pr, Yo;
function Rs() {
  if (Yo)
    return Pr;
  Yo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = co(), n = {}, r = ka();
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
          } catch (m) {
            u = m;
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
  }, Pr = a, Pr;
}
var Rr, zo;
function Ds() {
  if (zo)
    return Rr;
  zo = 1;
  var e = $a(), t = Ps(), n = co(), r = ka(), a = Rs(), i = function() {
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
    function u(P) {
      var A = P && (f && P[f] || P[l]);
      if (typeof A == "function")
        return A;
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
      any: D(),
      arrayOf: T,
      element: N(),
      elementType: _(),
      instanceOf: j,
      node: G(),
      objectOf: M,
      oneOf: E,
      oneOfType: z,
      shape: W,
      exact: H
    };
    function m(P, A) {
      return P === A ? P !== 0 || 1 / P === 1 / A : P !== P && A !== A;
    }
    function b(P, A) {
      this.message = P, this.data = A && typeof A == "object" ? A : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function x(P) {
      if (process.env.NODE_ENV !== "production")
        var A = {}, y = 0;
      function O(R, S, $, B, Z, V, de) {
        if (B = B || v, V = V || $, de !== n) {
          if (d) {
            var L = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw L.name = "Invariant Violation", L;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var F = B + ":" + $;
            !A[F] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), A[F] = !0, y++);
          }
        }
        return S[$] == null ? R ? S[$] === null ? new b("The " + Z + " `" + V + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new b("The " + Z + " `" + V + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : P(S, $, B, Z, V);
      }
      var C = O.bind(null, !1);
      return C.isRequired = O.bind(null, !0), C;
    }
    function w(P) {
      function A(y, O, C, R, S, $) {
        var B = y[O], Z = X(B);
        if (Z !== P) {
          var V = K(B);
          return new b(
            "Invalid " + R + " `" + S + "` of type " + ("`" + V + "` supplied to `" + C + "`, expected ") + ("`" + P + "`."),
            { expectedType: P }
          );
        }
        return null;
      }
      return x(A);
    }
    function D() {
      return x(c);
    }
    function T(P) {
      function A(y, O, C, R, S) {
        if (typeof P != "function")
          return new b("Property `" + S + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var $ = y[O];
        if (!Array.isArray($)) {
          var B = X($);
          return new b("Invalid " + R + " `" + S + "` of type " + ("`" + B + "` supplied to `" + C + "`, expected an array."));
        }
        for (var Z = 0; Z < $.length; Z++) {
          var V = P($, Z, C, R, S + "[" + Z + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return x(A);
    }
    function N() {
      function P(A, y, O, C, R) {
        var S = A[y];
        if (!s(S)) {
          var $ = X(S);
          return new b("Invalid " + C + " `" + R + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(P);
    }
    function _() {
      function P(A, y, O, C, R) {
        var S = A[y];
        if (!e.isValidElementType(S)) {
          var $ = X(S);
          return new b("Invalid " + C + " `" + R + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(P);
    }
    function j(P) {
      function A(y, O, C, R, S) {
        if (!(y[O] instanceof P)) {
          var $ = P.name || v, B = ie(y[O]);
          return new b("Invalid " + R + " `" + S + "` of type " + ("`" + B + "` supplied to `" + C + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return x(A);
    }
    function E(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function A(y, O, C, R, S) {
        for (var $ = y[O], B = 0; B < P.length; B++)
          if (m($, P[B]))
            return null;
        var Z = JSON.stringify(P, function(de, L) {
          var F = K(L);
          return F === "symbol" ? String(L) : L;
        });
        return new b("Invalid " + R + " `" + S + "` of value `" + String($) + "` " + ("supplied to `" + C + "`, expected one of " + Z + "."));
      }
      return x(A);
    }
    function M(P) {
      function A(y, O, C, R, S) {
        if (typeof P != "function")
          return new b("Property `" + S + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var $ = y[O], B = X($);
        if (B !== "object")
          return new b("Invalid " + R + " `" + S + "` of type " + ("`" + B + "` supplied to `" + C + "`, expected an object."));
        for (var Z in $)
          if (r($, Z)) {
            var V = P($, Z, C, R, S + "." + Z, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return x(A);
    }
    function z(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var A = 0; A < P.length; A++) {
        var y = P[A];
        if (typeof y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(y) + " at index " + A + "."
          ), c;
      }
      function O(C, R, S, $, B) {
        for (var Z = [], V = 0; V < P.length; V++) {
          var de = P[V], L = de(C, R, S, $, B, n);
          if (L == null)
            return null;
          L.data && r(L.data, "expectedType") && Z.push(L.data.expectedType);
        }
        var F = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new b("Invalid " + $ + " `" + B + "` supplied to " + ("`" + S + "`" + F + "."));
      }
      return x(O);
    }
    function G() {
      function P(A, y, O, C, R) {
        return U(A[y]) ? null : new b("Invalid " + C + " `" + R + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return x(P);
    }
    function q(P, A, y, O, C) {
      return new b(
        (P || "React class") + ": " + A + " type `" + y + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function W(P) {
      function A(y, O, C, R, S) {
        var $ = y[O], B = X($);
        if (B !== "object")
          return new b("Invalid " + R + " `" + S + "` of type `" + B + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var Z in P) {
          var V = P[Z];
          if (typeof V != "function")
            return q(C, R, S, Z, K(V));
          var de = V($, Z, C, R, S + "." + Z, n);
          if (de)
            return de;
        }
        return null;
      }
      return x(A);
    }
    function H(P) {
      function A(y, O, C, R, S) {
        var $ = y[O], B = X($);
        if (B !== "object")
          return new b("Invalid " + R + " `" + S + "` of type `" + B + "` " + ("supplied to `" + C + "`, expected `object`."));
        var Z = t({}, y[O], P);
        for (var V in Z) {
          var de = P[V];
          if (r(P, V) && typeof de != "function")
            return q(C, R, S, V, K(de));
          if (!de)
            return new b(
              "Invalid " + R + " `" + S + "` key `" + V + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(y[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var L = de($, V, C, R, S + "." + V, n);
          if (L)
            return L;
        }
        return null;
      }
      return x(A);
    }
    function U(P) {
      switch (typeof P) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !P;
        case "object":
          if (Array.isArray(P))
            return P.every(U);
          if (P === null || s(P))
            return !0;
          var A = u(P);
          if (A) {
            var y = A.call(P), O;
            if (A !== P.entries) {
              for (; !(O = y.next()).done; )
                if (!U(O.value))
                  return !1;
            } else
              for (; !(O = y.next()).done; ) {
                var C = O.value;
                if (C && !U(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(P, A) {
      return P === "symbol" ? !0 : A ? A["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && A instanceof Symbol : !1;
    }
    function X(P) {
      var A = typeof P;
      return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : ne(A, P) ? "symbol" : A;
    }
    function K(P) {
      if (typeof P > "u" || P === null)
        return "" + P;
      var A = X(P);
      if (A === "object") {
        if (P instanceof Date)
          return "date";
        if (P instanceof RegExp)
          return "regexp";
      }
      return A;
    }
    function le(P) {
      var A = K(P);
      switch (A) {
        case "array":
        case "object":
          return "an " + A;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + A;
        default:
          return A;
      }
    }
    function ie(P) {
      return !P.constructor || !P.constructor.name ? v : P.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Rr;
}
var Dr, Wo;
function Ns() {
  if (Wo)
    return Dr;
  Wo = 1;
  var e = co();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Dr = function() {
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
  }, Dr;
}
if (process.env.NODE_ENV !== "production") {
  var As = $a(), Ms = !0;
  Xr.exports = Ds()(As.isElement, Ms);
} else
  Xr.exports = Ns()();
var uo = Xr.exports;
const o = /* @__PURE__ */ Mn(uo), Is = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ze = (e, t) => Re.toArray(e).filter((n) => t.indexOf(Is(n)) !== -1), $s = ({ children: e, allowMultiple: t, defaultIndex: n, allowDifferentChildren: r }) => {
  const [a, i] = ee(), c = (d) => {
    t ? a.includes(d) ? i(a.filter((f) => f !== d)) : i([...a, d]) : i(d);
  };
  J(() => (i(t ? n || [] : n ?? null), () => {
    i(null);
  }), [t, n]);
  const s = Re.map(e, (d, f) => ut(d) ? Pe(d, { ...d.props, id: f, isOpen: a, onToggle: c }) : null);
  return /* @__PURE__ */ p("div", { children: r ? s : Ze(s, ["AccordionItem"]) });
};
$s.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  allowDifferentChildren: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
var La = { exports: {} };
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
})(La);
var ks = La.exports;
const re = /* @__PURE__ */ Mn(ks), ye = (e) => (t, n, r) => {
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
}, ja = ({
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
}) => /* @__PURE__ */ I(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: re({
      [`${Jn["c-accordion__button"]} u-flex`]: !s,
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
ja.propTypes = {
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
  __TYPE: ye("AccordionButton")
};
ja.defaultProps = {
  __TYPE: "AccordionButton"
};
const Fa = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a, defaultStyle: i, allowDifferentChildren: c }) => {
  const s = () => r(t), d = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, f = Re.map(e, (l) => ut(l) ? l.props.__TYPE === "AccordionButton" ? Pe(l, { ...l.props, id: t, onExpanded: s, isExpanded: d() }) : Pe(l, { ...l.props, id: t, isExpanded: d() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [Jn["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: c ? f : Ze(f, ["AccordionButton", "AccordionPanel"])
    }
  );
};
Fa.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  defaultStyle: o.bool,
  allowDifferentChildren: o.bool,
  __TYPE: ye("AccordionItem")
};
Fa.defaultProps = {
  __TYPE: "AccordionItem"
};
const Ba = ({
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
    className: re(Jn["c-accordion__panel"], {
      [r]: r
    }),
    ...c,
    children: /* @__PURE__ */ p(
      "div",
      {
        className: re({
          [Jn["c-accordion__panel-content"]]: !a
        }),
        children: e
      }
    )
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
  isExpanded: o.bool,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: ye("AccordionPanel")
};
Ba.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Un = {
  "c-icon": "_c-icon_13de5_1",
  "c-small": "_c-small_13de5_10",
  "c-normal": "_c-normal_13de5_14",
  "c-big": "_c-big_13de5_18"
}, Ls = /\w+\.svg/gi, xe = ({
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
  if (Re.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const f = t && t.match(Ls).toString().replace(/.svg/gi, ""), l = `${t}#${f}`;
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
      ...d,
      children: /* @__PURE__ */ p("use", { xlinkHref: l })
    }
  );
};
xe.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  path: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  addClass: o.string,
  viewBox: o.string,
  height: o.string,
  width: o.string,
  __TYPE: ye("Icon")
};
xe.defaultProps = {
  size: "normal",
  viewBox: "0 0 48 48",
  height: "48",
  width: "48",
  __TYPE: "Icon"
};
const hn = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, zt = _t((e, t) => {
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
  return /* @__PURE__ */ I(
    "button",
    {
      ref: t,
      className: re({
        [`${hn["c-button"]} ${hn[`c-${c}`]} ${hn[`c-${r}`]}`]: !v,
        [hn["c-round"]]: a && a.path && s,
        [hn["c-reverse"]]: a && a.position === "right",
        [u]: u
      }),
      disabled: d,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...h,
      children: [
        l,
        a && /* @__PURE__ */ p(xe, { path: a.path, size: a.size }),
        s ? null : n
      ]
    }
  );
});
zt.propTypes = {
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
zt.defaultProps = {
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const js = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), qa = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || js, [a, i] = ee(!1), [c, s] = ee(null);
  return J(() => {
    if (!c) {
      i(!1);
      return;
    }
    const d = new IntersectionObserver(
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
}, Va = ({
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
      Uo(s, e) && a.onInteractionOutside && (a.onInteractionOutsideStart && a.onInteractionOutsideStart(s), a.isPointerDown = !0);
    }, c = (s) => {
      a.isPointerDown && a.onInteractionOutside && Uo(s, e) && (a.onInteractionOutside(s), a.isPointerDown = !1);
    };
    return document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", c, !0), () => {
      document.removeEventListener("mousedown", i, !0), document.removeEventListener("mouseup", c, !0);
    };
  }, [e, a]);
};
function Uo(e, t) {
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
const Fs = "_scrubber_1mklh_134", mt = {
  "c-audio": "_c-audio_1mklh_1",
  "c-audio--small": "_c-audio--small_1mklh_15",
  "c-audio--hidden": "_c-audio--hidden_1mklh_29",
  "c-button": "_c-button_1mklh_33",
  "is-button-paused": "_is-button-paused_1mklh_58",
  "is-button-playing": "_is-button-playing_1mklh_66",
  "audio-bar": "_audio-bar_1mklh_74",
  "volume-control": "_volume-control_1mklh_121",
  scrubber: Fs,
  "volume-btn": "_volume-btn_1mklh_139"
}, Bs = Object.freeze({
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
  const [d, f] = ee(!1), [l, u] = ee(!1), [v, h] = ee(!1), m = Ct(), [b, x] = ee(0), [w, D] = ee(0), [T, N] = ee(0), _ = Q(), j = Q(null), E = Q(), M = Q(null), z = Q(null), G = (A, y) => A === y.current;
  Va({ ref: z, onInteractionOutside: (A) => {
    G(A.target, M) || (h(!1), A.stopPropagation(), A.preventDefault());
  } });
  const [W, H] = qa(), U = Object.freeze({
    play: /* @__PURE__ */ p("path", { id: "play", d: "M306-184v-598l471 299-471 299Z" }),
    pause: /* @__PURE__ */ p(
      "path",
      {
        id: "pause",
        d: "M550-186v-590h201v590H550Zm-340 0v-590h201v590H210Z"
      }
    ),
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
    a11y: /* @__PURE__ */ I(it, { children: [
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
  }), ne = (A) => {
    _.current && (_.current.paused ? _.current.play() : _.current.pause(), f(!d));
  }, X = window.matchMedia(
    "(any-hover: none) and (any-pointer: coarse)"
  ).matches, K = () => {
    D(Math.round(_.current.duration)), N(X ? 1 : _.current.volume);
  }, le = () => {
    x(Math.round(_.current.currentTime));
  }, ie = (A) => {
    u(A.target.muted), N(A.target.volume);
  }, P = (A) => {
    const y = parseFloat(A.target.value);
    x(y), _.current.currentTime = y;
  };
  return J(() => {
    (d || !_.current.paused) && !H && (f(!d), _.current.pause(), _.current.currentTime = 0);
  }, [H]), sr(() => {
    const A = E.current || j.current;
    A && W(A);
  }, [j, E]), a === Bs.BAR ? /* @__PURE__ */ I(it, { children: [
    /* @__PURE__ */ I(
      "div",
      {
        className: `${mt["audio-bar"]} ${i ?? ""}`,
        role: "group",
        "aria-labelledby": `description${m}`,
        "data-a11y": n,
        "data-class": "c-audio-bar",
        ref: j,
        children: [
          /* @__PURE__ */ p("span", { id: `description${m}`, hidden: !0, children: n ? "Audio description" : "Barra de audio" }),
          n ? /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: U.a11y }) }) : null,
          /* @__PURE__ */ I("button", { onClick: ne, children: [
            /* @__PURE__ */ p("div", { className: "u-sr-only", children: d ? "Pausar" : "Reproducir" }),
            /* @__PURE__ */ p(xe, { size: "big", children: /* @__PURE__ */ p(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                viewBox: "0 -960 960 960",
                children: d ? U.pause : U.play
              }
            ) })
          ] }),
          /* @__PURE__ */ I("small", { "aria-hidden": "true", children: [
            String(Math.floor(b / 60)).padStart(2, "0"),
            ":",
            String(b - 60 * Math.floor(b / 60)).padStart(2, "0"),
            " ",
            "/ ",
            String(Math.floor(w / 60)).padStart(2, "0"),
            ":",
            String(w - 60 * Math.floor(w / 60)).padStart(2, "0")
          ] }),
          /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `time${m}`, children: "Tiempo transcurrido" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: mt.scrubber,
              id: `time${m}`,
              value: b,
              min: 0,
              max: w,
              "aria-valuetext": `${b} seconds`,
              onChange: P,
              type: "range"
            }
          ),
          /* @__PURE__ */ I(
            "button",
            {
              ref: M,
              "aria-expanded": v,
              className: mt["volume-btn"],
              onClick: () => h(!v),
              children: [
                /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
                /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "48",
                    height: "48",
                    viewBox: "0 -960 960 960",
                    children: T === 0 ? U.volume_off : T <= 0.25 ? U.volume_down : U.volume_on
                  }
                ) })
              ]
            }
          ),
          v ? /* @__PURE__ */ I("div", { className: mt["volume-control"], ref: z, children: [
            /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `volume${m}`, children: "Volumen" }),
            /* @__PURE__ */ p(
              "input",
              {
                id: `volume${m}`,
                value: T,
                min: 0,
                max: 1,
                step: 0.05,
                type: "range",
                "aria-valuetext": T * 100,
                "aria-orientation": "vertical",
                orient: "vertical",
                onChange: (A) => {
                  N(A.target.value), _.current.volume = A.target.value;
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
        ref: _,
        preload: "metadata",
        controls: !0,
        className: re({
          [mt["c-audio"]]: !c,
          [mt[`c-audio--${r}`]]: r,
          [i]: i
        }),
        onLoadedMetadata: K,
        onTimeUpdate: le,
        onPlay: () => f(!0),
        onPause: () => f(!1),
        onVolumeChange: (A) => ie(A),
        "data-a11y": n,
        hidden: !0,
        children: /* @__PURE__ */ p("source", { src: e, type: t })
      }
    )
  ] }) : /* @__PURE__ */ I(it, { children: [
    /* @__PURE__ */ p(
      "audio",
      {
        ref: _,
        src: e,
        type: t,
        onEnded: () => f(!d),
        className: mt["c-audio--hidden"]
      }
    ),
    /* @__PURE__ */ p(
      zt,
      {
        ref: E,
        label: d ? "Pausar" : "Reproduccir",
        "data-a11y": n,
        addClass: re({
          [mt["c-button"]]: !c,
          [mt["is-button-playing"]]: d,
          [mt["is-button-paused"]]: !d,
          [i]: i
        }),
        onClick: ne,
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
var qs = typeof zn == "object" && zn && zn.Object === Object && zn, Vs = qs, Ys = Vs, zs = typeof self == "object" && self && self.Object === Object && self, Ws = Ys || zs || Function("return this")(), Us = Ws, Hs = Us, Zs = Hs.Symbol, fo = Zs;
function Gs(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Xs = Gs, Ks = Array.isArray, Qs = Ks, Ho = fo, za = Object.prototype, Js = za.hasOwnProperty, el = za.toString, gn = Ho ? Ho.toStringTag : void 0;
function tl(e) {
  var t = Js.call(e, gn), n = e[gn];
  try {
    e[gn] = void 0;
    var r = !0;
  } catch {
  }
  var a = el.call(e);
  return r && (t ? e[gn] = n : delete e[gn]), a;
}
var nl = tl, rl = Object.prototype, ol = rl.toString;
function al(e) {
  return ol.call(e);
}
var il = al, Zo = fo, sl = nl, ll = il, cl = "[object Null]", ul = "[object Undefined]", Go = Zo ? Zo.toStringTag : void 0;
function dl(e) {
  return e == null ? e === void 0 ? ul : cl : Go && Go in Object(e) ? sl(e) : ll(e);
}
var fl = dl;
function pl(e) {
  return e != null && typeof e == "object";
}
var vl = pl, hl = fl, gl = vl, ml = "[object Symbol]";
function bl(e) {
  return typeof e == "symbol" || gl(e) && hl(e) == ml;
}
var yl = bl, Xo = fo, _l = Xs, wl = Qs, xl = yl, Tl = 1 / 0, Ko = Xo ? Xo.prototype : void 0, Qo = Ko ? Ko.toString : void 0;
function Wa(e) {
  if (typeof e == "string")
    return e;
  if (wl(e))
    return _l(e, Wa) + "";
  if (xl(e))
    return Qo ? Qo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Tl ? "-0" : t;
}
var Ol = Wa, El = Ol;
function Sl(e) {
  return e == null ? "" : El(e);
}
var Cl = Sl, Pl = Cl, Rl = 0;
function Dl(e) {
  var t = ++Rl;
  return Pl(e) + t;
}
var Nl = Dl;
const Ua = /* @__PURE__ */ Mn(Nl), Xt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, Al = (e) => {
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
}, Ha = _t(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: c, isDisabled: s, defaultChecked: d, onChange: f, __TYPE: l, inherit: u, ...v }, h) => {
    const m = Te(() => e || Ua(`ui-${n}`), [e, n]), b = Object.freeze(Al(n)), x = ({ target: w }) => {
      if (f) {
        if (w.checked) {
          f({ id: w.id, value: w.value });
          return;
        }
        f({ id: w.id, value: "" });
      }
    };
    return /* @__PURE__ */ I(
      "label",
      {
        htmlFor: m,
        className: `c-input-radio ${Xt["c-input"]} u-flex ${c ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": l,
        ...!u && { ...v },
        children: [
          /* @__PURE__ */ I("div", { className: Xt["c-input__box"], children: [
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
                ...u && { ...v },
                ...d && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${Xt["c-input__icon"]} ${d ? Xt["c-input-defaultChecked"] : ""} `, children: b[a] && /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", children: b[a] }) }) })
          ] }),
          /* @__PURE__ */ p("span", { className: Xt["c-input__label"], children: r })
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
  __TYPE: ye("CheckBox")
};
const Ml = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = ee([]), c = Q(), s = (u) => {
    c.current = u || "";
  }, d = (u) => c.current === "radio" ? [{ ...u }] : a.filter((h) => h.id === u.id).length ? [...a.filter((h) => h.id !== u.id)] : [...a, { ...u }], f = (u) => {
    const v = d(u);
    n && n(v), i(v);
  }, l = Re.map(t, (u) => ut(u) ? u.props.__TYPE === "CheckBox" ? (u.props.type && s(u.props.type), Pe(u, { ...u.props, onChange: f })) : u : null);
  return /* @__PURE__ */ I("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Ze(l, ["CheckBox"]) })
  ] });
};
Ml.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const Il = "_col_wu095_1", $l = {
  col: Il
}, kl = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${$l.col} ${e ?? ""}`, ...t }));
kl.propTypes = {
  addClass: o.string
};
const Ll = {
  "c-content": "_c-content_u325r_1"
}, jl = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "section",
  {
    className: re({
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
const lr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function sn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function po(e) {
  return "nodeType" in e;
}
function Ge(e) {
  var t, n;
  return e ? sn(e) ? e : po(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function vo(e) {
  const {
    Document: t
  } = Ge(e);
  return e instanceof t;
}
function In(e) {
  return sn(e) ? !1 : e instanceof Ge(e).HTMLElement;
}
function Fl(e) {
  return e instanceof Ge(e).SVGElement;
}
function ln(e) {
  return e ? sn(e) ? e.document : po(e) ? vo(e) ? e : In(e) ? e.ownerDocument : document : document : document;
}
const Et = lr ? sr : J;
function ho(e) {
  const t = Q(e);
  return Et(() => {
    t.current = e;
  }), je(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Bl() {
  const e = Q(null), t = je((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = je(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Cn(e, t) {
  t === void 0 && (t = [e]);
  const n = Q(e);
  return Et(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function $n(e, t) {
  const n = Q();
  return Te(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function er(e) {
  const t = ho(e), n = Q(null), r = je(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Kr(e) {
  const t = Q();
  return J(() => {
    t.current = e;
  }, [e]), t.current;
}
let Nr = {};
function cr(e, t) {
  return Te(() => {
    if (t)
      return t;
    const n = Nr[e] == null ? 0 : Nr[e] + 1;
    return Nr[e] = n, e + "-" + n;
  }, [e, t]);
}
function Za(e) {
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
const Jt = /* @__PURE__ */ Za(1), tr = /* @__PURE__ */ Za(-1);
function ql(e) {
  return "clientX" in e && "clientY" in e;
}
function Ga(e) {
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
function Qr(e) {
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
const Jr = /* @__PURE__ */ Object.freeze({
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
        return [Jr.Translate.toString(e), Jr.Scale.toString(e)].join(" ");
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
  return Le.createElement("div", {
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
  return Le.createElement("div", {
    id: t,
    style: Ul,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, n);
}
function Zl() {
  const [e, t] = ee("");
  return {
    announce: je((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Xa = /* @__PURE__ */ dt(null);
function Gl(e) {
  const t = Se(Xa);
  J(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Xl() {
  const [e] = ee(() => /* @__PURE__ */ new Set()), t = je((r) => (e.add(r), () => e.delete(r)), [e]);
  return [je((r) => {
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
  } = Zl(), s = cr("DndLiveRegion"), [d, f] = ee(!1);
  if (J(() => {
    f(!0);
  }, []), Gl(Te(() => ({
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
  const l = Le.createElement(Le.Fragment, null, Le.createElement(Wl, {
    id: r,
    value: a.draggable
  }), Le.createElement(Hl, {
    id: s,
    announcement: c
  }));
  return n ? Ia(l, n) : l;
}
var De;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(De || (De = {}));
function nr() {
}
function Ar(e, t) {
  return Te(
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
  return Te(
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
    } = c, d = n.get(s);
    if (d) {
      const f = ea(d), l = a.reduce((v, h, m) => v + tc(f[m], h), 0), u = Number((l / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: c,
          value: u
        }
      });
    }
  }
  return i.sort(nc);
};
function ac(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), c = a - r, s = i - n;
  if (r < a && n < i) {
    const d = t.width * t.height, f = e.width * e.height, l = c * s, u = l / (d + f - l);
    return Number(u.toFixed(4));
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
      const d = ac(s, t);
      d > 0 && a.push({
        id: c,
        data: {
          droppableContainer: i,
          value: d
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
const fc = {
  ignoreTransform: !1
};
function kn(e, t) {
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
function ta(e) {
  return kn(e, {
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
function go(e, t) {
  const n = [];
  function r(a) {
    if (t != null && n.length >= t || !a)
      return n;
    if (vo(a) && a.scrollingElement != null && !n.includes(a.scrollingElement))
      return n.push(a.scrollingElement), n;
    if (!In(a) || Fl(a) || n.includes(a))
      return n;
    const i = Ge(e).getComputedStyle(a);
    return a !== e && hc(a, i) && n.push(a), vc(a, i) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function Ja(e) {
  const [t] = go(e, 1);
  return t ?? null;
}
function Mr(e) {
  return !lr || !e ? null : sn(e) ? e : po(e) ? vo(e) || e === ln(e).scrollingElement ? window : In(e) ? e : null : null;
}
function ei(e) {
  return sn(e) ? e.scrollX : e.scrollLeft;
}
function ti(e) {
  return sn(e) ? e.scrollY : e.scrollTop;
}
function eo(e) {
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
  return !lr || !e ? !1 : e === document.scrollingElement;
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
    bottom: d
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = gc);
  const {
    isTop: f,
    isBottom: l,
    isLeft: u,
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
  return !f && i <= t.top + b.height ? (h.y = Ne.Backward, m.y = r * Math.abs((t.top + b.height - i) / b.height)) : !l && d >= t.bottom - b.height && (h.y = Ne.Forward, m.y = r * Math.abs((t.bottom - b.height - d) / b.height)), !v && s >= t.right - b.width ? (h.x = Ne.Forward, m.x = r * Math.abs((t.right - b.width - s) / b.width)) : !u && c <= t.left + b.width && (h.x = Ne.Backward, m.x = r * Math.abs((t.left + b.width - c) / b.width)), {
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
  return e.reduce((t, n) => Jt(t, eo(n)), gt);
}
function yc(e) {
  return e.reduce((t, n) => t + ei(n), 0);
}
function _c(e) {
  return e.reduce((t, n) => t + ti(n), 0);
}
function wc(e, t) {
  if (t === void 0 && (t = kn), !e)
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
class mo {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = go(n), a = oi(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, c, s] of xc)
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
function Tc(e) {
  const {
    EventTarget: t
  } = Ge(e);
  return e instanceof t ? e : ln(e);
}
function Ir(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var at;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(at || (at = {}));
function na(e) {
  e.preventDefault();
}
function Oc(e) {
  e.stopPropagation();
}
var ue;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(ue || (ue = {}));
const ai = {
  start: [ue.Space, ue.Enter],
  cancel: [ue.Esc],
  end: [ue.Space, ue.Enter]
}, Ec = (e, t) => {
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
    this.props = t, this.listeners = new wn(ln(n)), this.windowListeners = new wn(Ge(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(at.Resize, this.handleCancel), this.windowListeners.add(at.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(at.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && wc(r), n(gt);
  }
  handleKeyDown(t) {
    if (Ga(t)) {
      const {
        active: n,
        context: r,
        options: a
      } = this.props, {
        keyboardCodes: i = ai,
        coordinateGetter: c = Ec,
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
        const v = tr(u, l), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: m
        } = r.current;
        for (const b of m) {
          const x = t.code, {
            isTop: w,
            isRight: D,
            isLeft: T,
            isBottom: N,
            maxScroll: _,
            minScroll: j
          } = ri(b), E = bc(b), M = {
            x: Math.min(x === ue.Right ? E.right - E.width / 2 : E.right, Math.max(x === ue.Right ? E.left : E.left + E.width / 2, u.x)),
            y: Math.min(x === ue.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(x === ue.Down ? E.top : E.top + E.height / 2, u.y))
          }, z = x === ue.Right && !D || x === ue.Left && !T, G = x === ue.Down && !N || x === ue.Up && !w;
          if (z && M.x !== u.x) {
            const q = b.scrollLeft + v.x, W = x === ue.Right && q <= _.x || x === ue.Left && q >= j.x;
            if (W && !v.y) {
              b.scrollTo({
                left: q,
                behavior: s
              });
              return;
            }
            W ? h.x = b.scrollLeft - q : h.x = x === ue.Right ? b.scrollLeft - _.x : b.scrollLeft - j.x, h.x && b.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (G && M.y !== u.y) {
            const q = b.scrollTop + v.y, W = x === ue.Down && q <= _.y || x === ue.Up && q >= j.y;
            if (W && !v.x) {
              b.scrollTo({
                top: q,
                behavior: s
              });
              return;
            }
            W ? h.y = b.scrollTop - q : h.y = x === ue.Down ? b.scrollTop - _.y : b.scrollTop - j.y, h.y && b.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Jt(tr(u, this.referenceCoordinates), h));
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
class yo {
  constructor(t, n, r) {
    var a;
    r === void 0 && (r = Tc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: c
    } = i;
    this.props = t, this.events = n, this.document = ln(c), this.documentListeners = new wn(this.document), this.listeners = new wn(r), this.windowListeners = new wn(Ge(c)), this.initialCoordinates = (a = Qr(i)) != null ? a : gt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(at.Resize, this.handleCancel), this.windowListeners.add(at.DragStart, na), this.windowListeners.add(at.VisibilityChange, this.handleCancel), this.windowListeners.add(at.ContextMenu, na), this.documentListeners.add(at.Keydown, this.handleKeydown), n) {
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
    t && (this.activated = !0, this.documentListeners.add(at.Click, Oc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(at.SelectionChange, this.removeTextSelection), n(t));
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
    const d = (n = Qr(t)) != null ? n : gt, f = tr(a, d);
    if (!r && s) {
      if (oa(s))
        return Ir(f, s.tolerance) ? this.handleCancel() : void 0;
      if (ra(s))
        return s.tolerance != null && Ir(f, s.tolerance) ? this.handleCancel() : Ir(f, s.distance) ? this.handleStart() : void 0;
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
const Sc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ii extends yo {
  constructor(t) {
    const {
      event: n
    } = t, r = ln(n.target);
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
var to;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(to || (to = {}));
class si extends yo {
  constructor(t) {
    super(t, Cc, ln(t.event.target));
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
    return n.button === to.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const $r = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class li extends yo {
  constructor(t) {
    super(t, $r);
  }
  static setup() {
    return window.addEventListener($r.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener($r.move.name, t);
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
var xn;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(xn || (xn = {}));
var rr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(rr || (rr = {}));
function Pc(e) {
  let {
    acceleration: t,
    activator: n = xn.Pointer,
    canScroll: r,
    draggingRect: a,
    enabled: i,
    interval: c = 5,
    order: s = rr.TreeOrder,
    pointerCoordinates: d,
    scrollableAncestors: f,
    scrollableAncestorRects: l,
    delta: u,
    threshold: v
  } = e;
  const h = Dc({
    delta: u,
    disabled: !i
  }), [m, b] = Bl(), x = Q({
    x: 0,
    y: 0
  }), w = Q({
    x: 0,
    y: 0
  }), D = Te(() => {
    switch (n) {
      case xn.Pointer:
        return d ? {
          top: d.y,
          bottom: d.y,
          left: d.x,
          right: d.x
        } : null;
      case xn.DraggableRect:
        return a;
    }
  }, [n, a, d]), T = Q(null), N = je(() => {
    const j = T.current;
    if (!j)
      return;
    const E = x.current.x * w.current.x, M = x.current.y * w.current.y;
    j.scrollBy(E, M);
  }, []), _ = Te(() => s === rr.TreeOrder ? [...f].reverse() : f, [s, f]);
  J(
    () => {
      if (!i || !f.length || !D) {
        b();
        return;
      }
      for (const j of _) {
        if ((r == null ? void 0 : r(j)) === !1)
          continue;
        const E = f.indexOf(j), M = l[E];
        if (!M)
          continue;
        const {
          direction: z,
          speed: G
        } = mc(j, M, D, t, v);
        for (const q of ["x", "y"])
          h[q][z[q]] || (G[q] = 0, z[q] = 0);
        if (G.x > 0 || G.y > 0) {
          b(), T.current = j, m(N, c), x.current = G, w.current = z;
          return;
        }
      }
      x.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      N,
      r,
      b,
      i,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(D),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      m,
      f,
      _,
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
  const r = Kr(t);
  return $n((a) => {
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
  return $n((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function Ac(e, t) {
  return Te(() => e.reduce((n, r) => {
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
var no;
(function(e) {
  e.Optimized = "optimized";
})(no || (no = {}));
const aa = /* @__PURE__ */ new Map();
function Mc(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, c] = ee(null), {
    frequency: s,
    measure: d,
    strategy: f
  } = a, l = Q(e), u = x(), v = Cn(u), h = je(function(w) {
    w === void 0 && (w = []), !v.current && c((D) => D === null ? w : D.concat(w.filter((T) => !D.includes(T))));
  }, [v]), m = Q(null), b = $n((w) => {
    if (u && !n)
      return aa;
    if (!w || w === aa || l.current !== e || i != null) {
      const D = /* @__PURE__ */ new Map();
      for (let T of e) {
        if (!T)
          continue;
        if (i && i.length > 0 && !i.includes(T.id) && T.rect.current) {
          D.set(T.id, T.rect.current);
          continue;
        }
        const N = T.node.current, _ = N ? new mo(d(N), N) : null;
        T.rect.current = _, _ && D.set(T.id, _);
      }
      return D;
    }
    return w;
  }, [e, i, n, u, d]);
  return J(() => {
    l.current = e;
  }, [e]), J(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), J(
    () => {
      i && i.length > 0 && c(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), J(
    () => {
      u || typeof s != "number" || m.current !== null || (m.current = setTimeout(() => {
        h(), m.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, u, h, ...r]
  ), {
    droppableRects: b,
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
function ci(e, t) {
  return $n((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Ic(e, t) {
  return ci(e, t);
}
function $c(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = ho(t), a = Te(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return J(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function ur(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = ho(t), a = Te(
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
  return new mo(kn(e), e);
}
function ia(e, t, n) {
  t === void 0 && (t = kc);
  const [r, a] = so(s, null), i = $c({
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
  return Et(() => {
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
function Lc(e) {
  const t = ci(e);
  return Qa(e, t);
}
const sa = [];
function jc(e) {
  const t = Q(e), n = $n((r) => e ? r && r !== sa && e && t.current && e.parentNode === t.current.parentNode ? r : go(e) : sa, [e]);
  return J(() => {
    t.current = e;
  }, [e]), n;
}
function Fc(e) {
  const [t, n] = ee(null), r = Q(e), a = je((i) => {
    const c = Mr(i.target);
    c && n((s) => s ? (s.set(c, eo(c)), new Map(s)) : null);
  }, []);
  return J(() => {
    const i = r.current;
    if (e !== i) {
      c(i);
      const s = e.map((d) => {
        const f = Mr(d);
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
        const f = Mr(d);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), Te(() => e.length ? t ? Array.from(t.values()).reduce((i, c) => Jt(i, c), gt) : oi(e) : gt, [e, t]);
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
  }, [e]), n.current ? tr(e, n.current) : gt;
}
function Bc(e) {
  J(
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
function qc(e, t) {
  return Te(() => e.reduce((n, r) => {
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
  return Te(() => e ? pc(e) : null, [e]);
}
const kr = [];
function Vc(e, t) {
  t === void 0 && (t = kn);
  const [n] = e, r = ui(n ? Ge(n) : null), [a, i] = so(s, kr), c = ur({
    callback: i
  });
  return e.length > 0 && a === kr && i(), Et(() => {
    e.length ? e.forEach((d) => c == null ? void 0 : c.observe(d)) : (c == null || c.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((d) => ni(d) ? r : new mo(t(d), d)) : kr;
  }
}
function Yc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return In(t) ? t : e;
}
function zc(e) {
  let {
    measure: t
  } = e;
  const [n, r] = ee(null), a = je((f) => {
    for (const {
      target: l
    } of f)
      if (In(l)) {
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
  }), c = je((f) => {
    const l = Yc(f);
    i == null || i.disconnect(), l && (i == null || i.observe(l)), r(l ? t(l) : null);
  }, [t, i]), [s, d] = er(c);
  return Te(() => ({
    nodeRef: s,
    rect: n,
    setRef: d
  }), [n, s, d]);
}
const Wc = [{
  sensor: ii,
  options: {}
}, {
  sensor: bo,
  options: {}
}], Uc = {
  current: {}
}, Gn = {
  draggable: {
    measure: ta
  },
  droppable: {
    measure: ta,
    strategy: Pn.WhileDragging,
    frequency: no.Optimized
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
    setRef: nr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Gn,
  measureDroppableContainers: nr,
  windowRect: null,
  measuringScheduled: !1
}, Zc = {
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
}, dr = /* @__PURE__ */ dt(Zc), Gc = /* @__PURE__ */ dt(Hc);
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
  } = Se(dr), i = Kr(r), c = Kr(n == null ? void 0 : n.id);
  return J(() => {
    if (!t && !r && i && c != null) {
      if (!Ga(i) || document.activeElement === i.target)
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
          const u = Yl(l);
          if (u) {
            u.focus();
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
  return Te(
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
    const l = n(f), u = Qa(l, r);
    if (c || (u.x = 0), s || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const v = Ja(f);
      v && v.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, c, s, r, n]);
}
const di = /* @__PURE__ */ dt({
  ...gt,
  scaleX: 1,
  scaleY: 1
});
var At;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(At || (At = {}));
const nu = /* @__PURE__ */ Aa(function(t) {
  var n, r, a, i;
  let {
    id: c,
    accessibility: s,
    autoScroll: d = !0,
    children: f,
    sensors: l = Wc,
    collisionDetection: u = ic,
    measuring: v,
    modifiers: h,
    ...m
  } = t;
  const b = so(Kc, void 0, Xc), [x, w] = b, [D, T] = Xl(), [N, _] = ee(At.Uninitialized), j = N === At.Initialized, {
    draggable: {
      active: E,
      nodes: M,
      translate: z
    },
    droppable: {
      containers: G
    }
  } = x, q = E ? M.get(E) : null, W = Q({
    initial: null,
    translated: null
  }), H = Te(() => {
    var _e;
    return E != null ? {
      id: E,
      // It's possible for the active node to unmount while dragging
      data: (_e = q == null ? void 0 : q.data) != null ? _e : Uc,
      rect: W
    } : null;
  }, [E, q]), U = Q(null), [ne, X] = ee(null), [K, le] = ee(null), ie = Cn(m, Object.values(m)), P = cr("DndDescribedBy", c), A = Te(() => G.getEnabled(), [G]), y = eu(v), {
    droppableRects: O,
    measureDroppableContainers: C,
    measuringScheduled: R
  } = Mc(A, {
    dragging: j,
    dependencies: [z.x, z.y],
    config: y.droppable
  }), S = Nc(M, E), $ = Te(() => K ? Qr(K) : null, [K]), B = Vn(), Z = Ic(S, y.draggable.measure);
  tu({
    activeNode: E ? M.get(E) : null,
    config: B.layoutShiftCompensation,
    initialRect: Z,
    measure: y.draggable.measure
  });
  const V = ia(S, y.draggable.measure, Z), de = ia(S ? S.parentElement : null), L = Q({
    activatorEvent: null,
    active: null,
    activeNode: S,
    collisionRect: null,
    collisions: null,
    droppableRects: O,
    draggableNodes: M,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: G,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), F = G.getNodeFor((n = L.current.over) == null ? void 0 : n.id), te = zc({
    measure: y.dragOverlay.measure
  }), ae = (r = te.nodeRef.current) != null ? r : S, me = j ? (a = te.rect) != null ? a : V : null, Ae = !!(te.nodeRef.current && te.rect), ft = Lc(Ae ? null : V), Fe = ui(ae ? Ge(ae) : null), we = jc(j ? F ?? S : null), Ve = Vc(we), Xe = Jc(h, {
    transform: {
      x: z.x - ft.x,
      y: z.y - ft.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: K,
    active: H,
    activeNodeRect: V,
    containerNodeRect: de,
    draggingNodeRect: me,
    over: L.current.over,
    overlayNodeRect: te.rect,
    scrollableAncestors: we,
    scrollableAncestorRects: Ve,
    windowRect: Fe
  }), $t = $ ? Jt($, z) : null, Pt = Fc(we), kt = la(Pt), Lt = la(Pt, [V]), Be = Jt(Xe, kt), pt = me ? cc(me, Xe) : null, Rt = H && pt ? u({
    active: H,
    collisionRect: pt,
    droppableRects: O,
    droppableContainers: A,
    pointerCoordinates: $t
  }) : null, un = Ka(Rt, "id"), [tt, Fn] = ee(null), wr = Ae ? Xe : Jt(Xe, Lt), xr = sc(wr, (i = tt == null ? void 0 : tt.rect) != null ? i : null, V), Bn = je(
    (_e, Me) => {
      let {
        sensor: Ie,
        options: vt
      } = Me;
      if (U.current == null)
        return;
      const Ye = M.get(U.current);
      if (!Ye)
        return;
      const ze = _e.nativeEvent, nt = new Ie({
        active: U.current,
        activeNode: Ye,
        event: ze,
        options: vt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: L,
        onStart(We) {
          const jt = U.current;
          if (jt == null)
            return;
          const Ft = M.get(jt);
          if (!Ft)
            return;
          const {
            onDragStart: Bt
          } = ie.current, Zt = {
            active: {
              id: jt,
              data: Ft.data,
              rect: W
            }
          };
          fn(() => {
            Bt == null || Bt(Zt), _(At.Initializing), w({
              type: De.DragStart,
              initialCoordinates: We,
              active: jt
            }), D({
              type: "onDragStart",
              event: Zt
            });
          });
        },
        onMove(We) {
          w({
            type: De.DragMove,
            coordinates: We
          });
        },
        onEnd: Tt(De.DragEnd),
        onCancel: Tt(De.DragCancel)
      });
      fn(() => {
        X(nt), le(_e.nativeEvent);
      });
      function Tt(We) {
        return async function() {
          const {
            active: Ft,
            collisions: Bt,
            over: Zt,
            scrollAdjustedTranslate: Yn
          } = L.current;
          let qt = null;
          if (Ft && Yn) {
            const {
              cancelDrop: Vt
            } = ie.current;
            qt = {
              activatorEvent: ze,
              active: Ft,
              collisions: Bt,
              delta: Yn,
              over: Zt
            }, We === De.DragEnd && typeof Vt == "function" && await Promise.resolve(Vt(qt)) && (We = De.DragCancel);
          }
          U.current = null, fn(() => {
            w({
              type: We
            }), _(At.Uninitialized), Fn(null), X(null), le(null);
            const Vt = We === De.DragEnd ? "onDragEnd" : "onDragCancel";
            if (qt) {
              const g = ie.current[Vt];
              g == null || g(qt), D({
                type: Vt,
                event: qt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [M]
  ), Tr = je((_e, Me) => (Ie, vt) => {
    const Ye = Ie.nativeEvent, ze = M.get(vt);
    if (
      // Another sensor is already instantiating
      U.current !== null || // No active draggable
      !ze || // Event has already been captured
      Ye.dndKit || Ye.defaultPrevented
    )
      return;
    const nt = {
      active: ze
    };
    _e(Ie, Me.options, nt) === !0 && (Ye.dndKit = {
      capturedBy: Me.sensor
    }, U.current = vt, Bn(Ie, Me));
  }, [M, Bn]), qn = Ac(l, Tr);
  Bc(l), Et(() => {
    V && N === At.Initializing && _(At.Initialized);
  }, [V, N]), J(
    () => {
      const {
        onDragMove: _e
      } = ie.current, {
        active: Me,
        activatorEvent: Ie,
        collisions: vt,
        over: Ye
      } = L.current;
      if (!Me || !Ie)
        return;
      const ze = {
        active: Me,
        activatorEvent: Ie,
        collisions: vt,
        delta: {
          x: Be.x,
          y: Be.y
        },
        over: Ye
      };
      fn(() => {
        _e == null || _e(ze), D({
          type: "onDragMove",
          event: ze
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Be.x, Be.y]
  ), J(
    () => {
      const {
        active: _e,
        activatorEvent: Me,
        collisions: Ie,
        droppableContainers: vt,
        scrollAdjustedTranslate: Ye
      } = L.current;
      if (!_e || U.current == null || !Me || !Ye)
        return;
      const {
        onDragOver: ze
      } = ie.current, nt = vt.get(un), Tt = nt && nt.rect.current ? {
        id: nt.id,
        rect: nt.rect.current,
        data: nt.data,
        disabled: nt.disabled
      } : null, We = {
        active: _e,
        activatorEvent: Me,
        collisions: Ie,
        delta: {
          x: Ye.x,
          y: Ye.y
        },
        over: Tt
      };
      fn(() => {
        Fn(Tt), ze == null || ze(We), D({
          type: "onDragOver",
          event: We
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [un]
  ), Et(() => {
    L.current = {
      activatorEvent: K,
      active: H,
      activeNode: S,
      collisionRect: pt,
      collisions: Rt,
      droppableRects: O,
      draggableNodes: M,
      draggingNode: ae,
      draggingNodeRect: me,
      droppableContainers: G,
      over: tt,
      scrollableAncestors: we,
      scrollAdjustedTranslate: Be
    }, W.current = {
      initial: me,
      translated: pt
    };
  }, [H, S, Rt, pt, M, ae, me, O, G, tt, we, Be]), Pc({
    ...B,
    delta: z,
    draggingRect: pt,
    pointerCoordinates: $t,
    scrollableAncestors: we,
    scrollableAncestorRects: Ve
  });
  const Or = Te(() => ({
    active: H,
    activeNode: S,
    activeNodeRect: V,
    activatorEvent: K,
    collisions: Rt,
    containerNodeRect: de,
    dragOverlay: te,
    draggableNodes: M,
    droppableContainers: G,
    droppableRects: O,
    over: tt,
    measureDroppableContainers: C,
    scrollableAncestors: we,
    scrollableAncestorRects: Ve,
    measuringConfiguration: y,
    measuringScheduled: R,
    windowRect: Fe
  }), [H, S, V, K, Rt, de, te, M, G, O, tt, C, we, Ve, y, R, Fe]), dn = Te(() => ({
    activatorEvent: K,
    activators: qn,
    active: H,
    activeNodeRect: V,
    ariaDescribedById: {
      draggable: P
    },
    dispatch: w,
    draggableNodes: M,
    over: tt,
    measureDroppableContainers: C
  }), [K, qn, H, V, w, P, M, tt, C]);
  return Le.createElement(Xa.Provider, {
    value: T
  }, Le.createElement(dr.Provider, {
    value: dn
  }, Le.createElement(Gc.Provider, {
    value: Or
  }, Le.createElement(di.Provider, {
    value: xr
  }, f)), Le.createElement(Qc, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), Le.createElement(Jl, {
    ...s,
    hiddenTextDescribedById: P
  }));
  function Vn() {
    const _e = (ne == null ? void 0 : ne.autoScrollEnabled) === !1, Me = typeof d == "object" ? d.enabled === !1 : d === !1, Ie = j && !_e && !Me;
    return typeof d == "object" ? {
      ...d,
      enabled: Ie
    } : {
      enabled: Ie
    };
  }
}), ru = /* @__PURE__ */ dt(null), ca = "button", ou = "Droppable";
function au(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = cr(ou), {
    activators: c,
    activatorEvent: s,
    active: d,
    activeNodeRect: f,
    ariaDescribedById: l,
    draggableNodes: u,
    over: v
  } = Se(dr), {
    role: h = ca,
    roleDescription: m = "draggable",
    tabIndex: b = 0
  } = a ?? {}, x = (d == null ? void 0 : d.id) === t, w = Se(x ? di : ru), [D, T] = er(), [N, _] = er(), j = qc(c, t), E = Cn(n);
  Et(
    () => (u.set(t, {
      id: t,
      key: i,
      node: D,
      activatorNode: N,
      data: E
    }), () => {
      const z = u.get(t);
      z && z.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const M = Te(() => ({
    role: h,
    tabIndex: b,
    "aria-disabled": r,
    "aria-pressed": x && h === ca ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": l.draggable
  }), [r, h, b, x, m, l.draggable]);
  return {
    active: d,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: M,
    isDragging: x,
    listeners: r ? void 0 : j,
    node: D,
    over: v,
    setNodeRef: T,
    setActivatorNodeRef: _,
    transform: w
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
  const i = cr(iu), {
    active: c,
    dispatch: s,
    over: d,
    measureDroppableContainers: f
  } = Se(dr), l = Q({
    disabled: n
  }), u = Q(!1), v = Q(null), h = Q(null), {
    disabled: m,
    updateMeasurementsFor: b,
    timeout: x
  } = {
    ...su,
    ...a
  }, w = Cn(b ?? r), D = je(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(w.current) ? w.current : [w.current]), h.current = null;
      }, x);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), T = ur({
    callback: D,
    disabled: m || !c
  }), N = je((M, z) => {
    T && (z && (T.unobserve(z), u.current = !1), M && T.observe(M));
  }, [T]), [_, j] = er(N), E = Cn(t);
  return J(() => {
    !T || !_.current || (T.disconnect(), u.current = !1, T.observe(_.current));
  }, [_, T]), Et(
    () => (s({
      type: De.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: _,
        rect: v,
        data: E
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
    isOver: (d == null ? void 0 : d.id) === r,
    node: _,
    over: d,
    setNodeRef: j
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
}, uu = [ue.Down, ue.Right, ue.Up, ue.Left], du = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
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
    const d = oc({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = Ka(d, "id");
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
}, pi = dt(), _n = (e, t) => Re.map(e, (n) => {
  var r;
  if (ut(n) && n.props) {
    if (((r = n == null ? void 0 : n.props) == null ? void 0 : r.__TYPE) === t)
      return n;
    if (n.props.children)
      return _n(n.props.children, t);
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
  announcements: d,
  defaultState: f,
  defaultValidate: l,
  onState: u,
  id: v
}) => {
  const [h, m] = ee([]), [b, x] = ee(null), [w, D] = ee(
    () => Object.keys(f).length > 0 ? f : N()
  ), T = Q(!1);
  function N() {
    return [
      ..._n(e, "droppable"),
      ..._n(e, "general-draggable")
    ].reduce(
      (q, W) => ({
        ...q,
        [W.props.id]: W.props.children ? [
          ..._n(W.props.children, "draggable").map(
            (H) => H.props.id
          )
        ] : []
      }),
      {}
    );
  }
  const _ = Object.freeze({
    restrictToVerticalAxis: cu,
    restrictToHorizontalAxis: lu
  }), j = ec(
    Ar(si),
    Ar(li),
    Ar(bo, {
      coordinateGetter: du
    })
  ), E = (q, W) => {
    const H = Object.keys(w).pop();
    let U = [...h];
    if (H === q.id && h.includes(W) && (U = h.filter((ne) => ne !== W)), H !== q.id && (U = [
      ...h.filter((ne) => ne !== W),
      q.data.current.validate.includes(W) ? W : ""
    ].filter((ne) => !!ne)), !t) {
      const ne = w[q.id][0];
      U = ne ? U.filter((X) => X !== ne) : U;
    }
    n && n({ validate: [...U], active: !0 }), m(U);
  }, M = (q) => q in w ? q : Object.keys(w).find((W) => w[W].includes(q)), z = ({ active: q, over: W }) => {
    if (!W)
      return;
    x(null);
    const H = Object.keys(w).pop(), U = M(W.id), ne = M(q.id);
    ne !== U && (E(W, q.id), D((X) => {
      T.current = !0;
      const K = X[ne].filter(
        (P) => P !== q.id
      ), le = [...X[U]];
      return t ? {
        ...X,
        [ne]: K,
        [U]: [...le, q.id]
      } : {
        ...{
          ...X,
          [ne]: K,
          [U]: U === H ? [...le, q.id] : [q.id]
        },
        ...U !== H && X[U].length > 0 && {
          [H]: [
            ...X[H].filter((P) => P !== q.id),
            ...X[U]
          ]
        }
      };
    }));
  }, G = (q) => Re.map(q, (W) => {
    if (!W.props)
      return W;
    if (W.props.__TYPE !== "draggable")
      return W.props.id in w && w[W.props.id].length > 0 ? Pe(W, { ...W.props }, [
        ...w[W.props.id].map(
          (H) => _n(e, "draggable").filter(
            (U) => U.props.id === H
          )
        ).flat()
      ]) : W.props.children ? Pe(W, {
        ...W.props,
        children: G(W.props.children)
      }) : W;
  });
  return J(() => {
    a && (D(() => N()), m([]), n && n({ validate: [], active: !1 }));
  }, [a]), J(() => {
    Object.keys(f).length !== 0 && D(f);
  }, [f]), J(() => {
    l.length !== 0 && m(l);
  }, [l]), J(() => {
    u && T.current && (T.current = !1, u({
      state: { key: v, newObjectState: { ...w }, validateId: h }
    }));
  }, [u, w]), /* @__PURE__ */ p(
    pi.Provider,
    {
      value: {
        listId: h,
        propValidate: i,
        validate: r,
        isDragging: b
      },
      children: /* @__PURE__ */ p(
        nu,
        {
          sensors: j,
          screenReaderInstructions: {
            draggable: s
          },
          accessibility: { announcements: d },
          onDragStart: ({ active: q }) => x(q.id),
          onDragEnd: z,
          onDragCancel: () => x(null),
          ...c && { modifiers: [_[c]] },
          children: G(e)
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
const pu = "_pop_1elvh_1", en = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: pu
}, hi = ({
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
  const u = s || "div", { listId: v, propValidate: h, validate: m, isDragging: b } = Se(pi), { attributes: x, listeners: w, setNodeRef: D, transform: T } = au({
    id: t,
    disabled: m,
    data: {
      label: a
    },
    attributes: i
  });
  return /* @__PURE__ */ p(
    u,
    {
      id: t,
      ref: D,
      "data-type": f,
      className: re({
        [en["c-draggable"]]: !d,
        [`${r} ${en["is-draggable--active-animation"]}`]: b === t && !d,
        [n]: n
      }),
      style: { transform: Jr.Translate.toString(T) },
      ...m && { [h]: !!v.includes(t) },
      ...!c && { ...x },
      ...w,
      ...l,
      children: e
    }
  );
};
hi.defaultProps = {
  __TYPE: "draggable",
  dragging: en["c-draggable--active"],
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
  __TYPE: ye("draggable")
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
  __TYPE: d,
  ...f
}) => {
  const l = c || "div", { isOver: u, setNodeRef: v } = fi({
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
      className: re({
        [en["c-droppable"]]: !s,
        [a]: u && !s,
        [r]: r
      }),
      ...f,
      children: e
    }
  );
};
gi.defaultProps = {
  __TYPE: "droppable",
  over: en["c-droppable--active"]
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
  __TYPE: ye("droppable")
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
  ...d
}) => {
  const f = i || "div", { isOver: l, setNodeRef: u } = fi({
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
      className: re({
        [en["c-droppable"]]: !c,
        [n]: l && !c,
        [t]: t
      }),
      ...d,
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
  __TYPE: ye("general-draggable")
};
mi.defaultProps = {
  __TYPE: "general-draggable",
  id: Ua("unique-id-general-"),
  label: "contendor inicial"
};
const yp = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ I("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ I("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ I("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ I("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ I("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ I("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
      ] })
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_invert_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "1.7" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_yellow_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
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
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_yellow_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_red_on_white_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_green_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_yellow_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ I(
    "filter",
    {
      id: "hc_extension_white_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ I("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ I("feComponentTransfer", { children: [
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
}, bi = ({ url: e, alt: t, title: n, width: r, addClass: a, noCaption: i, defaultStyle: c, lazySize: s, ...d }) => {
  const [f, l] = ee(!1), u = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, v = (m) => l(m), h = f ? u : `${e}`;
  return /* @__PURE__ */ I(
    "figure",
    {
      className: re({
        [ua["c-image"]]: !c,
        [a]: a
      }),
      ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } },
      children: [
        /* @__PURE__ */ p("img", { src: h, onError: v, alt: t, ...s && { ...s }, ...d }),
        !i && /* @__PURE__ */ p("figcaption", { className: ua["c-image__figcaption"], children: /* @__PURE__ */ I("p", { children: [
          /* @__PURE__ */ I("strong", { children: [
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
  defaultStyle: o.bool,
  lazySize: o.shape({
    width: o.string,
    height: o.string
  })
};
const Rn = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, yi = _t(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: c, isDisabled: s, isRequired: d, isReadOnly: f, defaultStyle: l, onValue: u }, v) => {
  const h = e || Ct(), m = ({ target: b }) => {
    u && u({ id: h, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ I(
    "label",
    {
      htmlFor: h,
      className: re({
        [Rn["c-label"]]: !l,
        [i]: i
      }),
      children: [
        /* @__PURE__ */ I("span", { className: `${!c && "u-sr-only"}`, children: [
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
            onChange: m,
            className: re({
              [Rn["c-input"]]: !l
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
  __TYPE: ye("Input")
};
const vu = ({ children: e, onAllValue: t }) => {
  const [n, r] = ee([]), a = (s) => r([...n.filter((d) => d.id !== s.id), { ...s }]);
  J(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, d, f) => Re.toArray(s).map((l) => l.props.__TYPE === d ? Pe(l, { ...l.props, ...f }) : l);
  return Re.map(e, (s) => {
    var d, f;
    return ut(s) ? ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "InputStyle" ? Pe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? Pe(s, { ...s.props, onValue: a }) : s : null;
  });
};
vu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const _i = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: re({
      [Rn["c-input__wrapper-style"]]: !n,
      [t]: t
    }),
    children: Ze(e, ["InputLeftAddon", "InputRightAddon", "Input"])
  }
);
_i.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: ye("InputStyle")
};
_i.defaultProps = {
  __TYPE: "InputStyle"
};
const wi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: re({
      [Rn["c-input__left-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
wi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: ye("InputLeftAddon")
};
wi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const xi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: re({
      [Rn["c-input__right-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
xi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: ye("InputRightAddon")
};
xi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const hu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, gu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: re({
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
const Ti = ({ children: e, link: t, addClass: n, isExternal: r, label: a, ...i }) => /* @__PURE__ */ p(
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
Ti.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Ti.propTypes = {
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
const Oi = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, mu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "ul",
  {
    className: re({
      [Oi["c-List"]]: !n,
      [t]: t
    }),
    ...r,
    children: Ze(e, ["ListItem"])
  }
);
mu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool
};
const Ei = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = Re.map(e, (i) => {
    var c;
    return ((c = i == null ? void 0 : i.props) == null ? void 0 : c.__TYPE) === "Icon" ? Pe(i, { ...i.props, addClass: Oi["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
Ei.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: ye("ListItem")
};
Ei.defaultProps = {
  __TYPE: "ListItem"
};
const bu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: Ze(e, ["ListItem"]) });
bu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const yu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: Ze(e, ["ListItem"]) });
yu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
var Lr = function() {
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
    return Lr(f, [{
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
        c(u, function(x) {
          return v._visitNode(x);
        });
        var h = document.activeElement;
        if (!document.body.contains(u)) {
          for (var m = u, b = void 0; m; ) {
            if (m.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              b = /** @type {!ShadowRoot} */
              m;
              break;
            }
            m = m.parentNode;
          }
          b && (h = b.activeElement);
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
              var b = this._inertManager.getInertRoot(m);
              this._managedNodes.forEach(function(x) {
                m.contains(x.node) && b._manageNode(x.node);
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
    return Lr(f, [{
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
    return Lr(f, [{
      key: "setInert",
      value: function(u, v) {
        if (v) {
          if (this._inertRoots.has(u))
            return;
          var h = new r(u, this);
          if (u.setAttribute("inert", ""), this._inertRoots.set(u, h), !this._document.body.contains(u))
            for (var m = u.parentNode; m; )
              m.nodeType === 11 && s(m), m = m.parentNode;
        } else {
          if (!this._inertRoots.has(u))
            return;
          var b = this._inertRoots.get(u);
          b.destructor(), this._inertRoots.delete(u), u.removeAttribute("inert");
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
        u.forEach(function(m) {
          switch (m.type) {
            case "childList":
              e.call(m.addedNodes).forEach(function(w) {
                if (w.nodeType === Node.ELEMENT_NODE) {
                  var D = e.call(w.querySelectorAll("[inert]"));
                  t.call(w, "[inert]") && D.unshift(w), D.forEach(function(T) {
                    this.setInert(T, !0);
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
              ), x = b.hasAttribute("inert");
              h.setInert(b, x);
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
        for (var m = (
          /** @type {!HTMLContentElement} */
          v
        ), b = m.getDistributedNodes ? m.getDistributedNodes() : [], x = 0; x < b.length; x++)
          c(b[x], l);
        return;
      }
      if (v.localName == "slot") {
        for (var w = (
          /** @type {!HTMLSlotElement} */
          v
        ), D = w.assignedNodes ? w.assignedNodes({ flatten: !0 }) : [], T = 0; T < D.length; T++)
          c(D[T], l);
        return;
      }
    }
    for (var N = f.firstChild; N != null; )
      c(N, l), N = N.nextSibling;
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
const fr = dt(), _u = Object.freeze({
  ESC: 27
}), wu = "section[data-type='Section']:not([hidden]), div:not([hidden])", Si = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = Q(), i = (l) => {
    const u = document.querySelector("#root");
    u.inert = l;
  }, c = (l) => {
    (l.keyCode || l.which) === _u.ESC && f();
  }, s = (l, u) => {
    a.current.classList.replace(l, u);
  }, d = (l) => {
    document.querySelectorAll(l).forEach((v) => {
      v.closest(wu) && !v.disabled && v.focus();
    });
  }, f = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), n(!t), typeof r == "string" || Array.isArray(r) ? d(r) : typeof r == "object" && r.current.focus();
    }, 500);
  };
  return J(() => (t && (i(!0), a.current && a.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(
    fr.Provider,
    {
      value: { isOpen: t, onKeyDown: c, onCloseModal: f, refModal: a },
      children: /* @__PURE__ */ p(cn, { id: "js-modal", children: Ze(e, ["ModalContent", "ModalOverlay"]) })
    }
  );
};
Si.defaultProps = {
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
}, Ci = ({
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
  } = Se(fr), u = (h) => {
    n && typeof n == "function" && n(h), f();
  };
  return /* @__PURE__ */ I(
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
      className: re(
        "animate__animated animate__fadeIn animate__faster video-interpreter-ui-modal",
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
            className: re({ [Xn["c-modal-container"]]: !a }),
            "data-class": "c-modal__container",
            children: t
          }
        ),
        /* @__PURE__ */ p(
          zt,
          {
            addClass: re({ [Xn["c-close-button"]]: !a }),
            "data-class": "c-modal__close-button",
            label: "Cerrar modal",
            hasAriaLabel: !0,
            onClick: u,
            ...a && { defaultStyle: a },
            children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p(
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
  onClick: o.func,
  onKeyDown: o.func,
  defaultStyle: o.bool,
  __TYPE: ye("ModalContent")
};
Ci.defaultProps = {
  __TYPE: "ModalContent"
};
const Pi = ({ addClass: e, onClick: t, defaultStyle: n }) => {
  const { isOpen: r, onCloseModal: a } = Se(fr), i = (c) => {
    t && typeof t == "function" && t(c), a();
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [Xn["c-layout"]]: !n,
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
  __TYPE: ye("ModalOverlay")
};
Pi.defaultProps = {
  __TYPE: "ModalOverlay"
};
const xu = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = Se(fr), r = (a) => {
    t && t(a), n();
  };
  return Pe(e, { ...e.props, onClick: r });
};
xu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const tn = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, pr = dt(), Ri = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: c, onValue: s }) => {
  const [d, f] = ee(r || 0), l = () => {
    if (n && d > i)
      return f(i);
    f((m) => m + c);
  }, u = () => {
    if (n && d < a)
      return f(a);
    f((m) => m - c);
  }, v = (m) => f(m), h = (m) => n && d === m;
  return J(() => {
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
      children: /* @__PURE__ */ p("div", { className: `${tn["c-number-input"]} ${t ?? ""}`, children: Ze(e, ["NumberInputField", "NumberInputStepper"]) })
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
      onChangeValue: d,
      onIncrementValue: f,
      onDecrementValue: l,
      min: u,
      max: v
    } = Se(pr), h = e || Ct(), m = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), b = ({ target: w }) => {
      if (!isNaN(w.value) && w.value)
        return d(parseInt(w.value));
      d(0);
    }, x = (w) => {
      switch (w.keyCode || w.which) {
        case m.UP:
          f();
          break;
        case m.DOWN:
          l();
          break;
        case m.END:
          d(v);
          break;
        case m.HOME:
          d(u);
          break;
        default:
          return null;
      }
    };
    return /* @__PURE__ */ I(
      "label",
      {
        htmlFor: h,
        className: `${tn["c-number-input__label"]} ${a ?? ""}`,
        children: [
          /* @__PURE__ */ I("span", { className: `${!i && "u-sr-only"}`, children: [
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
              onChange: b,
              onKeyDown: x,
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
  __TYPE: ye("NumberInputField")
};
const Ni = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${tn["c-number-input__stepper"]} ${t ?? ""}`, children: Ze(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Ni.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: ye("NumberInputStepper")
};
Ni.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Ai = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = Se(pr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Decrementar valor"}`,
      className: `${tn["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Ai.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: ye("NumberDecrementStepper"),
  label: o.string
};
Ai.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Mi = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: r, validate: a, max: i } = Se(pr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Incrementar valor"}`,
      className: `${tn["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
Mi.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: ye("NumberIncrementStepper"),
  label: o.string
};
Mi.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const Tu = (e) => {
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
  } = e, [v, h] = ee(r || 1);
  J(() => {
    r && h(r);
  }, [r]);
  const m = (E, M) => {
    h(M), s && s(E, M);
  }, b = (E, M) => {
    const z = M - E + 1;
    return Array.from({ length: z }, (G, q) => E + q);
  }, x = b(1, Math.min(t, n)), w = b(
    Math.max(n - t + 1, t + 1),
    n
  ), D = Math.max(
    Math.min(
      // Inicio natural
      v - l,
      // Limite inferior cuando la página es mayor
      n - t - l * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), T = Math.min(
    Math.max(
      // Final natural
      v + l,
      // Limite superior cuando la página es menor
      t + l * 2 + 2
    ),
    // Menor que el endPages
    w.length > 0 ? w[0] - 2 : n - 1
  ), N = [
    ...d ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...x,
    // Comienza el ellipsis
    ...D > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...b(D, T),
    // Finaliza el ellipsis
    ...T < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...w,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], _ = (E) => {
    switch (E) {
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
    items: N.map((E) => typeof E == "number" ? {
      onClick: (M) => {
        m(M, E);
      },
      type: "page",
      page: E,
      selected: E === v,
      disabled: a,
      "aria-current": E === v ? "page" : void 0
    } : {
      onClick: (M) => {
        m(M, _(E));
      },
      type: E,
      page: _(E),
      selected: !1,
      disabled: a || E.indexOf("ellipsis") === -1 && (E === "next" || E === "last" ? v >= n : v <= 1)
    }),
    ...u
  };
}, On = {
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
}), Eu = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${Ou[e]} página`, Ii = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: r,
  ...a
}) => {
  const { items: i } = Tu({ ...a });
  return /* @__PURE__ */ p(
    "nav",
    {
      className: re({
        [On["c-pagination"]]: !r,
        [n]: n
      }),
      children: /* @__PURE__ */ p(
        "ul",
        {
          className: re({
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
  getItemAriaLabel: Eu
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
      className: re({
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
      l ? i ? /* @__PURE__ */ p(xe, { path: l }, t) : /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: l }) }, t) : null
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
const Kt = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, vr = dt(), Su = ({ children: e, defaultIndex: t, addClass: n, type: r, defaultStyle: a }) => {
  const [i, c] = ee(null), s = Q([]), d = (h) => {
    s.current.includes(h) || (s.current = [...s.current, h]);
  }, f = (h) => c(s.current[h]), l = (h) => /:.*?:/g.test(h) ? i === h : s.current[h - 1] === i, u = () => [...s.current].reduce((h, m, b) => [...h, b + 1], []), v = (h) => s.current.indexOf(h) + 1;
  return J(() => {
    s.current.length !== 0 && (t !== void 0 ? f(t - 1) : c(s.current[0]));
  }, [t, s]), /* @__PURE__ */ p(
    vr.Provider,
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
          className: re("video-interpreter-ui-panel", {
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
Su.propTypes = {
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
    const { validation: c, addNewIdToSection: s, getIndexById: d, type: f } = Se(vr), l = Ct(), u = c(l);
    return J(() => {
      l && s(l);
    }, [l]), /* @__PURE__ */ I(
      "section",
      {
        ref: i,
        role: f === "carrousel" ? "group" : "tabpanel",
        hidden: !u,
        "data-type": r,
        "aria-hidden": !u,
        "data-value": l,
        "aria-labelledby": `section-${l}`,
        className: re({
          [Kt["c-section"]]: !n,
          "video-interpreter-ui-section": "video-interpreter-ui-section",
          [t]: t
        }),
        ...f === "carrousel" && {
          "aria-roledescription": "Sección"
        },
        ...a,
        children: [
          /* @__PURE__ */ I("span", { id: `section-${l}`, className: "u-sr-only", children: [
            "Sección ",
            d(l)
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
  __TYPE: ye("Section")
};
$i.defaultProps = {
  __TYPE: "Section"
};
const Cu = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), da = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Pu = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${Cu[e]} sección`, ki = ({
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
  const { validation: l, onToggle: u, listId: v, currentSection: h } = Se(vr), m = Q([]), b = Object.freeze({
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
  }, [w, D] = ee([]);
  J(() => {
    v.length !== 0 && D([
      // Botón para navegar a la sección anterior.
      ...t ? ["previous"] : [],
      // Lista de todas la secciones.
      ...v || [],
      // Botón para navegar a la siguiente sección.
      ...n ? ["next"] : []
    ]);
  }, [v]);
  const T = (E) => !m.current.includes(E) && E ? m.current = [...m.current, E] : m.current, N = (E) => {
    const M = m.current[0], z = m.current[m.current.length - 1];
    if ((E.keyCode || E.which) === da.LEFT)
      if (E.target === M)
        z.focus();
      else {
        const G = m.current.indexOf(E.target) - 1;
        m.current[G].focus();
      }
    else if ((E.keyCode || E.which) === da.RIGHT)
      if (E.target === z)
        M.focus();
      else {
        const G = m.current.indexOf(E.target) + 1;
        m.current[G].focus();
      }
  }, _ = (E) => {
    u(v.findIndex((M) => M === E)), c !== void 0 && c(E, v.length);
  }, j = w.map((E) => {
    let M = [...v];
    return M = M.pop(), typeof E == "number" ? {
      onClick: (z) => {
        _(E);
      },
      type: "section",
      section: E,
      selected: l(E),
      ref: T,
      onKeyDown: N
    } : {
      onClick: () => {
        _(b[E]);
      },
      type: E,
      section: b[E],
      selected: !1,
      disabled: E === "next" ? h >= M : h <= v[0]
    };
  });
  return J(() => {
    c !== void 0 && c(h, v.length);
  }, []), /* @__PURE__ */ I(it, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: re({
          [Kt["c-navigation"]]: !f,
          [s]: s
        }),
        children: e ? e(j) : j.map(({ section: E, type: M, selected: z, ...G }, q) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: re({
              [Kt["c-navigation__item"]]: !f
            }),
            children: M === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${E}`,
                role: "tab",
                tabIndex: `${z ? 0 : -1}`,
                "aria-selected": z,
                "data-class": "c-navigation__section",
                className: re({
                  [Kt["c-navigation__section"]]: !f
                }),
                "aria-label": d(M, E, z),
                ...G
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: re({
                  [Kt["c-navigation__button"]]: !f
                }),
                "aria-label": d(M, E, z),
                ...G,
                children: x[M] ? r ? /* @__PURE__ */ p(xe, { path: x[M] }, M) : /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: x[M]
                  }
                ) }, M) : null
              }
            )
          },
          `navigation-section-item-${q}`
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
  getItemAriaLabel: Pu
};
const Ru = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = Se(vr), a = (i) => {
    r(t - 1), n && n(i);
  };
  return Re.map(e, (i) => Pe(i, { ...i.props, onClick: a }));
};
Ru.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const Du = {
  "c-paper": "_c-paper_1sbf6_1"
}, Nu = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = Q(null);
  return sr(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${Du["c-paper"]} ${n ?? ""}`,
      ...r,
      children: e
    }
  );
};
Nu.propTypes = {
  children: o.oneOfType([
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  color: o.string
};
const Au = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Mu = (e) => {
  document.body.append(e);
}, Iu = (e) => {
  const t = Q(null);
  J(() => {
    const r = document.querySelector(`#${e}`), a = r || Au(e);
    return r || Mu(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, cn = ({ children: e, id: t }) => {
  const n = Iu(t);
  return Ia(e, n);
};
cn.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const $u = "_row_1adiy_1", ku = {
  row: $u
}, Lu = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${ku.row} ${e ?? ""}`, ...t }));
Lu.propTypes = {
  addClass: o.string
};
const mn = {
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
    isRequired: d,
    onChoise: f,
    defaultValue: l,
    defaultStyle: u
  }, v) => {
    const h = t || Ct(), m = ({ target: b }) => {
      f && f({ id: h, value: b.value });
    };
    return /* @__PURE__ */ I(
      "label",
      {
        htmlFor: h,
        className: re({
          [mn["c-select-label"]]: !u,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ I("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            r,
            " "
          ] }),
          /* @__PURE__ */ I("div", { className: mn["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
            /* @__PURE__ */ I(
              "select",
              {
                id: h,
                ref: v,
                name: h,
                defaultValue: l,
                className: re({
                  [mn["c-select"]]: !u
                }),
                "data-class": "c-select",
                onChange: m,
                disabled: s,
                required: d,
                children: [
                  /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
                  Ze(e, ["option", "optgroup"])
                ]
              }
            ),
            a ? /* @__PURE__ */ p(
              xe,
              {
                path: a,
                "data-class": "c-select__icon",
                addClass: re({ [mn["c-select__icon"]]: !u })
              }
            ) : /* @__PURE__ */ p(
              xe,
              {
                "data-class": "c-select__icon",
                addClass: re({ [mn["c-select__icon"]]: !u }),
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
  __TYPE: ye("Select")
};
const ju = ({ children: e, onAllSelect: t }) => {
  const [n, r] = ee([]), a = (c) => r([
    ...n.filter((s) => s.id !== c.id),
    { ...c }
  ]);
  return J(() => {
    t && t(n);
  }, [n, t]), Re.map(e, (c) => {
    var s;
    return ut(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? Pe(c, { ...c.props, onChoise: a }) : c : null;
  });
};
ju.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onAllSelect: o.func
};
const Fr = {
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
    isLabelVisible: d,
    onChange: f
  }, l) => {
    const [u, v] = ee(!1), h = e || Ct(), m = ({ target: x }) => {
      if (v(x.checked), !!f) {
        if (x.checked) {
          f({ id: x.id, value: x.value });
          return;
        }
        f({ id: x.id, value: "" });
      }
    }, b = (x) => {
      ((x.keyCode || x.which) === fa.SPACE || (x.keyCode || x.which) === fa.ENTER) && v((w) => (f && f(w ? { id: h, value: "" } : { id: h, value: `${r}` }), !w));
    };
    return J(() => (s && v(!!s), () => {
      v(!1);
    }), [s]), /* @__PURE__ */ I(
      "label",
      {
        htmlFor: h,
        className: `${Fr["c-label"]} ${Fr[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ I("span", { className: `${!d && "u-sr-only"}`, children: [
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
              className: `${Fr["c-switch"]} ${i ?? ""}`,
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
const wo = dt(), Fu = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = ee(0), c = (d) => i(d), s = (d) => a === d;
  return J(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(wo.Provider, { value: { validation: s, onToggle: c }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: Ze(e, ["TabList", "TabPanels"]) }) });
};
Fu.propTypes = {
  children: o.arrayOf(o.element),
  defaultIndex: o.number,
  addClass: o.string
};
const Dn = {
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
  defaultStyle: d,
  __TYPE: f,
  ...l
}) => {
  const u = Q(), { validation: v, onToggle: h } = Se(wo), m = v(t), b = (x) => {
    s && s(x), h(t);
  };
  return J(() => (u.current && i(u.current), () => {
    u.current = null;
  }), [u]), /* @__PURE__ */ I(
    "button",
    {
      id: `tab-${t}`,
      role: "tab",
      ref: u,
      "data-type": f,
      tabIndex: `${m ? 0 : -1}`,
      "aria-controls": `panel-${t}`,
      "aria-selected": m,
      onKeyDown: c,
      onClick: b,
      className: re({
        [`${Dn["c-tab__button"]} u-flex`]: !d,
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
  __TYPE: ye("Tab")
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
  const s = Q([]), d = (u) => s.current = [...s.current, u], f = (u) => {
    const v = s.current[0], h = s.current[s.current.length - 1];
    if ((u.keyCode || u.which) === pa.LEFT)
      if (u.target === v)
        h.focus();
      else {
        const m = s.current.indexOf(u.target) - 1;
        s.current[m].focus();
      }
    else if ((u.keyCode || u.which) === pa.RIGHT)
      if (u.target === h)
        v.focus();
      else {
        const m = s.current.indexOf(u.target) + 1;
        s.current[m].focus();
      }
  }, l = Re.map(e, (u, v) => ut(u) ? Pe(u, {
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
      className: re({
        [Dn["c-tab__list"]]: !a,
        [t]: t
      }),
      ...c,
      children: Ze(l, ["Tab"])
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
  __TYPE: ye("TabList")
};
Bi.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const qi = ({ children: e, id: t, addClass: n, defaultStyle: r, __TYPE: a, ...i }) => {
  const { validation: c } = Se(wo), s = c(t);
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
      className: re({
        [Dn["c-tab__panel--active"]]: !r && s,
        [Dn["c-tab__panel"]]: !r && !s,
        "video-interpreter-ui-tabpanel": "video-interpreter-ui-tabpanel",
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
  __TYPE: ye("TabPanel")
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
  const i = Re.map(e, (c, s) => ut(c) ? Pe(c, { ...c.props, id: s }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [Dn["c-tab__panels"]]: !n,
        [t]: t
      }),
      "data-type": r,
      ...a,
      children: Ze(i, ["TabPanel"])
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
  __TYPE: ye("TabPanels")
};
Vi.defaultProps = {
  __TYPE: "TabPanels"
};
const Br = {
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
    isRequired: d,
    defaultStyle: f,
    onValue: l,
    ...u
  }, v) => {
    const h = e || Ct(), m = ({ target: b }) => {
      l && l({ id: h, value: b.value });
    };
    return /* @__PURE__ */ I(
      "label",
      {
        htmlFor: h,
        className: re({
          [Br["c-label"]]: !f,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ I("span", { className: `${!c && "u-sr-only"}`, children: [
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
              onChange: m,
              "data-class": "c-textarea",
              className: re({
                [`${Br["c-textarea"]} ${Br[`c-textarea--${n}`]}`]: !f
              }),
              ...u
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
const Bu = Aa(({ children: e, theme: t = {} }) => {
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
Bu.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var va = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, ha = typeof window < "u" && window.document && window.document.createElement ? Yt.useLayoutEffect : Yt.useEffect, Ue = "top", lt = "bottom", ct = "right", He = "left", xo = "auto", Ln = [Ue, lt, ct, He], nn = "start", Nn = "end", qu = "clippingParents", zi = "viewport", bn = "popper", Vu = "reference", ga = /* @__PURE__ */ Ln.reduce(function(e, t) {
  return e.concat([t + "-" + nn, t + "-" + Nn]);
}, []), Wi = /* @__PURE__ */ [].concat(Ln, [xo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + nn, t + "-" + Nn]);
}, []), Yu = "beforeRead", zu = "read", Wu = "afterRead", Uu = "beforeMain", Hu = "main", Zu = "afterMain", Gu = "beforeWrite", Xu = "write", Ku = "afterWrite", Qu = [Yu, zu, Wu, Uu, Hu, Zu, Gu, Xu, Ku];
function yt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ut(e) {
  var t = et(e).Element;
  return e instanceof t || e instanceof Element;
}
function st(e) {
  var t = et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function To(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ju(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !st(i) || !yt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function ed(e) {
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
      !st(a) || !yt(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(d) {
        a.removeAttribute(d);
      }));
    });
  };
}
const td = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ju,
  effect: ed,
  requires: ["computeStyles"]
};
function bt(e) {
  return e.split("-")[0];
}
var Wt = Math.max, or = Math.min, rn = Math.round;
function ro() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ui() {
  return !/^((?!chrome|android).)*safari/i.test(ro());
}
function on(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && st(e) && (a = e.offsetWidth > 0 && rn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && rn(r.height) / e.offsetHeight || 1);
  var c = Ut(e) ? et(e) : window, s = c.visualViewport, d = !Ui() && n, f = (r.left + (d && s ? s.offsetLeft : 0)) / a, l = (r.top + (d && s ? s.offsetTop : 0)) / i, u = r.width / a, v = r.height / i;
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
function Oo(e) {
  var t = on(e), n = e.offsetWidth, r = e.offsetHeight;
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
  if (n && To(n)) {
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
  return et(e).getComputedStyle(e);
}
function nd(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
function It(e) {
  return ((Ut(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function hr(e) {
  return yt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (To(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    It(e)
  );
}
function ma(e) {
  return !st(e) || // https://github.com/popperjs/popper-core/issues/837
  St(e).position === "fixed" ? null : e.offsetParent;
}
function rd(e) {
  var t = /firefox/i.test(ro()), n = /Trident/i.test(ro());
  if (n && st(e)) {
    var r = St(e);
    if (r.position === "fixed")
      return null;
  }
  var a = hr(e);
  for (To(a) && (a = a.host); st(a) && ["html", "body"].indexOf(yt(a)) < 0; ) {
    var i = St(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function jn(e) {
  for (var t = et(e), n = ma(e); n && nd(n) && St(n).position === "static"; )
    n = ma(n);
  return n && (yt(n) === "html" || yt(n) === "body" && St(n).position === "static") ? t : n || rd(e) || t;
}
function Eo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function En(e, t, n) {
  return Wt(e, or(t, n));
}
function od(e, t, n) {
  var r = En(e, t, n);
  return r > n ? n : r;
}
function Zi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Gi(e) {
  return Object.assign({}, Zi(), e);
}
function Xi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ad = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Gi(typeof t != "number" ? t : Xi(t, Ln));
};
function id(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = bt(n.placement), d = Eo(s), f = [He, ct].indexOf(s) >= 0, l = f ? "height" : "width";
  if (!(!i || !c)) {
    var u = ad(a.padding, n), v = Oo(i), h = d === "y" ? Ue : He, m = d === "y" ? lt : ct, b = n.rects.reference[l] + n.rects.reference[d] - c[d] - n.rects.popper[l], x = c[d] - n.rects.reference[d], w = jn(i), D = w ? d === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, T = b / 2 - x / 2, N = u[h], _ = D - v[l] - u[m], j = D / 2 - v[l] / 2 + T, E = En(N, j, _), M = d;
    n.modifiersData[r] = (t = {}, t[M] = E, t.centerOffset = E - j, t);
  }
}
function sd(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Hi(t.elements.popper, a) && (t.elements.arrow = a));
}
const ld = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: id,
  effect: sd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function an(e) {
  return e.split("-")[1];
}
var cd = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ud(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: rn(n * a) / a || 0,
    y: rn(r * a) / a || 0
  };
}
function ba(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, d = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, u = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, m = c.y, b = m === void 0 ? 0 : m, x = typeof l == "function" ? l({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = x.x, b = x.y;
  var w = c.hasOwnProperty("x"), D = c.hasOwnProperty("y"), T = He, N = Ue, _ = window;
  if (f) {
    var j = jn(n), E = "clientHeight", M = "clientWidth";
    if (j === et(n) && (j = It(n), St(j).position !== "static" && s === "absolute" && (E = "scrollHeight", M = "scrollWidth")), j = j, a === Ue || (a === He || a === ct) && i === Nn) {
      N = lt;
      var z = u && j === _ && _.visualViewport ? _.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        j[E]
      );
      b -= z - r.height, b *= d ? 1 : -1;
    }
    if (a === He || (a === Ue || a === lt) && i === Nn) {
      T = ct;
      var G = u && j === _ && _.visualViewport ? _.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        j[M]
      );
      h -= G - r.width, h *= d ? 1 : -1;
    }
  }
  var q = Object.assign({
    position: s
  }, f && cd), W = l === !0 ? ud({
    x: h,
    y: b
  }, et(n)) : {
    x: h,
    y: b
  };
  if (h = W.x, b = W.y, d) {
    var H;
    return Object.assign({}, q, (H = {}, H[N] = D ? "0" : "", H[T] = w ? "0" : "", H.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", H));
  }
  return Object.assign({}, q, (t = {}, t[N] = D ? b + "px" : "", t[T] = w ? h + "px" : "", t.transform = "", t));
}
function dd(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, c = i === void 0 ? !0 : i, s = n.roundOffsets, d = s === void 0 ? !0 : s, f = {
    placement: bt(t.placement),
    variation: an(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ba(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ba(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const fd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: dd,
  data: {}
};
var Hn = {
  passive: !0
};
function pd(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, c = r.resize, s = c === void 0 ? !0 : c, d = et(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, Hn);
  }), s && d.addEventListener("resize", n.update, Hn), function() {
    i && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Hn);
    }), s && d.removeEventListener("resize", n.update, Hn);
  };
}
const vd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: pd,
  data: {}
};
var hd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Kn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return hd[t];
  });
}
var gd = {
  start: "end",
  end: "start"
};
function ya(e) {
  return e.replace(/start|end/g, function(t) {
    return gd[t];
  });
}
function So(e) {
  var t = et(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Co(e) {
  return on(It(e)).left + So(e).scrollLeft;
}
function md(e, t) {
  var n = et(e), r = It(e), a = n.visualViewport, i = r.clientWidth, c = r.clientHeight, s = 0, d = 0;
  if (a) {
    i = a.width, c = a.height;
    var f = Ui();
    (f || !f && t === "fixed") && (s = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s + Co(e),
    y: d
  };
}
function bd(e) {
  var t, n = It(e), r = So(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Wt(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Wt(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Co(e), d = -r.scrollTop;
  return St(a || n).direction === "rtl" && (s += Wt(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: d
  };
}
function Po(e) {
  var t = St(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Ki(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : st(e) && Po(e) ? e : Ki(hr(e));
}
function Sn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ki(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = et(r), c = a ? [i].concat(i.visualViewport || [], Po(r) ? r : []) : r, s = t.concat(c);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Sn(hr(c)))
  );
}
function oo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function yd(e, t) {
  var n = on(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _a(e, t, n) {
  return t === zi ? oo(md(e, n)) : Ut(t) ? yd(t, n) : oo(bd(It(e)));
}
function _d(e) {
  var t = Sn(hr(e)), n = ["absolute", "fixed"].indexOf(St(e).position) >= 0, r = n && st(e) ? jn(e) : e;
  return Ut(r) ? t.filter(function(a) {
    return Ut(a) && Hi(a, r) && yt(a) !== "body";
  }) : [];
}
function wd(e, t, n, r) {
  var a = t === "clippingParents" ? _d(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(d, f) {
    var l = _a(e, f, r);
    return d.top = Wt(l.top, d.top), d.right = or(l.right, d.right), d.bottom = or(l.bottom, d.bottom), d.left = Wt(l.left, d.left), d;
  }, _a(e, c, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Qi(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? bt(r) : null, i = r ? an(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, d;
  switch (a) {
    case Ue:
      d = {
        x: c,
        y: t.y - n.height
      };
      break;
    case lt:
      d = {
        x: c,
        y: t.y + t.height
      };
      break;
    case ct:
      d = {
        x: t.x + t.width,
        y: s
      };
      break;
    case He:
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
      case nn:
        d[f] = d[f] - (t[l] / 2 - n[l] / 2);
        break;
      case Nn:
        d[f] = d[f] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return d;
}
function An(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, d = s === void 0 ? qu : s, f = n.rootBoundary, l = f === void 0 ? zi : f, u = n.elementContext, v = u === void 0 ? bn : u, h = n.altBoundary, m = h === void 0 ? !1 : h, b = n.padding, x = b === void 0 ? 0 : b, w = Gi(typeof x != "number" ? x : Xi(x, Ln)), D = v === bn ? Vu : bn, T = e.rects.popper, N = e.elements[m ? D : v], _ = wd(Ut(N) ? N : N.contextElement || It(e.elements.popper), d, l, c), j = on(e.elements.reference), E = Qi({
    reference: j,
    element: T,
    strategy: "absolute",
    placement: a
  }), M = oo(Object.assign({}, T, E)), z = v === bn ? M : j, G = {
    top: _.top - z.top + w.top,
    bottom: z.bottom - _.bottom + w.bottom,
    left: _.left - z.left + w.left,
    right: z.right - _.right + w.right
  }, q = e.modifiersData.offset;
  if (v === bn && q) {
    var W = q[a];
    Object.keys(G).forEach(function(H) {
      var U = [ct, lt].indexOf(H) >= 0 ? 1 : -1, ne = [Ue, lt].indexOf(H) >= 0 ? "y" : "x";
      G[H] += W[ne] * U;
    });
  }
  return G;
}
function xd(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, d = n.allowedAutoPlacements, f = d === void 0 ? Wi : d, l = an(r), u = l ? s ? ga : ga.filter(function(m) {
    return an(m) === l;
  }) : Ln, v = u.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  v.length === 0 && (v = u);
  var h = v.reduce(function(m, b) {
    return m[b] = An(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[bt(b)], m;
  }, {});
  return Object.keys(h).sort(function(m, b) {
    return h[m] - h[b];
  });
}
function Td(e) {
  if (bt(e) === xo)
    return [];
  var t = Kn(e);
  return [ya(e), t, ya(t)];
}
function Od(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, d = n.fallbackPlacements, f = n.padding, l = n.boundary, u = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, b = n.allowedAutoPlacements, x = t.options.placement, w = bt(x), D = w === x, T = d || (D || !m ? [Kn(x)] : Td(x)), N = [x].concat(T).reduce(function(C, R) {
      return C.concat(bt(R) === xo ? xd(t, {
        placement: R,
        boundary: l,
        rootBoundary: u,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : R);
    }, []), _ = t.rects.reference, j = t.rects.popper, E = /* @__PURE__ */ new Map(), M = !0, z = N[0], G = 0; G < N.length; G++) {
      var q = N[G], W = bt(q), H = an(q) === nn, U = [Ue, lt].indexOf(W) >= 0, ne = U ? "width" : "height", X = An(t, {
        placement: q,
        boundary: l,
        rootBoundary: u,
        altBoundary: v,
        padding: f
      }), K = U ? H ? ct : He : H ? lt : Ue;
      _[ne] > j[ne] && (K = Kn(K));
      var le = Kn(K), ie = [];
      if (i && ie.push(X[W] <= 0), s && ie.push(X[K] <= 0, X[le] <= 0), ie.every(function(C) {
        return C;
      })) {
        z = q, M = !1;
        break;
      }
      E.set(q, ie);
    }
    if (M)
      for (var P = m ? 3 : 1, A = function(R) {
        var S = N.find(function($) {
          var B = E.get($);
          if (B)
            return B.slice(0, R).every(function(Z) {
              return Z;
            });
        });
        if (S)
          return z = S, "break";
      }, y = P; y > 0; y--) {
        var O = A(y);
        if (O === "break")
          break;
      }
    t.placement !== z && (t.modifiersData[r]._skip = !0, t.placement = z, t.reset = !0);
  }
}
const Ed = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Od,
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
  return [Ue, ct, lt, He].some(function(t) {
    return e[t] >= 0;
  });
}
function Sd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = An(t, {
    elementContext: "reference"
  }), s = An(t, {
    altBoundary: !0
  }), d = wa(c, r), f = wa(s, a, i), l = xa(d), u = xa(f);
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
const Cd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Sd
};
function Pd(e, t, n) {
  var r = bt(e), a = [He, Ue].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, c = i[0], s = i[1];
  return c = c || 0, s = (s || 0) * a, [He, ct].indexOf(r) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function Rd(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = Wi.reduce(function(l, u) {
    return l[u] = Pd(u, t.rects, i), l;
  }, {}), s = c[t.placement], d = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
}
const Dd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Rd
};
function Nd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Qi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ad = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Nd,
  data: {}
};
function Md(e) {
  return e === "x" ? "y" : "x";
}
function Id(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, d = n.boundary, f = n.rootBoundary, l = n.altBoundary, u = n.padding, v = n.tether, h = v === void 0 ? !0 : v, m = n.tetherOffset, b = m === void 0 ? 0 : m, x = An(t, {
    boundary: d,
    rootBoundary: f,
    padding: u,
    altBoundary: l
  }), w = bt(t.placement), D = an(t.placement), T = !D, N = Eo(w), _ = Md(N), j = t.modifiersData.popperOffsets, E = t.rects.reference, M = t.rects.popper, z = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, G = typeof z == "number" ? {
    mainAxis: z,
    altAxis: z
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, z), q = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (j) {
    if (i) {
      var H, U = N === "y" ? Ue : He, ne = N === "y" ? lt : ct, X = N === "y" ? "height" : "width", K = j[N], le = K + x[U], ie = K - x[ne], P = h ? -M[X] / 2 : 0, A = D === nn ? E[X] : M[X], y = D === nn ? -M[X] : -E[X], O = t.elements.arrow, C = h && O ? Oo(O) : {
        width: 0,
        height: 0
      }, R = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Zi(), S = R[U], $ = R[ne], B = En(0, E[X], C[X]), Z = T ? E[X] / 2 - P - B - S - G.mainAxis : A - B - S - G.mainAxis, V = T ? -E[X] / 2 + P + B + $ + G.mainAxis : y + B + $ + G.mainAxis, de = t.elements.arrow && jn(t.elements.arrow), L = de ? N === "y" ? de.clientTop || 0 : de.clientLeft || 0 : 0, F = (H = q == null ? void 0 : q[N]) != null ? H : 0, te = K + Z - F - L, ae = K + V - F, me = En(h ? or(le, te) : le, K, h ? Wt(ie, ae) : ie);
      j[N] = me, W[N] = me - K;
    }
    if (s) {
      var Ae, ft = N === "x" ? Ue : He, Fe = N === "x" ? lt : ct, we = j[_], Ve = _ === "y" ? "height" : "width", Xe = we + x[ft], $t = we - x[Fe], Pt = [Ue, He].indexOf(w) !== -1, kt = (Ae = q == null ? void 0 : q[_]) != null ? Ae : 0, Lt = Pt ? Xe : we - E[Ve] - M[Ve] - kt + G.altAxis, Be = Pt ? we + E[Ve] + M[Ve] - kt - G.altAxis : $t, pt = h && Pt ? od(Lt, we, Be) : En(h ? Lt : Xe, we, h ? Be : $t);
      j[_] = pt, W[_] = pt - we;
    }
    t.modifiersData[r] = W;
  }
}
const $d = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Id,
  requiresIfExists: ["offset"]
};
function kd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ld(e) {
  return e === et(e) || !st(e) ? So(e) : kd(e);
}
function jd(e) {
  var t = e.getBoundingClientRect(), n = rn(t.width) / e.offsetWidth || 1, r = rn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Fd(e, t, n) {
  n === void 0 && (n = !1);
  var r = st(t), a = st(t) && jd(t), i = It(t), c = on(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((yt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Po(i)) && (s = Ld(t)), st(t) ? (d = on(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : i && (d.x = Co(i))), {
    x: c.left + s.scrollLeft - d.x,
    y: c.top + s.scrollTop - d.y,
    width: c.width,
    height: c.height
  };
}
function Bd(e) {
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
function qd(e) {
  var t = Bd(e);
  return Qu.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Vd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Yd(e) {
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
var Ta = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Oa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function zd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Ta : a;
  return function(s, d, f) {
    f === void 0 && (f = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ta, i),
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
        var D = typeof w == "function" ? w(l.options) : w;
        b(), l.options = Object.assign({}, i, l.options, D), l.scrollParents = {
          reference: Ut(s) ? Sn(s) : s.contextElement ? Sn(s.contextElement) : [],
          popper: Sn(d)
        };
        var T = qd(Yd([].concat(r, l.options.modifiers)));
        return l.orderedModifiers = T.filter(function(N) {
          return N.enabled;
        }), m(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = l.elements, D = w.reference, T = w.popper;
          if (Oa(D, T)) {
            l.rects = {
              reference: Fd(D, jn(T), l.options.strategy === "fixed"),
              popper: Oo(T)
            }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(G) {
              return l.modifiersData[G.name] = Object.assign({}, G.data);
            });
            for (var N = 0; N < l.orderedModifiers.length; N++) {
              if (l.reset === !0) {
                l.reset = !1, N = -1;
                continue;
              }
              var _ = l.orderedModifiers[N], j = _.fn, E = _.options, M = E === void 0 ? {} : E, z = _.name;
              typeof j == "function" && (l = j({
                state: l,
                options: M,
                name: z,
                instance: h
              }) || l);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Vd(function() {
        return new Promise(function(x) {
          h.forceUpdate(), x(l);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Oa(s, d))
      return h;
    h.setOptions(f).then(function(x) {
      !v && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function m() {
      l.orderedModifiers.forEach(function(x) {
        var w = x.name, D = x.options, T = D === void 0 ? {} : D, N = x.effect;
        if (typeof N == "function") {
          var _ = N({
            state: l,
            name: w,
            instance: h,
            options: T
          }), j = function() {
          };
          u.push(_ || j);
        }
      });
    }
    function b() {
      u.forEach(function(x) {
        return x();
      }), u = [];
    }
    return h;
  };
}
var Wd = [vd, Ad, fd, td, Dd, Ed, $d, ld, Cd], Ud = /* @__PURE__ */ zd({
  defaultModifiers: Wd
}), Hd = typeof Element < "u", Zd = typeof Map == "function", Gd = typeof Set == "function", Xd = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (Zd && e instanceof Map && t instanceof Map) {
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
    if (Gd && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Xd && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Hd && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !Qn(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Kd = function(t, n) {
  try {
    return Qn(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Qd = /* @__PURE__ */ Mn(Kd);
var Jd = [], gr = function(t, n, r) {
  r === void 0 && (r = {});
  var a = Yt.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || Jd
  }, c = Yt.useState({
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
  }), s = c[0], d = c[1], f = Yt.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var m = h.state, b = Object.keys(m.elements);
        xs.flushSync(function() {
          d({
            styles: va(b.map(function(x) {
              return [x, m.styles[x] || {}];
            })),
            attributes: va(b.map(function(x) {
              return [x, m.attributes[x]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), l = Yt.useMemo(function() {
    var v = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Qd(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), u = Yt.useRef();
  return ha(function() {
    u.current && u.current.setOptions(l);
  }, [l]), ha(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Ud, h = v(t, n, l);
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
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, ef = Object.freeze({
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
  isVisible: d,
  onClick: f
}) => {
  const [l, u] = ee(!1), v = Q(null), h = Q(null), m = t || Ct(), b = (_) => u(!1), x = (_) => {
    u(!l), l && document.activeElement === v.current && !d && setTimeout(() => {
      u((j) => !j);
    }, 100), f && f(_);
  }, w = (_) => {
    (_.keyCode | _.which) === ef.ESC && l && u(!l);
  }, D = Re.map(e, (_) => ut(_) ? Pe(_, {
    ..._.props,
    "aria-describedby": t,
    ref: v,
    onClick: x,
    "data-open": l,
    ...d ? {} : { onBlur: b, onKeyDown: w }
  }) : null), { styles: T, attributes: N } = gr(
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
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(it, { children: e }) : /* @__PURE__ */ I(it, { children: [
    D,
    /* @__PURE__ */ p(cn, { id: "js-toggletip-portal", children: /* @__PURE__ */ I(
      "div",
      {
        id: m,
        ref: h,
        role: "status",
        className: `${qr["c-toggletip"]} ${l && qr["c-toggletip--active"]} ${a ?? ""}`,
        style: T.popper,
        ...N.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: qr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: T.arrow
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
const Vr = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, tf = Object.freeze({
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
  const [d, f] = ee(!1), l = Q(null), u = Q(null), v = Q(), h = t || Ct(), m = (E) => {
    d || f(!d);
  }, b = (E) => f(!1), x = (E) => {
    (!d || document.activeElement !== l.current) && f(!d);
  }, w = () => {
    window.clearTimeout(v.current);
  }, D = (E) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, T = (E) => {
    (E.keyCode | E.which) === tf.ESC && d && f(!d);
  }, N = Re.map(e, (E) => ut(E) ? Pe(E, {
    ...E.props,
    "aria-describedby": t,
    ref: l,
    onFocus: m,
    onBlur: b,
    onMouseEnter: x,
    onMouseLeave: D,
    onKeyDown: T
  }) : null), { styles: _, attributes: j } = gr(
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
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(it, { children: e }) : /* @__PURE__ */ I(it, { children: [
    N,
    /* @__PURE__ */ p(cn, { id: "js-tooltip-portal", children: /* @__PURE__ */ I(
      "div",
      {
        id: h,
        ref: u,
        role: "tooltip",
        "data-open": d,
        onMouseEnter: w,
        onMouseLeave: D,
        className: `${Vr["c-tooltip"]} ${d && Vr["c-tooltip--active"]} ${a ?? ""}`,
        style: _.popper,
        ...j.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Vr["c-tooltip__arrow"],
              "data-popper-arrow": !0,
              style: _.arrow
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
const Ro = dt(), ts = ({
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
  const [f, l] = ee(null), u = [
    ...e.reduce(
      (w, D, T) => [
        ...w,
        document.querySelector(D.target) ? { id: T + 1, ...D } : null
      ],
      []
    ).filter((w) => w !== null)
  ], v = (w) => u.filter((D) => D.id === w).reduce((D, T) => ({ ...D, ...T }), {}), h = (w) => {
    const D = document.querySelector("#root");
    D.inert = w;
  }, m = () => {
    l((w) => w < u.length ? w + 1 : w);
  }, b = () => {
    l((w) => w > 0 + 1 ? w - 1 : w);
  }, x = () => {
    l(null), n(!t), h(!1), r && r.current.focus();
  };
  return J(() => {
    t && (l(u.shift().id), h(!0));
  }, [t]), /* @__PURE__ */ p(
    Ro.Provider,
    {
      value: {
        isOpen: t,
        lastId: u.length,
        ...v(f),
        methods: {
          onNext: m,
          onPrev: b,
          onClose: x
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(cn, { id: "js-tour", children: t && /* @__PURE__ */ I(it, { children: [
        /* @__PURE__ */ p(nf, {}),
        /* @__PURE__ */ p(
          ns,
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
const Mt = {
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
    target: d,
    content: f,
    placement: l,
    distance: u,
    defaultStyle: v
  } = Se(Ro), h = Q(), { onClose: m, onPrev: b, onNext: x } = c, { styles: w, attributes: D } = gr(
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
  ), T = () => ut(f) ? f : ws("p", { className: Mt["tour-description"] }, [
    f
  ]), N = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), x();
  };
  return /* @__PURE__ */ I(it, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: re({ [Mt["c-layout"]]: !v }),
        "data-class": "c-layout"
      }
    ),
    /* @__PURE__ */ I(
      "div",
      {
        id: `unique-id-tour-element-${s}`,
        ref: h,
        style: w.popper,
        className: re({
          [Mt["c-tour-content"]]: !v,
          "animate__animated animate__fadeIn animate__faster": a,
          [r]: r
        }),
        ...e,
        ...D.popper,
        children: [
          /* @__PURE__ */ I("span", { className: "u-sr-only", children: [
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
              className: re({ [Mt["c-tour-progress"]]: !v }),
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
          T(),
          /* @__PURE__ */ I(
            "div",
            {
              className: re({
                [Mt["c-tour-button-container"]]: !v
              }),
              "data-class": "c-tour-button-container",
              children: [
                !t && /* @__PURE__ */ p(
                  zt,
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
                  zt,
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
                  zt,
                  {
                    disabled: s === i,
                    hasAriaLabel: !0,
                    label: "Siguiente",
                    "data-class": "c-button__after",
                    onClick: N,
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
const nf = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r, defaultStyle: a } = Se(Ro), [i, c] = ee({}), s = () => {
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
  return J(() => (n && s(), () => {
    c({});
  }), [n]), J(() => {
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
      className: re({
        [Mt["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [r]: r
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: Mt["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, rf = "_active_i7dnv_90", of = "_iconPulse_i7dnv_1", be = {
  "c-vid": "_c-vid_i7dnv_1",
  "c-vid__caption": "_c-vid__caption_i7dnv_19",
  "c-vid__container": "_c-vid__container_i7dnv_24",
  "c-vid__video": "_c-vid__video_i7dnv_44",
  "no-captions": "_no-captions_i7dnv_56",
  "c-vid__wrapper": "_c-vid__wrapper_i7dnv_60",
  "c-vid__icon-container": "_c-vid__icon-container_i7dnv_70",
  "c-vid__icon": "_c-vid__icon_i7dnv_70",
  active: rf,
  iconPulse: of,
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
  const [s, d] = ee({
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
  }), [u, v] = ee({
    state: !1,
    label: "Reproducir video"
  }), [h, m] = ee({
    state: !0,
    label: "Volumen"
  }), [b, x] = ee(100), [w, D] = ee({
    state: !1,
    label: "Ver en pantalla completa"
  }), [T, N] = ee(!1), [_, j] = ee(100), E = Q(null), M = Q(null), z = Q(null), G = Q(null), q = Q(null), W = Q(null), H = Q(null), U = Q(null), [ne, X] = ee(!1), [K, le] = qa({
    rootMargin: "20px 10px",
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }), ie = (F) => {
    F.classList.add(`${be.active}`), setTimeout(() => {
      F.classList.remove(`${be.active}`);
    }, 650);
  };
  function P() {
    const F = M.current;
    u.state ? (F.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (F.play(), v({
      state: !0,
      label: "Pausar video"
    })), ie(W.current);
  }
  function A() {
    const F = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, te = E.current;
    F ? (D({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (D({
      state: !0,
      label: "Salir de pantalla completa"
    }), te.requestFullscreen ? te.requestFullscreen() : te.mozRequestFullScreen ? te.mozRequestFullScreen() : te.webkitRequestFullScreen ? te.webkitRequestFullScreen() : te.msRequestFullscreen && te.msRequestFullscreen());
  }
  function y(F) {
    const te = parseInt(F, 10), ae = te >= 3600 ? Math.floor(te / 3600) : 0, me = Math.floor((te - ae * 3600) / 60), Ae = te - ae * 3600 - me * 60, ft = S(R(ae)), Fe = S(R(me)), we = S(R(Ae));
    return {
      hours: ft,
      minutes: Fe,
      seconds: we
    };
  }
  function O(F) {
    const te = C(F.duration), ae = C(F.currentTime);
    l({
      totalSeconds: F.currentTime,
      hours: parseInt(y(F.currentTime).hours),
      minutes: parseInt(y(F.currentTime).minutes),
      seconds: parseInt(y(F.currentTime).seconds),
      string: ae
    }), d({
      totalSeconds: Math.floor(F.duration),
      hours: parseInt(y(F.duration).hours),
      minutes: parseInt(y(F.duration).minutes),
      seconds: parseInt(y(F.duration).seconds),
      string: te
    });
  }
  function C(F) {
    return parseInt(F, 10) <= 3600 ? `${y(F).minutes}:${y(F).seconds}` : `${y(F).hours}:${y(F).minutes}:${y(F).seconds}`;
  }
  function R(F) {
    return F < 10 ? F = "0" + F : F;
  }
  function S(F) {
    return isNaN(F) ? "00" : F;
  }
  function $(F) {
    const te = G.current, ae = M.current, Ae = F.nativeEvent.offsetX / te.offsetWidth * ae.duration;
    ae.currentTime = Ae;
  }
  function B(F) {
    const te = M.current, ae = F.target.value, me = ae / 100;
    j(ae), x(ae), te.volume = me, h.state || m({
      state: !0,
      label: "Volumen"
    });
  }
  const Z = () => {
    if (h.state) {
      m({
        state: !1,
        label: "Mutear video"
      });
      const F = M.current, te = 0, ae = te;
      j(te), F.volume = ae;
    } else {
      m({
        state: !0,
        label: "Volumen"
      });
      const F = M.current, te = b, ae = te / 100;
      j(te), F.volume = ae;
    }
  }, V = function(F) {
    (F.keyCode || F.which) === 32 && P();
  }, de = function(F) {
    const te = Math.floor(G.current.getAttribute("aria-valuenow"));
    if (document.activeElement === q.current)
      return null;
    if ((F.keyCode || F.which) === 37) {
      const ae = te - 5;
      ae >= 0 ? M.current.currentTime = ae : M.current.currentTime = 0, ie(U.current);
    }
    if ((F.keyCode || F.which) === 39) {
      const ae = te + 5;
      ae >= M.current.duration ? M.current.currentTime = M.current.duration : M.current.currentTime = ae, ie(H.current);
    }
  }, L = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return J(() => {
    const F = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(F, "caption") && X(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(F, "volume") && j(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), J(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: ne, volume: _ }));
  }, [ne, _]), J(() => (z.current ? z.current.addEventListener("error", () => {
    N(!0);
  }) : N(!0), e.caption && N(!1), () => {
    z.current && z.current.removeEventListener("error", () => {
      N(!0);
    });
  }), [e.caption]), J(() => {
    u.state && !le && P();
  }, [le]), sr(() => {
    M.current && K(M.current);
  }, [M]), /* @__PURE__ */ I(
    "figure",
    {
      className: `${be["c-vid"]} ${a}`,
      style: { maxWidth: `${t}px` },
      onKeyDown: (F) => de(F),
      ...c,
      children: [
        /* @__PURE__ */ I("div", { className: `${be["c-vid__container"]} ${a}`, ref: E, children: [
          /* @__PURE__ */ I("div", { className: be["c-vid__wrapper"], children: [
            /* @__PURE__ */ I(
              "video",
              {
                preload: "none",
                ref: M,
                onTimeUpdate: (F) => O(F.target),
                onLoadedData: (F) => O(F.target),
                onClick: P,
                className: `${be["c-vid__video"]} ${ne ? "" : be["no-captions"]}`,
                ...i && { poster: i },
                children: [
                  /* @__PURE__ */ p("source", { src: e.video }),
                  e.caption ? /* @__PURE__ */ p(
                    "track",
                    {
                      ref: z,
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
            /* @__PURE__ */ I("div", { className: be["c-vid__icon-container"], children: [
              /* @__PURE__ */ p("div", { ref: U, className: be["c-vid__icon"], children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: W, className: be["c-vid__icon"], children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: H, className: be["c-vid__icon"], children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
            ] })
          ] }),
          /* @__PURE__ */ p("div", { className: be["progress-container"], children: /* @__PURE__ */ I(
            "div",
            {
              role: "slider",
              "aria-label": "Progreso del video",
              "aria-valuemin": "0",
              "aria-valuenow": Math.round(f.totalSeconds),
              "aria-valuemax": Math.round(s.totalSeconds),
              "aria-valuetext": L(),
              tabIndex: "0",
              onKeyDown: V,
              className: be["c-vid__progress-bg"],
              onClick: $,
              ref: G,
              children: [
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: be["c-vid__progress-bar"],
                    style: {
                      transform: `scaleX(${isNaN(f.totalSeconds / s.totalSeconds) ? 0 : f.totalSeconds / s.totalSeconds})`
                    }
                  }
                ),
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: be["progress-sphere"],
                    style: {
                      left: `min(calc((${f.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ I("div", { className: `controls ${be["c-vid__controls"]}`, children: [
            /* @__PURE__ */ p(
              "button",
              {
                className: `${be["c-vid__button"]} js-button-video-play`,
                "aria-label": u.label,
                onClick: P,
                "data-description": "Este botón reproduce el video",
                children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${be["c-vid__button"]} js-button-video-volumen`,
                "aria-label": h.label,
                "data-description": "Este botón controla el volumen",
                onClick: Z,
                children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: h.state ? /* @__PURE__ */ p(
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
            /* @__PURE__ */ I("label", { className: be["c-vid__volume"], htmlFor: "volumeControl", children: [
              /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
              /* @__PURE__ */ p(
                "input",
                {
                  className: be["c-vid__volume-item"],
                  ref: q,
                  id: "volumeControl",
                  type: "range",
                  min: "0",
                  max: "100",
                  step: "5",
                  value: _,
                  onChange: B,
                  "aria-valuetext": `${_}%`
                }
              )
            ] }),
            /* @__PURE__ */ I("p", { className: be["c-vid__time"], "aria-hidden": "true", children: [
              /* @__PURE__ */ p("span", { children: f.string }),
              "/",
              /* @__PURE__ */ p("span", { children: s.string })
            ] }),
            /* @__PURE__ */ p(
              "button",
              {
                disabled: T,
                "aria-pressed": T ? void 0 : ne,
                onClick: () => X(!ne),
                "aria-label": "Subtítulos",
                className: `${be["c-vid__button"]} ${be["c-vid__subtitles"]}`,
                children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: T ? /* @__PURE__ */ p(
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
            /* @__PURE__ */ p("button", { className: be["c-vid__button"], "aria-label": w.label, onClick: A, children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: w.state ? /* @__PURE__ */ p(
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
        n && /* @__PURE__ */ I("figcaption", { className: be["c-vid__caption"], children: [
          /* @__PURE__ */ I("strong", { children: [
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
var mr = { exports: {} }, os = {};
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
function Ea() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = as(e)) && (r && (r += " "), r += t);
  return r;
}
const af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Ea,
  default: Ea
}, Symbol.toStringTag, { value: "Module" })), sf = /* @__PURE__ */ Ts(af);
var Oe = {}, wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.dontSetMe = ff;
wt.findInArray = lf;
wt.int = df;
wt.isFunction = cf;
wt.isNum = uf;
function lf(e, t) {
  for (var n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function cf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function uf(e) {
  return typeof e == "number" && !isNaN(e);
}
function df(e) {
  return parseInt(e, 10);
}
function ff(e, t, n) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var Ht = {};
Object.defineProperty(Ht, "__esModule", {
  value: !0
});
Ht.browserPrefixToKey = ss;
Ht.browserPrefixToStyle = pf;
Ht.default = void 0;
Ht.getPrefix = is;
var Yr = ["Moz", "Webkit", "O", "ms"];
function is() {
  var e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var r = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!r || n in r)
    return "";
  for (var a = 0; a < Yr.length; a++)
    if (ss(n, Yr[a]) in r)
      return Yr[a];
  return "";
}
function ss(e, t) {
  return t ? "".concat(t).concat(vf(e)) : e;
}
function pf(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function vf(e) {
  for (var t = "", n = !0, r = 0; r < e.length; r++)
    n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
  return t;
}
var hf = is();
Ht.default = hf;
function ao(e) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
}
Object.defineProperty(Oe, "__esModule", {
  value: !0
});
Oe.addClassName = fs;
Oe.addEvent = bf;
Oe.addUserSelectStyles = Rf;
Oe.createCSSTransform = Ef;
Oe.createSVGTransform = Sf;
Oe.getTouch = Cf;
Oe.getTouchIdentifier = Pf;
Oe.getTranslation = Do;
Oe.innerHeight = xf;
Oe.innerWidth = Tf;
Oe.matchesSelector = ds;
Oe.matchesSelectorAndParentsTo = mf;
Oe.offsetXYFromParent = Of;
Oe.outerHeight = _f;
Oe.outerWidth = wf;
Oe.removeClassName = ps;
Oe.removeEvent = yf;
Oe.removeUserSelectStyles = Df;
var Je = wt, Sa = gf(Ht);
function ls(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ls = function(a) {
    return a ? n : t;
  })(e);
}
function gf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || ao(e) !== "object" && typeof e != "function")
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
function Ca(e, t) {
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
    t % 2 ? Ca(Object(n), !0).forEach(function(r) {
      us(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ca(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function us(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Zn = "";
function ds(e, t) {
  return Zn || (Zn = (0, Je.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, Je.isFunction)(e[n]);
  })), (0, Je.isFunction)(e[Zn]) ? e[Zn](t) : !1;
}
function mf(e, t, n) {
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
function bf(e, t, n, r) {
  if (e) {
    var a = cs({
      capture: !0
    }, r);
    e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
  }
}
function yf(e, t, n, r) {
  if (e) {
    var a = cs({
      capture: !0
    }, r);
    e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
  }
}
function _f(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Je.int)(n.borderTopWidth), t += (0, Je.int)(n.borderBottomWidth), t;
}
function wf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Je.int)(n.borderLeftWidth), t += (0, Je.int)(n.borderRightWidth), t;
}
function xf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Je.int)(n.paddingTop), t -= (0, Je.int)(n.paddingBottom), t;
}
function Tf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Je.int)(n.paddingLeft), t -= (0, Je.int)(n.paddingRight), t;
}
function Of(e, t, n) {
  var r = t === t.ownerDocument.body, a = r ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - a.left) / n, c = (e.clientY + t.scrollTop - a.top) / n;
  return {
    x: i,
    y: c
  };
}
function Ef(e, t) {
  var n = Do(e, t, "px");
  return us({}, (0, Sa.browserPrefixToKey)("transform", Sa.default), n);
}
function Sf(e, t) {
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
function Cf(e, t) {
  return e.targetTouches && (0, Je.findInArray)(e.targetTouches, function(n) {
    return t === n.identifier;
  }) || e.changedTouches && (0, Je.findInArray)(e.changedTouches, function(n) {
    return t === n.identifier;
  });
}
function Pf(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Rf(e) {
  if (e) {
    var t = e.getElementById("react-draggable-style-el");
    t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && fs(e.body, "react-draggable-transparent-selection");
  }
}
function Df(e) {
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
xt.canDragX = Mf;
xt.canDragY = If;
xt.createCoreData = kf;
xt.createDraggableData = Lf;
xt.getBoundPosition = Nf;
xt.getControlPosition = $f;
xt.snapToGrid = Af;
var Qe = wt, Qt = Oe;
function Nf(e, t, n) {
  if (!e.props.bounds)
    return [t, n];
  var r = e.props.bounds;
  r = typeof r == "string" ? r : jf(r);
  var a = No(e);
  if (typeof r == "string") {
    var i = a.ownerDocument, c = i.defaultView, s;
    if (r === "parent" ? s = a.parentNode : s = i.querySelector(r), !(s instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    var d = s, f = c.getComputedStyle(a), l = c.getComputedStyle(d);
    r = {
      left: -a.offsetLeft + (0, Qe.int)(l.paddingLeft) + (0, Qe.int)(f.marginLeft),
      top: -a.offsetTop + (0, Qe.int)(l.paddingTop) + (0, Qe.int)(f.marginTop),
      right: (0, Qt.innerWidth)(d) - (0, Qt.outerWidth)(a) - a.offsetLeft + (0, Qe.int)(l.paddingRight) - (0, Qe.int)(f.marginRight),
      bottom: (0, Qt.innerHeight)(d) - (0, Qt.outerHeight)(a) - a.offsetTop + (0, Qe.int)(l.paddingBottom) - (0, Qe.int)(f.marginBottom)
    };
  }
  return (0, Qe.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Qe.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Qe.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Qe.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Af(e, t, n) {
  var r = Math.round(t / e[0]) * e[0], a = Math.round(n / e[1]) * e[1];
  return [r, a];
}
function Mf(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function If(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function $f(e, t, n) {
  var r = typeof t == "number" ? (0, Qt.getTouch)(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  var a = No(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, Qt.offsetXYFromParent)(r || e, i, n.props.scale);
}
function kf(e, t, n) {
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
function Lf(e, t) {
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
function jf(e) {
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
var br = {}, yr = {};
Object.defineProperty(yr, "__esModule", {
  value: !0
});
yr.default = Ff;
function Ff() {
}
function ar(e) {
  "@babel/helpers - typeof";
  return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ar(e);
}
Object.defineProperty(br, "__esModule", {
  value: !0
});
br.default = void 0;
var zr = qf(Le), Ke = Ao(uo), Bf = Ao(Ma), $e = Oe, Dt = xt, Wr = wt, yn = Ao(yr);
function Ao(e) {
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
function qf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || ar(e) !== "object" && typeof e != "function")
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
function Pa(e, t) {
  return Wf(e) || zf(e, t) || Yf(e, t) || Vf();
}
function Vf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ra(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ra(e, t);
  }
}
function Ra(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function zf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, c, s;
    try {
      for (n = n.call(e); !(a = (c = n.next()).done) && (r.push(c.value), !(t && r.length === t)); a = !0)
        ;
    } catch (d) {
      i = !0, s = d;
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
function Wf(e) {
  if (Array.isArray(e))
    return e;
}
function Uf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Da(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hf(e, t, n) {
  return t && Da(e.prototype, t), n && Da(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Zf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && io(e, t);
}
function io(e, t) {
  return io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, io(e, t);
}
function Gf(e) {
  var t = Kf();
  return function() {
    var r = ir(e), a;
    if (t) {
      var i = ir(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Xf(this, a);
  };
}
function Xf(e, t) {
  if (t && (ar(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ke(e);
}
function ke(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kf() {
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
function ir(e) {
  return ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ir(e);
}
function ot(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ht = {
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
}, Nt = ht.mouse, _r = /* @__PURE__ */ function(e) {
  Zf(n, e);
  var t = Gf(n);
  function n() {
    var r;
    Uf(this, n);
    for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++)
      i[c] = arguments[c];
    return r = t.call.apply(t, [this].concat(i)), ot(ke(r), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), ot(ke(r), "mounted", !1), ot(ke(r), "handleDragStart", function(s) {
      if (r.props.onMouseDown(s), !r.props.allowAnyClick && typeof s.button == "number" && s.button !== 0)
        return !1;
      var d = r.findDOMNode();
      if (!d || !d.ownerDocument || !d.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var f = d.ownerDocument;
      if (!(r.props.disabled || !(s.target instanceof f.defaultView.Node) || r.props.handle && !(0, $e.matchesSelectorAndParentsTo)(s.target, r.props.handle, d) || r.props.cancel && (0, $e.matchesSelectorAndParentsTo)(s.target, r.props.cancel, d))) {
        s.type === "touchstart" && s.preventDefault();
        var l = (0, $e.getTouchIdentifier)(s);
        r.setState({
          touchIdentifier: l
        });
        var u = (0, Dt.getControlPosition)(s, l, ke(r));
        if (u != null) {
          var v = u.x, h = u.y, m = (0, Dt.createCoreData)(ke(r), v, h);
          (0, yn.default)("DraggableCore: handleDragStart: %j", m), (0, yn.default)("calling", r.props.onStart);
          var b = r.props.onStart(s, m);
          b === !1 || r.mounted === !1 || (r.props.enableUserSelectHack && (0, $e.addUserSelectStyles)(f), r.setState({
            dragging: !0,
            lastX: v,
            lastY: h
          }), (0, $e.addEvent)(f, Nt.move, r.handleDrag), (0, $e.addEvent)(f, Nt.stop, r.handleDragStop));
        }
      }
    }), ot(ke(r), "handleDrag", function(s) {
      var d = (0, Dt.getControlPosition)(s, r.state.touchIdentifier, ke(r));
      if (d != null) {
        var f = d.x, l = d.y;
        if (Array.isArray(r.props.grid)) {
          var u = f - r.state.lastX, v = l - r.state.lastY, h = (0, Dt.snapToGrid)(r.props.grid, u, v), m = Pa(h, 2);
          if (u = m[0], v = m[1], !u && !v)
            return;
          f = r.state.lastX + u, l = r.state.lastY + v;
        }
        var b = (0, Dt.createCoreData)(ke(r), f, l);
        (0, yn.default)("DraggableCore: handleDrag: %j", b);
        var x = r.props.onDrag(s, b);
        if (x === !1 || r.mounted === !1) {
          try {
            r.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var w = document.createEvent("MouseEvents");
            w.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.handleDragStop(w);
          }
          return;
        }
        r.setState({
          lastX: f,
          lastY: l
        });
      }
    }), ot(ke(r), "handleDragStop", function(s) {
      if (r.state.dragging) {
        var d = (0, Dt.getControlPosition)(s, r.state.touchIdentifier, ke(r));
        if (d != null) {
          var f = d.x, l = d.y;
          if (Array.isArray(r.props.grid)) {
            var u = f - r.state.lastX || 0, v = l - r.state.lastY || 0, h = (0, Dt.snapToGrid)(r.props.grid, u, v), m = Pa(h, 2);
            u = m[0], v = m[1], f = r.state.lastX + u, l = r.state.lastY + v;
          }
          var b = (0, Dt.createCoreData)(ke(r), f, l), x = r.props.onStop(s, b);
          if (x === !1 || r.mounted === !1)
            return !1;
          var w = r.findDOMNode();
          w && r.props.enableUserSelectHack && (0, $e.removeUserSelectStyles)(w.ownerDocument), (0, yn.default)("DraggableCore: handleDragStop: %j", b), r.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), w && ((0, yn.default)("DraggableCore: Removing handlers"), (0, $e.removeEvent)(w.ownerDocument, Nt.move, r.handleDrag), (0, $e.removeEvent)(w.ownerDocument, Nt.stop, r.handleDragStop));
        }
      }
    }), ot(ke(r), "onMouseDown", function(s) {
      return Nt = ht.mouse, r.handleDragStart(s);
    }), ot(ke(r), "onMouseUp", function(s) {
      return Nt = ht.mouse, r.handleDragStop(s);
    }), ot(ke(r), "onTouchStart", function(s) {
      return Nt = ht.touch, r.handleDragStart(s);
    }), ot(ke(r), "onTouchEnd", function(s) {
      return Nt = ht.touch, r.handleDragStop(s);
    }), r;
  }
  return Hf(n, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var a = this.findDOMNode();
      a && (0, $e.addEvent)(a, ht.touch.start, this.onTouchStart, {
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
        (0, $e.removeEvent)(i, ht.mouse.move, this.handleDrag), (0, $e.removeEvent)(i, ht.touch.move, this.handleDrag), (0, $e.removeEvent)(i, ht.mouse.stop, this.handleDragStop), (0, $e.removeEvent)(i, ht.touch.stop, this.handleDragStop), (0, $e.removeEvent)(a, ht.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, $e.removeUserSelectStyles)(i);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var a, i, c;
      return (a = this.props) !== null && a !== void 0 && a.nodeRef ? (i = this.props) === null || i === void 0 || (c = i.nodeRef) === null || c === void 0 ? void 0 : c.current : Bf.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ zr.cloneElement(zr.Children.only(this.props.children), {
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
}(zr.Component);
br.default = _r;
ot(_r, "displayName", "DraggableCore");
ot(_r, "propTypes", {
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
  className: Wr.dontSetMe,
  style: Wr.dontSetMe,
  transform: Wr.dontSetMe
});
ot(_r, "defaultProps", {
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
    "@babel/helpers - typeof";
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
  var n = m(Le), r = v(uo), a = v(Ma), i = v(sf), c = Oe, s = xt, d = wt, f = v(br), l = v(yr), u = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function v(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function h(y) {
    if (typeof WeakMap != "function")
      return null;
    var O = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
    return (h = function(S) {
      return S ? C : O;
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
    var R = {}, S = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var $ in y)
      if ($ !== "default" && Object.prototype.hasOwnProperty.call(y, $)) {
        var B = S ? Object.getOwnPropertyDescriptor(y, $) : null;
        B && (B.get || B.set) ? Object.defineProperty(R, $, B) : R[$] = y[$];
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
  function x(y, O) {
    if (y == null)
      return {};
    var C = w(y, O), R, S;
    if (Object.getOwnPropertySymbols) {
      var $ = Object.getOwnPropertySymbols(y);
      for (S = 0; S < $.length; S++)
        R = $[S], !(O.indexOf(R) >= 0) && Object.prototype.propertyIsEnumerable.call(y, R) && (C[R] = y[R]);
    }
    return C;
  }
  function w(y, O) {
    if (y == null)
      return {};
    var C = {}, R = Object.keys(y), S, $;
    for ($ = 0; $ < R.length; $++)
      S = R[$], !(O.indexOf(S) >= 0) && (C[S] = y[S]);
    return C;
  }
  function D(y, O) {
    var C = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(y);
      O && (R = R.filter(function(S) {
        return Object.getOwnPropertyDescriptor(y, S).enumerable;
      })), C.push.apply(C, R);
    }
    return C;
  }
  function T(y) {
    for (var O = 1; O < arguments.length; O++) {
      var C = arguments[O] != null ? arguments[O] : {};
      O % 2 ? D(Object(C), !0).forEach(function(R) {
        P(y, R, C[R]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C)) : D(Object(C)).forEach(function(R) {
        Object.defineProperty(y, R, Object.getOwnPropertyDescriptor(C, R));
      });
    }
    return y;
  }
  function N(y, O) {
    return z(y) || M(y, O) || j(y, O) || _();
  }
  function _() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function j(y, O) {
    if (y) {
      if (typeof y == "string")
        return E(y, O);
      var C = Object.prototype.toString.call(y).slice(8, -1);
      if (C === "Object" && y.constructor && (C = y.constructor.name), C === "Map" || C === "Set")
        return Array.from(y);
      if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))
        return E(y, O);
    }
  }
  function E(y, O) {
    (O == null || O > y.length) && (O = y.length);
    for (var C = 0, R = new Array(O); C < O; C++)
      R[C] = y[C];
    return R;
  }
  function M(y, O) {
    var C = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (C != null) {
      var R = [], S = !0, $ = !1, B, Z;
      try {
        for (C = C.call(y); !(S = (B = C.next()).done) && (R.push(B.value), !(O && R.length === O)); S = !0)
          ;
      } catch (V) {
        $ = !0, Z = V;
      } finally {
        try {
          !S && C.return != null && C.return();
        } finally {
          if ($)
            throw Z;
        }
      }
      return R;
    }
  }
  function z(y) {
    if (Array.isArray(y))
      return y;
  }
  function G(y, O) {
    if (!(y instanceof O))
      throw new TypeError("Cannot call a class as a function");
  }
  function q(y, O) {
    for (var C = 0; C < O.length; C++) {
      var R = O[C];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(y, R.key, R);
    }
  }
  function W(y, O, C) {
    return O && q(y.prototype, O), C && q(y, C), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function H(y, O) {
    if (typeof O != "function" && O !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(O && O.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), O && U(y, O);
  }
  function U(y, O) {
    return U = Object.setPrototypeOf || function(R, S) {
      return R.__proto__ = S, R;
    }, U(y, O);
  }
  function ne(y) {
    var O = le();
    return function() {
      var R = ie(y), S;
      if (O) {
        var $ = ie(this).constructor;
        S = Reflect.construct(R, arguments, $);
      } else
        S = R.apply(this, arguments);
      return X(this, S);
    };
  }
  function X(y, O) {
    if (O && (t(O) === "object" || typeof O == "function"))
      return O;
    if (O !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return K(y);
  }
  function K(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function le() {
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
  function P(y, O, C) {
    return O in y ? Object.defineProperty(y, O, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : y[O] = C, y;
  }
  var A = /* @__PURE__ */ function(y) {
    H(C, y);
    var O = ne(C);
    function C(R) {
      var S;
      return G(this, C), S = O.call(this, R), P(K(S), "onDragStart", function($, B) {
        (0, l.default)("Draggable: onDragStart: %j", B);
        var Z = S.props.onStart($, (0, s.createDraggableData)(K(S), B));
        if (Z === !1)
          return !1;
        S.setState({
          dragging: !0,
          dragged: !0
        });
      }), P(K(S), "onDrag", function($, B) {
        if (!S.state.dragging)
          return !1;
        (0, l.default)("Draggable: onDrag: %j", B);
        var Z = (0, s.createDraggableData)(K(S), B), V = {
          x: Z.x,
          y: Z.y
        };
        if (S.props.bounds) {
          var de = V.x, L = V.y;
          V.x += S.state.slackX, V.y += S.state.slackY;
          var F = (0, s.getBoundPosition)(K(S), V.x, V.y), te = N(F, 2), ae = te[0], me = te[1];
          V.x = ae, V.y = me, V.slackX = S.state.slackX + (de - V.x), V.slackY = S.state.slackY + (L - V.y), Z.x = V.x, Z.y = V.y, Z.deltaX = V.x - S.state.x, Z.deltaY = V.y - S.state.y;
        }
        var Ae = S.props.onDrag($, Z);
        if (Ae === !1)
          return !1;
        S.setState(V);
      }), P(K(S), "onDragStop", function($, B) {
        if (!S.state.dragging)
          return !1;
        var Z = S.props.onStop($, (0, s.createDraggableData)(K(S), B));
        if (Z === !1)
          return !1;
        (0, l.default)("Draggable: onDragStop: %j", B);
        var V = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, de = !!S.props.position;
        if (de) {
          var L = S.props.position, F = L.x, te = L.y;
          V.x = F, V.y = te;
        }
        S.setState(V);
      }), S.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: R.position ? R.position.x : R.defaultPosition.x,
        y: R.position ? R.position.y : R.defaultPosition.y,
        prevPropsPosition: T({}, R.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, R.position && !(R.onDrag || R.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), S;
    }
    return W(C, [{
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
        var S, $, B;
        return (S = ($ = this.props) === null || $ === void 0 || (B = $.nodeRef) === null || B === void 0 ? void 0 : B.current) !== null && S !== void 0 ? S : a.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var S, $ = this.props;
        $.axis, $.bounds;
        var B = $.children, Z = $.defaultPosition, V = $.defaultClassName, de = $.defaultClassNameDragging, L = $.defaultClassNameDragged, F = $.position, te = $.positionOffset;
        $.scale;
        var ae = x($, u), me = {}, Ae = null, ft = !!F, Fe = !ft || this.state.dragging, we = F || Z, Ve = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && Fe ? this.state.x : we.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && Fe ? this.state.y : we.y
        };
        this.state.isElementSVG ? Ae = (0, c.createSVGTransform)(Ve, te) : me = (0, c.createCSSTransform)(Ve, te);
        var Xe = (0, i.default)(B.props.className || "", V, (S = {}, P(S, de, this.state.dragging), P(S, L, this.state.dragged), S));
        return /* @__PURE__ */ n.createElement(f.default, b({}, ae, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ n.cloneElement(n.Children.only(B), {
          className: Xe,
          style: T(T({}, B.props.style), me),
          transform: Ae
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(S, $) {
          var B = S.position, Z = $.prevPropsPosition;
          return B && (!Z || B.x !== Z.x || B.y !== Z.y) ? ((0, l.default)("Draggable: getDerivedStateFromProps %j", {
            position: B,
            prevPropsPosition: Z
          }), {
            x: B.x,
            y: B.y,
            prevPropsPosition: T({}, B)
          }) : null;
        }
      )
    }]), C;
  }(n.Component);
  e.default = A, P(A, "displayName", "Draggable"), P(A, "propTypes", T(T({}, f.default.propTypes), {}, {
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
    className: d.dontSetMe,
    style: d.dontSetMe,
    transform: d.dontSetMe
  })), P(A, "defaultProps", T(T({}, f.default.defaultProps), {}, {
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
var hs = os, gs = hs.default, Qf = hs.DraggableCore;
mr.exports = gs;
mr.exports.default = gs;
mr.exports.DraggableCore = Qf;
var Jf = mr.exports;
const ep = /* @__PURE__ */ Mn(Jf), tp = (e, t, n) => {
  const [r, a] = ee({ video1: "", video2: "" }), i = { video1: "/", video2: "/" }, c = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  }, s = (l, u = 0) => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const v = t.filter((h) => h.to === l);
      if (v.length > 0) {
        const { slides: h } = v[0], m = h[u < 0 ? 0 : u];
        a(m || i);
      } else
        a(i);
    } else
      a(i);
  }, d = (l, u = 0, v = "") => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const h = t.filter((m) => m.to === l);
      if (h.length > 0) {
        const { slides: m } = h[0], { modals: b } = m[u < 0 ? 0 : u], w = (b || []).filter((D) => D.id === v)[0];
        a(w || i);
      } else
        a(i);
    } else
      a(i);
  }, f = () => {
    const l = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (l) {
      const u = [...l].findIndex((x) => !x.hasAttribute("hidden"));
      s(n, u < 0 ? 0 : u);
      const v = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (v.length > 0) {
        const x = [...v].findIndex((w) => !w.hasAttribute("hidden"));
        s(n, x < 0 ? 0 : x);
      }
      const h = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      h && d(n, u, h.id);
      const m = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      m && d(n, u, m.id);
      const b = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      b && d(n, u, b.id);
    }
  };
  return J(() => {
    if (e) {
      const l = new MutationObserver(f);
      return l.observe(document.querySelector(e || "body"), c), () => l.disconnect();
    }
  }, [f, c]), r;
}, np = "_progress_18ffq_85", rp = "_flex_18ffq_95", op = "_gap_18ffq_152", ap = "_secondary_18ffq_189", ip = "_close_18ffq_285", sp = "_hide_18ffq_291", lp = "_ico_smart_18ffq_299", ge = {
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
  const [i, c] = ee("00:00"), [s, d] = ee(!1), [f, l] = ee(!1), [u, v] = ee(!1), { video1: h, video2: m } = tp("body", r, a), [b, x] = ee({
    state: !1,
    icon: Ur,
    label: "Reproducir video"
  }), [w, D] = ee({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  }), { deltaPosition: T } = w;
  function N() {
    const X = s ? W.current : H.current;
    b.state ? (X.pause(), x({
      state: !1,
      icon: Ur,
      label: "Reproducir video"
    })) : (X.play(), x({
      state: !0,
      icon: fp,
      label: "Pausar video"
    }));
  }
  function _() {
    const X = s ? W.current : H.current, K = ne.current, le = X.currentTime / X.duration * 100;
    K.style.flexBasis = `${le}%`;
  }
  function j() {
    const X = s ? W.current : H.current;
    K(X);
    function K(A) {
      const y = le(A.currentTime);
      c(y);
    }
    function le(A) {
      const y = parseInt(A, 10), O = Math.floor(y / 3600), C = Math.floor((y - O * 3600) / 60), R = y - O * 3600 - C * 60, S = P(ie(O)), $ = P(ie(C)), B = P(ie(R));
      return `${S}:${$}:${B}`;
    }
    function ie(A) {
      return A < 10 ? A = "0" + A : A;
    }
    function P(A) {
      return isNaN(A) ? "00" : A;
    }
  }
  function E(X) {
    const K = U.current, le = s ? W.current : H.current, P = X.nativeEvent.offsetX / K.offsetWidth * le.duration;
    le.currentTime = P;
  }
  const M = (X, K) => {
    d(!1), l(!1), K(X), z();
  }, z = () => {
    const X = ne.current;
    X.style.flexBasis = "0%", x({
      state: !1,
      icon: Ur,
      label: "Reproducir video"
    });
  }, G = (X, K) => {
    const { x: le, y: ie } = w.deltaPosition;
    D({
      ...w,
      deltaPosition: {
        x: le + K.deltaX,
        y: ie + K.deltaY
      }
    });
  };
  J(() => {
    z();
  }, [h, m]);
  const q = Q(null), W = Q(), H = Q(), U = Q(), ne = Q();
  return /* @__PURE__ */ p(ep, { nodeRef: q, handle: "strong", position: T, onDrag: G, children: /* @__PURE__ */ I(
    "div",
    {
      ref: q,
      className: `${ge["menu-float"]} ${(s || f) && ge["menu-float-active"]} ${ge["menu-float-box"]} ${ge.box} ${ge["no-cursor"]}`,
      children: [
        /* @__PURE__ */ I("div", { className: ge["menu-float-dropdown"], children: [
          (!s && !f || !!h && !s && !f || !!m && (s || f) || !!m && (s || f) && !s) && /* @__PURE__ */ I(
            "button",
            {
              onClick: () => {
                u || (M(!0, d), v(!0));
              },
              className: `${ge["menu-float-btn"]} ${ge["menu-float-btndrop"]} ${!s && !f && ge["menu-float-btn-disable"]}`,
              "aria-label": "Intérprete de lenguaje de señas",
              children: [
                !s && !f && (n ? /* @__PURE__ */ p("img", { className: ge["image-Video"], src: n }) : /* @__PURE__ */ I(
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
          (s || f) && /* @__PURE__ */ I(it, { children: [
            /* @__PURE__ */ I(
              "button",
              {
                tabIndex: -1,
                className: `${ge["menu-float-btn"]} ${ge.secondary}`,
                onClick: () => {
                  f && M(!0, d);
                },
                children: [
                  "1",
                  /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Na, {}) })
                ]
              }
            ),
            /* @__PURE__ */ I(
              "button",
              {
                tabIndex: -1,
                className: `${ge["menu-float-btn"]} ${ge.secondary}`,
                onClick: () => {
                  s && M(!0, l);
                },
                children: [
                  "2",
                  /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Na, {}) })
                ]
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                tabIndex: -1,
                className: `${ge["menu-float-btn"]}`,
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
                className: `${ge["menu-float-btn"]} ${ge.close}`,
                onClick: () => {
                  d(!1), l(!1), D({
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
        /* @__PURE__ */ p("div", { className: `${ge["c-vid-container"]} ${t}`, display: s || f ? "true" : "false", children: /* @__PURE__ */ I("div", { className: `${ge["c-vid"]} ${t}`, style: { maxWidth: `${e}px` }, children: [
          s && /* @__PURE__ */ p(
            "video",
            {
              src: h,
              ref: W,
              onTimeUpdate: () => {
                _(), j();
              },
              className: `${ge["no-captions"]}`
            }
          ),
          f && /* @__PURE__ */ p(
            "video",
            {
              src: m,
              ref: H,
              onTimeUpdate: () => {
                _(), j();
              },
              className: `${ge["no-captions"]}`
            }
          ),
          /* @__PURE__ */ I("div", { className: ge["c-vid-controls"], children: [
            /* @__PURE__ */ p("button", { "aria-label": b.label, onClick: N, children: b.icon }),
            /* @__PURE__ */ p("div", { className: ge.flex, children: /* @__PURE__ */ I(
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
            /* @__PURE__ */ p("p", { className: ge["c-vid-controls-text"], children: /* @__PURE__ */ p("span", { children: i }) }),
            /* @__PURE__ */ p("div", { className: ge["progress-content"], children: /* @__PURE__ */ p("div", { ref: U, className: ge.progress, onClick: E, children: /* @__PURE__ */ p("div", { ref: ne, className: ge["progress-bar"], onChange: _ }) }) })
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
) }), Na = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 96 960 960", "aria-hidden": "true", children: /* @__PURE__ */ p("path", { d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z" }) }), Ur = /* @__PURE__ */ I(
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
), fp = /* @__PURE__ */ I(
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
), Mo = dt(), bs = ({ children: e, isVisible: t }) => {
  const [n, r] = ee(!1), a = Q(), i = () => r(!n), c = (s) => {
    a.current || (a.current = s);
  };
  return J(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p(Mo.Provider, { value: { isOpen: n, onOpen: i, setRefButton: c, refButton: a }, children: e });
};
bs.defaultProps = {
  isVisible: !1
};
bs.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const pp = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r, refButton: a, isOpen: i } = Se(Mo);
  if (Re.count(e) > 1)
    return null;
  const c = (l) => {
    n(), t && t(l);
  }, s = (l) => {
    var u;
    return !!(l && !((u = l.dataset) != null && u.popper) && l !== a.current);
  }, d = (l) => {
    i && s(l.relatedTarget) && n();
  }, f = (l) => {
    if (!ut(l))
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
const Hr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, Zr = Object.freeze({
  ESC: 27,
  TAB: 9
}), vp = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', ys = ({
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
  const { isOpen: f, onOpen: l, refButton: u } = Se(Mo), v = Q(), h = Q(), m = (T, N) => T === N.current;
  Va({ ref: h, onInteractionOutside: (T) => {
    !s && !m(T.target, u) && (l(), T.stopPropagation(), T.preventDefault());
  } });
  const x = (T) => {
    const N = v.current.querySelectorAll(vp), _ = u.current, j = N[0], E = N[N.length - 1];
    if ((T.keyCode || T.which) === Zr.TAB && document.activeElement === E)
      return _.focus(), T.preventDefault();
    T.shiftKey && (T.keyCode || T.which) === Zr.TAB && document.activeElement === j && (_.focus(), T.preventDefault()), (T.keyCode || T.which) === Zr.ESC && _.focus();
  }, { styles: w, attributes: D } = gr(
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
  return J(() => {
    const T = v.current;
    f ? (T.focus(), h.current = T) : h.current = null;
  }, [f, v]), a ? /* @__PURE__ */ p(it, { children: t }) : /* @__PURE__ */ p(cn, { id: "js-popover-modal-portal", children: /* @__PURE__ */ I(
    "div",
    {
      id: e,
      ref: v,
      role: "status",
      tabIndex: -1,
      className: re({
        [Hr["c-popover-modal"]]: !d,
        [Hr["c-popover-modal--active"]]: !d && f,
        "video-interpreter-ui-popover": "video-interpreter-ui-popover",
        [n]: n
      }),
      style: w.popper,
      onKeyDown: x,
      "data-hidden": !f,
      "data-popper": !0,
      ...!f && { hidden: !0 },
      ...D.popper,
      children: [
        t,
        r && /* @__PURE__ */ p(
          "div",
          {
            className: re({
              [Hr["c-popover-modal__arrow"]]: !d
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
const hp = (e, t) => {
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
}, gp = (e, t, n) => {
  const [r, a] = ee(n), i = e.map((s) => window.matchMedia(s)), c = () => {
    const s = i.findIndex((d) => d.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return J(() => {
    a(c);
    const s = (d) => a(c);
    return i.forEach((d) => d.addEventListener("change", s)), () => {
      i.forEach((d) => d.removeEventListener("change", s));
    };
  }, []), r;
}, _p = () => {
  const [e, t] = hp("dark-mode-enabled"), n = gp(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
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
}, wp = (e) => _s(e);
export {
  $s as Accordion,
  ja as AccordionButton,
  Fa as AccordionItem,
  Ba as AccordionPanel,
  Ya as Audio,
  zt as Button,
  Ru as ButtonSection,
  Ha as CheckBox,
  Ml as CheckBoxGroup,
  kl as Col,
  jl as Content,
  vi as DragAndDrop,
  pi as DragAndDropContext,
  hi as Draggable,
  gi as Droppable,
  yp as Filter,
  mi as GeneralDraggable,
  xe as Icon,
  bi as Image,
  yi as Input,
  vu as InputGroup,
  wi as InputLeftAddon,
  xi as InputRightAddon,
  _i as InputStyle,
  ms as Interpreter,
  gu as Kbd,
  Ti as Link,
  mu as List,
  Ei as ListItem,
  Si as Modal,
  xu as ModalCloseButton,
  Ci as ModalContent,
  fr as ModalContext,
  Pi as ModalOverlay,
  ki as NavSection,
  Ai as NumberDecrementStepper,
  Mi as NumberIncrementStepper,
  Ri as NumberInput,
  pr as NumberInputContext,
  Di as NumberInputField,
  Ni as NumberInputStepper,
  bu as OrderedList,
  Ii as Pagination,
  _o as PaginationItem,
  Su as Panel,
  vr as PanelContext,
  Nu as Paper,
  bs as PopoverModal,
  pp as PopoverModalButton,
  ys as PopoverModalContent,
  Mo as PopoverModalContext,
  cn as Portal,
  Lu as Row,
  $i as Section,
  Li as Select,
  ju as SelectGroup,
  ji as Switch,
  Fi as Tab,
  Bi as TabList,
  qi as TabPanel,
  Vi as TabPanels,
  Fu as Tabs,
  wo as TabsContext,
  Yi as TextArea,
  Bu as ThemeProvider,
  Ji as Toggletip,
  es as Tooltip,
  ts as Tour,
  Ro as TourContext,
  ns as TourElement,
  nf as TourHelpLayer,
  yu as UnorderedList,
  rs as Video,
  wp as createTheme,
  _p as useDarkMode,
  Va as useInteractOutside,
  hp as useLocalStorage,
  gp as useMedia,
  qa as useOnScreen,
  Tu as usePagination,
  Iu as usePortal
};
