import * as $t from "react";
import Vo, { Children as Se, useState as H, useEffect as U, isValidElement as He, cloneElement as Oe, forwardRef as ft, useRef as J, useMemo as le, useLayoutEffect as Yo, useCallback as Ce, createContext as Ke, memo as qo, useReducer as Sn, useContext as ye, createElement as da } from "react";
import * as pa from "react-dom";
import { unstable_batchedUpdates as Ht, createPortal as zo } from "react-dom";
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, o = { exports: {} }, Xr = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function va() {
  if (Xn)
    return se;
  Xn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function $(y) {
    if (typeof y == "object" && y !== null) {
      var x = y.$$typeof;
      switch (x) {
        case t:
          switch (y = y.type, y) {
            case l:
            case d:
            case n:
            case a:
            case i:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case u:
                case b:
                case h:
                case c:
                  return y;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function D(y) {
    return $(y) === d;
  }
  return se.AsyncMode = l, se.ConcurrentMode = d, se.ContextConsumer = s, se.ContextProvider = c, se.Element = t, se.ForwardRef = u, se.Fragment = n, se.Lazy = b, se.Memo = h, se.Portal = r, se.Profiler = a, se.StrictMode = i, se.Suspense = f, se.isAsyncMode = function(y) {
    return D(y) || $(y) === l;
  }, se.isConcurrentMode = D, se.isContextConsumer = function(y) {
    return $(y) === s;
  }, se.isContextProvider = function(y) {
    return $(y) === c;
  }, se.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, se.isForwardRef = function(y) {
    return $(y) === u;
  }, se.isFragment = function(y) {
    return $(y) === n;
  }, se.isLazy = function(y) {
    return $(y) === b;
  }, se.isMemo = function(y) {
    return $(y) === h;
  }, se.isPortal = function(y) {
    return $(y) === r;
  }, se.isProfiler = function(y) {
    return $(y) === a;
  }, se.isStrictMode = function(y) {
    return $(y) === i;
  }, se.isSuspense = function(y) {
    return $(y) === f;
  }, se.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === d || y === a || y === i || y === f || y === v || typeof y == "object" && y !== null && (y.$$typeof === b || y.$$typeof === h || y.$$typeof === c || y.$$typeof === s || y.$$typeof === u || y.$$typeof === _ || y.$$typeof === O || y.$$typeof === P || y.$$typeof === g);
  }, se.typeOf = $, se;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function ha() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function $(E) {
      return typeof E == "string" || typeof E == "function" || E === n || E === d || E === a || E === i || E === f || E === v || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === h || E.$$typeof === c || E.$$typeof === s || E.$$typeof === u || E.$$typeof === _ || E.$$typeof === O || E.$$typeof === P || E.$$typeof === g);
    }
    function D(E) {
      if (typeof E == "object" && E !== null) {
        var Q = E.$$typeof;
        switch (Q) {
          case t:
            var me = E.type;
            switch (me) {
              case l:
              case d:
              case n:
              case a:
              case i:
              case f:
                return me;
              default:
                var we = me && me.$$typeof;
                switch (we) {
                  case s:
                  case u:
                  case b:
                  case h:
                  case c:
                    return we;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var y = l, x = d, w = s, S = c, I = t, L = u, M = n, Z = b, K = h, re = r, de = a, ie = i, ee = f, _e = !1;
    function he(E) {
      return _e || (_e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(E) || D(E) === l;
    }
    function T(E) {
      return D(E) === d;
    }
    function A(E) {
      return D(E) === s;
    }
    function B(E) {
      return D(E) === c;
    }
    function V(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function j(E) {
      return D(E) === u;
    }
    function W(E) {
      return D(E) === n;
    }
    function F(E) {
      return D(E) === b;
    }
    function q(E) {
      return D(E) === h;
    }
    function z(E) {
      return D(E) === r;
    }
    function X(E) {
      return D(E) === a;
    }
    function Y(E) {
      return D(E) === i;
    }
    function C(E) {
      return D(E) === f;
    }
    ce.AsyncMode = y, ce.ConcurrentMode = x, ce.ContextConsumer = w, ce.ContextProvider = S, ce.Element = I, ce.ForwardRef = L, ce.Fragment = M, ce.Lazy = Z, ce.Memo = K, ce.Portal = re, ce.Profiler = de, ce.StrictMode = ie, ce.Suspense = ee, ce.isAsyncMode = he, ce.isConcurrentMode = T, ce.isContextConsumer = A, ce.isContextProvider = B, ce.isElement = V, ce.isForwardRef = j, ce.isFragment = W, ce.isLazy = F, ce.isMemo = q, ce.isPortal = z, ce.isProfiler = X, ce.isStrictMode = Y, ce.isSuspense = C, ce.isValidElementType = $, ce.typeOf = D;
  }()), ce;
}
var Zn;
function Wo() {
  return Zn || (Zn = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = va() : e.exports = ha();
  }(Xr)), Xr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jr, Qn;
function ma() {
  if (Qn)
    return Jr;
  Qn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var c = {}, s = 0; s < 10; s++)
        c["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(c).map(function(u) {
        return c[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        d[u] = u;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Jr = i() ? Object.assign : function(a, c) {
    for (var s, l = n(a), d, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var f in s)
        t.call(s, f) && (l[f] = s[f]);
      if (e) {
        d = e(s);
        for (var v = 0; v < d.length; v++)
          r.call(s, d[v]) && (l[d[v]] = s[d[v]]);
      }
    }
    return l;
  }, Jr;
}
var Zr, eo;
function Rn() {
  if (eo)
    return Zr;
  eo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zr = e, Zr;
}
var Qr, to;
function Uo() {
  return to || (to = 1, Qr = Function.call.bind(Object.prototype.hasOwnProperty)), Qr;
}
var en, ro;
function ga() {
  if (ro)
    return en;
  ro = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Rn(), r = {}, n = Uo();
    e = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function i(a, c, s, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (n(a, u)) {
          var f;
          try {
            if (typeof a[u] != "function") {
              var v = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            f = a[u](c, u, l, s, null, t);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + s + " type: " + f.message + (h != null ? h : "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, en = i, en;
}
var tn, no;
function ba() {
  if (no)
    return tn;
  no = 1;
  var e = Wo(), t = ma(), r = Rn(), n = Uo(), i = ga(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return tn = function(s, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f(T) {
      var A = T && (d && T[d] || T[u]);
      if (typeof A == "function")
        return A;
    }
    var v = "<<anonymous>>", h = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: P(),
      arrayOf: $,
      element: D(),
      elementType: y(),
      instanceOf: x,
      node: L(),
      objectOf: S,
      oneOf: w,
      oneOfType: I,
      shape: Z,
      exact: K
    };
    function b(T, A) {
      return T === A ? T !== 0 || 1 / T === 1 / A : T !== T && A !== A;
    }
    function g(T, A) {
      this.message = T, this.data = A && typeof A == "object" ? A : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function _(T) {
      if (process.env.NODE_ENV !== "production")
        var A = {}, B = 0;
      function V(W, F, q, z, X, Y, C) {
        if (z = z || v, Y = Y || q, C !== r) {
          if (l) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = z + ":" + q;
            !A[Q] && B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), A[Q] = !0, B++);
          }
        }
        return F[q] == null ? W ? F[q] === null ? new g("The " + X + " `" + Y + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new g("The " + X + " `" + Y + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : T(F, q, z, X, Y);
      }
      var j = V.bind(null, !1);
      return j.isRequired = V.bind(null, !0), j;
    }
    function O(T) {
      function A(B, V, j, W, F, q) {
        var z = B[V], X = ie(z);
        if (X !== T) {
          var Y = ee(z);
          return new g(
            "Invalid " + W + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return _(A);
    }
    function P() {
      return _(c);
    }
    function $(T) {
      function A(B, V, j, W, F) {
        if (typeof T != "function")
          return new g("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var q = B[V];
        if (!Array.isArray(q)) {
          var z = ie(q);
          return new g("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an array."));
        }
        for (var X = 0; X < q.length; X++) {
          var Y = T(q, X, j, W, F + "[" + X + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return _(A);
    }
    function D() {
      function T(A, B, V, j, W) {
        var F = A[B];
        if (!s(F)) {
          var q = ie(F);
          return new g("Invalid " + j + " `" + W + "` of type " + ("`" + q + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(T);
    }
    function y() {
      function T(A, B, V, j, W) {
        var F = A[B];
        if (!e.isValidElementType(F)) {
          var q = ie(F);
          return new g("Invalid " + j + " `" + W + "` of type " + ("`" + q + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(T);
    }
    function x(T) {
      function A(B, V, j, W, F) {
        if (!(B[V] instanceof T)) {
          var q = T.name || v, z = he(B[V]);
          return new g("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return _(A);
    }
    function w(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function A(B, V, j, W, F) {
        for (var q = B[V], z = 0; z < T.length; z++)
          if (b(q, T[z]))
            return null;
        var X = JSON.stringify(T, function(C, E) {
          var Q = ee(E);
          return Q === "symbol" ? String(E) : E;
        });
        return new g("Invalid " + W + " `" + F + "` of value `" + String(q) + "` " + ("supplied to `" + j + "`, expected one of " + X + "."));
      }
      return _(A);
    }
    function S(T) {
      function A(B, V, j, W, F) {
        if (typeof T != "function")
          return new g("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var q = B[V], z = ie(q);
        if (z !== "object")
          return new g("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an object."));
        for (var X in q)
          if (n(q, X)) {
            var Y = T(q, X, j, W, F + "." + X, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return _(A);
    }
    function I(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var A = 0; A < T.length; A++) {
        var B = T[A];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _e(B) + " at index " + A + "."
          ), c;
      }
      function V(j, W, F, q, z) {
        for (var X = [], Y = 0; Y < T.length; Y++) {
          var C = T[Y], E = C(j, W, F, q, z, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && X.push(E.data.expectedType);
        }
        var Q = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new g("Invalid " + q + " `" + z + "` supplied to " + ("`" + F + "`" + Q + "."));
      }
      return _(V);
    }
    function L() {
      function T(A, B, V, j, W) {
        return re(A[B]) ? null : new g("Invalid " + j + " `" + W + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return _(T);
    }
    function M(T, A, B, V, j) {
      return new g(
        (T || "React class") + ": " + A + " type `" + B + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function Z(T) {
      function A(B, V, j, W, F) {
        var q = B[V], z = ie(q);
        if (z !== "object")
          return new g("Invalid " + W + " `" + F + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var X in T) {
          var Y = T[X];
          if (typeof Y != "function")
            return M(j, W, F, X, ee(Y));
          var C = Y(q, X, j, W, F + "." + X, r);
          if (C)
            return C;
        }
        return null;
      }
      return _(A);
    }
    function K(T) {
      function A(B, V, j, W, F) {
        var q = B[V], z = ie(q);
        if (z !== "object")
          return new g("Invalid " + W + " `" + F + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        var X = t({}, B[V], T);
        for (var Y in X) {
          var C = T[Y];
          if (n(T, Y) && typeof C != "function")
            return M(j, W, F, Y, ee(C));
          if (!C)
            return new g(
              "Invalid " + W + " `" + F + "` key `" + Y + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(B[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var E = C(q, Y, j, W, F + "." + Y, r);
          if (E)
            return E;
        }
        return null;
      }
      return _(A);
    }
    function re(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(re);
          if (T === null || s(T))
            return !0;
          var A = f(T);
          if (A) {
            var B = A.call(T), V;
            if (A !== T.entries) {
              for (; !(V = B.next()).done; )
                if (!re(V.value))
                  return !1;
            } else
              for (; !(V = B.next()).done; ) {
                var j = V.value;
                if (j && !re(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function de(T, A) {
      return T === "symbol" ? !0 : A ? A["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && A instanceof Symbol : !1;
    }
    function ie(T) {
      var A = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : de(A, T) ? "symbol" : A;
    }
    function ee(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var A = ie(T);
      if (A === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return A;
    }
    function _e(T) {
      var A = ee(T);
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
    function he(T) {
      return !T.constructor || !T.constructor.name ? v : T.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, tn;
}
var rn, oo;
function ya() {
  if (oo)
    return rn;
  oo = 1;
  var e = Rn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, rn = function() {
    function n(c, s, l, d, u, f) {
      if (f !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, rn;
}
if (process.env.NODE_ENV !== "production") {
  var _a = Wo(), xa = !0;
  o.exports = ba()(_a.isElement, xa);
} else
  o.exports = ya()();
const wa = (e) => {
  var t, r;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((r = e == null ? void 0 : e.type) == null ? void 0 : r.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ie = (e, t) => Se.toArray(e).filter((r) => t.indexOf(wa(r)) !== -1);
var Fr = { exports: {} }, Kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io;
function Ea() {
  if (io)
    return Kt;
  io = 1;
  var e = Vo, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, d) {
    var u, f = {}, v = null, h = null;
    d !== void 0 && (v = "" + d), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (f[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: t, type: s, key: v, ref: h, props: f, _owner: i.current };
  }
  return Kt.Fragment = r, Kt.jsx = c, Kt.jsxs = c, Kt;
}
var Xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function Ta() {
  return ao || (ao = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Vo, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, g = "@@iterator";
    function _(p) {
      if (p === null || typeof p != "object")
        return null;
      var R = b && p[b] || p[g];
      return typeof R == "function" ? R : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(p) {
      {
        for (var R = arguments.length, k = new Array(R > 1 ? R - 1 : 0), G = 1; G < R; G++)
          k[G - 1] = arguments[G];
        $("error", p, k);
      }
    }
    function $(p, R, k) {
      {
        var G = O.ReactDebugCurrentFrame, ae = G.getStackAddendum();
        ae !== "" && (R += "%s", k = k.concat([ae]));
        var ue = k.map(function(ne) {
          return String(ne);
        });
        ue.unshift("Warning: " + R), Function.prototype.apply.call(console[p], console, ue);
      }
    }
    var D = !1, y = !1, x = !1, w = !1, S = !1, I;
    I = Symbol.for("react.module.reference");
    function L(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === n || p === a || S || p === i || p === d || p === u || w || p === h || D || y || x || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === f || p.$$typeof === c || p.$$typeof === s || p.$$typeof === l || p.$$typeof === I || p.getModuleId !== void 0));
    }
    function M(p, R, k) {
      var G = p.displayName;
      if (G)
        return G;
      var ae = R.displayName || R.name || "";
      return ae !== "" ? k + "(" + ae + ")" : k;
    }
    function Z(p) {
      return p.displayName || "Context";
    }
    function K(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case s:
            var R = p;
            return Z(R) + ".Consumer";
          case c:
            var k = p;
            return Z(k._context) + ".Provider";
          case l:
            return M(p, p.render, "ForwardRef");
          case f:
            var G = p.displayName || null;
            return G !== null ? G : K(p.type) || "Memo";
          case v: {
            var ae = p, ue = ae._payload, ne = ae._init;
            try {
              return K(ne(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, de = 0, ie, ee, _e, he, T, A, B;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function j() {
      {
        if (de === 0) {
          ie = console.log, ee = console.info, _e = console.warn, he = console.error, T = console.group, A = console.groupCollapsed, B = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        de++;
      }
    }
    function W() {
      {
        if (de--, de === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, p, {
              value: ie
            }),
            info: re({}, p, {
              value: ee
            }),
            warn: re({}, p, {
              value: _e
            }),
            error: re({}, p, {
              value: he
            }),
            group: re({}, p, {
              value: T
            }),
            groupCollapsed: re({}, p, {
              value: A
            }),
            groupEnd: re({}, p, {
              value: B
            })
          });
        }
        de < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = O.ReactCurrentDispatcher, q;
    function z(p, R, k) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (ae) {
            var G = ae.stack.trim().match(/\n( *(at )?)/);
            q = G && G[1] || "";
          }
        return `
` + q + p;
      }
    }
    var X = !1, Y;
    {
      var C = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new C();
    }
    function E(p, R) {
      if (!p || X)
        return "";
      {
        var k = Y.get(p);
        if (k !== void 0)
          return k;
      }
      var G;
      X = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = F.current, F.current = null, j();
      try {
        if (R) {
          var ne = function() {
            throw Error();
          };
          if (Object.defineProperty(ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ne, []);
            } catch (lt) {
              G = lt;
            }
            Reflect.construct(p, [], ne);
          } else {
            try {
              ne.call();
            } catch (lt) {
              G = lt;
            }
            p.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (lt) {
            G = lt;
          }
          p();
        }
      } catch (lt) {
        if (lt && G && typeof lt.stack == "string") {
          for (var te = lt.stack.split(`
`), Ae = G.stack.split(`
`), ge = te.length - 1, be = Ae.length - 1; ge >= 1 && be >= 0 && te[ge] !== Ae[be]; )
            be--;
          for (; ge >= 1 && be >= 0; ge--, be--)
            if (te[ge] !== Ae[be]) {
              if (ge !== 1 || be !== 1)
                do
                  if (ge--, be--, be < 0 || te[ge] !== Ae[be]) {
                    var ze = `
` + te[ge].replace(" at new ", " at ");
                    return p.displayName && ze.includes("<anonymous>") && (ze = ze.replace("<anonymous>", p.displayName)), typeof p == "function" && Y.set(p, ze), ze;
                  }
                while (ge >= 1 && be >= 0);
              break;
            }
        }
      } finally {
        X = !1, F.current = ue, W(), Error.prepareStackTrace = ae;
      }
      var It = p ? p.displayName || p.name : "", Kn = It ? z(It) : "";
      return typeof p == "function" && Y.set(p, Kn), Kn;
    }
    function Q(p, R, k) {
      return E(p, !1);
    }
    function me(p) {
      var R = p.prototype;
      return !!(R && R.isReactComponent);
    }
    function we(p, R, k) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return E(p, me(p));
      if (typeof p == "string")
        return z(p);
      switch (p) {
        case d:
          return z("Suspense");
        case u:
          return z("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return Q(p.render);
          case f:
            return we(p.type, R, k);
          case v: {
            var G = p, ae = G._payload, ue = G._init;
            try {
              return we(ue(ae), R, k);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, ot = {}, st = O.ReactDebugCurrentFrame;
    function it(p) {
      if (p) {
        var R = p._owner, k = we(p.type, p._source, R ? R.type : null);
        st.setExtraStackFrame(k);
      } else
        st.setExtraStackFrame(null);
    }
    function Ee(p, R, k, G, ae) {
      {
        var ue = Function.call.bind($e);
        for (var ne in p)
          if (ue(p, ne)) {
            var te = void 0;
            try {
              if (typeof p[ne] != "function") {
                var Ae = Error((G || "React class") + ": " + k + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ae.name = "Invariant Violation", Ae;
              }
              te = p[ne](R, ne, G, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              te = ge;
            }
            te && !(te instanceof Error) && (it(ae), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", k, ne, typeof te), it(null)), te instanceof Error && !(te.message in ot) && (ot[te.message] = !0, it(ae), P("Failed %s type: %s", k, te.message), it(null));
          }
      }
    }
    var Je = Array.isArray;
    function Ze(p) {
      return Je(p);
    }
    function _t(p) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, k = R && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return k;
      }
    }
    function dt(p) {
      try {
        return xt(p), !1;
      } catch {
        return !0;
      }
    }
    function xt(p) {
      return "" + p;
    }
    function wt(p) {
      if (dt(p))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _t(p)), xt(p);
    }
    var Ne = O.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pt, Ut, Ye;
    Ye = {};
    function xr(p) {
      if ($e.call(p, "ref")) {
        var R = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Ur(p) {
      if ($e.call(p, "key")) {
        var R = Object.getOwnPropertyDescriptor(p, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function Gr(p, R) {
      if (typeof p.ref == "string" && Ne.current && R && Ne.current.stateNode !== R) {
        var k = K(Ne.current.type);
        Ye[k] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Ne.current.type), p.ref), Ye[k] = !0);
      }
    }
    function wr(p, R) {
      {
        var k = function() {
          pt || (pt = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function Hr(p, R) {
      {
        var k = function() {
          Ut || (Ut = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Er = function(p, R, k, G, ae, ue, ne) {
      var te = {
        $$typeof: t,
        type: p,
        key: R,
        ref: k,
        props: ne,
        _owner: ue
      };
      return te._store = {}, Object.defineProperty(te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function Kr(p, R, k, G, ae) {
      {
        var ue, ne = {}, te = null, Ae = null;
        k !== void 0 && (wt(k), te = "" + k), Ur(R) && (wt(R.key), te = "" + R.key), xr(R) && (Ae = R.ref, Gr(R, ae));
        for (ue in R)
          $e.call(R, ue) && !Qe.hasOwnProperty(ue) && (ne[ue] = R[ue]);
        if (p && p.defaultProps) {
          var ge = p.defaultProps;
          for (ue in ge)
            ne[ue] === void 0 && (ne[ue] = ge[ue]);
        }
        if (te || Ae) {
          var be = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          te && wr(ne, be), Ae && Hr(ne, be);
        }
        return Er(p, te, Ae, ae, G, Ne.current, ne);
      }
    }
    var Gt = O.ReactCurrentOwner, Tr = O.ReactDebugCurrentFrame;
    function ve(p) {
      if (p) {
        var R = p._owner, k = we(p.type, p._source, R ? R.type : null);
        Tr.setExtraStackFrame(k);
      } else
        Tr.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Pe(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function et() {
      {
        if (Gt.current) {
          var p = K(Gt.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function ke(p) {
      {
        if (p !== void 0) {
          var R = p.fileName.replace(/^.*[\\\/]/, ""), k = p.lineNumber;
          return `

Check your code at ` + R + ":" + k + ".";
        }
        return "";
      }
    }
    var Me = {};
    function qe(p) {
      {
        var R = et();
        if (!R) {
          var k = typeof p == "string" ? p : p.displayName || p.name;
          k && (R = `

Check the top-level render call using <` + k + ">.");
        }
        return R;
      }
    }
    function ct(p, R) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var k = qe(R);
        if (Me[k])
          return;
        Me[k] = !0;
        var G = "";
        p && p._owner && p._owner !== Gt.current && (G = " It was passed a child from " + K(p._owner.type) + "."), ve(p), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, G), ve(null);
      }
    }
    function Fe(p, R) {
      {
        if (typeof p != "object")
          return;
        if (Ze(p))
          for (var k = 0; k < p.length; k++) {
            var G = p[k];
            Pe(G) && ct(G, R);
          }
        else if (Pe(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var ae = _(p);
          if (typeof ae == "function" && ae !== p.entries)
            for (var ue = ae.call(p), ne; !(ne = ue.next()).done; )
              Pe(ne.value) && ct(ne.value, R);
        }
      }
    }
    function Et(p) {
      {
        var R = p.type;
        if (R == null || typeof R == "string")
          return;
        var k;
        if (typeof R == "function")
          k = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === l || R.$$typeof === f))
          k = R.propTypes;
        else
          return;
        if (k) {
          var G = K(R);
          Ee(k, p.props, "prop", G, p);
        } else if (R.PropTypes !== void 0 && !Re) {
          Re = !0;
          var ae = K(R);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(p) {
      {
        for (var R = Object.keys(p.props), k = 0; k < R.length; k++) {
          var G = R[k];
          if (G !== "children" && G !== "key") {
            ve(p), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), ve(null);
            break;
          }
        }
        p.ref !== null && (ve(p), P("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function Ot(p, R, k, G, ae, ue) {
      {
        var ne = L(p);
        if (!ne) {
          var te = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = ke(ae);
          Ae ? te += Ae : te += et();
          var ge;
          p === null ? ge = "null" : Ze(p) ? ge = "array" : p !== void 0 && p.$$typeof === t ? (ge = "<" + (K(p.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof p, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, te);
        }
        var be = Kr(p, R, k, ae, ue);
        if (be == null)
          return be;
        if (ne) {
          var ze = R.children;
          if (ze !== void 0)
            if (G)
              if (Ze(ze)) {
                for (var It = 0; It < ze.length; It++)
                  Fe(ze[It], p);
                Object.freeze && Object.freeze(ze);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(ze, p);
        }
        return p === n ? Tt(be) : Et(be), be;
      }
    }
    function At(p, R, k) {
      return Ot(p, R, k, !0);
    }
    function Or(p, R, k) {
      return Ot(p, R, k, !1);
    }
    var St = Or, Rt = At;
    Xt.Fragment = n, Xt.jsx = St, Xt.jsxs = Rt;
  }()), Xt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ea() : e.exports = Ta();
})(Fr);
const gt = Fr.exports.Fragment, m = Fr.exports.jsx, N = Fr.exports.jsxs, Oa = ({
  children: e,
  allowMultiple: t,
  defaultIndex: r
}) => {
  const [n, i] = H(), a = (s) => {
    t ? n.includes(s) ? i(n.filter((l) => l !== s)) : i([...n, s]) : i(s);
  };
  U(() => (i(t ? r || [] : r != null ? r : null), () => {
    i(null);
  }), [t, r]);
  const c = Se.map(e, (s, l) => He(s) ? Oe(s, {
    ...s.props,
    id: l,
    isOpen: n,
    onToggle: a
  }) : null);
  return /* @__PURE__ */ m("div", {
    children: Ie(c, ["AccordionItem"])
  });
};
Oa.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  allowMultiple: o.exports.bool,
  defaultIndex: o.exports.oneOfType([o.exports.array, o.exports.number])
};
const fe = (e) => (t, r, n) => {
  if (t[r] !== e)
    return new Error(
      `'${r}' in '${n}' 

 NO puedes pasar un valor de props para '${r}'.La propiedad tenia 2 guiones abajo por un raz\xF3n, As\xED que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro d\xEDa sin errores.`
    );
}, Mt = {
  "c-accordion__item": "_c-accordion__item_1xs3f_1",
  "c-accordion__button": "_c-accordion__button_1xs3f_10",
  "c-accordion": "_c-accordion_1xs3f_1",
  "c-accordion__panel": "_c-accordion__panel_1xs3f_33",
  "c-accordion__panel--active": "_c-accordion__panel--active_1xs3f_38",
  "c-accordion__panel-content": "_c-accordion__panel-content_1xs3f_42"
}, Go = ({
  children: e,
  id: t,
  onExpanded: r,
  isExpanded: n,
  expanded: i,
  addClass: a,
  icon: c,
  __TYPE: s,
  ...l
}) => /* @__PURE__ */ N("button", {
  id: `accordion-button-${t}`,
  "aria-controls": `accordion-panel-${t}`,
  "aria-expanded": n,
  className: `${Mt["c-accordion__button"]} u-flex ${a != null ? a : ""} ${n && i && i}`,
  onClick: r,
  "data-type": s,
  ...l,
  children: [e, c && c(n)]
});
Go.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  onExpanded: o.exports.func,
  isExpanded: o.exports.bool,
  expanded: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  __TYPE: fe("AccordionButton")
};
Go.defaultProps = {
  __TYPE: "AccordionButton"
};
const Ho = ({
  children: e,
  id: t,
  isOpen: r,
  onToggle: n,
  addClass: i
}) => {
  const a = () => n(t), c = () => typeof r == "number" ? r === t : Array.isArray(r) ? !!r.includes(t) : !1, s = Se.map(e, (l) => He(l) ? l.props.__TYPE === "AccordionButton" ? Oe(l, {
    ...l.props,
    id: t,
    onExpanded: a,
    isExpanded: c()
  }) : Oe(l, {
    ...l.props,
    id: t,
    isExpanded: c()
  }) : null);
  return /* @__PURE__ */ m("div", {
    className: `${Mt["c-accordion__item"]} ${i != null ? i : ""}`,
    children: Ie(s, ["AccordionButton", "AccordionPanel"])
  });
};
Ho.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  id: o.exports.number,
  isOpen: o.exports.oneOfType([o.exports.array, o.exports.number]),
  onToggle: o.exports.func,
  addClass: o.exports.string,
  __TYPE: fe("AccordionItem")
};
Ho.defaultProps = {
  __TYPE: "AccordionItem"
};
const Ko = ({
  children: e,
  id: t,
  isExpanded: r,
  addClass: n,
  __TYPE: i,
  ...a
}) => /* @__PURE__ */ m("div", {
  className: `${Mt["c-accordion"]} ${r ? Mt["c-accordion__panel--active"] : Mt["c-accordion__panel"]}`,
  "aria-hidden": !r,
  "data-type": i,
  ...!r && {
    hidden: !r
  },
  ...a,
  children: /* @__PURE__ */ m("div", {
    id: `accordion-panel-${t}`,
    role: "region",
    "aria-hidden": !r,
    "aria-labelledby": `accordion-button-${t}`,
    className: `${Mt["c-accordion__panel-content"]} ${n != null ? n : ""}`,
    children: e
  })
});
Ko.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  isExpanded: o.exports.bool,
  addClass: o.exports.string,
  __TYPE: fe("AccordionPanel")
};
Ko.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Pn = [
  "close",
  "check",
  "play",
  "pause",
  "volume_on",
  "volume_off",
  "done_all",
  "fullscreen",
  "fullscreen_exit",
  "arrow_drop_down",
  "arrow_drop_up",
  "closed_caption",
  "closed_caption_disabled",
  "fast_forward",
  "fast_rewind",
  "last_page",
  "first_page",
  "navigate_before",
  "navigate_next",
  "open_with"
], so = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, De = ({
  name: e,
  size: t,
  addClass: r
}) => {
  if (!e)
    return null;
  if (!Pn.includes(e))
    return /* @__PURE__ */ m("span", {
      children: "Doesn't exist"
    });
  const n = `/assets/icons/svg/${e}.svg#${e}`, i = () => new URL(n, import.meta.url);
  return /* @__PURE__ */ m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: `${so["c-icon"]} ${so[`c-${t}`]} ${r != null ? r : ""}`,
    "aria-hidden": "true",
    "data-testid": e,
    children: /* @__PURE__ */ m("use", {
      xlinkHref: i()
    })
  });
};
De.propTypes = {
  name: o.exports.oneOf(Pn),
  size: o.exports.oneOf(["small", "normal", "big"]),
  addClass: o.exports.string,
  __TYPE: fe("Icon")
};
De.defaultProps = {
  size: "normal",
  name: "play",
  __TYPE: "Icon"
};
const Jt = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, Dt = ft((e, t) => {
  const {
    label: r,
    size: n,
    icon: i,
    type: a,
    variant: c,
    hasAriaLabel: s,
    disabled: l,
    onClick: d,
    children: u,
    addClass: f,
    ...v
  } = e;
  return /* @__PURE__ */ N("button", {
    ref: t,
    className: `${Jt["c-button"]} ${Jt[`c-${c}`]} ${Jt[`c-${n}`]} ${i && i.name && s ? Jt["c-round"] : ""} 
        ${i && i.position === "right" ? Jt["c-reverse"] : ""} ${f != null ? f : ""}`,
    disabled: l,
    type: a,
    onClick: d,
    ...s && {
      "aria-label": `${r}`
    },
    ...v,
    children: [u, i && /* @__PURE__ */ m(De, {
      name: i.name,
      size: i.size
    }), s ? null : r]
  });
});
Dt.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  label: o.exports.string.isRequired,
  size: o.exports.oneOf(["small", "normal", "big"]),
  variant: o.exports.oneOf(["primary", "secondary", "no-line"]),
  type: o.exports.oneOf(["button", "submit", "reset"]),
  hasAriaLabel: o.exports.bool,
  icon: o.exports.shape({
    name: o.exports.oneOf(Pn),
    size: o.exports.oneOf(["small", "normal", "big"]),
    position: o.exports.oneOf(["left", "right"])
  }),
  disabled: o.exports.bool,
  onClick: o.exports.func,
  addClass: o.exports.string
};
Dt.defaultProps = {
  label: "Button",
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const kt = {
  "c-audio": "_c-audio_c6ix7_1",
  "c-audio--small": "_c-audio--small_c6ix7_15",
  "c-audio--hidden": "_c-audio--hidden_c6ix7_33",
  "c-button": "_c-button_c6ix7_37",
  "is-button-paused": "_is-button-paused_c6ix7_62",
  "is-button-playing": "_is-button-playing_c6ix7_70"
}, Xo = ({
  src: e,
  format: t,
  a11y: r,
  size: n,
  type: i,
  addClass: a,
  ...c
}) => {
  const [s, l] = H(!1), d = J(), u = Object.freeze({
    BUTTON: "Button",
    BAR: "Bar"
  }), f = (v) => {
    !d.current || (d.current.paused ? d.current.play() : d.current.pause(), l(!s));
  };
  return i === u.BAR ? /* @__PURE__ */ m("audio", {
    preload: "metadata",
    controls: !0,
    className: `${kt["c-audio"]} ${n && kt[`c-audio--${n}`]} ${a != null ? a : ""}`,
    "data-a11y": r,
    ...c,
    children: /* @__PURE__ */ m("source", {
      src: e,
      type: t
    })
  }) : /* @__PURE__ */ N(gt, {
    children: [/* @__PURE__ */ m("audio", {
      ref: d,
      src: e,
      type: t,
      onEnded: () => l(!s),
      className: kt["c-audio--hidden"]
    }), /* @__PURE__ */ m(Dt, {
      label: s ? "Pausar" : "Reproduccir",
      "data-a11y": r,
      addClass: `${kt["c-button"]} ${s ? kt["is-button-playing"] : kt["is-button-paused"]} ${a != null ? a : ""}`,
      onClick: f,
      hasAriaLabel: !0,
      ...r && {
        disabled: r
      },
      ...c
    })]
  });
};
Xo.defaultProps = {
  a11y: !1,
  type: "Bar"
};
Xo.propTypes = {
  src: o.exports.string,
  a11y: o.exports.bool,
  format: o.exports.string,
  size: o.exports.oneOf(["small"]),
  type: o.exports.oneOf(["Bar", "Button"]),
  addClass: o.exports.string
};
var Sa = typeof Sr == "object" && Sr && Sr.Object === Object && Sr, Ra = Sa, Pa = Ra, $a = typeof self == "object" && self && self.Object === Object && self, Da = Pa || $a || Function("return this")(), Ca = Da, Na = Ca, Aa = Na.Symbol, $n = Aa;
function Ia(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var ka = Ia, Ma = Array.isArray, Fa = Ma, co = $n, Jo = Object.prototype, ja = Jo.hasOwnProperty, La = Jo.toString, Zt = co ? co.toStringTag : void 0;
function Ba(e) {
  var t = ja.call(e, Zt), r = e[Zt];
  try {
    e[Zt] = void 0;
    var n = !0;
  } catch {
  }
  var i = La.call(e);
  return n && (t ? e[Zt] = r : delete e[Zt]), i;
}
var Va = Ba, Ya = Object.prototype, qa = Ya.toString;
function za(e) {
  return qa.call(e);
}
var Wa = za, lo = $n, Ua = Va, Ga = Wa, Ha = "[object Null]", Ka = "[object Undefined]", uo = lo ? lo.toStringTag : void 0;
function Xa(e) {
  return e == null ? e === void 0 ? Ka : Ha : uo && uo in Object(e) ? Ua(e) : Ga(e);
}
var Ja = Xa;
function Za(e) {
  return e != null && typeof e == "object";
}
var Qa = Za, es = Ja, ts = Qa, rs = "[object Symbol]";
function ns(e) {
  return typeof e == "symbol" || ts(e) && es(e) == rs;
}
var os = ns, fo = $n, is = ka, as = Fa, ss = os, cs = 1 / 0, po = fo ? fo.prototype : void 0, vo = po ? po.toString : void 0;
function Zo(e) {
  if (typeof e == "string")
    return e;
  if (as(e))
    return is(e, Zo) + "";
  if (ss(e))
    return vo ? vo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -cs ? "-0" : t;
}
var ls = Zo, us = ls;
function fs(e) {
  return e == null ? "" : us(e);
}
var ds = fs, ps = ds, vs = 0;
function hs(e) {
  var t = ++vs;
  return ps(e) + t;
}
var bt = hs;
const Qt = {
  "c-input": "_c-input_lqmp1_1",
  "c-input__box": "_c-input__box_lqmp1_24",
  "c-input__check": "_c-input__check_lqmp1_38",
  "c-input__icon": "_c-input__icon_lqmp1_38"
}, Qo = ft(({
  id: e,
  name: t,
  type: r,
  label: n,
  state: i,
  value: a,
  addClass: c,
  isDisabled: s,
  defaultChecked: l,
  onChange: d,
  __TYPE: u,
  ...f
}, v) => {
  const [h, b] = H(!1), g = le(() => e || bt(`ui-${r}`), [e, r]), _ = Object.freeze({
    right: "done_all",
    wrong: "close",
    normal: r === "checkbox" ? "check" : null
  }), O = ({
    target: P
  }) => {
    if (b(P.checked), !!d) {
      if (P.checked) {
        d({
          id: P.id,
          value: P.value
        });
        return;
      }
      d({
        id: P.id,
        value: ""
      });
    }
  };
  return U(() => (l && b(!!l), () => {
    b(!1);
  }), [l]), /* @__PURE__ */ N("label", {
    htmlFor: g,
    className: `${Qt["c-input"]} u-flex ${c != null ? c : ""}`,
    "data-state": i,
    "data-type": r,
    "data-element": u,
    ...f,
    children: [/* @__PURE__ */ N("div", {
      className: Qt["c-input__box"],
      children: [/* @__PURE__ */ m("input", {
        id: g,
        ref: v,
        type: r,
        name: t,
        value: a,
        checked: h,
        "data-state": i,
        className: Qt["c-input__check"],
        onChange: O,
        ...s && {
          disabled: !0
        }
      }), /* @__PURE__ */ m("div", {
        className: Qt["c-input__icon"],
        children: _[i] && /* @__PURE__ */ m(De, {
          name: _[i]
        })
      })]
    }), /* @__PURE__ */ m("span", {
      className: Qt["c-input__label"],
      children: n
    })]
  });
});
Qo.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  __TYPE: "CheckBox"
};
Qo.propTypes = {
  id: o.exports.string,
  name: o.exports.string,
  type: o.exports.oneOf(["radio", "checkbox"]),
  label: o.exports.string.isRequired,
  state: o.exports.oneOf(["normal", "right", "wrong"]),
  value: o.exports.oneOfType([o.exports.string, o.exports.number, o.exports.bool]),
  addClass: o.exports.string,
  isDisabled: o.exports.bool,
  defaultChecked: o.exports.bool,
  onChange: o.exports.func,
  __TYPE: fe("CheckBox")
};
const ms = ({
  legend: e,
  children: t,
  onChecked: r,
  addClass: n
}) => {
  const [i, a] = H([]), c = (l) => {
    i.filter((u) => u.id === l.id).length ? a([...i.filter((u) => u.id !== l.id)]) : a([...i, {
      ...l
    }]);
  };
  U(() => {
    r && r(i);
  }, [i]);
  const s = Se.map(t, (l) => He(l) ? l.props.__TYPE === "CheckBox" ? Oe(l, {
    ...l.props,
    onChange: c
  }) : l : null);
  return /* @__PURE__ */ N("fieldset", {
    ...n && {
      className: `${n}`
    },
    children: [/* @__PURE__ */ m("legend", {
      children: e
    }), /* @__PURE__ */ m("div", {
      className: "u-flow",
      children: Ie(s, ["CheckBox"])
    })]
  });
};
ms.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  legend: o.exports.string,
  onChecked: o.exports.func,
  addClass: o.exports.string
};
const gs = "_col_wu095_1", bs = {
  col: gs
}, ys = ft(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ m("div", {
  ref: r,
  className: `${bs.col} ${e != null ? e : ""}`,
  ...t
}));
ys.propTypes = {
  addClass: o.exports.string
};
const _s = {
  "c-content": "_c-content_u325r_1"
}, xs = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("section", {
  className: `${_s["c-content"]} animate__animated animate__fadeInDown animate__faster ${t != null ? t : ""}`,
  ...r,
  children: e
});
xs.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string
};
const jr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function zt(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function Dn(e) {
  return "nodeType" in e;
}
function Be(e) {
  var t, r;
  return e ? zt(e) ? e : Dn(e) && (t = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? t : window : window;
}
function Cn(e) {
  const {
    Document: t
  } = Be(e);
  return e instanceof t;
}
function vr(e) {
  return zt(e) ? !1 : e instanceof Be(e).HTMLElement;
}
function ws(e) {
  return e instanceof Be(e).SVGElement;
}
function Wt(e) {
  return e ? zt(e) ? e.document : Dn(e) ? Cn(e) ? e : vr(e) ? e.ownerDocument : document : document : document;
}
const ut = jr ? Yo : U;
function Nn(e) {
  const t = J(e);
  return ut(() => {
    t.current = e;
  }), Ce(function(...r) {
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Es() {
  const e = J(null), t = Ce((n, i) => {
    e.current = setInterval(n, i);
  }, []), r = Ce(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, r];
}
function cr(e, t = [e]) {
  const r = J(e);
  return ut(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function hr(e, t) {
  const r = J();
  return le(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    [...t]
  );
}
function Nr(e) {
  const t = Nn(e), r = J(null), n = Ce(
    (i) => {
      i !== r.current && (t == null || t(i, r.current)), r.current = i;
    },
    []
  );
  return [r, n];
}
function gn(e) {
  const t = J();
  return U(() => {
    t.current = e;
  }, [e]), t.current;
}
let nn = {};
function Lr(e, t) {
  return le(() => {
    if (t)
      return t;
    const r = nn[e] == null ? 0 : nn[e] + 1;
    return nn[e] = r, `${e}-${r}`;
  }, [e, t]);
}
function ei(e) {
  return (t, ...r) => r.reduce((n, i) => {
    const a = Object.entries(i);
    for (const [c, s] of a) {
      const l = n[c];
      l != null && (n[c] = l + e * s);
    }
    return n;
  }, {
    ...t
  });
}
const jt = /* @__PURE__ */ ei(1), Ar = /* @__PURE__ */ ei(-1);
function Ts(e) {
  return "clientX" in e && "clientY" in e;
}
function ti(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Be(e.target);
  return t && e instanceof t;
}
function Os(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Be(e.target);
  return t && e instanceof t;
}
function bn(e) {
  if (Os(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: r
      } = e.touches[0];
      return {
        x: t,
        y: r
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: r
      } = e.changedTouches[0];
      return {
        x: t,
        y: r
      };
    }
  }
  return Ts(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const yn = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: r
      } = e;
      return `translate3d(${t ? Math.round(t) : 0}px, ${r ? Math.round(r) : 0}px, 0)`;
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: r
      } = e;
      return `scaleX(${t}) scaleY(${r})`;
    }
  },
  Transform: {
    toString(e) {
      if (!!e)
        return [yn.Translate.toString(e), yn.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString({
      property: e,
      duration: t,
      easing: r
    }) {
      return `${e} ${t}ms ${r}`;
    }
  }
}), ho = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Ss(e) {
  return e.matches(ho) ? e : e.querySelector(ho);
}
const Rs = {
  display: "none"
};
function Ps(e) {
  let {
    id: t,
    value: r
  } = e;
  return /* @__PURE__ */ m("div", {
    id: t,
    style: Rs,
    children: r
  });
}
const $s = {
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
function Ds(e) {
  let {
    id: t,
    announcement: r
  } = e;
  return /* @__PURE__ */ m("div", {
    id: t,
    style: $s,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0,
    children: r
  });
}
function Cs() {
  const [e, t] = H("");
  return {
    announce: Ce((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const ri = /* @__PURE__ */ Ke(null);
function Ns(e) {
  const t = ye(ri);
  U(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function As() {
  const [e] = H(() => /* @__PURE__ */ new Set()), t = Ce((n) => (e.add(n), () => e.delete(n)), [e]);
  return [Ce((n) => {
    let {
      type: i,
      event: a
    } = n;
    e.forEach((c) => {
      var s;
      return (s = c[i]) == null ? void 0 : s.call(c, a);
    });
  }, [e]), t];
}
const Is = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, ks = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: r
    } = e;
    return r ? "Draggable item " + t.id + " was moved over droppable area " + r.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: r
    } = e;
    return r ? "Draggable item " + t.id + " was dropped over droppable area " + r.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function Ms(e) {
  let {
    announcements: t = ks,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = Is
  } = e;
  const {
    announce: a,
    announcement: c
  } = Cs(), s = Lr("DndLiveRegion"), [l, d] = H(!1);
  if (U(() => {
    d(!0);
  }, []), Ns(le(() => ({
    onDragStart(f) {
      let {
        active: v
      } = f;
      a(t.onDragStart({
        active: v
      }));
    },
    onDragMove(f) {
      let {
        active: v,
        over: h
      } = f;
      t.onDragMove && a(t.onDragMove({
        active: v,
        over: h
      }));
    },
    onDragOver(f) {
      let {
        active: v,
        over: h
      } = f;
      a(t.onDragOver({
        active: v,
        over: h
      }));
    },
    onDragEnd(f) {
      let {
        active: v,
        over: h
      } = f;
      a(t.onDragEnd({
        active: v,
        over: h
      }));
    },
    onDragCancel(f) {
      let {
        active: v,
        over: h
      } = f;
      a(t.onDragCancel({
        active: v,
        over: h
      }));
    }
  }), [a, t])), !l)
    return null;
  const u = /* @__PURE__ */ N(gt, {
    children: [/* @__PURE__ */ m(Ps, {
      id: n,
      value: i.draggable
    }), /* @__PURE__ */ m(Ds, {
      id: s,
      announcement: c
    })]
  });
  return r ? zo(u, r) : u;
}
var xe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(xe || (xe = {}));
function Ir() {
}
function on(e, t) {
  return le(
    () => ({
      sensor: e,
      options: t != null ? t : {}
    }),
    [e, t]
  );
}
function Fs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return le(
    () => [...t].filter((n) => n != null),
    [...t]
  );
}
const rt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function js(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Ls(e, t) {
  let {
    data: {
      value: r
    }
  } = e, {
    data: {
      value: n
    }
  } = t;
  return r - n;
}
function Bs(e, t) {
  let {
    data: {
      value: r
    }
  } = e, {
    data: {
      value: n
    }
  } = t;
  return n - r;
}
function mo(e) {
  let {
    left: t,
    top: r,
    height: n,
    width: i
  } = e;
  return [{
    x: t,
    y: r
  }, {
    x: t + i,
    y: r
  }, {
    x: t,
    y: r + n
  }, {
    x: t + i,
    y: r + n
  }];
}
function ni(e, t) {
  if (!e || e.length === 0)
    return null;
  const [r] = e;
  return t ? r[t] : r;
}
const Vs = (e) => {
  let {
    collisionRect: t,
    droppableRects: r,
    droppableContainers: n
  } = e;
  const i = mo(t), a = [];
  for (const c of n) {
    const {
      id: s
    } = c, l = r.get(s);
    if (l) {
      const d = mo(l), u = i.reduce((v, h, b) => v + js(d[b], h), 0), f = Number((u / 4).toFixed(4));
      a.push({
        id: s,
        data: {
          droppableContainer: c,
          value: f
        }
      });
    }
  }
  return a.sort(Ls);
};
function Ys(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), c = i - n, s = a - r;
  if (n < i && r < a) {
    const l = t.width * t.height, d = e.width * e.height, u = c * s, f = u / (l + d - u);
    return Number(f.toFixed(4));
  }
  return 0;
}
const qs = (e) => {
  let {
    collisionRect: t,
    droppableRects: r,
    droppableContainers: n
  } = e;
  const i = [];
  for (const a of n) {
    const {
      id: c
    } = a, s = r.get(c);
    if (s) {
      const l = Ys(s, t);
      l > 0 && i.push({
        id: c,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return i.sort(Bs);
};
function zs(e, t, r) {
  return {
    ...e,
    scaleX: t && r ? t.width / r.width : 1,
    scaleY: t && r ? t.height / r.height : 1
  };
}
function oi(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : rt;
}
function Ws(e) {
  return function(r) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return i.reduce((c, s) => ({
      ...c,
      top: c.top + e * s.y,
      bottom: c.bottom + e * s.y,
      left: c.left + e * s.x,
      right: c.right + e * s.x
    }), {
      ...r
    });
  };
}
const Us = /* @__PURE__ */ Ws(1);
function Gs(e) {
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
function Hs(e, t, r) {
  const n = Gs(t);
  if (!n)
    return e;
  const {
    scaleX: i,
    scaleY: a,
    x: c,
    y: s
  } = n, l = e.left - c - (1 - i) * parseFloat(r), d = e.top - s - (1 - a) * parseFloat(r.slice(r.indexOf(" ") + 1)), u = i ? e.width / i : e.width, f = a ? e.height / a : e.height;
  return {
    width: u,
    height: f,
    top: d,
    right: l + u,
    bottom: d + f,
    left: l
  };
}
const Ks = {
  ignoreTransform: !1
};
function mr(e, t) {
  t === void 0 && (t = Ks);
  let r = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      getComputedStyle: d
    } = Be(e), {
      transform: u,
      transformOrigin: f
    } = d(e);
    u && (r = Hs(r, u, f));
  }
  const {
    top: n,
    left: i,
    width: a,
    height: c,
    bottom: s,
    right: l
  } = r;
  return {
    top: n,
    left: i,
    width: a,
    height: c,
    bottom: s,
    right: l
  };
}
function go(e) {
  return mr(e, {
    ignoreTransform: !0
  });
}
function Xs(e) {
  const t = e.innerWidth, r = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: r,
    width: t,
    height: r
  };
}
function Js(e, t) {
  return t === void 0 && (t = Be(e).getComputedStyle(e)), t.position === "fixed";
}
function Zs(e, t) {
  t === void 0 && (t = Be(e).getComputedStyle(e));
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const a = t[i];
    return typeof a == "string" ? r.test(a) : !1;
  });
}
function An(e, t) {
  const r = [];
  function n(i) {
    if (t != null && r.length >= t || !i)
      return r;
    if (Cn(i) && i.scrollingElement != null && !r.includes(i.scrollingElement))
      return r.push(i.scrollingElement), r;
    if (!vr(i) || ws(i) || r.includes(i))
      return r;
    const {
      getComputedStyle: a
    } = Be(i), c = a(i);
    return i !== e && Zs(i, c) && r.push(i), Js(i, c) ? r : n(i.parentNode);
  }
  return e ? n(e) : r;
}
function ii(e) {
  const [t] = An(e, 1);
  return t != null ? t : null;
}
function an(e) {
  return !jr || !e ? null : zt(e) ? e : Dn(e) ? Cn(e) || e === Wt(e).scrollingElement ? window : vr(e) ? e : null : null;
}
function ai(e) {
  return zt(e) ? e.scrollX : e.scrollLeft;
}
function si(e) {
  return zt(e) ? e.scrollY : e.scrollTop;
}
function _n(e) {
  return {
    x: ai(e),
    y: si(e)
  };
}
var Te;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Te || (Te = {}));
function ci(e) {
  return !jr || !e ? !1 : e === document.scrollingElement;
}
function li(e) {
  const t = {
    x: 0,
    y: 0
  }, r = ci(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, n = {
    x: e.scrollWidth - r.width,
    y: e.scrollHeight - r.height
  }, i = e.scrollTop <= t.y, a = e.scrollLeft <= t.x, c = e.scrollTop >= n.y, s = e.scrollLeft >= n.x;
  return {
    isTop: i,
    isLeft: a,
    isBottom: c,
    isRight: s,
    maxScroll: n,
    minScroll: t
  };
}
const Qs = {
  x: 0.2,
  y: 0.2
};
function ec(e, t, r, n, i) {
  let {
    top: a,
    left: c,
    right: s,
    bottom: l
  } = r;
  n === void 0 && (n = 10), i === void 0 && (i = Qs);
  const {
    isTop: d,
    isBottom: u,
    isLeft: f,
    isRight: v
  } = li(e), h = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !d && a <= t.top + g.height ? (h.y = Te.Backward, b.y = n * Math.abs((t.top + g.height - a) / g.height)) : !u && l >= t.bottom - g.height && (h.y = Te.Forward, b.y = n * Math.abs((t.bottom - g.height - l) / g.height)), !v && s >= t.right - g.width ? (h.x = Te.Forward, b.x = n * Math.abs((t.right - g.width - s) / g.width)) : !f && c <= t.left + g.width && (h.x = Te.Backward, b.x = n * Math.abs((t.left + g.width - c) / g.width)), {
    direction: h,
    speed: b
  };
}
function tc(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: a,
      innerHeight: c
    } = window;
    return {
      top: 0,
      left: 0,
      right: a,
      bottom: c,
      width: a,
      height: c
    };
  }
  const {
    top: t,
    left: r,
    right: n,
    bottom: i
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: r,
    right: n,
    bottom: i,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function ui(e) {
  return e.reduce((t, r) => jt(t, _n(r)), rt);
}
function rc(e) {
  return e.reduce((t, r) => t + ai(r), 0);
}
function nc(e) {
  return e.reduce((t, r) => t + si(r), 0);
}
function oc(e, t) {
  if (t === void 0 && (t = mr), !e)
    return;
  const {
    top: r,
    left: n,
    bottom: i,
    right: a
  } = t(e);
  !ii(e) || (i <= 0 || a <= 0 || r >= window.innerHeight || n >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const ic = [["x", ["left", "right"], rc], ["y", ["top", "bottom"], nc]];
class In {
  constructor(t, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = An(r), i = ui(n);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, c, s] of ic)
      for (const l of c)
        Object.defineProperty(this, l, {
          get: () => {
            const d = s(n), u = i[a] - d;
            return this.rect[l] + u;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class rr {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((r) => {
        var n;
        return (n = this.target) == null ? void 0 : n.removeEventListener(...r);
      });
    }, this.target = t;
  }
  add(t, r, n) {
    var i;
    (i = this.target) == null || i.addEventListener(t, r, n), this.listeners.push([t, r, n]);
  }
}
function ac(e) {
  const {
    EventTarget: t
  } = Be(e);
  return e instanceof t ? e : Wt(e);
}
function sn(e, t) {
  const r = Math.abs(e.x), n = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(r ** 2 + n ** 2) > t : "x" in t && "y" in t ? r > t.x && n > t.y : "x" in t ? r > t.x : "y" in t ? n > t.y : !1;
}
var We;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(We || (We = {}));
function bo(e) {
  e.preventDefault();
}
function sc(e) {
  e.stopPropagation();
}
var oe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(oe || (oe = {}));
const fi = {
  start: [oe.Space, oe.Enter],
  cancel: [oe.Esc],
  end: [oe.Space, oe.Enter]
}, cc = (e, t) => {
  let {
    currentCoordinates: r
  } = t;
  switch (e.code) {
    case oe.Right:
      return {
        ...r,
        x: r.x + 25
      };
    case oe.Left:
      return {
        ...r,
        x: r.x - 25
      };
    case oe.Down:
      return {
        ...r,
        y: r.y + 25
      };
    case oe.Up:
      return {
        ...r,
        y: r.y - 25
      };
  }
};
class kn {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: r
      }
    } = t;
    this.props = t, this.listeners = new rr(Wt(r)), this.windowListeners = new rr(Be(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(We.Resize, this.handleCancel), this.windowListeners.add(We.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(We.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: r
    } = this.props, n = t.node.current;
    n && oc(n), r(rt);
  }
  handleKeyDown(t) {
    if (ti(t)) {
      const {
        active: r,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: a = fi,
        coordinateGetter: c = cc,
        scrollBehavior: s = "smooth"
      } = i, {
        code: l
      } = t;
      if (a.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (a.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: d
      } = n.current, u = d ? {
        x: d.left,
        y: d.top
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const f = c(t, {
        active: r,
        context: n.current,
        currentCoordinates: u
      });
      if (f) {
        const v = Ar(f, u), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = n.current;
        for (const g of b) {
          const _ = t.code, {
            isTop: O,
            isRight: P,
            isLeft: $,
            isBottom: D,
            maxScroll: y,
            minScroll: x
          } = li(g), w = tc(g), S = {
            x: Math.min(_ === oe.Right ? w.right - w.width / 2 : w.right, Math.max(_ === oe.Right ? w.left : w.left + w.width / 2, f.x)),
            y: Math.min(_ === oe.Down ? w.bottom - w.height / 2 : w.bottom, Math.max(_ === oe.Down ? w.top : w.top + w.height / 2, f.y))
          }, I = _ === oe.Right && !P || _ === oe.Left && !$, L = _ === oe.Down && !D || _ === oe.Up && !O;
          if (I && S.x !== f.x) {
            const M = g.scrollLeft + v.x, Z = _ === oe.Right && M <= y.x || _ === oe.Left && M >= x.x;
            if (Z && !v.y) {
              g.scrollTo({
                left: M,
                behavior: s
              });
              return;
            }
            Z ? h.x = g.scrollLeft - M : h.x = _ === oe.Right ? g.scrollLeft - y.x : g.scrollLeft - x.x, h.x && g.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (L && S.y !== f.y) {
            const M = g.scrollTop + v.y, Z = _ === oe.Down && M <= y.y || _ === oe.Up && M >= x.y;
            if (Z && !v.x) {
              g.scrollTo({
                top: M,
                behavior: s
              });
              return;
            }
            Z ? h.y = g.scrollTop - M : h.y = _ === oe.Down ? g.scrollTop - y.y : g.scrollTop - x.y, h.y && g.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, jt(Ar(f, this.referenceCoordinates), h));
      }
    }
  }
  handleMove(t, r) {
    const {
      onMove: n
    } = this.props;
    t.preventDefault(), n(r);
  }
  handleEnd(t) {
    const {
      onEnd: r
    } = this.props;
    t.preventDefault(), this.detach(), r();
  }
  handleCancel(t) {
    const {
      onCancel: r
    } = this.props;
    t.preventDefault(), this.detach(), r();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
kn.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, r) => {
    let {
      keyboardCodes: n = fi,
      onActivation: i
    } = t, {
      active: a
    } = r;
    const {
      code: c
    } = e.nativeEvent;
    if (n.start.includes(c)) {
      const s = a.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), i == null || i({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function yo(e) {
  return Boolean(e && "distance" in e);
}
function _o(e) {
  return Boolean(e && "delay" in e);
}
class Mn {
  constructor(t, r, n) {
    var i;
    n === void 0 && (n = ac(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = r;
    const {
      event: a
    } = t, {
      target: c
    } = a;
    this.props = t, this.events = r, this.document = Wt(c), this.documentListeners = new rr(this.document), this.listeners = new rr(n), this.windowListeners = new rr(Be(c)), this.initialCoordinates = (i = bn(a)) != null ? i : rt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(We.Resize, this.handleCancel), this.windowListeners.add(We.DragStart, bo), this.windowListeners.add(We.VisibilityChange, this.handleCancel), this.windowListeners.add(We.ContextMenu, bo), this.documentListeners.add(We.Keydown, this.handleKeydown), r) {
      if (yo(r))
        return;
      if (_o(r)) {
        this.timeoutId = setTimeout(this.handleStart, r.delay);
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
      onStart: r
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(We.Click, sc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(We.SelectionChange, this.removeTextSelection), r(t));
  }
  handleMove(t) {
    var r;
    const {
      activated: n,
      initialCoordinates: i,
      props: a
    } = this, {
      onMove: c,
      options: {
        activationConstraint: s
      }
    } = a;
    if (!i)
      return;
    const l = (r = bn(t)) != null ? r : rt, d = Ar(i, l);
    if (!n && s) {
      if (_o(s))
        return sn(d, s.tolerance) ? this.handleCancel() : void 0;
      if (yo(s))
        return s.tolerance != null && sn(d, s.tolerance) ? this.handleCancel() : sn(d, s.distance) ? this.handleStart() : void 0;
    }
    t.cancelable && t.preventDefault(), c(l);
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
    t.code === oe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const lc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class di extends Mn {
  constructor(t) {
    const {
      event: r
    } = t, n = Wt(r.target);
    super(t, lc, n);
  }
}
di.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    return !r.isPrimary || r.button !== 0 ? !1 : (n == null || n({
      event: r
    }), !0);
  }
}];
const uc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var xn;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(xn || (xn = {}));
class pi extends Mn {
  constructor(t) {
    super(t, uc, Wt(t.event.target));
  }
}
pi.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    return r.button === xn.RightClick ? !1 : (n == null || n({
      event: r
    }), !0);
  }
}];
const cn = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class vi extends Mn {
  constructor(t) {
    super(t, cn);
  }
  static setup() {
    return window.addEventListener(cn.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(cn.move.name, t);
    };
    function t() {
    }
  }
}
vi.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    const {
      touches: i
    } = r;
    return i.length > 1 ? !1 : (n == null || n({
      event: r
    }), !0);
  }
}];
var nr;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(nr || (nr = {}));
var kr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(kr || (kr = {}));
function fc(e) {
  let {
    acceleration: t,
    activator: r = nr.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: a,
    interval: c = 5,
    order: s = kr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: u,
    delta: f,
    threshold: v
  } = e;
  const h = pc({
    delta: f,
    disabled: !a
  }), [b, g] = Es(), _ = J({
    x: 0,
    y: 0
  }), O = J({
    x: 0,
    y: 0
  }), P = le(() => {
    switch (r) {
      case nr.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case nr.DraggableRect:
        return i;
    }
  }, [r, i, l]), $ = J(null), D = Ce(() => {
    const x = $.current;
    if (!x)
      return;
    const w = _.current.x * O.current.x, S = _.current.y * O.current.y;
    x.scrollBy(w, S);
  }, []), y = le(() => s === kr.TreeOrder ? [...d].reverse() : d, [s, d]);
  U(
    () => {
      if (!a || !d.length || !P) {
        g();
        return;
      }
      for (const x of y) {
        if ((n == null ? void 0 : n(x)) === !1)
          continue;
        const w = d.indexOf(x), S = u[w];
        if (!S)
          continue;
        const {
          direction: I,
          speed: L
        } = ec(x, S, P, t, v);
        for (const M of ["x", "y"])
          h[M][I[M]] || (L[M] = 0, I[M] = 0);
        if (L.x > 0 || L.y > 0) {
          g(), $.current = x, b(D, c), _.current = L, O.current = I;
          return;
        }
      }
      _.current = {
        x: 0,
        y: 0
      }, O.current = {
        x: 0,
        y: 0
      }, g();
    },
    [
      t,
      D,
      n,
      g,
      a,
      c,
      JSON.stringify(P),
      JSON.stringify(h),
      b,
      d,
      y,
      u,
      JSON.stringify(v)
    ]
  );
}
const dc = {
  x: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  },
  y: {
    [Te.Backward]: !1,
    [Te.Forward]: !1
  }
};
function pc(e) {
  let {
    delta: t,
    disabled: r
  } = e;
  const n = gn(t);
  return hr((i) => {
    if (r || !n || !i)
      return dc;
    const a = {
      x: Math.sign(t.x - n.x),
      y: Math.sign(t.y - n.y)
    };
    return {
      x: {
        [Te.Backward]: i.x[Te.Backward] || a.x === -1,
        [Te.Forward]: i.x[Te.Forward] || a.x === 1
      },
      y: {
        [Te.Backward]: i.y[Te.Backward] || a.y === -1,
        [Te.Forward]: i.y[Te.Forward] || a.y === 1
      }
    };
  }, [r, t, n]);
}
function vc(e, t) {
  const r = t !== null ? e.get(t) : void 0, n = r ? r.node.current : null;
  return hr((i) => {
    var a;
    return t === null ? null : (a = n != null ? n : i) != null ? a : null;
  }, [n, t]);
}
function hc(e, t) {
  return le(() => e.reduce((r, n) => {
    const {
      sensor: i
    } = n, a = i.activators.map((c) => ({
      eventName: c.eventName,
      handler: t(c.handler, n)
    }));
    return [...r, ...a];
  }, []), [e, t]);
}
var lr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(lr || (lr = {}));
var wn;
(function(e) {
  e.Optimized = "optimized";
})(wn || (wn = {}));
const xo = /* @__PURE__ */ new Map();
function mc(e, t) {
  let {
    dragging: r,
    dependencies: n,
    config: i
  } = t;
  const [a, c] = H(null), s = a != null, {
    frequency: l,
    measure: d,
    strategy: u
  } = i, f = J(e), v = O(), h = cr(v), b = Ce(function(P) {
    P === void 0 && (P = []), !h.current && c(($) => $ ? $.concat(P) : P);
  }, [h]), g = J(null), _ = hr((P) => {
    if (v && !r)
      return xo;
    const $ = a;
    if (!P || P === xo || f.current !== e || $ != null) {
      const D = /* @__PURE__ */ new Map();
      for (let y of e) {
        if (!y)
          continue;
        if ($ && $.length > 0 && !$.includes(y.id) && y.rect.current) {
          D.set(y.id, y.rect.current);
          continue;
        }
        const x = y.node.current, w = x ? new In(d(x), x) : null;
        y.rect.current = w, w && D.set(y.id, w);
      }
      return D;
    }
    return P;
  }, [e, a, r, v, d]);
  return U(() => {
    f.current = e;
  }, [e]), U(
    () => {
      v || requestAnimationFrame(() => b());
    },
    [r, v]
  ), U(() => {
    s && c(null);
  }, [s]), U(
    () => {
      v || typeof l != "number" || g.current !== null || (g.current = setTimeout(() => {
        b(), g.current = null;
      }, l));
    },
    [l, v, b, ...n]
  ), {
    droppableRects: _,
    measureDroppableContainers: b,
    measuringScheduled: s
  };
  function O() {
    switch (u) {
      case lr.Always:
        return !1;
      case lr.BeforeDragging:
        return r;
      default:
        return !r;
    }
  }
}
function hi(e, t) {
  return hr((r) => e ? r || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function gc(e, t) {
  return hi(e, t);
}
function bc(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = Nn(t), i = le(() => {
    if (r || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(n);
  }, [n, r]);
  return U(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function Br(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = Nn(t), i = le(
    () => {
      if (r || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: a
      } = window;
      return new a(n);
    },
    [r]
  );
  return U(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function yc(e) {
  return new In(mr(e), e);
}
function wo(e, t, r) {
  t === void 0 && (t = yc);
  const [n, i] = Sn(s, null), a = bc({
    callback(l) {
      if (!!e)
        for (const d of l) {
          const {
            type: u,
            target: f
          } = d;
          if (u === "childList" && f instanceof HTMLElement && f.contains(e)) {
            i();
            break;
          }
        }
    }
  }), c = Br({
    callback: i
  });
  return ut(() => {
    i(), e ? (c == null || c.observe(e), a == null || a.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (c == null || c.disconnect(), a == null || a.disconnect());
  }, [e]), n;
  function s(l) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var d;
      return (d = l != null ? l : r) != null ? d : null;
    }
    const u = t(e);
    return JSON.stringify(l) === JSON.stringify(u) ? l : u;
  }
}
function _c(e) {
  const t = hi(e);
  return oi(e, t);
}
const Eo = [];
function xc(e) {
  const t = J(e), r = hr((n) => e ? n && n !== Eo && e && t.current && e.parentNode === t.current.parentNode ? n : An(e) : Eo, [e]);
  return U(() => {
    t.current = e;
  }, [e]), r;
}
function wc(e) {
  const [t, r] = H(null), n = J(e), i = Ce((a) => {
    const c = an(a.target);
    !c || r((s) => s ? (s.set(c, _n(c)), new Map(s)) : null);
  }, []);
  return U(() => {
    const a = n.current;
    if (e !== a) {
      c(a);
      const s = e.map((l) => {
        const d = an(l);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, _n(d)]) : null;
      }).filter((l) => l != null);
      r(s.length ? new Map(s) : null), n.current = e;
    }
    return () => {
      c(e), c(a);
    };
    function c(s) {
      s.forEach((l) => {
        const d = an(l);
        d == null || d.removeEventListener("scroll", i);
      });
    }
  }, [i, e]), le(() => e.length ? t ? Array.from(t.values()).reduce((a, c) => jt(a, c), rt) : ui(e) : rt, [e, t]);
}
function To(e, t) {
  t === void 0 && (t = []);
  const r = J(null);
  return U(
    () => {
      r.current = null;
    },
    t
  ), U(() => {
    const n = e !== rt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? Ar(e, r.current) : rt;
}
function Ec(e) {
  U(
    () => {
      if (!jr)
        return;
      const t = e.map((r) => {
        let {
          sensor: n
        } = r;
        return n.setup == null ? void 0 : n.setup();
      });
      return () => {
        for (const r of t)
          r == null || r();
      };
    },
    e.map((t) => {
      let {
        sensor: r
      } = t;
      return r;
    })
  );
}
function Tc(e, t) {
  return le(() => e.reduce((r, n) => {
    let {
      eventName: i,
      handler: a
    } = n;
    return r[i] = (c) => {
      a(c, t);
    }, r;
  }, {}), [e, t]);
}
function mi(e) {
  return le(() => e ? Xs(e) : null, [e]);
}
const ln = [];
function Oc(e, t) {
  t === void 0 && (t = mr);
  const [r] = e, n = mi(r ? Be(r) : null), [i, a] = Sn(s, ln), c = Br({
    callback: a
  });
  return e.length > 0 && i === ln && a(), ut(() => {
    e.length ? e.forEach((l) => c == null ? void 0 : c.observe(l)) : (c == null || c.disconnect(), a());
  }, [e]), i;
  function s() {
    return e.length ? e.map((l) => ci(l) ? n : new In(t(l), l)) : ln;
  }
}
function Sc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return vr(t) ? t : e;
}
function Rc(e) {
  let {
    measure: t
  } = e;
  const [r, n] = H(null), i = Ce((d) => {
    for (const {
      target: u
    } of d)
      if (vr(u)) {
        n((f) => {
          const v = t(u);
          return f ? {
            ...f,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), a = Br({
    callback: i
  }), c = Ce((d) => {
    const u = Sc(d);
    a == null || a.disconnect(), u && (a == null || a.observe(u)), n(u ? t(u) : null);
  }, [t, a]), [s, l] = Nr(c);
  return le(() => ({
    nodeRef: s,
    rect: r,
    setRef: l
  }), [r, s, l]);
}
const Pc = [{
  sensor: di,
  options: {}
}, {
  sensor: kn,
  options: {}
}], $c = {
  current: {}
}, Pr = {
  draggable: {
    measure: go
  },
  droppable: {
    measure: go,
    strategy: lr.WhileDragging,
    frequency: wn.Optimized
  },
  dragOverlay: {
    measure: mr
  }
};
class or extends Map {
  get(t) {
    var r;
    return t != null && (r = super.get(t)) != null ? r : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: r
      } = t;
      return !r;
    });
  }
  getNodeFor(t) {
    var r, n;
    return (r = (n = this.get(t)) == null ? void 0 : n.node.current) != null ? r : void 0;
  }
}
const Dc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new or(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Ir
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Pr,
  measureDroppableContainers: Ir,
  windowRect: null,
  measuringScheduled: !1
}, Cc = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Ir,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Ir
}, Vr = /* @__PURE__ */ Ke(Cc), Nc = /* @__PURE__ */ Ke(Dc);
function Ac() {
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
      containers: new or()
    }
  };
}
function Ic(e, t) {
  switch (t.type) {
    case xe.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case xe.DragMove:
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
    case xe.DragEnd:
    case xe.DragCancel:
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
    case xe.RegisterDroppable: {
      const {
        element: r
      } = t, {
        id: n
      } = r, i = new or(e.droppable.containers);
      return i.set(n, r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case xe.SetDroppableDisabled: {
      const {
        id: r,
        key: n,
        disabled: i
      } = t, a = e.droppable.containers.get(r);
      if (!a || n !== a.key)
        return e;
      const c = new or(e.droppable.containers);
      return c.set(r, {
        ...a,
        disabled: i
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: c
        }
      };
    }
    case xe.UnregisterDroppable: {
      const {
        id: r,
        key: n
      } = t, i = e.droppable.containers.get(r);
      if (!i || n !== i.key)
        return e;
      const a = new or(e.droppable.containers);
      return a.delete(r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    default:
      return e;
  }
}
function kc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: i
  } = ye(Vr), a = gn(n), c = gn(r == null ? void 0 : r.id);
  return U(() => {
    if (!t && !n && a && c != null) {
      if (!ti(a) || document.activeElement === a.target)
        return;
      const s = i.get(c);
      if (!s)
        return;
      const {
        activatorNode: l,
        node: d
      } = s;
      if (!l.current && !d.current)
        return;
      requestAnimationFrame(() => {
        for (const u of [l.current, d.current]) {
          if (!u)
            continue;
          const f = Ss(u);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [n, t, i, c, a]), null;
}
function Mc(e, t) {
  let {
    transform: r,
    ...n
  } = t;
  return e != null && e.length ? e.reduce((i, a) => a({
    transform: i,
    ...n
  }), r) : r;
}
function Fc(e) {
  return le(
    () => ({
      draggable: {
        ...Pr.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Pr.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Pr.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function jc(e) {
  let {
    activeNode: t,
    measure: r,
    initialRect: n,
    config: i = !0
  } = e;
  const a = J(!1), {
    x: c,
    y: s
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  ut(() => {
    if (!c && !s || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !n)
      return;
    const d = t == null ? void 0 : t.node.current;
    if (!d || d.isConnected === !1)
      return;
    const u = r(d), f = oi(u, n);
    if (c || (f.x = 0), s || (f.y = 0), a.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const v = ii(d);
      v && v.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, c, s, n, r]);
}
const gi = /* @__PURE__ */ Ke({
  ...rt,
  scaleX: 1,
  scaleY: 1
});
var ht;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(ht || (ht = {}));
const Lc = /* @__PURE__ */ qo(function(t) {
  var r, n, i, a;
  let {
    id: c,
    accessibility: s,
    autoScroll: l = !0,
    children: d,
    sensors: u = Pc,
    collisionDetection: f = qs,
    measuring: v,
    modifiers: h,
    ...b
  } = t;
  const g = Sn(Ic, void 0, Ac), [_, O] = g, [P, $] = As(), [D, y] = H(ht.Uninitialized), x = D === ht.Initialized, {
    draggable: {
      active: w,
      nodes: S,
      translate: I
    },
    droppable: {
      containers: L
    }
  } = _, M = w ? S.get(w) : null, Z = J({
    initial: null,
    translated: null
  }), K = le(() => {
    var ve;
    return w != null ? {
      id: w,
      data: (ve = M == null ? void 0 : M.data) != null ? ve : $c,
      rect: Z
    } : null;
  }, [w, M]), re = J(null), [de, ie] = H(null), [ee, _e] = H(null), he = cr(b, Object.values(b)), T = Lr("DndDescribedBy", c), A = le(() => L.getEnabled(), [L]), B = Fc(v), {
    droppableRects: V,
    measureDroppableContainers: j,
    measuringScheduled: W
  } = mc(A, {
    dragging: x,
    dependencies: [I.x, I.y],
    config: B.droppable
  }), F = vc(S, w), q = le(() => ee ? bn(ee) : null, [ee]), z = Tr(), X = gc(F, B.draggable.measure);
  jc({
    activeNode: w ? S.get(w) : null,
    config: z.layoutShiftCompensation,
    initialRect: X,
    measure: B.draggable.measure
  });
  const Y = wo(F, B.draggable.measure, X), C = wo(F ? F.parentElement : null), E = J({
    activatorEvent: null,
    active: null,
    activeNode: F,
    collisionRect: null,
    collisions: null,
    droppableRects: V,
    draggableNodes: S,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: L,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Q = L.getNodeFor((r = E.current.over) == null ? void 0 : r.id), me = Rc({
    measure: B.dragOverlay.measure
  }), we = (n = me.nodeRef.current) != null ? n : F, $e = x ? (i = me.rect) != null ? i : Y : null, ot = Boolean(me.nodeRef.current && me.rect), st = _c(ot ? null : Y), it = mi(we ? Be(we) : null), Ee = xc(x ? Q != null ? Q : F : null), Je = Oc(Ee), Ze = Mc(h, {
    transform: {
      x: I.x - st.x,
      y: I.y - st.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ee,
    active: K,
    activeNodeRect: Y,
    containerNodeRect: C,
    draggingNodeRect: $e,
    over: E.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Ee,
    scrollableAncestorRects: Je,
    windowRect: it
  }), _t = q ? jt(q, I) : null, dt = wc(Ee), xt = To(dt), wt = To(dt, [Y]), Ne = jt(Ze, xt), Qe = $e ? Us($e, Ze) : null, pt = K && Qe ? f({
    active: K,
    collisionRect: Qe,
    droppableRects: V,
    droppableContainers: A,
    pointerCoordinates: _t
  }) : null, Ut = ni(pt, "id"), [Ye, xr] = H(null), Ur = ot ? Ze : jt(Ze, wt), Gr = zs(Ur, (a = Ye == null ? void 0 : Ye.rect) != null ? a : null, Y), wr = Ce(
    (ve, Re) => {
      let {
        sensor: Pe,
        options: et
      } = Re;
      if (re.current == null)
        return;
      const ke = S.get(re.current);
      if (!ke)
        return;
      const Me = ve.nativeEvent, qe = new Pe({
        active: re.current,
        activeNode: ke,
        event: Me,
        options: et,
        context: E,
        onStart(Fe) {
          const Et = re.current;
          if (Et == null)
            return;
          const Tt = S.get(Et);
          if (!Tt)
            return;
          const {
            onDragStart: Ot
          } = he.current, At = {
            active: {
              id: Et,
              data: Tt.data,
              rect: Z
            }
          };
          Ht(() => {
            Ot == null || Ot(At), y(ht.Initializing), O({
              type: xe.DragStart,
              initialCoordinates: Fe,
              active: Et
            }), P({
              type: "onDragStart",
              event: At
            });
          });
        },
        onMove(Fe) {
          O({
            type: xe.DragMove,
            coordinates: Fe
          });
        },
        onEnd: ct(xe.DragEnd),
        onCancel: ct(xe.DragCancel)
      });
      Ht(() => {
        ie(qe), _e(ve.nativeEvent);
      });
      function ct(Fe) {
        return async function() {
          const {
            active: Tt,
            collisions: Ot,
            over: At,
            scrollAdjustedTranslate: Or
          } = E.current;
          let St = null;
          if (Tt && Or) {
            const {
              cancelDrop: Rt
            } = he.current;
            St = {
              activatorEvent: Me,
              active: Tt,
              collisions: Ot,
              delta: Or,
              over: At
            }, Fe === xe.DragEnd && typeof Rt == "function" && await Promise.resolve(Rt(St)) && (Fe = xe.DragCancel);
          }
          re.current = null, Ht(() => {
            O({
              type: Fe
            }), y(ht.Uninitialized), xr(null), ie(null), _e(null);
            const Rt = Fe === xe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (St) {
              const p = he.current[Rt];
              p == null || p(St), P({
                type: Rt,
                event: St
              });
            }
          });
        };
      }
    },
    [S]
  ), Hr = Ce((ve, Re) => (Pe, et) => {
    const ke = Pe.nativeEvent, Me = S.get(et);
    if (re.current !== null || !Me || ke.dndKit || ke.defaultPrevented)
      return;
    const qe = {
      active: Me
    };
    ve(Pe, Re.options, qe) === !0 && (ke.dndKit = {
      capturedBy: Re.sensor
    }, re.current = et, wr(Pe, Re));
  }, [S, wr]), Er = hc(u, Hr);
  Ec(u), ut(() => {
    Y && D === ht.Initializing && y(ht.Initialized);
  }, [Y, D]), U(
    () => {
      const {
        onDragMove: ve
      } = he.current, {
        active: Re,
        activatorEvent: Pe,
        collisions: et,
        over: ke
      } = E.current;
      if (!Re || !Pe)
        return;
      const Me = {
        active: Re,
        activatorEvent: Pe,
        collisions: et,
        delta: {
          x: Ne.x,
          y: Ne.y
        },
        over: ke
      };
      Ht(() => {
        ve == null || ve(Me), P({
          type: "onDragMove",
          event: Me
        });
      });
    },
    [Ne.x, Ne.y]
  ), U(
    () => {
      const {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        droppableContainers: et,
        scrollAdjustedTranslate: ke
      } = E.current;
      if (!ve || re.current == null || !Re || !ke)
        return;
      const {
        onDragOver: Me
      } = he.current, qe = et.get(Ut), ct = qe && qe.rect.current ? {
        id: qe.id,
        rect: qe.rect.current,
        data: qe.data,
        disabled: qe.disabled
      } : null, Fe = {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        delta: {
          x: ke.x,
          y: ke.y
        },
        over: ct
      };
      Ht(() => {
        xr(ct), Me == null || Me(Fe), P({
          type: "onDragOver",
          event: Fe
        });
      });
    },
    [Ut]
  ), ut(() => {
    E.current = {
      activatorEvent: ee,
      active: K,
      activeNode: F,
      collisionRect: Qe,
      collisions: pt,
      droppableRects: V,
      draggableNodes: S,
      draggingNode: we,
      draggingNodeRect: $e,
      droppableContainers: L,
      over: Ye,
      scrollableAncestors: Ee,
      scrollAdjustedTranslate: Ne
    }, Z.current = {
      initial: $e,
      translated: Qe
    };
  }, [K, F, pt, Qe, S, we, $e, V, L, Ye, Ee, Ne]), fc({
    ...z,
    delta: I,
    draggingRect: Qe,
    pointerCoordinates: _t,
    scrollableAncestors: Ee,
    scrollableAncestorRects: Je
  });
  const Kr = le(() => ({
    active: K,
    activeNode: F,
    activeNodeRect: Y,
    activatorEvent: ee,
    collisions: pt,
    containerNodeRect: C,
    dragOverlay: me,
    draggableNodes: S,
    droppableContainers: L,
    droppableRects: V,
    over: Ye,
    measureDroppableContainers: j,
    scrollableAncestors: Ee,
    scrollableAncestorRects: Je,
    measuringConfiguration: B,
    measuringScheduled: W,
    windowRect: it
  }), [K, F, Y, ee, pt, C, me, S, L, V, Ye, j, Ee, Je, B, W, it]), Gt = le(() => ({
    activatorEvent: ee,
    activators: Er,
    active: K,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: T
    },
    dispatch: O,
    draggableNodes: S,
    over: Ye,
    measureDroppableContainers: j
  }), [ee, Er, K, Y, O, T, S, Ye, j]);
  return /* @__PURE__ */ N(ri.Provider, {
    value: $,
    children: [/* @__PURE__ */ N(Vr.Provider, {
      value: Gt,
      children: [/* @__PURE__ */ m(Nc.Provider, {
        value: Kr,
        children: /* @__PURE__ */ m(gi.Provider, {
          value: Gr,
          children: d
        })
      }), /* @__PURE__ */ m(kc, {
        disabled: (s == null ? void 0 : s.restoreFocus) === !1
      })]
    }), /* @__PURE__ */ m(Ms, {
      ...s,
      hiddenTextDescribedById: T
    })]
  });
  function Tr() {
    const ve = (de == null ? void 0 : de.autoScrollEnabled) === !1, Re = typeof l == "object" ? l.enabled === !1 : l === !1, Pe = x && !ve && !Re;
    return typeof l == "object" ? {
      ...l,
      enabled: Pe
    } : {
      enabled: Pe
    };
  }
}), Bc = /* @__PURE__ */ Ke(null), Oo = "button", Vc = "Droppable";
function Yc(e) {
  let {
    id: t,
    data: r,
    disabled: n = !1,
    attributes: i
  } = e;
  const a = Lr(Vc), {
    activators: c,
    activatorEvent: s,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: u,
    draggableNodes: f,
    over: v
  } = ye(Vr), {
    role: h = Oo,
    roleDescription: b = "draggable",
    tabIndex: g = 0
  } = i != null ? i : {}, _ = (l == null ? void 0 : l.id) === t, O = ye(_ ? gi : Bc), [P, $] = Nr(), [D, y] = Nr(), x = Tc(c, t), w = cr(r);
  ut(
    () => (f.set(t, {
      id: t,
      key: a,
      node: P,
      activatorNode: D,
      data: w
    }), () => {
      const I = f.get(t);
      I && I.key === a && f.delete(t);
    }),
    [f, t]
  );
  const S = le(() => ({
    role: h,
    tabIndex: g,
    "aria-disabled": n,
    "aria-pressed": _ && h === Oo ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": u.draggable
  }), [n, h, g, _, b, u.draggable]);
  return {
    active: l,
    activatorEvent: s,
    activeNodeRect: d,
    attributes: S,
    isDragging: _,
    listeners: n ? void 0 : x,
    node: P,
    over: v,
    setNodeRef: $,
    setActivatorNodeRef: y,
    transform: O
  };
}
const qc = "Droppable", zc = {
  timeout: 25
};
function bi(e) {
  let {
    data: t,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: i
  } = e;
  const a = Lr(qc), {
    active: c,
    dispatch: s,
    over: l,
    measureDroppableContainers: d
  } = ye(Vr), u = J({
    disabled: r
  }), f = J(!1), v = J(null), h = J(null), {
    disabled: b,
    updateMeasurementsFor: g,
    timeout: _
  } = {
    ...zc,
    ...i
  }, O = cr(g != null ? g : n), P = Ce(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        d(Array.isArray(O.current) ? O.current : [O.current]), h.current = null;
      }, _);
    },
    [_]
  ), $ = Br({
    callback: P,
    disabled: b || !c
  }), D = Ce((S, I) => {
    !$ || (I && ($.unobserve(I), f.current = !1), S && $.observe(S));
  }, [$]), [y, x] = Nr(D), w = cr(t);
  return U(() => {
    !$ || !y.current || ($.disconnect(), f.current = !1, $.observe(y.current));
  }, [y, $]), ut(
    () => (s({
      type: xe.RegisterDroppable,
      element: {
        id: n,
        key: a,
        disabled: r,
        node: y,
        rect: v,
        data: w
      }
    }), () => s({
      type: xe.UnregisterDroppable,
      key: a,
      id: n
    })),
    [n]
  ), U(() => {
    r !== u.current.disabled && (s({
      type: xe.SetDroppableDisabled,
      id: n,
      key: a,
      disabled: r
    }), u.current.disabled = r);
  }, [n, a, r, s]), {
    active: c,
    rect: v,
    isOver: (l == null ? void 0 : l.id) === n,
    node: y,
    over: l,
    setNodeRef: x
  };
}
const Wc = ({
  transform: e
}) => ({
  ...e,
  y: 0
}), Uc = ({
  transform: e
}) => ({
  ...e,
  x: 0
}), Gc = [oe.Down, oe.Right, oe.Up, oe.Left], Hc = (e, { context: { active: t, droppableRects: r, droppableContainers: n, collisionRect: i } }) => {
  var a;
  if (Gc.includes(e.code)) {
    e.preventDefault();
    const c = 20;
    if (!t || !i)
      return;
    const s = [];
    n.getEnabled().forEach((u) => {
      if (!u || (u == null ? void 0 : u.disabled))
        return;
      const f = r.get(u.id);
      if (!!f)
        switch (e.code) {
          case oe.Down:
            i.top < f.top && s.push(u);
            break;
          case oe.Up:
            i.top > f.top + c && s.push(u);
            break;
          case oe.Left:
            i.left >= f.left + f.width && s.push(u);
            break;
          case oe.Right:
            i.left + i.width <= f.left && s.push(u);
            break;
        }
    });
    const l = Vs({
      active: t,
      collisionRect: i,
      droppableRects: r,
      droppableContainers: s,
      pointerCoordinates: null
    }), d = ni(l, "id");
    if (d != null) {
      const u = n.get(d), f = u == null ? void 0 : u.node.current, v = u == null ? void 0 : u.rect.current;
      if (f && v)
        return ((a = u.data.current) == null ? void 0 : a.type) === "container" ? {
          x: v.left,
          y: v.top + c
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, yi = Ke(), tr = (e, t) => Se.map(e, (r) => {
  var n;
  if (!!He(r) && !!r.props) {
    if (((n = r == null ? void 0 : r.props) == null ? void 0 : n.__TYPE) === t)
      return r;
    if (r.props.children)
      return tr(r.props.children, t);
  }
}), Kc = {
  onDragStart({
    active: e
  }) {
    return `Se ha agarrado el elemento arrastrable ${e.data.current.label}.`;
  },
  onDragOver({
    active: e,
    over: t
  }) {
    return t ? `El elemento arrastrable ${e.data.current.label} se movi\xF3 sobre la \xE1rea desplegable ${t.data.current.label}.` : `El elemento arrastrable ${e.data.current.label} ya no est\xE1 sobre una \xE1rea desplegable.`;
  },
  onDragEnd({
    active: e,
    over: t
  }) {
    return t ? `El elemento arrastrable ${e.data.current.label} se solt\xF3 sobre la \xE1rea desplegable ${t.data.current.label}.` : `El elemento arrastrable item ${e.data.current.label} se elimin\xF3.`;
  },
  onDragCancel({
    active: e
  }) {
    return `Se cancelo el arrastre. El elemento arrastrable ${e.data.current.label} se elimin\xF3.`;
  }
}, _i = ({
  children: e,
  multipleDrags: t,
  onValidate: r,
  validate: n,
  reboot: i,
  propValidate: a,
  modifiers: c,
  announcements: s,
  onDragMove: l
}) => {
  const [d, u] = H([]), [f, v] = H(null), [h, b] = H(() => g());
  function g() {
    return [...tr(e, "droppable"), ...tr(e, "general-draggable")].reduce((x, w) => ({
      ...x,
      [w.props.id]: w.props.children ? [...tr(w.props.children, "draggable").map((S) => S.props.id)] : []
    }), {});
  }
  const _ = Object.freeze({
    restrictToVerticalAxis: Uc,
    restrictToHorizontalAxis: Wc
  }), O = Fs(on(pi), on(vi), on(kn, {
    coordinateGetter: Hc
  })), P = (x, w) => {
    if (Object.keys(h).pop() !== x.id && x.data.current.validate.includes(w))
      return u((I) => [...I.filter((L) => L !== w), w]);
    u((I) => [...I.filter((L) => L !== w)]);
  }, $ = (x) => x in h ? x : Object.keys(h).find((w) => h[w].includes(x)), D = ({
    active: x,
    over: w
  }) => {
    if (!w)
      return;
    v(null), P(w, x.id);
    const S = $(w.id), I = $(x.id);
    if (I !== S) {
      if (t)
        return b((M) => ({
          ...M,
          [I]: M[I].filter((Z) => Z !== x.id),
          [S]: [...M[S], x.id]
        }));
      const L = Object.keys(h).pop();
      b((M) => ({
        ...M,
        [S]: S === L ? [...M[S], x.id] : [x.id],
        [I]: S === L ? M[I].filter((Z) => Z !== x.id) : [...M[I].filter((Z) => Z !== x.id), ...M[S]]
      }));
    }
  }, y = (x) => Se.map(x, (w) => {
    if (!w.props)
      return w;
    if (w.props.__TYPE !== "draggable")
      return w.props.id in h && h[w.props.id].length > 0 ? Oe(w, {
        ...w.props
      }, [...h[w.props.id].map((S) => tr(e, "draggable").filter((I) => I.props.id === S)).flat()]) : w.props.children ? Oe(w, {
        ...w.props,
        children: y(w.props.children)
      }) : w;
  });
  return U(() => {
    d.length > 0 && r && r(d);
  }, [d, r]), U(() => {
    i && b(() => g());
  }, [i]), /* @__PURE__ */ m(yi.Provider, {
    value: {
      listId: d,
      propValidate: a,
      validate: n,
      isDragging: f
    },
    children: /* @__PURE__ */ m(Lc, {
      sensors: O,
      accessibility: {
        announcements: s
      },
      onDragStart: ({
        active: x
      }) => v(x.id),
      onDragEnd: D,
      ...!!l && {
        onDragMove: l
      },
      onDragCancel: () => v(null),
      ...c && {
        modifiers: [_[c]]
      },
      children: y(e)
    })
  });
};
_i.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: Kc
};
_i.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.node, o.exports.arrayOf(o.exports.node)]),
  multipleDrags: o.exports.bool,
  onValidate: o.exports.func,
  reboot: o.exports.bool,
  validate: o.exports.bool.isRequired,
  propValidate: o.exports.string.isRequired,
  modifiers: o.exports.oneOf(["restrictToVerticalAxis", "restrictToHorizontalAxis"]),
  announcements: o.exports.object.isRequired,
  onDragMove: o.exports.func
};
const Xc = "_pop_1t0s1_1", Jc = "_pulse_1t0s1_1", gr = {
  "c-droppable": "_c-droppable_1t0s1_1",
  "c-droppable--active": "_c-droppable--active_1t0s1_22",
  "c-draggable": "_c-draggable_1t0s1_27",
  "c-draggable--active": "_c-draggable--active_1t0s1_56",
  pop: Xc,
  pulse: Jc
}, xi = ({
  children: e,
  id: t,
  addClass: r,
  dragging: n,
  label: i,
  attribute: a,
  disabledDefaultAttributes: c,
  element: s
}) => {
  const l = s || "div", {
    listId: d,
    propValidate: u,
    validate: f,
    isDragging: v
  } = ye(yi), {
    attributes: h,
    listeners: b,
    setNodeRef: g,
    transform: _
  } = Yc({
    id: t,
    disabled: f,
    data: {
      label: i
    },
    attributes: a
  });
  return /* @__PURE__ */ m(l, {
    id: t,
    ref: g,
    className: `${gr["c-draggable"]} ${v === t ? n : ""} ${r != null ? r : ""}`,
    style: {
      transform: yn.Translate.toString(_)
    },
    ...f && {
      [u]: !!d.includes(t)
    },
    ...!c && {
      ...h
    },
    ...b,
    children: e
  });
};
xi.defaultProps = {
  __TYPE: "draggable",
  dragging: gr["c-draggable--active"],
  disabledDefaultAttributes: !1
};
xi.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element]),
  id: o.exports.string.isRequired,
  addClass: o.exports.string,
  dragging: o.exports.string,
  label: o.exports.string.isRequired,
  attribute: o.exports.shape({
    role: o.exports.string,
    roleDescription: o.exports.string,
    tabIndex: o.exports.number
  }),
  disabledDefaultAttributes: o.exports.bool,
  element: o.exports.string,
  __TYPE: fe("draggable")
};
const wi = ({
  children: e,
  id: t,
  validate: r,
  addClass: n,
  over: i,
  label: a,
  element: c,
  __TYPE: s,
  ...l
}) => {
  const d = c || "div", {
    isOver: u,
    setNodeRef: f
  } = bi({
    id: t,
    data: {
      validate: r,
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ m(d, {
    ref: f,
    "data-type": s,
    className: `${gr["c-droppable"]} ${u && i && i} ${n != null ? n : ""}`,
    ...l,
    children: e
  });
};
wi.defaultProps = {
  __TYPE: "droppable",
  over: gr["c-droppable--active"]
};
wi.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]),
  id: o.exports.string.isRequired,
  validate: o.exports.array.isRequired,
  addClass: o.exports.string,
  over: o.exports.string,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: fe("droppable")
};
const Ei = ({
  children: e,
  addClass: t,
  id: r,
  label: n,
  element: i
}) => {
  const a = i || "div", {
    setNodeRef: c
  } = bi({
    id: r,
    data: {
      label: n,
      type: "container"
    }
  });
  return /* @__PURE__ */ m(a, {
    id: r,
    ref: c,
    className: `${gr["c-droppable"]} ${t != null ? t : ""}`,
    children: e
  });
};
Ei.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  id: o.exports.string.isRequired,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: fe("general-draggable")
};
Ei.defaultProps = {
  __TYPE: "general-draggable",
  id: bt("unique-id-general-"),
  label: "contendor inicial"
};
const Hu = ({
  ...e
}) => /* @__PURE__ */ m("span", {
  id: "hc_extension_svg_filters",
  ...e,
  children: /* @__PURE__ */ m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: "0",
    children: /* @__PURE__ */ N("defs", {
      children: [/* @__PURE__ */ m("filter", {
        id: "hc_extension_off",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "0 1"
          })]
        })
      }), /* @__PURE__ */ m("filter", {
        id: "hc_extension_highcontrast",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            exponent: "3.0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            exponent: "3.0"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            exponent: "3.0"
          })]
        })
      }), /* @__PURE__ */ m("filter", {
        id: "hc_extension_highcontrast_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            exponent: "0.33"
          })]
        })
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_grayscale",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ m("feColorMatrix", {
          type: "matrix",
          values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
        }), /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            exponent: "3"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            exponent: "3"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            exponent: "3"
          })]
        })]
      }), /* @__PURE__ */ m("filter", {
        id: "hc_extension_grayscale_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            exponent: "0.33"
          })]
        })
      }), /* @__PURE__ */ m("filter", {
        id: "hc_extension_invert",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          })]
        })
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_invert_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "1 0"
          })]
        }), /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            exponent: "1.7"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            exponent: "1.7"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            exponent: "1.7"
          })]
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_yellow_on_black",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          })]
        }), /* @__PURE__ */ m("feColorMatrix", {
          type: "matrix",
          values: "0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0"
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_yellow_on_black_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "1 0"
          })]
        }), /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            exponent: "0.33"
          })]
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_red_on_white",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        filterUnits: "objectBoundingBox",
        primitiveUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/* @__PURE__ */ m("feColorMatrix", {
          type: "matrix",
          values: "                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ N("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "0.97 0.52"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "1 0.03"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "0.98 0.06"
          }), /* @__PURE__ */ m("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ m("feBlend", {
          mode: "normal",
          in: "componentTransfer",
          in2: "SourceGraphic",
          result: "blend"
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_red_on_white_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          })]
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_green_on_blue",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        filterUnits: "objectBoundingBox",
        primitiveUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/* @__PURE__ */ m("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ N("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "0.09 0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "1 0.16"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ m("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ m("feBlend", {
          mode: "normal",
          in: "componentTransfer",
          in2: "SourceGraphic",
          result: "blend"
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_green_on_blue_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          })]
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_yellow_on_blue",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        filterUnits: "objectBoundingBox",
        primitiveUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/* @__PURE__ */ m("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ N("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "0.99 0.16"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ m("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ m("feBlend", {
          mode: "normal",
          in: "componentTransfer",
          in2: "SourceGraphic",
          result: "blend"
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_yellow_on_blue_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          })]
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_white_on_black",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        filterUnits: "objectBoundingBox",
        primitiveUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/* @__PURE__ */ m("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ N("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "0.98 0"
          }), /* @__PURE__ */ m("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ m("feBlend", {
          mode: "normal",
          in: "componentTransfer",
          in2: "SourceGraphic",
          result: "blend"
        })]
      }), /* @__PURE__ */ N("filter", {
        id: "hc_extension_white_on_black_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ N("feComponentTransfer", {
          children: [/* @__PURE__ */ m("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ m("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          })]
        })]
      })]
    })
  })
}), So = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, Ti = ({
  url: e,
  alt: t,
  title: r,
  width: n,
  addClass: i,
  noCaption: a,
  ...c
}) => {
  const [s, l] = H(!1), d = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, u = (v) => l(v), f = s ? d : `${e}`;
  return /* @__PURE__ */ N("figure", {
    className: `${So["c-image"]} ${i != null ? i : ""}`,
    ...n && {
      style: {
        maxWidth: `${n}px`
      }
    },
    children: [/* @__PURE__ */ m("img", {
      src: f,
      onError: u,
      alt: t,
      ...c
    }), !a && /* @__PURE__ */ m("figcaption", {
      className: So["c-image__figcaption"],
      children: /* @__PURE__ */ N("p", {
        children: [/* @__PURE__ */ N("strong", {
          children: [r, "\xA0"]
        }), t]
      })
    })]
  });
};
Ti.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
Ti.propTypes = {
  url: o.exports.string,
  alt: o.exports.string,
  title: o.exports.string,
  width: o.exports.string,
  addClass: o.exports.string,
  noCaption: o.exports.bool
};
const ur = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, Oi = ft(({
  id: e,
  type: t,
  value: r,
  placeholder: n,
  label: i,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  isReadOnly: d,
  onValue: u
}, f) => {
  const [v, h] = H(r || ""), b = le(() => e || bt("c-input-"), [e]), g = ({
    target: _
  }) => {
    u && u({
      id: b,
      value: _.value
    }), h(_.value);
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ N("label", {
    htmlFor: b,
    className: `${ur["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ N("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ m("input", {
      id: b,
      ref: f,
      type: t,
      name: b,
      value: v,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: g,
      className: ur["c-input"],
      ...d && {
        readOnly: d,
        "aria-readonly": d
      }
    })]
  }) : null;
});
Oi.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Oi.propTypes = {
  id: o.exports.string,
  type: o.exports.oneOf(["text", "email", "password", "date"]),
  value: o.exports.oneOfType([o.exports.string, o.exports.number]),
  placeholder: o.exports.string,
  label: o.exports.string.isRequired,
  addClass: o.exports.string,
  isLabelVisible: o.exports.bool,
  isDisabled: o.exports.bool,
  isRequired: o.exports.bool,
  isReadOnly: o.exports.bool,
  onValue: o.exports.func,
  __TYPE: fe("Input")
};
const Zc = ({
  children: e,
  onAllValue: t
}) => {
  const [r, n] = H([]), i = (s) => n([...r.filter((l) => l.id !== s.id), {
    ...s
  }]);
  U(() => {
    t && t(r);
  }, [r, t]);
  const a = (s, l, d) => Se.toArray(s).map((u) => u.props.__TYPE === l ? Oe(u, {
    ...u.props,
    ...d
  }) : u);
  return Se.map(e, (s) => {
    var l, d;
    return He(s) ? ((l = s == null ? void 0 : s.props) == null ? void 0 : l.__TYPE) === "InputStyle" ? Oe(s, {
      ...s.props,
      children: a(s.props.children, "Input", {
        onValue: i
      })
    }) : ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "Input" ? Oe(s, {
      ...s.props,
      onValue: i
    }) : s : null;
  });
};
Zc.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllValue: o.exports.func
};
const Si = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${ur["c-input__wrapper-style"]} ${t != null ? t : ""}`,
  children: Ie(e, ["InputLeftAddon", "InputRightAddon", "Input"])
});
Si.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: fe("InputStyle")
};
Si.defaultProps = {
  __TYPE: "InputStyle"
};
const Ri = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${ur["c-input__left-addon"]} ${t != null ? t : ""}`,
  children: e
});
Ri.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: fe("InputLeftAddon")
};
Ri.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const Pi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${ur["c-input__right-addon"]} ${t != null ? t : ""}`,
  children: e
});
Pi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: fe("InputRightAddon")
};
Pi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const Qc = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, el = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("kbd", {
  className: `${Qc["c-kbd"]} ${t != null ? t : ""}`,
  ...r,
  children: e
});
el.propTypes = {
  children: o.exports.string,
  addClass: o.exports.string
};
const $i = ({
  children: e,
  link: t,
  addClass: r,
  isExternal: n,
  label: i,
  ...a
}) => /* @__PURE__ */ m("a", {
  "aria-label": i,
  href: t,
  ...r && {
    className: `${r}`
  },
  ...n && {
    target: "_blank",
    rel: "noopener"
  },
  ...a,
  children: e
});
$i.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
$i.propTypes = {
  children: o.exports.oneOfType([o.exports.string, o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  link: o.exports.string,
  isExternal: o.exports.bool,
  label: o.exports.string.isRequired
};
const Di = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, tl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("ul", {
  className: `${Di["c-List"]} ${t != null ? t : ""}`,
  ...r,
  children: Ie(e, ["ListItem"])
});
tl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const Ci = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = Se.map(e, (a) => {
    var c;
    return ((c = a == null ? void 0 : a.props) == null ? void 0 : c.__TYPE) === "Icon" ? Oe(a, {
      ...a.props,
      addClass: Di["c-list-item__icon"]
    }) : a;
  });
  return /* @__PURE__ */ m("li", {
    ...t && {
      className: `${t}`
    },
    "data-type": r,
    ...n,
    children: i
  });
};
Ci.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  __TYPE: fe("ListItem")
};
Ci.defaultProps = {
  __TYPE: "ListItem"
};
const rl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("ol", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: Ie(e, ["ListItem"])
});
rl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const nl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("ul", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: Ie(e, ["ListItem"])
});
nl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
var un = function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function fn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, r = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), n = function() {
    function d(u, f) {
      fn(this, d), this._inertManager = f, this._rootElement = u, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return un(d, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(f) {
          this._unmanageNode(f.node);
        }, this), this._observer = null, this._rootElement = null, this._managedNodes = null, this._inertManager = null;
      }
    }, {
      key: "_makeSubtreeUnfocusable",
      value: function(f) {
        var v = this;
        c(f, function(_) {
          return v._visitNode(_);
        });
        var h = document.activeElement;
        if (!document.body.contains(f)) {
          for (var b = f, g = void 0; b; ) {
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              g = b;
              break;
            }
            b = b.parentNode;
          }
          g && (h = g.activeElement);
        }
        f.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
      }
    }, {
      key: "_visitNode",
      value: function(f) {
        if (f.nodeType === Node.ELEMENT_NODE) {
          var v = f;
          v !== this._rootElement && v.hasAttribute("inert") && this._adoptInertRoot(v), (t.call(v, r) || v.hasAttribute("tabindex")) && this._manageNode(v);
        }
      }
    }, {
      key: "_manageNode",
      value: function(f) {
        var v = this._inertManager.register(f, this);
        this._managedNodes.add(v);
      }
    }, {
      key: "_unmanageNode",
      value: function(f) {
        var v = this._inertManager.deregister(f, this);
        v && this._managedNodes.delete(v);
      }
    }, {
      key: "_unmanageSubtree",
      value: function(f) {
        var v = this;
        c(f, function(h) {
          return v._unmanageNode(h);
        });
      }
    }, {
      key: "_adoptInertRoot",
      value: function(f) {
        var v = this._inertManager.getInertRoot(f);
        v || (this._inertManager.setInert(f, !0), v = this._inertManager.getInertRoot(f)), v.managedNodes.forEach(function(h) {
          this._manageNode(h.node);
        }, this);
      }
    }, {
      key: "_onMutation",
      value: function(f, v) {
        f.forEach(function(h) {
          var b = h.target;
          if (h.type === "childList")
            e.call(h.addedNodes).forEach(function(_) {
              this._makeSubtreeUnfocusable(_);
            }, this), e.call(h.removedNodes).forEach(function(_) {
              this._unmanageSubtree(_);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(b);
            else if (b !== this._rootElement && h.attributeName === "inert" && b.hasAttribute("inert")) {
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
    }, {
      key: "hasSavedAriaHidden",
      get: function() {
        return this._savedAriaHidden !== null;
      }
    }, {
      key: "savedAriaHidden",
      set: function(f) {
        this._savedAriaHidden = f;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), d;
  }(), i = function() {
    function d(u, f) {
      fn(this, d), this._node = u, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([f]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return un(d, [{
      key: "destructor",
      value: function() {
        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var f = this._node;
          this._savedTabIndex !== null ? f.setAttribute("tabindex", this._savedTabIndex) : f.removeAttribute("tabindex"), this._overrodeFocusMethod && delete f.focus;
        }
        this._node = null, this._inertRoots = null, this._destroyed = !0;
      }
    }, {
      key: "_throwIfDestroyed",
      value: function() {
        if (this.destroyed)
          throw new Error("Trying to access destroyed InertNode");
      }
    }, {
      key: "ensureUntabbable",
      value: function() {
        if (this.node.nodeType === Node.ELEMENT_NODE) {
          var f = this.node;
          if (t.call(f, r)) {
            if (f.tabIndex === -1 && this.hasSavedTabIndex)
              return;
            f.hasAttribute("tabindex") && (this._savedTabIndex = f.tabIndex), f.setAttribute("tabindex", "-1"), f.nodeType === Node.ELEMENT_NODE && (f.focus = function() {
            }, this._overrodeFocusMethod = !0);
          } else
            f.hasAttribute("tabindex") && (this._savedTabIndex = f.tabIndex, f.removeAttribute("tabindex"));
        }
      }
    }, {
      key: "addInertRoot",
      value: function(f) {
        this._throwIfDestroyed(), this._inertRoots.add(f);
      }
    }, {
      key: "removeInertRoot",
      value: function(f) {
        this._throwIfDestroyed(), this._inertRoots.delete(f), this._inertRoots.size === 0 && this.destructor();
      }
    }, {
      key: "destroyed",
      get: function() {
        return this._destroyed;
      }
    }, {
      key: "hasSavedTabIndex",
      get: function() {
        return this._savedTabIndex !== null;
      }
    }, {
      key: "node",
      get: function() {
        return this._throwIfDestroyed(), this._node;
      }
    }, {
      key: "savedTabIndex",
      set: function(f) {
        this._throwIfDestroyed(), this._savedTabIndex = f;
      },
      get: function() {
        return this._throwIfDestroyed(), this._savedTabIndex;
      }
    }]), d;
  }(), a = function() {
    function d(u) {
      if (fn(this, d), !u)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = u, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(u.head || u.body || u.documentElement), u.readyState === "loading" ? u.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return un(d, [{
      key: "setInert",
      value: function(f, v) {
        if (v) {
          if (this._inertRoots.has(f))
            return;
          var h = new n(f, this);
          if (f.setAttribute("inert", ""), this._inertRoots.set(f, h), !this._document.body.contains(f))
            for (var b = f.parentNode; b; )
              b.nodeType === 11 && s(b), b = b.parentNode;
        } else {
          if (!this._inertRoots.has(f))
            return;
          var g = this._inertRoots.get(f);
          g.destructor(), this._inertRoots.delete(f), f.removeAttribute("inert");
        }
      }
    }, {
      key: "getInertRoot",
      value: function(f) {
        return this._inertRoots.get(f);
      }
    }, {
      key: "register",
      value: function(f, v) {
        var h = this._managedNodes.get(f);
        return h !== void 0 ? h.addInertRoot(v) : h = new i(f, v), this._managedNodes.set(f, h), h;
      }
    }, {
      key: "deregister",
      value: function(f, v) {
        var h = this._managedNodes.get(f);
        return h ? (h.removeInertRoot(v), h.destroyed && this._managedNodes.delete(f), h) : null;
      }
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var f = e.call(this._document.querySelectorAll("[inert]"));
        f.forEach(function(v) {
          this.setInert(v, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
    }, {
      key: "_watchForInert",
      value: function(f, v) {
        var h = this;
        f.forEach(function(b) {
          switch (b.type) {
            case "childList":
              e.call(b.addedNodes).forEach(function(O) {
                if (O.nodeType === Node.ELEMENT_NODE) {
                  var P = e.call(O.querySelectorAll("[inert]"));
                  t.call(O, "[inert]") && P.unshift(O), P.forEach(function($) {
                    this.setInert($, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (b.attributeName !== "inert")
                return;
              var g = b.target, _ = g.hasAttribute("inert");
              h.setInert(g, _);
              break;
          }
        }, this);
      }
    }]), d;
  }();
  function c(d, u, f) {
    if (d.nodeType == Node.ELEMENT_NODE) {
      var v = d;
      u && u(v);
      var h = v.shadowRoot;
      if (h) {
        c(h, u);
        return;
      }
      if (v.localName == "content") {
        for (var b = v, g = b.getDistributedNodes ? b.getDistributedNodes() : [], _ = 0; _ < g.length; _++)
          c(g[_], u);
        return;
      }
      if (v.localName == "slot") {
        for (var O = v, P = O.assignedNodes ? O.assignedNodes({ flatten: !0 }) : [], $ = 0; $ < P.length; $++)
          c(P[$], u);
        return;
      }
    }
    for (var D = d.firstChild; D != null; )
      c(D, u), D = D.nextSibling;
  }
  function s(d) {
    if (!d.querySelector("style#inert-style, link#inert-style")) {
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
`, d.appendChild(u);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var l = new a(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      get: function() {
        return this.hasAttribute("inert");
      },
      set: function(u) {
        l.setInert(this, u);
      }
    });
  }
})();
const Fn = Ke(), ol = Object.freeze({
  ESC: 27
}), Ni = ({
  children: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n
}) => {
  const i = J(), a = (d) => {
    const u = document.querySelector("#root");
    u.inert = d;
  }, c = (d) => {
    (d.keyCode || d.which) === ol.ESC && l();
  }, s = (d, u) => {
    i.current.classList.replace(d, u);
  }, l = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), a(!1), r(!t);
    }, 400), n && n.current.focus();
  };
  return U(() => {
    t && (a(!0), i.current && i.current.focus());
  }, [t]), /* @__PURE__ */ m(Fn.Provider, {
    value: {
      isOpen: t,
      onKeyDown: c,
      onCloseModal: l,
      refModal: i
    },
    children: /* @__PURE__ */ m(br, {
      id: "js-modal",
      children: Ie(e, ["ModalContent", "ModalOverlay"])
    })
  });
};
Ni.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Ni.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  isOpen: o.exports.bool.isRequired,
  onClose: o.exports.func.isRequired,
  label: o.exports.string.isRequired,
  finalFocusRef: o.exports.object
};
const $r = {
  "c-layout": "_c-layout_1n02n_1",
  "c-modal": "_c-modal_1n02n_1",
  "c-modal-container": "_c-modal-container_1n02n_33",
  "c-close-button": "_c-close-button_1n02n_38"
}, Ai = ({
  label: e,
  addClass: t,
  children: r,
  onClick: n,
  onKeyDown: i,
  __TYPE: a,
  ...c
}) => {
  const {
    isOpen: s,
    onKeyDown: l,
    onCloseModal: d,
    refModal: u
  } = ye(Fn), f = (h) => {
    n && typeof n == "function" && n(h), d();
  };
  return /* @__PURE__ */ N("div", {
    ref: u,
    role: "dialog",
    tabIndex: "-1",
    hidden: !s,
    "aria-label": e,
    "aria-modal": "true",
    "data-type": a,
    onKeyDown: (h) => {
      i && typeof i == "function" && i(h), l(h);
    },
    className: `${$r["c-modal"]} animate__animated animate__fadeIn animate__faster u-px-3 u-py-3 ${t != null ? t : ""}`,
    ...c,
    children: [/* @__PURE__ */ m("div", {
      className: `${$r["c-modal-container"]}`,
      children: r
    }), /* @__PURE__ */ m(Dt, {
      addClass: $r["c-close-button"],
      label: "Cerrar modal",
      hasAriaLabel: !0,
      icon: {
        name: "close"
      },
      onClick: f
    })]
  });
};
Ai.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  label: o.exports.string.isRequired,
  onClick: o.exports.func,
  onKeyDown: o.exports.func,
  __TYPE: fe("ModalContent")
};
Ai.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const Ii = ({
  addClass: e,
  onClick: t
}) => {
  const {
    isOpen: r,
    onCloseModal: n
  } = ye(Fn), i = (a) => {
    t && typeof t == "function" && t(a), n();
  };
  return /* @__PURE__ */ m("div", {
    className: `${$r["c-layout"]} ${e != null ? e : ""}`,
    onClick: i,
    hidden: !r
  });
};
Ii.propTypes = {
  addClass: o.exports.string,
  onClick: o.exports.func,
  __TYPE: fe("ModalOverlay")
};
Ii.defaultProps = {
  __TYPE: "ModalOverlay"
};
const Lt = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, Yr = Ke(), ki = ({
  children: e,
  addClass: t,
  keepWithinRange: r,
  defaultValue: n,
  min: i,
  max: a,
  step: c,
  onValue: s
}) => {
  const [l, d] = H(n || 0), u = () => {
    if (r && l > a)
      return d(a);
    d((b) => b + c);
  }, f = () => {
    if (r && l < i)
      return d(i);
    d((b) => b - c);
  }, v = (b) => d(b), h = (b) => r && l === b;
  return U(() => {
    s && s(l);
  }, [l, s]), /* @__PURE__ */ m(Yr.Provider, {
    value: {
      counter: l,
      min: i || Number.MIN_SAFE_INTEGER,
      max: a || Number.MAX_SAFE_INTEGER,
      validate: h,
      onChangeValue: v,
      onIncrementValue: u,
      onDecrementValue: f
    },
    children: /* @__PURE__ */ m("div", {
      className: `${Lt["c-number-input"]} ${t != null ? t : ""}`,
      children: Ie(e, ["NumberInputField", "NumberInputStepper"])
    })
  });
};
ki.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  addClass: o.exports.string,
  max: o.exports.number,
  min: o.exports.number,
  defaultValue: o.exports.number,
  step: o.exports.number,
  onValue: o.exports.func,
  keepWithinRange: o.exports.bool
};
ki.defaultProps = {
  step: 1
};
const Mi = ft(({
  id: e,
  name: t,
  label: r,
  pattern: n,
  addClass: i,
  isLabelVisible: a
}, c) => {
  const {
    counter: s,
    onChangeValue: l,
    onIncrementValue: d,
    onDecrementValue: u,
    min: f,
    max: v
  } = ye(Yr), h = le(() => e || bt("c-number-input-"), [e]), b = Object.freeze({
    UP: 38,
    DOWN: 40,
    END: 35,
    HOME: 36
  }), g = ({
    target: O
  }) => {
    if (!isNaN(O.value) && O.value)
      return l(parseInt(O.value));
    l(0);
  }, _ = (O) => {
    switch (O.keyCode || O.which) {
      case b.UP:
        d();
        break;
      case b.DOWN:
        u();
        break;
      case b.END:
        l(v);
        break;
      case b.HOME:
        l(f);
        break;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ N("label", {
    htmlFor: h,
    className: `${Lt["c-number-input__label"]} ${i != null ? i : ""}`,
    children: [/* @__PURE__ */ N("span", {
      className: `${!a && "u-sr-only"}`,
      children: [" ", r, " "]
    }), /* @__PURE__ */ m("input", {
      id: h,
      ref: c,
      type: "text",
      name: t,
      role: "spinbutton",
      inputMode: "decimal",
      pattern: n,
      autoCorrect: "off",
      autoComplete: "off",
      className: Lt["c-number-input__input"],
      onChange: g,
      onKeyDown: _,
      ...s || s === 0 ? {
        value: s,
        "aria-valuemax": v,
        "aria-valuemin": f,
        "aria-valuenow": s,
        "aria-valuetext": `${s}`
      } : {
        value: ""
      }
    })]
  });
});
Mi.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Mi.propTypes = {
  id: o.exports.string,
  name: o.exports.string,
  label: o.exports.string,
  pattern: o.exports.string,
  addClass: o.exports.string,
  isLabelVisible: o.exports.bool,
  __TYPE: fe("NumberInputField")
};
const Fi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${Lt["c-number-input__stepper"]} ${t != null ? t : ""}`,
  children: Ie(e, ["NumberIncrementStepper", "NumberDecrementStepper"])
});
Fi.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: fe("NumberInputStepper")
};
Fi.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const ji = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onDecrementValue: n,
    validate: i,
    min: a
  } = ye(Yr);
  return /* @__PURE__ */ m("button", {
    tabIndex: -1,
    onClick: n,
    disabled: i(a),
    "aria-label": `${r != null ? r : "Decrementar valor"}`,
    className: `${Lt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ m(De, {
      name: "arrow_drop_down"
    })
  });
};
ji.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: fe("NumberDecrementStepper"),
  label: o.exports.string
};
ji.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Li = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onIncrementValue: n,
    validate: i,
    max: a
  } = ye(Yr);
  return /* @__PURE__ */ m("button", {
    tabIndex: -1,
    onClick: n,
    disabled: i(a),
    "aria-label": `${r != null ? r : "Incrementar valor"}`,
    className: `${Lt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ m(De, {
      name: "arrow_drop_up"
    })
  });
};
Li.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: fe("NumberIncrementStepper"),
  label: o.exports.string
};
Li.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const il = (e) => {
  const {
    boundaryCount: t = 1,
    count: r = 1,
    defaultPage: n = 1,
    disabled: i = !1,
    hideNextButton: a = !1,
    hidePrevButton: c = !1,
    onChange: s,
    showFirstButton: l = !1,
    showLastButton: d = !1,
    siblingCount: u = 1,
    ...f
  } = e, [v, h] = H(n), b = (w, S) => {
    h(S), s && s(w, S);
  }, g = (w, S) => {
    const I = S - w + 1;
    return Array.from({ length: I }, (L, M) => w + M);
  }, _ = g(1, Math.min(t, r)), O = g(Math.max(r - t + 1, t + 1), r), P = Math.max(
    Math.min(
      v - u,
      r - t - u * 2 - 1
    ),
    t + 2
  ), $ = Math.min(
    Math.max(
      v + u,
      t + u * 2 + 2
    ),
    O.length > 0 ? O[0] - 2 : r - 1
  ), D = [
    ...l ? ["first"] : [],
    ...c ? [] : ["previous"],
    ..._,
    ...P > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : [],
    ...g(P, $),
    ...$ < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : [],
    ...O,
    ...a ? [] : ["next"],
    ...d ? ["last"] : []
  ], y = (w) => {
    switch (w) {
      case "first":
        return 1;
      case "previous":
        return v - 1;
      case "next":
        return v + 1;
      case "last":
        return r;
      default:
        return null;
    }
  };
  return {
    items: D.map((w) => typeof w == "number" ? {
      onClick: (S) => {
        b(S, w);
      },
      type: "page",
      page: w,
      selected: w === v,
      disabled: i,
      "aria-current": w === v ? !0 : void 0
    } : {
      onClick: (S) => {
        b(S, y(w));
      },
      type: w,
      page: y(w),
      selected: !1,
      disabled: i || w.indexOf("ellipsis") === -1 && (w === "next" || w === "last" ? v >= r : v <= 1)
    }),
    ...f
  };
}, ir = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, al = Object.freeze({
  first: "primera",
  last: "\xFAltima",
  previous: "anterior",
  next: "siguiente"
}), sl = (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}p\xE1gina ${t}` : `Ir a la ${al[e]} p\xE1gina`, Bi = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: r,
  ...n
}) => {
  const {
    items: i
  } = il({
    ...n
  });
  return /* @__PURE__ */ m("nav", {
    className: `${r != null ? r : ""} ${ir["c-pagination"]}`,
    children: /* @__PURE__ */ m("ul", {
      className: ir["c-pagination__ul"],
      children: i.map((a, c) => /* @__PURE__ */ m("li", {
        children: e({
          ...a,
          "aria-label": t(a.type, a.page, a.selected)
        })
      }, `pagination-item-${c}`))
    })
  });
};
Bi.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ m(jn, {
    ...e
  }),
  getItemAriaLabel: sl
};
Bi.propTypes = {
  addClass: o.exports.string,
  boundaryCount: o.exports.number,
  count: o.exports.number,
  defaultPage: o.exports.number,
  disabled: o.exports.bool,
  hideNextButton: o.exports.bool,
  hidePrevButton: o.exports.bool,
  onChange: o.exports.func,
  showFirstButton: o.exports.bool,
  showLastButton: o.exports.bool,
  siblingCount: o.exports.number,
  renderItem: o.exports.func,
  getItemAriaLabel: o.exports.func
};
const jn = ({
  page: e,
  type: t,
  addClass: r,
  disabled: n,
  element: i,
  icons: a,
  selected: c,
  ...s
}) => {
  const d = {
    previous: a.previous || "navigate_before",
    next: a.next || "navigate_next",
    last: a.last || "last_page",
    first: a.first || "first_page"
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? /* @__PURE__ */ m("div", {
    className: ir["c-pagination-item__ellipsis"],
    children: "..."
  }) : Oe(i, {
    disabled: n,
    className: `${ir["c-pagination-item"]} ${r != null ? r : ""} ${c ? ir["c-pagination-item--selected"] : ""}`,
    ...i.props,
    ...s
  }, [
    t === "page" && e,
    d ? /* @__PURE__ */ m(De, {
      name: d
    }, t) : null
  ]);
};
jn.propTypes = {
  page: o.exports.number,
  type: o.exports.string,
  addClass: o.exports.string,
  disabled: o.exports.bool,
  selected: o.exports.bool,
  element: o.exports.oneOfType([o.exports.element, o.exports.node, o.exports.string]),
  icons: o.exports.shape({
    first: o.exports.string,
    last: o.exports.string,
    next: o.exports.string,
    previous: o.exports.string
  })
};
jn.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next",
    last: "last_page",
    first: "first_page"
  },
  element: /* @__PURE__ */ m("button", {})
};
const Ft = {
  "c-panel": "_c-panel_swo2e_1",
  "c-section": "_c-section_swo2e_10",
  "c-navigation": "_c-navigation_swo2e_16",
  "c-navigation__item": "_c-navigation__item_swo2e_30",
  "c-navigation__section": "_c-navigation__section_swo2e_34",
  "c-navigation__button": "_c-navigation__button_swo2e_52"
}, qr = Ke(), cl = ({
  children: e,
  defaultIndex: t,
  addClass: r
}) => {
  const [n, i] = H(1), a = {
    index: [],
    counter: 0
  }, c = (d) => i(d), s = (d) => n === d;
  U(() => {
    t !== void 0 && i(t);
  }, [t]);
  const l = Se.map(e, (d) => He(d) ? d.props.__TYPE === "Section" ? (a.counter++, a.index.push(a.counter), Oe(d, {
    ...d.props,
    id: a.counter
  })) : d : null);
  return /* @__PURE__ */ m(qr.Provider, {
    value: {
      validation: s,
      onToggle: c,
      listId: a.index,
      currentSection: n
    },
    children: /* @__PURE__ */ m("div", {
      className: `${Ft["c-panel"]} ${r != null ? r : ""}`,
      children: l
    })
  });
};
cl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node, o.exports.string]),
  defaultIndex: o.exports.number,
  addClass: o.exports.string
};
const Vi = ({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...i
}) => {
  const {
    validation: a
  } = ye(qr), c = a(t);
  return /* @__PURE__ */ N("section", {
    role: "tabpanel",
    hidden: !c,
    "data-type": n,
    "aria-hidden": !c,
    "aria-labelledby": `section-${t}`,
    className: `${Ft["c-section"]} ${r != null ? r : ""}`,
    ...i,
    children: [/* @__PURE__ */ N("span", {
      id: `section-${t}`,
      className: "u-sr-only",
      children: ["Secci\xF3n ", t]
    }), e]
  });
};
Vi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  addClass: o.exports.string,
  __TYPE: fe("Section")
};
Vi.defaultProps = {
  __TYPE: "Section"
};
const ll = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), ul = (e, t, r) => e === "section" ? `${r ? "" : "Ir a la "}secci\xF3n ${t}` : `Ir a la ${ll[e]} secci\xF3n`, Yi = ({
  renderItem: e,
  showPrevButton: t,
  showNextButton: r,
  icons: n,
  label: i,
  orientation: a,
  onValue: c,
  addClass: s,
  getItemAriaLabel: l
}) => {
  const {
    validation: d,
    onToggle: u,
    listId: f,
    currentSection: v
  } = ye(qr), h = J([]), b = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), g = Object.freeze({
    previous: v - 1,
    next: v + 1
  }), _ = {
    previous: n.previous || "navigate_before",
    next: n.next || "navigate_next"
  }, O = [
    ...t ? ["previous"] : [],
    ...f || [],
    ...r ? ["next"] : []
  ], P = (x) => !h.current.includes(x) && x ? h.current = [...h.current, x] : h.current, $ = (x) => {
    const w = h.current[0], S = h.current[h.current.length - 1];
    if ((x.keyCode || x.which) === b.LEFT)
      if (x.target === w)
        S.focus();
      else {
        const I = h.current.indexOf(x.target) - 1;
        h.current[I].focus();
      }
    else if ((x.keyCode || x.which) === b.RIGHT)
      if (x.target === S)
        w.focus();
      else {
        const I = h.current.indexOf(x.target) + 1;
        h.current[I].focus();
      }
  }, D = (x) => {
    u(x), c !== void 0 && c(x, f.length);
  }, y = O.map((x) => typeof x == "number" ? {
    onClick: (w) => {
      D(x);
    },
    type: "section",
    section: x,
    selected: d(x),
    ref: P,
    onKeyDown: $
  } : {
    onClick: () => {
      D(g[x]);
    },
    type: x,
    section: g[x],
    selected: !1,
    disabled: x === "next" ? v >= f.length : v <= 1
  });
  return U(() => {
    c !== void 0 && c(v, f.length);
  }, []), /* @__PURE__ */ N(gt, {
    children: [/* @__PURE__ */ m("h2", {
      id: "section-list-navigation",
      className: "u-sr-only",
      children: i
    }), /* @__PURE__ */ m("ul", {
      role: "tablist",
      "aria-labelledby": "section-list-navigation",
      "aria-orientation": a,
      className: `${Ft["c-navigation"]} ${s != null ? s : ""}`,
      children: e ? e(y) : y.map(({
        section: x,
        type: w,
        selected: S,
        ...I
      }, L) => /* @__PURE__ */ m("li", {
        role: "presentation",
        className: Ft["c-navigation__item"],
        children: w === "section" ? /* @__PURE__ */ m("button", {
          id: `navigation-section-tab-${x}`,
          role: "tab",
          tabIndex: `${S ? 0 : -1}`,
          "aria-selected": S,
          className: Ft["c-navigation__section"],
          "aria-label": l(w, x, S),
          ...I
        }) : /* @__PURE__ */ m("button", {
          type: "button",
          className: `${Ft["c-navigation__button"]}`,
          "aria-label": l(w, x, S),
          ...I,
          children: _[w] ? /* @__PURE__ */ m(De, {
            name: _[w]
          }, w) : null
        })
      }, `navigation-section-item-${L}`))
    })]
  });
};
Yi.propTypes = {
  renderItem: o.exports.func,
  showNextButton: o.exports.bool,
  showPrevButton: o.exports.bool,
  icons: o.exports.shape({
    next: o.exports.string,
    previous: o.exports.string
  }),
  label: o.exports.string,
  orientation: o.exports.string,
  onValue: o.exports.func,
  addClass: o.exports.string,
  getItemAriaLabel: o.exports.func
};
Yi.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next"
  },
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: ul
};
const fl = ({
  children: e,
  section: t,
  onClick: r
}) => {
  const {
    onToggle: n
  } = ye(qr), i = (a) => {
    n(t), r && r(a);
  };
  return Se.map(e, (a) => Oe(a, {
    ...a.props,
    onClick: i
  }));
};
fl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]).isRequired,
  section: o.exports.number.isRequired,
  onClick: o.exports.func
};
const dl = {
  "c-paper": "_c-paper_1sbf6_1"
}, pl = ({
  children: e,
  color: t,
  addClass: r,
  ...n
}) => {
  const i = J(null);
  return Yo(() => {
    t && i.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ m("div", {
    ref: i,
    className: `${dl["c-paper"]} ${r != null ? r : ""}`,
    ...n,
    children: e
  });
};
pl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  color: o.exports.string
};
const vl = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, hl = (e) => {
  document.body.append(e);
}, ml = (e) => {
  const t = J(null);
  U(() => {
    const n = document.querySelector(`#${e}`), i = n || vl(e);
    return n || hl(i), i.append(t.current), () => {
      t.current.remove(), i.childElementCount || i.remove();
    };
  }, [e]);
  function r() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return r();
}, br = ({
  children: e,
  id: t
}) => {
  const r = ml(t);
  return zo(e, r);
};
br.propTypes = {
  children: o.exports.any,
  id: o.exports.string.isRequired
};
const gl = "_row_1adiy_1", bl = {
  row: gl
}, yl = ft(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ m("div", {
  ref: r,
  className: `${bl.row} ${e != null ? e : ""}`,
  ...t
}));
yl.propTypes = {
  addClass: o.exports.string
};
const dn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, qi = ft(({
  children: e,
  id: t,
  placeholder: r,
  label: n,
  icon: i,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  onChoise: d
}, u) => {
  const [f, v] = H(), h = le(() => t || bt("c-select-"), [t]), b = ({
    target: g
  }) => {
    d && d({
      id: h,
      value: g.value
    }), v(g.value);
  };
  return /* @__PURE__ */ N("label", {
    htmlFor: h,
    ...a && {
      className: `${a}`
    },
    children: [/* @__PURE__ */ N("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", n, " "]
    }), /* @__PURE__ */ N("div", {
      className: dn["c-select-wrapper"],
      children: [/* @__PURE__ */ N("select", {
        id: h,
        ref: u,
        name: h,
        value: f,
        defaultValue: "default",
        className: dn["c-select"],
        onChange: b,
        disabled: s,
        required: l,
        children: [/* @__PURE__ */ m("option", {
          value: "default",
          disabled: !0,
          children: r
        }), Ie(e, ["option", "optgroup"])]
      }), /* @__PURE__ */ m(De, {
        name: `${i != null ? i : "arrow_drop_down"}`,
        addClass: dn["c-select__icon"]
      })]
    })]
  });
});
qi.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  isLabelVisible: !1,
  __TYPE: "Select"
};
qi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.node]),
  id: o.exports.string,
  placeholder: o.exports.string,
  label: o.exports.string.isRequired,
  icon: o.exports.string,
  addClass: o.exports.string,
  isLabelVisible: o.exports.bool,
  isDisabled: o.exports.bool,
  isRequired: o.exports.bool,
  onChoise: o.exports.func,
  __TYPE: fe("Select")
};
const _l = ({
  children: e,
  onAllSelect: t
}) => {
  const [r, n] = H([]), i = (c) => n([...r.filter((s) => s.id !== c.id), {
    ...c
  }]);
  return U(() => {
    t && t(r);
  }, [r, t]), Se.map(e, (c) => {
    var s;
    return He(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? Oe(c, {
      ...c.props,
      onChoise: i
    }) : c : null;
  });
};
_l.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllSelect: o.exports.func
};
const pn = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, Ro = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), zi = ft(({
  id: e,
  name: t,
  size: r,
  value: n,
  label: i,
  addClass: a,
  isDisabled: c,
  defaultChecked: s,
  isLabelVisible: l,
  onChange: d
}, u) => {
  const [f, v] = H(!1), h = le(() => e || bt("c-input-"), [e]), b = ({
    target: _
  }) => {
    if (v(_.checked), !!d) {
      if (_.checked) {
        d({
          id: _.id,
          value: _.value
        });
        return;
      }
      d({
        id: _.id,
        value: ""
      });
    }
  }, g = (_) => {
    ((_.keyCode || _.which) === Ro.SPACE || (_.keyCode || _.which) === Ro.ENTER) && v((O) => (d && d(O ? {
      id: h,
      value: ""
    } : {
      id: h,
      value: `${n}`
    }), !O));
  };
  return U(() => (s && v(!!s), () => {
    v(!1);
  }), [s]), /* @__PURE__ */ N("label", {
    htmlFor: h,
    className: `${pn["c-label"]} ${pn[`is-${r}`]}`,
    children: [/* @__PURE__ */ N("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ m("input", {
      id: h,
      ref: u,
      role: "switch",
      type: "checkbox",
      name: t,
      value: n,
      checked: f,
      "aria-disabled": c,
      className: `${pn["c-switch"]} ${a != null ? a : ""}`,
      onChange: b,
      onKeyDown: g,
      ...c && {
        disabled: !0
      }
    })]
  });
});
zi.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
zi.propTypes = {
  id: o.exports.string,
  name: o.exports.string,
  size: o.exports.string.isRequired,
  value: o.exports.oneOfType([o.exports.string, o.exports.number, o.exports.bool]),
  label: o.exports.string,
  addClass: o.exports.string,
  isDisabled: o.exports.bool,
  defaultChecked: o.exports.bool,
  isLabelVisible: o.exports.bool,
  onChange: o.exports.func
};
const Ln = Ke(), xl = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  ...n
}) => {
  const [i, a] = H(0), c = (l) => a(l), s = (l) => i === l;
  return U(() => {
    t !== void 0 && a(t);
  }, [t]), /* @__PURE__ */ m(Ln.Provider, {
    value: {
      validation: s,
      onToggle: c
    },
    children: /* @__PURE__ */ m("div", {
      ...r && {
        className: `${r}`
      },
      ...n,
      children: Ie(e, ["TabList", "TabPanels"])
    })
  });
};
xl.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  defaultIndex: o.exports.number,
  addClass: o.exports.string
};
const fr = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, Wi = ({
  children: e,
  id: t,
  selected: r,
  addClass: n,
  icon: i,
  addNewRef: a,
  onNavigation: c,
  __TYPE: s,
  ...l
}) => {
  const d = J(), {
    validation: u,
    onToggle: f
  } = ye(Ln), v = u(t);
  return U(() => (d.current && a(d.current), () => {
    d.current = null;
  }), [d]), /* @__PURE__ */ N("button", {
    id: `tab-${t}`,
    role: "tab",
    ref: d,
    "data-type": s,
    tabIndex: `${v ? 0 : -1}`,
    "aria-controls": `panel-${t}`,
    "aria-selected": v,
    onKeyDown: c,
    onClick: () => f(t),
    className: `${fr["c-tab__button"]} u-flex ${n != null ? n : ""} ${v && r && r}`,
    ...l,
    children: [e, i && i(v)]
  });
};
Wi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  selected: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  addNewRef: o.exports.func,
  onNavigation: o.exports.func,
  __TYPE: fe("Tab")
};
Wi.defaultProps = {
  __TYPE: "Tab"
};
const Ui = ({
  children: e,
  addClass: t,
  label: r,
  orientation: n,
  __TYPE: i,
  ...a
}) => {
  const c = J([]), s = (f) => c.current = [...c.current, f], l = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), d = (f) => {
    const v = c.current[0], h = c.current[c.current.length - 1];
    if ((f.keyCode || f.which) === l.LEFT)
      if (f.target === v)
        h.focus();
      else {
        const b = c.current.indexOf(f.target) - 1;
        c.current[b].focus();
      }
    else if ((f.keyCode || f.which) === l.RIGHT)
      if (f.target === h)
        v.focus();
      else {
        const b = c.current.indexOf(f.target) + 1;
        c.current[b].focus();
      }
  }, u = Se.map(e, (f, v) => He(f) ? Oe(f, {
    ...f.props,
    id: v,
    addNewRef: s,
    onNavigation: d
  }) : null);
  return /* @__PURE__ */ m("div", {
    role: "tablist",
    "data-type": i,
    "aria-label": r,
    "aria-orientation": n,
    className: `${fr["c-tab__list"]} ${t != null ? t : ""}`,
    ...a,
    children: Ie(u, ["Tab"])
  });
};
Ui.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  label: o.exports.string,
  orientation: o.exports.string,
  __TYPE: fe("TabList")
};
Ui.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const Gi = ({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...i
}) => {
  const {
    validation: a
  } = ye(Ln), c = a(t);
  return /* @__PURE__ */ m("div", {
    id: `panel-${t}`,
    role: "tabpanel",
    tabIndex: 0,
    "data-type": n,
    "aria-hidden": !c,
    hidden: !c,
    "aria-labelledby": `tab-${t}`,
    className: `${c ? fr["c-tab__panel--active"] : fr["c-tab__panel"]} ${r != null ? r : ""}`,
    ...i,
    children: e
  });
};
Gi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  addClass: o.exports.string,
  __TYPE: fe("TabPanel")
};
Gi.defaultProps = {
  __TYPE: "TabPanel"
};
const Hi = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = Se.map(e, (a, c) => He(a) ? Oe(a, {
    ...a.props,
    id: c
  }) : null);
  return /* @__PURE__ */ m("div", {
    className: `${fr["c-tab__panels"]} ${t != null ? t : ""}`,
    "data-type": r,
    ...n,
    children: Ie(i, ["TabPanel"])
  });
};
Hi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: fe("TabPanels")
};
Hi.defaultProps = {
  __TYPE: "TabPanels"
};
const vn = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, Ki = ft(({
  id: e,
  value: t,
  resize: r,
  placeholder: n,
  label: i,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  onValue: d,
  ...u
}, f) => {
  const v = le(() => e || bt("c-input-"), [e]), h = ({
    target: b
  }) => {
    d && d({
      id: v,
      value: b.value
    });
  };
  return /* @__PURE__ */ N("label", {
    htmlFor: v,
    className: `${vn["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ N("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ m("textarea", {
      id: v,
      ref: f,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: h,
      className: `${vn["c-textarea"]} ${vn[`c-textarea--${r}`]}`,
      ...u,
      children: t
    })]
  });
});
Ki.defaultProps = {
  resize: "vertical",
  placeholder: "Here is a sample placeholder"
};
Ki.propTypes = {
  id: o.exports.string,
  value: o.exports.string,
  resize: o.exports.oneOf(["none", "horizontal", "vertical"]),
  placeholder: o.exports.string,
  label: o.exports.string,
  addClass: o.exports.string,
  isLabelVisible: o.exports.bool,
  isDisabled: o.exports.bool,
  isRequired: o.exports.bool,
  onValue: o.exports.func
};
const wl = qo(({
  children: e,
  theme: t = {}
}) => {
  const r = (n) => {
    const i = document.createElement("style");
    document.head.append(i);
    const a = i.sheet;
    let c = "";
    for (const s in n)
      c += `--clr-${s}: ${n[s]};
`;
    a.insertRule(`:root{${c}}`);
  };
  return U(() => {
    r(t);
  }, [t]), e;
});
wl.propTypes = {
  children: o.exports.oneOfType([o.exports.array, o.exports.element]),
  theme: o.exports.object.isRequired
};
const Bn = Ke(), El = ({
  children: e
}) => {
  const [t, r] = H(!1), n = J(), i = () => r(!t), a = (c) => {
    n.current || (n.current = c);
  };
  return /* @__PURE__ */ m(Bn.Provider, {
    value: {
      isOpen: t,
      onOpen: i,
      setRefButton: a,
      refButton: n
    },
    children: Ie(e, ["ToggletipButton", "ToggletipContent"])
  });
};
El.propTypes = {
  children: o.exports.arrayOf(o.exports.element)
};
const Xi = ({
  children: e
}) => {
  const {
    onOpen: t,
    setRefButton: r
  } = ye(Bn);
  if (Se.count(e) > 1)
    return null;
  const n = (i) => He(i) ? Oe(i, {
    ...i.props,
    ref: r,
    onClick: t
  }) : null;
  return Se.map(e, n);
};
Xi.propTypes = {
  children: o.exports.element,
  __TYPE: fe("ToggletipButton")
};
Xi.defaultProps = {
  __TYPE: "ToggletipButton"
};
var Po = function(t) {
  return t.reduce(function(r, n) {
    var i = n[0], a = n[1];
    return r[i] = a, r;
  }, {});
}, $o = typeof window < "u" && window.document && window.document.createElement ? $t.useLayoutEffect : $t.useEffect, je = "top", Ue = "bottom", Ge = "right", Le = "left", zr = "auto", yr = [je, Ue, Ge, Le], Bt = "start", dr = "end", Tl = "clippingParents", Ji = "viewport", er = "popper", Ol = "reference", Do = /* @__PURE__ */ yr.reduce(function(e, t) {
  return e.concat([t + "-" + Bt, t + "-" + dr]);
}, []), Zi = /* @__PURE__ */ [].concat(yr, [zr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Bt, t + "-" + dr]);
}, []), Sl = "beforeRead", Rl = "read", Pl = "afterRead", $l = "beforeMain", Dl = "main", Cl = "afterMain", Nl = "beforeWrite", Al = "write", Il = "afterWrite", En = [Sl, Rl, Pl, $l, Dl, Cl, Nl, Al, Il];
function at(e) {
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
function Ve(e) {
  var t = Xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Vn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function kl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !Ve(a) || !at(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(c) {
      var s = i[c];
      s === !1 ? a.removeAttribute(c) : a.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Ml(e) {
  var t = e.state, r = {
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
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], a = t.attributes[n] || {}, c = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = c.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !Ve(i) || !at(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Fl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: kl,
  effect: Ml,
  requires: ["computeStyles"]
};
function tt(e) {
  return e.split("-")[0];
}
var Ct = Math.max, Mr = Math.min, Vt = Math.round;
function Tn() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Qi() {
  return !/^((?!chrome|android).)*safari/i.test(Tn());
}
function Yt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && Ve(e) && (i = e.offsetWidth > 0 && Vt(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Vt(n.height) / e.offsetHeight || 1);
  var c = Nt(e) ? Xe(e) : window, s = c.visualViewport, l = !Qi() && r, d = (n.left + (l && s ? s.offsetLeft : 0)) / i, u = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / i, v = n.height / a;
  return {
    width: f,
    height: v,
    top: u,
    right: d + f,
    bottom: u + v,
    left: d,
    x: d,
    y: u
  };
}
function Yn(e) {
  var t = Yt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function ea(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Vn(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function nt(e) {
  return Xe(e).getComputedStyle(e);
}
function jl(e) {
  return ["table", "td", "th"].indexOf(at(e)) >= 0;
}
function yt(e) {
  return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Wr(e) {
  return at(e) === "html" ? e : e.assignedSlot || e.parentNode || (Vn(e) ? e.host : null) || yt(e);
}
function Co(e) {
  return !Ve(e) || nt(e).position === "fixed" ? null : e.offsetParent;
}
function Ll(e) {
  var t = /firefox/i.test(Tn()), r = /Trident/i.test(Tn());
  if (r && Ve(e)) {
    var n = nt(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Wr(e);
  for (Vn(i) && (i = i.host); Ve(i) && ["html", "body"].indexOf(at(i)) < 0; ) {
    var a = nt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function _r(e) {
  for (var t = Xe(e), r = Co(e); r && jl(r) && nt(r).position === "static"; )
    r = Co(r);
  return r && (at(r) === "html" || at(r) === "body" && nt(r).position === "static") ? t : r || Ll(e) || t;
}
function qn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ar(e, t, r) {
  return Ct(e, Mr(t, r));
}
function Bl(e, t, r) {
  var n = ar(e, t, r);
  return n > r ? r : n;
}
function ta() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ra(e) {
  return Object.assign({}, ta(), e);
}
function na(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Vl = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ra(typeof t != "number" ? t : na(t, yr));
};
function Yl(e) {
  var t, r = e.state, n = e.name, i = e.options, a = r.elements.arrow, c = r.modifiersData.popperOffsets, s = tt(r.placement), l = qn(s), d = [Le, Ge].indexOf(s) >= 0, u = d ? "height" : "width";
  if (!(!a || !c)) {
    var f = Vl(i.padding, r), v = Yn(a), h = l === "y" ? je : Le, b = l === "y" ? Ue : Ge, g = r.rects.reference[u] + r.rects.reference[l] - c[l] - r.rects.popper[u], _ = c[l] - r.rects.reference[l], O = _r(a), P = O ? l === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, $ = g / 2 - _ / 2, D = f[h], y = P - v[u] - f[b], x = P / 2 - v[u] / 2 + $, w = ar(D, x, y), S = l;
    r.modifiersData[n] = (t = {}, t[S] = w, t.centerOffset = w - x, t);
  }
}
function ql(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  if (i != null && !(typeof i == "string" && (i = t.elements.popper.querySelector(i), !i))) {
    if (process.env.NODE_ENV !== "production" && (Ve(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ea(t.elements.popper, i)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = i;
  }
}
const zl = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Yl,
  effect: ql,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function qt(e) {
  return e.split("-")[1];
}
var Wl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ul(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: Vt(t * i) / i || 0,
    y: Vt(r * i) / i || 0
  };
}
function No(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, c = e.offsets, s = e.position, l = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, f = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, b = c.y, g = b === void 0 ? 0 : b, _ = typeof u == "function" ? u({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  h = _.x, g = _.y;
  var O = c.hasOwnProperty("x"), P = c.hasOwnProperty("y"), $ = Le, D = je, y = window;
  if (d) {
    var x = _r(r), w = "clientHeight", S = "clientWidth";
    if (x === Xe(r) && (x = yt(r), nt(x).position !== "static" && s === "absolute" && (w = "scrollHeight", S = "scrollWidth")), x = x, i === je || (i === Le || i === Ge) && a === dr) {
      D = Ue;
      var I = f && x === y && y.visualViewport ? y.visualViewport.height : x[w];
      g -= I - n.height, g *= l ? 1 : -1;
    }
    if (i === Le || (i === je || i === Ue) && a === dr) {
      $ = Ge;
      var L = f && x === y && y.visualViewport ? y.visualViewport.width : x[S];
      h -= L - n.width, h *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, d && Wl), Z = u === !0 ? Ul({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  if (h = Z.x, g = Z.y, l) {
    var K;
    return Object.assign({}, M, (K = {}, K[D] = P ? "0" : "", K[$] = O ? "0" : "", K.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", K));
  }
  return Object.assign({}, M, (t = {}, t[D] = P ? g + "px" : "", t[$] = O ? h + "px" : "", t.transform = "", t));
}
function Gl(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, c = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var d = nt(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return d.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: tt(t.placement),
    variation: qt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, No(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, No(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Hl = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Gl,
  data: {}
};
var Rr = {
  passive: !0
};
function Kl(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, c = n.resize, s = c === void 0 ? !0 : c, l = Xe(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, Rr);
  }), s && l.addEventListener("resize", r.update, Rr), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Rr);
    }), s && l.removeEventListener("resize", r.update, Rr);
  };
}
const Xl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Kl,
  data: {}
};
var Jl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Dr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jl[t];
  });
}
var Zl = {
  start: "end",
  end: "start"
};
function Ao(e) {
  return e.replace(/start|end/g, function(t) {
    return Zl[t];
  });
}
function zn(e) {
  var t = Xe(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Wn(e) {
  return Yt(yt(e)).left + zn(e).scrollLeft;
}
function Ql(e, t) {
  var r = Xe(e), n = yt(e), i = r.visualViewport, a = n.clientWidth, c = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, c = i.height;
    var d = Qi();
    (d || !d && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: s + Wn(e),
    y: l
  };
}
function eu(e) {
  var t, r = yt(e), n = zn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ct(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), c = Ct(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Wn(e), l = -n.scrollTop;
  return nt(i || r).direction === "rtl" && (s += Ct(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: c,
    x: s,
    y: l
  };
}
function Un(e) {
  var t = nt(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function oa(e) {
  return ["html", "body", "#document"].indexOf(at(e)) >= 0 ? e.ownerDocument.body : Ve(e) && Un(e) ? e : oa(Wr(e));
}
function sr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = oa(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xe(n), c = i ? [a].concat(a.visualViewport || [], Un(n) ? n : []) : n, s = t.concat(c);
  return i ? s : s.concat(sr(Wr(c)));
}
function On(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function tu(e, t) {
  var r = Yt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Io(e, t, r) {
  return t === Ji ? On(Ql(e, r)) : Nt(t) ? tu(t, r) : On(eu(yt(e)));
}
function ru(e) {
  var t = sr(Wr(e)), r = ["absolute", "fixed"].indexOf(nt(e).position) >= 0, n = r && Ve(e) ? _r(e) : e;
  return Nt(n) ? t.filter(function(i) {
    return Nt(i) && ea(i, n) && at(i) !== "body";
  }) : [];
}
function nu(e, t, r, n) {
  var i = t === "clippingParents" ? ru(e) : [].concat(t), a = [].concat(i, [r]), c = a[0], s = a.reduce(function(l, d) {
    var u = Io(e, d, n);
    return l.top = Ct(u.top, l.top), l.right = Mr(u.right, l.right), l.bottom = Mr(u.bottom, l.bottom), l.left = Ct(u.left, l.left), l;
  }, Io(e, c, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ia(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? tt(n) : null, a = n ? qt(n) : null, c = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case je:
      l = {
        x: c,
        y: t.y - r.height
      };
      break;
    case Ue:
      l = {
        x: c,
        y: t.y + t.height
      };
      break;
    case Ge:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Le:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var d = i ? qn(i) : null;
  if (d != null) {
    var u = d === "y" ? "height" : "width";
    switch (a) {
      case Bt:
        l[d] = l[d] - (t[u] / 2 - r[u] / 2);
        break;
      case dr:
        l[d] = l[d] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function pr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, c = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? Tl : s, d = r.rootBoundary, u = d === void 0 ? Ji : d, f = r.elementContext, v = f === void 0 ? er : f, h = r.altBoundary, b = h === void 0 ? !1 : h, g = r.padding, _ = g === void 0 ? 0 : g, O = ra(typeof _ != "number" ? _ : na(_, yr)), P = v === er ? Ol : er, $ = e.rects.popper, D = e.elements[b ? P : v], y = nu(Nt(D) ? D : D.contextElement || yt(e.elements.popper), l, u, c), x = Yt(e.elements.reference), w = ia({
    reference: x,
    element: $,
    strategy: "absolute",
    placement: i
  }), S = On(Object.assign({}, $, w)), I = v === er ? S : x, L = {
    top: y.top - I.top + O.top,
    bottom: I.bottom - y.bottom + O.bottom,
    left: y.left - I.left + O.left,
    right: I.right - y.right + O.right
  }, M = e.modifiersData.offset;
  if (v === er && M) {
    var Z = M[i];
    Object.keys(L).forEach(function(K) {
      var re = [Ge, Ue].indexOf(K) >= 0 ? 1 : -1, de = [je, Ue].indexOf(K) >= 0 ? "y" : "x";
      L[K] += Z[de] * re;
    });
  }
  return L;
}
function ou(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, c = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? Zi : l, u = qt(n), f = u ? s ? Do : Do.filter(function(b) {
    return qt(b) === u;
  }) : yr, v = f.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  v.length === 0 && (v = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(b, g) {
    return b[g] = pr(e, {
      placement: g,
      boundary: i,
      rootBoundary: a,
      padding: c
    })[tt(g)], b;
  }, {});
  return Object.keys(h).sort(function(b, g) {
    return h[b] - h[g];
  });
}
function iu(e) {
  if (tt(e) === zr)
    return [];
  var t = Dr(e);
  return [Ao(e), t, Ao(t)];
}
function au(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !0 : c, l = r.fallbackPlacements, d = r.padding, u = r.boundary, f = r.rootBoundary, v = r.altBoundary, h = r.flipVariations, b = h === void 0 ? !0 : h, g = r.allowedAutoPlacements, _ = t.options.placement, O = tt(_), P = O === _, $ = l || (P || !b ? [Dr(_)] : iu(_)), D = [_].concat($).reduce(function(j, W) {
      return j.concat(tt(W) === zr ? ou(t, {
        placement: W,
        boundary: u,
        rootBoundary: f,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: g
      }) : W);
    }, []), y = t.rects.reference, x = t.rects.popper, w = /* @__PURE__ */ new Map(), S = !0, I = D[0], L = 0; L < D.length; L++) {
      var M = D[L], Z = tt(M), K = qt(M) === Bt, re = [je, Ue].indexOf(Z) >= 0, de = re ? "width" : "height", ie = pr(t, {
        placement: M,
        boundary: u,
        rootBoundary: f,
        altBoundary: v,
        padding: d
      }), ee = re ? K ? Ge : Le : K ? Ue : je;
      y[de] > x[de] && (ee = Dr(ee));
      var _e = Dr(ee), he = [];
      if (a && he.push(ie[Z] <= 0), s && he.push(ie[ee] <= 0, ie[_e] <= 0), he.every(function(j) {
        return j;
      })) {
        I = M, S = !1;
        break;
      }
      w.set(M, he);
    }
    if (S)
      for (var T = b ? 3 : 1, A = function(W) {
        var F = D.find(function(q) {
          var z = w.get(q);
          if (z)
            return z.slice(0, W).every(function(X) {
              return X;
            });
        });
        if (F)
          return I = F, "break";
      }, B = T; B > 0; B--) {
        var V = A(B);
        if (V === "break")
          break;
      }
    t.placement !== I && (t.modifiersData[n]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const su = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: au,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ko(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Mo(e) {
  return [je, Ge, Ue, Le].some(function(t) {
    return e[t] >= 0;
  });
}
function cu(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, c = pr(t, {
    elementContext: "reference"
  }), s = pr(t, {
    altBoundary: !0
  }), l = ko(c, n), d = ko(s, i, a), u = Mo(l), f = Mo(d);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const lu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: cu
};
function uu(e, t, r) {
  var n = tt(e), i = [Le, je].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, c = a[0], s = a[1];
  return c = c || 0, s = (s || 0) * i, [Le, Ge].indexOf(n) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function fu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, a = i === void 0 ? [0, 0] : i, c = Zi.reduce(function(u, f) {
    return u[f] = uu(f, t.rects, a), u;
  }, {}), s = c[t.placement], l = s.x, d = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = c;
}
const du = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: fu
};
function pu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ia({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const vu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: pu,
  data: {}
};
function hu(e) {
  return e === "x" ? "y" : "x";
}
function mu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !1 : c, l = r.boundary, d = r.rootBoundary, u = r.altBoundary, f = r.padding, v = r.tether, h = v === void 0 ? !0 : v, b = r.tetherOffset, g = b === void 0 ? 0 : b, _ = pr(t, {
    boundary: l,
    rootBoundary: d,
    padding: f,
    altBoundary: u
  }), O = tt(t.placement), P = qt(t.placement), $ = !P, D = qn(O), y = hu(D), x = t.modifiersData.popperOffsets, w = t.rects.reference, S = t.rects.popper, I = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, L = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = {
    x: 0,
    y: 0
  };
  if (!!x) {
    if (a) {
      var K, re = D === "y" ? je : Le, de = D === "y" ? Ue : Ge, ie = D === "y" ? "height" : "width", ee = x[D], _e = ee + _[re], he = ee - _[de], T = h ? -S[ie] / 2 : 0, A = P === Bt ? w[ie] : S[ie], B = P === Bt ? -S[ie] : -w[ie], V = t.elements.arrow, j = h && V ? Yn(V) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ta(), F = W[re], q = W[de], z = ar(0, w[ie], j[ie]), X = $ ? w[ie] / 2 - T - z - F - L.mainAxis : A - z - F - L.mainAxis, Y = $ ? -w[ie] / 2 + T + z + q + L.mainAxis : B + z + q + L.mainAxis, C = t.elements.arrow && _r(t.elements.arrow), E = C ? D === "y" ? C.clientTop || 0 : C.clientLeft || 0 : 0, Q = (K = M == null ? void 0 : M[D]) != null ? K : 0, me = ee + X - Q - E, we = ee + Y - Q, $e = ar(h ? Mr(_e, me) : _e, ee, h ? Ct(he, we) : he);
      x[D] = $e, Z[D] = $e - ee;
    }
    if (s) {
      var ot, st = D === "x" ? je : Le, it = D === "x" ? Ue : Ge, Ee = x[y], Je = y === "y" ? "height" : "width", Ze = Ee + _[st], _t = Ee - _[it], dt = [je, Le].indexOf(O) !== -1, xt = (ot = M == null ? void 0 : M[y]) != null ? ot : 0, wt = dt ? Ze : Ee - w[Je] - S[Je] - xt + L.altAxis, Ne = dt ? Ee + w[Je] + S[Je] - xt - L.altAxis : _t, Qe = h && dt ? Bl(wt, Ee, Ne) : ar(h ? wt : Ze, Ee, h ? Ne : _t);
      x[y] = Qe, Z[y] = Qe - Ee;
    }
    t.modifiersData[n] = Z;
  }
}
const gu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: mu,
  requiresIfExists: ["offset"]
};
function bu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function yu(e) {
  return e === Xe(e) || !Ve(e) ? zn(e) : bu(e);
}
function _u(e) {
  var t = e.getBoundingClientRect(), r = Vt(t.width) / e.offsetWidth || 1, n = Vt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function xu(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ve(t), i = Ve(t) && _u(t), a = yt(t), c = Yt(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((at(t) !== "body" || Un(a)) && (s = yu(t)), Ve(t) ? (l = Yt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Wn(a))), {
    x: c.left + s.scrollLeft - l.x,
    y: c.top + s.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function wu(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var c = [].concat(a.requires || [], a.requiresIfExists || []);
    c.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || i(a);
  }), n;
}
function Eu(e) {
  var t = wu(e);
  return En.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Tu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function vt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var Pt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ou = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Fo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Su(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Fo).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(vt(Pt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(vt(Pt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          En.indexOf(t.phase) < 0 && console.error(vt(Pt, t.name, '"phase"', "either " + En.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(vt(Pt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(vt(Pt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(vt(Pt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(vt(Pt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Fo.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(vt(Ou, String(t.name), n, n));
      });
    });
  });
}
function Ru(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function Pu(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var jo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", $u = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Lo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Du(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Lo : i;
  return function(s, l, d) {
    d === void 0 && (d = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Lo, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], v = !1, h = {
      state: u,
      setOptions: function(O) {
        var P = typeof O == "function" ? O(u.options) : O;
        g(), u.options = Object.assign({}, a, u.options, P), u.scrollParents = {
          reference: Nt(s) ? sr(s) : s.contextElement ? sr(s.contextElement) : [],
          popper: sr(l)
        };
        var $ = Eu(Pu([].concat(n, u.options.modifiers)));
        if (u.orderedModifiers = $.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = Ru([].concat($, u.options.modifiers), function(M) {
            var Z = M.name;
            return Z;
          });
          if (Su(D), tt(u.options.placement) === zr) {
            var y = u.orderedModifiers.find(function(M) {
              var Z = M.name;
              return Z === "flip";
            });
            y || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var x = nt(l), w = x.marginTop, S = x.marginRight, I = x.marginBottom, L = x.marginLeft;
          [w, S, I, L].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), h.update();
      },
      forceUpdate: function() {
        if (!v) {
          var O = u.elements, P = O.reference, $ = O.popper;
          if (!Bo(P, $)) {
            process.env.NODE_ENV !== "production" && console.error(jo);
            return;
          }
          u.rects = {
            reference: xu(P, _r($), u.options.strategy === "fixed"),
            popper: Yn($)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var D = 0, y = 0; y < u.orderedModifiers.length; y++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error($u);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, y = -1;
              continue;
            }
            var x = u.orderedModifiers[y], w = x.fn, S = x.options, I = S === void 0 ? {} : S, L = x.name;
            typeof w == "function" && (u = w({
              state: u,
              options: I,
              name: L,
              instance: h
            }) || u);
          }
        }
      },
      update: Tu(function() {
        return new Promise(function(_) {
          h.forceUpdate(), _(u);
        });
      }),
      destroy: function() {
        g(), v = !0;
      }
    };
    if (!Bo(s, l))
      return process.env.NODE_ENV !== "production" && console.error(jo), h;
    h.setOptions(d).then(function(_) {
      !v && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function b() {
      u.orderedModifiers.forEach(function(_) {
        var O = _.name, P = _.options, $ = P === void 0 ? {} : P, D = _.effect;
        if (typeof D == "function") {
          var y = D({
            state: u,
            name: O,
            instance: h,
            options: $
          }), x = function() {
          };
          f.push(y || x);
        }
      });
    }
    function g() {
      f.forEach(function(_) {
        return _();
      }), f = [];
    }
    return h;
  };
}
var Cu = [Xl, vu, Hl, Fl, du, su, gu, zl, lu], Nu = /* @__PURE__ */ Du({
  defaultModifiers: Cu
}), Au = typeof Element < "u", Iu = typeof Map == "function", ku = typeof Set == "function", Mu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Cr(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, i;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!Cr(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (Iu && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Cr(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (ku && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Mu && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n]))
        return !1;
    if (Au && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !Cr(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Fu = function(t, r) {
  try {
    return Cr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, ju = [], Gn = function(t, r, n) {
  n === void 0 && (n = {});
  var i = $t.useRef(null), a = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || ju
  }, c = $t.useState({
    styles: {
      popper: {
        position: a.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = c[0], l = c[1], d = $t.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var b = h.state, g = Object.keys(b.elements);
        pa.flushSync(function() {
          l({
            styles: Po(g.map(function(_) {
              return [_, b.styles[_] || {}];
            })),
            attributes: Po(g.map(function(_) {
              return [_, b.attributes[_]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), u = $t.useMemo(function() {
    var v = {
      onFirstUpdate: a.onFirstUpdate,
      placement: a.placement,
      strategy: a.strategy,
      modifiers: [].concat(a.modifiers, [d, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Fu(i.current, v) ? i.current || v : (i.current = v, v);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, d]), f = $t.useRef();
  return $o(function() {
    f.current && f.current.setOptions(u);
  }, [u]), $o(function() {
    if (!(t == null || r == null)) {
      var v = n.createPopper || Nu, h = v(t, r, u);
      return f.current = h, function() {
        h.destroy(), f.current = null;
      };
    }
  }, [t, r, n.createPopper]), {
    state: f.current ? f.current.state : null,
    styles: s.styles,
    attributes: s.attributes,
    update: f.current ? f.current.update : null,
    forceUpdate: f.current ? f.current.forceUpdate : null
  };
};
const hn = {
  "c-toggletip": "_c-toggletip_2swlv_1",
  "c-toggletip--active": "_c-toggletip--active_2swlv_18",
  "c-toggletip__arrow": "_c-toggletip__arrow_2swlv_22"
}, Lu = Object.freeze({
  ESC: 27
}), aa = ({
  children: e,
  addClass: t,
  hasArrow: r,
  isDisabled: n,
  distance: i,
  placement: a
}) => {
  const {
    isOpen: c,
    refButton: s
  } = ye(Bn), l = J(), d = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', u = (h) => {
    const b = l.current.querySelectorAll(d), g = s.current, _ = b[0], O = b[b.length - 1];
    if (!h.shiftKey && document.activeElement === O)
      return g.focus(), h.preventDefault();
    h.shiftKey && document.activeElement === _ && (g.focus(), h.preventDefault()), (h.keyCode || h.which) === Lu.ESC && g.focus();
  }, {
    styles: f,
    attributes: v
  } = Gn(s.current, l.current, {
    placement: a,
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, i || 8]
      }
    }, {
      name: "flip",
      options: {
        padding: 10
      }
    }, {
      name: "eventListeners",
      enabled: c
    }]
  });
  return U(() => {
    c && l.current.focus();
  }, [c]), n ? /* @__PURE__ */ m(gt, {
    children: e
  }) : /* @__PURE__ */ m(br, {
    id: "js-toggletip",
    children: /* @__PURE__ */ N("div", {
      tabIndex: -1,
      onKeyDown: u,
      ref: l,
      className: `${hn["c-toggletip"]} ${c && hn["c-toggletip--active"]} ${t != null ? t : ""}`,
      style: f.popper,
      ...v.popper,
      children: [e, r && /* @__PURE__ */ m("div", {
        className: hn["c-toggletip__arrow"],
        "data-popper-arrow": !0,
        style: f.arrow
      })]
    })
  });
};
aa.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"]),
  __TYPE: fe("ToggletipContent")
};
aa.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  __TYPE: "ToggletipContent"
};
const mn = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, sa = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: i,
  hasArrow: a,
  distance: c,
  isDisabled: s
}) => {
  const [l, d] = H(!1), u = J(null), f = J(null), v = le(() => t || bt("c-tooltip-"), [t]), h = (y) => {
    l || d(!l);
  }, b = (y) => d(!1), g = (y) => {
    (!l || document.activeElement !== u.current) && d(!l);
  }, _ = (y) => d(!1), O = (y) => {
    (y.keyCode | y.which) === 27 && l && d(!l);
  }, P = Se.map(e, (y) => He(y) ? Oe(y, {
    ...y.props,
    "aria-describedby": t,
    ref: u,
    onFocus: h,
    onBlur: b,
    onMouseOver: g,
    onMouseOut: _,
    onKeyDown: O
  }) : null), {
    styles: $,
    attributes: D
  } = Gn(u.current, f.current, {
    placement: n,
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, c || 8]
      }
    }, {
      name: "flip",
      options: {
        padding: 10
      }
    }, {
      name: "eventListeners",
      enabled: l
    }]
  });
  return !r || Se.count(e) > 1 || s ? /* @__PURE__ */ m(gt, {
    children: e
  }) : /* @__PURE__ */ N(gt, {
    children: [P, /* @__PURE__ */ m(br, {
      id: "js-tooltip-portal",
      children: /* @__PURE__ */ N("div", {
        id: v,
        ref: f,
        role: "tooltip",
        onMouseOver: g,
        className: `${mn["c-tooltip"]} ${l && mn["c-tooltip--active"]} ${i != null ? i : ""}`,
        style: $.popper,
        ...D.popper,
        children: [r, a && /* @__PURE__ */ m("div", {
          className: mn["c-tooltip__arrow"],
          "data-popper-arrow": !0,
          style: $.arrow
        })]
      })
    })]
  });
};
sa.defaultProps = {
  placement: "auto"
};
sa.propTypes = {
  children: o.exports.any,
  id: o.exports.string,
  label: o.exports.string.isRequired,
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const Hn = Ke(), ca = ({
  steps: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n,
  hideCloseButton: i,
  hideBackButton: a,
  ariaAttributes: c
}) => {
  const [s, l] = H(null), d = [...e.reduce((g, _, O) => [...g, {
    id: O + 1,
    ..._
  }], [])], u = (g) => d.filter((_) => _.id === g).reduce((_, O) => ({
    ..._,
    ...O
  }), {}), f = (g) => {
    const _ = document.querySelector("#root");
    _.inert = g;
  }, v = () => {
    l((g) => g < d.length ? g + 1 : g);
  }, h = () => {
    l((g) => g > 0 + 1 ? g - 1 : g);
  }, b = () => {
    l(null), r(!t), f(!1), n && n.current.focus();
  };
  return U(() => {
    t && (l(d.shift().id), f(!0));
  }, [t]), /* @__PURE__ */ m(Hn.Provider, {
    value: {
      isOpen: t,
      lastId: d.length,
      ...u(s),
      methods: {
        onNext: v,
        onPrev: h,
        onClose: b
      }
    },
    children: /* @__PURE__ */ m(br, {
      id: "js-tour",
      children: t && /* @__PURE__ */ N(gt, {
        children: [/* @__PURE__ */ m(Bu, {}), /* @__PURE__ */ m(la, {
          ariaAttributes: c,
          hideCloseButton: i,
          hideBackButton: a
        })]
      })
    })
  });
};
ca.defaultProps = {
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
ca.propTypes = {
  steps: o.exports.arrayOf(o.exports.shape({
    target: o.exports.string.isRequired,
    content: o.exports.oneOfType([o.exports.string, o.exports.element]),
    placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"]),
    distance: o.exports.number,
    elementClass: o.exports.string,
    helpLayerClass: o.exports.string
  })),
  isOpen: o.exports.bool,
  onClose: o.exports.func,
  finalFocusRef: o.exports.any.isRequired,
  hideCloseButton: o.exports.bool,
  hideBackButton: o.exports.bool,
  ariaAttributes: o.exports.shape({
    role: o.exports.string,
    tabIndex: o.exports.oneOfType([o.exports.string, o.exports.number]),
    "aria-label": o.exports.string,
    "aria-modal": o.exports.oneOfType([o.exports.string, o.exports.bool])
  })
};
const mt = {
  "c-layout": "_c-layout_cq7p6_1",
  "c-tour-content": "_c-tour-content_cq7p6_9",
  "c-tour-progress": "_c-tour-progress_cq7p6_28",
  "c-tour-progress-bar": "_c-tour-progress-bar_cq7p6_36",
  "c-tour-button-container": "_c-tour-button-container_cq7p6_47",
  "c-tour-help": "_c-tour-help_cq7p6_89",
  "c-tour-number": "_c-tour-number_cq7p6_99"
}, la = ({
  ariaAttributes: e,
  hideCloseButton: t,
  hideBackButton: r
}) => {
  const {
    isOpen: n,
    lastId: i,
    methods: a,
    id: c,
    target: s,
    content: l,
    placement: d,
    distance: u,
    elementClass: f
  } = ye(Hn), v = J(), {
    onClose: h,
    onPrev: b,
    onNext: g
  } = a, {
    styles: _,
    attributes: O
  } = Gn(document.querySelector(s), v.current, {
    placement: d,
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, u || 8]
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !1
      }
    }, {
      name: "eventListeners",
      enabled: n
    }]
  }), P = () => He(l) ? l : da("p", {
    className: mt["tour-description"]
  }, [l]), $ = () => {
    v.current.style.setProperty("--speed-movement", "0.8s"), g();
  };
  return /* @__PURE__ */ N(gt, {
    children: [/* @__PURE__ */ m("div", {
      className: `${mt["c-layout"]}`
    }), /* @__PURE__ */ N("div", {
      id: `unique-id-tour-element-${c}`,
      ref: v,
      style: _.popper,
      className: `${mt["c-tour-content"]} ${n && "animate__animated animate__fadeIn animate__faster"} ${f != null ? f : ""}`,
      ...e,
      ...O.popper,
      children: [/* @__PURE__ */ N("span", {
        className: "u-sr-only",
        children: ["Parte ", c, " de ", i, "."]
      }), /* @__PURE__ */ m("div", {
        "aria-hidden": !0,
        className: mt["c-tour-progress"],
        children: /* @__PURE__ */ m("div", {
          className: mt["c-tour-progress-bar"],
          style: {
            transform: `scaleX(${c / i})`
          }
        })
      }), P(), /* @__PURE__ */ N("div", {
        className: mt["c-tour-button-container"],
        children: [!t && /* @__PURE__ */ m(Dt, {
          hasAriaLabel: !0,
          label: "Salir",
          onClick: h,
          icon: {
            name: "close",
            size: "big"
          }
        }), !r && /* @__PURE__ */ m(Dt, {
          disabled: c === 1,
          hasAriaLabel: !0,
          label: "Anterior",
          onClick: b,
          icon: {
            name: "navigate_before",
            size: "big"
          }
        }), /* @__PURE__ */ m(Dt, {
          disabled: c === i,
          hasAriaLabel: !0,
          label: "Siguiente",
          onClick: $,
          icon: {
            name: "navigate_next",
            size: "big"
          }
        })]
      })]
    })]
  });
};
la.propTypes = {
  ariaAttributes: o.exports.shape({
    role: o.exports.string,
    tabIndex: o.exports.oneOfType([o.exports.string, o.exports.number]),
    "aria-label": o.exports.string,
    "aria-modal": o.exports.oneOfType([o.exports.string, o.exports.bool])
  }),
  hideCloseButton: o.exports.bool,
  hideBackButton: o.exports.bool
};
const Bu = () => {
  const {
    isOpen: e,
    id: t,
    target: r,
    helpLayerClass: n
  } = ye(Hn), [i, a] = H({}), c = () => {
    const {
      x: s,
      y: l,
      width: d,
      height: u
    } = document.querySelector(r).getBoundingClientRect();
    a({
      width: `${d}px`,
      height: `${u}px`,
      top: `${l}px`,
      left: `${s}px`
    });
  };
  return U(() => (r && c(), () => {
    a({});
  }), [r]), U(() => {
    if (!e || !r)
      return;
    const s = (l) => {
      c();
    };
    return e && window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s);
    };
  }, [e, r]), /* @__PURE__ */ m("div", {
    className: `${mt["c-tour-help"]} ${e && "animate__animated animate__fadeIn animate__faster animate__delay-2s"} ${n != null ? n : ""}`,
    style: i,
    children: /* @__PURE__ */ m("span", {
      className: mt["c-tour-number"],
      children: t
    })
  });
}, Vu = "_active_r3225_90", Yu = "_iconPulse_r3225_1", pe = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: Vu,
  iconPulse: Yu,
  "c-vid__progress-bg": "_c-vid__progress-bg_r3225_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_r3225_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_r3225_140",
  "c-vid__controls": "_c-vid__controls_r3225_150",
  "c-vid__button": "_c-vid__button_r3225_165",
  "c-vid__volume": "_c-vid__volume_r3225_180",
  "c-vid__volume-item": "_c-vid__volume-item_r3225_191",
  "c-vid__time": "_c-vid__time_r3225_202",
  "c-vid__subtitles": "_c-vid__subtitles_r3225_208"
}, ua = ({
  src: e,
  width: t = "1000",
  hasDescription: r,
  description: n,
  addClass: i,
  poster: a,
  ...c
}) => {
  const [s, l] = H({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [d, u] = H({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, v] = H({
    state: !1,
    label: "Reproducir video"
  }), [h, b] = H({
    state: !0,
    label: "Volumen"
  }), [g, _] = H(100), [O, P] = H({
    state: !1,
    label: "Ver en pantalla completa"
  }), [$, D] = H(!1), [y, x] = H(100), w = J(null), S = J(null), I = J(null), L = J(null), M = J(null), Z = J(null), K = J(null), re = J(null), [de, ie] = H(!1), ee = (C) => {
    C.classList.add(`${pe.active}`), setTimeout(() => {
      C.classList.remove(`${pe.active}`);
    }, 650);
  };
  function _e() {
    const C = S.current;
    f.state ? (C.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (C.play(), v({
      state: !0,
      label: "Pausar video"
    })), ee(Z.current);
  }
  function he() {
    const C = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, E = w.current;
    C ? (P({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (P({
      state: !0,
      label: "Salir de pantalla completa"
    }), E.requestFullscreen ? E.requestFullscreen() : E.mozRequestFullScreen ? E.mozRequestFullScreen() : E.webkitRequestFullScreen ? E.webkitRequestFullScreen() : E.msRequestFullscreen && E.msRequestFullscreen());
  }
  function T(C) {
    const E = parseInt(C, 10), Q = E >= 3600 ? Math.floor(E / 3600) : 0, me = Math.floor((E - Q * 3600) / 60), we = E - Q * 3600 - me * 60, $e = j(V(Q)), ot = j(V(me)), st = j(V(we));
    return {
      hours: $e,
      minutes: ot,
      seconds: st
    };
  }
  function A(C) {
    const E = B(C.duration), Q = B(C.currentTime);
    u({
      totalSeconds: C.currentTime,
      hours: parseInt(T(C.currentTime).hours),
      minutes: parseInt(T(C.currentTime).minutes),
      seconds: parseInt(T(C.currentTime).seconds),
      string: Q
    }), l({
      totalSeconds: Math.floor(C.duration),
      hours: parseInt(T(C.duration).hours),
      minutes: parseInt(T(C.duration).minutes),
      seconds: parseInt(T(C.duration).seconds),
      string: E
    });
  }
  function B(C) {
    return parseInt(C, 10) <= 3600 ? `${T(C).minutes}:${T(C).seconds}` : `${T(C).hours}:${T(C).minutes}:${T(C).seconds}`;
  }
  function V(C) {
    return C < 10 ? C = "0" + C : C;
  }
  function j(C) {
    return isNaN(C) ? "00" : C;
  }
  function W(C) {
    const E = L.current, Q = S.current, we = C.nativeEvent.offsetX / E.offsetWidth * Q.duration;
    Q.currentTime = we;
  }
  function F(C) {
    const E = S.current, Q = C.target.value, me = Q / 100;
    x(Q), _(Q), E.volume = me, h.state || b({
      state: !0,
      label: "Volumen"
    });
  }
  const q = () => {
    if (h.state) {
      b({
        state: !1,
        label: "Mutear video"
      });
      const C = S.current, E = 0, Q = E;
      x(E), C.volume = Q;
    } else {
      b({
        state: !0,
        label: "Volumen"
      });
      const C = S.current, E = g, Q = E / 100;
      x(E), C.volume = Q;
    }
  }, z = function(C) {
    (C.keyCode || C.which) === 32 && _e();
  }, X = function(C) {
    const E = Math.floor(L.current.getAttribute("aria-valuenow"));
    if (document.activeElement === M.current)
      return null;
    if ((C.keyCode || C.which) === 37) {
      const Q = E - 5;
      Q >= 0 ? S.current.currentTime = Q : S.current.currentTime = 0, ee(re.current);
    }
    if ((C.keyCode || C.which) === 39) {
      const Q = E + 5;
      Q >= S.current.duration ? S.current.currentTime = S.current.duration : S.current.currentTime = Q, ee(K.current);
    }
  }, Y = () => s >= 3600 ? `${d.hours} horas, ${d.minutes} minutos y ${d.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${d.minutes} minutos y ${d.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return U(() => {
    const C = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(C, "caption") && ie(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(C, "volume") && x(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), U(() => {
    localStorage.setItem("ui-video", JSON.stringify({
      caption: de,
      volume: y
    }));
  }, [de, y]), U(() => (I.current ? I.current.addEventListener("error", () => {
    D(!0);
  }) : D(!0), e.caption && D(!1), () => {
    I.current && I.current.removeEventListener("error", () => {
      D(!0);
    });
  }), [e.caption]), /* @__PURE__ */ N("figure", {
    className: `${pe["c-vid"]} ${i}`,
    style: {
      maxWidth: `${t}px`
    },
    onKeyDown: (C) => X(C),
    ...c,
    children: [/* @__PURE__ */ N("div", {
      className: `${pe["c-vid__container"]} ${i}`,
      ref: w,
      children: [/* @__PURE__ */ N("div", {
        className: pe["c-vid__wrapper"],
        children: [/* @__PURE__ */ N("video", {
          ref: S,
          onTimeUpdate: (C) => A(C.target),
          onLoadedData: (C) => A(C.target),
          onClick: _e,
          className: `${pe["c-vid__video"]} ${de ? "" : pe["no-captions"]}`,
          poster: a ? `assets/images/${a}.png` : void 0,
          children: [/* @__PURE__ */ m("source", {
            src: e.video
          }), e.caption ? /* @__PURE__ */ m("track", {
            ref: I,
            src: e.caption,
            label: "Subt\xEDtulos en espa\xF1ol",
            kind: "subtitles",
            srcLang: "es",
            default: !0
          }) : ""]
        }), /* @__PURE__ */ N("div", {
          className: pe["c-vid__icon-container"],
          children: [/* @__PURE__ */ m("div", {
            ref: re,
            className: pe["c-vid__icon"],
            children: /* @__PURE__ */ m(De, {
              name: "fast_rewind"
            })
          }), /* @__PURE__ */ m("div", {
            ref: Z,
            className: pe["c-vid__icon"],
            children: /* @__PURE__ */ m(De, {
              name: f.state ? "play" : "pause"
            })
          }), /* @__PURE__ */ m("div", {
            ref: K,
            className: pe["c-vid__icon"],
            children: /* @__PURE__ */ m(De, {
              name: "fast_forward"
            })
          })]
        })]
      }), /* @__PURE__ */ m("div", {
        className: pe["progress-container"],
        children: /* @__PURE__ */ N("div", {
          role: "slider",
          "aria-label": "Progreso del video",
          "aria-valuemin": "0",
          "aria-valuenow": d.totalSeconds,
          "aria-valuemax": s.totalSeconds,
          "aria-valuetext": Y(),
          tabIndex: "0",
          onKeyDown: z,
          className: pe["c-vid__progress-bg"],
          onClick: W,
          ref: L,
          children: [/* @__PURE__ */ m("div", {
            className: pe["c-vid__progress-bar"],
            style: {
              transform: `scaleX(calc(${d.totalSeconds} / ${s.totalSeconds}))`
            }
          }), /* @__PURE__ */ m("div", {
            className: pe["progress-sphere"],
            style: {
              left: `min(calc((${d.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
            }
          })]
        })
      }), /* @__PURE__ */ N("div", {
        className: pe["c-vid__controls"],
        children: [/* @__PURE__ */ m("button", {
          className: `${pe["c-vid__button"]} tour`,
          "aria-label": f.label,
          onClick: _e,
          "data-description": "Este bot\xF3n reproduce el video",
          children: /* @__PURE__ */ m(De, {
            name: f.state ? "pause" : "play"
          })
        }), /* @__PURE__ */ m("button", {
          className: `${pe["c-vid__button"]} tour`,
          "aria-label": h.label,
          "data-description": "Este bot\xF3n controla el volumen",
          onClick: q,
          children: /* @__PURE__ */ m(De, {
            name: h.state ? "volume_on" : "volume_off"
          })
        }), /* @__PURE__ */ N("label", {
          className: pe["c-vid__volume"],
          htmlFor: "volumeControl",
          children: [/* @__PURE__ */ m("span", {
            className: "u-sr-only",
            children: "Controlar volumen"
          }), /* @__PURE__ */ m("input", {
            className: pe["c-vid__volume-item"],
            ref: M,
            id: "volumeControl",
            type: "range",
            min: "0",
            max: "100",
            step: "5",
            value: y,
            onChange: F,
            "aria-valuetext": `${y}%`
          })]
        }), /* @__PURE__ */ N("p", {
          className: pe["c-vid__time"],
          "aria-hidden": "true",
          children: [/* @__PURE__ */ m("span", {
            children: d.string
          }), "/", /* @__PURE__ */ m("span", {
            children: s.string
          })]
        }), /* @__PURE__ */ m("button", {
          disabled: $,
          "aria-pressed": $ ? void 0 : de,
          onClick: () => ie(!de),
          "aria-label": "Subt\xEDtulos",
          className: `${pe["c-vid__button"]} ${pe["c-vid__subtitles"]}`,
          children: /* @__PURE__ */ m(De, {
            name: $ ? "closed_caption_disabled" : "closed_caption"
          })
        }), /* @__PURE__ */ m("button", {
          className: pe["c-vid__button"],
          "aria-label": O.label,
          onClick: he,
          children: /* @__PURE__ */ m(De, {
            name: O.state ? "fullscreen_exit" : "fullscreen"
          })
        })]
      })]
    }), r && /* @__PURE__ */ N("figcaption", {
      className: pe["c-vid__caption"],
      children: [/* @__PURE__ */ N("strong", {
        children: [n.title, ":"]
      }), " ", n.content]
    })]
  });
};
ua.propTypes = {
  src: o.exports.shape({
    video: o.exports.string.isRequired,
    caption: o.exports.string
  }),
  width: o.exports.string,
  addClass: o.exports.string,
  hasDescription: o.exports.bool,
  description: o.exports.shape({
    title: o.exports.string,
    content: o.exports.string
  }),
  poster: o.exports.string
};
ua.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
const qu = (e, t) => {
  const [r, n] = H(() => {
    if (typeof window > "u")
      return t;
    try {
      const a = window.localStorage.getItem(e);
      return a ? JSON.parse(a) : t;
    } catch (a) {
      return console.warn(`Error in useLocalStorage: ${a}`), t;
    }
  });
  return [r, (a) => {
    try {
      const c = a instanceof Function ? a(r) : a;
      n(c), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(c));
    } catch (c) {
      console.warn(`Error in useLocalStorage: ${c}`);
    }
  }];
}, zu = (e, t, r) => {
  const [n, i] = H(r), a = e.map((s) => window.matchMedia(s)), c = () => {
    const s = a.findIndex((l) => l.matches);
    return typeof t[s] < "u" ? t[s] : r;
  };
  return U(() => {
    i(c);
    const s = (l) => i(c);
    return a.forEach((l) => l.addEventListener("change", s)), () => {
      a.forEach((l) => l.removeEventListener("change", s));
    };
  }, []), n;
}, Ku = () => {
  const [e, t] = qu("dark-mode-enabled"), r = zu(["(prefers-color-scheme: dark)"], [!0], !1), n = typeof e < "u" ? e : r;
  return U(() => {
    t(r);
  }, [r]), U(() => {
    const i = window.document.body;
    n ? i.setAttribute("data-dark-mode", n) : i.removeAttribute("data-dark-mode", n);
  }, [n]), [n, t];
}, Wu = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), Xu = (e) => {
  const { root: t, rootMargin: r, threshold: n } = e || Wu, [i, a] = H(!1), [c, s] = H(null);
  return U(() => {
    if (!c) {
      a(!1);
      return;
    }
    const l = new IntersectionObserver(
      ([d]) => {
        a(d.isIntersecting);
      },
      {
        root: t,
        rootMargin: r,
        threshold: n
      }
    );
    return l.observe(c), () => {
      l.unobserve(c);
    };
  }, [n, r, t, c]), [s, i];
}, fa = (e) => {
  let t = {};
  for (const r in e)
    if (typeof e[r] == "object") {
      const n = fa(e[r]);
      for (const i in n)
        t = {
          ...t,
          [r.includes("accents") || r.includes("palette") ? i : `${r}-${i}`]: n[i]
        };
    } else
      t[r] = e[r];
  return t;
}, Ju = (e) => fa(e);
export {
  Oa as Accordion,
  Go as AccordionButton,
  Ho as AccordionItem,
  Ko as AccordionPanel,
  Xo as Audio,
  Dt as Button,
  fl as ButtonSection,
  Qo as CheckBox,
  ms as CheckBoxGroup,
  ys as Col,
  xs as Content,
  _i as DragAndDrop,
  yi as DragAndDropContext,
  xi as Draggable,
  wi as Droppable,
  Hu as Filter,
  Ei as GeneralDraggable,
  De as Icon,
  Ti as Image,
  Oi as Input,
  Zc as InputGroup,
  Ri as InputLeftAddon,
  Pi as InputRightAddon,
  Si as InputStyle,
  el as Kbd,
  $i as Link,
  tl as List,
  Ci as ListItem,
  Ni as Modal,
  Ai as ModalContent,
  Fn as ModalContext,
  Ii as ModalOverlay,
  Yi as NavSection,
  ji as NumberDecrementStepper,
  Li as NumberIncrementStepper,
  ki as NumberInput,
  Yr as NumberInputContext,
  Mi as NumberInputField,
  Fi as NumberInputStepper,
  rl as OrderedList,
  Bi as Pagination,
  jn as PaginationItem,
  cl as Panel,
  qr as PanelContext,
  pl as Paper,
  br as Portal,
  yl as Row,
  Vi as Section,
  qi as Select,
  _l as SelectGroup,
  zi as Switch,
  Wi as Tab,
  Ui as TabList,
  Gi as TabPanel,
  Hi as TabPanels,
  xl as Tabs,
  Ln as TabsContext,
  Ki as TextArea,
  wl as ThemeProvider,
  El as Toggletip,
  Xi as ToggletipButton,
  aa as ToggletipContent,
  Bn as ToggletipContext,
  sa as Tooltip,
  ca as Tour,
  Hn as TourContext,
  la as TourElement,
  Bu as TourHelpLayer,
  nl as UnorderedList,
  ua as Video,
  Ju as createTheme,
  Ku as useDarkMode,
  qu as useLocalStorage,
  zu as useMedia,
  Xu as useOnScreen,
  il as usePagination,
  ml as usePortal
};
