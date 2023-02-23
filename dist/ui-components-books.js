import * as $t from "react";
import Le, { Children as Ee, useState as J, useEffect as U, isValidElement as Ze, cloneElement as xe, forwardRef as lt, useRef as G, useMemo as ue, useLayoutEffect as zo, useCallback as De, createContext as Ke, memo as Wo, useReducer as Ar, useContext as be, createElement as hi } from "react";
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
  function l(s, u, f) {
    var c, d = {}, v = null, m = null;
    f !== void 0 && (v = "" + f), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (c in u)
      r.call(u, c) && !i.hasOwnProperty(c) && (d[c] = u[c]);
    if (s && s.defaultProps)
      for (c in u = s.defaultProps, u)
        d[c] === void 0 && (d[c] = u[c]);
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
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function b(h) {
      if (h === null || typeof h != "object")
        return null;
      var R = y && h[y] || h[g];
      return typeof R == "function" ? R : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(h) {
      {
        for (var R = arguments.length, k = new Array(R > 1 ? R - 1 : 0), X = 1; X < R; X++)
          k[X - 1] = arguments[X];
        C("error", h, k);
      }
    }
    function C(h, R, k) {
      {
        var X = w.ReactDebugCurrentFrame, se = X.getStackAddendum();
        se !== "" && (R += "%s", k = k.concat([se]));
        var de = k.map(function(ae) {
          return String(ae);
        });
        de.unshift("Warning: " + R), Function.prototype.apply.call(console[h], console, de);
      }
    }
    var P = !1, _ = !1, O = !1, x = !1, $ = !1, L;
    L = Symbol.for("react.module.reference");
    function M(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === i || $ || h === a || h === f || h === c || x || h === m || P || _ || O || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === d || h.$$typeof === l || h.$$typeof === s || h.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === L || h.getModuleId !== void 0));
    }
    function D(h, R, k) {
      var X = h.displayName;
      if (X)
        return X;
      var se = R.displayName || R.name || "";
      return se !== "" ? k + "(" + se + ")" : k;
    }
    function K(h) {
      return h.displayName || "Context";
    }
    function F(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
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
        case c:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case s:
            var R = h;
            return K(R) + ".Consumer";
          case l:
            var k = h;
            return K(k._context) + ".Provider";
          case u:
            return D(h, h.render, "ForwardRef");
          case d:
            var X = h.displayName || null;
            return X !== null ? X : F(h.type) || "Memo";
          case v: {
            var se = h, de = se._payload, ae = se._init;
            try {
              return F(ae(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ne = 0, re, te, ye, fe, T, I, V;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function B() {
      {
        if (ne === 0) {
          re = console.log, te = console.info, ye = console.warn, fe = console.error, T = console.group, I = console.groupCollapsed, V = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: q,
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
        ne++;
      }
    }
    function H() {
      {
        if (ne--, ne === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, h, {
              value: re
            }),
            info: Z({}, h, {
              value: te
            }),
            warn: Z({}, h, {
              value: ye
            }),
            error: Z({}, h, {
              value: fe
            }),
            group: Z({}, h, {
              value: T
            }),
            groupCollapsed: Z({}, h, {
              value: I
            }),
            groupEnd: Z({}, h, {
              value: V
            })
          });
        }
        ne < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = w.ReactCurrentDispatcher, z;
    function W(h, R, k) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (se) {
            var X = se.stack.trim().match(/\n( *(at )?)/);
            z = X && X[1] || "";
          }
        return `
` + z + h;
      }
    }
    var Q = !1, Y;
    {
      var A = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new A();
    }
    function E(h, R) {
      if (!h || Q)
        return "";
      {
        var k = Y.get(h);
        if (k !== void 0)
          return k;
      }
      var X;
      Q = !0;
      var se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = j.current, j.current = null, B();
      try {
        if (R) {
          var ae = function() {
            throw Error();
          };
          if (Object.defineProperty(ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ae, []);
            } catch (ft) {
              X = ft;
            }
            Reflect.construct(h, [], ae);
          } else {
            try {
              ae.call();
            } catch (ft) {
              X = ft;
            }
            h.call(ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            X = ft;
          }
          h();
        }
      } catch (ft) {
        if (ft && X && typeof ft.stack == "string") {
          for (var oe = ft.stack.split(`
`), Ne = X.stack.split(`
`), ge = oe.length - 1, _e = Ne.length - 1; ge >= 1 && _e >= 0 && oe[ge] !== Ne[_e]; )
            _e--;
          for (; ge >= 1 && _e >= 0; ge--, _e--)
            if (oe[ge] !== Ne[_e]) {
              if (ge !== 1 || _e !== 1)
                do
                  if (ge--, _e--, _e < 0 || oe[ge] !== Ne[_e]) {
                    var We = `
` + oe[ge].replace(" at new ", " at ");
                    return h.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", h.displayName)), typeof h == "function" && Y.set(h, We), We;
                  }
                while (ge >= 1 && _e >= 0);
              break;
            }
        }
      } finally {
        Q = !1, j.current = de, H(), Error.prepareStackTrace = se;
      }
      var kt = h ? h.displayName || h.name : "", Jr = kt ? W(kt) : "";
      return typeof h == "function" && Y.set(h, Jr), Jr;
    }
    function ee(h, R, k) {
      return E(h, !1);
    }
    function me(h) {
      var R = h.prototype;
      return !!(R && R.isReactComponent);
    }
    function Oe(h, R, k) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return E(h, me(h));
      if (typeof h == "string")
        return W(h);
      switch (h) {
        case f:
          return W("Suspense");
        case c:
          return W("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case u:
            return ee(h.render);
          case d:
            return Oe(h.type, R, k);
          case v: {
            var X = h, se = X._payload, de = X._init;
            try {
              return Oe(de(se), R, k);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, at = {}, ut = w.ReactDebugCurrentFrame;
    function it(h) {
      if (h) {
        var R = h._owner, k = Oe(h.type, h._source, R ? R.type : null);
        ut.setExtraStackFrame(k);
      } else
        ut.setExtraStackFrame(null);
    }
    function Se(h, R, k, X, se) {
      {
        var de = Function.call.bind($e);
        for (var ae in h)
          if (de(h, ae)) {
            var oe = void 0;
            try {
              if (typeof h[ae] != "function") {
                var Ne = Error((X || "React class") + ": " + k + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ne.name = "Invariant Violation", Ne;
              }
              oe = h[ae](R, ae, X, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              oe = ge;
            }
            oe && !(oe instanceof Error) && (it(se), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", k, ae, typeof oe), it(null)), oe instanceof Error && !(oe.message in at) && (at[oe.message] = !0, it(se), S("Failed %s type: %s", k, oe.message), it(null));
          }
      }
    }
    var Je = Array.isArray;
    function Qe(h) {
      return Je(h);
    }
    function wt(h) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, k = R && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return k;
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
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(h)), xt(h);
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
        var R = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Qn(h) {
      if ($e.call(h, "key")) {
        var R = Object.getOwnPropertyDescriptor(h, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function er(h, R) {
      if (typeof h.ref == "string" && Ae.current && R && Ae.current.stateNode !== R) {
        var k = F(Ae.current.type);
        Ye[k] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Ae.current.type), h.ref), Ye[k] = !0);
      }
    }
    function On(h, R) {
      {
        var k = function() {
          mt || (mt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function tr(h, R) {
      {
        var k = function() {
          Kt || (Kt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Sn = function(h, R, k, X, se, de, ae) {
      var oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: R,
        ref: k,
        props: ae,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return oe._store = {}, Object.defineProperty(oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.freeze && (Object.freeze(oe.props), Object.freeze(oe)), oe;
    };
    function nr(h, R, k, X, se) {
      {
        var de, ae = {}, oe = null, Ne = null;
        k !== void 0 && (Et(k), oe = "" + k), Qn(R) && (Et(R.key), oe = "" + R.key), Tn(R) && (Ne = R.ref, er(R, se));
        for (de in R)
          $e.call(R, de) && !et.hasOwnProperty(de) && (ae[de] = R[de]);
        if (h && h.defaultProps) {
          var ge = h.defaultProps;
          for (de in ge)
            ae[de] === void 0 && (ae[de] = ge[de]);
        }
        if (oe || Ne) {
          var _e = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          oe && On(ae, _e), Ne && tr(ae, _e);
        }
        return Sn(h, oe, Ne, se, X, Ae.current, ae);
      }
    }
    var Xt = w.ReactCurrentOwner, Cn = w.ReactDebugCurrentFrame;
    function he(h) {
      if (h) {
        var R = h._owner, k = Oe(h.type, h._source, R ? R.type : null);
        Cn.setExtraStackFrame(k);
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
          var h = F(Xt.current.type);
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
        var R = tt();
        if (!R) {
          var k = typeof h == "string" ? h : h.displayName || h.name;
          k && (R = `

Check the top-level render call using <` + k + ">.");
        }
        return R;
      }
    }
    function dt(h, R) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var k = ze(R);
        if (ke[k])
          return;
        ke[k] = !0;
        var X = "";
        h && h._owner && h._owner !== Xt.current && (X = " It was passed a child from " + F(h._owner.type) + "."), he(h), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, X), he(null);
      }
    }
    function Me(h, R) {
      {
        if (typeof h != "object")
          return;
        if (Qe(h))
          for (var k = 0; k < h.length; k++) {
            var X = h[k];
            Pe(X) && dt(X, R);
          }
        else if (Pe(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var se = b(h);
          if (typeof se == "function" && se !== h.entries)
            for (var de = se.call(h), ae; !(ae = de.next()).done; )
              Pe(ae.value) && dt(ae.value, R);
        }
      }
    }
    function Tt(h) {
      {
        var R = h.type;
        if (R == null || typeof R == "string")
          return;
        var k;
        if (typeof R == "function")
          k = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          k = R.propTypes;
        else
          return;
        if (k) {
          var X = F(R);
          Se(k, h.props, "prop", X, h);
        } else if (R.PropTypes !== void 0 && !Re) {
          Re = !0;
          var se = F(R);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(h) {
      {
        for (var R = Object.keys(h.props), k = 0; k < R.length; k++) {
          var X = R[k];
          if (X !== "children" && X !== "key") {
            he(h), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), he(null);
            break;
          }
        }
        h.ref !== null && (he(h), S("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    function St(h, R, k, X, se, de) {
      {
        var ae = M(h);
        if (!ae) {
          var oe = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ne = Ie(se);
          Ne ? oe += Ne : oe += tt();
          var ge;
          h === null ? ge = "null" : Qe(h) ? ge = "array" : h !== void 0 && h.$$typeof === t ? (ge = "<" + (F(h.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof h, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, oe);
        }
        var _e = nr(h, R, k, se, de);
        if (_e == null)
          return _e;
        if (ae) {
          var We = R.children;
          if (We !== void 0)
            if (X)
              if (Qe(We)) {
                for (var kt = 0; kt < We.length; kt++)
                  Me(We[kt], h);
                Object.freeze && Object.freeze(We);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(We, h);
        }
        return h === r ? Ot(_e) : Tt(_e), _e;
      }
    }
    function It(h, R, k) {
      return St(h, R, k, !0);
    }
    function Rn(h, R, k) {
      return St(h, R, k, !1);
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
}, le = {};
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
    return le;
  no = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function C(_) {
    if (typeof _ == "object" && _ !== null) {
      var O = _.$$typeof;
      switch (O) {
        case t:
          switch (_ = _.type, _) {
            case u:
            case f:
            case r:
            case i:
            case a:
            case d:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case c:
                case y:
                case m:
                case l:
                  return _;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  function P(_) {
    return C(_) === f;
  }
  return le.AsyncMode = u, le.ConcurrentMode = f, le.ContextConsumer = s, le.ContextProvider = l, le.Element = t, le.ForwardRef = c, le.Fragment = r, le.Lazy = y, le.Memo = m, le.Portal = n, le.Profiler = i, le.StrictMode = a, le.Suspense = d, le.isAsyncMode = function(_) {
    return P(_) || C(_) === u;
  }, le.isConcurrentMode = P, le.isContextConsumer = function(_) {
    return C(_) === s;
  }, le.isContextProvider = function(_) {
    return C(_) === l;
  }, le.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, le.isForwardRef = function(_) {
    return C(_) === c;
  }, le.isFragment = function(_) {
    return C(_) === r;
  }, le.isLazy = function(_) {
    return C(_) === y;
  }, le.isMemo = function(_) {
    return C(_) === m;
  }, le.isPortal = function(_) {
    return C(_) === n;
  }, le.isProfiler = function(_) {
    return C(_) === i;
  }, le.isStrictMode = function(_) {
    return C(_) === a;
  }, le.isSuspense = function(_) {
    return C(_) === d;
  }, le.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === f || _ === i || _ === a || _ === d || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === y || _.$$typeof === m || _.$$typeof === l || _.$$typeof === s || _.$$typeof === c || _.$$typeof === b || _.$$typeof === w || _.$$typeof === S || _.$$typeof === g);
  }, le.typeOf = C, le;
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
function xi() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function C(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === r || E === f || E === i || E === a || E === d || E === v || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === m || E.$$typeof === l || E.$$typeof === s || E.$$typeof === c || E.$$typeof === b || E.$$typeof === w || E.$$typeof === S || E.$$typeof === g);
    }
    function P(E) {
      if (typeof E == "object" && E !== null) {
        var ee = E.$$typeof;
        switch (ee) {
          case t:
            var me = E.type;
            switch (me) {
              case u:
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
                  case c:
                  case y:
                  case m:
                  case l:
                    return Oe;
                  default:
                    return ee;
                }
            }
          case n:
            return ee;
        }
      }
    }
    var _ = u, O = f, x = s, $ = l, L = t, M = c, D = r, K = y, F = m, Z = n, ne = i, re = a, te = d, ye = !1;
    function fe(E) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(E) || P(E) === u;
    }
    function T(E) {
      return P(E) === f;
    }
    function I(E) {
      return P(E) === s;
    }
    function V(E) {
      return P(E) === l;
    }
    function q(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function B(E) {
      return P(E) === c;
    }
    function H(E) {
      return P(E) === r;
    }
    function j(E) {
      return P(E) === y;
    }
    function z(E) {
      return P(E) === m;
    }
    function W(E) {
      return P(E) === n;
    }
    function Q(E) {
      return P(E) === i;
    }
    function Y(E) {
      return P(E) === a;
    }
    function A(E) {
      return P(E) === d;
    }
    ce.AsyncMode = _, ce.ConcurrentMode = O, ce.ContextConsumer = x, ce.ContextProvider = $, ce.Element = L, ce.ForwardRef = M, ce.Fragment = D, ce.Lazy = K, ce.Memo = F, ce.Portal = Z, ce.Profiler = ne, ce.StrictMode = re, ce.Suspense = te, ce.isAsyncMode = fe, ce.isConcurrentMode = T, ce.isContextConsumer = I, ce.isContextProvider = V, ce.isElement = q, ce.isForwardRef = B, ce.isFragment = H, ce.isLazy = j, ce.isMemo = z, ce.isPortal = W, ce.isProfiler = Q, ce.isStrictMode = Y, ce.isSuspense = A, ce.isValidElementType = C, ce.typeOf = P;
  }()), ce;
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
      var u = Object.getOwnPropertyNames(l).map(function(c) {
        return l[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        f[c] = c;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return rr = a() ? Object.assign : function(i, l) {
    for (var s, u = r(i), f, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var d in s)
        t.call(s, d) && (u[d] = s[d]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          n.call(s, f[v]) && (u[f[v]] = s[f[v]]);
      }
    }
    return u;
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
  function a(i, l, s, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (r(i, c)) {
          var d;
          try {
            if (typeof i[c] != "function") {
              var v = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            d = i[c](l, c, u, s, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return sr = function(s, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(T) {
      var I = T && (f && T[f] || T[c]);
      if (typeof I == "function")
        return I;
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
      any: S(),
      arrayOf: C,
      element: P(),
      elementType: _(),
      instanceOf: O,
      node: M(),
      objectOf: $,
      oneOf: x,
      oneOfType: L,
      shape: K,
      exact: F
    };
    function y(T, I) {
      return T === I ? T !== 0 || 1 / T === 1 / I : T !== T && I !== I;
    }
    function g(T, I) {
      this.message = T, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function b(T) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, V = 0;
      function q(H, j, z, W, Q, Y, A) {
        if (W = W || v, Y = Y || z, A !== n) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = W + ":" + z;
            !I[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[ee] = !0, V++);
          }
        }
        return j[z] == null ? H ? j[z] === null ? new g("The " + Q + " `" + Y + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new g("The " + Q + " `" + Y + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : T(j, z, W, Q, Y);
      }
      var B = q.bind(null, !1);
      return B.isRequired = q.bind(null, !0), B;
    }
    function w(T) {
      function I(V, q, B, H, j, z) {
        var W = V[q], Q = re(W);
        if (Q !== T) {
          var Y = te(W);
          return new g(
            "Invalid " + H + " `" + j + "` of type " + ("`" + Y + "` supplied to `" + B + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return b(I);
    }
    function S() {
      return b(l);
    }
    function C(T) {
      function I(V, q, B, H, j) {
        if (typeof T != "function")
          return new g("Property `" + j + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var z = V[q];
        if (!Array.isArray(z)) {
          var W = re(z);
          return new g("Invalid " + H + " `" + j + "` of type " + ("`" + W + "` supplied to `" + B + "`, expected an array."));
        }
        for (var Q = 0; Q < z.length; Q++) {
          var Y = T(z, Q, B, H, j + "[" + Q + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return b(I);
    }
    function P() {
      function T(I, V, q, B, H) {
        var j = I[V];
        if (!s(j)) {
          var z = re(j);
          return new g("Invalid " + B + " `" + H + "` of type " + ("`" + z + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(T);
    }
    function _() {
      function T(I, V, q, B, H) {
        var j = I[V];
        if (!e.isValidElementType(j)) {
          var z = re(j);
          return new g("Invalid " + B + " `" + H + "` of type " + ("`" + z + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(T);
    }
    function O(T) {
      function I(V, q, B, H, j) {
        if (!(V[q] instanceof T)) {
          var z = T.name || v, W = fe(V[q]);
          return new g("Invalid " + H + " `" + j + "` of type " + ("`" + W + "` supplied to `" + B + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return b(I);
    }
    function x(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function I(V, q, B, H, j) {
        for (var z = V[q], W = 0; W < T.length; W++)
          if (y(z, T[W]))
            return null;
        var Q = JSON.stringify(T, function(A, E) {
          var ee = te(E);
          return ee === "symbol" ? String(E) : E;
        });
        return new g("Invalid " + H + " `" + j + "` of value `" + String(z) + "` " + ("supplied to `" + B + "`, expected one of " + Q + "."));
      }
      return b(I);
    }
    function $(T) {
      function I(V, q, B, H, j) {
        if (typeof T != "function")
          return new g("Property `" + j + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var z = V[q], W = re(z);
        if (W !== "object")
          return new g("Invalid " + H + " `" + j + "` of type " + ("`" + W + "` supplied to `" + B + "`, expected an object."));
        for (var Q in z)
          if (r(z, Q)) {
            var Y = T(z, Q, B, H, j + "." + Q, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return b(I);
    }
    function L(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var I = 0; I < T.length; I++) {
        var V = T[I];
        if (typeof V != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(V) + " at index " + I + "."
          ), l;
      }
      function q(B, H, j, z, W) {
        for (var Q = [], Y = 0; Y < T.length; Y++) {
          var A = T[Y], E = A(B, H, j, z, W, n);
          if (E == null)
            return null;
          E.data && r(E.data, "expectedType") && Q.push(E.data.expectedType);
        }
        var ee = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new g("Invalid " + z + " `" + W + "` supplied to " + ("`" + j + "`" + ee + "."));
      }
      return b(q);
    }
    function M() {
      function T(I, V, q, B, H) {
        return Z(I[V]) ? null : new g("Invalid " + B + " `" + H + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return b(T);
    }
    function D(T, I, V, q, B) {
      return new g(
        (T || "React class") + ": " + I + " type `" + V + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function K(T) {
      function I(V, q, B, H, j) {
        var z = V[q], W = re(z);
        if (W !== "object")
          return new g("Invalid " + H + " `" + j + "` of type `" + W + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var Q in T) {
          var Y = T[Q];
          if (typeof Y != "function")
            return D(B, H, j, Q, te(Y));
          var A = Y(z, Q, B, H, j + "." + Q, n);
          if (A)
            return A;
        }
        return null;
      }
      return b(I);
    }
    function F(T) {
      function I(V, q, B, H, j) {
        var z = V[q], W = re(z);
        if (W !== "object")
          return new g("Invalid " + H + " `" + j + "` of type `" + W + "` " + ("supplied to `" + B + "`, expected `object`."));
        var Q = t({}, V[q], T);
        for (var Y in Q) {
          var A = T[Y];
          if (r(T, Y) && typeof A != "function")
            return D(B, H, j, Y, te(A));
          if (!A)
            return new g(
              "Invalid " + H + " `" + j + "` key `" + Y + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(V[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var E = A(z, Y, B, H, j + "." + Y, n);
          if (E)
            return E;
        }
        return null;
      }
      return b(I);
    }
    function Z(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(Z);
          if (T === null || s(T))
            return !0;
          var I = d(T);
          if (I) {
            var V = I.call(T), q;
            if (I !== T.entries) {
              for (; !(q = V.next()).done; )
                if (!Z(q.value))
                  return !1;
            } else
              for (; !(q = V.next()).done; ) {
                var B = q.value;
                if (B && !Z(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(T, I) {
      return T === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function re(T) {
      var I = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : ne(I, T) ? "symbol" : I;
    }
    function te(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var I = re(T);
      if (I === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function ye(T) {
      var I = te(T);
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
    function fe(T) {
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
    function r(l, s, u, f, c, d) {
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
}, Be = (e, t) => Ee.toArray(e).filter((n) => t.indexOf(Pi(n)) !== -1), $i = ({ children: e, allowMultiple: t, defaultIndex: n }) => {
  const [r, a] = J(), i = (s) => {
    t ? r.includes(s) ? a(r.filter((u) => u !== s)) : a([...r, s]) : a(s);
  };
  U(() => (a(t ? n || [] : n ?? null), () => {
    a(null);
  }), [t, n]);
  const l = Ee.map(e, (s, u) => Ze(s) ? xe(s, { ...s.props, id: u, isOpen: r, onToggle: i }) : null);
  return /* @__PURE__ */ p("div", { children: Be(l, ["AccordionItem"]) });
};
$i.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
const ve = (e) => (t, n, r) => {
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
}, Zo = ({ children: e, id: t, onExpanded: n, isExpanded: r, expanded: a, addClass: i, icon: l, __TYPE: s, ...u }) => /* @__PURE__ */ N(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: `${jt["c-accordion__button"]} u-flex ${i ?? ""} ${r && a && a}`,
    onClick: n,
    "data-type": s,
    ...u,
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
  __TYPE: ve("AccordionButton")
};
Zo.defaultProps = {
  __TYPE: "AccordionButton"
};
const Ko = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a }) => {
  const i = () => r(t), l = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, s = Ee.map(e, (u) => Ze(u) ? u.props.__TYPE === "AccordionButton" ? xe(u, { ...u.props, id: t, onExpanded: i, isExpanded: l() }) : xe(u, { ...u.props, id: t, isExpanded: l() }) : null);
  return /* @__PURE__ */ p("div", { className: `${jt["c-accordion__item"]} ${a ?? ""}`, children: Be(s, ["AccordionButton", "AccordionPanel"]) });
};
Ko.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  __TYPE: ve("AccordionItem")
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
  __TYPE: ve("AccordionPanel")
};
Xo.defaultProps = {
  __TYPE: "AccordionPanel"
};
const $n = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Di = /\w+\.svg/gi, we = ({ children: e, path: t, size: n, addClass: r }) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", { children: "Doesn't exist" });
  if (Ee.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const a = t && t.match(Di).toString().replace(/.svg/gi, ""), i = `${t}#${a}`;
  return e ? xe(e, {
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
we.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  path: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  addClass: o.string,
  __TYPE: ve("Icon")
};
we.defaultProps = {
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
    disabled: u,
    onClick: f,
    children: c,
    addClass: d,
    ...v
  } = e;
  return /* @__PURE__ */ N(
    "button",
    {
      ref: t,
      className: `${d ?? ""} ${tn["c-button"]} ${tn[`c-${l}`]} ${tn[`c-${r}`]} ${a && a.path && s ? tn["c-round"] : ""} 
        ${a && a.position === "right" ? tn["c-reverse"] : ""}`,
      disabled: u,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...v,
      children: [
        c,
        a && /* @__PURE__ */ p(we, { path: a.path, size: a.size }),
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
  const [s, u] = J(!1), f = G(), c = Object.freeze({
    BUTTON: "Button",
    BAR: "Bar"
  }), d = (v) => {
    f.current && (f.current.paused ? f.current.play() : f.current.pause(), u(!s));
  };
  return a === c.BAR ? /* @__PURE__ */ p("audio", { preload: "metadata", controls: !0, className: `${Mt["c-audio"]} ${r && Mt[`c-audio--${r}`]} ${i ?? ""}`, "data-a11y": n, ...l, children: /* @__PURE__ */ p("source", { src: e, type: t }) }) : /* @__PURE__ */ N(pt, { children: [
    /* @__PURE__ */ p("audio", { ref: f, src: e, type: t, onEnded: () => u(!s), className: Mt["c-audio--hidden"] }),
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
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: l, isDisabled: s, defaultChecked: u, onChange: f, __TYPE: c, inherit: d, ...v }, m) => {
    const y = ue(() => e || ct(`ui-${n}`), [e, n]), g = Object.freeze({
      right: /* @__PURE__ */ p("path", { id: "done_all", d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z" }),
      wrong: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }),
      normal: n === "checkbox" ? /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }) : null
    }), b = ({ target: w }) => {
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
        htmlFor: y,
        className: `${Lt["c-input"]} u-flex ${l ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": c,
        ...!d && { ...v },
        children: [
          /* @__PURE__ */ N("div", { className: Lt["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: y,
                ref: m,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: Lt["c-input__check"],
                onChange: b,
                ...s && { disabled: !0 },
                ...d && { ...v },
                ...u && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${Lt["c-input__icon"]} ${u ? Lt["c-input-defaultChecked"] : ""} `, children: g[a] && /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p(
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
  __TYPE: ve("CheckBox")
};
const xs = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = J([]), l = G(), s = (d) => {
    l.current = d || "";
  }, u = (d) => l.current === "radio" ? [{ ...d }] : a.filter((m) => m.id === d.id).length ? [...a.filter((m) => m.id !== d.id)] : [...a, { ...d }], f = (d) => {
    const v = u(d);
    n && n(v), i(v);
  }, c = Ee.map(t, (d) => Ze(d) ? d.props.__TYPE === "CheckBox" ? (d.props.type && s(d.props.type), xe(d, { ...d.props, onChange: f })) : d : null);
  return /* @__PURE__ */ N("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Be(c, ["CheckBox"]) })
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
const vt = Yn ? zo : U;
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
  return U(() => {
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
      for (const [u, f] of s) {
        const c = i[u];
        c != null && (i[u] = c + e * f);
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
  const [e, t] = J("");
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
  U(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Fs() {
  const [e] = J(() => /* @__PURE__ */ new Set()), t = De((r) => (e.add(r), () => e.delete(r)), [e]);
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
  } = Ls(), s = zn("DndLiveRegion"), [u, f] = J(!1);
  if (U(() => {
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
  }), [i, t])), !u)
    return null;
  const c = Le.createElement(Le.Fragment, null, Le.createElement(Is, {
    id: r,
    value: a.draggable
  }), Le.createElement(Ms, {
    id: s,
    announcement: l
  }));
  return n ? Uo(c, n) : c;
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
    } = l, u = n.get(s);
    if (u) {
      const f = yo(u), c = a.reduce((v, m, y) => v + zs(f[y], m), 0), d = Number((c / 4).toFixed(4));
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
    const u = t.width * t.height, f = e.width * e.height, c = l * s, d = c / (u + f - c);
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
      const u = Gs(s, t);
      u > 0 && a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: u
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
  } = r, u = e.left - l - (1 - a) * parseFloat(n), f = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), c = a ? e.width / a : e.width, d = i ? e.height / i : e.height;
  return {
    width: c,
    height: d,
    top: f,
    right: u + c,
    bottom: f + d,
    left: u
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
      transform: c,
      transformOrigin: d
    } = f(e);
    c && (n = el(n, c, d));
  }
  const {
    top: r,
    left: a,
    width: i,
    height: l,
    bottom: s,
    right: u
  } = n;
  return {
    top: r,
    left: a,
    width: i,
    height: l,
    bottom: s,
    right: u
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
    bottom: u
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = al);
  const {
    isTop: f,
    isBottom: c,
    isLeft: d,
    isRight: v
  } = da(e), m = {
    x: 0,
    y: 0
  }, y = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + g.height ? (m.y = Ce.Backward, y.y = r * Math.abs((t.top + g.height - i) / g.height)) : !c && u >= t.bottom - g.height && (m.y = Ce.Forward, y.y = r * Math.abs((t.bottom - g.height - u) / g.height)), !v && s >= t.right - g.width ? (m.x = Ce.Forward, y.x = r * Math.abs((t.right - g.width - s) / g.width)) : !d && l <= t.left + g.width && (m.x = Ce.Backward, y.x = r * Math.abs((t.left + g.width - l) / g.width)), {
    direction: m,
    speed: y
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
      for (const u of l)
        Object.defineProperty(this, u, {
          get: () => {
            const f = s(r), c = a[i] - f;
            return this.rect[u] + c;
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
var ie;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(ie || (ie = {}));
const pa = {
  start: [ie.Space, ie.Enter],
  cancel: [ie.Esc],
  end: [ie.Space, ie.Enter]
}, vl = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ie.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ie.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ie.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ie.Up:
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
        code: u
      } = t;
      if (i.end.includes(u)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(u)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: f
      } = r.current, c = f ? {
        x: f.left,
        y: f.top
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const d = l(t, {
        active: n,
        context: r.current,
        currentCoordinates: c
      });
      if (d) {
        const v = Fn(d, c), m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: y
        } = r.current;
        for (const g of y) {
          const b = t.code, {
            isTop: w,
            isRight: S,
            isLeft: C,
            isBottom: P,
            maxScroll: _,
            minScroll: O
          } = da(g), x = sl(g), $ = {
            x: Math.min(b === ie.Right ? x.right - x.width / 2 : x.right, Math.max(b === ie.Right ? x.left : x.left + x.width / 2, d.x)),
            y: Math.min(b === ie.Down ? x.bottom - x.height / 2 : x.bottom, Math.max(b === ie.Down ? x.top : x.top + x.height / 2, d.y))
          }, L = b === ie.Right && !S || b === ie.Left && !C, M = b === ie.Down && !P || b === ie.Up && !w;
          if (L && $.x !== d.x) {
            const D = g.scrollLeft + v.x, K = b === ie.Right && D <= _.x || b === ie.Left && D >= O.x;
            if (K && !v.y) {
              g.scrollTo({
                left: D,
                behavior: s
              });
              return;
            }
            K ? m.x = g.scrollLeft - D : m.x = b === ie.Right ? g.scrollLeft - _.x : g.scrollLeft - O.x, m.x && g.scrollBy({
              left: -m.x,
              behavior: s
            });
            break;
          } else if (M && $.y !== d.y) {
            const D = g.scrollTop + v.y, K = b === ie.Down && D <= _.y || b === ie.Up && D >= O.y;
            if (K && !v.x) {
              g.scrollTo({
                top: D,
                behavior: s
              });
              return;
            }
            K ? m.y = g.scrollTop - D : m.y = b === ie.Down ? g.scrollTop - _.y : g.scrollTop - O.y, m.y && g.scrollBy({
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
    const u = (n = Tr(t)) != null ? n : rt, f = Fn(a, u);
    if (!r && s) {
      if (Eo(s))
        return fr(f, s.tolerance) ? this.handleCancel() : void 0;
      if (xo(s))
        return s.tolerance != null && fr(f, s.tolerance) ? this.handleCancel() : fr(f, s.distance) ? this.handleStart() : void 0;
    }
    t.cancelable && t.preventDefault(), l(u);
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
    t.code === ie.Esc && this.handleCancel();
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
    pointerCoordinates: u,
    scrollableAncestors: f,
    scrollableAncestorRects: c,
    delta: d,
    threshold: v
  } = e;
  const m = yl({
    delta: d,
    disabled: !i
  }), [y, g] = Ps(), b = G({
    x: 0,
    y: 0
  }), w = G({
    x: 0,
    y: 0
  }), S = ue(() => {
    switch (n) {
      case sn.Pointer:
        return u ? {
          top: u.y,
          bottom: u.y,
          left: u.x,
          right: u.x
        } : null;
      case sn.DraggableRect:
        return a;
    }
  }, [n, a, u]), C = G(null), P = De(() => {
    const O = C.current;
    if (!O)
      return;
    const x = b.current.x * w.current.x, $ = b.current.y * w.current.y;
    O.scrollBy(x, $);
  }, []), _ = ue(() => s === Vn.TreeOrder ? [...f].reverse() : f, [s, f]);
  U(
    () => {
      if (!i || !f.length || !S) {
        g();
        return;
      }
      for (const O of _) {
        if ((r == null ? void 0 : r(O)) === !1)
          continue;
        const x = f.indexOf(O), $ = c[x];
        if (!$)
          continue;
        const {
          direction: L,
          speed: M
        } = il(O, $, S, t, v);
        for (const D of ["x", "y"])
          m[D][L[D]] || (M[D] = 0, L[D] = 0);
        if (M.x > 0 || M.y > 0) {
          g(), C.current = O, y(P, l), b.current = M, w.current = L;
          return;
        }
      }
      b.current = {
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
      JSON.stringify(S),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m),
      y,
      f,
      _,
      c,
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
  const [i, l] = J(null), {
    frequency: s,
    measure: u,
    strategy: f
  } = a, c = G(e), d = b(), v = pn(d), m = De(function(w) {
    w === void 0 && (w = []), !v.current && l((S) => S === null ? w : S.concat(w.filter((C) => !S.includes(C))));
  }, [v]), y = G(null), g = _n((w) => {
    if (d && !n)
      return To;
    if (!w || w === To || c.current !== e || i != null) {
      const S = /* @__PURE__ */ new Map();
      for (let C of e) {
        if (!C)
          continue;
        if (i && i.length > 0 && !i.includes(C.id) && C.rect.current) {
          S.set(C.id, C.rect.current);
          continue;
        }
        const P = C.node.current, _ = P ? new Fr(u(P), P) : null;
        C.rect.current = _, _ && S.set(C.id, _);
      }
      return S;
    }
    return w;
  }, [e, i, n, d, u]);
  return U(() => {
    c.current = e;
  }, [e]), U(
    () => {
      d || m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), U(
    () => {
      i && i.length > 0 && l(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), U(
    () => {
      d || typeof s != "number" || y.current !== null || (y.current = setTimeout(() => {
        m(), y.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, d, m, ...r]
  ), {
    droppableRects: g,
    measureDroppableContainers: m,
    measuringScheduled: i != null
  };
  function b() {
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
  return U(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
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
  return U(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Ol(e) {
  return new Fr(wn(e), e);
}
function Oo(e, t, n) {
  t === void 0 && (t = Ol);
  const [r, a] = Ar(s, null), i = Tl({
    callback(u) {
      if (e)
        for (const f of u) {
          const {
            type: c,
            target: d
          } = f;
          if (c === "childList" && d instanceof HTMLElement && d.contains(e)) {
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
  function s(u) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var f;
      return (f = u ?? n) != null ? f : null;
    }
    const c = t(e);
    return JSON.stringify(u) === JSON.stringify(c) ? u : c;
  }
}
function Sl(e) {
  const t = ga(e);
  return ia(e, t);
}
const So = [];
function Cl(e) {
  const t = G(e), n = _n((r) => e ? r && r !== So && e && t.current && e.parentNode === t.current.parentNode ? r : jr(e) : So, [e]);
  return U(() => {
    t.current = e;
  }, [e]), n;
}
function Rl(e) {
  const [t, n] = J(null), r = G(e), a = De((i) => {
    const l = dr(i.target);
    l && n((s) => s ? (s.set(l, Sr(l)), new Map(s)) : null);
  }, []);
  return U(() => {
    const i = r.current;
    if (e !== i) {
      l(i);
      const s = e.map((u) => {
        const f = dr(u);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, Sr(f)]) : null;
      }).filter((u) => u != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      l(e), l(i);
    };
    function l(s) {
      s.forEach((u) => {
        const f = dr(u);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), ue(() => e.length ? t ? Array.from(t.values()).reduce((i, l) => Bt(i, l), rt) : fa(e) : rt, [e, t]);
}
function Co(e, t) {
  t === void 0 && (t = []);
  const n = G(null);
  return U(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), U(() => {
    const r = e !== rt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Fn(e, n.current) : rt;
}
function Pl(e) {
  U(
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
    e.length ? e.forEach((u) => l == null ? void 0 : l.observe(u)) : (l == null || l.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((u) => ua(u) ? r : new Fr(t(u), u)) : vr;
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
  const [n, r] = J(null), a = De((f) => {
    for (const {
      target: c
    } of f)
      if (yn(c)) {
        r((d) => {
          const v = t(c);
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
    const c = Al(f);
    i == null || i.disconnect(), c && (i == null || i.observe(c)), r(c ? t(c) : null);
  }, [t, i]), [s, u] = jn(l);
  return ue(() => ({
    nodeRef: s,
    rect: n,
    setRef: u
  }), [n, s, u]);
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
  return U(() => {
    if (!t && !r && i && l != null) {
      if (!ra(i) || document.activeElement === i.target)
        return;
      const s = a.get(l);
      if (!s)
        return;
      const {
        activatorNode: u,
        node: f
      } = s;
      if (!u.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const c of [u.current, f.current]) {
          if (!c)
            continue;
          const d = As(c);
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
    const c = n(f), d = ia(c, r);
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
    autoScroll: u = !0,
    children: f,
    sensors: c = Il,
    collisionDetection: d = Zs,
    measuring: v,
    modifiers: m,
    ...y
  } = t;
  const g = Ar(Bl, void 0, Fl), [b, w] = g, [S, C] = Fs(), [P, _] = J(bt.Uninitialized), O = P === bt.Initialized, {
    draggable: {
      active: x,
      nodes: $,
      translate: L
    },
    droppable: {
      containers: M
    }
  } = b, D = x ? $.get(x) : null, K = G({
    initial: null,
    translated: null
  }), F = ue(() => {
    var he;
    return x != null ? {
      id: x,
      // It's possible for the active node to unmount while dragging
      data: (he = D == null ? void 0 : D.data) != null ? he : kl,
      rect: K
    } : null;
  }, [x, D]), Z = G(null), [ne, re] = J(null), [te, ye] = J(null), fe = pn(y, Object.values(y)), T = zn("DndDescribedBy", l), I = ue(() => M.getEnabled(), [M]), V = Yl(v), {
    droppableRects: q,
    measureDroppableContainers: B,
    measuringScheduled: H
  } = xl(I, {
    dragging: O,
    dependencies: [L.x, L.y],
    config: V.droppable
  }), j = _l($, x), z = ue(() => te ? Tr(te) : null, [te]), W = Cn(), Q = El(j, V.draggable.measure);
  zl({
    activeNode: x ? $.get(x) : null,
    config: W.layoutShiftCompensation,
    initialRect: Q,
    measure: V.draggable.measure
  });
  const Y = Oo(j, V.draggable.measure, Q), A = Oo(j ? j.parentElement : null), E = G({
    activatorEvent: null,
    active: null,
    activeNode: j,
    collisionRect: null,
    collisions: null,
    droppableRects: q,
    draggableNodes: $,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: M,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ee = M.getNodeFor((n = E.current.over) == null ? void 0 : n.id), me = Nl({
    measure: V.dragOverlay.measure
  }), Oe = (r = me.nodeRef.current) != null ? r : j, $e = O ? (a = me.rect) != null ? a : Y : null, at = Boolean(me.nodeRef.current && me.rect), ut = Sl(at ? null : Y), it = ba(Oe ? Ve(Oe) : null), Se = Cl(O ? ee ?? j : null), Je = Dl(Se), Qe = ql(m, {
    transform: {
      x: L.x - ut.x,
      y: L.y - ut.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: te,
    active: F,
    activeNodeRect: Y,
    containerNodeRect: A,
    draggingNodeRect: $e,
    over: E.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Se,
    scrollableAncestorRects: Je,
    windowRect: it
  }), wt = z ? Bt(z, L) : null, ht = Rl(Se), xt = Co(ht), Et = Co(ht, [Y]), Ae = Bt(Qe, xt), et = $e ? Js($e, Qe) : null, mt = F && et ? d({
    active: F,
    collisionRect: et,
    droppableRects: q,
    droppableContainers: I,
    pointerCoordinates: wt
  }) : null, Kt = aa(mt, "id"), [Ye, Tn] = J(null), Qn = at ? Qe : Bt(Qe, Et), er = Ks(Qn, (i = Ye == null ? void 0 : Ye.rect) != null ? i : null, Y), On = De(
    (he, Re) => {
      let {
        sensor: Pe,
        options: tt
      } = Re;
      if (Z.current == null)
        return;
      const Ie = $.get(Z.current);
      if (!Ie)
        return;
      const ke = he.nativeEvent, ze = new Pe({
        active: Z.current,
        activeNode: Ie,
        event: ke,
        options: tt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: E,
        onStart(Me) {
          const Tt = Z.current;
          if (Tt == null)
            return;
          const Ot = $.get(Tt);
          if (!Ot)
            return;
          const {
            onDragStart: St
          } = fe.current, It = {
            active: {
              id: Tt,
              data: Ot.data,
              rect: K
            }
          };
          Jt(() => {
            St == null || St(It), _(bt.Initializing), w({
              type: Te.DragStart,
              initialCoordinates: Me,
              active: Tt
            }), S({
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
        re(ze), ye(he.nativeEvent);
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
            } = fe.current;
            Ct = {
              activatorEvent: ke,
              active: Ot,
              collisions: St,
              delta: Rn,
              over: It
            }, Me === Te.DragEnd && typeof Rt == "function" && await Promise.resolve(Rt(Ct)) && (Me = Te.DragCancel);
          }
          Z.current = null, Jt(() => {
            w({
              type: Me
            }), _(bt.Uninitialized), Tn(null), re(null), ye(null);
            const Rt = Me === Te.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ct) {
              const h = fe.current[Rt];
              h == null || h(Ct), S({
                type: Rt,
                event: Ct
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [$]
  ), tr = De((he, Re) => (Pe, tt) => {
    const Ie = Pe.nativeEvent, ke = $.get(tt);
    if (
      // Another sensor is already instantiating
      Z.current !== null || // No active draggable
      !ke || // Event has already been captured
      Ie.dndKit || Ie.defaultPrevented
    )
      return;
    const ze = {
      active: ke
    };
    he(Pe, Re.options, ze) === !0 && (Ie.dndKit = {
      capturedBy: Re.sensor
    }, Z.current = tt, On(Pe, Re));
  }, [$, On]), Sn = wl(c, tr);
  Pl(c), vt(() => {
    Y && P === bt.Initializing && _(bt.Initialized);
  }, [Y, P]), U(
    () => {
      const {
        onDragMove: he
      } = fe.current, {
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
        he == null || he(ke), S({
          type: "onDragMove",
          event: ke
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ae.x, Ae.y]
  ), U(
    () => {
      const {
        active: he,
        activatorEvent: Re,
        collisions: Pe,
        droppableContainers: tt,
        scrollAdjustedTranslate: Ie
      } = E.current;
      if (!he || Z.current == null || !Re || !Ie)
        return;
      const {
        onDragOver: ke
      } = fe.current, ze = tt.get(Kt), dt = ze && ze.rect.current ? {
        id: ze.id,
        rect: ze.rect.current,
        data: ze.data,
        disabled: ze.disabled
      } : null, Me = {
        active: he,
        activatorEvent: Re,
        collisions: Pe,
        delta: {
          x: Ie.x,
          y: Ie.y
        },
        over: dt
      };
      Jt(() => {
        Tn(dt), ke == null || ke(Me), S({
          type: "onDragOver",
          event: Me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Kt]
  ), vt(() => {
    E.current = {
      activatorEvent: te,
      active: F,
      activeNode: j,
      collisionRect: et,
      collisions: mt,
      droppableRects: q,
      draggableNodes: $,
      draggingNode: Oe,
      draggingNodeRect: $e,
      droppableContainers: M,
      over: Ye,
      scrollableAncestors: Se,
      scrollAdjustedTranslate: Ae
    }, K.current = {
      initial: $e,
      translated: et
    };
  }, [F, j, mt, et, $, Oe, $e, q, M, Ye, Se, Ae]), gl({
    ...W,
    delta: L,
    draggingRect: et,
    pointerCoordinates: wt,
    scrollableAncestors: Se,
    scrollableAncestorRects: Je
  });
  const nr = ue(() => ({
    active: F,
    activeNode: j,
    activeNodeRect: Y,
    activatorEvent: te,
    collisions: mt,
    containerNodeRect: A,
    dragOverlay: me,
    draggableNodes: $,
    droppableContainers: M,
    droppableRects: q,
    over: Ye,
    measureDroppableContainers: B,
    scrollableAncestors: Se,
    scrollableAncestorRects: Je,
    measuringConfiguration: V,
    measuringScheduled: H,
    windowRect: it
  }), [F, j, Y, te, mt, A, me, $, M, q, Ye, B, Se, Je, V, H, it]), Xt = ue(() => ({
    activatorEvent: te,
    activators: Sn,
    active: F,
    activeNodeRect: Y,
    ariaDescribedById: {
      draggable: T
    },
    dispatch: w,
    draggableNodes: $,
    over: Ye,
    measureDroppableContainers: B
  }), [te, Sn, F, Y, w, T, $, Ye, B]);
  return Le.createElement(oa.Provider, {
    value: C
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
    const he = (ne == null ? void 0 : ne.autoScrollEnabled) === !1, Re = typeof u == "object" ? u.enabled === !1 : u === !1, Pe = O && !he && !Re;
    return typeof u == "object" ? {
      ...u,
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
    active: u,
    activeNodeRect: f,
    ariaDescribedById: c,
    draggableNodes: d,
    over: v
  } = be(Un), {
    role: m = Ro,
    roleDescription: y = "draggable",
    tabIndex: g = 0
  } = a ?? {}, b = (u == null ? void 0 : u.id) === t, w = be(b ? ya : Ul), [S, C] = jn(), [P, _] = jn(), O = $l(l, t), x = pn(n);
  vt(
    () => (d.set(t, {
      id: t,
      key: i,
      node: S,
      activatorNode: P,
      data: x
    }), () => {
      const L = d.get(t);
      L && L.key === i && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const $ = ue(() => ({
    role: m,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": b && m === Ro ? !0 : void 0,
    "aria-roledescription": y,
    "aria-describedby": c.draggable
  }), [r, m, g, b, y, c.draggable]);
  return {
    active: u,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: $,
    isDragging: b,
    listeners: r ? void 0 : O,
    node: S,
    over: v,
    setNodeRef: C,
    setActivatorNodeRef: _,
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
    over: u,
    measureDroppableContainers: f
  } = be(Un), c = G({
    disabled: n
  }), d = G(!1), v = G(null), m = G(null), {
    disabled: y,
    updateMeasurementsFor: g,
    timeout: b
  } = {
    ...Kl,
    ...a
  }, w = pn(g ?? r), S = De(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        f(Array.isArray(w.current) ? w.current : [w.current]), m.current = null;
      }, b);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [b]
  ), C = Wn({
    callback: S,
    disabled: y || !l
  }), P = De(($, L) => {
    C && (L && (C.unobserve(L), d.current = !1), $ && C.observe($));
  }, [C]), [_, O] = jn(P), x = pn(t);
  return U(() => {
    !C || !_.current || (C.disconnect(), d.current = !1, C.observe(_.current));
  }, [_, C]), vt(
    () => (s({
      type: Te.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: _,
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
  ), U(() => {
    n !== c.current.disabled && (s({
      type: Te.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), c.current.disabled = n);
  }, [r, i, n, s]), {
    active: l,
    rect: v,
    isOver: (u == null ? void 0 : u.id) === r,
    node: _,
    over: u,
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
}, Ql = [ie.Down, ie.Right, ie.Up, ie.Left], ec = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (Ql.includes(e.code)) {
    e.preventDefault();
    const l = 20;
    if (!t || !a)
      return;
    const s = [];
    r.getEnabled().forEach((c) => {
      if (!c || c != null && c.disabled)
        return;
      const d = n.get(c.id);
      if (d)
        switch (e.code) {
          case ie.Down:
            a.top < d.top && s.push(c);
            break;
          case ie.Up:
            a.top > d.top + l && s.push(c);
            break;
          case ie.Left:
            a.left >= d.left + d.width && s.push(c);
            break;
          case ie.Right:
            a.left + a.width <= d.left && s.push(c);
            break;
        }
    });
    const u = Hs({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = aa(u, "id");
    if (f != null) {
      const c = r.get(f), d = c == null ? void 0 : c.node.current, v = c == null ? void 0 : c.rect.current;
      if (d && v)
        return ((i = c.data.current) == null ? void 0 : i.type) === "container" ? {
          x: v.left,
          y: v.top + l
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, wa = Ke(), on = (e, t) => Ee.map(e, (n) => {
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
  onDragMove: u,
  defaultState: f,
  onState: c,
  id: d
}) => {
  const [v, m] = J([]), [y, g] = J(null), [b, w] = J(() => Object.keys(f).length > 0 ? f : C()), S = G(!1);
  function C() {
    return [...on(e, "droppable"), ...on(e, "general-draggable")].reduce(
      (M, D) => ({
        ...M,
        [D.props.id]: D.props.children ? [...on(D.props.children, "draggable").map((K) => K.props.id)] : []
      }),
      {}
    );
  }
  const P = Object.freeze({
    restrictToVerticalAxis: Jl,
    restrictToHorizontalAxis: Xl
  }), _ = Ys(
    ur(ha),
    ur(ma),
    ur(Br, {
      coordinateGetter: ec
    })
  ), O = (M, D) => {
    if (Object.keys(b).pop() === M.id)
      return;
    let F = [...v.filter((Z) => Z !== D), M.data.current.validate.includes(D) ? D : ""].filter((Z) => !!Z);
    if (!t) {
      const Z = b[M.id][0];
      F = Z ? F.filter((ne) => ne !== Z) : F;
    }
    n && n({ validate: [...F], active: !0 }), m(F);
  }, x = (M) => M in b ? M : Object.keys(b).find((D) => b[D].includes(M)), $ = ({ active: M, over: D }) => {
    if (!D)
      return;
    g(null);
    const K = Object.keys(b).pop(), F = x(D.id), Z = x(M.id);
    Z !== F && (K !== D.id && O(D, M.id), w((ne) => {
      S.current = !0;
      const re = ne[Z].filter((fe) => fe !== M.id), te = [...ne[F]];
      return t ? {
        ...ne,
        [Z]: re,
        [F]: [...te, M.id]
      } : {
        ...{
          ...ne,
          [Z]: re,
          [F]: F === K ? [...te, M.id] : [M.id]
        },
        ...F !== K && ne[F].length > 0 && { [K]: [...ne[K].filter((fe) => fe !== ne[Z][0]), ...ne[F]] }
      };
    }));
  }, L = (M) => Ee.map(M, (D) => {
    if (!D.props)
      return D;
    if (D.props.__TYPE !== "draggable")
      return D.props.id in b && b[D.props.id].length > 0 ? xe(D, { ...D.props }, [
        ...b[D.props.id].map((K) => on(e, "draggable").filter((F) => F.props.id === K)).flat()
      ]) : D.props.children ? xe(D, { ...D.props, children: L(D.props.children) }) : D;
  });
  return U(() => {
    a && (w(() => C()), n && n({ validate: [], active: !1 }));
  }, [a]), U(() => {
    Object.keys(f).length !== 0 && w(f);
  }, [f]), U(() => {
    c && S.current && (S.current = !1, c({ state: { key: d, newObjectState: structuredClone(b) } }));
  }, [c, b]), /* @__PURE__ */ p(wa.Provider, { value: { listId: v, propValidate: i, validate: r, isDragging: y }, children: /* @__PURE__ */ p(
    Wl,
    {
      sensors: _,
      accessibility: { announcements: s },
      onDragStart: ({ active: M }) => g(M.id),
      onDragEnd: $,
      ...!!u && { onDragMove: u },
      onDragCancel: () => g(null),
      ...l && { modifiers: [P[l]] },
      children: L(e)
    }
  ) });
};
xa.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: tc,
  defaultState: {}
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
  onState: o.func,
  id: o.string
};
const nc = "_pop_1elvh_1", Vt = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: nc
}, Ea = ({ children: e, id: t, addClass: n, dragging: r, label: a, attribute: i, disabledDefaultAttributes: l, element: s, __TYPE: u, ...f }) => {
  const c = s || "div", { listId: d, propValidate: v, validate: m, isDragging: y } = be(wa), { attributes: g, listeners: b, setNodeRef: w, transform: S } = Gl({
    id: t,
    disabled: m,
    data: {
      label: a
    },
    attributes: i
  });
  return /* @__PURE__ */ p(
    c,
    {
      id: t,
      ref: w,
      "data-type": u,
      className: `${Vt["c-draggable"]} ${y === t ? `${r} ${Vt["is-draggable--active-animation"]}` : ""} ${n ?? ""}`,
      style: { transform: Or.Translate.toString(S) },
      ...m && { [v]: !!d.includes(t) },
      ...!l && { ...g },
      ...b,
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
  __TYPE: ve("draggable")
};
const Ta = ({ children: e, id: t, validate: n, addClass: r, over: a, label: i, element: l, __TYPE: s, ...u }) => {
  const f = l || "div", { isOver: c, setNodeRef: d } = _a({
    id: t,
    data: {
      validate: n,
      label: i,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(f, { ref: d, "data-type": s, className: `${Vt["c-droppable"]} ${c && a && a} ${r ?? ""}`, ...u, children: e });
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
  __TYPE: ve("droppable")
};
const Oa = ({ children: e, addClass: t, over: n, id: r, label: a, element: i, __TYPE: l, ...s }) => {
  const u = i || "div", { isOver: f, setNodeRef: c } = _a({
    id: r,
    data: {
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(u, { id: r, ref: c, "data-type": l, className: `${Vt["c-droppable"]}  ${f && n && n} ${t ?? ""}`, ...s, children: e });
};
Oa.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  over: o.string,
  id: o.string.isRequired,
  label: o.string.isRequired,
  element: o.string,
  __TYPE: ve("general-draggable")
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
  const [s, u] = J(!1), f = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, c = (v) => u(v), d = s ? f : `${e}`;
  return /* @__PURE__ */ N("figure", { className: `${Po["c-image"]} ${a ?? ""}`, ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } }, children: [
    /* @__PURE__ */ p("img", { src: d, onError: c, alt: t, ...l }),
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
}, Ca = lt(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: u, isReadOnly: f, onValue: c }, d) => {
  const v = ue(() => e || ct("c-input-"), [e]), m = ({ target: y }) => {
    c && c({ id: v, value: y.value });
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
        required: u,
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
  __TYPE: ve("Input")
};
const rc = ({ children: e, onAllValue: t }) => {
  const [n, r] = J([]), a = (s) => r([...n.filter((u) => u.id !== s.id), { ...s }]);
  U(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, u, f) => Ee.toArray(s).map((c) => c.props.__TYPE === u ? xe(c, { ...c.props, ...f }) : c);
  return Ee.map(e, (s) => {
    var u, f;
    return Ze(s) ? ((u = s == null ? void 0 : s.props) == null ? void 0 : u.__TYPE) === "InputStyle" ? xe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? xe(s, { ...s.props, onValue: a }) : s : null;
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
  __TYPE: ve("InputStyle")
};
Ra.defaultProps = {
  __TYPE: "InputStyle"
};
const Pa = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${hn["c-input__left-addon"]} ${t ?? ""}`, children: e });
Pa.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  __TYPE: ve("InputLeftAddon")
};
Pa.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const $a = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${hn["c-input__right-addon"]} ${t ?? ""}`, children: e });
$a.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  __TYPE: ve("InputRightAddon")
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
  const a = Ee.map(e, (i) => {
    var l;
    return ((l = i == null ? void 0 : i.props) == null ? void 0 : l.__TYPE) === "Icon" ? xe(i, { ...i.props, addClass: Aa["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
Na.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: ve("ListItem")
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
    function f(c, d) {
      mr(this, f), this._inertManager = d, this._rootElement = c, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
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
        l(d, function(b) {
          return v._visitNode(b);
        });
        var m = document.activeElement;
        if (!document.body.contains(d)) {
          for (var y = d, g = void 0; y; ) {
            if (y.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              g = /** @type {!ShadowRoot} */
              y;
              break;
            }
            y = y.parentNode;
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
          var y = (
            /** @type {!HTMLElement} */
            m.target
          );
          if (m.type === "childList")
            e.call(m.addedNodes).forEach(function(b) {
              this._makeSubtreeUnfocusable(b);
            }, this), e.call(m.removedNodes).forEach(function(b) {
              this._unmanageSubtree(b);
            }, this);
          else if (m.type === "attributes") {
            if (m.attributeName === "tabindex")
              this._manageNode(y);
            else if (y !== this._rootElement && m.attributeName === "inert" && y.hasAttribute("inert")) {
              this._adoptInertRoot(y);
              var g = this._inertManager.getInertRoot(y);
              this._managedNodes.forEach(function(b) {
                y.contains(b.node) && g._manageNode(b.node);
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
    function f(c, d) {
      mr(this, f), this._node = c, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([d]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
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
    function f(c) {
      if (mr(this, f), !c)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = c, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(c.head || c.body || c.documentElement), c.readyState === "loading" ? c.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return hr(f, [{
      key: "setInert",
      value: function(d, v) {
        if (v) {
          if (this._inertRoots.has(d))
            return;
          var m = new r(d, this);
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
        d.forEach(function(y) {
          switch (y.type) {
            case "childList":
              e.call(y.addedNodes).forEach(function(w) {
                if (w.nodeType === Node.ELEMENT_NODE) {
                  var S = e.call(w.querySelectorAll("[inert]"));
                  t.call(w, "[inert]") && S.unshift(w), S.forEach(function(C) {
                    this.setInert(C, !0);
                  }, m);
                }
              }, m);
              break;
            case "attributes":
              if (y.attributeName !== "inert")
                return;
              var g = (
                /** @type {!HTMLElement} */
                y.target
              ), b = g.hasAttribute("inert");
              m.setInert(g, b);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function l(f, c, d) {
    if (f.nodeType == Node.ELEMENT_NODE) {
      var v = (
        /** @type {!HTMLElement} */
        f
      );
      c && c(v);
      var m = (
        /** @type {!HTMLElement} */
        v.shadowRoot
      );
      if (m) {
        l(m, c);
        return;
      }
      if (v.localName == "content") {
        for (var y = (
          /** @type {!HTMLContentElement} */
          v
        ), g = y.getDistributedNodes ? y.getDistributedNodes() : [], b = 0; b < g.length; b++)
          l(g[b], c);
        return;
      }
      if (v.localName == "slot") {
        for (var w = (
          /** @type {!HTMLSlotElement} */
          v
        ), S = w.assignedNodes ? w.assignedNodes({ flatten: !0 }) : [], C = 0; C < S.length; C++)
          l(S[C], c);
        return;
      }
    }
    for (var P = f.firstChild; P != null; )
      l(P, c), P = P.nextSibling;
  }
  function s(f) {
    if (!f.querySelector("style#inert-style, link#inert-style")) {
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
`, f.appendChild(c);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var u = new i(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      /** @this {!HTMLElement} */
      get: function() {
        return this.hasAttribute("inert");
      },
      /** @this {!HTMLElement} */
      set: function(c) {
        u.setInert(this, c);
      }
    });
  }
})();
const Hn = Ke(), cc = Object.freeze({
  ESC: 27
}), Ia = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = G(), i = (f) => {
    const c = document.querySelector("#root");
    c.inert = f;
  }, l = (f) => {
    (f.keyCode || f.which) === cc.ESC && u();
  }, s = (f, c) => {
    a.current.classList.replace(f, c);
  }, u = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), n(!t), Object.keys(r).length !== 0 && r.current.focus();
    }, 500);
  };
  return U(() => (t && (i(!0), a.current && a.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(Hn.Provider, { value: { isOpen: t, onKeyDown: l, onCloseModal: u, refModal: a }, children: /* @__PURE__ */ p(Zt, { id: "js-modal", children: Be(e, ["ModalContent", "ModalOverlay"]) }) });
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
  const { isOpen: s, onKeyDown: u, onCloseModal: f, refModal: c } = be(Hn), d = (m) => {
    r && typeof r == "function" && r(m), f();
  };
  return /* @__PURE__ */ N(
    "div",
    {
      ref: c,
      role: "dialog",
      tabIndex: "-1",
      hidden: !s,
      "aria-label": e,
      "aria-modal": "true",
      "data-type": i,
      onKeyDown: (m) => {
        a && typeof a == "function" && a(m), u(m);
      },
      className: `${In["c-modal"]} animate__animated animate__fadeIn animate__faster u-px-3 u-py-3 class-video-interpreter-ui-modal ${t ?? ""}`,
      ...l,
      children: [
        /* @__PURE__ */ p("div", { className: `${In["c-modal-container"]}`, children: n }),
        /* @__PURE__ */ p(Dt, { addClass: In["c-close-button"], label: "Cerrar modal", hasAriaLabel: !0, onClick: d, children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }) }) }) })
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
  __TYPE: ve("ModalContent")
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
  __TYPE: ve("ModalOverlay")
};
Ma.defaultProps = {
  __TYPE: "ModalOverlay"
};
const uc = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = be(Hn), r = (a) => {
    t && t(a), n();
  };
  return xe(e, { ...e.props, onClick: r });
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
  const [u, f] = J(r || 0), c = () => {
    if (n && u > i)
      return f(i);
    f((y) => y + l);
  }, d = () => {
    if (n && u < a)
      return f(a);
    f((y) => y - l);
  }, v = (y) => f(y), m = (y) => n && u === y;
  return U(() => {
    s && s(u);
  }, [u, s]), /* @__PURE__ */ p(
    Gn.Provider,
    {
      value: {
        counter: u,
        min: a || Number.MIN_SAFE_INTEGER,
        max: i || Number.MAX_SAFE_INTEGER,
        validate: m,
        onChangeValue: v,
        onIncrementValue: c,
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
  const { counter: s, onChangeValue: u, onIncrementValue: f, onDecrementValue: c, min: d, max: v } = be(Gn), m = ue(() => e || ct("c-number-input-"), [e]), y = Object.freeze({
    UP: 38,
    DOWN: 40,
    END: 35,
    HOME: 36
  }), g = ({ target: w }) => {
    if (!isNaN(w.value) && w.value)
      return u(parseInt(w.value));
    u(0);
  }, b = (w) => {
    switch (w.keyCode || w.which) {
      case y.UP:
        f();
        break;
      case y.DOWN:
        c();
        break;
      case y.END:
        u(v);
        break;
      case y.HOME:
        u(d);
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
        onKeyDown: b,
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
  __TYPE: ve("NumberInputField")
};
const Fa = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${qt["c-number-input__stepper"]} ${t ?? ""}`, children: Be(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Fa.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: ve("NumberInputStepper")
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
      children: e || /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Ba.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: ve("NumberDecrementStepper"),
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
      children: e || /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
Va.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: ve("NumberIncrementStepper"),
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
    showFirstButton: u = !1,
    showLastButton: f = !1,
    siblingCount: c = 1,
    ...d
  } = e, [v, m] = J(r), y = (x, $) => {
    m($), s && s(x, $);
  }, g = (x, $) => {
    const L = $ - x + 1;
    return Array.from({ length: L }, (M, D) => x + D);
  }, b = g(1, Math.min(t, n)), w = g(Math.max(n - t + 1, t + 1), n), S = Math.max(
    Math.min(
      // Inicio natural
      v - c,
      // Limite inferior cuando la página es mayor
      n - t - c * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), C = Math.min(
    Math.max(
      // Final natural
      v + c,
      // Limite superior cuando la página es menor
      t + c * 2 + 2
    ),
    // Menor que el endPages
    w.length > 0 ? w[0] - 2 : n - 1
  ), P = [
    ...u ? ["first"] : [],
    ...l ? [] : ["previous"],
    ...b,
    // Comienza el ellipsis
    ...S > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...g(S, C),
    // Finaliza el ellipsis
    ...C < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...w,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], _ = (x) => {
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
      onClick: ($) => {
        y($, x);
      },
      type: "page",
      page: x,
      selected: x === v,
      disabled: a,
      "aria-current": x === v ? !0 : void 0
    } : {
      onClick: ($) => {
        y($, _(x));
      },
      type: x,
      page: _(x),
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
  ) : xe(
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
      f ? i ? /* @__PURE__ */ p(we, { path: f }, t) : /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: f }) }, t) : null
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
  const [r, a] = J(null), [i, l] = J([]), s = (c) => l((d) => [...d, c]), u = (c) => a(i[c]), f = (c) => r === c;
  return U(() => {
    i.length !== 0 && (t !== void 0 ? u(t - 1) : a(i[0]));
  }, [t, i]), /* @__PURE__ */ p(Zn.Provider, { value: { validation: f, onToggle: u, listId: i, currentSection: r, addNewIdToSection: s }, children: /* @__PURE__ */ p("div", { className: `${Ft["c-panel"]} ${n ?? ""} class-video-interpreter-ui-panel`, "data-value": r, children: e }) });
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
  const { validation: i, addNewIdToSection: l } = be(Zn), s = G(null), u = i(s.current);
  return U(() => {
    s.current || (s.current = parseInt(ct()), l(s.current));
  }, [s]), /* @__PURE__ */ N(
    "section",
    {
      ref: a,
      role: "tabpanel",
      hidden: !u,
      "data-type": n,
      "aria-hidden": !u,
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
  __TYPE: ve("Section")
};
Ya.defaultProps = {
  __TYPE: "Section"
};
const hc = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), mc = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${hc[e]} sección`, za = ({ renderItem: e, showPrevButton: t, showNextButton: n, icons: r, label: a, orientation: i, onValue: l, addClass: s, getItemAriaLabel: u }) => {
  const { validation: f, onToggle: c, listId: d, currentSection: v } = be(Zn), m = G([]), y = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), g = Object.freeze({
    previous: v - 1,
    next: v + 1
  }), b = {
    previous: (r == null ? void 0 : r.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (r == null ? void 0 : r.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" })
  }, w = [
    // Botón para navegar a la sección anterior.
    ...t ? ["previous"] : [],
    // Lista de todas la secciones.
    ...d || [],
    // Botón para navegar a la siguiente sección.
    ...n ? ["next"] : []
  ], S = (O) => !m.current.includes(O) && O ? m.current = [...m.current, O] : m.current, C = (O) => {
    const x = m.current[0], $ = m.current[m.current.length - 1];
    if ((O.keyCode || O.which) === y.LEFT)
      if (O.target === x)
        $.focus();
      else {
        const L = m.current.indexOf(O.target) - 1;
        m.current[L].focus();
      }
    else if ((O.keyCode || O.which) === y.RIGHT)
      if (O.target === $)
        x.focus();
      else {
        const L = m.current.indexOf(O.target) + 1;
        m.current[L].focus();
      }
  }, P = (O) => {
    c(d.findIndex((x) => x === O)), l !== void 0 && l(O, d.length);
  }, _ = w.map((O) => {
    let x = [...d];
    return x = x.pop(), typeof O == "number" ? {
      onClick: ($) => {
        P(O);
      },
      type: "section",
      section: O,
      selected: f(O),
      ref: S,
      onKeyDown: C
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
  return U(() => {
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
        children: e ? e(_) : _.map(({ section: O, type: x, selected: $, ...L }, M) => /* @__PURE__ */ p("li", { role: "presentation", className: Ft["c-navigation__item"], children: x === "section" ? /* @__PURE__ */ p(
          "button",
          {
            id: `navigation-section-tab-${O}`,
            role: "tab",
            tabIndex: `${$ ? 0 : -1}`,
            "aria-selected": $,
            className: Ft["c-navigation__section"],
            "aria-label": u(x, O, $),
            ...L
          }
        ) : /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            className: `${Ft["c-navigation__button"]}`,
            "aria-label": u(x, O, $),
            ...L,
            children: b[x] ? r ? /* @__PURE__ */ p(we, { path: b[x] }, x) : /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: b[x] }) }, x) : null
          }
        ) }, `navigation-section-item-${M}`))
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
  return Ee.map(e, (i) => xe(i, { ...i.props, onClick: a }));
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
  U(() => {
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
}, Wa = lt(({ children: e, id: t, placeholder: n, label: r, icon: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: u, onChoise: f, defaultValue: c }, d) => {
  const v = ue(() => t || ct("c-select-"), [t]), m = ({ target: y }) => {
    f && f({ id: v, value: y.value });
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
          defaultValue: c,
          className: Dn["c-select"],
          onChange: m,
          disabled: s,
          required: u,
          children: [
            /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
            Be(e, ["option", "optgroup"])
          ]
        }
      ),
      a ? /* @__PURE__ */ p(we, { path: a, addClass: Dn["c-select__icon"] }) : /* @__PURE__ */ p(we, { addClass: Dn["c-select__icon"], children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
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
  __TYPE: ve("Select")
};
const Sc = ({ children: e, onAllSelect: t }) => {
  const [n, r] = J([]), a = (l) => r([...n.filter((s) => s.id !== l.id), { ...l }]);
  return U(() => {
    t && t(n);
  }, [n, t]), Ee.map(e, (l) => {
    var s;
    return Ze(l) ? ((s = l == null ? void 0 : l.props) == null ? void 0 : s.__TYPE) === "Select" ? xe(l, { ...l.props, onChoise: a }) : l : null;
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
}), Ua = lt(({ id: e, name: t, size: n, value: r, label: a, addClass: i, isDisabled: l, defaultChecked: s, isLabelVisible: u, onChange: f }, c) => {
  const [d, v] = J(!1), m = ue(() => e || ct("c-input-"), [e]), y = ({ target: b }) => {
    if (v(b.checked), !!f) {
      if (b.checked) {
        f({ id: b.id, value: b.value });
        return;
      }
      f({ id: b.id, value: "" });
    }
  }, g = (b) => {
    ((b.keyCode || b.which) === $o.SPACE || (b.keyCode || b.which) === $o.ENTER) && v((w) => (f && f(w ? { id: m, value: "" } : { id: m, value: `${r}` }), !w));
  };
  return U(() => (s && v(!!s), () => {
    v(!1);
  }), [s]), /* @__PURE__ */ N("label", { htmlFor: m, className: `${gr["c-label"]} ${gr[`is-${n}`]}`, children: [
    /* @__PURE__ */ N("span", { className: `${!u && "u-sr-only"}`, children: [
      " ",
      a,
      " "
    ] }),
    /* @__PURE__ */ p(
      "input",
      {
        id: m,
        ref: c,
        role: "switch",
        type: "checkbox",
        name: t,
        value: r,
        checked: d,
        "aria-disabled": l,
        className: `${gr["c-switch"]} ${i ?? ""}`,
        onChange: y,
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
  const [a, i] = J(0), l = (u) => i(u), s = (u) => a === u;
  return U(() => {
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
}, Ha = ({ children: e, id: t, selected: n, addClass: r, icon: a, addNewRef: i, onNavigation: l, __TYPE: s, ...u }) => {
  const f = G(), { validation: c, onToggle: d } = be(Yr), v = c(t);
  return U(() => (f.current && i(f.current), () => {
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
      ...u,
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
  __TYPE: ve("Tab")
};
Ha.defaultProps = {
  __TYPE: "Tab"
};
const Ga = ({ children: e, addClass: t, label: n, orientation: r, __TYPE: a, ...i }) => {
  const l = G([]), s = (d) => l.current = [...l.current, d], u = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), f = (d) => {
    const v = l.current[0], m = l.current[l.current.length - 1];
    if ((d.keyCode || d.which) === u.LEFT)
      if (d.target === v)
        m.focus();
      else {
        const y = l.current.indexOf(d.target) - 1;
        l.current[y].focus();
      }
    else if ((d.keyCode || d.which) === u.RIGHT)
      if (d.target === m)
        v.focus();
      else {
        const y = l.current.indexOf(d.target) + 1;
        l.current[y].focus();
      }
  }, c = Ee.map(e, (d, v) => Ze(d) ? xe(d, { ...d.props, id: v, addNewRef: s, onNavigation: f }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      role: "tablist",
      "data-type": a,
      "aria-label": n,
      "aria-orientation": r,
      className: `${mn["c-tab__list"]} ${t ?? ""}`,
      ...i,
      children: Be(c, ["Tab"])
    }
  );
};
Ga.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  label: o.string,
  orientation: o.string,
  __TYPE: ve("TabList")
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
  __TYPE: ve("TabPanel")
};
Za.defaultProps = {
  __TYPE: "TabPanel"
};
const Ka = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = Ee.map(e, (i, l) => Ze(i) ? xe(i, { ...i.props, id: l }) : null);
  return /* @__PURE__ */ p("div", { className: `${mn["c-tab__panels"]} ${t ?? ""}`, "data-type": n, ...r, children: Be(a, ["TabPanel"]) });
};
Ka.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  __TYPE: ve("TabPanels")
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
  ({ id: e, value: t, resize: n, placeholder: r, label: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: u, onValue: f, ...c }, d) => {
    const v = ue(() => e || ct("c-input-"), [e]), m = ({ target: y }) => {
      f && f({ id: v, value: y.value });
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
          required: u,
          placeholder: r,
          autoComplete: "off",
          onChange: m,
          className: `${br["c-textarea"]} ${br[`c-textarea--${n}`]}`,
          ...c
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
  return U(() => {
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
      var a = t.elements[r], i = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = l.reduce(function(u, f) {
        return u[f] = "", u;
      }, {});
      !qe(a) || !st(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(u) {
        a.removeAttribute(u);
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
  var l = Nt(e) ? Xe(e) : window, s = l.visualViewport, u = !ei() && n, f = (r.left + (u && s ? s.offsetLeft : 0)) / a, c = (r.top + (u && s ? s.offsetTop : 0)) / i, d = r.width / a, v = r.height / i;
  return {
    width: d,
    height: v,
    top: c,
    right: f + d,
    bottom: c + v,
    left: f,
    x: f,
    y: c
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
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, l = n.modifiersData.popperOffsets, s = nt(n.placement), u = Ur(s), f = [Fe, Ge].indexOf(s) >= 0, c = f ? "height" : "width";
  if (!(!i || !l)) {
    var d = Uc(a.padding, n), v = Wr(i), m = u === "y" ? je : Fe, y = u === "y" ? He : Ge, g = n.rects.reference[c] + n.rects.reference[u] - l[u] - n.rects.popper[c], b = l[u] - n.rects.reference[u], w = En(i), S = w ? u === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, C = g / 2 - b / 2, P = d[m], _ = S - v[c] - d[y], O = S / 2 - v[c] / 2 + C, x = un(P, O, _), $ = u;
    n.modifiersData[r] = (t = {}, t[$] = x, t.centerOffset = x - O, t);
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
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, l = e.offsets, s = e.position, u = e.gpuAcceleration, f = e.adaptive, c = e.roundOffsets, d = e.isFixed, v = l.x, m = v === void 0 ? 0 : v, y = l.y, g = y === void 0 ? 0 : y, b = typeof c == "function" ? c({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = b.x, g = b.y;
  var w = l.hasOwnProperty("x"), S = l.hasOwnProperty("y"), C = Fe, P = je, _ = window;
  if (f) {
    var O = En(n), x = "clientHeight", $ = "clientWidth";
    if (O === Xe(n) && (O = _t(n), ot(O).position !== "static" && s === "absolute" && (x = "scrollHeight", $ = "scrollWidth")), O = O, a === je || (a === Fe || a === Ge) && i === gn) {
      P = He;
      var L = d && O === _ && _.visualViewport ? _.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[x]
      );
      g -= L - r.height, g *= u ? 1 : -1;
    }
    if (a === Fe || (a === je || a === He) && i === gn) {
      C = Ge;
      var M = d && O === _ && _.visualViewport ? _.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[$]
      );
      m -= M - r.width, m *= u ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, f && Kc), K = c === !0 ? Xc({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  if (m = K.x, g = K.y, u) {
    var F;
    return Object.assign({}, D, (F = {}, F[P] = S ? "0" : "", F[C] = w ? "0" : "", F.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", F));
  }
  return Object.assign({}, D, (t = {}, t[P] = S ? g + "px" : "", t[C] = w ? m + "px" : "", t.transform = "", t));
}
function Jc(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, l = i === void 0 ? !0 : i, s = n.roundOffsets, u = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = ot(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return f.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: nt(t.placement),
    variation: Ut(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ko(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ko(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
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
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, l = r.resize, s = l === void 0 ? !0 : l, u = Xe(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(c) {
    c.addEventListener("scroll", n.update, An);
  }), s && u.addEventListener("resize", n.update, An), function() {
    i && f.forEach(function(c) {
      c.removeEventListener("scroll", n.update, An);
    }), s && u.removeEventListener("resize", n.update, An);
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
  var n = Xe(e), r = _t(e), a = n.visualViewport, i = r.clientWidth, l = r.clientHeight, s = 0, u = 0;
  if (a) {
    i = a.width, l = a.height;
    var f = ei();
    (f || !f && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s + Gr(e),
    y: u
  };
}
function au(e) {
  var t, n = _t(e), r = Hr(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = At(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = At(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Gr(e), u = -r.scrollTop;
  return ot(a || n).direction === "rtl" && (s += At(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: u
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
  var a = t === "clippingParents" ? su(e) : [].concat(t), i = [].concat(a, [n]), l = i[0], s = i.reduce(function(u, f) {
    var c = Lo(e, f, r);
    return u.top = At(c.top, u.top), u.right = qn(c.right, u.right), u.bottom = qn(c.bottom, u.bottom), u.left = At(c.left, u.left), u;
  }, Lo(e, l, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ii(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? nt(r) : null, i = r ? Ut(r) : null, l = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
    case je:
      u = {
        x: l,
        y: t.y - n.height
      };
      break;
    case He:
      u = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Ge:
      u = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Fe:
      u = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var f = a ? Ur(a) : null;
  if (f != null) {
    var c = f === "y" ? "height" : "width";
    switch (i) {
      case Yt:
        u[f] = u[f] - (t[c] / 2 - n[c] / 2);
        break;
      case gn:
        u[f] = u[f] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return u;
}
function bn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, l = i === void 0 ? e.strategy : i, s = n.boundary, u = s === void 0 ? Pc : s, f = n.rootBoundary, c = f === void 0 ? Ja : f, d = n.elementContext, v = d === void 0 ? rn : d, m = n.altBoundary, y = m === void 0 ? !1 : m, g = n.padding, b = g === void 0 ? 0 : g, w = ri(typeof b != "number" ? b : oi(b, xn)), S = v === rn ? $c : rn, C = e.rects.popper, P = e.elements[y ? S : v], _ = lu(Nt(P) ? P : P.contextElement || _t(e.elements.popper), u, c, l), O = Wt(e.elements.reference), x = ii({
    reference: O,
    element: C,
    strategy: "absolute",
    placement: a
  }), $ = Dr(Object.assign({}, C, x)), L = v === rn ? $ : O, M = {
    top: _.top - L.top + w.top,
    bottom: L.bottom - _.bottom + w.bottom,
    left: _.left - L.left + w.left,
    right: L.right - _.right + w.right
  }, D = e.modifiersData.offset;
  if (v === rn && D) {
    var K = D[a];
    Object.keys(M).forEach(function(F) {
      var Z = [Ge, He].indexOf(F) >= 0 ? 1 : -1, ne = [je, He].indexOf(F) >= 0 ? "y" : "x";
      M[F] += K[ne] * Z;
    });
  }
  return M;
}
function cu(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, l = n.padding, s = n.flipVariations, u = n.allowedAutoPlacements, f = u === void 0 ? Qa : u, c = Ut(r), d = c ? s ? No : No.filter(function(y) {
    return Ut(y) === c;
  }) : xn, v = d.filter(function(y) {
    return f.indexOf(y) >= 0;
  });
  v.length === 0 && (v = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = v.reduce(function(y, g) {
    return y[g] = bn(e, {
      placement: g,
      boundary: a,
      rootBoundary: i,
      padding: l
    })[nt(g)], y;
  }, {});
  return Object.keys(m).sort(function(y, g) {
    return m[y] - m[g];
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
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !0 : l, u = n.fallbackPlacements, f = n.padding, c = n.boundary, d = n.rootBoundary, v = n.altBoundary, m = n.flipVariations, y = m === void 0 ? !0 : m, g = n.allowedAutoPlacements, b = t.options.placement, w = nt(b), S = w === b, C = u || (S || !y ? [kn(b)] : uu(b)), P = [b].concat(C).reduce(function(B, H) {
      return B.concat(nt(H) === Kn ? cu(t, {
        placement: H,
        boundary: c,
        rootBoundary: d,
        padding: f,
        flipVariations: y,
        allowedAutoPlacements: g
      }) : H);
    }, []), _ = t.rects.reference, O = t.rects.popper, x = /* @__PURE__ */ new Map(), $ = !0, L = P[0], M = 0; M < P.length; M++) {
      var D = P[M], K = nt(D), F = Ut(D) === Yt, Z = [je, He].indexOf(K) >= 0, ne = Z ? "width" : "height", re = bn(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: v,
        padding: f
      }), te = Z ? F ? Ge : Fe : F ? He : je;
      _[ne] > O[ne] && (te = kn(te));
      var ye = kn(te), fe = [];
      if (i && fe.push(re[K] <= 0), s && fe.push(re[te] <= 0, re[ye] <= 0), fe.every(function(B) {
        return B;
      })) {
        L = D, $ = !1;
        break;
      }
      x.set(D, fe);
    }
    if ($)
      for (var T = y ? 3 : 1, I = function(H) {
        var j = P.find(function(z) {
          var W = x.get(z);
          if (W)
            return W.slice(0, H).every(function(Q) {
              return Q;
            });
        });
        if (j)
          return L = j, "break";
      }, V = T; V > 0; V--) {
        var q = I(V);
        if (q === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[r]._skip = !0, t.placement = L, t.reset = !0);
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
  }), u = jo(l, r), f = jo(s, a, i), c = Fo(u), d = Fo(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
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
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, l = Qa.reduce(function(c, d) {
    return c[d] = hu(d, t.rects, i), c;
  }, {}), s = l[t.placement], u = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = l;
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
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !1 : l, u = n.boundary, f = n.rootBoundary, c = n.altBoundary, d = n.padding, v = n.tether, m = v === void 0 ? !0 : v, y = n.tetherOffset, g = y === void 0 ? 0 : y, b = bn(t, {
    boundary: u,
    rootBoundary: f,
    padding: d,
    altBoundary: c
  }), w = nt(t.placement), S = Ut(t.placement), C = !S, P = Ur(w), _ = _u(P), O = t.modifiersData.popperOffsets, x = t.rects.reference, $ = t.rects.popper, L = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, M = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (O) {
    if (i) {
      var F, Z = P === "y" ? je : Fe, ne = P === "y" ? He : Ge, re = P === "y" ? "height" : "width", te = O[P], ye = te + b[Z], fe = te - b[ne], T = m ? -$[re] / 2 : 0, I = S === Yt ? x[re] : $[re], V = S === Yt ? -$[re] : -x[re], q = t.elements.arrow, B = m && q ? Wr(q) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ni(), j = H[Z], z = H[ne], W = un(0, x[re], B[re]), Q = C ? x[re] / 2 - T - W - j - M.mainAxis : I - W - j - M.mainAxis, Y = C ? -x[re] / 2 + T + W + z + M.mainAxis : V + W + z + M.mainAxis, A = t.elements.arrow && En(t.elements.arrow), E = A ? P === "y" ? A.clientTop || 0 : A.clientLeft || 0 : 0, ee = (F = D == null ? void 0 : D[P]) != null ? F : 0, me = te + Q - ee - E, Oe = te + Y - ee, $e = un(m ? qn(ye, me) : ye, te, m ? At(fe, Oe) : fe);
      O[P] = $e, K[P] = $e - te;
    }
    if (s) {
      var at, ut = P === "x" ? je : Fe, it = P === "x" ? He : Ge, Se = O[_], Je = _ === "y" ? "height" : "width", Qe = Se + b[ut], wt = Se - b[it], ht = [je, Fe].indexOf(w) !== -1, xt = (at = D == null ? void 0 : D[_]) != null ? at : 0, Et = ht ? Qe : Se - x[Je] - $[Je] - xt + M.altAxis, Ae = ht ? Se + x[Je] + $[Je] - xt - M.altAxis : wt, et = m && ht ? Wc(Et, Se, Ae) : un(m ? Et : Qe, Se, m ? Ae : wt);
      O[_] = et, K[_] = et - Se;
    }
    t.modifiersData[r] = K;
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
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((st(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Zr(i)) && (s = Tu(t)), qe(t) ? (u = Wt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : i && (u.x = Gr(i))), {
    x: l.left + s.scrollLeft - u.x,
    y: l.top + s.scrollTop - u.y,
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
        var u = t.get(s);
        u && a(u);
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
  return function(s, u, f) {
    f === void 0 && (f = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qo, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: u
      },
      attributes: {},
      styles: {}
    }, d = [], v = !1, m = {
      state: c,
      setOptions: function(w) {
        var S = typeof w == "function" ? w(c.options) : w;
        g(), c.options = Object.assign({}, i, c.options, S), c.scrollParents = {
          reference: Nt(s) ? dn(s) : s.contextElement ? dn(s.contextElement) : [],
          popper: dn(u)
        };
        var C = Ru(Nu([].concat(r, c.options.modifiers)));
        if (c.orderedModifiers = C.filter(function(D) {
          return D.enabled;
        }), process.env.NODE_ENV !== "production") {
          var P = Au([].concat(C, c.options.modifiers), function(D) {
            var K = D.name;
            return K;
          });
          if (Du(P), nt(c.options.placement) === Kn) {
            var _ = c.orderedModifiers.find(function(D) {
              var K = D.name;
              return K === "flip";
            });
            _ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var O = ot(u), x = O.marginTop, $ = O.marginRight, L = O.marginBottom, M = O.marginLeft;
          [x, $, L, M].some(function(D) {
            return parseFloat(D);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return y(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = c.elements, S = w.reference, C = w.popper;
          if (!Yo(S, C)) {
            process.env.NODE_ENV !== "production" && console.error(Vo);
            return;
          }
          c.rects = {
            reference: Su(S, En(C), c.options.strategy === "fixed"),
            popper: Wr(C)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(D) {
            return c.modifiersData[D.name] = Object.assign({}, D.data);
          });
          for (var P = 0, _ = 0; _ < c.orderedModifiers.length; _++) {
            if (process.env.NODE_ENV !== "production" && (P += 1, P > 100)) {
              console.error(Iu);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, _ = -1;
              continue;
            }
            var O = c.orderedModifiers[_], x = O.fn, $ = O.options, L = $ === void 0 ? {} : $, M = O.name;
            typeof x == "function" && (c = x({
              state: c,
              options: L,
              name: M,
              instance: m
            }) || c);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Pu(function() {
        return new Promise(function(b) {
          m.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        g(), v = !0;
      }
    };
    if (!Yo(s, u))
      return process.env.NODE_ENV !== "production" && console.error(Vo), m;
    m.setOptions(f).then(function(b) {
      !v && f.onFirstUpdate && f.onFirstUpdate(b);
    });
    function y() {
      c.orderedModifiers.forEach(function(b) {
        var w = b.name, S = b.options, C = S === void 0 ? {} : S, P = b.effect;
        if (typeof P == "function") {
          var _ = P({
            state: c,
            name: w,
            instance: m,
            options: C
          }), O = function() {
          };
          d.push(_ || O);
        }
      });
    }
    function g() {
      d.forEach(function(b) {
        return b();
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
  }), s = l[0], u = l[1], f = $t.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(m) {
        var y = m.state, g = Object.keys(y.elements);
        mi.flushSync(function() {
          u({
            styles: Do(g.map(function(b) {
              return [b, y.styles[b] || {}];
            })),
            attributes: Do(g.map(function(b) {
              return [b, y.attributes[b]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), c = $t.useMemo(function() {
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
    d.current && d.current.setOptions(c);
  }, [c]), Ao(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Lu, m = v(t, n, c);
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
  isVisible: u,
  onClick: f
}) => {
  const [c, d] = J(!1), v = G(null), m = G(null), y = ue(() => t || ct("c-Toggletip-"), [t]), g = (_) => d(!1), b = (_) => {
    d(!c), c && document.activeElement === v.current && !u && setTimeout(() => {
      d((O) => !O);
    }, 100), f && f(_);
  }, w = (_) => {
    (_.keyCode | _.which) === zu.ESC && c && d(!c);
  }, S = Ee.map(e, (_) => Ze(_) ? xe(_, {
    ..._.props,
    "aria-describedby": t,
    ref: v,
    onClick: b,
    "data-open": c,
    ...u ? {} : { onBlur: g, onKeyDown: w }
  }) : null), { styles: C, attributes: P } = Jn(
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
        { name: "eventListeners", enabled: c }
      ]
    }
  );
  return !n || Ee.count(e) > 1 || s ? /* @__PURE__ */ p(pt, { children: e }) : /* @__PURE__ */ N(pt, { children: [
    S,
    /* @__PURE__ */ p(Zt, { id: "js-toggletip-portal", children: /* @__PURE__ */ N(
      "div",
      {
        id: y,
        ref: m,
        role: "status",
        className: `${yr["c-toggletip"]} ${c && yr["c-toggletip--active"]} ${a ?? ""}`,
        style: C.popper,
        ...P.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: yr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: C.arrow
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
  const [u, f] = J(!1), c = G(null), d = G(null), v = G(), m = ue(() => t || ct("c-tooltip-"), [t]), y = (x) => {
    u || f(!u);
  }, g = (x) => f(!1), b = (x) => {
    (!u || document.activeElement !== c.current) && f(!u);
  }, w = () => {
    window.clearTimeout(v.current);
  }, S = (x) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, C = (x) => {
    (x.keyCode | x.which) === Wu.ESC && u && f(!u);
  }, P = Ee.map(e, (x) => Ze(x) ? xe(x, {
    ...x.props,
    "aria-describedby": t,
    ref: c,
    onFocus: y,
    onBlur: g,
    onMouseEnter: b,
    onMouseLeave: S,
    onKeyDown: C
  }) : null), { styles: _, attributes: O } = Jn(c.current, d.current, {
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
  });
  return !n || Ee.count(e) > 1 || s ? /* @__PURE__ */ p(pt, { children: e }) : /* @__PURE__ */ N(pt, { children: [
    P,
    /* @__PURE__ */ p(Zt, { id: "js-tooltip-portal", children: /* @__PURE__ */ N(
      "div",
      {
        id: m,
        ref: d,
        role: "tooltip",
        "data-open": u,
        onMouseEnter: w,
        onMouseLeave: S,
        className: `${_r["c-tooltip"]} ${u && _r["c-tooltip--active"]} ${a ?? ""}`,
        style: _.popper,
        ...O.popper,
        children: [
          n,
          i && /* @__PURE__ */ p("div", { className: _r["c-tooltip__arrow"], "data-popper-arrow": !0, style: _.arrow })
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
  const [s, u] = J(null), f = [...e.reduce((g, b, w) => [...g, { id: w + 1, ...b }], [])], c = (g) => f.filter((b) => b.id === g).reduce((b, w) => ({ ...b, ...w }), {}), d = (g) => {
    const b = document.querySelector("#root");
    b.inert = g;
  }, v = () => {
    u((g) => g < f.length ? g + 1 : g);
  }, m = () => {
    u((g) => g > 0 + 1 ? g - 1 : g);
  }, y = () => {
    u(null), n(!t), d(!1), r && r.current.focus();
  };
  return U(() => {
    t && (u(f.shift().id), d(!0));
  }, [t]), /* @__PURE__ */ p(
    Kr.Provider,
    {
      value: {
        isOpen: t,
        lastId: f.length,
        ...c(s),
        methods: {
          onNext: v,
          onPrev: m,
          onClose: y
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
  const { isOpen: r, lastId: a, methods: i, id: l, target: s, content: u, placement: f, distance: c, elementClass: d } = be(Kr), v = G(), { onClose: m, onPrev: y, onNext: g } = i, { styles: b, attributes: w } = Jn(document.querySelector(s), v.current, {
    placement: f,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, c || 8]
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
  }), S = () => Ze(u) ? u : hi("p", { className: yt["tour-description"] }, [u]), C = () => {
    v.current.style.setProperty("--speed-movement", "0.8s"), g();
  };
  return /* @__PURE__ */ N(pt, { children: [
    /* @__PURE__ */ p("div", { className: `${yt["c-layout"]}` }),
    /* @__PURE__ */ N(
      "div",
      {
        id: `unique-id-tour-element-${l}`,
        ref: v,
        style: b.popper,
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
          S(),
          /* @__PURE__ */ N("div", { className: yt["c-tour-button-container"], children: [
            !t && /* @__PURE__ */ p(Dt, { hasAriaLabel: !0, label: "Salir", onClick: m, icon: { name: "close", size: "big" } }),
            !n && /* @__PURE__ */ p(Dt, { disabled: l === 1, hasAriaLabel: !0, label: "Anterior", onClick: y, icon: { name: "navigate_before", size: "big" } }),
            /* @__PURE__ */ p(
              Dt,
              {
                disabled: l === a,
                hasAriaLabel: !0,
                label: "Siguiente",
                onClick: C,
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
  const { isOpen: e, id: t, target: n, helpLayerClass: r } = be(Kr), [a, i] = J({}), l = () => {
    const { x: s, y: u, width: f, height: c } = document.querySelector(n).getBoundingClientRect();
    i({
      width: `${f}px`,
      height: `${c}px`,
      top: `${u}px`,
      left: `${s}px`
    });
  };
  return U(() => (n && l(), () => {
    i({});
  }), [n]), U(() => {
    if (!e || !n)
      return;
    const s = (u) => {
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
}, Hu = "_active_r3225_90", Gu = "_iconPulse_r3225_1", pe = {
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
  const [s, u] = J({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, c] = J({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [d, v] = J({
    state: !1,
    label: "Reproducir video"
  }), [m, y] = J({
    state: !0,
    label: "Volumen"
  }), [g, b] = J(100), [w, S] = J({
    state: !1,
    label: "Ver en pantalla completa"
  }), [C, P] = J(!1), [_, O] = J(100), x = G(null), $ = G(null), L = G(null), M = G(null), D = G(null), K = G(null), F = G(null), Z = G(null), [ne, re] = J(!1), te = (A) => {
    A.classList.add(`${pe.active}`), setTimeout(() => {
      A.classList.remove(`${pe.active}`);
    }, 650);
  };
  function ye() {
    const A = $.current;
    d.state ? (A.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (A.play(), v({
      state: !0,
      label: "Pausar video"
    })), te(K.current);
  }
  function fe() {
    const A = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, E = x.current;
    A ? (S({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (S({
      state: !0,
      label: "Salir de pantalla completa"
    }), E.requestFullscreen ? E.requestFullscreen() : E.mozRequestFullScreen ? E.mozRequestFullScreen() : E.webkitRequestFullScreen ? E.webkitRequestFullScreen() : E.msRequestFullscreen && E.msRequestFullscreen());
  }
  function T(A) {
    const E = parseInt(A, 10), ee = E >= 3600 ? Math.floor(E / 3600) : 0, me = Math.floor((E - ee * 3600) / 60), Oe = E - ee * 3600 - me * 60, $e = B(q(ee)), at = B(q(me)), ut = B(q(Oe));
    return {
      hours: $e,
      minutes: at,
      seconds: ut
    };
  }
  function I(A) {
    const E = V(A.duration), ee = V(A.currentTime);
    c({
      totalSeconds: A.currentTime,
      hours: parseInt(T(A.currentTime).hours),
      minutes: parseInt(T(A.currentTime).minutes),
      seconds: parseInt(T(A.currentTime).seconds),
      string: ee
    }), u({
      totalSeconds: Math.floor(A.duration),
      hours: parseInt(T(A.duration).hours),
      minutes: parseInt(T(A.duration).minutes),
      seconds: parseInt(T(A.duration).seconds),
      string: E
    });
  }
  function V(A) {
    return parseInt(A, 10) <= 3600 ? `${T(A).minutes}:${T(A).seconds}` : `${T(A).hours}:${T(A).minutes}:${T(A).seconds}`;
  }
  function q(A) {
    return A < 10 ? A = "0" + A : A;
  }
  function B(A) {
    return isNaN(A) ? "00" : A;
  }
  function H(A) {
    const E = M.current, ee = $.current, Oe = A.nativeEvent.offsetX / E.offsetWidth * ee.duration;
    ee.currentTime = Oe;
  }
  function j(A) {
    const E = $.current, ee = A.target.value, me = ee / 100;
    O(ee), b(ee), E.volume = me, m.state || y({
      state: !0,
      label: "Volumen"
    });
  }
  const z = () => {
    if (m.state) {
      y({
        state: !1,
        label: "Mutear video"
      });
      const A = $.current, E = 0, ee = E;
      O(E), A.volume = ee;
    } else {
      y({
        state: !0,
        label: "Volumen"
      });
      const A = $.current, E = g, ee = E / 100;
      O(E), A.volume = ee;
    }
  }, W = function(A) {
    (A.keyCode || A.which) === 32 && ye();
  }, Q = function(A) {
    const E = Math.floor(M.current.getAttribute("aria-valuenow"));
    if (document.activeElement === D.current)
      return null;
    if ((A.keyCode || A.which) === 37) {
      const ee = E - 5;
      ee >= 0 ? $.current.currentTime = ee : $.current.currentTime = 0, te(Z.current);
    }
    if ((A.keyCode || A.which) === 39) {
      const ee = E + 5;
      ee >= $.current.duration ? $.current.currentTime = $.current.duration : $.current.currentTime = ee, te(F.current);
    }
  }, Y = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return U(() => {
    const A = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(A, "caption") && re(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(A, "volume") && O(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), U(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: ne, volume: _ }));
  }, [ne, _]), U(() => (L.current ? L.current.addEventListener("error", () => {
    P(!0);
  }) : P(!0), e.caption && P(!1), () => {
    L.current && L.current.removeEventListener("error", () => {
      P(!0);
    });
  }), [e.caption]), /* @__PURE__ */ N("figure", { className: `${pe["c-vid"]} ${a}`, style: { maxWidth: `${t}px` }, onKeyDown: (A) => Q(A), ...l, children: [
    /* @__PURE__ */ N("div", { className: `${pe["c-vid__container"]} ${a}`, ref: x, children: [
      /* @__PURE__ */ N("div", { className: pe["c-vid__wrapper"], children: [
        /* @__PURE__ */ N(
          "video",
          {
            ref: $,
            onTimeUpdate: (A) => I(A.target),
            onLoadedData: (A) => I(A.target),
            onClick: ye,
            className: `${pe["c-vid__video"]} ${ne ? "" : pe["no-captions"]}`,
            ...i && { poster: i },
            children: [
              /* @__PURE__ */ p("source", { src: e.video }),
              e.caption ? /* @__PURE__ */ p("track", { ref: L, src: e.caption, label: "Subtítulos en español", kind: "subtitles", srcLang: "es", default: !0 }) : ""
            ]
          }
        ),
        /* @__PURE__ */ N("div", { className: pe["c-vid__icon-container"], children: [
          /* @__PURE__ */ p("div", { ref: Z, className: pe["c-vid__icon"], children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: K, className: pe["c-vid__icon"], children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: F, className: pe["c-vid__icon"], children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { className: pe["progress-container"], children: /* @__PURE__ */ N(
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
          className: pe["c-vid__progress-bg"],
          onClick: H,
          ref: M,
          children: [
            /* @__PURE__ */ p(
              "div",
              {
                className: pe["c-vid__progress-bar"],
                style: {
                  transform: `scaleX(calc(${f.totalSeconds} / ${s.totalSeconds}))`
                }
              }
            ),
            /* @__PURE__ */ p(
              "div",
              {
                className: pe["progress-sphere"],
                style: {
                  left: `min(calc((${f.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
                }
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ N("div", { className: pe["c-vid__controls"], children: [
        /* @__PURE__ */ p(
          "button",
          {
            className: `${pe["c-vid__button"]} tour`,
            "aria-label": d.label,
            onClick: ye,
            "data-description": "Este botón reproduce el video",
            children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            className: `${pe["c-vid__button"]} tour`,
            "aria-label": m.label,
            "data-description": "Este botón controla el volumen",
            onClick: z,
            children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: m.state ? /* @__PURE__ */ p("path", { id: "volume_on", d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z" }) : /* @__PURE__ */ p("path", { id: "volume_off", d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z" }) }) })
          }
        ),
        /* @__PURE__ */ N("label", { className: pe["c-vid__volume"], htmlFor: "volumeControl", children: [
          /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: pe["c-vid__volume-item"],
              ref: D,
              id: "volumeControl",
              type: "range",
              min: "0",
              max: "100",
              step: "5",
              value: _,
              onChange: j,
              "aria-valuetext": `${_}%`
            }
          )
        ] }),
        /* @__PURE__ */ N("p", { className: pe["c-vid__time"], "aria-hidden": "true", children: [
          /* @__PURE__ */ p("span", { children: f.string }),
          "/",
          /* @__PURE__ */ p("span", { children: s.string })
        ] }),
        /* @__PURE__ */ p(
          "button",
          {
            disabled: C,
            "aria-pressed": C ? void 0 : ne,
            onClick: () => re(!ne),
            "aria-label": "Subtítulos",
            className: `${pe["c-vid__button"]} ${pe["c-vid__subtitles"]}`,
            children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: C ? /* @__PURE__ */ p("path", { id: "closed_caption_disabled", d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z" }) : /* @__PURE__ */ p("path", { id: "closed_caption", d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z" }) }) })
          }
        ),
        /* @__PURE__ */ p("button", { className: pe["c-vid__button"], "aria-label": w.label, onClick: fe, children: /* @__PURE__ */ p(we, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: w.state ? /* @__PURE__ */ p("path", { id: "fullscreen_exit", d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z" }) : /* @__PURE__ */ p("path", { id: "fullscreen", d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z" }) }) }) })
      ] })
    ] }),
    n && /* @__PURE__ */ N("figcaption", { className: pe["c-vid__caption"], children: [
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
  const [n, r] = J(!1), a = G(), i = () => r(!n), l = (s) => {
    a.current || (a.current = s);
  };
  return U(() => {
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
  if (Ee.count(e) > 1)
    return null;
  const a = (l) => {
    n(), t && t(l);
  }, i = (l) => Ze(l) ? xe(l, {
    ...l.props,
    ref: r,
    onClick: a
  }) : null;
  return Ee.map(e, i);
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
}), pi = ({ id: e, children: t, addClass: n, hasArrow: r, isDisabled: a, distance: i, placement: l }) => {
  const { isOpen: s, refButton: u } = be(Xr), f = G(), c = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', d = (y) => {
    const g = f.current.querySelectorAll(c), b = u.current, w = g[0], S = g[g.length - 1];
    if ((y.keyCode || y.which) === xr.TAB && document.activeElement === S)
      return b.focus(), y.preventDefault();
    y.shiftKey && (y.keyCode || y.which) === xr.TAB && document.activeElement === w && (b.focus(), y.preventDefault()), (y.keyCode || y.which) === xr.ESC && b.focus();
  }, { styles: v, attributes: m } = Jn(u.current, f.current, {
    placement: l,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, i || 8]
        }
      },
      {
        name: "flip",
        options: {
          padding: 10
        }
      },
      { name: "eventListeners", enabled: s }
    ]
  });
  return U(() => {
    s && f.current.focus();
  }, [s]), a ? /* @__PURE__ */ p(pt, { children: t }) : /* @__PURE__ */ p(Zt, { id: "js-popover-modal-portal", children: /* @__PURE__ */ N(
    "div",
    {
      id: e,
      ref: f,
      role: "status",
      tabIndex: -1,
      className: `${wr["c-popover-modal"]} ${s && wr["c-popover-modal--active"]} ${n ?? ""}`,
      style: v.popper,
      onKeyDown: d,
      "data-hidden": !s,
      ...!s && { hidden: !0 },
      ...m.popper,
      children: [
        t,
        r && /* @__PURE__ */ p("div", { className: wr["c-popover-modal__arrow"], "data-popper-arrow": !0, style: v.arrow })
      ]
    }
  ) });
};
pi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  id: o.string,
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
  const [n, r] = J(() => {
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
  const [r, a] = J(n), i = e.map((s) => window.matchMedia(s)), l = () => {
    const s = i.findIndex((u) => u.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return U(() => {
    a(l);
    const s = (u) => a(l);
    return i.forEach((u) => u.addEventListener("change", s)), () => {
      i.forEach((u) => u.removeEventListener("change", s));
    };
  }, []), r;
}, nd = () => {
  const [e, t] = Ku("dark-mode-enabled"), n = Xu(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return U(() => {
    t(n);
  }, [n]), U(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, Ju = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), rd = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || Ju, [a, i] = J(!1), [l, s] = J(null);
  return U(() => {
    if (!l) {
      i(!1);
      return;
    }
    const u = new IntersectionObserver(
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
    return u.observe(l), () => {
      u.unobserve(l);
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
  we as Icon,
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
