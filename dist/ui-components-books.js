import * as $t from "react";
import Yr, { Children as xe, useState as H, useEffect as W, isValidElement as Ve, cloneElement as _e, forwardRef as lt, useRef as J, useMemo as le, useLayoutEffect as Go, useCallback as Ce, createContext as Ke, memo as Ho, useReducer as Cn, useContext as ge, createElement as Ko } from "react";
import * as Ea from "react-dom";
import { unstable_batchedUpdates as Zt, createPortal as Xo } from "react-dom";
var Pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, o = { exports: {} }, nn = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to;
function Ta() {
  if (to)
    return se;
  to = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function $(_) {
    if (typeof _ == "object" && _ !== null) {
      var T = _.$$typeof;
      switch (T) {
        case t:
          switch (_ = _.type, _) {
            case l:
            case d:
            case n:
            case a:
            case i:
            case f:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case u:
                case b:
                case v:
                case c:
                  return _;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  function D(_) {
    return $(_) === d;
  }
  return se.AsyncMode = l, se.ConcurrentMode = d, se.ContextConsumer = s, se.ContextProvider = c, se.Element = t, se.ForwardRef = u, se.Fragment = n, se.Lazy = b, se.Memo = v, se.Portal = r, se.Profiler = a, se.StrictMode = i, se.Suspense = f, se.isAsyncMode = function(_) {
    return D(_) || $(_) === l;
  }, se.isConcurrentMode = D, se.isContextConsumer = function(_) {
    return $(_) === s;
  }, se.isContextProvider = function(_) {
    return $(_) === c;
  }, se.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, se.isForwardRef = function(_) {
    return $(_) === u;
  }, se.isFragment = function(_) {
    return $(_) === n;
  }, se.isLazy = function(_) {
    return $(_) === b;
  }, se.isMemo = function(_) {
    return $(_) === v;
  }, se.isPortal = function(_) {
    return $(_) === r;
  }, se.isProfiler = function(_) {
    return $(_) === a;
  }, se.isStrictMode = function(_) {
    return $(_) === i;
  }, se.isSuspense = function(_) {
    return $(_) === f;
  }, se.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === d || _ === a || _ === i || _ === f || _ === p || typeof _ == "object" && _ !== null && (_.$$typeof === b || _.$$typeof === v || _.$$typeof === c || _.$$typeof === s || _.$$typeof === u || _.$$typeof === y || _.$$typeof === E || _.$$typeof === R || _.$$typeof === g);
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
var ro;
function Oa() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function $(O) {
      return typeof O == "string" || typeof O == "function" || O === n || O === d || O === a || O === i || O === f || O === p || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === v || O.$$typeof === c || O.$$typeof === s || O.$$typeof === u || O.$$typeof === y || O.$$typeof === E || O.$$typeof === R || O.$$typeof === g);
    }
    function D(O) {
      if (typeof O == "object" && O !== null) {
        var Q = O.$$typeof;
        switch (Q) {
          case t:
            var me = O.type;
            switch (me) {
              case l:
              case d:
              case n:
              case a:
              case i:
              case f:
                return me;
              default:
                var Te = me && me.$$typeof;
                switch (Te) {
                  case s:
                  case u:
                  case b:
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
    var _ = l, T = d, x = s, w = c, A = t, F = u, M = n, X = b, U = v, re = r, de = a, ie = i, ee = f, we = !1;
    function he(O) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(O) || D(O) === l;
    }
    function S(O) {
      return D(O) === d;
    }
    function I(O) {
      return D(O) === s;
    }
    function B(O) {
      return D(O) === c;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function L(O) {
      return D(O) === u;
    }
    function G(O) {
      return D(O) === n;
    }
    function j(O) {
      return D(O) === b;
    }
    function q(O) {
      return D(O) === v;
    }
    function z(O) {
      return D(O) === r;
    }
    function Z(O) {
      return D(O) === a;
    }
    function V(O) {
      return D(O) === i;
    }
    function N(O) {
      return D(O) === f;
    }
    ce.AsyncMode = _, ce.ConcurrentMode = T, ce.ContextConsumer = x, ce.ContextProvider = w, ce.Element = A, ce.ForwardRef = F, ce.Fragment = M, ce.Lazy = X, ce.Memo = U, ce.Portal = re, ce.Profiler = de, ce.StrictMode = ie, ce.Suspense = ee, ce.isAsyncMode = he, ce.isConcurrentMode = S, ce.isContextConsumer = I, ce.isContextProvider = B, ce.isElement = Y, ce.isForwardRef = L, ce.isFragment = G, ce.isLazy = j, ce.isMemo = q, ce.isPortal = z, ce.isProfiler = Z, ce.isStrictMode = V, ce.isSuspense = N, ce.isValidElementType = $, ce.typeOf = D;
  }()), ce;
}
var no;
function Jo() {
  return no || (no = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Ta() : e.exports = Oa();
  }(nn)), nn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var on, oo;
function Sa() {
  if (oo)
    return on;
  oo = 1;
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
  return on = i() ? Object.assign : function(a, c) {
    for (var s, l = n(a), d, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var f in s)
        t.call(s, f) && (l[f] = s[f]);
      if (e) {
        d = e(s);
        for (var p = 0; p < d.length; p++)
          r.call(s, d[p]) && (l[d[p]] = s[d[p]]);
      }
    }
    return l;
  }, on;
}
var an, io;
function Nn() {
  if (io)
    return an;
  io = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return an = e, an;
}
var sn, ao;
function Zo() {
  return ao || (ao = 1, sn = Function.call.bind(Object.prototype.hasOwnProperty)), sn;
}
var cn, so;
function Ra() {
  if (so)
    return cn;
  so = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Nn(), r = {}, n = Zo();
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
              var p = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = a[u](c, u, l, s, null, t);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var v = d ? d() : "";
            e(
              "Failed " + s + " type: " + f.message + (v != null ? v : "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, cn = i, cn;
}
var ln, co;
function Pa() {
  if (co)
    return ln;
  co = 1;
  var e = Jo(), t = Sa(), r = Nn(), n = Zo(), i = Ra(), a = function() {
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
  return ln = function(s, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f(S) {
      var I = S && (d && S[d] || S[u]);
      if (typeof I == "function")
        return I;
    }
    var p = "<<anonymous>>", v = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: R(),
      arrayOf: $,
      element: D(),
      elementType: _(),
      instanceOf: T,
      node: F(),
      objectOf: w,
      oneOf: x,
      oneOfType: A,
      shape: X,
      exact: U
    };
    function b(S, I) {
      return S === I ? S !== 0 || 1 / S === 1 / I : S !== S && I !== I;
    }
    function g(S, I) {
      this.message = S, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function y(S) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, B = 0;
      function Y(G, j, q, z, Z, V, N) {
        if (z = z || p, V = V || q, N !== r) {
          if (l) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = z + ":" + q;
            !I[Q] && B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[Q] = !0, B++);
          }
        }
        return j[q] == null ? G ? j[q] === null ? new g("The " + Z + " `" + V + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new g("The " + Z + " `" + V + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : S(j, q, z, Z, V);
      }
      var L = Y.bind(null, !1);
      return L.isRequired = Y.bind(null, !0), L;
    }
    function E(S) {
      function I(B, Y, L, G, j, q) {
        var z = B[Y], Z = ie(z);
        if (Z !== S) {
          var V = ee(z);
          return new g(
            "Invalid " + G + " `" + j + "` of type " + ("`" + V + "` supplied to `" + L + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return y(I);
    }
    function R() {
      return y(c);
    }
    function $(S) {
      function I(B, Y, L, G, j) {
        if (typeof S != "function")
          return new g("Property `" + j + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var q = B[Y];
        if (!Array.isArray(q)) {
          var z = ie(q);
          return new g("Invalid " + G + " `" + j + "` of type " + ("`" + z + "` supplied to `" + L + "`, expected an array."));
        }
        for (var Z = 0; Z < q.length; Z++) {
          var V = S(q, Z, L, G, j + "[" + Z + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return y(I);
    }
    function D() {
      function S(I, B, Y, L, G) {
        var j = I[B];
        if (!s(j)) {
          var q = ie(j);
          return new g("Invalid " + L + " `" + G + "` of type " + ("`" + q + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(S);
    }
    function _() {
      function S(I, B, Y, L, G) {
        var j = I[B];
        if (!e.isValidElementType(j)) {
          var q = ie(j);
          return new g("Invalid " + L + " `" + G + "` of type " + ("`" + q + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(S);
    }
    function T(S) {
      function I(B, Y, L, G, j) {
        if (!(B[Y] instanceof S)) {
          var q = S.name || p, z = he(B[Y]);
          return new g("Invalid " + G + " `" + j + "` of type " + ("`" + z + "` supplied to `" + L + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return y(I);
    }
    function x(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function I(B, Y, L, G, j) {
        for (var q = B[Y], z = 0; z < S.length; z++)
          if (b(q, S[z]))
            return null;
        var Z = JSON.stringify(S, function(N, O) {
          var Q = ee(O);
          return Q === "symbol" ? String(O) : O;
        });
        return new g("Invalid " + G + " `" + j + "` of value `" + String(q) + "` " + ("supplied to `" + L + "`, expected one of " + Z + "."));
      }
      return y(I);
    }
    function w(S) {
      function I(B, Y, L, G, j) {
        if (typeof S != "function")
          return new g("Property `" + j + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var q = B[Y], z = ie(q);
        if (z !== "object")
          return new g("Invalid " + G + " `" + j + "` of type " + ("`" + z + "` supplied to `" + L + "`, expected an object."));
        for (var Z in q)
          if (n(q, Z)) {
            var V = S(q, Z, L, G, j + "." + Z, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return y(I);
    }
    function A(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var I = 0; I < S.length; I++) {
        var B = S[I];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + we(B) + " at index " + I + "."
          ), c;
      }
      function Y(L, G, j, q, z) {
        for (var Z = [], V = 0; V < S.length; V++) {
          var N = S[V], O = N(L, G, j, q, z, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && Z.push(O.data.expectedType);
        }
        var Q = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new g("Invalid " + q + " `" + z + "` supplied to " + ("`" + j + "`" + Q + "."));
      }
      return y(Y);
    }
    function F() {
      function S(I, B, Y, L, G) {
        return re(I[B]) ? null : new g("Invalid " + L + " `" + G + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return y(S);
    }
    function M(S, I, B, Y, L) {
      return new g(
        (S || "React class") + ": " + I + " type `" + B + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function X(S) {
      function I(B, Y, L, G, j) {
        var q = B[Y], z = ie(q);
        if (z !== "object")
          return new g("Invalid " + G + " `" + j + "` of type `" + z + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var Z in S) {
          var V = S[Z];
          if (typeof V != "function")
            return M(L, G, j, Z, ee(V));
          var N = V(q, Z, L, G, j + "." + Z, r);
          if (N)
            return N;
        }
        return null;
      }
      return y(I);
    }
    function U(S) {
      function I(B, Y, L, G, j) {
        var q = B[Y], z = ie(q);
        if (z !== "object")
          return new g("Invalid " + G + " `" + j + "` of type `" + z + "` " + ("supplied to `" + L + "`, expected `object`."));
        var Z = t({}, B[Y], S);
        for (var V in Z) {
          var N = S[V];
          if (n(S, V) && typeof N != "function")
            return M(L, G, j, V, ee(N));
          if (!N)
            return new g(
              "Invalid " + G + " `" + j + "` key `" + V + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(B[Y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var O = N(q, V, L, G, j + "." + V, r);
          if (O)
            return O;
        }
        return null;
      }
      return y(I);
    }
    function re(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(re);
          if (S === null || s(S))
            return !0;
          var I = f(S);
          if (I) {
            var B = I.call(S), Y;
            if (I !== S.entries) {
              for (; !(Y = B.next()).done; )
                if (!re(Y.value))
                  return !1;
            } else
              for (; !(Y = B.next()).done; ) {
                var L = Y.value;
                if (L && !re(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function de(S, I) {
      return S === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function ie(S) {
      var I = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : de(I, S) ? "symbol" : I;
    }
    function ee(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var I = ie(S);
      if (I === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function we(S) {
      var I = ee(S);
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
    function he(S) {
      return !S.constructor || !S.constructor.name ? p : S.constructor.name;
    }
    return v.checkPropTypes = i, v.resetWarningCache = i.resetWarningCache, v.PropTypes = v, v;
  }, ln;
}
var un, lo;
function $a() {
  if (lo)
    return un;
  lo = 1;
  var e = Nn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, un = function() {
    function n(c, s, l, d, u, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
  }, un;
}
if (process.env.NODE_ENV !== "production") {
  var Da = Jo(), Ca = !0;
  o.exports = Pa()(Da.isElement, Ca);
} else
  o.exports = $a()();
const Na = (e) => {
  var t, r;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((r = e == null ? void 0 : e.type) == null ? void 0 : r.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ie = (e, t) => xe.toArray(e).filter((r) => t.indexOf(Na(r)) !== -1);
var Vr = { exports: {} }, Qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function Aa() {
  if (uo)
    return Qt;
  uo = 1;
  var e = Yr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, d) {
    var u, f = {}, p = null, v = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (f[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: t, type: s, key: p, ref: v, props: f, _owner: i.current };
  }
  return Qt.Fragment = r, Qt.jsx = c, Qt.jsxs = c, Qt;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function Ia() {
  return fo || (fo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Yr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b = Symbol.iterator, g = "@@iterator";
    function y(h) {
      if (h === null || typeof h != "object")
        return null;
      var P = b && h[b] || h[g];
      return typeof P == "function" ? P : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(h) {
      {
        for (var P = arguments.length, k = new Array(P > 1 ? P - 1 : 0), K = 1; K < P; K++)
          k[K - 1] = arguments[K];
        $("error", h, k);
      }
    }
    function $(h, P, k) {
      {
        var K = E.ReactDebugCurrentFrame, ae = K.getStackAddendum();
        ae !== "" && (P += "%s", k = k.concat([ae]));
        var ue = k.map(function(ne) {
          return String(ne);
        });
        ue.unshift("Warning: " + P), Function.prototype.apply.call(console[h], console, ue);
      }
    }
    var D = !1, _ = !1, T = !1, x = !1, w = !1, A;
    A = Symbol.for("react.module.reference");
    function F(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === n || h === a || w || h === i || h === d || h === u || x || h === v || D || _ || T || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === f || h.$$typeof === c || h.$$typeof === s || h.$$typeof === l || h.$$typeof === A || h.getModuleId !== void 0));
    }
    function M(h, P, k) {
      var K = h.displayName;
      if (K)
        return K;
      var ae = P.displayName || P.name || "";
      return ae !== "" ? k + "(" + ae + ")" : k;
    }
    function X(h) {
      return h.displayName || "Context";
    }
    function U(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
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
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case s:
            var P = h;
            return X(P) + ".Consumer";
          case c:
            var k = h;
            return X(k._context) + ".Provider";
          case l:
            return M(h, h.render, "ForwardRef");
          case f:
            var K = h.displayName || null;
            return K !== null ? K : U(h.type) || "Memo";
          case p: {
            var ae = h, ue = ae._payload, ne = ae._init;
            try {
              return U(ne(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, de = 0, ie, ee, we, he, S, I, B;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function L() {
      {
        if (de === 0) {
          ie = console.log, ee = console.info, we = console.warn, he = console.error, S = console.group, I = console.groupCollapsed, B = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: Y,
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
        de++;
      }
    }
    function G() {
      {
        if (de--, de === 0) {
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
              value: we
            }),
            error: re({}, h, {
              value: he
            }),
            group: re({}, h, {
              value: S
            }),
            groupCollapsed: re({}, h, {
              value: I
            }),
            groupEnd: re({}, h, {
              value: B
            })
          });
        }
        de < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = E.ReactCurrentDispatcher, q;
    function z(h, P, k) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (ae) {
            var K = ae.stack.trim().match(/\n( *(at )?)/);
            q = K && K[1] || "";
          }
        return `
` + q + h;
      }
    }
    var Z = !1, V;
    {
      var N = typeof WeakMap == "function" ? WeakMap : Map;
      V = new N();
    }
    function O(h, P) {
      if (!h || Z)
        return "";
      {
        var k = V.get(h);
        if (k !== void 0)
          return k;
      }
      var K;
      Z = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = j.current, j.current = null, L();
      try {
        if (P) {
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
              K = dt;
            }
            Reflect.construct(h, [], ne);
          } else {
            try {
              ne.call();
            } catch (dt) {
              K = dt;
            }
            h.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            K = dt;
          }
          h();
        }
      } catch (dt) {
        if (dt && K && typeof dt.stack == "string") {
          for (var te = dt.stack.split(`
`), Ae = K.stack.split(`
`), be = te.length - 1, ye = Ae.length - 1; be >= 1 && ye >= 0 && te[be] !== Ae[ye]; )
            ye--;
          for (; be >= 1 && ye >= 0; be--, ye--)
            if (te[be] !== Ae[ye]) {
              if (be !== 1 || ye !== 1)
                do
                  if (be--, ye--, ye < 0 || te[be] !== Ae[ye]) {
                    var We = `
` + te[be].replace(" at new ", " at ");
                    return h.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", h.displayName)), typeof h == "function" && V.set(h, We), We;
                  }
                while (be >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        Z = !1, j.current = ue, G(), Error.prepareStackTrace = ae;
      }
      var It = h ? h.displayName || h.name : "", eo = It ? z(It) : "";
      return typeof h == "function" && V.set(h, eo), eo;
    }
    function Q(h, P, k) {
      return O(h, !1);
    }
    function me(h) {
      var P = h.prototype;
      return !!(P && P.isReactComponent);
    }
    function Te(h, P, k) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return O(h, me(h));
      if (typeof h == "string")
        return z(h);
      switch (h) {
        case d:
          return z("Suspense");
        case u:
          return z("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            return Q(h.render);
          case f:
            return Te(h.type, P, k);
          case p: {
            var K = h, ae = K._payload, ue = K._init;
            try {
              return Te(ue(ae), P, k);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, it = {}, ut = E.ReactDebugCurrentFrame;
    function at(h) {
      if (h) {
        var P = h._owner, k = Te(h.type, h._source, P ? P.type : null);
        ut.setExtraStackFrame(k);
      } else
        ut.setExtraStackFrame(null);
    }
    function Oe(h, P, k, K, ae) {
      {
        var ue = Function.call.bind($e);
        for (var ne in h)
          if (ue(h, ne)) {
            var te = void 0;
            try {
              if (typeof h[ne] != "function") {
                var Ae = Error((K || "React class") + ": " + k + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ae.name = "Invariant Violation", Ae;
              }
              te = h[ne](P, ne, K, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              te = be;
            }
            te && !(te instanceof Error) && (at(ae), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", k, ne, typeof te), at(null)), te instanceof Error && !(te.message in it) && (it[te.message] = !0, at(ae), R("Failed %s type: %s", k, te.message), at(null));
          }
      }
    }
    var Je = Array.isArray;
    function Ze(h) {
      return Je(h);
    }
    function _t(h) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, k = P && h[Symbol.toStringTag] || h.constructor.name || "Object";
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
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _t(h)), xt(h);
    }
    var Ne = E.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ht, Xt, qe;
    qe = {};
    function Er(h) {
      if ($e.call(h, "ref")) {
        var P = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Qr(h) {
      if ($e.call(h, "key")) {
        var P = Object.getOwnPropertyDescriptor(h, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function en(h, P) {
      if (typeof h.ref == "string" && Ne.current && P && Ne.current.stateNode !== P) {
        var k = U(Ne.current.type);
        qe[k] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Ne.current.type), h.ref), qe[k] = !0);
      }
    }
    function Tr(h, P) {
      {
        var k = function() {
          ht || (ht = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function tn(h, P) {
      {
        var k = function() {
          Xt || (Xt = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Or = function(h, P, k, K, ae, ue, ne) {
      var te = {
        $$typeof: t,
        type: h,
        key: P,
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
        value: K
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function rn(h, P, k, K, ae) {
      {
        var ue, ne = {}, te = null, Ae = null;
        k !== void 0 && (wt(k), te = "" + k), Qr(P) && (wt(P.key), te = "" + P.key), Er(P) && (Ae = P.ref, en(P, ae));
        for (ue in P)
          $e.call(P, ue) && !Qe.hasOwnProperty(ue) && (ne[ue] = P[ue]);
        if (h && h.defaultProps) {
          var be = h.defaultProps;
          for (ue in be)
            ne[ue] === void 0 && (ne[ue] = be[ue]);
        }
        if (te || Ae) {
          var ye = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          te && Tr(ne, ye), Ae && tn(ne, ye);
        }
        return Or(h, te, Ae, ae, K, Ne.current, ne);
      }
    }
    var Jt = E.ReactCurrentOwner, Sr = E.ReactDebugCurrentFrame;
    function ve(h) {
      if (h) {
        var P = h._owner, k = Te(h.type, h._source, P ? P.type : null);
        Sr.setExtraStackFrame(k);
      } else
        Sr.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Pe(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function et() {
      {
        if (Jt.current) {
          var h = U(Jt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Me(h) {
      {
        if (h !== void 0) {
          var P = h.fileName.replace(/^.*[\\\/]/, ""), k = h.lineNumber;
          return `

Check your code at ` + P + ":" + k + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function ze(h) {
      {
        var P = et();
        if (!P) {
          var k = typeof h == "string" ? h : h.displayName || h.name;
          k && (P = `

Check the top-level render call using <` + k + ">.");
        }
        return P;
      }
    }
    function ft(h, P) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var k = ze(P);
        if (Fe[k])
          return;
        Fe[k] = !0;
        var K = "";
        h && h._owner && h._owner !== Jt.current && (K = " It was passed a child from " + U(h._owner.type) + "."), ve(h), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, K), ve(null);
      }
    }
    function je(h, P) {
      {
        if (typeof h != "object")
          return;
        if (Ze(h))
          for (var k = 0; k < h.length; k++) {
            var K = h[k];
            Pe(K) && ft(K, P);
          }
        else if (Pe(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ae = y(h);
          if (typeof ae == "function" && ae !== h.entries)
            for (var ue = ae.call(h), ne; !(ne = ue.next()).done; )
              Pe(ne.value) && ft(ne.value, P);
        }
      }
    }
    function Et(h) {
      {
        var P = h.type;
        if (P == null || typeof P == "string")
          return;
        var k;
        if (typeof P == "function")
          k = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === l || P.$$typeof === f))
          k = P.propTypes;
        else
          return;
        if (k) {
          var K = U(P);
          Oe(k, h.props, "prop", K, h);
        } else if (P.PropTypes !== void 0 && !Re) {
          Re = !0;
          var ae = U(P);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(h) {
      {
        for (var P = Object.keys(h.props), k = 0; k < P.length; k++) {
          var K = P[k];
          if (K !== "children" && K !== "key") {
            ve(h), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), ve(null);
            break;
          }
        }
        h.ref !== null && (ve(h), R("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function Ot(h, P, k, K, ae, ue) {
      {
        var ne = F(h);
        if (!ne) {
          var te = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = Me(ae);
          Ae ? te += Ae : te += et();
          var be;
          h === null ? be = "null" : Ze(h) ? be = "array" : h !== void 0 && h.$$typeof === t ? (be = "<" + (U(h.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : be = typeof h, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, te);
        }
        var ye = rn(h, P, k, ae, ue);
        if (ye == null)
          return ye;
        if (ne) {
          var We = P.children;
          if (We !== void 0)
            if (K)
              if (Ze(We)) {
                for (var It = 0; It < We.length; It++)
                  je(We[It], h);
                Object.freeze && Object.freeze(We);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(We, h);
        }
        return h === n ? Tt(ye) : Et(ye), ye;
      }
    }
    function At(h, P, k) {
      return Ot(h, P, k, !0);
    }
    function Rr(h, P, k) {
      return Ot(h, P, k, !1);
    }
    var St = Rr, Rt = At;
    er.Fragment = n, er.jsx = St, er.jsxs = Rt;
  }()), er;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Aa() : e.exports = Ia();
})(Vr);
const rt = Vr.exports.Fragment, m = Vr.exports.jsx, C = Vr.exports.jsxs, ka = ({
  children: e,
  allowMultiple: t,
  defaultIndex: r
}) => {
  const [n, i] = H(), a = (s) => {
    t ? n.includes(s) ? i(n.filter((l) => l !== s)) : i([...n, s]) : i(s);
  };
  W(() => (i(t ? r || [] : r != null ? r : null), () => {
    i(null);
  }), [t, r]);
  const c = xe.map(e, (s, l) => Ve(s) ? _e(s, {
    ...s.props,
    id: l,
    isOpen: n,
    onToggle: a
  }) : null);
  return /* @__PURE__ */ m("div", {
    children: Ie(c, ["AccordionItem"])
  });
};
ka.propTypes = {
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
}, Ft = {
  "c-accordion__item": "_c-accordion__item_1xs3f_1",
  "c-accordion__button": "_c-accordion__button_1xs3f_10",
  "c-accordion": "_c-accordion_1xs3f_1",
  "c-accordion__panel": "_c-accordion__panel_1xs3f_33",
  "c-accordion__panel--active": "_c-accordion__panel--active_1xs3f_38",
  "c-accordion__panel-content": "_c-accordion__panel-content_1xs3f_42"
}, Qo = ({
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
  className: `${Ft["c-accordion__button"]} u-flex ${a != null ? a : ""} ${n && i && i}`,
  onClick: r,
  "data-type": s,
  ...l,
  children: [e, c && c(n)]
});
Qo.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  onExpanded: o.exports.func,
  isExpanded: o.exports.bool,
  expanded: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  __TYPE: fe("AccordionButton")
};
Qo.defaultProps = {
  __TYPE: "AccordionButton"
};
const ei = ({
  children: e,
  id: t,
  isOpen: r,
  onToggle: n,
  addClass: i
}) => {
  const a = () => n(t), c = () => typeof r == "number" ? r === t : Array.isArray(r) ? !!r.includes(t) : !1, s = xe.map(e, (l) => Ve(l) ? l.props.__TYPE === "AccordionButton" ? _e(l, {
    ...l.props,
    id: t,
    onExpanded: a,
    isExpanded: c()
  }) : _e(l, {
    ...l.props,
    id: t,
    isExpanded: c()
  }) : null);
  return /* @__PURE__ */ m("div", {
    className: `${Ft["c-accordion__item"]} ${i != null ? i : ""}`,
    children: Ie(s, ["AccordionButton", "AccordionPanel"])
  });
};
ei.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  id: o.exports.number,
  isOpen: o.exports.oneOfType([o.exports.array, o.exports.number]),
  onToggle: o.exports.func,
  addClass: o.exports.string,
  __TYPE: fe("AccordionItem")
};
ei.defaultProps = {
  __TYPE: "AccordionItem"
};
const ti = ({
  children: e,
  id: t,
  isExpanded: r,
  addClass: n,
  __TYPE: i,
  ...a
}) => /* @__PURE__ */ m("div", {
  className: `${Ft["c-accordion"]} ${r ? Ft["c-accordion__panel--active"] : Ft["c-accordion__panel"]}`,
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
    className: `${Ft["c-accordion__panel-content"]} ${n != null ? n : ""}`,
    children: e
  })
});
ti.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  isExpanded: o.exports.bool,
  addClass: o.exports.string,
  __TYPE: fe("AccordionPanel")
};
ti.defaultProps = {
  __TYPE: "AccordionPanel"
};
const An = [
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
], po = {
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
  if (!An.includes(e))
    return /* @__PURE__ */ m("span", {
      children: "Doesn't exist"
    });
  const n = `/ui-components-books/dist/assets/icons/svg/${e}.svg#${e}`, i = new URL(n, import.meta.url).href;
  return /* @__PURE__ */ m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: `${po["c-icon"]} ${po[`c-${t}`]} ${r != null ? r : ""}`,
    "aria-hidden": "true",
    "data-testid": e,
    children: /* @__PURE__ */ m("use", {
      xlinkHref: i
    })
  });
};
De.propTypes = {
  name: o.exports.oneOf(An),
  size: o.exports.oneOf(["small", "normal", "big"]),
  addClass: o.exports.string,
  __TYPE: fe("Icon")
};
De.defaultProps = {
  size: "normal",
  name: "play",
  __TYPE: "Icon"
};
const tr = {
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
    ...p
  } = e;
  return /* @__PURE__ */ C("button", {
    ref: t,
    className: `${tr["c-button"]} ${tr[`c-${c}`]} ${tr[`c-${n}`]} ${i && i.name && s ? tr["c-round"] : ""} 
        ${i && i.position === "right" ? tr["c-reverse"] : ""} ${f != null ? f : ""}`,
    disabled: l,
    type: a,
    onClick: d,
    ...s && {
      "aria-label": `${r}`
    },
    ...p,
    children: [u, i && /* @__PURE__ */ m(De, {
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
    name: o.exports.oneOf(An),
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
}, ri = ({
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
  }), f = (p) => {
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
  }) : /* @__PURE__ */ C(rt, {
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
ri.defaultProps = {
  a11y: !1,
  type: "Bar"
};
ri.propTypes = {
  src: o.exports.string,
  a11y: o.exports.bool,
  format: o.exports.string,
  size: o.exports.oneOf(["small"]),
  type: o.exports.oneOf(["Bar", "Button"]),
  addClass: o.exports.string
};
var Ma = typeof Pr == "object" && Pr && Pr.Object === Object && Pr, Fa = Ma, ja = Fa, La = typeof self == "object" && self && self.Object === Object && self, Ba = ja || La || Function("return this")(), Ya = Ba, Va = Ya, qa = Va.Symbol, In = qa;
function za(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Wa = za, Ua = Array.isArray, Ga = Ua, vo = In, ni = Object.prototype, Ha = ni.hasOwnProperty, Ka = ni.toString, rr = vo ? vo.toStringTag : void 0;
function Xa(e) {
  var t = Ha.call(e, rr), r = e[rr];
  try {
    e[rr] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ka.call(e);
  return n && (t ? e[rr] = r : delete e[rr]), i;
}
var Ja = Xa, Za = Object.prototype, Qa = Za.toString;
function es(e) {
  return Qa.call(e);
}
var ts = es, ho = In, rs = Ja, ns = ts, os = "[object Null]", is = "[object Undefined]", mo = ho ? ho.toStringTag : void 0;
function as(e) {
  return e == null ? e === void 0 ? is : os : mo && mo in Object(e) ? rs(e) : ns(e);
}
var ss = as;
function cs(e) {
  return e != null && typeof e == "object";
}
var ls = cs, us = ss, fs = ls, ds = "[object Symbol]";
function ps(e) {
  return typeof e == "symbol" || fs(e) && us(e) == ds;
}
var vs = ps, go = In, hs = Wa, ms = Ga, gs = vs, bs = 1 / 0, bo = go ? go.prototype : void 0, yo = bo ? bo.toString : void 0;
function oi(e) {
  if (typeof e == "string")
    return e;
  if (ms(e))
    return hs(e, oi) + "";
  if (gs(e))
    return yo ? yo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -bs ? "-0" : t;
}
var ys = oi, _s = ys;
function xs(e) {
  return e == null ? "" : _s(e);
}
var ws = xs, Es = ws, Ts = 0;
function Os(e) {
  var t = ++Ts;
  return Es(e) + t;
}
var pt = Os;
const nr = {
  "c-input": "_c-input_lqmp1_1",
  "c-input__box": "_c-input__box_lqmp1_24",
  "c-input__check": "_c-input__check_lqmp1_38",
  "c-input__icon": "_c-input__icon_lqmp1_38"
}, ii = lt(({
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
}, p) => {
  const [v, b] = H(!1), g = le(() => e || pt(`ui-${r}`), [e, r]), y = Object.freeze({
    right: "done_all",
    wrong: "close",
    normal: r === "checkbox" ? "check" : null
  }), E = ({
    target: R
  }) => {
    if (b(R.checked), !!d) {
      if (R.checked) {
        d({
          id: R.id,
          value: R.value
        });
        return;
      }
      d({
        id: R.id,
        value: ""
      });
    }
  };
  return W(() => (l && b(!!l), () => {
    b(!1);
  }), [l]), /* @__PURE__ */ C("label", {
    htmlFor: g,
    className: `${nr["c-input"]} u-flex ${c != null ? c : ""}`,
    "data-state": i,
    "data-type": r,
    "data-element": u,
    ...f,
    children: [/* @__PURE__ */ C("div", {
      className: nr["c-input__box"],
      children: [/* @__PURE__ */ m("input", {
        id: g,
        ref: p,
        type: r,
        name: t,
        value: a,
        checked: v,
        "data-state": i,
        className: nr["c-input__check"],
        onChange: E,
        ...s && {
          disabled: !0
        }
      }), /* @__PURE__ */ m("div", {
        className: nr["c-input__icon"],
        children: y[i] && /* @__PURE__ */ m(De, {
          name: y[i]
        })
      })]
    }), /* @__PURE__ */ m("span", {
      className: nr["c-input__label"],
      children: n
    })]
  });
});
ii.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  __TYPE: "CheckBox"
};
ii.propTypes = {
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
const Ss = ({
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
  W(() => {
    r && r(i);
  }, [i]);
  const s = xe.map(t, (l) => Ve(l) ? l.props.__TYPE === "CheckBox" ? _e(l, {
    ...l.props,
    onChange: c
  }) : l : null);
  return /* @__PURE__ */ C("fieldset", {
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
Ss.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  legend: o.exports.string,
  onChecked: o.exports.func,
  addClass: o.exports.string
};
const Rs = "_col_wu095_1", Ps = {
  col: Rs
}, $s = lt(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ m("div", {
  ref: r,
  className: `${Ps.col} ${e != null ? e : ""}`,
  ...t
}));
$s.propTypes = {
  addClass: o.exports.string
};
const Ds = {
  "c-content": "_c-content_u325r_1"
}, Cs = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("section", {
  className: `${Ds["c-content"]} animate__animated animate__fadeInDown animate__faster ${t != null ? t : ""}`,
  ...r,
  children: e
});
Cs.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string
};
const qr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ut(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function kn(e) {
  return "nodeType" in e;
}
function ke(e) {
  var t, r;
  return e ? Ut(e) ? e : kn(e) && (t = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? t : window : window;
}
function Mn(e) {
  const {
    Document: t
  } = ke(e);
  return e instanceof t;
}
function gr(e) {
  return Ut(e) ? !1 : e instanceof ke(e).HTMLElement;
}
function Ns(e) {
  return e instanceof ke(e).SVGElement;
}
function Gt(e) {
  return e ? Ut(e) ? e.document : kn(e) ? Mn(e) ? e : gr(e) ? e.ownerDocument : document : document : document;
}
const st = qr ? Go : W;
function zr(e) {
  const t = J(e);
  return st(() => {
    t.current = e;
  }), Ce(function(...r) {
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function As() {
  const e = J(null), t = Ce((n, i) => {
    e.current = setInterval(n, i);
  }, []), r = Ce(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, r];
}
function fr(e, t = [e]) {
  const r = J(e);
  return st(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function br(e, t) {
  const r = J();
  return le(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    [...t]
  );
}
function Ir(e) {
  const t = zr(e), r = J(null), n = Ce(
    (i) => {
      i !== r.current && (t == null || t(i, r.current)), r.current = i;
    },
    []
  );
  return [r, n];
}
function kr(e) {
  const t = J();
  return W(() => {
    t.current = e;
  }, [e]), t.current;
}
let fn = {};
function Wr(e, t) {
  return le(() => {
    if (t)
      return t;
    const r = fn[e] == null ? 0 : fn[e] + 1;
    return fn[e] = r, `${e}-${r}`;
  }, [e, t]);
}
function ai(e) {
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
const Lt = /* @__PURE__ */ ai(1), Mr = /* @__PURE__ */ ai(-1);
function Is(e) {
  return "clientX" in e && "clientY" in e;
}
function Fn(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = ke(e.target);
  return t && e instanceof t;
}
function ks(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = ke(e.target);
  return t && e instanceof t;
}
function Fr(e) {
  if (ks(e)) {
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
  return Is(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Bt = /* @__PURE__ */ Object.freeze({
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
        return [Bt.Translate.toString(e), Bt.Scale.toString(e)].join(" ");
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
}), _o = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Ms(e) {
  return e.matches(_o) ? e : e.querySelector(_o);
}
const Fs = {
  display: "none"
};
function js(e) {
  let {
    id: t,
    value: r
  } = e;
  return /* @__PURE__ */ m("div", {
    id: t,
    style: Fs,
    children: r
  });
}
const Ls = {
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
function Bs(e) {
  let {
    id: t,
    announcement: r
  } = e;
  return /* @__PURE__ */ m("div", {
    id: t,
    style: Ls,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0,
    children: r
  });
}
function Ys() {
  const [e, t] = H("");
  return {
    announce: Ce((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const si = /* @__PURE__ */ Ke(null);
function Vs(e) {
  const t = ge(si);
  W(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function qs() {
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
const zs = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Ws = {
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
function Us(e) {
  let {
    announcements: t = Ws,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = zs
  } = e;
  const {
    announce: a,
    announcement: c
  } = Ys(), s = Wr("DndLiveRegion"), [l, d] = H(!1);
  if (W(() => {
    d(!0);
  }, []), Vs(le(() => ({
    onDragStart(f) {
      let {
        active: p
      } = f;
      a(t.onDragStart({
        active: p
      }));
    },
    onDragMove(f) {
      let {
        active: p,
        over: v
      } = f;
      t.onDragMove && a(t.onDragMove({
        active: p,
        over: v
      }));
    },
    onDragOver(f) {
      let {
        active: p,
        over: v
      } = f;
      a(t.onDragOver({
        active: p,
        over: v
      }));
    },
    onDragEnd(f) {
      let {
        active: p,
        over: v
      } = f;
      a(t.onDragEnd({
        active: p,
        over: v
      }));
    },
    onDragCancel(f) {
      let {
        active: p,
        over: v
      } = f;
      a(t.onDragCancel({
        active: p,
        over: v
      }));
    }
  }), [a, t])), !l)
    return null;
  const u = /* @__PURE__ */ C(rt, {
    children: [/* @__PURE__ */ m(js, {
      id: n,
      value: i.draggable
    }), /* @__PURE__ */ m(Bs, {
      id: s,
      announcement: c
    })]
  });
  return r ? Xo(u, r) : u;
}
var Ee;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Ee || (Ee = {}));
function jr() {
}
function dn(e, t) {
  return le(
    () => ({
      sensor: e,
      options: t != null ? t : {}
    }),
    [e, t]
  );
}
function Gs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return le(
    () => [...t].filter((n) => n != null),
    [...t]
  );
}
const nt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Hs(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Ks(e, t) {
  const r = Fr(e);
  if (!r)
    return "0 0";
  const n = {
    x: (r.x - t.left) / t.width * 100,
    y: (r.y - t.top) / t.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function Xs(e, t) {
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
function Js(e, t) {
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
function xo(e) {
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
function ci(e, t) {
  if (!e || e.length === 0)
    return null;
  const [r] = e;
  return t ? r[t] : r;
}
const Zs = (e) => {
  let {
    collisionRect: t,
    droppableRects: r,
    droppableContainers: n
  } = e;
  const i = xo(t), a = [];
  for (const c of n) {
    const {
      id: s
    } = c, l = r.get(s);
    if (l) {
      const d = xo(l), u = i.reduce((p, v, b) => p + Hs(d[b], v), 0), f = Number((u / 4).toFixed(4));
      a.push({
        id: s,
        data: {
          droppableContainer: c,
          value: f
        }
      });
    }
  }
  return a.sort(Xs);
};
function Qs(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), c = i - n, s = a - r;
  if (n < i && r < a) {
    const l = t.width * t.height, d = e.width * e.height, u = c * s, f = u / (l + d - u);
    return Number(f.toFixed(4));
  }
  return 0;
}
const ec = (e) => {
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
      const l = Qs(s, t);
      l > 0 && i.push({
        id: c,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return i.sort(Js);
};
function tc(e, t, r) {
  return {
    ...e,
    scaleX: t && r ? t.width / r.width : 1,
    scaleY: t && r ? t.height / r.height : 1
  };
}
function li(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : nt;
}
function rc(e) {
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
const nc = /* @__PURE__ */ rc(1);
function ui(e) {
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
function oc(e, t, r) {
  const n = ui(t);
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
const ic = {
  ignoreTransform: !1
};
function yr(e, t) {
  t === void 0 && (t = ic);
  let r = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      getComputedStyle: d
    } = ke(e), {
      transform: u,
      transformOrigin: f
    } = d(e);
    u && (r = oc(r, u, f));
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
function wo(e) {
  return yr(e, {
    ignoreTransform: !0
  });
}
function ac(e) {
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
function sc(e, t) {
  return t === void 0 && (t = ke(e).getComputedStyle(e)), t.position === "fixed";
}
function cc(e, t) {
  t === void 0 && (t = ke(e).getComputedStyle(e));
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const a = t[i];
    return typeof a == "string" ? r.test(a) : !1;
  });
}
function jn(e, t) {
  const r = [];
  function n(i) {
    if (t != null && r.length >= t || !i)
      return r;
    if (Mn(i) && i.scrollingElement != null && !r.includes(i.scrollingElement))
      return r.push(i.scrollingElement), r;
    if (!gr(i) || Ns(i) || r.includes(i))
      return r;
    const {
      getComputedStyle: a
    } = ke(i), c = a(i);
    return i !== e && cc(i, c) && r.push(i), sc(i, c) ? r : n(i.parentNode);
  }
  return e ? n(e) : r;
}
function fi(e) {
  const [t] = jn(e, 1);
  return t != null ? t : null;
}
function pn(e) {
  return !qr || !e ? null : Ut(e) ? e : kn(e) ? Mn(e) || e === Gt(e).scrollingElement ? window : gr(e) ? e : null : null;
}
function di(e) {
  return Ut(e) ? e.scrollX : e.scrollLeft;
}
function pi(e) {
  return Ut(e) ? e.scrollY : e.scrollTop;
}
function On(e) {
  return {
    x: di(e),
    y: pi(e)
  };
}
var Se;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Se || (Se = {}));
function vi(e) {
  return !qr || !e ? !1 : e === document.scrollingElement;
}
function hi(e) {
  const t = {
    x: 0,
    y: 0
  }, r = vi(e) ? {
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
const lc = {
  x: 0.2,
  y: 0.2
};
function uc(e, t, r, n, i) {
  let {
    top: a,
    left: c,
    right: s,
    bottom: l
  } = r;
  n === void 0 && (n = 10), i === void 0 && (i = lc);
  const {
    isTop: d,
    isBottom: u,
    isLeft: f,
    isRight: p
  } = hi(e), v = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !d && a <= t.top + g.height ? (v.y = Se.Backward, b.y = n * Math.abs((t.top + g.height - a) / g.height)) : !u && l >= t.bottom - g.height && (v.y = Se.Forward, b.y = n * Math.abs((t.bottom - g.height - l) / g.height)), !p && s >= t.right - g.width ? (v.x = Se.Forward, b.x = n * Math.abs((t.right - g.width - s) / g.width)) : !f && c <= t.left + g.width && (v.x = Se.Backward, b.x = n * Math.abs((t.left + g.width - c) / g.width)), {
    direction: v,
    speed: b
  };
}
function fc(e) {
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
function mi(e) {
  return e.reduce((t, r) => Lt(t, On(r)), nt);
}
function dc(e) {
  return e.reduce((t, r) => t + di(r), 0);
}
function pc(e) {
  return e.reduce((t, r) => t + pi(r), 0);
}
function gi(e, t) {
  if (t === void 0 && (t = yr), !e)
    return;
  const {
    top: r,
    left: n,
    bottom: i,
    right: a
  } = t(e);
  !fi(e) || (i <= 0 || a <= 0 || r >= window.innerHeight || n >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const vc = [["x", ["left", "right"], dc], ["y", ["top", "bottom"], pc]];
class Ln {
  constructor(t, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = jn(r), i = mi(n);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, c, s] of vc)
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
class ir {
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
function hc(e) {
  const {
    EventTarget: t
  } = ke(e);
  return e instanceof t ? e : Gt(e);
}
function vn(e, t) {
  const r = Math.abs(e.x), n = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(r ** 2 + n ** 2) > t : "x" in t && "y" in t ? r > t.x && n > t.y : "x" in t ? r > t.x : "y" in t ? n > t.y : !1;
}
var Ue;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ue || (Ue = {}));
function Eo(e) {
  e.preventDefault();
}
function mc(e) {
  e.stopPropagation();
}
var oe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(oe || (oe = {}));
const bi = {
  start: [oe.Space, oe.Enter],
  cancel: [oe.Esc],
  end: [oe.Space, oe.Enter]
}, gc = (e, t) => {
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
class Bn {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: r
      }
    } = t;
    this.props = t, this.listeners = new ir(Gt(r)), this.windowListeners = new ir(ke(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ue.Resize, this.handleCancel), this.windowListeners.add(Ue.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ue.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: r
    } = this.props, n = t.node.current;
    n && gi(n), r(nt);
  }
  handleKeyDown(t) {
    if (Fn(t)) {
      const {
        active: r,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: a = bi,
        coordinateGetter: c = gc,
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
      } : nt;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const f = c(t, {
        active: r,
        context: n.current,
        currentCoordinates: u
      });
      if (f) {
        const p = Mr(f, u), v = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = n.current;
        for (const g of b) {
          const y = t.code, {
            isTop: E,
            isRight: R,
            isLeft: $,
            isBottom: D,
            maxScroll: _,
            minScroll: T
          } = hi(g), x = fc(g), w = {
            x: Math.min(y === oe.Right ? x.right - x.width / 2 : x.right, Math.max(y === oe.Right ? x.left : x.left + x.width / 2, f.x)),
            y: Math.min(y === oe.Down ? x.bottom - x.height / 2 : x.bottom, Math.max(y === oe.Down ? x.top : x.top + x.height / 2, f.y))
          }, A = y === oe.Right && !R || y === oe.Left && !$, F = y === oe.Down && !D || y === oe.Up && !E;
          if (A && w.x !== f.x) {
            const M = g.scrollLeft + p.x, X = y === oe.Right && M <= _.x || y === oe.Left && M >= T.x;
            if (X && !p.y) {
              g.scrollTo({
                left: M,
                behavior: s
              });
              return;
            }
            X ? v.x = g.scrollLeft - M : v.x = y === oe.Right ? g.scrollLeft - _.x : g.scrollLeft - T.x, v.x && g.scrollBy({
              left: -v.x,
              behavior: s
            });
            break;
          } else if (F && w.y !== f.y) {
            const M = g.scrollTop + p.y, X = y === oe.Down && M <= _.y || y === oe.Up && M >= T.y;
            if (X && !p.x) {
              g.scrollTo({
                top: M,
                behavior: s
              });
              return;
            }
            X ? v.y = g.scrollTop - M : v.y = y === oe.Down ? g.scrollTop - _.y : g.scrollTop - T.y, v.y && g.scrollBy({
              top: -v.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Lt(Mr(f, this.referenceCoordinates), v));
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
Bn.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, r) => {
    let {
      keyboardCodes: n = bi,
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
function To(e) {
  return Boolean(e && "distance" in e);
}
function Oo(e) {
  return Boolean(e && "delay" in e);
}
class Yn {
  constructor(t, r, n) {
    var i;
    n === void 0 && (n = hc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = r;
    const {
      event: a
    } = t, {
      target: c
    } = a;
    this.props = t, this.events = r, this.document = Gt(c), this.documentListeners = new ir(this.document), this.listeners = new ir(n), this.windowListeners = new ir(ke(c)), this.initialCoordinates = (i = Fr(a)) != null ? i : nt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(Ue.Resize, this.handleCancel), this.windowListeners.add(Ue.DragStart, Eo), this.windowListeners.add(Ue.VisibilityChange, this.handleCancel), this.windowListeners.add(Ue.ContextMenu, Eo), this.documentListeners.add(Ue.Keydown, this.handleKeydown), r) {
      if (To(r))
        return;
      if (Oo(r)) {
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
    t && (this.activated = !0, this.documentListeners.add(Ue.Click, mc, {
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
    const l = (r = Fr(t)) != null ? r : nt, d = Mr(i, l);
    if (!n && s) {
      if (Oo(s))
        return vn(d, s.tolerance) ? this.handleCancel() : void 0;
      if (To(s))
        return s.tolerance != null && vn(d, s.tolerance) ? this.handleCancel() : vn(d, s.distance) ? this.handleStart() : void 0;
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
const bc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class yi extends Yn {
  constructor(t) {
    const {
      event: r
    } = t, n = Gt(r.target);
    super(t, bc, n);
  }
}
yi.activators = [{
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
const yc = {
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
class _i extends Yn {
  constructor(t) {
    super(t, yc, Gt(t.event.target));
  }
}
_i.activators = [{
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
const hn = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class xi extends Yn {
  constructor(t) {
    super(t, hn);
  }
  static setup() {
    return window.addEventListener(hn.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(hn.move.name, t);
    };
    function t() {
    }
  }
}
xi.activators = [{
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
var ar;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(ar || (ar = {}));
var Lr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Lr || (Lr = {}));
function _c(e) {
  let {
    acceleration: t,
    activator: r = ar.Pointer,
    canScroll: n,
    draggingRect: i,
    enabled: a,
    interval: c = 5,
    order: s = Lr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: u,
    delta: f,
    threshold: p
  } = e;
  const v = wc({
    delta: f,
    disabled: !a
  }), [b, g] = As(), y = J({
    x: 0,
    y: 0
  }), E = J({
    x: 0,
    y: 0
  }), R = le(() => {
    switch (r) {
      case ar.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case ar.DraggableRect:
        return i;
    }
  }, [r, i, l]), $ = J(null), D = Ce(() => {
    const T = $.current;
    if (!T)
      return;
    const x = y.current.x * E.current.x, w = y.current.y * E.current.y;
    T.scrollBy(x, w);
  }, []), _ = le(() => s === Lr.TreeOrder ? [...d].reverse() : d, [s, d]);
  W(
    () => {
      if (!a || !d.length || !R) {
        g();
        return;
      }
      for (const T of _) {
        if ((n == null ? void 0 : n(T)) === !1)
          continue;
        const x = d.indexOf(T), w = u[x];
        if (!w)
          continue;
        const {
          direction: A,
          speed: F
        } = uc(T, w, R, t, p);
        for (const M of ["x", "y"])
          v[M][A[M]] || (F[M] = 0, A[M] = 0);
        if (F.x > 0 || F.y > 0) {
          g(), $.current = T, b(D, c), y.current = F, E.current = A;
          return;
        }
      }
      y.current = {
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
      JSON.stringify(R),
      JSON.stringify(v),
      b,
      d,
      _,
      u,
      JSON.stringify(p)
    ]
  );
}
const xc = {
  x: {
    [Se.Backward]: !1,
    [Se.Forward]: !1
  },
  y: {
    [Se.Backward]: !1,
    [Se.Forward]: !1
  }
};
function wc(e) {
  let {
    delta: t,
    disabled: r
  } = e;
  const n = kr(t);
  return br((i) => {
    if (r || !n || !i)
      return xc;
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
function Ec(e, t) {
  const r = t !== null ? e.get(t) : void 0, n = r ? r.node.current : null;
  return br((i) => {
    var a;
    return t === null ? null : (a = n != null ? n : i) != null ? a : null;
  }, [n, t]);
}
function Tc(e, t) {
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
const So = /* @__PURE__ */ new Map();
function Oc(e, t) {
  let {
    dragging: r,
    dependencies: n,
    config: i
  } = t;
  const [a, c] = H(null), s = a != null, {
    frequency: l,
    measure: d,
    strategy: u
  } = i, f = J(e), p = E(), v = fr(p), b = Ce(function(R) {
    R === void 0 && (R = []), !v.current && c(($) => $ ? $.concat(R) : R);
  }, [v]), g = J(null), y = br((R) => {
    if (p && !r)
      return So;
    const $ = a;
    if (!R || R === So || f.current !== e || $ != null) {
      const D = /* @__PURE__ */ new Map();
      for (let _ of e) {
        if (!_)
          continue;
        if ($ && $.length > 0 && !$.includes(_.id) && _.rect.current) {
          D.set(_.id, _.rect.current);
          continue;
        }
        const T = _.node.current, x = T ? new Ln(d(T), T) : null;
        _.rect.current = x, x && D.set(_.id, x);
      }
      return D;
    }
    return R;
  }, [e, a, r, p, d]);
  return W(() => {
    f.current = e;
  }, [e]), W(
    () => {
      p || requestAnimationFrame(() => b());
    },
    [r, p]
  ), W(() => {
    s && c(null);
  }, [s]), W(
    () => {
      p || typeof l != "number" || g.current !== null || (g.current = setTimeout(() => {
        b(), g.current = null;
      }, l));
    },
    [l, p, b, ...n]
  ), {
    droppableRects: y,
    measureDroppableContainers: b,
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
function Vn(e, t) {
  return br((r) => e ? r || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Sc(e, t) {
  return Vn(e, t);
}
function Rc(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = zr(t), i = le(() => {
    if (r || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(n);
  }, [n, r]);
  return W(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function Ur(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = zr(t), i = le(
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
  return W(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function Pc(e) {
  return new Ln(yr(e), e);
}
function Ro(e, t, r) {
  t === void 0 && (t = Pc);
  const [n, i] = Cn(s, null), a = Rc({
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
  }), c = Ur({
    callback: i
  });
  return st(() => {
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
function $c(e) {
  const t = Vn(e);
  return li(e, t);
}
const Po = [];
function Dc(e) {
  const t = J(e), r = br((n) => e ? n && n !== Po && e && t.current && e.parentNode === t.current.parentNode ? n : jn(e) : Po, [e]);
  return W(() => {
    t.current = e;
  }, [e]), r;
}
function Cc(e) {
  const [t, r] = H(null), n = J(e), i = Ce((a) => {
    const c = pn(a.target);
    !c || r((s) => s ? (s.set(c, On(c)), new Map(s)) : null);
  }, []);
  return W(() => {
    const a = n.current;
    if (e !== a) {
      c(a);
      const s = e.map((l) => {
        const d = pn(l);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, On(d)]) : null;
      }).filter((l) => l != null);
      r(s.length ? new Map(s) : null), n.current = e;
    }
    return () => {
      c(e), c(a);
    };
    function c(s) {
      s.forEach((l) => {
        const d = pn(l);
        d == null || d.removeEventListener("scroll", i);
      });
    }
  }, [i, e]), le(() => e.length ? t ? Array.from(t.values()).reduce((a, c) => Lt(a, c), nt) : mi(e) : nt, [e, t]);
}
function $o(e, t) {
  t === void 0 && (t = []);
  const r = J(null);
  return W(
    () => {
      r.current = null;
    },
    t
  ), W(() => {
    const n = e !== nt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? Mr(e, r.current) : nt;
}
function Nc(e) {
  W(
    () => {
      if (!qr)
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
function Ac(e, t) {
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
function wi(e) {
  return le(() => e ? ac(e) : null, [e]);
}
const mn = [];
function Ic(e, t) {
  t === void 0 && (t = yr);
  const [r] = e, n = wi(r ? ke(r) : null), [i, a] = Cn(s, mn), c = Ur({
    callback: a
  });
  return e.length > 0 && i === mn && a(), st(() => {
    e.length ? e.forEach((l) => c == null ? void 0 : c.observe(l)) : (c == null || c.disconnect(), a());
  }, [e]), i;
  function s() {
    return e.length ? e.map((l) => vi(l) ? n : new Ln(t(l), l)) : mn;
  }
}
function Ei(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return gr(t) ? t : e;
}
function kc(e) {
  let {
    measure: t
  } = e;
  const [r, n] = H(null), i = Ce((d) => {
    for (const {
      target: u
    } of d)
      if (gr(u)) {
        n((f) => {
          const p = t(u);
          return f ? {
            ...f,
            width: p.width,
            height: p.height
          } : p;
        });
        break;
      }
  }, [t]), a = Ur({
    callback: i
  }), c = Ce((d) => {
    const u = Ei(d);
    a == null || a.disconnect(), u && (a == null || a.observe(u)), n(u ? t(u) : null);
  }, [t, a]), [s, l] = Ir(c);
  return le(() => ({
    nodeRef: s,
    rect: r,
    setRef: l
  }), [r, s, l]);
}
const Mc = [{
  sensor: yi,
  options: {}
}, {
  sensor: Bn,
  options: {}
}], Fc = {
  current: {}
}, Dr = {
  draggable: {
    measure: wo
  },
  droppable: {
    measure: wo,
    strategy: dr.WhileDragging,
    frequency: Rn.Optimized
  },
  dragOverlay: {
    measure: yr
  }
};
class sr extends Map {
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
const jc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new sr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: jr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Dr,
  measureDroppableContainers: jr,
  windowRect: null,
  measuringScheduled: !1
}, Ti = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: jr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: jr
}, _r = /* @__PURE__ */ Ke(Ti), Oi = /* @__PURE__ */ Ke(jc);
function Lc() {
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
      containers: new sr()
    }
  };
}
function Bc(e, t) {
  switch (t.type) {
    case Ee.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Ee.DragMove:
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
    case Ee.DragEnd:
    case Ee.DragCancel:
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
    case Ee.RegisterDroppable: {
      const {
        element: r
      } = t, {
        id: n
      } = r, i = new sr(e.droppable.containers);
      return i.set(n, r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case Ee.SetDroppableDisabled: {
      const {
        id: r,
        key: n,
        disabled: i
      } = t, a = e.droppable.containers.get(r);
      if (!a || n !== a.key)
        return e;
      const c = new sr(e.droppable.containers);
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
    case Ee.UnregisterDroppable: {
      const {
        id: r,
        key: n
      } = t, i = e.droppable.containers.get(r);
      if (!i || n !== i.key)
        return e;
      const a = new sr(e.droppable.containers);
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
function Yc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: i
  } = ge(_r), a = kr(n), c = kr(r == null ? void 0 : r.id);
  return W(() => {
    if (!t && !n && a && c != null) {
      if (!Fn(a) || document.activeElement === a.target)
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
          const f = Ms(u);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [n, t, i, c, a]), null;
}
function Si(e, t) {
  let {
    transform: r,
    ...n
  } = t;
  return e != null && e.length ? e.reduce((i, a) => a({
    transform: i,
    ...n
  }), r) : r;
}
function Vc(e) {
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
function qc(e) {
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
  st(() => {
    if (!c && !s || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !n)
      return;
    const d = t == null ? void 0 : t.node.current;
    if (!d || d.isConnected === !1)
      return;
    const u = r(d), f = li(u, n);
    if (c || (f.x = 0), s || (f.y = 0), a.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const p = fi(d);
      p && p.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, c, s, n, r]);
}
const Gr = /* @__PURE__ */ Ke({
  ...nt,
  scaleX: 1,
  scaleY: 1
});
var gt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(gt || (gt = {}));
const zc = /* @__PURE__ */ Ho(function(t) {
  var r, n, i, a;
  let {
    id: c,
    accessibility: s,
    autoScroll: l = !0,
    children: d,
    sensors: u = Mc,
    collisionDetection: f = ec,
    measuring: p,
    modifiers: v,
    ...b
  } = t;
  const g = Cn(Bc, void 0, Lc), [y, E] = g, [R, $] = qs(), [D, _] = H(gt.Uninitialized), T = D === gt.Initialized, {
    draggable: {
      active: x,
      nodes: w,
      translate: A
    },
    droppable: {
      containers: F
    }
  } = y, M = x ? w.get(x) : null, X = J({
    initial: null,
    translated: null
  }), U = le(() => {
    var ve;
    return x != null ? {
      id: x,
      data: (ve = M == null ? void 0 : M.data) != null ? ve : Fc,
      rect: X
    } : null;
  }, [x, M]), re = J(null), [de, ie] = H(null), [ee, we] = H(null), he = fr(b, Object.values(b)), S = Wr("DndDescribedBy", c), I = le(() => F.getEnabled(), [F]), B = Vc(p), {
    droppableRects: Y,
    measureDroppableContainers: L,
    measuringScheduled: G
  } = Oc(I, {
    dragging: T,
    dependencies: [A.x, A.y],
    config: B.droppable
  }), j = Ec(w, x), q = le(() => ee ? Fr(ee) : null, [ee]), z = Sr(), Z = Sc(j, B.draggable.measure);
  qc({
    activeNode: x ? w.get(x) : null,
    config: z.layoutShiftCompensation,
    initialRect: Z,
    measure: B.draggable.measure
  });
  const V = Ro(j, B.draggable.measure, Z), N = Ro(j ? j.parentElement : null), O = J({
    activatorEvent: null,
    active: null,
    activeNode: j,
    collisionRect: null,
    collisions: null,
    droppableRects: Y,
    draggableNodes: w,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: F,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Q = F.getNodeFor((r = O.current.over) == null ? void 0 : r.id), me = kc({
    measure: B.dragOverlay.measure
  }), Te = (n = me.nodeRef.current) != null ? n : j, $e = T ? (i = me.rect) != null ? i : V : null, it = Boolean(me.nodeRef.current && me.rect), ut = $c(it ? null : V), at = wi(Te ? ke(Te) : null), Oe = Dc(T ? Q != null ? Q : j : null), Je = Ic(Oe), Ze = Si(v, {
    transform: {
      x: A.x - ut.x,
      y: A.y - ut.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ee,
    active: U,
    activeNodeRect: V,
    containerNodeRect: N,
    draggingNodeRect: $e,
    over: O.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Oe,
    scrollableAncestorRects: Je,
    windowRect: at
  }), _t = q ? Lt(q, A) : null, vt = Cc(Oe), xt = $o(vt), wt = $o(vt, [V]), Ne = Lt(Ze, xt), Qe = $e ? nc($e, Ze) : null, ht = U && Qe ? f({
    active: U,
    collisionRect: Qe,
    droppableRects: Y,
    droppableContainers: I,
    pointerCoordinates: _t
  }) : null, Xt = ci(ht, "id"), [qe, Er] = H(null), Qr = it ? Ze : Lt(Ze, wt), en = tc(Qr, (a = qe == null ? void 0 : qe.rect) != null ? a : null, V), Tr = Ce(
    (ve, Re) => {
      let {
        sensor: Pe,
        options: et
      } = Re;
      if (re.current == null)
        return;
      const Me = w.get(re.current);
      if (!Me)
        return;
      const Fe = ve.nativeEvent, ze = new Pe({
        active: re.current,
        activeNode: Me,
        event: Fe,
        options: et,
        context: O,
        onStart(je) {
          const Et = re.current;
          if (Et == null)
            return;
          const Tt = w.get(Et);
          if (!Tt)
            return;
          const {
            onDragStart: Ot
          } = he.current, At = {
            active: {
              id: Et,
              data: Tt.data,
              rect: X
            }
          };
          Zt(() => {
            Ot == null || Ot(At), _(gt.Initializing), E({
              type: Ee.DragStart,
              initialCoordinates: je,
              active: Et
            }), R({
              type: "onDragStart",
              event: At
            });
          });
        },
        onMove(je) {
          E({
            type: Ee.DragMove,
            coordinates: je
          });
        },
        onEnd: ft(Ee.DragEnd),
        onCancel: ft(Ee.DragCancel)
      });
      Zt(() => {
        ie(ze), we(ve.nativeEvent);
      });
      function ft(je) {
        return async function() {
          const {
            active: Tt,
            collisions: Ot,
            over: At,
            scrollAdjustedTranslate: Rr
          } = O.current;
          let St = null;
          if (Tt && Rr) {
            const {
              cancelDrop: Rt
            } = he.current;
            St = {
              activatorEvent: Fe,
              active: Tt,
              collisions: Ot,
              delta: Rr,
              over: At
            }, je === Ee.DragEnd && typeof Rt == "function" && await Promise.resolve(Rt(St)) && (je = Ee.DragCancel);
          }
          re.current = null, Zt(() => {
            E({
              type: je
            }), _(gt.Uninitialized), Er(null), ie(null), we(null);
            const Rt = je === Ee.DragEnd ? "onDragEnd" : "onDragCancel";
            if (St) {
              const h = he.current[Rt];
              h == null || h(St), R({
                type: Rt,
                event: St
              });
            }
          });
        };
      }
    },
    [w]
  ), tn = Ce((ve, Re) => (Pe, et) => {
    const Me = Pe.nativeEvent, Fe = w.get(et);
    if (re.current !== null || !Fe || Me.dndKit || Me.defaultPrevented)
      return;
    const ze = {
      active: Fe
    };
    ve(Pe, Re.options, ze) === !0 && (Me.dndKit = {
      capturedBy: Re.sensor
    }, re.current = et, Tr(Pe, Re));
  }, [w, Tr]), Or = Tc(u, tn);
  Nc(u), st(() => {
    V && D === gt.Initializing && _(gt.Initialized);
  }, [V, D]), W(
    () => {
      const {
        onDragMove: ve
      } = he.current, {
        active: Re,
        activatorEvent: Pe,
        collisions: et,
        over: Me
      } = O.current;
      if (!Re || !Pe)
        return;
      const Fe = {
        active: Re,
        activatorEvent: Pe,
        collisions: et,
        delta: {
          x: Ne.x,
          y: Ne.y
        },
        over: Me
      };
      Zt(() => {
        ve == null || ve(Fe), R({
          type: "onDragMove",
          event: Fe
        });
      });
    },
    [Ne.x, Ne.y]
  ), W(
    () => {
      const {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        droppableContainers: et,
        scrollAdjustedTranslate: Me
      } = O.current;
      if (!ve || re.current == null || !Re || !Me)
        return;
      const {
        onDragOver: Fe
      } = he.current, ze = et.get(Xt), ft = ze && ze.rect.current ? {
        id: ze.id,
        rect: ze.rect.current,
        data: ze.data,
        disabled: ze.disabled
      } : null, je = {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        delta: {
          x: Me.x,
          y: Me.y
        },
        over: ft
      };
      Zt(() => {
        Er(ft), Fe == null || Fe(je), R({
          type: "onDragOver",
          event: je
        });
      });
    },
    [Xt]
  ), st(() => {
    O.current = {
      activatorEvent: ee,
      active: U,
      activeNode: j,
      collisionRect: Qe,
      collisions: ht,
      droppableRects: Y,
      draggableNodes: w,
      draggingNode: Te,
      draggingNodeRect: $e,
      droppableContainers: F,
      over: qe,
      scrollableAncestors: Oe,
      scrollAdjustedTranslate: Ne
    }, X.current = {
      initial: $e,
      translated: Qe
    };
  }, [U, j, ht, Qe, w, Te, $e, Y, F, qe, Oe, Ne]), _c({
    ...z,
    delta: A,
    draggingRect: Qe,
    pointerCoordinates: _t,
    scrollableAncestors: Oe,
    scrollableAncestorRects: Je
  });
  const rn = le(() => ({
    active: U,
    activeNode: j,
    activeNodeRect: V,
    activatorEvent: ee,
    collisions: ht,
    containerNodeRect: N,
    dragOverlay: me,
    draggableNodes: w,
    droppableContainers: F,
    droppableRects: Y,
    over: qe,
    measureDroppableContainers: L,
    scrollableAncestors: Oe,
    scrollableAncestorRects: Je,
    measuringConfiguration: B,
    measuringScheduled: G,
    windowRect: at
  }), [U, j, V, ee, ht, N, me, w, F, Y, qe, L, Oe, Je, B, G, at]), Jt = le(() => ({
    activatorEvent: ee,
    activators: Or,
    active: U,
    activeNodeRect: V,
    ariaDescribedById: {
      draggable: S
    },
    dispatch: E,
    draggableNodes: w,
    over: qe,
    measureDroppableContainers: L
  }), [ee, Or, U, V, E, S, w, qe, L]);
  return /* @__PURE__ */ C(si.Provider, {
    value: $,
    children: [/* @__PURE__ */ C(_r.Provider, {
      value: Jt,
      children: [/* @__PURE__ */ m(Oi.Provider, {
        value: rn,
        children: /* @__PURE__ */ m(Gr.Provider, {
          value: en,
          children: d
        })
      }), /* @__PURE__ */ m(Yc, {
        disabled: (s == null ? void 0 : s.restoreFocus) === !1
      })]
    }), /* @__PURE__ */ m(Us, {
      ...s,
      hiddenTextDescribedById: S
    })]
  });
  function Sr() {
    const ve = (de == null ? void 0 : de.autoScrollEnabled) === !1, Re = typeof l == "object" ? l.enabled === !1 : l === !1, Pe = T && !ve && !Re;
    return typeof l == "object" ? {
      ...l,
      enabled: Pe
    } : {
      enabled: Pe
    };
  }
}), Wc = /* @__PURE__ */ Ke(null), Do = "button", Uc = "Droppable";
function Gc(e) {
  let {
    id: t,
    data: r,
    disabled: n = !1,
    attributes: i
  } = e;
  const a = Wr(Uc), {
    activators: c,
    activatorEvent: s,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: u,
    draggableNodes: f,
    over: p
  } = ge(_r), {
    role: v = Do,
    roleDescription: b = "draggable",
    tabIndex: g = 0
  } = i != null ? i : {}, y = (l == null ? void 0 : l.id) === t, E = ge(y ? Gr : Wc), [R, $] = Ir(), [D, _] = Ir(), T = Ac(c, t), x = fr(r);
  st(
    () => (f.set(t, {
      id: t,
      key: a,
      node: R,
      activatorNode: D,
      data: x
    }), () => {
      const A = f.get(t);
      A && A.key === a && f.delete(t);
    }),
    [f, t]
  );
  const w = le(() => ({
    role: v,
    tabIndex: g,
    "aria-disabled": n,
    "aria-pressed": y && v === Do ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": u.draggable
  }), [n, v, g, y, b, u.draggable]);
  return {
    active: l,
    activatorEvent: s,
    activeNodeRect: d,
    attributes: w,
    isDragging: y,
    listeners: n ? void 0 : T,
    node: R,
    over: p,
    setNodeRef: $,
    setActivatorNodeRef: _,
    transform: E
  };
}
function Hc() {
  return ge(Oi);
}
const Kc = "Droppable", Xc = {
  timeout: 25
};
function Ri(e) {
  let {
    data: t,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: i
  } = e;
  const a = Wr(Kc), {
    active: c,
    dispatch: s,
    over: l,
    measureDroppableContainers: d
  } = ge(_r), u = J({
    disabled: r
  }), f = J(!1), p = J(null), v = J(null), {
    disabled: b,
    updateMeasurementsFor: g,
    timeout: y
  } = {
    ...Xc,
    ...i
  }, E = fr(g != null ? g : n), R = Ce(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      v.current != null && clearTimeout(v.current), v.current = setTimeout(() => {
        d(Array.isArray(E.current) ? E.current : [E.current]), v.current = null;
      }, y);
    },
    [y]
  ), $ = Ur({
    callback: R,
    disabled: b || !c
  }), D = Ce((w, A) => {
    !$ || (A && ($.unobserve(A), f.current = !1), w && $.observe(w));
  }, [$]), [_, T] = Ir(D), x = fr(t);
  return W(() => {
    !$ || !_.current || ($.disconnect(), f.current = !1, $.observe(_.current));
  }, [_, $]), st(
    () => (s({
      type: Ee.RegisterDroppable,
      element: {
        id: n,
        key: a,
        disabled: r,
        node: _,
        rect: p,
        data: x
      }
    }), () => s({
      type: Ee.UnregisterDroppable,
      key: a,
      id: n
    })),
    [n]
  ), W(() => {
    r !== u.current.disabled && (s({
      type: Ee.SetDroppableDisabled,
      id: n,
      key: a,
      disabled: r
    }), u.current.disabled = r);
  }, [n, a, r, s]), {
    active: c,
    rect: p,
    isOver: (l == null ? void 0 : l.id) === n,
    node: _,
    over: l,
    setNodeRef: T
  };
}
function Jc(e) {
  let {
    animation: t,
    children: r
  } = e;
  const [n, i] = H(null), [a, c] = H(null), s = kr(r);
  return !r && !n && s && i(s), st(() => {
    if (!a)
      return;
    const l = n == null ? void 0 : n.key, d = n == null ? void 0 : n.props.id;
    if (l == null || d == null) {
      i(null);
      return;
    }
    Promise.resolve(t(d, a)).then(() => {
      i(null);
    });
  }, [t, n, a]), /* @__PURE__ */ C(rt, {
    children: [r, n ? _e(n, {
      ref: c
    }) : null]
  });
}
const Zc = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Qc(e) {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ m(_r.Provider, {
    value: Ti,
    children: /* @__PURE__ */ m(Gr.Provider, {
      value: Zc,
      children: t
    })
  });
}
const el = {
  position: "fixed",
  touchAction: "none"
}, tl = (e) => Fn(e) ? "transform 250ms ease" : void 0, rl = /* @__PURE__ */ lt((e, t) => {
  let {
    as: r,
    activatorEvent: n,
    adjustScale: i,
    children: a,
    className: c,
    rect: s,
    style: l,
    transform: d,
    transition: u = tl
  } = e;
  if (!s)
    return null;
  const f = i ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, p = {
    ...el,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: Bt.Transform.toString(f),
    transformOrigin: i && n ? Ks(n, s) : void 0,
    transition: typeof u == "function" ? u(n) : u,
    ...l
  };
  return Yr.createElement(r, {
    className: c,
    style: p,
    ref: t
  }, a);
}), nl = (e) => (t) => {
  let {
    active: r,
    dragOverlay: n
  } = t;
  const i = {}, {
    styles: a,
    className: c
  } = e;
  if (a != null && a.active)
    for (const [s, l] of Object.entries(a.active))
      l !== void 0 && (i[s] = r.node.style.getPropertyValue(s), r.node.style.setProperty(s, l));
  if (a != null && a.dragOverlay)
    for (const [s, l] of Object.entries(a.dragOverlay))
      l !== void 0 && n.node.style.setProperty(s, l);
  return c != null && c.active && r.node.classList.add(c.active), c != null && c.dragOverlay && n.node.classList.add(c.dragOverlay), function() {
    for (const [l, d] of Object.entries(i))
      r.node.style.setProperty(l, d);
    c != null && c.active && r.node.classList.remove(c.active);
  };
}, ol = (e) => {
  let {
    transform: {
      initial: t,
      final: r
    }
  } = e;
  return [{
    transform: Bt.Transform.toString(t)
  }, {
    transform: Bt.Transform.toString(r)
  }];
}, il = {
  duration: 250,
  easing: "ease",
  keyframes: ol,
  sideEffects: /* @__PURE__ */ nl({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function al(e) {
  let {
    config: t,
    draggableNodes: r,
    droppableContainers: n,
    measuringConfiguration: i
  } = e;
  return zr((a, c) => {
    if (t === null)
      return;
    const s = r.get(a);
    if (!s)
      return;
    const l = s.node.current;
    if (!l)
      return;
    const d = Ei(c);
    if (!d)
      return;
    const {
      transform: u
    } = ke(c).getComputedStyle(c), f = ui(u);
    if (!f)
      return;
    const p = typeof t == "function" ? t : sl(t);
    return gi(l, i.draggable.measure), p({
      active: {
        id: a,
        data: s.data,
        node: l,
        rect: i.draggable.measure(l)
      },
      draggableNodes: r,
      dragOverlay: {
        node: c,
        rect: i.dragOverlay.measure(d)
      },
      droppableContainers: n,
      measuringConfiguration: i,
      transform: f
    });
  });
}
function sl(e) {
  const {
    duration: t,
    easing: r,
    sideEffects: n,
    keyframes: i
  } = {
    ...il,
    ...e
  };
  return (a) => {
    let {
      active: c,
      dragOverlay: s,
      transform: l,
      ...d
    } = a;
    if (!t)
      return;
    const u = {
      x: s.rect.left - c.rect.left,
      y: s.rect.top - c.rect.top
    }, f = {
      scaleX: l.scaleX !== 1 ? c.rect.width * l.scaleX / s.rect.width : 1,
      scaleY: l.scaleY !== 1 ? c.rect.height * l.scaleY / s.rect.height : 1
    }, p = {
      x: l.x - u.x,
      y: l.y - u.y,
      ...f
    }, v = i({
      ...d,
      active: c,
      dragOverlay: s,
      transform: {
        initial: l,
        final: p
      }
    }), [b] = v, g = v[v.length - 1];
    if (JSON.stringify(b) === JSON.stringify(g))
      return;
    const y = n == null ? void 0 : n({
      active: c,
      dragOverlay: s,
      ...d
    }), E = s.node.animate(v, {
      duration: t,
      easing: r,
      fill: "forwards"
    });
    return new Promise((R) => {
      E.onfinish = () => {
        y == null || y(), R();
      };
    });
  };
}
let Co = 0;
function cl(e) {
  return le(() => {
    if (e != null)
      return Co++, Co;
  }, [e]);
}
const ll = /* @__PURE__ */ Yr.memo((e) => {
  let {
    adjustScale: t = !1,
    children: r,
    dropAnimation: n,
    style: i,
    transition: a,
    modifiers: c,
    wrapperElement: s = "div",
    className: l,
    zIndex: d = 999
  } = e;
  const {
    activatorEvent: u,
    active: f,
    activeNodeRect: p,
    containerNodeRect: v,
    draggableNodes: b,
    droppableContainers: g,
    dragOverlay: y,
    over: E,
    measuringConfiguration: R,
    scrollableAncestors: $,
    scrollableAncestorRects: D,
    windowRect: _
  } = Hc(), T = ge(Gr), x = cl(f == null ? void 0 : f.id), w = Si(c, {
    activatorEvent: u,
    active: f,
    activeNodeRect: p,
    containerNodeRect: v,
    draggingNodeRect: y.rect,
    over: E,
    overlayNodeRect: y.rect,
    scrollableAncestors: $,
    scrollableAncestorRects: D,
    transform: T,
    windowRect: _
  }), A = Vn(p), F = al({
    config: n,
    draggableNodes: b,
    droppableContainers: g,
    measuringConfiguration: R
  }), M = A ? y.setRef : void 0;
  return /* @__PURE__ */ m(Qc, {
    children: /* @__PURE__ */ m(Jc, {
      animation: F,
      children: f && x ? /* @__PURE__ */ m(rl, {
        id: f.id,
        ref: M,
        as: s,
        activatorEvent: u,
        adjustScale: t,
        className: l,
        transition: a,
        rect: A,
        style: {
          zIndex: d,
          ...i
        },
        transform: w,
        children: r
      }, x) : null
    })
  });
}), ul = ({
  transform: e
}) => ({
  ...e,
  y: 0
}), fl = ({
  transform: e
}) => ({
  ...e,
  x: 0
}), dl = [oe.Down, oe.Right, oe.Up, oe.Left], pl = (e, { context: { active: t, droppableRects: r, droppableContainers: n, collisionRect: i } }) => {
  var a;
  if (dl.includes(e.code)) {
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
    const l = Zs({
      active: t,
      collisionRect: i,
      droppableRects: r,
      droppableContainers: s,
      pointerCoordinates: null
    }), d = ci(l, "id");
    if (d != null) {
      const u = n.get(d), f = u == null ? void 0 : u.node.current, p = u == null ? void 0 : u.rect.current;
      if (f && p)
        return ((a = u.data.current) == null ? void 0 : a.type) === "container" ? {
          x: p.left,
          y: p.top + c
        } : {
          x: p.left,
          y: p.top
        };
    }
  }
}, vl = "_pop_19oe0_1", hl = "_pulse_19oe0_1", Ht = {
  "c-droppable": "_c-droppable_19oe0_1",
  "c-droppable--active": "_c-droppable--active_19oe0_20",
  "c-draggable": "_c-draggable_19oe0_25",
  "c-draggable--active": "_c-draggable--active_19oe0_54",
  pop: vl,
  pulse: hl
}, Pi = Ke(), Mt = (e, t) => xe.map(e, (r) => {
  var n;
  if (!!Ve(r) && !!r.props) {
    if (((n = r == null ? void 0 : r.props) == null ? void 0 : n.__TYPE) === t)
      return r;
    if (r.props.children)
      return Mt(r.props.children, t);
  }
}), ml = {
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
}, $i = ({
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
  const [d, u] = H([]), [f, p] = H(null), [v, b] = H(() => g());
  function g() {
    return [...Mt(e, "droppable"), ...Mt(e, "general-draggable")].reduce((x, w) => ({
      ...x,
      [w.props.id]: w.props.children ? [...Mt(w.props.children, "draggable").map((A) => A.props.id)] : []
    }), {});
  }
  const y = Object.freeze({
    restrictToVerticalAxis: fl,
    restrictToHorizontalAxis: ul
  }), E = Gs(dn(_i), dn(xi), dn(Bn, {
    coordinateGetter: pl
  })), R = (x, w) => {
    if (Object.keys(v).pop() !== x.id && x.data.current.validate.includes(w))
      return u((F) => [...F.filter((M) => M !== w), w]);
    u((F) => [...F.filter((M) => M !== w)]);
  }, $ = (x) => x in v ? x : Object.keys(v).find((w) => v[w].includes(x)), D = ({
    active: x,
    over: w
  }) => {
    if (!w)
      return;
    p(null), R(w, x.id);
    const A = $(w.id), F = $(x.id);
    if (F !== A) {
      if (t)
        return b((X) => ({
          ...X,
          [F]: X[F].filter((U) => U !== x.id),
          [A]: [...X[A], x.id]
        }));
      const M = Object.keys(v).pop();
      b((X) => ({
        ...X,
        [A]: A === M ? [...X[A], x.id] : [x.id],
        [F]: A === M ? X[F].filter((U) => U !== x.id) : [...X[F].filter((U) => U !== x.id), ...X[A]]
      }));
    }
  }, _ = (x) => xe.map(x, (w) => {
    if (!w.props)
      return w;
    if (w.props.__TYPE !== "draggable")
      return w.props.id in v && v[w.props.id].length > 0 ? _e(w, {
        ...w.props
      }, [...v[w.props.id].map((A) => Mt(e, "draggable").filter((F) => F.props.id === A)).flat()]) : w.props.children ? _e(w, {
        ...w.props,
        children: _(w.props.children)
      }) : w;
  }), T = () => {
    const x = Mt(e, "draggable").filter((w) => w.props.id === f).reduce((w, A) => ({
      ...w,
      ...A.props
    }), {});
    return Ko((x == null ? void 0 : x.element) || "div", {
      className: `${Ht["c-draggable"]} ${x == null ? void 0 : x.addClass}`
    }, [x.children]);
  };
  return W(() => {
    d.length > 0 && r && r(d);
  }, [d, r]), W(() => {
    i && b(() => g());
  }, [i]), /* @__PURE__ */ m(Pi.Provider, {
    value: {
      listId: d,
      propValidate: a,
      validate: n,
      isDragging: f
    },
    children: /* @__PURE__ */ C(zc, {
      sensors: E,
      accessibility: {
        announcements: s
      },
      onDragStart: ({
        active: x
      }) => p(x.id),
      onDragEnd: D,
      ...!!l && {
        onDragMove: l
      },
      onDragCancel: () => p(null),
      ...c && {
        modifiers: [y[c]]
      },
      children: [_(e), /* @__PURE__ */ m(ll, {
        children: T()
      })]
    })
  });
};
$i.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: ml
};
$i.propTypes = {
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
const Di = ({
  children: e,
  id: t,
  addClass: r,
  dragging: n,
  label: i,
  attribute: a,
  disabledDefaultAttributes: c,
  element: s,
  ...l
}) => {
  const d = s || "div", {
    listId: u,
    propValidate: f,
    validate: p,
    isDragging: v
  } = ge(Pi), {
    attributes: b,
    listeners: g,
    setNodeRef: y,
    transform: E
  } = Gc({
    id: t,
    disabled: p,
    data: {
      label: i
    },
    attributes: a
  });
  return /* @__PURE__ */ m(d, {
    id: t,
    ref: y,
    className: `${Ht["c-draggable"]} ${v === t ? n : ""} ${r != null ? r : ""}`,
    style: {
      transform: Bt.Translate.toString(E)
    },
    ...p && {
      [f]: !!u.includes(t)
    },
    ...!c && {
      ...b
    },
    ...g,
    ...l,
    children: e
  });
};
Di.defaultProps = {
  __TYPE: "draggable",
  dragging: Ht["c-draggable--active"],
  disabledDefaultAttributes: !1
};
Di.propTypes = {
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
const Ci = ({
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
  } = Ri({
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
    className: `${Ht["c-droppable"]} ${u && i && i} ${n != null ? n : ""}`,
    ...l,
    children: e
  });
};
Ci.defaultProps = {
  __TYPE: "droppable",
  over: Ht["c-droppable--active"]
};
Ci.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]),
  id: o.exports.string.isRequired,
  validate: o.exports.array.isRequired,
  addClass: o.exports.string,
  over: o.exports.string,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: fe("droppable")
};
const Ni = ({
  children: e,
  addClass: t,
  id: r,
  label: n,
  element: i,
  ...a
}) => {
  const c = i || "div", {
    setNodeRef: s
  } = Ri({
    id: r,
    data: {
      label: n,
      type: "container"
    }
  });
  return /* @__PURE__ */ m(c, {
    id: r,
    ref: s,
    className: `${Ht["c-droppable"]} ${t != null ? t : ""}`,
    ...a,
    children: e
  });
};
Ni.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  id: o.exports.string.isRequired,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: fe("general-draggable")
};
Ni.defaultProps = {
  __TYPE: "general-draggable",
  id: pt("unique-id-general-"),
  label: "contendor inicial"
};
const hf = ({
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
}), No = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, Ai = ({
  url: e,
  alt: t,
  title: r,
  width: n,
  addClass: i,
  noCaption: a,
  ...c
}) => {
  const [s, l] = H(!1), d = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, u = (p) => l(p), f = s ? d : `${e}`;
  return /* @__PURE__ */ C("figure", {
    className: `${No["c-image"]} ${i != null ? i : ""}`,
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
      className: No["c-image__figcaption"],
      children: /* @__PURE__ */ C("p", {
        children: [/* @__PURE__ */ C("strong", {
          children: [r, "\xA0"]
        }), t]
      })
    })]
  });
};
Ai.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
Ai.propTypes = {
  url: o.exports.string,
  alt: o.exports.string,
  title: o.exports.string,
  width: o.exports.string,
  addClass: o.exports.string,
  noCaption: o.exports.bool
};
const pr = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, Ii = lt(({
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
  const [p, v] = H(r || ""), b = le(() => e || pt("c-input-"), [e]), g = ({
    target: y
  }) => {
    u && u({
      id: b,
      value: y.value
    }), v(y.value);
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ C("label", {
    htmlFor: b,
    className: `${pr["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ m("input", {
      id: b,
      ref: f,
      type: t,
      name: b,
      value: p,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: g,
      className: pr["c-input"],
      ...d && {
        readOnly: d,
        "aria-readonly": d
      }
    })]
  }) : null;
});
Ii.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Ii.propTypes = {
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
const gl = ({
  children: e,
  onAllValue: t
}) => {
  const [r, n] = H([]), i = (s) => n([...r.filter((l) => l.id !== s.id), {
    ...s
  }]);
  W(() => {
    t && t(r);
  }, [r, t]);
  const a = (s, l, d) => xe.toArray(s).map((u) => u.props.__TYPE === l ? _e(u, {
    ...u.props,
    ...d
  }) : u);
  return xe.map(e, (s) => {
    var l, d;
    return Ve(s) ? ((l = s == null ? void 0 : s.props) == null ? void 0 : l.__TYPE) === "InputStyle" ? _e(s, {
      ...s.props,
      children: a(s.props.children, "Input", {
        onValue: i
      })
    }) : ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "Input" ? _e(s, {
      ...s.props,
      onValue: i
    }) : s : null;
  });
};
gl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllValue: o.exports.func
};
const ki = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${pr["c-input__wrapper-style"]} ${t != null ? t : ""}`,
  children: Ie(e, ["InputLeftAddon", "InputRightAddon", "Input"])
});
ki.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: fe("InputStyle")
};
ki.defaultProps = {
  __TYPE: "InputStyle"
};
const Mi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${pr["c-input__left-addon"]} ${t != null ? t : ""}`,
  children: e
});
Mi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: fe("InputLeftAddon")
};
Mi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const Fi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${pr["c-input__right-addon"]} ${t != null ? t : ""}`,
  children: e
});
Fi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: fe("InputRightAddon")
};
Fi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const bl = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, yl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("kbd", {
  className: `${bl["c-kbd"]} ${t != null ? t : ""}`,
  ...r,
  children: e
});
yl.propTypes = {
  children: o.exports.string,
  addClass: o.exports.string
};
const ji = ({
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
ji.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
ji.propTypes = {
  children: o.exports.oneOfType([o.exports.string, o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  link: o.exports.string,
  isExternal: o.exports.bool,
  label: o.exports.string.isRequired
};
const Li = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, _l = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("ul", {
  className: `${Li["c-List"]} ${t != null ? t : ""}`,
  ...r,
  children: Ie(e, ["ListItem"])
});
_l.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const Bi = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = xe.map(e, (a) => {
    var c;
    return ((c = a == null ? void 0 : a.props) == null ? void 0 : c.__TYPE) === "Icon" ? _e(a, {
      ...a.props,
      addClass: Li["c-list-item__icon"]
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
Bi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  __TYPE: fe("ListItem")
};
Bi.defaultProps = {
  __TYPE: "ListItem"
};
const xl = ({
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
xl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const wl = ({
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
wl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
var gn = function() {
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
function bn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, r = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), n = function() {
    function d(u, f) {
      bn(this, d), this._inertManager = f, this._rootElement = u, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return gn(d, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(f) {
          this._unmanageNode(f.node);
        }, this), this._observer = null, this._rootElement = null, this._managedNodes = null, this._inertManager = null;
      }
    }, {
      key: "_makeSubtreeUnfocusable",
      value: function(f) {
        var p = this;
        c(f, function(y) {
          return p._visitNode(y);
        });
        var v = document.activeElement;
        if (!document.body.contains(f)) {
          for (var b = f, g = void 0; b; ) {
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              g = b;
              break;
            }
            b = b.parentNode;
          }
          g && (v = g.activeElement);
        }
        f.contains(v) && (v.blur(), v === document.activeElement && document.body.focus());
      }
    }, {
      key: "_visitNode",
      value: function(f) {
        if (f.nodeType === Node.ELEMENT_NODE) {
          var p = f;
          p !== this._rootElement && p.hasAttribute("inert") && this._adoptInertRoot(p), (t.call(p, r) || p.hasAttribute("tabindex")) && this._manageNode(p);
        }
      }
    }, {
      key: "_manageNode",
      value: function(f) {
        var p = this._inertManager.register(f, this);
        this._managedNodes.add(p);
      }
    }, {
      key: "_unmanageNode",
      value: function(f) {
        var p = this._inertManager.deregister(f, this);
        p && this._managedNodes.delete(p);
      }
    }, {
      key: "_unmanageSubtree",
      value: function(f) {
        var p = this;
        c(f, function(v) {
          return p._unmanageNode(v);
        });
      }
    }, {
      key: "_adoptInertRoot",
      value: function(f) {
        var p = this._inertManager.getInertRoot(f);
        p || (this._inertManager.setInert(f, !0), p = this._inertManager.getInertRoot(f)), p.managedNodes.forEach(function(v) {
          this._manageNode(v.node);
        }, this);
      }
    }, {
      key: "_onMutation",
      value: function(f, p) {
        f.forEach(function(v) {
          var b = v.target;
          if (v.type === "childList")
            e.call(v.addedNodes).forEach(function(y) {
              this._makeSubtreeUnfocusable(y);
            }, this), e.call(v.removedNodes).forEach(function(y) {
              this._unmanageSubtree(y);
            }, this);
          else if (v.type === "attributes") {
            if (v.attributeName === "tabindex")
              this._manageNode(b);
            else if (b !== this._rootElement && v.attributeName === "inert" && b.hasAttribute("inert")) {
              this._adoptInertRoot(b);
              var g = this._inertManager.getInertRoot(b);
              this._managedNodes.forEach(function(y) {
                b.contains(y.node) && g._manageNode(y.node);
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
      bn(this, d), this._node = u, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([f]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return gn(d, [{
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
      if (bn(this, d), !u)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = u, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(u.head || u.body || u.documentElement), u.readyState === "loading" ? u.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return gn(d, [{
      key: "setInert",
      value: function(f, p) {
        if (p) {
          if (this._inertRoots.has(f))
            return;
          var v = new n(f, this);
          if (f.setAttribute("inert", ""), this._inertRoots.set(f, v), !this._document.body.contains(f))
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
      value: function(f, p) {
        var v = this._managedNodes.get(f);
        return v !== void 0 ? v.addInertRoot(p) : v = new i(f, p), this._managedNodes.set(f, v), v;
      }
    }, {
      key: "deregister",
      value: function(f, p) {
        var v = this._managedNodes.get(f);
        return v ? (v.removeInertRoot(p), v.destroyed && this._managedNodes.delete(f), v) : null;
      }
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var f = e.call(this._document.querySelectorAll("[inert]"));
        f.forEach(function(p) {
          this.setInert(p, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
    }, {
      key: "_watchForInert",
      value: function(f, p) {
        var v = this;
        f.forEach(function(b) {
          switch (b.type) {
            case "childList":
              e.call(b.addedNodes).forEach(function(E) {
                if (E.nodeType === Node.ELEMENT_NODE) {
                  var R = e.call(E.querySelectorAll("[inert]"));
                  t.call(E, "[inert]") && R.unshift(E), R.forEach(function($) {
                    this.setInert($, !0);
                  }, v);
                }
              }, v);
              break;
            case "attributes":
              if (b.attributeName !== "inert")
                return;
              var g = b.target, y = g.hasAttribute("inert");
              v.setInert(g, y);
              break;
          }
        }, this);
      }
    }]), d;
  }();
  function c(d, u, f) {
    if (d.nodeType == Node.ELEMENT_NODE) {
      var p = d;
      u && u(p);
      var v = p.shadowRoot;
      if (v) {
        c(v, u);
        return;
      }
      if (p.localName == "content") {
        for (var b = p, g = b.getDistributedNodes ? b.getDistributedNodes() : [], y = 0; y < g.length; y++)
          c(g[y], u);
        return;
      }
      if (p.localName == "slot") {
        for (var E = p, R = E.assignedNodes ? E.assignedNodes({ flatten: !0 }) : [], $ = 0; $ < R.length; $++)
          c(R[$], u);
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
const qn = Ke(), El = Object.freeze({
  ESC: 27
}), Yi = ({
  children: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n
}) => {
  const i = J(), a = (d) => {
    const u = document.querySelector("#root");
    u.inert = d;
  }, c = (d) => {
    (d.keyCode || d.which) === El.ESC && l();
  }, s = (d, u) => {
    i.current.classList.replace(d, u);
  }, l = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), a(!1), r(!t);
    }, 400), n && n.current.focus();
  };
  return W(() => {
    t && (a(!0), i.current && i.current.focus());
  }, [t]), /* @__PURE__ */ m(qn.Provider, {
    value: {
      isOpen: t,
      onKeyDown: c,
      onCloseModal: l,
      refModal: i
    },
    children: /* @__PURE__ */ m(Kt, {
      id: "js-modal",
      children: Ie(e, ["ModalContent", "ModalOverlay"])
    })
  });
};
Yi.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Yi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  isOpen: o.exports.bool.isRequired,
  onClose: o.exports.func.isRequired,
  label: o.exports.string.isRequired,
  finalFocusRef: o.exports.object
};
const Cr = {
  "c-layout": "_c-layout_1n02n_1",
  "c-modal": "_c-modal_1n02n_1",
  "c-modal-container": "_c-modal-container_1n02n_33",
  "c-close-button": "_c-close-button_1n02n_38"
}, Vi = ({
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
  } = ge(qn), f = (v) => {
    n && typeof n == "function" && n(v), d();
  };
  return /* @__PURE__ */ C("div", {
    ref: u,
    role: "dialog",
    tabIndex: "-1",
    hidden: !s,
    "aria-label": e,
    "aria-modal": "true",
    "data-type": a,
    onKeyDown: (v) => {
      i && typeof i == "function" && i(v), l(v);
    },
    className: `${Cr["c-modal"]} animate__animated animate__fadeIn animate__faster u-px-3 u-py-3 ${t != null ? t : ""}`,
    ...c,
    children: [/* @__PURE__ */ m("div", {
      className: `${Cr["c-modal-container"]}`,
      children: r
    }), /* @__PURE__ */ m(Dt, {
      addClass: Cr["c-close-button"],
      label: "Cerrar modal",
      hasAriaLabel: !0,
      icon: {
        name: "close"
      },
      onClick: f
    })]
  });
};
Vi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  label: o.exports.string.isRequired,
  onClick: o.exports.func,
  onKeyDown: o.exports.func,
  __TYPE: fe("ModalContent")
};
Vi.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const qi = ({
  addClass: e,
  onClick: t
}) => {
  const {
    isOpen: r,
    onCloseModal: n
  } = ge(qn), i = (a) => {
    t && typeof t == "function" && t(a), n();
  };
  return /* @__PURE__ */ m("div", {
    className: `${Cr["c-layout"]} ${e != null ? e : ""}`,
    onClick: i,
    hidden: !r
  });
};
qi.propTypes = {
  addClass: o.exports.string,
  onClick: o.exports.func,
  __TYPE: fe("ModalOverlay")
};
qi.defaultProps = {
  __TYPE: "ModalOverlay"
};
const Yt = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, Hr = Ke(), zi = ({
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
  }, p = (b) => d(b), v = (b) => r && l === b;
  return W(() => {
    s && s(l);
  }, [l, s]), /* @__PURE__ */ m(Hr.Provider, {
    value: {
      counter: l,
      min: i || Number.MIN_SAFE_INTEGER,
      max: a || Number.MAX_SAFE_INTEGER,
      validate: v,
      onChangeValue: p,
      onIncrementValue: u,
      onDecrementValue: f
    },
    children: /* @__PURE__ */ m("div", {
      className: `${Yt["c-number-input"]} ${t != null ? t : ""}`,
      children: Ie(e, ["NumberInputField", "NumberInputStepper"])
    })
  });
};
zi.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  addClass: o.exports.string,
  max: o.exports.number,
  min: o.exports.number,
  defaultValue: o.exports.number,
  step: o.exports.number,
  onValue: o.exports.func,
  keepWithinRange: o.exports.bool
};
zi.defaultProps = {
  step: 1
};
const Wi = lt(({
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
    max: p
  } = ge(Hr), v = le(() => e || pt("c-number-input-"), [e]), b = Object.freeze({
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
  }, y = (E) => {
    switch (E.keyCode || E.which) {
      case b.UP:
        d();
        break;
      case b.DOWN:
        u();
        break;
      case b.END:
        l(p);
        break;
      case b.HOME:
        l(f);
        break;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: v,
    className: `${Yt["c-number-input__label"]} ${i != null ? i : ""}`,
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
      className: Yt["c-number-input__input"],
      onChange: g,
      onKeyDown: y,
      ...s || s === 0 ? {
        value: s,
        "aria-valuemax": p,
        "aria-valuemin": f,
        "aria-valuenow": s,
        "aria-valuetext": `${s}`
      } : {
        value: ""
      }
    })]
  });
});
Wi.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Wi.propTypes = {
  id: o.exports.string,
  name: o.exports.string,
  label: o.exports.string,
  pattern: o.exports.string,
  addClass: o.exports.string,
  isLabelVisible: o.exports.bool,
  __TYPE: fe("NumberInputField")
};
const Ui = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${Yt["c-number-input__stepper"]} ${t != null ? t : ""}`,
  children: Ie(e, ["NumberIncrementStepper", "NumberDecrementStepper"])
});
Ui.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: fe("NumberInputStepper")
};
Ui.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Gi = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onDecrementValue: n,
    validate: i,
    min: a
  } = ge(Hr);
  return /* @__PURE__ */ m("button", {
    tabIndex: -1,
    onClick: n,
    disabled: i(a),
    "aria-label": `${r != null ? r : "Decrementar valor"}`,
    className: `${Yt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ m(De, {
      name: "arrow_drop_down"
    })
  });
};
Gi.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: fe("NumberDecrementStepper"),
  label: o.exports.string
};
Gi.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Hi = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onIncrementValue: n,
    validate: i,
    max: a
  } = ge(Hr);
  return /* @__PURE__ */ m("button", {
    tabIndex: -1,
    onClick: n,
    disabled: i(a),
    "aria-label": `${r != null ? r : "Incrementar valor"}`,
    className: `${Yt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ m(De, {
      name: "arrow_drop_up"
    })
  });
};
Hi.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: fe("NumberIncrementStepper"),
  label: o.exports.string
};
Hi.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const Tl = (e) => {
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
  } = e, [p, v] = H(n), b = (x, w) => {
    v(w), s && s(x, w);
  }, g = (x, w) => {
    const A = w - x + 1;
    return Array.from({ length: A }, (F, M) => x + M);
  }, y = g(1, Math.min(t, r)), E = g(Math.max(r - t + 1, t + 1), r), R = Math.max(
    Math.min(
      p - u,
      r - t - u * 2 - 1
    ),
    t + 2
  ), $ = Math.min(
    Math.max(
      p + u,
      t + u * 2 + 2
    ),
    E.length > 0 ? E[0] - 2 : r - 1
  ), D = [
    ...l ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...y,
    ...R > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : [],
    ...g(R, $),
    ...$ < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : [],
    ...E,
    ...a ? [] : ["next"],
    ...d ? ["last"] : []
  ], _ = (x) => {
    switch (x) {
      case "first":
        return 1;
      case "previous":
        return p - 1;
      case "next":
        return p + 1;
      case "last":
        return r;
      default:
        return null;
    }
  };
  return {
    items: D.map((x) => typeof x == "number" ? {
      onClick: (w) => {
        b(w, x);
      },
      type: "page",
      page: x,
      selected: x === p,
      disabled: i,
      "aria-current": x === p ? !0 : void 0
    } : {
      onClick: (w) => {
        b(w, _(x));
      },
      type: x,
      page: _(x),
      selected: !1,
      disabled: i || x.indexOf("ellipsis") === -1 && (x === "next" || x === "last" ? p >= r : p <= 1)
    }),
    ...f
  };
}, cr = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, Ol = Object.freeze({
  first: "primera",
  last: "\xFAltima",
  previous: "anterior",
  next: "siguiente"
}), Sl = (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}p\xE1gina ${t}` : `Ir a la ${Ol[e]} p\xE1gina`, Ki = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: r,
  ...n
}) => {
  const {
    items: i
  } = Tl({
    ...n
  });
  return /* @__PURE__ */ m("nav", {
    className: `${r != null ? r : ""} ${cr["c-pagination"]}`,
    children: /* @__PURE__ */ m("ul", {
      className: cr["c-pagination__ul"],
      children: i.map((a, c) => /* @__PURE__ */ m("li", {
        children: e({
          ...a,
          "aria-label": t(a.type, a.page, a.selected)
        })
      }, `pagination-item-${c}`))
    })
  });
};
Ki.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ m(zn, {
    ...e
  }),
  getItemAriaLabel: Sl
};
Ki.propTypes = {
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
const zn = ({
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
    className: cr["c-pagination-item__ellipsis"],
    children: "..."
  }) : _e(i, {
    disabled: n,
    className: `${cr["c-pagination-item"]} ${r != null ? r : ""} ${c ? cr["c-pagination-item--selected"] : ""}`,
    ...i.props,
    ...s
  }, [
    t === "page" && e,
    d ? /* @__PURE__ */ m(De, {
      name: d
    }, t) : null
  ]);
};
zn.propTypes = {
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
zn.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next",
    last: "last_page",
    first: "first_page"
  },
  element: /* @__PURE__ */ m("button", {})
};
const jt = {
  "c-panel": "_c-panel_pvx48_1",
  "c-section": "_c-section_pvx48_10",
  "c-navigation": "_c-navigation_pvx48_16",
  "c-navigation__item": "_c-navigation__item_pvx48_30",
  "c-navigation__section": "_c-navigation__section_pvx48_34",
  "c-navigation__button": "_c-navigation__button_pvx48_52"
}, Kr = Ke(), Rl = ({
  children: e,
  defaultIndex: t,
  addClass: r
}) => {
  const [n, i] = H(1), a = {
    index: [],
    counter: 0
  }, c = (d) => i(d), s = (d) => n === d;
  W(() => {
    t !== void 0 && i(t);
  }, [t]);
  const l = xe.map(e, (d) => Ve(d) ? d.props.__TYPE === "Section" ? (a.counter++, a.index.push(a.counter), _e(d, {
    ...d.props,
    id: a.counter
  })) : d : null);
  return /* @__PURE__ */ m(Kr.Provider, {
    value: {
      validation: s,
      onToggle: c,
      listId: a.index,
      currentSection: n
    },
    children: /* @__PURE__ */ m("div", {
      className: `${jt["c-panel"]} ${r != null ? r : ""}`,
      children: l
    })
  });
};
Rl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node, o.exports.string]),
  defaultIndex: o.exports.number,
  addClass: o.exports.string
};
const Xi = ({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...i
}) => {
  const {
    validation: a
  } = ge(Kr), c = a(t);
  return /* @__PURE__ */ C("section", {
    role: "tabpanel",
    hidden: !c,
    "data-type": n,
    "aria-hidden": !c,
    "aria-labelledby": `section-${t}`,
    className: `${jt["c-section"]} ${r != null ? r : ""}`,
    ...i,
    children: [/* @__PURE__ */ C("span", {
      id: `section-${t}`,
      className: "u-sr-only",
      children: ["Secci\xF3n ", t]
    }), e]
  });
};
Xi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  addClass: o.exports.string,
  __TYPE: fe("Section")
};
Xi.defaultProps = {
  __TYPE: "Section"
};
const Pl = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), $l = (e, t, r) => e === "section" ? `${r ? "" : "Ir a la "}secci\xF3n ${t}` : `Ir a la ${Pl[e]} secci\xF3n`, Ji = ({
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
    currentSection: p
  } = ge(Kr), v = J([]), b = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), g = Object.freeze({
    previous: p - 1,
    next: p + 1
  }), y = {
    previous: n.previous || "navigate_before",
    next: n.next || "navigate_next"
  }, E = [
    ...t ? ["previous"] : [],
    ...f || [],
    ...r ? ["next"] : []
  ], R = (T) => !v.current.includes(T) && T ? v.current = [...v.current, T] : v.current, $ = (T) => {
    const x = v.current[0], w = v.current[v.current.length - 1];
    if ((T.keyCode || T.which) === b.LEFT)
      if (T.target === x)
        w.focus();
      else {
        const A = v.current.indexOf(T.target) - 1;
        v.current[A].focus();
      }
    else if ((T.keyCode || T.which) === b.RIGHT)
      if (T.target === w)
        x.focus();
      else {
        const A = v.current.indexOf(T.target) + 1;
        v.current[A].focus();
      }
  }, D = (T) => {
    u(T), c !== void 0 && c(T, f.length);
  }, _ = E.map((T) => typeof T == "number" ? {
    onClick: (x) => {
      D(T);
    },
    type: "section",
    section: T,
    selected: d(T),
    ref: R,
    onKeyDown: $
  } : {
    onClick: () => {
      D(g[T]);
    },
    type: T,
    section: g[T],
    selected: !1,
    disabled: T === "next" ? p >= f.length : p <= 1
  });
  return W(() => {
    c !== void 0 && c(p, f.length);
  }, []), /* @__PURE__ */ C(rt, {
    children: [/* @__PURE__ */ m("h2", {
      id: "section-list-navigation",
      className: "u-sr-only",
      children: i
    }), /* @__PURE__ */ m("ul", {
      role: "tablist",
      "aria-labelledby": "section-list-navigation",
      "aria-orientation": a,
      className: `${jt["c-navigation"]} ${s != null ? s : ""}`,
      children: e ? e(_) : _.map(({
        section: T,
        type: x,
        selected: w,
        ...A
      }, F) => /* @__PURE__ */ m("li", {
        role: "presentation",
        className: jt["c-navigation__item"],
        children: x === "section" ? /* @__PURE__ */ m("button", {
          id: `navigation-section-tab-${T}`,
          role: "tab",
          tabIndex: `${w ? 0 : -1}`,
          "aria-selected": w,
          className: jt["c-navigation__section"],
          "aria-label": l(x, T, w),
          ...A
        }) : /* @__PURE__ */ m("button", {
          type: "button",
          className: `${jt["c-navigation__button"]}`,
          "aria-label": l(x, T, w),
          ...A,
          children: y[x] ? /* @__PURE__ */ m(De, {
            name: y[x]
          }, x) : null
        })
      }, `navigation-section-item-${F}`))
    })]
  });
};
Ji.propTypes = {
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
Ji.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next"
  },
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: $l
};
const Dl = ({
  children: e,
  section: t,
  onClick: r
}) => {
  const {
    onToggle: n
  } = ge(Kr), i = (a) => {
    n(t), r && r(a);
  };
  return xe.map(e, (a) => _e(a, {
    ...a.props,
    onClick: i
  }));
};
Dl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]).isRequired,
  section: o.exports.number.isRequired,
  onClick: o.exports.func
};
const Cl = {
  "c-paper": "_c-paper_1sbf6_1"
}, Nl = ({
  children: e,
  color: t,
  addClass: r,
  ...n
}) => {
  const i = J(null);
  return Go(() => {
    t && i.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ m("div", {
    ref: i,
    className: `${Cl["c-paper"]} ${r != null ? r : ""}`,
    ...n,
    children: e
  });
};
Nl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  color: o.exports.string
};
const Al = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Il = (e) => {
  document.body.append(e);
}, kl = (e) => {
  const t = J(null);
  W(() => {
    const n = document.querySelector(`#${e}`), i = n || Al(e);
    return n || Il(i), i.append(t.current), () => {
      t.current.remove(), i.childElementCount || i.remove();
    };
  }, [e]);
  function r() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return r();
}, Kt = ({
  children: e,
  id: t
}) => {
  const r = kl(t);
  return Xo(e, r);
};
Kt.propTypes = {
  children: o.exports.any,
  id: o.exports.string.isRequired
};
const Ml = "_row_1adiy_1", Fl = {
  row: Ml
}, jl = lt(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ m("div", {
  ref: r,
  className: `${Fl.row} ${e != null ? e : ""}`,
  ...t
}));
jl.propTypes = {
  addClass: o.exports.string
};
const yn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, Zi = lt(({
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
  const [f, p] = H(), v = le(() => t || pt("c-select-"), [t]), b = ({
    target: g
  }) => {
    d && d({
      id: v,
      value: g.value
    }), p(g.value);
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
      className: yn["c-select-wrapper"],
      children: [/* @__PURE__ */ C("select", {
        id: v,
        ref: u,
        name: v,
        value: f,
        defaultValue: "default",
        className: yn["c-select"],
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
        addClass: yn["c-select__icon"]
      })]
    })]
  });
});
Zi.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Zi.propTypes = {
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
const Ll = ({
  children: e,
  onAllSelect: t
}) => {
  const [r, n] = H([]), i = (c) => n([...r.filter((s) => s.id !== c.id), {
    ...c
  }]);
  return W(() => {
    t && t(r);
  }, [r, t]), xe.map(e, (c) => {
    var s;
    return Ve(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? _e(c, {
      ...c.props,
      onChoise: i
    }) : c : null;
  });
};
Ll.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllSelect: o.exports.func
};
const _n = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, Ao = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Qi = lt(({
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
  const [f, p] = H(!1), v = le(() => e || pt("c-input-"), [e]), b = ({
    target: y
  }) => {
    if (p(y.checked), !!d) {
      if (y.checked) {
        d({
          id: y.id,
          value: y.value
        });
        return;
      }
      d({
        id: y.id,
        value: ""
      });
    }
  }, g = (y) => {
    ((y.keyCode || y.which) === Ao.SPACE || (y.keyCode || y.which) === Ao.ENTER) && p((E) => (d && d(E ? {
      id: v,
      value: ""
    } : {
      id: v,
      value: `${n}`
    }), !E));
  };
  return W(() => (s && p(!!s), () => {
    p(!1);
  }), [s]), /* @__PURE__ */ C("label", {
    htmlFor: v,
    className: `${_n["c-label"]} ${_n[`is-${r}`]}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ m("input", {
      id: v,
      ref: u,
      role: "switch",
      type: "checkbox",
      name: t,
      value: n,
      checked: f,
      "aria-disabled": c,
      className: `${_n["c-switch"]} ${a != null ? a : ""}`,
      onChange: b,
      onKeyDown: g,
      ...c && {
        disabled: !0
      }
    })]
  });
});
Qi.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Qi.propTypes = {
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
const Wn = Ke(), Bl = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  ...n
}) => {
  const [i, a] = H(0), c = (l) => a(l), s = (l) => i === l;
  return W(() => {
    t !== void 0 && a(t);
  }, [t]), /* @__PURE__ */ m(Wn.Provider, {
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
Bl.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  defaultIndex: o.exports.number,
  addClass: o.exports.string
};
const vr = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, ea = ({
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
  } = ge(Wn), p = u(t);
  return W(() => (d.current && a(d.current), () => {
    d.current = null;
  }), [d]), /* @__PURE__ */ C("button", {
    id: `tab-${t}`,
    role: "tab",
    ref: d,
    "data-type": s,
    tabIndex: `${p ? 0 : -1}`,
    "aria-controls": `panel-${t}`,
    "aria-selected": p,
    onKeyDown: c,
    onClick: () => f(t),
    className: `${vr["c-tab__button"]} u-flex ${n != null ? n : ""} ${p && r && r}`,
    ...l,
    children: [e, i && i(p)]
  });
};
ea.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  selected: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  addNewRef: o.exports.func,
  onNavigation: o.exports.func,
  __TYPE: fe("Tab")
};
ea.defaultProps = {
  __TYPE: "Tab"
};
const ta = ({
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
    const p = c.current[0], v = c.current[c.current.length - 1];
    if ((f.keyCode || f.which) === l.LEFT)
      if (f.target === p)
        v.focus();
      else {
        const b = c.current.indexOf(f.target) - 1;
        c.current[b].focus();
      }
    else if ((f.keyCode || f.which) === l.RIGHT)
      if (f.target === v)
        p.focus();
      else {
        const b = c.current.indexOf(f.target) + 1;
        c.current[b].focus();
      }
  }, u = xe.map(e, (f, p) => Ve(f) ? _e(f, {
    ...f.props,
    id: p,
    addNewRef: s,
    onNavigation: d
  }) : null);
  return /* @__PURE__ */ m("div", {
    role: "tablist",
    "data-type": i,
    "aria-label": r,
    "aria-orientation": n,
    className: `${vr["c-tab__list"]} ${t != null ? t : ""}`,
    ...a,
    children: Ie(u, ["Tab"])
  });
};
ta.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  label: o.exports.string,
  orientation: o.exports.string,
  __TYPE: fe("TabList")
};
ta.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const ra = ({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...i
}) => {
  const {
    validation: a
  } = ge(Wn), c = a(t);
  return /* @__PURE__ */ m("div", {
    id: `panel-${t}`,
    role: "tabpanel",
    tabIndex: 0,
    "data-type": n,
    "aria-hidden": !c,
    hidden: !c,
    "aria-labelledby": `tab-${t}`,
    className: `${c ? vr["c-tab__panel--active"] : vr["c-tab__panel"]} ${r != null ? r : ""}`,
    ...i,
    children: e
  });
};
ra.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  addClass: o.exports.string,
  __TYPE: fe("TabPanel")
};
ra.defaultProps = {
  __TYPE: "TabPanel"
};
const na = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = xe.map(e, (a, c) => Ve(a) ? _e(a, {
    ...a.props,
    id: c
  }) : null);
  return /* @__PURE__ */ m("div", {
    className: `${vr["c-tab__panels"]} ${t != null ? t : ""}`,
    "data-type": r,
    ...n,
    children: Ie(i, ["TabPanel"])
  });
};
na.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: fe("TabPanels")
};
na.defaultProps = {
  __TYPE: "TabPanels"
};
const xn = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, oa = lt(({
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
  const p = le(() => e || pt("c-input-"), [e]), v = ({
    target: b
  }) => {
    d && d({
      id: p,
      value: b.value
    });
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: p,
    className: `${xn["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ C("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", i, " "]
    }), /* @__PURE__ */ m("textarea", {
      id: p,
      ref: f,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: v,
      className: `${xn["c-textarea"]} ${xn[`c-textarea--${r}`]}`,
      ...u,
      children: t
    })]
  });
});
oa.defaultProps = {
  resize: "vertical",
  placeholder: "Here is a sample placeholder"
};
oa.propTypes = {
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
const Yl = Ho(({
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
  return W(() => {
    r(t);
  }, [t]), e;
});
Yl.propTypes = {
  children: o.exports.oneOfType([o.exports.array, o.exports.element]),
  theme: o.exports.object.isRequired
};
var Io = function(t) {
  return t.reduce(function(r, n) {
    var i = n[0], a = n[1];
    return r[i] = a, r;
  }, {});
}, ko = typeof window < "u" && window.document && window.document.createElement ? $t.useLayoutEffect : $t.useEffect, Le = "top", Ge = "bottom", He = "right", Be = "left", Xr = "auto", xr = [Le, Ge, He, Be], Vt = "start", hr = "end", Vl = "clippingParents", ia = "viewport", or = "popper", ql = "reference", Mo = /* @__PURE__ */ xr.reduce(function(e, t) {
  return e.concat([t + "-" + Vt, t + "-" + hr]);
}, []), aa = /* @__PURE__ */ [].concat(xr, [Xr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vt, t + "-" + hr]);
}, []), zl = "beforeRead", Wl = "read", Ul = "afterRead", Gl = "beforeMain", Hl = "main", Kl = "afterMain", Xl = "beforeWrite", Jl = "write", Zl = "afterWrite", Pn = [zl, Wl, Ul, Gl, Hl, Kl, Xl, Jl, Zl];
function ct(e) {
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
function Ye(e) {
  var t = Xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Un(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ql(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !Ye(a) || !ct(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(c) {
      var s = i[c];
      s === !1 ? a.removeAttribute(c) : a.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function eu(e) {
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
      !Ye(i) || !ct(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const tu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ql,
  effect: eu,
  requires: ["computeStyles"]
};
function tt(e) {
  return e.split("-")[0];
}
var Ct = Math.max, Br = Math.min, qt = Math.round;
function $n() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function sa() {
  return !/^((?!chrome|android).)*safari/i.test($n());
}
function zt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && Ye(e) && (i = e.offsetWidth > 0 && qt(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && qt(n.height) / e.offsetHeight || 1);
  var c = Nt(e) ? Xe(e) : window, s = c.visualViewport, l = !sa() && r, d = (n.left + (l && s ? s.offsetLeft : 0)) / i, u = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / i, p = n.height / a;
  return {
    width: f,
    height: p,
    top: u,
    right: d + f,
    bottom: u + p,
    left: d,
    x: d,
    y: u
  };
}
function Gn(e) {
  var t = zt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function ca(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Un(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function ot(e) {
  return Xe(e).getComputedStyle(e);
}
function ru(e) {
  return ["table", "td", "th"].indexOf(ct(e)) >= 0;
}
function yt(e) {
  return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Jr(e) {
  return ct(e) === "html" ? e : e.assignedSlot || e.parentNode || (Un(e) ? e.host : null) || yt(e);
}
function Fo(e) {
  return !Ye(e) || ot(e).position === "fixed" ? null : e.offsetParent;
}
function nu(e) {
  var t = /firefox/i.test($n()), r = /Trident/i.test($n());
  if (r && Ye(e)) {
    var n = ot(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Jr(e);
  for (Un(i) && (i = i.host); Ye(i) && ["html", "body"].indexOf(ct(i)) < 0; ) {
    var a = ot(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function wr(e) {
  for (var t = Xe(e), r = Fo(e); r && ru(r) && ot(r).position === "static"; )
    r = Fo(r);
  return r && (ct(r) === "html" || ct(r) === "body" && ot(r).position === "static") ? t : r || nu(e) || t;
}
function Hn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function lr(e, t, r) {
  return Ct(e, Br(t, r));
}
function ou(e, t, r) {
  var n = lr(e, t, r);
  return n > r ? r : n;
}
function la() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ua(e) {
  return Object.assign({}, la(), e);
}
function fa(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var iu = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ua(typeof t != "number" ? t : fa(t, xr));
};
function au(e) {
  var t, r = e.state, n = e.name, i = e.options, a = r.elements.arrow, c = r.modifiersData.popperOffsets, s = tt(r.placement), l = Hn(s), d = [Be, He].indexOf(s) >= 0, u = d ? "height" : "width";
  if (!(!a || !c)) {
    var f = iu(i.padding, r), p = Gn(a), v = l === "y" ? Le : Be, b = l === "y" ? Ge : He, g = r.rects.reference[u] + r.rects.reference[l] - c[l] - r.rects.popper[u], y = c[l] - r.rects.reference[l], E = wr(a), R = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, $ = g / 2 - y / 2, D = f[v], _ = R - p[u] - f[b], T = R / 2 - p[u] / 2 + $, x = lr(D, T, _), w = l;
    r.modifiersData[n] = (t = {}, t[w] = x, t.centerOffset = x - T, t);
  }
}
function su(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  if (i != null && !(typeof i == "string" && (i = t.elements.popper.querySelector(i), !i))) {
    if (process.env.NODE_ENV !== "production" && (Ye(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ca(t.elements.popper, i)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = i;
  }
}
const cu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: au,
  effect: su,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Wt(e) {
  return e.split("-")[1];
}
var lu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function uu(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: qt(t * i) / i || 0,
    y: qt(r * i) / i || 0
  };
}
function jo(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, c = e.offsets, s = e.position, l = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, f = e.isFixed, p = c.x, v = p === void 0 ? 0 : p, b = c.y, g = b === void 0 ? 0 : b, y = typeof u == "function" ? u({
    x: v,
    y: g
  }) : {
    x: v,
    y: g
  };
  v = y.x, g = y.y;
  var E = c.hasOwnProperty("x"), R = c.hasOwnProperty("y"), $ = Be, D = Le, _ = window;
  if (d) {
    var T = wr(r), x = "clientHeight", w = "clientWidth";
    if (T === Xe(r) && (T = yt(r), ot(T).position !== "static" && s === "absolute" && (x = "scrollHeight", w = "scrollWidth")), T = T, i === Le || (i === Be || i === He) && a === hr) {
      D = Ge;
      var A = f && T === _ && _.visualViewport ? _.visualViewport.height : T[x];
      g -= A - n.height, g *= l ? 1 : -1;
    }
    if (i === Be || (i === Le || i === Ge) && a === hr) {
      $ = He;
      var F = f && T === _ && _.visualViewport ? _.visualViewport.width : T[w];
      v -= F - n.width, v *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, d && lu), X = u === !0 ? uu({
    x: v,
    y: g
  }) : {
    x: v,
    y: g
  };
  if (v = X.x, g = X.y, l) {
    var U;
    return Object.assign({}, M, (U = {}, U[D] = R ? "0" : "", U[$] = E ? "0" : "", U.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", U));
  }
  return Object.assign({}, M, (t = {}, t[D] = R ? g + "px" : "", t[$] = E ? v + "px" : "", t.transform = "", t));
}
function fu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, c = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var d = ot(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return d.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: tt(t.placement),
    variation: Wt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, jo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, jo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const du = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: fu,
  data: {}
};
var $r = {
  passive: !0
};
function pu(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, c = n.resize, s = c === void 0 ? !0 : c, l = Xe(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, $r);
  }), s && l.addEventListener("resize", r.update, $r), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, $r);
    }), s && l.removeEventListener("resize", r.update, $r);
  };
}
const vu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: pu,
  data: {}
};
var hu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Nr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return hu[t];
  });
}
var mu = {
  start: "end",
  end: "start"
};
function Lo(e) {
  return e.replace(/start|end/g, function(t) {
    return mu[t];
  });
}
function Kn(e) {
  var t = Xe(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Xn(e) {
  return zt(yt(e)).left + Kn(e).scrollLeft;
}
function gu(e, t) {
  var r = Xe(e), n = yt(e), i = r.visualViewport, a = n.clientWidth, c = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, c = i.height;
    var d = sa();
    (d || !d && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: s + Xn(e),
    y: l
  };
}
function bu(e) {
  var t, r = yt(e), n = Kn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ct(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), c = Ct(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Xn(e), l = -n.scrollTop;
  return ot(i || r).direction === "rtl" && (s += Ct(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: c,
    x: s,
    y: l
  };
}
function Jn(e) {
  var t = ot(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function da(e) {
  return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : Ye(e) && Jn(e) ? e : da(Jr(e));
}
function ur(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = da(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xe(n), c = i ? [a].concat(a.visualViewport || [], Jn(n) ? n : []) : n, s = t.concat(c);
  return i ? s : s.concat(ur(Jr(c)));
}
function Dn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function yu(e, t) {
  var r = zt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Bo(e, t, r) {
  return t === ia ? Dn(gu(e, r)) : Nt(t) ? yu(t, r) : Dn(bu(yt(e)));
}
function _u(e) {
  var t = ur(Jr(e)), r = ["absolute", "fixed"].indexOf(ot(e).position) >= 0, n = r && Ye(e) ? wr(e) : e;
  return Nt(n) ? t.filter(function(i) {
    return Nt(i) && ca(i, n) && ct(i) !== "body";
  }) : [];
}
function xu(e, t, r, n) {
  var i = t === "clippingParents" ? _u(e) : [].concat(t), a = [].concat(i, [r]), c = a[0], s = a.reduce(function(l, d) {
    var u = Bo(e, d, n);
    return l.top = Ct(u.top, l.top), l.right = Br(u.right, l.right), l.bottom = Br(u.bottom, l.bottom), l.left = Ct(u.left, l.left), l;
  }, Bo(e, c, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function pa(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? tt(n) : null, a = n ? Wt(n) : null, c = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case Le:
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
    case Be:
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
  var d = i ? Hn(i) : null;
  if (d != null) {
    var u = d === "y" ? "height" : "width";
    switch (a) {
      case Vt:
        l[d] = l[d] - (t[u] / 2 - r[u] / 2);
        break;
      case hr:
        l[d] = l[d] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function mr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, c = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? Vl : s, d = r.rootBoundary, u = d === void 0 ? ia : d, f = r.elementContext, p = f === void 0 ? or : f, v = r.altBoundary, b = v === void 0 ? !1 : v, g = r.padding, y = g === void 0 ? 0 : g, E = ua(typeof y != "number" ? y : fa(y, xr)), R = p === or ? ql : or, $ = e.rects.popper, D = e.elements[b ? R : p], _ = xu(Nt(D) ? D : D.contextElement || yt(e.elements.popper), l, u, c), T = zt(e.elements.reference), x = pa({
    reference: T,
    element: $,
    strategy: "absolute",
    placement: i
  }), w = Dn(Object.assign({}, $, x)), A = p === or ? w : T, F = {
    top: _.top - A.top + E.top,
    bottom: A.bottom - _.bottom + E.bottom,
    left: _.left - A.left + E.left,
    right: A.right - _.right + E.right
  }, M = e.modifiersData.offset;
  if (p === or && M) {
    var X = M[i];
    Object.keys(F).forEach(function(U) {
      var re = [He, Ge].indexOf(U) >= 0 ? 1 : -1, de = [Le, Ge].indexOf(U) >= 0 ? "y" : "x";
      F[U] += X[de] * re;
    });
  }
  return F;
}
function wu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, c = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? aa : l, u = Wt(n), f = u ? s ? Mo : Mo.filter(function(b) {
    return Wt(b) === u;
  }) : xr, p = f.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var v = p.reduce(function(b, g) {
    return b[g] = mr(e, {
      placement: g,
      boundary: i,
      rootBoundary: a,
      padding: c
    })[tt(g)], b;
  }, {});
  return Object.keys(v).sort(function(b, g) {
    return v[b] - v[g];
  });
}
function Eu(e) {
  if (tt(e) === Xr)
    return [];
  var t = Nr(e);
  return [Lo(e), t, Lo(t)];
}
function Tu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !0 : c, l = r.fallbackPlacements, d = r.padding, u = r.boundary, f = r.rootBoundary, p = r.altBoundary, v = r.flipVariations, b = v === void 0 ? !0 : v, g = r.allowedAutoPlacements, y = t.options.placement, E = tt(y), R = E === y, $ = l || (R || !b ? [Nr(y)] : Eu(y)), D = [y].concat($).reduce(function(L, G) {
      return L.concat(tt(G) === Xr ? wu(t, {
        placement: G,
        boundary: u,
        rootBoundary: f,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: g
      }) : G);
    }, []), _ = t.rects.reference, T = t.rects.popper, x = /* @__PURE__ */ new Map(), w = !0, A = D[0], F = 0; F < D.length; F++) {
      var M = D[F], X = tt(M), U = Wt(M) === Vt, re = [Le, Ge].indexOf(X) >= 0, de = re ? "width" : "height", ie = mr(t, {
        placement: M,
        boundary: u,
        rootBoundary: f,
        altBoundary: p,
        padding: d
      }), ee = re ? U ? He : Be : U ? Ge : Le;
      _[de] > T[de] && (ee = Nr(ee));
      var we = Nr(ee), he = [];
      if (a && he.push(ie[X] <= 0), s && he.push(ie[ee] <= 0, ie[we] <= 0), he.every(function(L) {
        return L;
      })) {
        A = M, w = !1;
        break;
      }
      x.set(M, he);
    }
    if (w)
      for (var S = b ? 3 : 1, I = function(G) {
        var j = D.find(function(q) {
          var z = x.get(q);
          if (z)
            return z.slice(0, G).every(function(Z) {
              return Z;
            });
        });
        if (j)
          return A = j, "break";
      }, B = S; B > 0; B--) {
        var Y = I(B);
        if (Y === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[n]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const Ou = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Tu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Yo(e, t, r) {
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
function Vo(e) {
  return [Le, He, Ge, Be].some(function(t) {
    return e[t] >= 0;
  });
}
function Su(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, c = mr(t, {
    elementContext: "reference"
  }), s = mr(t, {
    altBoundary: !0
  }), l = Yo(c, n), d = Yo(s, i, a), u = Vo(l), f = Vo(d);
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
const Ru = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Su
};
function Pu(e, t, r) {
  var n = tt(e), i = [Be, Le].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, c = a[0], s = a[1];
  return c = c || 0, s = (s || 0) * i, [Be, He].indexOf(n) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function $u(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, a = i === void 0 ? [0, 0] : i, c = aa.reduce(function(u, f) {
    return u[f] = Pu(f, t.rects, a), u;
  }, {}), s = c[t.placement], l = s.x, d = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = c;
}
const Du = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $u
};
function Cu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = pa({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Nu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Cu,
  data: {}
};
function Au(e) {
  return e === "x" ? "y" : "x";
}
function Iu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !1 : c, l = r.boundary, d = r.rootBoundary, u = r.altBoundary, f = r.padding, p = r.tether, v = p === void 0 ? !0 : p, b = r.tetherOffset, g = b === void 0 ? 0 : b, y = mr(t, {
    boundary: l,
    rootBoundary: d,
    padding: f,
    altBoundary: u
  }), E = tt(t.placement), R = Wt(t.placement), $ = !R, D = Hn(E), _ = Au(D), T = t.modifiersData.popperOffsets, x = t.rects.reference, w = t.rects.popper, A = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, F = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, X = {
    x: 0,
    y: 0
  };
  if (!!T) {
    if (a) {
      var U, re = D === "y" ? Le : Be, de = D === "y" ? Ge : He, ie = D === "y" ? "height" : "width", ee = T[D], we = ee + y[re], he = ee - y[de], S = v ? -w[ie] / 2 : 0, I = R === Vt ? x[ie] : w[ie], B = R === Vt ? -w[ie] : -x[ie], Y = t.elements.arrow, L = v && Y ? Gn(Y) : {
        width: 0,
        height: 0
      }, G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : la(), j = G[re], q = G[de], z = lr(0, x[ie], L[ie]), Z = $ ? x[ie] / 2 - S - z - j - F.mainAxis : I - z - j - F.mainAxis, V = $ ? -x[ie] / 2 + S + z + q + F.mainAxis : B + z + q + F.mainAxis, N = t.elements.arrow && wr(t.elements.arrow), O = N ? D === "y" ? N.clientTop || 0 : N.clientLeft || 0 : 0, Q = (U = M == null ? void 0 : M[D]) != null ? U : 0, me = ee + Z - Q - O, Te = ee + V - Q, $e = lr(v ? Br(we, me) : we, ee, v ? Ct(he, Te) : he);
      T[D] = $e, X[D] = $e - ee;
    }
    if (s) {
      var it, ut = D === "x" ? Le : Be, at = D === "x" ? Ge : He, Oe = T[_], Je = _ === "y" ? "height" : "width", Ze = Oe + y[ut], _t = Oe - y[at], vt = [Le, Be].indexOf(E) !== -1, xt = (it = M == null ? void 0 : M[_]) != null ? it : 0, wt = vt ? Ze : Oe - x[Je] - w[Je] - xt + F.altAxis, Ne = vt ? Oe + x[Je] + w[Je] - xt - F.altAxis : _t, Qe = v && vt ? ou(wt, Oe, Ne) : lr(v ? wt : Ze, Oe, v ? Ne : _t);
      T[_] = Qe, X[_] = Qe - Oe;
    }
    t.modifiersData[n] = X;
  }
}
const ku = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Iu,
  requiresIfExists: ["offset"]
};
function Mu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Fu(e) {
  return e === Xe(e) || !Ye(e) ? Kn(e) : Mu(e);
}
function ju(e) {
  var t = e.getBoundingClientRect(), r = qt(t.width) / e.offsetWidth || 1, n = qt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Lu(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ye(t), i = Ye(t) && ju(t), a = yt(t), c = zt(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ct(t) !== "body" || Jn(a)) && (s = Fu(t)), Ye(t) ? (l = zt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Xn(a))), {
    x: c.left + s.scrollLeft - l.x,
    y: c.top + s.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function Bu(e) {
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
function Yu(e) {
  var t = Bu(e);
  return Pn.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Vu(e) {
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
var Pt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', qu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', qo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function zu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), qo).filter(function(r, n, i) {
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + qo.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(mt(qu, String(t.name), n, n));
      });
    });
  });
}
function Wu(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function Uu(e) {
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
var zo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Gu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Wo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Uo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Hu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Wo : i;
  return function(s, l, d) {
    d === void 0 && (d = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Wo, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, v = {
      state: u,
      setOptions: function(E) {
        var R = typeof E == "function" ? E(u.options) : E;
        g(), u.options = Object.assign({}, a, u.options, R), u.scrollParents = {
          reference: Nt(s) ? ur(s) : s.contextElement ? ur(s.contextElement) : [],
          popper: ur(l)
        };
        var $ = Yu(Uu([].concat(n, u.options.modifiers)));
        if (u.orderedModifiers = $.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = Wu([].concat($, u.options.modifiers), function(M) {
            var X = M.name;
            return X;
          });
          if (zu(D), tt(u.options.placement) === Xr) {
            var _ = u.orderedModifiers.find(function(M) {
              var X = M.name;
              return X === "flip";
            });
            _ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var T = ot(l), x = T.marginTop, w = T.marginRight, A = T.marginBottom, F = T.marginLeft;
          [x, w, A, F].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), v.update();
      },
      forceUpdate: function() {
        if (!p) {
          var E = u.elements, R = E.reference, $ = E.popper;
          if (!Uo(R, $)) {
            process.env.NODE_ENV !== "production" && console.error(zo);
            return;
          }
          u.rects = {
            reference: Lu(R, wr($), u.options.strategy === "fixed"),
            popper: Gn($)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var D = 0, _ = 0; _ < u.orderedModifiers.length; _++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error(Gu);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, _ = -1;
              continue;
            }
            var T = u.orderedModifiers[_], x = T.fn, w = T.options, A = w === void 0 ? {} : w, F = T.name;
            typeof x == "function" && (u = x({
              state: u,
              options: A,
              name: F,
              instance: v
            }) || u);
          }
        }
      },
      update: Vu(function() {
        return new Promise(function(y) {
          v.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!Uo(s, l))
      return process.env.NODE_ENV !== "production" && console.error(zo), v;
    v.setOptions(d).then(function(y) {
      !p && d.onFirstUpdate && d.onFirstUpdate(y);
    });
    function b() {
      u.orderedModifiers.forEach(function(y) {
        var E = y.name, R = y.options, $ = R === void 0 ? {} : R, D = y.effect;
        if (typeof D == "function") {
          var _ = D({
            state: u,
            name: E,
            instance: v,
            options: $
          }), T = function() {
          };
          f.push(_ || T);
        }
      });
    }
    function g() {
      f.forEach(function(y) {
        return y();
      }), f = [];
    }
    return v;
  };
}
var Ku = [vu, Nu, du, tu, Du, Ou, ku, cu, Ru], Xu = /* @__PURE__ */ Hu({
  defaultModifiers: Ku
}), Ju = typeof Element < "u", Zu = typeof Map == "function", Qu = typeof Set == "function", ef = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ar(e, t) {
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
        if (!Ar(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (Zu && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Ar(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (Qu && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (ef && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Ju && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !Ar(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var tf = function(t, r) {
  try {
    return Ar(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, rf = [], Zr = function(t, r, n) {
  n === void 0 && (n = {});
  var i = $t.useRef(null), a = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || rf
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
      fn: function(v) {
        var b = v.state, g = Object.keys(b.elements);
        Ea.flushSync(function() {
          l({
            styles: Io(g.map(function(y) {
              return [y, b.styles[y] || {}];
            })),
            attributes: Io(g.map(function(y) {
              return [y, b.attributes[y]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), u = $t.useMemo(function() {
    var p = {
      onFirstUpdate: a.onFirstUpdate,
      placement: a.placement,
      strategy: a.strategy,
      modifiers: [].concat(a.modifiers, [d, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return tf(i.current, p) ? i.current || p : (i.current = p, p);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, d]), f = $t.useRef();
  return ko(function() {
    f.current && f.current.setOptions(u);
  }, [u]), ko(function() {
    if (!(t == null || r == null)) {
      var p = n.createPopper || Xu, v = p(t, r, u);
      return f.current = v, function() {
        v.destroy(), f.current = null;
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
const wn = {
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, nf = Object.freeze({
  ESC: 27
}), va = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: i,
  hasArrow: a,
  distance: c,
  isDisabled: s,
  isVisible: l,
  onClick: d
}) => {
  const [u, f] = H(!1), p = J(null), v = J(null), b = le(() => t || pt("c-Toggletip-"), [t]), g = (_) => f(!1), y = (_) => {
    f(!u), u && document.activeElement === p.current && !l && setTimeout(() => {
      f((T) => !T);
    }, 100), d && d(_);
  }, E = (_) => {
    (_.keyCode | _.which) === nf.ESC && u && f(!u);
  }, R = xe.map(e, (_) => Ve(_) ? _e(_, {
    ..._.props,
    "aria-describedby": t,
    ref: p,
    onClick: y,
    ...l ? {} : {
      onBlur: g,
      onKeyDown: E
    }
  }) : null), {
    styles: $,
    attributes: D
  } = Zr(p.current, v.current, {
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
  return !r || xe.count(e) > 1 || s ? /* @__PURE__ */ m(rt, {
    children: e
  }) : /* @__PURE__ */ C(rt, {
    children: [R, /* @__PURE__ */ m(Kt, {
      id: "js-toggletip-portal",
      children: /* @__PURE__ */ C("div", {
        id: b,
        ref: v,
        role: "status",
        className: `${wn["c-toggletip"]} ${u && wn["c-toggletip--active"]} ${i != null ? i : ""}`,
        style: $.popper,
        ...D.popper,
        children: [r, a && /* @__PURE__ */ m("div", {
          className: wn["c-toggletip__arrow"],
          "data-popper-arrow": !0,
          style: $.arrow
        })]
      })
    })]
  });
};
va.defaultProps = {
  placement: "auto"
};
va.propTypes = {
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
const En = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, of = Object.freeze({
  ESC: 27
}), ha = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: i,
  hasArrow: a,
  distance: c,
  isDisabled: s
}) => {
  const [l, d] = H(!1), u = J(null), f = J(null), p = J(), v = le(() => t || pt("c-tooltip-"), [t]), b = (x) => {
    l || d(!l);
  }, g = (x) => d(!1), y = (x) => {
    (!l || document.activeElement !== u.current) && d(!l);
  }, E = () => {
    window.clearTimeout(p.current);
  }, R = (x) => {
    p.current = setTimeout(() => {
      d(!1);
    }, 150);
  }, $ = (x) => {
    (x.keyCode | x.which) === of.ESC && l && d(!l);
  }, D = xe.map(e, (x) => Ve(x) ? _e(x, {
    ...x.props,
    "aria-describedby": t,
    ref: u,
    onFocus: b,
    onBlur: g,
    onMouseEnter: y,
    onMouseLeave: R,
    onKeyDown: $
  }) : null), {
    styles: _,
    attributes: T
  } = Zr(u.current, f.current, {
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
  return !r || xe.count(e) > 1 || s ? /* @__PURE__ */ m(rt, {
    children: e
  }) : /* @__PURE__ */ C(rt, {
    children: [D, /* @__PURE__ */ m(Kt, {
      id: "js-tooltip-portal",
      children: /* @__PURE__ */ C("div", {
        id: v,
        ref: f,
        role: "tooltip",
        "data-open": l,
        onMouseEnter: E,
        onMouseLeave: R,
        className: `${En["c-tooltip"]} ${l && En["c-tooltip--active"]} ${i != null ? i : ""}`,
        style: _.popper,
        ...T.popper,
        children: [r, a && /* @__PURE__ */ m("div", {
          className: En["c-tooltip__arrow"],
          "data-popper-arrow": !0,
          style: _.arrow
        })]
      })
    })]
  });
};
ha.defaultProps = {
  placement: "auto"
};
ha.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  id: o.exports.string,
  label: o.exports.string.isRequired,
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const Zn = Ke(), ma = ({
  steps: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n,
  hideCloseButton: i,
  hideBackButton: a,
  ariaAttributes: c
}) => {
  const [s, l] = H(null), d = [...e.reduce((g, y, E) => [...g, {
    id: E + 1,
    ...y
  }], [])], u = (g) => d.filter((y) => y.id === g).reduce((y, E) => ({
    ...y,
    ...E
  }), {}), f = (g) => {
    const y = document.querySelector("#root");
    y.inert = g;
  }, p = () => {
    l((g) => g < d.length ? g + 1 : g);
  }, v = () => {
    l((g) => g > 0 + 1 ? g - 1 : g);
  }, b = () => {
    l(null), r(!t), f(!1), n && n.current.focus();
  };
  return W(() => {
    t && (l(d.shift().id), f(!0));
  }, [t]), /* @__PURE__ */ m(Zn.Provider, {
    value: {
      isOpen: t,
      lastId: d.length,
      ...u(s),
      methods: {
        onNext: p,
        onPrev: v,
        onClose: b
      }
    },
    children: /* @__PURE__ */ m(Kt, {
      id: "js-tour",
      children: t && /* @__PURE__ */ C(rt, {
        children: [/* @__PURE__ */ m(af, {}), /* @__PURE__ */ m(ga, {
          ariaAttributes: c,
          hideCloseButton: i,
          hideBackButton: a
        })]
      })
    })
  });
};
ma.defaultProps = {
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
ma.propTypes = {
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
}, ga = ({
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
  } = ge(Zn), p = J(), {
    onClose: v,
    onPrev: b,
    onNext: g
  } = a, {
    styles: y,
    attributes: E
  } = Zr(document.querySelector(s), p.current, {
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
  }), R = () => Ve(l) ? l : Ko("p", {
    className: bt["tour-description"]
  }, [l]), $ = () => {
    p.current.style.setProperty("--speed-movement", "0.8s"), g();
  };
  return /* @__PURE__ */ C(rt, {
    children: [/* @__PURE__ */ m("div", {
      className: `${bt["c-layout"]}`
    }), /* @__PURE__ */ C("div", {
      id: `unique-id-tour-element-${c}`,
      ref: p,
      style: y.popper,
      className: `${bt["c-tour-content"]} ${n && "animate__animated animate__fadeIn animate__faster"} ${f != null ? f : ""}`,
      ...e,
      ...E.popper,
      children: [/* @__PURE__ */ C("span", {
        className: "u-sr-only",
        children: ["Parte ", c, " de ", i, "."]
      }), /* @__PURE__ */ m("div", {
        "aria-hidden": !0,
        className: bt["c-tour-progress"],
        children: /* @__PURE__ */ m("div", {
          className: bt["c-tour-progress-bar"],
          style: {
            transform: `scaleX(${c / i})`
          }
        })
      }), R(), /* @__PURE__ */ C("div", {
        className: bt["c-tour-button-container"],
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
ga.propTypes = {
  ariaAttributes: o.exports.shape({
    role: o.exports.string,
    tabIndex: o.exports.oneOfType([o.exports.string, o.exports.number]),
    "aria-label": o.exports.string,
    "aria-modal": o.exports.oneOfType([o.exports.string, o.exports.bool])
  }),
  hideCloseButton: o.exports.bool,
  hideBackButton: o.exports.bool
};
const af = () => {
  const {
    isOpen: e,
    id: t,
    target: r,
    helpLayerClass: n
  } = ge(Zn), [i, a] = H({}), c = () => {
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
  return W(() => (r && c(), () => {
    a({});
  }), [r]), W(() => {
    if (!e || !r)
      return;
    const s = (l) => {
      c();
    };
    return e && window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s);
    };
  }, [e, r]), /* @__PURE__ */ m("div", {
    className: `${bt["c-tour-help"]} ${e && "animate__animated animate__fadeIn animate__faster animate__delay-2s"} ${n != null ? n : ""}`,
    style: i,
    children: /* @__PURE__ */ m("span", {
      className: bt["c-tour-number"],
      children: t
    })
  });
}, sf = "_active_r3225_90", cf = "_iconPulse_r3225_1", pe = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: sf,
  iconPulse: cf,
  "c-vid__progress-bg": "_c-vid__progress-bg_r3225_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_r3225_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_r3225_140",
  "c-vid__controls": "_c-vid__controls_r3225_150",
  "c-vid__button": "_c-vid__button_r3225_165",
  "c-vid__volume": "_c-vid__volume_r3225_180",
  "c-vid__volume-item": "_c-vid__volume-item_r3225_191",
  "c-vid__time": "_c-vid__time_r3225_202",
  "c-vid__subtitles": "_c-vid__subtitles_r3225_208"
}, ba = ({
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
  }), [f, p] = H({
    state: !1,
    label: "Reproducir video"
  }), [v, b] = H({
    state: !0,
    label: "Volumen"
  }), [g, y] = H(100), [E, R] = H({
    state: !1,
    label: "Ver en pantalla completa"
  }), [$, D] = H(!1), [_, T] = H(100), x = J(null), w = J(null), A = J(null), F = J(null), M = J(null), X = J(null), U = J(null), re = J(null), [de, ie] = H(!1), ee = (N) => {
    N.classList.add(`${pe.active}`), setTimeout(() => {
      N.classList.remove(`${pe.active}`);
    }, 650);
  };
  function we() {
    const N = w.current;
    f.state ? (N.pause(), p({
      state: !1,
      label: "Reproducir video"
    })) : (N.play(), p({
      state: !0,
      label: "Pausar video"
    })), ee(X.current);
  }
  function he() {
    const N = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, O = x.current;
    N ? (R({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (R({
      state: !0,
      label: "Salir de pantalla completa"
    }), O.requestFullscreen ? O.requestFullscreen() : O.mozRequestFullScreen ? O.mozRequestFullScreen() : O.webkitRequestFullScreen ? O.webkitRequestFullScreen() : O.msRequestFullscreen && O.msRequestFullscreen());
  }
  function S(N) {
    const O = parseInt(N, 10), Q = O >= 3600 ? Math.floor(O / 3600) : 0, me = Math.floor((O - Q * 3600) / 60), Te = O - Q * 3600 - me * 60, $e = L(Y(Q)), it = L(Y(me)), ut = L(Y(Te));
    return {
      hours: $e,
      minutes: it,
      seconds: ut
    };
  }
  function I(N) {
    const O = B(N.duration), Q = B(N.currentTime);
    u({
      totalSeconds: N.currentTime,
      hours: parseInt(S(N.currentTime).hours),
      minutes: parseInt(S(N.currentTime).minutes),
      seconds: parseInt(S(N.currentTime).seconds),
      string: Q
    }), l({
      totalSeconds: Math.floor(N.duration),
      hours: parseInt(S(N.duration).hours),
      minutes: parseInt(S(N.duration).minutes),
      seconds: parseInt(S(N.duration).seconds),
      string: O
    });
  }
  function B(N) {
    return parseInt(N, 10) <= 3600 ? `${S(N).minutes}:${S(N).seconds}` : `${S(N).hours}:${S(N).minutes}:${S(N).seconds}`;
  }
  function Y(N) {
    return N < 10 ? N = "0" + N : N;
  }
  function L(N) {
    return isNaN(N) ? "00" : N;
  }
  function G(N) {
    const O = F.current, Q = w.current, Te = N.nativeEvent.offsetX / O.offsetWidth * Q.duration;
    Q.currentTime = Te;
  }
  function j(N) {
    const O = w.current, Q = N.target.value, me = Q / 100;
    T(Q), y(Q), O.volume = me, v.state || b({
      state: !0,
      label: "Volumen"
    });
  }
  const q = () => {
    if (v.state) {
      b({
        state: !1,
        label: "Mutear video"
      });
      const N = w.current, O = 0, Q = O;
      T(O), N.volume = Q;
    } else {
      b({
        state: !0,
        label: "Volumen"
      });
      const N = w.current, O = g, Q = O / 100;
      T(O), N.volume = Q;
    }
  }, z = function(N) {
    (N.keyCode || N.which) === 32 && we();
  }, Z = function(N) {
    const O = Math.floor(F.current.getAttribute("aria-valuenow"));
    if (document.activeElement === M.current)
      return null;
    if ((N.keyCode || N.which) === 37) {
      const Q = O - 5;
      Q >= 0 ? w.current.currentTime = Q : w.current.currentTime = 0, ee(re.current);
    }
    if ((N.keyCode || N.which) === 39) {
      const Q = O + 5;
      Q >= w.current.duration ? w.current.currentTime = w.current.duration : w.current.currentTime = Q, ee(U.current);
    }
  }, V = () => s >= 3600 ? `${d.hours} horas, ${d.minutes} minutos y ${d.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${d.minutes} minutos y ${d.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return W(() => {
    const N = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(N, "caption") && ie(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(N, "volume") && T(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), W(() => {
    localStorage.setItem("ui-video", JSON.stringify({
      caption: de,
      volume: _
    }));
  }, [de, _]), W(() => (A.current ? A.current.addEventListener("error", () => {
    D(!0);
  }) : D(!0), e.caption && D(!1), () => {
    A.current && A.current.removeEventListener("error", () => {
      D(!0);
    });
  }), [e.caption]), /* @__PURE__ */ C("figure", {
    className: `${pe["c-vid"]} ${i}`,
    style: {
      maxWidth: `${t}px`
    },
    onKeyDown: (N) => Z(N),
    ...c,
    children: [/* @__PURE__ */ C("div", {
      className: `${pe["c-vid__container"]} ${i}`,
      ref: x,
      children: [/* @__PURE__ */ C("div", {
        className: pe["c-vid__wrapper"],
        children: [/* @__PURE__ */ C("video", {
          ref: w,
          onTimeUpdate: (N) => I(N.target),
          onLoadedData: (N) => I(N.target),
          onClick: we,
          className: `${pe["c-vid__video"]} ${de ? "" : pe["no-captions"]}`,
          ...a && {
            poster: a
          },
          children: [/* @__PURE__ */ m("source", {
            src: e.video
          }), e.caption ? /* @__PURE__ */ m("track", {
            ref: A,
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
            ref: X,
            className: pe["c-vid__icon"],
            children: /* @__PURE__ */ m(De, {
              name: f.state ? "play" : "pause"
            })
          }), /* @__PURE__ */ m("div", {
            ref: U,
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
          "aria-valuenow": d.totalSeconds,
          "aria-valuemax": s.totalSeconds,
          "aria-valuetext": V(),
          tabIndex: "0",
          onKeyDown: z,
          className: pe["c-vid__progress-bg"],
          onClick: G,
          ref: F,
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
      }), /* @__PURE__ */ C("div", {
        className: pe["c-vid__controls"],
        children: [/* @__PURE__ */ m("button", {
          className: `${pe["c-vid__button"]} tour`,
          "aria-label": f.label,
          onClick: we,
          "data-description": "Este bot\xF3n reproduce el video",
          children: /* @__PURE__ */ m(De, {
            name: f.state ? "pause" : "play"
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
            value: _,
            onChange: j,
            "aria-valuetext": `${_}%`
          })]
        }), /* @__PURE__ */ C("p", {
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
ba.propTypes = {
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
ba.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
const Qn = Ke(), ya = ({
  children: e,
  isVisible: t
}) => {
  const [r, n] = H(!1), i = J(), a = () => n(!r), c = (s) => {
    i.current || (i.current = s);
  };
  return W(() => {
    t !== void 0 && n(t);
  }, [t]), /* @__PURE__ */ m(Qn.Provider, {
    value: {
      isOpen: r,
      onOpen: a,
      setRefButton: c,
      refButton: i
    },
    children: Ie(e, ["PopoverModalButton", "PopoverModalContent"])
  });
};
ya.defaultProps = {
  isVisible: !1
};
ya.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  isVisible: o.exports.bool
};
const _a = ({
  children: e
}) => {
  const {
    onOpen: t,
    setRefButton: r
  } = ge(Qn);
  if (xe.count(e) > 1)
    return null;
  const n = (i) => Ve(i) ? _e(i, {
    ...i.props,
    ref: r,
    onClick: t
  }) : null;
  return xe.map(e, n);
};
_a.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  __TYPE: fe("PopoverModalButton")
};
_a.defaultProps = {
  __TYPE: "PopoverModalButton"
};
const Tn = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, lf = Object.freeze({
  ESC: 27
}), xa = ({
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
  } = ge(Qn), l = J(), d = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', u = (v) => {
    const b = l.current.querySelectorAll(d), g = s.current, y = b[0], E = b[b.length - 1];
    if (!v.shiftKey && document.activeElement === E)
      return g.focus(), v.preventDefault();
    v.shiftKey && document.activeElement === y && (g.focus(), v.preventDefault()), (v.keyCode || v.which) === lf.ESC && g.focus();
  }, {
    styles: f,
    attributes: p
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
  return W(() => {
    c && l.current.focus();
  }, [c]), n ? /* @__PURE__ */ m(rt, {
    children: e
  }) : /* @__PURE__ */ m(Kt, {
    id: "js-popover-modal-portal",
    children: /* @__PURE__ */ C("div", {
      ref: l,
      role: "status",
      tabIndex: -1,
      className: `${Tn["c-popover-modal"]} ${c && Tn["c-popover-modal--active"]} ${t != null ? t : ""}`,
      style: f.popper,
      onKeyDown: u,
      ...p.popper,
      children: [e, r && /* @__PURE__ */ m("div", {
        className: Tn["c-popover-modal__arrow"],
        "data-popper-arrow": !0,
        style: f.arrow
      })]
    })
  });
};
xa.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"]),
  __TYPE: fe("PopoverModalContent")
};
xa.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  __TYPE: "PopoverModalContent"
};
const uf = (e, t) => {
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
}, ff = (e, t, r) => {
  const [n, i] = H(r), a = e.map((s) => window.matchMedia(s)), c = () => {
    const s = a.findIndex((l) => l.matches);
    return typeof t[s] < "u" ? t[s] : r;
  };
  return W(() => {
    i(c);
    const s = (l) => i(c);
    return a.forEach((l) => l.addEventListener("change", s)), () => {
      a.forEach((l) => l.removeEventListener("change", s));
    };
  }, []), n;
}, mf = () => {
  const [e, t] = uf("dark-mode-enabled"), r = ff(["(prefers-color-scheme: dark)"], [!0], !1), n = typeof e < "u" ? e : r;
  return W(() => {
    t(r);
  }, [r]), W(() => {
    const i = window.document.body;
    n ? i.setAttribute("data-dark-mode", n) : i.removeAttribute("data-dark-mode", n);
  }, [n]), [n, t];
}, df = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), gf = (e) => {
  const { root: t, rootMargin: r, threshold: n } = e || df, [i, a] = H(!1), [c, s] = H(null);
  return W(() => {
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
}, wa = (e) => {
  let t = {};
  for (const r in e)
    if (typeof e[r] == "object") {
      const n = wa(e[r]);
      for (const i in n)
        t = {
          ...t,
          [r.includes("accents") || r.includes("palette") ? i : `${r}-${i}`]: n[i]
        };
    } else
      t[r] = e[r];
  return t;
}, bf = (e) => wa(e);
export {
  ka as Accordion,
  Qo as AccordionButton,
  ei as AccordionItem,
  ti as AccordionPanel,
  ri as Audio,
  Dt as Button,
  Dl as ButtonSection,
  ii as CheckBox,
  Ss as CheckBoxGroup,
  $s as Col,
  Cs as Content,
  $i as DragAndDrop,
  Pi as DragAndDropContext,
  Di as Draggable,
  Ci as Droppable,
  hf as Filter,
  Ni as GeneralDraggable,
  De as Icon,
  Ai as Image,
  Ii as Input,
  gl as InputGroup,
  Mi as InputLeftAddon,
  Fi as InputRightAddon,
  ki as InputStyle,
  yl as Kbd,
  ji as Link,
  _l as List,
  Bi as ListItem,
  Yi as Modal,
  Vi as ModalContent,
  qn as ModalContext,
  qi as ModalOverlay,
  Ji as NavSection,
  Gi as NumberDecrementStepper,
  Hi as NumberIncrementStepper,
  zi as NumberInput,
  Hr as NumberInputContext,
  Wi as NumberInputField,
  Ui as NumberInputStepper,
  xl as OrderedList,
  Ki as Pagination,
  zn as PaginationItem,
  Rl as Panel,
  Kr as PanelContext,
  Nl as Paper,
  ya as PopoverModal,
  _a as PopoverModalButton,
  xa as PopoverModalContent,
  Qn as PopoverModalContext,
  Kt as Portal,
  jl as Row,
  Xi as Section,
  Zi as Select,
  Ll as SelectGroup,
  Qi as Switch,
  ea as Tab,
  ta as TabList,
  ra as TabPanel,
  na as TabPanels,
  Bl as Tabs,
  Wn as TabsContext,
  oa as TextArea,
  Yl as ThemeProvider,
  va as Toggletip,
  ha as Tooltip,
  ma as Tour,
  Zn as TourContext,
  ga as TourElement,
  af as TourHelpLayer,
  wl as UnorderedList,
  ba as Video,
  bf as createTheme,
  mf as useDarkMode,
  uf as useLocalStorage,
  ff as useMedia,
  gf as useOnScreen,
  Tl as usePagination,
  kl as usePortal
};
