import * as $t from "react";
import qo, { Children as ye, useState as J, useEffect as U, isValidElement as Ye, cloneElement as Ee, forwardRef as ct, useRef as H, useMemo as le, useLayoutEffect as zo, useCallback as Ce, createContext as Ke, memo as Wo, useReducer as $n, useContext as _e, createElement as ha } from "react";
import * as ma from "react-dom";
import { unstable_batchedUpdates as Kt, createPortal as Uo } from "react-dom";
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, o = { exports: {} }, Jr = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function ba() {
  if (Zn)
    return se;
  Zn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function $(g) {
    if (typeof g == "object" && g !== null) {
      var w = g.$$typeof;
      switch (w) {
        case t:
          switch (g = g.type, g) {
            case l:
            case p:
            case n:
            case a:
            case i:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case f:
                case y:
                case v:
                case c:
                  return g;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function D(g) {
    return $(g) === p;
  }
  return se.AsyncMode = l, se.ConcurrentMode = p, se.ContextConsumer = s, se.ContextProvider = c, se.Element = t, se.ForwardRef = f, se.Fragment = n, se.Lazy = y, se.Memo = v, se.Portal = r, se.Profiler = a, se.StrictMode = i, se.Suspense = u, se.isAsyncMode = function(g) {
    return D(g) || $(g) === l;
  }, se.isConcurrentMode = D, se.isContextConsumer = function(g) {
    return $(g) === s;
  }, se.isContextProvider = function(g) {
    return $(g) === c;
  }, se.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, se.isForwardRef = function(g) {
    return $(g) === f;
  }, se.isFragment = function(g) {
    return $(g) === n;
  }, se.isLazy = function(g) {
    return $(g) === y;
  }, se.isMemo = function(g) {
    return $(g) === v;
  }, se.isPortal = function(g) {
    return $(g) === r;
  }, se.isProfiler = function(g) {
    return $(g) === a;
  }, se.isStrictMode = function(g) {
    return $(g) === i;
  }, se.isSuspense = function(g) {
    return $(g) === u;
  }, se.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === p || g === a || g === i || g === u || g === d || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === v || g.$$typeof === c || g.$$typeof === s || g.$$typeof === f || g.$$typeof === _ || g.$$typeof === E || g.$$typeof === P || g.$$typeof === b);
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
var Qn;
function ga() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function $(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === p || T === a || T === i || T === u || T === d || typeof T == "object" && T !== null && (T.$$typeof === y || T.$$typeof === v || T.$$typeof === c || T.$$typeof === s || T.$$typeof === f || T.$$typeof === _ || T.$$typeof === E || T.$$typeof === P || T.$$typeof === b);
    }
    function D(T) {
      if (typeof T == "object" && T !== null) {
        var Q = T.$$typeof;
        switch (Q) {
          case t:
            var me = T.type;
            switch (me) {
              case l:
              case p:
              case n:
              case a:
              case i:
              case u:
                return me;
              default:
                var Te = me && me.$$typeof;
                switch (Te) {
                  case s:
                  case f:
                  case y:
                  case v:
                  case c:
                    return Te;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var g = l, w = p, x = s, S = c, I = t, L = f, M = n, Z = y, K = v, re = r, fe = a, ie = i, ee = u, xe = !1;
    function he(T) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(T) || D(T) === l;
    }
    function O(T) {
      return D(T) === p;
    }
    function N(T) {
      return D(T) === s;
    }
    function B(T) {
      return D(T) === c;
    }
    function V(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function j(T) {
      return D(T) === f;
    }
    function W(T) {
      return D(T) === n;
    }
    function F(T) {
      return D(T) === y;
    }
    function q(T) {
      return D(T) === v;
    }
    function z(T) {
      return D(T) === r;
    }
    function X(T) {
      return D(T) === a;
    }
    function Y(T) {
      return D(T) === i;
    }
    function A(T) {
      return D(T) === u;
    }
    ce.AsyncMode = g, ce.ConcurrentMode = w, ce.ContextConsumer = x, ce.ContextProvider = S, ce.Element = I, ce.ForwardRef = L, ce.Fragment = M, ce.Lazy = Z, ce.Memo = K, ce.Portal = re, ce.Profiler = fe, ce.StrictMode = ie, ce.Suspense = ee, ce.isAsyncMode = he, ce.isConcurrentMode = O, ce.isContextConsumer = N, ce.isContextProvider = B, ce.isElement = V, ce.isForwardRef = j, ce.isFragment = W, ce.isLazy = F, ce.isMemo = q, ce.isPortal = z, ce.isProfiler = X, ce.isStrictMode = Y, ce.isSuspense = A, ce.isValidElementType = $, ce.typeOf = D;
  }()), ce;
}
var eo;
function Go() {
  return eo || (eo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = ba() : e.exports = ga();
  }(Jr)), Jr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zr, to;
function ya() {
  if (to)
    return Zr;
  to = 1;
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
      var l = Object.getOwnPropertyNames(c).map(function(f) {
        return c[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        p[f] = f;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Zr = i() ? Object.assign : function(a, c) {
    for (var s, l = n(a), p, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var u in s)
        t.call(s, u) && (l[u] = s[u]);
      if (e) {
        p = e(s);
        for (var d = 0; d < p.length; d++)
          r.call(s, p[d]) && (l[p[d]] = s[p[d]]);
      }
    }
    return l;
  }, Zr;
}
var Qr, ro;
function Dn() {
  if (ro)
    return Qr;
  ro = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qr = e, Qr;
}
var en, no;
function Ho() {
  return no || (no = 1, en = Function.call.bind(Object.prototype.hasOwnProperty)), en;
}
var tn, oo;
function _a() {
  if (oo)
    return tn;
  oo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Dn(), r = {}, n = Ho();
    e = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function i(a, c, s, l, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var u;
          try {
            if (typeof a[f] != "function") {
              var d = Error(
                (l || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            u = a[f](c, f, l, s, null, t);
          } catch (y) {
            u = y;
          }
          if (u && !(u instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in r)) {
            r[u.message] = !0;
            var v = p ? p() : "";
            e(
              "Failed " + s + " type: " + u.message + (v != null ? v : "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, tn = i, tn;
}
var rn, io;
function xa() {
  if (io)
    return rn;
  io = 1;
  var e = Go(), t = ya(), r = Dn(), n = Ho(), i = _a(), a = function() {
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
  return rn = function(s, l) {
    var p = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function u(O) {
      var N = O && (p && O[p] || O[f]);
      if (typeof N == "function")
        return N;
    }
    var d = "<<anonymous>>", v = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: P(),
      arrayOf: $,
      element: D(),
      elementType: g(),
      instanceOf: w,
      node: L(),
      objectOf: S,
      oneOf: x,
      oneOfType: I,
      shape: Z,
      exact: K
    };
    function y(O, N) {
      return O === N ? O !== 0 || 1 / O === 1 / N : O !== O && N !== N;
    }
    function b(O, N) {
      this.message = O, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function _(O) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, B = 0;
      function V(W, F, q, z, X, Y, A) {
        if (z = z || d, Y = Y || q, A !== r) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = z + ":" + q;
            !N[Q] && B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[Q] = !0, B++);
          }
        }
        return F[q] == null ? W ? F[q] === null ? new b("The " + X + " `" + Y + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new b("The " + X + " `" + Y + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : O(F, q, z, X, Y);
      }
      var j = V.bind(null, !1);
      return j.isRequired = V.bind(null, !0), j;
    }
    function E(O) {
      function N(B, V, j, W, F, q) {
        var z = B[V], X = ie(z);
        if (X !== O) {
          var Y = ee(z);
          return new b(
            "Invalid " + W + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return _(N);
    }
    function P() {
      return _(c);
    }
    function $(O) {
      function N(B, V, j, W, F) {
        if (typeof O != "function")
          return new b("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var q = B[V];
        if (!Array.isArray(q)) {
          var z = ie(q);
          return new b("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an array."));
        }
        for (var X = 0; X < q.length; X++) {
          var Y = O(q, X, j, W, F + "[" + X + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return _(N);
    }
    function D() {
      function O(N, B, V, j, W) {
        var F = N[B];
        if (!s(F)) {
          var q = ie(F);
          return new b("Invalid " + j + " `" + W + "` of type " + ("`" + q + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(O);
    }
    function g() {
      function O(N, B, V, j, W) {
        var F = N[B];
        if (!e.isValidElementType(F)) {
          var q = ie(F);
          return new b("Invalid " + j + " `" + W + "` of type " + ("`" + q + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(O);
    }
    function w(O) {
      function N(B, V, j, W, F) {
        if (!(B[V] instanceof O)) {
          var q = O.name || d, z = he(B[V]);
          return new b("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return _(N);
    }
    function x(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function N(B, V, j, W, F) {
        for (var q = B[V], z = 0; z < O.length; z++)
          if (y(q, O[z]))
            return null;
        var X = JSON.stringify(O, function(A, T) {
          var Q = ee(T);
          return Q === "symbol" ? String(T) : T;
        });
        return new b("Invalid " + W + " `" + F + "` of value `" + String(q) + "` " + ("supplied to `" + j + "`, expected one of " + X + "."));
      }
      return _(N);
    }
    function S(O) {
      function N(B, V, j, W, F) {
        if (typeof O != "function")
          return new b("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var q = B[V], z = ie(q);
        if (z !== "object")
          return new b("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an object."));
        for (var X in q)
          if (n(q, X)) {
            var Y = O(q, X, j, W, F + "." + X, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return _(N);
    }
    function I(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var N = 0; N < O.length; N++) {
        var B = O[N];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe(B) + " at index " + N + "."
          ), c;
      }
      function V(j, W, F, q, z) {
        for (var X = [], Y = 0; Y < O.length; Y++) {
          var A = O[Y], T = A(j, W, F, q, z, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && X.push(T.data.expectedType);
        }
        var Q = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new b("Invalid " + q + " `" + z + "` supplied to " + ("`" + F + "`" + Q + "."));
      }
      return _(V);
    }
    function L() {
      function O(N, B, V, j, W) {
        return re(N[B]) ? null : new b("Invalid " + j + " `" + W + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return _(O);
    }
    function M(O, N, B, V, j) {
      return new b(
        (O || "React class") + ": " + N + " type `" + B + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function Z(O) {
      function N(B, V, j, W, F) {
        var q = B[V], z = ie(q);
        if (z !== "object")
          return new b("Invalid " + W + " `" + F + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var X in O) {
          var Y = O[X];
          if (typeof Y != "function")
            return M(j, W, F, X, ee(Y));
          var A = Y(q, X, j, W, F + "." + X, r);
          if (A)
            return A;
        }
        return null;
      }
      return _(N);
    }
    function K(O) {
      function N(B, V, j, W, F) {
        var q = B[V], z = ie(q);
        if (z !== "object")
          return new b("Invalid " + W + " `" + F + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        var X = t({}, B[V], O);
        for (var Y in X) {
          var A = O[Y];
          if (n(O, Y) && typeof A != "function")
            return M(j, W, F, Y, ee(A));
          if (!A)
            return new b(
              "Invalid " + W + " `" + F + "` key `" + Y + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(B[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var T = A(q, Y, j, W, F + "." + Y, r);
          if (T)
            return T;
        }
        return null;
      }
      return _(N);
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
          var N = u(O);
          if (N) {
            var B = N.call(O), V;
            if (N !== O.entries) {
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
    function fe(O, N) {
      return O === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function ie(O) {
      var N = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : fe(N, O) ? "symbol" : N;
    }
    function ee(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var N = ie(O);
      if (N === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function xe(O) {
      var N = ee(O);
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
    function he(O) {
      return !O.constructor || !O.constructor.name ? d : O.constructor.name;
    }
    return v.checkPropTypes = i, v.resetWarningCache = i.resetWarningCache, v.PropTypes = v, v;
  }, rn;
}
var nn, ao;
function wa() {
  if (ao)
    return nn;
  ao = 1;
  var e = Dn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, nn = function() {
    function n(c, s, l, p, f, u) {
      if (u !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
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
  }, nn;
}
if (process.env.NODE_ENV !== "production") {
  var Ea = Go(), Ta = !0;
  o.exports = xa()(Ea.isElement, Ta);
} else
  o.exports = wa()();
const Oa = (e) => {
  var t, r;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((r = e == null ? void 0 : e.type) == null ? void 0 : r.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Le = (e, t) => ye.toArray(e).filter((r) => t.indexOf(Oa(r)) !== -1);
var Fr = { exports: {} }, Xt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function Sa() {
  if (so)
    return Xt;
  so = 1;
  var e = qo, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, p) {
    var f, u = {}, d = null, v = null;
    p !== void 0 && (d = "" + p), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (f in l)
      n.call(l, f) && !a.hasOwnProperty(f) && (u[f] = l[f]);
    if (s && s.defaultProps)
      for (f in l = s.defaultProps, l)
        u[f] === void 0 && (u[f] = l[f]);
    return { $$typeof: t, type: s, key: d, ref: v, props: u, _owner: i.current };
  }
  return Xt.Fragment = r, Xt.jsx = c, Xt.jsxs = c, Xt;
}
var Jt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function Ra() {
  return co || (co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qo, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function _(h) {
      if (h === null || typeof h != "object")
        return null;
      var R = y && h[y] || h[b];
      return typeof R == "function" ? R : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(h) {
      {
        for (var R = arguments.length, k = new Array(R > 1 ? R - 1 : 0), G = 1; G < R; G++)
          k[G - 1] = arguments[G];
        $("error", h, k);
      }
    }
    function $(h, R, k) {
      {
        var G = E.ReactDebugCurrentFrame, ae = G.getStackAddendum();
        ae !== "" && (R += "%s", k = k.concat([ae]));
        var ue = k.map(function(ne) {
          return String(ne);
        });
        ue.unshift("Warning: " + R), Function.prototype.apply.call(console[h], console, ue);
      }
    }
    var D = !1, g = !1, w = !1, x = !1, S = !1, I;
    I = Symbol.for("react.module.reference");
    function L(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === n || h === a || S || h === i || h === p || h === f || x || h === v || D || g || w || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === u || h.$$typeof === c || h.$$typeof === s || h.$$typeof === l || h.$$typeof === I || h.getModuleId !== void 0));
    }
    function M(h, R, k) {
      var G = h.displayName;
      if (G)
        return G;
      var ae = R.displayName || R.name || "";
      return ae !== "" ? k + "(" + ae + ")" : k;
    }
    function Z(h) {
      return h.displayName || "Context";
    }
    function K(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case s:
            var R = h;
            return Z(R) + ".Consumer";
          case c:
            var k = h;
            return Z(k._context) + ".Provider";
          case l:
            return M(h, h.render, "ForwardRef");
          case u:
            var G = h.displayName || null;
            return G !== null ? G : K(h.type) || "Memo";
          case d: {
            var ae = h, ue = ae._payload, ne = ae._init;
            try {
              return K(ne(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, fe = 0, ie, ee, xe, he, O, N, B;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function j() {
      {
        if (fe === 0) {
          ie = console.log, ee = console.info, xe = console.warn, he = console.error, O = console.group, N = console.groupCollapsed, B = console.groupEnd;
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
        fe++;
      }
    }
    function W() {
      {
        if (fe--, fe === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, h, {
              value: ie
            }),
            info: re({}, h, {
              value: ee
            }),
            warn: re({}, h, {
              value: xe
            }),
            error: re({}, h, {
              value: he
            }),
            group: re({}, h, {
              value: O
            }),
            groupCollapsed: re({}, h, {
              value: N
            }),
            groupEnd: re({}, h, {
              value: B
            })
          });
        }
        fe < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = E.ReactCurrentDispatcher, q;
    function z(h, R, k) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (ae) {
            var G = ae.stack.trim().match(/\n( *(at )?)/);
            q = G && G[1] || "";
          }
        return `
` + q + h;
      }
    }
    var X = !1, Y;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new A();
    }
    function T(h, R) {
      if (!h || X)
        return "";
      {
        var k = Y.get(h);
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
            } catch (ft) {
              G = ft;
            }
            Reflect.construct(h, [], ne);
          } else {
            try {
              ne.call();
            } catch (ft) {
              G = ft;
            }
            h.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            G = ft;
          }
          h();
        }
      } catch (ft) {
        if (ft && G && typeof ft.stack == "string") {
          for (var te = ft.stack.split(`
`), Ne = G.stack.split(`
`), be = te.length - 1, ge = Ne.length - 1; be >= 1 && ge >= 0 && te[be] !== Ne[ge]; )
            ge--;
          for (; be >= 1 && ge >= 0; be--, ge--)
            if (te[be] !== Ne[ge]) {
              if (be !== 1 || ge !== 1)
                do
                  if (be--, ge--, ge < 0 || te[be] !== Ne[ge]) {
                    var We = `
` + te[be].replace(" at new ", " at ");
                    return h.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", h.displayName)), typeof h == "function" && Y.set(h, We), We;
                  }
                while (be >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        X = !1, F.current = ue, W(), Error.prepareStackTrace = ae;
      }
      var It = h ? h.displayName || h.name : "", Jn = It ? z(It) : "";
      return typeof h == "function" && Y.set(h, Jn), Jn;
    }
    function Q(h, R, k) {
      return T(h, !1);
    }
    function me(h) {
      var R = h.prototype;
      return !!(R && R.isReactComponent);
    }
    function Te(h, R, k) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return T(h, me(h));
      if (typeof h == "string")
        return z(h);
      switch (h) {
        case p:
          return z("Suspense");
        case f:
          return z("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            return Q(h.render);
          case u:
            return Te(h.type, R, k);
          case d: {
            var G = h, ae = G._payload, ue = G._init;
            try {
              return Te(ue(ae), R, k);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, ot = {}, lt = E.ReactDebugCurrentFrame;
    function it(h) {
      if (h) {
        var R = h._owner, k = Te(h.type, h._source, R ? R.type : null);
        lt.setExtraStackFrame(k);
      } else
        lt.setExtraStackFrame(null);
    }
    function Oe(h, R, k, G, ae) {
      {
        var ue = Function.call.bind($e);
        for (var ne in h)
          if (ue(h, ne)) {
            var te = void 0;
            try {
              if (typeof h[ne] != "function") {
                var Ne = Error((G || "React class") + ": " + k + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              te = h[ne](R, ne, G, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              te = be;
            }
            te && !(te instanceof Error) && (it(ae), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", k, ne, typeof te), it(null)), te instanceof Error && !(te.message in ot) && (ot[te.message] = !0, it(ae), P("Failed %s type: %s", k, te.message), it(null));
          }
      }
    }
    var Je = Array.isArray;
    function Ze(h) {
      return Je(h);
    }
    function _t(h) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, k = R && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return k;
      }
    }
    function vt(h) {
      try {
        return xt(h), !1;
      } catch {
        return !0;
      }
    }
    function xt(h) {
      return "" + h;
    }
    function wt(h) {
      if (vt(h))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _t(h)), xt(h);
    }
    var Ae = E.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ht, Gt, qe;
    qe = {};
    function xr(h) {
      if ($e.call(h, "ref")) {
        var R = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Gr(h) {
      if ($e.call(h, "key")) {
        var R = Object.getOwnPropertyDescriptor(h, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Hr(h, R) {
      if (typeof h.ref == "string" && Ae.current && R && Ae.current.stateNode !== R) {
        var k = K(Ae.current.type);
        qe[k] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Ae.current.type), h.ref), qe[k] = !0);
      }
    }
    function wr(h, R) {
      {
        var k = function() {
          ht || (ht = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function Kr(h, R) {
      {
        var k = function() {
          Gt || (Gt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Er = function(h, R, k, G, ae, ue, ne) {
      var te = {
        $$typeof: t,
        type: h,
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
    function Xr(h, R, k, G, ae) {
      {
        var ue, ne = {}, te = null, Ne = null;
        k !== void 0 && (wt(k), te = "" + k), Gr(R) && (wt(R.key), te = "" + R.key), xr(R) && (Ne = R.ref, Hr(R, ae));
        for (ue in R)
          $e.call(R, ue) && !Qe.hasOwnProperty(ue) && (ne[ue] = R[ue]);
        if (h && h.defaultProps) {
          var be = h.defaultProps;
          for (ue in be)
            ne[ue] === void 0 && (ne[ue] = be[ue]);
        }
        if (te || Ne) {
          var ge = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          te && wr(ne, ge), Ne && Kr(ne, ge);
        }
        return Er(h, te, Ne, ae, G, Ae.current, ne);
      }
    }
    var Ht = E.ReactCurrentOwner, Tr = E.ReactDebugCurrentFrame;
    function ve(h) {
      if (h) {
        var R = h._owner, k = Te(h.type, h._source, R ? R.type : null);
        Tr.setExtraStackFrame(k);
      } else
        Tr.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Pe(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function et() {
      {
        if (Ht.current) {
          var h = K(Ht.current.type);
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
          var R = h.fileName.replace(/^.*[\\\/]/, ""), k = h.lineNumber;
          return `

Check your code at ` + R + ":" + k + ".";
        }
        return "";
      }
    }
    var ke = {};
    function ze(h) {
      {
        var R = et();
        if (!R) {
          var k = typeof h == "string" ? h : h.displayName || h.name;
          k && (R = `

Check the top-level render call using <` + k + ">.");
        }
        return R;
      }
    }
    function ut(h, R) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var k = ze(R);
        if (ke[k])
          return;
        ke[k] = !0;
        var G = "";
        h && h._owner && h._owner !== Ht.current && (G = " It was passed a child from " + K(h._owner.type) + "."), ve(h), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, G), ve(null);
      }
    }
    function Me(h, R) {
      {
        if (typeof h != "object")
          return;
        if (Ze(h))
          for (var k = 0; k < h.length; k++) {
            var G = h[k];
            Pe(G) && ut(G, R);
          }
        else if (Pe(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ae = _(h);
          if (typeof ae == "function" && ae !== h.entries)
            for (var ue = ae.call(h), ne; !(ne = ue.next()).done; )
              Pe(ne.value) && ut(ne.value, R);
        }
      }
    }
    function Et(h) {
      {
        var R = h.type;
        if (R == null || typeof R == "string")
          return;
        var k;
        if (typeof R == "function")
          k = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === l || R.$$typeof === u))
          k = R.propTypes;
        else
          return;
        if (k) {
          var G = K(R);
          Oe(k, h.props, "prop", G, h);
        } else if (R.PropTypes !== void 0 && !Re) {
          Re = !0;
          var ae = K(R);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(h) {
      {
        for (var R = Object.keys(h.props), k = 0; k < R.length; k++) {
          var G = R[k];
          if (G !== "children" && G !== "key") {
            ve(h), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), ve(null);
            break;
          }
        }
        h.ref !== null && (ve(h), P("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function Ot(h, R, k, G, ae, ue) {
      {
        var ne = L(h);
        if (!ne) {
          var te = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = Ie(ae);
          Ne ? te += Ne : te += et();
          var be;
          h === null ? be = "null" : Ze(h) ? be = "array" : h !== void 0 && h.$$typeof === t ? (be = "<" + (K(h.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : be = typeof h, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, te);
        }
        var ge = Xr(h, R, k, ae, ue);
        if (ge == null)
          return ge;
        if (ne) {
          var We = R.children;
          if (We !== void 0)
            if (G)
              if (Ze(We)) {
                for (var It = 0; It < We.length; It++)
                  Me(We[It], h);
                Object.freeze && Object.freeze(We);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(We, h);
        }
        return h === n ? Tt(ge) : Et(ge), ge;
      }
    }
    function Nt(h, R, k) {
      return Ot(h, R, k, !0);
    }
    function Or(h, R, k) {
      return Ot(h, R, k, !1);
    }
    var St = Or, Rt = Nt;
    Jt.Fragment = n, Jt.jsx = St, Jt.jsxs = Rt;
  }()), Jt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Sa() : e.exports = Ra();
})(Fr);
const at = Fr.exports.Fragment, m = Fr.exports.jsx, C = Fr.exports.jsxs, Pa = ({
  children: e,
  allowMultiple: t,
  defaultIndex: r
}) => {
  const [n, i] = J(), a = (s) => {
    t ? n.includes(s) ? i(n.filter((l) => l !== s)) : i([...n, s]) : i(s);
  };
  U(() => (i(t ? r || [] : r != null ? r : null), () => {
    i(null);
  }), [t, r]);
  const c = ye.map(e, (s, l) => Ye(s) ? Ee(s, {
    ...s.props,
    id: l,
    isOpen: n,
    onToggle: a
  }) : null);
  return /* @__PURE__ */ m("div", {
    children: Le(c, ["AccordionItem"])
  });
};
Pa.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  allowMultiple: o.exports.bool,
  defaultIndex: o.exports.oneOfType([o.exports.array, o.exports.number])
};
const de = (e) => (t, r, n) => {
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
}, Ko = ({
  children: e,
  id: t,
  onExpanded: r,
  isExpanded: n,
  expanded: i,
  addClass: a,
  icon: c,
  __TYPE: s,
  ...l
}) => /* @__PURE__ */ C("button", {
  id: `accordion-button-${t}`,
  "aria-controls": `accordion-panel-${t}`,
  "aria-expanded": n,
  className: `${Mt["c-accordion__button"]} u-flex ${a != null ? a : ""} ${n && i && i}`,
  onClick: r,
  "data-type": s,
  ...l,
  children: [e, c && c(n)]
});
Ko.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  onExpanded: o.exports.func,
  isExpanded: o.exports.bool,
  expanded: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  __TYPE: de("AccordionButton")
};
Ko.defaultProps = {
  __TYPE: "AccordionButton"
};
const Xo = ({
  children: e,
  id: t,
  isOpen: r,
  onToggle: n,
  addClass: i
}) => {
  const a = () => n(t), c = () => typeof r == "number" ? r === t : Array.isArray(r) ? !!r.includes(t) : !1, s = ye.map(e, (l) => Ye(l) ? l.props.__TYPE === "AccordionButton" ? Ee(l, {
    ...l.props,
    id: t,
    onExpanded: a,
    isExpanded: c()
  }) : Ee(l, {
    ...l.props,
    id: t,
    isExpanded: c()
  }) : null);
  return /* @__PURE__ */ m("div", {
    className: `${Mt["c-accordion__item"]} ${i != null ? i : ""}`,
    children: Le(s, ["AccordionButton", "AccordionPanel"])
  });
};
Xo.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  id: o.exports.number,
  isOpen: o.exports.oneOfType([o.exports.array, o.exports.number]),
  onToggle: o.exports.func,
  addClass: o.exports.string,
  __TYPE: de("AccordionItem")
};
Xo.defaultProps = {
  __TYPE: "AccordionItem"
};
const Jo = ({
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
Jo.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  isExpanded: o.exports.bool,
  addClass: o.exports.string,
  __TYPE: de("AccordionPanel")
};
Jo.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Cn = [
  "close",
  "check",
  "play",
  "pause",
  "double_arrow",
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
  "open_with",
  "edit_note",
  "settings",
  "search",
  "radar",
  "accessibility_new",
  "smart_display",
  "repeat",
  "repeat_on"
], lo = {
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
  if (!Cn.includes(e))
    return /* @__PURE__ */ m("span", {
      children: "Doesn't exist"
    });
  const n = `/ui-components-books/dist/assets/icons/svg/${e}.svg#${e}`, i = new URL(n, import.meta.url).href;
  return /* @__PURE__ */ m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: `${lo["c-icon"]} ${lo[`c-${t}`]} ${r != null ? r : ""}`,
    "aria-hidden": "true",
    "data-testid": e,
    children: /* @__PURE__ */ m("use", {
      xlinkHref: i
    })
  });
};
De.propTypes = {
  name: o.exports.oneOf(Cn),
  size: o.exports.oneOf(["small", "normal", "big"]),
  addClass: o.exports.string,
  __TYPE: de("Icon")
};
De.defaultProps = {
  size: "normal",
  name: "play",
  __TYPE: "Icon"
};
const Zt = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, Dt = ct((e, t) => {
  const {
    label: r,
    size: n,
    icon: i,
    type: a,
    variant: c,
    hasAriaLabel: s,
    disabled: l,
    onClick: p,
    children: f,
    addClass: u,
    ...d
  } = e;
  return /* @__PURE__ */ C("button", {
    ref: t,
    className: `${u != null ? u : ""} ${Zt["c-button"]} ${Zt[`c-${c}`]} ${Zt[`c-${n}`]} ${i && i.name && s ? Zt["c-round"] : ""} 
        ${i && i.position === "right" ? Zt["c-reverse"] : ""}`,
    disabled: l,
    type: a,
    onClick: p,
    ...s && {
      "aria-label": `${r}`
    },
    ...d,
    children: [f, i && /* @__PURE__ */ m(De, {
      name: i.name,
      size: i.size
    }), s ? null : r]
  });
});
Dt.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  label: o.exports.string,
  size: o.exports.oneOf(["small", "normal", "big"]),
  variant: o.exports.oneOf(["primary", "secondary", "no-line"]),
  type: o.exports.oneOf(["button", "submit", "reset"]),
  hasAriaLabel: o.exports.bool,
  icon: o.exports.shape({
    name: o.exports.oneOf(Cn),
    size: o.exports.oneOf(["small", "normal", "big"]),
    position: o.exports.oneOf(["left", "right"])
  }),
  disabled: o.exports.bool,
  onClick: o.exports.func,
  addClass: o.exports.string
};
Dt.defaultProps = {
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
}, Zo = ({
  src: e,
  format: t,
  a11y: r,
  size: n,
  type: i,
  addClass: a,
  ...c
}) => {
  const [s, l] = J(!1), p = H(), f = Object.freeze({
    BUTTON: "Button",
    BAR: "Bar"
  }), u = (d) => {
    !p.current || (p.current.paused ? p.current.play() : p.current.pause(), l(!s));
  };
  return i === f.BAR ? /* @__PURE__ */ m("audio", {
    preload: "metadata",
    controls: !0,
    className: `${kt["c-audio"]} ${n && kt[`c-audio--${n}`]} ${a != null ? a : ""}`,
    "data-a11y": r,
    ...c,
    children: /* @__PURE__ */ m("source", {
      src: e,
      type: t
    })
  }) : /* @__PURE__ */ C(at, {
    children: [/* @__PURE__ */ m("audio", {
      ref: p,
      src: e,
      type: t,
      onEnded: () => l(!s),
      className: kt["c-audio--hidden"]
    }), /* @__PURE__ */ m(Dt, {
      label: s ? "Pausar" : "Reproduccir",
      "data-a11y": r,
      addClass: `${kt["c-button"]} ${s ? kt["is-button-playing"] : kt["is-button-paused"]} ${a != null ? a : ""}`,
      onClick: u,
      hasAriaLabel: !0,
      ...r && {
        disabled: r
      },
      ...c
    })]
  });
};
Zo.defaultProps = {
  a11y: !1,
  type: "Bar"
};
Zo.propTypes = {
  src: o.exports.string,
  a11y: o.exports.bool,
  format: o.exports.string,
  size: o.exports.oneOf(["small"]),
  type: o.exports.oneOf(["Bar", "Button"]),
  addClass: o.exports.string
};
var $a = typeof Sr == "object" && Sr && Sr.Object === Object && Sr, Da = $a, Ca = Da, Aa = typeof self == "object" && self && self.Object === Object && self, Na = Ca || Aa || Function("return this")(), Ia = Na, ka = Ia, Ma = ka.Symbol, An = Ma;
function Fa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var ja = Fa, La = Array.isArray, Ba = La, uo = An, Qo = Object.prototype, Va = Qo.hasOwnProperty, Ya = Qo.toString, Qt = uo ? uo.toStringTag : void 0;
function qa(e) {
  var t = Va.call(e, Qt), r = e[Qt];
  try {
    e[Qt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ya.call(e);
  return n && (t ? e[Qt] = r : delete e[Qt]), i;
}
var za = qa, Wa = Object.prototype, Ua = Wa.toString;
function Ga(e) {
  return Ua.call(e);
}
var Ha = Ga, fo = An, Ka = za, Xa = Ha, Ja = "[object Null]", Za = "[object Undefined]", po = fo ? fo.toStringTag : void 0;
function Qa(e) {
  return e == null ? e === void 0 ? Za : Ja : po && po in Object(e) ? Ka(e) : Xa(e);
}
var es = Qa;
function ts(e) {
  return e != null && typeof e == "object";
}
var rs = ts, ns = es, os = rs, is = "[object Symbol]";
function as(e) {
  return typeof e == "symbol" || os(e) && ns(e) == is;
}
var ss = as, vo = An, cs = ja, ls = Ba, us = ss, fs = 1 / 0, ho = vo ? vo.prototype : void 0, mo = ho ? ho.toString : void 0;
function ei(e) {
  if (typeof e == "string")
    return e;
  if (ls(e))
    return cs(e, ei) + "";
  if (us(e))
    return mo ? mo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -fs ? "-0" : t;
}
var ps = ei, ds = ps;
function vs(e) {
  return e == null ? "" : ds(e);
}
var hs = vs, ms = hs, bs = 0;
function gs(e) {
  var t = ++bs;
  return ms(e) + t;
}
var dt = gs;
const er = {
  "c-input": "_c-input_lqmp1_1",
  "c-input__box": "_c-input__box_lqmp1_24",
  "c-input__check": "_c-input__check_lqmp1_38",
  "c-input__icon": "_c-input__icon_lqmp1_38"
}, ti = ct(({
  id: e,
  name: t,
  type: r,
  label: n,
  state: i,
  value: a,
  addClass: c,
  isDisabled: s,
  defaultChecked: l,
  onChange: p,
  __TYPE: f,
  inherit: u,
  ...d
}, v) => {
  const y = le(() => e || dt(`ui-${r}`), [e, r]), b = Object.freeze({
    right: "done_all",
    wrong: "close",
    normal: r === "checkbox" ? "check" : null
  }), _ = ({
    target: E
  }) => {
    if (!!p) {
      if (E.checked) {
        p({
          id: E.id,
          value: E.value
        });
        return;
      }
      p({
        id: E.id,
        value: ""
      });
    }
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: y,
    className: `${er["c-input"]} u-flex ${c != null ? c : ""}`,
    "data-state": i,
    "data-type": r,
    "data-element": f,
    ...!u && {
      ...d
    },
    children: [/* @__PURE__ */ C("div", {
      className: er["c-input__box"],
      children: [/* @__PURE__ */ m("input", {
        id: y,
        ref: v,
        type: r,
        name: t,
        value: a,
        "data-state": i,
        className: er["c-input__check"],
        onChange: _,
        ...s && {
          disabled: !0
        },
        ...u && {
          ...d
        },
        ...l && {
          checked: l
        }
      }), /* @__PURE__ */ m("div", {
        className: er["c-input__icon"],
        children: b[i] && /* @__PURE__ */ m(De, {
          name: b[i]
        })
      })]
    }), /* @__PURE__ */ m("span", {
      className: er["c-input__label"],
      children: n
    })]
  });
});
ti.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
ti.propTypes = {
  id: o.exports.string,
  name: o.exports.string,
  type: o.exports.oneOf(["radio", "checkbox"]),
  label: o.exports.string.isRequired,
  state: o.exports.oneOf(["normal", "right", "wrong"]),
  value: o.exports.oneOfType([o.exports.string, o.exports.number, o.exports.bool]),
  addClass: o.exports.string,
  isDisabled: o.exports.bool,
  defaultChecked: o.exports.bool,
  inherit: o.exports.bool,
  onChange: o.exports.func,
  __TYPE: de("CheckBox")
};
const ys = ({
  legend: e,
  children: t,
  onChecked: r,
  addClass: n
}) => {
  const [i, a] = J([]), c = H(), s = (u) => {
    c.current = u || "";
  }, l = (u) => c.current === "radio" ? [{
    ...u
  }] : i.filter((v) => v.id === u.id).length ? [...i.filter((v) => v.id !== u.id)] : [...i, {
    ...u
  }], p = (u) => {
    const d = l(u);
    r && r(d), a(d);
  }, f = ye.map(t, (u) => Ye(u) ? u.props.__TYPE === "CheckBox" ? (u.props.type && s(u.props.type), Ee(u, {
    ...u.props,
    onChange: p
  })) : u : null);
  return /* @__PURE__ */ C("fieldset", {
    ...n && {
      className: `${n}`
    },
    children: [/* @__PURE__ */ m("legend", {
      children: e
    }), /* @__PURE__ */ m("div", {
      className: "u-flow",
      children: Le(f, ["CheckBox"])
    })]
  });
};
ys.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  legend: o.exports.string,
  onChecked: o.exports.func,
  addClass: o.exports.string
};
const _s = "_col_wu095_1", xs = {
  col: _s
}, ws = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ m("div", {
  ref: r,
  className: `${xs.col} ${e != null ? e : ""}`,
  ...t
}));
ws.propTypes = {
  addClass: o.exports.string
};
const Es = {
  "c-content": "_c-content_u325r_1"
}, Ts = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("section", {
  className: `${Es["c-content"]} animate__animated animate__fadeInDown animate__faster ${t != null ? t : ""}`,
  ...r,
  children: e
});
Ts.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string
};
const jr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function zt(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function Nn(e) {
  return "nodeType" in e;
}
function Be(e) {
  var t, r;
  return e ? zt(e) ? e : Nn(e) && (t = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? t : window : window;
}
function In(e) {
  const {
    Document: t
  } = Be(e);
  return e instanceof t;
}
function hr(e) {
  return zt(e) ? !1 : e instanceof Be(e).HTMLElement;
}
function Os(e) {
  return e instanceof Be(e).SVGElement;
}
function Wt(e) {
  return e ? zt(e) ? e.document : Nn(e) ? In(e) ? e : hr(e) ? e.ownerDocument : document : document : document;
}
const pt = jr ? zo : U;
function kn(e) {
  const t = H(e);
  return pt(() => {
    t.current = e;
  }), Ce(function(...r) {
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Ss() {
  const e = H(null), t = Ce((n, i) => {
    e.current = setInterval(n, i);
  }, []), r = Ce(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, r];
}
function lr(e, t = [e]) {
  const r = H(e);
  return pt(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function mr(e, t) {
  const r = H();
  return le(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    [...t]
  );
}
function Ar(e) {
  const t = kn(e), r = H(null), n = Ce(
    (i) => {
      i !== r.current && (t == null || t(i, r.current)), r.current = i;
    },
    []
  );
  return [r, n];
}
function _n(e) {
  const t = H();
  return U(() => {
    t.current = e;
  }, [e]), t.current;
}
let on = {};
function Lr(e, t) {
  return le(() => {
    if (t)
      return t;
    const r = on[e] == null ? 0 : on[e] + 1;
    return on[e] = r, `${e}-${r}`;
  }, [e, t]);
}
function ri(e) {
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
const jt = /* @__PURE__ */ ri(1), Nr = /* @__PURE__ */ ri(-1);
function Rs(e) {
  return "clientX" in e && "clientY" in e;
}
function ni(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Be(e.target);
  return t && e instanceof t;
}
function Ps(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Be(e.target);
  return t && e instanceof t;
}
function xn(e) {
  if (Ps(e)) {
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
  return Rs(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const wn = /* @__PURE__ */ Object.freeze({
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
        return [wn.Translate.toString(e), wn.Scale.toString(e)].join(" ");
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
}), bo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function $s(e) {
  return e.matches(bo) ? e : e.querySelector(bo);
}
const Ds = {
  display: "none"
};
function Cs(e) {
  let {
    id: t,
    value: r
  } = e;
  return /* @__PURE__ */ m("div", {
    id: t,
    style: Ds,
    children: r
  });
}
const As = {
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
function Ns(e) {
  let {
    id: t,
    announcement: r
  } = e;
  return /* @__PURE__ */ m("div", {
    id: t,
    style: As,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0,
    children: r
  });
}
function Is() {
  const [e, t] = J("");
  return {
    announce: Ce((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const oi = /* @__PURE__ */ Ke(null);
function ks(e) {
  const t = _e(oi);
  U(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Ms() {
  const [e] = J(() => /* @__PURE__ */ new Set()), t = Ce((n) => (e.add(n), () => e.delete(n)), [e]);
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
const Fs = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, js = {
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
function Ls(e) {
  let {
    announcements: t = js,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = Fs
  } = e;
  const {
    announce: a,
    announcement: c
  } = Is(), s = Lr("DndLiveRegion"), [l, p] = J(!1);
  if (U(() => {
    p(!0);
  }, []), ks(le(() => ({
    onDragStart(u) {
      let {
        active: d
      } = u;
      a(t.onDragStart({
        active: d
      }));
    },
    onDragMove(u) {
      let {
        active: d,
        over: v
      } = u;
      t.onDragMove && a(t.onDragMove({
        active: d,
        over: v
      }));
    },
    onDragOver(u) {
      let {
        active: d,
        over: v
      } = u;
      a(t.onDragOver({
        active: d,
        over: v
      }));
    },
    onDragEnd(u) {
      let {
        active: d,
        over: v
      } = u;
      a(t.onDragEnd({
        active: d,
        over: v
      }));
    },
    onDragCancel(u) {
      let {
        active: d,
        over: v
      } = u;
      a(t.onDragCancel({
        active: d,
        over: v
      }));
    }
  }), [a, t])), !l)
    return null;
  const f = /* @__PURE__ */ C(at, {
    children: [/* @__PURE__ */ m(Cs, {
      id: n,
      value: i.draggable
    }), /* @__PURE__ */ m(Ns, {
      id: s,
      announcement: c
    })]
  });
  return r ? Uo(f, r) : f;
}
var we;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(we || (we = {}));
function Ir() {
}
function an(e, t) {
  return le(
    () => ({
      sensor: e,
      options: t != null ? t : {}
    }),
    [e, t]
  );
}
function Bs() {
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
function Vs(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Ys(e, t) {
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
function qs(e, t) {
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
function go(e) {
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
function ii(e, t) {
  if (!e || e.length === 0)
    return null;
  const [r] = e;
  return t ? r[t] : r;
}
const zs = (e) => {
  let {
    collisionRect: t,
    droppableRects: r,
    droppableContainers: n
  } = e;
  const i = go(t), a = [];
  for (const c of n) {
    const {
      id: s
    } = c, l = r.get(s);
    if (l) {
      const p = go(l), f = i.reduce((d, v, y) => d + Vs(p[y], v), 0), u = Number((f / 4).toFixed(4));
      a.push({
        id: s,
        data: {
          droppableContainer: c,
          value: u
        }
      });
    }
  }
  return a.sort(Ys);
};
function Ws(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), c = i - n, s = a - r;
  if (n < i && r < a) {
    const l = t.width * t.height, p = e.width * e.height, f = c * s, u = f / (l + p - f);
    return Number(u.toFixed(4));
  }
  return 0;
}
const Us = (e) => {
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
      const l = Ws(s, t);
      l > 0 && i.push({
        id: c,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return i.sort(qs);
};
function Gs(e, t, r) {
  return {
    ...e,
    scaleX: t && r ? t.width / r.width : 1,
    scaleY: t && r ? t.height / r.height : 1
  };
}
function ai(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : rt;
}
function Hs(e) {
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
const Ks = /* @__PURE__ */ Hs(1);
function Xs(e) {
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
function Js(e, t, r) {
  const n = Xs(t);
  if (!n)
    return e;
  const {
    scaleX: i,
    scaleY: a,
    x: c,
    y: s
  } = n, l = e.left - c - (1 - i) * parseFloat(r), p = e.top - s - (1 - a) * parseFloat(r.slice(r.indexOf(" ") + 1)), f = i ? e.width / i : e.width, u = a ? e.height / a : e.height;
  return {
    width: f,
    height: u,
    top: p,
    right: l + f,
    bottom: p + u,
    left: l
  };
}
const Zs = {
  ignoreTransform: !1
};
function br(e, t) {
  t === void 0 && (t = Zs);
  let r = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      getComputedStyle: p
    } = Be(e), {
      transform: f,
      transformOrigin: u
    } = p(e);
    f && (r = Js(r, f, u));
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
function yo(e) {
  return br(e, {
    ignoreTransform: !0
  });
}
function Qs(e) {
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
function ec(e, t) {
  return t === void 0 && (t = Be(e).getComputedStyle(e)), t.position === "fixed";
}
function tc(e, t) {
  t === void 0 && (t = Be(e).getComputedStyle(e));
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const a = t[i];
    return typeof a == "string" ? r.test(a) : !1;
  });
}
function Mn(e, t) {
  const r = [];
  function n(i) {
    if (t != null && r.length >= t || !i)
      return r;
    if (In(i) && i.scrollingElement != null && !r.includes(i.scrollingElement))
      return r.push(i.scrollingElement), r;
    if (!hr(i) || Os(i) || r.includes(i))
      return r;
    const {
      getComputedStyle: a
    } = Be(i), c = a(i);
    return i !== e && tc(i, c) && r.push(i), ec(i, c) ? r : n(i.parentNode);
  }
  return e ? n(e) : r;
}
function si(e) {
  const [t] = Mn(e, 1);
  return t != null ? t : null;
}
function sn(e) {
  return !jr || !e ? null : zt(e) ? e : Nn(e) ? In(e) || e === Wt(e).scrollingElement ? window : hr(e) ? e : null : null;
}
function ci(e) {
  return zt(e) ? e.scrollX : e.scrollLeft;
}
function li(e) {
  return zt(e) ? e.scrollY : e.scrollTop;
}
function En(e) {
  return {
    x: ci(e),
    y: li(e)
  };
}
var Se;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Se || (Se = {}));
function ui(e) {
  return !jr || !e ? !1 : e === document.scrollingElement;
}
function fi(e) {
  const t = {
    x: 0,
    y: 0
  }, r = ui(e) ? {
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
const rc = {
  x: 0.2,
  y: 0.2
};
function nc(e, t, r, n, i) {
  let {
    top: a,
    left: c,
    right: s,
    bottom: l
  } = r;
  n === void 0 && (n = 10), i === void 0 && (i = rc);
  const {
    isTop: p,
    isBottom: f,
    isLeft: u,
    isRight: d
  } = fi(e), v = {
    x: 0,
    y: 0
  }, y = {
    x: 0,
    y: 0
  }, b = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !p && a <= t.top + b.height ? (v.y = Se.Backward, y.y = n * Math.abs((t.top + b.height - a) / b.height)) : !f && l >= t.bottom - b.height && (v.y = Se.Forward, y.y = n * Math.abs((t.bottom - b.height - l) / b.height)), !d && s >= t.right - b.width ? (v.x = Se.Forward, y.x = n * Math.abs((t.right - b.width - s) / b.width)) : !u && c <= t.left + b.width && (v.x = Se.Backward, y.x = n * Math.abs((t.left + b.width - c) / b.width)), {
    direction: v,
    speed: y
  };
}
function oc(e) {
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
function pi(e) {
  return e.reduce((t, r) => jt(t, En(r)), rt);
}
function ic(e) {
  return e.reduce((t, r) => t + ci(r), 0);
}
function ac(e) {
  return e.reduce((t, r) => t + li(r), 0);
}
function sc(e, t) {
  if (t === void 0 && (t = br), !e)
    return;
  const {
    top: r,
    left: n,
    bottom: i,
    right: a
  } = t(e);
  !si(e) || (i <= 0 || a <= 0 || r >= window.innerHeight || n >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const cc = [["x", ["left", "right"], ic], ["y", ["top", "bottom"], ac]];
class Fn {
  constructor(t, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = Mn(r), i = pi(n);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, c, s] of cc)
      for (const l of c)
        Object.defineProperty(this, l, {
          get: () => {
            const p = s(n), f = i[a] - p;
            return this.rect[l] + f;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class nr {
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
function lc(e) {
  const {
    EventTarget: t
  } = Be(e);
  return e instanceof t ? e : Wt(e);
}
function cn(e, t) {
  const r = Math.abs(e.x), n = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(r ** 2 + n ** 2) > t : "x" in t && "y" in t ? r > t.x && n > t.y : "x" in t ? r > t.x : "y" in t ? n > t.y : !1;
}
var Ue;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ue || (Ue = {}));
function _o(e) {
  e.preventDefault();
}
function uc(e) {
  e.stopPropagation();
}
var oe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(oe || (oe = {}));
const di = {
  start: [oe.Space, oe.Enter],
  cancel: [oe.Esc],
  end: [oe.Space, oe.Enter]
}, fc = (e, t) => {
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
class jn {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: r
      }
    } = t;
    this.props = t, this.listeners = new nr(Wt(r)), this.windowListeners = new nr(Be(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ue.Resize, this.handleCancel), this.windowListeners.add(Ue.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ue.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: r
    } = this.props, n = t.node.current;
    n && sc(n), r(rt);
  }
  handleKeyDown(t) {
    if (ni(t)) {
      const {
        active: r,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: a = di,
        coordinateGetter: c = fc,
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
        collisionRect: p
      } = n.current, f = p ? {
        x: p.left,
        y: p.top
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = f);
      const u = c(t, {
        active: r,
        context: n.current,
        currentCoordinates: f
      });
      if (u) {
        const d = Nr(u, f), v = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: y
        } = n.current;
        for (const b of y) {
          const _ = t.code, {
            isTop: E,
            isRight: P,
            isLeft: $,
            isBottom: D,
            maxScroll: g,
            minScroll: w
          } = fi(b), x = oc(b), S = {
            x: Math.min(_ === oe.Right ? x.right - x.width / 2 : x.right, Math.max(_ === oe.Right ? x.left : x.left + x.width / 2, u.x)),
            y: Math.min(_ === oe.Down ? x.bottom - x.height / 2 : x.bottom, Math.max(_ === oe.Down ? x.top : x.top + x.height / 2, u.y))
          }, I = _ === oe.Right && !P || _ === oe.Left && !$, L = _ === oe.Down && !D || _ === oe.Up && !E;
          if (I && S.x !== u.x) {
            const M = b.scrollLeft + d.x, Z = _ === oe.Right && M <= g.x || _ === oe.Left && M >= w.x;
            if (Z && !d.y) {
              b.scrollTo({
                left: M,
                behavior: s
              });
              return;
            }
            Z ? v.x = b.scrollLeft - M : v.x = _ === oe.Right ? b.scrollLeft - g.x : b.scrollLeft - w.x, v.x && b.scrollBy({
              left: -v.x,
              behavior: s
            });
            break;
          } else if (L && S.y !== u.y) {
            const M = b.scrollTop + d.y, Z = _ === oe.Down && M <= g.y || _ === oe.Up && M >= w.y;
            if (Z && !d.x) {
              b.scrollTo({
                top: M,
                behavior: s
              });
              return;
            }
            Z ? v.y = b.scrollTop - M : v.y = _ === oe.Down ? b.scrollTop - g.y : b.scrollTop - w.y, v.y && b.scrollBy({
              top: -v.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, jt(Nr(u, this.referenceCoordinates), v));
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
jn.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, r) => {
    let {
      keyboardCodes: n = di,
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
function xo(e) {
  return Boolean(e && "distance" in e);
}
function wo(e) {
  return Boolean(e && "delay" in e);
}
class Ln {
  constructor(t, r, n) {
    var i;
    n === void 0 && (n = lc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = r;
    const {
      event: a
    } = t, {
      target: c
    } = a;
    this.props = t, this.events = r, this.document = Wt(c), this.documentListeners = new nr(this.document), this.listeners = new nr(n), this.windowListeners = new nr(Be(c)), this.initialCoordinates = (i = xn(a)) != null ? i : rt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(Ue.Resize, this.handleCancel), this.windowListeners.add(Ue.DragStart, _o), this.windowListeners.add(Ue.VisibilityChange, this.handleCancel), this.windowListeners.add(Ue.ContextMenu, _o), this.documentListeners.add(Ue.Keydown, this.handleKeydown), r) {
      if (xo(r))
        return;
      if (wo(r)) {
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
    t && (this.activated = !0, this.documentListeners.add(Ue.Click, uc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ue.SelectionChange, this.removeTextSelection), r(t));
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
    const l = (r = xn(t)) != null ? r : rt, p = Nr(i, l);
    if (!n && s) {
      if (wo(s))
        return cn(p, s.tolerance) ? this.handleCancel() : void 0;
      if (xo(s))
        return s.tolerance != null && cn(p, s.tolerance) ? this.handleCancel() : cn(p, s.distance) ? this.handleStart() : void 0;
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
const pc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class vi extends Ln {
  constructor(t) {
    const {
      event: r
    } = t, n = Wt(r.target);
    super(t, pc, n);
  }
}
vi.activators = [{
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
const dc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Tn;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Tn || (Tn = {}));
class hi extends Ln {
  constructor(t) {
    super(t, dc, Wt(t.event.target));
  }
}
hi.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    return r.button === Tn.RightClick ? !1 : (n == null || n({
      event: r
    }), !0);
  }
}];
const ln = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class mi extends Ln {
  constructor(t) {
    super(t, ln);
  }
  static setup() {
    return window.addEventListener(ln.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(ln.move.name, t);
    };
    function t() {
    }
  }
}
mi.activators = [{
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
var or;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(or || (or = {}));
var kr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(kr || (kr = {}));
function vc(e) {
  let {
    acceleration: t,
    activator: r = or.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: a,
    interval: c = 5,
    order: s = kr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: p,
    scrollableAncestorRects: f,
    delta: u,
    threshold: d
  } = e;
  const v = mc({
    delta: u,
    disabled: !a
  }), [y, b] = Ss(), _ = H({
    x: 0,
    y: 0
  }), E = H({
    x: 0,
    y: 0
  }), P = le(() => {
    switch (r) {
      case or.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case or.DraggableRect:
        return i;
    }
  }, [r, i, l]), $ = H(null), D = Ce(() => {
    const w = $.current;
    if (!w)
      return;
    const x = _.current.x * E.current.x, S = _.current.y * E.current.y;
    w.scrollBy(x, S);
  }, []), g = le(() => s === kr.TreeOrder ? [...p].reverse() : p, [s, p]);
  U(
    () => {
      if (!a || !p.length || !P) {
        b();
        return;
      }
      for (const w of g) {
        if ((n == null ? void 0 : n(w)) === !1)
          continue;
        const x = p.indexOf(w), S = f[x];
        if (!S)
          continue;
        const {
          direction: I,
          speed: L
        } = nc(w, S, P, t, d);
        for (const M of ["x", "y"])
          v[M][I[M]] || (L[M] = 0, I[M] = 0);
        if (L.x > 0 || L.y > 0) {
          b(), $.current = w, y(D, c), _.current = L, E.current = I;
          return;
        }
      }
      _.current = {
        x: 0,
        y: 0
      }, E.current = {
        x: 0,
        y: 0
      }, b();
    },
    [
      t,
      D,
      n,
      b,
      a,
      c,
      JSON.stringify(P),
      JSON.stringify(v),
      y,
      p,
      g,
      f,
      JSON.stringify(d)
    ]
  );
}
const hc = {
  x: {
    [Se.Backward]: !1,
    [Se.Forward]: !1
  },
  y: {
    [Se.Backward]: !1,
    [Se.Forward]: !1
  }
};
function mc(e) {
  let {
    delta: t,
    disabled: r
  } = e;
  const n = _n(t);
  return mr((i) => {
    if (r || !n || !i)
      return hc;
    const a = {
      x: Math.sign(t.x - n.x),
      y: Math.sign(t.y - n.y)
    };
    return {
      x: {
        [Se.Backward]: i.x[Se.Backward] || a.x === -1,
        [Se.Forward]: i.x[Se.Forward] || a.x === 1
      },
      y: {
        [Se.Backward]: i.y[Se.Backward] || a.y === -1,
        [Se.Forward]: i.y[Se.Forward] || a.y === 1
      }
    };
  }, [r, t, n]);
}
function bc(e, t) {
  const r = t !== null ? e.get(t) : void 0, n = r ? r.node.current : null;
  return mr((i) => {
    var a;
    return t === null ? null : (a = n != null ? n : i) != null ? a : null;
  }, [n, t]);
}
function gc(e, t) {
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
var ur;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(ur || (ur = {}));
var On;
(function(e) {
  e.Optimized = "optimized";
})(On || (On = {}));
const Eo = /* @__PURE__ */ new Map();
function yc(e, t) {
  let {
    dragging: r,
    dependencies: n,
    config: i
  } = t;
  const [a, c] = J(null), s = a != null, {
    frequency: l,
    measure: p,
    strategy: f
  } = i, u = H(e), d = E(), v = lr(d), y = Ce(function(P) {
    P === void 0 && (P = []), !v.current && c(($) => $ ? $.concat(P) : P);
  }, [v]), b = H(null), _ = mr((P) => {
    if (d && !r)
      return Eo;
    const $ = a;
    if (!P || P === Eo || u.current !== e || $ != null) {
      const D = /* @__PURE__ */ new Map();
      for (let g of e) {
        if (!g)
          continue;
        if ($ && $.length > 0 && !$.includes(g.id) && g.rect.current) {
          D.set(g.id, g.rect.current);
          continue;
        }
        const w = g.node.current, x = w ? new Fn(p(w), w) : null;
        g.rect.current = x, x && D.set(g.id, x);
      }
      return D;
    }
    return P;
  }, [e, a, r, d, p]);
  return U(() => {
    u.current = e;
  }, [e]), U(
    () => {
      d || requestAnimationFrame(() => y());
    },
    [r, d]
  ), U(() => {
    s && c(null);
  }, [s]), U(
    () => {
      d || typeof l != "number" || b.current !== null || (b.current = setTimeout(() => {
        y(), b.current = null;
      }, l));
    },
    [l, d, y, ...n]
  ), {
    droppableRects: _,
    measureDroppableContainers: y,
    measuringScheduled: s
  };
  function E() {
    switch (f) {
      case ur.Always:
        return !1;
      case ur.BeforeDragging:
        return r;
      default:
        return !r;
    }
  }
}
function bi(e, t) {
  return mr((r) => e ? r || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function _c(e, t) {
  return bi(e, t);
}
function xc(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = kn(t), i = le(() => {
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
  const n = kn(t), i = le(
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
function wc(e) {
  return new Fn(br(e), e);
}
function To(e, t, r) {
  t === void 0 && (t = wc);
  const [n, i] = $n(s, null), a = xc({
    callback(l) {
      if (!!e)
        for (const p of l) {
          const {
            type: f,
            target: u
          } = p;
          if (f === "childList" && u instanceof HTMLElement && u.contains(e)) {
            i();
            break;
          }
        }
    }
  }), c = Br({
    callback: i
  });
  return pt(() => {
    i(), e ? (c == null || c.observe(e), a == null || a.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (c == null || c.disconnect(), a == null || a.disconnect());
  }, [e]), n;
  function s(l) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var p;
      return (p = l != null ? l : r) != null ? p : null;
    }
    const f = t(e);
    return JSON.stringify(l) === JSON.stringify(f) ? l : f;
  }
}
function Ec(e) {
  const t = bi(e);
  return ai(e, t);
}
const Oo = [];
function Tc(e) {
  const t = H(e), r = mr((n) => e ? n && n !== Oo && e && t.current && e.parentNode === t.current.parentNode ? n : Mn(e) : Oo, [e]);
  return U(() => {
    t.current = e;
  }, [e]), r;
}
function Oc(e) {
  const [t, r] = J(null), n = H(e), i = Ce((a) => {
    const c = sn(a.target);
    !c || r((s) => s ? (s.set(c, En(c)), new Map(s)) : null);
  }, []);
  return U(() => {
    const a = n.current;
    if (e !== a) {
      c(a);
      const s = e.map((l) => {
        const p = sn(l);
        return p ? (p.addEventListener("scroll", i, {
          passive: !0
        }), [p, En(p)]) : null;
      }).filter((l) => l != null);
      r(s.length ? new Map(s) : null), n.current = e;
    }
    return () => {
      c(e), c(a);
    };
    function c(s) {
      s.forEach((l) => {
        const p = sn(l);
        p == null || p.removeEventListener("scroll", i);
      });
    }
  }, [i, e]), le(() => e.length ? t ? Array.from(t.values()).reduce((a, c) => jt(a, c), rt) : pi(e) : rt, [e, t]);
}
function So(e, t) {
  t === void 0 && (t = []);
  const r = H(null);
  return U(
    () => {
      r.current = null;
    },
    t
  ), U(() => {
    const n = e !== rt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? Nr(e, r.current) : rt;
}
function Sc(e) {
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
function Rc(e, t) {
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
function gi(e) {
  return le(() => e ? Qs(e) : null, [e]);
}
const un = [];
function Pc(e, t) {
  t === void 0 && (t = br);
  const [r] = e, n = gi(r ? Be(r) : null), [i, a] = $n(s, un), c = Br({
    callback: a
  });
  return e.length > 0 && i === un && a(), pt(() => {
    e.length ? e.forEach((l) => c == null ? void 0 : c.observe(l)) : (c == null || c.disconnect(), a());
  }, [e]), i;
  function s() {
    return e.length ? e.map((l) => ui(l) ? n : new Fn(t(l), l)) : un;
  }
}
function $c(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return hr(t) ? t : e;
}
function Dc(e) {
  let {
    measure: t
  } = e;
  const [r, n] = J(null), i = Ce((p) => {
    for (const {
      target: f
    } of p)
      if (hr(f)) {
        n((u) => {
          const d = t(f);
          return u ? {
            ...u,
            width: d.width,
            height: d.height
          } : d;
        });
        break;
      }
  }, [t]), a = Br({
    callback: i
  }), c = Ce((p) => {
    const f = $c(p);
    a == null || a.disconnect(), f && (a == null || a.observe(f)), n(f ? t(f) : null);
  }, [t, a]), [s, l] = Ar(c);
  return le(() => ({
    nodeRef: s,
    rect: r,
    setRef: l
  }), [r, s, l]);
}
const Cc = [{
  sensor: vi,
  options: {}
}, {
  sensor: jn,
  options: {}
}], Ac = {
  current: {}
}, Pr = {
  draggable: {
    measure: yo
  },
  droppable: {
    measure: yo,
    strategy: ur.WhileDragging,
    frequency: On.Optimized
  },
  dragOverlay: {
    measure: br
  }
};
class ir extends Map {
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
const Nc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new ir(),
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
}, Ic = {
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
}, Vr = /* @__PURE__ */ Ke(Ic), kc = /* @__PURE__ */ Ke(Nc);
function Mc() {
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
      containers: new ir()
    }
  };
}
function Fc(e, t) {
  switch (t.type) {
    case we.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case we.DragMove:
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
    case we.DragEnd:
    case we.DragCancel:
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
    case we.RegisterDroppable: {
      const {
        element: r
      } = t, {
        id: n
      } = r, i = new ir(e.droppable.containers);
      return i.set(n, r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case we.SetDroppableDisabled: {
      const {
        id: r,
        key: n,
        disabled: i
      } = t, a = e.droppable.containers.get(r);
      if (!a || n !== a.key)
        return e;
      const c = new ir(e.droppable.containers);
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
    case we.UnregisterDroppable: {
      const {
        id: r,
        key: n
      } = t, i = e.droppable.containers.get(r);
      if (!i || n !== i.key)
        return e;
      const a = new ir(e.droppable.containers);
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
function jc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: i
  } = _e(Vr), a = _n(n), c = _n(r == null ? void 0 : r.id);
  return U(() => {
    if (!t && !n && a && c != null) {
      if (!ni(a) || document.activeElement === a.target)
        return;
      const s = i.get(c);
      if (!s)
        return;
      const {
        activatorNode: l,
        node: p
      } = s;
      if (!l.current && !p.current)
        return;
      requestAnimationFrame(() => {
        for (const f of [l.current, p.current]) {
          if (!f)
            continue;
          const u = $s(f);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, t, i, c, a]), null;
}
function Lc(e, t) {
  let {
    transform: r,
    ...n
  } = t;
  return e != null && e.length ? e.reduce((i, a) => a({
    transform: i,
    ...n
  }), r) : r;
}
function Bc(e) {
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
function Vc(e) {
  let {
    activeNode: t,
    measure: r,
    initialRect: n,
    config: i = !0
  } = e;
  const a = H(!1), {
    x: c,
    y: s
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  pt(() => {
    if (!c && !s || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !n)
      return;
    const p = t == null ? void 0 : t.node.current;
    if (!p || p.isConnected === !1)
      return;
    const f = r(p), u = ai(f, n);
    if (c || (u.x = 0), s || (u.y = 0), a.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const d = si(p);
      d && d.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, c, s, n, r]);
}
const yi = /* @__PURE__ */ Ke({
  ...rt,
  scaleX: 1,
  scaleY: 1
});
var bt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(bt || (bt = {}));
const Yc = /* @__PURE__ */ Wo(function(t) {
  var r, n, i, a;
  let {
    id: c,
    accessibility: s,
    autoScroll: l = !0,
    children: p,
    sensors: f = Cc,
    collisionDetection: u = Us,
    measuring: d,
    modifiers: v,
    ...y
  } = t;
  const b = $n(Fc, void 0, Mc), [_, E] = b, [P, $] = Ms(), [D, g] = J(bt.Uninitialized), w = D === bt.Initialized, {
    draggable: {
      active: x,
      nodes: S,
      translate: I
    },
    droppable: {
      containers: L
    }
  } = _, M = x ? S.get(x) : null, Z = H({
    initial: null,
    translated: null
  }), K = le(() => {
    var ve;
    return x != null ? {
      id: x,
      data: (ve = M == null ? void 0 : M.data) != null ? ve : Ac,
      rect: Z
    } : null;
  }, [x, M]), re = H(null), [fe, ie] = J(null), [ee, xe] = J(null), he = lr(y, Object.values(y)), O = Lr("DndDescribedBy", c), N = le(() => L.getEnabled(), [L]), B = Bc(d), {
    droppableRects: V,
    measureDroppableContainers: j,
    measuringScheduled: W
  } = yc(N, {
    dragging: w,
    dependencies: [I.x, I.y],
    config: B.droppable
  }), F = bc(S, x), q = le(() => ee ? xn(ee) : null, [ee]), z = Tr(), X = _c(F, B.draggable.measure);
  Vc({
    activeNode: x ? S.get(x) : null,
    config: z.layoutShiftCompensation,
    initialRect: X,
    measure: B.draggable.measure
  });
  const Y = To(F, B.draggable.measure, X), A = To(F ? F.parentElement : null), T = H({
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
  }), Q = L.getNodeFor((r = T.current.over) == null ? void 0 : r.id), me = Dc({
    measure: B.dragOverlay.measure
  }), Te = (n = me.nodeRef.current) != null ? n : F, $e = w ? (i = me.rect) != null ? i : Y : null, ot = Boolean(me.nodeRef.current && me.rect), lt = Ec(ot ? null : Y), it = gi(Te ? Be(Te) : null), Oe = Tc(w ? Q != null ? Q : F : null), Je = Pc(Oe), Ze = Lc(v, {
    transform: {
      x: I.x - lt.x,
      y: I.y - lt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ee,
    active: K,
    activeNodeRect: Y,
    containerNodeRect: A,
    draggingNodeRect: $e,
    over: T.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Oe,
    scrollableAncestorRects: Je,
    windowRect: it
  }), _t = q ? jt(q, I) : null, vt = Oc(Oe), xt = So(vt), wt = So(vt, [Y]), Ae = jt(Ze, xt), Qe = $e ? Ks($e, Ze) : null, ht = K && Qe ? u({
    active: K,
    collisionRect: Qe,
    droppableRects: V,
    droppableContainers: N,
    pointerCoordinates: _t
  }) : null, Gt = ii(ht, "id"), [qe, xr] = J(null), Gr = ot ? Ze : jt(Ze, wt), Hr = Gs(Gr, (a = qe == null ? void 0 : qe.rect) != null ? a : null, Y), wr = Ce(
    (ve, Re) => {
      let {
        sensor: Pe,
        options: et
      } = Re;
      if (re.current == null)
        return;
      const Ie = S.get(re.current);
      if (!Ie)
        return;
      const ke = ve.nativeEvent, ze = new Pe({
        active: re.current,
        activeNode: Ie,
        event: ke,
        options: et,
        context: T,
        onStart(Me) {
          const Et = re.current;
          if (Et == null)
            return;
          const Tt = S.get(Et);
          if (!Tt)
            return;
          const {
            onDragStart: Ot
          } = he.current, Nt = {
            active: {
              id: Et,
              data: Tt.data,
              rect: Z
            }
          };
          Kt(() => {
            Ot == null || Ot(Nt), g(bt.Initializing), E({
              type: we.DragStart,
              initialCoordinates: Me,
              active: Et
            }), P({
              type: "onDragStart",
              event: Nt
            });
          });
        },
        onMove(Me) {
          E({
            type: we.DragMove,
            coordinates: Me
          });
        },
        onEnd: ut(we.DragEnd),
        onCancel: ut(we.DragCancel)
      });
      Kt(() => {
        ie(ze), xe(ve.nativeEvent);
      });
      function ut(Me) {
        return async function() {
          const {
            active: Tt,
            collisions: Ot,
            over: Nt,
            scrollAdjustedTranslate: Or
          } = T.current;
          let St = null;
          if (Tt && Or) {
            const {
              cancelDrop: Rt
            } = he.current;
            St = {
              activatorEvent: ke,
              active: Tt,
              collisions: Ot,
              delta: Or,
              over: Nt
            }, Me === we.DragEnd && typeof Rt == "function" && await Promise.resolve(Rt(St)) && (Me = we.DragCancel);
          }
          re.current = null, Kt(() => {
            E({
              type: Me
            }), g(bt.Uninitialized), xr(null), ie(null), xe(null);
            const Rt = Me === we.DragEnd ? "onDragEnd" : "onDragCancel";
            if (St) {
              const h = he.current[Rt];
              h == null || h(St), P({
                type: Rt,
                event: St
              });
            }
          });
        };
      }
    },
    [S]
  ), Kr = Ce((ve, Re) => (Pe, et) => {
    const Ie = Pe.nativeEvent, ke = S.get(et);
    if (re.current !== null || !ke || Ie.dndKit || Ie.defaultPrevented)
      return;
    const ze = {
      active: ke
    };
    ve(Pe, Re.options, ze) === !0 && (Ie.dndKit = {
      capturedBy: Re.sensor
    }, re.current = et, wr(Pe, Re));
  }, [S, wr]), Er = gc(f, Kr);
  Sc(f), pt(() => {
    Y && D === bt.Initializing && g(bt.Initialized);
  }, [Y, D]), U(
    () => {
      const {
        onDragMove: ve
      } = he.current, {
        active: Re,
        activatorEvent: Pe,
        collisions: et,
        over: Ie
      } = T.current;
      if (!Re || !Pe)
        return;
      const ke = {
        active: Re,
        activatorEvent: Pe,
        collisions: et,
        delta: {
          x: Ae.x,
          y: Ae.y
        },
        over: Ie
      };
      Kt(() => {
        ve == null || ve(ke), P({
          type: "onDragMove",
          event: ke
        });
      });
    },
    [Ae.x, Ae.y]
  ), U(
    () => {
      const {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        droppableContainers: et,
        scrollAdjustedTranslate: Ie
      } = T.current;
      if (!ve || re.current == null || !Re || !Ie)
        return;
      const {
        onDragOver: ke
      } = he.current, ze = et.get(Gt), ut = ze && ze.rect.current ? {
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
        over: ut
      };
      Kt(() => {
        xr(ut), ke == null || ke(Me), P({
          type: "onDragOver",
          event: Me
        });
      });
    },
    [Gt]
  ), pt(() => {
    T.current = {
      activatorEvent: ee,
      active: K,
      activeNode: F,
      collisionRect: Qe,
      collisions: ht,
      droppableRects: V,
      draggableNodes: S,
      draggingNode: Te,
      draggingNodeRect: $e,
      droppableContainers: L,
      over: qe,
      scrollableAncestors: Oe,
      scrollAdjustedTranslate: Ae
    }, Z.current = {
      initial: $e,
      translated: Qe
    };
  }, [K, F, ht, Qe, S, Te, $e, V, L, qe, Oe, Ae]), vc({
    ...z,
    delta: I,
    draggingRect: Qe,
    pointerCoordinates: _t,
    scrollableAncestors: Oe,
    scrollableAncestorRects: Je
  });
  const Xr = le(() => ({
    active: K,
    activeNode: F,
    activeNodeRect: Y,
    activatorEvent: ee,
    collisions: ht,
    containerNodeRect: A,
    dragOverlay: me,
    draggableNodes: S,
    droppableContainers: L,
    droppableRects: V,
    over: qe,
    measureDroppableContainers: j,
    scrollableAncestors: Oe,
    scrollableAncestorRects: Je,
    measuringConfiguration: B,
    measuringScheduled: W,
    windowRect: it
  }), [K, F, Y, ee, ht, A, me, S, L, V, qe, j, Oe, Je, B, W, it]), Ht = le(() => ({
    activatorEvent: ee,
    activators: Er,
    active: K,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: E,
    draggableNodes: S,
    over: qe,
    measureDroppableContainers: j
  }), [ee, Er, K, Y, E, O, S, qe, j]);
  return /* @__PURE__ */ C(oi.Provider, {
    value: $,
    children: [/* @__PURE__ */ C(Vr.Provider, {
      value: Ht,
      children: [/* @__PURE__ */ m(kc.Provider, {
        value: Xr,
        children: /* @__PURE__ */ m(yi.Provider, {
          value: Hr,
          children: p
        })
      }), /* @__PURE__ */ m(jc, {
        disabled: (s == null ? void 0 : s.restoreFocus) === !1
      })]
    }), /* @__PURE__ */ m(Ls, {
      ...s,
      hiddenTextDescribedById: O
    })]
  });
  function Tr() {
    const ve = (fe == null ? void 0 : fe.autoScrollEnabled) === !1, Re = typeof l == "object" ? l.enabled === !1 : l === !1, Pe = w && !ve && !Re;
    return typeof l == "object" ? {
      ...l,
      enabled: Pe
    } : {
      enabled: Pe
    };
  }
}), qc = /* @__PURE__ */ Ke(null), Ro = "button", zc = "Droppable";
function Wc(e) {
  let {
    id: t,
    data: r,
    disabled: n = !1,
    attributes: i
  } = e;
  const a = Lr(zc), {
    activators: c,
    activatorEvent: s,
    active: l,
    activeNodeRect: p,
    ariaDescribedById: f,
    draggableNodes: u,
    over: d
  } = _e(Vr), {
    role: v = Ro,
    roleDescription: y = "draggable",
    tabIndex: b = 0
  } = i != null ? i : {}, _ = (l == null ? void 0 : l.id) === t, E = _e(_ ? yi : qc), [P, $] = Ar(), [D, g] = Ar(), w = Rc(c, t), x = lr(r);
  pt(
    () => (u.set(t, {
      id: t,
      key: a,
      node: P,
      activatorNode: D,
      data: x
    }), () => {
      const I = u.get(t);
      I && I.key === a && u.delete(t);
    }),
    [u, t]
  );
  const S = le(() => ({
    role: v,
    tabIndex: b,
    "aria-disabled": n,
    "aria-pressed": _ && v === Ro ? !0 : void 0,
    "aria-roledescription": y,
    "aria-describedby": f.draggable
  }), [n, v, b, _, y, f.draggable]);
  return {
    active: l,
    activatorEvent: s,
    activeNodeRect: p,
    attributes: S,
    isDragging: _,
    listeners: n ? void 0 : w,
    node: P,
    over: d,
    setNodeRef: $,
    setActivatorNodeRef: g,
    transform: E
  };
}
const Uc = "Droppable", Gc = {
  timeout: 25
};
function _i(e) {
  let {
    data: t,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: i
  } = e;
  const a = Lr(Uc), {
    active: c,
    dispatch: s,
    over: l,
    measureDroppableContainers: p
  } = _e(Vr), f = H({
    disabled: r
  }), u = H(!1), d = H(null), v = H(null), {
    disabled: y,
    updateMeasurementsFor: b,
    timeout: _
  } = {
    ...Gc,
    ...i
  }, E = lr(b != null ? b : n), P = Ce(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      v.current != null && clearTimeout(v.current), v.current = setTimeout(() => {
        p(Array.isArray(E.current) ? E.current : [E.current]), v.current = null;
      }, _);
    },
    [_]
  ), $ = Br({
    callback: P,
    disabled: y || !c
  }), D = Ce((S, I) => {
    !$ || (I && ($.unobserve(I), u.current = !1), S && $.observe(S));
  }, [$]), [g, w] = Ar(D), x = lr(t);
  return U(() => {
    !$ || !g.current || ($.disconnect(), u.current = !1, $.observe(g.current));
  }, [g, $]), pt(
    () => (s({
      type: we.RegisterDroppable,
      element: {
        id: n,
        key: a,
        disabled: r,
        node: g,
        rect: d,
        data: x
      }
    }), () => s({
      type: we.UnregisterDroppable,
      key: a,
      id: n
    })),
    [n]
  ), U(() => {
    r !== f.current.disabled && (s({
      type: we.SetDroppableDisabled,
      id: n,
      key: a,
      disabled: r
    }), f.current.disabled = r);
  }, [n, a, r, s]), {
    active: c,
    rect: d,
    isOver: (l == null ? void 0 : l.id) === n,
    node: g,
    over: l,
    setNodeRef: w
  };
}
const Hc = ({
  transform: e
}) => ({
  ...e,
  y: 0
}), Kc = ({
  transform: e
}) => ({
  ...e,
  x: 0
}), Xc = [oe.Down, oe.Right, oe.Up, oe.Left], Jc = (e, { context: { active: t, droppableRects: r, droppableContainers: n, collisionRect: i } }) => {
  var a;
  if (Xc.includes(e.code)) {
    e.preventDefault();
    const c = 20;
    if (!t || !i)
      return;
    const s = [];
    n.getEnabled().forEach((f) => {
      if (!f || (f == null ? void 0 : f.disabled))
        return;
      const u = r.get(f.id);
      if (!!u)
        switch (e.code) {
          case oe.Down:
            i.top < u.top && s.push(f);
            break;
          case oe.Up:
            i.top > u.top + c && s.push(f);
            break;
          case oe.Left:
            i.left >= u.left + u.width && s.push(f);
            break;
          case oe.Right:
            i.left + i.width <= u.left && s.push(f);
            break;
        }
    });
    const l = zs({
      active: t,
      collisionRect: i,
      droppableRects: r,
      droppableContainers: s,
      pointerCoordinates: null
    }), p = ii(l, "id");
    if (p != null) {
      const f = n.get(p), u = f == null ? void 0 : f.node.current, d = f == null ? void 0 : f.rect.current;
      if (u && d)
        return ((a = f.data.current) == null ? void 0 : a.type) === "container" ? {
          x: d.left,
          y: d.top + c
        } : {
          x: d.left,
          y: d.top
        };
    }
  }
}, xi = Ke(), rr = (e, t) => ye.map(e, (r) => {
  var n;
  if (!!Ye(r) && !!r.props) {
    if (((n = r == null ? void 0 : r.props) == null ? void 0 : n.__TYPE) === t)
      return r;
    if (r.props.children)
      return rr(r.props.children, t);
  }
}), Zc = {
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
}, wi = ({
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
  const [p, f] = J([]), [u, d] = J(null), [v, y] = J(() => b());
  function b() {
    return [...rr(e, "droppable"), ...rr(e, "general-draggable")].reduce((w, x) => ({
      ...w,
      [x.props.id]: x.props.children ? [...rr(x.props.children, "draggable").map((S) => S.props.id)] : []
    }), {});
  }
  const _ = Object.freeze({
    restrictToVerticalAxis: Kc,
    restrictToHorizontalAxis: Hc
  }), E = Bs(an(hi), an(mi), an(jn, {
    coordinateGetter: Jc
  })), P = (w, x) => {
    if (Object.keys(v).pop() !== w.id && w.data.current.validate.includes(x))
      return f((I) => [...I.filter((L) => L !== x), x]);
    f((I) => [...I.filter((L) => L !== x)]);
  }, $ = (w) => w in v ? w : Object.keys(v).find((x) => v[x].includes(w)), D = ({
    active: w,
    over: x
  }) => {
    if (!x)
      return;
    d(null), P(x, w.id);
    const S = $(x.id), I = $(w.id);
    if (I !== S) {
      if (t)
        return y((M) => ({
          ...M,
          [I]: M[I].filter((Z) => Z !== w.id),
          [S]: [...M[S], w.id]
        }));
      const L = Object.keys(v).pop();
      y((M) => ({
        ...M,
        [S]: S === L ? [...M[S], w.id] : [w.id],
        [I]: S === L ? M[I].filter((Z) => Z !== w.id) : [...M[I].filter((Z) => Z !== w.id), ...M[S]]
      }));
    }
  }, g = (w) => ye.map(w, (x) => {
    if (!x.props)
      return x;
    if (x.props.__TYPE !== "draggable")
      return x.props.id in v && v[x.props.id].length > 0 ? Ee(x, {
        ...x.props
      }, [...v[x.props.id].map((S) => rr(e, "draggable").filter((I) => I.props.id === S)).flat()]) : x.props.children ? Ee(x, {
        ...x.props,
        children: g(x.props.children)
      }) : x;
  });
  return U(() => {
    p.length > 0 && r && r(p);
  }, [p, r]), U(() => {
    i && y(() => b());
  }, [i]), /* @__PURE__ */ m(xi.Provider, {
    value: {
      listId: p,
      propValidate: a,
      validate: n,
      isDragging: u
    },
    children: /* @__PURE__ */ m(Yc, {
      sensors: E,
      accessibility: {
        announcements: s
      },
      onDragStart: ({
        active: w
      }) => d(w.id),
      onDragEnd: D,
      ...!!l && {
        onDragMove: l
      },
      onDragCancel: () => d(null),
      ...c && {
        modifiers: [_[c]]
      },
      children: g(e)
    })
  });
};
wi.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: Zc
};
wi.propTypes = {
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
const Qc = "_pop_19oe0_1", el = "_pulse_19oe0_1", gr = {
  "c-droppable": "_c-droppable_19oe0_1",
  "c-droppable--active": "_c-droppable--active_19oe0_20",
  "c-draggable": "_c-draggable_19oe0_25",
  "c-draggable--active": "_c-draggable--active_19oe0_54",
  pop: Qc,
  pulse: el
}, Ei = ({
  children: e,
  id: t,
  addClass: r,
  dragging: n,
  label: i,
  attribute: a,
  disabledDefaultAttributes: c,
  element: s,
  __TYPE: l,
  ...p
}) => {
  const f = s || "div", {
    listId: u,
    propValidate: d,
    validate: v,
    isDragging: y
  } = _e(xi), {
    attributes: b,
    listeners: _,
    setNodeRef: E,
    transform: P
  } = Wc({
    id: t,
    disabled: v,
    data: {
      label: i
    },
    attributes: a
  });
  return /* @__PURE__ */ m(f, {
    id: t,
    ref: E,
    "data-type": l,
    className: `${gr["c-draggable"]} ${y === t ? n : ""} ${r != null ? r : ""}`,
    style: {
      transform: wn.Translate.toString(P)
    },
    ...v && {
      [d]: !!u.includes(t)
    },
    ...!c && {
      ...b
    },
    ..._,
    ...p,
    children: e
  });
};
Ei.defaultProps = {
  __TYPE: "draggable",
  dragging: gr["c-draggable--active"],
  disabledDefaultAttributes: !1
};
Ei.propTypes = {
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
  __TYPE: de("draggable")
};
const Ti = ({
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
  const p = c || "div", {
    isOver: f,
    setNodeRef: u
  } = _i({
    id: t,
    data: {
      validate: r,
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ m(p, {
    ref: u,
    "data-type": s,
    className: `${gr["c-droppable"]} ${f && i && i} ${n != null ? n : ""}`,
    ...l,
    children: e
  });
};
Ti.defaultProps = {
  __TYPE: "droppable",
  over: gr["c-droppable--active"]
};
Ti.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]),
  id: o.exports.string.isRequired,
  validate: o.exports.array.isRequired,
  addClass: o.exports.string,
  over: o.exports.string,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: de("droppable")
};
const Oi = ({
  children: e,
  addClass: t,
  id: r,
  label: n,
  element: i,
  __TYPE: a,
  ...c
}) => {
  const s = i || "div", {
    setNodeRef: l
  } = _i({
    id: r,
    data: {
      label: n,
      type: "container"
    }
  });
  return /* @__PURE__ */ m(s, {
    id: r,
    ref: l,
    "data-type": a,
    className: `${gr["c-droppable"]} ${t != null ? t : ""}`,
    ...c,
    children: e
  });
};
Oi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  id: o.exports.string.isRequired,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: de("general-draggable")
};
Oi.defaultProps = {
  __TYPE: "general-draggable",
  id: dt("unique-id-general-"),
  label: "contendor inicial"
};
const Zu = ({
  ...e
}) => /* @__PURE__ */ m("span", {
  id: "hc_extension_svg_filters",
  ...e,
  children: /* @__PURE__ */ m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: "0",
    children: /* @__PURE__ */ C("defs", {
      children: [/* @__PURE__ */ m("filter", {
        id: "hc_extension_off",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ C("feComponentTransfer", {
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
        children: /* @__PURE__ */ C("feComponentTransfer", {
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
        children: /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
        id: "hc_extension_grayscale",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ m("feColorMatrix", {
          type: "matrix",
          values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
        children: /* @__PURE__ */ C("feComponentTransfer", {
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
        children: /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
        id: "hc_extension_invert_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ C("feComponentTransfer", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
        id: "hc_extension_yellow_on_black",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
        id: "hc_extension_yellow_on_black_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ C("feComponentTransfer", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
        id: "hc_extension_red_on_white_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ C("feComponentTransfer", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
        id: "hc_extension_green_on_blue_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ C("feComponentTransfer", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
        id: "hc_extension_yellow_on_blue_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ C("feComponentTransfer", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
      }), /* @__PURE__ */ C("filter", {
        id: "hc_extension_white_on_black_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ C("feComponentTransfer", {
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
        }), /* @__PURE__ */ C("feComponentTransfer", {
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
}), Po = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, Si = ({
  url: e,
  alt: t,
  title: r,
  width: n,
  addClass: i,
  noCaption: a,
  ...c
}) => {
  const [s, l] = J(!1), p = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, f = (d) => l(d), u = s ? p : `${e}`;
  return /* @__PURE__ */ C("figure", {
    className: `${Po["c-image"]} ${i != null ? i : ""}`,
    ...n && {
      style: {
        maxWidth: `${n}px`
      }
    },
    children: [/* @__PURE__ */ m("img", {
      src: u,
      onError: f,
      alt: t,
      ...c
    }), !a && /* @__PURE__ */ m("figcaption", {
      className: Po["c-image__figcaption"],
      children: /* @__PURE__ */ C("p", {
        children: [/* @__PURE__ */ C("strong", {
          children: [r, "\xA0"]
        }), t]
      })
    })]
  });
};
Si.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
Si.propTypes = {
  url: o.exports.string,
  alt: o.exports.string,
  title: o.exports.string,
  width: o.exports.string,
  addClass: o.exports.string,
  noCaption: o.exports.bool
};
const fr = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, Ri = ct(({
  id: e,
  type: t,
  value: r,
  placeholder: n,
  label: i,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  isReadOnly: p,
  onValue: f
}, u) => {
  const d = le(() => e || dt("c-input-"), [e]), v = ({
    target: y
  }) => {
    f && f({
      id: d,
      value: y.value
    });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ C("label", {
    htmlFor: d,
    className: `${fr["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ m("input", {
      id: d,
      ref: u,
      type: t,
      name: d,
      value: r,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: v,
      className: fr["c-input"],
      ...p && {
        readOnly: p,
        "aria-readonly": p
      }
    })]
  }) : null;
});
Ri.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Ri.propTypes = {
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
  __TYPE: de("Input")
};
const tl = ({
  children: e,
  onAllValue: t
}) => {
  const [r, n] = J([]), i = (s) => n([...r.filter((l) => l.id !== s.id), {
    ...s
  }]);
  U(() => {
    t && t(r);
  }, [r, t]);
  const a = (s, l, p) => ye.toArray(s).map((f) => f.props.__TYPE === l ? Ee(f, {
    ...f.props,
    ...p
  }) : f);
  return ye.map(e, (s) => {
    var l, p;
    return Ye(s) ? ((l = s == null ? void 0 : s.props) == null ? void 0 : l.__TYPE) === "InputStyle" ? Ee(s, {
      ...s.props,
      children: a(s.props.children, "Input", {
        onValue: i
      })
    }) : ((p = s == null ? void 0 : s.props) == null ? void 0 : p.__TYPE) === "Input" ? Ee(s, {
      ...s.props,
      onValue: i
    }) : s : null;
  });
};
tl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllValue: o.exports.func
};
const Pi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${fr["c-input__wrapper-style"]} ${t != null ? t : ""}`,
  children: Le(e, ["InputLeftAddon", "InputRightAddon", "Input"])
});
Pi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: de("InputStyle")
};
Pi.defaultProps = {
  __TYPE: "InputStyle"
};
const $i = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${fr["c-input__left-addon"]} ${t != null ? t : ""}`,
  children: e
});
$i.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: de("InputLeftAddon")
};
$i.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const Di = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${fr["c-input__right-addon"]} ${t != null ? t : ""}`,
  children: e
});
Di.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: de("InputRightAddon")
};
Di.defaultProps = {
  __TYPE: "InputRightAddon"
};
const rl = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, nl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("kbd", {
  className: `${rl["c-kbd"]} ${t != null ? t : ""}`,
  ...r,
  children: e
});
nl.propTypes = {
  children: o.exports.string,
  addClass: o.exports.string
};
const Ci = ({
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
Ci.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Ci.propTypes = {
  children: o.exports.oneOfType([o.exports.string, o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  link: o.exports.string,
  isExternal: o.exports.bool,
  label: o.exports.string.isRequired
};
const Ai = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, ol = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("ul", {
  className: `${Ai["c-List"]} ${t != null ? t : ""}`,
  ...r,
  children: Le(e, ["ListItem"])
});
ol.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const Ni = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = ye.map(e, (a) => {
    var c;
    return ((c = a == null ? void 0 : a.props) == null ? void 0 : c.__TYPE) === "Icon" ? Ee(a, {
      ...a.props,
      addClass: Ai["c-list-item__icon"]
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
Ni.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  __TYPE: de("ListItem")
};
Ni.defaultProps = {
  __TYPE: "ListItem"
};
const il = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("ol", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: Le(e, ["ListItem"])
});
il.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const al = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("ul", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: Le(e, ["ListItem"])
});
al.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
var fn = function() {
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
function pn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, r = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), n = function() {
    function p(f, u) {
      pn(this, p), this._inertManager = u, this._rootElement = f, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return fn(p, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(u) {
          this._unmanageNode(u.node);
        }, this), this._observer = null, this._rootElement = null, this._managedNodes = null, this._inertManager = null;
      }
    }, {
      key: "_makeSubtreeUnfocusable",
      value: function(u) {
        var d = this;
        c(u, function(_) {
          return d._visitNode(_);
        });
        var v = document.activeElement;
        if (!document.body.contains(u)) {
          for (var y = u, b = void 0; y; ) {
            if (y.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              b = y;
              break;
            }
            y = y.parentNode;
          }
          b && (v = b.activeElement);
        }
        u.contains(v) && (v.blur(), v === document.activeElement && document.body.focus());
      }
    }, {
      key: "_visitNode",
      value: function(u) {
        if (u.nodeType === Node.ELEMENT_NODE) {
          var d = u;
          d !== this._rootElement && d.hasAttribute("inert") && this._adoptInertRoot(d), (t.call(d, r) || d.hasAttribute("tabindex")) && this._manageNode(d);
        }
      }
    }, {
      key: "_manageNode",
      value: function(u) {
        var d = this._inertManager.register(u, this);
        this._managedNodes.add(d);
      }
    }, {
      key: "_unmanageNode",
      value: function(u) {
        var d = this._inertManager.deregister(u, this);
        d && this._managedNodes.delete(d);
      }
    }, {
      key: "_unmanageSubtree",
      value: function(u) {
        var d = this;
        c(u, function(v) {
          return d._unmanageNode(v);
        });
      }
    }, {
      key: "_adoptInertRoot",
      value: function(u) {
        var d = this._inertManager.getInertRoot(u);
        d || (this._inertManager.setInert(u, !0), d = this._inertManager.getInertRoot(u)), d.managedNodes.forEach(function(v) {
          this._manageNode(v.node);
        }, this);
      }
    }, {
      key: "_onMutation",
      value: function(u, d) {
        u.forEach(function(v) {
          var y = v.target;
          if (v.type === "childList")
            e.call(v.addedNodes).forEach(function(_) {
              this._makeSubtreeUnfocusable(_);
            }, this), e.call(v.removedNodes).forEach(function(_) {
              this._unmanageSubtree(_);
            }, this);
          else if (v.type === "attributes") {
            if (v.attributeName === "tabindex")
              this._manageNode(y);
            else if (y !== this._rootElement && v.attributeName === "inert" && y.hasAttribute("inert")) {
              this._adoptInertRoot(y);
              var b = this._inertManager.getInertRoot(y);
              this._managedNodes.forEach(function(_) {
                y.contains(_.node) && b._manageNode(_.node);
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
      set: function(u) {
        this._savedAriaHidden = u;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), p;
  }(), i = function() {
    function p(f, u) {
      pn(this, p), this._node = f, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([u]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return fn(p, [{
      key: "destructor",
      value: function() {
        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var u = this._node;
          this._savedTabIndex !== null ? u.setAttribute("tabindex", this._savedTabIndex) : u.removeAttribute("tabindex"), this._overrodeFocusMethod && delete u.focus;
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
          var u = this.node;
          if (t.call(u, r)) {
            if (u.tabIndex === -1 && this.hasSavedTabIndex)
              return;
            u.hasAttribute("tabindex") && (this._savedTabIndex = u.tabIndex), u.setAttribute("tabindex", "-1"), u.nodeType === Node.ELEMENT_NODE && (u.focus = function() {
            }, this._overrodeFocusMethod = !0);
          } else
            u.hasAttribute("tabindex") && (this._savedTabIndex = u.tabIndex, u.removeAttribute("tabindex"));
        }
      }
    }, {
      key: "addInertRoot",
      value: function(u) {
        this._throwIfDestroyed(), this._inertRoots.add(u);
      }
    }, {
      key: "removeInertRoot",
      value: function(u) {
        this._throwIfDestroyed(), this._inertRoots.delete(u), this._inertRoots.size === 0 && this.destructor();
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
      set: function(u) {
        this._throwIfDestroyed(), this._savedTabIndex = u;
      },
      get: function() {
        return this._throwIfDestroyed(), this._savedTabIndex;
      }
    }]), p;
  }(), a = function() {
    function p(f) {
      if (pn(this, p), !f)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = f, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(f.head || f.body || f.documentElement), f.readyState === "loading" ? f.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return fn(p, [{
      key: "setInert",
      value: function(u, d) {
        if (d) {
          if (this._inertRoots.has(u))
            return;
          var v = new n(u, this);
          if (u.setAttribute("inert", ""), this._inertRoots.set(u, v), !this._document.body.contains(u))
            for (var y = u.parentNode; y; )
              y.nodeType === 11 && s(y), y = y.parentNode;
        } else {
          if (!this._inertRoots.has(u))
            return;
          var b = this._inertRoots.get(u);
          b.destructor(), this._inertRoots.delete(u), u.removeAttribute("inert");
        }
      }
    }, {
      key: "getInertRoot",
      value: function(u) {
        return this._inertRoots.get(u);
      }
    }, {
      key: "register",
      value: function(u, d) {
        var v = this._managedNodes.get(u);
        return v !== void 0 ? v.addInertRoot(d) : v = new i(u, d), this._managedNodes.set(u, v), v;
      }
    }, {
      key: "deregister",
      value: function(u, d) {
        var v = this._managedNodes.get(u);
        return v ? (v.removeInertRoot(d), v.destroyed && this._managedNodes.delete(u), v) : null;
      }
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var u = e.call(this._document.querySelectorAll("[inert]"));
        u.forEach(function(d) {
          this.setInert(d, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
    }, {
      key: "_watchForInert",
      value: function(u, d) {
        var v = this;
        u.forEach(function(y) {
          switch (y.type) {
            case "childList":
              e.call(y.addedNodes).forEach(function(E) {
                if (E.nodeType === Node.ELEMENT_NODE) {
                  var P = e.call(E.querySelectorAll("[inert]"));
                  t.call(E, "[inert]") && P.unshift(E), P.forEach(function($) {
                    this.setInert($, !0);
                  }, v);
                }
              }, v);
              break;
            case "attributes":
              if (y.attributeName !== "inert")
                return;
              var b = y.target, _ = b.hasAttribute("inert");
              v.setInert(b, _);
              break;
          }
        }, this);
      }
    }]), p;
  }();
  function c(p, f, u) {
    if (p.nodeType == Node.ELEMENT_NODE) {
      var d = p;
      f && f(d);
      var v = d.shadowRoot;
      if (v) {
        c(v, f);
        return;
      }
      if (d.localName == "content") {
        for (var y = d, b = y.getDistributedNodes ? y.getDistributedNodes() : [], _ = 0; _ < b.length; _++)
          c(b[_], f);
        return;
      }
      if (d.localName == "slot") {
        for (var E = d, P = E.assignedNodes ? E.assignedNodes({ flatten: !0 }) : [], $ = 0; $ < P.length; $++)
          c(P[$], f);
        return;
      }
    }
    for (var D = p.firstChild; D != null; )
      c(D, f), D = D.nextSibling;
  }
  function s(p) {
    if (!p.querySelector("style#inert-style, link#inert-style")) {
      var f = document.createElement("style");
      f.setAttribute("id", "inert-style"), f.textContent = `
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
`, p.appendChild(f);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var l = new a(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      get: function() {
        return this.hasAttribute("inert");
      },
      set: function(f) {
        l.setInert(this, f);
      }
    });
  }
})();
const Bn = Ke(), sl = Object.freeze({
  ESC: 27
}), Ii = ({
  children: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n
}) => {
  const i = H(), a = (p) => {
    const f = document.querySelector("#root");
    f.inert = p;
  }, c = (p) => {
    (p.keyCode || p.which) === sl.ESC && l();
  }, s = (p, f) => {
    i.current.classList.replace(p, f);
  }, l = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), a(!1), r(!t), Object.keys(n).length !== 0 && n.current.focus();
    }, 400);
  };
  return U(() => {
    t && (a(!0), i.current && i.current.focus());
  }, [t]), /* @__PURE__ */ m(Bn.Provider, {
    value: {
      isOpen: t,
      onKeyDown: c,
      onCloseModal: l,
      refModal: i
    },
    children: /* @__PURE__ */ m(Ut, {
      id: "js-modal",
      children: Le(e, ["ModalContent", "ModalOverlay"])
    })
  });
};
Ii.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Ii.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  isOpen: o.exports.bool.isRequired,
  onClose: o.exports.func.isRequired,
  label: o.exports.string.isRequired,
  finalFocusRef: o.exports.object.isRequired
};
const $r = {
  "c-layout": "_c-layout_1n02n_1",
  "c-modal": "_c-modal_1n02n_1",
  "c-modal-container": "_c-modal-container_1n02n_33",
  "c-close-button": "_c-close-button_1n02n_38"
}, ki = ({
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
    onCloseModal: p,
    refModal: f
  } = _e(Bn), u = (v) => {
    n && typeof n == "function" && n(v), p();
  };
  return /* @__PURE__ */ C("div", {
    ref: f,
    role: "dialog",
    tabIndex: "-1",
    hidden: !s,
    "aria-label": e,
    "aria-modal": "true",
    "data-type": a,
    onKeyDown: (v) => {
      i && typeof i == "function" && i(v), l(v);
    },
    className: `${$r["c-modal"]} animate__animated animate__fadeIn animate__faster u-px-3 u-py-3 class-video-interpreter-ui-modal ${t != null ? t : ""}`,
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
      onClick: u
    })]
  });
};
ki.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  label: o.exports.string.isRequired,
  onClick: o.exports.func,
  onKeyDown: o.exports.func,
  __TYPE: de("ModalContent")
};
ki.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const Mi = ({
  addClass: e,
  onClick: t
}) => {
  const {
    isOpen: r,
    onCloseModal: n
  } = _e(Bn), i = (a) => {
    t && typeof t == "function" && t(a), n();
  };
  return /* @__PURE__ */ m("div", {
    className: `${$r["c-layout"]} ${e != null ? e : ""}`,
    onClick: i,
    hidden: !r
  });
};
Mi.propTypes = {
  addClass: o.exports.string,
  onClick: o.exports.func,
  __TYPE: de("ModalOverlay")
};
Mi.defaultProps = {
  __TYPE: "ModalOverlay"
};
const Lt = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, Yr = Ke(), Fi = ({
  children: e,
  addClass: t,
  keepWithinRange: r,
  defaultValue: n,
  min: i,
  max: a,
  step: c,
  onValue: s
}) => {
  const [l, p] = J(n || 0), f = () => {
    if (r && l > a)
      return p(a);
    p((y) => y + c);
  }, u = () => {
    if (r && l < i)
      return p(i);
    p((y) => y - c);
  }, d = (y) => p(y), v = (y) => r && l === y;
  return U(() => {
    s && s(l);
  }, [l, s]), /* @__PURE__ */ m(Yr.Provider, {
    value: {
      counter: l,
      min: i || Number.MIN_SAFE_INTEGER,
      max: a || Number.MAX_SAFE_INTEGER,
      validate: v,
      onChangeValue: d,
      onIncrementValue: f,
      onDecrementValue: u
    },
    children: /* @__PURE__ */ m("div", {
      className: `${Lt["c-number-input"]} ${t != null ? t : ""}`,
      children: Le(e, ["NumberInputField", "NumberInputStepper"])
    })
  });
};
Fi.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  addClass: o.exports.string,
  max: o.exports.number,
  min: o.exports.number,
  defaultValue: o.exports.number,
  step: o.exports.number,
  onValue: o.exports.func,
  keepWithinRange: o.exports.bool
};
Fi.defaultProps = {
  step: 1
};
const ji = ct(({
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
    onIncrementValue: p,
    onDecrementValue: f,
    min: u,
    max: d
  } = _e(Yr), v = le(() => e || dt("c-number-input-"), [e]), y = Object.freeze({
    UP: 38,
    DOWN: 40,
    END: 35,
    HOME: 36
  }), b = ({
    target: E
  }) => {
    if (!isNaN(E.value) && E.value)
      return l(parseInt(E.value));
    l(0);
  }, _ = (E) => {
    switch (E.keyCode || E.which) {
      case y.UP:
        p();
        break;
      case y.DOWN:
        f();
        break;
      case y.END:
        l(d);
        break;
      case y.HOME:
        l(u);
        break;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: v,
    className: `${Lt["c-number-input__label"]} ${i != null ? i : ""}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!a && "u-sr-only"}`,
      children: [" ", r, " "]
    }), /* @__PURE__ */ m("input", {
      id: v,
      ref: c,
      type: "text",
      name: t,
      role: "spinbutton",
      inputMode: "decimal",
      pattern: n,
      autoCorrect: "off",
      autoComplete: "off",
      className: Lt["c-number-input__input"],
      onChange: b,
      onKeyDown: _,
      ...s || s === 0 ? {
        value: s,
        "aria-valuemax": d,
        "aria-valuemin": u,
        "aria-valuenow": s,
        "aria-valuetext": `${s}`
      } : {
        value: ""
      }
    })]
  });
});
ji.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
ji.propTypes = {
  id: o.exports.string,
  name: o.exports.string,
  label: o.exports.string,
  pattern: o.exports.string,
  addClass: o.exports.string,
  isLabelVisible: o.exports.bool,
  __TYPE: de("NumberInputField")
};
const Li = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${Lt["c-number-input__stepper"]} ${t != null ? t : ""}`,
  children: Le(e, ["NumberIncrementStepper", "NumberDecrementStepper"])
});
Li.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: de("NumberInputStepper")
};
Li.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Bi = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onDecrementValue: n,
    validate: i,
    min: a
  } = _e(Yr);
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
Bi.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: de("NumberDecrementStepper"),
  label: o.exports.string
};
Bi.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Vi = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onIncrementValue: n,
    validate: i,
    max: a
  } = _e(Yr);
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
Vi.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: de("NumberIncrementStepper"),
  label: o.exports.string
};
Vi.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const cl = (e) => {
  const {
    boundaryCount: t = 1,
    count: r = 1,
    defaultPage: n = 1,
    disabled: i = !1,
    hideNextButton: a = !1,
    hidePrevButton: c = !1,
    onChange: s,
    showFirstButton: l = !1,
    showLastButton: p = !1,
    siblingCount: f = 1,
    ...u
  } = e, [d, v] = J(n), y = (x, S) => {
    v(S), s && s(x, S);
  }, b = (x, S) => {
    const I = S - x + 1;
    return Array.from({ length: I }, (L, M) => x + M);
  }, _ = b(1, Math.min(t, r)), E = b(Math.max(r - t + 1, t + 1), r), P = Math.max(
    Math.min(
      d - f,
      r - t - f * 2 - 1
    ),
    t + 2
  ), $ = Math.min(
    Math.max(
      d + f,
      t + f * 2 + 2
    ),
    E.length > 0 ? E[0] - 2 : r - 1
  ), D = [
    ...l ? ["first"] : [],
    ...c ? [] : ["previous"],
    ..._,
    ...P > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : [],
    ...b(P, $),
    ...$ < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : [],
    ...E,
    ...a ? [] : ["next"],
    ...p ? ["last"] : []
  ], g = (x) => {
    switch (x) {
      case "first":
        return 1;
      case "previous":
        return d - 1;
      case "next":
        return d + 1;
      case "last":
        return r;
      default:
        return null;
    }
  };
  return {
    items: D.map((x) => typeof x == "number" ? {
      onClick: (S) => {
        y(S, x);
      },
      type: "page",
      page: x,
      selected: x === d,
      disabled: i,
      "aria-current": x === d ? !0 : void 0
    } : {
      onClick: (S) => {
        y(S, g(x));
      },
      type: x,
      page: g(x),
      selected: !1,
      disabled: i || x.indexOf("ellipsis") === -1 && (x === "next" || x === "last" ? d >= r : d <= 1)
    }),
    ...u
  };
}, ar = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, ll = Object.freeze({
  first: "primera",
  last: "\xFAltima",
  previous: "anterior",
  next: "siguiente"
}), ul = (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}p\xE1gina ${t}` : `Ir a la ${ll[e]} p\xE1gina`, Yi = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: r,
  ...n
}) => {
  const {
    items: i
  } = cl({
    ...n
  });
  return /* @__PURE__ */ m("nav", {
    className: `${r != null ? r : ""} ${ar["c-pagination"]}`,
    children: /* @__PURE__ */ m("ul", {
      className: ar["c-pagination__ul"],
      children: i.map((a, c) => /* @__PURE__ */ m("li", {
        children: e({
          ...a,
          "aria-label": t(a.type, a.page, a.selected)
        })
      }, `pagination-item-${c}`))
    })
  });
};
Yi.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ m(Vn, {
    ...e
  }),
  getItemAriaLabel: ul
};
Yi.propTypes = {
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
const Vn = ({
  page: e,
  type: t,
  addClass: r,
  disabled: n,
  element: i,
  icons: a,
  selected: c,
  ...s
}) => {
  const p = {
    previous: a.previous || "navigate_before",
    next: a.next || "navigate_next",
    last: a.last || "last_page",
    first: a.first || "first_page"
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? /* @__PURE__ */ m("div", {
    className: ar["c-pagination-item__ellipsis"],
    children: "..."
  }) : Ee(i, {
    disabled: n,
    className: `${ar["c-pagination-item"]} ${r != null ? r : ""} ${c ? ar["c-pagination-item--selected"] : ""}`,
    ...i.props,
    ...s
  }, [
    t === "page" && e,
    p ? /* @__PURE__ */ m(De, {
      name: p
    }, t) : null
  ]);
};
Vn.propTypes = {
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
Vn.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next",
    last: "last_page",
    first: "first_page"
  },
  element: /* @__PURE__ */ m("button", {})
};
const Ft = {
  "c-panel": "_c-panel_1v5hj_1",
  "c-section": "_c-section_1v5hj_9",
  "c-navigation": "_c-navigation_1v5hj_15",
  "c-navigation__item": "_c-navigation__item_1v5hj_29",
  "c-navigation__section": "_c-navigation__section_1v5hj_33",
  "c-navigation__button": "_c-navigation__button_1v5hj_51"
}, qr = Ke(), fl = ({
  children: e,
  defaultIndex: t,
  addClass: r
}) => {
  const [n, i] = J(1), a = {
    index: [],
    counter: 0
  }, c = (p) => i(p), s = (p) => n === p;
  U(() => {
    t !== void 0 && i(t);
  }, [t]);
  const l = ye.map(e, (p) => Ye(p) ? p.props.__TYPE === "Section" ? (a.counter++, a.index.push(a.counter), Ee(p, {
    ...p.props,
    id: a.counter,
    "data-value": a.counter - 1
  })) : p : null);
  return /* @__PURE__ */ m(qr.Provider, {
    value: {
      validation: s,
      onToggle: c,
      listId: a.index,
      currentSection: n
    },
    children: /* @__PURE__ */ m("div", {
      className: `${Ft["c-panel"]} ${r != null ? r : ""} class-video-interpreter-ui-panel`,
      children: l
    })
  });
};
fl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node, o.exports.string]),
  defaultIndex: o.exports.number,
  addClass: o.exports.string
};
const qi = ct(({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...i
}, a) => {
  const {
    validation: c
  } = _e(qr), s = c(t);
  return /* @__PURE__ */ C("section", {
    ref: a,
    role: "tabpanel",
    hidden: !s,
    "data-type": n,
    "aria-hidden": !s,
    "aria-labelledby": `section-${t}`,
    className: `${Ft["c-section"]} ${r != null ? r : ""}`,
    ...i,
    children: [/* @__PURE__ */ C("span", {
      id: `section-${t}`,
      className: "u-sr-only",
      children: ["Secci\xF3n ", t]
    }), e]
  });
});
qi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  addClass: o.exports.string,
  __TYPE: de("Section")
};
qi.defaultProps = {
  __TYPE: "Section"
};
const pl = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), dl = (e, t, r) => e === "section" ? `${r ? "" : "Ir a la "}secci\xF3n ${t}` : `Ir a la ${pl[e]} secci\xF3n`, zi = ({
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
    validation: p,
    onToggle: f,
    listId: u,
    currentSection: d
  } = _e(qr), v = H([]), y = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), b = Object.freeze({
    previous: d - 1,
    next: d + 1
  }), _ = {
    previous: n.previous || "navigate_before",
    next: n.next || "navigate_next"
  }, E = [
    ...t ? ["previous"] : [],
    ...u || [],
    ...r ? ["next"] : []
  ], P = (w) => !v.current.includes(w) && w ? v.current = [...v.current, w] : v.current, $ = (w) => {
    const x = v.current[0], S = v.current[v.current.length - 1];
    if ((w.keyCode || w.which) === y.LEFT)
      if (w.target === x)
        S.focus();
      else {
        const I = v.current.indexOf(w.target) - 1;
        v.current[I].focus();
      }
    else if ((w.keyCode || w.which) === y.RIGHT)
      if (w.target === S)
        x.focus();
      else {
        const I = v.current.indexOf(w.target) + 1;
        v.current[I].focus();
      }
  }, D = (w) => {
    f(w), c !== void 0 && c(w, u.length);
  }, g = E.map((w) => typeof w == "number" ? {
    onClick: (x) => {
      D(w);
    },
    type: "section",
    section: w,
    selected: p(w),
    ref: P,
    onKeyDown: $
  } : {
    onClick: () => {
      D(b[w]);
    },
    type: w,
    section: b[w],
    selected: !1,
    disabled: w === "next" ? d >= u.length : d <= 1
  });
  return U(() => {
    c !== void 0 && c(d, u.length);
  }, []), /* @__PURE__ */ C(at, {
    children: [/* @__PURE__ */ m("h2", {
      id: "section-list-navigation",
      className: "u-sr-only",
      children: i
    }), /* @__PURE__ */ m("ul", {
      role: "tablist",
      "aria-labelledby": "section-list-navigation",
      "aria-orientation": a,
      className: `${Ft["c-navigation"]} ${s != null ? s : ""}`,
      children: e ? e(g) : g.map(({
        section: w,
        type: x,
        selected: S,
        ...I
      }, L) => /* @__PURE__ */ m("li", {
        role: "presentation",
        className: Ft["c-navigation__item"],
        children: x === "section" ? /* @__PURE__ */ m("button", {
          id: `navigation-section-tab-${w}`,
          role: "tab",
          tabIndex: `${S ? 0 : -1}`,
          "aria-selected": S,
          className: Ft["c-navigation__section"],
          "aria-label": l(x, w, S),
          ...I
        }) : /* @__PURE__ */ m("button", {
          type: "button",
          className: `${Ft["c-navigation__button"]}`,
          "aria-label": l(x, w, S),
          ...I,
          children: _[x] ? /* @__PURE__ */ m(De, {
            name: _[x]
          }, x) : null
        })
      }, `navigation-section-item-${L}`))
    })]
  });
};
zi.propTypes = {
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
zi.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next"
  },
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: dl
};
const vl = ({
  children: e,
  section: t,
  onClick: r
}) => {
  const {
    onToggle: n
  } = _e(qr), i = (a) => {
    n(t), r && r(a);
  };
  return ye.map(e, (a) => Ee(a, {
    ...a.props,
    onClick: i
  }));
};
vl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]).isRequired,
  section: o.exports.number.isRequired,
  onClick: o.exports.func
};
const hl = {
  "c-paper": "_c-paper_1sbf6_1"
}, ml = ({
  children: e,
  color: t,
  addClass: r,
  ...n
}) => {
  const i = H(null);
  return zo(() => {
    t && i.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ m("div", {
    ref: i,
    className: `${hl["c-paper"]} ${r != null ? r : ""}`,
    ...n,
    children: e
  });
};
ml.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  color: o.exports.string
};
const bl = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, gl = (e) => {
  document.body.append(e);
}, yl = (e) => {
  const t = H(null);
  U(() => {
    const n = document.querySelector(`#${e}`), i = n || bl(e);
    return n || gl(i), i.append(t.current), () => {
      t.current.remove(), i.childElementCount || i.remove();
    };
  }, [e]);
  function r() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return r();
}, Ut = ({
  children: e,
  id: t
}) => {
  const r = yl(t);
  return Uo(e, r);
};
Ut.propTypes = {
  children: o.exports.any,
  id: o.exports.string.isRequired
};
const _l = "_row_1adiy_1", xl = {
  row: _l
}, wl = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ m("div", {
  ref: r,
  className: `${xl.row} ${e != null ? e : ""}`,
  ...t
}));
wl.propTypes = {
  addClass: o.exports.string
};
const dn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, Wi = ct(({
  children: e,
  id: t,
  placeholder: r,
  label: n,
  icon: i,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  onChoise: p
}, f) => {
  const u = le(() => t || dt("c-select-"), [t]), d = ({
    target: v
  }) => {
    p && p({
      id: u,
      value: v.value
    });
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: u,
    ...a && {
      className: `${a}`
    },
    children: [/* @__PURE__ */ C("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", n, " "]
    }), /* @__PURE__ */ C("div", {
      className: dn["c-select-wrapper"],
      children: [/* @__PURE__ */ C("select", {
        id: u,
        ref: f,
        name: u,
        defaultValue: "default",
        className: dn["c-select"],
        onChange: d,
        disabled: s,
        required: l,
        children: [/* @__PURE__ */ m("option", {
          value: "default",
          disabled: !0,
          children: r
        }), Le(e, ["option", "optgroup"])]
      }), /* @__PURE__ */ m(De, {
        name: `${i != null ? i : "arrow_drop_down"}`,
        addClass: dn["c-select__icon"]
      })]
    })]
  });
});
Wi.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Wi.propTypes = {
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
  __TYPE: de("Select")
};
const El = ({
  children: e,
  onAllSelect: t
}) => {
  const [r, n] = J([]), i = (c) => n([...r.filter((s) => s.id !== c.id), {
    ...c
  }]);
  return U(() => {
    t && t(r);
  }, [r, t]), ye.map(e, (c) => {
    var s;
    return Ye(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? Ee(c, {
      ...c.props,
      onChoise: i
    }) : c : null;
  });
};
El.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllSelect: o.exports.func
};
const vn = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, $o = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Ui = ct(({
  id: e,
  name: t,
  size: r,
  value: n,
  label: i,
  addClass: a,
  isDisabled: c,
  defaultChecked: s,
  isLabelVisible: l,
  onChange: p
}, f) => {
  const [u, d] = J(!1), v = le(() => e || dt("c-input-"), [e]), y = ({
    target: _
  }) => {
    if (d(_.checked), !!p) {
      if (_.checked) {
        p({
          id: _.id,
          value: _.value
        });
        return;
      }
      p({
        id: _.id,
        value: ""
      });
    }
  }, b = (_) => {
    ((_.keyCode || _.which) === $o.SPACE || (_.keyCode || _.which) === $o.ENTER) && d((E) => (p && p(E ? {
      id: v,
      value: ""
    } : {
      id: v,
      value: `${n}`
    }), !E));
  };
  return U(() => (s && d(!!s), () => {
    d(!1);
  }), [s]), /* @__PURE__ */ C("label", {
    htmlFor: v,
    className: `${vn["c-label"]} ${vn[`is-${r}`]}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ m("input", {
      id: v,
      ref: f,
      role: "switch",
      type: "checkbox",
      name: t,
      value: n,
      checked: u,
      "aria-disabled": c,
      className: `${vn["c-switch"]} ${a != null ? a : ""}`,
      onChange: y,
      onKeyDown: b,
      ...c && {
        disabled: !0
      }
    })]
  });
});
Ui.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Ui.propTypes = {
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
const Yn = Ke(), Tl = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  ...n
}) => {
  const [i, a] = J(0), c = (l) => a(l), s = (l) => i === l;
  return U(() => {
    t !== void 0 && a(t);
  }, [t]), /* @__PURE__ */ m(Yn.Provider, {
    value: {
      validation: s,
      onToggle: c
    },
    children: /* @__PURE__ */ m("div", {
      ...r && {
        className: `${r}`
      },
      ...n,
      children: Le(e, ["TabList", "TabPanels"])
    })
  });
};
Tl.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  defaultIndex: o.exports.number,
  addClass: o.exports.string
};
const pr = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, Gi = ({
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
  const p = H(), {
    validation: f,
    onToggle: u
  } = _e(Yn), d = f(t);
  return U(() => (p.current && a(p.current), () => {
    p.current = null;
  }), [p]), /* @__PURE__ */ C("button", {
    id: `tab-${t}`,
    role: "tab",
    ref: p,
    "data-type": s,
    tabIndex: `${d ? 0 : -1}`,
    "aria-controls": `panel-${t}`,
    "aria-selected": d,
    onKeyDown: c,
    onClick: () => u(t),
    className: `${pr["c-tab__button"]} u-flex ${n != null ? n : ""} ${d && r && r}`,
    ...l,
    children: [e, i && i(d)]
  });
};
Gi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  selected: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  addNewRef: o.exports.func,
  onNavigation: o.exports.func,
  __TYPE: de("Tab")
};
Gi.defaultProps = {
  __TYPE: "Tab"
};
const Hi = ({
  children: e,
  addClass: t,
  label: r,
  orientation: n,
  __TYPE: i,
  ...a
}) => {
  const c = H([]), s = (u) => c.current = [...c.current, u], l = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), p = (u) => {
    const d = c.current[0], v = c.current[c.current.length - 1];
    if ((u.keyCode || u.which) === l.LEFT)
      if (u.target === d)
        v.focus();
      else {
        const y = c.current.indexOf(u.target) - 1;
        c.current[y].focus();
      }
    else if ((u.keyCode || u.which) === l.RIGHT)
      if (u.target === v)
        d.focus();
      else {
        const y = c.current.indexOf(u.target) + 1;
        c.current[y].focus();
      }
  }, f = ye.map(e, (u, d) => Ye(u) ? Ee(u, {
    ...u.props,
    id: d,
    addNewRef: s,
    onNavigation: p
  }) : null);
  return /* @__PURE__ */ m("div", {
    role: "tablist",
    "data-type": i,
    "aria-label": r,
    "aria-orientation": n,
    className: `${pr["c-tab__list"]} ${t != null ? t : ""}`,
    ...a,
    children: Le(f, ["Tab"])
  });
};
Hi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  label: o.exports.string,
  orientation: o.exports.string,
  __TYPE: de("TabList")
};
Hi.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const Ki = ({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...i
}) => {
  const {
    validation: a
  } = _e(Yn), c = a(t);
  return /* @__PURE__ */ m("div", {
    id: `panel-${t}`,
    role: "tabpanel",
    tabIndex: 0,
    "data-type": n,
    "aria-hidden": !c,
    hidden: !c,
    "aria-labelledby": `tab-${t}`,
    className: `${c ? pr["c-tab__panel--active"] : pr["c-tab__panel"]} ${r != null ? r : ""}`,
    ...i,
    children: e
  });
};
Ki.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  addClass: o.exports.string,
  __TYPE: de("TabPanel")
};
Ki.defaultProps = {
  __TYPE: "TabPanel"
};
const Xi = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = ye.map(e, (a, c) => Ye(a) ? Ee(a, {
    ...a.props,
    id: c
  }) : null);
  return /* @__PURE__ */ m("div", {
    className: `${pr["c-tab__panels"]} ${t != null ? t : ""}`,
    "data-type": r,
    ...n,
    children: Le(i, ["TabPanel"])
  });
};
Xi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: de("TabPanels")
};
Xi.defaultProps = {
  __TYPE: "TabPanels"
};
const hn = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, Ji = ct(({
  id: e,
  value: t,
  resize: r,
  placeholder: n,
  label: i,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  onValue: p,
  ...f
}, u) => {
  const d = le(() => e || dt("c-input-"), [e]), v = ({
    target: y
  }) => {
    p && p({
      id: d,
      value: y.value
    });
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: d,
    className: `${hn["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ m("textarea", {
      id: d,
      ref: u,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: v,
      className: `${hn["c-textarea"]} ${hn[`c-textarea--${r}`]}`,
      ...f,
      children: t
    })]
  });
});
Ji.defaultProps = {
  resize: "vertical",
  placeholder: "Here is a sample placeholder"
};
Ji.propTypes = {
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
const Ol = Wo(({
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
    if (Object.entries(t).length !== 0)
      return r(t), () => {
        t = {};
      };
  }, [t]), e;
});
Ol.propTypes = {
  children: o.exports.oneOfType([o.exports.array, o.exports.element]),
  theme: o.exports.object.isRequired
};
var Do = function(t) {
  return t.reduce(function(r, n) {
    var i = n[0], a = n[1];
    return r[i] = a, r;
  }, {});
}, Co = typeof window < "u" && window.document && window.document.createElement ? $t.useLayoutEffect : $t.useEffect, Fe = "top", Ge = "bottom", He = "right", je = "left", zr = "auto", yr = [Fe, Ge, He, je], Bt = "start", dr = "end", Sl = "clippingParents", Zi = "viewport", tr = "popper", Rl = "reference", Ao = /* @__PURE__ */ yr.reduce(function(e, t) {
  return e.concat([t + "-" + Bt, t + "-" + dr]);
}, []), Qi = /* @__PURE__ */ [].concat(yr, [zr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Bt, t + "-" + dr]);
}, []), Pl = "beforeRead", $l = "read", Dl = "afterRead", Cl = "beforeMain", Al = "main", Nl = "afterMain", Il = "beforeWrite", kl = "write", Ml = "afterWrite", Sn = [Pl, $l, Dl, Cl, Al, Nl, Il, kl, Ml];
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
function At(e) {
  var t = Xe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ve(e) {
  var t = Xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function qn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Fl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !Ve(a) || !st(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(c) {
      var s = i[c];
      s === !1 ? a.removeAttribute(c) : a.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function jl(e) {
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
      var i = t.elements[n], a = t.attributes[n] || {}, c = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = c.reduce(function(l, p) {
        return l[p] = "", l;
      }, {});
      !Ve(i) || !st(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Ll = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Fl,
  effect: jl,
  requires: ["computeStyles"]
};
function tt(e) {
  return e.split("-")[0];
}
var Ct = Math.max, Mr = Math.min, Vt = Math.round;
function Rn() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ea() {
  return !/^((?!chrome|android).)*safari/i.test(Rn());
}
function Yt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && Ve(e) && (i = e.offsetWidth > 0 && Vt(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Vt(n.height) / e.offsetHeight || 1);
  var c = At(e) ? Xe(e) : window, s = c.visualViewport, l = !ea() && r, p = (n.left + (l && s ? s.offsetLeft : 0)) / i, f = (n.top + (l && s ? s.offsetTop : 0)) / a, u = n.width / i, d = n.height / a;
  return {
    width: u,
    height: d,
    top: f,
    right: p + u,
    bottom: f + d,
    left: p,
    x: p,
    y: f
  };
}
function zn(e) {
  var t = Yt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function ta(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && qn(r)) {
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
function Bl(e) {
  return ["table", "td", "th"].indexOf(st(e)) >= 0;
}
function yt(e) {
  return ((At(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Wr(e) {
  return st(e) === "html" ? e : e.assignedSlot || e.parentNode || (qn(e) ? e.host : null) || yt(e);
}
function No(e) {
  return !Ve(e) || nt(e).position === "fixed" ? null : e.offsetParent;
}
function Vl(e) {
  var t = /firefox/i.test(Rn()), r = /Trident/i.test(Rn());
  if (r && Ve(e)) {
    var n = nt(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Wr(e);
  for (qn(i) && (i = i.host); Ve(i) && ["html", "body"].indexOf(st(i)) < 0; ) {
    var a = nt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function _r(e) {
  for (var t = Xe(e), r = No(e); r && Bl(r) && nt(r).position === "static"; )
    r = No(r);
  return r && (st(r) === "html" || st(r) === "body" && nt(r).position === "static") ? t : r || Vl(e) || t;
}
function Wn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function sr(e, t, r) {
  return Ct(e, Mr(t, r));
}
function Yl(e, t, r) {
  var n = sr(e, t, r);
  return n > r ? r : n;
}
function ra() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function na(e) {
  return Object.assign({}, ra(), e);
}
function oa(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var ql = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, na(typeof t != "number" ? t : oa(t, yr));
};
function zl(e) {
  var t, r = e.state, n = e.name, i = e.options, a = r.elements.arrow, c = r.modifiersData.popperOffsets, s = tt(r.placement), l = Wn(s), p = [je, He].indexOf(s) >= 0, f = p ? "height" : "width";
  if (!(!a || !c)) {
    var u = ql(i.padding, r), d = zn(a), v = l === "y" ? Fe : je, y = l === "y" ? Ge : He, b = r.rects.reference[f] + r.rects.reference[l] - c[l] - r.rects.popper[f], _ = c[l] - r.rects.reference[l], E = _r(a), P = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, $ = b / 2 - _ / 2, D = u[v], g = P - d[f] - u[y], w = P / 2 - d[f] / 2 + $, x = sr(D, w, g), S = l;
    r.modifiersData[n] = (t = {}, t[S] = x, t.centerOffset = x - w, t);
  }
}
function Wl(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  if (i != null && !(typeof i == "string" && (i = t.elements.popper.querySelector(i), !i))) {
    if (process.env.NODE_ENV !== "production" && (Ve(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ta(t.elements.popper, i)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = i;
  }
}
const Ul = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: zl,
  effect: Wl,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function qt(e) {
  return e.split("-")[1];
}
var Gl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Hl(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: Vt(t * i) / i || 0,
    y: Vt(r * i) / i || 0
  };
}
function Io(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, c = e.offsets, s = e.position, l = e.gpuAcceleration, p = e.adaptive, f = e.roundOffsets, u = e.isFixed, d = c.x, v = d === void 0 ? 0 : d, y = c.y, b = y === void 0 ? 0 : y, _ = typeof f == "function" ? f({
    x: v,
    y: b
  }) : {
    x: v,
    y: b
  };
  v = _.x, b = _.y;
  var E = c.hasOwnProperty("x"), P = c.hasOwnProperty("y"), $ = je, D = Fe, g = window;
  if (p) {
    var w = _r(r), x = "clientHeight", S = "clientWidth";
    if (w === Xe(r) && (w = yt(r), nt(w).position !== "static" && s === "absolute" && (x = "scrollHeight", S = "scrollWidth")), w = w, i === Fe || (i === je || i === He) && a === dr) {
      D = Ge;
      var I = u && w === g && g.visualViewport ? g.visualViewport.height : w[x];
      b -= I - n.height, b *= l ? 1 : -1;
    }
    if (i === je || (i === Fe || i === Ge) && a === dr) {
      $ = He;
      var L = u && w === g && g.visualViewport ? g.visualViewport.width : w[S];
      v -= L - n.width, v *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, p && Gl), Z = f === !0 ? Hl({
    x: v,
    y: b
  }) : {
    x: v,
    y: b
  };
  if (v = Z.x, b = Z.y, l) {
    var K;
    return Object.assign({}, M, (K = {}, K[D] = P ? "0" : "", K[$] = E ? "0" : "", K.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + b + "px)" : "translate3d(" + v + "px, " + b + "px, 0)", K));
  }
  return Object.assign({}, M, (t = {}, t[D] = P ? b + "px" : "", t[$] = E ? v + "px" : "", t.transform = "", t));
}
function Kl(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, c = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var p = nt(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(u) {
      return p.indexOf(u) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var f = {
    placement: tt(t.placement),
    variation: qt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Io(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Io(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Xl = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Kl,
  data: {}
};
var Rr = {
  passive: !0
};
function Jl(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, c = n.resize, s = c === void 0 ? !0 : c, l = Xe(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && p.forEach(function(f) {
    f.addEventListener("scroll", r.update, Rr);
  }), s && l.addEventListener("resize", r.update, Rr), function() {
    a && p.forEach(function(f) {
      f.removeEventListener("scroll", r.update, Rr);
    }), s && l.removeEventListener("resize", r.update, Rr);
  };
}
const Zl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jl,
  data: {}
};
var Ql = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Dr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ql[t];
  });
}
var eu = {
  start: "end",
  end: "start"
};
function ko(e) {
  return e.replace(/start|end/g, function(t) {
    return eu[t];
  });
}
function Un(e) {
  var t = Xe(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Gn(e) {
  return Yt(yt(e)).left + Un(e).scrollLeft;
}
function tu(e, t) {
  var r = Xe(e), n = yt(e), i = r.visualViewport, a = n.clientWidth, c = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, c = i.height;
    var p = ea();
    (p || !p && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: s + Gn(e),
    y: l
  };
}
function ru(e) {
  var t, r = yt(e), n = Un(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ct(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), c = Ct(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Gn(e), l = -n.scrollTop;
  return nt(i || r).direction === "rtl" && (s += Ct(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: c,
    x: s,
    y: l
  };
}
function Hn(e) {
  var t = nt(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function ia(e) {
  return ["html", "body", "#document"].indexOf(st(e)) >= 0 ? e.ownerDocument.body : Ve(e) && Hn(e) ? e : ia(Wr(e));
}
function cr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ia(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xe(n), c = i ? [a].concat(a.visualViewport || [], Hn(n) ? n : []) : n, s = t.concat(c);
  return i ? s : s.concat(cr(Wr(c)));
}
function Pn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function nu(e, t) {
  var r = Yt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Mo(e, t, r) {
  return t === Zi ? Pn(tu(e, r)) : At(t) ? nu(t, r) : Pn(ru(yt(e)));
}
function ou(e) {
  var t = cr(Wr(e)), r = ["absolute", "fixed"].indexOf(nt(e).position) >= 0, n = r && Ve(e) ? _r(e) : e;
  return At(n) ? t.filter(function(i) {
    return At(i) && ta(i, n) && st(i) !== "body";
  }) : [];
}
function iu(e, t, r, n) {
  var i = t === "clippingParents" ? ou(e) : [].concat(t), a = [].concat(i, [r]), c = a[0], s = a.reduce(function(l, p) {
    var f = Mo(e, p, n);
    return l.top = Ct(f.top, l.top), l.right = Mr(f.right, l.right), l.bottom = Mr(f.bottom, l.bottom), l.left = Ct(f.left, l.left), l;
  }, Mo(e, c, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function aa(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? tt(n) : null, a = n ? qt(n) : null, c = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case Fe:
      l = {
        x: c,
        y: t.y - r.height
      };
      break;
    case Ge:
      l = {
        x: c,
        y: t.y + t.height
      };
      break;
    case He:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case je:
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
  var p = i ? Wn(i) : null;
  if (p != null) {
    var f = p === "y" ? "height" : "width";
    switch (a) {
      case Bt:
        l[p] = l[p] - (t[f] / 2 - r[f] / 2);
        break;
      case dr:
        l[p] = l[p] + (t[f] / 2 - r[f] / 2);
        break;
    }
  }
  return l;
}
function vr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, c = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? Sl : s, p = r.rootBoundary, f = p === void 0 ? Zi : p, u = r.elementContext, d = u === void 0 ? tr : u, v = r.altBoundary, y = v === void 0 ? !1 : v, b = r.padding, _ = b === void 0 ? 0 : b, E = na(typeof _ != "number" ? _ : oa(_, yr)), P = d === tr ? Rl : tr, $ = e.rects.popper, D = e.elements[y ? P : d], g = iu(At(D) ? D : D.contextElement || yt(e.elements.popper), l, f, c), w = Yt(e.elements.reference), x = aa({
    reference: w,
    element: $,
    strategy: "absolute",
    placement: i
  }), S = Pn(Object.assign({}, $, x)), I = d === tr ? S : w, L = {
    top: g.top - I.top + E.top,
    bottom: I.bottom - g.bottom + E.bottom,
    left: g.left - I.left + E.left,
    right: I.right - g.right + E.right
  }, M = e.modifiersData.offset;
  if (d === tr && M) {
    var Z = M[i];
    Object.keys(L).forEach(function(K) {
      var re = [He, Ge].indexOf(K) >= 0 ? 1 : -1, fe = [Fe, Ge].indexOf(K) >= 0 ? "y" : "x";
      L[K] += Z[fe] * re;
    });
  }
  return L;
}
function au(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, c = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, p = l === void 0 ? Qi : l, f = qt(n), u = f ? s ? Ao : Ao.filter(function(y) {
    return qt(y) === f;
  }) : yr, d = u.filter(function(y) {
    return p.indexOf(y) >= 0;
  });
  d.length === 0 && (d = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var v = d.reduce(function(y, b) {
    return y[b] = vr(e, {
      placement: b,
      boundary: i,
      rootBoundary: a,
      padding: c
    })[tt(b)], y;
  }, {});
  return Object.keys(v).sort(function(y, b) {
    return v[y] - v[b];
  });
}
function su(e) {
  if (tt(e) === zr)
    return [];
  var t = Dr(e);
  return [ko(e), t, ko(t)];
}
function cu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !0 : c, l = r.fallbackPlacements, p = r.padding, f = r.boundary, u = r.rootBoundary, d = r.altBoundary, v = r.flipVariations, y = v === void 0 ? !0 : v, b = r.allowedAutoPlacements, _ = t.options.placement, E = tt(_), P = E === _, $ = l || (P || !y ? [Dr(_)] : su(_)), D = [_].concat($).reduce(function(j, W) {
      return j.concat(tt(W) === zr ? au(t, {
        placement: W,
        boundary: f,
        rootBoundary: u,
        padding: p,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : W);
    }, []), g = t.rects.reference, w = t.rects.popper, x = /* @__PURE__ */ new Map(), S = !0, I = D[0], L = 0; L < D.length; L++) {
      var M = D[L], Z = tt(M), K = qt(M) === Bt, re = [Fe, Ge].indexOf(Z) >= 0, fe = re ? "width" : "height", ie = vr(t, {
        placement: M,
        boundary: f,
        rootBoundary: u,
        altBoundary: d,
        padding: p
      }), ee = re ? K ? He : je : K ? Ge : Fe;
      g[fe] > w[fe] && (ee = Dr(ee));
      var xe = Dr(ee), he = [];
      if (a && he.push(ie[Z] <= 0), s && he.push(ie[ee] <= 0, ie[xe] <= 0), he.every(function(j) {
        return j;
      })) {
        I = M, S = !1;
        break;
      }
      x.set(M, he);
    }
    if (S)
      for (var O = y ? 3 : 1, N = function(W) {
        var F = D.find(function(q) {
          var z = x.get(q);
          if (z)
            return z.slice(0, W).every(function(X) {
              return X;
            });
        });
        if (F)
          return I = F, "break";
      }, B = O; B > 0; B--) {
        var V = N(B);
        if (V === "break")
          break;
      }
    t.placement !== I && (t.modifiersData[n]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const lu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: cu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Fo(e, t, r) {
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
function jo(e) {
  return [Fe, He, Ge, je].some(function(t) {
    return e[t] >= 0;
  });
}
function uu(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, c = vr(t, {
    elementContext: "reference"
  }), s = vr(t, {
    altBoundary: !0
  }), l = Fo(c, n), p = Fo(s, i, a), f = jo(l), u = jo(p);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: p,
    isReferenceHidden: f,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": u
  });
}
const fu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: uu
};
function pu(e, t, r) {
  var n = tt(e), i = [je, Fe].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, c = a[0], s = a[1];
  return c = c || 0, s = (s || 0) * i, [je, He].indexOf(n) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function du(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, a = i === void 0 ? [0, 0] : i, c = Qi.reduce(function(f, u) {
    return f[u] = pu(u, t.rects, a), f;
  }, {}), s = c[t.placement], l = s.x, p = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += p), t.modifiersData[n] = c;
}
const vu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: du
};
function hu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = aa({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const mu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: hu,
  data: {}
};
function bu(e) {
  return e === "x" ? "y" : "x";
}
function gu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !1 : c, l = r.boundary, p = r.rootBoundary, f = r.altBoundary, u = r.padding, d = r.tether, v = d === void 0 ? !0 : d, y = r.tetherOffset, b = y === void 0 ? 0 : y, _ = vr(t, {
    boundary: l,
    rootBoundary: p,
    padding: u,
    altBoundary: f
  }), E = tt(t.placement), P = qt(t.placement), $ = !P, D = Wn(E), g = bu(D), w = t.modifiersData.popperOffsets, x = t.rects.reference, S = t.rects.popper, I = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, L = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = {
    x: 0,
    y: 0
  };
  if (!!w) {
    if (a) {
      var K, re = D === "y" ? Fe : je, fe = D === "y" ? Ge : He, ie = D === "y" ? "height" : "width", ee = w[D], xe = ee + _[re], he = ee - _[fe], O = v ? -S[ie] / 2 : 0, N = P === Bt ? x[ie] : S[ie], B = P === Bt ? -S[ie] : -x[ie], V = t.elements.arrow, j = v && V ? zn(V) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ra(), F = W[re], q = W[fe], z = sr(0, x[ie], j[ie]), X = $ ? x[ie] / 2 - O - z - F - L.mainAxis : N - z - F - L.mainAxis, Y = $ ? -x[ie] / 2 + O + z + q + L.mainAxis : B + z + q + L.mainAxis, A = t.elements.arrow && _r(t.elements.arrow), T = A ? D === "y" ? A.clientTop || 0 : A.clientLeft || 0 : 0, Q = (K = M == null ? void 0 : M[D]) != null ? K : 0, me = ee + X - Q - T, Te = ee + Y - Q, $e = sr(v ? Mr(xe, me) : xe, ee, v ? Ct(he, Te) : he);
      w[D] = $e, Z[D] = $e - ee;
    }
    if (s) {
      var ot, lt = D === "x" ? Fe : je, it = D === "x" ? Ge : He, Oe = w[g], Je = g === "y" ? "height" : "width", Ze = Oe + _[lt], _t = Oe - _[it], vt = [Fe, je].indexOf(E) !== -1, xt = (ot = M == null ? void 0 : M[g]) != null ? ot : 0, wt = vt ? Ze : Oe - x[Je] - S[Je] - xt + L.altAxis, Ae = vt ? Oe + x[Je] + S[Je] - xt - L.altAxis : _t, Qe = v && vt ? Yl(wt, Oe, Ae) : sr(v ? wt : Ze, Oe, v ? Ae : _t);
      w[g] = Qe, Z[g] = Qe - Oe;
    }
    t.modifiersData[n] = Z;
  }
}
const yu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: gu,
  requiresIfExists: ["offset"]
};
function _u(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function xu(e) {
  return e === Xe(e) || !Ve(e) ? Un(e) : _u(e);
}
function wu(e) {
  var t = e.getBoundingClientRect(), r = Vt(t.width) / e.offsetWidth || 1, n = Vt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Eu(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ve(t), i = Ve(t) && wu(t), a = yt(t), c = Yt(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((st(t) !== "body" || Hn(a)) && (s = xu(t)), Ve(t) ? (l = Yt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Gn(a))), {
    x: c.left + s.scrollLeft - l.x,
    y: c.top + s.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function Tu(e) {
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
function Ou(e) {
  var t = Tu(e);
  return Sn.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Su(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function mt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var Pt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ru = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Lo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Pu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Lo).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(mt(Pt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(mt(Pt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Sn.indexOf(t.phase) < 0 && console.error(mt(Pt, t.name, '"phase"', "either " + Sn.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(mt(Pt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(mt(Pt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(mt(Pt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(mt(Pt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Lo.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(mt(Ru, String(t.name), n, n));
      });
    });
  });
}
function $u(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function Du(e) {
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
var Bo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Cu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Vo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Yo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Au(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Vo : i;
  return function(s, l, p) {
    p === void 0 && (p = a);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Vo, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, u = [], d = !1, v = {
      state: f,
      setOptions: function(E) {
        var P = typeof E == "function" ? E(f.options) : E;
        b(), f.options = Object.assign({}, a, f.options, P), f.scrollParents = {
          reference: At(s) ? cr(s) : s.contextElement ? cr(s.contextElement) : [],
          popper: cr(l)
        };
        var $ = Ou(Du([].concat(n, f.options.modifiers)));
        if (f.orderedModifiers = $.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = $u([].concat($, f.options.modifiers), function(M) {
            var Z = M.name;
            return Z;
          });
          if (Pu(D), tt(f.options.placement) === zr) {
            var g = f.orderedModifiers.find(function(M) {
              var Z = M.name;
              return Z === "flip";
            });
            g || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var w = nt(l), x = w.marginTop, S = w.marginRight, I = w.marginBottom, L = w.marginLeft;
          [x, S, I, L].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return y(), v.update();
      },
      forceUpdate: function() {
        if (!d) {
          var E = f.elements, P = E.reference, $ = E.popper;
          if (!Yo(P, $)) {
            process.env.NODE_ENV !== "production" && console.error(Bo);
            return;
          }
          f.rects = {
            reference: Eu(P, _r($), f.options.strategy === "fixed"),
            popper: zn($)
          }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(M) {
            return f.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var D = 0, g = 0; g < f.orderedModifiers.length; g++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error(Cu);
              break;
            }
            if (f.reset === !0) {
              f.reset = !1, g = -1;
              continue;
            }
            var w = f.orderedModifiers[g], x = w.fn, S = w.options, I = S === void 0 ? {} : S, L = w.name;
            typeof x == "function" && (f = x({
              state: f,
              options: I,
              name: L,
              instance: v
            }) || f);
          }
        }
      },
      update: Su(function() {
        return new Promise(function(_) {
          v.forceUpdate(), _(f);
        });
      }),
      destroy: function() {
        b(), d = !0;
      }
    };
    if (!Yo(s, l))
      return process.env.NODE_ENV !== "production" && console.error(Bo), v;
    v.setOptions(p).then(function(_) {
      !d && p.onFirstUpdate && p.onFirstUpdate(_);
    });
    function y() {
      f.orderedModifiers.forEach(function(_) {
        var E = _.name, P = _.options, $ = P === void 0 ? {} : P, D = _.effect;
        if (typeof D == "function") {
          var g = D({
            state: f,
            name: E,
            instance: v,
            options: $
          }), w = function() {
          };
          u.push(g || w);
        }
      });
    }
    function b() {
      u.forEach(function(_) {
        return _();
      }), u = [];
    }
    return v;
  };
}
var Nu = [Zl, mu, Xl, Ll, vu, lu, yu, Ul, fu], Iu = /* @__PURE__ */ Au({
  defaultModifiers: Nu
}), ku = typeof Element < "u", Mu = typeof Map == "function", Fu = typeof Set == "function", ju = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (Mu && e instanceof Map && t instanceof Map) {
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
    if (Fu && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (ju && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (ku && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !Cr(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Lu = function(t, r) {
  try {
    return Cr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, Bu = [], Ur = function(t, r, n) {
  n === void 0 && (n = {});
  var i = $t.useRef(null), a = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || Bu
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
  }), s = c[0], l = c[1], p = $t.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(v) {
        var y = v.state, b = Object.keys(y.elements);
        ma.flushSync(function() {
          l({
            styles: Do(b.map(function(_) {
              return [_, y.styles[_] || {}];
            })),
            attributes: Do(b.map(function(_) {
              return [_, y.attributes[_]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), f = $t.useMemo(function() {
    var d = {
      onFirstUpdate: a.onFirstUpdate,
      placement: a.placement,
      strategy: a.strategy,
      modifiers: [].concat(a.modifiers, [p, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Lu(i.current, d) ? i.current || d : (i.current = d, d);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, p]), u = $t.useRef();
  return Co(function() {
    u.current && u.current.setOptions(f);
  }, [f]), Co(function() {
    if (!(t == null || r == null)) {
      var d = n.createPopper || Iu, v = d(t, r, f);
      return u.current = v, function() {
        v.destroy(), u.current = null;
      };
    }
  }, [t, r, n.createPopper]), {
    state: u.current ? u.current.state : null,
    styles: s.styles,
    attributes: s.attributes,
    update: u.current ? u.current.update : null,
    forceUpdate: u.current ? u.current.forceUpdate : null
  };
};
const mn = {
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, Vu = Object.freeze({
  ESC: 27
}), sa = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: i,
  hasArrow: a,
  distance: c,
  isDisabled: s,
  isVisible: l,
  onClick: p
}) => {
  const [f, u] = J(!1), d = H(null), v = H(null), y = le(() => t || dt("c-Toggletip-"), [t]), b = (g) => u(!1), _ = (g) => {
    u(!f), f && document.activeElement === d.current && !l && setTimeout(() => {
      u((w) => !w);
    }, 100), p && p(g);
  }, E = (g) => {
    (g.keyCode | g.which) === Vu.ESC && f && u(!f);
  }, P = ye.map(e, (g) => Ye(g) ? Ee(g, {
    ...g.props,
    "aria-describedby": t,
    ref: d,
    onClick: _,
    "data-open": f,
    ...l ? {} : {
      onBlur: b,
      onKeyDown: E
    }
  }) : null), {
    styles: $,
    attributes: D
  } = Ur(d.current, v.current, {
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
      enabled: f
    }]
  });
  return !r || ye.count(e) > 1 || s ? /* @__PURE__ */ m(at, {
    children: e
  }) : /* @__PURE__ */ C(at, {
    children: [P, /* @__PURE__ */ m(Ut, {
      id: "js-toggletip-portal",
      children: /* @__PURE__ */ C("div", {
        id: y,
        ref: v,
        role: "status",
        className: `${mn["c-toggletip"]} ${f && mn["c-toggletip--active"]} ${i != null ? i : ""}`,
        style: $.popper,
        ...D.popper,
        children: [r, a && /* @__PURE__ */ m("div", {
          className: mn["c-toggletip__arrow"],
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
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  id: o.exports.string,
  label: o.exports.string.isRequired,
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  onClick: o.exports.func,
  isVisible: o.exports.bool,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const bn = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, Yu = Object.freeze({
  ESC: 27
}), ca = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: i,
  hasArrow: a,
  distance: c,
  isDisabled: s
}) => {
  const [l, p] = J(!1), f = H(null), u = H(null), d = H(), v = le(() => t || dt("c-tooltip-"), [t]), y = (x) => {
    l || p(!l);
  }, b = (x) => p(!1), _ = (x) => {
    (!l || document.activeElement !== f.current) && p(!l);
  }, E = () => {
    window.clearTimeout(d.current);
  }, P = (x) => {
    d.current = setTimeout(() => {
      p(!1);
    }, 150);
  }, $ = (x) => {
    (x.keyCode | x.which) === Yu.ESC && l && p(!l);
  }, D = ye.map(e, (x) => Ye(x) ? Ee(x, {
    ...x.props,
    "aria-describedby": t,
    ref: f,
    onFocus: y,
    onBlur: b,
    onMouseEnter: _,
    onMouseLeave: P,
    onKeyDown: $
  }) : null), {
    styles: g,
    attributes: w
  } = Ur(f.current, u.current, {
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
  return !r || ye.count(e) > 1 || s ? /* @__PURE__ */ m(at, {
    children: e
  }) : /* @__PURE__ */ C(at, {
    children: [D, /* @__PURE__ */ m(Ut, {
      id: "js-tooltip-portal",
      children: /* @__PURE__ */ C("div", {
        id: v,
        ref: u,
        role: "tooltip",
        "data-open": l,
        onMouseEnter: E,
        onMouseLeave: P,
        className: `${bn["c-tooltip"]} ${l && bn["c-tooltip--active"]} ${i != null ? i : ""}`,
        style: g.popper,
        ...w.popper,
        children: [r, a && /* @__PURE__ */ m("div", {
          className: bn["c-tooltip__arrow"],
          "data-popper-arrow": !0,
          style: g.arrow
        })]
      })
    })]
  });
};
ca.defaultProps = {
  placement: "auto"
};
ca.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  id: o.exports.string,
  label: o.exports.string.isRequired,
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const Kn = Ke(), la = ({
  steps: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n,
  hideCloseButton: i,
  hideBackButton: a,
  ariaAttributes: c
}) => {
  const [s, l] = J(null), p = [...e.reduce((b, _, E) => [...b, {
    id: E + 1,
    ..._
  }], [])], f = (b) => p.filter((_) => _.id === b).reduce((_, E) => ({
    ..._,
    ...E
  }), {}), u = (b) => {
    const _ = document.querySelector("#root");
    _.inert = b;
  }, d = () => {
    l((b) => b < p.length ? b + 1 : b);
  }, v = () => {
    l((b) => b > 0 + 1 ? b - 1 : b);
  }, y = () => {
    l(null), r(!t), u(!1), n && n.current.focus();
  };
  return U(() => {
    t && (l(p.shift().id), u(!0));
  }, [t]), /* @__PURE__ */ m(Kn.Provider, {
    value: {
      isOpen: t,
      lastId: p.length,
      ...f(s),
      methods: {
        onNext: d,
        onPrev: v,
        onClose: y
      }
    },
    children: /* @__PURE__ */ m(Ut, {
      id: "js-tour",
      children: t && /* @__PURE__ */ C(at, {
        children: [/* @__PURE__ */ m(qu, {}), /* @__PURE__ */ m(ua, {
          ariaAttributes: c,
          hideCloseButton: i,
          hideBackButton: a
        })]
      })
    })
  });
};
la.defaultProps = {
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
la.propTypes = {
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
const gt = {
  "c-layout": "_c-layout_cq7p6_1",
  "c-tour-content": "_c-tour-content_cq7p6_9",
  "c-tour-progress": "_c-tour-progress_cq7p6_28",
  "c-tour-progress-bar": "_c-tour-progress-bar_cq7p6_36",
  "c-tour-button-container": "_c-tour-button-container_cq7p6_47",
  "c-tour-help": "_c-tour-help_cq7p6_89",
  "c-tour-number": "_c-tour-number_cq7p6_99"
}, ua = ({
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
    placement: p,
    distance: f,
    elementClass: u
  } = _e(Kn), d = H(), {
    onClose: v,
    onPrev: y,
    onNext: b
  } = a, {
    styles: _,
    attributes: E
  } = Ur(document.querySelector(s), d.current, {
    placement: p,
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, f || 8]
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
  }), P = () => Ye(l) ? l : ha("p", {
    className: gt["tour-description"]
  }, [l]), $ = () => {
    d.current.style.setProperty("--speed-movement", "0.8s"), b();
  };
  return /* @__PURE__ */ C(at, {
    children: [/* @__PURE__ */ m("div", {
      className: `${gt["c-layout"]}`
    }), /* @__PURE__ */ C("div", {
      id: `unique-id-tour-element-${c}`,
      ref: d,
      style: _.popper,
      className: `${gt["c-tour-content"]} ${n && "animate__animated animate__fadeIn animate__faster"} ${u != null ? u : ""}`,
      ...e,
      ...E.popper,
      children: [/* @__PURE__ */ C("span", {
        className: "u-sr-only",
        children: ["Parte ", c, " de ", i, "."]
      }), /* @__PURE__ */ m("div", {
        "aria-hidden": !0,
        className: gt["c-tour-progress"],
        children: /* @__PURE__ */ m("div", {
          className: gt["c-tour-progress-bar"],
          style: {
            transform: `scaleX(${c / i})`
          }
        })
      }), P(), /* @__PURE__ */ C("div", {
        className: gt["c-tour-button-container"],
        children: [!t && /* @__PURE__ */ m(Dt, {
          hasAriaLabel: !0,
          label: "Salir",
          onClick: v,
          icon: {
            name: "close",
            size: "big"
          }
        }), !r && /* @__PURE__ */ m(Dt, {
          disabled: c === 1,
          hasAriaLabel: !0,
          label: "Anterior",
          onClick: y,
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
ua.propTypes = {
  ariaAttributes: o.exports.shape({
    role: o.exports.string,
    tabIndex: o.exports.oneOfType([o.exports.string, o.exports.number]),
    "aria-label": o.exports.string,
    "aria-modal": o.exports.oneOfType([o.exports.string, o.exports.bool])
  }),
  hideCloseButton: o.exports.bool,
  hideBackButton: o.exports.bool
};
const qu = () => {
  const {
    isOpen: e,
    id: t,
    target: r,
    helpLayerClass: n
  } = _e(Kn), [i, a] = J({}), c = () => {
    const {
      x: s,
      y: l,
      width: p,
      height: f
    } = document.querySelector(r).getBoundingClientRect();
    a({
      width: `${p}px`,
      height: `${f}px`,
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
    className: `${gt["c-tour-help"]} ${e && "animate__animated animate__fadeIn animate__faster animate__delay-2s"} ${n != null ? n : ""}`,
    style: i,
    children: /* @__PURE__ */ m("span", {
      className: gt["c-tour-number"],
      children: t
    })
  });
}, zu = "_active_r3225_90", Wu = "_iconPulse_r3225_1", pe = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: zu,
  iconPulse: Wu,
  "c-vid__progress-bg": "_c-vid__progress-bg_r3225_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_r3225_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_r3225_140",
  "c-vid__controls": "_c-vid__controls_r3225_150",
  "c-vid__button": "_c-vid__button_r3225_165",
  "c-vid__volume": "_c-vid__volume_r3225_180",
  "c-vid__volume-item": "_c-vid__volume-item_r3225_191",
  "c-vid__time": "_c-vid__time_r3225_202",
  "c-vid__subtitles": "_c-vid__subtitles_r3225_208"
}, fa = ({
  src: e,
  width: t = "1000",
  hasDescription: r,
  description: n,
  addClass: i,
  poster: a,
  ...c
}) => {
  const [s, l] = J({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [p, f] = J({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [u, d] = J({
    state: !1,
    label: "Reproducir video"
  }), [v, y] = J({
    state: !0,
    label: "Volumen"
  }), [b, _] = J(100), [E, P] = J({
    state: !1,
    label: "Ver en pantalla completa"
  }), [$, D] = J(!1), [g, w] = J(100), x = H(null), S = H(null), I = H(null), L = H(null), M = H(null), Z = H(null), K = H(null), re = H(null), [fe, ie] = J(!1), ee = (A) => {
    A.classList.add(`${pe.active}`), setTimeout(() => {
      A.classList.remove(`${pe.active}`);
    }, 650);
  };
  function xe() {
    const A = S.current;
    u.state ? (A.pause(), d({
      state: !1,
      label: "Reproducir video"
    })) : (A.play(), d({
      state: !0,
      label: "Pausar video"
    })), ee(Z.current);
  }
  function he() {
    const A = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, T = x.current;
    A ? (P({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (P({
      state: !0,
      label: "Salir de pantalla completa"
    }), T.requestFullscreen ? T.requestFullscreen() : T.mozRequestFullScreen ? T.mozRequestFullScreen() : T.webkitRequestFullScreen ? T.webkitRequestFullScreen() : T.msRequestFullscreen && T.msRequestFullscreen());
  }
  function O(A) {
    const T = parseInt(A, 10), Q = T >= 3600 ? Math.floor(T / 3600) : 0, me = Math.floor((T - Q * 3600) / 60), Te = T - Q * 3600 - me * 60, $e = j(V(Q)), ot = j(V(me)), lt = j(V(Te));
    return {
      hours: $e,
      minutes: ot,
      seconds: lt
    };
  }
  function N(A) {
    const T = B(A.duration), Q = B(A.currentTime);
    f({
      totalSeconds: A.currentTime,
      hours: parseInt(O(A.currentTime).hours),
      minutes: parseInt(O(A.currentTime).minutes),
      seconds: parseInt(O(A.currentTime).seconds),
      string: Q
    }), l({
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
  function j(A) {
    return isNaN(A) ? "00" : A;
  }
  function W(A) {
    const T = L.current, Q = S.current, Te = A.nativeEvent.offsetX / T.offsetWidth * Q.duration;
    Q.currentTime = Te;
  }
  function F(A) {
    const T = S.current, Q = A.target.value, me = Q / 100;
    w(Q), _(Q), T.volume = me, v.state || y({
      state: !0,
      label: "Volumen"
    });
  }
  const q = () => {
    if (v.state) {
      y({
        state: !1,
        label: "Mutear video"
      });
      const A = S.current, T = 0, Q = T;
      w(T), A.volume = Q;
    } else {
      y({
        state: !0,
        label: "Volumen"
      });
      const A = S.current, T = b, Q = T / 100;
      w(T), A.volume = Q;
    }
  }, z = function(A) {
    (A.keyCode || A.which) === 32 && xe();
  }, X = function(A) {
    const T = Math.floor(L.current.getAttribute("aria-valuenow"));
    if (document.activeElement === M.current)
      return null;
    if ((A.keyCode || A.which) === 37) {
      const Q = T - 5;
      Q >= 0 ? S.current.currentTime = Q : S.current.currentTime = 0, ee(re.current);
    }
    if ((A.keyCode || A.which) === 39) {
      const Q = T + 5;
      Q >= S.current.duration ? S.current.currentTime = S.current.duration : S.current.currentTime = Q, ee(K.current);
    }
  }, Y = () => s >= 3600 ? `${p.hours} horas, ${p.minutes} minutos y ${p.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${p.minutes} minutos y ${p.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return U(() => {
    const A = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(A, "caption") && ie(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(A, "volume") && w(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), U(() => {
    localStorage.setItem("ui-video", JSON.stringify({
      caption: fe,
      volume: g
    }));
  }, [fe, g]), U(() => (I.current ? I.current.addEventListener("error", () => {
    D(!0);
  }) : D(!0), e.caption && D(!1), () => {
    I.current && I.current.removeEventListener("error", () => {
      D(!0);
    });
  }), [e.caption]), /* @__PURE__ */ C("figure", {
    className: `${pe["c-vid"]} ${i}`,
    style: {
      maxWidth: `${t}px`
    },
    onKeyDown: (A) => X(A),
    ...c,
    children: [/* @__PURE__ */ C("div", {
      className: `${pe["c-vid__container"]} ${i}`,
      ref: x,
      children: [/* @__PURE__ */ C("div", {
        className: pe["c-vid__wrapper"],
        children: [/* @__PURE__ */ C("video", {
          ref: S,
          onTimeUpdate: (A) => N(A.target),
          onLoadedData: (A) => N(A.target),
          onClick: xe,
          className: `${pe["c-vid__video"]} ${fe ? "" : pe["no-captions"]}`,
          ...a && {
            poster: a
          },
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
        }), /* @__PURE__ */ C("div", {
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
              name: u.state ? "play" : "pause"
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
        children: /* @__PURE__ */ C("div", {
          role: "slider",
          "aria-label": "Progreso del video",
          "aria-valuemin": "0",
          "aria-valuenow": p.totalSeconds,
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
              transform: `scaleX(calc(${p.totalSeconds} / ${s.totalSeconds}))`
            }
          }), /* @__PURE__ */ m("div", {
            className: pe["progress-sphere"],
            style: {
              left: `min(calc((${p.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
            }
          })]
        })
      }), /* @__PURE__ */ C("div", {
        className: pe["c-vid__controls"],
        children: [/* @__PURE__ */ m("button", {
          className: `${pe["c-vid__button"]} tour`,
          "aria-label": u.label,
          onClick: xe,
          "data-description": "Este bot\xF3n reproduce el video",
          children: /* @__PURE__ */ m(De, {
            name: u.state ? "pause" : "play"
          })
        }), /* @__PURE__ */ m("button", {
          className: `${pe["c-vid__button"]} tour`,
          "aria-label": v.label,
          "data-description": "Este bot\xF3n controla el volumen",
          onClick: q,
          children: /* @__PURE__ */ m(De, {
            name: v.state ? "volume_on" : "volume_off"
          })
        }), /* @__PURE__ */ C("label", {
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
            value: g,
            onChange: F,
            "aria-valuetext": `${g}%`
          })]
        }), /* @__PURE__ */ C("p", {
          className: pe["c-vid__time"],
          "aria-hidden": "true",
          children: [/* @__PURE__ */ m("span", {
            children: p.string
          }), "/", /* @__PURE__ */ m("span", {
            children: s.string
          })]
        }), /* @__PURE__ */ m("button", {
          disabled: $,
          "aria-pressed": $ ? void 0 : fe,
          onClick: () => ie(!fe),
          "aria-label": "Subt\xEDtulos",
          className: `${pe["c-vid__button"]} ${pe["c-vid__subtitles"]}`,
          children: /* @__PURE__ */ m(De, {
            name: $ ? "closed_caption_disabled" : "closed_caption"
          })
        }), /* @__PURE__ */ m("button", {
          className: pe["c-vid__button"],
          "aria-label": E.label,
          onClick: he,
          children: /* @__PURE__ */ m(De, {
            name: E.state ? "fullscreen_exit" : "fullscreen"
          })
        })]
      })]
    }), r && /* @__PURE__ */ C("figcaption", {
      className: pe["c-vid__caption"],
      children: [/* @__PURE__ */ C("strong", {
        children: [n.title, ":"]
      }), " ", n.content]
    })]
  });
};
fa.propTypes = {
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
fa.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
const Xn = Ke(), pa = ({
  children: e,
  isVisible: t
}) => {
  const [r, n] = J(!1), i = H(), a = () => n(!r), c = (s) => {
    i.current || (i.current = s);
  };
  return U(() => {
    t !== void 0 && n(t);
  }, [t]), /* @__PURE__ */ m(Xn.Provider, {
    value: {
      isOpen: r,
      onOpen: a,
      setRefButton: c,
      refButton: i
    },
    children: e
  });
};
pa.defaultProps = {
  isVisible: !1
};
pa.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node), o.exports.element, o.exports.node]),
  isVisible: o.exports.bool
};
const Uu = ({
  children: e,
  onClick: t
}) => {
  const {
    onOpen: r,
    setRefButton: n
  } = _e(Xn);
  if (ye.count(e) > 1)
    return null;
  const i = (c) => {
    r(), t && t(c);
  }, a = (c) => Ye(c) ? Ee(c, {
    ...c.props,
    ref: n,
    onClick: i
  }) : null;
  return ye.map(e, a);
};
Uu.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onClick: o.exports.func
};
const gn = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, yn = Object.freeze({
  ESC: 27,
  TAB: 9
}), da = ({
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
  } = _e(Xn), l = H(), p = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', f = (v) => {
    const y = l.current.querySelectorAll(p), b = s.current, _ = y[0], E = y[y.length - 1];
    if ((v.keyCode || v.which) === yn.TAB && document.activeElement === E)
      return b.focus(), v.preventDefault();
    v.shiftKey && (v.keyCode || v.which) === yn.TAB && document.activeElement === _ && (b.focus(), v.preventDefault()), (v.keyCode || v.which) === yn.ESC && b.focus();
  }, {
    styles: u,
    attributes: d
  } = Ur(s.current, l.current, {
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
  }, [c]), n ? /* @__PURE__ */ m(at, {
    children: e
  }) : /* @__PURE__ */ m(Ut, {
    id: "js-popover-modal-portal",
    children: /* @__PURE__ */ C("div", {
      ref: l,
      role: "status",
      tabIndex: -1,
      className: `${gn["c-popover-modal"]} ${c && gn["c-popover-modal--active"]} ${t != null ? t : ""}`,
      style: u.popper,
      onKeyDown: f,
      ...d.popper,
      children: [e, r && /* @__PURE__ */ m("div", {
        className: gn["c-popover-modal__arrow"],
        "data-popper-arrow": !0,
        style: u.arrow
      })]
    })
  });
};
da.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
da.defaultProps = {
  hasArrow: !1,
  placement: "auto"
};
const Gu = (e, t) => {
  const [r, n] = J(() => {
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
}, Hu = (e, t, r) => {
  const [n, i] = J(r), a = e.map((s) => window.matchMedia(s)), c = () => {
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
}, Qu = () => {
  const [e, t] = Gu("dark-mode-enabled"), r = Hu(["(prefers-color-scheme: dark)"], [!0], !1), n = typeof e < "u" ? e : r;
  return U(() => {
    t(r);
  }, [r]), U(() => {
    const i = window.document.body;
    n ? i.setAttribute("data-dark-mode", n) : i.removeAttribute("data-dark-mode", n);
  }, [n]), [n, t];
}, Ku = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), ef = (e) => {
  const { root: t, rootMargin: r, threshold: n } = e || Ku, [i, a] = J(!1), [c, s] = J(null);
  return U(() => {
    if (!c) {
      a(!1);
      return;
    }
    const l = new IntersectionObserver(
      ([p]) => {
        a(p.isIntersecting);
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
}, va = (e) => {
  let t = {};
  for (const r in e)
    if (typeof e[r] == "object") {
      const n = va(e[r]);
      for (const i in n)
        t = {
          ...t,
          [r.includes("accents") || r.includes("palette") ? i : `${r}-${i}`]: n[i]
        };
    } else
      t[r] = e[r];
  return t;
}, tf = (e) => va(e);
export {
  Pa as Accordion,
  Ko as AccordionButton,
  Xo as AccordionItem,
  Jo as AccordionPanel,
  Zo as Audio,
  Dt as Button,
  vl as ButtonSection,
  ti as CheckBox,
  ys as CheckBoxGroup,
  ws as Col,
  Ts as Content,
  wi as DragAndDrop,
  xi as DragAndDropContext,
  Ei as Draggable,
  Ti as Droppable,
  Zu as Filter,
  Oi as GeneralDraggable,
  De as Icon,
  Si as Image,
  Ri as Input,
  tl as InputGroup,
  $i as InputLeftAddon,
  Di as InputRightAddon,
  Pi as InputStyle,
  nl as Kbd,
  Ci as Link,
  ol as List,
  Ni as ListItem,
  Ii as Modal,
  ki as ModalContent,
  Bn as ModalContext,
  Mi as ModalOverlay,
  zi as NavSection,
  Bi as NumberDecrementStepper,
  Vi as NumberIncrementStepper,
  Fi as NumberInput,
  Yr as NumberInputContext,
  ji as NumberInputField,
  Li as NumberInputStepper,
  il as OrderedList,
  Yi as Pagination,
  Vn as PaginationItem,
  fl as Panel,
  qr as PanelContext,
  ml as Paper,
  pa as PopoverModal,
  Uu as PopoverModalButton,
  da as PopoverModalContent,
  Xn as PopoverModalContext,
  Ut as Portal,
  wl as Row,
  qi as Section,
  Wi as Select,
  El as SelectGroup,
  Ui as Switch,
  Gi as Tab,
  Hi as TabList,
  Ki as TabPanel,
  Xi as TabPanels,
  Tl as Tabs,
  Yn as TabsContext,
  Ji as TextArea,
  Ol as ThemeProvider,
  sa as Toggletip,
  ca as Tooltip,
  la as Tour,
  Kn as TourContext,
  ua as TourElement,
  qu as TourHelpLayer,
  al as UnorderedList,
  fa as Video,
  tf as createTheme,
  Qu as useDarkMode,
  Gu as useLocalStorage,
  Hu as useMedia,
  ef as useOnScreen,
  cl as usePagination,
  yl as usePortal
};
