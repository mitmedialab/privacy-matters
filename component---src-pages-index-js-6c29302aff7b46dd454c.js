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
              l = p(n(2)),
              u = p(n(10)),
              c = p(n(12)),
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
              m = (function(e) {
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
                        var l = n.state.textLines.slice();
                        f.sleep(n.introducedDelay).then(function() {
                          n.introducedDelay = null;
                          var u = "🔙" === e;
                          if ("⏰" === e) i();
                          else {
                            if (u && a > 0) {
                              for (
                                var c = a - 1, s = l[c], f = c;
                                f >= 0 && (!(s.length > 0) || d.includes(s[0]));
                                f--
                              )
                                s = l[(c = f)];
                              l[c] = s.substr(0, s.length - 1);
                            } else l[a] += e;
                            n.setState({ textLines: l }, function() {
                              var l = n.delayGenerator(r, a, e, t);
                              o(e, t), setTimeout(i, l);
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
            (m.propTypes = {
              children: l.default.node,
              className: l.default.string,
              avgTypingDelay: l.default.number,
              stdTypingDelay: l.default.number,
              startDelay: l.default.number,
              cursor: l.default.object,
              onCharacterTyped: l.default.func,
              onLineTyped: l.default.func,
              onTypingDone: l.default.func,
              delayGenerator: l.default.func
            }),
              (m.defaultProps = {
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
              (t.default = m),
              (m.Backspace = c.default),
              (m.Delay = s.default);
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
              l = n(8);
            e.exports = function(e, t) {
              var n = "function" == typeof Symbol && Symbol.iterator,
                u = "@@iterator";
              var c = "<<anonymous>>",
                s = {
                  array: m("array"),
                  bool: m("boolean"),
                  func: m("function"),
                  number: m("number"),
                  object: m("object"),
                  string: m("string"),
                  symbol: m("symbol"),
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
                      var l = t[n];
                      if (!Array.isArray(l))
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            h(l) +
                            "` supplied to `" +
                            r +
                            "`, expected an array."
                        );
                      for (var u = 0; u < l.length; u++) {
                        var c = e(l, u, r, a, o + "[" + u + "]", i);
                        if (c instanceof Error) return c;
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
                            h(i) +
                            "` supplied to `" +
                            r +
                            "`, expected a single ReactElement."
                        );
                  }),
                  instanceOf: function(e) {
                    return d(function(t, n, r, a, o) {
                      if (!(t[n] instanceof e)) {
                        var i = e.name || c;
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            o +
                            "` of type `" +
                            (function(e) {
                              if (!e.constructor || !e.constructor.name)
                                return c;
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
                      var l = t[n],
                        u = h(l);
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
                      for (var c in l)
                        if (l.hasOwnProperty(c)) {
                          var s = e(l, c, r, a, o + "." + c, i);
                          if (s instanceof Error) return s;
                        }
                      return null;
                    });
                  },
                  oneOf: function(e) {
                    if (!Array.isArray(e)) return r.thatReturnsNull;
                    return d(function(t, n, r, a, o) {
                      for (var i = t[n], l = 0; l < e.length; l++)
                        if (f(i, e[l])) return null;
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
                            b(n),
                            t
                          ),
                          r.thatReturnsNull
                        );
                    }
                    return d(function(t, n, r, a, o) {
                      for (var l = 0; l < e.length; l++) {
                        if (null == (0, e[l])(t, n, r, a, o, i)) return null;
                      }
                      return new p(
                        "Invalid " + a + " `" + o + "` supplied to `" + r + "`."
                      );
                    });
                  },
                  shape: function(e) {
                    return d(function(t, n, r, a, o) {
                      var l = t[n],
                        u = h(l);
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
                      for (var c in e) {
                        var s = e[c];
                        if (s) {
                          var f = s(l, c, r, a, o + "." + c, i);
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
                function n(n, r, o, l, u, s, f) {
                  ((l = l || c), (s = s || o), f !== i) &&
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
                              s +
                              "` is marked as required in `" +
                              l +
                              "`, but its value is `null`."
                          )
                        : new p(
                            "The " +
                              u +
                              " `" +
                              s +
                              "` is marked as required in `" +
                              l +
                              "`, but its value is `undefined`."
                          )
                      : null
                    : e(r, o, l, u, s);
                }
                var r = n.bind(null, !1);
                return (r.isRequired = n.bind(null, !0)), r;
              }
              function m(e) {
                return d(function(t, n, r, a, o, i) {
                  var l = t[n];
                  return h(l) !== e
                    ? new p(
                        "Invalid " +
                          a +
                          " `" +
                          o +
                          "` of type `" +
                          v(l) +
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
              function h(e) {
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
              function v(e) {
                if (null == e) return "" + e;
                var t = h(e);
                if ("object" === t) {
                  if (e instanceof Date) return "date";
                  if (e instanceof RegExp) return "regexp";
                }
                return t;
              }
              function b(e) {
                var t = v(e);
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
                (s.checkPropTypes = l),
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
            e.exports = function(e, t, r, a, o, i, l, u) {
              if ((n(t), !e)) {
                var c;
                if (void 0 === t)
                  c = new Error(
                    "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                  );
                else {
                  var s = [r, a, o, i, l, u],
                    f = 0;
                  (c = new Error(
                    t.replace(/%s/g, function() {
                      return s[f++];
                    })
                  )).name = "Invariant Violation";
                }
                throw ((c.framesToPop = 1), c);
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
              function e(e, t, n, r, i, l) {
                l !== o &&
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
              o = l(a),
              i = l(n(2));
            function l(e) {
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
                      var i, l = e[Symbol.iterator]();
                      !(r = (i = l.next()).done) &&
                      (n.push(i.value), !t || n.length !== t);
                      r = !0
                    );
                  } catch (u) {
                    (a = !0), (o = u);
                  } finally {
                    try {
                      !r && l.return && l.return();
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
              (t.exclude = l),
              (t.isBackspaceElement = u),
              (t.isDelayElement = c),
              (t.extractTextFromElement = function(e) {
                var t = e ? [e] : [],
                  n = [];
                for (; t.length > 0; ) {
                  var r = t.pop();
                  if (i.default.isValidElement(r))
                    u(r) || c(r)
                      ? n.unshift(r)
                      : i.default.Children.forEach(r.props.children, function(
                          e
                        ) {
                          t.push(e);
                        });
                  else if (Array.isArray(r)) {
                    var a = !0,
                      o = !1,
                      l = void 0;
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
                      (o = !0), (l = d);
                    } finally {
                      try {
                        !a && f.return && f.return();
                      } finally {
                        if (o) throw l;
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
                    l = function(t) {
                      var a = e(t, n, o),
                        i = r(a, 2),
                        l = i[0],
                        u = i[1];
                      return (o = u), l;
                    };
                  if (i.default.isValidElement(t) && !u(t) && !c(t)) {
                    var f = i.default.Children.map(t.props.children, l) || [];
                    return [s(t, f), o];
                  }
                  if (Array.isArray(t)) {
                    return [t.map(l), o];
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
            function l(e, t) {
              var n = {};
              for (var r in e) -1 === t.indexOf(r) && (n[r] = e[r]);
              return n;
            }
            function u(e) {
              return e && e.type && "Backspace" === e.type.componentName;
            }
            function c(e) {
              return e && e.type && "Delay" === e.type.componentName;
            }
            function s(e, t) {
              var n = e.type,
                r = l(e.props, ["children"]),
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
    FLlr: function(e, t, n) {
      var r = n("XKFU");
      r(r.P, "String", { repeat: n("l0Rn") });
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
        i = n("vrFN"),
        l = n("ok1R"),
        u = n("rhny"),
        c = n("Wbzz"),
        s = n("eKp/"),
        f =
          (n("t51u"),
          function(e) {
            return a.a.createElement(
              l.a,
              { className: "py-5 justify-content-md-center" },
              a.a.createElement(
                u.a,
                { lg: 8, md: 9, className: "text-center mb-4" },
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
                      to: "/about?ft=" + s.a,
                      className: "btn btn-secondary mt-3 py-2 px-4"
                    },
                    "Learn More"
                  )
                )
              )
            );
          }),
        p = n("1Yj4"),
        d = (n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("BLzl")),
        m = n("ChEw"),
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
                    "Explore Privacy Bills"
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
                    c.Link,
                    { to: "/bill-" + e + "/?ft=" + s.a },
                    a.a.createElement(
                      d.a,
                      { body: !0, className: "bill-card h-100 clickable" },
                      a.a.createElement(
                        m.a,
                        { className: "card-title mt-auto" },
                        a.a.createElement("h2", null, t[e].long)
                      ),
                      a.a.createElement(
                        "span",
                        { className: "mt-auto arrow text-right" },
                        "⟶ ",
                        a.a.createElement(
                          "span",
                          { className: "sr-only" },
                          "Explore bill"
                        )
                      )
                    )
                  )
                );
              })
            );
          }),
        h = (n("XfO3"), n("HEwt"), n("a1Th"), n("rE2o"), n("ioFf"), n("8Z9I")),
        v = n.n(h);
      n("3pMz");
      function b(e) {
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
      var g = function(e) {
          var t = e.prepend,
            n = b(e.words),
            r = n.pop();
          return a.a.createElement(
            v.a,
            { cursor: { hideWhenDone: !0 } },
            t + " ",
            n.map(function(e) {
              return a.a.createElement(
                "span",
                { className: "typing", key: e },
                e,
                a.a.createElement(v.a.Backspace, {
                  count: e.length,
                  delay: 1e3
                })
              );
            }),
            a.a.createElement("span", { className: "typing" }, r)
          );
        },
        E = n("ru7J"),
        A = [
          "Compliance",
          "A business decision",
          "A human right",
          "Hard to define",
          "Multi-dimensional",
          "Personal control",
          "Consent",
          "Protection of data",
          "Managing my information",
          "Autonomy",
          "Trust",
          "Vulnerability",
          "Choice",
          "Information",
          "Important",
          "Knowing what’s shared",
          "Ownership of data",
          "Protecting information",
          "Agency over data",
          "A personal choice"
        ],
        w = n("YuCR"),
        x = n("9eSz"),
        T = n.n(x),
        O = function() {
          var e = w.data;
          return a.a.createElement(
            "div",
            { className: "jumbotron-image" },
            a.a.createElement(T.a, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        },
        D =
          (n("ExPc"),
          function(e) {
            return a.a.createElement(
              "div",
              { className: "landing-jumbotron" },
              a.a.createElement(
                p.a,
                { fluid: !0 },
                a.a.createElement(
                  "div",
                  { className: "cover" },
                  a.a.createElement(
                    l.a,
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
                          a.a.createElement(g, {
                            prepend: "Privacy is",
                            words: A
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
                      { md: 6, sm: 4, className: "image-column" },
                      a.a.createElement(O, null)
                    )
                  )
                ),
                a.a.createElement(
                  l.a,
                  { className: "py-5 mt-4" },
                  a.a.createElement(y, { policies: E.d })
                )
              )
            );
          }),
        S = n("0+i1"),
        R = n("d2ic"),
        N = function(e) {
          return a.a.createElement(
            S.a,
            null,
            a.a.createElement(
              l.a,
              null,
              a.a.createElement(
                u.a,
                { md: 5 },
                a.a.createElement(
                  d.a,
                  { className: "p-5" },
                  a.a.createElement(
                    "div",
                    { className: "p-2" },
                    a.a.createElement(
                      "h2",
                      null,
                      a.a.createElement(
                        "span",
                        { className: "half-highlight" },
                        "Our Research"
                      )
                    ),
                    a.a.createElement(
                      "p",
                      { className: "subheading-2" },
                      "We interviewed 41 people, from privacy experts to everyday people, to understand their views on privacy and the ways that different policies could impact their work."
                    ),
                    a.a.createElement(
                      c.Link,
                      {
                        className: "btn btn-secondary mt-3 py-2 px-4",
                        to: "/research?ft=" + s.a
                      },
                      "Read our report"
                    )
                  )
                )
              ),
              a.a.createElement(
                u.a,
                { md: 7, className: "research-image-col" },
                a.a.createElement(R.a, null)
              )
            )
          );
        },
        P = n("2qpI"),
        k = n("Se02");
      t.default = function() {
        return Object(s.b)(s.a)
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(i.a, null),
              a.a.createElement(
                "div",
                { className: "privacy-page" },
                a.a.createElement(P.a, null),
                a.a.createElement(D, null),
                a.a.createElement(
                  "div",
                  { className: "py-5" },
                  a.a.createElement(N, null)
                ),
                a.a.createElement(o.a, null, a.a.createElement(f, null)),
                a.a.createElement(k.a, null),
                a.a.createElement(o.a, { footer: !0 })
              )
            )
          : a.a.createElement(a.a.Fragment, null, "TBD");
      };
    },
    Se02: function(e, t, n) {
      "use strict";
      var r = n("q1tI"),
        a = n.n(r),
        o = n("ok1R"),
        i = n("rhny"),
        l = n("BLzl"),
        u = n("Wbzz"),
        c = n("0+i1");
      n("91YG");
      t.a = function(e) {
        return a.a.createElement(
          c.a,
          null,
          a.a.createElement(
            o.a,
            { className: "my-5 contact-us" },
            a.a.createElement(
              i.a,
              { md: 8 },
              a.a.createElement(
                l.a,
                { className: "p-5" },
                a.a.createElement(
                  "h2",
                  null,
                  a.a.createElement(
                    "span",
                    { className: "half-highlight" },
                    "Let’s Talk Privacy (and More)"
                  )
                ),
                a.a.createElement(
                  "p",
                  { className: "pt-2 pb-3 subheading-2" },
                  "Have thoughts on our research? ",
                  a.a.createElement("br", null),
                  "Interested in collaborating with us? ",
                  a.a.createElement("br", null),
                  "We want to hear from you!"
                ),
                a.a.createElement(
                  u.Link,
                  { className: "btn btn-secondary py-2" },
                  a.a.createElement(
                    "a",
                    {
                      href: "mailto:letstalkprivacy@media.mit.edu",
                      target: "_top"
                    },
                    "Shoot us an email"
                  )
                )
              )
            )
          )
        );
      };
    },
    YuCR: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAAEfElEQVQ4y42Ue0xbdRTHbyHM/UV8xYFj1gKlUEqHGOYWQ5yPzAnae6EtE/YQdA+MGZBuM4FlDuO28HIPdUMN2VjidDDnQNZeoE/a2/cK8pDxWDDZXOL+WDQGF0bbezy/u1utZH/4S74553cfn3zPOff+KAoXz+YmUuLC/EXUHtR+lAG1e5HN3xC7f9m6N6nIE0gs5QYlZK/hzBTttlBUHCBBjGtQzaiaKJu7g2eVpyKs6uQiu1YPxjVVcPXxOvieSqbiFs2ZE2Ow5dBC1BlUOsJWIuzw3YH1KWBMkYIxtf5lj1fVMPzVJbe54nqzo70NHVbtdPU8KjpM+A8UIZmo8//CleXo6g1hswArvrEdGDgS6oIiXwi0QQcMB+pgV8gIxW77b6XcUKUIlRAYKZ8Ak1AHUVvIzfus+jkwyWtJ/rrbGegOfgzoJrzR44u2O5oj52wNSww3FGb8w6D9yQO0y/K+AHWbE+PbQcD1WG7TX2xBGhillT9Y97rOeY9Ai6MtXOW6zH9nNfAd9ibijH/TbQXsX5j2WEHjMUdpt1n1oGRzAgFJYtAwm7cOTIpDdwc2HO61fnCv226ATttB/oJtP1/n7OJfc3OAL/EI4zWcBaGWJV0gQGKH4NJlSYi5+2faZB1zHN91IHgRDM6zkfdcPbDZPcxj+YClEmeA5YHGN8TTZlu07KPrQDusU/GlUlGTUshP2Y8mkfiq2/1u8UgQEBIhJTIIITDBlccMtM1KIAKwtH6G5L/i9eTlPRS+K5Lj9Mp1IxyBRGjihrPwJOIAQBMaBPoLP9DHgzzuo2X7ZoG2W29QD1s4+gQxZqDuo4SeaYS+WXih1FEEnkBYS4j0LqxvuAm003KWKZl/ia6ali8HCh+qmH+rm/CTlxZRoPGiw9ZrPD1g5wWHLdeieD1SWjsNmp9ZFaOfM9LbZ7Y9zKVEjCmom9oxrzBNHMISvW+Cp684I/Rpf5hpHQHdOIKrp28Lz2+d6WUqZ8tiE5YQhVmVBPofIVMWeqnn2HQciE836gH9lBeYxgnQDvpB1zUBzLHQAu0ydzBbZsfIs8zWmT66clZH/Z/1Cucp3Ry0f8kYxn8vvujrL2kdDZSUz7cIzirmJoVYOduLUB1xl4rKQSlQz6Lk+MdkgSknc4F9Pps3KbOgm1oFv1DJm/S3ejsbT5R8WGM8ume388KdH4tW63dMzoPrCZV229TVtypuCCWvQmUREOoZVIZ4YKTjQZGxZFLL7xiLsmEycbWmYm7o86bTWkMte7KmZrjnj771qW+/M3YbuMeyEcgiUHD4NCpXdJkuOo05VkRNuTkRk0oBFpm885P28onz+sIrnzZuvNR2SBM25mWeafpsOwzK1dU7fQWbym89GStZicpGyUSnCjFmPciV8ogpLwvGKSlYpZngX5kGgSQZqQBmqLSoSaWO/0OeEl/OEE9tmZjLRMdirpQt9BXK0VXGvf4CKYr0Wvpn7zpsjzLb+3X1CooCAUj6VoDKF53lodaKUR2X54nPqMWW5IuVkf0L5FwlBv8G+McTZJsfADYAAAAASUVORK5CYII=","aspectRatio":0.9510978043912176,"src":"/static/8208594814da54175426742bd82a57a1/a54c6/landing-page-background.png","srcSet":"/static/8208594814da54175426742bd82a57a1/59beb/landing-page-background.png 200w,\\n/static/8208594814da54175426742bd82a57a1/c0bbd/landing-page-background.png 400w,\\n/static/8208594814da54175426742bd82a57a1/a54c6/landing-page-background.png 800w,\\n/static/8208594814da54175426742bd82a57a1/f9f2d/landing-page-background.png 953w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    d2ic: function(e, t, n) {
      "use strict";
      var r = n("OJrc"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("9eSz"),
        l = n.n(i);
      n("O3p0");
      t.a = function() {
        var e = r.data;
        return o.a.createElement(
          "div",
          { className: "card-section-image" },
          o.a.createElement(l.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          })
        );
      };
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
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-6c29302aff7b46dd454c.js.map