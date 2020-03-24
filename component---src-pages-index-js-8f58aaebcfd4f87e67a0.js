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
        c = r(n("Gytx"));
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
            s = void 0;
          function l() {
            (s = e(
              u.map(function(e) {
                return e.props;
              })
            )),
              f.canUseDOM ? t(s) : n && (s = n(s));
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
                return s;
              }),
              (t.rewind = function() {
                if (t.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = s;
                return (s = void 0), (u = []), e;
              }),
              (t.prototype.shouldComponentUpdate = function(e) {
                return !c(e, this.props);
              }),
              (t.prototype.componentWillMount = function() {
                u.push(this), l();
              }),
              (t.prototype.componentDidUpdate = function() {
                l();
              }),
              (t.prototype.componentWillUnmount = function() {
                var e = u.indexOf(this);
                u.splice(e, 1), l();
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
              c = p(n(2)),
              u = p(n(10)),
              s = p(n(12)),
              l = p(n(13)),
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
              A = (function(e) {
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
                        var c = n.state.textLines.slice();
                        f.sleep(n.introducedDelay).then(function() {
                          n.introducedDelay = null;
                          var u = "🔙" === e;
                          if ("⏰" === e) i();
                          else {
                            if (u && a > 0) {
                              for (
                                var s = a - 1, l = c[s], f = s;
                                f >= 0 && (!(l.length > 0) || d.includes(l[0]));
                                f--
                              )
                                l = c[(s = f)];
                              c[s] = l.substr(0, l.length - 1);
                            } else c[a] += e;
                            n.setState({ textLines: c }, function() {
                              var c = n.delayGenerator(r, a, e, t);
                              o(e, t), setTimeout(i, c);
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
                            u.default,
                            r({ isDone: a }, n)
                          )
                        );
                      }
                    }
                  ]),
                  t
                );
              })(o.Component);
            (A.propTypes = {
              children: c.default.node,
              className: c.default.string,
              avgTypingDelay: c.default.number,
              stdTypingDelay: c.default.number,
              startDelay: c.default.number,
              cursor: c.default.object,
              onCharacterTyped: c.default.func,
              onLineTyped: c.default.func,
              onTypingDone: c.default.func,
              delayGenerator: c.default.func
            }),
              (A.defaultProps = {
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
              (t.default = A),
              (A.Backspace = s.default),
              (A.Delay = l.default);
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
              c = n(8);
            e.exports = function(e, t) {
              var n = "function" == typeof Symbol && Symbol.iterator,
                u = "@@iterator";
              var s = "<<anonymous>>",
                l = {
                  array: A("array"),
                  bool: A("boolean"),
                  func: A("function"),
                  number: A("number"),
                  object: A("object"),
                  string: A("string"),
                  symbol: A("symbol"),
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
                      var c = t[n];
                      if (!Array.isArray(c))
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            T(c) +
                            "` supplied to `" +
                            r +
                            "`, expected an array."
                        );
                      for (var u = 0; u < c.length; u++) {
                        var s = e(c, u, r, a, o + "[" + u + "]", i);
                        if (s instanceof Error) return s;
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
                            T(i) +
                            "` supplied to `" +
                            r +
                            "`, expected a single ReactElement."
                        );
                  }),
                  instanceOf: function(e) {
                    return d(function(t, n, r, a, o) {
                      if (!(t[n] instanceof e)) {
                        var i = e.name || s;
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            (function(e) {
                              if (!e.constructor || !e.constructor.name)
                                return s;
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
                    return y(e[t])
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
                      var c = t[n],
                        u = T(c);
                      if ("object" !== u)
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            u +
                            "` supplied to `" +
                            r +
                            "`, expected an object."
                        );
                      for (var s in c)
                        if (c.hasOwnProperty(s)) {
                          var l = e(c, s, r, a, o + "." + s, i);
                          if (l instanceof Error) return l;
                        }
                      return null;
                    });
                  },
                  oneOf: function(e) {
                    if (!Array.isArray(e)) return r.thatReturnsNull;
                    return d(function(t, n, r, a, o) {
                      for (var i = t[n], c = 0; c < e.length; c++)
                        if (f(i, e[c])) return null;
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
                      for (var c = 0; c < e.length; c++) {
                        if (null == (0, e[c])(t, n, r, a, o, i)) return null;
                      }
                      return new p(
                        "Invalid " + a + " `" + o + "` supplied to `" + r + "`."
                      );
                    });
                  },
                  shape: function(e) {
                    return d(function(t, n, r, a, o) {
                      var c = t[n],
                        u = T(c);
                      if ("object" !== u)
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            u +
                            "` supplied to `" +
                            r +
                            "`, expected `object`."
                        );
                      for (var s in e) {
                        var l = e[s];
                        if (l) {
                          var f = l(c, s, r, a, o + "." + s, i);
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
                function n(n, r, o, c, u, l, f) {
                  ((c = c || s), (l = l || o), f !== i) &&
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
                              u +
                              " `" +
                              l +
                              "` is marked as required in `" +
                              c +
                              "`, but its value is `null`."
                          )
                        : new p(
                            "The " +
                              u +
                              " `" +
                              l +
                              "` is marked as required in `" +
                              c +
                              "`, but its value is `undefined`."
                          )
                      : null
                    : e(r, o, c, u, l);
                }
                var r = n.bind(null, !1);
                return (r.isRequired = n.bind(null, !0)), r;
              }
              function A(e) {
                return d(function(t, n, r, a, o, i) {
                  var c = t[n];
                  return T(c) !== e
                    ? new p(
                        "Invalid " +
                          a +
                          " `" +
                          o +
                          "` of type `" +
                          h(c) +
                          "` supplied to `" +
                          r +
                          "`, expected `" +
                          e +
                          "`."
                      )
                    : null;
                });
              }
              function y(t) {
                switch (typeof t) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !t;
                  case "object":
                    if (Array.isArray(t)) return t.every(y);
                    if (null === t || e(t)) return !0;
                    var r = (function(e) {
                      var t = e && ((n && e[n]) || e[u]);
                      if ("function" == typeof t) return t;
                    })(t);
                    if (!r) return !1;
                    var a,
                      o = r.call(t);
                    if (r !== t.entries) {
                      for (; !(a = o.next()).done; ) if (!y(a.value)) return !1;
                    } else
                      for (; !(a = o.next()).done; ) {
                        var i = a.value;
                        if (i && !y(i[1])) return !1;
                      }
                    return !0;
                  default:
                    return !1;
                }
              }
              function T(e) {
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
                var t = T(e);
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
                (l.checkPropTypes = c),
                (l.PropTypes = l),
                l
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
            e.exports = function(e, t, r, a, o, i, c, u) {
              if ((n(t), !e)) {
                var s;
                if (void 0 === t)
                  s = new Error(
                    "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                  );
                else {
                  var l = [r, a, o, i, c, u],
                    f = 0;
                  (s = new Error(
                    t.replace(/%s/g, function() {
                      return l[f++];
                    })
                  )).name = "Invariant Violation";
                }
                throw ((s.framesToPop = 1), s);
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
              function e(e, t, n, r, i, c) {
                c !== o &&
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
              o = c(a),
              i = c(n(2));
            function c(e) {
              return e && e.__esModule ? e : { default: e };
            }
            n(11);
            var u = (function(e) {
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
            (u.propTypes = {
              blink: i.default.bool,
              show: i.default.bool,
              element: i.default.node,
              hideWhenDone: i.default.bool,
              hideWhenDoneDelay: i.default.number,
              isDone: i.default.bool
            }),
              (u.defaultProps = {
                blink: !0,
                show: !0,
                element: "|",
                hideWhenDone: !1,
                hideWhenDoneDelay: 1e3,
                isDone: !1
              }),
              (t.default = u);
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
                      var i, c = e[Symbol.iterator]();
                      !(r = (i = c.next()).done) &&
                      (n.push(i.value), !t || n.length !== t);
                      r = !0
                    );
                  } catch (u) {
                    (a = !0), (o = u);
                  } finally {
                    try {
                      !r && c.return && c.return();
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
              (t.exclude = c),
              (t.isBackspaceElement = u),
              (t.isDelayElement = s),
              (t.extractTextFromElement = function(e) {
                var t = e ? [e] : [],
                  n = [];
                for (; t.length > 0; ) {
                  var r = t.pop();
                  if (i.default.isValidElement(r))
                    u(r) || s(r)
                      ? n.unshift(r)
                      : i.default.Children.forEach(r.props.children, function(
                          e
                        ) {
                          t.push(e);
                        });
                  else if (Array.isArray(r)) {
                    var a = !0,
                      o = !1,
                      c = void 0;
                    try {
                      for (
                        var l, f = r[Symbol.iterator]();
                        !(a = (l = f.next()).done);
                        a = !0
                      ) {
                        var p = l.value;
                        t.push(p);
                      }
                    } catch (d) {
                      (o = !0), (c = d);
                    } finally {
                      try {
                        !a && f.return && f.return();
                      } finally {
                        if (o) throw c;
                      }
                    }
                  } else n.unshift(r);
                }
                return n;
              }),
              (t.cloneElement = l),
              (t.cloneElementWithSpecifiedText = function(e) {
                var t = e.element,
                  n = e.textLines;
                if (!t) return;
                return (function e(t, n, a) {
                  if (a >= n.length) return [null, a];
                  var o = a,
                    c = function(t) {
                      var a = e(t, n, o),
                        i = r(a, 2),
                        c = i[0],
                        u = i[1];
                      return (o = u), c;
                    };
                  if (i.default.isValidElement(t) && !u(t) && !s(t)) {
                    var f = i.default.Children.map(t.props.children, c) || [];
                    return [l(t, f), o];
                  }
                  if (Array.isArray(t)) {
                    return [t.map(c), o];
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
            function c(e, t) {
              var n = {};
              for (var r in e) -1 === t.indexOf(r) && (n[r] = e[r]);
              return n;
            }
            function u(e) {
              return e && e.type && "Backspace" === e.type.componentName;
            }
            function s(e) {
              return e && e.type && "Delay" === e.type.componentName;
            }
            function l(e, t) {
              var n = e.type,
                r = c(e.props, ["children"]),
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
            var c = Object.prototype.hasOwnProperty.bind(t), u = 0;
            u < o.length;
            u++
          ) {
            var s = o[u];
            if (!c(s)) return !1;
            var l = e[s],
              f = t[s];
            if (
              !1 === (a = n ? n.call(r, l, f, s) : void 0) ||
              (void 0 === a && l !== f)
            )
              return !1;
          }
          return !0;
        });
    },
    HAIo: function(e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r),
        o = n("ok1R"),
        i = n("rhny"),
        c = n("kQZL"),
        u = n("9eSz"),
        s = n.n(u),
        l = function() {
          var e = c.data;
          return a.a.createElement(
            "div",
            { className: "" },
            a.a.createElement(s.a, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        };
      n("4GFT"),
        (t.a = function(e) {
          var t = e.standAlone,
            n = a.a.createElement(
              "span",
              { className: "half-highlight" },
              "About"
            );
          return a.a.createElement(
            "div",
            { id: "about", className: "about" },
            a.a.createElement(
              o.a,
              null,
              a.a.createElement(
                i.a,
                { xs: 12 },
                t && a.a.createElement("h1", null, n),
                !t && a.a.createElement("h2", null, n)
              )
            ),
            a.a.createElement(
              o.a,
              null,
              a.a.createElement(
                i.a,
                { xs: 12, md: 6, className: "order-1 order-md-2 pb-3" },
                a.a.createElement(l, null)
              ),
              a.a.createElement(
                i.a,
                { xs: 12, md: 6, className: "order-2 order-md-1" },
                a.a.createElement(
                  "p",
                  { className: "subheading-2" },
                  "Let’s Talk Privacy explores how the implementation of privacy and data governance policies might impact a variety of fields."
                ),
                a.a.createElement(
                  "p",
                  null,
                  "There have been dozens of draft bills on privacy and data governance policies. How do these policies translate in practice? How they might affect us? We interviewed 41 people, including lawyers, designers, engineers, civil rights advocates, policymakers, and stewards of sensitive data: social workers, pediatricians, librarians. These conversations revealed 1) the diverse definitions and contexts of privacy 2) a variety of responses to recent data governance and privacy draft bills, and 3) the biggest privacy-related challenges (and possible ways to solve them) in different fields."
                ),
                a.a.createElement(
                  "p",
                  null,
                  "We believe in transparency and in improving how we translate complex topics to the public. This project aims to better inform and engage everyday people -- the non-privacy related lawyers, technologists, researchers about some of the latest developments in policy. The project also aims to bring together cross-disciplinary insights to inform policymakers about how their bills can impact end users and people who manage sensitive data for a variety of marginalized and vulnerable communities."
                ),
                a.a.createElement(
                  "p",
                  null,
                  "This research reflects only a small portion of the diverse perspectives we can bring to data governance and policy making. We hope to spur more conversations, reveal new insights, and prompt positive action."
                )
              )
            )
          );
        });
    },
    IRj2: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Let’s Talk Privacy"}}}}'
      );
    },
    RXBc: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("IRj2"),
        a = (n("q4sD"), n("q1tI")),
        o = n.n(a),
        i = n("Wbzz"),
        c = n("Bl7J"),
        u = n("ezAz"),
        s = n("9eSz"),
        l = n.n(s),
        f = function() {
          var e = u.data;
          return o.a.createElement(l.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        p = n("vrFN"),
        d = n("HAIo"),
        A = n("1Yj4"),
        y = n("ok1R"),
        T = n("rhny"),
        h = (n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("BLzl")),
        E = n("ChEw"),
        m = n("eKp/"),
        b =
          (n("WfgN"),
          function(e) {
            var t = e.policies;
            return o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                T.a,
                { xs: 12 },
                o.a.createElement(
                  "h2",
                  { className: "text-center pb-5" },
                  o.a.createElement(
                    "span",
                    { className: "half-highlight" },
                    "Explore privacy bills"
                  )
                )
              ),
              Object.keys(t).map(function(e) {
                return o.a.createElement(
                  T.a,
                  {
                    key: "policy-select-button-" + e,
                    md: 4,
                    sm: 12,
                    className: "pb-5 policy-cards"
                  },
                  o.a.createElement(
                    h.a,
                    { body: !0, className: "bill-card h-100" },
                    o.a.createElement(
                      E.a,
                      { className: "card-title mt-auto" },
                      o.a.createElement("h2", null, t[e].long)
                    ),
                    o.a.createElement(
                      i.Link,
                      {
                        className: "mt-auto arrow text-right",
                        to: "/bill-" + e + "/?ft=" + m.a
                      },
                      "⟶ ",
                      o.a.createElement(
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
        v = (n("XfO3"), n("HEwt"), n("a1Th"), n("rE2o"), n("ioFf"), n("8Z9I")),
        g = n.n(v);
      n("3pMz");
      function S(e) {
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
      var w = function(e) {
          var t = e.prepend,
            n = S(e.words),
            r = n.pop();
          return o.a.createElement(
            g.a,
            { cursor: { hideWhenDone: !0 } },
            t + " ",
            n.map(function(e) {
              return o.a.createElement(
                "span",
                { className: "typing" },
                e,
                o.a.createElement(g.a.Backspace, {
                  count: e.length,
                  delay: 1e3
                })
              );
            }),
            o.a.createElement("span", { className: "typing" }, r)
          );
        },
        O = n("ru7J"),
        R = n("YuCR"),
        P = function() {
          var e = R.data;
          return o.a.createElement(l.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        _ =
          (n("ExPc"),
          function(e) {
            return o.a.createElement(
              "div",
              { className: "landing-jumbotron" },
              o.a.createElement(
                A.a,
                { fluid: !0 },
                o.a.createElement(
                  "div",
                  { className: "cover" },
                  o.a.createElement(
                    y.a,
                    { className: "align-middle d-flex title-row" },
                    o.a.createElement(
                      T.a,
                      { md: 6, className: "d-flex flex-column" },
                      o.a.createElement(
                        "div",
                        null,
                        o.a.createElement(
                          "h1",
                          { className: "title" },
                          o.a.createElement(w, {
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
                      o.a.createElement(
                        "p",
                        {
                          className: "mt-3 text-center subheading-1 description"
                        },
                        "Exploring how privacy and data governance policies translate into practice"
                      )
                    ),
                    o.a.createElement(
                      T.a,
                      { md: 6, className: "d-flex flex-column" },
                      o.a.createElement(P, null)
                    )
                  )
                ),
                o.a.createElement(
                  y.a,
                  { className: "py-5" },
                  o.a.createElement(b, { policies: O.d })
                )
              )
            );
          }),
        I = n("2qpI");
      t.default = function() {
        var e = r.data;
        return Object(m.b)(m.a)
          ? o.a.createElement(
              "div",
              { className: "privacy-page" },
              o.a.createElement(I.a, null),
              o.a.createElement(_, { siteTitle: e.site.siteMetadata.title }),
              o.a.createElement(
                c.a,
                { footer: !0 },
                o.a.createElement(d.a, null)
              )
            )
          : o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(p.a, { title: "Home" }),
              o.a.createElement("h1", null, "Hi people"),
              o.a.createElement("p", null, "Welcome to your new Gatsby site."),
              o.a.createElement("p", null, "Now go build something great."),
              o.a.createElement(
                "div",
                { style: { maxWidth: "300px", marginBottom: "1.45rem" } },
                o.a.createElement(f, null)
              ),
              o.a.createElement(i.Link, { to: "/page-2/" }, "Go to page 2")
            );
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
        c = f(n("8+s/")),
        u = f(n("bmMU")),
        s = n("v1p5"),
        l = n("hFT/");
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
        A,
        y,
        T = (0, c.default)(
          s.reducePropsToState,
          s.handleClientStateChange,
          s.mapStateOnServer
        )(function() {
          return null;
        }),
        h =
          ((d = T),
          (y = A = (function(e) {
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
                  case l.TAG_NAMES.SCRIPT:
                  case l.TAG_NAMES.NOSCRIPT:
                    return { innerHTML: t };
                  case l.TAG_NAMES.STYLE:
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
                  c = e.nestedChildren;
                switch (a.type) {
                  case l.TAG_NAMES.TITLE:
                    return r(
                      {},
                      o,
                      (((t = {})[a.type] = c),
                      (t.titleAttributes = r({}, i)),
                      t)
                    );
                  case l.TAG_NAMES.BODY:
                    return r({}, o, { bodyAttributes: r({}, i) });
                  case l.TAG_NAMES.HTML:
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
                        c = (0, s.convertReactPropstoHtmlAttributes)(i);
                      switch ((n.warnOnInvalidChildren(e, o), e.type)) {
                        case l.TAG_NAMES.LINK:
                        case l.TAG_NAMES.META:
                        case l.TAG_NAMES.NOSCRIPT:
                        case l.TAG_NAMES.SCRIPT:
                        case l.TAG_NAMES.STYLE:
                          r = n.flattenArrayTypeChildren({
                            child: e,
                            arrayTypeChildren: r,
                            newChildProps: c,
                            nestedChildren: o
                          });
                          break;
                        default:
                          t = n.mapObjectTypeChildren({
                            child: e,
                            newProps: t,
                            newChildProps: c,
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
          (A.propTypes = {
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
          (A.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (A.peek = d.peek),
          (A.rewind = function() {
            var e = d.rewind();
            return (
              e ||
                (e = (0, s.mapStateOnServer)({
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
          y);
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
              var c,
                u,
                s,
                l = r(t),
                f = r(n);
              if (l && f) {
                if ((u = t.length) != n.length) return !1;
                for (c = u; 0 != c--; ) if (!e(t[c], n[c])) return !1;
                return !0;
              }
              if (l != f) return !1;
              var p = t instanceof Date,
                d = n instanceof Date;
              if (p != d) return !1;
              if (p && d) return t.getTime() == n.getTime();
              var A = t instanceof RegExp,
                y = n instanceof RegExp;
              if (A != y) return !1;
              if (A && y) return t.toString() == n.toString();
              var T = a(t);
              if ((u = T.length) !== a(n).length) return !1;
              for (c = u; 0 != c--; ) if (!o.call(n, T[c])) return !1;
              if (i && t instanceof Element && n instanceof Element)
                return t === n;
              for (c = u; 0 != c--; )
                if (!(("_owner" === (s = T[c]) && t.$$typeof) || e(t[s], n[s])))
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
    ezAz: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'
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
    kQZL: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBAv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAZ8Tkrsf/8QAHBAAAAcBAQAAAAAAAAAAAAAAAAECAxESEwQi/9oACAEBAAEFAr2HWyc0UM/anjjVQ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhESISIxUXH/2gAIAQEABj8Cpuu6FKL2nA5GL8ND/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIWExQVFx/9oACAEBAAE/Ib0UV2VMkFKpeIn3fkU2aOqhOZjRCOoeT//aAAwDAQACAAMAAAAQ48//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEAAgEEAwAAAAAAAAAAAAABABFRIUFhgTFxsf/aAAgBAQABPxAa2kR6OOXEFUUH6u45iVe8LHslFKila3zCAIGK1DyYlsFWADaf/9k=","aspectRatio":1.2746331236897275,"src":"/static/1851fa4f9f9128732266ac89b5b6cb3d/4d2f6/about-page-cover.jpg","srcSet":"/static/1851fa4f9f9128732266ac89b5b6cb3d/ac08b/about-page-cover.jpg 225w,\\n/static/1851fa4f9f9128732266ac89b5b6cb3d/3643e/about-page-cover.jpg 450w,\\n/static/1851fa4f9f9128732266ac89b5b6cb3d/4d2f6/about-page-cover.jpg 900w,\\n/static/1851fa4f9f9128732266ac89b5b6cb3d/38a7d/about-page-cover.jpg 1350w,\\n/static/1851fa4f9f9128732266ac89b5b6cb3d/9882a/about-page-cover.jpg 1800w,\\n/static/1851fa4f9f9128732266ac89b5b6cb3d/01683/about-page-cover.jpg 3648w","sizes":"(max-width: 900px) 100vw, 900px"}}}}}'
      );
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
          o = u(n("q1tI")),
          i = u(n("MgzW")),
          c = n("hFT/");
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s,
          l = function(e) {
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
            var t = T(e, c.TAG_NAMES.TITLE),
              n = T(e, c.HELMET_PROPS.TITLE_TEMPLATE);
            if (n && t)
              return n.replace(/%s/g, function() {
                return t;
              });
            var r = T(e, c.HELMET_PROPS.DEFAULT_TITLE);
            return t || r || void 0;
          },
          p = function(e) {
            return T(e, c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {};
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
          A = function(e, t) {
            return t
              .filter(function(e) {
                return void 0 !== e[c.TAG_NAMES.BASE];
              })
              .map(function(e) {
                return e[c.TAG_NAMES.BASE];
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
          y = function(e, t, n) {
            var a = {};
            return n
              .filter(function(t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    v(
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
                    var u = o[i],
                      s = u.toLowerCase();
                    -1 === t.indexOf(s) ||
                      (n === c.TAG_PROPERTIES.REL &&
                        "canonical" === e[n].toLowerCase()) ||
                      (s === c.TAG_PROPERTIES.REL &&
                        "stylesheet" === e[s].toLowerCase()) ||
                      (n = s),
                      -1 === t.indexOf(u) ||
                        (u !== c.TAG_PROPERTIES.INNER_HTML &&
                          u !== c.TAG_PROPERTIES.CSS_TEXT &&
                          u !== c.TAG_PROPERTIES.ITEM_PROP) ||
                        (n = u);
                  }
                  if (!n || !e[n]) return !1;
                  var l = e[n].toLowerCase();
                  return (
                    a[n] || (a[n] = {}),
                    r[n] || (r[n] = {}),
                    !a[n][l] && ((r[n][l] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function(t) {
                    return e.push(t);
                  });
                for (var o = Object.keys(r), u = 0; u < o.length; u++) {
                  var s = o[u],
                    l = (0, i.default)({}, a[s], r[s]);
                  a[s] = l;
                }
                return e;
              }, [])
              .reverse();
          },
          T = function(e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n];
              if (r.hasOwnProperty(t)) return r[t];
            }
            return null;
          },
          h =
            ((s = Date.now()),
            function(e) {
              var t = Date.now();
              t - s > 16
                ? ((s = t), e(t))
                : setTimeout(function() {
                    h(e);
                  }, 0);
            }),
          E = function(e) {
            return clearTimeout(e);
          },
          m =
            "undefined" != typeof window
              ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                h
              : e.requestAnimationFrame || h,
          b =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                E
              : e.cancelAnimationFrame || E,
          v = function(e) {
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
              u = e.noscriptTags,
              s = e.onChangeClientState,
              l = e.scriptTags,
              f = e.styleTags,
              p = e.title,
              d = e.titleAttributes;
            R(c.TAG_NAMES.BODY, r), R(c.TAG_NAMES.HTML, a), O(p, d);
            var A = {
                baseTag: P(c.TAG_NAMES.BASE, n),
                linkTags: P(c.TAG_NAMES.LINK, o),
                metaTags: P(c.TAG_NAMES.META, i),
                noscriptTags: P(c.TAG_NAMES.NOSCRIPT, u),
                scriptTags: P(c.TAG_NAMES.SCRIPT, l),
                styleTags: P(c.TAG_NAMES.STYLE, f)
              },
              y = {},
              T = {};
            Object.keys(A).forEach(function(e) {
              var t = A[e],
                n = t.newTags,
                r = t.oldTags;
              n.length && (y[e] = n), r.length && (T[e] = A[e].oldTags);
            }),
              t && t(),
              s(e, y, T);
          },
          w = function(e) {
            return Array.isArray(e) ? e.join("") : e;
          },
          O = function(e, t) {
            void 0 !== e && document.title !== e && (document.title = w(e)),
              R(c.TAG_NAMES.TITLE, t);
          },
          R = function(e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
              for (
                var r = n.getAttribute(c.HELMET_ATTRIBUTE),
                  a = r ? r.split(",") : [],
                  o = [].concat(a),
                  i = Object.keys(t),
                  u = 0;
                u < i.length;
                u++
              ) {
                var s = i[u],
                  l = t[s] || "";
                n.getAttribute(s) !== l && n.setAttribute(s, l),
                  -1 === a.indexOf(s) && a.push(s);
                var f = o.indexOf(s);
                -1 !== f && o.splice(f, 1);
              }
              for (var p = o.length - 1; p >= 0; p--) n.removeAttribute(o[p]);
              a.length === o.length
                ? n.removeAttribute(c.HELMET_ATTRIBUTE)
                : n.getAttribute(c.HELMET_ATTRIBUTE) !== i.join(",") &&
                  n.setAttribute(c.HELMET_ATTRIBUTE, i.join(","));
            }
          },
          P = function(e, t) {
            var n = document.head || document.querySelector(c.TAG_NAMES.HEAD),
              r = n.querySelectorAll(e + "[" + c.HELMET_ATTRIBUTE + "]"),
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
                      if (r === c.TAG_PROPERTIES.INNER_HTML)
                        n.innerHTML = t.innerHTML;
                      else if (r === c.TAG_PROPERTIES.CSS_TEXT)
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText));
                      else {
                        var u = void 0 === t[r] ? "" : t[r];
                        n.setAttribute(r, u);
                      }
                  n.setAttribute(c.HELMET_ATTRIBUTE, "true"),
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
          I = function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(e).reduce(function(t, n) {
              return (t[c.REACT_TAG_MAP[n] || n] = e[n]), t;
            }, t);
          },
          M = function(e, t, n) {
            switch (e) {
              case c.TAG_NAMES.TITLE:
                return {
                  toComponent: function() {
                    return (
                      (e = t.title),
                      (n = t.titleAttributes),
                      ((r = { key: e })[c.HELMET_ATTRIBUTE] = !0),
                      (a = I(n, r)),
                      [o.default.createElement(c.TAG_NAMES.TITLE, a, e)]
                    );
                    var e, n, r, a;
                  },
                  toString: function() {
                    return (function(e, t, n, r) {
                      var a = _(n),
                        o = w(t);
                      return a
                        ? "<" +
                            e +
                            " " +
                            c.HELMET_ATTRIBUTE +
                            '="true" ' +
                            a +
                            ">" +
                            l(o, r) +
                            "</" +
                            e +
                            ">"
                        : "<" +
                            e +
                            " " +
                            c.HELMET_ATTRIBUTE +
                            '="true">' +
                            l(o, r) +
                            "</" +
                            e +
                            ">";
                    })(e, t.title, t.titleAttributes, n);
                  }
                };
              case c.ATTRIBUTE_NAMES.BODY:
              case c.ATTRIBUTE_NAMES.HTML:
                return {
                  toComponent: function() {
                    return I(t);
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
                          a = (((r = { key: n })[c.HELMET_ATTRIBUTE] = !0), r);
                        return (
                          Object.keys(t).forEach(function(e) {
                            var n = c.REACT_TAG_MAP[e] || e;
                            if (
                              n === c.TAG_PROPERTIES.INNER_HTML ||
                              n === c.TAG_PROPERTIES.CSS_TEXT
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
                                e === c.TAG_PROPERTIES.INNER_HTML ||
                                e === c.TAG_PROPERTIES.CSS_TEXT
                              );
                            })
                            .reduce(function(e, t) {
                              var a =
                                void 0 === r[t]
                                  ? t
                                  : t + '="' + l(r[t], n) + '"';
                              return e ? e + " " + a : a;
                            }, ""),
                          o = r.innerHTML || r.cssText || "",
                          i = -1 === c.SELF_CLOSING_TAGS.indexOf(e);
                        return (
                          t +
                          "<" +
                          e +
                          " " +
                          c.HELMET_ATTRIBUTE +
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
            return (t[c.HTML_TAG_MAP[n] || n] = e[n]), t;
          }, t);
        }),
          (t.handleClientStateChange = function(e) {
            g && b(g),
              e.defer
                ? (g = m(function() {
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
              u = e.noscriptTags,
              s = e.scriptTags,
              l = e.styleTags,
              f = e.title,
              p = void 0 === f ? "" : f,
              d = e.titleAttributes;
            return {
              base: M(c.TAG_NAMES.BASE, t, r),
              bodyAttributes: M(c.ATTRIBUTE_NAMES.BODY, n, r),
              htmlAttributes: M(c.ATTRIBUTE_NAMES.HTML, a, r),
              link: M(c.TAG_NAMES.LINK, o, r),
              meta: M(c.TAG_NAMES.META, i, r),
              noscript: M(c.TAG_NAMES.NOSCRIPT, u, r),
              script: M(c.TAG_NAMES.SCRIPT, s, r),
              style: M(c.TAG_NAMES.STYLE, l, r),
              title: M(c.TAG_NAMES.TITLE, { title: p, titleAttributes: d }, r)
            };
          }),
          (t.reducePropsToState = function(e) {
            return {
              baseTag: A([c.TAG_PROPERTIES.HREF], e),
              bodyAttributes: d(c.ATTRIBUTE_NAMES.BODY, e),
              defer: T(e, c.HELMET_PROPS.DEFER),
              encode: T(e, c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
              htmlAttributes: d(c.ATTRIBUTE_NAMES.HTML, e),
              linkTags: y(
                c.TAG_NAMES.LINK,
                [c.TAG_PROPERTIES.REL, c.TAG_PROPERTIES.HREF],
                e
              ),
              metaTags: y(
                c.TAG_NAMES.META,
                [
                  c.TAG_PROPERTIES.NAME,
                  c.TAG_PROPERTIES.CHARSET,
                  c.TAG_PROPERTIES.HTTPEQUIV,
                  c.TAG_PROPERTIES.PROPERTY,
                  c.TAG_PROPERTIES.ITEM_PROP
                ],
                e
              ),
              noscriptTags: y(
                c.TAG_NAMES.NOSCRIPT,
                [c.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              onChangeClientState: p(e),
              scriptTags: y(
                c.TAG_NAMES.SCRIPT,
                [c.TAG_PROPERTIES.SRC, c.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              styleTags: y(c.TAG_NAMES.STYLE, [c.TAG_PROPERTIES.CSS_TEXT], e),
              title: f(e),
              titleAttributes: d(c.ATTRIBUTE_NAMES.TITLE, e)
            };
          }),
          (t.requestAnimationFrame = m),
          (t.warn = v);
      }.call(this, n("yLpj")));
    },
    vrFN: function(e, t, n) {
      "use strict";
      var r = n("EH9Q"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("TJpk"),
        c = n.n(i);
      function u(e) {
        var t = e.description,
          n = e.lang,
          a = e.meta,
          i = e.title,
          u = r.data.site,
          s = t || u.siteMetadata.description;
        return o.a.createElement(c.a, {
          htmlAttributes: { lang: n },
          title: i,
          titleTemplate: "%s | " + u.siteMetadata.title,
          meta: [
            { name: "description", content: s },
            { property: "og:title", content: i },
            { property: "og:description", content: s },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: u.siteMetadata.author },
            { name: "twitter:title", content: i },
            { name: "twitter:description", content: s }
          ].concat(a)
        });
      }
      (u.defaultProps = { lang: "en", meta: [], description: "" }), (t.a = u);
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-8f58aaebcfd4f87e67a0.js.map
