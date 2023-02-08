import * as $t from "react";
import Le, { Children as xe, useState as K, useEffect as H, isValidElement as Ze, cloneElement as we, forwardRef as lt, useRef as U, useMemo as ue, useLayoutEffect as zo, useCallback as De, createContext as Ke, memo as Wo, useReducer as Ar, useContext as be, createElement as hi } from "react";
import * as mi from "react-dom";
import { unstable_batchedUpdates as Xt, createPortal as Uo } from "react-dom";
var Pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fn = {}, gi = {
  get exports() {
    return fn;
  },
  set exports(e) {
    fn = e;
  }
}, Jt = {};
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
    return Jt;
  Qr = 1;
  var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, c, f) {
    var u, d = {}, v = null, h = null;
    f !== void 0 && (v = "" + f), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c)
      r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps)
      for (u in c = s.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: s, key: v, ref: h, props: d, _owner: a.current };
  }
  return Jt.Fragment = n, Jt.jsx = l, Jt.jsxs = l, Jt;
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
var eo;
function yi() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, g = "@@iterator";
    function _(m) {
      if (m === null || typeof m != "object")
        return null;
      var R = b && m[b] || m[g];
      return typeof R == "function" ? R : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(m) {
      {
        for (var R = arguments.length, M = new Array(R > 1 ? R - 1 : 0), G = 1; G < R; G++)
          M[G - 1] = arguments[G];
        C("error", m, M);
      }
    }
    function C(m, R, M) {
      {
        var G = x.ReactDebugCurrentFrame, ie = G.getStackAddendum();
        ie !== "" && (R += "%s", M = M.concat([ie]));
        var de = M.map(function(re) {
          return String(re);
        });
        de.unshift("Warning: " + R), Function.prototype.apply.call(console[m], console, de);
      }
    }
    var $ = !1, y = !1, S = !1, w = !1, E = !1, A;
    A = Symbol.for("react.module.reference");
    function L(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === i || E || m === a || m === f || m === u || w || m === h || $ || y || S || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === d || m.$$typeof === l || m.$$typeof === s || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === A || m.getModuleId !== void 0));
    }
    function N(m, R, M) {
      var G = m.displayName;
      if (G)
        return G;
      var ie = R.displayName || R.name || "";
      return ie !== "" ? M + "(" + ie + ")" : M;
    }
    function Q(m) {
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
        case u:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case s:
            var R = m;
            return Q(R) + ".Consumer";
          case l:
            var M = m;
            return Q(M._context) + ".Provider";
          case c:
            return N(m, m.render, "ForwardRef");
          case d:
            var G = m.displayName || null;
            return G !== null ? G : Z(m.type) || "Memo";
          case v: {
            var ie = m, de = ie._payload, re = ie._init;
            try {
              return Z(re(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, se = 0, ae, ee, Ee, he, O, k, B;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function j() {
      {
        if (se === 0) {
          ae = console.log, ee = console.info, Ee = console.warn, he = console.error, O = console.group, k = console.groupCollapsed, B = console.groupEnd;
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
        se++;
      }
    }
    function W() {
      {
        if (se--, se === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, m, {
              value: ae
            }),
            info: ne({}, m, {
              value: ee
            }),
            warn: ne({}, m, {
              value: Ee
            }),
            error: ne({}, m, {
              value: he
            }),
            group: ne({}, m, {
              value: O
            }),
            groupCollapsed: ne({}, m, {
              value: k
            }),
            groupEnd: ne({}, m, {
              value: B
            })
          });
        }
        se < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = x.ReactCurrentDispatcher, Y;
    function z(m, R, M) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (ie) {
            var G = ie.stack.trim().match(/\n( *(at )?)/);
            Y = G && G[1] || "";
          }
        return `
` + Y + m;
      }
    }
    var X = !1, q;
    {
      var D = typeof WeakMap == "function" ? WeakMap : Map;
      q = new D();
    }
    function T(m, R) {
      if (!m || X)
        return "";
      {
        var M = q.get(m);
        if (M !== void 0)
          return M;
      }
      var G;
      X = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = F.current, F.current = null, j();
      try {
        if (R) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (dt) {
              G = dt;
            }
            Reflect.construct(m, [], re);
          } else {
            try {
              re.call();
            } catch (dt) {
              G = dt;
            }
            m.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            G = dt;
          }
          m();
        }
      } catch (dt) {
        if (dt && G && typeof dt.stack == "string") {
          for (var te = dt.stack.split(`
`), Ie = G.stack.split(`
`), ge = te.length - 1, ye = Ie.length - 1; ge >= 1 && ye >= 0 && te[ge] !== Ie[ye]; )
            ye--;
          for (; ge >= 1 && ye >= 0; ge--, ye--)
            if (te[ge] !== Ie[ye]) {
              if (ge !== 1 || ye !== 1)
                do
                  if (ge--, ye--, ye < 0 || te[ge] !== Ie[ye]) {
                    var We = `
` + te[ge].replace(" at new ", " at ");
                    return m.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", m.displayName)), typeof m == "function" && q.set(m, We), We;
                  }
                while (ge >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        X = !1, F.current = de, W(), Error.prepareStackTrace = ie;
      }
      var kt = m ? m.displayName || m.name : "", Jr = kt ? z(kt) : "";
      return typeof m == "function" && q.set(m, Jr), Jr;
    }
    function J(m, R, M) {
      return T(m, !1);
    }
    function me(m) {
      var R = m.prototype;
      return !!(R && R.isReactComponent);
    }
    function Oe(m, R, M) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return T(m, me(m));
      if (typeof m == "string")
        return z(m);
      switch (m) {
        case f:
          return z("Suspense");
        case u:
          return z("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return J(m.render);
          case d:
            return Oe(m.type, R, M);
          case v: {
            var G = m, ie = G._payload, de = G._init;
            try {
              return Oe(de(ie), R, M);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, at = {}, ct = x.ReactDebugCurrentFrame;
    function it(m) {
      if (m) {
        var R = m._owner, M = Oe(m.type, m._source, R ? R.type : null);
        ct.setExtraStackFrame(M);
      } else
        ct.setExtraStackFrame(null);
    }
    function Se(m, R, M, G, ie) {
      {
        var de = Function.call.bind($e);
        for (var re in m)
          if (de(m, re)) {
            var te = void 0;
            try {
              if (typeof m[re] != "function") {
                var Ie = Error((G || "React class") + ": " + M + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ie.name = "Invariant Violation", Ie;
              }
              te = m[re](R, re, G, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              te = ge;
            }
            te && !(te instanceof Error) && (it(ie), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", M, re, typeof te), it(null)), te instanceof Error && !(te.message in at) && (at[te.message] = !0, it(ie), P("Failed %s type: %s", M, te.message), it(null));
          }
      }
    }
    var Je = Array.isArray;
    function Qe(m) {
      return Je(m);
    }
    function wt(m) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, M = R && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return M;
      }
    }
    function ht(m) {
      try {
        return xt(m), !1;
      } catch {
        return !0;
      }
    }
    function xt(m) {
      return "" + m;
    }
    function Et(m) {
      if (ht(m))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(m)), xt(m);
    }
    var Ae = x.ReactCurrentOwner, et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mt, Zt, Ye;
    Ye = {};
    function Tn(m) {
      if ($e.call(m, "ref")) {
        var R = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Qn(m) {
      if ($e.call(m, "key")) {
        var R = Object.getOwnPropertyDescriptor(m, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function er(m, R) {
      if (typeof m.ref == "string" && Ae.current && R && Ae.current.stateNode !== R) {
        var M = Z(Ae.current.type);
        Ye[M] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Ae.current.type), m.ref), Ye[M] = !0);
      }
    }
    function On(m, R) {
      {
        var M = function() {
          mt || (mt = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function tr(m, R) {
      {
        var M = function() {
          Zt || (Zt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Sn = function(m, R, M, G, ie, de, re) {
      var te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: R,
        ref: M,
        props: re,
        // Record the component responsible for creating this element.
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
        value: ie
      }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function nr(m, R, M, G, ie) {
      {
        var de, re = {}, te = null, Ie = null;
        M !== void 0 && (Et(M), te = "" + M), Qn(R) && (Et(R.key), te = "" + R.key), Tn(R) && (Ie = R.ref, er(R, ie));
        for (de in R)
          $e.call(R, de) && !et.hasOwnProperty(de) && (re[de] = R[de]);
        if (m && m.defaultProps) {
          var ge = m.defaultProps;
          for (de in ge)
            re[de] === void 0 && (re[de] = ge[de]);
        }
        if (te || Ie) {
          var ye = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          te && On(re, ye), Ie && tr(re, ye);
        }
        return Sn(m, te, Ie, ie, G, Ae.current, re);
      }
    }
    var Kt = x.ReactCurrentOwner, Cn = x.ReactDebugCurrentFrame;
    function ve(m) {
      if (m) {
        var R = m._owner, M = Oe(m.type, m._source, R ? R.type : null);
        Cn.setExtraStackFrame(M);
      } else
        Cn.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Pe(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function tt() {
      {
        if (Kt.current) {
          var m = Z(Kt.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Ne(m) {
      {
        if (m !== void 0) {
          var R = m.fileName.replace(/^.*[\\\/]/, ""), M = m.lineNumber;
          return `

Check your code at ` + R + ":" + M + ".";
        }
        return "";
      }
    }
    var ke = {};
    function ze(m) {
      {
        var R = tt();
        if (!R) {
          var M = typeof m == "string" ? m : m.displayName || m.name;
          M && (R = `

Check the top-level render call using <` + M + ">.");
        }
        return R;
      }
    }
    function ut(m, R) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var M = ze(R);
        if (ke[M])
          return;
        ke[M] = !0;
        var G = "";
        m && m._owner && m._owner !== Kt.current && (G = " It was passed a child from " + Z(m._owner.type) + "."), ve(m), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, G), ve(null);
      }
    }
    function Me(m, R) {
      {
        if (typeof m != "object")
          return;
        if (Qe(m))
          for (var M = 0; M < m.length; M++) {
            var G = m[M];
            Pe(G) && ut(G, R);
          }
        else if (Pe(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var ie = _(m);
          if (typeof ie == "function" && ie !== m.entries)
            for (var de = ie.call(m), re; !(re = de.next()).done; )
              Pe(re.value) && ut(re.value, R);
        }
      }
    }
    function Tt(m) {
      {
        var R = m.type;
        if (R == null || typeof R == "string")
          return;
        var M;
        if (typeof R == "function")
          M = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          M = R.propTypes;
        else
          return;
        if (M) {
          var G = Z(R);
          Se(M, m.props, "prop", G, m);
        } else if (R.PropTypes !== void 0 && !Re) {
          Re = !0;
          var ie = Z(R);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(m) {
      {
        for (var R = Object.keys(m.props), M = 0; M < R.length; M++) {
          var G = R[M];
          if (G !== "children" && G !== "key") {
            ve(m), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), ve(null);
            break;
          }
        }
        m.ref !== null && (ve(m), P("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function St(m, R, M, G, ie, de) {
      {
        var re = L(m);
        if (!re) {
          var te = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ie = Ne(ie);
          Ie ? te += Ie : te += tt();
          var ge;
          m === null ? ge = "null" : Qe(m) ? ge = "array" : m !== void 0 && m.$$typeof === t ? (ge = "<" + (Z(m.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof m, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, te);
        }
        var ye = nr(m, R, M, ie, de);
        if (ye == null)
          return ye;
        if (re) {
          var We = R.children;
          if (We !== void 0)
            if (G)
              if (Qe(We)) {
                for (var kt = 0; kt < We.length; kt++)
                  Me(We[kt], m);
                Object.freeze && Object.freeze(We);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(We, m);
        }
        return m === r ? Ot(ye) : Tt(ye), ye;
      }
    }
    function Nt(m, R, M) {
      return St(m, R, M, !0);
    }
    function Rn(m, R, M) {
      return St(m, R, M, !1);
    }
    var Ct = Rn, Rt = Nt;
    Qt.Fragment = r, Qt.jsx = Ct, Qt.jsxs = Rt;
  }()), Qt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = bi() : e.exports = yi();
})(gi);
const ft = fn.Fragment, p = fn.jsx, I = fn.jsxs;
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function C(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case t:
          switch (y = y.type, y) {
            case c:
            case f:
            case r:
            case i:
            case a:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case u:
                case b:
                case h:
                case l:
                  return y;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function $(y) {
    return C(y) === f;
  }
  return le.AsyncMode = c, le.ConcurrentMode = f, le.ContextConsumer = s, le.ContextProvider = l, le.Element = t, le.ForwardRef = u, le.Fragment = r, le.Lazy = b, le.Memo = h, le.Portal = n, le.Profiler = i, le.StrictMode = a, le.Suspense = d, le.isAsyncMode = function(y) {
    return $(y) || C(y) === c;
  }, le.isConcurrentMode = $, le.isContextConsumer = function(y) {
    return C(y) === s;
  }, le.isContextProvider = function(y) {
    return C(y) === l;
  }, le.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, le.isForwardRef = function(y) {
    return C(y) === u;
  }, le.isFragment = function(y) {
    return C(y) === r;
  }, le.isLazy = function(y) {
    return C(y) === b;
  }, le.isMemo = function(y) {
    return C(y) === h;
  }, le.isPortal = function(y) {
    return C(y) === n;
  }, le.isProfiler = function(y) {
    return C(y) === i;
  }, le.isStrictMode = function(y) {
    return C(y) === a;
  }, le.isSuspense = function(y) {
    return C(y) === d;
  }, le.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === f || y === i || y === a || y === d || y === v || typeof y == "object" && y !== null && (y.$$typeof === b || y.$$typeof === h || y.$$typeof === l || y.$$typeof === s || y.$$typeof === u || y.$$typeof === _ || y.$$typeof === x || y.$$typeof === P || y.$$typeof === g);
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function C(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === r || T === f || T === i || T === a || T === d || T === v || typeof T == "object" && T !== null && (T.$$typeof === b || T.$$typeof === h || T.$$typeof === l || T.$$typeof === s || T.$$typeof === u || T.$$typeof === _ || T.$$typeof === x || T.$$typeof === P || T.$$typeof === g);
    }
    function $(T) {
      if (typeof T == "object" && T !== null) {
        var J = T.$$typeof;
        switch (J) {
          case t:
            var me = T.type;
            switch (me) {
              case c:
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
                  case u:
                  case b:
                  case h:
                  case l:
                    return Oe;
                  default:
                    return J;
                }
            }
          case n:
            return J;
        }
      }
    }
    var y = c, S = f, w = s, E = l, A = t, L = u, N = r, Q = b, Z = h, ne = n, se = i, ae = a, ee = d, Ee = !1;
    function he(T) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(T) || $(T) === c;
    }
    function O(T) {
      return $(T) === f;
    }
    function k(T) {
      return $(T) === s;
    }
    function B(T) {
      return $(T) === l;
    }
    function V(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function j(T) {
      return $(T) === u;
    }
    function W(T) {
      return $(T) === r;
    }
    function F(T) {
      return $(T) === b;
    }
    function Y(T) {
      return $(T) === h;
    }
    function z(T) {
      return $(T) === n;
    }
    function X(T) {
      return $(T) === i;
    }
    function q(T) {
      return $(T) === a;
    }
    function D(T) {
      return $(T) === d;
    }
    ce.AsyncMode = y, ce.ConcurrentMode = S, ce.ContextConsumer = w, ce.ContextProvider = E, ce.Element = A, ce.ForwardRef = L, ce.Fragment = N, ce.Lazy = Q, ce.Memo = Z, ce.Portal = ne, ce.Profiler = se, ce.StrictMode = ae, ce.Suspense = ee, ce.isAsyncMode = he, ce.isConcurrentMode = O, ce.isContextConsumer = k, ce.isContextProvider = B, ce.isElement = V, ce.isForwardRef = j, ce.isFragment = W, ce.isLazy = F, ce.isMemo = Y, ce.isPortal = z, ce.isProfiler = X, ce.isStrictMode = q, ce.isSuspense = D, ce.isValidElementType = C, ce.typeOf = $;
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
      var c = Object.getOwnPropertyNames(l).map(function(u) {
        return l[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        f[u] = u;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return rr = a() ? Object.assign : function(i, l) {
    for (var s, c = r(i), f, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (c[d] = s[d]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          n.call(s, f[v]) && (c[f[v]] = s[f[v]]);
      }
    }
    return c;
  }, rr;
}
var or, io;
function Ir() {
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
    var t = Ir(), n = {}, r = Go();
    e = function(i) {
      var l = "Warning: " + i;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function a(i, l, s, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (r(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var v = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            d = i[u](l, u, c, s, null, t);
          } catch (b) {
            d = b;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var h = f ? f() : "";
            e(
              "Failed " + s + " type: " + d.message + (h ?? "")
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
  var e = Ho(), t = Ei(), n = Ir(), r = Go(), a = Ti(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return sr = function(s, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var k = O && (f && O[f] || O[u]);
      if (typeof k == "function")
        return k;
    }
    var v = "<<anonymous>>", h = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: P(),
      arrayOf: C,
      element: $(),
      elementType: y(),
      instanceOf: S,
      node: L(),
      objectOf: E,
      oneOf: w,
      oneOfType: A,
      shape: Q,
      exact: Z
    };
    function b(O, k) {
      return O === k ? O !== 0 || 1 / O === 1 / k : O !== O && k !== k;
    }
    function g(O, k) {
      this.message = O, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function _(O) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, B = 0;
      function V(W, F, Y, z, X, q, D) {
        if (z = z || v, q = q || Y, D !== n) {
          if (c) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = z + ":" + Y;
            !k[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[J] = !0, B++);
          }
        }
        return F[Y] == null ? W ? F[Y] === null ? new g("The " + X + " `" + q + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new g("The " + X + " `" + q + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : O(F, Y, z, X, q);
      }
      var j = V.bind(null, !1);
      return j.isRequired = V.bind(null, !0), j;
    }
    function x(O) {
      function k(B, V, j, W, F, Y) {
        var z = B[V], X = ae(z);
        if (X !== O) {
          var q = ee(z);
          return new g(
            "Invalid " + W + " `" + F + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return _(k);
    }
    function P() {
      return _(l);
    }
    function C(O) {
      function k(B, V, j, W, F) {
        if (typeof O != "function")
          return new g("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var Y = B[V];
        if (!Array.isArray(Y)) {
          var z = ae(Y);
          return new g("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an array."));
        }
        for (var X = 0; X < Y.length; X++) {
          var q = O(Y, X, j, W, F + "[" + X + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return _(k);
    }
    function $() {
      function O(k, B, V, j, W) {
        var F = k[B];
        if (!s(F)) {
          var Y = ae(F);
          return new g("Invalid " + j + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(O);
    }
    function y() {
      function O(k, B, V, j, W) {
        var F = k[B];
        if (!e.isValidElementType(F)) {
          var Y = ae(F);
          return new g("Invalid " + j + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(O);
    }
    function S(O) {
      function k(B, V, j, W, F) {
        if (!(B[V] instanceof O)) {
          var Y = O.name || v, z = he(B[V]);
          return new g("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return _(k);
    }
    function w(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), l;
      function k(B, V, j, W, F) {
        for (var Y = B[V], z = 0; z < O.length; z++)
          if (b(Y, O[z]))
            return null;
        var X = JSON.stringify(O, function(D, T) {
          var J = ee(T);
          return J === "symbol" ? String(T) : T;
        });
        return new g("Invalid " + W + " `" + F + "` of value `" + String(Y) + "` " + ("supplied to `" + j + "`, expected one of " + X + "."));
      }
      return _(k);
    }
    function E(O) {
      function k(B, V, j, W, F) {
        if (typeof O != "function")
          return new g("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var Y = B[V], z = ae(Y);
        if (z !== "object")
          return new g("Invalid " + W + " `" + F + "` of type " + ("`" + z + "` supplied to `" + j + "`, expected an object."));
        for (var X in Y)
          if (r(Y, X)) {
            var q = O(Y, X, j, W, F + "." + X, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return _(k);
    }
    function A(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var k = 0; k < O.length; k++) {
        var B = O[k];
        if (typeof B != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(B) + " at index " + k + "."
          ), l;
      }
      function V(j, W, F, Y, z) {
        for (var X = [], q = 0; q < O.length; q++) {
          var D = O[q], T = D(j, W, F, Y, z, n);
          if (T == null)
            return null;
          T.data && r(T.data, "expectedType") && X.push(T.data.expectedType);
        }
        var J = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new g("Invalid " + Y + " `" + z + "` supplied to " + ("`" + F + "`" + J + "."));
      }
      return _(V);
    }
    function L() {
      function O(k, B, V, j, W) {
        return ne(k[B]) ? null : new g("Invalid " + j + " `" + W + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return _(O);
    }
    function N(O, k, B, V, j) {
      return new g(
        (O || "React class") + ": " + k + " type `" + B + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function Q(O) {
      function k(B, V, j, W, F) {
        var Y = B[V], z = ae(Y);
        if (z !== "object")
          return new g("Invalid " + W + " `" + F + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var X in O) {
          var q = O[X];
          if (typeof q != "function")
            return N(j, W, F, X, ee(q));
          var D = q(Y, X, j, W, F + "." + X, n);
          if (D)
            return D;
        }
        return null;
      }
      return _(k);
    }
    function Z(O) {
      function k(B, V, j, W, F) {
        var Y = B[V], z = ae(Y);
        if (z !== "object")
          return new g("Invalid " + W + " `" + F + "` of type `" + z + "` " + ("supplied to `" + j + "`, expected `object`."));
        var X = t({}, B[V], O);
        for (var q in X) {
          var D = O[q];
          if (r(O, q) && typeof D != "function")
            return N(j, W, F, q, ee(D));
          if (!D)
            return new g(
              "Invalid " + W + " `" + F + "` key `" + q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(B[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var T = D(Y, q, j, W, F + "." + q, n);
          if (T)
            return T;
        }
        return null;
      }
      return _(k);
    }
    function ne(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(ne);
          if (O === null || s(O))
            return !0;
          var k = d(O);
          if (k) {
            var B = k.call(O), V;
            if (k !== O.entries) {
              for (; !(V = B.next()).done; )
                if (!ne(V.value))
                  return !1;
            } else
              for (; !(V = B.next()).done; ) {
                var j = V.value;
                if (j && !ne(j[1]))
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
    function ae(O) {
      var k = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : se(k, O) ? "symbol" : k;
    }
    function ee(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var k = ae(O);
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
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, sr;
}
var lr, uo;
function Si() {
  if (uo)
    return lr;
  uo = 1;
  var e = Ir();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, lr = function() {
    function r(l, s, c, f, u, d) {
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
}, Be = (e, t) => xe.toArray(e).filter((n) => t.indexOf(Pi(n)) !== -1), $i = ({ children: e, allowMultiple: t, defaultIndex: n }) => {
  const [r, a] = K(), i = (s) => {
    t ? r.includes(s) ? a(r.filter((c) => c !== s)) : a([...r, s]) : a(s);
  };
  H(() => (a(t ? n || [] : n ?? null), () => {
    a(null);
  }), [t, n]);
  const l = xe.map(e, (s, c) => Ze(s) ? we(s, { ...s.props, id: c, isOpen: r, onToggle: i }) : null);
  return /* @__PURE__ */ p("div", { children: Be(l, ["AccordionItem"]) });
};
$i.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
const pe = (e) => (t, n, r) => {
  if (t[n] !== e)
    return new Error(
      `'${n}' in '${r}' 

 NO puedes pasar un valor de props para '${n}'.La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.`
    );
}, Lt = {
  "c-accordion__item": "_c-accordion__item_1xs3f_1",
  "c-accordion__button": "_c-accordion__button_1xs3f_10",
  "c-accordion": "_c-accordion_1xs3f_1",
  "c-accordion__panel": "_c-accordion__panel_1xs3f_33",
  "c-accordion__panel--active": "_c-accordion__panel--active_1xs3f_38",
  "c-accordion__panel-content": "_c-accordion__panel-content_1xs3f_42"
}, Zo = ({ children: e, id: t, onExpanded: n, isExpanded: r, expanded: a, addClass: i, icon: l, __TYPE: s, ...c }) => /* @__PURE__ */ I(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: `${Lt["c-accordion__button"]} u-flex ${i ?? ""} ${r && a && a}`,
    onClick: n,
    "data-type": s,
    ...c,
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
  __TYPE: pe("AccordionButton")
};
Zo.defaultProps = {
  __TYPE: "AccordionButton"
};
const Ko = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a }) => {
  const i = () => r(t), l = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, s = xe.map(e, (c) => Ze(c) ? c.props.__TYPE === "AccordionButton" ? we(c, { ...c.props, id: t, onExpanded: i, isExpanded: l() }) : we(c, { ...c.props, id: t, isExpanded: l() }) : null);
  return /* @__PURE__ */ p("div", { className: `${Lt["c-accordion__item"]} ${a ?? ""}`, children: Be(s, ["AccordionButton", "AccordionPanel"]) });
};
Ko.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  __TYPE: pe("AccordionItem")
};
Ko.defaultProps = {
  __TYPE: "AccordionItem"
};
const Xo = ({ children: e, id: t, isExpanded: n, addClass: r, __TYPE: a, ...i }) => /* @__PURE__ */ p(
  "div",
  {
    className: `${Lt["c-accordion"]} ${n ? Lt["c-accordion__panel--active"] : Lt["c-accordion__panel"]}`,
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
        className: `${Lt["c-accordion__panel-content"]} ${r ?? ""}`,
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
  __TYPE: pe("AccordionPanel")
};
Xo.defaultProps = {
  __TYPE: "AccordionPanel"
};
const $n = {
  "c-icon": "_c-icon_1f7k1_1",
  "c-small": "_c-small_1f7k1_9",
  "c-normal": "_c-normal_1f7k1_13",
  "c-big": "_c-big_1f7k1_17"
}, Di = /\w+\.svg/gi, _e = ({ children: e, path: t, size: n, addClass: r }) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", { children: "Doesn't exist" });
  if (xe.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const a = t && t.match(Di).toString().replace(/.svg/gi, ""), i = `${t}#${a}`;
  return e ? we(e, {
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
_e.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  path: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  addClass: o.string,
  __TYPE: pe("Icon")
};
_e.defaultProps = {
  size: "normal",
  __TYPE: "Icon"
};
const en = {
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
    disabled: c,
    onClick: f,
    children: u,
    addClass: d,
    ...v
  } = e;
  return /* @__PURE__ */ I(
    "button",
    {
      ref: t,
      className: `${d ?? ""} ${en["c-button"]} ${en[`c-${l}`]} ${en[`c-${r}`]} ${a && a.path && s ? en["c-round"] : ""} 
        ${a && a.position === "right" ? en["c-reverse"] : ""}`,
      disabled: c,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...v,
      children: [
        u,
        a && /* @__PURE__ */ p(_e, { path: a.path, size: a.size }),
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
  const [s, c] = K(!1), f = U(), u = Object.freeze({
    BUTTON: "Button",
    BAR: "Bar"
  }), d = (v) => {
    f.current && (f.current.paused ? f.current.play() : f.current.pause(), c(!s));
  };
  return a === u.BAR ? /* @__PURE__ */ p("audio", { preload: "metadata", controls: !0, className: `${Mt["c-audio"]} ${r && Mt[`c-audio--${r}`]} ${i ?? ""}`, "data-a11y": n, ...l, children: /* @__PURE__ */ p("source", { src: e, type: t }) }) : /* @__PURE__ */ I(ft, { children: [
    /* @__PURE__ */ p("audio", { ref: f, src: e, type: t, onEnded: () => c(!s), className: Mt["c-audio--hidden"] }),
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
var Ai = typeof Pn == "object" && Pn && Pn.Object === Object && Pn, Ii = Ai, Ni = Ii, ki = typeof self == "object" && self && self.Object === Object && self, Mi = Ni || ki || Function("return this")(), Li = Mi, Fi = Li, ji = Fi.Symbol, Nr = ji;
function Bi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Vi = Bi, qi = Array.isArray, Yi = qi, fo = Nr, Qo = Object.prototype, zi = Qo.hasOwnProperty, Wi = Qo.toString, tn = fo ? fo.toStringTag : void 0;
function Ui(e) {
  var t = zi.call(e, tn), n = e[tn];
  try {
    e[tn] = void 0;
    var r = !0;
  } catch {
  }
  var a = Wi.call(e);
  return r && (t ? e[tn] = n : delete e[tn]), a;
}
var Hi = Ui, Gi = Object.prototype, Zi = Gi.toString;
function Ki(e) {
  return Zi.call(e);
}
var Xi = Ki, po = Nr, Ji = Hi, Qi = Xi, es = "[object Null]", ts = "[object Undefined]", vo = po ? po.toStringTag : void 0;
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
var us = cs, ho = Nr, ds = Vi, fs = Yi, ps = us, vs = 1 / 0, mo = ho ? ho.prototype : void 0, go = mo ? mo.toString : void 0;
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
var vt = ws;
const nn = {
  "c-input": "_c-input_1p0zh_1",
  "c-input__box": "_c-input__box_1p0zh_24",
  "c-input__check": "_c-input__check_1p0zh_38",
  "c-input__icon": "_c-input__icon_1p0zh_38"
}, ta = lt(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: l, isDisabled: s, defaultChecked: c, onChange: f, __TYPE: u, inherit: d, ...v }, h) => {
    const b = ue(() => e || vt(`ui-${n}`), [e, n]), g = Object.freeze({
      right: /* @__PURE__ */ p("path", { id: "done_all", d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z" }),
      wrong: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }),
      normal: n === "checkbox" ? /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }) : null
    }), _ = ({ target: x }) => {
      if (f) {
        if (x.checked) {
          f({ id: x.id, value: x.value });
          return;
        }
        f({ id: x.id, value: "" });
      }
    };
    return /* @__PURE__ */ I(
      "label",
      {
        htmlFor: b,
        className: `${nn["c-input"]} u-flex ${l ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": u,
        ...!d && { ...v },
        children: [
          /* @__PURE__ */ I("div", { className: nn["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: b,
                ref: h,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: nn["c-input__check"],
                onChange: _,
                ...s && { disabled: !0 },
                ...d && { ...v },
                ...c && { checked: c }
              }
            ),
            /* @__PURE__ */ p("div", { className: nn["c-input__icon"], children: g[a] && /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p(
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
          /* @__PURE__ */ p("span", { className: nn["c-input__label"], children: r })
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
  __TYPE: pe("CheckBox")
};
const xs = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = K([]), l = U(), s = (d) => {
    l.current = d || "";
  }, c = (d) => l.current === "radio" ? [{ ...d }] : a.filter((h) => h.id === d.id).length ? [...a.filter((h) => h.id !== d.id)] : [...a, { ...d }], f = (d) => {
    const v = c(d);
    n && n(v), i(v);
  }, u = xe.map(t, (d) => Ze(d) ? d.props.__TYPE === "CheckBox" ? (d.props.type && s(d.props.type), we(d, { ...d.props, onChange: f })) : d : null);
  return /* @__PURE__ */ I("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Be(u, ["CheckBox"]) })
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
function Ut(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function kr(e) {
  return "nodeType" in e;
}
function Ve(e) {
  var t, n;
  return e ? Ut(e) ? e : kr(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Mr(e) {
  const {
    Document: t
  } = Ve(e);
  return e instanceof t;
}
function yn(e) {
  return Ut(e) ? !1 : e instanceof Ve(e).HTMLElement;
}
function Rs(e) {
  return e instanceof Ve(e).SVGElement;
}
function Ht(e) {
  return e ? Ut(e) ? e.document : kr(e) ? Mr(e) ? e : yn(e) ? e.ownerDocument : document : document : document;
}
const pt = Yn ? zo : H;
function Lr(e) {
  const t = U(e);
  return pt(() => {
    t.current = e;
  }), De(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Ps() {
  const e = U(null), t = De((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = De(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function pn(e, t) {
  t === void 0 && (t = [e]);
  const n = U(e);
  return pt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function _n(e, t) {
  const n = U();
  return ue(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Fn(e) {
  const t = Lr(e), n = U(null), r = De(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Er(e) {
  const t = U();
  return H(() => {
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
      for (const [c, f] of s) {
        const u = i[c];
        u != null && (i[c] = u + e * f);
      }
      return i;
    }, {
      ...t
    });
  };
}
const jt = /* @__PURE__ */ na(1), jn = /* @__PURE__ */ na(-1);
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
const Is = {
  display: "none"
};
function Ns(e) {
  let {
    id: t,
    value: n
  } = e;
  return Le.createElement("div", {
    id: t,
    style: Is
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
  const [e, t] = K("");
  return {
    announce: De((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const oa = /* @__PURE__ */ Ke(null);
function Fs(e) {
  const t = be(oa);
  H(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function js() {
  const [e] = K(() => /* @__PURE__ */ new Set()), t = De((r) => (e.add(r), () => e.delete(r)), [e]);
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
  } = Ls(), s = zn("DndLiveRegion"), [c, f] = K(!1);
  if (H(() => {
    f(!0);
  }, []), Fs(ue(() => ({
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
        over: h
      } = d;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: h
      }));
    },
    onDragOver(d) {
      let {
        active: v,
        over: h
      } = d;
      i(t.onDragOver({
        active: v,
        over: h
      }));
    },
    onDragEnd(d) {
      let {
        active: v,
        over: h
      } = d;
      i(t.onDragEnd({
        active: v,
        over: h
      }));
    },
    onDragCancel(d) {
      let {
        active: v,
        over: h
      } = d;
      i(t.onDragCancel({
        active: v,
        over: h
      }));
    }
  }), [i, t])), !c)
    return null;
  const u = Le.createElement(Le.Fragment, null, Le.createElement(Ns, {
    id: r,
    value: a.draggable
  }), Le.createElement(Ms, {
    id: s,
    announcement: l
  }));
  return n ? Uo(u, n) : u;
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
    } = l, c = n.get(s);
    if (c) {
      const f = yo(c), u = a.reduce((v, h, b) => v + zs(f[b], h), 0), d = Number((u / 4).toFixed(4));
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
    const c = t.width * t.height, f = e.width * e.height, u = l * s, d = u / (c + f - u);
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
      const c = Gs(s, t);
      c > 0 && a.push({
        id: l,
        data: {
          droppableContainer: i,
          value: c
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
  } = r, c = e.left - l - (1 - a) * parseFloat(n), f = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = a ? e.width / a : e.width, d = i ? e.height / i : e.height;
  return {
    width: u,
    height: d,
    top: f,
    right: c + u,
    bottom: f + d,
    left: c
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
      transform: u,
      transformOrigin: d
    } = f(e);
    u && (n = el(n, u, d));
  }
  const {
    top: r,
    left: a,
    width: i,
    height: l,
    bottom: s,
    right: c
  } = n;
  return {
    top: r,
    left: a,
    width: i,
    height: l,
    bottom: s,
    right: c
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
function Fr(e, t) {
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
  const [t] = Fr(e, 1);
  return t ?? null;
}
function dr(e) {
  return !Yn || !e ? null : Ut(e) ? e : kr(e) ? Mr(e) || e === Ht(e).scrollingElement ? window : yn(e) ? e : null : null;
}
function la(e) {
  return Ut(e) ? e.scrollX : e.scrollLeft;
}
function ca(e) {
  return Ut(e) ? e.scrollY : e.scrollTop;
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
    bottom: c
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = al);
  const {
    isTop: f,
    isBottom: u,
    isLeft: d,
    isRight: v
  } = da(e), h = {
    x: 0,
    y: 0
  }, b = {
    x: 0,
    y: 0
  }, g = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + g.height ? (h.y = Ce.Backward, b.y = r * Math.abs((t.top + g.height - i) / g.height)) : !u && c >= t.bottom - g.height && (h.y = Ce.Forward, b.y = r * Math.abs((t.bottom - g.height - c) / g.height)), !v && s >= t.right - g.width ? (h.x = Ce.Forward, b.x = r * Math.abs((t.right - g.width - s) / g.width)) : !d && l <= t.left + g.width && (h.x = Ce.Backward, b.x = r * Math.abs((t.left + g.width - l) / g.width)), {
    direction: h,
    speed: b
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
  return e.reduce((t, n) => jt(t, Sr(n)), rt);
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
class jr {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Fr(n), a = fa(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, l, s] of dl)
      for (const c of l)
        Object.defineProperty(this, c, {
          get: () => {
            const f = s(r), u = a[i] - f;
            return this.rect[c] + u;
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
  return e instanceof t ? e : Ht(e);
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
var oe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(oe || (oe = {}));
const pa = {
  start: [oe.Space, oe.Enter],
  cancel: [oe.Esc],
  end: [oe.Space, oe.Enter]
}, vl = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case oe.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case oe.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case oe.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case oe.Up:
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
    this.props = t, this.listeners = new an(Ht(n)), this.windowListeners = new an(Ve(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
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
        code: c
      } = t;
      if (i.end.includes(c)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(c)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: f
      } = r.current, u = f ? {
        x: f.left,
        y: f.top
      } : rt;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const d = l(t, {
        active: n,
        context: r.current,
        currentCoordinates: u
      });
      if (d) {
        const v = jn(d, u), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = r.current;
        for (const g of b) {
          const _ = t.code, {
            isTop: x,
            isRight: P,
            isLeft: C,
            isBottom: $,
            maxScroll: y,
            minScroll: S
          } = da(g), w = sl(g), E = {
            x: Math.min(_ === oe.Right ? w.right - w.width / 2 : w.right, Math.max(_ === oe.Right ? w.left : w.left + w.width / 2, d.x)),
            y: Math.min(_ === oe.Down ? w.bottom - w.height / 2 : w.bottom, Math.max(_ === oe.Down ? w.top : w.top + w.height / 2, d.y))
          }, A = _ === oe.Right && !P || _ === oe.Left && !C, L = _ === oe.Down && !$ || _ === oe.Up && !x;
          if (A && E.x !== d.x) {
            const N = g.scrollLeft + v.x, Q = _ === oe.Right && N <= y.x || _ === oe.Left && N >= S.x;
            if (Q && !v.y) {
              g.scrollTo({
                left: N,
                behavior: s
              });
              return;
            }
            Q ? h.x = g.scrollLeft - N : h.x = _ === oe.Right ? g.scrollLeft - y.x : g.scrollLeft - S.x, h.x && g.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (L && E.y !== d.y) {
            const N = g.scrollTop + v.y, Q = _ === oe.Down && N <= y.y || _ === oe.Up && N >= S.y;
            if (Q && !v.x) {
              g.scrollTo({
                top: N,
                behavior: s
              });
              return;
            }
            Q ? h.y = g.scrollTop - N : h.y = _ === oe.Down ? g.scrollTop - y.y : g.scrollTop - S.y, h.y && g.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, jt(jn(d, this.referenceCoordinates), h));
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
    this.props = t, this.events = n, this.document = Ht(l), this.documentListeners = new an(this.document), this.listeners = new an(r), this.windowListeners = new an(Ve(l)), this.initialCoordinates = (a = Tr(i)) != null ? a : rt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    const c = (n = Tr(t)) != null ? n : rt, f = jn(a, c);
    if (!r && s) {
      if (Eo(s))
        return fr(f, s.tolerance) ? this.handleCancel() : void 0;
      if (xo(s))
        return s.tolerance != null && fr(f, s.tolerance) ? this.handleCancel() : fr(f, s.distance) ? this.handleStart() : void 0;
    }
    t.cancelable && t.preventDefault(), l(c);
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
    } = t, r = Ht(n.target);
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
    super(t, ml, Ht(t.event.target));
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
    pointerCoordinates: c,
    scrollableAncestors: f,
    scrollableAncestorRects: u,
    delta: d,
    threshold: v
  } = e;
  const h = yl({
    delta: d,
    disabled: !i
  }), [b, g] = Ps(), _ = U({
    x: 0,
    y: 0
  }), x = U({
    x: 0,
    y: 0
  }), P = ue(() => {
    switch (n) {
      case sn.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case sn.DraggableRect:
        return a;
    }
  }, [n, a, c]), C = U(null), $ = De(() => {
    const S = C.current;
    if (!S)
      return;
    const w = _.current.x * x.current.x, E = _.current.y * x.current.y;
    S.scrollBy(w, E);
  }, []), y = ue(() => s === Vn.TreeOrder ? [...f].reverse() : f, [s, f]);
  H(
    () => {
      if (!i || !f.length || !P) {
        g();
        return;
      }
      for (const S of y) {
        if ((r == null ? void 0 : r(S)) === !1)
          continue;
        const w = f.indexOf(S), E = u[w];
        if (!E)
          continue;
        const {
          direction: A,
          speed: L
        } = il(S, E, P, t, v);
        for (const N of ["x", "y"])
          h[N][A[N]] || (L[N] = 0, A[N] = 0);
        if (L.x > 0 || L.y > 0) {
          g(), C.current = S, b($, l), _.current = L, x.current = A;
          return;
        }
      }
      _.current = {
        x: 0,
        y: 0
      }, x.current = {
        x: 0,
        y: 0
      }, g();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      $,
      r,
      g,
      i,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(P),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      b,
      f,
      y,
      u,
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
  const [i, l] = K(null), {
    frequency: s,
    measure: c,
    strategy: f
  } = a, u = U(e), d = _(), v = pn(d), h = De(function(x) {
    x === void 0 && (x = []), !v.current && l((P) => P === null ? x : P.concat(x.filter((C) => !P.includes(C))));
  }, [v]), b = U(null), g = _n((x) => {
    if (d && !n)
      return To;
    if (!x || x === To || u.current !== e || i != null) {
      const P = /* @__PURE__ */ new Map();
      for (let C of e) {
        if (!C)
          continue;
        if (i && i.length > 0 && !i.includes(C.id) && C.rect.current) {
          P.set(C.id, C.rect.current);
          continue;
        }
        const $ = C.node.current, y = $ ? new jr(c($), $) : null;
        C.rect.current = y, y && P.set(C.id, y);
      }
      return P;
    }
    return x;
  }, [e, i, n, d, c]);
  return H(() => {
    u.current = e;
  }, [e]), H(
    () => {
      d || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), H(
    () => {
      i && i.length > 0 && l(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), H(
    () => {
      d || typeof s != "number" || b.current !== null || (b.current = setTimeout(() => {
        h(), b.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, d, h, ...r]
  ), {
    droppableRects: g,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function _() {
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
  return H(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
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
  return H(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Ol(e) {
  return new jr(wn(e), e);
}
function Oo(e, t, n) {
  t === void 0 && (t = Ol);
  const [r, a] = Ar(s, null), i = Tl({
    callback(c) {
      if (e)
        for (const f of c) {
          const {
            type: u,
            target: d
          } = f;
          if (u === "childList" && d instanceof HTMLElement && d.contains(e)) {
            a();
            break;
          }
        }
    }
  }), l = Wn({
    callback: a
  });
  return pt(() => {
    a(), e ? (l == null || l.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (l == null || l.disconnect(), i == null || i.disconnect());
  }, [e]), r;
  function s(c) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var f;
      return (f = c ?? n) != null ? f : null;
    }
    const u = t(e);
    return JSON.stringify(c) === JSON.stringify(u) ? c : u;
  }
}
function Sl(e) {
  const t = ga(e);
  return ia(e, t);
}
const So = [];
function Cl(e) {
  const t = U(e), n = _n((r) => e ? r && r !== So && e && t.current && e.parentNode === t.current.parentNode ? r : Fr(e) : So, [e]);
  return H(() => {
    t.current = e;
  }, [e]), n;
}
function Rl(e) {
  const [t, n] = K(null), r = U(e), a = De((i) => {
    const l = dr(i.target);
    l && n((s) => s ? (s.set(l, Sr(l)), new Map(s)) : null);
  }, []);
  return H(() => {
    const i = r.current;
    if (e !== i) {
      l(i);
      const s = e.map((c) => {
        const f = dr(c);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, Sr(f)]) : null;
      }).filter((c) => c != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      l(e), l(i);
    };
    function l(s) {
      s.forEach((c) => {
        const f = dr(c);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), ue(() => e.length ? t ? Array.from(t.values()).reduce((i, l) => jt(i, l), rt) : fa(e) : rt, [e, t]);
}
function Co(e, t) {
  t === void 0 && (t = []);
  const n = U(null);
  return H(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), H(() => {
    const r = e !== rt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? jn(e, n.current) : rt;
}
function Pl(e) {
  H(
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
  return e.length > 0 && a === vr && i(), pt(() => {
    e.length ? e.forEach((c) => l == null ? void 0 : l.observe(c)) : (l == null || l.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((c) => ua(c) ? r : new jr(t(c), c)) : vr;
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
function Il(e) {
  let {
    measure: t
  } = e;
  const [n, r] = K(null), a = De((f) => {
    for (const {
      target: u
    } of f)
      if (yn(u)) {
        r((d) => {
          const v = t(u);
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
    const u = Al(f);
    i == null || i.disconnect(), u && (i == null || i.observe(u)), r(u ? t(u) : null);
  }, [t, i]), [s, c] = Fn(l);
  return ue(() => ({
    nodeRef: s,
    rect: n,
    setRef: c
  }), [n, s, c]);
}
const Nl = [{
  sensor: va,
  options: {}
}, {
  sensor: Br,
  options: {}
}], kl = {
  current: {}
}, In = {
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
  measuringConfiguration: In,
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
}, Un = /* @__PURE__ */ Ke(Ll), Fl = /* @__PURE__ */ Ke(Ml);
function jl() {
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
  return H(() => {
    if (!t && !r && i && l != null) {
      if (!ra(i) || document.activeElement === i.target)
        return;
      const s = a.get(l);
      if (!s)
        return;
      const {
        activatorNode: c,
        node: f
      } = s;
      if (!c.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const u of [c.current, f.current]) {
          if (!u)
            continue;
          const d = As(u);
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
        ...In.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...In.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...In.dragOverlay,
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
  const i = U(!1), {
    x: l,
    y: s
  } = typeof a == "boolean" ? {
    x: a,
    y: a
  } : a;
  pt(() => {
    if (!l && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const u = n(f), d = ia(u, r);
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
    autoScroll: c = !0,
    children: f,
    sensors: u = Nl,
    collisionDetection: d = Zs,
    measuring: v,
    modifiers: h,
    ...b
  } = t;
  const g = Ar(Bl, void 0, jl), [_, x] = g, [P, C] = js(), [$, y] = K(bt.Uninitialized), S = $ === bt.Initialized, {
    draggable: {
      active: w,
      nodes: E,
      translate: A
    },
    droppable: {
      containers: L
    }
  } = _, N = w ? E.get(w) : null, Q = U({
    initial: null,
    translated: null
  }), Z = ue(() => {
    var ve;
    return w != null ? {
      id: w,
      // It's possible for the active node to unmount while dragging
      data: (ve = N == null ? void 0 : N.data) != null ? ve : kl,
      rect: Q
    } : null;
  }, [w, N]), ne = U(null), [se, ae] = K(null), [ee, Ee] = K(null), he = pn(b, Object.values(b)), O = zn("DndDescribedBy", l), k = ue(() => L.getEnabled(), [L]), B = Yl(v), {
    droppableRects: V,
    measureDroppableContainers: j,
    measuringScheduled: W
  } = xl(k, {
    dragging: S,
    dependencies: [A.x, A.y],
    config: B.droppable
  }), F = _l(E, w), Y = ue(() => ee ? Tr(ee) : null, [ee]), z = Cn(), X = El(F, B.draggable.measure);
  zl({
    activeNode: w ? E.get(w) : null,
    config: z.layoutShiftCompensation,
    initialRect: X,
    measure: B.draggable.measure
  });
  const q = Oo(F, B.draggable.measure, X), D = Oo(F ? F.parentElement : null), T = U({
    activatorEvent: null,
    active: null,
    activeNode: F,
    collisionRect: null,
    collisions: null,
    droppableRects: V,
    draggableNodes: E,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: L,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), J = L.getNodeFor((n = T.current.over) == null ? void 0 : n.id), me = Il({
    measure: B.dragOverlay.measure
  }), Oe = (r = me.nodeRef.current) != null ? r : F, $e = S ? (a = me.rect) != null ? a : q : null, at = Boolean(me.nodeRef.current && me.rect), ct = Sl(at ? null : q), it = ba(Oe ? Ve(Oe) : null), Se = Cl(S ? J ?? F : null), Je = Dl(Se), Qe = ql(h, {
    transform: {
      x: A.x - ct.x,
      y: A.y - ct.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: ee,
    active: Z,
    activeNodeRect: q,
    containerNodeRect: D,
    draggingNodeRect: $e,
    over: T.current.over,
    overlayNodeRect: me.rect,
    scrollableAncestors: Se,
    scrollableAncestorRects: Je,
    windowRect: it
  }), wt = Y ? jt(Y, A) : null, ht = Rl(Se), xt = Co(ht), Et = Co(ht, [q]), Ae = jt(Qe, xt), et = $e ? Js($e, Qe) : null, mt = Z && et ? d({
    active: Z,
    collisionRect: et,
    droppableRects: V,
    droppableContainers: k,
    pointerCoordinates: wt
  }) : null, Zt = aa(mt, "id"), [Ye, Tn] = K(null), Qn = at ? Qe : jt(Qe, Et), er = Ks(Qn, (i = Ye == null ? void 0 : Ye.rect) != null ? i : null, q), On = De(
    (ve, Re) => {
      let {
        sensor: Pe,
        options: tt
      } = Re;
      if (ne.current == null)
        return;
      const Ne = E.get(ne.current);
      if (!Ne)
        return;
      const ke = ve.nativeEvent, ze = new Pe({
        active: ne.current,
        activeNode: Ne,
        event: ke,
        options: tt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: T,
        onStart(Me) {
          const Tt = ne.current;
          if (Tt == null)
            return;
          const Ot = E.get(Tt);
          if (!Ot)
            return;
          const {
            onDragStart: St
          } = he.current, Nt = {
            active: {
              id: Tt,
              data: Ot.data,
              rect: Q
            }
          };
          Xt(() => {
            St == null || St(Nt), y(bt.Initializing), x({
              type: Te.DragStart,
              initialCoordinates: Me,
              active: Tt
            }), P({
              type: "onDragStart",
              event: Nt
            });
          });
        },
        onMove(Me) {
          x({
            type: Te.DragMove,
            coordinates: Me
          });
        },
        onEnd: ut(Te.DragEnd),
        onCancel: ut(Te.DragCancel)
      });
      Xt(() => {
        ae(ze), Ee(ve.nativeEvent);
      });
      function ut(Me) {
        return async function() {
          const {
            active: Ot,
            collisions: St,
            over: Nt,
            scrollAdjustedTranslate: Rn
          } = T.current;
          let Ct = null;
          if (Ot && Rn) {
            const {
              cancelDrop: Rt
            } = he.current;
            Ct = {
              activatorEvent: ke,
              active: Ot,
              collisions: St,
              delta: Rn,
              over: Nt
            }, Me === Te.DragEnd && typeof Rt == "function" && await Promise.resolve(Rt(Ct)) && (Me = Te.DragCancel);
          }
          ne.current = null, Xt(() => {
            x({
              type: Me
            }), y(bt.Uninitialized), Tn(null), ae(null), Ee(null);
            const Rt = Me === Te.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ct) {
              const m = he.current[Rt];
              m == null || m(Ct), P({
                type: Rt,
                event: Ct
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [E]
  ), tr = De((ve, Re) => (Pe, tt) => {
    const Ne = Pe.nativeEvent, ke = E.get(tt);
    if (
      // Another sensor is already instantiating
      ne.current !== null || // No active draggable
      !ke || // Event has already been captured
      Ne.dndKit || Ne.defaultPrevented
    )
      return;
    const ze = {
      active: ke
    };
    ve(Pe, Re.options, ze) === !0 && (Ne.dndKit = {
      capturedBy: Re.sensor
    }, ne.current = tt, On(Pe, Re));
  }, [E, On]), Sn = wl(u, tr);
  Pl(u), pt(() => {
    q && $ === bt.Initializing && y(bt.Initialized);
  }, [q, $]), H(
    () => {
      const {
        onDragMove: ve
      } = he.current, {
        active: Re,
        activatorEvent: Pe,
        collisions: tt,
        over: Ne
      } = T.current;
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
        over: Ne
      };
      Xt(() => {
        ve == null || ve(ke), P({
          type: "onDragMove",
          event: ke
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ae.x, Ae.y]
  ), H(
    () => {
      const {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        droppableContainers: tt,
        scrollAdjustedTranslate: Ne
      } = T.current;
      if (!ve || ne.current == null || !Re || !Ne)
        return;
      const {
        onDragOver: ke
      } = he.current, ze = tt.get(Zt), ut = ze && ze.rect.current ? {
        id: ze.id,
        rect: ze.rect.current,
        data: ze.data,
        disabled: ze.disabled
      } : null, Me = {
        active: ve,
        activatorEvent: Re,
        collisions: Pe,
        delta: {
          x: Ne.x,
          y: Ne.y
        },
        over: ut
      };
      Xt(() => {
        Tn(ut), ke == null || ke(Me), P({
          type: "onDragOver",
          event: Me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Zt]
  ), pt(() => {
    T.current = {
      activatorEvent: ee,
      active: Z,
      activeNode: F,
      collisionRect: et,
      collisions: mt,
      droppableRects: V,
      draggableNodes: E,
      draggingNode: Oe,
      draggingNodeRect: $e,
      droppableContainers: L,
      over: Ye,
      scrollableAncestors: Se,
      scrollAdjustedTranslate: Ae
    }, Q.current = {
      initial: $e,
      translated: et
    };
  }, [Z, F, mt, et, E, Oe, $e, V, L, Ye, Se, Ae]), gl({
    ...z,
    delta: A,
    draggingRect: et,
    pointerCoordinates: wt,
    scrollableAncestors: Se,
    scrollableAncestorRects: Je
  });
  const nr = ue(() => ({
    active: Z,
    activeNode: F,
    activeNodeRect: q,
    activatorEvent: ee,
    collisions: mt,
    containerNodeRect: D,
    dragOverlay: me,
    draggableNodes: E,
    droppableContainers: L,
    droppableRects: V,
    over: Ye,
    measureDroppableContainers: j,
    scrollableAncestors: Se,
    scrollableAncestorRects: Je,
    measuringConfiguration: B,
    measuringScheduled: W,
    windowRect: it
  }), [Z, F, q, ee, mt, D, me, E, L, V, Ye, j, Se, Je, B, W, it]), Kt = ue(() => ({
    activatorEvent: ee,
    activators: Sn,
    active: Z,
    activeNodeRect: q,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: x,
    draggableNodes: E,
    over: Ye,
    measureDroppableContainers: j
  }), [ee, Sn, Z, q, x, O, E, Ye, j]);
  return Le.createElement(oa.Provider, {
    value: C
  }, Le.createElement(Un.Provider, {
    value: Kt
  }, Le.createElement(Fl.Provider, {
    value: nr
  }, Le.createElement(ya.Provider, {
    value: er
  }, f)), Le.createElement(Vl, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), Le.createElement(qs, {
    ...s,
    hiddenTextDescribedById: O
  }));
  function Cn() {
    const ve = (se == null ? void 0 : se.autoScrollEnabled) === !1, Re = typeof c == "object" ? c.enabled === !1 : c === !1, Pe = S && !ve && !Re;
    return typeof c == "object" ? {
      ...c,
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
    active: c,
    activeNodeRect: f,
    ariaDescribedById: u,
    draggableNodes: d,
    over: v
  } = be(Un), {
    role: h = Ro,
    roleDescription: b = "draggable",
    tabIndex: g = 0
  } = a ?? {}, _ = (c == null ? void 0 : c.id) === t, x = be(_ ? ya : Ul), [P, C] = Fn(), [$, y] = Fn(), S = $l(l, t), w = pn(n);
  pt(
    () => (d.set(t, {
      id: t,
      key: i,
      node: P,
      activatorNode: $,
      data: w
    }), () => {
      const A = d.get(t);
      A && A.key === i && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const E = ue(() => ({
    role: h,
    tabIndex: g,
    "aria-disabled": r,
    "aria-pressed": _ && h === Ro ? !0 : void 0,
    "aria-roledescription": b,
    "aria-describedby": u.draggable
  }), [r, h, g, _, b, u.draggable]);
  return {
    active: c,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: E,
    isDragging: _,
    listeners: r ? void 0 : S,
    node: P,
    over: v,
    setNodeRef: C,
    setActivatorNodeRef: y,
    transform: x
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
    over: c,
    measureDroppableContainers: f
  } = be(Un), u = U({
    disabled: n
  }), d = U(!1), v = U(null), h = U(null), {
    disabled: b,
    updateMeasurementsFor: g,
    timeout: _
  } = {
    ...Kl,
    ...a
  }, x = pn(g ?? r), P = De(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(x.current) ? x.current : [x.current]), h.current = null;
      }, _);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [_]
  ), C = Wn({
    callback: P,
    disabled: b || !l
  }), $ = De((E, A) => {
    C && (A && (C.unobserve(A), d.current = !1), E && C.observe(E));
  }, [C]), [y, S] = Fn($), w = pn(t);
  return H(() => {
    !C || !y.current || (C.disconnect(), d.current = !1, C.observe(y.current));
  }, [y, C]), pt(
    () => (s({
      type: Te.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: y,
        rect: v,
        data: w
      }
    }), () => s({
      type: Te.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), H(() => {
    n !== u.current.disabled && (s({
      type: Te.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), u.current.disabled = n);
  }, [r, i, n, s]), {
    active: l,
    rect: v,
    isOver: (c == null ? void 0 : c.id) === r,
    node: y,
    over: c,
    setNodeRef: S
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
}, Ql = [oe.Down, oe.Right, oe.Up, oe.Left], ec = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (Ql.includes(e.code)) {
    e.preventDefault();
    const l = 20;
    if (!t || !a)
      return;
    const s = [];
    r.getEnabled().forEach((u) => {
      if (!u || u != null && u.disabled)
        return;
      const d = n.get(u.id);
      if (d)
        switch (e.code) {
          case oe.Down:
            a.top < d.top && s.push(u);
            break;
          case oe.Up:
            a.top > d.top + l && s.push(u);
            break;
          case oe.Left:
            a.left >= d.left + d.width && s.push(u);
            break;
          case oe.Right:
            a.left + a.width <= d.left && s.push(u);
            break;
        }
    });
    const c = Hs({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = aa(c, "id");
    if (f != null) {
      const u = r.get(f), d = u == null ? void 0 : u.node.current, v = u == null ? void 0 : u.rect.current;
      if (d && v)
        return ((i = u.data.current) == null ? void 0 : i.type) === "container" ? {
          x: v.left,
          y: v.top + l
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, wa = Ke(), on = (e, t) => xe.map(e, (n) => {
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
  onDragMove: c
}) => {
  const [f, u] = K([]), [d, v] = K(null), [h, b] = K(() => g());
  function g() {
    return [...on(e, "droppable"), ...on(e, "general-draggable")].reduce(
      (S, w) => ({
        ...S,
        [w.props.id]: w.props.children ? [...on(w.props.children, "draggable").map((E) => E.props.id)] : []
      }),
      {}
    );
  }
  const _ = Object.freeze({
    restrictToVerticalAxis: Jl,
    restrictToHorizontalAxis: Xl
  }), x = Ys(
    ur(ha),
    ur(ma),
    ur(Br, {
      coordinateGetter: ec
    })
  ), P = (S, w) => {
    if (Object.keys(h).pop() === S.id)
      return;
    let A = [...f.filter((L) => L !== w), S.data.current.validate.includes(w) ? w : ""].filter((L) => !!L);
    if (!t) {
      const L = h[S.id][0];
      A = L ? A.filter((N) => N !== L) : A;
    }
    n && n({ validate: [...A], active: !0 }), u(A);
  }, C = (S) => S in h ? S : Object.keys(h).find((w) => h[w].includes(S)), $ = ({ active: S, over: w }) => {
    if (!w)
      return;
    v(null);
    const E = Object.keys(h).pop(), A = C(w.id), L = C(S.id);
    L !== A && (E !== w.id && P(w, S.id), b((N) => {
      const Q = N[L].filter((se) => se !== S.id), Z = [...N[A]];
      return t ? {
        ...N,
        [L]: Q,
        [A]: [...Z, S.id]
      } : {
        ...{
          ...N,
          [L]: Q,
          [A]: A === E ? [...Z, S.id] : [S.id]
        },
        ...A !== E && N[A].length > 0 && { [E]: [...N[E].filter((se) => se !== N[L][0]), ...N[A]] }
      };
    }));
  }, y = (S) => xe.map(S, (w) => {
    if (!w.props)
      return w;
    if (w.props.__TYPE !== "draggable")
      return w.props.id in h && h[w.props.id].length > 0 ? we(w, { ...w.props }, [
        ...h[w.props.id].map((E) => on(e, "draggable").filter((A) => A.props.id === E)).flat()
      ]) : w.props.children ? we(w, { ...w.props, children: y(w.props.children) }) : w;
  });
  return H(() => {
    a && (b(() => g()), n && n({ validate: [], active: !1 }));
  }, [a]), /* @__PURE__ */ p(wa.Provider, { value: { listId: f, propValidate: i, validate: r, isDragging: d }, children: /* @__PURE__ */ p(
    Wl,
    {
      sensors: x,
      accessibility: { announcements: s },
      onDragStart: ({ active: S }) => v(S.id),
      onDragEnd: $,
      ...!!c && { onDragMove: c },
      onDragCancel: () => v(null),
      ...l && { modifiers: [_[l]] },
      children: y(e)
    }
  ) });
};
xa.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: tc
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
  onDragMove: o.func
};
const nc = "_pop_1elvh_1", Bt = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: nc
}, Ea = ({ children: e, id: t, addClass: n, dragging: r, label: a, attribute: i, disabledDefaultAttributes: l, element: s, __TYPE: c, ...f }) => {
  const u = s || "div", { listId: d, propValidate: v, validate: h, isDragging: b } = be(wa), { attributes: g, listeners: _, setNodeRef: x, transform: P } = Gl({
    id: t,
    disabled: h,
    data: {
      label: a
    },
    attributes: i
  });
  return /* @__PURE__ */ p(
    u,
    {
      id: t,
      ref: x,
      "data-type": c,
      className: `${Bt["c-draggable"]} ${b === t ? `${r} ${Bt["is-draggable--active-animation"]}` : ""} ${n ?? ""}`,
      style: { transform: Or.Translate.toString(P) },
      ...h && { [v]: !!d.includes(t) },
      ...!l && { ...g },
      ..._,
      ...f,
      children: e
    }
  );
};
Ea.defaultProps = {
  __TYPE: "draggable",
  dragging: Bt["c-draggable--active"],
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
  __TYPE: pe("draggable")
};
const Ta = ({ children: e, id: t, validate: n, addClass: r, over: a, label: i, element: l, __TYPE: s, ...c }) => {
  const f = l || "div", { isOver: u, setNodeRef: d } = _a({
    id: t,
    data: {
      validate: n,
      label: i,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(f, { ref: d, "data-type": s, className: `${Bt["c-droppable"]} ${u && a && a} ${r ?? ""}`, ...c, children: e });
};
Ta.defaultProps = {
  __TYPE: "droppable",
  over: Bt["c-droppable--active"]
};
Ta.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  id: o.string.isRequired,
  validate: o.array.isRequired,
  addClass: o.string,
  over: o.string,
  label: o.string.isRequired,
  element: o.string,
  __TYPE: pe("droppable")
};
const Oa = ({ children: e, addClass: t, over: n, id: r, label: a, element: i, __TYPE: l, ...s }) => {
  const c = i || "div", { isOver: f, setNodeRef: u } = _a({
    id: r,
    data: {
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(c, { id: r, ref: u, "data-type": l, className: `${Bt["c-droppable"]}  ${f && n && n} ${t ?? ""}`, ...s, children: e });
};
Oa.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  over: o.string,
  id: o.string.isRequired,
  label: o.string.isRequired,
  element: o.string,
  __TYPE: pe("general-draggable")
};
Oa.defaultProps = {
  __TYPE: "general-draggable",
  id: vt("unique-id-general-"),
  label: "contendor inicial"
};
const nd = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ I("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ I("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" })
  ] }) }),
  /* @__PURE__ */ p("filter", { id: "hc_extension_highcontrast", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ I("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "3.0" }),
    /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "3.0" }),
    /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "3.0" })
  ] }) }),
  /* @__PURE__ */ p("filter", { id: "hc_extension_highcontrast_back", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ I("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
    /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
    /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
  ] }) }),
  /* @__PURE__ */ I("filter", { id: "hc_extension_grayscale", x: "0", y: "0", width: "99999", height: "99999", children: [
    /* @__PURE__ */ p(
      "feColorMatrix",
      {
        type: "matrix",
        values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
      }
    ),
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "3" }),
      /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "3" }),
      /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "3" })
    ] })
  ] }),
  /* @__PURE__ */ p("filter", { id: "hc_extension_grayscale_back", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ I("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
    /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
    /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
  ] }) }),
  /* @__PURE__ */ p("filter", { id: "hc_extension_invert", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ I("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
    /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
    /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
  ] }) }),
  /* @__PURE__ */ I("filter", { id: "hc_extension_invert_back", x: "0", y: "0", width: "99999", height: "99999", children: [
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
      /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
      /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
    ] }),
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "1.7" }),
      /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "1.7" }),
      /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "1.7" })
    ] })
  ] }),
  /* @__PURE__ */ I("filter", { id: "hc_extension_yellow_on_black", x: "0", y: "0", width: "99999", height: "99999", children: [
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
      /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
      /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
    ] }),
    /* @__PURE__ */ p("feColorMatrix", { type: "matrix", values: "0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0" })
  ] }),
  /* @__PURE__ */ I("filter", { id: "hc_extension_yellow_on_black_back", x: "0", y: "0", width: "99999", height: "99999", children: [
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
      /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
      /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
    ] }),
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
      /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
      /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
    ] })
  ] }),
  /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0.97 0.52" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0.03" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0.98 0.06" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p("feBlend", { mode: "normal", in: "componentTransfer", in2: "SourceGraphic", result: "blend" })
      ]
    }
  ),
  /* @__PURE__ */ I("filter", { id: "hc_extension_red_on_white_back", x: "0", y: "0", width: "99999", height: "99999", children: [
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
      /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
      /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
    ] }),
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
      /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
      /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
    ] })
  ] }),
  /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0.09 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0.16" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p("feBlend", { mode: "normal", in: "componentTransfer", in2: "SourceGraphic", result: "blend" })
      ]
    }
  ),
  /* @__PURE__ */ I("filter", { id: "hc_extension_green_on_blue_back", x: "0", y: "0", width: "99999", height: "99999", children: [
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
      /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
      /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
    ] }),
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
      /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
      /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
    ] })
  ] }),
  /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0.99 0.16" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p("feBlend", { mode: "normal", in: "componentTransfer", in2: "SourceGraphic", result: "blend" })
      ]
    }
  ),
  /* @__PURE__ */ I("filter", { id: "hc_extension_yellow_on_blue_back", x: "0", y: "0", width: "99999", height: "99999", children: [
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
      /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
      /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
    ] }),
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
      /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
      /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
    ] })
  ] }),
  /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0.98 0" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p("feBlend", { mode: "normal", in: "componentTransfer", in2: "SourceGraphic", result: "blend" })
      ]
    }
  ),
  /* @__PURE__ */ I("filter", { id: "hc_extension_white_on_black_back", x: "0", y: "0", width: "99999", height: "99999", children: [
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
      /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
      /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
    ] }),
    /* @__PURE__ */ I("feComponentTransfer", { children: [
      /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
      /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
      /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
    ] })
  ] })
] }) }) }), Po = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, Sa = ({ url: e, alt: t, title: n, width: r, addClass: a, noCaption: i, ...l }) => {
  const [s, c] = K(!1), f = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, u = (v) => c(v), d = s ? f : `${e}`;
  return /* @__PURE__ */ I("figure", { className: `${Po["c-image"]} ${a ?? ""}`, ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } }, children: [
    /* @__PURE__ */ p("img", { src: d, onError: u, alt: t, ...l }),
    !i && /* @__PURE__ */ p("figcaption", { className: Po["c-image__figcaption"], children: /* @__PURE__ */ I("p", { children: [
      /* @__PURE__ */ I("strong", { children: [
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
}, Ca = lt(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: c, isReadOnly: f, onValue: u }, d) => {
  const v = ue(() => e || vt("c-input-"), [e]), h = ({ target: b }) => {
    u && u({ id: v, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ I("label", { htmlFor: v, className: `${hn["c-label"]} ${i ?? ""}`, children: [
    /* @__PURE__ */ I("span", { className: `${!l && "u-sr-only"}`, children: [
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
        required: c,
        placeholder: r,
        autoComplete: "off",
        onChange: h,
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
  __TYPE: pe("Input")
};
const rc = ({ children: e, onAllValue: t }) => {
  const [n, r] = K([]), a = (s) => r([...n.filter((c) => c.id !== s.id), { ...s }]);
  H(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, c, f) => xe.toArray(s).map((u) => u.props.__TYPE === c ? we(u, { ...u.props, ...f }) : u);
  return xe.map(e, (s) => {
    var c, f;
    return Ze(s) ? ((c = s == null ? void 0 : s.props) == null ? void 0 : c.__TYPE) === "InputStyle" ? we(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? we(s, { ...s.props, onValue: a }) : s : null;
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
  __TYPE: pe("InputStyle")
};
Ra.defaultProps = {
  __TYPE: "InputStyle"
};
const Pa = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${hn["c-input__left-addon"]} ${t ?? ""}`, children: e });
Pa.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  __TYPE: pe("InputLeftAddon")
};
Pa.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const $a = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${hn["c-input__right-addon"]} ${t ?? ""}`, children: e });
$a.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  __TYPE: pe("InputRightAddon")
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
const Ia = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = xe.map(e, (i) => {
    var l;
    return ((l = i == null ? void 0 : i.props) == null ? void 0 : l.__TYPE) === "Icon" ? we(i, { ...i.props, addClass: Aa["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
Ia.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: pe("ListItem")
};
Ia.defaultProps = {
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
    function f(u, d) {
      mr(this, f), this._inertManager = d, this._rootElement = u, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
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
        l(d, function(_) {
          return v._visitNode(_);
        });
        var h = document.activeElement;
        if (!document.body.contains(d)) {
          for (var b = d, g = void 0; b; ) {
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              g = /** @type {!ShadowRoot} */
              b;
              break;
            }
            b = b.parentNode;
          }
          g && (h = g.activeElement);
        }
        d.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
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
        l(d, function(h) {
          return v._unmanageNode(h);
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
        v || (this._inertManager.setInert(d, !0), v = this._inertManager.getInertRoot(d)), v.managedNodes.forEach(function(h) {
          this._manageNode(h.node);
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
        d.forEach(function(h) {
          var b = (
            /** @type {!HTMLElement} */
            h.target
          );
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
    function f(u, d) {
      mr(this, f), this._node = u, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([d]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
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
    function f(u) {
      if (mr(this, f), !u)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = u, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(u.head || u.body || u.documentElement), u.readyState === "loading" ? u.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return hr(f, [{
      key: "setInert",
      value: function(d, v) {
        if (v) {
          if (this._inertRoots.has(d))
            return;
          var h = new r(d, this);
          if (d.setAttribute("inert", ""), this._inertRoots.set(d, h), !this._document.body.contains(d))
            for (var b = d.parentNode; b; )
              b.nodeType === 11 && s(b), b = b.parentNode;
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
        var h = this._managedNodes.get(d);
        return h !== void 0 ? h.addInertRoot(v) : h = new a(d, v), this._managedNodes.set(d, h), h;
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
        var h = this._managedNodes.get(d);
        return h ? (h.removeInertRoot(v), h.destroyed && this._managedNodes.delete(d), h) : null;
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
        var h = this;
        d.forEach(function(b) {
          switch (b.type) {
            case "childList":
              e.call(b.addedNodes).forEach(function(x) {
                if (x.nodeType === Node.ELEMENT_NODE) {
                  var P = e.call(x.querySelectorAll("[inert]"));
                  t.call(x, "[inert]") && P.unshift(x), P.forEach(function(C) {
                    this.setInert(C, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (b.attributeName !== "inert")
                return;
              var g = (
                /** @type {!HTMLElement} */
                b.target
              ), _ = g.hasAttribute("inert");
              h.setInert(g, _);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function l(f, u, d) {
    if (f.nodeType == Node.ELEMENT_NODE) {
      var v = (
        /** @type {!HTMLElement} */
        f
      );
      u && u(v);
      var h = (
        /** @type {!HTMLElement} */
        v.shadowRoot
      );
      if (h) {
        l(h, u);
        return;
      }
      if (v.localName == "content") {
        for (var b = (
          /** @type {!HTMLContentElement} */
          v
        ), g = b.getDistributedNodes ? b.getDistributedNodes() : [], _ = 0; _ < g.length; _++)
          l(g[_], u);
        return;
      }
      if (v.localName == "slot") {
        for (var x = (
          /** @type {!HTMLSlotElement} */
          v
        ), P = x.assignedNodes ? x.assignedNodes({ flatten: !0 }) : [], C = 0; C < P.length; C++)
          l(P[C], u);
        return;
      }
    }
    for (var $ = f.firstChild; $ != null; )
      l($, u), $ = $.nextSibling;
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
    var c = new i(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      /** @this {!HTMLElement} */
      get: function() {
        return this.hasAttribute("inert");
      },
      /** @this {!HTMLElement} */
      set: function(u) {
        c.setInert(this, u);
      }
    });
  }
})();
const Hn = Ke(), cc = Object.freeze({
  ESC: 27
}), Na = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = U(), i = (f) => {
    const u = document.querySelector("#root");
    u.inert = f;
  }, l = (f) => {
    (f.keyCode || f.which) === cc.ESC && c();
  }, s = (f, u) => {
    a.current.classList.replace(f, u);
  }, c = () => {
    s("animate__fadeIn", "animate__fadeOut"), setTimeout(() => {
      s("animate__fadeOut", "animate__fadeIn"), i(!1), n(!t), Object.keys(r).length !== 0 && r.current.focus();
    }, 500);
  };
  return H(() => (t && (i(!0), a.current && a.current.focus()), () => {
    document.querySelector("#root").hasAttribute("inert") && i(!1);
  }), [t]), /* @__PURE__ */ p(Hn.Provider, { value: { isOpen: t, onKeyDown: l, onCloseModal: c, refModal: a }, children: /* @__PURE__ */ p(Gt, { id: "js-modal", children: Be(e, ["ModalContent", "ModalOverlay"]) }) });
};
Na.defaultProps = {
  label: "Default modal label",
  isOpen: !1
};
Na.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  label: o.string.isRequired,
  finalFocusRef: o.object.isRequired
};
const Nn = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, ka = ({ label: e, addClass: t, children: n, onClick: r, onKeyDown: a, __TYPE: i, ...l }) => {
  const { isOpen: s, onKeyDown: c, onCloseModal: f, refModal: u } = be(Hn), d = (h) => {
    r && typeof r == "function" && r(h), f();
  };
  return /* @__PURE__ */ I(
    "div",
    {
      ref: u,
      role: "dialog",
      tabIndex: "-1",
      hidden: !s,
      "aria-label": e,
      "aria-modal": "true",
      "data-type": i,
      onKeyDown: (h) => {
        a && typeof a == "function" && a(h), c(h);
      },
      className: `${Nn["c-modal"]} animate__animated animate__fadeIn animate__faster u-px-3 u-py-3 class-video-interpreter-ui-modal ${t ?? ""}`,
      ...l,
      children: [
        /* @__PURE__ */ p("div", { className: `${Nn["c-modal-container"]}`, children: n }),
        /* @__PURE__ */ p(Dt, { addClass: Nn["c-close-button"], label: "Cerrar modal", hasAriaLabel: !0, onClick: d, children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "close", d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" }) }) }) })
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
  __TYPE: pe("ModalContent")
};
ka.defaultProps = {
  label: "Default modal label",
  __TYPE: "ModalContent"
};
const Ma = ({ addClass: e, onClick: t }) => {
  const { isOpen: n, onCloseModal: r } = be(Hn), a = (i) => {
    t && typeof t == "function" && t(i), r();
  };
  return /* @__PURE__ */ p("div", { className: `${Nn["c-layout"]} ${e ?? ""}`, onClick: a, hidden: !n });
};
Ma.propTypes = {
  addClass: o.string,
  onClick: o.func,
  __TYPE: pe("ModalOverlay")
};
Ma.defaultProps = {
  __TYPE: "ModalOverlay"
};
const uc = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = be(Hn), r = (a) => {
    t && t(a), n();
  };
  return we(e, { ...e.props, onClick: r });
};
uc.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const Vt = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, Gn = Ke(), La = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: l, onValue: s }) => {
  const [c, f] = K(r || 0), u = () => {
    if (n && c > i)
      return f(i);
    f((b) => b + l);
  }, d = () => {
    if (n && c < a)
      return f(a);
    f((b) => b - l);
  }, v = (b) => f(b), h = (b) => n && c === b;
  return H(() => {
    s && s(c);
  }, [c, s]), /* @__PURE__ */ p(
    Gn.Provider,
    {
      value: {
        counter: c,
        min: a || Number.MIN_SAFE_INTEGER,
        max: i || Number.MAX_SAFE_INTEGER,
        validate: h,
        onChangeValue: v,
        onIncrementValue: u,
        onDecrementValue: d
      },
      children: /* @__PURE__ */ p("div", { className: `${Vt["c-number-input"]} ${t ?? ""}`, children: Be(e, ["NumberInputField", "NumberInputStepper"]) })
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
const Fa = lt(({ id: e, name: t, label: n, pattern: r, addClass: a, isLabelVisible: i }, l) => {
  const { counter: s, onChangeValue: c, onIncrementValue: f, onDecrementValue: u, min: d, max: v } = be(Gn), h = ue(() => e || vt("c-number-input-"), [e]), b = Object.freeze({
    UP: 38,
    DOWN: 40,
    END: 35,
    HOME: 36
  }), g = ({ target: x }) => {
    if (!isNaN(x.value) && x.value)
      return c(parseInt(x.value));
    c(0);
  }, _ = (x) => {
    switch (x.keyCode || x.which) {
      case b.UP:
        f();
        break;
      case b.DOWN:
        u();
        break;
      case b.END:
        c(v);
        break;
      case b.HOME:
        c(d);
        break;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ I("label", { htmlFor: h, className: `${Vt["c-number-input__label"]} ${a ?? ""}`, children: [
    /* @__PURE__ */ I("span", { className: `${!i && "u-sr-only"}`, children: [
      " ",
      n,
      " "
    ] }),
    /* @__PURE__ */ p(
      "input",
      {
        id: h,
        ref: l,
        type: "text",
        name: t,
        role: "spinbutton",
        inputMode: "decimal",
        pattern: r,
        autoCorrect: "off",
        autoComplete: "off",
        className: Vt["c-number-input__input"],
        onChange: g,
        onKeyDown: _,
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
Fa.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Fa.propTypes = {
  id: o.string,
  name: o.string,
  label: o.string,
  pattern: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  __TYPE: pe("NumberInputField")
};
const ja = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${Vt["c-number-input__stepper"]} ${t ?? ""}`, children: Be(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
ja.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: pe("NumberInputStepper")
};
ja.defaultProps = {
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
      className: `${Vt["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
Ba.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: pe("NumberDecrementStepper"),
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
      className: `${Vt["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
Va.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: pe("NumberIncrementStepper"),
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
    showFirstButton: c = !1,
    showLastButton: f = !1,
    siblingCount: u = 1,
    ...d
  } = e, [v, h] = K(r), b = (w, E) => {
    h(E), s && s(w, E);
  }, g = (w, E) => {
    const A = E - w + 1;
    return Array.from({ length: A }, (L, N) => w + N);
  }, _ = g(1, Math.min(t, n)), x = g(Math.max(n - t + 1, t + 1), n), P = Math.max(
    Math.min(
      // Inicio natural
      v - u,
      // Limite inferior cuando la página es mayor
      n - t - u * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), C = Math.min(
    Math.max(
      // Final natural
      v + u,
      // Limite superior cuando la página es menor
      t + u * 2 + 2
    ),
    // Menor que el endPages
    x.length > 0 ? x[0] - 2 : n - 1
  ), $ = [
    ...c ? ["first"] : [],
    ...l ? [] : ["previous"],
    ..._,
    // Comienza el ellipsis
    ...P > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...g(P, C),
    // Finaliza el ellipsis
    ...C < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...x,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], y = (w) => {
    switch (w) {
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
    items: $.map((w) => typeof w == "number" ? {
      onClick: (E) => {
        b(E, w);
      },
      type: "page",
      page: w,
      selected: w === v,
      disabled: a,
      "aria-current": w === v ? !0 : void 0
    } : {
      onClick: (E) => {
        b(E, y(w));
      },
      type: w,
      page: y(w),
      selected: !1,
      disabled: a || w.indexOf("ellipsis") === -1 && (w === "next" || w === "last" ? v >= n : v <= 1)
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
  ) : we(
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
      f ? i ? /* @__PURE__ */ p(_e, { path: f }, t) : /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: f }) }, t) : null
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
  const [r, a] = K(1), i = U({
    index: [],
    counter: 0
  }), l = (c) => a(c), s = (c) => r === c;
  return H(() => {
    t !== void 0 && a(t);
  }, [t]), /* @__PURE__ */ p(Zn.Provider, { value: { validation: s, onToggle: l, listId: i.current.index, currentSection: r, IdToSection: i }, children: /* @__PURE__ */ p("div", { className: `${Ft["c-panel"]} ${n ?? ""} class-video-interpreter-ui-panel`, children: e }) });
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
function hc({ current: e }) {
  const t = e.counter += 1;
  return e.index.push(t), t;
}
const Ya = lt(({ children: e, addClass: t, __TYPE: n, ...r }, a) => {
  const { validation: i, IdToSection: l } = be(Zn), s = ue(() => hc(l), []), c = i(s);
  return /* @__PURE__ */ I(
    "section",
    {
      ref: a,
      role: "tabpanel",
      hidden: !c,
      "data-type": n,
      "aria-hidden": !c,
      "data-value": s - 1,
      "aria-labelledby": `section-${s}`,
      className: `${Ft["c-section"]} ${t ?? ""}`,
      ...r,
      children: [
        /* @__PURE__ */ I("span", { id: `section-${s}`, className: "u-sr-only", children: [
          "Sección ",
          s
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
  __TYPE: pe("Section")
};
Ya.defaultProps = {
  __TYPE: "Section"
};
const mc = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), gc = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${mc[e]} sección`, za = ({ renderItem: e, showPrevButton: t, showNextButton: n, icons: r, label: a, orientation: i, onValue: l, addClass: s, getItemAriaLabel: c }) => {
  const { validation: f, onToggle: u, listId: d, currentSection: v } = be(Zn), [h, b] = K([]);
  H(() => {
    d.length !== 0 && b(d);
  }, [d]);
  const g = U([]), _ = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), x = Object.freeze({
    previous: v - 1,
    next: v + 1
  }), P = {
    previous: (r == null ? void 0 : r.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (r == null ? void 0 : r.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" })
  }, C = [
    // Botón para navegar a la sección anterior.
    ...t ? ["previous"] : [],
    // Lista de todas la secciones.
    ...h || [],
    // Botón para navegar a la siguiente sección.
    ...n ? ["next"] : []
  ], $ = (E) => !g.current.includes(E) && E ? g.current = [...g.current, E] : g.current, y = (E) => {
    const A = g.current[0], L = g.current[g.current.length - 1];
    if ((E.keyCode || E.which) === _.LEFT)
      if (E.target === A)
        L.focus();
      else {
        const N = g.current.indexOf(E.target) - 1;
        g.current[N].focus();
      }
    else if ((E.keyCode || E.which) === _.RIGHT)
      if (E.target === L)
        A.focus();
      else {
        const N = g.current.indexOf(E.target) + 1;
        g.current[N].focus();
      }
  }, S = (E) => {
    u(E), l !== void 0 && l(E, h.length);
  }, w = C.map((E) => typeof E == "number" ? {
    onClick: (A) => {
      S(E);
    },
    type: "section",
    section: E,
    selected: f(E),
    ref: $,
    onKeyDown: y
  } : {
    onClick: () => {
      S(x[E]);
    },
    type: E,
    section: x[E],
    selected: !1,
    disabled: E === "next" ? v >= h.length : v <= 1
  });
  return H(() => {
    l !== void 0 && l(v, h.length);
  }, []), /* @__PURE__ */ I(ft, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: `${Ft["c-navigation"]} ${s ?? ""}`,
        children: e ? e(w) : w.map(({ section: E, type: A, selected: L, ...N }, Q) => /* @__PURE__ */ p("li", { role: "presentation", className: Ft["c-navigation__item"], children: A === "section" ? /* @__PURE__ */ p(
          "button",
          {
            id: `navigation-section-tab-${E}`,
            role: "tab",
            tabIndex: `${L ? 0 : -1}`,
            "aria-selected": L,
            className: Ft["c-navigation__section"],
            "aria-label": c(A, E, L),
            ...N
          }
        ) : /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            className: `${Ft["c-navigation__button"]}`,
            "aria-label": c(A, E, L),
            ...N,
            children: P[A] ? r ? /* @__PURE__ */ p(_e, { path: P[A] }, A) : /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: P[A] }) }, A) : null
          }
        ) }, `navigation-section-item-${Q}`))
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
  getItemAriaLabel: gc
};
const bc = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = be(Zn), a = (i) => {
    r(t), n && n(i);
  };
  return xe.map(e, (i) => we(i, { ...i.props, onClick: a }));
};
bc.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const yc = {
  "c-paper": "_c-paper_1sbf6_1"
}, _c = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = U(null);
  return zo(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p("div", { ref: a, className: `${yc["c-paper"]} ${n ?? ""}`, ...r, children: e });
};
_c.propTypes = {
  children: o.oneOfType([o.element, o.node, o.arrayOf(o.element), o.arrayOf(o.node)]),
  addClass: o.string,
  color: o.string
};
const wc = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, xc = (e) => {
  document.body.append(e);
}, Ec = (e) => {
  const t = U(null);
  H(() => {
    const r = document.querySelector(`#${e}`), a = r || wc(e);
    return r || xc(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, Gt = ({ children: e, id: t }) => {
  const n = Ec(t);
  return Uo(e, n);
};
Gt.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const Tc = "_row_1adiy_1", Oc = {
  row: Tc
}, Sc = lt(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Oc.row} ${e ?? ""}`, ...t }));
Sc.propTypes = {
  addClass: o.string
};
const Dn = {
  "c-select-wrapper": "_c-select-wrapper_h7ld5_8",
  "c-select": "_c-select_h7ld5_8",
  "c-select__icon": "_c-select__icon_h7ld5_35"
}, Wa = lt(({ children: e, id: t, placeholder: n, label: r, icon: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: c, onChoise: f, defaultValue: u }, d) => {
  const v = ue(() => t || vt("c-select-"), [t]), h = ({ target: b }) => {
    f && f({ id: v, value: b.value });
  };
  return /* @__PURE__ */ I("label", { htmlFor: v, ...i && { className: `${i}` }, children: [
    /* @__PURE__ */ I("span", { className: `${!l && "u-sr-only"}`, children: [
      " ",
      r,
      " "
    ] }),
    /* @__PURE__ */ I("div", { className: Dn["c-select-wrapper"], children: [
      /* @__PURE__ */ I(
        "select",
        {
          id: v,
          ref: d,
          name: v,
          defaultValue: u,
          className: Dn["c-select"],
          onChange: h,
          disabled: s,
          required: c,
          children: [
            /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
            Be(e, ["option", "optgroup"])
          ]
        }
      ),
      a ? /* @__PURE__ */ p(_e, { path: a, addClass: Dn["c-select__icon"] }) : /* @__PURE__ */ p(_e, { addClass: Dn["c-select__icon"], children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
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
  __TYPE: pe("Select")
};
const Cc = ({ children: e, onAllSelect: t }) => {
  const [n, r] = K([]), a = (l) => r([...n.filter((s) => s.id !== l.id), { ...l }]);
  return H(() => {
    t && t(n);
  }, [n, t]), xe.map(e, (l) => {
    var s;
    return Ze(l) ? ((s = l == null ? void 0 : l.props) == null ? void 0 : s.__TYPE) === "Select" ? we(l, { ...l.props, onChoise: a }) : l : null;
  });
};
Cc.propTypes = {
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
}), Ua = lt(({ id: e, name: t, size: n, value: r, label: a, addClass: i, isDisabled: l, defaultChecked: s, isLabelVisible: c, onChange: f }, u) => {
  const [d, v] = K(!1), h = ue(() => e || vt("c-input-"), [e]), b = ({ target: _ }) => {
    if (v(_.checked), !!f) {
      if (_.checked) {
        f({ id: _.id, value: _.value });
        return;
      }
      f({ id: _.id, value: "" });
    }
  }, g = (_) => {
    ((_.keyCode || _.which) === $o.SPACE || (_.keyCode || _.which) === $o.ENTER) && v((x) => (f && f(x ? { id: h, value: "" } : { id: h, value: `${r}` }), !x));
  };
  return H(() => (s && v(!!s), () => {
    v(!1);
  }), [s]), /* @__PURE__ */ I("label", { htmlFor: h, className: `${gr["c-label"]} ${gr[`is-${n}`]}`, children: [
    /* @__PURE__ */ I("span", { className: `${!c && "u-sr-only"}`, children: [
      " ",
      a,
      " "
    ] }),
    /* @__PURE__ */ p(
      "input",
      {
        id: h,
        ref: u,
        role: "switch",
        type: "checkbox",
        name: t,
        value: r,
        checked: d,
        "aria-disabled": l,
        className: `${gr["c-switch"]} ${i ?? ""}`,
        onChange: b,
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
const Yr = Ke(), Rc = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = K(0), l = (c) => i(c), s = (c) => a === c;
  return H(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(Yr.Provider, { value: { validation: s, onToggle: l }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: Be(e, ["TabList", "TabPanels"]) }) });
};
Rc.propTypes = {
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
}, Ha = ({ children: e, id: t, selected: n, addClass: r, icon: a, addNewRef: i, onNavigation: l, __TYPE: s, ...c }) => {
  const f = U(), { validation: u, onToggle: d } = be(Yr), v = u(t);
  return H(() => (f.current && i(f.current), () => {
    f.current = null;
  }), [f]), /* @__PURE__ */ I(
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
      ...c,
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
  __TYPE: pe("Tab")
};
Ha.defaultProps = {
  __TYPE: "Tab"
};
const Ga = ({ children: e, addClass: t, label: n, orientation: r, __TYPE: a, ...i }) => {
  const l = U([]), s = (d) => l.current = [...l.current, d], c = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  }), f = (d) => {
    const v = l.current[0], h = l.current[l.current.length - 1];
    if ((d.keyCode || d.which) === c.LEFT)
      if (d.target === v)
        h.focus();
      else {
        const b = l.current.indexOf(d.target) - 1;
        l.current[b].focus();
      }
    else if ((d.keyCode || d.which) === c.RIGHT)
      if (d.target === h)
        v.focus();
      else {
        const b = l.current.indexOf(d.target) + 1;
        l.current[b].focus();
      }
  }, u = xe.map(e, (d, v) => Ze(d) ? we(d, { ...d.props, id: v, addNewRef: s, onNavigation: f }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      role: "tablist",
      "data-type": a,
      "aria-label": n,
      "aria-orientation": r,
      className: `${mn["c-tab__list"]} ${t ?? ""}`,
      ...i,
      children: Be(u, ["Tab"])
    }
  );
};
Ga.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  label: o.string,
  orientation: o.string,
  __TYPE: pe("TabList")
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
  __TYPE: pe("TabPanel")
};
Za.defaultProps = {
  __TYPE: "TabPanel"
};
const Ka = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = xe.map(e, (i, l) => Ze(i) ? we(i, { ...i.props, id: l }) : null);
  return /* @__PURE__ */ p("div", { className: `${mn["c-tab__panels"]} ${t ?? ""}`, "data-type": n, ...r, children: Be(a, ["TabPanel"]) });
};
Ka.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  __TYPE: pe("TabPanels")
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
  ({ id: e, value: t, resize: n, placeholder: r, label: a, addClass: i, isLabelVisible: l, isDisabled: s, isRequired: c, onValue: f, ...u }, d) => {
    const v = ue(() => e || vt("c-input-"), [e]), h = ({ target: b }) => {
      f && f({ id: v, value: b.value });
    };
    return /* @__PURE__ */ I("label", { htmlFor: v, className: `${br["c-label"]} ${i ?? ""}`, children: [
      /* @__PURE__ */ I("span", { className: `${!l && "u-sr-only"}`, children: [
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
          required: c,
          placeholder: r,
          autoComplete: "off",
          onChange: h,
          className: `${br["c-textarea"]} ${br[`c-textarea--${n}`]}`,
          ...u
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
const Pc = Wo(({ children: e, theme: t = {} }) => {
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
  return H(() => {
    if (Object.entries(t).length !== 0)
      return n(t), () => {
        t = {};
      };
  }, [t]), e;
});
Pc.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var Do = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, Ao = typeof window < "u" && window.document && window.document.createElement ? $t.useLayoutEffect : $t.useEffect, Fe = "top", He = "bottom", Ge = "right", je = "left", Kn = "auto", xn = [Fe, He, Ge, je], qt = "start", gn = "end", $c = "clippingParents", Ja = "viewport", rn = "popper", Dc = "reference", Io = /* @__PURE__ */ xn.reduce(function(e, t) {
  return e.concat([t + "-" + qt, t + "-" + gn]);
}, []), Qa = /* @__PURE__ */ [].concat(xn, [Kn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qt, t + "-" + gn]);
}, []), Ac = "beforeRead", Ic = "read", Nc = "afterRead", kc = "beforeMain", Mc = "main", Lc = "afterMain", Fc = "beforeWrite", jc = "write", Bc = "afterWrite", Pr = [Ac, Ic, Nc, kc, Mc, Lc, Fc, jc, Bc];
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
function It(e) {
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
function Vc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !qe(i) || !st(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(l) {
      var s = a[l];
      s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function qc(e) {
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
      var a = t.elements[r], i = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = l.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !qe(a) || !st(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(c) {
        a.removeAttribute(c);
      }));
    });
  };
}
const Yc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vc,
  effect: qc,
  requires: ["computeStyles"]
};
function nt(e) {
  return e.split("-")[0];
}
var At = Math.max, qn = Math.min, Yt = Math.round;
function $r() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ei() {
  return !/^((?!chrome|android).)*safari/i.test($r());
}
function zt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && qe(e) && (a = e.offsetWidth > 0 && Yt(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Yt(r.height) / e.offsetHeight || 1);
  var l = It(e) ? Xe(e) : window, s = l.visualViewport, c = !ei() && n, f = (r.left + (c && s ? s.offsetLeft : 0)) / a, u = (r.top + (c && s ? s.offsetTop : 0)) / i, d = r.width / a, v = r.height / i;
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
function Wr(e) {
  var t = zt(e), n = e.offsetWidth, r = e.offsetHeight;
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
function zc(e) {
  return ["table", "td", "th"].indexOf(st(e)) >= 0;
}
function _t(e) {
  return ((It(e) ? e.ownerDocument : (
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
function No(e) {
  return !qe(e) || // https://github.com/popperjs/popper-core/issues/837
  ot(e).position === "fixed" ? null : e.offsetParent;
}
function Wc(e) {
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
  for (var t = Xe(e), n = No(e); n && zc(n) && ot(n).position === "static"; )
    n = No(n);
  return n && (st(n) === "html" || st(n) === "body" && ot(n).position === "static") ? t : n || Wc(e) || t;
}
function Ur(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function un(e, t, n) {
  return At(e, qn(t, n));
}
function Uc(e, t, n) {
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
var Hc = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ri(typeof t != "number" ? t : oi(t, xn));
};
function Gc(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, l = n.modifiersData.popperOffsets, s = nt(n.placement), c = Ur(s), f = [je, Ge].indexOf(s) >= 0, u = f ? "height" : "width";
  if (!(!i || !l)) {
    var d = Hc(a.padding, n), v = Wr(i), h = c === "y" ? Fe : je, b = c === "y" ? He : Ge, g = n.rects.reference[u] + n.rects.reference[c] - l[c] - n.rects.popper[u], _ = l[c] - n.rects.reference[c], x = En(i), P = x ? c === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, C = g / 2 - _ / 2, $ = d[h], y = P - v[u] - d[b], S = P / 2 - v[u] / 2 + C, w = un($, S, y), E = c;
    n.modifiersData[r] = (t = {}, t[E] = w, t.centerOffset = w - S, t);
  }
}
function Zc(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (qe(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ti(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const Kc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Gc,
  effect: Zc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Wt(e) {
  return e.split("-")[1];
}
var Xc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Jc(e) {
  var t = e.x, n = e.y, r = window, a = r.devicePixelRatio || 1;
  return {
    x: Yt(t * a) / a || 0,
    y: Yt(n * a) / a || 0
  };
}
function ko(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, l = e.offsets, s = e.position, c = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, v = l.x, h = v === void 0 ? 0 : v, b = l.y, g = b === void 0 ? 0 : b, _ = typeof u == "function" ? u({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  h = _.x, g = _.y;
  var x = l.hasOwnProperty("x"), P = l.hasOwnProperty("y"), C = je, $ = Fe, y = window;
  if (f) {
    var S = En(n), w = "clientHeight", E = "clientWidth";
    if (S === Xe(n) && (S = _t(n), ot(S).position !== "static" && s === "absolute" && (w = "scrollHeight", E = "scrollWidth")), S = S, a === Fe || (a === je || a === Ge) && i === gn) {
      $ = He;
      var A = d && S === y && y.visualViewport ? y.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[w]
      );
      g -= A - r.height, g *= c ? 1 : -1;
    }
    if (a === je || (a === Fe || a === He) && i === gn) {
      C = Ge;
      var L = d && S === y && y.visualViewport ? y.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[E]
      );
      h -= L - r.width, h *= c ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: s
  }, f && Xc), Q = u === !0 ? Jc({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  if (h = Q.x, g = Q.y, c) {
    var Z;
    return Object.assign({}, N, (Z = {}, Z[$] = P ? "0" : "", Z[C] = x ? "0" : "", Z.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", Z));
  }
  return Object.assign({}, N, (t = {}, t[$] = P ? g + "px" : "", t[C] = x ? h + "px" : "", t.transform = "", t));
}
function Qc(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, l = i === void 0 ? !0 : i, s = n.roundOffsets, c = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = ot(t.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return f.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: nt(t.placement),
    variation: Wt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ko(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ko(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const eu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qc,
  data: {}
};
var An = {
  passive: !0
};
function tu(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, l = r.resize, s = l === void 0 ? !0 : l, c = Xe(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, An);
  }), s && c.addEventListener("resize", n.update, An), function() {
    i && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, An);
    }), s && c.removeEventListener("resize", n.update, An);
  };
}
const nu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tu,
  data: {}
};
var ru = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ru[t];
  });
}
var ou = {
  start: "end",
  end: "start"
};
function Mo(e) {
  return e.replace(/start|end/g, function(t) {
    return ou[t];
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
  return zt(_t(e)).left + Hr(e).scrollLeft;
}
function au(e, t) {
  var n = Xe(e), r = _t(e), a = n.visualViewport, i = r.clientWidth, l = r.clientHeight, s = 0, c = 0;
  if (a) {
    i = a.width, l = a.height;
    var f = ei();
    (f || !f && t === "fixed") && (s = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s + Gr(e),
    y: c
  };
}
function iu(e) {
  var t, n = _t(e), r = Hr(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = At(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = At(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Gr(e), c = -r.scrollTop;
  return ot(a || n).direction === "rtl" && (s += At(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: c
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
function su(e, t) {
  var n = zt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Lo(e, t, n) {
  return t === Ja ? Dr(au(e, n)) : It(t) ? su(t, n) : Dr(iu(_t(e)));
}
function lu(e) {
  var t = dn(Xn(e)), n = ["absolute", "fixed"].indexOf(ot(e).position) >= 0, r = n && qe(e) ? En(e) : e;
  return It(r) ? t.filter(function(a) {
    return It(a) && ti(a, r) && st(a) !== "body";
  }) : [];
}
function cu(e, t, n, r) {
  var a = t === "clippingParents" ? lu(e) : [].concat(t), i = [].concat(a, [n]), l = i[0], s = i.reduce(function(c, f) {
    var u = Lo(e, f, r);
    return c.top = At(u.top, c.top), c.right = qn(u.right, c.right), c.bottom = qn(u.bottom, c.bottom), c.left = At(u.left, c.left), c;
  }, Lo(e, l, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ii(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? nt(r) : null, i = r ? Wt(r) : null, l = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
  switch (a) {
    case Fe:
      c = {
        x: l,
        y: t.y - n.height
      };
      break;
    case He:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Ge:
      c = {
        x: t.x + t.width,
        y: s
      };
      break;
    case je:
      c = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var f = a ? Ur(a) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (i) {
      case qt:
        c[f] = c[f] - (t[u] / 2 - n[u] / 2);
        break;
      case gn:
        c[f] = c[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return c;
}
function bn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, l = i === void 0 ? e.strategy : i, s = n.boundary, c = s === void 0 ? $c : s, f = n.rootBoundary, u = f === void 0 ? Ja : f, d = n.elementContext, v = d === void 0 ? rn : d, h = n.altBoundary, b = h === void 0 ? !1 : h, g = n.padding, _ = g === void 0 ? 0 : g, x = ri(typeof _ != "number" ? _ : oi(_, xn)), P = v === rn ? Dc : rn, C = e.rects.popper, $ = e.elements[b ? P : v], y = cu(It($) ? $ : $.contextElement || _t(e.elements.popper), c, u, l), S = zt(e.elements.reference), w = ii({
    reference: S,
    element: C,
    strategy: "absolute",
    placement: a
  }), E = Dr(Object.assign({}, C, w)), A = v === rn ? E : S, L = {
    top: y.top - A.top + x.top,
    bottom: A.bottom - y.bottom + x.bottom,
    left: y.left - A.left + x.left,
    right: A.right - y.right + x.right
  }, N = e.modifiersData.offset;
  if (v === rn && N) {
    var Q = N[a];
    Object.keys(L).forEach(function(Z) {
      var ne = [Ge, He].indexOf(Z) >= 0 ? 1 : -1, se = [Fe, He].indexOf(Z) >= 0 ? "y" : "x";
      L[Z] += Q[se] * ne;
    });
  }
  return L;
}
function uu(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, l = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? Qa : c, u = Wt(r), d = u ? s ? Io : Io.filter(function(b) {
    return Wt(b) === u;
  }) : xn, v = d.filter(function(b) {
    return f.indexOf(b) >= 0;
  });
  v.length === 0 && (v = d, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(b, g) {
    return b[g] = bn(e, {
      placement: g,
      boundary: a,
      rootBoundary: i,
      padding: l
    })[nt(g)], b;
  }, {});
  return Object.keys(h).sort(function(b, g) {
    return h[b] - h[g];
  });
}
function du(e) {
  if (nt(e) === Kn)
    return [];
  var t = kn(e);
  return [Mo(e), t, Mo(t)];
}
function fu(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !0 : l, c = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, b = h === void 0 ? !0 : h, g = n.allowedAutoPlacements, _ = t.options.placement, x = nt(_), P = x === _, C = c || (P || !b ? [kn(_)] : du(_)), $ = [_].concat(C).reduce(function(j, W) {
      return j.concat(nt(W) === Kn ? uu(t, {
        placement: W,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: b,
        allowedAutoPlacements: g
      }) : W);
    }, []), y = t.rects.reference, S = t.rects.popper, w = /* @__PURE__ */ new Map(), E = !0, A = $[0], L = 0; L < $.length; L++) {
      var N = $[L], Q = nt(N), Z = Wt(N) === qt, ne = [Fe, He].indexOf(Q) >= 0, se = ne ? "width" : "height", ae = bn(t, {
        placement: N,
        boundary: u,
        rootBoundary: d,
        altBoundary: v,
        padding: f
      }), ee = ne ? Z ? Ge : je : Z ? He : Fe;
      y[se] > S[se] && (ee = kn(ee));
      var Ee = kn(ee), he = [];
      if (i && he.push(ae[Q] <= 0), s && he.push(ae[ee] <= 0, ae[Ee] <= 0), he.every(function(j) {
        return j;
      })) {
        A = N, E = !1;
        break;
      }
      w.set(N, he);
    }
    if (E)
      for (var O = b ? 3 : 1, k = function(W) {
        var F = $.find(function(Y) {
          var z = w.get(Y);
          if (z)
            return z.slice(0, W).every(function(X) {
              return X;
            });
        });
        if (F)
          return A = F, "break";
      }, B = O; B > 0; B--) {
        var V = k(B);
        if (V === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const pu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Fo(e, t, n) {
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
function jo(e) {
  return [Fe, Ge, He, je].some(function(t) {
    return e[t] >= 0;
  });
}
function vu(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, l = bn(t, {
    elementContext: "reference"
  }), s = bn(t, {
    altBoundary: !0
  }), c = Fo(l, r), f = Fo(s, a, i), u = jo(c), d = jo(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: f,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const hu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: vu
};
function mu(e, t, n) {
  var r = nt(e), a = [je, Fe].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = i[0], s = i[1];
  return l = l || 0, s = (s || 0) * a, [je, Ge].indexOf(r) >= 0 ? {
    x: s,
    y: l
  } : {
    x: l,
    y: s
  };
}
function gu(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, l = Qa.reduce(function(u, d) {
    return u[d] = mu(d, t.rects, i), u;
  }, {}), s = l[t.placement], c = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = l;
}
const bu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: gu
};
function yu(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ii({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const _u = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: yu,
  data: {}
};
function wu(e) {
  return e === "x" ? "y" : "x";
}
function xu(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !1 : l, c = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, v = n.tether, h = v === void 0 ? !0 : v, b = n.tetherOffset, g = b === void 0 ? 0 : b, _ = bn(t, {
    boundary: c,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), x = nt(t.placement), P = Wt(t.placement), C = !P, $ = Ur(x), y = wu($), S = t.modifiersData.popperOffsets, w = t.rects.reference, E = t.rects.popper, A = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, L = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Q = {
    x: 0,
    y: 0
  };
  if (S) {
    if (i) {
      var Z, ne = $ === "y" ? Fe : je, se = $ === "y" ? He : Ge, ae = $ === "y" ? "height" : "width", ee = S[$], Ee = ee + _[ne], he = ee - _[se], O = h ? -E[ae] / 2 : 0, k = P === qt ? w[ae] : E[ae], B = P === qt ? -E[ae] : -w[ae], V = t.elements.arrow, j = h && V ? Wr(V) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ni(), F = W[ne], Y = W[se], z = un(0, w[ae], j[ae]), X = C ? w[ae] / 2 - O - z - F - L.mainAxis : k - z - F - L.mainAxis, q = C ? -w[ae] / 2 + O + z + Y + L.mainAxis : B + z + Y + L.mainAxis, D = t.elements.arrow && En(t.elements.arrow), T = D ? $ === "y" ? D.clientTop || 0 : D.clientLeft || 0 : 0, J = (Z = N == null ? void 0 : N[$]) != null ? Z : 0, me = ee + X - J - T, Oe = ee + q - J, $e = un(h ? qn(Ee, me) : Ee, ee, h ? At(he, Oe) : he);
      S[$] = $e, Q[$] = $e - ee;
    }
    if (s) {
      var at, ct = $ === "x" ? Fe : je, it = $ === "x" ? He : Ge, Se = S[y], Je = y === "y" ? "height" : "width", Qe = Se + _[ct], wt = Se - _[it], ht = [Fe, je].indexOf(x) !== -1, xt = (at = N == null ? void 0 : N[y]) != null ? at : 0, Et = ht ? Qe : Se - w[Je] - E[Je] - xt + L.altAxis, Ae = ht ? Se + w[Je] + E[Je] - xt - L.altAxis : wt, et = h && ht ? Uc(Et, Se, Ae) : un(h ? Et : Qe, Se, h ? Ae : wt);
      S[y] = et, Q[y] = et - Se;
    }
    t.modifiersData[r] = Q;
  }
}
const Eu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: xu,
  requiresIfExists: ["offset"]
};
function Tu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ou(e) {
  return e === Xe(e) || !qe(e) ? Hr(e) : Tu(e);
}
function Su(e) {
  var t = e.getBoundingClientRect(), n = Yt(t.width) / e.offsetWidth || 1, r = Yt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Cu(e, t, n) {
  n === void 0 && (n = !1);
  var r = qe(t), a = qe(t) && Su(t), i = _t(t), l = zt(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((st(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Zr(i)) && (s = Ou(t)), qe(t) ? (c = zt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Gr(i))), {
    x: l.left + s.scrollLeft - c.x,
    y: l.top + s.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
function Ru(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function(s) {
      if (!n.has(s)) {
        var c = t.get(s);
        c && a(c);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function Pu(e) {
  var t = Ru(e);
  return Pr.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function $u(e) {
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
var Pt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Du = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Bo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Au(e) {
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
        }) == null && console.error(gt(Du, String(t.name), r, r));
      });
    });
  });
}
function Iu(e, t) {
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
var Vo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ku = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", qo = {
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
function Mu(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? qo : a;
  return function(s, c, f) {
    f === void 0 && (f = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qo, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: c
      },
      attributes: {},
      styles: {}
    }, d = [], v = !1, h = {
      state: u,
      setOptions: function(x) {
        var P = typeof x == "function" ? x(u.options) : x;
        g(), u.options = Object.assign({}, i, u.options, P), u.scrollParents = {
          reference: It(s) ? dn(s) : s.contextElement ? dn(s.contextElement) : [],
          popper: dn(c)
        };
        var C = Pu(Nu([].concat(r, u.options.modifiers)));
        if (u.orderedModifiers = C.filter(function(N) {
          return N.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = Iu([].concat(C, u.options.modifiers), function(N) {
            var Q = N.name;
            return Q;
          });
          if (Au($), nt(u.options.placement) === Kn) {
            var y = u.orderedModifiers.find(function(N) {
              var Q = N.name;
              return Q === "flip";
            });
            y || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = ot(c), w = S.marginTop, E = S.marginRight, A = S.marginBottom, L = S.marginLeft;
          [w, E, A, L].some(function(N) {
            return parseFloat(N);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var x = u.elements, P = x.reference, C = x.popper;
          if (!Yo(P, C)) {
            process.env.NODE_ENV !== "production" && console.error(Vo);
            return;
          }
          u.rects = {
            reference: Cu(P, En(C), u.options.strategy === "fixed"),
            popper: Wr(C)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(N) {
            return u.modifiersData[N.name] = Object.assign({}, N.data);
          });
          for (var $ = 0, y = 0; y < u.orderedModifiers.length; y++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(ku);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, y = -1;
              continue;
            }
            var S = u.orderedModifiers[y], w = S.fn, E = S.options, A = E === void 0 ? {} : E, L = S.name;
            typeof w == "function" && (u = w({
              state: u,
              options: A,
              name: L,
              instance: h
            }) || u);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $u(function() {
        return new Promise(function(_) {
          h.forceUpdate(), _(u);
        });
      }),
      destroy: function() {
        g(), v = !0;
      }
    };
    if (!Yo(s, c))
      return process.env.NODE_ENV !== "production" && console.error(Vo), h;
    h.setOptions(f).then(function(_) {
      !v && f.onFirstUpdate && f.onFirstUpdate(_);
    });
    function b() {
      u.orderedModifiers.forEach(function(_) {
        var x = _.name, P = _.options, C = P === void 0 ? {} : P, $ = _.effect;
        if (typeof $ == "function") {
          var y = $({
            state: u,
            name: x,
            instance: h,
            options: C
          }), S = function() {
          };
          d.push(y || S);
        }
      });
    }
    function g() {
      d.forEach(function(_) {
        return _();
      }), d = [];
    }
    return h;
  };
}
var Lu = [nu, _u, eu, Yc, bu, pu, Eu, Kc, hu], Fu = /* @__PURE__ */ Mu({
  defaultModifiers: Lu
}), ju = typeof Element < "u", Bu = typeof Map == "function", Vu = typeof Set == "function", qu = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (Bu && e instanceof Map && t instanceof Map) {
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
    if (Vu && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (qu && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
var Yu = function(t, n) {
  try {
    return Mn(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, zu = [], Jn = function(t, n, r) {
  r === void 0 && (r = {});
  var a = $t.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || zu
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
  }), s = l[0], c = l[1], f = $t.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var b = h.state, g = Object.keys(b.elements);
        mi.flushSync(function() {
          c({
            styles: Do(g.map(function(_) {
              return [_, b.styles[_] || {}];
            })),
            attributes: Do(g.map(function(_) {
              return [_, b.attributes[_]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), u = $t.useMemo(function() {
    var v = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return Yu(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), d = $t.useRef();
  return Ao(function() {
    d.current && d.current.setOptions(u);
  }, [u]), Ao(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Fu, h = v(t, n, u);
      return d.current = h, function() {
        h.destroy(), d.current = null;
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
}, Wu = Object.freeze({
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
  isVisible: c,
  onClick: f
}) => {
  const [u, d] = K(!1), v = U(null), h = U(null), b = ue(() => t || vt("c-Toggletip-"), [t]), g = (y) => d(!1), _ = (y) => {
    d(!u), u && document.activeElement === v.current && !c && setTimeout(() => {
      d((S) => !S);
    }, 100), f && f(y);
  }, x = (y) => {
    (y.keyCode | y.which) === Wu.ESC && u && d(!u);
  }, P = xe.map(e, (y) => Ze(y) ? we(y, {
    ...y.props,
    "aria-describedby": t,
    ref: v,
    onClick: _,
    "data-open": u,
    ...c ? {} : { onBlur: g, onKeyDown: x }
  }) : null), { styles: C, attributes: $ } = Jn(
    v.current,
    h.current,
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
        { name: "eventListeners", enabled: u }
      ]
    }
  );
  return !n || xe.count(e) > 1 || s ? /* @__PURE__ */ p(ft, { children: e }) : /* @__PURE__ */ I(ft, { children: [
    P,
    /* @__PURE__ */ p(Gt, { id: "js-toggletip-portal", children: /* @__PURE__ */ I(
      "div",
      {
        id: b,
        ref: h,
        role: "status",
        className: `${yr["c-toggletip"]} ${u && yr["c-toggletip--active"]} ${a ?? ""}`,
        style: C.popper,
        ...$.popper,
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
}, Uu = Object.freeze({
  ESC: 27
}), li = ({ children: e, id: t, label: n, placement: r, addClass: a, hasArrow: i, distance: l, isDisabled: s }) => {
  const [c, f] = K(!1), u = U(null), d = U(null), v = U(), h = ue(() => t || vt("c-tooltip-"), [t]), b = (w) => {
    c || f(!c);
  }, g = (w) => f(!1), _ = (w) => {
    (!c || document.activeElement !== u.current) && f(!c);
  }, x = () => {
    window.clearTimeout(v.current);
  }, P = (w) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, C = (w) => {
    (w.keyCode | w.which) === Uu.ESC && c && f(!c);
  }, $ = xe.map(e, (w) => Ze(w) ? we(w, {
    ...w.props,
    "aria-describedby": t,
    ref: u,
    onFocus: b,
    onBlur: g,
    onMouseEnter: _,
    onMouseLeave: P,
    onKeyDown: C
  }) : null), { styles: y, attributes: S } = Jn(u.current, d.current, {
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
  });
  return !n || xe.count(e) > 1 || s ? /* @__PURE__ */ p(ft, { children: e }) : /* @__PURE__ */ I(ft, { children: [
    $,
    /* @__PURE__ */ p(Gt, { id: "js-tooltip-portal", children: /* @__PURE__ */ I(
      "div",
      {
        id: h,
        ref: d,
        role: "tooltip",
        "data-open": c,
        onMouseEnter: x,
        onMouseLeave: P,
        className: `${_r["c-tooltip"]} ${c && _r["c-tooltip--active"]} ${a ?? ""}`,
        style: y.popper,
        ...S.popper,
        children: [
          n,
          i && /* @__PURE__ */ p("div", { className: _r["c-tooltip__arrow"], "data-popper-arrow": !0, style: y.arrow })
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
  const [s, c] = K(null), f = [...e.reduce((g, _, x) => [...g, { id: x + 1, ..._ }], [])], u = (g) => f.filter((_) => _.id === g).reduce((_, x) => ({ ..._, ...x }), {}), d = (g) => {
    const _ = document.querySelector("#root");
    _.inert = g;
  }, v = () => {
    c((g) => g < f.length ? g + 1 : g);
  }, h = () => {
    c((g) => g > 0 + 1 ? g - 1 : g);
  }, b = () => {
    c(null), n(!t), d(!1), r && r.current.focus();
  };
  return H(() => {
    t && (c(f.shift().id), d(!0));
  }, [t]), /* @__PURE__ */ p(
    Kr.Provider,
    {
      value: {
        isOpen: t,
        lastId: f.length,
        ...u(s),
        methods: {
          onNext: v,
          onPrev: h,
          onClose: b
        }
      },
      children: /* @__PURE__ */ p(Gt, { id: "js-tour", children: t && /* @__PURE__ */ I(ft, { children: [
        /* @__PURE__ */ p(Hu, {}),
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
  const { isOpen: r, lastId: a, methods: i, id: l, target: s, content: c, placement: f, distance: u, elementClass: d } = be(Kr), v = U(), { onClose: h, onPrev: b, onNext: g } = i, { styles: _, attributes: x } = Jn(document.querySelector(s), v.current, {
    placement: f,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, u || 8]
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
  }), P = () => Ze(c) ? c : hi("p", { className: yt["tour-description"] }, [c]), C = () => {
    v.current.style.setProperty("--speed-movement", "0.8s"), g();
  };
  return /* @__PURE__ */ I(ft, { children: [
    /* @__PURE__ */ p("div", { className: `${yt["c-layout"]}` }),
    /* @__PURE__ */ I(
      "div",
      {
        id: `unique-id-tour-element-${l}`,
        ref: v,
        style: _.popper,
        className: `${yt["c-tour-content"]} ${r && "animate__animated animate__fadeIn animate__faster"} ${d ?? ""}`,
        ...e,
        ...x.popper,
        children: [
          /* @__PURE__ */ I("span", { className: "u-sr-only", children: [
            "Parte ",
            l,
            " de ",
            a,
            "."
          ] }),
          /* @__PURE__ */ p("div", { "aria-hidden": !0, className: yt["c-tour-progress"], children: /* @__PURE__ */ p("div", { className: yt["c-tour-progress-bar"], style: { transform: `scaleX(${l / a})` } }) }),
          P(),
          /* @__PURE__ */ I("div", { className: yt["c-tour-button-container"], children: [
            !t && /* @__PURE__ */ p(Dt, { hasAriaLabel: !0, label: "Salir", onClick: h, icon: { name: "close", size: "big" } }),
            !n && /* @__PURE__ */ p(Dt, { disabled: l === 1, hasAriaLabel: !0, label: "Anterior", onClick: b, icon: { name: "navigate_before", size: "big" } }),
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
const Hu = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r } = be(Kr), [a, i] = K({}), l = () => {
    const { x: s, y: c, width: f, height: u } = document.querySelector(n).getBoundingClientRect();
    i({
      width: `${f}px`,
      height: `${u}px`,
      top: `${c}px`,
      left: `${s}px`
    });
  };
  return H(() => (n && l(), () => {
    i({});
  }), [n]), H(() => {
    if (!e || !n)
      return;
    const s = (c) => {
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
}, Gu = "_active_r3225_90", Zu = "_iconPulse_r3225_1", fe = {
  "c-vid": "_c-vid_r3225_1",
  "c-vid__caption": "_c-vid__caption_r3225_20",
  "c-vid__container": "_c-vid__container_r3225_25",
  "c-vid__video": "_c-vid__video_r3225_44",
  "no-captions": "_no-captions_r3225_56",
  "c-vid__wrapper": "_c-vid__wrapper_r3225_60",
  "c-vid__icon-container": "_c-vid__icon-container_r3225_70",
  "c-vid__icon": "_c-vid__icon_r3225_70",
  active: Gu,
  iconPulse: Zu,
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
  const [s, c] = K({
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
  }), [h, b] = K({
    state: !0,
    label: "Volumen"
  }), [g, _] = K(100), [x, P] = K({
    state: !1,
    label: "Ver en pantalla completa"
  }), [C, $] = K(!1), [y, S] = K(100), w = U(null), E = U(null), A = U(null), L = U(null), N = U(null), Q = U(null), Z = U(null), ne = U(null), [se, ae] = K(!1), ee = (D) => {
    D.classList.add(`${fe.active}`), setTimeout(() => {
      D.classList.remove(`${fe.active}`);
    }, 650);
  };
  function Ee() {
    const D = E.current;
    d.state ? (D.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (D.play(), v({
      state: !0,
      label: "Pausar video"
    })), ee(Q.current);
  }
  function he() {
    const D = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, T = w.current;
    D ? (P({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (P({
      state: !0,
      label: "Salir de pantalla completa"
    }), T.requestFullscreen ? T.requestFullscreen() : T.mozRequestFullScreen ? T.mozRequestFullScreen() : T.webkitRequestFullScreen ? T.webkitRequestFullScreen() : T.msRequestFullscreen && T.msRequestFullscreen());
  }
  function O(D) {
    const T = parseInt(D, 10), J = T >= 3600 ? Math.floor(T / 3600) : 0, me = Math.floor((T - J * 3600) / 60), Oe = T - J * 3600 - me * 60, $e = j(V(J)), at = j(V(me)), ct = j(V(Oe));
    return {
      hours: $e,
      minutes: at,
      seconds: ct
    };
  }
  function k(D) {
    const T = B(D.duration), J = B(D.currentTime);
    u({
      totalSeconds: D.currentTime,
      hours: parseInt(O(D.currentTime).hours),
      minutes: parseInt(O(D.currentTime).minutes),
      seconds: parseInt(O(D.currentTime).seconds),
      string: J
    }), c({
      totalSeconds: Math.floor(D.duration),
      hours: parseInt(O(D.duration).hours),
      minutes: parseInt(O(D.duration).minutes),
      seconds: parseInt(O(D.duration).seconds),
      string: T
    });
  }
  function B(D) {
    return parseInt(D, 10) <= 3600 ? `${O(D).minutes}:${O(D).seconds}` : `${O(D).hours}:${O(D).minutes}:${O(D).seconds}`;
  }
  function V(D) {
    return D < 10 ? D = "0" + D : D;
  }
  function j(D) {
    return isNaN(D) ? "00" : D;
  }
  function W(D) {
    const T = L.current, J = E.current, Oe = D.nativeEvent.offsetX / T.offsetWidth * J.duration;
    J.currentTime = Oe;
  }
  function F(D) {
    const T = E.current, J = D.target.value, me = J / 100;
    S(J), _(J), T.volume = me, h.state || b({
      state: !0,
      label: "Volumen"
    });
  }
  const Y = () => {
    if (h.state) {
      b({
        state: !1,
        label: "Mutear video"
      });
      const D = E.current, T = 0, J = T;
      S(T), D.volume = J;
    } else {
      b({
        state: !0,
        label: "Volumen"
      });
      const D = E.current, T = g, J = T / 100;
      S(T), D.volume = J;
    }
  }, z = function(D) {
    (D.keyCode || D.which) === 32 && Ee();
  }, X = function(D) {
    const T = Math.floor(L.current.getAttribute("aria-valuenow"));
    if (document.activeElement === N.current)
      return null;
    if ((D.keyCode || D.which) === 37) {
      const J = T - 5;
      J >= 0 ? E.current.currentTime = J : E.current.currentTime = 0, ee(ne.current);
    }
    if ((D.keyCode || D.which) === 39) {
      const J = T + 5;
      J >= E.current.duration ? E.current.currentTime = E.current.duration : E.current.currentTime = J, ee(Z.current);
    }
  }, q = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return H(() => {
    const D = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(D, "caption") && ae(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(D, "volume") && S(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), H(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: se, volume: y }));
  }, [se, y]), H(() => (A.current ? A.current.addEventListener("error", () => {
    $(!0);
  }) : $(!0), e.caption && $(!1), () => {
    A.current && A.current.removeEventListener("error", () => {
      $(!0);
    });
  }), [e.caption]), /* @__PURE__ */ I("figure", { className: `${fe["c-vid"]} ${a}`, style: { maxWidth: `${t}px` }, onKeyDown: (D) => X(D), ...l, children: [
    /* @__PURE__ */ I("div", { className: `${fe["c-vid__container"]} ${a}`, ref: w, children: [
      /* @__PURE__ */ I("div", { className: fe["c-vid__wrapper"], children: [
        /* @__PURE__ */ I(
          "video",
          {
            ref: E,
            onTimeUpdate: (D) => k(D.target),
            onLoadedData: (D) => k(D.target),
            onClick: Ee,
            className: `${fe["c-vid__video"]} ${se ? "" : fe["no-captions"]}`,
            ...i && { poster: i },
            children: [
              /* @__PURE__ */ p("source", { src: e.video }),
              e.caption ? /* @__PURE__ */ p("track", { ref: A, src: e.caption, label: "Subtítulos en español", kind: "subtitles", srcLang: "es", default: !0 }) : ""
            ]
          }
        ),
        /* @__PURE__ */ I("div", { className: fe["c-vid__icon-container"], children: [
          /* @__PURE__ */ p("div", { ref: ne, className: fe["c-vid__icon"], children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: Q, className: fe["c-vid__icon"], children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
          /* @__PURE__ */ p("div", { ref: Z, className: fe["c-vid__icon"], children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { className: fe["progress-container"], children: /* @__PURE__ */ I(
        "div",
        {
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
          children: [
            /* @__PURE__ */ p(
              "div",
              {
                className: fe["c-vid__progress-bar"],
                style: {
                  transform: `scaleX(calc(${f.totalSeconds} / ${s.totalSeconds}))`
                }
              }
            ),
            /* @__PURE__ */ p(
              "div",
              {
                className: fe["progress-sphere"],
                style: {
                  left: `min(calc((${f.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
                }
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ I("div", { className: fe["c-vid__controls"], children: [
        /* @__PURE__ */ p(
          "button",
          {
            className: `${fe["c-vid__button"]} tour`,
            "aria-label": d.label,
            onClick: Ee,
            "data-description": "Este botón reproduce el video",
            children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: d.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
          }
        ),
        /* @__PURE__ */ p(
          "button",
          {
            className: `${fe["c-vid__button"]} tour`,
            "aria-label": h.label,
            "data-description": "Este botón controla el volumen",
            onClick: Y,
            children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: h.state ? /* @__PURE__ */ p("path", { id: "volume_on", d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z" }) : /* @__PURE__ */ p("path", { id: "volume_off", d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z" }) }) })
          }
        ),
        /* @__PURE__ */ I("label", { className: fe["c-vid__volume"], htmlFor: "volumeControl", children: [
          /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: fe["c-vid__volume-item"],
              ref: N,
              id: "volumeControl",
              type: "range",
              min: "0",
              max: "100",
              step: "5",
              value: y,
              onChange: F,
              "aria-valuetext": `${y}%`
            }
          )
        ] }),
        /* @__PURE__ */ I("p", { className: fe["c-vid__time"], "aria-hidden": "true", children: [
          /* @__PURE__ */ p("span", { children: f.string }),
          "/",
          /* @__PURE__ */ p("span", { children: s.string })
        ] }),
        /* @__PURE__ */ p(
          "button",
          {
            disabled: C,
            "aria-pressed": C ? void 0 : se,
            onClick: () => ae(!se),
            "aria-label": "Subtítulos",
            className: `${fe["c-vid__button"]} ${fe["c-vid__subtitles"]}`,
            children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: C ? /* @__PURE__ */ p("path", { id: "closed_caption_disabled", d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z" }) : /* @__PURE__ */ p("path", { id: "closed_caption", d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z" }) }) })
          }
        ),
        /* @__PURE__ */ p("button", { className: fe["c-vid__button"], "aria-label": x.label, onClick: he, children: /* @__PURE__ */ p(_e, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: x.state ? /* @__PURE__ */ p("path", { id: "fullscreen_exit", d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z" }) : /* @__PURE__ */ p("path", { id: "fullscreen", d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z" }) }) }) })
      ] })
    ] }),
    n && /* @__PURE__ */ I("figcaption", { className: fe["c-vid__caption"], children: [
      /* @__PURE__ */ I("strong", { children: [
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
  const [n, r] = K(!1), a = U(), i = () => r(!n), l = (s) => {
    a.current || (a.current = s);
  };
  return H(() => {
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
const Ku = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r } = be(Xr);
  if (xe.count(e) > 1)
    return null;
  const a = (l) => {
    n(), t && t(l);
  }, i = (l) => Ze(l) ? we(l, {
    ...l.props,
    ref: r,
    onClick: a
  }) : null;
  return xe.map(e, i);
};
Ku.propTypes = {
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
}), pi = ({ children: e, addClass: t, hasArrow: n, isDisabled: r, distance: a, placement: i }) => {
  const { isOpen: l, refButton: s } = be(Xr), c = U(), f = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', u = (h) => {
    const b = c.current.querySelectorAll(f), g = s.current, _ = b[0], x = b[b.length - 1];
    if ((h.keyCode || h.which) === xr.TAB && document.activeElement === x)
      return g.focus(), h.preventDefault();
    h.shiftKey && (h.keyCode || h.which) === xr.TAB && document.activeElement === _ && (g.focus(), h.preventDefault()), (h.keyCode || h.which) === xr.ESC && g.focus();
  }, { styles: d, attributes: v } = Jn(s.current, c.current, {
    placement: i,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, a || 8]
        }
      },
      {
        name: "flip",
        options: {
          padding: 10
        }
      },
      { name: "eventListeners", enabled: l }
    ]
  });
  return H(() => {
    l && c.current.focus();
  }, [l]), r ? /* @__PURE__ */ p(ft, { children: e }) : /* @__PURE__ */ p(Gt, { id: "js-popover-modal-portal", children: /* @__PURE__ */ I(
    "div",
    {
      ref: c,
      role: "status",
      tabIndex: -1,
      className: `${wr["c-popover-modal"]} ${l && wr["c-popover-modal--active"]} ${t ?? ""}`,
      style: d.popper,
      onKeyDown: u,
      ...v.popper,
      children: [
        e,
        n && /* @__PURE__ */ p("div", { className: wr["c-popover-modal__arrow"], "data-popper-arrow": !0, style: d.arrow })
      ]
    }
  ) });
};
pi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
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
const Xu = (e, t) => {
  const [n, r] = K(() => {
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
}, Ju = (e, t, n) => {
  const [r, a] = K(n), i = e.map((s) => window.matchMedia(s)), l = () => {
    const s = i.findIndex((c) => c.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return H(() => {
    a(l);
    const s = (c) => a(l);
    return i.forEach((c) => c.addEventListener("change", s)), () => {
      i.forEach((c) => c.removeEventListener("change", s));
    };
  }, []), r;
}, rd = () => {
  const [e, t] = Xu("dark-mode-enabled"), n = Ju(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return H(() => {
    t(n);
  }, [n]), H(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, Qu = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), od = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || Qu, [a, i] = K(!1), [l, s] = K(null);
  return H(() => {
    if (!l) {
      i(!1);
      return;
    }
    const c = new IntersectionObserver(
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
    return c.observe(l), () => {
      c.unobserve(l);
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
}, ad = (e) => vi(e);
export {
  $i as Accordion,
  Zo as AccordionButton,
  Ko as AccordionItem,
  Xo as AccordionPanel,
  Jo as Audio,
  Dt as Button,
  bc as ButtonSection,
  ta as CheckBox,
  xs as CheckBoxGroup,
  Os as Col,
  Cs as Content,
  xa as DragAndDrop,
  wa as DragAndDropContext,
  Ea as Draggable,
  Ta as Droppable,
  nd as Filter,
  Oa as GeneralDraggable,
  _e as Icon,
  Sa as Image,
  Ca as Input,
  rc as InputGroup,
  Pa as InputLeftAddon,
  $a as InputRightAddon,
  Ra as InputStyle,
  ac as Kbd,
  Da as Link,
  ic as List,
  Ia as ListItem,
  Na as Modal,
  uc as ModalCloseButton,
  ka as ModalContent,
  Hn as ModalContext,
  Ma as ModalOverlay,
  za as NavSection,
  Ba as NumberDecrementStepper,
  Va as NumberIncrementStepper,
  La as NumberInput,
  Gn as NumberInputContext,
  Fa as NumberInputField,
  ja as NumberInputStepper,
  sc as OrderedList,
  qa as Pagination,
  qr as PaginationItem,
  vc as Panel,
  Zn as PanelContext,
  _c as Paper,
  fi as PopoverModal,
  Ku as PopoverModalButton,
  pi as PopoverModalContent,
  Xr as PopoverModalContext,
  Gt as Portal,
  Sc as Row,
  Ya as Section,
  Wa as Select,
  Cc as SelectGroup,
  Ua as Switch,
  Ha as Tab,
  Ga as TabList,
  Za as TabPanel,
  Ka as TabPanels,
  Rc as Tabs,
  Yr as TabsContext,
  Xa as TextArea,
  Pc as ThemeProvider,
  si as Toggletip,
  li as Tooltip,
  ci as Tour,
  Kr as TourContext,
  ui as TourElement,
  Hu as TourHelpLayer,
  lc as UnorderedList,
  di as Video,
  ad as createTheme,
  rd as useDarkMode,
  Xu as useLocalStorage,
  Ju as useMedia,
  od as useOnScreen,
  dc as usePagination,
  Ec as usePortal
};
