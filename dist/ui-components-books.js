import * as Wt from "react";
import Le, { Children as Re, useState as ne, useEffect as J, isValidElement as dt, cloneElement as Pe, forwardRef as _t, useRef as Q, useId as Ct, useLayoutEffect as dr, useMemo as Oe, useCallback as je, createContext as ft, memo as La, useReducer as fo, useContext as Se, createElement as Ts } from "react";
import * as Es from "react-dom";
import ja, { unstable_batchedUpdates as hn, createPortal as Fa } from "react-dom";
var Zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ss(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var a = [null];
        a.push.apply(a, arguments);
        var i = Function.bind.apply(t, a);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Dn = {}, Cs = {
  get exports() {
    return Dn;
  },
  set exports(e) {
    Dn = e;
  }
}, gn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function Ps() {
  if (Lo)
    return gn;
  Lo = 1;
  var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, d, f) {
    var l, u = {}, v = null, h = null;
    f !== void 0 && (v = "" + f), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (h = d.ref);
    for (l in d)
      r.call(d, l) && !i.hasOwnProperty(l) && (u[l] = d[l]);
    if (s && s.defaultProps)
      for (l in d = s.defaultProps, d)
        u[l] === void 0 && (u[l] = d[l]);
    return { $$typeof: t, type: s, key: v, ref: h, props: u, _owner: a.current };
  }
  return gn.Fragment = n, gn.jsx = c, gn.jsxs = c, gn;
}
var mn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function Rs() {
  return jo || (jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function x(g) {
      if (g === null || typeof g != "object")
        return null;
      var $ = m && g[m] || g[b];
      return typeof $ == "function" ? $ : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(g) {
      {
        for (var $ = arguments.length, z = new Array($ > 1 ? $ - 1 : 0), ae = 1; ae < $; ae++)
          z[ae - 1] = arguments[ae];
        O("error", g, z);
      }
    }
    function O(g, $, z) {
      {
        var ae = w.ReactDebugCurrentFrame, fe = ae.getStackAddendum();
        fe !== "" && ($ += "%s", z = z.concat([fe]));
        var he = z.map(function(ce) {
          return String(ce);
        });
        he.unshift("Warning: " + $), Function.prototype.apply.call(console[g], console, he);
      }
    }
    var N = !1, _ = !1, k = !1, T = !1, I = !1, W;
    W = Symbol.for("react.module.reference");
    function Z(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === i || I || g === a || g === f || g === l || T || g === h || N || _ || k || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === u || g.$$typeof === c || g.$$typeof === s || g.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === W || g.getModuleId !== void 0));
    }
    function L(g, $, z) {
      var ae = g.displayName;
      if (ae)
        return ae;
      var fe = $.displayName || $.name || "";
      return fe !== "" ? z + "(" + fe + ")" : z;
    }
    function Y(g) {
      return g.displayName || "Context";
    }
    function U(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
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
        case l:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case s:
            var $ = g;
            return Y($) + ".Consumer";
          case c:
            var z = g;
            return Y(z._context) + ".Provider";
          case d:
            return L(g, g.render, "ForwardRef");
          case u:
            var ae = g.displayName || null;
            return ae !== null ? ae : U(g.type) || "Memo";
          case v: {
            var fe = g, he = fe._payload, ce = fe._init;
            try {
              return U(ce(he));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, oe = 0, X, K, le, ee, C, j, y;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function P() {
      {
        if (oe === 0) {
          X = console.log, K = console.info, le = console.warn, ee = console.error, C = console.group, j = console.groupCollapsed, y = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: E,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        oe++;
      }
    }
    function R() {
      {
        if (oe--, oe === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, g, {
              value: X
            }),
            info: G({}, g, {
              value: K
            }),
            warn: G({}, g, {
              value: le
            }),
            error: G({}, g, {
              value: ee
            }),
            group: G({}, g, {
              value: C
            }),
            groupCollapsed: G({}, g, {
              value: j
            }),
            groupEnd: G({}, g, {
              value: y
            })
          });
        }
        oe < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var S = w.ReactCurrentDispatcher, M;
    function V(g, $, z) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (fe) {
            var ae = fe.stack.trim().match(/\n( *(at )?)/);
            M = ae && ae[1] || "";
          }
        return `
` + M + g;
      }
    }
    var H = !1, q;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      q = new de();
    }
    function F(g, $) {
      if (!g || H)
        return "";
      {
        var z = q.get(g);
        if (z !== void 0)
          return z;
      }
      var ae;
      H = !0;
      var fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var he;
      he = S.current, S.current = null, P();
      try {
        if ($) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (Et) {
              ae = Et;
            }
            Reflect.construct(g, [], ce);
          } else {
            try {
              ce.call();
            } catch (Et) {
              ae = Et;
            }
            g.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            ae = Et;
          }
          g();
        }
      } catch (Et) {
        if (Et && ae && typeof Et.stack == "string") {
          for (var se = Et.stack.split(`
`), Ve = ae.stack.split(`
`), Ee = se.length - 1, Ce = Ve.length - 1; Ee >= 1 && Ce >= 0 && se[Ee] !== Ve[Ce]; )
            Ce--;
          for (; Ee >= 1 && Ce >= 0; Ee--, Ce--)
            if (se[Ee] !== Ve[Ce]) {
              if (Ee !== 1 || Ce !== 1)
                do
                  if (Ee--, Ce--, Ce < 0 || se[Ee] !== Ve[Ce]) {
                    var at = `
` + se[Ee].replace(" at new ", " at ");
                    return g.displayName && at.includes("<anonymous>") && (at = at.replace("<anonymous>", g.displayName)), typeof g == "function" && q.set(g, at), at;
                  }
                while (Ee >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        H = !1, S.current = he, R(), Error.prepareStackTrace = fe;
      }
      var Kt = g ? g.displayName || g.name : "", ko = Kt ? V(Kt) : "";
      return typeof g == "function" && q.set(g, ko), ko;
    }
    function B(g, $, z) {
      return F(g, !1);
    }
    function te(g) {
      var $ = g.prototype;
      return !!($ && $.isReactComponent);
    }
    function ie(g, $, z) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return F(g, te(g));
      if (typeof g == "string")
        return V(g);
      switch (g) {
        case f:
          return V("Suspense");
        case l:
          return V("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case d:
            return B(g.render);
          case u:
            return ie(g.type, $, z);
          case v: {
            var ae = g, fe = ae._payload, he = ae._init;
            try {
              return ie(he(fe), $, z);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Ie = {}, pt = w.ReactDebugCurrentFrame;
    function Fe(g) {
      if (g) {
        var $ = g._owner, z = ie(g.type, g._source, $ ? $.type : null);
        pt.setExtraStackFrame(z);
      } else
        pt.setExtraStackFrame(null);
    }
    function we(g, $, z, ae, fe) {
      {
        var he = Function.call.bind(ge);
        for (var ce in g)
          if (he(g, ce)) {
            var se = void 0;
            try {
              if (typeof g[ce] != "function") {
                var Ve = Error((ae || "React class") + ": " + z + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ve.name = "Invariant Violation", Ve;
              }
              se = g[ce]($, ce, ae, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (Fe(fe), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", z, ce, typeof se), Fe(null)), se instanceof Error && !(se.message in Ie) && (Ie[se.message] = !0, Fe(fe), D("Failed %s type: %s", z, se.message), Fe(null));
          }
      }
    }
    var qe = Array.isArray;
    function Xe(g) {
      return qe(g);
    }
    function kt(g) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, z = $ && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return z;
      }
    }
    function Pt(g) {
      try {
        return Lt(g), !1;
      } catch {
        return !0;
      }
    }
    function Lt(g) {
      return "" + g;
    }
    function jt(g) {
      if (Pt(g))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kt(g)), Lt(g);
    }
    var Be = w.ReactCurrentOwner, vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, pn, rt;
    rt = {};
    function Yn(g) {
      if (ge.call(g, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(g, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Er(g) {
      if (ge.call(g, "key")) {
        var $ = Object.getOwnPropertyDescriptor(g, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Sr(g, $) {
      if (typeof g.ref == "string" && Be.current && $ && Be.current.stateNode !== $) {
        var z = U(Be.current.type);
        rt[z] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Be.current.type), g.ref), rt[z] = !0);
      }
    }
    function zn(g, $) {
      {
        var z = function() {
          Rt || (Rt = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: z,
          configurable: !0
        });
      }
    }
    function Cr(g, $) {
      {
        var z = function() {
          pn || (pn = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        z.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: z,
          configurable: !0
        });
      }
    }
    var Wn = function(g, $, z, ae, fe, he, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: $,
        ref: z,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: he
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Pr(g, $, z, ae, fe) {
      {
        var he, ce = {}, se = null, Ve = null;
        z !== void 0 && (jt(z), se = "" + z), Er($) && (jt($.key), se = "" + $.key), Yn($) && (Ve = $.ref, Sr($, fe));
        for (he in $)
          ge.call($, he) && !vt.hasOwnProperty(he) && (ce[he] = $[he]);
        if (g && g.defaultProps) {
          var Ee = g.defaultProps;
          for (he in Ee)
            ce[he] === void 0 && (ce[he] = Ee[he]);
        }
        if (se || Ve) {
          var Ce = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          se && zn(ce, Ce), Ve && Cr(ce, Ce);
        }
        return Wn(g, se, Ve, fe, ae, Be.current, ce);
      }
    }
    var vn = w.ReactCurrentOwner, Un = w.ReactDebugCurrentFrame;
    function ye(g) {
      if (g) {
        var $ = g._owner, z = ie(g.type, g._source, $ ? $.type : null);
        Un.setExtraStackFrame(z);
      } else
        Un.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function Me(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function ht() {
      {
        if (vn.current) {
          var g = U(vn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Ye(g) {
      {
        if (g !== void 0) {
          var $ = g.fileName.replace(/^.*[\\\/]/, ""), z = g.lineNumber;
          return `

Check your code at ` + $ + ":" + z + ".";
        }
        return "";
      }
    }
    var ze = {};
    function ot(g) {
      {
        var $ = ht();
        if (!$) {
          var z = typeof g == "string" ? g : g.displayName || g.name;
          z && ($ = `

Check the top-level render call using <` + z + ">.");
        }
        return $;
      }
    }
    function Tt(g, $) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var z = ot($);
        if (ze[z])
          return;
        ze[z] = !0;
        var ae = "";
        g && g._owner && g._owner !== vn.current && (ae = " It was passed a child from " + U(g._owner.type) + "."), ye(g), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, ae), ye(null);
      }
    }
    function We(g, $) {
      {
        if (typeof g != "object")
          return;
        if (Xe(g))
          for (var z = 0; z < g.length; z++) {
            var ae = g[z];
            Me(ae) && Tt(ae, $);
          }
        else if (Me(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var fe = x(g);
          if (typeof fe == "function" && fe !== g.entries)
            for (var he = fe.call(g), ce; !(ce = he.next()).done; )
              Me(ce.value) && Tt(ce.value, $);
        }
      }
    }
    function Ft(g) {
      {
        var $ = g.type;
        if ($ == null || typeof $ == "string")
          return;
        var z;
        if (typeof $ == "function")
          z = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === u))
          z = $.propTypes;
        else
          return;
        if (z) {
          var ae = U($);
          we(z, g.props, "prop", ae, g);
        } else if ($.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var fe = U($);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(g) {
      {
        for (var $ = Object.keys(g.props), z = 0; z < $.length; z++) {
          var ae = $[z];
          if (ae !== "children" && ae !== "key") {
            ye(g), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), ye(null);
            break;
          }
        }
        g.ref !== null && (ye(g), D("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function Vt(g, $, z, ae, fe, he) {
      {
        var ce = Z(g);
        if (!ce) {
          var se = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = Ye(fe);
          Ve ? se += Ve : se += ht();
          var Ee;
          g === null ? Ee = "null" : Xe(g) ? Ee = "array" : g !== void 0 && g.$$typeof === t ? (Ee = "<" + (U(g.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, se);
        }
        var Ce = Pr(g, $, z, fe, he);
        if (Ce == null)
          return Ce;
        if (ce) {
          var at = $.children;
          if (at !== void 0)
            if (ae)
              if (Xe(at)) {
                for (var Kt = 0; Kt < at.length; Kt++)
                  We(at[Kt], g);
                Object.freeze && Object.freeze(at);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(at, g);
        }
        return g === r ? Bt(Ce) : Ft(Ce), Ce;
      }
    }
    function Xt(g, $, z) {
      return Vt(g, $, z, !0);
    }
    function Hn(g, $, z) {
      return Vt(g, $, z, !1);
    }
    var qt = Hn, Yt = Xt;
    mn.Fragment = r, mn.jsx = qt, mn.jsxs = Yt;
  }()), mn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ps() : e.exports = Rs();
})(Cs);
const lt = Dn.Fragment, p = Dn.jsx, A = Dn.jsxs;
var o = {}, Fo = {
  get exports() {
    return o;
  },
  set exports(e) {
    o = e;
  }
}, nr = {}, Ds = {
  get exports() {
    return nr;
  },
  set exports(e) {
    nr = e;
  }
}, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function Ns() {
  if (Bo)
    return pe;
  Bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function O(_) {
    if (typeof _ == "object" && _ !== null) {
      var k = _.$$typeof;
      switch (k) {
        case t:
          switch (_ = _.type, _) {
            case d:
            case f:
            case r:
            case i:
            case a:
            case u:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case l:
                case m:
                case h:
                case c:
                  return _;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function N(_) {
    return O(_) === f;
  }
  return pe.AsyncMode = d, pe.ConcurrentMode = f, pe.ContextConsumer = s, pe.ContextProvider = c, pe.Element = t, pe.ForwardRef = l, pe.Fragment = r, pe.Lazy = m, pe.Memo = h, pe.Portal = n, pe.Profiler = i, pe.StrictMode = a, pe.Suspense = u, pe.isAsyncMode = function(_) {
    return N(_) || O(_) === d;
  }, pe.isConcurrentMode = N, pe.isContextConsumer = function(_) {
    return O(_) === s;
  }, pe.isContextProvider = function(_) {
    return O(_) === c;
  }, pe.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, pe.isForwardRef = function(_) {
    return O(_) === l;
  }, pe.isFragment = function(_) {
    return O(_) === r;
  }, pe.isLazy = function(_) {
    return O(_) === m;
  }, pe.isMemo = function(_) {
    return O(_) === h;
  }, pe.isPortal = function(_) {
    return O(_) === n;
  }, pe.isProfiler = function(_) {
    return O(_) === i;
  }, pe.isStrictMode = function(_) {
    return O(_) === a;
  }, pe.isSuspense = function(_) {
    return O(_) === u;
  }, pe.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === f || _ === i || _ === a || _ === u || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === h || _.$$typeof === c || _.$$typeof === s || _.$$typeof === l || _.$$typeof === x || _.$$typeof === w || _.$$typeof === D || _.$$typeof === b);
  }, pe.typeOf = O, pe;
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
var Vo;
function Is() {
  return Vo || (Vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function O(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === r || F === f || F === i || F === a || F === u || F === v || typeof F == "object" && F !== null && (F.$$typeof === m || F.$$typeof === h || F.$$typeof === c || F.$$typeof === s || F.$$typeof === l || F.$$typeof === x || F.$$typeof === w || F.$$typeof === D || F.$$typeof === b);
    }
    function N(F) {
      if (typeof F == "object" && F !== null) {
        var B = F.$$typeof;
        switch (B) {
          case t:
            var te = F.type;
            switch (te) {
              case d:
              case f:
              case r:
              case i:
              case a:
              case u:
                return te;
              default:
                var ie = te && te.$$typeof;
                switch (ie) {
                  case s:
                  case l:
                  case m:
                  case h:
                  case c:
                    return ie;
                  default:
                    return B;
                }
            }
          case n:
            return B;
        }
      }
    }
    var _ = d, k = f, T = s, I = c, W = t, Z = l, L = r, Y = m, U = h, G = n, oe = i, X = a, K = u, le = !1;
    function ee(F) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(F) || N(F) === d;
    }
    function C(F) {
      return N(F) === f;
    }
    function j(F) {
      return N(F) === s;
    }
    function y(F) {
      return N(F) === c;
    }
    function E(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function P(F) {
      return N(F) === l;
    }
    function R(F) {
      return N(F) === r;
    }
    function S(F) {
      return N(F) === m;
    }
    function M(F) {
      return N(F) === h;
    }
    function V(F) {
      return N(F) === n;
    }
    function H(F) {
      return N(F) === i;
    }
    function q(F) {
      return N(F) === a;
    }
    function de(F) {
      return N(F) === u;
    }
    ve.AsyncMode = _, ve.ConcurrentMode = k, ve.ContextConsumer = T, ve.ContextProvider = I, ve.Element = W, ve.ForwardRef = Z, ve.Fragment = L, ve.Lazy = Y, ve.Memo = U, ve.Portal = G, ve.Profiler = oe, ve.StrictMode = X, ve.Suspense = K, ve.isAsyncMode = ee, ve.isConcurrentMode = C, ve.isContextConsumer = j, ve.isContextProvider = y, ve.isElement = E, ve.isForwardRef = P, ve.isFragment = R, ve.isLazy = S, ve.isMemo = M, ve.isPortal = V, ve.isProfiler = H, ve.isStrictMode = q, ve.isSuspense = de, ve.isValidElementType = O, ve.typeOf = N;
  }()), ve;
}
var qo;
function Ba() {
  return qo || (qo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Ns() : e.exports = Is();
  }(Ds)), nr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Rr, Yo;
function As() {
  if (Yo)
    return Rr;
  Yo = 1;
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
      for (var c = {}, s = 0; s < 10; s++)
        c["_" + String.fromCharCode(s)] = s;
      var d = Object.getOwnPropertyNames(c).map(function(l) {
        return c[l];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        f[l] = l;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Rr = a() ? Object.assign : function(i, c) {
    for (var s, d = r(i), f, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var u in s)
        t.call(s, u) && (d[u] = s[u]);
      if (e) {
        f = e(s);
        for (var v = 0; v < f.length; v++)
          n.call(s, f[v]) && (d[f[v]] = s[f[v]]);
      }
    }
    return d;
  }, Rr;
}
var Dr, zo;
function po() {
  if (zo)
    return Dr;
  zo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Dr = e, Dr;
}
var Nr, Wo;
function Va() {
  return Wo || (Wo = 1, Nr = Function.call.bind(Object.prototype.hasOwnProperty)), Nr;
}
var Ir, Uo;
function Ms() {
  if (Uo)
    return Ir;
  Uo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = po(), n = {}, r = Va();
    e = function(i) {
      var c = "Warning: " + i;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function a(i, c, s, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (r(i, l)) {
          var u;
          try {
            if (typeof i[l] != "function") {
              var v = Error(
                (d || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            u = i[l](c, l, d, s, null, t);
          } catch (m) {
            u = m;
          }
          if (u && !(u instanceof Error) && e(
            (d || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = !0;
            var h = f ? f() : "";
            e(
              "Failed " + s + " type: " + u.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ir = a, Ir;
}
var Ar, Ho;
function $s() {
  if (Ho)
    return Ar;
  Ho = 1;
  var e = Ba(), t = As(), n = po(), r = Va(), a = Ms(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var d = "Warning: " + s;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Ar = function(s, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function u(C) {
      var j = C && (f && C[f] || C[l]);
      if (typeof j == "function")
        return j;
    }
    var v = "<<anonymous>>", h = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: D(),
      arrayOf: O,
      element: N(),
      elementType: _(),
      instanceOf: k,
      node: Z(),
      objectOf: I,
      oneOf: T,
      oneOfType: W,
      shape: Y,
      exact: U
    };
    function m(C, j) {
      return C === j ? C !== 0 || 1 / C === 1 / j : C !== C && j !== j;
    }
    function b(C, j) {
      this.message = C, this.data = j && typeof j == "object" ? j : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function x(C) {
      if (process.env.NODE_ENV !== "production")
        var j = {}, y = 0;
      function E(R, S, M, V, H, q, de) {
        if (V = V || v, q = q || M, de !== n) {
          if (d) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var B = V + ":" + M;
            !j[B] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[B] = !0, y++);
          }
        }
        return S[M] == null ? R ? S[M] === null ? new b("The " + H + " `" + q + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new b("The " + H + " `" + q + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : C(S, M, V, H, q);
      }
      var P = E.bind(null, !1);
      return P.isRequired = E.bind(null, !0), P;
    }
    function w(C) {
      function j(y, E, P, R, S, M) {
        var V = y[E], H = X(V);
        if (H !== C) {
          var q = K(V);
          return new b(
            "Invalid " + R + " `" + S + "` of type " + ("`" + q + "` supplied to `" + P + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return x(j);
    }
    function D() {
      return x(c);
    }
    function O(C) {
      function j(y, E, P, R, S) {
        if (typeof C != "function")
          return new b("Property `" + S + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var M = y[E];
        if (!Array.isArray(M)) {
          var V = X(M);
          return new b("Invalid " + R + " `" + S + "` of type " + ("`" + V + "` supplied to `" + P + "`, expected an array."));
        }
        for (var H = 0; H < M.length; H++) {
          var q = C(M, H, P, R, S + "[" + H + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return x(j);
    }
    function N() {
      function C(j, y, E, P, R) {
        var S = j[y];
        if (!s(S)) {
          var M = X(S);
          return new b("Invalid " + P + " `" + R + "` of type " + ("`" + M + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(C);
    }
    function _() {
      function C(j, y, E, P, R) {
        var S = j[y];
        if (!e.isValidElementType(S)) {
          var M = X(S);
          return new b("Invalid " + P + " `" + R + "` of type " + ("`" + M + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(C);
    }
    function k(C) {
      function j(y, E, P, R, S) {
        if (!(y[E] instanceof C)) {
          var M = C.name || v, V = ee(y[E]);
          return new b("Invalid " + R + " `" + S + "` of type " + ("`" + V + "` supplied to `" + P + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return x(j);
    }
    function T(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function j(y, E, P, R, S) {
        for (var M = y[E], V = 0; V < C.length; V++)
          if (m(M, C[V]))
            return null;
        var H = JSON.stringify(C, function(de, F) {
          var B = K(F);
          return B === "symbol" ? String(F) : F;
        });
        return new b("Invalid " + R + " `" + S + "` of value `" + String(M) + "` " + ("supplied to `" + P + "`, expected one of " + H + "."));
      }
      return x(j);
    }
    function I(C) {
      function j(y, E, P, R, S) {
        if (typeof C != "function")
          return new b("Property `" + S + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var M = y[E], V = X(M);
        if (V !== "object")
          return new b("Invalid " + R + " `" + S + "` of type " + ("`" + V + "` supplied to `" + P + "`, expected an object."));
        for (var H in M)
          if (r(M, H)) {
            var q = C(M, H, P, R, S + "." + H, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return x(j);
    }
    function W(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var j = 0; j < C.length; j++) {
        var y = C[j];
        if (typeof y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(y) + " at index " + j + "."
          ), c;
      }
      function E(P, R, S, M, V) {
        for (var H = [], q = 0; q < C.length; q++) {
          var de = C[q], F = de(P, R, S, M, V, n);
          if (F == null)
            return null;
          F.data && r(F.data, "expectedType") && H.push(F.data.expectedType);
        }
        var B = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new b("Invalid " + M + " `" + V + "` supplied to " + ("`" + S + "`" + B + "."));
      }
      return x(E);
    }
    function Z() {
      function C(j, y, E, P, R) {
        return G(j[y]) ? null : new b("Invalid " + P + " `" + R + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return x(C);
    }
    function L(C, j, y, E, P) {
      return new b(
        (C || "React class") + ": " + j + " type `" + y + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function Y(C) {
      function j(y, E, P, R, S) {
        var M = y[E], V = X(M);
        if (V !== "object")
          return new b("Invalid " + R + " `" + S + "` of type `" + V + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var H in C) {
          var q = C[H];
          if (typeof q != "function")
            return L(P, R, S, H, K(q));
          var de = q(M, H, P, R, S + "." + H, n);
          if (de)
            return de;
        }
        return null;
      }
      return x(j);
    }
    function U(C) {
      function j(y, E, P, R, S) {
        var M = y[E], V = X(M);
        if (V !== "object")
          return new b("Invalid " + R + " `" + S + "` of type `" + V + "` " + ("supplied to `" + P + "`, expected `object`."));
        var H = t({}, y[E], C);
        for (var q in H) {
          var de = C[q];
          if (r(C, q) && typeof de != "function")
            return L(P, R, S, q, K(de));
          if (!de)
            return new b(
              "Invalid " + R + " `" + S + "` key `" + q + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(y[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var F = de(M, q, P, R, S + "." + q, n);
          if (F)
            return F;
        }
        return null;
      }
      return x(j);
    }
    function G(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(G);
          if (C === null || s(C))
            return !0;
          var j = u(C);
          if (j) {
            var y = j.call(C), E;
            if (j !== C.entries) {
              for (; !(E = y.next()).done; )
                if (!G(E.value))
                  return !1;
            } else
              for (; !(E = y.next()).done; ) {
                var P = E.value;
                if (P && !G(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(C, j) {
      return C === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function X(C) {
      var j = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : oe(j, C) ? "symbol" : j;
    }
    function K(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var j = X(C);
      if (j === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return j;
    }
    function le(C) {
      var j = K(C);
      switch (j) {
        case "array":
        case "object":
          return "an " + j;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + j;
        default:
          return j;
      }
    }
    function ee(C) {
      return !C.constructor || !C.constructor.name ? v : C.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Ar;
}
var Mr, Zo;
function ks() {
  if (Zo)
    return Mr;
  Zo = 1;
  var e = po();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Mr = function() {
    function r(c, s, d, f, l, u) {
      if (u !== e) {
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
  }, Mr;
}
if (process.env.NODE_ENV !== "production") {
  var Ls = Ba(), js = !0;
  Fo.exports = $s()(Ls.isElement, js);
} else
  Fo.exports = ks()();
const Fs = (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.props) == null ? void 0 : t.__TYPE) || ((n = e == null ? void 0 : e.type) == null ? void 0 : n.toString().replace("Symbol(react.fragment)", "react.fragment")) || void 0;
}, Ze = (e, t) => Re.toArray(e).filter((n) => t.indexOf(Fs(n)) !== -1), Bs = ({ children: e, allowMultiple: t, defaultIndex: n, allowDifferentChildren: r }) => {
  const [a, i] = ne(), c = (d) => {
    t ? a.includes(d) ? i(a.filter((f) => f !== d)) : i([...a, d]) : i(d);
  };
  J(() => (i(t ? n || [] : n ?? null), () => {
    i(null);
  }), [t, n]);
  const s = Re.map(e, (d, f) => dt(d) ? Pe(d, { ...d.props, id: f, isOpen: a, onToggle: c }) : null);
  return /* @__PURE__ */ p("div", { children: r ? s : Ze(s, ["AccordionItem"]) });
};
Bs.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  allowMultiple: o.bool,
  allowDifferentChildren: o.bool,
  defaultIndex: o.oneOfType([o.array, o.number])
};
var Jr = {}, Vs = {
  get exports() {
    return Jr;
  },
  set exports(e) {
    Jr = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var c = typeof i;
          if (c === "string" || c === "number")
            r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (c === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var d in i)
              t.call(i, d) && i[d] && r.push(d);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Vs);
const re = Jr, be = (e) => (t, n, r) => {
  if (t[n] !== e)
    return new Error(
      `'${n}' in '${r}' 

 NO puedes pasar un valor de props para '${n}'.La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.`
    );
}, rr = {
  "c-accordion__item": "_c-accordion__item_s7jwr_1",
  "c-accordion__button": "_c-accordion__button_s7jwr_10",
  "c-accordion__panel": "_c-accordion__panel_s7jwr_29",
  "c-accordion__panel-content": "_c-accordion__panel-content_s7jwr_48"
}, qa = ({
  children: e,
  id: t,
  onExpanded: n,
  isExpanded: r,
  expanded: a,
  addClass: i,
  icon: c,
  defaultStyle: s,
  __TYPE: d,
  ...f
}) => /* @__PURE__ */ A(
  "button",
  {
    id: `accordion-button-${t}`,
    "aria-controls": `accordion-panel-${t}`,
    "aria-expanded": r,
    className: re({
      [`${rr["c-accordion__button"]} u-flex`]: !s,
      [i]: i,
      [r]: a
    }),
    onClick: n,
    "data-type": d,
    ...f,
    children: [
      e,
      c && c(r)
    ]
  }
);
qa.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  onExpanded: o.func,
  isExpanded: o.bool,
  expanded: o.string,
  addClass: o.string,
  icon: o.func,
  defaultStyle: o.bool,
  __TYPE: be("AccordionButton")
};
qa.defaultProps = {
  __TYPE: "AccordionButton"
};
const Ya = ({ children: e, id: t, isOpen: n, onToggle: r, addClass: a, defaultStyle: i, allowDifferentChildren: c }) => {
  const s = () => r(t), d = () => typeof n == "number" ? n === t : Array.isArray(n) ? !!n.includes(t) : !1, f = Re.map(e, (l) => dt(l) ? l.props.__TYPE === "AccordionButton" ? Pe(l, { ...l.props, id: t, onExpanded: s, isExpanded: d() }) : Pe(l, { ...l.props, id: t, isExpanded: d() }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [rr["c-accordion__item"]]: !i,
        [a]: a
      }),
      children: c ? f : Ze(f, ["AccordionButton", "AccordionPanel"])
    }
  );
};
Ya.propTypes = {
  children: o.arrayOf(o.element),
  id: o.number,
  isOpen: o.oneOfType([o.array, o.number]),
  onToggle: o.func,
  addClass: o.string,
  defaultStyle: o.bool,
  allowDifferentChildren: o.bool,
  __TYPE: be("AccordionItem")
};
Ya.defaultProps = {
  __TYPE: "AccordionItem"
};
const za = ({
  children: e,
  id: t,
  isExpanded: n,
  addClass: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => /* @__PURE__ */ p(
  "div",
  {
    id: `accordion-panel-${t}`,
    role: "region",
    "aria-hidden": !n,
    "aria-labelledby": `accordion-button-${t}`,
    "data-type": i,
    className: re(rr["c-accordion__panel"], {
      [r]: r
    }),
    ...c,
    children: /* @__PURE__ */ p(
      "div",
      {
        className: re({
          [rr["c-accordion__panel-content"]]: !a
        }),
        children: e
      }
    )
  }
);
za.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  isExpanded: o.bool,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("AccordionPanel")
};
za.defaultProps = {
  __TYPE: "AccordionPanel"
};
const Gn = {
  "c-icon": "_c-icon_13de5_1",
  "c-small": "_c-small_13de5_10",
  "c-normal": "_c-normal_13de5_14",
  "c-big": "_c-big_13de5_18"
}, qs = /\w+\.svg/gi, xe = ({
  children: e,
  path: t,
  size: n,
  addClass: r,
  viewBox: a,
  width: i,
  height: c,
  __TYPE: s,
  ...d
}) => {
  if (!t && !e)
    return /* @__PURE__ */ p("span", { children: "Doesn't exist" });
  if (Re.count(e) > 1)
    return /* @__PURE__ */ p("span", { children: "Only have one children" });
  const f = t && t.match(qs).toString().replace(/.svg/gi, ""), l = `${t}#${f}`;
  return e ? Pe(e, {
    ...e.props,
    className: `${Gn["c-icon"]} ${Gn[`c-${n}`]} ${r ?? ""}`,
    "aria-hidden": !0,
    "data-testid": f,
    "data-component": s
  }) : /* @__PURE__ */ p(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: c,
      viewBox: a,
      className: `${Gn["c-icon"]} ${Gn[`c-${n}`]} ${r ?? ""}`,
      "aria-hidden": "true",
      "data-testid": f,
      "data-component": s,
      ...d,
      children: /* @__PURE__ */ p("use", { xlinkHref: l })
    }
  );
};
xe.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  path: o.string,
  size: o.oneOf(["small", "normal", "big"]),
  addClass: o.string,
  viewBox: o.string,
  height: o.string,
  width: o.string,
  __TYPE: be("Icon")
};
xe.defaultProps = {
  size: "normal",
  viewBox: "0 0 48 48",
  height: "48",
  width: "48",
  __TYPE: "Icon"
};
const bn = {
  "c-button": "_c-button_6002w_1",
  "c-round": "_c-round_6002w_22",
  "c-reverse": "_c-reverse_6002w_26",
  "c-small": "_c-small_6002w_30",
  "c-normal": "_c-normal_6002w_35",
  "c-big": "_c-big_6002w_40",
  "c-primary": "_c-primary_6002w_53",
  "c-secondary": "_c-secondary_6002w_59",
  "c-no-line": "_c-no-line_6002w_65"
}, Ut = _t((e, t) => {
  const {
    label: n,
    size: r,
    icon: a,
    type: i,
    variant: c,
    hasAriaLabel: s,
    disabled: d,
    onClick: f,
    children: l,
    addClass: u,
    defaultStyle: v,
    ...h
  } = e;
  return /* @__PURE__ */ A(
    "button",
    {
      ref: t,
      className: re({
        [`${bn["c-button"]} ${bn[`c-${c}`]} ${bn[`c-${r}`]}`]: !v,
        [bn["c-round"]]: a && a.path && s,
        [bn["c-reverse"]]: a && a.position === "right",
        [u]: u
      }),
      disabled: d,
      type: i,
      onClick: f,
      ...s && { "aria-label": `${n}` },
      ...h,
      children: [
        l,
        a && /* @__PURE__ */ p(xe, { path: a.path, size: a.size }),
        s ? null : n
      ]
    }
  );
});
Ut.propTypes = {
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
  addClass: o.string,
  defaultStyle: o.bool
};
Ut.defaultProps = {
  size: "normal",
  variant: "primary",
  type: "button",
  hasAriaLabel: !1
};
const Ys = Object.freeze({
  root: null,
  rootMargin: "0px",
  threshold: 0
}), Wa = (e) => {
  const { root: t, rootMargin: n, threshold: r } = e || Ys, [a, i] = ne(!1), [c, s] = ne(null);
  return J(() => {
    if (!c) {
      i(!1);
      return;
    }
    const d = new window.IntersectionObserver(
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
    return d.observe(c), () => {
      d.unobserve(c);
    };
  }, [r, n, t, c]), [s, a];
}, Ua = ({
  ref: e,
  onInteractionOutside: t,
  onInteractionOutsideStart: n
}) => {
  const a = Q({
    isPointerDown: !1,
    // Bandera para indicar si se ha hecho clic en el elemento
    onInteractionOutsideStart: n,
    onInteractionOutside: t
  }).current;
  a.onInteractionOutside = t, a.onInteractionOutsideStart = n, J(() => {
    const i = (s) => {
      Go(s, e) && a.onInteractionOutside && (a.onInteractionOutsideStart && a.onInteractionOutsideStart(s), a.isPointerDown = !0);
    }, c = (s) => {
      a.isPointerDown && a.onInteractionOutside && Go(s, e) && (a.onInteractionOutside(s), a.isPointerDown = !1);
    };
    return document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", c, !0), () => {
      document.removeEventListener("mousedown", i, !0), document.removeEventListener("mouseup", c, !0);
    };
  }, [e, a]);
};
function Go(e, t) {
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target))
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
const zs = "_scrubber_6xazl_142", Ke = {
  "c-audio": "_c-audio_6xazl_1",
  "c-audio--small": "_c-audio--small_6xazl_15",
  "c-audio--hidden": "_c-audio--hidden_6xazl_29",
  "c-button": "_c-button_6xazl_33",
  "is-button-paused": "_is-button-paused_6xazl_66",
  "is-button-playing": "_is-button-playing_6xazl_74",
  "audio-bar": "_audio-bar_6xazl_82",
  "volume-control": "_volume-control_6xazl_129",
  scrubber: zs,
  "volume-btn": "_volume-btn_6xazl_147",
  "hidden-box": "_hidden-box_6xazl_151",
  "hidden-description": "_hidden-description_6xazl_159"
}, Ws = Object.freeze({
  BUTTON: "Button",
  BAR: "Bar"
}), Qt = Object.freeze({
  play: /* @__PURE__ */ p("path", { id: "play", d: "M306-184v-598l471 299-471 299Z" }),
  pause: /* @__PURE__ */ p("path", { id: "pause", d: "M550-186v-590h201v590H550Zm-340 0v-590h201v590H210Z" }),
  volume_on: /* @__PURE__ */ p(
    "path",
    {
      id: "volume_on",
      d: "M552-94v-75q108-28 176-115t68-198q0-110-68-196.5T552-793v-75q139 28 228 136.5T869-482q0 143-88.5 252T552-94ZM91-350v-260h167l214-215v690L258-350H91Zm441 44v-348q57 18 91.5 66T658-480q0 60-34.5 108T532-306Z"
    }
  ),
  volume_down: /* @__PURE__ */ p(
    "path",
    {
      id: "volume_down",
      d: "M173-337v-287h173l233-231v750L346-337H173Zm466 33v-353q55 18 92 67.5T768-480q0 60-37 108t-92 68Z"
    }
  ),
  volume_off: /* @__PURE__ */ p(
    "path",
    {
      id: "volume_off",
      d: "M821-37 697-160q-34 23-72.5 40T543-94v-75q27-7 52.5-17t48.5-27L463-395v260L249-350H82v-260h165L27-831l52-52L873-90l-52 53Zm-14-247-54-54q18-33 26-69t8-75q0-112-67.5-200.5T543-793v-75q139 28 228 136.5T860-482q0 53-13.5 103T807-284ZM644-447 543-548v-99q49 23 77.5 68t28.5 99q0 9-1 17t-4 16ZM463-628l-98-99 98-98v197Z"
    }
  ),
  a11y: /* @__PURE__ */ A(lt, { children: [
    /* @__PURE__ */ p(
      "path",
      {
        fill: "currentColor",
        d: "M23 14v-2H9v2h5v2.734l-3.868 6.77 1.736.992L15.58 18h.84l3.712 6.496 1.736-.992L18 16.734V14h5z"
      }
    ),
    /* @__PURE__ */ p("circle", { cx: "16", cy: "9", r: "2", fill: "currentColor" }),
    /* @__PURE__ */ p(
      "path",
      {
        fill: "currentColor",
        d: "M16 30a14 14 0 1 1 14-14 14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"
      }
    )
  ] })
}), Ha = ({
  src: e,
  format: t,
  a11y: n,
  size: r,
  type: a,
  addClass: i,
  defaultStyle: c,
  hasDescription: s = !1,
  description: d,
  ...f
}) => {
  const [l, u] = ne(!1), [v, h] = ne(!1), m = Ct(), [b, x] = ne(0), [w, D] = ne(0), [O, N] = ne(0), _ = Q(), k = Q(), T = Q(null), I = Q(null), W = (ee, C) => ee === C.current;
  Ua({ ref: I, onInteractionOutside: (ee) => {
    W(ee.target, T) || (h(!1), ee.stopPropagation(), ee.preventDefault());
  } });
  const [L, Y] = Wa(), U = (ee) => {
    _.current && (_.current.paused ? _.current.play() : _.current.pause(), u(!l));
  }, G = window.matchMedia("(any-hover: none) and (any-pointer: coarse)").matches, oe = () => {
    D(Math.round(_.current.duration)), N(G ? 1 : _.current.volume);
  }, X = () => {
    x(Math.round(_.current.currentTime));
  }, K = (ee) => {
    N(ee.target.volume);
  }, le = (ee) => {
    const C = parseFloat(ee.target.value);
    x(C), _.current.currentTime = C;
  };
  return J(() => {
    (l || !_.current.paused) && !Y && (u(!l), _.current.pause(), _.current.currentTime = 0);
  }, [Y]), dr(() => {
    const ee = k.current;
    ee && L(ee);
  }, [k]), a === Ws.BAR ? /* @__PURE__ */ A(lt, { children: [
    /* @__PURE__ */ A(
      "div",
      {
        className: `${Ke["audio-bar"]} ${i ?? ""}`,
        role: "group",
        "aria-labelledby": `description${m}`,
        "data-a11y": n,
        "data-class": "c-audio-bar",
        children: [
          /* @__PURE__ */ p(
            "div",
            {
              ref: k,
              className: Ke["hidden-box"],
              tabIndex: "-1",
              "aria-hidden": "true"
            }
          ),
          s ? /* @__PURE__ */ p("span", { id: `description${m}`, className: Ke["hidden-description"], children: n ? "Audio description" : `Barra de audio ${d}` }) : /* @__PURE__ */ p("span", { id: `description${m}`, hidden: !0, children: n ? "Audio description" : "Barra de audio" }),
          n ? /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: Qt.a11y }) }) : null,
          /* @__PURE__ */ A("button", { onClick: U, children: [
            /* @__PURE__ */ p("div", { className: "u-sr-only", children: l ? "Pausar" : "Reproducir" }),
            /* @__PURE__ */ p(xe, { size: "big", children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 -960 960 960", children: l ? Qt.pause : Qt.play }) })
          ] }),
          /* @__PURE__ */ A("small", { "aria-hidden": "true", children: [
            String(Math.floor(b / 60)).padStart(2, "0"),
            ":",
            String(b - 60 * Math.floor(b / 60)).padStart(2, "0"),
            " /",
            " ",
            String(Math.floor(w / 60)).padStart(2, "0"),
            ":",
            String(w - 60 * Math.floor(w / 60)).padStart(2, "0")
          ] }),
          /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `time${m}`, children: "Tiempo transcurrido" }),
          /* @__PURE__ */ p(
            "input",
            {
              className: Ke.scrubber,
              id: `time${m}`,
              value: b,
              min: 0,
              max: w,
              "aria-valuetext": `${b} seconds`,
              onChange: le,
              type: "range"
            }
          ),
          /* @__PURE__ */ A(
            "button",
            {
              ref: T,
              "aria-expanded": v,
              className: Ke["volume-btn"],
              onClick: () => h(!v),
              children: [
                /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
                /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 -960 960 960", children: O === 0 ? Qt.volume_off : O <= 0.25 ? Qt.volume_down : Qt.volume_on }) })
              ]
            }
          ),
          v ? /* @__PURE__ */ A("div", { className: Ke["volume-control"], ref: I, children: [
            /* @__PURE__ */ p("label", { className: "u-sr-only", htmlFor: `volume${m}`, children: "Volumen" }),
            /* @__PURE__ */ p(
              "input",
              {
                id: `volume${m}`,
                value: O,
                min: 0,
                max: 1,
                step: 0.05,
                type: "range",
                "aria-valuetext": O * 100,
                "aria-orientation": "vertical",
                orient: "vertical",
                onChange: (ee) => {
                  N(ee.target.value), _.current.volume = ee.target.value;
                }
              }
            )
          ] }) : null
        ]
      }
    ),
    /* @__PURE__ */ p(
      "audio",
      {
        ref: _,
        preload: "metadata",
        controls: !0,
        className: re({
          [Ke["c-audio"]]: !c,
          [Ke[`c-audio--${r}`]]: r,
          [i]: i
        }),
        onLoadedMetadata: oe,
        onTimeUpdate: X,
        onPlay: () => u(!0),
        onPause: () => u(!1),
        onVolumeChange: (ee) => K(ee),
        "data-a11y": n,
        hidden: !0,
        children: /* @__PURE__ */ p("source", { src: e, type: t })
      }
    )
  ] }) : /* @__PURE__ */ A(lt, { children: [
    /* @__PURE__ */ p(
      "audio",
      {
        ref: _,
        src: e,
        type: t,
        onEnded: () => u(!l),
        className: Ke["c-audio--hidden"]
      }
    ),
    /* @__PURE__ */ p("div", { ref: k, className: Ke["hidden-box"], tabIndex: "-1", "aria-hidden": "true" }),
    /* @__PURE__ */ p(
      Ut,
      {
        label: l ? "Pausar" : "Reproduccir",
        "data-a11y": n,
        "data-class": "c-audio-button",
        addClass: re({
          [Ke["c-button"]]: !c,
          [Ke["is-button-playing"]]: l,
          [Ke["is-button-paused"]]: !l,
          [i]: i
        }),
        onClick: U,
        hasAriaLabel: !0,
        ...c && { defaultStyle: c },
        ...n && { disabled: n },
        ...f
      }
    )
  ] });
};
Ha.defaultProps = {
  a11y: !1,
  type: "Bar"
};
Ha.propTypes = {
  src: o.string,
  a11y: o.bool,
  format: o.string,
  size: o.oneOf(["small"]),
  type: o.oneOf(["Bar", "Button"]),
  hasDescription: o.bool,
  description: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
var Us = typeof Zn == "object" && Zn && Zn.Object === Object && Zn, Hs = Us, Zs = Hs, Gs = typeof self == "object" && self && self.Object === Object && self, Xs = Zs || Gs || Function("return this")(), Ks = Xs, Qs = Ks, Js = Qs.Symbol, vo = Js;
function el(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var tl = el, nl = Array.isArray, rl = nl, Xo = vo, Za = Object.prototype, ol = Za.hasOwnProperty, al = Za.toString, yn = Xo ? Xo.toStringTag : void 0;
function il(e) {
  var t = ol.call(e, yn), n = e[yn];
  try {
    e[yn] = void 0;
    var r = !0;
  } catch {
  }
  var a = al.call(e);
  return r && (t ? e[yn] = n : delete e[yn]), a;
}
var sl = il, ll = Object.prototype, cl = ll.toString;
function ul(e) {
  return cl.call(e);
}
var dl = ul, Ko = vo, fl = sl, pl = dl, vl = "[object Null]", hl = "[object Undefined]", Qo = Ko ? Ko.toStringTag : void 0;
function gl(e) {
  return e == null ? e === void 0 ? hl : vl : Qo && Qo in Object(e) ? fl(e) : pl(e);
}
var ml = gl;
function bl(e) {
  return e != null && typeof e == "object";
}
var yl = bl, _l = ml, wl = yl, xl = "[object Symbol]";
function Ol(e) {
  return typeof e == "symbol" || wl(e) && _l(e) == xl;
}
var Tl = Ol, Jo = vo, El = tl, Sl = rl, Cl = Tl, Pl = 1 / 0, ea = Jo ? Jo.prototype : void 0, ta = ea ? ea.toString : void 0;
function Ga(e) {
  if (typeof e == "string")
    return e;
  if (Sl(e))
    return El(e, Ga) + "";
  if (Cl(e))
    return ta ? ta.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Pl ? "-0" : t;
}
var Rl = Ga, Dl = Rl;
function Nl(e) {
  return e == null ? "" : Dl(e);
}
var Il = Nl, Al = Il, Ml = 0;
function $l(e) {
  var t = ++Ml;
  return Al(e) + t;
}
var Xa = $l;
const Jt = {
  "c-input": "_c-input_1g9mr_1",
  "c-input__box": "_c-input__box_1g9mr_24",
  "c-input__check": "_c-input__check_1g9mr_38",
  "c-input__icon": "_c-input__icon_1g9mr_38",
  "c-input-defaultChecked": "_c-input-defaultChecked_1g9mr_62"
}, kl = (e) => {
  const t = /* @__PURE__ */ p(
    "path",
    {
      id: "done_all",
      d: "M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z"
    }
  ), n = /* @__PURE__ */ p("path", { id: "check", d: "M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" }), r = /* @__PURE__ */ p(
    "path",
    {
      id: "close",
      d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
    }
  );
  return e === "checkbox" ? {
    right: t,
    wrong: r,
    normal: n
  } : {
    right: n,
    wrong: r,
    normal: null
  };
}, Ka = _t(
  ({ id: e, name: t, type: n, label: r, state: a, value: i, addClass: c, isDisabled: s, defaultChecked: d, onChange: f, __TYPE: l, inherit: u, ...v }, h) => {
    const m = Oe(() => e || Xa(`ui-${n}`), [e, n]), b = Object.freeze(kl(n)), x = ({ target: w }) => {
      if (f) {
        if (w.checked) {
          f({ id: w.id, value: w.value });
          return;
        }
        f({ id: w.id, value: "" });
      }
    };
    return /* @__PURE__ */ A(
      "label",
      {
        htmlFor: m,
        className: `c-input-radio ${Jt["c-input"]} u-flex ${c ?? ""}`,
        "data-state": a,
        "data-type": n,
        "data-element": l,
        ...!u && { ...v },
        children: [
          /* @__PURE__ */ A("div", { className: Jt["c-input__box"], children: [
            /* @__PURE__ */ p(
              "input",
              {
                id: m,
                ref: h,
                type: n,
                name: t,
                value: i,
                "data-state": a,
                className: Jt["c-input__check"],
                onChange: x,
                ...s && { disabled: !0 },
                ...u && { ...v },
                ...d && { checked: !0 }
              }
            ),
            /* @__PURE__ */ p("div", { className: `${Jt["c-input__icon"]} ${d ? Jt["c-input-defaultChecked"] : ""} `, children: b[a] && /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48", children: b[a] }) }) })
          ] }),
          /* @__PURE__ */ p("span", { className: Jt["c-input__label"], children: r })
        ]
      }
    );
  }
);
Ka.defaultProps = {
  name: "checkbox",
  type: "checkbox",
  label: "Default checkbox label",
  state: "normal",
  value: "active",
  isDisabled: !1,
  inherit: !1,
  __TYPE: "CheckBox"
};
Ka.propTypes = {
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
  __TYPE: be("CheckBox")
};
const Ll = ({ legend: e, children: t, onChecked: n, addClass: r }) => {
  const [a, i] = ne([]), c = Q(), s = (u) => {
    c.current = u || "";
  }, d = (u) => c.current === "radio" ? [{ ...u }] : a.filter((h) => h.id === u.id).length ? [...a.filter((h) => h.id !== u.id)] : [...a, { ...u }], f = (u) => {
    const v = d(u);
    n && n(v), i(v);
  }, l = Re.map(t, (u) => dt(u) ? u.props.__TYPE === "CheckBox" ? (u.props.type && s(u.props.type), Pe(u, { ...u.props, onChange: f })) : u : null);
  return /* @__PURE__ */ A("fieldset", { ...r && { className: `${r}` }, children: [
    /* @__PURE__ */ p("legend", { children: e }),
    /* @__PURE__ */ p("div", { className: "u-flow", children: Ze(l, ["CheckBox"]) })
  ] });
};
Ll.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  legend: o.string,
  onChecked: o.func,
  addClass: o.string
};
const jl = "_col_wu095_1", Fl = {
  col: jl
}, Bl = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Fl.col} ${e ?? ""}`, ...t }));
Bl.propTypes = {
  addClass: o.string
};
const Vl = {
  "c-content": "_c-content_u325r_1"
}, ql = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "section",
  {
    className: re({
      [Vl["c-content"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
ql.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  defaultStyle: o.bool,
  addClass: o.string
};
const fr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function un(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ho(e) {
  return "nodeType" in e;
}
function Ge(e) {
  var t, n;
  return e ? un(e) ? e : ho(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function go(e) {
  const {
    Document: t
  } = Ge(e);
  return e instanceof t;
}
function jn(e) {
  return un(e) ? !1 : e instanceof Ge(e).HTMLElement;
}
function Yl(e) {
  return e instanceof Ge(e).SVGElement;
}
function dn(e) {
  return e ? un(e) ? e.document : ho(e) ? go(e) ? e : jn(e) ? e.ownerDocument : document : document : document;
}
const St = fr ? dr : J;
function mo(e) {
  const t = Q(e);
  return St(() => {
    t.current = e;
  }), je(function() {
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function zl() {
  const e = Q(null), t = je((r, a) => {
    e.current = setInterval(r, a);
  }, []), n = je(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Nn(e, t) {
  t === void 0 && (t = [e]);
  const n = Q(e);
  return St(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function Fn(e, t) {
  const n = Q();
  return Oe(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function or(e) {
  const t = mo(e), n = Q(null), r = je(
    (a) => {
      a !== n.current && (t == null || t(a, n.current)), n.current = a;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function eo(e) {
  const t = Q();
  return J(() => {
    t.current = e;
  }, [e]), t.current;
}
let $r = {};
function pr(e, t) {
  return Oe(() => {
    if (t)
      return t;
    const n = $r[e] == null ? 0 : $r[e] + 1;
    return $r[e] = n, e + "-" + n;
  }, [e, t]);
}
function Qa(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      r[a - 1] = arguments[a];
    return r.reduce((i, c) => {
      const s = Object.entries(c);
      for (const [d, f] of s) {
        const l = i[d];
        l != null && (i[d] = l + e * f);
      }
      return i;
    }, {
      ...t
    });
  };
}
const nn = /* @__PURE__ */ Qa(1), ar = /* @__PURE__ */ Qa(-1);
function Wl(e) {
  return "clientX" in e && "clientY" in e;
}
function Ja(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ge(e.target);
  return t && e instanceof t;
}
function Ul(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ge(e.target);
  return t && e instanceof t;
}
function to(e) {
  if (Ul(e)) {
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
  return Wl(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const no = /* @__PURE__ */ Object.freeze({
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
        return [no.Translate.toString(e), no.Scale.toString(e)].join(" ");
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
}), na = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Hl(e) {
  return e.matches(na) ? e : e.querySelector(na);
}
const Zl = {
  display: "none"
};
function Gl(e) {
  let {
    id: t,
    value: n
  } = e;
  return Le.createElement("div", {
    id: t,
    style: Zl
  }, n);
}
const Xl = {
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
function Kl(e) {
  let {
    id: t,
    announcement: n
  } = e;
  return Le.createElement("div", {
    id: t,
    style: Xl,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, n);
}
function Ql() {
  const [e, t] = ne("");
  return {
    announce: je((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const ei = /* @__PURE__ */ ft(null);
function Jl(e) {
  const t = Se(ei);
  J(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function ec() {
  const [e] = ne(() => /* @__PURE__ */ new Set()), t = je((r) => (e.add(r), () => e.delete(r)), [e]);
  return [je((r) => {
    let {
      type: a,
      event: i
    } = r;
    e.forEach((c) => {
      var s;
      return (s = c[a]) == null ? void 0 : s.call(c, i);
    });
  }, [e]), t];
}
const tc = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, nc = {
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
function rc(e) {
  let {
    announcements: t = nc,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: a = tc
  } = e;
  const {
    announce: i,
    announcement: c
  } = Ql(), s = pr("DndLiveRegion"), [d, f] = ne(!1);
  if (J(() => {
    f(!0);
  }, []), Jl(Oe(() => ({
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
  }), [i, t])), !d)
    return null;
  const l = Le.createElement(Le.Fragment, null, Le.createElement(Gl, {
    id: r,
    value: a.draggable
  }), Le.createElement(Kl, {
    id: s,
    announcement: c
  }));
  return n ? Fa(l, n) : l;
}
var De;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(De || (De = {}));
function ir() {
}
function kr(e, t) {
  return Oe(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function oc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Oe(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const bt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function ac(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function ic(e, t) {
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
function sc(e, t) {
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
function ra(e) {
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
function ti(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
const lc = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = ra(t), i = [];
  for (const c of r) {
    const {
      id: s
    } = c, d = n.get(s);
    if (d) {
      const f = ra(d), l = a.reduce((v, h, m) => v + ac(f[m], h), 0), u = Number((l / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: c,
          value: u
        }
      });
    }
  }
  return i.sort(ic);
};
function cc(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), a = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), c = a - r, s = i - n;
  if (r < a && n < i) {
    const d = t.width * t.height, f = e.width * e.height, l = c * s, u = l / (d + f - l);
    return Number(u.toFixed(4));
  }
  return 0;
}
const uc = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const a = [];
  for (const i of r) {
    const {
      id: c
    } = i, s = n.get(c);
    if (s) {
      const d = cc(s, t);
      d > 0 && a.push({
        id: c,
        data: {
          droppableContainer: i,
          value: d
        }
      });
    }
  }
  return a.sort(sc);
};
function dc(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function ni(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : bt;
}
function fc(e) {
  return function(n) {
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      a[i - 1] = arguments[i];
    return a.reduce((c, s) => ({
      ...c,
      top: c.top + e * s.y,
      bottom: c.bottom + e * s.y,
      left: c.left + e * s.x,
      right: c.right + e * s.x
    }), {
      ...n
    });
  };
}
const pc = /* @__PURE__ */ fc(1);
function vc(e) {
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
function hc(e, t, n) {
  const r = vc(t);
  if (!r)
    return e;
  const {
    scaleX: a,
    scaleY: i,
    x: c,
    y: s
  } = r, d = e.left - c - (1 - a) * parseFloat(n), f = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = a ? e.width / a : e.width, u = i ? e.height / i : e.height;
  return {
    width: l,
    height: u,
    top: f,
    right: d + l,
    bottom: f + u,
    left: d
  };
}
const gc = {
  ignoreTransform: !1
};
function Bn(e, t) {
  t === void 0 && (t = gc);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: f,
      transformOrigin: l
    } = Ge(e).getComputedStyle(e);
    f && (n = hc(n, f, l));
  }
  const {
    top: r,
    left: a,
    width: i,
    height: c,
    bottom: s,
    right: d
  } = n;
  return {
    top: r,
    left: a,
    width: i,
    height: c,
    bottom: s,
    right: d
  };
}
function oa(e) {
  return Bn(e, {
    ignoreTransform: !0
  });
}
function mc(e) {
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
function bc(e, t) {
  return t === void 0 && (t = Ge(e).getComputedStyle(e)), t.position === "fixed";
}
function yc(e, t) {
  t === void 0 && (t = Ge(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((a) => {
    const i = t[a];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function bo(e, t) {
  const n = [];
  function r(a) {
    if (t != null && n.length >= t || !a)
      return n;
    if (go(a) && a.scrollingElement != null && !n.includes(a.scrollingElement))
      return n.push(a.scrollingElement), n;
    if (!jn(a) || Yl(a) || n.includes(a))
      return n;
    const i = Ge(e).getComputedStyle(a);
    return a !== e && yc(a, i) && n.push(a), bc(a, i) ? n : r(a.parentNode);
  }
  return e ? r(e) : n;
}
function ri(e) {
  const [t] = bo(e, 1);
  return t ?? null;
}
function Lr(e) {
  return !fr || !e ? null : un(e) ? e : ho(e) ? go(e) || e === dn(e).scrollingElement ? window : jn(e) ? e : null : null;
}
function oi(e) {
  return un(e) ? e.scrollX : e.scrollLeft;
}
function ai(e) {
  return un(e) ? e.scrollY : e.scrollTop;
}
function ro(e) {
  return {
    x: oi(e),
    y: ai(e)
  };
}
var Ne;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(Ne || (Ne = {}));
function ii(e) {
  return !fr || !e ? !1 : e === document.scrollingElement;
}
function si(e) {
  const t = {
    x: 0,
    y: 0
  }, n = ii(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, a = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, c = e.scrollTop >= r.y, s = e.scrollLeft >= r.x;
  return {
    isTop: a,
    isLeft: i,
    isBottom: c,
    isRight: s,
    maxScroll: r,
    minScroll: t
  };
}
const _c = {
  x: 0.2,
  y: 0.2
};
function wc(e, t, n, r, a) {
  let {
    top: i,
    left: c,
    right: s,
    bottom: d
  } = n;
  r === void 0 && (r = 10), a === void 0 && (a = _c);
  const {
    isTop: f,
    isBottom: l,
    isLeft: u,
    isRight: v
  } = si(e), h = {
    x: 0,
    y: 0
  }, m = {
    x: 0,
    y: 0
  }, b = {
    height: t.height * a.y,
    width: t.width * a.x
  };
  return !f && i <= t.top + b.height ? (h.y = Ne.Backward, m.y = r * Math.abs((t.top + b.height - i) / b.height)) : !l && d >= t.bottom - b.height && (h.y = Ne.Forward, m.y = r * Math.abs((t.bottom - b.height - d) / b.height)), !v && s >= t.right - b.width ? (h.x = Ne.Forward, m.x = r * Math.abs((t.right - b.width - s) / b.width)) : !u && c <= t.left + b.width && (h.x = Ne.Backward, m.x = r * Math.abs((t.left + b.width - c) / b.width)), {
    direction: h,
    speed: m
  };
}
function xc(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: c
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: c,
      width: i,
      height: c
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
function li(e) {
  return e.reduce((t, n) => nn(t, ro(n)), bt);
}
function Oc(e) {
  return e.reduce((t, n) => t + oi(n), 0);
}
function Tc(e) {
  return e.reduce((t, n) => t + ai(n), 0);
}
function Ec(e, t) {
  if (t === void 0 && (t = Bn), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: a,
    right: i
  } = t(e);
  ri(e) && (a <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Sc = [["x", ["left", "right"], Oc], ["y", ["top", "bottom"], Tc]];
class yo {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = bo(n), a = li(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, c, s] of Sc)
      for (const d of c)
        Object.defineProperty(this, d, {
          get: () => {
            const f = s(r), l = a[i] - f;
            return this.rect[d] + l;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Tn {
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
function Cc(e) {
  const {
    EventTarget: t
  } = Ge(e);
  return e instanceof t ? e : dn(e);
}
function jr(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var st;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(st || (st = {}));
function aa(e) {
  e.preventDefault();
}
function Pc(e) {
  e.stopPropagation();
}
var ue;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(ue || (ue = {}));
const ci = {
  start: [ue.Space, ue.Enter],
  cancel: [ue.Esc],
  end: [ue.Space, ue.Enter]
}, Rc = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case ue.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case ue.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case ue.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case ue.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class _o {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Tn(dn(n)), this.windowListeners = new Tn(Ge(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(st.Resize, this.handleCancel), this.windowListeners.add(st.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(st.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Ec(r), n(bt);
  }
  handleKeyDown(t) {
    if (Ja(t)) {
      const {
        active: n,
        context: r,
        options: a
      } = this.props, {
        keyboardCodes: i = ci,
        coordinateGetter: c = Rc,
        scrollBehavior: s = "smooth"
      } = a, {
        code: d
      } = t;
      if (i.end.includes(d)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(d)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: f
      } = r.current, l = f ? {
        x: f.left,
        y: f.top
      } : bt;
      this.referenceCoordinates || (this.referenceCoordinates = l);
      const u = c(t, {
        active: n,
        context: r.current,
        currentCoordinates: l
      });
      if (u) {
        const v = ar(u, l), h = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: m
        } = r.current;
        for (const b of m) {
          const x = t.code, {
            isTop: w,
            isRight: D,
            isLeft: O,
            isBottom: N,
            maxScroll: _,
            minScroll: k
          } = si(b), T = xc(b), I = {
            x: Math.min(x === ue.Right ? T.right - T.width / 2 : T.right, Math.max(x === ue.Right ? T.left : T.left + T.width / 2, u.x)),
            y: Math.min(x === ue.Down ? T.bottom - T.height / 2 : T.bottom, Math.max(x === ue.Down ? T.top : T.top + T.height / 2, u.y))
          }, W = x === ue.Right && !D || x === ue.Left && !O, Z = x === ue.Down && !N || x === ue.Up && !w;
          if (W && I.x !== u.x) {
            const L = b.scrollLeft + v.x, Y = x === ue.Right && L <= _.x || x === ue.Left && L >= k.x;
            if (Y && !v.y) {
              b.scrollTo({
                left: L,
                behavior: s
              });
              return;
            }
            Y ? h.x = b.scrollLeft - L : h.x = x === ue.Right ? b.scrollLeft - _.x : b.scrollLeft - k.x, h.x && b.scrollBy({
              left: -h.x,
              behavior: s
            });
            break;
          } else if (Z && I.y !== u.y) {
            const L = b.scrollTop + v.y, Y = x === ue.Down && L <= _.y || x === ue.Up && L >= k.y;
            if (Y && !v.x) {
              b.scrollTo({
                top: L,
                behavior: s
              });
              return;
            }
            Y ? h.y = b.scrollTop - L : h.y = x === ue.Down ? b.scrollTop - _.y : b.scrollTop - k.y, h.y && b.scrollBy({
              top: -h.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, nn(ar(u, this.referenceCoordinates), h));
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
_o.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = ci,
      onActivation: a
    } = t, {
      active: i
    } = n;
    const {
      code: c
    } = e.nativeEvent;
    if (r.start.includes(c)) {
      const s = i.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), a == null || a({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function ia(e) {
  return !!(e && "distance" in e);
}
function sa(e) {
  return !!(e && "delay" in e);
}
class wo {
  constructor(t, n, r) {
    var a;
    r === void 0 && (r = Cc(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: c
    } = i;
    this.props = t, this.events = n, this.document = dn(c), this.documentListeners = new Tn(this.document), this.listeners = new Tn(r), this.windowListeners = new Tn(Ge(c)), this.initialCoordinates = (a = to(i)) != null ? a : bt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(st.Resize, this.handleCancel), this.windowListeners.add(st.DragStart, aa), this.windowListeners.add(st.VisibilityChange, this.handleCancel), this.windowListeners.add(st.ContextMenu, aa), this.documentListeners.add(st.Keydown, this.handleKeydown), n) {
      if (ia(n))
        return;
      if (sa(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(st.Click, Pc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(st.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: a,
      props: i
    } = this, {
      onMove: c,
      options: {
        activationConstraint: s
      }
    } = i;
    if (!a)
      return;
    const d = (n = to(t)) != null ? n : bt, f = ar(a, d);
    if (!r && s) {
      if (sa(s))
        return jr(f, s.tolerance) ? this.handleCancel() : void 0;
      if (ia(s))
        return s.tolerance != null && jr(f, s.tolerance) ? this.handleCancel() : jr(f, s.distance) ? this.handleStart() : void 0;
    }
    t.cancelable && t.preventDefault(), c(d);
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
    t.code === ue.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Dc = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ui extends wo {
  constructor(t) {
    const {
      event: n
    } = t, r = dn(n.target);
    super(t, Dc, r);
  }
}
ui.activators = [{
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
const Nc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var oo;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(oo || (oo = {}));
class di extends wo {
  constructor(t) {
    super(t, Nc, dn(t.event.target));
  }
}
di.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === oo.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Fr = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class fi extends wo {
  constructor(t) {
    super(t, Fr);
  }
  static setup() {
    return window.addEventListener(Fr.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Fr.move.name, t);
    };
    function t() {
    }
  }
}
fi.activators = [{
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
var En;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(En || (En = {}));
var sr;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(sr || (sr = {}));
function Ic(e) {
  let {
    acceleration: t,
    activator: n = En.Pointer,
    canScroll: r,
    draggingRect: a,
    enabled: i,
    interval: c = 5,
    order: s = sr.TreeOrder,
    pointerCoordinates: d,
    scrollableAncestors: f,
    scrollableAncestorRects: l,
    delta: u,
    threshold: v
  } = e;
  const h = Mc({
    delta: u,
    disabled: !i
  }), [m, b] = zl(), x = Q({
    x: 0,
    y: 0
  }), w = Q({
    x: 0,
    y: 0
  }), D = Oe(() => {
    switch (n) {
      case En.Pointer:
        return d ? {
          top: d.y,
          bottom: d.y,
          left: d.x,
          right: d.x
        } : null;
      case En.DraggableRect:
        return a;
    }
  }, [n, a, d]), O = Q(null), N = je(() => {
    const k = O.current;
    if (!k)
      return;
    const T = x.current.x * w.current.x, I = x.current.y * w.current.y;
    k.scrollBy(T, I);
  }, []), _ = Oe(() => s === sr.TreeOrder ? [...f].reverse() : f, [s, f]);
  J(
    () => {
      if (!i || !f.length || !D) {
        b();
        return;
      }
      for (const k of _) {
        if ((r == null ? void 0 : r(k)) === !1)
          continue;
        const T = f.indexOf(k), I = l[T];
        if (!I)
          continue;
        const {
          direction: W,
          speed: Z
        } = wc(k, I, D, t, v);
        for (const L of ["x", "y"])
          h[L][W[L]] || (Z[L] = 0, W[L] = 0);
        if (Z.x > 0 || Z.y > 0) {
          b(), O.current = k, m(N, c), x.current = Z, w.current = W;
          return;
        }
      }
      x.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      N,
      r,
      b,
      i,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(D),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h),
      m,
      f,
      _,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const Ac = {
  x: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  },
  y: {
    [Ne.Backward]: !1,
    [Ne.Forward]: !1
  }
};
function Mc(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = eo(t);
  return Fn((a) => {
    if (n || !r || !a)
      return Ac;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [Ne.Backward]: a.x[Ne.Backward] || i.x === -1,
        [Ne.Forward]: a.x[Ne.Forward] || i.x === 1
      },
      y: {
        [Ne.Backward]: a.y[Ne.Backward] || i.y === -1,
        [Ne.Forward]: a.y[Ne.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function $c(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return Fn((a) => {
    var i;
    return t === null ? null : (i = r ?? a) != null ? i : null;
  }, [r, t]);
}
function kc(e, t) {
  return Oe(() => e.reduce((n, r) => {
    const {
      sensor: a
    } = r, i = a.activators.map((c) => ({
      eventName: c.eventName,
      handler: t(c.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var In;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(In || (In = {}));
var ao;
(function(e) {
  e.Optimized = "optimized";
})(ao || (ao = {}));
const la = /* @__PURE__ */ new Map();
function Lc(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: a
  } = t;
  const [i, c] = ne(null), {
    frequency: s,
    measure: d,
    strategy: f
  } = a, l = Q(e), u = x(), v = Nn(u), h = je(function(w) {
    w === void 0 && (w = []), !v.current && c((D) => D === null ? w : D.concat(w.filter((O) => !D.includes(O))));
  }, [v]), m = Q(null), b = Fn((w) => {
    if (u && !n)
      return la;
    if (!w || w === la || l.current !== e || i != null) {
      const D = /* @__PURE__ */ new Map();
      for (let O of e) {
        if (!O)
          continue;
        if (i && i.length > 0 && !i.includes(O.id) && O.rect.current) {
          D.set(O.id, O.rect.current);
          continue;
        }
        const N = O.node.current, _ = N ? new yo(d(N), N) : null;
        O.rect.current = _, _ && D.set(O.id, _);
      }
      return D;
    }
    return w;
  }, [e, i, n, u, d]);
  return J(() => {
    l.current = e;
  }, [e]), J(
    () => {
      u || h();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, u]
  ), J(
    () => {
      i && i.length > 0 && c(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), J(
    () => {
      u || typeof s != "number" || m.current !== null || (m.current = setTimeout(() => {
        h(), m.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, u, h, ...r]
  ), {
    droppableRects: b,
    measureDroppableContainers: h,
    measuringScheduled: i != null
  };
  function x() {
    switch (f) {
      case In.Always:
        return !1;
      case In.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function pi(e, t) {
  return Fn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function jc(e, t) {
  return pi(e, t);
}
function Fc(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = mo(t), a = Oe(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return J(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function vr(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = mo(t), a = Oe(
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
  return J(() => () => a == null ? void 0 : a.disconnect(), [a]), a;
}
function Bc(e) {
  return new yo(Bn(e), e);
}
function ca(e, t, n) {
  t === void 0 && (t = Bc);
  const [r, a] = fo(s, null), i = Fc({
    callback(d) {
      if (e)
        for (const f of d) {
          const {
            type: l,
            target: u
          } = f;
          if (l === "childList" && u instanceof HTMLElement && u.contains(e)) {
            a();
            break;
          }
        }
    }
  }), c = vr({
    callback: a
  });
  return St(() => {
    a(), e ? (c == null || c.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (c == null || c.disconnect(), i == null || i.disconnect());
  }, [e]), r;
  function s(d) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var f;
      return (f = d ?? n) != null ? f : null;
    }
    const l = t(e);
    return JSON.stringify(d) === JSON.stringify(l) ? d : l;
  }
}
function Vc(e) {
  const t = pi(e);
  return ni(e, t);
}
const ua = [];
function qc(e) {
  const t = Q(e), n = Fn((r) => e ? r && r !== ua && e && t.current && e.parentNode === t.current.parentNode ? r : bo(e) : ua, [e]);
  return J(() => {
    t.current = e;
  }, [e]), n;
}
function Yc(e) {
  const [t, n] = ne(null), r = Q(e), a = je((i) => {
    const c = Lr(i.target);
    c && n((s) => s ? (s.set(c, ro(c)), new Map(s)) : null);
  }, []);
  return J(() => {
    const i = r.current;
    if (e !== i) {
      c(i);
      const s = e.map((d) => {
        const f = Lr(d);
        return f ? (f.addEventListener("scroll", a, {
          passive: !0
        }), [f, ro(f)]) : null;
      }).filter((d) => d != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      c(e), c(i);
    };
    function c(s) {
      s.forEach((d) => {
        const f = Lr(d);
        f == null || f.removeEventListener("scroll", a);
      });
    }
  }, [a, e]), Oe(() => e.length ? t ? Array.from(t.values()).reduce((i, c) => nn(i, c), bt) : li(e) : bt, [e, t]);
}
function da(e, t) {
  t === void 0 && (t = []);
  const n = Q(null);
  return J(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), J(() => {
    const r = e !== bt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? ar(e, n.current) : bt;
}
function zc(e) {
  J(
    () => {
      if (!fr)
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
function Wc(e, t) {
  return Oe(() => e.reduce((n, r) => {
    let {
      eventName: a,
      handler: i
    } = r;
    return n[a] = (c) => {
      i(c, t);
    }, n;
  }, {}), [e, t]);
}
function vi(e) {
  return Oe(() => e ? mc(e) : null, [e]);
}
const Br = [];
function Uc(e, t) {
  t === void 0 && (t = Bn);
  const [n] = e, r = vi(n ? Ge(n) : null), [a, i] = fo(s, Br), c = vr({
    callback: i
  });
  return e.length > 0 && a === Br && i(), St(() => {
    e.length ? e.forEach((d) => c == null ? void 0 : c.observe(d)) : (c == null || c.disconnect(), i());
  }, [e]), a;
  function s() {
    return e.length ? e.map((d) => ii(d) ? r : new yo(t(d), d)) : Br;
  }
}
function Hc(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return jn(t) ? t : e;
}
function Zc(e) {
  let {
    measure: t
  } = e;
  const [n, r] = ne(null), a = je((f) => {
    for (const {
      target: l
    } of f)
      if (jn(l)) {
        r((u) => {
          const v = t(l);
          return u ? {
            ...u,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = vr({
    callback: a
  }), c = je((f) => {
    const l = Hc(f);
    i == null || i.disconnect(), l && (i == null || i.observe(l)), r(l ? t(l) : null);
  }, [t, i]), [s, d] = or(c);
  return Oe(() => ({
    nodeRef: s,
    rect: n,
    setRef: d
  }), [n, s, d]);
}
const Gc = [{
  sensor: ui,
  options: {}
}, {
  sensor: _o,
  options: {}
}], Xc = {
  current: {}
}, Qn = {
  draggable: {
    measure: oa
  },
  droppable: {
    measure: oa,
    strategy: In.WhileDragging,
    frequency: ao.Optimized
  },
  dragOverlay: {
    measure: Bn
  }
};
class Sn extends Map {
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
const Kc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Sn(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: ir
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Qn,
  measureDroppableContainers: ir,
  windowRect: null,
  measuringScheduled: !1
}, Qc = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: ir,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: ir
}, hr = /* @__PURE__ */ ft(Qc), Jc = /* @__PURE__ */ ft(Kc);
function eu() {
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
      containers: new Sn()
    }
  };
}
function tu(e, t) {
  switch (t.type) {
    case De.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case De.DragMove:
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
    case De.DragEnd:
    case De.DragCancel:
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
    case De.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, a = new Sn(e.droppable.containers);
      return a.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case De.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: a
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const c = new Sn(e.droppable.containers);
      return c.set(n, {
        ...i,
        disabled: a
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: c
        }
      };
    }
    case De.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, a = e.droppable.containers.get(n);
      if (!a || r !== a.key)
        return e;
      const i = new Sn(e.droppable.containers);
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
function nu(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: a
  } = Se(hr), i = eo(r), c = eo(n == null ? void 0 : n.id);
  return J(() => {
    if (!t && !r && i && c != null) {
      if (!Ja(i) || document.activeElement === i.target)
        return;
      const s = a.get(c);
      if (!s)
        return;
      const {
        activatorNode: d,
        node: f
      } = s;
      if (!d.current && !f.current)
        return;
      requestAnimationFrame(() => {
        for (const l of [d.current, f.current]) {
          if (!l)
            continue;
          const u = Hl(l);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [r, t, a, c, i]), null;
}
function ru(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((a, i) => i({
    transform: a,
    ...r
  }), n) : n;
}
function ou(e) {
  return Oe(
    () => ({
      draggable: {
        ...Qn.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Qn.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Qn.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function au(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: a = !0
  } = e;
  const i = Q(!1), {
    x: c,
    y: s
  } = typeof a == "boolean" ? {
    x: a,
    y: a
  } : a;
  St(() => {
    if (!c && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const f = t == null ? void 0 : t.node.current;
    if (!f || f.isConnected === !1)
      return;
    const l = n(f), u = ni(l, r);
    if (c || (u.x = 0), s || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const v = ri(f);
      v && v.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [t, c, s, r, n]);
}
const hi = /* @__PURE__ */ ft({
  ...bt,
  scaleX: 1,
  scaleY: 1
});
var At;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(At || (At = {}));
const iu = /* @__PURE__ */ La(function(t) {
  var n, r, a, i;
  let {
    id: c,
    accessibility: s,
    autoScroll: d = !0,
    children: f,
    sensors: l = Gc,
    collisionDetection: u = uc,
    measuring: v,
    modifiers: h,
    ...m
  } = t;
  const b = fo(tu, void 0, eu), [x, w] = b, [D, O] = ec(), [N, _] = ne(At.Uninitialized), k = N === At.Initialized, {
    draggable: {
      active: T,
      nodes: I,
      translate: W
    },
    droppable: {
      containers: Z
    }
  } = x, L = T ? I.get(T) : null, Y = Q({
    initial: null,
    translated: null
  }), U = Oe(() => {
    var ye;
    return T != null ? {
      id: T,
      // It's possible for the active node to unmount while dragging
      data: (ye = L == null ? void 0 : L.data) != null ? ye : Xc,
      rect: Y
    } : null;
  }, [T, L]), G = Q(null), [oe, X] = ne(null), [K, le] = ne(null), ee = Nn(m, Object.values(m)), C = pr("DndDescribedBy", c), j = Oe(() => Z.getEnabled(), [Z]), y = ou(v), {
    droppableRects: E,
    measureDroppableContainers: P,
    measuringScheduled: R
  } = Lc(j, {
    dragging: k,
    dependencies: [W.x, W.y],
    config: y.droppable
  }), S = $c(I, T), M = Oe(() => K ? to(K) : null, [K]), V = Un(), H = jc(S, y.draggable.measure);
  au({
    activeNode: T ? I.get(T) : null,
    config: V.layoutShiftCompensation,
    initialRect: H,
    measure: y.draggable.measure
  });
  const q = ca(S, y.draggable.measure, H), de = ca(S ? S.parentElement : null), F = Q({
    activatorEvent: null,
    active: null,
    activeNode: S,
    collisionRect: null,
    collisions: null,
    droppableRects: E,
    draggableNodes: I,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: Z,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), B = Z.getNodeFor((n = F.current.over) == null ? void 0 : n.id), te = Zc({
    measure: y.dragOverlay.measure
  }), ie = (r = te.nodeRef.current) != null ? r : S, ge = k ? (a = te.rect) != null ? a : q : null, Ie = !!(te.nodeRef.current && te.rect), pt = Vc(Ie ? null : q), Fe = vi(ie ? Ge(ie) : null), we = qc(k ? B ?? S : null), qe = Uc(we), Xe = ru(h, {
    transform: {
      x: W.x - pt.x,
      y: W.y - pt.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: K,
    active: U,
    activeNodeRect: q,
    containerNodeRect: de,
    draggingNodeRect: ge,
    over: F.current.over,
    overlayNodeRect: te.rect,
    scrollableAncestors: we,
    scrollableAncestorRects: qe,
    windowRect: Fe
  }), kt = M ? nn(M, W) : null, Pt = Yc(we), Lt = da(Pt), jt = da(Pt, [q]), Be = nn(Xe, Lt), vt = ge ? pc(ge, Xe) : null, Rt = U && vt ? u({
    active: U,
    collisionRect: vt,
    droppableRects: E,
    droppableContainers: j,
    pointerCoordinates: kt
  }) : null, pn = ti(Rt, "id"), [rt, Yn] = ne(null), Er = Ie ? Xe : nn(Xe, jt), Sr = dc(Er, (i = rt == null ? void 0 : rt.rect) != null ? i : null, q), zn = je(
    (ye, Ae) => {
      let {
        sensor: Me,
        options: ht
      } = Ae;
      if (G.current == null)
        return;
      const Ye = I.get(G.current);
      if (!Ye)
        return;
      const ze = ye.nativeEvent, ot = new Me({
        active: G.current,
        activeNode: Ye,
        event: ze,
        options: ht,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: F,
        onStart(We) {
          const Ft = G.current;
          if (Ft == null)
            return;
          const Bt = I.get(Ft);
          if (!Bt)
            return;
          const {
            onDragStart: Vt
          } = ee.current, Xt = {
            active: {
              id: Ft,
              data: Bt.data,
              rect: Y
            }
          };
          hn(() => {
            Vt == null || Vt(Xt), _(At.Initializing), w({
              type: De.DragStart,
              initialCoordinates: We,
              active: Ft
            }), D({
              type: "onDragStart",
              event: Xt
            });
          });
        },
        onMove(We) {
          w({
            type: De.DragMove,
            coordinates: We
          });
        },
        onEnd: Tt(De.DragEnd),
        onCancel: Tt(De.DragCancel)
      });
      hn(() => {
        X(ot), le(ye.nativeEvent);
      });
      function Tt(We) {
        return async function() {
          const {
            active: Bt,
            collisions: Vt,
            over: Xt,
            scrollAdjustedTranslate: Hn
          } = F.current;
          let qt = null;
          if (Bt && Hn) {
            const {
              cancelDrop: Yt
            } = ee.current;
            qt = {
              activatorEvent: ze,
              active: Bt,
              collisions: Vt,
              delta: Hn,
              over: Xt
            }, We === De.DragEnd && typeof Yt == "function" && await Promise.resolve(Yt(qt)) && (We = De.DragCancel);
          }
          G.current = null, hn(() => {
            w({
              type: We
            }), _(At.Uninitialized), Yn(null), X(null), le(null);
            const Yt = We === De.DragEnd ? "onDragEnd" : "onDragCancel";
            if (qt) {
              const g = ee.current[Yt];
              g == null || g(qt), D({
                type: Yt,
                event: qt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [I]
  ), Cr = je((ye, Ae) => (Me, ht) => {
    const Ye = Me.nativeEvent, ze = I.get(ht);
    if (
      // Another sensor is already instantiating
      G.current !== null || // No active draggable
      !ze || // Event has already been captured
      Ye.dndKit || Ye.defaultPrevented
    )
      return;
    const ot = {
      active: ze
    };
    ye(Me, Ae.options, ot) === !0 && (Ye.dndKit = {
      capturedBy: Ae.sensor
    }, G.current = ht, zn(Me, Ae));
  }, [I, zn]), Wn = kc(l, Cr);
  zc(l), St(() => {
    q && N === At.Initializing && _(At.Initialized);
  }, [q, N]), J(
    () => {
      const {
        onDragMove: ye
      } = ee.current, {
        active: Ae,
        activatorEvent: Me,
        collisions: ht,
        over: Ye
      } = F.current;
      if (!Ae || !Me)
        return;
      const ze = {
        active: Ae,
        activatorEvent: Me,
        collisions: ht,
        delta: {
          x: Be.x,
          y: Be.y
        },
        over: Ye
      };
      hn(() => {
        ye == null || ye(ze), D({
          type: "onDragMove",
          event: ze
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Be.x, Be.y]
  ), J(
    () => {
      const {
        active: ye,
        activatorEvent: Ae,
        collisions: Me,
        droppableContainers: ht,
        scrollAdjustedTranslate: Ye
      } = F.current;
      if (!ye || G.current == null || !Ae || !Ye)
        return;
      const {
        onDragOver: ze
      } = ee.current, ot = ht.get(pn), Tt = ot && ot.rect.current ? {
        id: ot.id,
        rect: ot.rect.current,
        data: ot.data,
        disabled: ot.disabled
      } : null, We = {
        active: ye,
        activatorEvent: Ae,
        collisions: Me,
        delta: {
          x: Ye.x,
          y: Ye.y
        },
        over: Tt
      };
      hn(() => {
        Yn(Tt), ze == null || ze(We), D({
          type: "onDragOver",
          event: We
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pn]
  ), St(() => {
    F.current = {
      activatorEvent: K,
      active: U,
      activeNode: S,
      collisionRect: vt,
      collisions: Rt,
      droppableRects: E,
      draggableNodes: I,
      draggingNode: ie,
      draggingNodeRect: ge,
      droppableContainers: Z,
      over: rt,
      scrollableAncestors: we,
      scrollAdjustedTranslate: Be
    }, Y.current = {
      initial: ge,
      translated: vt
    };
  }, [U, S, Rt, vt, I, ie, ge, E, Z, rt, we, Be]), Ic({
    ...V,
    delta: W,
    draggingRect: vt,
    pointerCoordinates: kt,
    scrollableAncestors: we,
    scrollableAncestorRects: qe
  });
  const Pr = Oe(() => ({
    active: U,
    activeNode: S,
    activeNodeRect: q,
    activatorEvent: K,
    collisions: Rt,
    containerNodeRect: de,
    dragOverlay: te,
    draggableNodes: I,
    droppableContainers: Z,
    droppableRects: E,
    over: rt,
    measureDroppableContainers: P,
    scrollableAncestors: we,
    scrollableAncestorRects: qe,
    measuringConfiguration: y,
    measuringScheduled: R,
    windowRect: Fe
  }), [U, S, q, K, Rt, de, te, I, Z, E, rt, P, we, qe, y, R, Fe]), vn = Oe(() => ({
    activatorEvent: K,
    activators: Wn,
    active: U,
    activeNodeRect: q,
    ariaDescribedById: {
      draggable: C
    },
    dispatch: w,
    draggableNodes: I,
    over: rt,
    measureDroppableContainers: P
  }), [K, Wn, U, q, w, C, I, rt, P]);
  return Le.createElement(ei.Provider, {
    value: O
  }, Le.createElement(hr.Provider, {
    value: vn
  }, Le.createElement(Jc.Provider, {
    value: Pr
  }, Le.createElement(hi.Provider, {
    value: Sr
  }, f)), Le.createElement(nu, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), Le.createElement(rc, {
    ...s,
    hiddenTextDescribedById: C
  }));
  function Un() {
    const ye = (oe == null ? void 0 : oe.autoScrollEnabled) === !1, Ae = typeof d == "object" ? d.enabled === !1 : d === !1, Me = k && !ye && !Ae;
    return typeof d == "object" ? {
      ...d,
      enabled: Me
    } : {
      enabled: Me
    };
  }
}), su = /* @__PURE__ */ ft(null), fa = "button", lu = "Droppable";
function cu(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: a
  } = e;
  const i = pr(lu), {
    activators: c,
    activatorEvent: s,
    active: d,
    activeNodeRect: f,
    ariaDescribedById: l,
    draggableNodes: u,
    over: v
  } = Se(hr), {
    role: h = fa,
    roleDescription: m = "draggable",
    tabIndex: b = 0
  } = a ?? {}, x = (d == null ? void 0 : d.id) === t, w = Se(x ? hi : su), [D, O] = or(), [N, _] = or(), k = Wc(c, t), T = Nn(n);
  St(
    () => (u.set(t, {
      id: t,
      key: i,
      node: D,
      activatorNode: N,
      data: T
    }), () => {
      const W = u.get(t);
      W && W.key === i && u.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, t]
  );
  const I = Oe(() => ({
    role: h,
    tabIndex: b,
    "aria-disabled": r,
    "aria-pressed": x && h === fa ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": l.draggable
  }), [r, h, b, x, m, l.draggable]);
  return {
    active: d,
    activatorEvent: s,
    activeNodeRect: f,
    attributes: I,
    isDragging: x,
    listeners: r ? void 0 : k,
    node: D,
    over: v,
    setNodeRef: O,
    setActivatorNodeRef: _,
    transform: w
  };
}
const uu = "Droppable", du = {
  timeout: 25
};
function gi(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: a
  } = e;
  const i = pr(uu), {
    active: c,
    dispatch: s,
    over: d,
    measureDroppableContainers: f
  } = Se(hr), l = Q({
    disabled: n
  }), u = Q(!1), v = Q(null), h = Q(null), {
    disabled: m,
    updateMeasurementsFor: b,
    timeout: x
  } = {
    ...du,
    ...a
  }, w = Nn(b ?? r), D = je(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      h.current != null && clearTimeout(h.current), h.current = setTimeout(() => {
        f(Array.isArray(w.current) ? w.current : [w.current]), h.current = null;
      }, x);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), O = vr({
    callback: D,
    disabled: m || !c
  }), N = je((I, W) => {
    O && (W && (O.unobserve(W), u.current = !1), I && O.observe(I));
  }, [O]), [_, k] = or(N), T = Nn(t);
  return J(() => {
    !O || !_.current || (O.disconnect(), u.current = !1, O.observe(_.current));
  }, [_, O]), St(
    () => (s({
      type: De.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: _,
        rect: v,
        data: T
      }
    }), () => s({
      type: De.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), J(() => {
    n !== l.current.disabled && (s({
      type: De.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), l.current.disabled = n);
  }, [r, i, n, s]), {
    active: c,
    rect: v,
    isOver: (d == null ? void 0 : d.id) === r,
    node: _,
    over: d,
    setNodeRef: k
  };
}
const fu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    y: 0
  };
}, pu = (e) => {
  let {
    transform: t
  } = e;
  return {
    ...t,
    x: 0
  };
}, vu = [ue.Down, ue.Right, ue.Up, ue.Left], hu = (e, { context: { active: t, droppableRects: n, droppableContainers: r, collisionRect: a } }) => {
  var i;
  if (vu.includes(e.code)) {
    e.preventDefault();
    const c = 20;
    if (!t || !a)
      return;
    const s = [];
    r.getEnabled().forEach((l) => {
      if (!l || l != null && l.disabled)
        return;
      const u = n.get(l.id);
      if (u)
        switch (e.code) {
          case ue.Down:
            a.top < u.top && s.push(l);
            break;
          case ue.Up:
            a.top > u.top + c && s.push(l);
            break;
          case ue.Left:
            a.left >= u.left + u.width && s.push(l);
            break;
          case ue.Right:
            a.left + a.width <= u.left && s.push(l);
            break;
        }
    });
    const d = lc({
      active: t,
      collisionRect: a,
      droppableRects: n,
      droppableContainers: s,
      pointerCoordinates: null
    }), f = ti(d, "id");
    if (f != null) {
      const l = r.get(f), u = l == null ? void 0 : l.node.current, v = l == null ? void 0 : l.rect.current;
      if (u && v)
        return ((i = l.data.current) == null ? void 0 : i.type) === "container" ? {
          x: v.left,
          y: v.top + c
        } : {
          x: v.left,
          y: v.top
        };
    }
  }
}, mi = ft(), On = (e, t) => Re.map(e, (n) => {
  var r;
  if (dt(n) && n.props) {
    if (((r = n == null ? void 0 : n.props) == null ? void 0 : r.__TYPE) === t)
      return n;
    if (n.props.children)
      return On(n.props.children, t);
  }
}), gu = {
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
}, bi = ({
  children: e,
  multipleDrags: t,
  onValidate: n,
  validate: r,
  reboot: a,
  propValidate: i,
  modifiers: c,
  screenReaderInstructions: s,
  announcements: d,
  defaultState: f,
  defaultValidate: l,
  onState: u,
  id: v
}) => {
  const [h, m] = ne([]), [b, x] = ne(null), [w, D] = ne(
    () => Object.keys(f).length > 0 ? f : N()
  ), O = Q(!1);
  function N() {
    return [
      ...On(e, "droppable"),
      ...On(e, "general-draggable")
    ].reduce(
      (L, Y) => ({
        ...L,
        [Y.props.id]: Y.props.children ? [
          ...On(Y.props.children, "draggable").map(
            (U) => U.props.id
          )
        ] : []
      }),
      {}
    );
  }
  const _ = Object.freeze({
    restrictToVerticalAxis: pu,
    restrictToHorizontalAxis: fu
  }), k = oc(
    kr(di),
    kr(fi),
    kr(_o, {
      coordinateGetter: hu
    })
  ), T = (L, Y) => {
    const U = Object.keys(w).pop();
    let G = [...h];
    if (U === L.id && h.includes(Y) && (G = h.filter((oe) => oe !== Y)), U !== L.id && (G = [
      ...h.filter((oe) => oe !== Y),
      L.data.current.validate.includes(Y) ? Y : ""
    ].filter((oe) => !!oe)), !t) {
      const oe = w[L.id][0];
      G = oe ? G.filter((X) => X !== oe) : G;
    }
    n && n({ validate: [...G], active: !0 }), m(G);
  }, I = (L) => L in w ? L : Object.keys(w).find((Y) => w[Y].includes(L)), W = ({ active: L, over: Y }) => {
    if (!Y)
      return;
    x(null);
    const U = Object.keys(w).pop(), G = I(Y.id), oe = I(L.id);
    oe !== G && (T(Y, L.id), D((X) => {
      O.current = !0;
      const K = X[oe].filter(
        (C) => C !== L.id
      ), le = [...X[G]];
      return t ? {
        ...X,
        [oe]: K,
        [G]: [...le, L.id]
      } : {
        ...{
          ...X,
          [oe]: K,
          [G]: G === U ? [...le, L.id] : [L.id]
        },
        ...G !== U && X[G].length > 0 && {
          [U]: [
            ...X[U].filter((C) => C !== L.id),
            ...X[G]
          ]
        }
      };
    }));
  }, Z = (L) => Re.map(L, (Y) => {
    if (!Y.props)
      return Y;
    if (Y.props.__TYPE !== "draggable")
      return Y.props.id in w && w[Y.props.id].length > 0 ? Pe(Y, { ...Y.props }, [
        ...w[Y.props.id].map(
          (U) => On(e, "draggable").filter(
            (G) => G.props.id === U
          )
        ).flat()
      ]) : Y.props.children ? Pe(Y, {
        ...Y.props,
        children: Z(Y.props.children)
      }) : Y;
  });
  return J(() => {
    a && (D(() => N()), m([]), n && n({ validate: [], active: !1 }));
  }, [a]), J(() => {
    Object.keys(f).length !== 0 && D(f);
  }, [f]), J(() => {
    l.length !== 0 && m(l);
  }, [l]), J(() => {
    u && O.current && (O.current = !1, u({
      state: { key: v, newObjectState: { ...w }, validateId: h }
    }));
  }, [u, w]), /* @__PURE__ */ p(
    mi.Provider,
    {
      value: {
        listId: h,
        propValidate: i,
        validate: r,
        isDragging: b
      },
      children: /* @__PURE__ */ p(
        iu,
        {
          sensors: k,
          screenReaderInstructions: {
            draggable: s
          },
          accessibility: { announcements: d },
          onDragStart: ({ active: L }) => x(L.id),
          onDragEnd: W,
          onDragCancel: () => x(null),
          ...c && { modifiers: [_[c]] },
          children: Z(e)
        }
      )
    }
  );
};
bi.defaultProps = {
  multipleDrags: !1,
  validate: !1,
  reboot: !1,
  propValidate: "data-validation",
  announcements: gu,
  defaultState: {},
  defaultValidate: [],
  screenReaderInstructions: "Para recoger un elemento arrastrable, presiona la barra espaciadora o la tecla Enter. Mientras arrastras, usa las teclas de flecha para mover el elemento en cualquier dirección deseada. Presiona nuevamente la barra espaciadora o la tecla Enter para soltar el elemento en su nueva posición, o presiona escape para cancelar."
};
bi.propTypes = {
  children: o.oneOfType([
    o.element,
    o.arrayOf(o.element),
    o.node,
    o.arrayOf(o.node)
  ]),
  multipleDrags: o.bool,
  onValidate: o.func,
  reboot: o.bool,
  validate: o.bool.isRequired,
  propValidate: o.string.isRequired,
  modifiers: o.oneOf([
    "restrictToVerticalAxis",
    "restrictToHorizontalAxis"
  ]),
  screenReaderInstructions: o.string.isRequired,
  announcements: o.object.isRequired,
  defaultState: o.object,
  defaultValidate: o.array,
  onState: o.func,
  id: o.string
};
const mu = "_pop_1elvh_1", rn = {
  "c-droppable": "_c-droppable_1elvh_1",
  "c-droppable--active": "_c-droppable--active_1elvh_22",
  "c-draggable": "_c-draggable_1elvh_27",
  "c-draggable--active": "_c-draggable--active_1elvh_56",
  "is-draggable--active-animation": "_is-draggable--active-animation_1elvh_73",
  pop: mu
}, yi = ({
  children: e,
  id: t,
  addClass: n,
  dragging: r,
  label: a,
  attribute: i,
  disabledDefaultAttributes: c,
  element: s,
  defaultStyle: d,
  __TYPE: f,
  ...l
}) => {
  const u = s || "div", { listId: v, propValidate: h, validate: m, isDragging: b } = Se(mi), { attributes: x, listeners: w, setNodeRef: D, transform: O } = cu({
    id: t,
    disabled: m,
    data: {
      label: a
    },
    attributes: i
  });
  return /* @__PURE__ */ p(
    u,
    {
      id: t,
      ref: D,
      "data-type": f,
      className: re({
        [rn["c-draggable"]]: !d,
        [`${r} ${rn["is-draggable--active-animation"]}`]: b === t && !d,
        [n]: n
      }),
      style: { transform: no.Translate.toString(O) },
      ...m && { [h]: !!v.includes(t) },
      ...!c && { ...x },
      ...w,
      ...l,
      children: e
    }
  );
};
yi.defaultProps = {
  __TYPE: "draggable",
  dragging: rn["c-draggable--active"],
  disabledDefaultAttributes: !1
};
yi.propTypes = {
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
  defaultStyle: o.bool,
  __TYPE: be("draggable")
};
const _i = ({
  children: e,
  id: t,
  validate: n,
  addClass: r,
  over: a,
  label: i,
  element: c,
  defaultStyle: s,
  __TYPE: d,
  ...f
}) => {
  const l = c || "div", { isOver: u, setNodeRef: v } = gi({
    id: t,
    data: {
      validate: n,
      label: i,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(
    l,
    {
      ref: v,
      "data-type": d,
      className: re({
        [rn["c-droppable"]]: !s,
        [a]: u && !s,
        [r]: r
      }),
      ...f,
      children: e
    }
  );
};
_i.defaultProps = {
  __TYPE: "droppable",
  over: rn["c-droppable--active"]
};
_i.propTypes = {
  children: o.oneOfType([o.element, o.node]),
  id: o.string.isRequired,
  validate: o.array.isRequired,
  addClass: o.string,
  over: o.string,
  label: o.string.isRequired,
  element: o.string,
  defaultStyle: o.bool,
  __TYPE: be("droppable")
};
const wi = ({
  children: e,
  addClass: t,
  over: n,
  id: r,
  label: a,
  element: i,
  defaultStyle: c,
  __TYPE: s,
  ...d
}) => {
  const f = i || "div", { isOver: l, setNodeRef: u } = gi({
    id: r,
    data: {
      label: a,
      type: "container"
    }
  });
  return /* @__PURE__ */ p(
    f,
    {
      id: r,
      ref: u,
      "data-type": s,
      className: re({
        [rn["c-droppable"]]: !c,
        [n]: l && !c,
        [t]: t
      }),
      ...d,
      children: e
    }
  );
};
wi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  over: o.string,
  id: o.string.isRequired,
  label: o.string.isRequired,
  element: o.string,
  defaultStyle: o.bool,
  __TYPE: be("general-draggable")
};
wi.defaultProps = {
  __TYPE: "general-draggable",
  id: Xa("unique-id-general-"),
  label: "contendor inicial"
};
const Op = ({ ...e }) => /* @__PURE__ */ p("span", { id: "hc_extension_svg_filters", ...e, children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", height: "0", children: /* @__PURE__ */ A("defs", { children: [
  /* @__PURE__ */ p("filter", { id: "hc_extension_off", x: "0", y: "0", width: "99999", height: "99999", children: /* @__PURE__ */ A("feComponentTransfer", { children: [
    /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 1" }),
    /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" })
  ] }) }),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_highcontrast",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ A("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "3.0" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "3.0" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "3.0" })
      ] })
    }
  ),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_highcontrast_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ A("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ A(
    "filter",
    {
      id: "hc_extension_grayscale",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
          }
        ),
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "3" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "3" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "3" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_grayscale_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ A("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
      ] })
    }
  ),
  /* @__PURE__ */ p(
    "filter",
    {
      id: "hc_extension_invert",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: /* @__PURE__ */ A("feComponentTransfer", { children: [
        /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
        /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
      ] })
    }
  ),
  /* @__PURE__ */ A(
    "filter",
    {
      id: "hc_extension_invert_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "1.7" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "1.7" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ A(
    "filter",
    {
      id: "hc_extension_yellow_on_black",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "3", offset: "1" })
        ] }),
        /* @__PURE__ */ p(
          "feColorMatrix",
          {
            type: "matrix",
            values: "0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ A(
    "filter",
    {
      id: "hc_extension_yellow_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "1 0" })
        ] }),
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", exponent: "0.33" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", exponent: "0.33" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ A(
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
        /* @__PURE__ */ A("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0.97 0.52" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0.03" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0.98 0.06" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ A(
    "filter",
    {
      id: "hc_extension_red_on_white_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ A(
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
        /* @__PURE__ */ A("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "0.09 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0.16" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ A(
    "filter",
    {
      id: "hc_extension_green_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ A(
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
        /* @__PURE__ */ A("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0.99 0.16" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 1" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ A(
    "filter",
    {
      id: "hc_extension_yellow_on_blue_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  ),
  /* @__PURE__ */ A(
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
        /* @__PURE__ */ A("feComponentTransfer", { in: "colormatrix", result: "componentTransfer", children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0.98 0" }),
          /* @__PURE__ */ p("feFuncA", { type: "table", tableValues: "0 1" })
        ] }),
        /* @__PURE__ */ p(
          "feBlend",
          {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ A(
    "filter",
    {
      id: "hc_extension_white_on_black_back",
      x: "0",
      y: "0",
      width: "99999",
      height: "99999",
      children: [
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "table", tableValues: "1 0" }),
          /* @__PURE__ */ p("feFuncG", { type: "table", tableValues: "0 0" }),
          /* @__PURE__ */ p("feFuncB", { type: "table", tableValues: "0 0" })
        ] }),
        /* @__PURE__ */ A("feComponentTransfer", { children: [
          /* @__PURE__ */ p("feFuncR", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncG", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" }),
          /* @__PURE__ */ p("feFuncB", { type: "gamma", amplitude: "-1", exponent: "5", offset: "1" })
        ] })
      ]
    }
  )
] }) }) }), pa = {
  "c-image": "_c-image_1lngo_1",
  "c-image__figcaption": "_c-image__figcaption_1lngo_16"
}, xo = _t(({
  url: e,
  alt: t,
  title: n,
  width: r,
  addClass: a,
  noCaption: i,
  defaultStyle: c,
  lazySize: s,
  ...d
}, f) => {
  const [l, u] = ne(!1), v = new URL("/ui-components-books/dist/assets/images/base-image.png", self.location).href, h = (b) => u(b), m = l ? v : `${e}`;
  return /* @__PURE__ */ A(
    "figure",
    {
      className: re({
        [pa["c-image"]]: !c,
        [a]: a
      }),
      ...r && { style: { maxWidth: `${/%/gi.test(r) ? r : `${r}px`}` } },
      children: [
        /* @__PURE__ */ p(
          "img",
          {
            ref: f,
            src: m,
            onError: h,
            alt: t,
            ...s && { ...s },
            ...d
          }
        ),
        !i && /* @__PURE__ */ p("figcaption", { className: pa["c-image__figcaption"], children: /* @__PURE__ */ A("p", { children: [
          /* @__PURE__ */ A("strong", { children: [
            n,
            " "
          ] }),
          t
        ] }) })
      ]
    }
  );
});
xo.displayName = "Image";
xo.defaultProps = {
  title: "Image 1.",
  alt: "Default image.",
  noCaption: !1
};
xo.propTypes = {
  url: o.string,
  alt: o.string,
  title: o.string,
  width: o.string,
  addClass: o.string,
  noCaption: o.bool,
  defaultStyle: o.bool,
  lazySize: o.shape({
    width: o.string,
    height: o.string
  })
};
const An = {
  "c-label": "_c-label_1pfl8_1",
  "c-input": "_c-input_1pfl8_13",
  "c-input__wrapper-style": "_c-input__wrapper-style_1pfl8_33",
  "c-input__left-addon": "_c-input__left-addon_1pfl8_38",
  "c-input__right-addon": "_c-input__right-addon_1pfl8_38"
}, xi = _t(({ id: e, type: t, value: n, placeholder: r, label: a, addClass: i, isLabelVisible: c, isDisabled: s, isRequired: d, isReadOnly: f, defaultStyle: l, onValue: u }, v) => {
  const h = e || Ct(), m = ({ target: b }) => {
    u && u({ id: h, value: b.value });
  };
  return ["text", "email", "password", "date"].includes(t) ? /* @__PURE__ */ A(
    "label",
    {
      htmlFor: h,
      className: re({
        [An["c-label"]]: !l,
        [i]: i
      }),
      children: [
        /* @__PURE__ */ A("span", { className: `${!c && "u-sr-only"}`, children: [
          " ",
          a,
          " "
        ] }),
        /* @__PURE__ */ p(
          "input",
          {
            id: h,
            ref: v,
            type: t,
            name: h,
            value: n,
            disabled: s,
            required: d,
            placeholder: r,
            autoComplete: "off",
            onChange: m,
            className: re({
              [An["c-input"]]: !l
            }),
            ...f && { readOnly: f, "aria-readonly": f }
          }
        )
      ]
    }
  ) : null;
});
xi.defaultProps = {
  type: "text",
  placeholder: "Default placeholder",
  label: "Default input label",
  isLabelVisible: !1,
  __TYPE: "Input"
};
xi.propTypes = {
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
  defaultStyle: o.bool,
  onValue: o.func,
  __TYPE: be("Input")
};
const bu = ({ children: e, onAllValue: t }) => {
  const [n, r] = ne([]), a = (s) => r([...n.filter((d) => d.id !== s.id), { ...s }]);
  J(() => {
    t && t(n);
  }, [n, t]);
  const i = (s, d, f) => Re.toArray(s).map((l) => l.props.__TYPE === d ? Pe(l, { ...l.props, ...f }) : l);
  return Re.map(e, (s) => {
    var d, f;
    return dt(s) ? ((d = s == null ? void 0 : s.props) == null ? void 0 : d.__TYPE) === "InputStyle" ? Pe(s, { ...s.props, children: i(s.props.children, "Input", { onValue: a }) }) : ((f = s == null ? void 0 : s.props) == null ? void 0 : f.__TYPE) === "Input" ? Pe(s, { ...s.props, onValue: a }) : s : null;
  });
};
bu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  onAllValue: o.func
};
const Oi = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: re({
      [An["c-input__wrapper-style"]]: !n,
      [t]: t
    }),
    children: Ze(e, ["InputLeftAddon", "InputRightAddon", "Input"])
  }
);
Oi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("InputStyle")
};
Oi.defaultProps = {
  __TYPE: "InputStyle"
};
const Ti = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: re({
      [An["c-input__left-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
Ti.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("InputLeftAddon")
};
Ti.defaultProps = {
  __TYPE: "InputLeftAddon"
};
const Ei = ({ children: e, addClass: t, defaultStyle: n }) => /* @__PURE__ */ p(
  "div",
  {
    className: re({
      [An["c-input__right-addon"]]: !n,
      [t]: t
    }),
    children: e
  }
);
Ei.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element, o.arrayOf(o.node), o.node]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("InputRightAddon")
};
Ei.defaultProps = {
  __TYPE: "InputRightAddon"
};
const yu = {
  "c-kbd": "_c-kbd_qh4rt_1"
}, _u = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "kbd",
  {
    className: re({
      [yu["c-kbd"]]: !n,
      [t]: t
    }),
    ...r,
    children: e
  }
);
_u.propTypes = {
  children: o.string,
  addClass: o.string,
  defaultStyle: o.bool
};
const Si = ({ children: e, link: t, addClass: n, isExternal: r, label: a, ...i }) => /* @__PURE__ */ p(
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
Si.defaultProps = {
  label: "Default label to link",
  isExternal: !1,
  link: "#"
};
Si.propTypes = {
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
const Ci = {
  "c-list-item__icon": "_c-list-item__icon_bov12_1",
  "c-List": "_c-List_bov12_11"
}, wu = ({ children: e, addClass: t, defaultStyle: n, ...r }) => /* @__PURE__ */ p(
  "ul",
  {
    className: re({
      [Ci["c-List"]]: !n,
      [t]: t
    }),
    ...r,
    children: Ze(e, ["ListItem"])
  }
);
wu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string,
  defaultStyle: o.bool
};
const Pi = ({ children: e, addClass: t, __TYPE: n, ...r }) => {
  const a = Re.map(e, (i) => {
    var c;
    return ((c = i == null ? void 0 : i.props) == null ? void 0 : c.__TYPE) === "Icon" ? Pe(i, { ...i.props, addClass: Ci["c-list-item__icon"] }) : i;
  });
  return /* @__PURE__ */ p("li", { ...t && { className: `${t}` }, "data-type": n, ...r, children: a });
};
Pi.propTypes = {
  children: o.oneOfType([o.arrayOf(o.node), o.arrayOf(o.element), o.element, o.node]),
  addClass: o.string,
  __TYPE: be("ListItem")
};
Pi.defaultProps = {
  __TYPE: "ListItem"
};
const xu = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ol", { ...t && { className: `${t}` }, ...n, children: Ze(e, ["ListItem"]) });
xu.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
const Ou = ({ children: e, addClass: t, ...n }) => /* @__PURE__ */ p("ul", { ...t && { className: `${t}` }, ...n, children: Ze(e, ["ListItem"]) });
Ou.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.element]),
  addClass: o.string
};
var Vr = function() {
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
function qr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u")
    return;
  var e = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(","), r = function() {
    function f(l, u) {
      qr(this, f), this._inertManager = u, this._rootElement = l, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return Vr(f, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(u) {
          this._unmanageNode(u.node);
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
      value: function(u) {
        var v = this;
        c(u, function(x) {
          return v._visitNode(x);
        });
        var h = document.activeElement;
        if (!document.body.contains(u)) {
          for (var m = u, b = void 0; m; ) {
            if (m.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              b = /** @type {!ShadowRoot} */
              m;
              break;
            }
            m = m.parentNode;
          }
          b && (h = b.activeElement);
        }
        u.contains(h) && (h.blur(), h === document.activeElement && document.body.focus());
      }
      /**
       * @param {!Node} node
       */
    }, {
      key: "_visitNode",
      value: function(u) {
        if (u.nodeType === Node.ELEMENT_NODE) {
          var v = (
            /** @type {!HTMLElement} */
            u
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
      value: function(u) {
        var v = this._inertManager.register(u, this);
        this._managedNodes.add(v);
      }
      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_unmanageNode",
      value: function(u) {
        var v = this._inertManager.deregister(u, this);
        v && this._managedNodes.delete(v);
      }
      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */
    }, {
      key: "_unmanageSubtree",
      value: function(u) {
        var v = this;
        c(u, function(h) {
          return v._unmanageNode(h);
        });
      }
      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!HTMLElement} node
       */
    }, {
      key: "_adoptInertRoot",
      value: function(u) {
        var v = this._inertManager.getInertRoot(u);
        v || (this._inertManager.setInert(u, !0), v = this._inertManager.getInertRoot(u)), v.managedNodes.forEach(function(h) {
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
      value: function(u, v) {
        u.forEach(function(h) {
          var m = (
            /** @type {!HTMLElement} */
            h.target
          );
          if (h.type === "childList")
            e.call(h.addedNodes).forEach(function(x) {
              this._makeSubtreeUnfocusable(x);
            }, this), e.call(h.removedNodes).forEach(function(x) {
              this._unmanageSubtree(x);
            }, this);
          else if (h.type === "attributes") {
            if (h.attributeName === "tabindex")
              this._manageNode(m);
            else if (m !== this._rootElement && h.attributeName === "inert" && m.hasAttribute("inert")) {
              this._adoptInertRoot(m);
              var b = this._inertManager.getInertRoot(m);
              this._managedNodes.forEach(function(x) {
                m.contains(x.node) && b._manageNode(x.node);
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
      set: function(u) {
        this._savedAriaHidden = u;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), f;
  }(), a = function() {
    function f(l, u) {
      qr(this, f), this._node = l, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([u]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return Vr(f, [{
      key: "destructor",
      value: function() {
        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var u = (
            /** @type {!HTMLElement} */
            this._node
          );
          this._savedTabIndex !== null ? u.setAttribute("tabindex", this._savedTabIndex) : u.removeAttribute("tabindex"), this._overrodeFocusMethod && delete u.focus;
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
          var u = (
            /** @type {!HTMLElement} */
            this.node
          );
          if (t.call(u, n)) {
            if (
              /** @type {!HTMLElement} */
              u.tabIndex === -1 && this.hasSavedTabIndex
            )
              return;
            u.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            u.tabIndex), u.setAttribute("tabindex", "-1"), u.nodeType === Node.ELEMENT_NODE && (u.focus = function() {
            }, this._overrodeFocusMethod = !0);
          } else
            u.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            u.tabIndex, u.removeAttribute("tabindex"));
        }
      }
      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "addInertRoot",
      value: function(u) {
        this._throwIfDestroyed(), this._inertRoots.add(u);
      }
      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "removeInertRoot",
      value: function(u) {
        this._throwIfDestroyed(), this._inertRoots.delete(u), this._inertRoots.size === 0 && this.destructor();
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
      set: function(u) {
        this._throwIfDestroyed(), this._savedTabIndex = u;
      },
      get: function() {
        return this._throwIfDestroyed(), this._savedTabIndex;
      }
    }]), f;
  }(), i = function() {
    function f(l) {
      if (qr(this, f), !l)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = l, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), s(l.head || l.body || l.documentElement), l.readyState === "loading" ? l.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return Vr(f, [{
      key: "setInert",
      value: function(u, v) {
        if (v) {
          if (this._inertRoots.has(u))
            return;
          var h = new r(u, this);
          if (u.setAttribute("inert", ""), this._inertRoots.set(u, h), !this._document.body.contains(u))
            for (var m = u.parentNode; m; )
              m.nodeType === 11 && s(m), m = m.parentNode;
        } else {
          if (!this._inertRoots.has(u))
            return;
          var b = this._inertRoots.get(u);
          b.destructor(), this._inertRoots.delete(u), u.removeAttribute("inert");
        }
      }
      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {!Node} element
       * @return {!InertRoot|undefined}
       */
    }, {
      key: "getInertRoot",
      value: function(u) {
        return this._inertRoots.get(u);
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
      value: function(u, v) {
        var h = this._managedNodes.get(u);
        return h !== void 0 ? h.addInertRoot(v) : h = new a(u, v), this._managedNodes.set(u, h), h;
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
      value: function(u, v) {
        var h = this._managedNodes.get(u);
        return h ? (h.removeInertRoot(v), h.destroyed && this._managedNodes.delete(u), h) : null;
      }
      /**
       * Callback used when document has finished loading.
       */
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var u = e.call(this._document.querySelectorAll("[inert]"));
        u.forEach(function(v) {
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
      value: function(u, v) {
        var h = this;
        u.forEach(function(m) {
          switch (m.type) {
            case "childList":
              e.call(m.addedNodes).forEach(function(w) {
                if (w.nodeType === Node.ELEMENT_NODE) {
                  var D = e.call(w.querySelectorAll("[inert]"));
                  t.call(w, "[inert]") && D.unshift(w), D.forEach(function(O) {
                    this.setInert(O, !0);
                  }, h);
                }
              }, h);
              break;
            case "attributes":
              if (m.attributeName !== "inert")
                return;
              var b = (
                /** @type {!HTMLElement} */
                m.target
              ), x = b.hasAttribute("inert");
              h.setInert(b, x);
              break;
          }
        }, this);
      }
    }]), f;
  }();
  function c(f, l, u) {
    if (f.nodeType == Node.ELEMENT_NODE) {
      var v = (
        /** @type {!HTMLElement} */
        f
      );
      l && l(v);
      var h = (
        /** @type {!HTMLElement} */
        v.shadowRoot
      );
      if (h) {
        c(h, l);
        return;
      }
      if (v.localName == "content") {
        for (var m = (
          /** @type {!HTMLContentElement} */
          v
        ), b = m.getDistributedNodes ? m.getDistributedNodes() : [], x = 0; x < b.length; x++)
          c(b[x], l);
        return;
      }
      if (v.localName == "slot") {
        for (var w = (
          /** @type {!HTMLSlotElement} */
          v
        ), D = w.assignedNodes ? w.assignedNodes({ flatten: !0 }) : [], O = 0; O < D.length; O++)
          c(D[O], l);
        return;
      }
    }
    for (var N = f.firstChild; N != null; )
      c(N, l), N = N.nextSibling;
  }
  function s(f) {
    if (!f.querySelector("style#inert-style, link#inert-style")) {
      var l = document.createElement("style");
      l.setAttribute("id", "inert-style"), l.textContent = `
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
`, f.appendChild(l);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var d = new i(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      /** @this {!HTMLElement} */
      get: function() {
        return this.hasAttribute("inert");
      },
      /** @this {!HTMLElement} */
      set: function(l) {
        d.setInert(this, l);
      }
    });
  }
})();
const gr = ft(), Tu = Object.freeze({
  ESC: 27
}), Eu = "section[data-type='Section']:not([hidden]), div:not([hidden])", Ri = ({ children: e, isOpen: t, onClose: n, finalFocusRef: r }) => {
  const a = Q(), i = Q(!1), c = (v) => {
    const h = document.querySelector("#root");
    h.inert = v;
  }, s = (v) => {
    (v.keyCode || v.which) === Tu.ESC && u();
  }, d = (v, h) => {
    a.current.classList.replace(v, h);
  }, f = (v) => {
    document.querySelectorAll(v).forEach((m) => {
      m.closest(Eu) && !m.disabled && m.focus();
    });
  }, l = async (v) => {
    try {
      d("animate__fadeIn", "animate__fadeOut"), await new Promise((h) => setTimeout(h, 500)), d("animate__fadeOut", "animate__fadeIn"), c(!1), typeof v == "function" && v(), typeof r == "string" || Array.isArray(r) ? f(r) : typeof r == "object" && r.current.focus();
    } catch (h) {
      console.error("An error occurred:", h);
    }
  }, u = () => {
    l(n(!t));
  };
  return J(() => {
    const v = async () => {
      t || !i.current || (i.current = !1, c(!1), await l());
    };
    return t && (c(!0), i.current = !0, a.current && a.current.focus()), v(), () => {
      document.querySelector("#root").hasAttribute("inert") && c(!1);
    };
  }, [t]), /* @__PURE__ */ p(
    gr.Provider,
    {
      value: { isOpen: t, onKeyDown: s, onCloseModal: u, refModal: a },
      children: /* @__PURE__ */ p(fn, { id: "js-modal", children: Ze(e, ["ModalContent", "ModalOverlay"]) })
    }
  );
};
Ri.defaultProps = {
  isOpen: !1
};
Ri.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  isOpen: o.bool.isRequired,
  onClose: o.func.isRequired,
  finalFocusRef: o.oneOfType([
    o.object,
    o.string,
    o.arrayOf(o.string)
  ]).isRequired
};
const Jn = {
  "c-layout": "_c-layout_wxg2s_1",
  "c-modal": "_c-modal_wxg2s_1",
  "c-modal-container": "_c-modal-container_wxg2s_33",
  "c-close-button": "_c-close-button_wxg2s_38"
}, Di = ({
  addClass: e,
  children: t,
  onClick: n,
  onKeyDown: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const {
    isOpen: s,
    onKeyDown: d,
    onCloseModal: f,
    refModal: l
  } = Se(gr), u = (h) => {
    n && typeof n == "function" && n(h), f();
  };
  return /* @__PURE__ */ A(
    "div",
    {
      ref: l,
      role: "dialog",
      tabIndex: "-1",
      hidden: !s,
      "aria-modal": "true",
      "data-type": i,
      onKeyDown: (h) => {
        r && typeof r == "function" && r(h), d(h);
      },
      className: re(
        "animate__animated animate__fadeIn animate__faster video-interpreter-ui-modal",
        {
          [`${Jn["c-modal"]} u-px-3 u-py-3`]: !a,
          [e]: e
        }
      ),
      ...c,
      children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: re({ [Jn["c-modal-container"]]: !a }),
            "data-class": "c-modal__container",
            children: s ? t : null
          }
        ),
        /* @__PURE__ */ p(
          Ut,
          {
            addClass: re({ [Jn["c-close-button"]]: !a }),
            "data-class": "c-modal__close-button",
            label: "Cerrar modal",
            hasAriaLabel: !0,
            onClick: u,
            ...a && { defaultStyle: a },
            children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                height: "48",
                width: "48",
                viewBox: "0 0 48 48",
                children: /* @__PURE__ */ p(
                  "path",
                  {
                    id: "close",
                    d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
                  }
                )
              }
            ) })
          }
        )
      ]
    }
  );
};
Di.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  addClass: o.string,
  onClick: o.func,
  onKeyDown: o.func,
  defaultStyle: o.bool,
  __TYPE: be("ModalContent")
};
Di.defaultProps = {
  __TYPE: "ModalContent"
};
const Ni = ({ addClass: e, onClick: t, defaultStyle: n }) => {
  const { isOpen: r, onCloseModal: a } = Se(gr), i = (c) => {
    t && typeof t == "function" && t(c), a();
  };
  return /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [Jn["c-layout"]]: !n,
        [e]: e
      }),
      onClick: i,
      hidden: !r
    }
  );
};
Ni.propTypes = {
  addClass: o.string,
  onClick: o.func,
  defaultStyle: o.bool,
  __TYPE: be("ModalOverlay")
};
Ni.defaultProps = {
  __TYPE: "ModalOverlay"
};
const Su = ({ children: e, onClick: t }) => {
  const { onCloseModal: n } = Se(gr), r = (a) => {
    t && t(a), n();
  };
  return Pe(e, { ...e.props, onClick: r });
};
Su.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  onClick: o.func
};
const on = {
  "c-number-input": "_c-number-input_19kow_1",
  "c-number-input__label": "_c-number-input__label_19kow_16",
  "c-number-input__input": "_c-number-input__input_19kow_20",
  "c-number-input__stepper": "_c-number-input__stepper_19kow_40",
  "c-number-input__button": "_c-number-input__button_19kow_59"
}, mr = ft(), Ii = ({ children: e, addClass: t, keepWithinRange: n, defaultValue: r, min: a, max: i, step: c, onValue: s }) => {
  const [d, f] = ne(r || 0), l = () => {
    if (n && d > i)
      return f(i);
    f((m) => m + c);
  }, u = () => {
    if (n && d < a)
      return f(a);
    f((m) => m - c);
  }, v = (m) => f(m), h = (m) => n && d === m;
  return J(() => {
    s && s(d);
  }, [d, s]), /* @__PURE__ */ p(
    mr.Provider,
    {
      value: {
        counter: d,
        min: a || Number.MIN_SAFE_INTEGER,
        max: i || Number.MAX_SAFE_INTEGER,
        validate: h,
        onChangeValue: v,
        onIncrementValue: l,
        onDecrementValue: u
      },
      children: /* @__PURE__ */ p("div", { className: `${on["c-number-input"]} ${t ?? ""}`, children: Ze(e, ["NumberInputField", "NumberInputStepper"]) })
    }
  );
};
Ii.propTypes = {
  children: o.arrayOf(o.element),
  addClass: o.string,
  max: o.number,
  min: o.number,
  defaultValue: o.number,
  step: o.number,
  onValue: o.func,
  keepWithinRange: o.bool
};
Ii.defaultProps = {
  step: 1
};
const Ai = _t(
  ({ id: e, name: t, label: n, pattern: r, addClass: a, isLabelVisible: i }, c) => {
    const {
      counter: s,
      onChangeValue: d,
      onIncrementValue: f,
      onDecrementValue: l,
      min: u,
      max: v
    } = Se(mr), h = e || Ct(), m = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    }), b = ({ target: w }) => {
      if (!isNaN(w.value) && w.value)
        return d(parseInt(w.value));
      d(0);
    }, x = (w) => {
      switch (w.keyCode || w.which) {
        case m.UP:
          f();
          break;
        case m.DOWN:
          l();
          break;
        case m.END:
          d(v);
          break;
        case m.HOME:
          d(u);
          break;
        default:
          return null;
      }
    };
    return /* @__PURE__ */ A(
      "label",
      {
        htmlFor: h,
        className: `${on["c-number-input__label"]} ${a ?? ""}`,
        children: [
          /* @__PURE__ */ A("span", { className: `${!i && "u-sr-only"}`, children: [
            " ",
            n,
            " "
          ] }),
          /* @__PURE__ */ p(
            "input",
            {
              id: h,
              ref: c,
              type: "text",
              name: t,
              role: "spinbutton",
              inputMode: "decimal",
              pattern: r,
              autoCorrect: "off",
              autoComplete: "off",
              className: on["c-number-input__input"],
              onChange: b,
              onKeyDown: x,
              ...s || s === 0 ? {
                value: s,
                "aria-valuemax": v,
                "aria-valuemin": u,
                "aria-valuenow": s,
                "aria-valuetext": `${s}`
              } : { value: "" }
            }
          )
        ]
      }
    );
  }
);
Ai.defaultProps = {
  name: "number-input-field",
  label: "Default input number",
  pattern: "[0-9]*(.[0-9]+)?",
  __TYPE: "NumberInputField"
};
Ai.propTypes = {
  id: o.string,
  name: o.string,
  label: o.string,
  pattern: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  __TYPE: be("NumberInputField")
};
const Mi = ({ children: e, addClass: t }) => /* @__PURE__ */ p("div", { className: `${on["c-number-input__stepper"]} ${t ?? ""}`, children: Ze(e, ["NumberIncrementStepper", "NumberDecrementStepper"]) });
Mi.propTypes = {
  children: o.oneOfType([o.element, o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: be("NumberInputStepper")
};
Mi.defaultProps = {
  __TYPE: "NumberInputStepper"
};
const $i = ({ children: e, addClass: t, label: n }) => {
  const { onDecrementValue: r, validate: a, min: i } = Se(mr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Decrementar valor"}`,
      className: `${on["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" }) }) })
    }
  );
};
$i.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: be("NumberDecrementStepper"),
  label: o.string
};
$i.defaultProps = {
  __TYPE: "NumberDecrementStepper"
};
const ki = ({ children: e, addClass: t, label: n }) => {
  const { onIncrementValue: r, validate: a, max: i } = Se(mr);
  return /* @__PURE__ */ p(
    "button",
    {
      tabIndex: -1,
      onClick: r,
      disabled: a(i),
      "aria-label": `${n ?? "Incrementar valor"}`,
      className: `${on["c-number-input__button"]} ${t ?? ""}`,
      children: e || /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "arrow_drop_up", d: "m14 28 10-10.05L34 28Z" }) }) })
    }
  );
};
ki.propTypes = {
  children: o.oneOfType([o.node, o.element, o.arrayOf(o.element), o.arrayOf(o.element)]),
  addClass: o.string,
  __TYPE: be("NumberIncrementStepper"),
  label: o.string
};
ki.defaultProps = {
  __TYPE: "NumberIncrementStepper"
};
const Cu = (e) => {
  const {
    boundaryCount: t = 1,
    count: n = 1,
    defaultPage: r,
    disabled: a = !1,
    hideNextButton: i = !1,
    hidePrevButton: c = !1,
    onChange: s,
    showFirstButton: d = !1,
    showLastButton: f = !1,
    siblingCount: l = 1,
    ...u
  } = e, [v, h] = ne(r || 1);
  J(() => {
    r && h(r);
  }, [r]);
  const m = (T, I) => {
    h(I), s && s(T, I);
  }, b = (T, I) => {
    const W = I - T + 1;
    return Array.from({ length: W }, (Z, L) => T + L);
  }, x = b(1, Math.min(t, n)), w = b(
    Math.max(n - t + 1, t + 1),
    n
  ), D = Math.max(
    Math.min(
      // Inicio natural
      v - l,
      // Limite inferior cuando la página es mayor
      n - t - l * 2 - 1
    ),
    // Mayor que el startPages
    t + 2
  ), O = Math.min(
    Math.max(
      // Final natural
      v + l,
      // Limite superior cuando la página es menor
      t + l * 2 + 2
    ),
    // Menor que el endPages
    w.length > 0 ? w[0] - 2 : n - 1
  ), N = [
    ...d ? ["first"] : [],
    ...c ? [] : ["previous"],
    ...x,
    // Comienza el ellipsis
    ...D > t + 2 ? ["start-ellipsis"] : t + 1 < n - t ? [t + 1] : [],
    // Sibling pages
    ...b(D, O),
    // Finaliza el ellipsis
    ...O < n - t - 1 ? ["end-ellipsis"] : n - t > t ? [n - t] : [],
    ...w,
    ...i ? [] : ["next"],
    ...f ? ["last"] : []
  ], _ = (T) => {
    switch (T) {
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
    items: N.map((T) => typeof T == "number" ? {
      onClick: (I) => {
        m(I, T);
      },
      type: "page",
      page: T,
      selected: T === v,
      disabled: a,
      "aria-current": T === v ? "page" : void 0
    } : {
      onClick: (I) => {
        m(I, _(T));
      },
      type: T,
      page: _(T),
      selected: !1,
      disabled: a || T.indexOf("ellipsis") === -1 && (T === "next" || T === "last" ? v >= n : v <= 1)
    }),
    ...u
  };
}, Cn = {
  "c-pagination": "_c-pagination_1n46e_1",
  "c-pagination__ul": "_c-pagination__ul_1n46e_7",
  "c-pagination-item": "_c-pagination-item_1n46e_16",
  "c-pagination-item--selected": "_c-pagination-item--selected_1n46e_45",
  "c-pagination-item__ellipsis": "_c-pagination-item__ellipsis_1n46e_51"
}, Pu = Object.freeze({
  first: "primera",
  last: "última",
  previous: "anterior",
  next: "siguiente"
}), Ru = (e, t, n) => e === "page" ? `${n ? "" : "Ir a la "}página ${t}` : `Ir a la ${Pu[e]} página`, Li = ({
  renderItem: e,
  getItemAriaLabel: t,
  addClass: n,
  defaultStyle: r,
  ...a
}) => {
  const { items: i } = Cu({ ...a });
  return /* @__PURE__ */ p(
    "nav",
    {
      className: re({
        [Cn["c-pagination"]]: !r,
        [n]: n
      }),
      children: /* @__PURE__ */ p(
        "ul",
        {
          className: re({
            [Cn["c-pagination__ul"]]: !r
          }),
          "data-class": "c-pagination__ul",
          children: i.map((c, s) => /* @__PURE__ */ p("li", { "data-class": "c-pagination__ul-li", children: e({
            ...c,
            "aria-label": t(
              c.type,
              c.page,
              c.selected
            ),
            ...r && { defaultStyle: r }
          }) }, `pagination-item-${s}`))
        }
      )
    }
  );
};
Li.defaultProps = {
  boundaryCount: 1,
  count: 1,
  disabled: !1,
  hideNextButton: !1,
  hidePrevButton: !1,
  showFirstButton: !1,
  showLastButton: !1,
  siblingCount: 1,
  renderItem: (e) => /* @__PURE__ */ p(Oo, { ...e }),
  getItemAriaLabel: Ru
};
Li.propTypes = {
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
  getItemAriaLabel: o.func,
  defaultStyle: o.bool
};
const Oo = ({ page: e, type: t, addClass: n, disabled: r, element: a, icons: i, selected: c, defaultStyle: s, ...d }) => {
  const l = {
    previous: (i == null ? void 0 : i.previous) || /* @__PURE__ */ p("path", { id: "navigate_before", d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" }),
    next: (i == null ? void 0 : i.next) || /* @__PURE__ */ p("path", { id: "navigate_next", d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" }),
    last: (i == null ? void 0 : i.last) || /* @__PURE__ */ p("path", { id: "last_page", d: "m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z" }),
    first: (i == null ? void 0 : i.first) || /* @__PURE__ */ p("path", { id: "first_page", d: "M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z" })
  }[t];
  return t === "start-ellipsis" || t === "end-ellipsis" ? (
    // Devolvemos '...' si es de tipo ellipsis.
    /* @__PURE__ */ p("div", { className: Cn["c-pagination-item__ellipsis"], children: "..." })
  ) : Pe(
    a,
    {
      disabled: r,
      className: re({
        [Cn["c-pagination-item"]]: !s,
        [Cn["c-pagination-item--selected"]]: !s && c,
        [n]: n
      }),
      ...a.props,
      ...d
    },
    [
      // Si es de tipo página colocar la página e.g 1,2,3.
      t === "page" && e,
      // Si existe el icono agregarlo e.g icon = 'last_page'
      l ? i ? /* @__PURE__ */ p(xe, { path: l }, t) : /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: l }) }, t) : null
    ]
  );
};
Oo.propTypes = {
  page: o.number,
  type: o.string,
  addClass: o.string,
  disabled: o.bool,
  selected: o.bool,
  element: o.oneOfType([o.element, o.node, o.string]),
  defaultStyle: o.bool,
  icons: o.shape({
    first: o.string,
    last: o.string,
    next: o.string,
    previous: o.string
  })
};
Oo.defaultProps = {
  element: /* @__PURE__ */ p("button", {})
};
const en = {
  "c-panel": "_c-panel_4adu5_1",
  "c-section": "_c-section_4adu5_7",
  "c-navigation": "_c-navigation_4adu5_13",
  "c-navigation__item": "_c-navigation__item_4adu5_27",
  "c-navigation__section": "_c-navigation__section_4adu5_31",
  "c-navigation__button": "_c-navigation__button_4adu5_49"
}, br = ft(), Du = ({ children: e, defaultIndex: t, addClass: n, type: r, defaultStyle: a }) => {
  const [i, c] = ne(null), s = Q([]), d = (h) => {
    s.current.includes(h) || (s.current = [...s.current, h]);
  }, f = (h) => c(s.current[h]), l = (h) => /:.*?:/g.test(h) ? i === h : s.current[h - 1] === i, u = () => [...s.current].reduce((h, m, b) => [...h, b + 1], []), v = (h) => s.current.indexOf(h) + 1;
  return J(() => {
    s.current.length !== 0 && (t !== void 0 ? f(t - 1) : c(s.current[0]));
  }, [t, s]), /* @__PURE__ */ p(
    br.Provider,
    {
      value: {
        validation: l,
        onToggle: f,
        listId: u(),
        currentSection: v(i),
        getIndexById: v,
        addNewIdToSection: d,
        type: r
      },
      children: /* @__PURE__ */ p(
        "div",
        {
          className: re("video-interpreter-ui-panel", {
            [en["c-panel"]]: !a,
            [n]: n
          }),
          "data-value": i,
          ...r === "carrousel" && {
            role: "group",
            "aria-roledescription": "Slider"
          },
          children: e
        }
      )
    }
  );
};
Du.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element,
    o.arrayOf(o.node),
    o.node,
    o.string
  ]),
  defaultIndex: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  type: o.string
};
const ji = _t(
  ({ children: e, addClass: t, defaultStyle: n, __TYPE: r, ...a }, i) => {
    const { validation: c, addNewIdToSection: s, getIndexById: d, type: f } = Se(br), l = Ct(), u = c(l);
    return J(() => {
      l && s(l);
    }, [l]), /* @__PURE__ */ A(
      "section",
      {
        ref: i,
        role: f === "carrousel" ? "group" : "tabpanel",
        hidden: !u,
        "data-type": r,
        "aria-hidden": !u,
        "data-value": l,
        "aria-labelledby": `section-${l}`,
        className: re({
          [en["c-section"]]: !n,
          "video-interpreter-ui-section": "video-interpreter-ui-section",
          [t]: t
        }),
        ...f === "carrousel" && {
          "aria-roledescription": "Sección"
        },
        ...a,
        children: [
          /* @__PURE__ */ A("span", { id: `section-${l}`, className: "u-sr-only", children: [
            "Sección ",
            d(l)
          ] }),
          e
        ]
      }
    );
  }
);
ji.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("Section")
};
ji.defaultProps = {
  __TYPE: "Section"
};
const Nu = Object.freeze({
  previous: "anterior",
  next: "siguiente"
}), va = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Iu = (e, t, n) => e === "section" ? `${n ? "" : "Ir a la "}sección ${t}` : `Ir a la ${Nu[e]} sección`, Fi = ({
  renderItem: e,
  showPrevButton: t,
  showNextButton: n,
  icons: r,
  label: a,
  orientation: i,
  onValue: c,
  addClass: s,
  getItemAriaLabel: d,
  defaultStyle: f
}) => {
  const { validation: l, onToggle: u, listId: v, currentSection: h } = Se(br), m = Q([]), b = Object.freeze({
    previous: h - 1,
    next: h + 1
  }), x = {
    previous: (r == null ? void 0 : r.previous) || /* @__PURE__ */ p(
      "path",
      {
        id: "navigate_before",
        d: "M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
      }
    ),
    next: (r == null ? void 0 : r.next) || /* @__PURE__ */ p(
      "path",
      {
        id: "navigate_next",
        d: "m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
      }
    )
  }, [w, D] = ne([]);
  J(() => {
    v.length !== 0 && D([
      // Botón para navegar a la sección anterior.
      ...t ? ["previous"] : [],
      // Lista de todas la secciones.
      ...v || [],
      // Botón para navegar a la siguiente sección.
      ...n ? ["next"] : []
    ]);
  }, [v]);
  const O = (T) => !m.current.includes(T) && T ? m.current = [...m.current, T] : m.current, N = (T) => {
    const I = m.current[0], W = m.current[m.current.length - 1];
    if ((T.keyCode || T.which) === va.LEFT)
      if (T.target === I)
        W.focus();
      else {
        const Z = m.current.indexOf(T.target) - 1;
        m.current[Z].focus();
      }
    else if ((T.keyCode || T.which) === va.RIGHT)
      if (T.target === W)
        I.focus();
      else {
        const Z = m.current.indexOf(T.target) + 1;
        m.current[Z].focus();
      }
  }, _ = (T) => {
    u(v.findIndex((I) => I === T)), c !== void 0 && c(T, v.length);
  }, k = w.map((T) => {
    let I = [...v];
    return I = I.pop(), typeof T == "number" ? {
      onClick: (W) => {
        _(T);
      },
      type: "section",
      section: T,
      selected: l(T),
      ref: O,
      onKeyDown: N
    } : {
      onClick: () => {
        _(b[T]);
      },
      type: T,
      section: b[T],
      selected: !1,
      disabled: T === "next" ? h >= I : h <= v[0]
    };
  });
  return J(() => {
    c !== void 0 && c(h, v.length);
  }, []), /* @__PURE__ */ A(lt, { children: [
    /* @__PURE__ */ p("h2", { id: "section-list-navigation", className: "u-sr-only", children: a }),
    /* @__PURE__ */ p(
      "ul",
      {
        role: "tablist",
        "aria-labelledby": "section-list-navigation",
        "aria-orientation": i,
        className: re({
          [en["c-navigation"]]: !f,
          [s]: s
        }),
        children: e ? e(k) : k.map(({ section: T, type: I, selected: W, ...Z }, L) => /* @__PURE__ */ p(
          "li",
          {
            role: "presentation",
            "data-class": "c-navigation__item",
            className: re({
              [en["c-navigation__item"]]: !f
            }),
            children: I === "section" ? /* @__PURE__ */ p(
              "button",
              {
                id: `navigation-section-tab-${T}`,
                role: "tab",
                tabIndex: `${W ? 0 : -1}`,
                "aria-selected": W,
                "data-class": "c-navigation__section",
                className: re({
                  [en["c-navigation__section"]]: !f
                }),
                "aria-label": d(I, T, W),
                ...Z
              }
            ) : /* @__PURE__ */ p(
              "button",
              {
                type: "button",
                "data-class": "c-navigation__button",
                className: re({
                  [en["c-navigation__button"]]: !f
                }),
                "aria-label": d(I, T, W),
                ...Z,
                children: x[I] ? r ? /* @__PURE__ */ p(xe, { path: x[I] }, I) : /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: x[I]
                  }
                ) }, I) : null
              }
            )
          },
          `navigation-section-item-${L}`
        ))
      }
    )
  ] });
};
Fi.propTypes = {
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
  getItemAriaLabel: o.func,
  defaultStyle: o.bool
};
Fi.defaultProps = {
  label: "Lista de secciones",
  orientation: "horizontal",
  getItemAriaLabel: Iu
};
const Au = ({ children: e, section: t, onClick: n }) => {
  const { onToggle: r } = Se(br), a = (i) => {
    r(t - 1), n && n(i);
  };
  return Re.map(e, (i) => Pe(i, { ...i.props, onClick: a }));
};
Au.propTypes = {
  children: o.oneOfType([o.element, o.node]).isRequired,
  section: o.number.isRequired,
  onClick: o.func
};
const Mu = {
  "c-paper": "_c-paper_1sbf6_1"
}, $u = ({ children: e, color: t, addClass: n, ...r }) => {
  const a = Q(null);
  return dr(() => {
    t && a.current.style.setProperty("--clr-line", `${t}`);
  }, [t]), /* @__PURE__ */ p(
    "div",
    {
      ref: a,
      className: `${Mu["c-paper"]} ${n ?? ""}`,
      ...r,
      children: e
    }
  );
};
$u.propTypes = {
  children: o.oneOfType([
    o.element,
    o.node,
    o.arrayOf(o.element),
    o.arrayOf(o.node)
  ]),
  addClass: o.string,
  color: o.string
};
const ku = (e) => {
  const t = document.createElement("div");
  return t.setAttribute("id", e), t;
}, Lu = (e) => {
  document.body.append(e);
}, ju = (e) => {
  const t = Q(null);
  J(() => {
    const r = document.querySelector(`#${e}`), a = r || ku(e);
    return r || Lu(a), a.append(t.current), () => {
      t.current.remove(), a.childElementCount || a.remove();
    };
  }, [e]);
  function n() {
    return t.current || (t.current = document.createElement("div")), t.current;
  }
  return n();
}, fn = ({ children: e, id: t }) => {
  const n = ju(t);
  return Fa(e, n);
};
fn.propTypes = {
  children: o.any,
  id: o.string.isRequired
};
const Fu = "_row_1adiy_1", Bu = {
  row: Fu
}, Vu = _t(({ addClass: e, ...t }, n) => /* @__PURE__ */ p("div", { ref: n, className: `${Bu.row} ${e ?? ""}`, ...t }));
Vu.propTypes = {
  addClass: o.string
};
const _n = {
  "c-select-label": "_c-select-label_16c2e_1",
  "c-select-wrapper": "_c-select-wrapper_16c2e_11",
  "c-select": "_c-select_16c2e_1",
  "c-select__icon": "_c-select__icon_16c2e_38"
}, Bi = _t(
  ({
    children: e,
    id: t,
    placeholder: n,
    label: r,
    icon: a,
    addClass: i,
    isLabelVisible: c,
    isDisabled: s,
    isRequired: d,
    onChoise: f,
    defaultValue: l,
    defaultStyle: u
  }, v) => {
    const h = t || Ct(), m = ({ target: b }) => {
      f && f({ id: h, value: b.value });
    };
    return /* @__PURE__ */ A(
      "label",
      {
        htmlFor: h,
        className: re({
          [_n["c-select-label"]]: !u,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ A("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            r,
            " "
          ] }),
          /* @__PURE__ */ A("div", { className: _n["c-select-wrapper"], "data-class": "c-select-wrapper", children: [
            /* @__PURE__ */ A(
              "select",
              {
                id: h,
                ref: v,
                name: h,
                defaultValue: l,
                className: re({
                  [_n["c-select"]]: !u
                }),
                "data-class": "c-select",
                onChange: m,
                disabled: s,
                required: d,
                children: [
                  /* @__PURE__ */ p("option", { value: "default", disabled: !0, children: n }),
                  Ze(e, ["option", "optgroup"])
                ]
              }
            ),
            a ? /* @__PURE__ */ p(
              xe,
              {
                path: a,
                "data-class": "c-select__icon",
                addClass: re({ [_n["c-select__icon"]]: !u })
              }
            ) : /* @__PURE__ */ p(
              xe,
              {
                "data-class": "c-select__icon",
                addClass: re({ [_n["c-select__icon"]]: !u }),
                children: /* @__PURE__ */ p(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "48",
                    width: "48",
                    viewBox: "0 0 48 48",
                    children: /* @__PURE__ */ p("path", { id: "arrow_drop_down", d: "m24 30-10-9.95h20Z" })
                  }
                )
              }
            )
          ] })
        ]
      }
    );
  }
);
Bi.defaultProps = {
  placeholder: "Select option",
  label: "Select a option",
  defaultValue: "default",
  isLabelVisible: !1,
  __TYPE: "Select"
};
Bi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.node
  ]),
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
  defaultStyle: o.bool,
  __TYPE: be("Select")
};
const qu = ({ children: e, onAllSelect: t }) => {
  const [n, r] = ne([]), a = (c) => r([
    ...n.filter((s) => s.id !== c.id),
    { ...c }
  ]);
  return J(() => {
    t && t(n);
  }, [n, t]), Re.map(e, (c) => {
    var s;
    return dt(c) ? ((s = c == null ? void 0 : c.props) == null ? void 0 : s.__TYPE) === "Select" ? Pe(c, { ...c.props, onChoise: a }) : c : null;
  });
};
qu.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onAllSelect: o.func
};
const Yr = {
  "c-label": "_c-label_vffkq_1",
  "c-switch": "_c-switch_vffkq_6",
  "is-sm": "_is-sm_vffkq_63",
  "is-md": "_is-md_vffkq_69",
  "is-lg": "_is-lg_vffkq_75"
}, ha = Object.freeze({
  SPACE: 32,
  ENTER: 13
}), Vi = _t(
  ({
    id: e,
    name: t,
    size: n,
    value: r,
    label: a,
    addClass: i,
    isDisabled: c,
    defaultChecked: s,
    isLabelVisible: d,
    onChange: f
  }, l) => {
    const [u, v] = ne(!1), h = e || Ct(), m = ({ target: x }) => {
      if (v(x.checked), !!f) {
        if (x.checked) {
          f({ id: x.id, value: x.value });
          return;
        }
        f({ id: x.id, value: "" });
      }
    }, b = (x) => {
      ((x.keyCode || x.which) === ha.SPACE || (x.keyCode || x.which) === ha.ENTER) && v((w) => (f && f(w ? { id: h, value: "" } : { id: h, value: `${r}` }), !w));
    };
    return J(() => (s && v(!!s), () => {
      v(!1);
    }), [s]), /* @__PURE__ */ A(
      "label",
      {
        htmlFor: h,
        className: `${Yr["c-label"]} ${Yr[`is-${n}`]}`,
        children: [
          /* @__PURE__ */ A("span", { className: `${!d && "u-sr-only"}`, children: [
            " ",
            a,
            " "
          ] }),
          /* @__PURE__ */ p(
            "input",
            {
              id: h,
              ref: l,
              role: "switch",
              type: "checkbox",
              name: t,
              value: r,
              checked: u,
              "aria-disabled": c,
              className: `${Yr["c-switch"]} ${i ?? ""}`,
              onChange: m,
              onKeyDown: b,
              ...c && { disabled: !0 }
            }
          )
        ]
      }
    );
  }
);
Vi.defaultProps = {
  size: "md",
  name: "switch",
  value: "active",
  isDisabled: !1,
  isLabelVisible: !1,
  label: "Default switch label"
};
Vi.propTypes = {
  id: o.string,
  name: o.string,
  size: o.string.isRequired,
  value: o.oneOfType([
    o.string,
    o.number,
    o.bool
  ]),
  label: o.string,
  addClass: o.string,
  isDisabled: o.bool,
  defaultChecked: o.bool,
  isLabelVisible: o.bool,
  onChange: o.func
};
const To = ft(), Yu = ({ children: e, defaultIndex: t, addClass: n, ...r }) => {
  const [a, i] = ne(0), c = (d) => i(d), s = (d) => a === d;
  return J(() => {
    t !== void 0 && i(t);
  }, [t]), /* @__PURE__ */ p(To.Provider, { value: { validation: s, onToggle: c }, children: /* @__PURE__ */ p("div", { ...n && { className: `${n}` }, ...r, children: Ze(e, ["TabList", "TabPanels"]) }) });
};
Yu.propTypes = {
  children: o.arrayOf(o.element),
  defaultIndex: o.number,
  addClass: o.string
};
const Mn = {
  "c-tab__button": "_c-tab__button_h6ljq_1",
  "c-tab__list": "_c-tab__list_h6ljq_34",
  "c-tab__panels": "_c-tab__panels_h6ljq_44",
  "c-tab__panel": "_c-tab__panel_h6ljq_44",
  "c-tab__panel--active": "_c-tab__panel--active_h6ljq_53"
}, qi = ({
  children: e,
  id: t,
  selected: n,
  addClass: r,
  icon: a,
  addNewRef: i,
  onNavigation: c,
  onClick: s,
  defaultStyle: d,
  __TYPE: f,
  ...l
}) => {
  const u = Q(), { validation: v, onToggle: h } = Se(To), m = v(t), b = (x) => {
    s && s(x), h(t);
  };
  return J(() => (u.current && i(u.current), () => {
    u.current = null;
  }), [u]), /* @__PURE__ */ A(
    "button",
    {
      id: `tab-${t}`,
      role: "tab",
      ref: u,
      "data-type": f,
      tabIndex: `${m ? 0 : -1}`,
      "aria-controls": `panel-${t}`,
      "aria-selected": m,
      onKeyDown: c,
      onClick: b,
      className: re({
        [`${Mn["c-tab__button"]} u-flex`]: !d,
        [r]: r,
        [m]: n
      }),
      ...l,
      children: [
        e,
        a && a(m)
      ]
    }
  );
};
qi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  selected: o.string,
  addClass: o.string,
  icon: o.func,
  addNewRef: o.func,
  onClick: o.func,
  onNavigation: o.func,
  defaultStyle: o.bool,
  __TYPE: be("Tab")
};
qi.defaultProps = {
  __TYPE: "Tab"
};
const ga = Object.freeze({
  LEFT: 37,
  RIGHT: 39
}), Yi = ({
  children: e,
  addClass: t,
  label: n,
  orientation: r,
  defaultStyle: a,
  __TYPE: i,
  ...c
}) => {
  const s = Q([]), d = (u) => s.current = [...s.current, u], f = (u) => {
    const v = s.current[0], h = s.current[s.current.length - 1];
    if ((u.keyCode || u.which) === ga.LEFT)
      if (u.target === v)
        h.focus();
      else {
        const m = s.current.indexOf(u.target) - 1;
        s.current[m].focus();
      }
    else if ((u.keyCode || u.which) === ga.RIGHT)
      if (u.target === h)
        v.focus();
      else {
        const m = s.current.indexOf(u.target) + 1;
        s.current[m].focus();
      }
  }, l = Re.map(e, (u, v) => dt(u) ? Pe(u, {
    ...u.props,
    id: v,
    addNewRef: d,
    onNavigation: f
  }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      role: "tablist",
      "data-type": i,
      "aria-label": n,
      "aria-orientation": r,
      className: re({
        [Mn["c-tab__list"]]: !a,
        [t]: t
      }),
      ...c,
      children: Ze(l, ["Tab"])
    }
  );
};
Yi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  label: o.string,
  orientation: o.string,
  defaultStyle: o.bool,
  __TYPE: be("TabList")
};
Yi.defaultProps = {
  __TYPE: "TabList",
  label: "Simple tabs",
  orientation: "horizontal"
};
const zi = ({ children: e, id: t, addClass: n, defaultStyle: r, __TYPE: a, ...i }) => {
  const { validation: c } = Se(To), s = c(t);
  return /* @__PURE__ */ p(
    "div",
    {
      id: `panel-${t}`,
      role: "tabpanel",
      tabIndex: 0,
      "data-type": a,
      "aria-hidden": !s,
      hidden: !s,
      "aria-labelledby": `tab-${t}`,
      className: re({
        [Mn["c-tab__panel--active"]]: !r && s,
        [Mn["c-tab__panel"]]: !r && !s,
        ["video-interpreter-ui-tabpanel"]: "video-interpreter-ui-tabpanel",
        [n]: n
      }),
      ...i,
      children: e
    }
  );
};
zi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  id: o.number,
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("TabPanel")
};
zi.defaultProps = {
  __TYPE: "TabPanel"
};
const Wi = ({
  children: e,
  addClass: t,
  defaultStyle: n,
  __TYPE: r,
  ...a
}) => {
  const i = Re.map(e, (c, s) => dt(c) ? Pe(c, { ...c.props, id: s }) : null);
  return /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [Mn["c-tab__panels"]]: !n,
        [t]: t
      }),
      "data-type": r,
      ...a,
      children: Ze(i, ["TabPanel"])
    }
  );
};
Wi.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.element
  ]),
  addClass: o.string,
  defaultStyle: o.bool,
  __TYPE: be("TabPanels")
};
Wi.defaultProps = {
  __TYPE: "TabPanels"
};
const zr = {
  "c-label": "_c-label_f76r0_1",
  "c-textarea": "_c-textarea_f76r0_10",
  "c-textarea--none": "_c-textarea--none_f76r0_28",
  "c-textarea--horizontal": "_c-textarea--horizontal_f76r0_32",
  "c-textarea--vertical": "_c-textarea--vertical_f76r0_36"
}, Ui = _t(
  ({
    id: e,
    value: t,
    resize: n,
    placeholder: r,
    label: a,
    addClass: i,
    isLabelVisible: c,
    isDisabled: s,
    isRequired: d,
    defaultStyle: f,
    onValue: l,
    ...u
  }, v) => {
    const h = e || Ct(), m = ({ target: b }) => {
      l && l({ id: h, value: b.value });
    };
    return /* @__PURE__ */ A(
      "label",
      {
        htmlFor: h,
        className: re({
          [zr["c-label"]]: !f,
          [i]: i
        }),
        children: [
          /* @__PURE__ */ A("span", { className: `${!c && "u-sr-only"}`, children: [
            " ",
            a,
            " "
          ] }),
          /* @__PURE__ */ p(
            "textarea",
            {
              id: h,
              ref: v,
              defaultValue: t,
              disabled: s,
              required: d,
              placeholder: r,
              autoComplete: "off",
              onChange: m,
              "data-class": "c-textarea",
              className: re({
                [`${zr["c-textarea"]} ${zr[`c-textarea--${n}`]}`]: !f
              }),
              ...u
            }
          )
        ]
      }
    );
  }
);
Ui.defaultProps = {
  resize: "vertical",
  placeholder: "This is an example of a placeholder"
};
Ui.propTypes = {
  id: o.string,
  value: o.string,
  resize: o.oneOf(["none", "horizontal", "vertical"]),
  placeholder: o.string,
  label: o.string,
  addClass: o.string,
  isLabelVisible: o.bool,
  isDisabled: o.bool,
  isRequired: o.bool,
  defaultStyle: o.bool,
  onValue: o.func
};
const zu = La(({ children: e, theme: t = {} }) => {
  const n = (r) => {
    const a = document.createElement("style");
    document.head.append(a);
    const i = a.sheet;
    let c = "";
    for (const s in r)
      c += `--clr-${s}: ${r[s]};
`;
    i.insertRule(`:root{${c}}`);
  };
  return J(() => {
    if (Object.entries(t).length !== 0)
      return n(t), () => {
        t = {};
      };
  }, [t]), e;
});
zu.propTypes = {
  children: o.oneOfType([o.array, o.element]),
  theme: o.object.isRequired
};
var ma = function(t) {
  return t.reduce(function(n, r) {
    var a = r[0], i = r[1];
    return n[a] = i, n;
  }, {});
}, ba = typeof window < "u" && window.document && window.document.createElement ? Wt.useLayoutEffect : Wt.useEffect, Ue = "top", ct = "bottom", ut = "right", He = "left", yr = "auto", Vn = [Ue, ct, ut, He], an = "start", $n = "end", Wu = "clippingParents", Hi = "viewport", wn = "popper", Uu = "reference", ya = /* @__PURE__ */ Vn.reduce(function(e, t) {
  return e.concat([t + "-" + an, t + "-" + $n]);
}, []), Zi = /* @__PURE__ */ [].concat(Vn, [yr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + an, t + "-" + $n]);
}, []), Hu = "beforeRead", Zu = "read", Gu = "afterRead", Xu = "beforeMain", Ku = "main", Qu = "afterMain", Ju = "beforeWrite", ed = "write", td = "afterWrite", io = [Hu, Zu, Gu, Xu, Ku, Qu, Ju, ed, td];
function wt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function nt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Zt(e) {
  var t = nt(e).Element;
  return e instanceof t || e instanceof Element;
}
function et(e) {
  var t = nt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Eo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = nt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function nd(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, i = t.elements[n];
    !et(i) || !wt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(c) {
      var s = a[c];
      s === !1 ? i.removeAttribute(c) : i.setAttribute(c, s === !0 ? "" : s);
    }));
  });
}
function rd(e) {
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
      var a = t.elements[r], i = t.attributes[r] || {}, c = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = c.reduce(function(d, f) {
        return d[f] = "", d;
      }, {});
      !et(a) || !wt(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(d) {
        a.removeAttribute(d);
      }));
    });
  };
}
const od = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: nd,
  effect: rd,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var Ht = Math.max, lr = Math.min, sn = Math.round;
function so() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Gi() {
  return !/^((?!chrome|android).)*safari/i.test(so());
}
function ln(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && et(e) && (a = e.offsetWidth > 0 && sn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && sn(r.height) / e.offsetHeight || 1);
  var c = Zt(e) ? nt(e) : window, s = c.visualViewport, d = !Gi() && n, f = (r.left + (d && s ? s.offsetLeft : 0)) / a, l = (r.top + (d && s ? s.offsetTop : 0)) / i, u = r.width / a, v = r.height / i;
  return {
    width: u,
    height: v,
    top: l,
    right: f + u,
    bottom: l + v,
    left: f,
    x: f,
    y: l
  };
}
function So(e) {
  var t = ln(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Xi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Eo(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function yt(e) {
  return nt(e).getComputedStyle(e);
}
function ad(e) {
  return ["table", "td", "th"].indexOf(wt(e)) >= 0;
}
function $t(e) {
  return ((Zt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function _r(e) {
  return wt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Eo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $t(e)
  );
}
function _a(e) {
  return !et(e) || // https://github.com/popperjs/popper-core/issues/837
  yt(e).position === "fixed" ? null : e.offsetParent;
}
function id(e) {
  var t = /firefox/i.test(so()), n = /Trident/i.test(so());
  if (n && et(e)) {
    var r = yt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = _r(e);
  for (Eo(a) && (a = a.host); et(a) && ["html", "body"].indexOf(wt(a)) < 0; ) {
    var i = yt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function qn(e) {
  for (var t = nt(e), n = _a(e); n && ad(n) && yt(n).position === "static"; )
    n = _a(n);
  return n && (wt(n) === "html" || wt(n) === "body" && yt(n).position === "static") ? t : n || id(e) || t;
}
function Co(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Pn(e, t, n) {
  return Ht(e, lr(t, n));
}
function sd(e, t, n) {
  var r = Pn(e, t, n);
  return r > n ? n : r;
}
function Ki() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Qi(e) {
  return Object.assign({}, Ki(), e);
}
function Ji(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ld = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Qi(typeof t != "number" ? t : Ji(t, Vn));
};
function cd(e) {
  var t, n = e.state, r = e.name, a = e.options, i = n.elements.arrow, c = n.modifiersData.popperOffsets, s = mt(n.placement), d = Co(s), f = [He, ut].indexOf(s) >= 0, l = f ? "height" : "width";
  if (!(!i || !c)) {
    var u = ld(a.padding, n), v = So(i), h = d === "y" ? Ue : He, m = d === "y" ? ct : ut, b = n.rects.reference[l] + n.rects.reference[d] - c[d] - n.rects.popper[l], x = c[d] - n.rects.reference[d], w = qn(i), D = w ? d === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, O = b / 2 - x / 2, N = u[h], _ = D - v[l] - u[m], k = D / 2 - v[l] / 2 + O, T = Pn(N, k, _), I = d;
    n.modifiersData[r] = (t = {}, t[I] = T, t.centerOffset = T - k, t);
  }
}
function ud(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  if (a != null && !(typeof a == "string" && (a = t.elements.popper.querySelector(a), !a))) {
    if (process.env.NODE_ENV !== "production" && (et(a) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Xi(t.elements.popper, a)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = a;
  }
}
const dd = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: cd,
  effect: ud,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function cn(e) {
  return e.split("-")[1];
}
var fd = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function pd(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: sn(n * a) / a || 0,
    y: sn(r * a) / a || 0
  };
}
function wa(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, i = e.variation, c = e.offsets, s = e.position, d = e.gpuAcceleration, f = e.adaptive, l = e.roundOffsets, u = e.isFixed, v = c.x, h = v === void 0 ? 0 : v, m = c.y, b = m === void 0 ? 0 : m, x = typeof l == "function" ? l({
    x: h,
    y: b
  }) : {
    x: h,
    y: b
  };
  h = x.x, b = x.y;
  var w = c.hasOwnProperty("x"), D = c.hasOwnProperty("y"), O = He, N = Ue, _ = window;
  if (f) {
    var k = qn(n), T = "clientHeight", I = "clientWidth";
    if (k === nt(n) && (k = $t(n), yt(k).position !== "static" && s === "absolute" && (T = "scrollHeight", I = "scrollWidth")), k = k, a === Ue || (a === He || a === ut) && i === $n) {
      N = ct;
      var W = u && k === _ && _.visualViewport ? _.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      b -= W - r.height, b *= d ? 1 : -1;
    }
    if (a === He || (a === Ue || a === ct) && i === $n) {
      O = ut;
      var Z = u && k === _ && _.visualViewport ? _.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[I]
      );
      h -= Z - r.width, h *= d ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: s
  }, f && fd), Y = l === !0 ? pd({
    x: h,
    y: b
  }, nt(n)) : {
    x: h,
    y: b
  };
  if (h = Y.x, b = Y.y, d) {
    var U;
    return Object.assign({}, L, (U = {}, U[N] = D ? "0" : "", U[O] = w ? "0" : "", U.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + b + "px)" : "translate3d(" + h + "px, " + b + "px, 0)", U));
  }
  return Object.assign({}, L, (t = {}, t[N] = D ? b + "px" : "", t[O] = w ? h + "px" : "", t.transform = "", t));
}
function vd(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, c = i === void 0 ? !0 : i, s = n.roundOffsets, d = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var f = yt(t.elements.popper).transitionProperty || "";
    c && ["transform", "top", "right", "bottom", "left"].some(function(u) {
      return f.indexOf(u) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var l = {
    placement: mt(t.placement),
    variation: cn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, wa(Object.assign({}, l, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, wa(Object.assign({}, l, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: vd,
  data: {}
};
var Xn = {
  passive: !0
};
function gd(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, c = r.resize, s = c === void 0 ? !0 : c, d = nt(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(l) {
    l.addEventListener("scroll", n.update, Xn);
  }), s && d.addEventListener("resize", n.update, Xn), function() {
    i && f.forEach(function(l) {
      l.removeEventListener("scroll", n.update, Xn);
    }), s && d.removeEventListener("resize", n.update, Xn);
  };
}
const md = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: gd,
  data: {}
};
var bd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function er(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return bd[t];
  });
}
var yd = {
  start: "end",
  end: "start"
};
function xa(e) {
  return e.replace(/start|end/g, function(t) {
    return yd[t];
  });
}
function Po(e) {
  var t = nt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ro(e) {
  return ln($t(e)).left + Po(e).scrollLeft;
}
function _d(e, t) {
  var n = nt(e), r = $t(e), a = n.visualViewport, i = r.clientWidth, c = r.clientHeight, s = 0, d = 0;
  if (a) {
    i = a.width, c = a.height;
    var f = Gi();
    (f || !f && t === "fixed") && (s = a.offsetLeft, d = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s + Ro(e),
    y: d
  };
}
function wd(e) {
  var t, n = $t(e), r = Po(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ht(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Ht(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Ro(e), d = -r.scrollTop;
  return yt(a || n).direction === "rtl" && (s += Ht(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: s,
    y: d
  };
}
function Do(e) {
  var t = yt(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function es(e) {
  return ["html", "body", "#document"].indexOf(wt(e)) >= 0 ? e.ownerDocument.body : et(e) && Do(e) ? e : es(_r(e));
}
function Rn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = es(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = nt(r), c = a ? [i].concat(i.visualViewport || [], Do(r) ? r : []) : r, s = t.concat(c);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Rn(_r(c)))
  );
}
function lo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function xd(e, t) {
  var n = ln(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Oa(e, t, n) {
  return t === Hi ? lo(_d(e, n)) : Zt(t) ? xd(t, n) : lo(wd($t(e)));
}
function Od(e) {
  var t = Rn(_r(e)), n = ["absolute", "fixed"].indexOf(yt(e).position) >= 0, r = n && et(e) ? qn(e) : e;
  return Zt(r) ? t.filter(function(a) {
    return Zt(a) && Xi(a, r) && wt(a) !== "body";
  }) : [];
}
function Td(e, t, n, r) {
  var a = t === "clippingParents" ? Od(e) : [].concat(t), i = [].concat(a, [n]), c = i[0], s = i.reduce(function(d, f) {
    var l = Oa(e, f, r);
    return d.top = Ht(l.top, d.top), d.right = lr(l.right, d.right), d.bottom = lr(l.bottom, d.bottom), d.left = Ht(l.left, d.left), d;
  }, Oa(e, c, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ts(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? mt(r) : null, i = r ? cn(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, d;
  switch (a) {
    case Ue:
      d = {
        x: c,
        y: t.y - n.height
      };
      break;
    case ct:
      d = {
        x: c,
        y: t.y + t.height
      };
      break;
    case ut:
      d = {
        x: t.x + t.width,
        y: s
      };
      break;
    case He:
      d = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      d = {
        x: t.x,
        y: t.y
      };
  }
  var f = a ? Co(a) : null;
  if (f != null) {
    var l = f === "y" ? "height" : "width";
    switch (i) {
      case an:
        d[f] = d[f] - (t[l] / 2 - n[l] / 2);
        break;
      case $n:
        d[f] = d[f] + (t[l] / 2 - n[l] / 2);
        break;
    }
  }
  return d;
}
function kn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, i = n.strategy, c = i === void 0 ? e.strategy : i, s = n.boundary, d = s === void 0 ? Wu : s, f = n.rootBoundary, l = f === void 0 ? Hi : f, u = n.elementContext, v = u === void 0 ? wn : u, h = n.altBoundary, m = h === void 0 ? !1 : h, b = n.padding, x = b === void 0 ? 0 : b, w = Qi(typeof x != "number" ? x : Ji(x, Vn)), D = v === wn ? Uu : wn, O = e.rects.popper, N = e.elements[m ? D : v], _ = Td(Zt(N) ? N : N.contextElement || $t(e.elements.popper), d, l, c), k = ln(e.elements.reference), T = ts({
    reference: k,
    element: O,
    strategy: "absolute",
    placement: a
  }), I = lo(Object.assign({}, O, T)), W = v === wn ? I : k, Z = {
    top: _.top - W.top + w.top,
    bottom: W.bottom - _.bottom + w.bottom,
    left: _.left - W.left + w.left,
    right: W.right - _.right + w.right
  }, L = e.modifiersData.offset;
  if (v === wn && L) {
    var Y = L[a];
    Object.keys(Z).forEach(function(U) {
      var G = [ut, ct].indexOf(U) >= 0 ? 1 : -1, oe = [Ue, ct].indexOf(U) >= 0 ? "y" : "x";
      Z[U] += Y[oe] * G;
    });
  }
  return Z;
}
function Ed(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, i = n.rootBoundary, c = n.padding, s = n.flipVariations, d = n.allowedAutoPlacements, f = d === void 0 ? Zi : d, l = cn(r), u = l ? s ? ya : ya.filter(function(m) {
    return cn(m) === l;
  }) : Vn, v = u.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  v.length === 0 && (v = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = v.reduce(function(m, b) {
    return m[b] = kn(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[mt(b)], m;
  }, {});
  return Object.keys(h).sort(function(m, b) {
    return h[m] - h[b];
  });
}
function Sd(e) {
  if (mt(e) === yr)
    return [];
  var t = er(e);
  return [xa(e), t, xa(t)];
}
function Cd(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !0 : c, d = n.fallbackPlacements, f = n.padding, l = n.boundary, u = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, m = h === void 0 ? !0 : h, b = n.allowedAutoPlacements, x = t.options.placement, w = mt(x), D = w === x, O = d || (D || !m ? [er(x)] : Sd(x)), N = [x].concat(O).reduce(function(P, R) {
      return P.concat(mt(R) === yr ? Ed(t, {
        placement: R,
        boundary: l,
        rootBoundary: u,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : R);
    }, []), _ = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), I = !0, W = N[0], Z = 0; Z < N.length; Z++) {
      var L = N[Z], Y = mt(L), U = cn(L) === an, G = [Ue, ct].indexOf(Y) >= 0, oe = G ? "width" : "height", X = kn(t, {
        placement: L,
        boundary: l,
        rootBoundary: u,
        altBoundary: v,
        padding: f
      }), K = G ? U ? ut : He : U ? ct : Ue;
      _[oe] > k[oe] && (K = er(K));
      var le = er(K), ee = [];
      if (i && ee.push(X[Y] <= 0), s && ee.push(X[K] <= 0, X[le] <= 0), ee.every(function(P) {
        return P;
      })) {
        W = L, I = !1;
        break;
      }
      T.set(L, ee);
    }
    if (I)
      for (var C = m ? 3 : 1, j = function(R) {
        var S = N.find(function(M) {
          var V = T.get(M);
          if (V)
            return V.slice(0, R).every(function(H) {
              return H;
            });
        });
        if (S)
          return W = S, "break";
      }, y = C; y > 0; y--) {
        var E = j(y);
        if (E === "break")
          break;
      }
    t.placement !== W && (t.modifiersData[r]._skip = !0, t.placement = W, t.reset = !0);
  }
}
const Pd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Cd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ta(e, t, n) {
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
function Ea(e) {
  return [Ue, ut, ct, He].some(function(t) {
    return e[t] >= 0;
  });
}
function Rd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = kn(t, {
    elementContext: "reference"
  }), s = kn(t, {
    altBoundary: !0
  }), d = Ta(c, r), f = Ta(s, a, i), l = Ea(d), u = Ea(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: d,
    popperEscapeOffsets: f,
    isReferenceHidden: l,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": l,
    "data-popper-escaped": u
  });
}
const Dd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Rd
};
function Nd(e, t, n) {
  var r = mt(e), a = [He, Ue].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, c = i[0], s = i[1];
  return c = c || 0, s = (s || 0) * a, [He, ut].indexOf(r) >= 0 ? {
    x: s,
    y: c
  } : {
    x: c,
    y: s
  };
}
function Id(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, i = a === void 0 ? [0, 0] : a, c = Zi.reduce(function(l, u) {
    return l[u] = Nd(u, t.rects, i), l;
  }, {}), s = c[t.placement], d = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
}
const Ad = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Id
};
function Md(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ts({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const $d = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Md,
  data: {}
};
function kd(e) {
  return e === "x" ? "y" : "x";
}
function Ld(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, i = a === void 0 ? !0 : a, c = n.altAxis, s = c === void 0 ? !1 : c, d = n.boundary, f = n.rootBoundary, l = n.altBoundary, u = n.padding, v = n.tether, h = v === void 0 ? !0 : v, m = n.tetherOffset, b = m === void 0 ? 0 : m, x = kn(t, {
    boundary: d,
    rootBoundary: f,
    padding: u,
    altBoundary: l
  }), w = mt(t.placement), D = cn(t.placement), O = !D, N = Co(w), _ = kd(N), k = t.modifiersData.popperOffsets, T = t.rects.reference, I = t.rects.popper, W = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, Z = typeof W == "number" ? {
    mainAxis: W,
    altAxis: W
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, W), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var U, G = N === "y" ? Ue : He, oe = N === "y" ? ct : ut, X = N === "y" ? "height" : "width", K = k[N], le = K + x[G], ee = K - x[oe], C = h ? -I[X] / 2 : 0, j = D === an ? T[X] : I[X], y = D === an ? -I[X] : -T[X], E = t.elements.arrow, P = h && E ? So(E) : {
        width: 0,
        height: 0
      }, R = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ki(), S = R[G], M = R[oe], V = Pn(0, T[X], P[X]), H = O ? T[X] / 2 - C - V - S - Z.mainAxis : j - V - S - Z.mainAxis, q = O ? -T[X] / 2 + C + V + M + Z.mainAxis : y + V + M + Z.mainAxis, de = t.elements.arrow && qn(t.elements.arrow), F = de ? N === "y" ? de.clientTop || 0 : de.clientLeft || 0 : 0, B = (U = L == null ? void 0 : L[N]) != null ? U : 0, te = K + H - B - F, ie = K + q - B, ge = Pn(h ? lr(le, te) : le, K, h ? Ht(ee, ie) : ee);
      k[N] = ge, Y[N] = ge - K;
    }
    if (s) {
      var Ie, pt = N === "x" ? Ue : He, Fe = N === "x" ? ct : ut, we = k[_], qe = _ === "y" ? "height" : "width", Xe = we + x[pt], kt = we - x[Fe], Pt = [Ue, He].indexOf(w) !== -1, Lt = (Ie = L == null ? void 0 : L[_]) != null ? Ie : 0, jt = Pt ? Xe : we - T[qe] - I[qe] - Lt + Z.altAxis, Be = Pt ? we + T[qe] + I[qe] - Lt - Z.altAxis : kt, vt = h && Pt ? sd(jt, we, Be) : Pn(h ? jt : Xe, we, h ? Be : kt);
      k[_] = vt, Y[_] = vt - we;
    }
    t.modifiersData[r] = Y;
  }
}
const jd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ld,
  requiresIfExists: ["offset"]
};
function Fd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Bd(e) {
  return e === nt(e) || !et(e) ? Po(e) : Fd(e);
}
function Vd(e) {
  var t = e.getBoundingClientRect(), n = sn(t.width) / e.offsetWidth || 1, r = sn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function qd(e, t, n) {
  n === void 0 && (n = !1);
  var r = et(t), a = et(t) && Vd(t), i = $t(t), c = ln(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((wt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Do(i)) && (s = Bd(t)), et(t) ? (d = ln(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : i && (d.x = Ro(i))), {
    x: c.left + s.scrollLeft - d.x,
    y: c.top + s.scrollTop - d.y,
    width: c.width,
    height: c.height
  };
}
function Yd(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var c = [].concat(i.requires || [], i.requiresIfExists || []);
    c.forEach(function(s) {
      if (!n.has(s)) {
        var d = t.get(s);
        d && a(d);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function zd(e) {
  var t = Yd(e);
  return io.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Wd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Dt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(a, i) {
    return a.replace(/%s/, i);
  }, e);
}
var zt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ud = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Sa = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Hd(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Sa).filter(function(n, r, a) {
      return a.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(Dt(zt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Dt(zt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          io.indexOf(t.phase) < 0 && console.error(Dt(zt, t.name, '"phase"', "either " + io.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Dt(zt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Dt(zt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Dt(zt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Dt(zt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Sa.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(r) {
        e.find(function(a) {
          return a.name === r;
        }) == null && console.error(Dt(Ud, String(t.name), r, r));
      });
    });
  });
}
function Zd(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var a = t(r);
    if (!n.has(a))
      return n.add(a), !0;
  });
}
function Gd(e) {
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
var Ca = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Xd = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Pa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ra() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Kd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, i = a === void 0 ? Pa : a;
  return function(s, d, f) {
    f === void 0 && (f = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Pa, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: d
      },
      attributes: {},
      styles: {}
    }, u = [], v = !1, h = {
      state: l,
      setOptions: function(w) {
        var D = typeof w == "function" ? w(l.options) : w;
        b(), l.options = Object.assign({}, i, l.options, D), l.scrollParents = {
          reference: Zt(s) ? Rn(s) : s.contextElement ? Rn(s.contextElement) : [],
          popper: Rn(d)
        };
        var O = zd(Gd([].concat(r, l.options.modifiers)));
        if (l.orderedModifiers = O.filter(function(L) {
          return L.enabled;
        }), process.env.NODE_ENV !== "production") {
          var N = Zd([].concat(O, l.options.modifiers), function(L) {
            var Y = L.name;
            return Y;
          });
          if (Hd(N), mt(l.options.placement) === yr) {
            var _ = l.orderedModifiers.find(function(L) {
              var Y = L.name;
              return Y === "flip";
            });
            _ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = yt(d), T = k.marginTop, I = k.marginRight, W = k.marginBottom, Z = k.marginLeft;
          [T, I, W, Z].some(function(L) {
            return parseFloat(L);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return m(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = l.elements, D = w.reference, O = w.popper;
          if (!Ra(D, O)) {
            process.env.NODE_ENV !== "production" && console.error(Ca);
            return;
          }
          l.rects = {
            reference: qd(D, qn(O), l.options.strategy === "fixed"),
            popper: So(O)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(L) {
            return l.modifiersData[L.name] = Object.assign({}, L.data);
          });
          for (var N = 0, _ = 0; _ < l.orderedModifiers.length; _++) {
            if (process.env.NODE_ENV !== "production" && (N += 1, N > 100)) {
              console.error(Xd);
              break;
            }
            if (l.reset === !0) {
              l.reset = !1, _ = -1;
              continue;
            }
            var k = l.orderedModifiers[_], T = k.fn, I = k.options, W = I === void 0 ? {} : I, Z = k.name;
            typeof T == "function" && (l = T({
              state: l,
              options: W,
              name: Z,
              instance: h
            }) || l);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Wd(function() {
        return new Promise(function(x) {
          h.forceUpdate(), x(l);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Ra(s, d))
      return process.env.NODE_ENV !== "production" && console.error(Ca), h;
    h.setOptions(f).then(function(x) {
      !v && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function m() {
      l.orderedModifiers.forEach(function(x) {
        var w = x.name, D = x.options, O = D === void 0 ? {} : D, N = x.effect;
        if (typeof N == "function") {
          var _ = N({
            state: l,
            name: w,
            instance: h,
            options: O
          }), k = function() {
          };
          u.push(_ || k);
        }
      });
    }
    function b() {
      u.forEach(function(x) {
        return x();
      }), u = [];
    }
    return h;
  };
}
var Qd = [md, $d, hd, od, Ad, Pd, jd, dd, Dd], Jd = /* @__PURE__ */ Kd({
  defaultModifiers: Qd
}), ef = typeof Element < "u", tf = typeof Map == "function", nf = typeof Set == "function", rf = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function tr(e, t) {
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
        if (!tr(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (tf && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!tr(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (nf && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (rf && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, a[r]))
        return !1;
    if (ef && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((a[r] === "_owner" || a[r] === "__v" || a[r] === "__o") && e.$$typeof) && !tr(e[a[r]], t[a[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var of = function(t, n) {
  try {
    return tr(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, af = [], wr = function(t, n, r) {
  r === void 0 && (r = {});
  var a = Wt.useRef(null), i = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || af
  }, c = Wt.useState({
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
  }), s = c[0], d = c[1], f = Wt.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(h) {
        var m = h.state, b = Object.keys(m.elements);
        Es.flushSync(function() {
          d({
            styles: ma(b.map(function(x) {
              return [x, m.styles[x] || {}];
            })),
            attributes: ma(b.map(function(x) {
              return [x, m.attributes[x]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), l = Wt.useMemo(function() {
    var v = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return of(a.current, v) ? a.current || v : (a.current = v, v);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), u = Wt.useRef();
  return ba(function() {
    u.current && u.current.setOptions(l);
  }, [l]), ba(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || Jd, h = v(t, n, l);
      return u.current = h, function() {
        h.destroy(), u.current = null;
      };
    }
  }, [t, n, r.createPopper]), {
    state: u.current ? u.current.state : null,
    styles: s.styles,
    attributes: s.attributes,
    update: u.current ? u.current.update : null,
    forceUpdate: u.current ? u.current.forceUpdate : null
  };
};
const Wr = {
  "c-toggletip": "_c-toggletip_7t6cz_1",
  "c-toggletip--active": "_c-toggletip--active_7t6cz_17",
  "c-toggletip__arrow": "_c-toggletip__arrow_7t6cz_21"
}, sf = Object.freeze({
  ESC: 27
}), ns = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s,
  isVisible: d,
  onClick: f
}) => {
  const [l, u] = ne(!1), v = Q(null), h = Q(null), m = t || Ct(), b = (_) => u(!1), x = (_) => {
    u(!l), l && document.activeElement === v.current && !d && setTimeout(() => {
      u((k) => !k);
    }, 100), f && f(_);
  }, w = (_) => {
    (_.keyCode | _.which) === sf.ESC && l && u(!l);
  }, D = Re.map(e, (_) => dt(_) ? Pe(_, {
    ..._.props,
    "aria-describedby": t,
    ref: v,
    onClick: x,
    "data-open": l,
    ...d ? {} : { onBlur: b, onKeyDown: w }
  }) : null), { styles: O, attributes: N } = wr(
    v.current,
    h.current,
    {
      placement: r,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, c || 8]
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
    }
  );
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(lt, { children: e }) : /* @__PURE__ */ A(lt, { children: [
    D,
    /* @__PURE__ */ p(fn, { id: "js-toggletip-portal", children: /* @__PURE__ */ A(
      "div",
      {
        id: m,
        ref: h,
        role: "status",
        className: `${Wr["c-toggletip"]} ${l && Wr["c-toggletip--active"]} ${a ?? ""}`,
        style: O.popper,
        ...N.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Wr["c-toggletip__arrow"],
              "data-popper-arrow": !0,
              style: O.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
ns.defaultProps = {
  placement: "auto"
};
ns.propTypes = {
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
const Ur = {
  "c-tooltip": "_c-tooltip_17pol_1",
  "c-tooltip--active": "_c-tooltip--active_17pol_20",
  "c-tooltip__arrow": "_c-tooltip__arrow_17pol_24"
}, lf = Object.freeze({
  ESC: 27
}), rs = ({
  children: e,
  id: t,
  label: n,
  placement: r,
  addClass: a,
  hasArrow: i,
  distance: c,
  isDisabled: s
}) => {
  const [d, f] = ne(!1), l = Q(null), u = Q(null), v = Q(), h = t || Ct(), m = (T) => {
    d || f(!d);
  }, b = (T) => f(!1), x = (T) => {
    (!d || document.activeElement !== l.current) && f(!d);
  }, w = () => {
    window.clearTimeout(v.current);
  }, D = (T) => {
    v.current = setTimeout(() => {
      f(!1);
    }, 150);
  }, O = (T) => {
    (T.keyCode | T.which) === lf.ESC && d && f(!d);
  }, N = Re.map(e, (T) => dt(T) ? Pe(T, {
    ...T.props,
    "aria-describedby": t,
    ref: l,
    onFocus: m,
    onBlur: b,
    onMouseEnter: x,
    onMouseLeave: D,
    onKeyDown: O
  }) : null), { styles: _, attributes: k } = wr(
    l.current,
    u.current,
    {
      placement: r,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, c || 8]
          }
        },
        {
          name: "flip",
          options: {
            padding: 10
          }
        },
        { name: "eventListeners", enabled: d }
      ]
    }
  );
  return !n || Re.count(e) > 1 || s ? /* @__PURE__ */ p(lt, { children: e }) : /* @__PURE__ */ A(lt, { children: [
    N,
    /* @__PURE__ */ p(fn, { id: "js-tooltip-portal", children: /* @__PURE__ */ A(
      "div",
      {
        id: h,
        ref: u,
        role: "tooltip",
        "data-open": d,
        onMouseEnter: w,
        onMouseLeave: D,
        className: `${Ur["c-tooltip"]} ${d && Ur["c-tooltip--active"]} ${a ?? ""}`,
        style: _.popper,
        ...k.popper,
        children: [
          n,
          i && /* @__PURE__ */ p(
            "div",
            {
              className: Ur["c-tooltip__arrow"],
              "data-popper-arrow": !0,
              style: _.arrow
            }
          )
        ]
      }
    ) })
  ] });
};
rs.defaultProps = {
  placement: "auto"
};
rs.propTypes = {
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
const No = ft(), os = ({
  steps: e,
  isOpen: t,
  onClose: n,
  finalFocusRef: r,
  hideCloseButton: a,
  hideBackButton: i,
  ariaAttributes: c,
  defaultStyle: s,
  addClass: d
}) => {
  const [f, l] = ne(null), u = [
    ...e.reduce(
      (w, D, O) => [
        ...w,
        document.querySelector(D.target) ? { id: O + 1, ...D } : null
      ],
      []
    ).filter((w) => w !== null)
  ], v = (w) => u.filter((D) => D.id === w).reduce((D, O) => ({ ...D, ...O }), {}), h = (w) => {
    const D = document.querySelector("#root");
    D.inert = w;
  }, m = () => {
    l((w) => w < u.length ? w + 1 : w);
  }, b = () => {
    l((w) => w > 0 + 1 ? w - 1 : w);
  }, x = () => {
    l(null), n(!t), h(!1), r && r.current.focus();
  };
  return J(() => {
    t && (l(u.shift().id), h(!0));
  }, [t]), /* @__PURE__ */ p(
    No.Provider,
    {
      value: {
        isOpen: t,
        lastId: u.length,
        ...v(f),
        methods: {
          onNext: m,
          onPrev: b,
          onClose: x
        },
        defaultStyle: s
      },
      children: /* @__PURE__ */ p(fn, { id: "js-tour", children: t && /* @__PURE__ */ A(lt, { children: [
        /* @__PURE__ */ p(cf, {}),
        /* @__PURE__ */ p(
          as,
          {
            ariaAttributes: c,
            hideCloseButton: a,
            hideBackButton: i,
            addClass: d
          }
        )
      ] }) })
    }
  );
};
os.defaultProps = {
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
os.propTypes = {
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
  defaultStyle: o.bool,
  addClass: o.string,
  ariaAttributes: o.shape({
    role: o.string,
    tabIndex: o.oneOfType([o.string, o.number]),
    "aria-label": o.string,
    "aria-modal": o.oneOfType([o.string, o.bool])
  })
};
const Mt = {
  "c-layout": "_c-layout_15ivg_1",
  "c-tour-content": "_c-tour-content_15ivg_9",
  "c-tour-progress": "_c-tour-progress_15ivg_30",
  "c-tour-progress-bar": "_c-tour-progress-bar_15ivg_38",
  "c-tour-button-container": "_c-tour-button-container_15ivg_49",
  "c-tour-help": "_c-tour-help_15ivg_91",
  "c-tour-number": "_c-tour-number_15ivg_101"
}, as = ({
  ariaAttributes: e,
  hideCloseButton: t,
  hideBackButton: n,
  addClass: r
}) => {
  const {
    isOpen: a,
    lastId: i,
    methods: c,
    id: s,
    target: d,
    content: f,
    placement: l,
    distance: u,
    defaultStyle: v
  } = Se(No), h = Q(), { onClose: m, onPrev: b, onNext: x } = c, { styles: w, attributes: D } = wr(
    document.querySelector(d),
    h.current,
    {
      placement: l,
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
        { name: "eventListeners", enabled: a }
      ]
    }
  ), O = () => dt(f) ? f : Ts("p", { className: Mt["tour-description"] }, [
    f
  ]), N = () => {
    h.current.style.setProperty("--speed-movement", "0.8s"), x();
  };
  return /* @__PURE__ */ A(lt, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: re({ [Mt["c-layout"]]: !v }),
        "data-class": "c-layout"
      }
    ),
    /* @__PURE__ */ A(
      "div",
      {
        id: `unique-id-tour-element-${s}`,
        ref: h,
        style: w.popper,
        className: re({
          [Mt["c-tour-content"]]: !v,
          "animate__animated animate__fadeIn animate__faster": a,
          [r]: r
        }),
        ...e,
        ...D.popper,
        children: [
          /* @__PURE__ */ A("span", { className: "u-sr-only", children: [
            "Parte ",
            s,
            " de ",
            i,
            "."
          ] }),
          /* @__PURE__ */ p(
            "div",
            {
              "aria-hidden": !0,
              className: re({ [Mt["c-tour-progress"]]: !v }),
              "data-class": "c-tour-progress",
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: Mt["c-tour-progress-bar"],
                  "data-class": "c-tour-progress__bar",
                  style: { transform: `scaleX(${s / i})` }
                }
              )
            }
          ),
          O(),
          /* @__PURE__ */ A(
            "div",
            {
              className: re({
                [Mt["c-tour-button-container"]]: !v
              }),
              "data-class": "c-tour-button-container",
              children: [
                !t && /* @__PURE__ */ p(
                  Ut,
                  {
                    hasAriaLabel: !0,
                    label: "Salir",
                    "data-class": "c-button__close",
                    onClick: m,
                    icon: { path: new URL("/ui-components-books/dist/assets/icons/svg/close.svg", self.location).href, size: "big" },
                    ...v && { defaultStyle: v }
                  }
                ),
                !n && /* @__PURE__ */ p(
                  Ut,
                  {
                    disabled: s === 1,
                    hasAriaLabel: !0,
                    label: "Anterior",
                    "data-class": "c-button__before",
                    onClick: b,
                    icon: { path: new URL("/ui-components-books/dist/assets/icons/svg/navigate_before.svg", self.location).href, size: "big" },
                    ...v && { defaultStyle: v }
                  }
                ),
                /* @__PURE__ */ p(
                  Ut,
                  {
                    disabled: s === i,
                    hasAriaLabel: !0,
                    label: "Siguiente",
                    "data-class": "c-button__after",
                    onClick: N,
                    icon: { path: new URL("/ui-components-books/dist/assets/icons/svg/navigate_next.svg", self.location).href, size: "big" },
                    ...v && { defaultStyle: v }
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
};
as.propTypes = {
  ariaAttributes: o.shape({
    role: o.string,
    tabIndex: o.oneOfType([o.string, o.number]),
    "aria-label": o.string,
    "aria-modal": o.oneOfType([o.string, o.bool])
  }),
  hideCloseButton: o.bool,
  hideBackButton: o.bool,
  addClass: o.string
};
const cf = () => {
  const { isOpen: e, id: t, target: n, helpLayerClass: r, defaultStyle: a } = Se(No), [i, c] = ne({}), s = () => {
    const {
      x: d,
      y: f,
      width: l,
      height: u
    } = document.querySelector(n).getBoundingClientRect();
    c({
      width: `${l}px`,
      height: `${u}px`,
      top: `${f}px`,
      left: `${d}px`
    });
  };
  return J(() => (n && s(), () => {
    c({});
  }), [n]), J(() => {
    if (!e || !n)
      return;
    const d = (f) => {
      s();
    };
    return e && window.addEventListener("resize", d), () => {
      window.removeEventListener("resize", d);
    };
  }, [e, n]), /* @__PURE__ */ p(
    "div",
    {
      className: re({
        [Mt["c-tour-help"]]: !a,
        "animate__animated animate__fadeIn animate__faster animate__delay-2s": e,
        [r]: r
      }),
      style: i,
      children: /* @__PURE__ */ p("span", { className: Mt["c-tour-number"], "data-class": "c-tour-number", children: t })
    }
  );
}, uf = "_active_i7dnv_90", df = "_iconPulse_i7dnv_1", me = {
  "c-vid": "_c-vid_i7dnv_1",
  "c-vid__caption": "_c-vid__caption_i7dnv_19",
  "c-vid__container": "_c-vid__container_i7dnv_24",
  "c-vid__video": "_c-vid__video_i7dnv_44",
  "no-captions": "_no-captions_i7dnv_56",
  "c-vid__wrapper": "_c-vid__wrapper_i7dnv_60",
  "c-vid__icon-container": "_c-vid__icon-container_i7dnv_70",
  "c-vid__icon": "_c-vid__icon_i7dnv_70",
  active: uf,
  iconPulse: df,
  "c-vid__progress-bg": "_c-vid__progress-bg_i7dnv_112",
  "c-vid__progress-bar": "_c-vid__progress-bar_i7dnv_134",
  "c-vid__progress-sphere": "_c-vid__progress-sphere_i7dnv_140",
  "c-vid__controls": "_c-vid__controls_i7dnv_150",
  "c-vid__button": "_c-vid__button_i7dnv_165",
  "c-vid__volume": "_c-vid__volume_i7dnv_180",
  "c-vid__volume-item": "_c-vid__volume-item_i7dnv_191",
  "c-vid__time": "_c-vid__time_i7dnv_202",
  "c-vid__subtitles": "_c-vid__subtitles_i7dnv_208"
}, is = ({ src: e, width: t = "1000", hasDescription: n, description: r, addClass: a, poster: i, ...c }) => {
  const [s, d] = ne({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [f, l] = ne({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: "00:00"
  }), [u, v] = ne({
    state: !1,
    label: "Reproducir video"
  }), [h, m] = ne({
    state: !0,
    label: "Volumen"
  }), [b, x] = ne(100), [w, D] = ne({
    state: !1,
    label: "Ver en pantalla completa"
  }), [O, N] = ne(!1), [_, k] = ne(100), T = Q(null), I = Q(null), W = Q(null), Z = Q(null), L = Q(null), Y = Q(null), U = Q(null), G = Q(null), [oe, X] = ne(!1), [K, le] = Wa({
    rootMargin: "20px 10px",
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }), ee = (B) => {
    B.classList.add(`${me.active}`), setTimeout(() => {
      B.classList.remove(`${me.active}`);
    }, 650);
  };
  function C() {
    const B = I.current;
    u.state ? (B.pause(), v({
      state: !1,
      label: "Reproducir video"
    })) : (B.play(), v({
      state: !0,
      label: "Pausar video"
    })), ee(Y.current);
  }
  function j() {
    const B = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null, te = T.current;
    B ? (D({
      state: !1,
      label: "Ver en pantalla completa"
    }), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()) : (D({
      state: !0,
      label: "Salir de pantalla completa"
    }), te.requestFullscreen ? te.requestFullscreen() : te.mozRequestFullScreen ? te.mozRequestFullScreen() : te.webkitRequestFullScreen ? te.webkitRequestFullScreen() : te.msRequestFullscreen && te.msRequestFullscreen());
  }
  function y(B) {
    const te = parseInt(B, 10), ie = te >= 3600 ? Math.floor(te / 3600) : 0, ge = Math.floor((te - ie * 3600) / 60), Ie = te - ie * 3600 - ge * 60, pt = S(R(ie)), Fe = S(R(ge)), we = S(R(Ie));
    return {
      hours: pt,
      minutes: Fe,
      seconds: we
    };
  }
  function E(B) {
    const te = P(B.duration), ie = P(B.currentTime);
    l({
      totalSeconds: B.currentTime,
      hours: parseInt(y(B.currentTime).hours),
      minutes: parseInt(y(B.currentTime).minutes),
      seconds: parseInt(y(B.currentTime).seconds),
      string: ie
    }), d({
      totalSeconds: Math.floor(B.duration),
      hours: parseInt(y(B.duration).hours),
      minutes: parseInt(y(B.duration).minutes),
      seconds: parseInt(y(B.duration).seconds),
      string: te
    });
  }
  function P(B) {
    return parseInt(B, 10) <= 3600 ? `${y(B).minutes}:${y(B).seconds}` : `${y(B).hours}:${y(B).minutes}:${y(B).seconds}`;
  }
  function R(B) {
    return B < 10 ? B = "0" + B : B;
  }
  function S(B) {
    return isNaN(B) ? "00" : B;
  }
  function M(B) {
    const te = Z.current, ie = I.current, Ie = B.nativeEvent.offsetX / te.offsetWidth * ie.duration;
    ie.currentTime = Ie;
  }
  function V(B) {
    const te = I.current, ie = B.target.value, ge = ie / 100;
    k(ie), x(ie), te.volume = ge, h.state || m({
      state: !0,
      label: "Volumen"
    });
  }
  const H = () => {
    if (h.state) {
      m({
        state: !1,
        label: "Mutear video"
      });
      const B = I.current, te = 0, ie = te;
      k(te), B.volume = ie;
    } else {
      m({
        state: !0,
        label: "Volumen"
      });
      const B = I.current, te = b, ie = te / 100;
      k(te), B.volume = ie;
    }
  }, q = function(B) {
    (B.keyCode || B.which) === 32 && C();
  }, de = function(B) {
    const te = Math.floor(Z.current.getAttribute("aria-valuenow"));
    if (document.activeElement === L.current)
      return null;
    if ((B.keyCode || B.which) === 37) {
      const ie = te - 5;
      ie >= 0 ? I.current.currentTime = ie : I.current.currentTime = 0, ee(G.current);
    }
    if ((B.keyCode || B.which) === 39) {
      const ie = te + 5;
      ie >= I.current.duration ? I.current.currentTime = I.current.duration : I.current.currentTime = ie, ee(U.current);
    }
  }, F = () => s >= 3600 ? `${f.hours} horas, ${f.minutes} minutos y ${f.seconds} segundos de ${s.hours} horas, ${s.minutes} y ${s.seconds} segundos` : `${f.minutes} minutos y ${f.seconds} segundos de ${s.minutes} minutos y ${s.seconds} segundos`;
  return J(() => {
    const B = JSON.parse(localStorage.getItem("ui-video")) || {};
    Object.prototype.hasOwnProperty.call(B, "caption") && X(JSON.parse(localStorage.getItem("ui-video")).caption), Object.prototype.hasOwnProperty.call(B, "volume") && k(JSON.parse(localStorage.getItem("ui-video")).volume);
  }, []), J(() => {
    localStorage.setItem("ui-video", JSON.stringify({ caption: oe, volume: _ }));
  }, [oe, _]), J(() => (W.current ? W.current.addEventListener("error", () => {
    N(!0);
  }) : N(!0), e.caption && N(!1), () => {
    W.current && W.current.removeEventListener("error", () => {
      N(!0);
    });
  }), [e.caption]), J(() => {
    u.state && !le && C();
  }, [le]), dr(() => {
    I.current && K(I.current);
  }, [I]), /* @__PURE__ */ A(
    "figure",
    {
      className: `${me["c-vid"]} ${a}`,
      style: { maxWidth: `${t}px` },
      onKeyDown: (B) => de(B),
      ...c,
      children: [
        /* @__PURE__ */ A("div", { className: `${me["c-vid__container"]} ${a}`, ref: T, children: [
          /* @__PURE__ */ A("div", { className: me["c-vid__wrapper"], children: [
            /* @__PURE__ */ A(
              "video",
              {
                preload: "none",
                ref: I,
                onTimeUpdate: (B) => E(B.target),
                onLoadedData: (B) => E(B.target),
                onClick: C,
                className: `${me["c-vid__video"]} ${oe ? "" : me["no-captions"]}`,
                ...i && { poster: i },
                children: [
                  /* @__PURE__ */ p("source", { src: e.video }),
                  e.caption ? /* @__PURE__ */ p(
                    "track",
                    {
                      ref: W,
                      src: e.caption,
                      label: "Subtítulos en español",
                      kind: "subtitles",
                      srcLang: "es",
                      default: !0
                    }
                  ) : ""
                ]
              }
            ),
            /* @__PURE__ */ A("div", { className: me["c-vid__icon-container"], children: [
              /* @__PURE__ */ p("div", { ref: G, className: me["c-vid__icon"], children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_rewind", d: "M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: Y, className: me["c-vid__icon"], children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) : /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) }) }) }),
              /* @__PURE__ */ p("div", { ref: U, className: me["c-vid__icon"], children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: /* @__PURE__ */ p("path", { id: "fast_forward", d: "M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z" }) }) }) })
            ] })
          ] }),
          /* @__PURE__ */ p("div", { className: me["progress-container"], children: /* @__PURE__ */ A(
            "div",
            {
              role: "slider",
              "aria-label": "Progreso del video",
              "aria-valuemin": "0",
              "aria-valuenow": Math.round(f.totalSeconds),
              "aria-valuemax": Math.round(s.totalSeconds),
              "aria-valuetext": F(),
              tabIndex: "0",
              onKeyDown: q,
              className: me["c-vid__progress-bg"],
              onClick: M,
              ref: Z,
              children: [
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: me["c-vid__progress-bar"],
                    style: {
                      transform: `scaleX(${isNaN(f.totalSeconds / s.totalSeconds) ? 0 : f.totalSeconds / s.totalSeconds})`
                    }
                  }
                ),
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: me["progress-sphere"],
                    style: {
                      left: `min(calc((${f.totalSeconds} / ${s.totalSeconds}) * 100 * 1%), 99%)`
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ A("div", { className: `controls ${me["c-vid__controls"]}`, children: [
            /* @__PURE__ */ p(
              "button",
              {
                className: `${me["c-vid__button"]} js-button-video-play`,
                "aria-label": u.label,
                onClick: C,
                "data-description": "Este botón reproduce el video",
                children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: u.state ? /* @__PURE__ */ p("path", { id: "pause", d: "M28.25 38V10H36v28ZM12 38V10h7.75v28Z" }) : /* @__PURE__ */ p("path", { id: "play", d: "M16 37.85v-28l22 14Z" }) }) })
              }
            ),
            /* @__PURE__ */ p(
              "button",
              {
                className: `${me["c-vid__button"]} js-button-video-volumen`,
                "aria-label": h.label,
                "data-description": "Este botón controla el volumen",
                onClick: H,
                children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: h.state ? /* @__PURE__ */ p(
                  "path",
                  {
                    id: "volume_on",
                    d: "M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z"
                  }
                ) : /* @__PURE__ */ p(
                  "path",
                  {
                    id: "volume_off",
                    d: "m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z"
                  }
                ) }) })
              }
            ),
            /* @__PURE__ */ A("label", { className: me["c-vid__volume"], htmlFor: "volumeControl", children: [
              /* @__PURE__ */ p("span", { className: "u-sr-only", children: "Controlar volumen" }),
              /* @__PURE__ */ p(
                "input",
                {
                  className: me["c-vid__volume-item"],
                  ref: L,
                  id: "volumeControl",
                  type: "range",
                  min: "0",
                  max: "100",
                  step: "5",
                  value: _,
                  onChange: V,
                  "aria-valuetext": `${_}%`
                }
              )
            ] }),
            /* @__PURE__ */ A("p", { className: me["c-vid__time"], "aria-hidden": "true", children: [
              /* @__PURE__ */ p("span", { children: f.string }),
              "/",
              /* @__PURE__ */ p("span", { children: s.string })
            ] }),
            /* @__PURE__ */ p(
              "button",
              {
                disabled: O,
                "aria-pressed": O ? void 0 : oe,
                onClick: () => X(!oe),
                "aria-label": "Subtítulos",
                className: `${me["c-vid__button"]} ${me["c-vid__subtitles"]}`,
                children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: O ? /* @__PURE__ */ p(
                  "path",
                  {
                    id: "closed_caption_disabled",
                    d: "m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z"
                  }
                ) : /* @__PURE__ */ p(
                  "path",
                  {
                    id: "closed_caption",
                    d: "M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z"
                  }
                ) }) })
              }
            ),
            /* @__PURE__ */ p("button", { className: me["c-vid__button"], "aria-label": w.label, onClick: j, children: /* @__PURE__ */ p(xe, { children: /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48", viewBox: "0 0 48 48", children: w.state ? /* @__PURE__ */ p(
              "path",
              {
                id: "fullscreen_exit",
                d: "M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z"
              }
            ) : /* @__PURE__ */ p(
              "path",
              {
                id: "fullscreen",
                d: "M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z"
              }
            ) }) }) })
          ] })
        ] }),
        n && /* @__PURE__ */ A("figcaption", { className: me["c-vid__caption"], children: [
          /* @__PURE__ */ p("strong", { children: r.title }),
          " ",
          r.content
        ] })
      ]
    }
  );
};
is.propTypes = {
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
is.defaultProps = {
  src: "",
  addClass: "",
  width: "1000",
  hasDescription: !1,
  poster: ""
};
var Ln = {}, ff = {
  get exports() {
    return Ln;
  },
  set exports(e) {
    Ln = e;
  }
}, ss = {};
function ls(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ls(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Da() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ls(e)) && (r && (r += " "), r += t);
  return r;
}
const pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Da,
  default: Da
}, Symbol.toStringTag, { value: "Module" })), vf = /* @__PURE__ */ Ss(pf);
var Te = {}, xt = {};
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.dontSetMe = yf;
xt.findInArray = hf;
xt.int = bf;
xt.isFunction = gf;
xt.isNum = mf;
function hf(e, t) {
  for (var n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function gf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function mf(e) {
  return typeof e == "number" && !isNaN(e);
}
function bf(e) {
  return parseInt(e, 10);
}
function yf(e, t, n) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."));
}
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
Gt.browserPrefixToKey = us;
Gt.browserPrefixToStyle = _f;
Gt.default = void 0;
Gt.getPrefix = cs;
var Hr = ["Moz", "Webkit", "O", "ms"];
function cs() {
  var e, t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var r = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!r || n in r)
    return "";
  for (var a = 0; a < Hr.length; a++)
    if (us(n, Hr[a]) in r)
      return Hr[a];
  return "";
}
function us(e, t) {
  return t ? "".concat(t).concat(wf(e)) : e;
}
function _f(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function wf(e) {
  for (var t = "", n = !0, r = 0; r < e.length; r++)
    n ? (t += e[r].toUpperCase(), n = !1) : e[r] === "-" ? n = !0 : t += e[r];
  return t;
}
var xf = cs();
Gt.default = xf;
function co(e) {
  return co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, co(e);
}
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.addClassName = hs;
Te.addEvent = Ef;
Te.addUserSelectStyles = kf;
Te.createCSSTransform = If;
Te.createSVGTransform = Af;
Te.getTouch = Mf;
Te.getTouchIdentifier = $f;
Te.getTranslation = Io;
Te.innerHeight = Rf;
Te.innerWidth = Df;
Te.matchesSelector = vs;
Te.matchesSelectorAndParentsTo = Tf;
Te.offsetXYFromParent = Nf;
Te.outerHeight = Cf;
Te.outerWidth = Pf;
Te.removeClassName = gs;
Te.removeEvent = Sf;
Te.removeUserSelectStyles = Lf;
var tt = xt, Na = Of(Gt);
function ds(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ds = function(a) {
    return a ? n : t;
  })(e);
}
function Of(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || co(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = ds(t);
  if (n && n.has(e))
    return n.get(e);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var c = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      c && (c.get || c.set) ? Object.defineProperty(r, i, c) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Ia(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ia(Object(n), !0).forEach(function(r) {
      ps(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ia(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ps(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kn = "";
function vs(e, t) {
  return Kn || (Kn = (0, tt.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(n) {
    return (0, tt.isFunction)(e[n]);
  })), (0, tt.isFunction)(e[Kn]) ? e[Kn](t) : !1;
}
function Tf(e, t, n) {
  var r = e;
  do {
    if (vs(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function Ef(e, t, n, r) {
  if (e) {
    var a = fs({
      capture: !0
    }, r);
    e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
  }
}
function Sf(e, t, n, r) {
  if (e) {
    var a = fs({
      capture: !0
    }, r);
    e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
  }
}
function Cf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, tt.int)(n.borderTopWidth), t += (0, tt.int)(n.borderBottomWidth), t;
}
function Pf(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, tt.int)(n.borderLeftWidth), t += (0, tt.int)(n.borderRightWidth), t;
}
function Rf(e) {
  var t = e.clientHeight, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, tt.int)(n.paddingTop), t -= (0, tt.int)(n.paddingBottom), t;
}
function Df(e) {
  var t = e.clientWidth, n = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, tt.int)(n.paddingLeft), t -= (0, tt.int)(n.paddingRight), t;
}
function Nf(e, t, n) {
  var r = t === t.ownerDocument.body, a = r ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - a.left) / n, c = (e.clientY + t.scrollTop - a.top) / n;
  return {
    x: i,
    y: c
  };
}
function If(e, t) {
  var n = Io(e, t, "px");
  return ps({}, (0, Na.browserPrefixToKey)("transform", Na.default), n);
}
function Af(e, t) {
  var n = Io(e, t, "");
  return n;
}
function Io(e, t, n) {
  var r = e.x, a = e.y, i = "translate(".concat(r).concat(n, ",").concat(a).concat(n, ")");
  if (t) {
    var c = "".concat(typeof t.x == "string" ? t.x : t.x + n), s = "".concat(typeof t.y == "string" ? t.y : t.y + n);
    i = "translate(".concat(c, ", ").concat(s, ")") + i;
  }
  return i;
}
function Mf(e, t) {
  return e.targetTouches && (0, tt.findInArray)(e.targetTouches, function(n) {
    return t === n.identifier;
  }) || e.changedTouches && (0, tt.findInArray)(e.changedTouches, function(n) {
    return t === n.identifier;
  });
}
function $f(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function kf(e) {
  if (e) {
    var t = e.getElementById("react-draggable-style-el");
    t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && hs(e.body, "react-draggable-transparent-selection");
  }
}
function Lf(e) {
  if (e)
    try {
      if (e.body && gs(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function hs(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function gs(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var Ot = {};
Object.defineProperty(Ot, "__esModule", {
  value: !0
});
Ot.canDragX = Bf;
Ot.canDragY = Vf;
Ot.createCoreData = Yf;
Ot.createDraggableData = zf;
Ot.getBoundPosition = jf;
Ot.getControlPosition = qf;
Ot.snapToGrid = Ff;
var Je = xt, tn = Te;
function jf(e, t, n) {
  if (!e.props.bounds)
    return [t, n];
  var r = e.props.bounds;
  r = typeof r == "string" ? r : Wf(r);
  var a = Ao(e);
  if (typeof r == "string") {
    var i = a.ownerDocument, c = i.defaultView, s;
    if (r === "parent" ? s = a.parentNode : s = i.querySelector(r), !(s instanceof c.HTMLElement))
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    var d = s, f = c.getComputedStyle(a), l = c.getComputedStyle(d);
    r = {
      left: -a.offsetLeft + (0, Je.int)(l.paddingLeft) + (0, Je.int)(f.marginLeft),
      top: -a.offsetTop + (0, Je.int)(l.paddingTop) + (0, Je.int)(f.marginTop),
      right: (0, tn.innerWidth)(d) - (0, tn.outerWidth)(a) - a.offsetLeft + (0, Je.int)(l.paddingRight) - (0, Je.int)(f.marginRight),
      bottom: (0, tn.innerHeight)(d) - (0, tn.outerHeight)(a) - a.offsetTop + (0, Je.int)(l.paddingBottom) - (0, Je.int)(f.marginBottom)
    };
  }
  return (0, Je.isNum)(r.right) && (t = Math.min(t, r.right)), (0, Je.isNum)(r.bottom) && (n = Math.min(n, r.bottom)), (0, Je.isNum)(r.left) && (t = Math.max(t, r.left)), (0, Je.isNum)(r.top) && (n = Math.max(n, r.top)), [t, n];
}
function Ff(e, t, n) {
  var r = Math.round(t / e[0]) * e[0], a = Math.round(n / e[1]) * e[1];
  return [r, a];
}
function Bf(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Vf(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function qf(e, t, n) {
  var r = typeof t == "number" ? (0, tn.getTouch)(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  var a = Ao(n), i = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, tn.offsetXYFromParent)(r || e, i, n.props.scale);
}
function Yf(e, t, n) {
  var r = e.state, a = !(0, Je.isNum)(r.lastX), i = Ao(e);
  return a ? {
    node: i,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: n,
    x: t,
    y: n
  } : {
    node: i,
    deltaX: t - r.lastX,
    deltaY: n - r.lastY,
    lastX: r.lastX,
    lastY: r.lastY,
    x: t,
    y: n
  };
}
function zf(e, t) {
  var n = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / n,
    y: e.state.y + t.deltaY / n,
    deltaX: t.deltaX / n,
    deltaY: t.deltaY / n,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Wf(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Ao(e) {
  var t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var xr = {}, Or = {};
Object.defineProperty(Or, "__esModule", {
  value: !0
});
Or.default = Uf;
function Uf() {
}
function cr(e) {
  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cr(e);
}
Object.defineProperty(xr, "__esModule", {
  value: !0
});
xr.default = void 0;
var Zr = Zf(Le), Qe = Mo(o), Hf = Mo(ja), $e = Te, Nt = Ot, Gr = xt, xn = Mo(Or);
function Mo(e) {
  return e && e.__esModule ? e : { default: e };
}
function ms(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ms = function(a) {
    return a ? n : t;
  })(e);
}
function Zf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || cr(e) !== "object" && typeof e != "function")
    return { default: e };
  var n = ms(t);
  if (n && n.has(e))
    return n.get(e);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var c = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      c && (c.get || c.set) ? Object.defineProperty(r, i, c) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Aa(e, t) {
  return Qf(e) || Kf(e, t) || Xf(e, t) || Gf();
}
function Gf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xf(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ma(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ma(e, t);
  }
}
function Ma(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Kf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, c, s;
    try {
      for (n = n.call(e); !(a = (c = n.next()).done) && (r.push(c.value), !(t && r.length === t)); a = !0)
        ;
    } catch (d) {
      i = !0, s = d;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function Qf(e) {
  if (Array.isArray(e))
    return e;
}
function Jf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $a(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ep(e, t, n) {
  return t && $a(e.prototype, t), n && $a(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function np(e) {
  var t = op();
  return function() {
    var r = ur(e), a;
    if (t) {
      var i = ur(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return rp(this, a);
  };
}
function rp(e, t) {
  if (t && (cr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ke(e);
}
function ke(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function op() {
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
function ur(e) {
  return ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ur(e);
}
function it(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gt = {
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
}, It = gt.mouse, Tr = /* @__PURE__ */ function(e) {
  tp(n, e);
  var t = np(n);
  function n() {
    var r;
    Jf(this, n);
    for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++)
      i[c] = arguments[c];
    return r = t.call.apply(t, [this].concat(i)), it(ke(r), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), it(ke(r), "mounted", !1), it(ke(r), "handleDragStart", function(s) {
      if (r.props.onMouseDown(s), !r.props.allowAnyClick && typeof s.button == "number" && s.button !== 0)
        return !1;
      var d = r.findDOMNode();
      if (!d || !d.ownerDocument || !d.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var f = d.ownerDocument;
      if (!(r.props.disabled || !(s.target instanceof f.defaultView.Node) || r.props.handle && !(0, $e.matchesSelectorAndParentsTo)(s.target, r.props.handle, d) || r.props.cancel && (0, $e.matchesSelectorAndParentsTo)(s.target, r.props.cancel, d))) {
        s.type === "touchstart" && s.preventDefault();
        var l = (0, $e.getTouchIdentifier)(s);
        r.setState({
          touchIdentifier: l
        });
        var u = (0, Nt.getControlPosition)(s, l, ke(r));
        if (u != null) {
          var v = u.x, h = u.y, m = (0, Nt.createCoreData)(ke(r), v, h);
          (0, xn.default)("DraggableCore: handleDragStart: %j", m), (0, xn.default)("calling", r.props.onStart);
          var b = r.props.onStart(s, m);
          b === !1 || r.mounted === !1 || (r.props.enableUserSelectHack && (0, $e.addUserSelectStyles)(f), r.setState({
            dragging: !0,
            lastX: v,
            lastY: h
          }), (0, $e.addEvent)(f, It.move, r.handleDrag), (0, $e.addEvent)(f, It.stop, r.handleDragStop));
        }
      }
    }), it(ke(r), "handleDrag", function(s) {
      var d = (0, Nt.getControlPosition)(s, r.state.touchIdentifier, ke(r));
      if (d != null) {
        var f = d.x, l = d.y;
        if (Array.isArray(r.props.grid)) {
          var u = f - r.state.lastX, v = l - r.state.lastY, h = (0, Nt.snapToGrid)(r.props.grid, u, v), m = Aa(h, 2);
          if (u = m[0], v = m[1], !u && !v)
            return;
          f = r.state.lastX + u, l = r.state.lastY + v;
        }
        var b = (0, Nt.createCoreData)(ke(r), f, l);
        (0, xn.default)("DraggableCore: handleDrag: %j", b);
        var x = r.props.onDrag(s, b);
        if (x === !1 || r.mounted === !1) {
          try {
            r.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var w = document.createEvent("MouseEvents");
            w.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), r.handleDragStop(w);
          }
          return;
        }
        r.setState({
          lastX: f,
          lastY: l
        });
      }
    }), it(ke(r), "handleDragStop", function(s) {
      if (r.state.dragging) {
        var d = (0, Nt.getControlPosition)(s, r.state.touchIdentifier, ke(r));
        if (d != null) {
          var f = d.x, l = d.y;
          if (Array.isArray(r.props.grid)) {
            var u = f - r.state.lastX || 0, v = l - r.state.lastY || 0, h = (0, Nt.snapToGrid)(r.props.grid, u, v), m = Aa(h, 2);
            u = m[0], v = m[1], f = r.state.lastX + u, l = r.state.lastY + v;
          }
          var b = (0, Nt.createCoreData)(ke(r), f, l), x = r.props.onStop(s, b);
          if (x === !1 || r.mounted === !1)
            return !1;
          var w = r.findDOMNode();
          w && r.props.enableUserSelectHack && (0, $e.removeUserSelectStyles)(w.ownerDocument), (0, xn.default)("DraggableCore: handleDragStop: %j", b), r.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), w && ((0, xn.default)("DraggableCore: Removing handlers"), (0, $e.removeEvent)(w.ownerDocument, It.move, r.handleDrag), (0, $e.removeEvent)(w.ownerDocument, It.stop, r.handleDragStop));
        }
      }
    }), it(ke(r), "onMouseDown", function(s) {
      return It = gt.mouse, r.handleDragStart(s);
    }), it(ke(r), "onMouseUp", function(s) {
      return It = gt.mouse, r.handleDragStop(s);
    }), it(ke(r), "onTouchStart", function(s) {
      return It = gt.touch, r.handleDragStart(s);
    }), it(ke(r), "onTouchEnd", function(s) {
      return It = gt.touch, r.handleDragStop(s);
    }), r;
  }
  return ep(n, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var a = this.findDOMNode();
      a && (0, $e.addEvent)(a, gt.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.findDOMNode();
      if (a) {
        var i = a.ownerDocument;
        (0, $e.removeEvent)(i, gt.mouse.move, this.handleDrag), (0, $e.removeEvent)(i, gt.touch.move, this.handleDrag), (0, $e.removeEvent)(i, gt.mouse.stop, this.handleDragStop), (0, $e.removeEvent)(i, gt.touch.stop, this.handleDragStop), (0, $e.removeEvent)(a, gt.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, $e.removeUserSelectStyles)(i);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var a, i, c;
      return (a = this.props) !== null && a !== void 0 && a.nodeRef ? (i = this.props) === null || i === void 0 || (c = i.nodeRef) === null || c === void 0 ? void 0 : c.current : Hf.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Zr.cloneElement(Zr.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]), n;
}(Zr.Component);
xr.default = Tr;
it(Tr, "displayName", "DraggableCore");
it(Tr, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: Qe.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: Qe.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: Qe.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(t, n) {
    if (t[n] && t[n].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: Qe.default.arrayOf(Qe.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: Qe.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: Qe.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: Qe.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: Qe.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: Qe.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: Qe.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: Qe.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: Qe.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Gr.dontSetMe,
  style: Gr.dontSetMe,
  transform: Gr.dontSetMe
});
it(Tr, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
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
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(E) {
      return typeof E;
    } : function(E) {
      return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
    }, t(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return f.default;
    }
  }), e.default = void 0;
  var n = m(Le), r = v(o), a = v(ja), i = v(vf), c = Te, s = Ot, d = xt, f = v(xr), l = v(Or), u = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function v(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function h(y) {
    if (typeof WeakMap != "function")
      return null;
    var E = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap();
    return (h = function(S) {
      return S ? P : E;
    })(y);
  }
  function m(y, E) {
    if (!E && y && y.__esModule)
      return y;
    if (y === null || t(y) !== "object" && typeof y != "function")
      return { default: y };
    var P = h(E);
    if (P && P.has(y))
      return P.get(y);
    var R = {}, S = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var M in y)
      if (M !== "default" && Object.prototype.hasOwnProperty.call(y, M)) {
        var V = S ? Object.getOwnPropertyDescriptor(y, M) : null;
        V && (V.get || V.set) ? Object.defineProperty(R, M, V) : R[M] = y[M];
      }
    return R.default = y, P && P.set(y, R), R;
  }
  function b() {
    return b = Object.assign || function(y) {
      for (var E = 1; E < arguments.length; E++) {
        var P = arguments[E];
        for (var R in P)
          Object.prototype.hasOwnProperty.call(P, R) && (y[R] = P[R]);
      }
      return y;
    }, b.apply(this, arguments);
  }
  function x(y, E) {
    if (y == null)
      return {};
    var P = w(y, E), R, S;
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(y);
      for (S = 0; S < M.length; S++)
        R = M[S], !(E.indexOf(R) >= 0) && Object.prototype.propertyIsEnumerable.call(y, R) && (P[R] = y[R]);
    }
    return P;
  }
  function w(y, E) {
    if (y == null)
      return {};
    var P = {}, R = Object.keys(y), S, M;
    for (M = 0; M < R.length; M++)
      S = R[M], !(E.indexOf(S) >= 0) && (P[S] = y[S]);
    return P;
  }
  function D(y, E) {
    var P = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(y);
      E && (R = R.filter(function(S) {
        return Object.getOwnPropertyDescriptor(y, S).enumerable;
      })), P.push.apply(P, R);
    }
    return P;
  }
  function O(y) {
    for (var E = 1; E < arguments.length; E++) {
      var P = arguments[E] != null ? arguments[E] : {};
      E % 2 ? D(Object(P), !0).forEach(function(R) {
        C(y, R, P[R]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(P)) : D(Object(P)).forEach(function(R) {
        Object.defineProperty(y, R, Object.getOwnPropertyDescriptor(P, R));
      });
    }
    return y;
  }
  function N(y, E) {
    return W(y) || I(y, E) || k(y, E) || _();
  }
  function _() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function k(y, E) {
    if (y) {
      if (typeof y == "string")
        return T(y, E);
      var P = Object.prototype.toString.call(y).slice(8, -1);
      if (P === "Object" && y.constructor && (P = y.constructor.name), P === "Map" || P === "Set")
        return Array.from(y);
      if (P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))
        return T(y, E);
    }
  }
  function T(y, E) {
    (E == null || E > y.length) && (E = y.length);
    for (var P = 0, R = new Array(E); P < E; P++)
      R[P] = y[P];
    return R;
  }
  function I(y, E) {
    var P = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (P != null) {
      var R = [], S = !0, M = !1, V, H;
      try {
        for (P = P.call(y); !(S = (V = P.next()).done) && (R.push(V.value), !(E && R.length === E)); S = !0)
          ;
      } catch (q) {
        M = !0, H = q;
      } finally {
        try {
          !S && P.return != null && P.return();
        } finally {
          if (M)
            throw H;
        }
      }
      return R;
    }
  }
  function W(y) {
    if (Array.isArray(y))
      return y;
  }
  function Z(y, E) {
    if (!(y instanceof E))
      throw new TypeError("Cannot call a class as a function");
  }
  function L(y, E) {
    for (var P = 0; P < E.length; P++) {
      var R = E[P];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(y, R.key, R);
    }
  }
  function Y(y, E, P) {
    return E && L(y.prototype, E), P && L(y, P), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function U(y, E) {
    if (typeof E != "function" && E !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(E && E.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), E && G(y, E);
  }
  function G(y, E) {
    return G = Object.setPrototypeOf || function(R, S) {
      return R.__proto__ = S, R;
    }, G(y, E);
  }
  function oe(y) {
    var E = le();
    return function() {
      var R = ee(y), S;
      if (E) {
        var M = ee(this).constructor;
        S = Reflect.construct(R, arguments, M);
      } else
        S = R.apply(this, arguments);
      return X(this, S);
    };
  }
  function X(y, E) {
    if (E && (t(E) === "object" || typeof E == "function"))
      return E;
    if (E !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return K(y);
  }
  function K(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function le() {
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
  function ee(y) {
    return ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(P) {
      return P.__proto__ || Object.getPrototypeOf(P);
    }, ee(y);
  }
  function C(y, E, P) {
    return E in y ? Object.defineProperty(y, E, { value: P, enumerable: !0, configurable: !0, writable: !0 }) : y[E] = P, y;
  }
  var j = /* @__PURE__ */ function(y) {
    U(P, y);
    var E = oe(P);
    function P(R) {
      var S;
      return Z(this, P), S = E.call(this, R), C(K(S), "onDragStart", function(M, V) {
        (0, l.default)("Draggable: onDragStart: %j", V);
        var H = S.props.onStart(M, (0, s.createDraggableData)(K(S), V));
        if (H === !1)
          return !1;
        S.setState({
          dragging: !0,
          dragged: !0
        });
      }), C(K(S), "onDrag", function(M, V) {
        if (!S.state.dragging)
          return !1;
        (0, l.default)("Draggable: onDrag: %j", V);
        var H = (0, s.createDraggableData)(K(S), V), q = {
          x: H.x,
          y: H.y
        };
        if (S.props.bounds) {
          var de = q.x, F = q.y;
          q.x += S.state.slackX, q.y += S.state.slackY;
          var B = (0, s.getBoundPosition)(K(S), q.x, q.y), te = N(B, 2), ie = te[0], ge = te[1];
          q.x = ie, q.y = ge, q.slackX = S.state.slackX + (de - q.x), q.slackY = S.state.slackY + (F - q.y), H.x = q.x, H.y = q.y, H.deltaX = q.x - S.state.x, H.deltaY = q.y - S.state.y;
        }
        var Ie = S.props.onDrag(M, H);
        if (Ie === !1)
          return !1;
        S.setState(q);
      }), C(K(S), "onDragStop", function(M, V) {
        if (!S.state.dragging)
          return !1;
        var H = S.props.onStop(M, (0, s.createDraggableData)(K(S), V));
        if (H === !1)
          return !1;
        (0, l.default)("Draggable: onDragStop: %j", V);
        var q = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, de = !!S.props.position;
        if (de) {
          var F = S.props.position, B = F.x, te = F.y;
          q.x = B, q.y = te;
        }
        S.setState(q);
      }), S.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: R.position ? R.position.x : R.defaultPosition.x,
        y: R.position ? R.position.y : R.defaultPosition.y,
        prevPropsPosition: O({}, R.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, R.position && !(R.onDrag || R.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), S;
    }
    return Y(P, [{
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
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
    }, {
      key: "findDOMNode",
      value: function() {
        var S, M, V;
        return (S = (M = this.props) === null || M === void 0 || (V = M.nodeRef) === null || V === void 0 ? void 0 : V.current) !== null && S !== void 0 ? S : a.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var S, M = this.props;
        M.axis, M.bounds;
        var V = M.children, H = M.defaultPosition, q = M.defaultClassName, de = M.defaultClassNameDragging, F = M.defaultClassNameDragged, B = M.position, te = M.positionOffset;
        M.scale;
        var ie = x(M, u), ge = {}, Ie = null, pt = !!B, Fe = !pt || this.state.dragging, we = B || H, qe = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && Fe ? this.state.x : we.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && Fe ? this.state.y : we.y
        };
        this.state.isElementSVG ? Ie = (0, c.createSVGTransform)(qe, te) : ge = (0, c.createCSSTransform)(qe, te);
        var Xe = (0, i.default)(V.props.className || "", q, (S = {}, C(S, de, this.state.dragging), C(S, F, this.state.dragged), S));
        return /* @__PURE__ */ n.createElement(f.default, b({}, ie, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ n.cloneElement(n.Children.only(V), {
          className: Xe,
          style: O(O({}, V.props.style), ge),
          transform: Ie
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(S, M) {
          var V = S.position, H = M.prevPropsPosition;
          return V && (!H || V.x !== H.x || V.y !== H.y) ? ((0, l.default)("Draggable: getDerivedStateFromProps %j", {
            position: V,
            prevPropsPosition: H
          }), {
            x: V.x,
            y: V.y,
            prevPropsPosition: O({}, V)
          }) : null;
        }
      )
    }]), P;
  }(n.Component);
  e.default = j, C(j, "displayName", "Draggable"), C(j, "propTypes", O(O({}, f.default.propTypes), {}, {
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: r.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: r.default.oneOfType([r.default.shape({
      left: r.default.number,
      right: r.default.number,
      top: r.default.number,
      bottom: r.default.number
    }), r.default.string, r.default.oneOf([!1])]),
    defaultClassName: r.default.string,
    defaultClassNameDragging: r.default.string,
    defaultClassNameDragged: r.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    positionOffset: r.default.shape({
      x: r.default.oneOfType([r.default.number, r.default.string]),
      y: r.default.oneOfType([r.default.number, r.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: d.dontSetMe,
    style: d.dontSetMe,
    transform: d.dontSetMe
  })), C(j, "defaultProps", O(O({}, f.default.defaultProps), {}, {
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
})(ss);
var bs = ss, ys = bs.default, ap = bs.DraggableCore;
ff.exports = ys;
Ln.default = ys;
Ln.DraggableCore = ap;
const ip = (e, t, n) => {
  const [r, a] = ne({ video1: "", video2: "" }), i = { video1: "/", video2: "/" }, c = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  }, s = (l, u = 0) => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const v = t.filter((h) => h.to === l);
      if (v.length > 0) {
        const { slides: h } = v[0], m = h[u < 0 ? 0 : u];
        a(m || i);
      } else
        a(i);
    } else
      a(i);
  }, d = (l, u = 0, v = "") => {
    if (l = l.replace(/\/$/gi, ""), t) {
      const h = t.filter((m) => m.to === l);
      if (h.length > 0) {
        const { slides: m } = h[0], { modals: b } = m[u < 0 ? 0 : u], w = (b || []).filter((D) => D.id === v)[0];
        a(w || i);
      } else
        a(i);
    } else
      a(i);
  }, f = () => {
    const l = document.querySelectorAll(".video-interpreter-ui-panel > .video-interpreter-ui-section");
    if (l) {
      const u = [...l].findIndex((x) => !x.hasAttribute("hidden"));
      s(n, u < 0 ? 0 : u);
      const v = document.querySelectorAll(".video-interpreter-ui-tabpanel");
      if (v.length > 0) {
        const x = [...v].findIndex((w) => !w.hasAttribute("hidden"));
        s(n, x < 0 ? 0 : x);
      }
      const h = document.querySelector(".video-interpreter-ui-container:not([hidden])");
      h && d(n, u, h.id);
      const m = document.querySelector(".video-interpreter-ui-popover:not([hidden])");
      m && d(n, u, m.id);
      const b = document.querySelector(".video-interpreter-ui-modal:not([hidden])");
      b && d(n, u, b.id);
    }
  };
  return J(() => {
    if (e) {
      const l = new MutationObserver(f);
      return l.observe(document.querySelector(e || "body"), c), () => l.disconnect();
    }
  }, [f, c]), r;
}, sp = "_interpreter_1uacp_1", lp = "_close_1uacp_115", cp = "_hide_1uacp_121", up = "_progress_1uacp_212", dp = "_flex_1uacp_222", fp = "_gap_1uacp_279", _e = {
  interpreter: sp,
  "interpreter-active": "_interpreter-active_1uacp_23",
  "interpreter-btn": "_interpreter-btn_1uacp_29",
  "interpreter-btn--close": "_interpreter-btn--close_1uacp_44",
  "interpreter-btn--video": "_interpreter-btn--video_1uacp_48",
  "interpreter-btn-disable": "_interpreter-btn-disable_1uacp_61",
  "interpreter-btn-switch": "_interpreter-btn-switch_1uacp_67",
  "interpreter-dropdown": "_interpreter-dropdown_1uacp_72",
  "interpreter-dropdown-content": "_interpreter-dropdown-content_1uacp_80",
  "interpreter-btndrop": "_interpreter-btndrop_1uacp_114",
  close: lp,
  hide: cp,
  "image-Video": "_image-Video_1uacp_125",
  "c-vid-container": "_c-vid-container_1uacp_129",
  "c-vid": "_c-vid_1uacp_129",
  "c-vid-controls": "_c-vid-controls_1uacp_162",
  "c-vid-controls-text": "_c-vid-controls-text_1uacp_202",
  progress: up,
  flex: dp,
  "progress-bar": "_progress-bar_1uacp_228",
  "c-vid-controls-volume": "_c-vid-controls-volume_1uacp_235",
  "c-vid-controls-volume-item": "_c-vid-controls-volume-item_1uacp_256",
  "no-captions": "_no-captions_1uacp_267",
  gap: fp
}, _s = ({
  width: e,
  addClass: t,
  image: n,
  pathVideo: r,
  pathname: a
}) => {
  const [i, c] = ne("00:00"), [s, d] = ne(!1), [f, l] = ne(!1), [u, v] = ne(!1), { video1: h, video2: m } = ip("body", r, a), [b, x] = ne({
    state: !1,
    icon: Xr,
    label: "Reproducir video"
  }), [w, D] = ne({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  }), { deltaPosition: O } = w;
  function N() {
    const X = s ? Y.current : U.current;
    b.state ? (X.pause(), x({
      state: !1,
      icon: Xr,
      label: "Reproducir video"
    })) : (X.play(), x({
      state: !0,
      icon: gp,
      label: "Pausar video"
    }));
  }
  function _() {
    const X = s ? Y.current : U.current, K = oe.current, le = X.currentTime / X.duration * 100;
    K.style.flexBasis = `${le}%`;
  }
  function k() {
    const X = s ? Y.current : U.current;
    K(X);
    function K(j) {
      const y = le(j.currentTime);
      c(y);
    }
    function le(j) {
      const y = parseInt(j, 10), E = Math.floor(y / 3600), P = Math.floor((y - E * 3600) / 60), R = y - E * 3600 - P * 60, S = C(ee(E)), M = C(ee(P)), V = C(ee(R));
      return `${S}:${M}:${V}`;
    }
    function ee(j) {
      return j < 10 ? j = "0" + j : j;
    }
    function C(j) {
      return isNaN(j) ? "00" : j;
    }
  }
  function T(X) {
    const K = G.current, le = s ? Y.current : U.current, C = X.nativeEvent.offsetX / K.offsetWidth * le.duration;
    le.currentTime = C;
  }
  const I = (X, K) => {
    d(!1), l(!1), K(X), W();
  }, W = () => {
    const X = oe.current;
    X.style.flexBasis = "0%", x({
      state: !1,
      icon: Xr,
      label: "Reproducir video"
    });
  }, Z = (X, K) => {
    const { x: le, y: ee } = w.deltaPosition;
    D({
      ...w,
      deltaPosition: {
        x: le + K.deltaX,
        y: ee + K.deltaY
      }
    });
  };
  J(() => {
    W();
  }, [h, m]);
  const L = Q(null), Y = Q(), U = Q(), G = Q(), oe = Q();
  return /* @__PURE__ */ p(
    Ln,
    {
      nodeRef: L,
      handle: "strong",
      position: O,
      onDrag: Z,
      children: /* @__PURE__ */ A(
        "div",
        {
          ref: L,
          className: `${_e.interpreter} ${t ?? ""} ${(s || f) && _e["interpreter-active"]}`,
          children: [
            /* @__PURE__ */ A("div", { className: _e["interpreter-dropdown"], children: [
              (!s && !f || !!h && !s && !f || !!m && (s || f) || !!m && (s || f) && !s) && /* @__PURE__ */ A(
                "button",
                {
                  onClick: () => {
                    u || (I(!0, d), v(!0));
                  },
                  className: `${_e["interpreter-btn"]} ${_e["interpreter-btn-switch"]} ${!s && !f && _e["interpreter-btn-disable"]}`,
                  "aria-label": "Intérprete de lenguaje de señas",
                  children: [
                    !s && !f && (n ? /* @__PURE__ */ p("img", { className: _e["image-Video"], src: n, alt: "" }) : /* @__PURE__ */ A(
                      "svg",
                      {
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
                        children: [
                          /* @__PURE__ */ p(
                            "path",
                            {
                              className: "st0",
                              d: "M76.31 74.62s9.79 5.59 11.53 7.69c1.75 2.1 2.45 5.59 0 6.64C85.4 90 48.7 82.31 45.9 81.79c-2.8-.52-4.89 5.61 0 7.26s14.68 2.35 17.83 3.75 4.89 4.89.7 4.54c-4.19-.35-22.02-2.45-25.86-2.8-3.84-.35-6.29 4.89-2.1 6.29 4.19 1.4 22.56 2.1 23.86 2.8s4.94 4.89.5 5.24c-4.44.35-18.07-.7-20.52 0-2.45.7-5.94 6.64 2.1 7.34s19.57 0 22.02 0c2.45 0 4.54 2.45.7 3.15s-11.18 2.1-13.98 3.15c-2.8 1.05-5.59 6.99 2.45 6.29 8.04-.7 43.69-5.59 47.53-5.94 3.84-.35 4.19-2.8 5.59-8.39s2.8-13.98 2.8-16.78-1.4-5.24-3.5-7.69-6.64-7.69-12.93-12.93c-6.29-5.24-11.03-7.09-12.93-8.04-3.5-1.74-6.84 3.83-3.85 5.59z"
                            }
                          ),
                          /* @__PURE__ */ p(
                            "path",
                            {
                              className: "st0",
                              d: "M119.84 50.55c-.52-3.87-7.01-3.51-6.79-.04 0 0 .87 11.24.12 13.86-.75 2.62-3.25 5.17-5.49 3.73-2.24-1.43-16.5-36.11-17.64-38.72-1.14-2.61-7.39-.89-6.01 4.08 1.39 4.97 6.31 13.46 6.92 16.85s-1.3 6.8-3.37 3.13-10.34-19.58-12.22-22.96-7.58-2.45-6.38 1.8c1.2 4.25 10.94 19.84 11.1 21.31.15 1.47-1.27 6.83-4.06 3.36-2.78-3.48-9.58-15.34-11.53-16.97-1.95-1.63-8.83-1.18-4.89 5.86s11 16.19 12.37 18.21c1.37 2.02.53 5.13-2.21 2.35-2.74-2.79-8.02-8.07-10.46-9.8s-8.92-.7-3.83 5.56c2.89 3.55 11.88 13.68 19.57 22.33 4.28.22 10.16.41 9.83-.26-.52-1.05-10.31-6.82-12.06-8.91-1.75-2.1-1.05-6.64 1.05-8.74 2.1-2.1 6.47-1.92 9.26-.7 2.8 1.22 16.78 10.49 19.75 13.98 1.89 2.22 6.31 7.68 9.29 11.37.17-.11.33-.21.47-.3 2.31-1.57 3.55-4.1 4.4-7.21s2.63-9.81 3.43-17.96c.8-8.14-.34-13.1-.62-15.21z"
                            }
                          ),
                          /* @__PURE__ */ p(
                            "path",
                            {
                              className: "st0",
                              d: "M78.7 157.39C35.3 157.39 0 122.09 0 78.7 0 35.3 35.3 0 78.7 0c43.39 0 78.69 35.3 78.69 78.7 0 43.39-35.3 78.69-78.69 78.69zm0-145.13c-36.63 0-66.44 29.8-66.44 66.44s29.8 66.44 66.44 66.44 66.44-29.8 66.44-66.44-29.81-66.44-66.44-66.44z"
                            }
                          )
                        ]
                      }
                    )),
                    /* @__PURE__ */ p(pp, {}),
                    (s || f) && (s ? "1" : "2")
                  ]
                }
              ),
              (s || f) && /* @__PURE__ */ A(lt, { children: [
                /* @__PURE__ */ A(
                  "button",
                  {
                    tabIndex: -1,
                    className: `${_e["interpreter-btn"]} ${_e["interpreter-btn--video"]}`,
                    onClick: () => {
                      f && I(!0, d);
                    },
                    children: [
                      "1",
                      /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(ka, {}) })
                    ]
                  }
                ),
                /* @__PURE__ */ A(
                  "button",
                  {
                    tabIndex: -1,
                    className: `${_e["interpreter-btn"]} ${_e["interpreter-btn--video"]}`,
                    onClick: () => {
                      s && I(!0, l);
                    },
                    children: [
                      "2",
                      /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(ka, {}) })
                    ]
                  }
                ),
                /* @__PURE__ */ p(
                  "button",
                  {
                    tabIndex: -1,
                    className: `${_e["interpreter-btn"]}`,
                    onClick: () => !1,
                    onMouseEnter: () => v(!0),
                    onMouseLeave: () => v(!1),
                    "aria-label": "Arrastrar video",
                    children: /* @__PURE__ */ p("strong", { className: "cursor", children: /* @__PURE__ */ p(hp, {}) })
                  }
                ),
                /* @__PURE__ */ p(
                  "button",
                  {
                    className: `${_e["interpreter-btn"]} ${_e["interpreter-btn--close"]}`,
                    onClick: () => {
                      d(!1), l(!1), D({
                        deltaPosition: {
                          x: 0,
                          y: 0
                        }
                      }), v(!1);
                    },
                    onFocus: () => v(!0),
                    onBlur: () => v(!0),
                    "aria-label": "Cerrar",
                    children: /* @__PURE__ */ p(vp, {})
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ p(
              "div",
              {
                className: _e["c-vid-container"],
                display: s || f ? "true" : "false",
                children: /* @__PURE__ */ A("div", { className: _e["c-vid"], style: { maxWidth: `${e}px` }, children: [
                  s && /* @__PURE__ */ p(
                    "video",
                    {
                      src: h,
                      ref: Y,
                      onTimeUpdate: () => {
                        _(), k();
                      },
                      className: `${_e["no-captions"]}`
                    }
                  ),
                  f && /* @__PURE__ */ p(
                    "video",
                    {
                      src: m,
                      ref: U,
                      onTimeUpdate: () => {
                        _(), k();
                      },
                      className: `${_e["no-captions"]}`
                    }
                  ),
                  /* @__PURE__ */ A("div", { className: _e["c-vid-controls"], children: [
                    /* @__PURE__ */ p("button", { "aria-label": b.label, onClick: N, children: b.icon }),
                    /* @__PURE__ */ p("div", { className: _e.flex, children: /* @__PURE__ */ A(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "48",
                        height: "48",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        focusable: "false",
                        children: [
                          /* @__PURE__ */ p("path", { fill: "none", d: "M0 0h24v24H0z" }),
                          /* @__PURE__ */ p("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ p("p", { className: _e["c-vid-controls-text"], children: /* @__PURE__ */ p("span", { children: i }) }),
                    /* @__PURE__ */ p("div", { className: _e["progress-content"], children: /* @__PURE__ */ p(
                      "div",
                      {
                        ref: G,
                        className: _e.progress,
                        onClick: T,
                        children: /* @__PURE__ */ p(
                          "div",
                          {
                            ref: oe,
                            className: _e["progress-bar"],
                            onChange: _
                          }
                        )
                      }
                    ) })
                  ] })
                ] })
              }
            )
          ]
        }
      )
    }
  );
};
_s.propTypes = {
  width: o.string,
  addClass: o.string,
  image: o.string,
  pathVideo: o.array,
  pathname: o.string
};
_s.defaultProps = {
  width: "210"
};
const pp = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "48",
    viewBox: "0 96 960 960",
    width: "48",
    children: /* @__PURE__ */ p("path", { d: "M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" })
  }
), vp = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    "aria-hidden": "true",
    children: /* @__PURE__ */ p(
      "path",
      {
        id: "close",
        d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
      }
    )
  }
), hp = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    "aria-hidden": "true",
    children: /* @__PURE__ */ p(
      "path",
      {
        id: "open_with",
        d: "m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z"
      }
    )
  }
), ka = () => /* @__PURE__ */ p(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 96 960 960",
    "aria-hidden": "true",
    children: /* @__PURE__ */ p("path", { d: "M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z" })
  }
), Xr = /* @__PURE__ */ A(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false",
    children: [
      /* @__PURE__ */ p("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ p("path", { d: "M8 5v14l11-7z" })
    ]
  }
), gp = /* @__PURE__ */ A(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "48px",
    viewBox: "0 0 24 24",
    width: "48px",
    fill: "#000000",
    "aria-hidden": "true",
    className: "svg-icon",
    focusable: "false",
    children: [
      /* @__PURE__ */ p("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ p("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
    ]
  }
), $o = ft(), ws = ({ children: e, isVisible: t }) => {
  const [n, r] = ne(!1), a = Q(), i = () => r(!n), c = (s) => {
    a.current || (a.current = s);
  };
  return J(() => {
    t !== void 0 && r(t);
  }, [t]), /* @__PURE__ */ p($o.Provider, { value: { isOpen: n, onOpen: i, setRefButton: c, refButton: a }, children: e });
};
ws.defaultProps = {
  isVisible: !1
};
ws.propTypes = {
  children: o.oneOfType([o.arrayOf(o.element), o.arrayOf(o.node), o.element, o.node]),
  isVisible: o.bool
};
const mp = ({ children: e, onClick: t }) => {
  const { onOpen: n, setRefButton: r, refButton: a, isOpen: i } = Se($o);
  if (Re.count(e) > 1)
    return null;
  const c = (l) => {
    n(), t && t(l);
  }, s = (l) => {
    var u;
    return !!(l && !((u = l.dataset) != null && u.popper) && l !== a.current);
  }, d = (l) => {
    i && s(l.relatedTarget) && n();
  }, f = (l) => {
    if (!dt(l))
      return null;
    const { onBlur: u, ...v } = l.props;
    return Pe(l, {
      ...v,
      ref: r,
      onClick: c,
      onBlur: (h) => {
        u == null || u(h), d(h);
      }
    });
  };
  return Re.map(e, f);
};
mp.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.arrayOf(o.element),
    o.element,
    o.node
  ]),
  onClick: o.func
};
const Kr = {
  "c-popover-modal": "_c-popover-modal_1m8vp_1",
  "c-popover-modal--active": "_c-popover-modal--active_1m8vp_18",
  "c-popover-modal__arrow": "_c-popover-modal__arrow_1m8vp_22"
}, Qr = Object.freeze({
  ESC: 27,
  TAB: 9
}), bp = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])', xs = ({
  id: e,
  children: t,
  addClass: n,
  hasArrow: r,
  isDisabled: a,
  distance: i,
  placement: c,
  disabledInteractOutside: s,
  defaultStyle: d
}) => {
  const { isOpen: f, onOpen: l, refButton: u } = Se($o), v = Q(), h = Q(), m = (O, N) => O === N.current;
  Ua({ ref: h, onInteractionOutside: (O) => {
    !s && !m(O.target, u) && (l(), O.stopPropagation(), O.preventDefault());
  } });
  const x = (O) => {
    const N = v.current.querySelectorAll(bp), _ = u.current, k = N[0], T = N[N.length - 1];
    if ((O.keyCode || O.which) === Qr.TAB && document.activeElement === T)
      return _.focus(), O.preventDefault();
    O.shiftKey && (O.keyCode || O.which) === Qr.TAB && document.activeElement === k && (_.focus(), O.preventDefault()), (O.keyCode || O.which) === Qr.ESC && _.focus();
  }, { styles: w, attributes: D } = wr(
    u.current,
    v.current,
    {
      placement: c,
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
        { name: "eventListeners", enabled: f }
      ]
    }
  );
  return J(() => {
    const O = v.current;
    f ? (O.focus(), h.current = O) : h.current = null;
  }, [f, v]), a ? /* @__PURE__ */ p(lt, { children: t }) : /* @__PURE__ */ p(fn, { id: "js-popover-modal-portal", children: /* @__PURE__ */ A(
    "div",
    {
      id: e,
      ref: v,
      role: "status",
      tabIndex: -1,
      className: re({
        [Kr["c-popover-modal"]]: !d,
        [Kr["c-popover-modal--active"]]: !d && f,
        "video-interpreter-ui-popover": "video-interpreter-ui-popover",
        [n]: n
      }),
      style: w.popper,
      onKeyDown: x,
      "data-hidden": !f,
      "data-popper": !0,
      ...!f && { hidden: !0 },
      ...D.popper,
      children: [
        t,
        r && /* @__PURE__ */ p(
          "div",
          {
            className: re({
              [Kr["c-popover-modal__arrow"]]: !d
            }),
            "data-class": "c-popover-modal__arrow",
            "data-popper-arrow": !0,
            style: w.arrow
          }
        )
      ]
    }
  ) });
};
xs.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.element),
    o.arrayOf(o.node),
    o.element,
    o.node
  ]),
  id: o.string,
  addClass: o.string,
  hasArrow: o.bool,
  isDisabled: o.bool,
  distance: o.number,
  defaultStyle: o.bool,
  disabledInteractOutside: o.bool,
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
xs.defaultProps = {
  hasArrow: !1,
  placement: "auto",
  disabledInteractOutside: !1
};
const yp = (e, t) => {
  const [n, r] = ne(() => {
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
      const c = i instanceof Function ? i(n) : i;
      r(c), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(c));
    } catch (c) {
      console.warn(`Error in useLocalStorage: ${c}`);
    }
  }];
}, _p = (e, t, n) => {
  const [r, a] = ne(n), i = e.map((s) => window.matchMedia(s)), c = () => {
    const s = i.findIndex((d) => d.matches);
    return typeof t[s] < "u" ? t[s] : n;
  };
  return J(() => {
    a(c);
    const s = (d) => a(c);
    return i.forEach((d) => d.addEventListener("change", s)), () => {
      i.forEach((d) => d.removeEventListener("change", s));
    };
  }, []), r;
}, Tp = () => {
  const [e, t] = yp("dark-mode-enabled"), n = _p(["(prefers-color-scheme: dark)"], [!0], !1), r = typeof e < "u" ? e : n;
  return J(() => {
    t(n);
  }, [n]), J(() => {
    const a = window.document.body;
    r ? a.setAttribute("data-dark-mode", r) : a.removeAttribute("data-dark-mode", r);
  }, [r]), [r, t];
}, Os = (e) => {
  let t = {};
  for (const n in e)
    if (typeof e[n] == "object") {
      const r = Os(e[n]);
      for (const a in r)
        t = {
          ...t,
          [n.includes("accents") || n.includes("palette") ? a : `${n}-${a}`]: r[a]
        };
    } else
      t[n] = e[n];
  return t;
}, Ep = (e) => Os(e);
export {
  Bs as Accordion,
  qa as AccordionButton,
  Ya as AccordionItem,
  za as AccordionPanel,
  Ha as Audio,
  Ut as Button,
  Au as ButtonSection,
  Ka as CheckBox,
  Ll as CheckBoxGroup,
  Bl as Col,
  ql as Content,
  bi as DragAndDrop,
  mi as DragAndDropContext,
  yi as Draggable,
  _i as Droppable,
  Op as Filter,
  wi as GeneralDraggable,
  xe as Icon,
  xo as Image,
  xi as Input,
  bu as InputGroup,
  Ti as InputLeftAddon,
  Ei as InputRightAddon,
  Oi as InputStyle,
  _s as Interpreter,
  _u as Kbd,
  Si as Link,
  wu as List,
  Pi as ListItem,
  Ri as Modal,
  Su as ModalCloseButton,
  Di as ModalContent,
  gr as ModalContext,
  Ni as ModalOverlay,
  Fi as NavSection,
  $i as NumberDecrementStepper,
  ki as NumberIncrementStepper,
  Ii as NumberInput,
  mr as NumberInputContext,
  Ai as NumberInputField,
  Mi as NumberInputStepper,
  xu as OrderedList,
  Li as Pagination,
  Oo as PaginationItem,
  Du as Panel,
  br as PanelContext,
  $u as Paper,
  ws as PopoverModal,
  mp as PopoverModalButton,
  xs as PopoverModalContent,
  $o as PopoverModalContext,
  fn as Portal,
  Vu as Row,
  ji as Section,
  Bi as Select,
  qu as SelectGroup,
  Vi as Switch,
  qi as Tab,
  Yi as TabList,
  zi as TabPanel,
  Wi as TabPanels,
  Yu as Tabs,
  To as TabsContext,
  Ui as TextArea,
  zu as ThemeProvider,
  ns as Toggletip,
  rs as Tooltip,
  os as Tour,
  No as TourContext,
  as as TourElement,
  cf as TourHelpLayer,
  Ou as UnorderedList,
  is as Video,
  Ep as createTheme,
  Tp as useDarkMode,
  Ua as useInteractOutside,
  yp as useLocalStorage,
  _p as useMedia,
  Wa as useOnScreen,
  Cu as usePagination,
  ju as usePortal
};
