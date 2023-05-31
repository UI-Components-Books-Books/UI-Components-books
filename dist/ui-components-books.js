import * as zt from "react";
import Le, { Children as Re, useState as te, useEffect as Q, isValidElement as ct, cloneElement as Pe, forwardRef as _t, useRef as J, useLayoutEffect as ur, useMemo as xe, useCallback as je, createContext as ut, memo as $a, useReducer as uo, useContext as Te, useId as At, createElement as xs } from "react";
import * as Os from "react-dom";
import ka, { unstable_batchedUpdates as vn, createPortal as La } from "react-dom";
var Hn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Es(e) {
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
var Rn = {}, Ts = {
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
function Ss() {
  if ($o)
    return hn;
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
function Cs() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function w(g) {
      if (g === null || typeof g != "object")
        return null;
      var M = m && g[m] || g[b];
      return typeof M == "function" ? M : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(g) {
      {
        for (var M = arguments.length, z = new Array(M > 1 ? M - 1 : 0), oe = 1; oe < M; oe++)
          z[oe - 1] = arguments[oe];
        E("error", g, z);
      }
    }
    function E(g, M, z) {
      {
        var oe = _.ReactDebugCurrentFrame, fe = oe.getStackAddendum();
        fe !== "" && (M += "%s", z = z.concat([fe]));
        var he = z.map(function(le) {
          return String(le);
        });
        he.unshift("Warning: " + M), Function.prototype.apply.call(console[g], console, he);
      }
    }
    var I = !1, x = !1, F = !1, T = !1, N = !1, W;
    W = Symbol.for("react.module.reference");
    function G(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || N || g === a || g === f || g === l || T || g === h || I || x || F || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === u || g.$$typeof === c || g.$$typeof === s || g.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === W || g.getModuleId !== void 0));
    }
    function j(g, M, z) {
      var oe = g.displayName;
      if (oe)
        return oe;
      var fe = M.displayName || M.name || "";
      return fe !== "" ? z + "(" + fe + ")" : z;
    }
    function Y(g) {
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
            var M = g;
            return Y(M) + ".Consumer";
          case c:
            var z = g;
            return Y(z._context) + ".Provider";
          case d:
            return j(g, g.render, "ForwardRef");
          case u:
            var oe = g.displayName || null;
            return oe !== null ? oe : H(g.type) || "Memo";
          case v: {
            var fe = g, he = fe._payload, le = fe._init;
            try {
              return H(le(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, re = 0, X, K, ue, ie, P, k, y;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function C() {
      {
        if (re === 0) {
          X = console.log, K = console.info, ue = console.warn, ie = console.error, P = console.group, k = console.groupCollapsed, y = console.groupEnd;
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
        re++;
      }
    }
    function R() {
      {
        if (re--, re === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, g, {
              value: X
            }),
            info: Z({}, g, {
              value: K
            }),
            warn: Z({}, g, {
              value: ue
            }),
            error: Z({}, g, {
              value: ie
            }),
            group: Z({}, g, {
              value: P
            }),
            groupCollapsed: Z({}, g, {
              value: k
            }),
            groupEnd: Z({}, g, {
              value: y
            })
          });
        }
        re < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var S = _.ReactCurrentDispatcher, A;
    function q(g, M, z) {
      {
        if (A === void 0)
          try {
            throw Error();
          } catch (fe) {
            var oe = fe.stack.trim().match(/\n( *(at )?)/);
            A = oe && oe[1] || "";
          }
        return `
` + A + g;
      }
    }
    var U = !1, V;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      V = new de();
    }
    function L(g, M) {
      if (!g || U)
        return "";
      {
        var z = V.get(g);
        if (z !== void 0)
          return z;
      }
      var oe;
      U = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = S.current, S.current = null, C();
      try {
        if (M) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (Et) {
              oe = Et;
            }
            Reflect.construct(g, [], le);
          } else {
            try {
              le.call();
            } catch (Et) {
              oe = Et;
            }
            g.call(le.prototype);
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
`), qe = oe.stack.split(`
`), Ee = se.length - 1, Se = qe.length - 1; Ee >= 1 && Se >= 0 && se[Ee] !== qe[Se]; )
            Se--;
          for (; Ee >= 1 && Se >= 0; Ee--, Se--)
            if (se[Ee] !== qe[Se]) {
              if (Ee !== 1 || Se !== 1)
                do
                  if (Ee--, Se--, Se < 0 || se[Ee] !== qe[Se]) {
                    var ot = `
` + se[Ee].replace(" at new ", " at ");
                    return g.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", g.displayName)), typeof g == "function" && V.set(g, ot), ot;
                  }
                while (Ee >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        U = !1, S.current = he, R(), Error.prepareStackTrace = fe;
      }
      var Xt = g ? g.displayName || g.name : "", Mo = Xt ? q(Xt) : "";
      return typeof g == "function" && V.set(g, Mo), Mo;
    }
    function B(g, M, z) {
      return L(g, !1);
    }
    function ee(g) {
      var M = g.prototype;
      return !!(M && M.isReactComponent);
    }
    function ae(g, M, z) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return L(g, ee(g));
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
          case d:
            return B(g.render);
          case u:
            return ae(g.type, M, z);
          case v: {
            var oe = g, fe = oe._payload, he = oe._init;
            try {
              return ae(he(fe), M, z);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Ie = {}, dt = _.ReactDebugCurrentFrame;
    function Fe(g) {
      if (g) {
        var M = g._owner, z = ae(g.type, g._source, M ? M.type : null);
        dt.setExtraStackFrame(z);
      } else
        dt.setExtraStackFrame(null);
    }
    function we(g, M, z, oe, fe) {
      {
        var he = Function.call.bind(me);
        for (var le in g)
          if (he(g, le)) {
            var se = void 0;
            try {
              if (typeof g[le] != "function") {
                var qe = Error((oe || "React class") + ": " + z + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              se = g[le](M, le, oe, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (Fe(fe), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", z, le, typeof se), Fe(null)), se instanceof Error && !(se.message in Ie) && (Ie[se.message] = !0, Fe(fe), D("Failed %s type: %s", z, se.message), Fe(null));
          }
      }
    }
    var Ve = Array.isArray;
    function Xe(g) {
      return Ve(g);
    }
    function $t(g) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, z = M && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return z;
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
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(g)), kt(g);
    }
    var Be = _.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ct, fn, nt;
    nt = {};
    function Vn(g) {
      if (me.call(g, "ref")) {
        var M = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Er(g) {
      if (me.call(g, "key")) {
        var M = Object.getOwnPropertyDescriptor(g, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Tr(g, M) {
      if (typeof g.ref == "string" && Be.current && M && Be.current.stateNode !== M) {
        var z = H(Be.current.type);
        nt[z] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Be.current.type), g.ref), nt[z] = !0);
      }
    }
    function Yn(g, M) {
      {
        var z = function() {
          Ct || (Ct = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function Sr(g, M) {
      {
        var z = function() {
          fn || (fn = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var zn = function(g, M, z, oe, fe, he, le) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: M,
        ref: z,
        props: le,
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
    function Cr(g, M, z, oe, fe) {
      {
        var he, le = {}, se = null, qe = null;
        z !== void 0 && (Lt(z), se = "" + z), Er(M) && (Lt(M.key), se = "" + M.key), Vn(M) && (qe = M.ref, Tr(M, fe));
        for (he in M)
          me.call(M, he) && !ft.hasOwnProperty(he) && (le[he] = M[he]);
        if (g && g.defaultProps) {
          var Ee = g.defaultProps;
          for (he in Ee)
            le[he] === void 0 && (le[he] = Ee[he]);
        }
        if (se || qe) {
          var Se = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          se && Yn(le, Se), qe && Sr(le, Se);
        }
        return zn(g, se, qe, fe, oe, Be.current, le);
      }
    }
    var pn = _.ReactCurrentOwner, Wn = _.ReactDebugCurrentFrame;
    function _e(g) {
      if (g) {
        var M = g._owner, z = ae(g.type, g._source, M ? M.type : null);
        Wn.setExtraStackFrame(z);
      } else
        Wn.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Me(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function pt() {
      {
        if (pn.current) {
          var g = H(pn.current.type);
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
          var M = g.fileName.replace(/^.*[\\\/]/, ""), z = g.lineNumber;
          return `

Check your code at ` + M + ":" + z + ".";
        }
        return "";
      }
    }
    var ze = {};
    function rt(g) {
      {
        var M = pt();
        if (!M) {
          var z = typeof g == "string" ? g : g.displayName || g.name;
          z && (M = `

Check the top-level render call using <` + z + ">.");
        }
        return M;
      }
    }
    function Ot(g, M) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var z = rt(M);
        if (ze[z])
          return;
        ze[z] = !0;
        var oe = "";
        g && g._owner && g._owner !== pn.current && (oe = " It was passed a child from " + H(g._owner.type) + "."), _e(g), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, oe), _e(null);
      }
    }
    function We(g, M) {
      {
        if (typeof g != "object")
          return;
        if (Xe(g))
          for (var z = 0; z < g.length; z++) {
            var oe = g[z];
            Me(oe) && Ot(oe, M);
          }
        else if (Me(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var fe = w(g);
          if (typeof fe == "function" && fe !== g.entries)
            for (var he = fe.call(g), le; !(le = he.next()).done; )
              Me(le.value) && Ot(le.value, M);
        }
      }
    }
    function jt(g) {
      {
        var M = g.type;
        if (M == null || typeof M == "string")
          return;
        var z;
        if (typeof M == "function")
          z = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === u))
          z = M.propTypes;
        else
          return;
        if (z) {
          var oe = H(M);
          we(z, g.props, "prop", oe, g);
        } else if (M.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var fe = H(M);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(g) {
      {
        for (var M = Object.keys(g.props), z = 0; z < M.length; z++) {
          var oe = M[z];
          if (oe !== "children" && oe !== "key") {
            _e(g), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), _e(null);
            break;
          }
        }
        g.ref !== null && (_e(g), D("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function Bt(g, M, z, oe, fe, he) {
      {
        var le = G(g);
        if (!le) {
          var se = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Ye(fe);
          qe ? se += qe : se += pt();
          var Ee;
          g === null ? Ee = "null" : Xe(g) ? Ee = "array" : g !== void 0 && g.$$typeof === t ? (Ee = "<" + (H(g.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, se);
        }
        var Se = Cr(g, M, z, fe, he);
        if (Se == null)
          return Se;
        if (le) {
          var ot = M.children;
          if (ot !== void 0)
            if (oe)
              if (Xe(ot)) {
                for (var Xt = 0; Xt < ot.length; Xt++)
                  We(ot[Xt], g);
                Object.freeze && Object.freeze(ot);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(ot, g);
        }
        return g === r ? Ft(Se) : jt(Se), Se;
      }
    }
    function Zt(g, M, z) {
      return Bt(g, M, z, !0);
    }
    function Un(g, M, z) {
      return Bt(g, M, z, !1);
    }
    var qt = Un, Vt = Zt;
    gn.Fragment = r, gn.jsx = qt, gn.jsxs = Vt;
  }()), gn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ss() : e.exports = Cs();
})(Ts);
const bt = Rn.Fragment, p = Rn.jsx, $ = Rn.jsxs;
var o = {}, Lo = {
  get exports() {
    return o;
  },
  set exports(e) {
    o = e;
  }
}, tr = {}, Ps = {
  get exports() {
    return tr;
  },
  set exports(e) {
    tr = e;
  }
}, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function Rs() {
  if (jo)
    return pe;
  jo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function E(x) {
    if (typeof x == "object" && x !== null) {
      var F = x.$$typeof;
      switch (F) {
        case t:
          switch (x = x.type, x) {
            case d:
            case f:
            case r:
            case i:
            case a:
            case u:
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
  return pe.AsyncMode = d, pe.ConcurrentMode = f, pe.ContextConsumer = s, pe.ContextProvider = c, pe.Element = t, pe.ForwardRef = l, pe.Fragment = r, pe.Lazy = m, pe.Memo = h, pe.Portal = n, pe.Profiler = i, pe.StrictMode = a, pe.Suspense = u, pe.isAsyncMode = function(x) {
    return I(x) || E(x) === d;
  }, pe.isConcurrentMode = I, pe.isContextConsumer = function(x) {
    return E(x) === s;
  }, pe.isContextProvider = function(x) {
    return E(x) === c;
  }, pe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, pe.isForwardRef = function(x) {
    return E(x) === l;
  }, pe.isFragment = function(x) {
    return E(x) === r;
  }, pe.isLazy = function(x) {
    return E(x) === m;
  }, pe.isMemo = function(x) {
    return E(x) === h;
  }, pe.isPortal = function(x) {
    return E(x) === n;
  }, pe.isProfiler = function(x) {
    return E(x) === i;
  }, pe.isStrictMode = function(x) {
    return E(x) === a;
  }, pe.isSuspense = function(x) {
    return E(x) === u;
  }, pe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === f || x === i || x === a || x === u || x === v || typeof x == "object" && x !== null && (x.$$typeof === m || x.$$typeof === h || x.$$typeof === c || x.$$typeof === s || x.$$typeof === l || x.$$typeof === w || x.$$typeof === _ || x.$$typeof === D || x.$$typeof === b);
  }, pe.typeOf = E, pe;
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
var Fo;
function Ds() {
  return Fo || (Fo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function E(L) {
      return typeof L == "string" || typeof L == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      L === r || L === f || L === i || L === a || L === u || L === v || typeof L == "object" && L !== null && (L.$$typeof === m || L.$$typeof === h || L.$$typeof === c || L.$$typeof === s || L.$$typeof === l || L.$$typeof === w || L.$$typeof === _ || L.$$typeof === D || L.$$typeof === b);
    }
    function I(L) {
      if (typeof L == "object" && L !== null) {
        var B = L.$$typeof;
        switch (B) {
          case t:
            var ee = L.type;
            switch (ee) {
              case d:
              case f:
              case r:
              case i:
              case a:
              case u:
                return ee;
              default:
                var ae = ee && ee.$$typeof;
                switch (ae) {
                  case s:
                  case l:
                  case m:
                  case h:
                  case c:
                    return ae;
                  default:
                    return B;
                }
            }
          case n:
            return B;
        }
      }
    }
    var x = d, F = f, T = s, N = c, W = t, G = l, j = r, Y = m, H = h, Z = n, re = i, X = a, K = u, ue = !1;
    function ie(L) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(L) || I(L) === d;
    }
    function P(L) {
      return I(L) === f;
    }
    function k(L) {
      return I(L) === s;
    }
    function y(L) {
      return I(L) === c;
    }
    function O(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function C(L) {
      return I(L) === l;
    }
    function R(L) {
      return I(L) === r;
    }
    function S(L) {
      return I(L) === m;
    }
    function A(L) {
      return I(L) === h;
    }
    function q(L) {
      return I(L) === n;
    }
    function U(L) {
      return I(L) === i;
    }
    function V(L) {
      return I(L) === a;
    }
    function de(L) {
      return I(L) === u;
    }
    ve.AsyncMode = x, ve.ConcurrentMode = F, ve.ContextConsumer = T, ve.ContextProvider = N, ve.Element = W, ve.ForwardRef = G, ve.Fragment = j, ve.Lazy = Y, ve.Memo = H, ve.Portal = Z, ve.Profiler = re, ve.StrictMode = X, ve.Suspense = K, ve.isAsyncMode = ie, ve.isConcurrentMode = P, ve.isContextConsumer = k, ve.isContextProvider = y, ve.isElement = O, ve.isForwardRef = C, ve.isFragment = R, ve.isLazy = S, ve.isMemo = A, ve.isPortal = q, ve.isProfiler = U, ve.isStrictMode = V, ve.isSuspense = de, ve.isValidElementType = E, ve.typeOf = I;
  }()), ve;
}
var Bo;
function ja() {
  return Bo || (Bo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Rs() : e.exports = Ds();
  }(Ps)), tr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pr, qo;
function Ns() {
  if (qo)
    return Pr;
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
  return Pr = a() ? Object.assign : function(i, c) {
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
  }, Pr;
}
var Rr, Vo;
function fo() {
  if (Vo)
    return Rr;
  Vo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rr = e, Rr;
}
var Dr, Yo;
function Fa() {
  return Yo || (Yo = 1, Dr = Function.call.bind(Object.prototype.hasOwnProperty)), Dr;
}
var Nr, zo;
function Is() {
  if (zo)
    return Nr;
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
  }, Nr = a, Nr;
}
var Ir, Wo;
function As() {
  if (Wo)
    return Ir;
  Wo = 1;
  var e = ja(), t = Ns(), n = fo(), r = Fa(), a = Is(), i = function() {
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
  return Ir = function(s, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function u(P) {
      var k = P && (f && P[f] || P[l]);
      if (typeof k == "function")
        return k;
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
      any: D(),
      arrayOf: E,
      element: I(),
      elementType: x(),
      instanceOf: F,
      node: G(),
      objectOf: N,
      oneOf: T,
      oneOfType: W,
      shape: Y,
      exact: H
    };
    function m(P, k) {
      return P === k ? P !== 0 || 1 / P === 1 / k : P !== P && k !== k;
    }
    function b(P, k) {
      this.message = P, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function w(P) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, y = 0;
      function O(R, S, A, q, U, V, de) {
        if (q = q || v, V = V || A, de !== n) {
          if (d) {
            var L = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw L.name = "Invariant Violation", L;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var B = q + ":" + A;
            !k[B] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[B] = !0, y++);
          }
        }
        return S[A] == null ? R ? S[A] === null ? new b("The " + U + " `" + V + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new b("The " + U + " `" + V + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : P(S, A, q, U, V);
      }
      var C = O.bind(null, !1);
      return C.isRequired = O.bind(null, !0), C;
    }
    function _(P) {
      function k(y, O, C, R, S, A) {
        var q = y[O], U = X(q);
        if (U !== P) {
          var V = K(q);
          return new b(
            "Invalid " + R + " `" + S + "` of type " + ("`" + V + "` supplied to `" + C + "`, expected ") + ("`" + P + "`."),
            { expectedType: P }
          );
        }
        return null;
      }
      return w(k);
    }
    function D() {
      return w(c);
    }
    function E(P) {
      function k(y, O, C, R, S) {
        if (typeof P != "function")
          return new b("Property `" + S + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var A = y[O];
        if (!Array.isArray(A)) {
          var q = X(A);
          return new b("Invalid " + R + " `" + S + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected an array."));
        }
        for (var U = 0; U < A.length; U++) {
          var V = P(A, U, C, R, S + "[" + U + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return w(k);
    }
    function I() {
      function P(k, y, O, C, R) {
        var S = k[y];
        if (!s(S)) {
          var A = X(S);
          return new b("Invalid " + C + " `" + R + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(P);
    }
    function x() {
      function P(k, y, O, C, R) {
        var S = k[y];
        if (!e.isValidElementType(S)) {
          var A = X(S);
          return new b("Invalid " + C + " `" + R + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(P);
    }
    function F(P) {
      function k(y, O, C, R, S) {
        if (!(y[O] instanceof P)) {
          var A = P.name || v, q = ie(y[O]);
          return new b("Invalid " + R + " `" + S + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return w(k);
    }
    function T(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function k(y, O, C, R, S) {
        for (var A = y[O], q = 0; q < P.length; q++)
          if (m(A, P[q]))
            return null;
        var U = JSON.stringify(P, function(de, L) {
          var B = K(L);
          return B === "symbol" ? String(L) : L;
        });
        return new b("Invalid " + R + " `" + S + "` of value `" + String(A) + "` " + ("supplied to `" + C + "`, expected one of " + U + "."));
      }
      return w(k);
    }
    function N(P) {
      function k(y, O, C, R, S) {
        if (typeof P != "function")
          return new b("Property `" + S + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var A = y[O], q = X(A);
        if (q !== "object")
          return new b("Invalid " + R + " `" + S + "` of type " + ("`" + q + "` supplied to `" + C + "`, expected an object."));
        for (var U in A)
          if (r(A, U)) {
            var V = P(A, U, C, R, S + "." + U, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return w(k);
    }
    function W(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var k = 0; k < P.length; k++) {
        var y = P[k];
        if (typeof y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(y) + " at index " + k + "."
          ), c;
      }
      function O(C, R, S, A, q) {
        for (var U = [], V = 0; V < P.length; V++) {
          var de = P[V], L = de(C, R, S, A, q, n);
          if (L == null)
            return null;
          L.data && r(L.data, "expectedType") && U.push(L.data.expectedType);
        }
        var B = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new b("Invalid " + A + " `" + q + "` supplied to " + ("`" + S + "`" + B + "."));
      }
      return w(O);
    }
    function G() {
      function P(k, y, O, C, R) {
        return Z(k[y]) ? null : new b("Invalid " + C + " `" + R + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return w(P);
    }
    function j(P, k, y, O, C) {
      return new b(
        (P || "React class") + ": " + k + " type `" + y + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function Y(P) {
      function k(y, O, C, R, S) {
        var A = y[O], q = X(A);
        if (q !== "object")
          return new b("Invalid " + R + " `" + S + "` of type `" + q + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var U in P) {
          var V = P[U];
          if (typeof V != "function")
            return j(C, R, S, U, K(V));
          var de = V(A, U, C, R, S + "." + U, n);
          if (de)
            return de;
        }
        return null;
      }
      return w(k);
    }
    function H(P) {
      function k(y, O, C, R, S) {
        var A = y[O], q = X(A);
        if (q !== "object")
          return new b("Invalid " + R + " `" + S + "` of type `" + q + "` " + ("supplied to `" + C + "`, expected `object`."));
        var U = t({}, y[O], P);
        for (var V in U) {
          var de = P[V];
          if (r(P, V) && typeof de != "function")
            return j(C, R, S, V, K(de));
          if (!de)
            return new b(
              "Invalid " + R + " `" + S + "` key `" + V + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(y[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var L = de(A, V, C, R, S + "." + V, n);
          if (L)
            return L;
        }
        return null;
      }
      return w(k);
    }
    function Z(P) {
      switch (typeof P) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !P;
        case "object":
          if (Array.isArray(P))
            return P.every(Z);
          if (P === null || s(P))
            return !0;
          var k = u(P);
          if (k) {
            var y = k.call(P), O;
            if (k !== P.entries) {
              for (; !(O = y.next()).done; )
                if (!Z(O.value))
                  return !1;
            } else
              for (; !(O = y.next()).done; ) {
                var C = O.value;
                if (C && !Z(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(P, k) {
      return P === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function X(P) {
      var k = typeof P;
      return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : re(k, P) ? "symbol" : k;
    }
    function K(P) {
      if (typeof P > "u" || P === null)
        return "" + P;
      var k = X(P);
      if (k === "object") {
        if (P instanceof Date)
          return "date";
        if (P instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function ue(P) {
      var k = K(P);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function ie(P) {
      return !P.constructor || !P.constructor.name ? v : P.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Ir;
}
var Ar, Uo;
function Ms() {
  if (Uo)
    return Ar;
  Uo = 1;
  var e = fo();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ar = function() {
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
  }, Ar;
}
if (process.env.NODE_ENV !== "production") {
  var $s = ja(), ks = !0;
  Lo.exports = As()($s.isElement, ks);
} else
  Lo.exports = Ms()();
const Ls = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ge = (e, t) => Re.toArray(e).filter((n) => t.indexOf(Ls(n)) !== -1), js = ({ children: e, allowMultiple: t, defaultIndex: n, allowDifferentChildren: r }) => {
  const [a, i] = te(), c = (d) => {
    t ? a.includes(d) ? i(a.filter((f) => f !== d)) : i([...a, d]) : i(d);
  };
  Q(() => (i(t ? n || [] : n ?? null), () => {
    i(null);
  }), [t, n]);
  const s = Re.map(e, (d, f) => ct(d) ? Pe(d, { ...d.props, id: f, isOpen: a, onToggle: c }) : null);
  return /* @__PURE__ */ p("div", { children: r ? s : Ge(s, ["AccordionItem"]) });
};
js.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  allowDifferentChildren: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
var Qr = {}, Fs = {
  get exports() {
    return Qr;
  },
  set exports(e) {
    Qr = e;
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
            for (var d in i)
              t.call(i, d) && i[d] && r.push(d);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Fs);
const ne = Qr, ye = (e) => (t, n, r) => {
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
  __TYPE: d,
  ...f
}) => /* @__PURE__ */ $(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: ne({
      [`${nr["c-accordion__button"]} u-flex`]: !s,
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
  __TYPE: ye("AccordionButton")
};
Ba.defaultProps = {
  __TYPE: "AccordionButton"
};
const qa = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a, defaultStyle: i, allowDifferentChildren: c }) => {
  const s = () => r(t), d = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, f = Re.map(e, (l) => ct(l) ? l.props.__TYPE === "AccordionButton" ? Pe(l, { ...l.props, id: t, onExpanded: s, isExpanded: d() }) : Pe(l, { ...l.props, id: t, isExpanded: d() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: ne({
        [nr["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: c ? f : Ge(f, ["AccordionButton", "AccordionPanel"])
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
  __TYPE: ye("AccordionItem")
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
    className: ne(nr["c-accordion__panel"], {
      [r]: r
    }),
    ...c,
    children: /* @__PURE__ */ p(
      "div",
      {
        className: ne({
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
  __TYPE: ye("AccordionPanel")
};
Va.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Gn = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Bs = /\w+\.svg/gi, Ce = ({
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
  const f = t && t.match(Bs).toString().replace(/.svg/gi, ""), l = `${t}#${f}`;
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
      ...d,
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
  __TYPE: ye("Icon")
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
    disabled: d,
    onClick: f,
    children: l,
    addClass: u,
    defaultStyle: v,
    ...h
  } = e;
  return /* @__PURE__ */ $(
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
const qs = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), Ya = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || qs, [a, i] = te(!1), [c, s] = te(null);
  return Q(() => {
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
}), za = ({
  src: e,
  format: t,
  a11y: n,
  size: r,
  type: a,
  addClass: i,
  defaultStyle: c,
  ...s
}) => {
  const [d, f] = te(!1), l = J(), u = J(), [v, h] = Ya(), m = (b) => {
    l.current && (l.current.paused ? l.current.play() : l.current.pause(), f(!d));
  };
  return Q(() => {
    (d || !l.current.paused) && !h && (f(!d), l.current.pause(), l.current.currentTime = 0);
  }, [h]), ur(() => {
    const b = u.current || l.current;
    b && v(b);
  }, [l, u]), a === Vs.BAR ? /* @__PURE__ */ p(
    "audio",
    {
      ref: l,
      preload: "metadata",
      controls: !0,
      className: ne({
        [Kt["c-audio"]]: !c,
        [Kt[`c-audio--${r}`]]: r,
        [i]: i
      }),
      "data-a11y": n,
      ...s,
      children: /* @__PURE__ */ p("source", { src: e, type: t })
    }
  ) : /* @__PURE__ */ $(bt, { children: [
    /* @__PURE__ */ p(
      "audio",
      {
        ref: l,
        src: e,
        type: t,
        onEnded: () => f(!d),
        className: Kt["c-audio--hidden"]
      }
    ),
    /* @__PURE__ */ p(
      Wt,
      {
        ref: u,
        label: d ? "Pausar" : "Reproduccir",
        "data-a11y": n,
        addClass: ne({
          [Kt["c-button"]]: !c,
          [Kt["is-button-playing"]]: d,
          [Kt["is-button-paused"]]: !d,
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
za.defaultProps = {
  a11y: !1,
  type: "Bar"
};
za.propTypes = {
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
var Qs = Ks, Js = Array.isArray, el = Js, Ho = po, Wa = Object.prototype, tl = Wa.hasOwnProperty, nl = Wa.toString, bn = Ho ? Ho.toStringTag : void 0;
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
function Ua(e) {
  if (typeof e == "string")
    return e;
  if (Ol(e))
    return xl(e, Ua) + "";
  if (El(e))
    return Qo ? Qo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Tl ? "-0" : t;
}
var Sl = Ua, Cl = Sl;
function Pl(e) {
  return e == null ? "" : Cl(e);
}
var Rl = Pl, Dl = Rl, Nl = 0;
function Il(e) {
  var t = ++Nl;
  return Dl(e) + t;
}
var Ha = Il;
const Qt = {
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
  ), n = /* @__PURE__ */ p(
    "path",
    {
      id: "check",
      d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
    }
  ), r = /* @__PURE__ */ p(
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
}, Ga = _t(
  ({
    id: e,
    name: t,
    type: n,
    label: r,
    state: a,
    value: i,
    addClass: c,
    isDisabled: s,
    defaultChecked: d,
    onChange: f,
    __TYPE: l,
    inherit: u,
    ...v
  }, h) => {
    const m = xe(() => e || Ha(`ui-${n}`), [e, n]), b = Object.freeze(Al(n)), w = ({ target: _ }) => {
      if (f) {
        if (_.checked) {
          f({ id: _.id, value: _.value });
          return;
        }
        f({ id: _.id, value: "" });
      }
    };
    return /* @__PURE__ */ $(
      "label",
      {
        htmlFor: m,
        className: `${Qt["c-input"]} u-flex ${c ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": l,
        ...!u && { ...v },
        children: [
          /* @__PURE__ */ $("div", { className: Qt["c-input__box"], children: [
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
                ...u && { ...v },
                ...d && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p(
              "div",
              {
                className: `${Qt["c-input__icon"]} ${d ? Qt["c-input-defaultChecked"] : ""} `,
                children: b[a] && /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "48",
                    height: "48",
                    viewBox: "0 0 48 48",
                    children: b[a]
                  }
                ) })
              }
            )
          ] }),
          /* @__PURE__ */ p("span", { className: Qt["c-input__label"], children: r })
        ]
      }
    );
  }
);
Ga.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
Ga.propTypes = {
  id: o.string,
  name: o.string,
  type: o.oneOf(["radio", "checkbox"]),
  label: o.string.isRequired,
  state: o.oneOf(["normal", "right", "wrong"]),
  value: o.oneOfType([
    o.string,
    o.number,
    o.bool
  ]),
  addClass: o.string,
  isDisabled: o.bool,
  defaultChecked: o.bool,
  inherit: o.bool,
  onChange: o.func,
  __TYPE: ye("CheckBox")
};
const Ml = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = te([]), c = J(), s = (u) => {
    c.current = u || "";
  }, d = (u) => c.current === "radio" ? [{ ...u }] : a.filter((h) => h.id === u.id).length ? [...a.filter((h) => h.id !== u.id)] : [...a, { ...u }], f = (u) => {
    const v = d(u);
    n && n(v), i(v);
  }, l = Re.map(t, (u) => ct(u) ? u.props.__TYPE === "CheckBox" ? (u.props.type && s(u.props.type), Pe(u, { ...u.props, onChange: f })) : u : null);
  return /* @__PURE__ */ $("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Ge(l, ["CheckBox"]) })
  ] });
};
Ml.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const $l = "_col_wu095_1", kl = {
  col: $l
}, Ll = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${kl.col} ${e ?? ""}`, ...t }));
Ll.propTypes = {
  addClass: o.string
};
const jl = {
  "c-content": "_c-content_u325r_1"
}, Fl = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "section",
  {
    className: ne({
      [jl["c-content"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
Fl.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  defaultStyle: o.bool,
  addClass: o.string
};
const dr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function cn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function vo(e) {
  return "nodeType" in e;
}
function Ze(e) {
  var t, n;
  return e ? cn(e) ? e : vo(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ho(e) {
  const {
    Document: t
  } = Ze(e);
  return e instanceof t;
}
function Ln(e) {
  return cn(e) ? !1 : e instanceof Ze(e).HTMLElement;
}
function Bl(e) {
  return e instanceof Ze(e).SVGElement;
}
function un(e) {
  return e ? cn(e) ? e.document : vo(e) ? ho(e) ? e : Ln(e) ? e.ownerDocument : document : document : document;
}
const Tt = dr ? ur : Q;
function go(e) {
  const t = J(e);
  return Tt(() => {
    t.current = e;
  }), je(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function ql() {
  const e = J(null), t = je((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = je(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Dn(e, t) {
  t === void 0 && (t = [e]);
  const n = J(e);
  return Tt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function jn(e, t) {
  const n = J();
  return xe(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function rr(e) {
  const t = go(e), n = J(null), r = je(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Jr(e) {
  const t = J();
  return Q(() => {
    t.current = e;
  }, [e]), t.current;
}
let Mr = {};
function fr(e, t) {
  return xe(() => {
    if (t)
      return t;
    const n = Mr[e] == null ? 0 : Mr[e] + 1;
    return Mr[e] = n, e + "-" + n;
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
const tn = /* @__PURE__ */ Za(1), or = /* @__PURE__ */ Za(-1);
function Vl(e) {
  return "clientX" in e && "clientY" in e;
}
function Xa(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ze(e.target);
  return t && e instanceof t;
}
function Yl(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ze(e.target);
  return t && e instanceof t;
}
function eo(e) {
  if (Yl(e)) {
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
  return Vl(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const to = /* @__PURE__ */ Object.freeze({
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
        return [to.Translate.toString(e), to.Scale.toString(e)].join(" ");
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
function zl(e) {
  return e.matches(Jo) ? e : e.querySelector(Jo);
}
const Wl = {
  display: "none"
};
function Ul(e) {
  let {
    id: t,
    value: n
  } = e;
  return Le.createElement("div", {
    id: t,
    style: Wl
  }, n);
}
const Hl = {
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
function Gl(e) {
  let {
    id: t,
    announcement: n
  } = e;
  return Le.createElement("div", {
    id: t,
    style: Hl,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, n);
}
function Zl() {
  const [e, t] = te("");
  return {
    announce: je((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Ka = /* @__PURE__ */ ut(null);
function Xl(e) {
  const t = Te(Ka);
  Q(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Kl() {
  const [e] = te(() => /* @__PURE__ */ new Set()), t = je((r) => (e.add(r), () => e.delete(r)), [e]);
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
const Ql = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Jl = {
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
function ec(e) {
  let {
    announcements: t = Jl,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: a = Ql
  } = e;
  const {
    announce: i,
    announcement: c
  } = Zl(), s = fr("DndLiveRegion"), [d, f] = te(!1);
  if (Q(() => {
    f(!0);
  }, []), Xl(xe(() => ({
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
  const l = Le.createElement(Le.Fragment, null, Le.createElement(Ul, {
    id: r,
    value: a.draggable
  }), Le.createElement(Gl, {
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
function $r(e, t) {
  return xe(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function tc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return xe(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const gt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function nc(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
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
  return n - r;
}
function oc(e, t) {
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
function Qa(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
const ac = (e) => {
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
      const f = ea(d), l = a.reduce((v, h, m) => v + nc(f[m], h), 0), u = Number((l / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: c,
          value: u
        }
      });
    }
  }
  return i.sort(rc);
};
function ic(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), c = a - r, s = i - n;
  if (r < a && n < i) {
    const d = t.width * t.height, f = e.width * e.height, l = c * s, u = l / (d + f - l);
    return Number(u.toFixed(4));
  }
  return 0;
}
const sc = (e) => {
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
      const d = ic(s, t);
      d > 0 && a.push({
        id: c,
        data: {
          droppableContainer: i,
          value: d
        }
      });
    }
  }
  return a.sort(oc);
};
function lc(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Ja(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : gt;
}
function cc(e) {
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
const uc = /* @__PURE__ */ cc(1);
function dc(e) {
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
function fc(e, t, n) {
  const r = dc(t);
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
const pc = {
  ignoreTransform: !1
};
function Fn(e, t) {
  t === void 0 && (t = pc);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: l
    } = Ze(e).getComputedStyle(e);
    f && (n = fc(n, f, l));
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
  return Fn(e, {
    ignoreTransform: !0
  });
}
function vc(e) {
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
function hc(e, t) {
  return t === void 0 && (t = Ze(e).getComputedStyle(e)), t.position === "fixed";
}
function gc(e, t) {
  t === void 0 && (t = Ze(e).getComputedStyle(e));
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
    if (!Ln(a) || Bl(a) || n.includes(a))
      return n;
    const i = Ze(e).getComputedStyle(a);
    return a !== e && gc(a, i) && n.push(a), hc(a, i) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function ei(e) {
  const [t] = mo(e, 1);
  return t ?? null;
}
function kr(e) {
  return !dr || !e ? null : cn(e) ? e : vo(e) ? ho(e) || e === un(e).scrollingElement ? window : Ln(e) ? e : null : null;
}
function ti(e) {
  return cn(e) ? e.scrollX : e.scrollLeft;
}
function ni(e) {
  return cn(e) ? e.scrollY : e.scrollTop;
}
function no(e) {
  return {
    x: ti(e),
    y: ni(e)
  };
}
var Ne;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ne || (Ne = {}));
function ri(e) {
  return !dr || !e ? !1 : e === document.scrollingElement;
}
function oi(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ri(e) ? {
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
const mc = {
  x: 0.2,
  y: 0.2
};
function bc(e, t, n, r, a) {
  let {
    top: i,
    left: c,
    right: s,
    bottom: d
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = mc);
  const {
    isTop: f,
    isBottom: l,
    isLeft: u,
    isRight: v
  } = oi(e), h = {
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
function yc(e) {
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
function ai(e) {
  return e.reduce((t, n) => tn(t, no(n)), gt);
}
function _c(e) {
  return e.reduce((t, n) => t + ti(n), 0);
}
function wc(e) {
  return e.reduce((t, n) => t + ni(n), 0);
}
function xc(e, t) {
  if (t === void 0 && (t = Fn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: a,
    right: i
  } = t(e);
  ei(e) && (a <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Oc = [["x", ["left", "right"], _c], ["y", ["top", "bottom"], wc]];
class bo {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = mo(n), a = ai(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, c, s] of Oc)
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
function Ec(e) {
  const {
    EventTarget: t
  } = Ze(e);
  return e instanceof t ? e : un(e);
}
function Lr(e, t) {
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
function Tc(e) {
  e.stopPropagation();
}
var ce;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(ce || (ce = {}));
const ii = {
  start: [ce.Space, ce.Enter],
  cancel: [ce.Esc],
  end: [ce.Space, ce.Enter]
}, Sc = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ce.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ce.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ce.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ce.Up:
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
    this.props = t, this.listeners = new On(un(n)), this.windowListeners = new On(Ze(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(it.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && xc(r), n(gt);
  }
  handleKeyDown(t) {
    if (Xa(t)) {
      const {
        active: n,
        context: r,
        options: a
      } = this.props, {
        keyboardCodes: i = ii,
        coordinateGetter: c = Sc,
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
        const v = or(u, l), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: m
        } = r.current;
        for (const b of m) {
          const w = t.code, {
            isTop: _,
            isRight: D,
            isLeft: E,
            isBottom: I,
            maxScroll: x,
            minScroll: F
          } = oi(b), T = yc(b), N = {
            x: Math.min(w === ce.Right ? T.right - T.width / 2 : T.right, Math.max(w === ce.Right ? T.left : T.left + T.width / 2, u.x)),
            y: Math.min(w === ce.Down ? T.bottom - T.height / 2 : T.bottom, Math.max(w === ce.Down ? T.top : T.top + T.height / 2, u.y))
          }, W = w === ce.Right && !D || w === ce.Left && !E, G = w === ce.Down && !I || w === ce.Up && !_;
          if (W && N.x !== u.x) {
            const j = b.scrollLeft + v.x, Y = w === ce.Right && j <= x.x || w === ce.Left && j >= F.x;
            if (Y && !v.y) {
              b.scrollTo({
                left: j,
                behavior: s
              });
              return;
            }
            Y ? h.x = b.scrollLeft - j : h.x = w === ce.Right ? b.scrollLeft - x.x : b.scrollLeft - F.x, h.x && b.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (G && N.y !== u.y) {
            const j = b.scrollTop + v.y, Y = w === ce.Down && j <= x.y || w === ce.Up && j >= F.y;
            if (Y && !v.x) {
              b.scrollTo({
                top: j,
                behavior: s
              });
              return;
            }
            Y ? h.y = b.scrollTop - j : h.y = w === ce.Down ? b.scrollTop - x.y : b.scrollTop - F.y, h.y && b.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, tn(or(u, this.referenceCoordinates), h));
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
      keyboardCodes: r = ii,
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
    r === void 0 && (r = Ec(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: c
    } = i;
    this.props = t, this.events = n, this.document = un(c), this.documentListeners = new On(this.document), this.listeners = new On(r), this.windowListeners = new On(Ze(c)), this.initialCoordinates = (a = eo(i)) != null ? a : gt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    t && (this.activated = !0, this.documentListeners.add(it.Click, Tc, {
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
    const d = (n = eo(t)) != null ? n : gt, f = or(a, d);
    if (!r && s) {
      if (oa(s))
        return Lr(f, s.tolerance) ? this.handleCancel() : void 0;
      if (ra(s))
        return s.tolerance != null && Lr(f, s.tolerance) ? this.handleCancel() : Lr(f, s.distance) ? this.handleStart() : void 0;
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
    t.code === ce.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Cc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class si extends _o {
  constructor(t) {
    const {
      event: n
    } = t, r = un(n.target);
    super(t, Cc, r);
  }
}
si.activators = [{
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
const Pc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ro;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(ro || (ro = {}));
class li extends _o {
  constructor(t) {
    super(t, Pc, un(t.event.target));
  }
}
li.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === ro.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const jr = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class ci extends _o {
  constructor(t) {
    super(t, jr);
  }
  static setup() {
    return window.addEventListener(jr.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(jr.move.name, t);
    };
    function t() {
    }
  }
}
ci.activators = [{
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
function Rc(e) {
  let {
    acceleration: t,
    activator: n = En.Pointer,
    canScroll: r,
    draggingRect: a,
    enabled: i,
    interval: c = 5,
    order: s = ir.TreeOrder,
    pointerCoordinates: d,
    scrollableAncestors: f,
    scrollableAncestorRects: l,
    delta: u,
    threshold: v
  } = e;
  const h = Nc({
    delta: u,
    disabled: !i
  }), [m, b] = ql(), w = J({
    x: 0,
    y: 0
  }), _ = J({
    x: 0,
    y: 0
  }), D = xe(() => {
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
  }, [n, a, d]), E = J(null), I = je(() => {
    const F = E.current;
    if (!F)
      return;
    const T = w.current.x * _.current.x, N = w.current.y * _.current.y;
    F.scrollBy(T, N);
  }, []), x = xe(() => s === ir.TreeOrder ? [...f].reverse() : f, [s, f]);
  Q(
    () => {
      if (!i || !f.length || !D) {
        b();
        return;
      }
      for (const F of x) {
        if ((r == null ? void 0 : r(F)) === !1)
          continue;
        const T = f.indexOf(F), N = l[T];
        if (!N)
          continue;
        const {
          direction: W,
          speed: G
        } = bc(F, N, D, t, v);
        for (const j of ["x", "y"])
          h[j][W[j]] || (G[j] = 0, W[j] = 0);
        if (G.x > 0 || G.y > 0) {
          b(), E.current = F, m(I, c), w.current = G, _.current = W;
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
      JSON.stringify(D),
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
const Dc = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function Nc(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Jr(t);
  return jn((a) => {
    if (n || !r || !a)
      return Dc;
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
function Ic(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return jn((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function Ac(e, t) {
  return xe(() => e.reduce((n, r) => {
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
var oo;
(function(e) {
  e.Optimized = "optimized";
})(oo || (oo = {}));
const aa = /* @__PURE__ */ new Map();
function Mc(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, c] = te(null), {
    frequency: s,
    measure: d,
    strategy: f
  } = a, l = J(e), u = w(), v = Dn(u), h = je(function(_) {
    _ === void 0 && (_ = []), !v.current && c((D) => D === null ? _ : D.concat(_.filter((E) => !D.includes(E))));
  }, [v]), m = J(null), b = jn((_) => {
    if (u && !n)
      return aa;
    if (!_ || _ === aa || l.current !== e || i != null) {
      const D = /* @__PURE__ */ new Map();
      for (let E of e) {
        if (!E)
          continue;
        if (i && i.length > 0 && !i.includes(E.id) && E.rect.current) {
          D.set(E.id, E.rect.current);
          continue;
        }
        const I = E.node.current, x = I ? new bo(d(I), I) : null;
        E.rect.current = x, x && D.set(E.id, x);
      }
      return D;
    }
    return _;
  }, [e, i, n, u, d]);
  return Q(() => {
    l.current = e;
  }, [e]), Q(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), Q(
    () => {
      i && i.length > 0 && c(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), Q(
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
function ui(e, t) {
  return jn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function $c(e, t) {
  return ui(e, t);
}
function kc(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = go(t), a = xe(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return Q(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function pr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = go(t), a = xe(
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
  return Q(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Lc(e) {
  return new bo(Fn(e), e);
}
function ia(e, t, n) {
  t === void 0 && (t = Lc);
  const [r, a] = uo(s, null), i = kc({
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
  }), c = pr({
    callback: a
  });
  return Tt(() => {
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
function jc(e) {
  const t = ui(e);
  return Ja(e, t);
}
const sa = [];
function Fc(e) {
  const t = J(e), n = jn((r) => e ? r && r !== sa && e && t.current && e.parentNode === t.current.parentNode ? r : mo(e) : sa, [e]);
  return Q(() => {
    t.current = e;
  }, [e]), n;
}
function Bc(e) {
  const [t, n] = te(null), r = J(e), a = je((i) => {
    const c = kr(i.target);
    c && n((s) => s ? (s.set(c, no(c)), new Map(s)) : null);
  }, []);
  return Q(() => {
    const i = r.current;
    if (e !== i) {
      c(i);
      const s = e.map((d) => {
        const f = kr(d);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, no(f)]) : null;
      }).filter((d) => d != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      c(e), c(i);
    };
    function c(s) {
      s.forEach((d) => {
        const f = kr(d);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), xe(() => e.length ? t ? Array.from(t.values()).reduce((i, c) => tn(i, c), gt) : ai(e) : gt, [e, t]);
}
function la(e, t) {
  t === void 0 && (t = []);
  const n = J(null);
  return Q(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), Q(() => {
    const r = e !== gt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? or(e, n.current) : gt;
}
function qc(e) {
  Q(
    () => {
      if (!dr)
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
function Vc(e, t) {
  return xe(() => e.reduce((n, r) => {
    let {
      eventName: a,
      handler: i
    } = r;
    return n[a] = (c) => {
      i(c, t);
    }, n;
  }, {}), [e, t]);
}
function di(e) {
  return xe(() => e ? vc(e) : null, [e]);
}
const Fr = [];
function Yc(e, t) {
  t === void 0 && (t = Fn);
  const [n] = e, r = di(n ? Ze(n) : null), [a, i] = uo(s, Fr), c = pr({
    callback: i
  });
  return e.length > 0 && a === Fr && i(), Tt(() => {
    e.length ? e.forEach((d) => c == null ? void 0 : c.observe(d)) : (c == null || c.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((d) => ri(d) ? r : new bo(t(d), d)) : Fr;
  }
}
function zc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Ln(t) ? t : e;
}
function Wc(e) {
  let {
    measure: t
  } = e;
  const [n, r] = te(null), a = je((f) => {
    for (const {
      target: l
    } of f)
      if (Ln(l)) {
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
  }, [t]), i = pr({
    callback: a
  }), c = je((f) => {
    const l = zc(f);
    i == null || i.disconnect(), l && (i == null || i.observe(l)), r(l ? t(l) : null);
  }, [t, i]), [s, d] = rr(c);
  return xe(() => ({
    nodeRef: s,
    rect: n,
    setRef: d
  }), [n, s, d]);
}
const Uc = [{
  sensor: si,
  options: {}
}, {
  sensor: yo,
  options: {}
}], Hc = {
  current: {}
}, Kn = {
  draggable: {
    measure: ta
  },
  droppable: {
    measure: ta,
    strategy: Nn.WhileDragging,
    frequency: oo.Optimized
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
const Gc = {
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
}, Zc = {
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
}, vr = /* @__PURE__ */ ut(Zc), Xc = /* @__PURE__ */ ut(Gc);
function Kc() {
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
function Qc(e, t) {
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
function Jc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: a
  } = Te(vr), i = Jr(r), c = Jr(n == null ? void 0 : n.id);
  return Q(() => {
    if (!t && !r && i && c != null) {
      if (!Xa(i) || document.activeElement === i.target)
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
          const u = zl(l);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, a, c, i]), null;
}
function eu(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...r
  }), n) : n;
}
function tu(e) {
  return xe(
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
function nu(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: a = !0
  } = e;
  const i = J(!1), {
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
    const l = n(f), u = Ja(l, r);
    if (c || (u.x = 0), s || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const v = ei(f);
      v && v.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, c, s, r, n]);
}
const fi = /* @__PURE__ */ ut({
  ...gt,
  scaleX: 1,
  scaleY: 1
});
var Nt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Nt || (Nt = {}));
const ru = /* @__PURE__ */ $a(function(t) {
  var n, r, a, i;
  let {
    id: c,
    accessibility: s,
    autoScroll: d = !0,
    children: f,
    sensors: l = Uc,
    collisionDetection: u = sc,
    measuring: v,
    modifiers: h,
    ...m
  } = t;
  const b = uo(Qc, void 0, Kc), [w, _] = b, [D, E] = Kl(), [I, x] = te(Nt.Uninitialized), F = I === Nt.Initialized, {
    draggable: {
      active: T,
      nodes: N,
      translate: W
    },
    droppable: {
      containers: G
    }
  } = w, j = T ? N.get(T) : null, Y = J({
    initial: null,
    translated: null
  }), H = xe(() => {
    var _e;
    return T != null ? {
      id: T,
      // It's possible for the active node to unmount while dragging
      data: (_e = j == null ? void 0 : j.data) != null ? _e : Hc,
      rect: Y
    } : null;
  }, [T, j]), Z = J(null), [re, X] = te(null), [K, ue] = te(null), ie = Dn(m, Object.values(m)), P = fr("DndDescribedBy", c), k = xe(() => G.getEnabled(), [G]), y = tu(v), {
    droppableRects: O,
    measureDroppableContainers: C,
    measuringScheduled: R
  } = Mc(k, {
    dragging: F,
    dependencies: [W.x, W.y],
    config: y.droppable
  }), S = Ic(N, T), A = xe(() => K ? eo(K) : null, [K]), q = Wn(), U = $c(S, y.draggable.measure);
  nu({
    activeNode: T ? N.get(T) : null,
    config: q.layoutShiftCompensation,
    initialRect: U,
    measure: y.draggable.measure
  });
  const V = ia(S, y.draggable.measure, U), de = ia(S ? S.parentElement : null), L = J({
    activatorEvent: null,
    active: null,
    activeNode: S,
    collisionRect: null,
    collisions: null,
    droppableRects: O,
    draggableNodes: N,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: G,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), B = G.getNodeFor((n = L.current.over) == null ? void 0 : n.id), ee = Wc({
    measure: y.dragOverlay.measure
  }), ae = (r = ee.nodeRef.current) != null ? r : S, me = F ? (a = ee.rect) != null ? a : V : null, Ie = !!(ee.nodeRef.current && ee.rect), dt = jc(Ie ? null : V), Fe = di(ae ? Ze(ae) : null), we = Fc(F ? B ?? S : null), Ve = Yc(we), Xe = eu(h, {
    transform: {
      x: W.x - dt.x,
      y: W.y - dt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: K,
    active: H,
    activeNodeRect: V,
    containerNodeRect: de,
    draggingNodeRect: me,
    over: L.current.over,
    overlayNodeRect: ee.rect,
    scrollableAncestors: we,
    scrollableAncestorRects: Ve,
    windowRect: Fe
  }), $t = A ? tn(A, W) : null, St = Bc(we), kt = la(St), Lt = la(St, [V]), Be = tn(Xe, kt), ft = me ? uc(me, Xe) : null, Ct = H && ft ? u({
    active: H,
    collisionRect: ft,
    droppableRects: O,
    droppableContainers: k,
    pointerCoordinates: $t
  }) : null, fn = Qa(Ct, "id"), [nt, Vn] = te(null), Er = Ie ? Xe : tn(Xe, Lt), Tr = lc(Er, (i = nt == null ? void 0 : nt.rect) != null ? i : null, V), Yn = je(
    (_e, Ae) => {
      let {
        sensor: Me,
        options: pt
      } = Ae;
      if (Z.current == null)
        return;
      const Ye = N.get(Z.current);
      if (!Ye)
        return;
      const ze = _e.nativeEvent, rt = new Me({
        active: Z.current,
        activeNode: Ye,
        event: ze,
        options: pt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: L,
        onStart(We) {
          const jt = Z.current;
          if (jt == null)
            return;
          const Ft = N.get(jt);
          if (!Ft)
            return;
          const {
            onDragStart: Bt
          } = ie.current, Zt = {
            active: {
              id: jt,
              data: Ft.data,
              rect: Y
            }
          };
          vn(() => {
            Bt == null || Bt(Zt), x(Nt.Initializing), _({
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
          _({
            type: De.DragMove,
            coordinates: We
          });
        },
        onEnd: Ot(De.DragEnd),
        onCancel: Ot(De.DragCancel)
      });
      vn(() => {
        X(rt), ue(_e.nativeEvent);
      });
      function Ot(We) {
        return async function() {
          const {
            active: Ft,
            collisions: Bt,
            over: Zt,
            scrollAdjustedTranslate: Un
          } = L.current;
          let qt = null;
          if (Ft && Un) {
            const {
              cancelDrop: Vt
            } = ie.current;
            qt = {
              activatorEvent: ze,
              active: Ft,
              collisions: Bt,
              delta: Un,
              over: Zt
            }, We === De.DragEnd && typeof Vt == "function" && await Promise.resolve(Vt(qt)) && (We = De.DragCancel);
          }
          Z.current = null, vn(() => {
            _({
              type: We
            }), x(Nt.Uninitialized), Vn(null), X(null), ue(null);
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
    [N]
  ), Sr = je((_e, Ae) => (Me, pt) => {
    const Ye = Me.nativeEvent, ze = N.get(pt);
    if (
      // Another sensor is already instantiating
      Z.current !== null || // No active draggable
      !ze || // Event has already been captured
      Ye.dndKit || Ye.defaultPrevented
    )
      return;
    const rt = {
      active: ze
    };
    _e(Me, Ae.options, rt) === !0 && (Ye.dndKit = {
      capturedBy: Ae.sensor
    }, Z.current = pt, Yn(Me, Ae));
  }, [N, Yn]), zn = Ac(l, Sr);
  qc(l), Tt(() => {
    V && I === Nt.Initializing && x(Nt.Initialized);
  }, [V, I]), Q(
    () => {
      const {
        onDragMove: _e
      } = ie.current, {
        active: Ae,
        activatorEvent: Me,
        collisions: pt,
        over: Ye
      } = L.current;
      if (!Ae || !Me)
        return;
      const ze = {
        active: Ae,
        activatorEvent: Me,
        collisions: pt,
        delta: {
          x: Be.x,
          y: Be.y
        },
        over: Ye
      };
      vn(() => {
        _e == null || _e(ze), D({
          type: "onDragMove",
          event: ze
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Be.x, Be.y]
  ), Q(
    () => {
      const {
        active: _e,
        activatorEvent: Ae,
        collisions: Me,
        droppableContainers: pt,
        scrollAdjustedTranslate: Ye
      } = L.current;
      if (!_e || Z.current == null || !Ae || !Ye)
        return;
      const {
        onDragOver: ze
      } = ie.current, rt = pt.get(fn), Ot = rt && rt.rect.current ? {
        id: rt.id,
        rect: rt.rect.current,
        data: rt.data,
        disabled: rt.disabled
      } : null, We = {
        active: _e,
        activatorEvent: Ae,
        collisions: Me,
        delta: {
          x: Ye.x,
          y: Ye.y
        },
        over: Ot
      };
      vn(() => {
        Vn(Ot), ze == null || ze(We), D({
          type: "onDragOver",
          event: We
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fn]
  ), Tt(() => {
    L.current = {
      activatorEvent: K,
      active: H,
      activeNode: S,
      collisionRect: ft,
      collisions: Ct,
      droppableRects: O,
      draggableNodes: N,
      draggingNode: ae,
      draggingNodeRect: me,
      droppableContainers: G,
      over: nt,
      scrollableAncestors: we,
      scrollAdjustedTranslate: Be
    }, Y.current = {
      initial: me,
      translated: ft
    };
  }, [H, S, Ct, ft, N, ae, me, O, G, nt, we, Be]), Rc({
    ...q,
    delta: W,
    draggingRect: ft,
    pointerCoordinates: $t,
    scrollableAncestors: we,
    scrollableAncestorRects: Ve
  });
  const Cr = xe(() => ({
    active: H,
    activeNode: S,
    activeNodeRect: V,
    activatorEvent: K,
    collisions: Ct,
    containerNodeRect: de,
    dragOverlay: ee,
    draggableNodes: N,
    droppableContainers: G,
    droppableRects: O,
    over: nt,
    measureDroppableContainers: C,
    scrollableAncestors: we,
    scrollableAncestorRects: Ve,
    measuringConfiguration: y,
    measuringScheduled: R,
    windowRect: Fe
  }), [H, S, V, K, Ct, de, ee, N, G, O, nt, C, we, Ve, y, R, Fe]), pn = xe(() => ({
    activatorEvent: K,
    activators: zn,
    active: H,
    activeNodeRect: V,
    ariaDescribedById: {
      draggable: P
    },
    dispatch: _,
    draggableNodes: N,
    over: nt,
    measureDroppableContainers: C
  }), [K, zn, H, V, _, P, N, nt, C]);
  return Le.createElement(Ka.Provider, {
    value: E
  }, Le.createElement(vr.Provider, {
    value: pn
  }, Le.createElement(Xc.Provider, {
    value: Cr
  }, Le.createElement(fi.Provider, {
    value: Tr
  }, f)), Le.createElement(Jc, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), Le.createElement(ec, {
    ...s,
    hiddenTextDescribedById: P
  }));
  function Wn() {
    const _e = (re == null ? void 0 : re.autoScrollEnabled) === !1, Ae = typeof d == "object" ? d.enabled === !1 : d === !1, Me = F && !_e && !Ae;
    return typeof d == "object" ? {
      ...d,
      enabled: Me
    } : {
      enabled: Me
    };
  }
}), ou = /* @__PURE__ */ ut(null), ca = "button", au = "Droppable";
function iu(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = fr(au), {
    activators: c,
    activatorEvent: s,
    active: d,
    activeNodeRect: f,
    ariaDescribedById: l,
    draggableNodes: u,
    over: v
  } = Te(vr), {
    role: h = ca,
    roleDescription: m = "draggable",
    tabIndex: b = 0
  } = a ?? {}, w = (d == null ? void 0 : d.id) === t, _ = Te(w ? fi : ou), [D, E] = rr(), [I, x] = rr(), F = Vc(c, t), T = Dn(n);
  Tt(
    () => (u.set(t, {
      id: t,
      key: i,
      node: D,
      activatorNode: I,
      data: T
    }), () => {
      const W = u.get(t);
      W && W.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const N = xe(() => ({
    role: h,
    tabIndex: b,
    "aria-disabled": r,
    "aria-pressed": w && h === ca ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": l.draggable
  }), [r, h, b, w, m, l.draggable]);
  return {
    active: d,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: N,
    isDragging: w,
    listeners: r ? void 0 : F,
    node: D,
    over: v,
    setNodeRef: E,
    setActivatorNodeRef: x,
    transform: _
  };
}
const su = "Droppable", lu = {
  timeout: 25
};
function pi(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: a
  } = e;
  const i = fr(su), {
    active: c,
    dispatch: s,
    over: d,
    measureDroppableContainers: f
  } = Te(vr), l = J({
    disabled: n
  }), u = J(!1), v = J(null), h = J(null), {
    disabled: m,
    updateMeasurementsFor: b,
    timeout: w
  } = {
    ...lu,
    ...a
  }, _ = Dn(b ?? r), D = je(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(_.current) ? _.current : [_.current]), h.current = null;
      }, w);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [w]
  ), E = pr({
    callback: D,
    disabled: m || !c
  }), I = je((N, W) => {
    E && (W && (E.unobserve(W), u.current = !1), N && E.observe(N));
  }, [E]), [x, F] = rr(I), T = Dn(t);
  return Q(() => {
    !E || !x.current || (E.disconnect(), u.current = !1, E.observe(x.current));
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
  ), Q(() => {
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
    node: x,
    over: d,
    setNodeRef: F
  };
}
const cu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, uu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, du = [ce.Down, ce.Right, ce.Up, ce.Left], fu = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (du.includes(e.code)) {
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
          case ce.Down:
            a.top < u.top && s.push(l);
            break;
          case ce.Up:
            a.top > u.top + c && s.push(l);
            break;
          case ce.Left:
            a.left >= u.left + u.width && s.push(l);
            break;
          case ce.Right:
            a.left + a.width <= u.left && s.push(l);
            break;
        }
    });
    const d = ac({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = Qa(d, "id");
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
}, vi = ut(), xn = (e, t) => Re.map(e, (n) => {
  var r;
  if (ct(n) && n.props) {
    if (((r = n == null ? void 0 : n.props) == null ? void 0 : r.__TYPE) === t)
      return n;
    if (n.props.children)
      return xn(n.props.children, t);
  }
}), pu = {
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
}, hi = ({
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
  const [h, m] = te([]), [b, w] = te(null), [_, D] = te(
    () => Object.keys(f).length > 0 ? f : I()
  ), E = J(!1);
  function I() {
    return [
      ...xn(e, "droppable"),
      ...xn(e, "general-draggable")
    ].reduce(
      (j, Y) => ({
        ...j,
        [Y.props.id]: Y.props.children ? [
          ...xn(Y.props.children, "draggable").map(
            (H) => H.props.id
          )
        ] : []
      }),
      {}
    );
  }
  const x = Object.freeze({
    restrictToVerticalAxis: uu,
    restrictToHorizontalAxis: cu
  }), F = tc(
    $r(li),
    $r(ci),
    $r(yo, {
      coordinateGetter: fu
    })
  ), T = (j, Y) => {
    const H = Object.keys(_).pop();
    let Z = [...h];
    if (H === j.id && h.includes(Y) && (Z = h.filter((re) => re !== Y)), H !== j.id && (Z = [
      ...h.filter((re) => re !== Y),
      j.data.current.validate.includes(Y) ? Y : ""
    ].filter((re) => !!re)), !t) {
      const re = _[j.id][0];
      Z = re ? Z.filter((X) => X !== re) : Z;
    }
    n && n({ validate: [...Z], active: !0 }), m(Z);
  }, N = (j) => j in _ ? j : Object.keys(_).find((Y) => _[Y].includes(j)), W = ({ active: j, over: Y }) => {
    if (!Y)
      return;
    w(null);
    const H = Object.keys(_).pop(), Z = N(Y.id), re = N(j.id);
    re !== Z && (T(Y, j.id), D((X) => {
      E.current = !0;
      const K = X[re].filter(
        (P) => P !== j.id
      ), ue = [...X[Z]];
      return t ? {
        ...X,
        [re]: K,
        [Z]: [...ue, j.id]
      } : {
        ...{
          ...X,
          [re]: K,
          [Z]: Z === H ? [...ue, j.id] : [j.id]
        },
        ...Z !== H && X[Z].length > 0 && {
          [H]: [
            ...X[H].filter((P) => P !== j.id),
            ...X[Z]
          ]
        }
      };
    }));
  }, G = (j) => Re.map(j, (Y) => {
    if (!Y.props)
      return Y;
    if (Y.props.__TYPE !== "draggable")
      return Y.props.id in _ && _[Y.props.id].length > 0 ? Pe(Y, { ...Y.props }, [
        ..._[Y.props.id].map(
          (H) => xn(e, "draggable").filter(
            (Z) => Z.props.id === H
          )
        ).flat()
      ]) : Y.props.children ? Pe(Y, {
        ...Y.props,
        children: G(Y.props.children)
      }) : Y;
  });
  return Q(() => {
    a && (D(() => I()), m([]), n && n({ validate: [], active: !1 }));
  }, [a]), Q(() => {
    Object.keys(f).length !== 0 && D(f);
  }, [f]), Q(() => {
    l.length !== 0 && m(l);
  }, [l]), Q(() => {
    u && E.current && (E.current = !1, u({
      state: { key: v, newObjectState: { ..._ }, validateId: h }
    }));
  }, [u, _]), /* @__PURE__ */ p(
    vi.Provider,
    {
      value: {
        listId: h,
        propValidate: i,
        validate: r,
        isDragging: b
      },
      children: /* @__PURE__ */ p(
        ru,
        {
          sensors: F,
          screenReaderInstructions: {
            draggable: s
          },
          accessibility: { announcements: d },
          onDragStart: ({ active: j }) => w(j.id),
          onDragEnd: W,
          onDragCancel: () => w(null),
          ...c && { modifiers: [x[c]] },
          children: G(e)
        }
      )
    }
  );
};
hi.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: pu,
  defaultState: {},
  defaultValidate: [],
  screenReaderInstructions: "Para recoger un elemento arrastrable, presiona la barra espaciadora o la tecla Enter. Mientras arrastras, usa las teclas de flecha para mover el elemento en cualquier dirección deseada. Presiona nuevamente la barra espaciadora o la tecla Enter para soltar el elemento en su nueva posición, o presiona escape para cancelar."
};
hi.propTypes = {
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
const vu = "_pop_1elvh_1", nn = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: vu
}, gi = ({
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
  const u = s || "div", { listId: v, propValidate: h, validate: m, isDragging: b } = Te(vi), { attributes: w, listeners: _, setNodeRef: D, transform: E } = iu({
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
      className: ne({
        [nn["c-draggable"]]: !d,
        [`${r} ${nn["is-draggable--active-animation"]}`]: b === t && !d,
        [n]: n
      }),
      style: { transform: to.Translate.toString(E) },
      [h]: m ? v.includes(t) : "",
      ...!c && { ...w },
      ..._,
      ...l,
      children: e
    }
  );
};
gi.defaultProps = {
  __TYPE: "draggable",
  dragging: nn["c-draggable--active"],
  disabledDefaultAttributes: !1
};
gi.propTypes = {
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
const mi = ({
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
  const l = c || "div", { isOver: u, setNodeRef: v } = pi({
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
mi.defaultProps = {
  __TYPE: "droppable",
  over: nn["c-droppable--active"]
};
mi.propTypes = {
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
const bi = ({
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
  const f = i || "div", { isOver: l, setNodeRef: u } = pi({
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
bi.propTypes = {
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
bi.defaultProps = {
  __TYPE: "general-draggable",
  id: Ha("unique-id-general-"),
  label: "contendor inicial"
};
const xp = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ $("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ $("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ $("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ $("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ $(
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
        /* @__PURE__ */ $("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ $("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ $("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
      ] })
    }
  ),
  /* @__PURE__ */ $(
    "filter",
    {
      id: "hc_extension_invert_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "1.7" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ $(
    "filter",
    {
      id: "hc_extension_yellow_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ $("feComponentTransfer", { children: [
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
  /* @__PURE__ */ $(
    "filter",
    {
      id: "hc_extension_yellow_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ $(
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
        /* @__PURE__ */ $("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ $(
    "filter",
    {
      id: "hc_extension_red_on_white_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ $(
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
        /* @__PURE__ */ $("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ $(
    "filter",
    {
      id: "hc_extension_green_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ $(
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
        /* @__PURE__ */ $("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ $(
    "filter",
    {
      id: "hc_extension_yellow_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ $(
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
        /* @__PURE__ */ $("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ $(
    "filter",
    {
      id: "hc_extension_white_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ $("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ $("feComponentTransfer", { children: [
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
}, yi = ({ url: e, alt: t, title: n, width: r, addClass: a, noCaption: i, defaultStyle: c, ...s }) => {
  const [d, f] = te(!1), l = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, u = (h) => f(h), v = d ? l : `${e}`;
  return /* @__PURE__ */ $(
    "figure",
    {
      className: ne({
        [ua["c-image"]]: !c,
        [a]: a
      }),
      ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } },
      children: [
        /* @__PURE__ */ p("img", { src: v, onError: u, alt: t, ...s }),
        !i && /* @__PURE__ */ p("figcaption", { className: ua["c-image__figcaption"], children: /* @__PURE__ */ $("p", { children: [
          /* @__PURE__ */ $("strong", { children: [
            n,
            " "
          ] }),
          t
        ] }) })
      ]
    }
  );
};
yi.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
yi.propTypes = {
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
}, _i = _t(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: c, isDisabled: s, isRequired: d, isReadOnly: f, defaultStyle: l, onValue: u }, v) => {
  const h = e || At(), m = ({ target: b }) => {
    u && u({ id: h, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ $(
    "label",
    {
      htmlFor: h,
      className: ne({
        [In["c-label"]]: !l,
        [i]: i
      }),
      children: [
        /* @__PURE__ */ $("span", { className: `${!c && "u-sr-only"}`, children: [
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
            className: ne({
              [In["c-input"]]: !l
            }),
            ...f && { readOnly: f, "aria-readonly": f }
          }
        )
      ]
    }
  ) : null;
});
_i.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
_i.propTypes = {
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
const hu = ({ children: e, onAllValue: t }) => {
  const [n, r] = te([]), a = (s) => r([...n.filter((d) => d.id !== s.id), { ...s }]);
  Q(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, d, f) => Re.toArray(s).map((l) => l.props.__TYPE === d ? Pe(l, { ...l.props, ...f }) : l);
  return Re.map(e, (s) => {
    var d, f;
    return ct(s) ? ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "InputStyle" ? Pe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? Pe(s, { ...s.props, onValue: a }) : s : null;
  });
};
hu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const wi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [In["c-input__wrapper-style"]]: !n,
      [t]: t
    }),
    children: Ge(e, ["InputLeftAddon", "InputRightAddon", "Input"])
  }
);
wi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: ye("InputStyle")
};
wi.defaultProps = {
  __TYPE: "InputStyle"
};
const xi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [In["c-input__left-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
xi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: ye("InputLeftAddon")
};
xi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const Oi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [In["c-input__right-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
Oi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: ye("InputRightAddon")
};
Oi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const gu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, mu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: ne({
      [gu["c-kbd"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
mu.propTypes = {
  children: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
const Ei = ({ children: e, link: t, addClass: n, isExternal: r, label: a, ...i }) => /* @__PURE__ */ p(
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
Ei.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Ei.propTypes = {
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
const Ti = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, bu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "ul",
  {
    className: ne({
      [Ti["c-List"]]: !n,
      [t]: t
    }),
    ...r,
    children: Ge(e, ["ListItem"])
  }
);
bu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool
};
const Si = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = Re.map(e, (i) => {
    var c;
    return ((c = i == null ? void 0 : i.props) == null ? void 0 : c.__TYPE) === "Icon" ? Pe(i, { ...i.props, addClass: Ti["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
Si.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: ye("ListItem")
};
Si.defaultProps = {
  __TYPE: "ListItem"
};
const yu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: Ge(e, ["ListItem"]) });
yu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const _u = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: Ge(e, ["ListItem"]) });
_u.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
var Br = function() {
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
function qr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), r = function() {
    function f(l, u) {
      qr(this, f), this._inertManager = u, this._rootElement = l, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return Br(f, [{
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
        c(u, function(w) {
          return v._visitNode(w);
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
      set: function(u) {
        this._savedAriaHidden = u;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), f;
  }(), a = function() {
    function f(l, u) {
      qr(this, f), this._node = l, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([u]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return Br(f, [{
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
      if (qr(this, f), !l)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = l, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(l.head || l.body || l.documentElement), l.readyState === "loading" ? l.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return Br(f, [{
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
              e.call(m.addedNodes).forEach(function(_) {
                if (_.nodeType === Node.ELEMENT_NODE) {
                  var D = e.call(_.querySelectorAll("[inert]"));
                  t.call(_, "[inert]") && D.unshift(_), D.forEach(function(E) {
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
        ), b = m.getDistributedNodes ? m.getDistributedNodes() : [], w = 0; w < b.length; w++)
          c(b[w], l);
        return;
      }
      if (v.localName == "slot") {
        for (var _ = (
          /** @type {!HTMLSlotElement} */
          v
        ), D = _.assignedNodes ? _.assignedNodes({ flatten: !0 }) : [], E = 0; E < D.length; E++)
          c(D[E], l);
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
const hr = ut(), wu = Object.freeze({
  ESC: 27
}), xu = "section[data-type='Section']:not([hidden]), div:not([hidden])", Ci = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = J(), i = (l) => {
    const u = document.querySelector("#root");
    u.inert = l;
  }, c = (l) => {
    (l.keyCode || l.which) === wu.ESC && f();
  }, s = (l, u) => {
    a.current.classList.replace(l, u);
  }, d = (l) => {
    document.querySelectorAll(l).forEach((v) => {
      v.closest(xu) && !v.disabled && v.focus();
    });
  }, f = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), n(!t), typeof r == "string" || Array.isArray(r) ? d(r) : typeof r == "object" && r.current.focus();
    }, 500);
  };
  return Q(() => (t && (i(!0), a.current && a.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(
    hr.Provider,
    {
      value: { isOpen: t, onKeyDown: c, onCloseModal: f, refModal: a },
      children: /* @__PURE__ */ p(dn, { id: "js-modal", children: Ge(e, ["ModalContent", "ModalOverlay"]) })
    }
  );
};
Ci.defaultProps = {
  isOpen: !1
};
Ci.propTypes = {
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
}, Pi = ({
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
  } = Te(hr), u = (h) => {
    n && typeof n == "function" && n(h), f();
  };
  return /* @__PURE__ */ $(
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
            children: t
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
Pi.propTypes = {
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
Pi.defaultProps = {
  __TYPE: "ModalContent"
};
const Ri = ({ addClass: e, onClick: t, defaultStyle: n }) => {
  const { isOpen: r, onCloseModal: a } = Te(hr), i = (c) => {
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
Ri.propTypes = {
  addClass: o.string,
  onClick: o.func,
  defaultStyle: o.bool,
  __TYPE: ye("ModalOverlay")
};
Ri.defaultProps = {
  __TYPE: "ModalOverlay"
};
const Ou = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = Te(hr), r = (a) => {
    t && t(a), n();
  };
  return Pe(e, { ...e.props, onClick: r });
};
Ou.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const rn = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, gr = ut(), Di = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: c, onValue: s }) => {
  const [d, f] = te(r || 0), l = () => {
    if (n && d > i)
      return f(i);
    f((m) => m + c);
  }, u = () => {
    if (n && d < a)
      return f(a);
    f((m) => m - c);
  }, v = (m) => f(m), h = (m) => n && d === m;
  return Q(() => {
    s && s(d);
  }, [d, s]), /* @__PURE__ */ p(
    gr.Provider,
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
      children: /* @__PURE__ */ p("div", { className: `${rn["c-number-input"]} ${t ?? ""}`, children: Ge(e, ["NumberInputField", "NumberInputStepper"]) })
    }
  );
};
Di.propTypes = {
  children: o.arrayOf(o.element),
  addClass: o.string,
  max: o.number,
  min: o.number,
  defaultValue: o.number,
  step: o.number,
  onValue: o.func,
  keepWithinRange: o.bool
};
Di.defaultProps = {
  step: 1
};
const Ni = _t(
  ({ id: e, name: t, label: n, pattern: r, addClass: a, isLabelVisible: i }, c) => {
    const {
      counter: s,
      onChangeValue: d,
      onIncrementValue: f,
      onDecrementValue: l,
      min: u,
      max: v
    } = Te(gr), h = e || At(), m = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), b = ({ target: _ }) => {
      if (!isNaN(_.value) && _.value)
        return d(parseInt(_.value));
      d(0);
    }, w = (_) => {
      switch (_.keyCode || _.which) {
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
    return /* @__PURE__ */ $(
      "label",
      {
        htmlFor: h,
        className: `${rn["c-number-input__label"]} ${a ?? ""}`,
        children: [
          /* @__PURE__ */ $("span", { className: `${!i && "u-sr-only"}`, children: [
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
Ni.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Ni.propTypes = {
  id: o.string,
  name: o.string,
  label: o.string,
  pattern: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  __TYPE: ye("NumberInputField")
};
const Ii = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${rn["c-number-input__stepper"]} ${t ?? ""}`, children: Ge(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Ii.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: ye("NumberInputStepper")
};
Ii.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Ai = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = Te(gr);
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
  const { onIncrementValue: r, validate: a, max: i } = Te(gr);
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
Mi.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: ye("NumberIncrementStepper"),
  label: o.string
};
Mi.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const Eu = (e) => {
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
  } = e, [v, h] = te(r || 1);
  Q(() => {
    r && h(r);
  }, [r]);
  const m = (T, N) => {
    h(N), s && s(T, N);
  }, b = (T, N) => {
    const W = N - T + 1;
    return Array.from({ length: W }, (G, j) => T + j);
  }, w = b(1, Math.min(t, n)), _ = b(
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
    ...d ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...w,
    // Comienza el ellipsis
    ...D > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...b(D, E),
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
      onClick: (N) => {
        m(N, T);
      },
      type: "page",
      page: T,
      selected: T === v,
      disabled: a,
      "aria-current": T === v ? "page" : void 0
    } : {
      onClick: (N) => {
        m(N, x(T));
      },
      type: T,
      page: x(T),
      selected: !1,
      disabled: a || T.indexOf("ellipsis") === -1 && (T === "next" || T === "last" ? v >= n : v <= 1)
    }),
    ...u
  };
}, Sn = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, Tu = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), Su = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${Tu[e]} página`, $i = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: r,
  ...a
}) => {
  const { items: i } = Eu({ ...a });
  return /* @__PURE__ */ p(
    "nav",
    {
      className: ne({
        [Sn["c-pagination"]]: !r,
        [n]: n
      }),
      children: /* @__PURE__ */ p(
        "ul",
        {
          className: ne({
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
$i.defaultProps = {
  boundaryCount: 1,
  count: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(wo, { ...e }),
  getItemAriaLabel: Su
};
$i.propTypes = {
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
const wo = ({ page: e, type: t, addClass: n, disabled: r, element: a, icons: i, selected: c, defaultStyle: s, ...d }) => {
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
      className: ne({
        [Sn["c-pagination-item"]]: !s,
        [Sn["c-pagination-item--selected"]]: !s && c,
        [n]: n
      }),
      ...a.props,
      ...d
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
}, mr = ut(), Cu = ({ children: e, defaultIndex: t, addClass: n, type: r, defaultStyle: a }) => {
  const [i, c] = te(null), s = J([]), d = (h) => {
    s.current.includes(h) || (s.current = [...s.current, h]);
  }, f = (h) => c(s.current[h]), l = (h) => /:.*?:/g.test(h) ? i === h : s.current[h - 1] === i, u = () => [...s.current].reduce((h, m, b) => [...h, b + 1], []), v = (h) => s.current.indexOf(h) + 1;
  return Q(() => {
    s.current.length !== 0 && (t !== void 0 ? f(t - 1) : c(s.current[0]));
  }, [t, s]), /* @__PURE__ */ p(
    mr.Provider,
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
Cu.propTypes = {
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
const ki = _t(
  ({ children: e, addClass: t, defaultStyle: n, __TYPE: r, ...a }, i) => {
    const { validation: c, addNewIdToSection: s, getIndexById: d, type: f } = Te(mr), l = At(), u = c(l);
    return Q(() => {
      l && s(l);
    }, [l]), /* @__PURE__ */ $(
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
          /* @__PURE__ */ $("span", { id: `section-${l}`, className: "u-sr-only", children: [
            "Sección ",
            d(l)
          ] }),
          e
        ]
      }
    );
  }
);
ki.propTypes = {
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
ki.defaultProps = {
  __TYPE: "Section"
};
const Pu = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), da = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Ru = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${Pu[e]} sección`, Li = ({
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
  const { validation: l, onToggle: u, listId: v, currentSection: h } = Te(mr), m = J([]), b = Object.freeze({
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
  }, [_, D] = te([]);
  Q(() => {
    v.length !== 0 && D([
      // Botón para navegar a la sección anterior.
      ...t ? ["previous"] : [],
      // Lista de todas la secciones.
      ...v || [],
      // Botón para navegar a la siguiente sección.
      ...n ? ["next"] : []
    ]);
  }, [v]);
  const E = (T) => !m.current.includes(T) && T ? m.current = [...m.current, T] : m.current, I = (T) => {
    const N = m.current[0], W = m.current[m.current.length - 1];
    if ((T.keyCode || T.which) === da.LEFT)
      if (T.target === N)
        W.focus();
      else {
        const G = m.current.indexOf(T.target) - 1;
        m.current[G].focus();
      }
    else if ((T.keyCode || T.which) === da.RIGHT)
      if (T.target === W)
        N.focus();
      else {
        const G = m.current.indexOf(T.target) + 1;
        m.current[G].focus();
      }
  }, x = (T) => {
    u(v.findIndex((N) => N === T)), c !== void 0 && c(T, v.length);
  }, F = _.map((T) => {
    let N = [...v];
    return N = N.pop(), typeof T == "number" ? {
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
      disabled: T === "next" ? h >= N : h <= v[0]
    };
  });
  return Q(() => {
    c !== void 0 && c(h, v.length);
  }, []), /* @__PURE__ */ $(bt, { children: [
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
        children: e ? e(F) : F.map(({ section: T, type: N, selected: W, ...G }, j) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: ne({
              [Jt["c-navigation__item"]]: !f
            }),
            children: N === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${T}`,
                role: "tab",
                tabIndex: `${W ? 0 : -1}`,
                "aria-selected": W,
                "data-class": "c-navigation__section",
                className: ne({
                  [Jt["c-navigation__section"]]: !f
                }),
                "aria-label": d(N, T, W),
                ...G
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: ne({
                  [Jt["c-navigation__button"]]: !f
                }),
                "aria-label": d(N, T, W),
                ...G,
                children: w[N] ? r ? /* @__PURE__ */ p(Ce, { path: w[N] }, N) : /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: w[N]
                  }
                ) }, N) : null
              }
            )
          },
          `navigation-section-item-${j}`
        ))
      }
    )
  ] });
};
Li.propTypes = {
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
Li.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: Ru
};
const Du = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = Te(mr), a = (i) => {
    r(t - 1), n && n(i);
  };
  return Re.map(e, (i) => Pe(i, { ...i.props, onClick: a }));
};
Du.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const Nu = {
  "c-paper": "_c-paper_1sbf6_1"
}, Iu = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = J(null);
  return ur(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${Nu["c-paper"]} ${n ?? ""}`,
      ...r,
      children: e
    }
  );
};
Iu.propTypes = {
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
}, $u = (e) => {
  const t = J(null);
  Q(() => {
    const r = document.querySelector(`#${e}`), a = r || Au(e);
    return r || Mu(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, dn = ({ children: e, id: t }) => {
  const n = $u(t);
  return La(e, n);
};
dn.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const ku = "_row_1adiy_1", Lu = {
  row: ku
}, ju = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Lu.row} ${e ?? ""}`, ...t }));
ju.propTypes = {
  addClass: o.string
};
const yn = {
  "c-select-label": "_c-select-label_16c2e_1",
  "c-select-wrapper": "_c-select-wrapper_16c2e_11",
  "c-select": "_c-select_16c2e_1",
  "c-select__icon": "_c-select__icon_16c2e_38"
}, ji = _t(
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
    const h = t || At(), m = ({ target: b }) => {
      f && f({ id: h, value: b.value });
    };
    return /* @__PURE__ */ $(
      "label",
      {
        htmlFor: h,
        className: ne({
          [yn["c-select-label"]]: !u,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ $("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            r,
            " "
          ] }),
          /* @__PURE__ */ $("div", { className: yn["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
            /* @__PURE__ */ $(
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
                onChange: m,
                disabled: s,
                required: d,
                children: [
                  /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
                  Ge(e, ["option", "optgroup"])
                ]
              }
            ),
            a ? /* @__PURE__ */ p(
              Ce,
              {
                path: a,
                "data-class": "c-select__icon",
                addClass: ne({ [yn["c-select__icon"]]: !u })
              }
            ) : /* @__PURE__ */ p(
              Ce,
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
ji.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
ji.propTypes = {
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
const Fu = ({ children: e, onAllSelect: t }) => {
  const [n, r] = te([]), a = (c) => r([
    ...n.filter((s) => s.id !== c.id),
    { ...c }
  ]);
  return Q(() => {
    t && t(n);
  }, [n, t]), Re.map(e, (c) => {
    var s;
    return ct(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? Pe(c, { ...c.props, onChoise: a }) : c : null;
  });
};
Fu.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onAllSelect: o.func
};
const Vr = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, fa = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Fi = _t(
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
    const [u, v] = te(!1), h = e || At(), m = ({ target: w }) => {
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
    return Q(() => (s && v(!!s), () => {
      v(!1);
    }), [s]), /* @__PURE__ */ $(
      "label",
      {
        htmlFor: h,
        className: `${Vr["c-label"]} ${Vr[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ $("span", { className: `${!d && "u-sr-only"}`, children: [
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
              className: `${Vr["c-switch"]} ${i ?? ""}`,
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
Fi.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Fi.propTypes = {
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
const xo = ut(), Bu = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = te(0), c = (d) => i(d), s = (d) => a === d;
  return Q(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(xo.Provider, { value: { validation: s, onToggle: c }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: Ge(e, ["TabList", "TabPanels"]) }) });
};
Bu.propTypes = {
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
}, Bi = ({
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
  const u = J(), { validation: v, onToggle: h } = Te(xo), m = v(t), b = (w) => {
    s && s(w), h(t);
  };
  return Q(() => (u.current && i(u.current), () => {
    u.current = null;
  }), [u]), /* @__PURE__ */ $(
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
      className: ne({
        [`${An["c-tab__button"]} u-flex`]: !d,
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
Bi.propTypes = {
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
Bi.defaultProps = {
  __TYPE: "Tab"
};
const pa = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), qi = ({
  children: e,
  addClass: t,
  label: n,
  orientation: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const s = J([]), d = (u) => s.current = [...s.current, u], f = (u) => {
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
  }, l = Re.map(e, (u, v) => ct(u) ? Pe(u, {
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
        [An["c-tab__list"]]: !a,
        [t]: t
      }),
      ...c,
      children: Ge(l, ["Tab"])
    }
  );
};
qi.propTypes = {
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
qi.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const Vi = ({ children: e, id: t, addClass: n, defaultStyle: r, __TYPE: a, ...i }) => {
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
      className: ne({
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
Vi.propTypes = {
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
Vi.defaultProps = {
  __TYPE: "TabPanel"
};
const Yi = ({
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
      className: ne({
        [An["c-tab__panels"]]: !n,
        [t]: t
      }),
      "data-type": r,
      ...a,
      children: Ge(i, ["TabPanel"])
    }
  );
};
Yi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: ye("TabPanels")
};
Yi.defaultProps = {
  __TYPE: "TabPanels"
};
const Yr = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, zi = _t(
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
    const h = e || At(), m = ({ target: b }) => {
      l && l({ id: h, value: b.value });
    };
    return /* @__PURE__ */ $(
      "label",
      {
        htmlFor: h,
        className: ne({
          [Yr["c-label"]]: !f,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ $("span", { className: `${!c && "u-sr-only"}`, children: [
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
              className: ne({
                [`${Yr["c-textarea"]} ${Yr[`c-textarea--${n}`]}`]: !f
              }),
              ...u
            }
          )
        ]
      }
    );
  }
);
zi.defaultProps = {
  resize: "vertical",
  placeholder: "This is an example of a placeholder"
};
zi.propTypes = {
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
const qu = $a(({ children: e, theme: t = {} }) => {
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
  return Q(() => {
    if (Object.entries(t).length !== 0)
      return n(t), () => {
        t = {};
      };
  }, [t]), e;
});
qu.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var va = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, ha = typeof window < "u" && window.document && window.document.createElement ? zt.useLayoutEffect : zt.useEffect, Ue = "top", st = "bottom", lt = "right", He = "left", br = "auto", Bn = [Ue, st, lt, He], on = "start", Mn = "end", Vu = "clippingParents", Wi = "viewport", _n = "popper", Yu = "reference", ga = /* @__PURE__ */ Bn.reduce(function(e, t) {
  return e.concat([t + "-" + on, t + "-" + Mn]);
}, []), Ui = /* @__PURE__ */ [].concat(Bn, [br]).reduce(function(e, t) {
  return e.concat([t, t + "-" + on, t + "-" + Mn]);
}, []), zu = "beforeRead", Wu = "read", Uu = "afterRead", Hu = "beforeMain", Gu = "main", Zu = "afterMain", Xu = "beforeWrite", Ku = "write", Qu = "afterWrite", ao = [zu, Wu, Uu, Hu, Gu, Zu, Xu, Ku, Qu];
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
function Ju(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !Je(i) || !yt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(c) {
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
      !Je(a) || !yt(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(d) {
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
function ht(e) {
  return e.split("-")[0];
}
var Ut = Math.max, sr = Math.min, an = Math.round;
function io() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Hi() {
  return !/^((?!chrome|android).)*safari/i.test(io());
}
function sn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && Je(e) && (a = e.offsetWidth > 0 && an(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && an(r.height) / e.offsetHeight || 1);
  var c = Ht(e) ? tt(e) : window, s = c.visualViewport, d = !Hi() && n, f = (r.left + (d && s ? s.offsetLeft : 0)) / a, l = (r.top + (d && s ? s.offsetTop : 0)) / i, u = r.width / a, v = r.height / i;
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
function Eo(e) {
  var t = sn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Gi(e, t) {
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
function nd(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
function Mt(e) {
  return ((Ht(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function yr(e) {
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
function rd(e) {
  var t = /firefox/i.test(io()), n = /Trident/i.test(io());
  if (n && Je(e)) {
    var r = mt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = yr(e);
  for (Oo(a) && (a = a.host); Je(a) && ["html", "body"].indexOf(yt(a)) < 0; ) {
    var i = mt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function qn(e) {
  for (var t = tt(e), n = ma(e); n && nd(n) && mt(n).position === "static"; )
    n = ma(n);
  return n && (yt(n) === "html" || yt(n) === "body" && mt(n).position === "static") ? t : n || rd(e) || t;
}
function To(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cn(e, t, n) {
  return Ut(e, sr(t, n));
}
function od(e, t, n) {
  var r = Cn(e, t, n);
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
function Xi(e) {
  return Object.assign({}, Zi(), e);
}
function Ki(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ad = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Xi(typeof t != "number" ? t : Ki(t, Bn));
};
function id(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = ht(n.placement), d = To(s), f = [He, lt].indexOf(s) >= 0, l = f ? "height" : "width";
  if (!(!i || !c)) {
    var u = ad(a.padding, n), v = Eo(i), h = d === "y" ? Ue : He, m = d === "y" ? st : lt, b = n.rects.reference[l] + n.rects.reference[d] - c[d] - n.rects.popper[l], w = c[d] - n.rects.reference[d], _ = qn(i), D = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, E = b / 2 - w / 2, I = u[h], x = D - v[l] - u[m], F = D / 2 - v[l] / 2 + E, T = Cn(I, F, x), N = d;
    n.modifiersData[r] = (t = {}, t[N] = T, t.centerOffset = T - F, t);
  }
}
function sd(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (Je(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Gi(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
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
function ln(e) {
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
    x: an(n * a) / a || 0,
    y: an(r * a) / a || 0
  };
}
function ba(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, d = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, u = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, m = c.y, b = m === void 0 ? 0 : m, w = typeof l == "function" ? l({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = w.x, b = w.y;
  var _ = c.hasOwnProperty("x"), D = c.hasOwnProperty("y"), E = He, I = Ue, x = window;
  if (f) {
    var F = qn(n), T = "clientHeight", N = "clientWidth";
    if (F === tt(n) && (F = Mt(n), mt(F).position !== "static" && s === "absolute" && (T = "scrollHeight", N = "scrollWidth")), F = F, a === Ue || (a === He || a === lt) && i === Mn) {
      I = st;
      var W = u && F === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        F[T]
      );
      b -= W - r.height, b *= d ? 1 : -1;
    }
    if (a === He || (a === Ue || a === st) && i === Mn) {
      E = lt;
      var G = u && F === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        F[N]
      );
      h -= G - r.width, h *= d ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: s
  }, f && cd), Y = l === !0 ? ud({
    x: h,
    y: b
  }, tt(n)) : {
    x: h,
    y: b
  };
  if (h = Y.x, b = Y.y, d) {
    var H;
    return Object.assign({}, j, (H = {}, H[I] = D ? "0" : "", H[E] = _ ? "0" : "", H.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", H));
  }
  return Object.assign({}, j, (t = {}, t[I] = D ? b + "px" : "", t[E] = _ ? h + "px" : "", t.transform = "", t));
}
function dd(e) {
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
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ba(Object.assign({}, l, {
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
var Zn = {
  passive: !0
};
function pd(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, c = r.resize, s = c === void 0 ? !0 : c, d = tt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, Zn);
  }), s && d.addEventListener("resize", n.update, Zn), function() {
    i && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Zn);
    }), s && d.removeEventListener("resize", n.update, Zn);
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
function Jn(e) {
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
  var t = tt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Co(e) {
  return sn(Mt(e)).left + So(e).scrollLeft;
}
function md(e, t) {
  var n = tt(e), r = Mt(e), a = n.visualViewport, i = r.clientWidth, c = r.clientHeight, s = 0, d = 0;
  if (a) {
    i = a.width, c = a.height;
    var f = Hi();
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
  var t, n = Mt(e), r = So(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ut(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Ut(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Co(e), d = -r.scrollTop;
  return mt(a || n).direction === "rtl" && (s += Ut(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: d
  };
}
function Po(e) {
  var t = mt(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Qi(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : Je(e) && Po(e) ? e : Qi(yr(e));
}
function Pn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Qi(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = tt(r), c = a ? [i].concat(i.visualViewport || [], Po(r) ? r : []) : r, s = t.concat(c);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Pn(yr(c)))
  );
}
function so(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function yd(e, t) {
  var n = sn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _a(e, t, n) {
  return t === Wi ? so(md(e, n)) : Ht(t) ? yd(t, n) : so(bd(Mt(e)));
}
function _d(e) {
  var t = Pn(yr(e)), n = ["absolute", "fixed"].indexOf(mt(e).position) >= 0, r = n && Je(e) ? qn(e) : e;
  return Ht(r) ? t.filter(function(a) {
    return Ht(a) && Gi(a, r) && yt(a) !== "body";
  }) : [];
}
function wd(e, t, n, r) {
  var a = t === "clippingParents" ? _d(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(d, f) {
    var l = _a(e, f, r);
    return d.top = Ut(l.top, d.top), d.right = sr(l.right, d.right), d.bottom = sr(l.bottom, d.bottom), d.left = Ut(l.left, d.left), d;
  }, _a(e, c, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ji(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? ht(r) : null, i = r ? ln(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, d;
  switch (a) {
    case Ue:
      d = {
        x: c,
        y: t.y - n.height
      };
      break;
    case st:
      d = {
        x: c,
        y: t.y + t.height
      };
      break;
    case lt:
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
  var f = a ? To(a) : null;
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
function $n(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, d = s === void 0 ? Vu : s, f = n.rootBoundary, l = f === void 0 ? Wi : f, u = n.elementContext, v = u === void 0 ? _n : u, h = n.altBoundary, m = h === void 0 ? !1 : h, b = n.padding, w = b === void 0 ? 0 : b, _ = Xi(typeof w != "number" ? w : Ki(w, Bn)), D = v === _n ? Yu : _n, E = e.rects.popper, I = e.elements[m ? D : v], x = wd(Ht(I) ? I : I.contextElement || Mt(e.elements.popper), d, l, c), F = sn(e.elements.reference), T = Ji({
    reference: F,
    element: E,
    strategy: "absolute",
    placement: a
  }), N = so(Object.assign({}, E, T)), W = v === _n ? N : F, G = {
    top: x.top - W.top + _.top,
    bottom: W.bottom - x.bottom + _.bottom,
    left: x.left - W.left + _.left,
    right: W.right - x.right + _.right
  }, j = e.modifiersData.offset;
  if (v === _n && j) {
    var Y = j[a];
    Object.keys(G).forEach(function(H) {
      var Z = [lt, st].indexOf(H) >= 0 ? 1 : -1, re = [Ue, st].indexOf(H) >= 0 ? "y" : "x";
      G[H] += Y[re] * Z;
    });
  }
  return G;
}
function xd(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, d = n.allowedAutoPlacements, f = d === void 0 ? Ui : d, l = ln(r), u = l ? s ? ga : ga.filter(function(m) {
    return ln(m) === l;
  }) : Bn, v = u.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  v.length === 0 && (v = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
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
function Od(e) {
  if (ht(e) === br)
    return [];
  var t = Jn(e);
  return [ya(e), t, ya(t)];
}
function Ed(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, d = n.fallbackPlacements, f = n.padding, l = n.boundary, u = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, b = n.allowedAutoPlacements, w = t.options.placement, _ = ht(w), D = _ === w, E = d || (D || !m ? [Jn(w)] : Od(w)), I = [w].concat(E).reduce(function(C, R) {
      return C.concat(ht(R) === br ? xd(t, {
        placement: R,
        boundary: l,
        rootBoundary: u,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : R);
    }, []), x = t.rects.reference, F = t.rects.popper, T = /* @__PURE__ */ new Map(), N = !0, W = I[0], G = 0; G < I.length; G++) {
      var j = I[G], Y = ht(j), H = ln(j) === on, Z = [Ue, st].indexOf(Y) >= 0, re = Z ? "width" : "height", X = $n(t, {
        placement: j,
        boundary: l,
        rootBoundary: u,
        altBoundary: v,
        padding: f
      }), K = Z ? H ? lt : He : H ? st : Ue;
      x[re] > F[re] && (K = Jn(K));
      var ue = Jn(K), ie = [];
      if (i && ie.push(X[Y] <= 0), s && ie.push(X[K] <= 0, X[ue] <= 0), ie.every(function(C) {
        return C;
      })) {
        W = j, N = !1;
        break;
      }
      T.set(j, ie);
    }
    if (N)
      for (var P = m ? 3 : 1, k = function(R) {
        var S = I.find(function(A) {
          var q = T.get(A);
          if (q)
            return q.slice(0, R).every(function(U) {
              return U;
            });
        });
        if (S)
          return W = S, "break";
      }, y = P; y > 0; y--) {
        var O = k(y);
        if (O === "break")
          break;
      }
    t.placement !== W && (t.modifiersData[r]._skip = !0, t.placement = W, t.reset = !0);
  }
}
const Td = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ed,
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
  return [Ue, lt, st, He].some(function(t) {
    return e[t] >= 0;
  });
}
function Sd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = $n(t, {
    elementContext: "reference"
  }), s = $n(t, {
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
  var r = ht(e), a = [He, Ue].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, c = i[0], s = i[1];
  return c = c || 0, s = (s || 0) * a, [He, lt].indexOf(r) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function Rd(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = Ui.reduce(function(l, u) {
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
  t.modifiersData[n] = Ji({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Id = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Nd,
  data: {}
};
function Ad(e) {
  return e === "x" ? "y" : "x";
}
function Md(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, d = n.boundary, f = n.rootBoundary, l = n.altBoundary, u = n.padding, v = n.tether, h = v === void 0 ? !0 : v, m = n.tetherOffset, b = m === void 0 ? 0 : m, w = $n(t, {
    boundary: d,
    rootBoundary: f,
    padding: u,
    altBoundary: l
  }), _ = ht(t.placement), D = ln(t.placement), E = !D, I = To(_), x = Ad(I), F = t.modifiersData.popperOffsets, T = t.rects.reference, N = t.rects.popper, W = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, G = typeof W == "number" ? {
    mainAxis: W,
    altAxis: W
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, W), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (F) {
    if (i) {
      var H, Z = I === "y" ? Ue : He, re = I === "y" ? st : lt, X = I === "y" ? "height" : "width", K = F[I], ue = K + w[Z], ie = K - w[re], P = h ? -N[X] / 2 : 0, k = D === on ? T[X] : N[X], y = D === on ? -N[X] : -T[X], O = t.elements.arrow, C = h && O ? Eo(O) : {
        width: 0,
        height: 0
      }, R = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Zi(), S = R[Z], A = R[re], q = Cn(0, T[X], C[X]), U = E ? T[X] / 2 - P - q - S - G.mainAxis : k - q - S - G.mainAxis, V = E ? -T[X] / 2 + P + q + A + G.mainAxis : y + q + A + G.mainAxis, de = t.elements.arrow && qn(t.elements.arrow), L = de ? I === "y" ? de.clientTop || 0 : de.clientLeft || 0 : 0, B = (H = j == null ? void 0 : j[I]) != null ? H : 0, ee = K + U - B - L, ae = K + V - B, me = Cn(h ? sr(ue, ee) : ue, K, h ? Ut(ie, ae) : ie);
      F[I] = me, Y[I] = me - K;
    }
    if (s) {
      var Ie, dt = I === "x" ? Ue : He, Fe = I === "x" ? st : lt, we = F[x], Ve = x === "y" ? "height" : "width", Xe = we + w[dt], $t = we - w[Fe], St = [Ue, He].indexOf(_) !== -1, kt = (Ie = j == null ? void 0 : j[x]) != null ? Ie : 0, Lt = St ? Xe : we - T[Ve] - N[Ve] - kt + G.altAxis, Be = St ? we + T[Ve] + N[Ve] - kt - G.altAxis : $t, ft = h && St ? od(Lt, we, Be) : Cn(h ? Lt : Xe, we, h ? Be : $t);
      F[x] = ft, Y[x] = ft - we;
    }
    t.modifiersData[r] = Y;
  }
}
const $d = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Md,
  requiresIfExists: ["offset"]
};
function kd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ld(e) {
  return e === tt(e) || !Je(e) ? So(e) : kd(e);
}
function jd(e) {
  var t = e.getBoundingClientRect(), n = an(t.width) / e.offsetWidth || 1, r = an(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Fd(e, t, n) {
  n === void 0 && (n = !1);
  var r = Je(t), a = Je(t) && jd(t), i = Mt(t), c = sn(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((yt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Po(i)) && (s = Ld(t)), Je(t) ? (d = sn(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : i && (d.x = Co(i))), {
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
  return ao.reduce(function(n, r) {
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
function Pt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(a, i) {
    return a.replace(/%s/, i);
  }, e);
}
var Yt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Yd = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Oa = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function zd(e) {
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
          ao.indexOf(t.phase) < 0 && console.error(Pt(Yt, t.name, '"phase"', "either " + ao.join(", "), '"' + String(t.phase) + '"'));
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
        }) == null && console.error(Pt(Yd, String(t.name), r, r));
      });
    });
  });
}
function Wd(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var a = t(r);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function Ud(e) {
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
var Ea = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Hd = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ta = {
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
function Gd(e) {
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
      setOptions: function(_) {
        var D = typeof _ == "function" ? _(l.options) : _;
        b(), l.options = Object.assign({}, i, l.options, D), l.scrollParents = {
          reference: Ht(s) ? Pn(s) : s.contextElement ? Pn(s.contextElement) : [],
          popper: Pn(d)
        };
        var E = qd(Ud([].concat(r, l.options.modifiers)));
        if (l.orderedModifiers = E.filter(function(j) {
          return j.enabled;
        }), process.env.NODE_ENV !== "production") {
          var I = Wd([].concat(E, l.options.modifiers), function(j) {
            var Y = j.name;
            return Y;
          });
          if (zd(I), ht(l.options.placement) === br) {
            var x = l.orderedModifiers.find(function(j) {
              var Y = j.name;
              return Y === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var F = mt(d), T = F.marginTop, N = F.marginRight, W = F.marginBottom, G = F.marginLeft;
          [T, N, W, G].some(function(j) {
            return parseFloat(j);
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
          var _ = l.elements, D = _.reference, E = _.popper;
          if (!Sa(D, E)) {
            process.env.NODE_ENV !== "production" && console.error(Ea);
            return;
          }
          l.rects = {
            reference: Fd(D, qn(E), l.options.strategy === "fixed"),
            popper: Eo(E)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(j) {
            return l.modifiersData[j.name] = Object.assign({}, j.data);
          });
          for (var I = 0, x = 0; x < l.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && (I += 1, I > 100)) {
              console.error(Hd);
              break;
            }
            if (l.reset === !0) {
              l.reset = !1, x = -1;
              continue;
            }
            var F = l.orderedModifiers[x], T = F.fn, N = F.options, W = N === void 0 ? {} : N, G = F.name;
            typeof T == "function" && (l = T({
              state: l,
              options: W,
              name: G,
              instance: h
            }) || l);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Vd(function() {
        return new Promise(function(w) {
          h.forceUpdate(), w(l);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Sa(s, d))
      return process.env.NODE_ENV !== "production" && console.error(Ea), h;
    h.setOptions(f).then(function(w) {
      !v && f.onFirstUpdate && f.onFirstUpdate(w);
    });
    function m() {
      l.orderedModifiers.forEach(function(w) {
        var _ = w.name, D = w.options, E = D === void 0 ? {} : D, I = w.effect;
        if (typeof I == "function") {
          var x = I({
            state: l,
            name: _,
            instance: h,
            options: E
          }), F = function() {
          };
          u.push(x || F);
        }
      });
    }
    function b() {
      u.forEach(function(w) {
        return w();
      }), u = [];
    }
    return h;
  };
}
var Zd = [vd, Id, fd, td, Dd, Td, $d, ld, Cd], Xd = /* @__PURE__ */ Gd({
  defaultModifiers: Zd
}), Kd = typeof Element < "u", Qd = typeof Map == "function", Jd = typeof Set == "function", ef = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (Qd && e instanceof Map && t instanceof Map) {
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
    if (Jd && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (ef && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Kd && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !er(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var tf = function(t, n) {
  try {
    return er(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, nf = [], _r = function(t, n, r) {
  r === void 0 && (r = {});
  var a = zt.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || nf
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
        var m = h.state, b = Object.keys(m.elements);
        Os.flushSync(function() {
          d({
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
    return tf(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), u = zt.useRef();
  return ha(function() {
    u.current && u.current.setOptions(l);
  }, [l]), ha(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Xd, h = v(t, n, l);
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
const zr = {
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, rf = Object.freeze({
  ESC: 27
}), es = ({
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
  const [l, u] = te(!1), v = J(null), h = J(null), m = t || At(), b = (x) => u(!1), w = (x) => {
    u(!l), l && document.activeElement === v.current && !d && setTimeout(() => {
      u((F) => !F);
    }, 100), f && f(x);
  }, _ = (x) => {
    (x.keyCode | x.which) === rf.ESC && l && u(!l);
  }, D = Re.map(e, (x) => ct(x) ? Pe(x, {
    ...x.props,
    "aria-describedby": t,
    ref: v,
    onClick: w,
    "data-open": l,
    ...d ? {} : { onBlur: b, onKeyDown: _ }
  }) : null), { styles: E, attributes: I } = _r(
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
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(bt, { children: e }) : /* @__PURE__ */ $(bt, { children: [
    D,
    /* @__PURE__ */ p(dn, { id: "js-toggletip-portal", children: /* @__PURE__ */ $(
      "div",
      {
        id: m,
        ref: h,
        role: "status",
        className: `${zr["c-toggletip"]} ${l && zr["c-toggletip--active"]} ${a ?? ""}`,
        style: E.popper,
        ...I.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: zr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: E.arrow
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
const Wr = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, of = Object.freeze({
  ESC: 27
}), ts = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s
}) => {
  const [d, f] = te(!1), l = J(null), u = J(null), v = J(), h = t || At(), m = (T) => {
    d || f(!d);
  }, b = (T) => f(!1), w = (T) => {
    (!d || document.activeElement !== l.current) && f(!d);
  }, _ = () => {
    window.clearTimeout(v.current);
  }, D = (T) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, E = (T) => {
    (T.keyCode | T.which) === of.ESC && d && f(!d);
  }, I = Re.map(e, (T) => ct(T) ? Pe(T, {
    ...T.props,
    "aria-describedby": t,
    ref: l,
    onFocus: m,
    onBlur: b,
    onMouseEnter: w,
    onMouseLeave: D,
    onKeyDown: E
  }) : null), { styles: x, attributes: F } = _r(
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
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(bt, { children: e }) : /* @__PURE__ */ $(bt, { children: [
    I,
    /* @__PURE__ */ p(dn, { id: "js-tooltip-portal", children: /* @__PURE__ */ $(
      "div",
      {
        id: h,
        ref: u,
        role: "tooltip",
        "data-open": d,
        onMouseEnter: _,
        onMouseLeave: D,
        className: `${Wr["c-tooltip"]} ${d && Wr["c-tooltip--active"]} ${a ?? ""}`,
        style: x.popper,
        ...F.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Wr["c-tooltip__arrow"],
              "data-popper-arrow": !0,
              style: x.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
ts.defaultProps = {
  placement: "auto"
};
ts.propTypes = {
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
const Ro = ut(), ns = ({
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
  const [f, l] = te(null), u = [
    ...e.reduce(
      (_, D, E) => [
        ..._,
        document.querySelector(D.target) ? { id: E + 1, ...D } : null
      ],
      []
    ).filter((_) => _ !== null)
  ], v = (_) => u.filter((D) => D.id === _).reduce((D, E) => ({ ...D, ...E }), {}), h = (_) => {
    const D = document.querySelector("#root");
    D.inert = _;
  }, m = () => {
    l((_) => _ < u.length ? _ + 1 : _);
  }, b = () => {
    l((_) => _ > 0 + 1 ? _ - 1 : _);
  }, w = () => {
    l(null), n(!t), h(!1), r && r.current.focus();
  };
  return Q(() => {
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
          onClose: w
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(dn, { id: "js-tour", children: t && /* @__PURE__ */ $(bt, { children: [
        /* @__PURE__ */ p(af, {}),
        /* @__PURE__ */ p(
          rs,
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
ns.defaultProps = {
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
ns.propTypes = {
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
}, rs = ({
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
  } = Te(Ro), h = J(), { onClose: m, onPrev: b, onNext: w } = c, { styles: _, attributes: D } = _r(
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
  ), E = () => ct(f) ? f : xs("p", { className: It["tour-description"] }, [
    f
  ]), I = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), w();
  };
  return /* @__PURE__ */ $(bt, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: ne({ [It["c-layout"]]: !v }),
        "data-class": "c-layout"
      }
    ),
    /* @__PURE__ */ $(
      "div",
      {
        id: `unique-id-tour-element-${s}`,
        ref: h,
        style: _.popper,
        className: ne({
          [It["c-tour-content"]]: !v,
          "animate__animated animate__fadeIn animate__faster": a,
          [r]: r
        }),
        ...e,
        ...D.popper,
        children: [
          /* @__PURE__ */ $("span", { className: "u-sr-only", children: [
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
              className: ne({ [It["c-tour-progress"]]: !v }),
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
          /* @__PURE__ */ $(
            "div",
            {
              className: ne({
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
rs.propTypes = {
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
const af = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r, defaultStyle: a } = Te(Ro), [i, c] = te({}), s = () => {
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
  return Q(() => (n && s(), () => {
    c({});
  }), [n]), Q(() => {
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
        [It["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [r]: r
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: It["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, sf = "_active_i7dnv_90", lf = "_iconPulse_i7dnv_1", be = {
  "c-vid": "_c-vid_i7dnv_1",
  "c-vid__caption": "_c-vid__caption_i7dnv_19",
  "c-vid__container": "_c-vid__container_i7dnv_24",
  "c-vid__video": "_c-vid__video_i7dnv_44",
  "no-captions": "_no-captions_i7dnv_56",
  "c-vid__wrapper": "_c-vid__wrapper_i7dnv_60",
  "c-vid__icon-container": "_c-vid__icon-container_i7dnv_70",
  "c-vid__icon": "_c-vid__icon_i7dnv_70",
  active: sf,
  iconPulse: lf,
  "c-vid__progress-bg": "_c-vid__progress-bg_i7dnv_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_i7dnv_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_i7dnv_140",
  "c-vid__controls": "_c-vid__controls_i7dnv_150",
  "c-vid__button": "_c-vid__button_i7dnv_165",
  "c-vid__volume": "_c-vid__volume_i7dnv_180",
  "c-vid__volume-item": "_c-vid__volume-item_i7dnv_191",
  "c-vid__time": "_c-vid__time_i7dnv_202",
  "c-vid__subtitles": "_c-vid__subtitles_i7dnv_208"
}, os = ({
  src: e,
  width: t = "1000",
  hasDescription: n,
  description: r,
  addClass: a,
  poster: i,
  ...c
}) => {
  const [s, d] = te({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, l] = te({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [u, v] = te({
    state: !1,
    label: "Reproducir video"
  }), [h, m] = te({
    state: !0,
    label: "Volumen"
  }), [b, w] = te(100), [_, D] = te({
    state: !1,
    label: "Ver en pantalla completa"
  }), [E, I] = te(!1), [x, F] = te(100), T = J(null), N = J(null), W = J(null), G = J(null), j = J(null), Y = J(null), H = J(null), Z = J(null), [re, X] = te(!1), [K, ue] = Ya(), ie = (B) => {
    B.classList.add(`${be.active}`), setTimeout(() => {
      B.classList.remove(`${be.active}`);
    }, 650);
  };
  function P() {
    const B = N.current;
    u.state ? (B.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (B.play(), v({
      state: !0,
      label: "Pausar video"
    })), ie(Y.current);
  }
  function k() {
    const B = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, ee = T.current;
    B ? (D({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (D({
      state: !0,
      label: "Salir de pantalla completa"
    }), ee.requestFullscreen ? ee.requestFullscreen() : ee.mozRequestFullScreen ? ee.mozRequestFullScreen() : ee.webkitRequestFullScreen ? ee.webkitRequestFullScreen() : ee.msRequestFullscreen && ee.msRequestFullscreen());
  }
  function y(B) {
    const ee = parseInt(B, 10), ae = ee >= 3600 ? Math.floor(ee / 3600) : 0, me = Math.floor((ee - ae * 3600) / 60), Ie = ee - ae * 3600 - me * 60, dt = S(R(ae)), Fe = S(R(me)), we = S(R(Ie));
    return {
      hours: dt,
      minutes: Fe,
      seconds: we
    };
  }
  function O(B) {
    const ee = C(B.duration), ae = C(B.currentTime);
    l({
      totalSeconds: B.currentTime,
      hours: parseInt(y(B.currentTime).hours),
      minutes: parseInt(y(B.currentTime).minutes),
      seconds: parseInt(y(B.currentTime).seconds),
      string: ae
    }), d({
      totalSeconds: Math.floor(B.duration),
      hours: parseInt(y(B.duration).hours),
      minutes: parseInt(y(B.duration).minutes),
      seconds: parseInt(y(B.duration).seconds),
      string: ee
    });
  }
  function C(B) {
    return parseInt(B, 10) <= 3600 ? `${y(B).minutes}:${y(B).seconds}` : `${y(B).hours}:${y(B).minutes}:${y(B).seconds}`;
  }
  function R(B) {
    return B < 10 ? B = "0" + B : B;
  }
  function S(B) {
    return isNaN(B) ? "00" : B;
  }
  function A(B) {
    const ee = G.current, ae = N.current, Ie = B.nativeEvent.offsetX / ee.offsetWidth * ae.duration;
    ae.currentTime = Ie;
  }
  function q(B) {
    const ee = N.current, ae = B.target.value, me = ae / 100;
    F(ae), w(ae), ee.volume = me, h.state || m({
      state: !0,
      label: "Volumen"
    });
  }
  const U = () => {
    if (h.state) {
      m({
        state: !1,
        label: "Mutear video"
      });
      const B = N.current, ee = 0, ae = ee;
      F(ee), B.volume = ae;
    } else {
      m({
        state: !0,
        label: "Volumen"
      });
      const B = N.current, ee = b, ae = ee / 100;
      F(ee), B.volume = ae;
    }
  }, V = function(B) {
    (B.keyCode || B.which) === 32 && P();
  }, de = function(B) {
    const ee = Math.floor(
      G.current.getAttribute("aria-valuenow")
    );
    if (document.activeElement === j.current)
      return null;
    if ((B.keyCode || B.which) === 37) {
      const ae = ee - 5;
      ae >= 0 ? N.current.currentTime = ae : N.current.currentTime = 0, ie(Z.current);
    }
    if ((B.keyCode || B.which) === 39) {
      const ae = ee + 5;
      ae >= N.current.duration ? N.current.currentTime = N.current.duration : N.current.currentTime = ae, ie(H.current);
    }
  }, L = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return Q(() => {
    const B = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(B, "caption") && X(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(B, "volume") && F(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), Q(() => {
    localStorage.setItem(
      "ui-video",
      JSON.stringify({ caption: re, volume: x })
    );
  }, [re, x]), Q(() => (W.current ? W.current.addEventListener("error", () => {
    I(!0);
  }) : I(!0), e.caption && I(!1), () => {
    W.current && W.current.removeEventListener("error", () => {
      I(!0);
    });
  }), [e.caption]), Q(() => {
    u.state && !ue && P();
  }, [ue]), ur(() => {
    N.current && K(N.current);
  }, [N]), /* @__PURE__ */ $(
    "figure",
    {
      className: `${be["c-vid"]} ${a}`,
      style: { maxWidth: `${t}px` },
      onKeyDown: (B) => de(B),
      ...c,
      children: [
        /* @__PURE__ */ $("div", { className: `${be["c-vid__container"]} ${a}`, ref: T, children: [
          /* @__PURE__ */ $("div", { className: be["c-vid__wrapper"], children: [
            /* @__PURE__ */ $(
              "video",
              {
                preload: "none",
                ref: N,
                onTimeUpdate: (B) => O(B.target),
                onLoadedData: (B) => O(B.target),
                onClick: P,
                className: `${be["c-vid__video"]} ${re ? "" : be["no-captions"]}`,
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
            /* @__PURE__ */ $("div", { className: be["c-vid__icon-container"], children: [
              /* @__PURE__ */ p("div", { ref: Z, className: be["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "48",
                  width: "48",
                  viewBox: "0 0 48 48",
                  children: /* @__PURE__ */ p(
                    "path",
                    {
                      id: "fast_rewind",
                      d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z"
                    }
                  )
                }
              ) }) }),
              /* @__PURE__ */ p("div", { ref: Y, className: be["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "48",
                  width: "48",
                  viewBox: "0 0 48 48",
                  children: u.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p(
                    "path",
                    {
                      id: "pause",
                      d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z"
                    }
                  )
                }
              ) }) }),
              /* @__PURE__ */ p("div", { ref: H, className: be["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "48",
                  width: "48",
                  viewBox: "0 0 48 48",
                  children: /* @__PURE__ */ p(
                    "path",
                    {
                      id: "fast_forward",
                      d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z"
                    }
                  )
                }
              ) }) })
            ] })
          ] }),
          /* @__PURE__ */ p("div", { className: be["progress-container"], children: /* @__PURE__ */ $(
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
              onClick: A,
              ref: G,
              children: [
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: be["c-vid__progress-bar"],
                    style: {
                      transform: `scaleX(${isNaN(
                        f.totalSeconds / s.totalSeconds
                      ) ? 0 : f.totalSeconds / s.totalSeconds})`
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
          /* @__PURE__ */ $("div", { className: be["c-vid__controls"], children: [
            /* @__PURE__ */ p(
              "button",
              {
                className: `${be["c-vid__button"]} js-button-video-play`,
                "aria-label": u.label,
                onClick: P,
                "data-description": "Este botón reproduce el video",
                children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: u.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" })
                  }
                ) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${be["c-vid__button"]} js-button-video-volumen`,
                "aria-label": h.label,
                "data-description": "Este botón controla el volumen",
                onClick: U,
                children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: h.state ? /* @__PURE__ */ p(
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
                    )
                  }
                ) })
              }
            ),
            /* @__PURE__ */ $("label", { className: be["c-vid__volume"], htmlFor: "volumeControl", children: [
              /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
              /* @__PURE__ */ p(
                "input",
                {
                  className: be["c-vid__volume-item"],
                  ref: j,
                  id: "volumeControl",
                  type: "range",
                  min: "0",
                  max: "100",
                  step: "5",
                  value: x,
                  onChange: q,
                  "aria-valuetext": `${x}%`
                }
              )
            ] }),
            /* @__PURE__ */ $("p", { className: be["c-vid__time"], "aria-hidden": "true", children: [
              /* @__PURE__ */ p("span", { children: f.string }),
              "/",
              /* @__PURE__ */ p("span", { children: s.string })
            ] }),
            /* @__PURE__ */ p(
              "button",
              {
                disabled: E,
                "aria-pressed": E ? void 0 : re,
                onClick: () => X(!re),
                "aria-label": "Subtítulos",
                className: `${be["c-vid__button"]} ${be["c-vid__subtitles"]}`,
                children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: E ? /* @__PURE__ */ p(
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
                    )
                  }
                ) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: be["c-vid__button"],
                "aria-label": _.label,
                onClick: k,
                children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: _.state ? /* @__PURE__ */ p(
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
                    )
                  }
                ) })
              }
            )
          ] })
        ] }),
        n && /* @__PURE__ */ $("figcaption", { className: be["c-vid__caption"], children: [
          /* @__PURE__ */ $("strong", { children: [
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
os.propTypes = {
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
os.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
var kn = {}, cf = {
  get exports() {
    return kn;
  },
  set exports(e) {
    kn = e;
  }
}, as = {};
function is(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = is(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Ca() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = is(e)) && (r && (r += " "), r += t);
  return r;
}
const uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Ca,
  default: Ca
}, Symbol.toStringTag, { value: "Module" })), df = /* @__PURE__ */ Es(uf);
var Oe = {}, wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.dontSetMe = gf;
wt.findInArray = ff;
wt.int = hf;
wt.isFunction = pf;
wt.isNum = vf;
function ff(e, t) {
  for (var n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function pf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function vf(e) {
  return typeof e == "number" && !isNaN(e);
}
function hf(e) {
  return parseInt(e, 10);
}
function gf(e, t, n) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
Gt.browserPrefixToKey = ls;
Gt.browserPrefixToStyle = mf;
Gt.default = void 0;
Gt.getPrefix = ss;
var Ur = ["Moz", "Webkit", "O", "ms"];
function ss() {
  var e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var r = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!r || n in r)
    return "";
  for (var a = 0; a < Ur.length; a++)
    if (ls(n, Ur[a]) in r)
      return Ur[a];
  return "";
}
function ls(e, t) {
  return t ? "".concat(t).concat(bf(e)) : e;
}
function mf(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function bf(e) {
  for (var t = "", n = !0, r = 0; r < e.length; r++)
    n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
  return t;
}
var yf = ss();
Gt.default = yf;
function lo(e) {
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lo(e);
}
Object.defineProperty(Oe, "__esModule", {
  value: !0
});
Oe.addClassName = ps;
Oe.addEvent = xf;
Oe.addUserSelectStyles = Af;
Oe.createCSSTransform = Rf;
Oe.createSVGTransform = Df;
Oe.getTouch = Nf;
Oe.getTouchIdentifier = If;
Oe.getTranslation = Do;
Oe.innerHeight = Sf;
Oe.innerWidth = Cf;
Oe.matchesSelector = fs;
Oe.matchesSelectorAndParentsTo = wf;
Oe.offsetXYFromParent = Pf;
Oe.outerHeight = Ef;
Oe.outerWidth = Tf;
Oe.removeClassName = vs;
Oe.removeEvent = Of;
Oe.removeUserSelectStyles = Mf;
var et = wt, Pa = _f(Gt);
function cs(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (cs = function(a) {
    return a ? n : t;
  })(e);
}
function _f(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || lo(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = cs(t);
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
function us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ra(Object(n), !0).forEach(function(r) {
      ds(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ra(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ds(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xn = "";
function fs(e, t) {
  return Xn || (Xn = (0, et.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, et.isFunction)(e[n]);
  })), (0, et.isFunction)(e[Xn]) ? e[Xn](t) : !1;
}
function wf(e, t, n) {
  var r = e;
  do {
    if (fs(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function xf(e, t, n, r) {
  if (e) {
    var a = us({
      capture: !0
    }, r);
    e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
  }
}
function Of(e, t, n, r) {
  if (e) {
    var a = us({
      capture: !0
    }, r);
    e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
  }
}
function Ef(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, et.int)(n.borderTopWidth), t += (0, et.int)(n.borderBottomWidth), t;
}
function Tf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, et.int)(n.borderLeftWidth), t += (0, et.int)(n.borderRightWidth), t;
}
function Sf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingTop), t -= (0, et.int)(n.paddingBottom), t;
}
function Cf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingLeft), t -= (0, et.int)(n.paddingRight), t;
}
function Pf(e, t, n) {
  var r = t === t.ownerDocument.body, a = r ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - a.left) / n, c = (e.clientY + t.scrollTop - a.top) / n;
  return {
    x: i,
    y: c
  };
}
function Rf(e, t) {
  var n = Do(e, t, "px");
  return ds({}, (0, Pa.browserPrefixToKey)("transform", Pa.default), n);
}
function Df(e, t) {
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
function Nf(e, t) {
  return e.targetTouches && (0, et.findInArray)(e.targetTouches, function(n) {
    return t === n.identifier;
  }) || e.changedTouches && (0, et.findInArray)(e.changedTouches, function(n) {
    return t === n.identifier;
  });
}
function If(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Af(e) {
  if (e) {
    var t = e.getElementById("react-draggable-style-el");
    t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && ps(e.body, "react-draggable-transparent-selection");
  }
}
function Mf(e) {
  if (e)
    try {
      if (e.body && vs(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function ps(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function vs(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var xt = {};
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.canDragX = Lf;
xt.canDragY = jf;
xt.createCoreData = Bf;
xt.createDraggableData = qf;
xt.getBoundPosition = $f;
xt.getControlPosition = Ff;
xt.snapToGrid = kf;
var Qe = wt, en = Oe;
function $f(e, t, n) {
  if (!e.props.bounds)
    return [t, n];
  var r = e.props.bounds;
  r = typeof r == "string" ? r : Vf(r);
  var a = No(e);
  if (typeof r == "string") {
    var i = a.ownerDocument, c = i.defaultView, s;
    if (r === "parent" ? s = a.parentNode : s = i.querySelector(r), !(s instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    var d = s, f = c.getComputedStyle(a), l = c.getComputedStyle(d);
    r = {
      left: -a.offsetLeft + (0, Qe.int)(l.paddingLeft) + (0, Qe.int)(f.marginLeft),
      top: -a.offsetTop + (0, Qe.int)(l.paddingTop) + (0, Qe.int)(f.marginTop),
      right: (0, en.innerWidth)(d) - (0, en.outerWidth)(a) - a.offsetLeft + (0, Qe.int)(l.paddingRight) - (0, Qe.int)(f.marginRight),
      bottom: (0, en.innerHeight)(d) - (0, en.outerHeight)(a) - a.offsetTop + (0, Qe.int)(l.paddingBottom) - (0, Qe.int)(f.marginBottom)
    };
  }
  return (0, Qe.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Qe.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Qe.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Qe.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function kf(e, t, n) {
  var r = Math.round(t / e[0]) * e[0], a = Math.round(n / e[1]) * e[1];
  return [r, a];
}
function Lf(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function jf(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Ff(e, t, n) {
  var r = typeof t == "number" ? (0, en.getTouch)(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  var a = No(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, en.offsetXYFromParent)(r || e, i, n.props.scale);
}
function Bf(e, t, n) {
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
function qf(e, t) {
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
function Vf(e) {
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
var wr = {}, xr = {};
Object.defineProperty(xr, "__esModule", {
  value: !0
});
xr.default = Yf;
function Yf() {
}
function lr(e) {
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lr(e);
}
Object.defineProperty(wr, "__esModule", {
  value: !0
});
wr.default = void 0;
var Hr = Wf(Le), Ke = Io(o), zf = Io(ka), $e = Oe, Rt = xt, Gr = wt, wn = Io(xr);
function Io(e) {
  return e && e.__esModule ? e : { default: e };
}
function hs(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (hs = function(a) {
    return a ? n : t;
  })(e);
}
function Wf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || lr(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = hs(t);
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
  return Zf(e) || Gf(e, t) || Hf(e, t) || Uf();
}
function Uf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hf(e, t) {
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
function Gf(e, t) {
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
function Zf(e) {
  if (Array.isArray(e))
    return e;
}
function Xf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ia(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Kf(e, t, n) {
  return t && Ia(e.prototype, t), n && Ia(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Qf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function Jf(e) {
  var t = tp();
  return function() {
    var r = cr(e), a;
    if (t) {
      var i = cr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return ep(this, a);
  };
}
function ep(e, t) {
  if (t && (lr(t) === "object" || typeof t == "function"))
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
function tp() {
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
}, Dt = vt.mouse, Or = /* @__PURE__ */ function(e) {
  Qf(n, e);
  var t = Jf(n);
  function n() {
    var r;
    Xf(this, n);
    for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++)
      i[c] = arguments[c];
    return r = t.call.apply(t, [this].concat(i)), at(ke(r), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), at(ke(r), "mounted", !1), at(ke(r), "handleDragStart", function(s) {
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
        var u = (0, Rt.getControlPosition)(s, l, ke(r));
        if (u != null) {
          var v = u.x, h = u.y, m = (0, Rt.createCoreData)(ke(r), v, h);
          (0, wn.default)("DraggableCore: handleDragStart: %j", m), (0, wn.default)("calling", r.props.onStart);
          var b = r.props.onStart(s, m);
          b === !1 || r.mounted === !1 || (r.props.enableUserSelectHack && (0, $e.addUserSelectStyles)(f), r.setState({
            dragging: !0,
            lastX: v,
            lastY: h
          }), (0, $e.addEvent)(f, Dt.move, r.handleDrag), (0, $e.addEvent)(f, Dt.stop, r.handleDragStop));
        }
      }
    }), at(ke(r), "handleDrag", function(s) {
      var d = (0, Rt.getControlPosition)(s, r.state.touchIdentifier, ke(r));
      if (d != null) {
        var f = d.x, l = d.y;
        if (Array.isArray(r.props.grid)) {
          var u = f - r.state.lastX, v = l - r.state.lastY, h = (0, Rt.snapToGrid)(r.props.grid, u, v), m = Da(h, 2);
          if (u = m[0], v = m[1], !u && !v)
            return;
          f = r.state.lastX + u, l = r.state.lastY + v;
        }
        var b = (0, Rt.createCoreData)(ke(r), f, l);
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
    }), at(ke(r), "handleDragStop", function(s) {
      if (r.state.dragging) {
        var d = (0, Rt.getControlPosition)(s, r.state.touchIdentifier, ke(r));
        if (d != null) {
          var f = d.x, l = d.y;
          if (Array.isArray(r.props.grid)) {
            var u = f - r.state.lastX || 0, v = l - r.state.lastY || 0, h = (0, Rt.snapToGrid)(r.props.grid, u, v), m = Da(h, 2);
            u = m[0], v = m[1], f = r.state.lastX + u, l = r.state.lastY + v;
          }
          var b = (0, Rt.createCoreData)(ke(r), f, l), w = r.props.onStop(s, b);
          if (w === !1 || r.mounted === !1)
            return !1;
          var _ = r.findDOMNode();
          _ && r.props.enableUserSelectHack && (0, $e.removeUserSelectStyles)(_.ownerDocument), (0, wn.default)("DraggableCore: handleDragStop: %j", b), r.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), _ && ((0, wn.default)("DraggableCore: Removing handlers"), (0, $e.removeEvent)(_.ownerDocument, Dt.move, r.handleDrag), (0, $e.removeEvent)(_.ownerDocument, Dt.stop, r.handleDragStop));
        }
      }
    }), at(ke(r), "onMouseDown", function(s) {
      return Dt = vt.mouse, r.handleDragStart(s);
    }), at(ke(r), "onMouseUp", function(s) {
      return Dt = vt.mouse, r.handleDragStop(s);
    }), at(ke(r), "onTouchStart", function(s) {
      return Dt = vt.touch, r.handleDragStart(s);
    }), at(ke(r), "onTouchEnd", function(s) {
      return Dt = vt.touch, r.handleDragStop(s);
    }), r;
  }
  return Kf(n, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var a = this.findDOMNode();
      a && (0, $e.addEvent)(a, vt.touch.start, this.onTouchStart, {
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
        (0, $e.removeEvent)(i, vt.mouse.move, this.handleDrag), (0, $e.removeEvent)(i, vt.touch.move, this.handleDrag), (0, $e.removeEvent)(i, vt.mouse.stop, this.handleDragStop), (0, $e.removeEvent)(i, vt.touch.stop, this.handleDragStop), (0, $e.removeEvent)(a, vt.touch.start, this.onTouchStart, {
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
      return (a = this.props) !== null && a !== void 0 && a.nodeRef ? (i = this.props) === null || i === void 0 || (c = i.nodeRef) === null || c === void 0 ? void 0 : c.current : zf.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Hr.cloneElement(Hr.Children.only(this.props.children), {
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
}(Hr.Component);
wr.default = Or;
at(Or, "displayName", "DraggableCore");
at(Or, "propTypes", {
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
  className: Gr.dontSetMe,
  style: Gr.dontSetMe,
  transform: Gr.dontSetMe
});
at(Or, "defaultProps", {
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
  var n = m(Le), r = v(o), a = v(ka), i = v(df), c = Oe, s = xt, d = wt, f = v(wr), l = v(xr), u = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
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
    for (var A in y)
      if (A !== "default" && Object.prototype.hasOwnProperty.call(y, A)) {
        var q = S ? Object.getOwnPropertyDescriptor(y, A) : null;
        q && (q.get || q.set) ? Object.defineProperty(R, A, q) : R[A] = y[A];
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
    var C = _(y, O), R, S;
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(y);
      for (S = 0; S < A.length; S++)
        R = A[S], !(O.indexOf(R) >= 0) && Object.prototype.propertyIsEnumerable.call(y, R) && (C[R] = y[R]);
    }
    return C;
  }
  function _(y, O) {
    if (y == null)
      return {};
    var C = {}, R = Object.keys(y), S, A;
    for (A = 0; A < R.length; A++)
      S = R[A], !(O.indexOf(S) >= 0) && (C[S] = y[S]);
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
  function E(y) {
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
  function I(y, O) {
    return W(y) || N(y, O) || F(y, O) || x();
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
  function N(y, O) {
    var C = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (C != null) {
      var R = [], S = !0, A = !1, q, U;
      try {
        for (C = C.call(y); !(S = (q = C.next()).done) && (R.push(q.value), !(O && R.length === O)); S = !0)
          ;
      } catch (V) {
        A = !0, U = V;
      } finally {
        try {
          !S && C.return != null && C.return();
        } finally {
          if (A)
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
  function G(y, O) {
    if (!(y instanceof O))
      throw new TypeError("Cannot call a class as a function");
  }
  function j(y, O) {
    for (var C = 0; C < O.length; C++) {
      var R = O[C];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(y, R.key, R);
    }
  }
  function Y(y, O, C) {
    return O && j(y.prototype, O), C && j(y, C), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function H(y, O) {
    if (typeof O != "function" && O !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(O && O.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), O && Z(y, O);
  }
  function Z(y, O) {
    return Z = Object.setPrototypeOf || function(R, S) {
      return R.__proto__ = S, R;
    }, Z(y, O);
  }
  function re(y) {
    var O = ue();
    return function() {
      var R = ie(y), S;
      if (O) {
        var A = ie(this).constructor;
        S = Reflect.construct(R, arguments, A);
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
  function ue() {
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
  var k = /* @__PURE__ */ function(y) {
    H(C, y);
    var O = re(C);
    function C(R) {
      var S;
      return G(this, C), S = O.call(this, R), P(K(S), "onDragStart", function(A, q) {
        (0, l.default)("Draggable: onDragStart: %j", q);
        var U = S.props.onStart(A, (0, s.createDraggableData)(K(S), q));
        if (U === !1)
          return !1;
        S.setState({
          dragging: !0,
          dragged: !0
        });
      }), P(K(S), "onDrag", function(A, q) {
        if (!S.state.dragging)
          return !1;
        (0, l.default)("Draggable: onDrag: %j", q);
        var U = (0, s.createDraggableData)(K(S), q), V = {
          x: U.x,
          y: U.y
        };
        if (S.props.bounds) {
          var de = V.x, L = V.y;
          V.x += S.state.slackX, V.y += S.state.slackY;
          var B = (0, s.getBoundPosition)(K(S), V.x, V.y), ee = I(B, 2), ae = ee[0], me = ee[1];
          V.x = ae, V.y = me, V.slackX = S.state.slackX + (de - V.x), V.slackY = S.state.slackY + (L - V.y), U.x = V.x, U.y = V.y, U.deltaX = V.x - S.state.x, U.deltaY = V.y - S.state.y;
        }
        var Ie = S.props.onDrag(A, U);
        if (Ie === !1)
          return !1;
        S.setState(V);
      }), P(K(S), "onDragStop", function(A, q) {
        if (!S.state.dragging)
          return !1;
        var U = S.props.onStop(A, (0, s.createDraggableData)(K(S), q));
        if (U === !1)
          return !1;
        (0, l.default)("Draggable: onDragStop: %j", q);
        var V = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, de = !!S.props.position;
        if (de) {
          var L = S.props.position, B = L.x, ee = L.y;
          V.x = B, V.y = ee;
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
        prevPropsPosition: E({}, R.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, R.position && !(R.onDrag || R.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), S;
    }
    return Y(C, [{
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
        var S, A, q;
        return (S = (A = this.props) === null || A === void 0 || (q = A.nodeRef) === null || q === void 0 ? void 0 : q.current) !== null && S !== void 0 ? S : a.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var S, A = this.props;
        A.axis, A.bounds;
        var q = A.children, U = A.defaultPosition, V = A.defaultClassName, de = A.defaultClassNameDragging, L = A.defaultClassNameDragged, B = A.position, ee = A.positionOffset;
        A.scale;
        var ae = w(A, u), me = {}, Ie = null, dt = !!B, Fe = !dt || this.state.dragging, we = B || U, Ve = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && Fe ? this.state.x : we.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && Fe ? this.state.y : we.y
        };
        this.state.isElementSVG ? Ie = (0, c.createSVGTransform)(Ve, ee) : me = (0, c.createCSSTransform)(Ve, ee);
        var Xe = (0, i.default)(q.props.className || "", V, (S = {}, P(S, de, this.state.dragging), P(S, L, this.state.dragged), S));
        return /* @__PURE__ */ n.createElement(f.default, b({}, ae, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ n.cloneElement(n.Children.only(q), {
          className: Xe,
          style: E(E({}, q.props.style), me),
          transform: Ie
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(S, A) {
          var q = S.position, U = A.prevPropsPosition;
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
  e.default = k, P(k, "displayName", "Draggable"), P(k, "propTypes", E(E({}, f.default.propTypes), {}, {
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
  })), P(k, "defaultProps", E(E({}, f.default.defaultProps), {}, {
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
})(as);
var gs = as, ms = gs.default, np = gs.DraggableCore;
cf.exports = ms;
kn.default = ms;
kn.DraggableCore = np;
const rp = (e, t, n) => {
  const [r, a] = te({ video1: "", video2: "" }), i = { video1: "/", video2: "/" }, c = {
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
        const { slides: m } = h[0], { modals: b } = m[u < 0 ? 0 : u], _ = (b || []).filter((D) => D.id === v)[0];
        a(_ || i);
      } else
        a(i);
    } else
      a(i);
  }, f = () => {
    const l = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (l) {
      const u = [...l].findIndex((w) => !w.hasAttribute("hidden"));
      s(n, u < 0 ? 0 : u);
      const v = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (v.length > 0) {
        const w = [...v].findIndex((_) => !_.hasAttribute("hidden"));
        s(n, w < 0 ? 0 : w);
      }
      const h = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      h && d(n, u, h.id);
      const m = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      m && d(n, u, m.id);
      const b = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      b && d(n, u, b.id);
    }
  };
  return Q(() => {
    if (e) {
      const l = new MutationObserver(f);
      return l.observe(document.querySelector(e || "body"), c), () => l.disconnect();
    }
  }, [f, c]), r;
}, op = "_progress_18ffq_85", ap = "_flex_18ffq_95", ip = "_gap_18ffq_152", sp = "_secondary_18ffq_189", lp = "_close_18ffq_285", cp = "_hide_18ffq_291", up = "_ico_smart_18ffq_299", ge = {
  "c-vid-container": "_c-vid-container_18ffq_1",
  "c-vid": "_c-vid_18ffq_1",
  "c-vid-controls": "_c-vid-controls_18ffq_34",
  "c-vid-controls-text": "_c-vid-controls-text_18ffq_75",
  progress: op,
  flex: ap,
  "progress-bar": "_progress-bar_18ffq_101",
  "c-vid-controls-volume": "_c-vid-controls-volume_18ffq_108",
  "c-vid-controls-volume-item": "_c-vid-controls-volume-item_18ffq_129",
  "no-captions": "_no-captions_18ffq_140",
  gap: ip,
  "menu-float": "_menu-float_18ffq_160",
  "menu-float-active": "_menu-float-active_18ffq_173",
  "menu-float-btn": "_menu-float-btn_18ffq_179",
  secondary: sp,
  "menu-float-btn-disable": "_menu-float-btn-disable_18ffq_213",
  "menu-float-btndrop": "_menu-float-btndrop_18ffq_223",
  "menu-float-dropdown": "_menu-float-dropdown_18ffq_242",
  "menu-float-dropdown-content": "_menu-float-dropdown-content_18ffq_250",
  close: lp,
  hide: cp,
  "image-Video": "_image-Video_18ffq_295",
  ico_smart: up
}, bs = ({ width: e, addClass: t, image: n, pathVideo: r, pathname: a }) => {
  const [i, c] = te("00:00"), [s, d] = te(!1), [f, l] = te(!1), [u, v] = te(!1), { video1: h, video2: m } = rp("body", r, a), [b, w] = te({
    state: !1,
    icon: Zr,
    label: "Reproducir video"
  }), [_, D] = te({
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
    const X = s ? Y.current : H.current;
    b.state ? (X.pause(), w({
      state: !1,
      icon: Zr,
      label: "Reproducir video"
    })) : (X.play(), w({
      state: !0,
      icon: vp,
      label: "Pausar video"
    }));
  }
  function x() {
    const X = s ? Y.current : H.current, K = re.current, ue = X.currentTime / X.duration * 100;
    K.style.flexBasis = `${ue}%`;
  }
  function F() {
    const X = s ? Y.current : H.current;
    K(X);
    function K(k) {
      const y = ue(k.currentTime);
      c(y);
    }
    function ue(k) {
      const y = parseInt(k, 10), O = Math.floor(y / 3600), C = Math.floor((y - O * 3600) / 60), R = y - O * 3600 - C * 60, S = P(ie(O)), A = P(ie(C)), q = P(ie(R));
      return `${S}:${A}:${q}`;
    }
    function ie(k) {
      return k < 10 ? k = "0" + k : k;
    }
    function P(k) {
      return isNaN(k) ? "00" : k;
    }
  }
  function T(X) {
    const K = Z.current, ue = s ? Y.current : H.current, P = X.nativeEvent.offsetX / K.offsetWidth * ue.duration;
    ue.currentTime = P;
  }
  const N = (X, K) => {
    d(!1), l(!1), K(X), W();
  }, W = () => {
    const X = re.current;
    X.style.flexBasis = "0%", w({
      state: !1,
      icon: Zr,
      label: "Reproducir video"
    });
  }, G = (X, K) => {
    const { x: ue, y: ie } = _.deltaPosition;
    D({
      ..._,
      deltaPosition: {
        x: ue + K.deltaX,
        y: ie + K.deltaY
      }
    });
  };
  Q(() => {
    W();
  }, [h, m]);
  const j = J(null), Y = J(), H = J(), Z = J(), re = J();
  return /* @__PURE__ */ p(kn, { nodeRef: j, handle: "strong", position: E, onDrag: G, children: /* @__PURE__ */ $(
    "div",
    {
      ref: j,
      className: `${ge["menu-float"]} ${(s || f) && ge["menu-float-active"]} ${ge["menu-float-box"]} ${ge.box} ${ge["no-cursor"]}`,
      children: [
        /* @__PURE__ */ $("div", { className: ge["menu-float-dropdown"], children: [
          (!s && !f || !!h && !s && !f || !!m && (s || f) || !!m && (s || f) && !s) && /* @__PURE__ */ $(
            "button",
            {
              onClick: () => {
                u || (N(!0, d), v(!0));
              },
              className: `${ge["menu-float-btn"]} ${ge["menu-float-btndrop"]} ${!s && !f && ge["menu-float-btn-disable"]}`,
              "aria-label": "Intérprete de lenguaje de señas",
              children: [
                !s && !f && (n ? /* @__PURE__ */ p("img", { className: ge["image-Video"], src: n }) : /* @__PURE__ */ $(
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
                /* @__PURE__ */ p(dp, {}),
                (s || f) && (s ? "1" : "2")
              ]
            }
          ),
          (s || f) && /* @__PURE__ */ $(bt, { children: [
            /* @__PURE__ */ $(
              "button",
              {
                tabIndex: -1,
                className: `${ge["menu-float-btn"]} ${ge.secondary}`,
                onClick: () => {
                  f && N(!0, d);
                },
                children: [
                  "1",
                  /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Aa, {}) })
                ]
              }
            ),
            /* @__PURE__ */ $(
              "button",
              {
                tabIndex: -1,
                className: `${ge["menu-float-btn"]} ${ge.secondary}`,
                onClick: () => {
                  s && N(!0, l);
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
                className: `${ge["menu-float-btn"]}`,
                onClick: () => !1,
                onMouseEnter: () => v(!0),
                onMouseLeave: () => v(!1),
                "aria-label": "Arrastrar video",
                children: /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(pp, {}) })
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
                children: /* @__PURE__ */ p(fp, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p("div", { className: `${ge["c-vid-container"]} ${t}`, display: s || f ? "true" : "false", children: /* @__PURE__ */ $("div", { className: `${ge["c-vid"]} ${t}`, style: { maxWidth: `${e}px` }, children: [
          s && /* @__PURE__ */ p(
            "video",
            {
              src: h,
              ref: Y,
              onTimeUpdate: () => {
                x(), F();
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
                x(), F();
              },
              className: `${ge["no-captions"]}`
            }
          ),
          /* @__PURE__ */ $("div", { className: ge["c-vid-controls"], children: [
            /* @__PURE__ */ p("button", { "aria-label": b.label, onClick: I, children: b.icon }),
            /* @__PURE__ */ p("div", { className: ge.flex, children: /* @__PURE__ */ $(
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
            /* @__PURE__ */ p("div", { className: ge["progress-content"], children: /* @__PURE__ */ p("div", { ref: Z, className: ge.progress, onClick: T, children: /* @__PURE__ */ p("div", { ref: re, className: ge["progress-bar"], onChange: x }) }) })
          ] })
        ] }) })
      ]
    }
  ) });
};
bs.propTypes = {
  width: o.string,
  addClass: o.string,
  image: o.string,
  pathVideo: o.array,
  pathname: o.string
};
bs.defaultProps = {
  width: "210"
};
const dp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", viewBox: "0 96 960 960", width: "48", children: /* @__PURE__ */ p("path", { d: "M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" }) }), fp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "close",
    d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
  }
) }), pp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "open_with",
    d: "m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z"
  }
) }), Aa = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 96 960 960", "aria-hidden": "true", children: /* @__PURE__ */ p("path", { d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z" }) }), Zr = /* @__PURE__ */ $(
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
), vp = /* @__PURE__ */ $(
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
), Ao = ut(), ys = ({ children: e, isVisible: t }) => {
  const [n, r] = te(!1), a = J(), i = () => r(!n), c = (s) => {
    a.current || (a.current = s);
  };
  return Q(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p(Ao.Provider, { value: { isOpen: n, onOpen: i, setRefButton: c, refButton: a }, children: e });
};
ys.defaultProps = {
  isVisible: !1
};
ys.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const hp = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r, refButton: a, isOpen: i } = Te(Ao);
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
    if (!ct(l))
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
hp.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onClick: o.func
};
const gp = ({
  ref: e,
  onInteractionOutside: t,
  onInteractionOutsideStart: n
}) => {
  const a = J({
    isPointerDown: !1,
    // Bandera para indicar si se ha hecho clic en el elemento
    onInteractionOutsideStart: n,
    onInteractionOutside: t
  }).current;
  a.onInteractionOutside = t, a.onInteractionOutsideStart = n, Q(() => {
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
const Xr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, Kr = Object.freeze({
  ESC: 27,
  TAB: 9
}), mp = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', _s = ({
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
  const { isOpen: f, onOpen: l, refButton: u } = Te(Ao), v = J(), h = J(), m = (E, I) => E === I.current;
  gp({ ref: h, onInteractionOutside: (E) => {
    !s && !m(E.target, u) && (l(), E.stopPropagation(), E.preventDefault());
  } });
  const w = (E) => {
    const I = v.current.querySelectorAll(mp), x = u.current, F = I[0], T = I[I.length - 1];
    if ((E.keyCode || E.which) === Kr.TAB && document.activeElement === T)
      return x.focus(), E.preventDefault();
    E.shiftKey && (E.keyCode || E.which) === Kr.TAB && document.activeElement === F && (x.focus(), E.preventDefault()), (E.keyCode || E.which) === Kr.ESC && x.focus();
  }, { styles: _, attributes: D } = _r(
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
  return Q(() => {
    const E = v.current;
    f ? (E.focus(), h.current = E) : h.current = null;
  }, [f, v]), a ? /* @__PURE__ */ p(bt, { children: t }) : /* @__PURE__ */ p(dn, { id: "js-popover-modal-portal", children: /* @__PURE__ */ $(
    "div",
    {
      id: e,
      ref: v,
      role: "status",
      tabIndex: -1,
      className: ne({
        [Xr["c-popover-modal"]]: !d,
        [Xr["c-popover-modal--active"]]: !d && f,
        "video-interpreter-ui-popover": "video-interpreter-ui-popover",
        [n]: n
      }),
      style: _.popper,
      onKeyDown: w,
      "data-hidden": !f,
      "data-popper": !0,
      ...!f && { hidden: !0 },
      ...D.popper,
      children: [
        t,
        r && /* @__PURE__ */ p(
          "div",
          {
            className: ne({
              [Xr["c-popover-modal__arrow"]]: !d
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
_s.propTypes = {
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
_s.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  disabledInteractOutside: !1
};
const bp = (e, t) => {
  const [n, r] = te(() => {
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
}, yp = (e, t, n) => {
  const [r, a] = te(n), i = e.map((s) => window.matchMedia(s)), c = () => {
    const s = i.findIndex((d) => d.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return Q(() => {
    a(c);
    const s = (d) => a(c);
    return i.forEach((d) => d.addEventListener("change", s)), () => {
      i.forEach((d) => d.removeEventListener("change", s));
    };
  }, []), r;
}, Op = () => {
  const [e, t] = bp("dark-mode-enabled"), n = yp(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return Q(() => {
    t(n);
  }, [n]), Q(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, ws = (e) => {
  let t = {};
  for (const n in e)
    if (typeof e[n] == "object") {
      const r = ws(e[n]);
      for (const a in r)
        t = {
          ...t,
          [n.includes("accents") || n.includes("palette") ? a : `${n}-${a}`]: r[a]
        };
    } else
      t[n] = e[n];
  return t;
}, Ep = (e) => ws(e);
export {
  js as Accordion,
  Ba as AccordionButton,
  qa as AccordionItem,
  Va as AccordionPanel,
  za as Audio,
  Wt as Button,
  Du as ButtonSection,
  Ga as CheckBox,
  Ml as CheckBoxGroup,
  Ll as Col,
  Fl as Content,
  hi as DragAndDrop,
  vi as DragAndDropContext,
  gi as Draggable,
  mi as Droppable,
  xp as Filter,
  bi as GeneralDraggable,
  Ce as Icon,
  yi as Image,
  _i as Input,
  hu as InputGroup,
  xi as InputLeftAddon,
  Oi as InputRightAddon,
  wi as InputStyle,
  bs as Interpreter,
  mu as Kbd,
  Ei as Link,
  bu as List,
  Si as ListItem,
  Ci as Modal,
  Ou as ModalCloseButton,
  Pi as ModalContent,
  hr as ModalContext,
  Ri as ModalOverlay,
  Li as NavSection,
  Ai as NumberDecrementStepper,
  Mi as NumberIncrementStepper,
  Di as NumberInput,
  gr as NumberInputContext,
  Ni as NumberInputField,
  Ii as NumberInputStepper,
  yu as OrderedList,
  $i as Pagination,
  wo as PaginationItem,
  Cu as Panel,
  mr as PanelContext,
  Iu as Paper,
  ys as PopoverModal,
  hp as PopoverModalButton,
  _s as PopoverModalContent,
  Ao as PopoverModalContext,
  dn as Portal,
  ju as Row,
  ki as Section,
  ji as Select,
  Fu as SelectGroup,
  Fi as Switch,
  Bi as Tab,
  qi as TabList,
  Vi as TabPanel,
  Yi as TabPanels,
  Bu as Tabs,
  xo as TabsContext,
  zi as TextArea,
  qu as ThemeProvider,
  es as Toggletip,
  ts as Tooltip,
  ns as Tour,
  Ro as TourContext,
  rs as TourElement,
  af as TourHelpLayer,
  _u as UnorderedList,
  os as Video,
  Ep as createTheme,
  Op as useDarkMode,
  gp as useInteractOutside,
  bp as useLocalStorage,
  yp as useMedia,
  Ya as useOnScreen,
  Eu as usePagination,
  $u as usePortal
};
