(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
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
          var s = [],
            l = void 0;
          function A() {
            (l = e(
              s.map(function(e) {
                return e.props;
              })
            )),
              u.canUseDOM ? t(l) : n && (l = n(l));
          }
          var u = (function(e) {
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
                return (l = void 0), (s = []), e;
              }),
              (t.prototype.shouldComponentUpdate = function(e) {
                return !c(e, this.props);
              }),
              (t.prototype.componentWillMount = function() {
                s.push(this), A();
              }),
              (t.prototype.componentDidUpdate = function() {
                A();
              }),
              (t.prototype.componentWillUnmount = function() {
                var e = s.indexOf(this);
                s.splice(e, 1), A();
              }),
              (t.prototype.render = function() {
                return o.createElement(r, this.props);
              }),
              t
            );
          })(a.Component);
          return (
            (u.displayName =
              "SideEffect(" +
              (function(e) {
                return e.displayName || e.name || "Component";
              })(r) +
              ")"),
            (u.canUseDOM = i.canUseDOM),
            u
          );
        };
      };
    },
    EH9Q: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Let’s Talk Privacy","description":"TBD","author":"@dsjen"}}}}'
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
          var o = Object.keys(e),
            i = Object.keys(t);
          if (o.length !== i.length) return !1;
          for (
            var c = Object.prototype.hasOwnProperty.bind(t), s = 0;
            s < o.length;
            s++
          ) {
            var l = o[s];
            if (!c(l)) return !1;
            var A = e[l],
              u = t[l];
            if (
              !1 === (a = n ? n.call(r, A, u, l) : void 0) ||
              (void 0 === a && A !== u)
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
        s = n("9eSz"),
        l = n.n(s),
        A = function() {
          var e = c.data;
          return a.a.createElement(
            "div",
            { className: "" },
            a.a.createElement(l.a, {
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
                a.a.createElement(A, null)
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
        s = n("ezAz"),
        l = n("9eSz"),
        A = n.n(l),
        u = function() {
          var e = s.data;
          return o.a.createElement(A.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        f = n("vrFN"),
        d = n("HAIo"),
        p = n("1Yj4"),
        E = n("ok1R"),
        T = n("rhny"),
        m = (n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("BLzl")),
        h = n("ChEw"),
        b = n("eKp/"),
        y =
          (n("WfgN"),
          function(e) {
            var t = e.policies;
            return o.a.createElement(
              o.a.Fragment,
              null,
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
                    m.a,
                    { body: !0, className: "bill-card h-100" },
                    o.a.createElement(
                      h.a,
                      { className: "card-title mt-auto" },
                      o.a.createElement("h2", null, t[e].long)
                    ),
                    o.a.createElement(
                      i.Link,
                      {
                        className: "mt-auto arrow text-right",
                        to: "/bill-" + e + "/?ft=" + b.a
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
        g = n("ru7J"),
        v =
          (n("ExPc"),
          function(e) {
            var t = e.siteTitle;
            return o.a.createElement(
              "div",
              { className: "landing-jumbotron" },
              o.a.createElement(
                p.a,
                { fluid: !0 },
                o.a.createElement(
                  "div",
                  { className: "cover" },
                  o.a.createElement(
                    E.a,
                    { className: "align-middle d-flex title-row" },
                    o.a.createElement(
                      T.a,
                      {
                        md: 6,
                        className: "d-flex flex-column justify-content-start"
                      },
                      o.a.createElement(
                        "div",
                        null,
                        o.a.createElement(
                          "h1",
                          { className: "title" },
                          o.a.createElement(
                            "span",
                            { className: "half-highlight" },
                            t
                          )
                        )
                      )
                    )
                  ),
                  o.a.createElement(
                    E.a,
                    { className: "align-middle text-center d-flex" },
                    o.a.createElement(
                      T.a,
                      {
                        md: 6,
                        className:
                          "d-flex offset-md-6 flex-column justify-content-between"
                      },
                      o.a.createElement(
                        "div",
                        null,
                        o.a.createElement(
                          "p",
                          {
                            className: "mt-3 text-left subheading-1 description"
                          },
                          "Exploring how privacy and data governance policies translate into practice"
                        )
                      )
                    )
                  )
                ),
                o.a.createElement(
                  E.a,
                  { className: "py-5" },
                  o.a.createElement(y, {
                    policies: g.d,
                    onClick: function(e) {
                      return console.log(e);
                    }
                  })
                )
              )
            );
          }),
        S = n("2qpI");
      t.default = function() {
        var e = r.data;
        return Object(b.b)(b.a)
          ? o.a.createElement(
              "div",
              { className: "privacy-page" },
              o.a.createElement(S.a, null),
              o.a.createElement(v, { siteTitle: e.site.siteMetadata.title }),
              o.a.createElement(
                c.a,
                { backgroundClass: "secondary-background" },
                o.a.createElement(d.a, null)
              )
            )
          : o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(f.a, { title: "Home" }),
              o.a.createElement("h1", null, "Hi people"),
              o.a.createElement("p", null, "Welcome to your new Gatsby site."),
              o.a.createElement("p", null, "Now go build something great."),
              o.a.createElement(
                "div",
                { style: { maxWidth: "300px", marginBottom: "1.45rem" } },
                o.a.createElement(u, null)
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
        o = u(n("q1tI")),
        i = u(n("17x9")),
        c = u(n("8+s/")),
        s = u(n("bmMU")),
        l = n("v1p5"),
        A = n("hFT/");
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      var d,
        p,
        E,
        T = (0, c.default)(
          l.reducePropsToState,
          l.handleClientStateChange,
          l.mapStateOnServer
        )(function() {
          return null;
        }),
        m =
          ((d = T),
          (E = p = (function(e) {
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
                return !(0, s.default)(this.props, e);
              }),
              (t.prototype.mapNestedChildrenToProps = function(e, t) {
                if (!t) return null;
                switch (e.type) {
                  case A.TAG_NAMES.SCRIPT:
                  case A.TAG_NAMES.NOSCRIPT:
                    return { innerHTML: t };
                  case A.TAG_NAMES.STYLE:
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
                  case A.TAG_NAMES.TITLE:
                    return r(
                      {},
                      o,
                      (((t = {})[a.type] = c),
                      (t.titleAttributes = r({}, i)),
                      t)
                    );
                  case A.TAG_NAMES.BODY:
                    return r({}, o, { bodyAttributes: r({}, i) });
                  case A.TAG_NAMES.HTML:
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
                        i = f(a, ["children"]),
                        c = (0, l.convertReactPropstoHtmlAttributes)(i);
                      switch ((n.warnOnInvalidChildren(e, o), e.type)) {
                        case A.TAG_NAMES.LINK:
                        case A.TAG_NAMES.META:
                        case A.TAG_NAMES.NOSCRIPT:
                        case A.TAG_NAMES.SCRIPT:
                        case A.TAG_NAMES.STYLE:
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
                  n = f(e, ["children"]),
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
          (p.propTypes = {
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
          (p.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (p.peek = d.peek),
          (p.rewind = function() {
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
          E);
      (m.renderStatic = m.rewind), (t.Helmet = m), (t.default = m);
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
                s,
                l,
                A = r(t),
                u = r(n);
              if (A && u) {
                if ((s = t.length) != n.length) return !1;
                for (c = s; 0 != c--; ) if (!e(t[c], n[c])) return !1;
                return !0;
              }
              if (A != u) return !1;
              var f = t instanceof Date,
                d = n instanceof Date;
              if (f != d) return !1;
              if (f && d) return t.getTime() == n.getTime();
              var p = t instanceof RegExp,
                E = n instanceof RegExp;
              if (p != E) return !1;
              if (p && E) return t.toString() == n.toString();
              var T = a(t);
              if ((s = T.length) !== a(n).length) return !1;
              for (c = s; 0 != c--; ) if (!o.call(n, T[c])) return !1;
              if (i && t instanceof Element && n instanceof Element)
                return t === n;
              for (c = s; 0 != c--; )
                if (!(("_owner" === (l = T[c]) && t.$$typeof) || e(t[l], n[l])))
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
          o = s(n("q1tI")),
          i = s(n("MgzW")),
          c = n("hFT/");
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var l,
          A = function(e) {
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
          u = function(e) {
            var t = T(e, c.TAG_NAMES.TITLE),
              n = T(e, c.HELMET_PROPS.TITLE_TEMPLATE);
            if (n && t)
              return n.replace(/%s/g, function() {
                return t;
              });
            var r = T(e, c.HELMET_PROPS.DEFAULT_TITLE);
            return t || r || void 0;
          },
          f = function(e) {
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
          p = function(e, t) {
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
          E = function(e, t, n) {
            var a = {};
            return n
              .filter(function(t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    g(
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
                    var s = o[i],
                      l = s.toLowerCase();
                    -1 === t.indexOf(l) ||
                      (n === c.TAG_PROPERTIES.REL &&
                        "canonical" === e[n].toLowerCase()) ||
                      (l === c.TAG_PROPERTIES.REL &&
                        "stylesheet" === e[l].toLowerCase()) ||
                      (n = l),
                      -1 === t.indexOf(s) ||
                        (s !== c.TAG_PROPERTIES.INNER_HTML &&
                          s !== c.TAG_PROPERTIES.CSS_TEXT &&
                          s !== c.TAG_PROPERTIES.ITEM_PROP) ||
                        (n = s);
                  }
                  if (!n || !e[n]) return !1;
                  var A = e[n].toLowerCase();
                  return (
                    a[n] || (a[n] = {}),
                    r[n] || (r[n] = {}),
                    !a[n][A] && ((r[n][A] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function(t) {
                    return e.push(t);
                  });
                for (var o = Object.keys(r), s = 0; s < o.length; s++) {
                  var l = o[s],
                    A = (0, i.default)({}, a[l], r[l]);
                  a[l] = A;
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
          m =
            ((l = Date.now()),
            function(e) {
              var t = Date.now();
              t - l > 16
                ? ((l = t), e(t))
                : setTimeout(function() {
                    m(e);
                  }, 0);
            }),
          h = function(e) {
            return clearTimeout(e);
          },
          b =
            "undefined" != typeof window
              ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                m
              : e.requestAnimationFrame || m,
          y =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                h
              : e.cancelAnimationFrame || h,
          g = function(e) {
            return (
              console && "function" == typeof console.warn && console.warn(e)
            );
          },
          v = null,
          S = function(e, t) {
            var n = e.baseTag,
              r = e.bodyAttributes,
              a = e.htmlAttributes,
              o = e.linkTags,
              i = e.metaTags,
              s = e.noscriptTags,
              l = e.onChangeClientState,
              A = e.scriptTags,
              u = e.styleTags,
              f = e.title,
              d = e.titleAttributes;
            O(c.TAG_NAMES.BODY, r), O(c.TAG_NAMES.HTML, a), w(f, d);
            var p = {
                baseTag: N(c.TAG_NAMES.BASE, n),
                linkTags: N(c.TAG_NAMES.LINK, o),
                metaTags: N(c.TAG_NAMES.META, i),
                noscriptTags: N(c.TAG_NAMES.NOSCRIPT, s),
                scriptTags: N(c.TAG_NAMES.SCRIPT, A),
                styleTags: N(c.TAG_NAMES.STYLE, u)
              },
              E = {},
              T = {};
            Object.keys(p).forEach(function(e) {
              var t = p[e],
                n = t.newTags,
                r = t.oldTags;
              n.length && (E[e] = n), r.length && (T[e] = p[e].oldTags);
            }),
              t && t(),
              l(e, E, T);
          },
          R = function(e) {
            return Array.isArray(e) ? e.join("") : e;
          },
          w = function(e, t) {
            void 0 !== e && document.title !== e && (document.title = R(e)),
              O(c.TAG_NAMES.TITLE, t);
          },
          O = function(e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
              for (
                var r = n.getAttribute(c.HELMET_ATTRIBUTE),
                  a = r ? r.split(",") : [],
                  o = [].concat(a),
                  i = Object.keys(t),
                  s = 0;
                s < i.length;
                s++
              ) {
                var l = i[s],
                  A = t[l] || "";
                n.getAttribute(l) !== A && n.setAttribute(l, A),
                  -1 === a.indexOf(l) && a.push(l);
                var u = o.indexOf(l);
                -1 !== u && o.splice(u, 1);
              }
              for (var f = o.length - 1; f >= 0; f--) n.removeAttribute(o[f]);
              a.length === o.length
                ? n.removeAttribute(c.HELMET_ATTRIBUTE)
                : n.getAttribute(c.HELMET_ATTRIBUTE) !== i.join(",") &&
                  n.setAttribute(c.HELMET_ATTRIBUTE, i.join(","));
            }
          },
          N = function(e, t) {
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
                        var s = void 0 === t[r] ? "" : t[r];
                        n.setAttribute(r, s);
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
                      (a = _(n, r)),
                      [o.default.createElement(c.TAG_NAMES.TITLE, a, e)]
                    );
                    var e, n, r, a;
                  },
                  toString: function() {
                    return (function(e, t, n, r) {
                      var a = P(n),
                        o = R(t);
                      return a
                        ? "<" +
                            e +
                            " " +
                            c.HELMET_ATTRIBUTE +
                            '="true" ' +
                            a +
                            ">" +
                            A(o, r) +
                            "</" +
                            e +
                            ">"
                        : "<" +
                            e +
                            " " +
                            c.HELMET_ATTRIBUTE +
                            '="true">' +
                            A(o, r) +
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
                                  : t + '="' + A(r[t], n) + '"';
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
            v && y(v),
              e.defer
                ? (v = b(function() {
                    S(e, function() {
                      v = null;
                    });
                  }))
                : (S(e), (v = null));
          }),
          (t.mapStateOnServer = function(e) {
            var t = e.baseTag,
              n = e.bodyAttributes,
              r = e.encode,
              a = e.htmlAttributes,
              o = e.linkTags,
              i = e.metaTags,
              s = e.noscriptTags,
              l = e.scriptTags,
              A = e.styleTags,
              u = e.title,
              f = void 0 === u ? "" : u,
              d = e.titleAttributes;
            return {
              base: M(c.TAG_NAMES.BASE, t, r),
              bodyAttributes: M(c.ATTRIBUTE_NAMES.BODY, n, r),
              htmlAttributes: M(c.ATTRIBUTE_NAMES.HTML, a, r),
              link: M(c.TAG_NAMES.LINK, o, r),
              meta: M(c.TAG_NAMES.META, i, r),
              noscript: M(c.TAG_NAMES.NOSCRIPT, s, r),
              script: M(c.TAG_NAMES.SCRIPT, l, r),
              style: M(c.TAG_NAMES.STYLE, A, r),
              title: M(c.TAG_NAMES.TITLE, { title: f, titleAttributes: d }, r)
            };
          }),
          (t.reducePropsToState = function(e) {
            return {
              baseTag: p([c.TAG_PROPERTIES.HREF], e),
              bodyAttributes: d(c.ATTRIBUTE_NAMES.BODY, e),
              defer: T(e, c.HELMET_PROPS.DEFER),
              encode: T(e, c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
              htmlAttributes: d(c.ATTRIBUTE_NAMES.HTML, e),
              linkTags: E(
                c.TAG_NAMES.LINK,
                [c.TAG_PROPERTIES.REL, c.TAG_PROPERTIES.HREF],
                e
              ),
              metaTags: E(
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
              noscriptTags: E(
                c.TAG_NAMES.NOSCRIPT,
                [c.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              onChangeClientState: f(e),
              scriptTags: E(
                c.TAG_NAMES.SCRIPT,
                [c.TAG_PROPERTIES.SRC, c.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              styleTags: E(c.TAG_NAMES.STYLE, [c.TAG_PROPERTIES.CSS_TEXT], e),
              title: u(e),
              titleAttributes: d(c.ATTRIBUTE_NAMES.TITLE, e)
            };
          }),
          (t.requestAnimationFrame = b),
          (t.warn = g);
      }.call(this, n("yLpj")));
    },
    vrFN: function(e, t, n) {
      "use strict";
      var r = n("EH9Q"),
        a = n("q1tI"),
        o = n.n(a),
        i = n("TJpk"),
        c = n.n(i);
      function s(e) {
        var t = e.description,
          n = e.lang,
          a = e.meta,
          i = e.title,
          s = r.data.site,
          l = t || s.siteMetadata.description;
        return o.a.createElement(c.a, {
          htmlAttributes: { lang: n },
          title: i,
          titleTemplate: "%s | " + s.siteMetadata.title,
          meta: [
            { name: "description", content: l },
            { property: "og:title", content: i },
            { property: "og:description", content: l },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: s.siteMetadata.author },
            { name: "twitter:title", content: i },
            { name: "twitter:description", content: l }
          ].concat(a)
        });
      }
      (s.defaultProps = { lang: "en", meta: [], description: "" }), (t.a = s);
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-2404d11443c40a67ff52.js.map
