import * as $t from "react";
import Yr, { Children as Se, useState as K, useEffect as W, isValidElement as He, cloneElement as we, forwardRef as ct, useRef as Z, useMemo as le, useLayoutEffect as Uo, useCallback as Ce, createContext as Ke, memo as Go, useReducer as $n, useContext as ge, createElement as Ho } from "react";
import * as xa from "react-dom";
import { unstable_batchedUpdates as Jt, createPortal as Ko } from "react-dom";
var Pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, o = { exports: {} }, rn = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function wa() {
  if (eo)
    return se;
  eo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function $(_) {
    if (typeof _ == "object" && _ !== null) {
      var S = _.$$typeof;
      switch (S) {
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
                  return S;
              }
          }
        case r:
          return S;
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
var to;
function Ea() {
  return to || (to = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function $(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === d || T === a || T === i || T === f || T === p || typeof T == "object" && T !== null && (T.$$typeof === b || T.$$typeof === v || T.$$typeof === c || T.$$typeof === s || T.$$typeof === u || T.$$typeof === y || T.$$typeof === E || T.$$typeof === R || T.$$typeof === g);
    }
    function D(T) {
      if (typeof T == "object" && T !== null) {
        var Q = T.$$typeof;
        switch (Q) {
          case t:
            var me = T.type;
            switch (me) {
              case l:
              case d:
              case n:
              case a:
              case i:
              case f:
                return me;
              default:
                var Ee = me && me.$$typeof;
                switch (Ee) {
                  case s:
                  case u:
                  case b:
                  case v:
                  case c:
                    return Ee;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var _ = l, S = d, x = s, w = c, A = t, F = u, M = n, X = b, U = v, re = r, de = a, ie = i, ee = f, _e = !1;
    function he(T) {
      return _e || (_e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(T) || D(T) === l;
    }
    function O(T) {
      return D(T) === d;
    }
    function I(T) {
      return D(T) === s;
    }
    function B(T) {
      return D(T) === c;
    }
    function Y(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function L(T) {
      return D(T) === u;
    }
    function G(T) {
      return D(T) === n;
    }
    function j(T) {
      return D(T) === b;
    }
    function q(T) {
      return D(T) === v;
    }
    function z(T) {
      return D(T) === r;
    }
    function J(T) {
      return D(T) === a;
    }
    function V(T) {
      return D(T) === i;
    }
    function N(T) {
      return D(T) === f;
    }
    ce.AsyncMode = _, ce.ConcurrentMode = S, ce.ContextConsumer = x, ce.ContextProvider = w, ce.Element = A, ce.ForwardRef = F, ce.Fragment = M, ce.Lazy = X, ce.Memo = U, ce.Portal = re, ce.Profiler = de, ce.StrictMode = ie, ce.Suspense = ee, ce.isAsyncMode = he, ce.isConcurrentMode = O, ce.isContextConsumer = I, ce.isContextProvider = B, ce.isElement = Y, ce.isForwardRef = L, ce.isFragment = G, ce.isLazy = j, ce.isMemo = q, ce.isPortal = z, ce.isProfiler = J, ce.isStrictMode = V, ce.isSuspense = N, ce.isValidElementType = $, ce.typeOf = D;
  }()), ce;
}
var ro;
function Xo() {
  return ro || (ro = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = wa() : e.exports = Ea();
  }(rn)), rn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var nn, no;
function Ta() {
  if (no)
    return nn;
  no = 1;
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
  return nn = i() ? Object.assign : function(a, c) {
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
  }, nn;
}
var on, oo;
function Dn() {
  if (oo)
    return on;
  oo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return on = e, on;
}
var an, io;
function Jo() {
  return io || (io = 1, an = Function.call.bind(Object.prototype.hasOwnProperty)), an;
}
var sn, ao;
function Oa() {
  if (ao)
    return sn;
  ao = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Dn(), r = {}, n = Jo();
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
  }, sn = i, sn;
}
var cn, so;
function Sa() {
  if (so)
    return cn;
  so = 1;
  var e = Xo(), t = Ta(), r = Dn(), n = Jo(), i = Oa(), a = function() {
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
  return cn = function(s, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f(O) {
      var I = O && (d && O[d] || O[u]);
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
      instanceOf: S,
      node: F(),
      objectOf: w,
      oneOf: x,
      oneOfType: A,
      shape: X,
      exact: U
    };
    function b(O, I) {
      return O === I ? O !== 0 || 1 / O === 1 / I : O !== O && I !== I;
    }
    function g(O, I) {
      this.message = O, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function y(O) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, B = 0;
      function Y(G, j, q, z, J, V, N) {
        if (z = z || p, V = V || q, N !== r) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = z + ":" + q;
            !I[Q] && B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[Q] = !0, B++);
          }
        }
        return j[q] == null ? G ? j[q] === null ? new g("The " + J + " `" + V + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new g("The " + J + " `" + V + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : O(j, q, z, J, V);
      }
      var L = Y.bind(null, !1);
      return L.isRequired = Y.bind(null, !0), L;
    }
    function E(O) {
      function I(B, Y, L, G, j, q) {
        var z = B[Y], J = ie(z);
        if (J !== O) {
          var V = ee(z);
          return new g(
            "Invalid " + G + " `" + j + "` of type " + ("`" + V + "` supplied to `" + L + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return y(I);
    }
    function R() {
      return y(c);
    }
    function $(O) {
      function I(B, Y, L, G, j) {
        if (typeof O != "function")
          return new g("Property `" + j + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var q = B[Y];
        if (!Array.isArray(q)) {
          var z = ie(q);
          return new g("Invalid " + G + " `" + j + "` of type " + ("`" + z + "` supplied to `" + L + "`, expected an array."));
        }
        for (var J = 0; J < q.length; J++) {
          var V = O(q, J, L, G, j + "[" + J + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return y(I);
    }
    function D() {
      function O(I, B, Y, L, G) {
        var j = I[B];
        if (!s(j)) {
          var q = ie(j);
          return new g("Invalid " + L + " `" + G + "` of type " + ("`" + q + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(O);
    }
    function _() {
      function O(I, B, Y, L, G) {
        var j = I[B];
        if (!e.isValidElementType(j)) {
          var q = ie(j);
          return new g("Invalid " + L + " `" + G + "` of type " + ("`" + q + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(O);
    }
    function S(O) {
      function I(B, Y, L, G, j) {
        if (!(B[Y] instanceof O)) {
          var q = O.name || p, z = he(B[Y]);
          return new g("Invalid " + G + " `" + j + "` of type " + ("`" + z + "` supplied to `" + L + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return y(I);
    }
    function x(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function I(B, Y, L, G, j) {
        for (var q = B[Y], z = 0; z < O.length; z++)
          if (b(q, O[z]))
            return null;
        var J = JSON.stringify(O, function(N, T) {
          var Q = ee(T);
          return Q === "symbol" ? String(T) : T;
        });
        return new g("Invalid " + G + " `" + j + "` of value `" + String(q) + "` " + ("supplied to `" + L + "`, expected one of " + J + "."));
      }
      return y(I);
    }
    function w(O) {
      function I(B, Y, L, G, j) {
        if (typeof O != "function")
          return new g("Property `" + j + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var q = B[Y], z = ie(q);
        if (z !== "object")
          return new g("Invalid " + G + " `" + j + "` of type " + ("`" + z + "` supplied to `" + L + "`, expected an object."));
        for (var J in q)
          if (n(q, J)) {
            var V = O(q, J, L, G, j + "." + J, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return y(I);
    }
    function A(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var I = 0; I < O.length; I++) {
        var B = O[I];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _e(B) + " at index " + I + "."
          ), c;
      }
      function Y(L, G, j, q, z) {
        for (var J = [], V = 0; V < O.length; V++) {
          var N = O[V], T = N(L, G, j, q, z, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && J.push(T.data.expectedType);
        }
        var Q = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new g("Invalid " + q + " `" + z + "` supplied to " + ("`" + j + "`" + Q + "."));
      }
      return y(Y);
    }
    function F() {
      function O(I, B, Y, L, G) {
        return re(I[B]) ? null : new g("Invalid " + L + " `" + G + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return y(O);
    }
    function M(O, I, B, Y, L) {
      return new g(
        (O || "React class") + ": " + I + " type `" + B + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function X(O) {
      function I(B, Y, L, G, j) {
        var q = B[Y], z = ie(q);
        if (z !== "object")
          return new g("Invalid " + G + " `" + j + "` of type `" + z + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var J in O) {
          var V = O[J];
          if (typeof V != "function")
            return M(L, G, j, J, ee(V));
          var N = V(q, J, L, G, j + "." + J, r);
          if (N)
            return N;
        }
        return null;
      }
      return y(I);
    }
    function U(O) {
      function I(B, Y, L, G, j) {
        var q = B[Y], z = ie(q);
        if (z !== "object")
          return new g("Invalid " + G + " `" + j + "` of type `" + z + "` " + ("supplied to `" + L + "`, expected `object`."));
        var J = t({}, B[Y], O);
        for (var V in J) {
          var N = O[V];
          if (n(O, V) && typeof N != "function")
            return M(L, G, j, V, ee(N));
          if (!N)
            return new g(
              "Invalid " + G + " `" + j + "` key `" + V + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(B[Y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var T = N(q, V, L, G, j + "." + V, r);
          if (T)
            return T;
        }
        return null;
      }
      return y(I);
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
          var I = f(O);
          if (I) {
            var B = I.call(O), Y;
            if (I !== O.entries) {
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
    function _e(O) {
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
      return !O.constructor || !O.constructor.name ? p : O.constructor.name;
    }
    return v.checkPropTypes = i, v.resetWarningCache = i.resetWarningCache, v.PropTypes = v, v;
  }, cn;
}
var ln, co;
function Ra() {
  if (co)
    return ln;
  co = 1;
  var e = Dn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ln = function() {
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
  }, ln;
}
if (process.env.NODE_ENV !== "production") {
  var Pa = Xo(), $a = !0;
  o.exports = Sa()(Pa.isElement, $a);
} else
  o.exports = Ra()();
const Da = (e) => {
  var t, r;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((r = e == null ? void 0 : e.type) == null ? void 0 : r.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ie = (e, t) => Se.toArray(e).filter((r) => t.indexOf(Da(r)) !== -1);
var Vr = { exports: {} }, Zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function Ca() {
  if (lo)
    return Zt;
  lo = 1;
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
  return Zt.Fragment = r, Zt.jsx = c, Zt.jsxs = c, Zt;
}
var Qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function Na() {
  return uo || (uo = 1, process.env.NODE_ENV !== "production" && function() {
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
        for (var P = arguments.length, k = new Array(P > 1 ? P - 1 : 0), H = 1; H < P; H++)
          k[H - 1] = arguments[H];
        $("error", h, k);
      }
    }
    function $(h, P, k) {
      {
        var H = E.ReactDebugCurrentFrame, ae = H.getStackAddendum();
        ae !== "" && (P += "%s", k = k.concat([ae]));
        var ue = k.map(function(ne) {
          return String(ne);
        });
        ue.unshift("Warning: " + P), Function.prototype.apply.call(console[h], console, ue);
      }
    }
    var D = !1, _ = !1, S = !1, x = !1, w = !1, A;
    A = Symbol.for("react.module.reference");
    function F(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === n || h === a || w || h === i || h === d || h === u || x || h === v || D || _ || S || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === f || h.$$typeof === c || h.$$typeof === s || h.$$typeof === l || h.$$typeof === A || h.getModuleId !== void 0));
    }
    function M(h, P, k) {
      var H = h.displayName;
      if (H)
        return H;
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
            var H = h.displayName || null;
            return H !== null ? H : U(h.type) || "Memo";
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
    var re = Object.assign, de = 0, ie, ee, _e, he, O, I, B;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function L() {
      {
        if (de === 0) {
          ie = console.log, ee = console.info, _e = console.warn, he = console.error, O = console.group, I = console.groupCollapsed, B = console.groupEnd;
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
              value: _e
            }),
            error: re({}, h, {
              value: he
            }),
            group: re({}, h, {
              value: O
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
            var H = ae.stack.trim().match(/\n( *(at )?)/);
            q = H && H[1] || "";
          }
        return `
` + q + h;
      }
    }
    var J = !1, V;
    {
      var N = typeof WeakMap == "function" ? WeakMap : Map;
      V = new N();
    }
    function T(h, P) {
      if (!h || J)
        return "";
      {
        var k = V.get(h);
        if (k !== void 0)
          return k;
      }
      var H;
      J = !0;
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
            } catch (ft) {
              H = ft;
            }
            Reflect.construct(h, [], ne);
          } else {
            try {
              ne.call();
            } catch (ft) {
              H = ft;
            }
            h.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            H = ft;
          }
          h();
        }
      } catch (ft) {
        if (ft && H && typeof ft.stack == "string") {
          for (var te = ft.stack.split(`
`), Ae = H.stack.split(`
`), be = te.length - 1, ye = Ae.length - 1; be >= 1 && ye >= 0 && te[be] !== Ae[ye]; )
            ye--;
          for (; be >= 1 && ye >= 0; be--, ye--)
            if (te[be] !== Ae[ye]) {
              if (be !== 1 || ye !== 1)
                do
                  if (be--, ye--, ye < 0 || te[be] !== Ae[ye]) {
                    var ze = `
` + te[be].replace(" at new ", " at ");
                    return h.displayName && ze.includes("<anonymous>") && (ze = ze.replace("<anonymous>", h.displayName)), typeof h == "function" && V.set(h, ze), ze;
                  }
                while (be >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        J = !1, j.current = ue, G(), Error.prepareStackTrace = ae;
      }
      var It = h ? h.displayName || h.name : "", Qn = It ? z(It) : "";
      return typeof h == "function" && V.set(h, Qn), Qn;
    }
    function Q(h, P, k) {
      return T(h, !1);
    }
    function me(h) {
      var P = h.prototype;
      return !!(P && P.isReactComponent);
    }
    function Ee(h, P, k) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return T(h, me(h));
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
            return Ee(h.type, P, k);
          case p: {
            var H = h, ae = H._payload, ue = H._init;
            try {
              return Ee(ue(ae), P, k);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, ot = {}, lt = E.ReactDebugCurrentFrame;
    function it(h) {
      if (h) {
        var P = h._owner, k = Ee(h.type, h._source, P ? P.type : null);
        lt.setExtraStackFrame(k);
      } else
        lt.setExtraStackFrame(null);
    }
    function Te(h, P, k, H, ae) {
      {
        var ue = Function.call.bind($e);
        for (var ne in h)
          if (ue(h, ne)) {
            var te = void 0;
            try {
              if (typeof h[ne] != "function") {
                var Ae = Error((H || "React class") + ": " + k + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ae.name = "Invariant Violation", Ae;
              }
              te = h[ne](P, ne, H, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              te = be;
            }
            te && !(te instanceof Error) && (it(ae), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", k, ne, typeof te), it(null)), te instanceof Error && !(te.message in ot) && (ot[te.message] = !0, it(ae), R("Failed %s type: %s", k, te.message), it(null));
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
    function pt(h) {
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
      if (pt(h))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _t(h)), xt(h);
    }
    var Ne = E.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, Kt, Ve;
    Ve = {};
    function Er(h) {
      if ($e.call(h, "ref")) {
        var P = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Zr(h) {
      if ($e.call(h, "key")) {
        var P = Object.getOwnPropertyDescriptor(h, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Qr(h, P) {
      if (typeof h.ref == "string" && Ne.current && P && Ne.current.stateNode !== P) {
        var k = U(Ne.current.type);
        Ve[k] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Ne.current.type), h.ref), Ve[k] = !0);
      }
    }
    function Tr(h, P) {
      {
        var k = function() {
          vt || (vt = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function en(h, P) {
      {
        var k = function() {
          Kt || (Kt = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Or = function(h, P, k, H, ae, ue, ne) {
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
        value: H
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function tn(h, P, k, H, ae) {
      {
        var ue, ne = {}, te = null, Ae = null;
        k !== void 0 && (wt(k), te = "" + k), Zr(P) && (wt(P.key), te = "" + P.key), Er(P) && (Ae = P.ref, Qr(P, ae));
        for (ue in P)
          $e.call(P, ue) && !Qe.hasOwnProperty(ue) && (ne[ue] = P[ue]);
        if (h && h.defaultProps) {
          var be = h.defaultProps;
          for (ue in be)
            ne[ue] === void 0 && (ne[ue] = be[ue]);
        }
        if (te || Ae) {
          var ye = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          te && Tr(ne, ye), Ae && en(ne, ye);
        }
        return Or(h, te, Ae, ae, H, Ne.current, ne);
      }
    }
    var Xt = E.ReactCurrentOwner, Sr = E.ReactDebugCurrentFrame;
    function ve(h) {
      if (h) {
        var P = h._owner, k = Ee(h.type, h._source, P ? P.type : null);
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
        if (Xt.current) {
          var h = U(Xt.current.type);
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
    function qe(h) {
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
    function ut(h, P) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var k = qe(P);
        if (Fe[k])
          return;
        Fe[k] = !0;
        var H = "";
        h && h._owner && h._owner !== Xt.current && (H = " It was passed a child from " + U(h._owner.type) + "."), ve(h), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, H), ve(null);
      }
    }
    function je(h, P) {
      {
        if (typeof h != "object")
          return;
        if (Ze(h))
          for (var k = 0; k < h.length; k++) {
            var H = h[k];
            Pe(H) && ut(H, P);
          }
        else if (Pe(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ae = y(h);
          if (typeof ae == "function" && ae !== h.entries)
            for (var ue = ae.call(h), ne; !(ne = ue.next()).done; )
              Pe(ne.value) && ut(ne.value, P);
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
          var H = U(P);
          Te(k, h.props, "prop", H, h);
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
          var H = P[k];
          if (H !== "children" && H !== "key") {
            ve(h), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), ve(null);
            break;
          }
        }
        h.ref !== null && (ve(h), R("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function Ot(h, P, k, H, ae, ue) {
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
        var ye = tn(h, P, k, ae, ue);
        if (ye == null)
          return ye;
        if (ne) {
          var ze = P.children;
          if (ze !== void 0)
            if (H)
              if (Ze(ze)) {
                for (var It = 0; It < ze.length; It++)
                  je(ze[It], h);
                Object.freeze && Object.freeze(ze);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(ze, h);
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
    Qt.Fragment = n, Qt.jsx = St, Qt.jsxs = Rt;
  }()), Qt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ca() : e.exports = Na();
})(Vr);
const dt = Vr.exports.Fragment, m = Vr.exports.jsx, C = Vr.exports.jsxs, Aa = ({
  children: e,
  allowMultiple: t,
  defaultIndex: r
}) => {
  const [n, i] = K(), a = (s) => {
    t ? n.includes(s) ? i(n.filter((l) => l !== s)) : i([...n, s]) : i(s);
  };
  W(() => (i(t ? r || [] : r != null ? r : null), () => {
    i(null);
  }), [t, r]);
  const c = Se.map(e, (s, l) => He(s) ? we(s, {
    ...s.props,
    id: l,
    isOpen: n,
    onToggle: a
  }) : null);
  return /* @__PURE__ */ m("div", {
    children: Ie(c, ["AccordionItem"])
  });
};
Aa.propTypes = {
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
}, Zo = ({
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
Zo.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  onExpanded: o.exports.func,
  isExpanded: o.exports.bool,
  expanded: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  __TYPE: fe("AccordionButton")
};
Zo.defaultProps = {
  __TYPE: "AccordionButton"
};
const Qo = ({
  children: e,
  id: t,
  isOpen: r,
  onToggle: n,
  addClass: i
}) => {
  const a = () => n(t), c = () => typeof r == "number" ? r === t : Array.isArray(r) ? !!r.includes(t) : !1, s = Se.map(e, (l) => He(l) ? l.props.__TYPE === "AccordionButton" ? we(l, {
    ...l.props,
    id: t,
    onExpanded: a,
    isExpanded: c()
  }) : we(l, {
    ...l.props,
    id: t,
    isExpanded: c()
  }) : null);
  return /* @__PURE__ */ m("div", {
    className: `${Ft["c-accordion__item"]} ${i != null ? i : ""}`,
    children: Ie(s, ["AccordionButton", "AccordionPanel"])
  });
};
Qo.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  id: o.exports.number,
  isOpen: o.exports.oneOfType([o.exports.array, o.exports.number]),
  onToggle: o.exports.func,
  addClass: o.exports.string,
  __TYPE: fe("AccordionItem")
};
Qo.defaultProps = {
  __TYPE: "AccordionItem"
};
const ei = ({
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
ei.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  isExpanded: o.exports.bool,
  addClass: o.exports.string,
  __TYPE: fe("AccordionPanel")
};
ei.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Cn = [
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
], fo = {
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
    className: `${fo["c-icon"]} ${fo[`c-${t}`]} ${r != null ? r : ""}`,
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
  __TYPE: fe("Icon")
};
De.defaultProps = {
  size: "normal",
  name: "play",
  __TYPE: "Icon"
};
const er = {
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
    onClick: d,
    children: u,
    addClass: f,
    ...p
  } = e;
  return /* @__PURE__ */ C("button", {
    ref: t,
    className: `${er["c-button"]} ${er[`c-${c}`]} ${er[`c-${n}`]} ${i && i.name && s ? er["c-round"] : ""} 
        ${i && i.position === "right" ? er["c-reverse"] : ""} ${f != null ? f : ""}`,
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
}, ti = ({
  src: e,
  format: t,
  a11y: r,
  size: n,
  type: i,
  addClass: a,
  ...c
}) => {
  const [s, l] = K(!1), d = Z(), u = Object.freeze({
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
  }) : /* @__PURE__ */ C(dt, {
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
ti.defaultProps = {
  a11y: !1,
  type: "Bar"
};
ti.propTypes = {
  src: o.exports.string,
  a11y: o.exports.bool,
  format: o.exports.string,
  size: o.exports.oneOf(["small"]),
  type: o.exports.oneOf(["Bar", "Button"]),
  addClass: o.exports.string
};
var Ia = typeof Pr == "object" && Pr && Pr.Object === Object && Pr, ka = Ia, Ma = ka, Fa = typeof self == "object" && self && self.Object === Object && self, ja = Ma || Fa || Function("return this")(), La = ja, Ba = La, Ya = Ba.Symbol, Nn = Ya;
function Va(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var qa = Va, za = Array.isArray, Wa = za, po = Nn, ri = Object.prototype, Ua = ri.hasOwnProperty, Ga = ri.toString, tr = po ? po.toStringTag : void 0;
function Ha(e) {
  var t = Ua.call(e, tr), r = e[tr];
  try {
    e[tr] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ga.call(e);
  return n && (t ? e[tr] = r : delete e[tr]), i;
}
var Ka = Ha, Xa = Object.prototype, Ja = Xa.toString;
function Za(e) {
  return Ja.call(e);
}
var Qa = Za, vo = Nn, es = Ka, ts = Qa, rs = "[object Null]", ns = "[object Undefined]", ho = vo ? vo.toStringTag : void 0;
function os(e) {
  return e == null ? e === void 0 ? ns : rs : ho && ho in Object(e) ? es(e) : ts(e);
}
var is = os;
function as(e) {
  return e != null && typeof e == "object";
}
var ss = as, cs = is, ls = ss, us = "[object Symbol]";
function fs(e) {
  return typeof e == "symbol" || ls(e) && cs(e) == us;
}
var ds = fs, mo = Nn, ps = qa, vs = Wa, hs = ds, ms = 1 / 0, go = mo ? mo.prototype : void 0, bo = go ? go.toString : void 0;
function ni(e) {
  if (typeof e == "string")
    return e;
  if (vs(e))
    return ps(e, ni) + "";
  if (hs(e))
    return bo ? bo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ms ? "-0" : t;
}
var gs = ni, bs = gs;
function ys(e) {
  return e == null ? "" : bs(e);
}
var _s = ys, xs = _s, ws = 0;
function Es(e) {
  var t = ++ws;
  return xs(e) + t;
}
var bt = Es;
const rr = {
  "c-input": "_c-input_lqmp1_1",
  "c-input__box": "_c-input__box_lqmp1_24",
  "c-input__check": "_c-input__check_lqmp1_38",
  "c-input__icon": "_c-input__icon_lqmp1_38"
}, oi = ct(({
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
  const [v, b] = K(!1), g = le(() => e || bt(`ui-${r}`), [e, r]), y = Object.freeze({
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
    className: `${rr["c-input"]} u-flex ${c != null ? c : ""}`,
    "data-state": i,
    "data-type": r,
    "data-element": u,
    ...f,
    children: [/* @__PURE__ */ C("div", {
      className: rr["c-input__box"],
      children: [/* @__PURE__ */ m("input", {
        id: g,
        ref: p,
        type: r,
        name: t,
        value: a,
        checked: v,
        "data-state": i,
        className: rr["c-input__check"],
        onChange: E,
        ...s && {
          disabled: !0
        }
      }), /* @__PURE__ */ m("div", {
        className: rr["c-input__icon"],
        children: y[i] && /* @__PURE__ */ m(De, {
          name: y[i]
        })
      })]
    }), /* @__PURE__ */ m("span", {
      className: rr["c-input__label"],
      children: n
    })]
  });
});
oi.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  __TYPE: "CheckBox"
};
oi.propTypes = {
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
const Ts = ({
  legend: e,
  children: t,
  onChecked: r,
  addClass: n
}) => {
  const [i, a] = K([]), c = (l) => {
    i.filter((u) => u.id === l.id).length ? a([...i.filter((u) => u.id !== l.id)]) : a([...i, {
      ...l
    }]);
  };
  W(() => {
    r && r(i);
  }, [i]);
  const s = Se.map(t, (l) => He(l) ? l.props.__TYPE === "CheckBox" ? we(l, {
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
Ts.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  legend: o.exports.string,
  onChecked: o.exports.func,
  addClass: o.exports.string
};
const Os = "_col_wu095_1", Ss = {
  col: Os
}, Rs = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ m("div", {
  ref: r,
  className: `${Ss.col} ${e != null ? e : ""}`,
  ...t
}));
Rs.propTypes = {
  addClass: o.exports.string
};
const Ps = {
  "c-content": "_c-content_u325r_1"
}, $s = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("section", {
  className: `${Ps["c-content"]} animate__animated animate__fadeInDown animate__faster ${t != null ? t : ""}`,
  ...r,
  children: e
});
$s.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string
};
const qr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ut(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function An(e) {
  return "nodeType" in e;
}
function ke(e) {
  var t, r;
  return e ? Ut(e) ? e : An(e) && (t = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? t : window : window;
}
function In(e) {
  const {
    Document: t
  } = ke(e);
  return e instanceof t;
}
function mr(e) {
  return Ut(e) ? !1 : e instanceof ke(e).HTMLElement;
}
function Ds(e) {
  return e instanceof ke(e).SVGElement;
}
function Gt(e) {
  return e ? Ut(e) ? e.document : An(e) ? In(e) ? e : mr(e) ? e.ownerDocument : document : document : document;
}
const at = qr ? Uo : W;
function zr(e) {
  const t = Z(e);
  return at(() => {
    t.current = e;
  }), Ce(function(...r) {
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Cs() {
  const e = Z(null), t = Ce((n, i) => {
    e.current = setInterval(n, i);
  }, []), r = Ce(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, r];
}
function ur(e, t = [e]) {
  const r = Z(e);
  return at(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function gr(e, t) {
  const r = Z();
  return le(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    [...t]
  );
}
function Ir(e) {
  const t = zr(e), r = Z(null), n = Ce(
    (i) => {
      i !== r.current && (t == null || t(i, r.current)), r.current = i;
    },
    []
  );
  return [r, n];
}
function kr(e) {
  const t = Z();
  return W(() => {
    t.current = e;
  }, [e]), t.current;
}
let un = {};
function Wr(e, t) {
  return le(() => {
    if (t)
      return t;
    const r = un[e] == null ? 0 : un[e] + 1;
    return un[e] = r, `${e}-${r}`;
  }, [e, t]);
}
function ii(e) {
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
const Lt = /* @__PURE__ */ ii(1), Mr = /* @__PURE__ */ ii(-1);
function Ns(e) {
  return "clientX" in e && "clientY" in e;
}
function kn(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = ke(e.target);
  return t && e instanceof t;
}
function As(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = ke(e.target);
  return t && e instanceof t;
}
function Fr(e) {
  if (As(e)) {
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
  return Ns(e) ? {
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
}), yo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Is(e) {
  return e.matches(yo) ? e : e.querySelector(yo);
}
const ks = {
  display: "none"
};
function Ms(e) {
  let {
    id: t,
    value: r
  } = e;
  return /* @__PURE__ */ m("div", {
    id: t,
    style: ks,
    children: r
  });
}
const Fs = {
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
function js(e) {
  let {
    id: t,
    announcement: r
  } = e;
  return /* @__PURE__ */ m("div", {
    id: t,
    style: Fs,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0,
    children: r
  });
}
function Ls() {
  const [e, t] = K("");
  return {
    announce: Ce((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const ai = /* @__PURE__ */ Ke(null);
function Bs(e) {
  const t = ge(ai);
  W(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Ys() {
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
const Vs = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, qs = {
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
function zs(e) {
  let {
    announcements: t = qs,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: i = Vs
  } = e;
  const {
    announce: a,
    announcement: c
  } = Ls(), s = Wr("DndLiveRegion"), [l, d] = K(!1);
  if (W(() => {
    d(!0);
  }, []), Bs(le(() => ({
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
  const u = /* @__PURE__ */ C(dt, {
    children: [/* @__PURE__ */ m(Ms, {
      id: n,
      value: i.draggable
    }), /* @__PURE__ */ m(js, {
      id: s,
      announcement: c
    })]
  });
  return r ? Ko(u, r) : u;
}
var xe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(xe || (xe = {}));
function jr() {
}
function fn(e, t) {
  return le(
    () => ({
      sensor: e,
      options: t != null ? t : {}
    }),
    [e, t]
  );
}
function Ws() {
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
function Us(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Gs(e, t) {
  const r = Fr(e);
  if (!r)
    return "0 0";
  const n = {
    x: (r.x - t.left) / t.width * 100,
    y: (r.y - t.top) / t.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function Hs(e, t) {
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
function Ks(e, t) {
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
function _o(e) {
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
function si(e, t) {
  if (!e || e.length === 0)
    return null;
  const [r] = e;
  return t ? r[t] : r;
}
const Xs = (e) => {
  let {
    collisionRect: t,
    droppableRects: r,
    droppableContainers: n
  } = e;
  const i = _o(t), a = [];
  for (const c of n) {
    const {
      id: s
    } = c, l = r.get(s);
    if (l) {
      const d = _o(l), u = i.reduce((p, v, b) => p + Us(d[b], v), 0), f = Number((u / 4).toFixed(4));
      a.push({
        id: s,
        data: {
          droppableContainer: c,
          value: f
        }
      });
    }
  }
  return a.sort(Hs);
};
function Js(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), c = i - n, s = a - r;
  if (n < i && r < a) {
    const l = t.width * t.height, d = e.width * e.height, u = c * s, f = u / (l + d - u);
    return Number(f.toFixed(4));
  }
  return 0;
}
const Zs = (e) => {
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
      const l = Js(s, t);
      l > 0 && i.push({
        id: c,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return i.sort(Ks);
};
function Qs(e, t, r) {
  return {
    ...e,
    scaleX: t && r ? t.width / r.width : 1,
    scaleY: t && r ? t.height / r.height : 1
  };
}
function ci(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : rt;
}
function ec(e) {
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
const tc = /* @__PURE__ */ ec(1);
function li(e) {
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
function rc(e, t, r) {
  const n = li(t);
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
const nc = {
  ignoreTransform: !1
};
function br(e, t) {
  t === void 0 && (t = nc);
  let r = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      getComputedStyle: d
    } = ke(e), {
      transform: u,
      transformOrigin: f
    } = d(e);
    u && (r = rc(r, u, f));
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
function xo(e) {
  return br(e, {
    ignoreTransform: !0
  });
}
function oc(e) {
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
function ic(e, t) {
  return t === void 0 && (t = ke(e).getComputedStyle(e)), t.position === "fixed";
}
function ac(e, t) {
  t === void 0 && (t = ke(e).getComputedStyle(e));
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
    if (!mr(i) || Ds(i) || r.includes(i))
      return r;
    const {
      getComputedStyle: a
    } = ke(i), c = a(i);
    return i !== e && ac(i, c) && r.push(i), ic(i, c) ? r : n(i.parentNode);
  }
  return e ? n(e) : r;
}
function ui(e) {
  const [t] = Mn(e, 1);
  return t != null ? t : null;
}
function dn(e) {
  return !qr || !e ? null : Ut(e) ? e : An(e) ? In(e) || e === Gt(e).scrollingElement ? window : mr(e) ? e : null : null;
}
function fi(e) {
  return Ut(e) ? e.scrollX : e.scrollLeft;
}
function di(e) {
  return Ut(e) ? e.scrollY : e.scrollTop;
}
function En(e) {
  return {
    x: fi(e),
    y: di(e)
  };
}
var Oe;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Oe || (Oe = {}));
function pi(e) {
  return !qr || !e ? !1 : e === document.scrollingElement;
}
function vi(e) {
  const t = {
    x: 0,
    y: 0
  }, r = pi(e) ? {
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
const sc = {
  x: 0.2,
  y: 0.2
};
function cc(e, t, r, n, i) {
  let {
    top: a,
    left: c,
    right: s,
    bottom: l
  } = r;
  n === void 0 && (n = 10), i === void 0 && (i = sc);
  const {
    isTop: d,
    isBottom: u,
    isLeft: f,
    isRight: p
  } = vi(e), v = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !d && a <= t.top + g.height ? (v.y = Oe.Backward, b.y = n * Math.abs((t.top + g.height - a) / g.height)) : !u && l >= t.bottom - g.height && (v.y = Oe.Forward, b.y = n * Math.abs((t.bottom - g.height - l) / g.height)), !p && s >= t.right - g.width ? (v.x = Oe.Forward, b.x = n * Math.abs((t.right - g.width - s) / g.width)) : !f && c <= t.left + g.width && (v.x = Oe.Backward, b.x = n * Math.abs((t.left + g.width - c) / g.width)), {
    direction: v,
    speed: b
  };
}
function lc(e) {
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
function hi(e) {
  return e.reduce((t, r) => Lt(t, En(r)), rt);
}
function uc(e) {
  return e.reduce((t, r) => t + fi(r), 0);
}
function fc(e) {
  return e.reduce((t, r) => t + di(r), 0);
}
function mi(e, t) {
  if (t === void 0 && (t = br), !e)
    return;
  const {
    top: r,
    left: n,
    bottom: i,
    right: a
  } = t(e);
  !ui(e) || (i <= 0 || a <= 0 || r >= window.innerHeight || n >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const dc = [["x", ["left", "right"], uc], ["y", ["top", "bottom"], fc]];
class Fn {
  constructor(t, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = Mn(r), i = hi(n);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, c, s] of dc)
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
function pc(e) {
  const {
    EventTarget: t
  } = ke(e);
  return e instanceof t ? e : Gt(e);
}
function pn(e, t) {
  const r = Math.abs(e.x), n = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(r ** 2 + n ** 2) > t : "x" in t && "y" in t ? r > t.x && n > t.y : "x" in t ? r > t.x : "y" in t ? n > t.y : !1;
}
var We;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(We || (We = {}));
function wo(e) {
  e.preventDefault();
}
function vc(e) {
  e.stopPropagation();
}
var oe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(oe || (oe = {}));
const gi = {
  start: [oe.Space, oe.Enter],
  cancel: [oe.Esc],
  end: [oe.Space, oe.Enter]
}, hc = (e, t) => {
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
    this.props = t, this.listeners = new or(Gt(r)), this.windowListeners = new or(ke(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(We.Resize, this.handleCancel), this.windowListeners.add(We.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(We.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: r
    } = this.props, n = t.node.current;
    n && mi(n), r(rt);
  }
  handleKeyDown(t) {
    if (kn(t)) {
      const {
        active: r,
        context: n,
        options: i
      } = this.props, {
        keyboardCodes: a = gi,
        coordinateGetter: c = hc,
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
            minScroll: S
          } = vi(g), x = lc(g), w = {
            x: Math.min(y === oe.Right ? x.right - x.width / 2 : x.right, Math.max(y === oe.Right ? x.left : x.left + x.width / 2, f.x)),
            y: Math.min(y === oe.Down ? x.bottom - x.height / 2 : x.bottom, Math.max(y === oe.Down ? x.top : x.top + x.height / 2, f.y))
          }, A = y === oe.Right && !R || y === oe.Left && !$, F = y === oe.Down && !D || y === oe.Up && !E;
          if (A && w.x !== f.x) {
            const M = g.scrollLeft + p.x, X = y === oe.Right && M <= _.x || y === oe.Left && M >= S.x;
            if (X && !p.y) {
              g.scrollTo({
                left: M,
                behavior: s
              });
              return;
            }
            X ? v.x = g.scrollLeft - M : v.x = y === oe.Right ? g.scrollLeft - _.x : g.scrollLeft - S.x, v.x && g.scrollBy({
              left: -v.x,
              behavior: s
            });
            break;
          } else if (F && w.y !== f.y) {
            const M = g.scrollTop + p.y, X = y === oe.Down && M <= _.y || y === oe.Up && M >= S.y;
            if (X && !p.x) {
              g.scrollTo({
                top: M,
                behavior: s
              });
              return;
            }
            X ? v.y = g.scrollTop - M : v.y = y === oe.Down ? g.scrollTop - _.y : g.scrollTop - S.y, v.y && g.scrollBy({
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
jn.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, r) => {
    let {
      keyboardCodes: n = gi,
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
function Eo(e) {
  return Boolean(e && "distance" in e);
}
function To(e) {
  return Boolean(e && "delay" in e);
}
class Ln {
  constructor(t, r, n) {
    var i;
    n === void 0 && (n = pc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = r;
    const {
      event: a
    } = t, {
      target: c
    } = a;
    this.props = t, this.events = r, this.document = Gt(c), this.documentListeners = new or(this.document), this.listeners = new or(n), this.windowListeners = new or(ke(c)), this.initialCoordinates = (i = Fr(a)) != null ? i : rt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(We.Resize, this.handleCancel), this.windowListeners.add(We.DragStart, wo), this.windowListeners.add(We.VisibilityChange, this.handleCancel), this.windowListeners.add(We.ContextMenu, wo), this.documentListeners.add(We.Keydown, this.handleKeydown), r) {
      if (Eo(r))
        return;
      if (To(r)) {
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
    t && (this.activated = !0, this.documentListeners.add(We.Click, vc, {
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
    const l = (r = Fr(t)) != null ? r : rt, d = Mr(i, l);
    if (!n && s) {
      if (To(s))
        return pn(d, s.tolerance) ? this.handleCancel() : void 0;
      if (Eo(s))
        return s.tolerance != null && pn(d, s.tolerance) ? this.handleCancel() : pn(d, s.distance) ? this.handleStart() : void 0;
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
const mc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class bi extends Ln {
  constructor(t) {
    const {
      event: r
    } = t, n = Gt(r.target);
    super(t, mc, n);
  }
}
bi.activators = [{
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
const gc = {
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
class yi extends Ln {
  constructor(t) {
    super(t, gc, Gt(t.event.target));
  }
}
yi.activators = [{
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
const vn = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class _i extends Ln {
  constructor(t) {
    super(t, vn);
  }
  static setup() {
    return window.addEventListener(vn.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(vn.move.name, t);
    };
    function t() {
    }
  }
}
_i.activators = [{
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
function bc(e) {
  let {
    acceleration: t,
    activator: r = ir.Pointer,
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
  const v = _c({
    delta: f,
    disabled: !a
  }), [b, g] = Cs(), y = Z({
    x: 0,
    y: 0
  }), E = Z({
    x: 0,
    y: 0
  }), R = le(() => {
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
  }, [r, i, l]), $ = Z(null), D = Ce(() => {
    const S = $.current;
    if (!S)
      return;
    const x = y.current.x * E.current.x, w = y.current.y * E.current.y;
    S.scrollBy(x, w);
  }, []), _ = le(() => s === Lr.TreeOrder ? [...d].reverse() : d, [s, d]);
  W(
    () => {
      if (!a || !d.length || !R) {
        g();
        return;
      }
      for (const S of _) {
        if ((n == null ? void 0 : n(S)) === !1)
          continue;
        const x = d.indexOf(S), w = u[x];
        if (!w)
          continue;
        const {
          direction: A,
          speed: F
        } = cc(S, w, R, t, p);
        for (const M of ["x", "y"])
          v[M][A[M]] || (F[M] = 0, A[M] = 0);
        if (F.x > 0 || F.y > 0) {
          g(), $.current = S, b(D, c), y.current = F, E.current = A;
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
const yc = {
  x: {
    [Oe.Backward]: !1,
    [Oe.Forward]: !1
  },
  y: {
    [Oe.Backward]: !1,
    [Oe.Forward]: !1
  }
};
function _c(e) {
  let {
    delta: t,
    disabled: r
  } = e;
  const n = kr(t);
  return gr((i) => {
    if (r || !n || !i)
      return yc;
    const a = {
      x: Math.sign(t.x - n.x),
      y: Math.sign(t.y - n.y)
    };
    return {
      x: {
        [Oe.Backward]: i.x[Oe.Backward] || a.x === -1,
        [Oe.Forward]: i.x[Oe.Forward] || a.x === 1
      },
      y: {
        [Oe.Backward]: i.y[Oe.Backward] || a.y === -1,
        [Oe.Forward]: i.y[Oe.Forward] || a.y === 1
      }
    };
  }, [r, t, n]);
}
function xc(e, t) {
  const r = t !== null ? e.get(t) : void 0, n = r ? r.node.current : null;
  return gr((i) => {
    var a;
    return t === null ? null : (a = n != null ? n : i) != null ? a : null;
  }, [n, t]);
}
function wc(e, t) {
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
var fr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(fr || (fr = {}));
var On;
(function(e) {
  e.Optimized = "optimized";
})(On || (On = {}));
const Oo = /* @__PURE__ */ new Map();
function Ec(e, t) {
  let {
    dragging: r,
    dependencies: n,
    config: i
  } = t;
  const [a, c] = K(null), s = a != null, {
    frequency: l,
    measure: d,
    strategy: u
  } = i, f = Z(e), p = E(), v = ur(p), b = Ce(function(R) {
    R === void 0 && (R = []), !v.current && c(($) => $ ? $.concat(R) : R);
  }, [v]), g = Z(null), y = gr((R) => {
    if (p && !r)
      return Oo;
    const $ = a;
    if (!R || R === Oo || f.current !== e || $ != null) {
      const D = /* @__PURE__ */ new Map();
      for (let _ of e) {
        if (!_)
          continue;
        if ($ && $.length > 0 && !$.includes(_.id) && _.rect.current) {
          D.set(_.id, _.rect.current);
          continue;
        }
        const S = _.node.current, x = S ? new Fn(d(S), S) : null;
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
      case fr.Always:
        return !1;
      case fr.BeforeDragging:
        return r;
      default:
        return !r;
    }
  }
}
function Bn(e, t) {
  return gr((r) => e ? r || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Tc(e, t) {
  return Bn(e, t);
}
function Oc(e) {
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
function Sc(e) {
  return new Fn(br(e), e);
}
function So(e, t, r) {
  t === void 0 && (t = Sc);
  const [n, i] = $n(s, null), a = Oc({
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
  return at(() => {
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
function Rc(e) {
  const t = Bn(e);
  return ci(e, t);
}
const Ro = [];
function Pc(e) {
  const t = Z(e), r = gr((n) => e ? n && n !== Ro && e && t.current && e.parentNode === t.current.parentNode ? n : Mn(e) : Ro, [e]);
  return W(() => {
    t.current = e;
  }, [e]), r;
}
function $c(e) {
  const [t, r] = K(null), n = Z(e), i = Ce((a) => {
    const c = dn(a.target);
    !c || r((s) => s ? (s.set(c, En(c)), new Map(s)) : null);
  }, []);
  return W(() => {
    const a = n.current;
    if (e !== a) {
      c(a);
      const s = e.map((l) => {
        const d = dn(l);
        return d ? (d.addEventListener("scroll", i, {
          passive: !0
        }), [d, En(d)]) : null;
      }).filter((l) => l != null);
      r(s.length ? new Map(s) : null), n.current = e;
    }
    return () => {
      c(e), c(a);
    };
    function c(s) {
      s.forEach((l) => {
        const d = dn(l);
        d == null || d.removeEventListener("scroll", i);
      });
    }
  }, [i, e]), le(() => e.length ? t ? Array.from(t.values()).reduce((a, c) => Lt(a, c), rt) : hi(e) : rt, [e, t]);
}
function Po(e, t) {
  t === void 0 && (t = []);
  const r = Z(null);
  return W(
    () => {
      r.current = null;
    },
    t
  ), W(() => {
    const n = e !== rt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? Mr(e, r.current) : rt;
}
function Dc(e) {
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
function Cc(e, t) {
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
function xi(e) {
  return le(() => e ? oc(e) : null, [e]);
}
const hn = [];
function Nc(e, t) {
  t === void 0 && (t = br);
  const [r] = e, n = xi(r ? ke(r) : null), [i, a] = $n(s, hn), c = Ur({
    callback: a
  });
  return e.length > 0 && i === hn && a(), at(() => {
    e.length ? e.forEach((l) => c == null ? void 0 : c.observe(l)) : (c == null || c.disconnect(), a());
  }, [e]), i;
  function s() {
    return e.length ? e.map((l) => pi(l) ? n : new Fn(t(l), l)) : hn;
  }
}
function wi(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return mr(t) ? t : e;
}
function Ac(e) {
  let {
    measure: t
  } = e;
  const [r, n] = K(null), i = Ce((d) => {
    for (const {
      target: u
    } of d)
      if (mr(u)) {
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
    const u = wi(d);
    a == null || a.disconnect(), u && (a == null || a.observe(u)), n(u ? t(u) : null);
  }, [t, a]), [s, l] = Ir(c);
  return le(() => ({
    nodeRef: s,
    rect: r,
    setRef: l
  }), [r, s, l]);
}
const Ic = [{
  sensor: bi,
  options: {}
}, {
  sensor: jn,
  options: {}
}], kc = {
  current: {}
}, Dr = {
  draggable: {
    measure: xo
  },
  droppable: {
    measure: xo,
    strategy: fr.WhileDragging,
    frequency: On.Optimized
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
const Mc = {
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
    setRef: jr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Dr,
  measureDroppableContainers: jr,
  windowRect: null,
  measuringScheduled: !1
}, Ei = {
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
}, yr = /* @__PURE__ */ Ke(Ei), Ti = /* @__PURE__ */ Ke(Mc);
function Fc() {
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
function jc(e, t) {
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
      } = r, i = new ar(e.droppable.containers);
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
    case xe.UnregisterDroppable: {
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
function Lc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: i
  } = ge(yr), a = kr(n), c = kr(r == null ? void 0 : r.id);
  return W(() => {
    if (!t && !n && a && c != null) {
      if (!kn(a) || document.activeElement === a.target)
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
          const f = Is(u);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [n, t, i, c, a]), null;
}
function Oi(e, t) {
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
function Yc(e) {
  let {
    activeNode: t,
    measure: r,
    initialRect: n,
    config: i = !0
  } = e;
  const a = Z(!1), {
    x: c,
    y: s
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  at(() => {
    if (!c && !s || !t) {
      a.current = !1;
      return;
    }
    if (a.current || !n)
      return;
    const d = t == null ? void 0 : t.node.current;
    if (!d || d.isConnected === !1)
      return;
    const u = r(d), f = ci(u, n);
    if (c || (f.x = 0), s || (f.y = 0), a.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const p = ui(d);
      p && p.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, c, s, n, r]);
}
const Gr = /* @__PURE__ */ Ke({
  ...rt,
  scaleX: 1,
  scaleY: 1
});
var mt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(mt || (mt = {}));
const Vc = /* @__PURE__ */ Go(function(t) {
  var r, n, i, a;
  let {
    id: c,
    accessibility: s,
    autoScroll: l = !0,
    children: d,
    sensors: u = Ic,
    collisionDetection: f = Zs,
    measuring: p,
    modifiers: v,
    ...b
  } = t;
  const g = $n(jc, void 0, Fc), [y, E] = g, [R, $] = Ys(), [D, _] = K(mt.Uninitialized), S = D === mt.Initialized, {
    draggable: {
      active: x,
      nodes: w,
      translate: A
    },
    droppable: {
      containers: F
    }
  } = y, M = x ? w.get(x) : null, X = Z({
    initial: null,
    translated: null
  }), U = le(() => {
    var ve;
    return x != null ? {
      id: x,
      data: (ve = M == null ? void 0 : M.data) != null ? ve : kc,
      rect: X
    } : null;
  }, [x, M]), re = Z(null), [de, ie] = K(null), [ee, _e] = K(null), he = ur(b, Object.values(b)), O = Wr("DndDescribedBy", c), I = le(() => F.getEnabled(), [F]), B = Bc(p), {
    droppableRects: Y,
    measureDroppableContainers: L,
    measuringScheduled: G
  } = Ec(I, {
    dragging: S,
    dependencies: [A.x, A.y],
    config: B.droppable
  }), j = xc(w, x), q = le(() => ee ? Fr(ee) : null, [ee]), z = Sr(), J = Tc(j, B.draggable.measure);
  Yc({
    activeNode: x ? w.get(x) : null,
    config: z.layoutShiftCompensation,
    initialRect: J,
    measure: B.draggable.measure
  });
  const V = So(j, B.draggable.measure, J), N = So(j ? j.parentElement : null), T = Z({
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
  }), Q = F.getNodeFor((r = T.current.over) == null ? void 0 : r.id), me = Ac({
    measure: B.dragOverlay.measure
  }), Ee = (n = me.nodeRef.current) != null ? n : j, $e = S ? (i = me.rect) != null ? i : V : null, ot = Boolean(me.nodeRef.current && me.rect), lt = Rc(ot ? null : V), it = xi(Ee ? ke(Ee) : null), Te = Pc(S ? Q != null ? Q : j : null), Je = Nc(Te), Ze = Oi(v, {
    transform: {
      x: A.x - lt.x,
      y: A.y - lt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ee,
    active: U,
    activeNodeRect: V,
    containerNodeRect: N,
    draggingNodeRect: $e,
    over: T.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Te,
    scrollableAncestorRects: Je,
    windowRect: it
  }), _t = q ? Lt(q, A) : null, pt = $c(Te), xt = Po(pt), wt = Po(pt, [V]), Ne = Lt(Ze, xt), Qe = $e ? tc($e, Ze) : null, vt = U && Qe ? f({
    active: U,
    collisionRect: Qe,
    droppableRects: Y,
    droppableContainers: I,
    pointerCoordinates: _t
  }) : null, Kt = si(vt, "id"), [Ve, Er] = K(null), Zr = ot ? Ze : Lt(Ze, wt), Qr = Qs(Zr, (a = Ve == null ? void 0 : Ve.rect) != null ? a : null, V), Tr = Ce(
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
      const Fe = ve.nativeEvent, qe = new Pe({
        active: re.current,
        activeNode: Me,
        event: Fe,
        options: et,
        context: T,
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
          Jt(() => {
            Ot == null || Ot(At), _(mt.Initializing), E({
              type: xe.DragStart,
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
            type: xe.DragMove,
            coordinates: je
          });
        },
        onEnd: ut(xe.DragEnd),
        onCancel: ut(xe.DragCancel)
      });
      Jt(() => {
        ie(qe), _e(ve.nativeEvent);
      });
      function ut(je) {
        return async function() {
          const {
            active: Tt,
            collisions: Ot,
            over: At,
            scrollAdjustedTranslate: Rr
          } = T.current;
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
            }, je === xe.DragEnd && typeof Rt == "function" && await Promise.resolve(Rt(St)) && (je = xe.DragCancel);
          }
          re.current = null, Jt(() => {
            E({
              type: je
            }), _(mt.Uninitialized), Er(null), ie(null), _e(null);
            const Rt = je === xe.DragEnd ? "onDragEnd" : "onDragCancel";
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
  ), en = Ce((ve, Re) => (Pe, et) => {
    const Me = Pe.nativeEvent, Fe = w.get(et);
    if (re.current !== null || !Fe || Me.dndKit || Me.defaultPrevented)
      return;
    const qe = {
      active: Fe
    };
    ve(Pe, Re.options, qe) === !0 && (Me.dndKit = {
      capturedBy: Re.sensor
    }, re.current = et, Tr(Pe, Re));
  }, [w, Tr]), Or = wc(u, en);
  Dc(u), at(() => {
    V && D === mt.Initializing && _(mt.Initialized);
  }, [V, D]), W(
    () => {
      const {
        onDragMove: ve
      } = he.current, {
        active: Re,
        activatorEvent: Pe,
        collisions: et,
        over: Me
      } = T.current;
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
      Jt(() => {
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
      } = T.current;
      if (!ve || re.current == null || !Re || !Me)
        return;
      const {
        onDragOver: Fe
      } = he.current, qe = et.get(Kt), ut = qe && qe.rect.current ? {
        id: qe.id,
        rect: qe.rect.current,
        data: qe.data,
        disabled: qe.disabled
      } : null, je = {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        delta: {
          x: Me.x,
          y: Me.y
        },
        over: ut
      };
      Jt(() => {
        Er(ut), Fe == null || Fe(je), R({
          type: "onDragOver",
          event: je
        });
      });
    },
    [Kt]
  ), at(() => {
    T.current = {
      activatorEvent: ee,
      active: U,
      activeNode: j,
      collisionRect: Qe,
      collisions: vt,
      droppableRects: Y,
      draggableNodes: w,
      draggingNode: Ee,
      draggingNodeRect: $e,
      droppableContainers: F,
      over: Ve,
      scrollableAncestors: Te,
      scrollAdjustedTranslate: Ne
    }, X.current = {
      initial: $e,
      translated: Qe
    };
  }, [U, j, vt, Qe, w, Ee, $e, Y, F, Ve, Te, Ne]), bc({
    ...z,
    delta: A,
    draggingRect: Qe,
    pointerCoordinates: _t,
    scrollableAncestors: Te,
    scrollableAncestorRects: Je
  });
  const tn = le(() => ({
    active: U,
    activeNode: j,
    activeNodeRect: V,
    activatorEvent: ee,
    collisions: vt,
    containerNodeRect: N,
    dragOverlay: me,
    draggableNodes: w,
    droppableContainers: F,
    droppableRects: Y,
    over: Ve,
    measureDroppableContainers: L,
    scrollableAncestors: Te,
    scrollableAncestorRects: Je,
    measuringConfiguration: B,
    measuringScheduled: G,
    windowRect: it
  }), [U, j, V, ee, vt, N, me, w, F, Y, Ve, L, Te, Je, B, G, it]), Xt = le(() => ({
    activatorEvent: ee,
    activators: Or,
    active: U,
    activeNodeRect: V,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: E,
    draggableNodes: w,
    over: Ve,
    measureDroppableContainers: L
  }), [ee, Or, U, V, E, O, w, Ve, L]);
  return /* @__PURE__ */ C(ai.Provider, {
    value: $,
    children: [/* @__PURE__ */ C(yr.Provider, {
      value: Xt,
      children: [/* @__PURE__ */ m(Ti.Provider, {
        value: tn,
        children: /* @__PURE__ */ m(Gr.Provider, {
          value: Qr,
          children: d
        })
      }), /* @__PURE__ */ m(Lc, {
        disabled: (s == null ? void 0 : s.restoreFocus) === !1
      })]
    }), /* @__PURE__ */ m(zs, {
      ...s,
      hiddenTextDescribedById: O
    })]
  });
  function Sr() {
    const ve = (de == null ? void 0 : de.autoScrollEnabled) === !1, Re = typeof l == "object" ? l.enabled === !1 : l === !1, Pe = S && !ve && !Re;
    return typeof l == "object" ? {
      ...l,
      enabled: Pe
    } : {
      enabled: Pe
    };
  }
}), qc = /* @__PURE__ */ Ke(null), $o = "button", zc = "Droppable";
function Wc(e) {
  let {
    id: t,
    data: r,
    disabled: n = !1,
    attributes: i
  } = e;
  const a = Wr(zc), {
    activators: c,
    activatorEvent: s,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: u,
    draggableNodes: f,
    over: p
  } = ge(yr), {
    role: v = $o,
    roleDescription: b = "draggable",
    tabIndex: g = 0
  } = i != null ? i : {}, y = (l == null ? void 0 : l.id) === t, E = ge(y ? Gr : qc), [R, $] = Ir(), [D, _] = Ir(), S = Cc(c, t), x = ur(r);
  at(
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
    "aria-pressed": y && v === $o ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": u.draggable
  }), [n, v, g, y, b, u.draggable]);
  return {
    active: l,
    activatorEvent: s,
    activeNodeRect: d,
    attributes: w,
    isDragging: y,
    listeners: n ? void 0 : S,
    node: R,
    over: p,
    setNodeRef: $,
    setActivatorNodeRef: _,
    transform: E
  };
}
function Uc() {
  return ge(Ti);
}
const Gc = "Droppable", Hc = {
  timeout: 25
};
function Si(e) {
  let {
    data: t,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: i
  } = e;
  const a = Wr(Gc), {
    active: c,
    dispatch: s,
    over: l,
    measureDroppableContainers: d
  } = ge(yr), u = Z({
    disabled: r
  }), f = Z(!1), p = Z(null), v = Z(null), {
    disabled: b,
    updateMeasurementsFor: g,
    timeout: y
  } = {
    ...Hc,
    ...i
  }, E = ur(g != null ? g : n), R = Ce(
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
  }, [$]), [_, S] = Ir(D), x = ur(t);
  return W(() => {
    !$ || !_.current || ($.disconnect(), f.current = !1, $.observe(_.current));
  }, [_, $]), at(
    () => (s({
      type: xe.RegisterDroppable,
      element: {
        id: n,
        key: a,
        disabled: r,
        node: _,
        rect: p,
        data: x
      }
    }), () => s({
      type: xe.UnregisterDroppable,
      key: a,
      id: n
    })),
    [n]
  ), W(() => {
    r !== u.current.disabled && (s({
      type: xe.SetDroppableDisabled,
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
    setNodeRef: S
  };
}
function Kc(e) {
  let {
    animation: t,
    children: r
  } = e;
  const [n, i] = K(null), [a, c] = K(null), s = kr(r);
  return !r && !n && s && i(s), at(() => {
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
  }, [t, n, a]), /* @__PURE__ */ C(dt, {
    children: [r, n ? we(n, {
      ref: c
    }) : null]
  });
}
const Xc = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Jc(e) {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ m(yr.Provider, {
    value: Ei,
    children: /* @__PURE__ */ m(Gr.Provider, {
      value: Xc,
      children: t
    })
  });
}
const Zc = {
  position: "fixed",
  touchAction: "none"
}, Qc = (e) => kn(e) ? "transform 250ms ease" : void 0, el = /* @__PURE__ */ ct((e, t) => {
  let {
    as: r,
    activatorEvent: n,
    adjustScale: i,
    children: a,
    className: c,
    rect: s,
    style: l,
    transform: d,
    transition: u = Qc
  } = e;
  if (!s)
    return null;
  const f = i ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, p = {
    ...Zc,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: Bt.Transform.toString(f),
    transformOrigin: i && n ? Gs(n, s) : void 0,
    transition: typeof u == "function" ? u(n) : u,
    ...l
  };
  return Yr.createElement(r, {
    className: c,
    style: p,
    ref: t
  }, a);
}), tl = (e) => (t) => {
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
}, rl = (e) => {
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
}, nl = {
  duration: 250,
  easing: "ease",
  keyframes: rl,
  sideEffects: /* @__PURE__ */ tl({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function ol(e) {
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
    const d = wi(c);
    if (!d)
      return;
    const {
      transform: u
    } = ke(c).getComputedStyle(c), f = li(u);
    if (!f)
      return;
    const p = typeof t == "function" ? t : il(t);
    return mi(l, i.draggable.measure), p({
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
function il(e) {
  const {
    duration: t,
    easing: r,
    sideEffects: n,
    keyframes: i
  } = {
    ...nl,
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
let Do = 0;
function al(e) {
  return le(() => {
    if (e != null)
      return Do++, Do;
  }, [e]);
}
const sl = /* @__PURE__ */ Yr.memo((e) => {
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
  } = Uc(), S = ge(Gr), x = al(f == null ? void 0 : f.id), w = Oi(c, {
    activatorEvent: u,
    active: f,
    activeNodeRect: p,
    containerNodeRect: v,
    draggingNodeRect: y.rect,
    over: E,
    overlayNodeRect: y.rect,
    scrollableAncestors: $,
    scrollableAncestorRects: D,
    transform: S,
    windowRect: _
  }), A = Bn(p), F = ol({
    config: n,
    draggableNodes: b,
    droppableContainers: g,
    measuringConfiguration: R
  }), M = A ? y.setRef : void 0;
  return /* @__PURE__ */ m(Jc, {
    children: /* @__PURE__ */ m(Kc, {
      animation: F,
      children: f && x ? /* @__PURE__ */ m(el, {
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
}), cl = ({
  transform: e
}) => ({
  ...e,
  y: 0
}), ll = ({
  transform: e
}) => ({
  ...e,
  x: 0
}), ul = [oe.Down, oe.Right, oe.Up, oe.Left], fl = (e, { context: { active: t, droppableRects: r, droppableContainers: n, collisionRect: i } }) => {
  var a;
  if (ul.includes(e.code)) {
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
    const l = Xs({
      active: t,
      collisionRect: i,
      droppableRects: r,
      droppableContainers: s,
      pointerCoordinates: null
    }), d = si(l, "id");
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
}, dl = "_pop_19oe0_1", pl = "_pulse_19oe0_1", Ht = {
  "c-droppable": "_c-droppable_19oe0_1",
  "c-droppable--active": "_c-droppable--active_19oe0_20",
  "c-draggable": "_c-draggable_19oe0_25",
  "c-draggable--active": "_c-draggable--active_19oe0_54",
  pop: dl,
  pulse: pl
}, Ri = Ke(), Mt = (e, t) => Se.map(e, (r) => {
  var n;
  if (!!He(r) && !!r.props) {
    if (((n = r == null ? void 0 : r.props) == null ? void 0 : n.__TYPE) === t)
      return r;
    if (r.props.children)
      return Mt(r.props.children, t);
  }
}), vl = {
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
}, Pi = ({
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
  const [d, u] = K([]), [f, p] = K(null), [v, b] = K(() => g());
  function g() {
    return [...Mt(e, "droppable"), ...Mt(e, "general-draggable")].reduce((x, w) => ({
      ...x,
      [w.props.id]: w.props.children ? [...Mt(w.props.children, "draggable").map((A) => A.props.id)] : []
    }), {});
  }
  const y = Object.freeze({
    restrictToVerticalAxis: ll,
    restrictToHorizontalAxis: cl
  }), E = Ws(fn(yi), fn(_i), fn(jn, {
    coordinateGetter: fl
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
  }, _ = (x) => Se.map(x, (w) => {
    if (!w.props)
      return w;
    if (w.props.__TYPE !== "draggable")
      return w.props.id in v && v[w.props.id].length > 0 ? we(w, {
        ...w.props
      }, [...v[w.props.id].map((A) => Mt(e, "draggable").filter((F) => F.props.id === A)).flat()]) : w.props.children ? we(w, {
        ...w.props,
        children: _(w.props.children)
      }) : w;
  }), S = () => {
    const x = Mt(e, "draggable").filter((w) => w.props.id === f).reduce((w, A) => ({
      ...w,
      ...A.props
    }), {});
    return Ho((x == null ? void 0 : x.element) || "div", {
      className: `${Ht["c-draggable"]} ${x == null ? void 0 : x.addClass}`
    }, [x.children]);
  };
  return W(() => {
    d.length > 0 && r && r(d);
  }, [d, r]), W(() => {
    i && b(() => g());
  }, [i]), /* @__PURE__ */ m(Ri.Provider, {
    value: {
      listId: d,
      propValidate: a,
      validate: n,
      isDragging: f
    },
    children: /* @__PURE__ */ C(Vc, {
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
      children: [_(e), /* @__PURE__ */ m(sl, {
        children: S()
      })]
    })
  });
};
Pi.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: vl
};
Pi.propTypes = {
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
const $i = ({
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
  } = ge(Ri), {
    attributes: b,
    listeners: g,
    setNodeRef: y,
    transform: E
  } = Wc({
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
$i.defaultProps = {
  __TYPE: "draggable",
  dragging: Ht["c-draggable--active"],
  disabledDefaultAttributes: !1
};
$i.propTypes = {
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
const Di = ({
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
  } = Si({
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
Di.defaultProps = {
  __TYPE: "droppable",
  over: Ht["c-droppable--active"]
};
Di.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]),
  id: o.exports.string.isRequired,
  validate: o.exports.array.isRequired,
  addClass: o.exports.string,
  over: o.exports.string,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: fe("droppable")
};
const Ci = ({
  children: e,
  addClass: t,
  id: r,
  label: n,
  element: i,
  ...a
}) => {
  const c = i || "div", {
    setNodeRef: s
  } = Si({
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
Ci.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  id: o.exports.string.isRequired,
  label: o.exports.string.isRequired,
  element: o.exports.string,
  __TYPE: fe("general-draggable")
};
Ci.defaultProps = {
  __TYPE: "general-draggable",
  id: bt("unique-id-general-"),
  label: "contendor inicial"
};
const ff = ({
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
}), Co = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, Ni = ({
  url: e,
  alt: t,
  title: r,
  width: n,
  addClass: i,
  noCaption: a,
  ...c
}) => {
  const [s, l] = K(!1), d = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, u = (p) => l(p), f = s ? d : `${e}`;
  return /* @__PURE__ */ C("figure", {
    className: `${Co["c-image"]} ${i != null ? i : ""}`,
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
      className: Co["c-image__figcaption"],
      children: /* @__PURE__ */ C("p", {
        children: [/* @__PURE__ */ C("strong", {
          children: [r, "\xA0"]
        }), t]
      })
    })]
  });
};
Ni.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
Ni.propTypes = {
  url: o.exports.string,
  alt: o.exports.string,
  title: o.exports.string,
  width: o.exports.string,
  addClass: o.exports.string,
  noCaption: o.exports.bool
};
const dr = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, Ai = ct(({
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
  const [p, v] = K(r || ""), b = le(() => e || bt("c-input-"), [e]), g = ({
    target: y
  }) => {
    u && u({
      id: b,
      value: y.value
    }), v(y.value);
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ C("label", {
    htmlFor: b,
    className: `${dr["c-label"]} ${a != null ? a : ""}`,
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
      className: dr["c-input"],
      ...d && {
        readOnly: d,
        "aria-readonly": d
      }
    })]
  }) : null;
});
Ai.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Ai.propTypes = {
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
const hl = ({
  children: e,
  onAllValue: t
}) => {
  const [r, n] = K([]), i = (s) => n([...r.filter((l) => l.id !== s.id), {
    ...s
  }]);
  W(() => {
    t && t(r);
  }, [r, t]);
  const a = (s, l, d) => Se.toArray(s).map((u) => u.props.__TYPE === l ? we(u, {
    ...u.props,
    ...d
  }) : u);
  return Se.map(e, (s) => {
    var l, d;
    return He(s) ? ((l = s == null ? void 0 : s.props) == null ? void 0 : l.__TYPE) === "InputStyle" ? we(s, {
      ...s.props,
      children: a(s.props.children, "Input", {
        onValue: i
      })
    }) : ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "Input" ? we(s, {
      ...s.props,
      onValue: i
    }) : s : null;
  });
};
hl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllValue: o.exports.func
};
const Ii = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${dr["c-input__wrapper-style"]} ${t != null ? t : ""}`,
  children: Ie(e, ["InputLeftAddon", "InputRightAddon", "Input"])
});
Ii.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: fe("InputStyle")
};
Ii.defaultProps = {
  __TYPE: "InputStyle"
};
const ki = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${dr["c-input__left-addon"]} ${t != null ? t : ""}`,
  children: e
});
ki.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: fe("InputLeftAddon")
};
ki.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const Mi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${dr["c-input__right-addon"]} ${t != null ? t : ""}`,
  children: e
});
Mi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node]),
  addClass: o.exports.string,
  __TYPE: fe("InputRightAddon")
};
Mi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const ml = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, gl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("kbd", {
  className: `${ml["c-kbd"]} ${t != null ? t : ""}`,
  ...r,
  children: e
});
gl.propTypes = {
  children: o.exports.string,
  addClass: o.exports.string
};
const Fi = ({
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
Fi.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Fi.propTypes = {
  children: o.exports.oneOfType([o.exports.string, o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  link: o.exports.string,
  isExternal: o.exports.bool,
  label: o.exports.string.isRequired
};
const ji = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, bl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ m("ul", {
  className: `${ji["c-List"]} ${t != null ? t : ""}`,
  ...r,
  children: Ie(e, ["ListItem"])
});
bl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const Li = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = Se.map(e, (a) => {
    var c;
    return ((c = a == null ? void 0 : a.props) == null ? void 0 : c.__TYPE) === "Icon" ? we(a, {
      ...a.props,
      addClass: ji["c-list-item__icon"]
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
Li.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  __TYPE: fe("ListItem")
};
Li.defaultProps = {
  __TYPE: "ListItem"
};
const yl = ({
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
yl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
const _l = ({
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
_l.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string
};
var mn = function() {
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
function gn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, r = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), n = function() {
    function d(u, f) {
      gn(this, d), this._inertManager = f, this._rootElement = u, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return mn(d, [{
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
      gn(this, d), this._node = u, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([f]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return mn(d, [{
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
      if (gn(this, d), !u)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = u, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(u.head || u.body || u.documentElement), u.readyState === "loading" ? u.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return mn(d, [{
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
const Yn = Ke(), xl = Object.freeze({
  ESC: 27
}), Bi = ({
  children: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n
}) => {
  const i = Z(), a = (d) => {
    const u = document.querySelector("#root");
    u.inert = d;
  }, c = (d) => {
    (d.keyCode || d.which) === xl.ESC && l();
  }, s = (d, u) => {
    i.current.classList.replace(d, u);
  }, l = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), a(!1), r(!t);
    }, 400), n && n.current.focus();
  };
  return W(() => {
    t && (a(!0), i.current && i.current.focus());
  }, [t]), /* @__PURE__ */ m(Yn.Provider, {
    value: {
      isOpen: t,
      onKeyDown: c,
      onCloseModal: l,
      refModal: i
    },
    children: /* @__PURE__ */ m(_r, {
      id: "js-modal",
      children: Ie(e, ["ModalContent", "ModalOverlay"])
    })
  });
};
Bi.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Bi.propTypes = {
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
}, Yi = ({
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
  } = ge(Yn), f = (v) => {
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
Yi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  label: o.exports.string.isRequired,
  onClick: o.exports.func,
  onKeyDown: o.exports.func,
  __TYPE: fe("ModalContent")
};
Yi.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const Vi = ({
  addClass: e,
  onClick: t
}) => {
  const {
    isOpen: r,
    onCloseModal: n
  } = ge(Yn), i = (a) => {
    t && typeof t == "function" && t(a), n();
  };
  return /* @__PURE__ */ m("div", {
    className: `${Cr["c-layout"]} ${e != null ? e : ""}`,
    onClick: i,
    hidden: !r
  });
};
Vi.propTypes = {
  addClass: o.exports.string,
  onClick: o.exports.func,
  __TYPE: fe("ModalOverlay")
};
Vi.defaultProps = {
  __TYPE: "ModalOverlay"
};
const Yt = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, Hr = Ke(), qi = ({
  children: e,
  addClass: t,
  keepWithinRange: r,
  defaultValue: n,
  min: i,
  max: a,
  step: c,
  onValue: s
}) => {
  const [l, d] = K(n || 0), u = () => {
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
qi.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  addClass: o.exports.string,
  max: o.exports.number,
  min: o.exports.number,
  defaultValue: o.exports.number,
  step: o.exports.number,
  onValue: o.exports.func,
  keepWithinRange: o.exports.bool
};
qi.defaultProps = {
  step: 1
};
const zi = ct(({
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
  } = ge(Hr), v = le(() => e || bt("c-number-input-"), [e]), b = Object.freeze({
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
zi.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
zi.propTypes = {
  id: o.exports.string,
  name: o.exports.string,
  label: o.exports.string,
  pattern: o.exports.string,
  addClass: o.exports.string,
  isLabelVisible: o.exports.bool,
  __TYPE: fe("NumberInputField")
};
const Wi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ m("div", {
  className: `${Yt["c-number-input__stepper"]} ${t != null ? t : ""}`,
  children: Ie(e, ["NumberIncrementStepper", "NumberDecrementStepper"])
});
Wi.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: fe("NumberInputStepper")
};
Wi.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Ui = ({
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
Ui.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: fe("NumberDecrementStepper"),
  label: o.exports.string
};
Ui.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Gi = ({
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
Gi.propTypes = {
  children: o.exports.oneOfType([o.exports.node, o.exports.element, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.element)]),
  addClass: o.exports.string,
  __TYPE: fe("NumberIncrementStepper"),
  label: o.exports.string
};
Gi.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const wl = (e) => {
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
  } = e, [p, v] = K(n), b = (x, w) => {
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
}, sr = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, El = Object.freeze({
  first: "primera",
  last: "\xFAltima",
  previous: "anterior",
  next: "siguiente"
}), Tl = (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}p\xE1gina ${t}` : `Ir a la ${El[e]} p\xE1gina`, Hi = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: r,
  ...n
}) => {
  const {
    items: i
  } = wl({
    ...n
  });
  return /* @__PURE__ */ m("nav", {
    className: `${r != null ? r : ""} ${sr["c-pagination"]}`,
    children: /* @__PURE__ */ m("ul", {
      className: sr["c-pagination__ul"],
      children: i.map((a, c) => /* @__PURE__ */ m("li", {
        children: e({
          ...a,
          "aria-label": t(a.type, a.page, a.selected)
        })
      }, `pagination-item-${c}`))
    })
  });
};
Hi.defaultProps = {
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
  getItemAriaLabel: Tl
};
Hi.propTypes = {
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
  const d = {
    previous: a.previous || "navigate_before",
    next: a.next || "navigate_next",
    last: a.last || "last_page",
    first: a.first || "first_page"
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? /* @__PURE__ */ m("div", {
    className: sr["c-pagination-item__ellipsis"],
    children: "..."
  }) : we(i, {
    disabled: n,
    className: `${sr["c-pagination-item"]} ${r != null ? r : ""} ${c ? sr["c-pagination-item--selected"] : ""}`,
    ...i.props,
    ...s
  }, [
    t === "page" && e,
    d ? /* @__PURE__ */ m(De, {
      name: d
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
const jt = {
  "c-panel": "_c-panel_swo2e_1",
  "c-section": "_c-section_swo2e_10",
  "c-navigation": "_c-navigation_swo2e_16",
  "c-navigation__item": "_c-navigation__item_swo2e_30",
  "c-navigation__section": "_c-navigation__section_swo2e_34",
  "c-navigation__button": "_c-navigation__button_swo2e_52"
}, Kr = Ke(), Ol = ({
  children: e,
  defaultIndex: t,
  addClass: r
}) => {
  const [n, i] = K(1), a = {
    index: [],
    counter: 0
  }, c = (d) => i(d), s = (d) => n === d;
  W(() => {
    t !== void 0 && i(t);
  }, [t]);
  const l = Se.map(e, (d) => He(d) ? d.props.__TYPE === "Section" ? (a.counter++, a.index.push(a.counter), we(d, {
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
Ol.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.arrayOf(o.exports.node), o.exports.node, o.exports.string]),
  defaultIndex: o.exports.number,
  addClass: o.exports.string
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
Ki.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  addClass: o.exports.string,
  __TYPE: fe("Section")
};
Ki.defaultProps = {
  __TYPE: "Section"
};
const Sl = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), Rl = (e, t, r) => e === "section" ? `${r ? "" : "Ir a la "}secci\xF3n ${t}` : `Ir a la ${Sl[e]} secci\xF3n`, Xi = ({
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
  } = ge(Kr), v = Z([]), b = Object.freeze({
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
  ], R = (S) => !v.current.includes(S) && S ? v.current = [...v.current, S] : v.current, $ = (S) => {
    const x = v.current[0], w = v.current[v.current.length - 1];
    if ((S.keyCode || S.which) === b.LEFT)
      if (S.target === x)
        w.focus();
      else {
        const A = v.current.indexOf(S.target) - 1;
        v.current[A].focus();
      }
    else if ((S.keyCode || S.which) === b.RIGHT)
      if (S.target === w)
        x.focus();
      else {
        const A = v.current.indexOf(S.target) + 1;
        v.current[A].focus();
      }
  }, D = (S) => {
    u(S), c !== void 0 && c(S, f.length);
  }, _ = E.map((S) => typeof S == "number" ? {
    onClick: (x) => {
      D(S);
    },
    type: "section",
    section: S,
    selected: d(S),
    ref: R,
    onKeyDown: $
  } : {
    onClick: () => {
      D(g[S]);
    },
    type: S,
    section: g[S],
    selected: !1,
    disabled: S === "next" ? p >= f.length : p <= 1
  });
  return W(() => {
    c !== void 0 && c(p, f.length);
  }, []), /* @__PURE__ */ C(dt, {
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
        section: S,
        type: x,
        selected: w,
        ...A
      }, F) => /* @__PURE__ */ m("li", {
        role: "presentation",
        className: jt["c-navigation__item"],
        children: x === "section" ? /* @__PURE__ */ m("button", {
          id: `navigation-section-tab-${S}`,
          role: "tab",
          tabIndex: `${w ? 0 : -1}`,
          "aria-selected": w,
          className: jt["c-navigation__section"],
          "aria-label": l(x, S, w),
          ...A
        }) : /* @__PURE__ */ m("button", {
          type: "button",
          className: `${jt["c-navigation__button"]}`,
          "aria-label": l(x, S, w),
          ...A,
          children: y[x] ? /* @__PURE__ */ m(De, {
            name: y[x]
          }, x) : null
        })
      }, `navigation-section-item-${F}`))
    })]
  });
};
Xi.propTypes = {
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
Xi.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next"
  },
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: Rl
};
const Pl = ({
  children: e,
  section: t,
  onClick: r
}) => {
  const {
    onToggle: n
  } = ge(Kr), i = (a) => {
    n(t), r && r(a);
  };
  return Se.map(e, (a) => we(a, {
    ...a.props,
    onClick: i
  }));
};
Pl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node]).isRequired,
  section: o.exports.number.isRequired,
  onClick: o.exports.func
};
const $l = {
  "c-paper": "_c-paper_1sbf6_1"
}, Dl = ({
  children: e,
  color: t,
  addClass: r,
  ...n
}) => {
  const i = Z(null);
  return Uo(() => {
    t && i.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ m("div", {
    ref: i,
    className: `${$l["c-paper"]} ${r != null ? r : ""}`,
    ...n,
    children: e
  });
};
Dl.propTypes = {
  children: o.exports.oneOfType([o.exports.element, o.exports.node, o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node)]),
  addClass: o.exports.string,
  color: o.exports.string
};
const Cl = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Nl = (e) => {
  document.body.append(e);
}, Al = (e) => {
  const t = Z(null);
  W(() => {
    const n = document.querySelector(`#${e}`), i = n || Cl(e);
    return n || Nl(i), i.append(t.current), () => {
      t.current.remove(), i.childElementCount || i.remove();
    };
  }, [e]);
  function r() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return r();
}, _r = ({
  children: e,
  id: t
}) => {
  const r = Al(t);
  return Ko(e, r);
};
_r.propTypes = {
  children: o.exports.any,
  id: o.exports.string.isRequired
};
const Il = "_row_1adiy_1", kl = {
  row: Il
}, Ml = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ m("div", {
  ref: r,
  className: `${kl.row} ${e != null ? e : ""}`,
  ...t
}));
Ml.propTypes = {
  addClass: o.exports.string
};
const bn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, Ji = ct(({
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
  const [f, p] = K(), v = le(() => t || bt("c-select-"), [t]), b = ({
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
      className: bn["c-select-wrapper"],
      children: [/* @__PURE__ */ C("select", {
        id: v,
        ref: u,
        name: v,
        value: f,
        defaultValue: "default",
        className: bn["c-select"],
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
        addClass: bn["c-select__icon"]
      })]
    })]
  });
});
Ji.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Ji.propTypes = {
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
const Fl = ({
  children: e,
  onAllSelect: t
}) => {
  const [r, n] = K([]), i = (c) => n([...r.filter((s) => s.id !== c.id), {
    ...c
  }]);
  return W(() => {
    t && t(r);
  }, [r, t]), Se.map(e, (c) => {
    var s;
    return He(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? we(c, {
      ...c.props,
      onChoise: i
    }) : c : null;
  });
};
Fl.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  onAllSelect: o.exports.func
};
const yn = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, No = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Zi = ct(({
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
  const [f, p] = K(!1), v = le(() => e || bt("c-input-"), [e]), b = ({
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
    ((y.keyCode || y.which) === No.SPACE || (y.keyCode || y.which) === No.ENTER) && p((E) => (d && d(E ? {
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
    className: `${yn["c-label"]} ${yn[`is-${r}`]}`,
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
      className: `${yn["c-switch"]} ${a != null ? a : ""}`,
      onChange: b,
      onKeyDown: g,
      ...c && {
        disabled: !0
      }
    })]
  });
});
Zi.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Zi.propTypes = {
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
const qn = Ke(), jl = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  ...n
}) => {
  const [i, a] = K(0), c = (l) => a(l), s = (l) => i === l;
  return W(() => {
    t !== void 0 && a(t);
  }, [t]), /* @__PURE__ */ m(qn.Provider, {
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
jl.propTypes = {
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
}, Qi = ({
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
  const d = Z(), {
    validation: u,
    onToggle: f
  } = ge(qn), p = u(t);
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
    className: `${pr["c-tab__button"]} u-flex ${n != null ? n : ""} ${p && r && r}`,
    ...l,
    children: [e, i && i(p)]
  });
};
Qi.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  selected: o.exports.string,
  addClass: o.exports.string,
  icon: o.exports.func,
  addNewRef: o.exports.func,
  onNavigation: o.exports.func,
  __TYPE: fe("Tab")
};
Qi.defaultProps = {
  __TYPE: "Tab"
};
const ea = ({
  children: e,
  addClass: t,
  label: r,
  orientation: n,
  __TYPE: i,
  ...a
}) => {
  const c = Z([]), s = (f) => c.current = [...c.current, f], l = Object.freeze({
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
  }, u = Se.map(e, (f, p) => He(f) ? we(f, {
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
    className: `${pr["c-tab__list"]} ${t != null ? t : ""}`,
    ...a,
    children: Ie(u, ["Tab"])
  });
};
ea.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  label: o.exports.string,
  orientation: o.exports.string,
  __TYPE: fe("TabList")
};
ea.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const ta = ({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...i
}) => {
  const {
    validation: a
  } = ge(qn), c = a(t);
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
ta.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  id: o.exports.number,
  addClass: o.exports.string,
  __TYPE: fe("TabPanel")
};
ta.defaultProps = {
  __TYPE: "TabPanel"
};
const ra = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const i = Se.map(e, (a, c) => He(a) ? we(a, {
    ...a.props,
    id: c
  }) : null);
  return /* @__PURE__ */ m("div", {
    className: `${pr["c-tab__panels"]} ${t != null ? t : ""}`,
    "data-type": r,
    ...n,
    children: Ie(i, ["TabPanel"])
  });
};
ra.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.element]),
  addClass: o.exports.string,
  __TYPE: fe("TabPanels")
};
ra.defaultProps = {
  __TYPE: "TabPanels"
};
const _n = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, na = ct(({
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
  const p = le(() => e || bt("c-input-"), [e]), v = ({
    target: b
  }) => {
    d && d({
      id: p,
      value: b.value
    });
  };
  return /* @__PURE__ */ C("label", {
    htmlFor: p,
    className: `${_n["c-label"]} ${a != null ? a : ""}`,
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
      className: `${_n["c-textarea"]} ${_n[`c-textarea--${r}`]}`,
      ...u,
      children: t
    })]
  });
});
na.defaultProps = {
  resize: "vertical",
  placeholder: "Here is a sample placeholder"
};
na.propTypes = {
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
const Ll = Go(({
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
Ll.propTypes = {
  children: o.exports.oneOfType([o.exports.array, o.exports.element]),
  theme: o.exports.object.isRequired
};
const zn = Ke(), oa = ({
  children: e,
  isVisible: t
}) => {
  const [r, n] = K(!1), i = Z(), a = () => n(!r), c = (s) => {
    i.current || (i.current = s);
  };
  return W(() => {
    t !== void 0 && n(t);
  }, [t]), /* @__PURE__ */ m(zn.Provider, {
    value: {
      isOpen: r,
      onOpen: a,
      setRefButton: c,
      refButton: i
    },
    children: Ie(e, ["ToggletipButton", "ToggletipContent"])
  });
};
oa.defaultProps = {
  isVisible: !1
};
oa.propTypes = {
  children: o.exports.arrayOf(o.exports.element),
  isVisible: o.exports.bool
};
const ia = ({
  children: e
}) => {
  const {
    onOpen: t,
    setRefButton: r
  } = ge(zn);
  if (Se.count(e) > 1)
    return null;
  const n = (i) => He(i) ? we(i, {
    ...i.props,
    ref: r,
    onClick: t
  }) : null;
  return Se.map(e, n);
};
ia.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.node), o.exports.arrayOf(o.exports.element), o.exports.element, o.exports.node]),
  __TYPE: fe("ToggletipButton")
};
ia.defaultProps = {
  __TYPE: "ToggletipButton"
};
var Ao = function(t) {
  return t.reduce(function(r, n) {
    var i = n[0], a = n[1];
    return r[i] = a, r;
  }, {});
}, Io = typeof window < "u" && window.document && window.document.createElement ? $t.useLayoutEffect : $t.useEffect, Le = "top", Ue = "bottom", Ge = "right", Be = "left", Xr = "auto", xr = [Le, Ue, Ge, Be], Vt = "start", vr = "end", Bl = "clippingParents", aa = "viewport", nr = "popper", Yl = "reference", ko = /* @__PURE__ */ xr.reduce(function(e, t) {
  return e.concat([t + "-" + Vt, t + "-" + vr]);
}, []), sa = /* @__PURE__ */ [].concat(xr, [Xr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vt, t + "-" + vr]);
}, []), Vl = "beforeRead", ql = "read", zl = "afterRead", Wl = "beforeMain", Ul = "main", Gl = "afterMain", Hl = "beforeWrite", Kl = "write", Xl = "afterWrite", Sn = [Vl, ql, zl, Wl, Ul, Gl, Hl, Kl, Xl];
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
function Ye(e) {
  var t = Xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Wn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Jl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !Ye(a) || !st(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(c) {
      var s = i[c];
      s === !1 ? a.removeAttribute(c) : a.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Zl(e) {
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
      !Ye(i) || !st(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Ql = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Jl,
  effect: Zl,
  requires: ["computeStyles"]
};
function tt(e) {
  return e.split("-")[0];
}
var Ct = Math.max, Br = Math.min, qt = Math.round;
function Rn() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ca() {
  return !/^((?!chrome|android).)*safari/i.test(Rn());
}
function zt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && Ye(e) && (i = e.offsetWidth > 0 && qt(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && qt(n.height) / e.offsetHeight || 1);
  var c = Nt(e) ? Xe(e) : window, s = c.visualViewport, l = !ca() && r, d = (n.left + (l && s ? s.offsetLeft : 0)) / i, u = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / i, p = n.height / a;
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
function Un(e) {
  var t = zt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function la(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Wn(r)) {
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
function eu(e) {
  return ["table", "td", "th"].indexOf(st(e)) >= 0;
}
function yt(e) {
  return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Jr(e) {
  return st(e) === "html" ? e : e.assignedSlot || e.parentNode || (Wn(e) ? e.host : null) || yt(e);
}
function Mo(e) {
  return !Ye(e) || nt(e).position === "fixed" ? null : e.offsetParent;
}
function tu(e) {
  var t = /firefox/i.test(Rn()), r = /Trident/i.test(Rn());
  if (r && Ye(e)) {
    var n = nt(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Jr(e);
  for (Wn(i) && (i = i.host); Ye(i) && ["html", "body"].indexOf(st(i)) < 0; ) {
    var a = nt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function wr(e) {
  for (var t = Xe(e), r = Mo(e); r && eu(r) && nt(r).position === "static"; )
    r = Mo(r);
  return r && (st(r) === "html" || st(r) === "body" && nt(r).position === "static") ? t : r || tu(e) || t;
}
function Gn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function cr(e, t, r) {
  return Ct(e, Br(t, r));
}
function ru(e, t, r) {
  var n = cr(e, t, r);
  return n > r ? r : n;
}
function ua() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function fa(e) {
  return Object.assign({}, ua(), e);
}
function da(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var nu = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, fa(typeof t != "number" ? t : da(t, xr));
};
function ou(e) {
  var t, r = e.state, n = e.name, i = e.options, a = r.elements.arrow, c = r.modifiersData.popperOffsets, s = tt(r.placement), l = Gn(s), d = [Be, Ge].indexOf(s) >= 0, u = d ? "height" : "width";
  if (!(!a || !c)) {
    var f = nu(i.padding, r), p = Un(a), v = l === "y" ? Le : Be, b = l === "y" ? Ue : Ge, g = r.rects.reference[u] + r.rects.reference[l] - c[l] - r.rects.popper[u], y = c[l] - r.rects.reference[l], E = wr(a), R = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, $ = g / 2 - y / 2, D = f[v], _ = R - p[u] - f[b], S = R / 2 - p[u] / 2 + $, x = cr(D, S, _), w = l;
    r.modifiersData[n] = (t = {}, t[w] = x, t.centerOffset = x - S, t);
  }
}
function iu(e) {
  var t = e.state, r = e.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  if (i != null && !(typeof i == "string" && (i = t.elements.popper.querySelector(i), !i))) {
    if (process.env.NODE_ENV !== "production" && (Ye(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !la(t.elements.popper, i)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = i;
  }
}
const au = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ou,
  effect: iu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Wt(e) {
  return e.split("-")[1];
}
var su = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function cu(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: qt(t * i) / i || 0,
    y: qt(r * i) / i || 0
  };
}
function Fo(e) {
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
    var S = wr(r), x = "clientHeight", w = "clientWidth";
    if (S === Xe(r) && (S = yt(r), nt(S).position !== "static" && s === "absolute" && (x = "scrollHeight", w = "scrollWidth")), S = S, i === Le || (i === Be || i === Ge) && a === vr) {
      D = Ue;
      var A = f && S === _ && _.visualViewport ? _.visualViewport.height : S[x];
      g -= A - n.height, g *= l ? 1 : -1;
    }
    if (i === Be || (i === Le || i === Ue) && a === vr) {
      $ = Ge;
      var F = f && S === _ && _.visualViewport ? _.visualViewport.width : S[w];
      v -= F - n.width, v *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, d && su), X = u === !0 ? cu({
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
function lu(e) {
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
    variation: Wt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Fo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Fo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const uu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: lu,
  data: {}
};
var $r = {
  passive: !0
};
function fu(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, c = n.resize, s = c === void 0 ? !0 : c, l = Xe(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, $r);
  }), s && l.addEventListener("resize", r.update, $r), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, $r);
    }), s && l.removeEventListener("resize", r.update, $r);
  };
}
const du = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: fu,
  data: {}
};
var pu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Nr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return pu[t];
  });
}
var vu = {
  start: "end",
  end: "start"
};
function jo(e) {
  return e.replace(/start|end/g, function(t) {
    return vu[t];
  });
}
function Hn(e) {
  var t = Xe(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Kn(e) {
  return zt(yt(e)).left + Hn(e).scrollLeft;
}
function hu(e, t) {
  var r = Xe(e), n = yt(e), i = r.visualViewport, a = n.clientWidth, c = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, c = i.height;
    var d = ca();
    (d || !d && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: s + Kn(e),
    y: l
  };
}
function mu(e) {
  var t, r = yt(e), n = Hn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ct(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), c = Ct(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Kn(e), l = -n.scrollTop;
  return nt(i || r).direction === "rtl" && (s += Ct(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: c,
    x: s,
    y: l
  };
}
function Xn(e) {
  var t = nt(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function pa(e) {
  return ["html", "body", "#document"].indexOf(st(e)) >= 0 ? e.ownerDocument.body : Ye(e) && Xn(e) ? e : pa(Jr(e));
}
function lr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = pa(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xe(n), c = i ? [a].concat(a.visualViewport || [], Xn(n) ? n : []) : n, s = t.concat(c);
  return i ? s : s.concat(lr(Jr(c)));
}
function Pn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function gu(e, t) {
  var r = zt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Lo(e, t, r) {
  return t === aa ? Pn(hu(e, r)) : Nt(t) ? gu(t, r) : Pn(mu(yt(e)));
}
function bu(e) {
  var t = lr(Jr(e)), r = ["absolute", "fixed"].indexOf(nt(e).position) >= 0, n = r && Ye(e) ? wr(e) : e;
  return Nt(n) ? t.filter(function(i) {
    return Nt(i) && la(i, n) && st(i) !== "body";
  }) : [];
}
function yu(e, t, r, n) {
  var i = t === "clippingParents" ? bu(e) : [].concat(t), a = [].concat(i, [r]), c = a[0], s = a.reduce(function(l, d) {
    var u = Lo(e, d, n);
    return l.top = Ct(u.top, l.top), l.right = Br(u.right, l.right), l.bottom = Br(u.bottom, l.bottom), l.left = Ct(u.left, l.left), l;
  }, Lo(e, c, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function va(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? tt(n) : null, a = n ? Wt(n) : null, c = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
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
    case Ge:
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
  var d = i ? Gn(i) : null;
  if (d != null) {
    var u = d === "y" ? "height" : "width";
    switch (a) {
      case Vt:
        l[d] = l[d] - (t[u] / 2 - r[u] / 2);
        break;
      case vr:
        l[d] = l[d] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function hr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, c = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? Bl : s, d = r.rootBoundary, u = d === void 0 ? aa : d, f = r.elementContext, p = f === void 0 ? nr : f, v = r.altBoundary, b = v === void 0 ? !1 : v, g = r.padding, y = g === void 0 ? 0 : g, E = fa(typeof y != "number" ? y : da(y, xr)), R = p === nr ? Yl : nr, $ = e.rects.popper, D = e.elements[b ? R : p], _ = yu(Nt(D) ? D : D.contextElement || yt(e.elements.popper), l, u, c), S = zt(e.elements.reference), x = va({
    reference: S,
    element: $,
    strategy: "absolute",
    placement: i
  }), w = Pn(Object.assign({}, $, x)), A = p === nr ? w : S, F = {
    top: _.top - A.top + E.top,
    bottom: A.bottom - _.bottom + E.bottom,
    left: _.left - A.left + E.left,
    right: A.right - _.right + E.right
  }, M = e.modifiersData.offset;
  if (p === nr && M) {
    var X = M[i];
    Object.keys(F).forEach(function(U) {
      var re = [Ge, Ue].indexOf(U) >= 0 ? 1 : -1, de = [Le, Ue].indexOf(U) >= 0 ? "y" : "x";
      F[U] += X[de] * re;
    });
  }
  return F;
}
function _u(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, c = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? sa : l, u = Wt(n), f = u ? s ? ko : ko.filter(function(b) {
    return Wt(b) === u;
  }) : xr, p = f.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var v = p.reduce(function(b, g) {
    return b[g] = hr(e, {
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
function xu(e) {
  if (tt(e) === Xr)
    return [];
  var t = Nr(e);
  return [jo(e), t, jo(t)];
}
function wu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !0 : c, l = r.fallbackPlacements, d = r.padding, u = r.boundary, f = r.rootBoundary, p = r.altBoundary, v = r.flipVariations, b = v === void 0 ? !0 : v, g = r.allowedAutoPlacements, y = t.options.placement, E = tt(y), R = E === y, $ = l || (R || !b ? [Nr(y)] : xu(y)), D = [y].concat($).reduce(function(L, G) {
      return L.concat(tt(G) === Xr ? _u(t, {
        placement: G,
        boundary: u,
        rootBoundary: f,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: g
      }) : G);
    }, []), _ = t.rects.reference, S = t.rects.popper, x = /* @__PURE__ */ new Map(), w = !0, A = D[0], F = 0; F < D.length; F++) {
      var M = D[F], X = tt(M), U = Wt(M) === Vt, re = [Le, Ue].indexOf(X) >= 0, de = re ? "width" : "height", ie = hr(t, {
        placement: M,
        boundary: u,
        rootBoundary: f,
        altBoundary: p,
        padding: d
      }), ee = re ? U ? Ge : Be : U ? Ue : Le;
      _[de] > S[de] && (ee = Nr(ee));
      var _e = Nr(ee), he = [];
      if (a && he.push(ie[X] <= 0), s && he.push(ie[ee] <= 0, ie[_e] <= 0), he.every(function(L) {
        return L;
      })) {
        A = M, w = !1;
        break;
      }
      x.set(M, he);
    }
    if (w)
      for (var O = b ? 3 : 1, I = function(G) {
        var j = D.find(function(q) {
          var z = x.get(q);
          if (z)
            return z.slice(0, G).every(function(J) {
              return J;
            });
        });
        if (j)
          return A = j, "break";
      }, B = O; B > 0; B--) {
        var Y = I(B);
        if (Y === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[n]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const Eu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Bo(e, t, r) {
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
function Yo(e) {
  return [Le, Ge, Ue, Be].some(function(t) {
    return e[t] >= 0;
  });
}
function Tu(e) {
  var t = e.state, r = e.name, n = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, c = hr(t, {
    elementContext: "reference"
  }), s = hr(t, {
    altBoundary: !0
  }), l = Bo(c, n), d = Bo(s, i, a), u = Yo(l), f = Yo(d);
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
const Ou = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Tu
};
function Su(e, t, r) {
  var n = tt(e), i = [Be, Le].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, c = a[0], s = a[1];
  return c = c || 0, s = (s || 0) * i, [Be, Ge].indexOf(n) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function Ru(e) {
  var t = e.state, r = e.options, n = e.name, i = r.offset, a = i === void 0 ? [0, 0] : i, c = sa.reduce(function(u, f) {
    return u[f] = Su(f, t.rects, a), u;
  }, {}), s = c[t.placement], l = s.x, d = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = c;
}
const Pu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ru
};
function $u(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = va({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Du = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: $u,
  data: {}
};
function Cu(e) {
  return e === "x" ? "y" : "x";
}
function Nu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, c = r.altAxis, s = c === void 0 ? !1 : c, l = r.boundary, d = r.rootBoundary, u = r.altBoundary, f = r.padding, p = r.tether, v = p === void 0 ? !0 : p, b = r.tetherOffset, g = b === void 0 ? 0 : b, y = hr(t, {
    boundary: l,
    rootBoundary: d,
    padding: f,
    altBoundary: u
  }), E = tt(t.placement), R = Wt(t.placement), $ = !R, D = Gn(E), _ = Cu(D), S = t.modifiersData.popperOffsets, x = t.rects.reference, w = t.rects.popper, A = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
  if (!!S) {
    if (a) {
      var U, re = D === "y" ? Le : Be, de = D === "y" ? Ue : Ge, ie = D === "y" ? "height" : "width", ee = S[D], _e = ee + y[re], he = ee - y[de], O = v ? -w[ie] / 2 : 0, I = R === Vt ? x[ie] : w[ie], B = R === Vt ? -w[ie] : -x[ie], Y = t.elements.arrow, L = v && Y ? Un(Y) : {
        width: 0,
        height: 0
      }, G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ua(), j = G[re], q = G[de], z = cr(0, x[ie], L[ie]), J = $ ? x[ie] / 2 - O - z - j - F.mainAxis : I - z - j - F.mainAxis, V = $ ? -x[ie] / 2 + O + z + q + F.mainAxis : B + z + q + F.mainAxis, N = t.elements.arrow && wr(t.elements.arrow), T = N ? D === "y" ? N.clientTop || 0 : N.clientLeft || 0 : 0, Q = (U = M == null ? void 0 : M[D]) != null ? U : 0, me = ee + J - Q - T, Ee = ee + V - Q, $e = cr(v ? Br(_e, me) : _e, ee, v ? Ct(he, Ee) : he);
      S[D] = $e, X[D] = $e - ee;
    }
    if (s) {
      var ot, lt = D === "x" ? Le : Be, it = D === "x" ? Ue : Ge, Te = S[_], Je = _ === "y" ? "height" : "width", Ze = Te + y[lt], _t = Te - y[it], pt = [Le, Be].indexOf(E) !== -1, xt = (ot = M == null ? void 0 : M[_]) != null ? ot : 0, wt = pt ? Ze : Te - x[Je] - w[Je] - xt + F.altAxis, Ne = pt ? Te + x[Je] + w[Je] - xt - F.altAxis : _t, Qe = v && pt ? ru(wt, Te, Ne) : cr(v ? wt : Ze, Te, v ? Ne : _t);
      S[_] = Qe, X[_] = Qe - Te;
    }
    t.modifiersData[n] = X;
  }
}
const Au = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Nu,
  requiresIfExists: ["offset"]
};
function Iu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ku(e) {
  return e === Xe(e) || !Ye(e) ? Hn(e) : Iu(e);
}
function Mu(e) {
  var t = e.getBoundingClientRect(), r = qt(t.width) / e.offsetWidth || 1, n = qt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Fu(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ye(t), i = Ye(t) && Mu(t), a = yt(t), c = zt(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((st(t) !== "body" || Xn(a)) && (s = ku(t)), Ye(t) ? (l = zt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Kn(a))), {
    x: c.left + s.scrollLeft - l.x,
    y: c.top + s.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function ju(e) {
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
function Lu(e) {
  var t = ju(e);
  return Sn.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Bu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function ht(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var Pt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Yu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Vo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Vu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Vo).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(ht(Pt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(ht(Pt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Sn.indexOf(t.phase) < 0 && console.error(ht(Pt, t.name, '"phase"', "either " + Sn.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(ht(Pt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(ht(Pt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(ht(Pt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(ht(Pt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Vo.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(ht(Yu, String(t.name), n, n));
      });
    });
  });
}
function qu(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function zu(e) {
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
var qo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Wu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", zo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Wo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Uu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? zo : i;
  return function(s, l, d) {
    d === void 0 && (d = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, zo, a),
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
          reference: Nt(s) ? lr(s) : s.contextElement ? lr(s.contextElement) : [],
          popper: lr(l)
        };
        var $ = Lu(zu([].concat(n, u.options.modifiers)));
        if (u.orderedModifiers = $.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = qu([].concat($, u.options.modifiers), function(M) {
            var X = M.name;
            return X;
          });
          if (Vu(D), tt(u.options.placement) === Xr) {
            var _ = u.orderedModifiers.find(function(M) {
              var X = M.name;
              return X === "flip";
            });
            _ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = nt(l), x = S.marginTop, w = S.marginRight, A = S.marginBottom, F = S.marginLeft;
          [x, w, A, F].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), v.update();
      },
      forceUpdate: function() {
        if (!p) {
          var E = u.elements, R = E.reference, $ = E.popper;
          if (!Wo(R, $)) {
            process.env.NODE_ENV !== "production" && console.error(qo);
            return;
          }
          u.rects = {
            reference: Fu(R, wr($), u.options.strategy === "fixed"),
            popper: Un($)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var D = 0, _ = 0; _ < u.orderedModifiers.length; _++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error(Wu);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, _ = -1;
              continue;
            }
            var S = u.orderedModifiers[_], x = S.fn, w = S.options, A = w === void 0 ? {} : w, F = S.name;
            typeof x == "function" && (u = x({
              state: u,
              options: A,
              name: F,
              instance: v
            }) || u);
          }
        }
      },
      update: Bu(function() {
        return new Promise(function(y) {
          v.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!Wo(s, l))
      return process.env.NODE_ENV !== "production" && console.error(qo), v;
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
          }), S = function() {
          };
          f.push(_ || S);
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
var Gu = [du, Du, uu, Ql, Pu, Eu, Au, au, Ou], Hu = /* @__PURE__ */ Uu({
  defaultModifiers: Gu
}), Ku = typeof Element < "u", Xu = typeof Map == "function", Ju = typeof Set == "function", Zu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (Xu && e instanceof Map && t instanceof Map) {
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
    if (Ju && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Zu && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Ku && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !Ar(e[i[n]], t[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Qu = function(t, r) {
  try {
    return Ar(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, ef = [], Jn = function(t, r, n) {
  n === void 0 && (n = {});
  var i = $t.useRef(null), a = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || ef
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
        xa.flushSync(function() {
          l({
            styles: Ao(g.map(function(y) {
              return [y, b.styles[y] || {}];
            })),
            attributes: Ao(g.map(function(y) {
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
    return Qu(i.current, p) ? i.current || p : (i.current = p, p);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, d]), f = $t.useRef();
  return Io(function() {
    f.current && f.current.setOptions(u);
  }, [u]), Io(function() {
    if (!(t == null || r == null)) {
      var p = n.createPopper || Hu, v = p(t, r, u);
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
const xn = {
  "c-toggletip": "_c-toggletip_2swlv_1",
  "c-toggletip--active": "_c-toggletip--active_2swlv_18",
  "c-toggletip__arrow": "_c-toggletip__arrow_2swlv_22"
}, tf = Object.freeze({
  ESC: 27
}), ha = ({
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
  } = ge(zn), l = Z(), d = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', u = (v) => {
    const b = l.current.querySelectorAll(d), g = s.current, y = b[0], E = b[b.length - 1];
    if (!v.shiftKey && document.activeElement === E)
      return g.focus(), v.preventDefault();
    v.shiftKey && document.activeElement === y && (g.focus(), v.preventDefault()), (v.keyCode || v.which) === tf.ESC && g.focus();
  }, {
    styles: f,
    attributes: p
  } = Jn(s.current, l.current, {
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
  }, [c]), n ? /* @__PURE__ */ m(dt, {
    children: e
  }) : /* @__PURE__ */ m(_r, {
    id: "js-toggletip",
    children: /* @__PURE__ */ C("div", {
      tabIndex: -1,
      onKeyDown: u,
      ref: l,
      className: `${xn["c-toggletip"]} ${c && xn["c-toggletip--active"]} ${t != null ? t : ""}`,
      style: f.popper,
      ...p.popper,
      children: [e, r && /* @__PURE__ */ m("div", {
        className: xn["c-toggletip__arrow"],
        "data-popper-arrow": !0,
        style: f.arrow
      })]
    })
  });
};
ha.propTypes = {
  children: o.exports.oneOfType([o.exports.arrayOf(o.exports.element), o.exports.arrayOf(o.exports.node), o.exports.element, o.exports.node]),
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"]),
  __TYPE: fe("ToggletipContent")
};
ha.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  __TYPE: "ToggletipContent"
};
const wn = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, ma = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: i,
  hasArrow: a,
  distance: c,
  isDisabled: s
}) => {
  const [l, d] = K(!1), u = Z(null), f = Z(null), p = le(() => t || bt("c-tooltip-"), [t]), v = (_) => {
    l || d(!l);
  }, b = (_) => d(!1), g = (_) => {
    (!l || document.activeElement !== u.current) && d(!l);
  }, y = (_) => d(!1), E = (_) => {
    (_.keyCode | _.which) === 27 && l && d(!l);
  }, R = Se.map(e, (_) => He(_) ? we(_, {
    ..._.props,
    "aria-describedby": t,
    ref: u,
    onFocus: v,
    onBlur: b,
    onMouseOver: g,
    onMouseOut: y,
    onKeyDown: E
  }) : null), {
    styles: $,
    attributes: D
  } = Jn(u.current, f.current, {
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
  return !r || Se.count(e) > 1 || s ? /* @__PURE__ */ m(dt, {
    children: e
  }) : /* @__PURE__ */ C(dt, {
    children: [R, /* @__PURE__ */ m(_r, {
      id: "js-tooltip-portal",
      children: /* @__PURE__ */ C("div", {
        id: p,
        ref: f,
        role: "tooltip",
        onMouseOver: g,
        className: `${wn["c-tooltip"]} ${l && wn["c-tooltip--active"]} ${i != null ? i : ""}`,
        style: $.popper,
        ...D.popper,
        children: [r, a && /* @__PURE__ */ m("div", {
          className: wn["c-tooltip__arrow"],
          "data-popper-arrow": !0,
          style: $.arrow
        })]
      })
    })]
  });
};
ma.defaultProps = {
  placement: "auto"
};
ma.propTypes = {
  children: o.exports.any,
  id: o.exports.string,
  label: o.exports.string.isRequired,
  addClass: o.exports.string,
  hasArrow: o.exports.bool,
  isDisabled: o.exports.bool,
  distance: o.exports.number,
  placement: o.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const Zn = Ke(), ga = ({
  steps: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n,
  hideCloseButton: i,
  hideBackButton: a,
  ariaAttributes: c
}) => {
  const [s, l] = K(null), d = [...e.reduce((g, y, E) => [...g, {
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
    children: /* @__PURE__ */ m(_r, {
      id: "js-tour",
      children: t && /* @__PURE__ */ C(dt, {
        children: [/* @__PURE__ */ m(rf, {}), /* @__PURE__ */ m(ba, {
          ariaAttributes: c,
          hideCloseButton: i,
          hideBackButton: a
        })]
      })
    })
  });
};
ga.defaultProps = {
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
ga.propTypes = {
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
}, ba = ({
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
  } = ge(Zn), p = Z(), {
    onClose: v,
    onPrev: b,
    onNext: g
  } = a, {
    styles: y,
    attributes: E
  } = Jn(document.querySelector(s), p.current, {
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
  }), R = () => He(l) ? l : Ho("p", {
    className: gt["tour-description"]
  }, [l]), $ = () => {
    p.current.style.setProperty("--speed-movement", "0.8s"), g();
  };
  return /* @__PURE__ */ C(dt, {
    children: [/* @__PURE__ */ m("div", {
      className: `${gt["c-layout"]}`
    }), /* @__PURE__ */ C("div", {
      id: `unique-id-tour-element-${c}`,
      ref: p,
      style: y.popper,
      className: `${gt["c-tour-content"]} ${n && "animate__animated animate__fadeIn animate__faster"} ${f != null ? f : ""}`,
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
      }), R(), /* @__PURE__ */ C("div", {
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
ba.propTypes = {
  ariaAttributes: o.exports.shape({
    role: o.exports.string,
    tabIndex: o.exports.oneOfType([o.exports.string, o.exports.number]),
    "aria-label": o.exports.string,
    "aria-modal": o.exports.oneOfType([o.exports.string, o.exports.bool])
  }),
  hideCloseButton: o.exports.bool,
  hideBackButton: o.exports.bool
};
const rf = () => {
  const {
    isOpen: e,
    id: t,
    target: r,
    helpLayerClass: n
  } = ge(Zn), [i, a] = K({}), c = () => {
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
    className: `${gt["c-tour-help"]} ${e && "animate__animated animate__fadeIn animate__faster animate__delay-2s"} ${n != null ? n : ""}`,
    style: i,
    children: /* @__PURE__ */ m("span", {
      className: gt["c-tour-number"],
      children: t
    })
  });
}, nf = "_active_r3225_90", of = "_iconPulse_r3225_1", pe = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: nf,
  iconPulse: of,
  "c-vid__progress-bg": "_c-vid__progress-bg_r3225_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_r3225_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_r3225_140",
  "c-vid__controls": "_c-vid__controls_r3225_150",
  "c-vid__button": "_c-vid__button_r3225_165",
  "c-vid__volume": "_c-vid__volume_r3225_180",
  "c-vid__volume-item": "_c-vid__volume-item_r3225_191",
  "c-vid__time": "_c-vid__time_r3225_202",
  "c-vid__subtitles": "_c-vid__subtitles_r3225_208"
}, ya = ({
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
  }), [d, u] = K({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, p] = K({
    state: !1,
    label: "Reproducir video"
  }), [v, b] = K({
    state: !0,
    label: "Volumen"
  }), [g, y] = K(100), [E, R] = K({
    state: !1,
    label: "Ver en pantalla completa"
  }), [$, D] = K(!1), [_, S] = K(100), x = Z(null), w = Z(null), A = Z(null), F = Z(null), M = Z(null), X = Z(null), U = Z(null), re = Z(null), [de, ie] = K(!1), ee = (N) => {
    N.classList.add(`${pe.active}`), setTimeout(() => {
      N.classList.remove(`${pe.active}`);
    }, 650);
  };
  function _e() {
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
    const N = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, T = x.current;
    N ? (R({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (R({
      state: !0,
      label: "Salir de pantalla completa"
    }), T.requestFullscreen ? T.requestFullscreen() : T.mozRequestFullScreen ? T.mozRequestFullScreen() : T.webkitRequestFullScreen ? T.webkitRequestFullScreen() : T.msRequestFullscreen && T.msRequestFullscreen());
  }
  function O(N) {
    const T = parseInt(N, 10), Q = T >= 3600 ? Math.floor(T / 3600) : 0, me = Math.floor((T - Q * 3600) / 60), Ee = T - Q * 3600 - me * 60, $e = L(Y(Q)), ot = L(Y(me)), lt = L(Y(Ee));
    return {
      hours: $e,
      minutes: ot,
      seconds: lt
    };
  }
  function I(N) {
    const T = B(N.duration), Q = B(N.currentTime);
    u({
      totalSeconds: N.currentTime,
      hours: parseInt(O(N.currentTime).hours),
      minutes: parseInt(O(N.currentTime).minutes),
      seconds: parseInt(O(N.currentTime).seconds),
      string: Q
    }), l({
      totalSeconds: Math.floor(N.duration),
      hours: parseInt(O(N.duration).hours),
      minutes: parseInt(O(N.duration).minutes),
      seconds: parseInt(O(N.duration).seconds),
      string: T
    });
  }
  function B(N) {
    return parseInt(N, 10) <= 3600 ? `${O(N).minutes}:${O(N).seconds}` : `${O(N).hours}:${O(N).minutes}:${O(N).seconds}`;
  }
  function Y(N) {
    return N < 10 ? N = "0" + N : N;
  }
  function L(N) {
    return isNaN(N) ? "00" : N;
  }
  function G(N) {
    const T = F.current, Q = w.current, Ee = N.nativeEvent.offsetX / T.offsetWidth * Q.duration;
    Q.currentTime = Ee;
  }
  function j(N) {
    const T = w.current, Q = N.target.value, me = Q / 100;
    S(Q), y(Q), T.volume = me, v.state || b({
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
      const N = w.current, T = 0, Q = T;
      S(T), N.volume = Q;
    } else {
      b({
        state: !0,
        label: "Volumen"
      });
      const N = w.current, T = g, Q = T / 100;
      S(T), N.volume = Q;
    }
  }, z = function(N) {
    (N.keyCode || N.which) === 32 && _e();
  }, J = function(N) {
    const T = Math.floor(F.current.getAttribute("aria-valuenow"));
    if (document.activeElement === M.current)
      return null;
    if ((N.keyCode || N.which) === 37) {
      const Q = T - 5;
      Q >= 0 ? w.current.currentTime = Q : w.current.currentTime = 0, ee(re.current);
    }
    if ((N.keyCode || N.which) === 39) {
      const Q = T + 5;
      Q >= w.current.duration ? w.current.currentTime = w.current.duration : w.current.currentTime = Q, ee(U.current);
    }
  }, V = () => s >= 3600 ? `${d.hours} horas, ${d.minutes} minutos y ${d.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${d.minutes} minutos y ${d.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return W(() => {
    const N = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(N, "caption") && ie(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(N, "volume") && S(JSON.parse(localStorage.getItem("ui-video")).volume);
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
    onKeyDown: (N) => J(N),
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
          onClick: _e,
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
          onClick: _e,
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
ya.propTypes = {
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
ya.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
const af = (e, t) => {
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
}, sf = (e, t, r) => {
  const [n, i] = K(r), a = e.map((s) => window.matchMedia(s)), c = () => {
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
}, df = () => {
  const [e, t] = af("dark-mode-enabled"), r = sf(["(prefers-color-scheme: dark)"], [!0], !1), n = typeof e < "u" ? e : r;
  return W(() => {
    t(r);
  }, [r]), W(() => {
    const i = window.document.body;
    n ? i.setAttribute("data-dark-mode", n) : i.removeAttribute("data-dark-mode", n);
  }, [n]), [n, t];
}, cf = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), pf = (e) => {
  const { root: t, rootMargin: r, threshold: n } = e || cf, [i, a] = K(!1), [c, s] = K(null);
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
}, _a = (e) => {
  let t = {};
  for (const r in e)
    if (typeof e[r] == "object") {
      const n = _a(e[r]);
      for (const i in n)
        t = {
          ...t,
          [r.includes("accents") || r.includes("palette") ? i : `${r}-${i}`]: n[i]
        };
    } else
      t[r] = e[r];
  return t;
}, vf = (e) => _a(e);
export {
  Aa as Accordion,
  Zo as AccordionButton,
  Qo as AccordionItem,
  ei as AccordionPanel,
  ti as Audio,
  Dt as Button,
  Pl as ButtonSection,
  oi as CheckBox,
  Ts as CheckBoxGroup,
  Rs as Col,
  $s as Content,
  Pi as DragAndDrop,
  Ri as DragAndDropContext,
  $i as Draggable,
  Di as Droppable,
  ff as Filter,
  Ci as GeneralDraggable,
  De as Icon,
  Ni as Image,
  Ai as Input,
  hl as InputGroup,
  ki as InputLeftAddon,
  Mi as InputRightAddon,
  Ii as InputStyle,
  gl as Kbd,
  Fi as Link,
  bl as List,
  Li as ListItem,
  Bi as Modal,
  Yi as ModalContent,
  Yn as ModalContext,
  Vi as ModalOverlay,
  Xi as NavSection,
  Ui as NumberDecrementStepper,
  Gi as NumberIncrementStepper,
  qi as NumberInput,
  Hr as NumberInputContext,
  zi as NumberInputField,
  Wi as NumberInputStepper,
  yl as OrderedList,
  Hi as Pagination,
  Vn as PaginationItem,
  Ol as Panel,
  Kr as PanelContext,
  Dl as Paper,
  _r as Portal,
  Ml as Row,
  Ki as Section,
  Ji as Select,
  Fl as SelectGroup,
  Zi as Switch,
  Qi as Tab,
  ea as TabList,
  ta as TabPanel,
  ra as TabPanels,
  jl as Tabs,
  qn as TabsContext,
  na as TextArea,
  Ll as ThemeProvider,
  oa as Toggletip,
  ia as ToggletipButton,
  ha as ToggletipContent,
  zn as ToggletipContext,
  ma as Tooltip,
  ga as Tour,
  Zn as TourContext,
  ba as TourElement,
  rf as TourHelpLayer,
  _l as UnorderedList,
  ya as Video,
  vf as createTheme,
  df as useDarkMode,
  af as useLocalStorage,
  sf as useMedia,
  pf as useOnScreen,
  wl as usePagination,
  Al as usePortal
};
