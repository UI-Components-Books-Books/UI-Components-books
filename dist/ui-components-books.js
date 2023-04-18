import * as zt from "react";
import ke, { Children as Re, useState as Z, useEffect as X, isValidElement as ct, cloneElement as Pe, forwardRef as _t, useRef as J, useMemo as _e, useLayoutEffect as $a, useCallback as Le, createContext as ut, memo as Ma, useReducer as uo, useContext as Oe, useId as It, createElement as ws, createRef as Hn } from "react";
import * as xs from "react-dom";
import ka, { unstable_batchedUpdates as hn, createPortal as La } from "react-dom";
var Gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ts(e) {
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
var Mo;
function Os() {
  if (Mo)
    return gn;
  Mo = 1;
  var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, d, f) {
    var l, u = {}, h = null, v = null;
    f !== void 0 && (h = "" + f), d.key !== void 0 && (h = "" + d.key), d.ref !== void 0 && (v = d.ref);
    for (l in d)
      r.call(d, l) && !i.hasOwnProperty(l) && (u[l] = d[l]);
    if (s && s.defaultProps)
      for (l in d = s.defaultProps, d)
        u[l] === void 0 && (u[l] = d[l]);
    return { $$typeof: t, type: s, key: h, ref: v, props: u, _owner: a.current };
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
var ko;
function Ss() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function y(g) {
      if (g === null || typeof g != "object")
        return null;
      var k = m && g[m] || g[b];
      return typeof k == "function" ? k : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(g) {
      {
        for (var k = arguments.length, z = new Array(k > 1 ? k - 1 : 0), ne = 1; ne < k; ne++)
          z[ne - 1] = arguments[ne];
        D("error", g, z);
      }
    }
    function D(g, k, z) {
      {
        var ne = T.ReactDebugCurrentFrame, ce = ne.getStackAddendum();
        ce !== "" && (k += "%s", z = z.concat([ce]));
        var ve = z.map(function(ie) {
          return String(ie);
        });
        ve.unshift("Warning: " + k), Function.prototype.apply.call(console[g], console, ve);
      }
    }
    var $ = !1, w = !1, I = !1, x = !1, N = !1, F;
    F = Symbol.for("react.module.reference");
    function W(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || N || g === a || g === f || g === l || x || g === v || $ || w || I || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === u || g.$$typeof === c || g.$$typeof === s || g.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === F || g.getModuleId !== void 0));
    }
    function Y(g, k, z) {
      var ne = g.displayName;
      if (ne)
        return ne;
      var ce = k.displayName || k.name || "";
      return ce !== "" ? z + "(" + ce + ")" : z;
    }
    function re(g) {
      return g.displayName || "Context";
    }
    function G(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
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
            return re(k) + ".Consumer";
          case c:
            var z = g;
            return re(z._context) + ".Provider";
          case d:
            return Y(g, g.render, "ForwardRef");
          case u:
            var ne = g.displayName || null;
            return ne !== null ? ne : G(g.type) || "Memo";
          case h: {
            var ce = g, ve = ce._payload, ie = ce._init;
            try {
              return G(ie(ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, Q = 0, te, H, pe, le, O, B, _;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function S() {
      {
        if (Q === 0) {
          te = console.log, H = console.info, pe = console.warn, le = console.error, O = console.group, B = console.groupCollapsed, _ = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: E,
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
        Q++;
      }
    }
    function P() {
      {
        if (Q--, Q === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, g, {
              value: te
            }),
            info: oe({}, g, {
              value: H
            }),
            warn: oe({}, g, {
              value: pe
            }),
            error: oe({}, g, {
              value: le
            }),
            group: oe({}, g, {
              value: O
            }),
            groupCollapsed: oe({}, g, {
              value: B
            }),
            groupEnd: oe({}, g, {
              value: _
            })
          });
        }
        Q < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = T.ReactCurrentDispatcher, M;
    function q(g, k, z) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (ce) {
            var ne = ce.stack.trim().match(/\n( *(at )?)/);
            M = ne && ne[1] || "";
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
    function R(g, k) {
      if (!g || U)
        return "";
      {
        var z = V.get(g);
        if (z !== void 0)
          return z;
      }
      var ne;
      U = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ve;
      ve = C.current, C.current = null, S();
      try {
        if (k) {
          var ie = function() {
            throw Error();
          };
          if (Object.defineProperty(ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ie, []);
            } catch (Et) {
              ne = Et;
            }
            Reflect.construct(g, [], ie);
          } else {
            try {
              ie.call();
            } catch (Et) {
              ne = Et;
            }
            g.call(ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            ne = Et;
          }
          g();
        }
      } catch (Et) {
        if (Et && ne && typeof Et.stack == "string") {
          for (var ae = Et.stack.split(`
`), Be = ne.stack.split(`
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
        U = !1, C.current = ve, P(), Error.prepareStackTrace = ce;
      }
      var Xt = g ? g.displayName || g.name : "", $o = Xt ? q(Xt) : "";
      return typeof g == "function" && V.set(g, $o), $o;
    }
    function K(g, k, z) {
      return R(g, !1);
    }
    function ue(g) {
      var k = g.prototype;
      return !!(k && k.isReactComponent);
    }
    function ye(g, k, z) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return R(g, ue(g));
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
            return K(g.render);
          case u:
            return ye(g.type, k, z);
          case h: {
            var ne = g, ce = ne._payload, ve = ne._init;
            try {
              return ye(ve(ce), k, z);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, je = {}, dt = T.ReactDebugCurrentFrame;
    function Ze(g) {
      if (g) {
        var k = g._owner, z = ye(g.type, g._source, k ? k.type : null);
        dt.setExtraStackFrame(z);
      } else
        dt.setExtraStackFrame(null);
    }
    function Te(g, k, z, ne, ce) {
      {
        var ve = Function.call.bind(xe);
        for (var ie in g)
          if (ve(g, ie)) {
            var ae = void 0;
            try {
              if (typeof g[ie] != "function") {
                var Be = Error((ne || "React class") + ": " + z + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              ae = g[ie](k, ie, ne, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              ae = Ee;
            }
            ae && !(ae instanceof Error) && (Ze(ce), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", z, ie, typeof ae), Ze(null)), ae instanceof Error && !(ae.message in je) && (je[ae.message] = !0, Ze(ce), A("Failed %s type: %s", z, ae.message), Ze(null));
          }
      }
    }
    var qe = Array.isArray;
    function Xe(g) {
      return qe(g);
    }
    function Mt(g) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, z = k && g[Symbol.toStringTag] || g.constructor.name || "Object";
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
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mt(g)), kt(g);
    }
    var Fe = T.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ct, pn, nt;
    nt = {};
    function Vn(g) {
      if (xe.call(g, "ref")) {
        var k = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Er(g) {
      if (xe.call(g, "key")) {
        var k = Object.getOwnPropertyDescriptor(g, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Or(g, k) {
      if (typeof g.ref == "string" && Fe.current && k && Fe.current.stateNode !== k) {
        var z = G(Fe.current.type);
        nt[z] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Fe.current.type), g.ref), nt[z] = !0);
      }
    }
    function Yn(g, k) {
      {
        var z = function() {
          Ct || (Ct = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function Sr(g, k) {
      {
        var z = function() {
          pn || (pn = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var zn = function(g, k, z, ne, ce, ve, ie) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: k,
        ref: z,
        props: ie,
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
        value: ne
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function Cr(g, k, z, ne, ce) {
      {
        var ve, ie = {}, ae = null, Be = null;
        z !== void 0 && (Lt(z), ae = "" + z), Er(k) && (Lt(k.key), ae = "" + k.key), Vn(k) && (Be = k.ref, Or(k, ce));
        for (ve in k)
          xe.call(k, ve) && !ft.hasOwnProperty(ve) && (ie[ve] = k[ve]);
        if (g && g.defaultProps) {
          var Ee = g.defaultProps;
          for (ve in Ee)
            ie[ve] === void 0 && (ie[ve] = Ee[ve]);
        }
        if (ae || Be) {
          var Se = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ae && Yn(ie, Se), Be && Sr(ie, Se);
        }
        return zn(g, ae, Be, ce, ne, Fe.current, ie);
      }
    }
    var vn = T.ReactCurrentOwner, Wn = T.ReactDebugCurrentFrame;
    function be(g) {
      if (g) {
        var k = g._owner, z = ye(g.type, g._source, k ? k.type : null);
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
          var g = G(vn.current.type);
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
          var k = g.fileName.replace(/^.*[\\\/]/, ""), z = g.lineNumber;
          return `

Check your code at ` + k + ":" + z + ".";
        }
        return "";
      }
    }
    var Ye = {};
    function rt(g) {
      {
        var k = pt();
        if (!k) {
          var z = typeof g == "string" ? g : g.displayName || g.name;
          z && (k = `

Check the top-level render call using <` + z + ">.");
        }
        return k;
      }
    }
    function Tt(g, k) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var z = rt(k);
        if (Ye[z])
          return;
        Ye[z] = !0;
        var ne = "";
        g && g._owner && g._owner !== vn.current && (ne = " It was passed a child from " + G(g._owner.type) + "."), be(g), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, ne), be(null);
      }
    }
    function ze(g, k) {
      {
        if (typeof g != "object")
          return;
        if (Xe(g))
          for (var z = 0; z < g.length; z++) {
            var ne = g[z];
            Ie(ne) && Tt(ne, k);
          }
        else if (Ie(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var ce = y(g);
          if (typeof ce == "function" && ce !== g.entries)
            for (var ve = ce.call(g), ie; !(ie = ve.next()).done; )
              Ie(ie.value) && Tt(ie.value, k);
        }
      }
    }
    function jt(g) {
      {
        var k = g.type;
        if (k == null || typeof k == "string")
          return;
        var z;
        if (typeof k == "function")
          z = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === u))
          z = k.propTypes;
        else
          return;
        if (z) {
          var ne = G(k);
          Te(z, g.props, "prop", ne, g);
        } else if (k.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var ce = G(k);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(g) {
      {
        for (var k = Object.keys(g.props), z = 0; z < k.length; z++) {
          var ne = k[z];
          if (ne !== "children" && ne !== "key") {
            be(g), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), be(null);
            break;
          }
        }
        g.ref !== null && (be(g), A("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    function Bt(g, k, z, ne, ce, ve) {
      {
        var ie = W(g);
        if (!ie) {
          var ae = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = Ve(ce);
          Be ? ae += Be : ae += pt();
          var Ee;
          g === null ? Ee = "null" : Xe(g) ? Ee = "array" : g !== void 0 && g.$$typeof === t ? (Ee = "<" + (G(g.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ae);
        }
        var Se = Cr(g, k, z, ce, ve);
        if (Se == null)
          return Se;
        if (ie) {
          var ot = k.children;
          if (ot !== void 0)
            if (ne)
              if (Xe(ot)) {
                for (var Xt = 0; Xt < ot.length; Xt++)
                  ze(ot[Xt], g);
                Object.freeze && Object.freeze(ot);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(ot, g);
        }
        return g === r ? Ft(Se) : jt(Se), Se;
      }
    }
    function Zt(g, k, z) {
      return Bt(g, k, z, !0);
    }
    function Un(g, k, z) {
      return Bt(g, k, z, !1);
    }
    var qt = Un, Vt = Zt;
    mn.Fragment = r, mn.jsx = qt, mn.jsxs = Vt;
  }()), mn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Os() : e.exports = Ss();
})(Es);
const bt = Rn.Fragment, p = Rn.jsx, L = Rn.jsxs;
var o = {}, Lo = {
  get exports() {
    return o;
  },
  set exports(e) {
    o = e;
  }
}, rr = {}, Cs = {
  get exports() {
    return rr;
  },
  set exports(e) {
    rr = e;
  }
}, de = {};
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
    return de;
  jo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function D(w) {
    if (typeof w == "object" && w !== null) {
      var I = w.$$typeof;
      switch (I) {
        case t:
          switch (w = w.type, w) {
            case d:
            case f:
            case r:
            case i:
            case a:
            case u:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case l:
                case m:
                case v:
                case c:
                  return w;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function $(w) {
    return D(w) === f;
  }
  return de.AsyncMode = d, de.ConcurrentMode = f, de.ContextConsumer = s, de.ContextProvider = c, de.Element = t, de.ForwardRef = l, de.Fragment = r, de.Lazy = m, de.Memo = v, de.Portal = n, de.Profiler = i, de.StrictMode = a, de.Suspense = u, de.isAsyncMode = function(w) {
    return $(w) || D(w) === d;
  }, de.isConcurrentMode = $, de.isContextConsumer = function(w) {
    return D(w) === s;
  }, de.isContextProvider = function(w) {
    return D(w) === c;
  }, de.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, de.isForwardRef = function(w) {
    return D(w) === l;
  }, de.isFragment = function(w) {
    return D(w) === r;
  }, de.isLazy = function(w) {
    return D(w) === m;
  }, de.isMemo = function(w) {
    return D(w) === v;
  }, de.isPortal = function(w) {
    return D(w) === n;
  }, de.isProfiler = function(w) {
    return D(w) === i;
  }, de.isStrictMode = function(w) {
    return D(w) === a;
  }, de.isSuspense = function(w) {
    return D(w) === u;
  }, de.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === f || w === i || w === a || w === u || w === h || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === v || w.$$typeof === c || w.$$typeof === s || w.$$typeof === l || w.$$typeof === y || w.$$typeof === T || w.$$typeof === A || w.$$typeof === b);
  }, de.typeOf = D, de;
}
var fe = {};
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function D(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === f || R === i || R === a || R === u || R === h || typeof R == "object" && R !== null && (R.$$typeof === m || R.$$typeof === v || R.$$typeof === c || R.$$typeof === s || R.$$typeof === l || R.$$typeof === y || R.$$typeof === T || R.$$typeof === A || R.$$typeof === b);
    }
    function $(R) {
      if (typeof R == "object" && R !== null) {
        var K = R.$$typeof;
        switch (K) {
          case t:
            var ue = R.type;
            switch (ue) {
              case d:
              case f:
              case r:
              case i:
              case a:
              case u:
                return ue;
              default:
                var ye = ue && ue.$$typeof;
                switch (ye) {
                  case s:
                  case l:
                  case m:
                  case v:
                  case c:
                    return ye;
                  default:
                    return K;
                }
            }
          case n:
            return K;
        }
      }
    }
    var w = d, I = f, x = s, N = c, F = t, W = l, Y = r, re = m, G = v, oe = n, Q = i, te = a, H = u, pe = !1;
    function le(R) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(R) || $(R) === d;
    }
    function O(R) {
      return $(R) === f;
    }
    function B(R) {
      return $(R) === s;
    }
    function _(R) {
      return $(R) === c;
    }
    function E(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function S(R) {
      return $(R) === l;
    }
    function P(R) {
      return $(R) === r;
    }
    function C(R) {
      return $(R) === m;
    }
    function M(R) {
      return $(R) === v;
    }
    function q(R) {
      return $(R) === n;
    }
    function U(R) {
      return $(R) === i;
    }
    function V(R) {
      return $(R) === a;
    }
    function j(R) {
      return $(R) === u;
    }
    fe.AsyncMode = w, fe.ConcurrentMode = I, fe.ContextConsumer = x, fe.ContextProvider = N, fe.Element = F, fe.ForwardRef = W, fe.Fragment = Y, fe.Lazy = re, fe.Memo = G, fe.Portal = oe, fe.Profiler = Q, fe.StrictMode = te, fe.Suspense = H, fe.isAsyncMode = le, fe.isConcurrentMode = O, fe.isContextConsumer = B, fe.isContextProvider = _, fe.isElement = E, fe.isForwardRef = S, fe.isFragment = P, fe.isLazy = C, fe.isMemo = M, fe.isPortal = q, fe.isProfiler = U, fe.isStrictMode = V, fe.isSuspense = j, fe.isValidElementType = D, fe.typeOf = $;
  }()), fe;
}
var Bo;
function ja() {
  return Bo || (Bo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Ps() : e.exports = Rs();
  }(Cs)), rr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pr, qo;
function Ds() {
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
        for (var h = 0; h < f.length; h++)
          n.call(s, f[h]) && (d[f[h]] = s[f[h]]);
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
function Ns() {
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
              var h = Error(
                (d || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            u = i[l](c, l, d, s, null, t);
          } catch (m) {
            u = m;
          }
          if (u && !(u instanceof Error) && e(
            (d || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = !0;
            var v = f ? f() : "";
            e(
              "Failed " + s + " type: " + u.message + (v ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Nr = a, Nr;
}
var Ar, Wo;
function As() {
  if (Wo)
    return Ar;
  Wo = 1;
  var e = ja(), t = Ds(), n = fo(), r = Fa(), a = Ns(), i = function() {
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
  return Ar = function(s, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function u(O) {
      var B = O && (f && O[f] || O[l]);
      if (typeof B == "function")
        return B;
    }
    var h = "<<anonymous>>", v = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: A(),
      arrayOf: D,
      element: $(),
      elementType: w(),
      instanceOf: I,
      node: W(),
      objectOf: N,
      oneOf: x,
      oneOfType: F,
      shape: re,
      exact: G
    };
    function m(O, B) {
      return O === B ? O !== 0 || 1 / O === 1 / B : O !== O && B !== B;
    }
    function b(O, B) {
      this.message = O, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function y(O) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, _ = 0;
      function E(P, C, M, q, U, V, j) {
        if (q = q || h, V = V || M, j !== n) {
          if (d) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var K = q + ":" + M;
            !B[K] && // Avoid spamming the console because they are often not actionable except for lib authors
            _ < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[K] = !0, _++);
          }
        }
        return C[M] == null ? P ? C[M] === null ? new b("The " + U + " `" + V + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new b("The " + U + " `" + V + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : O(C, M, q, U, V);
      }
      var S = E.bind(null, !1);
      return S.isRequired = E.bind(null, !0), S;
    }
    function T(O) {
      function B(_, E, S, P, C, M) {
        var q = _[E], U = te(q);
        if (U !== O) {
          var V = H(q);
          return new b(
            "Invalid " + P + " `" + C + "` of type " + ("`" + V + "` supplied to `" + S + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return y(B);
    }
    function A() {
      return y(c);
    }
    function D(O) {
      function B(_, E, S, P, C) {
        if (typeof O != "function")
          return new b("Property `" + C + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var M = _[E];
        if (!Array.isArray(M)) {
          var q = te(M);
          return new b("Invalid " + P + " `" + C + "` of type " + ("`" + q + "` supplied to `" + S + "`, expected an array."));
        }
        for (var U = 0; U < M.length; U++) {
          var V = O(M, U, S, P, C + "[" + U + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return y(B);
    }
    function $() {
      function O(B, _, E, S, P) {
        var C = B[_];
        if (!s(C)) {
          var M = te(C);
          return new b("Invalid " + S + " `" + P + "` of type " + ("`" + M + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(O);
    }
    function w() {
      function O(B, _, E, S, P) {
        var C = B[_];
        if (!e.isValidElementType(C)) {
          var M = te(C);
          return new b("Invalid " + S + " `" + P + "` of type " + ("`" + M + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(O);
    }
    function I(O) {
      function B(_, E, S, P, C) {
        if (!(_[E] instanceof O)) {
          var M = O.name || h, q = le(_[E]);
          return new b("Invalid " + P + " `" + C + "` of type " + ("`" + q + "` supplied to `" + S + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return y(B);
    }
    function x(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function B(_, E, S, P, C) {
        for (var M = _[E], q = 0; q < O.length; q++)
          if (m(M, O[q]))
            return null;
        var U = JSON.stringify(O, function(j, R) {
          var K = H(R);
          return K === "symbol" ? String(R) : R;
        });
        return new b("Invalid " + P + " `" + C + "` of value `" + String(M) + "` " + ("supplied to `" + S + "`, expected one of " + U + "."));
      }
      return y(B);
    }
    function N(O) {
      function B(_, E, S, P, C) {
        if (typeof O != "function")
          return new b("Property `" + C + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var M = _[E], q = te(M);
        if (q !== "object")
          return new b("Invalid " + P + " `" + C + "` of type " + ("`" + q + "` supplied to `" + S + "`, expected an object."));
        for (var U in M)
          if (r(M, U)) {
            var V = O(M, U, S, P, C + "." + U, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return y(B);
    }
    function F(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var B = 0; B < O.length; B++) {
        var _ = O[B];
        if (typeof _ != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(_) + " at index " + B + "."
          ), c;
      }
      function E(S, P, C, M, q) {
        for (var U = [], V = 0; V < O.length; V++) {
          var j = O[V], R = j(S, P, C, M, q, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && U.push(R.data.expectedType);
        }
        var K = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new b("Invalid " + M + " `" + q + "` supplied to " + ("`" + C + "`" + K + "."));
      }
      return y(E);
    }
    function W() {
      function O(B, _, E, S, P) {
        return oe(B[_]) ? null : new b("Invalid " + S + " `" + P + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return y(O);
    }
    function Y(O, B, _, E, S) {
      return new b(
        (O || "React class") + ": " + B + " type `" + _ + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function re(O) {
      function B(_, E, S, P, C) {
        var M = _[E], q = te(M);
        if (q !== "object")
          return new b("Invalid " + P + " `" + C + "` of type `" + q + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var U in O) {
          var V = O[U];
          if (typeof V != "function")
            return Y(S, P, C, U, H(V));
          var j = V(M, U, S, P, C + "." + U, n);
          if (j)
            return j;
        }
        return null;
      }
      return y(B);
    }
    function G(O) {
      function B(_, E, S, P, C) {
        var M = _[E], q = te(M);
        if (q !== "object")
          return new b("Invalid " + P + " `" + C + "` of type `" + q + "` " + ("supplied to `" + S + "`, expected `object`."));
        var U = t({}, _[E], O);
        for (var V in U) {
          var j = O[V];
          if (r(O, V) && typeof j != "function")
            return Y(S, P, C, V, H(j));
          if (!j)
            return new b(
              "Invalid " + P + " `" + C + "` key `" + V + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(_[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var R = j(M, V, S, P, C + "." + V, n);
          if (R)
            return R;
        }
        return null;
      }
      return y(B);
    }
    function oe(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(oe);
          if (O === null || s(O))
            return !0;
          var B = u(O);
          if (B) {
            var _ = B.call(O), E;
            if (B !== O.entries) {
              for (; !(E = _.next()).done; )
                if (!oe(E.value))
                  return !1;
            } else
              for (; !(E = _.next()).done; ) {
                var S = E.value;
                if (S && !oe(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(O, B) {
      return O === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function te(O) {
      var B = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : Q(B, O) ? "symbol" : B;
    }
    function H(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var B = te(O);
      if (B === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function pe(O) {
      var B = H(O);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function le(O) {
      return !O.constructor || !O.constructor.name ? h : O.constructor.name;
    }
    return v.checkPropTypes = a, v.resetWarningCache = a.resetWarningCache, v.PropTypes = v, v;
  }, Ar;
}
var Ir, Uo;
function Is() {
  if (Uo)
    return Ir;
  Uo = 1;
  var e = fo();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ir = function() {
    function r(c, s, d, f, l, u) {
      if (u !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  var $s = ja(), Ms = !0;
  Lo.exports = As()($s.isElement, Ms);
} else
  Lo.exports = Is()();
const ks = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, He = (e, t) => Re.toArray(e).filter((n) => t.indexOf(ks(n)) !== -1), Ls = ({ children: e, allowMultiple: t, defaultIndex: n }) => {
  const [r, a] = Z(), i = (s) => {
    t ? r.includes(s) ? a(r.filter((d) => d !== s)) : a([...r, s]) : a(s);
  };
  X(() => (a(t ? n || [] : n ?? null), () => {
    a(null);
  }), [t, n]);
  const c = Re.map(e, (s, d) => ct(s) ? Pe(s, { ...s.props, id: d, isOpen: r, onToggle: i }) : null);
  return /* @__PURE__ */ p("div", { children: He(c, ["AccordionItem"]) });
};
Ls.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
var Qr = {}, js = {
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
})(js);
const ee = Qr, me = (e) => (t, n, r) => {
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
}) => /* @__PURE__ */ L(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: ee({
      [`${Jt["c-accordion__button"]} u-flex`]: !s,
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
  __TYPE: me("AccordionButton")
};
Ba.defaultProps = {
  __TYPE: "AccordionButton"
};
const qa = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a, defaultStyle: i }) => {
  const c = () => r(t), s = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, d = Re.map(e, (f) => ct(f) ? f.props.__TYPE === "AccordionButton" ? Pe(f, { ...f.props, id: t, onExpanded: c, isExpanded: s() }) : Pe(f, { ...f.props, id: t, isExpanded: s() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: ee({
        [Jt["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: He(d, ["AccordionButton", "AccordionPanel"])
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
        className: ee({
          [Jt["c-accordion__panel-content"]]: !a,
          [r]: r
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
const Zn = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Fs = /\w+\.svg/gi, Ce = ({ children: e, path: t, size: n, addClass: r, viewBox: a, width: i, height: c }) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", { children: "Doesn't exist" });
  if (Re.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const s = t && t.match(Fs).toString().replace(/.svg/gi, ""), d = `${t}#${s}`;
  return e ? Pe(e, {
    ...e.props,
    className: `${Zn["c-icon"]} ${Zn[`c-${n}`]} ${r ?? ""}`,
    "aria-hidden": !0,
    "data-testid": s
  }) : /* @__PURE__ */ p(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: c,
      viewBox: a,
      className: `${Zn["c-icon"]} ${Zn[`c-${n}`]} ${r ?? ""}`,
      "aria-hidden": "true",
      "data-testid": s,
      children: /* @__PURE__ */ p("use", { xlinkHref: d })
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
    disabled: d,
    onClick: f,
    children: l,
    addClass: u,
    defaultStyle: h,
    ...v
  } = e;
  return /* @__PURE__ */ L(
    "button",
    {
      ref: t,
      className: ee({
        [`${bn["c-button"]} ${bn[`c-${c}`]} ${bn[`c-${r}`]}`]: !h,
        [bn["c-round"]]: a && a.path && s,
        [bn["c-reverse"]]: a && a.position === "right",
        [u]: u
      }),
      disabled: d,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...v,
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
  const [d, f] = Z(!1), l = J(), u = (h) => {
    l.current && (l.current.paused ? l.current.play() : l.current.pause(), f(!d));
  };
  return a === Bs.BAR ? /* @__PURE__ */ p(
    "audio",
    {
      preload: "metadata",
      controls: !0,
      className: ee({
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
        onEnded: () => f(!d),
        className: Kt["c-audio--hidden"]
      }
    ),
    /* @__PURE__ */ p(
      Wt,
      {
        label: d ? "Pausar" : "Reproduccir",
        "data-a11y": n,
        addClass: ee({
          [Kt["c-button"]]: !c,
          [Kt["is-button-playing"]]: d,
          [Kt["is-button-paused"]]: !d,
          [i]: i
        }),
        onClick: u,
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
var qs = typeof Gn == "object" && Gn && Gn.Object === Object && Gn, Vs = qs, Ys = Vs, zs = typeof self == "object" && self && self.Object === Object && self, Ws = Ys || zs || Function("return this")(), Us = Ws, Hs = Us, Gs = Hs.Symbol, po = Gs;
function Zs(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Xs = Zs, Ks = Array.isArray, Qs = Ks, Ho = po, za = Object.prototype, Js = za.hasOwnProperty, el = za.toString, yn = Ho ? Ho.toStringTag : void 0;
function tl(e) {
  var t = Js.call(e, yn), n = e[yn];
  try {
    e[yn] = void 0;
    var r = !0;
  } catch {
  }
  var a = el.call(e);
  return r && (t ? e[yn] = n : delete e[yn]), a;
}
var nl = tl, rl = Object.prototype, ol = rl.toString;
function al(e) {
  return ol.call(e);
}
var il = al, Go = po, sl = nl, ll = il, cl = "[object Null]", ul = "[object Undefined]", Zo = Go ? Go.toStringTag : void 0;
function dl(e) {
  return e == null ? e === void 0 ? ul : cl : Zo && Zo in Object(e) ? sl(e) : ll(e);
}
var fl = dl;
function pl(e) {
  return e != null && typeof e == "object";
}
var vl = pl, hl = fl, gl = vl, ml = "[object Symbol]";
function bl(e) {
  return typeof e == "symbol" || gl(e) && hl(e) == ml;
}
var yl = bl, Xo = po, _l = Xs, wl = Qs, xl = yl, Tl = 1 / 0, Ko = Xo ? Xo.prototype : void 0, Qo = Ko ? Ko.toString : void 0;
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
var El = Wa, Ol = El;
function Sl(e) {
  return e == null ? "" : Ol(e);
}
var Cl = Sl, Pl = Cl, Rl = 0;
function Dl(e) {
  var t = ++Rl;
  return Pl(e) + t;
}
var Ua = Dl;
const Qt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, Ha = _t(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: c, isDisabled: s, defaultChecked: d, onChange: f, __TYPE: l, inherit: u, ...h }, v) => {
    const m = _e(() => e || Ua(`ui-${n}`), [e, n]), b = Object.freeze({
      right: /* @__PURE__ */ p("path", { id: "done_all", d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z" }),
      wrong: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }),
      normal: n === "checkbox" ? /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }) : null
    }), y = ({ target: T }) => {
      if (f) {
        if (T.checked) {
          f({ id: T.id, value: T.value });
          return;
        }
        f({ id: T.id, value: "" });
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
        ...!u && { ...h },
        children: [
          /* @__PURE__ */ L("div", { className: Qt["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: m,
                ref: v,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: Qt["c-input__check"],
                onChange: y,
                ...s && { disabled: !0 },
                ...u && { ...h },
                ...d && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${Qt["c-input__icon"]} ${d ? Qt["c-input-defaultChecked"] : ""} `, children: b[a] && /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
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
const Nl = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = Z([]), c = J(), s = (u) => {
    c.current = u || "";
  }, d = (u) => c.current === "radio" ? [{ ...u }] : a.filter((v) => v.id === u.id).length ? [...a.filter((v) => v.id !== u.id)] : [...a, { ...u }], f = (u) => {
    const h = d(u);
    n && n(h), i(h);
  }, l = Re.map(t, (u) => ct(u) ? u.props.__TYPE === "CheckBox" ? (u.props.type && s(u.props.type), Pe(u, { ...u.props, onChange: f })) : u : null);
  return /* @__PURE__ */ L("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: He(l, ["CheckBox"]) })
  ] });
};
Nl.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const Al = "_col_wu095_1", Il = {
  col: Al
}, $l = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Il.col} ${e ?? ""}`, ...t }));
$l.propTypes = {
  addClass: o.string
};
const Ml = {
  "c-content": "_c-content_u325r_1"
}, kl = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "section",
  {
    className: ee({
      [Ml["c-content"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
kl.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  defaultStyle: o.bool,
  addClass: o.string
};
const dr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function un(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function vo(e) {
  return "nodeType" in e;
}
function Ge(e) {
  var t, n;
  return e ? un(e) ? e : vo(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ho(e) {
  const {
    Document: t
  } = Ge(e);
  return e instanceof t;
}
function Ln(e) {
  return un(e) ? !1 : e instanceof Ge(e).HTMLElement;
}
function Ll(e) {
  return e instanceof Ge(e).SVGElement;
}
function dn(e) {
  return e ? un(e) ? e.document : vo(e) ? ho(e) ? e : Ln(e) ? e.ownerDocument : document : document : document;
}
const Ot = dr ? $a : X;
function go(e) {
  const t = J(e);
  return Ot(() => {
    t.current = e;
  }), Le(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function jl() {
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
  return Ot(() => {
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
function or(e) {
  const t = go(e), n = J(null), r = Le(
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
  return X(() => {
    t.current = e;
  }, [e]), t.current;
}
let $r = {};
function fr(e, t) {
  return _e(() => {
    if (t)
      return t;
    const n = $r[e] == null ? 0 : $r[e] + 1;
    return $r[e] = n, e + "-" + n;
  }, [e, t]);
}
function Ga(e) {
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
const nn = /* @__PURE__ */ Ga(1), ar = /* @__PURE__ */ Ga(-1);
function Fl(e) {
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
function Bl(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ge(e.target);
  return t && e instanceof t;
}
function eo(e) {
  if (Bl(e)) {
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
  return Fl(e) ? {
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
function ql(e) {
  return e.matches(Jo) ? e : e.querySelector(Jo);
}
const Vl = {
  display: "none"
};
function Yl(e) {
  let {
    id: t,
    value: n
  } = e;
  return ke.createElement("div", {
    id: t,
    style: Vl
  }, n);
}
const zl = {
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
function Wl(e) {
  let {
    id: t,
    announcement: n
  } = e;
  return ke.createElement("div", {
    id: t,
    style: zl,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, n);
}
function Ul() {
  const [e, t] = Z("");
  return {
    announce: Le((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Xa = /* @__PURE__ */ ut(null);
function Hl(e) {
  const t = Oe(Xa);
  X(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Gl() {
  const [e] = Z(() => /* @__PURE__ */ new Set()), t = Le((r) => (e.add(r), () => e.delete(r)), [e]);
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
const Zl = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Xl = {
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
function Kl(e) {
  let {
    announcements: t = Xl,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: a = Zl
  } = e;
  const {
    announce: i,
    announcement: c
  } = Ul(), s = fr("DndLiveRegion"), [d, f] = Z(!1);
  if (X(() => {
    f(!0);
  }, []), Hl(_e(() => ({
    onDragStart(u) {
      let {
        active: h
      } = u;
      i(t.onDragStart({
        active: h
      }));
    },
    onDragMove(u) {
      let {
        active: h,
        over: v
      } = u;
      t.onDragMove && i(t.onDragMove({
        active: h,
        over: v
      }));
    },
    onDragOver(u) {
      let {
        active: h,
        over: v
      } = u;
      i(t.onDragOver({
        active: h,
        over: v
      }));
    },
    onDragEnd(u) {
      let {
        active: h,
        over: v
      } = u;
      i(t.onDragEnd({
        active: h,
        over: v
      }));
    },
    onDragCancel(u) {
      let {
        active: h,
        over: v
      } = u;
      i(t.onDragCancel({
        active: h,
        over: v
      }));
    }
  }), [i, t])), !d)
    return null;
  const l = ke.createElement(ke.Fragment, null, ke.createElement(Yl, {
    id: r,
    value: a.draggable
  }), ke.createElement(Wl, {
    id: s,
    announcement: c
  }));
  return n ? La(l, n) : l;
}
var De;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(De || (De = {}));
function ir() {
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
function Ql() {
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
function Jl(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
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
  return n - r;
}
function tc(e, t) {
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
const nc = (e) => {
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
      const f = ea(d), l = a.reduce((h, v, m) => h + Jl(f[m], v), 0), u = Number((l / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: c,
          value: u
        }
      });
    }
  }
  return i.sort(ec);
};
function rc(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), c = a - r, s = i - n;
  if (r < a && n < i) {
    const d = t.width * t.height, f = e.width * e.height, l = c * s, u = l / (d + f - l);
    return Number(u.toFixed(4));
  }
  return 0;
}
const oc = (e) => {
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
      const d = rc(s, t);
      d > 0 && a.push({
        id: c,
        data: {
          droppableContainer: i,
          value: d
        }
      });
    }
  }
  return a.sort(tc);
};
function ac(e, t, n) {
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
function ic(e) {
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
const sc = /* @__PURE__ */ ic(1);
function lc(e) {
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
function cc(e, t, n) {
  const r = lc(t);
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
const uc = {
  ignoreTransform: !1
};
function Fn(e, t) {
  t === void 0 && (t = uc);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: l
    } = Ge(e).getComputedStyle(e);
    f && (n = cc(n, f, l));
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
function dc(e) {
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
function fc(e, t) {
  return t === void 0 && (t = Ge(e).getComputedStyle(e)), t.position === "fixed";
}
function pc(e, t) {
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
    if (!Ln(a) || Ll(a) || n.includes(a))
      return n;
    const i = Ge(e).getComputedStyle(a);
    return a !== e && pc(a, i) && n.push(a), fc(a, i) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function Ja(e) {
  const [t] = mo(e, 1);
  return t ?? null;
}
function kr(e) {
  return !dr || !e ? null : un(e) ? e : vo(e) ? ho(e) || e === dn(e).scrollingElement ? window : Ln(e) ? e : null : null;
}
function ei(e) {
  return un(e) ? e.scrollX : e.scrollLeft;
}
function ti(e) {
  return un(e) ? e.scrollY : e.scrollTop;
}
function no(e) {
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
  return !dr || !e ? !1 : e === document.scrollingElement;
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
const vc = {
  x: 0.2,
  y: 0.2
};
function hc(e, t, n, r, a) {
  let {
    top: i,
    left: c,
    right: s,
    bottom: d
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = vc);
  const {
    isTop: f,
    isBottom: l,
    isLeft: u,
    isRight: h
  } = ri(e), v = {
    x: 0,
    y: 0
  }, m = {
    x: 0,
    y: 0
  }, b = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + b.height ? (v.y = Ne.Backward, m.y = r * Math.abs((t.top + b.height - i) / b.height)) : !l && d >= t.bottom - b.height && (v.y = Ne.Forward, m.y = r * Math.abs((t.bottom - b.height - d) / b.height)), !h && s >= t.right - b.width ? (v.x = Ne.Forward, m.x = r * Math.abs((t.right - b.width - s) / b.width)) : !u && c <= t.left + b.width && (v.x = Ne.Backward, m.x = r * Math.abs((t.left + b.width - c) / b.width)), {
    direction: v,
    speed: m
  };
}
function gc(e) {
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
  return e.reduce((t, n) => nn(t, no(n)), gt);
}
function mc(e) {
  return e.reduce((t, n) => t + ei(n), 0);
}
function bc(e) {
  return e.reduce((t, n) => t + ti(n), 0);
}
function yc(e, t) {
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
const _c = [["x", ["left", "right"], mc], ["y", ["top", "bottom"], bc]];
class bo {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = mo(n), a = oi(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, c, s] of _c)
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
function wc(e) {
  const {
    EventTarget: t
  } = Ge(e);
  return e instanceof t ? e : dn(e);
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
function xc(e) {
  e.stopPropagation();
}
var se;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(se || (se = {}));
const ai = {
  start: [se.Space, se.Enter],
  cancel: [se.Esc],
  end: [se.Space, se.Enter]
}, Tc = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case se.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case se.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case se.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case se.Up:
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
    r && yc(r), n(gt);
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
        const h = ar(u, l), v = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: m
        } = r.current;
        for (const b of m) {
          const y = t.code, {
            isTop: T,
            isRight: A,
            isLeft: D,
            isBottom: $,
            maxScroll: w,
            minScroll: I
          } = ri(b), x = gc(b), N = {
            x: Math.min(y === se.Right ? x.right - x.width / 2 : x.right, Math.max(y === se.Right ? x.left : x.left + x.width / 2, u.x)),
            y: Math.min(y === se.Down ? x.bottom - x.height / 2 : x.bottom, Math.max(y === se.Down ? x.top : x.top + x.height / 2, u.y))
          }, F = y === se.Right && !A || y === se.Left && !D, W = y === se.Down && !$ || y === se.Up && !T;
          if (F && N.x !== u.x) {
            const Y = b.scrollLeft + h.x, re = y === se.Right && Y <= w.x || y === se.Left && Y >= I.x;
            if (re && !h.y) {
              b.scrollTo({
                left: Y,
                behavior: s
              });
              return;
            }
            re ? v.x = b.scrollLeft - Y : v.x = y === se.Right ? b.scrollLeft - w.x : b.scrollLeft - I.x, v.x && b.scrollBy({
              left: -v.x,
              behavior: s
            });
            break;
          } else if (W && N.y !== u.y) {
            const Y = b.scrollTop + h.y, re = y === se.Down && Y <= w.y || y === se.Up && Y >= I.y;
            if (re && !h.x) {
              b.scrollTo({
                top: Y,
                behavior: s
              });
              return;
            }
            re ? v.y = b.scrollTop - Y : v.y = y === se.Down ? b.scrollTop - w.y : b.scrollTop - I.y, v.y && b.scrollBy({
              top: -v.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, nn(ar(u, this.referenceCoordinates), v));
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
    r === void 0 && (r = wc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: c
    } = i;
    this.props = t, this.events = n, this.document = dn(c), this.documentListeners = new Tn(this.document), this.listeners = new Tn(r), this.windowListeners = new Tn(Ge(c)), this.initialCoordinates = (a = eo(i)) != null ? a : gt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    t && (this.activated = !0, this.documentListeners.add(it.Click, xc, {
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
    const d = (n = eo(t)) != null ? n : gt, f = ar(a, d);
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
    t.code === se.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Ec = {
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
    } = t, r = dn(n.target);
    super(t, Ec, r);
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
const Oc = {
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
class si extends _o {
  constructor(t) {
    super(t, Oc, dn(t.event.target));
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
class li extends _o {
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
var sr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(sr || (sr = {}));
function Sc(e) {
  let {
    acceleration: t,
    activator: n = En.Pointer,
    canScroll: r,
    draggingRect: a,
    enabled: i,
    interval: c = 5,
    order: s = sr.TreeOrder,
    pointerCoordinates: d,
    scrollableAncestors: f,
    scrollableAncestorRects: l,
    delta: u,
    threshold: h
  } = e;
  const v = Pc({
    delta: u,
    disabled: !i
  }), [m, b] = jl(), y = J({
    x: 0,
    y: 0
  }), T = J({
    x: 0,
    y: 0
  }), A = _e(() => {
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
  }, [n, a, d]), D = J(null), $ = Le(() => {
    const I = D.current;
    if (!I)
      return;
    const x = y.current.x * T.current.x, N = y.current.y * T.current.y;
    I.scrollBy(x, N);
  }, []), w = _e(() => s === sr.TreeOrder ? [...f].reverse() : f, [s, f]);
  X(
    () => {
      if (!i || !f.length || !A) {
        b();
        return;
      }
      for (const I of w) {
        if ((r == null ? void 0 : r(I)) === !1)
          continue;
        const x = f.indexOf(I), N = l[x];
        if (!N)
          continue;
        const {
          direction: F,
          speed: W
        } = hc(I, N, A, t, h);
        for (const Y of ["x", "y"])
          v[Y][F[Y]] || (W[Y] = 0, F[Y] = 0);
        if (W.x > 0 || W.y > 0) {
          b(), D.current = I, m($, c), y.current = W, T.current = F;
          return;
        }
      }
      y.current = {
        x: 0,
        y: 0
      }, T.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      $,
      r,
      b,
      i,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(A),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v),
      m,
      f,
      w,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Cc = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function Pc(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Jr(t);
  return jn((a) => {
    if (n || !r || !a)
      return Cc;
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
function Rc(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return jn((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function Dc(e, t) {
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
var oo;
(function(e) {
  e.Optimized = "optimized";
})(oo || (oo = {}));
const aa = /* @__PURE__ */ new Map();
function Nc(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, c] = Z(null), {
    frequency: s,
    measure: d,
    strategy: f
  } = a, l = J(e), u = y(), h = Dn(u), v = Le(function(T) {
    T === void 0 && (T = []), !h.current && c((A) => A === null ? T : A.concat(T.filter((D) => !A.includes(D))));
  }, [h]), m = J(null), b = jn((T) => {
    if (u && !n)
      return aa;
    if (!T || T === aa || l.current !== e || i != null) {
      const A = /* @__PURE__ */ new Map();
      for (let D of e) {
        if (!D)
          continue;
        if (i && i.length > 0 && !i.includes(D.id) && D.rect.current) {
          A.set(D.id, D.rect.current);
          continue;
        }
        const $ = D.node.current, w = $ ? new bo(d($), $) : null;
        D.rect.current = w, w && A.set(D.id, w);
      }
      return A;
    }
    return T;
  }, [e, i, n, u, d]);
  return X(() => {
    l.current = e;
  }, [e]), X(
    () => {
      u || v();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), X(
    () => {
      i && i.length > 0 && c(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), X(
    () => {
      u || typeof s != "number" || m.current !== null || (m.current = setTimeout(() => {
        v(), m.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, u, v, ...r]
  ), {
    droppableRects: b,
    measureDroppableContainers: v,
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
function ci(e, t) {
  return jn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Ac(e, t) {
  return ci(e, t);
}
function Ic(e) {
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
  return X(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function pr(e) {
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
  return X(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function $c(e) {
  return new bo(Fn(e), e);
}
function ia(e, t, n) {
  t === void 0 && (t = $c);
  const [r, a] = uo(s, null), i = Ic({
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
  return Ot(() => {
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
function Mc(e) {
  const t = ci(e);
  return Qa(e, t);
}
const sa = [];
function kc(e) {
  const t = J(e), n = jn((r) => e ? r && r !== sa && e && t.current && e.parentNode === t.current.parentNode ? r : mo(e) : sa, [e]);
  return X(() => {
    t.current = e;
  }, [e]), n;
}
function Lc(e) {
  const [t, n] = Z(null), r = J(e), a = Le((i) => {
    const c = kr(i.target);
    c && n((s) => s ? (s.set(c, no(c)), new Map(s)) : null);
  }, []);
  return X(() => {
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
  }, [a, e]), _e(() => e.length ? t ? Array.from(t.values()).reduce((i, c) => nn(i, c), gt) : oi(e) : gt, [e, t]);
}
function la(e, t) {
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
  }, [e]), n.current ? ar(e, n.current) : gt;
}
function jc(e) {
  X(
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
function Fc(e, t) {
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
  return _e(() => e ? dc(e) : null, [e]);
}
const Fr = [];
function Bc(e, t) {
  t === void 0 && (t = Fn);
  const [n] = e, r = ui(n ? Ge(n) : null), [a, i] = uo(s, Fr), c = pr({
    callback: i
  });
  return e.length > 0 && a === Fr && i(), Ot(() => {
    e.length ? e.forEach((d) => c == null ? void 0 : c.observe(d)) : (c == null || c.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((d) => ni(d) ? r : new bo(t(d), d)) : Fr;
  }
}
function qc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Ln(t) ? t : e;
}
function Vc(e) {
  let {
    measure: t
  } = e;
  const [n, r] = Z(null), a = Le((f) => {
    for (const {
      target: l
    } of f)
      if (Ln(l)) {
        r((u) => {
          const h = t(l);
          return u ? {
            ...u,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [t]), i = pr({
    callback: a
  }), c = Le((f) => {
    const l = qc(f);
    i == null || i.disconnect(), l && (i == null || i.observe(l)), r(l ? t(l) : null);
  }, [t, i]), [s, d] = or(c);
  return _e(() => ({
    nodeRef: s,
    rect: n,
    setRef: d
  }), [n, s, d]);
}
const Yc = [{
  sensor: ii,
  options: {}
}, {
  sensor: yo,
  options: {}
}], zc = {
  current: {}
}, Jn = {
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
class On extends Map {
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
const Wc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new On(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: ir
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Jn,
  measureDroppableContainers: ir,
  windowRect: null,
  measuringScheduled: !1
}, Uc = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: ir,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: ir
}, vr = /* @__PURE__ */ ut(Uc), Hc = /* @__PURE__ */ ut(Wc);
function Gc() {
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
      containers: new On()
    }
  };
}
function Zc(e, t) {
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
      } = n, a = new On(e.droppable.containers);
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
      const c = new On(e.droppable.containers);
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
      const i = new On(e.droppable.containers);
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
function Xc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: a
  } = Oe(vr), i = Jr(r), c = Jr(n == null ? void 0 : n.id);
  return X(() => {
    if (!t && !r && i && c != null) {
      if (!Za(i) || document.activeElement === i.target)
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
          const u = ql(l);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, a, c, i]), null;
}
function Kc(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...r
  }), n) : n;
}
function Qc(e) {
  return _e(
    () => ({
      draggable: {
        ...Jn.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Jn.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Jn.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function Jc(e) {
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
  Ot(() => {
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
      const h = Ja(f);
      h && h.scrollBy({
        top: u.y,
        left: u.x
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
const eu = /* @__PURE__ */ Ma(function(t) {
  var n, r, a, i;
  let {
    id: c,
    accessibility: s,
    autoScroll: d = !0,
    children: f,
    sensors: l = Yc,
    collisionDetection: u = oc,
    measuring: h,
    modifiers: v,
    ...m
  } = t;
  const b = uo(Zc, void 0, Gc), [y, T] = b, [A, D] = Gl(), [$, w] = Z(Nt.Uninitialized), I = $ === Nt.Initialized, {
    draggable: {
      active: x,
      nodes: N,
      translate: F
    },
    droppable: {
      containers: W
    }
  } = y, Y = x ? N.get(x) : null, re = J({
    initial: null,
    translated: null
  }), G = _e(() => {
    var be;
    return x != null ? {
      id: x,
      // It's possible for the active node to unmount while dragging
      data: (be = Y == null ? void 0 : Y.data) != null ? be : zc,
      rect: re
    } : null;
  }, [x, Y]), oe = J(null), [Q, te] = Z(null), [H, pe] = Z(null), le = Dn(m, Object.values(m)), O = fr("DndDescribedBy", c), B = _e(() => W.getEnabled(), [W]), _ = Qc(h), {
    droppableRects: E,
    measureDroppableContainers: S,
    measuringScheduled: P
  } = Nc(B, {
    dragging: I,
    dependencies: [F.x, F.y],
    config: _.droppable
  }), C = Rc(N, x), M = _e(() => H ? eo(H) : null, [H]), q = Wn(), U = Ac(C, _.draggable.measure);
  Jc({
    activeNode: x ? N.get(x) : null,
    config: q.layoutShiftCompensation,
    initialRect: U,
    measure: _.draggable.measure
  });
  const V = ia(C, _.draggable.measure, U), j = ia(C ? C.parentElement : null), R = J({
    activatorEvent: null,
    active: null,
    activeNode: C,
    collisionRect: null,
    collisions: null,
    droppableRects: E,
    draggableNodes: N,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: W,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), K = W.getNodeFor((n = R.current.over) == null ? void 0 : n.id), ue = Vc({
    measure: _.dragOverlay.measure
  }), ye = (r = ue.nodeRef.current) != null ? r : C, xe = I ? (a = ue.rect) != null ? a : V : null, je = !!(ue.nodeRef.current && ue.rect), dt = Mc(je ? null : V), Ze = ui(ye ? Ge(ye) : null), Te = kc(I ? K ?? C : null), qe = Bc(Te), Xe = Kc(v, {
    transform: {
      x: F.x - dt.x,
      y: F.y - dt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: H,
    active: G,
    activeNodeRect: V,
    containerNodeRect: j,
    draggingNodeRect: xe,
    over: R.current.over,
    overlayNodeRect: ue.rect,
    scrollableAncestors: Te,
    scrollableAncestorRects: qe,
    windowRect: Ze
  }), Mt = M ? nn(M, F) : null, St = Lc(Te), kt = la(St), Lt = la(St, [V]), Fe = nn(Xe, kt), ft = xe ? sc(xe, Xe) : null, Ct = G && ft ? u({
    active: G,
    collisionRect: ft,
    droppableRects: E,
    droppableContainers: B,
    pointerCoordinates: Mt
  }) : null, pn = Ka(Ct, "id"), [nt, Vn] = Z(null), Er = je ? Xe : nn(Xe, Lt), Or = ac(Er, (i = nt == null ? void 0 : nt.rect) != null ? i : null, V), Yn = Le(
    (be, Ae) => {
      let {
        sensor: Ie,
        options: pt
      } = Ae;
      if (oe.current == null)
        return;
      const Ve = N.get(oe.current);
      if (!Ve)
        return;
      const Ye = be.nativeEvent, rt = new Ie({
        active: oe.current,
        activeNode: Ve,
        event: Ye,
        options: pt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: R,
        onStart(ze) {
          const jt = oe.current;
          if (jt == null)
            return;
          const Ft = N.get(jt);
          if (!Ft)
            return;
          const {
            onDragStart: Bt
          } = le.current, Zt = {
            active: {
              id: jt,
              data: Ft.data,
              rect: re
            }
          };
          hn(() => {
            Bt == null || Bt(Zt), w(Nt.Initializing), T({
              type: De.DragStart,
              initialCoordinates: ze,
              active: jt
            }), A({
              type: "onDragStart",
              event: Zt
            });
          });
        },
        onMove(ze) {
          T({
            type: De.DragMove,
            coordinates: ze
          });
        },
        onEnd: Tt(De.DragEnd),
        onCancel: Tt(De.DragCancel)
      });
      hn(() => {
        te(rt), pe(be.nativeEvent);
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
            } = le.current;
            qt = {
              activatorEvent: Ye,
              active: Ft,
              collisions: Bt,
              delta: Un,
              over: Zt
            }, ze === De.DragEnd && typeof Vt == "function" && await Promise.resolve(Vt(qt)) && (ze = De.DragCancel);
          }
          oe.current = null, hn(() => {
            T({
              type: ze
            }), w(Nt.Uninitialized), Vn(null), te(null), pe(null);
            const Vt = ze === De.DragEnd ? "onDragEnd" : "onDragCancel";
            if (qt) {
              const g = le.current[Vt];
              g == null || g(qt), A({
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
  ), Sr = Le((be, Ae) => (Ie, pt) => {
    const Ve = Ie.nativeEvent, Ye = N.get(pt);
    if (
      // Another sensor is already instantiating
      oe.current !== null || // No active draggable
      !Ye || // Event has already been captured
      Ve.dndKit || Ve.defaultPrevented
    )
      return;
    const rt = {
      active: Ye
    };
    be(Ie, Ae.options, rt) === !0 && (Ve.dndKit = {
      capturedBy: Ae.sensor
    }, oe.current = pt, Yn(Ie, Ae));
  }, [N, Yn]), zn = Dc(l, Sr);
  jc(l), Ot(() => {
    V && $ === Nt.Initializing && w(Nt.Initialized);
  }, [V, $]), X(
    () => {
      const {
        onDragMove: be
      } = le.current, {
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
        be == null || be(Ye), A({
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
      if (!be || oe.current == null || !Ae || !Ve)
        return;
      const {
        onDragOver: Ye
      } = le.current, rt = pt.get(pn), Tt = rt && rt.rect.current ? {
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
        Vn(Tt), Ye == null || Ye(ze), A({
          type: "onDragOver",
          event: ze
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pn]
  ), Ot(() => {
    R.current = {
      activatorEvent: H,
      active: G,
      activeNode: C,
      collisionRect: ft,
      collisions: Ct,
      droppableRects: E,
      draggableNodes: N,
      draggingNode: ye,
      draggingNodeRect: xe,
      droppableContainers: W,
      over: nt,
      scrollableAncestors: Te,
      scrollAdjustedTranslate: Fe
    }, re.current = {
      initial: xe,
      translated: ft
    };
  }, [G, C, Ct, ft, N, ye, xe, E, W, nt, Te, Fe]), Sc({
    ...q,
    delta: F,
    draggingRect: ft,
    pointerCoordinates: Mt,
    scrollableAncestors: Te,
    scrollableAncestorRects: qe
  });
  const Cr = _e(() => ({
    active: G,
    activeNode: C,
    activeNodeRect: V,
    activatorEvent: H,
    collisions: Ct,
    containerNodeRect: j,
    dragOverlay: ue,
    draggableNodes: N,
    droppableContainers: W,
    droppableRects: E,
    over: nt,
    measureDroppableContainers: S,
    scrollableAncestors: Te,
    scrollableAncestorRects: qe,
    measuringConfiguration: _,
    measuringScheduled: P,
    windowRect: Ze
  }), [G, C, V, H, Ct, j, ue, N, W, E, nt, S, Te, qe, _, P, Ze]), vn = _e(() => ({
    activatorEvent: H,
    activators: zn,
    active: G,
    activeNodeRect: V,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: T,
    draggableNodes: N,
    over: nt,
    measureDroppableContainers: S
  }), [H, zn, G, V, T, O, N, nt, S]);
  return ke.createElement(Xa.Provider, {
    value: D
  }, ke.createElement(vr.Provider, {
    value: vn
  }, ke.createElement(Hc.Provider, {
    value: Cr
  }, ke.createElement(di.Provider, {
    value: Or
  }, f)), ke.createElement(Xc, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), ke.createElement(Kl, {
    ...s,
    hiddenTextDescribedById: O
  }));
  function Wn() {
    const be = (Q == null ? void 0 : Q.autoScrollEnabled) === !1, Ae = typeof d == "object" ? d.enabled === !1 : d === !1, Ie = I && !be && !Ae;
    return typeof d == "object" ? {
      ...d,
      enabled: Ie
    } : {
      enabled: Ie
    };
  }
}), tu = /* @__PURE__ */ ut(null), ca = "button", nu = "Droppable";
function ru(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = fr(nu), {
    activators: c,
    activatorEvent: s,
    active: d,
    activeNodeRect: f,
    ariaDescribedById: l,
    draggableNodes: u,
    over: h
  } = Oe(vr), {
    role: v = ca,
    roleDescription: m = "draggable",
    tabIndex: b = 0
  } = a ?? {}, y = (d == null ? void 0 : d.id) === t, T = Oe(y ? di : tu), [A, D] = or(), [$, w] = or(), I = Fc(c, t), x = Dn(n);
  Ot(
    () => (u.set(t, {
      id: t,
      key: i,
      node: A,
      activatorNode: $,
      data: x
    }), () => {
      const F = u.get(t);
      F && F.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const N = _e(() => ({
    role: v,
    tabIndex: b,
    "aria-disabled": r,
    "aria-pressed": y && v === ca ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": l.draggable
  }), [r, v, b, y, m, l.draggable]);
  return {
    active: d,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: N,
    isDragging: y,
    listeners: r ? void 0 : I,
    node: A,
    over: h,
    setNodeRef: D,
    setActivatorNodeRef: w,
    transform: T
  };
}
const ou = "Droppable", au = {
  timeout: 25
};
function fi(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: a
  } = e;
  const i = fr(ou), {
    active: c,
    dispatch: s,
    over: d,
    measureDroppableContainers: f
  } = Oe(vr), l = J({
    disabled: n
  }), u = J(!1), h = J(null), v = J(null), {
    disabled: m,
    updateMeasurementsFor: b,
    timeout: y
  } = {
    ...au,
    ...a
  }, T = Dn(b ?? r), A = Le(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      v.current != null && clearTimeout(v.current), v.current = setTimeout(() => {
        f(Array.isArray(T.current) ? T.current : [T.current]), v.current = null;
      }, y);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), D = pr({
    callback: A,
    disabled: m || !c
  }), $ = Le((N, F) => {
    D && (F && (D.unobserve(F), u.current = !1), N && D.observe(N));
  }, [D]), [w, I] = or($), x = Dn(t);
  return X(() => {
    !D || !w.current || (D.disconnect(), u.current = !1, D.observe(w.current));
  }, [w, D]), Ot(
    () => (s({
      type: De.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: w,
        rect: h,
        data: x
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
    rect: h,
    isOver: (d == null ? void 0 : d.id) === r,
    node: w,
    over: d,
    setNodeRef: I
  };
}
const iu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, su = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, lu = [se.Down, se.Right, se.Up, se.Left], cu = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (lu.includes(e.code)) {
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
          case se.Down:
            a.top < u.top && s.push(l);
            break;
          case se.Up:
            a.top > u.top + c && s.push(l);
            break;
          case se.Left:
            a.left >= u.left + u.width && s.push(l);
            break;
          case se.Right:
            a.left + a.width <= u.left && s.push(l);
            break;
        }
    });
    const d = nc({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = Ka(d, "id");
    if (f != null) {
      const l = r.get(f), u = l == null ? void 0 : l.node.current, h = l == null ? void 0 : l.rect.current;
      if (u && h)
        return ((i = l.data.current) == null ? void 0 : i.type) === "container" ? {
          x: h.left,
          y: h.top + c
        } : {
          x: h.left,
          y: h.top
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
}), uu = {
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
  announcements: s,
  onDragMove: d
}) => {
  const [f, l] = Z([]), [u, h] = Z(null), [v, m] = Z(() => b());
  function b() {
    return [...xn(e, "droppable"), ...xn(e, "general-draggable")].reduce(
      (I, x) => ({
        ...I,
        [x.props.id]: x.props.children ? [...xn(x.props.children, "draggable").map((N) => N.props.id)] : []
      }),
      {}
    );
  }
  const y = Object.freeze({
    restrictToVerticalAxis: su,
    restrictToHorizontalAxis: iu
  }), T = Ql(
    Mr(si),
    Mr(li),
    Mr(yo, {
      coordinateGetter: cu
    })
  ), A = (I, x) => {
    if (Object.keys(v).pop() === I.id)
      return;
    let F = [...f.filter((W) => W !== x), I.data.current.validate.includes(x) ? x : ""].filter((W) => !!W);
    if (!t) {
      const W = v[I.id][0];
      F = W ? F.filter((Y) => Y !== W) : F;
    }
    n && n({ validate: [...F], active: !0 }), l(F);
  }, D = (I) => I in v ? I : Object.keys(v).find((x) => v[x].includes(I)), $ = ({ active: I, over: x }) => {
    if (!x)
      return;
    h(null);
    const N = Object.keys(v).pop(), F = D(x.id), W = D(I.id);
    W !== F && (N !== x.id && A(x, I.id), m((Y) => {
      const re = Y[W].filter((Q) => Q !== I.id), G = [...Y[F]];
      return t ? {
        ...Y,
        [W]: re,
        [F]: [...G, I.id]
      } : {
        ...{
          ...Y,
          [W]: re,
          [F]: F === N ? [...G, I.id] : [I.id]
        },
        ...F !== N && Y[F].length > 0 && { [N]: [...Y[N].filter((Q) => Q !== I.id), ...Y[F]] }
      };
    }));
  }, w = (I) => Re.map(I, (x) => {
    if (!x.props)
      return x;
    if (x.props.__TYPE !== "draggable")
      return x.props.id in v && v[x.props.id].length > 0 ? Pe(x, { ...x.props }, [
        ...v[x.props.id].map((N) => xn(e, "draggable").filter((F) => F.props.id === N)).flat()
      ]) : x.props.children ? Pe(x, { ...x.props, children: w(x.props.children) }) : x;
  });
  return X(() => {
    a && (m(() => b()), n && n({ validate: [], active: !1 }));
  }, [a]), /* @__PURE__ */ p(pi.Provider, { value: { listId: f, propValidate: i, validate: r, isDragging: u }, children: /* @__PURE__ */ p(
    eu,
    {
      sensors: T,
      accessibility: { announcements: s },
      onDragStart: ({ active: I }) => h(I.id),
      onDragEnd: $,
      ...!!d && { onDragMove: d },
      onDragCancel: () => h(null),
      ...c && { modifiers: [y[c]] },
      children: w(e)
    }
  ) });
};
vi.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: uu
};
vi.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element), o.node, o.arrayOf(o.node)]),
  multipleDrags: o.bool,
  onValidate: o.func,
  reboot: o.bool,
  validate: o.bool.isRequired,
  propValidate: o.string.isRequired,
  modifiers: o.oneOf(["restrictToVerticalAxis", "restrictToHorizontalAxis"]),
  announcements: o.object.isRequired,
  onDragMove: o.func
};
const du = "_pop_1elvh_1", rn = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: du
}, hi = ({ children: e, id: t, addClass: n, dragging: r, label: a, attribute: i, disabledDefaultAttributes: c, element: s, defaultStyle: d, __TYPE: f, ...l }) => {
  const u = s || "div", { listId: h, propValidate: v, validate: m, isDragging: b } = Oe(pi), { attributes: y, listeners: T, setNodeRef: A, transform: D } = ru({
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
      ref: A,
      "data-type": f,
      className: ee({
        [rn["c-draggable"]]: !d,
        [`${r} ${rn["is-draggable--active-animation"]}`]: b === t && !d,
        [n]: n
      }),
      style: { transform: to.Translate.toString(D) },
      ...m && { [v]: !!h.includes(t) },
      ...!c && { ...y },
      ...T,
      ...l,
      children: e
    }
  );
};
hi.defaultProps = {
  __TYPE: "draggable",
  dragging: rn["c-draggable--active"],
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
  __TYPE: d,
  ...f
}) => {
  const l = c || "div", { isOver: u, setNodeRef: h } = fi({
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
      ref: h,
      "data-type": d,
      className: ee({
        [rn["c-droppable"]]: !s,
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
  over: rn["c-droppable--active"]
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
      className: ee({
        [rn["c-droppable"]]: !c,
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
  __TYPE: me("general-draggable")
};
mi.defaultProps = {
  __TYPE: "general-draggable",
  id: Ua("unique-id-general-"),
  label: "contendor inicial"
};
const mp = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ L("defs", { children: [
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
] }) }) }), ua = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, bi = ({ url: e, alt: t, title: n, width: r, addClass: a, noCaption: i, defaultStyle: c, ...s }) => {
  const [d, f] = Z(!1), l = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, u = (v) => f(v), h = d ? l : `${e}`;
  return /* @__PURE__ */ L(
    "figure",
    {
      className: ee({
        [ua["c-image"]]: !c,
        [a]: a
      }),
      ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } },
      children: [
        /* @__PURE__ */ p("img", { src: h, onError: u, alt: t, ...s }),
        !i && /* @__PURE__ */ p("figcaption", { className: ua["c-image__figcaption"], children: /* @__PURE__ */ L("p", { children: [
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
const An = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, yi = _t(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: c, isDisabled: s, isRequired: d, isReadOnly: f, defaultStyle: l, onValue: u }, h) => {
  const v = e || It(), m = ({ target: b }) => {
    u && u({ id: v, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ L(
    "label",
    {
      htmlFor: v,
      className: ee({
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
            id: v,
            ref: h,
            type: t,
            name: v,
            value: n,
            disabled: s,
            required: d,
            placeholder: r,
            autoComplete: "off",
            onChange: m,
            className: ee({
              [An["c-input"]]: !l
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
const fu = ({ children: e, onAllValue: t }) => {
  const [n, r] = Z([]), a = (s) => r([...n.filter((d) => d.id !== s.id), { ...s }]);
  X(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, d, f) => Re.toArray(s).map((l) => l.props.__TYPE === d ? Pe(l, { ...l.props, ...f }) : l);
  return Re.map(e, (s) => {
    var d, f;
    return ct(s) ? ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "InputStyle" ? Pe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? Pe(s, { ...s.props, onValue: a }) : s : null;
  });
};
fu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const _i = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: ee({
      [An["c-input__wrapper-style"]]: !n,
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
    className: ee({
      [An["c-input__left-addon"]]: !n,
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
    className: ee({
      [An["c-input__right-addon"]]: !n,
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
const pu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, vu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: ee({
      [pu["c-kbd"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
vu.propTypes = {
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
const Ei = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, hu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "ul",
  {
    className: ee({
      [Ei["c-List"]]: !n,
      [t]: t
    }),
    ...r,
    children: He(e, ["ListItem"])
  }
);
hu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool
};
const Oi = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = Re.map(e, (i) => {
    var c;
    return ((c = i == null ? void 0 : i.props) == null ? void 0 : c.__TYPE) === "Icon" ? Pe(i, { ...i.props, addClass: Ei["c-list-item__icon"] }) : i;
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
const gu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: He(e, ["ListItem"]) });
gu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const mu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: He(e, ["ListItem"]) });
mu.propTypes = {
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
        var h = this;
        c(u, function(y) {
          return h._visitNode(y);
        });
        var v = document.activeElement;
        if (!document.body.contains(u)) {
          for (var m = u, b = void 0; m; ) {
            if (m.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              b = /** @type {!ShadowRoot} */
              m;
              break;
            }
            m = m.parentNode;
          }
          b && (v = b.activeElement);
        }
        u.contains(v) && (v.blur(), v === document.activeElement && document.body.focus());
      }
      /**
       * @param {!Node} node
       */
    }, {
      key: "_visitNode",
      value: function(u) {
        if (u.nodeType === Node.ELEMENT_NODE) {
          var h = (
            /** @type {!HTMLElement} */
            u
          );
          h !== this._rootElement && h.hasAttribute("inert") && this._adoptInertRoot(h), (t.call(h, n) || h.hasAttribute("tabindex")) && this._manageNode(h);
        }
      }
      /**
       * Register the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_manageNode",
      value: function(u) {
        var h = this._inertManager.register(u, this);
        this._managedNodes.add(h);
      }
      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_unmanageNode",
      value: function(u) {
        var h = this._inertManager.deregister(u, this);
        h && this._managedNodes.delete(h);
      }
      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */
    }, {
      key: "_unmanageSubtree",
      value: function(u) {
        var h = this;
        c(u, function(v) {
          return h._unmanageNode(v);
        });
      }
      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!HTMLElement} node
       */
    }, {
      key: "_adoptInertRoot",
      value: function(u) {
        var h = this._inertManager.getInertRoot(u);
        h || (this._inertManager.setInert(u, !0), h = this._inertManager.getInertRoot(u)), h.managedNodes.forEach(function(v) {
          this._manageNode(v.node);
        }, this);
      }
      /**
       * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_onMutation",
      value: function(u, h) {
        u.forEach(function(v) {
          var m = (
            /** @type {!HTMLElement} */
            v.target
          );
          if (v.type === "childList")
            e.call(v.addedNodes).forEach(function(y) {
              this._makeSubtreeUnfocusable(y);
            }, this), e.call(v.removedNodes).forEach(function(y) {
              this._unmanageSubtree(y);
            }, this);
          else if (v.type === "attributes") {
            if (v.attributeName === "tabindex")
              this._manageNode(m);
            else if (m !== this._rootElement && v.attributeName === "inert" && m.hasAttribute("inert")) {
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
      value: function(u, h) {
        if (h) {
          if (this._inertRoots.has(u))
            return;
          var v = new r(u, this);
          if (u.setAttribute("inert", ""), this._inertRoots.set(u, v), !this._document.body.contains(u))
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
      value: function(u, h) {
        var v = this._managedNodes.get(u);
        return v !== void 0 ? v.addInertRoot(h) : v = new a(u, h), this._managedNodes.set(u, v), v;
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
      value: function(u, h) {
        var v = this._managedNodes.get(u);
        return v ? (v.removeInertRoot(h), v.destroyed && this._managedNodes.delete(u), v) : null;
      }
      /**
       * Callback used when document has finished loading.
       */
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var u = e.call(this._document.querySelectorAll("[inert]"));
        u.forEach(function(h) {
          this.setInert(h, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
      /**
       * Callback used when mutation observer detects attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_watchForInert",
      value: function(u, h) {
        var v = this;
        u.forEach(function(m) {
          switch (m.type) {
            case "childList":
              e.call(m.addedNodes).forEach(function(T) {
                if (T.nodeType === Node.ELEMENT_NODE) {
                  var A = e.call(T.querySelectorAll("[inert]"));
                  t.call(T, "[inert]") && A.unshift(T), A.forEach(function(D) {
                    this.setInert(D, !0);
                  }, v);
                }
              }, v);
              break;
            case "attributes":
              if (m.attributeName !== "inert")
                return;
              var b = (
                /** @type {!HTMLElement} */
                m.target
              ), y = b.hasAttribute("inert");
              v.setInert(b, y);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function c(f, l, u) {
    if (f.nodeType == Node.ELEMENT_NODE) {
      var h = (
        /** @type {!HTMLElement} */
        f
      );
      l && l(h);
      var v = (
        /** @type {!HTMLElement} */
        h.shadowRoot
      );
      if (v) {
        c(v, l);
        return;
      }
      if (h.localName == "content") {
        for (var m = (
          /** @type {!HTMLContentElement} */
          h
        ), b = m.getDistributedNodes ? m.getDistributedNodes() : [], y = 0; y < b.length; y++)
          c(b[y], l);
        return;
      }
      if (h.localName == "slot") {
        for (var T = (
          /** @type {!HTMLSlotElement} */
          h
        ), A = T.assignedNodes ? T.assignedNodes({ flatten: !0 }) : [], D = 0; D < A.length; D++)
          c(A[D], l);
        return;
      }
    }
    for (var $ = f.firstChild; $ != null; )
      c($, l), $ = $.nextSibling;
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
const hr = ut(), bu = Object.freeze({
  ESC: 27
}), Si = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = J(), i = (f) => {
    const l = document.querySelector("#root");
    l.inert = f;
  }, c = (f) => {
    (f.keyCode || f.which) === bu.ESC && d();
  }, s = (f, l) => {
    a.current.classList.replace(f, l);
  }, d = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), n(!t), Object.keys(r).length !== 0 && r.current.focus();
    }, 500);
  };
  return X(() => (t && (i(!0), a.current && a.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(
    hr.Provider,
    {
      value: { isOpen: t, onKeyDown: c, onCloseModal: d, refModal: a },
      children: /* @__PURE__ */ p(fn, { id: "js-modal", children: He(e, ["ModalContent", "ModalOverlay"]) })
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
const er = {
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
    isOpen: d,
    onKeyDown: f,
    onCloseModal: l,
    refModal: u
  } = Oe(hr), h = (m) => {
    r && typeof r == "function" && r(m), l();
  };
  return /* @__PURE__ */ L(
    "div",
    {
      ref: u,
      role: "dialog",
      tabIndex: "-1",
      hidden: !d,
      "aria-label": e,
      "aria-modal": "true",
      "data-type": c,
      onKeyDown: (m) => {
        a && typeof a == "function" && a(m), f(m);
      },
      className: ee(
        "animate__animated animate__fadeIn animate__faster video-interpreter-ui-modal",
        {
          [`${er["c-modal"]} u-px-3 u-py-3`]: !i,
          [t]: t
        }
      ),
      ...s,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: ee({ [er["c-modal-container"]]: !i }),
            "data-class": "c-modal__container",
            children: n
          }
        ),
        /* @__PURE__ */ p(
          Wt,
          {
            addClass: ee({ [er["c-close-button"]]: !i }),
            "data-class": "c-modal__close-button",
            label: "Cerrar modal",
            hasAriaLabel: !0,
            onClick: h,
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
  const { isOpen: r, onCloseModal: a } = Oe(hr), i = (c) => {
    t && typeof t == "function" && t(c), a();
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: ee({
        [er["c-layout"]]: !n,
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
const yu = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = Oe(hr), r = (a) => {
    t && t(a), n();
  };
  return Pe(e, { ...e.props, onClick: r });
};
yu.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const on = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, gr = ut(), Ri = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: c, onValue: s }) => {
  const [d, f] = Z(r || 0), l = () => {
    if (n && d > i)
      return f(i);
    f((m) => m + c);
  }, u = () => {
    if (n && d < a)
      return f(a);
    f((m) => m - c);
  }, h = (m) => f(m), v = (m) => n && d === m;
  return X(() => {
    s && s(d);
  }, [d, s]), /* @__PURE__ */ p(
    gr.Provider,
    {
      value: {
        counter: d,
        min: a || Number.MIN_SAFE_INTEGER,
        max: i || Number.MAX_SAFE_INTEGER,
        validate: v,
        onChangeValue: h,
        onIncrementValue: l,
        onDecrementValue: u
      },
      children: /* @__PURE__ */ p("div", { className: `${on["c-number-input"]} ${t ?? ""}`, children: He(e, ["NumberInputField", "NumberInputStepper"]) })
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
      max: h
    } = Oe(gr), v = e || It(), m = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), b = ({ target: T }) => {
      if (!isNaN(T.value) && T.value)
        return d(parseInt(T.value));
      d(0);
    }, y = (T) => {
      switch (T.keyCode || T.which) {
        case m.UP:
          f();
          break;
        case m.DOWN:
          l();
          break;
        case m.END:
          d(h);
          break;
        case m.HOME:
          d(u);
          break;
        default:
          return null;
      }
    };
    return /* @__PURE__ */ L(
      "label",
      {
        htmlFor: v,
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
              id: v,
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
                "aria-valuemax": h,
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
  __TYPE: me("NumberInputField")
};
const Ni = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${on["c-number-input__stepper"]} ${t ?? ""}`, children: He(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Ni.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberInputStepper")
};
Ni.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Ai = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = Oe(gr);
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
Ai.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberDecrementStepper"),
  label: o.string
};
Ai.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Ii = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: r, validate: a, max: i } = Oe(gr);
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
Ii.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: me("NumberIncrementStepper"),
  label: o.string
};
Ii.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const _u = (e) => {
  const {
    boundaryCount: t = 1,
    count: n = 1,
    defaultPage: r = 1,
    disabled: a = !1,
    hideNextButton: i = !1,
    hidePrevButton: c = !1,
    onChange: s,
    showFirstButton: d = !1,
    showLastButton: f = !1,
    siblingCount: l = 1,
    ...u
  } = e, [h, v] = Z(r), m = (x, N) => {
    v(N), s && s(x, N);
  }, b = (x, N) => {
    const F = N - x + 1;
    return Array.from({ length: F }, (W, Y) => x + Y);
  }, y = b(1, Math.min(t, n)), T = b(
    Math.max(n - t + 1, t + 1),
    n
  ), A = Math.max(
    Math.min(
      // Inicio natural
      h - l,
      // Limite inferior cuando la página es mayor
      n - t - l * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), D = Math.min(
    Math.max(
      // Final natural
      h + l,
      // Limite superior cuando la página es menor
      t + l * 2 + 2
    ),
    // Menor que el endPages
    T.length > 0 ? T[0] - 2 : n - 1
  ), $ = [
    ...d ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...y,
    // Comienza el ellipsis
    ...A > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...b(A, D),
    // Finaliza el ellipsis
    ...D < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...T,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], w = (x) => {
    switch (x) {
      case "first":
        return 1;
      case "previous":
        return h - 1;
      case "next":
        return h + 1;
      case "last":
        return n;
      default:
        return null;
    }
  };
  return {
    items: $.map((x) => typeof x == "number" ? {
      onClick: (N) => {
        m(N, x);
      },
      type: "page",
      page: x,
      selected: x === h,
      disabled: a,
      "aria-current": x === h ? "page" : void 0
    } : {
      onClick: (N) => {
        m(N, w(x));
      },
      type: x,
      page: w(x),
      selected: !1,
      disabled: a || x.indexOf("ellipsis") === -1 && (x === "next" || x === "last" ? h >= n : h <= 1)
    }),
    ...u
  };
}, Sn = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, wu = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), xu = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${wu[e]} página`, $i = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: r,
  ...a
}) => {
  const { items: i } = _u({ ...a });
  return /* @__PURE__ */ p(
    "nav",
    {
      className: ee({
        [Sn["c-pagination"]]: !r,
        [n]: n
      }),
      children: /* @__PURE__ */ p(
        "ul",
        {
          className: ee({
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
  defaultPage: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(wo, { ...e }),
  getItemAriaLabel: xu
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
      className: ee({
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
const en = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, mr = ut(), Tu = ({ children: e, defaultIndex: t, addClass: n, type: r, defaultStyle: a }) => {
  const [i, c] = Z(null), s = J([]), d = (v) => {
    s.current.includes(v) || (s.current = [...s.current, v]);
  }, f = (v) => c(s.current[v]), l = (v) => /:.*?:/g.test(v) ? i === v : s.current[v - 1] === i, u = () => [...s.current].reduce((v, m, b) => [...v, b + 1], []), h = (v) => s.current.indexOf(v) + 1;
  return X(() => {
    s.current.length !== 0 && (t !== void 0 ? f(t - 1) : c(s.current[0]));
  }, [t, s]), /* @__PURE__ */ p(
    mr.Provider,
    {
      value: {
        validation: l,
        onToggle: f,
        listId: u(),
        currentSection: h(i),
        getIndexById: h,
        addNewIdToSection: d,
        type: r
      },
      children: /* @__PURE__ */ p(
        "div",
        {
          className: ee("video-interpreter-ui-panel", {
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
const Mi = _t(
  ({ children: e, addClass: t, defaultStyle: n, __TYPE: r, ...a }, i) => {
    const { validation: c, addNewIdToSection: s, getIndexById: d, type: f } = Oe(mr), l = It(), u = c(l);
    return X(() => {
      l && s(l);
    }, [l]), /* @__PURE__ */ L(
      "section",
      {
        ref: i,
        role: f === "carrousel" ? "group" : "tabpanel",
        hidden: !u,
        "data-type": r,
        "aria-hidden": !u,
        "data-value": l,
        "aria-labelledby": `section-${l}`,
        className: ee({
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
const Eu = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), da = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Ou = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${Eu[e]} sección`, ki = ({
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
  const { validation: l, onToggle: u, listId: h, currentSection: v } = Oe(mr), m = J([]), b = Object.freeze({
    previous: v - 1,
    next: v + 1
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
  }, [T, A] = Z([]);
  X(() => {
    h.length !== 0 && A([
      // Botón para navegar a la sección anterior.
      ...t ? ["previous"] : [],
      // Lista de todas la secciones.
      ...h || [],
      // Botón para navegar a la siguiente sección.
      ...n ? ["next"] : []
    ]);
  }, [h]);
  const D = (x) => !m.current.includes(x) && x ? m.current = [...m.current, x] : m.current, $ = (x) => {
    const N = m.current[0], F = m.current[m.current.length - 1];
    if ((x.keyCode || x.which) === da.LEFT)
      if (x.target === N)
        F.focus();
      else {
        const W = m.current.indexOf(x.target) - 1;
        m.current[W].focus();
      }
    else if ((x.keyCode || x.which) === da.RIGHT)
      if (x.target === F)
        N.focus();
      else {
        const W = m.current.indexOf(x.target) + 1;
        m.current[W].focus();
      }
  }, w = (x) => {
    u(h.findIndex((N) => N === x)), c !== void 0 && c(x, h.length);
  }, I = T.map((x) => {
    let N = [...h];
    return N = N.pop(), typeof x == "number" ? {
      onClick: (F) => {
        w(x);
      },
      type: "section",
      section: x,
      selected: l(x),
      ref: D,
      onKeyDown: $
    } : {
      onClick: () => {
        w(b[x]);
      },
      type: x,
      section: b[x],
      selected: !1,
      disabled: x === "next" ? v >= N : v <= h[0]
    };
  });
  return X(() => {
    c !== void 0 && c(v, h.length);
  }, []), /* @__PURE__ */ L(bt, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: ee({
          [en["c-navigation"]]: !f,
          [s]: s
        }),
        children: e ? e(I) : I.map(({ section: x, type: N, selected: F, ...W }, Y) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: ee({
              [en["c-navigation__item"]]: !f
            }),
            children: N === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${x}`,
                role: "tab",
                tabIndex: `${F ? 0 : -1}`,
                "aria-selected": F,
                "data-class": "c-navigation__section",
                className: ee({
                  [en["c-navigation__section"]]: !f
                }),
                "aria-label": d(N, x, F),
                ...W
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: ee({
                  [en["c-navigation__button"]]: !f
                }),
                "aria-label": d(N, x, F),
                ...W,
                children: y[N] ? r ? /* @__PURE__ */ p(Ce, { path: y[N] }, N) : /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: y[N]
                  }
                ) }, N) : null
              }
            )
          },
          `navigation-section-item-${Y}`
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
  getItemAriaLabel: Ou
};
const Su = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = Oe(mr), a = (i) => {
    r(t - 1), n && n(i);
  };
  return Re.map(e, (i) => Pe(i, { ...i.props, onClick: a }));
};
Su.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const Cu = {
  "c-paper": "_c-paper_1sbf6_1"
}, Pu = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = J(null);
  return $a(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${Cu["c-paper"]} ${n ?? ""}`,
      ...r,
      children: e
    }
  );
};
Pu.propTypes = {
  children: o.oneOfType([
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  color: o.string
};
const Ru = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Du = (e) => {
  document.body.append(e);
}, Nu = (e) => {
  const t = J(null);
  X(() => {
    const r = document.querySelector(`#${e}`), a = r || Ru(e);
    return r || Du(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, fn = ({ children: e, id: t }) => {
  const n = Nu(t);
  return La(e, n);
};
fn.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const Au = "_row_1adiy_1", Iu = {
  row: Au
}, $u = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Iu.row} ${e ?? ""}`, ...t }));
$u.propTypes = {
  addClass: o.string
};
const Xn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
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
  }, h) => {
    const v = t || It(), m = ({ target: b }) => {
      f && f({ id: v, value: b.value });
    };
    return /* @__PURE__ */ L("label", { htmlFor: v, ...i && { className: `${i}` }, children: [
      /* @__PURE__ */ L("span", { className: `${!c && "u-sr-only"}`, children: [
        " ",
        r,
        " "
      ] }),
      /* @__PURE__ */ L("div", { className: Xn["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
        /* @__PURE__ */ L(
          "select",
          {
            id: v,
            ref: h,
            name: v,
            defaultValue: l,
            className: ee({
              [Xn["c-select"]]: !u
            }),
            "data-class": "c-select",
            onChange: m,
            disabled: s,
            required: d,
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
            addClass: ee({ [Xn["c-select__icon"]]: !u })
          }
        ) : /* @__PURE__ */ p(
          Ce,
          {
            "data-class": "c-select__icon",
            addClass: ee({ [Xn["c-select__icon"]]: !u }),
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
const Mu = ({ children: e, onAllSelect: t }) => {
  const [n, r] = Z([]), a = (c) => r([
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
Mu.propTypes = {
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
    const [u, h] = Z(!1), v = e || It(), m = ({ target: y }) => {
      if (h(y.checked), !!f) {
        if (y.checked) {
          f({ id: y.id, value: y.value });
          return;
        }
        f({ id: y.id, value: "" });
      }
    }, b = (y) => {
      ((y.keyCode || y.which) === fa.SPACE || (y.keyCode || y.which) === fa.ENTER) && h((T) => (f && f(T ? { id: v, value: "" } : { id: v, value: `${r}` }), !T));
    };
    return X(() => (s && h(!!s), () => {
      h(!1);
    }), [s]), /* @__PURE__ */ L(
      "label",
      {
        htmlFor: v,
        className: `${Vr["c-label"]} ${Vr[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ L("span", { className: `${!d && "u-sr-only"}`, children: [
            " ",
            a,
            " "
          ] }),
          /* @__PURE__ */ p(
            "input",
            {
              id: v,
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
const xo = ut(), ku = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = Z(0), c = (d) => i(d), s = (d) => a === d;
  return X(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(xo.Provider, { value: { validation: s, onToggle: c }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: He(e, ["TabList", "TabPanels"]) }) });
};
ku.propTypes = {
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
  const u = J(), { validation: h, onToggle: v } = Oe(xo), m = h(t), b = (y) => {
    s && s(y), v(t);
  };
  return X(() => (u.current && i(u.current), () => {
    u.current = null;
  }), [u]), /* @__PURE__ */ L(
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
      className: ee({
        [`${In["c-tab__button"]} u-flex`]: !d,
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
  const s = J([]), d = (u) => s.current = [...s.current, u], f = (u) => {
    const h = s.current[0], v = s.current[s.current.length - 1];
    if ((u.keyCode || u.which) === pa.LEFT)
      if (u.target === h)
        v.focus();
      else {
        const m = s.current.indexOf(u.target) - 1;
        s.current[m].focus();
      }
    else if ((u.keyCode || u.which) === pa.RIGHT)
      if (u.target === v)
        h.focus();
      else {
        const m = s.current.indexOf(u.target) + 1;
        s.current[m].focus();
      }
  }, l = Re.map(e, (u, h) => ct(u) ? Pe(u, {
    ...u.props,
    id: h,
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
      className: ee({
        [In["c-tab__list"]]: !a,
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
  const { validation: c } = Oe(xo), s = c(t);
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
      className: ee({
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
      className: ee({
        [In["c-tab__panels"]]: !n,
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
const Yr = {
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
  }, h) => {
    const v = e || It(), m = ({ target: b }) => {
      l && l({ id: v, value: b.value });
    };
    return /* @__PURE__ */ L(
      "label",
      {
        htmlFor: v,
        className: ee({
          [Yr["c-label"]]: !f,
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
              id: v,
              ref: h,
              defaultValue: t,
              disabled: s,
              required: d,
              placeholder: r,
              autoComplete: "off",
              onChange: m,
              "data-class": "c-textarea",
              className: ee({
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
const Lu = Ma(({ children: e, theme: t = {} }) => {
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
Lu.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var va = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, ha = typeof window < "u" && window.document && window.document.createElement ? zt.useLayoutEffect : zt.useEffect, We = "top", st = "bottom", lt = "right", Ue = "left", br = "auto", Bn = [We, st, lt, Ue], an = "start", $n = "end", ju = "clippingParents", zi = "viewport", _n = "popper", Fu = "reference", ga = /* @__PURE__ */ Bn.reduce(function(e, t) {
  return e.concat([t + "-" + an, t + "-" + $n]);
}, []), Wi = /* @__PURE__ */ [].concat(Bn, [br]).reduce(function(e, t) {
  return e.concat([t, t + "-" + an, t + "-" + $n]);
}, []), Bu = "beforeRead", qu = "read", Vu = "afterRead", Yu = "beforeMain", zu = "main", Wu = "afterMain", Uu = "beforeWrite", Hu = "write", Gu = "afterWrite", ao = [Bu, qu, Vu, Yu, zu, Wu, Uu, Hu, Gu];
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
function To(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Zu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !Je(i) || !yt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Xu(e) {
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
const Ku = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zu,
  effect: Xu,
  requires: ["computeStyles"]
};
function ht(e) {
  return e.split("-")[0];
}
var Ut = Math.max, lr = Math.min, sn = Math.round;
function io() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ui() {
  return !/^((?!chrome|android).)*safari/i.test(io());
}
function ln(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && Je(e) && (a = e.offsetWidth > 0 && sn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && sn(r.height) / e.offsetHeight || 1);
  var c = Ht(e) ? tt(e) : window, s = c.visualViewport, d = !Ui() && n, f = (r.left + (d && s ? s.offsetLeft : 0)) / a, l = (r.top + (d && s ? s.offsetTop : 0)) / i, u = r.width / a, h = r.height / i;
  return {
    width: u,
    height: h,
    top: l,
    right: f + u,
    bottom: l + h,
    left: f,
    x: f,
    y: l
  };
}
function Eo(e) {
  var t = ln(e), n = e.offsetWidth, r = e.offsetHeight;
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
function mt(e) {
  return tt(e).getComputedStyle(e);
}
function Qu(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
function $t(e) {
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
    (To(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $t(e)
  );
}
function ma(e) {
  return !Je(e) || // https://github.com/popperjs/popper-core/issues/837
  mt(e).position === "fixed" ? null : e.offsetParent;
}
function Ju(e) {
  var t = /firefox/i.test(io()), n = /Trident/i.test(io());
  if (n && Je(e)) {
    var r = mt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = yr(e);
  for (To(a) && (a = a.host); Je(a) && ["html", "body"].indexOf(yt(a)) < 0; ) {
    var i = mt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function qn(e) {
  for (var t = tt(e), n = ma(e); n && Qu(n) && mt(n).position === "static"; )
    n = ma(n);
  return n && (yt(n) === "html" || yt(n) === "body" && mt(n).position === "static") ? t : n || Ju(e) || t;
}
function Oo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cn(e, t, n) {
  return Ut(e, lr(t, n));
}
function ed(e, t, n) {
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
var td = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Zi(typeof t != "number" ? t : Xi(t, Bn));
};
function nd(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = ht(n.placement), d = Oo(s), f = [Ue, lt].indexOf(s) >= 0, l = f ? "height" : "width";
  if (!(!i || !c)) {
    var u = td(a.padding, n), h = Eo(i), v = d === "y" ? We : Ue, m = d === "y" ? st : lt, b = n.rects.reference[l] + n.rects.reference[d] - c[d] - n.rects.popper[l], y = c[d] - n.rects.reference[d], T = qn(i), A = T ? d === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, D = b / 2 - y / 2, $ = u[v], w = A - h[l] - u[m], I = A / 2 - h[l] / 2 + D, x = Cn($, I, w), N = d;
    n.modifiersData[r] = (t = {}, t[N] = x, t.centerOffset = x - I, t);
  }
}
function rd(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (Je(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Hi(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const od = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: nd,
  effect: rd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function cn(e) {
  return e.split("-")[1];
}
var ad = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function id(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: sn(n * a) / a || 0,
    y: sn(r * a) / a || 0
  };
}
function ba(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, d = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, u = e.isFixed, h = c.x, v = h === void 0 ? 0 : h, m = c.y, b = m === void 0 ? 0 : m, y = typeof l == "function" ? l({
    x: v,
    y: b
  }) : {
    x: v,
    y: b
  };
  v = y.x, b = y.y;
  var T = c.hasOwnProperty("x"), A = c.hasOwnProperty("y"), D = Ue, $ = We, w = window;
  if (f) {
    var I = qn(n), x = "clientHeight", N = "clientWidth";
    if (I === tt(n) && (I = $t(n), mt(I).position !== "static" && s === "absolute" && (x = "scrollHeight", N = "scrollWidth")), I = I, a === We || (a === Ue || a === lt) && i === $n) {
      $ = st;
      var F = u && I === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[x]
      );
      b -= F - r.height, b *= d ? 1 : -1;
    }
    if (a === Ue || (a === We || a === st) && i === $n) {
      D = lt;
      var W = u && I === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[N]
      );
      v -= W - r.width, v *= d ? 1 : -1;
    }
  }
  var Y = Object.assign({
    position: s
  }, f && ad), re = l === !0 ? id({
    x: v,
    y: b
  }, tt(n)) : {
    x: v,
    y: b
  };
  if (v = re.x, b = re.y, d) {
    var G;
    return Object.assign({}, Y, (G = {}, G[$] = A ? "0" : "", G[D] = T ? "0" : "", G.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + b + "px)" : "translate3d(" + v + "px, " + b + "px, 0)", G));
  }
  return Object.assign({}, Y, (t = {}, t[$] = A ? b + "px" : "", t[D] = T ? v + "px" : "", t.transform = "", t));
}
function sd(e) {
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
    variation: cn(t.placement),
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
const ld = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: sd,
  data: {}
};
var Kn = {
  passive: !0
};
function cd(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, c = r.resize, s = c === void 0 ? !0 : c, d = tt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, Kn);
  }), s && d.addEventListener("resize", n.update, Kn), function() {
    i && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Kn);
    }), s && d.removeEventListener("resize", n.update, Kn);
  };
}
const ud = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: cd,
  data: {}
};
var dd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function tr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return dd[t];
  });
}
var fd = {
  start: "end",
  end: "start"
};
function ya(e) {
  return e.replace(/start|end/g, function(t) {
    return fd[t];
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
  return ln($t(e)).left + So(e).scrollLeft;
}
function pd(e, t) {
  var n = tt(e), r = $t(e), a = n.visualViewport, i = r.clientWidth, c = r.clientHeight, s = 0, d = 0;
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
function vd(e) {
  var t, n = $t(e), r = So(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ut(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Ut(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Co(e), d = -r.scrollTop;
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
function Ki(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : Je(e) && Po(e) ? e : Ki(yr(e));
}
function Pn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ki(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = tt(r), c = a ? [i].concat(i.visualViewport || [], Po(r) ? r : []) : r, s = t.concat(c);
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
function hd(e, t) {
  var n = ln(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _a(e, t, n) {
  return t === zi ? so(pd(e, n)) : Ht(t) ? hd(t, n) : so(vd($t(e)));
}
function gd(e) {
  var t = Pn(yr(e)), n = ["absolute", "fixed"].indexOf(mt(e).position) >= 0, r = n && Je(e) ? qn(e) : e;
  return Ht(r) ? t.filter(function(a) {
    return Ht(a) && Hi(a, r) && yt(a) !== "body";
  }) : [];
}
function md(e, t, n, r) {
  var a = t === "clippingParents" ? gd(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(d, f) {
    var l = _a(e, f, r);
    return d.top = Ut(l.top, d.top), d.right = lr(l.right, d.right), d.bottom = lr(l.bottom, d.bottom), d.left = Ut(l.left, d.left), d;
  }, _a(e, c, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Qi(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? ht(r) : null, i = r ? cn(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, d;
  switch (a) {
    case We:
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
    case Ue:
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
  var f = a ? Oo(a) : null;
  if (f != null) {
    var l = f === "y" ? "height" : "width";
    switch (i) {
      case an:
        d[f] = d[f] - (t[l] / 2 - n[l] / 2);
        break;
      case $n:
        d[f] = d[f] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return d;
}
function Mn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, d = s === void 0 ? ju : s, f = n.rootBoundary, l = f === void 0 ? zi : f, u = n.elementContext, h = u === void 0 ? _n : u, v = n.altBoundary, m = v === void 0 ? !1 : v, b = n.padding, y = b === void 0 ? 0 : b, T = Zi(typeof y != "number" ? y : Xi(y, Bn)), A = h === _n ? Fu : _n, D = e.rects.popper, $ = e.elements[m ? A : h], w = md(Ht($) ? $ : $.contextElement || $t(e.elements.popper), d, l, c), I = ln(e.elements.reference), x = Qi({
    reference: I,
    element: D,
    strategy: "absolute",
    placement: a
  }), N = so(Object.assign({}, D, x)), F = h === _n ? N : I, W = {
    top: w.top - F.top + T.top,
    bottom: F.bottom - w.bottom + T.bottom,
    left: w.left - F.left + T.left,
    right: F.right - w.right + T.right
  }, Y = e.modifiersData.offset;
  if (h === _n && Y) {
    var re = Y[a];
    Object.keys(W).forEach(function(G) {
      var oe = [lt, st].indexOf(G) >= 0 ? 1 : -1, Q = [We, st].indexOf(G) >= 0 ? "y" : "x";
      W[G] += re[Q] * oe;
    });
  }
  return W;
}
function bd(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, d = n.allowedAutoPlacements, f = d === void 0 ? Wi : d, l = cn(r), u = l ? s ? ga : ga.filter(function(m) {
    return cn(m) === l;
  }) : Bn, h = u.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  h.length === 0 && (h = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var v = h.reduce(function(m, b) {
    return m[b] = Mn(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[ht(b)], m;
  }, {});
  return Object.keys(v).sort(function(m, b) {
    return v[m] - v[b];
  });
}
function yd(e) {
  if (ht(e) === br)
    return [];
  var t = tr(e);
  return [ya(e), t, ya(t)];
}
function _d(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, d = n.fallbackPlacements, f = n.padding, l = n.boundary, u = n.rootBoundary, h = n.altBoundary, v = n.flipVariations, m = v === void 0 ? !0 : v, b = n.allowedAutoPlacements, y = t.options.placement, T = ht(y), A = T === y, D = d || (A || !m ? [tr(y)] : yd(y)), $ = [y].concat(D).reduce(function(S, P) {
      return S.concat(ht(P) === br ? bd(t, {
        placement: P,
        boundary: l,
        rootBoundary: u,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : P);
    }, []), w = t.rects.reference, I = t.rects.popper, x = /* @__PURE__ */ new Map(), N = !0, F = $[0], W = 0; W < $.length; W++) {
      var Y = $[W], re = ht(Y), G = cn(Y) === an, oe = [We, st].indexOf(re) >= 0, Q = oe ? "width" : "height", te = Mn(t, {
        placement: Y,
        boundary: l,
        rootBoundary: u,
        altBoundary: h,
        padding: f
      }), H = oe ? G ? lt : Ue : G ? st : We;
      w[Q] > I[Q] && (H = tr(H));
      var pe = tr(H), le = [];
      if (i && le.push(te[re] <= 0), s && le.push(te[H] <= 0, te[pe] <= 0), le.every(function(S) {
        return S;
      })) {
        F = Y, N = !1;
        break;
      }
      x.set(Y, le);
    }
    if (N)
      for (var O = m ? 3 : 1, B = function(P) {
        var C = $.find(function(M) {
          var q = x.get(M);
          if (q)
            return q.slice(0, P).every(function(U) {
              return U;
            });
        });
        if (C)
          return F = C, "break";
      }, _ = O; _ > 0; _--) {
        var E = B(_);
        if (E === "break")
          break;
      }
    t.placement !== F && (t.modifiersData[r]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const wd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _d,
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
function xd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = Mn(t, {
    elementContext: "reference"
  }), s = Mn(t, {
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
const Td = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: xd
};
function Ed(e, t, n) {
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
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = Wi.reduce(function(l, u) {
    return l[u] = Ed(u, t.rects, i), l;
  }, {}), s = c[t.placement], d = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
}
const Sd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Od
};
function Cd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Qi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Pd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Cd,
  data: {}
};
function Rd(e) {
  return e === "x" ? "y" : "x";
}
function Dd(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, d = n.boundary, f = n.rootBoundary, l = n.altBoundary, u = n.padding, h = n.tether, v = h === void 0 ? !0 : h, m = n.tetherOffset, b = m === void 0 ? 0 : m, y = Mn(t, {
    boundary: d,
    rootBoundary: f,
    padding: u,
    altBoundary: l
  }), T = ht(t.placement), A = cn(t.placement), D = !A, $ = Oo(T), w = Rd($), I = t.modifiersData.popperOffsets, x = t.rects.reference, N = t.rects.popper, F = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, W = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), Y = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, re = {
    x: 0,
    y: 0
  };
  if (I) {
    if (i) {
      var G, oe = $ === "y" ? We : Ue, Q = $ === "y" ? st : lt, te = $ === "y" ? "height" : "width", H = I[$], pe = H + y[oe], le = H - y[Q], O = v ? -N[te] / 2 : 0, B = A === an ? x[te] : N[te], _ = A === an ? -N[te] : -x[te], E = t.elements.arrow, S = v && E ? Eo(E) : {
        width: 0,
        height: 0
      }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gi(), C = P[oe], M = P[Q], q = Cn(0, x[te], S[te]), U = D ? x[te] / 2 - O - q - C - W.mainAxis : B - q - C - W.mainAxis, V = D ? -x[te] / 2 + O + q + M + W.mainAxis : _ + q + M + W.mainAxis, j = t.elements.arrow && qn(t.elements.arrow), R = j ? $ === "y" ? j.clientTop || 0 : j.clientLeft || 0 : 0, K = (G = Y == null ? void 0 : Y[$]) != null ? G : 0, ue = H + U - K - R, ye = H + V - K, xe = Cn(v ? lr(pe, ue) : pe, H, v ? Ut(le, ye) : le);
      I[$] = xe, re[$] = xe - H;
    }
    if (s) {
      var je, dt = $ === "x" ? We : Ue, Ze = $ === "x" ? st : lt, Te = I[w], qe = w === "y" ? "height" : "width", Xe = Te + y[dt], Mt = Te - y[Ze], St = [We, Ue].indexOf(T) !== -1, kt = (je = Y == null ? void 0 : Y[w]) != null ? je : 0, Lt = St ? Xe : Te - x[qe] - N[qe] - kt + W.altAxis, Fe = St ? Te + x[qe] + N[qe] - kt - W.altAxis : Mt, ft = v && St ? ed(Lt, Te, Fe) : Cn(v ? Lt : Xe, Te, v ? Fe : Mt);
      I[w] = ft, re[w] = ft - Te;
    }
    t.modifiersData[r] = re;
  }
}
const Nd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Dd,
  requiresIfExists: ["offset"]
};
function Ad(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Id(e) {
  return e === tt(e) || !Je(e) ? So(e) : Ad(e);
}
function $d(e) {
  var t = e.getBoundingClientRect(), n = sn(t.width) / e.offsetWidth || 1, r = sn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Md(e, t, n) {
  n === void 0 && (n = !1);
  var r = Je(t), a = Je(t) && $d(t), i = $t(t), c = ln(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((yt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Po(i)) && (s = Id(t)), Je(t) ? (d = ln(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : i && (d.x = Co(i))), {
    x: c.left + s.scrollLeft - d.x,
    y: c.top + s.scrollTop - d.y,
    width: c.width,
    height: c.height
  };
}
function kd(e) {
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
function Ld(e) {
  var t = kd(e);
  return ao.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function jd(e) {
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
var Yt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Fd = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ta = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Bd(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Ta).filter(function(n, r, a) {
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Ta.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(r) {
        e.find(function(a) {
          return a.name === r;
        }) == null && console.error(Pt(Fd, String(t.name), r, r));
      });
    });
  });
}
function qd(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var a = t(r);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function Vd(e) {
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
var Ea = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Yd = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Oa = {
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
function zd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Oa : a;
  return function(s, d, f) {
    f === void 0 && (f = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Oa, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: d
      },
      attributes: {},
      styles: {}
    }, u = [], h = !1, v = {
      state: l,
      setOptions: function(T) {
        var A = typeof T == "function" ? T(l.options) : T;
        b(), l.options = Object.assign({}, i, l.options, A), l.scrollParents = {
          reference: Ht(s) ? Pn(s) : s.contextElement ? Pn(s.contextElement) : [],
          popper: Pn(d)
        };
        var D = Ld(Vd([].concat(r, l.options.modifiers)));
        if (l.orderedModifiers = D.filter(function(Y) {
          return Y.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = qd([].concat(D, l.options.modifiers), function(Y) {
            var re = Y.name;
            return re;
          });
          if (Bd($), ht(l.options.placement) === br) {
            var w = l.orderedModifiers.find(function(Y) {
              var re = Y.name;
              return re === "flip";
            });
            w || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var I = mt(d), x = I.marginTop, N = I.marginRight, F = I.marginBottom, W = I.marginLeft;
          [x, N, F, W].some(function(Y) {
            return parseFloat(Y);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return m(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var T = l.elements, A = T.reference, D = T.popper;
          if (!Sa(A, D)) {
            process.env.NODE_ENV !== "production" && console.error(Ea);
            return;
          }
          l.rects = {
            reference: Md(A, qn(D), l.options.strategy === "fixed"),
            popper: Eo(D)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(Y) {
            return l.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var $ = 0, w = 0; w < l.orderedModifiers.length; w++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(Yd);
              break;
            }
            if (l.reset === !0) {
              l.reset = !1, w = -1;
              continue;
            }
            var I = l.orderedModifiers[w], x = I.fn, N = I.options, F = N === void 0 ? {} : N, W = I.name;
            typeof x == "function" && (l = x({
              state: l,
              options: F,
              name: W,
              instance: v
            }) || l);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: jd(function() {
        return new Promise(function(y) {
          v.forceUpdate(), y(l);
        });
      }),
      destroy: function() {
        b(), h = !0;
      }
    };
    if (!Sa(s, d))
      return process.env.NODE_ENV !== "production" && console.error(Ea), v;
    v.setOptions(f).then(function(y) {
      !h && f.onFirstUpdate && f.onFirstUpdate(y);
    });
    function m() {
      l.orderedModifiers.forEach(function(y) {
        var T = y.name, A = y.options, D = A === void 0 ? {} : A, $ = y.effect;
        if (typeof $ == "function") {
          var w = $({
            state: l,
            name: T,
            instance: v,
            options: D
          }), I = function() {
          };
          u.push(w || I);
        }
      });
    }
    function b() {
      u.forEach(function(y) {
        return y();
      }), u = [];
    }
    return v;
  };
}
var Wd = [ud, Pd, ld, Ku, Sd, wd, Nd, od, Td], Ud = /* @__PURE__ */ zd({
  defaultModifiers: Wd
}), Hd = typeof Element < "u", Gd = typeof Map == "function", Zd = typeof Set == "function", Xd = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function nr(e, t) {
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
        if (!nr(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (Gd && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!nr(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Zd && e instanceof Set && t instanceof Set) {
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
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !nr(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Kd = function(t, n) {
  try {
    return nr(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, Qd = [], _r = function(t, n, r) {
  r === void 0 && (r = {});
  var a = zt.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || Qd
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
      fn: function(v) {
        var m = v.state, b = Object.keys(m.elements);
        xs.flushSync(function() {
          d({
            styles: va(b.map(function(y) {
              return [y, m.styles[y] || {}];
            })),
            attributes: va(b.map(function(y) {
              return [y, m.attributes[y]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), l = zt.useMemo(function() {
    var h = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Kd(a.current, h) ? a.current || h : (a.current = h, h);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), u = zt.useRef();
  return ha(function() {
    u.current && u.current.setOptions(l);
  }, [l]), ha(function() {
    if (!(t == null || n == null)) {
      var h = r.createPopper || Ud, v = h(t, n, l);
      return u.current = v, function() {
        v.destroy(), u.current = null;
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
  isDisabled: s,
  isVisible: d,
  onClick: f
}) => {
  const [l, u] = Z(!1), h = J(null), v = J(null), m = t || It(), b = (w) => u(!1), y = (w) => {
    u(!l), l && document.activeElement === h.current && !d && setTimeout(() => {
      u((I) => !I);
    }, 100), f && f(w);
  }, T = (w) => {
    (w.keyCode | w.which) === Jd.ESC && l && u(!l);
  }, A = Re.map(e, (w) => ct(w) ? Pe(w, {
    ...w.props,
    "aria-describedby": t,
    ref: h,
    onClick: y,
    "data-open": l,
    ...d ? {} : { onBlur: b, onKeyDown: T }
  }) : null), { styles: D, attributes: $ } = _r(
    h.current,
    v.current,
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
    A,
    /* @__PURE__ */ p(fn, { id: "js-toggletip-portal", children: /* @__PURE__ */ L(
      "div",
      {
        id: m,
        ref: v,
        role: "status",
        className: `${zr["c-toggletip"]} ${l && zr["c-toggletip--active"]} ${a ?? ""}`,
        style: D.popper,
        ...$.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: zr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: D.arrow
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
const Wr = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, ef = Object.freeze({
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
  const [d, f] = Z(!1), l = J(null), u = J(null), h = J(), v = t || It(), m = (x) => {
    d || f(!d);
  }, b = (x) => f(!1), y = (x) => {
    (!d || document.activeElement !== l.current) && f(!d);
  }, T = () => {
    window.clearTimeout(h.current);
  }, A = (x) => {
    h.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, D = (x) => {
    (x.keyCode | x.which) === ef.ESC && d && f(!d);
  }, $ = Re.map(e, (x) => ct(x) ? Pe(x, {
    ...x.props,
    "aria-describedby": t,
    ref: l,
    onFocus: m,
    onBlur: b,
    onMouseEnter: y,
    onMouseLeave: A,
    onKeyDown: D
  }) : null), { styles: w, attributes: I } = _r(
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
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(bt, { children: e }) : /* @__PURE__ */ L(bt, { children: [
    $,
    /* @__PURE__ */ p(fn, { id: "js-tooltip-portal", children: /* @__PURE__ */ L(
      "div",
      {
        id: v,
        ref: u,
        role: "tooltip",
        "data-open": d,
        onMouseEnter: T,
        onMouseLeave: A,
        className: `${Wr["c-tooltip"]} ${d && Wr["c-tooltip--active"]} ${a ?? ""}`,
        style: w.popper,
        ...I.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Wr["c-tooltip__arrow"],
              "data-popper-arrow": !0,
              style: w.arrow
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
  defaultStyle: s
}) => {
  const [d, f] = Z(null), l = [
    ...e.reduce(
      (y, T, A) => [...y, { id: A + 1, ...T }],
      []
    )
  ], u = (y) => l.filter((T) => T.id === y).reduce((T, A) => ({ ...T, ...A }), {}), h = (y) => {
    const T = document.querySelector("#root");
    T.inert = y;
  }, v = () => {
    f((y) => y < l.length ? y + 1 : y);
  }, m = () => {
    f((y) => y > 0 + 1 ? y - 1 : y);
  }, b = () => {
    f(null), n(!t), h(!1), r && r.current.focus();
  };
  return X(() => {
    t && (f(l.shift().id), h(!0));
  }, [t]), /* @__PURE__ */ p(
    Ro.Provider,
    {
      value: {
        isOpen: t,
        lastId: l.length,
        ...u(d),
        methods: {
          onNext: v,
          onPrev: m,
          onClose: b
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(fn, { id: "js-tour", children: t && /* @__PURE__ */ L(bt, { children: [
        /* @__PURE__ */ p(tf, {}),
        /* @__PURE__ */ p(
          ns,
          {
            ariaAttributes: c,
            hideCloseButton: a,
            hideBackButton: i
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
  ariaAttributes: o.shape({
    role: o.string,
    tabIndex: o.oneOfType([o.string, o.number]),
    "aria-label": o.string,
    "aria-modal": o.oneOfType([o.string, o.bool])
  })
};
const At = {
  "c-layout": "_c-layout_cq7p6_1",
  "c-tour-content": "_c-tour-content_cq7p6_9",
  "c-tour-progress": "_c-tour-progress_cq7p6_28",
  "c-tour-progress-bar": "_c-tour-progress-bar_cq7p6_36",
  "c-tour-button-container": "_c-tour-button-container_cq7p6_47",
  "c-tour-help": "_c-tour-help_cq7p6_89",
  "c-tour-number": "_c-tour-number_cq7p6_99"
}, ns = ({
  ariaAttributes: e,
  hideCloseButton: t,
  hideBackButton: n
}) => {
  const {
    isOpen: r,
    lastId: a,
    methods: i,
    id: c,
    target: s,
    content: d,
    placement: f,
    distance: l,
    elementClass: u,
    defaultStyle: h
  } = Oe(Ro), v = J(), { onClose: m, onPrev: b, onNext: y } = i, { styles: T, attributes: A } = _r(
    document.querySelector(s),
    v.current,
    {
      placement: f,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, l || 8]
          }
        },
        {
          name: "computeStyles",
          options: {
            adaptive: !1
          }
        },
        { name: "eventListeners", enabled: r }
      ]
    }
  ), D = () => ct(d) ? d : ws("p", { className: At["tour-description"] }, [
    d
  ]), $ = () => {
    v.current.style.setProperty("--speed-movement", "0.8s"), y();
  };
  return /* @__PURE__ */ L(bt, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: ee({ [At["c-layout"]]: !h }),
        "data-class": "c-layout"
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        id: `unique-id-tour-element-${c}`,
        ref: v,
        style: T.popper,
        className: ee({
          [At["c-tour-content"]]: !h,
          "animate__animated animate__fadeIn animate__faster": r,
          [u]: u
        }),
        ...e,
        ...A.popper,
        children: [
          /* @__PURE__ */ L("span", { className: "u-sr-only", children: [
            "Parte ",
            c,
            " de ",
            a,
            "."
          ] }),
          /* @__PURE__ */ p(
            "div",
            {
              "aria-hidden": !0,
              className: ee({ [At["c-tour-progress"]]: !h }),
              "data-class": "c-tour-progress",
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: At["c-tour-progress-bar"],
                  "data-class": "c-tour-progress__bar",
                  style: { transform: `scaleX(${c / a})` }
                }
              )
            }
          ),
          D(),
          /* @__PURE__ */ L(
            "div",
            {
              className: ee({
                [At["c-tour-button-container"]]: !h
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
                    icon: { path: "/assets/icons/svg/close.svg", size: "big" },
                    ...h && { defaultStyle: h }
                  }
                ),
                !n && /* @__PURE__ */ p(
                  Wt,
                  {
                    disabled: c === 1,
                    hasAriaLabel: !0,
                    label: "Anterior",
                    "data-class": "c-button__before",
                    onClick: b,
                    icon: { path: "/assets/icons/svg/navigate_before.svg", size: "big" },
                    ...h && { defaultStyle: h }
                  }
                ),
                /* @__PURE__ */ p(
                  Wt,
                  {
                    disabled: c === a,
                    hasAriaLabel: !0,
                    label: "Siguiente",
                    "data-class": "c-button__after",
                    onClick: $,
                    icon: { path: "/assets/icons/svg/navigate_next.svg", size: "big" },
                    ...h && { defaultStyle: h }
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
  hideBackButton: o.bool
};
const tf = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r, defaultStyle: a } = Oe(Ro), [i, c] = Z({}), s = () => {
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
  return X(() => (n && s(), () => {
    c({});
  }), [n]), X(() => {
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
      className: ee({
        [At["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [r]: r
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: At["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, nf = "_active_i7dnv_90", rf = "_iconPulse_i7dnv_1", ge = {
  "c-vid": "_c-vid_i7dnv_1",
  "c-vid__caption": "_c-vid__caption_i7dnv_19",
  "c-vid__container": "_c-vid__container_i7dnv_24",
  "c-vid__video": "_c-vid__video_i7dnv_44",
  "no-captions": "_no-captions_i7dnv_56",
  "c-vid__wrapper": "_c-vid__wrapper_i7dnv_60",
  "c-vid__icon-container": "_c-vid__icon-container_i7dnv_70",
  "c-vid__icon": "_c-vid__icon_i7dnv_70",
  active: nf,
  iconPulse: rf,
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
  const [s, d] = Z({
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
  }), [u, h] = Z({
    state: !1,
    label: "Reproducir video"
  }), [v, m] = Z({
    state: !0,
    label: "Volumen"
  }), [b, y] = Z(100), [T, A] = Z({
    state: !1,
    label: "Ver en pantalla completa"
  }), [D, $] = Z(!1), [w, I] = Z(100), x = J(null), N = J(null), F = J(null), W = J(null), Y = J(null), re = J(null), G = J(null), oe = J(null), [Q, te] = Z(!1), H = (j) => {
    j.classList.add(`${ge.active}`), setTimeout(() => {
      j.classList.remove(`${ge.active}`);
    }, 650);
  };
  function pe() {
    const j = N.current;
    u.state ? (j.pause(), h({
      state: !1,
      label: "Reproducir video"
    })) : (j.play(), h({
      state: !0,
      label: "Pausar video"
    })), H(re.current);
  }
  function le() {
    const j = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, R = x.current;
    j ? (A({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (A({
      state: !0,
      label: "Salir de pantalla completa"
    }), R.requestFullscreen ? R.requestFullscreen() : R.mozRequestFullScreen ? R.mozRequestFullScreen() : R.webkitRequestFullScreen ? R.webkitRequestFullScreen() : R.msRequestFullscreen && R.msRequestFullscreen());
  }
  function O(j) {
    const R = parseInt(j, 10), K = R >= 3600 ? Math.floor(R / 3600) : 0, ue = Math.floor((R - K * 3600) / 60), ye = R - K * 3600 - ue * 60, xe = S(E(K)), je = S(E(ue)), dt = S(E(ye));
    return {
      hours: xe,
      minutes: je,
      seconds: dt
    };
  }
  function B(j) {
    const R = _(j.duration), K = _(j.currentTime);
    l({
      totalSeconds: j.currentTime,
      hours: parseInt(O(j.currentTime).hours),
      minutes: parseInt(O(j.currentTime).minutes),
      seconds: parseInt(O(j.currentTime).seconds),
      string: K
    }), d({
      totalSeconds: Math.floor(j.duration),
      hours: parseInt(O(j.duration).hours),
      minutes: parseInt(O(j.duration).minutes),
      seconds: parseInt(O(j.duration).seconds),
      string: R
    });
  }
  function _(j) {
    return parseInt(j, 10) <= 3600 ? `${O(j).minutes}:${O(j).seconds}` : `${O(j).hours}:${O(j).minutes}:${O(j).seconds}`;
  }
  function E(j) {
    return j < 10 ? j = "0" + j : j;
  }
  function S(j) {
    return isNaN(j) ? "00" : j;
  }
  function P(j) {
    const R = W.current, K = N.current, ye = j.nativeEvent.offsetX / R.offsetWidth * K.duration;
    K.currentTime = ye;
  }
  function C(j) {
    const R = N.current, K = j.target.value, ue = K / 100;
    I(K), y(K), R.volume = ue, v.state || m({
      state: !0,
      label: "Volumen"
    });
  }
  const M = () => {
    if (v.state) {
      m({
        state: !1,
        label: "Mutear video"
      });
      const j = N.current, R = 0, K = R;
      I(R), j.volume = K;
    } else {
      m({
        state: !0,
        label: "Volumen"
      });
      const j = N.current, R = b, K = R / 100;
      I(R), j.volume = K;
    }
  }, q = function(j) {
    (j.keyCode || j.which) === 32 && pe();
  }, U = function(j) {
    const R = Math.floor(W.current.getAttribute("aria-valuenow"));
    if (document.activeElement === Y.current)
      return null;
    if ((j.keyCode || j.which) === 37) {
      const K = R - 5;
      K >= 0 ? N.current.currentTime = K : N.current.currentTime = 0, H(oe.current);
    }
    if ((j.keyCode || j.which) === 39) {
      const K = R + 5;
      K >= N.current.duration ? N.current.currentTime = N.current.duration : N.current.currentTime = K, H(G.current);
    }
  }, V = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return X(() => {
    const j = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(j, "caption") && te(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(j, "volume") && I(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), X(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: Q, volume: w }));
  }, [Q, w]), X(() => (F.current ? F.current.addEventListener("error", () => {
    $(!0);
  }) : $(!0), e.caption && $(!1), () => {
    F.current && F.current.removeEventListener("error", () => {
      $(!0);
    });
  }), [e.caption]), /* @__PURE__ */ L("figure", { className: `${ge["c-vid"]} ${a}`, style: { maxWidth: `${t}px` }, onKeyDown: (j) => U(j), ...c, children: [
    /* @__PURE__ */ L("div", { className: `${ge["c-vid__container"]} ${a}`, ref: x, children: [
      /* @__PURE__ */ L("div", { className: ge["c-vid__wrapper"], children: [
        /* @__PURE__ */ L(
          "video",
          {
            ref: N,
            onTimeUpdate: (j) => B(j.target),
            onLoadedData: (j) => B(j.target),
            onClick: pe,
            className: `${ge["c-vid__video"]} ${Q ? "" : ge["no-captions"]}`,
            ...i && { poster: i },
            children: [
              /* @__PURE__ */ p("source", { src: e.video }),
              e.caption ? /* @__PURE__ */ p("track", { ref: F, src: e.caption, label: "Subtítulos en español", kind: "subtitles", srcLang: "es", default: !0 }) : ""
            ]
          }
        ),
        /* @__PURE__ */ L("div", { className: ge["c-vid__icon-container"], children: [
          /* @__PURE__ */ p("div", { ref: oe, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: re, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: G, className: ge["c-vid__icon"], children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
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
          "aria-valuetext": V(),
          tabIndex: "0",
          onKeyDown: q,
          className: ge["c-vid__progress-bg"],
          onClick: P,
          ref: W,
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
            className: `${ge["c-vid__button"]} tour`,
            "aria-label": u.label,
            onClick: pe,
            "data-description": "Este botón reproduce el video",
            children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            className: `${ge["c-vid__button"]} tour`,
            "aria-label": v.label,
            "data-description": "Este botón controla el volumen",
            onClick: M,
            children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: v.state ? /* @__PURE__ */ p("path", { id: "volume_on", d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z" }) : /* @__PURE__ */ p("path", { id: "volume_off", d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z" }) }) })
          }
        ),
        /* @__PURE__ */ L("label", { className: ge["c-vid__volume"], htmlFor: "volumeControl", children: [
          /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: ge["c-vid__volume-item"],
              ref: Y,
              id: "volumeControl",
              type: "range",
              min: "0",
              max: "100",
              step: "5",
              value: w,
              onChange: C,
              "aria-valuetext": `${w}%`
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
            "aria-pressed": D ? void 0 : Q,
            onClick: () => te(!Q),
            "aria-label": "Subtítulos",
            className: `${ge["c-vid__button"]} ${ge["c-vid__subtitles"]}`,
            children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: D ? /* @__PURE__ */ p("path", { id: "closed_caption_disabled", d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z" }) : /* @__PURE__ */ p("path", { id: "closed_caption", d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z" }) }) })
          }
        ),
        /* @__PURE__ */ p("button", { className: ge["c-vid__button"], "aria-label": T.label, onClick: le, children: /* @__PURE__ */ p(Ce, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: T.state ? /* @__PURE__ */ p("path", { id: "fullscreen_exit", d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z" }) : /* @__PURE__ */ p("path", { id: "fullscreen", d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z" }) }) }) })
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
var kn = {}, of = {
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
const af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Ca,
  default: Ca
}, Symbol.toStringTag, { value: "Module" })), sf = /* @__PURE__ */ Ts(af);
var we = {}, wt = {};
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
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
Gt.browserPrefixToKey = ss;
Gt.browserPrefixToStyle = pf;
Gt.default = void 0;
Gt.getPrefix = is;
var Ur = ["Moz", "Webkit", "O", "ms"];
function is() {
  var e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var r = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!r || n in r)
    return "";
  for (var a = 0; a < Ur.length; a++)
    if (ss(n, Ur[a]) in r)
      return Ur[a];
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
Gt.default = hf;
function lo(e) {
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lo(e);
}
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.addClassName = fs;
we.addEvent = bf;
we.addUserSelectStyles = Rf;
we.createCSSTransform = Of;
we.createSVGTransform = Sf;
we.getTouch = Cf;
we.getTouchIdentifier = Pf;
we.getTranslation = Do;
we.innerHeight = xf;
we.innerWidth = Tf;
we.matchesSelector = ds;
we.matchesSelectorAndParentsTo = mf;
we.offsetXYFromParent = Ef;
we.outerHeight = _f;
we.outerWidth = wf;
we.removeClassName = ps;
we.removeEvent = yf;
we.removeUserSelectStyles = Df;
var et = wt, Pa = gf(Gt);
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
  if (e === null || lo(e) !== "object" && typeof e != "function")
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
var Qn = "";
function ds(e, t) {
  return Qn || (Qn = (0, et.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, et.isFunction)(e[n]);
  })), (0, et.isFunction)(e[Qn]) ? e[Qn](t) : !1;
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
  return t += (0, et.int)(n.borderTopWidth), t += (0, et.int)(n.borderBottomWidth), t;
}
function wf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, et.int)(n.borderLeftWidth), t += (0, et.int)(n.borderRightWidth), t;
}
function xf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingTop), t -= (0, et.int)(n.paddingBottom), t;
}
function Tf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, et.int)(n.paddingLeft), t -= (0, et.int)(n.paddingRight), t;
}
function Ef(e, t, n) {
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
  var n = Do(e, t, "px");
  return us({}, (0, Pa.browserPrefixToKey)("transform", Pa.default), n);
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
  return e.targetTouches && (0, et.findInArray)(e.targetTouches, function(n) {
    return t === n.identifier;
  }) || e.changedTouches && (0, et.findInArray)(e.changedTouches, function(n) {
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
xt.canDragX = If;
xt.canDragY = $f;
xt.createCoreData = kf;
xt.createDraggableData = Lf;
xt.getBoundPosition = Nf;
xt.getControlPosition = Mf;
xt.snapToGrid = Af;
var Qe = wt, tn = we;
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
      right: (0, tn.innerWidth)(d) - (0, tn.outerWidth)(a) - a.offsetLeft + (0, Qe.int)(l.paddingRight) - (0, Qe.int)(f.marginRight),
      bottom: (0, tn.innerHeight)(d) - (0, tn.outerHeight)(a) - a.offsetTop + (0, Qe.int)(l.paddingBottom) - (0, Qe.int)(f.marginBottom)
    };
  }
  return (0, Qe.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Qe.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Qe.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Qe.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Af(e, t, n) {
  var r = Math.round(t / e[0]) * e[0], a = Math.round(n / e[1]) * e[1];
  return [r, a];
}
function If(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function $f(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Mf(e, t, n) {
  var r = typeof t == "number" ? (0, tn.getTouch)(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  var a = No(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, tn.offsetXYFromParent)(r || e, i, n.props.scale);
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
var wr = {}, xr = {};
Object.defineProperty(xr, "__esModule", {
  value: !0
});
xr.default = Ff;
function Ff() {
}
function cr(e) {
  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cr(e);
}
Object.defineProperty(wr, "__esModule", {
  value: !0
});
wr.default = void 0;
var Hr = qf(ke), Ke = Ao(o), Bf = Ao(ka), $e = we, Rt = xt, Gr = wt, wn = Ao(xr);
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
  if (e === null || cr(e) !== "object" && typeof e != "function")
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
  return Wf(e) || zf(e, t) || Yf(e, t) || Vf();
}
function Vf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yf(e, t) {
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
function Aa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hf(e, t, n) {
  return t && Aa(e.prototype, t), n && Aa(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Gf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function Zf(e) {
  var t = Kf();
  return function() {
    var r = ur(e), a;
    if (t) {
      var i = ur(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Xf(this, a);
  };
}
function Xf(e, t) {
  if (t && (cr(t) === "object" || typeof t == "function"))
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
function ur(e) {
  return ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ur(e);
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
}, Dt = vt.mouse, Tr = /* @__PURE__ */ function(e) {
  Gf(n, e);
  var t = Zf(n);
  function n() {
    var r;
    Uf(this, n);
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
        var u = (0, Rt.getControlPosition)(s, l, Me(r));
        if (u != null) {
          var h = u.x, v = u.y, m = (0, Rt.createCoreData)(Me(r), h, v);
          (0, wn.default)("DraggableCore: handleDragStart: %j", m), (0, wn.default)("calling", r.props.onStart);
          var b = r.props.onStart(s, m);
          b === !1 || r.mounted === !1 || (r.props.enableUserSelectHack && (0, $e.addUserSelectStyles)(f), r.setState({
            dragging: !0,
            lastX: h,
            lastY: v
          }), (0, $e.addEvent)(f, Dt.move, r.handleDrag), (0, $e.addEvent)(f, Dt.stop, r.handleDragStop));
        }
      }
    }), at(Me(r), "handleDrag", function(s) {
      var d = (0, Rt.getControlPosition)(s, r.state.touchIdentifier, Me(r));
      if (d != null) {
        var f = d.x, l = d.y;
        if (Array.isArray(r.props.grid)) {
          var u = f - r.state.lastX, h = l - r.state.lastY, v = (0, Rt.snapToGrid)(r.props.grid, u, h), m = Da(v, 2);
          if (u = m[0], h = m[1], !u && !h)
            return;
          f = r.state.lastX + u, l = r.state.lastY + h;
        }
        var b = (0, Rt.createCoreData)(Me(r), f, l);
        (0, wn.default)("DraggableCore: handleDrag: %j", b);
        var y = r.props.onDrag(s, b);
        if (y === !1 || r.mounted === !1) {
          try {
            r.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var T = document.createEvent("MouseEvents");
            T.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.handleDragStop(T);
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
        var d = (0, Rt.getControlPosition)(s, r.state.touchIdentifier, Me(r));
        if (d != null) {
          var f = d.x, l = d.y;
          if (Array.isArray(r.props.grid)) {
            var u = f - r.state.lastX || 0, h = l - r.state.lastY || 0, v = (0, Rt.snapToGrid)(r.props.grid, u, h), m = Da(v, 2);
            u = m[0], h = m[1], f = r.state.lastX + u, l = r.state.lastY + h;
          }
          var b = (0, Rt.createCoreData)(Me(r), f, l), y = r.props.onStop(s, b);
          if (y === !1 || r.mounted === !1)
            return !1;
          var T = r.findDOMNode();
          T && r.props.enableUserSelectHack && (0, $e.removeUserSelectStyles)(T.ownerDocument), (0, wn.default)("DraggableCore: handleDragStop: %j", b), r.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), T && ((0, wn.default)("DraggableCore: Removing handlers"), (0, $e.removeEvent)(T.ownerDocument, Dt.move, r.handleDrag), (0, $e.removeEvent)(T.ownerDocument, Dt.stop, r.handleDragStop));
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
  return Hf(n, [{
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
      return (a = this.props) !== null && a !== void 0 && a.nodeRef ? (i = this.props) === null || i === void 0 || (c = i.nodeRef) === null || c === void 0 ? void 0 : c.current : Bf.default.findDOMNode(this);
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
wr.default = Tr;
at(Tr, "displayName", "DraggableCore");
at(Tr, "propTypes", {
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
at(Tr, "defaultProps", {
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
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(E) {
      return typeof E;
    } : function(E) {
      return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
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
  var n = m(ke), r = h(o), a = h(ka), i = h(sf), c = we, s = xt, d = wt, f = h(wr), l = h(xr), u = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function h(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function v(_) {
    if (typeof WeakMap != "function")
      return null;
    var E = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap();
    return (v = function(C) {
      return C ? S : E;
    })(_);
  }
  function m(_, E) {
    if (!E && _ && _.__esModule)
      return _;
    if (_ === null || t(_) !== "object" && typeof _ != "function")
      return { default: _ };
    var S = v(E);
    if (S && S.has(_))
      return S.get(_);
    var P = {}, C = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var M in _)
      if (M !== "default" && Object.prototype.hasOwnProperty.call(_, M)) {
        var q = C ? Object.getOwnPropertyDescriptor(_, M) : null;
        q && (q.get || q.set) ? Object.defineProperty(P, M, q) : P[M] = _[M];
      }
    return P.default = _, S && S.set(_, P), P;
  }
  function b() {
    return b = Object.assign || function(_) {
      for (var E = 1; E < arguments.length; E++) {
        var S = arguments[E];
        for (var P in S)
          Object.prototype.hasOwnProperty.call(S, P) && (_[P] = S[P]);
      }
      return _;
    }, b.apply(this, arguments);
  }
  function y(_, E) {
    if (_ == null)
      return {};
    var S = T(_, E), P, C;
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(_);
      for (C = 0; C < M.length; C++)
        P = M[C], !(E.indexOf(P) >= 0) && Object.prototype.propertyIsEnumerable.call(_, P) && (S[P] = _[P]);
    }
    return S;
  }
  function T(_, E) {
    if (_ == null)
      return {};
    var S = {}, P = Object.keys(_), C, M;
    for (M = 0; M < P.length; M++)
      C = P[M], !(E.indexOf(C) >= 0) && (S[C] = _[C]);
    return S;
  }
  function A(_, E) {
    var S = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(_);
      E && (P = P.filter(function(C) {
        return Object.getOwnPropertyDescriptor(_, C).enumerable;
      })), S.push.apply(S, P);
    }
    return S;
  }
  function D(_) {
    for (var E = 1; E < arguments.length; E++) {
      var S = arguments[E] != null ? arguments[E] : {};
      E % 2 ? A(Object(S), !0).forEach(function(P) {
        O(_, P, S[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(S)) : A(Object(S)).forEach(function(P) {
        Object.defineProperty(_, P, Object.getOwnPropertyDescriptor(S, P));
      });
    }
    return _;
  }
  function $(_, E) {
    return F(_) || N(_, E) || I(_, E) || w();
  }
  function w() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function I(_, E) {
    if (_) {
      if (typeof _ == "string")
        return x(_, E);
      var S = Object.prototype.toString.call(_).slice(8, -1);
      if (S === "Object" && _.constructor && (S = _.constructor.name), S === "Map" || S === "Set")
        return Array.from(_);
      if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))
        return x(_, E);
    }
  }
  function x(_, E) {
    (E == null || E > _.length) && (E = _.length);
    for (var S = 0, P = new Array(E); S < E; S++)
      P[S] = _[S];
    return P;
  }
  function N(_, E) {
    var S = _ == null ? null : typeof Symbol < "u" && _[Symbol.iterator] || _["@@iterator"];
    if (S != null) {
      var P = [], C = !0, M = !1, q, U;
      try {
        for (S = S.call(_); !(C = (q = S.next()).done) && (P.push(q.value), !(E && P.length === E)); C = !0)
          ;
      } catch (V) {
        M = !0, U = V;
      } finally {
        try {
          !C && S.return != null && S.return();
        } finally {
          if (M)
            throw U;
        }
      }
      return P;
    }
  }
  function F(_) {
    if (Array.isArray(_))
      return _;
  }
  function W(_, E) {
    if (!(_ instanceof E))
      throw new TypeError("Cannot call a class as a function");
  }
  function Y(_, E) {
    for (var S = 0; S < E.length; S++) {
      var P = E[S];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(_, P.key, P);
    }
  }
  function re(_, E, S) {
    return E && Y(_.prototype, E), S && Y(_, S), Object.defineProperty(_, "prototype", { writable: !1 }), _;
  }
  function G(_, E) {
    if (typeof E != "function" && E !== null)
      throw new TypeError("Super expression must either be null or a function");
    _.prototype = Object.create(E && E.prototype, { constructor: { value: _, writable: !0, configurable: !0 } }), Object.defineProperty(_, "prototype", { writable: !1 }), E && oe(_, E);
  }
  function oe(_, E) {
    return oe = Object.setPrototypeOf || function(P, C) {
      return P.__proto__ = C, P;
    }, oe(_, E);
  }
  function Q(_) {
    var E = pe();
    return function() {
      var P = le(_), C;
      if (E) {
        var M = le(this).constructor;
        C = Reflect.construct(P, arguments, M);
      } else
        C = P.apply(this, arguments);
      return te(this, C);
    };
  }
  function te(_, E) {
    if (E && (t(E) === "object" || typeof E == "function"))
      return E;
    if (E !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return H(_);
  }
  function H(_) {
    if (_ === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return _;
  }
  function pe() {
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
  function le(_) {
    return le = Object.setPrototypeOf ? Object.getPrototypeOf : function(S) {
      return S.__proto__ || Object.getPrototypeOf(S);
    }, le(_);
  }
  function O(_, E, S) {
    return E in _ ? Object.defineProperty(_, E, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : _[E] = S, _;
  }
  var B = /* @__PURE__ */ function(_) {
    G(S, _);
    var E = Q(S);
    function S(P) {
      var C;
      return W(this, S), C = E.call(this, P), O(H(C), "onDragStart", function(M, q) {
        (0, l.default)("Draggable: onDragStart: %j", q);
        var U = C.props.onStart(M, (0, s.createDraggableData)(H(C), q));
        if (U === !1)
          return !1;
        C.setState({
          dragging: !0,
          dragged: !0
        });
      }), O(H(C), "onDrag", function(M, q) {
        if (!C.state.dragging)
          return !1;
        (0, l.default)("Draggable: onDrag: %j", q);
        var U = (0, s.createDraggableData)(H(C), q), V = {
          x: U.x,
          y: U.y
        };
        if (C.props.bounds) {
          var j = V.x, R = V.y;
          V.x += C.state.slackX, V.y += C.state.slackY;
          var K = (0, s.getBoundPosition)(H(C), V.x, V.y), ue = $(K, 2), ye = ue[0], xe = ue[1];
          V.x = ye, V.y = xe, V.slackX = C.state.slackX + (j - V.x), V.slackY = C.state.slackY + (R - V.y), U.x = V.x, U.y = V.y, U.deltaX = V.x - C.state.x, U.deltaY = V.y - C.state.y;
        }
        var je = C.props.onDrag(M, U);
        if (je === !1)
          return !1;
        C.setState(V);
      }), O(H(C), "onDragStop", function(M, q) {
        if (!C.state.dragging)
          return !1;
        var U = C.props.onStop(M, (0, s.createDraggableData)(H(C), q));
        if (U === !1)
          return !1;
        (0, l.default)("Draggable: onDragStop: %j", q);
        var V = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, j = !!C.props.position;
        if (j) {
          var R = C.props.position, K = R.x, ue = R.y;
          V.x = K, V.y = ue;
        }
        C.setState(V);
      }), C.state = {
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
      }, P.position && !(P.onDrag || P.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), C;
    }
    return re(S, [{
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
        var C, M, q;
        return (C = (M = this.props) === null || M === void 0 || (q = M.nodeRef) === null || q === void 0 ? void 0 : q.current) !== null && C !== void 0 ? C : a.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var C, M = this.props;
        M.axis, M.bounds;
        var q = M.children, U = M.defaultPosition, V = M.defaultClassName, j = M.defaultClassNameDragging, R = M.defaultClassNameDragged, K = M.position, ue = M.positionOffset;
        M.scale;
        var ye = y(M, u), xe = {}, je = null, dt = !!K, Ze = !dt || this.state.dragging, Te = K || U, qe = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && Ze ? this.state.x : Te.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && Ze ? this.state.y : Te.y
        };
        this.state.isElementSVG ? je = (0, c.createSVGTransform)(qe, ue) : xe = (0, c.createCSSTransform)(qe, ue);
        var Xe = (0, i.default)(q.props.className || "", V, (C = {}, O(C, j, this.state.dragging), O(C, R, this.state.dragged), C));
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
        function(C, M) {
          var q = C.position, U = M.prevPropsPosition;
          return q && (!U || q.x !== U.x || q.y !== U.y) ? ((0, l.default)("Draggable: getDerivedStateFromProps %j", {
            position: q,
            prevPropsPosition: U
          }), {
            x: q.x,
            y: q.y,
            prevPropsPosition: D({}, q)
          }) : null;
        }
      )
    }]), S;
  }(n.Component);
  e.default = B, O(B, "displayName", "Draggable"), O(B, "propTypes", D(D({}, f.default.propTypes), {}, {
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
  })), O(B, "defaultProps", D(D({}, f.default.defaultProps), {}, {
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
of.exports = gs;
kn.default = gs;
kn.DraggableCore = Qf;
const Jf = (e, t, n) => {
  const [r, a] = Z({ video1: "", video2: "" }), i = { video1: "/", video2: "/" }, c = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  }, s = (l, u = 0) => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const h = t.filter((v) => v.to === l);
      if (h.length > 0) {
        const { slides: v } = h[0], m = v[u < 0 ? 0 : u];
        a(m || i);
      } else
        a(i);
    } else
      a(i);
  }, d = (l, u = 0, h = "") => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const v = t.filter((m) => m.to === l);
      if (v.length > 0) {
        const { slides: m } = v[0], { modals: b } = m[u < 0 ? 0 : u], T = (b || []).filter((A) => A.id === h)[0];
        a(T || i);
      } else
        a(i);
    } else
      a(i);
  }, f = () => {
    const l = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (l) {
      const u = [...l].findIndex((y) => !y.hasAttribute("hidden"));
      s(n, u < 0 ? 0 : u);
      const h = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (h.length > 0) {
        const y = [...h].findIndex((T) => !T.hasAttribute("hidden"));
        s(n, y < 0 ? 0 : y);
      }
      const v = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      v && d(n, u, v.id);
      const m = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      m && d(n, u, m.id);
      const b = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      b && d(n, u, b.id);
    }
  };
  return X(() => {
    if (e) {
      const l = new MutationObserver(f);
      return l.observe(document.querySelector(e || "body"), c), () => l.disconnect();
    }
  }, [f, c]), r;
}, ep = "_progress_18ffq_85", tp = "_flex_18ffq_95", np = "_gap_18ffq_152", rp = "_secondary_18ffq_189", op = "_close_18ffq_285", ap = "_hide_18ffq_291", ip = "_ico_smart_18ffq_299", he = {
  "c-vid-container": "_c-vid-container_18ffq_1",
  "c-vid": "_c-vid_18ffq_1",
  "c-vid-controls": "_c-vid-controls_18ffq_34",
  "c-vid-controls-text": "_c-vid-controls-text_18ffq_75",
  progress: ep,
  flex: tp,
  "progress-bar": "_progress-bar_18ffq_101",
  "c-vid-controls-volume": "_c-vid-controls-volume_18ffq_108",
  "c-vid-controls-volume-item": "_c-vid-controls-volume-item_18ffq_129",
  "no-captions": "_no-captions_18ffq_140",
  gap: np,
  "menu-float": "_menu-float_18ffq_160",
  "menu-float-active": "_menu-float-active_18ffq_173",
  "menu-float-btn": "_menu-float-btn_18ffq_179",
  secondary: rp,
  "menu-float-btn-disable": "_menu-float-btn-disable_18ffq_213",
  "menu-float-btndrop": "_menu-float-btndrop_18ffq_223",
  "menu-float-dropdown": "_menu-float-dropdown_18ffq_242",
  "menu-float-dropdown-content": "_menu-float-dropdown-content_18ffq_250",
  close: op,
  hide: ap,
  "image-Video": "_image-Video_18ffq_295",
  ico_smart: ip
}, ms = ({ width: e, addClass: t, image: n, pathVideo: r, pathname: a }) => {
  const [i, c] = Z("00:00"), s = Hn(), d = Hn(), f = Hn(), l = Hn(), [u, h] = Z(!1), [v, m] = Z(!1), [b, y] = Z(!1), { video1: T, video2: A } = Jf("body", r, a), [D, $] = Z({
    state: !1,
    icon: Zr,
    label: "Reproducir video"
  }), [w, I] = Z({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  }), { deltaPosition: x } = w;
  function N() {
    const Q = u ? s.current : d.current;
    D.state ? (Q.pause(), $({
      state: !1,
      icon: Zr,
      label: "Reproducir video"
    })) : (Q.play(), $({
      state: !0,
      icon: up,
      label: "Pausar video"
    }));
  }
  function F() {
    const Q = u ? s.current : d.current, te = l.current, H = Q.currentTime / Q.duration * 100;
    te.style.flexBasis = `${H}%`;
  }
  function W() {
    const Q = u ? s.current : d.current;
    te(Q);
    function te(O) {
      const B = H(O.currentTime);
      c(B);
    }
    function H(O) {
      const B = parseInt(O, 10), _ = Math.floor(B / 3600), E = Math.floor((B - _ * 3600) / 60), S = B - _ * 3600 - E * 60, P = le(pe(_)), C = le(pe(E)), M = le(pe(S));
      return `${P}:${C}:${M}`;
    }
    function pe(O) {
      return O < 10 ? O = "0" + O : O;
    }
    function le(O) {
      return isNaN(O) ? "00" : O;
    }
  }
  function Y(Q) {
    const te = f.current, H = u ? s.current : d.current, le = Q.nativeEvent.offsetX / te.offsetWidth * H.duration;
    H.currentTime = le;
  }
  const re = (Q, te) => {
    h(!1), m(!1), te(Q), G();
  }, G = () => {
    const Q = l.current;
    Q.style.flexBasis = "0%", $({
      state: !1,
      icon: Zr,
      label: "Reproducir video"
    });
  }, oe = (Q, te) => {
    const { x: H, y: pe } = w.deltaPosition;
    I({
      ...w,
      deltaPosition: {
        x: H + te.deltaX,
        y: pe + te.deltaY
      }
    });
  };
  return X(() => {
    G();
  }, [T, A]), /* @__PURE__ */ p(kn, { handle: "strong", position: x, onDrag: oe, children: /* @__PURE__ */ L(
    "div",
    {
      className: `${he["menu-float"]} ${(u || v) && he["menu-float-active"]} ${he["menu-float-box"]} ${he.box} ${he["no-cursor"]}`,
      children: [
        /* @__PURE__ */ L("div", { className: he["menu-float-dropdown"], children: [
          (!u && !v || !!T && !u && !v || !!A && (u || v) || !!A && (u || v) && !u) && /* @__PURE__ */ L(
            "button",
            {
              onClick: () => {
                b || (re(!0, h), y(!0));
              },
              className: `${he["menu-float-btn"]} ${he["menu-float-btndrop"]} ${!u && !v && he["menu-float-btn-disable"]}`,
              "aria-label": "Intérprete de lenguaje de señas",
              children: [
                !u && !v && (n ? /* @__PURE__ */ p("img", { className: he["image-Video"], src: n }) : /* @__PURE__ */ L(
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
                /* @__PURE__ */ p(sp, {}),
                (u || v) && (u ? "1" : "2")
              ]
            }
          ),
          (u || v) && /* @__PURE__ */ L(bt, { children: [
            /* @__PURE__ */ L(
              "button",
              {
                tabIndex: -1,
                className: `${he["menu-float-btn"]} ${he.secondary}`,
                onClick: () => {
                  v && re(!0, h);
                },
                children: [
                  "1",
                  /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Ia, {}) })
                ]
              }
            ),
            /* @__PURE__ */ L(
              "button",
              {
                tabIndex: -1,
                className: `${he["menu-float-btn"]} ${he.secondary}`,
                onClick: () => {
                  u && re(!0, m);
                },
                children: [
                  "2",
                  /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(Ia, {}) })
                ]
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                tabIndex: -1,
                className: `${he["menu-float-btn"]}`,
                onClick: () => !1,
                onMouseEnter: () => y(!0),
                onMouseLeave: () => y(!1),
                "aria-label": "Arrastrar video",
                children: /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(cp, {}) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${he["menu-float-btn"]} ${he.close}`,
                onClick: () => {
                  h(!1), m(!1), I({
                    deltaPosition: {
                      x: 0,
                      y: 0
                    }
                  }), y(!1);
                },
                onFocus: () => y(!0),
                onBlur: () => y(!0),
                "aria-label": "Cerrar",
                children: /* @__PURE__ */ p(lp, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p("div", { className: `${he["c-vid-container"]} ${t}`, display: u || v ? "true" : "false", children: /* @__PURE__ */ L("div", { className: `${he["c-vid"]} ${t}`, style: { maxWidth: `${e}px` }, children: [
          u && /* @__PURE__ */ p(
            "video",
            {
              src: T,
              ref: s,
              onTimeUpdate: () => {
                F(), W();
              },
              className: `${he["no-captions"]}`
            }
          ),
          v && /* @__PURE__ */ p(
            "video",
            {
              src: A,
              ref: d,
              onTimeUpdate: () => {
                F(), W();
              },
              className: `${he["no-captions"]}`
            }
          ),
          /* @__PURE__ */ L("div", { className: he["c-vid-controls"], children: [
            /* @__PURE__ */ p("button", { "aria-label": D.label, onClick: N, children: D.icon }),
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
            /* @__PURE__ */ p("div", { className: he["progress-content"], children: /* @__PURE__ */ p("div", { ref: f, className: he.progress, onClick: Y, children: /* @__PURE__ */ p("div", { ref: l, className: he["progress-bar"], onChange: F }) }) })
          ] })
        ] }) })
      ]
    }
  ) });
};
ms.propTypes = {
  width: o.string,
  addClass: o.string
};
ms.defaultProps = {
  width: "210"
};
const sp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", viewBox: "0 96 960 960", width: "48", children: /* @__PURE__ */ p("path", { d: "M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" }) }), lp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "close",
    d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
  }
) }), cp = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", "aria-hidden": "true", children: /* @__PURE__ */ p(
  "path",
  {
    id: "open_with",
    d: "m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z"
  }
) }), Ia = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 96 960 960", "aria-hidden": "true", children: /* @__PURE__ */ p("path", { d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z" }) }), Zr = /* @__PURE__ */ L(
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
), up = /* @__PURE__ */ L(
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
), Io = ut(), bs = ({ children: e, isVisible: t }) => {
  const [n, r] = Z(!1), a = J(), i = () => r(!n), c = (s) => {
    a.current || (a.current = s);
  };
  return X(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p(Io.Provider, { value: { isOpen: n, onOpen: i, setRefButton: c, refButton: a }, children: e });
};
bs.defaultProps = {
  isVisible: !1
};
bs.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const dp = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r } = Oe(Io);
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
dp.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onClick: o.func
};
const Xr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, Kr = Object.freeze({
  ESC: 27,
  TAB: 9
}), ys = ({
  id: e,
  children: t,
  addClass: n,
  hasArrow: r,
  isDisabled: a,
  distance: i,
  placement: c,
  defaultStyle: s
}) => {
  const { isOpen: d, refButton: f } = Oe(Io), l = J(), u = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', h = (b) => {
    const y = l.current.querySelectorAll(u), T = f.current, A = y[0], D = y[y.length - 1];
    if ((b.keyCode || b.which) === Kr.TAB && document.activeElement === D)
      return T.focus(), b.preventDefault();
    b.shiftKey && (b.keyCode || b.which) === Kr.TAB && document.activeElement === A && (T.focus(), b.preventDefault()), (b.keyCode || b.which) === Kr.ESC && T.focus();
  }, { styles: v, attributes: m } = _r(
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
        { name: "eventListeners", enabled: d }
      ]
    }
  );
  return X(() => {
    d && l.current.focus();
  }, [d]), a ? /* @__PURE__ */ p(bt, { children: t }) : /* @__PURE__ */ p(fn, { id: "js-popover-modal-portal", children: /* @__PURE__ */ L(
    "div",
    {
      id: e,
      ref: l,
      role: "status",
      tabIndex: -1,
      className: ee({
        [Xr["c-popover-modal"]]: !s,
        [Xr["c-popover-modal--active"]]: !s && d,
        ["video-interpreter-ui-popover"]: "video-interpreter-ui-popover",
        [n]: n
      }),
      style: v.popper,
      onKeyDown: h,
      "data-hidden": !d,
      ...!d && { hidden: !0 },
      ...m.popper,
      children: [
        t,
        r && /* @__PURE__ */ p(
          "div",
          {
            className: ee({
              [Xr["c-popover-modal__arrow"]]: !s
            }),
            "data-class": "c-popover-modal__arrow",
            "data-popper-arrow": !0,
            style: v.arrow
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
  placement: "auto"
};
const fp = (e, t) => {
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
}, pp = (e, t, n) => {
  const [r, a] = Z(n), i = e.map((s) => window.matchMedia(s)), c = () => {
    const s = i.findIndex((d) => d.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return X(() => {
    a(c);
    const s = (d) => a(c);
    return i.forEach((d) => d.addEventListener("change", s)), () => {
      i.forEach((d) => d.removeEventListener("change", s));
    };
  }, []), r;
}, bp = () => {
  const [e, t] = fp("dark-mode-enabled"), n = pp(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return X(() => {
    t(n);
  }, [n]), X(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, vp = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), yp = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || vp, [a, i] = Z(!1), [c, s] = Z(null);
  return X(() => {
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
}, _p = (e) => _s(e);
export {
  Ls as Accordion,
  Ba as AccordionButton,
  qa as AccordionItem,
  Va as AccordionPanel,
  Ya as Audio,
  Wt as Button,
  Su as ButtonSection,
  Ha as CheckBox,
  Nl as CheckBoxGroup,
  $l as Col,
  kl as Content,
  vi as DragAndDrop,
  pi as DragAndDropContext,
  hi as Draggable,
  gi as Droppable,
  mp as Filter,
  mi as GeneralDraggable,
  Ce as Icon,
  bi as Image,
  yi as Input,
  fu as InputGroup,
  wi as InputLeftAddon,
  xi as InputRightAddon,
  _i as InputStyle,
  ms as Interpreter,
  vu as Kbd,
  Ti as Link,
  hu as List,
  Oi as ListItem,
  Si as Modal,
  yu as ModalCloseButton,
  Ci as ModalContent,
  hr as ModalContext,
  Pi as ModalOverlay,
  ki as NavSection,
  Ai as NumberDecrementStepper,
  Ii as NumberIncrementStepper,
  Ri as NumberInput,
  gr as NumberInputContext,
  Di as NumberInputField,
  Ni as NumberInputStepper,
  gu as OrderedList,
  $i as Pagination,
  wo as PaginationItem,
  Tu as Panel,
  mr as PanelContext,
  Pu as Paper,
  bs as PopoverModal,
  dp as PopoverModalButton,
  ys as PopoverModalContent,
  Io as PopoverModalContext,
  fn as Portal,
  $u as Row,
  Mi as Section,
  Li as Select,
  Mu as SelectGroup,
  ji as Switch,
  Fi as Tab,
  Bi as TabList,
  qi as TabPanel,
  Vi as TabPanels,
  ku as Tabs,
  xo as TabsContext,
  Yi as TextArea,
  Lu as ThemeProvider,
  Ji as Toggletip,
  es as Tooltip,
  ts as Tour,
  Ro as TourContext,
  ns as TourElement,
  tf as TourHelpLayer,
  mu as UnorderedList,
  rs as Video,
  _p as createTheme,
  bp as useDarkMode,
  fp as useLocalStorage,
  pp as useMedia,
  yp as useOnScreen,
  _u as usePagination,
  Nu as usePortal
};
