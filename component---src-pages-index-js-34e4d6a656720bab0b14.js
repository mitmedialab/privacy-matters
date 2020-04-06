(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "+oPb": function(e, t, n) {
      "use strict";
      n("OGtf")("blink", function(e) {
        return function() {
          return e(this, "blink", "", "");
        };
      });
    },
    "0+i1": function(e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r),
        o = n("1Yj4");
      n("k9Ez");
      t.a = function(e) {
        var t = e.children,
          n = e.buffer;
        return a.a.createElement(
          "div",
          { className: n ? "my-5 py-5" : "" },
          a.a.createElement(
            "div",
            { className: "card-section" },
            a.a.createElement(o.a, null, a.a.createElement("main", null, t))
          )
        );
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
          o = {
            canUseDOM: a,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners:
              a && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: a && !!window.screen
          };
        void 0 ===
          (r = function() {
            return o;
          }.call(t, n, t, e)) || (e.exports = r);
      })();
    },
    "8+s/": function(e, t, n) {
      "use strict";
      function r(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e;
      }
      n("V+eJ"), n("bWfx"), n("f3/d"), n("/SS/"), n("hHhE");
      var a = n("q1tI"),
        o = r(a),
        i = r(n("2rMq")),
        u = r(n("Gytx"));
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
          var c = [],
            l = void 0;
          function s() {
            (l = e(
              c.map(function(e) {
                return e.props;
              })
            )),
              f.canUseDOM ? t(l) : n && (l = n(l));
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
                return l;
              }),
              (t.rewind = function() {
                if (t.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = l;
                return (l = void 0), (c = []), e;
              }),
              (t.prototype.shouldComponentUpdate = function(e) {
                return !u(e, this.props);
              }),
              (t.prototype.componentWillMount = function() {
                c.push(this), s();
              }),
              (t.prototype.componentDidUpdate = function() {
                s();
              }),
              (t.prototype.componentWillUnmount = function() {
                var e = c.indexOf(this);
                c.splice(e, 1), s();
              }),
              (t.prototype.render = function() {
                return o.createElement(r, this.props);
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
            (f.canUseDOM = i.canUseDOM),
            f
          );
        };
      };
    },
    "8Z9I": function(e, t, n) {
      n("bWfx"),
        n("8+KV"),
        n("DNiP"),
        n("XfO3"),
        n("HEwt"),
        n("+oPb"),
        n("V+eJ"),
        n("pIFo"),
        n("Oyvg"),
        n("rGqo"),
        n("yt8O"),
        n("f3/d"),
        n("LK8F"),
        n("rE2o"),
        n("ioFf"),
        n("2Spj"),
        n("Z2Ku"),
        n("FLlr"),
        n("VRzm"),
        n("Btvt"),
        n("/SS/"),
        n("hHhE"),
        n("91GP"),
        n("HAE/"),
        (e.exports = (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var a = (t[r] = { exports: {}, id: r, loaded: !1 });
            return (
              e[r].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports
            );
          }
          return (n.m = e), (n.c = t), (n.p = ""), n(0);
        })([
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
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
              o = n(1),
              i = p(o),
              u = p(n(2)),
              c = p(n(10)),
              l = p(n(12)),
              s = p(n(13)),
              f = (function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.default = e), t;
              })(n(14));
            function p(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var d = ["🔙", "⏰"],
              y = (function(e) {
                function t(e) {
                  !(function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t);
                  var n = (function(e, t) {
                    if (!e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !t ||
                      ("object" != typeof t && "function" != typeof t)
                      ? e
                      : t;
                  })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                  );
                  return (
                    (n.state = { textLines: [], isDone: !1 }),
                    (n.onTypingDone = function() {
                      n.mounted &&
                        (n.setState({ isDone: !0 }), n.props.onTypingDone());
                    }),
                    (n.delayGenerator = function(e, t, r, a) {
                      var o = n.props.avgTypingDelay,
                        i = n.props.stdTypingDelay;
                      return n.props.delayGenerator(o, i, {
                        line: e,
                        lineIdx: t,
                        character: r,
                        charIdx: a,
                        defDelayGenerator: function() {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : o,
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : i;
                          return f.gaussianRnd(e, t);
                        }
                      });
                    }),
                    (n.typeLine = function(e, t) {
                      if (!n.mounted) return Promise.resolve();
                      var r = e,
                        a = n.props.onLineTyped;
                      return (
                        f.isBackspaceElement(e)
                          ? (e.props.delay > 0 &&
                              (n.introducedDelay = e.props.delay),
                            (r = String("🔙").repeat(e.props.count)))
                          : f.isDelayElement(e) &&
                            ((n.introducedDelay = e.props.ms), (r = "⏰")),
                        new Promise(function(e, o) {
                          n.setState(
                            { textLines: n.state.textLines.concat([""]) },
                            function() {
                              f.eachPromise(r, n.typeCharacter, r, t)
                                .then(function() {
                                  return a(r, t);
                                })
                                .then(e)
                                .catch(o);
                            }
                          );
                        })
                      );
                    }),
                    (n.typeCharacter = function(e, t, r, a) {
                      if (!n.mounted) return Promise.resolve();
                      var o = n.props.onCharacterTyped;
                      return new Promise(function(i) {
                        var u = n.state.textLines.slice();
                        f.sleep(n.introducedDelay).then(function() {
                          n.introducedDelay = null;
                          var c = "🔙" === e;
                          if ("⏰" === e) i();
                          else {
                            if (c && a > 0) {
                              for (
                                var l = a - 1, s = u[l], f = l;
                                f >= 0 && (!(s.length > 0) || d.includes(s[0]));
                                f--
                              )
                                s = u[(l = f)];
                              u[l] = s.substr(0, s.length - 1);
                            } else u[a] += e;
                            n.setState({ textLines: u }, function() {
                              var u = n.delayGenerator(r, a, e, t);
                              o(e, t), setTimeout(i, u);
                            });
                          }
                        });
                      });
                    }),
                    (n.mounted = !1),
                    (n.linesToType = []),
                    (n.introducedDelay = null),
                    e.children &&
                      (n.linesToType = f.extractTextFromElement(e.children)),
                    n
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
                  a(t, [
                    {
                      key: "componentDidMount",
                      value: function() {
                        this.mounted = !0;
                        var e = this.props,
                          t = e.children,
                          n = e.startDelay;
                        t
                          ? n > 0 && "undefined" != typeof window
                            ? setTimeout(this.typeAllLines.bind(this), n)
                            : this.typeAllLines()
                          : this.onTypingDone();
                      }
                    },
                    {
                      key: "shouldComponentUpdate",
                      value: function(e, t) {
                        if (t.textLines.length !== this.state.textLines.length)
                          return !0;
                        for (var n = 0; n < t.textLines.length; n++) {
                          if (this.state.textLines[n] !== t.textLines[n])
                            return !0;
                        }
                        return this.state.isDone !== t.isDone;
                      }
                    },
                    {
                      key: "componentWillUnmount",
                      value: function() {
                        this.mounted = !1;
                      }
                    },
                    {
                      key: "typeAllLines",
                      value: function() {
                        var e = this,
                          t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : this.linesToType;
                        return f.eachPromise(t, this.typeLine).then(function() {
                          return e.onTypingDone();
                        });
                      }
                    },
                    {
                      key: "render",
                      value: function() {
                        var e = this.props,
                          t = e.className,
                          n = e.cursor,
                          a = this.state.isDone,
                          o = f.cloneElementWithSpecifiedText({
                            element: this.props.children,
                            textLines: this.state.textLines
                          });
                        return i.default.createElement(
                          "div",
                          { className: "Typist " + t },
                          o,
                          i.default.createElement(
                            c.default,
                            r({ isDone: a }, n)
                          )
                        );
                      }
                    }
                  ]),
                  t
                );
              })(o.Component);
            (y.propTypes = {
              children: u.default.node,
              className: u.default.string,
              avgTypingDelay: u.default.number,
              stdTypingDelay: u.default.number,
              startDelay: u.default.number,
              cursor: u.default.object,
              onCharacterTyped: u.default.func,
              onLineTyped: u.default.func,
              onTypingDone: u.default.func,
              delayGenerator: u.default.func
            }),
              (y.defaultProps = {
                className: "",
                avgTypingDelay: 70,
                stdTypingDelay: 25,
                startDelay: 0,
                cursor: {},
                onCharacterTyped: function() {},
                onLineTyped: function() {},
                onTypingDone: function() {},
                delayGenerator: f.gaussianRnd
              }),
              (t.default = y),
              (y.Backspace = l.default),
              (y.Delay = s.default);
          },
          function(e, t) {
            e.exports = n("q1tI");
          },
          function(e, t, n) {
            e.exports = n(9)();
          },
          function(e, t, n) {
            "use strict";
            var r = n(4),
              a = n(5),
              o = n(6),
              i = n(7),
              u = n(8);
            e.exports = function(e, t) {
              var n = "function" == typeof Symbol && Symbol.iterator,
                c = "@@iterator";
              var l = "<<anonymous>>",
                s = {
                  array: y("array"),
                  bool: y("boolean"),
                  func: y("function"),
                  number: y("number"),
                  object: y("object"),
                  string: y("string"),
                  symbol: y("symbol"),
                  any: d(r.thatReturnsNull),
                  arrayOf: function(e) {
                    return d(function(t, n, r, a, o) {
                      if ("function" != typeof e)
                        return new p(
                          "Property `" +
                            o +
                            "` of component `" +
                            r +
                            "` has invalid PropType notation inside arrayOf."
                        );
                      var u = t[n];
                      if (!Array.isArray(u))
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            m(u) +
                            "` supplied to `" +
                            r +
                            "`, expected an array."
                        );
                      for (var c = 0; c < u.length; c++) {
                        var l = e(u, c, r, a, o + "[" + c + "]", i);
                        if (l instanceof Error) return l;
                      }
                      return null;
                    });
                  },
                  element: d(function(t, n, r, a, o) {
                    var i = t[n];
                    return e(i)
                      ? null
                      : new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            m(i) +
                            "` supplied to `" +
                            r +
                            "`, expected a single ReactElement."
                        );
                  }),
                  instanceOf: function(e) {
                    return d(function(t, n, r, a, o) {
                      if (!(t[n] instanceof e)) {
                        var i = e.name || l;
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            (function(e) {
                              if (!e.constructor || !e.constructor.name)
                                return l;
                              return e.constructor.name;
                            })(t[n]) +
                            "` supplied to `" +
                            r +
                            "`, expected instance of `" +
                            i +
                            "`."
                        );
                      }
                      return null;
                    });
                  },
                  node: d(function(e, t, n, r, a) {
                    return T(e[t])
                      ? null
                      : new p(
                          "Invalid " +
                            r +
                            " `" +
                            a +
                            "` supplied to `" +
                            n +
                            "`, expected a ReactNode."
                        );
                  }),
                  objectOf: function(e) {
                    return d(function(t, n, r, a, o) {
                      if ("function" != typeof e)
                        return new p(
                          "Property `" +
                            o +
                            "` of component `" +
                            r +
                            "` has invalid PropType notation inside objectOf."
                        );
                      var u = t[n],
                        c = m(u);
                      if ("object" !== c)
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            c +
                            "` supplied to `" +
                            r +
                            "`, expected an object."
                        );
                      for (var l in u)
                        if (u.hasOwnProperty(l)) {
                          var s = e(u, l, r, a, o + "." + l, i);
                          if (s instanceof Error) return s;
                        }
                      return null;
                    });
                  },
                  oneOf: function(e) {
                    if (!Array.isArray(e)) return r.thatReturnsNull;
                    return d(function(t, n, r, a, o) {
                      for (var i = t[n], u = 0; u < e.length; u++)
                        if (f(i, e[u])) return null;
                      return new p(
                        "Invalid " +
                          a +
                          " `" +
                          o +
                          "` of value `" +
                          i +
                          "` supplied to `" +
                          r +
                          "`, expected one of " +
                          JSON.stringify(e) +
                          "."
                      );
                    });
                  },
                  oneOfType: function(e) {
                    if (!Array.isArray(e)) return r.thatReturnsNull;
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      if ("function" != typeof n)
                        return (
                          o(
                            !1,
                            "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",
                            E(n),
                            t
                          ),
                          r.thatReturnsNull
                        );
                    }
                    return d(function(t, n, r, a, o) {
                      for (var u = 0; u < e.length; u++) {
                        if (null == (0, e[u])(t, n, r, a, o, i)) return null;
                      }
                      return new p(
                        "Invalid " + a + " `" + o + "` supplied to `" + r + "`."
                      );
                    });
                  },
                  shape: function(e) {
                    return d(function(t, n, r, a, o) {
                      var u = t[n],
                        c = m(u);
                      if ("object" !== c)
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            c +
                            "` supplied to `" +
                            r +
                            "`, expected `object`."
                        );
                      for (var l in e) {
                        var s = e[l];
                        if (s) {
                          var f = s(u, l, r, a, o + "." + l, i);
                          if (f) return f;
                        }
                      }
                      return null;
                    });
                  }
                };
              function f(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
              }
              function p(e) {
                (this.message = e), (this.stack = "");
              }
              function d(e) {
                function n(n, r, o, u, c, s, f) {
                  ((u = u || l), (s = s || o), f !== i) &&
                    t &&
                    a(
                      !1,
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                  return null == r[o]
                    ? n
                      ? null === r[o]
                        ? new p(
                            "The " +
                              c +
                              " `" +
                              s +
                              "` is marked as required in `" +
                              u +
                              "`, but its value is `null`."
                          )
                        : new p(
                            "The " +
                              c +
                              " `" +
                              s +
                              "` is marked as required in `" +
                              u +
                              "`, but its value is `undefined`."
                          )
                      : null
                    : e(r, o, u, c, s);
                }
                var r = n.bind(null, !1);
                return (r.isRequired = n.bind(null, !0)), r;
              }
              function y(e) {
                return d(function(t, n, r, a, o, i) {
                  var u = t[n];
                  return m(u) !== e
                    ? new p(
                        "Invalid " +
                          a +
                          " `" +
                          o +
                          "` of type `" +
                          h(u) +
                          "` supplied to `" +
                          r +
                          "`, expected `" +
                          e +
                          "`."
                      )
                    : null;
                });
              }
              function T(t) {
                switch (typeof t) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !t;
                  case "object":
                    if (Array.isArray(t)) return t.every(T);
                    if (null === t || e(t)) return !0;
                    var r = (function(e) {
                      var t = e && ((n && e[n]) || e[c]);
                      if ("function" == typeof t) return t;
                    })(t);
                    if (!r) return !1;
                    var a,
                      o = r.call(t);
                    if (r !== t.entries) {
                      for (; !(a = o.next()).done; ) if (!T(a.value)) return !1;
                    } else
                      for (; !(a = o.next()).done; ) {
                        var i = a.value;
                        if (i && !T(i[1])) return !1;
                      }
                    return !0;
                  default:
                    return !1;
                }
              }
              function m(e) {
                var t = typeof e;
                return Array.isArray(e)
                  ? "array"
                  : e instanceof RegExp
                  ? "object"
                  : (function(e, t) {
                      return (
                        "symbol" === e ||
                        "Symbol" === t["@@toStringTag"] ||
                        ("function" == typeof Symbol && t instanceof Symbol)
                      );
                    })(t, e)
                  ? "symbol"
                  : t;
              }
              function h(e) {
                if (null == e) return "" + e;
                var t = m(e);
                if ("object" === t) {
                  if (e instanceof Date) return "date";
                  if (e instanceof RegExp) return "regexp";
                }
                return t;
              }
              function E(e) {
                var t = h(e);
                switch (t) {
                  case "array":
                  case "object":
                    return "an " + t;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + t;
                  default:
                    return t;
                }
              }
              return (
                (p.prototype = Error.prototype),
                (s.checkPropTypes = u),
                (s.PropTypes = s),
                s
              );
            };
          },
          function(e, t) {
            "use strict";
            function n(e) {
              return function() {
                return e;
              };
            }
            var r = function() {};
            (r.thatReturns = n),
              (r.thatReturnsFalse = n(!1)),
              (r.thatReturnsTrue = n(!0)),
              (r.thatReturnsNull = n(null)),
              (r.thatReturnsThis = function() {
                return this;
              }),
              (r.thatReturnsArgument = function(e) {
                return e;
              }),
              (e.exports = r);
          },
          function(e, t) {
            "use strict";
            var n = function(e) {};
            e.exports = function(e, t, r, a, o, i, u, c) {
              if ((n(t), !e)) {
                var l;
                if (void 0 === t)
                  l = new Error(
                    "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                  );
                else {
                  var s = [r, a, o, i, u, c],
                    f = 0;
                  (l = new Error(
                    t.replace(/%s/g, function() {
                      return s[f++];
                    })
                  )).name = "Invariant Violation";
                }
                throw ((l.framesToPop = 1), l);
              }
            };
          },
          function(e, t, n) {
            "use strict";
            var r = n(4);
            e.exports = r;
          },
          function(e, t) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n, r, a) {};
          },
          function(e, t, n) {
            "use strict";
            var r = n(4),
              a = n(5),
              o = n(7);
            e.exports = function() {
              function e(e, t, n, r, i, u) {
                u !== o &&
                  a(
                    !1,
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
              }
              function t() {
                return e;
              }
              e.isRequired = e;
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t
              };
              return (n.checkPropTypes = r), (n.PropTypes = n), n;
            };
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function() {
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
              a = n(1),
              o = u(a),
              i = u(n(2));
            function u(e) {
              return e && e.__esModule ? e : { default: e };
            }
            n(11);
            var c = (function(e) {
              function t(e) {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function(e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                );
                return (
                  (n._isReRenderingCursor = !1),
                  (n.state = { shouldRender: n.props.show }),
                  n
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
                r(t, [
                  {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                      var t = this;
                      !this.props.isDone &&
                        e.isDone &&
                        this.props.hideWhenDone &&
                        setTimeout(function() {
                          return t.setState({ shouldRender: !1 });
                        }, this.props.hideWhenDoneDelay);
                    }
                  },
                  {
                    key: "componentDidUpdate",
                    value: function() {
                      var e = this.props,
                        t = e.show,
                        n = e.isDone;
                      t &&
                        (n ||
                          this._isReRenderingCursor ||
                          this._reRenderCursor());
                    }
                  },
                  {
                    key: "_reRenderCursor",
                    value: function() {
                      var e = this;
                      (this._isReRenderingCursor = !0),
                        this.setState({ shouldRender: !1 }, function() {
                          e.setState({ shouldRender: !0 }, function() {
                            e._isReRenderingCursor = !1;
                          });
                        });
                    }
                  },
                  {
                    key: "render",
                    value: function() {
                      if (this.state.shouldRender) {
                        var e = this.props.blink ? " Cursor--blinking" : "";
                        return o.default.createElement(
                          "span",
                          { className: "Cursor" + e },
                          this.props.element
                        );
                      }
                      return null;
                    }
                  }
                ]),
                t
              );
            })(a.Component);
            (c.propTypes = {
              blink: i.default.bool,
              show: i.default.bool,
              element: i.default.node,
              hideWhenDone: i.default.bool,
              hideWhenDoneDelay: i.default.number,
              isDone: i.default.bool
            }),
              (c.defaultProps = {
                blink: !0,
                show: !0,
                element: "|",
                hideWhenDone: !1,
                hideWhenDoneDelay: 1e3,
                isDone: !1
              }),
              (t.default = c);
          },
          function(e, t) {},
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = o(n(1)),
              a = o(n(2));
            function o(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var i = function() {
              return r.default.createElement("noscript", null);
            };
            (i.componentName = "Backspace"),
              (i.propTypes = {
                count: a.default.number,
                delay: a.default.number
              }),
              (i.defaultProps = { count: 1, delay: 0 }),
              (t.default = i);
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = o(n(1)),
              a = o(n(2));
            function o(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var i = function() {
              return r.default.createElement("noscript", null);
            };
            (i.componentName = "Delay"),
              (i.propTypes = { ms: a.default.number.isRequired }),
              (t.default = i);
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.sleep = void 0);
            var r = function(e, t) {
              if (Array.isArray(e)) return e;
              if (Symbol.iterator in Object(e))
                return (function(e, t) {
                  var n = [],
                    r = !0,
                    a = !1,
                    o = void 0;
                  try {
                    for (
                      var i, u = e[Symbol.iterator]();
                      !(r = (i = u.next()).done) &&
                      (n.push(i.value), !t || n.length !== t);
                      r = !0
                    );
                  } catch (c) {
                    (a = !0), (o = c);
                  } finally {
                    try {
                      !r && u.return && u.return();
                    } finally {
                      if (a) throw o;
                    }
                  }
                  return n;
                })(e, t);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
            (t.gaussianRnd = function(e, t) {
              for (var n = 0, r = 0; r < 12; r++) n += Math.random();
              return (n -= 6), Math.round(n * t) + e;
            }),
              (t.eachPromise = function(e, t) {
                for (
                  var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2;
                  a < n;
                  a++
                )
                  r[a - 2] = arguments[a];
                return Array.from(e).reduce(function(e, n, a) {
                  return e.then(function() {
                    return t.apply(void 0, [n, a].concat(r));
                  });
                }, Promise.resolve());
              }),
              (t.exclude = u),
              (t.isBackspaceElement = c),
              (t.isDelayElement = l),
              (t.extractTextFromElement = function(e) {
                var t = e ? [e] : [],
                  n = [];
                for (; t.length > 0; ) {
                  var r = t.pop();
                  if (i.default.isValidElement(r))
                    c(r) || l(r)
                      ? n.unshift(r)
                      : i.default.Children.forEach(r.props.children, function(
                          e
                        ) {
                          t.push(e);
                        });
                  else if (Array.isArray(r)) {
                    var a = !0,
                      o = !1,
                      u = void 0;
                    try {
                      for (
                        var s, f = r[Symbol.iterator]();
                        !(a = (s = f.next()).done);
                        a = !0
                      ) {
                        var p = s.value;
                        t.push(p);
                      }
                    } catch (d) {
                      (o = !0), (u = d);
                    } finally {
                      try {
                        !a && f.return && f.return();
                      } finally {
                        if (o) throw u;
                      }
                    }
                  } else n.unshift(r);
                }
                return n;
              }),
              (t.cloneElement = s),
              (t.cloneElementWithSpecifiedText = function(e) {
                var t = e.element,
                  n = e.textLines;
                if (!t) return;
                return (function e(t, n, a) {
                  if (a >= n.length) return [null, a];
                  var o = a,
                    u = function(t) {
                      var a = e(t, n, o),
                        i = r(a, 2),
                        u = i[0],
                        c = i[1];
                      return (o = c), u;
                    };
                  if (i.default.isValidElement(t) && !c(t) && !l(t)) {
                    var f = i.default.Children.map(t.props.children, u) || [];
                    return [s(t, f), o];
                  }
                  if (Array.isArray(t)) {
                    return [t.map(u), o];
                  }
                  return [n[o], o + 1];
                })(t, n, 0)[0];
              });
            var a,
              o = n(1),
              i = (a = o) && a.__esModule ? a : { default: a };
            t.sleep = function(e) {
              return new Promise(function(t) {
                return null != e ? setTimeout(t, e) : t();
              });
            };
            function u(e, t) {
              var n = {};
              for (var r in e) -1 === t.indexOf(r) && (n[r] = e[r]);
              return n;
            }
            function c(e) {
              return e && e.type && "Backspace" === e.type.componentName;
            }
            function l(e) {
              return e && e.type && "Delay" === e.type.componentName;
            }
            function s(e, t) {
              var n = e.type,
                r = u(e.props, ["children"]),
                a =
                  new Date().getUTCMilliseconds() +
                  Math.random() +
                  Math.random();
              return (
                (r.key = "Typist-element-" + n + "-" + a),
                i.default.createElement.apply(
                  i.default,
                  [n, r].concat(
                    (function(e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++)
                          n[t] = e[t];
                        return n;
                      }
                      return Array.from(e);
                    })(t)
                  )
                )
              );
            }
          }
        ]));
    },
    EH9Q: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Let’s Talk Privacy","description":"TBD","author":"@dsjen"}}}}'
      );
    },
    FLlr: function(e, t, n) {
      var r = n("XKFU");
      r(r.P, "String", { repeat: n("l0Rn") });
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
          var o = Object.keys(e),
            i = Object.keys(t);
          if (o.length !== i.length) return !1;
          for (
            var u = Object.prototype.hasOwnProperty.bind(t), c = 0;
            c < o.length;
            c++
          ) {
            var l = o[c];
            if (!u(l)) return !1;
            var s = e[l],
              f = t[l];
            if (
              !1 === (a = n ? n.call(r, s, f, l) : void 0) ||
              (void 0 === a && s !== f)
            )
              return !1;
          }
          return !0;
        });
    },
    OJrc: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAsSAAALEgHS3X78AAADrUlEQVQ4y62VXWgTWRiGJxXrD4soK3snrDeutBZ3RcFF6MWCiIpWjZZqJO0KXrl3C14o/txIYUFhkRUVd70R90akrKWxin9UvRDUdVmpmSYzk0gnyYSkJm3+OjPn8/1m58SYVuzFDjy8c77JefJles6pout6QMFlGEYPiAMXvACdXMfzFs6pqSllzhcmd2WzWTJNkyBwLMsi1GzQwc9Rn8dZKpU2Q9yHDIGDDYRQ5+yRwrssRNYAZzWfz3Oe5+cjIyMBX/iScNm2TUKIGbiuS8qfN7T5sbj+ykyl0Z3hsBBd2paVpVhMv8miYvHdQsg2gWS1WiWkDRwJupPpeh2WS8bpQiFH8bhuA6FpujMxkSHhJPbz80Jh8jtMGGMZJtVYiKwjx5xK57Zo249H1IHHTw3KWoZIpw1hZQy6FdGcvWH11+3dY0tZmrEml2DCW/rMpew+qCb3hC3q7lPd/nMxunw1Tqf6x8SukOp2HyoQnl+QfzwIj6KT68gr4I8Gfked87KyKxSj3SHV3rlfpS17orQlGBWAug5E7WBvknOYZSfOJFrmtGS4k64DKiEFuqmDsRPsHef6IH8uGFZb0EEAnXB+hKxxstBmuCN574+rwXCShbdYiDFP8hY4ZzOyruztM2k2gr1vqedwEcLoA08YUluwpHjNyrX7EbLGHQ58gptgGJzwX02gSTaPtyWDe+/9apo2t625dd+bxm0662fknsf1ANuqH3kRXGiCd951hZdXswz3YXAN/AbW+9IAv8hWvNDFyEVgcQOL/HorfzidTtd/EgRXisUi8SGSy+UomUzyvt8hF6uKiQZSbyKOuom8BxbI94T8gQ8S3u/+iVTNZDIsHAXzFcdxaDamp6e9rQRZqlwuLaj/VD32cz6fI90wpr2DxDCEoesgLhLa6Aql6bSo44/tcrnM0n9wv5GFsfHKVjOdI4hdQ9dY5KbMcdKS1ugzQa0KnyCVSmUGLKrVaiyrenu4kP2Khc6d79eNv7lvJVJF0hKmC5GTtiYo+/elATqrfMEdFvDtPKmCrINxye/upfy57vD6TjG0quIMbxC55+eEOXpHpF7/RZNPfnLp9ipyI+1RFi6D4EvkDFBfjlxa+/cX7y8thtpO0uO1JIZW2zT4NQRrcP+NoMGVLBN0dw3NaWG7t7/1/qdg0jF62MGTbTfSIfAFgkV8z4mxq/gnSECm5EN9KoBOPKGItB+nRx3oqg3CdmqAZV5+vrtIG4tkh/8J0SGg2fjfhe8B3Ci36aEbXRQAAAAASUVORK5CYII=","aspectRatio":0.8081705150976909,"src":"/static/f67bbe4735af03272f39b871f45e8f73/3c590/research-landing-section.png","srcSet":"/static/f67bbe4735af03272f39b871f45e8f73/59beb/research-landing-section.png 200w,\\n/static/f67bbe4735af03272f39b871f45e8f73/c0bbd/research-landing-section.png 400w,\\n/static/f67bbe4735af03272f39b871f45e8f73/3c590/research-landing-section.png 455w","sizes":"(max-width: 455px) 100vw, 455px"}}}}}'
      );
    },
    RXBc: function(e, t, n) {
      "use strict";
      n.r(t);
      n("q4sD");
      var r = n("q1tI"),
        a = n.n(r),
        o = n("Bl7J"),
        i = (n("vrFN"), n("ok1R")),
        u = n("rhny"),
        c = n("Wbzz"),
        l = n("eKp/"),
        s =
          (n("t51u"),
          function(e) {
            return a.a.createElement(
              i.a,
              { className: "py-5 justify-content-md-center" },
              a.a.createElement(
                u.a,
                { lg: 8, md: 9, className: "text-center" },
                a.a.createElement(
                  "div",
                  { className: "about-section" },
                  a.a.createElement(
                    "h2",
                    null,
                    a.a.createElement(
                      "span",
                      { className: "half-highlight" },
                      "About"
                    )
                  ),
                  a.a.createElement(
                    "p",
                    { className: "subheading-2" },
                    "Let's Talk Privacy explores how the implementation of privacy and data governance policies might impact a variety of fields. The project was started in 2019 by a group of researchers from MIT, Carnegie Mellon, and University of Florida."
                  ),
                  a.a.createElement(
                    c.Link,
                    {
                      to: "/about?ft=" + l.a,
                      className: "btn btn-secondary mt-3 py-3"
                    },
                    "Learn More"
                  )
                )
              )
            );
          }),
        f = n("1Yj4"),
        p = (n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("BLzl")),
        d = n("ChEw"),
        y =
          (n("WfgN"),
          function(e) {
            var t = e.policies;
            return a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                u.a,
                { xs: 12 },
                a.a.createElement(
                  "h2",
                  { className: "text-center pb-5" },
                  a.a.createElement(
                    "span",
                    { className: "half-highlight" },
                    "Explore privacy bills"
                  )
                )
              ),
              Object.keys(t).map(function(e) {
                return a.a.createElement(
                  u.a,
                  {
                    key: "policy-select-button-" + e,
                    md: 4,
                    sm: 12,
                    className: "pb-5 policy-cards"
                  },
                  a.a.createElement(
                    p.a,
                    { body: !0, className: "bill-card h-100" },
                    a.a.createElement(
                      d.a,
                      { className: "card-title mt-auto" },
                      a.a.createElement("h2", null, t[e].long)
                    ),
                    a.a.createElement(
                      c.Link,
                      {
                        className: "mt-auto arrow text-right",
                        to: "/bill-" + e + "/?ft=" + l.a
                      },
                      "⟶ ",
                      a.a.createElement(
                        "span",
                        { className: "sr-only" },
                        "Explore bill"
                      )
                    )
                  )
                );
              })
            );
          }),
        T = (n("XfO3"), n("HEwt"), n("a1Th"), n("rE2o"), n("ioFf"), n("8Z9I")),
        m = n.n(T);
      n("3pMz");
      function h(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      var E = function(e) {
          var t = e.prepend,
            n = h(e.words),
            r = n.pop();
          return a.a.createElement(
            m.a,
            { cursor: { hideWhenDone: !0 } },
            t + " ",
            n.map(function(e) {
              return a.a.createElement(
                "span",
                { className: "typing" },
                e,
                a.a.createElement(m.a.Backspace, {
                  count: e.length,
                  delay: 1e3
                })
              );
            }),
            a.a.createElement("span", { className: "typing" }, r)
          );
        },
        A = n("ru7J"),
        v = n("YuCR"),
        b = n("9eSz"),
        g = n.n(b),
        S = function() {
          var e = v.data;
          return a.a.createElement(
            "div",
            { className: "jumbotron-image" },
            a.a.createElement(g.a, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        },
        O =
          (n("ExPc"),
          function(e) {
            return a.a.createElement(
              "div",
              { className: "landing-jumbotron" },
              a.a.createElement(
                f.a,
                { fluid: !0 },
                a.a.createElement(
                  "div",
                  { className: "cover" },
                  a.a.createElement(
                    i.a,
                    { className: "align-middle d-flex title-row" },
                    a.a.createElement(
                      u.a,
                      { md: 6, sm: 8, className: "d-flex flex-column" },
                      a.a.createElement(
                        "div",
                        null,
                        a.a.createElement(
                          "h1",
                          { className: "title" },
                          a.a.createElement(E, {
                            prepend: "Privacy is",
                            words: [
                              "a human right",
                              "security",
                              "personal",
                              "mine",
                              "over-rated"
                            ]
                          })
                        )
                      ),
                      a.a.createElement(
                        "p",
                        { className: "mt-3 subheading-1 description" },
                        "Exploring how privacy and data governance policies translate into practice"
                      )
                    ),
                    a.a.createElement(
                      u.a,
                      { md: 6, sm: 4 },
                      a.a.createElement(S, null)
                    )
                  )
                ),
                a.a.createElement(
                  i.a,
                  { className: "py-5" },
                  a.a.createElement(y, { policies: A.d })
                )
              )
            );
          }),
        R = n("0+i1"),
        w = n("d2ic"),
        P = function(e) {
          return a.a.createElement(
            R.a,
            null,
            a.a.createElement(
              i.a,
              null,
              a.a.createElement(
                u.a,
                { md: 8 },
                a.a.createElement(
                  p.a,
                  { className: "p-5" },
                  a.a.createElement(
                    "h2",
                    null,
                    a.a.createElement(
                      "span",
                      { className: "half-highlight" },
                      "Our research"
                    )
                  ),
                  a.a.createElement(
                    "p",
                    null,
                    "We interviewed 41 people, from privacy experts to everyday people, to understand the potential impact of data privacy policies."
                  ),
                  a.a.createElement(
                    c.Link,
                    {
                      className: "btn btn-secondary py-3",
                      to: "/research?ft=" + l.a
                    },
                    "Read our report"
                  )
                )
              ),
              a.a.createElement(u.a, { md: 4 }, a.a.createElement(w.a, null))
            )
          );
        },
        _ = n("2qpI");
      t.default = function() {
        return Object(l.b)(l.a)
          ? a.a.createElement(
              "div",
              { className: "privacy-page" },
              a.a.createElement(_.a, null),
              a.a.createElement(O, null),
              a.a.createElement(P, null),
              a.a.createElement(o.a, { footer: !0 }, a.a.createElement(s, null))
            )
          : a.a.createElement(a.a.Fragment, null, "TBD");
      };
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
        o = f(n("q1tI")),
        i = f(n("17x9")),
        u = f(n("8+s/")),
        c = f(n("bmMU")),
        l = n("v1p5"),
        s = n("hFT/");
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      var d,
        y,
        T,
        m = (0, u.default)(
          l.reducePropsToState,
          l.handleClientStateChange,
          l.mapStateOnServer
        )(function() {
          return null;
        }),
        h =
          ((d = m),
          (T = y = (function(e) {
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
                return !(0, c.default)(this.props, e);
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
                  o = e.newChildProps,
                  i = e.nestedChildren;
                return r(
                  {},
                  a,
                  (((t = {})[n.type] = [].concat(a[n.type] || [], [
                    r({}, o, this.mapNestedChildrenToProps(n, i))
                  ])),
                  t)
                );
              }),
              (t.prototype.mapObjectTypeChildren = function(e) {
                var t,
                  n,
                  a = e.child,
                  o = e.newProps,
                  i = e.newChildProps,
                  u = e.nestedChildren;
                switch (a.type) {
                  case s.TAG_NAMES.TITLE:
                    return r(
                      {},
                      o,
                      (((t = {})[a.type] = u),
                      (t.titleAttributes = r({}, i)),
                      t)
                    );
                  case s.TAG_NAMES.BODY:
                    return r({}, o, { bodyAttributes: r({}, i) });
                  case s.TAG_NAMES.HTML:
                    return r({}, o, { htmlAttributes: r({}, i) });
                }
                return r({}, o, (((n = {})[a.type] = r({}, i)), n));
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
                  o.default.Children.forEach(e, function(e) {
                    if (e && e.props) {
                      var a = e.props,
                        o = a.children,
                        i = p(a, ["children"]),
                        u = (0, l.convertReactPropstoHtmlAttributes)(i);
                      switch ((n.warnOnInvalidChildren(e, o), e.type)) {
                        case s.TAG_NAMES.LINK:
                        case s.TAG_NAMES.META:
                        case s.TAG_NAMES.NOSCRIPT:
                        case s.TAG_NAMES.SCRIPT:
                        case s.TAG_NAMES.STYLE:
                          r = n.flattenArrayTypeChildren({
                            child: e,
                            arrayTypeChildren: r,
                            newChildProps: u,
                            nestedChildren: o
                          });
                          break;
                        default:
                          t = n.mapObjectTypeChildren({
                            child: e,
                            newProps: t,
                            newChildProps: u,
                            nestedChildren: o
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
                  n = p(e, ["children"]),
                  a = r({}, n);
                return (
                  t && (a = this.mapChildrenToProps(t, a)),
                  o.default.createElement(d, a)
                );
              }),
              a(t, null, [
                {
                  key: "canUseDOM",
                  set: function(e) {
                    d.canUseDOM = e;
                  }
                }
              ]),
              t
            );
          })(o.default.Component)),
          (y.propTypes = {
            base: i.default.object,
            bodyAttributes: i.default.object,
            children: i.default.oneOfType([
              i.default.arrayOf(i.default.node),
              i.default.node
            ]),
            defaultTitle: i.default.string,
            defer: i.default.bool,
            encodeSpecialCharacters: i.default.bool,
            htmlAttributes: i.default.object,
            link: i.default.arrayOf(i.default.object),
            meta: i.default.arrayOf(i.default.object),
            noscript: i.default.arrayOf(i.default.object),
            onChangeClientState: i.default.func,
            script: i.default.arrayOf(i.default.object),
            style: i.default.arrayOf(i.default.object),
            title: i.default.string,
            titleAttributes: i.default.object,
            titleTemplate: i.default.string
          }),
          (y.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (y.peek = d.peek),
          (y.rewind = function() {
            var e = d.rewind();
            return (
              e ||
                (e = (0, l.mapStateOnServer)({
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
          T);
      (h.renderStatic = h.rewind), (t.Helmet = h), (t.default = h);
    },
    YuCR: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAAEfElEQVQ4y42Ue0xbdRTHbyHM/UV8xYFj1gKlUEqHGOYWQ5yPzAnae6EtE/YQdA+MGZBuM4FlDuO28HIPdUMN2VjidDDnQNZeoE/a2/cK8pDxWDDZXOL+WDQGF0bbezy/u1utZH/4S74553cfn3zPOff+KAoXz+YmUuLC/EXUHtR+lAG1e5HN3xC7f9m6N6nIE0gs5QYlZK/hzBTttlBUHCBBjGtQzaiaKJu7g2eVpyKs6uQiu1YPxjVVcPXxOvieSqbiFs2ZE2Ow5dBC1BlUOsJWIuzw3YH1KWBMkYIxtf5lj1fVMPzVJbe54nqzo70NHVbtdPU8KjpM+A8UIZmo8//CleXo6g1hswArvrEdGDgS6oIiXwi0QQcMB+pgV8gIxW77b6XcUKUIlRAYKZ8Ak1AHUVvIzfus+jkwyWtJ/rrbGegOfgzoJrzR44u2O5oj52wNSww3FGb8w6D9yQO0y/K+AHWbE+PbQcD1WG7TX2xBGhillT9Y97rOeY9Ai6MtXOW6zH9nNfAd9ibijH/TbQXsX5j2WEHjMUdpt1n1oGRzAgFJYtAwm7cOTIpDdwc2HO61fnCv226ATttB/oJtP1/n7OJfc3OAL/EI4zWcBaGWJV0gQGKH4NJlSYi5+2faZB1zHN91IHgRDM6zkfdcPbDZPcxj+YClEmeA5YHGN8TTZlu07KPrQDusU/GlUlGTUshP2Y8mkfiq2/1u8UgQEBIhJTIIITDBlccMtM1KIAKwtH6G5L/i9eTlPRS+K5Lj9Mp1IxyBRGjihrPwJOIAQBMaBPoLP9DHgzzuo2X7ZoG2W29QD1s4+gQxZqDuo4SeaYS+WXih1FEEnkBYS4j0LqxvuAm003KWKZl/ia6ali8HCh+qmH+rm/CTlxZRoPGiw9ZrPD1g5wWHLdeieD1SWjsNmp9ZFaOfM9LbZ7Y9zKVEjCmom9oxrzBNHMISvW+Cp684I/Rpf5hpHQHdOIKrp28Lz2+d6WUqZ8tiE5YQhVmVBPofIVMWeqnn2HQciE836gH9lBeYxgnQDvpB1zUBzLHQAu0ydzBbZsfIs8zWmT66clZH/Z/1Cucp3Ry0f8kYxn8vvujrL2kdDZSUz7cIzirmJoVYOduLUB1xl4rKQSlQz6Lk+MdkgSknc4F9Pps3KbOgm1oFv1DJm/S3ejsbT5R8WGM8ume388KdH4tW63dMzoPrCZV229TVtypuCCWvQmUREOoZVIZ4YKTjQZGxZFLL7xiLsmEycbWmYm7o86bTWkMte7KmZrjnj771qW+/M3YbuMeyEcgiUHD4NCpXdJkuOo05VkRNuTkRk0oBFpm885P28onz+sIrnzZuvNR2SBM25mWeafpsOwzK1dU7fQWbym89GStZicpGyUSnCjFmPciV8ogpLwvGKSlYpZngX5kGgSQZqQBmqLSoSaWO/0OeEl/OEE9tmZjLRMdirpQt9BXK0VXGvf4CKYr0Wvpn7zpsjzLb+3X1CooCAUj6VoDKF53lodaKUR2X54nPqMWW5IuVkf0L5FwlBv8G+McTZJsfADYAAAAASUVORK5CYII=","aspectRatio":0.9510978043912176,"src":"/static/8208594814da54175426742bd82a57a1/a54c6/landing-page-background.png","srcSet":"/static/8208594814da54175426742bd82a57a1/59beb/landing-page-background.png 200w,\\n/static/8208594814da54175426742bd82a57a1/c0bbd/landing-page-background.png 400w,\\n/static/8208594814da54175426742bd82a57a1/a54c6/landing-page-background.png 800w,\\n/static/8208594814da54175426742bd82a57a1/f9f2d/landing-page-background.png 953w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
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
        o = Object.prototype.hasOwnProperty,
        i = "undefined" != typeof Element;
      e.exports = function(e, t) {
        try {
          return (function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              var u,
                c,
                l,
                s = r(t),
                f = r(n);
              if (s && f) {
                if ((c = t.length) != n.length) return !1;
                for (u = c; 0 != u--; ) if (!e(t[u], n[u])) return !1;
                return !0;
              }
              if (s != f) return !1;
              var p = t instanceof Date,
                d = n instanceof Date;
              if (p != d) return !1;
              if (p && d) return t.getTime() == n.getTime();
              var y = t instanceof RegExp,
                T = n instanceof RegExp;
              if (y != T) return !1;
              if (y && T) return t.toString() == n.toString();
              var m = a(t);
              if ((c = m.length) !== a(n).length) return !1;
              for (u = c; 0 != u--; ) if (!o.call(n, m[u])) return !1;
              if (i && t instanceof Element && n instanceof Element)
                return t === n;
              for (u = c; 0 != u--; )
                if (!(("_owner" === (l = m[u]) && t.$$typeof) || e(t[l], n[l])))
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
    d2ic: function(e, t, n) {
      "use strict";
      var r = n("OJrc"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("9eSz"),
        u = n.n(i);
      t.a = function() {
        var e = r.data;
        return o.a.createElement(
          "div",
          { className: "card-section-image" },
          o.a.createElement(u.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          })
        );
      };
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
    l0Rn: function(e, t, n) {
      "use strict";
      var r = n("RYi7"),
        a = n("vhPU");
      e.exports = function(e) {
        var t = String(a(this)),
          n = "",
          o = r(e);
        if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
        for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (n += t);
        return n;
      };
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
          o = c(n("q1tI")),
          i = c(n("MgzW")),
          u = n("hFT/");
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var l,
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
            var t = m(e, u.TAG_NAMES.TITLE),
              n = m(e, u.HELMET_PROPS.TITLE_TEMPLATE);
            if (n && t)
              return n.replace(/%s/g, function() {
                return t;
              });
            var r = m(e, u.HELMET_PROPS.DEFAULT_TITLE);
            return t || r || void 0;
          },
          p = function(e) {
            return m(e, u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {};
          },
          d = function(e, t) {
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
          y = function(e, t) {
            return t
              .filter(function(e) {
                return void 0 !== e[u.TAG_NAMES.BASE];
              })
              .map(function(e) {
                return e[u.TAG_NAMES.BASE];
              })
              .reverse()
              .reduce(function(t, n) {
                if (!t.length)
                  for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                    var o = r[a].toLowerCase();
                    if (-1 !== e.indexOf(o) && n[o]) return t.concat(n);
                  }
                return t;
              }, []);
          },
          T = function(e, t, n) {
            var a = {};
            return n
              .filter(function(t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    b(
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
                    var n = void 0, o = Object.keys(e), i = 0;
                    i < o.length;
                    i++
                  ) {
                    var c = o[i],
                      l = c.toLowerCase();
                    -1 === t.indexOf(l) ||
                      (n === u.TAG_PROPERTIES.REL &&
                        "canonical" === e[n].toLowerCase()) ||
                      (l === u.TAG_PROPERTIES.REL &&
                        "stylesheet" === e[l].toLowerCase()) ||
                      (n = l),
                      -1 === t.indexOf(c) ||
                        (c !== u.TAG_PROPERTIES.INNER_HTML &&
                          c !== u.TAG_PROPERTIES.CSS_TEXT &&
                          c !== u.TAG_PROPERTIES.ITEM_PROP) ||
                        (n = c);
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
                for (var o = Object.keys(r), c = 0; c < o.length; c++) {
                  var l = o[c],
                    s = (0, i.default)({}, a[l], r[l]);
                  a[l] = s;
                }
                return e;
              }, [])
              .reverse();
          },
          m = function(e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n];
              if (r.hasOwnProperty(t)) return r[t];
            }
            return null;
          },
          h =
            ((l = Date.now()),
            function(e) {
              var t = Date.now();
              t - l > 16
                ? ((l = t), e(t))
                : setTimeout(function() {
                    h(e);
                  }, 0);
            }),
          E = function(e) {
            return clearTimeout(e);
          },
          A =
            "undefined" != typeof window
              ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                h
              : e.requestAnimationFrame || h,
          v =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                E
              : e.cancelAnimationFrame || E,
          b = function(e) {
            return (
              console && "function" == typeof console.warn && console.warn(e)
            );
          },
          g = null,
          S = function(e, t) {
            var n = e.baseTag,
              r = e.bodyAttributes,
              a = e.htmlAttributes,
              o = e.linkTags,
              i = e.metaTags,
              c = e.noscriptTags,
              l = e.onChangeClientState,
              s = e.scriptTags,
              f = e.styleTags,
              p = e.title,
              d = e.titleAttributes;
            w(u.TAG_NAMES.BODY, r), w(u.TAG_NAMES.HTML, a), R(p, d);
            var y = {
                baseTag: P(u.TAG_NAMES.BASE, n),
                linkTags: P(u.TAG_NAMES.LINK, o),
                metaTags: P(u.TAG_NAMES.META, i),
                noscriptTags: P(u.TAG_NAMES.NOSCRIPT, c),
                scriptTags: P(u.TAG_NAMES.SCRIPT, s),
                styleTags: P(u.TAG_NAMES.STYLE, f)
              },
              T = {},
              m = {};
            Object.keys(y).forEach(function(e) {
              var t = y[e],
                n = t.newTags,
                r = t.oldTags;
              n.length && (T[e] = n), r.length && (m[e] = y[e].oldTags);
            }),
              t && t(),
              l(e, T, m);
          },
          O = function(e) {
            return Array.isArray(e) ? e.join("") : e;
          },
          R = function(e, t) {
            void 0 !== e && document.title !== e && (document.title = O(e)),
              w(u.TAG_NAMES.TITLE, t);
          },
          w = function(e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
              for (
                var r = n.getAttribute(u.HELMET_ATTRIBUTE),
                  a = r ? r.split(",") : [],
                  o = [].concat(a),
                  i = Object.keys(t),
                  c = 0;
                c < i.length;
                c++
              ) {
                var l = i[c],
                  s = t[l] || "";
                n.getAttribute(l) !== s && n.setAttribute(l, s),
                  -1 === a.indexOf(l) && a.push(l);
                var f = o.indexOf(l);
                -1 !== f && o.splice(f, 1);
              }
              for (var p = o.length - 1; p >= 0; p--) n.removeAttribute(o[p]);
              a.length === o.length
                ? n.removeAttribute(u.HELMET_ATTRIBUTE)
                : n.getAttribute(u.HELMET_ATTRIBUTE) !== i.join(",") &&
                  n.setAttribute(u.HELMET_ATTRIBUTE, i.join(","));
            }
          },
          P = function(e, t) {
            var n = document.head || document.querySelector(u.TAG_NAMES.HEAD),
              r = n.querySelectorAll(e + "[" + u.HELMET_ATTRIBUTE + "]"),
              a = Array.prototype.slice.call(r),
              o = [],
              i = void 0;
            return (
              t &&
                t.length &&
                t.forEach(function(t) {
                  var n = document.createElement(e);
                  for (var r in t)
                    if (t.hasOwnProperty(r))
                      if (r === u.TAG_PROPERTIES.INNER_HTML)
                        n.innerHTML = t.innerHTML;
                      else if (r === u.TAG_PROPERTIES.CSS_TEXT)
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText));
                      else {
                        var c = void 0 === t[r] ? "" : t[r];
                        n.setAttribute(r, c);
                      }
                  n.setAttribute(u.HELMET_ATTRIBUTE, "true"),
                    a.some(function(e, t) {
                      return (i = t), n.isEqualNode(e);
                    })
                      ? a.splice(i, 1)
                      : o.push(n);
                }),
              a.forEach(function(e) {
                return e.parentNode.removeChild(e);
              }),
              o.forEach(function(e) {
                return n.appendChild(e);
              }),
              { oldTags: a, newTags: o }
            );
          },
          _ = function(e) {
            return Object.keys(e).reduce(function(t, n) {
              var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
              return t ? t + " " + r : r;
            }, "");
          },
          M = function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(e).reduce(function(t, n) {
              return (t[u.REACT_TAG_MAP[n] || n] = e[n]), t;
            }, t);
          },
          I = function(e, t, n) {
            switch (e) {
              case u.TAG_NAMES.TITLE:
                return {
                  toComponent: function() {
                    return (
                      (e = t.title),
                      (n = t.titleAttributes),
                      ((r = { key: e })[u.HELMET_ATTRIBUTE] = !0),
                      (a = M(n, r)),
                      [o.default.createElement(u.TAG_NAMES.TITLE, a, e)]
                    );
                    var e, n, r, a;
                  },
                  toString: function() {
                    return (function(e, t, n, r) {
                      var a = _(n),
                        o = O(t);
                      return a
                        ? "<" +
                            e +
                            " " +
                            u.HELMET_ATTRIBUTE +
                            '="true" ' +
                            a +
                            ">" +
                            s(o, r) +
                            "</" +
                            e +
                            ">"
                        : "<" +
                            e +
                            " " +
                            u.HELMET_ATTRIBUTE +
                            '="true">' +
                            s(o, r) +
                            "</" +
                            e +
                            ">";
                    })(e, t.title, t.titleAttributes, n);
                  }
                };
              case u.ATTRIBUTE_NAMES.BODY:
              case u.ATTRIBUTE_NAMES.HTML:
                return {
                  toComponent: function() {
                    return M(t);
                  },
                  toString: function() {
                    return _(t);
                  }
                };
              default:
                return {
                  toComponent: function() {
                    return (function(e, t) {
                      return t.map(function(t, n) {
                        var r,
                          a = (((r = { key: n })[u.HELMET_ATTRIBUTE] = !0), r);
                        return (
                          Object.keys(t).forEach(function(e) {
                            var n = u.REACT_TAG_MAP[e] || e;
                            if (
                              n === u.TAG_PROPERTIES.INNER_HTML ||
                              n === u.TAG_PROPERTIES.CSS_TEXT
                            ) {
                              var r = t.innerHTML || t.cssText;
                              a.dangerouslySetInnerHTML = { __html: r };
                            } else a[n] = t[e];
                          }),
                          o.default.createElement(e, a)
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
                                e === u.TAG_PROPERTIES.INNER_HTML ||
                                e === u.TAG_PROPERTIES.CSS_TEXT
                              );
                            })
                            .reduce(function(e, t) {
                              var a =
                                void 0 === r[t]
                                  ? t
                                  : t + '="' + s(r[t], n) + '"';
                              return e ? e + " " + a : a;
                            }, ""),
                          o = r.innerHTML || r.cssText || "",
                          i = -1 === u.SELF_CLOSING_TAGS.indexOf(e);
                        return (
                          t +
                          "<" +
                          e +
                          " " +
                          u.HELMET_ATTRIBUTE +
                          '="true" ' +
                          a +
                          (i ? "/>" : ">" + o + "</" + e + ">")
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
            return (t[u.HTML_TAG_MAP[n] || n] = e[n]), t;
          }, t);
        }),
          (t.handleClientStateChange = function(e) {
            g && v(g),
              e.defer
                ? (g = A(function() {
                    S(e, function() {
                      g = null;
                    });
                  }))
                : (S(e), (g = null));
          }),
          (t.mapStateOnServer = function(e) {
            var t = e.baseTag,
              n = e.bodyAttributes,
              r = e.encode,
              a = e.htmlAttributes,
              o = e.linkTags,
              i = e.metaTags,
              c = e.noscriptTags,
              l = e.scriptTags,
              s = e.styleTags,
              f = e.title,
              p = void 0 === f ? "" : f,
              d = e.titleAttributes;
            return {
              base: I(u.TAG_NAMES.BASE, t, r),
              bodyAttributes: I(u.ATTRIBUTE_NAMES.BODY, n, r),
              htmlAttributes: I(u.ATTRIBUTE_NAMES.HTML, a, r),
              link: I(u.TAG_NAMES.LINK, o, r),
              meta: I(u.TAG_NAMES.META, i, r),
              noscript: I(u.TAG_NAMES.NOSCRIPT, c, r),
              script: I(u.TAG_NAMES.SCRIPT, l, r),
              style: I(u.TAG_NAMES.STYLE, s, r),
              title: I(u.TAG_NAMES.TITLE, { title: p, titleAttributes: d }, r)
            };
          }),
          (t.reducePropsToState = function(e) {
            return {
              baseTag: y([u.TAG_PROPERTIES.HREF], e),
              bodyAttributes: d(u.ATTRIBUTE_NAMES.BODY, e),
              defer: m(e, u.HELMET_PROPS.DEFER),
              encode: m(e, u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
              htmlAttributes: d(u.ATTRIBUTE_NAMES.HTML, e),
              linkTags: T(
                u.TAG_NAMES.LINK,
                [u.TAG_PROPERTIES.REL, u.TAG_PROPERTIES.HREF],
                e
              ),
              metaTags: T(
                u.TAG_NAMES.META,
                [
                  u.TAG_PROPERTIES.NAME,
                  u.TAG_PROPERTIES.CHARSET,
                  u.TAG_PROPERTIES.HTTPEQUIV,
                  u.TAG_PROPERTIES.PROPERTY,
                  u.TAG_PROPERTIES.ITEM_PROP
                ],
                e
              ),
              noscriptTags: T(
                u.TAG_NAMES.NOSCRIPT,
                [u.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              onChangeClientState: p(e),
              scriptTags: T(
                u.TAG_NAMES.SCRIPT,
                [u.TAG_PROPERTIES.SRC, u.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              styleTags: T(u.TAG_NAMES.STYLE, [u.TAG_PROPERTIES.CSS_TEXT], e),
              title: f(e),
              titleAttributes: d(u.ATTRIBUTE_NAMES.TITLE, e)
            };
          }),
          (t.requestAnimationFrame = A),
          (t.warn = b);
      }.call(this, n("yLpj")));
    },
    vrFN: function(e, t, n) {
      "use strict";
      var r = n("EH9Q"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("TJpk"),
        u = n.n(i);
      function c(e) {
        var t = e.description,
          n = e.lang,
          a = e.meta,
          i = e.title,
          c = r.data.site,
          l = t || c.siteMetadata.description;
        return o.a.createElement(u.a, {
          htmlAttributes: { lang: n },
          title: i,
          titleTemplate: "%s | " + c.siteMetadata.title,
          meta: [
            { name: "description", content: l },
            { property: "og:title", content: i },
            { property: "og:description", content: l },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: c.siteMetadata.author },
            { name: "twitter:title", content: i },
            { name: "twitter:description", content: l }
          ].concat(a)
        });
      }
      (c.defaultProps = { lang: "en", meta: [], description: "" }), (t.a = c);
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-34e4d6a656720bab0b14.js.map
