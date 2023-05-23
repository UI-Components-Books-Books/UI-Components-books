import * as zt from "react";
import ln, { Children as Ae, useState as te, useEffect as J, isValidElement as lt, cloneElement as De, forwardRef as xt, useRef as ee, useLayoutEffect as un, useMemo as Ee, useCallback as Fe, createContext as ut, memo as Ja, useReducer as _o, useContext as Pe, useId as $t, createElement as Ys } from "react";
import * as Ws from "react-dom";
import ei, { unstable_batchedUpdates as vr, createPortal as ti } from "react-dom";
var zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zs(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r = function() {
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var a = { exports: {} }, Dn = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zo;
function Us() {
  if (zo)
    return pe;
  zo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function D(g) {
    if (typeof g == "object" && g !== null) {
      var L = g.$$typeof;
      switch (L) {
        case t:
          switch (g = g.type, g) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case c:
                case b:
                case h:
                case l:
                  return g;
                default:
                  return L;
              }
          }
        case r:
          return L;
      }
    }
  }
  function N(g) {
    return D(g) === d;
  }
  return pe.AsyncMode = f, pe.ConcurrentMode = d, pe.ContextConsumer = s, pe.ContextProvider = l, pe.Element = t, pe.ForwardRef = c, pe.Fragment = n, pe.Lazy = b, pe.Memo = h, pe.Portal = r, pe.Profiler = i, pe.StrictMode = o, pe.Suspense = u, pe.isAsyncMode = function(g) {
    return N(g) || D(g) === f;
  }, pe.isConcurrentMode = N, pe.isContextConsumer = function(g) {
    return D(g) === s;
  }, pe.isContextProvider = function(g) {
    return D(g) === l;
  }, pe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, pe.isForwardRef = function(g) {
    return D(g) === c;
  }, pe.isFragment = function(g) {
    return D(g) === n;
  }, pe.isLazy = function(g) {
    return D(g) === b;
  }, pe.isMemo = function(g) {
    return D(g) === h;
  }, pe.isPortal = function(g) {
    return D(g) === r;
  }, pe.isProfiler = function(g) {
    return D(g) === i;
  }, pe.isStrictMode = function(g) {
    return D(g) === o;
  }, pe.isSuspense = function(g) {
    return D(g) === u;
  }, pe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === d || g === i || g === o || g === u || g === v || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === h || g.$$typeof === l || g.$$typeof === s || g.$$typeof === c || g.$$typeof === w || g.$$typeof === E || g.$$typeof === $ || g.$$typeof === x);
  }, pe.typeOf = D, pe;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo;
function Hs() {
  return Uo || (Uo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function D(P) {
      return typeof P == "string" || typeof P == "function" || P === n || P === d || P === i || P === o || P === u || P === v || typeof P == "object" && P !== null && (P.$$typeof === b || P.$$typeof === h || P.$$typeof === l || P.$$typeof === s || P.$$typeof === c || P.$$typeof === w || P.$$typeof === E || P.$$typeof === $ || P.$$typeof === x);
    }
    function N(P) {
      if (typeof P == "object" && P !== null) {
        var q = P.$$typeof;
        switch (q) {
          case t:
            var Q = P.type;
            switch (Q) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case u:
                return Q;
              default:
                var ie = Q && Q.$$typeof;
                switch (ie) {
                  case s:
                  case c:
                  case b:
                  case h:
                  case l:
                    return ie;
                  default:
                    return q;
                }
            }
          case r:
            return q;
        }
      }
    }
    var g = f, L = d, A = s, j = l, z = t, G = c, Y = n, W = b, Z = h, X = r, ne = i, H = o, K = u, ce = !1;
    function se(P) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(P) || N(P) === f;
    }
    function _(P) {
      return N(P) === d;
    }
    function R(P) {
      return N(P) === s;
    }
    function y(P) {
      return N(P) === l;
    }
    function T(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function O(P) {
      return N(P) === c;
    }
    function C(P) {
      return N(P) === n;
    }
    function S(P) {
      return N(P) === b;
    }
    function I(P) {
      return N(P) === h;
    }
    function M(P) {
      return N(P) === r;
    }
    function V(P) {
      return N(P) === i;
    }
    function k(P) {
      return N(P) === o;
    }
    function oe(P) {
      return N(P) === u;
    }
    ve.AsyncMode = g, ve.ConcurrentMode = L, ve.ContextConsumer = A, ve.ContextProvider = j, ve.Element = z, ve.ForwardRef = G, ve.Fragment = Y, ve.Lazy = W, ve.Memo = Z, ve.Portal = X, ve.Profiler = ne, ve.StrictMode = H, ve.Suspense = K, ve.isAsyncMode = se, ve.isConcurrentMode = _, ve.isContextConsumer = R, ve.isContextProvider = y, ve.isElement = T, ve.isForwardRef = O, ve.isFragment = C, ve.isLazy = S, ve.isMemo = I, ve.isPortal = M, ve.isProfiler = V, ve.isStrictMode = k, ve.isSuspense = oe, ve.isValidElementType = D, ve.typeOf = N;
  }()), ve;
}
var Ho;
function ri() {
  return Ho || (Ho = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Us() : e.exports = Hs();
  }(Dn)), Dn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var An, Go;
function Gs() {
  if (Go)
    return An;
  Go = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var l = {}, s = 0; s < 10; s++)
        l["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(l).map(function(c) {
        return l[c];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        d[c] = c;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return An = o() ? Object.assign : function(i, l) {
    for (var s, f = n(i), d, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var u in s)
        t.call(s, u) && (f[u] = s[u]);
      if (e) {
        d = e(s);
        for (var v = 0; v < d.length; v++)
          r.call(s, d[v]) && (f[d[v]] = s[d[v]]);
      }
    }
    return f;
  }, An;
}
var In, Zo;
function xo() {
  if (Zo)
    return In;
  Zo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return In = e, In;
}
var Nn, Xo;
function ni() {
  return Xo || (Xo = 1, Nn = Function.call.bind(Object.prototype.hasOwnProperty)), Nn;
}
var $n, Ko;
function Zs() {
  if (Ko)
    return $n;
  Ko = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = xo(), r = {}, n = ni();
    e = function(i) {
      var l = "Warning: " + i;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(i, l, s, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (n(i, c)) {
          var u;
          try {
            if (typeof i[c] != "function") {
              var v = Error(
                (f || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            u = i[c](l, c, f, s, null, t);
          } catch (b) {
            u = b;
          }
          if (u && !(u instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in r)) {
            r[u.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + s + " type: " + u.message + (h != null ? h : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, $n = o, $n;
}
var Mn, Qo;
function Xs() {
  if (Qo)
    return Mn;
  Qo = 1;
  var e = ri(), t = Gs(), r = xo(), n = ni(), o = Zs(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return Mn = function(s, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function u(_) {
      var R = _ && (d && _[d] || _[c]);
      if (typeof R == "function")
        return R;
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
      any: $(),
      arrayOf: D,
      element: N(),
      elementType: g(),
      instanceOf: L,
      node: G(),
      objectOf: j,
      oneOf: A,
      oneOfType: z,
      shape: W,
      exact: Z
    };
    function b(_, R) {
      return _ === R ? _ !== 0 || 1 / _ === 1 / R : _ !== _ && R !== R;
    }
    function x(_, R) {
      this.message = _, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function w(_) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, y = 0;
      function T(C, S, I, M, V, k, oe) {
        if (M = M || v, k = k || I, oe !== r) {
          if (f) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var q = M + ":" + I;
            !R[q] && y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + k + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[q] = !0, y++);
          }
        }
        return S[I] == null ? C ? S[I] === null ? new x("The " + V + " `" + k + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new x("The " + V + " `" + k + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : _(S, I, M, V, k);
      }
      var O = T.bind(null, !1);
      return O.isRequired = T.bind(null, !0), O;
    }
    function E(_) {
      function R(y, T, O, C, S, I) {
        var M = y[T], V = H(M);
        if (V !== _) {
          var k = K(M);
          return new x(
            "Invalid " + C + " `" + S + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return w(R);
    }
    function $() {
      return w(l);
    }
    function D(_) {
      function R(y, T, O, C, S) {
        if (typeof _ != "function")
          return new x("Property `" + S + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var I = y[T];
        if (!Array.isArray(I)) {
          var M = H(I);
          return new x("Invalid " + C + " `" + S + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected an array."));
        }
        for (var V = 0; V < I.length; V++) {
          var k = _(I, V, O, C, S + "[" + V + "]", r);
          if (k instanceof Error)
            return k;
        }
        return null;
      }
      return w(R);
    }
    function N() {
      function _(R, y, T, O, C) {
        var S = R[y];
        if (!s(S)) {
          var I = H(S);
          return new x("Invalid " + O + " `" + C + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(_);
    }
    function g() {
      function _(R, y, T, O, C) {
        var S = R[y];
        if (!e.isValidElementType(S)) {
          var I = H(S);
          return new x("Invalid " + O + " `" + C + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(_);
    }
    function L(_) {
      function R(y, T, O, C, S) {
        if (!(y[T] instanceof _)) {
          var I = _.name || v, M = se(y[T]);
          return new x("Invalid " + C + " `" + S + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return w(R);
    }
    function A(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function R(y, T, O, C, S) {
        for (var I = y[T], M = 0; M < _.length; M++)
          if (b(I, _[M]))
            return null;
        var V = JSON.stringify(_, function(oe, P) {
          var q = K(P);
          return q === "symbol" ? String(P) : P;
        });
        return new x("Invalid " + C + " `" + S + "` of value `" + String(I) + "` " + ("supplied to `" + O + "`, expected one of " + V + "."));
      }
      return w(R);
    }
    function j(_) {
      function R(y, T, O, C, S) {
        if (typeof _ != "function")
          return new x("Property `" + S + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var I = y[T], M = H(I);
        if (M !== "object")
          return new x("Invalid " + C + " `" + S + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected an object."));
        for (var V in I)
          if (n(I, V)) {
            var k = _(I, V, O, C, S + "." + V, r);
            if (k instanceof Error)
              return k;
          }
        return null;
      }
      return w(R);
    }
    function z(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var R = 0; R < _.length; R++) {
        var y = _[R];
        if (typeof y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(y) + " at index " + R + "."
          ), l;
      }
      function T(O, C, S, I, M) {
        for (var V = [], k = 0; k < _.length; k++) {
          var oe = _[k], P = oe(O, C, S, I, M, r);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && V.push(P.data.expectedType);
        }
        var q = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new x("Invalid " + I + " `" + M + "` supplied to " + ("`" + S + "`" + q + "."));
      }
      return w(T);
    }
    function G() {
      function _(R, y, T, O, C) {
        return X(R[y]) ? null : new x("Invalid " + O + " `" + C + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return w(_);
    }
    function Y(_, R, y, T, O) {
      return new x(
        (_ || "React class") + ": " + R + " type `" + y + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function W(_) {
      function R(y, T, O, C, S) {
        var I = y[T], M = H(I);
        if (M !== "object")
          return new x("Invalid " + C + " `" + S + "` of type `" + M + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var V in _) {
          var k = _[V];
          if (typeof k != "function")
            return Y(O, C, S, V, K(k));
          var oe = k(I, V, O, C, S + "." + V, r);
          if (oe)
            return oe;
        }
        return null;
      }
      return w(R);
    }
    function Z(_) {
      function R(y, T, O, C, S) {
        var I = y[T], M = H(I);
        if (M !== "object")
          return new x("Invalid " + C + " `" + S + "` of type `" + M + "` " + ("supplied to `" + O + "`, expected `object`."));
        var V = t({}, y[T], _);
        for (var k in V) {
          var oe = _[k];
          if (n(_, k) && typeof oe != "function")
            return Y(O, C, S, k, K(oe));
          if (!oe)
            return new x(
              "Invalid " + C + " `" + S + "` key `" + k + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(y[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var P = oe(I, k, O, C, S + "." + k, r);
          if (P)
            return P;
        }
        return null;
      }
      return w(R);
    }
    function X(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(X);
          if (_ === null || s(_))
            return !0;
          var R = u(_);
          if (R) {
            var y = R.call(_), T;
            if (R !== _.entries) {
              for (; !(T = y.next()).done; )
                if (!X(T.value))
                  return !1;
            } else
              for (; !(T = y.next()).done; ) {
                var O = T.value;
                if (O && !X(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(_, R) {
      return _ === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function H(_) {
      var R = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : ne(R, _) ? "symbol" : R;
    }
    function K(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var R = H(_);
      if (R === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function ce(_) {
      var R = K(_);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function se(_) {
      return !_.constructor || !_.constructor.name ? v : _.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, Mn;
}
var kn, Jo;
function Ks() {
  if (Jo)
    return kn;
  Jo = 1;
  var e = xo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, kn = function() {
    function n(l, s, f, d, c, u) {
      if (u !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
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
    return i.PropTypes = i, i;
  }, kn;
}
if (process.env.NODE_ENV !== "production") {
  var Qs = ri(), Js = !0;
  a.exports = Xs()(Qs.isElement, Js);
} else
  a.exports = Ks()();
const ec = (e) => {
  var t, r;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((r = e == null ? void 0 : e.type) == null ? void 0 : r.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ze = (e, t) => Ae.toArray(e).filter((r) => t.indexOf(ec(r)) !== -1);
var fn = { exports: {} }, hr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea;
function tc() {
  if (ea)
    return hr;
  ea = 1;
  var e = ln, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, f, d) {
    var c, u = {}, v = null, h = null;
    d !== void 0 && (v = "" + d), f.key !== void 0 && (v = "" + f.key), f.ref !== void 0 && (h = f.ref);
    for (c in f)
      n.call(f, c) && !i.hasOwnProperty(c) && (u[c] = f[c]);
    if (s && s.defaultProps)
      for (c in f = s.defaultProps, f)
        u[c] === void 0 && (u[c] = f[c]);
    return { $$typeof: t, type: s, key: v, ref: h, props: u, _owner: o.current };
  }
  return hr.Fragment = r, hr.jsx = l, hr.jsxs = l, hr;
}
var gr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function rc() {
  return ta || (ta = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ln, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, x = "@@iterator";
    function w(m) {
      if (m === null || typeof m != "object")
        return null;
      var B = b && m[b] || m[x];
      return typeof B == "function" ? B : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(m) {
      {
        for (var B = arguments.length, U = new Array(B > 1 ? B - 1 : 0), ae = 1; ae < B; ae++)
          U[ae - 1] = arguments[ae];
        D("error", m, U);
      }
    }
    function D(m, B, U) {
      {
        var ae = E.ReactDebugCurrentFrame, de = ae.getStackAddendum();
        de !== "" && (B += "%s", U = U.concat([de]));
        var me = U.map(function(ue) {
          return String(ue);
        });
        me.unshift("Warning: " + B), Function.prototype.apply.call(console[m], console, me);
      }
    }
    var N = !1, g = !1, L = !1, A = !1, j = !1, z;
    z = Symbol.for("react.module.reference");
    function G(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === i || j || m === o || m === d || m === c || A || m === h || N || g || L || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === u || m.$$typeof === l || m.$$typeof === s || m.$$typeof === f || m.$$typeof === z || m.getModuleId !== void 0));
    }
    function Y(m, B, U) {
      var ae = m.displayName;
      if (ae)
        return ae;
      var de = B.displayName || B.name || "";
      return de !== "" ? U + "(" + de + ")" : U;
    }
    function W(m) {
      return m.displayName || "Context";
    }
    function Z(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case s:
            var B = m;
            return W(B) + ".Consumer";
          case l:
            var U = m;
            return W(U._context) + ".Provider";
          case f:
            return Y(m, m.render, "ForwardRef");
          case u:
            var ae = m.displayName || null;
            return ae !== null ? ae : Z(m.type) || "Memo";
          case v: {
            var de = m, me = de._payload, ue = de._init;
            try {
              return Z(ue(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ne = 0, H, K, ce, se, _, R, y;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function O() {
      {
        if (ne === 0) {
          H = console.log, K = console.info, ce = console.warn, se = console.error, _ = console.group, R = console.groupCollapsed, y = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: T,
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
        ne++;
      }
    }
    function C() {
      {
        if (ne--, ne === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, m, {
              value: H
            }),
            info: X({}, m, {
              value: K
            }),
            warn: X({}, m, {
              value: ce
            }),
            error: X({}, m, {
              value: se
            }),
            group: X({}, m, {
              value: _
            }),
            groupCollapsed: X({}, m, {
              value: R
            }),
            groupEnd: X({}, m, {
              value: y
            })
          });
        }
        ne < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var S = E.ReactCurrentDispatcher, I;
    function M(m, B, U) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (de) {
            var ae = de.stack.trim().match(/\n( *(at )?)/);
            I = ae && ae[1] || "";
          }
        return `
` + I + m;
      }
    }
    var V = !1, k;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      k = new oe();
    }
    function P(m, B) {
      if (!m || V)
        return "";
      {
        var U = k.get(m);
        if (U !== void 0)
          return U;
      }
      var ae;
      V = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = S.current, S.current = null, O();
      try {
        if (B) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (Ot) {
              ae = Ot;
            }
            Reflect.construct(m, [], ue);
          } else {
            try {
              ue.call();
            } catch (Ot) {
              ae = Ot;
            }
            m.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ot) {
            ae = Ot;
          }
          m();
        }
      } catch (Ot) {
        if (Ot && ae && typeof Ot.stack == "string") {
          for (var le = Ot.stack.split(`
`), Ve = ae.stack.split(`
`), Se = le.length - 1, Re = Ve.length - 1; Se >= 1 && Re >= 0 && le[Se] !== Ve[Re]; )
            Re--;
          for (; Se >= 1 && Re >= 0; Se--, Re--)
            if (le[Se] !== Ve[Re]) {
              if (Se !== 1 || Re !== 1)
                do
                  if (Se--, Re--, Re < 0 || le[Se] !== Ve[Re]) {
                    var ot = `
` + le[Se].replace(" at new ", " at ");
                    return m.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", m.displayName)), typeof m == "function" && k.set(m, ot), ot;
                  }
                while (Se >= 1 && Re >= 0);
              break;
            }
        }
      } finally {
        V = !1, S.current = me, C(), Error.prepareStackTrace = de;
      }
      var Kt = m ? m.displayName || m.name : "", Wo = Kt ? M(Kt) : "";
      return typeof m == "function" && k.set(m, Wo), Wo;
    }
    function q(m, B, U) {
      return P(m, !1);
    }
    function Q(m) {
      var B = m.prototype;
      return !!(B && B.isReactComponent);
    }
    function ie(m, B, U) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return P(m, Q(m));
      if (typeof m == "string")
        return M(m);
      switch (m) {
        case d:
          return M("Suspense");
        case c:
          return M("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case f:
            return q(m.render);
          case u:
            return ie(m.type, B, U);
          case v: {
            var ae = m, de = ae._payload, me = ae._init;
            try {
              return ie(me(de), B, U);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, $e = {}, dt = E.ReactDebugCurrentFrame;
    function qe(m) {
      if (m) {
        var B = m._owner, U = ie(m.type, m._source, B ? B.type : null);
        dt.setExtraStackFrame(U);
      } else
        dt.setExtraStackFrame(null);
    }
    function Te(m, B, U, ae, de) {
      {
        var me = Function.call.bind(ye);
        for (var ue in m)
          if (me(m, ue)) {
            var le = void 0;
            try {
              if (typeof m[ue] != "function") {
                var Ve = Error((ae || "React class") + ": " + U + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ve.name = "Invariant Violation", Ve;
              }
              le = m[ue](B, ue, ae, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              le = Se;
            }
            le && !(le instanceof Error) && (qe(de), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", U, ue, typeof le), qe(null)), le instanceof Error && !(le.message in $e) && ($e[le.message] = !0, qe(de), $("Failed %s type: %s", U, le.message), qe(null));
          }
      }
    }
    var Ye = Array.isArray;
    function Ke(m) {
      return Ye(m);
    }
    function kt(m) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, U = B && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return U;
      }
    }
    function Pt(m) {
      try {
        return jt(m), !1;
      } catch {
        return !0;
      }
    }
    function jt(m) {
      return "" + m;
    }
    function Lt(m) {
      if (Pt(m))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kt(m)), jt(m);
    }
    var Be = E.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, dr, rt;
    rt = {};
    function qr(m) {
      if (ye.call(m, "ref")) {
        var B = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Sn(m) {
      if (ye.call(m, "key")) {
        var B = Object.getOwnPropertyDescriptor(m, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Pn(m, B) {
      if (typeof m.ref == "string" && Be.current && B && Be.current.stateNode !== B) {
        var U = Z(Be.current.type);
        rt[U] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Be.current.type), m.ref), rt[U] = !0);
      }
    }
    function Br(m, B) {
      {
        var U = function() {
          Rt || (Rt = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        U.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function Rn(m, B) {
      {
        var U = function() {
          dr || (dr = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        U.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var Vr = function(m, B, U, ae, de, me, ue) {
      var le = {
        $$typeof: t,
        type: m,
        key: B,
        ref: U,
        props: ue,
        _owner: me
      };
      return le._store = {}, Object.defineProperty(le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.defineProperty(le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
    };
    function Cn(m, B, U, ae, de) {
      {
        var me, ue = {}, le = null, Ve = null;
        U !== void 0 && (Lt(U), le = "" + U), Sn(B) && (Lt(B.key), le = "" + B.key), qr(B) && (Ve = B.ref, Pn(B, de));
        for (me in B)
          ye.call(B, me) && !pt.hasOwnProperty(me) && (ue[me] = B[me]);
        if (m && m.defaultProps) {
          var Se = m.defaultProps;
          for (me in Se)
            ue[me] === void 0 && (ue[me] = Se[me]);
        }
        if (le || Ve) {
          var Re = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          le && Br(ue, Re), Ve && Rn(ue, Re);
        }
        return Vr(m, le, Ve, de, ae, Be.current, ue);
      }
    }
    var pr = E.ReactCurrentOwner, Yr = E.ReactDebugCurrentFrame;
    function we(m) {
      if (m) {
        var B = m._owner, U = ie(m.type, m._source, B ? B.type : null);
        Yr.setExtraStackFrame(U);
      } else
        Yr.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function ke(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function vt() {
      {
        if (pr.current) {
          var m = Z(pr.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function We(m) {
      {
        if (m !== void 0) {
          var B = m.fileName.replace(/^.*[\\\/]/, ""), U = m.lineNumber;
          return `

Check your code at ` + B + ":" + U + ".";
        }
        return "";
      }
    }
    var ze = {};
    function nt(m) {
      {
        var B = vt();
        if (!B) {
          var U = typeof m == "string" ? m : m.displayName || m.name;
          U && (B = `

Check the top-level render call using <` + U + ">.");
        }
        return B;
      }
    }
    function Et(m, B) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var U = nt(B);
        if (ze[U])
          return;
        ze[U] = !0;
        var ae = "";
        m && m._owner && m._owner !== pr.current && (ae = " It was passed a child from " + Z(m._owner.type) + "."), we(m), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, ae), we(null);
      }
    }
    function Ue(m, B) {
      {
        if (typeof m != "object")
          return;
        if (Ke(m))
          for (var U = 0; U < m.length; U++) {
            var ae = m[U];
            ke(ae) && Et(ae, B);
          }
        else if (ke(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var de = w(m);
          if (typeof de == "function" && de !== m.entries)
            for (var me = de.call(m), ue; !(ue = me.next()).done; )
              ke(ue.value) && Et(ue.value, B);
        }
      }
    }
    function Ft(m) {
      {
        var B = m.type;
        if (B == null || typeof B == "string")
          return;
        var U;
        if (typeof B == "function")
          U = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === f || B.$$typeof === u))
          U = B.propTypes;
        else
          return;
        if (U) {
          var ae = Z(B);
          Te(U, m.props, "prop", ae, m);
        } else if (B.PropTypes !== void 0 && !Me) {
          Me = !0;
          var de = Z(B);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qt(m) {
      {
        for (var B = Object.keys(m.props), U = 0; U < B.length; U++) {
          var ae = B[U];
          if (ae !== "children" && ae !== "key") {
            we(m), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), we(null);
            break;
          }
        }
        m.ref !== null && (we(m), $("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function Bt(m, B, U, ae, de, me) {
      {
        var ue = G(m);
        if (!ue) {
          var le = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = We(de);
          Ve ? le += Ve : le += vt();
          var Se;
          m === null ? Se = "null" : Ke(m) ? Se = "array" : m !== void 0 && m.$$typeof === t ? (Se = "<" + (Z(m.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof m, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, le);
        }
        var Re = Cn(m, B, U, de, me);
        if (Re == null)
          return Re;
        if (ue) {
          var ot = B.children;
          if (ot !== void 0)
            if (ae)
              if (Ke(ot)) {
                for (var Kt = 0; Kt < ot.length; Kt++)
                  Ue(ot[Kt], m);
                Object.freeze && Object.freeze(ot);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(ot, m);
        }
        return m === n ? qt(Re) : Ft(Re), Re;
      }
    }
    function Xt(m, B, U) {
      return Bt(m, B, U, !0);
    }
    function Wr(m, B, U) {
      return Bt(m, B, U, !1);
    }
    var Vt = Wr, Yt = Xt;
    gr.Fragment = n, gr.jsx = Vt, gr.jsxs = Yt;
  }()), gr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = tc() : e.exports = rc();
})(fn);
const mt = fn.exports.Fragment, p = fn.exports.jsx, F = fn.exports.jsxs, nc = ({
  children: e,
  allowMultiple: t,
  defaultIndex: r,
  allowDifferentChildren: n
}) => {
  const [o, i] = te(), l = (f) => {
    t ? o.includes(f) ? i(o.filter((d) => d !== f)) : i([...o, f]) : i(f);
  };
  J(() => (i(t ? r || [] : r != null ? r : null), () => {
    i(null);
  }), [t, r]);
  const s = Ae.map(e, (f, d) => lt(f) ? De(f, {
    ...f.props,
    id: d,
    isOpen: o,
    onToggle: l
  }) : null);
  return /* @__PURE__ */ p("div", {
    children: n ? s : Ze(s, ["AccordionItem"])
  });
};
nc.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element]),
  allowMultiple: a.exports.bool,
  allowDifferentChildren: a.exports.bool,
  defaultIndex: a.exports.oneOfType([a.exports.array, a.exports.number])
};
var oi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (!!i) {
          var l = typeof i;
          if (l === "string" || l === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = r.apply(null, i);
              s && n.push(s);
            }
          } else if (l === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue;
            }
            for (var f in i)
              t.call(i, f) && i[f] && n.push(f);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(oi);
const re = oi.exports, xe = (e) => (t, r, n) => {
  if (t[r] !== e)
    return new Error(
      `'${r}' in '${n}' 

 NO puedes pasar un valor de props para '${r}'.La propiedad tenia 2 guiones abajo por un raz\xF3n, As\xED que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro d\xEDa sin errores.`
    );
}, Jr = {
  "c-accordion__item": "_c-accordion__item_s7jwr_1",
  "c-accordion__button": "_c-accordion__button_s7jwr_10",
  "c-accordion__panel": "_c-accordion__panel_s7jwr_29",
  "c-accordion__panel-content": "_c-accordion__panel-content_s7jwr_48"
}, ai = ({
  children: e,
  id: t,
  onExpanded: r,
  isExpanded: n,
  expanded: o,
  addClass: i,
  icon: l,
  defaultStyle: s,
  __TYPE: f,
  ...d
}) => /* @__PURE__ */ F("button", {
  id: `accordion-button-${t}`,
  "aria-controls": `accordion-panel-${t}`,
  "aria-expanded": n,
  className: re({
    [`${Jr["c-accordion__button"]} u-flex`]: !s,
    [i]: i,
    [n]: o
  }),
  onClick: r,
  "data-type": f,
  ...d,
  children: [e, l && l(n)]
});
ai.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  id: a.exports.number,
  onExpanded: a.exports.func,
  isExpanded: a.exports.bool,
  expanded: a.exports.string,
  addClass: a.exports.string,
  icon: a.exports.func,
  defaultStyle: a.exports.bool,
  __TYPE: xe("AccordionButton")
};
ai.defaultProps = {
  __TYPE: "AccordionButton"
};
const ii = ({
  children: e,
  id: t,
  isOpen: r,
  onToggle: n,
  addClass: o,
  defaultStyle: i,
  allowDifferentChildren: l
}) => {
  const s = () => n(t), f = () => typeof r == "number" ? r === t : Array.isArray(r) ? !!r.includes(t) : !1, d = Ae.map(e, (c) => lt(c) ? c.props.__TYPE === "AccordionButton" ? De(c, {
    ...c.props,
    id: t,
    onExpanded: s,
    isExpanded: f()
  }) : De(c, {
    ...c.props,
    id: t,
    isExpanded: f()
  }) : null);
  return /* @__PURE__ */ p("div", {
    className: re({
      [Jr["c-accordion__item"]]: !i,
      [o]: o
    }),
    children: l ? d : Ze(d, ["AccordionButton", "AccordionPanel"])
  });
};
ii.propTypes = {
  children: a.exports.arrayOf(a.exports.element),
  id: a.exports.number,
  isOpen: a.exports.oneOfType([a.exports.array, a.exports.number]),
  onToggle: a.exports.func,
  addClass: a.exports.string,
  defaultStyle: a.exports.bool,
  allowDifferentChildren: a.exports.bool,
  __TYPE: xe("AccordionItem")
};
ii.defaultProps = {
  __TYPE: "AccordionItem"
};
const si = ({
  children: e,
  id: t,
  isExpanded: r,
  addClass: n,
  defaultStyle: o,
  __TYPE: i,
  ...l
}) => /* @__PURE__ */ p("div", {
  id: `accordion-panel-${t}`,
  role: "region",
  "aria-hidden": !r,
  "aria-labelledby": `accordion-button-${t}`,
  "data-type": i,
  className: re(Jr["c-accordion__panel"], {
    [n]: n
  }),
  ...l,
  children: /* @__PURE__ */ p("div", {
    className: re({
      [Jr["c-accordion__panel-content"]]: !o
    }),
    children: e
  })
});
si.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  id: a.exports.number,
  isExpanded: a.exports.bool,
  addClass: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("AccordionPanel")
};
si.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Ur = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, oc = /\w+\.svg/gi, Ce = ({
  children: e,
  path: t,
  size: r,
  addClass: n,
  viewBox: o,
  width: i,
  height: l,
  __TYPE: s,
  ...f
}) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", {
      children: "Doesn't exist"
    });
  if (Ae.count(e) > 1)
    return /* @__PURE__ */ p("span", {
      children: "Only have one children"
    });
  const d = t && t.match(oc).toString().replace(/.svg/gi, ""), c = `${t}#${d}`;
  return e ? De(e, {
    ...e.props,
    className: `${Ur["c-icon"]} ${Ur[`c-${r}`]} ${n != null ? n : ""}`,
    "aria-hidden": !0,
    "data-testid": d,
    "data-component": s
  }) : /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: l,
    viewBox: o,
    className: `${Ur["c-icon"]} ${Ur[`c-${r}`]} ${n != null ? n : ""}`,
    "aria-hidden": "true",
    "data-testid": d,
    "data-component": s,
    ...f,
    children: /* @__PURE__ */ p("use", {
      xlinkHref: c
    })
  });
};
Ce.propTypes = {
  children: a.exports.oneOfType([a.exports.element, a.exports.node]),
  path: a.exports.string,
  size: a.exports.oneOf(["small", "normal", "big"]),
  addClass: a.exports.string,
  viewBox: a.exports.string,
  height: a.exports.string,
  width: a.exports.string,
  __TYPE: xe("Icon")
};
Ce.defaultProps = {
  size: "normal",
  viewBox: "0 0 48 48",
  height: "48",
  width: "48",
  __TYPE: "Icon"
};
const mr = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, Ut = xt((e, t) => {
  const {
    label: r,
    size: n,
    icon: o,
    type: i,
    variant: l,
    hasAriaLabel: s,
    disabled: f,
    onClick: d,
    children: c,
    addClass: u,
    defaultStyle: v,
    ...h
  } = e;
  return /* @__PURE__ */ F("button", {
    ref: t,
    className: re({
      [`${mr["c-button"]} ${mr[`c-${l}`]} ${mr[`c-${n}`]}`]: !v,
      [mr["c-round"]]: o && o.path && s,
      [mr["c-reverse"]]: o && o.position === "right",
      [u]: u
    }),
    disabled: f,
    type: i,
    onClick: d,
    ...s && {
      "aria-label": `${r}`
    },
    ...h,
    children: [c, o && /* @__PURE__ */ p(Ce, {
      path: o.path,
      size: o.size
    }), s ? null : r]
  });
});
Ut.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  label: a.exports.string,
  size: a.exports.oneOf(["small", "normal", "big"]),
  variant: a.exports.oneOf(["primary", "secondary", "no-line"]),
  type: a.exports.oneOf(["button", "submit", "reset"]),
  hasAriaLabel: a.exports.bool,
  icon: a.exports.shape({
    path: a.exports.string,
    size: a.exports.oneOf(["small", "normal", "big"]),
    position: a.exports.oneOf(["left", "right"])
  }),
  disabled: a.exports.bool,
  onClick: a.exports.func,
  addClass: a.exports.string,
  defaultStyle: a.exports.bool
};
Ut.defaultProps = {
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const ac = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), ci = (e) => {
  const { root: t, rootMargin: r, threshold: n } = e || ac, [o, i] = te(!1), [l, s] = te(null);
  return J(() => {
    if (!l) {
      i(!1);
      return;
    }
    const f = new IntersectionObserver(
      ([d]) => {
        i(d.isIntersecting);
      },
      {
        root: t,
        rootMargin: r,
        threshold: n
      }
    );
    return f.observe(l), () => {
      f.unobserve(l);
    };
  }, [n, r, t, l]), [s, o];
}, Qt = {
  "c-audio": "_c-audio_c6ix7_1",
  "c-audio--small": "_c-audio--small_c6ix7_15",
  "c-audio--hidden": "_c-audio--hidden_c6ix7_33",
  "c-button": "_c-button_c6ix7_37",
  "is-button-paused": "_is-button-paused_c6ix7_62",
  "is-button-playing": "_is-button-playing_c6ix7_70"
}, ic = Object.freeze({
  BUTTON: "Button",
  BAR: "Bar"
}), li = ({
  src: e,
  format: t,
  a11y: r,
  size: n,
  type: o,
  addClass: i,
  defaultStyle: l,
  ...s
}) => {
  const [f, d] = te(!1), c = ee(), u = ee(), [v, h] = ci(), b = (x) => {
    !c.current || (c.current.paused ? c.current.play() : c.current.pause(), d(!f));
  };
  return J(() => {
    (f || !c.current.paused) && !h && (d(!f), c.current.pause(), c.current.currentTime = 0);
  }, [h]), un(() => {
    const x = u.current || c.current;
    x && v(x);
  }, [c, u]), o === ic.BAR ? /* @__PURE__ */ p("audio", {
    ref: c,
    preload: "metadata",
    controls: !0,
    className: re({
      [Qt["c-audio"]]: !l,
      [Qt[`c-audio--${n}`]]: n,
      [i]: i
    }),
    "data-a11y": r,
    ...s,
    children: /* @__PURE__ */ p("source", {
      src: e,
      type: t
    })
  }) : /* @__PURE__ */ F(mt, {
    children: [/* @__PURE__ */ p("audio", {
      ref: c,
      src: e,
      type: t,
      onEnded: () => d(!f),
      className: Qt["c-audio--hidden"]
    }), /* @__PURE__ */ p(Ut, {
      ref: u,
      label: f ? "Pausar" : "Reproduccir",
      "data-a11y": r,
      addClass: re({
        [Qt["c-button"]]: !l,
        [Qt["is-button-playing"]]: f,
        [Qt["is-button-paused"]]: !f,
        [i]: i
      }),
      onClick: b,
      hasAriaLabel: !0,
      ...l && {
        defaultStyle: l
      },
      ...r && {
        disabled: r
      },
      ...s
    })]
  });
};
li.defaultProps = {
  a11y: !1,
  type: "Bar"
};
li.propTypes = {
  src: a.exports.string,
  a11y: a.exports.bool,
  format: a.exports.string,
  size: a.exports.oneOf(["small"]),
  type: a.exports.oneOf(["Bar", "Button"]),
  addClass: a.exports.string,
  defaultStyle: a.exports.bool
};
var sc = typeof zr == "object" && zr && zr.Object === Object && zr, cc = sc, lc = cc, uc = typeof self == "object" && self && self.Object === Object && self, fc = lc || uc || Function("return this")(), dc = fc, pc = dc, vc = pc.Symbol, wo = vc;
function hc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var gc = hc, mc = Array.isArray, bc = mc, ra = wo, ui = Object.prototype, yc = ui.hasOwnProperty, _c = ui.toString, br = ra ? ra.toStringTag : void 0;
function xc(e) {
  var t = yc.call(e, br), r = e[br];
  try {
    e[br] = void 0;
    var n = !0;
  } catch {
  }
  var o = _c.call(e);
  return n && (t ? e[br] = r : delete e[br]), o;
}
var wc = xc, Tc = Object.prototype, Ec = Tc.toString;
function Oc(e) {
  return Ec.call(e);
}
var Sc = Oc, na = wo, Pc = wc, Rc = Sc, Cc = "[object Null]", Dc = "[object Undefined]", oa = na ? na.toStringTag : void 0;
function Ac(e) {
  return e == null ? e === void 0 ? Dc : Cc : oa && oa in Object(e) ? Pc(e) : Rc(e);
}
var Ic = Ac;
function Nc(e) {
  return e != null && typeof e == "object";
}
var $c = Nc, Mc = Ic, kc = $c, jc = "[object Symbol]";
function Lc(e) {
  return typeof e == "symbol" || kc(e) && Mc(e) == jc;
}
var Fc = Lc, aa = wo, qc = gc, Bc = bc, Vc = Fc, Yc = 1 / 0, ia = aa ? aa.prototype : void 0, sa = ia ? ia.toString : void 0;
function fi(e) {
  if (typeof e == "string")
    return e;
  if (Bc(e))
    return qc(e, fi) + "";
  if (Vc(e))
    return sa ? sa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Yc ? "-0" : t;
}
var Wc = fi, zc = Wc;
function Uc(e) {
  return e == null ? "" : zc(e);
}
var Hc = Uc, Gc = Hc, Zc = 0;
function Xc(e) {
  var t = ++Zc;
  return Gc(e) + t;
}
var di = Xc;
const Jt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, pi = xt(({
  id: e,
  name: t,
  type: r,
  label: n,
  state: o,
  value: i,
  addClass: l,
  isDisabled: s,
  defaultChecked: f,
  onChange: d,
  __TYPE: c,
  inherit: u,
  ...v
}, h) => {
  const b = Ee(() => e || di(`ui-${r}`), [e, r]), x = Object.freeze({
    right: r === "checkbox" ? /* @__PURE__ */ p("path", {
      id: "done_all",
      d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z"
    }) : /* @__PURE__ */ p("path", {
      id: "check",
      d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
    }),
    wrong: /* @__PURE__ */ p("path", {
      id: "close",
      d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
    }),
    normal: r === "checkbox" ? /* @__PURE__ */ p("path", {
      id: "check",
      d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
    }) : null
  }), w = ({
    target: E
  }) => {
    if (!!d) {
      if (E.checked) {
        d({
          id: E.id,
          value: E.value
        });
        return;
      }
      d({
        id: E.id,
        value: ""
      });
    }
  };
  return /* @__PURE__ */ F("label", {
    htmlFor: b,
    className: `${Jt["c-input"]} u-flex ${l != null ? l : ""}`,
    "data-state": o,
    "data-type": r,
    "data-element": c,
    ...!u && {
      ...v
    },
    children: [/* @__PURE__ */ F("div", {
      className: Jt["c-input__box"],
      children: [/* @__PURE__ */ p("input", {
        id: b,
        ref: h,
        type: r,
        name: t,
        value: i,
        "data-state": o,
        className: Jt["c-input__check"],
        onChange: w,
        ...s && {
          disabled: !0
        },
        ...u && {
          ...v
        },
        ...f && {
          checked: !0
        }
      }), /* @__PURE__ */ p("div", {
        className: `${Jt["c-input__icon"]} ${f ? Jt["c-input-defaultChecked"] : ""} `,
        children: x[o] && /* @__PURE__ */ p(Ce, {
          children: /* @__PURE__ */ p("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            children: x[o]
          })
        })
      })]
    }), /* @__PURE__ */ p("span", {
      className: Jt["c-input__label"],
      children: n
    })]
  });
});
pi.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
pi.propTypes = {
  id: a.exports.string,
  name: a.exports.string,
  type: a.exports.oneOf(["radio", "checkbox"]),
  label: a.exports.string.isRequired,
  state: a.exports.oneOf(["normal", "right", "wrong"]),
  value: a.exports.oneOfType([a.exports.string, a.exports.number, a.exports.bool]),
  addClass: a.exports.string,
  isDisabled: a.exports.bool,
  defaultChecked: a.exports.bool,
  inherit: a.exports.bool,
  onChange: a.exports.func,
  __TYPE: xe("CheckBox")
};
const Kc = ({
  legend: e,
  children: t,
  onChecked: r,
  addClass: n
}) => {
  const [o, i] = te([]), l = ee(), s = (u) => {
    l.current = u || "";
  }, f = (u) => l.current === "radio" ? [{
    ...u
  }] : o.filter((h) => h.id === u.id).length ? [...o.filter((h) => h.id !== u.id)] : [...o, {
    ...u
  }], d = (u) => {
    const v = f(u);
    r && r(v), i(v);
  }, c = Ae.map(t, (u) => lt(u) ? u.props.__TYPE === "CheckBox" ? (u.props.type && s(u.props.type), De(u, {
    ...u.props,
    onChange: d
  })) : u : null);
  return /* @__PURE__ */ F("fieldset", {
    ...n && {
      className: `${n}`
    },
    children: [/* @__PURE__ */ p("legend", {
      children: e
    }), /* @__PURE__ */ p("div", {
      className: "u-flow",
      children: Ze(c, ["CheckBox"])
    })]
  });
};
Kc.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element]),
  legend: a.exports.string,
  onChecked: a.exports.func,
  addClass: a.exports.string
};
const Qc = "_col_wu095_1", Jc = {
  col: Qc
}, el = xt(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ p("div", {
  ref: r,
  className: `${Jc.col} ${e != null ? e : ""}`,
  ...t
}));
el.propTypes = {
  addClass: a.exports.string
};
const tl = {
  "c-content": "_c-content_u325r_1"
}, rl = ({
  children: e,
  addClass: t,
  defaultStyle: r,
  ...n
}) => /* @__PURE__ */ p("section", {
  className: re({
    [tl["c-content"]]: !r,
    [t]: t
  }),
  ...n,
  children: e
});
rl.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.arrayOf(a.exports.node), a.exports.node]),
  defaultStyle: a.exports.bool,
  addClass: a.exports.string
};
const dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function lr(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
function To(e) {
  return "nodeType" in e;
}
function Xe(e) {
  var t, r;
  return e ? lr(e) ? e : To(e) && (t = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? t : window : window;
}
function Eo(e) {
  const {
    Document: t
  } = Xe(e);
  return e instanceof t;
}
function Mr(e) {
  return lr(e) ? !1 : e instanceof Xe(e).HTMLElement;
}
function nl(e) {
  return e instanceof Xe(e).SVGElement;
}
function ur(e) {
  return e ? lr(e) ? e.document : To(e) ? Eo(e) ? e : Mr(e) ? e.ownerDocument : document : document : document;
}
const St = dn ? un : J;
function Oo(e) {
  const t = ee(e);
  return St(() => {
    t.current = e;
  }), Fe(function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
function ol() {
  const e = ee(null), t = Fe((n, o) => {
    e.current = setInterval(n, o);
  }, []), r = Fe(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, r];
}
function Cr(e, t) {
  t === void 0 && (t = [e]);
  const r = ee(e);
  return St(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function kr(e, t) {
  const r = ee();
  return Ee(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    [...t]
  );
}
function en(e) {
  const t = Oo(e), r = ee(null), n = Fe(
    (o) => {
      o !== r.current && (t == null || t(o, r.current)), r.current = o;
    },
    []
  );
  return [r, n];
}
function co(e) {
  const t = ee();
  return J(() => {
    t.current = e;
  }, [e]), t.current;
}
let jn = {};
function pn(e, t) {
  return Ee(() => {
    if (t)
      return t;
    const r = jn[e] == null ? 0 : jn[e] + 1;
    return jn[e] = r, e + "-" + r;
  }, [e, t]);
}
function vi(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return n.reduce((i, l) => {
      const s = Object.entries(l);
      for (const [f, d] of s) {
        const c = i[f];
        c != null && (i[f] = c + e * d);
      }
      return i;
    }, {
      ...t
    });
  };
}
const rr = /* @__PURE__ */ vi(1), tn = /* @__PURE__ */ vi(-1);
function al(e) {
  return "clientX" in e && "clientY" in e;
}
function hi(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Xe(e.target);
  return t && e instanceof t;
}
function il(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Xe(e.target);
  return t && e instanceof t;
}
function lo(e) {
  if (il(e)) {
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
  return al(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const uo = /* @__PURE__ */ Object.freeze({
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
        return [uo.Translate.toString(e), uo.Scale.toString(e)].join(" ");
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
}), ca = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function sl(e) {
  return e.matches(ca) ? e : e.querySelector(ca);
}
const cl = {
  display: "none"
};
function ll(e) {
  let {
    id: t,
    value: r
  } = e;
  return /* @__PURE__ */ p("div", {
    id: t,
    style: cl,
    children: r
  });
}
const ul = {
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
function fl(e) {
  let {
    id: t,
    announcement: r
  } = e;
  return /* @__PURE__ */ p("div", {
    id: t,
    style: ul,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0,
    children: r
  });
}
function dl() {
  const [e, t] = te("");
  return {
    announce: Fe((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const gi = /* @__PURE__ */ ut(null);
function pl(e) {
  const t = Pe(gi);
  J(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function vl() {
  const [e] = te(() => /* @__PURE__ */ new Set()), t = Fe((n) => (e.add(n), () => e.delete(n)), [e]);
  return [Fe((n) => {
    let {
      type: o,
      event: i
    } = n;
    e.forEach((l) => {
      var s;
      return (s = l[o]) == null ? void 0 : s.call(l, i);
    });
  }, [e]), t];
}
const hl = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, gl = {
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
function ml(e) {
  let {
    announcements: t = gl,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: o = hl
  } = e;
  const {
    announce: i,
    announcement: l
  } = dl(), s = pn("DndLiveRegion"), [f, d] = te(!1);
  if (J(() => {
    d(!0);
  }, []), pl(Ee(() => ({
    onDragStart(u) {
      let {
        active: v
      } = u;
      i(t.onDragStart({
        active: v
      }));
    },
    onDragMove(u) {
      let {
        active: v,
        over: h
      } = u;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: h
      }));
    },
    onDragOver(u) {
      let {
        active: v,
        over: h
      } = u;
      i(t.onDragOver({
        active: v,
        over: h
      }));
    },
    onDragEnd(u) {
      let {
        active: v,
        over: h
      } = u;
      i(t.onDragEnd({
        active: v,
        over: h
      }));
    },
    onDragCancel(u) {
      let {
        active: v,
        over: h
      } = u;
      i(t.onDragCancel({
        active: v,
        over: h
      }));
    }
  }), [i, t])), !f)
    return null;
  const c = /* @__PURE__ */ F(mt, {
    children: [/* @__PURE__ */ p(ll, {
      id: n,
      value: o.draggable
    }), /* @__PURE__ */ p(fl, {
      id: s,
      announcement: l
    })]
  });
  return r ? ti(c, r) : c;
}
var Ie;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Ie || (Ie = {}));
function rn() {
}
function Ln(e, t) {
  return Ee(
    () => ({
      sensor: e,
      options: t != null ? t : {}
    }),
    [e, t]
  );
}
function bl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Ee(
    () => [...t].filter((n) => n != null),
    [...t]
  );
}
const bt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function yl(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function _l(e, t) {
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
function xl(e, t) {
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
function la(e) {
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
function mi(e, t) {
  if (!e || e.length === 0)
    return null;
  const [r] = e;
  return t ? r[t] : r;
}
const wl = (e) => {
  let {
    collisionRect: t,
    droppableRects: r,
    droppableContainers: n
  } = e;
  const o = la(t), i = [];
  for (const l of n) {
    const {
      id: s
    } = l, f = r.get(s);
    if (f) {
      const d = la(f), c = o.reduce((v, h, b) => v + yl(d[b], h), 0), u = Number((c / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: l,
          value: u
        }
      });
    }
  }
  return i.sort(_l);
};
function Tl(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), l = o - n, s = i - r;
  if (n < o && r < i) {
    const f = t.width * t.height, d = e.width * e.height, c = l * s, u = c / (f + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const El = (e) => {
  let {
    collisionRect: t,
    droppableRects: r,
    droppableContainers: n
  } = e;
  const o = [];
  for (const i of n) {
    const {
      id: l
    } = i, s = r.get(l);
    if (s) {
      const f = Tl(s, t);
      f > 0 && o.push({
        id: l,
        data: {
          droppableContainer: i,
          value: f
        }
      });
    }
  }
  return o.sort(xl);
};
function Ol(e, t, r) {
  return {
    ...e,
    scaleX: t && r ? t.width / r.width : 1,
    scaleY: t && r ? t.height / r.height : 1
  };
}
function bi(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : bt;
}
function Sl(e) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return o.reduce((l, s) => ({
      ...l,
      top: l.top + e * s.y,
      bottom: l.bottom + e * s.y,
      left: l.left + e * s.x,
      right: l.right + e * s.x
    }), {
      ...r
    });
  };
}
const Pl = /* @__PURE__ */ Sl(1);
function Rl(e) {
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
function Cl(e, t, r) {
  const n = Rl(t);
  if (!n)
    return e;
  const {
    scaleX: o,
    scaleY: i,
    x: l,
    y: s
  } = n, f = e.left - l - (1 - o) * parseFloat(r), d = e.top - s - (1 - i) * parseFloat(r.slice(r.indexOf(" ") + 1)), c = o ? e.width / o : e.width, u = i ? e.height / i : e.height;
  return {
    width: c,
    height: u,
    top: d,
    right: f + c,
    bottom: d + u,
    left: f
  };
}
const Dl = {
  ignoreTransform: !1
};
function jr(e, t) {
  t === void 0 && (t = Dl);
  let r = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      getComputedStyle: d
    } = Xe(e), {
      transform: c,
      transformOrigin: u
    } = d(e);
    c && (r = Cl(r, c, u));
  }
  const {
    top: n,
    left: o,
    width: i,
    height: l,
    bottom: s,
    right: f
  } = r;
  return {
    top: n,
    left: o,
    width: i,
    height: l,
    bottom: s,
    right: f
  };
}
function ua(e) {
  return jr(e, {
    ignoreTransform: !0
  });
}
function Al(e) {
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
function Il(e, t) {
  return t === void 0 && (t = Xe(e).getComputedStyle(e)), t.position === "fixed";
}
function Nl(e, t) {
  t === void 0 && (t = Xe(e).getComputedStyle(e));
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? r.test(i) : !1;
  });
}
function So(e, t) {
  const r = [];
  function n(o) {
    if (t != null && r.length >= t || !o)
      return r;
    if (Eo(o) && o.scrollingElement != null && !r.includes(o.scrollingElement))
      return r.push(o.scrollingElement), r;
    if (!Mr(o) || nl(o) || r.includes(o))
      return r;
    const {
      getComputedStyle: i
    } = Xe(o), l = i(o);
    return o !== e && Nl(o, l) && r.push(o), Il(o, l) ? r : n(o.parentNode);
  }
  return e ? n(e) : r;
}
function yi(e) {
  const [t] = So(e, 1);
  return t != null ? t : null;
}
function Fn(e) {
  return !dn || !e ? null : lr(e) ? e : To(e) ? Eo(e) || e === ur(e).scrollingElement ? window : Mr(e) ? e : null : null;
}
function _i(e) {
  return lr(e) ? e.scrollX : e.scrollLeft;
}
function xi(e) {
  return lr(e) ? e.scrollY : e.scrollTop;
}
function fo(e) {
  return {
    x: _i(e),
    y: xi(e)
  };
}
var Ne;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ne || (Ne = {}));
function wi(e) {
  return !dn || !e ? !1 : e === document.scrollingElement;
}
function Ti(e) {
  const t = {
    x: 0,
    y: 0
  }, r = wi(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, n = {
    x: e.scrollWidth - r.width,
    y: e.scrollHeight - r.height
  }, o = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, l = e.scrollTop >= n.y, s = e.scrollLeft >= n.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: l,
    isRight: s,
    maxScroll: n,
    minScroll: t
  };
}
const $l = {
  x: 0.2,
  y: 0.2
};
function Ml(e, t, r, n, o) {
  let {
    top: i,
    left: l,
    right: s,
    bottom: f
  } = r;
  n === void 0 && (n = 10), o === void 0 && (o = $l);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: v
  } = Ti(e), h = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, x = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !d && i <= t.top + x.height ? (h.y = Ne.Backward, b.y = n * Math.abs((t.top + x.height - i) / x.height)) : !c && f >= t.bottom - x.height && (h.y = Ne.Forward, b.y = n * Math.abs((t.bottom - x.height - f) / x.height)), !v && s >= t.right - x.width ? (h.x = Ne.Forward, b.x = n * Math.abs((t.right - x.width - s) / x.width)) : !u && l <= t.left + x.width && (h.x = Ne.Backward, b.x = n * Math.abs((t.left + x.width - l) / x.width)), {
    direction: h,
    speed: b
  };
}
function kl(e) {
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
function Ei(e) {
  return e.reduce((t, r) => rr(t, fo(r)), bt);
}
function jl(e) {
  return e.reduce((t, r) => t + _i(r), 0);
}
function Ll(e) {
  return e.reduce((t, r) => t + xi(r), 0);
}
function Fl(e, t) {
  if (t === void 0 && (t = jr), !e)
    return;
  const {
    top: r,
    left: n,
    bottom: o,
    right: i
  } = t(e);
  !yi(e) || (o <= 0 || i <= 0 || r >= window.innerHeight || n >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const ql = [["x", ["left", "right"], jl], ["y", ["top", "bottom"], Ll]];
class Po {
  constructor(t, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = So(r), o = Ei(n);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, l, s] of ql)
      for (const f of l)
        Object.defineProperty(this, f, {
          get: () => {
            const d = s(n), c = o[i] - d;
            return this.rect[f] + c;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Tr {
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
function Bl(e) {
  const {
    EventTarget: t
  } = Xe(e);
  return e instanceof t ? e : ur(e);
}
function qn(e, t) {
  const r = Math.abs(e.x), n = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(r ** 2 + n ** 2) > t : "x" in t && "y" in t ? r > t.x && n > t.y : "x" in t ? r > t.x : "y" in t ? n > t.y : !1;
}
var it;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(it || (it = {}));
function fa(e) {
  e.preventDefault();
}
function Vl(e) {
  e.stopPropagation();
}
var fe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(fe || (fe = {}));
const Oi = {
  start: [fe.Space, fe.Enter],
  cancel: [fe.Esc],
  end: [fe.Space, fe.Enter]
}, Yl = (e, t) => {
  let {
    currentCoordinates: r
  } = t;
  switch (e.code) {
    case fe.Right:
      return {
        ...r,
        x: r.x + 25
      };
    case fe.Left:
      return {
        ...r,
        x: r.x - 25
      };
    case fe.Down:
      return {
        ...r,
        y: r.y + 25
      };
    case fe.Up:
      return {
        ...r,
        y: r.y - 25
      };
  }
};
class Ro {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: r
      }
    } = t;
    this.props = t, this.listeners = new Tr(ur(r)), this.windowListeners = new Tr(Xe(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(it.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: r
    } = this.props, n = t.node.current;
    n && Fl(n), r(bt);
  }
  handleKeyDown(t) {
    if (hi(t)) {
      const {
        active: r,
        context: n,
        options: o
      } = this.props, {
        keyboardCodes: i = Oi,
        coordinateGetter: l = Yl,
        scrollBehavior: s = "smooth"
      } = o, {
        code: f
      } = t;
      if (i.end.includes(f)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(f)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: d
      } = n.current, c = d ? {
        x: d.left,
        y: d.top
      } : bt;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const u = l(t, {
        active: r,
        context: n.current,
        currentCoordinates: c
      });
      if (u) {
        const v = tn(u, c), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = n.current;
        for (const x of b) {
          const w = t.code, {
            isTop: E,
            isRight: $,
            isLeft: D,
            isBottom: N,
            maxScroll: g,
            minScroll: L
          } = Ti(x), A = kl(x), j = {
            x: Math.min(w === fe.Right ? A.right - A.width / 2 : A.right, Math.max(w === fe.Right ? A.left : A.left + A.width / 2, u.x)),
            y: Math.min(w === fe.Down ? A.bottom - A.height / 2 : A.bottom, Math.max(w === fe.Down ? A.top : A.top + A.height / 2, u.y))
          }, z = w === fe.Right && !$ || w === fe.Left && !D, G = w === fe.Down && !N || w === fe.Up && !E;
          if (z && j.x !== u.x) {
            const Y = x.scrollLeft + v.x, W = w === fe.Right && Y <= g.x || w === fe.Left && Y >= L.x;
            if (W && !v.y) {
              x.scrollTo({
                left: Y,
                behavior: s
              });
              return;
            }
            W ? h.x = x.scrollLeft - Y : h.x = w === fe.Right ? x.scrollLeft - g.x : x.scrollLeft - L.x, h.x && x.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (G && j.y !== u.y) {
            const Y = x.scrollTop + v.y, W = w === fe.Down && Y <= g.y || w === fe.Up && Y >= L.y;
            if (W && !v.x) {
              x.scrollTo({
                top: Y,
                behavior: s
              });
              return;
            }
            W ? h.y = x.scrollTop - Y : h.y = w === fe.Down ? x.scrollTop - g.y : x.scrollTop - L.y, h.y && x.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, rr(tn(u, this.referenceCoordinates), h));
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
Ro.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, r) => {
    let {
      keyboardCodes: n = Oi,
      onActivation: o
    } = t, {
      active: i
    } = r;
    const {
      code: l
    } = e.nativeEvent;
    if (n.start.includes(l)) {
      const s = i.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), o == null || o({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function da(e) {
  return Boolean(e && "distance" in e);
}
function pa(e) {
  return Boolean(e && "delay" in e);
}
class Co {
  constructor(t, r, n) {
    var o;
    n === void 0 && (n = Bl(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = r;
    const {
      event: i
    } = t, {
      target: l
    } = i;
    this.props = t, this.events = r, this.document = ur(l), this.documentListeners = new Tr(this.document), this.listeners = new Tr(n), this.windowListeners = new Tr(Xe(l)), this.initialCoordinates = (o = lo(i)) != null ? o : bt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(it.Resize, this.handleCancel), this.windowListeners.add(it.DragStart, fa), this.windowListeners.add(it.VisibilityChange, this.handleCancel), this.windowListeners.add(it.ContextMenu, fa), this.documentListeners.add(it.Keydown, this.handleKeydown), r) {
      if (da(r))
        return;
      if (pa(r)) {
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
    t && (this.activated = !0, this.documentListeners.add(it.Click, Vl, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(it.SelectionChange, this.removeTextSelection), r(t));
  }
  handleMove(t) {
    var r;
    const {
      activated: n,
      initialCoordinates: o,
      props: i
    } = this, {
      onMove: l,
      options: {
        activationConstraint: s
      }
    } = i;
    if (!o)
      return;
    const f = (r = lo(t)) != null ? r : bt, d = tn(o, f);
    if (!n && s) {
      if (pa(s))
        return qn(d, s.tolerance) ? this.handleCancel() : void 0;
      if (da(s))
        return s.tolerance != null && qn(d, s.tolerance) ? this.handleCancel() : qn(d, s.distance) ? this.handleStart() : void 0;
    }
    t.cancelable && t.preventDefault(), l(f);
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
    t.code === fe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Wl = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Si extends Co {
  constructor(t) {
    const {
      event: r
    } = t, n = ur(r.target);
    super(t, Wl, n);
  }
}
Si.activators = [{
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
const zl = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var po;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(po || (po = {}));
class Pi extends Co {
  constructor(t) {
    super(t, zl, ur(t.event.target));
  }
}
Pi.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    return r.button === po.RightClick ? !1 : (n == null || n({
      event: r
    }), !0);
  }
}];
const Bn = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Ri extends Co {
  constructor(t) {
    super(t, Bn);
  }
  static setup() {
    return window.addEventListener(Bn.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Bn.move.name, t);
    };
    function t() {
    }
  }
}
Ri.activators = [{
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
var Er;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Er || (Er = {}));
var nn;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(nn || (nn = {}));
function Ul(e) {
  let {
    acceleration: t,
    activator: r = Er.Pointer,
    canScroll: n,
    draggingRect: o,
    enabled: i,
    interval: l = 5,
    order: s = nn.TreeOrder,
    pointerCoordinates: f,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: v
  } = e;
  const h = Gl({
    delta: u,
    disabled: !i
  }), [b, x] = ol(), w = ee({
    x: 0,
    y: 0
  }), E = ee({
    x: 0,
    y: 0
  }), $ = Ee(() => {
    switch (r) {
      case Er.Pointer:
        return f ? {
          top: f.y,
          bottom: f.y,
          left: f.x,
          right: f.x
        } : null;
      case Er.DraggableRect:
        return o;
    }
  }, [r, o, f]), D = ee(null), N = Fe(() => {
    const L = D.current;
    if (!L)
      return;
    const A = w.current.x * E.current.x, j = w.current.y * E.current.y;
    L.scrollBy(A, j);
  }, []), g = Ee(() => s === nn.TreeOrder ? [...d].reverse() : d, [s, d]);
  J(
    () => {
      if (!i || !d.length || !$) {
        x();
        return;
      }
      for (const L of g) {
        if ((n == null ? void 0 : n(L)) === !1)
          continue;
        const A = d.indexOf(L), j = c[A];
        if (!j)
          continue;
        const {
          direction: z,
          speed: G
        } = Ml(L, j, $, t, v);
        for (const Y of ["x", "y"])
          h[Y][z[Y]] || (G[Y] = 0, z[Y] = 0);
        if (G.x > 0 || G.y > 0) {
          x(), D.current = L, b(N, l), w.current = G, E.current = z;
          return;
        }
      }
      w.current = {
        x: 0,
        y: 0
      }, E.current = {
        x: 0,
        y: 0
      }, x();
    },
    [
      t,
      N,
      n,
      x,
      i,
      l,
      JSON.stringify($),
      JSON.stringify(h),
      b,
      d,
      g,
      c,
      JSON.stringify(v)
    ]
  );
}
const Hl = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function Gl(e) {
  let {
    delta: t,
    disabled: r
  } = e;
  const n = co(t);
  return kr((o) => {
    if (r || !n || !o)
      return Hl;
    const i = {
      x: Math.sign(t.x - n.x),
      y: Math.sign(t.y - n.y)
    };
    return {
      x: {
        [Ne.Backward]: o.x[Ne.Backward] || i.x === -1,
        [Ne.Forward]: o.x[Ne.Forward] || i.x === 1
      },
      y: {
        [Ne.Backward]: o.y[Ne.Backward] || i.y === -1,
        [Ne.Forward]: o.y[Ne.Forward] || i.y === 1
      }
    };
  }, [r, t, n]);
}
function Zl(e, t) {
  const r = t !== null ? e.get(t) : void 0, n = r ? r.node.current : null;
  return kr((o) => {
    var i;
    return t === null ? null : (i = n != null ? n : o) != null ? i : null;
  }, [n, t]);
}
function Xl(e, t) {
  return Ee(() => e.reduce((r, n) => {
    const {
      sensor: o
    } = n, i = o.activators.map((l) => ({
      eventName: l.eventName,
      handler: t(l.handler, n)
    }));
    return [...r, ...i];
  }, []), [e, t]);
}
var Dr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Dr || (Dr = {}));
var vo;
(function(e) {
  e.Optimized = "optimized";
})(vo || (vo = {}));
const va = /* @__PURE__ */ new Map();
function Kl(e, t) {
  let {
    dragging: r,
    dependencies: n,
    config: o
  } = t;
  const [i, l] = te(null), s = i != null, {
    frequency: f,
    measure: d,
    strategy: c
  } = o, u = ee(e), v = E(), h = Cr(v), b = Fe(function($) {
    $ === void 0 && ($ = []), !h.current && l((D) => D ? D.concat($) : $);
  }, [h]), x = ee(null), w = kr(($) => {
    if (v && !r)
      return va;
    const D = i;
    if (!$ || $ === va || u.current !== e || D != null) {
      const N = /* @__PURE__ */ new Map();
      for (let g of e) {
        if (!g)
          continue;
        if (D && D.length > 0 && !D.includes(g.id) && g.rect.current) {
          N.set(g.id, g.rect.current);
          continue;
        }
        const L = g.node.current, A = L ? new Po(d(L), L) : null;
        g.rect.current = A, A && N.set(g.id, A);
      }
      return N;
    }
    return $;
  }, [e, i, r, v, d]);
  return J(() => {
    u.current = e;
  }, [e]), J(
    () => {
      v || requestAnimationFrame(() => b());
    },
    [r, v]
  ), J(() => {
    s && l(null);
  }, [s]), J(
    () => {
      v || typeof f != "number" || x.current !== null || (x.current = setTimeout(() => {
        b(), x.current = null;
      }, f));
    },
    [f, v, b, ...n]
  ), {
    droppableRects: w,
    measureDroppableContainers: b,
    measuringScheduled: s
  };
  function E() {
    switch (c) {
      case Dr.Always:
        return !1;
      case Dr.BeforeDragging:
        return r;
      default:
        return !r;
    }
  }
}
function Ci(e, t) {
  return kr((r) => e ? r || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Ql(e, t) {
  return Ci(e, t);
}
function Jl(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = Oo(t), o = Ee(() => {
    if (r || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(n);
  }, [n, r]);
  return J(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function vn(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = Oo(t), o = Ee(
    () => {
      if (r || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(n);
    },
    [r]
  );
  return J(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function eu(e) {
  return new Po(jr(e), e);
}
function ha(e, t, r) {
  t === void 0 && (t = eu);
  const [n, o] = _o(s, null), i = Jl({
    callback(f) {
      if (!!e)
        for (const d of f) {
          const {
            type: c,
            target: u
          } = d;
          if (c === "childList" && u instanceof HTMLElement && u.contains(e)) {
            o();
            break;
          }
        }
    }
  }), l = vn({
    callback: o
  });
  return St(() => {
    o(), e ? (l == null || l.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (l == null || l.disconnect(), i == null || i.disconnect());
  }, [e]), n;
  function s(f) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var d;
      return (d = f != null ? f : r) != null ? d : null;
    }
    const c = t(e);
    return JSON.stringify(f) === JSON.stringify(c) ? f : c;
  }
}
function tu(e) {
  const t = Ci(e);
  return bi(e, t);
}
const ga = [];
function ru(e) {
  const t = ee(e), r = kr((n) => e ? n && n !== ga && e && t.current && e.parentNode === t.current.parentNode ? n : So(e) : ga, [e]);
  return J(() => {
    t.current = e;
  }, [e]), r;
}
function nu(e) {
  const [t, r] = te(null), n = ee(e), o = Fe((i) => {
    const l = Fn(i.target);
    !l || r((s) => s ? (s.set(l, fo(l)), new Map(s)) : null);
  }, []);
  return J(() => {
    const i = n.current;
    if (e !== i) {
      l(i);
      const s = e.map((f) => {
        const d = Fn(f);
        return d ? (d.addEventListener("scroll", o, {
          passive: !0
        }), [d, fo(d)]) : null;
      }).filter((f) => f != null);
      r(s.length ? new Map(s) : null), n.current = e;
    }
    return () => {
      l(e), l(i);
    };
    function l(s) {
      s.forEach((f) => {
        const d = Fn(f);
        d == null || d.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), Ee(() => e.length ? t ? Array.from(t.values()).reduce((i, l) => rr(i, l), bt) : Ei(e) : bt, [e, t]);
}
function ma(e, t) {
  t === void 0 && (t = []);
  const r = ee(null);
  return J(
    () => {
      r.current = null;
    },
    t
  ), J(() => {
    const n = e !== bt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? tn(e, r.current) : bt;
}
function ou(e) {
  J(
    () => {
      if (!dn)
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
function au(e, t) {
  return Ee(() => e.reduce((r, n) => {
    let {
      eventName: o,
      handler: i
    } = n;
    return r[o] = (l) => {
      i(l, t);
    }, r;
  }, {}), [e, t]);
}
function Di(e) {
  return Ee(() => e ? Al(e) : null, [e]);
}
const Vn = [];
function iu(e, t) {
  t === void 0 && (t = jr);
  const [r] = e, n = Di(r ? Xe(r) : null), [o, i] = _o(s, Vn), l = vn({
    callback: i
  });
  return e.length > 0 && o === Vn && i(), St(() => {
    e.length ? e.forEach((f) => l == null ? void 0 : l.observe(f)) : (l == null || l.disconnect(), i());
  }, [e]), o;
  function s() {
    return e.length ? e.map((f) => wi(f) ? n : new Po(t(f), f)) : Vn;
  }
}
function su(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Mr(t) ? t : e;
}
function cu(e) {
  let {
    measure: t
  } = e;
  const [r, n] = te(null), o = Fe((d) => {
    for (const {
      target: c
    } of d)
      if (Mr(c)) {
        n((u) => {
          const v = t(c);
          return u ? {
            ...u,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = vn({
    callback: o
  }), l = Fe((d) => {
    const c = su(d);
    i == null || i.disconnect(), c && (i == null || i.observe(c)), n(c ? t(c) : null);
  }, [t, i]), [s, f] = en(l);
  return Ee(() => ({
    nodeRef: s,
    rect: r,
    setRef: f
  }), [r, s, f]);
}
const lu = [{
  sensor: Si,
  options: {}
}, {
  sensor: Ro,
  options: {}
}], uu = {
  current: {}
}, Zr = {
  draggable: {
    measure: ua
  },
  droppable: {
    measure: ua,
    strategy: Dr.WhileDragging,
    frequency: vo.Optimized
  },
  dragOverlay: {
    measure: jr
  }
};
class Or extends Map {
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
const fu = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Or(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: rn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Zr,
  measureDroppableContainers: rn,
  windowRect: null,
  measuringScheduled: !1
}, du = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: rn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: rn
}, hn = /* @__PURE__ */ ut(du), pu = /* @__PURE__ */ ut(fu);
function vu() {
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
      containers: new Or()
    }
  };
}
function hu(e, t) {
  switch (t.type) {
    case Ie.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Ie.DragMove:
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
    case Ie.DragEnd:
    case Ie.DragCancel:
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
    case Ie.RegisterDroppable: {
      const {
        element: r
      } = t, {
        id: n
      } = r, o = new Or(e.droppable.containers);
      return o.set(n, r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case Ie.SetDroppableDisabled: {
      const {
        id: r,
        key: n,
        disabled: o
      } = t, i = e.droppable.containers.get(r);
      if (!i || n !== i.key)
        return e;
      const l = new Or(e.droppable.containers);
      return l.set(r, {
        ...i,
        disabled: o
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: l
        }
      };
    }
    case Ie.UnregisterDroppable: {
      const {
        id: r,
        key: n
      } = t, o = e.droppable.containers.get(r);
      if (!o || n !== o.key)
        return e;
      const i = new Or(e.droppable.containers);
      return i.delete(r), {
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
function gu(e) {
  let {
    disabled: t
  } = e;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: o
  } = Pe(hn), i = co(n), l = co(r == null ? void 0 : r.id);
  return J(() => {
    if (!t && !n && i && l != null) {
      if (!hi(i) || document.activeElement === i.target)
        return;
      const s = o.get(l);
      if (!s)
        return;
      const {
        activatorNode: f,
        node: d
      } = s;
      if (!f.current && !d.current)
        return;
      requestAnimationFrame(() => {
        for (const c of [f.current, d.current]) {
          if (!c)
            continue;
          const u = sl(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, t, o, l, i]), null;
}
function mu(e, t) {
  let {
    transform: r,
    ...n
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...n
  }), r) : r;
}
function bu(e) {
  return Ee(
    () => ({
      draggable: {
        ...Zr.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Zr.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Zr.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function yu(e) {
  let {
    activeNode: t,
    measure: r,
    initialRect: n,
    config: o = !0
  } = e;
  const i = ee(!1), {
    x: l,
    y: s
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  St(() => {
    if (!l && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !n)
      return;
    const d = t == null ? void 0 : t.node.current;
    if (!d || d.isConnected === !1)
      return;
    const c = r(d), u = bi(c, n);
    if (l || (u.x = 0), s || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const v = yi(d);
      v && v.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, l, s, n, r]);
}
const Ai = /* @__PURE__ */ ut({
  ...bt,
  scaleX: 1,
  scaleY: 1
});
var It;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(It || (It = {}));
const _u = /* @__PURE__ */ Ja(function(t) {
  var r, n, o, i;
  let {
    id: l,
    accessibility: s,
    autoScroll: f = !0,
    children: d,
    sensors: c = lu,
    collisionDetection: u = El,
    measuring: v,
    modifiers: h,
    ...b
  } = t;
  const x = _o(hu, void 0, vu), [w, E] = x, [$, D] = vl(), [N, g] = te(It.Uninitialized), L = N === It.Initialized, {
    draggable: {
      active: A,
      nodes: j,
      translate: z
    },
    droppable: {
      containers: G
    }
  } = w, Y = A ? j.get(A) : null, W = ee({
    initial: null,
    translated: null
  }), Z = Ee(() => {
    var we;
    return A != null ? {
      id: A,
      data: (we = Y == null ? void 0 : Y.data) != null ? we : uu,
      rect: W
    } : null;
  }, [A, Y]), X = ee(null), [ne, H] = te(null), [K, ce] = te(null), se = Cr(b, Object.values(b)), _ = pn("DndDescribedBy", l), R = Ee(() => G.getEnabled(), [G]), y = bu(v), {
    droppableRects: T,
    measureDroppableContainers: O,
    measuringScheduled: C
  } = Kl(R, {
    dragging: L,
    dependencies: [z.x, z.y],
    config: y.droppable
  }), S = Zl(j, A), I = Ee(() => K ? lo(K) : null, [K]), M = Yr(), V = Ql(S, y.draggable.measure);
  yu({
    activeNode: A ? j.get(A) : null,
    config: M.layoutShiftCompensation,
    initialRect: V,
    measure: y.draggable.measure
  });
  const k = ha(S, y.draggable.measure, V), oe = ha(S ? S.parentElement : null), P = ee({
    activatorEvent: null,
    active: null,
    activeNode: S,
    collisionRect: null,
    collisions: null,
    droppableRects: T,
    draggableNodes: j,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: G,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), q = G.getNodeFor((r = P.current.over) == null ? void 0 : r.id), Q = cu({
    measure: y.dragOverlay.measure
  }), ie = (n = Q.nodeRef.current) != null ? n : S, ye = L ? (o = Q.rect) != null ? o : k : null, $e = Boolean(Q.nodeRef.current && Q.rect), dt = tu($e ? null : k), qe = Di(ie ? Xe(ie) : null), Te = ru(L ? q != null ? q : S : null), Ye = iu(Te), Ke = mu(h, {
    transform: {
      x: z.x - dt.x,
      y: z.y - dt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: K,
    active: Z,
    activeNodeRect: k,
    containerNodeRect: oe,
    draggingNodeRect: ye,
    over: P.current.over,
    overlayNodeRect: Q.rect,
    scrollableAncestors: Te,
    scrollableAncestorRects: Ye,
    windowRect: qe
  }), kt = I ? rr(I, z) : null, Pt = nu(Te), jt = ma(Pt), Lt = ma(Pt, [k]), Be = rr(Ke, jt), pt = ye ? Pl(ye, Ke) : null, Rt = Z && pt ? u({
    active: Z,
    collisionRect: pt,
    droppableRects: T,
    droppableContainers: R,
    pointerCoordinates: kt
  }) : null, dr = mi(Rt, "id"), [rt, qr] = te(null), Sn = $e ? Ke : rr(Ke, Lt), Pn = Ol(Sn, (i = rt == null ? void 0 : rt.rect) != null ? i : null, k), Br = Fe(
    (we, Me) => {
      let {
        sensor: ke,
        options: vt
      } = Me;
      if (X.current == null)
        return;
      const We = j.get(X.current);
      if (!We)
        return;
      const ze = we.nativeEvent, nt = new ke({
        active: X.current,
        activeNode: We,
        event: ze,
        options: vt,
        context: P,
        onStart(Ue) {
          const Ft = X.current;
          if (Ft == null)
            return;
          const qt = j.get(Ft);
          if (!qt)
            return;
          const {
            onDragStart: Bt
          } = se.current, Xt = {
            active: {
              id: Ft,
              data: qt.data,
              rect: W
            }
          };
          vr(() => {
            Bt == null || Bt(Xt), g(It.Initializing), E({
              type: Ie.DragStart,
              initialCoordinates: Ue,
              active: Ft
            }), $({
              type: "onDragStart",
              event: Xt
            });
          });
        },
        onMove(Ue) {
          E({
            type: Ie.DragMove,
            coordinates: Ue
          });
        },
        onEnd: Et(Ie.DragEnd),
        onCancel: Et(Ie.DragCancel)
      });
      vr(() => {
        H(nt), ce(we.nativeEvent);
      });
      function Et(Ue) {
        return async function() {
          const {
            active: qt,
            collisions: Bt,
            over: Xt,
            scrollAdjustedTranslate: Wr
          } = P.current;
          let Vt = null;
          if (qt && Wr) {
            const {
              cancelDrop: Yt
            } = se.current;
            Vt = {
              activatorEvent: ze,
              active: qt,
              collisions: Bt,
              delta: Wr,
              over: Xt
            }, Ue === Ie.DragEnd && typeof Yt == "function" && await Promise.resolve(Yt(Vt)) && (Ue = Ie.DragCancel);
          }
          X.current = null, vr(() => {
            E({
              type: Ue
            }), g(It.Uninitialized), qr(null), H(null), ce(null);
            const Yt = Ue === Ie.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Vt) {
              const m = se.current[Yt];
              m == null || m(Vt), $({
                type: Yt,
                event: Vt
              });
            }
          });
        };
      }
    },
    [j]
  ), Rn = Fe((we, Me) => (ke, vt) => {
    const We = ke.nativeEvent, ze = j.get(vt);
    if (X.current !== null || !ze || We.dndKit || We.defaultPrevented)
      return;
    const nt = {
      active: ze
    };
    we(ke, Me.options, nt) === !0 && (We.dndKit = {
      capturedBy: Me.sensor
    }, X.current = vt, Br(ke, Me));
  }, [j, Br]), Vr = Xl(c, Rn);
  ou(c), St(() => {
    k && N === It.Initializing && g(It.Initialized);
  }, [k, N]), J(
    () => {
      const {
        onDragMove: we
      } = se.current, {
        active: Me,
        activatorEvent: ke,
        collisions: vt,
        over: We
      } = P.current;
      if (!Me || !ke)
        return;
      const ze = {
        active: Me,
        activatorEvent: ke,
        collisions: vt,
        delta: {
          x: Be.x,
          y: Be.y
        },
        over: We
      };
      vr(() => {
        we == null || we(ze), $({
          type: "onDragMove",
          event: ze
        });
      });
    },
    [Be.x, Be.y]
  ), J(
    () => {
      const {
        active: we,
        activatorEvent: Me,
        collisions: ke,
        droppableContainers: vt,
        scrollAdjustedTranslate: We
      } = P.current;
      if (!we || X.current == null || !Me || !We)
        return;
      const {
        onDragOver: ze
      } = se.current, nt = vt.get(dr), Et = nt && nt.rect.current ? {
        id: nt.id,
        rect: nt.rect.current,
        data: nt.data,
        disabled: nt.disabled
      } : null, Ue = {
        active: we,
        activatorEvent: Me,
        collisions: ke,
        delta: {
          x: We.x,
          y: We.y
        },
        over: Et
      };
      vr(() => {
        qr(Et), ze == null || ze(Ue), $({
          type: "onDragOver",
          event: Ue
        });
      });
    },
    [dr]
  ), St(() => {
    P.current = {
      activatorEvent: K,
      active: Z,
      activeNode: S,
      collisionRect: pt,
      collisions: Rt,
      droppableRects: T,
      draggableNodes: j,
      draggingNode: ie,
      draggingNodeRect: ye,
      droppableContainers: G,
      over: rt,
      scrollableAncestors: Te,
      scrollAdjustedTranslate: Be
    }, W.current = {
      initial: ye,
      translated: pt
    };
  }, [Z, S, Rt, pt, j, ie, ye, T, G, rt, Te, Be]), Ul({
    ...M,
    delta: z,
    draggingRect: pt,
    pointerCoordinates: kt,
    scrollableAncestors: Te,
    scrollableAncestorRects: Ye
  });
  const Cn = Ee(() => ({
    active: Z,
    activeNode: S,
    activeNodeRect: k,
    activatorEvent: K,
    collisions: Rt,
    containerNodeRect: oe,
    dragOverlay: Q,
    draggableNodes: j,
    droppableContainers: G,
    droppableRects: T,
    over: rt,
    measureDroppableContainers: O,
    scrollableAncestors: Te,
    scrollableAncestorRects: Ye,
    measuringConfiguration: y,
    measuringScheduled: C,
    windowRect: qe
  }), [Z, S, k, K, Rt, oe, Q, j, G, T, rt, O, Te, Ye, y, C, qe]), pr = Ee(() => ({
    activatorEvent: K,
    activators: Vr,
    active: Z,
    activeNodeRect: k,
    ariaDescribedById: {
      draggable: _
    },
    dispatch: E,
    draggableNodes: j,
    over: rt,
    measureDroppableContainers: O
  }), [K, Vr, Z, k, E, _, j, rt, O]);
  return /* @__PURE__ */ F(gi.Provider, {
    value: D,
    children: [/* @__PURE__ */ F(hn.Provider, {
      value: pr,
      children: [/* @__PURE__ */ p(pu.Provider, {
        value: Cn,
        children: /* @__PURE__ */ p(Ai.Provider, {
          value: Pn,
          children: d
        })
      }), /* @__PURE__ */ p(gu, {
        disabled: (s == null ? void 0 : s.restoreFocus) === !1
      })]
    }), /* @__PURE__ */ p(ml, {
      ...s,
      hiddenTextDescribedById: _
    })]
  });
  function Yr() {
    const we = (ne == null ? void 0 : ne.autoScrollEnabled) === !1, Me = typeof f == "object" ? f.enabled === !1 : f === !1, ke = L && !we && !Me;
    return typeof f == "object" ? {
      ...f,
      enabled: ke
    } : {
      enabled: ke
    };
  }
}), xu = /* @__PURE__ */ ut(null), ba = "button", wu = "Droppable";
function Tu(e) {
  let {
    id: t,
    data: r,
    disabled: n = !1,
    attributes: o
  } = e;
  const i = pn(wu), {
    activators: l,
    activatorEvent: s,
    active: f,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: v
  } = Pe(hn), {
    role: h = ba,
    roleDescription: b = "draggable",
    tabIndex: x = 0
  } = o != null ? o : {}, w = (f == null ? void 0 : f.id) === t, E = Pe(w ? Ai : xu), [$, D] = en(), [N, g] = en(), L = au(l, t), A = Cr(r);
  St(
    () => (u.set(t, {
      id: t,
      key: i,
      node: $,
      activatorNode: N,
      data: A
    }), () => {
      const z = u.get(t);
      z && z.key === i && u.delete(t);
    }),
    [u, t]
  );
  const j = Ee(() => ({
    role: h,
    tabIndex: x,
    "aria-disabled": n,
    "aria-pressed": w && h === ba ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": c.draggable
  }), [n, h, x, w, b, c.draggable]);
  return {
    active: f,
    activatorEvent: s,
    activeNodeRect: d,
    attributes: j,
    isDragging: w,
    listeners: n ? void 0 : L,
    node: $,
    over: v,
    setNodeRef: D,
    setActivatorNodeRef: g,
    transform: E
  };
}
const Eu = "Droppable", Ou = {
  timeout: 25
};
function Ii(e) {
  let {
    data: t,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: o
  } = e;
  const i = pn(Eu), {
    active: l,
    dispatch: s,
    over: f,
    measureDroppableContainers: d
  } = Pe(hn), c = ee({
    disabled: r
  }), u = ee(!1), v = ee(null), h = ee(null), {
    disabled: b,
    updateMeasurementsFor: x,
    timeout: w
  } = {
    ...Ou,
    ...o
  }, E = Cr(x != null ? x : n), $ = Fe(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        d(Array.isArray(E.current) ? E.current : [E.current]), h.current = null;
      }, w);
    },
    [w]
  ), D = vn({
    callback: $,
    disabled: b || !l
  }), N = Fe((j, z) => {
    !D || (z && (D.unobserve(z), u.current = !1), j && D.observe(j));
  }, [D]), [g, L] = en(N), A = Cr(t);
  return J(() => {
    !D || !g.current || (D.disconnect(), u.current = !1, D.observe(g.current));
  }, [g, D]), St(
    () => (s({
      type: Ie.RegisterDroppable,
      element: {
        id: n,
        key: i,
        disabled: r,
        node: g,
        rect: v,
        data: A
      }
    }), () => s({
      type: Ie.UnregisterDroppable,
      key: i,
      id: n
    })),
    [n]
  ), J(() => {
    r !== c.current.disabled && (s({
      type: Ie.SetDroppableDisabled,
      id: n,
      key: i,
      disabled: r
    }), c.current.disabled = r);
  }, [n, i, r, s]), {
    active: l,
    rect: v,
    isOver: (f == null ? void 0 : f.id) === n,
    node: g,
    over: f,
    setNodeRef: L
  };
}
const Su = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, Pu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, Ru = [fe.Down, fe.Right, fe.Up, fe.Left], Cu = (e, { context: { active: t, droppableRects: r, droppableContainers: n, collisionRect: o } }) => {
  var i;
  if (Ru.includes(e.code)) {
    e.preventDefault();
    const l = 20;
    if (!t || !o)
      return;
    const s = [];
    n.getEnabled().forEach((c) => {
      if (!c || (c == null ? void 0 : c.disabled))
        return;
      const u = r.get(c.id);
      if (!!u)
        switch (e.code) {
          case fe.Down:
            o.top < u.top && s.push(c);
            break;
          case fe.Up:
            o.top > u.top + l && s.push(c);
            break;
          case fe.Left:
            o.left >= u.left + u.width && s.push(c);
            break;
          case fe.Right:
            o.left + o.width <= u.left && s.push(c);
            break;
        }
    });
    const f = wl({
      active: t,
      collisionRect: o,
      droppableRects: r,
      droppableContainers: s,
      pointerCoordinates: null
    }), d = mi(f, "id");
    if (d != null) {
      const c = n.get(d), u = c == null ? void 0 : c.node.current, v = c == null ? void 0 : c.rect.current;
      if (u && v)
        return ((i = c.data.current) == null ? void 0 : i.type) === "container" ? {
          x: v.left,
          y: v.top + l
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, Ni = ut(), wr = (e, t) => Ae.map(e, (r) => {
  var n;
  if (!!lt(r) && !!r.props) {
    if (((n = r == null ? void 0 : r.props) == null ? void 0 : n.__TYPE) === t)
      return r;
    if (r.props.children)
      return wr(r.props.children, t);
  }
}), Du = {
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
  reboot: o,
  propValidate: i,
  modifiers: l,
  screenReaderInstructions: s,
  announcements: f,
  defaultState: d,
  defaultValidate: c,
  onState: u,
  id: v
}) => {
  const [h, b] = te([]), [x, w] = te(null), [E, $] = te(() => Object.keys(d).length > 0 ? d : N()), D = ee(!1);
  function N() {
    return [...wr(e, "droppable"), ...wr(e, "general-draggable")].reduce((Y, W) => ({
      ...Y,
      [W.props.id]: W.props.children ? [...wr(W.props.children, "draggable").map((Z) => Z.props.id)] : []
    }), {});
  }
  const g = Object.freeze({
    restrictToVerticalAxis: Pu,
    restrictToHorizontalAxis: Su
  }), L = bl(Ln(Pi), Ln(Ri), Ln(Ro, {
    coordinateGetter: Cu
  })), A = (Y, W) => {
    if (Object.keys(E).pop() === Y.id)
      return;
    let X = [...h.filter((ne) => ne !== W), Y.data.current.validate.includes(W) ? W : ""].filter((ne) => !!ne);
    if (!t) {
      const ne = E[Y.id][0];
      X = ne ? X.filter((H) => H !== ne) : X;
    }
    r && r({
      validate: [...X],
      active: !0
    }), b(X);
  }, j = (Y) => Y in E ? Y : Object.keys(E).find((W) => E[W].includes(Y)), z = ({
    active: Y,
    over: W
  }) => {
    if (!W)
      return;
    w(null);
    const Z = Object.keys(E).pop(), X = j(W.id), ne = j(Y.id);
    ne !== X && (Z !== W.id && A(W, Y.id), $((H) => {
      D.current = !0;
      const K = H[ne].filter((_) => _ !== Y.id), ce = [...H[X]];
      return t ? {
        ...H,
        [ne]: K,
        [X]: [...ce, Y.id]
      } : {
        ...{
          ...H,
          [ne]: K,
          [X]: X === Z ? [...ce, Y.id] : [Y.id]
        },
        ...X !== Z && H[X].length > 0 && {
          [Z]: [...H[Z].filter((_) => _ !== Y.id), ...H[X]]
        }
      };
    }));
  }, G = (Y) => Ae.map(Y, (W) => {
    if (!W.props)
      return W;
    if (W.props.__TYPE !== "draggable")
      return W.props.id in E && E[W.props.id].length > 0 ? De(W, {
        ...W.props
      }, [...E[W.props.id].map((Z) => wr(e, "draggable").filter((X) => X.props.id === Z)).flat()]) : W.props.children ? De(W, {
        ...W.props,
        children: G(W.props.children)
      }) : W;
  });
  return J(() => {
    o && ($(() => N()), r && r({
      validate: [],
      active: !1
    }));
  }, [o]), J(() => {
    Object.keys(d).length !== 0 && $(d);
  }, [d]), J(() => {
    c.length !== 0 && b(c);
  }, [c]), J(() => {
    u && D.current && (D.current = !1, u({
      state: {
        key: v,
        newObjectState: {
          ...E
        },
        validateId: h
      }
    }));
  }, [u, E]), /* @__PURE__ */ p(Ni.Provider, {
    value: {
      listId: h,
      propValidate: i,
      validate: n,
      isDragging: x
    },
    children: /* @__PURE__ */ p(_u, {
      sensors: L,
      screenReaderInstructions: {
        draggable: s
      },
      accessibility: {
        announcements: f
      },
      onDragStart: ({
        active: Y
      }) => w(Y.id),
      onDragEnd: z,
      onDragCancel: () => w(null),
      ...l && {
        modifiers: [g[l]]
      },
      children: G(e)
    })
  });
};
$i.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: Du,
  defaultState: {},
  defaultValidate: [],
  screenReaderInstructions: "Para recoger un elemento arrastrable, presiona la barra espaciadora o la tecla Enter. Mientras arrastras, usa las teclas de flecha para mover el elemento en cualquier direcci\xF3n deseada. Presiona nuevamente la barra espaciadora o la tecla Enter para soltar el elemento en su nueva posici\xF3n, o presiona escape para cancelar."
};
$i.propTypes = {
  children: a.exports.oneOfType([a.exports.element, a.exports.arrayOf(a.exports.element), a.exports.node, a.exports.arrayOf(a.exports.node)]),
  multipleDrags: a.exports.bool,
  onValidate: a.exports.func,
  reboot: a.exports.bool,
  validate: a.exports.bool.isRequired,
  propValidate: a.exports.string.isRequired,
  modifiers: a.exports.oneOf(["restrictToVerticalAxis", "restrictToHorizontalAxis"]),
  screenReaderInstructions: a.exports.string.isRequired,
  announcements: a.exports.object.isRequired,
  defaultState: a.exports.object,
  defaultValidate: a.exports.array,
  onState: a.exports.func,
  id: a.exports.string
};
const Au = "_pop_1elvh_1", nr = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: Au
}, Mi = ({
  children: e,
  id: t,
  addClass: r,
  dragging: n,
  label: o,
  attribute: i,
  disabledDefaultAttributes: l,
  element: s,
  defaultStyle: f,
  __TYPE: d,
  ...c
}) => {
  const u = s || "div", {
    listId: v,
    propValidate: h,
    validate: b,
    isDragging: x
  } = Pe(Ni), {
    attributes: w,
    listeners: E,
    setNodeRef: $,
    transform: D
  } = Tu({
    id: t,
    disabled: b,
    data: {
      label: o
    },
    attributes: i
  });
  return /* @__PURE__ */ p(u, {
    id: t,
    ref: $,
    "data-type": d,
    className: re({
      [nr["c-draggable"]]: !f,
      [`${n} ${nr["is-draggable--active-animation"]}`]: x === t && !f,
      [r]: r
    }),
    style: {
      transform: uo.Translate.toString(D)
    },
    [h]: b ? v.includes(t) : "",
    ...!l && {
      ...w
    },
    ...E,
    ...c,
    children: e
  });
};
Mi.defaultProps = {
  __TYPE: "draggable",
  dragging: nr["c-draggable--active"],
  disabledDefaultAttributes: !1
};
Mi.propTypes = {
  children: a.exports.oneOfType([a.exports.node, a.exports.element]),
  id: a.exports.string.isRequired,
  addClass: a.exports.string,
  dragging: a.exports.string,
  label: a.exports.string.isRequired,
  attribute: a.exports.shape({
    role: a.exports.string,
    roleDescription: a.exports.string,
    tabIndex: a.exports.number
  }),
  disabledDefaultAttributes: a.exports.bool,
  element: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("draggable")
};
const ki = ({
  children: e,
  id: t,
  validate: r,
  addClass: n,
  over: o,
  label: i,
  element: l,
  defaultStyle: s,
  __TYPE: f,
  ...d
}) => {
  const c = l || "div", {
    isOver: u,
    setNodeRef: v
  } = Ii({
    id: t,
    data: {
      validate: r,
      label: i,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(c, {
    ref: v,
    "data-type": f,
    className: re({
      [nr["c-droppable"]]: !s,
      [o]: u && !s,
      [n]: n
    }),
    ...d,
    children: e
  });
};
ki.defaultProps = {
  __TYPE: "droppable",
  over: nr["c-droppable--active"]
};
ki.propTypes = {
  children: a.exports.oneOfType([a.exports.element, a.exports.node]),
  id: a.exports.string.isRequired,
  validate: a.exports.array.isRequired,
  addClass: a.exports.string,
  over: a.exports.string,
  label: a.exports.string.isRequired,
  element: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("droppable")
};
const ji = ({
  children: e,
  addClass: t,
  over: r,
  id: n,
  label: o,
  element: i,
  defaultStyle: l,
  __TYPE: s,
  ...f
}) => {
  const d = i || "div", {
    isOver: c,
    setNodeRef: u
  } = Ii({
    id: n,
    data: {
      label: o,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(d, {
    id: n,
    ref: u,
    "data-type": s,
    className: re({
      [nr["c-droppable"]]: !l,
      [r]: c && !l,
      [t]: t
    }),
    ...f,
    children: e
  });
};
ji.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  addClass: a.exports.string,
  over: a.exports.string,
  id: a.exports.string.isRequired,
  label: a.exports.string.isRequired,
  element: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("general-draggable")
};
ji.defaultProps = {
  __TYPE: "general-draggable",
  id: di("unique-id-general-"),
  label: "contendor inicial"
};
const zp = ({
  ...e
}) => /* @__PURE__ */ p("span", {
  id: "hc_extension_svg_filters",
  ...e,
  children: /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: "0",
    children: /* @__PURE__ */ F("defs", {
      children: [/* @__PURE__ */ p("filter", {
        id: "hc_extension_off",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: /* @__PURE__ */ F("feComponentTransfer", {
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
        children: /* @__PURE__ */ F("feComponentTransfer", {
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
        children: /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
        id: "hc_extension_grayscale",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ p("feColorMatrix", {
          type: "matrix",
          values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
        children: /* @__PURE__ */ F("feComponentTransfer", {
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
        children: /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
        id: "hc_extension_invert_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ F("feComponentTransfer", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
        id: "hc_extension_yellow_on_black",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
        id: "hc_extension_yellow_on_black_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ F("feComponentTransfer", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
        id: "hc_extension_red_on_white_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ F("feComponentTransfer", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
        id: "hc_extension_green_on_blue_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ F("feComponentTransfer", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
        id: "hc_extension_yellow_on_blue_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ F("feComponentTransfer", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
      }), /* @__PURE__ */ F("filter", {
        id: "hc_extension_white_on_black_back",
        x: "0",
        y: "0",
        width: "99999",
        height: "99999",
        children: [/* @__PURE__ */ F("feComponentTransfer", {
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
        }), /* @__PURE__ */ F("feComponentTransfer", {
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
}), ya = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, Li = ({
  url: e,
  alt: t,
  title: r,
  width: n,
  addClass: o,
  noCaption: i,
  defaultStyle: l,
  ...s
}) => {
  const [f, d] = te(!1), c = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, u = (h) => d(h), v = f ? c : `${e}`;
  return /* @__PURE__ */ F("figure", {
    className: re({
      [ya["c-image"]]: !l,
      [o]: o
    }),
    ...n && {
      style: {
        maxWidth: `${/%/gi.test(n) ? n : `${n}px`}`
      }
    },
    children: [/* @__PURE__ */ p("img", {
      src: v,
      onError: u,
      alt: t,
      ...s
    }), !i && /* @__PURE__ */ p("figcaption", {
      className: ya["c-image__figcaption"],
      children: /* @__PURE__ */ F("p", {
        children: [/* @__PURE__ */ F("strong", {
          children: [r, "\xA0"]
        }), t]
      })
    })]
  });
};
Li.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
Li.propTypes = {
  url: a.exports.string,
  alt: a.exports.string,
  title: a.exports.string,
  width: a.exports.string,
  addClass: a.exports.string,
  noCaption: a.exports.bool,
  defaultStyle: a.exports.bool
};
const Ar = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, Fi = xt(({
  id: e,
  type: t,
  value: r,
  placeholder: n,
  label: o,
  addClass: i,
  isLabelVisible: l,
  isDisabled: s,
  isRequired: f,
  isReadOnly: d,
  defaultStyle: c,
  onValue: u
}, v) => {
  const h = e || $t(), b = ({
    target: x
  }) => {
    u && u({
      id: h,
      value: x.value
    });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ F("label", {
    htmlFor: h,
    className: re({
      [Ar["c-label"]]: !c,
      [i]: i
    }),
    children: [/* @__PURE__ */ F("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", o, " "]
    }), /* @__PURE__ */ p("input", {
      id: h,
      ref: v,
      type: t,
      name: h,
      value: r,
      disabled: s,
      required: f,
      placeholder: n,
      autoComplete: "off",
      onChange: b,
      className: re({
        [Ar["c-input"]]: !c
      }),
      ...d && {
        readOnly: d,
        "aria-readonly": d
      }
    })]
  }) : null;
});
Fi.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
Fi.propTypes = {
  id: a.exports.string,
  type: a.exports.oneOf(["text", "email", "password", "date"]),
  value: a.exports.oneOfType([a.exports.string, a.exports.number]),
  placeholder: a.exports.string,
  label: a.exports.string.isRequired,
  addClass: a.exports.string,
  isLabelVisible: a.exports.bool,
  isDisabled: a.exports.bool,
  isRequired: a.exports.bool,
  isReadOnly: a.exports.bool,
  defaultStyle: a.exports.bool,
  onValue: a.exports.func,
  __TYPE: xe("Input")
};
const Iu = ({
  children: e,
  onAllValue: t
}) => {
  const [r, n] = te([]), o = (s) => n([...r.filter((f) => f.id !== s.id), {
    ...s
  }]);
  J(() => {
    t && t(r);
  }, [r, t]);
  const i = (s, f, d) => Ae.toArray(s).map((c) => c.props.__TYPE === f ? De(c, {
    ...c.props,
    ...d
  }) : c);
  return Ae.map(e, (s) => {
    var f, d;
    return lt(s) ? ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "InputStyle" ? De(s, {
      ...s.props,
      children: i(s.props.children, "Input", {
        onValue: o
      })
    }) : ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "Input" ? De(s, {
      ...s.props,
      onValue: o
    }) : s : null;
  });
};
Iu.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  onAllValue: a.exports.func
};
const qi = ({
  children: e,
  addClass: t,
  defaultStyle: r
}) => /* @__PURE__ */ p("div", {
  className: re({
    [Ar["c-input__wrapper-style"]]: !r,
    [t]: t
  }),
  children: Ze(e, ["InputLeftAddon", "InputRightAddon", "Input"])
});
qi.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element]),
  addClass: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("InputStyle")
};
qi.defaultProps = {
  __TYPE: "InputStyle"
};
const Bi = ({
  children: e,
  addClass: t,
  defaultStyle: r
}) => /* @__PURE__ */ p("div", {
  className: re({
    [Ar["c-input__left-addon"]]: !r,
    [t]: t
  }),
  children: e
});
Bi.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.arrayOf(a.exports.node), a.exports.node]),
  addClass: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("InputLeftAddon")
};
Bi.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const Vi = ({
  children: e,
  addClass: t,
  defaultStyle: r
}) => /* @__PURE__ */ p("div", {
  className: re({
    [Ar["c-input__right-addon"]]: !r,
    [t]: t
  }),
  children: e
});
Vi.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.arrayOf(a.exports.node), a.exports.node]),
  addClass: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("InputRightAddon")
};
Vi.defaultProps = {
  __TYPE: "InputRightAddon"
};
const Nu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, $u = ({
  children: e,
  addClass: t,
  defaultStyle: r,
  ...n
}) => /* @__PURE__ */ p("kbd", {
  className: re({
    [Nu["c-kbd"]]: !r,
    [t]: t
  }),
  ...n,
  children: e
});
$u.propTypes = {
  children: a.exports.string,
  addClass: a.exports.string,
  defaultStyle: a.exports.bool
};
const Yi = ({
  children: e,
  link: t,
  addClass: r,
  isExternal: n,
  label: o,
  ...i
}) => /* @__PURE__ */ p("a", {
  "aria-label": o,
  href: t,
  ...r && {
    className: `${r}`
  },
  ...n && {
    target: "_blank",
    rel: "noopener"
  },
  ...i,
  children: e
});
Yi.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Yi.propTypes = {
  children: a.exports.oneOfType([a.exports.string, a.exports.element, a.exports.node, a.exports.arrayOf(a.exports.element), a.exports.arrayOf(a.exports.node)]),
  addClass: a.exports.string,
  link: a.exports.string,
  isExternal: a.exports.bool,
  label: a.exports.string.isRequired
};
const Wi = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, Mu = ({
  children: e,
  addClass: t,
  defaultStyle: r,
  ...n
}) => /* @__PURE__ */ p("ul", {
  className: re({
    [Wi["c-List"]]: !r,
    [t]: t
  }),
  ...n,
  children: Ze(e, ["ListItem"])
});
Mu.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element]),
  addClass: a.exports.string,
  defaultStyle: a.exports.bool
};
const zi = ({
  children: e,
  addClass: t,
  __TYPE: r,
  ...n
}) => {
  const o = Ae.map(e, (i) => {
    var l;
    return ((l = i == null ? void 0 : i.props) == null ? void 0 : l.__TYPE) === "Icon" ? De(i, {
      ...i.props,
      addClass: Wi["c-list-item__icon"]
    }) : i;
  });
  return /* @__PURE__ */ p("li", {
    ...t && {
      className: `${t}`
    },
    "data-type": r,
    ...n,
    children: o
  });
};
zi.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  addClass: a.exports.string,
  __TYPE: xe("ListItem")
};
zi.defaultProps = {
  __TYPE: "ListItem"
};
const ku = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ p("ol", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: Ze(e, ["ListItem"])
});
ku.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element]),
  addClass: a.exports.string
};
const ju = ({
  children: e,
  addClass: t,
  ...r
}) => /* @__PURE__ */ p("ul", {
  ...t && {
    className: `${t}`
  },
  ...r,
  children: Ze(e, ["ListItem"])
});
ju.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element]),
  addClass: a.exports.string
};
var Yn = function() {
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
function Wn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, r = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), n = function() {
    function d(c, u) {
      Wn(this, d), this._inertManager = u, this._rootElement = c, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return Yn(d, [{
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
        l(u, function(w) {
          return v._visitNode(w);
        });
        var h = document.activeElement;
        if (!document.body.contains(u)) {
          for (var b = u, x = void 0; b; ) {
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              x = b;
              break;
            }
            b = b.parentNode;
          }
          x && (h = x.activeElement);
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
        l(u, function(h) {
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
          var b = h.target;
          if (h.type === "childList")
            e.call(h.addedNodes).forEach(function(w) {
              this._makeSubtreeUnfocusable(w);
            }, this), e.call(h.removedNodes).forEach(function(w) {
              this._unmanageSubtree(w);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(b);
            else if (b !== this._rootElement && h.attributeName === "inert" && b.hasAttribute("inert")) {
              this._adoptInertRoot(b);
              var x = this._inertManager.getInertRoot(b);
              this._managedNodes.forEach(function(w) {
                b.contains(w.node) && x._manageNode(w.node);
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
    }]), d;
  }(), o = function() {
    function d(c, u) {
      Wn(this, d), this._node = c, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([u]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return Yn(d, [{
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
    }]), d;
  }(), i = function() {
    function d(c) {
      if (Wn(this, d), !c)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = c, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(c.head || c.body || c.documentElement), c.readyState === "loading" ? c.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return Yn(d, [{
      key: "setInert",
      value: function(u, v) {
        if (v) {
          if (this._inertRoots.has(u))
            return;
          var h = new n(u, this);
          if (u.setAttribute("inert", ""), this._inertRoots.set(u, h), !this._document.body.contains(u))
            for (var b = u.parentNode; b; )
              b.nodeType === 11 && s(b), b = b.parentNode;
        } else {
          if (!this._inertRoots.has(u))
            return;
          var x = this._inertRoots.get(u);
          x.destructor(), this._inertRoots.delete(u), u.removeAttribute("inert");
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
        return h !== void 0 ? h.addInertRoot(v) : h = new o(u, v), this._managedNodes.set(u, h), h;
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
        u.forEach(function(b) {
          switch (b.type) {
            case "childList":
              e.call(b.addedNodes).forEach(function(E) {
                if (E.nodeType === Node.ELEMENT_NODE) {
                  var $ = e.call(E.querySelectorAll("[inert]"));
                  t.call(E, "[inert]") && $.unshift(E), $.forEach(function(D) {
                    this.setInert(D, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (b.attributeName !== "inert")
                return;
              var x = b.target, w = x.hasAttribute("inert");
              h.setInert(x, w);
              break;
          }
        }, this);
      }
    }]), d;
  }();
  function l(d, c, u) {
    if (d.nodeType == Node.ELEMENT_NODE) {
      var v = d;
      c && c(v);
      var h = v.shadowRoot;
      if (h) {
        l(h, c);
        return;
      }
      if (v.localName == "content") {
        for (var b = v, x = b.getDistributedNodes ? b.getDistributedNodes() : [], w = 0; w < x.length; w++)
          l(x[w], c);
        return;
      }
      if (v.localName == "slot") {
        for (var E = v, $ = E.assignedNodes ? E.assignedNodes({ flatten: !0 }) : [], D = 0; D < $.length; D++)
          l($[D], c);
        return;
      }
    }
    for (var N = d.firstChild; N != null; )
      l(N, c), N = N.nextSibling;
  }
  function s(d) {
    if (!d.querySelector("style#inert-style, link#inert-style")) {
      var c = document.createElement("style");
      c.setAttribute("id", "inert-style"), c.textContent = `
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
`, d.appendChild(c);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var f = new i(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      get: function() {
        return this.hasAttribute("inert");
      },
      set: function(c) {
        f.setInert(this, c);
      }
    });
  }
})();
const gn = ut(), Lu = Object.freeze({
  ESC: 27
}), Ui = ({
  children: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n
}) => {
  const o = ee(), i = (d) => {
    const c = document.querySelector("#root");
    c.inert = d;
  }, l = (d) => {
    (d.keyCode || d.which) === Lu.ESC && f();
  }, s = (d, c) => {
    o.current.classList.replace(d, c);
  }, f = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), r(!t), Object.keys(n).length !== 0 && n.current.focus();
    }, 500);
  };
  return J(() => (t && (i(!0), o.current && o.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(gn.Provider, {
    value: {
      isOpen: t,
      onKeyDown: l,
      onCloseModal: f,
      refModal: o
    },
    children: /* @__PURE__ */ p(fr, {
      id: "js-modal",
      children: Ze(e, ["ModalContent", "ModalOverlay"])
    })
  });
};
Ui.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Ui.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  addClass: a.exports.string,
  isOpen: a.exports.bool.isRequired,
  onClose: a.exports.func.isRequired,
  label: a.exports.string.isRequired,
  finalFocusRef: a.exports.object.isRequired
};
const Xr = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, Hi = ({
  label: e,
  addClass: t,
  children: r,
  onClick: n,
  onKeyDown: o,
  defaultStyle: i,
  __TYPE: l,
  ...s
}) => {
  const {
    isOpen: f,
    onKeyDown: d,
    onCloseModal: c,
    refModal: u
  } = Pe(gn), v = (b) => {
    n && typeof n == "function" && n(b), c();
  };
  return /* @__PURE__ */ F("div", {
    ref: u,
    role: "dialog",
    tabIndex: "-1",
    hidden: !f,
    "aria-label": e,
    "aria-modal": "true",
    "data-type": l,
    onKeyDown: (b) => {
      o && typeof o == "function" && o(b), d(b);
    },
    className: re("animate__animated animate__fadeIn animate__faster video-interpreter-ui-modal", {
      [`${Xr["c-modal"]} u-px-3 u-py-3`]: !i,
      [t]: t
    }),
    ...s,
    children: [/* @__PURE__ */ p("div", {
      className: re({
        [Xr["c-modal-container"]]: !i
      }),
      "data-class": "c-modal__container",
      children: r
    }), /* @__PURE__ */ p(Ut, {
      addClass: re({
        [Xr["c-close-button"]]: !i
      }),
      "data-class": "c-modal__close-button",
      label: "Cerrar modal",
      hasAriaLabel: !0,
      onClick: v,
      ...i && {
        defaultStyle: i
      },
      children: /* @__PURE__ */ p(Ce, {
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
Hi.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  addClass: a.exports.string,
  label: a.exports.string.isRequired,
  onClick: a.exports.func,
  onKeyDown: a.exports.func,
  defaultStyle: a.exports.bool,
  __TYPE: xe("ModalContent")
};
Hi.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const Gi = ({
  addClass: e,
  onClick: t,
  defaultStyle: r
}) => {
  const {
    isOpen: n,
    onCloseModal: o
  } = Pe(gn), i = (l) => {
    t && typeof t == "function" && t(l), o();
  };
  return /* @__PURE__ */ p("div", {
    className: re({
      [Xr["c-layout"]]: !r,
      [e]: e
    }),
    onClick: i,
    hidden: !n
  });
};
Gi.propTypes = {
  addClass: a.exports.string,
  onClick: a.exports.func,
  defaultStyle: a.exports.bool,
  __TYPE: xe("ModalOverlay")
};
Gi.defaultProps = {
  __TYPE: "ModalOverlay"
};
const Fu = ({
  children: e,
  onClick: t
}) => {
  const {
    onCloseModal: r
  } = Pe(gn), n = (o) => {
    t && t(o), r();
  };
  return De(e, {
    ...e.props,
    onClick: n
  });
};
Fu.propTypes = {
  children: a.exports.oneOfType([a.exports.element, a.exports.node]).isRequired,
  onClick: a.exports.func
};
const or = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, mn = ut(), Zi = ({
  children: e,
  addClass: t,
  keepWithinRange: r,
  defaultValue: n,
  min: o,
  max: i,
  step: l,
  onValue: s
}) => {
  const [f, d] = te(n || 0), c = () => {
    if (r && f > i)
      return d(i);
    d((b) => b + l);
  }, u = () => {
    if (r && f < o)
      return d(o);
    d((b) => b - l);
  }, v = (b) => d(b), h = (b) => r && f === b;
  return J(() => {
    s && s(f);
  }, [f, s]), /* @__PURE__ */ p(mn.Provider, {
    value: {
      counter: f,
      min: o || Number.MIN_SAFE_INTEGER,
      max: i || Number.MAX_SAFE_INTEGER,
      validate: h,
      onChangeValue: v,
      onIncrementValue: c,
      onDecrementValue: u
    },
    children: /* @__PURE__ */ p("div", {
      className: `${or["c-number-input"]} ${t != null ? t : ""}`,
      children: Ze(e, ["NumberInputField", "NumberInputStepper"])
    })
  });
};
Zi.propTypes = {
  children: a.exports.arrayOf(a.exports.element),
  addClass: a.exports.string,
  max: a.exports.number,
  min: a.exports.number,
  defaultValue: a.exports.number,
  step: a.exports.number,
  onValue: a.exports.func,
  keepWithinRange: a.exports.bool
};
Zi.defaultProps = {
  step: 1
};
const Xi = xt(({
  id: e,
  name: t,
  label: r,
  pattern: n,
  addClass: o,
  isLabelVisible: i
}, l) => {
  const {
    counter: s,
    onChangeValue: f,
    onIncrementValue: d,
    onDecrementValue: c,
    min: u,
    max: v
  } = Pe(mn), h = e || $t(), b = Object.freeze({
    UP: 38,
    DOWN: 40,
    END: 35,
    HOME: 36
  }), x = ({
    target: E
  }) => {
    if (!isNaN(E.value) && E.value)
      return f(parseInt(E.value));
    f(0);
  }, w = (E) => {
    switch (E.keyCode || E.which) {
      case b.UP:
        d();
        break;
      case b.DOWN:
        c();
        break;
      case b.END:
        f(v);
        break;
      case b.HOME:
        f(u);
        break;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ F("label", {
    htmlFor: h,
    className: `${or["c-number-input__label"]} ${o != null ? o : ""}`,
    children: [/* @__PURE__ */ F("span", {
      className: `${!i && "u-sr-only"}`,
      children: [" ", r, " "]
    }), /* @__PURE__ */ p("input", {
      id: h,
      ref: l,
      type: "text",
      name: t,
      role: "spinbutton",
      inputMode: "decimal",
      pattern: n,
      autoCorrect: "off",
      autoComplete: "off",
      className: or["c-number-input__input"],
      onChange: x,
      onKeyDown: w,
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
Xi.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Xi.propTypes = {
  id: a.exports.string,
  name: a.exports.string,
  label: a.exports.string,
  pattern: a.exports.string,
  addClass: a.exports.string,
  isLabelVisible: a.exports.bool,
  __TYPE: xe("NumberInputField")
};
const Ki = ({
  children: e,
  addClass: t
}) => /* @__PURE__ */ p("div", {
  className: `${or["c-number-input__stepper"]} ${t != null ? t : ""}`,
  children: Ze(e, ["NumberIncrementStepper", "NumberDecrementStepper"])
});
Ki.propTypes = {
  children: a.exports.oneOfType([a.exports.element, a.exports.arrayOf(a.exports.element)]),
  addClass: a.exports.string,
  __TYPE: xe("NumberInputStepper")
};
Ki.defaultProps = {
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
    min: i
  } = Pe(mn);
  return /* @__PURE__ */ p("button", {
    tabIndex: -1,
    onClick: n,
    disabled: o(i),
    "aria-label": `${r != null ? r : "Decrementar valor"}`,
    className: `${or["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ p(Ce, {
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
Qi.propTypes = {
  children: a.exports.oneOfType([a.exports.node, a.exports.element, a.exports.arrayOf(a.exports.element), a.exports.arrayOf(a.exports.element)]),
  addClass: a.exports.string,
  __TYPE: xe("NumberDecrementStepper"),
  label: a.exports.string
};
Qi.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const Ji = ({
  children: e,
  addClass: t,
  label: r
}) => {
  const {
    onIncrementValue: n,
    validate: o,
    max: i
  } = Pe(mn);
  return /* @__PURE__ */ p("button", {
    tabIndex: -1,
    onClick: n,
    disabled: o(i),
    "aria-label": `${r != null ? r : "Incrementar valor"}`,
    className: `${or["c-number-input__button"]} ${t != null ? t : ""}`,
    children: e || /* @__PURE__ */ p(Ce, {
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
Ji.propTypes = {
  children: a.exports.oneOfType([a.exports.node, a.exports.element, a.exports.arrayOf(a.exports.element), a.exports.arrayOf(a.exports.element)]),
  addClass: a.exports.string,
  __TYPE: xe("NumberIncrementStepper"),
  label: a.exports.string
};
Ji.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const qu = (e) => {
  const {
    boundaryCount: t = 1,
    count: r = 1,
    defaultPage: n,
    disabled: o = !1,
    hideNextButton: i = !1,
    hidePrevButton: l = !1,
    onChange: s,
    showFirstButton: f = !1,
    showLastButton: d = !1,
    siblingCount: c = 1,
    ...u
  } = e, [v, h] = te(n || 1);
  J(() => {
    n && h(n);
  }, [n]);
  const b = (A, j) => {
    h(j), s && s(A, j);
  }, x = (A, j) => {
    const z = j - A + 1;
    return Array.from({ length: z }, (G, Y) => A + Y);
  }, w = x(1, Math.min(t, r)), E = x(
    Math.max(r - t + 1, t + 1),
    r
  ), $ = Math.max(
    Math.min(
      v - c,
      r - t - c * 2 - 1
    ),
    t + 2
  ), D = Math.min(
    Math.max(
      v + c,
      t + c * 2 + 2
    ),
    E.length > 0 ? E[0] - 2 : r - 1
  ), N = [
    ...f ? ["first"] : [],
    ...l ? [] : ["previous"],
    ...w,
    ...$ > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : [],
    ...x($, D),
    ...D < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : [],
    ...E,
    ...i ? [] : ["next"],
    ...d ? ["last"] : []
  ], g = (A) => {
    switch (A) {
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
    items: N.map((A) => typeof A == "number" ? {
      onClick: (j) => {
        b(j, A);
      },
      type: "page",
      page: A,
      selected: A === v,
      disabled: o,
      "aria-current": A === v ? "page" : void 0
    } : {
      onClick: (j) => {
        b(j, g(A));
      },
      type: A,
      page: g(A),
      selected: !1,
      disabled: o || A.indexOf("ellipsis") === -1 && (A === "next" || A === "last" ? v >= r : v <= 1)
    }),
    ...u
  };
}, Sr = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, Bu = Object.freeze({
  first: "primera",
  last: "\xFAltima",
  previous: "anterior",
  next: "siguiente"
}), Vu = (e, t, r) => e === "page" ? `${r ? "" : "Ir a la "}p\xE1gina ${t}` : `Ir a la ${Bu[e]} p\xE1gina`, es = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: r,
  defaultStyle: n,
  ...o
}) => {
  const {
    items: i
  } = qu({
    ...o
  });
  return /* @__PURE__ */ p("nav", {
    className: re({
      [Sr["c-pagination"]]: !n,
      [r]: r
    }),
    children: /* @__PURE__ */ p("ul", {
      className: re({
        [Sr["c-pagination__ul"]]: !n
      }),
      "data-class": "c-pagination__ul",
      children: i.map((l, s) => /* @__PURE__ */ p("li", {
        "data-class": "c-pagination__ul-li",
        children: e({
          ...l,
          "aria-label": t(l.type, l.page, l.selected),
          ...n && {
            defaultStyle: n
          }
        })
      }, `pagination-item-${s}`))
    })
  });
};
es.defaultProps = {
  boundaryCount: 1,
  count: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(Do, {
    ...e
  }),
  getItemAriaLabel: Vu
};
es.propTypes = {
  addClass: a.exports.string,
  boundaryCount: a.exports.number,
  count: a.exports.number,
  defaultPage: a.exports.number,
  disabled: a.exports.bool,
  hideNextButton: a.exports.bool,
  hidePrevButton: a.exports.bool,
  onChange: a.exports.func,
  showFirstButton: a.exports.bool,
  showLastButton: a.exports.bool,
  siblingCount: a.exports.number,
  renderItem: a.exports.func,
  getItemAriaLabel: a.exports.func,
  defaultStyle: a.exports.bool
};
const Do = ({
  page: e,
  type: t,
  addClass: r,
  disabled: n,
  element: o,
  icons: i,
  selected: l,
  defaultStyle: s,
  ...f
}) => {
  const c = {
    previous: (i == null ? void 0 : i.previous) || /* @__PURE__ */ p("path", {
      id: "navigate_before",
      d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
    }),
    next: (i == null ? void 0 : i.next) || /* @__PURE__ */ p("path", {
      id: "navigate_next",
      d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
    }),
    last: (i == null ? void 0 : i.last) || /* @__PURE__ */ p("path", {
      id: "last_page",
      d: "m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z"
    }),
    first: (i == null ? void 0 : i.first) || /* @__PURE__ */ p("path", {
      id: "first_page",
      d: "M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z"
    })
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? /* @__PURE__ */ p("div", {
    className: Sr["c-pagination-item__ellipsis"],
    children: "..."
  }) : De(o, {
    disabled: n,
    className: re({
      [Sr["c-pagination-item"]]: !s,
      [Sr["c-pagination-item--selected"]]: !s && l,
      [r]: r
    }),
    ...o.props,
    ...f
  }, [
    t === "page" && e,
    c ? i ? /* @__PURE__ */ p(Ce, {
      path: c
    }, t) : /* @__PURE__ */ p(Ce, {
      children: /* @__PURE__ */ p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        width: "48",
        viewBox: "0 0 48 48",
        children: c
      })
    }, t) : null
  ]);
};
Do.propTypes = {
  page: a.exports.number,
  type: a.exports.string,
  addClass: a.exports.string,
  disabled: a.exports.bool,
  selected: a.exports.bool,
  element: a.exports.oneOfType([a.exports.element, a.exports.node, a.exports.string]),
  defaultStyle: a.exports.bool,
  icons: a.exports.shape({
    first: a.exports.string,
    last: a.exports.string,
    next: a.exports.string,
    previous: a.exports.string
  })
};
Do.defaultProps = {
  element: /* @__PURE__ */ p("button", {})
};
const er = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, bn = ut(), Yu = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  type: n,
  defaultStyle: o
}) => {
  const [i, l] = te(null), s = ee([]), f = (h) => {
    s.current.includes(h) || (s.current = [...s.current, h]);
  }, d = (h) => l(s.current[h]), c = (h) => /:.*?:/g.test(h) ? i === h : s.current[h - 1] === i, u = () => [...s.current].reduce((h, b, x) => [...h, x + 1], []), v = (h) => s.current.indexOf(h) + 1;
  return J(() => {
    s.current.length !== 0 && (t !== void 0 ? d(t - 1) : l(s.current[0]));
  }, [t, s]), /* @__PURE__ */ p(bn.Provider, {
    value: {
      validation: c,
      onToggle: d,
      listId: u(),
      currentSection: v(i),
      getIndexById: v,
      addNewIdToSection: f,
      type: n
    },
    children: /* @__PURE__ */ p("div", {
      className: re("video-interpreter-ui-panel", {
        [er["c-panel"]]: !o,
        [r]: r
      }),
      "data-value": i,
      ...n === "carrousel" && {
        role: "group",
        "aria-roledescription": "Slider"
      },
      children: e
    })
  });
};
Yu.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.arrayOf(a.exports.node), a.exports.node, a.exports.string]),
  defaultIndex: a.exports.number,
  addClass: a.exports.string,
  defaultStyle: a.exports.bool,
  type: a.exports.string
};
const ts = xt(({
  children: e,
  addClass: t,
  defaultStyle: r,
  __TYPE: n,
  ...o
}, i) => {
  const {
    validation: l,
    addNewIdToSection: s,
    getIndexById: f,
    type: d
  } = Pe(bn), c = $t(), u = l(c);
  return J(() => {
    !c || s(c);
  }, [c]), /* @__PURE__ */ F("section", {
    ref: i,
    role: d === "carrousel" ? "group" : "tabpanel",
    hidden: !u,
    "data-type": n,
    "aria-hidden": !u,
    "data-value": c,
    "aria-labelledby": `section-${c}`,
    className: re({
      [er["c-section"]]: !r,
      "video-interpreter-ui-section": "video-interpreter-ui-section",
      [t]: t
    }),
    ...d === "carrousel" && {
      "aria-roledescription": "Secci\xF3n"
    },
    ...o,
    children: [/* @__PURE__ */ F("span", {
      id: `section-${c}`,
      className: "u-sr-only",
      children: ["Secci\xF3n ", f(c)]
    }), e]
  });
});
ts.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  id: a.exports.number,
  addClass: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("Section")
};
ts.defaultProps = {
  __TYPE: "Section"
};
const Wu = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), _a = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), zu = (e, t, r) => e === "section" ? `${r ? "" : "Ir a la "}secci\xF3n ${t}` : `Ir a la ${Wu[e]} secci\xF3n`, rs = ({
  renderItem: e,
  showPrevButton: t,
  showNextButton: r,
  icons: n,
  label: o,
  orientation: i,
  onValue: l,
  addClass: s,
  getItemAriaLabel: f,
  defaultStyle: d
}) => {
  const {
    validation: c,
    onToggle: u,
    listId: v,
    currentSection: h
  } = Pe(bn), b = ee([]), x = Object.freeze({
    previous: h - 1,
    next: h + 1
  }), w = {
    previous: (n == null ? void 0 : n.previous) || /* @__PURE__ */ p("path", {
      id: "navigate_before",
      d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
    }),
    next: (n == null ? void 0 : n.next) || /* @__PURE__ */ p("path", {
      id: "navigate_next",
      d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
    })
  }, [E, $] = te([]);
  J(() => {
    v.length !== 0 && $([
      ...t ? ["previous"] : [],
      ...v || [],
      ...r ? ["next"] : []
    ]);
  }, [v]);
  const D = (A) => !b.current.includes(A) && A ? b.current = [...b.current, A] : b.current, N = (A) => {
    const j = b.current[0], z = b.current[b.current.length - 1];
    if ((A.keyCode || A.which) === _a.LEFT)
      if (A.target === j)
        z.focus();
      else {
        const G = b.current.indexOf(A.target) - 1;
        b.current[G].focus();
      }
    else if ((A.keyCode || A.which) === _a.RIGHT)
      if (A.target === z)
        j.focus();
      else {
        const G = b.current.indexOf(A.target) + 1;
        b.current[G].focus();
      }
  }, g = (A) => {
    u(v.findIndex((j) => j === A)), l !== void 0 && l(A, v.length);
  }, L = E.map((A) => {
    let j = [...v];
    return j = j.pop(), typeof A == "number" ? {
      onClick: (z) => {
        g(A);
      },
      type: "section",
      section: A,
      selected: c(A),
      ref: D,
      onKeyDown: N
    } : {
      onClick: () => {
        g(x[A]);
      },
      type: A,
      section: x[A],
      selected: !1,
      disabled: A === "next" ? h >= j : h <= v[0]
    };
  });
  return J(() => {
    l !== void 0 && l(h, v.length);
  }, []), /* @__PURE__ */ F(mt, {
    children: [/* @__PURE__ */ p("h2", {
      id: "section-list-navigation",
      className: "u-sr-only",
      children: o
    }), /* @__PURE__ */ p("ul", {
      role: "tablist",
      "aria-labelledby": "section-list-navigation",
      "aria-orientation": i,
      className: re({
        [er["c-navigation"]]: !d,
        [s]: s
      }),
      children: e ? e(L) : L.map(({
        section: A,
        type: j,
        selected: z,
        ...G
      }, Y) => /* @__PURE__ */ p("li", {
        role: "presentation",
        "data-class": "c-navigation__item",
        className: re({
          [er["c-navigation__item"]]: !d
        }),
        children: j === "section" ? /* @__PURE__ */ p("button", {
          id: `navigation-section-tab-${A}`,
          role: "tab",
          tabIndex: `${z ? 0 : -1}`,
          "aria-selected": z,
          "data-class": "c-navigation__section",
          className: re({
            [er["c-navigation__section"]]: !d
          }),
          "aria-label": f(j, A, z),
          ...G
        }) : /* @__PURE__ */ p("button", {
          type: "button",
          "data-class": "c-navigation__button",
          className: re({
            [er["c-navigation__button"]]: !d
          }),
          "aria-label": f(j, A, z),
          ...G,
          children: w[j] ? n ? /* @__PURE__ */ p(Ce, {
            path: w[j]
          }, j) : /* @__PURE__ */ p(Ce, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: w[j]
            })
          }, j) : null
        })
      }, `navigation-section-item-${Y}`))
    })]
  });
};
rs.propTypes = {
  renderItem: a.exports.func,
  showNextButton: a.exports.bool,
  showPrevButton: a.exports.bool,
  icons: a.exports.shape({
    next: a.exports.string,
    previous: a.exports.string
  }),
  label: a.exports.string,
  orientation: a.exports.string,
  onValue: a.exports.func,
  addClass: a.exports.string,
  getItemAriaLabel: a.exports.func,
  defaultStyle: a.exports.bool
};
rs.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: zu
};
const Uu = ({
  children: e,
  section: t,
  onClick: r
}) => {
  const {
    onToggle: n
  } = Pe(bn), o = (i) => {
    n(t - 1), r && r(i);
  };
  return Ae.map(e, (i) => De(i, {
    ...i.props,
    onClick: o
  }));
};
Uu.propTypes = {
  children: a.exports.oneOfType([a.exports.element, a.exports.node]).isRequired,
  section: a.exports.number.isRequired,
  onClick: a.exports.func
};
const Hu = {
  "c-paper": "_c-paper_1sbf6_1"
}, Gu = ({
  children: e,
  color: t,
  addClass: r,
  ...n
}) => {
  const o = ee(null);
  return un(() => {
    t && o.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p("div", {
    ref: o,
    className: `${Hu["c-paper"]} ${r != null ? r : ""}`,
    ...n,
    children: e
  });
};
Gu.propTypes = {
  children: a.exports.oneOfType([a.exports.element, a.exports.node, a.exports.arrayOf(a.exports.element), a.exports.arrayOf(a.exports.node)]),
  addClass: a.exports.string,
  color: a.exports.string
};
const Zu = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Xu = (e) => {
  document.body.append(e);
}, Ku = (e) => {
  const t = ee(null);
  J(() => {
    const n = document.querySelector(`#${e}`), o = n || Zu(e);
    return n || Xu(o), o.append(t.current), () => {
      t.current.remove(), o.childElementCount || o.remove();
    };
  }, [e]);
  function r() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return r();
}, fr = ({
  children: e,
  id: t
}) => {
  const r = Ku(t);
  return ti(e, r);
};
fr.propTypes = {
  children: a.exports.any,
  id: a.exports.string.isRequired
};
const Qu = "_row_1adiy_1", Ju = {
  row: Qu
}, ef = xt(({
  addClass: e,
  ...t
}, r) => /* @__PURE__ */ p("div", {
  ref: r,
  className: `${Ju.row} ${e != null ? e : ""}`,
  ...t
}));
ef.propTypes = {
  addClass: a.exports.string
};
const yr = {
  "c-select-label": "_c-select-label_16c2e_1",
  "c-select-wrapper": "_c-select-wrapper_16c2e_11",
  "c-select": "_c-select_16c2e_1",
  "c-select__icon": "_c-select__icon_16c2e_38"
}, ns = xt(({
  children: e,
  id: t,
  placeholder: r,
  label: n,
  icon: o,
  addClass: i,
  isLabelVisible: l,
  isDisabled: s,
  isRequired: f,
  onChoise: d,
  defaultValue: c,
  defaultStyle: u
}, v) => {
  const h = t || $t(), b = ({
    target: x
  }) => {
    d && d({
      id: h,
      value: x.value
    });
  };
  return /* @__PURE__ */ F("label", {
    htmlFor: h,
    className: re({
      [yr["c-select-label"]]: !u,
      [i]: i
    }),
    children: [/* @__PURE__ */ F("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", n, " "]
    }), /* @__PURE__ */ F("div", {
      className: yr["c-select-wrapper"],
      "data-class": "c-select-wrapper",
      children: [/* @__PURE__ */ F("select", {
        id: h,
        ref: v,
        name: h,
        defaultValue: c,
        className: re({
          [yr["c-select"]]: !u
        }),
        "data-class": "c-select",
        onChange: b,
        disabled: s,
        required: f,
        children: [/* @__PURE__ */ p("option", {
          value: "default",
          disabled: !0,
          children: r
        }), Ze(e, ["option", "optgroup"])]
      }), o ? /* @__PURE__ */ p(Ce, {
        path: o,
        "data-class": "c-select__icon",
        addClass: re({
          [yr["c-select__icon"]]: !u
        })
      }) : /* @__PURE__ */ p(Ce, {
        "data-class": "c-select__icon",
        addClass: re({
          [yr["c-select__icon"]]: !u
        }),
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
ns.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
ns.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.node]),
  id: a.exports.string,
  placeholder: a.exports.string,
  label: a.exports.string.isRequired,
  icon: a.exports.string,
  addClass: a.exports.string,
  isLabelVisible: a.exports.bool,
  isDisabled: a.exports.bool,
  isRequired: a.exports.bool,
  onChoise: a.exports.func,
  defaultValue: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("Select")
};
const tf = ({
  children: e,
  onAllSelect: t
}) => {
  const [r, n] = te([]), o = (l) => n([...r.filter((s) => s.id !== l.id), {
    ...l
  }]);
  return J(() => {
    t && t(r);
  }, [r, t]), Ae.map(e, (l) => {
    var s;
    return lt(l) ? ((s = l == null ? void 0 : l.props) == null ? void 0 : s.__TYPE) === "Select" ? De(l, {
      ...l.props,
      onChoise: o
    }) : l : null;
  });
};
tf.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  onAllSelect: a.exports.func
};
const zn = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, xa = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), os = xt(({
  id: e,
  name: t,
  size: r,
  value: n,
  label: o,
  addClass: i,
  isDisabled: l,
  defaultChecked: s,
  isLabelVisible: f,
  onChange: d
}, c) => {
  const [u, v] = te(!1), h = e || $t(), b = ({
    target: w
  }) => {
    if (v(w.checked), !!d) {
      if (w.checked) {
        d({
          id: w.id,
          value: w.value
        });
        return;
      }
      d({
        id: w.id,
        value: ""
      });
    }
  }, x = (w) => {
    ((w.keyCode || w.which) === xa.SPACE || (w.keyCode || w.which) === xa.ENTER) && v((E) => (d && d(E ? {
      id: h,
      value: ""
    } : {
      id: h,
      value: `${n}`
    }), !E));
  };
  return J(() => (s && v(!!s), () => {
    v(!1);
  }), [s]), /* @__PURE__ */ F("label", {
    htmlFor: h,
    className: `${zn["c-label"]} ${zn[`is-${r}`]}`,
    children: [/* @__PURE__ */ F("span", {
      className: `${!f && "u-sr-only"}`,
      children: [" ", o, " "]
    }), /* @__PURE__ */ p("input", {
      id: h,
      ref: c,
      role: "switch",
      type: "checkbox",
      name: t,
      value: n,
      checked: u,
      "aria-disabled": l,
      className: `${zn["c-switch"]} ${i != null ? i : ""}`,
      onChange: b,
      onKeyDown: x,
      ...l && {
        disabled: !0
      }
    })]
  });
});
os.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
os.propTypes = {
  id: a.exports.string,
  name: a.exports.string,
  size: a.exports.string.isRequired,
  value: a.exports.oneOfType([a.exports.string, a.exports.number, a.exports.bool]),
  label: a.exports.string,
  addClass: a.exports.string,
  isDisabled: a.exports.bool,
  defaultChecked: a.exports.bool,
  isLabelVisible: a.exports.bool,
  onChange: a.exports.func
};
const Ao = ut(), rf = ({
  children: e,
  defaultIndex: t,
  addClass: r,
  ...n
}) => {
  const [o, i] = te(0), l = (f) => i(f), s = (f) => o === f;
  return J(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(Ao.Provider, {
    value: {
      validation: s,
      onToggle: l
    },
    children: /* @__PURE__ */ p("div", {
      ...r && {
        className: `${r}`
      },
      ...n,
      children: Ze(e, ["TabList", "TabPanels"])
    })
  });
};
rf.propTypes = {
  children: a.exports.arrayOf(a.exports.element),
  defaultIndex: a.exports.number,
  addClass: a.exports.string
};
const Ir = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, as = ({
  children: e,
  id: t,
  selected: r,
  addClass: n,
  icon: o,
  addNewRef: i,
  onNavigation: l,
  onClick: s,
  defaultStyle: f,
  __TYPE: d,
  ...c
}) => {
  const u = ee(), {
    validation: v,
    onToggle: h
  } = Pe(Ao), b = v(t), x = (w) => {
    s && s(w), h(t);
  };
  return J(() => (u.current && i(u.current), () => {
    u.current = null;
  }), [u]), /* @__PURE__ */ F("button", {
    id: `tab-${t}`,
    role: "tab",
    ref: u,
    "data-type": d,
    tabIndex: `${b ? 0 : -1}`,
    "aria-controls": `panel-${t}`,
    "aria-selected": b,
    onKeyDown: l,
    onClick: x,
    className: re({
      [`${Ir["c-tab__button"]} u-flex`]: !f,
      [n]: n,
      [b]: r
    }),
    ...c,
    children: [e, o && o(b)]
  });
};
as.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  id: a.exports.number,
  selected: a.exports.string,
  addClass: a.exports.string,
  icon: a.exports.func,
  addNewRef: a.exports.func,
  onClick: a.exports.func,
  onNavigation: a.exports.func,
  defaultStyle: a.exports.bool,
  __TYPE: xe("Tab")
};
as.defaultProps = {
  __TYPE: "Tab"
};
const wa = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), is = ({
  children: e,
  addClass: t,
  label: r,
  orientation: n,
  defaultStyle: o,
  __TYPE: i,
  ...l
}) => {
  const s = ee([]), f = (u) => s.current = [...s.current, u], d = (u) => {
    const v = s.current[0], h = s.current[s.current.length - 1];
    if ((u.keyCode || u.which) === wa.LEFT)
      if (u.target === v)
        h.focus();
      else {
        const b = s.current.indexOf(u.target) - 1;
        s.current[b].focus();
      }
    else if ((u.keyCode || u.which) === wa.RIGHT)
      if (u.target === h)
        v.focus();
      else {
        const b = s.current.indexOf(u.target) + 1;
        s.current[b].focus();
      }
  }, c = Ae.map(e, (u, v) => lt(u) ? De(u, {
    ...u.props,
    id: v,
    addNewRef: f,
    onNavigation: d
  }) : null);
  return /* @__PURE__ */ p("div", {
    role: "tablist",
    "data-type": i,
    "aria-label": r,
    "aria-orientation": n,
    className: re({
      [Ir["c-tab__list"]]: !o,
      [t]: t
    }),
    ...l,
    children: Ze(c, ["Tab"])
  });
};
is.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element]),
  addClass: a.exports.string,
  label: a.exports.string,
  orientation: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("TabList")
};
is.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const ss = ({
  children: e,
  id: t,
  addClass: r,
  defaultStyle: n,
  __TYPE: o,
  ...i
}) => {
  const {
    validation: l
  } = Pe(Ao), s = l(t);
  return /* @__PURE__ */ p("div", {
    id: `panel-${t}`,
    role: "tabpanel",
    tabIndex: 0,
    "data-type": o,
    "aria-hidden": !s,
    hidden: !s,
    "aria-labelledby": `tab-${t}`,
    className: re({
      [Ir["c-tab__panel--active"]]: !n && s,
      [Ir["c-tab__panel"]]: !n && !s,
      ["video-interpreter-ui-tabpanel"]: "video-interpreter-ui-tabpanel",
      [r]: r
    }),
    ...i,
    children: e
  });
};
ss.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  id: a.exports.number,
  addClass: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("TabPanel")
};
ss.defaultProps = {
  __TYPE: "TabPanel"
};
const cs = ({
  children: e,
  addClass: t,
  defaultStyle: r,
  __TYPE: n,
  ...o
}) => {
  const i = Ae.map(e, (l, s) => lt(l) ? De(l, {
    ...l.props,
    id: s
  }) : null);
  return /* @__PURE__ */ p("div", {
    className: re({
      [Ir["c-tab__panels"]]: !r,
      [t]: t
    }),
    "data-type": n,
    ...o,
    children: Ze(i, ["TabPanel"])
  });
};
cs.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.element]),
  addClass: a.exports.string,
  defaultStyle: a.exports.bool,
  __TYPE: xe("TabPanels")
};
cs.defaultProps = {
  __TYPE: "TabPanels"
};
const Un = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, ls = xt(({
  id: e,
  value: t,
  resize: r,
  placeholder: n,
  label: o,
  addClass: i,
  isLabelVisible: l,
  isDisabled: s,
  isRequired: f,
  defaultStyle: d,
  onValue: c,
  ...u
}, v) => {
  const h = e || $t(), b = ({
    target: x
  }) => {
    c && c({
      id: h,
      value: x.value
    });
  };
  return /* @__PURE__ */ F("label", {
    htmlFor: h,
    className: re({
      [Un["c-label"]]: !d,
      [i]: i
    }),
    children: [/* @__PURE__ */ F("span", {
      className: `${!l && "u-sr-only"}`,
      children: [" ", o, " "]
    }), /* @__PURE__ */ p("textarea", {
      id: h,
      ref: v,
      defaultValue: t,
      disabled: s,
      required: f,
      placeholder: n,
      autoComplete: "off",
      onChange: b,
      "data-class": "c-textarea",
      className: re({
        [`${Un["c-textarea"]} ${Un[`c-textarea--${r}`]}`]: !d
      }),
      ...u
    })]
  });
});
ls.defaultProps = {
  resize: "vertical",
  placeholder: "This is an example of a placeholder"
};
ls.propTypes = {
  id: a.exports.string,
  value: a.exports.string,
  resize: a.exports.oneOf(["none", "horizontal", "vertical"]),
  placeholder: a.exports.string,
  label: a.exports.string,
  addClass: a.exports.string,
  isLabelVisible: a.exports.bool,
  isDisabled: a.exports.bool,
  isRequired: a.exports.bool,
  defaultStyle: a.exports.bool,
  onValue: a.exports.func
};
const nf = Ja(({
  children: e,
  theme: t = {}
}) => {
  const r = (n) => {
    const o = document.createElement("style");
    document.head.append(o);
    const i = o.sheet;
    let l = "";
    for (const s in n)
      l += `--clr-${s}: ${n[s]};
`;
    i.insertRule(`:root{${l}}`);
  };
  return J(() => {
    if (Object.entries(t).length !== 0)
      return r(t), () => {
        t = {};
      };
  }, [t]), e;
});
nf.propTypes = {
  children: a.exports.oneOfType([a.exports.array, a.exports.element]),
  theme: a.exports.object.isRequired
};
var Ta = function(t) {
  return t.reduce(function(r, n) {
    var o = n[0], i = n[1];
    return r[o] = i, r;
  }, {});
}, Ea = typeof window < "u" && window.document && window.document.createElement ? zt.useLayoutEffect : zt.useEffect, He = "top", st = "bottom", ct = "right", Ge = "left", yn = "auto", Lr = [He, st, ct, Ge], ar = "start", Nr = "end", of = "clippingParents", us = "viewport", _r = "popper", af = "reference", Oa = /* @__PURE__ */ Lr.reduce(function(e, t) {
  return e.concat([t + "-" + ar, t + "-" + Nr]);
}, []), fs = /* @__PURE__ */ [].concat(Lr, [yn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ar, t + "-" + Nr]);
}, []), sf = "beforeRead", cf = "read", lf = "afterRead", uf = "beforeMain", ff = "main", df = "afterMain", pf = "beforeWrite", vf = "write", hf = "afterWrite", ho = [sf, cf, lf, uf, ff, df, pf, vf, hf];
function _t(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ft(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Gt(e) {
  var t = ft(e).Element;
  return e instanceof t || e instanceof Element;
}
function et(e) {
  var t = ft(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Io(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ft(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function gf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !et(i) || !_t(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(l) {
      var s = o[l];
      s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function mf(e) {
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
      var o = t.elements[n], i = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = l.reduce(function(f, d) {
        return f[d] = "", f;
      }, {});
      !et(o) || !_t(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(f) {
        o.removeAttribute(f);
      }));
    });
  };
}
const bf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gf,
  effect: mf,
  requires: ["computeStyles"]
};
function gt(e) {
  return e.split("-")[0];
}
var Ht = Math.max, on = Math.min, ir = Math.round;
function go() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ds() {
  return !/^((?!chrome|android).)*safari/i.test(go());
}
function sr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && et(e) && (o = e.offsetWidth > 0 && ir(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ir(n.height) / e.offsetHeight || 1);
  var l = Gt(e) ? ft(e) : window, s = l.visualViewport, f = !ds() && r, d = (n.left + (f && s ? s.offsetLeft : 0)) / o, c = (n.top + (f && s ? s.offsetTop : 0)) / i, u = n.width / o, v = n.height / i;
  return {
    width: u,
    height: v,
    top: c,
    right: d + u,
    bottom: c + v,
    left: d,
    x: d,
    y: c
  };
}
function No(e) {
  var t = sr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function ps(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Io(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function yt(e) {
  return ft(e).getComputedStyle(e);
}
function yf(e) {
  return ["table", "td", "th"].indexOf(_t(e)) >= 0;
}
function Mt(e) {
  return ((Gt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function _n(e) {
  return _t(e) === "html" ? e : e.assignedSlot || e.parentNode || (Io(e) ? e.host : null) || Mt(e);
}
function Sa(e) {
  return !et(e) || yt(e).position === "fixed" ? null : e.offsetParent;
}
function _f(e) {
  var t = /firefox/i.test(go()), r = /Trident/i.test(go());
  if (r && et(e)) {
    var n = yt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = _n(e);
  for (Io(o) && (o = o.host); et(o) && ["html", "body"].indexOf(_t(o)) < 0; ) {
    var i = yt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Fr(e) {
  for (var t = ft(e), r = Sa(e); r && yf(r) && yt(r).position === "static"; )
    r = Sa(r);
  return r && (_t(r) === "html" || _t(r) === "body" && yt(r).position === "static") ? t : r || _f(e) || t;
}
function $o(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Pr(e, t, r) {
  return Ht(e, on(t, r));
}
function xf(e, t, r) {
  var n = Pr(e, t, r);
  return n > r ? r : n;
}
function vs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function hs(e) {
  return Object.assign({}, vs(), e);
}
function gs(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var wf = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, hs(typeof t != "number" ? t : gs(t, Lr));
};
function Tf(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, l = r.modifiersData.popperOffsets, s = gt(r.placement), f = $o(s), d = [Ge, ct].indexOf(s) >= 0, c = d ? "height" : "width";
  if (!(!i || !l)) {
    var u = wf(o.padding, r), v = No(i), h = f === "y" ? He : Ge, b = f === "y" ? st : ct, x = r.rects.reference[c] + r.rects.reference[f] - l[f] - r.rects.popper[c], w = l[f] - r.rects.reference[f], E = Fr(i), $ = E ? f === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, D = x / 2 - w / 2, N = u[h], g = $ - v[c] - u[b], L = $ / 2 - v[c] / 2 + D, A = Pr(N, L, g), j = f;
    r.modifiersData[n] = (t = {}, t[j] = A, t.centerOffset = A - L, t);
  }
}
function Ef(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  if (o != null && !(typeof o == "string" && (o = t.elements.popper.querySelector(o), !o))) {
    if (process.env.NODE_ENV !== "production" && (et(o) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ps(t.elements.popper, o)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = o;
  }
}
const Of = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Tf,
  effect: Ef,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function cr(e) {
  return e.split("-")[1];
}
var Sf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Pf(e) {
  var t = e.x, r = e.y, n = window, o = n.devicePixelRatio || 1;
  return {
    x: ir(t * o) / o || 0,
    y: ir(r * o) / o || 0
  };
}
function Pa(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, l = e.offsets, s = e.position, f = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, u = e.isFixed, v = l.x, h = v === void 0 ? 0 : v, b = l.y, x = b === void 0 ? 0 : b, w = typeof c == "function" ? c({
    x: h,
    y: x
  }) : {
    x: h,
    y: x
  };
  h = w.x, x = w.y;
  var E = l.hasOwnProperty("x"), $ = l.hasOwnProperty("y"), D = Ge, N = He, g = window;
  if (d) {
    var L = Fr(r), A = "clientHeight", j = "clientWidth";
    if (L === ft(r) && (L = Mt(r), yt(L).position !== "static" && s === "absolute" && (A = "scrollHeight", j = "scrollWidth")), L = L, o === He || (o === Ge || o === ct) && i === Nr) {
      N = st;
      var z = u && L === g && g.visualViewport ? g.visualViewport.height : L[A];
      x -= z - n.height, x *= f ? 1 : -1;
    }
    if (o === Ge || (o === He || o === st) && i === Nr) {
      D = ct;
      var G = u && L === g && g.visualViewport ? g.visualViewport.width : L[j];
      h -= G - n.width, h *= f ? 1 : -1;
    }
  }
  var Y = Object.assign({
    position: s
  }, d && Sf), W = c === !0 ? Pf({
    x: h,
    y: x
  }) : {
    x: h,
    y: x
  };
  if (h = W.x, x = W.y, f) {
    var Z;
    return Object.assign({}, Y, (Z = {}, Z[N] = $ ? "0" : "", Z[D] = E ? "0" : "", Z.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + x + "px)" : "translate3d(" + h + "px, " + x + "px, 0)", Z));
  }
  return Object.assign({}, Y, (t = {}, t[N] = $ ? x + "px" : "", t[D] = E ? h + "px" : "", t.transform = "", t));
}
function Rf(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, l = i === void 0 ? !0 : i, s = r.roundOffsets, f = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var d = yt(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(u) {
      return d.indexOf(u) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: gt(t.placement),
    variation: cr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Pa(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Pa(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Cf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Rf,
  data: {}
};
var Hr = {
  passive: !0
};
function Df(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, l = n.resize, s = l === void 0 ? !0 : l, f = ft(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && d.forEach(function(c) {
    c.addEventListener("scroll", r.update, Hr);
  }), s && f.addEventListener("resize", r.update, Hr), function() {
    i && d.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Hr);
    }), s && f.removeEventListener("resize", r.update, Hr);
  };
}
const Af = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Df,
  data: {}
};
var If = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Kr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return If[t];
  });
}
var Nf = {
  start: "end",
  end: "start"
};
function Ra(e) {
  return e.replace(/start|end/g, function(t) {
    return Nf[t];
  });
}
function Mo(e) {
  var t = ft(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ko(e) {
  return sr(Mt(e)).left + Mo(e).scrollLeft;
}
function $f(e, t) {
  var r = ft(e), n = Mt(e), o = r.visualViewport, i = n.clientWidth, l = n.clientHeight, s = 0, f = 0;
  if (o) {
    i = o.width, l = o.height;
    var d = ds();
    (d || !d && t === "fixed") && (s = o.offsetLeft, f = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s + ko(e),
    y: f
  };
}
function Mf(e) {
  var t, r = Mt(e), n = Mo(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ht(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Ht(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + ko(e), f = -n.scrollTop;
  return yt(o || r).direction === "rtl" && (s += Ht(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: f
  };
}
function jo(e) {
  var t = yt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function ms(e) {
  return ["html", "body", "#document"].indexOf(_t(e)) >= 0 ? e.ownerDocument.body : et(e) && jo(e) ? e : ms(_n(e));
}
function Rr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ms(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ft(n), l = o ? [i].concat(i.visualViewport || [], jo(n) ? n : []) : n, s = t.concat(l);
  return o ? s : s.concat(Rr(_n(l)));
}
function mo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function kf(e, t) {
  var r = sr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ca(e, t, r) {
  return t === us ? mo($f(e, r)) : Gt(t) ? kf(t, r) : mo(Mf(Mt(e)));
}
function jf(e) {
  var t = Rr(_n(e)), r = ["absolute", "fixed"].indexOf(yt(e).position) >= 0, n = r && et(e) ? Fr(e) : e;
  return Gt(n) ? t.filter(function(o) {
    return Gt(o) && ps(o, n) && _t(o) !== "body";
  }) : [];
}
function Lf(e, t, r, n) {
  var o = t === "clippingParents" ? jf(e) : [].concat(t), i = [].concat(o, [r]), l = i[0], s = i.reduce(function(f, d) {
    var c = Ca(e, d, n);
    return f.top = Ht(c.top, f.top), f.right = on(c.right, f.right), f.bottom = on(c.bottom, f.bottom), f.left = Ht(c.left, f.left), f;
  }, Ca(e, l, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function bs(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? gt(n) : null, i = n ? cr(n) : null, l = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, f;
  switch (o) {
    case He:
      f = {
        x: l,
        y: t.y - r.height
      };
      break;
    case st:
      f = {
        x: l,
        y: t.y + t.height
      };
      break;
    case ct:
      f = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Ge:
      f = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var d = o ? $o(o) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (i) {
      case ar:
        f[d] = f[d] - (t[c] / 2 - r[c] / 2);
        break;
      case Nr:
        f[d] = f[d] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return f;
}
function $r(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, l = i === void 0 ? e.strategy : i, s = r.boundary, f = s === void 0 ? of : s, d = r.rootBoundary, c = d === void 0 ? us : d, u = r.elementContext, v = u === void 0 ? _r : u, h = r.altBoundary, b = h === void 0 ? !1 : h, x = r.padding, w = x === void 0 ? 0 : x, E = hs(typeof w != "number" ? w : gs(w, Lr)), $ = v === _r ? af : _r, D = e.rects.popper, N = e.elements[b ? $ : v], g = Lf(Gt(N) ? N : N.contextElement || Mt(e.elements.popper), f, c, l), L = sr(e.elements.reference), A = bs({
    reference: L,
    element: D,
    strategy: "absolute",
    placement: o
  }), j = mo(Object.assign({}, D, A)), z = v === _r ? j : L, G = {
    top: g.top - z.top + E.top,
    bottom: z.bottom - g.bottom + E.bottom,
    left: g.left - z.left + E.left,
    right: z.right - g.right + E.right
  }, Y = e.modifiersData.offset;
  if (v === _r && Y) {
    var W = Y[o];
    Object.keys(G).forEach(function(Z) {
      var X = [ct, st].indexOf(Z) >= 0 ? 1 : -1, ne = [He, st].indexOf(Z) >= 0 ? "y" : "x";
      G[Z] += W[ne] * X;
    });
  }
  return G;
}
function Ff(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, l = r.padding, s = r.flipVariations, f = r.allowedAutoPlacements, d = f === void 0 ? fs : f, c = cr(n), u = c ? s ? Oa : Oa.filter(function(b) {
    return cr(b) === c;
  }) : Lr, v = u.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  v.length === 0 && (v = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(b, x) {
    return b[x] = $r(e, {
      placement: x,
      boundary: o,
      rootBoundary: i,
      padding: l
    })[gt(x)], b;
  }, {});
  return Object.keys(h).sort(function(b, x) {
    return h[b] - h[x];
  });
}
function qf(e) {
  if (gt(e) === yn)
    return [];
  var t = Kr(e);
  return [Ra(e), t, Ra(t)];
}
function Bf(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, l = r.altAxis, s = l === void 0 ? !0 : l, f = r.fallbackPlacements, d = r.padding, c = r.boundary, u = r.rootBoundary, v = r.altBoundary, h = r.flipVariations, b = h === void 0 ? !0 : h, x = r.allowedAutoPlacements, w = t.options.placement, E = gt(w), $ = E === w, D = f || ($ || !b ? [Kr(w)] : qf(w)), N = [w].concat(D).reduce(function(O, C) {
      return O.concat(gt(C) === yn ? Ff(t, {
        placement: C,
        boundary: c,
        rootBoundary: u,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: x
      }) : C);
    }, []), g = t.rects.reference, L = t.rects.popper, A = /* @__PURE__ */ new Map(), j = !0, z = N[0], G = 0; G < N.length; G++) {
      var Y = N[G], W = gt(Y), Z = cr(Y) === ar, X = [He, st].indexOf(W) >= 0, ne = X ? "width" : "height", H = $r(t, {
        placement: Y,
        boundary: c,
        rootBoundary: u,
        altBoundary: v,
        padding: d
      }), K = X ? Z ? ct : Ge : Z ? st : He;
      g[ne] > L[ne] && (K = Kr(K));
      var ce = Kr(K), se = [];
      if (i && se.push(H[W] <= 0), s && se.push(H[K] <= 0, H[ce] <= 0), se.every(function(O) {
        return O;
      })) {
        z = Y, j = !1;
        break;
      }
      A.set(Y, se);
    }
    if (j)
      for (var _ = b ? 3 : 1, R = function(C) {
        var S = N.find(function(I) {
          var M = A.get(I);
          if (M)
            return M.slice(0, C).every(function(V) {
              return V;
            });
        });
        if (S)
          return z = S, "break";
      }, y = _; y > 0; y--) {
        var T = R(y);
        if (T === "break")
          break;
      }
    t.placement !== z && (t.modifiersData[n]._skip = !0, t.placement = z, t.reset = !0);
  }
}
const Vf = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Bf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Da(e, t, r) {
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
function Aa(e) {
  return [He, ct, st, Ge].some(function(t) {
    return e[t] >= 0;
  });
}
function Yf(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, l = $r(t, {
    elementContext: "reference"
  }), s = $r(t, {
    altBoundary: !0
  }), f = Da(l, n), d = Da(s, o, i), c = Aa(f), u = Aa(d);
  t.modifiersData[r] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: d,
    isReferenceHidden: c,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": u
  });
}
const Wf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Yf
};
function zf(e, t, r) {
  var n = gt(e), o = [Ge, He].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, l = i[0], s = i[1];
  return l = l || 0, s = (s || 0) * o, [Ge, ct].indexOf(n) >= 0 ? {
    x: s,
    y: l
  } : {
    x: l,
    y: s
  };
}
function Uf(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, l = fs.reduce(function(c, u) {
    return c[u] = zf(u, t.rects, i), c;
  }, {}), s = l[t.placement], f = s.x, d = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = l;
}
const Hf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Uf
};
function Gf(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = bs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Zf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Gf,
  data: {}
};
function Xf(e) {
  return e === "x" ? "y" : "x";
}
function Kf(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, l = r.altAxis, s = l === void 0 ? !1 : l, f = r.boundary, d = r.rootBoundary, c = r.altBoundary, u = r.padding, v = r.tether, h = v === void 0 ? !0 : v, b = r.tetherOffset, x = b === void 0 ? 0 : b, w = $r(t, {
    boundary: f,
    rootBoundary: d,
    padding: u,
    altBoundary: c
  }), E = gt(t.placement), $ = cr(t.placement), D = !$, N = $o(E), g = Xf(N), L = t.modifiersData.popperOffsets, A = t.rects.reference, j = t.rects.popper, z = typeof x == "function" ? x(Object.assign({}, t.rects, {
    placement: t.placement
  })) : x, G = typeof z == "number" ? {
    mainAxis: z,
    altAxis: z
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, z), Y = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (!!L) {
    if (i) {
      var Z, X = N === "y" ? He : Ge, ne = N === "y" ? st : ct, H = N === "y" ? "height" : "width", K = L[N], ce = K + w[X], se = K - w[ne], _ = h ? -j[H] / 2 : 0, R = $ === ar ? A[H] : j[H], y = $ === ar ? -j[H] : -A[H], T = t.elements.arrow, O = h && T ? No(T) : {
        width: 0,
        height: 0
      }, C = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vs(), S = C[X], I = C[ne], M = Pr(0, A[H], O[H]), V = D ? A[H] / 2 - _ - M - S - G.mainAxis : R - M - S - G.mainAxis, k = D ? -A[H] / 2 + _ + M + I + G.mainAxis : y + M + I + G.mainAxis, oe = t.elements.arrow && Fr(t.elements.arrow), P = oe ? N === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, q = (Z = Y == null ? void 0 : Y[N]) != null ? Z : 0, Q = K + V - q - P, ie = K + k - q, ye = Pr(h ? on(ce, Q) : ce, K, h ? Ht(se, ie) : se);
      L[N] = ye, W[N] = ye - K;
    }
    if (s) {
      var $e, dt = N === "x" ? He : Ge, qe = N === "x" ? st : ct, Te = L[g], Ye = g === "y" ? "height" : "width", Ke = Te + w[dt], kt = Te - w[qe], Pt = [He, Ge].indexOf(E) !== -1, jt = ($e = Y == null ? void 0 : Y[g]) != null ? $e : 0, Lt = Pt ? Ke : Te - A[Ye] - j[Ye] - jt + G.altAxis, Be = Pt ? Te + A[Ye] + j[Ye] - jt - G.altAxis : kt, pt = h && Pt ? xf(Lt, Te, Be) : Pr(h ? Lt : Ke, Te, h ? Be : kt);
      L[g] = pt, W[g] = pt - Te;
    }
    t.modifiersData[n] = W;
  }
}
const Qf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Kf,
  requiresIfExists: ["offset"]
};
function Jf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ed(e) {
  return e === ft(e) || !et(e) ? Mo(e) : Jf(e);
}
function td(e) {
  var t = e.getBoundingClientRect(), r = ir(t.width) / e.offsetWidth || 1, n = ir(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function rd(e, t, r) {
  r === void 0 && (r = !1);
  var n = et(t), o = et(t) && td(t), i = Mt(t), l = sr(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((_t(t) !== "body" || jo(i)) && (s = ed(t)), et(t) ? (f = sr(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : i && (f.x = ko(i))), {
    x: l.left + s.scrollLeft - f.x,
    y: l.top + s.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function nd(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function(s) {
      if (!r.has(s)) {
        var f = t.get(s);
        f && o(f);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function od(e) {
  var t = nd(e);
  return ho.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function ad(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ct(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(o, i) {
    return o.replace(/%s/, i);
  }, e);
}
var Wt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', id = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ia = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function sd(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Ia).filter(function(r, n, o) {
      return o.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Ct(Wt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Ct(Wt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          ho.indexOf(t.phase) < 0 && console.error(Ct(Wt, t.name, '"phase"', "either " + ho.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Ct(Wt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Ct(Wt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Ct(Wt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Ct(Wt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Ia.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(o) {
          return o.name === n;
        }) == null && console.error(Ct(id, String(t.name), n, n));
      });
    });
  });
}
function cd(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var o = t(n);
    if (!r.has(o))
      return r.add(o), !0;
  });
}
function ld(e) {
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
var Na = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ud = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", $a = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ma() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function fd(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? $a : o;
  return function(s, f, d) {
    d === void 0 && (d = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $a, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: f
      },
      attributes: {},
      styles: {}
    }, u = [], v = !1, h = {
      state: c,
      setOptions: function(E) {
        var $ = typeof E == "function" ? E(c.options) : E;
        x(), c.options = Object.assign({}, i, c.options, $), c.scrollParents = {
          reference: Gt(s) ? Rr(s) : s.contextElement ? Rr(s.contextElement) : [],
          popper: Rr(f)
        };
        var D = od(ld([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = D.filter(function(Y) {
          return Y.enabled;
        }), process.env.NODE_ENV !== "production") {
          var N = cd([].concat(D, c.options.modifiers), function(Y) {
            var W = Y.name;
            return W;
          });
          if (sd(N), gt(c.options.placement) === yn) {
            var g = c.orderedModifiers.find(function(Y) {
              var W = Y.name;
              return W === "flip";
            });
            g || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var L = yt(f), A = L.marginTop, j = L.marginRight, z = L.marginBottom, G = L.marginLeft;
          [A, j, z, G].some(function(Y) {
            return parseFloat(Y);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), h.update();
      },
      forceUpdate: function() {
        if (!v) {
          var E = c.elements, $ = E.reference, D = E.popper;
          if (!Ma($, D)) {
            process.env.NODE_ENV !== "production" && console.error(Na);
            return;
          }
          c.rects = {
            reference: rd($, Fr(D), c.options.strategy === "fixed"),
            popper: No(D)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(Y) {
            return c.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var N = 0, g = 0; g < c.orderedModifiers.length; g++) {
            if (process.env.NODE_ENV !== "production" && (N += 1, N > 100)) {
              console.error(ud);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, g = -1;
              continue;
            }
            var L = c.orderedModifiers[g], A = L.fn, j = L.options, z = j === void 0 ? {} : j, G = L.name;
            typeof A == "function" && (c = A({
              state: c,
              options: z,
              name: G,
              instance: h
            }) || c);
          }
        }
      },
      update: ad(function() {
        return new Promise(function(w) {
          h.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        x(), v = !0;
      }
    };
    if (!Ma(s, f))
      return process.env.NODE_ENV !== "production" && console.error(Na), h;
    h.setOptions(d).then(function(w) {
      !v && d.onFirstUpdate && d.onFirstUpdate(w);
    });
    function b() {
      c.orderedModifiers.forEach(function(w) {
        var E = w.name, $ = w.options, D = $ === void 0 ? {} : $, N = w.effect;
        if (typeof N == "function") {
          var g = N({
            state: c,
            name: E,
            instance: h,
            options: D
          }), L = function() {
          };
          u.push(g || L);
        }
      });
    }
    function x() {
      u.forEach(function(w) {
        return w();
      }), u = [];
    }
    return h;
  };
}
var dd = [Af, Zf, Cf, bf, Hf, Vf, Qf, Of, Wf], pd = /* @__PURE__ */ fd({
  defaultModifiers: dd
}), vd = typeof Element < "u", hd = typeof Map == "function", gd = typeof Set == "function", md = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Qr(e, t) {
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
        if (!Qr(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (hd && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Qr(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (gd && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (md && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (vd && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Qr(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var bd = function(t, r) {
  try {
    return Qr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
}, yd = [], xn = function(t, r, n) {
  n === void 0 && (n = {});
  var o = zt.useRef(null), i = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || yd
  }, l = zt.useState({
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
  }), s = l[0], f = l[1], d = zt.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var b = h.state, x = Object.keys(b.elements);
        Ws.flushSync(function() {
          f({
            styles: Ta(x.map(function(w) {
              return [w, b.styles[w] || {}];
            })),
            attributes: Ta(x.map(function(w) {
              return [w, b.attributes[w]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), c = zt.useMemo(function() {
    var v = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [d, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return bd(o.current, v) ? o.current || v : (o.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, d]), u = zt.useRef();
  return Ea(function() {
    u.current && u.current.setOptions(c);
  }, [c]), Ea(function() {
    if (!(t == null || r == null)) {
      var v = n.createPopper || pd, h = v(t, r, c);
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
const Hn = {
  "c-toggletip": "_c-toggletip_13rfh_1",
  "c-toggletip--active": "_c-toggletip--active_13rfh_20",
  "c-toggletip__arrow": "_c-toggletip__arrow_13rfh_24"
}, _d = Object.freeze({
  ESC: 27
}), ys = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: o,
  hasArrow: i,
  distance: l,
  isDisabled: s,
  isVisible: f,
  onClick: d
}) => {
  const [c, u] = te(!1), v = ee(null), h = ee(null), b = t || $t(), x = (g) => u(!1), w = (g) => {
    u(!c), c && document.activeElement === v.current && !f && setTimeout(() => {
      u((L) => !L);
    }, 100), d && d(g);
  }, E = (g) => {
    (g.keyCode | g.which) === _d.ESC && c && u(!c);
  }, $ = Ae.map(e, (g) => lt(g) ? De(g, {
    ...g.props,
    "aria-describedby": t,
    ref: v,
    onClick: w,
    "data-open": c,
    ...f ? {} : {
      onBlur: x,
      onKeyDown: E
    }
  }) : null), {
    styles: D,
    attributes: N
  } = xn(v.current, h.current, {
    placement: n,
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, l || 8]
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
  return !r || Ae.count(e) > 1 || s ? /* @__PURE__ */ p(mt, {
    children: e
  }) : /* @__PURE__ */ F(mt, {
    children: [$, /* @__PURE__ */ p(fr, {
      id: "js-toggletip-portal",
      children: /* @__PURE__ */ F("div", {
        id: b,
        ref: h,
        role: "status",
        className: `${Hn["c-toggletip"]} ${c && Hn["c-toggletip--active"]} ${o != null ? o : ""}`,
        style: D.popper,
        ...N.popper,
        children: [r, i && /* @__PURE__ */ p("div", {
          className: Hn["c-toggletip__arrow"],
          "data-popper-arrow": !0,
          style: D.arrow
        })]
      })
    })]
  });
};
ys.defaultProps = {
  placement: "auto"
};
ys.propTypes = {
  children: a.exports.oneOfType([a.exports.node, a.exports.element, a.exports.arrayOf(a.exports.element), a.exports.arrayOf(a.exports.node)]),
  id: a.exports.string,
  label: a.exports.string.isRequired,
  addClass: a.exports.string,
  hasArrow: a.exports.bool,
  isDisabled: a.exports.bool,
  distance: a.exports.number,
  onClick: a.exports.func,
  isVisible: a.exports.bool,
  placement: a.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const Gn = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, xd = Object.freeze({
  ESC: 27
}), _s = ({
  children: e,
  id: t,
  label: r,
  placement: n,
  addClass: o,
  hasArrow: i,
  distance: l,
  isDisabled: s
}) => {
  const [f, d] = te(!1), c = ee(null), u = ee(null), v = ee(), h = t || $t(), b = (A) => {
    f || d(!f);
  }, x = (A) => d(!1), w = (A) => {
    (!f || document.activeElement !== c.current) && d(!f);
  }, E = () => {
    window.clearTimeout(v.current);
  }, $ = (A) => {
    v.current = setTimeout(() => {
      d(!1);
    }, 150);
  }, D = (A) => {
    (A.keyCode | A.which) === xd.ESC && f && d(!f);
  }, N = Ae.map(e, (A) => lt(A) ? De(A, {
    ...A.props,
    "aria-describedby": t,
    ref: c,
    onFocus: b,
    onBlur: x,
    onMouseEnter: w,
    onMouseLeave: $,
    onKeyDown: D
  }) : null), {
    styles: g,
    attributes: L
  } = xn(c.current, u.current, {
    placement: n,
    modifiers: [{
      name: "offset",
      options: {
        offset: [0, l || 8]
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
  return !r || Ae.count(e) > 1 || s ? /* @__PURE__ */ p(mt, {
    children: e
  }) : /* @__PURE__ */ F(mt, {
    children: [N, /* @__PURE__ */ p(fr, {
      id: "js-tooltip-portal",
      children: /* @__PURE__ */ F("div", {
        id: h,
        ref: u,
        role: "tooltip",
        "data-open": f,
        onMouseEnter: E,
        onMouseLeave: $,
        className: `${Gn["c-tooltip"]} ${f && Gn["c-tooltip--active"]} ${o != null ? o : ""}`,
        style: g.popper,
        ...L.popper,
        children: [r, i && /* @__PURE__ */ p("div", {
          className: Gn["c-tooltip__arrow"],
          "data-popper-arrow": !0,
          style: g.arrow
        })]
      })
    })]
  });
};
_s.defaultProps = {
  placement: "auto"
};
_s.propTypes = {
  children: a.exports.oneOfType([a.exports.node, a.exports.element, a.exports.arrayOf(a.exports.element), a.exports.arrayOf(a.exports.node)]),
  id: a.exports.string,
  label: a.exports.string.isRequired,
  addClass: a.exports.string,
  hasArrow: a.exports.bool,
  isDisabled: a.exports.bool,
  distance: a.exports.number,
  placement: a.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
const Lo = ut(), xs = ({
  steps: e,
  isOpen: t,
  onClose: r,
  finalFocusRef: n,
  hideCloseButton: o,
  hideBackButton: i,
  ariaAttributes: l,
  defaultStyle: s,
  addClass: f
}) => {
  const [d, c] = te(null), u = [...e.reduce((E, $, D) => [...E, document.querySelector($.target) ? {
    id: D + 1,
    ...$
  } : null], []).filter((E) => E !== null)], v = (E) => u.filter(($) => $.id === E).reduce(($, D) => ({
    ...$,
    ...D
  }), {}), h = (E) => {
    const $ = document.querySelector("#root");
    $.inert = E;
  }, b = () => {
    c((E) => E < u.length ? E + 1 : E);
  }, x = () => {
    c((E) => E > 0 + 1 ? E - 1 : E);
  }, w = () => {
    c(null), r(!t), h(!1), n && n.current.focus();
  };
  return J(() => {
    t && (c(u.shift().id), h(!0));
  }, [t]), /* @__PURE__ */ p(Lo.Provider, {
    value: {
      isOpen: t,
      lastId: u.length,
      ...v(d),
      methods: {
        onNext: b,
        onPrev: x,
        onClose: w
      },
      defaultStyle: s
    },
    children: /* @__PURE__ */ p(fr, {
      id: "js-tour",
      children: t && /* @__PURE__ */ F(mt, {
        children: [/* @__PURE__ */ p(wd, {}), /* @__PURE__ */ p(ws, {
          ariaAttributes: l,
          hideCloseButton: o,
          hideBackButton: i,
          addClass: f
        })]
      })
    })
  });
};
xs.defaultProps = {
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
xs.propTypes = {
  steps: a.exports.arrayOf(a.exports.shape({
    target: a.exports.string.isRequired,
    content: a.exports.oneOfType([a.exports.string, a.exports.element]),
    placement: a.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"]),
    distance: a.exports.number,
    elementClass: a.exports.string,
    helpLayerClass: a.exports.string
  })),
  isOpen: a.exports.bool,
  onClose: a.exports.func,
  finalFocusRef: a.exports.any.isRequired,
  hideCloseButton: a.exports.bool,
  hideBackButton: a.exports.bool,
  defaultStyle: a.exports.bool,
  addClass: a.exports.string,
  ariaAttributes: a.exports.shape({
    role: a.exports.string,
    tabIndex: a.exports.oneOfType([a.exports.string, a.exports.number]),
    "aria-label": a.exports.string,
    "aria-modal": a.exports.oneOfType([a.exports.string, a.exports.bool])
  })
};
const Nt = {
  "c-layout": "_c-layout_15ivg_1",
  "c-tour-content": "_c-tour-content_15ivg_9",
  "c-tour-progress": "_c-tour-progress_15ivg_30",
  "c-tour-progress-bar": "_c-tour-progress-bar_15ivg_38",
  "c-tour-button-container": "_c-tour-button-container_15ivg_49",
  "c-tour-help": "_c-tour-help_15ivg_91",
  "c-tour-number": "_c-tour-number_15ivg_101"
}, ws = ({
  ariaAttributes: e,
  hideCloseButton: t,
  hideBackButton: r,
  addClass: n
}) => {
  const {
    isOpen: o,
    lastId: i,
    methods: l,
    id: s,
    target: f,
    content: d,
    placement: c,
    distance: u,
    defaultStyle: v
  } = Pe(Lo), h = ee(), {
    onClose: b,
    onPrev: x,
    onNext: w
  } = l, {
    styles: E,
    attributes: $
  } = xn(document.querySelector(f), h.current, {
    placement: c,
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
      enabled: o
    }]
  }), D = () => lt(d) ? d : Ys("p", {
    className: Nt["tour-description"]
  }, [d]), N = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), w();
  };
  return /* @__PURE__ */ F(mt, {
    children: [/* @__PURE__ */ p("div", {
      className: re({
        [Nt["c-layout"]]: !v
      }),
      "data-class": "c-layout"
    }), /* @__PURE__ */ F("div", {
      id: `unique-id-tour-element-${s}`,
      ref: h,
      style: E.popper,
      className: re({
        [Nt["c-tour-content"]]: !v,
        "animate__animated animate__fadeIn animate__faster": o,
        [n]: n
      }),
      ...e,
      ...$.popper,
      children: [/* @__PURE__ */ F("span", {
        className: "u-sr-only",
        children: ["Parte ", s, " de ", i, "."]
      }), /* @__PURE__ */ p("div", {
        "aria-hidden": !0,
        className: re({
          [Nt["c-tour-progress"]]: !v
        }),
        "data-class": "c-tour-progress",
        children: /* @__PURE__ */ p("div", {
          className: Nt["c-tour-progress-bar"],
          "data-class": "c-tour-progress__bar",
          style: {
            transform: `scaleX(${s / i})`
          }
        })
      }), D(), /* @__PURE__ */ F("div", {
        className: re({
          [Nt["c-tour-button-container"]]: !v
        }),
        "data-class": "c-tour-button-container",
        children: [!t && /* @__PURE__ */ p(Ut, {
          hasAriaLabel: !0,
          label: "Salir",
          "data-class": "c-button__close",
          onClick: b,
          icon: {
            path: new URL("/ui-components-books/dist/assets/icons/svg/close.svg", self.location).href,
            size: "big"
          },
          ...v && {
            defaultStyle: v
          }
        }), !r && /* @__PURE__ */ p(Ut, {
          disabled: s === 1,
          hasAriaLabel: !0,
          label: "Anterior",
          "data-class": "c-button__before",
          onClick: x,
          icon: {
            path: new URL("/ui-components-books/dist/assets/icons/svg/navigate_before.svg", self.location).href,
            size: "big"
          },
          ...v && {
            defaultStyle: v
          }
        }), /* @__PURE__ */ p(Ut, {
          disabled: s === i,
          hasAriaLabel: !0,
          label: "Siguiente",
          "data-class": "c-button__after",
          onClick: N,
          icon: {
            path: new URL("/ui-components-books/dist/assets/icons/svg/navigate_next.svg", self.location).href,
            size: "big"
          },
          ...v && {
            defaultStyle: v
          }
        })]
      })]
    })]
  });
};
ws.propTypes = {
  ariaAttributes: a.exports.shape({
    role: a.exports.string,
    tabIndex: a.exports.oneOfType([a.exports.string, a.exports.number]),
    "aria-label": a.exports.string,
    "aria-modal": a.exports.oneOfType([a.exports.string, a.exports.bool])
  }),
  hideCloseButton: a.exports.bool,
  hideBackButton: a.exports.bool,
  addClass: a.exports.string
};
const wd = () => {
  const {
    isOpen: e,
    id: t,
    target: r,
    helpLayerClass: n,
    defaultStyle: o
  } = Pe(Lo), [i, l] = te({}), s = () => {
    const {
      x: f,
      y: d,
      width: c,
      height: u
    } = document.querySelector(r).getBoundingClientRect();
    l({
      width: `${c}px`,
      height: `${u}px`,
      top: `${d}px`,
      left: `${f}px`
    });
  };
  return J(() => (r && s(), () => {
    l({});
  }), [r]), J(() => {
    if (!e || !r)
      return;
    const f = (d) => {
      s();
    };
    return e && window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  }, [e, r]), /* @__PURE__ */ p("div", {
    className: re({
      [Nt["c-tour-help"]]: !o,
      "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
      [n]: n
    }),
    style: i,
    children: /* @__PURE__ */ p("span", {
      className: Nt["c-tour-number"],
      "data-class": "c-tour-number",
      children: t
    })
  });
}, Td = "_active_i7dnv_90", Ed = "_iconPulse_i7dnv_1", _e = {
  "c-vid": "_c-vid_i7dnv_1",
  "c-vid__caption": "_c-vid__caption_i7dnv_19",
  "c-vid__container": "_c-vid__container_i7dnv_24",
  "c-vid__video": "_c-vid__video_i7dnv_44",
  "no-captions": "_no-captions_i7dnv_56",
  "c-vid__wrapper": "_c-vid__wrapper_i7dnv_60",
  "c-vid__icon-container": "_c-vid__icon-container_i7dnv_70",
  "c-vid__icon": "_c-vid__icon_i7dnv_70",
  active: Td,
  iconPulse: Ed,
  "c-vid__progress-bg": "_c-vid__progress-bg_i7dnv_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_i7dnv_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_i7dnv_140",
  "c-vid__controls": "_c-vid__controls_i7dnv_150",
  "c-vid__button": "_c-vid__button_i7dnv_165",
  "c-vid__volume": "_c-vid__volume_i7dnv_180",
  "c-vid__volume-item": "_c-vid__volume-item_i7dnv_191",
  "c-vid__time": "_c-vid__time_i7dnv_202",
  "c-vid__subtitles": "_c-vid__subtitles_i7dnv_208"
}, Ts = ({
  src: e,
  width: t = "1000",
  hasDescription: r,
  description: n,
  addClass: o,
  poster: i,
  ...l
}) => {
  const [s, f] = te({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [d, c] = te({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [u, v] = te({
    state: !1,
    label: "Reproducir video"
  }), [h, b] = te({
    state: !0,
    label: "Volumen"
  }), [x, w] = te(100), [E, $] = te({
    state: !1,
    label: "Ver en pantalla completa"
  }), [D, N] = te(!1), [g, L] = te(100), A = ee(null), j = ee(null), z = ee(null), G = ee(null), Y = ee(null), W = ee(null), Z = ee(null), X = ee(null), [ne, H] = te(!1), [K, ce] = ci(), se = (q) => {
    q.classList.add(`${_e.active}`), setTimeout(() => {
      q.classList.remove(`${_e.active}`);
    }, 650);
  };
  function _() {
    const q = j.current;
    u.state ? (q.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (q.play(), v({
      state: !0,
      label: "Pausar video"
    })), se(W.current);
  }
  function R() {
    const q = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, Q = A.current;
    q ? ($({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : ($({
      state: !0,
      label: "Salir de pantalla completa"
    }), Q.requestFullscreen ? Q.requestFullscreen() : Q.mozRequestFullScreen ? Q.mozRequestFullScreen() : Q.webkitRequestFullScreen ? Q.webkitRequestFullScreen() : Q.msRequestFullscreen && Q.msRequestFullscreen());
  }
  function y(q) {
    const Q = parseInt(q, 10), ie = Q >= 3600 ? Math.floor(Q / 3600) : 0, ye = Math.floor((Q - ie * 3600) / 60), $e = Q - ie * 3600 - ye * 60, dt = S(C(ie)), qe = S(C(ye)), Te = S(C($e));
    return {
      hours: dt,
      minutes: qe,
      seconds: Te
    };
  }
  function T(q) {
    const Q = O(q.duration), ie = O(q.currentTime);
    c({
      totalSeconds: q.currentTime,
      hours: parseInt(y(q.currentTime).hours),
      minutes: parseInt(y(q.currentTime).minutes),
      seconds: parseInt(y(q.currentTime).seconds),
      string: ie
    }), f({
      totalSeconds: Math.floor(q.duration),
      hours: parseInt(y(q.duration).hours),
      minutes: parseInt(y(q.duration).minutes),
      seconds: parseInt(y(q.duration).seconds),
      string: Q
    });
  }
  function O(q) {
    return parseInt(q, 10) <= 3600 ? `${y(q).minutes}:${y(q).seconds}` : `${y(q).hours}:${y(q).minutes}:${y(q).seconds}`;
  }
  function C(q) {
    return q < 10 ? q = "0" + q : q;
  }
  function S(q) {
    return isNaN(q) ? "00" : q;
  }
  function I(q) {
    const Q = G.current, ie = j.current, $e = q.nativeEvent.offsetX / Q.offsetWidth * ie.duration;
    ie.currentTime = $e;
  }
  function M(q) {
    const Q = j.current, ie = q.target.value, ye = ie / 100;
    L(ie), w(ie), Q.volume = ye, h.state || b({
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
      const q = j.current, Q = 0, ie = Q;
      L(Q), q.volume = ie;
    } else {
      b({
        state: !0,
        label: "Volumen"
      });
      const q = j.current, Q = x, ie = Q / 100;
      L(Q), q.volume = ie;
    }
  }, k = function(q) {
    (q.keyCode || q.which) === 32 && _();
  }, oe = function(q) {
    const Q = Math.floor(G.current.getAttribute("aria-valuenow"));
    if (document.activeElement === Y.current)
      return null;
    if ((q.keyCode || q.which) === 37) {
      const ie = Q - 5;
      ie >= 0 ? j.current.currentTime = ie : j.current.currentTime = 0, se(X.current);
    }
    if ((q.keyCode || q.which) === 39) {
      const ie = Q + 5;
      ie >= j.current.duration ? j.current.currentTime = j.current.duration : j.current.currentTime = ie, se(Z.current);
    }
  }, P = () => s >= 3600 ? `${d.hours} horas, ${d.minutes} minutos y ${d.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${d.minutes} minutos y ${d.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return J(() => {
    const q = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(q, "caption") && H(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(q, "volume") && L(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), J(() => {
    localStorage.setItem("ui-video", JSON.stringify({
      caption: ne,
      volume: g
    }));
  }, [ne, g]), J(() => (z.current ? z.current.addEventListener("error", () => {
    N(!0);
  }) : N(!0), e.caption && N(!1), () => {
    z.current && z.current.removeEventListener("error", () => {
      N(!0);
    });
  }), [e.caption]), J(() => {
    u.state && !ce && _();
  }, [ce]), un(() => {
    j.current && K(j.current);
  }, [j]), /* @__PURE__ */ F("figure", {
    className: `${_e["c-vid"]} ${o}`,
    style: {
      maxWidth: `${t}px`
    },
    onKeyDown: (q) => oe(q),
    ...l,
    children: [/* @__PURE__ */ F("div", {
      className: `${_e["c-vid__container"]} ${o}`,
      ref: A,
      children: [/* @__PURE__ */ F("div", {
        className: _e["c-vid__wrapper"],
        children: [/* @__PURE__ */ F("video", {
          preload: "none",
          ref: j,
          onTimeUpdate: (q) => T(q.target),
          onLoadedData: (q) => T(q.target),
          onClick: _,
          className: `${_e["c-vid__video"]} ${ne ? "" : _e["no-captions"]}`,
          ...i && {
            poster: i
          },
          children: [/* @__PURE__ */ p("source", {
            src: e.video
          }), e.caption ? /* @__PURE__ */ p("track", {
            ref: z,
            src: e.caption,
            label: "Subt\xEDtulos en espa\xF1ol",
            kind: "subtitles",
            srcLang: "es",
            default: !0
          }) : ""]
        }), /* @__PURE__ */ F("div", {
          className: _e["c-vid__icon-container"],
          children: [/* @__PURE__ */ p("div", {
            ref: X,
            className: _e["c-vid__icon"],
            children: /* @__PURE__ */ p(Ce, {
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
            ref: W,
            className: _e["c-vid__icon"],
            children: /* @__PURE__ */ p(Ce, {
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
            className: _e["c-vid__icon"],
            children: /* @__PURE__ */ p(Ce, {
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
        className: _e["progress-container"],
        children: /* @__PURE__ */ F("div", {
          role: "slider",
          "aria-label": "Progreso del video",
          "aria-valuemin": "0",
          "aria-valuenow": Math.round(d.totalSeconds),
          "aria-valuemax": Math.round(s.totalSeconds),
          "aria-valuetext": P(),
          tabIndex: "0",
          onKeyDown: k,
          className: _e["c-vid__progress-bg"],
          onClick: I,
          ref: G,
          children: [/* @__PURE__ */ p("div", {
            className: _e["c-vid__progress-bar"],
            style: {
              transform: `scaleX(${isNaN(d.totalSeconds / s.totalSeconds) ? 0 : d.totalSeconds / s.totalSeconds})`
            }
          }), /* @__PURE__ */ p("div", {
            className: _e["progress-sphere"],
            style: {
              left: `min(calc((${d.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
            }
          })]
        })
      }), /* @__PURE__ */ F("div", {
        className: _e["c-vid__controls"],
        children: [/* @__PURE__ */ p("button", {
          className: `${_e["c-vid__button"]} js-button-video-play`,
          "aria-label": u.label,
          onClick: _,
          "data-description": "Este bot\xF3n reproduce el video",
          children: /* @__PURE__ */ p(Ce, {
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
          className: `${_e["c-vid__button"]} js-button-video-volumen`,
          "aria-label": h.label,
          "data-description": "Este bot\xF3n controla el volumen",
          onClick: V,
          children: /* @__PURE__ */ p(Ce, {
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
        }), /* @__PURE__ */ F("label", {
          className: _e["c-vid__volume"],
          htmlFor: "volumeControl",
          children: [/* @__PURE__ */ p("span", {
            className: "u-sr-only",
            children: "Controlar volumen"
          }), /* @__PURE__ */ p("input", {
            className: _e["c-vid__volume-item"],
            ref: Y,
            id: "volumeControl",
            type: "range",
            min: "0",
            max: "100",
            step: "5",
            value: g,
            onChange: M,
            "aria-valuetext": `${g}%`
          })]
        }), /* @__PURE__ */ F("p", {
          className: _e["c-vid__time"],
          "aria-hidden": "true",
          children: [/* @__PURE__ */ p("span", {
            children: d.string
          }), "/", /* @__PURE__ */ p("span", {
            children: s.string
          })]
        }), /* @__PURE__ */ p("button", {
          disabled: D,
          "aria-pressed": D ? void 0 : ne,
          onClick: () => H(!ne),
          "aria-label": "Subt\xEDtulos",
          className: `${_e["c-vid__button"]} ${_e["c-vid__subtitles"]}`,
          children: /* @__PURE__ */ p(Ce, {
            children: /* @__PURE__ */ p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "48",
              width: "48",
              viewBox: "0 0 48 48",
              children: D ? /* @__PURE__ */ p("path", {
                id: "closed_caption_disabled",
                d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z"
              }) : /* @__PURE__ */ p("path", {
                id: "closed_caption",
                d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z"
              })
            })
          })
        }), /* @__PURE__ */ p("button", {
          className: _e["c-vid__button"],
          "aria-label": E.label,
          onClick: R,
          children: /* @__PURE__ */ p(Ce, {
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
    }), r && /* @__PURE__ */ F("figcaption", {
      className: _e["c-vid__caption"],
      children: [/* @__PURE__ */ F("strong", {
        children: [n.title, ":"]
      }), " ", n.content]
    })]
  });
};
Ts.propTypes = {
  src: a.exports.shape({
    video: a.exports.string.isRequired,
    caption: a.exports.string
  }),
  width: a.exports.string,
  addClass: a.exports.string,
  hasDescription: a.exports.bool,
  description: a.exports.shape({
    title: a.exports.string,
    content: a.exports.string
  }),
  poster: a.exports.string
};
Ts.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
var wn = { exports: {} }, Es = {}, an = { exports: {} }, Zn = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function Od() {
  if (ka)
    return he;
  ka = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function D(g) {
    if (typeof g == "object" && g !== null) {
      var L = g.$$typeof;
      switch (L) {
        case t:
          switch (g = g.type, g) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case c:
                case b:
                case h:
                case l:
                  return g;
                default:
                  return L;
              }
          }
        case r:
          return L;
      }
    }
  }
  function N(g) {
    return D(g) === d;
  }
  return he.AsyncMode = f, he.ConcurrentMode = d, he.ContextConsumer = s, he.ContextProvider = l, he.Element = t, he.ForwardRef = c, he.Fragment = n, he.Lazy = b, he.Memo = h, he.Portal = r, he.Profiler = i, he.StrictMode = o, he.Suspense = u, he.isAsyncMode = function(g) {
    return N(g) || D(g) === f;
  }, he.isConcurrentMode = N, he.isContextConsumer = function(g) {
    return D(g) === s;
  }, he.isContextProvider = function(g) {
    return D(g) === l;
  }, he.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, he.isForwardRef = function(g) {
    return D(g) === c;
  }, he.isFragment = function(g) {
    return D(g) === n;
  }, he.isLazy = function(g) {
    return D(g) === b;
  }, he.isMemo = function(g) {
    return D(g) === h;
  }, he.isPortal = function(g) {
    return D(g) === r;
  }, he.isProfiler = function(g) {
    return D(g) === i;
  }, he.isStrictMode = function(g) {
    return D(g) === o;
  }, he.isSuspense = function(g) {
    return D(g) === u;
  }, he.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === d || g === i || g === o || g === u || g === v || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === h || g.$$typeof === l || g.$$typeof === s || g.$$typeof === c || g.$$typeof === w || g.$$typeof === E || g.$$typeof === $ || g.$$typeof === x);
  }, he.typeOf = D, he;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function Sd() {
  return ja || (ja = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function D(P) {
      return typeof P == "string" || typeof P == "function" || P === n || P === d || P === i || P === o || P === u || P === v || typeof P == "object" && P !== null && (P.$$typeof === b || P.$$typeof === h || P.$$typeof === l || P.$$typeof === s || P.$$typeof === c || P.$$typeof === w || P.$$typeof === E || P.$$typeof === $ || P.$$typeof === x);
    }
    function N(P) {
      if (typeof P == "object" && P !== null) {
        var q = P.$$typeof;
        switch (q) {
          case t:
            var Q = P.type;
            switch (Q) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case u:
                return Q;
              default:
                var ie = Q && Q.$$typeof;
                switch (ie) {
                  case s:
                  case c:
                  case b:
                  case h:
                  case l:
                    return ie;
                  default:
                    return q;
                }
            }
          case r:
            return q;
        }
      }
    }
    var g = f, L = d, A = s, j = l, z = t, G = c, Y = n, W = b, Z = h, X = r, ne = i, H = o, K = u, ce = !1;
    function se(P) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(P) || N(P) === f;
    }
    function _(P) {
      return N(P) === d;
    }
    function R(P) {
      return N(P) === s;
    }
    function y(P) {
      return N(P) === l;
    }
    function T(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function O(P) {
      return N(P) === c;
    }
    function C(P) {
      return N(P) === n;
    }
    function S(P) {
      return N(P) === b;
    }
    function I(P) {
      return N(P) === h;
    }
    function M(P) {
      return N(P) === r;
    }
    function V(P) {
      return N(P) === i;
    }
    function k(P) {
      return N(P) === o;
    }
    function oe(P) {
      return N(P) === u;
    }
    ge.AsyncMode = g, ge.ConcurrentMode = L, ge.ContextConsumer = A, ge.ContextProvider = j, ge.Element = z, ge.ForwardRef = G, ge.Fragment = Y, ge.Lazy = W, ge.Memo = Z, ge.Portal = X, ge.Profiler = ne, ge.StrictMode = H, ge.Suspense = K, ge.isAsyncMode = se, ge.isConcurrentMode = _, ge.isContextConsumer = R, ge.isContextProvider = y, ge.isElement = T, ge.isForwardRef = O, ge.isFragment = C, ge.isLazy = S, ge.isMemo = I, ge.isPortal = M, ge.isProfiler = V, ge.isStrictMode = k, ge.isSuspense = oe, ge.isValidElementType = D, ge.typeOf = N;
  }()), ge;
}
var La;
function Os() {
  return La || (La = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Od() : e.exports = Sd();
  }(Zn)), Zn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xn, Fa;
function Pd() {
  if (Fa)
    return Xn;
  Fa = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var l = {}, s = 0; s < 10; s++)
        l["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(l).map(function(c) {
        return l[c];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        d[c] = c;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Xn = o() ? Object.assign : function(i, l) {
    for (var s, f = n(i), d, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var u in s)
        t.call(s, u) && (f[u] = s[u]);
      if (e) {
        d = e(s);
        for (var v = 0; v < d.length; v++)
          r.call(s, d[v]) && (f[d[v]] = s[d[v]]);
      }
    }
    return f;
  }, Xn;
}
var Kn, qa;
function Fo() {
  if (qa)
    return Kn;
  qa = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Kn = e, Kn;
}
var Qn, Ba;
function Ss() {
  return Ba || (Ba = 1, Qn = Function.call.bind(Object.prototype.hasOwnProperty)), Qn;
}
var Jn, Va;
function Rd() {
  if (Va)
    return Jn;
  Va = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Fo(), r = {}, n = Ss();
    e = function(i) {
      var l = "Warning: " + i;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(i, l, s, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (n(i, c)) {
          var u;
          try {
            if (typeof i[c] != "function") {
              var v = Error(
                (f || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            u = i[c](l, c, f, s, null, t);
          } catch (b) {
            u = b;
          }
          if (u && !(u instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in r)) {
            r[u.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + s + " type: " + u.message + (h != null ? h : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Jn = o, Jn;
}
var eo, Ya;
function Cd() {
  if (Ya)
    return eo;
  Ya = 1;
  var e = Os(), t = Pd(), r = Fo(), n = Ss(), o = Rd(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return eo = function(s, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function u(_) {
      var R = _ && (d && _[d] || _[c]);
      if (typeof R == "function")
        return R;
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
      any: $(),
      arrayOf: D,
      element: N(),
      elementType: g(),
      instanceOf: L,
      node: G(),
      objectOf: j,
      oneOf: A,
      oneOfType: z,
      shape: W,
      exact: Z
    };
    function b(_, R) {
      return _ === R ? _ !== 0 || 1 / _ === 1 / R : _ !== _ && R !== R;
    }
    function x(_, R) {
      this.message = _, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function w(_) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, y = 0;
      function T(C, S, I, M, V, k, oe) {
        if (M = M || v, k = k || I, oe !== r) {
          if (f) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var q = M + ":" + I;
            !R[q] && y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + k + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[q] = !0, y++);
          }
        }
        return S[I] == null ? C ? S[I] === null ? new x("The " + V + " `" + k + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new x("The " + V + " `" + k + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : _(S, I, M, V, k);
      }
      var O = T.bind(null, !1);
      return O.isRequired = T.bind(null, !0), O;
    }
    function E(_) {
      function R(y, T, O, C, S, I) {
        var M = y[T], V = H(M);
        if (V !== _) {
          var k = K(M);
          return new x(
            "Invalid " + C + " `" + S + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return w(R);
    }
    function $() {
      return w(l);
    }
    function D(_) {
      function R(y, T, O, C, S) {
        if (typeof _ != "function")
          return new x("Property `" + S + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var I = y[T];
        if (!Array.isArray(I)) {
          var M = H(I);
          return new x("Invalid " + C + " `" + S + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected an array."));
        }
        for (var V = 0; V < I.length; V++) {
          var k = _(I, V, O, C, S + "[" + V + "]", r);
          if (k instanceof Error)
            return k;
        }
        return null;
      }
      return w(R);
    }
    function N() {
      function _(R, y, T, O, C) {
        var S = R[y];
        if (!s(S)) {
          var I = H(S);
          return new x("Invalid " + O + " `" + C + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(_);
    }
    function g() {
      function _(R, y, T, O, C) {
        var S = R[y];
        if (!e.isValidElementType(S)) {
          var I = H(S);
          return new x("Invalid " + O + " `" + C + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(_);
    }
    function L(_) {
      function R(y, T, O, C, S) {
        if (!(y[T] instanceof _)) {
          var I = _.name || v, M = se(y[T]);
          return new x("Invalid " + C + " `" + S + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return w(R);
    }
    function A(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function R(y, T, O, C, S) {
        for (var I = y[T], M = 0; M < _.length; M++)
          if (b(I, _[M]))
            return null;
        var V = JSON.stringify(_, function(oe, P) {
          var q = K(P);
          return q === "symbol" ? String(P) : P;
        });
        return new x("Invalid " + C + " `" + S + "` of value `" + String(I) + "` " + ("supplied to `" + O + "`, expected one of " + V + "."));
      }
      return w(R);
    }
    function j(_) {
      function R(y, T, O, C, S) {
        if (typeof _ != "function")
          return new x("Property `" + S + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var I = y[T], M = H(I);
        if (M !== "object")
          return new x("Invalid " + C + " `" + S + "` of type " + ("`" + M + "` supplied to `" + O + "`, expected an object."));
        for (var V in I)
          if (n(I, V)) {
            var k = _(I, V, O, C, S + "." + V, r);
            if (k instanceof Error)
              return k;
          }
        return null;
      }
      return w(R);
    }
    function z(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var R = 0; R < _.length; R++) {
        var y = _[R];
        if (typeof y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(y) + " at index " + R + "."
          ), l;
      }
      function T(O, C, S, I, M) {
        for (var V = [], k = 0; k < _.length; k++) {
          var oe = _[k], P = oe(O, C, S, I, M, r);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && V.push(P.data.expectedType);
        }
        var q = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new x("Invalid " + I + " `" + M + "` supplied to " + ("`" + S + "`" + q + "."));
      }
      return w(T);
    }
    function G() {
      function _(R, y, T, O, C) {
        return X(R[y]) ? null : new x("Invalid " + O + " `" + C + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return w(_);
    }
    function Y(_, R, y, T, O) {
      return new x(
        (_ || "React class") + ": " + R + " type `" + y + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function W(_) {
      function R(y, T, O, C, S) {
        var I = y[T], M = H(I);
        if (M !== "object")
          return new x("Invalid " + C + " `" + S + "` of type `" + M + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var V in _) {
          var k = _[V];
          if (typeof k != "function")
            return Y(O, C, S, V, K(k));
          var oe = k(I, V, O, C, S + "." + V, r);
          if (oe)
            return oe;
        }
        return null;
      }
      return w(R);
    }
    function Z(_) {
      function R(y, T, O, C, S) {
        var I = y[T], M = H(I);
        if (M !== "object")
          return new x("Invalid " + C + " `" + S + "` of type `" + M + "` " + ("supplied to `" + O + "`, expected `object`."));
        var V = t({}, y[T], _);
        for (var k in V) {
          var oe = _[k];
          if (n(_, k) && typeof oe != "function")
            return Y(O, C, S, k, K(oe));
          if (!oe)
            return new x(
              "Invalid " + C + " `" + S + "` key `" + k + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(y[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var P = oe(I, k, O, C, S + "." + k, r);
          if (P)
            return P;
        }
        return null;
      }
      return w(R);
    }
    function X(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(X);
          if (_ === null || s(_))
            return !0;
          var R = u(_);
          if (R) {
            var y = R.call(_), T;
            if (R !== _.entries) {
              for (; !(T = y.next()).done; )
                if (!X(T.value))
                  return !1;
            } else
              for (; !(T = y.next()).done; ) {
                var O = T.value;
                if (O && !X(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(_, R) {
      return _ === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function H(_) {
      var R = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : ne(R, _) ? "symbol" : R;
    }
    function K(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var R = H(_);
      if (R === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function ce(_) {
      var R = K(_);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function se(_) {
      return !_.constructor || !_.constructor.name ? v : _.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, eo;
}
var to, Wa;
function Dd() {
  if (Wa)
    return to;
  Wa = 1;
  var e = Fo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, to = function() {
    function n(l, s, f, d, c, u) {
      if (u !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
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
    return i.PropTypes = i, i;
  }, to;
}
if (process.env.NODE_ENV !== "production") {
  var Ad = Os(), Id = !0;
  an.exports = Cd()(Ad.isElement, Id);
} else
  an.exports = Dd()();
function Ps(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Ps(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function za() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Ps(e)) && (n && (n += " "), n += t);
  return n;
}
const Nd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: za,
  default: za
}, Symbol.toStringTag, { value: "Module" })), $d = /* @__PURE__ */ zs(Nd);
var Oe = {}, wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.dontSetMe = Fd;
wt.findInArray = Md;
wt.int = Ld;
wt.isFunction = kd;
wt.isNum = jd;
function Md(e, t) {
  for (var r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function kd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function jd(e) {
  return typeof e == "number" && !isNaN(e);
}
function Ld(e) {
  return parseInt(e, 10);
}
function Fd(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var Zt = {};
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
Zt.browserPrefixToKey = Cs;
Zt.browserPrefixToStyle = qd;
Zt.default = void 0;
Zt.getPrefix = Rs;
var ro = ["Moz", "Webkit", "O", "ms"];
function Rs() {
  var e, t, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var n = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || r in n)
    return "";
  for (var o = 0; o < ro.length; o++)
    if (Cs(r, ro[o]) in n)
      return ro[o];
  return "";
}
function Cs(e, t) {
  return t ? "".concat(t).concat(Bd(e)) : e;
}
function qd(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function Bd(e) {
  for (var t = "", r = !0, n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
var Vd = Rs();
Zt.default = Vd;
function bo(e) {
  return bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bo(e);
}
Object.defineProperty(Oe, "__esModule", {
  value: !0
});
Oe.addClassName = $s;
Oe.addEvent = zd;
Oe.addUserSelectStyles = rp;
Oe.createCSSTransform = Qd;
Oe.createSVGTransform = Jd;
Oe.getTouch = ep;
Oe.getTouchIdentifier = tp;
Oe.getTranslation = qo;
Oe.innerHeight = Zd;
Oe.innerWidth = Xd;
Oe.matchesSelector = Ns;
Oe.matchesSelectorAndParentsTo = Wd;
Oe.offsetXYFromParent = Kd;
Oe.outerHeight = Hd;
Oe.outerWidth = Gd;
Oe.removeClassName = Ms;
Oe.removeEvent = Ud;
Oe.removeUserSelectStyles = np;
var tt = wt, Ua = Yd(Zt);
function Ds(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ds = function(o) {
    return o ? r : t;
  })(e);
}
function Yd(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || bo(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = Ds(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, i, l) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Ha(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function As(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ha(Object(r), !0).forEach(function(n) {
      Is(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ha(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Is(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Gr = "";
function Ns(e, t) {
  return Gr || (Gr = (0, tt.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, tt.isFunction)(e[r]);
  })), (0, tt.isFunction)(e[Gr]) ? e[Gr](t) : !1;
}
function Wd(e, t, r) {
  var n = e;
  do {
    if (Ns(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function zd(e, t, r, n) {
  if (!!e) {
    var o = As({
      capture: !0
    }, n);
    e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
  }
}
function Ud(e, t, r, n) {
  if (!!e) {
    var o = As({
      capture: !0
    }, n);
    e.removeEventListener ? e.removeEventListener(t, r, o) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
  }
}
function Hd(e) {
  var t = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, tt.int)(r.borderTopWidth), t += (0, tt.int)(r.borderBottomWidth), t;
}
function Gd(e) {
  var t = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, tt.int)(r.borderLeftWidth), t += (0, tt.int)(r.borderRightWidth), t;
}
function Zd(e) {
  var t = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, tt.int)(r.paddingTop), t -= (0, tt.int)(r.paddingBottom), t;
}
function Xd(e) {
  var t = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, tt.int)(r.paddingLeft), t -= (0, tt.int)(r.paddingRight), t;
}
function Kd(e, t, r) {
  var n = t === t.ownerDocument.body, o = n ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - o.left) / r, l = (e.clientY + t.scrollTop - o.top) / r;
  return {
    x: i,
    y: l
  };
}
function Qd(e, t) {
  var r = qo(e, t, "px");
  return Is({}, (0, Ua.browserPrefixToKey)("transform", Ua.default), r);
}
function Jd(e, t) {
  var r = qo(e, t, "");
  return r;
}
function qo(e, t, r) {
  var n = e.x, o = e.y, i = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    var l = "".concat(typeof t.x == "string" ? t.x : t.x + r), s = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    i = "translate(".concat(l, ", ").concat(s, ")") + i;
  }
  return i;
}
function ep(e, t) {
  return e.targetTouches && (0, tt.findInArray)(e.targetTouches, function(r) {
    return t === r.identifier;
  }) || e.changedTouches && (0, tt.findInArray)(e.changedTouches, function(r) {
    return t === r.identifier;
  });
}
function tp(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function rp(e) {
  if (!!e) {
    var t = e.getElementById("react-draggable-style-el");
    t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && $s(e.body, "react-draggable-transparent-selection");
  }
}
function np(e) {
  if (!!e)
    try {
      if (e.body && Ms(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function $s(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Ms(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var Tt = {};
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.canDragX = ip;
Tt.canDragY = sp;
Tt.createCoreData = lp;
Tt.createDraggableData = up;
Tt.getBoundPosition = op;
Tt.getControlPosition = cp;
Tt.snapToGrid = ap;
var Je = wt, tr = Oe;
function op(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  var n = e.props.bounds;
  n = typeof n == "string" ? n : fp(n);
  var o = Bo(e);
  if (typeof n == "string") {
    var i = o.ownerDocument, l = i.defaultView, s;
    if (n === "parent" ? s = o.parentNode : s = i.querySelector(n), !(s instanceof l.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    var f = s, d = l.getComputedStyle(o), c = l.getComputedStyle(f);
    n = {
      left: -o.offsetLeft + (0, Je.int)(c.paddingLeft) + (0, Je.int)(d.marginLeft),
      top: -o.offsetTop + (0, Je.int)(c.paddingTop) + (0, Je.int)(d.marginTop),
      right: (0, tr.innerWidth)(f) - (0, tr.outerWidth)(o) - o.offsetLeft + (0, Je.int)(c.paddingRight) - (0, Je.int)(d.marginRight),
      bottom: (0, tr.innerHeight)(f) - (0, tr.outerHeight)(o) - o.offsetTop + (0, Je.int)(c.paddingBottom) - (0, Je.int)(d.marginBottom)
    };
  }
  return (0, Je.isNum)(n.right) && (t = Math.min(t, n.right)), (0, Je.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, Je.isNum)(n.left) && (t = Math.max(t, n.left)), (0, Je.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function ap(e, t, r) {
  var n = Math.round(t / e[0]) * e[0], o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function ip(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function sp(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function cp(e, t, r) {
  var n = typeof t == "number" ? (0, tr.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  var o = Bo(r), i = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, tr.offsetXYFromParent)(n || e, i, r.props.scale);
}
function lp(e, t, r) {
  var n = e.state, o = !(0, Je.isNum)(n.lastX), i = Bo(e);
  return o ? {
    node: i,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: i,
    deltaX: t - n.lastX,
    deltaY: r - n.lastY,
    lastX: n.lastX,
    lastY: n.lastY,
    x: t,
    y: r
  };
}
function up(e, t) {
  var r = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / r,
    y: e.state.y + t.deltaY / r,
    deltaX: t.deltaX / r,
    deltaY: t.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function fp(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Bo(e) {
  var t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Tn = {}, En = {};
Object.defineProperty(En, "__esModule", {
  value: !0
});
En.default = dp;
function dp() {
}
function sn(e) {
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
Object.defineProperty(Tn, "__esModule", {
  value: !0
});
Tn.default = void 0;
var no = vp(ln), Qe = Vo(an.exports), pp = Vo(ei), je = Oe, Dt = Tt, oo = wt, xr = Vo(En);
function Vo(e) {
  return e && e.__esModule ? e : { default: e };
}
function ks(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ks = function(o) {
    return o ? r : t;
  })(e);
}
function vp(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || sn(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = ks(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(n, i, l) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Ga(e, t) {
  return bp(e) || mp(e, t) || gp(e, t) || hp();
}
function hp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gp(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Za(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Za(e, t);
  }
}
function Za(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function mp(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, i = !1, l, s;
    try {
      for (r = r.call(e); !(o = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t)); o = !0)
        ;
    } catch (f) {
      i = !0, s = f;
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return n;
  }
}
function bp(e) {
  if (Array.isArray(e))
    return e;
}
function yp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function _p(e, t, r) {
  return t && Xa(e.prototype, t), r && Xa(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yo(e, t);
}
function yo(e, t) {
  return yo = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, yo(e, t);
}
function wp(e) {
  var t = Ep();
  return function() {
    var n = cn(e), o;
    if (t) {
      var i = cn(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Tp(this, o);
  };
}
function Tp(e, t) {
  if (t && (sn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Le(e);
}
function Le(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ep() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function cn(e) {
  return cn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cn(e);
}
function at(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ht = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
}, At = ht.mouse, On = /* @__PURE__ */ function(e) {
  xp(r, e);
  var t = wp(r);
  function r() {
    var n;
    yp(this, r);
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return n = t.call.apply(t, [this].concat(i)), at(Le(n), "state", {
      dragging: !1,
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), at(Le(n), "mounted", !1), at(Le(n), "handleDragStart", function(s) {
      if (n.props.onMouseDown(s), !n.props.allowAnyClick && typeof s.button == "number" && s.button !== 0)
        return !1;
      var f = n.findDOMNode();
      if (!f || !f.ownerDocument || !f.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var d = f.ownerDocument;
      if (!(n.props.disabled || !(s.target instanceof d.defaultView.Node) || n.props.handle && !(0, je.matchesSelectorAndParentsTo)(s.target, n.props.handle, f) || n.props.cancel && (0, je.matchesSelectorAndParentsTo)(s.target, n.props.cancel, f))) {
        s.type === "touchstart" && s.preventDefault();
        var c = (0, je.getTouchIdentifier)(s);
        n.setState({
          touchIdentifier: c
        });
        var u = (0, Dt.getControlPosition)(s, c, Le(n));
        if (u != null) {
          var v = u.x, h = u.y, b = (0, Dt.createCoreData)(Le(n), v, h);
          (0, xr.default)("DraggableCore: handleDragStart: %j", b), (0, xr.default)("calling", n.props.onStart);
          var x = n.props.onStart(s, b);
          x === !1 || n.mounted === !1 || (n.props.enableUserSelectHack && (0, je.addUserSelectStyles)(d), n.setState({
            dragging: !0,
            lastX: v,
            lastY: h
          }), (0, je.addEvent)(d, At.move, n.handleDrag), (0, je.addEvent)(d, At.stop, n.handleDragStop));
        }
      }
    }), at(Le(n), "handleDrag", function(s) {
      var f = (0, Dt.getControlPosition)(s, n.state.touchIdentifier, Le(n));
      if (f != null) {
        var d = f.x, c = f.y;
        if (Array.isArray(n.props.grid)) {
          var u = d - n.state.lastX, v = c - n.state.lastY, h = (0, Dt.snapToGrid)(n.props.grid, u, v), b = Ga(h, 2);
          if (u = b[0], v = b[1], !u && !v)
            return;
          d = n.state.lastX + u, c = n.state.lastY + v;
        }
        var x = (0, Dt.createCoreData)(Le(n), d, c);
        (0, xr.default)("DraggableCore: handleDrag: %j", x);
        var w = n.props.onDrag(s, x);
        if (w === !1 || n.mounted === !1) {
          try {
            n.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var E = document.createEvent("MouseEvents");
            E.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.handleDragStop(E);
          }
          return;
        }
        n.setState({
          lastX: d,
          lastY: c
        });
      }
    }), at(Le(n), "handleDragStop", function(s) {
      if (!!n.state.dragging) {
        var f = (0, Dt.getControlPosition)(s, n.state.touchIdentifier, Le(n));
        if (f != null) {
          var d = f.x, c = f.y;
          if (Array.isArray(n.props.grid)) {
            var u = d - n.state.lastX || 0, v = c - n.state.lastY || 0, h = (0, Dt.snapToGrid)(n.props.grid, u, v), b = Ga(h, 2);
            u = b[0], v = b[1], d = n.state.lastX + u, c = n.state.lastY + v;
          }
          var x = (0, Dt.createCoreData)(Le(n), d, c), w = n.props.onStop(s, x);
          if (w === !1 || n.mounted === !1)
            return !1;
          var E = n.findDOMNode();
          E && n.props.enableUserSelectHack && (0, je.removeUserSelectStyles)(E.ownerDocument), (0, xr.default)("DraggableCore: handleDragStop: %j", x), n.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), E && ((0, xr.default)("DraggableCore: Removing handlers"), (0, je.removeEvent)(E.ownerDocument, At.move, n.handleDrag), (0, je.removeEvent)(E.ownerDocument, At.stop, n.handleDragStop));
        }
      }
    }), at(Le(n), "onMouseDown", function(s) {
      return At = ht.mouse, n.handleDragStart(s);
    }), at(Le(n), "onMouseUp", function(s) {
      return At = ht.mouse, n.handleDragStop(s);
    }), at(Le(n), "onTouchStart", function(s) {
      return At = ht.touch, n.handleDragStart(s);
    }), at(Le(n), "onTouchEnd", function(s) {
      return At = ht.touch, n.handleDragStop(s);
    }), n;
  }
  return _p(r, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var o = this.findDOMNode();
      o && (0, je.addEvent)(o, ht.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var o = this.findDOMNode();
      if (o) {
        var i = o.ownerDocument;
        (0, je.removeEvent)(i, ht.mouse.move, this.handleDrag), (0, je.removeEvent)(i, ht.touch.move, this.handleDrag), (0, je.removeEvent)(i, ht.mouse.stop, this.handleDragStop), (0, je.removeEvent)(i, ht.touch.stop, this.handleDragStop), (0, je.removeEvent)(o, ht.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, je.removeUserSelectStyles)(i);
      }
    }
  }, {
    key: "findDOMNode",
    value: function() {
      var o, i, l;
      return (o = this.props) !== null && o !== void 0 && o.nodeRef ? (i = this.props) === null || i === void 0 || (l = i.nodeRef) === null || l === void 0 ? void 0 : l.current : pp.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ no.cloneElement(no.Children.only(this.props.children), {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd
      });
    }
  }]), r;
}(no.Component);
Tn.default = On;
at(On, "displayName", "DraggableCore");
at(On, "propTypes", {
  allowAnyClick: Qe.default.bool,
  disabled: Qe.default.bool,
  enableUserSelectHack: Qe.default.bool,
  offsetParent: function(t, r) {
    if (t[r] && t[r].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  grid: Qe.default.arrayOf(Qe.default.number),
  handle: Qe.default.string,
  cancel: Qe.default.string,
  nodeRef: Qe.default.object,
  onStart: Qe.default.func,
  onDrag: Qe.default.func,
  onStop: Qe.default.func,
  onMouseDown: Qe.default.func,
  scale: Qe.default.number,
  className: oo.dontSetMe,
  style: oo.dontSetMe,
  transform: oo.dontSetMe
});
at(On, "defaultProps", {
  allowAnyClick: !1,
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  function t(y) {
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
      return typeof T;
    } : function(T) {
      return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
    }, t(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return d.default;
    }
  }), e.default = void 0;
  var r = b(ln), n = v(an.exports), o = v(ei), i = v($d), l = Oe, s = Tt, f = wt, d = v(Tn), c = v(En), u = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function v(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function h(y) {
    if (typeof WeakMap != "function")
      return null;
    var T = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap();
    return (h = function(S) {
      return S ? O : T;
    })(y);
  }
  function b(y, T) {
    if (!T && y && y.__esModule)
      return y;
    if (y === null || t(y) !== "object" && typeof y != "function")
      return { default: y };
    var O = h(T);
    if (O && O.has(y))
      return O.get(y);
    var C = {}, S = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var I in y)
      if (I !== "default" && Object.prototype.hasOwnProperty.call(y, I)) {
        var M = S ? Object.getOwnPropertyDescriptor(y, I) : null;
        M && (M.get || M.set) ? Object.defineProperty(C, I, M) : C[I] = y[I];
      }
    return C.default = y, O && O.set(y, C), C;
  }
  function x() {
    return x = Object.assign || function(y) {
      for (var T = 1; T < arguments.length; T++) {
        var O = arguments[T];
        for (var C in O)
          Object.prototype.hasOwnProperty.call(O, C) && (y[C] = O[C]);
      }
      return y;
    }, x.apply(this, arguments);
  }
  function w(y, T) {
    if (y == null)
      return {};
    var O = E(y, T), C, S;
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(y);
      for (S = 0; S < I.length; S++)
        C = I[S], !(T.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(y, C) || (O[C] = y[C]));
    }
    return O;
  }
  function E(y, T) {
    if (y == null)
      return {};
    var O = {}, C = Object.keys(y), S, I;
    for (I = 0; I < C.length; I++)
      S = C[I], !(T.indexOf(S) >= 0) && (O[S] = y[S]);
    return O;
  }
  function $(y, T) {
    var O = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(y);
      T && (C = C.filter(function(S) {
        return Object.getOwnPropertyDescriptor(y, S).enumerable;
      })), O.push.apply(O, C);
    }
    return O;
  }
  function D(y) {
    for (var T = 1; T < arguments.length; T++) {
      var O = arguments[T] != null ? arguments[T] : {};
      T % 2 ? $(Object(O), !0).forEach(function(C) {
        _(y, C, O[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(O)) : $(Object(O)).forEach(function(C) {
        Object.defineProperty(y, C, Object.getOwnPropertyDescriptor(O, C));
      });
    }
    return y;
  }
  function N(y, T) {
    return z(y) || j(y, T) || L(y, T) || g();
  }
  function g() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function L(y, T) {
    if (!!y) {
      if (typeof y == "string")
        return A(y, T);
      var O = Object.prototype.toString.call(y).slice(8, -1);
      if (O === "Object" && y.constructor && (O = y.constructor.name), O === "Map" || O === "Set")
        return Array.from(y);
      if (O === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))
        return A(y, T);
    }
  }
  function A(y, T) {
    (T == null || T > y.length) && (T = y.length);
    for (var O = 0, C = new Array(T); O < T; O++)
      C[O] = y[O];
    return C;
  }
  function j(y, T) {
    var O = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (O != null) {
      var C = [], S = !0, I = !1, M, V;
      try {
        for (O = O.call(y); !(S = (M = O.next()).done) && (C.push(M.value), !(T && C.length === T)); S = !0)
          ;
      } catch (k) {
        I = !0, V = k;
      } finally {
        try {
          !S && O.return != null && O.return();
        } finally {
          if (I)
            throw V;
        }
      }
      return C;
    }
  }
  function z(y) {
    if (Array.isArray(y))
      return y;
  }
  function G(y, T) {
    if (!(y instanceof T))
      throw new TypeError("Cannot call a class as a function");
  }
  function Y(y, T) {
    for (var O = 0; O < T.length; O++) {
      var C = T[O];
      C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(y, C.key, C);
    }
  }
  function W(y, T, O) {
    return T && Y(y.prototype, T), O && Y(y, O), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function Z(y, T) {
    if (typeof T != "function" && T !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(T && T.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), T && X(y, T);
  }
  function X(y, T) {
    return X = Object.setPrototypeOf || function(C, S) {
      return C.__proto__ = S, C;
    }, X(y, T);
  }
  function ne(y) {
    var T = ce();
    return function() {
      var C = se(y), S;
      if (T) {
        var I = se(this).constructor;
        S = Reflect.construct(C, arguments, I);
      } else
        S = C.apply(this, arguments);
      return H(this, S);
    };
  }
  function H(y, T) {
    if (T && (t(T) === "object" || typeof T == "function"))
      return T;
    if (T !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return K(y);
  }
  function K(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function ce() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function se(y) {
    return se = Object.setPrototypeOf ? Object.getPrototypeOf : function(O) {
      return O.__proto__ || Object.getPrototypeOf(O);
    }, se(y);
  }
  function _(y, T, O) {
    return T in y ? Object.defineProperty(y, T, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : y[T] = O, y;
  }
  var R = /* @__PURE__ */ function(y) {
    Z(O, y);
    var T = ne(O);
    function O(C) {
      var S;
      return G(this, O), S = T.call(this, C), _(K(S), "onDragStart", function(I, M) {
        (0, c.default)("Draggable: onDragStart: %j", M);
        var V = S.props.onStart(I, (0, s.createDraggableData)(K(S), M));
        if (V === !1)
          return !1;
        S.setState({
          dragging: !0,
          dragged: !0
        });
      }), _(K(S), "onDrag", function(I, M) {
        if (!S.state.dragging)
          return !1;
        (0, c.default)("Draggable: onDrag: %j", M);
        var V = (0, s.createDraggableData)(K(S), M), k = {
          x: V.x,
          y: V.y
        };
        if (S.props.bounds) {
          var oe = k.x, P = k.y;
          k.x += S.state.slackX, k.y += S.state.slackY;
          var q = (0, s.getBoundPosition)(K(S), k.x, k.y), Q = N(q, 2), ie = Q[0], ye = Q[1];
          k.x = ie, k.y = ye, k.slackX = S.state.slackX + (oe - k.x), k.slackY = S.state.slackY + (P - k.y), V.x = k.x, V.y = k.y, V.deltaX = k.x - S.state.x, V.deltaY = k.y - S.state.y;
        }
        var $e = S.props.onDrag(I, V);
        if ($e === !1)
          return !1;
        S.setState(k);
      }), _(K(S), "onDragStop", function(I, M) {
        if (!S.state.dragging)
          return !1;
        var V = S.props.onStop(I, (0, s.createDraggableData)(K(S), M));
        if (V === !1)
          return !1;
        (0, c.default)("Draggable: onDragStop: %j", M);
        var k = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, oe = Boolean(S.props.position);
        if (oe) {
          var P = S.props.position, q = P.x, Q = P.y;
          k.x = q, k.y = Q;
        }
        S.setState(k);
      }), S.state = {
        dragging: !1,
        dragged: !1,
        x: C.position ? C.position.x : C.defaultPosition.x,
        y: C.position ? C.position.y : C.defaultPosition.y,
        prevPropsPosition: D({}, C.position),
        slackX: 0,
        slackY: 0,
        isElementSVG: !1
      }, C.position && !(C.onDrag || C.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), S;
    }
    return W(O, [{
      key: "componentDidMount",
      value: function() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.setState({
          dragging: !1
        });
      }
    }, {
      key: "findDOMNode",
      value: function() {
        var S, I, M;
        return (S = (I = this.props) === null || I === void 0 || (M = I.nodeRef) === null || M === void 0 ? void 0 : M.current) !== null && S !== void 0 ? S : o.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var S, I = this.props;
        I.axis, I.bounds;
        var M = I.children, V = I.defaultPosition, k = I.defaultClassName, oe = I.defaultClassNameDragging, P = I.defaultClassNameDragged, q = I.position, Q = I.positionOffset;
        I.scale;
        var ie = w(I, u), ye = {}, $e = null, dt = Boolean(q), qe = !dt || this.state.dragging, Te = q || V, Ye = {
          x: (0, s.canDragX)(this) && qe ? this.state.x : Te.x,
          y: (0, s.canDragY)(this) && qe ? this.state.y : Te.y
        };
        this.state.isElementSVG ? $e = (0, l.createSVGTransform)(Ye, Q) : ye = (0, l.createCSSTransform)(Ye, Q);
        var Ke = (0, i.default)(M.props.className || "", k, (S = {}, _(S, oe, this.state.dragging), _(S, P, this.state.dragged), S));
        return /* @__PURE__ */ r.createElement(d.default, x({}, ie, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ r.cloneElement(r.Children.only(M), {
          className: Ke,
          style: D(D({}, M.props.style), ye),
          transform: $e
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(S, I) {
        var M = S.position, V = I.prevPropsPosition;
        return M && (!V || M.x !== V.x || M.y !== V.y) ? ((0, c.default)("Draggable: getDerivedStateFromProps %j", {
          position: M,
          prevPropsPosition: V
        }), {
          x: M.x,
          y: M.y,
          prevPropsPosition: D({}, M)
        }) : null;
      }
    }]), O;
  }(r.Component);
  e.default = R, _(R, "displayName", "Draggable"), _(R, "propTypes", D(D({}, d.default.propTypes), {}, {
    axis: n.default.oneOf(["both", "x", "y", "none"]),
    bounds: n.default.oneOfType([n.default.shape({
      left: n.default.number,
      right: n.default.number,
      top: n.default.number,
      bottom: n.default.number
    }), n.default.string, n.default.oneOf([!1])]),
    defaultClassName: n.default.string,
    defaultClassNameDragging: n.default.string,
    defaultClassNameDragged: n.default.string,
    defaultPosition: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    positionOffset: n.default.shape({
      x: n.default.oneOfType([n.default.number, n.default.string]),
      y: n.default.oneOfType([n.default.number, n.default.string])
    }),
    position: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    className: f.dontSetMe,
    style: f.dontSetMe,
    transform: f.dontSetMe
  })), _(R, "defaultProps", D(D({}, d.default.defaultProps), {}, {
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  }));
})(Es);
var js = Es, Ls = js.default, Op = js.DraggableCore;
wn.exports = Ls;
wn.exports.default = Ls;
wn.exports.DraggableCore = Op;
const Sp = (e, t, r) => {
  const [n, o] = te({ video1: "", video2: "" }), i = { video1: "/", video2: "/" }, l = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  }, s = (c, u = 0) => {
    if (c = c.replace(/\/$/gi, ""), t) {
      const v = t.filter((h) => h.to === c);
      if (v.length > 0) {
        const { slides: h } = v[0], b = h[u < 0 ? 0 : u];
        o(b || i);
      } else
        o(i);
    } else
      o(i);
  }, f = (c, u = 0, v = "") => {
    if (c = c.replace(/\/$/gi, ""), t) {
      const h = t.filter((b) => b.to === c);
      if (h.length > 0) {
        const { slides: b } = h[0], { modals: x } = b[u < 0 ? 0 : u], E = (x || []).filter(($) => $.id === v)[0];
        o(E || i);
      } else
        o(i);
    } else
      o(i);
  }, d = () => {
    const c = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (c) {
      const u = [...c].findIndex((w) => !w.hasAttribute("hidden"));
      s(r, u < 0 ? 0 : u);
      const v = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (v.length > 0) {
        const w = [...v].findIndex((E) => !E.hasAttribute("hidden"));
        s(r, w < 0 ? 0 : w);
      }
      const h = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      h && f(r, u, h.id);
      const b = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      b && f(r, u, b.id);
      const x = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      x && f(r, u, x.id);
    }
  };
  return J(() => {
    if (e) {
      const c = new MutationObserver(d);
      return c.observe(document.querySelector(e || "body"), l), () => c.disconnect();
    }
  }, [d, l]), n;
}, Pp = "_progress_18ffq_85", Rp = "_flex_18ffq_95", Cp = "_gap_18ffq_152", Dp = "_secondary_18ffq_189", Ap = "_close_18ffq_285", Ip = "_hide_18ffq_291", Np = "_ico_smart_18ffq_299", be = {
  "c-vid-container": "_c-vid-container_18ffq_1",
  "c-vid": "_c-vid_18ffq_1",
  "c-vid-controls": "_c-vid-controls_18ffq_34",
  "c-vid-controls-text": "_c-vid-controls-text_18ffq_75",
  progress: Pp,
  flex: Rp,
  "progress-bar": "_progress-bar_18ffq_101",
  "c-vid-controls-volume": "_c-vid-controls-volume_18ffq_108",
  "c-vid-controls-volume-item": "_c-vid-controls-volume-item_18ffq_129",
  "no-captions": "_no-captions_18ffq_140",
  gap: Cp,
  "menu-float": "_menu-float_18ffq_160",
  "menu-float-active": "_menu-float-active_18ffq_173",
  "menu-float-btn": "_menu-float-btn_18ffq_179",
  secondary: Dp,
  "menu-float-btn-disable": "_menu-float-btn-disable_18ffq_213",
  "menu-float-btndrop": "_menu-float-btndrop_18ffq_223",
  "menu-float-dropdown": "_menu-float-dropdown_18ffq_242",
  "menu-float-dropdown-content": "_menu-float-dropdown-content_18ffq_250",
  close: Ap,
  hide: Ip,
  "image-Video": "_image-Video_18ffq_295",
  ico_smart: Np
}, Fs = ({
  width: e,
  addClass: t,
  image: r,
  pathVideo: n,
  pathname: o
}) => {
  const [i, l] = te("00:00"), [s, f] = te(!1), [d, c] = te(!1), [u, v] = te(!1), {
    video1: h,
    video2: b
  } = Sp("body", n, o), [x, w] = te({
    state: !1,
    icon: ao,
    label: "Reproducir video"
  }), [E, $] = te({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  }), {
    deltaPosition: D
  } = E;
  function N() {
    const H = s ? W.current : Z.current;
    x.state ? (H.pause(), w({
      state: !1,
      icon: ao,
      label: "Reproducir video"
    })) : (H.play(), w({
      state: !0,
      icon: jp,
      label: "Pausar video"
    }));
  }
  function g() {
    const H = s ? W.current : Z.current, K = ne.current, ce = H.currentTime / H.duration * 100;
    K.style.flexBasis = `${ce}%`;
  }
  function L() {
    const H = s ? W.current : Z.current;
    K(H);
    function K(R) {
      const y = ce(R.currentTime);
      l(y);
    }
    function ce(R) {
      const y = parseInt(R, 10), T = Math.floor(y / 3600), O = Math.floor((y - T * 3600) / 60), C = y - T * 3600 - O * 60, S = _(se(T)), I = _(se(O)), M = _(se(C));
      return `${S}:${I}:${M}`;
    }
    function se(R) {
      return R < 10 ? R = "0" + R : R;
    }
    function _(R) {
      return isNaN(R) ? "00" : R;
    }
  }
  function A(H) {
    const K = X.current, ce = s ? W.current : Z.current, _ = H.nativeEvent.offsetX / K.offsetWidth * ce.duration;
    ce.currentTime = _;
  }
  const j = (H, K) => {
    f(!1), c(!1), K(H), z();
  }, z = () => {
    const H = ne.current;
    H.style.flexBasis = "0%", w({
      state: !1,
      icon: ao,
      label: "Reproducir video"
    });
  }, G = (H, K) => {
    const {
      x: ce,
      y: se
    } = E.deltaPosition;
    $({
      ...E,
      deltaPosition: {
        x: ce + K.deltaX,
        y: se + K.deltaY
      }
    });
  };
  J(() => {
    z();
  }, [h, b]);
  const Y = ee(null), W = ee(), Z = ee(), X = ee(), ne = ee();
  return /* @__PURE__ */ p(wn.exports, {
    nodeRef: Y,
    handle: "strong",
    position: D,
    onDrag: G,
    children: /* @__PURE__ */ F("div", {
      ref: Y,
      className: `${be["menu-float"]} ${(s || d) && be["menu-float-active"]} ${be["menu-float-box"]} ${be.box} ${be["no-cursor"]}`,
      children: [/* @__PURE__ */ F("div", {
        className: be["menu-float-dropdown"],
        children: [(!s && !d || !!h && !s && !d || !!b && (s || d) || !!b && (s || d) && !s) && /* @__PURE__ */ F("button", {
          onClick: () => {
            u || (j(!0, f), v(!0));
          },
          className: `${be["menu-float-btn"]} ${be["menu-float-btndrop"]} ${!s && !d && be["menu-float-btn-disable"]}`,
          "aria-label": "Int\xE9rprete de lenguaje de se\xF1as",
          children: [!s && !d && (r ? /* @__PURE__ */ p("img", {
            className: be["image-Video"],
            src: r
          }) : /* @__PURE__ */ F("svg", {
            id: "Capa_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: 0,
            y: 0,
            viewBox: "0 0 157.39 157.39",
            style: {
              enableBackground: "new 0 0 157.39 157.39"
            },
            xmlSpace: "preserve",
            "aria-hidden": "true",
            children: [/* @__PURE__ */ p("path", {
              className: "st0",
              d: "M76.31 74.62s9.79 5.59 11.53 7.69c1.75 2.1 2.45 5.59 0 6.64C85.4 90 48.7 82.31 45.9 81.79c-2.8-.52-4.89 5.61 0 7.26s14.68 2.35 17.83 3.75 4.89 4.89.7 4.54c-4.19-.35-22.02-2.45-25.86-2.8-3.84-.35-6.29 4.89-2.1 6.29 4.19 1.4 22.56 2.1 23.86 2.8s4.94 4.89.5 5.24c-4.44.35-18.07-.7-20.52 0-2.45.7-5.94 6.64 2.1 7.34s19.57 0 22.02 0c2.45 0 4.54 2.45.7 3.15s-11.18 2.1-13.98 3.15c-2.8 1.05-5.59 6.99 2.45 6.29 8.04-.7 43.69-5.59 47.53-5.94 3.84-.35 4.19-2.8 5.59-8.39s2.8-13.98 2.8-16.78-1.4-5.24-3.5-7.69-6.64-7.69-12.93-12.93c-6.29-5.24-11.03-7.09-12.93-8.04-3.5-1.74-6.84 3.83-3.85 5.59z"
            }), /* @__PURE__ */ p("path", {
              className: "st0",
              d: "M119.84 50.55c-.52-3.87-7.01-3.51-6.79-.04 0 0 .87 11.24.12 13.86-.75 2.62-3.25 5.17-5.49 3.73-2.24-1.43-16.5-36.11-17.64-38.72-1.14-2.61-7.39-.89-6.01 4.08 1.39 4.97 6.31 13.46 6.92 16.85s-1.3 6.8-3.37 3.13-10.34-19.58-12.22-22.96-7.58-2.45-6.38 1.8c1.2 4.25 10.94 19.84 11.1 21.31.15 1.47-1.27 6.83-4.06 3.36-2.78-3.48-9.58-15.34-11.53-16.97-1.95-1.63-8.83-1.18-4.89 5.86s11 16.19 12.37 18.21c1.37 2.02.53 5.13-2.21 2.35-2.74-2.79-8.02-8.07-10.46-9.8s-8.92-.7-3.83 5.56c2.89 3.55 11.88 13.68 19.57 22.33 4.28.22 10.16.41 9.83-.26-.52-1.05-10.31-6.82-12.06-8.91-1.75-2.1-1.05-6.64 1.05-8.74 2.1-2.1 6.47-1.92 9.26-.7 2.8 1.22 16.78 10.49 19.75 13.98 1.89 2.22 6.31 7.68 9.29 11.37.17-.11.33-.21.47-.3 2.31-1.57 3.55-4.1 4.4-7.21s2.63-9.81 3.43-17.96c.8-8.14-.34-13.1-.62-15.21z"
            }), /* @__PURE__ */ p("path", {
              className: "st0",
              d: "M78.7 157.39C35.3 157.39 0 122.09 0 78.7 0 35.3 35.3 0 78.7 0c43.39 0 78.69 35.3 78.69 78.7 0 43.39-35.3 78.69-78.69 78.69zm0-145.13c-36.63 0-66.44 29.8-66.44 66.44s29.8 66.44 66.44 66.44 66.44-29.8 66.44-66.44-29.81-66.44-66.44-66.44z"
            })]
          })), /* @__PURE__ */ p($p, {}), (s || d) && (s ? "1" : "2")]
        }), (s || d) && /* @__PURE__ */ F(mt, {
          children: [/* @__PURE__ */ F("button", {
            tabIndex: -1,
            className: `${be["menu-float-btn"]} ${be.secondary}`,
            onClick: () => {
              d && j(!0, f);
            },
            children: ["1", /* @__PURE__ */ p("strong", {
              className: "cursor",
              children: /* @__PURE__ */ p(Ka, {})
            })]
          }), /* @__PURE__ */ F("button", {
            tabIndex: -1,
            className: `${be["menu-float-btn"]} ${be.secondary}`,
            onClick: () => {
              s && j(!0, c);
            },
            children: ["2", /* @__PURE__ */ p("strong", {
              className: "cursor",
              children: /* @__PURE__ */ p(Ka, {})
            })]
          }), /* @__PURE__ */ p("button", {
            tabIndex: -1,
            className: `${be["menu-float-btn"]}`,
            onClick: () => !1,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            "aria-label": "Arrastrar video",
            children: /* @__PURE__ */ p("strong", {
              className: "cursor",
              children: /* @__PURE__ */ p(kp, {})
            })
          }), /* @__PURE__ */ p("button", {
            className: `${be["menu-float-btn"]} ${be.close}`,
            onClick: () => {
              f(!1), c(!1), $({
                deltaPosition: {
                  x: 0,
                  y: 0
                }
              }), v(!1);
            },
            onFocus: () => v(!0),
            onBlur: () => v(!0),
            "aria-label": "Cerrar",
            children: /* @__PURE__ */ p(Mp, {})
          })]
        })]
      }), /* @__PURE__ */ p("div", {
        className: `${be["c-vid-container"]} ${t}`,
        display: s || d ? "true" : "false",
        children: /* @__PURE__ */ F("div", {
          className: `${be["c-vid"]} ${t}`,
          style: {
            maxWidth: `${e}px`
          },
          children: [s && /* @__PURE__ */ p("video", {
            src: h,
            ref: W,
            onTimeUpdate: () => {
              g(), L();
            },
            className: `${be["no-captions"]}`
          }), d && /* @__PURE__ */ p("video", {
            src: b,
            ref: Z,
            onTimeUpdate: () => {
              g(), L();
            },
            className: `${be["no-captions"]}`
          }), /* @__PURE__ */ F("div", {
            className: be["c-vid-controls"],
            children: [/* @__PURE__ */ p("button", {
              "aria-label": x.label,
              onClick: N,
              children: x.icon
            }), /* @__PURE__ */ p("div", {
              className: be.flex,
              children: /* @__PURE__ */ F("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                focusable: "false",
                children: [/* @__PURE__ */ p("path", {
                  fill: "none",
                  d: "M0 0h24v24H0z"
                }), /* @__PURE__ */ p("path", {
                  d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                })]
              })
            }), /* @__PURE__ */ p("p", {
              className: be["c-vid-controls-text"],
              children: /* @__PURE__ */ p("span", {
                children: i
              })
            }), /* @__PURE__ */ p("div", {
              className: be["progress-content"],
              children: /* @__PURE__ */ p("div", {
                ref: X,
                className: be.progress,
                onClick: A,
                children: /* @__PURE__ */ p("div", {
                  ref: ne,
                  className: be["progress-bar"],
                  onChange: g
                })
              })
            })]
          })]
        })
      })]
    })
  });
};
Fs.propTypes = {
  width: a.exports.string,
  addClass: a.exports.string,
  image: a.exports.string,
  pathVideo: a.exports.array,
  pathname: a.exports.string
};
Fs.defaultProps = {
  width: "210"
};
const $p = () => /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "48",
  viewBox: "0 96 960 960",
  width: "48",
  children: /* @__PURE__ */ p("path", {
    d: "M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z"
  })
}), Mp = () => /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  "aria-hidden": "true",
  children: /* @__PURE__ */ p("path", {
    id: "close",
    d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
  })
}), kp = () => /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  "aria-hidden": "true",
  children: /* @__PURE__ */ p("path", {
    id: "open_with",
    d: "m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z"
  })
}), Ka = () => /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 96 960 960",
  "aria-hidden": "true",
  children: /* @__PURE__ */ p("path", {
    d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z"
  })
}), ao = /* @__PURE__ */ F("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  className: "svg-icon",
  focusable: "false",
  children: [/* @__PURE__ */ p("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ p("path", {
    d: "M8 5v14l11-7z"
  })]
}), jp = /* @__PURE__ */ F("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "48px",
  viewBox: "0 0 24 24",
  width: "48px",
  fill: "#000000",
  "aria-hidden": "true",
  className: "svg-icon",
  focusable: "false",
  children: [/* @__PURE__ */ p("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ p("path", {
    d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
  })]
}), Yo = ut(), qs = ({
  children: e,
  isVisible: t
}) => {
  const [r, n] = te(!1), o = ee(), i = () => n(!r), l = (s) => {
    o.current || (o.current = s);
  };
  return J(() => {
    t !== void 0 && n(t);
  }, [t]), /* @__PURE__ */ p(Yo.Provider, {
    value: {
      isOpen: r,
      onOpen: i,
      setRefButton: l,
      refButton: o
    },
    children: e
  });
};
qs.defaultProps = {
  isVisible: !1
};
qs.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.arrayOf(a.exports.node), a.exports.element, a.exports.node]),
  isVisible: a.exports.bool
};
const Lp = ({
  children: e,
  onClick: t
}) => {
  const {
    onOpen: r,
    setRefButton: n,
    refButton: o,
    isOpen: i
  } = Pe(Yo);
  if (Ae.count(e) > 1)
    return null;
  const l = (c) => {
    r(), t && t(c);
  }, s = (c) => {
    var u;
    return !!(c && !((u = c.dataset) != null && u.popper) && c !== o.current);
  }, f = (c) => {
    i && s(c.relatedTarget) && r();
  }, d = (c) => {
    if (!lt(c))
      return null;
    const {
      onBlur: u,
      ...v
    } = c.props;
    return De(c, {
      ...v,
      ref: n,
      onClick: l,
      onBlur: (h) => {
        u == null || u(h), f(h);
      }
    });
  };
  return Ae.map(e, d);
};
Lp.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.node), a.exports.arrayOf(a.exports.element), a.exports.element, a.exports.node]),
  onClick: a.exports.func
};
const Fp = ({
  ref: e,
  onInteractionOutside: t,
  onInteractionOutsideStart: r
}) => {
  const o = ee({
    isPointerDown: !1,
    onInteractionOutsideStart: r,
    onInteractionOutside: t
  }).current;
  o.onInteractionOutside = t, o.onInteractionOutsideStart = r, J(() => {
    const i = (s) => {
      Qa(s, e) && o.onInteractionOutside && (o.onInteractionOutsideStart && o.onInteractionOutsideStart(s), o.isPointerDown = !0);
    }, l = (s) => {
      o.isPointerDown && o.onInteractionOutside && Qa(s, e) && (o.onInteractionOutside(s), o.isPointerDown = !1);
    };
    return document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", l, !0), () => {
      document.removeEventListener("mousedown", i, !0), document.removeEventListener("mouseup", l, !0);
    };
  }, [e, o]);
};
function Qa(e, t) {
  if (e.target) {
    const r = e.target.ownerDocument;
    if (!r || !r.documentElement.contains(e.target))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
const io = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, so = Object.freeze({
  ESC: 27,
  TAB: 9
}), qp = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', Bs = ({
  id: e,
  children: t,
  addClass: r,
  hasArrow: n,
  isDisabled: o,
  distance: i,
  placement: l,
  disabledInteractOutside: s,
  defaultStyle: f
}) => {
  const {
    isOpen: d,
    onOpen: c,
    refButton: u
  } = Pe(Yo), v = ee(), h = ee(), b = (D, N) => D === N.current;
  Fp({
    ref: h,
    onInteractionOutside: (D) => {
      !s && !b(D.target, u) && (c(), D.stopPropagation(), D.preventDefault());
    }
  });
  const w = (D) => {
    const N = v.current.querySelectorAll(qp), g = u.current, L = N[0], A = N[N.length - 1];
    if ((D.keyCode || D.which) === so.TAB && document.activeElement === A)
      return g.focus(), D.preventDefault();
    D.shiftKey && (D.keyCode || D.which) === so.TAB && document.activeElement === L && (g.focus(), D.preventDefault()), (D.keyCode || D.which) === so.ESC && g.focus();
  }, {
    styles: E,
    attributes: $
  } = xn(u.current, v.current, {
    placement: l,
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
      enabled: d
    }]
  });
  return J(() => {
    const D = v.current;
    d ? (D.focus(), h.current = D) : h.current = null;
  }, [d, v]), o ? /* @__PURE__ */ p(mt, {
    children: t
  }) : /* @__PURE__ */ p(fr, {
    id: "js-popover-modal-portal",
    children: /* @__PURE__ */ F("div", {
      id: e,
      ref: v,
      role: "status",
      tabIndex: -1,
      className: re({
        [io["c-popover-modal"]]: !f,
        [io["c-popover-modal--active"]]: !f && d,
        "video-interpreter-ui-popover": "video-interpreter-ui-popover",
        [r]: r
      }),
      style: E.popper,
      onKeyDown: w,
      "data-hidden": !d,
      "data-popper": !0,
      ...!d && {
        hidden: !0
      },
      ...$.popper,
      children: [t, n && /* @__PURE__ */ p("div", {
        className: re({
          [io["c-popover-modal__arrow"]]: !f
        }),
        "data-class": "c-popover-modal__arrow",
        "data-popper-arrow": !0,
        style: E.arrow
      })]
    })
  });
};
Bs.propTypes = {
  children: a.exports.oneOfType([a.exports.arrayOf(a.exports.element), a.exports.arrayOf(a.exports.node), a.exports.element, a.exports.node]),
  id: a.exports.string,
  addClass: a.exports.string,
  hasArrow: a.exports.bool,
  isDisabled: a.exports.bool,
  distance: a.exports.number,
  defaultStyle: a.exports.bool,
  disabledInteractOutside: a.exports.bool,
  placement: a.exports.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
};
Bs.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  disabledInteractOutside: !1
};
const Bp = (e, t) => {
  const [r, n] = te(() => {
    if (typeof window > "u")
      return t;
    try {
      const i = window.localStorage.getItem(e);
      return i ? JSON.parse(i) : t;
    } catch (i) {
      return console.warn(`Error in useLocalStorage: ${i}`), t;
    }
  });
  return [r, (i) => {
    try {
      const l = i instanceof Function ? i(r) : i;
      n(l), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(l));
    } catch (l) {
      console.warn(`Error in useLocalStorage: ${l}`);
    }
  }];
}, Vp = (e, t, r) => {
  const [n, o] = te(r), i = e.map((s) => window.matchMedia(s)), l = () => {
    const s = i.findIndex((f) => f.matches);
    return typeof t[s] < "u" ? t[s] : r;
  };
  return J(() => {
    o(l);
    const s = (f) => o(l);
    return i.forEach((f) => f.addEventListener("change", s)), () => {
      i.forEach((f) => f.removeEventListener("change", s));
    };
  }, []), n;
}, Up = () => {
  const [e, t] = Bp("dark-mode-enabled"), r = Vp(["(prefers-color-scheme: dark)"], [!0], !1), n = typeof e < "u" ? e : r;
  return J(() => {
    t(r);
  }, [r]), J(() => {
    const o = window.document.body;
    n ? o.setAttribute("data-dark-mode", n) : o.removeAttribute("data-dark-mode", n);
  }, [n]), [n, t];
}, Vs = (e) => {
  let t = {};
  for (const r in e)
    if (typeof e[r] == "object") {
      const n = Vs(e[r]);
      for (const o in n)
        t = {
          ...t,
          [r.includes("accents") || r.includes("palette") ? o : `${r}-${o}`]: n[o]
        };
    } else
      t[r] = e[r];
  return t;
}, Hp = (e) => Vs(e);
export {
  nc as Accordion,
  ai as AccordionButton,
  ii as AccordionItem,
  si as AccordionPanel,
  li as Audio,
  Ut as Button,
  Uu as ButtonSection,
  pi as CheckBox,
  Kc as CheckBoxGroup,
  el as Col,
  rl as Content,
  $i as DragAndDrop,
  Ni as DragAndDropContext,
  Mi as Draggable,
  ki as Droppable,
  zp as Filter,
  ji as GeneralDraggable,
  Ce as Icon,
  Li as Image,
  Fi as Input,
  Iu as InputGroup,
  Bi as InputLeftAddon,
  Vi as InputRightAddon,
  qi as InputStyle,
  Fs as Interpreter,
  $u as Kbd,
  Yi as Link,
  Mu as List,
  zi as ListItem,
  Ui as Modal,
  Fu as ModalCloseButton,
  Hi as ModalContent,
  gn as ModalContext,
  Gi as ModalOverlay,
  rs as NavSection,
  Qi as NumberDecrementStepper,
  Ji as NumberIncrementStepper,
  Zi as NumberInput,
  mn as NumberInputContext,
  Xi as NumberInputField,
  Ki as NumberInputStepper,
  ku as OrderedList,
  es as Pagination,
  Do as PaginationItem,
  Yu as Panel,
  bn as PanelContext,
  Gu as Paper,
  qs as PopoverModal,
  Lp as PopoverModalButton,
  Bs as PopoverModalContent,
  Yo as PopoverModalContext,
  fr as Portal,
  ef as Row,
  ts as Section,
  ns as Select,
  tf as SelectGroup,
  os as Switch,
  as as Tab,
  is as TabList,
  ss as TabPanel,
  cs as TabPanels,
  rf as Tabs,
  Ao as TabsContext,
  ls as TextArea,
  nf as ThemeProvider,
  ys as Toggletip,
  _s as Tooltip,
  xs as Tour,
  Lo as TourContext,
  ws as TourElement,
  wd as TourHelpLayer,
  ju as UnorderedList,
  Ts as Video,
  Hp as createTheme,
  Up as useDarkMode,
  Fp as useInteractOutside,
  Bp as useLocalStorage,
  Vp as useMedia,
  ci as useOnScreen,
  qu as usePagination,
  Ku as usePortal
};
