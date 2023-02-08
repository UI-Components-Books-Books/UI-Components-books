import * as $t from "react";
import qo, { Children as we, useState as K, useEffect as H, isValidElement as Ge, cloneElement as _e, forwardRef as ct, useRef as U, useMemo as ue, useLayoutEffect as Yo, useCallback as Ce, createContext as Ze, memo as zo, useReducer as Cn, useContext as be, createElement as va } from "react";
import * as ha from "react-dom";
import { unstable_batchedUpdates as Kt, createPortal as Wo } from "react-dom";
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, o = { exports: {} }, en = { exports: {} }, ce = {};
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
    return ce;
  Jn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function $(b) {
    if (typeof b == "object" && b !== null) {
      var S = b.$$typeof;
      switch (S) {
        case t:
          switch (b = b.type, b) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case u:
                case y:
                case m:
                case c:
                  return b;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function D(b) {
    return $(b) === f;
  }
  return ce.AsyncMode = l, ce.ConcurrentMode = f, ce.ContextConsumer = s, ce.ContextProvider = c, ce.Element = t, ce.ForwardRef = u, ce.Fragment = n, ce.Lazy = y, ce.Memo = m, ce.Portal = r, ce.Profiler = a, ce.StrictMode = i, ce.Suspense = d, ce.isAsyncMode = function(b) {
    return D(b) || $(b) === l;
  }, ce.isConcurrentMode = D, ce.isContextConsumer = function(b) {
    return $(b) === s;
  }, ce.isContextProvider = function(b) {
    return $(b) === c;
  }, ce.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ce.isForwardRef = function(b) {
    return $(b) === u;
  }, ce.isFragment = function(b) {
    return $(b) === n;
  }, ce.isLazy = function(b) {
    return $(b) === y;
  }, ce.isMemo = function(b) {
    return $(b) === m;
  }, ce.isPortal = function(b) {
    return $(b) === r;
  }, ce.isProfiler = function(b) {
    return $(b) === a;
  }, ce.isStrictMode = function(b) {
    return $(b) === i;
  }, ce.isSuspense = function(b) {
    return $(b) === d;
  }, ce.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === a || b === i || b === d || b === v || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === m || b.$$typeof === c || b.$$typeof === s || b.$$typeof === u || b.$$typeof === x || b.$$typeof === E || b.$$typeof === P || b.$$typeof === g);
  }, ce.typeOf = $, ce;
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
var Qn;
function ga() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function $(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === f || T === a || T === i || T === d || T === v || typeof T == "object" && T !== null && (T.$$typeof === y || T.$$typeof === m || T.$$typeof === c || T.$$typeof === s || T.$$typeof === u || T.$$typeof === x || T.$$typeof === E || T.$$typeof === P || T.$$typeof === g);
    }
    function D(T) {
      if (typeof T == "object" && T !== null) {
        var J = T.$$typeof;
        switch (J) {
          case t:
            var me = T.type;
            switch (me) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case d:
                return me;
              default:
                var Oe = me && me.$$typeof;
                switch (Oe) {
                  case s:
                  case u:
                  case y:
                  case m:
                  case c:
                    return Oe;
                  default:
                    return J;
                }
            }
          case r:
            return J;
        }
      }
    }
    var b = l, S = f, _ = s, w = c, N = t, L = u, I = n, Q = y, Z = m, re = r, se = a, ie = i, ee = d, Ee = !1;
    function he(T) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(T) || D(T) === l;
    }
    function O(T) {
      return D(T) === f;
    }
    function k(T) {
      return D(T) === s;
    }
    function B(T) {
      return D(T) === c;
    }
    function V(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function j(T) {
      return D(T) === u;
    }
    function W(T) {
      return D(T) === n;
    }
    function F(T) {
      return D(T) === y;
    }
    function Y(T) {
      return D(T) === m;
    }
    function z(T) {
      return D(T) === r;
    }
    function X(T) {
      return D(T) === a;
    }
    function q(T) {
      return D(T) === i;
    }
    function A(T) {
      return D(T) === d;
    }
    le.AsyncMode = b, le.ConcurrentMode = S, le.ContextConsumer = _, le.ContextProvider = w, le.Element = N, le.ForwardRef = L, le.Fragment = I, le.Lazy = Q, le.Memo = Z, le.Portal = re, le.Profiler = se, le.StrictMode = ie, le.Suspense = ee, le.isAsyncMode = he, le.isConcurrentMode = O, le.isContextConsumer = k, le.isContextProvider = B, le.isElement = V, le.isForwardRef = j, le.isFragment = W, le.isLazy = F, le.isMemo = Y, le.isPortal = z, le.isProfiler = X, le.isStrictMode = q, le.isSuspense = A, le.isValidElementType = $, le.typeOf = D;
  }()), le;
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
      var l = Object.getOwnPropertyNames(c).map(function(u) {
        return c[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        f[u] = u;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return tn = i() ? Object.assign : function(a, c) {
    for (var s, l = n(a), f, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
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
      for (var u in a)
        if (n(a, u)) {
          var d;
          try {
            if (typeof a[u] != "function") {
              var v = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            d = a[u](c, u, l, s, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var m = f ? f() : "";
            e(
              "Failed " + s + " type: " + d.message + (m != null ? m : "")
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
    var f = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var k = O && (f && O[f] || O[u]);
      if (typeof k == "function")
        return k;
    }
    var v = "<<anonymous>>", m = {
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
      instanceOf: S,
      node: L(),
      objectOf: w,
      oneOf: _,
      oneOfType: N,
      shape: Q,
      exact: Z
    };
    function y(O, k) {
      return O === k ? O !== 0 || 1 / O === 1 / k : O !== O && k !== k;
    }
    function g(O, k) {
      this.message = O, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function x(O) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, B = 0;
      function V(W, F, Y, z, X, q, A) {
        if (z = z || v, q = q || Y, A !== r) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = z + ":" + Y;
            !k[J] && B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[J] = !0, B++);
          }
        }
        return F[Y] == null ? W ? F[Y] === null ? new g("The " + X + " `" + q + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new g("The " + X + " `" + q + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : O(F, Y, z, X, q);
      }
      var j = V.bind(null, !1);
      return j.isRequired = V.bind(null, !0), j;
    }
    function E(O) {
      function k(B, V, j, W, F, Y) {
        var z = B[V], X = ie(z);
        if (X !== O) {
          var q = ee(z);
          return new g(
            "Invalid " + W + " `" + F + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return x(k);
    }
    function P() {
      return x(c);
    }
    function $(O) {
      function k(B, V, j, W, F) {
        if (typeof O != "function")
          return new g("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var Y = B[V];
        if (!Array.isArray(Y)) {
          var z = ie(Y);
          return new g("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an array."));
        }
        for (var X = 0; X < Y.length; X++) {
          var q = O(Y, X, j, W, F + "[" + X + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return x(k);
    }
    function D() {
      function O(k, B, V, j, W) {
        var F = k[B];
        if (!s(F)) {
          var Y = ie(F);
          return new g("Invalid " + j + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(O);
    }
    function b() {
      function O(k, B, V, j, W) {
        var F = k[B];
        if (!e.isValidElementType(F)) {
          var Y = ie(F);
          return new g("Invalid " + j + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(O);
    }
    function S(O) {
      function k(B, V, j, W, F) {
        if (!(B[V] instanceof O)) {
          var Y = O.name || v, z = he(B[V]);
          return new g("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return x(k);
    }
    function _(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function k(B, V, j, W, F) {
        for (var Y = B[V], z = 0; z < O.length; z++)
          if (y(Y, O[z]))
            return null;
        var X = JSON.stringify(O, function(A, T) {
          var J = ee(T);
          return J === "symbol" ? String(T) : T;
        });
        return new g("Invalid " + W + " `" + F + "` of value `" + String(Y) + "` " + ("supplied to `" + j + "`, expected one of " + X + "."));
      }
      return x(k);
    }
    function w(O) {
      function k(B, V, j, W, F) {
        if (typeof O != "function")
          return new g("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var Y = B[V], z = ie(Y);
        if (z !== "object")
          return new g("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an object."));
        for (var X in Y)
          if (n(Y, X)) {
            var q = O(Y, X, j, W, F + "." + X, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return x(k);
    }
    function N(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var k = 0; k < O.length; k++) {
        var B = O[k];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(B) + " at index " + k + "."
          ), c;
      }
      function V(j, W, F, Y, z) {
        for (var X = [], q = 0; q < O.length; q++) {
          var A = O[q], T = A(j, W, F, Y, z, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && X.push(T.data.expectedType);
        }
        var J = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new g("Invalid " + Y + " `" + z + "` supplied to " + ("`" + F + "`" + J + "."));
      }
      return x(V);
    }
    function L() {
      function O(k, B, V, j, W) {
        return re(k[B]) ? null : new g("Invalid " + j + " `" + W + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return x(O);
    }
    function I(O, k, B, V, j) {
      return new g(
        (O || "React class") + ": " + k + " type `" + B + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function Q(O) {
      function k(B, V, j, W, F) {
        var Y = B[V], z = ie(Y);
        if (z !== "object")
          return new g("Invalid " + W + " `" + F + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var X in O) {
          var q = O[X];
          if (typeof q != "function")
            return I(j, W, F, X, ee(q));
          var A = q(Y, X, j, W, F + "." + X, r);
          if (A)
            return A;
        }
        return null;
      }
      return x(k);
    }
    function Z(O) {
      function k(B, V, j, W, F) {
        var Y = B[V], z = ie(Y);
        if (z !== "object")
          return new g("Invalid " + W + " `" + F + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        var X = t({}, B[V], O);
        for (var q in X) {
          var A = O[q];
          if (n(O, q) && typeof A != "function")
            return I(j, W, F, q, ee(A));
          if (!A)
            return new g(
              "Invalid " + W + " `" + F + "` key `" + q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(B[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var T = A(Y, q, j, W, F + "." + q, r);
          if (T)
            return T;
        }
        return null;
      }
      return x(k);
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
          var k = d(O);
          if (k) {
            var B = k.call(O), V;
            if (k !== O.entries) {
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
    function se(O, k) {
      return O === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function ie(O) {
      var k = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : se(k, O) ? "symbol" : k;
    }
    function ee(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var k = ie(O);
      if (k === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function Ee(O) {
      var k = ee(O);
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
    function he(O) {
      return !O.constructor || !O.constructor.name ? v : O.constructor.name;
    }
    return m.checkPropTypes = i, m.resetWarningCache = i.resetWarningCache, m.PropTypes = m, m;
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
    function n(c, s, l, f, u, d) {
      if (d !== e) {
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
}, je = (e, t) => we.toArray(e).filter((r) => t.indexOf(Ta(r)) !== -1);
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
    var u, d = {}, v = null, m = null;
    f !== void 0 && (v = "" + f), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: v, ref: m, props: d, _owner: i.current };
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
    var e = qo, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function x(h) {
      if (h === null || typeof h != "object")
        return null;
      var R = y && h[y] || h[g];
      return typeof R == "function" ? R : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(h) {
      {
        for (var R = arguments.length, M = new Array(R > 1 ? R - 1 : 0), G = 1; G < R; G++)
          M[G - 1] = arguments[G];
        $("error", h, M);
      }
    }
    function $(h, R, M) {
      {
        var G = E.ReactDebugCurrentFrame, ae = G.getStackAddendum();
        ae !== "" && (R += "%s", M = M.concat([ae]));
        var de = M.map(function(ne) {
          return String(ne);
        });
        de.unshift("Warning: " + R), Function.prototype.apply.call(console[h], console, de);
      }
    }
    var D = !1, b = !1, S = !1, _ = !1, w = !1, N;
    N = Symbol.for("react.module.reference");
    function L(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === n || h === a || w || h === i || h === f || h === u || _ || h === m || D || b || S || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === d || h.$$typeof === c || h.$$typeof === s || h.$$typeof === l || h.$$typeof === N || h.getModuleId !== void 0));
    }
    function I(h, R, M) {
      var G = h.displayName;
      if (G)
        return G;
      var ae = R.displayName || R.name || "";
      return ae !== "" ? M + "(" + ae + ")" : M;
    }
    function Q(h) {
      return h.displayName || "Context";
    }
    function Z(h) {
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
        case f:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case s:
            var R = h;
            return Q(R) + ".Consumer";
          case c:
            var M = h;
            return Q(M._context) + ".Provider";
          case l:
            return I(h, h.render, "ForwardRef");
          case d:
            var G = h.displayName || null;
            return G !== null ? G : Z(h.type) || "Memo";
          case v: {
            var ae = h, de = ae._payload, ne = ae._init;
            try {
              return Z(ne(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, se = 0, ie, ee, Ee, he, O, k, B;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function j() {
      {
        if (se === 0) {
          ie = console.log, ee = console.info, Ee = console.warn, he = console.error, O = console.group, k = console.groupCollapsed, B = console.groupEnd;
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
        se++;
      }
    }
    function W() {
      {
        if (se--, se === 0) {
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
              value: Ee
            }),
            error: re({}, h, {
              value: he
            }),
            group: re({}, h, {
              value: O
            }),
            groupCollapsed: re({}, h, {
              value: k
            }),
            groupEnd: re({}, h, {
              value: B
            })
          });
        }
        se < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = E.ReactCurrentDispatcher, Y;
    function z(h, R, M) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (ae) {
            var G = ae.stack.trim().match(/\n( *(at )?)/);
            Y = G && G[1] || "";
          }
        return `
` + Y + h;
      }
    }
    var X = !1, q;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      q = new A();
    }
    function T(h, R) {
      if (!h || X)
        return "";
      {
        var M = q.get(h);
        if (M !== void 0)
          return M;
      }
      var G;
      X = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = F.current, F.current = null, j();
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
            } catch (dt) {
              G = dt;
            }
            Reflect.construct(h, [], ne);
          } else {
            try {
              ne.call();
            } catch (dt) {
              G = dt;
            }
            h.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            G = dt;
          }
          h();
        }
      } catch (dt) {
        if (dt && G && typeof dt.stack == "string") {
          for (var te = dt.stack.split(`
`), Ne = G.stack.split(`
`), ge = te.length - 1, ye = Ne.length - 1; ge >= 1 && ye >= 0 && te[ge] !== Ne[ye]; )
            ye--;
          for (; ge >= 1 && ye >= 0; ge--, ye--)
            if (te[ge] !== Ne[ye]) {
              if (ge !== 1 || ye !== 1)
                do
                  if (ge--, ye--, ye < 0 || te[ge] !== Ne[ye]) {
                    var ze = `
` + te[ge].replace(" at new ", " at ");
                    return h.displayName && ze.includes("<anonymous>") && (ze = ze.replace("<anonymous>", h.displayName)), typeof h == "function" && q.set(h, ze), ze;
                  }
                while (ge >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        X = !1, F.current = de, W(), Error.prepareStackTrace = ae;
      }
      var It = h ? h.displayName || h.name : "", Xn = It ? z(It) : "";
      return typeof h == "function" && q.set(h, Xn), Xn;
    }
    function J(h, R, M) {
      return T(h, !1);
    }
    function me(h) {
      var R = h.prototype;
      return !!(R && R.isReactComponent);
    }
    function Oe(h, R, M) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return T(h, me(h));
      if (typeof h == "string")
        return z(h);
      switch (h) {
        case f:
          return z("Suspense");
        case u:
          return z("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            return J(h.render);
          case d:
            return Oe(h.type, R, M);
          case v: {
            var G = h, ae = G._payload, de = G._init;
            try {
              return Oe(de(ae), R, M);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, ot = {}, lt = E.ReactDebugCurrentFrame;
    function it(h) {
      if (h) {
        var R = h._owner, M = Oe(h.type, h._source, R ? R.type : null);
        lt.setExtraStackFrame(M);
      } else
        lt.setExtraStackFrame(null);
    }
    function Se(h, R, M, G, ae) {
      {
        var de = Function.call.bind(De);
        for (var ne in h)
          if (de(h, ne)) {
            var te = void 0;
            try {
              if (typeof h[ne] != "function") {
                var Ne = Error((G || "React class") + ": " + M + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              te = h[ne](R, ne, G, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              te = ge;
            }
            te && !(te instanceof Error) && (it(ae), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", M, ne, typeof te), it(null)), te instanceof Error && !(te.message in ot) && (ot[te.message] = !0, it(ae), P("Failed %s type: %s", M, te.message), it(null));
          }
      }
    }
    var Xe = Array.isArray;
    function Je(h) {
      return Xe(h);
    }
    function xt(h) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, M = R && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return M;
      }
    }
    function vt(h) {
      try {
        return _t(h), !1;
      } catch {
        return !0;
      }
    }
    function _t(h) {
      return "" + h;
    }
    function wt(h) {
      if (vt(h))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xt(h)), _t(h);
    }
    var Ae = E.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ht, Gt, qe;
    qe = {};
    function _r(h) {
      if (De.call(h, "ref")) {
        var R = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Kr(h) {
      if (De.call(h, "key")) {
        var R = Object.getOwnPropertyDescriptor(h, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Xr(h, R) {
      if (typeof h.ref == "string" && Ae.current && R && Ae.current.stateNode !== R) {
        var M = Z(Ae.current.type);
        qe[M] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Ae.current.type), h.ref), qe[M] = !0);
      }
    }
    function wr(h, R) {
      {
        var M = function() {
          ht || (ht = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Jr(h, R) {
      {
        var M = function() {
          Gt || (Gt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Er = function(h, R, M, G, ae, de, ne) {
      var te = {
        $$typeof: t,
        type: h,
        key: R,
        ref: M,
        props: ne,
        _owner: de
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
    function Qr(h, R, M, G, ae) {
      {
        var de, ne = {}, te = null, Ne = null;
        M !== void 0 && (wt(M), te = "" + M), Kr(R) && (wt(R.key), te = "" + R.key), _r(R) && (Ne = R.ref, Xr(R, ae));
        for (de in R)
          De.call(R, de) && !Qe.hasOwnProperty(de) && (ne[de] = R[de]);
        if (h && h.defaultProps) {
          var ge = h.defaultProps;
          for (de in ge)
            ne[de] === void 0 && (ne[de] = ge[de]);
        }
        if (te || Ne) {
          var ye = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          te && wr(ne, ye), Ne && Jr(ne, ye);
        }
        return Er(h, te, Ne, ae, G, Ae.current, ne);
      }
    }
    var Zt = E.ReactCurrentOwner, Tr = E.ReactDebugCurrentFrame;
    function ve(h) {
      if (h) {
        var R = h._owner, M = Oe(h.type, h._source, R ? R.type : null);
        Tr.setExtraStackFrame(M);
      } else
        Tr.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function $e(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function et() {
      {
        if (Zt.current) {
          var h = Z(Zt.current.type);
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
          var R = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + R + ":" + M + ".";
        }
        return "";
      }
    }
    var ke = {};
    function Ye(h) {
      {
        var R = et();
        if (!R) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (R = `

Check the top-level render call using <` + M + ">.");
        }
        return R;
      }
    }
    function ut(h, R) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var M = Ye(R);
        if (ke[M])
          return;
        ke[M] = !0;
        var G = "";
        h && h._owner && h._owner !== Zt.current && (G = " It was passed a child from " + Z(h._owner.type) + "."), ve(h), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, G), ve(null);
      }
    }
    function Me(h, R) {
      {
        if (typeof h != "object")
          return;
        if (Je(h))
          for (var M = 0; M < h.length; M++) {
            var G = h[M];
            $e(G) && ut(G, R);
          }
        else if ($e(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ae = x(h);
          if (typeof ae == "function" && ae !== h.entries)
            for (var de = ae.call(h), ne; !(ne = de.next()).done; )
              $e(ne.value) && ut(ne.value, R);
        }
      }
    }
    function Et(h) {
      {
        var R = h.type;
        if (R == null || typeof R == "string")
          return;
        var M;
        if (typeof R == "function")
          M = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === l || R.$$typeof === d))
          M = R.propTypes;
        else
          return;
        if (M) {
          var G = Z(R);
          Se(M, h.props, "prop", G, h);
        } else if (R.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var ae = Z(R);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(h) {
      {
        for (var R = Object.keys(h.props), M = 0; M < R.length; M++) {
          var G = R[M];
          if (G !== "children" && G !== "key") {
            ve(h), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), ve(null);
            break;
          }
        }
        h.ref !== null && (ve(h), P("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function Ot(h, R, M, G, ae, de) {
      {
        var ne = L(h);
        if (!ne) {
          var te = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = Ie(ae);
          Ne ? te += Ne : te += et();
          var ge;
          h === null ? ge = "null" : Je(h) ? ge = "array" : h !== void 0 && h.$$typeof === t ? (ge = "<" + (Z(h.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof h, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, te);
        }
        var ye = Qr(h, R, M, ae, de);
        if (ye == null)
          return ye;
        if (ne) {
          var ze = R.children;
          if (ze !== void 0)
            if (G)
              if (Je(ze)) {
                for (var It = 0; It < ze.length; It++)
                  Me(ze[It], h);
                Object.freeze && Object.freeze(ze);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(ze, h);
        }
        return h === n ? Tt(ye) : Et(ye), ye;
      }
    }
    function Nt(h, R, M) {
      return Ot(h, R, M, !0);
    }
    function Or(h, R, M) {
      return Ot(h, R, M, !1);
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
  const [n, i] = K(), a = (s) => {
    t ? n.includes(s) ? i(n.filter((l) => l !== s)) : i([...n, s]) : i(s);
  };
  H(() => (i(t ? r || [] : r != null ? r : null), () => {
    i(null);
  }), [t, r]);
  const c = we.map(e, (s, l) => Ge(s) ? _e(s, {
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
  const a = () => n(t), c = () => typeof r == "number" ? r === t : Array.isArray(r) ? !!r.includes(t) : !1, s = we.map(e, (l) => Ge(l) ? l.props.__TYPE === "AccordionButton" ? _e(l, {
    ...l.props,
    id: t,
    onExpanded: a,
    isExpanded: c()
  }) : _e(l, {
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
}, Pa = /\w+\.svg/gi, xe = ({
  children: e,
  path: t,
  size: r,
  addClass: n
}) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", {
      children: "Doesn't exist"
    });
  if (we.count(e) > 1)
    return /* @__PURE__ */ p("span", {
      children: "Only have one children"
    });
  const i = t && t.match(Pa).toString().replace(/.svg/gi, ""), a = `${t}#${i}`;
  return e ? _e(e, {
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
xe.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]),
  path: o.exports.string,
  size: o.exports.oneOf(["small", "normal", "big"]),
  addClass: o.exports.string,
  __TYPE: pe("Icon")
};
xe.defaultProps = {
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
    children: u,
    addClass: d,
    ...v
  } = e;
  return /* @__PURE__ */ C("button", {
    ref: t,
    className: `${d != null ? d : ""} ${Qt["c-button"]} ${Qt[`c-${c}`]} ${Qt[`c-${n}`]} ${i && i.path && s ? Qt["c-round"] : ""} 
        ${i && i.position === "right" ? Qt["c-reverse"] : ""}`,
    disabled: l,
    type: a,
    onClick: f,
    ...s && {
      "aria-label": `${r}`
    },
    ...v,
    children: [u, i && /* @__PURE__ */ p(xe, {
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
  const [s, l] = K(!1), f = U(), u = Object.freeze({
    BUTTON: "Button",
    BAR: "Bar"
  }), d = (v) => {
    !f.current || (f.current.paused ? f.current.play() : f.current.pause(), l(!s));
  };
  return i === u.BAR ? /* @__PURE__ */ p("audio", {
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
      onClick: d,
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
  "c-input": "_c-input_1p0zh_1",
  "c-input__box": "_c-input__box_1p0zh_24",
  "c-input__check": "_c-input__check_1p0zh_38",
  "c-input__icon": "_c-input__icon_1p0zh_38"
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
  __TYPE: u,
  inherit: d,
  ...v
}, m) => {
  const y = ue(() => e || pt(`ui-${r}`), [e, r]), g = Object.freeze({
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
    "data-element": u,
    ...!d && {
      ...v
    },
    children: [/* @__PURE__ */ C("div", {
      className: tr["c-input__box"],
      children: [/* @__PURE__ */ p("input", {
        id: y,
        ref: m,
        type: r,
        name: t,
        value: a,
        "data-state": i,
        className: tr["c-input__check"],
        onChange: x,
        ...s && {
          disabled: !0
        },
        ...d && {
          ...v
        },
        ...l && {
          checked: !0
        }
      }), /* @__PURE__ */ p("div", {
        className: tr["c-input__icon"],
        children: g[i] && /* @__PURE__ */ p(xe, {
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
  const [i, a] = K([]), c = U(), s = (d) => {
    c.current = d || "";
  }, l = (d) => c.current === "radio" ? [{
    ...d
  }] : i.filter((m) => m.id === d.id).length ? [...i.filter((m) => m.id !== d.id)] : [...i, {
    ...d
  }], f = (d) => {
    const v = l(d);
    r && r(v), a(v);
  }, u = we.map(t, (d) => Ge(d) ? d.props.__TYPE === "CheckBox" ? (d.props.type && s(d.props.type), _e(d, {
    ...d.props,
    onChange: f
  })) : d : null);
  return /* @__PURE__ */ C("fieldset", {
    ...n && {
      className: `${n}`
    },
    children: [/* @__PURE__ */ p("legend", {
      children: e
    }), /* @__PURE__ */ p("div", {
      className: "u-flow",
      children: je(u, ["CheckBox"])
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
const ft = Br ? Yo : H;
function Mn(e) {
  const t = U(e);
  return ft(() => {
    t.current = e;
  }), Ce(function() {
    for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
function Ss() {
  const e = U(null), t = Ce((n, i) => {
    e.current = setInterval(n, i);
  }, []), r = Ce(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, r];
}
function ur(e, t) {
  t === void 0 && (t = [e]);
  const r = U(e);
  return ft(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function gr(e, t) {
  const r = U();
  return ue(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    [...t]
  );
}
function Ir(e) {
  const t = Mn(e), r = U(null), n = Ce(
    (i) => {
      i !== r.current && (t == null || t(i, r.current)), r.current = i;
    },
    []
  );
  return [r, n];
}
function wn(e) {
  const t = U();
  return H(() => {
    t.current = e;
  }, [e]), t.current;
}
let cn = {};
function Vr(e, t) {
  return ue(() => {
    if (t)
      return t;
    const r = cn[e] == null ? 0 : cn[e] + 1;
    return cn[e] = r, e + "-" + r;
  }, [e, t]);
}
function ti(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return n.reduce((a, c) => {
      const s = Object.entries(c);
      for (const [l, f] of s) {
        const u = a[l];
        u != null && (a[l] = u + e * f);
      }
      return a;
    }, {
      ...t
    });
  };
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
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (r ? Math.round(r) : 0) + "px, 0)";
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
      return "scaleX(" + t + ") scaleY(" + r + ")";
    }
  },
  Transform: {
    toString(e) {
      if (!!e)
        return [Tn.Translate.toString(e), Tn.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: r,
        easing: n
      } = e;
      return t + " " + r + "ms " + n;
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
  const [e, t] = K("");
  return {
    announce: Ce((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const ni = /* @__PURE__ */ Ze(null);
function ks(e) {
  const t = be(ni);
  H(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Ms() {
  const [e] = K(() => /* @__PURE__ */ new Set()), t = Ce((n) => (e.add(n), () => e.delete(n)), [e]);
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
  } = Is(), s = Vr("DndLiveRegion"), [l, f] = K(!1);
  if (H(() => {
    f(!0);
  }, []), ks(ue(() => ({
    onDragStart(d) {
      let {
        active: v
      } = d;
      a(t.onDragStart({
        active: v
      }));
    },
    onDragMove(d) {
      let {
        active: v,
        over: m
      } = d;
      t.onDragMove && a(t.onDragMove({
        active: v,
        over: m
      }));
    },
    onDragOver(d) {
      let {
        active: v,
        over: m
      } = d;
      a(t.onDragOver({
        active: v,
        over: m
      }));
    },
    onDragEnd(d) {
      let {
        active: v,
        over: m
      } = d;
      a(t.onDragEnd({
        active: v,
        over: m
      }));
    },
    onDragCancel(d) {
      let {
        active: v,
        over: m
      } = d;
      a(t.onDragCancel({
        active: v,
        over: m
      }));
    }
  }), [a, t])), !l)
    return null;
  const u = /* @__PURE__ */ C(at, {
    children: [/* @__PURE__ */ p(Cs, {
      id: n,
      value: i.draggable
    }), /* @__PURE__ */ p(Ns, {
      id: s,
      announcement: c
    })]
  });
  return r ? Wo(u, r) : u;
}
var Te;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Te || (Te = {}));
function Mr() {
}
function ln(e, t) {
  return ue(
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
  return ue(
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
      const f = go(l), u = i.reduce((v, m, y) => v + Vs(f[y], m), 0), d = Number((u / 4).toFixed(4));
      a.push({
        id: s,
        data: {
          droppableContainer: c,
          value: d
        }
      });
    }
  }
  return a.sort(qs);
};
function Ws(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), c = i - n, s = a - r;
  if (n < i && r < a) {
    const l = t.width * t.height, f = e.width * e.height, u = c * s, d = u / (l + f - u);
    return Number(d.toFixed(4));
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
  } = n, l = e.left - c - (1 - i) * parseFloat(r), f = e.top - s - (1 - a) * parseFloat(r.slice(r.indexOf(" ") + 1)), u = i ? e.width / i : e.width, d = a ? e.height / a : e.height;
  return {
    width: u,
    height: d,
    top: f,
    right: l + u,
    bottom: f + d,
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
      transform: u,
      transformOrigin: d
    } = f(e);
    u && (r = Xs(r, u, d));
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
    isBottom: u,
    isLeft: d,
    isRight: v
  } = ui(e), m = {
    x: 0,
    y: 0
  }, y = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !f && a <= t.top + g.height ? (m.y = Re.Backward, y.y = n * Math.abs((t.top + g.height - a) / g.height)) : !u && l >= t.bottom - g.height && (m.y = Re.Forward, y.y = n * Math.abs((t.bottom - g.height - l) / g.height)), !v && s >= t.right - g.width ? (m.x = Re.Forward, y.x = n * Math.abs((t.right - g.width - s) / g.width)) : !d && c <= t.left + g.width && (m.x = Re.Backward, y.x = n * Math.abs((t.left + g.width - c) / g.width)), {
    direction: m,
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
            const f = s(n), u = i[a] - f;
            return this.rect[l] + u;
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
var We;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(We || (We = {}));
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
    this.handleStart(), this.windowListeners.add(We.Resize, this.handleCancel), this.windowListeners.add(We.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(We.Keydown, this.handleKeyDown));
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
      } = n.current, u = f ? {
        x: f.left,
        y: f.top
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const d = c(t, {
        active: r,
        context: n.current,
        currentCoordinates: u
      });
      if (d) {
        const v = kr(d, u), m = {
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
            minScroll: S
          } = ui(g), _ = oc(g), w = {
            x: Math.min(x === oe.Right ? _.right - _.width / 2 : _.right, Math.max(x === oe.Right ? _.left : _.left + _.width / 2, d.x)),
            y: Math.min(x === oe.Down ? _.bottom - _.height / 2 : _.bottom, Math.max(x === oe.Down ? _.top : _.top + _.height / 2, d.y))
          }, N = x === oe.Right && !P || x === oe.Left && !$, L = x === oe.Down && !D || x === oe.Up && !E;
          if (N && w.x !== d.x) {
            const I = g.scrollLeft + v.x, Q = x === oe.Right && I <= b.x || x === oe.Left && I >= S.x;
            if (Q && !v.y) {
              g.scrollTo({
                left: I,
                behavior: s
              });
              return;
            }
            Q ? m.x = g.scrollLeft - I : m.x = x === oe.Right ? g.scrollLeft - b.x : g.scrollLeft - S.x, m.x && g.scrollBy({
              left: -m.x,
              behavior: s
            });
            break;
          } else if (L && w.y !== d.y) {
            const I = g.scrollTop + v.y, Q = x === oe.Down && I <= b.y || x === oe.Up && I >= S.y;
            if (Q && !v.x) {
              g.scrollTo({
                top: I,
                behavior: s
              });
              return;
            }
            Q ? m.y = g.scrollTop - I : m.y = x === oe.Down ? g.scrollTop - b.y : g.scrollTop - S.y, m.y && g.scrollBy({
              top: -m.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Ft(kr(d, this.referenceCoordinates), m));
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(We.Resize, this.handleCancel), this.windowListeners.add(We.DragStart, yo), this.windowListeners.add(We.VisibilityChange, this.handleCancel), this.windowListeners.add(We.ContextMenu, yo), this.documentListeners.add(We.Keydown, this.handleKeydown), r) {
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
    t && (this.activated = !0, this.documentListeners.add(We.Click, uc, {
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
    scrollableAncestorRects: u,
    delta: d,
    threshold: v
  } = e;
  const m = mc({
    delta: d,
    disabled: !a
  }), [y, g] = Ss(), x = U({
    x: 0,
    y: 0
  }), E = U({
    x: 0,
    y: 0
  }), P = ue(() => {
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
  }, [r, i, l]), $ = U(null), D = Ce(() => {
    const S = $.current;
    if (!S)
      return;
    const _ = x.current.x * E.current.x, w = x.current.y * E.current.y;
    S.scrollBy(_, w);
  }, []), b = ue(() => s === Lr.TreeOrder ? [...f].reverse() : f, [s, f]);
  H(
    () => {
      if (!a || !f.length || !P) {
        g();
        return;
      }
      for (const S of b) {
        if ((n == null ? void 0 : n(S)) === !1)
          continue;
        const _ = f.indexOf(S), w = u[_];
        if (!w)
          continue;
        const {
          direction: N,
          speed: L
        } = nc(S, w, P, t, v);
        for (const I of ["x", "y"])
          m[I][N[I]] || (L[I] = 0, N[I] = 0);
        if (L.x > 0 || L.y > 0) {
          g(), $.current = S, y(D, c), x.current = L, E.current = N;
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
      JSON.stringify(m),
      y,
      f,
      b,
      u,
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
  return ue(() => e.reduce((r, n) => {
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
  const [a, c] = K(null), s = a != null, {
    frequency: l,
    measure: f,
    strategy: u
  } = i, d = U(e), v = E(), m = ur(v), y = Ce(function(P) {
    P === void 0 && (P = []), !m.current && c(($) => $ ? $.concat(P) : P);
  }, [m]), g = U(null), x = gr((P) => {
    if (v && !r)
      return wo;
    const $ = a;
    if (!P || P === wo || d.current !== e || $ != null) {
      const D = /* @__PURE__ */ new Map();
      for (let b of e) {
        if (!b)
          continue;
        if ($ && $.length > 0 && !$.includes(b.id) && b.rect.current) {
          D.set(b.id, b.rect.current);
          continue;
        }
        const S = b.node.current, _ = S ? new Fn(f(S), S) : null;
        b.rect.current = _, _ && D.set(b.id, _);
      }
      return D;
    }
    return P;
  }, [e, a, r, v, f]);
  return H(() => {
    d.current = e;
  }, [e]), H(
    () => {
      v || requestAnimationFrame(() => y());
    },
    [r, v]
  ), H(() => {
    s && c(null);
  }, [s]), H(
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
    switch (u) {
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
  const n = Mn(t), i = ue(() => {
    if (r || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(n);
  }, [n, r]);
  return H(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function qr(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = Mn(t), i = ue(
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
  return H(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
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
            type: u,
            target: d
          } = f;
          if (u === "childList" && d instanceof HTMLElement && d.contains(e)) {
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
    const u = t(e);
    return JSON.stringify(l) === JSON.stringify(u) ? l : u;
  }
}
function Ec(e) {
  const t = mi(e);
  return ii(e, t);
}
const To = [];
function Tc(e) {
  const t = U(e), r = gr((n) => e ? n && n !== To && e && t.current && e.parentNode === t.current.parentNode ? n : Ln(e) : To, [e]);
  return H(() => {
    t.current = e;
  }, [e]), r;
}
function Oc(e) {
  const [t, r] = K(null), n = U(e), i = Ce((a) => {
    const c = un(a.target);
    !c || r((s) => s ? (s.set(c, On(c)), new Map(s)) : null);
  }, []);
  return H(() => {
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
  }, [i, e]), ue(() => e.length ? t ? Array.from(t.values()).reduce((a, c) => Ft(a, c), rt) : di(e) : rt, [e, t]);
}
function Oo(e, t) {
  t === void 0 && (t = []);
  const r = U(null);
  return H(
    () => {
      r.current = null;
    },
    t
  ), H(() => {
    const n = e !== rt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? kr(e, r.current) : rt;
}
function Sc(e) {
  H(
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
  return ue(() => e.reduce((r, n) => {
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
  return ue(() => e ? Qs(e) : null, [e]);
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
  const [r, n] = K(null), i = Ce((f) => {
    for (const {
      target: u
    } of f)
      if (mr(u)) {
        n((d) => {
          const v = t(u);
          return d ? {
            ...d,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), a = qr({
    callback: i
  }), c = Ce((f) => {
    const u = $c(f);
    a == null || a.disconnect(), u && (a == null || a.observe(u)), n(u ? t(u) : null);
  }, [t, a]), [s, l] = Ir(c);
  return ue(() => ({
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
  } = be(Yr), a = wn(n), c = wn(r == null ? void 0 : r.id);
  return H(() => {
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
        for (const u of [l.current, f.current]) {
          if (!u)
            continue;
          const d = $s(u);
          if (d) {
            d.focus();
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
  return ue(
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
  const a = U(!1), {
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
    const u = r(f), d = ii(u, n);
    if (c || (d.x = 0), s || (d.y = 0), a.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const v = ai(f);
      v && v.scrollBy({
        top: d.y,
        left: d.x
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
    sensors: u = Cc,
    collisionDetection: d = Us,
    measuring: v,
    modifiers: m,
    ...y
  } = t;
  const g = Cn(Lc, void 0, Mc), [x, E] = g, [P, $] = Ms(), [D, b] = K(gt.Uninitialized), S = D === gt.Initialized, {
    draggable: {
      active: _,
      nodes: w,
      translate: N
    },
    droppable: {
      containers: L
    }
  } = x, I = _ ? w.get(_) : null, Q = U({
    initial: null,
    translated: null
  }), Z = ue(() => {
    var ve;
    return _ != null ? {
      id: _,
      data: (ve = I == null ? void 0 : I.data) != null ? ve : Ac,
      rect: Q
    } : null;
  }, [_, I]), re = U(null), [se, ie] = K(null), [ee, Ee] = K(null), he = ur(y, Object.values(y)), O = Vr("DndDescribedBy", c), k = ue(() => L.getEnabled(), [L]), B = Bc(v), {
    droppableRects: V,
    measureDroppableContainers: j,
    measuringScheduled: W
  } = yc(k, {
    dragging: S,
    dependencies: [N.x, N.y],
    config: B.droppable
  }), F = gc(w, _), Y = ue(() => ee ? En(ee) : null, [ee]), z = Tr(), X = xc(F, B.draggable.measure);
  Vc({
    activeNode: _ ? w.get(_) : null,
    config: z.layoutShiftCompensation,
    initialRect: X,
    measure: B.draggable.measure
  });
  const q = Eo(F, B.draggable.measure, X), A = Eo(F ? F.parentElement : null), T = U({
    activatorEvent: null,
    active: null,
    activeNode: F,
    collisionRect: null,
    collisions: null,
    droppableRects: V,
    draggableNodes: w,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: L,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), J = L.getNodeFor((r = T.current.over) == null ? void 0 : r.id), me = Dc({
    measure: B.dragOverlay.measure
  }), Oe = (n = me.nodeRef.current) != null ? n : F, De = S ? (i = me.rect) != null ? i : q : null, ot = Boolean(me.nodeRef.current && me.rect), lt = Ec(ot ? null : q), it = gi(Oe ? Be(Oe) : null), Se = Tc(S ? J != null ? J : F : null), Xe = Pc(Se), Je = jc(m, {
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
  }), xt = Y ? Ft(Y, N) : null, vt = Oc(Se), _t = Oo(vt), wt = Oo(vt, [q]), Ae = Ft(Je, _t), Qe = De ? Zs(De, Je) : null, ht = Z && Qe ? d({
    active: Z,
    collisionRect: Qe,
    droppableRects: V,
    droppableContainers: k,
    pointerCoordinates: xt
  }) : null, Gt = oi(ht, "id"), [qe, _r] = K(null), Kr = ot ? Je : Ft(Je, wt), Xr = Hs(Kr, (a = qe == null ? void 0 : qe.rect) != null ? a : null, q), wr = Ce(
    (ve, Pe) => {
      let {
        sensor: $e,
        options: et
      } = Pe;
      if (re.current == null)
        return;
      const Ie = w.get(re.current);
      if (!Ie)
        return;
      const ke = ve.nativeEvent, Ye = new $e({
        active: re.current,
        activeNode: Ie,
        event: ke,
        options: et,
        context: T,
        onStart(Me) {
          const Et = re.current;
          if (Et == null)
            return;
          const Tt = w.get(Et);
          if (!Tt)
            return;
          const {
            onDragStart: Ot
          } = he.current, Nt = {
            active: {
              id: Et,
              data: Tt.data,
              rect: Q
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
        ie(Ye), Ee(ve.nativeEvent);
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
    [w]
  ), Jr = Ce((ve, Pe) => ($e, et) => {
    const Ie = $e.nativeEvent, ke = w.get(et);
    if (re.current !== null || !ke || Ie.dndKit || Ie.defaultPrevented)
      return;
    const Ye = {
      active: ke
    };
    ve($e, Pe.options, Ye) === !0 && (Ie.dndKit = {
      capturedBy: Pe.sensor
    }, re.current = et, wr($e, Pe));
  }, [w, wr]), Er = bc(u, Jr);
  Sc(u), ft(() => {
    q && D === gt.Initializing && b(gt.Initialized);
  }, [q, D]), H(
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
  ), H(
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
      } = he.current, Ye = et.get(Gt), ut = Ye && Ye.rect.current ? {
        id: Ye.id,
        rect: Ye.rect.current,
        data: Ye.data,
        disabled: Ye.disabled
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
      activeNode: F,
      collisionRect: Qe,
      collisions: ht,
      droppableRects: V,
      draggableNodes: w,
      draggingNode: Oe,
      draggingNodeRect: De,
      droppableContainers: L,
      over: qe,
      scrollableAncestors: Se,
      scrollAdjustedTranslate: Ae
    }, Q.current = {
      initial: De,
      translated: Qe
    };
  }, [Z, F, ht, Qe, w, Oe, De, V, L, qe, Se, Ae]), vc({
    ...z,
    delta: N,
    draggingRect: Qe,
    pointerCoordinates: xt,
    scrollableAncestors: Se,
    scrollableAncestorRects: Xe
  });
  const Qr = ue(() => ({
    active: Z,
    activeNode: F,
    activeNodeRect: q,
    activatorEvent: ee,
    collisions: ht,
    containerNodeRect: A,
    dragOverlay: me,
    draggableNodes: w,
    droppableContainers: L,
    droppableRects: V,
    over: qe,
    measureDroppableContainers: j,
    scrollableAncestors: Se,
    scrollableAncestorRects: Xe,
    measuringConfiguration: B,
    measuringScheduled: W,
    windowRect: it
  }), [Z, F, q, ee, ht, A, me, w, L, V, qe, j, Se, Xe, B, W, it]), Zt = ue(() => ({
    activatorEvent: ee,
    activators: Er,
    active: Z,
    activeNodeRect: q,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: E,
    draggableNodes: w,
    over: qe,
    measureDroppableContainers: j
  }), [ee, Er, Z, q, E, O, w, qe, j]);
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
    const ve = (se == null ? void 0 : se.autoScrollEnabled) === !1, Pe = typeof l == "object" ? l.enabled === !1 : l === !1, $e = S && !ve && !Pe;
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
    ariaDescribedById: u,
    draggableNodes: d,
    over: v
  } = be(Yr), {
    role: m = So,
    roleDescription: y = "draggable",
    tabIndex: g = 0
  } = i != null ? i : {}, x = (l == null ? void 0 : l.id) === t, E = be(x ? bi : Yc), [P, $] = Ir(), [D, b] = Ir(), S = Rc(c, t), _ = ur(r);
  ft(
    () => (d.set(t, {
      id: t,
      key: a,
      node: P,
      activatorNode: D,
      data: _
    }), () => {
      const N = d.get(t);
      N && N.key === a && d.delete(t);
    }),
    [d, t]
  );
  const w = ue(() => ({
    role: m,
    tabIndex: g,
    "aria-disabled": n,
    "aria-pressed": x && m === So ? !0 : void 0,
    "aria-roledescription": y,
    "aria-describedby": u.draggable
  }), [n, m, g, x, y, u.draggable]);
  return {
    active: l,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: w,
    isDragging: x,
    listeners: n ? void 0 : S,
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
  } = be(Yr), u = U({
    disabled: r
  }), d = U(!1), v = U(null), m = U(null), {
    disabled: y,
    updateMeasurementsFor: g,
    timeout: x
  } = {
    ...Hc,
    ...i
  }, E = ur(g != null ? g : n), P = Ce(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        f(Array.isArray(E.current) ? E.current : [E.current]), m.current = null;
      }, x);
    },
    [x]
  ), $ = qr({
    callback: P,
    disabled: y || !c
  }), D = Ce((w, N) => {
    !$ || (N && ($.unobserve(N), d.current = !1), w && $.observe(w));
  }, [$]), [b, S] = Ir(D), _ = ur(t);
  return H(() => {
    !$ || !b.current || ($.disconnect(), d.current = !1, $.observe(b.current));
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
  ), H(() => {
    r !== u.current.disabled && (s({
      type: Te.SetDroppableDisabled,
      id: n,
      key: a,
      disabled: r
    }), u.current.disabled = r);
  }, [n, a, r, s]), {
    active: c,
    rect: v,
    isOver: (l == null ? void 0 : l.id) === n,
    node: b,
    over: l,
    setNodeRef: S
  };
}
const Gc = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, Zc = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, Kc = [oe.Down, oe.Right, oe.Up, oe.Left], Xc = (e, { context: { active: t, droppableRects: r, droppableContainers: n, collisionRect: i } }) => {
  var a;
  if (Kc.includes(e.code)) {
    e.preventDefault();
    const c = 20;
    if (!t || !i)
      return;
    const s = [];
    n.getEnabled().forEach((u) => {
      if (!u || (u == null ? void 0 : u.disabled))
        return;
      const d = r.get(u.id);
      if (!!d)
        switch (e.code) {
          case oe.Down:
            i.top < d.top && s.push(u);
            break;
          case oe.Up:
            i.top > d.top + c && s.push(u);
            break;
          case oe.Left:
            i.left >= d.left + d.width && s.push(u);
            break;
          case oe.Right:
            i.left + i.width <= d.left && s.push(u);
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
      const u = n.get(f), d = u == null ? void 0 : u.node.current, v = u == null ? void 0 : u.rect.current;
      if (d && v)
        return ((a = u.data.current) == null ? void 0 : a.type) === "container" ? {
          x: v.left,
          y: v.top + c
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, xi = Ze(), nr = (e, t) => we.map(e, (r) => {
  var n;
  if (!!Ge(r) && !!r.props) {
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
  const [f, u] = K([]), [d, v] = K(null), [m, y] = K(() => g());
  function g() {
    return [...nr(e, "droppable"), ...nr(e, "general-draggable")].reduce((S, _) => ({
      ...S,
      [_.props.id]: _.props.children ? [...nr(_.props.children, "draggable").map((w) => w.props.id)] : []
    }), {});
  }
  const x = Object.freeze({
    restrictToVerticalAxis: Zc,
    restrictToHorizontalAxis: Gc
  }), E = Bs(ln(vi), ln(hi), ln(jn, {
    coordinateGetter: Xc
  })), P = (S, _) => {
    if (Object.keys(m).pop() === S.id)
      return;
    let N = [...f.filter((L) => L !== _), S.data.current.validate.includes(_) ? _ : ""].filter((L) => !!L);
    if (!t) {
      const L = m[S.id][0];
      N = L ? N.filter((I) => I !== L) : N;
    }
    r && r({
      validate: [...N],
      active: !0
    }), u(N);
  }, $ = (S) => S in m ? S : Object.keys(m).find((_) => m[_].includes(S)), D = ({
    active: S,
    over: _
  }) => {
    if (!_)
      return;
    v(null);
    const w = Object.keys(m).pop(), N = $(_.id), L = $(S.id);
    L !== N && (w !== _.id && P(_, S.id), y((I) => {
      const Q = I[L].filter((se) => se !== S.id), Z = [...I[N]];
      return t ? {
        ...I,
        [L]: Q,
        [N]: [...Z, S.id]
      } : {
        ...{
          ...I,
          [L]: Q,
          [N]: N === w ? [...Z, S.id] : [S.id]
        },
        ...N !== w && I[N].length > 0 && {
          [w]: [...I[w].filter((se) => se !== I[L][0]), ...I[N]]
        }
      };
    }));
  }, b = (S) => we.map(S, (_) => {
    if (!_.props)
      return _;
    if (_.props.__TYPE !== "draggable")
      return _.props.id in m && m[_.props.id].length > 0 ? _e(_, {
        ..._.props
      }, [...m[_.props.id].map((w) => nr(e, "draggable").filter((N) => N.props.id === w)).flat()]) : _.props.children ? _e(_, {
        ..._.props,
        children: b(_.props.children)
      }) : _;
  });
  return H(() => {
    i && (y(() => g()), r && r({
      validate: [],
      active: !1
    }));
  }, [i]), /* @__PURE__ */ p(xi.Provider, {
    value: {
      listId: f,
      propValidate: a,
      validate: n,
      isDragging: d
    },
    children: /* @__PURE__ */ p(qc, {
      sensors: E,
      accessibility: {
        announcements: s
      },
      onDragStart: ({
        active: S
      }) => v(S.id),
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
  const u = s || "div", {
    listId: d,
    propValidate: v,
    validate: m,
    isDragging: y
  } = be(xi), {
    attributes: g,
    listeners: x,
    setNodeRef: E,
    transform: P
  } = Wc({
    id: t,
    disabled: m,
    data: {
      label: i
    },
    attributes: a
  });
  return /* @__PURE__ */ p(u, {
    id: t,
    ref: E,
    "data-type": l,
    className: `${jt["c-draggable"]} ${y === t ? `${n} ${jt["is-draggable--active-animation"]}` : ""} ${r != null ? r : ""}`,
    style: {
      transform: Tn.Translate.toString(P)
    },
    ...m && {
      [v]: !!d.includes(t)
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
    isOver: u,
    setNodeRef: d
  } = yi({
    id: t,
    data: {
      validate: r,
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(f, {
    ref: d,
    "data-type": s,
    className: `${jt["c-droppable"]} ${u && i && i} ${n != null ? n : ""}`,
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
  over: r,
  id: n,
  label: i,
  element: a,
  __TYPE: c,
  ...s
}) => {
  const l = a || "div", {
    isOver: f,
    setNodeRef: u
  } = yi({
    id: n,
    data: {
      label: i,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(l, {
    id: n,
    ref: u,
    "data-type": c,
    className: `${jt["c-droppable"]}  ${f && r && r} ${t != null ? t : ""}`,
    ...s,
    children: e
  });
};
Ti.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  over: o.exports.string,
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
const Qu = ({
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
  const [s, l] = K(!1), f = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, u = (v) => l(v), d = s ? f : `${e}`;
  return /* @__PURE__ */ C("figure", {
    className: `${Ro["c-image"]} ${i != null ? i : ""}`,
    ...n && {
      style: {
        maxWidth: `${/%/gi.test(n) ? n : `${n}px`}`
      }
    },
    children: [/* @__PURE__ */ p("img", {
      src: d,
      onError: u,
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
  onValue: u
}, d) => {
  const v = ue(() => e || pt("c-input-"), [e]), m = ({
    target: y
  }) => {
    u && u({
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
      ref: d,
      type: t,
      name: v,
      value: r,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: m,
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
  const [r, n] = K([]), i = (s) => n([...r.filter((l) => l.id !== s.id), {
    ...s
  }]);
  H(() => {
    t && t(r);
  }, [r, t]);
  const a = (s, l, f) => we.toArray(s).map((u) => u.props.__TYPE === l ? _e(u, {
    ...u.props,
    ...f
  }) : u);
  return we.map(e, (s) => {
    var l, f;
    return Ge(s) ? ((l = s == null ? void 0 : s.props) == null ? void 0 : l.__TYPE) === "InputStyle" ? _e(s, {
      ...s.props,
      children: a(s.props.children, "Input", {
        onValue: i
      })
    }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? _e(s, {
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
  const i = we.map(e, (a) => {
    var c;
    return ((c = a == null ? void 0 : a.props) == null ? void 0 : c.__TYPE) === "Icon" ? _e(a, {
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
    function f(u, d) {
      hn(this, f), this._inertManager = d, this._rootElement = u, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return vn(f, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(d) {
          this._unmanageNode(d.node);
        }, this), this._observer = null, this._rootElement = null, this._managedNodes = null, this._inertManager = null;
      }
    }, {
      key: "_makeSubtreeUnfocusable",
      value: function(d) {
        var v = this;
        c(d, function(x) {
          return v._visitNode(x);
        });
        var m = document.activeElement;
        if (!document.body.contains(d)) {
          for (var y = d, g = void 0; y; ) {
            if (y.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              g = y;
              break;
            }
            y = y.parentNode;
          }
          g && (m = g.activeElement);
        }
        d.contains(m) && (m.blur(), m === document.activeElement && document.body.focus());
      }
    }, {
      key: "_visitNode",
      value: function(d) {
        if (d.nodeType === Node.ELEMENT_NODE) {
          var v = d;
          v !== this._rootElement && v.hasAttribute("inert") && this._adoptInertRoot(v), (t.call(v, r) || v.hasAttribute("tabindex")) && this._manageNode(v);
        }
      }
    }, {
      key: "_manageNode",
      value: function(d) {
        var v = this._inertManager.register(d, this);
        this._managedNodes.add(v);
      }
    }, {
      key: "_unmanageNode",
      value: function(d) {
        var v = this._inertManager.deregister(d, this);
        v && this._managedNodes.delete(v);
      }
    }, {
      key: "_unmanageSubtree",
      value: function(d) {
        var v = this;
        c(d, function(m) {
          return v._unmanageNode(m);
        });
      }
    }, {
      key: "_adoptInertRoot",
      value: function(d) {
        var v = this._inertManager.getInertRoot(d);
        v || (this._inertManager.setInert(d, !0), v = this._inertManager.getInertRoot(d)), v.managedNodes.forEach(function(m) {
          this._manageNode(m.node);
        }, this);
      }
    }, {
      key: "_onMutation",
      value: function(d, v) {
        d.forEach(function(m) {
          var y = m.target;
          if (m.type === "childList")
            e.call(m.addedNodes).forEach(function(x) {
              this._makeSubtreeUnfocusable(x);
            }, this), e.call(m.removedNodes).forEach(function(x) {
              this._unmanageSubtree(x);
            }, this);
          else if (m.type === "attributes") {
            if (m.attributeName === "tabindex")
              this._manageNode(y);
            else if (y !== this._rootElement && m.attributeName === "inert" && y.hasAttribute("inert")) {
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
      set: function(d) {
        this._savedAriaHidden = d;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), f;
  }(), i = function() {
    function f(u, d) {
      hn(this, f), this._node = u, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([d]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return vn(f, [{
      key: "destructor",
      value: function() {
        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var d = this._node;
          this._savedTabIndex !== null ? d.setAttribute("tabindex", this._savedTabIndex) : d.removeAttribute("tabindex"), this._overrodeFocusMethod && delete d.focus;
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
          var d = this.node;
          if (t.call(d, r)) {
            if (d.tabIndex === -1 && this.hasSavedTabIndex)
              return;
            d.hasAttribute("tabindex") && (this._savedTabIndex = d.tabIndex), d.setAttribute("tabindex", "-1"), d.nodeType === Node.ELEMENT_NODE && (d.focus = function() {
            }, this._overrodeFocusMethod = !0);
          } else
            d.hasAttribute("tabindex") && (this._savedTabIndex = d.tabIndex, d.removeAttribute("tabindex"));
        }
      }
    }, {
      key: "addInertRoot",
      value: function(d) {
        this._throwIfDestroyed(), this._inertRoots.add(d);
      }
    }, {
      key: "removeInertRoot",
      value: function(d) {
        this._throwIfDestroyed(), this._inertRoots.delete(d), this._inertRoots.size === 0 && this.destructor();
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
      set: function(d) {
        this._throwIfDestroyed(), this._savedTabIndex = d;
      },
      get: function() {
        return this._throwIfDestroyed(), this._savedTabIndex;
      }
    }]), f;
  }(), a = function() {
    function f(u) {
      if (hn(this, f), !u)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = u, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(u.head || u.body || u.documentElement), u.readyState === "loading" ? u.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return vn(f, [{
      key: "setInert",
      value: function(d, v) {
        if (v) {
          if (this._inertRoots.has(d))
            return;
          var m = new n(d, this);
          if (d.setAttribute("inert", ""), this._inertRoots.set(d, m), !this._document.body.contains(d))
            for (var y = d.parentNode; y; )
              y.nodeType === 11 && s(y), y = y.parentNode;
        } else {
          if (!this._inertRoots.has(d))
            return;
          var g = this._inertRoots.get(d);
          g.destructor(), this._inertRoots.delete(d), d.removeAttribute("inert");
        }
      }
    }, {
      key: "getInertRoot",
      value: function(d) {
        return this._inertRoots.get(d);
      }
    }, {
      key: "register",
      value: function(d, v) {
        var m = this._managedNodes.get(d);
        return m !== void 0 ? m.addInertRoot(v) : m = new i(d, v), this._managedNodes.set(d, m), m;
      }
    }, {
      key: "deregister",
      value: function(d, v) {
        var m = this._managedNodes.get(d);
        return m ? (m.removeInertRoot(v), m.destroyed && this._managedNodes.delete(d), m) : null;
      }
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var d = e.call(this._document.querySelectorAll("[inert]"));
        d.forEach(function(v) {
          this.setInert(v, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
    }, {
      key: "_watchForInert",
      value: function(d, v) {
        var m = this;
        d.forEach(function(y) {
          switch (y.type) {
            case "childList":
              e.call(y.addedNodes).forEach(function(E) {
                if (E.nodeType === Node.ELEMENT_NODE) {
                  var P = e.call(E.querySelectorAll("[inert]"));
                  t.call(E, "[inert]") && P.unshift(E), P.forEach(function($) {
                    this.setInert($, !0);
                  }, m);
                }
              }, m);
              break;
            case "attributes":
              if (y.attributeName !== "inert")
                return;
              var g = y.target, x = g.hasAttribute("inert");
              m.setInert(g, x);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function c(f, u, d) {
    if (f.nodeType == Node.ELEMENT_NODE) {
      var v = f;
      u && u(v);
      var m = v.shadowRoot;
      if (m) {
        c(m, u);
        return;
      }
      if (v.localName == "content") {
        for (var y = v, g = y.getDistributedNodes ? y.getDistributedNodes() : [], x = 0; x < g.length; x++)
          c(g[x], u);
        return;
      }
      if (v.localName == "slot") {
        for (var E = v, P = E.assignedNodes ? E.assignedNodes({ flatten: !0 }) : [], $ = 0; $ < P.length; $++)
          c(P[$], u);
        return;
      }
    }
    for (var D = f.firstChild; D != null; )
      c(D, u), D = D.nextSibling;
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
const zr = Ze(), al = Object.freeze({
  ESC: 27
}), Ni = ({
  children: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n
}) => {
  const i = U(), a = (f) => {
    const u = document.querySelector("#root");
    u.inert = f;
  }, c = (f) => {
    (f.keyCode || f.which) === al.ESC && l();
  }, s = (f, u) => {
    i.current.classList.replace(f, u);
  }, l = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), a(!1), r(!t), Object.keys(n).length !== 0 && n.current.focus();
    }, 500);
  };
  return H(() => (t && (a(!0), i.current && i.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && a(!1);
  }), [t]), /* @__PURE__ */ p(zr.Provider, {
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
    refModal: u
  } = be(zr), d = (m) => {
    n && typeof n == "function" && n(m), f();
  };
  return /* @__PURE__ */ C("div", {
    ref: u,
    role: "dialog",
    tabIndex: "-1",
    hidden: !s,
    "aria-label": e,
    "aria-modal": "true",
    "data-type": a,
    onKeyDown: (m) => {
      i && typeof i == "function" && i(m), l(m);
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
      onClick: d,
      children: /* @__PURE__ */ p(xe, {
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
  } = be(zr), i = (a) => {
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
  } = be(zr), n = (i) => {
    t && t(i), r();
  };
  return _e(e, {
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
  const [l, f] = K(n || 0), u = () => {
    if (r && l > a)
      return f(a);
    f((y) => y + c);
  }, d = () => {
    if (r && l < i)
      return f(i);
    f((y) => y - c);
  }, v = (y) => f(y), m = (y) => r && l === y;
  return H(() => {
    s && s(l);
  }, [l, s]), /* @__PURE__ */ p(Wr.Provider, {
    value: {
      counter: l,
      min: i || Number.MIN_SAFE_INTEGER,
      max: a || Number.MAX_SAFE_INTEGER,
      validate: m,
      onChangeValue: v,
      onIncrementValue: u,
      onDecrementValue: d
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
    onDecrementValue: u,
    min: d,
    max: v
  } = be(Wr), m = ue(() => e || pt("c-number-input-"), [e]), y = Object.freeze({
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
        u();
        break;
      case y.END:
        l(v);
        break;
      case y.HOME:
        l(d);
        break;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: m,
    className: `${Bt["c-number-input__label"]} ${i != null ? i : ""}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!a && "u-sr-only"}`,
      children: [" ", r, " "]
    }), /* @__PURE__ */ p("input", {
      id: m,
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
        "aria-valuemin": d,
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
  } = be(Wr);
  return /* @__PURE__ */ p("button", {
    tabIndex: -1,
    onClick: n,
    disabled: i(a),
    "aria-label": `${r != null ? r : "Decrementar valor"}`,
    className: `${Bt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ p(xe, {
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
  } = be(Wr);
  return /* @__PURE__ */ p("button", {
    tabIndex: -1,
    onClick: n,
    disabled: i(a),
    "aria-label": `${r != null ? r : "Incrementar valor"}`,
    className: `${Bt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ p(xe, {
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
    siblingCount: u = 1,
    ...d
  } = e, [v, m] = K(n), y = (_, w) => {
    m(w), s && s(_, w);
  }, g = (_, w) => {
    const N = w - _ + 1;
    return Array.from({ length: N }, (L, I) => _ + I);
  }, x = g(1, Math.min(t, r)), E = g(Math.max(r - t + 1, t + 1), r), P = Math.max(
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
      onClick: (w) => {
        y(w, _);
      },
      type: "page",
      page: _,
      selected: _ === v,
      disabled: i,
      "aria-current": _ === v ? !0 : void 0
    } : {
      onClick: (w) => {
        y(w, b(_));
      },
      type: _,
      page: b(_),
      selected: !1,
      disabled: i || _.indexOf("ellipsis") === -1 && (_ === "next" || _ === "last" ? v >= r : v <= 1)
    }),
    ...d
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
  }) : _e(i, {
    disabled: n,
    className: `${sr["c-pagination-item"]} ${r != null ? r : ""} ${c ? sr["c-pagination-item--selected"] : ""}`,
    ...i.props,
    ...s
  }, [
    t === "page" && e,
    f ? a ? /* @__PURE__ */ p(xe, {
      path: f
    }, t) : /* @__PURE__ */ p(xe, {
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
  const [n, i] = K(1), a = U({
    index: [],
    counter: 0
  }), c = (l) => i(l), s = (l) => n === l;
  return H(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(Ur.Provider, {
    value: {
      validation: s,
      onToggle: c,
      listId: a.current.index,
      currentSection: n,
      IdToSection: a
    },
    children: /* @__PURE__ */ p("div", {
      className: `${Lt["c-panel"]} ${r != null ? r : ""} class-video-interpreter-ui-panel`,
      children: e
    })
  });
};
dl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node, o.exports.string]),
  defaultIndex: o.exports.number,
  addClass: o.exports.string
};
function fl({
  current: e
}) {
  const t = e.counter += 1;
  return e.index.push(t), t;
}
const qi = ct(({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}, i) => {
  const {
    validation: a,
    IdToSection: c
  } = be(Ur), s = ue(() => fl(c), []), l = a(s);
  return /* @__PURE__ */ C("section", {
    ref: i,
    role: "tabpanel",
    hidden: !l,
    "data-type": r,
    "aria-hidden": !l,
    "data-value": s - 1,
    "aria-labelledby": `section-${s}`,
    className: `${Lt["c-section"]} ${t != null ? t : ""}`,
    ...n,
    children: [/* @__PURE__ */ C("span", {
      id: `section-${s}`,
      className: "u-sr-only",
      children: ["Secci\xF3n ", s]
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
const pl = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), vl = (e, t, r) => e === "section" ? `${r ? "" : "Ir a la "}secci\xF3n ${t}` : `Ir a la ${pl[e]} secci\xF3n`, Yi = ({
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
    onToggle: u,
    listId: d,
    currentSection: v
  } = be(Ur), [m, y] = K([]);
  H(() => {
    d.length !== 0 && y(d);
  }, [d]);
  const g = U([]), x = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), E = Object.freeze({
    previous: v - 1,
    next: v + 1
  }), P = {
    previous: (n == null ? void 0 : n.previous) || /* @__PURE__ */ p("path", {
      id: "navigate_before",
      d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
    }),
    next: (n == null ? void 0 : n.next) || /* @__PURE__ */ p("path", {
      id: "navigate_next",
      d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
    })
  }, $ = [
    ...t ? ["previous"] : [],
    ...m || [],
    ...r ? ["next"] : []
  ], D = (w) => !g.current.includes(w) && w ? g.current = [...g.current, w] : g.current, b = (w) => {
    const N = g.current[0], L = g.current[g.current.length - 1];
    if ((w.keyCode || w.which) === x.LEFT)
      if (w.target === N)
        L.focus();
      else {
        const I = g.current.indexOf(w.target) - 1;
        g.current[I].focus();
      }
    else if ((w.keyCode || w.which) === x.RIGHT)
      if (w.target === L)
        N.focus();
      else {
        const I = g.current.indexOf(w.target) + 1;
        g.current[I].focus();
      }
  }, S = (w) => {
    u(w), c !== void 0 && c(w, m.length);
  }, _ = $.map((w) => typeof w == "number" ? {
    onClick: (N) => {
      S(w);
    },
    type: "section",
    section: w,
    selected: f(w),
    ref: D,
    onKeyDown: b
  } : {
    onClick: () => {
      S(E[w]);
    },
    type: w,
    section: E[w],
    selected: !1,
    disabled: w === "next" ? v >= m.length : v <= 1
  });
  return H(() => {
    c !== void 0 && c(v, m.length);
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
      children: e ? e(_) : _.map(({
        section: w,
        type: N,
        selected: L,
        ...I
      }, Q) => /* @__PURE__ */ p("li", {
        role: "presentation",
        className: Lt["c-navigation__item"],
        children: N === "section" ? /* @__PURE__ */ p("button", {
          id: `navigation-section-tab-${w}`,
          role: "tab",
          tabIndex: `${L ? 0 : -1}`,
          "aria-selected": L,
          className: Lt["c-navigation__section"],
          "aria-label": l(N, w, L),
          ...I
        }) : /* @__PURE__ */ p("button", {
          type: "button",
          className: `${Lt["c-navigation__button"]}`,
          "aria-label": l(N, w, L),
          ...I,
          children: P[N] ? n ? /* @__PURE__ */ p(xe, {
            path: P[N]
          }, N) : /* @__PURE__ */ p(xe, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: P[N]
            })
          }, N) : null
        })
      }, `navigation-section-item-${Q}`))
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
  getItemAriaLabel: vl
};
const hl = ({
  children: e,
  section: t,
  onClick: r
}) => {
  const {
    onToggle: n
  } = be(Ur), i = (a) => {
    n(t), r && r(a);
  };
  return we.map(e, (a) => _e(a, {
    ...a.props,
    onClick: i
  }));
};
hl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]).isRequired,
  section: o.exports.number.isRequired,
  onClick: o.exports.func
};
const ml = {
  "c-paper": "_c-paper_1sbf6_1"
}, gl = ({
  children: e,
  color: t,
  addClass: r,
  ...n
}) => {
  const i = U(null);
  return Yo(() => {
    t && i.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p("div", {
    ref: i,
    className: `${ml["c-paper"]} ${r != null ? r : ""}`,
    ...n,
    children: e
  });
};
gl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  color: o.exports.string
};
const bl = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, yl = (e) => {
  document.body.append(e);
}, xl = (e) => {
  const t = U(null);
  H(() => {
    const n = document.querySelector(`#${e}`), i = n || bl(e);
    return n || yl(i), i.append(t.current), () => {
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
  const r = xl(t);
  return Wo(e, r);
};
Ht.propTypes = {
  children: o.exports.any,
  id: o.exports.string.isRequired
};
const _l = "_row_1adiy_1", wl = {
  row: _l
}, El = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ p("div", {
  ref: r,
  className: `${wl.row} ${e != null ? e : ""}`,
  ...t
}));
El.propTypes = {
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
  onChoise: f,
  defaultValue: u
}, d) => {
  const v = ue(() => t || pt("c-select-"), [t]), m = ({
    target: y
  }) => {
    f && f({
      id: v,
      value: y.value
    });
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: v,
    ...a && {
      className: `${a}`
    },
    children: [/* @__PURE__ */ C("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", n, " "]
    }), /* @__PURE__ */ C("div", {
      className: Pr["c-select-wrapper"],
      children: [/* @__PURE__ */ C("select", {
        id: v,
        ref: d,
        name: v,
        defaultValue: u,
        className: Pr["c-select"],
        onChange: m,
        disabled: s,
        required: l,
        children: [/* @__PURE__ */ p("option", {
          value: "default",
          disabled: !0,
          children: r
        }), je(e, ["option", "optgroup"])]
      }), i ? /* @__PURE__ */ p(xe, {
        path: i,
        addClass: Pr["c-select__icon"]
      }) : /* @__PURE__ */ p(xe, {
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
  defaultValue: "default",
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
  defaultValue: o.exports.string,
  __TYPE: pe("Select")
};
const Tl = ({
  children: e,
  onAllSelect: t
}) => {
  const [r, n] = K([]), i = (c) => n([...r.filter((s) => s.id !== c.id), {
    ...c
  }]);
  return H(() => {
    t && t(r);
  }, [r, t]), we.map(e, (c) => {
    var s;
    return Ge(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? _e(c, {
      ...c.props,
      onChoise: i
    }) : c : null;
  });
};
Tl.propTypes = {
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
}, u) => {
  const [d, v] = K(!1), m = ue(() => e || pt("c-input-"), [e]), y = ({
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
      id: m,
      value: ""
    } : {
      id: m,
      value: `${n}`
    }), !E));
  };
  return H(() => (s && v(!!s), () => {
    v(!1);
  }), [s]), /* @__PURE__ */ C("label", {
    htmlFor: m,
    className: `${mn["c-label"]} ${mn[`is-${r}`]}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ p("input", {
      id: m,
      ref: u,
      role: "switch",
      type: "checkbox",
      name: t,
      value: n,
      checked: d,
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
const qn = Ze(), Ol = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  ...n
}) => {
  const [i, a] = K(0), c = (l) => a(l), s = (l) => i === l;
  return H(() => {
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
Ol.propTypes = {
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
  const f = U(), {
    validation: u,
    onToggle: d
  } = be(qn), v = u(t);
  return H(() => (f.current && a(f.current), () => {
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
    onClick: () => d(t),
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
  const c = U([]), s = (d) => c.current = [...c.current, d], l = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), f = (d) => {
    const v = c.current[0], m = c.current[c.current.length - 1];
    if ((d.keyCode || d.which) === l.LEFT)
      if (d.target === v)
        m.focus();
      else {
        const y = c.current.indexOf(d.target) - 1;
        c.current[y].focus();
      }
    else if ((d.keyCode || d.which) === l.RIGHT)
      if (d.target === m)
        v.focus();
      else {
        const y = c.current.indexOf(d.target) + 1;
        c.current[y].focus();
      }
  }, u = we.map(e, (d, v) => Ge(d) ? _e(d, {
    ...d.props,
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
    children: je(u, ["Tab"])
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
  } = be(qn), c = a(t);
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
  const i = we.map(e, (a, c) => Ge(a) ? _e(a, {
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
  ...u
}, d) => {
  const v = ue(() => e || pt("c-input-"), [e]), m = ({
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
      ref: d,
      defaultValue: t,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: m,
      className: `${gn["c-textarea"]} ${gn[`c-textarea--${r}`]}`,
      ...u
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
const Sl = zo(({
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
  return H(() => {
    if (Object.entries(t).length !== 0)
      return r(t), () => {
        t = {};
      };
  }, [t]), e;
});
Sl.propTypes = {
  children: o.exports.oneOfType([o.exports.array, o.exports.element]),
  theme: o.exports.object.isRequired
};
var $o = function(t) {
  return t.reduce(function(r, n) {
    var i = n[0], a = n[1];
    return r[i] = a, r;
  }, {});
}, Do = typeof window < "u" && window.document && window.document.createElement ? $t.useLayoutEffect : $t.useEffect, Le = "top", Ue = "bottom", He = "right", Fe = "left", Hr = "auto", yr = [Le, Ue, He, Fe], Vt = "start", vr = "end", Rl = "clippingParents", Xi = "viewport", rr = "popper", Pl = "reference", Co = /* @__PURE__ */ yr.reduce(function(e, t) {
  return e.concat([t + "-" + Vt, t + "-" + vr]);
}, []), Ji = /* @__PURE__ */ [].concat(yr, [Hr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vt, t + "-" + vr]);
}, []), $l = "beforeRead", Dl = "read", Cl = "afterRead", Al = "beforeMain", Nl = "main", Il = "afterMain", kl = "beforeWrite", Ml = "write", Ll = "afterWrite", Pn = [$l, Dl, Cl, Al, Nl, Il, kl, Ml, Ll];
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
      var i = t.elements[n], a = t.attributes[n] || {}, c = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = c.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !Ve(i) || !st(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Bl = {
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
  var c = At(e) ? Ke(e) : window, s = c.visualViewport, l = !Qi() && r, f = (n.left + (l && s ? s.offsetLeft : 0)) / i, u = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / i, v = n.height / a;
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
function Vl(e) {
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
function ql(e) {
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
  for (var t = Ke(e), r = Ao(e); r && Vl(r) && nt(r).position === "static"; )
    r = Ao(r);
  return r && (st(r) === "html" || st(r) === "body" && nt(r).position === "static") ? t : r || ql(e) || t;
}
function Wn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function cr(e, t, r) {
  return Ct(e, Fr(t, r));
}
function Yl(e, t, r) {
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
var zl = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ra(typeof t != "number" ? t : na(t, yr));
};
function Wl(e) {
  var t, r = e.state, n = e.name, i = e.options, a = r.elements.arrow, c = r.modifiersData.popperOffsets, s = tt(r.placement), l = Wn(s), f = [Fe, He].indexOf(s) >= 0, u = f ? "height" : "width";
  if (!(!a || !c)) {
    var d = zl(i.padding, r), v = zn(a), m = l === "y" ? Le : Fe, y = l === "y" ? Ue : He, g = r.rects.reference[u] + r.rects.reference[l] - c[l] - r.rects.popper[u], x = c[l] - r.rects.reference[l], E = xr(a), P = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, $ = g / 2 - x / 2, D = d[m], b = P - v[u] - d[y], S = P / 2 - v[u] / 2 + $, _ = cr(D, S, b), w = l;
    r.modifiersData[n] = (t = {}, t[w] = _, t.centerOffset = _ - S, t);
  }
}
function Ul(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  if (i != null && !(typeof i == "string" && (i = t.elements.popper.querySelector(i), !i))) {
    if (process.env.NODE_ENV !== "production" && (Ve(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ea(t.elements.popper, i)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = i;
  }
}
const Hl = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Wl,
  effect: Ul,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function zt(e) {
  return e.split("-")[1];
}
var Gl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Zl(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: qt(t * i) / i || 0,
    y: qt(r * i) / i || 0
  };
}
function No(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, c = e.offsets, s = e.position, l = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, v = c.x, m = v === void 0 ? 0 : v, y = c.y, g = y === void 0 ? 0 : y, x = typeof u == "function" ? u({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = x.x, g = x.y;
  var E = c.hasOwnProperty("x"), P = c.hasOwnProperty("y"), $ = Fe, D = Le, b = window;
  if (f) {
    var S = xr(r), _ = "clientHeight", w = "clientWidth";
    if (S === Ke(r) && (S = yt(r), nt(S).position !== "static" && s === "absolute" && (_ = "scrollHeight", w = "scrollWidth")), S = S, i === Le || (i === Fe || i === He) && a === vr) {
      D = Ue;
      var N = d && S === b && b.visualViewport ? b.visualViewport.height : S[_];
      g -= N - n.height, g *= l ? 1 : -1;
    }
    if (i === Fe || (i === Le || i === Ue) && a === vr) {
      $ = He;
      var L = d && S === b && b.visualViewport ? b.visualViewport.width : S[w];
      m -= L - n.width, m *= l ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: s
  }, f && Gl), Q = u === !0 ? Zl({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  if (m = Q.x, g = Q.y, l) {
    var Z;
    return Object.assign({}, I, (Z = {}, Z[D] = P ? "0" : "", Z[$] = E ? "0" : "", Z.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", Z));
  }
  return Object.assign({}, I, (t = {}, t[D] = P ? g + "px" : "", t[$] = E ? m + "px" : "", t.transform = "", t));
}
function Kl(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, c = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = nt(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return f.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: tt(t.placement),
    variation: zt(t.placement),
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
const Xl = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Kl,
  data: {}
};
var $r = {
  passive: !0
};
function Jl(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, c = n.resize, s = c === void 0 ? !0 : c, l = Ke(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && f.forEach(function(u) {
    u.addEventListener("scroll", r.update, $r);
  }), s && l.addEventListener("resize", r.update, $r), function() {
    a && f.forEach(function(u) {
      u.removeEventListener("scroll", r.update, $r);
    }), s && l.removeEventListener("resize", r.update, $r);
  };
}
const Ql = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jl,
  data: {}
};
var eu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ar(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return eu[t];
  });
}
var tu = {
  start: "end",
  end: "start"
};
function Io(e) {
  return e.replace(/start|end/g, function(t) {
    return tu[t];
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
function ru(e, t) {
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
function nu(e) {
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
function ou(e, t) {
  var r = Yt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ko(e, t, r) {
  return t === Xi ? Dn(ru(e, r)) : At(t) ? ou(t, r) : Dn(nu(yt(e)));
}
function iu(e) {
  var t = lr(Gr(e)), r = ["absolute", "fixed"].indexOf(nt(e).position) >= 0, n = r && Ve(e) ? xr(e) : e;
  return At(n) ? t.filter(function(i) {
    return At(i) && ea(i, n) && st(i) !== "body";
  }) : [];
}
function au(e, t, r, n) {
  var i = t === "clippingParents" ? iu(e) : [].concat(t), a = [].concat(i, [r]), c = a[0], s = a.reduce(function(l, f) {
    var u = ko(e, f, n);
    return l.top = Ct(u.top, l.top), l.right = Fr(u.right, l.right), l.bottom = Fr(u.bottom, l.bottom), l.left = Ct(u.left, l.left), l;
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
    case Ue:
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
    var u = f === "y" ? "height" : "width";
    switch (a) {
      case Vt:
        l[f] = l[f] - (t[u] / 2 - r[u] / 2);
        break;
      case vr:
        l[f] = l[f] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function hr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, c = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? Rl : s, f = r.rootBoundary, u = f === void 0 ? Xi : f, d = r.elementContext, v = d === void 0 ? rr : d, m = r.altBoundary, y = m === void 0 ? !1 : m, g = r.padding, x = g === void 0 ? 0 : g, E = ra(typeof x != "number" ? x : na(x, yr)), P = v === rr ? Pl : rr, $ = e.rects.popper, D = e.elements[y ? P : v], b = au(At(D) ? D : D.contextElement || yt(e.elements.popper), l, u, c), S = Yt(e.elements.reference), _ = ia({
    reference: S,
    element: $,
    strategy: "absolute",
    placement: i
  }), w = Dn(Object.assign({}, $, _)), N = v === rr ? w : S, L = {
    top: b.top - N.top + E.top,
    bottom: N.bottom - b.bottom + E.bottom,
    left: b.left - N.left + E.left,
    right: N.right - b.right + E.right
  }, I = e.modifiersData.offset;
  if (v === rr && I) {
    var Q = I[i];
    Object.keys(L).forEach(function(Z) {
      var re = [He, Ue].indexOf(Z) >= 0 ? 1 : -1, se = [Le, Ue].indexOf(Z) >= 0 ? "y" : "x";
      L[Z] += Q[se] * re;
    });
  }
  return L;
}
function su(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, c = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, f = l === void 0 ? Ji : l, u = zt(n), d = u ? s ? Co : Co.filter(function(y) {
    return zt(y) === u;
  }) : yr, v = d.filter(function(y) {
    return f.indexOf(y) >= 0;
  });
  v.length === 0 && (v = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = v.reduce(function(y, g) {
    return y[g] = hr(e, {
      placement: g,
      boundary: i,
      rootBoundary: a,
      padding: c
    })[tt(g)], y;
  }, {});
  return Object.keys(m).sort(function(y, g) {
    return m[y] - m[g];
  });
}
function cu(e) {
  if (tt(e) === Hr)
    return [];
  var t = Ar(e);
  return [Io(e), t, Io(t)];
}
function lu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !0 : c, l = r.fallbackPlacements, f = r.padding, u = r.boundary, d = r.rootBoundary, v = r.altBoundary, m = r.flipVariations, y = m === void 0 ? !0 : m, g = r.allowedAutoPlacements, x = t.options.placement, E = tt(x), P = E === x, $ = l || (P || !y ? [Ar(x)] : cu(x)), D = [x].concat($).reduce(function(j, W) {
      return j.concat(tt(W) === Hr ? su(t, {
        placement: W,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: y,
        allowedAutoPlacements: g
      }) : W);
    }, []), b = t.rects.reference, S = t.rects.popper, _ = /* @__PURE__ */ new Map(), w = !0, N = D[0], L = 0; L < D.length; L++) {
      var I = D[L], Q = tt(I), Z = zt(I) === Vt, re = [Le, Ue].indexOf(Q) >= 0, se = re ? "width" : "height", ie = hr(t, {
        placement: I,
        boundary: u,
        rootBoundary: d,
        altBoundary: v,
        padding: f
      }), ee = re ? Z ? He : Fe : Z ? Ue : Le;
      b[se] > S[se] && (ee = Ar(ee));
      var Ee = Ar(ee), he = [];
      if (a && he.push(ie[Q] <= 0), s && he.push(ie[ee] <= 0, ie[Ee] <= 0), he.every(function(j) {
        return j;
      })) {
        N = I, w = !1;
        break;
      }
      _.set(I, he);
    }
    if (w)
      for (var O = y ? 3 : 1, k = function(W) {
        var F = D.find(function(Y) {
          var z = _.get(Y);
          if (z)
            return z.slice(0, W).every(function(X) {
              return X;
            });
        });
        if (F)
          return N = F, "break";
      }, B = O; B > 0; B--) {
        var V = k(B);
        if (V === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[n]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const uu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: lu,
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
  return [Le, He, Ue, Fe].some(function(t) {
    return e[t] >= 0;
  });
}
function du(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, c = hr(t, {
    elementContext: "reference"
  }), s = hr(t, {
    altBoundary: !0
  }), l = Mo(c, n), f = Mo(s, i, a), u = Lo(l), d = Lo(f);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const fu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: du
};
function pu(e, t, r) {
  var n = tt(e), i = [Fe, Le].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, c = a[0], s = a[1];
  return c = c || 0, s = (s || 0) * i, [Fe, He].indexOf(n) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function vu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, a = i === void 0 ? [0, 0] : i, c = Ji.reduce(function(u, d) {
    return u[d] = pu(d, t.rects, a), u;
  }, {}), s = c[t.placement], l = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = c;
}
const hu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vu
};
function mu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ia({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: mu,
  data: {}
};
function bu(e) {
  return e === "x" ? "y" : "x";
}
function yu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !1 : c, l = r.boundary, f = r.rootBoundary, u = r.altBoundary, d = r.padding, v = r.tether, m = v === void 0 ? !0 : v, y = r.tetherOffset, g = y === void 0 ? 0 : y, x = hr(t, {
    boundary: l,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), E = tt(t.placement), P = zt(t.placement), $ = !P, D = Wn(E), b = bu(D), S = t.modifiersData.popperOffsets, _ = t.rects.reference, w = t.rects.popper, N = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, L = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Q = {
    x: 0,
    y: 0
  };
  if (!!S) {
    if (a) {
      var Z, re = D === "y" ? Le : Fe, se = D === "y" ? Ue : He, ie = D === "y" ? "height" : "width", ee = S[D], Ee = ee + x[re], he = ee - x[se], O = m ? -w[ie] / 2 : 0, k = P === Vt ? _[ie] : w[ie], B = P === Vt ? -w[ie] : -_[ie], V = t.elements.arrow, j = m && V ? zn(V) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ta(), F = W[re], Y = W[se], z = cr(0, _[ie], j[ie]), X = $ ? _[ie] / 2 - O - z - F - L.mainAxis : k - z - F - L.mainAxis, q = $ ? -_[ie] / 2 + O + z + Y + L.mainAxis : B + z + Y + L.mainAxis, A = t.elements.arrow && xr(t.elements.arrow), T = A ? D === "y" ? A.clientTop || 0 : A.clientLeft || 0 : 0, J = (Z = I == null ? void 0 : I[D]) != null ? Z : 0, me = ee + X - J - T, Oe = ee + q - J, De = cr(m ? Fr(Ee, me) : Ee, ee, m ? Ct(he, Oe) : he);
      S[D] = De, Q[D] = De - ee;
    }
    if (s) {
      var ot, lt = D === "x" ? Le : Fe, it = D === "x" ? Ue : He, Se = S[b], Xe = b === "y" ? "height" : "width", Je = Se + x[lt], xt = Se - x[it], vt = [Le, Fe].indexOf(E) !== -1, _t = (ot = I == null ? void 0 : I[b]) != null ? ot : 0, wt = vt ? Je : Se - _[Xe] - w[Xe] - _t + L.altAxis, Ae = vt ? Se + _[Xe] + w[Xe] - _t - L.altAxis : xt, Qe = m && vt ? Yl(wt, Se, Ae) : cr(m ? wt : Je, Se, m ? Ae : xt);
      S[b] = Qe, Q[b] = Qe - Se;
    }
    t.modifiersData[n] = Q;
  }
}
const xu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: yu,
  requiresIfExists: ["offset"]
};
function _u(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function wu(e) {
  return e === Ke(e) || !Ve(e) ? Un(e) : _u(e);
}
function Eu(e) {
  var t = e.getBoundingClientRect(), r = qt(t.width) / e.offsetWidth || 1, n = qt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Tu(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ve(t), i = Ve(t) && Eu(t), a = yt(t), c = Yt(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((st(t) !== "body" || Gn(a)) && (s = wu(t)), Ve(t) ? (l = Yt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Hn(a))), {
    x: c.left + s.scrollLeft - l.x,
    y: c.top + s.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function Ou(e) {
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
function Su(e) {
  var t = Ou(e);
  return Pn.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Ru(e) {
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
var Pt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Pu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Fo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function $u(e) {
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
        }) == null && console.error(mt(Pu, String(t.name), n, n));
      });
    });
  });
}
function Du(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function Cu(e) {
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
var jo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Au = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Bo = {
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
function Nu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Bo : i;
  return function(s, l, f) {
    f === void 0 && (f = a);
    var u = {
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
    }, d = [], v = !1, m = {
      state: u,
      setOptions: function(E) {
        var P = typeof E == "function" ? E(u.options) : E;
        g(), u.options = Object.assign({}, a, u.options, P), u.scrollParents = {
          reference: At(s) ? lr(s) : s.contextElement ? lr(s.contextElement) : [],
          popper: lr(l)
        };
        var $ = Su(Cu([].concat(n, u.options.modifiers)));
        if (u.orderedModifiers = $.filter(function(I) {
          return I.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = Du([].concat($, u.options.modifiers), function(I) {
            var Q = I.name;
            return Q;
          });
          if ($u(D), tt(u.options.placement) === Hr) {
            var b = u.orderedModifiers.find(function(I) {
              var Q = I.name;
              return Q === "flip";
            });
            b || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = nt(l), _ = S.marginTop, w = S.marginRight, N = S.marginBottom, L = S.marginLeft;
          [_, w, N, L].some(function(I) {
            return parseFloat(I);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return y(), m.update();
      },
      forceUpdate: function() {
        if (!v) {
          var E = u.elements, P = E.reference, $ = E.popper;
          if (!Vo(P, $)) {
            process.env.NODE_ENV !== "production" && console.error(jo);
            return;
          }
          u.rects = {
            reference: Tu(P, xr($), u.options.strategy === "fixed"),
            popper: zn($)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(I) {
            return u.modifiersData[I.name] = Object.assign({}, I.data);
          });
          for (var D = 0, b = 0; b < u.orderedModifiers.length; b++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error(Au);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, b = -1;
              continue;
            }
            var S = u.orderedModifiers[b], _ = S.fn, w = S.options, N = w === void 0 ? {} : w, L = S.name;
            typeof _ == "function" && (u = _({
              state: u,
              options: N,
              name: L,
              instance: m
            }) || u);
          }
        }
      },
      update: Ru(function() {
        return new Promise(function(x) {
          m.forceUpdate(), x(u);
        });
      }),
      destroy: function() {
        g(), v = !0;
      }
    };
    if (!Vo(s, l))
      return process.env.NODE_ENV !== "production" && console.error(jo), m;
    m.setOptions(f).then(function(x) {
      !v && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function y() {
      u.orderedModifiers.forEach(function(x) {
        var E = x.name, P = x.options, $ = P === void 0 ? {} : P, D = x.effect;
        if (typeof D == "function") {
          var b = D({
            state: u,
            name: E,
            instance: m,
            options: $
          }), S = function() {
          };
          d.push(b || S);
        }
      });
    }
    function g() {
      d.forEach(function(x) {
        return x();
      }), d = [];
    }
    return m;
  };
}
var Iu = [Ql, gu, Xl, Bl, hu, uu, xu, Hl, fu], ku = /* @__PURE__ */ Nu({
  defaultModifiers: Iu
}), Mu = typeof Element < "u", Lu = typeof Map == "function", Fu = typeof Set == "function", ju = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (Lu && e instanceof Map && t instanceof Map) {
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
    if (Mu && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !Nr(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Bu = function(t, r) {
  try {
    return Nr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, Vu = [], Zr = function(t, r, n) {
  n === void 0 && (n = {});
  var i = $t.useRef(null), a = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || Vu
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
      fn: function(m) {
        var y = m.state, g = Object.keys(y.elements);
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
  }, []), u = $t.useMemo(function() {
    var v = {
      onFirstUpdate: a.onFirstUpdate,
      placement: a.placement,
      strategy: a.strategy,
      modifiers: [].concat(a.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Bu(i.current, v) ? i.current || v : (i.current = v, v);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, f]), d = $t.useRef();
  return Do(function() {
    d.current && d.current.setOptions(u);
  }, [u]), Do(function() {
    if (!(t == null || r == null)) {
      var v = n.createPopper || ku, m = v(t, r, u);
      return d.current = m, function() {
        m.destroy(), d.current = null;
      };
    }
  }, [t, r, n.createPopper]), {
    state: d.current ? d.current.state : null,
    styles: s.styles,
    attributes: s.attributes,
    update: d.current ? d.current.update : null,
    forceUpdate: d.current ? d.current.forceUpdate : null
  };
};
const bn = {
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, qu = Object.freeze({
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
  const [u, d] = K(!1), v = U(null), m = U(null), y = ue(() => t || pt("c-Toggletip-"), [t]), g = (b) => d(!1), x = (b) => {
    d(!u), u && document.activeElement === v.current && !l && setTimeout(() => {
      d((S) => !S);
    }, 100), f && f(b);
  }, E = (b) => {
    (b.keyCode | b.which) === qu.ESC && u && d(!u);
  }, P = we.map(e, (b) => Ge(b) ? _e(b, {
    ...b.props,
    "aria-describedby": t,
    ref: v,
    onClick: x,
    "data-open": u,
    ...l ? {} : {
      onBlur: g,
      onKeyDown: E
    }
  }) : null), {
    styles: $,
    attributes: D
  } = Zr(v.current, m.current, {
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
      enabled: u
    }]
  });
  return !r || we.count(e) > 1 || s ? /* @__PURE__ */ p(at, {
    children: e
  }) : /* @__PURE__ */ C(at, {
    children: [P, /* @__PURE__ */ p(Ht, {
      id: "js-toggletip-portal",
      children: /* @__PURE__ */ C("div", {
        id: y,
        ref: m,
        role: "status",
        className: `${bn["c-toggletip"]} ${u && bn["c-toggletip--active"]} ${i != null ? i : ""}`,
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
}, Yu = Object.freeze({
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
  const [l, f] = K(!1), u = U(null), d = U(null), v = U(), m = ue(() => t || pt("c-tooltip-"), [t]), y = (_) => {
    l || f(!l);
  }, g = (_) => f(!1), x = (_) => {
    (!l || document.activeElement !== u.current) && f(!l);
  }, E = () => {
    window.clearTimeout(v.current);
  }, P = (_) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, $ = (_) => {
    (_.keyCode | _.which) === Yu.ESC && l && f(!l);
  }, D = we.map(e, (_) => Ge(_) ? _e(_, {
    ..._.props,
    "aria-describedby": t,
    ref: u,
    onFocus: y,
    onBlur: g,
    onMouseEnter: x,
    onMouseLeave: P,
    onKeyDown: $
  }) : null), {
    styles: b,
    attributes: S
  } = Zr(u.current, d.current, {
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
  return !r || we.count(e) > 1 || s ? /* @__PURE__ */ p(at, {
    children: e
  }) : /* @__PURE__ */ C(at, {
    children: [D, /* @__PURE__ */ p(Ht, {
      id: "js-tooltip-portal",
      children: /* @__PURE__ */ C("div", {
        id: m,
        ref: d,
        role: "tooltip",
        "data-open": l,
        onMouseEnter: E,
        onMouseLeave: P,
        className: `${yn["c-tooltip"]} ${l && yn["c-tooltip--active"]} ${i != null ? i : ""}`,
        style: b.popper,
        ...S.popper,
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
  const [s, l] = K(null), f = [...e.reduce((g, x, E) => [...g, {
    id: E + 1,
    ...x
  }], [])], u = (g) => f.filter((x) => x.id === g).reduce((x, E) => ({
    ...x,
    ...E
  }), {}), d = (g) => {
    const x = document.querySelector("#root");
    x.inert = g;
  }, v = () => {
    l((g) => g < f.length ? g + 1 : g);
  }, m = () => {
    l((g) => g > 0 + 1 ? g - 1 : g);
  }, y = () => {
    l(null), r(!t), d(!1), n && n.current.focus();
  };
  return H(() => {
    t && (l(f.shift().id), d(!0));
  }, [t]), /* @__PURE__ */ p(Zn.Provider, {
    value: {
      isOpen: t,
      lastId: f.length,
      ...u(s),
      methods: {
        onNext: v,
        onPrev: m,
        onClose: y
      }
    },
    children: /* @__PURE__ */ p(Ht, {
      id: "js-tour",
      children: t && /* @__PURE__ */ C(at, {
        children: [/* @__PURE__ */ p(zu, {}), /* @__PURE__ */ p(la, {
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
    distance: u,
    elementClass: d
  } = be(Zn), v = U(), {
    onClose: m,
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
  }), P = () => Ge(l) ? l : va("p", {
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
      className: `${bt["c-tour-content"]} ${n && "animate__animated animate__fadeIn animate__faster"} ${d != null ? d : ""}`,
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
          onClick: m,
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
const zu = () => {
  const {
    isOpen: e,
    id: t,
    target: r,
    helpLayerClass: n
  } = be(Zn), [i, a] = K({}), c = () => {
    const {
      x: s,
      y: l,
      width: f,
      height: u
    } = document.querySelector(r).getBoundingClientRect();
    a({
      width: `${f}px`,
      height: `${u}px`,
      top: `${l}px`,
      left: `${s}px`
    });
  };
  return H(() => (r && c(), () => {
    a({});
  }), [r]), H(() => {
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
}, Wu = "_active_r3225_90", Uu = "_iconPulse_r3225_1", fe = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: Wu,
  iconPulse: Uu,
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
  const [s, l] = K({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, u] = K({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [d, v] = K({
    state: !1,
    label: "Reproducir video"
  }), [m, y] = K({
    state: !0,
    label: "Volumen"
  }), [g, x] = K(100), [E, P] = K({
    state: !1,
    label: "Ver en pantalla completa"
  }), [$, D] = K(!1), [b, S] = K(100), _ = U(null), w = U(null), N = U(null), L = U(null), I = U(null), Q = U(null), Z = U(null), re = U(null), [se, ie] = K(!1), ee = (A) => {
    A.classList.add(`${fe.active}`), setTimeout(() => {
      A.classList.remove(`${fe.active}`);
    }, 650);
  };
  function Ee() {
    const A = w.current;
    d.state ? (A.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (A.play(), v({
      state: !0,
      label: "Pausar video"
    })), ee(Q.current);
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
    const T = parseInt(A, 10), J = T >= 3600 ? Math.floor(T / 3600) : 0, me = Math.floor((T - J * 3600) / 60), Oe = T - J * 3600 - me * 60, De = j(V(J)), ot = j(V(me)), lt = j(V(Oe));
    return {
      hours: De,
      minutes: ot,
      seconds: lt
    };
  }
  function k(A) {
    const T = B(A.duration), J = B(A.currentTime);
    u({
      totalSeconds: A.currentTime,
      hours: parseInt(O(A.currentTime).hours),
      minutes: parseInt(O(A.currentTime).minutes),
      seconds: parseInt(O(A.currentTime).seconds),
      string: J
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
    const T = L.current, J = w.current, Oe = A.nativeEvent.offsetX / T.offsetWidth * J.duration;
    J.currentTime = Oe;
  }
  function F(A) {
    const T = w.current, J = A.target.value, me = J / 100;
    S(J), x(J), T.volume = me, m.state || y({
      state: !0,
      label: "Volumen"
    });
  }
  const Y = () => {
    if (m.state) {
      y({
        state: !1,
        label: "Mutear video"
      });
      const A = w.current, T = 0, J = T;
      S(T), A.volume = J;
    } else {
      y({
        state: !0,
        label: "Volumen"
      });
      const A = w.current, T = g, J = T / 100;
      S(T), A.volume = J;
    }
  }, z = function(A) {
    (A.keyCode || A.which) === 32 && Ee();
  }, X = function(A) {
    const T = Math.floor(L.current.getAttribute("aria-valuenow"));
    if (document.activeElement === I.current)
      return null;
    if ((A.keyCode || A.which) === 37) {
      const J = T - 5;
      J >= 0 ? w.current.currentTime = J : w.current.currentTime = 0, ee(re.current);
    }
    if ((A.keyCode || A.which) === 39) {
      const J = T + 5;
      J >= w.current.duration ? w.current.currentTime = w.current.duration : w.current.currentTime = J, ee(Z.current);
    }
  }, q = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return H(() => {
    const A = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(A, "caption") && ie(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(A, "volume") && S(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), H(() => {
    localStorage.setItem("ui-video", JSON.stringify({
      caption: se,
      volume: b
    }));
  }, [se, b]), H(() => (N.current ? N.current.addEventListener("error", () => {
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
    onKeyDown: (A) => X(A),
    ...c,
    children: [/* @__PURE__ */ C("div", {
      className: `${fe["c-vid__container"]} ${i}`,
      ref: _,
      children: [/* @__PURE__ */ C("div", {
        className: fe["c-vid__wrapper"],
        children: [/* @__PURE__ */ C("video", {
          ref: w,
          onTimeUpdate: (A) => k(A.target),
          onLoadedData: (A) => k(A.target),
          onClick: Ee,
          className: `${fe["c-vid__video"]} ${se ? "" : fe["no-captions"]}`,
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
            children: /* @__PURE__ */ p(xe, {
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
            ref: Q,
            className: fe["c-vid__icon"],
            children: /* @__PURE__ */ p(xe, {
              children: /* @__PURE__ */ p("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "48",
                width: "48",
                viewBox: "0 0 48 48",
                children: d.state ? /* @__PURE__ */ p("path", {
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
            children: /* @__PURE__ */ p(xe, {
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
          ref: L,
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
          "aria-label": d.label,
          onClick: Ee,
          "data-description": "Este bot\xF3n reproduce el video",
          children: /* @__PURE__ */ p(xe, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: d.state ? /* @__PURE__ */ p("path", {
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
          "aria-label": m.label,
          "data-description": "Este bot\xF3n controla el volumen",
          onClick: Y,
          children: /* @__PURE__ */ p(xe, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: m.state ? /* @__PURE__ */ p("path", {
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
            ref: I,
            id: "volumeControl",
            type: "range",
            min: "0",
            max: "100",
            step: "5",
            value: b,
            onChange: F,
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
          "aria-pressed": $ ? void 0 : se,
          onClick: () => ie(!se),
          "aria-label": "Subt\xEDtulos",
          className: `${fe["c-vid__button"]} ${fe["c-vid__subtitles"]}`,
          children: /* @__PURE__ */ p(xe, {
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
          children: /* @__PURE__ */ p(xe, {
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
  const [r, n] = K(!1), i = U(), a = () => n(!r), c = (s) => {
    i.current || (i.current = s);
  };
  return H(() => {
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
const Hu = ({
  children: e,
  onClick: t
}) => {
  const {
    onOpen: r,
    setRefButton: n
  } = be(Kn);
  if (we.count(e) > 1)
    return null;
  const i = (c) => {
    r(), t && t(c);
  }, a = (c) => Ge(c) ? _e(c, {
    ...c.props,
    ref: n,
    onClick: i
  }) : null;
  return we.map(e, a);
};
Hu.propTypes = {
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
  } = be(Kn), l = U(), f = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', u = (m) => {
    const y = l.current.querySelectorAll(f), g = s.current, x = y[0], E = y[y.length - 1];
    if ((m.keyCode || m.which) === _n.TAB && document.activeElement === E)
      return g.focus(), m.preventDefault();
    m.shiftKey && (m.keyCode || m.which) === _n.TAB && document.activeElement === x && (g.focus(), m.preventDefault()), (m.keyCode || m.which) === _n.ESC && g.focus();
  }, {
    styles: d,
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
  return H(() => {
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
      style: d.popper,
      onKeyDown: u,
      ...v.popper,
      children: [e, r && /* @__PURE__ */ p("div", {
        className: xn["c-popover-modal__arrow"],
        "data-popper-arrow": !0,
        style: d.arrow
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
const Gu = (e, t) => {
  const [r, n] = K(() => {
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
}, Zu = (e, t, r) => {
  const [n, i] = K(r), a = e.map((s) => window.matchMedia(s)), c = () => {
    const s = a.findIndex((l) => l.matches);
    return typeof t[s] < "u" ? t[s] : r;
  };
  return H(() => {
    i(c);
    const s = (l) => i(c);
    return a.forEach((l) => l.addEventListener("change", s)), () => {
      a.forEach((l) => l.removeEventListener("change", s));
    };
  }, []), n;
}, ed = () => {
  const [e, t] = Gu("dark-mode-enabled"), r = Zu(["(prefers-color-scheme: dark)"], [!0], !1), n = typeof e < "u" ? e : r;
  return H(() => {
    t(r);
  }, [r]), H(() => {
    const i = window.document.body;
    n ? i.setAttribute("data-dark-mode", n) : i.removeAttribute("data-dark-mode", n);
  }, [n]), [n, t];
}, Ku = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), td = (e) => {
  const { root: t, rootMargin: r, threshold: n } = e || Ku, [i, a] = K(!1), [c, s] = K(null);
  return H(() => {
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
}, rd = (e) => pa(e);
export {
  Ra as Accordion,
  Go as AccordionButton,
  Zo as AccordionItem,
  Ko as AccordionPanel,
  Xo as Audio,
  Dt as Button,
  hl as ButtonSection,
  ei as CheckBox,
  ys as CheckBoxGroup,
  ws as Col,
  Ts as Content,
  _i as DragAndDrop,
  xi as DragAndDropContext,
  wi as Draggable,
  Ei as Droppable,
  Qu as Filter,
  Ti as GeneralDraggable,
  xe as Icon,
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
  gl as Paper,
  da as PopoverModal,
  Hu as PopoverModalButton,
  fa as PopoverModalContent,
  Kn as PopoverModalContext,
  Ht as Portal,
  El as Row,
  qi as Section,
  zi as Select,
  Tl as SelectGroup,
  Wi as Switch,
  Ui as Tab,
  Hi as TabList,
  Gi as TabPanel,
  Zi as TabPanels,
  Ol as Tabs,
  qn as TabsContext,
  Ki as TextArea,
  Sl as ThemeProvider,
  aa as Toggletip,
  sa as Tooltip,
  ca as Tour,
  Zn as TourContext,
  la as TourElement,
  zu as TourHelpLayer,
  il as UnorderedList,
  ua as Video,
  rd as createTheme,
  ed as useDarkMode,
  Gu as useLocalStorage,
  Zu as useMedia,
  td as useOnScreen,
  cl as usePagination,
  xl as usePortal
};
