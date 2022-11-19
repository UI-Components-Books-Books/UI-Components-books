import * as Dt from "react";
import Yr, { Children as Oe, useState as G, useEffect as W, isValidElement as Ue, cloneElement as _e, forwardRef as ct, useRef as K, useMemo as le, useLayoutEffect as Ho, useCallback as Pe, createContext as nt, memo as zo, useReducer as Dn, useContext as ye, createElement as Wo } from "react";
import * as ma from "react-dom";
import { unstable_batchedUpdates as Jt, createPortal as Uo } from "react-dom";
var Rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, i = { exports: {} }, rn = { exports: {} }, se = {};
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function I(A) {
    if (typeof A == "object" && A !== null) {
      var O = A.$$typeof;
      switch (O) {
        case t:
          switch (A = A.type, A) {
            case l:
            case d:
            case n:
            case a:
            case o:
            case f:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case s:
                case u:
                case b:
                case h:
                case c:
                  return A;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function D(A) {
    return I(A) === d;
  }
  return se.AsyncMode = l, se.ConcurrentMode = d, se.ContextConsumer = s, se.ContextProvider = c, se.Element = t, se.ForwardRef = u, se.Fragment = n, se.Lazy = b, se.Memo = h, se.Portal = r, se.Profiler = a, se.StrictMode = o, se.Suspense = f, se.isAsyncMode = function(A) {
    return D(A) || I(A) === l;
  }, se.isConcurrentMode = D, se.isContextConsumer = function(A) {
    return I(A) === s;
  }, se.isContextProvider = function(A) {
    return I(A) === c;
  }, se.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === t;
  }, se.isForwardRef = function(A) {
    return I(A) === u;
  }, se.isFragment = function(A) {
    return I(A) === n;
  }, se.isLazy = function(A) {
    return I(A) === b;
  }, se.isMemo = function(A) {
    return I(A) === h;
  }, se.isPortal = function(A) {
    return I(A) === r;
  }, se.isProfiler = function(A) {
    return I(A) === a;
  }, se.isStrictMode = function(A) {
    return I(A) === o;
  }, se.isSuspense = function(A) {
    return I(A) === f;
  }, se.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === n || A === d || A === a || A === o || A === f || A === p || typeof A == "object" && A !== null && (A.$$typeof === b || A.$$typeof === h || A.$$typeof === c || A.$$typeof === s || A.$$typeof === u || A.$$typeof === y || A.$$typeof === w || A.$$typeof === S || A.$$typeof === m);
  }, se.typeOf = I, se;
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
var eo;
function ya() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function I(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === d || T === a || T === o || T === f || T === p || typeof T == "object" && T !== null && (T.$$typeof === b || T.$$typeof === h || T.$$typeof === c || T.$$typeof === s || T.$$typeof === u || T.$$typeof === y || T.$$typeof === w || T.$$typeof === S || T.$$typeof === m);
    }
    function D(T) {
      if (typeof T == "object" && T !== null) {
        var Z = T.$$typeof;
        switch (Z) {
          case t:
            var he = T.type;
            switch (he) {
              case l:
              case d:
              case n:
              case a:
              case o:
              case f:
                return he;
              default:
                var we = he && he.$$typeof;
                switch (we) {
                  case s:
                  case u:
                  case b:
                  case h:
                  case c:
                    return we;
                  default:
                    return Z;
                }
            }
          case r:
            return Z;
        }
      }
    }
    var A = l, O = d, x = s, _ = c, C = t, j = u, M = n, X = b, H = h, re = r, fe = a, ie = o, ee = f, Ae = !1;
    function ge(T) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(T) || D(T) === l;
    }
    function E(T) {
      return D(T) === d;
    }
    function k(T) {
      return D(T) === s;
    }
    function $(T) {
      return D(T) === c;
    }
    function Y(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function L(T) {
      return D(T) === u;
    }
    function z(T) {
      return D(T) === n;
    }
    function F(T) {
      return D(T) === b;
    }
    function V(T) {
      return D(T) === h;
    }
    function Q(T) {
      return D(T) === r;
    }
    function J(T) {
      return D(T) === a;
    }
    function q(T) {
      return D(T) === o;
    }
    function N(T) {
      return D(T) === f;
    }
    ce.AsyncMode = A, ce.ConcurrentMode = O, ce.ContextConsumer = x, ce.ContextProvider = _, ce.Element = C, ce.ForwardRef = j, ce.Fragment = M, ce.Lazy = X, ce.Memo = H, ce.Portal = re, ce.Profiler = fe, ce.StrictMode = ie, ce.Suspense = ee, ce.isAsyncMode = ge, ce.isConcurrentMode = E, ce.isContextConsumer = k, ce.isContextProvider = $, ce.isElement = Y, ce.isForwardRef = L, ce.isFragment = z, ce.isLazy = F, ce.isMemo = V, ce.isPortal = Q, ce.isProfiler = J, ce.isStrictMode = q, ce.isSuspense = N, ce.isValidElementType = I, ce.typeOf = D;
  }()), ce;
}
var to;
function Go() {
  return to || (to = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = ba() : e.exports = ya();
  }(rn)), rn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var nn, ro;
function Aa() {
  if (ro)
    return nn;
  ro = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
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
  return nn = o() ? Object.assign : function(a, c) {
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
var on, no;
function In() {
  if (no)
    return on;
  no = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return on = e, on;
}
var an, oo;
function Xo() {
  return oo || (oo = 1, an = Function.call.bind(Object.prototype.hasOwnProperty)), an;
}
var sn, io;
function xa() {
  if (io)
    return sn;
  io = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = In(), r = {}, n = Xo();
    e = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function o(a, c, s, l, d) {
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
            var h = d ? d() : "";
            e(
              "Failed " + s + " type: " + f.message + (h != null ? h : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, sn = o, sn;
}
var cn, ao;
function _a() {
  if (ao)
    return cn;
  ao = 1;
  var e = Go(), t = Aa(), r = In(), n = Xo(), o = xa(), a = function() {
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
    function f(E) {
      var k = E && (d && E[d] || E[u]);
      if (typeof k == "function")
        return k;
    }
    var p = "<<anonymous>>", h = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: S(),
      arrayOf: I,
      element: D(),
      elementType: A(),
      instanceOf: O,
      node: j(),
      objectOf: _,
      oneOf: x,
      oneOfType: C,
      shape: X,
      exact: H
    };
    function b(E, k) {
      return E === k ? E !== 0 || 1 / E === 1 / k : E !== E && k !== k;
    }
    function m(E, k) {
      this.message = E, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function y(E) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, $ = 0;
      function Y(z, F, V, Q, J, q, N) {
        if (Q = Q || p, q = q || V, N !== r) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = Q + ":" + V;
            !k[Z] && $ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Z] = !0, $++);
          }
        }
        return F[V] == null ? z ? F[V] === null ? new m("The " + J + " `" + q + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new m("The " + J + " `" + q + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : E(F, V, Q, J, q);
      }
      var L = Y.bind(null, !1);
      return L.isRequired = Y.bind(null, !0), L;
    }
    function w(E) {
      function k($, Y, L, z, F, V) {
        var Q = $[Y], J = ie(Q);
        if (J !== E) {
          var q = ee(Q);
          return new m(
            "Invalid " + z + " `" + F + "` of type " + ("`" + q + "` supplied to `" + L + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return y(k);
    }
    function S() {
      return y(c);
    }
    function I(E) {
      function k($, Y, L, z, F) {
        if (typeof E != "function")
          return new m("Property `" + F + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var V = $[Y];
        if (!Array.isArray(V)) {
          var Q = ie(V);
          return new m("Invalid " + z + " `" + F + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected an array."));
        }
        for (var J = 0; J < V.length; J++) {
          var q = E(V, J, L, z, F + "[" + J + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return y(k);
    }
    function D() {
      function E(k, $, Y, L, z) {
        var F = k[$];
        if (!s(F)) {
          var V = ie(F);
          return new m("Invalid " + L + " `" + z + "` of type " + ("`" + V + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(E);
    }
    function A() {
      function E(k, $, Y, L, z) {
        var F = k[$];
        if (!e.isValidElementType(F)) {
          var V = ie(F);
          return new m("Invalid " + L + " `" + z + "` of type " + ("`" + V + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(E);
    }
    function O(E) {
      function k($, Y, L, z, F) {
        if (!($[Y] instanceof E)) {
          var V = E.name || p, Q = ge($[Y]);
          return new m("Invalid " + z + " `" + F + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return y(k);
    }
    function x(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function k($, Y, L, z, F) {
        for (var V = $[Y], Q = 0; Q < E.length; Q++)
          if (b(V, E[Q]))
            return null;
        var J = JSON.stringify(E, function(N, T) {
          var Z = ee(T);
          return Z === "symbol" ? String(T) : T;
        });
        return new m("Invalid " + z + " `" + F + "` of value `" + String(V) + "` " + ("supplied to `" + L + "`, expected one of " + J + "."));
      }
      return y(k);
    }
    function _(E) {
      function k($, Y, L, z, F) {
        if (typeof E != "function")
          return new m("Property `" + F + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var V = $[Y], Q = ie(V);
        if (Q !== "object")
          return new m("Invalid " + z + " `" + F + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected an object."));
        for (var J in V)
          if (n(V, J)) {
            var q = E(V, J, L, z, F + "." + J, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return y(k);
    }
    function C(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var k = 0; k < E.length; k++) {
        var $ = E[k];
        if (typeof $ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ae($) + " at index " + k + "."
          ), c;
      }
      function Y(L, z, F, V, Q) {
        for (var J = [], q = 0; q < E.length; q++) {
          var N = E[q], T = N(L, z, F, V, Q, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && J.push(T.data.expectedType);
        }
        var Z = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new m("Invalid " + V + " `" + Q + "` supplied to " + ("`" + F + "`" + Z + "."));
      }
      return y(Y);
    }
    function j() {
      function E(k, $, Y, L, z) {
        return re(k[$]) ? null : new m("Invalid " + L + " `" + z + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return y(E);
    }
    function M(E, k, $, Y, L) {
      return new m(
        (E || "React class") + ": " + k + " type `" + $ + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function X(E) {
      function k($, Y, L, z, F) {
        var V = $[Y], Q = ie(V);
        if (Q !== "object")
          return new m("Invalid " + z + " `" + F + "` of type `" + Q + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var J in E) {
          var q = E[J];
          if (typeof q != "function")
            return M(L, z, F, J, ee(q));
          var N = q(V, J, L, z, F + "." + J, r);
          if (N)
            return N;
        }
        return null;
      }
      return y(k);
    }
    function H(E) {
      function k($, Y, L, z, F) {
        var V = $[Y], Q = ie(V);
        if (Q !== "object")
          return new m("Invalid " + z + " `" + F + "` of type `" + Q + "` " + ("supplied to `" + L + "`, expected `object`."));
        var J = t({}, $[Y], E);
        for (var q in J) {
          var N = E[q];
          if (n(E, q) && typeof N != "function")
            return M(L, z, F, q, ee(N));
          if (!N)
            return new m(
              "Invalid " + z + " `" + F + "` key `" + q + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify($[Y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var T = N(V, q, L, z, F + "." + q, r);
          if (T)
            return T;
        }
        return null;
      }
      return y(k);
    }
    function re(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(re);
          if (E === null || s(E))
            return !0;
          var k = f(E);
          if (k) {
            var $ = k.call(E), Y;
            if (k !== E.entries) {
              for (; !(Y = $.next()).done; )
                if (!re(Y.value))
                  return !1;
            } else
              for (; !(Y = $.next()).done; ) {
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
    function fe(E, k) {
      return E === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function ie(E) {
      var k = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : fe(k, E) ? "symbol" : k;
    }
    function ee(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var k = ie(E);
      if (k === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function Ae(E) {
      var k = ee(E);
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
    function ge(E) {
      return !E.constructor || !E.constructor.name ? p : E.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, cn;
}
var ln, so;
function wa() {
  if (so)
    return ln;
  so = 1;
  var e = In();
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
    function o() {
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
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, ln;
}
if (process.env.NODE_ENV !== "production") {
  var Ta = Go(), Ea = !0;
  i.exports = _a()(Ta.isElement, Ea);
} else
  i.exports = wa()();
const Oa = (e) => {
  var t, r;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((r = e == null ? void 0 : e.type) == null ? void 0 : r.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, $e = (e, t) => Oe.toArray(e).filter((r) => t.indexOf(Oa(r)) !== -1);
var qr = { exports: {} }, Kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function Sa() {
  if (co)
    return Kt;
  co = 1;
  var e = Yr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, d) {
    var u, f = {}, p = null, h = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (f[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: t, type: s, key: p, ref: h, props: f, _owner: o.current };
  }
  return Kt.Fragment = r, Kt.jsx = c, Kt.jsxs = c, Kt;
}
var Zt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function Ra() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Yr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, m = "@@iterator";
    function y(v) {
      if (v === null || typeof v != "object")
        return null;
      var R = b && v[b] || v[m];
      return typeof R == "function" ? R : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(v) {
      {
        for (var R = arguments.length, B = new Array(R > 1 ? R - 1 : 0), U = 1; U < R; U++)
          B[U - 1] = arguments[U];
        I("error", v, B);
      }
    }
    function I(v, R, B) {
      {
        var U = w.ReactDebugCurrentFrame, ae = U.getStackAddendum();
        ae !== "" && (R += "%s", B = B.concat([ae]));
        var ue = B.map(function(ne) {
          return String(ne);
        });
        ue.unshift("Warning: " + R), Function.prototype.apply.call(console[v], console, ue);
      }
    }
    var D = !1, A = !1, O = !1, x = !1, _ = !1, C;
    C = Symbol.for("react.module.reference");
    function j(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === n || v === a || _ || v === o || v === d || v === u || x || v === h || D || A || O || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === f || v.$$typeof === c || v.$$typeof === s || v.$$typeof === l || v.$$typeof === C || v.getModuleId !== void 0));
    }
    function M(v, R, B) {
      var U = v.displayName;
      if (U)
        return U;
      var ae = R.displayName || R.name || "";
      return ae !== "" ? B + "(" + ae + ")" : B;
    }
    function X(v) {
      return v.displayName || "Context";
    }
    function H(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case s:
            var R = v;
            return X(R) + ".Consumer";
          case c:
            var B = v;
            return X(B._context) + ".Provider";
          case l:
            return M(v, v.render, "ForwardRef");
          case f:
            var U = v.displayName || null;
            return U !== null ? U : H(v.type) || "Memo";
          case p: {
            var ae = v, ue = ae._payload, ne = ae._init;
            try {
              return H(ne(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, fe = 0, ie, ee, Ae, ge, E, k, $;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function L() {
      {
        if (fe === 0) {
          ie = console.log, ee = console.info, Ae = console.warn, ge = console.error, E = console.group, k = console.groupCollapsed, $ = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        fe++;
      }
    }
    function z() {
      {
        if (fe--, fe === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, v, {
              value: ie
            }),
            info: re({}, v, {
              value: ee
            }),
            warn: re({}, v, {
              value: Ae
            }),
            error: re({}, v, {
              value: ge
            }),
            group: re({}, v, {
              value: E
            }),
            groupCollapsed: re({}, v, {
              value: k
            }),
            groupEnd: re({}, v, {
              value: $
            })
          });
        }
        fe < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = w.ReactCurrentDispatcher, V;
    function Q(v, R, B) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (ae) {
            var U = ae.stack.trim().match(/\n( *(at )?)/);
            V = U && U[1] || "";
          }
        return `
` + V + v;
      }
    }
    var J = !1, q;
    {
      var N = typeof WeakMap == "function" ? WeakMap : Map;
      q = new N();
    }
    function T(v, R) {
      if (!v || J)
        return "";
      {
        var B = q.get(v);
        if (B !== void 0)
          return B;
      }
      var U;
      J = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = F.current, F.current = null, L();
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
              U = ft;
            }
            Reflect.construct(v, [], ne);
          } else {
            try {
              ne.call();
            } catch (ft) {
              U = ft;
            }
            v.call(ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            U = ft;
          }
          v();
        }
      } catch (ft) {
        if (ft && U && typeof ft.stack == "string") {
          for (var te = ft.stack.split(`
`), Ce = U.stack.split(`
`), me = te.length - 1, be = Ce.length - 1; me >= 1 && be >= 0 && te[me] !== Ce[be]; )
            be--;
          for (; me >= 1 && be >= 0; me--, be--)
            if (te[me] !== Ce[be]) {
              if (me !== 1 || be !== 1)
                do
                  if (me--, be--, be < 0 || te[me] !== Ce[be]) {
                    var Qe = `
` + te[me].replace(" at new ", " at ");
                    return v.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", v.displayName)), typeof v == "function" && q.set(v, Qe), Qe;
                  }
                while (me >= 1 && be >= 0);
              break;
            }
        }
      } finally {
        J = !1, F.current = ue, z(), Error.prepareStackTrace = ae;
      }
      var kt = v ? v.displayName || v.name : "", Kn = kt ? Q(kt) : "";
      return typeof v == "function" && q.set(v, Kn), Kn;
    }
    function Z(v, R, B) {
      return T(v, !1);
    }
    function he(v) {
      var R = v.prototype;
      return !!(R && R.isReactComponent);
    }
    function we(v, R, B) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return T(v, he(v));
      if (typeof v == "string")
        return Q(v);
      switch (v) {
        case d:
          return Q("Suspense");
        case u:
          return Q("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case l:
            return Z(v.render);
          case f:
            return we(v.type, R, B);
          case p: {
            var U = v, ae = U._payload, ue = U._init;
            try {
              return we(ue(ae), R, B);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, ot = {}, lt = w.ReactDebugCurrentFrame;
    function it(v) {
      if (v) {
        var R = v._owner, B = we(v.type, v._source, R ? R.type : null);
        lt.setExtraStackFrame(B);
      } else
        lt.setExtraStackFrame(null);
    }
    function Te(v, R, B, U, ae) {
      {
        var ue = Function.call.bind(De);
        for (var ne in v)
          if (ue(v, ne)) {
            var te = void 0;
            try {
              if (typeof v[ne] != "function") {
                var Ce = Error((U || "React class") + ": " + B + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              te = v[ne](R, ne, U, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              te = me;
            }
            te && !(te instanceof Error) && (it(ae), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", B, ne, typeof te), it(null)), te instanceof Error && !(te.message in ot) && (ot[te.message] = !0, it(ae), S("Failed %s type: %s", B, te.message), it(null));
          }
      }
    }
    var Xe = Array.isArray;
    function Je(v) {
      return Xe(v);
    }
    function At(v) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, B = R && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return B;
      }
    }
    function pt(v) {
      try {
        return xt(v), !1;
      } catch {
        return !0;
      }
    }
    function xt(v) {
      return "" + v;
    }
    function _t(v) {
      if (pt(v))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", At(v)), xt(v);
    }
    var Ne = w.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, Gt, qe;
    qe = {};
    function wr(v) {
      if (De.call(v, "ref")) {
        var R = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function Kr(v) {
      if (De.call(v, "key")) {
        var R = Object.getOwnPropertyDescriptor(v, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function Zr(v, R) {
      if (typeof v.ref == "string" && Ne.current && R && Ne.current.stateNode !== R) {
        var B = H(Ne.current.type);
        qe[B] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Ne.current.type), v.ref), qe[B] = !0);
      }
    }
    function Tr(v, R) {
      {
        var B = function() {
          vt || (vt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        B.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function en(v, R) {
      {
        var B = function() {
          Gt || (Gt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        B.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var Er = function(v, R, B, U, ae, ue, ne) {
      var te = {
        $$typeof: t,
        type: v,
        key: R,
        ref: B,
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
    function tn(v, R, B, U, ae) {
      {
        var ue, ne = {}, te = null, Ce = null;
        B !== void 0 && (_t(B), te = "" + B), Kr(R) && (_t(R.key), te = "" + R.key), wr(R) && (Ce = R.ref, Zr(R, ae));
        for (ue in R)
          De.call(R, ue) && !Ke.hasOwnProperty(ue) && (ne[ue] = R[ue]);
        if (v && v.defaultProps) {
          var me = v.defaultProps;
          for (ue in me)
            ne[ue] === void 0 && (ne[ue] = me[ue]);
        }
        if (te || Ce) {
          var be = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          te && Tr(ne, be), Ce && en(ne, be);
        }
        return Er(v, te, Ce, ae, U, Ne.current, ne);
      }
    }
    var Xt = w.ReactCurrentOwner, Or = w.ReactDebugCurrentFrame;
    function ve(v) {
      if (v) {
        var R = v._owner, B = we(v.type, v._source, R ? R.type : null);
        Or.setExtraStackFrame(B);
      } else
        Or.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Re(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function Ze() {
      {
        if (Xt.current) {
          var v = H(Xt.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function Be(v) {
      {
        if (v !== void 0) {
          var R = v.fileName.replace(/^.*[\\\/]/, ""), B = v.lineNumber;
          return `

Check your code at ` + R + ":" + B + ".";
        }
        return "";
      }
    }
    var Me = {};
    function Ve(v) {
      {
        var R = Ze();
        if (!R) {
          var B = typeof v == "string" ? v : v.displayName || v.name;
          B && (R = `

Check the top-level render call using <` + B + ">.");
        }
        return R;
      }
    }
    function ut(v, R) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var B = Ve(R);
        if (Me[B])
          return;
        Me[B] = !0;
        var U = "";
        v && v._owner && v._owner !== Xt.current && (U = " It was passed a child from " + H(v._owner.type) + "."), ve(v), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, U), ve(null);
      }
    }
    function je(v, R) {
      {
        if (typeof v != "object")
          return;
        if (Je(v))
          for (var B = 0; B < v.length; B++) {
            var U = v[B];
            Re(U) && ut(U, R);
          }
        else if (Re(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var ae = y(v);
          if (typeof ae == "function" && ae !== v.entries)
            for (var ue = ae.call(v), ne; !(ne = ue.next()).done; )
              Re(ne.value) && ut(ne.value, R);
        }
      }
    }
    function wt(v) {
      {
        var R = v.type;
        if (R == null || typeof R == "string")
          return;
        var B;
        if (typeof R == "function")
          B = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === l || R.$$typeof === f))
          B = R.propTypes;
        else
          return;
        if (B) {
          var U = H(R);
          Te(B, v.props, "prop", U, v);
        } else if (R.PropTypes !== void 0 && !Se) {
          Se = !0;
          var ae = H(R);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(v) {
      {
        for (var R = Object.keys(v.props), B = 0; B < R.length; B++) {
          var U = R[B];
          if (U !== "children" && U !== "key") {
            ve(v), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), ve(null);
            break;
          }
        }
        v.ref !== null && (ve(v), S("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function Et(v, R, B, U, ae, ue) {
      {
        var ne = j(v);
        if (!ne) {
          var te = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = Be(ae);
          Ce ? te += Ce : te += Ze();
          var me;
          v === null ? me = "null" : Je(v) ? me = "array" : v !== void 0 && v.$$typeof === t ? (me = "<" + (H(v.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : me = typeof v, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, te);
        }
        var be = tn(v, R, B, ae, ue);
        if (be == null)
          return be;
        if (ne) {
          var Qe = R.children;
          if (Qe !== void 0)
            if (U)
              if (Je(Qe)) {
                for (var kt = 0; kt < Qe.length; kt++)
                  je(Qe[kt], v);
                Object.freeze && Object.freeze(Qe);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(Qe, v);
        }
        return v === n ? Tt(be) : wt(be), be;
      }
    }
    function Ct(v, R, B) {
      return Et(v, R, B, !0);
    }
    function Sr(v, R, B) {
      return Et(v, R, B, !1);
    }
    var Ot = Sr, St = Ct;
    Zt.Fragment = n, Zt.jsx = Ot, Zt.jsxs = St;
  }()), Zt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Sa() : e.exports = Ra();
})(qr);
const dt = qr.exports.Fragment, g = qr.exports.jsx, P = qr.exports.jsxs, Da = ({
  children: e,
  allowMultiple: t,
  defaultIndex: r
}) => {
  const [n, o] = G(), a = (s) => {
    t ? n.includes(s) ? o(n.filter((l) => l !== s)) : o([...n, s]) : o(s);
  };
  W(() => (o(t ? r || [] : r != null ? r : null), () => {
    o(null);
  }), [t, r]);
  const c = Oe.map(e, (s, l) => Ue(s) ? _e(s, {
    ...s.props,
    id: l,
    isOpen: n,
    onToggle: a
  }) : null);
  return /* @__PURE__ */ g("div", {
    children: $e(c, ["AccordionItem"])
  });
};
Da.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  allowMultiple: i.exports.bool,
  defaultIndex: i.exports.oneOfType([i.exports.array, i.exports.number])
};
const pe = (e) => (t, r, n) => {
  if (t[r] !== e)
    return new Error(
      `'${r}' in '${n}' 

 NO puedes pasar un valor de props para '${r}'.La propiedad tenia 2 guiones abajo por un raz\xF3n, As\xED que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro d\xEDa sin errores.`
    );
}, jt = {
  "c-accordion__item": "_c-accordion__item_1xs3f_1",
  "c-accordion__button": "_c-accordion__button_1xs3f_10",
  "c-accordion": "_c-accordion_1xs3f_1",
  "c-accordion__panel": "_c-accordion__panel_1xs3f_33",
  "c-accordion__panel--active": "_c-accordion__panel--active_1xs3f_38",
  "c-accordion__panel-content": "_c-accordion__panel-content_1xs3f_42"
}, Jo = ({
  children: e,
  id: t,
  onExpanded: r,
  isExpanded: n,
  expanded: o,
  addClass: a,
  icon: c,
  __TYPE: s,
  ...l
}) => /* @__PURE__ */ P("button", {
  id: `accordion-button-${t}`,
  "aria-controls": `accordion-panel-${t}`,
  "aria-expanded": n,
  className: `${jt["c-accordion__button"]} u-flex ${a != null ? a : ""} ${n && o && o}`,
  onClick: r,
  "data-type": s,
  ...l,
  children: [e, c && c(n)]
});
Jo.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  id: i.exports.number,
  onExpanded: i.exports.func,
  isExpanded: i.exports.bool,
  expanded: i.exports.string,
  addClass: i.exports.string,
  icon: i.exports.func,
  __TYPE: pe("AccordionButton")
};
Jo.defaultProps = {
  __TYPE: "AccordionButton"
};
const Ko = ({
  children: e,
  id: t,
  isOpen: r,
  onToggle: n,
  addClass: o
}) => {
  const a = () => n(t), c = () => typeof r == "number" ? r === t : Array.isArray(r) ? !!r.includes(t) : !1, s = Oe.map(e, (l) => Ue(l) ? l.props.__TYPE === "AccordionButton" ? _e(l, {
    ...l.props,
    id: t,
    onExpanded: a,
    isExpanded: c()
  }) : _e(l, {
    ...l.props,
    id: t,
    isExpanded: c()
  }) : null);
  return /* @__PURE__ */ g("div", {
    className: `${jt["c-accordion__item"]} ${o != null ? o : ""}`,
    children: $e(s, ["AccordionButton", "AccordionPanel"])
  });
};
Ko.propTypes = {
  children: i.exports.arrayOf(i.exports.element),
  id: i.exports.number,
  isOpen: i.exports.oneOfType([i.exports.array, i.exports.number]),
  onToggle: i.exports.func,
  addClass: i.exports.string,
  __TYPE: pe("AccordionItem")
};
Ko.defaultProps = {
  __TYPE: "AccordionItem"
};
const Zo = ({
  children: e,
  id: t,
  isExpanded: r,
  addClass: n,
  __TYPE: o,
  ...a
}) => /* @__PURE__ */ g("div", {
  className: `${jt["c-accordion"]} ${r ? jt["c-accordion__panel--active"] : jt["c-accordion__panel"]}`,
  "aria-hidden": !r,
  "data-type": o,
  ...!r && {
    hidden: !r
  },
  ...a,
  children: /* @__PURE__ */ g("div", {
    id: `accordion-panel-${t}`,
    role: "region",
    "aria-hidden": !r,
    "aria-labelledby": `accordion-button-${t}`,
    className: `${jt["c-accordion__panel-content"]} ${n != null ? n : ""}`,
    children: e
  })
});
Zo.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  id: i.exports.number,
  isExpanded: i.exports.bool,
  addClass: i.exports.string,
  __TYPE: pe("AccordionPanel")
};
Zo.defaultProps = {
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
], uo = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Ie = ({
  name: e,
  size: t,
  addClass: r
}) => e ? Pn.includes(e) ? /* @__PURE__ */ g("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  className: `${uo["c-icon"]} ${uo[`c-${t}`]} ${r != null ? r : ""}`,
  "aria-hidden": "true",
  "data-testid": e,
  children: /* @__PURE__ */ g("use", {
    xlinkHref: `/src/assets/icons/svg/${e}.svg#${e}`
  })
}) : /* @__PURE__ */ g("span", {
  children: "Doesn't exist"
}) : null;
Ie.propTypes = {
  name: i.exports.oneOf(Pn),
  size: i.exports.oneOf(["small", "normal", "big"]),
  addClass: i.exports.string,
  __TYPE: pe("Icon")
};
Ie.defaultProps = {
  size: "normal",
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
}, It = ct((e, t) => {
  const {
    label: r,
    size: n,
    icon: o,
    type: a,
    variant: c,
    hasAriaLabel: s,
    disabled: l,
    onClick: d,
    children: u,
    addClass: f,
    ...p
  } = e;
  return /* @__PURE__ */ P("button", {
    ref: t,
    className: `${er["c-button"]} ${er[`c-${c}`]} ${er[`c-${n}`]} ${o && o.name && s ? er["c-round"] : ""} 
        ${o && o.position === "right" ? er["c-reverse"] : ""} ${f != null ? f : ""}`,
    disabled: l,
    type: a,
    onClick: d,
    ...s && {
      "aria-label": `${r}`
    },
    ...p,
    children: [u, o && /* @__PURE__ */ g(Ie, {
      name: o.name,
      size: o.size
    }), s ? null : r]
  });
});
It.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  label: i.exports.string.isRequired,
  size: i.exports.oneOf(["small", "normal", "big"]),
  variant: i.exports.oneOf(["primary", "secondary", "no-line"]),
  type: i.exports.oneOf(["button", "submit", "reset"]),
  hasAriaLabel: i.exports.bool,
  icon: i.exports.shape({
    name: i.exports.oneOf(Pn),
    size: i.exports.oneOf(["small", "normal", "big"]),
    position: i.exports.oneOf(["left", "right"])
  }),
  disabled: i.exports.bool,
  onClick: i.exports.func,
  addClass: i.exports.string
};
It.defaultProps = {
  label: "Button",
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const Bt = {
  "c-audio": "_c-audio_c6ix7_1",
  "c-audio--small": "_c-audio--small_c6ix7_15",
  "c-audio--hidden": "_c-audio--hidden_c6ix7_33",
  "c-button": "_c-button_c6ix7_37",
  "is-button-paused": "_is-button-paused_c6ix7_62",
  "is-button-playing": "_is-button-playing_c6ix7_70"
}, ei = ({
  src: e,
  format: t,
  a11y: r,
  size: n,
  type: o,
  addClass: a,
  ...c
}) => {
  const [s, l] = G(!1), d = K(), u = Object.freeze({
    BUTTON: "Button",
    BAR: "Bar"
  }), f = (p) => {
    !d.current || (d.current.paused ? d.current.play() : d.current.pause(), l(!s));
  };
  return o === u.BAR ? /* @__PURE__ */ g("audio", {
    preload: "metadata",
    controls: !0,
    className: `${Bt["c-audio"]} ${n && Bt[`c-audio--${n}`]} ${a != null ? a : ""}`,
    "data-a11y": r,
    ...c,
    children: /* @__PURE__ */ g("source", {
      src: e,
      type: t
    })
  }) : /* @__PURE__ */ P(dt, {
    children: [/* @__PURE__ */ g("audio", {
      ref: d,
      src: e,
      type: t,
      onEnded: () => l(!s),
      className: Bt["c-audio--hidden"]
    }), /* @__PURE__ */ g(It, {
      label: s ? "Pausar" : "Reproduccir",
      "data-a11y": r,
      addClass: `${Bt["c-button"]} ${s ? Bt["is-button-playing"] : Bt["is-button-paused"]} ${a != null ? a : ""}`,
      onClick: f,
      hasAriaLabel: !0,
      ...r && {
        disabled: r
      },
      ...c
    })]
  });
};
ei.defaultProps = {
  a11y: !1,
  type: "Bar"
};
ei.propTypes = {
  src: i.exports.string,
  a11y: i.exports.bool,
  format: i.exports.string,
  size: i.exports.oneOf(["small"]),
  type: i.exports.oneOf(["Bar", "Button"]),
  addClass: i.exports.string
};
var Ia = typeof Rr == "object" && Rr && Rr.Object === Object && Rr, Pa = Ia, Na = Pa, Ca = typeof self == "object" && self && self.Object === Object && self, ka = Na || Ca || Function("return this")(), Ba = ka, Ma = Ba, ja = Ma.Symbol, Nn = ja;
function Fa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var La = Fa, $a = Array.isArray, Ya = $a, fo = Nn, ti = Object.prototype, qa = ti.hasOwnProperty, Va = ti.toString, tr = fo ? fo.toStringTag : void 0;
function Qa(e) {
  var t = qa.call(e, tr), r = e[tr];
  try {
    e[tr] = void 0;
    var n = !0;
  } catch {
  }
  var o = Va.call(e);
  return n && (t ? e[tr] = r : delete e[tr]), o;
}
var Ha = Qa, za = Object.prototype, Wa = za.toString;
function Ua(e) {
  return Wa.call(e);
}
var Ga = Ua, po = Nn, Xa = Ha, Ja = Ga, Ka = "[object Null]", Za = "[object Undefined]", vo = po ? po.toStringTag : void 0;
function es(e) {
  return e == null ? e === void 0 ? Za : Ka : vo && vo in Object(e) ? Xa(e) : Ja(e);
}
var ts = es;
function rs(e) {
  return e != null && typeof e == "object";
}
var ns = rs, os = ts, is = ns, as = "[object Symbol]";
function ss(e) {
  return typeof e == "symbol" || is(e) && os(e) == as;
}
var cs = ss, go = Nn, ls = La, us = Ya, fs = cs, ds = 1 / 0, ho = go ? go.prototype : void 0, mo = ho ? ho.toString : void 0;
function ri(e) {
  if (typeof e == "string")
    return e;
  if (us(e))
    return ls(e, ri) + "";
  if (fs(e))
    return mo ? mo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ds ? "-0" : t;
}
var ps = ri, vs = ps;
function gs(e) {
  return e == null ? "" : vs(e);
}
var hs = gs, ms = hs, bs = 0;
function ys(e) {
  var t = ++bs;
  return ms(e) + t;
}
var bt = ys;
const rr = {
  "c-input": "_c-input_lqmp1_1",
  "c-input__box": "_c-input__box_lqmp1_24",
  "c-input__check": "_c-input__check_lqmp1_38",
  "c-input__icon": "_c-input__icon_lqmp1_38"
}, ni = ct(({
  id: e,
  name: t,
  type: r,
  label: n,
  state: o,
  value: a,
  addClass: c,
  isDisabled: s,
  defaultChecked: l,
  onChange: d,
  __TYPE: u,
  ...f
}, p) => {
  const [h, b] = G(!1), m = le(() => e || bt(`ui-${r}`), [e, r]), y = Object.freeze({
    right: "done_all",
    wrong: "close",
    normal: r === "checkbox" ? "check" : null
  }), w = ({
    target: S
  }) => {
    if (b(S.checked), !!d) {
      if (S.checked) {
        d({
          id: S.id,
          value: S.value
        });
        return;
      }
      d({
        id: S.id,
        value: ""
      });
    }
  };
  return W(() => (l && b(!!l), () => {
    b(!1);
  }), [l]), /* @__PURE__ */ P("label", {
    htmlFor: m,
    className: `${rr["c-input"]} u-flex ${c != null ? c : ""}`,
    "data-state": o,
    "data-type": r,
    "data-element": u,
    ...f,
    children: [/* @__PURE__ */ P("div", {
      className: rr["c-input__box"],
      children: [/* @__PURE__ */ g("input", {
        id: m,
        ref: p,
        type: r,
        name: t,
        value: a,
        checked: h,
        "data-state": o,
        className: rr["c-input__check"],
        onChange: w,
        ...s && {
          disabled: !0
        }
      }), /* @__PURE__ */ g("div", {
        className: rr["c-input__icon"],
        children: y[o] && /* @__PURE__ */ g(Ie, {
          name: y[o]
        })
      })]
    }), /* @__PURE__ */ g("span", {
      className: rr["c-input__label"],
      children: n
    })]
  });
});
ni.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  __TYPE: "CheckBox"
};
ni.propTypes = {
  id: i.exports.string,
  name: i.exports.string,
  type: i.exports.oneOf(["radio", "checkbox"]),
  label: i.exports.string.isRequired,
  state: i.exports.oneOf(["normal", "right", "wrong"]),
  value: i.exports.oneOfType([i.exports.string, i.exports.number, i.exports.bool]),
  addClass: i.exports.string,
  isDisabled: i.exports.bool,
  defaultChecked: i.exports.bool,
  onChange: i.exports.func,
  __TYPE: pe("CheckBox")
};
const As = ({
  legend: e,
  children: t,
  onChecked: r,
  addClass: n
}) => {
  const [o, a] = G([]), c = (l) => {
    o.filter((u) => u.id === l.id).length ? a([...o.filter((u) => u.id !== l.id)]) : a([...o, {
      ...l
    }]);
  };
  W(() => {
    r && r(o);
  }, [o]);
  const s = Oe.map(t, (l) => Ue(l) ? l.props.__TYPE === "CheckBox" ? _e(l, {
    ...l.props,
    onChange: c
  }) : l : null);
  return /* @__PURE__ */ P("fieldset", {
    ...n && {
      className: `${n}`
    },
    children: [/* @__PURE__ */ g("legend", {
      children: e
    }), /* @__PURE__ */ g("div", {
      className: "u-flow",
      children: $e(s, ["CheckBox"])
    })]
  });
};
As.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  legend: i.exports.string,
  onChecked: i.exports.func,
  addClass: i.exports.string
};
const xs = "_col_by2qh_1", _s = {
  col: xs
}, ws = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ g("div", {
  ref: r,
  className: `${_s.col} ${e != null ? e : ""}`,
  ...t
}));
ws.propTypes = {
  addClass: i.exports.string
};
const Ts = {
  "c-content": "_c-content_u325r_1"
}, Es = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ g("section", {
  tabIndex: -1,
  className: `${Ts["c-content"]} animate__animated animate__fadeInDown animate__faster ${t != null ? t : ""}`,
  ...r,
  children: e
});
Es.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.arrayOf(i.exports.node), i.exports.node]),
  addClass: i.exports.string
};
const Vr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function zt(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function Cn(e) {
  return "nodeType" in e;
}
function ke(e) {
  var t, r;
  return e ? zt(e) ? e : Cn(e) && (t = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? t : window : window;
}
function kn(e) {
  const {
    Document: t
  } = ke(e);
  return e instanceof t;
}
function hr(e) {
  return zt(e) ? !1 : e instanceof ke(e).HTMLElement;
}
function Os(e) {
  return e instanceof ke(e).SVGElement;
}
function Wt(e) {
  return e ? zt(e) ? e.document : Cn(e) ? kn(e) ? e : hr(e) ? e.ownerDocument : document : document : document;
}
const at = Vr ? Ho : W;
function Qr(e) {
  const t = K(e);
  return at(() => {
    t.current = e;
  }), Pe(function(...r) {
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Ss() {
  const e = K(null), t = Pe((n, o) => {
    e.current = setInterval(n, o);
  }, []), r = Pe(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, r];
}
function ur(e, t = [e]) {
  const r = K(e);
  return at(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function mr(e, t) {
  const r = K();
  return le(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    [...t]
  );
}
function kr(e) {
  const t = Qr(e), r = K(null), n = Pe(
    (o) => {
      o !== r.current && (t == null || t(o, r.current)), r.current = o;
    },
    []
  );
  return [r, n];
}
function Br(e) {
  const t = K();
  return W(() => {
    t.current = e;
  }, [e]), t.current;
}
let un = {};
function Hr(e, t) {
  return le(() => {
    if (t)
      return t;
    const r = un[e] == null ? 0 : un[e] + 1;
    return un[e] = r, `${e}-${r}`;
  }, [e, t]);
}
function oi(e) {
  return (t, ...r) => r.reduce((n, o) => {
    const a = Object.entries(o);
    for (const [c, s] of a) {
      const l = n[c];
      l != null && (n[c] = l + e * s);
    }
    return n;
  }, {
    ...t
  });
}
const Lt = /* @__PURE__ */ oi(1), Mr = /* @__PURE__ */ oi(-1);
function Rs(e) {
  return "clientX" in e && "clientY" in e;
}
function Bn(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = ke(e.target);
  return t && e instanceof t;
}
function Ds(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = ke(e.target);
  return t && e instanceof t;
}
function jr(e) {
  if (Ds(e)) {
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
const $t = /* @__PURE__ */ Object.freeze({
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
        return [$t.Translate.toString(e), $t.Scale.toString(e)].join(" ");
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
function Is(e) {
  return e.matches(bo) ? e : e.querySelector(bo);
}
const Ps = {
  display: "none"
};
function Ns(e) {
  let {
    id: t,
    value: r
  } = e;
  return /* @__PURE__ */ g("div", {
    id: t,
    style: Ps,
    children: r
  });
}
const Cs = {
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
function ks(e) {
  let {
    id: t,
    announcement: r
  } = e;
  return /* @__PURE__ */ g("div", {
    id: t,
    style: Cs,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0,
    children: r
  });
}
function Bs() {
  const [e, t] = G("");
  return {
    announce: Pe((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const ii = /* @__PURE__ */ nt(null);
function Ms(e) {
  const t = ye(ii);
  W(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function js() {
  const [e] = G(() => /* @__PURE__ */ new Set()), t = Pe((n) => (e.add(n), () => e.delete(n)), [e]);
  return [Pe((n) => {
    let {
      type: o,
      event: a
    } = n;
    e.forEach((c) => {
      var s;
      return (s = c[o]) == null ? void 0 : s.call(c, a);
    });
  }, [e]), t];
}
const Fs = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Ls = {
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
function $s(e) {
  let {
    announcements: t = Ls,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: o = Fs
  } = e;
  const {
    announce: a,
    announcement: c
  } = Bs(), s = Hr("DndLiveRegion"), [l, d] = G(!1);
  if (W(() => {
    d(!0);
  }, []), Ms(le(() => ({
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
        over: h
      } = f;
      t.onDragMove && a(t.onDragMove({
        active: p,
        over: h
      }));
    },
    onDragOver(f) {
      let {
        active: p,
        over: h
      } = f;
      a(t.onDragOver({
        active: p,
        over: h
      }));
    },
    onDragEnd(f) {
      let {
        active: p,
        over: h
      } = f;
      a(t.onDragEnd({
        active: p,
        over: h
      }));
    },
    onDragCancel(f) {
      let {
        active: p,
        over: h
      } = f;
      a(t.onDragCancel({
        active: p,
        over: h
      }));
    }
  }), [a, t])), !l)
    return null;
  const u = /* @__PURE__ */ P(dt, {
    children: [/* @__PURE__ */ g(Ns, {
      id: n,
      value: o.draggable
    }), /* @__PURE__ */ g(ks, {
      id: s,
      announcement: c
    })]
  });
  return r ? Uo(u, r) : u;
}
var xe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(xe || (xe = {}));
function Fr() {
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
function Ys() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return le(
    () => [...t].filter((n) => n != null),
    [...t]
  );
}
const tt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function qs(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Vs(e, t) {
  const r = jr(e);
  if (!r)
    return "0 0";
  const n = {
    x: (r.x - t.left) / t.width * 100,
    y: (r.y - t.top) / t.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function Qs(e, t) {
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
  return n - r;
}
function yo(e) {
  let {
    left: t,
    top: r,
    height: n,
    width: o
  } = e;
  return [{
    x: t,
    y: r
  }, {
    x: t + o,
    y: r
  }, {
    x: t,
    y: r + n
  }, {
    x: t + o,
    y: r + n
  }];
}
function ai(e, t) {
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
  const o = yo(t), a = [];
  for (const c of n) {
    const {
      id: s
    } = c, l = r.get(s);
    if (l) {
      const d = yo(l), u = o.reduce((p, h, b) => p + qs(d[b], h), 0), f = Number((u / 4).toFixed(4));
      a.push({
        id: s,
        data: {
          droppableContainer: c,
          value: f
        }
      });
    }
  }
  return a.sort(Qs);
};
function Ws(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), c = o - n, s = a - r;
  if (n < o && r < a) {
    const l = t.width * t.height, d = e.width * e.height, u = c * s, f = u / (l + d - u);
    return Number(f.toFixed(4));
  }
  return 0;
}
const Us = (e) => {
  let {
    collisionRect: t,
    droppableRects: r,
    droppableContainers: n
  } = e;
  const o = [];
  for (const a of n) {
    const {
      id: c
    } = a, s = r.get(c);
    if (s) {
      const l = Ws(s, t);
      l > 0 && o.push({
        id: c,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return o.sort(Hs);
};
function Gs(e, t, r) {
  return {
    ...e,
    scaleX: t && r ? t.width / r.width : 1,
    scaleY: t && r ? t.height / r.height : 1
  };
}
function si(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : tt;
}
function Xs(e) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    return o.reduce((c, s) => ({
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
const Js = /* @__PURE__ */ Xs(1);
function ci(e) {
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
function Ks(e, t, r) {
  const n = ci(t);
  if (!n)
    return e;
  const {
    scaleX: o,
    scaleY: a,
    x: c,
    y: s
  } = n, l = e.left - c - (1 - o) * parseFloat(r), d = e.top - s - (1 - a) * parseFloat(r.slice(r.indexOf(" ") + 1)), u = o ? e.width / o : e.width, f = a ? e.height / a : e.height;
  return {
    width: u,
    height: f,
    top: d,
    right: l + u,
    bottom: d + f,
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
      getComputedStyle: d
    } = ke(e), {
      transform: u,
      transformOrigin: f
    } = d(e);
    u && (r = Ks(r, u, f));
  }
  const {
    top: n,
    left: o,
    width: a,
    height: c,
    bottom: s,
    right: l
  } = r;
  return {
    top: n,
    left: o,
    width: a,
    height: c,
    bottom: s,
    right: l
  };
}
function Ao(e) {
  return br(e, {
    ignoreTransform: !0
  });
}
function ec(e) {
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
function tc(e, t) {
  return t === void 0 && (t = ke(e).getComputedStyle(e)), t.position === "fixed";
}
function rc(e, t) {
  t === void 0 && (t = ke(e).getComputedStyle(e));
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const a = t[o];
    return typeof a == "string" ? r.test(a) : !1;
  });
}
function Mn(e, t) {
  const r = [];
  function n(o) {
    if (t != null && r.length >= t || !o)
      return r;
    if (kn(o) && o.scrollingElement != null && !r.includes(o.scrollingElement))
      return r.push(o.scrollingElement), r;
    if (!hr(o) || Os(o) || r.includes(o))
      return r;
    const {
      getComputedStyle: a
    } = ke(o), c = a(o);
    return o !== e && rc(o, c) && r.push(o), tc(o, c) ? r : n(o.parentNode);
  }
  return e ? n(e) : r;
}
function li(e) {
  const [t] = Mn(e, 1);
  return t != null ? t : null;
}
function dn(e) {
  return !Vr || !e ? null : zt(e) ? e : Cn(e) ? kn(e) || e === Wt(e).scrollingElement ? window : hr(e) ? e : null : null;
}
function ui(e) {
  return zt(e) ? e.scrollX : e.scrollLeft;
}
function fi(e) {
  return zt(e) ? e.scrollY : e.scrollTop;
}
function wn(e) {
  return {
    x: ui(e),
    y: fi(e)
  };
}
var Ee;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ee || (Ee = {}));
function di(e) {
  return !Vr || !e ? !1 : e === document.scrollingElement;
}
function pi(e) {
  const t = {
    x: 0,
    y: 0
  }, r = di(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, n = {
    x: e.scrollWidth - r.width,
    y: e.scrollHeight - r.height
  }, o = e.scrollTop <= t.y, a = e.scrollLeft <= t.x, c = e.scrollTop >= n.y, s = e.scrollLeft >= n.x;
  return {
    isTop: o,
    isLeft: a,
    isBottom: c,
    isRight: s,
    maxScroll: n,
    minScroll: t
  };
}
const nc = {
  x: 0.2,
  y: 0.2
};
function oc(e, t, r, n, o) {
  let {
    top: a,
    left: c,
    right: s,
    bottom: l
  } = r;
  n === void 0 && (n = 10), o === void 0 && (o = nc);
  const {
    isTop: d,
    isBottom: u,
    isLeft: f,
    isRight: p
  } = pi(e), h = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, m = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !d && a <= t.top + m.height ? (h.y = Ee.Backward, b.y = n * Math.abs((t.top + m.height - a) / m.height)) : !u && l >= t.bottom - m.height && (h.y = Ee.Forward, b.y = n * Math.abs((t.bottom - m.height - l) / m.height)), !p && s >= t.right - m.width ? (h.x = Ee.Forward, b.x = n * Math.abs((t.right - m.width - s) / m.width)) : !f && c <= t.left + m.width && (h.x = Ee.Backward, b.x = n * Math.abs((t.left + m.width - c) / m.width)), {
    direction: h,
    speed: b
  };
}
function ic(e) {
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
    bottom: o
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: r,
    right: n,
    bottom: o,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function vi(e) {
  return e.reduce((t, r) => Lt(t, wn(r)), tt);
}
function ac(e) {
  return e.reduce((t, r) => t + ui(r), 0);
}
function sc(e) {
  return e.reduce((t, r) => t + fi(r), 0);
}
function gi(e, t) {
  if (t === void 0 && (t = br), !e)
    return;
  const {
    top: r,
    left: n,
    bottom: o,
    right: a
  } = t(e);
  !li(e) || (o <= 0 || a <= 0 || r >= window.innerHeight || n >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const cc = [["x", ["left", "right"], ac], ["y", ["top", "bottom"], sc]];
class jn {
  constructor(t, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = Mn(r), o = vi(n);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, c, s] of cc)
      for (const l of c)
        Object.defineProperty(this, l, {
          get: () => {
            const d = s(n), u = o[a] - d;
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
    var o;
    (o = this.target) == null || o.addEventListener(t, r, n), this.listeners.push([t, r, n]);
  }
}
function lc(e) {
  const {
    EventTarget: t
  } = ke(e);
  return e instanceof t ? e : Wt(e);
}
function pn(e, t) {
  const r = Math.abs(e.x), n = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(r ** 2 + n ** 2) > t : "x" in t && "y" in t ? r > t.x && n > t.y : "x" in t ? r > t.x : "y" in t ? n > t.y : !1;
}
var He;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(He || (He = {}));
function xo(e) {
  e.preventDefault();
}
function uc(e) {
  e.stopPropagation();
}
var oe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(oe || (oe = {}));
const hi = {
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
class Fn {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: r
      }
    } = t;
    this.props = t, this.listeners = new or(Wt(r)), this.windowListeners = new or(ke(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(He.Resize, this.handleCancel), this.windowListeners.add(He.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(He.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: r
    } = this.props, n = t.node.current;
    n && gi(n), r(tt);
  }
  handleKeyDown(t) {
    if (Bn(t)) {
      const {
        active: r,
        context: n,
        options: o
      } = this.props, {
        keyboardCodes: a = hi,
        coordinateGetter: c = fc,
        scrollBehavior: s = "smooth"
      } = o, {
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
      } : tt;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const f = c(t, {
        active: r,
        context: n.current,
        currentCoordinates: u
      });
      if (f) {
        const p = Mr(f, u), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = n.current;
        for (const m of b) {
          const y = t.code, {
            isTop: w,
            isRight: S,
            isLeft: I,
            isBottom: D,
            maxScroll: A,
            minScroll: O
          } = pi(m), x = ic(m), _ = {
            x: Math.min(y === oe.Right ? x.right - x.width / 2 : x.right, Math.max(y === oe.Right ? x.left : x.left + x.width / 2, f.x)),
            y: Math.min(y === oe.Down ? x.bottom - x.height / 2 : x.bottom, Math.max(y === oe.Down ? x.top : x.top + x.height / 2, f.y))
          }, C = y === oe.Right && !S || y === oe.Left && !I, j = y === oe.Down && !D || y === oe.Up && !w;
          if (C && _.x !== f.x) {
            const M = m.scrollLeft + p.x, X = y === oe.Right && M <= A.x || y === oe.Left && M >= O.x;
            if (X && !p.y) {
              m.scrollTo({
                left: M,
                behavior: s
              });
              return;
            }
            X ? h.x = m.scrollLeft - M : h.x = y === oe.Right ? m.scrollLeft - A.x : m.scrollLeft - O.x, h.x && m.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (j && _.y !== f.y) {
            const M = m.scrollTop + p.y, X = y === oe.Down && M <= A.y || y === oe.Up && M >= O.y;
            if (X && !p.x) {
              m.scrollTo({
                top: M,
                behavior: s
              });
              return;
            }
            X ? h.y = m.scrollTop - M : h.y = y === oe.Down ? m.scrollTop - A.y : m.scrollTop - O.y, h.y && m.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Lt(Mr(f, this.referenceCoordinates), h));
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
Fn.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, r) => {
    let {
      keyboardCodes: n = hi,
      onActivation: o
    } = t, {
      active: a
    } = r;
    const {
      code: c
    } = e.nativeEvent;
    if (n.start.includes(c)) {
      const s = a.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), o == null || o({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function _o(e) {
  return Boolean(e && "distance" in e);
}
function wo(e) {
  return Boolean(e && "delay" in e);
}
class Ln {
  constructor(t, r, n) {
    var o;
    n === void 0 && (n = lc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = r;
    const {
      event: a
    } = t, {
      target: c
    } = a;
    this.props = t, this.events = r, this.document = Wt(c), this.documentListeners = new or(this.document), this.listeners = new or(n), this.windowListeners = new or(ke(c)), this.initialCoordinates = (o = jr(a)) != null ? o : tt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(He.Resize, this.handleCancel), this.windowListeners.add(He.DragStart, xo), this.windowListeners.add(He.VisibilityChange, this.handleCancel), this.windowListeners.add(He.ContextMenu, xo), this.documentListeners.add(He.Keydown, this.handleKeydown), r) {
      if (_o(r))
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
    t && (this.activated = !0, this.documentListeners.add(He.Click, uc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(He.SelectionChange, this.removeTextSelection), r(t));
  }
  handleMove(t) {
    var r;
    const {
      activated: n,
      initialCoordinates: o,
      props: a
    } = this, {
      onMove: c,
      options: {
        activationConstraint: s
      }
    } = a;
    if (!o)
      return;
    const l = (r = jr(t)) != null ? r : tt, d = Mr(o, l);
    if (!n && s) {
      if (wo(s))
        return pn(d, s.tolerance) ? this.handleCancel() : void 0;
      if (_o(s))
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
const dc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class mi extends Ln {
  constructor(t) {
    const {
      event: r
    } = t, n = Wt(r.target);
    super(t, dc, n);
  }
}
mi.activators = [{
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
var Tn;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Tn || (Tn = {}));
class bi extends Ln {
  constructor(t) {
    super(t, pc, Wt(t.event.target));
  }
}
bi.activators = [{
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
class yi extends Ln {
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
yi.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    const {
      touches: o
    } = r;
    return o.length > 1 ? !1 : (n == null || n({
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
    draggingRect: o,
    enabled: a,
    interval: c = 5,
    order: s = Lr.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: d,
    scrollableAncestorRects: u,
    delta: f,
    threshold: p
  } = e;
  const h = hc({
    delta: f,
    disabled: !a
  }), [b, m] = Ss(), y = K({
    x: 0,
    y: 0
  }), w = K({
    x: 0,
    y: 0
  }), S = le(() => {
    switch (r) {
      case ir.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case ir.DraggableRect:
        return o;
    }
  }, [r, o, l]), I = K(null), D = Pe(() => {
    const O = I.current;
    if (!O)
      return;
    const x = y.current.x * w.current.x, _ = y.current.y * w.current.y;
    O.scrollBy(x, _);
  }, []), A = le(() => s === Lr.TreeOrder ? [...d].reverse() : d, [s, d]);
  W(
    () => {
      if (!a || !d.length || !S) {
        m();
        return;
      }
      for (const O of A) {
        if ((n == null ? void 0 : n(O)) === !1)
          continue;
        const x = d.indexOf(O), _ = u[x];
        if (!_)
          continue;
        const {
          direction: C,
          speed: j
        } = oc(O, _, S, t, p);
        for (const M of ["x", "y"])
          h[M][C[M]] || (j[M] = 0, C[M] = 0);
        if (j.x > 0 || j.y > 0) {
          m(), I.current = O, b(D, c), y.current = j, w.current = C;
          return;
        }
      }
      y.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, m();
    },
    [
      t,
      D,
      n,
      m,
      a,
      c,
      JSON.stringify(S),
      JSON.stringify(h),
      b,
      d,
      A,
      u,
      JSON.stringify(p)
    ]
  );
}
const gc = {
  x: {
    [Ee.Backward]: !1,
    [Ee.Forward]: !1
  },
  y: {
    [Ee.Backward]: !1,
    [Ee.Forward]: !1
  }
};
function hc(e) {
  let {
    delta: t,
    disabled: r
  } = e;
  const n = Br(t);
  return mr((o) => {
    if (r || !n || !o)
      return gc;
    const a = {
      x: Math.sign(t.x - n.x),
      y: Math.sign(t.y - n.y)
    };
    return {
      x: {
        [Ee.Backward]: o.x[Ee.Backward] || a.x === -1,
        [Ee.Forward]: o.x[Ee.Forward] || a.x === 1
      },
      y: {
        [Ee.Backward]: o.y[Ee.Backward] || a.y === -1,
        [Ee.Forward]: o.y[Ee.Forward] || a.y === 1
      }
    };
  }, [r, t, n]);
}
function mc(e, t) {
  const r = t !== null ? e.get(t) : void 0, n = r ? r.node.current : null;
  return mr((o) => {
    var a;
    return t === null ? null : (a = n != null ? n : o) != null ? a : null;
  }, [n, t]);
}
function bc(e, t) {
  return le(() => e.reduce((r, n) => {
    const {
      sensor: o
    } = n, a = o.activators.map((c) => ({
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
var En;
(function(e) {
  e.Optimized = "optimized";
})(En || (En = {}));
const To = /* @__PURE__ */ new Map();
function yc(e, t) {
  let {
    dragging: r,
    dependencies: n,
    config: o
  } = t;
  const [a, c] = G(null), s = a != null, {
    frequency: l,
    measure: d,
    strategy: u
  } = o, f = K(e), p = w(), h = ur(p), b = Pe(function(S) {
    S === void 0 && (S = []), !h.current && c((I) => I ? I.concat(S) : S);
  }, [h]), m = K(null), y = mr((S) => {
    if (p && !r)
      return To;
    const I = a;
    if (!S || S === To || f.current !== e || I != null) {
      const D = /* @__PURE__ */ new Map();
      for (let A of e) {
        if (!A)
          continue;
        if (I && I.length > 0 && !I.includes(A.id) && A.rect.current) {
          D.set(A.id, A.rect.current);
          continue;
        }
        const O = A.node.current, x = O ? new jn(d(O), O) : null;
        A.rect.current = x, x && D.set(A.id, x);
      }
      return D;
    }
    return S;
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
      p || typeof l != "number" || m.current !== null || (m.current = setTimeout(() => {
        b(), m.current = null;
      }, l));
    },
    [l, p, b, ...n]
  ), {
    droppableRects: y,
    measureDroppableContainers: b,
    measuringScheduled: s
  };
  function w() {
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
function $n(e, t) {
  return mr((r) => e ? r || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Ac(e, t) {
  return $n(e, t);
}
function xc(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = Qr(t), o = le(() => {
    if (r || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: a
    } = window;
    return new a(n);
  }, [n, r]);
  return W(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function zr(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = Qr(t), o = le(
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
  return W(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function _c(e) {
  return new jn(br(e), e);
}
function Eo(e, t, r) {
  t === void 0 && (t = _c);
  const [n, o] = Dn(s, null), a = xc({
    callback(l) {
      if (!!e)
        for (const d of l) {
          const {
            type: u,
            target: f
          } = d;
          if (u === "childList" && f instanceof HTMLElement && f.contains(e)) {
            o();
            break;
          }
        }
    }
  }), c = zr({
    callback: o
  });
  return at(() => {
    o(), e ? (c == null || c.observe(e), a == null || a.observe(document.body, {
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
function wc(e) {
  const t = $n(e);
  return si(e, t);
}
const Oo = [];
function Tc(e) {
  const t = K(e), r = mr((n) => e ? n && n !== Oo && e && t.current && e.parentNode === t.current.parentNode ? n : Mn(e) : Oo, [e]);
  return W(() => {
    t.current = e;
  }, [e]), r;
}
function Ec(e) {
  const [t, r] = G(null), n = K(e), o = Pe((a) => {
    const c = dn(a.target);
    !c || r((s) => s ? (s.set(c, wn(c)), new Map(s)) : null);
  }, []);
  return W(() => {
    const a = n.current;
    if (e !== a) {
      c(a);
      const s = e.map((l) => {
        const d = dn(l);
        return d ? (d.addEventListener("scroll", o, {
          passive: !0
        }), [d, wn(d)]) : null;
      }).filter((l) => l != null);
      r(s.length ? new Map(s) : null), n.current = e;
    }
    return () => {
      c(e), c(a);
    };
    function c(s) {
      s.forEach((l) => {
        const d = dn(l);
        d == null || d.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), le(() => e.length ? t ? Array.from(t.values()).reduce((a, c) => Lt(a, c), tt) : vi(e) : tt, [e, t]);
}
function So(e, t) {
  t === void 0 && (t = []);
  const r = K(null);
  return W(
    () => {
      r.current = null;
    },
    t
  ), W(() => {
    const n = e !== tt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? Mr(e, r.current) : tt;
}
function Oc(e) {
  W(
    () => {
      if (!Vr)
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
function Sc(e, t) {
  return le(() => e.reduce((r, n) => {
    let {
      eventName: o,
      handler: a
    } = n;
    return r[o] = (c) => {
      a(c, t);
    }, r;
  }, {}), [e, t]);
}
function Ai(e) {
  return le(() => e ? ec(e) : null, [e]);
}
const gn = [];
function Rc(e, t) {
  t === void 0 && (t = br);
  const [r] = e, n = Ai(r ? ke(r) : null), [o, a] = Dn(s, gn), c = zr({
    callback: a
  });
  return e.length > 0 && o === gn && a(), at(() => {
    e.length ? e.forEach((l) => c == null ? void 0 : c.observe(l)) : (c == null || c.disconnect(), a());
  }, [e]), o;
  function s() {
    return e.length ? e.map((l) => di(l) ? n : new jn(t(l), l)) : gn;
  }
}
function xi(e) {
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
  const [r, n] = G(null), o = Pe((d) => {
    for (const {
      target: u
    } of d)
      if (hr(u)) {
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
  }, [t]), a = zr({
    callback: o
  }), c = Pe((d) => {
    const u = xi(d);
    a == null || a.disconnect(), u && (a == null || a.observe(u)), n(u ? t(u) : null);
  }, [t, a]), [s, l] = kr(c);
  return le(() => ({
    nodeRef: s,
    rect: r,
    setRef: l
  }), [r, s, l]);
}
const Ic = [{
  sensor: mi,
  options: {}
}, {
  sensor: Fn,
  options: {}
}], Pc = {
  current: {}
}, Pr = {
  draggable: {
    measure: Ao
  },
  droppable: {
    measure: Ao,
    strategy: fr.WhileDragging,
    frequency: En.Optimized
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
    setRef: Fr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Pr,
  measureDroppableContainers: Fr,
  windowRect: null,
  measuringScheduled: !1
}, _i = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Fr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Fr
}, yr = /* @__PURE__ */ nt(_i), wi = /* @__PURE__ */ nt(Nc);
function Cc() {
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
function kc(e, t) {
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
      } = r, o = new ar(e.droppable.containers);
      return o.set(n, r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case xe.SetDroppableDisabled: {
      const {
        id: r,
        key: n,
        disabled: o
      } = t, a = e.droppable.containers.get(r);
      if (!a || n !== a.key)
        return e;
      const c = new ar(e.droppable.containers);
      return c.set(r, {
        ...a,
        disabled: o
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
      } = t, o = e.droppable.containers.get(r);
      if (!o || n !== o.key)
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
function Bc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: o
  } = ye(yr), a = Br(n), c = Br(r == null ? void 0 : r.id);
  return W(() => {
    if (!t && !n && a && c != null) {
      if (!Bn(a) || document.activeElement === a.target)
        return;
      const s = o.get(c);
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
  }, [n, t, o, c, a]), null;
}
function Ti(e, t) {
  let {
    transform: r,
    ...n
  } = t;
  return e != null && e.length ? e.reduce((o, a) => a({
    transform: o,
    ...n
  }), r) : r;
}
function Mc(e) {
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
    config: o = !0
  } = e;
  const a = K(!1), {
    x: c,
    y: s
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
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
    const u = r(d), f = si(u, n);
    if (c || (f.x = 0), s || (f.y = 0), a.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const p = li(d);
      p && p.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, c, s, n, r]);
}
const Wr = /* @__PURE__ */ nt({
  ...tt,
  scaleX: 1,
  scaleY: 1
});
var ht;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(ht || (ht = {}));
const Fc = /* @__PURE__ */ zo(function(t) {
  var r, n, o, a;
  let {
    id: c,
    accessibility: s,
    autoScroll: l = !0,
    children: d,
    sensors: u = Ic,
    collisionDetection: f = Us,
    measuring: p,
    modifiers: h,
    ...b
  } = t;
  const m = Dn(kc, void 0, Cc), [y, w] = m, [S, I] = js(), [D, A] = G(ht.Uninitialized), O = D === ht.Initialized, {
    draggable: {
      active: x,
      nodes: _,
      translate: C
    },
    droppable: {
      containers: j
    }
  } = y, M = x ? _.get(x) : null, X = K({
    initial: null,
    translated: null
  }), H = le(() => {
    var ve;
    return x != null ? {
      id: x,
      data: (ve = M == null ? void 0 : M.data) != null ? ve : Pc,
      rect: X
    } : null;
  }, [x, M]), re = K(null), [fe, ie] = G(null), [ee, Ae] = G(null), ge = ur(b, Object.values(b)), E = Hr("DndDescribedBy", c), k = le(() => j.getEnabled(), [j]), $ = Mc(p), {
    droppableRects: Y,
    measureDroppableContainers: L,
    measuringScheduled: z
  } = yc(k, {
    dragging: O,
    dependencies: [C.x, C.y],
    config: $.droppable
  }), F = mc(_, x), V = le(() => ee ? jr(ee) : null, [ee]), Q = Or(), J = Ac(F, $.draggable.measure);
  jc({
    activeNode: x ? _.get(x) : null,
    config: Q.layoutShiftCompensation,
    initialRect: J,
    measure: $.draggable.measure
  });
  const q = Eo(F, $.draggable.measure, J), N = Eo(F ? F.parentElement : null), T = K({
    activatorEvent: null,
    active: null,
    activeNode: F,
    collisionRect: null,
    collisions: null,
    droppableRects: Y,
    draggableNodes: _,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: j,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Z = j.getNodeFor((r = T.current.over) == null ? void 0 : r.id), he = Dc({
    measure: $.dragOverlay.measure
  }), we = (n = he.nodeRef.current) != null ? n : F, De = O ? (o = he.rect) != null ? o : q : null, ot = Boolean(he.nodeRef.current && he.rect), lt = wc(ot ? null : q), it = Ai(we ? ke(we) : null), Te = Tc(O ? Z != null ? Z : F : null), Xe = Rc(Te), Je = Ti(h, {
    transform: {
      x: C.x - lt.x,
      y: C.y - lt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ee,
    active: H,
    activeNodeRect: q,
    containerNodeRect: N,
    draggingNodeRect: De,
    over: T.current.over,
    overlayNodeRect: he.rect,
    scrollableAncestors: Te,
    scrollableAncestorRects: Xe,
    windowRect: it
  }), At = V ? Lt(V, C) : null, pt = Ec(Te), xt = So(pt), _t = So(pt, [q]), Ne = Lt(Je, xt), Ke = De ? Js(De, Je) : null, vt = H && Ke ? f({
    active: H,
    collisionRect: Ke,
    droppableRects: Y,
    droppableContainers: k,
    pointerCoordinates: At
  }) : null, Gt = ai(vt, "id"), [qe, wr] = G(null), Kr = ot ? Je : Lt(Je, _t), Zr = Gs(Kr, (a = qe == null ? void 0 : qe.rect) != null ? a : null, q), Tr = Pe(
    (ve, Se) => {
      let {
        sensor: Re,
        options: Ze
      } = Se;
      if (re.current == null)
        return;
      const Be = _.get(re.current);
      if (!Be)
        return;
      const Me = ve.nativeEvent, Ve = new Re({
        active: re.current,
        activeNode: Be,
        event: Me,
        options: Ze,
        context: T,
        onStart(je) {
          const wt = re.current;
          if (wt == null)
            return;
          const Tt = _.get(wt);
          if (!Tt)
            return;
          const {
            onDragStart: Et
          } = ge.current, Ct = {
            active: {
              id: wt,
              data: Tt.data,
              rect: X
            }
          };
          Jt(() => {
            Et == null || Et(Ct), A(ht.Initializing), w({
              type: xe.DragStart,
              initialCoordinates: je,
              active: wt
            }), S({
              type: "onDragStart",
              event: Ct
            });
          });
        },
        onMove(je) {
          w({
            type: xe.DragMove,
            coordinates: je
          });
        },
        onEnd: ut(xe.DragEnd),
        onCancel: ut(xe.DragCancel)
      });
      Jt(() => {
        ie(Ve), Ae(ve.nativeEvent);
      });
      function ut(je) {
        return async function() {
          const {
            active: Tt,
            collisions: Et,
            over: Ct,
            scrollAdjustedTranslate: Sr
          } = T.current;
          let Ot = null;
          if (Tt && Sr) {
            const {
              cancelDrop: St
            } = ge.current;
            Ot = {
              activatorEvent: Me,
              active: Tt,
              collisions: Et,
              delta: Sr,
              over: Ct
            }, je === xe.DragEnd && typeof St == "function" && await Promise.resolve(St(Ot)) && (je = xe.DragCancel);
          }
          re.current = null, Jt(() => {
            w({
              type: je
            }), A(ht.Uninitialized), wr(null), ie(null), Ae(null);
            const St = je === xe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ot) {
              const v = ge.current[St];
              v == null || v(Ot), S({
                type: St,
                event: Ot
              });
            }
          });
        };
      }
    },
    [_]
  ), en = Pe((ve, Se) => (Re, Ze) => {
    const Be = Re.nativeEvent, Me = _.get(Ze);
    if (re.current !== null || !Me || Be.dndKit || Be.defaultPrevented)
      return;
    const Ve = {
      active: Me
    };
    ve(Re, Se.options, Ve) === !0 && (Be.dndKit = {
      capturedBy: Se.sensor
    }, re.current = Ze, Tr(Re, Se));
  }, [_, Tr]), Er = bc(u, en);
  Oc(u), at(() => {
    q && D === ht.Initializing && A(ht.Initialized);
  }, [q, D]), W(
    () => {
      const {
        onDragMove: ve
      } = ge.current, {
        active: Se,
        activatorEvent: Re,
        collisions: Ze,
        over: Be
      } = T.current;
      if (!Se || !Re)
        return;
      const Me = {
        active: Se,
        activatorEvent: Re,
        collisions: Ze,
        delta: {
          x: Ne.x,
          y: Ne.y
        },
        over: Be
      };
      Jt(() => {
        ve == null || ve(Me), S({
          type: "onDragMove",
          event: Me
        });
      });
    },
    [Ne.x, Ne.y]
  ), W(
    () => {
      const {
        active: ve,
        activatorEvent: Se,
        collisions: Re,
        droppableContainers: Ze,
        scrollAdjustedTranslate: Be
      } = T.current;
      if (!ve || re.current == null || !Se || !Be)
        return;
      const {
        onDragOver: Me
      } = ge.current, Ve = Ze.get(Gt), ut = Ve && Ve.rect.current ? {
        id: Ve.id,
        rect: Ve.rect.current,
        data: Ve.data,
        disabled: Ve.disabled
      } : null, je = {
        active: ve,
        activatorEvent: Se,
        collisions: Re,
        delta: {
          x: Be.x,
          y: Be.y
        },
        over: ut
      };
      Jt(() => {
        wr(ut), Me == null || Me(je), S({
          type: "onDragOver",
          event: je
        });
      });
    },
    [Gt]
  ), at(() => {
    T.current = {
      activatorEvent: ee,
      active: H,
      activeNode: F,
      collisionRect: Ke,
      collisions: vt,
      droppableRects: Y,
      draggableNodes: _,
      draggingNode: we,
      draggingNodeRect: De,
      droppableContainers: j,
      over: qe,
      scrollableAncestors: Te,
      scrollAdjustedTranslate: Ne
    }, X.current = {
      initial: De,
      translated: Ke
    };
  }, [H, F, vt, Ke, _, we, De, Y, j, qe, Te, Ne]), vc({
    ...Q,
    delta: C,
    draggingRect: Ke,
    pointerCoordinates: At,
    scrollableAncestors: Te,
    scrollableAncestorRects: Xe
  });
  const tn = le(() => ({
    active: H,
    activeNode: F,
    activeNodeRect: q,
    activatorEvent: ee,
    collisions: vt,
    containerNodeRect: N,
    dragOverlay: he,
    draggableNodes: _,
    droppableContainers: j,
    droppableRects: Y,
    over: qe,
    measureDroppableContainers: L,
    scrollableAncestors: Te,
    scrollableAncestorRects: Xe,
    measuringConfiguration: $,
    measuringScheduled: z,
    windowRect: it
  }), [H, F, q, ee, vt, N, he, _, j, Y, qe, L, Te, Xe, $, z, it]), Xt = le(() => ({
    activatorEvent: ee,
    activators: Er,
    active: H,
    activeNodeRect: q,
    ariaDescribedById: {
      draggable: E
    },
    dispatch: w,
    draggableNodes: _,
    over: qe,
    measureDroppableContainers: L
  }), [ee, Er, H, q, w, E, _, qe, L]);
  return /* @__PURE__ */ P(ii.Provider, {
    value: I,
    children: [/* @__PURE__ */ P(yr.Provider, {
      value: Xt,
      children: [/* @__PURE__ */ g(wi.Provider, {
        value: tn,
        children: /* @__PURE__ */ g(Wr.Provider, {
          value: Zr,
          children: d
        })
      }), /* @__PURE__ */ g(Bc, {
        disabled: (s == null ? void 0 : s.restoreFocus) === !1
      })]
    }), /* @__PURE__ */ g($s, {
      ...s,
      hiddenTextDescribedById: E
    })]
  });
  function Or() {
    const ve = (fe == null ? void 0 : fe.autoScrollEnabled) === !1, Se = typeof l == "object" ? l.enabled === !1 : l === !1, Re = O && !ve && !Se;
    return typeof l == "object" ? {
      ...l,
      enabled: Re
    } : {
      enabled: Re
    };
  }
}), Lc = /* @__PURE__ */ nt(null), Ro = "button", $c = "Droppable";
function Yc(e) {
  let {
    id: t,
    data: r,
    disabled: n = !1,
    attributes: o
  } = e;
  const a = Hr($c), {
    activators: c,
    activatorEvent: s,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: u,
    draggableNodes: f,
    over: p
  } = ye(yr), {
    role: h = Ro,
    roleDescription: b = "draggable",
    tabIndex: m = 0
  } = o != null ? o : {}, y = (l == null ? void 0 : l.id) === t, w = ye(y ? Wr : Lc), [S, I] = kr(), [D, A] = kr(), O = Sc(c, t), x = ur(r);
  at(
    () => (f.set(t, {
      id: t,
      key: a,
      node: S,
      activatorNode: D,
      data: x
    }), () => {
      const C = f.get(t);
      C && C.key === a && f.delete(t);
    }),
    [f, t]
  );
  const _ = le(() => ({
    role: h,
    tabIndex: m,
    "aria-disabled": n,
    "aria-pressed": y && h === Ro ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": u.draggable
  }), [n, h, m, y, b, u.draggable]);
  return {
    active: l,
    activatorEvent: s,
    activeNodeRect: d,
    attributes: _,
    isDragging: y,
    listeners: n ? void 0 : O,
    node: S,
    over: p,
    setNodeRef: I,
    setActivatorNodeRef: A,
    transform: w
  };
}
function qc() {
  return ye(wi);
}
const Vc = "Droppable", Qc = {
  timeout: 25
};
function Ei(e) {
  let {
    data: t,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: o
  } = e;
  const a = Hr(Vc), {
    active: c,
    dispatch: s,
    over: l,
    measureDroppableContainers: d
  } = ye(yr), u = K({
    disabled: r
  }), f = K(!1), p = K(null), h = K(null), {
    disabled: b,
    updateMeasurementsFor: m,
    timeout: y
  } = {
    ...Qc,
    ...o
  }, w = ur(m != null ? m : n), S = Pe(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        d(Array.isArray(w.current) ? w.current : [w.current]), h.current = null;
      }, y);
    },
    [y]
  ), I = zr({
    callback: S,
    disabled: b || !c
  }), D = Pe((_, C) => {
    !I || (C && (I.unobserve(C), f.current = !1), _ && I.observe(_));
  }, [I]), [A, O] = kr(D), x = ur(t);
  return W(() => {
    !I || !A.current || (I.disconnect(), f.current = !1, I.observe(A.current));
  }, [A, I]), at(
    () => (s({
      type: xe.RegisterDroppable,
      element: {
        id: n,
        key: a,
        disabled: r,
        node: A,
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
    node: A,
    over: l,
    setNodeRef: O
  };
}
function Hc(e) {
  let {
    animation: t,
    children: r
  } = e;
  const [n, o] = G(null), [a, c] = G(null), s = Br(r);
  return !r && !n && s && o(s), at(() => {
    if (!a)
      return;
    const l = n == null ? void 0 : n.key, d = n == null ? void 0 : n.props.id;
    if (l == null || d == null) {
      o(null);
      return;
    }
    Promise.resolve(t(d, a)).then(() => {
      o(null);
    });
  }, [t, n, a]), /* @__PURE__ */ P(dt, {
    children: [r, n ? _e(n, {
      ref: c
    }) : null]
  });
}
const zc = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Wc(e) {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ g(yr.Provider, {
    value: _i,
    children: /* @__PURE__ */ g(Wr.Provider, {
      value: zc,
      children: t
    })
  });
}
const Uc = {
  position: "fixed",
  touchAction: "none"
}, Gc = (e) => Bn(e) ? "transform 250ms ease" : void 0, Xc = /* @__PURE__ */ ct((e, t) => {
  let {
    as: r,
    activatorEvent: n,
    adjustScale: o,
    children: a,
    className: c,
    rect: s,
    style: l,
    transform: d,
    transition: u = Gc
  } = e;
  if (!s)
    return null;
  const f = o ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, p = {
    ...Uc,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: $t.Transform.toString(f),
    transformOrigin: o && n ? Vs(n, s) : void 0,
    transition: typeof u == "function" ? u(n) : u,
    ...l
  };
  return Yr.createElement(r, {
    className: c,
    style: p,
    ref: t
  }, a);
}), Oi = (e) => (t) => {
  let {
    active: r,
    dragOverlay: n
  } = t;
  const o = {}, {
    styles: a,
    className: c
  } = e;
  if (a != null && a.active)
    for (const [s, l] of Object.entries(a.active))
      l !== void 0 && (o[s] = r.node.style.getPropertyValue(s), r.node.style.setProperty(s, l));
  if (a != null && a.dragOverlay)
    for (const [s, l] of Object.entries(a.dragOverlay))
      l !== void 0 && n.node.style.setProperty(s, l);
  return c != null && c.active && r.node.classList.add(c.active), c != null && c.dragOverlay && n.node.classList.add(c.dragOverlay), function() {
    for (const [l, d] of Object.entries(o))
      r.node.style.setProperty(l, d);
    c != null && c.active && r.node.classList.remove(c.active);
  };
}, Jc = (e) => {
  let {
    transform: {
      initial: t,
      final: r
    }
  } = e;
  return [{
    transform: $t.Transform.toString(t)
  }, {
    transform: $t.Transform.toString(r)
  }];
}, Kc = {
  duration: 250,
  easing: "ease",
  keyframes: Jc,
  sideEffects: /* @__PURE__ */ Oi({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Zc(e) {
  let {
    config: t,
    draggableNodes: r,
    droppableContainers: n,
    measuringConfiguration: o
  } = e;
  return Qr((a, c) => {
    if (t === null)
      return;
    const s = r.get(a);
    if (!s)
      return;
    const l = s.node.current;
    if (!l)
      return;
    const d = xi(c);
    if (!d)
      return;
    const {
      transform: u
    } = ke(c).getComputedStyle(c), f = ci(u);
    if (!f)
      return;
    const p = typeof t == "function" ? t : el(t);
    return gi(l, o.draggable.measure), p({
      active: {
        id: a,
        data: s.data,
        node: l,
        rect: o.draggable.measure(l)
      },
      draggableNodes: r,
      dragOverlay: {
        node: c,
        rect: o.dragOverlay.measure(d)
      },
      droppableContainers: n,
      measuringConfiguration: o,
      transform: f
    });
  });
}
function el(e) {
  const {
    duration: t,
    easing: r,
    sideEffects: n,
    keyframes: o
  } = {
    ...Kc,
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
    }, h = o({
      ...d,
      active: c,
      dragOverlay: s,
      transform: {
        initial: l,
        final: p
      }
    }), [b] = h, m = h[h.length - 1];
    if (JSON.stringify(b) === JSON.stringify(m))
      return;
    const y = n == null ? void 0 : n({
      active: c,
      dragOverlay: s,
      ...d
    }), w = s.node.animate(h, {
      duration: t,
      easing: r,
      fill: "forwards"
    });
    return new Promise((S) => {
      w.onfinish = () => {
        y == null || y(), S();
      };
    });
  };
}
let Do = 0;
function tl(e) {
  return le(() => {
    if (e != null)
      return Do++, Do;
  }, [e]);
}
const rl = /* @__PURE__ */ Yr.memo((e) => {
  let {
    adjustScale: t = !1,
    children: r,
    dropAnimation: n,
    style: o,
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
    containerNodeRect: h,
    draggableNodes: b,
    droppableContainers: m,
    dragOverlay: y,
    over: w,
    measuringConfiguration: S,
    scrollableAncestors: I,
    scrollableAncestorRects: D,
    windowRect: A
  } = qc(), O = ye(Wr), x = tl(f == null ? void 0 : f.id), _ = Ti(c, {
    activatorEvent: u,
    active: f,
    activeNodeRect: p,
    containerNodeRect: h,
    draggingNodeRect: y.rect,
    over: w,
    overlayNodeRect: y.rect,
    scrollableAncestors: I,
    scrollableAncestorRects: D,
    transform: O,
    windowRect: A
  }), C = $n(p), j = Zc({
    config: n,
    draggableNodes: b,
    droppableContainers: m,
    measuringConfiguration: S
  }), M = C ? y.setRef : void 0;
  return /* @__PURE__ */ g(Wc, {
    children: /* @__PURE__ */ g(Hc, {
      animation: j,
      children: f && x ? /* @__PURE__ */ g(Xc, {
        id: f.id,
        ref: M,
        as: s,
        activatorEvent: u,
        adjustScale: t,
        className: l,
        transition: a,
        rect: C,
        style: {
          zIndex: d,
          ...o
        },
        transform: _,
        children: r
      }, x) : null
    })
  });
}), nl = ({
  transform: e
}) => ({
  ...e,
  y: 0
}), ol = ({
  transform: e
}) => ({
  ...e,
  x: 0
}), il = [oe.Down, oe.Right, oe.Up, oe.Left], al = (e, { context: { active: t, droppableRects: r, droppableContainers: n, collisionRect: o } }) => {
  var a;
  if (il.includes(e.code)) {
    e.preventDefault();
    const c = 20;
    if (!t || !o)
      return;
    const s = [];
    n.getEnabled().forEach((u) => {
      if (!u || (u == null ? void 0 : u.disabled))
        return;
      const f = r.get(u.id);
      if (!!f)
        switch (e.code) {
          case oe.Down:
            o.top < f.top && s.push(u);
            break;
          case oe.Up:
            o.top > f.top + c && s.push(u);
            break;
          case oe.Left:
            o.left >= f.left + f.width && s.push(u);
            break;
          case oe.Right:
            o.left + o.width <= f.left && s.push(u);
            break;
        }
    });
    const l = zs({
      active: t,
      collisionRect: o,
      droppableRects: r,
      droppableContainers: s,
      pointerCoordinates: null
    }), d = ai(l, "id");
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
}, sl = "_pop_1t0s1_1", cl = "_pulse_1t0s1_1", Ut = {
  "c-droppable": "_c-droppable_1t0s1_1",
  "c-droppable--active": "_c-droppable--active_1t0s1_22",
  "c-draggable": "_c-draggable_1t0s1_27",
  "c-draggable--active": "_c-draggable--active_1t0s1_56",
  pop: sl,
  pulse: cl
}, Si = nt(), Mt = (e, t) => Oe.map(e, (r) => {
  var n;
  if (!!Ue(r) && !!r.props) {
    if (((n = r == null ? void 0 : r.props) == null ? void 0 : n.__TYPE) === t)
      return r;
    if (r.props.children)
      return Mt(r.props.children, t);
  }
}), ll = {
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
}, Ri = ({
  children: e,
  multipleDrags: t,
  onValidate: r,
  validate: n,
  reboot: o,
  propValidate: a,
  modifiers: c,
  announcements: s
}) => {
  const [l, d] = G([]), [u, f] = G(null), [p, h] = G(() => b());
  function b() {
    return [...Mt(e, "droppable"), ...Mt(e, "general-draggable")].reduce((x, _) => ({
      ...x,
      [_.props.id]: _.props.children ? [...Mt(_.props.children, "draggable").map((C) => C.props.id)] : []
    }), {});
  }
  const m = Object.freeze({
    restrictToVerticalAxis: ol,
    restrictToHorizontalAxis: nl
  }), y = Ys(fn(bi), fn(yi), fn(Fn, {
    coordinateGetter: al
  })), w = (x, _) => {
    if (Object.keys(p).pop() !== x.id && x.data.current.validate.includes(_))
      return d((j) => [...j.filter((M) => M !== _), _]);
    d((j) => [...j.filter((M) => M !== _)]);
  }, S = (x) => x in p ? x : Object.keys(p).find((_) => p[_].includes(x)), I = ({
    active: x,
    over: _
  }) => {
    if (!_)
      return;
    f(null), w(_, x.id);
    const C = S(_.id), j = S(x.id);
    if (j !== C) {
      if (t)
        return h((X) => ({
          ...X,
          [j]: X[j].filter((H) => H !== x.id),
          [C]: [...X[C], x.id]
        }));
      const M = Object.keys(p).pop();
      h((X) => ({
        ...X,
        [C]: C === M ? [...X[C], x.id] : [x.id],
        [j]: C === M ? X[j].filter((H) => H !== x.id) : [...X[j].filter((H) => H !== x.id), ...X[C]]
      }));
    }
  }, D = (x) => Oe.map(x, (_) => {
    if (!_.props)
      return _;
    if (_.props.__TYPE !== "draggable")
      return _.props.id in p && p[_.props.id].length > 0 ? _e(_, {
        ..._.props
      }, [...p[_.props.id].map((C) => Mt(e, "draggable").filter((j) => j.props.id === C)).flat()]) : _.props.children ? _e(_, {
        ..._.props,
        children: D(_.props.children)
      }) : _;
  }), A = () => {
    const x = Mt(e, "draggable").filter((_) => _.props.id === u).reduce((_, C) => ({
      ..._,
      ...C.props
    }), {});
    return Wo((x == null ? void 0 : x.element) || "div", {
      className: `${Ut["c-draggable"]} ${x == null ? void 0 : x.addClass}`
    }, [x.children]);
  }, O = {
    sideEffects: Oi({
      styles: {
        active: {
          opacity: "0.5"
        }
      }
    })
  };
  return W(() => {
    l.length > 0 && r && r(l);
  }, [l, r]), W(() => {
    o && h(() => b());
  }, [o]), /* @__PURE__ */ g(Si.Provider, {
    value: {
      listId: l,
      propValidate: a,
      validate: n,
      isDragging: u
    },
    children: /* @__PURE__ */ P(Fc, {
      sensors: y,
      accessibility: {
        announcements: s
      },
      onDragStart: ({
        active: x
      }) => f(x.id),
      onDragEnd: I,
      onDragCancel: () => f(null),
      ...c && {
        modifiers: [m[c]]
      },
      children: [D(e), /* @__PURE__ */ g(rl, {
        dropAnimation: O,
        children: u && A()
      })]
    })
  });
};
Ri.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: ll
};
Ri.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.arrayOf(i.exports.element), i.exports.node, i.exports.arrayOf(i.exports.node)]),
  multipleDrags: i.exports.bool,
  onValidate: i.exports.func,
  reboot: i.exports.bool,
  validate: i.exports.bool.isRequired,
  propValidate: i.exports.string.isRequired,
  modifiers: i.exports.oneOf(["restrictToVerticalAxis", "restrictToHorizontalAxis"]),
  announcements: i.exports.object.isRequired
};
const Di = ({
  children: e,
  id: t,
  addClass: r,
  dragging: n,
  label: o,
  attribute: a,
  disabledDefaultAttributes: c,
  element: s
}) => {
  const l = s || "div", {
    listId: d,
    propValidate: u,
    validate: f,
    isDragging: p
  } = ye(Si), {
    attributes: h,
    listeners: b,
    setNodeRef: m,
    transform: y
  } = Yc({
    id: t,
    disabled: f,
    data: {
      label: o
    },
    attributes: a
  });
  return /* @__PURE__ */ g(l, {
    id: t,
    ref: m,
    className: `${Ut["c-draggable"]} ${p === t ? n : ""} ${r != null ? r : ""}`,
    style: {
      transform: $t.Translate.toString(y)
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
Di.defaultProps = {
  __TYPE: "draggable",
  dragging: Ut["c-draggable--active"],
  disabledDefaultAttributes: !1
};
Di.propTypes = {
  children: i.exports.oneOfType([i.exports.node, i.exports.element]),
  id: i.exports.string.isRequired,
  addClass: i.exports.string,
  dragging: i.exports.string,
  label: i.exports.string.isRequired,
  attribute: i.exports.shape({
    role: i.exports.string,
    roleDescription: i.exports.string,
    tabIndex: i.exports.number
  }),
  disabledDefaultAttributes: i.exports.bool,
  element: i.exports.string,
  __TYPE: pe("draggable")
};
const Ii = ({
  children: e,
  id: t,
  validate: r,
  addClass: n,
  over: o,
  label: a,
  element: c,
  __TYPE: s,
  ...l
}) => {
  const d = c || "div", {
    isOver: u,
    setNodeRef: f
  } = Ei({
    id: t,
    data: {
      validate: r,
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ g(d, {
    ref: f,
    "data-type": s,
    className: `${Ut["c-droppable"]} ${u && o && o} ${n != null ? n : ""}`,
    ...l,
    children: e
  });
};
Ii.defaultProps = {
  __TYPE: "droppable",
  over: Ut["c-droppable--active"]
};
Ii.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.node]),
  id: i.exports.string.isRequired,
  validate: i.exports.array.isRequired,
  addClass: i.exports.string,
  over: i.exports.string,
  label: i.exports.string.isRequired,
  element: i.exports.string,
  __TYPE: pe("droppable")
};
const Pi = ({
  children: e,
  addClass: t,
  id: r,
  label: n,
  element: o
}) => {
  const a = o || "div", {
    setNodeRef: c
  } = Ei({
    id: r,
    data: {
      label: n,
      type: "container"
    }
  });
  return /* @__PURE__ */ g(a, {
    id: r,
    ref: c,
    className: `${Ut["c-droppable"]} ${t != null ? t : ""}`,
    children: e
  });
};
Pi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  addClass: i.exports.string,
  id: i.exports.string.isRequired,
  label: i.exports.string.isRequired,
  element: i.exports.string,
  __TYPE: pe("general-draggable")
};
Pi.defaultProps = {
  __TYPE: "general-draggable",
  id: bt("unique-id-general-"),
  label: "contendor inicial"
};
const cf = ({
  ...e
}) => /* @__PURE__ */ g("span", {
  id: "hc_extension_svg_filters",
  ...e,
  children: /* @__PURE__ */ g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: "0",
    children: /* @__PURE__ */ P("defs", {
      children: [/* @__PURE__ */ g("filter", {
        id: "hc_extension_off",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "0 1"
          })]
        })
      }), /* @__PURE__ */ g("filter", {
        id: "hc_extension_highcontrast",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            exponent: "3.0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            exponent: "3.0"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            exponent: "3.0"
          })]
        })
      }), /* @__PURE__ */ g("filter", {
        id: "hc_extension_highcontrast_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            exponent: "0.33"
          })]
        })
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_grayscale",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ g("feColorMatrix", {
          type: "matrix",
          values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            exponent: "3"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            exponent: "3"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            exponent: "3"
          })]
        })]
      }), /* @__PURE__ */ g("filter", {
        id: "hc_extension_grayscale_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            exponent: "0.33"
          })]
        })
      }), /* @__PURE__ */ g("filter", {
        id: "hc_extension_invert",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          })]
        })
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_invert_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "1 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            exponent: "1.7"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            exponent: "1.7"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            exponent: "1.7"
          })]
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_yellow_on_black",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          })]
        }), /* @__PURE__ */ g("feColorMatrix", {
          type: "matrix",
          values: "0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0"
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_yellow_on_black_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "1 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            exponent: "0.33"
          })]
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_red_on_white",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        filterUnits: "objectBoundingBox",
        primitiveUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/* @__PURE__ */ g("feColorMatrix", {
          type: "matrix",
          values: "                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "0.97 0.52"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "1 0.03"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "0.98 0.06"
          }), /* @__PURE__ */ g("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ g("feBlend", {
          mode: "normal",
          in: "componentTransfer",
          in2: "SourceGraphic",
          result: "blend"
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_red_on_white_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          })]
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_green_on_blue",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        filterUnits: "objectBoundingBox",
        primitiveUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/* @__PURE__ */ g("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "0.09 0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "1 0.16"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ g("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ g("feBlend", {
          mode: "normal",
          in: "componentTransfer",
          in2: "SourceGraphic",
          result: "blend"
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_green_on_blue_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          })]
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_yellow_on_blue",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        filterUnits: "objectBoundingBox",
        primitiveUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/* @__PURE__ */ g("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "0.99 0.16"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ g("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ g("feBlend", {
          mode: "normal",
          in: "componentTransfer",
          in2: "SourceGraphic",
          result: "blend"
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_yellow_on_blue_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          })]
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_white_on_black",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        filterUnits: "objectBoundingBox",
        primitiveUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/* @__PURE__ */ g("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "0.98 0"
          }), /* @__PURE__ */ g("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ g("feBlend", {
          mode: "normal",
          in: "componentTransfer",
          in2: "SourceGraphic",
          result: "blend"
        })]
      }), /* @__PURE__ */ P("filter", {
        id: "hc_extension_white_on_black_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ g("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ g("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          })]
        })]
      })]
    })
  })
}), Io = {
  "c-image": "_c-image_15sbg_1",
  "c-image__figcaption": "_c-image__figcaption_15sbg_13"
}, ul = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAAFxIAABcSAWef0lIAAAUZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMi0xMFQxNTozMzo1NC0wNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDItMTBUMTU6MzQ6MTMtMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDItMTBUMTU6MzQ6MTMtMDU6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MDZmNzg5Yy1mOTcyLTQ1ODItYmNlNC02MDJhOTUyZDMwNmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDA2Zjc4OWMtZjk3Mi00NTgyLWJjZTQtNjAyYTk1MmQzMDZmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDA2Zjc4OWMtZjk3Mi00NTgyLWJjZTQtNjAyYTk1MmQzMDZmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MDZmNzg5Yy1mOTcyLTQ1ODItYmNlNC02MDJhOTUyZDMwNmYiIHN0RXZ0OndoZW49IjIwMjItMDItMTBUMTU6MzM6NTQtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtD5YlQAACnHSURBVHic7d15lFzVfeDx3733varqvVut3hcZO4n3eM029sTjmDmZJcnYGRMnk/Vk8cx4ZhIvIKml1oYQIBBCPiwyAgOWjUAGzC5EMGBAxxgDYosBISQhCUmgtVd1V7337p0/qhvL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", Ni = ({
  url: e,
  alt: t,
  title: r,
  width: n,
  addClass: o,
  noCaption: a,
  ...c
}) => {
  const [s, l] = G(!1), d = (f) => l(f), u = s ? ul : `${e}`;
  return /* @__PURE__ */ P("figure", {
    className: `${Io["c-image"]} ${o != null ? o : ""}`,
    ...n && {
      style: {
        maxWidth: `${n}px`
      }
    },
    children: [/* @__PURE__ */ g("img", {
      src: u,
      onError: d,
      alt: t,
      ...c
    }), !a && /* @__PURE__ */ g("figcaption", {
      className: Io["c-image__figcaption"],
      children: /* @__PURE__ */ P("p", {
        children: [/* @__PURE__ */ P("strong", {
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
  url: i.exports.string,
  alt: i.exports.string,
  title: i.exports.string,
  width: i.exports.string,
  addClass: i.exports.string,
  noCaption: i.exports.bool
};
const dr = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, Ci = ct(({
  id: e,
  type: t,
  value: r,
  placeholder: n,
  label: o,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  isReadOnly: d,
  onValue: u
}, f) => {
  const [p, h] = G(r || ""), b = le(() => e || bt("c-input-"), [e]), m = ({
    target: y
  }) => {
    u && u({
      id: b,
      value: y.value
    }), h(y.value);
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ P("label", {
    htmlFor: b,
    className: `${dr["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ P("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", o, " "]
    }), /* @__PURE__ */ g("input", {
      id: b,
      ref: f,
      type: t,
      name: b,
      value: p,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: m,
      className: dr["c-input"],
      ...d && {
        readOnly: d,
        "aria-readonly": d
      }
    })]
  }) : null;
});
Ci.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Ci.propTypes = {
  id: i.exports.string,
  type: i.exports.oneOf(["text", "email", "password", "date"]),
  value: i.exports.oneOfType([i.exports.string, i.exports.number]),
  placeholder: i.exports.string,
  label: i.exports.string.isRequired,
  addClass: i.exports.string,
  isLabelVisible: i.exports.bool,
  isDisabled: i.exports.bool,
  isRequired: i.exports.bool,
  isReadOnly: i.exports.bool,
  onValue: i.exports.func,
  __TYPE: pe("Input")
};
const fl = ({
  children: e,
  onAllValue: t
}) => {
  const [r, n] = G([]), o = (s) => n([...r.filter((l) => l.id !== s.id), {
    ...s
  }]);
  W(() => {
    t && t(r);
  }, [r, t]);
  const a = (s, l, d) => Oe.toArray(s).map((u) => u.props.__TYPE === l ? _e(u, {
    ...u.props,
    ...d
  }) : u);
  return Oe.map(e, (s) => {
    var l, d;
    return Ue(s) ? ((l = s == null ? void 0 : s.props) == null ? void 0 : l.__TYPE) === "InputStyle" ? _e(s, {
      ...s.props,
      children: a(s.props.children, "Input", {
        onValue: o
      })
    }) : ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "Input" ? _e(s, {
      ...s.props,
      onValue: o
    }) : s : null;
  });
};
fl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  onAllValue: i.exports.func
};
const ki = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ g("div", {
  className: `${dr["c-input__wrapper-style"]} ${t != null ? t : ""}`,
  children: $e(e, ["InputLeftAddon", "InputRightAddon", "Input"])
});
ki.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string,
  __TYPE: pe("InputStyle")
};
ki.defaultProps = {
  __TYPE: "InputStyle"
};
const Bi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ g("div", {
  className: `${dr["c-input__left-addon"]} ${t != null ? t : ""}`,
  children: e
});
Bi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.arrayOf(i.exports.node), i.exports.node]),
  addClass: i.exports.string,
  __TYPE: pe("InputLeftAddon")
};
Bi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const Mi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ g("div", {
  className: `${dr["c-input__right-addon"]} ${t != null ? t : ""}`,
  children: e
});
Mi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.arrayOf(i.exports.node), i.exports.node]),
  addClass: i.exports.string,
  __TYPE: pe("InputRightAddon")
};
Mi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const dl = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, pl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ g("kbd", {
  className: `${dl["c-kbd"]} ${t != null ? t : ""}`,
  ...r,
  children: e
});
pl.propTypes = {
  children: i.exports.string,
  addClass: i.exports.string
};
const ji = ({
  children: e,
  link: t,
  addClass: r,
  isExternal: n,
  label: o,
  ...a
}) => /* @__PURE__ */ g("a", {
  "aria-label": o,
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
  children: i.exports.oneOfType([i.exports.string, i.exports.element, i.exports.node, i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.node)]),
  addClass: i.exports.string,
  link: i.exports.string,
  isExternal: i.exports.bool,
  label: i.exports.string.isRequired
};
const Fi = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, vl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ g("ul", {
  className: `${Fi["c-List"]} ${t != null ? t : ""}`,
  ...r,
  children: $e(e, ["ListItem"])
});
vl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string
};
const Li = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const o = Oe.map(e, (a) => {
    var c;
    return ((c = a == null ? void 0 : a.props) == null ? void 0 : c.__TYPE) === "Icon" ? _e(a, {
      ...a.props,
      addClass: Fi["c-list-item__icon"]
    }) : a;
  });
  return /* @__PURE__ */ g("li", {
    ...t && {
      className: `${t}`
    },
    "data-type": r,
    ...n,
    children: o
  });
};
Li.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  addClass: i.exports.string,
  __TYPE: pe("ListItem")
};
Li.defaultProps = {
  __TYPE: "ListItem"
};
const gl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ g("ol", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: $e(e, ["ListItem"])
});
gl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string
};
const hl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ g("ul", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: $e(e, ["ListItem"])
});
hl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string
};
var hn = function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}();
function mn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, r = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), n = function() {
    function d(u, f) {
      mn(this, d), this._inertManager = f, this._rootElement = u, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return hn(d, [{
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
        var h = document.activeElement;
        if (!document.body.contains(f)) {
          for (var b = f, m = void 0; b; ) {
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              m = b;
              break;
            }
            b = b.parentNode;
          }
          m && (h = m.activeElement);
        }
        f.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
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
        c(f, function(h) {
          return p._unmanageNode(h);
        });
      }
    }, {
      key: "_adoptInertRoot",
      value: function(f) {
        var p = this._inertManager.getInertRoot(f);
        p || (this._inertManager.setInert(f, !0), p = this._inertManager.getInertRoot(f)), p.managedNodes.forEach(function(h) {
          this._manageNode(h.node);
        }, this);
      }
    }, {
      key: "_onMutation",
      value: function(f, p) {
        f.forEach(function(h) {
          var b = h.target;
          if (h.type === "childList")
            e.call(h.addedNodes).forEach(function(y) {
              this._makeSubtreeUnfocusable(y);
            }, this), e.call(h.removedNodes).forEach(function(y) {
              this._unmanageSubtree(y);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(b);
            else if (b !== this._rootElement && h.attributeName === "inert" && b.hasAttribute("inert")) {
              this._adoptInertRoot(b);
              var m = this._inertManager.getInertRoot(b);
              this._managedNodes.forEach(function(y) {
                b.contains(y.node) && m._manageNode(y.node);
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
  }(), o = function() {
    function d(u, f) {
      mn(this, d), this._node = u, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([f]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return hn(d, [{
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
      if (mn(this, d), !u)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = u, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(u.head || u.body || u.documentElement), u.readyState === "loading" ? u.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return hn(d, [{
      key: "setInert",
      value: function(f, p) {
        if (p) {
          if (this._inertRoots.has(f))
            return;
          var h = new n(f, this);
          if (f.setAttribute("inert", ""), this._inertRoots.set(f, h), !this._document.body.contains(f))
            for (var b = f.parentNode; b; )
              b.nodeType === 11 && s(b), b = b.parentNode;
        } else {
          if (!this._inertRoots.has(f))
            return;
          var m = this._inertRoots.get(f);
          m.destructor(), this._inertRoots.delete(f), f.removeAttribute("inert");
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
        var h = this._managedNodes.get(f);
        return h !== void 0 ? h.addInertRoot(p) : h = new o(f, p), this._managedNodes.set(f, h), h;
      }
    }, {
      key: "deregister",
      value: function(f, p) {
        var h = this._managedNodes.get(f);
        return h ? (h.removeInertRoot(p), h.destroyed && this._managedNodes.delete(f), h) : null;
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
        var h = this;
        f.forEach(function(b) {
          switch (b.type) {
            case "childList":
              e.call(b.addedNodes).forEach(function(w) {
                if (w.nodeType === Node.ELEMENT_NODE) {
                  var S = e.call(w.querySelectorAll("[inert]"));
                  t.call(w, "[inert]") && S.unshift(w), S.forEach(function(I) {
                    this.setInert(I, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (b.attributeName !== "inert")
                return;
              var m = b.target, y = m.hasAttribute("inert");
              h.setInert(m, y);
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
      var h = p.shadowRoot;
      if (h) {
        c(h, u);
        return;
      }
      if (p.localName == "content") {
        for (var b = p, m = b.getDistributedNodes ? b.getDistributedNodes() : [], y = 0; y < m.length; y++)
          c(m[y], u);
        return;
      }
      if (p.localName == "slot") {
        for (var w = p, S = w.assignedNodes ? w.assignedNodes({ flatten: !0 }) : [], I = 0; I < S.length; I++)
          c(S[I], u);
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
const Dr = {
  "c-layout": "_c-layout_3x2r4_1",
  "c-modal": "_c-modal_3x2r4_1",
  "c-modal-container": "_c-modal-container_3x2r4_31",
  "c-close-button": "_c-close-button_3x2r4_35"
}, ml = Object.freeze({
  ESC: 27
}), $i = ({
  children: e,
  addClass: t,
  isOpen: r,
  onClose: n,
  finalFocusRef: o,
  label: a,
  ...c
}) => {
  const s = K(), l = (f) => {
    const p = document.querySelector("#root");
    p.inert = f;
  }, d = (f) => {
    (f.keyCode || f.which) === ml.ESC && u();
  }, u = () => {
    n(!r), l(!1), o && o.current.focus();
  };
  return W(() => {
    r && (l(!0), s.current && s.current.focus());
  }, [r]), /* @__PURE__ */ P(Ar, {
    id: "js-modal",
    children: [/* @__PURE__ */ g("div", {
      className: Dr["c-layout"],
      onClick: u,
      hidden: !r
    }), /* @__PURE__ */ P("div", {
      role: "dialog",
      tabIndex: "-1",
      hidden: !r,
      "aria-label": a,
      ref: s,
      onKeyDown: d,
      "aria-modal": "true",
      className: `${Dr["c-modal"]} u-px-3 u-py-3 ${t != null ? t : ""}`,
      ...c,
      children: [/* @__PURE__ */ g("div", {
        className: `${Dr["c-modal-container"]} u-flow`,
        children: e
      }), /* @__PURE__ */ g(It, {
        addClass: Dr["c-close-button"],
        label: "Cerrar modal",
        hasAriaLabel: !0,
        icon: {
          name: "close"
        },
        onClick: u
      })]
    })]
  });
};
$i.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
$i.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  addClass: i.exports.string,
  isOpen: i.exports.bool.isRequired,
  onClose: i.exports.func.isRequired,
  label: i.exports.string.isRequired,
  finalFocusRef: i.exports.object
};
const Yt = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, Ur = nt(), Yi = ({
  children: e,
  addClass: t,
  keepWithinRange: r,
  defaultValue: n,
  min: o,
  max: a,
  step: c,
  onValue: s
}) => {
  const [l, d] = G(n || 0), u = () => {
    if (r && l > a)
      return d(a);
    d((b) => b + c);
  }, f = () => {
    if (r && l < o)
      return d(o);
    d((b) => b - c);
  }, p = (b) => d(b), h = (b) => r && l === b;
  return W(() => {
    s && s(l);
  }, [l, s]), /* @__PURE__ */ g(Ur.Provider, {
    value: {
      counter: l,
      min: o || Number.MIN_SAFE_INTEGER,
      max: a || Number.MAX_SAFE_INTEGER,
      validate: h,
      onChangeValue: p,
      onIncrementValue: u,
      onDecrementValue: f
    },
    children: /* @__PURE__ */ g("div", {
      className: `${Yt["c-number-input"]} ${t != null ? t : ""}`,
      children: $e(e, ["NumberInputField", "NumberInputStepper"])
    })
  });
};
Yi.propTypes = {
  children: i.exports.arrayOf(i.exports.element),
  addClass: i.exports.string,
  max: i.exports.number,
  min: i.exports.number,
  defaultValue: i.exports.number,
  step: i.exports.number,
  onValue: i.exports.func,
  keepWithinRange: i.exports.bool
};
Yi.defaultProps = {
  step: 1
};
const qi = ct(({
  id: e,
  name: t,
  label: r,
  pattern: n,
  addClass: o,
  isLabelVisible: a
}, c) => {
  const {
    counter: s,
    onChangeValue: l,
    onIncrementValue: d,
    onDecrementValue: u,
    min: f,
    max: p
  } = ye(Ur), h = le(() => e || bt("c-number-input-"), [e]), b = Object.freeze({
    UP: 38,
    DOWN: 40,
    END: 35,
    HOME: 36
  }), m = ({
    target: w
  }) => {
    if (!isNaN(w.value) && w.value)
      return l(parseInt(w.value));
    l(0);
  }, y = (w) => {
    switch (w.keyCode || w.which) {
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
  return /* @__PURE__ */ P("label", {
    htmlFor: h,
    className: `${Yt["c-number-input__label"]} ${o != null ? o : ""}`,
    children: [/* @__PURE__ */ P("span", {
      className: `${!a && "u-sr-only"}`,
      children: [" ", r, " "]
    }), /* @__PURE__ */ g("input", {
      id: h,
      ref: c,
      type: "text",
      name: t,
      role: "spinbutton",
      inputMode: "decimal",
      pattern: n,
      autoCorrect: "off",
      autoComplete: "off",
      className: Yt["c-number-input__input"],
      onChange: m,
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
qi.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
qi.propTypes = {
  id: i.exports.string,
  name: i.exports.string,
  label: i.exports.string,
  pattern: i.exports.string,
  addClass: i.exports.string,
  isLabelVisible: i.exports.bool,
  __TYPE: pe("NumberInputField")
};
const Vi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ g("div", {
  className: `${Yt["c-number-input__stepper"]} ${t != null ? t : ""}`,
  children: $e(e, ["NumberIncrementStepper", "NumberDecrementStepper"])
});
Vi.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.arrayOf(i.exports.element)]),
  addClass: i.exports.string,
  __TYPE: pe("NumberInputStepper")
};
Vi.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Qi = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onDecrementValue: n,
    validate: o,
    min: a
  } = ye(Ur);
  return /* @__PURE__ */ g("button", {
    tabIndex: -1,
    onClick: n,
    disabled: o(a),
    "aria-label": `${r != null ? r : "Decrementar valor"}`,
    className: `${Yt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ g(Ie, {
      name: "arrow_drop_down"
    })
  });
};
Qi.propTypes = {
  children: i.exports.oneOfType([i.exports.node, i.exports.element, i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.element)]),
  addClass: i.exports.string,
  __TYPE: pe("NumberDecrementStepper"),
  label: i.exports.string
};
Qi.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Hi = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onIncrementValue: n,
    validate: o,
    max: a
  } = ye(Ur);
  return /* @__PURE__ */ g("button", {
    tabIndex: -1,
    onClick: n,
    disabled: o(a),
    "aria-label": `${r != null ? r : "Incrementar valor"}`,
    className: `${Yt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ g(Ie, {
      name: "arrow_drop_up"
    })
  });
};
Hi.propTypes = {
  children: i.exports.oneOfType([i.exports.node, i.exports.element, i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.element)]),
  addClass: i.exports.string,
  __TYPE: pe("NumberIncrementStepper"),
  label: i.exports.string
};
Hi.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const bl = (e) => {
  const {
    boundaryCount: t = 1,
    count: r = 1,
    defaultPage: n = 1,
    disabled: o = !1,
    hideNextButton: a = !1,
    hidePrevButton: c = !1,
    onChange: s,
    showFirstButton: l = !1,
    showLastButton: d = !1,
    siblingCount: u = 1,
    ...f
  } = e, [p, h] = G(n), b = (x, _) => {
    h(_), s && s(x, _);
  }, m = (x, _) => {
    const C = _ - x + 1;
    return Array.from({ length: C }, (j, M) => x + M);
  }, y = m(1, Math.min(t, r)), w = m(Math.max(r - t + 1, t + 1), r), S = Math.max(
    Math.min(
      p - u,
      r - t - u * 2 - 1
    ),
    t + 2
  ), I = Math.min(
    Math.max(
      p + u,
      t + u * 2 + 2
    ),
    w.length > 0 ? w[0] - 2 : r - 1
  ), D = [
    ...l ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...y,
    ...S > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : [],
    ...m(S, I),
    ...I < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : [],
    ...w,
    ...a ? [] : ["next"],
    ...d ? ["last"] : []
  ], A = (x) => {
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
      onClick: (_) => {
        b(_, x);
      },
      type: "page",
      page: x,
      selected: x === p,
      disabled: o,
      "aria-current": x === p ? !0 : void 0
    } : {
      onClick: (_) => {
        b(_, A(x));
      },
      type: x,
      page: A(x),
      selected: !1,
      disabled: o || x.indexOf("ellipsis") === -1 && (x === "next" || x === "last" ? p >= r : p <= 1)
    }),
    ...f
  };
}, sr = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, yl = Object.freeze({
  first: "primera",
  last: "\xFAltima",
  previous: "anterior",
  next: "siguiente"
}), Al = (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}p\xE1gina ${t}` : `Ir a la ${yl[e]} p\xE1gina`, zi = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: r,
  ...n
}) => {
  const {
    items: o
  } = bl({
    ...n
  });
  return /* @__PURE__ */ g("nav", {
    className: `${r != null ? r : ""} ${sr["c-pagination"]}`,
    children: /* @__PURE__ */ g("ul", {
      className: sr["c-pagination__ul"],
      children: o.map((a, c) => /* @__PURE__ */ g("li", {
        children: e({
          ...a,
          "aria-label": t(a.type, a.page, a.selected)
        })
      }, `pagination-item-${c}`))
    })
  });
};
zi.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ g(Yn, {
    ...e
  }),
  getItemAriaLabel: Al
};
zi.propTypes = {
  addClass: i.exports.string,
  boundaryCount: i.exports.number,
  count: i.exports.number,
  defaultPage: i.exports.number,
  disabled: i.exports.bool,
  hideNextButton: i.exports.bool,
  hidePrevButton: i.exports.bool,
  onChange: i.exports.func,
  showFirstButton: i.exports.bool,
  showLastButton: i.exports.bool,
  siblingCount: i.exports.number,
  renderItem: i.exports.func,
  getItemAriaLabel: i.exports.func
};
const Yn = ({
  page: e,
  type: t,
  addClass: r,
  disabled: n,
  element: o,
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
  return t === "start-ellipsis" || t === "end-ellipsis" ? /* @__PURE__ */ g("div", {
    className: sr["c-pagination-item__ellipsis"],
    children: "..."
  }) : _e(o, {
    disabled: n,
    className: `${sr["c-pagination-item"]} ${r != null ? r : ""} ${c ? sr["c-pagination-item--selected"] : ""}`,
    ...o.props,
    ...s
  }, [
    t === "page" && e,
    d ? /* @__PURE__ */ g(Ie, {
      name: d
    }, t) : null
  ]);
};
Yn.propTypes = {
  page: i.exports.number,
  type: i.exports.string,
  addClass: i.exports.string,
  disabled: i.exports.bool,
  selected: i.exports.bool,
  element: i.exports.oneOfType([i.exports.element, i.exports.node, i.exports.string]),
  icons: i.exports.shape({
    first: i.exports.string,
    last: i.exports.string,
    next: i.exports.string,
    previous: i.exports.string
  })
};
Yn.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next",
    last: "last_page",
    first: "first_page"
  },
  element: /* @__PURE__ */ g("button", {})
};
const Ft = {
  "c-panel": "_c-panel_15fck_1",
  "c-section": "_c-section_15fck_9",
  "c-navigation": "_c-navigation_15fck_15",
  "c-navigation__item": "_c-navigation__item_15fck_29",
  "c-navigation__section": "_c-navigation__section_15fck_33",
  "c-navigation__button": "_c-navigation__button_15fck_51"
}, Gr = nt(), xl = ({
  children: e,
  defaultIndex: t,
  addClass: r
}) => {
  const [n, o] = G(1), a = {
    index: [],
    counter: 0
  }, c = (d) => o(d), s = (d) => n === d;
  W(() => {
    t !== void 0 && o(t);
  }, [t]);
  const l = Oe.map(e, (d) => Ue(d) ? d.props.__TYPE === "Section" ? (a.counter++, a.index.push(a.counter), _e(d, {
    ...d.props,
    id: a.counter
  })) : d : null);
  return /* @__PURE__ */ g(Gr.Provider, {
    value: {
      validation: s,
      onToggle: c,
      listId: a.index,
      currentSection: n
    },
    children: /* @__PURE__ */ g("div", {
      className: `${Ft["c-panel"]} ${r != null ? r : ""}`,
      children: l
    })
  });
};
xl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.arrayOf(i.exports.node), i.exports.node, i.exports.string]),
  defaultIndex: i.exports.number,
  addClass: i.exports.string
};
const Wi = ({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...o
}) => {
  const {
    validation: a
  } = ye(Gr), c = a(t);
  return /* @__PURE__ */ P("section", {
    role: "tabpanel",
    tabIndex: -1,
    hidden: !c,
    "data-type": n,
    "aria-hidden": !c,
    "aria-labelledby": `section-${t}`,
    className: `${Ft["c-section"]} ${r != null ? r : ""}`,
    ...o,
    children: [/* @__PURE__ */ P("span", {
      id: `section-${t}`,
      className: "u-sr-only",
      children: ["Secci\xF3n ", t]
    }), e]
  });
};
Wi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  id: i.exports.number,
  addClass: i.exports.string,
  __TYPE: pe("Section")
};
Wi.defaultProps = {
  __TYPE: "Section"
};
const _l = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), wl = (e, t, r) => e === "section" ? `${r ? "" : "Ir a la "}secci\xF3n ${t}` : `Ir a la ${_l[e]} secci\xF3n`, Ui = ({
  renderItem: e,
  showPrevButton: t,
  showNextButton: r,
  icons: n,
  label: o,
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
  } = ye(Gr), h = K([]), b = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), m = Object.freeze({
    previous: p - 1,
    next: p + 1
  }), y = {
    previous: n.previous || "navigate_before",
    next: n.next || "navigate_next"
  }, w = [
    ...t ? ["previous"] : [],
    ...f || [],
    ...r ? ["next"] : []
  ], S = (O) => !h.current.includes(O) && O ? h.current = [...h.current, O] : h.current, I = (O) => {
    const x = h.current[0], _ = h.current[h.current.length - 1];
    if ((O.keyCode || O.which) === b.LEFT)
      if (O.target === x)
        _.focus();
      else {
        const C = h.current.indexOf(O.target) - 1;
        h.current[C].focus();
      }
    else if ((O.keyCode || O.which) === b.RIGHT)
      if (O.target === _)
        x.focus();
      else {
        const C = h.current.indexOf(O.target) + 1;
        h.current[C].focus();
      }
  }, D = (O) => {
    u(O), c !== void 0 && c(O, f.length);
  }, A = w.map((O) => typeof O == "number" ? {
    onClick: (x) => {
      D(O);
    },
    type: "section",
    section: O,
    selected: d(O),
    ref: S,
    onKeyDown: I
  } : {
    onClick: () => {
      D(m[O]);
    },
    type: O,
    section: m[O],
    selected: !1,
    disabled: O === "next" ? p >= f.length : p <= 1
  });
  return W(() => {
    c !== void 0 && c(p, f.length);
  }, []), /* @__PURE__ */ P(dt, {
    children: [/* @__PURE__ */ g("h2", {
      id: "section-list-navigation",
      className: "u-sr-only",
      children: o
    }), /* @__PURE__ */ g("ul", {
      role: "tablist",
      "aria-labelledby": "section-list-navigation",
      "aria-orientation": a,
      className: `${Ft["c-navigation"]} ${s != null ? s : ""}`,
      children: e ? e(A) : A.map(({
        section: O,
        type: x,
        selected: _,
        ...C
      }, j) => /* @__PURE__ */ g("li", {
        role: "presentation",
        className: Ft["c-navigation__item"],
        children: x === "section" ? /* @__PURE__ */ g("button", {
          id: `navigation-section-tab-${O}`,
          role: "tab",
          tabIndex: `${_ ? 0 : -1}`,
          "aria-selected": _,
          className: Ft["c-navigation__section"],
          "aria-label": l(x, O, _),
          ...C
        }) : /* @__PURE__ */ g("button", {
          type: "button",
          className: `${Ft["c-navigation__button"]}`,
          "aria-label": l(x, O, _),
          ...C,
          children: y[x] ? /* @__PURE__ */ g(Ie, {
            name: y[x]
          }, x) : null
        })
      }, `navigation-section-item-${j}`))
    })]
  });
};
Ui.propTypes = {
  renderItem: i.exports.func,
  showNextButton: i.exports.bool,
  showPrevButton: i.exports.bool,
  icons: i.exports.shape({
    next: i.exports.string,
    previous: i.exports.string
  }),
  label: i.exports.string,
  orientation: i.exports.string,
  onValue: i.exports.func,
  addClass: i.exports.string,
  getItemAriaLabel: i.exports.func
};
Ui.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next"
  },
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: wl
};
const Tl = ({
  children: e,
  section: t,
  onClick: r
}) => {
  const {
    onToggle: n
  } = ye(Gr), o = (a) => {
    n(t), r && r(a);
  };
  return Oe.map(e, (a) => _e(a, {
    ...a.props,
    onClick: o
  }));
};
Tl.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.node]).isRequired,
  section: i.exports.number.isRequired,
  onClick: i.exports.func
};
const El = {
  "c-paper": "_c-paper_1sbf6_1"
}, Ol = ({
  children: e,
  color: t,
  addClass: r,
  ...n
}) => {
  const o = K(null);
  return Ho(() => {
    t && o.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ g("div", {
    ref: o,
    className: `${El["c-paper"]} ${r != null ? r : ""}`,
    ...n,
    children: e
  });
};
Ol.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.node, i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.node)]),
  addClass: i.exports.string,
  color: i.exports.string
};
const Sl = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Rl = (e) => {
  document.body.append(e);
}, Dl = (e) => {
  const t = K(null);
  W(() => {
    const n = document.querySelector(`#${e}`), o = n || Sl(e);
    return n || Rl(o), o.append(t.current), () => {
      t.current.remove(), o.childElementCount || o.remove();
    };
  }, [e]);
  function r() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return r();
}, Ar = ({
  children: e,
  id: t
}) => {
  const r = Dl(t);
  return Uo(e, r);
};
Ar.propTypes = {
  children: i.exports.any,
  id: i.exports.string.isRequired
};
const Il = "_row_h502i_1", Pl = {
  row: Il
}, Nl = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ g("div", {
  ref: r,
  className: `${Pl.row} ${e != null ? e : ""}`,
  ...t
}));
Nl.propTypes = {
  addClass: i.exports.string
};
const bn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, Gi = ct(({
  children: e,
  id: t,
  placeholder: r,
  label: n,
  icon: o,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  onChoise: d
}, u) => {
  const [f, p] = G(), h = le(() => t || bt("c-select-"), [t]), b = ({
    target: m
  }) => {
    d && d({
      id: h,
      value: m.value
    }), p(m.value);
  };
  return /* @__PURE__ */ P("label", {
    htmlFor: h,
    ...a && {
      className: `${a}`
    },
    children: [/* @__PURE__ */ P("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", n, " "]
    }), /* @__PURE__ */ P("div", {
      className: bn["c-select-wrapper"],
      children: [/* @__PURE__ */ P("select", {
        id: h,
        ref: u,
        name: h,
        value: f,
        defaultValue: "default",
        className: bn["c-select"],
        onChange: b,
        disabled: s,
        required: l,
        children: [/* @__PURE__ */ g("option", {
          value: "default",
          disabled: !0,
          children: r
        }), $e(e, ["option", "optgroup"])]
      }), /* @__PURE__ */ g(Ie, {
        name: `${o != null ? o : "arrow_drop_down"}`,
        addClass: bn["c-select__icon"]
      })]
    })]
  });
});
Gi.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Gi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.node]),
  id: i.exports.string,
  placeholder: i.exports.string,
  label: i.exports.string.isRequired,
  icon: i.exports.string,
  addClass: i.exports.string,
  isLabelVisible: i.exports.bool,
  isDisabled: i.exports.bool,
  isRequired: i.exports.bool,
  onChoise: i.exports.func,
  __TYPE: pe("Select")
};
const Cl = ({
  children: e,
  onAllSelect: t
}) => {
  const [r, n] = G([]), o = (c) => n([...r.filter((s) => s.id !== c.id), {
    ...c
  }]);
  return W(() => {
    t && t(r);
  }, [r, t]), Oe.map(e, (c) => {
    var s;
    return Ue(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? _e(c, {
      ...c.props,
      onChoise: o
    }) : c : null;
  });
};
Cl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  onAllSelect: i.exports.func
};
const yn = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, Po = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Xi = ct(({
  id: e,
  name: t,
  size: r,
  value: n,
  label: o,
  addClass: a,
  isDisabled: c,
  defaultChecked: s,
  isLabelVisible: l,
  onChange: d
}, u) => {
  const [f, p] = G(!1), h = le(() => e || bt("c-input-"), [e]), b = ({
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
  }, m = (y) => {
    ((y.keyCode || y.which) === Po.SPACE || (y.keyCode || y.which) === Po.ENTER) && p((w) => (d && d(w ? {
      id: h,
      value: ""
    } : {
      id: h,
      value: `${n}`
    }), !w));
  };
  return W(() => (s && p(!!s), () => {
    p(!1);
  }), [s]), /* @__PURE__ */ P("label", {
    htmlFor: h,
    className: `${yn["c-label"]} ${yn[`is-${r}`]}`,
    children: [/* @__PURE__ */ P("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", o, " "]
    }), /* @__PURE__ */ g("input", {
      id: h,
      ref: u,
      role: "switch",
      type: "checkbox",
      name: t,
      value: n,
      checked: f,
      "aria-disabled": c,
      className: `${yn["c-switch"]} ${a != null ? a : ""}`,
      onChange: b,
      onKeyDown: m,
      ...c && {
        disabled: !0
      }
    })]
  });
});
Xi.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Xi.propTypes = {
  id: i.exports.string,
  name: i.exports.string,
  size: i.exports.string.isRequired,
  value: i.exports.oneOfType([i.exports.string, i.exports.number, i.exports.bool]),
  label: i.exports.string,
  addClass: i.exports.string,
  isDisabled: i.exports.bool,
  defaultChecked: i.exports.bool,
  isLabelVisible: i.exports.bool,
  onChange: i.exports.func
};
const qn = nt(), kl = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  ...n
}) => {
  const [o, a] = G(0), c = (l) => a(l), s = (l) => o === l;
  return W(() => {
    t !== void 0 && a(t);
  }, [t]), /* @__PURE__ */ g(qn.Provider, {
    value: {
      validation: s,
      onToggle: c
    },
    children: /* @__PURE__ */ g("div", {
      ...r && {
        className: `${r}`
      },
      ...n,
      children: $e(e, ["TabList", "TabPanels"])
    })
  });
};
kl.propTypes = {
  children: i.exports.arrayOf(i.exports.element),
  defaultIndex: i.exports.number,
  addClass: i.exports.string
};
const pr = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, Ji = ({
  children: e,
  id: t,
  selected: r,
  addClass: n,
  icon: o,
  addNewRef: a,
  onNavigation: c,
  __TYPE: s,
  ...l
}) => {
  const d = K(), {
    validation: u,
    onToggle: f
  } = ye(qn), p = u(t);
  return W(() => (d.current && a(d.current), () => {
    d.current = null;
  }), [d]), /* @__PURE__ */ P("button", {
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
    children: [e, o && o(p)]
  });
};
Ji.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  id: i.exports.number,
  selected: i.exports.string,
  addClass: i.exports.string,
  icon: i.exports.func,
  addNewRef: i.exports.func,
  onNavigation: i.exports.func,
  __TYPE: pe("Tab")
};
Ji.defaultProps = {
  __TYPE: "Tab"
};
const Ki = ({
  children: e,
  addClass: t,
  label: r,
  orientation: n,
  __TYPE: o,
  ...a
}) => {
  const c = K([]), s = (f) => c.current = [...c.current, f], l = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), d = (f) => {
    const p = c.current[0], h = c.current[c.current.length - 1];
    if ((f.keyCode || f.which) === l.LEFT)
      if (f.target === p)
        h.focus();
      else {
        const b = c.current.indexOf(f.target) - 1;
        c.current[b].focus();
      }
    else if ((f.keyCode || f.which) === l.RIGHT)
      if (f.target === h)
        p.focus();
      else {
        const b = c.current.indexOf(f.target) + 1;
        c.current[b].focus();
      }
  }, u = Oe.map(e, (f, p) => Ue(f) ? _e(f, {
    ...f.props,
    id: p,
    addNewRef: s,
    onNavigation: d
  }) : null);
  return /* @__PURE__ */ g("div", {
    role: "tablist",
    "data-type": o,
    "aria-label": r,
    "aria-orientation": n,
    className: `${pr["c-tab__list"]} ${t != null ? t : ""}`,
    ...a,
    children: $e(u, ["Tab"])
  });
};
Ki.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string,
  label: i.exports.string,
  orientation: i.exports.string,
  __TYPE: pe("TabList")
};
Ki.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const Zi = ({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...o
}) => {
  const {
    validation: a
  } = ye(qn), c = a(t);
  return /* @__PURE__ */ g("div", {
    id: `panel-${t}`,
    role: "tabpanel",
    tabIndex: 0,
    "data-type": n,
    "aria-hidden": !c,
    hidden: !c,
    "aria-labelledby": `tab-${t}`,
    className: `${c ? pr["c-tab__panel--active"] : pr["c-tab__panel"]} ${r != null ? r : ""}`,
    ...o,
    children: e
  });
};
Zi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  id: i.exports.number,
  addClass: i.exports.string,
  __TYPE: pe("TabPanel")
};
Zi.defaultProps = {
  __TYPE: "TabPanel"
};
const ea = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const o = Oe.map(e, (a, c) => Ue(a) ? _e(a, {
    ...a.props,
    id: c
  }) : null);
  return /* @__PURE__ */ g("div", {
    className: `${pr["c-tab__panels"]} ${t != null ? t : ""}`,
    "data-type": r,
    ...n,
    children: $e(o, ["TabPanel"])
  });
};
ea.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string,
  __TYPE: pe("TabPanels")
};
ea.defaultProps = {
  __TYPE: "TabPanels"
};
const An = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, ta = ct(({
  id: e,
  value: t,
  resize: r,
  placeholder: n,
  label: o,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  onValue: d,
  ...u
}, f) => {
  const p = le(() => e || bt("c-input-"), [e]), h = ({
    target: b
  }) => {
    d && d({
      id: p,
      value: b.value
    });
  };
  return /* @__PURE__ */ P("label", {
    htmlFor: p,
    className: `${An["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ P("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", o, " "]
    }), /* @__PURE__ */ g("textarea", {
      id: p,
      ref: f,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: h,
      className: `${An["c-textarea"]} ${An[`c-textarea--${r}`]}`,
      ...u,
      children: t
    })]
  });
});
ta.defaultProps = {
  resize: "vertical",
  placeholder: "Here is a sample placeholder"
};
ta.propTypes = {
  id: i.exports.string,
  value: i.exports.string,
  resize: i.exports.oneOf(["none", "horizontal", "vertical"]),
  placeholder: i.exports.string,
  label: i.exports.string,
  addClass: i.exports.string,
  isLabelVisible: i.exports.bool,
  isDisabled: i.exports.bool,
  isRequired: i.exports.bool,
  onValue: i.exports.func
};
const Bl = zo(({
  children: e,
  theme: t = {}
}) => {
  const r = (n) => {
    const o = document.createElement("style");
    document.head.append(o);
    const a = o.sheet;
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
Bl.propTypes = {
  children: i.exports.oneOfType([i.exports.array, i.exports.element]),
  theme: i.exports.object.isRequired
};
const Vn = nt(), Ml = ({
  children: e
}) => {
  const [t, r] = G(!1), n = K(), o = () => r(!t), a = (c) => {
    n.current || (n.current = c);
  };
  return /* @__PURE__ */ g(Vn.Provider, {
    value: {
      isOpen: t,
      onOpen: o,
      setRefButton: a,
      refButton: n
    },
    children: $e(e, ["ToggletipButton", "ToggletipContent"])
  });
};
Ml.propTypes = {
  children: i.exports.arrayOf(i.exports.element)
};
const ra = ({
  children: e
}) => {
  const {
    onOpen: t,
    setRefButton: r
  } = ye(Vn);
  if (Oe.count(e) > 1)
    return null;
  const n = (o) => Ue(o) ? _e(o, {
    ...o.props,
    ref: r,
    onClick: t
  }) : null;
  return Oe.map(e, n);
};
ra.propTypes = {
  children: i.exports.element,
  __TYPE: pe("ToggletipButton")
};
ra.defaultProps = {
  __TYPE: "ToggletipButton"
};
var No = function(t) {
  return t.reduce(function(r, n) {
    var o = n[0], a = n[1];
    return r[o] = a, r;
  }, {});
}, Co = typeof window < "u" && window.document && window.document.createElement ? Dt.useLayoutEffect : Dt.useEffect, Fe = "top", ze = "bottom", We = "right", Le = "left", Xr = "auto", xr = [Fe, ze, We, Le], qt = "start", vr = "end", jl = "clippingParents", na = "viewport", nr = "popper", Fl = "reference", ko = /* @__PURE__ */ xr.reduce(function(e, t) {
  return e.concat([t + "-" + qt, t + "-" + vr]);
}, []), oa = /* @__PURE__ */ [].concat(xr, [Xr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qt, t + "-" + vr]);
}, []), Ll = "beforeRead", $l = "read", Yl = "afterRead", ql = "beforeMain", Vl = "main", Ql = "afterMain", Hl = "beforeWrite", zl = "write", Wl = "afterWrite", On = [Ll, $l, Yl, ql, Vl, Ql, Hl, zl, Wl];
function st(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ge(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Nt(e) {
  var t = Ge(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ye(e) {
  var t = Ge(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Qn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ge(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ul(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !Ye(a) || !st(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(c) {
      var s = o[c];
      s === !1 ? a.removeAttribute(c) : a.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function Gl(e) {
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
      var o = t.elements[n], a = t.attributes[n] || {}, c = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = c.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !Ye(o) || !st(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Xl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ul,
  effect: Gl,
  requires: ["computeStyles"]
};
function et(e) {
  return e.split("-")[0];
}
var Pt = Math.max, $r = Math.min, Vt = Math.round;
function Sn() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ia() {
  return !/^((?!chrome|android).)*safari/i.test(Sn());
}
function Qt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && Ye(e) && (o = e.offsetWidth > 0 && Vt(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Vt(n.height) / e.offsetHeight || 1);
  var c = Nt(e) ? Ge(e) : window, s = c.visualViewport, l = !ia() && r, d = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / o, p = n.height / a;
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
function Hn(e) {
  var t = Qt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function aa(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Qn(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function rt(e) {
  return Ge(e).getComputedStyle(e);
}
function Jl(e) {
  return ["table", "td", "th"].indexOf(st(e)) >= 0;
}
function yt(e) {
  return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Jr(e) {
  return st(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qn(e) ? e.host : null) || yt(e);
}
function Bo(e) {
  return !Ye(e) || rt(e).position === "fixed" ? null : e.offsetParent;
}
function Kl(e) {
  var t = /firefox/i.test(Sn()), r = /Trident/i.test(Sn());
  if (r && Ye(e)) {
    var n = rt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Jr(e);
  for (Qn(o) && (o = o.host); Ye(o) && ["html", "body"].indexOf(st(o)) < 0; ) {
    var a = rt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function _r(e) {
  for (var t = Ge(e), r = Bo(e); r && Jl(r) && rt(r).position === "static"; )
    r = Bo(r);
  return r && (st(r) === "html" || st(r) === "body" && rt(r).position === "static") ? t : r || Kl(e) || t;
}
function zn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function cr(e, t, r) {
  return Pt(e, $r(t, r));
}
function Zl(e, t, r) {
  var n = cr(e, t, r);
  return n > r ? r : n;
}
function sa() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ca(e) {
  return Object.assign({}, sa(), e);
}
function la(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var eu = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ca(typeof t != "number" ? t : la(t, xr));
};
function tu(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, c = r.modifiersData.popperOffsets, s = et(r.placement), l = zn(s), d = [Le, We].indexOf(s) >= 0, u = d ? "height" : "width";
  if (!(!a || !c)) {
    var f = eu(o.padding, r), p = Hn(a), h = l === "y" ? Fe : Le, b = l === "y" ? ze : We, m = r.rects.reference[u] + r.rects.reference[l] - c[l] - r.rects.popper[u], y = c[l] - r.rects.reference[l], w = _r(a), S = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, I = m / 2 - y / 2, D = f[h], A = S - p[u] - f[b], O = S / 2 - p[u] / 2 + I, x = cr(D, O, A), _ = l;
    r.modifiersData[n] = (t = {}, t[_] = x, t.centerOffset = x - O, t);
  }
}
function ru(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  if (o != null && !(typeof o == "string" && (o = t.elements.popper.querySelector(o), !o))) {
    if (process.env.NODE_ENV !== "production" && (Ye(o) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !aa(t.elements.popper, o)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = o;
  }
}
const nu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: tu,
  effect: ru,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ht(e) {
  return e.split("-")[1];
}
var ou = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function iu(e) {
  var t = e.x, r = e.y, n = window, o = n.devicePixelRatio || 1;
  return {
    x: Vt(t * o) / o || 0,
    y: Vt(r * o) / o || 0
  };
}
function Mo(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, c = e.offsets, s = e.position, l = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, f = e.isFixed, p = c.x, h = p === void 0 ? 0 : p, b = c.y, m = b === void 0 ? 0 : b, y = typeof u == "function" ? u({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = y.x, m = y.y;
  var w = c.hasOwnProperty("x"), S = c.hasOwnProperty("y"), I = Le, D = Fe, A = window;
  if (d) {
    var O = _r(r), x = "clientHeight", _ = "clientWidth";
    if (O === Ge(r) && (O = yt(r), rt(O).position !== "static" && s === "absolute" && (x = "scrollHeight", _ = "scrollWidth")), O = O, o === Fe || (o === Le || o === We) && a === vr) {
      D = ze;
      var C = f && O === A && A.visualViewport ? A.visualViewport.height : O[x];
      m -= C - n.height, m *= l ? 1 : -1;
    }
    if (o === Le || (o === Fe || o === ze) && a === vr) {
      I = We;
      var j = f && O === A && A.visualViewport ? A.visualViewport.width : O[_];
      h -= j - n.width, h *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: s
  }, d && ou), X = u === !0 ? iu({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  if (h = X.x, m = X.y, l) {
    var H;
    return Object.assign({}, M, (H = {}, H[D] = S ? "0" : "", H[I] = w ? "0" : "", H.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", H));
  }
  return Object.assign({}, M, (t = {}, t[D] = S ? m + "px" : "", t[I] = w ? h + "px" : "", t.transform = "", t));
}
function au(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, c = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var d = rt(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return d.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: et(t.placement),
    variation: Ht(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Mo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Mo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const su = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: au,
  data: {}
};
var Ir = {
  passive: !0
};
function cu(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, c = n.resize, s = c === void 0 ? !0 : c, l = Ge(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, Ir);
  }), s && l.addEventListener("resize", r.update, Ir), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Ir);
    }), s && l.removeEventListener("resize", r.update, Ir);
  };
}
const lu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: cu,
  data: {}
};
var uu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Nr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return uu[t];
  });
}
var fu = {
  start: "end",
  end: "start"
};
function jo(e) {
  return e.replace(/start|end/g, function(t) {
    return fu[t];
  });
}
function Wn(e) {
  var t = Ge(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Un(e) {
  return Qt(yt(e)).left + Wn(e).scrollLeft;
}
function du(e, t) {
  var r = Ge(e), n = yt(e), o = r.visualViewport, a = n.clientWidth, c = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, c = o.height;
    var d = ia();
    (d || !d && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: s + Un(e),
    y: l
  };
}
function pu(e) {
  var t, r = yt(e), n = Wn(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Pt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), c = Pt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Un(e), l = -n.scrollTop;
  return rt(o || r).direction === "rtl" && (s += Pt(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: c,
    x: s,
    y: l
  };
}
function Gn(e) {
  var t = rt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function ua(e) {
  return ["html", "body", "#document"].indexOf(st(e)) >= 0 ? e.ownerDocument.body : Ye(e) && Gn(e) ? e : ua(Jr(e));
}
function lr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ua(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ge(n), c = o ? [a].concat(a.visualViewport || [], Gn(n) ? n : []) : n, s = t.concat(c);
  return o ? s : s.concat(lr(Jr(c)));
}
function Rn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function vu(e, t) {
  var r = Qt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Fo(e, t, r) {
  return t === na ? Rn(du(e, r)) : Nt(t) ? vu(t, r) : Rn(pu(yt(e)));
}
function gu(e) {
  var t = lr(Jr(e)), r = ["absolute", "fixed"].indexOf(rt(e).position) >= 0, n = r && Ye(e) ? _r(e) : e;
  return Nt(n) ? t.filter(function(o) {
    return Nt(o) && aa(o, n) && st(o) !== "body";
  }) : [];
}
function hu(e, t, r, n) {
  var o = t === "clippingParents" ? gu(e) : [].concat(t), a = [].concat(o, [r]), c = a[0], s = a.reduce(function(l, d) {
    var u = Fo(e, d, n);
    return l.top = Pt(u.top, l.top), l.right = $r(u.right, l.right), l.bottom = $r(u.bottom, l.bottom), l.left = Pt(u.left, l.left), l;
  }, Fo(e, c, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function fa(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? et(n) : null, a = n ? Ht(n) : null, c = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Fe:
      l = {
        x: c,
        y: t.y - r.height
      };
      break;
    case ze:
      l = {
        x: c,
        y: t.y + t.height
      };
      break;
    case We:
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
  var d = o ? zn(o) : null;
  if (d != null) {
    var u = d === "y" ? "height" : "width";
    switch (a) {
      case qt:
        l[d] = l[d] - (t[u] / 2 - r[u] / 2);
        break;
      case vr:
        l[d] = l[d] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function gr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, c = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? jl : s, d = r.rootBoundary, u = d === void 0 ? na : d, f = r.elementContext, p = f === void 0 ? nr : f, h = r.altBoundary, b = h === void 0 ? !1 : h, m = r.padding, y = m === void 0 ? 0 : m, w = ca(typeof y != "number" ? y : la(y, xr)), S = p === nr ? Fl : nr, I = e.rects.popper, D = e.elements[b ? S : p], A = hu(Nt(D) ? D : D.contextElement || yt(e.elements.popper), l, u, c), O = Qt(e.elements.reference), x = fa({
    reference: O,
    element: I,
    strategy: "absolute",
    placement: o
  }), _ = Rn(Object.assign({}, I, x)), C = p === nr ? _ : O, j = {
    top: A.top - C.top + w.top,
    bottom: C.bottom - A.bottom + w.bottom,
    left: A.left - C.left + w.left,
    right: C.right - A.right + w.right
  }, M = e.modifiersData.offset;
  if (p === nr && M) {
    var X = M[o];
    Object.keys(j).forEach(function(H) {
      var re = [We, ze].indexOf(H) >= 0 ? 1 : -1, fe = [Fe, ze].indexOf(H) >= 0 ? "y" : "x";
      j[H] += X[fe] * re;
    });
  }
  return j;
}
function mu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, c = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? oa : l, u = Ht(n), f = u ? s ? ko : ko.filter(function(b) {
    return Ht(b) === u;
  }) : xr, p = f.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = p.reduce(function(b, m) {
    return b[m] = gr(e, {
      placement: m,
      boundary: o,
      rootBoundary: a,
      padding: c
    })[et(m)], b;
  }, {});
  return Object.keys(h).sort(function(b, m) {
    return h[b] - h[m];
  });
}
function bu(e) {
  if (et(e) === Xr)
    return [];
  var t = Nr(e);
  return [jo(e), t, jo(t)];
}
function yu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, c = r.altAxis, s = c === void 0 ? !0 : c, l = r.fallbackPlacements, d = r.padding, u = r.boundary, f = r.rootBoundary, p = r.altBoundary, h = r.flipVariations, b = h === void 0 ? !0 : h, m = r.allowedAutoPlacements, y = t.options.placement, w = et(y), S = w === y, I = l || (S || !b ? [Nr(y)] : bu(y)), D = [y].concat(I).reduce(function(L, z) {
      return L.concat(et(z) === Xr ? mu(t, {
        placement: z,
        boundary: u,
        rootBoundary: f,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: m
      }) : z);
    }, []), A = t.rects.reference, O = t.rects.popper, x = /* @__PURE__ */ new Map(), _ = !0, C = D[0], j = 0; j < D.length; j++) {
      var M = D[j], X = et(M), H = Ht(M) === qt, re = [Fe, ze].indexOf(X) >= 0, fe = re ? "width" : "height", ie = gr(t, {
        placement: M,
        boundary: u,
        rootBoundary: f,
        altBoundary: p,
        padding: d
      }), ee = re ? H ? We : Le : H ? ze : Fe;
      A[fe] > O[fe] && (ee = Nr(ee));
      var Ae = Nr(ee), ge = [];
      if (a && ge.push(ie[X] <= 0), s && ge.push(ie[ee] <= 0, ie[Ae] <= 0), ge.every(function(L) {
        return L;
      })) {
        C = M, _ = !1;
        break;
      }
      x.set(M, ge);
    }
    if (_)
      for (var E = b ? 3 : 1, k = function(z) {
        var F = D.find(function(V) {
          var Q = x.get(V);
          if (Q)
            return Q.slice(0, z).every(function(J) {
              return J;
            });
        });
        if (F)
          return C = F, "break";
      }, $ = E; $ > 0; $--) {
        var Y = k($);
        if (Y === "break")
          break;
      }
    t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const Au = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Lo(e, t, r) {
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
function $o(e) {
  return [Fe, We, ze, Le].some(function(t) {
    return e[t] >= 0;
  });
}
function xu(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, c = gr(t, {
    elementContext: "reference"
  }), s = gr(t, {
    altBoundary: !0
  }), l = Lo(c, n), d = Lo(s, o, a), u = $o(l), f = $o(d);
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
const _u = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: xu
};
function wu(e, t, r) {
  var n = et(e), o = [Le, Fe].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, c = a[0], s = a[1];
  return c = c || 0, s = (s || 0) * o, [Le, We].indexOf(n) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function Tu(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, c = oa.reduce(function(u, f) {
    return u[f] = wu(f, t.rects, a), u;
  }, {}), s = c[t.placement], l = s.x, d = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = c;
}
const Eu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tu
};
function Ou(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = fa({
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
function Ru(e) {
  return e === "x" ? "y" : "x";
}
function Du(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, c = r.altAxis, s = c === void 0 ? !1 : c, l = r.boundary, d = r.rootBoundary, u = r.altBoundary, f = r.padding, p = r.tether, h = p === void 0 ? !0 : p, b = r.tetherOffset, m = b === void 0 ? 0 : b, y = gr(t, {
    boundary: l,
    rootBoundary: d,
    padding: f,
    altBoundary: u
  }), w = et(t.placement), S = Ht(t.placement), I = !S, D = zn(w), A = Ru(D), O = t.modifiersData.popperOffsets, x = t.rects.reference, _ = t.rects.popper, C = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, j = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, X = {
    x: 0,
    y: 0
  };
  if (!!O) {
    if (a) {
      var H, re = D === "y" ? Fe : Le, fe = D === "y" ? ze : We, ie = D === "y" ? "height" : "width", ee = O[D], Ae = ee + y[re], ge = ee - y[fe], E = h ? -_[ie] / 2 : 0, k = S === qt ? x[ie] : _[ie], $ = S === qt ? -_[ie] : -x[ie], Y = t.elements.arrow, L = h && Y ? Hn(Y) : {
        width: 0,
        height: 0
      }, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sa(), F = z[re], V = z[fe], Q = cr(0, x[ie], L[ie]), J = I ? x[ie] / 2 - E - Q - F - j.mainAxis : k - Q - F - j.mainAxis, q = I ? -x[ie] / 2 + E + Q + V + j.mainAxis : $ + Q + V + j.mainAxis, N = t.elements.arrow && _r(t.elements.arrow), T = N ? D === "y" ? N.clientTop || 0 : N.clientLeft || 0 : 0, Z = (H = M == null ? void 0 : M[D]) != null ? H : 0, he = ee + J - Z - T, we = ee + q - Z, De = cr(h ? $r(Ae, he) : Ae, ee, h ? Pt(ge, we) : ge);
      O[D] = De, X[D] = De - ee;
    }
    if (s) {
      var ot, lt = D === "x" ? Fe : Le, it = D === "x" ? ze : We, Te = O[A], Xe = A === "y" ? "height" : "width", Je = Te + y[lt], At = Te - y[it], pt = [Fe, Le].indexOf(w) !== -1, xt = (ot = M == null ? void 0 : M[A]) != null ? ot : 0, _t = pt ? Je : Te - x[Xe] - _[Xe] - xt + j.altAxis, Ne = pt ? Te + x[Xe] + _[Xe] - xt - j.altAxis : At, Ke = h && pt ? Zl(_t, Te, Ne) : cr(h ? _t : Je, Te, h ? Ne : At);
      O[A] = Ke, X[A] = Ke - Te;
    }
    t.modifiersData[n] = X;
  }
}
const Iu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Du,
  requiresIfExists: ["offset"]
};
function Pu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Nu(e) {
  return e === Ge(e) || !Ye(e) ? Wn(e) : Pu(e);
}
function Cu(e) {
  var t = e.getBoundingClientRect(), r = Vt(t.width) / e.offsetWidth || 1, n = Vt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function ku(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ye(t), o = Ye(t) && Cu(t), a = yt(t), c = Qt(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((st(t) !== "body" || Gn(a)) && (s = Nu(t)), Ye(t) ? (l = Qt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Un(a))), {
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
  function o(a) {
    r.add(a.name);
    var c = [].concat(a.requires || [], a.requiresIfExists || []);
    c.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function Mu(e) {
  var t = Bu(e);
  return On.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function ju(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function gt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(o, a) {
    return o.replace(/%s/, a);
  }, e);
}
var Rt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Fu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Yo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Lu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Yo).filter(function(r, n, o) {
      return o.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(gt(Rt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(gt(Rt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          On.indexOf(t.phase) < 0 && console.error(gt(Rt, t.name, '"phase"', "either " + On.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(gt(Rt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(gt(Rt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(gt(Rt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(gt(Rt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Yo.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(o) {
          return o.name === n;
        }) == null && console.error(gt(Fu, String(t.name), n, n));
      });
    });
  });
}
function $u(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var o = t(n);
    if (!r.has(o))
      return r.add(o), !0;
  });
}
function Yu(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var qo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", qu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Vo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Qo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Vu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? Vo : o;
  return function(s, l, d) {
    d === void 0 && (d = a);
    var u = {
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
    }, f = [], p = !1, h = {
      state: u,
      setOptions: function(w) {
        var S = typeof w == "function" ? w(u.options) : w;
        m(), u.options = Object.assign({}, a, u.options, S), u.scrollParents = {
          reference: Nt(s) ? lr(s) : s.contextElement ? lr(s.contextElement) : [],
          popper: lr(l)
        };
        var I = Mu(Yu([].concat(n, u.options.modifiers)));
        if (u.orderedModifiers = I.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = $u([].concat(I, u.options.modifiers), function(M) {
            var X = M.name;
            return X;
          });
          if (Lu(D), et(u.options.placement) === Xr) {
            var A = u.orderedModifiers.find(function(M) {
              var X = M.name;
              return X === "flip";
            });
            A || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var O = rt(l), x = O.marginTop, _ = O.marginRight, C = O.marginBottom, j = O.marginLeft;
          [x, _, C, j].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), h.update();
      },
      forceUpdate: function() {
        if (!p) {
          var w = u.elements, S = w.reference, I = w.popper;
          if (!Qo(S, I)) {
            process.env.NODE_ENV !== "production" && console.error(qo);
            return;
          }
          u.rects = {
            reference: ku(S, _r(I), u.options.strategy === "fixed"),
            popper: Hn(I)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var D = 0, A = 0; A < u.orderedModifiers.length; A++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error(qu);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, A = -1;
              continue;
            }
            var O = u.orderedModifiers[A], x = O.fn, _ = O.options, C = _ === void 0 ? {} : _, j = O.name;
            typeof x == "function" && (u = x({
              state: u,
              options: C,
              name: j,
              instance: h
            }) || u);
          }
        }
      },
      update: ju(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        m(), p = !0;
      }
    };
    if (!Qo(s, l))
      return process.env.NODE_ENV !== "production" && console.error(qo), h;
    h.setOptions(d).then(function(y) {
      !p && d.onFirstUpdate && d.onFirstUpdate(y);
    });
    function b() {
      u.orderedModifiers.forEach(function(y) {
        var w = y.name, S = y.options, I = S === void 0 ? {} : S, D = y.effect;
        if (typeof D == "function") {
          var A = D({
            state: u,
            name: w,
            instance: h,
            options: I
          }), O = function() {
          };
          f.push(A || O);
        }
      });
    }
    function m() {
      f.forEach(function(y) {
        return y();
      }), f = [];
    }
    return h;
  };
}
var Qu = [lu, Su, su, Xl, Eu, Au, Iu, nu, _u], Hu = /* @__PURE__ */ Vu({
  defaultModifiers: Qu
}), zu = typeof Element < "u", Wu = typeof Map == "function", Uu = typeof Set == "function", Gu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Cr(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!Cr(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (Wu && e instanceof Map && t instanceof Map) {
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
    if (Uu && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (Gu && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    if (zu && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Cr(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Xu = function(t, r) {
  try {
    return Cr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, Ju = [], Xn = function(t, r, n) {
  n === void 0 && (n = {});
  var o = Dt.useRef(null), a = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || Ju
  }, c = Dt.useState({
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
  }), s = c[0], l = c[1], d = Dt.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var b = h.state, m = Object.keys(b.elements);
        ma.flushSync(function() {
          l({
            styles: No(m.map(function(y) {
              return [y, b.styles[y] || {}];
            })),
            attributes: No(m.map(function(y) {
              return [y, b.attributes[y]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), u = Dt.useMemo(function() {
    var p = {
      onFirstUpdate: a.onFirstUpdate,
      placement: a.placement,
      strategy: a.strategy,
      modifiers: [].concat(a.modifiers, [d, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Xu(o.current, p) ? o.current || p : (o.current = p, p);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, d]), f = Dt.useRef();
  return Co(function() {
    f.current && f.current.setOptions(u);
  }, [u]), Co(function() {
    if (!(t == null || r == null)) {
      var p = n.createPopper || Hu, h = p(t, r, u);
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
const xn = {
  "c-toggletip": "_c-toggletip_2swlv_1",
  "c-toggletip--active": "_c-toggletip--active_2swlv_18",
  "c-toggletip__arrow": "_c-toggletip__arrow_2swlv_22"
}, Ku = Object.freeze({
  ESC: 27
}), da = ({
  children: e,
  addClass: t,
  hasArrow: r,
  isDisabled: n,
  distance: o,
  placement: a
}) => {
  const {
    isOpen: c,
    refButton: s
  } = ye(Vn), l = K(), d = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', u = (h) => {
    const b = l.current.querySelectorAll(d), m = s.current, y = b[0], w = b[b.length - 1];
    if (!h.shiftKey && document.activeElement === w)
      return m.focus(), h.preventDefault();
    h.shiftKey && document.activeElement === y && (m.focus(), h.preventDefault()), (h.keyCode || h.which) === Ku.ESC && m.focus();
  }, {
    styles: f,
    attributes: p
  } = Xn(s.current, l.current, {
    placement: a,
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, o || 8]
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
  }, [c]), n ? /* @__PURE__ */ g(dt, {
    children: e
  }) : /* @__PURE__ */ g(Ar, {
    id: "js-toggletip",
    children: /* @__PURE__ */ P("div", {
      tabIndex: -1,
      onKeyDown: u,
      ref: l,
      className: `${xn["c-toggletip"]} ${c && xn["c-toggletip--active"]} ${t != null ? t : ""}`,
      style: f.popper,
      ...p.popper,
      children: [e, r && /* @__PURE__ */ g("div", {
        className: xn["c-toggletip__arrow"],
        "data-popper-arrow": !0,
        style: f.arrow
      })]
    })
  });
};
da.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.node), i.exports.element, i.exports.node]),
  addClass: i.exports.string,
  hasArrow: i.exports.bool,
  isDisabled: i.exports.bool,
  distance: i.exports.number,
  placement: i.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"]),
  __TYPE: pe("ToggletipContent")
};
da.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  __TYPE: "ToggletipContent"
};
const _n = {
  "c-tooltip": "_c-tooltip_1n6og_1",
  "c-tooltip--active": "_c-tooltip--active_1n6og_21",
  "c-tooltip__arrow": "_c-tooltip__arrow_1n6og_25"
}, pa = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: o,
  hasArrow: a,
  distance: c,
  isDisabled: s
}) => {
  const [l, d] = G(!1), u = K(null), f = K(null), p = le(() => t || bt("c-tooltip-"), [t]), h = (A) => {
    l || d(!l);
  }, b = (A) => d(!1), m = (A) => {
    (!l || document.activeElement !== u.current) && d(!l);
  }, y = (A) => d(!1), w = (A) => {
    (A.keyCode | A.which) === 27 && l && d(!l);
  }, S = Oe.map(e, (A) => Ue(A) ? _e(A, {
    ...A.props,
    "aria-describedby": t,
    ref: u,
    onFocus: h,
    onBlur: b,
    onMouseOver: m,
    onMouseOut: y,
    onKeyDown: w
  }) : null), {
    styles: I,
    attributes: D
  } = Xn(u.current, f.current, {
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
  return !r || Oe.count(e) > 1 || s ? /* @__PURE__ */ g(dt, {
    children: e
  }) : /* @__PURE__ */ P(dt, {
    children: [S, /* @__PURE__ */ g(Ar, {
      id: "js-tooltip-portal",
      children: /* @__PURE__ */ P("div", {
        id: p,
        ref: f,
        role: "tooltip",
        className: `${_n["c-tooltip"]} ${l && _n["c-tooltip--active"]} ${o != null ? o : ""}`,
        style: I.popper,
        ...D.popper,
        children: [r, a && /* @__PURE__ */ g("div", {
          className: _n["c-tooltip__arrow"],
          "data-popper-arrow": !0,
          style: I.arrow
        })]
      })
    })]
  });
};
pa.defaultProps = {
  placement: "auto"
};
pa.propTypes = {
  children: i.exports.any,
  id: i.exports.string,
  label: i.exports.string.isRequired,
  addClass: i.exports.string,
  hasArrow: i.exports.bool,
  isDisabled: i.exports.bool,
  distance: i.exports.number,
  placement: i.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const Jn = nt(), va = ({
  steps: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n,
  hideCloseButton: o,
  hideBackButton: a,
  ariaAttributes: c
}) => {
  const [s, l] = G(null), d = [...e.reduce((m, y, w) => [...m, {
    id: w + 1,
    ...y
  }], [])], u = (m) => d.filter((y) => y.id === m).reduce((y, w) => ({
    ...y,
    ...w
  }), {}), f = (m) => {
    const y = document.querySelector("#root");
    y.inert = m;
  }, p = () => {
    l((m) => m < d.length ? m + 1 : m);
  }, h = () => {
    l((m) => m > 0 + 1 ? m - 1 : m);
  }, b = () => {
    l(null), r(!t), f(!1), n && n.current.focus();
  };
  return W(() => {
    t && (l(d.shift().id), f(!0));
  }, [t]), /* @__PURE__ */ g(Jn.Provider, {
    value: {
      isOpen: t,
      lastId: d.length,
      ...u(s),
      methods: {
        onNext: p,
        onPrev: h,
        onClose: b
      }
    },
    children: /* @__PURE__ */ g(Ar, {
      id: "js-tour",
      children: t && /* @__PURE__ */ P(dt, {
        children: [/* @__PURE__ */ g(Zu, {}), /* @__PURE__ */ g(ga, {
          ariaAttributes: c,
          hideCloseButton: o,
          hideBackButton: a
        })]
      })
    })
  });
};
va.defaultProps = {
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
va.propTypes = {
  steps: i.exports.arrayOf(i.exports.shape({
    target: i.exports.string.isRequired,
    content: i.exports.oneOfType([i.exports.string, i.exports.element]),
    placement: i.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"]),
    distance: i.exports.number,
    elementClass: i.exports.string,
    helpLayerClass: i.exports.string
  })),
  isOpen: i.exports.bool,
  onClose: i.exports.func,
  finalFocusRef: i.exports.any.isRequired,
  hideCloseButton: i.exports.bool,
  hideBackButton: i.exports.bool,
  ariaAttributes: i.exports.shape({
    role: i.exports.string,
    tabIndex: i.exports.oneOfType([i.exports.string, i.exports.number]),
    "aria-label": i.exports.string,
    "aria-modal": i.exports.oneOfType([i.exports.string, i.exports.bool])
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
}, ga = ({
  ariaAttributes: e,
  hideCloseButton: t,
  hideBackButton: r
}) => {
  const {
    isOpen: n,
    lastId: o,
    methods: a,
    id: c,
    target: s,
    content: l,
    placement: d,
    distance: u,
    elementClass: f
  } = ye(Jn), p = K(), {
    onClose: h,
    onPrev: b,
    onNext: m
  } = a, {
    styles: y,
    attributes: w
  } = Xn(document.querySelector(s), p.current, {
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
  }), S = () => Ue(l) ? l : Wo("p", {
    className: mt["tour-description"]
  }, [l]), I = () => {
    p.current.style.setProperty("--speed-movement", "0.8s"), m();
  };
  return /* @__PURE__ */ P(dt, {
    children: [/* @__PURE__ */ g("div", {
      className: `${mt["c-layout"]}`
    }), /* @__PURE__ */ P("div", {
      id: `unique-id-tour-element-${c}`,
      ref: p,
      style: y.popper,
      className: `${mt["c-tour-content"]} ${n && "animate__animated animate__fadeIn animate__faster"} ${f != null ? f : ""}`,
      ...e,
      ...w.popper,
      children: [/* @__PURE__ */ P("span", {
        className: "u-sr-only",
        children: ["Parte ", c, " de ", o, "."]
      }), /* @__PURE__ */ g("div", {
        "aria-hidden": !0,
        className: mt["c-tour-progress"],
        children: /* @__PURE__ */ g("div", {
          className: mt["c-tour-progress-bar"],
          style: {
            transform: `scaleX(${c / o})`
          }
        })
      }), S(), /* @__PURE__ */ P("div", {
        className: mt["c-tour-button-container"],
        children: [!t && /* @__PURE__ */ g(It, {
          hasAriaLabel: !0,
          label: "Salir",
          onClick: h,
          icon: {
            name: "close",
            size: "big"
          }
        }), !r && /* @__PURE__ */ g(It, {
          disabled: c === 1,
          hasAriaLabel: !0,
          label: "Anterior",
          onClick: b,
          icon: {
            name: "navigate_before",
            size: "big"
          }
        }), /* @__PURE__ */ g(It, {
          disabled: c === o,
          hasAriaLabel: !0,
          label: "Siguiente",
          onClick: I,
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
  ariaAttributes: i.exports.shape({
    role: i.exports.string,
    tabIndex: i.exports.oneOfType([i.exports.string, i.exports.number]),
    "aria-label": i.exports.string,
    "aria-modal": i.exports.oneOfType([i.exports.string, i.exports.bool])
  }),
  hideCloseButton: i.exports.bool,
  hideBackButton: i.exports.bool
};
const Zu = () => {
  const {
    isOpen: e,
    id: t,
    target: r,
    helpLayerClass: n
  } = ye(Jn), [o, a] = G({}), c = () => {
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
  }, [e, r]), /* @__PURE__ */ g("div", {
    className: `${mt["c-tour-help"]} ${e && "animate__animated animate__fadeIn animate__faster animate__delay-2s"} ${n != null ? n : ""}`,
    style: o,
    children: /* @__PURE__ */ g("span", {
      className: mt["c-tour-number"],
      children: t
    })
  });
}, ef = "_active_r3225_90", tf = "_iconPulse_r3225_1", de = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: ef,
  iconPulse: tf,
  "c-vid__progress-bg": "_c-vid__progress-bg_r3225_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_r3225_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_r3225_140",
  "c-vid__controls": "_c-vid__controls_r3225_150",
  "c-vid__button": "_c-vid__button_r3225_165",
  "c-vid__volume": "_c-vid__volume_r3225_180",
  "c-vid__volume-item": "_c-vid__volume-item_r3225_191",
  "c-vid__time": "_c-vid__time_r3225_202",
  "c-vid__subtitles": "_c-vid__subtitles_r3225_208"
}, ha = ({
  src: e,
  width: t = "1000",
  hasDescription: r,
  description: n,
  addClass: o,
  poster: a,
  ...c
}) => {
  const [s, l] = G({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [d, u] = G({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, p] = G({
    state: !1,
    label: "Reproducir video"
  }), [h, b] = G({
    state: !0,
    label: "Volumen"
  }), [m, y] = G(100), [w, S] = G({
    state: !1,
    label: "Ver en pantalla completa"
  }), [I, D] = G(!1), [A, O] = G(100), x = K(null), _ = K(null), C = K(null), j = K(null), M = K(null), X = K(null), H = K(null), re = K(null), [fe, ie] = G(!1), ee = (N) => {
    N.classList.add(`${de.active}`), setTimeout(() => {
      N.classList.remove(`${de.active}`);
    }, 650);
  };
  function Ae() {
    const N = _.current;
    f.state ? (N.pause(), p({
      state: !1,
      label: "Reproducir video"
    })) : (N.play(), p({
      state: !0,
      label: "Pausar video"
    })), ee(X.current);
  }
  function ge() {
    const N = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, T = x.current;
    N ? (S({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (S({
      state: !0,
      label: "Salir de pantalla completa"
    }), T.requestFullscreen ? T.requestFullscreen() : T.mozRequestFullScreen ? T.mozRequestFullScreen() : T.webkitRequestFullScreen ? T.webkitRequestFullScreen() : T.msRequestFullscreen && T.msRequestFullscreen());
  }
  function E(N) {
    const T = parseInt(N, 10), Z = T >= 3600 ? Math.floor(T / 3600) : 0, he = Math.floor((T - Z * 3600) / 60), we = T - Z * 3600 - he * 60, De = L(Y(Z)), ot = L(Y(he)), lt = L(Y(we));
    return {
      hours: De,
      minutes: ot,
      seconds: lt
    };
  }
  function k(N) {
    const T = $(N.duration), Z = $(N.currentTime);
    u({
      totalSeconds: N.currentTime,
      hours: parseInt(E(N.currentTime).hours),
      minutes: parseInt(E(N.currentTime).minutes),
      seconds: parseInt(E(N.currentTime).seconds),
      string: Z
    }), l({
      totalSeconds: Math.floor(N.duration),
      hours: parseInt(E(N.duration).hours),
      minutes: parseInt(E(N.duration).minutes),
      seconds: parseInt(E(N.duration).seconds),
      string: T
    });
  }
  function $(N) {
    return parseInt(N, 10) <= 3600 ? `${E(N).minutes}:${E(N).seconds}` : `${E(N).hours}:${E(N).minutes}:${E(N).seconds}`;
  }
  function Y(N) {
    return N < 10 ? N = "0" + N : N;
  }
  function L(N) {
    return isNaN(N) ? "00" : N;
  }
  function z(N) {
    const T = j.current, Z = _.current, we = N.nativeEvent.offsetX / T.offsetWidth * Z.duration;
    Z.currentTime = we;
  }
  function F(N) {
    const T = _.current, Z = N.target.value, he = Z / 100;
    O(Z), y(Z), T.volume = he, h.state || b({
      state: !0,
      label: "Volumen"
    });
  }
  const V = () => {
    if (h.state) {
      b({
        state: !1,
        label: "Mutear video"
      });
      const N = _.current, T = 0, Z = T;
      O(T), N.volume = Z;
    } else {
      b({
        state: !0,
        label: "Volumen"
      });
      const N = _.current, T = m, Z = T / 100;
      O(T), N.volume = Z;
    }
  }, Q = function(N) {
    (N.keyCode || N.which) === 32 && Ae();
  }, J = function(N) {
    const T = Math.floor(j.current.getAttribute("aria-valuenow"));
    if (document.activeElement === M.current)
      return null;
    if ((N.keyCode || N.which) === 37) {
      const Z = T - 5;
      Z >= 0 ? _.current.currentTime = Z : _.current.currentTime = 0, ee(re.current);
    }
    if ((N.keyCode || N.which) === 39) {
      const Z = T + 5;
      Z >= _.current.duration ? _.current.currentTime = _.current.duration : _.current.currentTime = Z, ee(H.current);
    }
  }, q = () => s >= 3600 ? `${d.hours} horas, ${d.minutes} minutos y ${d.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${d.minutes} minutos y ${d.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return W(() => {
    const N = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(N, "caption") && ie(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(N, "volume") && O(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), W(() => {
    localStorage.setItem("ui-video", JSON.stringify({
      caption: fe,
      volume: A
    }));
  }, [fe, A]), W(() => (C.current ? C.current.addEventListener("error", () => {
    D(!0);
  }) : D(!0), e.caption && D(!1), () => {
    C.current && C.current.removeEventListener("error", () => {
      D(!0);
    });
  }), [e.caption]), /* @__PURE__ */ P("figure", {
    className: `${de["c-vid"]} ${o}`,
    style: {
      maxWidth: `${t}px`
    },
    onKeyDown: (N) => J(N),
    ...c,
    children: [/* @__PURE__ */ P("div", {
      className: `${de["c-vid__container"]} ${o}`,
      ref: x,
      children: [/* @__PURE__ */ P("div", {
        className: de["c-vid__wrapper"],
        children: [/* @__PURE__ */ P("video", {
          ref: _,
          onTimeUpdate: (N) => k(N.target),
          onLoadedData: (N) => k(N.target),
          onClick: Ae,
          className: `${de["c-vid__video"]} ${fe ? "" : de["no-captions"]}`,
          poster: a ? `assets/images/${a}.png` : void 0,
          children: [/* @__PURE__ */ g("source", {
            src: e.video
          }), e.caption ? /* @__PURE__ */ g("track", {
            ref: C,
            src: e.caption,
            label: "Subt\xEDtulos en espa\xF1ol",
            kind: "subtitles",
            srcLang: "es",
            default: !0
          }) : ""]
        }), /* @__PURE__ */ P("div", {
          className: de["c-vid__icon-container"],
          children: [/* @__PURE__ */ g("div", {
            ref: re,
            className: de["c-vid__icon"],
            children: /* @__PURE__ */ g(Ie, {
              name: "fast_rewind"
            })
          }), /* @__PURE__ */ g("div", {
            ref: X,
            className: de["c-vid__icon"],
            children: /* @__PURE__ */ g(Ie, {
              name: f.state ? "play" : "pause"
            })
          }), /* @__PURE__ */ g("div", {
            ref: H,
            className: de["c-vid__icon"],
            children: /* @__PURE__ */ g(Ie, {
              name: "fast_forward"
            })
          })]
        })]
      }), /* @__PURE__ */ g("div", {
        className: de["progress-container"],
        children: /* @__PURE__ */ P("div", {
          role: "slider",
          "aria-label": "Progreso del video",
          "aria-valuemin": "0",
          "aria-valuenow": d.totalSeconds,
          "aria-valuemax": s.totalSeconds,
          "aria-valuetext": q(),
          tabIndex: "0",
          onKeyDown: Q,
          className: de["c-vid__progress-bg"],
          onClick: z,
          ref: j,
          children: [/* @__PURE__ */ g("div", {
            className: de["c-vid__progress-bar"],
            style: {
              transform: `scaleX(calc(${d.totalSeconds} / ${s.totalSeconds}))`
            }
          }), /* @__PURE__ */ g("div", {
            className: de["progress-sphere"],
            style: {
              left: `min(calc((${d.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
            }
          })]
        })
      }), /* @__PURE__ */ P("div", {
        className: de["c-vid__controls"],
        children: [/* @__PURE__ */ g("button", {
          className: `${de["c-vid__button"]} tour`,
          "aria-label": f.label,
          onClick: Ae,
          "data-description": "Este bot\xF3n reproduce el video",
          children: /* @__PURE__ */ g(Ie, {
            name: f.state ? "pause" : "play"
          })
        }), /* @__PURE__ */ g("button", {
          className: `${de["c-vid__button"]} tour`,
          "aria-label": h.label,
          "data-description": "Este bot\xF3n controla el volumen",
          onClick: V,
          children: /* @__PURE__ */ g(Ie, {
            name: h.state ? "volume_on" : "volume_off"
          })
        }), /* @__PURE__ */ P("label", {
          className: de["c-vid__volume"],
          htmlFor: "volumeControl",
          children: [/* @__PURE__ */ g("span", {
            className: "u-sr-only",
            children: "Controlar volumen"
          }), /* @__PURE__ */ g("input", {
            className: de["c-vid__volume-item"],
            ref: M,
            id: "volumeControl",
            type: "range",
            min: "0",
            max: "100",
            step: "5",
            value: A,
            onChange: F,
            "aria-valuetext": `${A}%`
          })]
        }), /* @__PURE__ */ P("p", {
          className: de["c-vid__time"],
          "aria-hidden": "true",
          children: [/* @__PURE__ */ g("span", {
            children: d.string
          }), "/", /* @__PURE__ */ g("span", {
            children: s.string
          })]
        }), /* @__PURE__ */ g("button", {
          disabled: I,
          "aria-pressed": I ? void 0 : fe,
          onClick: () => ie(!fe),
          "aria-label": "Subt\xEDtulos",
          className: `${de["c-vid__button"]} ${de["c-vid__subtitles"]}`,
          children: /* @__PURE__ */ g(Ie, {
            name: I ? "closed_caption_disabled" : "closed_caption"
          })
        }), /* @__PURE__ */ g("button", {
          className: de["c-vid__button"],
          "aria-label": w.label,
          onClick: ge,
          children: /* @__PURE__ */ g(Ie, {
            name: w.state ? "fullscreen_exit" : "fullscreen"
          })
        })]
      })]
    }), r && /* @__PURE__ */ P("figcaption", {
      className: de["c-vid__caption"],
      children: [/* @__PURE__ */ P("strong", {
        children: [n.title, ":"]
      }), " ", n.content]
    })]
  });
};
ha.propTypes = {
  src: i.exports.shape({
    video: i.exports.string.isRequired,
    caption: i.exports.string
  }),
  width: i.exports.string,
  addClass: i.exports.string,
  hasDescription: i.exports.bool,
  description: i.exports.shape({
    title: i.exports.string,
    content: i.exports.string
  }),
  poster: i.exports.string
};
ha.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
const rf = (e, t) => {
  const [r, n] = G(() => {
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
}, nf = (e, t, r) => {
  const [n, o] = G(r), a = e.map((s) => window.matchMedia(s)), c = () => {
    const s = a.findIndex((l) => l.matches);
    return typeof t[s] < "u" ? t[s] : r;
  };
  return W(() => {
    o(c);
    const s = (l) => o(c);
    return a.forEach((l) => l.addEventListener("change", s)), () => {
      a.forEach((l) => l.removeEventListener("change", s));
    };
  }, []), n;
}, lf = () => {
  const [e, t] = rf("dark-mode-enabled"), r = nf(["(prefers-color-scheme: dark)"], [!0], !1), n = typeof e < "u" ? e : r;
  return W(() => {
    t(r);
  }, [r]), W(() => {
    const o = window.document.body;
    n ? o.setAttribute("data-dark-mode", n) : o.removeAttribute("data-dark-mode", n);
  }, [n]), [n, t];
}, of = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), uf = (e) => {
  const { root: t, rootMargin: r, threshold: n } = e || of, [o, a] = G(!1), [c, s] = G(null);
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
  }, [n, r, t, c]), [s, o];
};
export {
  Da as Accordion,
  Jo as AccordionButton,
  Ko as AccordionItem,
  Zo as AccordionPanel,
  ei as Audio,
  It as Button,
  Tl as ButtonSection,
  ni as CheckBox,
  As as CheckBoxGroup,
  ws as Col,
  Es as Content,
  Ri as DragAndDrop,
  Si as DragAndDropContext,
  Di as Draggable,
  Ii as Droppable,
  cf as Filter,
  Pi as GeneralDraggable,
  Ie as Icon,
  Ni as Image,
  Ci as Input,
  fl as InputGroup,
  Bi as InputLeftAddon,
  Mi as InputRightAddon,
  ki as InputStyle,
  pl as Kbd,
  ji as Link,
  vl as List,
  Li as ListItem,
  $i as Modal,
  Ui as NavSection,
  Qi as NumberDecrementStepper,
  Hi as NumberIncrementStepper,
  Yi as NumberInput,
  Ur as NumberInputContext,
  qi as NumberInputField,
  Vi as NumberInputStepper,
  gl as OrderedList,
  zi as Pagination,
  Yn as PaginationItem,
  xl as Panel,
  Gr as PanelContext,
  Ol as Paper,
  Ar as Portal,
  Nl as Row,
  Wi as Section,
  Gi as Select,
  Cl as SelectGroup,
  Xi as Switch,
  Ji as Tab,
  Ki as TabList,
  Zi as TabPanel,
  ea as TabPanels,
  kl as Tabs,
  qn as TabsContext,
  ta as TextArea,
  Bl as ThemeProvider,
  Ml as Toggletip,
  ra as ToggletipButton,
  da as ToggletipContent,
  Vn as ToggletipContext,
  pa as Tooltip,
  va as Tour,
  Jn as TourContext,
  ga as TourElement,
  Zu as TourHelpLayer,
  hl as UnorderedList,
  ha as Video,
  lf as useDarkMode,
  rf as useLocalStorage,
  nf as useMedia,
  uf as useOnScreen,
  bl as usePagination,
  Dl as usePortal
};
