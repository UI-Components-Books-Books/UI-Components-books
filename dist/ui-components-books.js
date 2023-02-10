import * as $t from "react";
import Le, { Children as xe, useState as X, useEffect as Z, isValidElement as Ze, cloneElement as we, forwardRef as lt, useRef as G, useMemo as ue, useLayoutEffect as zo, useCallback as De, createContext as Ke, memo as Wo, useReducer as Ar, useContext as be, createElement as hi } from "react";
import * as mi from "react-dom";
import { unstable_batchedUpdates as Jt, createPortal as Uo } from "react-dom";
var Pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fn = {}, gi = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
}, Qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function bi() {
  if (Qr)
    return Qt;
  Qr = 1;
  var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, c, f) {
    var u, d = {}, v = null, m = null;
    f !== void 0 && (v = "" + f), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c)
      r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps)
      for (u in c = s.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: s, key: v, ref: m, props: d, _owner: a.current };
  }
  return Qt.Fragment = n, Qt.jsx = l, Qt.jsxs = l, Qt;
}
var en = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function yi() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, g = "@@iterator";
    function _(h) {
      if (h === null || typeof h != "object")
        return null;
      var C = b && h[b] || h[g];
      return typeof C == "function" ? C : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(h) {
      {
        for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), K = 1; K < C; K++)
          M[K - 1] = arguments[K];
        R("error", h, M);
      }
    }
    function R(h, C, M) {
      {
        var K = w.ReactDebugCurrentFrame, ie = K.getStackAddendum();
        ie !== "" && (C += "%s", M = M.concat([ie]));
        var de = M.map(function(oe) {
          return String(oe);
        });
        de.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, de);
      }
    }
    var P = !1, y = !1, O = !1, x = !1, S = !1, D;
    D = Symbol.for("react.module.reference");
    function j(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === i || S || h === a || h === f || h === u || x || h === m || P || y || O || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === d || h.$$typeof === l || h.$$typeof === s || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === D || h.getModuleId !== void 0));
    }
    function I(h, C, M) {
      var K = h.displayName;
      if (K)
        return K;
      var ie = C.displayName || C.name || "";
      return ie !== "" ? M + "(" + ie + ")" : M;
    }
    function U(h) {
      return h.displayName || "Context";
    }
    function q(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
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
        case u:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case s:
            var C = h;
            return U(C) + ".Consumer";
          case l:
            var M = h;
            return U(M._context) + ".Provider";
          case c:
            return I(h, h.render, "ForwardRef");
          case d:
            var K = h.displayName || null;
            return K !== null ? K : q(h.type) || "Memo";
          case v: {
            var ie = h, de = ie._payload, oe = ie._init;
            try {
              return q(oe(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, ce = 0, re, ee, Ee, he, T, k, B;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function F() {
      {
        if (ce === 0) {
          re = console.log, ee = console.info, Ee = console.warn, he = console.error, T = console.group, k = console.groupCollapsed, B = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        ce++;
      }
    }
    function H() {
      {
        if (ce--, ce === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, h, {
              value: re
            }),
            info: te({}, h, {
              value: ee
            }),
            warn: te({}, h, {
              value: Ee
            }),
            error: te({}, h, {
              value: he
            }),
            group: te({}, h, {
              value: T
            }),
            groupCollapsed: te({}, h, {
              value: k
            }),
            groupEnd: te({}, h, {
              value: B
            })
          });
        }
        ce < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = w.ReactCurrentDispatcher, z;
    function W(h, C, M) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (ie) {
            var K = ie.stack.trim().match(/\n( *(at )?)/);
            z = K && K[1] || "";
          }
        return `
` + z + h;
      }
    }
    var J = !1, Y;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new A();
    }
    function E(h, C) {
      if (!h || J)
        return "";
      {
        var M = Y.get(h);
        if (M !== void 0)
          return M;
      }
      var K;
      J = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = L.current, L.current = null, F();
      try {
        if (C) {
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
              K = ft;
            }
            Reflect.construct(h, [], oe);
          } else {
            try {
              oe.call();
            } catch (ft) {
              K = ft;
            }
            h.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            K = ft;
          }
          h();
        }
      } catch (ft) {
        if (ft && K && typeof ft.stack == "string") {
          for (var ne = ft.stack.split(`
`), Ne = K.stack.split(`
`), ge = ne.length - 1, ye = Ne.length - 1; ge >= 1 && ye >= 0 && ne[ge] !== Ne[ye]; )
            ye--;
          for (; ge >= 1 && ye >= 0; ge--, ye--)
            if (ne[ge] !== Ne[ye]) {
              if (ge !== 1 || ye !== 1)
                do
                  if (ge--, ye--, ye < 0 || ne[ge] !== Ne[ye]) {
                    var We = `
` + ne[ge].replace(" at new ", " at ");
                    return h.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", h.displayName)), typeof h == "function" && Y.set(h, We), We;
                  }
                while (ge >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        J = !1, L.current = de, H(), Error.prepareStackTrace = ie;
      }
      var kt = h ? h.displayName || h.name : "", Jr = kt ? W(kt) : "";
      return typeof h == "function" && Y.set(h, Jr), Jr;
    }
    function Q(h, C, M) {
      return E(h, !1);
    }
    function me(h) {
      var C = h.prototype;
      return !!(C && C.isReactComponent);
    }
    function Oe(h, C, M) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return E(h, me(h));
      if (typeof h == "string")
        return W(h);
      switch (h) {
        case f:
          return W("Suspense");
        case u:
          return W("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return Q(h.render);
          case d:
            return Oe(h.type, C, M);
          case v: {
            var K = h, ie = K._payload, de = K._init;
            try {
              return Oe(de(ie), C, M);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, at = {}, ut = w.ReactDebugCurrentFrame;
    function it(h) {
      if (h) {
        var C = h._owner, M = Oe(h.type, h._source, C ? C.type : null);
        ut.setExtraStackFrame(M);
      } else
        ut.setExtraStackFrame(null);
    }
    function Se(h, C, M, K, ie) {
      {
        var de = Function.call.bind($e);
        for (var oe in h)
          if (de(h, oe)) {
            var ne = void 0;
            try {
              if (typeof h[oe] != "function") {
                var Ne = Error((K || "React class") + ": " + M + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              ne = h[oe](C, oe, K, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              ne = ge;
            }
            ne && !(ne instanceof Error) && (it(ie), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", M, oe, typeof ne), it(null)), ne instanceof Error && !(ne.message in at) && (at[ne.message] = !0, it(ie), $("Failed %s type: %s", M, ne.message), it(null));
          }
      }
    }
    var Je = Array.isArray;
    function Qe(h) {
      return Je(h);
    }
    function wt(h) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return M;
      }
    }
    function ht(h) {
      try {
        return xt(h), !1;
      } catch {
        return !0;
      }
    }
    function xt(h) {
      return "" + h;
    }
    function Et(h) {
      if (ht(h))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(h)), xt(h);
    }
    var Ae = w.ReactCurrentOwner, et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, Kt, Ye;
    Ye = {};
    function Tn(h) {
      if ($e.call(h, "ref")) {
        var C = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Qn(h) {
      if ($e.call(h, "key")) {
        var C = Object.getOwnPropertyDescriptor(h, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function er(h, C) {
      if (typeof h.ref == "string" && Ae.current && C && Ae.current.stateNode !== C) {
        var M = q(Ae.current.type);
        Ye[M] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(Ae.current.type), h.ref), Ye[M] = !0);
      }
    }
    function On(h, C) {
      {
        var M = function() {
          mt || (mt = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function tr(h, C) {
      {
        var M = function() {
          Kt || (Kt = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Sn = function(h, C, M, K, ie, de, oe) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: C,
        ref: M,
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
        value: K
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function nr(h, C, M, K, ie) {
      {
        var de, oe = {}, ne = null, Ne = null;
        M !== void 0 && (Et(M), ne = "" + M), Qn(C) && (Et(C.key), ne = "" + C.key), Tn(C) && (Ne = C.ref, er(C, ie));
        for (de in C)
          $e.call(C, de) && !et.hasOwnProperty(de) && (oe[de] = C[de]);
        if (h && h.defaultProps) {
          var ge = h.defaultProps;
          for (de in ge)
            oe[de] === void 0 && (oe[de] = ge[de]);
        }
        if (ne || Ne) {
          var ye = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ne && On(oe, ye), Ne && tr(oe, ye);
        }
        return Sn(h, ne, Ne, ie, K, Ae.current, oe);
      }
    }
    var Xt = w.ReactCurrentOwner, Cn = w.ReactDebugCurrentFrame;
    function ve(h) {
      if (h) {
        var C = h._owner, M = Oe(h.type, h._source, C ? C.type : null);
        Cn.setExtraStackFrame(M);
      } else
        Cn.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Pe(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function tt() {
      {
        if (Xt.current) {
          var h = q(Xt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Ie(h) {
      {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
    }
    var ke = {};
    function ze(h) {
      {
        var C = tt();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
    }
    function dt(h, C) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var M = ze(C);
        if (ke[M])
          return;
        ke[M] = !0;
        var K = "";
        h && h._owner && h._owner !== Xt.current && (K = " It was passed a child from " + q(h._owner.type) + "."), ve(h), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, K), ve(null);
      }
    }
    function Me(h, C) {
      {
        if (typeof h != "object")
          return;
        if (Qe(h))
          for (var M = 0; M < h.length; M++) {
            var K = h[M];
            Pe(K) && dt(K, C);
          }
        else if (Pe(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ie = _(h);
          if (typeof ie == "function" && ie !== h.entries)
            for (var de = ie.call(h), oe; !(oe = de.next()).done; )
              Pe(oe.value) && dt(oe.value, C);
        }
      }
    }
    function Tt(h) {
      {
        var C = h.type;
        if (C == null || typeof C == "string")
          return;
        var M;
        if (typeof C == "function")
          M = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === d))
          M = C.propTypes;
        else
          return;
        if (M) {
          var K = q(C);
          Se(M, h.props, "prop", K, h);
        } else if (C.PropTypes !== void 0 && !Re) {
          Re = !0;
          var ie = q(C);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(h) {
      {
        for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
          var K = C[M];
          if (K !== "children" && K !== "key") {
            ve(h), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), ve(null);
            break;
          }
        }
        h.ref !== null && (ve(h), $("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function St(h, C, M, K, ie, de) {
      {
        var oe = j(h);
        if (!oe) {
          var ne = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = Ie(ie);
          Ne ? ne += Ne : ne += tt();
          var ge;
          h === null ? ge = "null" : Qe(h) ? ge = "array" : h !== void 0 && h.$$typeof === t ? (ge = "<" + (q(h.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof h, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, ne);
        }
        var ye = nr(h, C, M, ie, de);
        if (ye == null)
          return ye;
        if (oe) {
          var We = C.children;
          if (We !== void 0)
            if (K)
              if (Qe(We)) {
                for (var kt = 0; kt < We.length; kt++)
                  Me(We[kt], h);
                Object.freeze && Object.freeze(We);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(We, h);
        }
        return h === r ? Ot(ye) : Tt(ye), ye;
      }
    }
    function It(h, C, M) {
      return St(h, C, M, !0);
    }
    function Rn(h, C, M) {
      return St(h, C, M, !1);
    }
    var Ct = Rn, Rt = It;
    en.Fragment = r, en.jsx = Ct, en.jsxs = Rt;
  }()), en;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = bi() : e.exports = yi();
})(gi);
const pt = fn.Fragment, p = fn.jsx, N = fn.jsxs;
var o = {}, to = {
  get exports() {
    return o;
  },
  set exports(e) {
    o = e;
  }
}, Ln = {}, _i = {
  get exports() {
    return Ln;
  },
  set exports(e) {
    Ln = e;
  }
}, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function wi() {
  if (no)
    return se;
  no = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function R(y) {
    if (typeof y == "object" && y !== null) {
      var O = y.$$typeof;
      switch (O) {
        case t:
          switch (y = y.type, y) {
            case c:
            case f:
            case r:
            case i:
            case a:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case u:
                case b:
                case m:
                case l:
                  return y;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  function P(y) {
    return R(y) === f;
  }
  return se.AsyncMode = c, se.ConcurrentMode = f, se.ContextConsumer = s, se.ContextProvider = l, se.Element = t, se.ForwardRef = u, se.Fragment = r, se.Lazy = b, se.Memo = m, se.Portal = n, se.Profiler = i, se.StrictMode = a, se.Suspense = d, se.isAsyncMode = function(y) {
    return P(y) || R(y) === c;
  }, se.isConcurrentMode = P, se.isContextConsumer = function(y) {
    return R(y) === s;
  }, se.isContextProvider = function(y) {
    return R(y) === l;
  }, se.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, se.isForwardRef = function(y) {
    return R(y) === u;
  }, se.isFragment = function(y) {
    return R(y) === r;
  }, se.isLazy = function(y) {
    return R(y) === b;
  }, se.isMemo = function(y) {
    return R(y) === m;
  }, se.isPortal = function(y) {
    return R(y) === n;
  }, se.isProfiler = function(y) {
    return R(y) === i;
  }, se.isStrictMode = function(y) {
    return R(y) === a;
  }, se.isSuspense = function(y) {
    return R(y) === d;
  }, se.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === f || y === i || y === a || y === d || y === v || typeof y == "object" && y !== null && (y.$$typeof === b || y.$$typeof === m || y.$$typeof === l || y.$$typeof === s || y.$$typeof === u || y.$$typeof === _ || y.$$typeof === w || y.$$typeof === $ || y.$$typeof === g);
  }, se.typeOf = R, se;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function xi() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function R(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === r || E === f || E === i || E === a || E === d || E === v || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === m || E.$$typeof === l || E.$$typeof === s || E.$$typeof === u || E.$$typeof === _ || E.$$typeof === w || E.$$typeof === $ || E.$$typeof === g);
    }
    function P(E) {
      if (typeof E == "object" && E !== null) {
        var Q = E.$$typeof;
        switch (Q) {
          case t:
            var me = E.type;
            switch (me) {
              case c:
              case f:
              case r:
              case i:
              case a:
              case d:
                return me;
              default:
                var Oe = me && me.$$typeof;
                switch (Oe) {
                  case s:
                  case u:
                  case b:
                  case m:
                  case l:
                    return Oe;
                  default:
                    return Q;
                }
            }
          case n:
            return Q;
        }
      }
    }
    var y = c, O = f, x = s, S = l, D = t, j = u, I = r, U = b, q = m, te = n, ce = i, re = a, ee = d, Ee = !1;
    function he(E) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(E) || P(E) === c;
    }
    function T(E) {
      return P(E) === f;
    }
    function k(E) {
      return P(E) === s;
    }
    function B(E) {
      return P(E) === l;
    }
    function V(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function F(E) {
      return P(E) === u;
    }
    function H(E) {
      return P(E) === r;
    }
    function L(E) {
      return P(E) === b;
    }
    function z(E) {
      return P(E) === m;
    }
    function W(E) {
      return P(E) === n;
    }
    function J(E) {
      return P(E) === i;
    }
    function Y(E) {
      return P(E) === a;
    }
    function A(E) {
      return P(E) === d;
    }
    le.AsyncMode = y, le.ConcurrentMode = O, le.ContextConsumer = x, le.ContextProvider = S, le.Element = D, le.ForwardRef = j, le.Fragment = I, le.Lazy = U, le.Memo = q, le.Portal = te, le.Profiler = ce, le.StrictMode = re, le.Suspense = ee, le.isAsyncMode = he, le.isConcurrentMode = T, le.isContextConsumer = k, le.isContextProvider = B, le.isElement = V, le.isForwardRef = F, le.isFragment = H, le.isLazy = L, le.isMemo = z, le.isPortal = W, le.isProfiler = J, le.isStrictMode = Y, le.isSuspense = A, le.isValidElementType = R, le.typeOf = P;
  }()), le;
}
var oo;
function Ho() {
  return oo || (oo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = wi() : e.exports = xi();
  }(_i)), Ln;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rr, ao;
function Ei() {
  if (ao)
    return rr;
  ao = 1;
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
  return rr = a() ? Object.assign : function(i, l) {
    for (var s, c = r(i), f, u = 1; u < arguments.length; u++) {
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
  }, rr;
}
var or, io;
function Nr() {
  if (io)
    return or;
  io = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return or = e, or;
}
var ar, so;
function Go() {
  return so || (so = 1, ar = Function.call.bind(Object.prototype.hasOwnProperty)), ar;
}
var ir, lo;
function Ti() {
  if (lo)
    return ir;
  lo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Nr(), n = {}, r = Go();
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
        if (r(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var v = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            d = i[u](l, u, c, s, null, t);
          } catch (b) {
            d = b;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var m = f ? f() : "";
            e(
              "Failed " + s + " type: " + d.message + (m ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ir = a, ir;
}
var sr, co;
function Oi() {
  if (co)
    return sr;
  co = 1;
  var e = Ho(), t = Ei(), n = Nr(), r = Go(), a = Ti(), i = function() {
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
  return sr = function(s, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(T) {
      var k = T && (f && T[f] || T[u]);
      if (typeof k == "function")
        return k;
    }
    var v = "<<anonymous>>", m = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: $(),
      arrayOf: R,
      element: P(),
      elementType: y(),
      instanceOf: O,
      node: j(),
      objectOf: S,
      oneOf: x,
      oneOfType: D,
      shape: U,
      exact: q
    };
    function b(T, k) {
      return T === k ? T !== 0 || 1 / T === 1 / k : T !== T && k !== k;
    }
    function g(T, k) {
      this.message = T, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function _(T) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, B = 0;
      function V(H, L, z, W, J, Y, A) {
        if (W = W || v, Y = Y || z, A !== n) {
          if (c) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = W + ":" + z;
            !k[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Q] = !0, B++);
          }
        }
        return L[z] == null ? H ? L[z] === null ? new g("The " + J + " `" + Y + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new g("The " + J + " `" + Y + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : T(L, z, W, J, Y);
      }
      var F = V.bind(null, !1);
      return F.isRequired = V.bind(null, !0), F;
    }
    function w(T) {
      function k(B, V, F, H, L, z) {
        var W = B[V], J = re(W);
        if (J !== T) {
          var Y = ee(W);
          return new g(
            "Invalid " + H + " `" + L + "` of type " + ("`" + Y + "` supplied to `" + F + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return _(k);
    }
    function $() {
      return _(l);
    }
    function R(T) {
      function k(B, V, F, H, L) {
        if (typeof T != "function")
          return new g("Property `" + L + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var z = B[V];
        if (!Array.isArray(z)) {
          var W = re(z);
          return new g("Invalid " + H + " `" + L + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected an array."));
        }
        for (var J = 0; J < z.length; J++) {
          var Y = T(z, J, F, H, L + "[" + J + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return _(k);
    }
    function P() {
      function T(k, B, V, F, H) {
        var L = k[B];
        if (!s(L)) {
          var z = re(L);
          return new g("Invalid " + F + " `" + H + "` of type " + ("`" + z + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(T);
    }
    function y() {
      function T(k, B, V, F, H) {
        var L = k[B];
        if (!e.isValidElementType(L)) {
          var z = re(L);
          return new g("Invalid " + F + " `" + H + "` of type " + ("`" + z + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(T);
    }
    function O(T) {
      function k(B, V, F, H, L) {
        if (!(B[V] instanceof T)) {
          var z = T.name || v, W = he(B[V]);
          return new g("Invalid " + H + " `" + L + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return _(k);
    }
    function x(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function k(B, V, F, H, L) {
        for (var z = B[V], W = 0; W < T.length; W++)
          if (b(z, T[W]))
            return null;
        var J = JSON.stringify(T, function(A, E) {
          var Q = ee(E);
          return Q === "symbol" ? String(E) : E;
        });
        return new g("Invalid " + H + " `" + L + "` of value `" + String(z) + "` " + ("supplied to `" + F + "`, expected one of " + J + "."));
      }
      return _(k);
    }
    function S(T) {
      function k(B, V, F, H, L) {
        if (typeof T != "function")
          return new g("Property `" + L + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var z = B[V], W = re(z);
        if (W !== "object")
          return new g("Invalid " + H + " `" + L + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected an object."));
        for (var J in z)
          if (r(z, J)) {
            var Y = T(z, J, F, H, L + "." + J, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return _(k);
    }
    function D(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var k = 0; k < T.length; k++) {
        var B = T[k];
        if (typeof B != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(B) + " at index " + k + "."
          ), l;
      }
      function V(F, H, L, z, W) {
        for (var J = [], Y = 0; Y < T.length; Y++) {
          var A = T[Y], E = A(F, H, L, z, W, n);
          if (E == null)
            return null;
          E.data && r(E.data, "expectedType") && J.push(E.data.expectedType);
        }
        var Q = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new g("Invalid " + z + " `" + W + "` supplied to " + ("`" + L + "`" + Q + "."));
      }
      return _(V);
    }
    function j() {
      function T(k, B, V, F, H) {
        return te(k[B]) ? null : new g("Invalid " + F + " `" + H + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return _(T);
    }
    function I(T, k, B, V, F) {
      return new g(
        (T || "React class") + ": " + k + " type `" + B + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function U(T) {
      function k(B, V, F, H, L) {
        var z = B[V], W = re(z);
        if (W !== "object")
          return new g("Invalid " + H + " `" + L + "` of type `" + W + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var J in T) {
          var Y = T[J];
          if (typeof Y != "function")
            return I(F, H, L, J, ee(Y));
          var A = Y(z, J, F, H, L + "." + J, n);
          if (A)
            return A;
        }
        return null;
      }
      return _(k);
    }
    function q(T) {
      function k(B, V, F, H, L) {
        var z = B[V], W = re(z);
        if (W !== "object")
          return new g("Invalid " + H + " `" + L + "` of type `" + W + "` " + ("supplied to `" + F + "`, expected `object`."));
        var J = t({}, B[V], T);
        for (var Y in J) {
          var A = T[Y];
          if (r(T, Y) && typeof A != "function")
            return I(F, H, L, Y, ee(A));
          if (!A)
            return new g(
              "Invalid " + H + " `" + L + "` key `" + Y + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(B[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var E = A(z, Y, F, H, L + "." + Y, n);
          if (E)
            return E;
        }
        return null;
      }
      return _(k);
    }
    function te(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(te);
          if (T === null || s(T))
            return !0;
          var k = d(T);
          if (k) {
            var B = k.call(T), V;
            if (k !== T.entries) {
              for (; !(V = B.next()).done; )
                if (!te(V.value))
                  return !1;
            } else
              for (; !(V = B.next()).done; ) {
                var F = V.value;
                if (F && !te(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(T, k) {
      return T === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function re(T) {
      var k = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : ce(k, T) ? "symbol" : k;
    }
    function ee(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var k = re(T);
      if (k === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function Ee(T) {
      var k = ee(T);
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
    function he(T) {
      return !T.constructor || !T.constructor.name ? v : T.constructor.name;
    }
    return m.checkPropTypes = a, m.resetWarningCache = a.resetWarningCache, m.PropTypes = m, m;
  }, sr;
}
var lr, uo;
function Si() {
  if (uo)
    return lr;
  uo = 1;
  var e = Nr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, lr = function() {
    function r(l, s, c, f, u, d) {
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
  }, lr;
}
if (process.env.NODE_ENV !== "production") {
  var Ci = Ho(), Ri = !0;
  to.exports = Oi()(Ci.isElement, Ri);
} else
  to.exports = Si()();
const Pi = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Be = (e, t) => xe.toArray(e).filter((n) => t.indexOf(Pi(n)) !== -1), $i = ({ children: e, allowMultiple: t, defaultIndex: n }) => {
  const [r, a] = X(), i = (s) => {
    t ? r.includes(s) ? a(r.filter((c) => c !== s)) : a([...r, s]) : a(s);
  };
  Z(() => (a(t ? n || [] : n ?? null), () => {
    a(null);
  }), [t, n]);
  const l = xe.map(e, (s, c) => Ze(s) ? we(s, { ...s.props, id: c, isOpen: r, onToggle: i }) : null);
  return /* @__PURE__ */ p("div", { children: Be(l, ["AccordionItem"]) });
};
$i.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
const pe = (e) => (t, n, r) => {
  if (t[n] !== e)
    return new Error(
      `'${n}' in '${r}' 

 NO puedes pasar un valor de props para '${n}'.La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.`
    );
}, jt = {
  "c-accordion__item": "_c-accordion__item_1xs3f_1",
  "c-accordion__button": "_c-accordion__button_1xs3f_10",
  "c-accordion": "_c-accordion_1xs3f_1",
  "c-accordion__panel": "_c-accordion__panel_1xs3f_33",
  "c-accordion__panel--active": "_c-accordion__panel--active_1xs3f_38",
  "c-accordion__panel-content": "_c-accordion__panel-content_1xs3f_42"
}, Zo = ({ children: e, id: t, onExpanded: n, isExpanded: r, expanded: a, addClass: i, icon: l, __TYPE: s, ...c }) => /* @__PURE__ */ N(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: `${jt["c-accordion__button"]} u-flex ${i ?? ""} ${r && a && a}`,
    onClick: n,
    "data-type": s,
    ...c,
    children: [
      e,
      l && l(r)
    ]
  }
);
Zo.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  id: o.number,
  onExpanded: o.func,
  isExpanded: o.bool,
  expanded: o.string,
  addClass: o.string,
  icon: o.func,
  __TYPE: pe("AccordionButton")
};
Zo.defaultProps = {
  __TYPE: "AccordionButton"
};
const Ko = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a }) => {
  const i = () => r(t), l = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, s = xe.map(e, (c) => Ze(c) ? c.props.__TYPE === "AccordionButton" ? we(c, { ...c.props, id: t, onExpanded: i, isExpanded: l() }) : we(c, { ...c.props, id: t, isExpanded: l() }) : null);
  return /* @__PURE__ */ p("div", { className: `${jt["c-accordion__item"]} ${a ?? ""}`, children: Be(s, ["AccordionButton", "AccordionPanel"]) });
};
Ko.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  __TYPE: pe("AccordionItem")
};
Ko.defaultProps = {
  __TYPE: "AccordionItem"
};
const Xo = ({ children: e, id: t, isExpanded: n, addClass: r, __TYPE: a, ...i }) => /* @__PURE__ */ p(
  "div",
  {
    className: `${jt["c-accordion"]} ${n ? jt["c-accordion__panel--active"] : jt["c-accordion__panel"]}`,
    "aria-hidden": !n,
    "data-type": a,
    ...!n && { hidden: !n },
    ...i,
    children: /* @__PURE__ */ p(
      "div",
      {
        id: `accordion-panel-${t}`,
        role: "region",
        "aria-hidden": !n,
        "aria-labelledby": `accordion-button-${t}`,
        className: `${jt["c-accordion__panel-content"]} ${r ?? ""}`,
        children: e
      }
    )
  }
);
Xo.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  id: o.number,
  isExpanded: o.bool,
  addClass: o.string,
  __TYPE: pe("AccordionPanel")
};
Xo.defaultProps = {
  __TYPE: "AccordionPanel"
};
const $n = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Di = /\w+\.svg/gi, _e = ({ children: e, path: t, size: n, addClass: r }) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", { children: "Doesn't exist" });
  if (xe.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const a = t && t.match(Di).toString().replace(/.svg/gi, ""), i = `${t}#${a}`;
  return e ? we(e, {
    ...e.props,
    className: `${$n["c-icon"]} ${$n[`c-${n}`]} ${r ?? ""}`,
    "aria-hidden": !0,
    "data-testid": a
  }) : /* @__PURE__ */ p(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "48",
      height: "48",
      viewBox: "0 0 48 48",
      className: `${$n["c-icon"]} ${$n[`c-${n}`]} ${r ?? ""}`,
      "aria-hidden": "true",
      "data-testid": a,
      children: /* @__PURE__ */ p("use", { xlinkHref: i })
    }
  );
};
_e.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  path: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  addClass: o.string,
  __TYPE: pe("Icon")
};
_e.defaultProps = {
  size: "normal",
  __TYPE: "Icon"
};
const tn = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, Dt = lt((e, t) => {
  const {
    label: n,
    size: r,
    icon: a,
    type: i,
    variant: l,
    hasAriaLabel: s,
    disabled: c,
    onClick: f,
    children: u,
    addClass: d,
    ...v
  } = e;
  return /* @__PURE__ */ N(
    "button",
    {
      ref: t,
      className: `${d ?? ""} ${tn["c-button"]} ${tn[`c-${l}`]} ${tn[`c-${r}`]} ${a && a.path && s ? tn["c-round"] : ""} 
        ${a && a.position === "right" ? tn["c-reverse"] : ""}`,
      disabled: c,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...v,
      children: [
        u,
        a && /* @__PURE__ */ p(_e, { path: a.path, size: a.size }),
        s ? null : n
      ]
    }
  );
});
Dt.propTypes = {
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
  addClass: o.string
};
Dt.defaultProps = {
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const Mt = {
  "c-audio": "_c-audio_c6ix7_1",
  "c-audio--small": "_c-audio--small_c6ix7_15",
  "c-audio--hidden": "_c-audio--hidden_c6ix7_33",
  "c-button": "_c-button_c6ix7_37",
  "is-button-paused": "_is-button-paused_c6ix7_62",
  "is-button-playing": "_is-button-playing_c6ix7_70"
}, Jo = ({ src: e, format: t, a11y: n, size: r, type: a, addClass: i, ...l }) => {
  const [s, c] = X(!1), f = G(), u = Object.freeze({
    BUTTON: "Button",
    BAR: "Bar"
  }), d = (v) => {
    f.current && (f.current.paused ? f.current.play() : f.current.pause(), c(!s));
  };
  return a === u.BAR ? /* @__PURE__ */ p("audio", { preload: "metadata", controls: !0, className: `${Mt["c-audio"]} ${r && Mt[`c-audio--${r}`]} ${i ?? ""}`, "data-a11y": n, ...l, children: /* @__PURE__ */ p("source", { src: e, type: t }) }) : /* @__PURE__ */ N(pt, { children: [
    /* @__PURE__ */ p("audio", { ref: f, src: e, type: t, onEnded: () => c(!s), className: Mt["c-audio--hidden"] }),
    /* @__PURE__ */ p(
      Dt,
      {
        label: s ? "Pausar" : "Reproduccir",
        "data-a11y": n,
        addClass: `${Mt["c-button"]} ${s ? Mt["is-button-playing"] : Mt["is-button-paused"]} ${i ?? ""}`,
        onClick: d,
        hasAriaLabel: !0,
        ...n && { disabled: n },
        ...l
      }
    )
  ] });
};
Jo.defaultProps = {
  a11y: !1,
  type: "Bar"
};
Jo.propTypes = {
  src: o.string,
  a11y: o.bool,
  format: o.string,
  size: o.oneOf(["small"]),
  type: o.oneOf(["Bar", "Button"]),
  addClass: o.string
};
var Ai = typeof Pn == "object" && Pn && Pn.Object === Object && Pn, Ni = Ai, Ii = Ni, ki = typeof self == "object" && self && self.Object === Object && self, Mi = Ii || ki || Function("return this")(), Li = Mi, ji = Li, Fi = ji.Symbol, Ir = Fi;
function Bi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Vi = Bi, qi = Array.isArray, Yi = qi, fo = Ir, Qo = Object.prototype, zi = Qo.hasOwnProperty, Wi = Qo.toString, nn = fo ? fo.toStringTag : void 0;
function Ui(e) {
  var t = zi.call(e, nn), n = e[nn];
  try {
    e[nn] = void 0;
    var r = !0;
  } catch {
  }
  var a = Wi.call(e);
  return r && (t ? e[nn] = n : delete e[nn]), a;
}
var Hi = Ui, Gi = Object.prototype, Zi = Gi.toString;
function Ki(e) {
  return Zi.call(e);
}
var Xi = Ki, po = Ir, Ji = Hi, Qi = Xi, es = "[object Null]", ts = "[object Undefined]", vo = po ? po.toStringTag : void 0;
function ns(e) {
  return e == null ? e === void 0 ? ts : es : vo && vo in Object(e) ? Ji(e) : Qi(e);
}
var rs = ns;
function os(e) {
  return e != null && typeof e == "object";
}
var as = os, is = rs, ss = as, ls = "[object Symbol]";
function cs(e) {
  return typeof e == "symbol" || ss(e) && is(e) == ls;
}
var us = cs, ho = Ir, ds = Vi, fs = Yi, ps = us, vs = 1 / 0, mo = ho ? ho.prototype : void 0, go = mo ? mo.toString : void 0;
function ea(e) {
  if (typeof e == "string")
    return e;
  if (fs(e))
    return ds(e, ea) + "";
  if (ps(e))
    return go ? go.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -vs ? "-0" : t;
}
var hs = ea, ms = hs;
function gs(e) {
  return e == null ? "" : ms(e);
}
var bs = gs, ys = bs, _s = 0;
function ws(e) {
  var t = ++_s;
  return ys(e) + t;
}
var ct = ws;
const Lt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, ta = lt(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: l, isDisabled: s, defaultChecked: c, onChange: f, __TYPE: u, inherit: d, ...v }, m) => {
    const b = ue(() => e || ct(`ui-${n}`), [e, n]), g = Object.freeze({
      right: /* @__PURE__ */ p("path", { id: "done_all", d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z" }),
      wrong: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }),
      normal: n === "checkbox" ? /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }) : null
    }), _ = ({ target: w }) => {
      if (f) {
        if (w.checked) {
          f({ id: w.id, value: w.value });
          return;
        }
        f({ id: w.id, value: "" });
      }
    };
    return /* @__PURE__ */ N(
      "label",
      {
        htmlFor: b,
        className: `${Lt["c-input"]} u-flex ${l ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": u,
        ...!d && { ...v },
        children: [
          /* @__PURE__ */ N("div", { className: Lt["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: b,
                ref: m,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: Lt["c-input__check"],
                onChange: _,
                ...s && { disabled: !0 },
                ...d && { ...v },
                ...c && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${Lt["c-input__icon"]} ${c ? Lt["c-input-defaultChecked"] : ""} `, children: g[a] && /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                children: g[a]
              }
            ) }) })
          ] }),
          /* @__PURE__ */ p("span", { className: Lt["c-input__label"], children: r })
        ]
      }
    );
  }
);
ta.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
ta.propTypes = {
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
  __TYPE: pe("CheckBox")
};
const xs = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = X([]), l = G(), s = (d) => {
    l.current = d || "";
  }, c = (d) => l.current === "radio" ? [{ ...d }] : a.filter((m) => m.id === d.id).length ? [...a.filter((m) => m.id !== d.id)] : [...a, { ...d }], f = (d) => {
    const v = c(d);
    n && n(v), i(v);
  }, u = xe.map(t, (d) => Ze(d) ? d.props.__TYPE === "CheckBox" ? (d.props.type && s(d.props.type), we(d, { ...d.props, onChange: f })) : d : null);
  return /* @__PURE__ */ N("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Be(u, ["CheckBox"]) })
  ] });
};
xs.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const Es = "_col_wu095_1", Ts = {
  col: Es
}, Os = lt(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Ts.col} ${e ?? ""}`, ...t }));
Os.propTypes = {
  addClass: o.string
};
const Ss = {
  "c-content": "_c-content_u325r_1"
}, Cs = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("section", { className: `${Ss["c-content"]} animate__animated animate__fadeInDown animate__faster ${t ?? ""}`, ...n, children: e });
Cs.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string
};
const Yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ht(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function kr(e) {
  return "nodeType" in e;
}
function Ve(e) {
  var t, n;
  return e ? Ht(e) ? e : kr(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Mr(e) {
  const {
    Document: t
  } = Ve(e);
  return e instanceof t;
}
function yn(e) {
  return Ht(e) ? !1 : e instanceof Ve(e).HTMLElement;
}
function Rs(e) {
  return e instanceof Ve(e).SVGElement;
}
function Gt(e) {
  return e ? Ht(e) ? e.document : kr(e) ? Mr(e) ? e : yn(e) ? e.ownerDocument : document : document : document;
}
const vt = Yn ? zo : Z;
function Lr(e) {
  const t = G(e);
  return vt(() => {
    t.current = e;
  }), De(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Ps() {
  const e = G(null), t = De((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = De(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function pn(e, t) {
  t === void 0 && (t = [e]);
  const n = G(e);
  return vt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function _n(e, t) {
  const n = G();
  return ue(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function jn(e) {
  const t = Lr(e), n = G(null), r = De(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Er(e) {
  const t = G();
  return Z(() => {
    t.current = e;
  }, [e]), t.current;
}
let cr = {};
function zn(e, t) {
  return ue(() => {
    if (t)
      return t;
    const n = cr[e] == null ? 0 : cr[e] + 1;
    return cr[e] = n, e + "-" + n;
  }, [e, t]);
}
function na(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return r.reduce((i, l) => {
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
const Bt = /* @__PURE__ */ na(1), Fn = /* @__PURE__ */ na(-1);
function $s(e) {
  return "clientX" in e && "clientY" in e;
}
function ra(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ve(e.target);
  return t && e instanceof t;
}
function Ds(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ve(e.target);
  return t && e instanceof t;
}
function Tr(e) {
  if (Ds(e)) {
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
  return $s(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Or = /* @__PURE__ */ Object.freeze({
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
        return [Or.Translate.toString(e), Or.Scale.toString(e)].join(" ");
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
}), bo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function As(e) {
  return e.matches(bo) ? e : e.querySelector(bo);
}
const Ns = {
  display: "none"
};
function Is(e) {
  let {
    id: t,
    value: n
  } = e;
  return Le.createElement("div", {
    id: t,
    style: Ns
  }, n);
}
const ks = {
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
function Ms(e) {
  let {
    id: t,
    announcement: n
  } = e;
  return Le.createElement("div", {
    id: t,
    style: ks,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, n);
}
function Ls() {
  const [e, t] = X("");
  return {
    announce: De((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const oa = /* @__PURE__ */ Ke(null);
function js(e) {
  const t = be(oa);
  Z(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Fs() {
  const [e] = X(() => /* @__PURE__ */ new Set()), t = De((r) => (e.add(r), () => e.delete(r)), [e]);
  return [De((r) => {
    let {
      type: a,
      event: i
    } = r;
    e.forEach((l) => {
      var s;
      return (s = l[a]) == null ? void 0 : s.call(l, i);
    });
  }, [e]), t];
}
const Bs = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Vs = {
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
function qs(e) {
  let {
    announcements: t = Vs,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: a = Bs
  } = e;
  const {
    announce: i,
    announcement: l
  } = Ls(), s = zn("DndLiveRegion"), [c, f] = X(!1);
  if (Z(() => {
    f(!0);
  }, []), js(ue(() => ({
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
        over: m
      } = d;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: m
      }));
    },
    onDragOver(d) {
      let {
        active: v,
        over: m
      } = d;
      i(t.onDragOver({
        active: v,
        over: m
      }));
    },
    onDragEnd(d) {
      let {
        active: v,
        over: m
      } = d;
      i(t.onDragEnd({
        active: v,
        over: m
      }));
    },
    onDragCancel(d) {
      let {
        active: v,
        over: m
      } = d;
      i(t.onDragCancel({
        active: v,
        over: m
      }));
    }
  }), [i, t])), !c)
    return null;
  const u = Le.createElement(Le.Fragment, null, Le.createElement(Is, {
    id: r,
    value: a.draggable
  }), Le.createElement(Ms, {
    id: s,
    announcement: l
  }));
  return n ? Uo(u, n) : u;
}
var Te;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Te || (Te = {}));
function Bn() {
}
function ur(e, t) {
  return ue(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Ys() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ue(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const rt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function zs(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Ws(e, t) {
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
function Us(e, t) {
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
function yo(e) {
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
function aa(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
const Hs = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = yo(t), i = [];
  for (const l of r) {
    const {
      id: s
    } = l, c = n.get(s);
    if (c) {
      const f = yo(c), u = a.reduce((v, m, b) => v + zs(f[b], m), 0), d = Number((u / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: l,
          value: d
        }
      });
    }
  }
  return i.sort(Ws);
};
function Gs(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), l = a - r, s = i - n;
  if (r < a && n < i) {
    const c = t.width * t.height, f = e.width * e.height, u = l * s, d = u / (c + f - u);
    return Number(d.toFixed(4));
  }
  return 0;
}
const Zs = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = [];
  for (const i of r) {
    const {
      id: l
    } = i, s = n.get(l);
    if (s) {
      const c = Gs(s, t);
      c > 0 && a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return a.sort(Us);
};
function Ks(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function ia(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : rt;
}
function Xs(e) {
  return function(n) {
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
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
const Js = /* @__PURE__ */ Xs(1);
function Qs(e) {
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
function el(e, t, n) {
  const r = Qs(t);
  if (!r)
    return e;
  const {
    scaleX: a,
    scaleY: i,
    x: l,
    y: s
  } = r, c = e.left - l - (1 - a) * parseFloat(n), f = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = a ? e.width / a : e.width, d = i ? e.height / i : e.height;
  return {
    width: u,
    height: d,
    top: f,
    right: c + u,
    bottom: f + d,
    left: c
  };
}
const tl = {
  ignoreTransform: !1
};
function wn(e, t) {
  t === void 0 && (t = tl);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      getComputedStyle: f
    } = Ve(e), {
      transform: u,
      transformOrigin: d
    } = f(e);
    u && (n = el(n, u, d));
  }
  const {
    top: r,
    left: a,
    width: i,
    height: l,
    bottom: s,
    right: c
  } = n;
  return {
    top: r,
    left: a,
    width: i,
    height: l,
    bottom: s,
    right: c
  };
}
function _o(e) {
  return wn(e, {
    ignoreTransform: !0
  });
}
function nl(e) {
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
function rl(e, t) {
  return t === void 0 && (t = Ve(e).getComputedStyle(e)), t.position === "fixed";
}
function ol(e, t) {
  t === void 0 && (t = Ve(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((a) => {
    const i = t[a];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function jr(e, t) {
  const n = [];
  function r(a) {
    if (t != null && n.length >= t || !a)
      return n;
    if (Mr(a) && a.scrollingElement != null && !n.includes(a.scrollingElement))
      return n.push(a.scrollingElement), n;
    if (!yn(a) || Rs(a) || n.includes(a))
      return n;
    const {
      getComputedStyle: i
    } = Ve(a), l = i(a);
    return a !== e && ol(a, l) && n.push(a), rl(a, l) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function sa(e) {
  const [t] = jr(e, 1);
  return t ?? null;
}
function dr(e) {
  return !Yn || !e ? null : Ht(e) ? e : kr(e) ? Mr(e) || e === Gt(e).scrollingElement ? window : yn(e) ? e : null : null;
}
function la(e) {
  return Ht(e) ? e.scrollX : e.scrollLeft;
}
function ca(e) {
  return Ht(e) ? e.scrollY : e.scrollTop;
}
function Sr(e) {
  return {
    x: la(e),
    y: ca(e)
  };
}
var Ce;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ce || (Ce = {}));
function ua(e) {
  return !Yn || !e ? !1 : e === document.scrollingElement;
}
function da(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ua(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, a = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, l = e.scrollTop >= r.y, s = e.scrollLeft >= r.x;
  return {
    isTop: a,
    isLeft: i,
    isBottom: l,
    isRight: s,
    maxScroll: r,
    minScroll: t
  };
}
const al = {
  x: 0.2,
  y: 0.2
};
function il(e, t, n, r, a) {
  let {
    top: i,
    left: l,
    right: s,
    bottom: c
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = al);
  const {
    isTop: f,
    isBottom: u,
    isLeft: d,
    isRight: v
  } = da(e), m = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + g.height ? (m.y = Ce.Backward, b.y = r * Math.abs((t.top + g.height - i) / g.height)) : !u && c >= t.bottom - g.height && (m.y = Ce.Forward, b.y = r * Math.abs((t.bottom - g.height - c) / g.height)), !v && s >= t.right - g.width ? (m.x = Ce.Forward, b.x = r * Math.abs((t.right - g.width - s) / g.width)) : !d && l <= t.left + g.width && (m.x = Ce.Backward, b.x = r * Math.abs((t.left + g.width - l) / g.width)), {
    direction: m,
    speed: b
  };
}
function sl(e) {
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
function fa(e) {
  return e.reduce((t, n) => Bt(t, Sr(n)), rt);
}
function ll(e) {
  return e.reduce((t, n) => t + la(n), 0);
}
function cl(e) {
  return e.reduce((t, n) => t + ca(n), 0);
}
function ul(e, t) {
  if (t === void 0 && (t = wn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: a,
    right: i
  } = t(e);
  sa(e) && (a <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const dl = [["x", ["left", "right"], ll], ["y", ["top", "bottom"], cl]];
class Fr {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = jr(n), a = fa(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, l, s] of dl)
      for (const c of l)
        Object.defineProperty(this, c, {
          get: () => {
            const f = s(r), u = a[i] - f;
            return this.rect[c] + u;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class an {
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
function fl(e) {
  const {
    EventTarget: t
  } = Ve(e);
  return e instanceof t ? e : Gt(e);
}
function fr(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ue;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ue || (Ue = {}));
function wo(e) {
  e.preventDefault();
}
function pl(e) {
  e.stopPropagation();
}
var ae;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(ae || (ae = {}));
const pa = {
  start: [ae.Space, ae.Enter],
  cancel: [ae.Esc],
  end: [ae.Space, ae.Enter]
}, vl = (e, t) => {
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
class Br {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new an(Gt(n)), this.windowListeners = new an(Ve(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ue.Resize, this.handleCancel), this.windowListeners.add(Ue.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ue.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && ul(r), n(rt);
  }
  handleKeyDown(t) {
    if (ra(t)) {
      const {
        active: n,
        context: r,
        options: a
      } = this.props, {
        keyboardCodes: i = pa,
        coordinateGetter: l = vl,
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
      } = r.current, u = f ? {
        x: f.left,
        y: f.top
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const d = l(t, {
        active: n,
        context: r.current,
        currentCoordinates: u
      });
      if (d) {
        const v = Fn(d, u), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = r.current;
        for (const g of b) {
          const _ = t.code, {
            isTop: w,
            isRight: $,
            isLeft: R,
            isBottom: P,
            maxScroll: y,
            minScroll: O
          } = da(g), x = sl(g), S = {
            x: Math.min(_ === ae.Right ? x.right - x.width / 2 : x.right, Math.max(_ === ae.Right ? x.left : x.left + x.width / 2, d.x)),
            y: Math.min(_ === ae.Down ? x.bottom - x.height / 2 : x.bottom, Math.max(_ === ae.Down ? x.top : x.top + x.height / 2, d.y))
          }, D = _ === ae.Right && !$ || _ === ae.Left && !R, j = _ === ae.Down && !P || _ === ae.Up && !w;
          if (D && S.x !== d.x) {
            const I = g.scrollLeft + v.x, U = _ === ae.Right && I <= y.x || _ === ae.Left && I >= O.x;
            if (U && !v.y) {
              g.scrollTo({
                left: I,
                behavior: s
              });
              return;
            }
            U ? m.x = g.scrollLeft - I : m.x = _ === ae.Right ? g.scrollLeft - y.x : g.scrollLeft - O.x, m.x && g.scrollBy({
              left: -m.x,
              behavior: s
            });
            break;
          } else if (j && S.y !== d.y) {
            const I = g.scrollTop + v.y, U = _ === ae.Down && I <= y.y || _ === ae.Up && I >= O.y;
            if (U && !v.x) {
              g.scrollTo({
                top: I,
                behavior: s
              });
              return;
            }
            U ? m.y = g.scrollTop - I : m.y = _ === ae.Down ? g.scrollTop - y.y : g.scrollTop - O.y, m.y && g.scrollBy({
              top: -m.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Bt(Fn(d, this.referenceCoordinates), m));
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
Br.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = pa,
      onActivation: a
    } = t, {
      active: i
    } = n;
    const {
      code: l
    } = e.nativeEvent;
    if (r.start.includes(l)) {
      const s = i.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), a == null || a({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function xo(e) {
  return Boolean(e && "distance" in e);
}
function Eo(e) {
  return Boolean(e && "delay" in e);
}
class Vr {
  constructor(t, n, r) {
    var a;
    r === void 0 && (r = fl(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: l
    } = i;
    this.props = t, this.events = n, this.document = Gt(l), this.documentListeners = new an(this.document), this.listeners = new an(r), this.windowListeners = new an(Ve(l)), this.initialCoordinates = (a = Tr(i)) != null ? a : rt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(Ue.Resize, this.handleCancel), this.windowListeners.add(Ue.DragStart, wo), this.windowListeners.add(Ue.VisibilityChange, this.handleCancel), this.windowListeners.add(Ue.ContextMenu, wo), this.documentListeners.add(Ue.Keydown, this.handleKeydown), n) {
      if (xo(n))
        return;
      if (Eo(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(Ue.Click, pl, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ue.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
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
    const c = (n = Tr(t)) != null ? n : rt, f = Fn(a, c);
    if (!r && s) {
      if (Eo(s))
        return fr(f, s.tolerance) ? this.handleCancel() : void 0;
      if (xo(s))
        return s.tolerance != null && fr(f, s.tolerance) ? this.handleCancel() : fr(f, s.distance) ? this.handleStart() : void 0;
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
const hl = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class va extends Vr {
  constructor(t) {
    const {
      event: n
    } = t, r = Gt(n.target);
    super(t, hl, r);
  }
}
va.activators = [{
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
const ml = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Cr;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Cr || (Cr = {}));
class ha extends Vr {
  constructor(t) {
    super(t, ml, Gt(t.event.target));
  }
}
ha.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Cr.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const pr = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class ma extends Vr {
  constructor(t) {
    super(t, pr);
  }
  static setup() {
    return window.addEventListener(pr.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(pr.move.name, t);
    };
    function t() {
    }
  }
}
ma.activators = [{
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
var sn;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(sn || (sn = {}));
var Vn;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Vn || (Vn = {}));
function gl(e) {
  let {
    acceleration: t,
    activator: n = sn.Pointer,
    canScroll: r,
    draggingRect: a,
    enabled: i,
    interval: l = 5,
    order: s = Vn.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: f,
    scrollableAncestorRects: u,
    delta: d,
    threshold: v
  } = e;
  const m = yl({
    delta: d,
    disabled: !i
  }), [b, g] = Ps(), _ = G({
    x: 0,
    y: 0
  }), w = G({
    x: 0,
    y: 0
  }), $ = ue(() => {
    switch (n) {
      case sn.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case sn.DraggableRect:
        return a;
    }
  }, [n, a, c]), R = G(null), P = De(() => {
    const O = R.current;
    if (!O)
      return;
    const x = _.current.x * w.current.x, S = _.current.y * w.current.y;
    O.scrollBy(x, S);
  }, []), y = ue(() => s === Vn.TreeOrder ? [...f].reverse() : f, [s, f]);
  Z(
    () => {
      if (!i || !f.length || !$) {
        g();
        return;
      }
      for (const O of y) {
        if ((r == null ? void 0 : r(O)) === !1)
          continue;
        const x = f.indexOf(O), S = u[x];
        if (!S)
          continue;
        const {
          direction: D,
          speed: j
        } = il(O, S, $, t, v);
        for (const I of ["x", "y"])
          m[I][D[I]] || (j[I] = 0, D[I] = 0);
        if (j.x > 0 || j.y > 0) {
          g(), R.current = O, b(P, l), _.current = j, w.current = D;
          return;
        }
      }
      _.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, g();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      P,
      r,
      g,
      i,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify($),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      b,
      f,
      y,
      u,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const bl = {
  x: {
    [Ce.Backward]: !1,
    [Ce.Forward]: !1
  },
  y: {
    [Ce.Backward]: !1,
    [Ce.Forward]: !1
  }
};
function yl(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Er(t);
  return _n((a) => {
    if (n || !r || !a)
      return bl;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Ce.Backward]: a.x[Ce.Backward] || i.x === -1,
        [Ce.Forward]: a.x[Ce.Forward] || i.x === 1
      },
      y: {
        [Ce.Backward]: a.y[Ce.Backward] || i.y === -1,
        [Ce.Forward]: a.y[Ce.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function _l(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return _n((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function wl(e, t) {
  return ue(() => e.reduce((n, r) => {
    const {
      sensor: a
    } = r, i = a.activators.map((l) => ({
      eventName: l.eventName,
      handler: t(l.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var vn;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(vn || (vn = {}));
var Rr;
(function(e) {
  e.Optimized = "optimized";
})(Rr || (Rr = {}));
const To = /* @__PURE__ */ new Map();
function xl(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, l] = X(null), {
    frequency: s,
    measure: c,
    strategy: f
  } = a, u = G(e), d = _(), v = pn(d), m = De(function(w) {
    w === void 0 && (w = []), !v.current && l(($) => $ === null ? w : $.concat(w.filter((R) => !$.includes(R))));
  }, [v]), b = G(null), g = _n((w) => {
    if (d && !n)
      return To;
    if (!w || w === To || u.current !== e || i != null) {
      const $ = /* @__PURE__ */ new Map();
      for (let R of e) {
        if (!R)
          continue;
        if (i && i.length > 0 && !i.includes(R.id) && R.rect.current) {
          $.set(R.id, R.rect.current);
          continue;
        }
        const P = R.node.current, y = P ? new Fr(c(P), P) : null;
        R.rect.current = y, y && $.set(R.id, y);
      }
      return $;
    }
    return w;
  }, [e, i, n, d, c]);
  return Z(() => {
    u.current = e;
  }, [e]), Z(
    () => {
      d || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), Z(
    () => {
      i && i.length > 0 && l(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), Z(
    () => {
      d || typeof s != "number" || b.current !== null || (b.current = setTimeout(() => {
        m(), b.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, d, m, ...r]
  ), {
    droppableRects: g,
    measureDroppableContainers: m,
    measuringScheduled: i != null
  };
  function _() {
    switch (f) {
      case vn.Always:
        return !1;
      case vn.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function ga(e, t) {
  return _n((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function El(e, t) {
  return ga(e, t);
}
function Tl(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Lr(t), a = ue(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return Z(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Wn(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Lr(t), a = ue(
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
  return Z(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Ol(e) {
  return new Fr(wn(e), e);
}
function Oo(e, t, n) {
  t === void 0 && (t = Ol);
  const [r, a] = Ar(s, null), i = Tl({
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
  }), l = Wn({
    callback: a
  });
  return vt(() => {
    a(), e ? (l == null || l.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (l == null || l.disconnect(), i == null || i.disconnect());
  }, [e]), r;
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
function Sl(e) {
  const t = ga(e);
  return ia(e, t);
}
const So = [];
function Cl(e) {
  const t = G(e), n = _n((r) => e ? r && r !== So && e && t.current && e.parentNode === t.current.parentNode ? r : jr(e) : So, [e]);
  return Z(() => {
    t.current = e;
  }, [e]), n;
}
function Rl(e) {
  const [t, n] = X(null), r = G(e), a = De((i) => {
    const l = dr(i.target);
    l && n((s) => s ? (s.set(l, Sr(l)), new Map(s)) : null);
  }, []);
  return Z(() => {
    const i = r.current;
    if (e !== i) {
      l(i);
      const s = e.map((c) => {
        const f = dr(c);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, Sr(f)]) : null;
      }).filter((c) => c != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      l(e), l(i);
    };
    function l(s) {
      s.forEach((c) => {
        const f = dr(c);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), ue(() => e.length ? t ? Array.from(t.values()).reduce((i, l) => Bt(i, l), rt) : fa(e) : rt, [e, t]);
}
function Co(e, t) {
  t === void 0 && (t = []);
  const n = G(null);
  return Z(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), Z(() => {
    const r = e !== rt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Fn(e, n.current) : rt;
}
function Pl(e) {
  Z(
    () => {
      if (!Yn)
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
function $l(e, t) {
  return ue(() => e.reduce((n, r) => {
    let {
      eventName: a,
      handler: i
    } = r;
    return n[a] = (l) => {
      i(l, t);
    }, n;
  }, {}), [e, t]);
}
function ba(e) {
  return ue(() => e ? nl(e) : null, [e]);
}
const vr = [];
function Dl(e, t) {
  t === void 0 && (t = wn);
  const [n] = e, r = ba(n ? Ve(n) : null), [a, i] = Ar(s, vr), l = Wn({
    callback: i
  });
  return e.length > 0 && a === vr && i(), vt(() => {
    e.length ? e.forEach((c) => l == null ? void 0 : l.observe(c)) : (l == null || l.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((c) => ua(c) ? r : new Fr(t(c), c)) : vr;
  }
}
function Al(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return yn(t) ? t : e;
}
function Nl(e) {
  let {
    measure: t
  } = e;
  const [n, r] = X(null), a = De((f) => {
    for (const {
      target: u
    } of f)
      if (yn(u)) {
        r((d) => {
          const v = t(u);
          return d ? {
            ...d,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = Wn({
    callback: a
  }), l = De((f) => {
    const u = Al(f);
    i == null || i.disconnect(), u && (i == null || i.observe(u)), r(u ? t(u) : null);
  }, [t, i]), [s, c] = jn(l);
  return ue(() => ({
    nodeRef: s,
    rect: n,
    setRef: c
  }), [n, s, c]);
}
const Il = [{
  sensor: va,
  options: {}
}, {
  sensor: Br,
  options: {}
}], kl = {
  current: {}
}, Nn = {
  draggable: {
    measure: _o
  },
  droppable: {
    measure: _o,
    strategy: vn.WhileDragging,
    frequency: Rr.Optimized
  },
  dragOverlay: {
    measure: wn
  }
};
class ln extends Map {
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
const Ml = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new ln(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Bn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Nn,
  measureDroppableContainers: Bn,
  windowRect: null,
  measuringScheduled: !1
}, Ll = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Bn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Bn
}, Un = /* @__PURE__ */ Ke(Ll), jl = /* @__PURE__ */ Ke(Ml);
function Fl() {
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
      containers: new ln()
    }
  };
}
function Bl(e, t) {
  switch (t.type) {
    case Te.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Te.DragMove:
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
    case Te.DragEnd:
    case Te.DragCancel:
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
    case Te.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, a = new ln(e.droppable.containers);
      return a.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case Te.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: a
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const l = new ln(e.droppable.containers);
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
    case Te.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, a = e.droppable.containers.get(n);
      if (!a || r !== a.key)
        return e;
      const i = new ln(e.droppable.containers);
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
function Vl(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: a
  } = be(Un), i = Er(r), l = Er(n == null ? void 0 : n.id);
  return Z(() => {
    if (!t && !r && i && l != null) {
      if (!ra(i) || document.activeElement === i.target)
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
          const d = As(u);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [r, t, a, l, i]), null;
}
function ql(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...r
  }), n) : n;
}
function Yl(e) {
  return ue(
    () => ({
      draggable: {
        ...Nn.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Nn.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Nn.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function zl(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: a = !0
  } = e;
  const i = G(!1), {
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
    if (i.current || !r)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const u = n(f), d = ia(u, r);
    if (l || (d.x = 0), s || (d.y = 0), i.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const v = sa(f);
      v && v.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [t, l, s, r, n]);
}
const ya = /* @__PURE__ */ Ke({
  ...rt,
  scaleX: 1,
  scaleY: 1
});
var bt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(bt || (bt = {}));
const Wl = /* @__PURE__ */ Wo(function(t) {
  var n, r, a, i;
  let {
    id: l,
    accessibility: s,
    autoScroll: c = !0,
    children: f,
    sensors: u = Il,
    collisionDetection: d = Zs,
    measuring: v,
    modifiers: m,
    ...b
  } = t;
  const g = Ar(Bl, void 0, Fl), [_, w] = g, [$, R] = Fs(), [P, y] = X(bt.Uninitialized), O = P === bt.Initialized, {
    draggable: {
      active: x,
      nodes: S,
      translate: D
    },
    droppable: {
      containers: j
    }
  } = _, I = x ? S.get(x) : null, U = G({
    initial: null,
    translated: null
  }), q = ue(() => {
    var ve;
    return x != null ? {
      id: x,
      // It's possible for the active node to unmount while dragging
      data: (ve = I == null ? void 0 : I.data) != null ? ve : kl,
      rect: U
    } : null;
  }, [x, I]), te = G(null), [ce, re] = X(null), [ee, Ee] = X(null), he = pn(b, Object.values(b)), T = zn("DndDescribedBy", l), k = ue(() => j.getEnabled(), [j]), B = Yl(v), {
    droppableRects: V,
    measureDroppableContainers: F,
    measuringScheduled: H
  } = xl(k, {
    dragging: O,
    dependencies: [D.x, D.y],
    config: B.droppable
  }), L = _l(S, x), z = ue(() => ee ? Tr(ee) : null, [ee]), W = Cn(), J = El(L, B.draggable.measure);
  zl({
    activeNode: x ? S.get(x) : null,
    config: W.layoutShiftCompensation,
    initialRect: J,
    measure: B.draggable.measure
  });
  const Y = Oo(L, B.draggable.measure, J), A = Oo(L ? L.parentElement : null), E = G({
    activatorEvent: null,
    active: null,
    activeNode: L,
    collisionRect: null,
    collisions: null,
    droppableRects: V,
    draggableNodes: S,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: j,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Q = j.getNodeFor((n = E.current.over) == null ? void 0 : n.id), me = Nl({
    measure: B.dragOverlay.measure
  }), Oe = (r = me.nodeRef.current) != null ? r : L, $e = O ? (a = me.rect) != null ? a : Y : null, at = Boolean(me.nodeRef.current && me.rect), ut = Sl(at ? null : Y), it = ba(Oe ? Ve(Oe) : null), Se = Cl(O ? Q ?? L : null), Je = Dl(Se), Qe = ql(m, {
    transform: {
      x: D.x - ut.x,
      y: D.y - ut.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ee,
    active: q,
    activeNodeRect: Y,
    containerNodeRect: A,
    draggingNodeRect: $e,
    over: E.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Se,
    scrollableAncestorRects: Je,
    windowRect: it
  }), wt = z ? Bt(z, D) : null, ht = Rl(Se), xt = Co(ht), Et = Co(ht, [Y]), Ae = Bt(Qe, xt), et = $e ? Js($e, Qe) : null, mt = q && et ? d({
    active: q,
    collisionRect: et,
    droppableRects: V,
    droppableContainers: k,
    pointerCoordinates: wt
  }) : null, Kt = aa(mt, "id"), [Ye, Tn] = X(null), Qn = at ? Qe : Bt(Qe, Et), er = Ks(Qn, (i = Ye == null ? void 0 : Ye.rect) != null ? i : null, Y), On = De(
    (ve, Re) => {
      let {
        sensor: Pe,
        options: tt
      } = Re;
      if (te.current == null)
        return;
      const Ie = S.get(te.current);
      if (!Ie)
        return;
      const ke = ve.nativeEvent, ze = new Pe({
        active: te.current,
        activeNode: Ie,
        event: ke,
        options: tt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: E,
        onStart(Me) {
          const Tt = te.current;
          if (Tt == null)
            return;
          const Ot = S.get(Tt);
          if (!Ot)
            return;
          const {
            onDragStart: St
          } = he.current, It = {
            active: {
              id: Tt,
              data: Ot.data,
              rect: U
            }
          };
          Jt(() => {
            St == null || St(It), y(bt.Initializing), w({
              type: Te.DragStart,
              initialCoordinates: Me,
              active: Tt
            }), $({
              type: "onDragStart",
              event: It
            });
          });
        },
        onMove(Me) {
          w({
            type: Te.DragMove,
            coordinates: Me
          });
        },
        onEnd: dt(Te.DragEnd),
        onCancel: dt(Te.DragCancel)
      });
      Jt(() => {
        re(ze), Ee(ve.nativeEvent);
      });
      function dt(Me) {
        return async function() {
          const {
            active: Ot,
            collisions: St,
            over: It,
            scrollAdjustedTranslate: Rn
          } = E.current;
          let Ct = null;
          if (Ot && Rn) {
            const {
              cancelDrop: Rt
            } = he.current;
            Ct = {
              activatorEvent: ke,
              active: Ot,
              collisions: St,
              delta: Rn,
              over: It
            }, Me === Te.DragEnd && typeof Rt == "function" && await Promise.resolve(Rt(Ct)) && (Me = Te.DragCancel);
          }
          te.current = null, Jt(() => {
            w({
              type: Me
            }), y(bt.Uninitialized), Tn(null), re(null), Ee(null);
            const Rt = Me === Te.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ct) {
              const h = he.current[Rt];
              h == null || h(Ct), $({
                type: Rt,
                event: Ct
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S]
  ), tr = De((ve, Re) => (Pe, tt) => {
    const Ie = Pe.nativeEvent, ke = S.get(tt);
    if (
      // Another sensor is already instantiating
      te.current !== null || // No active draggable
      !ke || // Event has already been captured
      Ie.dndKit || Ie.defaultPrevented
    )
      return;
    const ze = {
      active: ke
    };
    ve(Pe, Re.options, ze) === !0 && (Ie.dndKit = {
      capturedBy: Re.sensor
    }, te.current = tt, On(Pe, Re));
  }, [S, On]), Sn = wl(u, tr);
  Pl(u), vt(() => {
    Y && P === bt.Initializing && y(bt.Initialized);
  }, [Y, P]), Z(
    () => {
      const {
        onDragMove: ve
      } = he.current, {
        active: Re,
        activatorEvent: Pe,
        collisions: tt,
        over: Ie
      } = E.current;
      if (!Re || !Pe)
        return;
      const ke = {
        active: Re,
        activatorEvent: Pe,
        collisions: tt,
        delta: {
          x: Ae.x,
          y: Ae.y
        },
        over: Ie
      };
      Jt(() => {
        ve == null || ve(ke), $({
          type: "onDragMove",
          event: ke
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ae.x, Ae.y]
  ), Z(
    () => {
      const {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        droppableContainers: tt,
        scrollAdjustedTranslate: Ie
      } = E.current;
      if (!ve || te.current == null || !Re || !Ie)
        return;
      const {
        onDragOver: ke
      } = he.current, ze = tt.get(Kt), dt = ze && ze.rect.current ? {
        id: ze.id,
        rect: ze.rect.current,
        data: ze.data,
        disabled: ze.disabled
      } : null, Me = {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        delta: {
          x: Ie.x,
          y: Ie.y
        },
        over: dt
      };
      Jt(() => {
        Tn(dt), ke == null || ke(Me), $({
          type: "onDragOver",
          event: Me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Kt]
  ), vt(() => {
    E.current = {
      activatorEvent: ee,
      active: q,
      activeNode: L,
      collisionRect: et,
      collisions: mt,
      droppableRects: V,
      draggableNodes: S,
      draggingNode: Oe,
      draggingNodeRect: $e,
      droppableContainers: j,
      over: Ye,
      scrollableAncestors: Se,
      scrollAdjustedTranslate: Ae
    }, U.current = {
      initial: $e,
      translated: et
    };
  }, [q, L, mt, et, S, Oe, $e, V, j, Ye, Se, Ae]), gl({
    ...W,
    delta: D,
    draggingRect: et,
    pointerCoordinates: wt,
    scrollableAncestors: Se,
    scrollableAncestorRects: Je
  });
  const nr = ue(() => ({
    active: q,
    activeNode: L,
    activeNodeRect: Y,
    activatorEvent: ee,
    collisions: mt,
    containerNodeRect: A,
    dragOverlay: me,
    draggableNodes: S,
    droppableContainers: j,
    droppableRects: V,
    over: Ye,
    measureDroppableContainers: F,
    scrollableAncestors: Se,
    scrollableAncestorRects: Je,
    measuringConfiguration: B,
    measuringScheduled: H,
    windowRect: it
  }), [q, L, Y, ee, mt, A, me, S, j, V, Ye, F, Se, Je, B, H, it]), Xt = ue(() => ({
    activatorEvent: ee,
    activators: Sn,
    active: q,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: T
    },
    dispatch: w,
    draggableNodes: S,
    over: Ye,
    measureDroppableContainers: F
  }), [ee, Sn, q, Y, w, T, S, Ye, F]);
  return Le.createElement(oa.Provider, {
    value: R
  }, Le.createElement(Un.Provider, {
    value: Xt
  }, Le.createElement(jl.Provider, {
    value: nr
  }, Le.createElement(ya.Provider, {
    value: er
  }, f)), Le.createElement(Vl, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), Le.createElement(qs, {
    ...s,
    hiddenTextDescribedById: T
  }));
  function Cn() {
    const ve = (ce == null ? void 0 : ce.autoScrollEnabled) === !1, Re = typeof c == "object" ? c.enabled === !1 : c === !1, Pe = O && !ve && !Re;
    return typeof c == "object" ? {
      ...c,
      enabled: Pe
    } : {
      enabled: Pe
    };
  }
}), Ul = /* @__PURE__ */ Ke(null), Ro = "button", Hl = "Droppable";
function Gl(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = zn(Hl), {
    activators: l,
    activatorEvent: s,
    active: c,
    activeNodeRect: f,
    ariaDescribedById: u,
    draggableNodes: d,
    over: v
  } = be(Un), {
    role: m = Ro,
    roleDescription: b = "draggable",
    tabIndex: g = 0
  } = a ?? {}, _ = (c == null ? void 0 : c.id) === t, w = be(_ ? ya : Ul), [$, R] = jn(), [P, y] = jn(), O = $l(l, t), x = pn(n);
  vt(
    () => (d.set(t, {
      id: t,
      key: i,
      node: $,
      activatorNode: P,
      data: x
    }), () => {
      const D = d.get(t);
      D && D.key === i && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const S = ue(() => ({
    role: m,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": _ && m === Ro ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": u.draggable
  }), [r, m, g, _, b, u.draggable]);
  return {
    active: c,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: S,
    isDragging: _,
    listeners: r ? void 0 : O,
    node: $,
    over: v,
    setNodeRef: R,
    setActivatorNodeRef: y,
    transform: w
  };
}
const Zl = "Droppable", Kl = {
  timeout: 25
};
function _a(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: a
  } = e;
  const i = zn(Zl), {
    active: l,
    dispatch: s,
    over: c,
    measureDroppableContainers: f
  } = be(Un), u = G({
    disabled: n
  }), d = G(!1), v = G(null), m = G(null), {
    disabled: b,
    updateMeasurementsFor: g,
    timeout: _
  } = {
    ...Kl,
    ...a
  }, w = pn(g ?? r), $ = De(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        f(Array.isArray(w.current) ? w.current : [w.current]), m.current = null;
      }, _);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [_]
  ), R = Wn({
    callback: $,
    disabled: b || !l
  }), P = De((S, D) => {
    R && (D && (R.unobserve(D), d.current = !1), S && R.observe(S));
  }, [R]), [y, O] = jn(P), x = pn(t);
  return Z(() => {
    !R || !y.current || (R.disconnect(), d.current = !1, R.observe(y.current));
  }, [y, R]), vt(
    () => (s({
      type: Te.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: y,
        rect: v,
        data: x
      }
    }), () => s({
      type: Te.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), Z(() => {
    n !== u.current.disabled && (s({
      type: Te.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), u.current.disabled = n);
  }, [r, i, n, s]), {
    active: l,
    rect: v,
    isOver: (c == null ? void 0 : c.id) === r,
    node: y,
    over: c,
    setNodeRef: O
  };
}
const Xl = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, Jl = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, Ql = [ae.Down, ae.Right, ae.Up, ae.Left], ec = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (Ql.includes(e.code)) {
    e.preventDefault();
    const l = 20;
    if (!t || !a)
      return;
    const s = [];
    r.getEnabled().forEach((u) => {
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
    const c = Hs({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = aa(c, "id");
    if (f != null) {
      const u = r.get(f), d = u == null ? void 0 : u.node.current, v = u == null ? void 0 : u.rect.current;
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
}, wa = Ke(), on = (e, t) => xe.map(e, (n) => {
  var r;
  if (Ze(n) && n.props) {
    if (((r = n == null ? void 0 : n.props) == null ? void 0 : r.__TYPE) === t)
      return n;
    if (n.props.children)
      return on(n.props.children, t);
  }
}), tc = {
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
}, xa = ({
  children: e,
  multipleDrags: t,
  onValidate: n,
  validate: r,
  reboot: a,
  propValidate: i,
  modifiers: l,
  announcements: s,
  onDragMove: c,
  defaultState: f,
  id: u
}) => {
  const [d, v] = X([]), [m, b] = X(null), [g, _] = X(() => f || w());
  function w() {
    return [...on(e, "droppable"), ...on(e, "general-draggable")].reduce(
      (S, D) => ({
        ...S,
        [D.props.id]: D.props.children ? [...on(D.props.children, "draggable").map((j) => j.props.id)] : []
      }),
      {}
    );
  }
  const $ = Object.freeze({
    restrictToVerticalAxis: Jl,
    restrictToHorizontalAxis: Xl
  }), R = Ys(
    ur(ha),
    ur(ma),
    ur(Br, {
      coordinateGetter: ec
    })
  ), P = (S, D) => {
    if (Object.keys(g).pop() === S.id)
      return;
    let I = [...d.filter((U) => U !== D), S.data.current.validate.includes(D) ? D : ""].filter((U) => !!U);
    if (!t) {
      const U = g[S.id][0];
      I = U ? I.filter((q) => q !== U) : I;
    }
    n && n({ validate: [...I], active: !0, state: { key: u, items: g } }), v(I);
  }, y = (S) => S in g ? S : Object.keys(g).find((D) => g[D].includes(S)), O = ({ active: S, over: D }) => {
    if (!D)
      return;
    b(null);
    const j = Object.keys(g).pop(), I = y(D.id), U = y(S.id);
    U !== I && (j !== D.id && P(D, S.id), _((q) => {
      const te = q[U].filter((ee) => ee !== S.id), ce = [...q[I]];
      return t ? {
        ...q,
        [U]: te,
        [I]: [...ce, S.id]
      } : {
        ...{
          ...q,
          [U]: te,
          [I]: I === j ? [...ce, S.id] : [S.id]
        },
        ...I !== j && q[I].length > 0 && { [j]: [...q[j].filter((ee) => ee !== q[U][0]), ...q[I]] }
      };
    }));
  }, x = (S) => xe.map(S, (D) => {
    if (!D.props)
      return D;
    if (D.props.__TYPE !== "draggable")
      return D.props.id in g && g[D.props.id].length > 0 ? we(D, { ...D.props }, [
        ...g[D.props.id].map((j) => on(e, "draggable").filter((I) => I.props.id === j)).flat()
      ]) : D.props.children ? we(D, { ...D.props, children: x(D.props.children) }) : D;
  });
  return Z(() => {
    a && (_(() => w()), n && n({ validate: [], active: !1 }));
  }, [a]), /* @__PURE__ */ p(wa.Provider, { value: { listId: d, propValidate: i, validate: r, isDragging: m }, children: /* @__PURE__ */ p(
    Wl,
    {
      sensors: R,
      accessibility: { announcements: s },
      onDragStart: ({ active: S }) => b(S.id),
      onDragEnd: O,
      ...!!c && { onDragMove: c },
      onDragCancel: () => b(null),
      ...l && { modifiers: [$[l]] },
      children: x(e)
    }
  ) });
};
xa.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: tc
};
xa.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element), o.node, o.arrayOf(o.node)]),
  multipleDrags: o.bool,
  onValidate: o.func,
  reboot: o.bool,
  validate: o.bool.isRequired,
  propValidate: o.string.isRequired,
  modifiers: o.oneOf(["restrictToVerticalAxis", "restrictToHorizontalAxis"]),
  announcements: o.object.isRequired,
  onDragMove: o.func,
  defaultState: o.object,
  id: o.string
};
const nc = "_pop_1elvh_1", Vt = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: nc
}, Ea = ({ children: e, id: t, addClass: n, dragging: r, label: a, attribute: i, disabledDefaultAttributes: l, element: s, __TYPE: c, ...f }) => {
  const u = s || "div", { listId: d, propValidate: v, validate: m, isDragging: b } = be(wa), { attributes: g, listeners: _, setNodeRef: w, transform: $ } = Gl({
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
      ref: w,
      "data-type": c,
      className: `${Vt["c-draggable"]} ${b === t ? `${r} ${Vt["is-draggable--active-animation"]}` : ""} ${n ?? ""}`,
      style: { transform: Or.Translate.toString($) },
      ...m && { [v]: !!d.includes(t) },
      ...!l && { ...g },
      ..._,
      ...f,
      children: e
    }
  );
};
Ea.defaultProps = {
  __TYPE: "draggable",
  dragging: Vt["c-draggable--active"],
  disabledDefaultAttributes: !1
};
Ea.propTypes = {
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
  __TYPE: pe("draggable")
};
const Ta = ({ children: e, id: t, validate: n, addClass: r, over: a, label: i, element: l, __TYPE: s, ...c }) => {
  const f = l || "div", { isOver: u, setNodeRef: d } = _a({
    id: t,
    data: {
      validate: n,
      label: i,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(f, { ref: d, "data-type": s, className: `${Vt["c-droppable"]} ${u && a && a} ${r ?? ""}`, ...c, children: e });
};
Ta.defaultProps = {
  __TYPE: "droppable",
  over: Vt["c-droppable--active"]
};
Ta.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  id: o.string.isRequired,
  validate: o.array.isRequired,
  addClass: o.string,
  over: o.string,
  label: o.string.isRequired,
  element: o.string,
  __TYPE: pe("droppable")
};
const Oa = ({ children: e, addClass: t, over: n, id: r, label: a, element: i, __TYPE: l, ...s }) => {
  const c = i || "div", { isOver: f, setNodeRef: u } = _a({
    id: r,
    data: {
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(c, { id: r, ref: u, "data-type": l, className: `${Vt["c-droppable"]}  ${f && n && n} ${t ?? ""}`, ...s, children: e });
};
Oa.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  over: o.string,
  id: o.string.isRequired,
  label: o.string.isRequired,
  element: o.string,
  __TYPE: pe("general-draggable")
};
Oa.defaultProps = {
  __TYPE: "general-draggable",
  id: ct("unique-id-general-"),
  label: "contendor inicial"
};
const td = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ N("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ N("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" })
  ] }) }),
  /* @__PURE__ */ p("filter", { id: "hc_extension_highcontrast", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ N("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "3.0" }),
    /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "3.0" }),
    /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "3.0" })
  ] }) }),
  /* @__PURE__ */ p("filter", { id: "hc_extension_highcontrast_back", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ N("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
    /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
    /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
  ] }) }),
  /* @__PURE__ */ N("filter", { id: "hc_extension_grayscale", x: "0", y: "0", width: "99999", height: "99999", children: [
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
  ] }),
  /* @__PURE__ */ p("filter", { id: "hc_extension_grayscale_back", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ N("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
    /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
    /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
  ] }) }),
  /* @__PURE__ */ p("filter", { id: "hc_extension_invert", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ N("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
    /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
    /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
  ] }) }),
  /* @__PURE__ */ N("filter", { id: "hc_extension_invert_back", x: "0", y: "0", width: "99999", height: "99999", children: [
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
  ] }),
  /* @__PURE__ */ N("filter", { id: "hc_extension_yellow_on_black", x: "0", y: "0", width: "99999", height: "99999", children: [
    /* @__PURE__ */ N("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
      /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
      /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
    ] }),
    /* @__PURE__ */ p("feColorMatrix", { type: "matrix", values: "0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0" })
  ] }),
  /* @__PURE__ */ N("filter", { id: "hc_extension_yellow_on_black_back", x: "0", y: "0", width: "99999", height: "99999", children: [
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
  ] }),
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
        /* @__PURE__ */ p("feBlend", { mode: "normal", in: "componentTransfer", in2: "SourceGraphic", result: "blend" })
      ]
    }
  ),
  /* @__PURE__ */ N("filter", { id: "hc_extension_red_on_white_back", x: "0", y: "0", width: "99999", height: "99999", children: [
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
  ] }),
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
        /* @__PURE__ */ p("feBlend", { mode: "normal", in: "componentTransfer", in2: "SourceGraphic", result: "blend" })
      ]
    }
  ),
  /* @__PURE__ */ N("filter", { id: "hc_extension_green_on_blue_back", x: "0", y: "0", width: "99999", height: "99999", children: [
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
  ] }),
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
        /* @__PURE__ */ p("feBlend", { mode: "normal", in: "componentTransfer", in2: "SourceGraphic", result: "blend" })
      ]
    }
  ),
  /* @__PURE__ */ N("filter", { id: "hc_extension_yellow_on_blue_back", x: "0", y: "0", width: "99999", height: "99999", children: [
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
  ] }),
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
        /* @__PURE__ */ p("feBlend", { mode: "normal", in: "componentTransfer", in2: "SourceGraphic", result: "blend" })
      ]
    }
  ),
  /* @__PURE__ */ N("filter", { id: "hc_extension_white_on_black_back", x: "0", y: "0", width: "99999", height: "99999", children: [
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
  ] })
] }) }) }), Po = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, Sa = ({ url: e, alt: t, title: n, width: r, addClass: a, noCaption: i, ...l }) => {
  const [s, c] = X(!1), f = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, u = (v) => c(v), d = s ? f : `${e}`;
  return /* @__PURE__ */ N("figure", { className: `${Po["c-image"]} ${a ?? ""}`, ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } }, children: [
    /* @__PURE__ */ p("img", { src: d, onError: u, alt: t, ...l }),
    !i && /* @__PURE__ */ p("figcaption", { className: Po["c-image__figcaption"], children: /* @__PURE__ */ N("p", { children: [
      /* @__PURE__ */ N("strong", { children: [
        n,
        " "
      ] }),
      t
    ] }) })
  ] });
};
Sa.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
Sa.propTypes = {
  url: o.string,
  alt: o.string,
  title: o.string,
  width: o.string,
  addClass: o.string,
  noCaption: o.bool
};
const hn = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, Ca = lt(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: c, isReadOnly: f, onValue: u }, d) => {
  const v = ue(() => e || ct("c-input-"), [e]), m = ({ target: b }) => {
    u && u({ id: v, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ N("label", { htmlFor: v, className: `${hn["c-label"]} ${i ?? ""}`, children: [
    /* @__PURE__ */ N("span", { className: `${!l && "u-sr-only"}`, children: [
      " ",
      a,
      " "
    ] }),
    /* @__PURE__ */ p(
      "input",
      {
        id: v,
        ref: d,
        type: t,
        name: v,
        value: n,
        disabled: s,
        required: c,
        placeholder: r,
        autoComplete: "off",
        onChange: m,
        className: hn["c-input"],
        ...f && { readOnly: f, "aria-readonly": f }
      }
    )
  ] }) : null;
});
Ca.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Ca.propTypes = {
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
  onValue: o.func,
  __TYPE: pe("Input")
};
const rc = ({ children: e, onAllValue: t }) => {
  const [n, r] = X([]), a = (s) => r([...n.filter((c) => c.id !== s.id), { ...s }]);
  Z(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, c, f) => xe.toArray(s).map((u) => u.props.__TYPE === c ? we(u, { ...u.props, ...f }) : u);
  return xe.map(e, (s) => {
    var c, f;
    return Ze(s) ? ((c = s == null ? void 0 : s.props) == null ? void 0 : c.__TYPE) === "InputStyle" ? we(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? we(s, { ...s.props, onValue: a }) : s : null;
  });
};
rc.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const Ra = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${hn["c-input__wrapper-style"]} ${t ?? ""}`, children: Be(e, ["InputLeftAddon", "InputRightAddon", "Input"]) });
Ra.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  __TYPE: pe("InputStyle")
};
Ra.defaultProps = {
  __TYPE: "InputStyle"
};
const Pa = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${hn["c-input__left-addon"]} ${t ?? ""}`, children: e });
Pa.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  __TYPE: pe("InputLeftAddon")
};
Pa.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const $a = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${hn["c-input__right-addon"]} ${t ?? ""}`, children: e });
$a.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  __TYPE: pe("InputRightAddon")
};
$a.defaultProps = {
  __TYPE: "InputRightAddon"
};
const oc = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, ac = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("kbd", { className: `${oc["c-kbd"]} ${t ?? ""}`, ...n, children: e });
ac.propTypes = {
  children: o.string,
  addClass: o.string
};
const Da = ({ children: e, link: t, addClass: n, isExternal: r, label: a, ...i }) => /* @__PURE__ */ p(
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
Da.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Da.propTypes = {
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
const Aa = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, ic = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { className: `${Aa["c-List"]} ${t ?? ""}`, ...n, children: Be(e, ["ListItem"]) });
ic.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const Na = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = xe.map(e, (i) => {
    var l;
    return ((l = i == null ? void 0 : i.props) == null ? void 0 : l.__TYPE) === "Icon" ? we(i, { ...i.props, addClass: Aa["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
Na.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: pe("ListItem")
};
Na.defaultProps = {
  __TYPE: "ListItem"
};
const sc = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: Be(e, ["ListItem"]) });
sc.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const lc = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: Be(e, ["ListItem"]) });
lc.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
var hr = function() {
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
function mr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), r = function() {
    function f(u, d) {
      mr(this, f), this._inertManager = d, this._rootElement = u, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return hr(f, [{
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
        l(d, function(_) {
          return v._visitNode(_);
        });
        var m = document.activeElement;
        if (!document.body.contains(d)) {
          for (var b = d, g = void 0; b; ) {
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              g = /** @type {!ShadowRoot} */
              b;
              break;
            }
            b = b.parentNode;
          }
          g && (m = g.activeElement);
        }
        d.contains(m) && (m.blur(), m === document.activeElement && document.body.focus());
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
        l(d, function(m) {
          return v._unmanageNode(m);
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
        v || (this._inertManager.setInert(d, !0), v = this._inertManager.getInertRoot(d)), v.managedNodes.forEach(function(m) {
          this._manageNode(m.node);
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
        d.forEach(function(m) {
          var b = (
            /** @type {!HTMLElement} */
            m.target
          );
          if (m.type === "childList")
            e.call(m.addedNodes).forEach(function(_) {
              this._makeSubtreeUnfocusable(_);
            }, this), e.call(m.removedNodes).forEach(function(_) {
              this._unmanageSubtree(_);
            }, this);
          else if (m.type === "attributes") {
            if (m.attributeName === "tabindex")
              this._manageNode(b);
            else if (b !== this._rootElement && m.attributeName === "inert" && b.hasAttribute("inert")) {
              this._adoptInertRoot(b);
              var g = this._inertManager.getInertRoot(b);
              this._managedNodes.forEach(function(_) {
                b.contains(_.node) && g._manageNode(_.node);
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
      mr(this, f), this._node = u, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([d]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return hr(f, [{
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
      if (mr(this, f), !u)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = u, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(u.head || u.body || u.documentElement), u.readyState === "loading" ? u.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return hr(f, [{
      key: "setInert",
      value: function(d, v) {
        if (v) {
          if (this._inertRoots.has(d))
            return;
          var m = new r(d, this);
          if (d.setAttribute("inert", ""), this._inertRoots.set(d, m), !this._document.body.contains(d))
            for (var b = d.parentNode; b; )
              b.nodeType === 11 && s(b), b = b.parentNode;
        } else {
          if (!this._inertRoots.has(d))
            return;
          var g = this._inertRoots.get(d);
          g.destructor(), this._inertRoots.delete(d), d.removeAttribute("inert");
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
        var m = this._managedNodes.get(d);
        return m !== void 0 ? m.addInertRoot(v) : m = new a(d, v), this._managedNodes.set(d, m), m;
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
        var m = this._managedNodes.get(d);
        return m ? (m.removeInertRoot(v), m.destroyed && this._managedNodes.delete(d), m) : null;
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
        var m = this;
        d.forEach(function(b) {
          switch (b.type) {
            case "childList":
              e.call(b.addedNodes).forEach(function(w) {
                if (w.nodeType === Node.ELEMENT_NODE) {
                  var $ = e.call(w.querySelectorAll("[inert]"));
                  t.call(w, "[inert]") && $.unshift(w), $.forEach(function(R) {
                    this.setInert(R, !0);
                  }, m);
                }
              }, m);
              break;
            case "attributes":
              if (b.attributeName !== "inert")
                return;
              var g = (
                /** @type {!HTMLElement} */
                b.target
              ), _ = g.hasAttribute("inert");
              m.setInert(g, _);
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
      var m = (
        /** @type {!HTMLElement} */
        v.shadowRoot
      );
      if (m) {
        l(m, u);
        return;
      }
      if (v.localName == "content") {
        for (var b = (
          /** @type {!HTMLContentElement} */
          v
        ), g = b.getDistributedNodes ? b.getDistributedNodes() : [], _ = 0; _ < g.length; _++)
          l(g[_], u);
        return;
      }
      if (v.localName == "slot") {
        for (var w = (
          /** @type {!HTMLSlotElement} */
          v
        ), $ = w.assignedNodes ? w.assignedNodes({ flatten: !0 }) : [], R = 0; R < $.length; R++)
          l($[R], u);
        return;
      }
    }
    for (var P = f.firstChild; P != null; )
      l(P, u), P = P.nextSibling;
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
const Hn = Ke(), cc = Object.freeze({
  ESC: 27
}), Ia = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = G(), i = (f) => {
    const u = document.querySelector("#root");
    u.inert = f;
  }, l = (f) => {
    (f.keyCode || f.which) === cc.ESC && c();
  }, s = (f, u) => {
    a.current.classList.replace(f, u);
  }, c = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), n(!t), Object.keys(r).length !== 0 && r.current.focus();
    }, 500);
  };
  return Z(() => (t && (i(!0), a.current && a.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(Hn.Provider, { value: { isOpen: t, onKeyDown: l, onCloseModal: c, refModal: a }, children: /* @__PURE__ */ p(Zt, { id: "js-modal", children: Be(e, ["ModalContent", "ModalOverlay"]) }) });
};
Ia.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Ia.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  label: o.string.isRequired,
  finalFocusRef: o.object.isRequired
};
const In = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, ka = ({ label: e, addClass: t, children: n, onClick: r, onKeyDown: a, __TYPE: i, ...l }) => {
  const { isOpen: s, onKeyDown: c, onCloseModal: f, refModal: u } = be(Hn), d = (m) => {
    r && typeof r == "function" && r(m), f();
  };
  return /* @__PURE__ */ N(
    "div",
    {
      ref: u,
      role: "dialog",
      tabIndex: "-1",
      hidden: !s,
      "aria-label": e,
      "aria-modal": "true",
      "data-type": i,
      onKeyDown: (m) => {
        a && typeof a == "function" && a(m), c(m);
      },
      className: `${In["c-modal"]} animate__animated animate__fadeIn animate__faster u-px-3 u-py-3 class-video-interpreter-ui-modal ${t ?? ""}`,
      ...l,
      children: [
        /* @__PURE__ */ p("div", { className: `${In["c-modal-container"]}`, children: n }),
        /* @__PURE__ */ p(Dt, { addClass: In["c-close-button"], label: "Cerrar modal", hasAriaLabel: !0, onClick: d, children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }) }) }) })
      ]
    }
  );
};
ka.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  label: o.string.isRequired,
  onClick: o.func,
  onKeyDown: o.func,
  __TYPE: pe("ModalContent")
};
ka.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const Ma = ({ addClass: e, onClick: t }) => {
  const { isOpen: n, onCloseModal: r } = be(Hn), a = (i) => {
    t && typeof t == "function" && t(i), r();
  };
  return /* @__PURE__ */ p("div", { className: `${In["c-layout"]} ${e ?? ""}`, onClick: a, hidden: !n });
};
Ma.propTypes = {
  addClass: o.string,
  onClick: o.func,
  __TYPE: pe("ModalOverlay")
};
Ma.defaultProps = {
  __TYPE: "ModalOverlay"
};
const uc = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = be(Hn), r = (a) => {
    t && t(a), n();
  };
  return we(e, { ...e.props, onClick: r });
};
uc.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const qt = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, Gn = Ke(), La = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: l, onValue: s }) => {
  const [c, f] = X(r || 0), u = () => {
    if (n && c > i)
      return f(i);
    f((b) => b + l);
  }, d = () => {
    if (n && c < a)
      return f(a);
    f((b) => b - l);
  }, v = (b) => f(b), m = (b) => n && c === b;
  return Z(() => {
    s && s(c);
  }, [c, s]), /* @__PURE__ */ p(
    Gn.Provider,
    {
      value: {
        counter: c,
        min: a || Number.MIN_SAFE_INTEGER,
        max: i || Number.MAX_SAFE_INTEGER,
        validate: m,
        onChangeValue: v,
        onIncrementValue: u,
        onDecrementValue: d
      },
      children: /* @__PURE__ */ p("div", { className: `${qt["c-number-input"]} ${t ?? ""}`, children: Be(e, ["NumberInputField", "NumberInputStepper"]) })
    }
  );
};
La.propTypes = {
  children: o.arrayOf(o.element),
  addClass: o.string,
  max: o.number,
  min: o.number,
  defaultValue: o.number,
  step: o.number,
  onValue: o.func,
  keepWithinRange: o.bool
};
La.defaultProps = {
  step: 1
};
const ja = lt(({ id: e, name: t, label: n, pattern: r, addClass: a, isLabelVisible: i }, l) => {
  const { counter: s, onChangeValue: c, onIncrementValue: f, onDecrementValue: u, min: d, max: v } = be(Gn), m = ue(() => e || ct("c-number-input-"), [e]), b = Object.freeze({
    UP: 38,
    DOWN: 40,
    END: 35,
    HOME: 36
  }), g = ({ target: w }) => {
    if (!isNaN(w.value) && w.value)
      return c(parseInt(w.value));
    c(0);
  }, _ = (w) => {
    switch (w.keyCode || w.which) {
      case b.UP:
        f();
        break;
      case b.DOWN:
        u();
        break;
      case b.END:
        c(v);
        break;
      case b.HOME:
        c(d);
        break;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ N("label", { htmlFor: m, className: `${qt["c-number-input__label"]} ${a ?? ""}`, children: [
    /* @__PURE__ */ N("span", { className: `${!i && "u-sr-only"}`, children: [
      " ",
      n,
      " "
    ] }),
    /* @__PURE__ */ p(
      "input",
      {
        id: m,
        ref: l,
        type: "text",
        name: t,
        role: "spinbutton",
        inputMode: "decimal",
        pattern: r,
        autoCorrect: "off",
        autoComplete: "off",
        className: qt["c-number-input__input"],
        onChange: g,
        onKeyDown: _,
        ...s || s === 0 ? {
          value: s,
          "aria-valuemax": v,
          "aria-valuemin": d,
          "aria-valuenow": s,
          "aria-valuetext": `${s}`
        } : { value: "" }
      }
    )
  ] });
});
ja.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
ja.propTypes = {
  id: o.string,
  name: o.string,
  label: o.string,
  pattern: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  __TYPE: pe("NumberInputField")
};
const Fa = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${qt["c-number-input__stepper"]} ${t ?? ""}`, children: Be(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Fa.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: pe("NumberInputStepper")
};
Fa.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Ba = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = be(Gn);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Decrementar valor"}`,
      className: `${qt["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Ba.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: pe("NumberDecrementStepper"),
  label: o.string
};
Ba.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Va = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: r, validate: a, max: i } = be(Gn);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Incrementar valor"}`,
      className: `${qt["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
Va.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: pe("NumberIncrementStepper"),
  label: o.string
};
Va.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const dc = (e) => {
  const {
    boundaryCount: t = 1,
    count: n = 1,
    defaultPage: r = 1,
    disabled: a = !1,
    hideNextButton: i = !1,
    hidePrevButton: l = !1,
    onChange: s,
    showFirstButton: c = !1,
    showLastButton: f = !1,
    siblingCount: u = 1,
    ...d
  } = e, [v, m] = X(r), b = (x, S) => {
    m(S), s && s(x, S);
  }, g = (x, S) => {
    const D = S - x + 1;
    return Array.from({ length: D }, (j, I) => x + I);
  }, _ = g(1, Math.min(t, n)), w = g(Math.max(n - t + 1, t + 1), n), $ = Math.max(
    Math.min(
      // Inicio natural
      v - u,
      // Limite inferior cuando la página es mayor
      n - t - u * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), R = Math.min(
    Math.max(
      // Final natural
      v + u,
      // Limite superior cuando la página es menor
      t + u * 2 + 2
    ),
    // Menor que el endPages
    w.length > 0 ? w[0] - 2 : n - 1
  ), P = [
    ...c ? ["first"] : [],
    ...l ? [] : ["previous"],
    ..._,
    // Comienza el ellipsis
    ...$ > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...g($, R),
    // Finaliza el ellipsis
    ...R < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...w,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], y = (x) => {
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
    items: P.map((x) => typeof x == "number" ? {
      onClick: (S) => {
        b(S, x);
      },
      type: "page",
      page: x,
      selected: x === v,
      disabled: a,
      "aria-current": x === v ? !0 : void 0
    } : {
      onClick: (S) => {
        b(S, y(x));
      },
      type: x,
      page: y(x),
      selected: !1,
      disabled: a || x.indexOf("ellipsis") === -1 && (x === "next" || x === "last" ? v >= n : v <= 1)
    }),
    ...d
  };
}, cn = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, fc = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), pc = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${fc[e]} página`, qa = ({ renderItem: e, getItemAriaLabel: t, addClass: n, ...r }) => {
  const { items: a } = dc({ ...r });
  return /* @__PURE__ */ p("nav", { className: `${n ?? ""} ${cn["c-pagination"]}`, children: /* @__PURE__ */ p("ul", { className: cn["c-pagination__ul"], children: a.map((i, l) => /* @__PURE__ */ p("li", { children: e({
    ...i,
    "aria-label": t(i.type, i.page, i.selected)
  }) }, `pagination-item-${l}`)) }) });
};
qa.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(qr, { ...e }),
  getItemAriaLabel: pc
};
qa.propTypes = {
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
  getItemAriaLabel: o.func
};
const qr = ({ page: e, type: t, addClass: n, disabled: r, element: a, icons: i, selected: l, ...s }) => {
  const f = {
    previous: (i == null ? void 0 : i.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (i == null ? void 0 : i.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" }),
    last: (i == null ? void 0 : i.last) || /* @__PURE__ */ p("path", { id: "last_page", d: "m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z" }),
    first: (i == null ? void 0 : i.first) || /* @__PURE__ */ p("path", { id: "first_page", d: "M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z" })
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? (
    // Devolvemos '...' si es de tipo ellipsis.
    /* @__PURE__ */ p("div", { className: cn["c-pagination-item__ellipsis"], children: "..." })
  ) : we(
    a,
    {
      disabled: r,
      className: `${cn["c-pagination-item"]} ${n ?? ""} ${l ? cn["c-pagination-item--selected"] : ""}`,
      ...a.props,
      ...s
    },
    [
      // Si es de tipo página colocar la página e.g 1,2,3.
      t === "page" && e,
      // Si existe el icono agregarlo e.g icon = 'last_page'
      f ? i ? /* @__PURE__ */ p(_e, { path: f }, t) : /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: f }) }, t) : null
    ]
  );
};
qr.propTypes = {
  page: o.number,
  type: o.string,
  addClass: o.string,
  disabled: o.bool,
  selected: o.bool,
  element: o.oneOfType([o.element, o.node, o.string]),
  icons: o.shape({
    first: o.string,
    last: o.string,
    next: o.string,
    previous: o.string
  })
};
qr.defaultProps = {
  element: /* @__PURE__ */ p("button", {})
};
const Ft = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, Zn = Ke(), vc = ({ children: e, defaultIndex: t, addClass: n }) => {
  const [r, a] = X(null), [i, l] = X([]), s = (u) => l((d) => [...d, u]), c = (u) => a(i[u]), f = (u) => r === u;
  return Z(() => {
    i.length !== 0 && (t !== void 0 ? c(t - 1) : a(i[0]));
  }, [t, i]), /* @__PURE__ */ p(Zn.Provider, { value: { validation: f, onToggle: c, listId: i, currentSection: r, addNewIdToSection: s }, children: /* @__PURE__ */ p("div", { className: `${Ft["c-panel"]} ${n ?? ""} class-video-interpreter-ui-panel`, children: e }) });
};
vc.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element,
    o.arrayOf(o.node),
    o.node,
    o.string
  ]),
  defaultIndex: o.number,
  addClass: o.string
};
const Ya = lt(({ children: e, addClass: t, __TYPE: n, ...r }, a) => {
  const { validation: i, addNewIdToSection: l } = be(Zn), s = G(null), c = i(s.current);
  return Z(() => {
    s.current || (s.current = parseInt(ct()), l(s.current));
  }, [s]), /* @__PURE__ */ N(
    "section",
    {
      ref: a,
      role: "tabpanel",
      hidden: !c,
      "data-type": n,
      "aria-hidden": !c,
      "data-value": s.current,
      "aria-labelledby": `section-${s.current}`,
      className: `${Ft["c-section"]} ${t ?? ""}`,
      ...r,
      children: [
        /* @__PURE__ */ N("span", { id: `section-${s.current}`, className: "u-sr-only", children: [
          "Sección ",
          s.current
        ] }),
        e
      ]
    }
  );
});
Ya.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  id: o.number,
  addClass: o.string,
  __TYPE: pe("Section")
};
Ya.defaultProps = {
  __TYPE: "Section"
};
const hc = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), mc = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${hc[e]} sección`, za = ({ renderItem: e, showPrevButton: t, showNextButton: n, icons: r, label: a, orientation: i, onValue: l, addClass: s, getItemAriaLabel: c }) => {
  const { validation: f, onToggle: u, listId: d, currentSection: v } = be(Zn), m = G([]), b = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), g = Object.freeze({
    previous: v - 1,
    next: v + 1
  }), _ = {
    previous: (r == null ? void 0 : r.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (r == null ? void 0 : r.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" })
  }, w = [
    // Botón para navegar a la sección anterior.
    ...t ? ["previous"] : [],
    // Lista de todas la secciones.
    ...d || [],
    // Botón para navegar a la siguiente sección.
    ...n ? ["next"] : []
  ], $ = (O) => !m.current.includes(O) && O ? m.current = [...m.current, O] : m.current, R = (O) => {
    const x = m.current[0], S = m.current[m.current.length - 1];
    if ((O.keyCode || O.which) === b.LEFT)
      if (O.target === x)
        S.focus();
      else {
        const D = m.current.indexOf(O.target) - 1;
        m.current[D].focus();
      }
    else if ((O.keyCode || O.which) === b.RIGHT)
      if (O.target === S)
        x.focus();
      else {
        const D = m.current.indexOf(O.target) + 1;
        m.current[D].focus();
      }
  }, P = (O) => {
    u(d.findIndex((x) => x === O)), l !== void 0 && l(O, d.length);
  }, y = w.map((O) => {
    let x = [...d];
    return x = x.pop(), typeof O == "number" ? {
      onClick: (S) => {
        P(O);
      },
      type: "section",
      section: O,
      selected: f(O),
      ref: $,
      onKeyDown: R
    } : {
      onClick: () => {
        P(g[O]);
      },
      type: O,
      section: g[O],
      selected: !1,
      disabled: O === "next" ? v >= x : v <= d[0]
    };
  });
  return Z(() => {
    l !== void 0 && l(v, d.length);
  }, []), /* @__PURE__ */ N(pt, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: `${Ft["c-navigation"]} ${s ?? ""}`,
        children: e ? e(y) : y.map(({ section: O, type: x, selected: S, ...D }, j) => /* @__PURE__ */ p("li", { role: "presentation", className: Ft["c-navigation__item"], children: x === "section" ? /* @__PURE__ */ p(
          "button",
          {
            id: `navigation-section-tab-${O}`,
            role: "tab",
            tabIndex: `${S ? 0 : -1}`,
            "aria-selected": S,
            className: Ft["c-navigation__section"],
            "aria-label": c(x, O, S),
            ...D
          }
        ) : /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            className: `${Ft["c-navigation__button"]}`,
            "aria-label": c(x, O, S),
            ...D,
            children: _[x] ? r ? /* @__PURE__ */ p(_e, { path: _[x] }, x) : /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: _[x] }) }, x) : null
          }
        ) }, `navigation-section-item-${j}`))
      }
    )
  ] });
};
za.propTypes = {
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
  getItemAriaLabel: o.func
};
za.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: mc
};
const gc = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = be(Zn), a = (i) => {
    r(t - 1), n && n(i);
  };
  return xe.map(e, (i) => we(i, { ...i.props, onClick: a }));
};
gc.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const bc = {
  "c-paper": "_c-paper_1sbf6_1"
}, yc = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = G(null);
  return zo(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p("div", { ref: a, className: `${bc["c-paper"]} ${n ?? ""}`, ...r, children: e });
};
yc.propTypes = {
  children: o.oneOfType([o.element, o.node, o.arrayOf(o.element), o.arrayOf(o.node)]),
  addClass: o.string,
  color: o.string
};
const _c = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, wc = (e) => {
  document.body.append(e);
}, xc = (e) => {
  const t = G(null);
  Z(() => {
    const r = document.querySelector(`#${e}`), a = r || _c(e);
    return r || wc(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, Zt = ({ children: e, id: t }) => {
  const n = xc(t);
  return Uo(e, n);
};
Zt.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const Ec = "_row_1adiy_1", Tc = {
  row: Ec
}, Oc = lt(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Tc.row} ${e ?? ""}`, ...t }));
Oc.propTypes = {
  addClass: o.string
};
const Dn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, Wa = lt(({ children: e, id: t, placeholder: n, label: r, icon: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: c, onChoise: f, defaultValue: u }, d) => {
  const v = ue(() => t || ct("c-select-"), [t]), m = ({ target: b }) => {
    f && f({ id: v, value: b.value });
  };
  return /* @__PURE__ */ N("label", { htmlFor: v, ...i && { className: `${i}` }, children: [
    /* @__PURE__ */ N("span", { className: `${!l && "u-sr-only"}`, children: [
      " ",
      r,
      " "
    ] }),
    /* @__PURE__ */ N("div", { className: Dn["c-select-wrapper"], children: [
      /* @__PURE__ */ N(
        "select",
        {
          id: v,
          ref: d,
          name: v,
          defaultValue: u,
          className: Dn["c-select"],
          onChange: m,
          disabled: s,
          required: c,
          children: [
            /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
            Be(e, ["option", "optgroup"])
          ]
        }
      ),
      a ? /* @__PURE__ */ p(_e, { path: a, addClass: Dn["c-select__icon"] }) : /* @__PURE__ */ p(_e, { addClass: Dn["c-select__icon"], children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    ] })
  ] });
});
Wa.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Wa.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.node]),
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
  __TYPE: pe("Select")
};
const Sc = ({ children: e, onAllSelect: t }) => {
  const [n, r] = X([]), a = (l) => r([...n.filter((s) => s.id !== l.id), { ...l }]);
  return Z(() => {
    t && t(n);
  }, [n, t]), xe.map(e, (l) => {
    var s;
    return Ze(l) ? ((s = l == null ? void 0 : l.props) == null ? void 0 : s.__TYPE) === "Select" ? we(l, { ...l.props, onChoise: a }) : l : null;
  });
};
Sc.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllSelect: o.func
};
const gr = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, $o = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Ua = lt(({ id: e, name: t, size: n, value: r, label: a, addClass: i, isDisabled: l, defaultChecked: s, isLabelVisible: c, onChange: f }, u) => {
  const [d, v] = X(!1), m = ue(() => e || ct("c-input-"), [e]), b = ({ target: _ }) => {
    if (v(_.checked), !!f) {
      if (_.checked) {
        f({ id: _.id, value: _.value });
        return;
      }
      f({ id: _.id, value: "" });
    }
  }, g = (_) => {
    ((_.keyCode || _.which) === $o.SPACE || (_.keyCode || _.which) === $o.ENTER) && v((w) => (f && f(w ? { id: m, value: "" } : { id: m, value: `${r}` }), !w));
  };
  return Z(() => (s && v(!!s), () => {
    v(!1);
  }), [s]), /* @__PURE__ */ N("label", { htmlFor: m, className: `${gr["c-label"]} ${gr[`is-${n}`]}`, children: [
    /* @__PURE__ */ N("span", { className: `${!c && "u-sr-only"}`, children: [
      " ",
      a,
      " "
    ] }),
    /* @__PURE__ */ p(
      "input",
      {
        id: m,
        ref: u,
        role: "switch",
        type: "checkbox",
        name: t,
        value: r,
        checked: d,
        "aria-disabled": l,
        className: `${gr["c-switch"]} ${i ?? ""}`,
        onChange: b,
        onKeyDown: g,
        ...l && { disabled: !0 }
      }
    )
  ] });
});
Ua.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Ua.propTypes = {
  id: o.string,
  name: o.string,
  size: o.string.isRequired,
  value: o.oneOfType([o.string, o.number, o.bool]),
  label: o.string,
  addClass: o.string,
  isDisabled: o.bool,
  defaultChecked: o.bool,
  isLabelVisible: o.bool,
  onChange: o.func
};
const Yr = Ke(), Cc = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = X(0), l = (c) => i(c), s = (c) => a === c;
  return Z(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(Yr.Provider, { value: { validation: s, onToggle: l }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: Be(e, ["TabList", "TabPanels"]) }) });
};
Cc.propTypes = {
  children: o.arrayOf(o.element),
  defaultIndex: o.number,
  addClass: o.string
};
const mn = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, Ha = ({ children: e, id: t, selected: n, addClass: r, icon: a, addNewRef: i, onNavigation: l, __TYPE: s, ...c }) => {
  const f = G(), { validation: u, onToggle: d } = be(Yr), v = u(t);
  return Z(() => (f.current && i(f.current), () => {
    f.current = null;
  }), [f]), /* @__PURE__ */ N(
    "button",
    {
      id: `tab-${t}`,
      role: "tab",
      ref: f,
      "data-type": s,
      tabIndex: `${v ? 0 : -1}`,
      "aria-controls": `panel-${t}`,
      "aria-selected": v,
      onKeyDown: l,
      onClick: () => d(t),
      className: `${mn["c-tab__button"]} u-flex ${r ?? ""} ${v && n && n}`,
      ...c,
      children: [
        e,
        a && a(v)
      ]
    }
  );
};
Ha.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  id: o.number,
  selected: o.string,
  addClass: o.string,
  icon: o.func,
  addNewRef: o.func,
  onNavigation: o.func,
  __TYPE: pe("Tab")
};
Ha.defaultProps = {
  __TYPE: "Tab"
};
const Ga = ({ children: e, addClass: t, label: n, orientation: r, __TYPE: a, ...i }) => {
  const l = G([]), s = (d) => l.current = [...l.current, d], c = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), f = (d) => {
    const v = l.current[0], m = l.current[l.current.length - 1];
    if ((d.keyCode || d.which) === c.LEFT)
      if (d.target === v)
        m.focus();
      else {
        const b = l.current.indexOf(d.target) - 1;
        l.current[b].focus();
      }
    else if ((d.keyCode || d.which) === c.RIGHT)
      if (d.target === m)
        v.focus();
      else {
        const b = l.current.indexOf(d.target) + 1;
        l.current[b].focus();
      }
  }, u = xe.map(e, (d, v) => Ze(d) ? we(d, { ...d.props, id: v, addNewRef: s, onNavigation: f }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      role: "tablist",
      "data-type": a,
      "aria-label": n,
      "aria-orientation": r,
      className: `${mn["c-tab__list"]} ${t ?? ""}`,
      ...i,
      children: Be(u, ["Tab"])
    }
  );
};
Ga.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  label: o.string,
  orientation: o.string,
  __TYPE: pe("TabList")
};
Ga.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const Za = ({ children: e, id: t, addClass: n, __TYPE: r, ...a }) => {
  const { validation: i } = be(Yr), l = i(t);
  return /* @__PURE__ */ p(
    "div",
    {
      id: `panel-${t}`,
      role: "tabpanel",
      tabIndex: 0,
      "data-type": r,
      "aria-hidden": !l,
      hidden: !l,
      "aria-labelledby": `tab-${t}`,
      className: `${l ? mn["c-tab__panel--active"] : mn["c-tab__panel"]} ${n ?? ""}`,
      ...a,
      children: e
    }
  );
};
Za.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  id: o.number,
  addClass: o.string,
  __TYPE: pe("TabPanel")
};
Za.defaultProps = {
  __TYPE: "TabPanel"
};
const Ka = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = xe.map(e, (i, l) => Ze(i) ? we(i, { ...i.props, id: l }) : null);
  return /* @__PURE__ */ p("div", { className: `${mn["c-tab__panels"]} ${t ?? ""}`, "data-type": n, ...r, children: Be(a, ["TabPanel"]) });
};
Ka.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  __TYPE: pe("TabPanels")
};
Ka.defaultProps = {
  __TYPE: "TabPanels"
};
const br = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, Xa = lt(
  ({ id: e, value: t, resize: n, placeholder: r, label: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: c, onValue: f, ...u }, d) => {
    const v = ue(() => e || ct("c-input-"), [e]), m = ({ target: b }) => {
      f && f({ id: v, value: b.value });
    };
    return /* @__PURE__ */ N("label", { htmlFor: v, className: `${br["c-label"]} ${i ?? ""}`, children: [
      /* @__PURE__ */ N("span", { className: `${!l && "u-sr-only"}`, children: [
        " ",
        a,
        " "
      ] }),
      /* @__PURE__ */ p(
        "textarea",
        {
          id: v,
          ref: d,
          defaultValue: t,
          disabled: s,
          required: c,
          placeholder: r,
          autoComplete: "off",
          onChange: m,
          className: `${br["c-textarea"]} ${br[`c-textarea--${n}`]}`,
          ...u
        }
      )
    ] });
  }
);
Xa.defaultProps = {
  resize: "vertical",
  placeholder: "Here is a sample placeholder"
};
Xa.propTypes = {
  id: o.string,
  value: o.string,
  resize: o.oneOf(["none", "horizontal", "vertical"]),
  placeholder: o.string,
  label: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  isDisabled: o.bool,
  isRequired: o.bool,
  onValue: o.func
};
const Rc = Wo(({ children: e, theme: t = {} }) => {
  const n = (r) => {
    const a = document.createElement("style");
    document.head.append(a);
    const i = a.sheet;
    let l = "";
    for (const s in r)
      l += `--clr-${s}: ${r[s]};
`;
    i.insertRule(`:root{${l}}`);
  };
  return Z(() => {
    if (Object.entries(t).length !== 0)
      return n(t), () => {
        t = {};
      };
  }, [t]), e;
});
Rc.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var Do = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, Ao = typeof window < "u" && window.document && window.document.createElement ? $t.useLayoutEffect : $t.useEffect, je = "top", He = "bottom", Ge = "right", Fe = "left", Kn = "auto", xn = [je, He, Ge, Fe], Yt = "start", gn = "end", Pc = "clippingParents", Ja = "viewport", rn = "popper", $c = "reference", No = /* @__PURE__ */ xn.reduce(function(e, t) {
  return e.concat([t + "-" + Yt, t + "-" + gn]);
}, []), Qa = /* @__PURE__ */ [].concat(xn, [Kn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Yt, t + "-" + gn]);
}, []), Dc = "beforeRead", Ac = "read", Nc = "afterRead", Ic = "beforeMain", kc = "main", Mc = "afterMain", Lc = "beforeWrite", jc = "write", Fc = "afterWrite", Pr = [Dc, Ac, Nc, Ic, kc, Mc, Lc, jc, Fc];
function st(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Xe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Nt(e) {
  var t = Xe(e).Element;
  return e instanceof t || e instanceof Element;
}
function qe(e) {
  var t = Xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Bc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !qe(i) || !st(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(l) {
      var s = a[l];
      s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function Vc(e) {
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
      var a = t.elements[r], i = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = l.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !qe(a) || !st(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(c) {
        a.removeAttribute(c);
      }));
    });
  };
}
const qc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Bc,
  effect: Vc,
  requires: ["computeStyles"]
};
function nt(e) {
  return e.split("-")[0];
}
var At = Math.max, qn = Math.min, zt = Math.round;
function $r() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ei() {
  return !/^((?!chrome|android).)*safari/i.test($r());
}
function Wt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && qe(e) && (a = e.offsetWidth > 0 && zt(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && zt(r.height) / e.offsetHeight || 1);
  var l = Nt(e) ? Xe(e) : window, s = l.visualViewport, c = !ei() && n, f = (r.left + (c && s ? s.offsetLeft : 0)) / a, u = (r.top + (c && s ? s.offsetTop : 0)) / i, d = r.width / a, v = r.height / i;
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
function Wr(e) {
  var t = Wt(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ti(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && zr(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ot(e) {
  return Xe(e).getComputedStyle(e);
}
function Yc(e) {
  return ["table", "td", "th"].indexOf(st(e)) >= 0;
}
function _t(e) {
  return ((Nt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Xn(e) {
  return st(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (zr(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    _t(e)
  );
}
function Io(e) {
  return !qe(e) || // https://github.com/popperjs/popper-core/issues/837
  ot(e).position === "fixed" ? null : e.offsetParent;
}
function zc(e) {
  var t = /firefox/i.test($r()), n = /Trident/i.test($r());
  if (n && qe(e)) {
    var r = ot(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Xn(e);
  for (zr(a) && (a = a.host); qe(a) && ["html", "body"].indexOf(st(a)) < 0; ) {
    var i = ot(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function En(e) {
  for (var t = Xe(e), n = Io(e); n && Yc(n) && ot(n).position === "static"; )
    n = Io(n);
  return n && (st(n) === "html" || st(n) === "body" && ot(n).position === "static") ? t : n || zc(e) || t;
}
function Ur(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function un(e, t, n) {
  return At(e, qn(t, n));
}
function Wc(e, t, n) {
  var r = un(e, t, n);
  return r > n ? n : r;
}
function ni() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ri(e) {
  return Object.assign({}, ni(), e);
}
function oi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Uc = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ri(typeof t != "number" ? t : oi(t, xn));
};
function Hc(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, l = n.modifiersData.popperOffsets, s = nt(n.placement), c = Ur(s), f = [Fe, Ge].indexOf(s) >= 0, u = f ? "height" : "width";
  if (!(!i || !l)) {
    var d = Uc(a.padding, n), v = Wr(i), m = c === "y" ? je : Fe, b = c === "y" ? He : Ge, g = n.rects.reference[u] + n.rects.reference[c] - l[c] - n.rects.popper[u], _ = l[c] - n.rects.reference[c], w = En(i), $ = w ? c === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, R = g / 2 - _ / 2, P = d[m], y = $ - v[u] - d[b], O = $ / 2 - v[u] / 2 + R, x = un(P, O, y), S = c;
    n.modifiersData[r] = (t = {}, t[S] = x, t.centerOffset = x - O, t);
  }
}
function Gc(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (qe(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ti(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const Zc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Hc,
  effect: Gc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ut(e) {
  return e.split("-")[1];
}
var Kc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Xc(e) {
  var t = e.x, n = e.y, r = window, a = r.devicePixelRatio || 1;
  return {
    x: zt(t * a) / a || 0,
    y: zt(n * a) / a || 0
  };
}
function ko(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, l = e.offsets, s = e.position, c = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, v = l.x, m = v === void 0 ? 0 : v, b = l.y, g = b === void 0 ? 0 : b, _ = typeof u == "function" ? u({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = _.x, g = _.y;
  var w = l.hasOwnProperty("x"), $ = l.hasOwnProperty("y"), R = Fe, P = je, y = window;
  if (f) {
    var O = En(n), x = "clientHeight", S = "clientWidth";
    if (O === Xe(n) && (O = _t(n), ot(O).position !== "static" && s === "absolute" && (x = "scrollHeight", S = "scrollWidth")), O = O, a === je || (a === Fe || a === Ge) && i === gn) {
      P = He;
      var D = d && O === y && y.visualViewport ? y.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[x]
      );
      g -= D - r.height, g *= c ? 1 : -1;
    }
    if (a === Fe || (a === je || a === He) && i === gn) {
      R = Ge;
      var j = d && O === y && y.visualViewport ? y.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[S]
      );
      m -= j - r.width, m *= c ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: s
  }, f && Kc), U = u === !0 ? Xc({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  if (m = U.x, g = U.y, c) {
    var q;
    return Object.assign({}, I, (q = {}, q[P] = $ ? "0" : "", q[R] = w ? "0" : "", q.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", q));
  }
  return Object.assign({}, I, (t = {}, t[P] = $ ? g + "px" : "", t[R] = w ? m + "px" : "", t.transform = "", t));
}
function Jc(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, l = i === void 0 ? !0 : i, s = n.roundOffsets, c = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = ot(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return f.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: nt(t.placement),
    variation: Ut(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ko(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ko(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Qc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Jc,
  data: {}
};
var An = {
  passive: !0
};
function eu(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, l = r.resize, s = l === void 0 ? !0 : l, c = Xe(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, An);
  }), s && c.addEventListener("resize", n.update, An), function() {
    i && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, An);
    }), s && c.removeEventListener("resize", n.update, An);
  };
}
const tu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: eu,
  data: {}
};
var nu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return nu[t];
  });
}
var ru = {
  start: "end",
  end: "start"
};
function Mo(e) {
  return e.replace(/start|end/g, function(t) {
    return ru[t];
  });
}
function Hr(e) {
  var t = Xe(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Gr(e) {
  return Wt(_t(e)).left + Hr(e).scrollLeft;
}
function ou(e, t) {
  var n = Xe(e), r = _t(e), a = n.visualViewport, i = r.clientWidth, l = r.clientHeight, s = 0, c = 0;
  if (a) {
    i = a.width, l = a.height;
    var f = ei();
    (f || !f && t === "fixed") && (s = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s + Gr(e),
    y: c
  };
}
function au(e) {
  var t, n = _t(e), r = Hr(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = At(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = At(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Gr(e), c = -r.scrollTop;
  return ot(a || n).direction === "rtl" && (s += At(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: c
  };
}
function Zr(e) {
  var t = ot(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function ai(e) {
  return ["html", "body", "#document"].indexOf(st(e)) >= 0 ? e.ownerDocument.body : qe(e) && Zr(e) ? e : ai(Xn(e));
}
function dn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ai(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Xe(r), l = a ? [i].concat(i.visualViewport || [], Zr(r) ? r : []) : r, s = t.concat(l);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(dn(Xn(l)))
  );
}
function Dr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function iu(e, t) {
  var n = Wt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Lo(e, t, n) {
  return t === Ja ? Dr(ou(e, n)) : Nt(t) ? iu(t, n) : Dr(au(_t(e)));
}
function su(e) {
  var t = dn(Xn(e)), n = ["absolute", "fixed"].indexOf(ot(e).position) >= 0, r = n && qe(e) ? En(e) : e;
  return Nt(r) ? t.filter(function(a) {
    return Nt(a) && ti(a, r) && st(a) !== "body";
  }) : [];
}
function lu(e, t, n, r) {
  var a = t === "clippingParents" ? su(e) : [].concat(t), i = [].concat(a, [n]), l = i[0], s = i.reduce(function(c, f) {
    var u = Lo(e, f, r);
    return c.top = At(u.top, c.top), c.right = qn(u.right, c.right), c.bottom = qn(u.bottom, c.bottom), c.left = At(u.left, c.left), c;
  }, Lo(e, l, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ii(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? nt(r) : null, i = r ? Ut(r) : null, l = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
  switch (a) {
    case je:
      c = {
        x: l,
        y: t.y - n.height
      };
      break;
    case He:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Ge:
      c = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Fe:
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
  var f = a ? Ur(a) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (i) {
      case Yt:
        c[f] = c[f] - (t[u] / 2 - n[u] / 2);
        break;
      case gn:
        c[f] = c[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return c;
}
function bn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, l = i === void 0 ? e.strategy : i, s = n.boundary, c = s === void 0 ? Pc : s, f = n.rootBoundary, u = f === void 0 ? Ja : f, d = n.elementContext, v = d === void 0 ? rn : d, m = n.altBoundary, b = m === void 0 ? !1 : m, g = n.padding, _ = g === void 0 ? 0 : g, w = ri(typeof _ != "number" ? _ : oi(_, xn)), $ = v === rn ? $c : rn, R = e.rects.popper, P = e.elements[b ? $ : v], y = lu(Nt(P) ? P : P.contextElement || _t(e.elements.popper), c, u, l), O = Wt(e.elements.reference), x = ii({
    reference: O,
    element: R,
    strategy: "absolute",
    placement: a
  }), S = Dr(Object.assign({}, R, x)), D = v === rn ? S : O, j = {
    top: y.top - D.top + w.top,
    bottom: D.bottom - y.bottom + w.bottom,
    left: y.left - D.left + w.left,
    right: D.right - y.right + w.right
  }, I = e.modifiersData.offset;
  if (v === rn && I) {
    var U = I[a];
    Object.keys(j).forEach(function(q) {
      var te = [Ge, He].indexOf(q) >= 0 ? 1 : -1, ce = [je, He].indexOf(q) >= 0 ? "y" : "x";
      j[q] += U[ce] * te;
    });
  }
  return j;
}
function cu(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, l = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? Qa : c, u = Ut(r), d = u ? s ? No : No.filter(function(b) {
    return Ut(b) === u;
  }) : xn, v = d.filter(function(b) {
    return f.indexOf(b) >= 0;
  });
  v.length === 0 && (v = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = v.reduce(function(b, g) {
    return b[g] = bn(e, {
      placement: g,
      boundary: a,
      rootBoundary: i,
      padding: l
    })[nt(g)], b;
  }, {});
  return Object.keys(m).sort(function(b, g) {
    return m[b] - m[g];
  });
}
function uu(e) {
  if (nt(e) === Kn)
    return [];
  var t = kn(e);
  return [Mo(e), t, Mo(t)];
}
function du(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !0 : l, c = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, v = n.altBoundary, m = n.flipVariations, b = m === void 0 ? !0 : m, g = n.allowedAutoPlacements, _ = t.options.placement, w = nt(_), $ = w === _, R = c || ($ || !b ? [kn(_)] : uu(_)), P = [_].concat(R).reduce(function(F, H) {
      return F.concat(nt(H) === Kn ? cu(t, {
        placement: H,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: b,
        allowedAutoPlacements: g
      }) : H);
    }, []), y = t.rects.reference, O = t.rects.popper, x = /* @__PURE__ */ new Map(), S = !0, D = P[0], j = 0; j < P.length; j++) {
      var I = P[j], U = nt(I), q = Ut(I) === Yt, te = [je, He].indexOf(U) >= 0, ce = te ? "width" : "height", re = bn(t, {
        placement: I,
        boundary: u,
        rootBoundary: d,
        altBoundary: v,
        padding: f
      }), ee = te ? q ? Ge : Fe : q ? He : je;
      y[ce] > O[ce] && (ee = kn(ee));
      var Ee = kn(ee), he = [];
      if (i && he.push(re[U] <= 0), s && he.push(re[ee] <= 0, re[Ee] <= 0), he.every(function(F) {
        return F;
      })) {
        D = I, S = !1;
        break;
      }
      x.set(I, he);
    }
    if (S)
      for (var T = b ? 3 : 1, k = function(H) {
        var L = P.find(function(z) {
          var W = x.get(z);
          if (W)
            return W.slice(0, H).every(function(J) {
              return J;
            });
        });
        if (L)
          return D = L, "break";
      }, B = T; B > 0; B--) {
        var V = k(B);
        if (V === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const fu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: du,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function jo(e, t, n) {
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
function Fo(e) {
  return [je, Ge, He, Fe].some(function(t) {
    return e[t] >= 0;
  });
}
function pu(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, l = bn(t, {
    elementContext: "reference"
  }), s = bn(t, {
    altBoundary: !0
  }), c = jo(l, r), f = jo(s, a, i), u = Fo(c), d = Fo(f);
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
const vu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: pu
};
function hu(e, t, n) {
  var r = nt(e), a = [Fe, je].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = i[0], s = i[1];
  return l = l || 0, s = (s || 0) * a, [Fe, Ge].indexOf(r) >= 0 ? {
    x: s,
    y: l
  } : {
    x: l,
    y: s
  };
}
function mu(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, l = Qa.reduce(function(u, d) {
    return u[d] = hu(d, t.rects, i), u;
  }, {}), s = l[t.placement], c = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = l;
}
const gu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: mu
};
function bu(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ii({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const yu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bu,
  data: {}
};
function _u(e) {
  return e === "x" ? "y" : "x";
}
function wu(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !1 : l, c = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, v = n.tether, m = v === void 0 ? !0 : v, b = n.tetherOffset, g = b === void 0 ? 0 : b, _ = bn(t, {
    boundary: c,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), w = nt(t.placement), $ = Ut(t.placement), R = !$, P = Ur(w), y = _u(P), O = t.modifiersData.popperOffsets, x = t.rects.reference, S = t.rects.popper, D = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, j = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (O) {
    if (i) {
      var q, te = P === "y" ? je : Fe, ce = P === "y" ? He : Ge, re = P === "y" ? "height" : "width", ee = O[P], Ee = ee + _[te], he = ee - _[ce], T = m ? -S[re] / 2 : 0, k = $ === Yt ? x[re] : S[re], B = $ === Yt ? -S[re] : -x[re], V = t.elements.arrow, F = m && V ? Wr(V) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ni(), L = H[te], z = H[ce], W = un(0, x[re], F[re]), J = R ? x[re] / 2 - T - W - L - j.mainAxis : k - W - L - j.mainAxis, Y = R ? -x[re] / 2 + T + W + z + j.mainAxis : B + W + z + j.mainAxis, A = t.elements.arrow && En(t.elements.arrow), E = A ? P === "y" ? A.clientTop || 0 : A.clientLeft || 0 : 0, Q = (q = I == null ? void 0 : I[P]) != null ? q : 0, me = ee + J - Q - E, Oe = ee + Y - Q, $e = un(m ? qn(Ee, me) : Ee, ee, m ? At(he, Oe) : he);
      O[P] = $e, U[P] = $e - ee;
    }
    if (s) {
      var at, ut = P === "x" ? je : Fe, it = P === "x" ? He : Ge, Se = O[y], Je = y === "y" ? "height" : "width", Qe = Se + _[ut], wt = Se - _[it], ht = [je, Fe].indexOf(w) !== -1, xt = (at = I == null ? void 0 : I[y]) != null ? at : 0, Et = ht ? Qe : Se - x[Je] - S[Je] - xt + j.altAxis, Ae = ht ? Se + x[Je] + S[Je] - xt - j.altAxis : wt, et = m && ht ? Wc(Et, Se, Ae) : un(m ? Et : Qe, Se, m ? Ae : wt);
      O[y] = et, U[y] = et - Se;
    }
    t.modifiersData[r] = U;
  }
}
const xu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: wu,
  requiresIfExists: ["offset"]
};
function Eu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Tu(e) {
  return e === Xe(e) || !qe(e) ? Hr(e) : Eu(e);
}
function Ou(e) {
  var t = e.getBoundingClientRect(), n = zt(t.width) / e.offsetWidth || 1, r = zt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Su(e, t, n) {
  n === void 0 && (n = !1);
  var r = qe(t), a = qe(t) && Ou(t), i = _t(t), l = Wt(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((st(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Zr(i)) && (s = Tu(t)), qe(t) ? (c = Wt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Gr(i))), {
    x: l.left + s.scrollLeft - c.x,
    y: l.top + s.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function Cu(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
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
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function Ru(e) {
  var t = Cu(e);
  return Pr.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Pu(e) {
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
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(a, i) {
    return a.replace(/%s/, i);
  }, e);
}
var Pt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', $u = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Bo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Du(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Bo).filter(function(n, r, a) {
      return a.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(gt(Pt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(gt(Pt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Pr.indexOf(t.phase) < 0 && console.error(gt(Pt, t.name, '"phase"', "either " + Pr.join(", "), '"' + String(t.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Bo.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(r) {
        e.find(function(a) {
          return a.name === r;
        }) == null && console.error(gt($u, String(t.name), r, r));
      });
    });
  });
}
function Au(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var a = t(r);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function Nu(e) {
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
var Vo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Iu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", qo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Yo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ku(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? qo : a;
  return function(s, c, f) {
    f === void 0 && (f = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qo, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: c
      },
      attributes: {},
      styles: {}
    }, d = [], v = !1, m = {
      state: u,
      setOptions: function(w) {
        var $ = typeof w == "function" ? w(u.options) : w;
        g(), u.options = Object.assign({}, i, u.options, $), u.scrollParents = {
          reference: Nt(s) ? dn(s) : s.contextElement ? dn(s.contextElement) : [],
          popper: dn(c)
        };
        var R = Ru(Nu([].concat(r, u.options.modifiers)));
        if (u.orderedModifiers = R.filter(function(I) {
          return I.enabled;
        }), process.env.NODE_ENV !== "production") {
          var P = Au([].concat(R, u.options.modifiers), function(I) {
            var U = I.name;
            return U;
          });
          if (Du(P), nt(u.options.placement) === Kn) {
            var y = u.orderedModifiers.find(function(I) {
              var U = I.name;
              return U === "flip";
            });
            y || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var O = ot(c), x = O.marginTop, S = O.marginRight, D = O.marginBottom, j = O.marginLeft;
          [x, S, D, j].some(function(I) {
            return parseFloat(I);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = u.elements, $ = w.reference, R = w.popper;
          if (!Yo($, R)) {
            process.env.NODE_ENV !== "production" && console.error(Vo);
            return;
          }
          u.rects = {
            reference: Su($, En(R), u.options.strategy === "fixed"),
            popper: Wr(R)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(I) {
            return u.modifiersData[I.name] = Object.assign({}, I.data);
          });
          for (var P = 0, y = 0; y < u.orderedModifiers.length; y++) {
            if (process.env.NODE_ENV !== "production" && (P += 1, P > 100)) {
              console.error(Iu);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, y = -1;
              continue;
            }
            var O = u.orderedModifiers[y], x = O.fn, S = O.options, D = S === void 0 ? {} : S, j = O.name;
            typeof x == "function" && (u = x({
              state: u,
              options: D,
              name: j,
              instance: m
            }) || u);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Pu(function() {
        return new Promise(function(_) {
          m.forceUpdate(), _(u);
        });
      }),
      destroy: function() {
        g(), v = !0;
      }
    };
    if (!Yo(s, c))
      return process.env.NODE_ENV !== "production" && console.error(Vo), m;
    m.setOptions(f).then(function(_) {
      !v && f.onFirstUpdate && f.onFirstUpdate(_);
    });
    function b() {
      u.orderedModifiers.forEach(function(_) {
        var w = _.name, $ = _.options, R = $ === void 0 ? {} : $, P = _.effect;
        if (typeof P == "function") {
          var y = P({
            state: u,
            name: w,
            instance: m,
            options: R
          }), O = function() {
          };
          d.push(y || O);
        }
      });
    }
    function g() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return m;
  };
}
var Mu = [tu, yu, Qc, qc, gu, fu, xu, Zc, vu], Lu = /* @__PURE__ */ ku({
  defaultModifiers: Mu
}), ju = typeof Element < "u", Fu = typeof Map == "function", Bu = typeof Set == "function", Vu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Mn(e, t) {
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
        if (!Mn(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (Fu && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Mn(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Bu && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Vu && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (ju && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !Mn(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var qu = function(t, n) {
  try {
    return Mn(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, Yu = [], Jn = function(t, n, r) {
  r === void 0 && (r = {});
  var a = $t.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || Yu
  }, l = $t.useState({
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
  }), s = l[0], c = l[1], f = $t.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(m) {
        var b = m.state, g = Object.keys(b.elements);
        mi.flushSync(function() {
          c({
            styles: Do(g.map(function(_) {
              return [_, b.styles[_] || {}];
            })),
            attributes: Do(g.map(function(_) {
              return [_, b.attributes[_]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), u = $t.useMemo(function() {
    var v = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return qu(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), d = $t.useRef();
  return Ao(function() {
    d.current && d.current.setOptions(u);
  }, [u]), Ao(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Lu, m = v(t, n, u);
      return d.current = m, function() {
        m.destroy(), d.current = null;
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
const yr = {
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, zu = Object.freeze({
  ESC: 27
}), si = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: l,
  isDisabled: s,
  isVisible: c,
  onClick: f
}) => {
  const [u, d] = X(!1), v = G(null), m = G(null), b = ue(() => t || ct("c-Toggletip-"), [t]), g = (y) => d(!1), _ = (y) => {
    d(!u), u && document.activeElement === v.current && !c && setTimeout(() => {
      d((O) => !O);
    }, 100), f && f(y);
  }, w = (y) => {
    (y.keyCode | y.which) === zu.ESC && u && d(!u);
  }, $ = xe.map(e, (y) => Ze(y) ? we(y, {
    ...y.props,
    "aria-describedby": t,
    ref: v,
    onClick: _,
    "data-open": u,
    ...c ? {} : { onBlur: g, onKeyDown: w }
  }) : null), { styles: R, attributes: P } = Jn(
    v.current,
    m.current,
    {
      placement: r,
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
  return !n || xe.count(e) > 1 || s ? /* @__PURE__ */ p(pt, { children: e }) : /* @__PURE__ */ N(pt, { children: [
    $,
    /* @__PURE__ */ p(Zt, { id: "js-toggletip-portal", children: /* @__PURE__ */ N(
      "div",
      {
        id: b,
        ref: m,
        role: "status",
        className: `${yr["c-toggletip"]} ${u && yr["c-toggletip--active"]} ${a ?? ""}`,
        style: R.popper,
        ...P.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: yr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: R.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
si.defaultProps = {
  placement: "auto"
};
si.propTypes = {
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
const _r = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, Wu = Object.freeze({
  ESC: 27
}), li = ({ children: e, id: t, label: n, placement: r, addClass: a, hasArrow: i, distance: l, isDisabled: s }) => {
  const [c, f] = X(!1), u = G(null), d = G(null), v = G(), m = ue(() => t || ct("c-tooltip-"), [t]), b = (x) => {
    c || f(!c);
  }, g = (x) => f(!1), _ = (x) => {
    (!c || document.activeElement !== u.current) && f(!c);
  }, w = () => {
    window.clearTimeout(v.current);
  }, $ = (x) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, R = (x) => {
    (x.keyCode | x.which) === Wu.ESC && c && f(!c);
  }, P = xe.map(e, (x) => Ze(x) ? we(x, {
    ...x.props,
    "aria-describedby": t,
    ref: u,
    onFocus: b,
    onBlur: g,
    onMouseEnter: _,
    onMouseLeave: $,
    onKeyDown: R
  }) : null), { styles: y, attributes: O } = Jn(u.current, d.current, {
    placement: r,
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
  });
  return !n || xe.count(e) > 1 || s ? /* @__PURE__ */ p(pt, { children: e }) : /* @__PURE__ */ N(pt, { children: [
    P,
    /* @__PURE__ */ p(Zt, { id: "js-tooltip-portal", children: /* @__PURE__ */ N(
      "div",
      {
        id: m,
        ref: d,
        role: "tooltip",
        "data-open": c,
        onMouseEnter: w,
        onMouseLeave: $,
        className: `${_r["c-tooltip"]} ${c && _r["c-tooltip--active"]} ${a ?? ""}`,
        style: y.popper,
        ...O.popper,
        children: [
          n,
          i && /* @__PURE__ */ p("div", { className: _r["c-tooltip__arrow"], "data-popper-arrow": !0, style: y.arrow })
        ]
      }
    ) })
  ] });
};
li.defaultProps = {
  placement: "auto"
};
li.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.node)]),
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
const Kr = Ke(), ci = ({ steps: e, isOpen: t, onClose: n, finalFocusRef: r, hideCloseButton: a, hideBackButton: i, ariaAttributes: l }) => {
  const [s, c] = X(null), f = [...e.reduce((g, _, w) => [...g, { id: w + 1, ..._ }], [])], u = (g) => f.filter((_) => _.id === g).reduce((_, w) => ({ ..._, ...w }), {}), d = (g) => {
    const _ = document.querySelector("#root");
    _.inert = g;
  }, v = () => {
    c((g) => g < f.length ? g + 1 : g);
  }, m = () => {
    c((g) => g > 0 + 1 ? g - 1 : g);
  }, b = () => {
    c(null), n(!t), d(!1), r && r.current.focus();
  };
  return Z(() => {
    t && (c(f.shift().id), d(!0));
  }, [t]), /* @__PURE__ */ p(
    Kr.Provider,
    {
      value: {
        isOpen: t,
        lastId: f.length,
        ...u(s),
        methods: {
          onNext: v,
          onPrev: m,
          onClose: b
        }
      },
      children: /* @__PURE__ */ p(Zt, { id: "js-tour", children: t && /* @__PURE__ */ N(pt, { children: [
        /* @__PURE__ */ p(Uu, {}),
        /* @__PURE__ */ p(ui, { ariaAttributes: l, hideCloseButton: a, hideBackButton: i })
      ] }) })
    }
  );
};
ci.defaultProps = {
  isOpen: !1,
  hideCloseButton: !1,
  hideBackButton: !1,
  ariaAttributes: {
    role: "dialog",
    tabIndex: -1,
    "aria-label": "Tour por la plataforma",
    "aria-modal": !0
  }
};
ci.propTypes = {
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
  ariaAttributes: o.shape({
    role: o.string,
    tabIndex: o.oneOfType([o.string, o.number]),
    "aria-label": o.string,
    "aria-modal": o.oneOfType([o.string, o.bool])
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
}, ui = ({ ariaAttributes: e, hideCloseButton: t, hideBackButton: n }) => {
  const { isOpen: r, lastId: a, methods: i, id: l, target: s, content: c, placement: f, distance: u, elementClass: d } = be(Kr), v = G(), { onClose: m, onPrev: b, onNext: g } = i, { styles: _, attributes: w } = Jn(document.querySelector(s), v.current, {
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
      { name: "eventListeners", enabled: r }
    ]
  }), $ = () => Ze(c) ? c : hi("p", { className: yt["tour-description"] }, [c]), R = () => {
    v.current.style.setProperty("--speed-movement", "0.8s"), g();
  };
  return /* @__PURE__ */ N(pt, { children: [
    /* @__PURE__ */ p("div", { className: `${yt["c-layout"]}` }),
    /* @__PURE__ */ N(
      "div",
      {
        id: `unique-id-tour-element-${l}`,
        ref: v,
        style: _.popper,
        className: `${yt["c-tour-content"]} ${r && "animate__animated animate__fadeIn animate__faster"} ${d ?? ""}`,
        ...e,
        ...w.popper,
        children: [
          /* @__PURE__ */ N("span", { className: "u-sr-only", children: [
            "Parte ",
            l,
            " de ",
            a,
            "."
          ] }),
          /* @__PURE__ */ p("div", { "aria-hidden": !0, className: yt["c-tour-progress"], children: /* @__PURE__ */ p("div", { className: yt["c-tour-progress-bar"], style: { transform: `scaleX(${l / a})` } }) }),
          $(),
          /* @__PURE__ */ N("div", { className: yt["c-tour-button-container"], children: [
            !t && /* @__PURE__ */ p(Dt, { hasAriaLabel: !0, label: "Salir", onClick: m, icon: { name: "close", size: "big" } }),
            !n && /* @__PURE__ */ p(Dt, { disabled: l === 1, hasAriaLabel: !0, label: "Anterior", onClick: b, icon: { name: "navigate_before", size: "big" } }),
            /* @__PURE__ */ p(
              Dt,
              {
                disabled: l === a,
                hasAriaLabel: !0,
                label: "Siguiente",
                onClick: R,
                icon: { name: "navigate_next", size: "big" }
              }
            )
          ] })
        ]
      }
    )
  ] });
};
ui.propTypes = {
  ariaAttributes: o.shape({
    role: o.string,
    tabIndex: o.oneOfType([o.string, o.number]),
    "aria-label": o.string,
    "aria-modal": o.oneOfType([o.string, o.bool])
  }),
  hideCloseButton: o.bool,
  hideBackButton: o.bool
};
const Uu = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r } = be(Kr), [a, i] = X({}), l = () => {
    const { x: s, y: c, width: f, height: u } = document.querySelector(n).getBoundingClientRect();
    i({
      width: `${f}px`,
      height: `${u}px`,
      top: `${c}px`,
      left: `${s}px`
    });
  };
  return Z(() => (n && l(), () => {
    i({});
  }), [n]), Z(() => {
    if (!e || !n)
      return;
    const s = (c) => {
      l();
    };
    return e && window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s);
    };
  }, [e, n]), /* @__PURE__ */ p(
    "div",
    {
      className: `${yt["c-tour-help"]} ${e && "animate__animated animate__fadeIn animate__faster animate__delay-2s"} ${r ?? ""}`,
      style: a,
      children: /* @__PURE__ */ p("span", { className: yt["c-tour-number"], children: t })
    }
  );
}, Hu = "_active_r3225_90", Gu = "_iconPulse_r3225_1", fe = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: Hu,
  iconPulse: Gu,
  "c-vid__progress-bg": "_c-vid__progress-bg_r3225_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_r3225_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_r3225_140",
  "c-vid__controls": "_c-vid__controls_r3225_150",
  "c-vid__button": "_c-vid__button_r3225_165",
  "c-vid__volume": "_c-vid__volume_r3225_180",
  "c-vid__volume-item": "_c-vid__volume-item_r3225_191",
  "c-vid__time": "_c-vid__time_r3225_202",
  "c-vid__subtitles": "_c-vid__subtitles_r3225_208"
}, di = ({ src: e, width: t = "1000", hasDescription: n, description: r, addClass: a, poster: i, ...l }) => {
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
  }), [m, b] = X({
    state: !0,
    label: "Volumen"
  }), [g, _] = X(100), [w, $] = X({
    state: !1,
    label: "Ver en pantalla completa"
  }), [R, P] = X(!1), [y, O] = X(100), x = G(null), S = G(null), D = G(null), j = G(null), I = G(null), U = G(null), q = G(null), te = G(null), [ce, re] = X(!1), ee = (A) => {
    A.classList.add(`${fe.active}`), setTimeout(() => {
      A.classList.remove(`${fe.active}`);
    }, 650);
  };
  function Ee() {
    const A = S.current;
    d.state ? (A.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (A.play(), v({
      state: !0,
      label: "Pausar video"
    })), ee(U.current);
  }
  function he() {
    const A = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, E = x.current;
    A ? ($({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : ($({
      state: !0,
      label: "Salir de pantalla completa"
    }), E.requestFullscreen ? E.requestFullscreen() : E.mozRequestFullScreen ? E.mozRequestFullScreen() : E.webkitRequestFullScreen ? E.webkitRequestFullScreen() : E.msRequestFullscreen && E.msRequestFullscreen());
  }
  function T(A) {
    const E = parseInt(A, 10), Q = E >= 3600 ? Math.floor(E / 3600) : 0, me = Math.floor((E - Q * 3600) / 60), Oe = E - Q * 3600 - me * 60, $e = F(V(Q)), at = F(V(me)), ut = F(V(Oe));
    return {
      hours: $e,
      minutes: at,
      seconds: ut
    };
  }
  function k(A) {
    const E = B(A.duration), Q = B(A.currentTime);
    u({
      totalSeconds: A.currentTime,
      hours: parseInt(T(A.currentTime).hours),
      minutes: parseInt(T(A.currentTime).minutes),
      seconds: parseInt(T(A.currentTime).seconds),
      string: Q
    }), c({
      totalSeconds: Math.floor(A.duration),
      hours: parseInt(T(A.duration).hours),
      minutes: parseInt(T(A.duration).minutes),
      seconds: parseInt(T(A.duration).seconds),
      string: E
    });
  }
  function B(A) {
    return parseInt(A, 10) <= 3600 ? `${T(A).minutes}:${T(A).seconds}` : `${T(A).hours}:${T(A).minutes}:${T(A).seconds}`;
  }
  function V(A) {
    return A < 10 ? A = "0" + A : A;
  }
  function F(A) {
    return isNaN(A) ? "00" : A;
  }
  function H(A) {
    const E = j.current, Q = S.current, Oe = A.nativeEvent.offsetX / E.offsetWidth * Q.duration;
    Q.currentTime = Oe;
  }
  function L(A) {
    const E = S.current, Q = A.target.value, me = Q / 100;
    O(Q), _(Q), E.volume = me, m.state || b({
      state: !0,
      label: "Volumen"
    });
  }
  const z = () => {
    if (m.state) {
      b({
        state: !1,
        label: "Mutear video"
      });
      const A = S.current, E = 0, Q = E;
      O(E), A.volume = Q;
    } else {
      b({
        state: !0,
        label: "Volumen"
      });
      const A = S.current, E = g, Q = E / 100;
      O(E), A.volume = Q;
    }
  }, W = function(A) {
    (A.keyCode || A.which) === 32 && Ee();
  }, J = function(A) {
    const E = Math.floor(j.current.getAttribute("aria-valuenow"));
    if (document.activeElement === I.current)
      return null;
    if ((A.keyCode || A.which) === 37) {
      const Q = E - 5;
      Q >= 0 ? S.current.currentTime = Q : S.current.currentTime = 0, ee(te.current);
    }
    if ((A.keyCode || A.which) === 39) {
      const Q = E + 5;
      Q >= S.current.duration ? S.current.currentTime = S.current.duration : S.current.currentTime = Q, ee(q.current);
    }
  }, Y = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return Z(() => {
    const A = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(A, "caption") && re(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(A, "volume") && O(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), Z(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: ce, volume: y }));
  }, [ce, y]), Z(() => (D.current ? D.current.addEventListener("error", () => {
    P(!0);
  }) : P(!0), e.caption && P(!1), () => {
    D.current && D.current.removeEventListener("error", () => {
      P(!0);
    });
  }), [e.caption]), /* @__PURE__ */ N("figure", { className: `${fe["c-vid"]} ${a}`, style: { maxWidth: `${t}px` }, onKeyDown: (A) => J(A), ...l, children: [
    /* @__PURE__ */ N("div", { className: `${fe["c-vid__container"]} ${a}`, ref: x, children: [
      /* @__PURE__ */ N("div", { className: fe["c-vid__wrapper"], children: [
        /* @__PURE__ */ N(
          "video",
          {
            ref: S,
            onTimeUpdate: (A) => k(A.target),
            onLoadedData: (A) => k(A.target),
            onClick: Ee,
            className: `${fe["c-vid__video"]} ${ce ? "" : fe["no-captions"]}`,
            ...i && { poster: i },
            children: [
              /* @__PURE__ */ p("source", { src: e.video }),
              e.caption ? /* @__PURE__ */ p("track", { ref: D, src: e.caption, label: "Subtítulos en español", kind: "subtitles", srcLang: "es", default: !0 }) : ""
            ]
          }
        ),
        /* @__PURE__ */ N("div", { className: fe["c-vid__icon-container"], children: [
          /* @__PURE__ */ p("div", { ref: te, className: fe["c-vid__icon"], children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: U, className: fe["c-vid__icon"], children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: q, className: fe["c-vid__icon"], children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
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
          "aria-valuetext": Y(),
          tabIndex: "0",
          onKeyDown: W,
          className: fe["c-vid__progress-bg"],
          onClick: H,
          ref: j,
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
            onClick: Ee,
            "data-description": "Este botón reproduce el video",
            children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            className: `${fe["c-vid__button"]} tour`,
            "aria-label": m.label,
            "data-description": "Este botón controla el volumen",
            onClick: z,
            children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: m.state ? /* @__PURE__ */ p("path", { id: "volume_on", d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z" }) : /* @__PURE__ */ p("path", { id: "volume_off", d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z" }) }) })
          }
        ),
        /* @__PURE__ */ N("label", { className: fe["c-vid__volume"], htmlFor: "volumeControl", children: [
          /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: fe["c-vid__volume-item"],
              ref: I,
              id: "volumeControl",
              type: "range",
              min: "0",
              max: "100",
              step: "5",
              value: y,
              onChange: L,
              "aria-valuetext": `${y}%`
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
            disabled: R,
            "aria-pressed": R ? void 0 : ce,
            onClick: () => re(!ce),
            "aria-label": "Subtítulos",
            className: `${fe["c-vid__button"]} ${fe["c-vid__subtitles"]}`,
            children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: R ? /* @__PURE__ */ p("path", { id: "closed_caption_disabled", d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z" }) : /* @__PURE__ */ p("path", { id: "closed_caption", d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z" }) }) })
          }
        ),
        /* @__PURE__ */ p("button", { className: fe["c-vid__button"], "aria-label": w.label, onClick: he, children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: w.state ? /* @__PURE__ */ p("path", { id: "fullscreen_exit", d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z" }) : /* @__PURE__ */ p("path", { id: "fullscreen", d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z" }) }) }) })
      ] })
    ] }),
    n && /* @__PURE__ */ N("figcaption", { className: fe["c-vid__caption"], children: [
      /* @__PURE__ */ N("strong", { children: [
        r.title,
        ":"
      ] }),
      " ",
      r.content
    ] })
  ] });
};
di.propTypes = {
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
di.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
const Xr = Ke(), fi = ({ children: e, isVisible: t }) => {
  const [n, r] = X(!1), a = G(), i = () => r(!n), l = (s) => {
    a.current || (a.current = s);
  };
  return Z(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p(Xr.Provider, { value: { isOpen: n, onOpen: i, setRefButton: l, refButton: a }, children: e });
};
fi.defaultProps = {
  isVisible: !1
};
fi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const Zu = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r } = be(Xr);
  if (xe.count(e) > 1)
    return null;
  const a = (l) => {
    n(), t && t(l);
  }, i = (l) => Ze(l) ? we(l, {
    ...l.props,
    ref: r,
    onClick: a
  }) : null;
  return xe.map(e, i);
};
Zu.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onClick: o.func
};
const wr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, xr = Object.freeze({
  ESC: 27,
  TAB: 9
}), pi = ({ children: e, addClass: t, hasArrow: n, isDisabled: r, distance: a, placement: i }) => {
  const { isOpen: l, refButton: s } = be(Xr), c = G(), f = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', u = (m) => {
    const b = c.current.querySelectorAll(f), g = s.current, _ = b[0], w = b[b.length - 1];
    if ((m.keyCode || m.which) === xr.TAB && document.activeElement === w)
      return g.focus(), m.preventDefault();
    m.shiftKey && (m.keyCode || m.which) === xr.TAB && document.activeElement === _ && (g.focus(), m.preventDefault()), (m.keyCode || m.which) === xr.ESC && g.focus();
  }, { styles: d, attributes: v } = Jn(s.current, c.current, {
    placement: i,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, a || 8]
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
  });
  return Z(() => {
    l && c.current.focus();
  }, [l]), r ? /* @__PURE__ */ p(pt, { children: e }) : /* @__PURE__ */ p(Zt, { id: "js-popover-modal-portal", children: /* @__PURE__ */ N(
    "div",
    {
      ref: c,
      role: "status",
      tabIndex: -1,
      className: `${wr["c-popover-modal"]} ${l && wr["c-popover-modal--active"]} ${t ?? ""}`,
      style: d.popper,
      onKeyDown: u,
      ...v.popper,
      children: [
        e,
        n && /* @__PURE__ */ p("div", { className: wr["c-popover-modal__arrow"], "data-popper-arrow": !0, style: d.arrow })
      ]
    }
  ) });
};
pi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
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
pi.defaultProps = {
  hasArrow: !1,
  placement: "auto"
};
const Ku = (e, t) => {
  const [n, r] = X(() => {
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
      r(l), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(l));
    } catch (l) {
      console.warn(`Error in useLocalStorage: ${l}`);
    }
  }];
}, Xu = (e, t, n) => {
  const [r, a] = X(n), i = e.map((s) => window.matchMedia(s)), l = () => {
    const s = i.findIndex((c) => c.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return Z(() => {
    a(l);
    const s = (c) => a(l);
    return i.forEach((c) => c.addEventListener("change", s)), () => {
      i.forEach((c) => c.removeEventListener("change", s));
    };
  }, []), r;
}, nd = () => {
  const [e, t] = Ku("dark-mode-enabled"), n = Xu(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return Z(() => {
    t(n);
  }, [n]), Z(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, Ju = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), rd = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || Ju, [a, i] = X(!1), [l, s] = X(null);
  return Z(() => {
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
        threshold: r
      }
    );
    return c.observe(l), () => {
      c.unobserve(l);
    };
  }, [r, n, t, l]), [s, a];
}, vi = (e) => {
  let t = {};
  for (const n in e)
    if (typeof e[n] == "object") {
      const r = vi(e[n]);
      for (const a in r)
        t = {
          ...t,
          [n.includes("accents") || n.includes("palette") ? a : `${n}-${a}`]: r[a]
        };
    } else
      t[n] = e[n];
  return t;
}, od = (e) => vi(e);
export {
  $i as Accordion,
  Zo as AccordionButton,
  Ko as AccordionItem,
  Xo as AccordionPanel,
  Jo as Audio,
  Dt as Button,
  gc as ButtonSection,
  ta as CheckBox,
  xs as CheckBoxGroup,
  Os as Col,
  Cs as Content,
  xa as DragAndDrop,
  wa as DragAndDropContext,
  Ea as Draggable,
  Ta as Droppable,
  td as Filter,
  Oa as GeneralDraggable,
  _e as Icon,
  Sa as Image,
  Ca as Input,
  rc as InputGroup,
  Pa as InputLeftAddon,
  $a as InputRightAddon,
  Ra as InputStyle,
  ac as Kbd,
  Da as Link,
  ic as List,
  Na as ListItem,
  Ia as Modal,
  uc as ModalCloseButton,
  ka as ModalContent,
  Hn as ModalContext,
  Ma as ModalOverlay,
  za as NavSection,
  Ba as NumberDecrementStepper,
  Va as NumberIncrementStepper,
  La as NumberInput,
  Gn as NumberInputContext,
  ja as NumberInputField,
  Fa as NumberInputStepper,
  sc as OrderedList,
  qa as Pagination,
  qr as PaginationItem,
  vc as Panel,
  Zn as PanelContext,
  yc as Paper,
  fi as PopoverModal,
  Zu as PopoverModalButton,
  pi as PopoverModalContent,
  Xr as PopoverModalContext,
  Zt as Portal,
  Oc as Row,
  Ya as Section,
  Wa as Select,
  Sc as SelectGroup,
  Ua as Switch,
  Ha as Tab,
  Ga as TabList,
  Za as TabPanel,
  Ka as TabPanels,
  Cc as Tabs,
  Yr as TabsContext,
  Xa as TextArea,
  Rc as ThemeProvider,
  si as Toggletip,
  li as Tooltip,
  ci as Tour,
  Kr as TourContext,
  ui as TourElement,
  Uu as TourHelpLayer,
  lc as UnorderedList,
  di as Video,
  od as createTheme,
  nd as useDarkMode,
  Ku as useLocalStorage,
  Xu as useMedia,
  rd as useOnScreen,
  dc as usePagination,
  xc as usePortal
};
