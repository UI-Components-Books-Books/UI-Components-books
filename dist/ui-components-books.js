import * as Dt from "react";
import Yr, { Children as Oe, useState as G, useEffect as W, isValidElement as Ue, cloneElement as _e, forwardRef as ct, useRef as J, useMemo as le, useLayoutEffect as zo, useCallback as Pe, createContext as Ge, memo as Wo, useReducer as Dn, useContext as me, createElement as Uo } from "react";
import * as Aa from "react-dom";
import { unstable_batchedUpdates as Kt, createPortal as Go } from "react-dom";
var Rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, i = { exports: {} }, rn = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function _a() {
  if (eo)
    return se;
  eo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function I(x) {
    if (typeof x == "object" && x !== null) {
      var O = x.$$typeof;
      switch (O) {
        case t:
          switch (x = x.type, x) {
            case l:
            case d:
            case n:
            case a:
            case o:
            case f:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case u:
                case b:
                case g:
                case c:
                  return x;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function D(x) {
    return I(x) === d;
  }
  return se.AsyncMode = l, se.ConcurrentMode = d, se.ContextConsumer = s, se.ContextProvider = c, se.Element = t, se.ForwardRef = u, se.Fragment = n, se.Lazy = b, se.Memo = g, se.Portal = r, se.Profiler = a, se.StrictMode = o, se.Suspense = f, se.isAsyncMode = function(x) {
    return D(x) || I(x) === l;
  }, se.isConcurrentMode = D, se.isContextConsumer = function(x) {
    return I(x) === s;
  }, se.isContextProvider = function(x) {
    return I(x) === c;
  }, se.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, se.isForwardRef = function(x) {
    return I(x) === u;
  }, se.isFragment = function(x) {
    return I(x) === n;
  }, se.isLazy = function(x) {
    return I(x) === b;
  }, se.isMemo = function(x) {
    return I(x) === g;
  }, se.isPortal = function(x) {
    return I(x) === r;
  }, se.isProfiler = function(x) {
    return I(x) === a;
  }, se.isStrictMode = function(x) {
    return I(x) === o;
  }, se.isSuspense = function(x) {
    return I(x) === f;
  }, se.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === d || x === a || x === o || x === f || x === p || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === g || x.$$typeof === c || x.$$typeof === s || x.$$typeof === u || x.$$typeof === y || x.$$typeof === w || x.$$typeof === S || x.$$typeof === m);
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
var to;
function wa() {
  return to || (to = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function I(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === d || T === a || T === o || T === f || T === p || typeof T == "object" && T !== null && (T.$$typeof === b || T.$$typeof === g || T.$$typeof === c || T.$$typeof === s || T.$$typeof === u || T.$$typeof === y || T.$$typeof === w || T.$$typeof === S || T.$$typeof === m);
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
                  case g:
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
    var x = l, O = d, A = s, _ = c, C = t, j = u, B = n, X = b, H = g, re = r, de = a, ie = o, ee = f, xe = !1;
    function ge(T) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(T) || D(T) === l;
    }
    function E(T) {
      return D(T) === d;
    }
    function M(T) {
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
      return D(T) === g;
    }
    function Q(T) {
      return D(T) === r;
    }
    function K(T) {
      return D(T) === a;
    }
    function q(T) {
      return D(T) === o;
    }
    function N(T) {
      return D(T) === f;
    }
    ce.AsyncMode = x, ce.ConcurrentMode = O, ce.ContextConsumer = A, ce.ContextProvider = _, ce.Element = C, ce.ForwardRef = j, ce.Fragment = B, ce.Lazy = X, ce.Memo = H, ce.Portal = re, ce.Profiler = de, ce.StrictMode = ie, ce.Suspense = ee, ce.isAsyncMode = ge, ce.isConcurrentMode = E, ce.isContextConsumer = M, ce.isContextProvider = $, ce.isElement = Y, ce.isForwardRef = L, ce.isFragment = z, ce.isLazy = F, ce.isMemo = V, ce.isPortal = Q, ce.isProfiler = K, ce.isStrictMode = q, ce.isSuspense = N, ce.isValidElementType = I, ce.typeOf = D;
  }()), ce;
}
var ro;
function Xo() {
  return ro || (ro = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = _a() : e.exports = wa();
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
var on, oo;
function In() {
  if (oo)
    return on;
  oo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return on = e, on;
}
var an, io;
function Ko() {
  return io || (io = 1, an = Function.call.bind(Object.prototype.hasOwnProperty)), an;
}
var sn, ao;
function Ea() {
  if (ao)
    return sn;
  ao = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = In(), r = {}, n = Ko();
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
            var g = d ? d() : "";
            e(
              "Failed " + s + " type: " + f.message + (g != null ? g : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, sn = o, sn;
}
var cn, so;
function Oa() {
  if (so)
    return cn;
  so = 1;
  var e = Xo(), t = Ta(), r = In(), n = Ko(), o = Ea(), a = function() {
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
      var M = E && (d && E[d] || E[u]);
      if (typeof M == "function")
        return M;
    }
    var p = "<<anonymous>>", g = {
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
      elementType: x(),
      instanceOf: O,
      node: j(),
      objectOf: _,
      oneOf: A,
      oneOfType: C,
      shape: X,
      exact: H
    };
    function b(E, M) {
      return E === M ? E !== 0 || 1 / E === 1 / M : E !== E && M !== M;
    }
    function m(E, M) {
      this.message = E, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function y(E) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, $ = 0;
      function Y(z, F, V, Q, K, q, N) {
        if (Q = Q || p, q = q || V, N !== r) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = Q + ":" + V;
            !M[Z] && $ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[Z] = !0, $++);
          }
        }
        return F[V] == null ? z ? F[V] === null ? new m("The " + K + " `" + q + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new m("The " + K + " `" + q + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : E(F, V, Q, K, q);
      }
      var L = Y.bind(null, !1);
      return L.isRequired = Y.bind(null, !0), L;
    }
    function w(E) {
      function M($, Y, L, z, F, V) {
        var Q = $[Y], K = ie(Q);
        if (K !== E) {
          var q = ee(Q);
          return new m(
            "Invalid " + z + " `" + F + "` of type " + ("`" + q + "` supplied to `" + L + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return y(M);
    }
    function S() {
      return y(c);
    }
    function I(E) {
      function M($, Y, L, z, F) {
        if (typeof E != "function")
          return new m("Property `" + F + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var V = $[Y];
        if (!Array.isArray(V)) {
          var Q = ie(V);
          return new m("Invalid " + z + " `" + F + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected an array."));
        }
        for (var K = 0; K < V.length; K++) {
          var q = E(V, K, L, z, F + "[" + K + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return y(M);
    }
    function D() {
      function E(M, $, Y, L, z) {
        var F = M[$];
        if (!s(F)) {
          var V = ie(F);
          return new m("Invalid " + L + " `" + z + "` of type " + ("`" + V + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(E);
    }
    function x() {
      function E(M, $, Y, L, z) {
        var F = M[$];
        if (!e.isValidElementType(F)) {
          var V = ie(F);
          return new m("Invalid " + L + " `" + z + "` of type " + ("`" + V + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(E);
    }
    function O(E) {
      function M($, Y, L, z, F) {
        if (!($[Y] instanceof E)) {
          var V = E.name || p, Q = ge($[Y]);
          return new m("Invalid " + z + " `" + F + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return y(M);
    }
    function A(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function M($, Y, L, z, F) {
        for (var V = $[Y], Q = 0; Q < E.length; Q++)
          if (b(V, E[Q]))
            return null;
        var K = JSON.stringify(E, function(N, T) {
          var Z = ee(T);
          return Z === "symbol" ? String(T) : T;
        });
        return new m("Invalid " + z + " `" + F + "` of value `" + String(V) + "` " + ("supplied to `" + L + "`, expected one of " + K + "."));
      }
      return y(M);
    }
    function _(E) {
      function M($, Y, L, z, F) {
        if (typeof E != "function")
          return new m("Property `" + F + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var V = $[Y], Q = ie(V);
        if (Q !== "object")
          return new m("Invalid " + z + " `" + F + "` of type " + ("`" + Q + "` supplied to `" + L + "`, expected an object."));
        for (var K in V)
          if (n(V, K)) {
            var q = E(V, K, L, z, F + "." + K, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return y(M);
    }
    function C(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var M = 0; M < E.length; M++) {
        var $ = E[M];
        if (typeof $ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe($) + " at index " + M + "."
          ), c;
      }
      function Y(L, z, F, V, Q) {
        for (var K = [], q = 0; q < E.length; q++) {
          var N = E[q], T = N(L, z, F, V, Q, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && K.push(T.data.expectedType);
        }
        var Z = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new m("Invalid " + V + " `" + Q + "` supplied to " + ("`" + F + "`" + Z + "."));
      }
      return y(Y);
    }
    function j() {
      function E(M, $, Y, L, z) {
        return re(M[$]) ? null : new m("Invalid " + L + " `" + z + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return y(E);
    }
    function B(E, M, $, Y, L) {
      return new m(
        (E || "React class") + ": " + M + " type `" + $ + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function X(E) {
      function M($, Y, L, z, F) {
        var V = $[Y], Q = ie(V);
        if (Q !== "object")
          return new m("Invalid " + z + " `" + F + "` of type `" + Q + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var K in E) {
          var q = E[K];
          if (typeof q != "function")
            return B(L, z, F, K, ee(q));
          var N = q(V, K, L, z, F + "." + K, r);
          if (N)
            return N;
        }
        return null;
      }
      return y(M);
    }
    function H(E) {
      function M($, Y, L, z, F) {
        var V = $[Y], Q = ie(V);
        if (Q !== "object")
          return new m("Invalid " + z + " `" + F + "` of type `" + Q + "` " + ("supplied to `" + L + "`, expected `object`."));
        var K = t({}, $[Y], E);
        for (var q in K) {
          var N = E[q];
          if (n(E, q) && typeof N != "function")
            return B(L, z, F, q, ee(N));
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
      return y(M);
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
          var M = f(E);
          if (M) {
            var $ = M.call(E), Y;
            if (M !== E.entries) {
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
    function de(E, M) {
      return E === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function ie(E) {
      var M = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : de(M, E) ? "symbol" : M;
    }
    function ee(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var M = ie(E);
      if (M === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function xe(E) {
      var M = ee(E);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function ge(E) {
      return !E.constructor || !E.constructor.name ? p : E.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, cn;
}
var ln, co;
function Sa() {
  if (co)
    return ln;
  co = 1;
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
  var Ra = Xo(), Da = !0;
  i.exports = Oa()(Ra.isElement, Da);
} else
  i.exports = Sa()();
const Ia = (e) => {
  var t, r;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((r = e == null ? void 0 : e.type) == null ? void 0 : r.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Me = (e, t) => Oe.toArray(e).filter((r) => t.indexOf(Ia(r)) !== -1);
var qr = { exports: {} }, Jt = {};
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
function Pa() {
  if (lo)
    return Jt;
  lo = 1;
  var e = Yr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, d) {
    var u, f = {}, p = null, g = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (f[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: t, type: s, key: p, ref: g, props: f, _owner: o.current };
  }
  return Jt.Fragment = r, Jt.jsx = c, Jt.jsxs = c, Jt;
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
var uo;
function Na() {
  return uo || (uo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Yr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = Symbol.iterator, m = "@@iterator";
    function y(v) {
      if (v === null || typeof v != "object")
        return null;
      var R = b && v[b] || v[m];
      return typeof R == "function" ? R : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(v) {
      {
        for (var R = arguments.length, k = new Array(R > 1 ? R - 1 : 0), U = 1; U < R; U++)
          k[U - 1] = arguments[U];
        I("error", v, k);
      }
    }
    function I(v, R, k) {
      {
        var U = w.ReactDebugCurrentFrame, ae = U.getStackAddendum();
        ae !== "" && (R += "%s", k = k.concat([ae]));
        var ue = k.map(function(ne) {
          return String(ne);
        });
        ue.unshift("Warning: " + R), Function.prototype.apply.call(console[v], console, ue);
      }
    }
    var D = !1, x = !1, O = !1, A = !1, _ = !1, C;
    C = Symbol.for("react.module.reference");
    function j(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === n || v === a || _ || v === o || v === d || v === u || A || v === g || D || x || O || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === f || v.$$typeof === c || v.$$typeof === s || v.$$typeof === l || v.$$typeof === C || v.getModuleId !== void 0));
    }
    function B(v, R, k) {
      var U = v.displayName;
      if (U)
        return U;
      var ae = R.displayName || R.name || "";
      return ae !== "" ? k + "(" + ae + ")" : k;
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
            var k = v;
            return X(k._context) + ".Provider";
          case l:
            return B(v, v.render, "ForwardRef");
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
    var re = Object.assign, de = 0, ie, ee, xe, ge, E, M, $;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function L() {
      {
        if (de === 0) {
          ie = console.log, ee = console.info, xe = console.warn, ge = console.error, E = console.group, M = console.groupCollapsed, $ = console.groupEnd;
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
        de++;
      }
    }
    function z() {
      {
        if (de--, de === 0) {
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
              value: xe
            }),
            error: re({}, v, {
              value: ge
            }),
            group: re({}, v, {
              value: E
            }),
            groupCollapsed: re({}, v, {
              value: M
            }),
            groupEnd: re({}, v, {
              value: $
            })
          });
        }
        de < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = w.ReactCurrentDispatcher, V;
    function Q(v, R, k) {
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
    var K = !1, q;
    {
      var N = typeof WeakMap == "function" ? WeakMap : Map;
      q = new N();
    }
    function T(v, R) {
      if (!v || K)
        return "";
      {
        var k = q.get(v);
        if (k !== void 0)
          return k;
      }
      var U;
      K = !0;
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
`), be = te.length - 1, ye = Ce.length - 1; be >= 1 && ye >= 0 && te[be] !== Ce[ye]; )
            ye--;
          for (; be >= 1 && ye >= 0; be--, ye--)
            if (te[be] !== Ce[ye]) {
              if (be !== 1 || ye !== 1)
                do
                  if (be--, ye--, ye < 0 || te[be] !== Ce[ye]) {
                    var Qe = `
` + te[be].replace(" at new ", " at ");
                    return v.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", v.displayName)), typeof v == "function" && q.set(v, Qe), Qe;
                  }
                while (be >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        K = !1, F.current = ue, z(), Error.prepareStackTrace = ae;
      }
      var Mt = v ? v.displayName || v.name : "", Zn = Mt ? Q(Mt) : "";
      return typeof v == "function" && q.set(v, Zn), Zn;
    }
    function Z(v, R, k) {
      return T(v, !1);
    }
    function he(v) {
      var R = v.prototype;
      return !!(R && R.isReactComponent);
    }
    function we(v, R, k) {
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
            return we(v.type, R, k);
          case p: {
            var U = v, ae = U._payload, ue = U._init;
            try {
              return we(ue(ae), R, k);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, ot = {}, lt = w.ReactDebugCurrentFrame;
    function it(v) {
      if (v) {
        var R = v._owner, k = we(v.type, v._source, R ? R.type : null);
        lt.setExtraStackFrame(k);
      } else
        lt.setExtraStackFrame(null);
    }
    function Te(v, R, k, U, ae) {
      {
        var ue = Function.call.bind(De);
        for (var ne in v)
          if (ue(v, ne)) {
            var te = void 0;
            try {
              if (typeof v[ne] != "function") {
                var Ce = Error((U || "React class") + ": " + k + " type `" + ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              te = v[ne](R, ne, U, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              te = be;
            }
            te && !(te instanceof Error) && (it(ae), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", k, ne, typeof te), it(null)), te instanceof Error && !(te.message in ot) && (ot[te.message] = !0, it(ae), S("Failed %s type: %s", k, te.message), it(null));
          }
      }
    }
    var Ke = Array.isArray;
    function Je(v) {
      return Ke(v);
    }
    function xt(v) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, k = R && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return k;
      }
    }
    function pt(v) {
      try {
        return At(v), !1;
      } catch {
        return !0;
      }
    }
    function At(v) {
      return "" + v;
    }
    function _t(v) {
      if (pt(v))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xt(v)), At(v);
    }
    var Ne = w.ReactCurrentOwner, Ze = {
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
    function Jr(v) {
      if (De.call(v, "key")) {
        var R = Object.getOwnPropertyDescriptor(v, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function Zr(v, R) {
      if (typeof v.ref == "string" && Ne.current && R && Ne.current.stateNode !== R) {
        var k = H(Ne.current.type);
        qe[k] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Ne.current.type), v.ref), qe[k] = !0);
      }
    }
    function Tr(v, R) {
      {
        var k = function() {
          vt || (vt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function en(v, R) {
      {
        var k = function() {
          Gt || (Gt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Er = function(v, R, k, U, ae, ue, ne) {
      var te = {
        $$typeof: t,
        type: v,
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
        value: U
      }), Object.defineProperty(te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function tn(v, R, k, U, ae) {
      {
        var ue, ne = {}, te = null, Ce = null;
        k !== void 0 && (_t(k), te = "" + k), Jr(R) && (_t(R.key), te = "" + R.key), wr(R) && (Ce = R.ref, Zr(R, ae));
        for (ue in R)
          De.call(R, ue) && !Ze.hasOwnProperty(ue) && (ne[ue] = R[ue]);
        if (v && v.defaultProps) {
          var be = v.defaultProps;
          for (ue in be)
            ne[ue] === void 0 && (ne[ue] = be[ue]);
        }
        if (te || Ce) {
          var ye = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          te && Tr(ne, ye), Ce && en(ne, ye);
        }
        return Er(v, te, Ce, ae, U, Ne.current, ne);
      }
    }
    var Xt = w.ReactCurrentOwner, Or = w.ReactDebugCurrentFrame;
    function ve(v) {
      if (v) {
        var R = v._owner, k = we(v.type, v._source, R ? R.type : null);
        Or.setExtraStackFrame(k);
      } else
        Or.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Re(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function et() {
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
          var R = v.fileName.replace(/^.*[\\\/]/, ""), k = v.lineNumber;
          return `

Check your code at ` + R + ":" + k + ".";
        }
        return "";
      }
    }
    var je = {};
    function Ve(v) {
      {
        var R = et();
        if (!R) {
          var k = typeof v == "string" ? v : v.displayName || v.name;
          k && (R = `

Check the top-level render call using <` + k + ">.");
        }
        return R;
      }
    }
    function ut(v, R) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var k = Ve(R);
        if (je[k])
          return;
        je[k] = !0;
        var U = "";
        v && v._owner && v._owner !== Xt.current && (U = " It was passed a child from " + H(v._owner.type) + "."), ve(v), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, U), ve(null);
      }
    }
    function Fe(v, R) {
      {
        if (typeof v != "object")
          return;
        if (Je(v))
          for (var k = 0; k < v.length; k++) {
            var U = v[k];
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
        var k;
        if (typeof R == "function")
          k = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === l || R.$$typeof === f))
          k = R.propTypes;
        else
          return;
        if (k) {
          var U = H(R);
          Te(k, v.props, "prop", U, v);
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
        for (var R = Object.keys(v.props), k = 0; k < R.length; k++) {
          var U = R[k];
          if (U !== "children" && U !== "key") {
            ve(v), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), ve(null);
            break;
          }
        }
        v.ref !== null && (ve(v), S("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function Et(v, R, k, U, ae, ue) {
      {
        var ne = j(v);
        if (!ne) {
          var te = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = Be(ae);
          Ce ? te += Ce : te += et();
          var be;
          v === null ? be = "null" : Je(v) ? be = "array" : v !== void 0 && v.$$typeof === t ? (be = "<" + (H(v.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : be = typeof v, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, te);
        }
        var ye = tn(v, R, k, ae, ue);
        if (ye == null)
          return ye;
        if (ne) {
          var Qe = R.children;
          if (Qe !== void 0)
            if (U)
              if (Je(Qe)) {
                for (var Mt = 0; Mt < Qe.length; Mt++)
                  Fe(Qe[Mt], v);
                Object.freeze && Object.freeze(Qe);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(Qe, v);
        }
        return v === n ? Tt(ye) : wt(ye), ye;
      }
    }
    function Ct(v, R, k) {
      return Et(v, R, k, !0);
    }
    function Sr(v, R, k) {
      return Et(v, R, k, !1);
    }
    var Ot = Sr, St = Ct;
    Zt.Fragment = n, Zt.jsx = Ot, Zt.jsxs = St;
  }()), Zt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Pa() : e.exports = Na();
})(qr);
const dt = qr.exports.Fragment, h = qr.exports.jsx, P = qr.exports.jsxs, Ca = ({
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
  return /* @__PURE__ */ h("div", {
    children: Me(c, ["AccordionItem"])
  });
};
Ca.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  allowMultiple: i.exports.bool,
  defaultIndex: i.exports.oneOfType([i.exports.array, i.exports.number])
};
const fe = (e) => (t, r, n) => {
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
  __TYPE: fe("AccordionButton")
};
Jo.defaultProps = {
  __TYPE: "AccordionButton"
};
const Zo = ({
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
  return /* @__PURE__ */ h("div", {
    className: `${jt["c-accordion__item"]} ${o != null ? o : ""}`,
    children: Me(s, ["AccordionButton", "AccordionPanel"])
  });
};
Zo.propTypes = {
  children: i.exports.arrayOf(i.exports.element),
  id: i.exports.number,
  isOpen: i.exports.oneOfType([i.exports.array, i.exports.number]),
  onToggle: i.exports.func,
  addClass: i.exports.string,
  __TYPE: fe("AccordionItem")
};
Zo.defaultProps = {
  __TYPE: "AccordionItem"
};
const ei = ({
  children: e,
  id: t,
  isExpanded: r,
  addClass: n,
  __TYPE: o,
  ...a
}) => /* @__PURE__ */ h("div", {
  className: `${jt["c-accordion"]} ${r ? jt["c-accordion__panel--active"] : jt["c-accordion__panel"]}`,
  "aria-hidden": !r,
  "data-type": o,
  ...!r && {
    hidden: !r
  },
  ...a,
  children: /* @__PURE__ */ h("div", {
    id: `accordion-panel-${t}`,
    role: "region",
    "aria-hidden": !r,
    "aria-labelledby": `accordion-button-${t}`,
    className: `${jt["c-accordion__panel-content"]} ${n != null ? n : ""}`,
    children: e
  })
});
ei.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  id: i.exports.number,
  isExpanded: i.exports.bool,
  addClass: i.exports.string,
  __TYPE: fe("AccordionPanel")
};
ei.defaultProps = {
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
], fo = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Ie = ({
  name: e,
  size: t,
  addClass: r
}) => e ? Pn.includes(e) ? /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  className: `${fo["c-icon"]} ${fo[`c-${t}`]} ${r != null ? r : ""}`,
  "aria-hidden": "true",
  "data-testid": e,
  children: /* @__PURE__ */ h("use", {
    xlinkHref: `/src/assets/icons/svg/${e}.svg#${e}`
  })
}) : /* @__PURE__ */ h("span", {
  children: "Doesn't exist"
}) : null;
Ie.propTypes = {
  name: i.exports.oneOf(Pn),
  size: i.exports.oneOf(["small", "normal", "big"]),
  addClass: i.exports.string,
  __TYPE: fe("Icon")
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
    children: [u, o && /* @__PURE__ */ h(Ie, {
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
  type: o,
  addClass: a,
  ...c
}) => {
  const [s, l] = G(!1), d = J(), u = Object.freeze({
    BUTTON: "Button",
    BAR: "Bar"
  }), f = (p) => {
    !d.current || (d.current.paused ? d.current.play() : d.current.pause(), l(!s));
  };
  return o === u.BAR ? /* @__PURE__ */ h("audio", {
    preload: "metadata",
    controls: !0,
    className: `${kt["c-audio"]} ${n && kt[`c-audio--${n}`]} ${a != null ? a : ""}`,
    "data-a11y": r,
    ...c,
    children: /* @__PURE__ */ h("source", {
      src: e,
      type: t
    })
  }) : /* @__PURE__ */ P(dt, {
    children: [/* @__PURE__ */ h("audio", {
      ref: d,
      src: e,
      type: t,
      onEnded: () => l(!s),
      className: kt["c-audio--hidden"]
    }), /* @__PURE__ */ h(It, {
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
  src: i.exports.string,
  a11y: i.exports.bool,
  format: i.exports.string,
  size: i.exports.oneOf(["small"]),
  type: i.exports.oneOf(["Bar", "Button"]),
  addClass: i.exports.string
};
var Ma = typeof Rr == "object" && Rr && Rr.Object === Object && Rr, ka = Ma, Ba = ka, ja = typeof self == "object" && self && self.Object === Object && self, Fa = Ba || ja || Function("return this")(), La = Fa, $a = La, Ya = $a.Symbol, Nn = Ya;
function qa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var Va = qa, Qa = Array.isArray, Ha = Qa, po = Nn, ri = Object.prototype, za = ri.hasOwnProperty, Wa = ri.toString, tr = po ? po.toStringTag : void 0;
function Ua(e) {
  var t = za.call(e, tr), r = e[tr];
  try {
    e[tr] = void 0;
    var n = !0;
  } catch {
  }
  var o = Wa.call(e);
  return n && (t ? e[tr] = r : delete e[tr]), o;
}
var Ga = Ua, Xa = Object.prototype, Ka = Xa.toString;
function Ja(e) {
  return Ka.call(e);
}
var Za = Ja, vo = Nn, es = Ga, ts = Za, rs = "[object Null]", ns = "[object Undefined]", go = vo ? vo.toStringTag : void 0;
function os(e) {
  return e == null ? e === void 0 ? ns : rs : go && go in Object(e) ? es(e) : ts(e);
}
var is = os;
function as(e) {
  return e != null && typeof e == "object";
}
var ss = as, cs = is, ls = ss, us = "[object Symbol]";
function fs(e) {
  return typeof e == "symbol" || ls(e) && cs(e) == us;
}
var ds = fs, ho = Nn, ps = Va, vs = Ha, gs = ds, hs = 1 / 0, mo = ho ? ho.prototype : void 0, bo = mo ? mo.toString : void 0;
function ni(e) {
  if (typeof e == "string")
    return e;
  if (vs(e))
    return ps(e, ni) + "";
  if (gs(e))
    return bo ? bo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -hs ? "-0" : t;
}
var ms = ni, bs = ms;
function ys(e) {
  return e == null ? "" : bs(e);
}
var xs = ys, As = xs, _s = 0;
function ws(e) {
  var t = ++_s;
  return As(e) + t;
}
var bt = ws;
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
  state: o,
  value: a,
  addClass: c,
  isDisabled: s,
  defaultChecked: l,
  onChange: d,
  __TYPE: u,
  ...f
}, p) => {
  const [g, b] = G(!1), m = le(() => e || bt(`ui-${r}`), [e, r]), y = Object.freeze({
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
      children: [/* @__PURE__ */ h("input", {
        id: m,
        ref: p,
        type: r,
        name: t,
        value: a,
        checked: g,
        "data-state": o,
        className: rr["c-input__check"],
        onChange: w,
        ...s && {
          disabled: !0
        }
      }), /* @__PURE__ */ h("div", {
        className: rr["c-input__icon"],
        children: y[o] && /* @__PURE__ */ h(Ie, {
          name: y[o]
        })
      })]
    }), /* @__PURE__ */ h("span", {
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
  __TYPE: fe("CheckBox")
};
const Ts = ({
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
    children: [/* @__PURE__ */ h("legend", {
      children: e
    }), /* @__PURE__ */ h("div", {
      className: "u-flow",
      children: Me(s, ["CheckBox"])
    })]
  });
};
Ts.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  legend: i.exports.string,
  onChecked: i.exports.func,
  addClass: i.exports.string
};
const Es = "_col_wu095_1", Os = {
  col: Es
}, Ss = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ h("div", {
  ref: r,
  className: `${Os.col} ${e != null ? e : ""}`,
  ...t
}));
Ss.propTypes = {
  addClass: i.exports.string
};
const Rs = {
  "c-content": "_c-content_u325r_1"
}, Ds = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ h("section", {
  tabIndex: -1,
  className: `${Rs["c-content"]} animate__animated animate__fadeInDown animate__faster ${t != null ? t : ""}`,
  ...r,
  children: e
});
Ds.propTypes = {
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
function Mn(e) {
  const {
    Document: t
  } = ke(e);
  return e instanceof t;
}
function hr(e) {
  return zt(e) ? !1 : e instanceof ke(e).HTMLElement;
}
function Is(e) {
  return e instanceof ke(e).SVGElement;
}
function Wt(e) {
  return e ? zt(e) ? e.document : Cn(e) ? Mn(e) ? e : hr(e) ? e.ownerDocument : document : document : document;
}
const at = Vr ? zo : W;
function Qr(e) {
  const t = J(e);
  return at(() => {
    t.current = e;
  }), Pe(function(...r) {
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Ps() {
  const e = J(null), t = Pe((n, o) => {
    e.current = setInterval(n, o);
  }, []), r = Pe(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, r];
}
function ur(e, t = [e]) {
  const r = J(e);
  return at(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function mr(e, t) {
  const r = J();
  return le(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    [...t]
  );
}
function Mr(e) {
  const t = Qr(e), r = J(null), n = Pe(
    (o) => {
      o !== r.current && (t == null || t(o, r.current)), r.current = o;
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
let un = {};
function Hr(e, t) {
  return le(() => {
    if (t)
      return t;
    const r = un[e] == null ? 0 : un[e] + 1;
    return un[e] = r, `${e}-${r}`;
  }, [e, t]);
}
function ii(e) {
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
const Lt = /* @__PURE__ */ ii(1), Br = /* @__PURE__ */ ii(-1);
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
function Cs(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = ke(e.target);
  return t && e instanceof t;
}
function jr(e) {
  if (Cs(e)) {
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
}), yo = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Ms(e) {
  return e.matches(yo) ? e : e.querySelector(yo);
}
const ks = {
  display: "none"
};
function Bs(e) {
  let {
    id: t,
    value: r
  } = e;
  return /* @__PURE__ */ h("div", {
    id: t,
    style: ks,
    children: r
  });
}
const js = {
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
function Fs(e) {
  let {
    id: t,
    announcement: r
  } = e;
  return /* @__PURE__ */ h("div", {
    id: t,
    style: js,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0,
    children: r
  });
}
function Ls() {
  const [e, t] = G("");
  return {
    announce: Pe((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const ai = /* @__PURE__ */ Ge(null);
function $s(e) {
  const t = me(ai);
  W(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Ys() {
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
const qs = {
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
function Qs(e) {
  let {
    announcements: t = Vs,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: o = qs
  } = e;
  const {
    announce: a,
    announcement: c
  } = Ls(), s = Hr("DndLiveRegion"), [l, d] = G(!1);
  if (W(() => {
    d(!0);
  }, []), $s(le(() => ({
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
        over: g
      } = f;
      t.onDragMove && a(t.onDragMove({
        active: p,
        over: g
      }));
    },
    onDragOver(f) {
      let {
        active: p,
        over: g
      } = f;
      a(t.onDragOver({
        active: p,
        over: g
      }));
    },
    onDragEnd(f) {
      let {
        active: p,
        over: g
      } = f;
      a(t.onDragEnd({
        active: p,
        over: g
      }));
    },
    onDragCancel(f) {
      let {
        active: p,
        over: g
      } = f;
      a(t.onDragCancel({
        active: p,
        over: g
      }));
    }
  }), [a, t])), !l)
    return null;
  const u = /* @__PURE__ */ P(dt, {
    children: [/* @__PURE__ */ h(Bs, {
      id: n,
      value: o.draggable
    }), /* @__PURE__ */ h(Fs, {
      id: s,
      announcement: c
    })]
  });
  return r ? Go(u, r) : u;
}
var Ae;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Ae || (Ae = {}));
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
function Hs() {
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
function zs(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Ws(e, t) {
  const r = jr(e);
  if (!r)
    return "0 0";
  const n = {
    x: (r.x - t.left) / t.width * 100,
    y: (r.y - t.top) / t.height * 100
  };
  return n.x + "% " + n.y + "%";
}
function Us(e, t) {
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
function Gs(e, t) {
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
  const o = xo(t), a = [];
  for (const c of n) {
    const {
      id: s
    } = c, l = r.get(s);
    if (l) {
      const d = xo(l), u = o.reduce((p, g, b) => p + zs(d[b], g), 0), f = Number((u / 4).toFixed(4));
      a.push({
        id: s,
        data: {
          droppableContainer: c,
          value: f
        }
      });
    }
  }
  return a.sort(Us);
};
function Ks(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), c = o - n, s = a - r;
  if (n < o && r < a) {
    const l = t.width * t.height, d = e.width * e.height, u = c * s, f = u / (l + d - u);
    return Number(f.toFixed(4));
  }
  return 0;
}
const Js = (e) => {
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
      const l = Ks(s, t);
      l > 0 && o.push({
        id: c,
        data: {
          droppableContainer: a,
          value: l
        }
      });
    }
  }
  return o.sort(Gs);
};
function Zs(e, t, r) {
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
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const a = t[o];
    return typeof a == "string" ? r.test(a) : !1;
  });
}
function Bn(e, t) {
  const r = [];
  function n(o) {
    if (t != null && r.length >= t || !o)
      return r;
    if (Mn(o) && o.scrollingElement != null && !r.includes(o.scrollingElement))
      return r.push(o.scrollingElement), r;
    if (!hr(o) || Is(o) || r.includes(o))
      return r;
    const {
      getComputedStyle: a
    } = ke(o), c = a(o);
    return o !== e && ac(o, c) && r.push(o), ic(o, c) ? r : n(o.parentNode);
  }
  return e ? n(e) : r;
}
function ui(e) {
  const [t] = Bn(e, 1);
  return t != null ? t : null;
}
function dn(e) {
  return !Vr || !e ? null : zt(e) ? e : Cn(e) ? Mn(e) || e === Wt(e).scrollingElement ? window : hr(e) ? e : null : null;
}
function fi(e) {
  return zt(e) ? e.scrollX : e.scrollLeft;
}
function di(e) {
  return zt(e) ? e.scrollY : e.scrollTop;
}
function wn(e) {
  return {
    x: fi(e),
    y: di(e)
  };
}
var Ee;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ee || (Ee = {}));
function pi(e) {
  return !Vr || !e ? !1 : e === document.scrollingElement;
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
const sc = {
  x: 0.2,
  y: 0.2
};
function cc(e, t, r, n, o) {
  let {
    top: a,
    left: c,
    right: s,
    bottom: l
  } = r;
  n === void 0 && (n = 10), o === void 0 && (o = sc);
  const {
    isTop: d,
    isBottom: u,
    isLeft: f,
    isRight: p
  } = vi(e), g = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, m = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !d && a <= t.top + m.height ? (g.y = Ee.Backward, b.y = n * Math.abs((t.top + m.height - a) / m.height)) : !u && l >= t.bottom - m.height && (g.y = Ee.Forward, b.y = n * Math.abs((t.bottom - m.height - l) / m.height)), !p && s >= t.right - m.width ? (g.x = Ee.Forward, b.x = n * Math.abs((t.right - m.width - s) / m.width)) : !f && c <= t.left + m.width && (g.x = Ee.Backward, b.x = n * Math.abs((t.left + m.width - c) / m.width)), {
    direction: g,
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
function gi(e) {
  return e.reduce((t, r) => Lt(t, wn(r)), rt);
}
function uc(e) {
  return e.reduce((t, r) => t + fi(r), 0);
}
function fc(e) {
  return e.reduce((t, r) => t + di(r), 0);
}
function hi(e, t) {
  if (t === void 0 && (t = br), !e)
    return;
  const {
    top: r,
    left: n,
    bottom: o,
    right: a
  } = t(e);
  !ui(e) || (o <= 0 || a <= 0 || r >= window.innerHeight || n >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const dc = [["x", ["left", "right"], uc], ["y", ["top", "bottom"], fc]];
class jn {
  constructor(t, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = Bn(r), o = gi(n);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [a, c, s] of dc)
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
function pc(e) {
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
function _o(e) {
  e.preventDefault();
}
function vc(e) {
  e.stopPropagation();
}
var oe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(oe || (oe = {}));
const mi = {
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
    n && hi(n), r(rt);
  }
  handleKeyDown(t) {
    if (kn(t)) {
      const {
        active: r,
        context: n,
        options: o
      } = this.props, {
        keyboardCodes: a = mi,
        coordinateGetter: c = gc,
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
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const f = c(t, {
        active: r,
        context: n.current,
        currentCoordinates: u
      });
      if (f) {
        const p = Br(f, u), g = {
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
            maxScroll: x,
            minScroll: O
          } = vi(m), A = lc(m), _ = {
            x: Math.min(y === oe.Right ? A.right - A.width / 2 : A.right, Math.max(y === oe.Right ? A.left : A.left + A.width / 2, f.x)),
            y: Math.min(y === oe.Down ? A.bottom - A.height / 2 : A.bottom, Math.max(y === oe.Down ? A.top : A.top + A.height / 2, f.y))
          }, C = y === oe.Right && !S || y === oe.Left && !I, j = y === oe.Down && !D || y === oe.Up && !w;
          if (C && _.x !== f.x) {
            const B = m.scrollLeft + p.x, X = y === oe.Right && B <= x.x || y === oe.Left && B >= O.x;
            if (X && !p.y) {
              m.scrollTo({
                left: B,
                behavior: s
              });
              return;
            }
            X ? g.x = m.scrollLeft - B : g.x = y === oe.Right ? m.scrollLeft - x.x : m.scrollLeft - O.x, g.x && m.scrollBy({
              left: -g.x,
              behavior: s
            });
            break;
          } else if (j && _.y !== f.y) {
            const B = m.scrollTop + p.y, X = y === oe.Down && B <= x.y || y === oe.Up && B >= O.y;
            if (X && !p.x) {
              m.scrollTo({
                top: B,
                behavior: s
              });
              return;
            }
            X ? g.y = m.scrollTop - B : g.y = y === oe.Down ? m.scrollTop - x.y : m.scrollTop - O.y, g.y && m.scrollBy({
              top: -g.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Lt(Br(f, this.referenceCoordinates), g));
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
      keyboardCodes: n = mi,
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
function wo(e) {
  return Boolean(e && "distance" in e);
}
function To(e) {
  return Boolean(e && "delay" in e);
}
class Ln {
  constructor(t, r, n) {
    var o;
    n === void 0 && (n = pc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = r;
    const {
      event: a
    } = t, {
      target: c
    } = a;
    this.props = t, this.events = r, this.document = Wt(c), this.documentListeners = new or(this.document), this.listeners = new or(n), this.windowListeners = new or(ke(c)), this.initialCoordinates = (o = jr(a)) != null ? o : rt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(He.Resize, this.handleCancel), this.windowListeners.add(He.DragStart, _o), this.windowListeners.add(He.VisibilityChange, this.handleCancel), this.windowListeners.add(He.ContextMenu, _o), this.documentListeners.add(He.Keydown, this.handleKeydown), r) {
      if (wo(r))
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
    t && (this.activated = !0, this.documentListeners.add(He.Click, vc, {
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
    const l = (r = jr(t)) != null ? r : rt, d = Br(o, l);
    if (!n && s) {
      if (To(s))
        return pn(d, s.tolerance) ? this.handleCancel() : void 0;
      if (wo(s))
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
const hc = {
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
    } = t, n = Wt(r.target);
    super(t, hc, n);
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
const mc = {
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
    super(t, mc, Wt(t.event.target));
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
class xi extends Ln {
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
xi.activators = [{
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
function bc(e) {
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
  const g = xc({
    delta: f,
    disabled: !a
  }), [b, m] = Ps(), y = J({
    x: 0,
    y: 0
  }), w = J({
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
  }, [r, o, l]), I = J(null), D = Pe(() => {
    const O = I.current;
    if (!O)
      return;
    const A = y.current.x * w.current.x, _ = y.current.y * w.current.y;
    O.scrollBy(A, _);
  }, []), x = le(() => s === Lr.TreeOrder ? [...d].reverse() : d, [s, d]);
  W(
    () => {
      if (!a || !d.length || !S) {
        m();
        return;
      }
      for (const O of x) {
        if ((n == null ? void 0 : n(O)) === !1)
          continue;
        const A = d.indexOf(O), _ = u[A];
        if (!_)
          continue;
        const {
          direction: C,
          speed: j
        } = cc(O, _, S, t, p);
        for (const B of ["x", "y"])
          g[B][C[B]] || (j[B] = 0, C[B] = 0);
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
      JSON.stringify(g),
      b,
      d,
      x,
      u,
      JSON.stringify(p)
    ]
  );
}
const yc = {
  x: {
    [Ee.Backward]: !1,
    [Ee.Forward]: !1
  },
  y: {
    [Ee.Backward]: !1,
    [Ee.Forward]: !1
  }
};
function xc(e) {
  let {
    delta: t,
    disabled: r
  } = e;
  const n = kr(t);
  return mr((o) => {
    if (r || !n || !o)
      return yc;
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
function Ac(e, t) {
  const r = t !== null ? e.get(t) : void 0, n = r ? r.node.current : null;
  return mr((o) => {
    var a;
    return t === null ? null : (a = n != null ? n : o) != null ? a : null;
  }, [n, t]);
}
function _c(e, t) {
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
const Eo = /* @__PURE__ */ new Map();
function wc(e, t) {
  let {
    dragging: r,
    dependencies: n,
    config: o
  } = t;
  const [a, c] = G(null), s = a != null, {
    frequency: l,
    measure: d,
    strategy: u
  } = o, f = J(e), p = w(), g = ur(p), b = Pe(function(S) {
    S === void 0 && (S = []), !g.current && c((I) => I ? I.concat(S) : S);
  }, [g]), m = J(null), y = mr((S) => {
    if (p && !r)
      return Eo;
    const I = a;
    if (!S || S === Eo || f.current !== e || I != null) {
      const D = /* @__PURE__ */ new Map();
      for (let x of e) {
        if (!x)
          continue;
        if (I && I.length > 0 && !I.includes(x.id) && x.rect.current) {
          D.set(x.id, x.rect.current);
          continue;
        }
        const O = x.node.current, A = O ? new jn(d(O), O) : null;
        x.rect.current = A, A && D.set(x.id, A);
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
function Tc(e, t) {
  return $n(e, t);
}
function Ec(e) {
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
function Oc(e) {
  return new jn(br(e), e);
}
function Oo(e, t, r) {
  t === void 0 && (t = Oc);
  const [n, o] = Dn(s, null), a = Ec({
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
function Sc(e) {
  const t = $n(e);
  return ci(e, t);
}
const So = [];
function Rc(e) {
  const t = J(e), r = mr((n) => e ? n && n !== So && e && t.current && e.parentNode === t.current.parentNode ? n : Bn(e) : So, [e]);
  return W(() => {
    t.current = e;
  }, [e]), r;
}
function Dc(e) {
  const [t, r] = G(null), n = J(e), o = Pe((a) => {
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
  }, [o, e]), le(() => e.length ? t ? Array.from(t.values()).reduce((a, c) => Lt(a, c), rt) : gi(e) : rt, [e, t]);
}
function Ro(e, t) {
  t === void 0 && (t = []);
  const r = J(null);
  return W(
    () => {
      r.current = null;
    },
    t
  ), W(() => {
    const n = e !== rt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? Br(e, r.current) : rt;
}
function Ic(e) {
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
function Pc(e, t) {
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
  return le(() => e ? oc(e) : null, [e]);
}
const gn = [];
function Nc(e, t) {
  t === void 0 && (t = br);
  const [r] = e, n = Ai(r ? ke(r) : null), [o, a] = Dn(s, gn), c = zr({
    callback: a
  });
  return e.length > 0 && o === gn && a(), at(() => {
    e.length ? e.forEach((l) => c == null ? void 0 : c.observe(l)) : (c == null || c.disconnect(), a());
  }, [e]), o;
  function s() {
    return e.length ? e.map((l) => pi(l) ? n : new jn(t(l), l)) : gn;
  }
}
function _i(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return hr(t) ? t : e;
}
function Cc(e) {
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
    const u = _i(d);
    a == null || a.disconnect(), u && (a == null || a.observe(u)), n(u ? t(u) : null);
  }, [t, a]), [s, l] = Mr(c);
  return le(() => ({
    nodeRef: s,
    rect: r,
    setRef: l
  }), [r, s, l]);
}
const Mc = [{
  sensor: bi,
  options: {}
}, {
  sensor: Fn,
  options: {}
}], kc = {
  current: {}
}, Ir = {
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
const Bc = {
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
  measuringConfiguration: Ir,
  measureDroppableContainers: Fr,
  windowRect: null,
  measuringScheduled: !1
}, wi = {
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
}, yr = /* @__PURE__ */ Ge(wi), Ti = /* @__PURE__ */ Ge(Bc);
function jc() {
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
function Fc(e, t) {
  switch (t.type) {
    case Ae.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Ae.DragMove:
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
    case Ae.DragEnd:
    case Ae.DragCancel:
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
    case Ae.RegisterDroppable: {
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
    case Ae.SetDroppableDisabled: {
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
    case Ae.UnregisterDroppable: {
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
function Lc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: o
  } = me(yr), a = kr(n), c = kr(r == null ? void 0 : r.id);
  return W(() => {
    if (!t && !n && a && c != null) {
      if (!kn(a) || document.activeElement === a.target)
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
          const f = Ms(u);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [n, t, o, c, a]), null;
}
function Ei(e, t) {
  let {
    transform: r,
    ...n
  } = t;
  return e != null && e.length ? e.reduce((o, a) => a({
    transform: o,
    ...n
  }), r) : r;
}
function $c(e) {
  return le(
    () => ({
      draggable: {
        ...Ir.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Ir.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Ir.dragOverlay,
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
    config: o = !0
  } = e;
  const a = J(!1), {
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
const Wr = /* @__PURE__ */ Ge({
  ...rt,
  scaleX: 1,
  scaleY: 1
});
var ht;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(ht || (ht = {}));
const qc = /* @__PURE__ */ Wo(function(t) {
  var r, n, o, a;
  let {
    id: c,
    accessibility: s,
    autoScroll: l = !0,
    children: d,
    sensors: u = Mc,
    collisionDetection: f = Js,
    measuring: p,
    modifiers: g,
    ...b
  } = t;
  const m = Dn(Fc, void 0, jc), [y, w] = m, [S, I] = Ys(), [D, x] = G(ht.Uninitialized), O = D === ht.Initialized, {
    draggable: {
      active: A,
      nodes: _,
      translate: C
    },
    droppable: {
      containers: j
    }
  } = y, B = A ? _.get(A) : null, X = J({
    initial: null,
    translated: null
  }), H = le(() => {
    var ve;
    return A != null ? {
      id: A,
      data: (ve = B == null ? void 0 : B.data) != null ? ve : kc,
      rect: X
    } : null;
  }, [A, B]), re = J(null), [de, ie] = G(null), [ee, xe] = G(null), ge = ur(b, Object.values(b)), E = Hr("DndDescribedBy", c), M = le(() => j.getEnabled(), [j]), $ = $c(p), {
    droppableRects: Y,
    measureDroppableContainers: L,
    measuringScheduled: z
  } = wc(M, {
    dragging: O,
    dependencies: [C.x, C.y],
    config: $.droppable
  }), F = Ac(_, A), V = le(() => ee ? jr(ee) : null, [ee]), Q = Or(), K = Tc(F, $.draggable.measure);
  Yc({
    activeNode: A ? _.get(A) : null,
    config: Q.layoutShiftCompensation,
    initialRect: K,
    measure: $.draggable.measure
  });
  const q = Oo(F, $.draggable.measure, K), N = Oo(F ? F.parentElement : null), T = J({
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
  }), Z = j.getNodeFor((r = T.current.over) == null ? void 0 : r.id), he = Cc({
    measure: $.dragOverlay.measure
  }), we = (n = he.nodeRef.current) != null ? n : F, De = O ? (o = he.rect) != null ? o : q : null, ot = Boolean(he.nodeRef.current && he.rect), lt = Sc(ot ? null : q), it = Ai(we ? ke(we) : null), Te = Rc(O ? Z != null ? Z : F : null), Ke = Nc(Te), Je = Ei(g, {
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
    scrollableAncestorRects: Ke,
    windowRect: it
  }), xt = V ? Lt(V, C) : null, pt = Dc(Te), At = Ro(pt), _t = Ro(pt, [q]), Ne = Lt(Je, At), Ze = De ? tc(De, Je) : null, vt = H && Ze ? f({
    active: H,
    collisionRect: Ze,
    droppableRects: Y,
    droppableContainers: M,
    pointerCoordinates: xt
  }) : null, Gt = si(vt, "id"), [qe, wr] = G(null), Jr = ot ? Je : Lt(Je, _t), Zr = Zs(Jr, (a = qe == null ? void 0 : qe.rect) != null ? a : null, q), Tr = Pe(
    (ve, Se) => {
      let {
        sensor: Re,
        options: et
      } = Se;
      if (re.current == null)
        return;
      const Be = _.get(re.current);
      if (!Be)
        return;
      const je = ve.nativeEvent, Ve = new Re({
        active: re.current,
        activeNode: Be,
        event: je,
        options: et,
        context: T,
        onStart(Fe) {
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
          Kt(() => {
            Et == null || Et(Ct), x(ht.Initializing), w({
              type: Ae.DragStart,
              initialCoordinates: Fe,
              active: wt
            }), S({
              type: "onDragStart",
              event: Ct
            });
          });
        },
        onMove(Fe) {
          w({
            type: Ae.DragMove,
            coordinates: Fe
          });
        },
        onEnd: ut(Ae.DragEnd),
        onCancel: ut(Ae.DragCancel)
      });
      Kt(() => {
        ie(Ve), xe(ve.nativeEvent);
      });
      function ut(Fe) {
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
              activatorEvent: je,
              active: Tt,
              collisions: Et,
              delta: Sr,
              over: Ct
            }, Fe === Ae.DragEnd && typeof St == "function" && await Promise.resolve(St(Ot)) && (Fe = Ae.DragCancel);
          }
          re.current = null, Kt(() => {
            w({
              type: Fe
            }), x(ht.Uninitialized), wr(null), ie(null), xe(null);
            const St = Fe === Ae.DragEnd ? "onDragEnd" : "onDragCancel";
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
  ), en = Pe((ve, Se) => (Re, et) => {
    const Be = Re.nativeEvent, je = _.get(et);
    if (re.current !== null || !je || Be.dndKit || Be.defaultPrevented)
      return;
    const Ve = {
      active: je
    };
    ve(Re, Se.options, Ve) === !0 && (Be.dndKit = {
      capturedBy: Se.sensor
    }, re.current = et, Tr(Re, Se));
  }, [_, Tr]), Er = _c(u, en);
  Ic(u), at(() => {
    q && D === ht.Initializing && x(ht.Initialized);
  }, [q, D]), W(
    () => {
      const {
        onDragMove: ve
      } = ge.current, {
        active: Se,
        activatorEvent: Re,
        collisions: et,
        over: Be
      } = T.current;
      if (!Se || !Re)
        return;
      const je = {
        active: Se,
        activatorEvent: Re,
        collisions: et,
        delta: {
          x: Ne.x,
          y: Ne.y
        },
        over: Be
      };
      Kt(() => {
        ve == null || ve(je), S({
          type: "onDragMove",
          event: je
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
        droppableContainers: et,
        scrollAdjustedTranslate: Be
      } = T.current;
      if (!ve || re.current == null || !Se || !Be)
        return;
      const {
        onDragOver: je
      } = ge.current, Ve = et.get(Gt), ut = Ve && Ve.rect.current ? {
        id: Ve.id,
        rect: Ve.rect.current,
        data: Ve.data,
        disabled: Ve.disabled
      } : null, Fe = {
        active: ve,
        activatorEvent: Se,
        collisions: Re,
        delta: {
          x: Be.x,
          y: Be.y
        },
        over: ut
      };
      Kt(() => {
        wr(ut), je == null || je(Fe), S({
          type: "onDragOver",
          event: Fe
        });
      });
    },
    [Gt]
  ), at(() => {
    T.current = {
      activatorEvent: ee,
      active: H,
      activeNode: F,
      collisionRect: Ze,
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
      translated: Ze
    };
  }, [H, F, vt, Ze, _, we, De, Y, j, qe, Te, Ne]), bc({
    ...Q,
    delta: C,
    draggingRect: Ze,
    pointerCoordinates: xt,
    scrollableAncestors: Te,
    scrollableAncestorRects: Ke
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
    scrollableAncestorRects: Ke,
    measuringConfiguration: $,
    measuringScheduled: z,
    windowRect: it
  }), [H, F, q, ee, vt, N, he, _, j, Y, qe, L, Te, Ke, $, z, it]), Xt = le(() => ({
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
  return /* @__PURE__ */ P(ai.Provider, {
    value: I,
    children: [/* @__PURE__ */ P(yr.Provider, {
      value: Xt,
      children: [/* @__PURE__ */ h(Ti.Provider, {
        value: tn,
        children: /* @__PURE__ */ h(Wr.Provider, {
          value: Zr,
          children: d
        })
      }), /* @__PURE__ */ h(Lc, {
        disabled: (s == null ? void 0 : s.restoreFocus) === !1
      })]
    }), /* @__PURE__ */ h(Qs, {
      ...s,
      hiddenTextDescribedById: E
    })]
  });
  function Or() {
    const ve = (de == null ? void 0 : de.autoScrollEnabled) === !1, Se = typeof l == "object" ? l.enabled === !1 : l === !1, Re = O && !ve && !Se;
    return typeof l == "object" ? {
      ...l,
      enabled: Re
    } : {
      enabled: Re
    };
  }
}), Vc = /* @__PURE__ */ Ge(null), Do = "button", Qc = "Droppable";
function Hc(e) {
  let {
    id: t,
    data: r,
    disabled: n = !1,
    attributes: o
  } = e;
  const a = Hr(Qc), {
    activators: c,
    activatorEvent: s,
    active: l,
    activeNodeRect: d,
    ariaDescribedById: u,
    draggableNodes: f,
    over: p
  } = me(yr), {
    role: g = Do,
    roleDescription: b = "draggable",
    tabIndex: m = 0
  } = o != null ? o : {}, y = (l == null ? void 0 : l.id) === t, w = me(y ? Wr : Vc), [S, I] = Mr(), [D, x] = Mr(), O = Pc(c, t), A = ur(r);
  at(
    () => (f.set(t, {
      id: t,
      key: a,
      node: S,
      activatorNode: D,
      data: A
    }), () => {
      const C = f.get(t);
      C && C.key === a && f.delete(t);
    }),
    [f, t]
  );
  const _ = le(() => ({
    role: g,
    tabIndex: m,
    "aria-disabled": n,
    "aria-pressed": y && g === Do ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": u.draggable
  }), [n, g, m, y, b, u.draggable]);
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
    setActivatorNodeRef: x,
    transform: w
  };
}
function zc() {
  return me(Ti);
}
const Wc = "Droppable", Uc = {
  timeout: 25
};
function Oi(e) {
  let {
    data: t,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: o
  } = e;
  const a = Hr(Wc), {
    active: c,
    dispatch: s,
    over: l,
    measureDroppableContainers: d
  } = me(yr), u = J({
    disabled: r
  }), f = J(!1), p = J(null), g = J(null), {
    disabled: b,
    updateMeasurementsFor: m,
    timeout: y
  } = {
    ...Uc,
    ...o
  }, w = ur(m != null ? m : n), S = Pe(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      g.current != null && clearTimeout(g.current), g.current = setTimeout(() => {
        d(Array.isArray(w.current) ? w.current : [w.current]), g.current = null;
      }, y);
    },
    [y]
  ), I = zr({
    callback: S,
    disabled: b || !c
  }), D = Pe((_, C) => {
    !I || (C && (I.unobserve(C), f.current = !1), _ && I.observe(_));
  }, [I]), [x, O] = Mr(D), A = ur(t);
  return W(() => {
    !I || !x.current || (I.disconnect(), f.current = !1, I.observe(x.current));
  }, [x, I]), at(
    () => (s({
      type: Ae.RegisterDroppable,
      element: {
        id: n,
        key: a,
        disabled: r,
        node: x,
        rect: p,
        data: A
      }
    }), () => s({
      type: Ae.UnregisterDroppable,
      key: a,
      id: n
    })),
    [n]
  ), W(() => {
    r !== u.current.disabled && (s({
      type: Ae.SetDroppableDisabled,
      id: n,
      key: a,
      disabled: r
    }), u.current.disabled = r);
  }, [n, a, r, s]), {
    active: c,
    rect: p,
    isOver: (l == null ? void 0 : l.id) === n,
    node: x,
    over: l,
    setNodeRef: O
  };
}
function Gc(e) {
  let {
    animation: t,
    children: r
  } = e;
  const [n, o] = G(null), [a, c] = G(null), s = kr(r);
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
const Xc = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Kc(e) {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ h(yr.Provider, {
    value: wi,
    children: /* @__PURE__ */ h(Wr.Provider, {
      value: Xc,
      children: t
    })
  });
}
const Jc = {
  position: "fixed",
  touchAction: "none"
}, Zc = (e) => kn(e) ? "transform 250ms ease" : void 0, el = /* @__PURE__ */ ct((e, t) => {
  let {
    as: r,
    activatorEvent: n,
    adjustScale: o,
    children: a,
    className: c,
    rect: s,
    style: l,
    transform: d,
    transition: u = Zc
  } = e;
  if (!s)
    return null;
  const f = o ? d : {
    ...d,
    scaleX: 1,
    scaleY: 1
  }, p = {
    ...Jc,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: $t.Transform.toString(f),
    transformOrigin: o && n ? Ws(n, s) : void 0,
    transition: typeof u == "function" ? u(n) : u,
    ...l
  };
  return Yr.createElement(r, {
    className: c,
    style: p,
    ref: t
  }, a);
}), Si = (e) => (t) => {
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
}, tl = (e) => {
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
}, rl = {
  duration: 250,
  easing: "ease",
  keyframes: tl,
  sideEffects: /* @__PURE__ */ Si({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function nl(e) {
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
    const d = _i(c);
    if (!d)
      return;
    const {
      transform: u
    } = ke(c).getComputedStyle(c), f = li(u);
    if (!f)
      return;
    const p = typeof t == "function" ? t : ol(t);
    return hi(l, o.draggable.measure), p({
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
function ol(e) {
  const {
    duration: t,
    easing: r,
    sideEffects: n,
    keyframes: o
  } = {
    ...rl,
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
    }, g = o({
      ...d,
      active: c,
      dragOverlay: s,
      transform: {
        initial: l,
        final: p
      }
    }), [b] = g, m = g[g.length - 1];
    if (JSON.stringify(b) === JSON.stringify(m))
      return;
    const y = n == null ? void 0 : n({
      active: c,
      dragOverlay: s,
      ...d
    }), w = s.node.animate(g, {
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
let Io = 0;
function il(e) {
  return le(() => {
    if (e != null)
      return Io++, Io;
  }, [e]);
}
const al = /* @__PURE__ */ Yr.memo((e) => {
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
    containerNodeRect: g,
    draggableNodes: b,
    droppableContainers: m,
    dragOverlay: y,
    over: w,
    measuringConfiguration: S,
    scrollableAncestors: I,
    scrollableAncestorRects: D,
    windowRect: x
  } = zc(), O = me(Wr), A = il(f == null ? void 0 : f.id), _ = Ei(c, {
    activatorEvent: u,
    active: f,
    activeNodeRect: p,
    containerNodeRect: g,
    draggingNodeRect: y.rect,
    over: w,
    overlayNodeRect: y.rect,
    scrollableAncestors: I,
    scrollableAncestorRects: D,
    transform: O,
    windowRect: x
  }), C = $n(p), j = nl({
    config: n,
    draggableNodes: b,
    droppableContainers: m,
    measuringConfiguration: S
  }), B = C ? y.setRef : void 0;
  return /* @__PURE__ */ h(Kc, {
    children: /* @__PURE__ */ h(Gc, {
      animation: j,
      children: f && A ? /* @__PURE__ */ h(el, {
        id: f.id,
        ref: B,
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
      }, A) : null
    })
  });
}), sl = ({
  transform: e
}) => ({
  ...e,
  y: 0
}), cl = ({
  transform: e
}) => ({
  ...e,
  x: 0
}), ll = [oe.Down, oe.Right, oe.Up, oe.Left], ul = (e, { context: { active: t, droppableRects: r, droppableContainers: n, collisionRect: o } }) => {
  var a;
  if (ll.includes(e.code)) {
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
    const l = Xs({
      active: t,
      collisionRect: o,
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
}, fl = "_pop_1t0s1_1", dl = "_pulse_1t0s1_1", Ut = {
  "c-droppable": "_c-droppable_1t0s1_1",
  "c-droppable--active": "_c-droppable--active_1t0s1_22",
  "c-draggable": "_c-draggable_1t0s1_27",
  "c-draggable--active": "_c-draggable--active_1t0s1_56",
  pop: fl,
  pulse: dl
}, Ri = Ge(), Bt = (e, t) => Oe.map(e, (r) => {
  var n;
  if (!!Ue(r) && !!r.props) {
    if (((n = r == null ? void 0 : r.props) == null ? void 0 : n.__TYPE) === t)
      return r;
    if (r.props.children)
      return Bt(r.props.children, t);
  }
}), pl = {
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
}, Di = ({
  children: e,
  multipleDrags: t,
  onValidate: r,
  validate: n,
  reboot: o,
  propValidate: a,
  modifiers: c,
  announcements: s
}) => {
  const [l, d] = G([]), [u, f] = G(null), [p, g] = G(() => b());
  function b() {
    return [...Bt(e, "droppable"), ...Bt(e, "general-draggable")].reduce((A, _) => ({
      ...A,
      [_.props.id]: _.props.children ? [...Bt(_.props.children, "draggable").map((C) => C.props.id)] : []
    }), {});
  }
  const m = Object.freeze({
    restrictToVerticalAxis: cl,
    restrictToHorizontalAxis: sl
  }), y = Hs(fn(yi), fn(xi), fn(Fn, {
    coordinateGetter: ul
  })), w = (A, _) => {
    if (Object.keys(p).pop() !== A.id && A.data.current.validate.includes(_))
      return d((j) => [...j.filter((B) => B !== _), _]);
    d((j) => [...j.filter((B) => B !== _)]);
  }, S = (A) => A in p ? A : Object.keys(p).find((_) => p[_].includes(A)), I = ({
    active: A,
    over: _
  }) => {
    if (!_)
      return;
    f(null), w(_, A.id);
    const C = S(_.id), j = S(A.id);
    if (j !== C) {
      if (t)
        return g((X) => ({
          ...X,
          [j]: X[j].filter((H) => H !== A.id),
          [C]: [...X[C], A.id]
        }));
      const B = Object.keys(p).pop();
      g((X) => ({
        ...X,
        [C]: C === B ? [...X[C], A.id] : [A.id],
        [j]: C === B ? X[j].filter((H) => H !== A.id) : [...X[j].filter((H) => H !== A.id), ...X[C]]
      }));
    }
  }, D = (A) => Oe.map(A, (_) => {
    if (!_.props)
      return _;
    if (_.props.__TYPE !== "draggable")
      return _.props.id in p && p[_.props.id].length > 0 ? _e(_, {
        ..._.props
      }, [...p[_.props.id].map((C) => Bt(e, "draggable").filter((j) => j.props.id === C)).flat()]) : _.props.children ? _e(_, {
        ..._.props,
        children: D(_.props.children)
      }) : _;
  }), x = () => {
    const A = Bt(e, "draggable").filter((_) => _.props.id === u).reduce((_, C) => ({
      ..._,
      ...C.props
    }), {});
    return Uo((A == null ? void 0 : A.element) || "div", {
      className: `${Ut["c-draggable"]} ${A == null ? void 0 : A.addClass}`
    }, [A.children]);
  }, O = {
    sideEffects: Si({
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
    o && g(() => b());
  }, [o]), /* @__PURE__ */ h(Ri.Provider, {
    value: {
      listId: l,
      propValidate: a,
      validate: n,
      isDragging: u
    },
    children: /* @__PURE__ */ P(qc, {
      sensors: y,
      accessibility: {
        announcements: s
      },
      onDragStart: ({
        active: A
      }) => f(A.id),
      onDragEnd: I,
      onDragCancel: () => f(null),
      ...c && {
        modifiers: [m[c]]
      },
      children: [D(e), /* @__PURE__ */ h(al, {
        dropAnimation: O,
        children: u && x()
      })]
    })
  });
};
Di.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: pl
};
Di.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.arrayOf(i.exports.element), i.exports.node, i.exports.arrayOf(i.exports.node)]),
  multipleDrags: i.exports.bool,
  onValidate: i.exports.func,
  reboot: i.exports.bool,
  validate: i.exports.bool.isRequired,
  propValidate: i.exports.string.isRequired,
  modifiers: i.exports.oneOf(["restrictToVerticalAxis", "restrictToHorizontalAxis"]),
  announcements: i.exports.object.isRequired
};
const Ii = ({
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
  } = me(Ri), {
    attributes: g,
    listeners: b,
    setNodeRef: m,
    transform: y
  } = Hc({
    id: t,
    disabled: f,
    data: {
      label: o
    },
    attributes: a
  });
  return /* @__PURE__ */ h(l, {
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
      ...g
    },
    ...b,
    children: e
  });
};
Ii.defaultProps = {
  __TYPE: "draggable",
  dragging: Ut["c-draggable--active"],
  disabledDefaultAttributes: !1
};
Ii.propTypes = {
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
  __TYPE: fe("draggable")
};
const Pi = ({
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
  } = Oi({
    id: t,
    data: {
      validate: r,
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ h(d, {
    ref: f,
    "data-type": s,
    className: `${Ut["c-droppable"]} ${u && o && o} ${n != null ? n : ""}`,
    ...l,
    children: e
  });
};
Pi.defaultProps = {
  __TYPE: "droppable",
  over: Ut["c-droppable--active"]
};
Pi.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.node]),
  id: i.exports.string.isRequired,
  validate: i.exports.array.isRequired,
  addClass: i.exports.string,
  over: i.exports.string,
  label: i.exports.string.isRequired,
  element: i.exports.string,
  __TYPE: fe("droppable")
};
const Ni = ({
  children: e,
  addClass: t,
  id: r,
  label: n,
  element: o
}) => {
  const a = o || "div", {
    setNodeRef: c
  } = Oi({
    id: r,
    data: {
      label: n,
      type: "container"
    }
  });
  return /* @__PURE__ */ h(a, {
    id: r,
    ref: c,
    className: `${Ut["c-droppable"]} ${t != null ? t : ""}`,
    children: e
  });
};
Ni.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  addClass: i.exports.string,
  id: i.exports.string.isRequired,
  label: i.exports.string.isRequired,
  element: i.exports.string,
  __TYPE: fe("general-draggable")
};
Ni.defaultProps = {
  __TYPE: "general-draggable",
  id: bt("unique-id-general-"),
  label: "contendor inicial"
};
const df = ({
  ...e
}) => /* @__PURE__ */ h("span", {
  id: "hc_extension_svg_filters",
  ...e,
  children: /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: "0",
    children: /* @__PURE__ */ P("defs", {
      children: [/* @__PURE__ */ h("filter", {
        id: "hc_extension_off",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "0 1"
          })]
        })
      }), /* @__PURE__ */ h("filter", {
        id: "hc_extension_highcontrast",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            exponent: "3.0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            exponent: "3.0"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "gamma",
            exponent: "3.0"
          })]
        })
      }), /* @__PURE__ */ h("filter", {
        id: "hc_extension_highcontrast_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ h("feFuncB", {
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
        children: [/* @__PURE__ */ h("feColorMatrix", {
          type: "matrix",
          values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            exponent: "3"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            exponent: "3"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "gamma",
            exponent: "3"
          })]
        })]
      }), /* @__PURE__ */ h("filter", {
        id: "hc_extension_grayscale_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "gamma",
            exponent: "0.33"
          })]
        })
      }), /* @__PURE__ */ h("filter", {
        id: "hc_extension_invert",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncB", {
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
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "1 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            exponent: "1.7"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            exponent: "1.7"
          }), /* @__PURE__ */ h("feFuncB", {
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
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "gamma",
            amplitude: "-1",
            exponent: "3",
            offset: "1"
          })]
        }), /* @__PURE__ */ h("feColorMatrix", {
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
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "1 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            exponent: "0.33"
          }), /* @__PURE__ */ h("feFuncB", {
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
        children: [/* @__PURE__ */ h("feColorMatrix", {
          type: "matrix",
          values: "                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "0.97 0.52"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "1 0.03"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "0.98 0.06"
          }), /* @__PURE__ */ h("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ h("feBlend", {
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
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncB", {
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
        children: [/* @__PURE__ */ h("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "0.09 0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "1 0.16"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ h("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ h("feBlend", {
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
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncB", {
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
        children: [/* @__PURE__ */ h("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "0.99 0.16"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "0 1"
          }), /* @__PURE__ */ h("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ h("feBlend", {
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
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncB", {
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
        children: [/* @__PURE__ */ h("feColorMatrix", {
          type: "matrix",
          values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
          in: "SourceGraphic",
          result: "colormatrix"
        }), /* @__PURE__ */ P("feComponentTransfer", {
          in: "colormatrix",
          result: "componentTransfer",
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "0.98 0"
          }), /* @__PURE__ */ h("feFuncA", {
            type: "table",
            tableValues: "0 1"
          })]
        }), /* @__PURE__ */ h("feBlend", {
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
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "table",
            tableValues: "1 0"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "table",
            tableValues: "0 0"
          }), /* @__PURE__ */ h("feFuncB", {
            type: "table",
            tableValues: "0 0"
          })]
        }), /* @__PURE__ */ P("feComponentTransfer", {
          children: [/* @__PURE__ */ h("feFuncR", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncG", {
            type: "gamma",
            amplitude: "-1",
            exponent: "5",
            offset: "1"
          }), /* @__PURE__ */ h("feFuncB", {
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
  "c-image": "_c-image_15sbg_1",
  "c-image__figcaption": "_c-image__figcaption_15sbg_13"
}, vl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAAFxIAABcSAWef0lIAAAUZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMi0xMFQxNTozMzo1NC0wNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDItMTBUMTU6MzQ6MTMtMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDItMTBUMTU6MzQ6MTMtMDU6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MDZmNzg5Yy1mOTcyLTQ1ODItYmNlNC02MDJhOTUyZDMwNmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDA2Zjc4OWMtZjk3Mi00NTgyLWJjZTQtNjAyYTk1MmQzMDZmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDA2Zjc4OWMtZjk3Mi00NTgyLWJjZTQtNjAyYTk1MmQzMDZmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MDZmNzg5Yy1mOTcyLTQ1ODItYmNlNC02MDJhOTUyZDMwNmYiIHN0RXZ0OndoZW49IjIwMjItMDItMTBUMTU6MzM6NTQtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtD5YlQAACnHSURBVHic7d15lFzVfeDx3733varqvVut3hcZO4n3eM029sTjmDmZJcnYGRMnk/Vk8cx4ZhIvIKml1oYQIBBCPiwyAgOWjUAGzC5EMGBAxxgDYosBISQhCUmgtVd1V7337p0/qhvL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", Ci = ({
  url: e,
  alt: t,
  title: r,
  width: n,
  addClass: o,
  noCaption: a,
  ...c
}) => {
  const [s, l] = G(!1), d = (f) => l(f), u = s ? vl : `${e}`;
  return /* @__PURE__ */ P("figure", {
    className: `${Po["c-image"]} ${o != null ? o : ""}`,
    ...n && {
      style: {
        maxWidth: `${n}px`
      }
    },
    children: [/* @__PURE__ */ h("img", {
      src: u,
      onError: d,
      alt: t,
      ...c
    }), !a && /* @__PURE__ */ h("figcaption", {
      className: Po["c-image__figcaption"],
      children: /* @__PURE__ */ P("p", {
        children: [/* @__PURE__ */ P("strong", {
          children: [r, "\xA0"]
        }), t]
      })
    })]
  });
};
Ci.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
Ci.propTypes = {
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
}, Mi = ct(({
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
  const [p, g] = G(r || ""), b = le(() => e || bt("c-input-"), [e]), m = ({
    target: y
  }) => {
    u && u({
      id: b,
      value: y.value
    }), g(y.value);
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ P("label", {
    htmlFor: b,
    className: `${dr["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ P("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", o, " "]
    }), /* @__PURE__ */ h("input", {
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
Mi.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Mi.propTypes = {
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
  __TYPE: fe("Input")
};
const gl = ({
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
gl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  onAllValue: i.exports.func
};
const ki = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ h("div", {
  className: `${dr["c-input__wrapper-style"]} ${t != null ? t : ""}`,
  children: Me(e, ["InputLeftAddon", "InputRightAddon", "Input"])
});
ki.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string,
  __TYPE: fe("InputStyle")
};
ki.defaultProps = {
  __TYPE: "InputStyle"
};
const Bi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ h("div", {
  className: `${dr["c-input__left-addon"]} ${t != null ? t : ""}`,
  children: e
});
Bi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.arrayOf(i.exports.node), i.exports.node]),
  addClass: i.exports.string,
  __TYPE: fe("InputLeftAddon")
};
Bi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const ji = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ h("div", {
  className: `${dr["c-input__right-addon"]} ${t != null ? t : ""}`,
  children: e
});
ji.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.arrayOf(i.exports.node), i.exports.node]),
  addClass: i.exports.string,
  __TYPE: fe("InputRightAddon")
};
ji.defaultProps = {
  __TYPE: "InputRightAddon"
};
const hl = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, ml = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ h("kbd", {
  className: `${hl["c-kbd"]} ${t != null ? t : ""}`,
  ...r,
  children: e
});
ml.propTypes = {
  children: i.exports.string,
  addClass: i.exports.string
};
const Fi = ({
  children: e,
  link: t,
  addClass: r,
  isExternal: n,
  label: o,
  ...a
}) => /* @__PURE__ */ h("a", {
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
Fi.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Fi.propTypes = {
  children: i.exports.oneOfType([i.exports.string, i.exports.element, i.exports.node, i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.node)]),
  addClass: i.exports.string,
  link: i.exports.string,
  isExternal: i.exports.bool,
  label: i.exports.string.isRequired
};
const Li = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, bl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ h("ul", {
  className: `${Li["c-List"]} ${t != null ? t : ""}`,
  ...r,
  children: Me(e, ["ListItem"])
});
bl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string
};
const $i = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const o = Oe.map(e, (a) => {
    var c;
    return ((c = a == null ? void 0 : a.props) == null ? void 0 : c.__TYPE) === "Icon" ? _e(a, {
      ...a.props,
      addClass: Li["c-list-item__icon"]
    }) : a;
  });
  return /* @__PURE__ */ h("li", {
    ...t && {
      className: `${t}`
    },
    "data-type": r,
    ...n,
    children: o
  });
};
$i.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  addClass: i.exports.string,
  __TYPE: fe("ListItem")
};
$i.defaultProps = {
  __TYPE: "ListItem"
};
const yl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ h("ol", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: Me(e, ["ListItem"])
});
yl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string
};
const xl = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ h("ul", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: Me(e, ["ListItem"])
});
xl.propTypes = {
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
        var g = document.activeElement;
        if (!document.body.contains(f)) {
          for (var b = f, m = void 0; b; ) {
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              m = b;
              break;
            }
            b = b.parentNode;
          }
          m && (g = m.activeElement);
        }
        f.contains(g) && (g.blur(), g === document.activeElement && document.body.focus());
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
        c(f, function(g) {
          return p._unmanageNode(g);
        });
      }
    }, {
      key: "_adoptInertRoot",
      value: function(f) {
        var p = this._inertManager.getInertRoot(f);
        p || (this._inertManager.setInert(f, !0), p = this._inertManager.getInertRoot(f)), p.managedNodes.forEach(function(g) {
          this._manageNode(g.node);
        }, this);
      }
    }, {
      key: "_onMutation",
      value: function(f, p) {
        f.forEach(function(g) {
          var b = g.target;
          if (g.type === "childList")
            e.call(g.addedNodes).forEach(function(y) {
              this._makeSubtreeUnfocusable(y);
            }, this), e.call(g.removedNodes).forEach(function(y) {
              this._unmanageSubtree(y);
            }, this);
          else if (g.type === "attributes") {
            if (g.attributeName === "tabindex")
              this._manageNode(b);
            else if (b !== this._rootElement && g.attributeName === "inert" && b.hasAttribute("inert")) {
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
          var g = new n(f, this);
          if (f.setAttribute("inert", ""), this._inertRoots.set(f, g), !this._document.body.contains(f))
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
        var g = this._managedNodes.get(f);
        return g !== void 0 ? g.addInertRoot(p) : g = new o(f, p), this._managedNodes.set(f, g), g;
      }
    }, {
      key: "deregister",
      value: function(f, p) {
        var g = this._managedNodes.get(f);
        return g ? (g.removeInertRoot(p), g.destroyed && this._managedNodes.delete(f), g) : null;
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
        var g = this;
        f.forEach(function(b) {
          switch (b.type) {
            case "childList":
              e.call(b.addedNodes).forEach(function(w) {
                if (w.nodeType === Node.ELEMENT_NODE) {
                  var S = e.call(w.querySelectorAll("[inert]"));
                  t.call(w, "[inert]") && S.unshift(w), S.forEach(function(I) {
                    this.setInert(I, !0);
                  }, g);
                }
              }, g);
              break;
            case "attributes":
              if (b.attributeName !== "inert")
                return;
              var m = b.target, y = m.hasAttribute("inert");
              g.setInert(m, y);
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
      var g = p.shadowRoot;
      if (g) {
        c(g, u);
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
const Yn = Ge(), Al = Object.freeze({
  ESC: 27
}), Yi = ({
  children: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n
}) => {
  const o = J(), a = (l) => {
    const d = document.querySelector("#root");
    d.inert = l;
  }, c = (l) => {
    (l.keyCode || l.which) === Al.ESC && s();
  }, s = () => {
    r(!t), a(!1), n && n.current.focus();
  };
  return W(() => {
    t && (a(!0), o.current && o.current.focus());
  }, [t]), /* @__PURE__ */ h(Yn.Provider, {
    value: {
      isOpen: t,
      onKeyDown: c,
      onCloseModal: s,
      refModal: o
    },
    children: /* @__PURE__ */ h(xr, {
      id: "js-modal",
      children: Me(e, ["ModalContent", "ModalOverlay"])
    })
  });
};
Yi.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Yi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  addClass: i.exports.string,
  isOpen: i.exports.bool.isRequired,
  onClose: i.exports.func.isRequired,
  label: i.exports.string.isRequired,
  finalFocusRef: i.exports.object
};
const Pr = {
  "c-layout": "_c-layout_3x2r4_1",
  "c-modal": "_c-modal_3x2r4_1",
  "c-modal-container": "_c-modal-container_3x2r4_31",
  "c-close-button": "_c-close-button_3x2r4_35"
}, qi = ({
  label: e,
  addClass: t,
  children: r,
  onClick: n,
  onKeyDown: o,
  __TYPE: a,
  ...c
}) => {
  const {
    isOpen: s,
    onKeyDown: l,
    onCloseModal: d,
    refModal: u
  } = me(Yn), f = (g) => {
    n && typeof n == "function" && n(g), d();
  };
  return /* @__PURE__ */ P("div", {
    ref: u,
    role: "dialog",
    tabIndex: "-1",
    hidden: !s,
    "aria-label": e,
    "aria-modal": "true",
    "data-type": a,
    onKeyDown: (g) => {
      o && typeof o == "function" && o(g), l(g);
    },
    className: `${Pr["c-modal"]} u-px-3 u-py-3 ${t != null ? t : ""}`,
    ...c,
    children: [/* @__PURE__ */ h("div", {
      className: `${Pr["c-modal-container"]} u-flow`,
      children: r
    }), /* @__PURE__ */ h(It, {
      addClass: Pr["c-close-button"],
      label: "Cerrar modal",
      hasAriaLabel: !0,
      icon: {
        name: "close"
      },
      onClick: f
    })]
  });
};
qi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  addClass: i.exports.string,
  label: i.exports.string.isRequired,
  onClick: i.exports.func,
  onKeyDown: i.exports.func,
  __TYPE: fe("ModalContent")
};
qi.defaultProps = {
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
  } = me(Yn), o = (a) => {
    t && typeof t == "function" && t(a), n();
  };
  return /* @__PURE__ */ h("div", {
    className: `${Pr["c-layout"]} ${e != null ? e : ""}`,
    onClick: o,
    hidden: !r
  });
};
Vi.propTypes = {
  addClass: i.exports.string,
  onClick: i.exports.func,
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
}, Ur = Ge(), Qi = ({
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
  }, p = (b) => d(b), g = (b) => r && l === b;
  return W(() => {
    s && s(l);
  }, [l, s]), /* @__PURE__ */ h(Ur.Provider, {
    value: {
      counter: l,
      min: o || Number.MIN_SAFE_INTEGER,
      max: a || Number.MAX_SAFE_INTEGER,
      validate: g,
      onChangeValue: p,
      onIncrementValue: u,
      onDecrementValue: f
    },
    children: /* @__PURE__ */ h("div", {
      className: `${Yt["c-number-input"]} ${t != null ? t : ""}`,
      children: Me(e, ["NumberInputField", "NumberInputStepper"])
    })
  });
};
Qi.propTypes = {
  children: i.exports.arrayOf(i.exports.element),
  addClass: i.exports.string,
  max: i.exports.number,
  min: i.exports.number,
  defaultValue: i.exports.number,
  step: i.exports.number,
  onValue: i.exports.func,
  keepWithinRange: i.exports.bool
};
Qi.defaultProps = {
  step: 1
};
const Hi = ct(({
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
  } = me(Ur), g = le(() => e || bt("c-number-input-"), [e]), b = Object.freeze({
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
    htmlFor: g,
    className: `${Yt["c-number-input__label"]} ${o != null ? o : ""}`,
    children: [/* @__PURE__ */ P("span", {
      className: `${!a && "u-sr-only"}`,
      children: [" ", r, " "]
    }), /* @__PURE__ */ h("input", {
      id: g,
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
Hi.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Hi.propTypes = {
  id: i.exports.string,
  name: i.exports.string,
  label: i.exports.string,
  pattern: i.exports.string,
  addClass: i.exports.string,
  isLabelVisible: i.exports.bool,
  __TYPE: fe("NumberInputField")
};
const zi = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ h("div", {
  className: `${Yt["c-number-input__stepper"]} ${t != null ? t : ""}`,
  children: Me(e, ["NumberIncrementStepper", "NumberDecrementStepper"])
});
zi.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.arrayOf(i.exports.element)]),
  addClass: i.exports.string,
  __TYPE: fe("NumberInputStepper")
};
zi.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const Wi = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onDecrementValue: n,
    validate: o,
    min: a
  } = me(Ur);
  return /* @__PURE__ */ h("button", {
    tabIndex: -1,
    onClick: n,
    disabled: o(a),
    "aria-label": `${r != null ? r : "Decrementar valor"}`,
    className: `${Yt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ h(Ie, {
      name: "arrow_drop_down"
    })
  });
};
Wi.propTypes = {
  children: i.exports.oneOfType([i.exports.node, i.exports.element, i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.element)]),
  addClass: i.exports.string,
  __TYPE: fe("NumberDecrementStepper"),
  label: i.exports.string
};
Wi.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Ui = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onIncrementValue: n,
    validate: o,
    max: a
  } = me(Ur);
  return /* @__PURE__ */ h("button", {
    tabIndex: -1,
    onClick: n,
    disabled: o(a),
    "aria-label": `${r != null ? r : "Incrementar valor"}`,
    className: `${Yt["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ h(Ie, {
      name: "arrow_drop_up"
    })
  });
};
Ui.propTypes = {
  children: i.exports.oneOfType([i.exports.node, i.exports.element, i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.element)]),
  addClass: i.exports.string,
  __TYPE: fe("NumberIncrementStepper"),
  label: i.exports.string
};
Ui.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const _l = (e) => {
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
  } = e, [p, g] = G(n), b = (A, _) => {
    g(_), s && s(A, _);
  }, m = (A, _) => {
    const C = _ - A + 1;
    return Array.from({ length: C }, (j, B) => A + B);
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
  ], x = (A) => {
    switch (A) {
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
    items: D.map((A) => typeof A == "number" ? {
      onClick: (_) => {
        b(_, A);
      },
      type: "page",
      page: A,
      selected: A === p,
      disabled: o,
      "aria-current": A === p ? !0 : void 0
    } : {
      onClick: (_) => {
        b(_, x(A));
      },
      type: A,
      page: x(A),
      selected: !1,
      disabled: o || A.indexOf("ellipsis") === -1 && (A === "next" || A === "last" ? p >= r : p <= 1)
    }),
    ...f
  };
}, sr = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, wl = Object.freeze({
  first: "primera",
  last: "\xFAltima",
  previous: "anterior",
  next: "siguiente"
}), Tl = (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}p\xE1gina ${t}` : `Ir a la ${wl[e]} p\xE1gina`, Gi = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: r,
  ...n
}) => {
  const {
    items: o
  } = _l({
    ...n
  });
  return /* @__PURE__ */ h("nav", {
    className: `${r != null ? r : ""} ${sr["c-pagination"]}`,
    children: /* @__PURE__ */ h("ul", {
      className: sr["c-pagination__ul"],
      children: o.map((a, c) => /* @__PURE__ */ h("li", {
        children: e({
          ...a,
          "aria-label": t(a.type, a.page, a.selected)
        })
      }, `pagination-item-${c}`))
    })
  });
};
Gi.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ h(qn, {
    ...e
  }),
  getItemAriaLabel: Tl
};
Gi.propTypes = {
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
const qn = ({
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
  return t === "start-ellipsis" || t === "end-ellipsis" ? /* @__PURE__ */ h("div", {
    className: sr["c-pagination-item__ellipsis"],
    children: "..."
  }) : _e(o, {
    disabled: n,
    className: `${sr["c-pagination-item"]} ${r != null ? r : ""} ${c ? sr["c-pagination-item--selected"] : ""}`,
    ...o.props,
    ...s
  }, [
    t === "page" && e,
    d ? /* @__PURE__ */ h(Ie, {
      name: d
    }, t) : null
  ]);
};
qn.propTypes = {
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
qn.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next",
    last: "last_page",
    first: "first_page"
  },
  element: /* @__PURE__ */ h("button", {})
};
const Ft = {
  "c-panel": "_c-panel_15fck_1",
  "c-section": "_c-section_15fck_9",
  "c-navigation": "_c-navigation_15fck_15",
  "c-navigation__item": "_c-navigation__item_15fck_29",
  "c-navigation__section": "_c-navigation__section_15fck_33",
  "c-navigation__button": "_c-navigation__button_15fck_51"
}, Gr = Ge(), El = ({
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
  return /* @__PURE__ */ h(Gr.Provider, {
    value: {
      validation: s,
      onToggle: c,
      listId: a.index,
      currentSection: n
    },
    children: /* @__PURE__ */ h("div", {
      className: `${Ft["c-panel"]} ${r != null ? r : ""}`,
      children: l
    })
  });
};
El.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.arrayOf(i.exports.node), i.exports.node, i.exports.string]),
  defaultIndex: i.exports.number,
  addClass: i.exports.string
};
const Xi = ({
  children: e,
  id: t,
  addClass: r,
  __TYPE: n,
  ...o
}) => {
  const {
    validation: a
  } = me(Gr), c = a(t);
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
Xi.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  id: i.exports.number,
  addClass: i.exports.string,
  __TYPE: fe("Section")
};
Xi.defaultProps = {
  __TYPE: "Section"
};
const Ol = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), Sl = (e, t, r) => e === "section" ? `${r ? "" : "Ir a la "}secci\xF3n ${t}` : `Ir a la ${Ol[e]} secci\xF3n`, Ki = ({
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
  } = me(Gr), g = J([]), b = Object.freeze({
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
  ], S = (O) => !g.current.includes(O) && O ? g.current = [...g.current, O] : g.current, I = (O) => {
    const A = g.current[0], _ = g.current[g.current.length - 1];
    if ((O.keyCode || O.which) === b.LEFT)
      if (O.target === A)
        _.focus();
      else {
        const C = g.current.indexOf(O.target) - 1;
        g.current[C].focus();
      }
    else if ((O.keyCode || O.which) === b.RIGHT)
      if (O.target === _)
        A.focus();
      else {
        const C = g.current.indexOf(O.target) + 1;
        g.current[C].focus();
      }
  }, D = (O) => {
    u(O), c !== void 0 && c(O, f.length);
  }, x = w.map((O) => typeof O == "number" ? {
    onClick: (A) => {
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
    children: [/* @__PURE__ */ h("h2", {
      id: "section-list-navigation",
      className: "u-sr-only",
      children: o
    }), /* @__PURE__ */ h("ul", {
      role: "tablist",
      "aria-labelledby": "section-list-navigation",
      "aria-orientation": a,
      className: `${Ft["c-navigation"]} ${s != null ? s : ""}`,
      children: e ? e(x) : x.map(({
        section: O,
        type: A,
        selected: _,
        ...C
      }, j) => /* @__PURE__ */ h("li", {
        role: "presentation",
        className: Ft["c-navigation__item"],
        children: A === "section" ? /* @__PURE__ */ h("button", {
          id: `navigation-section-tab-${O}`,
          role: "tab",
          tabIndex: `${_ ? 0 : -1}`,
          "aria-selected": _,
          className: Ft["c-navigation__section"],
          "aria-label": l(A, O, _),
          ...C
        }) : /* @__PURE__ */ h("button", {
          type: "button",
          className: `${Ft["c-navigation__button"]}`,
          "aria-label": l(A, O, _),
          ...C,
          children: y[A] ? /* @__PURE__ */ h(Ie, {
            name: y[A]
          }, A) : null
        })
      }, `navigation-section-item-${j}`))
    })]
  });
};
Ki.propTypes = {
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
Ki.defaultProps = {
  icons: {
    previous: "navigate_before",
    next: "navigate_next"
  },
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: Sl
};
const Rl = ({
  children: e,
  section: t,
  onClick: r
}) => {
  const {
    onToggle: n
  } = me(Gr), o = (a) => {
    n(t), r && r(a);
  };
  return Oe.map(e, (a) => _e(a, {
    ...a.props,
    onClick: o
  }));
};
Rl.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.node]).isRequired,
  section: i.exports.number.isRequired,
  onClick: i.exports.func
};
const Dl = {
  "c-paper": "_c-paper_1sbf6_1"
}, Il = ({
  children: e,
  color: t,
  addClass: r,
  ...n
}) => {
  const o = J(null);
  return zo(() => {
    t && o.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ h("div", {
    ref: o,
    className: `${Dl["c-paper"]} ${r != null ? r : ""}`,
    ...n,
    children: e
  });
};
Il.propTypes = {
  children: i.exports.oneOfType([i.exports.element, i.exports.node, i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.node)]),
  addClass: i.exports.string,
  color: i.exports.string
};
const Pl = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Nl = (e) => {
  document.body.append(e);
}, Cl = (e) => {
  const t = J(null);
  W(() => {
    const n = document.querySelector(`#${e}`), o = n || Pl(e);
    return n || Nl(o), o.append(t.current), () => {
      t.current.remove(), o.childElementCount || o.remove();
    };
  }, [e]);
  function r() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return r();
}, xr = ({
  children: e,
  id: t
}) => {
  const r = Cl(t);
  return Go(e, r);
};
xr.propTypes = {
  children: i.exports.any,
  id: i.exports.string.isRequired
};
const Ml = "_row_7j367_1", kl = {
  row: Ml
}, Bl = ct(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ h("div", {
  ref: r,
  className: `${kl.row} ${e != null ? e : ""}`,
  ...t
}));
Bl.propTypes = {
  addClass: i.exports.string
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
  icon: o,
  addClass: a,
  isLabelVisible: c,
  isDisabled: s,
  isRequired: l,
  onChoise: d
}, u) => {
  const [f, p] = G(), g = le(() => t || bt("c-select-"), [t]), b = ({
    target: m
  }) => {
    d && d({
      id: g,
      value: m.value
    }), p(m.value);
  };
  return /* @__PURE__ */ P("label", {
    htmlFor: g,
    ...a && {
      className: `${a}`
    },
    children: [/* @__PURE__ */ P("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", n, " "]
    }), /* @__PURE__ */ P("div", {
      className: bn["c-select-wrapper"],
      children: [/* @__PURE__ */ P("select", {
        id: g,
        ref: u,
        name: g,
        value: f,
        defaultValue: "default",
        className: bn["c-select"],
        onChange: b,
        disabled: s,
        required: l,
        children: [/* @__PURE__ */ h("option", {
          value: "default",
          disabled: !0,
          children: r
        }), Me(e, ["option", "optgroup"])]
      }), /* @__PURE__ */ h(Ie, {
        name: `${o != null ? o : "arrow_drop_down"}`,
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
  __TYPE: fe("Select")
};
const jl = ({
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
jl.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  onAllSelect: i.exports.func
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
  label: o,
  addClass: a,
  isDisabled: c,
  defaultChecked: s,
  isLabelVisible: l,
  onChange: d
}, u) => {
  const [f, p] = G(!1), g = le(() => e || bt("c-input-"), [e]), b = ({
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
    ((y.keyCode || y.which) === No.SPACE || (y.keyCode || y.which) === No.ENTER) && p((w) => (d && d(w ? {
      id: g,
      value: ""
    } : {
      id: g,
      value: `${n}`
    }), !w));
  };
  return W(() => (s && p(!!s), () => {
    p(!1);
  }), [s]), /* @__PURE__ */ P("label", {
    htmlFor: g,
    className: `${yn["c-label"]} ${yn[`is-${r}`]}`,
    children: [/* @__PURE__ */ P("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", o, " "]
    }), /* @__PURE__ */ h("input", {
      id: g,
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
Zi.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Zi.propTypes = {
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
const Vn = Ge(), Fl = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  ...n
}) => {
  const [o, a] = G(0), c = (l) => a(l), s = (l) => o === l;
  return W(() => {
    t !== void 0 && a(t);
  }, [t]), /* @__PURE__ */ h(Vn.Provider, {
    value: {
      validation: s,
      onToggle: c
    },
    children: /* @__PURE__ */ h("div", {
      ...r && {
        className: `${r}`
      },
      ...n,
      children: Me(e, ["TabList", "TabPanels"])
    })
  });
};
Fl.propTypes = {
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
}, ea = ({
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
  const d = J(), {
    validation: u,
    onToggle: f
  } = me(Vn), p = u(t);
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
ea.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  id: i.exports.number,
  selected: i.exports.string,
  addClass: i.exports.string,
  icon: i.exports.func,
  addNewRef: i.exports.func,
  onNavigation: i.exports.func,
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
  __TYPE: o,
  ...a
}) => {
  const c = J([]), s = (f) => c.current = [...c.current, f], l = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), d = (f) => {
    const p = c.current[0], g = c.current[c.current.length - 1];
    if ((f.keyCode || f.which) === l.LEFT)
      if (f.target === p)
        g.focus();
      else {
        const b = c.current.indexOf(f.target) - 1;
        c.current[b].focus();
      }
    else if ((f.keyCode || f.which) === l.RIGHT)
      if (f.target === g)
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
  return /* @__PURE__ */ h("div", {
    role: "tablist",
    "data-type": o,
    "aria-label": r,
    "aria-orientation": n,
    className: `${pr["c-tab__list"]} ${t != null ? t : ""}`,
    ...a,
    children: Me(u, ["Tab"])
  });
};
ta.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string,
  label: i.exports.string,
  orientation: i.exports.string,
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
  ...o
}) => {
  const {
    validation: a
  } = me(Vn), c = a(t);
  return /* @__PURE__ */ h("div", {
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
ra.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.node), i.exports.arrayOf(i.exports.element), i.exports.element, i.exports.node]),
  id: i.exports.number,
  addClass: i.exports.string,
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
  const o = Oe.map(e, (a, c) => Ue(a) ? _e(a, {
    ...a.props,
    id: c
  }) : null);
  return /* @__PURE__ */ h("div", {
    className: `${pr["c-tab__panels"]} ${t != null ? t : ""}`,
    "data-type": r,
    ...n,
    children: Me(o, ["TabPanel"])
  });
};
na.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.element]),
  addClass: i.exports.string,
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
}, oa = ct(({
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
  const p = le(() => e || bt("c-input-"), [e]), g = ({
    target: b
  }) => {
    d && d({
      id: p,
      value: b.value
    });
  };
  return /* @__PURE__ */ P("label", {
    htmlFor: p,
    className: `${xn["c-label"]} ${a != null ? a : ""}`,
    children: [/* @__PURE__ */ P("span", {
      className: `${!c && "u-sr-only"}`,
      children: [" ", o, " "]
    }), /* @__PURE__ */ h("textarea", {
      id: p,
      ref: f,
      disabled: s,
      required: l,
      placeholder: n,
      autoComplete: "off",
      onChange: g,
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
const Ll = Wo(({
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
Ll.propTypes = {
  children: i.exports.oneOfType([i.exports.array, i.exports.element]),
  theme: i.exports.object.isRequired
};
const Qn = Ge(), $l = ({
  children: e
}) => {
  const [t, r] = G(!1), n = J(), o = () => r(!t), a = (c) => {
    n.current || (n.current = c);
  };
  return /* @__PURE__ */ h(Qn.Provider, {
    value: {
      isOpen: t,
      onOpen: o,
      setRefButton: a,
      refButton: n
    },
    children: Me(e, ["ToggletipButton", "ToggletipContent"])
  });
};
$l.propTypes = {
  children: i.exports.arrayOf(i.exports.element)
};
const ia = ({
  children: e
}) => {
  const {
    onOpen: t,
    setRefButton: r
  } = me(Qn);
  if (Oe.count(e) > 1)
    return null;
  const n = (o) => Ue(o) ? _e(o, {
    ...o.props,
    ref: r,
    onClick: t
  }) : null;
  return Oe.map(e, n);
};
ia.propTypes = {
  children: i.exports.element,
  __TYPE: fe("ToggletipButton")
};
ia.defaultProps = {
  __TYPE: "ToggletipButton"
};
var Co = function(t) {
  return t.reduce(function(r, n) {
    var o = n[0], a = n[1];
    return r[o] = a, r;
  }, {});
}, Mo = typeof window < "u" && window.document && window.document.createElement ? Dt.useLayoutEffect : Dt.useEffect, Le = "top", ze = "bottom", We = "right", $e = "left", Xr = "auto", Ar = [Le, ze, We, $e], qt = "start", vr = "end", Yl = "clippingParents", aa = "viewport", nr = "popper", ql = "reference", ko = /* @__PURE__ */ Ar.reduce(function(e, t) {
  return e.concat([t + "-" + qt, t + "-" + vr]);
}, []), sa = /* @__PURE__ */ [].concat(Ar, [Xr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qt, t + "-" + vr]);
}, []), Vl = "beforeRead", Ql = "read", Hl = "afterRead", zl = "beforeMain", Wl = "main", Ul = "afterMain", Gl = "beforeWrite", Xl = "write", Kl = "afterWrite", On = [Vl, Ql, Hl, zl, Wl, Ul, Gl, Xl, Kl];
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
function Hn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Jl(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !Ye(a) || !st(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(c) {
      var s = o[c];
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
      var o = t.elements[n], a = t.attributes[n] || {}, c = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = c.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !Ye(o) || !st(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const eu = {
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
var Pt = Math.max, $r = Math.min, Vt = Math.round;
function Sn() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ca() {
  return !/^((?!chrome|android).)*safari/i.test(Sn());
}
function Qt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && Ye(e) && (o = e.offsetWidth > 0 && Vt(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Vt(n.height) / e.offsetHeight || 1);
  var c = Nt(e) ? Xe(e) : window, s = c.visualViewport, l = !ca() && r, d = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / o, p = n.height / a;
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
function zn(e) {
  var t = Qt(e), r = e.offsetWidth, n = e.offsetHeight;
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
  if (r && Hn(r)) {
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
function tu(e) {
  return ["table", "td", "th"].indexOf(st(e)) >= 0;
}
function yt(e) {
  return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Kr(e) {
  return st(e) === "html" ? e : e.assignedSlot || e.parentNode || (Hn(e) ? e.host : null) || yt(e);
}
function Bo(e) {
  return !Ye(e) || nt(e).position === "fixed" ? null : e.offsetParent;
}
function ru(e) {
  var t = /firefox/i.test(Sn()), r = /Trident/i.test(Sn());
  if (r && Ye(e)) {
    var n = nt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Kr(e);
  for (Hn(o) && (o = o.host); Ye(o) && ["html", "body"].indexOf(st(o)) < 0; ) {
    var a = nt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function _r(e) {
  for (var t = Xe(e), r = Bo(e); r && tu(r) && nt(r).position === "static"; )
    r = Bo(r);
  return r && (st(r) === "html" || st(r) === "body" && nt(r).position === "static") ? t : r || ru(e) || t;
}
function Wn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function cr(e, t, r) {
  return Pt(e, $r(t, r));
}
function nu(e, t, r) {
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
var ou = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, fa(typeof t != "number" ? t : da(t, Ar));
};
function iu(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, c = r.modifiersData.popperOffsets, s = tt(r.placement), l = Wn(s), d = [$e, We].indexOf(s) >= 0, u = d ? "height" : "width";
  if (!(!a || !c)) {
    var f = ou(o.padding, r), p = zn(a), g = l === "y" ? Le : $e, b = l === "y" ? ze : We, m = r.rects.reference[u] + r.rects.reference[l] - c[l] - r.rects.popper[u], y = c[l] - r.rects.reference[l], w = _r(a), S = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, I = m / 2 - y / 2, D = f[g], x = S - p[u] - f[b], O = S / 2 - p[u] / 2 + I, A = cr(D, O, x), _ = l;
    r.modifiersData[n] = (t = {}, t[_] = A, t.centerOffset = A - O, t);
  }
}
function au(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  if (o != null && !(typeof o == "string" && (o = t.elements.popper.querySelector(o), !o))) {
    if (process.env.NODE_ENV !== "production" && (Ye(o) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !la(t.elements.popper, o)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = o;
  }
}
const su = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: iu,
  effect: au,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ht(e) {
  return e.split("-")[1];
}
var cu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function lu(e) {
  var t = e.x, r = e.y, n = window, o = n.devicePixelRatio || 1;
  return {
    x: Vt(t * o) / o || 0,
    y: Vt(r * o) / o || 0
  };
}
function jo(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, c = e.offsets, s = e.position, l = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, f = e.isFixed, p = c.x, g = p === void 0 ? 0 : p, b = c.y, m = b === void 0 ? 0 : b, y = typeof u == "function" ? u({
    x: g,
    y: m
  }) : {
    x: g,
    y: m
  };
  g = y.x, m = y.y;
  var w = c.hasOwnProperty("x"), S = c.hasOwnProperty("y"), I = $e, D = Le, x = window;
  if (d) {
    var O = _r(r), A = "clientHeight", _ = "clientWidth";
    if (O === Xe(r) && (O = yt(r), nt(O).position !== "static" && s === "absolute" && (A = "scrollHeight", _ = "scrollWidth")), O = O, o === Le || (o === $e || o === We) && a === vr) {
      D = ze;
      var C = f && O === x && x.visualViewport ? x.visualViewport.height : O[A];
      m -= C - n.height, m *= l ? 1 : -1;
    }
    if (o === $e || (o === Le || o === ze) && a === vr) {
      I = We;
      var j = f && O === x && x.visualViewport ? x.visualViewport.width : O[_];
      g -= j - n.width, g *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: s
  }, d && cu), X = u === !0 ? lu({
    x: g,
    y: m
  }) : {
    x: g,
    y: m
  };
  if (g = X.x, m = X.y, l) {
    var H;
    return Object.assign({}, B, (H = {}, H[D] = S ? "0" : "", H[I] = w ? "0" : "", H.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + m + "px)" : "translate3d(" + g + "px, " + m + "px, 0)", H));
  }
  return Object.assign({}, B, (t = {}, t[D] = S ? m + "px" : "", t[I] = w ? g + "px" : "", t.transform = "", t));
}
function uu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, c = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
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
    variation: Ht(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
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
const fu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: uu,
  data: {}
};
var Dr = {
  passive: !0
};
function du(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, c = n.resize, s = c === void 0 ? !0 : c, l = Xe(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, Dr);
  }), s && l.addEventListener("resize", r.update, Dr), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Dr);
    }), s && l.removeEventListener("resize", r.update, Dr);
  };
}
const pu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: du,
  data: {}
};
var vu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Nr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return vu[t];
  });
}
var gu = {
  start: "end",
  end: "start"
};
function Fo(e) {
  return e.replace(/start|end/g, function(t) {
    return gu[t];
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
  return Qt(yt(e)).left + Un(e).scrollLeft;
}
function hu(e, t) {
  var r = Xe(e), n = yt(e), o = r.visualViewport, a = n.clientWidth, c = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, c = o.height;
    var d = ca();
    (d || !d && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: s + Gn(e),
    y: l
  };
}
function mu(e) {
  var t, r = yt(e), n = Un(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Pt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), c = Pt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Gn(e), l = -n.scrollTop;
  return nt(o || r).direction === "rtl" && (s += Pt(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: c,
    x: s,
    y: l
  };
}
function Xn(e) {
  var t = nt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function pa(e) {
  return ["html", "body", "#document"].indexOf(st(e)) >= 0 ? e.ownerDocument.body : Ye(e) && Xn(e) ? e : pa(Kr(e));
}
function lr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = pa(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Xe(n), c = o ? [a].concat(a.visualViewport || [], Xn(n) ? n : []) : n, s = t.concat(c);
  return o ? s : s.concat(lr(Kr(c)));
}
function Rn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function bu(e, t) {
  var r = Qt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Lo(e, t, r) {
  return t === aa ? Rn(hu(e, r)) : Nt(t) ? bu(t, r) : Rn(mu(yt(e)));
}
function yu(e) {
  var t = lr(Kr(e)), r = ["absolute", "fixed"].indexOf(nt(e).position) >= 0, n = r && Ye(e) ? _r(e) : e;
  return Nt(n) ? t.filter(function(o) {
    return Nt(o) && la(o, n) && st(o) !== "body";
  }) : [];
}
function xu(e, t, r, n) {
  var o = t === "clippingParents" ? yu(e) : [].concat(t), a = [].concat(o, [r]), c = a[0], s = a.reduce(function(l, d) {
    var u = Lo(e, d, n);
    return l.top = Pt(u.top, l.top), l.right = $r(u.right, l.right), l.bottom = $r(u.bottom, l.bottom), l.left = Pt(u.left, l.left), l;
  }, Lo(e, c, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function va(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? tt(n) : null, a = n ? Ht(n) : null, c = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Le:
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
    case $e:
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
  var d = o ? Wn(o) : null;
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
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, c = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? Yl : s, d = r.rootBoundary, u = d === void 0 ? aa : d, f = r.elementContext, p = f === void 0 ? nr : f, g = r.altBoundary, b = g === void 0 ? !1 : g, m = r.padding, y = m === void 0 ? 0 : m, w = fa(typeof y != "number" ? y : da(y, Ar)), S = p === nr ? ql : nr, I = e.rects.popper, D = e.elements[b ? S : p], x = xu(Nt(D) ? D : D.contextElement || yt(e.elements.popper), l, u, c), O = Qt(e.elements.reference), A = va({
    reference: O,
    element: I,
    strategy: "absolute",
    placement: o
  }), _ = Rn(Object.assign({}, I, A)), C = p === nr ? _ : O, j = {
    top: x.top - C.top + w.top,
    bottom: C.bottom - x.bottom + w.bottom,
    left: x.left - C.left + w.left,
    right: C.right - x.right + w.right
  }, B = e.modifiersData.offset;
  if (p === nr && B) {
    var X = B[o];
    Object.keys(j).forEach(function(H) {
      var re = [We, ze].indexOf(H) >= 0 ? 1 : -1, de = [Le, ze].indexOf(H) >= 0 ? "y" : "x";
      j[H] += X[de] * re;
    });
  }
  return j;
}
function Au(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, c = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, d = l === void 0 ? sa : l, u = Ht(n), f = u ? s ? ko : ko.filter(function(b) {
    return Ht(b) === u;
  }) : Ar, p = f.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var g = p.reduce(function(b, m) {
    return b[m] = gr(e, {
      placement: m,
      boundary: o,
      rootBoundary: a,
      padding: c
    })[tt(m)], b;
  }, {});
  return Object.keys(g).sort(function(b, m) {
    return g[b] - g[m];
  });
}
function _u(e) {
  if (tt(e) === Xr)
    return [];
  var t = Nr(e);
  return [Fo(e), t, Fo(t)];
}
function wu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, c = r.altAxis, s = c === void 0 ? !0 : c, l = r.fallbackPlacements, d = r.padding, u = r.boundary, f = r.rootBoundary, p = r.altBoundary, g = r.flipVariations, b = g === void 0 ? !0 : g, m = r.allowedAutoPlacements, y = t.options.placement, w = tt(y), S = w === y, I = l || (S || !b ? [Nr(y)] : _u(y)), D = [y].concat(I).reduce(function(L, z) {
      return L.concat(tt(z) === Xr ? Au(t, {
        placement: z,
        boundary: u,
        rootBoundary: f,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: m
      }) : z);
    }, []), x = t.rects.reference, O = t.rects.popper, A = /* @__PURE__ */ new Map(), _ = !0, C = D[0], j = 0; j < D.length; j++) {
      var B = D[j], X = tt(B), H = Ht(B) === qt, re = [Le, ze].indexOf(X) >= 0, de = re ? "width" : "height", ie = gr(t, {
        placement: B,
        boundary: u,
        rootBoundary: f,
        altBoundary: p,
        padding: d
      }), ee = re ? H ? We : $e : H ? ze : Le;
      x[de] > O[de] && (ee = Nr(ee));
      var xe = Nr(ee), ge = [];
      if (a && ge.push(ie[X] <= 0), s && ge.push(ie[ee] <= 0, ie[xe] <= 0), ge.every(function(L) {
        return L;
      })) {
        C = B, _ = !1;
        break;
      }
      A.set(B, ge);
    }
    if (_)
      for (var E = b ? 3 : 1, M = function(z) {
        var F = D.find(function(V) {
          var Q = A.get(V);
          if (Q)
            return Q.slice(0, z).every(function(K) {
              return K;
            });
        });
        if (F)
          return C = F, "break";
      }, $ = E; $ > 0; $--) {
        var Y = M($);
        if (Y === "break")
          break;
      }
    t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const Tu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $o(e, t, r) {
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
  return [Le, We, ze, $e].some(function(t) {
    return e[t] >= 0;
  });
}
function Eu(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, c = gr(t, {
    elementContext: "reference"
  }), s = gr(t, {
    altBoundary: !0
  }), l = $o(c, n), d = $o(s, o, a), u = Yo(l), f = Yo(d);
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
  fn: Eu
};
function Su(e, t, r) {
  var n = tt(e), o = [$e, Le].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, c = a[0], s = a[1];
  return c = c || 0, s = (s || 0) * o, [$e, We].indexOf(n) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function Ru(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, c = sa.reduce(function(u, f) {
    return u[f] = Su(f, t.rects, a), u;
  }, {}), s = c[t.placement], l = s.x, d = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = c;
}
const Du = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ru
};
function Iu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = va({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Pu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Iu,
  data: {}
};
function Nu(e) {
  return e === "x" ? "y" : "x";
}
function Cu(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, c = r.altAxis, s = c === void 0 ? !1 : c, l = r.boundary, d = r.rootBoundary, u = r.altBoundary, f = r.padding, p = r.tether, g = p === void 0 ? !0 : p, b = r.tetherOffset, m = b === void 0 ? 0 : b, y = gr(t, {
    boundary: l,
    rootBoundary: d,
    padding: f,
    altBoundary: u
  }), w = tt(t.placement), S = Ht(t.placement), I = !S, D = Wn(w), x = Nu(D), O = t.modifiersData.popperOffsets, A = t.rects.reference, _ = t.rects.popper, C = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, j = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, X = {
    x: 0,
    y: 0
  };
  if (!!O) {
    if (a) {
      var H, re = D === "y" ? Le : $e, de = D === "y" ? ze : We, ie = D === "y" ? "height" : "width", ee = O[D], xe = ee + y[re], ge = ee - y[de], E = g ? -_[ie] / 2 : 0, M = S === qt ? A[ie] : _[ie], $ = S === qt ? -_[ie] : -A[ie], Y = t.elements.arrow, L = g && Y ? zn(Y) : {
        width: 0,
        height: 0
      }, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ua(), F = z[re], V = z[de], Q = cr(0, A[ie], L[ie]), K = I ? A[ie] / 2 - E - Q - F - j.mainAxis : M - Q - F - j.mainAxis, q = I ? -A[ie] / 2 + E + Q + V + j.mainAxis : $ + Q + V + j.mainAxis, N = t.elements.arrow && _r(t.elements.arrow), T = N ? D === "y" ? N.clientTop || 0 : N.clientLeft || 0 : 0, Z = (H = B == null ? void 0 : B[D]) != null ? H : 0, he = ee + K - Z - T, we = ee + q - Z, De = cr(g ? $r(xe, he) : xe, ee, g ? Pt(ge, we) : ge);
      O[D] = De, X[D] = De - ee;
    }
    if (s) {
      var ot, lt = D === "x" ? Le : $e, it = D === "x" ? ze : We, Te = O[x], Ke = x === "y" ? "height" : "width", Je = Te + y[lt], xt = Te - y[it], pt = [Le, $e].indexOf(w) !== -1, At = (ot = B == null ? void 0 : B[x]) != null ? ot : 0, _t = pt ? Je : Te - A[Ke] - _[Ke] - At + j.altAxis, Ne = pt ? Te + A[Ke] + _[Ke] - At - j.altAxis : xt, Ze = g && pt ? nu(_t, Te, Ne) : cr(g ? _t : Je, Te, g ? Ne : xt);
      O[x] = Ze, X[x] = Ze - Te;
    }
    t.modifiersData[n] = X;
  }
}
const Mu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Cu,
  requiresIfExists: ["offset"]
};
function ku(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Bu(e) {
  return e === Xe(e) || !Ye(e) ? Un(e) : ku(e);
}
function ju(e) {
  var t = e.getBoundingClientRect(), r = Vt(t.width) / e.offsetWidth || 1, n = Vt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Fu(e, t, r) {
  r === void 0 && (r = !1);
  var n = Ye(t), o = Ye(t) && ju(t), a = yt(t), c = Qt(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((st(t) !== "body" || Xn(a)) && (s = Bu(t)), Ye(t) ? (l = Qt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Gn(a))), {
    x: c.left + s.scrollLeft - l.x,
    y: c.top + s.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function Lu(e) {
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
function $u(e) {
  var t = Lu(e);
  return On.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Yu(e) {
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
var Rt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', qu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', qo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Vu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), qo).filter(function(r, n, o) {
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + qo.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(o) {
          return o.name === n;
        }) == null && console.error(gt(qu, String(t.name), n, n));
      });
    });
  });
}
function Qu(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var o = t(n);
    if (!r.has(o))
      return r.add(o), !0;
  });
}
function Hu(e) {
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
var Vo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", zu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Qo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ho() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Wu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? Qo : o;
  return function(s, l, d) {
    d === void 0 && (d = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Qo, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, g = {
      state: u,
      setOptions: function(w) {
        var S = typeof w == "function" ? w(u.options) : w;
        m(), u.options = Object.assign({}, a, u.options, S), u.scrollParents = {
          reference: Nt(s) ? lr(s) : s.contextElement ? lr(s.contextElement) : [],
          popper: lr(l)
        };
        var I = $u(Hu([].concat(n, u.options.modifiers)));
        if (u.orderedModifiers = I.filter(function(B) {
          return B.enabled;
        }), process.env.NODE_ENV !== "production") {
          var D = Qu([].concat(I, u.options.modifiers), function(B) {
            var X = B.name;
            return X;
          });
          if (Vu(D), tt(u.options.placement) === Xr) {
            var x = u.orderedModifiers.find(function(B) {
              var X = B.name;
              return X === "flip";
            });
            x || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var O = nt(l), A = O.marginTop, _ = O.marginRight, C = O.marginBottom, j = O.marginLeft;
          [A, _, C, j].some(function(B) {
            return parseFloat(B);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), g.update();
      },
      forceUpdate: function() {
        if (!p) {
          var w = u.elements, S = w.reference, I = w.popper;
          if (!Ho(S, I)) {
            process.env.NODE_ENV !== "production" && console.error(Vo);
            return;
          }
          u.rects = {
            reference: Fu(S, _r(I), u.options.strategy === "fixed"),
            popper: zn(I)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(B) {
            return u.modifiersData[B.name] = Object.assign({}, B.data);
          });
          for (var D = 0, x = 0; x < u.orderedModifiers.length; x++) {
            if (process.env.NODE_ENV !== "production" && (D += 1, D > 100)) {
              console.error(zu);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, x = -1;
              continue;
            }
            var O = u.orderedModifiers[x], A = O.fn, _ = O.options, C = _ === void 0 ? {} : _, j = O.name;
            typeof A == "function" && (u = A({
              state: u,
              options: C,
              name: j,
              instance: g
            }) || u);
          }
        }
      },
      update: Yu(function() {
        return new Promise(function(y) {
          g.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        m(), p = !0;
      }
    };
    if (!Ho(s, l))
      return process.env.NODE_ENV !== "production" && console.error(Vo), g;
    g.setOptions(d).then(function(y) {
      !p && d.onFirstUpdate && d.onFirstUpdate(y);
    });
    function b() {
      u.orderedModifiers.forEach(function(y) {
        var w = y.name, S = y.options, I = S === void 0 ? {} : S, D = y.effect;
        if (typeof D == "function") {
          var x = D({
            state: u,
            name: w,
            instance: g,
            options: I
          }), O = function() {
          };
          f.push(x || O);
        }
      });
    }
    function m() {
      f.forEach(function(y) {
        return y();
      }), f = [];
    }
    return g;
  };
}
var Uu = [pu, Pu, fu, eu, Du, Tu, Mu, su, Ou], Gu = /* @__PURE__ */ Wu({
  defaultModifiers: Uu
}), Xu = typeof Element < "u", Ku = typeof Map == "function", Ju = typeof Set == "function", Zu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (Ku && e instanceof Map && t instanceof Map) {
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
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    if (Xu && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Cr(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var ef = function(t, r) {
  try {
    return Cr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, tf = [], Kn = function(t, r, n) {
  n === void 0 && (n = {});
  var o = Dt.useRef(null), a = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || tf
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
      fn: function(g) {
        var b = g.state, m = Object.keys(b.elements);
        Aa.flushSync(function() {
          l({
            styles: Co(m.map(function(y) {
              return [y, b.styles[y] || {}];
            })),
            attributes: Co(m.map(function(y) {
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
    return ef(o.current, p) ? o.current || p : (o.current = p, p);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, d]), f = Dt.useRef();
  return Mo(function() {
    f.current && f.current.setOptions(u);
  }, [u]), Mo(function() {
    if (!(t == null || r == null)) {
      var p = n.createPopper || Gu, g = p(t, r, u);
      return f.current = g, function() {
        g.destroy(), f.current = null;
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
const An = {
  "c-toggletip": "_c-toggletip_2swlv_1",
  "c-toggletip--active": "_c-toggletip--active_2swlv_18",
  "c-toggletip__arrow": "_c-toggletip__arrow_2swlv_22"
}, rf = Object.freeze({
  ESC: 27
}), ga = ({
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
  } = me(Qn), l = J(), d = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', u = (g) => {
    const b = l.current.querySelectorAll(d), m = s.current, y = b[0], w = b[b.length - 1];
    if (!g.shiftKey && document.activeElement === w)
      return m.focus(), g.preventDefault();
    g.shiftKey && document.activeElement === y && (m.focus(), g.preventDefault()), (g.keyCode || g.which) === rf.ESC && m.focus();
  }, {
    styles: f,
    attributes: p
  } = Kn(s.current, l.current, {
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
  }, [c]), n ? /* @__PURE__ */ h(dt, {
    children: e
  }) : /* @__PURE__ */ h(xr, {
    id: "js-toggletip",
    children: /* @__PURE__ */ P("div", {
      tabIndex: -1,
      onKeyDown: u,
      ref: l,
      className: `${An["c-toggletip"]} ${c && An["c-toggletip--active"]} ${t != null ? t : ""}`,
      style: f.popper,
      ...p.popper,
      children: [e, r && /* @__PURE__ */ h("div", {
        className: An["c-toggletip__arrow"],
        "data-popper-arrow": !0,
        style: f.arrow
      })]
    })
  });
};
ga.propTypes = {
  children: i.exports.oneOfType([i.exports.arrayOf(i.exports.element), i.exports.arrayOf(i.exports.node), i.exports.element, i.exports.node]),
  addClass: i.exports.string,
  hasArrow: i.exports.bool,
  isDisabled: i.exports.bool,
  distance: i.exports.number,
  placement: i.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"]),
  __TYPE: fe("ToggletipContent")
};
ga.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  __TYPE: "ToggletipContent"
};
const _n = {
  "c-tooltip": "_c-tooltip_1n6og_1",
  "c-tooltip--active": "_c-tooltip--active_1n6og_21",
  "c-tooltip__arrow": "_c-tooltip__arrow_1n6og_25"
}, ha = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: o,
  hasArrow: a,
  distance: c,
  isDisabled: s
}) => {
  const [l, d] = G(!1), u = J(null), f = J(null), p = le(() => t || bt("c-tooltip-"), [t]), g = (x) => {
    l || d(!l);
  }, b = (x) => d(!1), m = (x) => {
    (!l || document.activeElement !== u.current) && d(!l);
  }, y = (x) => d(!1), w = (x) => {
    (x.keyCode | x.which) === 27 && l && d(!l);
  }, S = Oe.map(e, (x) => Ue(x) ? _e(x, {
    ...x.props,
    "aria-describedby": t,
    ref: u,
    onFocus: g,
    onBlur: b,
    onMouseOver: m,
    onMouseOut: y,
    onKeyDown: w
  }) : null), {
    styles: I,
    attributes: D
  } = Kn(u.current, f.current, {
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
  return !r || Oe.count(e) > 1 || s ? /* @__PURE__ */ h(dt, {
    children: e
  }) : /* @__PURE__ */ P(dt, {
    children: [S, /* @__PURE__ */ h(xr, {
      id: "js-tooltip-portal",
      children: /* @__PURE__ */ P("div", {
        id: p,
        ref: f,
        role: "tooltip",
        className: `${_n["c-tooltip"]} ${l && _n["c-tooltip--active"]} ${o != null ? o : ""}`,
        style: I.popper,
        ...D.popper,
        children: [r, a && /* @__PURE__ */ h("div", {
          className: _n["c-tooltip__arrow"],
          "data-popper-arrow": !0,
          style: I.arrow
        })]
      })
    })]
  });
};
ha.defaultProps = {
  placement: "auto"
};
ha.propTypes = {
  children: i.exports.any,
  id: i.exports.string,
  label: i.exports.string.isRequired,
  addClass: i.exports.string,
  hasArrow: i.exports.bool,
  isDisabled: i.exports.bool,
  distance: i.exports.number,
  placement: i.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const Jn = Ge(), ma = ({
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
  }, g = () => {
    l((m) => m > 0 + 1 ? m - 1 : m);
  }, b = () => {
    l(null), r(!t), f(!1), n && n.current.focus();
  };
  return W(() => {
    t && (l(d.shift().id), f(!0));
  }, [t]), /* @__PURE__ */ h(Jn.Provider, {
    value: {
      isOpen: t,
      lastId: d.length,
      ...u(s),
      methods: {
        onNext: p,
        onPrev: g,
        onClose: b
      }
    },
    children: /* @__PURE__ */ h(xr, {
      id: "js-tour",
      children: t && /* @__PURE__ */ P(dt, {
        children: [/* @__PURE__ */ h(nf, {}), /* @__PURE__ */ h(ba, {
          ariaAttributes: c,
          hideCloseButton: o,
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
}, ba = ({
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
  } = me(Jn), p = J(), {
    onClose: g,
    onPrev: b,
    onNext: m
  } = a, {
    styles: y,
    attributes: w
  } = Kn(document.querySelector(s), p.current, {
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
  }), S = () => Ue(l) ? l : Uo("p", {
    className: mt["tour-description"]
  }, [l]), I = () => {
    p.current.style.setProperty("--speed-movement", "0.8s"), m();
  };
  return /* @__PURE__ */ P(dt, {
    children: [/* @__PURE__ */ h("div", {
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
      }), /* @__PURE__ */ h("div", {
        "aria-hidden": !0,
        className: mt["c-tour-progress"],
        children: /* @__PURE__ */ h("div", {
          className: mt["c-tour-progress-bar"],
          style: {
            transform: `scaleX(${c / o})`
          }
        })
      }), S(), /* @__PURE__ */ P("div", {
        className: mt["c-tour-button-container"],
        children: [!t && /* @__PURE__ */ h(It, {
          hasAriaLabel: !0,
          label: "Salir",
          onClick: g,
          icon: {
            name: "close",
            size: "big"
          }
        }), !r && /* @__PURE__ */ h(It, {
          disabled: c === 1,
          hasAriaLabel: !0,
          label: "Anterior",
          onClick: b,
          icon: {
            name: "navigate_before",
            size: "big"
          }
        }), /* @__PURE__ */ h(It, {
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
ba.propTypes = {
  ariaAttributes: i.exports.shape({
    role: i.exports.string,
    tabIndex: i.exports.oneOfType([i.exports.string, i.exports.number]),
    "aria-label": i.exports.string,
    "aria-modal": i.exports.oneOfType([i.exports.string, i.exports.bool])
  }),
  hideCloseButton: i.exports.bool,
  hideBackButton: i.exports.bool
};
const nf = () => {
  const {
    isOpen: e,
    id: t,
    target: r,
    helpLayerClass: n
  } = me(Jn), [o, a] = G({}), c = () => {
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
  }, [e, r]), /* @__PURE__ */ h("div", {
    className: `${mt["c-tour-help"]} ${e && "animate__animated animate__fadeIn animate__faster animate__delay-2s"} ${n != null ? n : ""}`,
    style: o,
    children: /* @__PURE__ */ h("span", {
      className: mt["c-tour-number"],
      children: t
    })
  });
}, of = "_active_r3225_90", af = "_iconPulse_r3225_1", pe = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: of,
  iconPulse: af,
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
  }), [g, b] = G({
    state: !0,
    label: "Volumen"
  }), [m, y] = G(100), [w, S] = G({
    state: !1,
    label: "Ver en pantalla completa"
  }), [I, D] = G(!1), [x, O] = G(100), A = J(null), _ = J(null), C = J(null), j = J(null), B = J(null), X = J(null), H = J(null), re = J(null), [de, ie] = G(!1), ee = (N) => {
    N.classList.add(`${pe.active}`), setTimeout(() => {
      N.classList.remove(`${pe.active}`);
    }, 650);
  };
  function xe() {
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
    const N = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, T = A.current;
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
  function M(N) {
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
    O(Z), y(Z), T.volume = he, g.state || b({
      state: !0,
      label: "Volumen"
    });
  }
  const V = () => {
    if (g.state) {
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
    (N.keyCode || N.which) === 32 && xe();
  }, K = function(N) {
    const T = Math.floor(j.current.getAttribute("aria-valuenow"));
    if (document.activeElement === B.current)
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
      caption: de,
      volume: x
    }));
  }, [de, x]), W(() => (C.current ? C.current.addEventListener("error", () => {
    D(!0);
  }) : D(!0), e.caption && D(!1), () => {
    C.current && C.current.removeEventListener("error", () => {
      D(!0);
    });
  }), [e.caption]), /* @__PURE__ */ P("figure", {
    className: `${pe["c-vid"]} ${o}`,
    style: {
      maxWidth: `${t}px`
    },
    onKeyDown: (N) => K(N),
    ...c,
    children: [/* @__PURE__ */ P("div", {
      className: `${pe["c-vid__container"]} ${o}`,
      ref: A,
      children: [/* @__PURE__ */ P("div", {
        className: pe["c-vid__wrapper"],
        children: [/* @__PURE__ */ P("video", {
          ref: _,
          onTimeUpdate: (N) => M(N.target),
          onLoadedData: (N) => M(N.target),
          onClick: xe,
          className: `${pe["c-vid__video"]} ${de ? "" : pe["no-captions"]}`,
          poster: a ? `assets/images/${a}.png` : void 0,
          children: [/* @__PURE__ */ h("source", {
            src: e.video
          }), e.caption ? /* @__PURE__ */ h("track", {
            ref: C,
            src: e.caption,
            label: "Subt\xEDtulos en espa\xF1ol",
            kind: "subtitles",
            srcLang: "es",
            default: !0
          }) : ""]
        }), /* @__PURE__ */ P("div", {
          className: pe["c-vid__icon-container"],
          children: [/* @__PURE__ */ h("div", {
            ref: re,
            className: pe["c-vid__icon"],
            children: /* @__PURE__ */ h(Ie, {
              name: "fast_rewind"
            })
          }), /* @__PURE__ */ h("div", {
            ref: X,
            className: pe["c-vid__icon"],
            children: /* @__PURE__ */ h(Ie, {
              name: f.state ? "play" : "pause"
            })
          }), /* @__PURE__ */ h("div", {
            ref: H,
            className: pe["c-vid__icon"],
            children: /* @__PURE__ */ h(Ie, {
              name: "fast_forward"
            })
          })]
        })]
      }), /* @__PURE__ */ h("div", {
        className: pe["progress-container"],
        children: /* @__PURE__ */ P("div", {
          role: "slider",
          "aria-label": "Progreso del video",
          "aria-valuemin": "0",
          "aria-valuenow": d.totalSeconds,
          "aria-valuemax": s.totalSeconds,
          "aria-valuetext": q(),
          tabIndex: "0",
          onKeyDown: Q,
          className: pe["c-vid__progress-bg"],
          onClick: z,
          ref: j,
          children: [/* @__PURE__ */ h("div", {
            className: pe["c-vid__progress-bar"],
            style: {
              transform: `scaleX(calc(${d.totalSeconds} / ${s.totalSeconds}))`
            }
          }), /* @__PURE__ */ h("div", {
            className: pe["progress-sphere"],
            style: {
              left: `min(calc((${d.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
            }
          })]
        })
      }), /* @__PURE__ */ P("div", {
        className: pe["c-vid__controls"],
        children: [/* @__PURE__ */ h("button", {
          className: `${pe["c-vid__button"]} tour`,
          "aria-label": f.label,
          onClick: xe,
          "data-description": "Este bot\xF3n reproduce el video",
          children: /* @__PURE__ */ h(Ie, {
            name: f.state ? "pause" : "play"
          })
        }), /* @__PURE__ */ h("button", {
          className: `${pe["c-vid__button"]} tour`,
          "aria-label": g.label,
          "data-description": "Este bot\xF3n controla el volumen",
          onClick: V,
          children: /* @__PURE__ */ h(Ie, {
            name: g.state ? "volume_on" : "volume_off"
          })
        }), /* @__PURE__ */ P("label", {
          className: pe["c-vid__volume"],
          htmlFor: "volumeControl",
          children: [/* @__PURE__ */ h("span", {
            className: "u-sr-only",
            children: "Controlar volumen"
          }), /* @__PURE__ */ h("input", {
            className: pe["c-vid__volume-item"],
            ref: B,
            id: "volumeControl",
            type: "range",
            min: "0",
            max: "100",
            step: "5",
            value: x,
            onChange: F,
            "aria-valuetext": `${x}%`
          })]
        }), /* @__PURE__ */ P("p", {
          className: pe["c-vid__time"],
          "aria-hidden": "true",
          children: [/* @__PURE__ */ h("span", {
            children: d.string
          }), "/", /* @__PURE__ */ h("span", {
            children: s.string
          })]
        }), /* @__PURE__ */ h("button", {
          disabled: I,
          "aria-pressed": I ? void 0 : de,
          onClick: () => ie(!de),
          "aria-label": "Subt\xEDtulos",
          className: `${pe["c-vid__button"]} ${pe["c-vid__subtitles"]}`,
          children: /* @__PURE__ */ h(Ie, {
            name: I ? "closed_caption_disabled" : "closed_caption"
          })
        }), /* @__PURE__ */ h("button", {
          className: pe["c-vid__button"],
          "aria-label": w.label,
          onClick: ge,
          children: /* @__PURE__ */ h(Ie, {
            name: w.state ? "fullscreen_exit" : "fullscreen"
          })
        })]
      })]
    }), r && /* @__PURE__ */ P("figcaption", {
      className: pe["c-vid__caption"],
      children: [/* @__PURE__ */ P("strong", {
        children: [n.title, ":"]
      }), " ", n.content]
    })]
  });
};
ya.propTypes = {
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
ya.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
const sf = (e, t) => {
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
}, cf = (e, t, r) => {
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
}, pf = () => {
  const [e, t] = sf("dark-mode-enabled"), r = cf(["(prefers-color-scheme: dark)"], [!0], !1), n = typeof e < "u" ? e : r;
  return W(() => {
    t(r);
  }, [r]), W(() => {
    const o = window.document.body;
    n ? o.setAttribute("data-dark-mode", n) : o.removeAttribute("data-dark-mode", n);
  }, [n]), [n, t];
}, lf = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), vf = (e) => {
  const { root: t, rootMargin: r, threshold: n } = e || lf, [o, a] = G(!1), [c, s] = G(null);
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
}, xa = (e) => {
  let t = {};
  for (const r in e)
    if (typeof e[r] == "object") {
      const n = xa(e[r]);
      for (const o in n)
        t = {
          ...t,
          [r.includes("accents") || r.includes("palette") ? o : `${r}-${o}`]: n[o]
        };
    } else
      t[r] = e[r];
  return t;
}, gf = (e) => xa(e);
export {
  Ca as Accordion,
  Jo as AccordionButton,
  Zo as AccordionItem,
  ei as AccordionPanel,
  ti as Audio,
  It as Button,
  Rl as ButtonSection,
  oi as CheckBox,
  Ts as CheckBoxGroup,
  Ss as Col,
  Ds as Content,
  Di as DragAndDrop,
  Ri as DragAndDropContext,
  Ii as Draggable,
  Pi as Droppable,
  df as Filter,
  Ni as GeneralDraggable,
  Ie as Icon,
  Ci as Image,
  Mi as Input,
  gl as InputGroup,
  Bi as InputLeftAddon,
  ji as InputRightAddon,
  ki as InputStyle,
  ml as Kbd,
  Fi as Link,
  bl as List,
  $i as ListItem,
  Yi as Modal,
  qi as ModalContent,
  Yn as ModalContext,
  Vi as ModalOverlay,
  Ki as NavSection,
  Wi as NumberDecrementStepper,
  Ui as NumberIncrementStepper,
  Qi as NumberInput,
  Ur as NumberInputContext,
  Hi as NumberInputField,
  zi as NumberInputStepper,
  yl as OrderedList,
  Gi as Pagination,
  qn as PaginationItem,
  El as Panel,
  Gr as PanelContext,
  Il as Paper,
  xr as Portal,
  Bl as Row,
  Xi as Section,
  Ji as Select,
  jl as SelectGroup,
  Zi as Switch,
  ea as Tab,
  ta as TabList,
  ra as TabPanel,
  na as TabPanels,
  Fl as Tabs,
  Vn as TabsContext,
  oa as TextArea,
  Ll as ThemeProvider,
  $l as Toggletip,
  ia as ToggletipButton,
  ga as ToggletipContent,
  Qn as ToggletipContext,
  ha as Tooltip,
  ma as Tour,
  Jn as TourContext,
  ba as TourElement,
  nf as TourHelpLayer,
  xl as UnorderedList,
  ya as Video,
  gf as createTheme,
  pf as useDarkMode,
  sf as useLocalStorage,
  cf as useMedia,
  vf as useOnScreen,
  _l as usePagination,
  Cl as usePortal
};
