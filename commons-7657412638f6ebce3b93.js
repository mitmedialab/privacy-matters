(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "+YAX": function(e, t, n) {
      var r = n("2nzh"),
        a = n("1PpB"),
        i = n("cqv3");
      e.exports = function(e) {
        return r(e) || a(e) || i();
      };
    },
    "+wdc": function(e, t, n) {
      "use strict";
      var r, a, i, l, o;
      if (
        (n("eM6i"),
        n("HAE/"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        "undefined" == typeof window || "function" != typeof MessageChannel)
      ) {
        var u = null,
          c = null,
          s = function e() {
            if (null !== u)
              try {
                var n = t.unstable_now();
                u(!0, n), (u = null);
              } catch (r) {
                throw (setTimeout(e, 0), r);
              }
          },
          f = Date.now();
        (t.unstable_now = function() {
          return Date.now() - f;
        }),
          (r = function(e) {
            null !== u ? setTimeout(r, 0, e) : ((u = e), setTimeout(s, 0));
          }),
          (a = function(e, t) {
            c = setTimeout(e, t);
          }),
          (i = function() {
            clearTimeout(c);
          }),
          (l = function() {
            return !1;
          }),
          (o = t.unstable_forceFrameRate = function() {});
      } else {
        var d = window.performance,
          p = window.Date,
          m = window.setTimeout,
          h = window.clearTimeout;
        if ("undefined" != typeof console) {
          var g = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            ),
            "function" != typeof g &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              );
        }
        if ("object" == typeof d && "function" == typeof d.now)
          t.unstable_now = function() {
            return d.now();
          };
        else {
          var y = p.now();
          t.unstable_now = function() {
            return p.now() - y;
          };
        }
        var v = !1,
          b = null,
          E = -1,
          T = 5,
          w = 0;
        (l = function() {
          return t.unstable_now() >= w;
        }),
          (o = function() {}),
          (t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var S = new MessageChannel(),
          k = S.port2;
        (S.port1.onmessage = function() {
          if (null !== b) {
            var e = t.unstable_now();
            w = e + T;
            try {
              b(!0, e) ? k.postMessage(null) : ((v = !1), (b = null));
            } catch (n) {
              throw (k.postMessage(null), n);
            }
          } else v = !1;
        }),
          (r = function(e) {
            (b = e), v || ((v = !0), k.postMessage(null));
          }),
          (a = function(e, n) {
            E = m(function() {
              e(t.unstable_now());
            }, n);
          }),
          (i = function() {
            h(E), (E = -1);
          });
      }
      function x(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = Math.floor((n - 1) / 2),
            a = e[r];
          if (!(void 0 !== a && 0 < P(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function A(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function C(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length; r < a; ) {
              var i = 2 * (r + 1) - 1,
                l = e[i],
                o = i + 1,
                u = e[o];
              if (void 0 !== l && 0 > P(l, n))
                void 0 !== u && 0 > P(u, l)
                  ? ((e[r] = u), (e[o] = n), (r = o))
                  : ((e[r] = l), (e[i] = n), (r = i));
              else {
                if (!(void 0 !== u && 0 > P(u, n))) break e;
                (e[r] = u), (e[o] = n), (r = o);
              }
            }
          }
          return t;
        }
        return null;
      }
      function P(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var _ = [],
        N = [],
        O = 1,
        R = null,
        I = 3,
        M = !1,
        L = !1,
        U = !1;
      function z(e) {
        for (var t = A(N); null !== t; ) {
          if (null === t.callback) C(N);
          else {
            if (!(t.startTime <= e)) break;
            C(N), (t.sortIndex = t.expirationTime), x(_, t);
          }
          t = A(N);
        }
      }
      function F(e) {
        if (((U = !1), z(e), !L))
          if (null !== A(_)) (L = !0), r(j);
          else {
            var t = A(N);
            null !== t && a(F, t.startTime - e);
          }
      }
      function j(e, n) {
        (L = !1), U && ((U = !1), i()), (M = !0);
        var r = I;
        try {
          for (
            z(n), R = A(_);
            null !== R && (!(R.expirationTime > n) || (e && !l()));

          ) {
            var o = R.callback;
            if (null !== o) {
              (R.callback = null), (I = R.priorityLevel);
              var u = o(R.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof u ? (R.callback = u) : R === A(_) && C(_),
                z(n);
            } else C(_);
            R = A(_);
          }
          if (null !== R) var c = !0;
          else {
            var s = A(N);
            null !== s && a(F, s.startTime - n), (c = !1);
          }
          return c;
        } finally {
          (R = null), (I = r), (M = !1);
        }
      }
      function D(e) {
        switch (e) {
          case 1:
            return -1;
          case 2:
            return 250;
          case 5:
            return 1073741823;
          case 4:
            return 1e4;
          default:
            return 5e3;
        }
      }
      var H = o;
      (t.unstable_ImmediatePriority = 1),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_NormalPriority = 3),
        (t.unstable_IdlePriority = 5),
        (t.unstable_LowPriority = 4),
        (t.unstable_runWithPriority = function(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = I;
          I = e;
          try {
            return t();
          } finally {
            I = n;
          }
        }),
        (t.unstable_next = function(e) {
          switch (I) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = I;
          }
          var n = I;
          I = t;
          try {
            return e();
          } finally {
            I = n;
          }
        }),
        (t.unstable_scheduleCallback = function(e, n, l) {
          var o = t.unstable_now();
          if ("object" == typeof l && null !== l) {
            var u = l.delay;
            (u = "number" == typeof u && 0 < u ? o + u : o),
              (l = "number" == typeof l.timeout ? l.timeout : D(e));
          } else (l = D(e)), (u = o);
          return (
            (e = {
              id: O++,
              callback: n,
              priorityLevel: e,
              startTime: u,
              expirationTime: (l = u + l),
              sortIndex: -1
            }),
            u > o
              ? ((e.sortIndex = u),
                x(N, e),
                null === A(_) &&
                  e === A(N) &&
                  (U ? i() : (U = !0), a(F, u - o)))
              : ((e.sortIndex = l), x(_, e), L || M || ((L = !0), r(j))),
            e
          );
        }),
        (t.unstable_cancelCallback = function(e) {
          e.callback = null;
        }),
        (t.unstable_wrapCallback = function(e) {
          var t = I;
          return function() {
            var n = I;
            I = t;
            try {
              return e.apply(this, arguments);
            } finally {
              I = n;
            }
          };
        }),
        (t.unstable_getCurrentPriorityLevel = function() {
          return I;
        }),
        (t.unstable_shouldYield = function() {
          var e = t.unstable_now();
          z(e);
          var n = A(_);
          return (
            (n !== R &&
              null !== R &&
              null !== n &&
              null !== n.callback &&
              n.startTime <= e &&
              n.expirationTime < R.expirationTime) ||
            l()
          );
        }),
        (t.unstable_requestPaint = H),
        (t.unstable_continueExecution = function() {
          L || M || ((L = !0), r(j));
        }),
        (t.unstable_pauseExecution = function() {}),
        (t.unstable_getFirstCallbackNode = function() {
          return A(_);
        }),
        (t.unstable_Profiling = null);
    },
    "0mN4": function(e, t, n) {
      "use strict";
      n("OGtf")("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
    },
    "1PpB": function(e, t) {
      e.exports = function(e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      };
    },
    "1Yj4": function(e, t, n) {
      "use strict";
      var r = n("k1TG"),
        a = n("8o2o"),
        i = n("q1tI"),
        l = n.n(i),
        o = n("17x9"),
        u = n.n(o),
        c = n("TSYQ"),
        s = n.n(c),
        f = n("33Jr"),
        d = {
          tag: f.c,
          fluid: u.a.oneOfType([u.a.bool, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object
        },
        p = function(e) {
          var t = e.className,
            n = e.cssModule,
            i = e.fluid,
            o = e.tag,
            u = Object(a.a)(e, ["className", "cssModule", "fluid", "tag"]),
            c = "container";
          !0 === i ? (c = "container-fluid") : i && (c = "container-" + i);
          var d = Object(f.b)(s()(t, c), n);
          return l.a.createElement(o, Object(r.a)({}, u, { className: d }));
        };
      (p.propTypes = d), (p.defaultProps = { tag: "div" }), (t.a = p);
    },
    "2nzh": function(e, t) {
      e.exports = function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t];
          return n;
        }
      };
    },
    "2rMq": function(e, t, n) {
      var r;
      !(function() {
        "use strict";
        var a = !(
            "undefined" == typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          i = {
            canUseDOM: a,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners:
              a && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: a && !!window.screen
          };
        void 0 ===
          (r = function() {
            return i;
          }.call(t, n, t, e)) || (e.exports = r);
      })();
    },
    "33Jr": function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return l;
      }),
        n.d(t, "c", function() {
          return u;
        }),
        n.d(t, "a", function() {
          return c;
        });
      n("pIFo"),
        n("a1Th"),
        n("h7Nl"),
        n("LK8F"),
        n("V+eJ"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("RW0V"),
        n("8+KV"),
        n("KKXr"),
        n("bWfx");
      var r,
        a = n("17x9"),
        i = n.n(a);
      function l(e, t) {
        return (
          void 0 === e && (e = ""),
          void 0 === t && (t = r),
          t
            ? e
                .split(" ")
                .map(function(e) {
                  return t[e] || e;
                })
                .join(" ")
            : e
        );
      }
      var o = ("object" == typeof window && window.Element) || function() {};
      i.a.oneOfType([
        i.a.string,
        i.a.func,
        function(e, t, n) {
          if (!(e[t] instanceof o))
            return new Error(
              "Invalid prop `" +
                t +
                "` supplied to `" +
                n +
                "`. Expected prop to be an instance of Element. Validation failed."
            );
        },
        i.a.shape({ current: i.a.any })
      ]);
      var u = i.a.oneOfType([
        i.a.func,
        i.a.string,
        i.a.shape({ $$typeof: i.a.symbol, render: i.a.func }),
        i.a.arrayOf(
          i.a.oneOfType([
            i.a.func,
            i.a.string,
            i.a.shape({ $$typeof: i.a.symbol, render: i.a.func })
          ])
        )
      ]);
      "undefined" == typeof window ||
        !window.document ||
        window.document.createElement;
      function c(e) {
        var t = typeof e;
        return null != e && ("object" === t || "function" === t);
      }
    },
    "6R51": function(e, t) {
      e.exports = function(e, t) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        ) {
          var n = [],
            r = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var l, o = e[Symbol.iterator]();
              !(r = (l = o.next()).done) &&
              (n.push(l.value), !t || n.length !== t);
              r = !0
            );
          } catch (u) {
            (a = !0), (i = u);
          } finally {
            try {
              r || null == o.return || o.return();
            } finally {
              if (a) throw i;
            }
          }
          return n;
        }
      };
    },
    "7h0T": function(e, t, n) {
      var r = n("XKFU");
      r(r.S, "Number", {
        isNaN: function(e) {
          return e != e;
        }
      });
    },
    "8+s/": function(e, t, n) {
      "use strict";
      function r(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e;
      }
      n("V+eJ"), n("bWfx"), n("f3/d"), n("/SS/"), n("hHhE");
      var a = n("q1tI"),
        i = r(a),
        l = r(n("2rMq")),
        o = r(n("Gytx"));
      e.exports = function(e, t, n) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function(r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var u = [],
            c = void 0;
          function s() {
            (c = e(
              u.map(function(e) {
                return e.props;
              })
            )),
              f.canUseDOM ? t(c) : n && (c = n(c));
          }
          var f = (function(e) {
            function t() {
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                (function(e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(this, e.apply(this, arguments))
              );
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              (t.peek = function() {
                return c;
              }),
              (t.rewind = function() {
                if (t.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = c;
                return (c = void 0), (u = []), e;
              }),
              (t.prototype.shouldComponentUpdate = function(e) {
                return !o(e, this.props);
              }),
              (t.prototype.componentWillMount = function() {
                u.push(this), s();
              }),
              (t.prototype.componentDidUpdate = function() {
                s();
              }),
              (t.prototype.componentWillUnmount = function() {
                var e = u.indexOf(this);
                u.splice(e, 1), s();
              }),
              (t.prototype.render = function() {
                return i.createElement(r, this.props);
              }),
              t
            );
          })(a.Component);
          return (
            (f.displayName =
              "SideEffect(" +
              (function(e) {
                return e.displayName || e.name || "Component";
              })(r) +
              ")"),
            (f.canUseDOM = l.canUseDOM),
            f
          );
        };
      };
    },
    "8jRI": function(e, t, n) {
      "use strict";
      n("pIFo"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("RW0V"),
        n("SRfc"),
        n("Oyvg");
      var r = new RegExp("%[a-f0-9]{2}", "gi"),
        a = new RegExp("(%[a-f0-9]{2})+", "gi");
      function i(e, t) {
        try {
          return decodeURIComponent(e.join(""));
        } catch (a) {}
        if (1 === e.length) return e;
        t = t || 1;
        var n = e.slice(0, t),
          r = e.slice(t);
        return Array.prototype.concat.call([], i(n), i(r));
      }
      function l(e) {
        try {
          return decodeURIComponent(e);
        } catch (a) {
          for (var t = e.match(r), n = 1; n < t.length; n++)
            t = (e = i(t, n).join("")).match(r);
          return e;
        }
      }
      e.exports = function(e) {
        if ("string" != typeof e)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof e +
              "`"
          );
        try {
          return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
        } catch (t) {
          return (function(e) {
            for (
              var n = { "%FE%FF": "��", "%FF%FE": "��" }, r = a.exec(e);
              r;

            ) {
              try {
                n[r[0]] = decodeURIComponent(r[0]);
              } catch (t) {
                var i = l(r[0]);
                i !== r[0] && (n[r[0]] = i);
              }
              r = a.exec(e);
            }
            n["%C2"] = "�";
            for (var o = Object.keys(n), u = 0; u < o.length; u++) {
              var c = o[u];
              e = e.replace(new RegExp(c, "g"), n[c]);
            }
            return e;
          })(e);
        }
      };
    },
    "8o2o": function(e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    "8yz6": function(e, t, n) {
      "use strict";
      n("V+eJ"),
        (e.exports = function(e, t) {
          if ("string" != typeof e || "string" != typeof t)
            throw new TypeError(
              "Expected the arguments to be of type `string`"
            );
          if ("" === t) return [e];
          var n = e.indexOf(t);
          return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
        });
    },
    "9eSz": function(e, t, n) {
      "use strict";
      n("rGqo"), n("yt8O"), n("Btvt"), n("XfO3"), n("EK0E"), n("0mN4");
      var r = n("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var a,
        i = r(n("v06X")),
        l = r(n("XEEL")),
        o = r(n("uDP2")),
        u = r(n("j8BX")),
        c = r(n("q1tI")),
        s = r(n("17x9")),
        f = function(e) {
          var t = (0, u.default)({}, e),
            n = t.resolutions,
            r = t.sizes,
            a = t.critical;
          return (
            n && ((t.fixed = n), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            a && (t.loading = "eager"),
            t.fluid && (t.fluid = E([].concat(t.fluid))),
            t.fixed && (t.fixed = E([].concat(t.fixed))),
            t
          );
        },
        d = function(e) {
          var t = e.fluid,
            n = e.fixed;
          return ((t && t[0]) || (n && n[0])).src;
        },
        p = Object.create({}),
        m = function(e) {
          var t = f(e),
            n = d(t);
          return p[n] || !1;
        },
        h =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        g = "undefined" != typeof window,
        y = g && window.IntersectionObserver,
        v = new WeakMap();
      function b(e) {
        return e.map(function(e) {
          var t = e.src,
            n = e.srcSet,
            r = e.srcSetWebp,
            a = e.media,
            i = e.sizes;
          return c.default.createElement(
            c.default.Fragment,
            { key: t },
            r &&
              c.default.createElement("source", {
                type: "image/webp",
                media: a,
                srcSet: r,
                sizes: i
              }),
            c.default.createElement("source", { media: a, srcSet: n, sizes: i })
          );
        });
      }
      function E(e) {
        var t = [],
          n = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : n).push(e);
          }),
          [].concat(t, n)
        );
      }
      function T(e) {
        return e.map(function(e) {
          var t = e.src,
            n = e.media,
            r = e.tracedSVG;
          return c.default.createElement("source", {
            key: t,
            media: n,
            srcSet: r
          });
        });
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            n = e.media,
            r = e.base64;
          return c.default.createElement("source", {
            key: t,
            media: n,
            srcSet: r
          });
        });
      }
      function S(e, t) {
        var n = e.srcSet,
          r = e.srcSetWebp,
          a = e.media,
          i = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (a ? 'media="' + a + '" ' : "") +
          'srcset="' +
          (t ? r : n) +
          '" ' +
          (i ? 'sizes="' + i + '" ' : "") +
          "/>"
        );
      }
      var k = function(e, t) {
          var n =
            (void 0 === a &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (a = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (v.has(e.target)) {
                      var t = v.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (a.unobserve(e.target), v.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            a);
          return (
            n && (n.observe(e), v.set(e, t)),
            function() {
              n.unobserve(e), v.delete(e);
            }
          );
        },
        x = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            n = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            a = e.title ? 'title="' + e.title + '" ' : "",
            i = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            l = e.width ? 'width="' + e.width + '" ' : "",
            o = e.height ? 'height="' + e.height + '" ' : "",
            u = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            c = e.loading ? 'loading="' + e.loading + '" ' : "",
            s = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? S(e, !0) : "") + S(e);
              })
              .join("") +
            "<img " +
            c +
            l +
            o +
            n +
            r +
            t +
            i +
            a +
            u +
            s +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        A = function(e) {
          var t = e.src,
            n = e.imageVariants,
            r = e.generateSources,
            a = e.spreadProps,
            i = c.default.createElement(C, (0, u.default)({ src: t }, a));
          return n.length > 1
            ? c.default.createElement("picture", null, r(n), i)
            : i;
        },
        C = c.default.forwardRef(function(e, t) {
          var n = e.sizes,
            r = e.srcSet,
            a = e.src,
            i = e.style,
            l = e.onLoad,
            s = e.onError,
            f = e.loading,
            d = e.draggable,
            p = (0, o.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable"
            ]);
          return c.default.createElement(
            "img",
            (0, u.default)({ sizes: n, srcSet: r, src: a }, p, {
              onLoad: l,
              onError: s,
              ref: t,
              loading: f,
              draggable: d,
              style: (0, u.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                i
              )
            })
          );
        });
      C.propTypes = {
        style: s.default.object,
        onError: s.default.func,
        onLoad: s.default.func
      };
      var P = (function(e) {
        function t(t) {
          var n;
          ((n = e.call(this, t) || this).seenBefore = g && m(t)),
            (n.isCritical = "eager" === t.loading || t.critical),
            (n.addNoScript = !(n.isCritical && !t.fadeIn)),
            (n.useIOSupport = !h && y && !n.isCritical && !n.seenBefore);
          var r = n.isCritical || (g && (h || !n.useIOSupport));
          return (
            (n.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !n.seenBefore && t.fadeIn
            }),
            (n.imageRef = c.default.createRef()),
            (n.handleImageLoaded = n.handleImageLoaded.bind((0, i.default)(n))),
            (n.handleRef = n.handleRef.bind((0, i.default)(n))),
            n
          );
        }
        (0, l.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (n.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (n.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = k(e, function() {
                var e = m(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    return t.setState({
                      imgLoaded: e,
                      imgCached: !!t.imageRef.current.currentSrc
                    });
                  });
              }));
          }),
          (n.handleImageLoaded = function() {
            var e, t, n;
            (e = this.props),
              (t = f(e)),
              (n = d(t)),
              (p[n] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (n.render = function() {
            var e = f(this.props),
              t = e.title,
              n = e.alt,
              r = e.className,
              a = e.style,
              i = void 0 === a ? {} : a,
              l = e.imgStyle,
              o = void 0 === l ? {} : l,
              s = e.placeholderStyle,
              d = void 0 === s ? {} : s,
              p = e.placeholderClassName,
              m = e.fluid,
              h = e.fixed,
              g = e.backgroundColor,
              y = e.durationFadeIn,
              v = e.Tag,
              E = e.itemProp,
              S = e.loading,
              k = e.draggable,
              P = !1 === this.state.fadeIn || this.state.imgLoaded,
              _ = !0 === this.state.fadeIn && !this.state.imgCached,
              N = (0, u.default)(
                {
                  opacity: P ? 1 : 0,
                  transition: _ ? "opacity " + y + "ms" : "none"
                },
                o
              ),
              O = "boolean" == typeof g ? "lightgray" : g,
              R = { transitionDelay: y + "ms" },
              I = (0, u.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                _ && R,
                {},
                o,
                {},
                d
              ),
              M = {
                title: t,
                alt: this.state.isVisible ? "" : n,
                style: I,
                className: p,
                itemProp: E
              };
            if (m) {
              var L = m,
                U = L[0];
              return c.default.createElement(
                v,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, u.default)(
                    { position: "relative", overflow: "hidden" },
                    i
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(U.srcSet)
                },
                c.default.createElement(v, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / U.aspectRatio + "%"
                  }
                }),
                O &&
                  c.default.createElement(v, {
                    title: t,
                    style: (0, u.default)(
                      {
                        backgroundColor: O,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      _ && R
                    )
                  }),
                U.base64 &&
                  c.default.createElement(A, {
                    src: U.base64,
                    spreadProps: M,
                    imageVariants: L,
                    generateSources: w
                  }),
                U.tracedSVG &&
                  c.default.createElement(A, {
                    src: U.tracedSVG,
                    spreadProps: M,
                    imageVariants: L,
                    generateSources: T
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    "picture",
                    null,
                    b(L),
                    c.default.createElement(C, {
                      alt: n,
                      title: t,
                      sizes: U.sizes,
                      src: U.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: U.srcSet,
                      style: N,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: E,
                      loading: S,
                      draggable: k
                    })
                  ),
                this.addNoScript &&
                  c.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: x(
                        (0, u.default)({ alt: n, title: t, loading: S }, U, {
                          imageVariants: L
                        })
                      )
                    }
                  })
              );
            }
            if (h) {
              var z = h,
                F = z[0],
                j = (0, u.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: F.width,
                    height: F.height
                  },
                  i
                );
              return (
                "inherit" === i.display && delete j.display,
                c.default.createElement(
                  v,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: j,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(F.srcSet)
                  },
                  O &&
                    c.default.createElement(v, {
                      title: t,
                      style: (0, u.default)(
                        {
                          backgroundColor: O,
                          width: F.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: F.height
                        },
                        _ && R
                      )
                    }),
                  F.base64 &&
                    c.default.createElement(A, {
                      src: F.base64,
                      spreadProps: M,
                      imageVariants: z,
                      generateSources: w
                    }),
                  F.tracedSVG &&
                    c.default.createElement(A, {
                      src: F.tracedSVG,
                      spreadProps: M,
                      imageVariants: z,
                      generateSources: T
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      "picture",
                      null,
                      b(z),
                      c.default.createElement(C, {
                        alt: n,
                        title: t,
                        width: F.width,
                        height: F.height,
                        sizes: F.sizes,
                        src: F.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: F.srcSet,
                        style: N,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: E,
                        loading: S,
                        draggable: k
                      })
                    ),
                  this.addNoScript &&
                    c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: x(
                          (0, u.default)({ alt: n, title: t, loading: S }, F, {
                            imageVariants: z
                          })
                        )
                      }
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(c.default.Component);
      P.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var _ = s.default.shape({
          width: s.default.number.isRequired,
          height: s.default.number.isRequired,
          src: s.default.string.isRequired,
          srcSet: s.default.string.isRequired,
          base64: s.default.string,
          tracedSVG: s.default.string,
          srcWebp: s.default.string,
          srcSetWebp: s.default.string,
          media: s.default.string
        }),
        N = s.default.shape({
          aspectRatio: s.default.number.isRequired,
          src: s.default.string.isRequired,
          srcSet: s.default.string.isRequired,
          sizes: s.default.string.isRequired,
          base64: s.default.string,
          tracedSVG: s.default.string,
          srcWebp: s.default.string,
          srcSetWebp: s.default.string,
          media: s.default.string
        });
      P.propTypes = {
        resolutions: _,
        sizes: N,
        fixed: s.default.oneOfType([_, s.default.arrayOf(_)]),
        fluid: s.default.oneOfType([N, s.default.arrayOf(N)]),
        fadeIn: s.default.bool,
        durationFadeIn: s.default.number,
        title: s.default.string,
        alt: s.default.string,
        className: s.default.oneOfType([s.default.string, s.default.object]),
        critical: s.default.bool,
        crossOrigin: s.default.oneOfType([s.default.string, s.default.bool]),
        style: s.default.object,
        imgStyle: s.default.object,
        placeholderStyle: s.default.object,
        placeholderClassName: s.default.string,
        backgroundColor: s.default.oneOfType([
          s.default.string,
          s.default.bool
        ]),
        onLoad: s.default.func,
        onError: s.default.func,
        onStartLoad: s.default.func,
        Tag: s.default.string,
        itemProp: s.default.string,
        loading: s.default.oneOf(["auto", "lazy", "eager"]),
        draggable: s.default.bool
      };
      var O = P;
      t.default = O;
    },
    Aokb: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<h2>Bans infinite scroll, autoplay, and other addictive features on social media</h2>\\n<h2>Requires choice parity for consent</h2>\\n<h2>Gives the FTC and HHS authority to ban other similar practices</h2>\\n<h2>Gives users power to monitor and control their use time on social media</h2>","frontmatter":{"title":"SMART"}}}}'
      );
    },
    BPGI: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<h2>Creating User Rights</h2>\\n<h2>Placing Clear Obligations on Companies</h2>\\n<h2>Establishing a Digital Privacy Agency (DPA)</h2>\\n<h2>Strengthening Enforcement</h2>","frontmatter":{"title":"About the Online Policy Act"}}}}'
      );
    },
    Bl7J: function(e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r),
        i = n("1Yj4"),
        l = n("ok1R"),
        o = n("rhny"),
        u = n("TBGs"),
        c = n("9eSz"),
        s = n.n(c),
        f =
          (n("ItRP"),
          function() {
            var e = u.data;
            return a.a.createElement(
              "div",
              { className: "civic-image" },
              a.a.createElement(
                "a",
                {
                  href:
                    "https://www.media.mit.edu/groups/civic-media/overview/",
                  rel: "noopener noreferrer",
                  target: "_blank"
                },
                a.a.createElement(s.a, {
                  fluid: e.placeholderImage.childImageSharp.fluid
                })
              )
            );
          }),
        d = function(e) {
          return a.a.createElement(
            l.a,
            { className: "pb-5" },
            a.a.createElement(o.a, { xs: 12 }, a.a.createElement(f, null))
          );
        },
        p = a.a.forwardRef(function(e, t) {
          var n = e.children;
          return a.a.createElement(
            "div",
            { ref: t },
            a.a.createElement(i.a, null, n)
          );
        });
      t.a = function(e) {
        var t = e.children,
          n = a.a.createRef();
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            p,
            { ref: n },
            a.a.createElement("main", null, t),
            a.a.createElement(d, null)
          )
        );
      };
    },
    EH9Q: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Privacy Matters","description":"TBD","author":"@dsjen"}}}}'
      );
    },
    Gytx: function(e, t, n) {
      n("2Spj"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("RW0V"),
        (e.exports = function(e, t, n, r) {
          var a = n ? n.call(r, e, t) : void 0;
          if (void 0 !== a) return !!a;
          if (e === t) return !0;
          if ("object" != typeof e || !e || "object" != typeof t || !t)
            return !1;
          var i = Object.keys(e),
            l = Object.keys(t);
          if (i.length !== l.length) return !1;
          for (
            var o = Object.prototype.hasOwnProperty.bind(t), u = 0;
            u < i.length;
            u++
          ) {
            var c = i[u];
            if (!o(c)) return !1;
            var s = e[c],
              f = t[c];
            if (
              !1 === (a = n ? n.call(r, s, f, c) : void 0) ||
              (void 0 === a && s !== f)
            )
              return !1;
          }
          return !0;
        });
    },
    HsiO: function(e, t, n) {
      var r = n("Z6+o"),
        a = n("6R51"),
        i = n("UlM4");
      e.exports = function(e, t) {
        return r(e) || a(e, t) || i();
      };
    },
    OGtf: function(e, t, n) {
      var r = n("XKFU"),
        a = n("eeVq"),
        i = n("vhPU"),
        l = /"/g,
        o = function(e, t, n, r) {
          var a = String(i(e)),
            o = "<" + t;
          return (
            "" !== n &&
              (o += " " + n + '="' + String(r).replace(l, "&quot;") + '"'),
            o + ">" + a + "</" + t + ">"
          );
        };
      e.exports = function(e, t) {
        var n = {};
        (n[e] = t(o)),
          r(
            r.P +
              r.F *
                a(function() {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            n
          );
      };
    },
    OnBO: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACjUlEQVQ4y3VTXUsbURDNj/RJ6B/wP/RJn/JgMRqQRB8ULCiIohH6IklaECktYhK3xISsSTZfu5tkN/u9G3M6MyHSCl4YZu/dO2fOnJmbMk0TjuPAsiyxXq8n3vd9eJ73obmuK3Gz2UzuT6dT6LqOFAeyOY6HKIqgqiomkwnCMMTq33tjwPl8jsViIaDqSxv1ep3IaAzowjA8NJuBAHEA+yRJJOgjY2YM+Pr6+gbOiVJB4BNVE4+PVTQaz3LIgEEQCGNmyn5lfM53mNn7xf+IYUAMddRqNcnEQePxGMPhUGw0Gomug8FAPGtu27ZoyIsZxnEsxuepZYlTYteUDAzKgYWbG+TzeeRyOezu7mJzcxPr6+tIp9MCxCXz4uSMwYkURUGK6du2RSVMOZ9kYmbHx8col8vY29vDycmJAK+trWFjY+M/wG63i1ZLlW8GJUAX44lDOs6pESCLpMzT01McHh4ik8lge3sbBwcHODo6wvn5+VIv31syNHUCfKa4eAmYRCHGxgzFUhP9vk0lxwSoo1Kp4Pb2FjdU+tXVFS4vL1EoFPCkPGH8+w80bYiXGY1M1yKWoMoWS0B1MMKvegMIbWCRIKSmmKaBdrtNmVvieTY7nY40xiWJ4kYXd7VnfLmr4EdNw0sLaHcWQiT1XWng87d7VLQR1KEOnyTgIG7Qyljn5fA74kkZmTtecyo1SULR3rKoy5Y9w1eli0/XP5G5V+SS6/nynFh4HoWV5xHhGe1pmrDVDYO0N9Dv9amRA+m4NOVtMKNYfLVaRbFYlAZcXFyIhqVSSWaUz7a2tpDNZnF2dob9/X3Z7+zs4OHhgRnaBBSJdgnR5qDVQzeIwb/G5TNDZsejxU3g89UD4P1f/UwDKldtYIwAAAAASUVORK5CYII=","aspectRatio":1.4369747899159664,"src":"/static/a522318e5bbdf90b3675e545017242e5/a54c6/policy-online-privacy-design.png","srcSet":"/static/a522318e5bbdf90b3675e545017242e5/59beb/policy-online-privacy-design.png 200w,\\n/static/a522318e5bbdf90b3675e545017242e5/c0bbd/policy-online-privacy-design.png 400w,\\n/static/a522318e5bbdf90b3675e545017242e5/a54c6/policy-online-privacy-design.png 800w,\\n/static/a522318e5bbdf90b3675e545017242e5/6d3f1/policy-online-privacy-design.png 1026w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    Oyvg: function(e, t, n) {
      var r = n("dyZX"),
        a = n("Xbzi"),
        i = n("hswa").f,
        l = n("kJMx").f,
        o = n("quPj"),
        u = n("C/va"),
        c = r.RegExp,
        s = c,
        f = c.prototype,
        d = /a/g,
        p = /a/g,
        m = new c(d) !== d;
      if (
        n("nh4g") &&
        (!m ||
          n("eeVq")(function() {
            return (
              (p[n("K0xU")("match")] = !1),
              c(d) != d || c(p) == p || "/a/i" != c(d, "i")
            );
          }))
      ) {
        c = function(e, t) {
          var n = this instanceof c,
            r = o(e),
            i = void 0 === t;
          return !n && r && e.constructor === c && i
            ? e
            : a(
                m
                  ? new s(r && !i ? e.source : e, t)
                  : s(
                      (r = e instanceof c) ? e.source : e,
                      r && i ? u.call(e) : t
                    ),
                n ? this : f,
                c
              );
        };
        for (
          var h = function(e) {
              (e in c) ||
                i(c, e, {
                  configurable: !0,
                  get: function() {
                    return s[e];
                  },
                  set: function(t) {
                    s[e] = t;
                  }
                });
            },
            g = l(s),
            y = 0;
          g.length > y;

        )
          h(g[y++]);
        (f.constructor = c), (c.prototype = f), n("KroJ")(r, "RegExp", c);
      }
      n("elZq")("RegExp");
    },
    Pmem: function(e, t, n) {
      "use strict";
      n("a1Th"),
        n("h7Nl"),
        n("Btvt"),
        n("pIFo"),
        (e.exports = function(e) {
          return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
            return "%".concat(
              e
                .charCodeAt(0)
                .toString(16)
                .toUpperCase()
            );
          });
        });
    },
    QCnb: function(e, t, n) {
      "use strict";
      e.exports = n("+wdc");
    },
    TBGs: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAABLklEQVQ4y8XTvUoDQRSG4T2ju0ELCwNibWmpvWATbCz9KWKhhWgatREFG7tAEBEEURTBkMLG+BOwECE34C3Y2KTJNcR31k9cN4nERgeenOwwzJwzezYIvobBdfD/w+Ifsw1CHXeo4RYVTGpd3682ZCziBCUc4AItzKYX9jScc2NkOYVpC+wzq1ccMTdDnFAl8cYf0XTQ96OcFlaUUQMvHDBMfMab5q8TpVtCe3Iq54ZwpbkBZ/H0oJ7P8NhztdqwSrjUXIh+RHr2d1vLRJHPbh7rWMEcsj9leNzl0FNUndkQMY9VrMlI+p0lM2ziEOcqs8yFj+p/PQxDn/EmluBfVBH7yHXqw2XCA+4VvSeMYwFb3GtWG+5gG3vYReEPPhffWN2/5bhFaKUg1TJtrfMO35EszcWQhMwAAAAASUVORK5CYII=","aspectRatio":1.5468509984639016,"src":"/static/4e27d74f0af3fca05a3329f711220c6f/c6a2b/civic-media-logo-black.png","srcSet":"/static/4e27d74f0af3fca05a3329f711220c6f/19787/civic-media-logo-black.png 75w,\\n/static/4e27d74f0af3fca05a3329f711220c6f/59d48/civic-media-logo-black.png 150w,\\n/static/4e27d74f0af3fca05a3329f711220c6f/c6a2b/civic-media-logo-black.png 300w,\\n/static/4e27d74f0af3fca05a3329f711220c6f/eea35/civic-media-logo-black.png 450w,\\n/static/4e27d74f0af3fca05a3329f711220c6f/78d2a/civic-media-logo-black.png 600w,\\n/static/4e27d74f0af3fca05a3329f711220c6f/dd9fd/civic-media-logo-black.png 2014w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'
      );
    },
    TJpk: function(e, t, n) {
      n("LK8F"),
        n("dZ+Y"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("RW0V"),
        n("8+KV"),
        n("/SS/"),
        n("hHhE"),
        n("V+eJ"),
        n("HAE/"),
        n("91GP"),
        (t.__esModule = !0),
        (t.Helmet = void 0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = f(n("q1tI")),
        l = f(n("17x9")),
        o = f(n("8+s/")),
        u = f(n("bmMU")),
        c = n("v1p5"),
        s = n("hFT/");
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      var p,
        m,
        h,
        g = (0, o.default)(
          c.reducePropsToState,
          c.handleClientStateChange,
          c.mapStateOnServer
        )(function() {
          return null;
        }),
        y =
          ((p = g),
          (h = m = (function(e) {
            function t() {
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                (function(e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(this, e.apply(this, arguments))
              );
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              (t.prototype.shouldComponentUpdate = function(e) {
                return !(0, u.default)(this.props, e);
              }),
              (t.prototype.mapNestedChildrenToProps = function(e, t) {
                if (!t) return null;
                switch (e.type) {
                  case s.TAG_NAMES.SCRIPT:
                  case s.TAG_NAMES.NOSCRIPT:
                    return { innerHTML: t };
                  case s.TAG_NAMES.STYLE:
                    return { cssText: t };
                }
                throw new Error(
                  "<" +
                    e.type +
                    " /> elements are self-closing and can not contain children. Refer to our API for more information."
                );
              }),
              (t.prototype.flattenArrayTypeChildren = function(e) {
                var t,
                  n = e.child,
                  a = e.arrayTypeChildren,
                  i = e.newChildProps,
                  l = e.nestedChildren;
                return r(
                  {},
                  a,
                  (((t = {})[n.type] = [].concat(a[n.type] || [], [
                    r({}, i, this.mapNestedChildrenToProps(n, l))
                  ])),
                  t)
                );
              }),
              (t.prototype.mapObjectTypeChildren = function(e) {
                var t,
                  n,
                  a = e.child,
                  i = e.newProps,
                  l = e.newChildProps,
                  o = e.nestedChildren;
                switch (a.type) {
                  case s.TAG_NAMES.TITLE:
                    return r(
                      {},
                      i,
                      (((t = {})[a.type] = o),
                      (t.titleAttributes = r({}, l)),
                      t)
                    );
                  case s.TAG_NAMES.BODY:
                    return r({}, i, { bodyAttributes: r({}, l) });
                  case s.TAG_NAMES.HTML:
                    return r({}, i, { htmlAttributes: r({}, l) });
                }
                return r({}, i, (((n = {})[a.type] = r({}, l)), n));
              }),
              (t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                var n = r({}, t);
                return (
                  Object.keys(e).forEach(function(t) {
                    var a;
                    n = r({}, n, (((a = {})[t] = e[t]), a));
                  }),
                  n
                );
              }),
              (t.prototype.warnOnInvalidChildren = function(e, t) {
                return !0;
              }),
              (t.prototype.mapChildrenToProps = function(e, t) {
                var n = this,
                  r = {};
                return (
                  i.default.Children.forEach(e, function(e) {
                    if (e && e.props) {
                      var a = e.props,
                        i = a.children,
                        l = d(a, ["children"]),
                        o = (0, c.convertReactPropstoHtmlAttributes)(l);
                      switch ((n.warnOnInvalidChildren(e, i), e.type)) {
                        case s.TAG_NAMES.LINK:
                        case s.TAG_NAMES.META:
                        case s.TAG_NAMES.NOSCRIPT:
                        case s.TAG_NAMES.SCRIPT:
                        case s.TAG_NAMES.STYLE:
                          r = n.flattenArrayTypeChildren({
                            child: e,
                            arrayTypeChildren: r,
                            newChildProps: o,
                            nestedChildren: i
                          });
                          break;
                        default:
                          t = n.mapObjectTypeChildren({
                            child: e,
                            newProps: t,
                            newChildProps: o,
                            nestedChildren: i
                          });
                      }
                    }
                  }),
                  (t = this.mapArrayTypeChildrenToProps(r, t))
                );
              }),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.children,
                  n = d(e, ["children"]),
                  a = r({}, n);
                return (
                  t && (a = this.mapChildrenToProps(t, a)),
                  i.default.createElement(p, a)
                );
              }),
              a(t, null, [
                {
                  key: "canUseDOM",
                  set: function(e) {
                    p.canUseDOM = e;
                  }
                }
              ]),
              t
            );
          })(i.default.Component)),
          (m.propTypes = {
            base: l.default.object,
            bodyAttributes: l.default.object,
            children: l.default.oneOfType([
              l.default.arrayOf(l.default.node),
              l.default.node
            ]),
            defaultTitle: l.default.string,
            defer: l.default.bool,
            encodeSpecialCharacters: l.default.bool,
            htmlAttributes: l.default.object,
            link: l.default.arrayOf(l.default.object),
            meta: l.default.arrayOf(l.default.object),
            noscript: l.default.arrayOf(l.default.object),
            onChangeClientState: l.default.func,
            script: l.default.arrayOf(l.default.object),
            style: l.default.arrayOf(l.default.object),
            title: l.default.string,
            titleAttributes: l.default.object,
            titleTemplate: l.default.string
          }),
          (m.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (m.peek = p.peek),
          (m.rewind = function() {
            var e = p.rewind();
            return (
              e ||
                (e = (0, c.mapStateOnServer)({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {}
                })),
              e
            );
          }),
          h);
      (y.renderStatic = y.rewind), (t.Helmet = y), (t.default = y);
    },
    TSYQ: function(e, t, n) {
      var r;
      n("LK8F"),
        (function() {
          "use strict";
          var n = {}.hasOwnProperty;
          function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var r = arguments[t];
              if (r) {
                var i = typeof r;
                if ("string" === i || "number" === i) e.push(r);
                else if (Array.isArray(r) && r.length) {
                  var l = a.apply(null, r);
                  l && e.push(l);
                } else if ("object" === i)
                  for (var o in r) n.call(r, o) && r[o] && e.push(o);
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (r = function() {
                  return a;
                }.apply(t, [])) || (e.exports = r);
        })();
    },
    UlM4: function(e, t) {
      e.exports = function() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    },
    "Z6+o": function(e, t) {
      e.exports = function(e) {
        if (Array.isArray(e)) return e;
      };
    },
    bmMU: function(e, t, n) {
      "use strict";
      n("f3/d"),
        n("SRfc"),
        n("a1Th"),
        n("h7Nl"),
        n("Oyvg"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("RW0V"),
        n("LK8F");
      var r = Array.isArray,
        a = Object.keys,
        i = Object.prototype.hasOwnProperty,
        l = "undefined" != typeof Element;
      e.exports = function(e, t) {
        try {
          return (function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              var o,
                u,
                c,
                s = r(t),
                f = r(n);
              if (s && f) {
                if ((u = t.length) != n.length) return !1;
                for (o = u; 0 != o--; ) if (!e(t[o], n[o])) return !1;
                return !0;
              }
              if (s != f) return !1;
              var d = t instanceof Date,
                p = n instanceof Date;
              if (d != p) return !1;
              if (d && p) return t.getTime() == n.getTime();
              var m = t instanceof RegExp,
                h = n instanceof RegExp;
              if (m != h) return !1;
              if (m && h) return t.toString() == n.toString();
              var g = a(t);
              if ((u = g.length) !== a(n).length) return !1;
              for (o = u; 0 != o--; ) if (!i.call(n, g[o])) return !1;
              if (l && t instanceof Element && n instanceof Element)
                return t === n;
              for (o = u; 0 != o--; )
                if (!(("_owner" === (c = g[o]) && t.$$typeof) || e(t[c], n[c])))
                  return !1;
              return !0;
            }
            return t != t && n != n;
          })(e, t);
        } catch (n) {
          if (
            (n.message && n.message.match(/stack|recursion/i)) ||
            -2146828260 === n.number
          )
            return (
              console.warn(
                "Warning: react-fast-compare does not handle circular references.",
                n.name,
                n.message
              ),
              !1
            );
          throw n;
        }
      };
    },
    cqv3: function(e, t) {
      e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      };
    },
    "cr+I": function(e, t, n) {
      "use strict";
      n("0l/t");
      var r = n("HsiO");
      n("rE2o"),
        n("ioFf"),
        n("DNiP"),
        n("hHhE"),
        n("91GP"),
        n("Tze0"),
        n("7h0T"),
        n("xfY5"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("RW0V"),
        n("bWfx"),
        n("Vd3H"),
        n("LK8F"),
        n("KKXr"),
        n("V+eJ"),
        n("pIFo");
      var a = n("+YAX"),
        i = n("Pmem"),
        l = n("8jRI"),
        o = n("8yz6");
      function u(e, t) {
        return t.encode ? (t.strict ? i(e) : encodeURIComponent(e)) : e;
      }
      function c(e, t) {
        return t.decode ? l(e) : e;
      }
      function s(e) {
        var t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function f(e) {
        var t = (e = s(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function d(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function p(e, t) {
        var n = (function(e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function(e, n, r) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n))
                      : (r[e] = n);
                };
              case "bracket":
                return function(e, n, r) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== r[e]
                        ? (r[e] = [].concat(r[e], n))
                        : (r[e] = [n])
                      : (r[e] = n);
                };
              case "comma":
                return function(e, t, n) {
                  var r =
                    "string" == typeof t && t.split("").indexOf(",") > -1
                      ? t.split(",")
                      : t;
                  n[e] = r;
                };
              default:
                return function(e, t, n) {
                  void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                };
            }
          })(
            (t = Object.assign(
              {
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                parseNumbers: !1,
                parseBooleans: !1
              },
              t
            ))
          ),
          a = Object.create(null);
        if ("string" != typeof e) return a;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return a;
        var i = !0,
          l = !1,
          u = void 0;
        try {
          for (
            var s, f = e.split("&")[Symbol.iterator]();
            !(i = (s = f.next()).done);
            i = !0
          ) {
            var p = s.value,
              m = o(t.decode ? p.replace(/\+/g, " ") : p, "="),
              h = r(m, 2),
              g = h[0],
              y = h[1];
            (y = void 0 === y ? null : c(y, t)), n(c(g, t), y, a);
          }
        } catch (x) {
          (l = !0), (u = x);
        } finally {
          try {
            i || null == f.return || f.return();
          } finally {
            if (l) throw u;
          }
        }
        for (var v = 0, b = Object.keys(a); v < b.length; v++) {
          var E = b[v],
            T = a[E];
          if ("object" == typeof T && null !== T)
            for (var w = 0, S = Object.keys(T); w < S.length; w++) {
              var k = S[w];
              T[k] = d(T[k], t);
            }
          else a[E] = d(T, t);
        }
        return !1 === t.sort
          ? a
          : (!0 === t.sort
              ? Object.keys(a).sort()
              : Object.keys(a).sort(t.sort)
            ).reduce(function(e, t) {
              var n = a[t];
              return (
                Boolean(n) && "object" == typeof n && !Array.isArray(n)
                  ? (e[t] = (function e(t) {
                      return Array.isArray(t)
                        ? t.sort()
                        : "object" == typeof t
                        ? e(Object.keys(t))
                            .sort(function(e, t) {
                              return Number(e) - Number(t);
                            })
                            .map(function(e) {
                              return t[e];
                            })
                        : t;
                    })(n))
                  : (e[t] = n),
                e
              );
            }, Object.create(null));
      }
      (t.extract = f),
        (t.parse = p),
        (t.stringify = function(e, t) {
          if (!e) return "";
          var n = (function(e) {
              switch (e.arrayFormat) {
                case "index":
                  return function(t) {
                    return function(n, r) {
                      var i = n.length;
                      return void 0 === r || (e.skipNull && null === r)
                        ? n
                        : [].concat(
                            a(n),
                            null === r
                              ? [[u(t, e), "[", i, "]"].join("")]
                              : [
                                  [u(t, e), "[", u(i, e), "]=", u(r, e)].join(
                                    ""
                                  )
                                ]
                          );
                    };
                  };
                case "bracket":
                  return function(t) {
                    return function(n, r) {
                      return void 0 === r || (e.skipNull && null === r)
                        ? n
                        : [].concat(
                            a(n),
                            null === r
                              ? [[u(t, e), "[]"].join("")]
                              : [[u(t, e), "[]=", u(r, e)].join("")]
                          );
                    };
                  };
                case "comma":
                  return function(t) {
                    return function(n, r) {
                      return null == r || 0 === r.length
                        ? n
                        : 0 === n.length
                        ? [[u(t, e), "=", u(r, e)].join("")]
                        : [[n, u(r, e)].join(",")];
                    };
                  };
                default:
                  return function(t) {
                    return function(n, r) {
                      return void 0 === r || (e.skipNull && null === r)
                        ? n
                        : [].concat(
                            a(n),
                            null === r
                              ? [u(t, e)]
                              : [[u(t, e), "=", u(r, e)].join("")]
                          );
                    };
                  };
              }
            })(
              (t = Object.assign(
                { encode: !0, strict: !0, arrayFormat: "none" },
                t
              ))
            ),
            r = Object.assign({}, e);
          if (t.skipNull)
            for (var i = 0, l = Object.keys(r); i < l.length; i++) {
              var o = l[i];
              (void 0 !== r[o] && null !== r[o]) || delete r[o];
            }
          var c = Object.keys(r);
          return (
            !1 !== t.sort && c.sort(t.sort),
            c
              .map(function(r) {
                var a = e[r];
                return void 0 === a
                  ? ""
                  : null === a
                  ? u(r, t)
                  : Array.isArray(a)
                  ? a.reduce(n(r), []).join("&")
                  : u(r, t) + "=" + u(a, t);
              })
              .filter(function(e) {
                return e.length > 0;
              })
              .join("&")
          );
        }),
        (t.parseUrl = function(e, t) {
          return { url: s(e).split("?")[0] || "", query: p(f(e), t) };
        }),
        (t.stringifyUrl = function(e, n) {
          var r = s(e.url).split("?")[0] || "",
            a = t.extract(e.url),
            i = t.parse(a),
            l = (function(e) {
              var t = "",
                n = e.indexOf("#");
              return -1 !== n && (t = e.slice(n)), t;
            })(e.url),
            o = Object.assign(i, e.query),
            u = t.stringify(o, n);
          return (
            u && (u = "?".concat(u)),
            ""
              .concat(r)
              .concat(u)
              .concat(l)
          );
        });
    },
    "eKp/": function(e, t, n) {
      "use strict";
      n("KKXr"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("OG14");
      var r = n("cr+I"),
        a = n.n(r);
      n.d(t, "a", function() {
        return i;
      }),
        n.d(t, "b", function() {
          return l;
        });
      var i = "PRIVACY_MATTERS_2020";
      function l(e) {
        var t,
          n =
            ((t = "ft"),
            "undefined" != typeof window
              ? a.a.parse(window.location.search)[t]
              : "");
        return !!n && n.split(",").indexOf(e) > -1;
      }
    },
    eSms: function(e) {
      e.exports = JSON.parse(
        '{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"c1300853-83f0-5ac8-ad4c-a659385bb318","frontmatter":{"quotee":"Name, Lawyer","policy":"SMART","prompt":"How did a lawyer respond?"},"html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"}},{"node":{"id":"99c29eac-d1ed-5636-9336-8398e6705b3a","frontmatter":{"quotee":"Name, Designer","policy":"CORPA","prompt":"How did a designer respond?"},"html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"}},{"node":{"id":"5c468cd4-4576-5182-bd6f-6fa7a389e164","frontmatter":{"quotee":"Name, Researcher","policy":"ONLINE_PRIVACY","prompt":"How did a researcher respond?"},"html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"}}]}}}'
      );
    },
    fcRk: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<h2>Codifies privacy as a right</h2>\\n<h2>Creates new enforcement powers for the FTC to take action against unlawful discrimination</h2>\\n<h2>Empowers consumers with a strong private right of action</h2>\\n<h2>Creates accountability requirements so that senior executives take responsibility for decisions that impact privacy and risk penalties when they fall short</h2>\\n<h2>Gives states the authority to fully enforce COPRA</h2>","frontmatter":{"title":"About CORPA"}}}}'
      );
    },
    "hFT/": function(e, t, n) {
      n("DNiP"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("RW0V"),
        n("bWfx"),
        (t.__esModule = !0);
      t.ATTRIBUTE_NAMES = {
        BODY: "bodyAttributes",
        HTML: "htmlAttributes",
        TITLE: "titleAttributes"
      };
      var r = (t.TAG_NAMES = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title"
        }),
        a =
          ((t.VALID_TAG_NAMES = Object.keys(r).map(function(e) {
            return r[e];
          })),
          (t.TAG_PROPERTIES = {
            CHARSET: "charset",
            CSS_TEXT: "cssText",
            HREF: "href",
            HTTPEQUIV: "http-equiv",
            INNER_HTML: "innerHTML",
            ITEM_PROP: "itemprop",
            NAME: "name",
            PROPERTY: "property",
            REL: "rel",
            SRC: "src"
          }),
          (t.REACT_TAG_MAP = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex"
          }));
      (t.HELMET_PROPS = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate"
      }),
        (t.HTML_TAG_MAP = Object.keys(a).reduce(function(e, t) {
          return (e[a[t]] = t), e;
        }, {})),
        (t.SELF_CLOSING_TAGS = [r.NOSCRIPT, r.SCRIPT, r.STYLE]),
        (t.HELMET_ATTRIBUTE = "data-react-helmet");
    },
    i8i4: function(e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        ) {
          0;
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
        }
      })(),
        (e.exports = n("yl30"));
    },
    k1TG: function(e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    kTM6: function(e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r),
        i = n("ok1R"),
        l = n("rhny"),
        o = n("ru7J"),
        u = n("qN1e"),
        c = n("9eSz"),
        s = n.n(c),
        f = function() {
          var e = u.data;
          return a.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        d = n("OnBO"),
        p = function() {
          var e = d.data;
          return a.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        m = n("lxgn"),
        h = function() {
          var e = m.data;
          return a.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        g =
          (n("pwFx"),
          function(e) {
            var t,
              n = e.selectedPolicy,
              r =
                (((t = {})[o.c] = a.a.createElement(f, null)),
                (t[o.b] = a.a.createElement(p, null)),
                (t[o.a] = a.a.createElement(h, null)),
                t);
            return a.a.createElement(
              "div",
              { className: "my-3" },
              a.a.createElement(
                "h3",
                { className: "mb-5" },
                "How might a social media platform look like if this bill were passed?"
              ),
              r[n]
            );
          }),
        y = n("Aokb"),
        v = function(e) {
          var t = e.fullPolicyLink,
            n = e.markdownRemark.html;
          return a.a.createElement(
            "div",
            { className: "policy-about pt-3 pb-5" },
            a.a.createElement("div", {
              dangerouslySetInnerHTML: { __html: n }
            }),
            a.a.createElement(
              "div",
              { className: "text-center" },
              a.a.createElement(
                "a",
                { href: t, rel: "noopener noreferrer", target: "_blank" },
                "See full text"
              )
            )
          );
        },
        b = function(e) {
          var t = y.data.markdownRemark;
          return a.a.createElement(v, {
            markdownRemark: t,
            fullPolicyLink:
              "https://www.hawley.senate.gov/sites/default/files/2019-07/Social-Media-Addiction-Reduction-Technology-Act.pdf"
          });
        },
        E = n("BPGI"),
        T = function(e) {
          var t = E.data.markdownRemark;
          return a.a.createElement(v, {
            markdownRemark: t,
            fullPolicyLink:
              "https://eshoo.house.gov/sites/eshoo.house.gov/files/migrated/wp-content/uploads/2019/11/Bill-Text-Online-Privacy-Act-Eshoo-Lofgren.pdf"
          });
        },
        w = n("fcRk"),
        S = function(e) {
          var t = w.data.markdownRemark;
          return a.a.createElement(v, {
            markdownRemark: t,
            fullPolicyLink:
              "https://www.cantwell.senate.gov/imo/media/doc/COPRA%20Bill%20Text.pdf"
          });
        },
        k =
          (n("/ohh"),
          function(e) {
            var t = e.selectedPolicy;
            return t === o.c
              ? a.a.createElement(b, null)
              : t === o.b
              ? a.a.createElement(T, null)
              : t === o.a
              ? a.a.createElement(S, null)
              : void 0;
          }),
        x = n("eSms"),
        A =
          (n("oJSB"),
          function(e) {
            var t = e.node,
              n = t.frontmatter,
              r = t.html;
            return a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                l.a,
                { className: "quote-prompt my-3", xs: 12 },
                a.a.createElement("div", null, n.prompt)
              ),
              a.a.createElement(
                l.a,
                { xs: 12 },
                a.a.createElement(
                  i.a,
                  null,
                  a.a.createElement(
                    l.a,
                    { xs: 3 },
                    a.a.createElement(
                      "div",
                      { className: "text-center display-1" },
                      "🦊"
                    )
                  ),
                  a.a.createElement(
                    l.a,
                    { xs: 9 },
                    a.a.createElement(
                      "blockquote",
                      { className: "blockquote" },
                      a.a.createElement("div", {
                        dangerouslySetInnerHTML: { __html: r }
                      }),
                      a.a.createElement(
                        "footer",
                        { className: "blockquote-footer" },
                        n.quotee
                      )
                    )
                  )
                )
              )
            );
          }),
        C = function(e) {
          var t = e.selectedPolicy,
            n = x.data;
          return a.a.createElement(
            a.a.Fragment,
            null,
            n.allMarkdownRemark.edges
              .filter(function(e) {
                return e.node.frontmatter.policy === t;
              })
              .map(function(e) {
                return a.a.createElement(A, {
                  key: t + "-" + e.node.frontmatter.quotee,
                  node: e.node
                });
              })
          );
        },
        P =
          (n("v31m"),
          function(e) {
            var t = e.title,
              n = e.policy;
            return a.a.createElement(
              "div",
              null,
              a.a.createElement(
                i.a,
                { className: "py-3" },
                a.a.createElement(l.a, null, a.a.createElement("h1", null, t))
              ),
              a.a.createElement(
                i.a,
                { className: "pb-3" },
                a.a.createElement(
                  l.a,
                  { md: 3 },
                  a.a.createElement(k, { selectedPolicy: n })
                ),
                a.a.createElement(
                  l.a,
                  { md: 9 },
                  a.a.createElement(g, { selectedPolicy: n }),
                  a.a.createElement(C, { selectedPolicy: n })
                )
              )
            );
          });
      t.a = function(e) {
        var t = e.policy;
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(P, {
            key: "policy-layout-" + t,
            title: o.d[t].long,
            policy: t,
            className: "py-5"
          })
        );
      };
    },
    lxgn: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y52UaU/iUBSG+/9/iAkxgWBilKUjLa2AxILKIgKKC7uyqUFlOdPnkEvGr9PkzblnX8FyHEc8z5Ns1pNMxhHHcUOaUd51s8pDXdfd8/igx0/h+3J2lhE7bYvl++eSzxfk4qKoRqenCcm6nlxeBsrvEjjqAG/bfyQdOp6f5yQISmoH9T1fMqGNValUpd1uS6vVCtGWu7s7pb/R+sVjf3vbUDQajdCnqTbNZlOsz89P+Z9vNptJtVqVTqcjm816L7dGo5HM53NZLBZKp9OpUjCZTNSRpB8fH4r393fFcrlUHh3vp6cnqVQqYvX7fRkOh4rBYKAKkvCmhefnZ1mv17JarcJKNur8+voq4/FYXl5e1O77+1uSyaREo9FdwF6vp4put6stPDw86CzL5bIGJUm9XtcKsKWLt7c3wZfgJOEyYrHYrmUUDJpMKL++vrQtWjbtEwSe0dAmeqrkTeUEPD4+FovKyB4EQXg+ebm+vlYeCh4fH7ViApAQyjKQ0Q0dUG0ul9sFpAWENzc3cnV1pW8CwgMCmOHzZkkEw49TYcboOfBEIiEWyzAt8aYtM0OcTfXMcbvd6oKwZXbmQ06wg4ODXYXMgrKhZsPISWD0BKcSkhMMnnkC5IVCQTetMzRgy7QApaJaraaVUhGD//n50YXBA3yQcVK2bcvR0ZFYtIgRGakS3sA4Iv8XVM5lADrC11yBxaD5uDHuiLLJdnJyIqVSSflUKhX+IaQVxWJRDg8PJRKJSDwe181yr/ufHjPgIxNbYyGAuzSHfn9/v5ebUQAj5xfDSFjOXwQciGfh2OGAAAAAAElFTkSuQmCC","aspectRatio":1.2805662805662805,"src":"/static/6a8a44a313f9ceabfb07b66d02e3e501/a54c6/policy-corpa-design.png","srcSet":"/static/6a8a44a313f9ceabfb07b66d02e3e501/59beb/policy-corpa-design.png 200w,\\n/static/6a8a44a313f9ceabfb07b66d02e3e501/c0bbd/policy-corpa-design.png 400w,\\n/static/6a8a44a313f9ceabfb07b66d02e3e501/a54c6/policy-corpa-design.png 800w,\\n/static/6a8a44a313f9ceabfb07b66d02e3e501/c35de/policy-corpa-design.png 995w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    ok1R: function(e, t, n) {
      "use strict";
      n("8+KV");
      var r = n("k1TG"),
        a = n("8o2o"),
        i = n("q1tI"),
        l = n.n(i),
        o = n("17x9"),
        u = n.n(o),
        c = n("TSYQ"),
        s = n.n(c),
        f = n("33Jr"),
        d = u.a.oneOfType([u.a.number, u.a.string]),
        p = {
          tag: f.c,
          noGutters: u.a.bool,
          className: u.a.string,
          cssModule: u.a.object,
          form: u.a.bool,
          xs: d,
          sm: d,
          md: d,
          lg: d,
          xl: d
        },
        m = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        h = function(e) {
          var t = e.className,
            n = e.cssModule,
            i = e.noGutters,
            o = e.tag,
            u = e.form,
            c = e.widths,
            d = Object(a.a)(e, [
              "className",
              "cssModule",
              "noGutters",
              "tag",
              "form",
              "widths"
            ]),
            p = [];
          c.forEach(function(t, n) {
            var r = e[t];
            if ((delete d[t], r)) {
              var a = !n;
              p.push(a ? "row-cols-" + r : "row-cols-" + t + "-" + r);
            }
          });
          var m = Object(f.b)(
            s()(t, i ? "no-gutters" : null, u ? "form-row" : "row", p),
            n
          );
          return l.a.createElement(o, Object(r.a)({}, d, { className: m }));
        };
      (h.propTypes = p), (h.defaultProps = m), (t.a = h);
    },
    q1tI: function(e, t, n) {
      "use strict";
      e.exports = n("viRO");
    },
    qN1e: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACH0lEQVQ4y11TxwpqQQz1v/wG8Qvc+Q8uRARBwYIIgoiCW0Gw7RRBt5aFiAXE3nvvNY+TR3z6AiF35iZnzslkFI/Hg/b7PR0OB9put9Rut6nX63EcDAbU6XSo0WhwHI/H1Gq1eB//+/0+LRYLrt3tdlyvOJ/PtNlseAMu4MfjkV2+EeGn04kj8uDfNcBR4OP5fHLicrmk1WpF0+mURqMRM5pMJhyxhg+HQ5rNZpy3Xq8/zLAGhgKnw7CYz+ecBMnNZpO92+1yrNVqLL3RaDIoDhcCYIZaqGVAMISBOnoCVgAFI/yDv99ver1eHLFG72VP7Hq9/gWURCTBRQIOuFwu3EPsoT1QIN9iqP0BFIbfhqRKpUKRSITy+TzLxToej1O5XOaDhcgPoJyEgkQiQel0mmMymaRYLEYej4dB4cFgkEKhEFWrVWb+PxEGhCxYKpUinU5HTqeT7HY7mc1mMhgMZDKZKBAIkNvtJq1WS+FwmC8JF4FLAUuAg+UPYCaTIZvNxsV+v59cLhepVCpSKpWk0WhIrVaTXq9nxrlc7jMuuDi05Ha70f1+/wcIqVarlXw+H4M6HA6KRqMsH3LBrF6vc//wUjBmMHk9AIT/AApDgEJ6oVBgWTLgmD8BkumQV4RL+rkU9NBoNJLX62W5FouFm49Tv58XZMpgwzC3eNMA/DCEdrAolUoMUiwWKZvNcn9kJjF/4pAMINShHjm4GLD/A6Zh8S7oWLr1AAAAAElFTkSuQmCC","aspectRatio":1.399449035812672,"src":"/static/cca8bf92213dc2861d73487e05cd756f/a54c6/policy-smart-design.png","srcSet":"/static/cca8bf92213dc2861d73487e05cd756f/59beb/policy-smart-design.png 200w,\\n/static/cca8bf92213dc2861d73487e05cd756f/c0bbd/policy-smart-design.png 400w,\\n/static/cca8bf92213dc2861d73487e05cd756f/a54c6/policy-smart-design.png 800w,\\n/static/cca8bf92213dc2861d73487e05cd756f/d37a8/policy-smart-design.png 1016w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    rhny: function(e, t, n) {
      "use strict";
      n("8+KV");
      var r = n("k1TG"),
        a = n("8o2o"),
        i = n("q1tI"),
        l = n.n(i),
        o = n("17x9"),
        u = n.n(o),
        c = n("TSYQ"),
        s = n.n(c),
        f = n("33Jr"),
        d = u.a.oneOfType([u.a.number, u.a.string]),
        p = u.a.oneOfType([
          u.a.bool,
          u.a.number,
          u.a.string,
          u.a.shape({
            size: u.a.oneOfType([u.a.bool, u.a.number, u.a.string]),
            order: d,
            offset: d
          })
        ]),
        m = {
          tag: f.c,
          xs: p,
          sm: p,
          md: p,
          lg: p,
          xl: p,
          className: u.a.string,
          cssModule: u.a.object,
          widths: u.a.array
        },
        h = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        g = function(e, t, n) {
          return !0 === n || "" === n
            ? e
              ? "col"
              : "col-" + t
            : "auto" === n
            ? e
              ? "col-auto"
              : "col-" + t + "-auto"
            : e
            ? "col-" + n
            : "col-" + t + "-" + n;
        },
        y = function(e) {
          var t = e.className,
            n = e.cssModule,
            i = e.widths,
            o = e.tag,
            u = Object(a.a)(e, ["className", "cssModule", "widths", "tag"]),
            c = [];
          i.forEach(function(t, r) {
            var a = e[t];
            if ((delete u[t], a || "" === a)) {
              var i = !r;
              if (Object(f.a)(a)) {
                var l,
                  o = i ? "-" : "-" + t + "-",
                  d = g(i, t, a.size);
                c.push(
                  Object(f.b)(
                    s()(
                      (((l = {})[d] = a.size || "" === a.size),
                      (l["order" + o + a.order] = a.order || 0 === a.order),
                      (l["offset" + o + a.offset] = a.offset || 0 === a.offset),
                      l)
                    ),
                    n
                  )
                );
              } else {
                var p = g(i, t, a);
                c.push(p);
              }
            }
          }),
            c.length || c.push("col");
          var d = Object(f.b)(s()(t, c), n);
          return l.a.createElement(o, Object(r.a)({}, u, { className: d }));
        };
      (y.propTypes = m), (y.defaultProps = h), (t.a = y);
    },
    ru7J: function(e, t, n) {
      "use strict";
      var r;
      n.d(t, "c", function() {
        return a;
      }),
        n.d(t, "b", function() {
          return i;
        }),
        n.d(t, "a", function() {
          return l;
        }),
        n.d(t, "d", function() {
          return o;
        });
      var a = "smart",
        i = "opa",
        l = "corpa",
        o =
          (((r = {})[a] = {
            short: "SMART Act",
            long: "Social Media Addiction Reduction Technology Act (SMART)",
            summary:
              "Bans dark patterns + addictive features and raises user awareness on social media."
          }),
          (r[i] = {
            short: "OPA",
            long: "Online Privacy Act (OPA)",
            summary:
              "Creates user data rights and strengthens enforcement with a Digital Privacy Agency and state level attorneys."
          }),
          (r[l] = {
            short: "CORPA",
            long: "Consumer Online Privacy Rights Act (COPRA)",
            summary:
              "Codifies privacy as a right and creates a private right of action to enforce privacy rights and enforce oversight of platforms."
          }),
          r);
    },
    v1p5: function(e, t, n) {
      (function(e) {
        n("dZ+Y"),
          n("KKXr"),
          n("eM6i"),
          n("8+KV"),
          n("LK8F"),
          n("V+eJ"),
          n("rGqo"),
          n("yt8O"),
          n("Btvt"),
          n("RW0V"),
          n("0l/t"),
          n("bWfx"),
          n("DNiP"),
          n("pIFo"),
          n("91GP"),
          n("rE2o"),
          n("ioFf"),
          (t.__esModule = !0),
          (t.warn = t.requestAnimationFrame = t.reducePropsToState = t.mapStateOnServer = t.handleClientStateChange = t.convertReactPropstoHtmlAttributes = void 0);
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          a =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = u(n("q1tI")),
          l = u(n("MgzW")),
          o = n("hFT/");
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c,
          s = function(e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;");
          },
          f = function(e) {
            var t = g(e, o.TAG_NAMES.TITLE),
              n = g(e, o.HELMET_PROPS.TITLE_TEMPLATE);
            if (n && t)
              return n.replace(/%s/g, function() {
                return t;
              });
            var r = g(e, o.HELMET_PROPS.DEFAULT_TITLE);
            return t || r || void 0;
          },
          d = function(e) {
            return g(e, o.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {};
          },
          p = function(e, t) {
            return t
              .filter(function(t) {
                return void 0 !== t[e];
              })
              .map(function(t) {
                return t[e];
              })
              .reduce(function(e, t) {
                return a({}, e, t);
              }, {});
          },
          m = function(e, t) {
            return t
              .filter(function(e) {
                return void 0 !== e[o.TAG_NAMES.BASE];
              })
              .map(function(e) {
                return e[o.TAG_NAMES.BASE];
              })
              .reverse()
              .reduce(function(t, n) {
                if (!t.length)
                  for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                    var i = r[a].toLowerCase();
                    if (-1 !== e.indexOf(i) && n[i]) return t.concat(n);
                  }
                return t;
              }, []);
          },
          h = function(e, t, n) {
            var a = {};
            return n
              .filter(function(t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    T(
                      "Helmet: " +
                        e +
                        ' should be of type "Array". Instead found type "' +
                        r(t[e]) +
                        '"'
                    ),
                  !1)
                );
              })
              .map(function(t) {
                return t[e];
              })
              .reverse()
              .reduce(function(e, n) {
                var r = {};
                n.filter(function(e) {
                  for (
                    var n = void 0, i = Object.keys(e), l = 0;
                    l < i.length;
                    l++
                  ) {
                    var u = i[l],
                      c = u.toLowerCase();
                    -1 === t.indexOf(c) ||
                      (n === o.TAG_PROPERTIES.REL &&
                        "canonical" === e[n].toLowerCase()) ||
                      (c === o.TAG_PROPERTIES.REL &&
                        "stylesheet" === e[c].toLowerCase()) ||
                      (n = c),
                      -1 === t.indexOf(u) ||
                        (u !== o.TAG_PROPERTIES.INNER_HTML &&
                          u !== o.TAG_PROPERTIES.CSS_TEXT &&
                          u !== o.TAG_PROPERTIES.ITEM_PROP) ||
                        (n = u);
                  }
                  if (!n || !e[n]) return !1;
                  var s = e[n].toLowerCase();
                  return (
                    a[n] || (a[n] = {}),
                    r[n] || (r[n] = {}),
                    !a[n][s] && ((r[n][s] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function(t) {
                    return e.push(t);
                  });
                for (var i = Object.keys(r), u = 0; u < i.length; u++) {
                  var c = i[u],
                    s = (0, l.default)({}, a[c], r[c]);
                  a[c] = s;
                }
                return e;
              }, [])
              .reverse();
          },
          g = function(e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n];
              if (r.hasOwnProperty(t)) return r[t];
            }
            return null;
          },
          y =
            ((c = Date.now()),
            function(e) {
              var t = Date.now();
              t - c > 16
                ? ((c = t), e(t))
                : setTimeout(function() {
                    y(e);
                  }, 0);
            }),
          v = function(e) {
            return clearTimeout(e);
          },
          b =
            "undefined" != typeof window
              ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                y
              : e.requestAnimationFrame || y,
          E =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                v
              : e.cancelAnimationFrame || v,
          T = function(e) {
            return (
              console && "function" == typeof console.warn && console.warn(e)
            );
          },
          w = null,
          S = function(e, t) {
            var n = e.baseTag,
              r = e.bodyAttributes,
              a = e.htmlAttributes,
              i = e.linkTags,
              l = e.metaTags,
              u = e.noscriptTags,
              c = e.onChangeClientState,
              s = e.scriptTags,
              f = e.styleTags,
              d = e.title,
              p = e.titleAttributes;
            A(o.TAG_NAMES.BODY, r), A(o.TAG_NAMES.HTML, a), x(d, p);
            var m = {
                baseTag: C(o.TAG_NAMES.BASE, n),
                linkTags: C(o.TAG_NAMES.LINK, i),
                metaTags: C(o.TAG_NAMES.META, l),
                noscriptTags: C(o.TAG_NAMES.NOSCRIPT, u),
                scriptTags: C(o.TAG_NAMES.SCRIPT, s),
                styleTags: C(o.TAG_NAMES.STYLE, f)
              },
              h = {},
              g = {};
            Object.keys(m).forEach(function(e) {
              var t = m[e],
                n = t.newTags,
                r = t.oldTags;
              n.length && (h[e] = n), r.length && (g[e] = m[e].oldTags);
            }),
              t && t(),
              c(e, h, g);
          },
          k = function(e) {
            return Array.isArray(e) ? e.join("") : e;
          },
          x = function(e, t) {
            void 0 !== e && document.title !== e && (document.title = k(e)),
              A(o.TAG_NAMES.TITLE, t);
          },
          A = function(e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
              for (
                var r = n.getAttribute(o.HELMET_ATTRIBUTE),
                  a = r ? r.split(",") : [],
                  i = [].concat(a),
                  l = Object.keys(t),
                  u = 0;
                u < l.length;
                u++
              ) {
                var c = l[u],
                  s = t[c] || "";
                n.getAttribute(c) !== s && n.setAttribute(c, s),
                  -1 === a.indexOf(c) && a.push(c);
                var f = i.indexOf(c);
                -1 !== f && i.splice(f, 1);
              }
              for (var d = i.length - 1; d >= 0; d--) n.removeAttribute(i[d]);
              a.length === i.length
                ? n.removeAttribute(o.HELMET_ATTRIBUTE)
                : n.getAttribute(o.HELMET_ATTRIBUTE) !== l.join(",") &&
                  n.setAttribute(o.HELMET_ATTRIBUTE, l.join(","));
            }
          },
          C = function(e, t) {
            var n = document.head || document.querySelector(o.TAG_NAMES.HEAD),
              r = n.querySelectorAll(e + "[" + o.HELMET_ATTRIBUTE + "]"),
              a = Array.prototype.slice.call(r),
              i = [],
              l = void 0;
            return (
              t &&
                t.length &&
                t.forEach(function(t) {
                  var n = document.createElement(e);
                  for (var r in t)
                    if (t.hasOwnProperty(r))
                      if (r === o.TAG_PROPERTIES.INNER_HTML)
                        n.innerHTML = t.innerHTML;
                      else if (r === o.TAG_PROPERTIES.CSS_TEXT)
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText));
                      else {
                        var u = void 0 === t[r] ? "" : t[r];
                        n.setAttribute(r, u);
                      }
                  n.setAttribute(o.HELMET_ATTRIBUTE, "true"),
                    a.some(function(e, t) {
                      return (l = t), n.isEqualNode(e);
                    })
                      ? a.splice(l, 1)
                      : i.push(n);
                }),
              a.forEach(function(e) {
                return e.parentNode.removeChild(e);
              }),
              i.forEach(function(e) {
                return n.appendChild(e);
              }),
              { oldTags: a, newTags: i }
            );
          },
          P = function(e) {
            return Object.keys(e).reduce(function(t, n) {
              var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
              return t ? t + " " + r : r;
            }, "");
          },
          _ = function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(e).reduce(function(t, n) {
              return (t[o.REACT_TAG_MAP[n] || n] = e[n]), t;
            }, t);
          },
          N = function(e, t, n) {
            switch (e) {
              case o.TAG_NAMES.TITLE:
                return {
                  toComponent: function() {
                    return (
                      (e = t.title),
                      (n = t.titleAttributes),
                      ((r = { key: e })[o.HELMET_ATTRIBUTE] = !0),
                      (a = _(n, r)),
                      [i.default.createElement(o.TAG_NAMES.TITLE, a, e)]
                    );
                    var e, n, r, a;
                  },
                  toString: function() {
                    return (function(e, t, n, r) {
                      var a = P(n),
                        i = k(t);
                      return a
                        ? "<" +
                            e +
                            " " +
                            o.HELMET_ATTRIBUTE +
                            '="true" ' +
                            a +
                            ">" +
                            s(i, r) +
                            "</" +
                            e +
                            ">"
                        : "<" +
                            e +
                            " " +
                            o.HELMET_ATTRIBUTE +
                            '="true">' +
                            s(i, r) +
                            "</" +
                            e +
                            ">";
                    })(e, t.title, t.titleAttributes, n);
                  }
                };
              case o.ATTRIBUTE_NAMES.BODY:
              case o.ATTRIBUTE_NAMES.HTML:
                return {
                  toComponent: function() {
                    return _(t);
                  },
                  toString: function() {
                    return P(t);
                  }
                };
              default:
                return {
                  toComponent: function() {
                    return (function(e, t) {
                      return t.map(function(t, n) {
                        var r,
                          a = (((r = { key: n })[o.HELMET_ATTRIBUTE] = !0), r);
                        return (
                          Object.keys(t).forEach(function(e) {
                            var n = o.REACT_TAG_MAP[e] || e;
                            if (
                              n === o.TAG_PROPERTIES.INNER_HTML ||
                              n === o.TAG_PROPERTIES.CSS_TEXT
                            ) {
                              var r = t.innerHTML || t.cssText;
                              a.dangerouslySetInnerHTML = { __html: r };
                            } else a[n] = t[e];
                          }),
                          i.default.createElement(e, a)
                        );
                      });
                    })(e, t);
                  },
                  toString: function() {
                    return (function(e, t, n) {
                      return t.reduce(function(t, r) {
                        var a = Object.keys(r)
                            .filter(function(e) {
                              return !(
                                e === o.TAG_PROPERTIES.INNER_HTML ||
                                e === o.TAG_PROPERTIES.CSS_TEXT
                              );
                            })
                            .reduce(function(e, t) {
                              var a =
                                void 0 === r[t]
                                  ? t
                                  : t + '="' + s(r[t], n) + '"';
                              return e ? e + " " + a : a;
                            }, ""),
                          i = r.innerHTML || r.cssText || "",
                          l = -1 === o.SELF_CLOSING_TAGS.indexOf(e);
                        return (
                          t +
                          "<" +
                          e +
                          " " +
                          o.HELMET_ATTRIBUTE +
                          '="true" ' +
                          a +
                          (l ? "/>" : ">" + i + "</" + e + ">")
                        );
                      }, "");
                    })(e, t, n);
                  }
                };
            }
          };
        (t.convertReactPropstoHtmlAttributes = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function(t, n) {
            return (t[o.HTML_TAG_MAP[n] || n] = e[n]), t;
          }, t);
        }),
          (t.handleClientStateChange = function(e) {
            w && E(w),
              e.defer
                ? (w = b(function() {
                    S(e, function() {
                      w = null;
                    });
                  }))
                : (S(e), (w = null));
          }),
          (t.mapStateOnServer = function(e) {
            var t = e.baseTag,
              n = e.bodyAttributes,
              r = e.encode,
              a = e.htmlAttributes,
              i = e.linkTags,
              l = e.metaTags,
              u = e.noscriptTags,
              c = e.scriptTags,
              s = e.styleTags,
              f = e.title,
              d = void 0 === f ? "" : f,
              p = e.titleAttributes;
            return {
              base: N(o.TAG_NAMES.BASE, t, r),
              bodyAttributes: N(o.ATTRIBUTE_NAMES.BODY, n, r),
              htmlAttributes: N(o.ATTRIBUTE_NAMES.HTML, a, r),
              link: N(o.TAG_NAMES.LINK, i, r),
              meta: N(o.TAG_NAMES.META, l, r),
              noscript: N(o.TAG_NAMES.NOSCRIPT, u, r),
              script: N(o.TAG_NAMES.SCRIPT, c, r),
              style: N(o.TAG_NAMES.STYLE, s, r),
              title: N(o.TAG_NAMES.TITLE, { title: d, titleAttributes: p }, r)
            };
          }),
          (t.reducePropsToState = function(e) {
            return {
              baseTag: m([o.TAG_PROPERTIES.HREF], e),
              bodyAttributes: p(o.ATTRIBUTE_NAMES.BODY, e),
              defer: g(e, o.HELMET_PROPS.DEFER),
              encode: g(e, o.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
              htmlAttributes: p(o.ATTRIBUTE_NAMES.HTML, e),
              linkTags: h(
                o.TAG_NAMES.LINK,
                [o.TAG_PROPERTIES.REL, o.TAG_PROPERTIES.HREF],
                e
              ),
              metaTags: h(
                o.TAG_NAMES.META,
                [
                  o.TAG_PROPERTIES.NAME,
                  o.TAG_PROPERTIES.CHARSET,
                  o.TAG_PROPERTIES.HTTPEQUIV,
                  o.TAG_PROPERTIES.PROPERTY,
                  o.TAG_PROPERTIES.ITEM_PROP
                ],
                e
              ),
              noscriptTags: h(
                o.TAG_NAMES.NOSCRIPT,
                [o.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              onChangeClientState: d(e),
              scriptTags: h(
                o.TAG_NAMES.SCRIPT,
                [o.TAG_PROPERTIES.SRC, o.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              styleTags: h(o.TAG_NAMES.STYLE, [o.TAG_PROPERTIES.CSS_TEXT], e),
              title: f(e),
              titleAttributes: p(o.ATTRIBUTE_NAMES.TITLE, e)
            };
          }),
          (t.requestAnimationFrame = b),
          (t.warn = T);
      }.call(this, n("yLpj")));
    },
    viRO: function(e, t, n) {
      "use strict";
      n("2Spj"),
        n("a1Th"),
        n("h7Nl"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("RW0V"),
        n("LK8F"),
        n("pIFo"),
        n("rE2o"),
        n("ioFf");
      var r = n("MgzW"),
        a = "function" == typeof Symbol && Symbol.for,
        i = a ? Symbol.for("react.element") : 60103,
        l = a ? Symbol.for("react.portal") : 60106,
        o = a ? Symbol.for("react.fragment") : 60107,
        u = a ? Symbol.for("react.strict_mode") : 60108,
        c = a ? Symbol.for("react.profiler") : 60114,
        s = a ? Symbol.for("react.provider") : 60109,
        f = a ? Symbol.for("react.context") : 60110,
        d = a ? Symbol.for("react.forward_ref") : 60112,
        p = a ? Symbol.for("react.suspense") : 60113;
      a && Symbol.for("react.suspense_list");
      var m = a ? Symbol.for("react.memo") : 60115,
        h = a ? Symbol.for("react.lazy") : 60116;
      a && Symbol.for("react.fundamental"),
        a && Symbol.for("react.responder"),
        a && Symbol.for("react.scope");
      var g = "function" == typeof Symbol && Symbol.iterator;
      function y(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var v = {
          isMounted: function() {
            return !1;
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        b = {};
      function E(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || v);
      }
      function T() {}
      function w(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || v);
      }
      (E.prototype.isReactComponent = {}),
        (E.prototype.setState = function(e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(y(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (E.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (T.prototype = E.prototype);
      var S = (w.prototype = new T());
      (S.constructor = w), r(S, E.prototype), (S.isPureReactComponent = !0);
      var k = { current: null },
        x = { current: null },
        A = Object.prototype.hasOwnProperty,
        C = { key: !0, ref: !0, __self: !0, __source: !0 };
      function P(e, t, n) {
        var r,
          a = {},
          l = null,
          o = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (o = t.ref),
          void 0 !== t.key && (l = "" + t.key),
          t))
            A.call(t, r) && !C.hasOwnProperty(r) && (a[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) a.children = n;
        else if (1 < u) {
          for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
          a.children = c;
        }
        if (e && e.defaultProps)
          for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: o,
          props: a,
          _owner: x.current
        };
      }
      function _(e) {
        return "object" == typeof e && null !== e && e.$$typeof === i;
      }
      var N = /\/+/g,
        O = [];
      function R(e, t, n, r) {
        if (O.length) {
          var a = O.pop();
          return (
            (a.result = e),
            (a.keyPrefix = t),
            (a.func = n),
            (a.context = r),
            (a.count = 0),
            a
          );
        }
        return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
      }
      function I(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > O.length && O.push(e);
      }
      function M(e, t, n) {
        return null == e
          ? 0
          : (function e(t, n, r, a) {
              var o = typeof t;
              ("undefined" !== o && "boolean" !== o) || (t = null);
              var u = !1;
              if (null === t) u = !0;
              else
                switch (o) {
                  case "string":
                  case "number":
                    u = !0;
                    break;
                  case "object":
                    switch (t.$$typeof) {
                      case i:
                      case l:
                        u = !0;
                    }
                }
              if (u) return r(a, t, "" === n ? "." + L(t, 0) : n), 1;
              if (((u = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                for (var c = 0; c < t.length; c++) {
                  var s = n + L((o = t[c]), c);
                  u += e(o, s, r, a);
                }
              else if (
                (null === t || "object" != typeof t
                  ? (s = null)
                  : (s =
                      "function" == typeof (s = (g && t[g]) || t["@@iterator"])
                        ? s
                        : null),
                "function" == typeof s)
              )
                for (t = s.call(t), c = 0; !(o = t.next()).done; )
                  u += e((o = o.value), (s = n + L(o, c++)), r, a);
              else if ("object" === o)
                throw ((r = "" + t),
                Error(
                  y(
                    31,
                    "[object Object]" === r
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : r,
                    ""
                  )
                ));
              return u;
            })(e, "", t, n);
      }
      function L(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function(e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                ("" + e).replace(/[=:]/g, function(e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }
      function U(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function z(e, t, n) {
        var r = e.result,
          a = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? F(e, r, n, function(e) {
                return e;
              })
            : null != e &&
              (_(e) &&
                (e = (function(e, t) {
                  return {
                    $$typeof: i,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                  };
                })(
                  e,
                  a +
                    (!e.key || (t && t.key === e.key)
                      ? ""
                      : ("" + e.key).replace(N, "$&/") + "/") +
                    n
                )),
              r.push(e));
      }
      function F(e, t, n, r, a) {
        var i = "";
        null != n && (i = ("" + n).replace(N, "$&/") + "/"),
          M(e, z, (t = R(t, i, r, a))),
          I(t);
      }
      function j() {
        var e = k.current;
        if (null === e) throw Error(y(321));
        return e;
      }
      var D = {
          Children: {
            map: function(e, t, n) {
              if (null == e) return e;
              var r = [];
              return F(e, r, null, t, n), r;
            },
            forEach: function(e, t, n) {
              if (null == e) return e;
              M(e, U, (t = R(null, null, t, n))), I(t);
            },
            count: function(e) {
              return M(
                e,
                function() {
                  return null;
                },
                null
              );
            },
            toArray: function(e) {
              var t = [];
              return (
                F(e, t, null, function(e) {
                  return e;
                }),
                t
              );
            },
            only: function(e) {
              if (!_(e)) throw Error(y(143));
              return e;
            }
          },
          createRef: function() {
            return { current: null };
          },
          Component: E,
          PureComponent: w,
          createContext: function(e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          },
          forwardRef: function(e) {
            return { $$typeof: d, render: e };
          },
          lazy: function(e) {
            return { $$typeof: h, _ctor: e, _status: -1, _result: null };
          },
          memo: function(e, t) {
            return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
          },
          useCallback: function(e, t) {
            return j().useCallback(e, t);
          },
          useContext: function(e, t) {
            return j().useContext(e, t);
          },
          useEffect: function(e, t) {
            return j().useEffect(e, t);
          },
          useImperativeHandle: function(e, t, n) {
            return j().useImperativeHandle(e, t, n);
          },
          useDebugValue: function() {},
          useLayoutEffect: function(e, t) {
            return j().useLayoutEffect(e, t);
          },
          useMemo: function(e, t) {
            return j().useMemo(e, t);
          },
          useReducer: function(e, t, n) {
            return j().useReducer(e, t, n);
          },
          useRef: function(e) {
            return j().useRef(e);
          },
          useState: function(e) {
            return j().useState(e);
          },
          Fragment: o,
          Profiler: c,
          StrictMode: u,
          Suspense: p,
          createElement: P,
          cloneElement: function(e, t, n) {
            if (null == e) throw Error(y(267, e));
            var a = r({}, e.props),
              l = e.key,
              o = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (u = x.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (s in t)
                A.call(t, s) &&
                  !C.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = n;
            else if (1 < s) {
              c = Array(s);
              for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
              a.children = c;
            }
            return {
              $$typeof: i,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: u
            };
          },
          createFactory: function(e) {
            var t = P.bind(null, e);
            return (t.type = e), t;
          },
          isValidElement: _,
          version: "16.12.0",
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: k,
            ReactCurrentBatchConfig: { suspense: null },
            ReactCurrentOwner: x,
            IsSomeRendererActing: { current: !1 },
            assign: r
          }
        },
        H = { default: D },
        V = (H && D) || H;
      e.exports = V.default || V;
    },
    vrFN: function(e, t, n) {
      "use strict";
      var r = n("EH9Q"),
        a = n("q1tI"),
        i = n.n(a),
        l = n("TJpk"),
        o = n.n(l);
      function u(e) {
        var t = e.description,
          n = e.lang,
          a = e.meta,
          l = e.title,
          u = r.data.site,
          c = t || u.siteMetadata.description;
        return i.a.createElement(o.a, {
          htmlAttributes: { lang: n },
          title: l,
          titleTemplate: "%s | " + u.siteMetadata.title,
          meta: [
            { name: "description", content: c },
            { property: "og:title", content: l },
            { property: "og:description", content: c },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: u.siteMetadata.author },
            { name: "twitter:title", content: l },
            { name: "twitter:description", content: c }
          ].concat(a)
        });
      }
      (u.defaultProps = { lang: "en", meta: [], description: "" }), (t.a = u);
    },
    xfY5: function(e, t, n) {
      "use strict";
      var r = n("dyZX"),
        a = n("aagx"),
        i = n("LZWt"),
        l = n("Xbzi"),
        o = n("apmT"),
        u = n("eeVq"),
        c = n("kJMx").f,
        s = n("EemH").f,
        f = n("hswa").f,
        d = n("qncB").trim,
        p = r.Number,
        m = p,
        h = p.prototype,
        g = "Number" == i(n("Kuth")(h)),
        y = "trim" in String.prototype,
        v = function(e) {
          var t = o(e, !1);
          if ("string" == typeof t && t.length > 2) {
            var n,
              r,
              a,
              i = (t = y ? t.trim() : d(t, 3)).charCodeAt(0);
            if (43 === i || 45 === i) {
              if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === i) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (a = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (a = 55);
                  break;
                default:
                  return +t;
              }
              for (var l, u = t.slice(2), c = 0, s = u.length; c < s; c++)
                if ((l = u.charCodeAt(c)) < 48 || l > a) return NaN;
              return parseInt(u, r);
            }
          }
          return +t;
        };
      if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(e) {
          var t = arguments.length < 1 ? 0 : e,
            n = this;
          return n instanceof p &&
            (g
              ? u(function() {
                  h.valueOf.call(n);
                })
              : "Number" != i(n))
            ? l(new m(v(t)), n, p)
            : v(t);
        };
        for (
          var b,
            E = n("nh4g")
              ? c(m)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            T = 0;
          E.length > T;
          T++
        )
          a(m, (b = E[T])) && !a(p, b) && f(p, b, s(m, b));
        (p.prototype = h), (h.constructor = p), n("KroJ")(r, "Number", p);
      }
    },
    yLpj: function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    yl30: function(e, t, n) {
      "use strict";
      n("wCsR"),
        n("25dN"),
        n("Tze0"),
        n("RW0V"),
        n("T39b"),
        n("EK0E"),
        n("2Spj"),
        n("eM6i"),
        n("a1Th"),
        n("h7Nl"),
        n("HAE/"),
        n("KKXr"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("XfO3"),
        n("9AAn"),
        n("pIFo"),
        n("f3/d"),
        n("rE2o"),
        n("ioFf"),
        n("8+KV"),
        n("LK8F"),
        n("V+eJ");
      var r = n("q1tI"),
        a = n("MgzW"),
        i = n("QCnb");
      function l(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(l(227));
      var o = null,
        u = {};
      function c() {
        if (o)
          for (var e in u) {
            var t = u[e],
              n = o.indexOf(e);
            if (!(-1 < n)) throw Error(l(96, e));
            if (!f[n]) {
              if (!t.extractEvents) throw Error(l(97, e));
              for (var r in ((f[n] = t), (n = t.eventTypes))) {
                var a = void 0,
                  i = n[r],
                  c = t,
                  p = r;
                if (d.hasOwnProperty(p)) throw Error(l(99, p));
                d[p] = i;
                var m = i.phasedRegistrationNames;
                if (m) {
                  for (a in m) m.hasOwnProperty(a) && s(m[a], c, p);
                  a = !0;
                } else
                  i.registrationName
                    ? (s(i.registrationName, c, p), (a = !0))
                    : (a = !1);
                if (!a) throw Error(l(98, r, e));
              }
            }
          }
      }
      function s(e, t, n) {
        if (p[e]) throw Error(l(100, e));
        (p[e] = t), (m[e] = t.eventTypes[n].dependencies);
      }
      var f = [],
        d = {},
        p = {},
        m = {};
      function h(e, t, n, r, a, i, l, o, u) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, c);
        } catch (s) {
          this.onError(s);
        }
      }
      var g = !1,
        y = null,
        v = !1,
        b = null,
        E = {
          onError: function(e) {
            (g = !0), (y = e);
          }
        };
      function T(e, t, n, r, a, i, l, o, u) {
        (g = !1), (y = null), h.apply(E, arguments);
      }
      var w = null,
        S = null,
        k = null;
      function x(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = k(n)),
          (function(e, t, n, r, a, i, o, u, c) {
            if ((T.apply(this, arguments), g)) {
              if (!g) throw Error(l(198));
              var s = y;
              (g = !1), (y = null), v || ((v = !0), (b = s));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function A(e, t) {
        if (null == t) throw Error(l(30));
        return null == e
          ? t
          : Array.isArray(e)
          ? Array.isArray(t)
            ? (e.push.apply(e, t), e)
            : (e.push(t), e)
          : Array.isArray(t)
          ? [e].concat(t)
          : [e, t];
      }
      function C(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
      }
      var P = null;
      function _(e) {
        if (e) {
          var t = e._dispatchListeners,
            n = e._dispatchInstances;
          if (Array.isArray(t))
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
              x(e, t[r], n[r]);
          else t && x(e, t, n);
          (e._dispatchListeners = null),
            (e._dispatchInstances = null),
            e.isPersistent() || e.constructor.release(e);
        }
      }
      function N(e) {
        if ((null !== e && (P = A(P, e)), (e = P), (P = null), e)) {
          if ((C(e, _), P)) throw Error(l(95));
          if (v) throw ((e = b), (v = !1), (b = null), e);
        }
      }
      var O = {
        injectEventPluginOrder: function(e) {
          if (o) throw Error(l(101));
          (o = Array.prototype.slice.call(e)), c();
        },
        injectEventPluginsByName: function(e) {
          var t,
            n = !1;
          for (t in e)
            if (e.hasOwnProperty(t)) {
              var r = e[t];
              if (!u.hasOwnProperty(t) || u[t] !== r) {
                if (u[t]) throw Error(l(102, t));
                (u[t] = r), (n = !0);
              }
            }
          n && c();
        }
      };
      function R(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = w(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
        return n;
      }
      var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      I.hasOwnProperty("ReactCurrentDispatcher") ||
        (I.ReactCurrentDispatcher = { current: null }),
        I.hasOwnProperty("ReactCurrentBatchConfig") ||
          (I.ReactCurrentBatchConfig = { suspense: null });
      var M = /^(.*)[\\\/]/,
        L = "function" == typeof Symbol && Symbol.for,
        U = L ? Symbol.for("react.element") : 60103,
        z = L ? Symbol.for("react.portal") : 60106,
        F = L ? Symbol.for("react.fragment") : 60107,
        j = L ? Symbol.for("react.strict_mode") : 60108,
        D = L ? Symbol.for("react.profiler") : 60114,
        H = L ? Symbol.for("react.provider") : 60109,
        V = L ? Symbol.for("react.context") : 60110,
        B = L ? Symbol.for("react.concurrent_mode") : 60111,
        G = L ? Symbol.for("react.forward_ref") : 60112,
        W = L ? Symbol.for("react.suspense") : 60113,
        q = L ? Symbol.for("react.suspense_list") : 60120,
        K = L ? Symbol.for("react.memo") : 60115,
        Y = L ? Symbol.for("react.lazy") : 60116;
      L && Symbol.for("react.fundamental"),
        L && Symbol.for("react.responder"),
        L && Symbol.for("react.scope");
      var Q = "function" == typeof Symbol && Symbol.iterator;
      function X(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (Q && e[Q]) || e["@@iterator"])
          ? e
          : null;
      }
      function J(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case F:
            return "Fragment";
          case z:
            return "Portal";
          case D:
            return "Profiler";
          case j:
            return "StrictMode";
          case W:
            return "Suspense";
          case q:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case V:
              return "Context.Consumer";
            case H:
              return "Context.Provider";
            case G:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case K:
              return J(e.type);
            case Y:
              if ((e = 1 === e._status ? e._result : null)) return J(e);
          }
        return null;
      }
      function $(e) {
        var t = "";
        do {
          e: switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var n = "";
              break e;
            default:
              var r = e._debugOwner,
                a = e._debugSource,
                i = J(e.type);
              (n = null),
                r && (n = J(r.type)),
                (r = i),
                (i = ""),
                a
                  ? (i =
                      " (at " +
                      a.fileName.replace(M, "") +
                      ":" +
                      a.lineNumber +
                      ")")
                  : n && (i = " (created by " + n + ")"),
                (n = "\n    in " + (r || "Unknown") + i);
          }
          (t += n), (e = e.return);
        } while (e);
        return t;
      }
      var Z = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        ee = null,
        te = null,
        ne = null;
      function re(e) {
        if ((e = S(e))) {
          if ("function" != typeof ee) throw Error(l(280));
          var t = w(e.stateNode);
          ee(e.stateNode, e.type, t);
        }
      }
      function ae(e) {
        te ? (ne ? ne.push(e) : (ne = [e])) : (te = e);
      }
      function ie() {
        if (te) {
          var e = te,
            t = ne;
          if (((ne = te = null), re(e), t))
            for (e = 0; e < t.length; e++) re(t[e]);
        }
      }
      function le(e, t) {
        return e(t);
      }
      function oe(e, t, n, r) {
        return e(t, n, r);
      }
      function ue() {}
      var ce = le,
        se = !1,
        fe = !1;
      function de() {
        (null === te && null === ne) || (ue(), ie());
      }
      new Map();
      var pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        me = Object.prototype.hasOwnProperty,
        he = {},
        ge = {};
      function ye(e, t, n, r, a, i) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = i);
      }
      var ve = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function(e) {
          ve[e] = new ye(e, 0, !1, e, null, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"]
        ].forEach(function(e) {
          var t = e[0];
          ve[t] = new ye(t, 1, !1, e[1], null, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function(e) {
            ve[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha"
        ].forEach(function(e) {
          ve[e] = new ye(e, 2, !1, e, null, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function(e) {
            ve[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function(e) {
          ve[e] = new ye(e, 3, !0, e, null, !1);
        }),
        ["capture", "download"].forEach(function(e) {
          ve[e] = new ye(e, 4, !1, e, null, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function(e) {
          ve[e] = new ye(e, 6, !1, e, null, !1);
        }),
        ["rowSpan", "start"].forEach(function(e) {
          ve[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1);
        });
      var be = /[\-:]([a-z])/g;
      function Ee(e) {
        return e[1].toUpperCase();
      }
      function Te(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function we(e, t, n, r) {
        var a = ve.hasOwnProperty(t) ? ve[t] : null;
        (null !== a
          ? 0 === a.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function(e, t, n, r) {
            if (
              null == t ||
              (function(e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, a, r) && (n = null),
          r || null === a
            ? (function(e) {
                return (
                  !!me.call(ge, e) ||
                  (!me.call(he, e) &&
                    (pe.test(e) ? (ge[e] = !0) : ((he[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      function Se(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function ke(e) {
        e._valueTracker ||
          (e._valueTracker = (function(e) {
            var t = Se(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              "function" == typeof n.get &&
              "function" == typeof n.set
            ) {
              var a = n.get,
                i = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function() {
                    return a.call(this);
                  },
                  set: function(e) {
                    (r = "" + e), i.call(this, e);
                  }
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function() {
                    return r;
                  },
                  setValue: function(e) {
                    r = "" + e;
                  },
                  stopTracking: function() {
                    (e._valueTracker = null), delete e[t];
                  }
                }
              );
            }
          })(e));
      }
      function xe(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = Se(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function Ae(e, t) {
        var n = t.checked;
        return a({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked
        });
      }
      function Ce(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = Te(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value
          });
      }
      function Pe(e, t) {
        null != (t = t.checked) && we(e, "checked", t, !1);
      }
      function _e(e, t) {
        Pe(e, t);
        var n = Te(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? Oe(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            Oe(e, t.type, Te(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function Ne(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !e.defaultChecked),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function Oe(e, t, n) {
        ("number" === t && e.ownerDocument.activeElement === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function Re(e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function(e) {
            var t = "";
            return (
              r.Children.forEach(e, function(e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function Ie(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + Te(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function Me(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
        return a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        });
      }
      function Le(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.defaultValue), null != (t = t.children))) {
            if (null != n) throw Error(l(92));
            if (Array.isArray(t)) {
              if (!(1 >= t.length)) throw Error(l(93));
              t = t[0];
            }
            n = t;
          }
          null == n && (n = "");
        }
        e._wrapperState = { initialValue: Te(n) };
      }
      function Ue(e, t) {
        var n = Te(t.value),
          r = Te(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ze(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function(e) {
          var t = e.replace(be, Ee);
          ve[t] = new ye(t, 1, !1, e, null, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function(e) {
            var t = e.replace(be, Ee);
            ve[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
          var t = e.replace(be, Ee);
          ve[t] = new ye(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function(e) {
          ve[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1);
        }),
        (ve.xlinkHref = new ye(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0
        )),
        ["src", "href", "action", "formAction"].forEach(function(e) {
          ve[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0);
        });
      var Fe = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
      };
      function je(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function De(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? je(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var He,
        Ve = (function(e) {
          return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function(t, n, r, a) {
                MSApp.execUnsafeLocalFunction(function() {
                  return e(t, n);
                });
              }
            : e;
        })(function(e, t) {
          if (e.namespaceURI !== Fe.svg || "innerHTML" in e) e.innerHTML = t;
          else {
            for (
              (He = He || document.createElement("div")).innerHTML =
                "<svg>" + t.valueOf().toString() + "</svg>",
                t = He.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        });
      function Be(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      function Ge(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var We = {
          animationend: Ge("Animation", "AnimationEnd"),
          animationiteration: Ge("Animation", "AnimationIteration"),
          animationstart: Ge("Animation", "AnimationStart"),
          transitionend: Ge("Transition", "TransitionEnd")
        },
        qe = {},
        Ke = {};
      function Ye(e) {
        if (qe[e]) return qe[e];
        if (!We[e]) return e;
        var t,
          n = We[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Ke) return (qe[e] = n[t]);
        return e;
      }
      Z &&
        ((Ke = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete We.animationend.animation,
          delete We.animationiteration.animation,
          delete We.animationstart.animation),
        "TransitionEvent" in window || delete We.transitionend.transition);
      var Qe = Ye("animationend"),
        Xe = Ye("animationiteration"),
        Je = Ye("animationstart"),
        $e = Ye("transitionend"),
        Ze = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        );
      function et(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function tt(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function nt(e) {
        if (et(e) !== e) throw Error(l(188));
      }
      function rt(e) {
        if (
          !(e = (function(e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = et(e))) throw Error(l(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var i = a.alternate;
              if (null === i) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === i.child) {
                for (i = a.child; i; ) {
                  if (i === n) return nt(a), e;
                  if (i === r) return nt(a), t;
                  i = i.sibling;
                }
                throw Error(l(188));
              }
              if (n.return !== r.return) (n = a), (r = i);
              else {
                for (var o = !1, u = a.child; u; ) {
                  if (u === n) {
                    (o = !0), (n = a), (r = i);
                    break;
                  }
                  if (u === r) {
                    (o = !0), (r = a), (n = i);
                    break;
                  }
                  u = u.sibling;
                }
                if (!o) {
                  for (u = i.child; u; ) {
                    if (u === n) {
                      (o = !0), (n = i), (r = a);
                      break;
                    }
                    if (u === r) {
                      (o = !0), (r = i), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!o) throw Error(l(189));
                }
              }
              if (n.alternate !== r) throw Error(l(190));
            }
            if (3 !== n.tag) throw Error(l(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      var at,
        it,
        lt,
        ot = !1,
        ut = [],
        ct = null,
        st = null,
        ft = null,
        dt = new Map(),
        pt = new Map(),
        mt = [],
        ht = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
          " "
        ),
        gt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
          " "
        );
      function yt(e, t, n, r) {
        return {
          blockedOn: e,
          topLevelType: t,
          eventSystemFlags: 32 | n,
          nativeEvent: r
        };
      }
      function vt(e, t) {
        switch (e) {
          case "focus":
          case "blur":
            ct = null;
            break;
          case "dragenter":
          case "dragleave":
            st = null;
            break;
          case "mouseover":
          case "mouseout":
            ft = null;
            break;
          case "pointerover":
          case "pointerout":
            dt.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            pt.delete(t.pointerId);
        }
      }
      function bt(e, t, n, r, a) {
        return null === e || e.nativeEvent !== a
          ? ((e = yt(t, n, r, a)),
            null !== t && null !== (t = pr(t)) && it(t),
            e)
          : ((e.eventSystemFlags |= r), e);
      }
      function Et(e) {
        var t = dr(e.target);
        if (null !== t) {
          var n = et(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = tt(n)))
                return (
                  (e.blockedOn = t),
                  void i.unstable_runWithPriority(e.priority, function() {
                    lt(n);
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function Tt(e) {
        if (null !== e.blockedOn) return !1;
        var t = On(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        if (null !== t) {
          var n = pr(t);
          return null !== n && it(n), (e.blockedOn = t), !1;
        }
        return !0;
      }
      function wt(e, t, n) {
        Tt(e) && n.delete(t);
      }
      function St() {
        for (ot = !1; 0 < ut.length; ) {
          var e = ut[0];
          if (null !== e.blockedOn) {
            null !== (e = pr(e.blockedOn)) && at(e);
            break;
          }
          var t = On(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
          null !== t ? (e.blockedOn = t) : ut.shift();
        }
        null !== ct && Tt(ct) && (ct = null),
          null !== st && Tt(st) && (st = null),
          null !== ft && Tt(ft) && (ft = null),
          dt.forEach(wt),
          pt.forEach(wt);
      }
      function kt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          ot ||
            ((ot = !0),
            i.unstable_scheduleCallback(i.unstable_NormalPriority, St)));
      }
      function xt(e) {
        function t(t) {
          return kt(t, e);
        }
        if (0 < ut.length) {
          kt(ut[0], e);
          for (var n = 1; n < ut.length; n++) {
            var r = ut[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== ct && kt(ct, e),
            null !== st && kt(st, e),
            null !== ft && kt(ft, e),
            dt.forEach(t),
            pt.forEach(t),
            n = 0;
          n < mt.length;
          n++
        )
          (r = mt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < mt.length && null === (n = mt[0]).blockedOn; )
          Et(n), null === n.blockedOn && mt.shift();
      }
      function At(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      function Ct(e) {
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Pt(e, t, n) {
        (t = R(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
          ((n._dispatchListeners = A(n._dispatchListeners, t)),
          (n._dispatchInstances = A(n._dispatchInstances, e)));
      }
      function _t(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
          for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Ct(t));
          for (t = n.length; 0 < t--; ) Pt(n[t], "captured", e);
          for (t = 0; t < n.length; t++) Pt(n[t], "bubbled", e);
        }
      }
      function Nt(e, t, n) {
        e &&
          n &&
          n.dispatchConfig.registrationName &&
          (t = R(e, n.dispatchConfig.registrationName)) &&
          ((n._dispatchListeners = A(n._dispatchListeners, t)),
          (n._dispatchInstances = A(n._dispatchInstances, e)));
      }
      function Ot(e) {
        e && e.dispatchConfig.registrationName && Nt(e._targetInst, null, e);
      }
      function Rt(e) {
        C(e, _t);
      }
      function It() {
        return !0;
      }
      function Mt() {
        return !1;
      }
      function Lt(e, t, n, r) {
        for (var a in ((this.dispatchConfig = e),
        (this._targetInst = t),
        (this.nativeEvent = n),
        (e = this.constructor.Interface)))
          e.hasOwnProperty(a) &&
            ((t = e[a])
              ? (this[a] = t(n))
              : "target" === a
              ? (this.target = r)
              : (this[a] = n[a]));
        return (
          (this.isDefaultPrevented = (null != n.defaultPrevented
          ? n.defaultPrevented
          : !1 === n.returnValue)
            ? It
            : Mt),
          (this.isPropagationStopped = Mt),
          this
        );
      }
      function Ut(e, t, n, r) {
        if (this.eventPool.length) {
          var a = this.eventPool.pop();
          return this.call(a, e, t, n, r), a;
        }
        return new this(e, t, n, r);
      }
      function zt(e) {
        if (!(e instanceof this)) throw Error(l(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
      }
      function Ft(e) {
        (e.eventPool = []), (e.getPooled = Ut), (e.release = zt);
      }
      a(Lt.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = It));
        },
        stopPropagation: function() {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = It));
        },
        persist: function() {
          this.isPersistent = It;
        },
        isPersistent: Mt,
        destructor: function() {
          var e,
            t = this.constructor.Interface;
          for (e in t) this[e] = null;
          (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
            (this.isPropagationStopped = this.isDefaultPrevented = Mt),
            (this._dispatchInstances = this._dispatchListeners = null);
        }
      }),
        (Lt.Interface = {
          type: null,
          target: null,
          currentTarget: function() {
            return null;
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function(e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null
        }),
        (Lt.extend = function(e) {
          function t() {}
          function n() {
            return r.apply(this, arguments);
          }
          var r = this;
          t.prototype = r.prototype;
          var i = new t();
          return (
            a(i, n.prototype),
            (n.prototype = i),
            (n.prototype.constructor = n),
            (n.Interface = a({}, r.Interface, e)),
            (n.extend = r.extend),
            Ft(n),
            n
          );
        }),
        Ft(Lt);
      var jt = Lt.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null
        }),
        Dt = Lt.extend({
          clipboardData: function(e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          }
        }),
        Ht = Lt.extend({ view: null, detail: null }),
        Vt = Ht.extend({ relatedTarget: null });
      function Bt(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      var Gt = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        },
        Wt = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta"
        },
        qt = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };
      function Kt(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = qt[e]) && !!t[e];
      }
      function Yt() {
        return Kt;
      }
      for (
        var Qt = Ht.extend({
            key: function(e) {
              if (e.key) {
                var t = Gt[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = Bt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Wt[e.keyCode] || "Unidentified"
                : "";
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Yt,
            charCode: function(e) {
              return "keypress" === e.type ? Bt(e) : 0;
            },
            keyCode: function(e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function(e) {
              return "keypress" === e.type
                ? Bt(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            }
          }),
          Xt = 0,
          Jt = 0,
          $t = !1,
          Zt = !1,
          en = Ht.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Yt,
            button: null,
            buttons: null,
            relatedTarget: function(e) {
              return (
                e.relatedTarget ||
                (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
              );
            },
            movementX: function(e) {
              if (("movementX" in e)) return e.movementX;
              var t = Xt;
              return (
                (Xt = e.screenX),
                $t
                  ? "mousemove" === e.type
                    ? e.screenX - t
                    : 0
                  : (($t = !0), 0)
              );
            },
            movementY: function(e) {
              if (("movementY" in e)) return e.movementY;
              var t = Jt;
              return (
                (Jt = e.screenY),
                Zt
                  ? "mousemove" === e.type
                    ? e.screenY - t
                    : 0
                  : ((Zt = !0), 0)
              );
            }
          }),
          tn = en.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
          }),
          nn = en.extend({ dataTransfer: null }),
          rn = Ht.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Yt
          }),
          an = Lt.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
          }),
          ln = en.extend({
            deltaX: function(e) {
              return ("deltaX" in e)
                ? e.deltaX
                : ("wheelDeltaX" in e)
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function(e) {
              return ("deltaY" in e)
                ? e.deltaY
                : ("wheelDeltaY" in e)
                ? -e.wheelDeltaY
                : ("wheelDelta" in e)
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: null,
            deltaMode: null
          }),
          on = [
            ["blur", "blur", 0],
            ["cancel", "cancel", 0],
            ["click", "click", 0],
            ["close", "close", 0],
            ["contextmenu", "contextMenu", 0],
            ["copy", "copy", 0],
            ["cut", "cut", 0],
            ["auxclick", "auxClick", 0],
            ["dblclick", "doubleClick", 0],
            ["dragend", "dragEnd", 0],
            ["dragstart", "dragStart", 0],
            ["drop", "drop", 0],
            ["focus", "focus", 0],
            ["input", "input", 0],
            ["invalid", "invalid", 0],
            ["keydown", "keyDown", 0],
            ["keypress", "keyPress", 0],
            ["keyup", "keyUp", 0],
            ["mousedown", "mouseDown", 0],
            ["mouseup", "mouseUp", 0],
            ["paste", "paste", 0],
            ["pause", "pause", 0],
            ["play", "play", 0],
            ["pointercancel", "pointerCancel", 0],
            ["pointerdown", "pointerDown", 0],
            ["pointerup", "pointerUp", 0],
            ["ratechange", "rateChange", 0],
            ["reset", "reset", 0],
            ["seeked", "seeked", 0],
            ["submit", "submit", 0],
            ["touchcancel", "touchCancel", 0],
            ["touchend", "touchEnd", 0],
            ["touchstart", "touchStart", 0],
            ["volumechange", "volumeChange", 0],
            ["drag", "drag", 1],
            ["dragenter", "dragEnter", 1],
            ["dragexit", "dragExit", 1],
            ["dragleave", "dragLeave", 1],
            ["dragover", "dragOver", 1],
            ["mousemove", "mouseMove", 1],
            ["mouseout", "mouseOut", 1],
            ["mouseover", "mouseOver", 1],
            ["pointermove", "pointerMove", 1],
            ["pointerout", "pointerOut", 1],
            ["pointerover", "pointerOver", 1],
            ["scroll", "scroll", 1],
            ["toggle", "toggle", 1],
            ["touchmove", "touchMove", 1],
            ["wheel", "wheel", 1],
            ["abort", "abort", 2],
            [Qe, "animationEnd", 2],
            [Xe, "animationIteration", 2],
            [Je, "animationStart", 2],
            ["canplay", "canPlay", 2],
            ["canplaythrough", "canPlayThrough", 2],
            ["durationchange", "durationChange", 2],
            ["emptied", "emptied", 2],
            ["encrypted", "encrypted", 2],
            ["ended", "ended", 2],
            ["error", "error", 2],
            ["gotpointercapture", "gotPointerCapture", 2],
            ["load", "load", 2],
            ["loadeddata", "loadedData", 2],
            ["loadedmetadata", "loadedMetadata", 2],
            ["loadstart", "loadStart", 2],
            ["lostpointercapture", "lostPointerCapture", 2],
            ["playing", "playing", 2],
            ["progress", "progress", 2],
            ["seeking", "seeking", 2],
            ["stalled", "stalled", 2],
            ["suspend", "suspend", 2],
            ["timeupdate", "timeUpdate", 2],
            [$e, "transitionEnd", 2],
            ["waiting", "waiting", 2]
          ],
          un = {},
          cn = {},
          sn = 0;
        sn < on.length;
        sn++
      ) {
        var fn = on[sn],
          dn = fn[0],
          pn = fn[1],
          mn = fn[2],
          hn = "on" + (pn[0].toUpperCase() + pn.slice(1)),
          gn = {
            phasedRegistrationNames: { bubbled: hn, captured: hn + "Capture" },
            dependencies: [dn],
            eventPriority: mn
          };
        (un[pn] = gn), (cn[dn] = gn);
      }
      var yn = {
          eventTypes: un,
          getEventPriority: function(e) {
            return void 0 !== (e = cn[e]) ? e.eventPriority : 2;
          },
          extractEvents: function(e, t, n, r) {
            var a = cn[e];
            if (!a) return null;
            switch (e) {
              case "keypress":
                if (0 === Bt(n)) return null;
              case "keydown":
              case "keyup":
                e = Qt;
                break;
              case "blur":
              case "focus":
                e = Vt;
                break;
              case "click":
                if (2 === n.button) return null;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                e = en;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                e = nn;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                e = rn;
                break;
              case Qe:
              case Xe:
              case Je:
                e = jt;
                break;
              case $e:
                e = an;
                break;
              case "scroll":
                e = Ht;
                break;
              case "wheel":
                e = ln;
                break;
              case "copy":
              case "cut":
              case "paste":
                e = Dt;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                e = tn;
                break;
              default:
                e = Lt;
            }
            return Rt((t = e.getPooled(a, t, n, r))), t;
          }
        },
        vn = i.unstable_UserBlockingPriority,
        bn = i.unstable_runWithPriority,
        En = yn.getEventPriority,
        Tn = 10,
        wn = [];
      function Sn(e) {
        var t = e.targetInst,
          n = t;
        do {
          if (!n) {
            e.ancestors.push(n);
            break;
          }
          var r = n;
          if (3 === r.tag) r = r.stateNode.containerInfo;
          else {
            for (; r.return; ) r = r.return;
            r = 3 !== r.tag ? null : r.stateNode.containerInfo;
          }
          if (!r) break;
          (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = dr(r));
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
          t = e.ancestors[n];
          var a = At(e.nativeEvent);
          r = e.topLevelType;
          for (
            var i = e.nativeEvent, l = e.eventSystemFlags, o = null, u = 0;
            u < f.length;
            u++
          ) {
            var c = f[u];
            c && (c = c.extractEvents(r, t, i, a, l)) && (o = A(o, c));
          }
          N(o);
        }
      }
      var kn = !0;
      function xn(e, t) {
        An(t, e, !1);
      }
      function An(e, t, n) {
        switch (En(t)) {
          case 0:
            var r = Cn.bind(null, t, 1);
            break;
          case 1:
            r = Pn.bind(null, t, 1);
            break;
          default:
            r = Nn.bind(null, t, 1);
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
      }
      function Cn(e, t, n) {
        se || ue();
        var r = Nn,
          a = se;
        se = !0;
        try {
          oe(r, e, t, n);
        } finally {
          (se = a) || de();
        }
      }
      function Pn(e, t, n) {
        bn(vn, Nn.bind(null, e, t, n));
      }
      function _n(e, t, n, r) {
        if (wn.length) {
          var a = wn.pop();
          (a.topLevelType = e),
            (a.eventSystemFlags = t),
            (a.nativeEvent = n),
            (a.targetInst = r),
            (e = a);
        } else
          e = {
            topLevelType: e,
            eventSystemFlags: t,
            nativeEvent: n,
            targetInst: r,
            ancestors: []
          };
        try {
          if (((t = Sn), (n = e), fe)) t(n, void 0);
          else {
            fe = !0;
            try {
              ce(t, n, void 0);
            } finally {
              (fe = !1), de();
            }
          }
        } finally {
          (e.topLevelType = null),
            (e.nativeEvent = null),
            (e.targetInst = null),
            (e.ancestors.length = 0),
            wn.length < Tn && wn.push(e);
        }
      }
      function Nn(e, t, n) {
        if (kn)
          if (0 < ut.length && -1 < ht.indexOf(e))
            (e = yt(null, e, t, n)), ut.push(e);
          else {
            var r = On(e, t, n);
            null === r
              ? vt(e, n)
              : -1 < ht.indexOf(e)
              ? ((e = yt(r, e, t, n)), ut.push(e))
              : (function(e, t, n, r) {
                  switch (t) {
                    case "focus":
                      return (ct = bt(ct, e, t, n, r)), !0;
                    case "dragenter":
                      return (st = bt(st, e, t, n, r)), !0;
                    case "mouseover":
                      return (ft = bt(ft, e, t, n, r)), !0;
                    case "pointerover":
                      var a = r.pointerId;
                      return dt.set(a, bt(dt.get(a) || null, e, t, n, r)), !0;
                    case "gotpointercapture":
                      return (
                        (a = r.pointerId),
                        pt.set(a, bt(pt.get(a) || null, e, t, n, r)),
                        !0
                      );
                  }
                  return !1;
                })(r, e, t, n) || (vt(e, n), _n(e, t, n, null));
          }
      }
      function On(e, t, n) {
        var r = At(n);
        if (null !== (r = dr(r))) {
          var a = et(r);
          if (null === a) r = null;
          else {
            var i = a.tag;
            if (13 === i) {
              if (null !== (r = tt(a))) return r;
              r = null;
            } else if (3 === i) {
              if (a.stateNode.hydrate)
                return 3 === a.tag ? a.stateNode.containerInfo : null;
              r = null;
            } else a !== r && (r = null);
          }
        }
        return _n(e, t, n, r), null;
      }
      function Rn(e) {
        if (!Z) return !1;
        var t = (e = "on" + e) in document;
        return (
          t ||
            ((t = document.createElement("div")).setAttribute(e, "return;"),
            (t = "function" == typeof t[e])),
          t
        );
      }
      var In = new ("function" == typeof WeakMap ? WeakMap : Map)();
      function Mn(e) {
        var t = In.get(e);
        return void 0 === t && ((t = new Set()), In.set(e, t)), t;
      }
      function Ln(e, t, n) {
        if (!n.has(e)) {
          switch (e) {
            case "scroll":
              An(t, "scroll", !0);
              break;
            case "focus":
            case "blur":
              An(t, "focus", !0),
                An(t, "blur", !0),
                n.add("blur"),
                n.add("focus");
              break;
            case "cancel":
            case "close":
              Rn(e) && An(t, e, !0);
              break;
            case "invalid":
            case "submit":
            case "reset":
              break;
            default:
              -1 === Ze.indexOf(e) && xn(e, t);
          }
          n.add(e);
        }
      }
      var Un = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        zn = ["Webkit", "ms", "Moz", "O"];
      function Fn(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (Un.hasOwnProperty(e) && Un[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function jn(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = Fn(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(Un).forEach(function(e) {
        zn.forEach(function(t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Un[t] = Un[e]);
        });
      });
      var Dn = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0
        }
      );
      function Hn(e, t) {
        if (t) {
          if (
            Dn[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(l(137, e, ""));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(l(60));
            if (
              !(
                "object" == typeof t.dangerouslySetInnerHTML &&
                "__html" in t.dangerouslySetInnerHTML
              )
            )
              throw Error(l(61));
          }
          if (null != t.style && "object" != typeof t.style)
            throw Error(l(62, ""));
        }
      }
      function Vn(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function Bn(e, t) {
        var n = Mn(
          (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
        );
        t = m[t];
        for (var r = 0; r < t.length; r++) Ln(t[r], e, n);
      }
      function Gn() {}
      function Wn(e) {
        if (
          void 0 ===
          (e = e || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (pc) {
          return e.body;
        }
      }
      function qn(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function Kn(e, t) {
        var n,
          r = qn(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = qn(r);
        }
      }
      function Yn() {
        for (var e = window, t = Wn(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = Wn((e = t.contentWindow).document);
        }
        return t;
      }
      function Qn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var Xn = "$",
        Jn = "/$",
        $n = "$?",
        Zn = "$!",
        er = null,
        tr = null;
      function nr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function rr(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var ar = "function" == typeof setTimeout ? setTimeout : void 0,
        ir = "function" == typeof clearTimeout ? clearTimeout : void 0;
      function lr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function or(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if (n === Xn || n === Zn || n === $n) {
              if (0 === t) return e;
              t--;
            } else n === Jn && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var ur = Math.random()
          .toString(36)
          .slice(2),
        cr = "__reactInternalInstance$" + ur,
        sr = "__reactEventHandlers$" + ur,
        fr = "__reactContainere$" + ur;
      function dr(e) {
        var t = e[cr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[fr] || n[cr])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = or(e); null !== e; ) {
                if ((n = e[cr])) return n;
                e = or(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function pr(e) {
        return !(e = e[cr] || e[fr]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function mr(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(l(33));
      }
      function hr(e) {
        return e[sr] || null;
      }
      var gr = null,
        yr = null,
        vr = null;
      function br() {
        if (vr) return vr;
        var e,
          t,
          n = yr,
          r = n.length,
          a = "value" in gr ? gr.value : gr.textContent,
          i = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var l = r - e;
        for (t = 1; t <= l && n[r - t] === a[i - t]; t++);
        return (vr = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      var Er = Lt.extend({ data: null }),
        Tr = Lt.extend({ data: null }),
        wr = [9, 13, 27, 32],
        Sr = Z && "CompositionEvent" in window,
        kr = null;
      Z && "documentMode" in document && (kr = document.documentMode);
      var xr = Z && "TextEvent" in window && !kr,
        Ar = Z && (!Sr || (kr && 8 < kr && 11 >= kr)),
        Cr = String.fromCharCode(32),
        Pr = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: "onBeforeInput",
              captured: "onBeforeInputCapture"
            },
            dependencies: ["compositionend", "keypress", "textInput", "paste"]
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: "onCompositionEnd",
              captured: "onCompositionEndCapture"
            },
            dependencies: "blur compositionend keydown keypress keyup mousedown".split(
              " "
            )
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: "onCompositionStart",
              captured: "onCompositionStartCapture"
            },
            dependencies: "blur compositionstart keydown keypress keyup mousedown".split(
              " "
            )
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: "onCompositionUpdate",
              captured: "onCompositionUpdateCapture"
            },
            dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(
              " "
            )
          }
        },
        _r = !1;
      function Nr(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== wr.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "blur":
            return !0;
          default:
            return !1;
        }
      }
      function Or(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var Rr = !1;
      var Ir = {
          eventTypes: Pr,
          extractEvents: function(e, t, n, r) {
            var a;
            if (Sr)
              e: {
                switch (e) {
                  case "compositionstart":
                    var i = Pr.compositionStart;
                    break e;
                  case "compositionend":
                    i = Pr.compositionEnd;
                    break e;
                  case "compositionupdate":
                    i = Pr.compositionUpdate;
                    break e;
                }
                i = void 0;
              }
            else
              Rr
                ? Nr(e, n) && (i = Pr.compositionEnd)
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (i = Pr.compositionStart);
            return (
              i
                ? (Ar &&
                    "ko" !== n.locale &&
                    (Rr || i !== Pr.compositionStart
                      ? i === Pr.compositionEnd && Rr && (a = br())
                      : ((yr = "value" in (gr = r) ? gr.value : gr.textContent),
                        (Rr = !0))),
                  (i = Er.getPooled(i, t, n, r)),
                  a ? (i.data = a) : null !== (a = Or(n)) && (i.data = a),
                  Rt(i),
                  (a = i))
                : (a = null),
              (e = xr
                ? (function(e, t) {
                    switch (e) {
                      case "compositionend":
                        return Or(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((_r = !0), Cr);
                      case "textInput":
                        return (e = t.data) === Cr && _r ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function(e, t) {
                    if (Rr)
                      return "compositionend" === e || (!Sr && Nr(e, t))
                        ? ((e = br()), (vr = yr = gr = null), (Rr = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return Ar && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n))
                ? (((t = Tr.getPooled(Pr.beforeInput, t, n, r)).data = e),
                  Rt(t))
                : (t = null),
              null === a ? t : null === t ? a : [a, t]
            );
          }
        },
        Mr = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0
        };
      function Lr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Mr[e.type] : "textarea" === t;
      }
      var Ur = {
        change: {
          phasedRegistrationNames: {
            bubbled: "onChange",
            captured: "onChangeCapture"
          },
          dependencies: "blur change click focus input keydown keyup selectionchange".split(
            " "
          )
        }
      };
      function zr(e, t, n) {
        return (
          ((e = Lt.getPooled(Ur.change, e, t, n)).type = "change"),
          ae(n),
          Rt(e),
          e
        );
      }
      var Fr = null,
        jr = null;
      function Dr(e) {
        N(e);
      }
      function Hr(e) {
        if (xe(mr(e))) return e;
      }
      function Vr(e, t) {
        if ("change" === e) return t;
      }
      var Br = !1;
      function Gr() {
        Fr && (Fr.detachEvent("onpropertychange", Wr), (jr = Fr = null));
      }
      function Wr(e) {
        if ("value" === e.propertyName && Hr(jr))
          if (((e = zr(jr, e, At(e))), se)) N(e);
          else {
            se = !0;
            try {
              le(Dr, e);
            } finally {
              (se = !1), de();
            }
          }
      }
      function qr(e, t, n) {
        "focus" === e
          ? (Gr(), (jr = n), (Fr = t).attachEvent("onpropertychange", Wr))
          : "blur" === e && Gr();
      }
      function Kr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Hr(jr);
      }
      function Yr(e, t) {
        if ("click" === e) return Hr(t);
      }
      function Qr(e, t) {
        if ("input" === e || "change" === e) return Hr(t);
      }
      Z &&
        (Br =
          Rn("input") && (!document.documentMode || 9 < document.documentMode));
      var Xr,
        Jr = {
          eventTypes: Ur,
          _isInputEventSupported: Br,
          extractEvents: function(e, t, n, r) {
            var a = t ? mr(t) : window,
              i = a.nodeName && a.nodeName.toLowerCase();
            if ("select" === i || ("input" === i && "file" === a.type))
              var l = Vr;
            else if (Lr(a))
              if (Br) l = Qr;
              else {
                l = Kr;
                var o = qr;
              }
            else
              (i = a.nodeName) &&
                "input" === i.toLowerCase() &&
                ("checkbox" === a.type || "radio" === a.type) &&
                (l = Yr);
            if (l && (l = l(e, t))) return zr(l, n, r);
            o && o(e, a, t),
              "blur" === e &&
                (e = a._wrapperState) &&
                e.controlled &&
                "number" === a.type &&
                Oe(a, "number", a.value);
          }
        },
        $r = {
          mouseEnter: {
            registrationName: "onMouseEnter",
            dependencies: ["mouseout", "mouseover"]
          },
          mouseLeave: {
            registrationName: "onMouseLeave",
            dependencies: ["mouseout", "mouseover"]
          },
          pointerEnter: {
            registrationName: "onPointerEnter",
            dependencies: ["pointerout", "pointerover"]
          },
          pointerLeave: {
            registrationName: "onPointerLeave",
            dependencies: ["pointerout", "pointerover"]
          }
        },
        Zr = {
          eventTypes: $r,
          extractEvents: function(e, t, n, r, a) {
            var i = "mouseover" === e || "pointerover" === e,
              l = "mouseout" === e || "pointerout" === e;
            if (
              (i && 0 == (32 & a) && (n.relatedTarget || n.fromElement)) ||
              (!l && !i)
            )
              return null;
            if (
              ((a =
                r.window === r
                  ? r
                  : (a = r.ownerDocument)
                  ? a.defaultView || a.parentWindow
                  : window),
              l
                ? ((l = t),
                  null !==
                    (t = (t = n.relatedTarget || n.toElement) ? dr(t) : null) &&
                    (t !== (i = et(t)) || (5 !== t.tag && 6 !== t.tag)) &&
                    (t = null))
                : (l = null),
              l === t)
            )
              return null;
            if ("mouseout" === e || "mouseover" === e)
              var o = en,
                u = $r.mouseLeave,
                c = $r.mouseEnter,
                s = "mouse";
            else
              ("pointerout" !== e && "pointerover" !== e) ||
                ((o = tn),
                (u = $r.pointerLeave),
                (c = $r.pointerEnter),
                (s = "pointer"));
            if (
              ((e = null == l ? a : mr(l)),
              (a = null == t ? a : mr(t)),
              ((u = o.getPooled(u, l, n, r)).type = s + "leave"),
              (u.target = e),
              (u.relatedTarget = a),
              ((r = o.getPooled(c, t, n, r)).type = s + "enter"),
              (r.target = a),
              (r.relatedTarget = e),
              (s = t),
              (o = l) && s)
            )
              e: {
                for (e = s, l = 0, t = c = o; t; t = Ct(t)) l++;
                for (t = 0, a = e; a; a = Ct(a)) t++;
                for (; 0 < l - t; ) (c = Ct(c)), l--;
                for (; 0 < t - l; ) (e = Ct(e)), t--;
                for (; l--; ) {
                  if (c === e || c === e.alternate) break e;
                  (c = Ct(c)), (e = Ct(e));
                }
                c = null;
              }
            else c = null;
            for (
              e = c, c = [];
              o && o !== e && (null === (l = o.alternate) || l !== e);

            )
              c.push(o), (o = Ct(o));
            for (
              o = [];
              s && s !== e && (null === (l = s.alternate) || l !== e);

            )
              o.push(s), (s = Ct(s));
            for (s = 0; s < c.length; s++) Nt(c[s], "bubbled", u);
            for (s = o.length; 0 < s--; ) Nt(o[s], "captured", r);
            return n === Xr ? ((Xr = null), [u]) : ((Xr = n), [u, r]);
          }
        };
      var ea =
          "function" == typeof Object.is
            ? Object.is
            : function(e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        ta = Object.prototype.hasOwnProperty;
      function na(e, t) {
        if (ea(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!ta.call(t, n[r]) || !ea(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      var ra = Z && "documentMode" in document && 11 >= document.documentMode,
        aa = {
          select: {
            phasedRegistrationNames: {
              bubbled: "onSelect",
              captured: "onSelectCapture"
            },
            dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          }
        },
        ia = null,
        la = null,
        oa = null,
        ua = !1;
      function ca(e, t) {
        var n =
          t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return ua || null == ia || ia !== Wn(n)
          ? null
          : ("selectionStart" in (n = ia) && Qn(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset
                }),
            oa && na(oa, n)
              ? null
              : ((oa = n),
                ((e = Lt.getPooled(aa.select, la, e, t)).type = "select"),
                (e.target = ia),
                Rt(e),
                e));
      }
      var sa = {
        eventTypes: aa,
        extractEvents: function(e, t, n, r) {
          var a,
            i =
              r.window === r
                ? r.document
                : 9 === r.nodeType
                ? r
                : r.ownerDocument;
          if (!(a = !i)) {
            e: {
              (i = Mn(i)), (a = m.onSelect);
              for (var l = 0; l < a.length; l++)
                if (!i.has(a[l])) {
                  i = !1;
                  break e;
                }
              i = !0;
            }
            a = !i;
          }
          if (a) return null;
          switch (((i = t ? mr(t) : window), e)) {
            case "focus":
              (Lr(i) || "true" === i.contentEditable) &&
                ((ia = i), (la = t), (oa = null));
              break;
            case "blur":
              oa = la = ia = null;
              break;
            case "mousedown":
              ua = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              return (ua = !1), ca(n, r);
            case "selectionchange":
              if (ra) break;
            case "keydown":
            case "keyup":
              return ca(n, r);
          }
          return null;
        }
      };
      O.injectEventPluginOrder(
        "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
          " "
        )
      ),
        (w = hr),
        (S = pr),
        (k = mr),
        O.injectEventPluginsByName({
          SimpleEventPlugin: yn,
          EnterLeaveEventPlugin: Zr,
          ChangeEventPlugin: Jr,
          SelectEventPlugin: sa,
          BeforeInputEventPlugin: Ir
        }),
        new Set();
      var fa = [],
        da = -1;
      function pa(e) {
        0 > da || ((e.current = fa[da]), (fa[da] = null), da--);
      }
      function ma(e, t) {
        da++, (fa[da] = e.current), (e.current = t);
      }
      var ha = {},
        ga = { current: ha },
        ya = { current: !1 },
        va = ha;
      function ba(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ha;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          i = {};
        for (a in n) i[a] = t[a];
        return (
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          i
        );
      }
      function Ea(e) {
        return null != (e = e.childContextTypes);
      }
      function Ta(e) {
        pa(ya), pa(ga);
      }
      function wa(e) {
        pa(ya), pa(ga);
      }
      function Sa(e, t, n) {
        if (ga.current !== ha) throw Error(l(168));
        ma(ga, t), ma(ya, n);
      }
      function ka(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
          return n;
        for (var i in (r = r.getChildContext()))
          if (!(i in e)) throw Error(l(108, J(t) || "Unknown", i));
        return a({}, n, {}, r);
      }
      function xa(e) {
        var t = e.stateNode;
        return (
          (t = (t && t.__reactInternalMemoizedMergedChildContext) || ha),
          (va = ga.current),
          ma(ga, t),
          ma(ya, ya.current),
          !0
        );
      }
      function Aa(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(l(169));
        n
          ? ((t = ka(e, t, va)),
            (r.__reactInternalMemoizedMergedChildContext = t),
            pa(ya),
            pa(ga),
            ma(ga, t))
          : pa(ya),
          ma(ya, n);
      }
      var Ca = i.unstable_runWithPriority,
        Pa = i.unstable_scheduleCallback,
        _a = i.unstable_cancelCallback,
        Na = i.unstable_shouldYield,
        Oa = i.unstable_requestPaint,
        Ra = i.unstable_now,
        Ia = i.unstable_getCurrentPriorityLevel,
        Ma = i.unstable_ImmediatePriority,
        La = i.unstable_UserBlockingPriority,
        Ua = i.unstable_NormalPriority,
        za = i.unstable_LowPriority,
        Fa = i.unstable_IdlePriority,
        ja = {},
        Da = void 0 !== Oa ? Oa : function() {},
        Ha = null,
        Va = null,
        Ba = !1,
        Ga = Ra(),
        Wa =
          1e4 > Ga
            ? Ra
            : function() {
                return Ra() - Ga;
              };
      function qa() {
        switch (Ia()) {
          case Ma:
            return 99;
          case La:
            return 98;
          case Ua:
            return 97;
          case za:
            return 96;
          case Fa:
            return 95;
          default:
            throw Error(l(332));
        }
      }
      function Ka(e) {
        switch (e) {
          case 99:
            return Ma;
          case 98:
            return La;
          case 97:
            return Ua;
          case 96:
            return za;
          case 95:
            return Fa;
          default:
            throw Error(l(332));
        }
      }
      function Ya(e, t) {
        return (e = Ka(e)), Ca(e, t);
      }
      function Qa(e, t, n) {
        return (e = Ka(e)), Pa(e, t, n);
      }
      function Xa(e) {
        return null === Ha ? ((Ha = [e]), (Va = Pa(Ma, $a))) : Ha.push(e), ja;
      }
      function Ja() {
        if (null !== Va) {
          var e = Va;
          (Va = null), _a(e);
        }
        $a();
      }
      function $a() {
        if (!Ba && null !== Ha) {
          Ba = !0;
          var e = 0;
          try {
            var t = Ha;
            Ya(99, function() {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Ha = null);
          } catch (n) {
            throw (null !== Ha && (Ha = Ha.slice(e + 1)), Pa(Ma, Ja), n);
          } finally {
            Ba = !1;
          }
        }
      }
      var Za = 3;
      function ei(e, t, n) {
        return (
          1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
        );
      }
      function ti(e, t) {
        if (e && e.defaultProps)
          for (var n in ((t = a({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      var ni = { current: null },
        ri = null,
        ai = null,
        ii = null;
      function li() {
        ii = ai = ri = null;
      }
      function oi(e, t) {
        var n = e.type._context;
        ma(ni, n._currentValue), (n._currentValue = t);
      }
      function ui(e) {
        var t = ni.current;
        pa(ni), (e.type._context._currentValue = t);
      }
      function ci(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if (e.childExpirationTime < t)
            (e.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t);
          else {
            if (!(null !== n && n.childExpirationTime < t)) break;
            n.childExpirationTime = t;
          }
          e = e.return;
        }
      }
      function si(e, t) {
        (ri = e),
          (ii = ai = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (e.expirationTime >= t && (Gl = !0), (e.firstContext = null));
      }
      function fi(e, t) {
        if (ii !== e && !1 !== t && 0 !== t)
          if (
            (("number" == typeof t && 1073741823 !== t) ||
              ((ii = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === ai)
          ) {
            if (null === ri) throw Error(l(308));
            (ai = t),
              (ri.dependencies = {
                expirationTime: 0,
                firstContext: t,
                responders: null
              });
          } else ai = ai.next = t;
        return e._currentValue;
      }
      var di = !1;
      function pi(e) {
        return {
          baseState: e,
          firstUpdate: null,
          lastUpdate: null,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null
        };
      }
      function mi(e) {
        return {
          baseState: e.baseState,
          firstUpdate: e.firstUpdate,
          lastUpdate: e.lastUpdate,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null
        };
      }
      function hi(e, t) {
        return {
          expirationTime: e,
          suspenseConfig: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
          nextEffect: null
        };
      }
      function gi(e, t) {
        null === e.lastUpdate
          ? (e.firstUpdate = e.lastUpdate = t)
          : ((e.lastUpdate.next = t), (e.lastUpdate = t));
      }
      function yi(e, t) {
        var n = e.alternate;
        if (null === n) {
          var r = e.updateQueue,
            a = null;
          null === r && (r = e.updateQueue = pi(e.memoizedState));
        } else
          (r = e.updateQueue),
            (a = n.updateQueue),
            null === r
              ? null === a
                ? ((r = e.updateQueue = pi(e.memoizedState)),
                  (a = n.updateQueue = pi(n.memoizedState)))
                : (r = e.updateQueue = mi(a))
              : null === a && (a = n.updateQueue = mi(r));
        null === a || r === a
          ? gi(r, t)
          : null === r.lastUpdate || null === a.lastUpdate
          ? (gi(r, t), gi(a, t))
          : (gi(r, t), (a.lastUpdate = t));
      }
      function vi(e, t) {
        var n = e.updateQueue;
        null ===
        (n = null === n ? (e.updateQueue = pi(e.memoizedState)) : bi(e, n))
          .lastCapturedUpdate
          ? (n.firstCapturedUpdate = n.lastCapturedUpdate = t)
          : ((n.lastCapturedUpdate.next = t), (n.lastCapturedUpdate = t));
      }
      function bi(e, t) {
        var n = e.alternate;
        return (
          null !== n && t === n.updateQueue && (t = e.updateQueue = mi(t)), t
        );
      }
      function Ei(e, t, n, r, i, l) {
        switch (n.tag) {
          case 1:
            return "function" == typeof (e = n.payload) ? e.call(l, r, i) : e;
          case 3:
            e.effectTag = (-4097 & e.effectTag) | 64;
          case 0:
            if (
              null ==
              (i = "function" == typeof (e = n.payload) ? e.call(l, r, i) : e)
            )
              break;
            return a({}, r, i);
          case 2:
            di = !0;
        }
        return r;
      }
      function Ti(e, t, n, r, a) {
        di = !1;
        for (
          var i = (t = bi(e, t)).baseState,
            l = null,
            o = 0,
            u = t.firstUpdate,
            c = i;
          null !== u;

        ) {
          var s = u.expirationTime;
          s < a
            ? (null === l && ((l = u), (i = c)), o < s && (o = s))
            : (Cu(s, u.suspenseConfig),
              (c = Ei(e, 0, u, c, n, r)),
              null !== u.callback &&
                ((e.effectTag |= 32),
                (u.nextEffect = null),
                null === t.lastEffect
                  ? (t.firstEffect = t.lastEffect = u)
                  : ((t.lastEffect.nextEffect = u), (t.lastEffect = u)))),
            (u = u.next);
        }
        for (s = null, u = t.firstCapturedUpdate; null !== u; ) {
          var f = u.expirationTime;
          f < a
            ? (null === s && ((s = u), null === l && (i = c)), o < f && (o = f))
            : ((c = Ei(e, 0, u, c, n, r)),
              null !== u.callback &&
                ((e.effectTag |= 32),
                (u.nextEffect = null),
                null === t.lastCapturedEffect
                  ? (t.firstCapturedEffect = t.lastCapturedEffect = u)
                  : ((t.lastCapturedEffect.nextEffect = u),
                    (t.lastCapturedEffect = u)))),
            (u = u.next);
        }
        null === l && (t.lastUpdate = null),
          null === s ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
          null === l && null === s && (i = c),
          (t.baseState = i),
          (t.firstUpdate = l),
          (t.firstCapturedUpdate = s),
          Pu(o),
          (e.expirationTime = o),
          (e.memoizedState = c);
      }
      function wi(e, t, n) {
        null !== t.firstCapturedUpdate &&
          (null !== t.lastUpdate &&
            ((t.lastUpdate.next = t.firstCapturedUpdate),
            (t.lastUpdate = t.lastCapturedUpdate)),
          (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
          Si(t.firstEffect, n),
          (t.firstEffect = t.lastEffect = null),
          Si(t.firstCapturedEffect, n),
          (t.firstCapturedEffect = t.lastCapturedEffect = null);
      }
      function Si(e, t) {
        for (; null !== e; ) {
          var n = e.callback;
          if (null !== n) {
            e.callback = null;
            var r = t;
            if ("function" != typeof n) throw Error(l(191, n));
            n.call(r);
          }
          e = e.nextEffect;
        }
      }
      var ki = I.ReactCurrentBatchConfig,
        xi = new r.Component().refs;
      function Ai(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
          (e.memoizedState = n),
          null !== (r = e.updateQueue) &&
            0 === e.expirationTime &&
            (r.baseState = n);
      }
      var Ci = {
        isMounted: function(e) {
          return !!(e = e._reactInternalFiber) && et(e) === e;
        },
        enqueueSetState: function(e, t, n) {
          e = e._reactInternalFiber;
          var r = mu(),
            a = ki.suspense;
          ((a = hi((r = hu(r, e, a)), a)).payload = t),
            null != n && (a.callback = n),
            yi(e, a),
            gu(e, r);
        },
        enqueueReplaceState: function(e, t, n) {
          e = e._reactInternalFiber;
          var r = mu(),
            a = ki.suspense;
          ((a = hi((r = hu(r, e, a)), a)).tag = 1),
            (a.payload = t),
            null != n && (a.callback = n),
            yi(e, a),
            gu(e, r);
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternalFiber;
          var n = mu(),
            r = ki.suspense;
          ((r = hi((n = hu(n, e, r)), r)).tag = 2),
            null != t && (r.callback = t),
            yi(e, r),
            gu(e, n);
        }
      };
      function Pi(e, t, n, r, a, i, l) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, i, l)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !na(n, r) ||
              !na(a, i);
      }
      function _i(e, t, n) {
        var r = !1,
          a = ha,
          i = t.contextType;
        return (
          "object" == typeof i && null !== i
            ? (i = fi(i))
            : ((a = Ea(t) ? va : ga.current),
              (i = (r = null != (r = t.contextTypes)) ? ba(e, a) : ha)),
          (t = new t(n, i)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = Ci),
          (e.stateNode = t),
          (t._reactInternalFiber = e),
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          t
        );
      }
      function Ni(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && Ci.enqueueReplaceState(t, t.state, null);
      }
      function Oi(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = xi);
        var i = t.contextType;
        "object" == typeof i && null !== i
          ? (a.context = fi(i))
          : ((i = Ea(t) ? va : ga.current), (a.context = ba(e, i))),
          null !== (i = e.updateQueue) &&
            (Ti(e, i, n, a, r), (a.state = e.memoizedState)),
          "function" == typeof (i = t.getDerivedStateFromProps) &&
            (Ai(e, t, i, n), (a.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof a.getSnapshotBeforeUpdate ||
            ("function" != typeof a.UNSAFE_componentWillMount &&
              "function" != typeof a.componentWillMount) ||
            ((t = a.state),
            "function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && Ci.enqueueReplaceState(a, a.state, null),
            null !== (i = e.updateQueue) &&
              (Ti(e, i, n, a, r), (a.state = e.memoizedState))),
          "function" == typeof a.componentDidMount && (e.effectTag |= 4);
      }
      var Ri = Array.isArray;
      function Ii(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" != typeof e &&
          "object" != typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(l(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(l(147, e));
            var a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : (((t = function(e) {
                  var t = r.refs;
                  t === xi && (t = r.refs = {}),
                    null === e ? delete t[a] : (t[a] = e);
                })._stringRef = a),
                t);
          }
          if ("string" != typeof e) throw Error(l(284));
          if (!n._owner) throw Error(l(290, e));
        }
        return e;
      }
      function Mi(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            l(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t,
              ""
            )
          );
      }
      function Li(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.effectTag = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t, n) {
          return ((e = Yu(e, t)).index = 0), (e.sibling = null), e;
        }
        function i(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.effectTag = 2), n)
                  : r
                : ((t.effectTag = 2), n)
              : n
          );
        }
        function o(t) {
          return e && null === t.alternate && (t.effectTag = 2), t;
        }
        function u(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Ju(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function c(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = Ii(e, t, n)), (r.return = e), r)
            : (((r = Qu(n.type, n.key, n.props, null, e.mode, r)).ref = Ii(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function s(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = $u(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, i) {
          return null === t || 7 !== t.tag
            ? (((t = Xu(n, e.mode, r, i)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if ("string" == typeof t || "number" == typeof t)
            return ((t = Ju("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case U:
                return (
                  ((n = Qu(t.type, t.key, t.props, null, e.mode, n)).ref = Ii(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case z:
                return ((t = $u(t, e.mode, n)).return = e), t;
            }
            if (Ri(t) || X(t))
              return ((t = Xu(t, e.mode, n, null)).return = e), t;
            Mi(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case U:
                return n.key === a
                  ? n.type === F
                    ? f(e, t, n.props.children, r, a)
                    : c(e, t, n, r)
                  : null;
              case z:
                return n.key === a ? s(e, t, n, r) : null;
            }
            if (Ri(n) || X(n)) return null !== a ? null : f(e, t, n, r, null);
            Mi(e, n);
          }
          return null;
        }
        function m(e, t, n, r, a) {
          if ("string" == typeof r || "number" == typeof r)
            return u(t, (e = e.get(n) || null), "" + r, a);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case U:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === F
                    ? f(t, e, r.props.children, a, r.key)
                    : c(t, e, r, a)
                );
              case z:
                return s(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  a
                );
            }
            if (Ri(r) || X(r)) return f(t, (e = e.get(n) || null), r, a, null);
            Mi(t, r);
          }
          return null;
        }
        function h(a, l, o, u) {
          for (
            var c = null, s = null, f = l, h = (l = 0), g = null;
            null !== f && h < o.length;
            h++
          ) {
            f.index > h ? ((g = f), (f = null)) : (g = f.sibling);
            var y = p(a, f, o[h], u);
            if (null === y) {
              null === f && (f = g);
              break;
            }
            e && f && null === y.alternate && t(a, f),
              (l = i(y, l, h)),
              null === s ? (c = y) : (s.sibling = y),
              (s = y),
              (f = g);
          }
          if (h === o.length) return n(a, f), c;
          if (null === f) {
            for (; h < o.length; h++)
              null !== (f = d(a, o[h], u)) &&
                ((l = i(f, l, h)),
                null === s ? (c = f) : (s.sibling = f),
                (s = f));
            return c;
          }
          for (f = r(a, f); h < o.length; h++)
            null !== (g = m(f, a, h, o[h], u)) &&
              (e &&
                null !== g.alternate &&
                f.delete(null === g.key ? h : g.key),
              (l = i(g, l, h)),
              null === s ? (c = g) : (s.sibling = g),
              (s = g));
          return (
            e &&
              f.forEach(function(e) {
                return t(a, e);
              }),
            c
          );
        }
        function g(a, o, u, c) {
          var s = X(u);
          if ("function" != typeof s) throw Error(l(150));
          if (null == (u = s.call(u))) throw Error(l(151));
          for (
            var f = (s = null), h = o, g = (o = 0), y = null, v = u.next();
            null !== h && !v.done;
            g++, v = u.next()
          ) {
            h.index > g ? ((y = h), (h = null)) : (y = h.sibling);
            var b = p(a, h, v.value, c);
            if (null === b) {
              null === h && (h = y);
              break;
            }
            e && h && null === b.alternate && t(a, h),
              (o = i(b, o, g)),
              null === f ? (s = b) : (f.sibling = b),
              (f = b),
              (h = y);
          }
          if (v.done) return n(a, h), s;
          if (null === h) {
            for (; !v.done; g++, v = u.next())
              null !== (v = d(a, v.value, c)) &&
                ((o = i(v, o, g)),
                null === f ? (s = v) : (f.sibling = v),
                (f = v));
            return s;
          }
          for (h = r(a, h); !v.done; g++, v = u.next())
            null !== (v = m(h, a, g, v.value, c)) &&
              (e &&
                null !== v.alternate &&
                h.delete(null === v.key ? g : v.key),
              (o = i(v, o, g)),
              null === f ? (s = v) : (f.sibling = v),
              (f = v));
          return (
            e &&
              h.forEach(function(e) {
                return t(a, e);
              }),
            s
          );
        }
        return function(e, r, i, u) {
          var c =
            "object" == typeof i &&
            null !== i &&
            i.type === F &&
            null === i.key;
          c && (i = i.props.children);
          var s = "object" == typeof i && null !== i;
          if (s)
            switch (i.$$typeof) {
              case U:
                e: {
                  for (s = i.key, c = r; null !== c; ) {
                    if (c.key === s) {
                      if (
                        7 === c.tag ? i.type === F : c.elementType === i.type
                      ) {
                        n(e, c.sibling),
                          ((r = a(
                            c,
                            i.type === F ? i.props.children : i.props
                          )).ref = Ii(e, c, i)),
                          (r.return = e),
                          (e = r);
                        break e;
                      }
                      n(e, c);
                      break;
                    }
                    t(e, c), (c = c.sibling);
                  }
                  i.type === F
                    ? (((r = Xu(
                        i.props.children,
                        e.mode,
                        u,
                        i.key
                      )).return = e),
                      (e = r))
                    : (((u = Qu(
                        i.type,
                        i.key,
                        i.props,
                        null,
                        e.mode,
                        u
                      )).ref = Ii(e, r, i)),
                      (u.return = e),
                      (e = u));
                }
                return o(e);
              case z:
                e: {
                  for (c = i.key; null !== r; ) {
                    if (r.key === c) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === i.containerInfo &&
                        r.stateNode.implementation === i.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = a(r, i.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = $u(i, e.mode, u)).return = e), (e = r);
                }
                return o(e);
            }
          if ("string" == typeof i || "number" == typeof i)
            return (
              (i = "" + i),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = a(r, i)).return = e), (e = r))
                : (n(e, r), ((r = Ju(i, e.mode, u)).return = e), (e = r)),
              o(e)
            );
          if (Ri(i)) return h(e, r, i, u);
          if (X(i)) return g(e, r, i, u);
          if ((s && Mi(e, i), void 0 === i && !c))
            switch (e.tag) {
              case 1:
              case 0:
                throw ((e = e.type),
                Error(l(152, e.displayName || e.name || "Component")));
            }
          return n(e, r);
        };
      }
      var Ui = Li(!0),
        zi = Li(!1),
        Fi = {},
        ji = { current: Fi },
        Di = { current: Fi },
        Hi = { current: Fi };
      function Vi(e) {
        if (e === Fi) throw Error(l(174));
        return e;
      }
      function Bi(e, t) {
        ma(Hi, t), ma(Di, e), ma(ji, Fi);
        var n = t.nodeType;
        switch (n) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : De(null, "");
            break;
          default:
            t = De(
              (t = (n = 8 === n ? t.parentNode : t).namespaceURI || null),
              (n = n.tagName)
            );
        }
        pa(ji), ma(ji, t);
      }
      function Gi(e) {
        pa(ji), pa(Di), pa(Hi);
      }
      function Wi(e) {
        Vi(Hi.current);
        var t = Vi(ji.current),
          n = De(t, e.type);
        t !== n && (ma(Di, e), ma(ji, n));
      }
      function qi(e) {
        Di.current === e && (pa(ji), pa(Di));
      }
      var Ki = { current: 0 };
      function Yi(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) || n.data === $n || n.data === Zn)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (64 & t.effectTag)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      function Qi(e, t) {
        return { responder: e, props: t };
      }
      var Xi = I.ReactCurrentDispatcher,
        Ji = I.ReactCurrentBatchConfig,
        $i = 0,
        Zi = null,
        el = null,
        tl = null,
        nl = null,
        rl = null,
        al = null,
        il = 0,
        ll = null,
        ol = 0,
        ul = !1,
        cl = null,
        sl = 0;
      function fl() {
        throw Error(l(321));
      }
      function dl(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!ea(e[n], t[n])) return !1;
        return !0;
      }
      function pl(e, t, n, r, a, i) {
        if (
          (($i = i),
          (Zi = t),
          (tl = null !== e ? e.memoizedState : null),
          (Xi.current = null === tl ? Rl : Il),
          (t = n(r, a)),
          ul)
        ) {
          do {
            (ul = !1),
              (sl += 1),
              (tl = null !== e ? e.memoizedState : null),
              (al = nl),
              (ll = rl = el = null),
              (Xi.current = Il),
              (t = n(r, a));
          } while (ul);
          (cl = null), (sl = 0);
        }
        if (
          ((Xi.current = Ol),
          ((e = Zi).memoizedState = nl),
          (e.expirationTime = il),
          (e.updateQueue = ll),
          (e.effectTag |= ol),
          (e = null !== el && null !== el.next),
          ($i = 0),
          (al = rl = nl = tl = el = Zi = null),
          (il = 0),
          (ll = null),
          (ol = 0),
          e)
        )
          throw Error(l(300));
        return t;
      }
      function ml() {
        (Xi.current = Ol),
          ($i = 0),
          (al = rl = nl = tl = el = Zi = null),
          (il = 0),
          (ll = null),
          (ol = 0),
          (ul = !1),
          (cl = null),
          (sl = 0);
      }
      function hl() {
        var e = {
          memoizedState: null,
          baseState: null,
          queue: null,
          baseUpdate: null,
          next: null
        };
        return null === rl ? (nl = rl = e) : (rl = rl.next = e), rl;
      }
      function gl() {
        if (null !== al)
          (al = (rl = al).next), (tl = null !== (el = tl) ? el.next : null);
        else {
          if (null === tl) throw Error(l(310));
          var e = {
            memoizedState: (el = tl).memoizedState,
            baseState: el.baseState,
            queue: el.queue,
            baseUpdate: el.baseUpdate,
            next: null
          };
          (rl = null === rl ? (nl = e) : (rl.next = e)), (tl = el.next);
        }
        return rl;
      }
      function yl(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function vl(e) {
        var t = gl(),
          n = t.queue;
        if (null === n) throw Error(l(311));
        if (((n.lastRenderedReducer = e), 0 < sl)) {
          var r = n.dispatch;
          if (null !== cl) {
            var a = cl.get(n);
            if (void 0 !== a) {
              cl.delete(n);
              var i = t.memoizedState;
              do {
                (i = e(i, a.action)), (a = a.next);
              } while (null !== a);
              return (
                ea(i, t.memoizedState) || (Gl = !0),
                (t.memoizedState = i),
                t.baseUpdate === n.last && (t.baseState = i),
                (n.lastRenderedState = i),
                [i, r]
              );
            }
          }
          return [t.memoizedState, r];
        }
        r = n.last;
        var o = t.baseUpdate;
        if (
          ((i = t.baseState),
          null !== o
            ? (null !== r && (r.next = null), (r = o.next))
            : (r = null !== r ? r.next : null),
          null !== r)
        ) {
          var u = (a = null),
            c = r,
            s = !1;
          do {
            var f = c.expirationTime;
            f < $i
              ? (s || ((s = !0), (u = o), (a = i)), f > il && Pu((il = f)))
              : (Cu(f, c.suspenseConfig),
                (i = c.eagerReducer === e ? c.eagerState : e(i, c.action))),
              (o = c),
              (c = c.next);
          } while (null !== c && c !== r);
          s || ((u = o), (a = i)),
            ea(i, t.memoizedState) || (Gl = !0),
            (t.memoizedState = i),
            (t.baseUpdate = u),
            (t.baseState = a),
            (n.lastRenderedState = i);
        }
        return [t.memoizedState, n.dispatch];
      }
      function bl(e) {
        var t = hl();
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue = {
            last: null,
            dispatch: null,
            lastRenderedReducer: yl,
            lastRenderedState: e
          }).dispatch = Nl.bind(null, Zi, e)),
          [t.memoizedState, e]
        );
      }
      function El(e) {
        return vl(yl);
      }
      function Tl(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === ll
            ? ((ll = { lastEffect: null }).lastEffect = e.next = e)
            : null === (t = ll.lastEffect)
            ? (ll.lastEffect = e.next = e)
            : ((n = t.next), (t.next = e), (e.next = n), (ll.lastEffect = e)),
          e
        );
      }
      function wl(e, t, n, r) {
        var a = hl();
        (ol |= e),
          (a.memoizedState = Tl(t, n, void 0, void 0 === r ? null : r));
      }
      function Sl(e, t, n, r) {
        var a = gl();
        r = void 0 === r ? null : r;
        var i = void 0;
        if (null !== el) {
          var l = el.memoizedState;
          if (((i = l.destroy), null !== r && dl(r, l.deps)))
            return void Tl(0, n, i, r);
        }
        (ol |= e), (a.memoizedState = Tl(t, n, i, r));
      }
      function kl(e, t) {
        return wl(516, 192, e, t);
      }
      function xl(e, t) {
        return Sl(516, 192, e, t);
      }
      function Al(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function() {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function() {
              t.current = null;
            })
          : void 0;
      }
      function Cl() {}
      function Pl(e, t) {
        return (hl().memoizedState = [e, void 0 === t ? null : t]), e;
      }
      function _l(e, t) {
        var n = gl();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && dl(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Nl(e, t, n) {
        if (!(25 > sl)) throw Error(l(301));
        var r = e.alternate;
        if (e === Zi || (null !== r && r === Zi))
          if (
            ((ul = !0),
            (e = {
              expirationTime: $i,
              suspenseConfig: null,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null
            }),
            null === cl && (cl = new Map()),
            void 0 === (n = cl.get(t)))
          )
            cl.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
        else {
          var a = mu(),
            i = ki.suspense;
          i = {
            expirationTime: (a = hu(a, e, i)),
            suspenseConfig: i,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
          };
          var o = t.last;
          if (null === o) i.next = i;
          else {
            var u = o.next;
            null !== u && (i.next = u), (o.next = i);
          }
          if (
            ((t.last = i),
            0 === e.expirationTime &&
              (null === r || 0 === r.expirationTime) &&
              null !== (r = t.lastRenderedReducer))
          )
            try {
              var c = t.lastRenderedState,
                s = r(c, n);
              if (((i.eagerReducer = r), (i.eagerState = s), ea(s, c))) return;
            } catch (f) {}
          gu(e, a);
        }
      }
      var Ol = {
          readContext: fi,
          useCallback: fl,
          useContext: fl,
          useEffect: fl,
          useImperativeHandle: fl,
          useLayoutEffect: fl,
          useMemo: fl,
          useReducer: fl,
          useRef: fl,
          useState: fl,
          useDebugValue: fl,
          useResponder: fl,
          useDeferredValue: fl,
          useTransition: fl
        },
        Rl = {
          readContext: fi,
          useCallback: Pl,
          useContext: fi,
          useEffect: kl,
          useImperativeHandle: function(e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              wl(4, 36, Al.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function(e, t) {
            return wl(4, 36, e, t);
          },
          useMemo: function(e, t) {
            var n = hl();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function(e, t, n) {
            var r = hl();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue = {
                last: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
              }).dispatch = Nl.bind(null, Zi, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function(e) {
            return (e = { current: e }), (hl().memoizedState = e);
          },
          useState: bl,
          useDebugValue: Cl,
          useResponder: Qi,
          useDeferredValue: function(e, t) {
            var n = bl(e),
              r = n[0],
              a = n[1];
            return (
              kl(
                function() {
                  i.unstable_next(function() {
                    var n = Ji.suspense;
                    Ji.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      Ji.suspense = n;
                    }
                  });
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function(e) {
            var t = bl(!1),
              n = t[0],
              r = t[1];
            return [
              Pl(
                function(t) {
                  r(!0),
                    i.unstable_next(function() {
                      var n = Ji.suspense;
                      Ji.suspense = void 0 === e ? null : e;
                      try {
                        r(!1), t();
                      } finally {
                        Ji.suspense = n;
                      }
                    });
                },
                [e, n]
              ),
              n
            ];
          }
        },
        Il = {
          readContext: fi,
          useCallback: _l,
          useContext: fi,
          useEffect: xl,
          useImperativeHandle: function(e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              Sl(4, 36, Al.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function(e, t) {
            return Sl(4, 36, e, t);
          },
          useMemo: function(e, t) {
            var n = gl();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && dl(t, r[1])
              ? r[0]
              : ((e = e()), (n.memoizedState = [e, t]), e);
          },
          useReducer: vl,
          useRef: function() {
            return gl().memoizedState;
          },
          useState: El,
          useDebugValue: Cl,
          useResponder: Qi,
          useDeferredValue: function(e, t) {
            var n = El(),
              r = n[0],
              a = n[1];
            return (
              xl(
                function() {
                  i.unstable_next(function() {
                    var n = Ji.suspense;
                    Ji.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      Ji.suspense = n;
                    }
                  });
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function(e) {
            var t = El(),
              n = t[0],
              r = t[1];
            return [
              _l(
                function(t) {
                  r(!0),
                    i.unstable_next(function() {
                      var n = Ji.suspense;
                      Ji.suspense = void 0 === e ? null : e;
                      try {
                        r(!1), t();
                      } finally {
                        Ji.suspense = n;
                      }
                    });
                },
                [e, n]
              ),
              n
            ];
          }
        },
        Ml = null,
        Ll = null,
        Ul = !1;
      function zl(e, t) {
        var n = qu(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.effectTag = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function Fl(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function jl(e) {
        if (Ul) {
          var t = Ll;
          if (t) {
            var n = t;
            if (!Fl(e, t)) {
              if (!(t = lr(n.nextSibling)) || !Fl(e, t))
                return (
                  (e.effectTag = (-1025 & e.effectTag) | 2),
                  (Ul = !1),
                  void (Ml = e)
                );
              zl(Ml, n);
            }
            (Ml = e), (Ll = lr(t.firstChild));
          } else (e.effectTag = (-1025 & e.effectTag) | 2), (Ul = !1), (Ml = e);
        }
      }
      function Dl(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Ml = e;
      }
      function Hl(e) {
        if (e !== Ml) return !1;
        if (!Ul) return Dl(e), (Ul = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !rr(t, e.memoizedProps))
        )
          for (t = Ll; t; ) zl(e, t), (t = lr(t.nextSibling));
        if ((Dl(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(l(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if (n === Jn) {
                  if (0 === t) {
                    Ll = lr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else (n !== Xn && n !== Zn && n !== $n) || t++;
              }
              e = e.nextSibling;
            }
            Ll = null;
          }
        } else Ll = Ml ? lr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Vl() {
        (Ll = Ml = null), (Ul = !1);
      }
      var Bl = I.ReactCurrentOwner,
        Gl = !1;
      function Wl(e, t, n, r) {
        t.child = null === e ? zi(t, null, n, r) : Ui(t, e.child, n, r);
      }
      function ql(e, t, n, r, a) {
        n = n.render;
        var i = t.ref;
        return (
          si(t, a),
          (r = pl(e, t, n, r, i, a)),
          null === e || Gl
            ? ((t.effectTag |= 1), Wl(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= a && (e.expirationTime = 0),
              co(e, t, a))
        );
      }
      function Kl(e, t, n, r, a, i) {
        if (null === e) {
          var l = n.type;
          return "function" != typeof l ||
            Ku(l) ||
            void 0 !== l.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Qu(n.type, null, r, null, t.mode, i)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = l), Yl(e, t, l, r, a, i));
        }
        return (
          (l = e.child),
          a < i &&
          ((a = l.memoizedProps),
          (n = null !== (n = n.compare) ? n : na)(a, r) && e.ref === t.ref)
            ? co(e, t, i)
            : ((t.effectTag |= 1),
              ((e = Yu(l, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function Yl(e, t, n, r, a, i) {
        return null !== e &&
          na(e.memoizedProps, r) &&
          e.ref === t.ref &&
          ((Gl = !1), a < i)
          ? co(e, t, i)
          : Xl(e, t, n, r, i);
      }
      function Ql(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.effectTag |= 128);
      }
      function Xl(e, t, n, r, a) {
        var i = Ea(n) ? va : ga.current;
        return (
          (i = ba(t, i)),
          si(t, a),
          (n = pl(e, t, n, r, i, a)),
          null === e || Gl
            ? ((t.effectTag |= 1), Wl(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= a && (e.expirationTime = 0),
              co(e, t, a))
        );
      }
      function Jl(e, t, n, r, a) {
        if (Ea(n)) {
          var i = !0;
          xa(t);
        } else i = !1;
        if ((si(t, a), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            _i(t, n, r),
            Oi(t, n, r, a),
            (r = !0);
        else if (null === e) {
          var l = t.stateNode,
            o = t.memoizedProps;
          l.props = o;
          var u = l.context,
            c = n.contextType;
          "object" == typeof c && null !== c
            ? (c = fi(c))
            : (c = ba(t, (c = Ea(n) ? va : ga.current)));
          var s = n.getDerivedStateFromProps,
            f =
              "function" == typeof s ||
              "function" == typeof l.getSnapshotBeforeUpdate;
          f ||
            ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
              "function" != typeof l.componentWillReceiveProps) ||
            ((o !== r || u !== c) && Ni(t, l, r, c)),
            (di = !1);
          var d = t.memoizedState;
          u = l.state = d;
          var p = t.updateQueue;
          null !== p && (Ti(t, p, r, l, a), (u = t.memoizedState)),
            o !== r || d !== u || ya.current || di
              ? ("function" == typeof s &&
                  (Ai(t, n, s, r), (u = t.memoizedState)),
                (o = di || Pi(t, n, o, r, d, u, c))
                  ? (f ||
                      ("function" != typeof l.UNSAFE_componentWillMount &&
                        "function" != typeof l.componentWillMount) ||
                      ("function" == typeof l.componentWillMount &&
                        l.componentWillMount(),
                      "function" == typeof l.UNSAFE_componentWillMount &&
                        l.UNSAFE_componentWillMount()),
                    "function" == typeof l.componentDidMount &&
                      (t.effectTag |= 4))
                  : ("function" == typeof l.componentDidMount &&
                      (t.effectTag |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (l.props = r),
                (l.state = u),
                (l.context = c),
                (r = o))
              : ("function" == typeof l.componentDidMount && (t.effectTag |= 4),
                (r = !1));
        } else
          (l = t.stateNode),
            (o = t.memoizedProps),
            (l.props = t.type === t.elementType ? o : ti(t.type, o)),
            (u = l.context),
            "object" == typeof (c = n.contextType) && null !== c
              ? (c = fi(c))
              : (c = ba(t, (c = Ea(n) ? va : ga.current))),
            (f =
              "function" == typeof (s = n.getDerivedStateFromProps) ||
              "function" == typeof l.getSnapshotBeforeUpdate) ||
              ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
                "function" != typeof l.componentWillReceiveProps) ||
              ((o !== r || u !== c) && Ni(t, l, r, c)),
            (di = !1),
            (u = t.memoizedState),
            (d = l.state = u),
            null !== (p = t.updateQueue) &&
              (Ti(t, p, r, l, a), (d = t.memoizedState)),
            o !== r || u !== d || ya.current || di
              ? ("function" == typeof s &&
                  (Ai(t, n, s, r), (d = t.memoizedState)),
                (s = di || Pi(t, n, o, r, u, d, c))
                  ? (f ||
                      ("function" != typeof l.UNSAFE_componentWillUpdate &&
                        "function" != typeof l.componentWillUpdate) ||
                      ("function" == typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, d, c),
                      "function" == typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, d, c)),
                    "function" == typeof l.componentDidUpdate &&
                      (t.effectTag |= 4),
                    "function" == typeof l.getSnapshotBeforeUpdate &&
                      (t.effectTag |= 256))
                  : ("function" != typeof l.componentDidUpdate ||
                      (o === e.memoizedProps && u === e.memoizedState) ||
                      (t.effectTag |= 4),
                    "function" != typeof l.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && u === e.memoizedState) ||
                      (t.effectTag |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = d)),
                (l.props = r),
                (l.state = d),
                (l.context = c),
                (r = s))
              : ("function" != typeof l.componentDidUpdate ||
                  (o === e.memoizedProps && u === e.memoizedState) ||
                  (t.effectTag |= 4),
                "function" != typeof l.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && u === e.memoizedState) ||
                  (t.effectTag |= 256),
                (r = !1));
        return $l(e, t, n, r, i, a);
      }
      function $l(e, t, n, r, a, i) {
        Ql(e, t);
        var l = 0 != (64 & t.effectTag);
        if (!r && !l) return a && Aa(t, n, !1), co(e, t, i);
        (r = t.stateNode), (Bl.current = t);
        var o =
          l && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.effectTag |= 1),
          null !== e && l
            ? ((t.child = Ui(t, e.child, null, i)),
              (t.child = Ui(t, null, o, i)))
            : Wl(e, t, o, i),
          (t.memoizedState = r.state),
          a && Aa(t, n, !0),
          t.child
        );
      }
      function Zl(e) {
        var t = e.stateNode;
        t.pendingContext
          ? Sa(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && Sa(0, t.context, !1),
          Bi(e, t.containerInfo);
      }
      var eo,
        to,
        no,
        ro,
        ao = { dehydrated: null, retryTime: 0 };
      function io(e, t, n) {
        var r,
          a = t.mode,
          i = t.pendingProps,
          l = Ki.current,
          o = !1;
        if (
          ((r = 0 != (64 & t.effectTag)) ||
            (r = 0 != (2 & l) && (null === e || null !== e.memoizedState)),
          r
            ? ((o = !0), (t.effectTag &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === i.fallback ||
              !0 === i.unstable_avoidThisFallback ||
              (l |= 1),
          ma(Ki, 1 & l),
          null === e)
        ) {
          if ((void 0 !== i.fallback && jl(t), o)) {
            if (
              ((o = i.fallback),
              ((i = Xu(null, a, 0, null)).return = t),
              0 == (2 & t.mode))
            )
              for (
                e = null !== t.memoizedState ? t.child.child : t.child,
                  i.child = e;
                null !== e;

              )
                (e.return = i), (e = e.sibling);
            return (
              ((n = Xu(o, a, n, null)).return = t),
              (i.sibling = n),
              (t.memoizedState = ao),
              (t.child = i),
              n
            );
          }
          return (
            (a = i.children),
            (t.memoizedState = null),
            (t.child = zi(t, null, a, n))
          );
        }
        if (null !== e.memoizedState) {
          if (((a = (e = e.child).sibling), o)) {
            if (
              ((i = i.fallback),
              ((n = Yu(e, e.pendingProps)).return = t),
              0 == (2 & t.mode) &&
                (o = null !== t.memoizedState ? t.child.child : t.child) !==
                  e.child)
            )
              for (n.child = o; null !== o; ) (o.return = n), (o = o.sibling);
            return (
              ((a = Yu(a, i, a.expirationTime)).return = t),
              (n.sibling = a),
              (n.childExpirationTime = 0),
              (t.memoizedState = ao),
              (t.child = n),
              a
            );
          }
          return (
            (n = Ui(t, e.child, i.children, n)),
            (t.memoizedState = null),
            (t.child = n)
          );
        }
        if (((e = e.child), o)) {
          if (
            ((o = i.fallback),
            ((i = Xu(null, a, 0, null)).return = t),
            (i.child = e),
            null !== e && (e.return = i),
            0 == (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                i.child = e;
              null !== e;

            )
              (e.return = i), (e = e.sibling);
          return (
            ((n = Xu(o, a, n, null)).return = t),
            (i.sibling = n),
            (n.effectTag |= 2),
            (i.childExpirationTime = 0),
            (t.memoizedState = ao),
            (t.child = i),
            n
          );
        }
        return (t.memoizedState = null), (t.child = Ui(t, e, i.children, n));
      }
      function lo(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t),
          ci(e.return, t);
      }
      function oo(e, t, n, r, a, i) {
        var l = e.memoizedState;
        null === l
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              last: r,
              tail: n,
              tailExpiration: 0,
              tailMode: a,
              lastEffect: i
            })
          : ((l.isBackwards = t),
            (l.rendering = null),
            (l.last = r),
            (l.tail = n),
            (l.tailExpiration = 0),
            (l.tailMode = a),
            (l.lastEffect = i));
      }
      function uo(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          i = r.tail;
        if ((Wl(e, t, r.children, n), 0 != (2 & (r = Ki.current))))
          (r = (1 & r) | 2), (t.effectTag |= 64);
        else {
          if (null !== e && 0 != (64 & e.effectTag))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && lo(e, n);
              else if (19 === e.tag) lo(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((ma(Ki, r), 0 == (2 & t.mode))) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Yi(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                oo(t, !1, a, n, i, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Yi(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              oo(t, !0, n, null, i, t.lastEffect);
              break;
            case "together":
              oo(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function co(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if ((0 !== r && Pu(r), t.childExpirationTime < n)) return null;
        if (null !== e && t.child !== e.child) throw Error(l(153));
        if (null !== t.child) {
          for (
            n = Yu((e = t.child), e.pendingProps, e.expirationTime),
              t.child = n,
              n.return = t;
            null !== e.sibling;

          )
            (e = e.sibling),
              ((n = n.sibling = Yu(
                e,
                e.pendingProps,
                e.expirationTime
              )).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function so(e) {
        e.effectTag |= 4;
      }
      function fo(e, t) {
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
      }
      function po(e) {
        switch (e.tag) {
          case 1:
            Ea(e.type) && Ta();
            var t = e.effectTag;
            return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Gi(), wa(), 0 != (64 & (t = e.effectTag))))
              throw Error(l(285));
            return (e.effectTag = (-4097 & t) | 64), e;
          case 5:
            return qi(e), null;
          case 13:
            return (
              pa(Ki),
              4096 & (t = e.effectTag)
                ? ((e.effectTag = (-4097 & t) | 64), e)
                : null
            );
          case 19:
            return pa(Ki), null;
          case 4:
            return Gi(), null;
          case 10:
            return ui(e), null;
          default:
            return null;
        }
      }
      function mo(e, t) {
        return { value: e, source: t, stack: $(t) };
      }
      (eo = function(e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (to = function() {}),
        (no = function(e, t, n, r, i) {
          var l = e.memoizedProps;
          if (l !== r) {
            var o,
              u,
              c = t.stateNode;
            switch ((Vi(ji.current), (e = null), n)) {
              case "input":
                (l = Ae(c, l)), (r = Ae(c, r)), (e = []);
                break;
              case "option":
                (l = Re(c, l)), (r = Re(c, r)), (e = []);
                break;
              case "select":
                (l = a({}, l, { value: void 0 })),
                  (r = a({}, r, { value: void 0 })),
                  (e = []);
                break;
              case "textarea":
                (l = Me(c, l)), (r = Me(c, r)), (e = []);
                break;
              default:
                "function" != typeof l.onClick &&
                  "function" == typeof r.onClick &&
                  (c.onclick = Gn);
            }
            for (o in (Hn(n, r), (n = null), l))
              if (!r.hasOwnProperty(o) && l.hasOwnProperty(o) && null != l[o])
                if ("style" === o)
                  for (u in (c = l[o]))
                    c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
                else
                  "dangerouslySetInnerHTML" !== o &&
                    "children" !== o &&
                    "suppressContentEditableWarning" !== o &&
                    "suppressHydrationWarning" !== o &&
                    "autoFocus" !== o &&
                    (p.hasOwnProperty(o)
                      ? e || (e = [])
                      : (e = e || []).push(o, null));
            for (o in r) {
              var s = r[o];
              if (
                ((c = null != l ? l[o] : void 0),
                r.hasOwnProperty(o) && s !== c && (null != s || null != c))
              )
                if ("style" === o)
                  if (c) {
                    for (u in c)
                      !c.hasOwnProperty(u) ||
                        (s && s.hasOwnProperty(u)) ||
                        (n || (n = {}), (n[u] = ""));
                    for (u in s)
                      s.hasOwnProperty(u) &&
                        c[u] !== s[u] &&
                        (n || (n = {}), (n[u] = s[u]));
                  } else n || (e || (e = []), e.push(o, n)), (n = s);
                else
                  "dangerouslySetInnerHTML" === o
                    ? ((s = s ? s.__html : void 0),
                      (c = c ? c.__html : void 0),
                      null != s && c !== s && (e = e || []).push(o, "" + s))
                    : "children" === o
                    ? c === s ||
                      ("string" != typeof s && "number" != typeof s) ||
                      (e = e || []).push(o, "" + s)
                    : "suppressContentEditableWarning" !== o &&
                      "suppressHydrationWarning" !== o &&
                      (p.hasOwnProperty(o)
                        ? (null != s && Bn(i, o), e || c === s || (e = []))
                        : (e = e || []).push(o, s));
            }
            n && (e = e || []).push("style", n),
              (i = e),
              (t.updateQueue = i) && so(t);
          }
        }),
        (ro = function(e, t, n, r) {
          n !== r && so(t);
        });
      var ho = "function" == typeof WeakSet ? WeakSet : Set;
      function go(e, t) {
        var n = t.source,
          r = t.stack;
        null === r && null !== n && (r = $(n)),
          null !== n && J(n.type),
          (t = t.value),
          null !== e && 1 === e.tag && J(e.type);
        try {
          console.error(t);
        } catch (a) {
          setTimeout(function() {
            throw a;
          });
        }
      }
      function yo(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" == typeof t)
            try {
              t(null);
            } catch (n) {
              Du(e, n);
            }
          else t.current = null;
      }
      function vo(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            bo(2, 0, t);
            break;
          case 1:
            if (256 & t.effectTag && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : ti(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            break;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      }
      function bo(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
          var r = (n = n.next);
          do {
            if (0 != (r.tag & e)) {
              var a = r.destroy;
              (r.destroy = void 0), void 0 !== a && a();
            }
            0 != (r.tag & t) && ((a = r.create), (r.destroy = a())),
              (r = r.next);
          } while (r !== n);
        }
      }
      function Eo(e, t, n) {
        switch (("function" == typeof Gu && Gu(t), t.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var r = e.next;
              Ya(97 < n ? 97 : n, function() {
                var e = r;
                do {
                  var n = e.destroy;
                  if (void 0 !== n) {
                    var a = t;
                    try {
                      n();
                    } catch (i) {
                      Du(a, i);
                    }
                  }
                  e = e.next;
                } while (e !== r);
              });
            }
            break;
          case 1:
            yo(t),
              "function" == typeof (n = t.stateNode).componentWillUnmount &&
                (function(e, t) {
                  try {
                    (t.props = e.memoizedProps),
                      (t.state = e.memoizedState),
                      t.componentWillUnmount();
                  } catch (n) {
                    Du(e, n);
                  }
                })(t, n);
            break;
          case 5:
            yo(t);
            break;
          case 4:
            ko(e, t, n);
        }
      }
      function To(e) {
        var t = e.alternate;
        (e.return = null),
          (e.child = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.alternate = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.pendingProps = null),
          (e.memoizedProps = null),
          null !== t && To(t);
      }
      function wo(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function So(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (wo(t)) {
              var n = t;
              break e;
            }
            t = t.return;
          }
          throw Error(l(160));
        }
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(l(161));
        }
        16 & n.effectTag && (Be(t, ""), (n.effectTag &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || wo(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.effectTag) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.effectTag)) {
            n = n.stateNode;
            break e;
          }
        }
        for (var a = e; ; ) {
          var i = 5 === a.tag || 6 === a.tag;
          if (i) {
            var o = i ? a.stateNode : a.stateNode.instance;
            if (n)
              if (r) {
                var u = o;
                (o = n),
                  8 === (i = t).nodeType
                    ? i.parentNode.insertBefore(u, o)
                    : i.insertBefore(u, o);
              } else t.insertBefore(o, n);
            else
              r
                ? (8 === (u = t).nodeType
                    ? (i = u.parentNode).insertBefore(o, u)
                    : (i = u).appendChild(o),
                  null != (u = u._reactRootContainer) ||
                    null !== i.onclick ||
                    (i.onclick = Gn))
                : t.appendChild(o);
          } else if (4 !== a.tag && null !== a.child) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === e) break;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === e) return;
            a = a.return;
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function ko(e, t, n) {
        for (var r, a, i = t, o = !1; ; ) {
          if (!o) {
            o = i.return;
            e: for (;;) {
              if (null === o) throw Error(l(160));
              switch (((r = o.stateNode), o.tag)) {
                case 5:
                  a = !1;
                  break e;
                case 3:
                case 4:
                  (r = r.containerInfo), (a = !0);
                  break e;
              }
              o = o.return;
            }
            o = !0;
          }
          if (5 === i.tag || 6 === i.tag) {
            e: for (var u = e, c = i, s = n, f = c; ; )
              if ((Eo(u, f, s), null !== f.child && 4 !== f.tag))
                (f.child.return = f), (f = f.child);
              else {
                if (f === c) break;
                for (; null === f.sibling; ) {
                  if (null === f.return || f.return === c) break e;
                  f = f.return;
                }
                (f.sibling.return = f.return), (f = f.sibling);
              }
            a
              ? ((u = r),
                (c = i.stateNode),
                8 === u.nodeType
                  ? u.parentNode.removeChild(c)
                  : u.removeChild(c))
              : r.removeChild(i.stateNode);
          } else if (4 === i.tag) {
            if (null !== i.child) {
              (r = i.stateNode.containerInfo),
                (a = !0),
                (i.child.return = i),
                (i = i.child);
              continue;
            }
          } else if ((Eo(e, i, n), null !== i.child)) {
            (i.child.return = i), (i = i.child);
            continue;
          }
          if (i === t) break;
          for (; null === i.sibling; ) {
            if (null === i.return || i.return === t) return;
            4 === (i = i.return).tag && (o = !1);
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      }
      function xo(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            bo(4, 8, t);
            break;
          case 1:
            break;
          case 5:
            var n = t.stateNode;
            if (null != n) {
              var r = t.memoizedProps,
                a = null !== e ? e.memoizedProps : r;
              e = t.type;
              var i = t.updateQueue;
              if (((t.updateQueue = null), null !== i)) {
                for (
                  n[sr] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      Pe(n, r),
                    Vn(e, a),
                    t = Vn(e, r),
                    a = 0;
                  a < i.length;
                  a += 2
                ) {
                  var o = i[a],
                    u = i[a + 1];
                  "style" === o
                    ? jn(n, u)
                    : "dangerouslySetInnerHTML" === o
                    ? Ve(n, u)
                    : "children" === o
                    ? Be(n, u)
                    : we(n, o, u, t);
                }
                switch (e) {
                  case "input":
                    _e(n, r);
                    break;
                  case "textarea":
                    Ue(n, r);
                    break;
                  case "select":
                    (t = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (e = r.value)
                        ? Ie(n, !!r.multiple, e, !1)
                        : t !== !!r.multiple &&
                          (null != r.defaultValue
                            ? Ie(n, !!r.multiple, r.defaultValue, !0)
                            : Ie(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            break;
          case 6:
            if (null === t.stateNode) throw Error(l(162));
            t.stateNode.nodeValue = t.memoizedProps;
            break;
          case 3:
            (t = t.stateNode).hydrate &&
              ((t.hydrate = !1), xt(t.containerInfo));
            break;
          case 12:
            break;
          case 13:
            if (
              ((n = t),
              null === t.memoizedState
                ? (r = !1)
                : ((r = !0), (n = t.child), (tu = Wa())),
              null !== n)
            )
              e: for (e = n; ; ) {
                if (5 === e.tag)
                  (i = e.stateNode),
                    r
                      ? "function" == typeof (i = i.style).setProperty
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none")
                      : ((i = e.stateNode),
                        (a =
                          null != (a = e.memoizedProps.style) &&
                          a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (i.style.display = Fn("display", a)));
                else if (6 === e.tag)
                  e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                else {
                  if (
                    13 === e.tag &&
                    null !== e.memoizedState &&
                    null === e.memoizedState.dehydrated
                  ) {
                    ((i = e.child.sibling).return = e), (e = i);
                    continue;
                  }
                  if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                  }
                }
                if (e === n) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            Ao(t);
            break;
          case 19:
            Ao(t);
            break;
          case 17:
          case 20:
          case 21:
            break;
          default:
            throw Error(l(163));
        }
      }
      function Ao(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new ho()),
            t.forEach(function(t) {
              var r = Vu.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      var Co = "function" == typeof WeakMap ? WeakMap : Map;
      function Po(e, t, n) {
        ((n = hi(n, null)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function() {
            au || ((au = !0), (iu = r)), go(e, t);
          }),
          n
        );
      }
      function _o(e, t, n) {
        (n = hi(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var a = t.value;
          n.payload = function() {
            return go(e, t), r(a);
          };
        }
        var i = e.stateNode;
        return (
          null !== i &&
            "function" == typeof i.componentDidCatch &&
            (n.callback = function() {
              "function" != typeof r &&
                (null === lu ? (lu = new Set([this])) : lu.add(this), go(e, t));
              var n = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : ""
              });
            }),
          n
        );
      }
      var No,
        Oo = Math.ceil,
        Ro = I.ReactCurrentDispatcher,
        Io = I.ReactCurrentOwner,
        Mo = 0,
        Lo = 8,
        Uo = 16,
        zo = 32,
        Fo = 0,
        jo = 1,
        Do = 2,
        Ho = 3,
        Vo = 4,
        Bo = 5,
        Go = Mo,
        Wo = null,
        qo = null,
        Ko = 0,
        Yo = Fo,
        Qo = null,
        Xo = 1073741823,
        Jo = 1073741823,
        $o = null,
        Zo = 0,
        eu = !1,
        tu = 0,
        nu = 500,
        ru = null,
        au = !1,
        iu = null,
        lu = null,
        ou = !1,
        uu = null,
        cu = 90,
        su = null,
        fu = 0,
        du = null,
        pu = 0;
      function mu() {
        return (Go & (Uo | zo)) !== Mo
          ? 1073741821 - ((Wa() / 10) | 0)
          : 0 !== pu
          ? pu
          : (pu = 1073741821 - ((Wa() / 10) | 0));
      }
      function hu(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = qa();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if ((Go & Uo) !== Mo) return Ko;
        if (null !== n) e = ei(e, 0 | n.timeoutMs || 5e3, 250);
        else
          switch (r) {
            case 99:
              e = 1073741823;
              break;
            case 98:
              e = ei(e, 150, 100);
              break;
            case 97:
            case 96:
              e = ei(e, 5e3, 250);
              break;
            case 95:
              e = 2;
              break;
            default:
              throw Error(l(326));
          }
        return null !== Wo && e === Ko && --e, e;
      }
      function gu(e, t) {
        if (50 < fu) throw ((fu = 0), (du = null), Error(l(185)));
        if (null !== (e = yu(e, t))) {
          var n = qa();
          1073741823 === t
            ? (Go & Lo) !== Mo && (Go & (Uo | zo)) === Mo
              ? Tu(e)
              : (bu(e), Go === Mo && Ja())
            : bu(e),
            (4 & Go) === Mo ||
              (98 !== n && 99 !== n) ||
              (null === su
                ? (su = new Map([[e, t]]))
                : (void 0 === (n = su.get(e)) || n > t) && su.set(e, t));
        }
      }
      function yu(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
          a = null;
        if (null === r && 3 === e.tag) a = e.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((n = r.alternate),
              r.childExpirationTime < t && (r.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t),
              null === r.return && 3 === r.tag)
            ) {
              a = r.stateNode;
              break;
            }
            r = r.return;
          }
        return (
          null !== a && (Wo === a && (Pu(t), Yo === Vo && tc(a, Ko)), nc(a, t)),
          a
        );
      }
      function vu(e) {
        var t = e.lastExpiredTime;
        return 0 !== t
          ? t
          : ec(e, (t = e.firstPendingTime))
          ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel)
            ? t
            : e
          : t;
      }
      function bu(e) {
        if (0 !== e.lastExpiredTime)
          (e.callbackExpirationTime = 1073741823),
            (e.callbackPriority = 99),
            (e.callbackNode = Xa(Tu.bind(null, e)));
        else {
          var t = vu(e),
            n = e.callbackNode;
          if (0 === t)
            null !== n &&
              ((e.callbackNode = null),
              (e.callbackExpirationTime = 0),
              (e.callbackPriority = 90));
          else {
            var r = mu();
            if (
              (1073741823 === t
                ? (r = 99)
                : 1 === t || 2 === t
                ? (r = 95)
                : (r =
                    0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                      ? 99
                      : 250 >= r
                      ? 98
                      : 5250 >= r
                      ? 97
                      : 95),
              null !== n)
            ) {
              var a = e.callbackPriority;
              if (e.callbackExpirationTime === t && a >= r) return;
              n !== ja && _a(n);
            }
            (e.callbackExpirationTime = t),
              (e.callbackPriority = r),
              (t =
                1073741823 === t
                  ? Xa(Tu.bind(null, e))
                  : Qa(r, Eu.bind(null, e), {
                      timeout: 10 * (1073741821 - t) - Wa()
                    })),
              (e.callbackNode = t);
          }
        }
      }
      function Eu(e, t) {
        if (((pu = 0), t)) return rc(e, (t = mu())), bu(e), null;
        var n = vu(e);
        if (0 !== n) {
          if (((t = e.callbackNode), (Go & (Uo | zo)) !== Mo))
            throw Error(l(327));
          if ((zu(), (e === Wo && n === Ko) || ku(e, n), null !== qo)) {
            var r = Go;
            Go |= Uo;
            for (var a = Au(); ; )
              try {
                Nu();
                break;
              } catch (u) {
                xu(e, u);
              }
            if ((li(), (Go = r), (Ro.current = a), Yo === jo))
              throw ((t = Qo), ku(e, n), tc(e, n), bu(e), t);
            if (null === qo)
              switch (
                ((a = e.finishedWork = e.current.alternate),
                (e.finishedExpirationTime = n),
                (r = Yo),
                (Wo = null),
                r)
              ) {
                case Fo:
                case jo:
                  throw Error(l(345));
                case Do:
                  rc(e, 2 < n ? 2 : n);
                  break;
                case Ho:
                  if (
                    (tc(e, n),
                    n === (r = e.lastSuspendedTime) &&
                      (e.nextKnownPendingLevel = Iu(a)),
                    1073741823 === Xo && 10 < (a = tu + nu - Wa()))
                  ) {
                    if (eu) {
                      var i = e.lastPingedTime;
                      if (0 === i || i >= n) {
                        (e.lastPingedTime = n), ku(e, n);
                        break;
                      }
                    }
                    if (0 !== (i = vu(e)) && i !== n) break;
                    if (0 !== r && r !== n) {
                      e.lastPingedTime = r;
                      break;
                    }
                    e.timeoutHandle = ar(Mu.bind(null, e), a);
                    break;
                  }
                  Mu(e);
                  break;
                case Vo:
                  if (
                    (tc(e, n),
                    n === (r = e.lastSuspendedTime) &&
                      (e.nextKnownPendingLevel = Iu(a)),
                    eu && (0 === (a = e.lastPingedTime) || a >= n))
                  ) {
                    (e.lastPingedTime = n), ku(e, n);
                    break;
                  }
                  if (0 !== (a = vu(e)) && a !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  if (
                    (1073741823 !== Jo
                      ? (r = 10 * (1073741821 - Jo) - Wa())
                      : 1073741823 === Xo
                      ? (r = 0)
                      : ((r = 10 * (1073741821 - Xo) - 5e3),
                        0 > (r = (a = Wa()) - r) && (r = 0),
                        (n = 10 * (1073741821 - n) - a) <
                          (r =
                            (120 > r
                              ? 120
                              : 480 > r
                              ? 480
                              : 1080 > r
                              ? 1080
                              : 1920 > r
                              ? 1920
                              : 3e3 > r
                              ? 3e3
                              : 4320 > r
                              ? 4320
                              : 1960 * Oo(r / 1960)) - r) && (r = n)),
                    10 < r)
                  ) {
                    e.timeoutHandle = ar(Mu.bind(null, e), r);
                    break;
                  }
                  Mu(e);
                  break;
                case Bo:
                  if (1073741823 !== Xo && null !== $o) {
                    i = Xo;
                    var o = $o;
                    if (
                      (0 >= (r = 0 | o.busyMinDurationMs)
                        ? (r = 0)
                        : ((a = 0 | o.busyDelayMs),
                          (r =
                            (i =
                              Wa() -
                              (10 * (1073741821 - i) -
                                (0 | o.timeoutMs || 5e3))) <= a
                              ? 0
                              : a + r - i)),
                      10 < r)
                    ) {
                      tc(e, n), (e.timeoutHandle = ar(Mu.bind(null, e), r));
                      break;
                    }
                  }
                  Mu(e);
                  break;
                default:
                  throw Error(l(329));
              }
            if ((bu(e), e.callbackNode === t)) return Eu.bind(null, e);
          }
        }
        return null;
      }
      function Tu(e) {
        var t = e.lastExpiredTime;
        if (((t = 0 !== t ? t : 1073741823), e.finishedExpirationTime === t))
          Mu(e);
        else {
          if ((Go & (Uo | zo)) !== Mo) throw Error(l(327));
          if ((zu(), (e === Wo && t === Ko) || ku(e, t), null !== qo)) {
            var n = Go;
            Go |= Uo;
            for (var r = Au(); ; )
              try {
                _u();
                break;
              } catch (a) {
                xu(e, a);
              }
            if ((li(), (Go = n), (Ro.current = r), Yo === jo))
              throw ((n = Qo), ku(e, t), tc(e, t), bu(e), n);
            if (null !== qo) throw Error(l(261));
            (e.finishedWork = e.current.alternate),
              (e.finishedExpirationTime = t),
              (Wo = null),
              Mu(e),
              bu(e);
          }
        }
        return null;
      }
      function wu(e, t) {
        var n = Go;
        Go |= 1;
        try {
          return e(t);
        } finally {
          (Go = n) === Mo && Ja();
        }
      }
      function Su(e, t) {
        var n = Go;
        (Go &= -2), (Go |= Lo);
        try {
          return e(t);
        } finally {
          (Go = n) === Mo && Ja();
        }
      }
      function ku(e, t) {
        (e.finishedWork = null), (e.finishedExpirationTime = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), ir(n)), null !== qo))
          for (n = qo.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                var a = r.type.childContextTypes;
                null != a && Ta();
                break;
              case 3:
                Gi(), wa();
                break;
              case 5:
                qi(r);
                break;
              case 4:
                Gi();
                break;
              case 13:
              case 19:
                pa(Ki);
                break;
              case 10:
                ui(r);
            }
            n = n.return;
          }
        (Wo = e),
          (qo = Yu(e.current, null)),
          (Ko = t),
          (Yo = Fo),
          (Qo = null),
          (Jo = Xo = 1073741823),
          ($o = null),
          (Zo = 0),
          (eu = !1);
      }
      function xu(e, t) {
        for (;;) {
          try {
            if ((li(), ml(), null === qo || null === qo.return))
              return (Yo = jo), (Qo = t), null;
            e: {
              var n = e,
                r = qo.return,
                a = qo,
                i = t;
              if (
                ((t = Ko),
                (a.effectTag |= 2048),
                (a.firstEffect = a.lastEffect = null),
                null !== i &&
                  "object" == typeof i &&
                  "function" == typeof i.then)
              ) {
                var l = i,
                  o = 0 != (1 & Ki.current),
                  u = r;
                do {
                  var c;
                  if ((c = 13 === u.tag)) {
                    var s = u.memoizedState;
                    if (null !== s) c = null !== s.dehydrated;
                    else {
                      var f = u.memoizedProps;
                      c =
                        void 0 !== f.fallback &&
                        (!0 !== f.unstable_avoidThisFallback || !o);
                    }
                  }
                  if (c) {
                    var d = u.updateQueue;
                    if (null === d) {
                      var p = new Set();
                      p.add(l), (u.updateQueue = p);
                    } else d.add(l);
                    if (0 == (2 & u.mode)) {
                      if (
                        ((u.effectTag |= 64),
                        (a.effectTag &= -2981),
                        1 === a.tag)
                      )
                        if (null === a.alternate) a.tag = 17;
                        else {
                          var m = hi(1073741823, null);
                          (m.tag = 2), yi(a, m);
                        }
                      a.expirationTime = 1073741823;
                      break e;
                    }
                    (i = void 0), (a = t);
                    var h = n.pingCache;
                    if (
                      (null === h
                        ? ((h = n.pingCache = new Co()),
                          (i = new Set()),
                          h.set(l, i))
                        : void 0 === (i = h.get(l)) &&
                          ((i = new Set()), h.set(l, i)),
                      !i.has(a))
                    ) {
                      i.add(a);
                      var g = Hu.bind(null, n, l, a);
                      l.then(g, g);
                    }
                    (u.effectTag |= 4096), (u.expirationTime = t);
                    break e;
                  }
                  u = u.return;
                } while (null !== u);
                i = Error(
                  (J(a.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                    $(a)
                );
              }
              Yo !== Bo && (Yo = Do), (i = mo(i, a)), (u = r);
              do {
                switch (u.tag) {
                  case 3:
                    (l = i),
                      (u.effectTag |= 4096),
                      (u.expirationTime = t),
                      vi(u, Po(u, l, t));
                    break e;
                  case 1:
                    l = i;
                    var y = u.type,
                      v = u.stateNode;
                    if (
                      0 == (64 & u.effectTag) &&
                      ("function" == typeof y.getDerivedStateFromError ||
                        (null !== v &&
                          "function" == typeof v.componentDidCatch &&
                          (null === lu || !lu.has(v))))
                    ) {
                      (u.effectTag |= 4096),
                        (u.expirationTime = t),
                        vi(u, _o(u, l, t));
                      break e;
                    }
                }
                u = u.return;
              } while (null !== u);
            }
            qo = Ru(qo);
          } catch (b) {
            t = b;
            continue;
          }
          break;
        }
      }
      function Au() {
        var e = Ro.current;
        return (Ro.current = Ol), null === e ? Ol : e;
      }
      function Cu(e, t) {
        e < Xo && 2 < e && (Xo = e),
          null !== t && e < Jo && 2 < e && ((Jo = e), ($o = t));
      }
      function Pu(e) {
        e > Zo && (Zo = e);
      }
      function _u() {
        for (; null !== qo; ) qo = Ou(qo);
      }
      function Nu() {
        for (; null !== qo && !Na(); ) qo = Ou(qo);
      }
      function Ou(e) {
        var t = No(e.alternate, e, Ko);
        return (
          (e.memoizedProps = e.pendingProps),
          null === t && (t = Ru(e)),
          (Io.current = null),
          t
        );
      }
      function Ru(e) {
        qo = e;
        do {
          var t = qo.alternate;
          if (((e = qo.return), 0 == (2048 & qo.effectTag))) {
            e: {
              var n = t,
                r = Ko,
                i = (t = qo).pendingProps;
              switch (t.tag) {
                case 2:
                case 16:
                  break;
                case 15:
                case 0:
                  break;
                case 1:
                  Ea(t.type) && Ta();
                  break;
                case 3:
                  Gi(),
                    wa(),
                    (i = t.stateNode).pendingContext &&
                      ((i.context = i.pendingContext),
                      (i.pendingContext = null)),
                    (null === n || null === n.child) && Hl(t) && so(t),
                    to(t);
                  break;
                case 5:
                  qi(t), (r = Vi(Hi.current));
                  var o = t.type;
                  if (null !== n && null != t.stateNode)
                    no(n, t, o, i, r), n.ref !== t.ref && (t.effectTag |= 128);
                  else if (i) {
                    var u = Vi(ji.current);
                    if (Hl(t)) {
                      var c = (i = t).stateNode;
                      n = i.type;
                      var s = i.memoizedProps,
                        f = r;
                      switch (
                        ((c[cr] = i), (c[sr] = s), (o = void 0), (r = c), n)
                      ) {
                        case "iframe":
                        case "object":
                        case "embed":
                          xn("load", r);
                          break;
                        case "video":
                        case "audio":
                          for (c = 0; c < Ze.length; c++) xn(Ze[c], r);
                          break;
                        case "source":
                          xn("error", r);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          xn("error", r), xn("load", r);
                          break;
                        case "form":
                          xn("reset", r), xn("submit", r);
                          break;
                        case "details":
                          xn("toggle", r);
                          break;
                        case "input":
                          Ce(r, s), xn("invalid", r), Bn(f, "onChange");
                          break;
                        case "select":
                          (r._wrapperState = { wasMultiple: !!s.multiple }),
                            xn("invalid", r),
                            Bn(f, "onChange");
                          break;
                        case "textarea":
                          Le(r, s), xn("invalid", r), Bn(f, "onChange");
                      }
                      for (o in (Hn(n, s), (c = null), s))
                        s.hasOwnProperty(o) &&
                          ((u = s[o]),
                          "children" === o
                            ? "string" == typeof u
                              ? r.textContent !== u && (c = ["children", u])
                              : "number" == typeof u &&
                                r.textContent !== "" + u &&
                                (c = ["children", "" + u])
                            : p.hasOwnProperty(o) && null != u && Bn(f, o));
                      switch (n) {
                        case "input":
                          ke(r), Ne(r, s, !0);
                          break;
                        case "textarea":
                          ke(r), ze(r);
                          break;
                        case "select":
                        case "option":
                          break;
                        default:
                          "function" == typeof s.onClick && (r.onclick = Gn);
                      }
                      (o = c), (i.updateQueue = o), (i = null !== o) && so(t);
                    } else {
                      (n = t),
                        (f = o),
                        (s = i),
                        (c = 9 === r.nodeType ? r : r.ownerDocument),
                        u === Fe.html && (u = je(f)),
                        u === Fe.html
                          ? "script" === f
                            ? (((s = c.createElement("div")).innerHTML =
                                "<script></script>"),
                              (c = s.removeChild(s.firstChild)))
                            : "string" == typeof s.is
                            ? (c = c.createElement(f, { is: s.is }))
                            : ((c = c.createElement(f)),
                              "select" === f &&
                                ((f = c),
                                s.multiple
                                  ? (f.multiple = !0)
                                  : s.size && (f.size = s.size)))
                          : (c = c.createElementNS(u, f)),
                        ((s = c)[cr] = n),
                        (s[sr] = i),
                        eo(s, t, !1, !1),
                        (t.stateNode = s);
                      var d = r,
                        m = Vn((f = o), (n = i));
                      switch (f) {
                        case "iframe":
                        case "object":
                        case "embed":
                          xn("load", s), (r = n);
                          break;
                        case "video":
                        case "audio":
                          for (r = 0; r < Ze.length; r++) xn(Ze[r], s);
                          r = n;
                          break;
                        case "source":
                          xn("error", s), (r = n);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          xn("error", s), xn("load", s), (r = n);
                          break;
                        case "form":
                          xn("reset", s), xn("submit", s), (r = n);
                          break;
                        case "details":
                          xn("toggle", s), (r = n);
                          break;
                        case "input":
                          Ce(s, n),
                            (r = Ae(s, n)),
                            xn("invalid", s),
                            Bn(d, "onChange");
                          break;
                        case "option":
                          r = Re(s, n);
                          break;
                        case "select":
                          (s._wrapperState = { wasMultiple: !!n.multiple }),
                            (r = a({}, n, { value: void 0 })),
                            xn("invalid", s),
                            Bn(d, "onChange");
                          break;
                        case "textarea":
                          Le(s, n),
                            (r = Me(s, n)),
                            xn("invalid", s),
                            Bn(d, "onChange");
                          break;
                        default:
                          r = n;
                      }
                      Hn(f, r), (c = void 0), (u = f);
                      var h = s,
                        g = r;
                      for (c in g)
                        if (g.hasOwnProperty(c)) {
                          var y = g[c];
                          "style" === c
                            ? jn(h, y)
                            : "dangerouslySetInnerHTML" === c
                            ? null != (y = y ? y.__html : void 0) && Ve(h, y)
                            : "children" === c
                            ? "string" == typeof y
                              ? ("textarea" !== u || "" !== y) && Be(h, y)
                              : "number" == typeof y && Be(h, "" + y)
                            : "suppressContentEditableWarning" !== c &&
                              "suppressHydrationWarning" !== c &&
                              "autoFocus" !== c &&
                              (p.hasOwnProperty(c)
                                ? null != y && Bn(d, c)
                                : null != y && we(h, c, y, m));
                        }
                      switch (f) {
                        case "input":
                          ke(s), Ne(s, n, !1);
                          break;
                        case "textarea":
                          ke(s), ze(s);
                          break;
                        case "option":
                          null != n.value &&
                            s.setAttribute("value", "" + Te(n.value));
                          break;
                        case "select":
                          ((r = s).multiple = !!n.multiple),
                            null != (s = n.value)
                              ? Ie(r, !!n.multiple, s, !1)
                              : null != n.defaultValue &&
                                Ie(r, !!n.multiple, n.defaultValue, !0);
                          break;
                        default:
                          "function" == typeof r.onClick && (s.onclick = Gn);
                      }
                      (i = nr(o, i)) && so(t);
                    }
                    null !== t.ref && (t.effectTag |= 128);
                  } else if (null === t.stateNode) throw Error(l(166));
                  break;
                case 6:
                  if (n && null != t.stateNode) ro(n, t, n.memoizedProps, i);
                  else {
                    if ("string" != typeof i && null === t.stateNode)
                      throw Error(l(166));
                    (r = Vi(Hi.current)),
                      Vi(ji.current),
                      Hl(t)
                        ? ((o = (i = t).stateNode),
                          (r = i.memoizedProps),
                          (o[cr] = i),
                          (i = o.nodeValue !== r) && so(t))
                        : ((o = t),
                          ((i = (9 === r.nodeType
                            ? r
                            : r.ownerDocument
                          ).createTextNode(i))[cr] = o),
                          (t.stateNode = i));
                  }
                  break;
                case 11:
                  break;
                case 13:
                  if (
                    (pa(Ki), (i = t.memoizedState), 0 != (64 & t.effectTag))
                  ) {
                    t.expirationTime = r;
                    break e;
                  }
                  (i = null !== i),
                    (o = !1),
                    null === n
                      ? void 0 !== t.memoizedProps.fallback && Hl(t)
                      : ((o = null !== (r = n.memoizedState)),
                        i ||
                          null === r ||
                          (null !== (r = n.child.sibling) &&
                            (null !== (s = t.firstEffect)
                              ? ((t.firstEffect = r), (r.nextEffect = s))
                              : ((t.firstEffect = t.lastEffect = r),
                                (r.nextEffect = null)),
                            (r.effectTag = 8)))),
                    i &&
                      !o &&
                      0 != (2 & t.mode) &&
                      ((null === n &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & Ki.current)
                        ? Yo === Fo && (Yo = Ho)
                        : ((Yo !== Fo && Yo !== Ho) || (Yo = Vo),
                          0 !== Zo && null !== Wo && (tc(Wo, Ko), nc(Wo, Zo)))),
                    (i || o) && (t.effectTag |= 4);
                  break;
                case 7:
                case 8:
                case 12:
                  break;
                case 4:
                  Gi(), to(t);
                  break;
                case 10:
                  ui(t);
                  break;
                case 9:
                case 14:
                  break;
                case 17:
                  Ea(t.type) && Ta();
                  break;
                case 19:
                  if ((pa(Ki), null === (i = t.memoizedState))) break;
                  if (
                    ((o = 0 != (64 & t.effectTag)), null === (s = i.rendering))
                  ) {
                    if (o) fo(i, !1);
                    else if (
                      Yo !== Fo ||
                      (null !== n && 0 != (64 & n.effectTag))
                    )
                      for (n = t.child; null !== n; ) {
                        if (null !== (s = Yi(n))) {
                          for (
                            t.effectTag |= 64,
                              fo(i, !1),
                              null !== (o = s.updateQueue) &&
                                ((t.updateQueue = o), (t.effectTag |= 4)),
                              null === i.lastEffect && (t.firstEffect = null),
                              t.lastEffect = i.lastEffect,
                              i = r,
                              o = t.child;
                            null !== o;

                          )
                            (n = i),
                              ((r = o).effectTag &= 2),
                              (r.nextEffect = null),
                              (r.firstEffect = null),
                              (r.lastEffect = null),
                              null === (s = r.alternate)
                                ? ((r.childExpirationTime = 0),
                                  (r.expirationTime = n),
                                  (r.child = null),
                                  (r.memoizedProps = null),
                                  (r.memoizedState = null),
                                  (r.updateQueue = null),
                                  (r.dependencies = null))
                                : ((r.childExpirationTime =
                                    s.childExpirationTime),
                                  (r.expirationTime = s.expirationTime),
                                  (r.child = s.child),
                                  (r.memoizedProps = s.memoizedProps),
                                  (r.memoizedState = s.memoizedState),
                                  (r.updateQueue = s.updateQueue),
                                  (n = s.dependencies),
                                  (r.dependencies =
                                    null === n
                                      ? null
                                      : {
                                          expirationTime: n.expirationTime,
                                          firstContext: n.firstContext,
                                          responders: n.responders
                                        })),
                              (o = o.sibling);
                          ma(Ki, (1 & Ki.current) | 2), (t = t.child);
                          break e;
                        }
                        n = n.sibling;
                      }
                  } else {
                    if (!o)
                      if (null !== (n = Yi(s))) {
                        if (
                          ((t.effectTag |= 64),
                          (o = !0),
                          null !== (r = n.updateQueue) &&
                            ((t.updateQueue = r), (t.effectTag |= 4)),
                          fo(i, !0),
                          null === i.tail &&
                            "hidden" === i.tailMode &&
                            !s.alternate)
                        ) {
                          null !== (t = t.lastEffect = i.lastEffect) &&
                            (t.nextEffect = null);
                          break;
                        }
                      } else
                        Wa() > i.tailExpiration &&
                          1 < r &&
                          ((t.effectTag |= 64),
                          (o = !0),
                          fo(i, !1),
                          (t.expirationTime = t.childExpirationTime = r - 1));
                    i.isBackwards
                      ? ((s.sibling = t.child), (t.child = s))
                      : (null !== (r = i.last)
                          ? (r.sibling = s)
                          : (t.child = s),
                        (i.last = s));
                  }
                  if (null !== i.tail) {
                    0 === i.tailExpiration && (i.tailExpiration = Wa() + 500),
                      (r = i.tail),
                      (i.rendering = r),
                      (i.tail = r.sibling),
                      (i.lastEffect = t.lastEffect),
                      (r.sibling = null),
                      (i = Ki.current),
                      ma(Ki, (i = o ? (1 & i) | 2 : 1 & i)),
                      (t = r);
                    break e;
                  }
                  break;
                case 20:
                case 21:
                  break;
                default:
                  throw Error(l(156, t.tag));
              }
              t = null;
            }
            if (((i = qo), 1 === Ko || 1 !== i.childExpirationTime)) {
              for (o = 0, r = i.child; null !== r; )
                (n = r.expirationTime) > o && (o = n),
                  (s = r.childExpirationTime) > o && (o = s),
                  (r = r.sibling);
              i.childExpirationTime = o;
            }
            if (null !== t) return t;
            null !== e &&
              0 == (2048 & e.effectTag) &&
              (null === e.firstEffect && (e.firstEffect = qo.firstEffect),
              null !== qo.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = qo.firstEffect),
                (e.lastEffect = qo.lastEffect)),
              1 < qo.effectTag &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = qo)
                  : (e.firstEffect = qo),
                (e.lastEffect = qo)));
          } else {
            if (null !== (t = po(qo))) return (t.effectTag &= 2047), t;
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
          }
          if (null !== (t = qo.sibling)) return t;
          qo = e;
        } while (null !== qo);
        return Yo === Fo && (Yo = Bo), null;
      }
      function Iu(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e;
      }
      function Mu(e) {
        var t = qa();
        return Ya(99, Lu.bind(null, e, t)), null;
      }
      function Lu(e, t) {
        do {
          zu();
        } while (null !== uu);
        if ((Go & (Uo | zo)) !== Mo) throw Error(l(327));
        var n = e.finishedWork,
          r = e.finishedExpirationTime;
        if (null === n) return null;
        if (
          ((e.finishedWork = null),
          (e.finishedExpirationTime = 0),
          n === e.current)
        )
          throw Error(l(177));
        (e.callbackNode = null),
          (e.callbackExpirationTime = 0),
          (e.callbackPriority = 90),
          (e.nextKnownPendingLevel = 0);
        var a = Iu(n);
        if (
          ((e.firstPendingTime = a),
          r <= e.lastSuspendedTime
            ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
            : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
          r <= e.lastPingedTime && (e.lastPingedTime = 0),
          r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
          e === Wo && ((qo = Wo = null), (Ko = 0)),
          1 < n.effectTag
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (a = n.firstEffect))
              : (a = n)
            : (a = n.firstEffect),
          null !== a)
        ) {
          var i = Go;
          (Go |= zo), (Io.current = null), (er = kn);
          var o = Yn();
          if (Qn(o)) {
            if ("selectionStart" in o)
              var u = { start: o.selectionStart, end: o.selectionEnd };
            else
              e: {
                var c =
                  (u = ((u = o.ownerDocument) && u.defaultView) || window)
                    .getSelection && u.getSelection();
                if (c && 0 !== c.rangeCount) {
                  u = c.anchorNode;
                  var s = c.anchorOffset,
                    f = c.focusNode;
                  c = c.focusOffset;
                  try {
                    u.nodeType, f.nodeType;
                  } catch (L) {
                    u = null;
                    break e;
                  }
                  var d = 0,
                    p = -1,
                    m = -1,
                    h = 0,
                    g = 0,
                    y = o,
                    v = null;
                  t: for (;;) {
                    for (
                      var b;
                      y !== u || (0 !== s && 3 !== y.nodeType) || (p = d + s),
                        y !== f || (0 !== c && 3 !== y.nodeType) || (m = d + c),
                        3 === y.nodeType && (d += y.nodeValue.length),
                        null !== (b = y.firstChild);

                    )
                      (v = y), (y = b);
                    for (;;) {
                      if (y === o) break t;
                      if (
                        (v === u && ++h === s && (p = d),
                        v === f && ++g === c && (m = d),
                        null !== (b = y.nextSibling))
                      )
                        break;
                      v = (y = v).parentNode;
                    }
                    y = b;
                  }
                  u = -1 === p || -1 === m ? null : { start: p, end: m };
                } else u = null;
              }
            u = u || { start: 0, end: 0 };
          } else u = null;
          (tr = { focusedElem: o, selectionRange: u }), (kn = !1), (ru = a);
          do {
            try {
              Uu();
            } catch (L) {
              if (null === ru) throw Error(l(330));
              Du(ru, L), (ru = ru.nextEffect);
            }
          } while (null !== ru);
          ru = a;
          do {
            try {
              for (o = e, u = t; null !== ru; ) {
                var E = ru.effectTag;
                if ((16 & E && Be(ru.stateNode, ""), 128 & E)) {
                  var T = ru.alternate;
                  if (null !== T) {
                    var w = T.ref;
                    null !== w &&
                      ("function" == typeof w ? w(null) : (w.current = null));
                  }
                }
                switch (1038 & E) {
                  case 2:
                    So(ru), (ru.effectTag &= -3);
                    break;
                  case 6:
                    So(ru), (ru.effectTag &= -3), xo(ru.alternate, ru);
                    break;
                  case 1024:
                    ru.effectTag &= -1025;
                    break;
                  case 1028:
                    (ru.effectTag &= -1025), xo(ru.alternate, ru);
                    break;
                  case 4:
                    xo(ru.alternate, ru);
                    break;
                  case 8:
                    ko(o, (s = ru), u), To(s);
                }
                ru = ru.nextEffect;
              }
            } catch (L) {
              if (null === ru) throw Error(l(330));
              Du(ru, L), (ru = ru.nextEffect);
            }
          } while (null !== ru);
          if (
            ((w = tr),
            (T = Yn()),
            (E = w.focusedElem),
            (u = w.selectionRange),
            T !== E &&
              E &&
              E.ownerDocument &&
              (function e(t, n) {
                return (
                  !(!t || !n) &&
                  (t === n ||
                    ((!t || 3 !== t.nodeType) &&
                      (n && 3 === n.nodeType
                        ? e(t, n.parentNode)
                        : "contains" in t
                        ? t.contains(n)
                        : !!t.compareDocumentPosition &&
                          !!(16 & t.compareDocumentPosition(n)))))
                );
              })(E.ownerDocument.documentElement, E))
          ) {
            null !== u &&
              Qn(E) &&
              ((T = u.start),
              void 0 === (w = u.end) && (w = T),
              "selectionStart" in E
                ? ((E.selectionStart = T),
                  (E.selectionEnd = Math.min(w, E.value.length)))
                : (w =
                    ((T = E.ownerDocument || document) && T.defaultView) ||
                    window).getSelection &&
                  ((w = w.getSelection()),
                  (s = E.textContent.length),
                  (o = Math.min(u.start, s)),
                  (u = void 0 === u.end ? o : Math.min(u.end, s)),
                  !w.extend && o > u && ((s = u), (u = o), (o = s)),
                  (s = Kn(E, o)),
                  (f = Kn(E, u)),
                  s &&
                    f &&
                    (1 !== w.rangeCount ||
                      w.anchorNode !== s.node ||
                      w.anchorOffset !== s.offset ||
                      w.focusNode !== f.node ||
                      w.focusOffset !== f.offset) &&
                    ((T = T.createRange()).setStart(s.node, s.offset),
                    w.removeAllRanges(),
                    o > u
                      ? (w.addRange(T), w.extend(f.node, f.offset))
                      : (T.setEnd(f.node, f.offset), w.addRange(T))))),
              (T = []);
            for (w = E; (w = w.parentNode); )
              1 === w.nodeType &&
                T.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              "function" == typeof E.focus && E.focus(), E = 0;
              E < T.length;
              E++
            )
              ((w = T[E]).element.scrollLeft = w.left),
                (w.element.scrollTop = w.top);
          }
          (tr = null), (kn = !!er), (er = null), (e.current = n), (ru = a);
          do {
            try {
              for (E = r; null !== ru; ) {
                var S = ru.effectTag;
                if (36 & S) {
                  var k = ru.alternate;
                  switch (((w = E), (T = ru).tag)) {
                    case 0:
                    case 11:
                    case 15:
                      bo(16, 32, T);
                      break;
                    case 1:
                      var x = T.stateNode;
                      if (4 & T.effectTag)
                        if (null === k) x.componentDidMount();
                        else {
                          var A =
                            T.elementType === T.type
                              ? k.memoizedProps
                              : ti(T.type, k.memoizedProps);
                          x.componentDidUpdate(
                            A,
                            k.memoizedState,
                            x.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var C = T.updateQueue;
                      null !== C && wi(0, C, x);
                      break;
                    case 3:
                      var P = T.updateQueue;
                      if (null !== P) {
                        if (((o = null), null !== T.child))
                          switch (T.child.tag) {
                            case 5:
                              o = T.child.stateNode;
                              break;
                            case 1:
                              o = T.child.stateNode;
                          }
                        wi(0, P, o);
                      }
                      break;
                    case 5:
                      var _ = T.stateNode;
                      null === k &&
                        4 & T.effectTag &&
                        nr(T.type, T.memoizedProps) &&
                        _.focus();
                      break;
                    case 6:
                    case 4:
                    case 12:
                      break;
                    case 13:
                      if (null === T.memoizedState) {
                        var N = T.alternate;
                        if (null !== N) {
                          var O = N.memoizedState;
                          if (null !== O) {
                            var R = O.dehydrated;
                            null !== R && xt(R);
                          }
                        }
                      }
                      break;
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                      break;
                    default:
                      throw Error(l(163));
                  }
                }
                if (128 & S) {
                  T = void 0;
                  var I = ru.ref;
                  if (null !== I) {
                    var M = ru.stateNode;
                    switch (ru.tag) {
                      case 5:
                        T = M;
                        break;
                      default:
                        T = M;
                    }
                    "function" == typeof I ? I(T) : (I.current = T);
                  }
                }
                ru = ru.nextEffect;
              }
            } catch (L) {
              if (null === ru) throw Error(l(330));
              Du(ru, L), (ru = ru.nextEffect);
            }
          } while (null !== ru);
          (ru = null), Da(), (Go = i);
        } else e.current = n;
        if (ou) (ou = !1), (uu = e), (cu = t);
        else
          for (ru = a; null !== ru; )
            (t = ru.nextEffect), (ru.nextEffect = null), (ru = t);
        if (
          (0 === (t = e.firstPendingTime) && (lu = null),
          1073741823 === t
            ? e === du
              ? fu++
              : ((fu = 0), (du = e))
            : (fu = 0),
          "function" == typeof Bu && Bu(n.stateNode, r),
          bu(e),
          au)
        )
          throw ((au = !1), (e = iu), (iu = null), e);
        return (Go & Lo) !== Mo ? null : (Ja(), null);
      }
      function Uu() {
        for (; null !== ru; ) {
          var e = ru.effectTag;
          0 != (256 & e) && vo(ru.alternate, ru),
            0 == (512 & e) ||
              ou ||
              ((ou = !0),
              Qa(97, function() {
                return zu(), null;
              })),
            (ru = ru.nextEffect);
        }
      }
      function zu() {
        if (90 !== cu) {
          var e = 97 < cu ? 97 : cu;
          return (cu = 90), Ya(e, Fu);
        }
      }
      function Fu() {
        if (null === uu) return !1;
        var e = uu;
        if (((uu = null), (Go & (Uo | zo)) !== Mo)) throw Error(l(331));
        var t = Go;
        for (Go |= zo, e = e.current.firstEffect; null !== e; ) {
          try {
            var n = e;
            if (0 != (512 & n.effectTag))
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  bo(128, 0, n), bo(0, 64, n);
              }
          } catch (r) {
            if (null === e) throw Error(l(330));
            Du(e, r);
          }
          (n = e.nextEffect), (e.nextEffect = null), (e = n);
        }
        return (Go = t), Ja(), !0;
      }
      function ju(e, t, n) {
        yi(e, (t = Po(e, (t = mo(n, t)), 1073741823))),
          null !== (e = yu(e, 1073741823)) && bu(e);
      }
      function Du(e, t) {
        if (3 === e.tag) ju(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              ju(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" == typeof n.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === lu || !lu.has(r)))
              ) {
                yi(n, (e = _o(n, (e = mo(t, e)), 1073741823))),
                  null !== (n = yu(n, 1073741823)) && bu(n);
                break;
              }
            }
            n = n.return;
          }
      }
      function Hu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          Wo === e && Ko === n
            ? Yo === Vo || (Yo === Ho && 1073741823 === Xo && Wa() - tu < nu)
              ? ku(e, Ko)
              : (eu = !0)
            : ec(e, n) &&
              ((0 !== (t = e.lastPingedTime) && t < n) ||
                ((e.lastPingedTime = n),
                e.finishedExpirationTime === n &&
                  ((e.finishedExpirationTime = 0), (e.finishedWork = null)),
                bu(e)));
      }
      function Vu(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) && (t = hu((t = mu()), e, null)),
          null !== (e = yu(e, t)) && bu(e);
      }
      No = function(e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
          var a = t.pendingProps;
          if (e.memoizedProps !== a || ya.current) Gl = !0;
          else {
            if (r < n) {
              switch (((Gl = !1), t.tag)) {
                case 3:
                  Zl(t), Vl();
                  break;
                case 5:
                  if ((Wi(t), 4 & t.mode && 1 !== n && a.hidden))
                    return (t.expirationTime = t.childExpirationTime = 1), null;
                  break;
                case 1:
                  Ea(t.type) && xa(t);
                  break;
                case 4:
                  Bi(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  oi(t, t.memoizedProps.value);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (r = t.child.childExpirationTime) && r >= n
                      ? io(e, t, n)
                      : (ma(Ki, 1 & Ki.current),
                        null !== (t = co(e, t, n)) ? t.sibling : null);
                  ma(Ki, 1 & Ki.current);
                  break;
                case 19:
                  if (
                    ((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))
                  ) {
                    if (r) return uo(e, t, n);
                    t.effectTag |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null), (a.tail = null)),
                    ma(Ki, Ki.current),
                    !r)
                  )
                    return null;
              }
              return co(e, t, n);
            }
            Gl = !1;
          }
        } else Gl = !1;
        switch (((t.expirationTime = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (a = ba(t, ga.current)),
              si(t, n),
              (a = pl(null, t, r, e, a, n)),
              (t.effectTag |= 1),
              "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (((t.tag = 1), ml(), Ea(r))) {
                var i = !0;
                xa(t);
              } else i = !1;
              t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null;
              var o = r.getDerivedStateFromProps;
              "function" == typeof o && Ai(t, r, o, e),
                (a.updater = Ci),
                (t.stateNode = a),
                (a._reactInternalFiber = t),
                Oi(t, r, e, n),
                (t = $l(null, t, r, !0, i, n));
            } else (t.tag = 0), Wl(null, t, a, n), (t = t.child);
            return t;
          case 16:
            if (
              ((a = t.elementType),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (function(e) {
                if (-1 === e._status) {
                  e._status = 0;
                  var t = e._ctor;
                  (t = t()),
                    (e._result = t),
                    t.then(
                      function(t) {
                        0 === e._status &&
                          ((t = t.default), (e._status = 1), (e._result = t));
                      },
                      function(t) {
                        0 === e._status && ((e._status = 2), (e._result = t));
                      }
                    );
                }
              })(a),
              1 !== a._status)
            )
              throw a._result;
            switch (
              ((a = a._result),
              (t.type = a),
              (i = t.tag = (function(e) {
                if ("function" == typeof e) return Ku(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === G) return 11;
                  if (e === K) return 14;
                }
                return 2;
              })(a)),
              (e = ti(a, e)),
              i)
            ) {
              case 0:
                t = Xl(null, t, a, e, n);
                break;
              case 1:
                t = Jl(null, t, a, e, n);
                break;
              case 11:
                t = ql(null, t, a, e, n);
                break;
              case 14:
                t = Kl(null, t, a, ti(a.type, e), r, n);
                break;
              default:
                throw Error(l(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Xl(e, t, r, (a = t.elementType === r ? a : ti(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Jl(e, t, r, (a = t.elementType === r ? a : ti(r, a)), n)
            );
          case 3:
            if ((Zl(t), null === (r = t.updateQueue))) throw Error(l(282));
            if (
              ((a = null !== (a = t.memoizedState) ? a.element : null),
              Ti(t, r, t.pendingProps, null, n),
              (r = t.memoizedState.element) === a)
            )
              Vl(), (t = co(e, t, n));
            else {
              if (
                ((a = t.stateNode.hydrate) &&
                  ((Ll = lr(t.stateNode.containerInfo.firstChild)),
                  (Ml = t),
                  (a = Ul = !0)),
                a)
              )
                for (n = zi(t, null, r, n), t.child = n; n; )
                  (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
              else Wl(e, t, r, n), Vl();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Wi(t),
              null === e && jl(t),
              (r = t.type),
              (a = t.pendingProps),
              (i = null !== e ? e.memoizedProps : null),
              (o = a.children),
              rr(r, a)
                ? (o = null)
                : null !== i && rr(r, i) && (t.effectTag |= 16),
              Ql(e, t),
              4 & t.mode && 1 !== n && a.hidden
                ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                : (Wl(e, t, o, n), (t = t.child)),
              t
            );
          case 6:
            return null === e && jl(t), null;
          case 13:
            return io(e, t, n);
          case 4:
            return (
              Bi(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Ui(t, null, r, n)) : Wl(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              ql(e, t, r, (a = t.elementType === r ? a : ti(r, a)), n)
            );
          case 7:
            return Wl(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Wl(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (
                ((r = t.type._context),
                (a = t.pendingProps),
                (o = t.memoizedProps),
                oi(t, (i = a.value)),
                null !== o)
              ) {
                var u = o.value;
                if (
                  0 ===
                  (i = ea(u, i)
                    ? 0
                    : 0 |
                      ("function" == typeof r._calculateChangedBits
                        ? r._calculateChangedBits(u, i)
                        : 1073741823))
                ) {
                  if (o.children === a.children && !ya.current) {
                    t = co(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                    var c = u.dependencies;
                    if (null !== c) {
                      o = u.child;
                      for (var s = c.firstContext; null !== s; ) {
                        if (s.context === r && 0 != (s.observedBits & i)) {
                          1 === u.tag &&
                            (((s = hi(n, null)).tag = 2), yi(u, s)),
                            u.expirationTime < n && (u.expirationTime = n),
                            null !== (s = u.alternate) &&
                              s.expirationTime < n &&
                              (s.expirationTime = n),
                            ci(u.return, n),
                            c.expirationTime < n && (c.expirationTime = n);
                          break;
                        }
                        s = s.next;
                      }
                    } else
                      o = 10 === u.tag && u.type === t.type ? null : u.child;
                    if (null !== o) o.return = u;
                    else
                      for (o = u; null !== o; ) {
                        if (o === t) {
                          o = null;
                          break;
                        }
                        if (null !== (u = o.sibling)) {
                          (u.return = o.return), (o = u);
                          break;
                        }
                        o = o.return;
                      }
                    u = o;
                  }
              }
              Wl(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (i = t.pendingProps).children),
              si(t, n),
              (r = r((a = fi(a, i.unstable_observedBits)))),
              (t.effectTag |= 1),
              Wl(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (i = ti((a = t.type), t.pendingProps)),
              Kl(e, t, a, (i = ti(a.type, i)), r, n)
            );
          case 15:
            return Yl(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : ti(r, a)),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (t.tag = 1),
              Ea(r) ? ((e = !0), xa(t)) : (e = !1),
              si(t, n),
              _i(t, r, a),
              Oi(t, r, a, n),
              $l(null, t, r, !0, e, n)
            );
          case 19:
            return uo(e, t, n);
        }
        throw Error(l(156, t.tag));
      };
      var Bu = null,
        Gu = null;
      function Wu(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.effectTag = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childExpirationTime = this.expirationTime = 0),
          (this.alternate = null);
      }
      function qu(e, t, n, r) {
        return new Wu(e, t, n, r);
      }
      function Ku(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Yu(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = qu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.effectTag = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childExpirationTime = e.childExpirationTime),
          (n.expirationTime = e.expirationTime),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : {
                  expirationTime: t.expirationTime,
                  firstContext: t.firstContext,
                  responders: t.responders
                }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Qu(e, t, n, r, a, i) {
        var o = 2;
        if (((r = e), "function" == typeof e)) Ku(e) && (o = 1);
        else if ("string" == typeof e) o = 5;
        else
          e: switch (e) {
            case F:
              return Xu(n.children, a, i, t);
            case B:
              (o = 8), (a |= 7);
              break;
            case j:
              (o = 8), (a |= 1);
              break;
            case D:
              return (
                ((e = qu(12, n, t, 8 | a)).elementType = D),
                (e.type = D),
                (e.expirationTime = i),
                e
              );
            case W:
              return (
                ((e = qu(13, n, t, a)).type = W),
                (e.elementType = W),
                (e.expirationTime = i),
                e
              );
            case q:
              return (
                ((e = qu(19, n, t, a)).elementType = q),
                (e.expirationTime = i),
                e
              );
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case H:
                    o = 10;
                    break e;
                  case V:
                    o = 9;
                    break e;
                  case G:
                    o = 11;
                    break e;
                  case K:
                    o = 14;
                    break e;
                  case Y:
                    (o = 16), (r = null);
                    break e;
                }
              throw Error(l(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = qu(o, n, t, a)).elementType = e),
          (t.type = r),
          (t.expirationTime = i),
          t
        );
      }
      function Xu(e, t, n, r) {
        return ((e = qu(7, e, r, t)).expirationTime = n), e;
      }
      function Ju(e, t, n) {
        return ((e = qu(6, e, null, t)).expirationTime = n), e;
      }
      function $u(e, t, n) {
        return (
          ((t = qu(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).expirationTime = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
          }),
          t
        );
      }
      function Zu(e, t, n) {
        (this.tag = t),
          (this.current = null),
          (this.containerInfo = e),
          (this.pingCache = this.pendingChildren = null),
          (this.finishedExpirationTime = 0),
          (this.finishedWork = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 90),
          (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
      }
      function ec(e, t) {
        var n = e.firstSuspendedTime;
        return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
      }
      function tc(e, t) {
        var n = e.firstSuspendedTime,
          r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t),
          (r > t || 0 === n) && (e.lastSuspendedTime = t),
          t <= e.lastPingedTime && (e.lastPingedTime = 0),
          t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
      }
      function nc(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n &&
          (t >= n
            ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
            : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
          t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
      }
      function rc(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t);
      }
      function ac(e, t, n, r) {
        var a = t.current,
          i = mu(),
          o = ki.suspense;
        i = hu(i, a, o);
        e: if (n) {
          t: {
            if (et((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
              throw Error(l(170));
            var u = n;
            do {
              switch (u.tag) {
                case 3:
                  u = u.stateNode.context;
                  break t;
                case 1:
                  if (Ea(u.type)) {
                    u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              u = u.return;
            } while (null !== u);
            throw Error(l(171));
          }
          if (1 === n.tag) {
            var c = n.type;
            if (Ea(c)) {
              n = ka(n, c, u);
              break e;
            }
          }
          n = u;
        } else n = ha;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = hi(i, o)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          yi(a, t),
          gu(a, i),
          i
        );
      }
      function ic(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function lc(e, t) {
        null !== (e = e.memoizedState) &&
          null !== e.dehydrated &&
          e.retryTime < t &&
          (e.retryTime = t);
      }
      function oc(e, t) {
        lc(e, t), (e = e.alternate) && lc(e, t);
      }
      function uc(e, t, n) {
        var r = new Zu(e, t, (n = null != n && !0 === n.hydrate)),
          a = qu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        (r.current = a),
          (a.stateNode = r),
          (e[fr] = r.current),
          n &&
            0 !== t &&
            (function(e) {
              var t = Mn(e);
              ht.forEach(function(n) {
                Ln(n, e, t);
              }),
                gt.forEach(function(n) {
                  Ln(n, e, t);
                });
            })(9 === e.nodeType ? e : e.ownerDocument),
          (this._internalRoot = r);
      }
      function cc(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function sc(e, t, n, r, a) {
        var i = n._reactRootContainer;
        if (i) {
          var l = i._internalRoot;
          if ("function" == typeof a) {
            var o = a;
            a = function() {
              var e = ic(l);
              o.call(e);
            };
          }
          ac(t, l, e, a);
        } else {
          if (
            ((i = n._reactRootContainer = (function(e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e
                      ? 9 === e.nodeType
                        ? e.documentElement
                        : e.firstChild
                      : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute("data-reactroot")
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new uc(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
            (l = i._internalRoot),
            "function" == typeof a)
          ) {
            var u = a;
            a = function() {
              var e = ic(l);
              u.call(e);
            };
          }
          Su(function() {
            ac(t, l, e, a);
          });
        }
        return ic(l);
      }
      function fc(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!cc(t)) throw Error(l(200));
        return (function(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: z,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
          };
        })(e, t, null, n);
      }
      (uc.prototype.render = function(e, t) {
        ac(e, this._internalRoot, null, void 0 === t ? null : t);
      }),
        (uc.prototype.unmount = function(e) {
          var t = this._internalRoot,
            n = void 0 === e ? null : e,
            r = t.containerInfo;
          ac(null, t, null, function() {
            (r[fr] = null), null !== n && n();
          });
        }),
        (at = function(e) {
          if (13 === e.tag) {
            var t = ei(mu(), 150, 100);
            gu(e, t), oc(e, t);
          }
        }),
        (it = function(e) {
          if (13 === e.tag) {
            mu();
            var t = Za++;
            gu(e, t), oc(e, t);
          }
        }),
        (lt = function(e) {
          if (13 === e.tag) {
            var t = mu();
            gu(e, (t = hu(t, e, null))), oc(e, t);
          }
        }),
        (ee = function(e, t, n) {
          switch (t) {
            case "input":
              if ((_e(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = hr(r);
                    if (!a) throw Error(l(90));
                    xe(r), _e(r, a);
                  }
                }
              }
              break;
            case "textarea":
              Ue(e, n);
              break;
            case "select":
              null != (t = n.value) && Ie(e, !!n.multiple, t, !1);
          }
        }),
        (le = wu),
        (oe = function(e, t, n, r) {
          var a = Go;
          Go |= 4;
          try {
            return Ya(98, e.bind(null, t, n, r));
          } finally {
            (Go = a) === Mo && Ja();
          }
        }),
        (ue = function() {
          (Go & (1 | Uo | zo)) === Mo &&
            ((function() {
              if (null !== su) {
                var e = su;
                (su = null),
                  e.forEach(function(e, t) {
                    rc(t, e), bu(t);
                  }),
                  Ja();
              }
            })(),
            zu());
        }),
        (ce = function(e, t) {
          var n = Go;
          Go |= 2;
          try {
            return e(t);
          } finally {
            (Go = n) === Mo && Ja();
          }
        });
      var dc,
        pc,
        mc = {
          createPortal: fc,
          findDOMNode: function(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(l(188));
              throw Error(l(268, Object.keys(e)));
            }
            return (e = null === (e = rt(t)) ? null : e.stateNode);
          },
          hydrate: function(e, t, n) {
            if (!cc(t)) throw Error(l(200));
            return sc(null, e, t, !0, n);
          },
          render: function(e, t, n) {
            if (!cc(t)) throw Error(l(200));
            return sc(null, e, t, !1, n);
          },
          unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
            if (!cc(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternalFiber)
              throw Error(l(38));
            return sc(e, t, n, !1, r);
          },
          unmountComponentAtNode: function(e) {
            if (!cc(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (Su(function() {
                sc(null, null, e, !1, function() {
                  (e._reactRootContainer = null), (e[fr] = null);
                });
              }),
              !0)
            );
          },
          unstable_createPortal: function() {
            return fc.apply(void 0, arguments);
          },
          unstable_batchedUpdates: wu,
          flushSync: function(e, t) {
            if ((Go & (Uo | zo)) !== Mo) throw Error(l(187));
            var n = Go;
            Go |= 1;
            try {
              return Ya(99, e.bind(null, t));
            } finally {
              (Go = n), Ja();
            }
          },
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [
              pr,
              mr,
              hr,
              O.injectEventPluginsByName,
              d,
              Rt,
              function(e) {
                C(e, Ot);
              },
              ae,
              ie,
              Nn,
              N,
              zu,
              { current: !1 }
            ]
          }
        };
      (pc = (dc = {
        findFiberByHostInstance: dr,
        bundleType: 0,
        version: "16.12.0",
        rendererPackageName: "react-dom"
      }).findFiberByHostInstance),
        (function(e) {
          if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled || !t.supportsFiber) return !0;
          try {
            var n = t.inject(e);
            (Bu = function(e) {
              try {
                t.onCommitFiberRoot(
                  n,
                  e,
                  void 0,
                  64 == (64 & e.current.effectTag)
                );
              } catch (r) {}
            }),
              (Gu = function(e) {
                try {
                  t.onCommitFiberUnmount(n, e);
                } catch (r) {}
              });
          } catch (r) {}
        })(
          a({}, dc, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: I.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
              return null === (e = rt(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance: function(e) {
              return pc ? pc(e) : null;
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
          })
        );
      var hc = { default: mc },
        gc = (hc && mc) || hc;
      e.exports = gc.default || gc;
    }
  }
]);
//# sourceMappingURL=commons-7657412638f6ebce3b93.js.map