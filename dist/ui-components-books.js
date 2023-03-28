import * as Dt from "react";
import je, { Children as Ee, useState as X, useEffect as H, isValidElement as Ke, cloneElement as xe, forwardRef as ct, useRef as U, useMemo as ge, useLayoutEffect as Zo, useCallback as Ne, createContext as Xe, memo as Ko, useReducer as $r, useContext as ye, useId as $t, createElement as _i } from "react";
import * as wi from "react-dom";
import { unstable_batchedUpdates as Qt, createPortal as Xo } from "react-dom";
var Dn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pn = {}, xi = {
  get exports() {
    return pn;
  },
  set exports(e) {
    pn = e;
  }
}, en = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function Ei() {
  if (no)
    return en;
  no = 1;
  var e = je, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, c, f) {
    var u, d = {}, v = null, h = null;
    f !== void 0 && (v = "" + f), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c)
      o.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps)
      for (u in c = s.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: s, key: v, ref: h, props: d, _owner: a.current };
  }
  return en.Fragment = n, en.jsx = l, en.jsxs = l, en;
}
var tn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function Ti() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = je, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, b = "@@iterator";
    function y(m) {
      if (m === null || typeof m != "object")
        return null;
      var P = g && m[g] || m[b];
      return typeof P == "function" ? P : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(m) {
      {
        for (var P = arguments.length, k = new Array(P > 1 ? P - 1 : 0), Z = 1; Z < P; Z++)
          k[Z - 1] = arguments[Z];
        S("error", m, k);
      }
    }
    function S(m, P, k) {
      {
        var Z = x.ReactDebugCurrentFrame, se = Z.getStackAddendum();
        se !== "" && (P += "%s", k = k.concat([se]));
        var de = k.map(function(oe) {
          return String(oe);
        });
        de.unshift("Warning: " + P), Function.prototype.apply.call(console[m], console, de);
      }
    }
    var D = !1, _ = !1, E = !1, w = !1, R = !1, I;
    I = Symbol.for("react.module.reference");
    function L(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === o || m === i || R || m === a || m === f || m === u || w || m === h || D || _ || E || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === d || m.$$typeof === l || m.$$typeof === s || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === I || m.getModuleId !== void 0));
    }
    function M(m, P, k) {
      var Z = m.displayName;
      if (Z)
        return Z;
      var se = P.displayName || P.name || "";
      return se !== "" ? k + "(" + se + ")" : k;
    }
    function ee(m) {
      return m.displayName || "Context";
    }
    function K(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case s:
            var P = m;
            return ee(P) + ".Consumer";
          case l:
            var k = m;
            return ee(k._context) + ".Provider";
          case c:
            return M(m, m.render, "ForwardRef");
          case d:
            var Z = m.displayName || null;
            return Z !== null ? Z : K(m.type) || "Memo";
          case v: {
            var se = m, de = se._payload, oe = se._init;
            try {
              return K(oe(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, le = 0, ie, te, Te, he, O, $, B;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function F() {
      {
        if (le === 0) {
          ie = console.log, te = console.info, Te = console.warn, he = console.error, O = console.group, $ = console.groupCollapsed, B = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        le++;
      }
    }
    function W() {
      {
        if (le--, le === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, m, {
              value: ie
            }),
            info: re({}, m, {
              value: te
            }),
            warn: re({}, m, {
              value: Te
            }),
            error: re({}, m, {
              value: he
            }),
            group: re({}, m, {
              value: O
            }),
            groupCollapsed: re({}, m, {
              value: $
            }),
            groupEnd: re({}, m, {
              value: B
            })
          });
        }
        le < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = x.ReactCurrentDispatcher, Y;
    function z(m, P, k) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (se) {
            var Z = se.stack.trim().match(/\n( *(at )?)/);
            Y = Z && Z[1] || "";
          }
        return `
` + Y + m;
      }
    }
    var J = !1, q;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      q = new A();
    }
    function T(m, P) {
      if (!m || J)
        return "";
      {
        var k = q.get(m);
        if (k !== void 0)
          return k;
      }
      var Z;
      J = !0;
      var se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = j.current, j.current = null, F();
      try {
        if (P) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (ft) {
              Z = ft;
            }
            Reflect.construct(m, [], oe);
          } else {
            try {
              oe.call();
            } catch (ft) {
              Z = ft;
            }
            m.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            Z = ft;
          }
          m();
        }
      } catch (ft) {
        if (ft && Z && typeof ft.stack == "string") {
          for (var ne = ft.stack.split(`
`), $e = Z.stack.split(`
`), be = ne.length - 1, _e = $e.length - 1; be >= 1 && _e >= 0 && ne[be] !== $e[_e]; )
            _e--;
          for (; be >= 1 && _e >= 0; be--, _e--)
            if (ne[be] !== $e[_e]) {
              if (be !== 1 || _e !== 1)
                do
                  if (be--, _e--, _e < 0 || ne[be] !== $e[_e]) {
                    var Ue = `
` + ne[be].replace(" at new ", " at ");
                    return m.displayName && Ue.includes("<anonymous>") && (Ue = Ue.replace("<anonymous>", m.displayName)), typeof m == "function" && q.set(m, Ue), Ue;
                  }
                while (be >= 1 && _e >= 0);
              break;
            }
        }
      } finally {
        J = !1, j.current = de, W(), Error.prepareStackTrace = se;
      }
      var Mt = m ? m.displayName || m.name : "", to = Mt ? z(Mt) : "";
      return typeof m == "function" && q.set(m, to), to;
    }
    function Q(m, P, k) {
      return T(m, !1);
    }
    function me(m) {
      var P = m.prototype;
      return !!(P && P.isReactComponent);
    }
    function Se(m, P, k) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return T(m, me(m));
      if (typeof m == "string")
        return z(m);
      switch (m) {
        case f:
          return z("Suspense");
        case u:
          return z("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return Q(m.render);
          case d:
            return Se(m.type, P, k);
          case v: {
            var Z = m, se = Z._payload, de = Z._init;
            try {
              return Se(de(se), P, k);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, it = {}, ut = x.ReactDebugCurrentFrame;
    function st(m) {
      if (m) {
        var P = m._owner, k = Se(m.type, m._source, P ? P.type : null);
        ut.setExtraStackFrame(k);
      } else
        ut.setExtraStackFrame(null);
    }
    function Ce(m, P, k, Z, se) {
      {
        var de = Function.call.bind(Ae);
        for (var oe in m)
          if (de(m, oe)) {
            var ne = void 0;
            try {
              if (typeof m[oe] != "function") {
                var $e = Error((Z || "React class") + ": " + k + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              ne = m[oe](P, oe, Z, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              ne = be;
            }
            ne && !(ne instanceof Error) && (st(se), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", k, oe, typeof ne), st(null)), ne instanceof Error && !(ne.message in it) && (it[ne.message] = !0, st(se), C("Failed %s type: %s", k, ne.message), st(null));
          }
      }
    }
    var Qe = Array.isArray;
    function et(m) {
      return Qe(m);
    }
    function wt(m) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, k = P && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return k;
      }
    }
    function ht(m) {
      try {
        return xt(m), !1;
      } catch {
        return !0;
      }
    }
    function xt(m) {
      return "" + m;
    }
    function Et(m) {
      if (ht(m))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(m)), xt(m);
    }
    var Ie = x.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, Xt, ze;
    ze = {};
    function On(m) {
      if (Ae.call(m, "ref")) {
        var P = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function er(m) {
      if (Ae.call(m, "key")) {
        var P = Object.getOwnPropertyDescriptor(m, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function tr(m, P) {
      if (typeof m.ref == "string" && Ie.current && P && Ie.current.stateNode !== P) {
        var k = K(Ie.current.type);
        ze[k] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Ie.current.type), m.ref), ze[k] = !0);
      }
    }
    function Sn(m, P) {
      {
        var k = function() {
          mt || (mt = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        k.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function nr(m, P) {
      {
        var k = function() {
          Xt || (Xt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        k.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Cn = function(m, P, k, Z, se, de, oe) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: P,
        ref: k,
        props: oe,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function rr(m, P, k, Z, se) {
      {
        var de, oe = {}, ne = null, $e = null;
        k !== void 0 && (Et(k), ne = "" + k), er(P) && (Et(P.key), ne = "" + P.key), On(P) && ($e = P.ref, tr(P, se));
        for (de in P)
          Ae.call(P, de) && !tt.hasOwnProperty(de) && (oe[de] = P[de]);
        if (m && m.defaultProps) {
          var be = m.defaultProps;
          for (de in be)
            oe[de] === void 0 && (oe[de] = be[de]);
        }
        if (ne || $e) {
          var _e = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ne && Sn(oe, _e), $e && nr(oe, _e);
        }
        return Cn(m, ne, $e, se, Z, Ie.current, oe);
      }
    }
    var Jt = x.ReactCurrentOwner, Rn = x.ReactDebugCurrentFrame;
    function ve(m) {
      if (m) {
        var P = m._owner, k = Se(m.type, m._source, P ? P.type : null);
        Rn.setExtraStackFrame(k);
      } else
        Rn.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function De(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function nt() {
      {
        if (Jt.current) {
          var m = K(Jt.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function ke(m) {
      {
        if (m !== void 0) {
          var P = m.fileName.replace(/^.*[\\\/]/, ""), k = m.lineNumber;
          return `

Check your code at ` + P + ":" + k + ".";
        }
        return "";
      }
    }
    var Me = {};
    function We(m) {
      {
        var P = nt();
        if (!P) {
          var k = typeof m == "string" ? m : m.displayName || m.name;
          k && (P = `

Check the top-level render call using <` + k + ">.");
        }
        return P;
      }
    }
    function dt(m, P) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var k = We(P);
        if (Me[k])
          return;
        Me[k] = !0;
        var Z = "";
        m && m._owner && m._owner !== Jt.current && (Z = " It was passed a child from " + K(m._owner.type) + "."), ve(m), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, Z), ve(null);
      }
    }
    function Le(m, P) {
      {
        if (typeof m != "object")
          return;
        if (et(m))
          for (var k = 0; k < m.length; k++) {
            var Z = m[k];
            De(Z) && dt(Z, P);
          }
        else if (De(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var se = y(m);
          if (typeof se == "function" && se !== m.entries)
            for (var de = se.call(m), oe; !(oe = de.next()).done; )
              De(oe.value) && dt(oe.value, P);
        }
      }
    }
    function Tt(m) {
      {
        var P = m.type;
        if (P == null || typeof P == "string")
          return;
        var k;
        if (typeof P == "function")
          k = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === d))
          k = P.propTypes;
        else
          return;
        if (k) {
          var Z = K(P);
          Ce(k, m.props, "prop", Z, m);
        } else if (P.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var se = K(P);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(m) {
      {
        for (var P = Object.keys(m.props), k = 0; k < P.length; k++) {
          var Z = P[k];
          if (Z !== "children" && Z !== "key") {
            ve(m), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), ve(null);
            break;
          }
        }
        m.ref !== null && (ve(m), C("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function St(m, P, k, Z, se, de) {
      {
        var oe = L(m);
        if (!oe) {
          var ne = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = ke(se);
          $e ? ne += $e : ne += nt();
          var be;
          m === null ? be = "null" : et(m) ? be = "array" : m !== void 0 && m.$$typeof === t ? (be = "<" + (K(m.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : be = typeof m, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, ne);
        }
        var _e = rr(m, P, k, se, de);
        if (_e == null)
          return _e;
        if (oe) {
          var Ue = P.children;
          if (Ue !== void 0)
            if (Z)
              if (et(Ue)) {
                for (var Mt = 0; Mt < Ue.length; Mt++)
                  Le(Ue[Mt], m);
                Object.freeze && Object.freeze(Ue);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(Ue, m);
        }
        return m === o ? Ot(_e) : Tt(_e), _e;
      }
    }
    function kt(m, P, k) {
      return St(m, P, k, !0);
    }
    function Pn(m, P, k) {
      return St(m, P, k, !1);
    }
    var Ct = Pn, Rt = kt;
    tn.Fragment = o, tn.jsx = Ct, tn.jsxs = Rt;
  }()), tn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ei() : e.exports = Ti();
})(xi);
const pt = pn.Fragment, p = pn.jsx, N = pn.jsxs;
var r = {}, oo = {
  get exports() {
    return r;
  },
  set exports(e) {
    r = e;
  }
}, jn = {}, Oi = {
  get exports() {
    return jn;
  },
  set exports(e) {
    jn = e;
  }
}, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function Si() {
  if (ao)
    return ce;
  ao = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function S(_) {
    if (typeof _ == "object" && _ !== null) {
      var E = _.$$typeof;
      switch (E) {
        case t:
          switch (_ = _.type, _) {
            case c:
            case f:
            case o:
            case i:
            case a:
            case d:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case u:
                case g:
                case h:
                case l:
                  return _;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  function D(_) {
    return S(_) === f;
  }
  return ce.AsyncMode = c, ce.ConcurrentMode = f, ce.ContextConsumer = s, ce.ContextProvider = l, ce.Element = t, ce.ForwardRef = u, ce.Fragment = o, ce.Lazy = g, ce.Memo = h, ce.Portal = n, ce.Profiler = i, ce.StrictMode = a, ce.Suspense = d, ce.isAsyncMode = function(_) {
    return D(_) || S(_) === c;
  }, ce.isConcurrentMode = D, ce.isContextConsumer = function(_) {
    return S(_) === s;
  }, ce.isContextProvider = function(_) {
    return S(_) === l;
  }, ce.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, ce.isForwardRef = function(_) {
    return S(_) === u;
  }, ce.isFragment = function(_) {
    return S(_) === o;
  }, ce.isLazy = function(_) {
    return S(_) === g;
  }, ce.isMemo = function(_) {
    return S(_) === h;
  }, ce.isPortal = function(_) {
    return S(_) === n;
  }, ce.isProfiler = function(_) {
    return S(_) === i;
  }, ce.isStrictMode = function(_) {
    return S(_) === a;
  }, ce.isSuspense = function(_) {
    return S(_) === d;
  }, ce.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === o || _ === f || _ === i || _ === a || _ === d || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === h || _.$$typeof === l || _.$$typeof === s || _.$$typeof === u || _.$$typeof === y || _.$$typeof === x || _.$$typeof === C || _.$$typeof === b);
  }, ce.typeOf = S, ce;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io;
function Ci() {
  return io || (io = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function S(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === o || T === f || T === i || T === a || T === d || T === v || typeof T == "object" && T !== null && (T.$$typeof === g || T.$$typeof === h || T.$$typeof === l || T.$$typeof === s || T.$$typeof === u || T.$$typeof === y || T.$$typeof === x || T.$$typeof === C || T.$$typeof === b);
    }
    function D(T) {
      if (typeof T == "object" && T !== null) {
        var Q = T.$$typeof;
        switch (Q) {
          case t:
            var me = T.type;
            switch (me) {
              case c:
              case f:
              case o:
              case i:
              case a:
              case d:
                return me;
              default:
                var Se = me && me.$$typeof;
                switch (Se) {
                  case s:
                  case u:
                  case g:
                  case h:
                  case l:
                    return Se;
                  default:
                    return Q;
                }
            }
          case n:
            return Q;
        }
      }
    }
    var _ = c, E = f, w = s, R = l, I = t, L = u, M = o, ee = g, K = h, re = n, le = i, ie = a, te = d, Te = !1;
    function he(T) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(T) || D(T) === c;
    }
    function O(T) {
      return D(T) === f;
    }
    function $(T) {
      return D(T) === s;
    }
    function B(T) {
      return D(T) === l;
    }
    function V(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function F(T) {
      return D(T) === u;
    }
    function W(T) {
      return D(T) === o;
    }
    function j(T) {
      return D(T) === g;
    }
    function Y(T) {
      return D(T) === h;
    }
    function z(T) {
      return D(T) === n;
    }
    function J(T) {
      return D(T) === i;
    }
    function q(T) {
      return D(T) === a;
    }
    function A(T) {
      return D(T) === d;
    }
    ue.AsyncMode = _, ue.ConcurrentMode = E, ue.ContextConsumer = w, ue.ContextProvider = R, ue.Element = I, ue.ForwardRef = L, ue.Fragment = M, ue.Lazy = ee, ue.Memo = K, ue.Portal = re, ue.Profiler = le, ue.StrictMode = ie, ue.Suspense = te, ue.isAsyncMode = he, ue.isConcurrentMode = O, ue.isContextConsumer = $, ue.isContextProvider = B, ue.isElement = V, ue.isForwardRef = F, ue.isFragment = W, ue.isLazy = j, ue.isMemo = Y, ue.isPortal = z, ue.isProfiler = J, ue.isStrictMode = q, ue.isSuspense = A, ue.isValidElementType = S, ue.typeOf = D;
  }()), ue;
}
var so;
function Jo() {
  return so || (so = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Si() : e.exports = Ci();
  }(Oi)), jn;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var or, lo;
function Ri() {
  if (lo)
    return or;
  lo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(i) {
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
      for (var l = {}, s = 0; s < 10; s++)
        l["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(l).map(function(u) {
        return l[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        f[u] = u;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return or = a() ? Object.assign : function(i, l) {
    for (var s, c = o(i), f, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (c[d] = s[d]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          n.call(s, f[v]) && (c[f[v]] = s[f[v]]);
      }
    }
    return c;
  }, or;
}
var ar, co;
function kr() {
  if (co)
    return ar;
  co = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ar = e, ar;
}
var ir, uo;
function Qo() {
  return uo || (uo = 1, ir = Function.call.bind(Object.prototype.hasOwnProperty)), ir;
}
var sr, fo;
function Pi() {
  if (fo)
    return sr;
  fo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = kr(), n = {}, o = Qo();
    e = function(i) {
      var l = "Warning: " + i;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function a(i, l, s, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (o(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var v = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            d = i[u](l, u, c, s, null, t);
          } catch (g) {
            d = g;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, sr = a, sr;
}
var lr, po;
function Di() {
  if (po)
    return lr;
  po = 1;
  var e = Jo(), t = Ri(), n = kr(), o = Qo(), a = Pi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return lr = function(s, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var $ = O && (f && O[f] || O[u]);
      if (typeof $ == "function")
        return $;
    }
    var v = "<<anonymous>>", h = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: C(),
      arrayOf: S,
      element: D(),
      elementType: _(),
      instanceOf: E,
      node: L(),
      objectOf: R,
      oneOf: w,
      oneOfType: I,
      shape: ee,
      exact: K
    };
    function g(O, $) {
      return O === $ ? O !== 0 || 1 / O === 1 / $ : O !== O && $ !== $;
    }
    function b(O, $) {
      this.message = O, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function y(O) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, B = 0;
      function V(W, j, Y, z, J, q, A) {
        if (z = z || v, q = q || Y, A !== n) {
          if (c) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = z + ":" + Y;
            !$[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[Q] = !0, B++);
          }
        }
        return j[Y] == null ? W ? j[Y] === null ? new b("The " + J + " `" + q + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new b("The " + J + " `" + q + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : O(j, Y, z, J, q);
      }
      var F = V.bind(null, !1);
      return F.isRequired = V.bind(null, !0), F;
    }
    function x(O) {
      function $(B, V, F, W, j, Y) {
        var z = B[V], J = ie(z);
        if (J !== O) {
          var q = te(z);
          return new b(
            "Invalid " + W + " `" + j + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return y($);
    }
    function C() {
      return y(l);
    }
    function S(O) {
      function $(B, V, F, W, j) {
        if (typeof O != "function")
          return new b("Property `" + j + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var Y = B[V];
        if (!Array.isArray(Y)) {
          var z = ie(Y);
          return new b("Invalid " + W + " `" + j + "` of type " + ("`" + z + "` supplied to `" + F + "`, expected an array."));
        }
        for (var J = 0; J < Y.length; J++) {
          var q = O(Y, J, F, W, j + "[" + J + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return y($);
    }
    function D() {
      function O($, B, V, F, W) {
        var j = $[B];
        if (!s(j)) {
          var Y = ie(j);
          return new b("Invalid " + F + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(O);
    }
    function _() {
      function O($, B, V, F, W) {
        var j = $[B];
        if (!e.isValidElementType(j)) {
          var Y = ie(j);
          return new b("Invalid " + F + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(O);
    }
    function E(O) {
      function $(B, V, F, W, j) {
        if (!(B[V] instanceof O)) {
          var Y = O.name || v, z = he(B[V]);
          return new b("Invalid " + W + " `" + j + "` of type " + ("`" + z + "` supplied to `" + F + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return y($);
    }
    function w(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function $(B, V, F, W, j) {
        for (var Y = B[V], z = 0; z < O.length; z++)
          if (g(Y, O[z]))
            return null;
        var J = JSON.stringify(O, function(A, T) {
          var Q = te(T);
          return Q === "symbol" ? String(T) : T;
        });
        return new b("Invalid " + W + " `" + j + "` of value `" + String(Y) + "` " + ("supplied to `" + F + "`, expected one of " + J + "."));
      }
      return y($);
    }
    function R(O) {
      function $(B, V, F, W, j) {
        if (typeof O != "function")
          return new b("Property `" + j + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var Y = B[V], z = ie(Y);
        if (z !== "object")
          return new b("Invalid " + W + " `" + j + "` of type " + ("`" + z + "` supplied to `" + F + "`, expected an object."));
        for (var J in Y)
          if (o(Y, J)) {
            var q = O(Y, J, F, W, j + "." + J, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return y($);
    }
    function I(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var $ = 0; $ < O.length; $++) {
        var B = O[$];
        if (typeof B != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Te(B) + " at index " + $ + "."
          ), l;
      }
      function V(F, W, j, Y, z) {
        for (var J = [], q = 0; q < O.length; q++) {
          var A = O[q], T = A(F, W, j, Y, z, n);
          if (T == null)
            return null;
          T.data && o(T.data, "expectedType") && J.push(T.data.expectedType);
        }
        var Q = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new b("Invalid " + Y + " `" + z + "` supplied to " + ("`" + j + "`" + Q + "."));
      }
      return y(V);
    }
    function L() {
      function O($, B, V, F, W) {
        return re($[B]) ? null : new b("Invalid " + F + " `" + W + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return y(O);
    }
    function M(O, $, B, V, F) {
      return new b(
        (O || "React class") + ": " + $ + " type `" + B + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function ee(O) {
      function $(B, V, F, W, j) {
        var Y = B[V], z = ie(Y);
        if (z !== "object")
          return new b("Invalid " + W + " `" + j + "` of type `" + z + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var J in O) {
          var q = O[J];
          if (typeof q != "function")
            return M(F, W, j, J, te(q));
          var A = q(Y, J, F, W, j + "." + J, n);
          if (A)
            return A;
        }
        return null;
      }
      return y($);
    }
    function K(O) {
      function $(B, V, F, W, j) {
        var Y = B[V], z = ie(Y);
        if (z !== "object")
          return new b("Invalid " + W + " `" + j + "` of type `" + z + "` " + ("supplied to `" + F + "`, expected `object`."));
        var J = t({}, B[V], O);
        for (var q in J) {
          var A = O[q];
          if (o(O, q) && typeof A != "function")
            return M(F, W, j, q, te(A));
          if (!A)
            return new b(
              "Invalid " + W + " `" + j + "` key `" + q + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(B[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var T = A(Y, q, F, W, j + "." + q, n);
          if (T)
            return T;
        }
        return null;
      }
      return y($);
    }
    function re(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(re);
          if (O === null || s(O))
            return !0;
          var $ = d(O);
          if ($) {
            var B = $.call(O), V;
            if ($ !== O.entries) {
              for (; !(V = B.next()).done; )
                if (!re(V.value))
                  return !1;
            } else
              for (; !(V = B.next()).done; ) {
                var F = V.value;
                if (F && !re(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(O, $) {
      return O === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function ie(O) {
      var $ = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : le($, O) ? "symbol" : $;
    }
    function te(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var $ = ie(O);
      if ($ === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function Te(O) {
      var $ = te(O);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function he(O) {
      return !O.constructor || !O.constructor.name ? v : O.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, lr;
}
var cr, vo;
function Ai() {
  if (vo)
    return cr;
  vo = 1;
  var e = kr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, cr = function() {
    function o(l, s, c, f, u, d) {
      if (d !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    o.isRequired = o;
    function a() {
      return o;
    }
    var i = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: a,
      element: o,
      elementType: o,
      instanceOf: a,
      node: o,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, cr;
}
if (process.env.NODE_ENV !== "production") {
  var Ni = Jo(), Ii = !0;
  oo.exports = Di()(Ni.isElement, Ii);
} else
  oo.exports = Ai()();
const $i = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ve = (e, t) => Ee.toArray(e).filter((n) => t.indexOf($i(n)) !== -1), ki = ({ children: e, allowMultiple: t, defaultIndex: n }) => {
  const [o, a] = X(), i = (s) => {
    t ? o.includes(s) ? a(o.filter((c) => c !== s)) : a([...o, s]) : a(s);
  };
  H(() => (a(t ? n || [] : n ?? null), () => {
    a(null);
  }), [t, n]);
  const l = Ee.map(e, (s, c) => Ke(s) ? xe(s, { ...s.props, id: c, isOpen: o, onToggle: i }) : null);
  return /* @__PURE__ */ p("div", { children: Ve(l, ["AccordionItem"]) });
};
ki.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.element]),
  allowMultiple: r.bool,
  defaultIndex: r.oneOfType([r.array, r.number])
};
var Tr = {}, Mi = {
  get exports() {
    return Tr;
  },
  set exports(e) {
    Tr = e;
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
      for (var o = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var l = typeof i;
          if (l === "string" || l === "number")
            o.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && o.push(s);
            }
          } else if (l === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              o.push(i.toString());
              continue;
            }
            for (var c in i)
              t.call(i, c) && i[c] && o.push(c);
          }
        }
      }
      return o.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Mi);
const G = Tr, pe = (e) => (t, n, o) => {
  if (t[n] !== e)
    return new Error(
      `'${n}' in '${o}' 

 NO puedes pasar un valor de props para '${n}'.La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.`
    );
}, Ft = {
  "c-accordion__item": "_c-accordion__item_1xs3f_1",
  "c-accordion__button": "_c-accordion__button_1xs3f_10",
  "c-accordion": "_c-accordion_1xs3f_1",
  "c-accordion__panel": "_c-accordion__panel_1xs3f_33",
  "c-accordion__panel--active": "_c-accordion__panel--active_1xs3f_38",
  "c-accordion__panel-content": "_c-accordion__panel-content_1xs3f_42"
}, ea = ({
  children: e,
  id: t,
  onExpanded: n,
  isExpanded: o,
  expanded: a,
  addClass: i,
  icon: l,
  defaultStyle: s,
  __TYPE: c,
  ...f
}) => /* @__PURE__ */ N(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": o,
    className: G({
      [`${Ft["c-accordion__button"]} u-flex`]: !s,
      [i]: i,
      [o]: a
    }),
    onClick: n,
    "data-type": c,
    ...f,
    children: [
      e,
      l && l(o)
    ]
  }
);
ea.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  id: r.number,
  onExpanded: r.func,
  isExpanded: r.bool,
  expanded: r.string,
  addClass: r.string,
  icon: r.func,
  defaultStyle: r.bool,
  __TYPE: pe("AccordionButton")
};
ea.defaultProps = {
  __TYPE: "AccordionButton"
};
const ta = ({ children: e, id: t, isOpen: n, onToggle: o, addClass: a, defaultStyle: i }) => {
  const l = () => o(t), s = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, c = Ee.map(e, (f) => Ke(f) ? f.props.__TYPE === "AccordionButton" ? xe(f, { ...f.props, id: t, onExpanded: l, isExpanded: s() }) : xe(f, { ...f.props, id: t, isExpanded: s() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: G({
        [Ft["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: Ve(c, ["AccordionButton", "AccordionPanel"])
    }
  );
};
ta.propTypes = {
  children: r.arrayOf(r.element),
  id: r.number,
  isOpen: r.oneOfType([r.array, r.number]),
  onToggle: r.func,
  addClass: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("AccordionItem")
};
ta.defaultProps = {
  __TYPE: "AccordionItem"
};
const na = ({
  children: e,
  id: t,
  isExpanded: n,
  addClass: o,
  defaultStyle: a,
  __TYPE: i,
  ...l
}) => /* @__PURE__ */ p(
  "div",
  {
    className: `${Ft["c-accordion"]} ${n ? Ft["c-accordion__panel--active"] : Ft["c-accordion__panel"]}`,
    "aria-hidden": !n,
    "data-type": i,
    ...!n && { hidden: !n },
    ...l,
    children: /* @__PURE__ */ p(
      "div",
      {
        id: `accordion-panel-${t}`,
        role: "region",
        "aria-hidden": !n,
        "aria-labelledby": `accordion-button-${t}`,
        className: G({
          [Ft["c-accordion__panel-content"]]: !a,
          [o]: o
        }),
        children: e
      }
    )
  }
);
na.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  id: r.number,
  isExpanded: r.bool,
  addClass: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("AccordionPanel")
};
na.defaultProps = {
  __TYPE: "AccordionPanel"
};
const An = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Li = /\w+\.svg/gi, we = ({ children: e, path: t, size: n, addClass: o, viewBox: a, width: i, height: l }) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", { children: "Doesn't exist" });
  if (Ee.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const s = t && t.match(Li).toString().replace(/.svg/gi, ""), c = `${t}#${s}`;
  return e ? xe(e, {
    ...e.props,
    className: `${An["c-icon"]} ${An[`c-${n}`]} ${o ?? ""}`,
    "aria-hidden": !0,
    "data-testid": s
  }) : /* @__PURE__ */ p(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: l,
      viewBox: a,
      className: `${An["c-icon"]} ${An[`c-${n}`]} ${o ?? ""}`,
      "aria-hidden": "true",
      "data-testid": s,
      children: /* @__PURE__ */ p("use", { xlinkHref: c })
    }
  );
};
we.propTypes = {
  children: r.oneOfType([r.element, r.node]),
  path: r.string,
  size: r.oneOf(["small", "normal", "big"]),
  addClass: r.string,
  viewBox: r.string,
  height: r.string,
  width: r.string,
  __TYPE: pe("Icon")
};
we.defaultProps = {
  size: "normal",
  viewBox: "0 0 48 48",
  height: "48",
  width: "48",
  __TYPE: "Icon"
};
const nn = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, At = ct((e, t) => {
  const {
    label: n,
    size: o,
    icon: a,
    type: i,
    variant: l,
    hasAriaLabel: s,
    disabled: c,
    onClick: f,
    children: u,
    addClass: d,
    defaultStyle: v,
    ...h
  } = e;
  return /* @__PURE__ */ N(
    "button",
    {
      ref: t,
      className: G({
        [`${nn["c-button"]} ${nn[`c-${l}`]} ${nn[`c-${o}`]}`]: !v,
        [nn["c-round"]]: a && a.path && s,
        [nn["c-reverse"]]: a && a.position === "right",
        [d]: d
      }),
      disabled: c,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...h,
      children: [
        u,
        a && /* @__PURE__ */ p(we, { path: a.path, size: a.size }),
        s ? null : n
      ]
    }
  );
});
At.propTypes = {
  children: r.oneOfType([r.arrayOf(r.node), r.arrayOf(r.element), r.element, r.node]),
  label: r.string,
  size: r.oneOf(["small", "normal", "big"]),
  variant: r.oneOf(["primary", "secondary", "no-line"]),
  type: r.oneOf(["button", "submit", "reset"]),
  hasAriaLabel: r.bool,
  icon: r.shape({
    path: r.string,
    size: r.oneOf(["small", "normal", "big"]),
    position: r.oneOf(["left", "right"])
  }),
  disabled: r.bool,
  onClick: r.func,
  addClass: r.string,
  defaultStyle: r.bool
};
At.defaultProps = {
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const Lt = {
  "c-audio": "_c-audio_c6ix7_1",
  "c-audio--small": "_c-audio--small_c6ix7_15",
  "c-audio--hidden": "_c-audio--hidden_c6ix7_33",
  "c-button": "_c-button_c6ix7_37",
  "is-button-paused": "_is-button-paused_c6ix7_62",
  "is-button-playing": "_is-button-playing_c6ix7_70"
}, ji = Object.freeze({
  BUTTON: "Button",
  BAR: "Bar"
}), ra = ({
  src: e,
  format: t,
  a11y: n,
  size: o,
  type: a,
  addClass: i,
  defaultStyle: l,
  ...s
}) => {
  const [c, f] = X(!1), u = U(), d = (v) => {
    u.current && (u.current.paused ? u.current.play() : u.current.pause(), f(!c));
  };
  return a === ji.BAR ? /* @__PURE__ */ p(
    "audio",
    {
      preload: "metadata",
      controls: !0,
      className: G({
        [Lt["c-audio"]]: !l,
        [Lt[`c-audio--${o}`]]: o,
        [i]: i
      }),
      "data-a11y": n,
      ...s,
      children: /* @__PURE__ */ p("source", { src: e, type: t })
    }
  ) : /* @__PURE__ */ N(pt, { children: [
    /* @__PURE__ */ p(
      "audio",
      {
        ref: u,
        src: e,
        type: t,
        onEnded: () => f(!c),
        className: Lt["c-audio--hidden"]
      }
    ),
    /* @__PURE__ */ p(
      At,
      {
        label: c ? "Pausar" : "Reproduccir",
        "data-a11y": n,
        addClass: G({
          [Lt["c-button"]]: !l,
          [Lt["is-button-playing"]]: c,
          [Lt["is-button-paused"]]: !c,
          [i]: i
        }),
        onClick: d,
        hasAriaLabel: !0,
        ...l && { defaultStyle: l },
        ...n && { disabled: n },
        ...s
      }
    )
  ] });
};
ra.defaultProps = {
  a11y: !1,
  type: "Bar"
};
ra.propTypes = {
  src: r.string,
  a11y: r.bool,
  format: r.string,
  size: r.oneOf(["small"]),
  type: r.oneOf(["Bar", "Button"]),
  addClass: r.string,
  defaultStyle: r.bool
};
var Fi = typeof Dn == "object" && Dn && Dn.Object === Object && Dn, Bi = Fi, Vi = Bi, qi = typeof self == "object" && self && self.Object === Object && self, Yi = Vi || qi || Function("return this")(), zi = Yi, Wi = zi, Ui = Wi.Symbol, Mr = Ui;
function Hi(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; )
    a[n] = t(e[n], n, e);
  return a;
}
var Gi = Hi, Zi = Array.isArray, Ki = Zi, ho = Mr, oa = Object.prototype, Xi = oa.hasOwnProperty, Ji = oa.toString, rn = ho ? ho.toStringTag : void 0;
function Qi(e) {
  var t = Xi.call(e, rn), n = e[rn];
  try {
    e[rn] = void 0;
    var o = !0;
  } catch {
  }
  var a = Ji.call(e);
  return o && (t ? e[rn] = n : delete e[rn]), a;
}
var es = Qi, ts = Object.prototype, ns = ts.toString;
function rs(e) {
  return ns.call(e);
}
var os = rs, mo = Mr, as = es, is = os, ss = "[object Null]", ls = "[object Undefined]", go = mo ? mo.toStringTag : void 0;
function cs(e) {
  return e == null ? e === void 0 ? ls : ss : go && go in Object(e) ? as(e) : is(e);
}
var us = cs;
function ds(e) {
  return e != null && typeof e == "object";
}
var fs = ds, ps = us, vs = fs, hs = "[object Symbol]";
function ms(e) {
  return typeof e == "symbol" || vs(e) && ps(e) == hs;
}
var gs = ms, bo = Mr, bs = Gi, ys = Ki, _s = gs, ws = 1 / 0, yo = bo ? bo.prototype : void 0, _o = yo ? yo.toString : void 0;
function aa(e) {
  if (typeof e == "string")
    return e;
  if (ys(e))
    return bs(e, aa) + "";
  if (_s(e))
    return _o ? _o.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ws ? "-0" : t;
}
var xs = aa, Es = xs;
function Ts(e) {
  return e == null ? "" : Es(e);
}
var Os = Ts, Ss = Os, Cs = 0;
function Rs(e) {
  var t = ++Cs;
  return Ss(e) + t;
}
var Lr = Rs;
const jt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, ia = ct(
  ({ id: e, name: t, type: n, label: o, state: a, value: i, addClass: l, isDisabled: s, defaultChecked: c, onChange: f, __TYPE: u, inherit: d, ...v }, h) => {
    const g = ge(() => e || Lr(`ui-${n}`), [e, n]), b = Object.freeze({
      right: /* @__PURE__ */ p("path", { id: "done_all", d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z" }),
      wrong: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }),
      normal: n === "checkbox" ? /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }) : null
    }), y = ({ target: x }) => {
      if (f) {
        if (x.checked) {
          f({ id: x.id, value: x.value });
          return;
        }
        f({ id: x.id, value: "" });
      }
    };
    return /* @__PURE__ */ N(
      "label",
      {
        htmlFor: g,
        className: `${jt["c-input"]} u-flex ${l ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": u,
        ...!d && { ...v },
        children: [
          /* @__PURE__ */ N("div", { className: jt["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: g,
                ref: h,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: jt["c-input__check"],
                onChange: y,
                ...s && { disabled: !0 },
                ...d && { ...v },
                ...c && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${jt["c-input__icon"]} ${c ? jt["c-input-defaultChecked"] : ""} `, children: b[a] && /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p(
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
          /* @__PURE__ */ p("span", { className: jt["c-input__label"], children: o })
        ]
      }
    );
  }
);
ia.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
ia.propTypes = {
  id: r.string,
  name: r.string,
  type: r.oneOf(["radio", "checkbox"]),
  label: r.string.isRequired,
  state: r.oneOf(["normal", "right", "wrong"]),
  value: r.oneOfType([r.string, r.number, r.bool]),
  addClass: r.string,
  isDisabled: r.bool,
  defaultChecked: r.bool,
  inherit: r.bool,
  onChange: r.func,
  __TYPE: pe("CheckBox")
};
const Ps = ({ legend: e, children: t, onChecked: n, addClass: o }) => {
  const [a, i] = X([]), l = U(), s = (d) => {
    l.current = d || "";
  }, c = (d) => l.current === "radio" ? [{ ...d }] : a.filter((h) => h.id === d.id).length ? [...a.filter((h) => h.id !== d.id)] : [...a, { ...d }], f = (d) => {
    const v = c(d);
    n && n(v), i(v);
  }, u = Ee.map(t, (d) => Ke(d) ? d.props.__TYPE === "CheckBox" ? (d.props.type && s(d.props.type), xe(d, { ...d.props, onChange: f })) : d : null);
  return /* @__PURE__ */ N("fieldset", { ...o && { className: `${o}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Ve(u, ["CheckBox"]) })
  ] });
};
Ps.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.element]),
  legend: r.string,
  onChecked: r.func,
  addClass: r.string
};
const Ds = "_col_wu095_1", As = {
  col: Ds
}, Ns = ct(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${As.col} ${e ?? ""}`, ...t }));
Ns.propTypes = {
  addClass: r.string
};
const Is = {
  "c-content": "_c-content_u325r_1"
}, $s = ({ children: e, addClass: t, defaultStyle: n, ...o }) => /* @__PURE__ */ p(
  "section",
  {
    className: G({
      [Is["c-content"]]: !n,
      [t]: t
    }),
    ...o,
    children: e
  }
);
$s.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.element, r.arrayOf(r.node), r.node]),
  defaultStyle: r.bool,
  addClass: r.string
};
const zn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Gt(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function jr(e) {
  return "nodeType" in e;
}
function qe(e) {
  var t, n;
  return e ? Gt(e) ? e : jr(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Fr(e) {
  const {
    Document: t
  } = qe(e);
  return e instanceof t;
}
function _n(e) {
  return Gt(e) ? !1 : e instanceof qe(e).HTMLElement;
}
function ks(e) {
  return e instanceof qe(e).SVGElement;
}
function Zt(e) {
  return e ? Gt(e) ? e.document : jr(e) ? Fr(e) ? e : _n(e) ? e.ownerDocument : document : document : document;
}
const vt = zn ? Zo : H;
function Br(e) {
  const t = U(e);
  return vt(() => {
    t.current = e;
  }), Ne(function() {
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...o);
  }, []);
}
function Ms() {
  const e = U(null), t = Ne((o, a) => {
    e.current = setInterval(o, a);
  }, []), n = Ne(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function vn(e, t) {
  t === void 0 && (t = [e]);
  const n = U(e);
  return vt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function wn(e, t) {
  const n = U();
  return ge(
    () => {
      const o = e(n.current);
      return n.current = o, o;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Fn(e) {
  const t = Br(e), n = U(null), o = Ne(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, o];
}
function Or(e) {
  const t = U();
  return H(() => {
    t.current = e;
  }, [e]), t.current;
}
let ur = {};
function Wn(e, t) {
  return ge(() => {
    if (t)
      return t;
    const n = ur[e] == null ? 0 : ur[e] + 1;
    return ur[e] = n, e + "-" + n;
  }, [e, t]);
}
function sa(e) {
  return function(t) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    return o.reduce((i, l) => {
      const s = Object.entries(l);
      for (const [c, f] of s) {
        const u = i[c];
        u != null && (i[c] = u + e * f);
      }
      return i;
    }, {
      ...t
    });
  };
}
const Vt = /* @__PURE__ */ sa(1), Bn = /* @__PURE__ */ sa(-1);
function Ls(e) {
  return "clientX" in e && "clientY" in e;
}
function la(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = qe(e.target);
  return t && e instanceof t;
}
function js(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = qe(e.target);
  return t && e instanceof t;
}
function Sr(e) {
  if (js(e)) {
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
  return Ls(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Cr = /* @__PURE__ */ Object.freeze({
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
        return [Cr.Translate.toString(e), Cr.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: o
      } = e;
      return t + " " + n + "ms " + o;
    }
  }
}), wo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Fs(e) {
  return e.matches(wo) ? e : e.querySelector(wo);
}
const Bs = {
  display: "none"
};
function Vs(e) {
  let {
    id: t,
    value: n
  } = e;
  return je.createElement("div", {
    id: t,
    style: Bs
  }, n);
}
const qs = {
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
function Ys(e) {
  let {
    id: t,
    announcement: n
  } = e;
  return je.createElement("div", {
    id: t,
    style: qs,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, n);
}
function zs() {
  const [e, t] = X("");
  return {
    announce: Ne((o) => {
      o != null && t(o);
    }, []),
    announcement: e
  };
}
const ca = /* @__PURE__ */ Xe(null);
function Ws(e) {
  const t = ye(ca);
  H(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Us() {
  const [e] = X(() => /* @__PURE__ */ new Set()), t = Ne((o) => (e.add(o), () => e.delete(o)), [e]);
  return [Ne((o) => {
    let {
      type: a,
      event: i
    } = o;
    e.forEach((l) => {
      var s;
      return (s = l[a]) == null ? void 0 : s.call(l, i);
    });
  }, [e]), t];
}
const Hs = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Gs = {
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
function Zs(e) {
  let {
    announcements: t = Gs,
    container: n,
    hiddenTextDescribedById: o,
    screenReaderInstructions: a = Hs
  } = e;
  const {
    announce: i,
    announcement: l
  } = zs(), s = Wn("DndLiveRegion"), [c, f] = X(!1);
  if (H(() => {
    f(!0);
  }, []), Ws(ge(() => ({
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
  }), [i, t])), !c)
    return null;
  const u = je.createElement(je.Fragment, null, je.createElement(Vs, {
    id: o,
    value: a.draggable
  }), je.createElement(Ys, {
    id: s,
    announcement: l
  }));
  return n ? Xo(u, n) : u;
}
var Oe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Oe || (Oe = {}));
function Vn() {
}
function dr(e, t) {
  return ge(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Ks() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ge(
    () => [...t].filter((o) => o != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const ot = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Xs(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Js(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: o
    }
  } = t;
  return n - o;
}
function Qs(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: o
    }
  } = t;
  return o - n;
}
function xo(e) {
  let {
    left: t,
    top: n,
    height: o,
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
    y: n + o
  }, {
    x: t + a,
    y: n + o
  }];
}
function ua(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
const el = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: o
  } = e;
  const a = xo(t), i = [];
  for (const l of o) {
    const {
      id: s
    } = l, c = n.get(s);
    if (c) {
      const f = xo(c), u = a.reduce((v, h, g) => v + Xs(f[g], h), 0), d = Number((u / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: l,
          value: d
        }
      });
    }
  }
  return i.sort(Js);
};
function tl(e, t) {
  const n = Math.max(t.top, e.top), o = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), l = a - o, s = i - n;
  if (o < a && n < i) {
    const c = t.width * t.height, f = e.width * e.height, u = l * s, d = u / (c + f - u);
    return Number(d.toFixed(4));
  }
  return 0;
}
const nl = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: o
  } = e;
  const a = [];
  for (const i of o) {
    const {
      id: l
    } = i, s = n.get(l);
    if (s) {
      const c = tl(s, t);
      c > 0 && a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return a.sort(Qs);
};
function rl(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function da(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : ot;
}
function ol(e) {
  return function(n) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      a[i - 1] = arguments[i];
    return a.reduce((l, s) => ({
      ...l,
      top: l.top + e * s.y,
      bottom: l.bottom + e * s.y,
      left: l.left + e * s.x,
      right: l.right + e * s.x
    }), {
      ...n
    });
  };
}
const al = /* @__PURE__ */ ol(1);
function il(e) {
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
function sl(e, t, n) {
  const o = il(t);
  if (!o)
    return e;
  const {
    scaleX: a,
    scaleY: i,
    x: l,
    y: s
  } = o, c = e.left - l - (1 - a) * parseFloat(n), f = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = a ? e.width / a : e.width, d = i ? e.height / i : e.height;
  return {
    width: u,
    height: d,
    top: f,
    right: c + u,
    bottom: f + d,
    left: c
  };
}
const ll = {
  ignoreTransform: !1
};
function xn(e, t) {
  t === void 0 && (t = ll);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      getComputedStyle: f
    } = qe(e), {
      transform: u,
      transformOrigin: d
    } = f(e);
    u && (n = sl(n, u, d));
  }
  const {
    top: o,
    left: a,
    width: i,
    height: l,
    bottom: s,
    right: c
  } = n;
  return {
    top: o,
    left: a,
    width: i,
    height: l,
    bottom: s,
    right: c
  };
}
function Eo(e) {
  return xn(e, {
    ignoreTransform: !0
  });
}
function cl(e) {
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
function ul(e, t) {
  return t === void 0 && (t = qe(e).getComputedStyle(e)), t.position === "fixed";
}
function dl(e, t) {
  t === void 0 && (t = qe(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((a) => {
    const i = t[a];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function Vr(e, t) {
  const n = [];
  function o(a) {
    if (t != null && n.length >= t || !a)
      return n;
    if (Fr(a) && a.scrollingElement != null && !n.includes(a.scrollingElement))
      return n.push(a.scrollingElement), n;
    if (!_n(a) || ks(a) || n.includes(a))
      return n;
    const {
      getComputedStyle: i
    } = qe(a), l = i(a);
    return a !== e && dl(a, l) && n.push(a), ul(a, l) ? n : o(a.parentNode);
  }
  return e ? o(e) : n;
}
function fa(e) {
  const [t] = Vr(e, 1);
  return t ?? null;
}
function fr(e) {
  return !zn || !e ? null : Gt(e) ? e : jr(e) ? Fr(e) || e === Zt(e).scrollingElement ? window : _n(e) ? e : null : null;
}
function pa(e) {
  return Gt(e) ? e.scrollX : e.scrollLeft;
}
function va(e) {
  return Gt(e) ? e.scrollY : e.scrollTop;
}
function Rr(e) {
  return {
    x: pa(e),
    y: va(e)
  };
}
var Re;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Re || (Re = {}));
function ha(e) {
  return !zn || !e ? !1 : e === document.scrollingElement;
}
function ma(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ha(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, o = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, a = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, l = e.scrollTop >= o.y, s = e.scrollLeft >= o.x;
  return {
    isTop: a,
    isLeft: i,
    isBottom: l,
    isRight: s,
    maxScroll: o,
    minScroll: t
  };
}
const fl = {
  x: 0.2,
  y: 0.2
};
function pl(e, t, n, o, a) {
  let {
    top: i,
    left: l,
    right: s,
    bottom: c
  } = n;
  o === void 0 && (o = 10), a === void 0 && (a = fl);
  const {
    isTop: f,
    isBottom: u,
    isLeft: d,
    isRight: v
  } = ma(e), h = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, b = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + b.height ? (h.y = Re.Backward, g.y = o * Math.abs((t.top + b.height - i) / b.height)) : !u && c >= t.bottom - b.height && (h.y = Re.Forward, g.y = o * Math.abs((t.bottom - b.height - c) / b.height)), !v && s >= t.right - b.width ? (h.x = Re.Forward, g.x = o * Math.abs((t.right - b.width - s) / b.width)) : !d && l <= t.left + b.width && (h.x = Re.Backward, g.x = o * Math.abs((t.left + b.width - l) / b.width)), {
    direction: h,
    speed: g
  };
}
function vl(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: l
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: l,
      width: i,
      height: l
    };
  }
  const {
    top: t,
    left: n,
    right: o,
    bottom: a
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: o,
    bottom: a,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function ga(e) {
  return e.reduce((t, n) => Vt(t, Rr(n)), ot);
}
function hl(e) {
  return e.reduce((t, n) => t + pa(n), 0);
}
function ml(e) {
  return e.reduce((t, n) => t + va(n), 0);
}
function gl(e, t) {
  if (t === void 0 && (t = xn), !e)
    return;
  const {
    top: n,
    left: o,
    bottom: a,
    right: i
  } = t(e);
  fa(e) && (a <= 0 || i <= 0 || n >= window.innerHeight || o >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const bl = [["x", ["left", "right"], hl], ["y", ["top", "bottom"], ml]];
class qr {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const o = Vr(n), a = ga(o);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, l, s] of bl)
      for (const c of l)
        Object.defineProperty(this, c, {
          get: () => {
            const f = s(o), u = a[i] - f;
            return this.rect[c] + u;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class sn {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var o;
        return (o = this.target) == null ? void 0 : o.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, o) {
    var a;
    (a = this.target) == null || a.addEventListener(t, n, o), this.listeners.push([t, n, o]);
  }
}
function yl(e) {
  const {
    EventTarget: t
  } = qe(e);
  return e instanceof t ? e : Zt(e);
}
function pr(e, t) {
  const n = Math.abs(e.x), o = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + o ** 2) > t : "x" in t && "y" in t ? n > t.x && o > t.y : "x" in t ? n > t.x : "y" in t ? o > t.y : !1;
}
var He;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(He || (He = {}));
function To(e) {
  e.preventDefault();
}
function _l(e) {
  e.stopPropagation();
}
var ae;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(ae || (ae = {}));
const ba = {
  start: [ae.Space, ae.Enter],
  cancel: [ae.Esc],
  end: [ae.Space, ae.Enter]
}, wl = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ae.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ae.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ae.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ae.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Yr {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new sn(Zt(n)), this.windowListeners = new sn(qe(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(He.Resize, this.handleCancel), this.windowListeners.add(He.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(He.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, o = t.node.current;
    o && gl(o), n(ot);
  }
  handleKeyDown(t) {
    if (la(t)) {
      const {
        active: n,
        context: o,
        options: a
      } = this.props, {
        keyboardCodes: i = ba,
        coordinateGetter: l = wl,
        scrollBehavior: s = "smooth"
      } = a, {
        code: c
      } = t;
      if (i.end.includes(c)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(c)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: f
      } = o.current, u = f ? {
        x: f.left,
        y: f.top
      } : ot;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const d = l(t, {
        active: n,
        context: o.current,
        currentCoordinates: u
      });
      if (d) {
        const v = Bn(d, u), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = o.current;
        for (const b of g) {
          const y = t.code, {
            isTop: x,
            isRight: C,
            isLeft: S,
            isBottom: D,
            maxScroll: _,
            minScroll: E
          } = ma(b), w = vl(b), R = {
            x: Math.min(y === ae.Right ? w.right - w.width / 2 : w.right, Math.max(y === ae.Right ? w.left : w.left + w.width / 2, d.x)),
            y: Math.min(y === ae.Down ? w.bottom - w.height / 2 : w.bottom, Math.max(y === ae.Down ? w.top : w.top + w.height / 2, d.y))
          }, I = y === ae.Right && !C || y === ae.Left && !S, L = y === ae.Down && !D || y === ae.Up && !x;
          if (I && R.x !== d.x) {
            const M = b.scrollLeft + v.x, ee = y === ae.Right && M <= _.x || y === ae.Left && M >= E.x;
            if (ee && !v.y) {
              b.scrollTo({
                left: M,
                behavior: s
              });
              return;
            }
            ee ? h.x = b.scrollLeft - M : h.x = y === ae.Right ? b.scrollLeft - _.x : b.scrollLeft - E.x, h.x && b.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (L && R.y !== d.y) {
            const M = b.scrollTop + v.y, ee = y === ae.Down && M <= _.y || y === ae.Up && M >= E.y;
            if (ee && !v.x) {
              b.scrollTo({
                top: M,
                behavior: s
              });
              return;
            }
            ee ? h.y = b.scrollTop - M : h.y = y === ae.Down ? b.scrollTop - _.y : b.scrollTop - E.y, h.y && b.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Vt(Bn(d, this.referenceCoordinates), h));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: o
    } = this.props;
    t.preventDefault(), o(n);
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
Yr.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: o = ba,
      onActivation: a
    } = t, {
      active: i
    } = n;
    const {
      code: l
    } = e.nativeEvent;
    if (o.start.includes(l)) {
      const s = i.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), a == null || a({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Oo(e) {
  return Boolean(e && "distance" in e);
}
function So(e) {
  return Boolean(e && "delay" in e);
}
class zr {
  constructor(t, n, o) {
    var a;
    o === void 0 && (o = yl(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: l
    } = i;
    this.props = t, this.events = n, this.document = Zt(l), this.documentListeners = new sn(this.document), this.listeners = new sn(o), this.windowListeners = new sn(qe(l)), this.initialCoordinates = (a = Sr(i)) != null ? a : ot, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(He.Resize, this.handleCancel), this.windowListeners.add(He.DragStart, To), this.windowListeners.add(He.VisibilityChange, this.handleCancel), this.windowListeners.add(He.ContextMenu, To), this.documentListeners.add(He.Keydown, this.handleKeydown), n) {
      if (Oo(n))
        return;
      if (So(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(He.Click, _l, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(He.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: o,
      initialCoordinates: a,
      props: i
    } = this, {
      onMove: l,
      options: {
        activationConstraint: s
      }
    } = i;
    if (!a)
      return;
    const c = (n = Sr(t)) != null ? n : ot, f = Bn(a, c);
    if (!o && s) {
      if (So(s))
        return pr(f, s.tolerance) ? this.handleCancel() : void 0;
      if (Oo(s))
        return s.tolerance != null && pr(f, s.tolerance) ? this.handleCancel() : pr(f, s.distance) ? this.handleStart() : void 0;
    }
    t.cancelable && t.preventDefault(), l(c);
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
    t.code === ae.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const xl = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ya extends zr {
  constructor(t) {
    const {
      event: n
    } = t, o = Zt(n.target);
    super(t, xl, o);
  }
}
ya.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: o
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (o == null || o({
      event: n
    }), !0);
  }
}];
const El = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Pr;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Pr || (Pr = {}));
class _a extends zr {
  constructor(t) {
    super(t, El, Zt(t.event.target));
  }
}
_a.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: o
    } = t;
    return n.button === Pr.RightClick ? !1 : (o == null || o({
      event: n
    }), !0);
  }
}];
const vr = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class wa extends zr {
  constructor(t) {
    super(t, vr);
  }
  static setup() {
    return window.addEventListener(vr.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(vr.move.name, t);
    };
    function t() {
    }
  }
}
wa.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: o
    } = t;
    const {
      touches: a
    } = n;
    return a.length > 1 ? !1 : (o == null || o({
      event: n
    }), !0);
  }
}];
var ln;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(ln || (ln = {}));
var qn;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(qn || (qn = {}));
function Tl(e) {
  let {
    acceleration: t,
    activator: n = ln.Pointer,
    canScroll: o,
    draggingRect: a,
    enabled: i,
    interval: l = 5,
    order: s = qn.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: f,
    scrollableAncestorRects: u,
    delta: d,
    threshold: v
  } = e;
  const h = Sl({
    delta: d,
    disabled: !i
  }), [g, b] = Ms(), y = U({
    x: 0,
    y: 0
  }), x = U({
    x: 0,
    y: 0
  }), C = ge(() => {
    switch (n) {
      case ln.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case ln.DraggableRect:
        return a;
    }
  }, [n, a, c]), S = U(null), D = Ne(() => {
    const E = S.current;
    if (!E)
      return;
    const w = y.current.x * x.current.x, R = y.current.y * x.current.y;
    E.scrollBy(w, R);
  }, []), _ = ge(() => s === qn.TreeOrder ? [...f].reverse() : f, [s, f]);
  H(
    () => {
      if (!i || !f.length || !C) {
        b();
        return;
      }
      for (const E of _) {
        if ((o == null ? void 0 : o(E)) === !1)
          continue;
        const w = f.indexOf(E), R = u[w];
        if (!R)
          continue;
        const {
          direction: I,
          speed: L
        } = pl(E, R, C, t, v);
        for (const M of ["x", "y"])
          h[M][I[M]] || (L[M] = 0, I[M] = 0);
        if (L.x > 0 || L.y > 0) {
          b(), S.current = E, g(D, l), y.current = L, x.current = I;
          return;
        }
      }
      y.current = {
        x: 0,
        y: 0
      }, x.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      D,
      o,
      b,
      i,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(C),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      g,
      f,
      _,
      u,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const Ol = {
  x: {
    [Re.Backward]: !1,
    [Re.Forward]: !1
  },
  y: {
    [Re.Backward]: !1,
    [Re.Forward]: !1
  }
};
function Sl(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const o = Or(t);
  return wn((a) => {
    if (n || !o || !a)
      return Ol;
    const i = {
      x: Math.sign(t.x - o.x),
      y: Math.sign(t.y - o.y)
    };
    return {
      x: {
        [Re.Backward]: a.x[Re.Backward] || i.x === -1,
        [Re.Forward]: a.x[Re.Forward] || i.x === 1
      },
      y: {
        [Re.Backward]: a.y[Re.Backward] || i.y === -1,
        [Re.Forward]: a.y[Re.Forward] || i.y === 1
      }
    };
  }, [n, t, o]);
}
function Cl(e, t) {
  const n = t !== null ? e.get(t) : void 0, o = n ? n.node.current : null;
  return wn((a) => {
    var i;
    return t === null ? null : (i = o ?? a) != null ? i : null;
  }, [o, t]);
}
function Rl(e, t) {
  return ge(() => e.reduce((n, o) => {
    const {
      sensor: a
    } = o, i = a.activators.map((l) => ({
      eventName: l.eventName,
      handler: t(l.handler, o)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var hn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(hn || (hn = {}));
var Dr;
(function(e) {
  e.Optimized = "optimized";
})(Dr || (Dr = {}));
const Co = /* @__PURE__ */ new Map();
function Pl(e, t) {
  let {
    dragging: n,
    dependencies: o,
    config: a
  } = t;
  const [i, l] = X(null), {
    frequency: s,
    measure: c,
    strategy: f
  } = a, u = U(e), d = y(), v = vn(d), h = Ne(function(x) {
    x === void 0 && (x = []), !v.current && l((C) => C === null ? x : C.concat(x.filter((S) => !C.includes(S))));
  }, [v]), g = U(null), b = wn((x) => {
    if (d && !n)
      return Co;
    if (!x || x === Co || u.current !== e || i != null) {
      const C = /* @__PURE__ */ new Map();
      for (let S of e) {
        if (!S)
          continue;
        if (i && i.length > 0 && !i.includes(S.id) && S.rect.current) {
          C.set(S.id, S.rect.current);
          continue;
        }
        const D = S.node.current, _ = D ? new qr(c(D), D) : null;
        S.rect.current = _, _ && C.set(S.id, _);
      }
      return C;
    }
    return x;
  }, [e, i, n, d, c]);
  return H(() => {
    u.current = e;
  }, [e]), H(
    () => {
      d || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), H(
    () => {
      i && i.length > 0 && l(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), H(
    () => {
      d || typeof s != "number" || g.current !== null || (g.current = setTimeout(() => {
        h(), g.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, d, h, ...o]
  ), {
    droppableRects: b,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function y() {
    switch (f) {
      case hn.Always:
        return !1;
      case hn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function xa(e, t) {
  return wn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Dl(e, t) {
  return xa(e, t);
}
function Al(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const o = Br(t), a = ge(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(o);
  }, [o, n]);
  return H(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Un(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const o = Br(t), a = ge(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(o);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return H(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Nl(e) {
  return new qr(xn(e), e);
}
function Ro(e, t, n) {
  t === void 0 && (t = Nl);
  const [o, a] = $r(s, null), i = Al({
    callback(c) {
      if (e)
        for (const f of c) {
          const {
            type: u,
            target: d
          } = f;
          if (u === "childList" && d instanceof HTMLElement && d.contains(e)) {
            a();
            break;
          }
        }
    }
  }), l = Un({
    callback: a
  });
  return vt(() => {
    a(), e ? (l == null || l.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (l == null || l.disconnect(), i == null || i.disconnect());
  }, [e]), o;
  function s(c) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var f;
      return (f = c ?? n) != null ? f : null;
    }
    const u = t(e);
    return JSON.stringify(c) === JSON.stringify(u) ? c : u;
  }
}
function Il(e) {
  const t = xa(e);
  return da(e, t);
}
const Po = [];
function $l(e) {
  const t = U(e), n = wn((o) => e ? o && o !== Po && e && t.current && e.parentNode === t.current.parentNode ? o : Vr(e) : Po, [e]);
  return H(() => {
    t.current = e;
  }, [e]), n;
}
function kl(e) {
  const [t, n] = X(null), o = U(e), a = Ne((i) => {
    const l = fr(i.target);
    l && n((s) => s ? (s.set(l, Rr(l)), new Map(s)) : null);
  }, []);
  return H(() => {
    const i = o.current;
    if (e !== i) {
      l(i);
      const s = e.map((c) => {
        const f = fr(c);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, Rr(f)]) : null;
      }).filter((c) => c != null);
      n(s.length ? new Map(s) : null), o.current = e;
    }
    return () => {
      l(e), l(i);
    };
    function l(s) {
      s.forEach((c) => {
        const f = fr(c);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), ge(() => e.length ? t ? Array.from(t.values()).reduce((i, l) => Vt(i, l), ot) : ga(e) : ot, [e, t]);
}
function Do(e, t) {
  t === void 0 && (t = []);
  const n = U(null);
  return H(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), H(() => {
    const o = e !== ot;
    o && !n.current && (n.current = e), !o && n.current && (n.current = null);
  }, [e]), n.current ? Bn(e, n.current) : ot;
}
function Ml(e) {
  H(
    () => {
      if (!zn)
        return;
      const t = e.map((n) => {
        let {
          sensor: o
        } = n;
        return o.setup == null ? void 0 : o.setup();
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
function Ll(e, t) {
  return ge(() => e.reduce((n, o) => {
    let {
      eventName: a,
      handler: i
    } = o;
    return n[a] = (l) => {
      i(l, t);
    }, n;
  }, {}), [e, t]);
}
function Ea(e) {
  return ge(() => e ? cl(e) : null, [e]);
}
const hr = [];
function jl(e, t) {
  t === void 0 && (t = xn);
  const [n] = e, o = Ea(n ? qe(n) : null), [a, i] = $r(s, hr), l = Un({
    callback: i
  });
  return e.length > 0 && a === hr && i(), vt(() => {
    e.length ? e.forEach((c) => l == null ? void 0 : l.observe(c)) : (l == null || l.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((c) => ha(c) ? o : new qr(t(c), c)) : hr;
  }
}
function Fl(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return _n(t) ? t : e;
}
function Bl(e) {
  let {
    measure: t
  } = e;
  const [n, o] = X(null), a = Ne((f) => {
    for (const {
      target: u
    } of f)
      if (_n(u)) {
        o((d) => {
          const v = t(u);
          return d ? {
            ...d,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = Un({
    callback: a
  }), l = Ne((f) => {
    const u = Fl(f);
    i == null || i.disconnect(), u && (i == null || i.observe(u)), o(u ? t(u) : null);
  }, [t, i]), [s, c] = Fn(l);
  return ge(() => ({
    nodeRef: s,
    rect: n,
    setRef: c
  }), [n, s, c]);
}
const Vl = [{
  sensor: ya,
  options: {}
}, {
  sensor: Yr,
  options: {}
}], ql = {
  current: {}
}, $n = {
  draggable: {
    measure: Eo
  },
  droppable: {
    measure: Eo,
    strategy: hn.WhileDragging,
    frequency: Dr.Optimized
  },
  dragOverlay: {
    measure: xn
  }
};
class cn extends Map {
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
    var n, o;
    return (n = (o = this.get(t)) == null ? void 0 : o.node.current) != null ? n : void 0;
  }
}
const Yl = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new cn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Vn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: $n,
  measureDroppableContainers: Vn,
  windowRect: null,
  measuringScheduled: !1
}, zl = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Vn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Vn
}, Hn = /* @__PURE__ */ Xe(zl), Wl = /* @__PURE__ */ Xe(Yl);
function Ul() {
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
      containers: new cn()
    }
  };
}
function Hl(e, t) {
  switch (t.type) {
    case Oe.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Oe.DragMove:
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
    case Oe.DragEnd:
    case Oe.DragCancel:
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
    case Oe.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: o
      } = n, a = new cn(e.droppable.containers);
      return a.set(o, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case Oe.SetDroppableDisabled: {
      const {
        id: n,
        key: o,
        disabled: a
      } = t, i = e.droppable.containers.get(n);
      if (!i || o !== i.key)
        return e;
      const l = new cn(e.droppable.containers);
      return l.set(n, {
        ...i,
        disabled: a
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: l
        }
      };
    }
    case Oe.UnregisterDroppable: {
      const {
        id: n,
        key: o
      } = t, a = e.droppable.containers.get(n);
      if (!a || o !== a.key)
        return e;
      const i = new cn(e.droppable.containers);
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
function Gl(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: o,
    draggableNodes: a
  } = ye(Hn), i = Or(o), l = Or(n == null ? void 0 : n.id);
  return H(() => {
    if (!t && !o && i && l != null) {
      if (!la(i) || document.activeElement === i.target)
        return;
      const s = a.get(l);
      if (!s)
        return;
      const {
        activatorNode: c,
        node: f
      } = s;
      if (!c.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const u of [c.current, f.current]) {
          if (!u)
            continue;
          const d = Fs(u);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [o, t, a, l, i]), null;
}
function Zl(e, t) {
  let {
    transform: n,
    ...o
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...o
  }), n) : n;
}
function Kl(e) {
  return ge(
    () => ({
      draggable: {
        ...$n.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...$n.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...$n.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function Xl(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: o,
    config: a = !0
  } = e;
  const i = U(!1), {
    x: l,
    y: s
  } = typeof a == "boolean" ? {
    x: a,
    y: a
  } : a;
  vt(() => {
    if (!l && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !o)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const u = n(f), d = da(u, o);
    if (l || (d.x = 0), s || (d.y = 0), i.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const v = fa(f);
      v && v.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [t, l, s, o, n]);
}
const Ta = /* @__PURE__ */ Xe({
  ...ot,
  scaleX: 1,
  scaleY: 1
});
var bt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(bt || (bt = {}));
const Jl = /* @__PURE__ */ Ko(function(t) {
  var n, o, a, i;
  let {
    id: l,
    accessibility: s,
    autoScroll: c = !0,
    children: f,
    sensors: u = Vl,
    collisionDetection: d = nl,
    measuring: v,
    modifiers: h,
    ...g
  } = t;
  const b = $r(Hl, void 0, Ul), [y, x] = b, [C, S] = Us(), [D, _] = X(bt.Uninitialized), E = D === bt.Initialized, {
    draggable: {
      active: w,
      nodes: R,
      translate: I
    },
    droppable: {
      containers: L
    }
  } = y, M = w ? R.get(w) : null, ee = U({
    initial: null,
    translated: null
  }), K = ge(() => {
    var ve;
    return w != null ? {
      id: w,
      // It's possible for the active node to unmount while dragging
      data: (ve = M == null ? void 0 : M.data) != null ? ve : ql,
      rect: ee
    } : null;
  }, [w, M]), re = U(null), [le, ie] = X(null), [te, Te] = X(null), he = vn(g, Object.values(g)), O = Wn("DndDescribedBy", l), $ = ge(() => L.getEnabled(), [L]), B = Kl(v), {
    droppableRects: V,
    measureDroppableContainers: F,
    measuringScheduled: W
  } = Pl($, {
    dragging: E,
    dependencies: [I.x, I.y],
    config: B.droppable
  }), j = Cl(R, w), Y = ge(() => te ? Sr(te) : null, [te]), z = Rn(), J = Dl(j, B.draggable.measure);
  Xl({
    activeNode: w ? R.get(w) : null,
    config: z.layoutShiftCompensation,
    initialRect: J,
    measure: B.draggable.measure
  });
  const q = Ro(j, B.draggable.measure, J), A = Ro(j ? j.parentElement : null), T = U({
    activatorEvent: null,
    active: null,
    activeNode: j,
    collisionRect: null,
    collisions: null,
    droppableRects: V,
    draggableNodes: R,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: L,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Q = L.getNodeFor((n = T.current.over) == null ? void 0 : n.id), me = Bl({
    measure: B.dragOverlay.measure
  }), Se = (o = me.nodeRef.current) != null ? o : j, Ae = E ? (a = me.rect) != null ? a : q : null, it = Boolean(me.nodeRef.current && me.rect), ut = Il(it ? null : q), st = Ea(Se ? qe(Se) : null), Ce = $l(E ? Q ?? j : null), Qe = jl(Ce), et = Zl(h, {
    transform: {
      x: I.x - ut.x,
      y: I.y - ut.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: te,
    active: K,
    activeNodeRect: q,
    containerNodeRect: A,
    draggingNodeRect: Ae,
    over: T.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Ce,
    scrollableAncestorRects: Qe,
    windowRect: st
  }), wt = Y ? Vt(Y, I) : null, ht = kl(Ce), xt = Do(ht), Et = Do(ht, [q]), Ie = Vt(et, xt), tt = Ae ? al(Ae, et) : null, mt = K && tt ? d({
    active: K,
    collisionRect: tt,
    droppableRects: V,
    droppableContainers: $,
    pointerCoordinates: wt
  }) : null, Xt = ua(mt, "id"), [ze, On] = X(null), er = it ? et : Vt(et, Et), tr = rl(er, (i = ze == null ? void 0 : ze.rect) != null ? i : null, q), Sn = Ne(
    (ve, Pe) => {
      let {
        sensor: De,
        options: nt
      } = Pe;
      if (re.current == null)
        return;
      const ke = R.get(re.current);
      if (!ke)
        return;
      const Me = ve.nativeEvent, We = new De({
        active: re.current,
        activeNode: ke,
        event: Me,
        options: nt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: T,
        onStart(Le) {
          const Tt = re.current;
          if (Tt == null)
            return;
          const Ot = R.get(Tt);
          if (!Ot)
            return;
          const {
            onDragStart: St
          } = he.current, kt = {
            active: {
              id: Tt,
              data: Ot.data,
              rect: ee
            }
          };
          Qt(() => {
            St == null || St(kt), _(bt.Initializing), x({
              type: Oe.DragStart,
              initialCoordinates: Le,
              active: Tt
            }), C({
              type: "onDragStart",
              event: kt
            });
          });
        },
        onMove(Le) {
          x({
            type: Oe.DragMove,
            coordinates: Le
          });
        },
        onEnd: dt(Oe.DragEnd),
        onCancel: dt(Oe.DragCancel)
      });
      Qt(() => {
        ie(We), Te(ve.nativeEvent);
      });
      function dt(Le) {
        return async function() {
          const {
            active: Ot,
            collisions: St,
            over: kt,
            scrollAdjustedTranslate: Pn
          } = T.current;
          let Ct = null;
          if (Ot && Pn) {
            const {
              cancelDrop: Rt
            } = he.current;
            Ct = {
              activatorEvent: Me,
              active: Ot,
              collisions: St,
              delta: Pn,
              over: kt
            }, Le === Oe.DragEnd && typeof Rt == "function" && await Promise.resolve(Rt(Ct)) && (Le = Oe.DragCancel);
          }
          re.current = null, Qt(() => {
            x({
              type: Le
            }), _(bt.Uninitialized), On(null), ie(null), Te(null);
            const Rt = Le === Oe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ct) {
              const m = he.current[Rt];
              m == null || m(Ct), C({
                type: Rt,
                event: Ct
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [R]
  ), nr = Ne((ve, Pe) => (De, nt) => {
    const ke = De.nativeEvent, Me = R.get(nt);
    if (
      // Another sensor is already instantiating
      re.current !== null || // No active draggable
      !Me || // Event has already been captured
      ke.dndKit || ke.defaultPrevented
    )
      return;
    const We = {
      active: Me
    };
    ve(De, Pe.options, We) === !0 && (ke.dndKit = {
      capturedBy: Pe.sensor
    }, re.current = nt, Sn(De, Pe));
  }, [R, Sn]), Cn = Rl(u, nr);
  Ml(u), vt(() => {
    q && D === bt.Initializing && _(bt.Initialized);
  }, [q, D]), H(
    () => {
      const {
        onDragMove: ve
      } = he.current, {
        active: Pe,
        activatorEvent: De,
        collisions: nt,
        over: ke
      } = T.current;
      if (!Pe || !De)
        return;
      const Me = {
        active: Pe,
        activatorEvent: De,
        collisions: nt,
        delta: {
          x: Ie.x,
          y: Ie.y
        },
        over: ke
      };
      Qt(() => {
        ve == null || ve(Me), C({
          type: "onDragMove",
          event: Me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ie.x, Ie.y]
  ), H(
    () => {
      const {
        active: ve,
        activatorEvent: Pe,
        collisions: De,
        droppableContainers: nt,
        scrollAdjustedTranslate: ke
      } = T.current;
      if (!ve || re.current == null || !Pe || !ke)
        return;
      const {
        onDragOver: Me
      } = he.current, We = nt.get(Xt), dt = We && We.rect.current ? {
        id: We.id,
        rect: We.rect.current,
        data: We.data,
        disabled: We.disabled
      } : null, Le = {
        active: ve,
        activatorEvent: Pe,
        collisions: De,
        delta: {
          x: ke.x,
          y: ke.y
        },
        over: dt
      };
      Qt(() => {
        On(dt), Me == null || Me(Le), C({
          type: "onDragOver",
          event: Le
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Xt]
  ), vt(() => {
    T.current = {
      activatorEvent: te,
      active: K,
      activeNode: j,
      collisionRect: tt,
      collisions: mt,
      droppableRects: V,
      draggableNodes: R,
      draggingNode: Se,
      draggingNodeRect: Ae,
      droppableContainers: L,
      over: ze,
      scrollableAncestors: Ce,
      scrollAdjustedTranslate: Ie
    }, ee.current = {
      initial: Ae,
      translated: tt
    };
  }, [K, j, mt, tt, R, Se, Ae, V, L, ze, Ce, Ie]), Tl({
    ...z,
    delta: I,
    draggingRect: tt,
    pointerCoordinates: wt,
    scrollableAncestors: Ce,
    scrollableAncestorRects: Qe
  });
  const rr = ge(() => ({
    active: K,
    activeNode: j,
    activeNodeRect: q,
    activatorEvent: te,
    collisions: mt,
    containerNodeRect: A,
    dragOverlay: me,
    draggableNodes: R,
    droppableContainers: L,
    droppableRects: V,
    over: ze,
    measureDroppableContainers: F,
    scrollableAncestors: Ce,
    scrollableAncestorRects: Qe,
    measuringConfiguration: B,
    measuringScheduled: W,
    windowRect: st
  }), [K, j, q, te, mt, A, me, R, L, V, ze, F, Ce, Qe, B, W, st]), Jt = ge(() => ({
    activatorEvent: te,
    activators: Cn,
    active: K,
    activeNodeRect: q,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: x,
    draggableNodes: R,
    over: ze,
    measureDroppableContainers: F
  }), [te, Cn, K, q, x, O, R, ze, F]);
  return je.createElement(ca.Provider, {
    value: S
  }, je.createElement(Hn.Provider, {
    value: Jt
  }, je.createElement(Wl.Provider, {
    value: rr
  }, je.createElement(Ta.Provider, {
    value: tr
  }, f)), je.createElement(Gl, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), je.createElement(Zs, {
    ...s,
    hiddenTextDescribedById: O
  }));
  function Rn() {
    const ve = (le == null ? void 0 : le.autoScrollEnabled) === !1, Pe = typeof c == "object" ? c.enabled === !1 : c === !1, De = E && !ve && !Pe;
    return typeof c == "object" ? {
      ...c,
      enabled: De
    } : {
      enabled: De
    };
  }
}), Ql = /* @__PURE__ */ Xe(null), Ao = "button", ec = "Droppable";
function tc(e) {
  let {
    id: t,
    data: n,
    disabled: o = !1,
    attributes: a
  } = e;
  const i = Wn(ec), {
    activators: l,
    activatorEvent: s,
    active: c,
    activeNodeRect: f,
    ariaDescribedById: u,
    draggableNodes: d,
    over: v
  } = ye(Hn), {
    role: h = Ao,
    roleDescription: g = "draggable",
    tabIndex: b = 0
  } = a ?? {}, y = (c == null ? void 0 : c.id) === t, x = ye(y ? Ta : Ql), [C, S] = Fn(), [D, _] = Fn(), E = Ll(l, t), w = vn(n);
  vt(
    () => (d.set(t, {
      id: t,
      key: i,
      node: C,
      activatorNode: D,
      data: w
    }), () => {
      const I = d.get(t);
      I && I.key === i && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const R = ge(() => ({
    role: h,
    tabIndex: b,
    "aria-disabled": o,
    "aria-pressed": y && h === Ao ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": u.draggable
  }), [o, h, b, y, g, u.draggable]);
  return {
    active: c,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: R,
    isDragging: y,
    listeners: o ? void 0 : E,
    node: C,
    over: v,
    setNodeRef: S,
    setActivatorNodeRef: _,
    transform: x
  };
}
const nc = "Droppable", rc = {
  timeout: 25
};
function Oa(e) {
  let {
    data: t,
    disabled: n = !1,
    id: o,
    resizeObserverConfig: a
  } = e;
  const i = Wn(nc), {
    active: l,
    dispatch: s,
    over: c,
    measureDroppableContainers: f
  } = ye(Hn), u = U({
    disabled: n
  }), d = U(!1), v = U(null), h = U(null), {
    disabled: g,
    updateMeasurementsFor: b,
    timeout: y
  } = {
    ...rc,
    ...a
  }, x = vn(b ?? o), C = Ne(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(x.current) ? x.current : [x.current]), h.current = null;
      }, y);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), S = Un({
    callback: C,
    disabled: g || !l
  }), D = Ne((R, I) => {
    S && (I && (S.unobserve(I), d.current = !1), R && S.observe(R));
  }, [S]), [_, E] = Fn(D), w = vn(t);
  return H(() => {
    !S || !_.current || (S.disconnect(), d.current = !1, S.observe(_.current));
  }, [_, S]), vt(
    () => (s({
      type: Oe.RegisterDroppable,
      element: {
        id: o,
        key: i,
        disabled: n,
        node: _,
        rect: v,
        data: w
      }
    }), () => s({
      type: Oe.UnregisterDroppable,
      key: i,
      id: o
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o]
  ), H(() => {
    n !== u.current.disabled && (s({
      type: Oe.SetDroppableDisabled,
      id: o,
      key: i,
      disabled: n
    }), u.current.disabled = n);
  }, [o, i, n, s]), {
    active: l,
    rect: v,
    isOver: (c == null ? void 0 : c.id) === o,
    node: _,
    over: c,
    setNodeRef: E
  };
}
const oc = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, ac = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, ic = [ae.Down, ae.Right, ae.Up, ae.Left], sc = (e, { context: { active: t, droppableRects: n, droppableContainers: o, collisionRect: a } }) => {
  var i;
  if (ic.includes(e.code)) {
    e.preventDefault();
    const l = 20;
    if (!t || !a)
      return;
    const s = [];
    o.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const d = n.get(u.id);
      if (d)
        switch (e.code) {
          case ae.Down:
            a.top < d.top && s.push(u);
            break;
          case ae.Up:
            a.top > d.top + l && s.push(u);
            break;
          case ae.Left:
            a.left >= d.left + d.width && s.push(u);
            break;
          case ae.Right:
            a.left + a.width <= d.left && s.push(u);
            break;
        }
    });
    const c = el({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = ua(c, "id");
    if (f != null) {
      const u = o.get(f), d = u == null ? void 0 : u.node.current, v = u == null ? void 0 : u.rect.current;
      if (d && v)
        return ((i = u.data.current) == null ? void 0 : i.type) === "container" ? {
          x: v.left,
          y: v.top + l
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, Sa = Xe(), an = (e, t) => Ee.map(e, (n) => {
  var o;
  if (Ke(n) && n.props) {
    if (((o = n == null ? void 0 : n.props) == null ? void 0 : o.__TYPE) === t)
      return n;
    if (n.props.children)
      return an(n.props.children, t);
  }
}), lc = {
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
}, Ca = ({
  children: e,
  multipleDrags: t,
  onValidate: n,
  validate: o,
  reboot: a,
  propValidate: i,
  modifiers: l,
  announcements: s,
  onDragMove: c
}) => {
  const [f, u] = X([]), [d, v] = X(null), [h, g] = X(() => b());
  function b() {
    return [...an(e, "droppable"), ...an(e, "general-draggable")].reduce(
      (E, w) => ({
        ...E,
        [w.props.id]: w.props.children ? [...an(w.props.children, "draggable").map((R) => R.props.id)] : []
      }),
      {}
    );
  }
  const y = Object.freeze({
    restrictToVerticalAxis: ac,
    restrictToHorizontalAxis: oc
  }), x = Ks(
    dr(_a),
    dr(wa),
    dr(Yr, {
      coordinateGetter: sc
    })
  ), C = (E, w) => {
    if (Object.keys(h).pop() === E.id)
      return;
    let I = [...f.filter((L) => L !== w), E.data.current.validate.includes(w) ? w : ""].filter((L) => !!L);
    if (!t) {
      const L = h[E.id][0];
      I = L ? I.filter((M) => M !== L) : I;
    }
    n && n({ validate: [...I], active: !0 }), u(I);
  }, S = (E) => E in h ? E : Object.keys(h).find((w) => h[w].includes(E)), D = ({ active: E, over: w }) => {
    if (!w)
      return;
    v(null);
    const R = Object.keys(h).pop(), I = S(w.id), L = S(E.id);
    L !== I && (R !== w.id && C(w, E.id), g((M) => {
      const ee = M[L].filter((le) => le !== E.id), K = [...M[I]];
      return t ? {
        ...M,
        [L]: ee,
        [I]: [...K, E.id]
      } : {
        ...{
          ...M,
          [L]: ee,
          [I]: I === R ? [...K, E.id] : [E.id]
        },
        ...I !== R && M[I].length > 0 && { [R]: [...M[R].filter((le) => le !== E.id), ...M[I]] }
      };
    }));
  }, _ = (E) => Ee.map(E, (w) => {
    if (!w.props)
      return w;
    if (w.props.__TYPE !== "draggable")
      return w.props.id in h && h[w.props.id].length > 0 ? xe(w, { ...w.props }, [
        ...h[w.props.id].map((R) => an(e, "draggable").filter((I) => I.props.id === R)).flat()
      ]) : w.props.children ? xe(w, { ...w.props, children: _(w.props.children) }) : w;
  });
  return H(() => {
    a && (g(() => b()), n && n({ validate: [], active: !1 }));
  }, [a]), /* @__PURE__ */ p(Sa.Provider, { value: { listId: f, propValidate: i, validate: o, isDragging: d }, children: /* @__PURE__ */ p(
    Jl,
    {
      sensors: x,
      accessibility: { announcements: s },
      onDragStart: ({ active: E }) => v(E.id),
      onDragEnd: D,
      ...!!c && { onDragMove: c },
      onDragCancel: () => v(null),
      ...l && { modifiers: [y[l]] },
      children: _(e)
    }
  ) });
};
Ca.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: lc
};
Ca.propTypes = {
  children: r.oneOfType([r.element, r.arrayOf(r.element), r.node, r.arrayOf(r.node)]),
  multipleDrags: r.bool,
  onValidate: r.func,
  reboot: r.bool,
  validate: r.bool.isRequired,
  propValidate: r.string.isRequired,
  modifiers: r.oneOf(["restrictToVerticalAxis", "restrictToHorizontalAxis"]),
  announcements: r.object.isRequired,
  onDragMove: r.func
};
const cc = "_pop_1elvh_1", qt = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: cc
}, Ra = ({ children: e, id: t, addClass: n, dragging: o, label: a, attribute: i, disabledDefaultAttributes: l, element: s, defaultStyle: c, __TYPE: f, ...u }) => {
  const d = s || "div", { listId: v, propValidate: h, validate: g, isDragging: b } = ye(Sa), { attributes: y, listeners: x, setNodeRef: C, transform: S } = tc({
    id: t,
    disabled: g,
    data: {
      label: a
    },
    attributes: i
  });
  return /* @__PURE__ */ p(
    d,
    {
      id: t,
      ref: C,
      "data-type": f,
      className: G({
        [qt["c-draggable"]]: !c,
        [`${o} ${qt["is-draggable--active-animation"]}`]: b === t && !c,
        [n]: n
      }),
      style: { transform: Cr.Translate.toString(S) },
      ...g && { [h]: !!v.includes(t) },
      ...!l && { ...y },
      ...x,
      ...u,
      children: e
    }
  );
};
Ra.defaultProps = {
  __TYPE: "draggable",
  dragging: qt["c-draggable--active"],
  disabledDefaultAttributes: !1
};
Ra.propTypes = {
  children: r.oneOfType([r.node, r.element]),
  id: r.string.isRequired,
  addClass: r.string,
  dragging: r.string,
  label: r.string.isRequired,
  attribute: r.shape({
    role: r.string,
    roleDescription: r.string,
    tabIndex: r.number
  }),
  disabledDefaultAttributes: r.bool,
  element: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("draggable")
};
const Pa = ({
  children: e,
  id: t,
  validate: n,
  addClass: o,
  over: a,
  label: i,
  element: l,
  defaultStyle: s,
  __TYPE: c,
  ...f
}) => {
  const u = l || "div", { isOver: d, setNodeRef: v } = Oa({
    id: t,
    data: {
      validate: n,
      label: i,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(
    u,
    {
      ref: v,
      "data-type": c,
      className: G({
        [qt["c-droppable"]]: !s,
        [a]: d && !s,
        [o]: o
      }),
      ...f,
      children: e
    }
  );
};
Pa.defaultProps = {
  __TYPE: "droppable",
  over: qt["c-droppable--active"]
};
Pa.propTypes = {
  children: r.oneOfType([r.element, r.node]),
  id: r.string.isRequired,
  validate: r.array.isRequired,
  addClass: r.string,
  over: r.string,
  label: r.string.isRequired,
  element: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("droppable")
};
const Da = ({
  children: e,
  addClass: t,
  over: n,
  id: o,
  label: a,
  element: i,
  defaultStyle: l,
  __TYPE: s,
  ...c
}) => {
  const f = i || "div", { isOver: u, setNodeRef: d } = Oa({
    id: o,
    data: {
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(
    f,
    {
      id: o,
      ref: d,
      "data-type": s,
      className: G({
        [qt["c-droppable"]]: !l,
        [n]: u && !l,
        [t]: t
      }),
      ...c,
      children: e
    }
  );
};
Da.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  addClass: r.string,
  over: r.string,
  id: r.string.isRequired,
  label: r.string.isRequired,
  element: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("general-draggable")
};
Da.defaultProps = {
  __TYPE: "general-draggable",
  id: Lr("unique-id-general-"),
  label: "contendor inicial"
};
const ld = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ N("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ N("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ N("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ N("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ N(
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
        /* @__PURE__ */ N("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ N("feComponentTransfer", { children: [
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
      children: /* @__PURE__ */ N("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
      ] })
    }
  ),
  /* @__PURE__ */ N(
    "filter",
    {
      id: "hc_extension_invert_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "1.7" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ N(
    "filter",
    {
      id: "hc_extension_yellow_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ N("feComponentTransfer", { children: [
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
  /* @__PURE__ */ N(
    "filter",
    {
      id: "hc_extension_yellow_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ N(
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
        /* @__PURE__ */ N("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ N(
    "filter",
    {
      id: "hc_extension_red_on_white_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ N(
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
        /* @__PURE__ */ N("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ N(
    "filter",
    {
      id: "hc_extension_green_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ N(
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
        /* @__PURE__ */ N("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ N(
    "filter",
    {
      id: "hc_extension_yellow_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ N(
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
        /* @__PURE__ */ N("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
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
  /* @__PURE__ */ N(
    "filter",
    {
      id: "hc_extension_white_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ N("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  )
] }) }) }), No = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, Aa = ({ url: e, alt: t, title: n, width: o, addClass: a, noCaption: i, defaultStyle: l, ...s }) => {
  const [c, f] = X(!1), u = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, d = (h) => f(h), v = c ? u : `${e}`;
  return /* @__PURE__ */ N(
    "figure",
    {
      className: G({
        [No["c-image"]]: !l,
        [a]: a
      }),
      ...o && { style: { maxWidth: `${/%/gi.test(o) ? o : `${o}px`}` } },
      children: [
        /* @__PURE__ */ p("img", { src: v, onError: d, alt: t, ...s }),
        !i && /* @__PURE__ */ p("figcaption", { className: No["c-image__figcaption"], children: /* @__PURE__ */ N("p", { children: [
          /* @__PURE__ */ N("strong", { children: [
            n,
            " "
          ] }),
          t
        ] }) })
      ]
    }
  );
};
Aa.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
Aa.propTypes = {
  url: r.string,
  alt: r.string,
  title: r.string,
  width: r.string,
  addClass: r.string,
  noCaption: r.bool,
  defaultStyle: r.bool
};
const mn = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, Na = ct(({ id: e, type: t, value: n, placeholder: o, label: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: c, isReadOnly: f, defaultStyle: u, onValue: d }, v) => {
  const h = e || $t(), g = ({ target: b }) => {
    d && d({ id: h, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ N(
    "label",
    {
      htmlFor: h,
      className: G({
        [mn["c-label"]]: !u,
        [i]: i
      }),
      children: [
        /* @__PURE__ */ N("span", { className: `${!l && "u-sr-only"}`, children: [
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
            required: c,
            placeholder: o,
            autoComplete: "off",
            onChange: g,
            className: G({
              [mn["c-input"]]: !u
            }),
            ...f && { readOnly: f, "aria-readonly": f }
          }
        )
      ]
    }
  ) : null;
});
Na.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Na.propTypes = {
  id: r.string,
  type: r.oneOf(["text", "email", "password", "date"]),
  value: r.oneOfType([r.string, r.number]),
  placeholder: r.string,
  label: r.string.isRequired,
  addClass: r.string,
  isLabelVisible: r.bool,
  isDisabled: r.bool,
  isRequired: r.bool,
  isReadOnly: r.bool,
  defaultStyle: r.bool,
  onValue: r.func,
  __TYPE: pe("Input")
};
const uc = ({ children: e, onAllValue: t }) => {
  const [n, o] = X([]), a = (s) => o([...n.filter((c) => c.id !== s.id), { ...s }]);
  H(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, c, f) => Ee.toArray(s).map((u) => u.props.__TYPE === c ? xe(u, { ...u.props, ...f }) : u);
  return Ee.map(e, (s) => {
    var c, f;
    return Ke(s) ? ((c = s == null ? void 0 : s.props) == null ? void 0 : c.__TYPE) === "InputStyle" ? xe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? xe(s, { ...s.props, onValue: a }) : s : null;
  });
};
uc.propTypes = {
  children: r.oneOfType([r.arrayOf(r.node), r.arrayOf(r.element), r.element, r.node]),
  onAllValue: r.func
};
const Ia = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: G({
      [mn["c-input__wrapper-style"]]: !n,
      [t]: t
    }),
    children: Ve(e, ["InputLeftAddon", "InputRightAddon", "Input"])
  }
);
Ia.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.element]),
  addClass: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("InputStyle")
};
Ia.defaultProps = {
  __TYPE: "InputStyle"
};
const $a = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: G({
      [mn["c-input__left-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
$a.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.element, r.arrayOf(r.node), r.node]),
  addClass: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("InputLeftAddon")
};
$a.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const ka = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: G({
      [mn["c-input__right-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
ka.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.element, r.arrayOf(r.node), r.node]),
  addClass: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("InputRightAddon")
};
ka.defaultProps = {
  __TYPE: "InputRightAddon"
};
const dc = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, fc = ({ children: e, addClass: t, defaultStyle: n, ...o }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: G({
      [dc["c-kbd"]]: !n,
      [t]: t
    }),
    ...o,
    children: e
  }
);
fc.propTypes = {
  children: r.string,
  addClass: r.string,
  defaultStyle: r.bool
};
const Ma = ({ children: e, link: t, addClass: n, isExternal: o, label: a, ...i }) => /* @__PURE__ */ p(
  "a",
  {
    "aria-label": a,
    href: t,
    ...n && { className: `${n}` },
    ...o && { target: "_blank", rel: "noopener" },
    ...i,
    children: e
  }
);
Ma.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Ma.propTypes = {
  children: r.oneOfType([
    r.string,
    r.element,
    r.node,
    r.arrayOf(r.element),
    r.arrayOf(r.node)
  ]),
  addClass: r.string,
  link: r.string,
  isExternal: r.bool,
  label: r.string.isRequired
};
const La = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, pc = ({ children: e, addClass: t, defaultStyle: n, ...o }) => /* @__PURE__ */ p(
  "ul",
  {
    className: G({
      [La["c-List"]]: !n,
      [t]: t
    }),
    ...o,
    children: Ve(e, ["ListItem"])
  }
);
pc.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.element]),
  addClass: r.string,
  defaultStyle: r.bool
};
const ja = ({ children: e, addClass: t, __TYPE: n, ...o }) => {
  const a = Ee.map(e, (i) => {
    var l;
    return ((l = i == null ? void 0 : i.props) == null ? void 0 : l.__TYPE) === "Icon" ? xe(i, { ...i.props, addClass: La["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...o, children: a });
};
ja.propTypes = {
  children: r.oneOfType([r.arrayOf(r.node), r.arrayOf(r.element), r.element, r.node]),
  addClass: r.string,
  __TYPE: pe("ListItem")
};
ja.defaultProps = {
  __TYPE: "ListItem"
};
const vc = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: Ve(e, ["ListItem"]) });
vc.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.element]),
  addClass: r.string
};
const hc = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: Ve(e, ["ListItem"]) });
hc.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.element]),
  addClass: r.string
};
var mr = function() {
  function e(t, n) {
    for (var o = 0; o < n.length; o++) {
      var a = n[o];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
    }
  }
  return function(t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  };
}();
function gr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), o = function() {
    function f(u, d) {
      gr(this, f), this._inertManager = d, this._rootElement = u, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return mr(f, [{
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
        l(d, function(y) {
          return v._visitNode(y);
        });
        var h = document.activeElement;
        if (!document.body.contains(d)) {
          for (var g = d, b = void 0; g; ) {
            if (g.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              b = /** @type {!ShadowRoot} */
              g;
              break;
            }
            g = g.parentNode;
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
        l(d, function(h) {
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
          var g = (
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
              this._manageNode(g);
            else if (g !== this._rootElement && h.attributeName === "inert" && g.hasAttribute("inert")) {
              this._adoptInertRoot(g);
              var b = this._inertManager.getInertRoot(g);
              this._managedNodes.forEach(function(y) {
                g.contains(y.node) && b._manageNode(y.node);
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
    function f(u, d) {
      gr(this, f), this._node = u, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([d]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return mr(f, [{
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
    function f(u) {
      if (gr(this, f), !u)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = u, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(u.head || u.body || u.documentElement), u.readyState === "loading" ? u.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return mr(f, [{
      key: "setInert",
      value: function(d, v) {
        if (v) {
          if (this._inertRoots.has(d))
            return;
          var h = new o(d, this);
          if (d.setAttribute("inert", ""), this._inertRoots.set(d, h), !this._document.body.contains(d))
            for (var g = d.parentNode; g; )
              g.nodeType === 11 && s(g), g = g.parentNode;
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
        d.forEach(function(g) {
          switch (g.type) {
            case "childList":
              e.call(g.addedNodes).forEach(function(x) {
                if (x.nodeType === Node.ELEMENT_NODE) {
                  var C = e.call(x.querySelectorAll("[inert]"));
                  t.call(x, "[inert]") && C.unshift(x), C.forEach(function(S) {
                    this.setInert(S, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (g.attributeName !== "inert")
                return;
              var b = (
                /** @type {!HTMLElement} */
                g.target
              ), y = b.hasAttribute("inert");
              h.setInert(b, y);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function l(f, u, d) {
    if (f.nodeType == Node.ELEMENT_NODE) {
      var v = (
        /** @type {!HTMLElement} */
        f
      );
      u && u(v);
      var h = (
        /** @type {!HTMLElement} */
        v.shadowRoot
      );
      if (h) {
        l(h, u);
        return;
      }
      if (v.localName == "content") {
        for (var g = (
          /** @type {!HTMLContentElement} */
          v
        ), b = g.getDistributedNodes ? g.getDistributedNodes() : [], y = 0; y < b.length; y++)
          l(b[y], u);
        return;
      }
      if (v.localName == "slot") {
        for (var x = (
          /** @type {!HTMLSlotElement} */
          v
        ), C = x.assignedNodes ? x.assignedNodes({ flatten: !0 }) : [], S = 0; S < C.length; S++)
          l(C[S], u);
        return;
      }
    }
    for (var D = f.firstChild; D != null; )
      l(D, u), D = D.nextSibling;
  }
  function s(f) {
    if (!f.querySelector("style#inert-style, link#inert-style")) {
      var u = document.createElement("style");
      u.setAttribute("id", "inert-style"), u.textContent = `
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
`, f.appendChild(u);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var c = new i(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      /** @this {!HTMLElement} */
      get: function() {
        return this.hasAttribute("inert");
      },
      /** @this {!HTMLElement} */
      set: function(u) {
        c.setInert(this, u);
      }
    });
  }
})();
const Gn = Xe(), mc = Object.freeze({
  ESC: 27
}), Fa = ({ children: e, isOpen: t, onClose: n, finalFocusRef: o }) => {
  const a = U(), i = (f) => {
    const u = document.querySelector("#root");
    u.inert = f;
  }, l = (f) => {
    (f.keyCode || f.which) === mc.ESC && c();
  }, s = (f, u) => {
    a.current.classList.replace(f, u);
  }, c = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), n(!t), Object.keys(o).length !== 0 && o.current.focus();
    }, 500);
  };
  return H(() => (t && (i(!0), a.current && a.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(
    Gn.Provider,
    {
      value: { isOpen: t, onKeyDown: l, onCloseModal: c, refModal: a },
      children: /* @__PURE__ */ p(Kt, { id: "js-modal", children: Ve(e, ["ModalContent", "ModalOverlay"]) })
    }
  );
};
Fa.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Fa.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  addClass: r.string,
  isOpen: r.bool.isRequired,
  onClose: r.func.isRequired,
  label: r.string.isRequired,
  finalFocusRef: r.object.isRequired
};
const kn = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, Ba = ({
  label: e,
  addClass: t,
  children: n,
  onClick: o,
  onKeyDown: a,
  defaultStyle: i,
  __TYPE: l,
  ...s
}) => {
  const {
    isOpen: c,
    onKeyDown: f,
    onCloseModal: u,
    refModal: d
  } = ye(Gn), v = (g) => {
    o && typeof o == "function" && o(g), u();
  };
  return /* @__PURE__ */ N(
    "div",
    {
      ref: d,
      role: "dialog",
      tabIndex: "-1",
      hidden: !c,
      "aria-label": e,
      "aria-modal": "true",
      "data-type": l,
      onKeyDown: (g) => {
        a && typeof a == "function" && a(g), f(g);
      },
      className: G(
        "animate__animated animate__fadeIn animate__faster class-video-interpreter-ui-modal",
        {
          [`${kn["c-modal"]} u-px-3 u-py-3`]: !i,
          [t]: t
        }
      ),
      ...s,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: G({ [kn["c-modal-container"]]: !i }),
            "data-class": "c-modal__container",
            children: n
          }
        ),
        /* @__PURE__ */ p(
          At,
          {
            addClass: G({ [kn["c-close-button"]]: !i }),
            "data-class": "c-modal__close-button",
            label: "Cerrar modal",
            hasAriaLabel: !0,
            onClick: v,
            ...i && { defaultStyle: i },
            children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p(
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
Ba.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  addClass: r.string,
  label: r.string.isRequired,
  onClick: r.func,
  onKeyDown: r.func,
  defaultStyle: r.bool,
  __TYPE: pe("ModalContent")
};
Ba.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const Va = ({ addClass: e, onClick: t, defaultStyle: n }) => {
  const { isOpen: o, onCloseModal: a } = ye(Gn), i = (l) => {
    t && typeof t == "function" && t(l), a();
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: G({
        [kn["c-layout"]]: !n,
        [e]: e
      }),
      onClick: i,
      hidden: !o
    }
  );
};
Va.propTypes = {
  addClass: r.string,
  onClick: r.func,
  defaultStyle: r.bool,
  __TYPE: pe("ModalOverlay")
};
Va.defaultProps = {
  __TYPE: "ModalOverlay"
};
const gc = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = ye(Gn), o = (a) => {
    t && t(a), n();
  };
  return xe(e, { ...e.props, onClick: o });
};
gc.propTypes = {
  children: r.oneOfType([r.element, r.node]).isRequired,
  onClick: r.func
};
const Yt = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, Zn = Xe(), qa = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: o, min: a, max: i, step: l, onValue: s }) => {
  const [c, f] = X(o || 0), u = () => {
    if (n && c > i)
      return f(i);
    f((g) => g + l);
  }, d = () => {
    if (n && c < a)
      return f(a);
    f((g) => g - l);
  }, v = (g) => f(g), h = (g) => n && c === g;
  return H(() => {
    s && s(c);
  }, [c, s]), /* @__PURE__ */ p(
    Zn.Provider,
    {
      value: {
        counter: c,
        min: a || Number.MIN_SAFE_INTEGER,
        max: i || Number.MAX_SAFE_INTEGER,
        validate: h,
        onChangeValue: v,
        onIncrementValue: u,
        onDecrementValue: d
      },
      children: /* @__PURE__ */ p("div", { className: `${Yt["c-number-input"]} ${t ?? ""}`, children: Ve(e, ["NumberInputField", "NumberInputStepper"]) })
    }
  );
};
qa.propTypes = {
  children: r.arrayOf(r.element),
  addClass: r.string,
  max: r.number,
  min: r.number,
  defaultValue: r.number,
  step: r.number,
  onValue: r.func,
  keepWithinRange: r.bool
};
qa.defaultProps = {
  step: 1
};
const Ya = ct(
  ({ id: e, name: t, label: n, pattern: o, addClass: a, isLabelVisible: i }, l) => {
    const {
      counter: s,
      onChangeValue: c,
      onIncrementValue: f,
      onDecrementValue: u,
      min: d,
      max: v
    } = ye(Zn), h = e || $t(), g = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), b = ({ target: x }) => {
      if (!isNaN(x.value) && x.value)
        return c(parseInt(x.value));
      c(0);
    }, y = (x) => {
      switch (x.keyCode || x.which) {
        case g.UP:
          f();
          break;
        case g.DOWN:
          u();
          break;
        case g.END:
          c(v);
          break;
        case g.HOME:
          c(d);
          break;
        default:
          return null;
      }
    };
    return /* @__PURE__ */ N(
      "label",
      {
        htmlFor: h,
        className: `${Yt["c-number-input__label"]} ${a ?? ""}`,
        children: [
          /* @__PURE__ */ N("span", { className: `${!i && "u-sr-only"}`, children: [
            " ",
            n,
            " "
          ] }),
          /* @__PURE__ */ p(
            "input",
            {
              id: h,
              ref: l,
              type: "text",
              name: t,
              role: "spinbutton",
              inputMode: "decimal",
              pattern: o,
              autoCorrect: "off",
              autoComplete: "off",
              className: Yt["c-number-input__input"],
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
Ya.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Ya.propTypes = {
  id: r.string,
  name: r.string,
  label: r.string,
  pattern: r.string,
  addClass: r.string,
  isLabelVisible: r.bool,
  __TYPE: pe("NumberInputField")
};
const za = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${Yt["c-number-input__stepper"]} ${t ?? ""}`, children: Ve(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
za.propTypes = {
  children: r.oneOfType([r.element, r.arrayOf(r.element)]),
  addClass: r.string,
  __TYPE: pe("NumberInputStepper")
};
za.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Wa = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: o, validate: a, min: i } = ye(Zn);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: o,
      disabled: a(i),
      "aria-label": `${n ?? "Decrementar valor"}`,
      className: `${Yt["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Wa.propTypes = {
  children: r.oneOfType([r.node, r.element, r.arrayOf(r.element), r.arrayOf(r.element)]),
  addClass: r.string,
  __TYPE: pe("NumberDecrementStepper"),
  label: r.string
};
Wa.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Ua = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: o, validate: a, max: i } = ye(Zn);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: o,
      disabled: a(i),
      "aria-label": `${n ?? "Incrementar valor"}`,
      className: `${Yt["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
Ua.propTypes = {
  children: r.oneOfType([r.node, r.element, r.arrayOf(r.element), r.arrayOf(r.element)]),
  addClass: r.string,
  __TYPE: pe("NumberIncrementStepper"),
  label: r.string
};
Ua.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const bc = (e) => {
  const {
    boundaryCount: t = 1,
    count: n = 1,
    defaultPage: o = 1,
    disabled: a = !1,
    hideNextButton: i = !1,
    hidePrevButton: l = !1,
    onChange: s,
    showFirstButton: c = !1,
    showLastButton: f = !1,
    siblingCount: u = 1,
    ...d
  } = e, [v, h] = X(o), g = (w, R) => {
    h(R), s && s(w, R);
  }, b = (w, R) => {
    const I = R - w + 1;
    return Array.from({ length: I }, (L, M) => w + M);
  }, y = b(1, Math.min(t, n)), x = b(Math.max(n - t + 1, t + 1), n), C = Math.max(
    Math.min(
      // Inicio natural
      v - u,
      // Limite inferior cuando la página es mayor
      n - t - u * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), S = Math.min(
    Math.max(
      // Final natural
      v + u,
      // Limite superior cuando la página es menor
      t + u * 2 + 2
    ),
    // Menor que el endPages
    x.length > 0 ? x[0] - 2 : n - 1
  ), D = [
    ...c ? ["first"] : [],
    ...l ? [] : ["previous"],
    ...y,
    // Comienza el ellipsis
    ...C > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...b(C, S),
    // Finaliza el ellipsis
    ...S < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...x,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], _ = (w) => {
    switch (w) {
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
    items: D.map((w) => typeof w == "number" ? {
      onClick: (R) => {
        g(R, w);
      },
      type: "page",
      page: w,
      selected: w === v,
      disabled: a,
      "aria-current-page": w === v ? !0 : void 0
    } : {
      onClick: (R) => {
        g(R, _(w));
      },
      type: w,
      page: _(w),
      selected: !1,
      disabled: a || w.indexOf("ellipsis") === -1 && (w === "next" || w === "last" ? v >= n : v <= 1)
    }),
    ...d
  };
}, un = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, yc = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), _c = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${yc[e]} página`, Ha = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: o,
  ...a
}) => {
  const { items: i } = bc({ ...a });
  return /* @__PURE__ */ p(
    "nav",
    {
      className: G({
        [un["c-pagination"]]: !o,
        [n]: n
      }),
      children: /* @__PURE__ */ p(
        "ul",
        {
          className: G({
            [un["c-pagination__ul"]]: !o
          }),
          "data-class": "c-pagination__ul",
          children: i.map((l, s) => /* @__PURE__ */ p("li", { "data-class": "c-pagination__ul-li", children: e({
            ...l,
            "aria-label": t(
              l.type,
              l.page,
              l.selected
            ),
            ...o && { defaultStyle: o }
          }) }, `pagination-item-${s}`))
        }
      )
    }
  );
};
Ha.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(Wr, { ...e }),
  getItemAriaLabel: _c
};
Ha.propTypes = {
  addClass: r.string,
  boundaryCount: r.number,
  count: r.number,
  defaultPage: r.number,
  disabled: r.bool,
  hideNextButton: r.bool,
  hidePrevButton: r.bool,
  onChange: r.func,
  showFirstButton: r.bool,
  showLastButton: r.bool,
  siblingCount: r.number,
  renderItem: r.func,
  getItemAriaLabel: r.func,
  defaultStyle: r.bool
};
const Wr = ({ page: e, type: t, addClass: n, disabled: o, element: a, icons: i, selected: l, defaultStyle: s, ...c }) => {
  const u = {
    previous: (i == null ? void 0 : i.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (i == null ? void 0 : i.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" }),
    last: (i == null ? void 0 : i.last) || /* @__PURE__ */ p("path", { id: "last_page", d: "m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z" }),
    first: (i == null ? void 0 : i.first) || /* @__PURE__ */ p("path", { id: "first_page", d: "M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z" })
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? (
    // Devolvemos '...' si es de tipo ellipsis.
    /* @__PURE__ */ p("div", { className: un["c-pagination-item__ellipsis"], children: "..." })
  ) : xe(
    a,
    {
      disabled: o,
      className: G({
        [un["c-pagination-item"]]: !s,
        [un["c-pagination-item--selected"]]: !s && l,
        [n]: n
      }),
      ...a.props,
      ...c
    },
    [
      // Si es de tipo página colocar la página e.g 1,2,3.
      t === "page" && e,
      // Si existe el icono agregarlo e.g icon = 'last_page'
      u ? i ? /* @__PURE__ */ p(we, { path: u }, t) : /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u }) }, t) : null
    ]
  );
};
Wr.propTypes = {
  page: r.number,
  type: r.string,
  addClass: r.string,
  disabled: r.bool,
  selected: r.bool,
  element: r.oneOfType([r.element, r.node, r.string]),
  defaultStyle: r.bool,
  icons: r.shape({
    first: r.string,
    last: r.string,
    next: r.string,
    previous: r.string
  })
};
Wr.defaultProps = {
  element: /* @__PURE__ */ p("button", {})
};
const Bt = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, Kn = Xe(), wc = ({ children: e, defaultIndex: t, addClass: n, defaultStyle: o }) => {
  const [a, i] = X(null), [l, s] = X([]), c = (d) => s((v) => [...v, d]), f = (d) => i(l[d]), u = (d) => a === d;
  return H(() => {
    l.length !== 0 && (t !== void 0 ? f(t - 1) : i(l[0]));
  }, [t, l]), /* @__PURE__ */ p(
    Kn.Provider,
    {
      value: {
        validation: u,
        onToggle: f,
        listId: l,
        currentSection: a,
        addNewIdToSection: c
      },
      children: /* @__PURE__ */ p(
        "div",
        {
          className: G("class-video-interpreter-ui-panel", {
            [Bt["c-panel"]]: !o,
            [n]: n
          }),
          "data-value": a,
          children: e
        }
      )
    }
  );
};
wc.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.element),
    r.element,
    r.arrayOf(r.node),
    r.node,
    r.string
  ]),
  defaultIndex: r.number,
  addClass: r.string,
  defaultStyle: r.bool
};
const Ga = ct(
  ({ children: e, addClass: t, defaultStyle: n, __TYPE: o, ...a }, i) => {
    const { validation: l, addNewIdToSection: s } = ye(Kn), c = U(null), f = l(c.current);
    return H(() => {
      c.current || (c.current = parseInt(Lr()), s(c.current));
    }, [c]), /* @__PURE__ */ N(
      "section",
      {
        ref: i,
        role: "tabpanel",
        hidden: !f,
        "data-type": o,
        "aria-hidden": !f,
        "data-value": c.current,
        "aria-labelledby": `section-${c.current}`,
        className: G({
          [Bt["c-section"]]: !n,
          [t]: t
        }),
        ...a,
        children: [
          /* @__PURE__ */ N("span", { id: `section-${c.current}`, className: "u-sr-only", children: [
            "Sección ",
            parseInt(c.current) - 1
          ] }),
          e
        ]
      }
    );
  }
);
Ga.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  id: r.number,
  addClass: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("Section")
};
Ga.defaultProps = {
  __TYPE: "Section"
};
const xc = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), Io = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Ec = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${xc[e]} sección`, Za = ({
  renderItem: e,
  showPrevButton: t,
  showNextButton: n,
  icons: o,
  label: a,
  orientation: i,
  onValue: l,
  addClass: s,
  getItemAriaLabel: c,
  defaultStyle: f
}) => {
  const { validation: u, onToggle: d, listId: v, currentSection: h } = ye(Kn), g = U([]), b = Object.freeze({
    previous: h - 1,
    next: h + 1
  }), y = {
    previous: (o == null ? void 0 : o.previous) || /* @__PURE__ */ p(
      "path",
      {
        id: "navigate_before",
        d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
      }
    ),
    next: (o == null ? void 0 : o.next) || /* @__PURE__ */ p(
      "path",
      {
        id: "navigate_next",
        d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
      }
    )
  }, x = [
    // Botón para navegar a la sección anterior.
    ...t ? ["previous"] : [],
    // Lista de todas la secciones.
    ...v || [],
    // Botón para navegar a la siguiente sección.
    ...n ? ["next"] : []
  ], C = (E) => !g.current.includes(E) && E ? g.current = [...g.current, E] : g.current, S = (E) => {
    const w = g.current[0], R = g.current[g.current.length - 1];
    if ((E.keyCode || E.which) === Io.LEFT)
      if (E.target === w)
        R.focus();
      else {
        const I = g.current.indexOf(E.target) - 1;
        g.current[I].focus();
      }
    else if ((E.keyCode || E.which) === Io.RIGHT)
      if (E.target === R)
        w.focus();
      else {
        const I = g.current.indexOf(E.target) + 1;
        g.current[I].focus();
      }
  }, D = (E) => {
    d(v.findIndex((w) => w === E)), l !== void 0 && l(E, v.length);
  }, _ = x.map((E) => {
    let w = [...v];
    return w = w.pop(), typeof E == "number" ? {
      onClick: (R) => {
        D(E);
      },
      type: "section",
      section: E,
      selected: u(E),
      ref: C,
      onKeyDown: S
    } : {
      onClick: () => {
        D(b[E]);
      },
      type: E,
      section: b[E],
      selected: !1,
      disabled: E === "next" ? h >= w : h <= v[0]
    };
  });
  return H(() => {
    l !== void 0 && l(h, v.length);
  }, []), /* @__PURE__ */ N(pt, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: G({
          [Bt["c-navigation"]]: !f,
          [s]: s
        }),
        children: e ? e(_) : _.map(({ section: E, type: w, selected: R, ...I }, L) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: G({
              [Bt["c-navigation__item"]]: !f
            }),
            children: w === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${E}`,
                role: "tab",
                tabIndex: `${R ? 0 : -1}`,
                "aria-selected": R,
                "data-class": "c-navigation__section",
                className: G({
                  [Bt["c-navigation__section"]]: !f
                }),
                "aria-label": c(w, E, R),
                ...I
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: G({
                  [Bt["c-navigation__button"]]: !f
                }),
                "aria-label": c(w, E, R),
                ...I,
                children: y[w] ? o ? /* @__PURE__ */ p(we, { path: y[w] }, w) : /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: y[w]
                  }
                ) }, w) : null
              }
            )
          },
          `navigation-section-item-${L}`
        ))
      }
    )
  ] });
};
Za.propTypes = {
  renderItem: r.func,
  showNextButton: r.bool,
  showPrevButton: r.bool,
  icons: r.shape({
    next: r.string,
    previous: r.string
  }),
  label: r.string,
  orientation: r.string,
  onValue: r.func,
  addClass: r.string,
  getItemAriaLabel: r.func,
  defaultStyle: r.bool
};
Za.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: Ec
};
const Tc = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: o } = ye(Kn), a = (i) => {
    o(t - 1), n && n(i);
  };
  return Ee.map(e, (i) => xe(i, { ...i.props, onClick: a }));
};
Tc.propTypes = {
  children: r.oneOfType([r.element, r.node]).isRequired,
  section: r.number.isRequired,
  onClick: r.func
};
const Oc = {
  "c-paper": "_c-paper_1sbf6_1"
}, Sc = ({ children: e, color: t, addClass: n, ...o }) => {
  const a = U(null);
  return Zo(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${Oc["c-paper"]} ${n ?? ""}`,
      ...o,
      children: e
    }
  );
};
Sc.propTypes = {
  children: r.oneOfType([
    r.element,
    r.node,
    r.arrayOf(r.element),
    r.arrayOf(r.node)
  ]),
  addClass: r.string,
  color: r.string
};
const Cc = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Rc = (e) => {
  document.body.append(e);
}, Pc = (e) => {
  const t = U(null);
  H(() => {
    const o = document.querySelector(`#${e}`), a = o || Cc(e);
    return o || Rc(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, Kt = ({ children: e, id: t }) => {
  const n = Pc(t);
  return Xo(e, n);
};
Kt.propTypes = {
  children: r.any,
  id: r.string.isRequired
};
const Dc = "_row_1adiy_1", Ac = {
  row: Dc
}, Nc = ct(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Ac.row} ${e ?? ""}`, ...t }));
Nc.propTypes = {
  addClass: r.string
};
const Nn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, Ka = ct(
  ({
    children: e,
    id: t,
    placeholder: n,
    label: o,
    icon: a,
    addClass: i,
    isLabelVisible: l,
    isDisabled: s,
    isRequired: c,
    onChoise: f,
    defaultValue: u,
    defaultStyle: d
  }, v) => {
    const h = t || $t(), g = ({ target: b }) => {
      f && f({ id: h, value: b.value });
    };
    return /* @__PURE__ */ N("label", { htmlFor: h, ...i && { className: `${i}` }, children: [
      /* @__PURE__ */ N("span", { className: `${!l && "u-sr-only"}`, children: [
        " ",
        o,
        " "
      ] }),
      /* @__PURE__ */ N("div", { className: Nn["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
        /* @__PURE__ */ N(
          "select",
          {
            id: h,
            ref: v,
            name: h,
            defaultValue: u,
            className: G({
              [Nn["c-select"]]: !d
            }),
            "data-class": "c-select",
            onChange: g,
            disabled: s,
            required: c,
            children: [
              /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
              Ve(e, ["option", "optgroup"])
            ]
          }
        ),
        a ? /* @__PURE__ */ p(
          we,
          {
            path: a,
            "data-class": "c-select__icon",
            addClass: G({ [Nn["c-select__icon"]]: !d })
          }
        ) : /* @__PURE__ */ p(
          we,
          {
            "data-class": "c-select__icon",
            addClass: G({ [Nn["c-select__icon"]]: !d }),
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
Ka.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Ka.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.node
  ]),
  id: r.string,
  placeholder: r.string,
  label: r.string.isRequired,
  icon: r.string,
  addClass: r.string,
  isLabelVisible: r.bool,
  isDisabled: r.bool,
  isRequired: r.bool,
  onChoise: r.func,
  defaultValue: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("Select")
};
const Ic = ({ children: e, onAllSelect: t }) => {
  const [n, o] = X([]), a = (l) => o([
    ...n.filter((s) => s.id !== l.id),
    { ...l }
  ]);
  return H(() => {
    t && t(n);
  }, [n, t]), Ee.map(e, (l) => {
    var s;
    return Ke(l) ? ((s = l == null ? void 0 : l.props) == null ? void 0 : s.__TYPE) === "Select" ? xe(l, { ...l.props, onChoise: a }) : l : null;
  });
};
Ic.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  onAllSelect: r.func
};
const br = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, $o = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Xa = ct(
  ({
    id: e,
    name: t,
    size: n,
    value: o,
    label: a,
    addClass: i,
    isDisabled: l,
    defaultChecked: s,
    isLabelVisible: c,
    onChange: f
  }, u) => {
    const [d, v] = X(!1), h = e || $t(), g = ({ target: y }) => {
      if (v(y.checked), !!f) {
        if (y.checked) {
          f({ id: y.id, value: y.value });
          return;
        }
        f({ id: y.id, value: "" });
      }
    }, b = (y) => {
      ((y.keyCode || y.which) === $o.SPACE || (y.keyCode || y.which) === $o.ENTER) && v((x) => (f && f(x ? { id: h, value: "" } : { id: h, value: `${o}` }), !x));
    };
    return H(() => (s && v(!!s), () => {
      v(!1);
    }), [s]), /* @__PURE__ */ N(
      "label",
      {
        htmlFor: h,
        className: `${br["c-label"]} ${br[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ N("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            a,
            " "
          ] }),
          /* @__PURE__ */ p(
            "input",
            {
              id: h,
              ref: u,
              role: "switch",
              type: "checkbox",
              name: t,
              value: o,
              checked: d,
              "aria-disabled": l,
              className: `${br["c-switch"]} ${i ?? ""}`,
              onChange: g,
              onKeyDown: b,
              ...l && { disabled: !0 }
            }
          )
        ]
      }
    );
  }
);
Xa.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Xa.propTypes = {
  id: r.string,
  name: r.string,
  size: r.string.isRequired,
  value: r.oneOfType([
    r.string,
    r.number,
    r.bool
  ]),
  label: r.string,
  addClass: r.string,
  isDisabled: r.bool,
  defaultChecked: r.bool,
  isLabelVisible: r.bool,
  onChange: r.func
};
const Ur = Xe(), $c = ({ children: e, defaultIndex: t, addClass: n, ...o }) => {
  const [a, i] = X(0), l = (c) => i(c), s = (c) => a === c;
  return H(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(Ur.Provider, { value: { validation: s, onToggle: l }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...o, children: Ve(e, ["TabList", "TabPanels"]) }) });
};
$c.propTypes = {
  children: r.arrayOf(r.element),
  defaultIndex: r.number,
  addClass: r.string
};
const gn = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, Ja = ({
  children: e,
  id: t,
  selected: n,
  addClass: o,
  icon: a,
  addNewRef: i,
  onNavigation: l,
  onClick: s,
  defaultStyle: c,
  __TYPE: f,
  ...u
}) => {
  const d = U(), { validation: v, onToggle: h } = ye(Ur), g = v(t), b = (y) => {
    s && s(y), h(t);
  };
  return H(() => (d.current && i(d.current), () => {
    d.current = null;
  }), [d]), /* @__PURE__ */ N(
    "button",
    {
      id: `tab-${t}`,
      role: "tab",
      ref: d,
      "data-type": f,
      tabIndex: `${g ? 0 : -1}`,
      "aria-controls": `panel-${t}`,
      "aria-selected": g,
      onKeyDown: l,
      onClick: b,
      className: G({
        [`${gn["c-tab__button"]} u-flex`]: !c,
        [o]: o,
        [g]: n
      }),
      ...u,
      children: [
        e,
        a && a(g)
      ]
    }
  );
};
Ja.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  id: r.number,
  selected: r.string,
  addClass: r.string,
  icon: r.func,
  addNewRef: r.func,
  onClick: r.func,
  onNavigation: r.func,
  defaultStyle: r.bool,
  __TYPE: pe("Tab")
};
Ja.defaultProps = {
  __TYPE: "Tab"
};
const ko = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Qa = ({
  children: e,
  addClass: t,
  label: n,
  orientation: o,
  defaultStyle: a,
  __TYPE: i,
  ...l
}) => {
  const s = U([]), c = (d) => s.current = [...s.current, d], f = (d) => {
    const v = s.current[0], h = s.current[s.current.length - 1];
    if ((d.keyCode || d.which) === ko.LEFT)
      if (d.target === v)
        h.focus();
      else {
        const g = s.current.indexOf(d.target) - 1;
        s.current[g].focus();
      }
    else if ((d.keyCode || d.which) === ko.RIGHT)
      if (d.target === h)
        v.focus();
      else {
        const g = s.current.indexOf(d.target) + 1;
        s.current[g].focus();
      }
  }, u = Ee.map(e, (d, v) => Ke(d) ? xe(d, {
    ...d.props,
    id: v,
    addNewRef: c,
    onNavigation: f
  }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      role: "tablist",
      "data-type": i,
      "aria-label": n,
      "aria-orientation": o,
      className: G({
        [gn["c-tab__list"]]: !a,
        [t]: t
      }),
      ...l,
      children: Ve(u, ["Tab"])
    }
  );
};
Qa.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.element),
    r.element
  ]),
  addClass: r.string,
  label: r.string,
  orientation: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("TabList")
};
Qa.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const ei = ({
  children: e,
  id: t,
  addClass: n,
  defaultStyle: o,
  __TYPE: a,
  ...i
}) => {
  const { validation: l } = ye(Ur), s = l(t);
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
      className: G({
        [gn["c-tab__panel--active"]]: !o && s,
        [gn["c-tab__panel"]]: !o && !s,
        [n]: n
      }),
      ...i,
      children: e
    }
  );
};
ei.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  id: r.number,
  addClass: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("TabPanel")
};
ei.defaultProps = {
  __TYPE: "TabPanel"
};
const ti = ({
  children: e,
  addClass: t,
  defaultStyle: n,
  __TYPE: o,
  ...a
}) => {
  const i = Ee.map(e, (l, s) => Ke(l) ? xe(l, { ...l.props, id: s }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: G({
        [gn["c-tab__panels"]]: !n,
        [t]: t
      }),
      "data-type": o,
      ...a,
      children: Ve(i, ["TabPanel"])
    }
  );
};
ti.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.element),
    r.element
  ]),
  addClass: r.string,
  defaultStyle: r.bool,
  __TYPE: pe("TabPanels")
};
ti.defaultProps = {
  __TYPE: "TabPanels"
};
const yr = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, ni = ct(
  ({
    id: e,
    value: t,
    resize: n,
    placeholder: o,
    label: a,
    addClass: i,
    isLabelVisible: l,
    isDisabled: s,
    isRequired: c,
    defaultStyle: f,
    onValue: u,
    ...d
  }, v) => {
    const h = e || $t(), g = ({ target: b }) => {
      u && u({ id: h, value: b.value });
    };
    return /* @__PURE__ */ N(
      "label",
      {
        htmlFor: h,
        className: G({
          [yr["c-label"]]: !f,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ N("span", { className: `${!l && "u-sr-only"}`, children: [
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
              required: c,
              placeholder: o,
              autoComplete: "off",
              onChange: g,
              "data-class": "c-textarea",
              className: G({
                [`${yr["c-textarea"]} ${yr[`c-textarea--${n}`]}`]: !f
              }),
              ...d
            }
          )
        ]
      }
    );
  }
);
ni.defaultProps = {
  resize: "vertical",
  placeholder: "This is an example of a placeholder"
};
ni.propTypes = {
  id: r.string,
  value: r.string,
  resize: r.oneOf(["none", "horizontal", "vertical"]),
  placeholder: r.string,
  label: r.string,
  addClass: r.string,
  isLabelVisible: r.bool,
  isDisabled: r.bool,
  isRequired: r.bool,
  defaultStyle: r.bool,
  onValue: r.func
};
const kc = Ko(({ children: e, theme: t = {} }) => {
  const n = (o) => {
    const a = document.createElement("style");
    document.head.append(a);
    const i = a.sheet;
    let l = "";
    for (const s in o)
      l += `--clr-${s}: ${o[s]};
`;
    i.insertRule(`:root{${l}}`);
  };
  return H(() => {
    if (Object.entries(t).length !== 0)
      return n(t), () => {
        t = {};
      };
  }, [t]), e;
});
kc.propTypes = {
  children: r.oneOfType([r.array, r.element]),
  theme: r.object.isRequired
};
var Mo = function(t) {
  return t.reduce(function(n, o) {
    var a = o[0], i = o[1];
    return n[a] = i, n;
  }, {});
}, Lo = typeof window < "u" && window.document && window.document.createElement ? Dt.useLayoutEffect : Dt.useEffect, Fe = "top", Ge = "bottom", Ze = "right", Be = "left", Xn = "auto", En = [Fe, Ge, Ze, Be], zt = "start", bn = "end", Mc = "clippingParents", ri = "viewport", on = "popper", Lc = "reference", jo = /* @__PURE__ */ En.reduce(function(e, t) {
  return e.concat([t + "-" + zt, t + "-" + bn]);
}, []), oi = /* @__PURE__ */ [].concat(En, [Xn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + zt, t + "-" + bn]);
}, []), jc = "beforeRead", Fc = "read", Bc = "afterRead", Vc = "beforeMain", qc = "main", Yc = "afterMain", zc = "beforeWrite", Wc = "write", Uc = "afterWrite", Ar = [jc, Fc, Bc, Vc, qc, Yc, zc, Wc, Uc];
function lt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Je(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function It(e) {
  var t = Je(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ye(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Hr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Hc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !Ye(i) || !lt(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(l) {
      var s = a[l];
      s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function Gc(e) {
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
    Object.keys(t.elements).forEach(function(o) {
      var a = t.elements[o], i = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = l.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !Ye(a) || !lt(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(c) {
        a.removeAttribute(c);
      }));
    });
  };
}
const Zc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Hc,
  effect: Gc,
  requires: ["computeStyles"]
};
function rt(e) {
  return e.split("-")[0];
}
var Nt = Math.max, Yn = Math.min, Wt = Math.round;
function Nr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ai() {
  return !/^((?!chrome|android).)*safari/i.test(Nr());
}
function Ut(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, i = 1;
  t && Ye(e) && (a = e.offsetWidth > 0 && Wt(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Wt(o.height) / e.offsetHeight || 1);
  var l = It(e) ? Je(e) : window, s = l.visualViewport, c = !ai() && n, f = (o.left + (c && s ? s.offsetLeft : 0)) / a, u = (o.top + (c && s ? s.offsetTop : 0)) / i, d = o.width / a, v = o.height / i;
  return {
    width: d,
    height: v,
    top: u,
    right: f + d,
    bottom: u + v,
    left: f,
    x: f,
    y: u
  };
}
function Gr(e) {
  var t = Ut(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function ii(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Hr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function at(e) {
  return Je(e).getComputedStyle(e);
}
function Kc(e) {
  return ["table", "td", "th"].indexOf(lt(e)) >= 0;
}
function _t(e) {
  return ((It(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Jn(e) {
  return lt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Hr(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    _t(e)
  );
}
function Fo(e) {
  return !Ye(e) || // https://github.com/popperjs/popper-core/issues/837
  at(e).position === "fixed" ? null : e.offsetParent;
}
function Xc(e) {
  var t = /firefox/i.test(Nr()), n = /Trident/i.test(Nr());
  if (n && Ye(e)) {
    var o = at(e);
    if (o.position === "fixed")
      return null;
  }
  var a = Jn(e);
  for (Hr(a) && (a = a.host); Ye(a) && ["html", "body"].indexOf(lt(a)) < 0; ) {
    var i = at(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Tn(e) {
  for (var t = Je(e), n = Fo(e); n && Kc(n) && at(n).position === "static"; )
    n = Fo(n);
  return n && (lt(n) === "html" || lt(n) === "body" && at(n).position === "static") ? t : n || Xc(e) || t;
}
function Zr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function dn(e, t, n) {
  return Nt(e, Yn(t, n));
}
function Jc(e, t, n) {
  var o = dn(e, t, n);
  return o > n ? n : o;
}
function si() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function li(e) {
  return Object.assign({}, si(), e);
}
function ci(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Qc = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, li(typeof t != "number" ? t : ci(t, En));
};
function eu(e) {
  var t, n = e.state, o = e.name, a = e.options, i = n.elements.arrow, l = n.modifiersData.popperOffsets, s = rt(n.placement), c = Zr(s), f = [Be, Ze].indexOf(s) >= 0, u = f ? "height" : "width";
  if (!(!i || !l)) {
    var d = Qc(a.padding, n), v = Gr(i), h = c === "y" ? Fe : Be, g = c === "y" ? Ge : Ze, b = n.rects.reference[u] + n.rects.reference[c] - l[c] - n.rects.popper[u], y = l[c] - n.rects.reference[c], x = Tn(i), C = x ? c === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, S = b / 2 - y / 2, D = d[h], _ = C - v[u] - d[g], E = C / 2 - v[u] / 2 + S, w = dn(D, E, _), R = c;
    n.modifiersData[o] = (t = {}, t[R] = w, t.centerOffset = w - E, t);
  }
}
function tu(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (Ye(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ii(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const nu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: eu,
  effect: tu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ht(e) {
  return e.split("-")[1];
}
var ru = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ou(e) {
  var t = e.x, n = e.y, o = window, a = o.devicePixelRatio || 1;
  return {
    x: Wt(t * a) / a || 0,
    y: Wt(n * a) / a || 0
  };
}
function Bo(e) {
  var t, n = e.popper, o = e.popperRect, a = e.placement, i = e.variation, l = e.offsets, s = e.position, c = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, v = l.x, h = v === void 0 ? 0 : v, g = l.y, b = g === void 0 ? 0 : g, y = typeof u == "function" ? u({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = y.x, b = y.y;
  var x = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), S = Be, D = Fe, _ = window;
  if (f) {
    var E = Tn(n), w = "clientHeight", R = "clientWidth";
    if (E === Je(n) && (E = _t(n), at(E).position !== "static" && s === "absolute" && (w = "scrollHeight", R = "scrollWidth")), E = E, a === Fe || (a === Be || a === Ze) && i === bn) {
      D = Ge;
      var I = d && E === _ && _.visualViewport ? _.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[w]
      );
      b -= I - o.height, b *= c ? 1 : -1;
    }
    if (a === Be || (a === Fe || a === Ge) && i === bn) {
      S = Ze;
      var L = d && E === _ && _.visualViewport ? _.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[R]
      );
      h -= L - o.width, h *= c ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, f && ru), ee = u === !0 ? ou({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  if (h = ee.x, b = ee.y, c) {
    var K;
    return Object.assign({}, M, (K = {}, K[D] = C ? "0" : "", K[S] = x ? "0" : "", K.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", K));
  }
  return Object.assign({}, M, (t = {}, t[D] = C ? b + "px" : "", t[S] = x ? h + "px" : "", t.transform = "", t));
}
function au(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, i = n.adaptive, l = i === void 0 ? !0 : i, s = n.roundOffsets, c = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = at(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return f.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: rt(t.placement),
    variation: Ht(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Bo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Bo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const iu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: au,
  data: {}
};
var In = {
  passive: !0
};
function su(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, i = a === void 0 ? !0 : a, l = o.resize, s = l === void 0 ? !0 : l, c = Je(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, In);
  }), s && c.addEventListener("resize", n.update, In), function() {
    i && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, In);
    }), s && c.removeEventListener("resize", n.update, In);
  };
}
const lu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: su,
  data: {}
};
var cu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return cu[t];
  });
}
var uu = {
  start: "end",
  end: "start"
};
function Vo(e) {
  return e.replace(/start|end/g, function(t) {
    return uu[t];
  });
}
function Kr(e) {
  var t = Je(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Xr(e) {
  return Ut(_t(e)).left + Kr(e).scrollLeft;
}
function du(e, t) {
  var n = Je(e), o = _t(e), a = n.visualViewport, i = o.clientWidth, l = o.clientHeight, s = 0, c = 0;
  if (a) {
    i = a.width, l = a.height;
    var f = ai();
    (f || !f && t === "fixed") && (s = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s + Xr(e),
    y: c
  };
}
function fu(e) {
  var t, n = _t(e), o = Kr(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Nt(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = Nt(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -o.scrollLeft + Xr(e), c = -o.scrollTop;
  return at(a || n).direction === "rtl" && (s += Nt(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: c
  };
}
function Jr(e) {
  var t = at(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function ui(e) {
  return ["html", "body", "#document"].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : Ye(e) && Jr(e) ? e : ui(Jn(e));
}
function fn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = ui(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Je(o), l = a ? [i].concat(i.visualViewport || [], Jr(o) ? o : []) : o, s = t.concat(l);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(fn(Jn(l)))
  );
}
function Ir(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function pu(e, t) {
  var n = Ut(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function qo(e, t, n) {
  return t === ri ? Ir(du(e, n)) : It(t) ? pu(t, n) : Ir(fu(_t(e)));
}
function vu(e) {
  var t = fn(Jn(e)), n = ["absolute", "fixed"].indexOf(at(e).position) >= 0, o = n && Ye(e) ? Tn(e) : e;
  return It(o) ? t.filter(function(a) {
    return It(a) && ii(a, o) && lt(a) !== "body";
  }) : [];
}
function hu(e, t, n, o) {
  var a = t === "clippingParents" ? vu(e) : [].concat(t), i = [].concat(a, [n]), l = i[0], s = i.reduce(function(c, f) {
    var u = qo(e, f, o);
    return c.top = Nt(u.top, c.top), c.right = Yn(u.right, c.right), c.bottom = Yn(u.bottom, c.bottom), c.left = Nt(u.left, c.left), c;
  }, qo(e, l, o));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function di(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? rt(o) : null, i = o ? Ht(o) : null, l = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
  switch (a) {
    case Fe:
      c = {
        x: l,
        y: t.y - n.height
      };
      break;
    case Ge:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Ze:
      c = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Be:
      c = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var f = a ? Zr(a) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (i) {
      case zt:
        c[f] = c[f] - (t[u] / 2 - n[u] / 2);
        break;
      case bn:
        c[f] = c[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return c;
}
function yn(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, i = n.strategy, l = i === void 0 ? e.strategy : i, s = n.boundary, c = s === void 0 ? Mc : s, f = n.rootBoundary, u = f === void 0 ? ri : f, d = n.elementContext, v = d === void 0 ? on : d, h = n.altBoundary, g = h === void 0 ? !1 : h, b = n.padding, y = b === void 0 ? 0 : b, x = li(typeof y != "number" ? y : ci(y, En)), C = v === on ? Lc : on, S = e.rects.popper, D = e.elements[g ? C : v], _ = hu(It(D) ? D : D.contextElement || _t(e.elements.popper), c, u, l), E = Ut(e.elements.reference), w = di({
    reference: E,
    element: S,
    strategy: "absolute",
    placement: a
  }), R = Ir(Object.assign({}, S, w)), I = v === on ? R : E, L = {
    top: _.top - I.top + x.top,
    bottom: I.bottom - _.bottom + x.bottom,
    left: _.left - I.left + x.left,
    right: I.right - _.right + x.right
  }, M = e.modifiersData.offset;
  if (v === on && M) {
    var ee = M[a];
    Object.keys(L).forEach(function(K) {
      var re = [Ze, Ge].indexOf(K) >= 0 ? 1 : -1, le = [Fe, Ge].indexOf(K) >= 0 ? "y" : "x";
      L[K] += ee[le] * re;
    });
  }
  return L;
}
function mu(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, i = n.rootBoundary, l = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? oi : c, u = Ht(o), d = u ? s ? jo : jo.filter(function(g) {
    return Ht(g) === u;
  }) : En, v = d.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  v.length === 0 && (v = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(g, b) {
    return g[b] = yn(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: l
    })[rt(b)], g;
  }, {});
  return Object.keys(h).sort(function(g, b) {
    return h[g] - h[b];
  });
}
function gu(e) {
  if (rt(e) === Xn)
    return [];
  var t = Mn(e);
  return [Vo(e), t, Vo(t)];
}
function bu(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !0 : l, c = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, g = h === void 0 ? !0 : h, b = n.allowedAutoPlacements, y = t.options.placement, x = rt(y), C = x === y, S = c || (C || !g ? [Mn(y)] : gu(y)), D = [y].concat(S).reduce(function(F, W) {
      return F.concat(rt(W) === Xn ? mu(t, {
        placement: W,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: b
      }) : W);
    }, []), _ = t.rects.reference, E = t.rects.popper, w = /* @__PURE__ */ new Map(), R = !0, I = D[0], L = 0; L < D.length; L++) {
      var M = D[L], ee = rt(M), K = Ht(M) === zt, re = [Fe, Ge].indexOf(ee) >= 0, le = re ? "width" : "height", ie = yn(t, {
        placement: M,
        boundary: u,
        rootBoundary: d,
        altBoundary: v,
        padding: f
      }), te = re ? K ? Ze : Be : K ? Ge : Fe;
      _[le] > E[le] && (te = Mn(te));
      var Te = Mn(te), he = [];
      if (i && he.push(ie[ee] <= 0), s && he.push(ie[te] <= 0, ie[Te] <= 0), he.every(function(F) {
        return F;
      })) {
        I = M, R = !1;
        break;
      }
      w.set(M, he);
    }
    if (R)
      for (var O = g ? 3 : 1, $ = function(W) {
        var j = D.find(function(Y) {
          var z = w.get(Y);
          if (z)
            return z.slice(0, W).every(function(J) {
              return J;
            });
        });
        if (j)
          return I = j, "break";
      }, B = O; B > 0; B--) {
        var V = $(B);
        if (V === "break")
          break;
      }
    t.placement !== I && (t.modifiersData[o]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const yu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: bu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Yo(e, t, n) {
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
function zo(e) {
  return [Fe, Ze, Ge, Be].some(function(t) {
    return e[t] >= 0;
  });
}
function _u(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, l = yn(t, {
    elementContext: "reference"
  }), s = yn(t, {
    altBoundary: !0
  }), c = Yo(l, o), f = Yo(s, a, i), u = zo(c), d = zo(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: f,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const wu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _u
};
function xu(e, t, n) {
  var o = rt(e), a = [Be, Fe].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = i[0], s = i[1];
  return l = l || 0, s = (s || 0) * a, [Be, Ze].indexOf(o) >= 0 ? {
    x: s,
    y: l
  } : {
    x: l,
    y: s
  };
}
function Eu(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, l = oi.reduce(function(u, d) {
    return u[d] = xu(d, t.rects, i), u;
  }, {}), s = l[t.placement], c = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = l;
}
const Tu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Eu
};
function Ou(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = di({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Su = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ou,
  data: {}
};
function Cu(e) {
  return e === "x" ? "y" : "x";
}
function Ru(e) {
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !1 : l, c = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, v = n.tether, h = v === void 0 ? !0 : v, g = n.tetherOffset, b = g === void 0 ? 0 : g, y = yn(t, {
    boundary: c,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), x = rt(t.placement), C = Ht(t.placement), S = !C, D = Zr(x), _ = Cu(D), E = t.modifiersData.popperOffsets, w = t.rects.reference, R = t.rects.popper, I = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, L = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ee = {
    x: 0,
    y: 0
  };
  if (E) {
    if (i) {
      var K, re = D === "y" ? Fe : Be, le = D === "y" ? Ge : Ze, ie = D === "y" ? "height" : "width", te = E[D], Te = te + y[re], he = te - y[le], O = h ? -R[ie] / 2 : 0, $ = C === zt ? w[ie] : R[ie], B = C === zt ? -R[ie] : -w[ie], V = t.elements.arrow, F = h && V ? Gr(V) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : si(), j = W[re], Y = W[le], z = dn(0, w[ie], F[ie]), J = S ? w[ie] / 2 - O - z - j - L.mainAxis : $ - z - j - L.mainAxis, q = S ? -w[ie] / 2 + O + z + Y + L.mainAxis : B + z + Y + L.mainAxis, A = t.elements.arrow && Tn(t.elements.arrow), T = A ? D === "y" ? A.clientTop || 0 : A.clientLeft || 0 : 0, Q = (K = M == null ? void 0 : M[D]) != null ? K : 0, me = te + J - Q - T, Se = te + q - Q, Ae = dn(h ? Yn(Te, me) : Te, te, h ? Nt(he, Se) : he);
      E[D] = Ae, ee[D] = Ae - te;
    }
    if (s) {
      var it, ut = D === "x" ? Fe : Be, st = D === "x" ? Ge : Ze, Ce = E[_], Qe = _ === "y" ? "height" : "width", et = Ce + y[ut], wt = Ce - y[st], ht = [Fe, Be].indexOf(x) !== -1, xt = (it = M == null ? void 0 : M[_]) != null ? it : 0, Et = ht ? et : Ce - w[Qe] - R[Qe] - xt + L.altAxis, Ie = ht ? Ce + w[Qe] + R[Qe] - xt - L.altAxis : wt, tt = h && ht ? Jc(Et, Ce, Ie) : dn(h ? Et : et, Ce, h ? Ie : wt);
      E[_] = tt, ee[_] = tt - Ce;
    }
    t.modifiersData[o] = ee;
  }
}
const Pu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ru,
  requiresIfExists: ["offset"]
};
function Du(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Au(e) {
  return e === Je(e) || !Ye(e) ? Kr(e) : Du(e);
}
function Nu(e) {
  var t = e.getBoundingClientRect(), n = Wt(t.width) / e.offsetWidth || 1, o = Wt(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Iu(e, t, n) {
  n === void 0 && (n = !1);
  var o = Ye(t), a = Ye(t) && Nu(t), i = _t(t), l = Ut(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((lt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Jr(i)) && (s = Au(t)), Ye(t) ? (c = Ut(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Xr(i))), {
    x: l.left + s.scrollLeft - c.x,
    y: l.top + s.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function $u(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function(s) {
      if (!n.has(s)) {
        var c = t.get(s);
        c && a(c);
      }
    }), o.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), o;
}
function ku(e) {
  var t = $u(e);
  return Ar.reduce(function(n, o) {
    return n.concat(t.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function Mu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function gt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return [].concat(n).reduce(function(a, i) {
    return a.replace(/%s/, i);
  }, e);
}
var Pt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Lu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Wo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ju(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Wo).filter(function(n, o, a) {
      return a.indexOf(n) === o;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(gt(Pt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(gt(Pt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Ar.indexOf(t.phase) < 0 && console.error(gt(Pt, t.name, '"phase"', "either " + Ar.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(gt(Pt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(gt(Pt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(gt(Pt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(gt(Pt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Wo.map(function(o) {
            return '"' + o + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(o) {
        e.find(function(a) {
          return a.name === o;
        }) == null && console.error(gt(Lu, String(t.name), o, o));
      });
    });
  });
}
function Fu(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(o) {
    var a = t(o);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function Bu(e) {
  var t = e.reduce(function(n, o) {
    var a = n[o.name];
    return n[o.name] = a ? Object.assign({}, a, o, {
      options: Object.assign({}, a.options, o.options),
      data: Object.assign({}, a.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Uo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Vu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ho = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Go() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function qu(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Ho : a;
  return function(s, c, f) {
    f === void 0 && (f = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ho, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: c
      },
      attributes: {},
      styles: {}
    }, d = [], v = !1, h = {
      state: u,
      setOptions: function(x) {
        var C = typeof x == "function" ? x(u.options) : x;
        b(), u.options = Object.assign({}, i, u.options, C), u.scrollParents = {
          reference: It(s) ? fn(s) : s.contextElement ? fn(s.contextElement) : [],
          popper: fn(c)
        };
        var S = ku(Bu([].concat(o, u.options.modifiers)));
        if (u.orderedModifiers = S.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = Fu([].concat(S, u.options.modifiers), function(M) {
            var ee = M.name;
            return ee;
          });
          if (ju(D), rt(u.options.placement) === Xn) {
            var _ = u.orderedModifiers.find(function(M) {
              var ee = M.name;
              return ee === "flip";
            });
            _ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var E = at(c), w = E.marginTop, R = E.marginRight, I = E.marginBottom, L = E.marginLeft;
          [w, R, I, L].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return g(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var x = u.elements, C = x.reference, S = x.popper;
          if (!Go(C, S)) {
            process.env.NODE_ENV !== "production" && console.error(Uo);
            return;
          }
          u.rects = {
            reference: Iu(C, Tn(S), u.options.strategy === "fixed"),
            popper: Gr(S)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var D = 0, _ = 0; _ < u.orderedModifiers.length; _++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error(Vu);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, _ = -1;
              continue;
            }
            var E = u.orderedModifiers[_], w = E.fn, R = E.options, I = R === void 0 ? {} : R, L = E.name;
            typeof w == "function" && (u = w({
              state: u,
              options: I,
              name: L,
              instance: h
            }) || u);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Mu(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Go(s, c))
      return process.env.NODE_ENV !== "production" && console.error(Uo), h;
    h.setOptions(f).then(function(y) {
      !v && f.onFirstUpdate && f.onFirstUpdate(y);
    });
    function g() {
      u.orderedModifiers.forEach(function(y) {
        var x = y.name, C = y.options, S = C === void 0 ? {} : C, D = y.effect;
        if (typeof D == "function") {
          var _ = D({
            state: u,
            name: x,
            instance: h,
            options: S
          }), E = function() {
          };
          d.push(_ || E);
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
var Yu = [lu, Su, iu, Zc, Tu, yu, Pu, nu, wu], zu = /* @__PURE__ */ qu({
  defaultModifiers: Yu
}), Wu = typeof Element < "u", Uu = typeof Map == "function", Hu = typeof Set == "function", Gu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ln(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, o, a;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!Ln(e[o], t[o]))
          return !1;
      return !0;
    }
    var i;
    if (Uu && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(o = i.next()).done; )
        if (!t.has(o.value[0]))
          return !1;
      for (i = e.entries(); !(o = i.next()).done; )
        if (!Ln(o.value[1], t.get(o.value[0])))
          return !1;
      return !0;
    }
    if (Hu && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(o = i.next()).done; )
        if (!t.has(o.value[0]))
          return !1;
      return !0;
    }
    if (Gu && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (e[o] !== t[o])
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
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, a[o]))
        return !1;
    if (Wu && e instanceof Element)
      return !1;
    for (o = n; o-- !== 0; )
      if (!((a[o] === "_owner" || a[o] === "__v" || a[o] === "__o") && e.$$typeof) && !Ln(e[a[o]], t[a[o]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Zu = function(t, n) {
  try {
    return Ln(t, n);
  } catch (o) {
    if ((o.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw o;
  }
}, Ku = [], Qn = function(t, n, o) {
  o === void 0 && (o = {});
  var a = Dt.useRef(null), i = {
    onFirstUpdate: o.onFirstUpdate,
    placement: o.placement || "bottom",
    strategy: o.strategy || "absolute",
    modifiers: o.modifiers || Ku
  }, l = Dt.useState({
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
  }), s = l[0], c = l[1], f = Dt.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var g = h.state, b = Object.keys(g.elements);
        wi.flushSync(function() {
          c({
            styles: Mo(b.map(function(y) {
              return [y, g.styles[y] || {}];
            })),
            attributes: Mo(b.map(function(y) {
              return [y, g.attributes[y]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), u = Dt.useMemo(function() {
    var v = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Zu(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), d = Dt.useRef();
  return Lo(function() {
    d.current && d.current.setOptions(u);
  }, [u]), Lo(function() {
    if (!(t == null || n == null)) {
      var v = o.createPopper || zu, h = v(t, n, u);
      return d.current = h, function() {
        h.destroy(), d.current = null;
      };
    }
  }, [t, n, o.createPopper]), {
    state: d.current ? d.current.state : null,
    styles: s.styles,
    attributes: s.attributes,
    update: d.current ? d.current.update : null,
    forceUpdate: d.current ? d.current.forceUpdate : null
  };
};
const _r = {
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, Xu = Object.freeze({
  ESC: 27
}), fi = ({
  children: e,
  id: t,
  label: n,
  placement: o,
  addClass: a,
  hasArrow: i,
  distance: l,
  isDisabled: s,
  isVisible: c,
  onClick: f
}) => {
  const [u, d] = X(!1), v = U(null), h = U(null), g = t || $t(), b = (_) => d(!1), y = (_) => {
    d(!u), u && document.activeElement === v.current && !c && setTimeout(() => {
      d((E) => !E);
    }, 100), f && f(_);
  }, x = (_) => {
    (_.keyCode | _.which) === Xu.ESC && u && d(!u);
  }, C = Ee.map(e, (_) => Ke(_) ? xe(_, {
    ..._.props,
    "aria-describedby": t,
    ref: v,
    onClick: y,
    "data-open": u,
    ...c ? {} : { onBlur: b, onKeyDown: x }
  }) : null), { styles: S, attributes: D } = Qn(
    v.current,
    h.current,
    {
      placement: o,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, l || 8]
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
  return !n || Ee.count(e) > 1 || s ? /* @__PURE__ */ p(pt, { children: e }) : /* @__PURE__ */ N(pt, { children: [
    C,
    /* @__PURE__ */ p(Kt, { id: "js-toggletip-portal", children: /* @__PURE__ */ N(
      "div",
      {
        id: g,
        ref: h,
        role: "status",
        className: `${_r["c-toggletip"]} ${u && _r["c-toggletip--active"]} ${a ?? ""}`,
        style: S.popper,
        ...D.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: _r["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: S.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
fi.defaultProps = {
  placement: "auto"
};
fi.propTypes = {
  children: r.oneOfType([
    r.node,
    r.element,
    r.arrayOf(r.element),
    r.arrayOf(r.node)
  ]),
  id: r.string,
  label: r.string.isRequired,
  addClass: r.string,
  hasArrow: r.bool,
  isDisabled: r.bool,
  distance: r.number,
  onClick: r.func,
  isVisible: r.bool,
  placement: r.oneOf([
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
const wr = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, Ju = Object.freeze({
  ESC: 27
}), pi = ({
  children: e,
  id: t,
  label: n,
  placement: o,
  addClass: a,
  hasArrow: i,
  distance: l,
  isDisabled: s
}) => {
  const [c, f] = X(!1), u = U(null), d = U(null), v = U(), h = t || $t(), g = (w) => {
    c || f(!c);
  }, b = (w) => f(!1), y = (w) => {
    (!c || document.activeElement !== u.current) && f(!c);
  }, x = () => {
    window.clearTimeout(v.current);
  }, C = (w) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, S = (w) => {
    (w.keyCode | w.which) === Ju.ESC && c && f(!c);
  }, D = Ee.map(e, (w) => Ke(w) ? xe(w, {
    ...w.props,
    "aria-describedby": t,
    ref: u,
    onFocus: g,
    onBlur: b,
    onMouseEnter: y,
    onMouseLeave: C,
    onKeyDown: S
  }) : null), { styles: _, attributes: E } = Qn(
    u.current,
    d.current,
    {
      placement: o,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, l || 8]
          }
        },
        {
          name: "flip",
          options: {
            padding: 10
          }
        },
        { name: "eventListeners", enabled: c }
      ]
    }
  );
  return !n || Ee.count(e) > 1 || s ? /* @__PURE__ */ p(pt, { children: e }) : /* @__PURE__ */ N(pt, { children: [
    D,
    /* @__PURE__ */ p(Kt, { id: "js-tooltip-portal", children: /* @__PURE__ */ N(
      "div",
      {
        id: h,
        ref: d,
        role: "tooltip",
        "data-open": c,
        onMouseEnter: x,
        onMouseLeave: C,
        className: `${wr["c-tooltip"]} ${c && wr["c-tooltip--active"]} ${a ?? ""}`,
        style: _.popper,
        ...E.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: wr["c-tooltip__arrow"],
              "data-popper-arrow": !0,
              style: _.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
pi.defaultProps = {
  placement: "auto"
};
pi.propTypes = {
  children: r.oneOfType([
    r.node,
    r.element,
    r.arrayOf(r.element),
    r.arrayOf(r.node)
  ]),
  id: r.string,
  label: r.string.isRequired,
  addClass: r.string,
  hasArrow: r.bool,
  isDisabled: r.bool,
  distance: r.number,
  placement: r.oneOf([
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
const Qr = Xe(), vi = ({
  steps: e,
  isOpen: t,
  onClose: n,
  finalFocusRef: o,
  hideCloseButton: a,
  hideBackButton: i,
  ariaAttributes: l,
  defaultStyle: s
}) => {
  const [c, f] = X(null), u = [
    ...e.reduce(
      (y, x, C) => [...y, { id: C + 1, ...x }],
      []
    )
  ], d = (y) => u.filter((x) => x.id === y).reduce((x, C) => ({ ...x, ...C }), {}), v = (y) => {
    const x = document.querySelector("#root");
    x.inert = y;
  }, h = () => {
    f((y) => y < u.length ? y + 1 : y);
  }, g = () => {
    f((y) => y > 0 + 1 ? y - 1 : y);
  }, b = () => {
    f(null), n(!t), v(!1), o && o.current.focus();
  };
  return H(() => {
    t && (f(u.shift().id), v(!0));
  }, [t]), /* @__PURE__ */ p(
    Qr.Provider,
    {
      value: {
        isOpen: t,
        lastId: u.length,
        ...d(c),
        methods: {
          onNext: h,
          onPrev: g,
          onClose: b
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(Kt, { id: "js-tour", children: t && /* @__PURE__ */ N(pt, { children: [
        /* @__PURE__ */ p(Qu, {}),
        /* @__PURE__ */ p(
          hi,
          {
            ariaAttributes: l,
            hideCloseButton: a,
            hideBackButton: i
          }
        )
      ] }) })
    }
  );
};
vi.defaultProps = {
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
vi.propTypes = {
  steps: r.arrayOf(
    r.shape({
      target: r.string.isRequired,
      content: r.oneOfType([r.string, r.element]),
      placement: r.oneOf([
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
      distance: r.number,
      elementClass: r.string,
      helpLayerClass: r.string
    })
  ),
  isOpen: r.bool,
  onClose: r.func,
  finalFocusRef: r.any.isRequired,
  hideCloseButton: r.bool,
  hideBackButton: r.bool,
  defaultStyle: r.bool,
  ariaAttributes: r.shape({
    role: r.string,
    tabIndex: r.oneOfType([r.string, r.number]),
    "aria-label": r.string,
    "aria-modal": r.oneOfType([r.string, r.bool])
  })
};
const yt = {
  "c-layout": "_c-layout_cq7p6_1",
  "c-tour-content": "_c-tour-content_cq7p6_9",
  "c-tour-progress": "_c-tour-progress_cq7p6_28",
  "c-tour-progress-bar": "_c-tour-progress-bar_cq7p6_36",
  "c-tour-button-container": "_c-tour-button-container_cq7p6_47",
  "c-tour-help": "_c-tour-help_cq7p6_89",
  "c-tour-number": "_c-tour-number_cq7p6_99"
}, hi = ({
  ariaAttributes: e,
  hideCloseButton: t,
  hideBackButton: n
}) => {
  const {
    isOpen: o,
    lastId: a,
    methods: i,
    id: l,
    target: s,
    content: c,
    placement: f,
    distance: u,
    elementClass: d,
    defaultStyle: v
  } = ye(Qr), h = U(), { onClose: g, onPrev: b, onNext: y } = i, { styles: x, attributes: C } = Qn(
    document.querySelector(s),
    h.current,
    {
      placement: f,
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
        { name: "eventListeners", enabled: o }
      ]
    }
  ), S = () => Ke(c) ? c : _i("p", { className: yt["tour-description"] }, [
    c
  ]), D = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), y();
  };
  return /* @__PURE__ */ N(pt, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: G({ [yt["c-layout"]]: !v }),
        "data-class": "c-layout"
      }
    ),
    /* @__PURE__ */ N(
      "div",
      {
        id: `unique-id-tour-element-${l}`,
        ref: h,
        style: x.popper,
        className: G({
          [yt["c-tour-content"]]: !v,
          "animate__animated animate__fadeIn animate__faster": o,
          [d]: d
        }),
        ...e,
        ...C.popper,
        children: [
          /* @__PURE__ */ N("span", { className: "u-sr-only", children: [
            "Parte ",
            l,
            " de ",
            a,
            "."
          ] }),
          /* @__PURE__ */ p(
            "div",
            {
              "aria-hidden": !0,
              className: G({ [yt["c-tour-progress"]]: !v }),
              "data-class": "c-tour-progress",
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: yt["c-tour-progress-bar"],
                  "data-class": "c-tour-progress__bar",
                  style: { transform: `scaleX(${l / a})` }
                }
              )
            }
          ),
          S(),
          /* @__PURE__ */ N(
            "div",
            {
              className: G({
                [yt["c-tour-button-container"]]: !v
              }),
              "data-class": "c-tour-button-container",
              children: [
                !t && /* @__PURE__ */ p(
                  At,
                  {
                    hasAriaLabel: !0,
                    label: "Salir",
                    "data-class": "c-button__close",
                    onClick: g,
                    icon: { name: "close", size: "big" },
                    ...v && { defaultStyle: v }
                  }
                ),
                !n && /* @__PURE__ */ p(
                  At,
                  {
                    disabled: l === 1,
                    hasAriaLabel: !0,
                    label: "Anterior",
                    "data-class": "c-button__before",
                    onClick: b,
                    icon: { name: "navigate_before", size: "big" },
                    ...v && { defaultStyle: v }
                  }
                ),
                /* @__PURE__ */ p(
                  At,
                  {
                    disabled: l === a,
                    hasAriaLabel: !0,
                    label: "Siguiente",
                    "data-class": "c-button__after",
                    onClick: D,
                    icon: { name: "navigate_next", size: "big" },
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
hi.propTypes = {
  ariaAttributes: r.shape({
    role: r.string,
    tabIndex: r.oneOfType([r.string, r.number]),
    "aria-label": r.string,
    "aria-modal": r.oneOfType([r.string, r.bool])
  }),
  hideCloseButton: r.bool,
  hideBackButton: r.bool
};
const Qu = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: o, defaultStyle: a } = ye(Qr), [i, l] = X({}), s = () => {
    const {
      x: c,
      y: f,
      width: u,
      height: d
    } = document.querySelector(n).getBoundingClientRect();
    l({
      width: `${u}px`,
      height: `${d}px`,
      top: `${f}px`,
      left: `${c}px`
    });
  };
  return H(() => (n && s(), () => {
    l({});
  }), [n]), H(() => {
    if (!e || !n)
      return;
    const c = (f) => {
      s();
    };
    return e && window.addEventListener("resize", c), () => {
      window.removeEventListener("resize", c);
    };
  }, [e, n]), /* @__PURE__ */ p(
    "div",
    {
      className: G({
        [yt["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [o]: o
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: yt["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, ed = "_active_r3225_90", td = "_iconPulse_r3225_1", fe = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: ed,
  iconPulse: td,
  "c-vid__progress-bg": "_c-vid__progress-bg_r3225_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_r3225_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_r3225_140",
  "c-vid__controls": "_c-vid__controls_r3225_150",
  "c-vid__button": "_c-vid__button_r3225_165",
  "c-vid__volume": "_c-vid__volume_r3225_180",
  "c-vid__volume-item": "_c-vid__volume-item_r3225_191",
  "c-vid__time": "_c-vid__time_r3225_202",
  "c-vid__subtitles": "_c-vid__subtitles_r3225_208"
}, mi = ({ src: e, width: t = "1000", hasDescription: n, description: o, addClass: a, poster: i, ...l }) => {
  const [s, c] = X({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, u] = X({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [d, v] = X({
    state: !1,
    label: "Reproducir video"
  }), [h, g] = X({
    state: !0,
    label: "Volumen"
  }), [b, y] = X(100), [x, C] = X({
    state: !1,
    label: "Ver en pantalla completa"
  }), [S, D] = X(!1), [_, E] = X(100), w = U(null), R = U(null), I = U(null), L = U(null), M = U(null), ee = U(null), K = U(null), re = U(null), [le, ie] = X(!1), te = (A) => {
    A.classList.add(`${fe.active}`), setTimeout(() => {
      A.classList.remove(`${fe.active}`);
    }, 650);
  };
  function Te() {
    const A = R.current;
    d.state ? (A.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (A.play(), v({
      state: !0,
      label: "Pausar video"
    })), te(ee.current);
  }
  function he() {
    const A = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, T = w.current;
    A ? (C({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (C({
      state: !0,
      label: "Salir de pantalla completa"
    }), T.requestFullscreen ? T.requestFullscreen() : T.mozRequestFullScreen ? T.mozRequestFullScreen() : T.webkitRequestFullScreen ? T.webkitRequestFullScreen() : T.msRequestFullscreen && T.msRequestFullscreen());
  }
  function O(A) {
    const T = parseInt(A, 10), Q = T >= 3600 ? Math.floor(T / 3600) : 0, me = Math.floor((T - Q * 3600) / 60), Se = T - Q * 3600 - me * 60, Ae = F(V(Q)), it = F(V(me)), ut = F(V(Se));
    return {
      hours: Ae,
      minutes: it,
      seconds: ut
    };
  }
  function $(A) {
    const T = B(A.duration), Q = B(A.currentTime);
    u({
      totalSeconds: A.currentTime,
      hours: parseInt(O(A.currentTime).hours),
      minutes: parseInt(O(A.currentTime).minutes),
      seconds: parseInt(O(A.currentTime).seconds),
      string: Q
    }), c({
      totalSeconds: Math.floor(A.duration),
      hours: parseInt(O(A.duration).hours),
      minutes: parseInt(O(A.duration).minutes),
      seconds: parseInt(O(A.duration).seconds),
      string: T
    });
  }
  function B(A) {
    return parseInt(A, 10) <= 3600 ? `${O(A).minutes}:${O(A).seconds}` : `${O(A).hours}:${O(A).minutes}:${O(A).seconds}`;
  }
  function V(A) {
    return A < 10 ? A = "0" + A : A;
  }
  function F(A) {
    return isNaN(A) ? "00" : A;
  }
  function W(A) {
    const T = L.current, Q = R.current, Se = A.nativeEvent.offsetX / T.offsetWidth * Q.duration;
    Q.currentTime = Se;
  }
  function j(A) {
    const T = R.current, Q = A.target.value, me = Q / 100;
    E(Q), y(Q), T.volume = me, h.state || g({
      state: !0,
      label: "Volumen"
    });
  }
  const Y = () => {
    if (h.state) {
      g({
        state: !1,
        label: "Mutear video"
      });
      const A = R.current, T = 0, Q = T;
      E(T), A.volume = Q;
    } else {
      g({
        state: !0,
        label: "Volumen"
      });
      const A = R.current, T = b, Q = T / 100;
      E(T), A.volume = Q;
    }
  }, z = function(A) {
    (A.keyCode || A.which) === 32 && Te();
  }, J = function(A) {
    const T = Math.floor(L.current.getAttribute("aria-valuenow"));
    if (document.activeElement === M.current)
      return null;
    if ((A.keyCode || A.which) === 37) {
      const Q = T - 5;
      Q >= 0 ? R.current.currentTime = Q : R.current.currentTime = 0, te(re.current);
    }
    if ((A.keyCode || A.which) === 39) {
      const Q = T + 5;
      Q >= R.current.duration ? R.current.currentTime = R.current.duration : R.current.currentTime = Q, te(K.current);
    }
  }, q = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return H(() => {
    const A = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(A, "caption") && ie(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(A, "volume") && E(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), H(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: le, volume: _ }));
  }, [le, _]), H(() => (I.current ? I.current.addEventListener("error", () => {
    D(!0);
  }) : D(!0), e.caption && D(!1), () => {
    I.current && I.current.removeEventListener("error", () => {
      D(!0);
    });
  }), [e.caption]), /* @__PURE__ */ N("figure", { className: `${fe["c-vid"]} ${a}`, style: { maxWidth: `${t}px` }, onKeyDown: (A) => J(A), ...l, children: [
    /* @__PURE__ */ N("div", { className: `${fe["c-vid__container"]} ${a}`, ref: w, children: [
      /* @__PURE__ */ N("div", { className: fe["c-vid__wrapper"], children: [
        /* @__PURE__ */ N(
          "video",
          {
            ref: R,
            onTimeUpdate: (A) => $(A.target),
            onLoadedData: (A) => $(A.target),
            onClick: Te,
            className: `${fe["c-vid__video"]} ${le ? "" : fe["no-captions"]}`,
            ...i && { poster: i },
            children: [
              /* @__PURE__ */ p("source", { src: e.video }),
              e.caption ? /* @__PURE__ */ p("track", { ref: I, src: e.caption, label: "Subtítulos en español", kind: "subtitles", srcLang: "es", default: !0 }) : ""
            ]
          }
        ),
        /* @__PURE__ */ N("div", { className: fe["c-vid__icon-container"], children: [
          /* @__PURE__ */ p("div", { ref: re, className: fe["c-vid__icon"], children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: ee, className: fe["c-vid__icon"], children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: K, className: fe["c-vid__icon"], children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { className: fe["progress-container"], children: /* @__PURE__ */ N(
        "div",
        {
          role: "slider",
          "aria-label": "Progreso del video",
          "aria-valuemin": "0",
          "aria-valuenow": f.totalSeconds,
          "aria-valuemax": s.totalSeconds,
          "aria-valuetext": q(),
          tabIndex: "0",
          onKeyDown: z,
          className: fe["c-vid__progress-bg"],
          onClick: W,
          ref: L,
          children: [
            /* @__PURE__ */ p(
              "div",
              {
                className: fe["c-vid__progress-bar"],
                style: {
                  transform: `scaleX(calc(${f.totalSeconds} / ${s.totalSeconds}))`
                }
              }
            ),
            /* @__PURE__ */ p(
              "div",
              {
                className: fe["progress-sphere"],
                style: {
                  left: `min(calc((${f.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
                }
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ N("div", { className: fe["c-vid__controls"], children: [
        /* @__PURE__ */ p(
          "button",
          {
            className: `${fe["c-vid__button"]} tour`,
            "aria-label": d.label,
            onClick: Te,
            "data-description": "Este botón reproduce el video",
            children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            className: `${fe["c-vid__button"]} tour`,
            "aria-label": h.label,
            "data-description": "Este botón controla el volumen",
            onClick: Y,
            children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: h.state ? /* @__PURE__ */ p("path", { id: "volume_on", d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z" }) : /* @__PURE__ */ p("path", { id: "volume_off", d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z" }) }) })
          }
        ),
        /* @__PURE__ */ N("label", { className: fe["c-vid__volume"], htmlFor: "volumeControl", children: [
          /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: fe["c-vid__volume-item"],
              ref: M,
              id: "volumeControl",
              type: "range",
              min: "0",
              max: "100",
              step: "5",
              value: _,
              onChange: j,
              "aria-valuetext": `${_}%`
            }
          )
        ] }),
        /* @__PURE__ */ N("p", { className: fe["c-vid__time"], "aria-hidden": "true", children: [
          /* @__PURE__ */ p("span", { children: f.string }),
          "/",
          /* @__PURE__ */ p("span", { children: s.string })
        ] }),
        /* @__PURE__ */ p(
          "button",
          {
            disabled: S,
            "aria-pressed": S ? void 0 : le,
            onClick: () => ie(!le),
            "aria-label": "Subtítulos",
            className: `${fe["c-vid__button"]} ${fe["c-vid__subtitles"]}`,
            children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: S ? /* @__PURE__ */ p("path", { id: "closed_caption_disabled", d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z" }) : /* @__PURE__ */ p("path", { id: "closed_caption", d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z" }) }) })
          }
        ),
        /* @__PURE__ */ p("button", { className: fe["c-vid__button"], "aria-label": x.label, onClick: he, children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: x.state ? /* @__PURE__ */ p("path", { id: "fullscreen_exit", d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z" }) : /* @__PURE__ */ p("path", { id: "fullscreen", d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z" }) }) }) })
      ] })
    ] }),
    n && /* @__PURE__ */ N("figcaption", { className: fe["c-vid__caption"], children: [
      /* @__PURE__ */ N("strong", { children: [
        o.title,
        ":"
      ] }),
      " ",
      o.content
    ] })
  ] });
};
mi.propTypes = {
  src: r.shape({
    video: r.string.isRequired,
    caption: r.string
  }),
  width: r.string,
  addClass: r.string,
  hasDescription: r.bool,
  description: r.shape({
    title: r.string,
    content: r.string
  }),
  poster: r.string
};
mi.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
const eo = Xe(), gi = ({ children: e, isVisible: t }) => {
  const [n, o] = X(!1), a = U(), i = () => o(!n), l = (s) => {
    a.current || (a.current = s);
  };
  return H(() => {
    t !== void 0 && o(t);
  }, [t]), /* @__PURE__ */ p(eo.Provider, { value: { isOpen: n, onOpen: i, setRefButton: l, refButton: a }, children: e });
};
gi.defaultProps = {
  isVisible: !1
};
gi.propTypes = {
  children: r.oneOfType([r.arrayOf(r.element), r.arrayOf(r.node), r.element, r.node]),
  isVisible: r.bool
};
const nd = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: o } = ye(eo);
  if (Ee.count(e) > 1)
    return null;
  const a = (l) => {
    n(), t && t(l);
  }, i = (l) => Ke(l) ? xe(l, {
    ...l.props,
    ref: o,
    onClick: a
  }) : null;
  return Ee.map(e, i);
};
nd.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.node),
    r.arrayOf(r.element),
    r.element,
    r.node
  ]),
  onClick: r.func
};
const xr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, Er = Object.freeze({
  ESC: 27,
  TAB: 9
}), bi = ({
  id: e,
  children: t,
  addClass: n,
  hasArrow: o,
  isDisabled: a,
  distance: i,
  placement: l,
  defaultStyle: s
}) => {
  const { isOpen: c, refButton: f } = ye(eo), u = U(), d = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', v = (b) => {
    const y = u.current.querySelectorAll(d), x = f.current, C = y[0], S = y[y.length - 1];
    if ((b.keyCode || b.which) === Er.TAB && document.activeElement === S)
      return x.focus(), b.preventDefault();
    b.shiftKey && (b.keyCode || b.which) === Er.TAB && document.activeElement === C && (x.focus(), b.preventDefault()), (b.keyCode || b.which) === Er.ESC && x.focus();
  }, { styles: h, attributes: g } = Qn(
    f.current,
    u.current,
    {
      placement: l,
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
        { name: "eventListeners", enabled: c }
      ]
    }
  );
  return H(() => {
    c && u.current.focus();
  }, [c]), a ? /* @__PURE__ */ p(pt, { children: t }) : /* @__PURE__ */ p(Kt, { id: "js-popover-modal-portal", children: /* @__PURE__ */ N(
    "div",
    {
      id: e,
      ref: u,
      role: "status",
      tabIndex: -1,
      className: G({
        [xr["c-popover-modal"]]: !s,
        [xr["c-popover-modal--active"]]: !s && c,
        [n]: n
      }),
      style: h.popper,
      onKeyDown: v,
      "data-hidden": !c,
      ...!c && { hidden: !0 },
      ...g.popper,
      children: [
        t,
        o && /* @__PURE__ */ p(
          "div",
          {
            className: G({
              [xr["c-popover-modal__arrow"]]: !s
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
bi.propTypes = {
  children: r.oneOfType([
    r.arrayOf(r.element),
    r.arrayOf(r.node),
    r.element,
    r.node
  ]),
  id: r.string,
  addClass: r.string,
  hasArrow: r.bool,
  isDisabled: r.bool,
  distance: r.number,
  defaultStyle: r.bool,
  placement: r.oneOf([
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
bi.defaultProps = {
  hasArrow: !1,
  placement: "auto"
};
const rd = (e, t) => {
  const [n, o] = X(() => {
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
      const l = i instanceof Function ? i(n) : i;
      o(l), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(l));
    } catch (l) {
      console.warn(`Error in useLocalStorage: ${l}`);
    }
  }];
}, od = (e, t, n) => {
  const [o, a] = X(n), i = e.map((s) => window.matchMedia(s)), l = () => {
    const s = i.findIndex((c) => c.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return H(() => {
    a(l);
    const s = (c) => a(l);
    return i.forEach((c) => c.addEventListener("change", s)), () => {
      i.forEach((c) => c.removeEventListener("change", s));
    };
  }, []), o;
}, cd = () => {
  const [e, t] = rd("dark-mode-enabled"), n = od(["(prefers-color-scheme: dark)"], [!0], !1), o = typeof e < "u" ? e : n;
  return H(() => {
    t(n);
  }, [n]), H(() => {
    const a = window.document.body;
    o ? a.setAttribute("data-dark-mode", o) : a.removeAttribute("data-dark-mode", o);
  }, [o]), [o, t];
}, ad = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), ud = (e) => {
  const { root: t, rootMargin: n, threshold: o } = e || ad, [a, i] = X(!1), [l, s] = X(null);
  return H(() => {
    if (!l) {
      i(!1);
      return;
    }
    const c = new IntersectionObserver(
      ([f]) => {
        i(f.isIntersecting);
      },
      {
        /**
             * configuraciones del la IntersectionObserver API.
             */
        root: t,
        rootMargin: n,
        threshold: o
      }
    );
    return c.observe(l), () => {
      c.unobserve(l);
    };
  }, [o, n, t, l]), [s, a];
}, yi = (e) => {
  let t = {};
  for (const n in e)
    if (typeof e[n] == "object") {
      const o = yi(e[n]);
      for (const a in o)
        t = {
          ...t,
          [n.includes("accents") || n.includes("palette") ? a : `${n}-${a}`]: o[a]
        };
    } else
      t[n] = e[n];
  return t;
}, dd = (e) => yi(e);
export {
  ki as Accordion,
  ea as AccordionButton,
  ta as AccordionItem,
  na as AccordionPanel,
  ra as Audio,
  At as Button,
  Tc as ButtonSection,
  ia as CheckBox,
  Ps as CheckBoxGroup,
  Ns as Col,
  $s as Content,
  Ca as DragAndDrop,
  Sa as DragAndDropContext,
  Ra as Draggable,
  Pa as Droppable,
  ld as Filter,
  Da as GeneralDraggable,
  we as Icon,
  Aa as Image,
  Na as Input,
  uc as InputGroup,
  $a as InputLeftAddon,
  ka as InputRightAddon,
  Ia as InputStyle,
  fc as Kbd,
  Ma as Link,
  pc as List,
  ja as ListItem,
  Fa as Modal,
  gc as ModalCloseButton,
  Ba as ModalContent,
  Gn as ModalContext,
  Va as ModalOverlay,
  Za as NavSection,
  Wa as NumberDecrementStepper,
  Ua as NumberIncrementStepper,
  qa as NumberInput,
  Zn as NumberInputContext,
  Ya as NumberInputField,
  za as NumberInputStepper,
  vc as OrderedList,
  Ha as Pagination,
  Wr as PaginationItem,
  wc as Panel,
  Kn as PanelContext,
  Sc as Paper,
  gi as PopoverModal,
  nd as PopoverModalButton,
  bi as PopoverModalContent,
  eo as PopoverModalContext,
  Kt as Portal,
  Nc as Row,
  Ga as Section,
  Ka as Select,
  Ic as SelectGroup,
  Xa as Switch,
  Ja as Tab,
  Qa as TabList,
  ei as TabPanel,
  ti as TabPanels,
  $c as Tabs,
  Ur as TabsContext,
  ni as TextArea,
  kc as ThemeProvider,
  fi as Toggletip,
  pi as Tooltip,
  vi as Tour,
  Qr as TourContext,
  hi as TourElement,
  Qu as TourHelpLayer,
  hc as UnorderedList,
  mi as Video,
  dd as createTheme,
  cd as useDarkMode,
  rd as useLocalStorage,
  od as useMedia,
  ud as useOnScreen,
  bc as usePagination,
  Pc as usePortal
};
