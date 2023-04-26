import * as zt from "react";
import ke, { Children as Re, useState as ee, useEffect as X, isValidElement as ct, cloneElement as Pe, forwardRef as _t, useRef as J, useMemo as _e, useLayoutEffect as Ia, useCallback as Le, createContext as ut, memo as $a, useReducer as co, useContext as Ee, useId as It, createElement as _s } from "react";
import * as ws from "react-dom";
import Ma, { unstable_batchedUpdates as hn, createPortal as ka } from "react-dom";
var Hn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xs(e) {
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
}, gn = {};
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
    return gn;
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
  return gn.Fragment = n, gn.jsx = c, gn.jsxs = c, gn;
}
var mn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function Es() {
  return Mo || (Mo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function y(g) {
      if (g === null || typeof g != "object")
        return null;
      var M = m && g[m] || g[b];
      return typeof M == "function" ? M : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(g) {
      {
        for (var M = arguments.length, z = new Array(M > 1 ? M - 1 : 0), re = 1; re < M; re++)
          z[re - 1] = arguments[re];
        D("error", g, z);
      }
    }
    function D(g, M, z) {
      {
        var re = w.ReactDebugCurrentFrame, ue = re.getStackAddendum();
        ue !== "" && (M += "%s", z = z.concat([ue]));
        var ve = z.map(function(se) {
          return String(se);
        });
        ve.unshift("Warning: " + M), Function.prototype.apply.call(console[g], console, ve);
      }
    }
    var I = !1, x = !1, B = !1, O = !1, A = !1, W;
    W = Symbol.for("react.module.reference");
    function V(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || A || g === a || g === f || g === l || O || g === h || I || x || B || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === d || g.$$typeof === c || g.$$typeof === s || g.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === W || g.getModuleId !== void 0));
    }
    function k(g, M, z) {
      var re = g.displayName;
      if (re)
        return re;
      var ue = M.displayName || M.name || "";
      return ue !== "" ? z + "(" + ue + ")" : z;
    }
    function Z(g) {
      return g.displayName || "Context";
    }
    function U(g) {
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
            var M = g;
            return Z(M) + ".Consumer";
          case c:
            var z = g;
            return Z(z._context) + ".Provider";
          case u:
            return k(g, g.render, "ForwardRef");
          case d:
            var re = g.displayName || null;
            return re !== null ? re : U(g.type) || "Memo";
          case v: {
            var ue = g, ve = ue._payload, se = ue._init;
            try {
              return U(se(ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, oe = 0, Q, G, ce, ae, C, j, _;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function E() {
      {
        if (oe === 0) {
          Q = console.log, G = console.info, ce = console.warn, ae = console.error, C = console.group, j = console.groupCollapsed, _ = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: T,
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
    function P() {
      {
        if (oe--, oe === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, g, {
              value: Q
            }),
            info: K({}, g, {
              value: G
            }),
            warn: K({}, g, {
              value: ce
            }),
            error: K({}, g, {
              value: ae
            }),
            group: K({}, g, {
              value: C
            }),
            groupCollapsed: K({}, g, {
              value: j
            }),
            groupEnd: K({}, g, {
              value: _
            })
          });
        }
        oe < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var S = w.ReactCurrentDispatcher, $;
    function q(g, M, z) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (ue) {
            var re = ue.stack.trim().match(/\n( *(at )?)/);
            $ = re && re[1] || "";
          }
        return `
` + $ + g;
      }
    }
    var H = !1, Y;
    {
      var F = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new F();
    }
    function R(g, M) {
      if (!g || H)
        return "";
      {
        var z = Y.get(g);
        if (z !== void 0)
          return z;
      }
      var re;
      H = !0;
      var ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ve;
      ve = S.current, S.current = null, E();
      try {
        if (M) {
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
            } catch (Ot) {
              re = Ot;
            }
            Reflect.construct(g, [], se);
          } else {
            try {
              se.call();
            } catch (Ot) {
              re = Ot;
            }
            g.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ot) {
            re = Ot;
          }
          g();
        }
      } catch (Ot) {
        if (Ot && re && typeof Ot.stack == "string") {
          for (var ie = Ot.stack.split(`
`), Be = re.stack.split(`
`), Oe = ie.length - 1, Se = Be.length - 1; Oe >= 1 && Se >= 0 && ie[Oe] !== Be[Se]; )
            Se--;
          for (; Oe >= 1 && Se >= 0; Oe--, Se--)
            if (ie[Oe] !== Be[Se]) {
              if (Oe !== 1 || Se !== 1)
                do
                  if (Oe--, Se--, Se < 0 || ie[Oe] !== Be[Se]) {
                    var ot = `
` + ie[Oe].replace(" at new ", " at ");
                    return g.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", g.displayName)), typeof g == "function" && Y.set(g, ot), ot;
                  }
                while (Oe >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        H = !1, S.current = ve, P(), Error.prepareStackTrace = ue;
      }
      var Xt = g ? g.displayName || g.name : "", Io = Xt ? q(Xt) : "";
      return typeof g == "function" && Y.set(g, Io), Io;
    }
    function te(g, M, z) {
      return R(g, !1);
    }
    function de(g) {
      var M = g.prototype;
      return !!(M && M.isReactComponent);
    }
    function ye(g, M, z) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return R(g, de(g));
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
            return te(g.render);
          case d:
            return ye(g.type, M, z);
          case v: {
            var re = g, ue = re._payload, ve = re._init;
            try {
              return ye(ve(ue), M, z);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, je = {}, dt = w.ReactDebugCurrentFrame;
    function Ze(g) {
      if (g) {
        var M = g._owner, z = ye(g.type, g._source, M ? M.type : null);
        dt.setExtraStackFrame(z);
      } else
        dt.setExtraStackFrame(null);
    }
    function Te(g, M, z, re, ue) {
      {
        var ve = Function.call.bind(xe);
        for (var se in g)
          if (ve(g, se)) {
            var ie = void 0;
            try {
              if (typeof g[se] != "function") {
                var Be = Error((re || "React class") + ": " + z + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              ie = g[se](M, se, re, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              ie = Oe;
            }
            ie && !(ie instanceof Error) && (Ze(ue), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", z, se, typeof ie), Ze(null)), ie instanceof Error && !(ie.message in je) && (je[ie.message] = !0, Ze(ue), N("Failed %s type: %s", z, ie.message), Ze(null));
          }
      }
    }
    var qe = Array.isArray;
    function Xe(g) {
      return qe(g);
    }
    function Mt(g) {
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
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mt(g)), kt(g);
    }
    var Fe = w.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ct, pn, nt;
    nt = {};
    function Vn(g) {
      if (xe.call(g, "ref")) {
        var M = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Tr(g) {
      if (xe.call(g, "key")) {
        var M = Object.getOwnPropertyDescriptor(g, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Or(g, M) {
      if (typeof g.ref == "string" && Fe.current && M && Fe.current.stateNode !== M) {
        var z = U(Fe.current.type);
        nt[z] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Fe.current.type), g.ref), nt[z] = !0);
      }
    }
    function Yn(g, M) {
      {
        var z = function() {
          Ct || (Ct = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function Er(g, M) {
      {
        var z = function() {
          pn || (pn = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var zn = function(g, M, z, re, ue, ve, se) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: M,
        ref: z,
        props: se,
        // Record the component responsible for creating this element.
        _owner: ve
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function Sr(g, M, z, re, ue) {
      {
        var ve, se = {}, ie = null, Be = null;
        z !== void 0 && (Lt(z), ie = "" + z), Tr(M) && (Lt(M.key), ie = "" + M.key), Vn(M) && (Be = M.ref, Or(M, ue));
        for (ve in M)
          xe.call(M, ve) && !ft.hasOwnProperty(ve) && (se[ve] = M[ve]);
        if (g && g.defaultProps) {
          var Oe = g.defaultProps;
          for (ve in Oe)
            se[ve] === void 0 && (se[ve] = Oe[ve]);
        }
        if (ie || Be) {
          var Se = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ie && Yn(se, Se), Be && Er(se, Se);
        }
        return zn(g, ie, Be, ue, re, Fe.current, se);
      }
    }
    var vn = w.ReactCurrentOwner, Wn = w.ReactDebugCurrentFrame;
    function be(g) {
      if (g) {
        var M = g._owner, z = ye(g.type, g._source, M ? M.type : null);
        Wn.setExtraStackFrame(z);
      } else
        Wn.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Ie(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function pt() {
      {
        if (vn.current) {
          var g = U(vn.current.type);
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
          var M = g.fileName.replace(/^.*[\\\/]/, ""), z = g.lineNumber;
          return `

Check your code at ` + M + ":" + z + ".";
        }
        return "";
      }
    }
    var Ye = {};
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
    function Tt(g, M) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var z = rt(M);
        if (Ye[z])
          return;
        Ye[z] = !0;
        var re = "";
        g && g._owner && g._owner !== vn.current && (re = " It was passed a child from " + U(g._owner.type) + "."), be(g), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, re), be(null);
      }
    }
    function ze(g, M) {
      {
        if (typeof g != "object")
          return;
        if (Xe(g))
          for (var z = 0; z < g.length; z++) {
            var re = g[z];
            Ie(re) && Tt(re, M);
          }
        else if (Ie(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var ue = y(g);
          if (typeof ue == "function" && ue !== g.entries)
            for (var ve = ue.call(g), se; !(se = ve.next()).done; )
              Ie(se.value) && Tt(se.value, M);
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
        else if (typeof M == "object" && (M.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === d))
          z = M.propTypes;
        else
          return;
        if (z) {
          var re = U(M);
          Te(z, g.props, "prop", re, g);
        } else if (M.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var ue = U(M);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(g) {
      {
        for (var M = Object.keys(g.props), z = 0; z < M.length; z++) {
          var re = M[z];
          if (re !== "children" && re !== "key") {
            be(g), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), be(null);
            break;
          }
        }
        g.ref !== null && (be(g), N("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    function Bt(g, M, z, re, ue, ve) {
      {
        var se = V(g);
        if (!se) {
          var ie = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = Ve(ue);
          Be ? ie += Be : ie += pt();
          var Oe;
          g === null ? Oe = "null" : Xe(g) ? Oe = "array" : g !== void 0 && g.$$typeof === t ? (Oe = "<" + (U(g.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof g, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, ie);
        }
        var Se = Sr(g, M, z, ue, ve);
        if (Se == null)
          return Se;
        if (se) {
          var ot = M.children;
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
    function Zt(g, M, z) {
      return Bt(g, M, z, !0);
    }
    function Un(g, M, z) {
      return Bt(g, M, z, !1);
    }
    var qt = Un, Vt = Zt;
    mn.Fragment = r, mn.jsx = qt, mn.jsxs = Vt;
  }()), mn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Os() : e.exports = Es();
})(Ts);
const bt = Rn.Fragment, p = Rn.jsx, L = Rn.jsxs;
var o = {}, ko = {
  get exports() {
    return o;
  },
  set exports(e) {
    o = e;
  }
}, nr = {}, Ss = {
  get exports() {
    return nr;
  },
  set exports(e) {
    nr = e;
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
var Lo;
function Cs() {
  if (Lo)
    return fe;
  Lo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function D(x) {
    if (typeof x == "object" && x !== null) {
      var B = x.$$typeof;
      switch (B) {
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
                  return B;
              }
          }
        case n:
          return B;
      }
    }
  }
  function I(x) {
    return D(x) === f;
  }
  return fe.AsyncMode = u, fe.ConcurrentMode = f, fe.ContextConsumer = s, fe.ContextProvider = c, fe.Element = t, fe.ForwardRef = l, fe.Fragment = r, fe.Lazy = m, fe.Memo = h, fe.Portal = n, fe.Profiler = i, fe.StrictMode = a, fe.Suspense = d, fe.isAsyncMode = function(x) {
    return I(x) || D(x) === u;
  }, fe.isConcurrentMode = I, fe.isContextConsumer = function(x) {
    return D(x) === s;
  }, fe.isContextProvider = function(x) {
    return D(x) === c;
  }, fe.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, fe.isForwardRef = function(x) {
    return D(x) === l;
  }, fe.isFragment = function(x) {
    return D(x) === r;
  }, fe.isLazy = function(x) {
    return D(x) === m;
  }, fe.isMemo = function(x) {
    return D(x) === h;
  }, fe.isPortal = function(x) {
    return D(x) === n;
  }, fe.isProfiler = function(x) {
    return D(x) === i;
  }, fe.isStrictMode = function(x) {
    return D(x) === a;
  }, fe.isSuspense = function(x) {
    return D(x) === d;
  }, fe.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === f || x === i || x === a || x === d || x === v || typeof x == "object" && x !== null && (x.$$typeof === m || x.$$typeof === h || x.$$typeof === c || x.$$typeof === s || x.$$typeof === l || x.$$typeof === y || x.$$typeof === w || x.$$typeof === N || x.$$typeof === b);
  }, fe.typeOf = D, fe;
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
var jo;
function Ps() {
  return jo || (jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function D(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === f || R === i || R === a || R === d || R === v || typeof R == "object" && R !== null && (R.$$typeof === m || R.$$typeof === h || R.$$typeof === c || R.$$typeof === s || R.$$typeof === l || R.$$typeof === y || R.$$typeof === w || R.$$typeof === N || R.$$typeof === b);
    }
    function I(R) {
      if (typeof R == "object" && R !== null) {
        var te = R.$$typeof;
        switch (te) {
          case t:
            var de = R.type;
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
                    return te;
                }
            }
          case n:
            return te;
        }
      }
    }
    var x = u, B = f, O = s, A = c, W = t, V = l, k = r, Z = m, U = h, K = n, oe = i, Q = a, G = d, ce = !1;
    function ae(R) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(R) || I(R) === u;
    }
    function C(R) {
      return I(R) === f;
    }
    function j(R) {
      return I(R) === s;
    }
    function _(R) {
      return I(R) === c;
    }
    function T(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function E(R) {
      return I(R) === l;
    }
    function P(R) {
      return I(R) === r;
    }
    function S(R) {
      return I(R) === m;
    }
    function $(R) {
      return I(R) === h;
    }
    function q(R) {
      return I(R) === n;
    }
    function H(R) {
      return I(R) === i;
    }
    function Y(R) {
      return I(R) === a;
    }
    function F(R) {
      return I(R) === d;
    }
    pe.AsyncMode = x, pe.ConcurrentMode = B, pe.ContextConsumer = O, pe.ContextProvider = A, pe.Element = W, pe.ForwardRef = V, pe.Fragment = k, pe.Lazy = Z, pe.Memo = U, pe.Portal = K, pe.Profiler = oe, pe.StrictMode = Q, pe.Suspense = G, pe.isAsyncMode = ae, pe.isConcurrentMode = C, pe.isContextConsumer = j, pe.isContextProvider = _, pe.isElement = T, pe.isForwardRef = E, pe.isFragment = P, pe.isLazy = S, pe.isMemo = $, pe.isPortal = q, pe.isProfiler = H, pe.isStrictMode = Y, pe.isSuspense = F, pe.isValidElementType = D, pe.typeOf = I;
  }()), pe;
}
var Fo;
function La() {
  return Fo || (Fo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Cs() : e.exports = Ps();
  }(Ss)), nr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Cr, Bo;
function Rs() {
  if (Bo)
    return Cr;
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
var Pr, qo;
function uo() {
  if (qo)
    return Pr;
  qo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pr = e, Pr;
}
var Rr, Vo;
function ja() {
  return Vo || (Vo = 1, Rr = Function.call.bind(Object.prototype.hasOwnProperty)), Rr;
}
var Dr, Yo;
function Ds() {
  if (Yo)
    return Dr;
  Yo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = uo(), n = {}, r = ja();
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
var Nr, zo;
function Ns() {
  if (zo)
    return Nr;
  zo = 1;
  var e = La(), t = Rs(), n = uo(), r = ja(), a = Ds(), i = function() {
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
    function d(C) {
      var j = C && (f && C[f] || C[l]);
      if (typeof j == "function")
        return j;
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
      any: N(),
      arrayOf: D,
      element: I(),
      elementType: x(),
      instanceOf: B,
      node: V(),
      objectOf: A,
      oneOf: O,
      oneOfType: W,
      shape: Z,
      exact: U
    };
    function m(C, j) {
      return C === j ? C !== 0 || 1 / C === 1 / j : C !== C && j !== j;
    }
    function b(C, j) {
      this.message = C, this.data = j && typeof j == "object" ? j : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function y(C) {
      if (process.env.NODE_ENV !== "production")
        var j = {}, _ = 0;
      function T(P, S, $, q, H, Y, F) {
        if (q = q || v, Y = Y || $, F !== n) {
          if (u) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = q + ":" + $;
            !j[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[te] = !0, _++);
          }
        }
        return S[$] == null ? P ? S[$] === null ? new b("The " + H + " `" + Y + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new b("The " + H + " `" + Y + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : C(S, $, q, H, Y);
      }
      var E = T.bind(null, !1);
      return E.isRequired = T.bind(null, !0), E;
    }
    function w(C) {
      function j(_, T, E, P, S, $) {
        var q = _[T], H = Q(q);
        if (H !== C) {
          var Y = G(q);
          return new b(
            "Invalid " + P + " `" + S + "` of type " + ("`" + Y + "` supplied to `" + E + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return y(j);
    }
    function N() {
      return y(c);
    }
    function D(C) {
      function j(_, T, E, P, S) {
        if (typeof C != "function")
          return new b("Property `" + S + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var $ = _[T];
        if (!Array.isArray($)) {
          var q = Q($);
          return new b("Invalid " + P + " `" + S + "` of type " + ("`" + q + "` supplied to `" + E + "`, expected an array."));
        }
        for (var H = 0; H < $.length; H++) {
          var Y = C($, H, E, P, S + "[" + H + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return y(j);
    }
    function I() {
      function C(j, _, T, E, P) {
        var S = j[_];
        if (!s(S)) {
          var $ = Q(S);
          return new b("Invalid " + E + " `" + P + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(C);
    }
    function x() {
      function C(j, _, T, E, P) {
        var S = j[_];
        if (!e.isValidElementType(S)) {
          var $ = Q(S);
          return new b("Invalid " + E + " `" + P + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(C);
    }
    function B(C) {
      function j(_, T, E, P, S) {
        if (!(_[T] instanceof C)) {
          var $ = C.name || v, q = ae(_[T]);
          return new b("Invalid " + P + " `" + S + "` of type " + ("`" + q + "` supplied to `" + E + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return y(j);
    }
    function O(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function j(_, T, E, P, S) {
        for (var $ = _[T], q = 0; q < C.length; q++)
          if (m($, C[q]))
            return null;
        var H = JSON.stringify(C, function(F, R) {
          var te = G(R);
          return te === "symbol" ? String(R) : R;
        });
        return new b("Invalid " + P + " `" + S + "` of value `" + String($) + "` " + ("supplied to `" + E + "`, expected one of " + H + "."));
      }
      return y(j);
    }
    function A(C) {
      function j(_, T, E, P, S) {
        if (typeof C != "function")
          return new b("Property `" + S + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var $ = _[T], q = Q($);
        if (q !== "object")
          return new b("Invalid " + P + " `" + S + "` of type " + ("`" + q + "` supplied to `" + E + "`, expected an object."));
        for (var H in $)
          if (r($, H)) {
            var Y = C($, H, E, P, S + "." + H, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return y(j);
    }
    function W(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var j = 0; j < C.length; j++) {
        var _ = C[j];
        if (typeof _ != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(_) + " at index " + j + "."
          ), c;
      }
      function T(E, P, S, $, q) {
        for (var H = [], Y = 0; Y < C.length; Y++) {
          var F = C[Y], R = F(E, P, S, $, q, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && H.push(R.data.expectedType);
        }
        var te = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new b("Invalid " + $ + " `" + q + "` supplied to " + ("`" + S + "`" + te + "."));
      }
      return y(T);
    }
    function V() {
      function C(j, _, T, E, P) {
        return K(j[_]) ? null : new b("Invalid " + E + " `" + P + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return y(C);
    }
    function k(C, j, _, T, E) {
      return new b(
        (C || "React class") + ": " + j + " type `" + _ + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function Z(C) {
      function j(_, T, E, P, S) {
        var $ = _[T], q = Q($);
        if (q !== "object")
          return new b("Invalid " + P + " `" + S + "` of type `" + q + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var H in C) {
          var Y = C[H];
          if (typeof Y != "function")
            return k(E, P, S, H, G(Y));
          var F = Y($, H, E, P, S + "." + H, n);
          if (F)
            return F;
        }
        return null;
      }
      return y(j);
    }
    function U(C) {
      function j(_, T, E, P, S) {
        var $ = _[T], q = Q($);
        if (q !== "object")
          return new b("Invalid " + P + " `" + S + "` of type `" + q + "` " + ("supplied to `" + E + "`, expected `object`."));
        var H = t({}, _[T], C);
        for (var Y in H) {
          var F = C[Y];
          if (r(C, Y) && typeof F != "function")
            return k(E, P, S, Y, G(F));
          if (!F)
            return new b(
              "Invalid " + P + " `" + S + "` key `" + Y + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(_[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var R = F($, Y, E, P, S + "." + Y, n);
          if (R)
            return R;
        }
        return null;
      }
      return y(j);
    }
    function K(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(K);
          if (C === null || s(C))
            return !0;
          var j = d(C);
          if (j) {
            var _ = j.call(C), T;
            if (j !== C.entries) {
              for (; !(T = _.next()).done; )
                if (!K(T.value))
                  return !1;
            } else
              for (; !(T = _.next()).done; ) {
                var E = T.value;
                if (E && !K(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(C, j) {
      return C === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function Q(C) {
      var j = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : oe(j, C) ? "symbol" : j;
    }
    function G(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var j = Q(C);
      if (j === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return j;
    }
    function ce(C) {
      var j = G(C);
      switch (j) {
        case "array":
        case "object":
          return "an " + j;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + j;
        default:
          return j;
      }
    }
    function ae(C) {
      return !C.constructor || !C.constructor.name ? v : C.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Nr;
}
var Ar, Wo;
function As() {
  if (Wo)
    return Ar;
  Wo = 1;
  var e = uo();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ar = function() {
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
  }, Ar;
}
if (process.env.NODE_ENV !== "production") {
  var Is = La(), $s = !0;
  ko.exports = Ns()(Is.isElement, $s);
} else
  ko.exports = As()();
const Ms = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, He = (e, t) => Re.toArray(e).filter((n) => t.indexOf(Ms(n)) !== -1), ks = ({ children: e, allowMultiple: t, defaultIndex: n, allowDifferentChildren: r }) => {
  const [a, i] = ee(), c = (u) => {
    t ? a.includes(u) ? i(a.filter((f) => f !== u)) : i([...a, u]) : i(u);
  };
  X(() => (i(t ? n || [] : n ?? null), () => {
    i(null);
  }), [t, n]);
  const s = Re.map(e, (u, f) => ct(u) ? Pe(u, { ...u.props, id: f, isOpen: a, onToggle: c }) : null);
  return /* @__PURE__ */ p("div", { children: r ? s : He(s, ["AccordionItem"]) });
};
ks.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  allowDifferentChildren: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
var Kr = {}, Ls = {
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
})(Ls);
const ne = Kr, me = (e) => (t, n, r) => {
  if (t[n] !== e)
    return new Error(
      `'${n}' in '${r}' 

 NO puedes pasar un valor de props para '${n}'.La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.`
    );
}, Jt = {
  "c-accordion__item": "_c-accordion__item_1xs3f_1",
  "c-accordion__button": "_c-accordion__button_1xs3f_10",
  "c-accordion": "_c-accordion_1xs3f_1",
  "c-accordion__panel": "_c-accordion__panel_1xs3f_33",
  "c-accordion__panel--active": "_c-accordion__panel--active_1xs3f_38",
  "c-accordion__panel-content": "_c-accordion__panel-content_1xs3f_42"
}, Fa = ({
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
}) => /* @__PURE__ */ L(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: ne({
      [`${Jt["c-accordion__button"]} u-flex`]: !s,
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
Fa.propTypes = {
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
Fa.defaultProps = {
  __TYPE: "AccordionButton"
};
const Ba = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a, defaultStyle: i, allowDifferentChildren: c }) => {
  const s = () => r(t), u = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, f = Re.map(e, (l) => ct(l) ? l.props.__TYPE === "AccordionButton" ? Pe(l, { ...l.props, id: t, onExpanded: s, isExpanded: u() }) : Pe(l, { ...l.props, id: t, isExpanded: u() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: ne({
        [Jt["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: c ? f : He(f, ["AccordionButton", "AccordionPanel"])
    }
  );
};
Ba.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  defaultStyle: o.bool,
  allowDifferentChildren: o.bool,
  __TYPE: me("AccordionItem")
};
Ba.defaultProps = {
  __TYPE: "AccordionItem"
};
const qa = ({
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
    className: `${Jt["c-accordion"]} ${n ? Jt["c-accordion__panel--active"] : Jt["c-accordion__panel"]}`,
    "aria-hidden": !n,
    "data-type": i,
    ...!n && { hidden: !n },
    ...c,
    children: /* @__PURE__ */ p(
      "div",
      {
        id: `accordion-panel-${t}`,
        role: "region",
        "aria-hidden": !n,
        "aria-labelledby": `accordion-button-${t}`,
        className: ne({
          [Jt["c-accordion__panel-content"]]: !a,
          [r]: r
        }),
        children: e
      }
    )
  }
);
qa.propTypes = {
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
qa.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Gn = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, js = /\w+\.svg/gi, Ce = ({
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
  const f = t && t.match(js).toString().replace(/.svg/gi, ""), l = `${t}#${f}`;
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
const bn = {
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
  return /* @__PURE__ */ L(
    "button",
    {
      ref: t,
      className: ne({
        [`${bn["c-button"]} ${bn[`c-${c}`]} ${bn[`c-${r}`]}`]: !v,
        [bn["c-round"]]: a && a.path && s,
        [bn["c-reverse"]]: a && a.position === "right",
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
const Kt = {
  "c-audio": "_c-audio_c6ix7_1",
  "c-audio--small": "_c-audio--small_c6ix7_15",
  "c-audio--hidden": "_c-audio--hidden_c6ix7_33",
  "c-button": "_c-button_c6ix7_37",
  "is-button-paused": "_is-button-paused_c6ix7_62",
  "is-button-playing": "_is-button-playing_c6ix7_70"
}, Fs = Object.freeze({
  BUTTON: "Button",
  BAR: "Bar"
}), Va = ({
  src: e,
  format: t,
  a11y: n,
  size: r,
  type: a,
  addClass: i,
  defaultStyle: c,
  ...s
}) => {
  const [u, f] = ee(!1), l = J(), d = (v) => {
    l.current && (l.current.paused ? l.current.play() : l.current.pause(), f(!u));
  };
  return a === Fs.BAR ? /* @__PURE__ */ p(
    "audio",
    {
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
  ) : /* @__PURE__ */ L(bt, { children: [
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
        label: u ? "Pausar" : "Reproduccir",
        "data-a11y": n,
        addClass: ne({
          [Kt["c-button"]]: !c,
          [Kt["is-button-playing"]]: u,
          [Kt["is-button-paused"]]: !u,
          [i]: i
        }),
        onClick: d,
        hasAriaLabel: !0,
        ...c && { defaultStyle: c },
        ...n && { disabled: n },
        ...s
      }
    )
  ] });
};
Va.defaultProps = {
  a11y: !1,
  type: "Bar"
};
Va.propTypes = {
  src: o.string,
  a11y: o.bool,
  format: o.string,
  size: o.oneOf(["small"]),
  type: o.oneOf(["Bar", "Button"]),
  addClass: o.string,
  defaultStyle: o.bool
};
var Bs = typeof Hn == "object" && Hn && Hn.Object === Object && Hn, qs = Bs, Vs = qs, Ys = typeof self == "object" && self && self.Object === Object && self, zs = Vs || Ys || Function("return this")(), Ws = zs, Us = Ws, Hs = Us.Symbol, fo = Hs;
function Gs(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Zs = Gs, Xs = Array.isArray, Ks = Xs, Uo = fo, Ya = Object.prototype, Qs = Ya.hasOwnProperty, Js = Ya.toString, yn = Uo ? Uo.toStringTag : void 0;
function el(e) {
  var t = Qs.call(e, yn), n = e[yn];
  try {
    e[yn] = void 0;
    var r = !0;
  } catch {
  }
  var a = Js.call(e);
  return r && (t ? e[yn] = n : delete e[yn]), a;
}
var tl = el, nl = Object.prototype, rl = nl.toString;
function ol(e) {
  return rl.call(e);
}
var al = ol, Ho = fo, il = tl, sl = al, ll = "[object Null]", cl = "[object Undefined]", Go = Ho ? Ho.toStringTag : void 0;
function ul(e) {
  return e == null ? e === void 0 ? cl : ll : Go && Go in Object(e) ? il(e) : sl(e);
}
var dl = ul;
function fl(e) {
  return e != null && typeof e == "object";
}
var pl = fl, vl = dl, hl = pl, gl = "[object Symbol]";
function ml(e) {
  return typeof e == "symbol" || hl(e) && vl(e) == gl;
}
var bl = ml, Zo = fo, yl = Zs, _l = Ks, wl = bl, xl = 1 / 0, Xo = Zo ? Zo.prototype : void 0, Ko = Xo ? Xo.toString : void 0;
function za(e) {
  if (typeof e == "string")
    return e;
  if (_l(e))
    return yl(e, za) + "";
  if (wl(e))
    return Ko ? Ko.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -xl ? "-0" : t;
}
var Tl = za, Ol = Tl;
function El(e) {
  return e == null ? "" : Ol(e);
}
var Sl = El, Cl = Sl, Pl = 0;
function Rl(e) {
  var t = ++Pl;
  return Cl(e) + t;
}
var Wa = Rl;
const Qt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, Ua = _t(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: c, isDisabled: s, defaultChecked: u, onChange: f, __TYPE: l, inherit: d, ...v }, h) => {
    const m = _e(() => e || Wa(`ui-${n}`), [e, n]), b = Object.freeze({
      right: /* @__PURE__ */ p("path", { id: "done_all", d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z" }),
      wrong: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }),
      normal: n === "checkbox" ? /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }) : null
    }), y = ({ target: w }) => {
      if (f) {
        if (w.checked) {
          f({ id: w.id, value: w.value });
          return;
        }
        f({ id: w.id, value: "" });
      }
    };
    return /* @__PURE__ */ L(
      "label",
      {
        htmlFor: m,
        className: `${Qt["c-input"]} u-flex ${c ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": l,
        ...!d && { ...v },
        children: [
          /* @__PURE__ */ L("div", { className: Qt["c-input__box"], children: [
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
                onChange: y,
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
Ua.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
Ua.propTypes = {
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
const Dl = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = ee([]), c = J(), s = (d) => {
    c.current = d || "";
  }, u = (d) => c.current === "radio" ? [{ ...d }] : a.filter((h) => h.id === d.id).length ? [...a.filter((h) => h.id !== d.id)] : [...a, { ...d }], f = (d) => {
    const v = u(d);
    n && n(v), i(v);
  }, l = Re.map(t, (d) => ct(d) ? d.props.__TYPE === "CheckBox" ? (d.props.type && s(d.props.type), Pe(d, { ...d.props, onChange: f })) : d : null);
  return /* @__PURE__ */ L("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: He(l, ["CheckBox"]) })
  ] });
};
Dl.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const Nl = "_col_wu095_1", Al = {
  col: Nl
}, Il = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Al.col} ${e ?? ""}`, ...t }));
Il.propTypes = {
  addClass: o.string
};
const $l = {
  "c-content": "_c-content_u325r_1"
}, Ml = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "section",
  {
    className: ne({
      [$l["c-content"]]: !n,
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
const ur = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function un(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function po(e) {
  return "nodeType" in e;
}
function Ge(e) {
  var t, n;
  return e ? un(e) ? e : po(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function vo(e) {
  const {
    Document: t
  } = Ge(e);
  return e instanceof t;
}
function Ln(e) {
  return un(e) ? !1 : e instanceof Ge(e).HTMLElement;
}
function kl(e) {
  return e instanceof Ge(e).SVGElement;
}
function dn(e) {
  return e ? un(e) ? e.document : po(e) ? vo(e) ? e : Ln(e) ? e.ownerDocument : document : document : document;
}
const Et = ur ? Ia : X;
function ho(e) {
  const t = J(e);
  return Et(() => {
    t.current = e;
  }), Le(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Ll() {
  const e = J(null), t = Le((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = Le(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Dn(e, t) {
  t === void 0 && (t = [e]);
  const n = J(e);
  return Et(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function jn(e, t) {
  const n = J();
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
  const t = ho(e), n = J(null), r = Le(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Qr(e) {
  const t = J();
  return X(() => {
    t.current = e;
  }, [e]), t.current;
}
let Ir = {};
function dr(e, t) {
  return _e(() => {
    if (t)
      return t;
    const n = Ir[e] == null ? 0 : Ir[e] + 1;
    return Ir[e] = n, e + "-" + n;
  }, [e, t]);
}
function Ha(e) {
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
const nn = /* @__PURE__ */ Ha(1), or = /* @__PURE__ */ Ha(-1);
function jl(e) {
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
function Fl(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ge(e.target);
  return t && e instanceof t;
}
function Jr(e) {
  if (Fl(e)) {
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
  return jl(e) ? {
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
}), Qo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Bl(e) {
  return e.matches(Qo) ? e : e.querySelector(Qo);
}
const ql = {
  display: "none"
};
function Vl(e) {
  let {
    id: t,
    value: n
  } = e;
  return ke.createElement("div", {
    id: t,
    style: ql
  }, n);
}
const Yl = {
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
function zl(e) {
  let {
    id: t,
    announcement: n
  } = e;
  return ke.createElement("div", {
    id: t,
    style: Yl,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, n);
}
function Wl() {
  const [e, t] = ee("");
  return {
    announce: Le((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Za = /* @__PURE__ */ ut(null);
function Ul(e) {
  const t = Ee(Za);
  X(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Hl() {
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
const Gl = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Zl = {
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
function Xl(e) {
  let {
    announcements: t = Zl,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: a = Gl
  } = e;
  const {
    announce: i,
    announcement: c
  } = Wl(), s = dr("DndLiveRegion"), [u, f] = ee(!1);
  if (X(() => {
    f(!0);
  }, []), Ul(_e(() => ({
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
  const l = ke.createElement(ke.Fragment, null, ke.createElement(Vl, {
    id: r,
    value: a.draggable
  }), ke.createElement(zl, {
    id: s,
    announcement: c
  }));
  return n ? ka(l, n) : l;
}
var De;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(De || (De = {}));
function ar() {
}
function $r(e, t) {
  return _e(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Kl() {
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
function Ql(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Jl(e, t) {
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
function ec(e, t) {
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
function Xa(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
const tc = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = Jo(t), i = [];
  for (const c of r) {
    const {
      id: s
    } = c, u = n.get(s);
    if (u) {
      const f = Jo(u), l = a.reduce((v, h, m) => v + Ql(f[m], h), 0), d = Number((l / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: c,
          value: d
        }
      });
    }
  }
  return i.sort(Jl);
};
function nc(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), c = a - r, s = i - n;
  if (r < a && n < i) {
    const u = t.width * t.height, f = e.width * e.height, l = c * s, d = l / (u + f - l);
    return Number(d.toFixed(4));
  }
  return 0;
}
const rc = (e) => {
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
      const u = nc(s, t);
      u > 0 && a.push({
        id: c,
        data: {
          droppableContainer: i,
          value: u
        }
      });
    }
  }
  return a.sort(ec);
};
function oc(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Ka(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : gt;
}
function ac(e) {
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
const ic = /* @__PURE__ */ ac(1);
function sc(e) {
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
function lc(e, t, n) {
  const r = sc(t);
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
const cc = {
  ignoreTransform: !1
};
function Fn(e, t) {
  t === void 0 && (t = cc);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: l
    } = Ge(e).getComputedStyle(e);
    f && (n = lc(n, f, l));
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
function ea(e) {
  return Fn(e, {
    ignoreTransform: !0
  });
}
function uc(e) {
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
function dc(e, t) {
  return t === void 0 && (t = Ge(e).getComputedStyle(e)), t.position === "fixed";
}
function fc(e, t) {
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
    if (!Ln(a) || kl(a) || n.includes(a))
      return n;
    const i = Ge(e).getComputedStyle(a);
    return a !== e && fc(a, i) && n.push(a), dc(a, i) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function Qa(e) {
  const [t] = go(e, 1);
  return t ?? null;
}
function Mr(e) {
  return !ur || !e ? null : un(e) ? e : po(e) ? vo(e) || e === dn(e).scrollingElement ? window : Ln(e) ? e : null : null;
}
function Ja(e) {
  return un(e) ? e.scrollX : e.scrollLeft;
}
function ei(e) {
  return un(e) ? e.scrollY : e.scrollTop;
}
function to(e) {
  return {
    x: Ja(e),
    y: ei(e)
  };
}
var Ne;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ne || (Ne = {}));
function ti(e) {
  return !ur || !e ? !1 : e === document.scrollingElement;
}
function ni(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ti(e) ? {
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
const pc = {
  x: 0.2,
  y: 0.2
};
function vc(e, t, n, r, a) {
  let {
    top: i,
    left: c,
    right: s,
    bottom: u
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = pc);
  const {
    isTop: f,
    isBottom: l,
    isLeft: d,
    isRight: v
  } = ni(e), h = {
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
function hc(e) {
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
function ri(e) {
  return e.reduce((t, n) => nn(t, to(n)), gt);
}
function gc(e) {
  return e.reduce((t, n) => t + Ja(n), 0);
}
function mc(e) {
  return e.reduce((t, n) => t + ei(n), 0);
}
function bc(e, t) {
  if (t === void 0 && (t = Fn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: a,
    right: i
  } = t(e);
  Qa(e) && (a <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const yc = [["x", ["left", "right"], gc], ["y", ["top", "bottom"], mc]];
class mo {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = go(n), a = ri(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, c, s] of yc)
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
function _c(e) {
  const {
    EventTarget: t
  } = Ge(e);
  return e instanceof t ? e : dn(e);
}
function kr(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var it;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(it || (it = {}));
function ta(e) {
  e.preventDefault();
}
function wc(e) {
  e.stopPropagation();
}
var le;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(le || (le = {}));
const oi = {
  start: [le.Space, le.Enter],
  cancel: [le.Esc],
  end: [le.Space, le.Enter]
}, xc = (e, t) => {
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
class bo {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Tn(dn(n)), this.windowListeners = new Tn(Ge(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(it.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && bc(r), n(gt);
  }
  handleKeyDown(t) {
    if (Ga(t)) {
      const {
        active: n,
        context: r,
        options: a
      } = this.props, {
        keyboardCodes: i = oi,
        coordinateGetter: c = xc,
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
          const y = t.code, {
            isTop: w,
            isRight: N,
            isLeft: D,
            isBottom: I,
            maxScroll: x,
            minScroll: B
          } = ni(b), O = hc(b), A = {
            x: Math.min(y === le.Right ? O.right - O.width / 2 : O.right, Math.max(y === le.Right ? O.left : O.left + O.width / 2, d.x)),
            y: Math.min(y === le.Down ? O.bottom - O.height / 2 : O.bottom, Math.max(y === le.Down ? O.top : O.top + O.height / 2, d.y))
          }, W = y === le.Right && !N || y === le.Left && !D, V = y === le.Down && !I || y === le.Up && !w;
          if (W && A.x !== d.x) {
            const k = b.scrollLeft + v.x, Z = y === le.Right && k <= x.x || y === le.Left && k >= B.x;
            if (Z && !v.y) {
              b.scrollTo({
                left: k,
                behavior: s
              });
              return;
            }
            Z ? h.x = b.scrollLeft - k : h.x = y === le.Right ? b.scrollLeft - x.x : b.scrollLeft - B.x, h.x && b.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (V && A.y !== d.y) {
            const k = b.scrollTop + v.y, Z = y === le.Down && k <= x.y || y === le.Up && k >= B.y;
            if (Z && !v.x) {
              b.scrollTo({
                top: k,
                behavior: s
              });
              return;
            }
            Z ? h.y = b.scrollTop - k : h.y = y === le.Down ? b.scrollTop - x.y : b.scrollTop - B.y, h.y && b.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, nn(or(d, this.referenceCoordinates), h));
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
      keyboardCodes: r = oi,
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
    r === void 0 && (r = _c(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: c
    } = i;
    this.props = t, this.events = n, this.document = dn(c), this.documentListeners = new Tn(this.document), this.listeners = new Tn(r), this.windowListeners = new Tn(Ge(c)), this.initialCoordinates = (a = Jr(i)) != null ? a : gt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.DragStart, ta), this.windowListeners.add(it.VisibilityChange, this.handleCancel), this.windowListeners.add(it.ContextMenu, ta), this.documentListeners.add(it.Keydown, this.handleKeydown), n) {
      if (na(n))
        return;
      if (ra(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(it.Click, wc, {
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
      if (ra(s))
        return kr(f, s.tolerance) ? this.handleCancel() : void 0;
      if (na(s))
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
const Tc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ai extends yo {
  constructor(t) {
    const {
      event: n
    } = t, r = dn(n.target);
    super(t, Tc, r);
  }
}
ai.activators = [{
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
const Oc = {
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
class ii extends yo {
  constructor(t) {
    super(t, Oc, dn(t.event.target));
  }
}
ii.activators = [{
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
class si extends yo {
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
si.activators = [{
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
var On;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(On || (On = {}));
var ir;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(ir || (ir = {}));
function Ec(e) {
  let {
    acceleration: t,
    activator: n = On.Pointer,
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
  const h = Cc({
    delta: d,
    disabled: !i
  }), [m, b] = Ll(), y = J({
    x: 0,
    y: 0
  }), w = J({
    x: 0,
    y: 0
  }), N = _e(() => {
    switch (n) {
      case On.Pointer:
        return u ? {
          top: u.y,
          bottom: u.y,
          left: u.x,
          right: u.x
        } : null;
      case On.DraggableRect:
        return a;
    }
  }, [n, a, u]), D = J(null), I = Le(() => {
    const B = D.current;
    if (!B)
      return;
    const O = y.current.x * w.current.x, A = y.current.y * w.current.y;
    B.scrollBy(O, A);
  }, []), x = _e(() => s === ir.TreeOrder ? [...f].reverse() : f, [s, f]);
  X(
    () => {
      if (!i || !f.length || !N) {
        b();
        return;
      }
      for (const B of x) {
        if ((r == null ? void 0 : r(B)) === !1)
          continue;
        const O = f.indexOf(B), A = l[O];
        if (!A)
          continue;
        const {
          direction: W,
          speed: V
        } = vc(B, A, N, t, v);
        for (const k of ["x", "y"])
          h[k][W[k]] || (V[k] = 0, W[k] = 0);
        if (V.x > 0 || V.y > 0) {
          b(), D.current = B, m(I, c), y.current = V, w.current = W;
          return;
        }
      }
      y.current = {
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
const Sc = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function Cc(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Qr(t);
  return jn((a) => {
    if (n || !r || !a)
      return Sc;
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
function Pc(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return jn((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function Rc(e, t) {
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
const oa = /* @__PURE__ */ new Map();
function Dc(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, c] = ee(null), {
    frequency: s,
    measure: u,
    strategy: f
  } = a, l = J(e), d = y(), v = Dn(d), h = Le(function(w) {
    w === void 0 && (w = []), !v.current && c((N) => N === null ? w : N.concat(w.filter((D) => !N.includes(D))));
  }, [v]), m = J(null), b = jn((w) => {
    if (d && !n)
      return oa;
    if (!w || w === oa || l.current !== e || i != null) {
      const N = /* @__PURE__ */ new Map();
      for (let D of e) {
        if (!D)
          continue;
        if (i && i.length > 0 && !i.includes(D.id) && D.rect.current) {
          N.set(D.id, D.rect.current);
          continue;
        }
        const I = D.node.current, x = I ? new mo(u(I), I) : null;
        D.rect.current = x, x && N.set(D.id, x);
      }
      return N;
    }
    return w;
  }, [e, i, n, d, u]);
  return X(() => {
    l.current = e;
  }, [e]), X(
    () => {
      d || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), X(
    () => {
      i && i.length > 0 && c(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), X(
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
  function y() {
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
function li(e, t) {
  return jn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Nc(e, t) {
  return li(e, t);
}
function Ac(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = ho(t), a = _e(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return X(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function fr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = ho(t), a = _e(
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
  return X(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Ic(e) {
  return new mo(Fn(e), e);
}
function aa(e, t, n) {
  t === void 0 && (t = Ic);
  const [r, a] = co(s, null), i = Ac({
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
function $c(e) {
  const t = li(e);
  return Ka(e, t);
}
const ia = [];
function Mc(e) {
  const t = J(e), n = jn((r) => e ? r && r !== ia && e && t.current && e.parentNode === t.current.parentNode ? r : go(e) : ia, [e]);
  return X(() => {
    t.current = e;
  }, [e]), n;
}
function kc(e) {
  const [t, n] = ee(null), r = J(e), a = Le((i) => {
    const c = Mr(i.target);
    c && n((s) => s ? (s.set(c, to(c)), new Map(s)) : null);
  }, []);
  return X(() => {
    const i = r.current;
    if (e !== i) {
      c(i);
      const s = e.map((u) => {
        const f = Mr(u);
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
        const f = Mr(u);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), _e(() => e.length ? t ? Array.from(t.values()).reduce((i, c) => nn(i, c), gt) : ri(e) : gt, [e, t]);
}
function sa(e, t) {
  t === void 0 && (t = []);
  const n = J(null);
  return X(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), X(() => {
    const r = e !== gt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? or(e, n.current) : gt;
}
function Lc(e) {
  X(
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
function jc(e, t) {
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
function ci(e) {
  return _e(() => e ? uc(e) : null, [e]);
}
const jr = [];
function Fc(e, t) {
  t === void 0 && (t = Fn);
  const [n] = e, r = ci(n ? Ge(n) : null), [a, i] = co(s, jr), c = fr({
    callback: i
  });
  return e.length > 0 && a === jr && i(), Et(() => {
    e.length ? e.forEach((u) => c == null ? void 0 : c.observe(u)) : (c == null || c.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((u) => ti(u) ? r : new mo(t(u), u)) : jr;
  }
}
function Bc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Ln(t) ? t : e;
}
function qc(e) {
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
    const l = Bc(f);
    i == null || i.disconnect(), l && (i == null || i.observe(l)), r(l ? t(l) : null);
  }, [t, i]), [s, u] = rr(c);
  return _e(() => ({
    nodeRef: s,
    rect: n,
    setRef: u
  }), [n, s, u]);
}
const Vc = [{
  sensor: ai,
  options: {}
}, {
  sensor: bo,
  options: {}
}], Yc = {
  current: {}
}, Qn = {
  draggable: {
    measure: ea
  },
  droppable: {
    measure: ea,
    strategy: Nn.WhileDragging,
    frequency: ro.Optimized
  },
  dragOverlay: {
    measure: Fn
  }
};
class En extends Map {
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
const zc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new En(),
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
  measuringConfiguration: Qn,
  measureDroppableContainers: ar,
  windowRect: null,
  measuringScheduled: !1
}, Wc = {
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
}, pr = /* @__PURE__ */ ut(Wc), Uc = /* @__PURE__ */ ut(zc);
function Hc() {
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
      containers: new En()
    }
  };
}
function Gc(e, t) {
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
      } = n, a = new En(e.droppable.containers);
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
      const c = new En(e.droppable.containers);
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
      const i = new En(e.droppable.containers);
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
function Zc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: a
  } = Ee(pr), i = Qr(r), c = Qr(n == null ? void 0 : n.id);
  return X(() => {
    if (!t && !r && i && c != null) {
      if (!Ga(i) || document.activeElement === i.target)
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
          const d = Bl(l);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [r, t, a, c, i]), null;
}
function Xc(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...r
  }), n) : n;
}
function Kc(e) {
  return _e(
    () => ({
      draggable: {
        ...Qn.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Qn.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Qn.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function Qc(e) {
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
    const l = n(f), d = Ka(l, r);
    if (c || (d.x = 0), s || (d.y = 0), i.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const v = Qa(f);
      v && v.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [t, c, s, r, n]);
}
const ui = /* @__PURE__ */ ut({
  ...gt,
  scaleX: 1,
  scaleY: 1
});
var Nt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Nt || (Nt = {}));
const Jc = /* @__PURE__ */ $a(function(t) {
  var n, r, a, i;
  let {
    id: c,
    accessibility: s,
    autoScroll: u = !0,
    children: f,
    sensors: l = Vc,
    collisionDetection: d = rc,
    measuring: v,
    modifiers: h,
    ...m
  } = t;
  const b = co(Gc, void 0, Hc), [y, w] = b, [N, D] = Hl(), [I, x] = ee(Nt.Uninitialized), B = I === Nt.Initialized, {
    draggable: {
      active: O,
      nodes: A,
      translate: W
    },
    droppable: {
      containers: V
    }
  } = y, k = O ? A.get(O) : null, Z = J({
    initial: null,
    translated: null
  }), U = _e(() => {
    var be;
    return O != null ? {
      id: O,
      // It's possible for the active node to unmount while dragging
      data: (be = k == null ? void 0 : k.data) != null ? be : Yc,
      rect: Z
    } : null;
  }, [O, k]), K = J(null), [oe, Q] = ee(null), [G, ce] = ee(null), ae = Dn(m, Object.values(m)), C = dr("DndDescribedBy", c), j = _e(() => V.getEnabled(), [V]), _ = Kc(v), {
    droppableRects: T,
    measureDroppableContainers: E,
    measuringScheduled: P
  } = Dc(j, {
    dragging: B,
    dependencies: [W.x, W.y],
    config: _.droppable
  }), S = Pc(A, O), $ = _e(() => G ? Jr(G) : null, [G]), q = Wn(), H = Nc(S, _.draggable.measure);
  Qc({
    activeNode: O ? A.get(O) : null,
    config: q.layoutShiftCompensation,
    initialRect: H,
    measure: _.draggable.measure
  });
  const Y = aa(S, _.draggable.measure, H), F = aa(S ? S.parentElement : null), R = J({
    activatorEvent: null,
    active: null,
    activeNode: S,
    collisionRect: null,
    collisions: null,
    droppableRects: T,
    draggableNodes: A,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: V,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), te = V.getNodeFor((n = R.current.over) == null ? void 0 : n.id), de = qc({
    measure: _.dragOverlay.measure
  }), ye = (r = de.nodeRef.current) != null ? r : S, xe = B ? (a = de.rect) != null ? a : Y : null, je = !!(de.nodeRef.current && de.rect), dt = $c(je ? null : Y), Ze = ci(ye ? Ge(ye) : null), Te = Mc(B ? te ?? S : null), qe = Fc(Te), Xe = Xc(h, {
    transform: {
      x: W.x - dt.x,
      y: W.y - dt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: G,
    active: U,
    activeNodeRect: Y,
    containerNodeRect: F,
    draggingNodeRect: xe,
    over: R.current.over,
    overlayNodeRect: de.rect,
    scrollableAncestors: Te,
    scrollableAncestorRects: qe,
    windowRect: Ze
  }), Mt = $ ? nn($, W) : null, St = kc(Te), kt = sa(St), Lt = sa(St, [Y]), Fe = nn(Xe, kt), ft = xe ? ic(xe, Xe) : null, Ct = U && ft ? d({
    active: U,
    collisionRect: ft,
    droppableRects: T,
    droppableContainers: j,
    pointerCoordinates: Mt
  }) : null, pn = Xa(Ct, "id"), [nt, Vn] = ee(null), Tr = je ? Xe : nn(Xe, Lt), Or = oc(Tr, (i = nt == null ? void 0 : nt.rect) != null ? i : null, Y), Yn = Le(
    (be, Ae) => {
      let {
        sensor: Ie,
        options: pt
      } = Ae;
      if (K.current == null)
        return;
      const Ve = A.get(K.current);
      if (!Ve)
        return;
      const Ye = be.nativeEvent, rt = new Ie({
        active: K.current,
        activeNode: Ve,
        event: Ye,
        options: pt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: R,
        onStart(ze) {
          const jt = K.current;
          if (jt == null)
            return;
          const Ft = A.get(jt);
          if (!Ft)
            return;
          const {
            onDragStart: Bt
          } = ae.current, Zt = {
            active: {
              id: jt,
              data: Ft.data,
              rect: Z
            }
          };
          hn(() => {
            Bt == null || Bt(Zt), x(Nt.Initializing), w({
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
          w({
            type: De.DragMove,
            coordinates: ze
          });
        },
        onEnd: Tt(De.DragEnd),
        onCancel: Tt(De.DragCancel)
      });
      hn(() => {
        Q(rt), ce(be.nativeEvent);
      });
      function Tt(ze) {
        return async function() {
          const {
            active: Ft,
            collisions: Bt,
            over: Zt,
            scrollAdjustedTranslate: Un
          } = R.current;
          let qt = null;
          if (Ft && Un) {
            const {
              cancelDrop: Vt
            } = ae.current;
            qt = {
              activatorEvent: Ye,
              active: Ft,
              collisions: Bt,
              delta: Un,
              over: Zt
            }, ze === De.DragEnd && typeof Vt == "function" && await Promise.resolve(Vt(qt)) && (ze = De.DragCancel);
          }
          K.current = null, hn(() => {
            w({
              type: ze
            }), x(Nt.Uninitialized), Vn(null), Q(null), ce(null);
            const Vt = ze === De.DragEnd ? "onDragEnd" : "onDragCancel";
            if (qt) {
              const g = ae.current[Vt];
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
  ), Er = Le((be, Ae) => (Ie, pt) => {
    const Ve = Ie.nativeEvent, Ye = A.get(pt);
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
    be(Ie, Ae.options, rt) === !0 && (Ve.dndKit = {
      capturedBy: Ae.sensor
    }, K.current = pt, Yn(Ie, Ae));
  }, [A, Yn]), zn = Rc(l, Er);
  Lc(l), Et(() => {
    Y && I === Nt.Initializing && x(Nt.Initialized);
  }, [Y, I]), X(
    () => {
      const {
        onDragMove: be
      } = ae.current, {
        active: Ae,
        activatorEvent: Ie,
        collisions: pt,
        over: Ve
      } = R.current;
      if (!Ae || !Ie)
        return;
      const Ye = {
        active: Ae,
        activatorEvent: Ie,
        collisions: pt,
        delta: {
          x: Fe.x,
          y: Fe.y
        },
        over: Ve
      };
      hn(() => {
        be == null || be(Ye), N({
          type: "onDragMove",
          event: Ye
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Fe.x, Fe.y]
  ), X(
    () => {
      const {
        active: be,
        activatorEvent: Ae,
        collisions: Ie,
        droppableContainers: pt,
        scrollAdjustedTranslate: Ve
      } = R.current;
      if (!be || K.current == null || !Ae || !Ve)
        return;
      const {
        onDragOver: Ye
      } = ae.current, rt = pt.get(pn), Tt = rt && rt.rect.current ? {
        id: rt.id,
        rect: rt.rect.current,
        data: rt.data,
        disabled: rt.disabled
      } : null, ze = {
        active: be,
        activatorEvent: Ae,
        collisions: Ie,
        delta: {
          x: Ve.x,
          y: Ve.y
        },
        over: Tt
      };
      hn(() => {
        Vn(Tt), Ye == null || Ye(ze), N({
          type: "onDragOver",
          event: ze
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pn]
  ), Et(() => {
    R.current = {
      activatorEvent: G,
      active: U,
      activeNode: S,
      collisionRect: ft,
      collisions: Ct,
      droppableRects: T,
      draggableNodes: A,
      draggingNode: ye,
      draggingNodeRect: xe,
      droppableContainers: V,
      over: nt,
      scrollableAncestors: Te,
      scrollAdjustedTranslate: Fe
    }, Z.current = {
      initial: xe,
      translated: ft
    };
  }, [U, S, Ct, ft, A, ye, xe, T, V, nt, Te, Fe]), Ec({
    ...q,
    delta: W,
    draggingRect: ft,
    pointerCoordinates: Mt,
    scrollableAncestors: Te,
    scrollableAncestorRects: qe
  });
  const Sr = _e(() => ({
    active: U,
    activeNode: S,
    activeNodeRect: Y,
    activatorEvent: G,
    collisions: Ct,
    containerNodeRect: F,
    dragOverlay: de,
    draggableNodes: A,
    droppableContainers: V,
    droppableRects: T,
    over: nt,
    measureDroppableContainers: E,
    scrollableAncestors: Te,
    scrollableAncestorRects: qe,
    measuringConfiguration: _,
    measuringScheduled: P,
    windowRect: Ze
  }), [U, S, Y, G, Ct, F, de, A, V, T, nt, E, Te, qe, _, P, Ze]), vn = _e(() => ({
    activatorEvent: G,
    activators: zn,
    active: U,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: C
    },
    dispatch: w,
    draggableNodes: A,
    over: nt,
    measureDroppableContainers: E
  }), [G, zn, U, Y, w, C, A, nt, E]);
  return ke.createElement(Za.Provider, {
    value: D
  }, ke.createElement(pr.Provider, {
    value: vn
  }, ke.createElement(Uc.Provider, {
    value: Sr
  }, ke.createElement(ui.Provider, {
    value: Or
  }, f)), ke.createElement(Zc, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), ke.createElement(Xl, {
    ...s,
    hiddenTextDescribedById: C
  }));
  function Wn() {
    const be = (oe == null ? void 0 : oe.autoScrollEnabled) === !1, Ae = typeof u == "object" ? u.enabled === !1 : u === !1, Ie = B && !be && !Ae;
    return typeof u == "object" ? {
      ...u,
      enabled: Ie
    } : {
      enabled: Ie
    };
  }
}), eu = /* @__PURE__ */ ut(null), la = "button", tu = "Droppable";
function nu(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = dr(tu), {
    activators: c,
    activatorEvent: s,
    active: u,
    activeNodeRect: f,
    ariaDescribedById: l,
    draggableNodes: d,
    over: v
  } = Ee(pr), {
    role: h = la,
    roleDescription: m = "draggable",
    tabIndex: b = 0
  } = a ?? {}, y = (u == null ? void 0 : u.id) === t, w = Ee(y ? ui : eu), [N, D] = rr(), [I, x] = rr(), B = jc(c, t), O = Dn(n);
  Et(
    () => (d.set(t, {
      id: t,
      key: i,
      node: N,
      activatorNode: I,
      data: O
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
    "aria-pressed": y && h === la ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": l.draggable
  }), [r, h, b, y, m, l.draggable]);
  return {
    active: u,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: A,
    isDragging: y,
    listeners: r ? void 0 : B,
    node: N,
    over: v,
    setNodeRef: D,
    setActivatorNodeRef: x,
    transform: w
  };
}
const ru = "Droppable", ou = {
  timeout: 25
};
function di(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: a
  } = e;
  const i = dr(ru), {
    active: c,
    dispatch: s,
    over: u,
    measureDroppableContainers: f
  } = Ee(pr), l = J({
    disabled: n
  }), d = J(!1), v = J(null), h = J(null), {
    disabled: m,
    updateMeasurementsFor: b,
    timeout: y
  } = {
    ...ou,
    ...a
  }, w = Dn(b ?? r), N = Le(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(w.current) ? w.current : [w.current]), h.current = null;
      }, y);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), D = fr({
    callback: N,
    disabled: m || !c
  }), I = Le((A, W) => {
    D && (W && (D.unobserve(W), d.current = !1), A && D.observe(A));
  }, [D]), [x, B] = rr(I), O = Dn(t);
  return X(() => {
    !D || !x.current || (D.disconnect(), d.current = !1, D.observe(x.current));
  }, [x, D]), Et(
    () => (s({
      type: De.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: x,
        rect: v,
        data: O
      }
    }), () => s({
      type: De.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), X(() => {
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
    setNodeRef: B
  };
}
const au = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, iu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, su = [le.Down, le.Right, le.Up, le.Left], lu = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (su.includes(e.code)) {
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
    const u = tc({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = Xa(u, "id");
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
}, fi = ut(), xn = (e, t) => Re.map(e, (n) => {
  var r;
  if (ct(n) && n.props) {
    if (((r = n == null ? void 0 : n.props) == null ? void 0 : r.__TYPE) === t)
      return n;
    if (n.props.children)
      return xn(n.props.children, t);
  }
}), cu = {
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
}, pi = ({
  children: e,
  multipleDrags: t,
  onValidate: n,
  validate: r,
  reboot: a,
  propValidate: i,
  modifiers: c,
  announcements: s,
  defaultState: u,
  defaultValidate: f,
  onState: l,
  id: d
}) => {
  const [v, h] = ee([]), [m, b] = ee(null), [y, w] = ee(() => Object.keys(u).length > 0 ? u : D()), N = J(!1);
  function D() {
    return [...xn(e, "droppable"), ...xn(e, "general-draggable")].reduce(
      (V, k) => ({
        ...V,
        [k.props.id]: k.props.children ? [...xn(k.props.children, "draggable").map((Z) => Z.props.id)] : []
      }),
      {}
    );
  }
  const I = Object.freeze({
    restrictToVerticalAxis: iu,
    restrictToHorizontalAxis: au
  }), x = Kl(
    $r(ii),
    $r(si),
    $r(bo, {
      coordinateGetter: lu
    })
  ), B = (V, k) => {
    if (Object.keys(y).pop() === V.id)
      return;
    let U = [...v.filter((K) => K !== k), V.data.current.validate.includes(k) ? k : ""].filter((K) => !!K);
    if (!t) {
      const K = y[V.id][0];
      U = K ? U.filter((oe) => oe !== K) : U;
    }
    n && n({ validate: [...U], active: !0 }), h(U);
  }, O = (V) => V in y ? V : Object.keys(y).find((k) => y[k].includes(V)), A = ({ active: V, over: k }) => {
    if (!k)
      return;
    b(null);
    const Z = Object.keys(y).pop(), U = O(k.id), K = O(V.id);
    K !== U && (Z !== k.id && B(k, V.id), w((oe) => {
      N.current = !0;
      const Q = oe[K].filter((ae) => ae !== V.id), G = [...oe[U]];
      return t ? {
        ...oe,
        [K]: Q,
        [U]: [...G, V.id]
      } : {
        ...{
          ...oe,
          [K]: Q,
          [U]: U === Z ? [...G, V.id] : [V.id]
        },
        ...U !== Z && oe[U].length > 0 && { [Z]: [...oe[Z].filter((ae) => ae !== V.id), ...oe[U]] }
      };
    }));
  }, W = (V) => Re.map(V, (k) => {
    if (!k.props)
      return k;
    if (k.props.__TYPE !== "draggable")
      return k.props.id in y && y[k.props.id].length > 0 ? Pe(k, { ...k.props }, [
        ...y[k.props.id].map((Z) => xn(e, "draggable").filter((U) => U.props.id === Z)).flat()
      ]) : k.props.children ? Pe(k, { ...k.props, children: W(k.props.children) }) : k;
  });
  return X(() => {
    a && (w(() => D()), n && n({ validate: [], active: !1 }));
  }, [a]), X(() => {
    Object.keys(u).length !== 0 && w(u);
  }, [u]), X(() => {
    f.length !== 0 && h(f);
  }, [f]), X(() => {
    l && N.current && (N.current = !1, l({ state: { key: d, newObjectState: { ...y }, validateId: v } }));
  }, [l, y]), /* @__PURE__ */ p(fi.Provider, { value: { listId: v, propValidate: i, validate: r, isDragging: m }, children: /* @__PURE__ */ p(
    Jc,
    {
      sensors: x,
      accessibility: { announcements: s },
      onDragStart: ({ active: V }) => b(V.id),
      onDragEnd: A,
      onDragCancel: () => b(null),
      ...c && { modifiers: [I[c]] },
      children: W(e)
    }
  ) });
};
pi.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: cu,
  defaultState: {},
  defaultValidate: []
};
pi.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element), o.node, o.arrayOf(o.node)]),
  multipleDrags: o.bool,
  onValidate: o.func,
  reboot: o.bool,
  validate: o.bool.isRequired,
  propValidate: o.string.isRequired,
  modifiers: o.oneOf(["restrictToVerticalAxis", "restrictToHorizontalAxis"]),
  announcements: o.object.isRequired,
  defaultState: o.object,
  defaultValidate: o.array,
  onState: o.func,
  id: o.string
};
const uu = "_pop_1elvh_1", rn = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: uu
}, vi = ({ children: e, id: t, addClass: n, dragging: r, label: a, attribute: i, disabledDefaultAttributes: c, element: s, defaultStyle: u, __TYPE: f, ...l }) => {
  const d = s || "div", { listId: v, propValidate: h, validate: m, isDragging: b } = Ee(fi), { attributes: y, listeners: w, setNodeRef: N, transform: D } = nu({
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
      className: ne({
        [rn["c-draggable"]]: !u,
        [`${r} ${rn["is-draggable--active-animation"]}`]: b === t && !u,
        [n]: n
      }),
      style: { transform: eo.Translate.toString(D) },
      ...m && { [h]: !!v.includes(t) },
      ...!c && { ...y },
      ...w,
      ...l,
      children: e
    }
  );
};
vi.defaultProps = {
  __TYPE: "draggable",
  dragging: rn["c-draggable--active"],
  disabledDefaultAttributes: !1
};
vi.propTypes = {
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
  __TYPE: u,
  ...f
}) => {
  const l = c || "div", { isOver: d, setNodeRef: v } = di({
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
        [rn["c-droppable"]]: !s,
        [a]: d && !s,
        [r]: r
      }),
      ...f,
      children: e
    }
  );
};
hi.defaultProps = {
  __TYPE: "droppable",
  over: rn["c-droppable--active"]
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
const gi = ({
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
  const f = i || "div", { isOver: l, setNodeRef: d } = di({
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
        [rn["c-droppable"]]: !c,
        [n]: l && !c,
        [t]: t
      }),
      ...u,
      children: e
    }
  );
};
gi.propTypes = {
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
gi.defaultProps = {
  __TYPE: "general-draggable",
  id: Wa("unique-id-general-"),
  label: "contendor inicial"
};
const gp = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ L("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ L("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ L("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ L("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ L(
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
        /* @__PURE__ */ L("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ L("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ L("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
      ] })
    }
  ),
  /* @__PURE__ */ L(
    "filter",
    {
      id: "hc_extension_invert_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "1.7" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ L(
    "filter",
    {
      id: "hc_extension_yellow_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ L("feComponentTransfer", { children: [
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
  /* @__PURE__ */ L(
    "filter",
    {
      id: "hc_extension_yellow_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ L(
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
        /* @__PURE__ */ L("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ L(
    "filter",
    {
      id: "hc_extension_red_on_white_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ L(
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
        /* @__PURE__ */ L("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ L(
    "filter",
    {
      id: "hc_extension_green_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ L(
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
        /* @__PURE__ */ L("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ L(
    "filter",
    {
      id: "hc_extension_yellow_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ L(
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
        /* @__PURE__ */ L("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ L(
    "filter",
    {
      id: "hc_extension_white_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ L("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ L("feComponentTransfer", { children: [
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
}, mi = ({ url: e, alt: t, title: n, width: r, addClass: a, noCaption: i, defaultStyle: c, ...s }) => {
  const [u, f] = ee(!1), l = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, d = (h) => f(h), v = u ? l : `${e}`;
  return /* @__PURE__ */ L(
    "figure",
    {
      className: ne({
        [ca["c-image"]]: !c,
        [a]: a
      }),
      ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } },
      children: [
        /* @__PURE__ */ p("img", { src: v, onError: d, alt: t, ...s }),
        !i && /* @__PURE__ */ p("figcaption", { className: ca["c-image__figcaption"], children: /* @__PURE__ */ L("p", { children: [
          /* @__PURE__ */ L("strong", { children: [
            n,
            " "
          ] }),
          t
        ] }) })
      ]
    }
  );
};
mi.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
mi.propTypes = {
  url: o.string,
  alt: o.string,
  title: o.string,
  width: o.string,
  addClass: o.string,
  noCaption: o.bool,
  defaultStyle: o.bool
};
const An = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, bi = _t(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: c, isDisabled: s, isRequired: u, isReadOnly: f, defaultStyle: l, onValue: d }, v) => {
  const h = e || It(), m = ({ target: b }) => {
    d && d({ id: h, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ L(
    "label",
    {
      htmlFor: h,
      className: ne({
        [An["c-label"]]: !l,
        [i]: i
      }),
      children: [
        /* @__PURE__ */ L("span", { className: `${!c && "u-sr-only"}`, children: [
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
              [An["c-input"]]: !l
            }),
            ...f && { readOnly: f, "aria-readonly": f }
          }
        )
      ]
    }
  ) : null;
});
bi.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
bi.propTypes = {
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
const du = ({ children: e, onAllValue: t }) => {
  const [n, r] = ee([]), a = (s) => r([...n.filter((u) => u.id !== s.id), { ...s }]);
  X(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, u, f) => Re.toArray(s).map((l) => l.props.__TYPE === u ? Pe(l, { ...l.props, ...f }) : l);
  return Re.map(e, (s) => {
    var u, f;
    return ct(s) ? ((u = s == null ? void 0 : s.props) == null ? void 0 : u.__TYPE) === "InputStyle" ? Pe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? Pe(s, { ...s.props, onValue: a }) : s : null;
  });
};
du.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const yi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [An["c-input__wrapper-style"]]: !n,
      [t]: t
    }),
    children: He(e, ["InputLeftAddon", "InputRightAddon", "Input"])
  }
);
yi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("InputStyle")
};
yi.defaultProps = {
  __TYPE: "InputStyle"
};
const _i = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [An["c-input__left-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
_i.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("InputLeftAddon")
};
_i.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const wi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ne({
      [An["c-input__right-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
wi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("InputRightAddon")
};
wi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const fu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, pu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: ne({
      [fu["c-kbd"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
pu.propTypes = {
  children: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
const xi = ({ children: e, link: t, addClass: n, isExternal: r, label: a, ...i }) => /* @__PURE__ */ p(
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
xi.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
xi.propTypes = {
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
}, vu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "ul",
  {
    className: ne({
      [Ti["c-List"]]: !n,
      [t]: t
    }),
    ...r,
    children: He(e, ["ListItem"])
  }
);
vu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool
};
const Oi = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = Re.map(e, (i) => {
    var c;
    return ((c = i == null ? void 0 : i.props) == null ? void 0 : c.__TYPE) === "Icon" ? Pe(i, { ...i.props, addClass: Ti["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
Oi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: me("ListItem")
};
Oi.defaultProps = {
  __TYPE: "ListItem"
};
const hu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: He(e, ["ListItem"]) });
hu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const gu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: He(e, ["ListItem"]) });
gu.propTypes = {
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
        c(d, function(y) {
          return v._visitNode(y);
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
            e.call(h.addedNodes).forEach(function(y) {
              this._makeSubtreeUnfocusable(y);
            }, this), e.call(h.removedNodes).forEach(function(y) {
              this._unmanageSubtree(y);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(m);
            else if (m !== this._rootElement && h.attributeName === "inert" && m.hasAttribute("inert")) {
              this._adoptInertRoot(m);
              var b = this._inertManager.getInertRoot(m);
              this._managedNodes.forEach(function(y) {
                m.contains(y.node) && b._manageNode(y.node);
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
              e.call(m.addedNodes).forEach(function(w) {
                if (w.nodeType === Node.ELEMENT_NODE) {
                  var N = e.call(w.querySelectorAll("[inert]"));
                  t.call(w, "[inert]") && N.unshift(w), N.forEach(function(D) {
                    this.setInert(D, !0);
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
              ), y = b.hasAttribute("inert");
              h.setInert(b, y);
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
        ), b = m.getDistributedNodes ? m.getDistributedNodes() : [], y = 0; y < b.length; y++)
          c(b[y], l);
        return;
      }
      if (v.localName == "slot") {
        for (var w = (
          /** @type {!HTMLSlotElement} */
          v
        ), N = w.assignedNodes ? w.assignedNodes({ flatten: !0 }) : [], D = 0; D < N.length; D++)
          c(N[D], l);
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
const vr = ut(), mu = Object.freeze({
  ESC: 27
}), Ei = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = J(), i = (f) => {
    const l = document.querySelector("#root");
    l.inert = f;
  }, c = (f) => {
    (f.keyCode || f.which) === mu.ESC && u();
  }, s = (f, l) => {
    a.current.classList.replace(f, l);
  }, u = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), n(!t), Object.keys(r).length !== 0 && r.current.focus();
    }, 500);
  };
  return X(() => (t && (i(!0), a.current && a.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(
    vr.Provider,
    {
      value: { isOpen: t, onKeyDown: c, onCloseModal: u, refModal: a },
      children: /* @__PURE__ */ p(fn, { id: "js-modal", children: He(e, ["ModalContent", "ModalOverlay"]) })
    }
  );
};
Ei.defaultProps = {
  label: "Default modal label",
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
  label: o.string.isRequired,
  finalFocusRef: o.object.isRequired
};
const Jn = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, Si = ({
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
  } = Ee(vr), v = (m) => {
    r && typeof r == "function" && r(m), l();
  };
  return /* @__PURE__ */ L(
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
      className: ne(
        "animate__animated animate__fadeIn animate__faster video-interpreter-ui-modal",
        {
          [`${Jn["c-modal"]} u-px-3 u-py-3`]: !i,
          [t]: t
        }
      ),
      ...s,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: ne({ [Jn["c-modal-container"]]: !i }),
            "data-class": "c-modal__container",
            children: n
          }
        ),
        /* @__PURE__ */ p(
          Wt,
          {
            addClass: ne({ [Jn["c-close-button"]]: !i }),
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
Si.propTypes = {
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
Si.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const Ci = ({ addClass: e, onClick: t, defaultStyle: n }) => {
  const { isOpen: r, onCloseModal: a } = Ee(vr), i = (c) => {
    t && typeof t == "function" && t(c), a();
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: ne({
        [Jn["c-layout"]]: !n,
        [e]: e
      }),
      onClick: i,
      hidden: !r
    }
  );
};
Ci.propTypes = {
  addClass: o.string,
  onClick: o.func,
  defaultStyle: o.bool,
  __TYPE: me("ModalOverlay")
};
Ci.defaultProps = {
  __TYPE: "ModalOverlay"
};
const bu = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = Ee(vr), r = (a) => {
    t && t(a), n();
  };
  return Pe(e, { ...e.props, onClick: r });
};
bu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const on = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, hr = ut(), Pi = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: c, onValue: s }) => {
  const [u, f] = ee(r || 0), l = () => {
    if (n && u > i)
      return f(i);
    f((m) => m + c);
  }, d = () => {
    if (n && u < a)
      return f(a);
    f((m) => m - c);
  }, v = (m) => f(m), h = (m) => n && u === m;
  return X(() => {
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
      children: /* @__PURE__ */ p("div", { className: `${on["c-number-input"]} ${t ?? ""}`, children: He(e, ["NumberInputField", "NumberInputStepper"]) })
    }
  );
};
Pi.propTypes = {
  children: o.arrayOf(o.element),
  addClass: o.string,
  max: o.number,
  min: o.number,
  defaultValue: o.number,
  step: o.number,
  onValue: o.func,
  keepWithinRange: o.bool
};
Pi.defaultProps = {
  step: 1
};
const Ri = _t(
  ({ id: e, name: t, label: n, pattern: r, addClass: a, isLabelVisible: i }, c) => {
    const {
      counter: s,
      onChangeValue: u,
      onIncrementValue: f,
      onDecrementValue: l,
      min: d,
      max: v
    } = Ee(hr), h = e || It(), m = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), b = ({ target: w }) => {
      if (!isNaN(w.value) && w.value)
        return u(parseInt(w.value));
      u(0);
    }, y = (w) => {
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
    return /* @__PURE__ */ L(
      "label",
      {
        htmlFor: h,
        className: `${on["c-number-input__label"]} ${a ?? ""}`,
        children: [
          /* @__PURE__ */ L("span", { className: `${!i && "u-sr-only"}`, children: [
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
              className: on["c-number-input__input"],
              onChange: b,
              onKeyDown: y,
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
Ri.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Ri.propTypes = {
  id: o.string,
  name: o.string,
  label: o.string,
  pattern: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  __TYPE: me("NumberInputField")
};
const Di = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${on["c-number-input__stepper"]} ${t ?? ""}`, children: He(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Di.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberInputStepper")
};
Di.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Ni = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = Ee(hr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Decrementar valor"}`,
      className: `${on["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Ni.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberDecrementStepper"),
  label: o.string
};
Ni.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Ai = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: r, validate: a, max: i } = Ee(hr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Incrementar valor"}`,
      className: `${on["c-number-input__button"]} ${t ?? ""}`,
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
const yu = (e) => {
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
  X(() => {
    r && h(r);
  }, [r]);
  const m = (O, A) => {
    h(A), s && s(O, A);
  }, b = (O, A) => {
    const W = A - O + 1;
    return Array.from({ length: W }, (V, k) => O + k);
  }, y = b(1, Math.min(t, n)), w = b(
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
  ), D = Math.min(
    Math.max(
      // Final natural
      v + l,
      // Limite superior cuando la página es menor
      t + l * 2 + 2
    ),
    // Menor que el endPages
    w.length > 0 ? w[0] - 2 : n - 1
  ), I = [
    ...u ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...y,
    // Comienza el ellipsis
    ...N > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...b(N, D),
    // Finaliza el ellipsis
    ...D < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...w,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], x = (O) => {
    switch (O) {
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
    items: I.map((O) => typeof O == "number" ? {
      onClick: (A) => {
        m(A, O);
      },
      type: "page",
      page: O,
      selected: O === v,
      disabled: a,
      "aria-current": O === v ? "page" : void 0
    } : {
      onClick: (A) => {
        m(A, x(O));
      },
      type: O,
      page: x(O),
      selected: !1,
      disabled: a || O.indexOf("ellipsis") === -1 && (O === "next" || O === "last" ? v >= n : v <= 1)
    }),
    ...d
  };
}, Sn = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, _u = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), wu = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${_u[e]} página`, Ii = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: r,
  ...a
}) => {
  const { items: i } = yu({ ...a });
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
  getItemAriaLabel: wu
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
const _o = ({ page: e, type: t, addClass: n, disabled: r, element: a, icons: i, selected: c, defaultStyle: s, ...u }) => {
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
const en = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, gr = ut(), xu = ({ children: e, defaultIndex: t, addClass: n, type: r, defaultStyle: a }) => {
  const [i, c] = ee(null), s = J([]), u = (h) => {
    s.current.includes(h) || (s.current = [...s.current, h]);
  }, f = (h) => c(s.current[h]), l = (h) => /:.*?:/g.test(h) ? i === h : s.current[h - 1] === i, d = () => [...s.current].reduce((h, m, b) => [...h, b + 1], []), v = (h) => s.current.indexOf(h) + 1;
  return X(() => {
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
          className: ne("video-interpreter-ui-panel", {
            [en["c-panel"]]: !a,
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
xu.propTypes = {
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
    const { validation: c, addNewIdToSection: s, getIndexById: u, type: f } = Ee(gr), l = It(), d = c(l);
    return X(() => {
      l && s(l);
    }, [l]), /* @__PURE__ */ L(
      "section",
      {
        ref: i,
        role: f === "carrousel" ? "group" : "tabpanel",
        hidden: !d,
        "data-type": r,
        "aria-hidden": !d,
        "data-value": l,
        "aria-labelledby": `section-${l}`,
        className: ne({
          [en["c-section"]]: !n,
          "video-interpreter-ui-section": "video-interpreter-ui-section",
          [t]: t
        }),
        ...f === "carrousel" && {
          "aria-roledescription": "Sección"
        },
        ...a,
        children: [
          /* @__PURE__ */ L("span", { id: `section-${l}`, className: "u-sr-only", children: [
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
const Tu = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), ua = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Ou = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${Tu[e]} sección`, Mi = ({
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
  const { validation: l, onToggle: d, listId: v, currentSection: h } = Ee(gr), m = J([]), b = Object.freeze({
    previous: h - 1,
    next: h + 1
  }), y = {
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
  }, [w, N] = ee([]);
  X(() => {
    v.length !== 0 && N([
      // Botón para navegar a la sección anterior.
      ...t ? ["previous"] : [],
      // Lista de todas la secciones.
      ...v || [],
      // Botón para navegar a la siguiente sección.
      ...n ? ["next"] : []
    ]);
  }, [v]);
  const D = (O) => !m.current.includes(O) && O ? m.current = [...m.current, O] : m.current, I = (O) => {
    const A = m.current[0], W = m.current[m.current.length - 1];
    if ((O.keyCode || O.which) === ua.LEFT)
      if (O.target === A)
        W.focus();
      else {
        const V = m.current.indexOf(O.target) - 1;
        m.current[V].focus();
      }
    else if ((O.keyCode || O.which) === ua.RIGHT)
      if (O.target === W)
        A.focus();
      else {
        const V = m.current.indexOf(O.target) + 1;
        m.current[V].focus();
      }
  }, x = (O) => {
    d(v.findIndex((A) => A === O)), c !== void 0 && c(O, v.length);
  }, B = w.map((O) => {
    let A = [...v];
    return A = A.pop(), typeof O == "number" ? {
      onClick: (W) => {
        x(O);
      },
      type: "section",
      section: O,
      selected: l(O),
      ref: D,
      onKeyDown: I
    } : {
      onClick: () => {
        x(b[O]);
      },
      type: O,
      section: b[O],
      selected: !1,
      disabled: O === "next" ? h >= A : h <= v[0]
    };
  });
  return X(() => {
    c !== void 0 && c(h, v.length);
  }, []), /* @__PURE__ */ L(bt, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: ne({
          [en["c-navigation"]]: !f,
          [s]: s
        }),
        children: e ? e(B) : B.map(({ section: O, type: A, selected: W, ...V }, k) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: ne({
              [en["c-navigation__item"]]: !f
            }),
            children: A === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${O}`,
                role: "tab",
                tabIndex: `${W ? 0 : -1}`,
                "aria-selected": W,
                "data-class": "c-navigation__section",
                className: ne({
                  [en["c-navigation__section"]]: !f
                }),
                "aria-label": u(A, O, W),
                ...V
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: ne({
                  [en["c-navigation__button"]]: !f
                }),
                "aria-label": u(A, O, W),
                ...V,
                children: y[A] ? r ? /* @__PURE__ */ p(Ce, { path: y[A] }, A) : /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: y[A]
                  }
                ) }, A) : null
              }
            )
          },
          `navigation-section-item-${k}`
        ))
      }
    )
  ] });
};
Mi.propTypes = {
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
Mi.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: Ou
};
const Eu = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = Ee(gr), a = (i) => {
    r(t - 1), n && n(i);
  };
  return Re.map(e, (i) => Pe(i, { ...i.props, onClick: a }));
};
Eu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const Su = {
  "c-paper": "_c-paper_1sbf6_1"
}, Cu = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = J(null);
  return Ia(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${Su["c-paper"]} ${n ?? ""}`,
      ...r,
      children: e
    }
  );
};
Cu.propTypes = {
  children: o.oneOfType([
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  color: o.string
};
const Pu = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Ru = (e) => {
  document.body.append(e);
}, Du = (e) => {
  const t = J(null);
  X(() => {
    const r = document.querySelector(`#${e}`), a = r || Pu(e);
    return r || Ru(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, fn = ({ children: e, id: t }) => {
  const n = Du(t);
  return ka(e, n);
};
fn.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const Nu = "_row_1adiy_1", Au = {
  row: Nu
}, Iu = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Au.row} ${e ?? ""}`, ...t }));
Iu.propTypes = {
  addClass: o.string
};
const Zn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, ki = _t(
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
    const h = t || It(), m = ({ target: b }) => {
      f && f({ id: h, value: b.value });
    };
    return /* @__PURE__ */ L("label", { htmlFor: h, ...i && { className: `${i}` }, children: [
      /* @__PURE__ */ L("span", { className: `${!c && "u-sr-only"}`, children: [
        " ",
        r,
        " "
      ] }),
      /* @__PURE__ */ L("div", { className: Zn["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
        /* @__PURE__ */ L(
          "select",
          {
            id: h,
            ref: v,
            name: h,
            defaultValue: l,
            className: ne({
              [Zn["c-select"]]: !d
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
            addClass: ne({ [Zn["c-select__icon"]]: !d })
          }
        ) : /* @__PURE__ */ p(
          Ce,
          {
            "data-class": "c-select__icon",
            addClass: ne({ [Zn["c-select__icon"]]: !d }),
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
    ] });
  }
);
ki.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
ki.propTypes = {
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
const $u = ({ children: e, onAllSelect: t }) => {
  const [n, r] = ee([]), a = (c) => r([
    ...n.filter((s) => s.id !== c.id),
    { ...c }
  ]);
  return X(() => {
    t && t(n);
  }, [n, t]), Re.map(e, (c) => {
    var s;
    return ct(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? Pe(c, { ...c.props, onChoise: a }) : c : null;
  });
};
$u.propTypes = {
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
}, da = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Li = _t(
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
    const [d, v] = ee(!1), h = e || It(), m = ({ target: y }) => {
      if (v(y.checked), !!f) {
        if (y.checked) {
          f({ id: y.id, value: y.value });
          return;
        }
        f({ id: y.id, value: "" });
      }
    }, b = (y) => {
      ((y.keyCode || y.which) === da.SPACE || (y.keyCode || y.which) === da.ENTER) && v((w) => (f && f(w ? { id: h, value: "" } : { id: h, value: `${r}` }), !w));
    };
    return X(() => (s && v(!!s), () => {
      v(!1);
    }), [s]), /* @__PURE__ */ L(
      "label",
      {
        htmlFor: h,
        className: `${qr["c-label"]} ${qr[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ L("span", { className: `${!u && "u-sr-only"}`, children: [
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
Li.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Li.propTypes = {
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
const wo = ut(), Mu = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = ee(0), c = (u) => i(u), s = (u) => a === u;
  return X(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(wo.Provider, { value: { validation: s, onToggle: c }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: He(e, ["TabList", "TabPanels"]) }) });
};
Mu.propTypes = {
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
}, ji = ({
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
  const d = J(), { validation: v, onToggle: h } = Ee(wo), m = v(t), b = (y) => {
    s && s(y), h(t);
  };
  return X(() => (d.current && i(d.current), () => {
    d.current = null;
  }), [d]), /* @__PURE__ */ L(
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
      className: ne({
        [`${In["c-tab__button"]} u-flex`]: !u,
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
ji.propTypes = {
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
ji.defaultProps = {
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
  const s = J([]), u = (d) => s.current = [...s.current, d], f = (d) => {
    const v = s.current[0], h = s.current[s.current.length - 1];
    if ((d.keyCode || d.which) === fa.LEFT)
      if (d.target === v)
        h.focus();
      else {
        const m = s.current.indexOf(d.target) - 1;
        s.current[m].focus();
      }
    else if ((d.keyCode || d.which) === fa.RIGHT)
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
      className: ne({
        [In["c-tab__list"]]: !a,
        [t]: t
      }),
      ...c,
      children: He(l, ["Tab"])
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
const Bi = ({ children: e, id: t, addClass: n, defaultStyle: r, __TYPE: a, ...i }) => {
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
        ["video-interpreter-ui-tabpanel"]: "video-interpreter-ui-tabpanel",
        [n]: n
      }),
      ...i,
      children: e
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
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("TabPanel")
};
Bi.defaultProps = {
  __TYPE: "TabPanel"
};
const qi = ({
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
        [In["c-tab__panels"]]: !n,
        [t]: t
      }),
      "data-type": r,
      ...a,
      children: He(i, ["TabPanel"])
    }
  );
};
qi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: me("TabPanels")
};
qi.defaultProps = {
  __TYPE: "TabPanels"
};
const Vr = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, Vi = _t(
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
    const h = e || It(), m = ({ target: b }) => {
      l && l({ id: h, value: b.value });
    };
    return /* @__PURE__ */ L(
      "label",
      {
        htmlFor: h,
        className: ne({
          [Vr["c-label"]]: !f,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ L("span", { className: `${!c && "u-sr-only"}`, children: [
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
const ku = $a(({ children: e, theme: t = {} }) => {
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
  return X(() => {
    if (Object.entries(t).length !== 0)
      return n(t), () => {
        t = {};
      };
  }, [t]), e;
});
ku.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var pa = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, va = typeof window < "u" && window.document && window.document.createElement ? zt.useLayoutEffect : zt.useEffect, We = "top", st = "bottom", lt = "right", Ue = "left", mr = "auto", Bn = [We, st, lt, Ue], an = "start", $n = "end", Lu = "clippingParents", Yi = "viewport", _n = "popper", ju = "reference", ha = /* @__PURE__ */ Bn.reduce(function(e, t) {
  return e.concat([t + "-" + an, t + "-" + $n]);
}, []), zi = /* @__PURE__ */ [].concat(Bn, [mr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + an, t + "-" + $n]);
}, []), Fu = "beforeRead", Bu = "read", qu = "afterRead", Vu = "beforeMain", Yu = "main", zu = "afterMain", Wu = "beforeWrite", Uu = "write", Hu = "afterWrite", oo = [Fu, Bu, qu, Vu, Yu, zu, Wu, Uu, Hu];
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
function xo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Gu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !Je(i) || !yt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Zu(e) {
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
const Xu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gu,
  effect: Zu,
  requires: ["computeStyles"]
};
function ht(e) {
  return e.split("-")[0];
}
var Ut = Math.max, sr = Math.min, sn = Math.round;
function ao() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Wi() {
  return !/^((?!chrome|android).)*safari/i.test(ao());
}
function ln(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && Je(e) && (a = e.offsetWidth > 0 && sn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && sn(r.height) / e.offsetHeight || 1);
  var c = Ht(e) ? tt(e) : window, s = c.visualViewport, u = !Wi() && n, f = (r.left + (u && s ? s.offsetLeft : 0)) / a, l = (r.top + (u && s ? s.offsetTop : 0)) / i, d = r.width / a, v = r.height / i;
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
function To(e) {
  var t = ln(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ui(e, t) {
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
  return tt(e).getComputedStyle(e);
}
function Ku(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
function $t(e) {
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
    (xo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $t(e)
  );
}
function ga(e) {
  return !Je(e) || // https://github.com/popperjs/popper-core/issues/837
  mt(e).position === "fixed" ? null : e.offsetParent;
}
function Qu(e) {
  var t = /firefox/i.test(ao()), n = /Trident/i.test(ao());
  if (n && Je(e)) {
    var r = mt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = br(e);
  for (xo(a) && (a = a.host); Je(a) && ["html", "body"].indexOf(yt(a)) < 0; ) {
    var i = mt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function qn(e) {
  for (var t = tt(e), n = ga(e); n && Ku(n) && mt(n).position === "static"; )
    n = ga(n);
  return n && (yt(n) === "html" || yt(n) === "body" && mt(n).position === "static") ? t : n || Qu(e) || t;
}
function Oo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cn(e, t, n) {
  return Ut(e, sr(t, n));
}
function Ju(e, t, n) {
  var r = Cn(e, t, n);
  return r > n ? n : r;
}
function Hi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Gi(e) {
  return Object.assign({}, Hi(), e);
}
function Zi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ed = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Gi(typeof t != "number" ? t : Zi(t, Bn));
};
function td(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = ht(n.placement), u = Oo(s), f = [Ue, lt].indexOf(s) >= 0, l = f ? "height" : "width";
  if (!(!i || !c)) {
    var d = ed(a.padding, n), v = To(i), h = u === "y" ? We : Ue, m = u === "y" ? st : lt, b = n.rects.reference[l] + n.rects.reference[u] - c[u] - n.rects.popper[l], y = c[u] - n.rects.reference[u], w = qn(i), N = w ? u === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, D = b / 2 - y / 2, I = d[h], x = N - v[l] - d[m], B = N / 2 - v[l] / 2 + D, O = Cn(I, B, x), A = u;
    n.modifiersData[r] = (t = {}, t[A] = O, t.centerOffset = O - B, t);
  }
}
function nd(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (Je(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Ui(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const rd = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: td,
  effect: nd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function cn(e) {
  return e.split("-")[1];
}
var od = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ad(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: sn(n * a) / a || 0,
    y: sn(r * a) / a || 0
  };
}
function ma(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, u = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, d = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, m = c.y, b = m === void 0 ? 0 : m, y = typeof l == "function" ? l({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = y.x, b = y.y;
  var w = c.hasOwnProperty("x"), N = c.hasOwnProperty("y"), D = Ue, I = We, x = window;
  if (f) {
    var B = qn(n), O = "clientHeight", A = "clientWidth";
    if (B === tt(n) && (B = $t(n), mt(B).position !== "static" && s === "absolute" && (O = "scrollHeight", A = "scrollWidth")), B = B, a === We || (a === Ue || a === lt) && i === $n) {
      I = st;
      var W = d && B === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        B[O]
      );
      b -= W - r.height, b *= u ? 1 : -1;
    }
    if (a === Ue || (a === We || a === st) && i === $n) {
      D = lt;
      var V = d && B === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        B[A]
      );
      h -= V - r.width, h *= u ? 1 : -1;
    }
  }
  var k = Object.assign({
    position: s
  }, f && od), Z = l === !0 ? ad({
    x: h,
    y: b
  }, tt(n)) : {
    x: h,
    y: b
  };
  if (h = Z.x, b = Z.y, u) {
    var U;
    return Object.assign({}, k, (U = {}, U[I] = N ? "0" : "", U[D] = w ? "0" : "", U.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", U));
  }
  return Object.assign({}, k, (t = {}, t[I] = N ? b + "px" : "", t[D] = w ? h + "px" : "", t.transform = "", t));
}
function id(e) {
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
    variation: cn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ma(Object.assign({}, l, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ma(Object.assign({}, l, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const sd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: id,
  data: {}
};
var Xn = {
  passive: !0
};
function ld(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, c = r.resize, s = c === void 0 ? !0 : c, u = tt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, Xn);
  }), s && u.addEventListener("resize", n.update, Xn), function() {
    i && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Xn);
    }), s && u.removeEventListener("resize", n.update, Xn);
  };
}
const cd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ld,
  data: {}
};
var ud = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function er(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ud[t];
  });
}
var dd = {
  start: "end",
  end: "start"
};
function ba(e) {
  return e.replace(/start|end/g, function(t) {
    return dd[t];
  });
}
function Eo(e) {
  var t = tt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function So(e) {
  return ln($t(e)).left + Eo(e).scrollLeft;
}
function fd(e, t) {
  var n = tt(e), r = $t(e), a = n.visualViewport, i = r.clientWidth, c = r.clientHeight, s = 0, u = 0;
  if (a) {
    i = a.width, c = a.height;
    var f = Wi();
    (f || !f && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s + So(e),
    y: u
  };
}
function pd(e) {
  var t, n = $t(e), r = Eo(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ut(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Ut(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + So(e), u = -r.scrollTop;
  return mt(a || n).direction === "rtl" && (s += Ut(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: u
  };
}
function Co(e) {
  var t = mt(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Xi(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : Je(e) && Co(e) ? e : Xi(br(e));
}
function Pn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Xi(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = tt(r), c = a ? [i].concat(i.visualViewport || [], Co(r) ? r : []) : r, s = t.concat(c);
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
function vd(e, t) {
  var n = ln(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ya(e, t, n) {
  return t === Yi ? io(fd(e, n)) : Ht(t) ? vd(t, n) : io(pd($t(e)));
}
function hd(e) {
  var t = Pn(br(e)), n = ["absolute", "fixed"].indexOf(mt(e).position) >= 0, r = n && Je(e) ? qn(e) : e;
  return Ht(r) ? t.filter(function(a) {
    return Ht(a) && Ui(a, r) && yt(a) !== "body";
  }) : [];
}
function gd(e, t, n, r) {
  var a = t === "clippingParents" ? hd(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(u, f) {
    var l = ya(e, f, r);
    return u.top = Ut(l.top, u.top), u.right = sr(l.right, u.right), u.bottom = sr(l.bottom, u.bottom), u.left = Ut(l.left, u.left), u;
  }, ya(e, c, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ki(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? ht(r) : null, i = r ? cn(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, u;
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
  var f = a ? Oo(a) : null;
  if (f != null) {
    var l = f === "y" ? "height" : "width";
    switch (i) {
      case an:
        u[f] = u[f] - (t[l] / 2 - n[l] / 2);
        break;
      case $n:
        u[f] = u[f] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return u;
}
function Mn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, u = s === void 0 ? Lu : s, f = n.rootBoundary, l = f === void 0 ? Yi : f, d = n.elementContext, v = d === void 0 ? _n : d, h = n.altBoundary, m = h === void 0 ? !1 : h, b = n.padding, y = b === void 0 ? 0 : b, w = Gi(typeof y != "number" ? y : Zi(y, Bn)), N = v === _n ? ju : _n, D = e.rects.popper, I = e.elements[m ? N : v], x = gd(Ht(I) ? I : I.contextElement || $t(e.elements.popper), u, l, c), B = ln(e.elements.reference), O = Ki({
    reference: B,
    element: D,
    strategy: "absolute",
    placement: a
  }), A = io(Object.assign({}, D, O)), W = v === _n ? A : B, V = {
    top: x.top - W.top + w.top,
    bottom: W.bottom - x.bottom + w.bottom,
    left: x.left - W.left + w.left,
    right: W.right - x.right + w.right
  }, k = e.modifiersData.offset;
  if (v === _n && k) {
    var Z = k[a];
    Object.keys(V).forEach(function(U) {
      var K = [lt, st].indexOf(U) >= 0 ? 1 : -1, oe = [We, st].indexOf(U) >= 0 ? "y" : "x";
      V[U] += Z[oe] * K;
    });
  }
  return V;
}
function md(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, u = n.allowedAutoPlacements, f = u === void 0 ? zi : u, l = cn(r), d = l ? s ? ha : ha.filter(function(m) {
    return cn(m) === l;
  }) : Bn, v = d.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  v.length === 0 && (v = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(m, b) {
    return m[b] = Mn(e, {
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
function bd(e) {
  if (ht(e) === mr)
    return [];
  var t = er(e);
  return [ba(e), t, ba(t)];
}
function yd(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, u = n.fallbackPlacements, f = n.padding, l = n.boundary, d = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, b = n.allowedAutoPlacements, y = t.options.placement, w = ht(y), N = w === y, D = u || (N || !m ? [er(y)] : bd(y)), I = [y].concat(D).reduce(function(E, P) {
      return E.concat(ht(P) === mr ? md(t, {
        placement: P,
        boundary: l,
        rootBoundary: d,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : P);
    }, []), x = t.rects.reference, B = t.rects.popper, O = /* @__PURE__ */ new Map(), A = !0, W = I[0], V = 0; V < I.length; V++) {
      var k = I[V], Z = ht(k), U = cn(k) === an, K = [We, st].indexOf(Z) >= 0, oe = K ? "width" : "height", Q = Mn(t, {
        placement: k,
        boundary: l,
        rootBoundary: d,
        altBoundary: v,
        padding: f
      }), G = K ? U ? lt : Ue : U ? st : We;
      x[oe] > B[oe] && (G = er(G));
      var ce = er(G), ae = [];
      if (i && ae.push(Q[Z] <= 0), s && ae.push(Q[G] <= 0, Q[ce] <= 0), ae.every(function(E) {
        return E;
      })) {
        W = k, A = !1;
        break;
      }
      O.set(k, ae);
    }
    if (A)
      for (var C = m ? 3 : 1, j = function(P) {
        var S = I.find(function($) {
          var q = O.get($);
          if (q)
            return q.slice(0, P).every(function(H) {
              return H;
            });
        });
        if (S)
          return W = S, "break";
      }, _ = C; _ > 0; _--) {
        var T = j(_);
        if (T === "break")
          break;
      }
    t.placement !== W && (t.modifiersData[r]._skip = !0, t.placement = W, t.reset = !0);
  }
}
const _d = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yd,
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
  return [We, lt, st, Ue].some(function(t) {
    return e[t] >= 0;
  });
}
function wd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = Mn(t, {
    elementContext: "reference"
  }), s = Mn(t, {
    altBoundary: !0
  }), u = _a(c, r), f = _a(s, a, i), l = wa(u), d = wa(f);
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
const xd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: wd
};
function Td(e, t, n) {
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
function Od(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = zi.reduce(function(l, d) {
    return l[d] = Td(d, t.rects, i), l;
  }, {}), s = c[t.placement], u = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
}
const Ed = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Od
};
function Sd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ki({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Cd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Sd,
  data: {}
};
function Pd(e) {
  return e === "x" ? "y" : "x";
}
function Rd(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, u = n.boundary, f = n.rootBoundary, l = n.altBoundary, d = n.padding, v = n.tether, h = v === void 0 ? !0 : v, m = n.tetherOffset, b = m === void 0 ? 0 : m, y = Mn(t, {
    boundary: u,
    rootBoundary: f,
    padding: d,
    altBoundary: l
  }), w = ht(t.placement), N = cn(t.placement), D = !N, I = Oo(w), x = Pd(I), B = t.modifiersData.popperOffsets, O = t.rects.reference, A = t.rects.popper, W = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, V = typeof W == "number" ? {
    mainAxis: W,
    altAxis: W
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, W), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = {
    x: 0,
    y: 0
  };
  if (B) {
    if (i) {
      var U, K = I === "y" ? We : Ue, oe = I === "y" ? st : lt, Q = I === "y" ? "height" : "width", G = B[I], ce = G + y[K], ae = G - y[oe], C = h ? -A[Q] / 2 : 0, j = N === an ? O[Q] : A[Q], _ = N === an ? -A[Q] : -O[Q], T = t.elements.arrow, E = h && T ? To(T) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Hi(), S = P[K], $ = P[oe], q = Cn(0, O[Q], E[Q]), H = D ? O[Q] / 2 - C - q - S - V.mainAxis : j - q - S - V.mainAxis, Y = D ? -O[Q] / 2 + C + q + $ + V.mainAxis : _ + q + $ + V.mainAxis, F = t.elements.arrow && qn(t.elements.arrow), R = F ? I === "y" ? F.clientTop || 0 : F.clientLeft || 0 : 0, te = (U = k == null ? void 0 : k[I]) != null ? U : 0, de = G + H - te - R, ye = G + Y - te, xe = Cn(h ? sr(ce, de) : ce, G, h ? Ut(ae, ye) : ae);
      B[I] = xe, Z[I] = xe - G;
    }
    if (s) {
      var je, dt = I === "x" ? We : Ue, Ze = I === "x" ? st : lt, Te = B[x], qe = x === "y" ? "height" : "width", Xe = Te + y[dt], Mt = Te - y[Ze], St = [We, Ue].indexOf(w) !== -1, kt = (je = k == null ? void 0 : k[x]) != null ? je : 0, Lt = St ? Xe : Te - O[qe] - A[qe] - kt + V.altAxis, Fe = St ? Te + O[qe] + A[qe] - kt - V.altAxis : Mt, ft = h && St ? Ju(Lt, Te, Fe) : Cn(h ? Lt : Xe, Te, h ? Fe : Mt);
      B[x] = ft, Z[x] = ft - Te;
    }
    t.modifiersData[r] = Z;
  }
}
const Dd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Rd,
  requiresIfExists: ["offset"]
};
function Nd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ad(e) {
  return e === tt(e) || !Je(e) ? Eo(e) : Nd(e);
}
function Id(e) {
  var t = e.getBoundingClientRect(), n = sn(t.width) / e.offsetWidth || 1, r = sn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function $d(e, t, n) {
  n === void 0 && (n = !1);
  var r = Je(t), a = Je(t) && Id(t), i = $t(t), c = ln(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((yt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Co(i)) && (s = Ad(t)), Je(t) ? (u = ln(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : i && (u.x = So(i))), {
    x: c.left + s.scrollLeft - u.x,
    y: c.top + s.scrollTop - u.y,
    width: c.width,
    height: c.height
  };
}
function Md(e) {
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
function kd(e) {
  var t = Md(e);
  return oo.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Ld(e) {
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
var Yt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', jd = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', xa = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Fd(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), xa).filter(function(n, r, a) {
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + xa.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(r) {
        e.find(function(a) {
          return a.name === r;
        }) == null && console.error(Pt(jd, String(t.name), r, r));
      });
    });
  });
}
function Bd(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var a = t(r);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function qd(e) {
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
var Ta = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Vd = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Oa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ea() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Yd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Oa : a;
  return function(s, u, f) {
    f === void 0 && (f = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Oa, i),
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
        var N = typeof w == "function" ? w(l.options) : w;
        b(), l.options = Object.assign({}, i, l.options, N), l.scrollParents = {
          reference: Ht(s) ? Pn(s) : s.contextElement ? Pn(s.contextElement) : [],
          popper: Pn(u)
        };
        var D = kd(qd([].concat(r, l.options.modifiers)));
        if (l.orderedModifiers = D.filter(function(k) {
          return k.enabled;
        }), process.env.NODE_ENV !== "production") {
          var I = Bd([].concat(D, l.options.modifiers), function(k) {
            var Z = k.name;
            return Z;
          });
          if (Fd(I), ht(l.options.placement) === mr) {
            var x = l.orderedModifiers.find(function(k) {
              var Z = k.name;
              return Z === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var B = mt(u), O = B.marginTop, A = B.marginRight, W = B.marginBottom, V = B.marginLeft;
          [O, A, W, V].some(function(k) {
            return parseFloat(k);
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
          var w = l.elements, N = w.reference, D = w.popper;
          if (!Ea(N, D)) {
            process.env.NODE_ENV !== "production" && console.error(Ta);
            return;
          }
          l.rects = {
            reference: $d(N, qn(D), l.options.strategy === "fixed"),
            popper: To(D)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(k) {
            return l.modifiersData[k.name] = Object.assign({}, k.data);
          });
          for (var I = 0, x = 0; x < l.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && (I += 1, I > 100)) {
              console.error(Vd);
              break;
            }
            if (l.reset === !0) {
              l.reset = !1, x = -1;
              continue;
            }
            var B = l.orderedModifiers[x], O = B.fn, A = B.options, W = A === void 0 ? {} : A, V = B.name;
            typeof O == "function" && (l = O({
              state: l,
              options: W,
              name: V,
              instance: h
            }) || l);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ld(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(l);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Ea(s, u))
      return process.env.NODE_ENV !== "production" && console.error(Ta), h;
    h.setOptions(f).then(function(y) {
      !v && f.onFirstUpdate && f.onFirstUpdate(y);
    });
    function m() {
      l.orderedModifiers.forEach(function(y) {
        var w = y.name, N = y.options, D = N === void 0 ? {} : N, I = y.effect;
        if (typeof I == "function") {
          var x = I({
            state: l,
            name: w,
            instance: h,
            options: D
          }), B = function() {
          };
          d.push(x || B);
        }
      });
    }
    function b() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return h;
  };
}
var zd = [cd, Cd, sd, Xu, Ed, _d, Dd, rd, xd], Wd = /* @__PURE__ */ Yd({
  defaultModifiers: zd
}), Ud = typeof Element < "u", Hd = typeof Map == "function", Gd = typeof Set == "function", Zd = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function tr(e, t) {
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
        if (!tr(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (Hd && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!tr(r.value[1], t.get(r.value[0])))
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
    if (Zd && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Ud && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !tr(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Xd = function(t, n) {
  try {
    return tr(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, Kd = [], yr = function(t, n, r) {
  r === void 0 && (r = {});
  var a = zt.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || Kd
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
        ws.flushSync(function() {
          u({
            styles: pa(b.map(function(y) {
              return [y, m.styles[y] || {}];
            })),
            attributes: pa(b.map(function(y) {
              return [y, m.attributes[y]];
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
    return Xd(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), d = zt.useRef();
  return va(function() {
    d.current && d.current.setOptions(l);
  }, [l]), va(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Wd, h = v(t, n, l);
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
}, Qd = Object.freeze({
  ESC: 27
}), Qi = ({
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
  const [l, d] = ee(!1), v = J(null), h = J(null), m = t || It(), b = (x) => d(!1), y = (x) => {
    d(!l), l && document.activeElement === v.current && !u && setTimeout(() => {
      d((B) => !B);
    }, 100), f && f(x);
  }, w = (x) => {
    (x.keyCode | x.which) === Qd.ESC && l && d(!l);
  }, N = Re.map(e, (x) => ct(x) ? Pe(x, {
    ...x.props,
    "aria-describedby": t,
    ref: v,
    onClick: y,
    "data-open": l,
    ...u ? {} : { onBlur: b, onKeyDown: w }
  }) : null), { styles: D, attributes: I } = yr(
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
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(bt, { children: e }) : /* @__PURE__ */ L(bt, { children: [
    N,
    /* @__PURE__ */ p(fn, { id: "js-toggletip-portal", children: /* @__PURE__ */ L(
      "div",
      {
        id: m,
        ref: h,
        role: "status",
        className: `${Yr["c-toggletip"]} ${l && Yr["c-toggletip--active"]} ${a ?? ""}`,
        style: D.popper,
        ...I.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Yr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: D.arrow
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
}, Jd = Object.freeze({
  ESC: 27
}), Ji = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s
}) => {
  const [u, f] = ee(!1), l = J(null), d = J(null), v = J(), h = t || It(), m = (O) => {
    u || f(!u);
  }, b = (O) => f(!1), y = (O) => {
    (!u || document.activeElement !== l.current) && f(!u);
  }, w = () => {
    window.clearTimeout(v.current);
  }, N = (O) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, D = (O) => {
    (O.keyCode | O.which) === Jd.ESC && u && f(!u);
  }, I = Re.map(e, (O) => ct(O) ? Pe(O, {
    ...O.props,
    "aria-describedby": t,
    ref: l,
    onFocus: m,
    onBlur: b,
    onMouseEnter: y,
    onMouseLeave: N,
    onKeyDown: D
  }) : null), { styles: x, attributes: B } = yr(
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
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(bt, { children: e }) : /* @__PURE__ */ L(bt, { children: [
    I,
    /* @__PURE__ */ p(fn, { id: "js-tooltip-portal", children: /* @__PURE__ */ L(
      "div",
      {
        id: h,
        ref: d,
        role: "tooltip",
        "data-open": u,
        onMouseEnter: w,
        onMouseLeave: N,
        className: `${zr["c-tooltip"]} ${u && zr["c-tooltip--active"]} ${a ?? ""}`,
        style: x.popper,
        ...B.popper,
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
const Po = ut(), es = ({
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
      (w, N, D) => [
        ...w,
        document.querySelector(N.target) ? { id: D + 1, ...N } : null
      ],
      []
    ).filter((w) => w !== null)
  ], v = (w) => d.filter((N) => N.id === w).reduce((N, D) => ({ ...N, ...D }), {}), h = (w) => {
    const N = document.querySelector("#root");
    N.inert = w;
  }, m = () => {
    l((w) => w < d.length ? w + 1 : w);
  }, b = () => {
    l((w) => w > 0 + 1 ? w - 1 : w);
  }, y = () => {
    l(null), n(!t), h(!1), r && r.current.focus();
  };
  return X(() => {
    t && (l(d.shift().id), h(!0));
  }, [t]), /* @__PURE__ */ p(
    Po.Provider,
    {
      value: {
        isOpen: t,
        lastId: d.length,
        ...v(f),
        methods: {
          onNext: m,
          onPrev: b,
          onClose: y
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(fn, { id: "js-tour", children: t && /* @__PURE__ */ L(bt, { children: [
        /* @__PURE__ */ p(ef, {}),
        /* @__PURE__ */ p(
          ts,
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
es.defaultProps = {
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
es.propTypes = {
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
const At = {
  "c-layout": "_c-layout_15ivg_1",
  "c-tour-content": "_c-tour-content_15ivg_9",
  "c-tour-progress": "_c-tour-progress_15ivg_30",
  "c-tour-progress-bar": "_c-tour-progress-bar_15ivg_38",
  "c-tour-button-container": "_c-tour-button-container_15ivg_49",
  "c-tour-help": "_c-tour-help_15ivg_91",
  "c-tour-number": "_c-tour-number_15ivg_101"
}, ts = ({
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
  } = Ee(Po), h = J(), { onClose: m, onPrev: b, onNext: y } = c, { styles: w, attributes: N } = yr(
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
  ), D = () => ct(f) ? f : _s("p", { className: At["tour-description"] }, [
    f
  ]), I = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), y();
  };
  return /* @__PURE__ */ L(bt, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: ne({ [At["c-layout"]]: !v }),
        "data-class": "c-layout"
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        id: `unique-id-tour-element-${s}`,
        ref: h,
        style: w.popper,
        className: ne({
          [At["c-tour-content"]]: !v,
          "animate__animated animate__fadeIn animate__faster": a,
          [r]: r
        }),
        ...e,
        ...N.popper,
        children: [
          /* @__PURE__ */ L("span", { className: "u-sr-only", children: [
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
              className: ne({ [At["c-tour-progress"]]: !v }),
              "data-class": "c-tour-progress",
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: At["c-tour-progress-bar"],
                  "data-class": "c-tour-progress__bar",
                  style: { transform: `scaleX(${s / i})` }
                }
              )
            }
          ),
          D(),
          /* @__PURE__ */ L(
            "div",
            {
              className: ne({
                [At["c-tour-button-container"]]: !v
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
ts.propTypes = {
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
const ef = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r, defaultStyle: a } = Ee(Po), [i, c] = ee({}), s = () => {
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
  return X(() => (n && s(), () => {
    c({});
  }), [n]), X(() => {
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
        [At["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [r]: r
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: At["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, tf = "_active_i7dnv_90", nf = "_iconPulse_i7dnv_1", ge = {
  "c-vid": "_c-vid_i7dnv_1",
  "c-vid__caption": "_c-vid__caption_i7dnv_19",
  "c-vid__container": "_c-vid__container_i7dnv_24",
  "c-vid__video": "_c-vid__video_i7dnv_44",
  "no-captions": "_no-captions_i7dnv_56",
  "c-vid__wrapper": "_c-vid__wrapper_i7dnv_60",
  "c-vid__icon-container": "_c-vid__icon-container_i7dnv_70",
  "c-vid__icon": "_c-vid__icon_i7dnv_70",
  active: tf,
  iconPulse: nf,
  "c-vid__progress-bg": "_c-vid__progress-bg_i7dnv_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_i7dnv_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_i7dnv_140",
  "c-vid__controls": "_c-vid__controls_i7dnv_150",
  "c-vid__button": "_c-vid__button_i7dnv_165",
  "c-vid__volume": "_c-vid__volume_i7dnv_180",
  "c-vid__volume-item": "_c-vid__volume-item_i7dnv_191",
  "c-vid__time": "_c-vid__time_i7dnv_202",
  "c-vid__subtitles": "_c-vid__subtitles_i7dnv_208"
}, ns = ({ src: e, width: t = "1000", hasDescription: n, description: r, addClass: a, poster: i, ...c }) => {
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
  }), [b, y] = ee(100), [w, N] = ee({
    state: !1,
    label: "Ver en pantalla completa"
  }), [D, I] = ee(!1), [x, B] = ee(100), O = J(null), A = J(null), W = J(null), V = J(null), k = J(null), Z = J(null), U = J(null), K = J(null), [oe, Q] = ee(!1), G = (F) => {
    F.classList.add(`${ge.active}`), setTimeout(() => {
      F.classList.remove(`${ge.active}`);
    }, 650);
  };
  function ce() {
    const F = A.current;
    d.state ? (F.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (F.play(), v({
      state: !0,
      label: "Pausar video"
    })), G(Z.current);
  }
  function ae() {
    const F = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, R = O.current;
    F ? (N({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (N({
      state: !0,
      label: "Salir de pantalla completa"
    }), R.requestFullscreen ? R.requestFullscreen() : R.mozRequestFullScreen ? R.mozRequestFullScreen() : R.webkitRequestFullScreen ? R.webkitRequestFullScreen() : R.msRequestFullscreen && R.msRequestFullscreen());
  }
  function C(F) {
    const R = parseInt(F, 10), te = R >= 3600 ? Math.floor(R / 3600) : 0, de = Math.floor((R - te * 3600) / 60), ye = R - te * 3600 - de * 60, xe = E(T(te)), je = E(T(de)), dt = E(T(ye));
    return {
      hours: xe,
      minutes: je,
      seconds: dt
    };
  }
  function j(F) {
    const R = _(F.duration), te = _(F.currentTime);
    l({
      totalSeconds: F.currentTime,
      hours: parseInt(C(F.currentTime).hours),
      minutes: parseInt(C(F.currentTime).minutes),
      seconds: parseInt(C(F.currentTime).seconds),
      string: te
    }), u({
      totalSeconds: Math.floor(F.duration),
      hours: parseInt(C(F.duration).hours),
      minutes: parseInt(C(F.duration).minutes),
      seconds: parseInt(C(F.duration).seconds),
      string: R
    });
  }
  function _(F) {
    return parseInt(F, 10) <= 3600 ? `${C(F).minutes}:${C(F).seconds}` : `${C(F).hours}:${C(F).minutes}:${C(F).seconds}`;
  }
  function T(F) {
    return F < 10 ? F = "0" + F : F;
  }
  function E(F) {
    return isNaN(F) ? "00" : F;
  }
  function P(F) {
    const R = V.current, te = A.current, ye = F.nativeEvent.offsetX / R.offsetWidth * te.duration;
    te.currentTime = ye;
  }
  function S(F) {
    const R = A.current, te = F.target.value, de = te / 100;
    B(te), y(te), R.volume = de, h.state || m({
      state: !0,
      label: "Volumen"
    });
  }
  const $ = () => {
    if (h.state) {
      m({
        state: !1,
        label: "Mutear video"
      });
      const F = A.current, R = 0, te = R;
      B(R), F.volume = te;
    } else {
      m({
        state: !0,
        label: "Volumen"
      });
      const F = A.current, R = b, te = R / 100;
      B(R), F.volume = te;
    }
  }, q = function(F) {
    (F.keyCode || F.which) === 32 && ce();
  }, H = function(F) {
    const R = Math.floor(V.current.getAttribute("aria-valuenow"));
    if (document.activeElement === k.current)
      return null;
    if ((F.keyCode || F.which) === 37) {
      const te = R - 5;
      te >= 0 ? A.current.currentTime = te : A.current.currentTime = 0, G(K.current);
    }
    if ((F.keyCode || F.which) === 39) {
      const te = R + 5;
      te >= A.current.duration ? A.current.currentTime = A.current.duration : A.current.currentTime = te, G(U.current);
    }
  }, Y = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return X(() => {
    const F = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(F, "caption") && Q(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(F, "volume") && B(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), X(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: oe, volume: x }));
  }, [oe, x]), X(() => (W.current ? W.current.addEventListener("error", () => {
    I(!0);
  }) : I(!0), e.caption && I(!1), () => {
    W.current && W.current.removeEventListener("error", () => {
      I(!0);
    });
  }), [e.caption]), /* @__PURE__ */ L("figure", { className: `${ge["c-vid"]} ${a}`, style: { maxWidth: `${t}px` }, onKeyDown: (F) => H(F), ...c, children: [
    /* @__PURE__ */ L("div", { className: `${ge["c-vid__container"]} ${a}`, ref: O, children: [
      /* @__PURE__ */ L("div", { className: ge["c-vid__wrapper"], children: [
        /* @__PURE__ */ L(
          "video",
          {
            ref: A,
            onTimeUpdate: (F) => j(F.target),
            onLoadedData: (F) => j(F.target),
            onClick: ce,
            className: `${ge["c-vid__video"]} ${oe ? "" : ge["no-captions"]}`,
            ...i && { poster: i },
            children: [
              /* @__PURE__ */ p("source", { src: e.video }),
              e.caption ? /* @__PURE__ */ p("track", { ref: W, src: e.caption, label: "Subtítulos en español", kind: "subtitles", srcLang: "es", default: !0 }) : ""
            ]
          }
        ),
        /* @__PURE__ */ L("div", { className: ge["c-vid__icon-container"], children: [
          /* @__PURE__ */ p("div", { ref: K, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: Z, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: U, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { className: ge["progress-container"], children: /* @__PURE__ */ L(
        "div",
        {
          role: "slider",
          "aria-label": "Progreso del video",
          "aria-valuemin": "0",
          "aria-valuenow": f.totalSeconds,
          "aria-valuemax": s.totalSeconds,
          "aria-valuetext": Y(),
          tabIndex: "0",
          onKeyDown: q,
          className: ge["c-vid__progress-bg"],
          onClick: P,
          ref: V,
          children: [
            /* @__PURE__ */ p(
              "div",
              {
                className: ge["c-vid__progress-bar"],
                style: {
                  transform: `scaleX(calc(${f.totalSeconds} / ${s.totalSeconds}))`
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
      /* @__PURE__ */ L("div", { className: ge["c-vid__controls"], children: [
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
            onClick: $,
            children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: h.state ? /* @__PURE__ */ p("path", { id: "volume_on", d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z" }) : /* @__PURE__ */ p("path", { id: "volume_off", d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z" }) }) })
          }
        ),
        /* @__PURE__ */ L("label", { className: ge["c-vid__volume"], htmlFor: "volumeControl", children: [
          /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: ge["c-vid__volume-item"],
              ref: k,
              id: "volumeControl",
              type: "range",
              min: "0",
              max: "100",
              step: "5",
              value: x,
              onChange: S,
              "aria-valuetext": `${x}%`
            }
          )
        ] }),
        /* @__PURE__ */ L("p", { className: ge["c-vid__time"], "aria-hidden": "true", children: [
          /* @__PURE__ */ p("span", { children: f.string }),
          "/",
          /* @__PURE__ */ p("span", { children: s.string })
        ] }),
        /* @__PURE__ */ p(
          "button",
          {
            disabled: D,
            "aria-pressed": D ? void 0 : oe,
            onClick: () => Q(!oe),
            "aria-label": "Subtítulos",
            className: `${ge["c-vid__button"]} ${ge["c-vid__subtitles"]}`,
            children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: D ? /* @__PURE__ */ p("path", { id: "closed_caption_disabled", d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z" }) : /* @__PURE__ */ p("path", { id: "closed_caption", d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z" }) }) })
          }
        ),
        /* @__PURE__ */ p("button", { className: ge["c-vid__button"], "aria-label": w.label, onClick: ae, children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: w.state ? /* @__PURE__ */ p("path", { id: "fullscreen_exit", d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z" }) : /* @__PURE__ */ p("path", { id: "fullscreen", d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z" }) }) }) })
      ] })
    ] }),
    n && /* @__PURE__ */ L("figcaption", { className: ge["c-vid__caption"], children: [
      /* @__PURE__ */ L("strong", { children: [
        r.title,
        ":"
      ] }),
      " ",
      r.content
    ] })
  ] });
};
ns.propTypes = {
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
ns.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
var kn = {}, rf = {
  get exports() {
    return kn;
  },
  set exports(e) {
    kn = e;
  }
}, rs = {};
function os(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = os(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Sa() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = os(e)) && (r && (r += " "), r += t);
  return r;
}
const of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Sa,
  default: Sa
}, Symbol.toStringTag, { value: "Module" })), af = /* @__PURE__ */ xs(of);
var we = {}, wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.dontSetMe = df;
wt.findInArray = sf;
wt.int = uf;
wt.isFunction = lf;
wt.isNum = cf;
function sf(e, t) {
  for (var n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function lf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function cf(e) {
  return typeof e == "number" && !isNaN(e);
}
function uf(e) {
  return parseInt(e, 10);
}
function df(e, t, n) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
Gt.browserPrefixToKey = is;
Gt.browserPrefixToStyle = ff;
Gt.default = void 0;
Gt.getPrefix = as;
var Wr = ["Moz", "Webkit", "O", "ms"];
function as() {
  var e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var r = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!r || n in r)
    return "";
  for (var a = 0; a < Wr.length; a++)
    if (is(n, Wr[a]) in r)
      return Wr[a];
  return "";
}
function is(e, t) {
  return t ? "".concat(t).concat(pf(e)) : e;
}
function ff(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function pf(e) {
  for (var t = "", n = !0, r = 0; r < e.length; r++)
    n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
  return t;
}
var vf = as();
Gt.default = vf;
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
we.addClassName = ds;
we.addEvent = mf;
we.addUserSelectStyles = Pf;
we.createCSSTransform = Of;
we.createSVGTransform = Ef;
we.getTouch = Sf;
we.getTouchIdentifier = Cf;
we.getTranslation = Ro;
we.innerHeight = wf;
we.innerWidth = xf;
we.matchesSelector = us;
we.matchesSelectorAndParentsTo = gf;
we.offsetXYFromParent = Tf;
we.outerHeight = yf;
we.outerWidth = _f;
we.removeClassName = fs;
we.removeEvent = bf;
we.removeUserSelectStyles = Rf;
var et = wt, Ca = hf(Gt);
function ss(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ss = function(a) {
    return a ? n : t;
  })(e);
}
function hf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || so(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = ss(t);
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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ls(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pa(Object(n), !0).forEach(function(r) {
      cs(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cs(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kn = "";
function us(e, t) {
  return Kn || (Kn = (0, et.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, et.isFunction)(e[n]);
  })), (0, et.isFunction)(e[Kn]) ? e[Kn](t) : !1;
}
function gf(e, t, n) {
  var r = e;
  do {
    if (us(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function mf(e, t, n, r) {
  if (e) {
    var a = ls({
      capture: !0
    }, r);
    e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
  }
}
function bf(e, t, n, r) {
  if (e) {
    var a = ls({
      capture: !0
    }, r);
    e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
  }
}
function yf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, et.int)(n.borderTopWidth), t += (0, et.int)(n.borderBottomWidth), t;
}
function _f(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, et.int)(n.borderLeftWidth), t += (0, et.int)(n.borderRightWidth), t;
}
function wf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingTop), t -= (0, et.int)(n.paddingBottom), t;
}
function xf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingLeft), t -= (0, et.int)(n.paddingRight), t;
}
function Tf(e, t, n) {
  var r = t === t.ownerDocument.body, a = r ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - a.left) / n, c = (e.clientY + t.scrollTop - a.top) / n;
  return {
    x: i,
    y: c
  };
}
function Of(e, t) {
  var n = Ro(e, t, "px");
  return cs({}, (0, Ca.browserPrefixToKey)("transform", Ca.default), n);
}
function Ef(e, t) {
  var n = Ro(e, t, "");
  return n;
}
function Ro(e, t, n) {
  var r = e.x, a = e.y, i = "translate(".concat(r).concat(n, ",").concat(a).concat(n, ")");
  if (t) {
    var c = "".concat(typeof t.x == "string" ? t.x : t.x + n), s = "".concat(typeof t.y == "string" ? t.y : t.y + n);
    i = "translate(".concat(c, ", ").concat(s, ")") + i;
  }
  return i;
}
function Sf(e, t) {
  return e.targetTouches && (0, et.findInArray)(e.targetTouches, function(n) {
    return t === n.identifier;
  }) || e.changedTouches && (0, et.findInArray)(e.changedTouches, function(n) {
    return t === n.identifier;
  });
}
function Cf(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Pf(e) {
  if (e) {
    var t = e.getElementById("react-draggable-style-el");
    t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && ds(e.body, "react-draggable-transparent-selection");
  }
}
function Rf(e) {
  if (e)
    try {
      if (e.body && fs(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function ds(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function fs(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var xt = {};
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.canDragX = Af;
xt.canDragY = If;
xt.createCoreData = Mf;
xt.createDraggableData = kf;
xt.getBoundPosition = Df;
xt.getControlPosition = $f;
xt.snapToGrid = Nf;
var Qe = wt, tn = we;
function Df(e, t, n) {
  if (!e.props.bounds)
    return [t, n];
  var r = e.props.bounds;
  r = typeof r == "string" ? r : Lf(r);
  var a = Do(e);
  if (typeof r == "string") {
    var i = a.ownerDocument, c = i.defaultView, s;
    if (r === "parent" ? s = a.parentNode : s = i.querySelector(r), !(s instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    var u = s, f = c.getComputedStyle(a), l = c.getComputedStyle(u);
    r = {
      left: -a.offsetLeft + (0, Qe.int)(l.paddingLeft) + (0, Qe.int)(f.marginLeft),
      top: -a.offsetTop + (0, Qe.int)(l.paddingTop) + (0, Qe.int)(f.marginTop),
      right: (0, tn.innerWidth)(u) - (0, tn.outerWidth)(a) - a.offsetLeft + (0, Qe.int)(l.paddingRight) - (0, Qe.int)(f.marginRight),
      bottom: (0, tn.innerHeight)(u) - (0, tn.outerHeight)(a) - a.offsetTop + (0, Qe.int)(l.paddingBottom) - (0, Qe.int)(f.marginBottom)
    };
  }
  return (0, Qe.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Qe.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Qe.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Qe.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Nf(e, t, n) {
  var r = Math.round(t / e[0]) * e[0], a = Math.round(n / e[1]) * e[1];
  return [r, a];
}
function Af(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function If(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function $f(e, t, n) {
  var r = typeof t == "number" ? (0, tn.getTouch)(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  var a = Do(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, tn.offsetXYFromParent)(r || e, i, n.props.scale);
}
function Mf(e, t, n) {
  var r = e.state, a = !(0, Qe.isNum)(r.lastX), i = Do(e);
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
function kf(e, t) {
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
function Lf(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Do(e) {
  var t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var _r = {}, wr = {};
Object.defineProperty(wr, "__esModule", {
  value: !0
});
wr.default = jf;
function jf() {
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
var Ur = Bf(ke), Ke = No(o), Ff = No(Ma), $e = we, Rt = xt, Hr = wt, wn = No(wr);
function No(e) {
  return e && e.__esModule ? e : { default: e };
}
function ps(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ps = function(a) {
    return a ? n : t;
  })(e);
}
function Bf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || lr(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = ps(t);
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
  return zf(e) || Yf(e, t) || Vf(e, t) || qf();
}
function qf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Da(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Da(e, t);
  }
}
function Da(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Yf(e, t) {
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
function zf(e) {
  if (Array.isArray(e))
    return e;
}
function Wf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Na(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Uf(e, t, n) {
  return t && Na(e.prototype, t), n && Na(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Hf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && lo(e, t);
}
function lo(e, t) {
  return lo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, lo(e, t);
}
function Gf(e) {
  var t = Xf();
  return function() {
    var r = cr(e), a;
    if (t) {
      var i = cr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Zf(this, a);
  };
}
function Zf(e, t) {
  if (t && (lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Me(e);
}
function Me(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xf() {
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
  Hf(n, e);
  var t = Gf(n);
  function n() {
    var r;
    Wf(this, n);
    for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++)
      i[c] = arguments[c];
    return r = t.call.apply(t, [this].concat(i)), at(Me(r), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), at(Me(r), "mounted", !1), at(Me(r), "handleDragStart", function(s) {
      if (r.props.onMouseDown(s), !r.props.allowAnyClick && typeof s.button == "number" && s.button !== 0)
        return !1;
      var u = r.findDOMNode();
      if (!u || !u.ownerDocument || !u.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var f = u.ownerDocument;
      if (!(r.props.disabled || !(s.target instanceof f.defaultView.Node) || r.props.handle && !(0, $e.matchesSelectorAndParentsTo)(s.target, r.props.handle, u) || r.props.cancel && (0, $e.matchesSelectorAndParentsTo)(s.target, r.props.cancel, u))) {
        s.type === "touchstart" && s.preventDefault();
        var l = (0, $e.getTouchIdentifier)(s);
        r.setState({
          touchIdentifier: l
        });
        var d = (0, Rt.getControlPosition)(s, l, Me(r));
        if (d != null) {
          var v = d.x, h = d.y, m = (0, Rt.createCoreData)(Me(r), v, h);
          (0, wn.default)("DraggableCore: handleDragStart: %j", m), (0, wn.default)("calling", r.props.onStart);
          var b = r.props.onStart(s, m);
          b === !1 || r.mounted === !1 || (r.props.enableUserSelectHack && (0, $e.addUserSelectStyles)(f), r.setState({
            dragging: !0,
            lastX: v,
            lastY: h
          }), (0, $e.addEvent)(f, Dt.move, r.handleDrag), (0, $e.addEvent)(f, Dt.stop, r.handleDragStop));
        }
      }
    }), at(Me(r), "handleDrag", function(s) {
      var u = (0, Rt.getControlPosition)(s, r.state.touchIdentifier, Me(r));
      if (u != null) {
        var f = u.x, l = u.y;
        if (Array.isArray(r.props.grid)) {
          var d = f - r.state.lastX, v = l - r.state.lastY, h = (0, Rt.snapToGrid)(r.props.grid, d, v), m = Ra(h, 2);
          if (d = m[0], v = m[1], !d && !v)
            return;
          f = r.state.lastX + d, l = r.state.lastY + v;
        }
        var b = (0, Rt.createCoreData)(Me(r), f, l);
        (0, wn.default)("DraggableCore: handleDrag: %j", b);
        var y = r.props.onDrag(s, b);
        if (y === !1 || r.mounted === !1) {
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
    }), at(Me(r), "handleDragStop", function(s) {
      if (r.state.dragging) {
        var u = (0, Rt.getControlPosition)(s, r.state.touchIdentifier, Me(r));
        if (u != null) {
          var f = u.x, l = u.y;
          if (Array.isArray(r.props.grid)) {
            var d = f - r.state.lastX || 0, v = l - r.state.lastY || 0, h = (0, Rt.snapToGrid)(r.props.grid, d, v), m = Ra(h, 2);
            d = m[0], v = m[1], f = r.state.lastX + d, l = r.state.lastY + v;
          }
          var b = (0, Rt.createCoreData)(Me(r), f, l), y = r.props.onStop(s, b);
          if (y === !1 || r.mounted === !1)
            return !1;
          var w = r.findDOMNode();
          w && r.props.enableUserSelectHack && (0, $e.removeUserSelectStyles)(w.ownerDocument), (0, wn.default)("DraggableCore: handleDragStop: %j", b), r.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), w && ((0, wn.default)("DraggableCore: Removing handlers"), (0, $e.removeEvent)(w.ownerDocument, Dt.move, r.handleDrag), (0, $e.removeEvent)(w.ownerDocument, Dt.stop, r.handleDragStop));
        }
      }
    }), at(Me(r), "onMouseDown", function(s) {
      return Dt = vt.mouse, r.handleDragStart(s);
    }), at(Me(r), "onMouseUp", function(s) {
      return Dt = vt.mouse, r.handleDragStop(s);
    }), at(Me(r), "onTouchStart", function(s) {
      return Dt = vt.touch, r.handleDragStart(s);
    }), at(Me(r), "onTouchEnd", function(s) {
      return Dt = vt.touch, r.handleDragStop(s);
    }), r;
  }
  return Uf(n, [{
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
      return (a = this.props) !== null && a !== void 0 && a.nodeRef ? (i = this.props) === null || i === void 0 || (c = i.nodeRef) === null || c === void 0 ? void 0 : c.current : Ff.default.findDOMNode(this);
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
  function t(_) {
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
      return typeof T;
    } : function(T) {
      return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
    }, t(_);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return f.default;
    }
  }), e.default = void 0;
  var n = m(ke), r = v(o), a = v(Ma), i = v(af), c = we, s = xt, u = wt, f = v(_r), l = v(wr), d = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function v(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function h(_) {
    if (typeof WeakMap != "function")
      return null;
    var T = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap();
    return (h = function(S) {
      return S ? E : T;
    })(_);
  }
  function m(_, T) {
    if (!T && _ && _.__esModule)
      return _;
    if (_ === null || t(_) !== "object" && typeof _ != "function")
      return { default: _ };
    var E = h(T);
    if (E && E.has(_))
      return E.get(_);
    var P = {}, S = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var $ in _)
      if ($ !== "default" && Object.prototype.hasOwnProperty.call(_, $)) {
        var q = S ? Object.getOwnPropertyDescriptor(_, $) : null;
        q && (q.get || q.set) ? Object.defineProperty(P, $, q) : P[$] = _[$];
      }
    return P.default = _, E && E.set(_, P), P;
  }
  function b() {
    return b = Object.assign || function(_) {
      for (var T = 1; T < arguments.length; T++) {
        var E = arguments[T];
        for (var P in E)
          Object.prototype.hasOwnProperty.call(E, P) && (_[P] = E[P]);
      }
      return _;
    }, b.apply(this, arguments);
  }
  function y(_, T) {
    if (_ == null)
      return {};
    var E = w(_, T), P, S;
    if (Object.getOwnPropertySymbols) {
      var $ = Object.getOwnPropertySymbols(_);
      for (S = 0; S < $.length; S++)
        P = $[S], !(T.indexOf(P) >= 0) && Object.prototype.propertyIsEnumerable.call(_, P) && (E[P] = _[P]);
    }
    return E;
  }
  function w(_, T) {
    if (_ == null)
      return {};
    var E = {}, P = Object.keys(_), S, $;
    for ($ = 0; $ < P.length; $++)
      S = P[$], !(T.indexOf(S) >= 0) && (E[S] = _[S]);
    return E;
  }
  function N(_, T) {
    var E = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(_);
      T && (P = P.filter(function(S) {
        return Object.getOwnPropertyDescriptor(_, S).enumerable;
      })), E.push.apply(E, P);
    }
    return E;
  }
  function D(_) {
    for (var T = 1; T < arguments.length; T++) {
      var E = arguments[T] != null ? arguments[T] : {};
      T % 2 ? N(Object(E), !0).forEach(function(P) {
        C(_, P, E[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(E)) : N(Object(E)).forEach(function(P) {
        Object.defineProperty(_, P, Object.getOwnPropertyDescriptor(E, P));
      });
    }
    return _;
  }
  function I(_, T) {
    return W(_) || A(_, T) || B(_, T) || x();
  }
  function x() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function B(_, T) {
    if (_) {
      if (typeof _ == "string")
        return O(_, T);
      var E = Object.prototype.toString.call(_).slice(8, -1);
      if (E === "Object" && _.constructor && (E = _.constructor.name), E === "Map" || E === "Set")
        return Array.from(_);
      if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))
        return O(_, T);
    }
  }
  function O(_, T) {
    (T == null || T > _.length) && (T = _.length);
    for (var E = 0, P = new Array(T); E < T; E++)
      P[E] = _[E];
    return P;
  }
  function A(_, T) {
    var E = _ == null ? null : typeof Symbol < "u" && _[Symbol.iterator] || _["@@iterator"];
    if (E != null) {
      var P = [], S = !0, $ = !1, q, H;
      try {
        for (E = E.call(_); !(S = (q = E.next()).done) && (P.push(q.value), !(T && P.length === T)); S = !0)
          ;
      } catch (Y) {
        $ = !0, H = Y;
      } finally {
        try {
          !S && E.return != null && E.return();
        } finally {
          if ($)
            throw H;
        }
      }
      return P;
    }
  }
  function W(_) {
    if (Array.isArray(_))
      return _;
  }
  function V(_, T) {
    if (!(_ instanceof T))
      throw new TypeError("Cannot call a class as a function");
  }
  function k(_, T) {
    for (var E = 0; E < T.length; E++) {
      var P = T[E];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(_, P.key, P);
    }
  }
  function Z(_, T, E) {
    return T && k(_.prototype, T), E && k(_, E), Object.defineProperty(_, "prototype", { writable: !1 }), _;
  }
  function U(_, T) {
    if (typeof T != "function" && T !== null)
      throw new TypeError("Super expression must either be null or a function");
    _.prototype = Object.create(T && T.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), Object.defineProperty(_, "prototype", { writable: !1 }), T && K(_, T);
  }
  function K(_, T) {
    return K = Object.setPrototypeOf || function(P, S) {
      return P.__proto__ = S, P;
    }, K(_, T);
  }
  function oe(_) {
    var T = ce();
    return function() {
      var P = ae(_), S;
      if (T) {
        var $ = ae(this).constructor;
        S = Reflect.construct(P, arguments, $);
      } else
        S = P.apply(this, arguments);
      return Q(this, S);
    };
  }
  function Q(_, T) {
    if (T && (t(T) === "object" || typeof T == "function"))
      return T;
    if (T !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return G(_);
  }
  function G(_) {
    if (_ === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _;
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
  function ae(_) {
    return ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(E) {
      return E.__proto__ || Object.getPrototypeOf(E);
    }, ae(_);
  }
  function C(_, T, E) {
    return T in _ ? Object.defineProperty(_, T, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : _[T] = E, _;
  }
  var j = /* @__PURE__ */ function(_) {
    U(E, _);
    var T = oe(E);
    function E(P) {
      var S;
      return V(this, E), S = T.call(this, P), C(G(S), "onDragStart", function($, q) {
        (0, l.default)("Draggable: onDragStart: %j", q);
        var H = S.props.onStart($, (0, s.createDraggableData)(G(S), q));
        if (H === !1)
          return !1;
        S.setState({
          dragging: !0,
          dragged: !0
        });
      }), C(G(S), "onDrag", function($, q) {
        if (!S.state.dragging)
          return !1;
        (0, l.default)("Draggable: onDrag: %j", q);
        var H = (0, s.createDraggableData)(G(S), q), Y = {
          x: H.x,
          y: H.y
        };
        if (S.props.bounds) {
          var F = Y.x, R = Y.y;
          Y.x += S.state.slackX, Y.y += S.state.slackY;
          var te = (0, s.getBoundPosition)(G(S), Y.x, Y.y), de = I(te, 2), ye = de[0], xe = de[1];
          Y.x = ye, Y.y = xe, Y.slackX = S.state.slackX + (F - Y.x), Y.slackY = S.state.slackY + (R - Y.y), H.x = Y.x, H.y = Y.y, H.deltaX = Y.x - S.state.x, H.deltaY = Y.y - S.state.y;
        }
        var je = S.props.onDrag($, H);
        if (je === !1)
          return !1;
        S.setState(Y);
      }), C(G(S), "onDragStop", function($, q) {
        if (!S.state.dragging)
          return !1;
        var H = S.props.onStop($, (0, s.createDraggableData)(G(S), q));
        if (H === !1)
          return !1;
        (0, l.default)("Draggable: onDragStop: %j", q);
        var Y = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, F = !!S.props.position;
        if (F) {
          var R = S.props.position, te = R.x, de = R.y;
          Y.x = te, Y.y = de;
        }
        S.setState(Y);
      }), S.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: P.position ? P.position.x : P.defaultPosition.x,
        y: P.position ? P.position.y : P.defaultPosition.y,
        prevPropsPosition: D({}, P.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, P.position && !(P.onDrag || P.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), S;
    }
    return Z(E, [{
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
        var S, $, q;
        return (S = ($ = this.props) === null || $ === void 0 || (q = $.nodeRef) === null || q === void 0 ? void 0 : q.current) !== null && S !== void 0 ? S : a.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var S, $ = this.props;
        $.axis, $.bounds;
        var q = $.children, H = $.defaultPosition, Y = $.defaultClassName, F = $.defaultClassNameDragging, R = $.defaultClassNameDragged, te = $.position, de = $.positionOffset;
        $.scale;
        var ye = y($, d), xe = {}, je = null, dt = !!te, Ze = !dt || this.state.dragging, Te = te || H, qe = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && Ze ? this.state.x : Te.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && Ze ? this.state.y : Te.y
        };
        this.state.isElementSVG ? je = (0, c.createSVGTransform)(qe, de) : xe = (0, c.createCSSTransform)(qe, de);
        var Xe = (0, i.default)(q.props.className || "", Y, (S = {}, C(S, F, this.state.dragging), C(S, R, this.state.dragged), S));
        return /* @__PURE__ */ n.createElement(f.default, b({}, ye, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ n.cloneElement(n.Children.only(q), {
          className: Xe,
          style: D(D({}, q.props.style), xe),
          transform: je
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(S, $) {
          var q = S.position, H = $.prevPropsPosition;
          return q && (!H || q.x !== H.x || q.y !== H.y) ? ((0, l.default)("Draggable: getDerivedStateFromProps %j", {
            position: q,
            prevPropsPosition: H
          }), {
            x: q.x,
            y: q.y,
            prevPropsPosition: D({}, q)
          }) : null;
        }
      )
    }]), E;
  }(n.Component);
  e.default = j, C(j, "displayName", "Draggable"), C(j, "propTypes", D(D({}, f.default.propTypes), {}, {
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
  })), C(j, "defaultProps", D(D({}, f.default.defaultProps), {}, {
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
})(rs);
var vs = rs, hs = vs.default, Kf = vs.DraggableCore;
rf.exports = hs;
kn.default = hs;
kn.DraggableCore = Kf;
const Qf = (e, t, n) => {
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
        const { slides: m } = h[0], { modals: b } = m[d < 0 ? 0 : d], w = (b || []).filter((N) => N.id === v)[0];
        a(w || i);
      } else
        a(i);
    } else
      a(i);
  }, f = () => {
    const l = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (l) {
      const d = [...l].findIndex((y) => !y.hasAttribute("hidden"));
      s(n, d < 0 ? 0 : d);
      const v = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (v.length > 0) {
        const y = [...v].findIndex((w) => !w.hasAttribute("hidden"));
        s(n, y < 0 ? 0 : y);
      }
      const h = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      h && u(n, d, h.id);
      const m = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      m && u(n, d, m.id);
      const b = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      b && u(n, d, b.id);
    }
  };
  return X(() => {
    if (e) {
      const l = new MutationObserver(f);
      return l.observe(document.querySelector(e || "body"), c), () => l.disconnect();
    }
  }, [f, c]), r;
}, Jf = "_progress_18ffq_85", ep = "_flex_18ffq_95", tp = "_gap_18ffq_152", np = "_secondary_18ffq_189", rp = "_close_18ffq_285", op = "_hide_18ffq_291", ap = "_ico_smart_18ffq_299", he = {
  "c-vid-container": "_c-vid-container_18ffq_1",
  "c-vid": "_c-vid_18ffq_1",
  "c-vid-controls": "_c-vid-controls_18ffq_34",
  "c-vid-controls-text": "_c-vid-controls-text_18ffq_75",
  progress: Jf,
  flex: ep,
  "progress-bar": "_progress-bar_18ffq_101",
  "c-vid-controls-volume": "_c-vid-controls-volume_18ffq_108",
  "c-vid-controls-volume-item": "_c-vid-controls-volume-item_18ffq_129",
  "no-captions": "_no-captions_18ffq_140",
  gap: tp,
  "menu-float": "_menu-float_18ffq_160",
  "menu-float-active": "_menu-float-active_18ffq_173",
  "menu-float-btn": "_menu-float-btn_18ffq_179",
  secondary: np,
  "menu-float-btn-disable": "_menu-float-btn-disable_18ffq_213",
  "menu-float-btndrop": "_menu-float-btndrop_18ffq_223",
  "menu-float-dropdown": "_menu-float-dropdown_18ffq_242",
  "menu-float-dropdown-content": "_menu-float-dropdown-content_18ffq_250",
  close: rp,
  hide: op,
  "image-Video": "_image-Video_18ffq_295",
  ico_smart: ap
}, gs = ({ width: e, addClass: t, image: n, pathVideo: r, pathname: a }) => {
  const [i, c] = ee("00:00"), [s, u] = ee(!1), [f, l] = ee(!1), [d, v] = ee(!1), { video1: h, video2: m } = Qf("body", r, a), [b, y] = ee({
    state: !1,
    icon: Gr,
    label: "Reproducir video"
  }), [w, N] = ee({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  }), { deltaPosition: D } = w;
  function I() {
    const Q = s ? Z.current : U.current;
    b.state ? (Q.pause(), y({
      state: !1,
      icon: Gr,
      label: "Reproducir video"
    })) : (Q.play(), y({
      state: !0,
      icon: cp,
      label: "Pausar video"
    }));
  }
  function x() {
    const Q = s ? Z.current : U.current, G = oe.current, ce = Q.currentTime / Q.duration * 100;
    G.style.flexBasis = `${ce}%`;
  }
  function B() {
    const Q = s ? Z.current : U.current;
    G(Q);
    function G(j) {
      const _ = ce(j.currentTime);
      c(_);
    }
    function ce(j) {
      const _ = parseInt(j, 10), T = Math.floor(_ / 3600), E = Math.floor((_ - T * 3600) / 60), P = _ - T * 3600 - E * 60, S = C(ae(T)), $ = C(ae(E)), q = C(ae(P));
      return `${S}:${$}:${q}`;
    }
    function ae(j) {
      return j < 10 ? j = "0" + j : j;
    }
    function C(j) {
      return isNaN(j) ? "00" : j;
    }
  }
  function O(Q) {
    const G = K.current, ce = s ? Z.current : U.current, C = Q.nativeEvent.offsetX / G.offsetWidth * ce.duration;
    ce.currentTime = C;
  }
  const A = (Q, G) => {
    u(!1), l(!1), G(Q), W();
  }, W = () => {
    const Q = oe.current;
    Q.style.flexBasis = "0%", y({
      state: !1,
      icon: Gr,
      label: "Reproducir video"
    });
  }, V = (Q, G) => {
    const { x: ce, y: ae } = w.deltaPosition;
    N({
      ...w,
      deltaPosition: {
        x: ce + G.deltaX,
        y: ae + G.deltaY
      }
    });
  };
  X(() => {
    W();
  }, [h, m]);
  const k = J(null), Z = J(), U = J(), K = J(), oe = J();
  return /* @__PURE__ */ p(kn, { nodeRef: k, handle: "strong", position: D, onDrag: V, children: /* @__PURE__ */ L(
    "div",
    {
      ref: k,
      className: `${he["menu-float"]} ${(s || f) && he["menu-float-active"]} ${he["menu-float-box"]} ${he.box} ${he["no-cursor"]}`,
      children: [
        /* @__PURE__ */ L("div", { className: he["menu-float-dropdown"], children: [
          (!s && !f || !!h && !s && !f || !!m && (s || f) || !!m && (s || f) && !s) && /* @__PURE__ */ L(
            "button",
            {
              onClick: () => {
                d || (A(!0, u), v(!0));
              },
              className: `${he["menu-float-btn"]} ${he["menu-float-btndrop"]} ${!s && !f && he["menu-float-btn-disable"]}`,
              "aria-label": "Intérprete de lenguaje de señas",
              children: [
                !s && !f && (n ? /* @__PURE__ */ p("img", { className: he["image-Video"], src: n }) : /* @__PURE__ */ L(
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
                /* @__PURE__ */ p(ip, {}),
                (s || f) && (s ? "1" : "2")
              ]
            }
          ),
          (s || f) && /* @__PURE__ */ L(bt, { children: [
            /* @__PURE__ */ L(
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
            /* @__PURE__ */ L(
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
                children: /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(lp, {}) })
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
                children: /* @__PURE__ */ p(sp, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p("div", { className: `${he["c-vid-container"]} ${t}`, display: s || f ? "true" : "false", children: /* @__PURE__ */ L("div", { className: `${he["c-vid"]} ${t}`, style: { maxWidth: `${e}px` }, children: [
          s && /* @__PURE__ */ p(
            "video",
            {
              src: h,
              ref: Z,
              onTimeUpdate: () => {
                x(), B();
              },
              className: `${he["no-captions"]}`
            }
          ),
          f && /* @__PURE__ */ p(
            "video",
            {
              src: m,
              ref: U,
              onTimeUpdate: () => {
                x(), B();
              },
              className: `${he["no-captions"]}`
            }
          ),
          /* @__PURE__ */ L("div", { className: he["c-vid-controls"], children: [
            /* @__PURE__ */ p("button", { "aria-label": b.label, onClick: I, children: b.icon }),
            /* @__PURE__ */ p("div", { className: he.flex, children: /* @__PURE__ */ L(
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
            /* @__PURE__ */ p("div", { className: he["progress-content"], children: /* @__PURE__ */ p("div", { ref: K, className: he.progress, onClick: O, children: /* @__PURE__ */ p("div", { ref: oe, className: he["progress-bar"], onChange: x }) }) })
          ] })
        ] }) })
      ]
    }
  ) });
};
gs.propTypes = {
  width: o.string,
  addClass: o.string,
  image: o.string,
  pathVideo: o.array,
  pathname: o.string
};
gs.defaultProps = {
  width: "210"
};
const ip = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", viewBox: "0 96 960 960", width: "48", children: /* @__PURE__ */ p("path", { d: "M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" }) }), sp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "close",
    d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
  }
) }), lp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "open_with",
    d: "m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z"
  }
) }), Aa = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 96 960 960", "aria-hidden": "true", children: /* @__PURE__ */ p("path", { d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z" }) }), Gr = /* @__PURE__ */ L(
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
), cp = /* @__PURE__ */ L(
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
), Ao = ut(), ms = ({ children: e, isVisible: t }) => {
  const [n, r] = ee(!1), a = J(), i = () => r(!n), c = (s) => {
    a.current || (a.current = s);
  };
  return X(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p(Ao.Provider, { value: { isOpen: n, onOpen: i, setRefButton: c, refButton: a }, children: e });
};
ms.defaultProps = {
  isVisible: !1
};
ms.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const up = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r } = Ee(Ao);
  if (Re.count(e) > 1)
    return null;
  const a = (c) => {
    n(), t && t(c);
  }, i = (c) => ct(c) ? Pe(c, {
    ...c.props,
    ref: r,
    onClick: a
  }) : null;
  return Re.map(e, i);
};
up.propTypes = {
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
}, Xr = Object.freeze({
  ESC: 27,
  TAB: 9
}), bs = ({
  id: e,
  children: t,
  addClass: n,
  hasArrow: r,
  isDisabled: a,
  distance: i,
  placement: c,
  defaultStyle: s
}) => {
  const { isOpen: u, refButton: f } = Ee(Ao), l = J(), d = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', v = (b) => {
    const y = l.current.querySelectorAll(d), w = f.current, N = y[0], D = y[y.length - 1];
    if ((b.keyCode || b.which) === Xr.TAB && document.activeElement === D)
      return w.focus(), b.preventDefault();
    b.shiftKey && (b.keyCode || b.which) === Xr.TAB && document.activeElement === N && (w.focus(), b.preventDefault()), (b.keyCode || b.which) === Xr.ESC && w.focus();
  }, { styles: h, attributes: m } = yr(
    f.current,
    l.current,
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
        { name: "eventListeners", enabled: u }
      ]
    }
  );
  return X(() => {
    u && l.current.focus();
  }, [u]), a ? /* @__PURE__ */ p(bt, { children: t }) : /* @__PURE__ */ p(fn, { id: "js-popover-modal-portal", children: /* @__PURE__ */ L(
    "div",
    {
      id: e,
      ref: l,
      role: "status",
      tabIndex: -1,
      className: ne({
        [Zr["c-popover-modal"]]: !s,
        [Zr["c-popover-modal--active"]]: !s && u,
        ["video-interpreter-ui-popover"]: "video-interpreter-ui-popover",
        [n]: n
      }),
      style: h.popper,
      onKeyDown: v,
      "data-hidden": !u,
      ...!u && { hidden: !0 },
      ...m.popper,
      children: [
        t,
        r && /* @__PURE__ */ p(
          "div",
          {
            className: ne({
              [Zr["c-popover-modal__arrow"]]: !s
            }),
            "data-class": "c-popover-modal__arrow",
            "data-popper-arrow": !0,
            style: h.arrow
          }
        )
      ]
    }
  ) });
};
bs.propTypes = {
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
bs.defaultProps = {
  hasArrow: !1,
  placement: "auto"
};
const dp = (e, t) => {
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
}, fp = (e, t, n) => {
  const [r, a] = ee(n), i = e.map((s) => window.matchMedia(s)), c = () => {
    const s = i.findIndex((u) => u.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return X(() => {
    a(c);
    const s = (u) => a(c);
    return i.forEach((u) => u.addEventListener("change", s)), () => {
      i.forEach((u) => u.removeEventListener("change", s));
    };
  }, []), r;
}, mp = () => {
  const [e, t] = dp("dark-mode-enabled"), n = fp(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return X(() => {
    t(n);
  }, [n]), X(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, pp = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), bp = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || pp, [a, i] = ee(!1), [c, s] = ee(null);
  return X(() => {
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
}, ys = (e) => {
  let t = {};
  for (const n in e)
    if (typeof e[n] == "object") {
      const r = ys(e[n]);
      for (const a in r)
        t = {
          ...t,
          [n.includes("accents") || n.includes("palette") ? a : `${n}-${a}`]: r[a]
        };
    } else
      t[n] = e[n];
  return t;
}, yp = (e) => ys(e);
export {
  ks as Accordion,
  Fa as AccordionButton,
  Ba as AccordionItem,
  qa as AccordionPanel,
  Va as Audio,
  Wt as Button,
  Eu as ButtonSection,
  Ua as CheckBox,
  Dl as CheckBoxGroup,
  Il as Col,
  Ml as Content,
  pi as DragAndDrop,
  fi as DragAndDropContext,
  vi as Draggable,
  hi as Droppable,
  gp as Filter,
  gi as GeneralDraggable,
  Ce as Icon,
  mi as Image,
  bi as Input,
  du as InputGroup,
  _i as InputLeftAddon,
  wi as InputRightAddon,
  yi as InputStyle,
  gs as Interpreter,
  pu as Kbd,
  xi as Link,
  vu as List,
  Oi as ListItem,
  Ei as Modal,
  bu as ModalCloseButton,
  Si as ModalContent,
  vr as ModalContext,
  Ci as ModalOverlay,
  Mi as NavSection,
  Ni as NumberDecrementStepper,
  Ai as NumberIncrementStepper,
  Pi as NumberInput,
  hr as NumberInputContext,
  Ri as NumberInputField,
  Di as NumberInputStepper,
  hu as OrderedList,
  Ii as Pagination,
  _o as PaginationItem,
  xu as Panel,
  gr as PanelContext,
  Cu as Paper,
  ms as PopoverModal,
  up as PopoverModalButton,
  bs as PopoverModalContent,
  Ao as PopoverModalContext,
  fn as Portal,
  Iu as Row,
  $i as Section,
  ki as Select,
  $u as SelectGroup,
  Li as Switch,
  ji as Tab,
  Fi as TabList,
  Bi as TabPanel,
  qi as TabPanels,
  Mu as Tabs,
  wo as TabsContext,
  Vi as TextArea,
  ku as ThemeProvider,
  Qi as Toggletip,
  Ji as Tooltip,
  es as Tour,
  Po as TourContext,
  ts as TourElement,
  ef as TourHelpLayer,
  gu as UnorderedList,
  ns as Video,
  yp as createTheme,
  mp as useDarkMode,
  dp as useLocalStorage,
  fp as useMedia,
  bp as useOnScreen,
  yu as usePagination,
  Du as usePortal
};
