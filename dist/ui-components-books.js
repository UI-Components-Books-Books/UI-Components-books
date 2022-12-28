import * as $t from "react";
import qo, { Children as ye, useState as X, useEffect as G, isValidElement as qe, cloneElement as be, forwardRef as ct, useRef as H, useMemo as le, useLayoutEffect as Yo, useCallback as Ce, createContext as Ze, memo as zo, useReducer as Cn, useContext as xe, createElement as va } from "react";
import * as ha from "react-dom";
import { unstable_batchedUpdates as Kt, createPortal as Wo } from "react-dom";
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, o = { exports: {} }, en = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function ma() {
  if (Jn)
    return se;
  Jn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function $(b) {
    if (typeof b == "object" && b !== null) {
      var w = b.$$typeof;
      switch (w) {
        case t:
          switch (b = b.type, b) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case u:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case d:
                case y:
                case h:
                case c:
                  return b;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function D(b) {
    return $(b) === f;
  }
  return se.AsyncMode = l, se.ConcurrentMode = f, se.ContextConsumer = s, se.ContextProvider = c, se.Element = t, se.ForwardRef = d, se.Fragment = n, se.Lazy = y, se.Memo = h, se.Portal = r, se.Profiler = a, se.StrictMode = i, se.Suspense = u, se.isAsyncMode = function(b) {
    return D(b) || $(b) === l;
  }, se.isConcurrentMode = D, se.isContextConsumer = function(b) {
    return $(b) === s;
  }, se.isContextProvider = function(b) {
    return $(b) === c;
  }, se.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, se.isForwardRef = function(b) {
    return $(b) === d;
  }, se.isFragment = function(b) {
    return $(b) === n;
  }, se.isLazy = function(b) {
    return $(b) === y;
  }, se.isMemo = function(b) {
    return $(b) === h;
  }, se.isPortal = function(b) {
    return $(b) === r;
  }, se.isProfiler = function(b) {
    return $(b) === a;
  }, se.isStrictMode = function(b) {
    return $(b) === i;
  }, se.isSuspense = function(b) {
    return $(b) === u;
  }, se.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === a || b === i || b === u || b === v || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === h || b.$$typeof === c || b.$$typeof === s || b.$$typeof === d || b.$$typeof === x || b.$$typeof === E || b.$$typeof === P || b.$$typeof === g);
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function $(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === f || T === a || T === i || T === u || T === v || typeof T == "object" && T !== null && (T.$$typeof === y || T.$$typeof === h || T.$$typeof === c || T.$$typeof === s || T.$$typeof === d || T.$$typeof === x || T.$$typeof === E || T.$$typeof === P || T.$$typeof === g);
    }
    function D(T) {
      if (typeof T == "object" && T !== null) {
        var Q = T.$$typeof;
        switch (Q) {
          case t:
            var me = T.type;
            switch (me) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case u:
                return me;
              default:
                var Oe = me && me.$$typeof;
                switch (Oe) {
                  case s:
                  case d:
                  case y:
                  case h:
                  case c:
                    return Oe;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var b = l, w = f, _ = s, R = c, N = t, F = d, M = n, J = y, Z = h, re = r, de = a, ie = i, ee = u, Ee = !1;
    function he(T) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(T) || D(T) === l;
    }
    function O(T) {
      return D(T) === f;
    }
    function I(T) {
      return D(T) === s;
    }
    function B(T) {
      return D(T) === c;
    }
    function V(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function j(T) {
      return D(T) === d;
    }
    function W(T) {
      return D(T) === n;
    }
    function L(T) {
      return D(T) === y;
    }
    function Y(T) {
      return D(T) === h;
    }
    function z(T) {
      return D(T) === r;
    }
    function K(T) {
      return D(T) === a;
    }
    function q(T) {
      return D(T) === i;
    }
    function A(T) {
      return D(T) === u;
    }
    ce.AsyncMode = b, ce.ConcurrentMode = w, ce.ContextConsumer = _, ce.ContextProvider = R, ce.Element = N, ce.ForwardRef = F, ce.Fragment = M, ce.Lazy = J, ce.Memo = Z, ce.Portal = re, ce.Profiler = de, ce.StrictMode = ie, ce.Suspense = ee, ce.isAsyncMode = he, ce.isConcurrentMode = O, ce.isContextConsumer = I, ce.isContextProvider = B, ce.isElement = V, ce.isForwardRef = j, ce.isFragment = W, ce.isLazy = L, ce.isMemo = Y, ce.isPortal = z, ce.isProfiler = K, ce.isStrictMode = q, ce.isSuspense = A, ce.isValidElementType = $, ce.typeOf = D;
  }()), ce;
}
var eo;
function Uo() {
  return eo || (eo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = ma() : e.exports = ga();
  }(en)), en.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var tn, to;
function ba() {
  if (to)
    return tn;
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
      var l = Object.getOwnPropertyNames(c).map(function(d) {
        return c[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return tn = i() ? Object.assign : function(a, c) {
    for (var s, l = n(a), f, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var u in s)
        t.call(s, u) && (l[u] = s[u]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          r.call(s, f[v]) && (l[f[v]] = s[f[v]]);
      }
    }
    return l;
  }, tn;
}
var rn, ro;
function An() {
  if (ro)
    return rn;
  ro = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return rn = e, rn;
}
var nn, no;
function Ho() {
  return no || (no = 1, nn = Function.call.bind(Object.prototype.hasOwnProperty)), nn;
}
var on, oo;
function ya() {
  if (oo)
    return on;
  oo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = An(), r = {}, n = Ho();
    e = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function i(a, c, s, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var u;
          try {
            if (typeof a[d] != "function") {
              var v = Error(
                (l || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            u = a[d](c, d, l, s, null, t);
          } catch (y) {
            u = y;
          }
          if (u && !(u instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in r)) {
            r[u.message] = !0;
            var h = f ? f() : "";
            e(
              "Failed " + s + " type: " + u.message + (h != null ? h : "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, on = i, on;
}
var an, io;
function xa() {
  if (io)
    return an;
  io = 1;
  var e = Uo(), t = ba(), r = An(), n = Ho(), i = ya(), a = function() {
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
  return an = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function u(O) {
      var I = O && (f && O[f] || O[d]);
      if (typeof I == "function")
        return I;
    }
    var v = "<<anonymous>>", h = {
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
      elementType: b(),
      instanceOf: w,
      node: F(),
      objectOf: R,
      oneOf: _,
      oneOfType: N,
      shape: J,
      exact: Z
    };
    function y(O, I) {
      return O === I ? O !== 0 || 1 / O === 1 / I : O !== O && I !== I;
    }
    function g(O, I) {
      this.message = O, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function x(O) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, B = 0;
      function V(W, L, Y, z, K, q, A) {
        if (z = z || v, q = q || Y, A !== r) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = z + ":" + Y;
            !I[Q] && B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[Q] = !0, B++);
          }
        }
        return L[Y] == null ? W ? L[Y] === null ? new g("The " + K + " `" + q + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new g("The " + K + " `" + q + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : O(L, Y, z, K, q);
      }
      var j = V.bind(null, !1);
      return j.isRequired = V.bind(null, !0), j;
    }
    function E(O) {
      function I(B, V, j, W, L, Y) {
        var z = B[V], K = ie(z);
        if (K !== O) {
          var q = ee(z);
          return new g(
            "Invalid " + W + " `" + L + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return x(I);
    }
    function P() {
      return x(c);
    }
    function $(O) {
      function I(B, V, j, W, L) {
        if (typeof O != "function")
          return new g("Property `" + L + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var Y = B[V];
        if (!Array.isArray(Y)) {
          var z = ie(Y);
          return new g("Invalid " + W + " `" + L + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an array."));
        }
        for (var K = 0; K < Y.length; K++) {
          var q = O(Y, K, j, W, L + "[" + K + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return x(I);
    }
    function D() {
      function O(I, B, V, j, W) {
        var L = I[B];
        if (!s(L)) {
          var Y = ie(L);
          return new g("Invalid " + j + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(O);
    }
    function b() {
      function O(I, B, V, j, W) {
        var L = I[B];
        if (!e.isValidElementType(L)) {
          var Y = ie(L);
          return new g("Invalid " + j + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(O);
    }
    function w(O) {
      function I(B, V, j, W, L) {
        if (!(B[V] instanceof O)) {
          var Y = O.name || v, z = he(B[V]);
          return new g("Invalid " + W + " `" + L + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return x(I);
    }
    function _(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function I(B, V, j, W, L) {
        for (var Y = B[V], z = 0; z < O.length; z++)
          if (y(Y, O[z]))
            return null;
        var K = JSON.stringify(O, function(A, T) {
          var Q = ee(T);
          return Q === "symbol" ? String(T) : T;
        });
        return new g("Invalid " + W + " `" + L + "` of value `" + String(Y) + "` " + ("supplied to `" + j + "`, expected one of " + K + "."));
      }
      return x(I);
    }
    function R(O) {
      function I(B, V, j, W, L) {
        if (typeof O != "function")
          return new g("Property `" + L + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var Y = B[V], z = ie(Y);
        if (z !== "object")
          return new g("Invalid " + W + " `" + L + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an object."));
        for (var K in Y)
          if (n(Y, K)) {
            var q = O(Y, K, j, W, L + "." + K, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return x(I);
    }
    function N(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var I = 0; I < O.length; I++) {
        var B = O[I];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(B) + " at index " + I + "."
          ), c;
      }
      function V(j, W, L, Y, z) {
        for (var K = [], q = 0; q < O.length; q++) {
          var A = O[q], T = A(j, W, L, Y, z, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && K.push(T.data.expectedType);
        }
        var Q = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new g("Invalid " + Y + " `" + z + "` supplied to " + ("`" + L + "`" + Q + "."));
      }
      return x(V);
    }
    function F() {
      function O(I, B, V, j, W) {
        return re(I[B]) ? null : new g("Invalid " + j + " `" + W + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return x(O);
    }
    function M(O, I, B, V, j) {
      return new g(
        (O || "React class") + ": " + I + " type `" + B + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function J(O) {
      function I(B, V, j, W, L) {
        var Y = B[V], z = ie(Y);
        if (z !== "object")
          return new g("Invalid " + W + " `" + L + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var K in O) {
          var q = O[K];
          if (typeof q != "function")
            return M(j, W, L, K, ee(q));
          var A = q(Y, K, j, W, L + "." + K, r);
          if (A)
            return A;
        }
        return null;
      }
      return x(I);
    }
    function Z(O) {
      function I(B, V, j, W, L) {
        var Y = B[V], z = ie(Y);
        if (z !== "object")
          return new g("Invalid " + W + " `" + L + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        var K = t({}, B[V], O);
        for (var q in K) {
          var A = O[q];
          if (n(O, q) && typeof A != "function")
            return M(j, W, L, q, ee(A));
          if (!A)
            return new g(
              "Invalid " + W + " `" + L + "` key `" + q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(B[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var T = A(Y, q, j, W, L + "." + q, r);
          if (T)
            return T;
        }
        return null;
      }
      return x(I);
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
          var I = u(O);
          if (I) {
            var B = I.call(O), V;
            if (I !== O.entries) {
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
    function de(O, I) {
      return O === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function ie(O) {
      var I = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : de(I, O) ? "symbol" : I;
    }
    function ee(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var I = ie(O);
      if (I === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function Ee(O) {
      var I = ee(O);
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
    function he(O) {
      return !O.constructor || !O.constructor.name ? v : O.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, an;
}
var sn, ao;
function _a() {
  if (ao)
    return sn;
  ao = 1;
  var e = An();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, sn = function() {
    function n(c, s, l, f, d, u) {
      if (u !== e) {
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
  }, sn;
}
if (process.env.NODE_ENV !== "production") {
  var wa = Uo(), Ea = !0;
  o.exports = xa()(wa.isElement, Ea);
} else
  o.exports = _a()();
const Ta = (e) => {
  var t, r;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((r = e == null ? void 0 : e.type) == null ? void 0 : r.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, je = (e, t) => ye.toArray(e).filter((r) => t.indexOf(Ta(r)) !== -1);
var jr = { exports: {} }, Xt = {};
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
function Oa() {
  if (so)
    return Xt;
  so = 1;
  var e = qo, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, f) {
    var d, u = {}, v = null, h = null;
    f !== void 0 && (v = "" + f), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (d in l)
      n.call(l, d) && !a.hasOwnProperty(d) && (u[d] = l[d]);
    if (s && s.defaultProps)
      for (d in l = s.defaultProps, l)
        u[d] === void 0 && (u[d] = l[d]);
    return { $$typeof: t, type: s, key: v, ref: h, props: u, _owner: i.current };
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
function Sa() {
  return co || (co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qo, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function x(m) {
      if (m === null || typeof m != "object")
        return null;
      var S = y && m[y] || m[g];
      return typeof S == "function" ? S : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(m) {
      {
        for (var S = arguments.length, k = new Array(S > 1 ? S - 1 : 0), U = 1; U < S; U++)
          k[U - 1] = arguments[U];
        $("error", m, k);
      }
    }
    function $(m, S, k) {
      {
        var U = E.ReactDebugCurrentFrame, ae = U.getStackAddendum();
        ae !== "" && (S += "%s", k = k.concat([ae]));
        var ue = k.map(function(ne) {
          return String(ne);
        });
        ue.unshift("Warning: " + S), Function.prototype.apply.call(console[m], console, ue);
      }
    }
    var D = !1, b = !1, w = !1, _ = !1, R = !1, N;
    N = Symbol.for("react.module.reference");
    function F(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === a || R || m === i || m === f || m === d || _ || m === h || D || b || w || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === u || m.$$typeof === c || m.$$typeof === s || m.$$typeof === l || m.$$typeof === N || m.getModuleId !== void 0));
    }
    function M(m, S, k) {
      var U = m.displayName;
      if (U)
        return U;
      var ae = S.displayName || S.name || "";
      return ae !== "" ? k + "(" + ae + ")" : k;
    }
    function J(m) {
      return m.displayName || "Context";
    }
    function Z(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case s:
            var S = m;
            return J(S) + ".Consumer";
          case c:
            var k = m;
            return J(k._context) + ".Provider";
          case l:
            return M(m, m.render, "ForwardRef");
          case u:
            var U = m.displayName || null;
            return U !== null ? U : Z(m.type) || "Memo";
          case v: {
            var ae = m, ue = ae._payload, ne = ae._init;
            try {
              return Z(ne(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, de = 0, ie, ee, Ee, he, O, I, B;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function j() {
      {
        if (de === 0) {
          ie = console.log, ee = console.info, Ee = console.warn, he = console.error, O = console.group, I = console.groupCollapsed, B = console.groupEnd;
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
        de++;
      }
    }
    function W() {
      {
        if (de--, de === 0) {
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
              value: ee
            }),
            warn: re({}, m, {
              value: Ee
            }),
            error: re({}, m, {
              value: he
            }),
            group: re({}, m, {
              value: O
            }),
            groupCollapsed: re({}, m, {
              value: I
            }),
            groupEnd: re({}, m, {
              value: B
            })
          });
        }
        de < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = E.ReactCurrentDispatcher, Y;
    function z(m, S, k) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (ae) {
            var U = ae.stack.trim().match(/\n( *(at )?)/);
            Y = U && U[1] || "";
          }
        return `
` + Y + m;
      }
    }
    var K = !1, q;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      q = new A();
    }
    function T(m, S) {
      if (!m || K)
        return "";
      {
        var k = q.get(m);
        if (k !== void 0)
          return k;
      }
      var U;
      K = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = L.current, L.current = null, j();
      try {
        if (S) {
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
            } catch (dt) {
              U = dt;
            }
            Reflect.construct(m, [], ne);
          } else {
            try {
              ne.call();
            } catch (dt) {
              U = dt;
            }
            m.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            U = dt;
          }
          m();
        }
      } catch (dt) {
        if (dt && U && typeof dt.stack == "string") {
          for (var te = dt.stack.split(`
`), Ne = U.stack.split(`
`), ge = te.length - 1, _e = Ne.length - 1; ge >= 1 && _e >= 0 && te[ge] !== Ne[_e]; )
            _e--;
          for (; ge >= 1 && _e >= 0; ge--, _e--)
            if (te[ge] !== Ne[_e]) {
              if (ge !== 1 || _e !== 1)
                do
                  if (ge--, _e--, _e < 0 || te[ge] !== Ne[_e]) {
                    var We = `
` + te[ge].replace(" at new ", " at ");
                    return m.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", m.displayName)), typeof m == "function" && q.set(m, We), We;
                  }
                while (ge >= 1 && _e >= 0);
              break;
            }
        }
      } finally {
        K = !1, L.current = ue, W(), Error.prepareStackTrace = ae;
      }
      var It = m ? m.displayName || m.name : "", Xn = It ? z(It) : "";
      return typeof m == "function" && q.set(m, Xn), Xn;
    }
    function Q(m, S, k) {
      return T(m, !1);
    }
    function me(m) {
      var S = m.prototype;
      return !!(S && S.isReactComponent);
    }
    function Oe(m, S, k) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return T(m, me(m));
      if (typeof m == "string")
        return z(m);
      switch (m) {
        case f:
          return z("Suspense");
        case d:
          return z("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case l:
            return Q(m.render);
          case u:
            return Oe(m.type, S, k);
          case v: {
            var U = m, ae = U._payload, ue = U._init;
            try {
              return Oe(ue(ae), S, k);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, ot = {}, lt = E.ReactDebugCurrentFrame;
    function it(m) {
      if (m) {
        var S = m._owner, k = Oe(m.type, m._source, S ? S.type : null);
        lt.setExtraStackFrame(k);
      } else
        lt.setExtraStackFrame(null);
    }
    function Se(m, S, k, U, ae) {
      {
        var ue = Function.call.bind(De);
        for (var ne in m)
          if (ue(m, ne)) {
            var te = void 0;
            try {
              if (typeof m[ne] != "function") {
                var Ne = Error((U || "React class") + ": " + k + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              te = m[ne](S, ne, U, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              te = ge;
            }
            te && !(te instanceof Error) && (it(ae), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", k, ne, typeof te), it(null)), te instanceof Error && !(te.message in ot) && (ot[te.message] = !0, it(ae), P("Failed %s type: %s", k, te.message), it(null));
          }
      }
    }
    var Xe = Array.isArray;
    function Je(m) {
      return Xe(m);
    }
    function xt(m) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, k = S && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return k;
      }
    }
    function vt(m) {
      try {
        return _t(m), !1;
      } catch {
        return !0;
      }
    }
    function _t(m) {
      return "" + m;
    }
    function wt(m) {
      if (vt(m))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xt(m)), _t(m);
    }
    var Ae = E.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ht, Gt, Ye;
    Ye = {};
    function _r(m) {
      if (De.call(m, "ref")) {
        var S = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Kr(m) {
      if (De.call(m, "key")) {
        var S = Object.getOwnPropertyDescriptor(m, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Xr(m, S) {
      if (typeof m.ref == "string" && Ae.current && S && Ae.current.stateNode !== S) {
        var k = Z(Ae.current.type);
        Ye[k] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Ae.current.type), m.ref), Ye[k] = !0);
      }
    }
    function wr(m, S) {
      {
        var k = function() {
          ht || (ht = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        k.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function Jr(m, S) {
      {
        var k = function() {
          Gt || (Gt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        k.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Er = function(m, S, k, U, ae, ue, ne) {
      var te = {
        $$typeof: t,
        type: m,
        key: S,
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
        value: U
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function Qr(m, S, k, U, ae) {
      {
        var ue, ne = {}, te = null, Ne = null;
        k !== void 0 && (wt(k), te = "" + k), Kr(S) && (wt(S.key), te = "" + S.key), _r(S) && (Ne = S.ref, Xr(S, ae));
        for (ue in S)
          De.call(S, ue) && !Qe.hasOwnProperty(ue) && (ne[ue] = S[ue]);
        if (m && m.defaultProps) {
          var ge = m.defaultProps;
          for (ue in ge)
            ne[ue] === void 0 && (ne[ue] = ge[ue]);
        }
        if (te || Ne) {
          var _e = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          te && wr(ne, _e), Ne && Jr(ne, _e);
        }
        return Er(m, te, Ne, ae, U, Ae.current, ne);
      }
    }
    var Zt = E.ReactCurrentOwner, Tr = E.ReactDebugCurrentFrame;
    function ve(m) {
      if (m) {
        var S = m._owner, k = Oe(m.type, m._source, S ? S.type : null);
        Tr.setExtraStackFrame(k);
      } else
        Tr.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function $e(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function et() {
      {
        if (Zt.current) {
          var m = Z(Zt.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Ie(m) {
      {
        if (m !== void 0) {
          var S = m.fileName.replace(/^.*[\\\/]/, ""), k = m.lineNumber;
          return `

Check your code at ` + S + ":" + k + ".";
        }
        return "";
      }
    }
    var ke = {};
    function ze(m) {
      {
        var S = et();
        if (!S) {
          var k = typeof m == "string" ? m : m.displayName || m.name;
          k && (S = `

Check the top-level render call using <` + k + ">.");
        }
        return S;
      }
    }
    function ut(m, S) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var k = ze(S);
        if (ke[k])
          return;
        ke[k] = !0;
        var U = "";
        m && m._owner && m._owner !== Zt.current && (U = " It was passed a child from " + Z(m._owner.type) + "."), ve(m), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, U), ve(null);
      }
    }
    function Me(m, S) {
      {
        if (typeof m != "object")
          return;
        if (Je(m))
          for (var k = 0; k < m.length; k++) {
            var U = m[k];
            $e(U) && ut(U, S);
          }
        else if ($e(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var ae = x(m);
          if (typeof ae == "function" && ae !== m.entries)
            for (var ue = ae.call(m), ne; !(ne = ue.next()).done; )
              $e(ne.value) && ut(ne.value, S);
        }
      }
    }
    function Et(m) {
      {
        var S = m.type;
        if (S == null || typeof S == "string")
          return;
        var k;
        if (typeof S == "function")
          k = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === l || S.$$typeof === u))
          k = S.propTypes;
        else
          return;
        if (k) {
          var U = Z(S);
          Se(k, m.props, "prop", U, m);
        } else if (S.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var ae = Z(S);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(m) {
      {
        for (var S = Object.keys(m.props), k = 0; k < S.length; k++) {
          var U = S[k];
          if (U !== "children" && U !== "key") {
            ve(m), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), ve(null);
            break;
          }
        }
        m.ref !== null && (ve(m), P("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function Ot(m, S, k, U, ae, ue) {
      {
        var ne = F(m);
        if (!ne) {
          var te = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = Ie(ae);
          Ne ? te += Ne : te += et();
          var ge;
          m === null ? ge = "null" : Je(m) ? ge = "array" : m !== void 0 && m.$$typeof === t ? (ge = "<" + (Z(m.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof m, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, te);
        }
        var _e = Qr(m, S, k, ae, ue);
        if (_e == null)
          return _e;
        if (ne) {
          var We = S.children;
          if (We !== void 0)
            if (U)
              if (Je(We)) {
                for (var It = 0; It < We.length; It++)
                  Me(We[It], m);
                Object.freeze && Object.freeze(We);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(We, m);
        }
        return m === n ? Tt(_e) : Et(_e), _e;
      }
    }
    function Nt(m, S, k) {
      return Ot(m, S, k, !0);
    }
    function Or(m, S, k) {
      return Ot(m, S, k, !1);
    }
    var St = Or, Rt = Nt;
    Jt.Fragment = n, Jt.jsx = St, Jt.jsxs = Rt;
  }()), Jt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Oa() : e.exports = Sa();
})(jr);
const at = jr.exports.Fragment, p = jr.exports.jsx, C = jr.exports.jsxs, Ra = ({
  children: e,
  allowMultiple: t,
  defaultIndex: r
}) => {
  const [n, i] = X(), a = (s) => {
    t ? n.includes(s) ? i(n.filter((l) => l !== s)) : i([...n, s]) : i(s);
  };
  G(() => (i(t ? r || [] : r != null ? r : null), () => {
    i(null);
  }), [t, r]);
  const c = ye.map(e, (s, l) => qe(s) ? be(s, {
    ...s.props,
    id: l,
    isOpen: n,
    onToggle: a
  }) : null);
  return /* @__PURE__ */ p("div", {
    children: je(c, ["AccordionItem"])
  });
};
Ra.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  allowMultiple: o.exports.bool,
  defaultIndex: o.exports.oneOfType([o.exports.array, o.exports.number])
};
const pe = (e) => (t, r, n) => {
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
Go.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  onExpanded: o.exports.func,
  isExpanded: o.exports.bool,
  expanded: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  __TYPE: pe("AccordionButton")
};
Go.defaultProps = {
  __TYPE: "AccordionButton"
};
const Zo = ({
  children: e,
  id: t,
  isOpen: r,
  onToggle: n,
  addClass: i
}) => {
  const a = () => n(t), c = () => typeof r == "number" ? r === t : Array.isArray(r) ? !!r.includes(t) : !1, s = ye.map(e, (l) => qe(l) ? l.props.__TYPE === "AccordionButton" ? be(l, {
    ...l.props,
    id: t,
    onExpanded: a,
    isExpanded: c()
  }) : be(l, {
    ...l.props,
    id: t,
    isExpanded: c()
  }) : null);
  return /* @__PURE__ */ p("div", {
    className: `${Mt["c-accordion__item"]} ${i != null ? i : ""}`,
    children: je(s, ["AccordionButton", "AccordionPanel"])
  });
};
Zo.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  id: o.exports.number,
  isOpen: o.exports.oneOfType([o.exports.array, o.exports.number]),
  onToggle: o.exports.func,
  addClass: o.exports.string,
  __TYPE: pe("AccordionItem")
};
Zo.defaultProps = {
  __TYPE: "AccordionItem"
};
const Ko = ({
  children: e,
  id: t,
  isExpanded: r,
  addClass: n,
  __TYPE: i,
  ...a
}) => /* @__PURE__ */ p("div", {
  className: `${Mt["c-accordion"]} ${r ? Mt["c-accordion__panel--active"] : Mt["c-accordion__panel"]}`,
  "aria-hidden": !r,
  "data-type": i,
  ...!r && {
    hidden: !r
  },
  ...a,
  children: /* @__PURE__ */ p("div", {
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
  __TYPE: pe("AccordionPanel")
};
Ko.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Rr = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Pa = /\w+\.svg/gi, we = ({
  children: e,
  path: t,
  size: r,
  addClass: n
}) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", {
      children: "Doesn't exist"
    });
  if (ye.count(e) > 1)
    return /* @__PURE__ */ p("span", {
      children: "Only have one children"
    });
  const i = t && t.match(Pa).toString().replace(/.svg/gi, ""), a = `${t}#${i}`;
  return e ? be(e, {
    ...e.props,
    className: `${Rr["c-icon"]} ${Rr[`c-${r}`]} ${n != null ? n : ""}`,
    "aria-hidden": !0,
    "data-testid": i
  }) : /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: `${Rr["c-icon"]} ${Rr[`c-${r}`]} ${n != null ? n : ""}`,
    "aria-hidden": "true",
    "data-testid": i,
    children: /* @__PURE__ */ p("use", {
      xlinkHref: a
    })
  });
};
we.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]),
  path: o.exports.string,
  size: o.exports.oneOf(["small", "normal", "big"]),
  addClass: o.exports.string,
  __TYPE: pe("Icon")
};
we.defaultProps = {
  size: "normal",
  __TYPE: "Icon"
};
const Qt = {
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
    onClick: f,
    children: d,
    addClass: u,
    ...v
  } = e;
  return /* @__PURE__ */ C("button", {
    ref: t,
    className: `${u != null ? u : ""} ${Qt["c-button"]} ${Qt[`c-${c}`]} ${Qt[`c-${n}`]} ${i && i.path && s ? Qt["c-round"] : ""} 
        ${i && i.position === "right" ? Qt["c-reverse"] : ""}`,
    disabled: l,
    type: a,
    onClick: f,
    ...s && {
      "aria-label": `${r}`
    },
    ...v,
    children: [d, i && /* @__PURE__ */ p(we, {
      path: i.path,
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
    path: o.exports.string,
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
}, Xo = ({
  src: e,
  format: t,
  a11y: r,
  size: n,
  type: i,
  addClass: a,
  ...c
}) => {
  const [s, l] = X(!1), f = H(), d = Object.freeze({
    BUTTON: "Button",
    BAR: "Bar"
  }), u = (v) => {
    !f.current || (f.current.paused ? f.current.play() : f.current.pause(), l(!s));
  };
  return i === d.BAR ? /* @__PURE__ */ p("audio", {
    preload: "metadata",
    controls: !0,
    className: `${kt["c-audio"]} ${n && kt[`c-audio--${n}`]} ${a != null ? a : ""}`,
    "data-a11y": r,
    ...c,
    children: /* @__PURE__ */ p("source", {
      src: e,
      type: t
    })
  }) : /* @__PURE__ */ C(at, {
    children: [/* @__PURE__ */ p("audio", {
      ref: f,
      src: e,
      type: t,
      onEnded: () => l(!s),
      className: kt["c-audio--hidden"]
    }), /* @__PURE__ */ p(Dt, {
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
var $a = typeof Sr == "object" && Sr && Sr.Object === Object && Sr, Da = $a, Ca = Da, Aa = typeof self == "object" && self && self.Object === Object && self, Na = Ca || Aa || Function("return this")(), Ia = Na, ka = Ia, Ma = ka.Symbol, Nn = Ma;
function La(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Fa = La, ja = Array.isArray, Ba = ja, lo = Nn, Jo = Object.prototype, Va = Jo.hasOwnProperty, qa = Jo.toString, er = lo ? lo.toStringTag : void 0;
function Ya(e) {
  var t = Va.call(e, er), r = e[er];
  try {
    e[er] = void 0;
    var n = !0;
  } catch {
  }
  var i = qa.call(e);
  return n && (t ? e[er] = r : delete e[er]), i;
}
var za = Ya, Wa = Object.prototype, Ua = Wa.toString;
function Ha(e) {
  return Ua.call(e);
}
var Ga = Ha, uo = Nn, Za = za, Ka = Ga, Xa = "[object Null]", Ja = "[object Undefined]", fo = uo ? uo.toStringTag : void 0;
function Qa(e) {
  return e == null ? e === void 0 ? Ja : Xa : fo && fo in Object(e) ? Za(e) : Ka(e);
}
var es = Qa;
function ts(e) {
  return e != null && typeof e == "object";
}
var rs = ts, ns = es, os = rs, is = "[object Symbol]";
function as(e) {
  return typeof e == "symbol" || os(e) && ns(e) == is;
}
var ss = as, po = Nn, cs = Fa, ls = Ba, us = ss, ds = 1 / 0, vo = po ? po.prototype : void 0, ho = vo ? vo.toString : void 0;
function Qo(e) {
  if (typeof e == "string")
    return e;
  if (ls(e))
    return cs(e, Qo) + "";
  if (us(e))
    return ho ? ho.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ds ? "-0" : t;
}
var fs = Qo, ps = fs;
function vs(e) {
  return e == null ? "" : ps(e);
}
var hs = vs, ms = hs, gs = 0;
function bs(e) {
  var t = ++gs;
  return ms(e) + t;
}
var pt = bs;
const tr = {
  "c-input": "_c-input_lqmp1_1",
  "c-input__box": "_c-input__box_lqmp1_24",
  "c-input__check": "_c-input__check_lqmp1_38",
  "c-input__icon": "_c-input__icon_lqmp1_38"
}, ei = ct(({
  id: e,
  name: t,
  type: r,
  label: n,
  state: i,
  value: a,
  addClass: c,
  isDisabled: s,
  defaultChecked: l,
  onChange: f,
  __TYPE: d,
  inherit: u,
  ...v
}, h) => {
  const y = le(() => e || pt(`ui-${r}`), [e, r]), g = Object.freeze({
    right: /* @__PURE__ */ p("path", {
      id: "done_all",
      d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z"
    }),
    wrong: /* @__PURE__ */ p("path", {
      id: "close",
      d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
    }),
    normal: r === "checkbox" ? /* @__PURE__ */ p("path", {
      id: "check",
      d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
    }) : null
  }), x = ({
    target: E
  }) => {
    if (!!f) {
      if (E.checked) {
        f({
          id: E.id,
          value: E.value
        });
        return;
      }
      f({
        id: E.id,
        value: ""
      });
    }
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: y,
    className: `${tr["c-input"]} u-flex ${c != null ? c : ""}`,
    "data-state": i,
    "data-type": r,
    "data-element": d,
    ...!u && {
      ...v
    },
    children: [/* @__PURE__ */ C("div", {
      className: tr["c-input__box"],
      children: [/* @__PURE__ */ p("input", {
        id: y,
        ref: h,
        type: r,
        name: t,
        value: a,
        "data-state": i,
        className: tr["c-input__check"],
        onChange: x,
        ...s && {
          disabled: !0
        },
        ...u && {
          ...v
        },
        ...l && {
          checked: l
        }
      }), /* @__PURE__ */ p("div", {
        className: tr["c-input__icon"],
        children: g[i] && /* @__PURE__ */ p(we, {
          children: /* @__PURE__ */ p("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            children: g[i]
          })
        })
      })]
    }), /* @__PURE__ */ p("span", {
      className: tr["c-input__label"],
      children: n
    })]
  });
});
ei.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
ei.propTypes = {
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
  __TYPE: pe("CheckBox")
};
const ys = ({
  legend: e,
  children: t,
  onChecked: r,
  addClass: n
}) => {
  const [i, a] = X([]), c = H(), s = (u) => {
    c.current = u || "";
  }, l = (u) => c.current === "radio" ? [{
    ...u
  }] : i.filter((h) => h.id === u.id).length ? [...i.filter((h) => h.id !== u.id)] : [...i, {
    ...u
  }], f = (u) => {
    const v = l(u);
    r && r(v), a(v);
  }, d = ye.map(t, (u) => qe(u) ? u.props.__TYPE === "CheckBox" ? (u.props.type && s(u.props.type), be(u, {
    ...u.props,
    onChange: f
  })) : u : null);
  return /* @__PURE__ */ C("fieldset", {
    ...n && {
      className: `${n}`
    },
    children: [/* @__PURE__ */ p("legend", {
      children: e
    }), /* @__PURE__ */ p("div", {
      className: "u-flow",
      children: je(d, ["CheckBox"])
    })]
  });
};
ys.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  legend: o.exports.string,
  onChecked: o.exports.func,
  addClass: o.exports.string
};
const xs = "_col_wu095_1", _s = {
  col: xs
}, ws = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ p("div", {
  ref: r,
  className: `${_s.col} ${e != null ? e : ""}`,
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
}) => /* @__PURE__ */ p("section", {
  className: `${Es["c-content"]} animate__animated animate__fadeInDown animate__faster ${t != null ? t : ""}`,
  ...r,
  children: e
});
Ts.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string
};
const Br = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Wt(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function In(e) {
  return "nodeType" in e;
}
function Be(e) {
  var t, r;
  return e ? Wt(e) ? e : In(e) && (t = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? t : window : window;
}
function kn(e) {
  const {
    Document: t
  } = Be(e);
  return e instanceof t;
}
function mr(e) {
  return Wt(e) ? !1 : e instanceof Be(e).HTMLElement;
}
function Os(e) {
  return e instanceof Be(e).SVGElement;
}
function Ut(e) {
  return e ? Wt(e) ? e.document : In(e) ? kn(e) ? e : mr(e) ? e.ownerDocument : document : document : document;
}
const ft = Br ? Yo : G;
function Mn(e) {
  const t = H(e);
  return ft(() => {
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
function ur(e, t = [e]) {
  const r = H(e);
  return ft(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function gr(e, t) {
  const r = H();
  return le(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    [...t]
  );
}
function Ir(e) {
  const t = Mn(e), r = H(null), n = Ce(
    (i) => {
      i !== r.current && (t == null || t(i, r.current)), r.current = i;
    },
    []
  );
  return [r, n];
}
function wn(e) {
  const t = H();
  return G(() => {
    t.current = e;
  }, [e]), t.current;
}
let cn = {};
function Vr(e, t) {
  return le(() => {
    if (t)
      return t;
    const r = cn[e] == null ? 0 : cn[e] + 1;
    return cn[e] = r, `${e}-${r}`;
  }, [e, t]);
}
function ti(e) {
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
const Ft = /* @__PURE__ */ ti(1), kr = /* @__PURE__ */ ti(-1);
function Rs(e) {
  return "clientX" in e && "clientY" in e;
}
function ri(e) {
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
function En(e) {
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
const Tn = /* @__PURE__ */ Object.freeze({
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
        return [Tn.Translate.toString(e), Tn.Scale.toString(e)].join(" ");
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
}), mo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function $s(e) {
  return e.matches(mo) ? e : e.querySelector(mo);
}
const Ds = {
  display: "none"
};
function Cs(e) {
  let {
    id: t,
    value: r
  } = e;
  return /* @__PURE__ */ p("div", {
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
  return /* @__PURE__ */ p("div", {
    id: t,
    style: As,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0,
    children: r
  });
}
function Is() {
  const [e, t] = X("");
  return {
    announce: Ce((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const ni = /* @__PURE__ */ Ze(null);
function ks(e) {
  const t = xe(ni);
  G(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Ms() {
  const [e] = X(() => /* @__PURE__ */ new Set()), t = Ce((n) => (e.add(n), () => e.delete(n)), [e]);
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
const Ls = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Fs = {
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
function js(e) {
  let {
    announcements: t = Fs,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = Ls
  } = e;
  const {
    announce: a,
    announcement: c
  } = Is(), s = Vr("DndLiveRegion"), [l, f] = X(!1);
  if (G(() => {
    f(!0);
  }, []), ks(le(() => ({
    onDragStart(u) {
      let {
        active: v
      } = u;
      a(t.onDragStart({
        active: v
      }));
    },
    onDragMove(u) {
      let {
        active: v,
        over: h
      } = u;
      t.onDragMove && a(t.onDragMove({
        active: v,
        over: h
      }));
    },
    onDragOver(u) {
      let {
        active: v,
        over: h
      } = u;
      a(t.onDragOver({
        active: v,
        over: h
      }));
    },
    onDragEnd(u) {
      let {
        active: v,
        over: h
      } = u;
      a(t.onDragEnd({
        active: v,
        over: h
      }));
    },
    onDragCancel(u) {
      let {
        active: v,
        over: h
      } = u;
      a(t.onDragCancel({
        active: v,
        over: h
      }));
    }
  }), [a, t])), !l)
    return null;
  const d = /* @__PURE__ */ C(at, {
    children: [/* @__PURE__ */ p(Cs, {
      id: n,
      value: i.draggable
    }), /* @__PURE__ */ p(Ns, {
      id: s,
      announcement: c
    })]
  });
  return r ? Wo(d, r) : d;
}
var Te;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Te || (Te = {}));
function Mr() {
}
function ln(e, t) {
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
  return r - n;
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
function oi(e, t) {
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
      const f = go(l), d = i.reduce((v, h, y) => v + Vs(f[y], h), 0), u = Number((d / 4).toFixed(4));
      a.push({
        id: s,
        data: {
          droppableContainer: c,
          value: u
        }
      });
    }
  }
  return a.sort(qs);
};
function Ws(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), c = i - n, s = a - r;
  if (n < i && r < a) {
    const l = t.width * t.height, f = e.width * e.height, d = c * s, u = d / (l + f - d);
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
  return i.sort(Ys);
};
function Hs(e, t, r) {
  return {
    ...e,
    scaleX: t && r ? t.width / r.width : 1,
    scaleY: t && r ? t.height / r.height : 1
  };
}
function ii(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : rt;
}
function Gs(e) {
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
const Zs = /* @__PURE__ */ Gs(1);
function Ks(e) {
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
function Xs(e, t, r) {
  const n = Ks(t);
  if (!n)
    return e;
  const {
    scaleX: i,
    scaleY: a,
    x: c,
    y: s
  } = n, l = e.left - c - (1 - i) * parseFloat(r), f = e.top - s - (1 - a) * parseFloat(r.slice(r.indexOf(" ") + 1)), d = i ? e.width / i : e.width, u = a ? e.height / a : e.height;
  return {
    width: d,
    height: u,
    top: f,
    right: l + d,
    bottom: f + u,
    left: l
  };
}
const Js = {
  ignoreTransform: !1
};
function br(e, t) {
  t === void 0 && (t = Js);
  let r = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      getComputedStyle: f
    } = Be(e), {
      transform: d,
      transformOrigin: u
    } = f(e);
    d && (r = Xs(r, d, u));
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
function bo(e) {
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
function Ln(e, t) {
  const r = [];
  function n(i) {
    if (t != null && r.length >= t || !i)
      return r;
    if (kn(i) && i.scrollingElement != null && !r.includes(i.scrollingElement))
      return r.push(i.scrollingElement), r;
    if (!mr(i) || Os(i) || r.includes(i))
      return r;
    const {
      getComputedStyle: a
    } = Be(i), c = a(i);
    return i !== e && tc(i, c) && r.push(i), ec(i, c) ? r : n(i.parentNode);
  }
  return e ? n(e) : r;
}
function ai(e) {
  const [t] = Ln(e, 1);
  return t != null ? t : null;
}
function un(e) {
  return !Br || !e ? null : Wt(e) ? e : In(e) ? kn(e) || e === Ut(e).scrollingElement ? window : mr(e) ? e : null : null;
}
function si(e) {
  return Wt(e) ? e.scrollX : e.scrollLeft;
}
function ci(e) {
  return Wt(e) ? e.scrollY : e.scrollTop;
}
function On(e) {
  return {
    x: si(e),
    y: ci(e)
  };
}
var Re;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Re || (Re = {}));
function li(e) {
  return !Br || !e ? !1 : e === document.scrollingElement;
}
function ui(e) {
  const t = {
    x: 0,
    y: 0
  }, r = li(e) ? {
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
    isTop: f,
    isBottom: d,
    isLeft: u,
    isRight: v
  } = ui(e), h = {
    x: 0,
    y: 0
  }, y = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !f && a <= t.top + g.height ? (h.y = Re.Backward, y.y = n * Math.abs((t.top + g.height - a) / g.height)) : !d && l >= t.bottom - g.height && (h.y = Re.Forward, y.y = n * Math.abs((t.bottom - g.height - l) / g.height)), !v && s >= t.right - g.width ? (h.x = Re.Forward, y.x = n * Math.abs((t.right - g.width - s) / g.width)) : !u && c <= t.left + g.width && (h.x = Re.Backward, y.x = n * Math.abs((t.left + g.width - c) / g.width)), {
    direction: h,
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
function di(e) {
  return e.reduce((t, r) => Ft(t, On(r)), rt);
}
function ic(e) {
  return e.reduce((t, r) => t + si(r), 0);
}
function ac(e) {
  return e.reduce((t, r) => t + ci(r), 0);
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
  !ai(e) || (i <= 0 || a <= 0 || r >= window.innerHeight || n >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const cc = [["x", ["left", "right"], ic], ["y", ["top", "bottom"], ac]];
class Fn {
  constructor(t, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = Ln(r), i = di(n);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, c, s] of cc)
      for (const l of c)
        Object.defineProperty(this, l, {
          get: () => {
            const f = s(n), d = i[a] - f;
            return this.rect[l] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class or {
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
  return e instanceof t ? e : Ut(e);
}
function dn(e, t) {
  const r = Math.abs(e.x), n = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(r ** 2 + n ** 2) > t : "x" in t && "y" in t ? r > t.x && n > t.y : "x" in t ? r > t.x : "y" in t ? n > t.y : !1;
}
var Ue;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ue || (Ue = {}));
function yo(e) {
  e.preventDefault();
}
function uc(e) {
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
}, dc = (e, t) => {
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
    this.props = t, this.listeners = new or(Ut(r)), this.windowListeners = new or(Be(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
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
    if (ri(t)) {
      const {
        active: r,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: a = fi,
        coordinateGetter: c = dc,
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
        collisionRect: f
      } = n.current, d = f ? {
        x: f.left,
        y: f.top
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const u = c(t, {
        active: r,
        context: n.current,
        currentCoordinates: d
      });
      if (u) {
        const v = kr(u, d), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: y
        } = n.current;
        for (const g of y) {
          const x = t.code, {
            isTop: E,
            isRight: P,
            isLeft: $,
            isBottom: D,
            maxScroll: b,
            minScroll: w
          } = ui(g), _ = oc(g), R = {
            x: Math.min(x === oe.Right ? _.right - _.width / 2 : _.right, Math.max(x === oe.Right ? _.left : _.left + _.width / 2, u.x)),
            y: Math.min(x === oe.Down ? _.bottom - _.height / 2 : _.bottom, Math.max(x === oe.Down ? _.top : _.top + _.height / 2, u.y))
          }, N = x === oe.Right && !P || x === oe.Left && !$, F = x === oe.Down && !D || x === oe.Up && !E;
          if (N && R.x !== u.x) {
            const M = g.scrollLeft + v.x, J = x === oe.Right && M <= b.x || x === oe.Left && M >= w.x;
            if (J && !v.y) {
              g.scrollTo({
                left: M,
                behavior: s
              });
              return;
            }
            J ? h.x = g.scrollLeft - M : h.x = x === oe.Right ? g.scrollLeft - b.x : g.scrollLeft - w.x, h.x && g.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (F && R.y !== u.y) {
            const M = g.scrollTop + v.y, J = x === oe.Down && M <= b.y || x === oe.Up && M >= w.y;
            if (J && !v.x) {
              g.scrollTo({
                top: M,
                behavior: s
              });
              return;
            }
            J ? h.y = g.scrollTop - M : h.y = x === oe.Down ? g.scrollTop - b.y : g.scrollTop - w.y, h.y && g.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Ft(kr(u, this.referenceCoordinates), h));
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
function xo(e) {
  return Boolean(e && "distance" in e);
}
function _o(e) {
  return Boolean(e && "delay" in e);
}
class Bn {
  constructor(t, r, n) {
    var i;
    n === void 0 && (n = lc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = r;
    const {
      event: a
    } = t, {
      target: c
    } = a;
    this.props = t, this.events = r, this.document = Ut(c), this.documentListeners = new or(this.document), this.listeners = new or(n), this.windowListeners = new or(Be(c)), this.initialCoordinates = (i = En(a)) != null ? i : rt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(Ue.Resize, this.handleCancel), this.windowListeners.add(Ue.DragStart, yo), this.windowListeners.add(Ue.VisibilityChange, this.handleCancel), this.windowListeners.add(Ue.ContextMenu, yo), this.documentListeners.add(Ue.Keydown, this.handleKeydown), r) {
      if (xo(r))
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
    const l = (r = En(t)) != null ? r : rt, f = kr(i, l);
    if (!n && s) {
      if (_o(s))
        return dn(f, s.tolerance) ? this.handleCancel() : void 0;
      if (xo(s))
        return s.tolerance != null && dn(f, s.tolerance) ? this.handleCancel() : dn(f, s.distance) ? this.handleStart() : void 0;
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
const fc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class pi extends Bn {
  constructor(t) {
    const {
      event: r
    } = t, n = Ut(r.target);
    super(t, fc, n);
  }
}
pi.activators = [{
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
const pc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Sn;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Sn || (Sn = {}));
class vi extends Bn {
  constructor(t) {
    super(t, pc, Ut(t.event.target));
  }
}
vi.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    return r.button === Sn.RightClick ? !1 : (n == null || n({
      event: r
    }), !0);
  }
}];
const fn = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class hi extends Bn {
  constructor(t) {
    super(t, fn);
  }
  static setup() {
    return window.addEventListener(fn.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(fn.move.name, t);
    };
    function t() {
    }
  }
}
hi.activators = [{
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
var ir;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(ir || (ir = {}));
var Lr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Lr || (Lr = {}));
function vc(e) {
  let {
    acceleration: t,
    activator: r = ir.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: a,
    interval: c = 5,
    order: s = Lr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: f,
    scrollableAncestorRects: d,
    delta: u,
    threshold: v
  } = e;
  const h = mc({
    delta: u,
    disabled: !a
  }), [y, g] = Ss(), x = H({
    x: 0,
    y: 0
  }), E = H({
    x: 0,
    y: 0
  }), P = le(() => {
    switch (r) {
      case ir.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case ir.DraggableRect:
        return i;
    }
  }, [r, i, l]), $ = H(null), D = Ce(() => {
    const w = $.current;
    if (!w)
      return;
    const _ = x.current.x * E.current.x, R = x.current.y * E.current.y;
    w.scrollBy(_, R);
  }, []), b = le(() => s === Lr.TreeOrder ? [...f].reverse() : f, [s, f]);
  G(
    () => {
      if (!a || !f.length || !P) {
        g();
        return;
      }
      for (const w of b) {
        if ((n == null ? void 0 : n(w)) === !1)
          continue;
        const _ = f.indexOf(w), R = d[_];
        if (!R)
          continue;
        const {
          direction: N,
          speed: F
        } = nc(w, R, P, t, v);
        for (const M of ["x", "y"])
          h[M][N[M]] || (F[M] = 0, N[M] = 0);
        if (F.x > 0 || F.y > 0) {
          g(), $.current = w, y(D, c), x.current = F, E.current = N;
          return;
        }
      }
      x.current = {
        x: 0,
        y: 0
      }, E.current = {
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
      y,
      f,
      b,
      d,
      JSON.stringify(v)
    ]
  );
}
const hc = {
  x: {
    [Re.Backward]: !1,
    [Re.Forward]: !1
  },
  y: {
    [Re.Backward]: !1,
    [Re.Forward]: !1
  }
};
function mc(e) {
  let {
    delta: t,
    disabled: r
  } = e;
  const n = wn(t);
  return gr((i) => {
    if (r || !n || !i)
      return hc;
    const a = {
      x: Math.sign(t.x - n.x),
      y: Math.sign(t.y - n.y)
    };
    return {
      x: {
        [Re.Backward]: i.x[Re.Backward] || a.x === -1,
        [Re.Forward]: i.x[Re.Forward] || a.x === 1
      },
      y: {
        [Re.Backward]: i.y[Re.Backward] || a.y === -1,
        [Re.Forward]: i.y[Re.Forward] || a.y === 1
      }
    };
  }, [r, t, n]);
}
function gc(e, t) {
  const r = t !== null ? e.get(t) : void 0, n = r ? r.node.current : null;
  return gr((i) => {
    var a;
    return t === null ? null : (a = n != null ? n : i) != null ? a : null;
  }, [n, t]);
}
function bc(e, t) {
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
var dr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(dr || (dr = {}));
var Rn;
(function(e) {
  e.Optimized = "optimized";
})(Rn || (Rn = {}));
const wo = /* @__PURE__ */ new Map();
function yc(e, t) {
  let {
    dragging: r,
    dependencies: n,
    config: i
  } = t;
  const [a, c] = X(null), s = a != null, {
    frequency: l,
    measure: f,
    strategy: d
  } = i, u = H(e), v = E(), h = ur(v), y = Ce(function(P) {
    P === void 0 && (P = []), !h.current && c(($) => $ ? $.concat(P) : P);
  }, [h]), g = H(null), x = gr((P) => {
    if (v && !r)
      return wo;
    const $ = a;
    if (!P || P === wo || u.current !== e || $ != null) {
      const D = /* @__PURE__ */ new Map();
      for (let b of e) {
        if (!b)
          continue;
        if ($ && $.length > 0 && !$.includes(b.id) && b.rect.current) {
          D.set(b.id, b.rect.current);
          continue;
        }
        const w = b.node.current, _ = w ? new Fn(f(w), w) : null;
        b.rect.current = _, _ && D.set(b.id, _);
      }
      return D;
    }
    return P;
  }, [e, a, r, v, f]);
  return G(() => {
    u.current = e;
  }, [e]), G(
    () => {
      v || requestAnimationFrame(() => y());
    },
    [r, v]
  ), G(() => {
    s && c(null);
  }, [s]), G(
    () => {
      v || typeof l != "number" || g.current !== null || (g.current = setTimeout(() => {
        y(), g.current = null;
      }, l));
    },
    [l, v, y, ...n]
  ), {
    droppableRects: x,
    measureDroppableContainers: y,
    measuringScheduled: s
  };
  function E() {
    switch (d) {
      case dr.Always:
        return !1;
      case dr.BeforeDragging:
        return r;
      default:
        return !r;
    }
  }
}
function mi(e, t) {
  return gr((r) => e ? r || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function xc(e, t) {
  return mi(e, t);
}
function _c(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = Mn(t), i = le(() => {
    if (r || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(n);
  }, [n, r]);
  return G(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function qr(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = Mn(t), i = le(
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
  return G(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function wc(e) {
  return new Fn(br(e), e);
}
function Eo(e, t, r) {
  t === void 0 && (t = wc);
  const [n, i] = Cn(s, null), a = _c({
    callback(l) {
      if (!!e)
        for (const f of l) {
          const {
            type: d,
            target: u
          } = f;
          if (d === "childList" && u instanceof HTMLElement && u.contains(e)) {
            i();
            break;
          }
        }
    }
  }), c = qr({
    callback: i
  });
  return ft(() => {
    i(), e ? (c == null || c.observe(e), a == null || a.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (c == null || c.disconnect(), a == null || a.disconnect());
  }, [e]), n;
  function s(l) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var f;
      return (f = l != null ? l : r) != null ? f : null;
    }
    const d = t(e);
    return JSON.stringify(l) === JSON.stringify(d) ? l : d;
  }
}
function Ec(e) {
  const t = mi(e);
  return ii(e, t);
}
const To = [];
function Tc(e) {
  const t = H(e), r = gr((n) => e ? n && n !== To && e && t.current && e.parentNode === t.current.parentNode ? n : Ln(e) : To, [e]);
  return G(() => {
    t.current = e;
  }, [e]), r;
}
function Oc(e) {
  const [t, r] = X(null), n = H(e), i = Ce((a) => {
    const c = un(a.target);
    !c || r((s) => s ? (s.set(c, On(c)), new Map(s)) : null);
  }, []);
  return G(() => {
    const a = n.current;
    if (e !== a) {
      c(a);
      const s = e.map((l) => {
        const f = un(l);
        return f ? (f.addEventListener("scroll", i, {
          passive: !0
        }), [f, On(f)]) : null;
      }).filter((l) => l != null);
      r(s.length ? new Map(s) : null), n.current = e;
    }
    return () => {
      c(e), c(a);
    };
    function c(s) {
      s.forEach((l) => {
        const f = un(l);
        f == null || f.removeEventListener("scroll", i);
      });
    }
  }, [i, e]), le(() => e.length ? t ? Array.from(t.values()).reduce((a, c) => Ft(a, c), rt) : di(e) : rt, [e, t]);
}
function Oo(e, t) {
  t === void 0 && (t = []);
  const r = H(null);
  return G(
    () => {
      r.current = null;
    },
    t
  ), G(() => {
    const n = e !== rt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? kr(e, r.current) : rt;
}
function Sc(e) {
  G(
    () => {
      if (!Br)
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
const pn = [];
function Pc(e, t) {
  t === void 0 && (t = br);
  const [r] = e, n = gi(r ? Be(r) : null), [i, a] = Cn(s, pn), c = qr({
    callback: a
  });
  return e.length > 0 && i === pn && a(), ft(() => {
    e.length ? e.forEach((l) => c == null ? void 0 : c.observe(l)) : (c == null || c.disconnect(), a());
  }, [e]), i;
  function s() {
    return e.length ? e.map((l) => li(l) ? n : new Fn(t(l), l)) : pn;
  }
}
function $c(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return mr(t) ? t : e;
}
function Dc(e) {
  let {
    measure: t
  } = e;
  const [r, n] = X(null), i = Ce((f) => {
    for (const {
      target: d
    } of f)
      if (mr(d)) {
        n((u) => {
          const v = t(d);
          return u ? {
            ...u,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), a = qr({
    callback: i
  }), c = Ce((f) => {
    const d = $c(f);
    a == null || a.disconnect(), d && (a == null || a.observe(d)), n(d ? t(d) : null);
  }, [t, a]), [s, l] = Ir(c);
  return le(() => ({
    nodeRef: s,
    rect: r,
    setRef: l
  }), [r, s, l]);
}
const Cc = [{
  sensor: pi,
  options: {}
}, {
  sensor: jn,
  options: {}
}], Ac = {
  current: {}
}, Dr = {
  draggable: {
    measure: bo
  },
  droppable: {
    measure: bo,
    strategy: dr.WhileDragging,
    frequency: Rn.Optimized
  },
  dragOverlay: {
    measure: br
  }
};
class ar extends Map {
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
  droppableContainers: /* @__PURE__ */ new ar(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Mr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Dr,
  measureDroppableContainers: Mr,
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
  dispatch: Mr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Mr
}, Yr = /* @__PURE__ */ Ze(Ic), kc = /* @__PURE__ */ Ze(Nc);
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
      containers: new ar()
    }
  };
}
function Lc(e, t) {
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
        element: r
      } = t, {
        id: n
      } = r, i = new ar(e.droppable.containers);
      return i.set(n, r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case Te.SetDroppableDisabled: {
      const {
        id: r,
        key: n,
        disabled: i
      } = t, a = e.droppable.containers.get(r);
      if (!a || n !== a.key)
        return e;
      const c = new ar(e.droppable.containers);
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
    case Te.UnregisterDroppable: {
      const {
        id: r,
        key: n
      } = t, i = e.droppable.containers.get(r);
      if (!i || n !== i.key)
        return e;
      const a = new ar(e.droppable.containers);
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
function Fc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: i
  } = xe(Yr), a = wn(n), c = wn(r == null ? void 0 : r.id);
  return G(() => {
    if (!t && !n && a && c != null) {
      if (!ri(a) || document.activeElement === a.target)
        return;
      const s = i.get(c);
      if (!s)
        return;
      const {
        activatorNode: l,
        node: f
      } = s;
      if (!l.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [l.current, f.current]) {
          if (!d)
            continue;
          const u = $s(d);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, t, i, c, a]), null;
}
function jc(e, t) {
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
        ...Dr.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Dr.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Dr.dragOverlay,
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
  ft(() => {
    if (!c && !s || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !n)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const d = r(f), u = ii(d, n);
    if (c || (u.x = 0), s || (u.y = 0), a.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const v = ai(f);
      v && v.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, c, s, n, r]);
}
const bi = /* @__PURE__ */ Ze({
  ...rt,
  scaleX: 1,
  scaleY: 1
});
var gt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(gt || (gt = {}));
const qc = /* @__PURE__ */ zo(function(t) {
  var r, n, i, a;
  let {
    id: c,
    accessibility: s,
    autoScroll: l = !0,
    children: f,
    sensors: d = Cc,
    collisionDetection: u = Us,
    measuring: v,
    modifiers: h,
    ...y
  } = t;
  const g = Cn(Lc, void 0, Mc), [x, E] = g, [P, $] = Ms(), [D, b] = X(gt.Uninitialized), w = D === gt.Initialized, {
    draggable: {
      active: _,
      nodes: R,
      translate: N
    },
    droppable: {
      containers: F
    }
  } = x, M = _ ? R.get(_) : null, J = H({
    initial: null,
    translated: null
  }), Z = le(() => {
    var ve;
    return _ != null ? {
      id: _,
      data: (ve = M == null ? void 0 : M.data) != null ? ve : Ac,
      rect: J
    } : null;
  }, [_, M]), re = H(null), [de, ie] = X(null), [ee, Ee] = X(null), he = ur(y, Object.values(y)), O = Vr("DndDescribedBy", c), I = le(() => F.getEnabled(), [F]), B = Bc(v), {
    droppableRects: V,
    measureDroppableContainers: j,
    measuringScheduled: W
  } = yc(I, {
    dragging: w,
    dependencies: [N.x, N.y],
    config: B.droppable
  }), L = gc(R, _), Y = le(() => ee ? En(ee) : null, [ee]), z = Tr(), K = xc(L, B.draggable.measure);
  Vc({
    activeNode: _ ? R.get(_) : null,
    config: z.layoutShiftCompensation,
    initialRect: K,
    measure: B.draggable.measure
  });
  const q = Eo(L, B.draggable.measure, K), A = Eo(L ? L.parentElement : null), T = H({
    activatorEvent: null,
    active: null,
    activeNode: L,
    collisionRect: null,
    collisions: null,
    droppableRects: V,
    draggableNodes: R,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: F,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Q = F.getNodeFor((r = T.current.over) == null ? void 0 : r.id), me = Dc({
    measure: B.dragOverlay.measure
  }), Oe = (n = me.nodeRef.current) != null ? n : L, De = w ? (i = me.rect) != null ? i : q : null, ot = Boolean(me.nodeRef.current && me.rect), lt = Ec(ot ? null : q), it = gi(Oe ? Be(Oe) : null), Se = Tc(w ? Q != null ? Q : L : null), Xe = Pc(Se), Je = jc(h, {
    transform: {
      x: N.x - lt.x,
      y: N.y - lt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ee,
    active: Z,
    activeNodeRect: q,
    containerNodeRect: A,
    draggingNodeRect: De,
    over: T.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Se,
    scrollableAncestorRects: Xe,
    windowRect: it
  }), xt = Y ? Ft(Y, N) : null, vt = Oc(Se), _t = Oo(vt), wt = Oo(vt, [q]), Ae = Ft(Je, _t), Qe = De ? Zs(De, Je) : null, ht = Z && Qe ? u({
    active: Z,
    collisionRect: Qe,
    droppableRects: V,
    droppableContainers: I,
    pointerCoordinates: xt
  }) : null, Gt = oi(ht, "id"), [Ye, _r] = X(null), Kr = ot ? Je : Ft(Je, wt), Xr = Hs(Kr, (a = Ye == null ? void 0 : Ye.rect) != null ? a : null, q), wr = Ce(
    (ve, Pe) => {
      let {
        sensor: $e,
        options: et
      } = Pe;
      if (re.current == null)
        return;
      const Ie = R.get(re.current);
      if (!Ie)
        return;
      const ke = ve.nativeEvent, ze = new $e({
        active: re.current,
        activeNode: Ie,
        event: ke,
        options: et,
        context: T,
        onStart(Me) {
          const Et = re.current;
          if (Et == null)
            return;
          const Tt = R.get(Et);
          if (!Tt)
            return;
          const {
            onDragStart: Ot
          } = he.current, Nt = {
            active: {
              id: Et,
              data: Tt.data,
              rect: J
            }
          };
          Kt(() => {
            Ot == null || Ot(Nt), b(gt.Initializing), E({
              type: Te.DragStart,
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
            type: Te.DragMove,
            coordinates: Me
          });
        },
        onEnd: ut(Te.DragEnd),
        onCancel: ut(Te.DragCancel)
      });
      Kt(() => {
        ie(ze), Ee(ve.nativeEvent);
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
            }, Me === Te.DragEnd && typeof Rt == "function" && await Promise.resolve(Rt(St)) && (Me = Te.DragCancel);
          }
          re.current = null, Kt(() => {
            E({
              type: Me
            }), b(gt.Uninitialized), _r(null), ie(null), Ee(null);
            const Rt = Me === Te.DragEnd ? "onDragEnd" : "onDragCancel";
            if (St) {
              const m = he.current[Rt];
              m == null || m(St), P({
                type: Rt,
                event: St
              });
            }
          });
        };
      }
    },
    [R]
  ), Jr = Ce((ve, Pe) => ($e, et) => {
    const Ie = $e.nativeEvent, ke = R.get(et);
    if (re.current !== null || !ke || Ie.dndKit || Ie.defaultPrevented)
      return;
    const ze = {
      active: ke
    };
    ve($e, Pe.options, ze) === !0 && (Ie.dndKit = {
      capturedBy: Pe.sensor
    }, re.current = et, wr($e, Pe));
  }, [R, wr]), Er = bc(d, Jr);
  Sc(d), ft(() => {
    q && D === gt.Initializing && b(gt.Initialized);
  }, [q, D]), G(
    () => {
      const {
        onDragMove: ve
      } = he.current, {
        active: Pe,
        activatorEvent: $e,
        collisions: et,
        over: Ie
      } = T.current;
      if (!Pe || !$e)
        return;
      const ke = {
        active: Pe,
        activatorEvent: $e,
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
  ), G(
    () => {
      const {
        active: ve,
        activatorEvent: Pe,
        collisions: $e,
        droppableContainers: et,
        scrollAdjustedTranslate: Ie
      } = T.current;
      if (!ve || re.current == null || !Pe || !Ie)
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
        activatorEvent: Pe,
        collisions: $e,
        delta: {
          x: Ie.x,
          y: Ie.y
        },
        over: ut
      };
      Kt(() => {
        _r(ut), ke == null || ke(Me), P({
          type: "onDragOver",
          event: Me
        });
      });
    },
    [Gt]
  ), ft(() => {
    T.current = {
      activatorEvent: ee,
      active: Z,
      activeNode: L,
      collisionRect: Qe,
      collisions: ht,
      droppableRects: V,
      draggableNodes: R,
      draggingNode: Oe,
      draggingNodeRect: De,
      droppableContainers: F,
      over: Ye,
      scrollableAncestors: Se,
      scrollAdjustedTranslate: Ae
    }, J.current = {
      initial: De,
      translated: Qe
    };
  }, [Z, L, ht, Qe, R, Oe, De, V, F, Ye, Se, Ae]), vc({
    ...z,
    delta: N,
    draggingRect: Qe,
    pointerCoordinates: xt,
    scrollableAncestors: Se,
    scrollableAncestorRects: Xe
  });
  const Qr = le(() => ({
    active: Z,
    activeNode: L,
    activeNodeRect: q,
    activatorEvent: ee,
    collisions: ht,
    containerNodeRect: A,
    dragOverlay: me,
    draggableNodes: R,
    droppableContainers: F,
    droppableRects: V,
    over: Ye,
    measureDroppableContainers: j,
    scrollableAncestors: Se,
    scrollableAncestorRects: Xe,
    measuringConfiguration: B,
    measuringScheduled: W,
    windowRect: it
  }), [Z, L, q, ee, ht, A, me, R, F, V, Ye, j, Se, Xe, B, W, it]), Zt = le(() => ({
    activatorEvent: ee,
    activators: Er,
    active: Z,
    activeNodeRect: q,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: E,
    draggableNodes: R,
    over: Ye,
    measureDroppableContainers: j
  }), [ee, Er, Z, q, E, O, R, Ye, j]);
  return /* @__PURE__ */ C(ni.Provider, {
    value: $,
    children: [/* @__PURE__ */ C(Yr.Provider, {
      value: Zt,
      children: [/* @__PURE__ */ p(kc.Provider, {
        value: Qr,
        children: /* @__PURE__ */ p(bi.Provider, {
          value: Xr,
          children: f
        })
      }), /* @__PURE__ */ p(Fc, {
        disabled: (s == null ? void 0 : s.restoreFocus) === !1
      })]
    }), /* @__PURE__ */ p(js, {
      ...s,
      hiddenTextDescribedById: O
    })]
  });
  function Tr() {
    const ve = (de == null ? void 0 : de.autoScrollEnabled) === !1, Pe = typeof l == "object" ? l.enabled === !1 : l === !1, $e = w && !ve && !Pe;
    return typeof l == "object" ? {
      ...l,
      enabled: $e
    } : {
      enabled: $e
    };
  }
}), Yc = /* @__PURE__ */ Ze(null), So = "button", zc = "Droppable";
function Wc(e) {
  let {
    id: t,
    data: r,
    disabled: n = !1,
    attributes: i
  } = e;
  const a = Vr(zc), {
    activators: c,
    activatorEvent: s,
    active: l,
    activeNodeRect: f,
    ariaDescribedById: d,
    draggableNodes: u,
    over: v
  } = xe(Yr), {
    role: h = So,
    roleDescription: y = "draggable",
    tabIndex: g = 0
  } = i != null ? i : {}, x = (l == null ? void 0 : l.id) === t, E = xe(x ? bi : Yc), [P, $] = Ir(), [D, b] = Ir(), w = Rc(c, t), _ = ur(r);
  ft(
    () => (u.set(t, {
      id: t,
      key: a,
      node: P,
      activatorNode: D,
      data: _
    }), () => {
      const N = u.get(t);
      N && N.key === a && u.delete(t);
    }),
    [u, t]
  );
  const R = le(() => ({
    role: h,
    tabIndex: g,
    "aria-disabled": n,
    "aria-pressed": x && h === So ? !0 : void 0,
    "aria-roledescription": y,
    "aria-describedby": d.draggable
  }), [n, h, g, x, y, d.draggable]);
  return {
    active: l,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: R,
    isDragging: x,
    listeners: n ? void 0 : w,
    node: P,
    over: v,
    setNodeRef: $,
    setActivatorNodeRef: b,
    transform: E
  };
}
const Uc = "Droppable", Hc = {
  timeout: 25
};
function yi(e) {
  let {
    data: t,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: i
  } = e;
  const a = Vr(Uc), {
    active: c,
    dispatch: s,
    over: l,
    measureDroppableContainers: f
  } = xe(Yr), d = H({
    disabled: r
  }), u = H(!1), v = H(null), h = H(null), {
    disabled: y,
    updateMeasurementsFor: g,
    timeout: x
  } = {
    ...Hc,
    ...i
  }, E = ur(g != null ? g : n), P = Ce(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(E.current) ? E.current : [E.current]), h.current = null;
      }, x);
    },
    [x]
  ), $ = qr({
    callback: P,
    disabled: y || !c
  }), D = Ce((R, N) => {
    !$ || (N && ($.unobserve(N), u.current = !1), R && $.observe(R));
  }, [$]), [b, w] = Ir(D), _ = ur(t);
  return G(() => {
    !$ || !b.current || ($.disconnect(), u.current = !1, $.observe(b.current));
  }, [b, $]), ft(
    () => (s({
      type: Te.RegisterDroppable,
      element: {
        id: n,
        key: a,
        disabled: r,
        node: b,
        rect: v,
        data: _
      }
    }), () => s({
      type: Te.UnregisterDroppable,
      key: a,
      id: n
    })),
    [n]
  ), G(() => {
    r !== d.current.disabled && (s({
      type: Te.SetDroppableDisabled,
      id: n,
      key: a,
      disabled: r
    }), d.current.disabled = r);
  }, [n, a, r, s]), {
    active: c,
    rect: v,
    isOver: (l == null ? void 0 : l.id) === n,
    node: b,
    over: l,
    setNodeRef: w
  };
}
const Gc = ({
  transform: e
}) => ({
  ...e,
  y: 0
}), Zc = ({
  transform: e
}) => ({
  ...e,
  x: 0
}), Kc = [oe.Down, oe.Right, oe.Up, oe.Left], Xc = (e, { context: { active: t, droppableRects: r, droppableContainers: n, collisionRect: i } }) => {
  var a;
  if (Kc.includes(e.code)) {
    e.preventDefault();
    const c = 20;
    if (!t || !i)
      return;
    const s = [];
    n.getEnabled().forEach((d) => {
      if (!d || (d == null ? void 0 : d.disabled))
        return;
      const u = r.get(d.id);
      if (!!u)
        switch (e.code) {
          case oe.Down:
            i.top < u.top && s.push(d);
            break;
          case oe.Up:
            i.top > u.top + c && s.push(d);
            break;
          case oe.Left:
            i.left >= u.left + u.width && s.push(d);
            break;
          case oe.Right:
            i.left + i.width <= u.left && s.push(d);
            break;
        }
    });
    const l = zs({
      active: t,
      collisionRect: i,
      droppableRects: r,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = oi(l, "id");
    if (f != null) {
      const d = n.get(f), u = d == null ? void 0 : d.node.current, v = d == null ? void 0 : d.rect.current;
      if (u && v)
        return ((a = d.data.current) == null ? void 0 : a.type) === "container" ? {
          x: v.left,
          y: v.top + c
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, xi = Ze(), nr = (e, t) => ye.map(e, (r) => {
  var n;
  if (!!qe(r) && !!r.props) {
    if (((n = r == null ? void 0 : r.props) == null ? void 0 : n.__TYPE) === t)
      return r;
    if (r.props.children)
      return nr(r.props.children, t);
  }
}), Jc = {
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
  const [f, d] = X([]), [u, v] = X(null), [h, y] = X(() => g());
  function g() {
    return [...nr(e, "droppable"), ...nr(e, "general-draggable")].reduce((w, _) => ({
      ...w,
      [_.props.id]: _.props.children ? [...nr(_.props.children, "draggable").map((R) => R.props.id)] : []
    }), {});
  }
  const x = Object.freeze({
    restrictToVerticalAxis: Zc,
    restrictToHorizontalAxis: Gc
  }), E = Bs(ln(vi), ln(hi), ln(jn, {
    coordinateGetter: Xc
  })), P = (w, _) => {
    const R = Object.keys(h).pop();
    let N;
    R !== w.id && w.data.current.validate.includes(_) ? N = [...f.filter((F) => F !== _), _] : N = [...f.filter((F) => F !== _)], r && r([...N]), d(N);
  }, $ = (w) => w in h ? w : Object.keys(h).find((_) => h[_].includes(w)), D = ({
    active: w,
    over: _
  }) => {
    if (!_)
      return;
    v(null);
    const R = Object.keys(h).pop();
    R !== _.id && P(_, w.id);
    const N = $(_.id), F = $(w.id);
    if (F !== N) {
      if (t)
        return y((M) => ({
          ...M,
          [F]: M[F].filter((J) => J !== w.id),
          [N]: [...M[N], w.id]
        }));
      y((M) => ({
        ...M,
        [N]: N === R ? [...M[N], w.id] : [w.id],
        [F]: N === R ? M[F].filter((J) => J !== w.id) : [...M[F].filter((J) => J !== w.id), ...M[N]]
      }));
    }
  }, b = (w) => ye.map(w, (_) => {
    if (!_.props)
      return _;
    if (_.props.__TYPE !== "draggable")
      return _.props.id in h && h[_.props.id].length > 0 ? be(_, {
        ..._.props
      }, [...h[_.props.id].map((R) => nr(e, "draggable").filter((N) => N.props.id === R)).flat()]) : _.props.children ? be(_, {
        ..._.props,
        children: b(_.props.children)
      }) : _;
  });
  return G(() => {
    i && y(() => g());
  }, [i]), /* @__PURE__ */ p(xi.Provider, {
    value: {
      listId: f,
      propValidate: a,
      validate: n,
      isDragging: u
    },
    children: /* @__PURE__ */ p(qc, {
      sensors: E,
      accessibility: {
        announcements: s
      },
      onDragStart: ({
        active: w
      }) => v(w.id),
      onDragEnd: D,
      ...!!l && {
        onDragMove: l
      },
      onDragCancel: () => v(null),
      ...c && {
        modifiers: [x[c]]
      },
      children: b(e)
    })
  });
};
_i.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: Jc
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
const Qc = "_pop_1elvh_1", jt = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: Qc
}, wi = ({
  children: e,
  id: t,
  addClass: r,
  dragging: n,
  label: i,
  attribute: a,
  disabledDefaultAttributes: c,
  element: s,
  __TYPE: l,
  ...f
}) => {
  const d = s || "div", {
    listId: u,
    propValidate: v,
    validate: h,
    isDragging: y
  } = xe(xi), {
    attributes: g,
    listeners: x,
    setNodeRef: E,
    transform: P
  } = Wc({
    id: t,
    disabled: h,
    data: {
      label: i
    },
    attributes: a
  });
  return /* @__PURE__ */ p(d, {
    id: t,
    ref: E,
    "data-type": l,
    className: `${jt["c-draggable"]} ${y === t ? `${n} ${jt["is-draggable--active-animation"]}` : ""} ${r != null ? r : ""}`,
    style: {
      transform: Tn.Translate.toString(P)
    },
    ...h && {
      [v]: !!u.includes(t)
    },
    ...!c && {
      ...g
    },
    ...x,
    ...f,
    children: e
  });
};
wi.defaultProps = {
  __TYPE: "draggable",
  dragging: jt["c-draggable--active"],
  disabledDefaultAttributes: !1
};
wi.propTypes = {
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
  __TYPE: pe("draggable")
};
const Ei = ({
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
  const f = c || "div", {
    isOver: d,
    setNodeRef: u
  } = yi({
    id: t,
    data: {
      validate: r,
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(f, {
    ref: u,
    "data-type": s,
    className: `${jt["c-droppable"]} ${d && i && i} ${n != null ? n : ""}`,
    ...l,
    children: e
  });
};
Ei.defaultProps = {
  __TYPE: "droppable",
  over: jt["c-droppable--active"]
};
Ei.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]),
  id: o.exports.string.isRequired,
  validate: o.exports.array.isRequired,
  addClass: o.exports.string,
  over: o.exports.string,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: pe("droppable")
};
const Ti = ({
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
  } = yi({
    id: r,
    data: {
      label: n,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(s, {
    id: r,
    ref: l,
    "data-type": a,
    className: `${jt["c-droppable"]} ${t != null ? t : ""}`,
    ...c,
    children: e
  });
};
Ti.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  id: o.exports.string.isRequired,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: pe("general-draggable")
};
Ti.defaultProps = {
  __TYPE: "general-draggable",
  id: pt("unique-id-general-"),
  label: "contendor inicial"
};
const Ju = ({
  ...e
}) => /* @__PURE__ */ p("span", {
  id: "hc_extension_svg_filters",
  ...e,
  children: /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: "0",
    children: /* @__PURE__ */ C("defs", {
      children: [/* @__PURE__ */ p("filter", {
        id: "hc_extension_off",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "0 1"
          })]
        })
      }), /* @__PURE__ */ p("filter", {
        id: "hc_extension_highcontrast",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            exponent: "3.0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            exponent: "3.0"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "gamma",
            exponent: "3.0"
          })]
        })
      }), /* @__PURE__ */ p("filter", {
        id: "hc_extension_highcontrast_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ p("feFuncB", {
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
        children: [/* @__PURE__ */ p("feColorMatrix", {
          type: "matrix",
          values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
        }), /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            exponent: "3"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            exponent: "3"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "gamma",
            exponent: "3"
          })]
        })]
      }), /* @__PURE__ */ p("filter", {
        id: "hc_extension_grayscale_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "gamma",
            exponent: "0.33"
          })]
        })
      }), /* @__PURE__ */ p("filter", {
        id: "hc_extension_invert",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncB", {
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
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "1 0"
          })]
        }), /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            exponent: "1.7"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            exponent: "1.7"
          }), /* @__PURE__ */ p("feFuncB", {
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
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          })]
        }), /* @__PURE__ */ p("feColorMatrix", {
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
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "1 0"
          })]
        }), /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ p("feFuncB", {
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
        children: [/* @__PURE__ */ p("feColorMatrix", {
          type: "matrix",
          values: "                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ C("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "0.97 0.52"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "1 0.03"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "0.98 0.06"
          }), /* @__PURE__ */ p("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ p("feBlend", {
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
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncB", {
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
        children: [/* @__PURE__ */ p("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ C("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "0.09 0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "1 0.16"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ p("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ p("feBlend", {
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
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncB", {
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
        children: [/* @__PURE__ */ p("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ C("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "0.99 0.16"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ p("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ p("feBlend", {
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
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncB", {
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
        children: [/* @__PURE__ */ p("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ C("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "0.98 0"
          }), /* @__PURE__ */ p("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ p("feBlend", {
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
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ C("feComponentTransfer", {
          children: [/* @__PURE__ */ p("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ p("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          })]
        })]
      })]
    })
  })
}), Ro = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, Oi = ({
  url: e,
  alt: t,
  title: r,
  width: n,
  addClass: i,
  noCaption: a,
  ...c
}) => {
  const [s, l] = X(!1), f = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, d = (v) => l(v), u = s ? f : `${e}`;
  return /* @__PURE__ */ C("figure", {
    className: `${Ro["c-image"]} ${i != null ? i : ""}`,
    ...n && {
      style: {
        maxWidth: `${n}px`
      }
    },
    children: [/* @__PURE__ */ p("img", {
      src: u,
      onError: d,
      alt: t,
      ...c
    }), !a && /* @__PURE__ */ p("figcaption", {
      className: Ro["c-image__figcaption"],
      children: /* @__PURE__ */ C("p", {
        children: [/* @__PURE__ */ C("strong", {
          children: [r, "\xA0"]
        }), t]
      })
    })]
  });
};
Oi.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
Oi.propTypes = {
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
}, Si = ct(({
  id: e,
  type: t,
  value: r,
  placeholder: n,
  label: i,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  isReadOnly: f,
  onValue: d
}, u) => {
  const v = le(() => e || pt("c-input-"), [e]), h = ({
    target: y
  }) => {
    d && d({
      id: v,
      value: y.value
    });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ C("label", {
    htmlFor: v,
    className: `${fr["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ p("input", {
      id: v,
      ref: u,
      type: t,
      name: v,
      value: r,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: h,
      className: fr["c-input"],
      ...f && {
        readOnly: f,
        "aria-readonly": f
      }
    })]
  }) : null;
});
Si.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Si.propTypes = {
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
  __TYPE: pe("Input")
};
const el = ({
  children: e,
  onAllValue: t
}) => {
  const [r, n] = X([]), i = (s) => n([...r.filter((l) => l.id !== s.id), {
    ...s
  }]);
  G(() => {
    t && t(r);
  }, [r, t]);
  const a = (s, l, f) => ye.toArray(s).map((d) => d.props.__TYPE === l ? be(d, {
    ...d.props,
    ...f
  }) : d);
  return ye.map(e, (s) => {
    var l, f;
    return qe(s) ? ((l = s == null ? void 0 : s.props) == null ? void 0 : l.__TYPE) === "InputStyle" ? be(s, {
      ...s.props,
      children: a(s.props.children, "Input", {
        onValue: i
      })
    }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? be(s, {
      ...s.props,
      onValue: i
    }) : s : null;
  });
};
el.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllValue: o.exports.func
};
const Ri = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ p("div", {
  className: `${fr["c-input__wrapper-style"]} ${t != null ? t : ""}`,
  children: je(e, ["InputLeftAddon", "InputRightAddon", "Input"])
});
Ri.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: pe("InputStyle")
};
Ri.defaultProps = {
  __TYPE: "InputStyle"
};
const Pi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ p("div", {
  className: `${fr["c-input__left-addon"]} ${t != null ? t : ""}`,
  children: e
});
Pi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: pe("InputLeftAddon")
};
Pi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const $i = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ p("div", {
  className: `${fr["c-input__right-addon"]} ${t != null ? t : ""}`,
  children: e
});
$i.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: pe("InputRightAddon")
};
$i.defaultProps = {
  __TYPE: "InputRightAddon"
};
const tl = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, rl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ p("kbd", {
  className: `${tl["c-kbd"]} ${t != null ? t : ""}`,
  ...r,
  children: e
});
rl.propTypes = {
  children: o.exports.string,
  addClass: o.exports.string
};
const Di = ({
  children: e,
  link: t,
  addClass: r,
  isExternal: n,
  label: i,
  ...a
}) => /* @__PURE__ */ p("a", {
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
Di.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Di.propTypes = {
  children: o.exports.oneOfType([o.exports.string, o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  link: o.exports.string,
  isExternal: o.exports.bool,
  label: o.exports.string.isRequired
};
const Ci = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, nl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ p("ul", {
  className: `${Ci["c-List"]} ${t != null ? t : ""}`,
  ...r,
  children: je(e, ["ListItem"])
});
nl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const Ai = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = ye.map(e, (a) => {
    var c;
    return ((c = a == null ? void 0 : a.props) == null ? void 0 : c.__TYPE) === "Icon" ? be(a, {
      ...a.props,
      addClass: Ci["c-list-item__icon"]
    }) : a;
  });
  return /* @__PURE__ */ p("li", {
    ...t && {
      className: `${t}`
    },
    "data-type": r,
    ...n,
    children: i
  });
};
Ai.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  __TYPE: pe("ListItem")
};
Ai.defaultProps = {
  __TYPE: "ListItem"
};
const ol = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ p("ol", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: je(e, ["ListItem"])
});
ol.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const il = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ p("ul", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: je(e, ["ListItem"])
});
il.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
var vn = function() {
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
function hn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, r = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), n = function() {
    function f(d, u) {
      hn(this, f), this._inertManager = u, this._rootElement = d, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return vn(f, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(u) {
          this._unmanageNode(u.node);
        }, this), this._observer = null, this._rootElement = null, this._managedNodes = null, this._inertManager = null;
      }
    }, {
      key: "_makeSubtreeUnfocusable",
      value: function(u) {
        var v = this;
        c(u, function(x) {
          return v._visitNode(x);
        });
        var h = document.activeElement;
        if (!document.body.contains(u)) {
          for (var y = u, g = void 0; y; ) {
            if (y.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              g = y;
              break;
            }
            y = y.parentNode;
          }
          g && (h = g.activeElement);
        }
        u.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
      }
    }, {
      key: "_visitNode",
      value: function(u) {
        if (u.nodeType === Node.ELEMENT_NODE) {
          var v = u;
          v !== this._rootElement && v.hasAttribute("inert") && this._adoptInertRoot(v), (t.call(v, r) || v.hasAttribute("tabindex")) && this._manageNode(v);
        }
      }
    }, {
      key: "_manageNode",
      value: function(u) {
        var v = this._inertManager.register(u, this);
        this._managedNodes.add(v);
      }
    }, {
      key: "_unmanageNode",
      value: function(u) {
        var v = this._inertManager.deregister(u, this);
        v && this._managedNodes.delete(v);
      }
    }, {
      key: "_unmanageSubtree",
      value: function(u) {
        var v = this;
        c(u, function(h) {
          return v._unmanageNode(h);
        });
      }
    }, {
      key: "_adoptInertRoot",
      value: function(u) {
        var v = this._inertManager.getInertRoot(u);
        v || (this._inertManager.setInert(u, !0), v = this._inertManager.getInertRoot(u)), v.managedNodes.forEach(function(h) {
          this._manageNode(h.node);
        }, this);
      }
    }, {
      key: "_onMutation",
      value: function(u, v) {
        u.forEach(function(h) {
          var y = h.target;
          if (h.type === "childList")
            e.call(h.addedNodes).forEach(function(x) {
              this._makeSubtreeUnfocusable(x);
            }, this), e.call(h.removedNodes).forEach(function(x) {
              this._unmanageSubtree(x);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(y);
            else if (y !== this._rootElement && h.attributeName === "inert" && y.hasAttribute("inert")) {
              this._adoptInertRoot(y);
              var g = this._inertManager.getInertRoot(y);
              this._managedNodes.forEach(function(x) {
                y.contains(x.node) && g._manageNode(x.node);
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
    }]), f;
  }(), i = function() {
    function f(d, u) {
      hn(this, f), this._node = d, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([u]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return vn(f, [{
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
    }]), f;
  }(), a = function() {
    function f(d) {
      if (hn(this, f), !d)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = d, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(d.head || d.body || d.documentElement), d.readyState === "loading" ? d.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return vn(f, [{
      key: "setInert",
      value: function(u, v) {
        if (v) {
          if (this._inertRoots.has(u))
            return;
          var h = new n(u, this);
          if (u.setAttribute("inert", ""), this._inertRoots.set(u, h), !this._document.body.contains(u))
            for (var y = u.parentNode; y; )
              y.nodeType === 11 && s(y), y = y.parentNode;
        } else {
          if (!this._inertRoots.has(u))
            return;
          var g = this._inertRoots.get(u);
          g.destructor(), this._inertRoots.delete(u), u.removeAttribute("inert");
        }
      }
    }, {
      key: "getInertRoot",
      value: function(u) {
        return this._inertRoots.get(u);
      }
    }, {
      key: "register",
      value: function(u, v) {
        var h = this._managedNodes.get(u);
        return h !== void 0 ? h.addInertRoot(v) : h = new i(u, v), this._managedNodes.set(u, h), h;
      }
    }, {
      key: "deregister",
      value: function(u, v) {
        var h = this._managedNodes.get(u);
        return h ? (h.removeInertRoot(v), h.destroyed && this._managedNodes.delete(u), h) : null;
      }
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var u = e.call(this._document.querySelectorAll("[inert]"));
        u.forEach(function(v) {
          this.setInert(v, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
    }, {
      key: "_watchForInert",
      value: function(u, v) {
        var h = this;
        u.forEach(function(y) {
          switch (y.type) {
            case "childList":
              e.call(y.addedNodes).forEach(function(E) {
                if (E.nodeType === Node.ELEMENT_NODE) {
                  var P = e.call(E.querySelectorAll("[inert]"));
                  t.call(E, "[inert]") && P.unshift(E), P.forEach(function($) {
                    this.setInert($, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (y.attributeName !== "inert")
                return;
              var g = y.target, x = g.hasAttribute("inert");
              h.setInert(g, x);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function c(f, d, u) {
    if (f.nodeType == Node.ELEMENT_NODE) {
      var v = f;
      d && d(v);
      var h = v.shadowRoot;
      if (h) {
        c(h, d);
        return;
      }
      if (v.localName == "content") {
        for (var y = v, g = y.getDistributedNodes ? y.getDistributedNodes() : [], x = 0; x < g.length; x++)
          c(g[x], d);
        return;
      }
      if (v.localName == "slot") {
        for (var E = v, P = E.assignedNodes ? E.assignedNodes({ flatten: !0 }) : [], $ = 0; $ < P.length; $++)
          c(P[$], d);
        return;
      }
    }
    for (var D = f.firstChild; D != null; )
      c(D, d), D = D.nextSibling;
  }
  function s(f) {
    if (!f.querySelector("style#inert-style, link#inert-style")) {
      var d = document.createElement("style");
      d.setAttribute("id", "inert-style"), d.textContent = `
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
`, f.appendChild(d);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var l = new a(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      get: function() {
        return this.hasAttribute("inert");
      },
      set: function(d) {
        l.setInert(this, d);
      }
    });
  }
})();
const zr = Ze(), al = Object.freeze({
  ESC: 27
}), Ni = ({
  children: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n
}) => {
  const i = H(), a = (f) => {
    const d = document.querySelector("#root");
    d.inert = f;
  }, c = (f) => {
    (f.keyCode || f.which) === al.ESC && l();
  }, s = (f, d) => {
    i.current.classList.replace(f, d);
  }, l = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), a(!1), r(!t), Object.keys(n).length !== 0 && n.current.focus();
    }, 500);
  };
  return G(() => {
    t && (a(!0), i.current && i.current.focus());
  }, [t]), /* @__PURE__ */ p(zr.Provider, {
    value: {
      isOpen: t,
      onKeyDown: c,
      onCloseModal: l,
      refModal: i
    },
    children: /* @__PURE__ */ p(Ht, {
      id: "js-modal",
      children: je(e, ["ModalContent", "ModalOverlay"])
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
  finalFocusRef: o.exports.object.isRequired
};
const Cr = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, Ii = ({
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
    onCloseModal: f,
    refModal: d
  } = xe(zr), u = (h) => {
    n && typeof n == "function" && n(h), f();
  };
  return /* @__PURE__ */ C("div", {
    ref: d,
    role: "dialog",
    tabIndex: "-1",
    hidden: !s,
    "aria-label": e,
    "aria-modal": "true",
    "data-type": a,
    onKeyDown: (h) => {
      i && typeof i == "function" && i(h), l(h);
    },
    className: `${Cr["c-modal"]} animate__animated animate__fadeIn animate__faster u-px-3 u-py-3 class-video-interpreter-ui-modal ${t != null ? t : ""}`,
    ...c,
    children: [/* @__PURE__ */ p("div", {
      className: `${Cr["c-modal-container"]}`,
      children: r
    }), /* @__PURE__ */ p(Dt, {
      addClass: Cr["c-close-button"],
      label: "Cerrar modal",
      hasAriaLabel: !0,
      onClick: u,
      children: /* @__PURE__ */ p(we, {
        children: /* @__PURE__ */ p("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: "48",
          width: "48",
          viewBox: "0 0 48 48",
          children: /* @__PURE__ */ p("path", {
            id: "close",
            d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
          })
        })
      })
    })]
  });
};
Ii.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  label: o.exports.string.isRequired,
  onClick: o.exports.func,
  onKeyDown: o.exports.func,
  __TYPE: pe("ModalContent")
};
Ii.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const ki = ({
  addClass: e,
  onClick: t
}) => {
  const {
    isOpen: r,
    onCloseModal: n
  } = xe(zr), i = (a) => {
    t && typeof t == "function" && t(a), n();
  };
  return /* @__PURE__ */ p("div", {
    className: `${Cr["c-layout"]} ${e != null ? e : ""}`,
    onClick: i,
    hidden: !r
  });
};
ki.propTypes = {
  addClass: o.exports.string,
  onClick: o.exports.func,
  __TYPE: pe("ModalOverlay")
};
ki.defaultProps = {
  __TYPE: "ModalOverlay"
};
const sl = ({
  children: e,
  onClick: t
}) => {
  const {
    onCloseModal: r
  } = xe(zr), n = (i) => {
    t && t(i), r();
  };
  return be(e, {
    ...e.props,
    onClick: n
  });
};
sl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]).isRequired,
  onClick: o.exports.func
};
const Bt = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, Wr = Ze(), Mi = ({
  children: e,
  addClass: t,
  keepWithinRange: r,
  defaultValue: n,
  min: i,
  max: a,
  step: c,
  onValue: s
}) => {
  const [l, f] = X(n || 0), d = () => {
    if (r && l > a)
      return f(a);
    f((y) => y + c);
  }, u = () => {
    if (r && l < i)
      return f(i);
    f((y) => y - c);
  }, v = (y) => f(y), h = (y) => r && l === y;
  return G(() => {
    s && s(l);
  }, [l, s]), /* @__PURE__ */ p(Wr.Provider, {
    value: {
      counter: l,
      min: i || Number.MIN_SAFE_INTEGER,
      max: a || Number.MAX_SAFE_INTEGER,
      validate: h,
      onChangeValue: v,
      onIncrementValue: d,
      onDecrementValue: u
    },
    children: /* @__PURE__ */ p("div", {
      className: `${Bt["c-number-input"]} ${t != null ? t : ""}`,
      children: je(e, ["NumberInputField", "NumberInputStepper"])
    })
  });
};
Mi.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  addClass: o.exports.string,
  max: o.exports.number,
  min: o.exports.number,
  defaultValue: o.exports.number,
  step: o.exports.number,
  onValue: o.exports.func,
  keepWithinRange: o.exports.bool
};
Mi.defaultProps = {
  step: 1
};
const Li = ct(({
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
    onIncrementValue: f,
    onDecrementValue: d,
    min: u,
    max: v
  } = xe(Wr), h = le(() => e || pt("c-number-input-"), [e]), y = Object.freeze({
    UP: 38,
    DOWN: 40,
    END: 35,
    HOME: 36
  }), g = ({
    target: E
  }) => {
    if (!isNaN(E.value) && E.value)
      return l(parseInt(E.value));
    l(0);
  }, x = (E) => {
    switch (E.keyCode || E.which) {
      case y.UP:
        f();
        break;
      case y.DOWN:
        d();
        break;
      case y.END:
        l(v);
        break;
      case y.HOME:
        l(u);
        break;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: h,
    className: `${Bt["c-number-input__label"]} ${i != null ? i : ""}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!a && "u-sr-only"}`,
      children: [" ", r, " "]
    }), /* @__PURE__ */ p("input", {
      id: h,
      ref: c,
      type: "text",
      name: t,
      role: "spinbutton",
      inputMode: "decimal",
      pattern: n,
      autoCorrect: "off",
      autoComplete: "off",
      className: Bt["c-number-input__input"],
      onChange: g,
      onKeyDown: x,
      ...s || s === 0 ? {
        value: s,
        "aria-valuemax": v,
        "aria-valuemin": u,
        "aria-valuenow": s,
        "aria-valuetext": `${s}`
      } : {
        value: ""
      }
    })]
  });
});
Li.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Li.propTypes = {
  id: o.exports.string,
  name: o.exports.string,
  label: o.exports.string,
  pattern: o.exports.string,
  addClass: o.exports.string,
  isLabelVisible: o.exports.bool,
  __TYPE: pe("NumberInputField")
};
const Fi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ p("div", {
  className: `${Bt["c-number-input__stepper"]} ${t != null ? t : ""}`,
  children: je(e, ["NumberIncrementStepper", "NumberDecrementStepper"])
});
Fi.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: pe("NumberInputStepper")
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
  } = xe(Wr);
  return /* @__PURE__ */ p("button", {
    tabIndex: -1,
    onClick: n,
    disabled: i(a),
    "aria-label": `${r != null ? r : "Decrementar valor"}`,
    className: `${Bt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ p(we, {
      children: /* @__PURE__ */ p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        width: "48",
        viewBox: "0 0 48 48",
        children: /* @__PURE__ */ p("path", {
          id: "arrow_drop_down",
          d: "m24 30-10-9.95h20Z"
        })
      })
    })
  });
};
ji.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: pe("NumberDecrementStepper"),
  label: o.exports.string
};
ji.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Bi = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onIncrementValue: n,
    validate: i,
    max: a
  } = xe(Wr);
  return /* @__PURE__ */ p("button", {
    tabIndex: -1,
    onClick: n,
    disabled: i(a),
    "aria-label": `${r != null ? r : "Incrementar valor"}`,
    className: `${Bt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ p(we, {
      children: /* @__PURE__ */ p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        width: "48",
        viewBox: "0 0 48 48",
        children: /* @__PURE__ */ p("path", {
          id: "arrow_drop_up",
          d: "m14 28 10-10.05L34 28Z"
        })
      })
    })
  });
};
Bi.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: pe("NumberIncrementStepper"),
  label: o.exports.string
};
Bi.defaultProps = {
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
    showLastButton: f = !1,
    siblingCount: d = 1,
    ...u
  } = e, [v, h] = X(n), y = (_, R) => {
    h(R), s && s(_, R);
  }, g = (_, R) => {
    const N = R - _ + 1;
    return Array.from({ length: N }, (F, M) => _ + M);
  }, x = g(1, Math.min(t, r)), E = g(Math.max(r - t + 1, t + 1), r), P = Math.max(
    Math.min(
      v - d,
      r - t - d * 2 - 1
    ),
    t + 2
  ), $ = Math.min(
    Math.max(
      v + d,
      t + d * 2 + 2
    ),
    E.length > 0 ? E[0] - 2 : r - 1
  ), D = [
    ...l ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...x,
    ...P > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : [],
    ...g(P, $),
    ...$ < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : [],
    ...E,
    ...a ? [] : ["next"],
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
        return r;
      default:
        return null;
    }
  };
  return {
    items: D.map((_) => typeof _ == "number" ? {
      onClick: (R) => {
        y(R, _);
      },
      type: "page",
      page: _,
      selected: _ === v,
      disabled: i,
      "aria-current": _ === v ? !0 : void 0
    } : {
      onClick: (R) => {
        y(R, b(_));
      },
      type: _,
      page: b(_),
      selected: !1,
      disabled: i || _.indexOf("ellipsis") === -1 && (_ === "next" || _ === "last" ? v >= r : v <= 1)
    }),
    ...u
  };
}, sr = {
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
}), ul = (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}p\xE1gina ${t}` : `Ir a la ${ll[e]} p\xE1gina`, Vi = ({
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
  return /* @__PURE__ */ p("nav", {
    className: `${r != null ? r : ""} ${sr["c-pagination"]}`,
    children: /* @__PURE__ */ p("ul", {
      className: sr["c-pagination__ul"],
      children: i.map((a, c) => /* @__PURE__ */ p("li", {
        children: e({
          ...a,
          "aria-label": t(a.type, a.page, a.selected)
        })
      }, `pagination-item-${c}`))
    })
  });
};
Vi.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(Vn, {
    ...e
  }),
  getItemAriaLabel: ul
};
Vi.propTypes = {
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
  const f = {
    previous: (a == null ? void 0 : a.previous) || /* @__PURE__ */ p("path", {
      id: "navigate_before",
      d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
    }),
    next: (a == null ? void 0 : a.next) || /* @__PURE__ */ p("path", {
      id: "navigate_next",
      d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
    }),
    last: (a == null ? void 0 : a.last) || /* @__PURE__ */ p("path", {
      id: "last_page",
      d: "m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z"
    }),
    first: (a == null ? void 0 : a.first) || /* @__PURE__ */ p("path", {
      id: "first_page",
      d: "M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z"
    })
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? /* @__PURE__ */ p("div", {
    className: sr["c-pagination-item__ellipsis"],
    children: "..."
  }) : be(i, {
    disabled: n,
    className: `${sr["c-pagination-item"]} ${r != null ? r : ""} ${c ? sr["c-pagination-item--selected"] : ""}`,
    ...i.props,
    ...s
  }, [
    t === "page" && e,
    f ? a ? /* @__PURE__ */ p(we, {
      path: f
    }, t) : /* @__PURE__ */ p(we, {
      children: /* @__PURE__ */ p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        width: "48",
        viewBox: "0 0 48 48",
        children: f
      })
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
  element: /* @__PURE__ */ p("button", {})
};
const Lt = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, Ur = Ze(), dl = ({
  children: e,
  defaultIndex: t,
  addClass: r
}) => {
  const [n, i] = X(1), a = {
    index: [],
    counter: 0
  }, c = (f) => i(f), s = (f) => n === f;
  G(() => {
    t !== void 0 && i(t);
  }, [t]);
  const l = ye.map(e, (f) => qe(f) ? f.props.__TYPE === "Section" ? (a.counter++, a.index.push(a.counter), be(f, {
    ...f.props,
    id: a.counter,
    "data-value": a.counter - 1
  })) : f : null);
  return /* @__PURE__ */ p(Ur.Provider, {
    value: {
      validation: s,
      onToggle: c,
      listId: a.index,
      currentSection: n
    },
    children: /* @__PURE__ */ p("div", {
      className: `${Lt["c-panel"]} ${r != null ? r : ""} class-video-interpreter-ui-panel`,
      children: l
    })
  });
};
dl.propTypes = {
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
  } = xe(Ur), s = c(t);
  return /* @__PURE__ */ C("section", {
    ref: a,
    role: "tabpanel",
    hidden: !s,
    "data-type": n,
    "aria-hidden": !s,
    "aria-labelledby": `section-${t}`,
    className: `${Lt["c-section"]} ${r != null ? r : ""}`,
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
  __TYPE: pe("Section")
};
qi.defaultProps = {
  __TYPE: "Section"
};
const fl = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), pl = (e, t, r) => e === "section" ? `${r ? "" : "Ir a la "}secci\xF3n ${t}` : `Ir a la ${fl[e]} secci\xF3n`, Yi = ({
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
    validation: f,
    onToggle: d,
    listId: u,
    currentSection: v
  } = xe(Ur), h = H([]), y = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), g = Object.freeze({
    previous: v - 1,
    next: v + 1
  }), x = {
    previous: (n == null ? void 0 : n.previous) || /* @__PURE__ */ p("path", {
      id: "navigate_before",
      d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
    }),
    next: (n == null ? void 0 : n.next) || /* @__PURE__ */ p("path", {
      id: "navigate_next",
      d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
    })
  }, E = [
    ...t ? ["previous"] : [],
    ...u || [],
    ...r ? ["next"] : []
  ], P = (w) => !h.current.includes(w) && w ? h.current = [...h.current, w] : h.current, $ = (w) => {
    const _ = h.current[0], R = h.current[h.current.length - 1];
    if ((w.keyCode || w.which) === y.LEFT)
      if (w.target === _)
        R.focus();
      else {
        const N = h.current.indexOf(w.target) - 1;
        h.current[N].focus();
      }
    else if ((w.keyCode || w.which) === y.RIGHT)
      if (w.target === R)
        _.focus();
      else {
        const N = h.current.indexOf(w.target) + 1;
        h.current[N].focus();
      }
  }, D = (w) => {
    d(w), c !== void 0 && c(w, u.length);
  }, b = E.map((w) => typeof w == "number" ? {
    onClick: (_) => {
      D(w);
    },
    type: "section",
    section: w,
    selected: f(w),
    ref: P,
    onKeyDown: $
  } : {
    onClick: () => {
      D(g[w]);
    },
    type: w,
    section: g[w],
    selected: !1,
    disabled: w === "next" ? v >= u.length : v <= 1
  });
  return G(() => {
    c !== void 0 && c(v, u.length);
  }, []), /* @__PURE__ */ C(at, {
    children: [/* @__PURE__ */ p("h2", {
      id: "section-list-navigation",
      className: "u-sr-only",
      children: i
    }), /* @__PURE__ */ p("ul", {
      role: "tablist",
      "aria-labelledby": "section-list-navigation",
      "aria-orientation": a,
      className: `${Lt["c-navigation"]} ${s != null ? s : ""}`,
      children: e ? e(b) : b.map(({
        section: w,
        type: _,
        selected: R,
        ...N
      }, F) => /* @__PURE__ */ p("li", {
        role: "presentation",
        className: Lt["c-navigation__item"],
        children: _ === "section" ? /* @__PURE__ */ p("button", {
          id: `navigation-section-tab-${w}`,
          role: "tab",
          tabIndex: `${R ? 0 : -1}`,
          "aria-selected": R,
          className: Lt["c-navigation__section"],
          "aria-label": l(_, w, R),
          ...N
        }) : /* @__PURE__ */ p("button", {
          type: "button",
          className: `${Lt["c-navigation__button"]}`,
          "aria-label": l(_, w, R),
          ...N,
          children: x[_] ? n ? /* @__PURE__ */ p(we, {
            path: x[_]
          }, _) : /* @__PURE__ */ p(we, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: x[_]
            })
          }, _) : null
        })
      }, `navigation-section-item-${F}`))
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
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: pl
};
const vl = ({
  children: e,
  section: t,
  onClick: r
}) => {
  const {
    onToggle: n
  } = xe(Ur), i = (a) => {
    n(t), r && r(a);
  };
  return ye.map(e, (a) => be(a, {
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
  return Yo(() => {
    t && i.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p("div", {
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
const gl = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, bl = (e) => {
  document.body.append(e);
}, yl = (e) => {
  const t = H(null);
  G(() => {
    const n = document.querySelector(`#${e}`), i = n || gl(e);
    return n || bl(i), i.append(t.current), () => {
      t.current.remove(), i.childElementCount || i.remove();
    };
  }, [e]);
  function r() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return r();
}, Ht = ({
  children: e,
  id: t
}) => {
  const r = yl(t);
  return Wo(e, r);
};
Ht.propTypes = {
  children: o.exports.any,
  id: o.exports.string.isRequired
};
const xl = "_row_1adiy_1", _l = {
  row: xl
}, wl = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ p("div", {
  ref: r,
  className: `${_l.row} ${e != null ? e : ""}`,
  ...t
}));
wl.propTypes = {
  addClass: o.exports.string
};
const Pr = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, zi = ct(({
  children: e,
  id: t,
  placeholder: r,
  label: n,
  icon: i,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  onChoise: f
}, d) => {
  const u = le(() => t || pt("c-select-"), [t]), v = ({
    target: h
  }) => {
    f && f({
      id: u,
      value: h.value
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
      className: Pr["c-select-wrapper"],
      children: [/* @__PURE__ */ C("select", {
        id: u,
        ref: d,
        name: u,
        defaultValue: "default",
        className: Pr["c-select"],
        onChange: v,
        disabled: s,
        required: l,
        children: [/* @__PURE__ */ p("option", {
          value: "default",
          disabled: !0,
          children: r
        }), je(e, ["option", "optgroup"])]
      }), i ? /* @__PURE__ */ p(we, {
        path: i,
        addClass: Pr["c-select__icon"]
      }) : /* @__PURE__ */ p(we, {
        addClass: Pr["c-select__icon"],
        children: /* @__PURE__ */ p("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: "48",
          width: "48",
          viewBox: "0 0 48 48",
          children: /* @__PURE__ */ p("path", {
            id: "arrow_drop_down",
            d: "m24 30-10-9.95h20Z"
          })
        })
      })]
    })]
  });
});
zi.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  isLabelVisible: !1,
  __TYPE: "Select"
};
zi.propTypes = {
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
  __TYPE: pe("Select")
};
const El = ({
  children: e,
  onAllSelect: t
}) => {
  const [r, n] = X([]), i = (c) => n([...r.filter((s) => s.id !== c.id), {
    ...c
  }]);
  return G(() => {
    t && t(r);
  }, [r, t]), ye.map(e, (c) => {
    var s;
    return qe(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? be(c, {
      ...c.props,
      onChoise: i
    }) : c : null;
  });
};
El.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllSelect: o.exports.func
};
const mn = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, Po = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Wi = ct(({
  id: e,
  name: t,
  size: r,
  value: n,
  label: i,
  addClass: a,
  isDisabled: c,
  defaultChecked: s,
  isLabelVisible: l,
  onChange: f
}, d) => {
  const [u, v] = X(!1), h = le(() => e || pt("c-input-"), [e]), y = ({
    target: x
  }) => {
    if (v(x.checked), !!f) {
      if (x.checked) {
        f({
          id: x.id,
          value: x.value
        });
        return;
      }
      f({
        id: x.id,
        value: ""
      });
    }
  }, g = (x) => {
    ((x.keyCode || x.which) === Po.SPACE || (x.keyCode || x.which) === Po.ENTER) && v((E) => (f && f(E ? {
      id: h,
      value: ""
    } : {
      id: h,
      value: `${n}`
    }), !E));
  };
  return G(() => (s && v(!!s), () => {
    v(!1);
  }), [s]), /* @__PURE__ */ C("label", {
    htmlFor: h,
    className: `${mn["c-label"]} ${mn[`is-${r}`]}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ p("input", {
      id: h,
      ref: d,
      role: "switch",
      type: "checkbox",
      name: t,
      value: n,
      checked: u,
      "aria-disabled": c,
      className: `${mn["c-switch"]} ${a != null ? a : ""}`,
      onChange: y,
      onKeyDown: g,
      ...c && {
        disabled: !0
      }
    })]
  });
});
Wi.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Wi.propTypes = {
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
const qn = Ze(), Tl = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  ...n
}) => {
  const [i, a] = X(0), c = (l) => a(l), s = (l) => i === l;
  return G(() => {
    t !== void 0 && a(t);
  }, [t]), /* @__PURE__ */ p(qn.Provider, {
    value: {
      validation: s,
      onToggle: c
    },
    children: /* @__PURE__ */ p("div", {
      ...r && {
        className: `${r}`
      },
      ...n,
      children: je(e, ["TabList", "TabPanels"])
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
}, Ui = ({
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
  const f = H(), {
    validation: d,
    onToggle: u
  } = xe(qn), v = d(t);
  return G(() => (f.current && a(f.current), () => {
    f.current = null;
  }), [f]), /* @__PURE__ */ C("button", {
    id: `tab-${t}`,
    role: "tab",
    ref: f,
    "data-type": s,
    tabIndex: `${v ? 0 : -1}`,
    "aria-controls": `panel-${t}`,
    "aria-selected": v,
    onKeyDown: c,
    onClick: () => u(t),
    className: `${pr["c-tab__button"]} u-flex ${n != null ? n : ""} ${v && r && r}`,
    ...l,
    children: [e, i && i(v)]
  });
};
Ui.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  selected: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  addNewRef: o.exports.func,
  onNavigation: o.exports.func,
  __TYPE: pe("Tab")
};
Ui.defaultProps = {
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
  }), f = (u) => {
    const v = c.current[0], h = c.current[c.current.length - 1];
    if ((u.keyCode || u.which) === l.LEFT)
      if (u.target === v)
        h.focus();
      else {
        const y = c.current.indexOf(u.target) - 1;
        c.current[y].focus();
      }
    else if ((u.keyCode || u.which) === l.RIGHT)
      if (u.target === h)
        v.focus();
      else {
        const y = c.current.indexOf(u.target) + 1;
        c.current[y].focus();
      }
  }, d = ye.map(e, (u, v) => qe(u) ? be(u, {
    ...u.props,
    id: v,
    addNewRef: s,
    onNavigation: f
  }) : null);
  return /* @__PURE__ */ p("div", {
    role: "tablist",
    "data-type": i,
    "aria-label": r,
    "aria-orientation": n,
    className: `${pr["c-tab__list"]} ${t != null ? t : ""}`,
    ...a,
    children: je(d, ["Tab"])
  });
};
Hi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  label: o.exports.string,
  orientation: o.exports.string,
  __TYPE: pe("TabList")
};
Hi.defaultProps = {
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
  } = xe(qn), c = a(t);
  return /* @__PURE__ */ p("div", {
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
Gi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  addClass: o.exports.string,
  __TYPE: pe("TabPanel")
};
Gi.defaultProps = {
  __TYPE: "TabPanel"
};
const Zi = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = ye.map(e, (a, c) => qe(a) ? be(a, {
    ...a.props,
    id: c
  }) : null);
  return /* @__PURE__ */ p("div", {
    className: `${pr["c-tab__panels"]} ${t != null ? t : ""}`,
    "data-type": r,
    ...n,
    children: je(i, ["TabPanel"])
  });
};
Zi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: pe("TabPanels")
};
Zi.defaultProps = {
  __TYPE: "TabPanels"
};
const gn = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, Ki = ct(({
  id: e,
  value: t,
  resize: r,
  placeholder: n,
  label: i,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  onValue: f,
  ...d
}, u) => {
  const v = le(() => e || pt("c-input-"), [e]), h = ({
    target: y
  }) => {
    f && f({
      id: v,
      value: y.value
    });
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: v,
    className: `${gn["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ p("textarea", {
      id: v,
      ref: u,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: h,
      className: `${gn["c-textarea"]} ${gn[`c-textarea--${r}`]}`,
      ...d,
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
const Ol = zo(({
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
  return G(() => {
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
var $o = function(t) {
  return t.reduce(function(r, n) {
    var i = n[0], a = n[1];
    return r[i] = a, r;
  }, {});
}, Do = typeof window < "u" && window.document && window.document.createElement ? $t.useLayoutEffect : $t.useEffect, Le = "top", He = "bottom", Ge = "right", Fe = "left", Hr = "auto", yr = [Le, He, Ge, Fe], Vt = "start", vr = "end", Sl = "clippingParents", Xi = "viewport", rr = "popper", Rl = "reference", Co = /* @__PURE__ */ yr.reduce(function(e, t) {
  return e.concat([t + "-" + Vt, t + "-" + vr]);
}, []), Ji = /* @__PURE__ */ [].concat(yr, [Hr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vt, t + "-" + vr]);
}, []), Pl = "beforeRead", $l = "read", Dl = "afterRead", Cl = "beforeMain", Al = "main", Nl = "afterMain", Il = "beforeWrite", kl = "write", Ml = "afterWrite", Pn = [Pl, $l, Dl, Cl, Al, Nl, Il, kl, Ml];
function st(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ke(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function At(e) {
  var t = Ke(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ve(e) {
  var t = Ke(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Yn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ke(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ll(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !Ve(a) || !st(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(c) {
      var s = i[c];
      s === !1 ? a.removeAttribute(c) : a.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Fl(e) {
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
      var i = t.elements[n], a = t.attributes[n] || {}, c = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = c.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !Ve(i) || !st(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const jl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ll,
  effect: Fl,
  requires: ["computeStyles"]
};
function tt(e) {
  return e.split("-")[0];
}
var Ct = Math.max, Fr = Math.min, qt = Math.round;
function $n() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Qi() {
  return !/^((?!chrome|android).)*safari/i.test($n());
}
function Yt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && Ve(e) && (i = e.offsetWidth > 0 && qt(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && qt(n.height) / e.offsetHeight || 1);
  var c = At(e) ? Ke(e) : window, s = c.visualViewport, l = !Qi() && r, f = (n.left + (l && s ? s.offsetLeft : 0)) / i, d = (n.top + (l && s ? s.offsetTop : 0)) / a, u = n.width / i, v = n.height / a;
  return {
    width: u,
    height: v,
    top: d,
    right: f + u,
    bottom: d + v,
    left: f,
    x: f,
    y: d
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
function ea(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Yn(r)) {
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
  return Ke(e).getComputedStyle(e);
}
function Bl(e) {
  return ["table", "td", "th"].indexOf(st(e)) >= 0;
}
function yt(e) {
  return ((At(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Gr(e) {
  return st(e) === "html" ? e : e.assignedSlot || e.parentNode || (Yn(e) ? e.host : null) || yt(e);
}
function Ao(e) {
  return !Ve(e) || nt(e).position === "fixed" ? null : e.offsetParent;
}
function Vl(e) {
  var t = /firefox/i.test($n()), r = /Trident/i.test($n());
  if (r && Ve(e)) {
    var n = nt(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Gr(e);
  for (Yn(i) && (i = i.host); Ve(i) && ["html", "body"].indexOf(st(i)) < 0; ) {
    var a = nt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function xr(e) {
  for (var t = Ke(e), r = Ao(e); r && Bl(r) && nt(r).position === "static"; )
    r = Ao(r);
  return r && (st(r) === "html" || st(r) === "body" && nt(r).position === "static") ? t : r || Vl(e) || t;
}
function Wn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function cr(e, t, r) {
  return Ct(e, Fr(t, r));
}
function ql(e, t, r) {
  var n = cr(e, t, r);
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
var Yl = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ra(typeof t != "number" ? t : na(t, yr));
};
function zl(e) {
  var t, r = e.state, n = e.name, i = e.options, a = r.elements.arrow, c = r.modifiersData.popperOffsets, s = tt(r.placement), l = Wn(s), f = [Fe, Ge].indexOf(s) >= 0, d = f ? "height" : "width";
  if (!(!a || !c)) {
    var u = Yl(i.padding, r), v = zn(a), h = l === "y" ? Le : Fe, y = l === "y" ? He : Ge, g = r.rects.reference[d] + r.rects.reference[l] - c[l] - r.rects.popper[d], x = c[l] - r.rects.reference[l], E = xr(a), P = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, $ = g / 2 - x / 2, D = u[h], b = P - v[d] - u[y], w = P / 2 - v[d] / 2 + $, _ = cr(D, w, b), R = l;
    r.modifiersData[n] = (t = {}, t[R] = _, t.centerOffset = _ - w, t);
  }
}
function Wl(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  if (i != null && !(typeof i == "string" && (i = t.elements.popper.querySelector(i), !i))) {
    if (process.env.NODE_ENV !== "production" && (Ve(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ea(t.elements.popper, i)) {
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
function zt(e) {
  return e.split("-")[1];
}
var Hl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gl(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: qt(t * i) / i || 0,
    y: qt(r * i) / i || 0
  };
}
function No(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, c = e.offsets, s = e.position, l = e.gpuAcceleration, f = e.adaptive, d = e.roundOffsets, u = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, y = c.y, g = y === void 0 ? 0 : y, x = typeof d == "function" ? d({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  h = x.x, g = x.y;
  var E = c.hasOwnProperty("x"), P = c.hasOwnProperty("y"), $ = Fe, D = Le, b = window;
  if (f) {
    var w = xr(r), _ = "clientHeight", R = "clientWidth";
    if (w === Ke(r) && (w = yt(r), nt(w).position !== "static" && s === "absolute" && (_ = "scrollHeight", R = "scrollWidth")), w = w, i === Le || (i === Fe || i === Ge) && a === vr) {
      D = He;
      var N = u && w === b && b.visualViewport ? b.visualViewport.height : w[_];
      g -= N - n.height, g *= l ? 1 : -1;
    }
    if (i === Fe || (i === Le || i === He) && a === vr) {
      $ = Ge;
      var F = u && w === b && b.visualViewport ? b.visualViewport.width : w[R];
      h -= F - n.width, h *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, f && Hl), J = d === !0 ? Gl({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  if (h = J.x, g = J.y, l) {
    var Z;
    return Object.assign({}, M, (Z = {}, Z[D] = P ? "0" : "", Z[$] = E ? "0" : "", Z.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", Z));
  }
  return Object.assign({}, M, (t = {}, t[D] = P ? g + "px" : "", t[$] = E ? h + "px" : "", t.transform = "", t));
}
function Zl(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, c = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = nt(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(u) {
      return f.indexOf(u) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: tt(t.placement),
    variation: zt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, No(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, No(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Kl = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Zl,
  data: {}
};
var $r = {
  passive: !0
};
function Xl(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, c = n.resize, s = c === void 0 ? !0 : c, l = Ke(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && f.forEach(function(d) {
    d.addEventListener("scroll", r.update, $r);
  }), s && l.addEventListener("resize", r.update, $r), function() {
    a && f.forEach(function(d) {
      d.removeEventListener("scroll", r.update, $r);
    }), s && l.removeEventListener("resize", r.update, $r);
  };
}
const Jl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Xl,
  data: {}
};
var Ql = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ar(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ql[t];
  });
}
var eu = {
  start: "end",
  end: "start"
};
function Io(e) {
  return e.replace(/start|end/g, function(t) {
    return eu[t];
  });
}
function Un(e) {
  var t = Ke(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Hn(e) {
  return Yt(yt(e)).left + Un(e).scrollLeft;
}
function tu(e, t) {
  var r = Ke(e), n = yt(e), i = r.visualViewport, a = n.clientWidth, c = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, c = i.height;
    var f = Qi();
    (f || !f && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: s + Hn(e),
    y: l
  };
}
function ru(e) {
  var t, r = yt(e), n = Un(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ct(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), c = Ct(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Hn(e), l = -n.scrollTop;
  return nt(i || r).direction === "rtl" && (s += Ct(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: c,
    x: s,
    y: l
  };
}
function Gn(e) {
  var t = nt(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function oa(e) {
  return ["html", "body", "#document"].indexOf(st(e)) >= 0 ? e.ownerDocument.body : Ve(e) && Gn(e) ? e : oa(Gr(e));
}
function lr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = oa(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ke(n), c = i ? [a].concat(a.visualViewport || [], Gn(n) ? n : []) : n, s = t.concat(c);
  return i ? s : s.concat(lr(Gr(c)));
}
function Dn(e) {
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
function ko(e, t, r) {
  return t === Xi ? Dn(tu(e, r)) : At(t) ? nu(t, r) : Dn(ru(yt(e)));
}
function ou(e) {
  var t = lr(Gr(e)), r = ["absolute", "fixed"].indexOf(nt(e).position) >= 0, n = r && Ve(e) ? xr(e) : e;
  return At(n) ? t.filter(function(i) {
    return At(i) && ea(i, n) && st(i) !== "body";
  }) : [];
}
function iu(e, t, r, n) {
  var i = t === "clippingParents" ? ou(e) : [].concat(t), a = [].concat(i, [r]), c = a[0], s = a.reduce(function(l, f) {
    var d = ko(e, f, n);
    return l.top = Ct(d.top, l.top), l.right = Fr(d.right, l.right), l.bottom = Fr(d.bottom, l.bottom), l.left = Ct(d.left, l.left), l;
  }, ko(e, c, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ia(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? tt(n) : null, a = n ? zt(n) : null, c = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case Le:
      l = {
        x: c,
        y: t.y - r.height
      };
      break;
    case He:
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
    case Fe:
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
  var f = i ? Wn(i) : null;
  if (f != null) {
    var d = f === "y" ? "height" : "width";
    switch (a) {
      case Vt:
        l[f] = l[f] - (t[d] / 2 - r[d] / 2);
        break;
      case vr:
        l[f] = l[f] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return l;
}
function hr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, c = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? Sl : s, f = r.rootBoundary, d = f === void 0 ? Xi : f, u = r.elementContext, v = u === void 0 ? rr : u, h = r.altBoundary, y = h === void 0 ? !1 : h, g = r.padding, x = g === void 0 ? 0 : g, E = ra(typeof x != "number" ? x : na(x, yr)), P = v === rr ? Rl : rr, $ = e.rects.popper, D = e.elements[y ? P : v], b = iu(At(D) ? D : D.contextElement || yt(e.elements.popper), l, d, c), w = Yt(e.elements.reference), _ = ia({
    reference: w,
    element: $,
    strategy: "absolute",
    placement: i
  }), R = Dn(Object.assign({}, $, _)), N = v === rr ? R : w, F = {
    top: b.top - N.top + E.top,
    bottom: N.bottom - b.bottom + E.bottom,
    left: b.left - N.left + E.left,
    right: N.right - b.right + E.right
  }, M = e.modifiersData.offset;
  if (v === rr && M) {
    var J = M[i];
    Object.keys(F).forEach(function(Z) {
      var re = [Ge, He].indexOf(Z) >= 0 ? 1 : -1, de = [Le, He].indexOf(Z) >= 0 ? "y" : "x";
      F[Z] += J[de] * re;
    });
  }
  return F;
}
function au(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, c = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, f = l === void 0 ? Ji : l, d = zt(n), u = d ? s ? Co : Co.filter(function(y) {
    return zt(y) === d;
  }) : yr, v = u.filter(function(y) {
    return f.indexOf(y) >= 0;
  });
  v.length === 0 && (v = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(y, g) {
    return y[g] = hr(e, {
      placement: g,
      boundary: i,
      rootBoundary: a,
      padding: c
    })[tt(g)], y;
  }, {});
  return Object.keys(h).sort(function(y, g) {
    return h[y] - h[g];
  });
}
function su(e) {
  if (tt(e) === Hr)
    return [];
  var t = Ar(e);
  return [Io(e), t, Io(t)];
}
function cu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !0 : c, l = r.fallbackPlacements, f = r.padding, d = r.boundary, u = r.rootBoundary, v = r.altBoundary, h = r.flipVariations, y = h === void 0 ? !0 : h, g = r.allowedAutoPlacements, x = t.options.placement, E = tt(x), P = E === x, $ = l || (P || !y ? [Ar(x)] : su(x)), D = [x].concat($).reduce(function(j, W) {
      return j.concat(tt(W) === Hr ? au(t, {
        placement: W,
        boundary: d,
        rootBoundary: u,
        padding: f,
        flipVariations: y,
        allowedAutoPlacements: g
      }) : W);
    }, []), b = t.rects.reference, w = t.rects.popper, _ = /* @__PURE__ */ new Map(), R = !0, N = D[0], F = 0; F < D.length; F++) {
      var M = D[F], J = tt(M), Z = zt(M) === Vt, re = [Le, He].indexOf(J) >= 0, de = re ? "width" : "height", ie = hr(t, {
        placement: M,
        boundary: d,
        rootBoundary: u,
        altBoundary: v,
        padding: f
      }), ee = re ? Z ? Ge : Fe : Z ? He : Le;
      b[de] > w[de] && (ee = Ar(ee));
      var Ee = Ar(ee), he = [];
      if (a && he.push(ie[J] <= 0), s && he.push(ie[ee] <= 0, ie[Ee] <= 0), he.every(function(j) {
        return j;
      })) {
        N = M, R = !1;
        break;
      }
      _.set(M, he);
    }
    if (R)
      for (var O = y ? 3 : 1, I = function(W) {
        var L = D.find(function(Y) {
          var z = _.get(Y);
          if (z)
            return z.slice(0, W).every(function(K) {
              return K;
            });
        });
        if (L)
          return N = L, "break";
      }, B = O; B > 0; B--) {
        var V = I(B);
        if (V === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[n]._skip = !0, t.placement = N, t.reset = !0);
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
function Mo(e, t, r) {
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
function Lo(e) {
  return [Le, Ge, He, Fe].some(function(t) {
    return e[t] >= 0;
  });
}
function uu(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, c = hr(t, {
    elementContext: "reference"
  }), s = hr(t, {
    altBoundary: !0
  }), l = Mo(c, n), f = Mo(s, i, a), d = Lo(l), u = Lo(f);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: d,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": u
  });
}
const du = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: uu
};
function fu(e, t, r) {
  var n = tt(e), i = [Fe, Le].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, c = a[0], s = a[1];
  return c = c || 0, s = (s || 0) * i, [Fe, Ge].indexOf(n) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function pu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, a = i === void 0 ? [0, 0] : i, c = Ji.reduce(function(d, u) {
    return d[u] = fu(u, t.rects, a), d;
  }, {}), s = c[t.placement], l = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = c;
}
const vu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pu
};
function hu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ia({
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
function gu(e) {
  return e === "x" ? "y" : "x";
}
function bu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !1 : c, l = r.boundary, f = r.rootBoundary, d = r.altBoundary, u = r.padding, v = r.tether, h = v === void 0 ? !0 : v, y = r.tetherOffset, g = y === void 0 ? 0 : y, x = hr(t, {
    boundary: l,
    rootBoundary: f,
    padding: u,
    altBoundary: d
  }), E = tt(t.placement), P = zt(t.placement), $ = !P, D = Wn(E), b = gu(D), w = t.modifiersData.popperOffsets, _ = t.rects.reference, R = t.rects.popper, N = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, F = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = {
    x: 0,
    y: 0
  };
  if (!!w) {
    if (a) {
      var Z, re = D === "y" ? Le : Fe, de = D === "y" ? He : Ge, ie = D === "y" ? "height" : "width", ee = w[D], Ee = ee + x[re], he = ee - x[de], O = h ? -R[ie] / 2 : 0, I = P === Vt ? _[ie] : R[ie], B = P === Vt ? -R[ie] : -_[ie], V = t.elements.arrow, j = h && V ? zn(V) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ta(), L = W[re], Y = W[de], z = cr(0, _[ie], j[ie]), K = $ ? _[ie] / 2 - O - z - L - F.mainAxis : I - z - L - F.mainAxis, q = $ ? -_[ie] / 2 + O + z + Y + F.mainAxis : B + z + Y + F.mainAxis, A = t.elements.arrow && xr(t.elements.arrow), T = A ? D === "y" ? A.clientTop || 0 : A.clientLeft || 0 : 0, Q = (Z = M == null ? void 0 : M[D]) != null ? Z : 0, me = ee + K - Q - T, Oe = ee + q - Q, De = cr(h ? Fr(Ee, me) : Ee, ee, h ? Ct(he, Oe) : he);
      w[D] = De, J[D] = De - ee;
    }
    if (s) {
      var ot, lt = D === "x" ? Le : Fe, it = D === "x" ? He : Ge, Se = w[b], Xe = b === "y" ? "height" : "width", Je = Se + x[lt], xt = Se - x[it], vt = [Le, Fe].indexOf(E) !== -1, _t = (ot = M == null ? void 0 : M[b]) != null ? ot : 0, wt = vt ? Je : Se - _[Xe] - R[Xe] - _t + F.altAxis, Ae = vt ? Se + _[Xe] + R[Xe] - _t - F.altAxis : xt, Qe = h && vt ? ql(wt, Se, Ae) : cr(h ? wt : Je, Se, h ? Ae : xt);
      w[b] = Qe, J[b] = Qe - Se;
    }
    t.modifiersData[n] = J;
  }
}
const yu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bu,
  requiresIfExists: ["offset"]
};
function xu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function _u(e) {
  return e === Ke(e) || !Ve(e) ? Un(e) : xu(e);
}
function wu(e) {
  var t = e.getBoundingClientRect(), r = qt(t.width) / e.offsetWidth || 1, n = qt(t.height) / e.offsetHeight || 1;
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
  return (n || !n && !r) && ((st(t) !== "body" || Gn(a)) && (s = _u(t)), Ve(t) ? (l = Yt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Hn(a))), {
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
  return Pn.reduce(function(r, n) {
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
var Pt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ru = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Fo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Pu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Fo).filter(function(r, n, i) {
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
          Pn.indexOf(t.phase) < 0 && console.error(mt(Pt, t.name, '"phase"', "either " + Pn.join(", "), '"' + String(t.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Fo.map(function(n) {
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
var jo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Cu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Bo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Vo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Au(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Bo : i;
  return function(s, l, f) {
    f === void 0 && (f = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Bo, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, u = [], v = !1, h = {
      state: d,
      setOptions: function(E) {
        var P = typeof E == "function" ? E(d.options) : E;
        g(), d.options = Object.assign({}, a, d.options, P), d.scrollParents = {
          reference: At(s) ? lr(s) : s.contextElement ? lr(s.contextElement) : [],
          popper: lr(l)
        };
        var $ = Ou(Du([].concat(n, d.options.modifiers)));
        if (d.orderedModifiers = $.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = $u([].concat($, d.options.modifiers), function(M) {
            var J = M.name;
            return J;
          });
          if (Pu(D), tt(d.options.placement) === Hr) {
            var b = d.orderedModifiers.find(function(M) {
              var J = M.name;
              return J === "flip";
            });
            b || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var w = nt(l), _ = w.marginTop, R = w.marginRight, N = w.marginBottom, F = w.marginLeft;
          [_, R, N, F].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return y(), h.update();
      },
      forceUpdate: function() {
        if (!v) {
          var E = d.elements, P = E.reference, $ = E.popper;
          if (!Vo(P, $)) {
            process.env.NODE_ENV !== "production" && console.error(jo);
            return;
          }
          d.rects = {
            reference: Eu(P, xr($), d.options.strategy === "fixed"),
            popper: zn($)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(M) {
            return d.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var D = 0, b = 0; b < d.orderedModifiers.length; b++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error(Cu);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, b = -1;
              continue;
            }
            var w = d.orderedModifiers[b], _ = w.fn, R = w.options, N = R === void 0 ? {} : R, F = w.name;
            typeof _ == "function" && (d = _({
              state: d,
              options: N,
              name: F,
              instance: h
            }) || d);
          }
        }
      },
      update: Su(function() {
        return new Promise(function(x) {
          h.forceUpdate(), x(d);
        });
      }),
      destroy: function() {
        g(), v = !0;
      }
    };
    if (!Vo(s, l))
      return process.env.NODE_ENV !== "production" && console.error(jo), h;
    h.setOptions(f).then(function(x) {
      !v && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function y() {
      d.orderedModifiers.forEach(function(x) {
        var E = x.name, P = x.options, $ = P === void 0 ? {} : P, D = x.effect;
        if (typeof D == "function") {
          var b = D({
            state: d,
            name: E,
            instance: h,
            options: $
          }), w = function() {
          };
          u.push(b || w);
        }
      });
    }
    function g() {
      u.forEach(function(x) {
        return x();
      }), u = [];
    }
    return h;
  };
}
var Nu = [Jl, mu, Kl, jl, vu, lu, yu, Ul, du], Iu = /* @__PURE__ */ Au({
  defaultModifiers: Nu
}), ku = typeof Element < "u", Mu = typeof Map == "function", Lu = typeof Set == "function", Fu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Nr(e, t) {
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
        if (!Nr(e[n], t[n]))
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
        if (!Nr(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Lu && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Fu && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !Nr(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var ju = function(t, r) {
  try {
    return Nr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, Bu = [], Zr = function(t, r, n) {
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
  }), s = c[0], l = c[1], f = $t.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var y = h.state, g = Object.keys(y.elements);
        ha.flushSync(function() {
          l({
            styles: $o(g.map(function(x) {
              return [x, y.styles[x] || {}];
            })),
            attributes: $o(g.map(function(x) {
              return [x, y.attributes[x]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), d = $t.useMemo(function() {
    var v = {
      onFirstUpdate: a.onFirstUpdate,
      placement: a.placement,
      strategy: a.strategy,
      modifiers: [].concat(a.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return ju(i.current, v) ? i.current || v : (i.current = v, v);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, f]), u = $t.useRef();
  return Do(function() {
    u.current && u.current.setOptions(d);
  }, [d]), Do(function() {
    if (!(t == null || r == null)) {
      var v = n.createPopper || Iu, h = v(t, r, d);
      return u.current = h, function() {
        h.destroy(), u.current = null;
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
const bn = {
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, Vu = Object.freeze({
  ESC: 27
}), aa = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: i,
  hasArrow: a,
  distance: c,
  isDisabled: s,
  isVisible: l,
  onClick: f
}) => {
  const [d, u] = X(!1), v = H(null), h = H(null), y = le(() => t || pt("c-Toggletip-"), [t]), g = (b) => u(!1), x = (b) => {
    u(!d), d && document.activeElement === v.current && !l && setTimeout(() => {
      u((w) => !w);
    }, 100), f && f(b);
  }, E = (b) => {
    (b.keyCode | b.which) === Vu.ESC && d && u(!d);
  }, P = ye.map(e, (b) => qe(b) ? be(b, {
    ...b.props,
    "aria-describedby": t,
    ref: v,
    onClick: x,
    "data-open": d,
    ...l ? {} : {
      onBlur: g,
      onKeyDown: E
    }
  }) : null), {
    styles: $,
    attributes: D
  } = Zr(v.current, h.current, {
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
      enabled: d
    }]
  });
  return !r || ye.count(e) > 1 || s ? /* @__PURE__ */ p(at, {
    children: e
  }) : /* @__PURE__ */ C(at, {
    children: [P, /* @__PURE__ */ p(Ht, {
      id: "js-toggletip-portal",
      children: /* @__PURE__ */ C("div", {
        id: y,
        ref: h,
        role: "status",
        className: `${bn["c-toggletip"]} ${d && bn["c-toggletip--active"]} ${i != null ? i : ""}`,
        style: $.popper,
        ...D.popper,
        children: [r, a && /* @__PURE__ */ p("div", {
          className: bn["c-toggletip__arrow"],
          "data-popper-arrow": !0,
          style: $.arrow
        })]
      })
    })]
  });
};
aa.defaultProps = {
  placement: "auto"
};
aa.propTypes = {
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
const yn = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, qu = Object.freeze({
  ESC: 27
}), sa = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: i,
  hasArrow: a,
  distance: c,
  isDisabled: s
}) => {
  const [l, f] = X(!1), d = H(null), u = H(null), v = H(), h = le(() => t || pt("c-tooltip-"), [t]), y = (_) => {
    l || f(!l);
  }, g = (_) => f(!1), x = (_) => {
    (!l || document.activeElement !== d.current) && f(!l);
  }, E = () => {
    window.clearTimeout(v.current);
  }, P = (_) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, $ = (_) => {
    (_.keyCode | _.which) === qu.ESC && l && f(!l);
  }, D = ye.map(e, (_) => qe(_) ? be(_, {
    ..._.props,
    "aria-describedby": t,
    ref: d,
    onFocus: y,
    onBlur: g,
    onMouseEnter: x,
    onMouseLeave: P,
    onKeyDown: $
  }) : null), {
    styles: b,
    attributes: w
  } = Zr(d.current, u.current, {
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
  return !r || ye.count(e) > 1 || s ? /* @__PURE__ */ p(at, {
    children: e
  }) : /* @__PURE__ */ C(at, {
    children: [D, /* @__PURE__ */ p(Ht, {
      id: "js-tooltip-portal",
      children: /* @__PURE__ */ C("div", {
        id: h,
        ref: u,
        role: "tooltip",
        "data-open": l,
        onMouseEnter: E,
        onMouseLeave: P,
        className: `${yn["c-tooltip"]} ${l && yn["c-tooltip--active"]} ${i != null ? i : ""}`,
        style: b.popper,
        ...w.popper,
        children: [r, a && /* @__PURE__ */ p("div", {
          className: yn["c-tooltip__arrow"],
          "data-popper-arrow": !0,
          style: b.arrow
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
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const Zn = Ze(), ca = ({
  steps: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n,
  hideCloseButton: i,
  hideBackButton: a,
  ariaAttributes: c
}) => {
  const [s, l] = X(null), f = [...e.reduce((g, x, E) => [...g, {
    id: E + 1,
    ...x
  }], [])], d = (g) => f.filter((x) => x.id === g).reduce((x, E) => ({
    ...x,
    ...E
  }), {}), u = (g) => {
    const x = document.querySelector("#root");
    x.inert = g;
  }, v = () => {
    l((g) => g < f.length ? g + 1 : g);
  }, h = () => {
    l((g) => g > 0 + 1 ? g - 1 : g);
  }, y = () => {
    l(null), r(!t), u(!1), n && n.current.focus();
  };
  return G(() => {
    t && (l(f.shift().id), u(!0));
  }, [t]), /* @__PURE__ */ p(Zn.Provider, {
    value: {
      isOpen: t,
      lastId: f.length,
      ...d(s),
      methods: {
        onNext: v,
        onPrev: h,
        onClose: y
      }
    },
    children: /* @__PURE__ */ p(Ht, {
      id: "js-tour",
      children: t && /* @__PURE__ */ C(at, {
        children: [/* @__PURE__ */ p(Yu, {}), /* @__PURE__ */ p(la, {
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
const bt = {
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
    placement: f,
    distance: d,
    elementClass: u
  } = xe(Zn), v = H(), {
    onClose: h,
    onPrev: y,
    onNext: g
  } = a, {
    styles: x,
    attributes: E
  } = Zr(document.querySelector(s), v.current, {
    placement: f,
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, d || 8]
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
  }), P = () => qe(l) ? l : va("p", {
    className: bt["tour-description"]
  }, [l]), $ = () => {
    v.current.style.setProperty("--speed-movement", "0.8s"), g();
  };
  return /* @__PURE__ */ C(at, {
    children: [/* @__PURE__ */ p("div", {
      className: `${bt["c-layout"]}`
    }), /* @__PURE__ */ C("div", {
      id: `unique-id-tour-element-${c}`,
      ref: v,
      style: x.popper,
      className: `${bt["c-tour-content"]} ${n && "animate__animated animate__fadeIn animate__faster"} ${u != null ? u : ""}`,
      ...e,
      ...E.popper,
      children: [/* @__PURE__ */ C("span", {
        className: "u-sr-only",
        children: ["Parte ", c, " de ", i, "."]
      }), /* @__PURE__ */ p("div", {
        "aria-hidden": !0,
        className: bt["c-tour-progress"],
        children: /* @__PURE__ */ p("div", {
          className: bt["c-tour-progress-bar"],
          style: {
            transform: `scaleX(${c / i})`
          }
        })
      }), P(), /* @__PURE__ */ C("div", {
        className: bt["c-tour-button-container"],
        children: [!t && /* @__PURE__ */ p(Dt, {
          hasAriaLabel: !0,
          label: "Salir",
          onClick: h,
          icon: {
            name: "close",
            size: "big"
          }
        }), !r && /* @__PURE__ */ p(Dt, {
          disabled: c === 1,
          hasAriaLabel: !0,
          label: "Anterior",
          onClick: y,
          icon: {
            name: "navigate_before",
            size: "big"
          }
        }), /* @__PURE__ */ p(Dt, {
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
const Yu = () => {
  const {
    isOpen: e,
    id: t,
    target: r,
    helpLayerClass: n
  } = xe(Zn), [i, a] = X({}), c = () => {
    const {
      x: s,
      y: l,
      width: f,
      height: d
    } = document.querySelector(r).getBoundingClientRect();
    a({
      width: `${f}px`,
      height: `${d}px`,
      top: `${l}px`,
      left: `${s}px`
    });
  };
  return G(() => (r && c(), () => {
    a({});
  }), [r]), G(() => {
    if (!e || !r)
      return;
    const s = (l) => {
      c();
    };
    return e && window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s);
    };
  }, [e, r]), /* @__PURE__ */ p("div", {
    className: `${bt["c-tour-help"]} ${e && "animate__animated animate__fadeIn animate__faster animate__delay-2s"} ${n != null ? n : ""}`,
    style: i,
    children: /* @__PURE__ */ p("span", {
      className: bt["c-tour-number"],
      children: t
    })
  });
}, zu = "_active_r3225_90", Wu = "_iconPulse_r3225_1", fe = {
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
}, ua = ({
  src: e,
  width: t = "1000",
  hasDescription: r,
  description: n,
  addClass: i,
  poster: a,
  ...c
}) => {
  const [s, l] = X({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, d] = X({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [u, v] = X({
    state: !1,
    label: "Reproducir video"
  }), [h, y] = X({
    state: !0,
    label: "Volumen"
  }), [g, x] = X(100), [E, P] = X({
    state: !1,
    label: "Ver en pantalla completa"
  }), [$, D] = X(!1), [b, w] = X(100), _ = H(null), R = H(null), N = H(null), F = H(null), M = H(null), J = H(null), Z = H(null), re = H(null), [de, ie] = X(!1), ee = (A) => {
    A.classList.add(`${fe.active}`), setTimeout(() => {
      A.classList.remove(`${fe.active}`);
    }, 650);
  };
  function Ee() {
    const A = R.current;
    u.state ? (A.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (A.play(), v({
      state: !0,
      label: "Pausar video"
    })), ee(J.current);
  }
  function he() {
    const A = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, T = _.current;
    A ? (P({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (P({
      state: !0,
      label: "Salir de pantalla completa"
    }), T.requestFullscreen ? T.requestFullscreen() : T.mozRequestFullScreen ? T.mozRequestFullScreen() : T.webkitRequestFullScreen ? T.webkitRequestFullScreen() : T.msRequestFullscreen && T.msRequestFullscreen());
  }
  function O(A) {
    const T = parseInt(A, 10), Q = T >= 3600 ? Math.floor(T / 3600) : 0, me = Math.floor((T - Q * 3600) / 60), Oe = T - Q * 3600 - me * 60, De = j(V(Q)), ot = j(V(me)), lt = j(V(Oe));
    return {
      hours: De,
      minutes: ot,
      seconds: lt
    };
  }
  function I(A) {
    const T = B(A.duration), Q = B(A.currentTime);
    d({
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
    const T = F.current, Q = R.current, Oe = A.nativeEvent.offsetX / T.offsetWidth * Q.duration;
    Q.currentTime = Oe;
  }
  function L(A) {
    const T = R.current, Q = A.target.value, me = Q / 100;
    w(Q), x(Q), T.volume = me, h.state || y({
      state: !0,
      label: "Volumen"
    });
  }
  const Y = () => {
    if (h.state) {
      y({
        state: !1,
        label: "Mutear video"
      });
      const A = R.current, T = 0, Q = T;
      w(T), A.volume = Q;
    } else {
      y({
        state: !0,
        label: "Volumen"
      });
      const A = R.current, T = g, Q = T / 100;
      w(T), A.volume = Q;
    }
  }, z = function(A) {
    (A.keyCode || A.which) === 32 && Ee();
  }, K = function(A) {
    const T = Math.floor(F.current.getAttribute("aria-valuenow"));
    if (document.activeElement === M.current)
      return null;
    if ((A.keyCode || A.which) === 37) {
      const Q = T - 5;
      Q >= 0 ? R.current.currentTime = Q : R.current.currentTime = 0, ee(re.current);
    }
    if ((A.keyCode || A.which) === 39) {
      const Q = T + 5;
      Q >= R.current.duration ? R.current.currentTime = R.current.duration : R.current.currentTime = Q, ee(Z.current);
    }
  }, q = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return G(() => {
    const A = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(A, "caption") && ie(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(A, "volume") && w(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), G(() => {
    localStorage.setItem("ui-video", JSON.stringify({
      caption: de,
      volume: b
    }));
  }, [de, b]), G(() => (N.current ? N.current.addEventListener("error", () => {
    D(!0);
  }) : D(!0), e.caption && D(!1), () => {
    N.current && N.current.removeEventListener("error", () => {
      D(!0);
    });
  }), [e.caption]), /* @__PURE__ */ C("figure", {
    className: `${fe["c-vid"]} ${i}`,
    style: {
      maxWidth: `${t}px`
    },
    onKeyDown: (A) => K(A),
    ...c,
    children: [/* @__PURE__ */ C("div", {
      className: `${fe["c-vid__container"]} ${i}`,
      ref: _,
      children: [/* @__PURE__ */ C("div", {
        className: fe["c-vid__wrapper"],
        children: [/* @__PURE__ */ C("video", {
          ref: R,
          onTimeUpdate: (A) => I(A.target),
          onLoadedData: (A) => I(A.target),
          onClick: Ee,
          className: `${fe["c-vid__video"]} ${de ? "" : fe["no-captions"]}`,
          ...a && {
            poster: a
          },
          children: [/* @__PURE__ */ p("source", {
            src: e.video
          }), e.caption ? /* @__PURE__ */ p("track", {
            ref: N,
            src: e.caption,
            label: "Subt\xEDtulos en espa\xF1ol",
            kind: "subtitles",
            srcLang: "es",
            default: !0
          }) : ""]
        }), /* @__PURE__ */ C("div", {
          className: fe["c-vid__icon-container"],
          children: [/* @__PURE__ */ p("div", {
            ref: re,
            className: fe["c-vid__icon"],
            children: /* @__PURE__ */ p(we, {
              children: /* @__PURE__ */ p("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "48",
                width: "48",
                viewBox: "0 0 48 48",
                children: /* @__PURE__ */ p("path", {
                  id: "fast_rewind",
                  d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z"
                })
              })
            })
          }), /* @__PURE__ */ p("div", {
            ref: J,
            className: fe["c-vid__icon"],
            children: /* @__PURE__ */ p(we, {
              children: /* @__PURE__ */ p("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "48",
                width: "48",
                viewBox: "0 0 48 48",
                children: u.state ? /* @__PURE__ */ p("path", {
                  id: "play",
                  d: "M16 37.85v-28l22 14Z"
                }) : /* @__PURE__ */ p("path", {
                  id: "pause",
                  d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z"
                })
              })
            })
          }), /* @__PURE__ */ p("div", {
            ref: Z,
            className: fe["c-vid__icon"],
            children: /* @__PURE__ */ p(we, {
              children: /* @__PURE__ */ p("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "48",
                width: "48",
                viewBox: "0 0 48 48",
                children: /* @__PURE__ */ p("path", {
                  id: "fast_forward",
                  d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z"
                })
              })
            })
          })]
        })]
      }), /* @__PURE__ */ p("div", {
        className: fe["progress-container"],
        children: /* @__PURE__ */ C("div", {
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
          ref: F,
          children: [/* @__PURE__ */ p("div", {
            className: fe["c-vid__progress-bar"],
            style: {
              transform: `scaleX(calc(${f.totalSeconds} / ${s.totalSeconds}))`
            }
          }), /* @__PURE__ */ p("div", {
            className: fe["progress-sphere"],
            style: {
              left: `min(calc((${f.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
            }
          })]
        })
      }), /* @__PURE__ */ C("div", {
        className: fe["c-vid__controls"],
        children: [/* @__PURE__ */ p("button", {
          className: `${fe["c-vid__button"]} tour`,
          "aria-label": u.label,
          onClick: Ee,
          "data-description": "Este bot\xF3n reproduce el video",
          children: /* @__PURE__ */ p(we, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: u.state ? /* @__PURE__ */ p("path", {
                id: "pause",
                d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z"
              }) : /* @__PURE__ */ p("path", {
                id: "play",
                d: "M16 37.85v-28l22 14Z"
              })
            })
          })
        }), /* @__PURE__ */ p("button", {
          className: `${fe["c-vid__button"]} tour`,
          "aria-label": h.label,
          "data-description": "Este bot\xF3n controla el volumen",
          onClick: Y,
          children: /* @__PURE__ */ p(we, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: h.state ? /* @__PURE__ */ p("path", {
                id: "volume_on",
                d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z"
              }) : /* @__PURE__ */ p("path", {
                id: "volume_off",
                d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z"
              })
            })
          })
        }), /* @__PURE__ */ C("label", {
          className: fe["c-vid__volume"],
          htmlFor: "volumeControl",
          children: [/* @__PURE__ */ p("span", {
            className: "u-sr-only",
            children: "Controlar volumen"
          }), /* @__PURE__ */ p("input", {
            className: fe["c-vid__volume-item"],
            ref: M,
            id: "volumeControl",
            type: "range",
            min: "0",
            max: "100",
            step: "5",
            value: b,
            onChange: L,
            "aria-valuetext": `${b}%`
          })]
        }), /* @__PURE__ */ C("p", {
          className: fe["c-vid__time"],
          "aria-hidden": "true",
          children: [/* @__PURE__ */ p("span", {
            children: f.string
          }), "/", /* @__PURE__ */ p("span", {
            children: s.string
          })]
        }), /* @__PURE__ */ p("button", {
          disabled: $,
          "aria-pressed": $ ? void 0 : de,
          onClick: () => ie(!de),
          "aria-label": "Subt\xEDtulos",
          className: `${fe["c-vid__button"]} ${fe["c-vid__subtitles"]}`,
          children: /* @__PURE__ */ p(we, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: $ ? /* @__PURE__ */ p("path", {
                id: "closed_caption_disabled",
                d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z"
              }) : /* @__PURE__ */ p("path", {
                id: "closed_caption",
                d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z"
              })
            })
          })
        }), /* @__PURE__ */ p("button", {
          className: fe["c-vid__button"],
          "aria-label": E.label,
          onClick: he,
          children: /* @__PURE__ */ p(we, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: E.state ? /* @__PURE__ */ p("path", {
                id: "fullscreen_exit",
                d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z"
              }) : /* @__PURE__ */ p("path", {
                id: "fullscreen",
                d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z"
              })
            })
          })
        })]
      })]
    }), r && /* @__PURE__ */ C("figcaption", {
      className: fe["c-vid__caption"],
      children: [/* @__PURE__ */ C("strong", {
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
const Kn = Ze(), da = ({
  children: e,
  isVisible: t
}) => {
  const [r, n] = X(!1), i = H(), a = () => n(!r), c = (s) => {
    i.current || (i.current = s);
  };
  return G(() => {
    t !== void 0 && n(t);
  }, [t]), /* @__PURE__ */ p(Kn.Provider, {
    value: {
      isOpen: r,
      onOpen: a,
      setRefButton: c,
      refButton: i
    },
    children: e
  });
};
da.defaultProps = {
  isVisible: !1
};
da.propTypes = {
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
  } = xe(Kn);
  if (ye.count(e) > 1)
    return null;
  const i = (c) => {
    r(), t && t(c);
  }, a = (c) => qe(c) ? be(c, {
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
const xn = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, _n = Object.freeze({
  ESC: 27,
  TAB: 9
}), fa = ({
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
  } = xe(Kn), l = H(), f = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', d = (h) => {
    const y = l.current.querySelectorAll(f), g = s.current, x = y[0], E = y[y.length - 1];
    if ((h.keyCode || h.which) === _n.TAB && document.activeElement === E)
      return g.focus(), h.preventDefault();
    h.shiftKey && (h.keyCode || h.which) === _n.TAB && document.activeElement === x && (g.focus(), h.preventDefault()), (h.keyCode || h.which) === _n.ESC && g.focus();
  }, {
    styles: u,
    attributes: v
  } = Zr(s.current, l.current, {
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
  return G(() => {
    c && l.current.focus();
  }, [c]), n ? /* @__PURE__ */ p(at, {
    children: e
  }) : /* @__PURE__ */ p(Ht, {
    id: "js-popover-modal-portal",
    children: /* @__PURE__ */ C("div", {
      ref: l,
      role: "status",
      tabIndex: -1,
      className: `${xn["c-popover-modal"]} ${c && xn["c-popover-modal--active"]} ${t != null ? t : ""}`,
      style: u.popper,
      onKeyDown: d,
      ...v.popper,
      children: [e, r && /* @__PURE__ */ p("div", {
        className: xn["c-popover-modal__arrow"],
        "data-popper-arrow": !0,
        style: u.arrow
      })]
    })
  });
};
fa.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
fa.defaultProps = {
  hasArrow: !1,
  placement: "auto"
};
const Hu = (e, t) => {
  const [r, n] = X(() => {
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
}, Gu = (e, t, r) => {
  const [n, i] = X(r), a = e.map((s) => window.matchMedia(s)), c = () => {
    const s = a.findIndex((l) => l.matches);
    return typeof t[s] < "u" ? t[s] : r;
  };
  return G(() => {
    i(c);
    const s = (l) => i(c);
    return a.forEach((l) => l.addEventListener("change", s)), () => {
      a.forEach((l) => l.removeEventListener("change", s));
    };
  }, []), n;
}, Qu = () => {
  const [e, t] = Hu("dark-mode-enabled"), r = Gu(["(prefers-color-scheme: dark)"], [!0], !1), n = typeof e < "u" ? e : r;
  return G(() => {
    t(r);
  }, [r]), G(() => {
    const i = window.document.body;
    n ? i.setAttribute("data-dark-mode", n) : i.removeAttribute("data-dark-mode", n);
  }, [n]), [n, t];
}, Zu = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), ed = (e) => {
  const { root: t, rootMargin: r, threshold: n } = e || Zu, [i, a] = X(!1), [c, s] = X(null);
  return G(() => {
    if (!c) {
      a(!1);
      return;
    }
    const l = new IntersectionObserver(
      ([f]) => {
        a(f.isIntersecting);
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
}, pa = (e) => {
  let t = {};
  for (const r in e)
    if (typeof e[r] == "object") {
      const n = pa(e[r]);
      for (const i in n)
        t = {
          ...t,
          [r.includes("accents") || r.includes("palette") ? i : `${r}-${i}`]: n[i]
        };
    } else
      t[r] = e[r];
  return t;
}, td = (e) => pa(e);
export {
  Ra as Accordion,
  Go as AccordionButton,
  Zo as AccordionItem,
  Ko as AccordionPanel,
  Xo as Audio,
  Dt as Button,
  vl as ButtonSection,
  ei as CheckBox,
  ys as CheckBoxGroup,
  ws as Col,
  Ts as Content,
  _i as DragAndDrop,
  xi as DragAndDropContext,
  wi as Draggable,
  Ei as Droppable,
  Ju as Filter,
  Ti as GeneralDraggable,
  we as Icon,
  Oi as Image,
  Si as Input,
  el as InputGroup,
  Pi as InputLeftAddon,
  $i as InputRightAddon,
  Ri as InputStyle,
  rl as Kbd,
  Di as Link,
  nl as List,
  Ai as ListItem,
  Ni as Modal,
  sl as ModalCloseButton,
  Ii as ModalContent,
  zr as ModalContext,
  ki as ModalOverlay,
  Yi as NavSection,
  ji as NumberDecrementStepper,
  Bi as NumberIncrementStepper,
  Mi as NumberInput,
  Wr as NumberInputContext,
  Li as NumberInputField,
  Fi as NumberInputStepper,
  ol as OrderedList,
  Vi as Pagination,
  Vn as PaginationItem,
  dl as Panel,
  Ur as PanelContext,
  ml as Paper,
  da as PopoverModal,
  Uu as PopoverModalButton,
  fa as PopoverModalContent,
  Kn as PopoverModalContext,
  Ht as Portal,
  wl as Row,
  qi as Section,
  zi as Select,
  El as SelectGroup,
  Wi as Switch,
  Ui as Tab,
  Hi as TabList,
  Gi as TabPanel,
  Zi as TabPanels,
  Tl as Tabs,
  qn as TabsContext,
  Ki as TextArea,
  Ol as ThemeProvider,
  aa as Toggletip,
  sa as Tooltip,
  ca as Tour,
  Zn as TourContext,
  la as TourElement,
  Yu as TourHelpLayer,
  il as UnorderedList,
  ua as Video,
  td as createTheme,
  Qu as useDarkMode,
  Hu as useLocalStorage,
  Gu as useMedia,
  ed as useOnScreen,
  cl as usePagination,
  yl as usePortal
};
