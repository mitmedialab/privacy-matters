(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    IRj2: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Privacy Matters"}}}}'
      );
    },
    RXBc: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t("IRj2"),
        l = t("q1tI"),
        c = t.n(l),
        r = t("Wbzz"),
        s = t("Bl7J"),
        o = t("ezAz"),
        i = t("9eSz"),
        d = t.n(i),
        p = function() {
          var e = o.data;
          return c.a.createElement(d.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        m = t("vrFN"),
        b = t("ok1R"),
        u = t("rhny"),
        g =
          (t("4GFT"),
          function(e) {
            return c.a.createElement(
              "div",
              { className: "about" },
              c.a.createElement(
                b.a,
                null,
                c.a.createElement(
                  u.a,
                  { xs: 12 },
                  c.a.createElement(
                    "h2",
                    null,
                    c.a.createElement(
                      "span",
                      { className: "half-highlight" },
                      "About"
                    )
                  )
                )
              ),
              c.a.createElement(
                b.a,
                null,
                c.a.createElement(
                  u.a,
                  { xs: 12, sm: 6 },
                  c.a.createElement(
                    "p",
                    { className: "lead" },
                    "Privacy Matters explores how the implementation of privacy and data governance policies might impact a variety of fields."
                  ),
                  c.a.createElement(
                    "p",
                    null,
                    "We interviewed 41 lawyers, designers, engineers, civil rights advocates, policymakers, and stewards of sensitive data (from social workers, pediatricians, and librarians). These conversations revealed 1) the many definitions and importance of privacy in distinct contexts 2) how the varied responses to recent data governance and privacy draft bills, and 3) the biggest privacy-related challenges (and possible ways to solve them) in different fields."
                  ),
                  c.a.createElement(
                    "p",
                    null,
                    "We believe in transparency and the necessity of improving how we translate complex topics to the public. This project aims to better inform and engage everyday people -- the non-privacy related lawyers, technologists, researchers about some of the latest developments in policy. We also aim to aggregate cross-disciplinary insights to inform policymakers about the impact their bills have on end users and people who manage sensitive data for a variety of marginalized and vulnerable communities."
                  ),
                  c.a.createElement(
                    "p",
                    null,
                    "This research is only a small portion of the diverse perspectives we can bring to data governance and policy making. We hope to spur conversations, reveal new insights, and prompt positive action."
                  )
                )
              )
            );
          }),
        f = t("1Yj4"),
        h = (t("2Spj"), t("k1TG")),
        v = t("8o2o");
      var y = t("17x9"),
        E = t.n(y),
        N = t("TSYQ"),
        w = t.n(N),
        A = t("33Jr"),
        x = {
          active: E.a.bool,
          "aria-label": E.a.string,
          block: E.a.bool,
          color: E.a.string,
          disabled: E.a.bool,
          outline: E.a.bool,
          tag: A.c,
          innerRef: E.a.oneOfType([E.a.object, E.a.func, E.a.string]),
          onClick: E.a.func,
          size: E.a.string,
          children: E.a.node,
          className: E.a.string,
          cssModule: E.a.object,
          close: E.a.bool
        },
        k = (function(e) {
          var a, t;
          function n(a) {
            var t;
            return (
              ((t = e.call(this, a) || this).onClick = t.onClick.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(t)
              )),
              t
            );
          }
          (t = e),
            ((a = n).prototype = Object.create(t.prototype)),
            (a.prototype.constructor = a),
            (a.__proto__ = t);
          var l = n.prototype;
          return (
            (l.onClick = function(e) {
              this.props.disabled
                ? e.preventDefault()
                : this.props.onClick && this.props.onClick(e);
            }),
            (l.render = function() {
              var e = this.props,
                a = e.active,
                t = e["aria-label"],
                n = e.block,
                l = e.className,
                r = e.close,
                s = e.cssModule,
                o = e.color,
                i = e.outline,
                d = e.size,
                p = e.tag,
                m = e.innerRef,
                b = Object(v.a)(e, [
                  "active",
                  "aria-label",
                  "block",
                  "className",
                  "close",
                  "cssModule",
                  "color",
                  "outline",
                  "size",
                  "tag",
                  "innerRef"
                ]);
              r &&
                void 0 === b.children &&
                (b.children = c.a.createElement(
                  "span",
                  { "aria-hidden": !0 },
                  "×"
                ));
              var u = "btn" + (i ? "-outline" : "") + "-" + o,
                g = Object(A.b)(
                  w()(
                    l,
                    { close: r },
                    r || "btn",
                    r || u,
                    !!d && "btn-" + d,
                    !!n && "btn-block",
                    { active: a, disabled: this.props.disabled }
                  ),
                  s
                );
              b.href && "button" === p && (p = "a");
              var f = r ? "Close" : null;
              return c.a.createElement(
                p,
                Object(h.a)(
                  { type: "button" === p && b.onClick ? "button" : void 0 },
                  b,
                  {
                    className: g,
                    ref: m,
                    onClick: this.onClick,
                    "aria-label": t || f
                  }
                )
              );
            }),
            n
          );
        })(c.a.Component);
      (k.propTypes = x),
        (k.defaultProps = { color: "secondary", tag: "button" });
      var j = k,
        C =
          (t("rGqo"),
          t("yt8O"),
          t("Btvt"),
          t("RW0V"),
          {
            tag: A.c,
            inverse: E.a.bool,
            color: E.a.string,
            body: E.a.bool,
            outline: E.a.bool,
            className: E.a.string,
            cssModule: E.a.object,
            innerRef: E.a.oneOfType([E.a.object, E.a.string, E.a.func])
          }),
        O = function(e) {
          var a = e.className,
            t = e.cssModule,
            n = e.color,
            l = e.body,
            r = e.inverse,
            s = e.outline,
            o = e.tag,
            i = e.innerRef,
            d = Object(v.a)(e, [
              "className",
              "cssModule",
              "color",
              "body",
              "inverse",
              "outline",
              "tag",
              "innerRef"
            ]),
            p = Object(A.b)(
              w()(
                a,
                "card",
                !!r && "text-white",
                !!l && "card-body",
                !!n && (s ? "border" : "bg") + "-" + n
              ),
              t
            );
          return c.a.createElement(
            o,
            Object(h.a)({}, d, { className: p, ref: i })
          );
        };
      (O.propTypes = C), (O.defaultProps = { tag: "div" });
      var R = O,
        z = { tag: A.c, className: E.a.string, cssModule: E.a.object },
        T = function(e) {
          var a = e.className,
            t = e.cssModule,
            n = e.tag,
            l = Object(v.a)(e, ["className", "cssModule", "tag"]),
            r = Object(A.b)(w()(a, "card-title"), t);
          return c.a.createElement(n, Object(h.a)({}, l, { className: r }));
        };
      (T.propTypes = z), (T.defaultProps = { tag: "div" });
      var M = T,
        S =
          (t("WfgN"),
          function(e) {
            var a = e.policies;
            return c.a.createElement(
              c.a.Fragment,
              null,
              Object.keys(a).map(function(e) {
                return c.a.createElement(
                  u.a,
                  {
                    key: "policy-select-button-" + e,
                    md: 4,
                    sm: 12,
                    className: "pb-5 policy-cards"
                  },
                  c.a.createElement(
                    R,
                    { body: !0, className: "bill-card h-100" },
                    c.a.createElement(
                      M,
                      { className: "card-title" },
                      a[e].long
                    ),
                    c.a.createElement(
                      r.Link,
                      {
                        className: "mt-auto",
                        to: "/bill-" + e + "/?ft=PRIVACY_MATTERS_2020"
                      },
                      "Explore the bill"
                    )
                  )
                );
              })
            );
          }),
        W = t("ru7J"),
        I =
          (t("ExPc"),
          function(e) {
            var a = e.siteTitle,
              t = e.onClick;
            return c.a.createElement(
              "div",
              { className: "policy-toggle-background" },
              c.a.createElement(
                f.a,
                { fluid: !0 },
                c.a.createElement(
                  b.a,
                  {
                    className:
                      "p-5 align-middle text-center pm-jumbotron d-flex"
                  },
                  c.a.createElement(
                    u.a,
                    { md: 6, className: "d-flex flex-column" },
                    c.a.createElement(
                      "div",
                      null,
                      c.a.createElement(
                        "h1",
                        null,
                        c.a.createElement(
                          "span",
                          { className: "half-highlight" },
                          a
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    u.a,
                    { md: 6, className: "d-flex flex-column" },
                    c.a.createElement(
                      "div",
                      null,
                      c.a.createElement(
                        "p",
                        { className: "mt-3 text-left description" },
                        "Exploring how data privacy policies translates into design and practice for librarians, pediatricians, lawyers, designers, engineers, philosophers, etc."
                      )
                    ),
                    c.a.createElement(
                      j,
                      { onClick: t },
                      "Explore privacy bills"
                    )
                  )
                ),
                c.a.createElement(
                  b.a,
                  { className: "py-5" },
                  c.a.createElement(S, {
                    policies: W.d,
                    onClick: function(e) {
                      return console.log(e);
                    }
                  })
                )
              )
            );
          }),
        J = t("eKp/");
      t("q4sD"),
        (a.default = function() {
          var e = n.data;
          return Object(J.b)(J.a)
            ? c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(I, { siteTitle: e.site.siteMetadata.title }),
                c.a.createElement(s.a, null, c.a.createElement(g, null))
              )
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(m.a, { title: "Home" }),
                c.a.createElement("h1", null, "Hi people"),
                c.a.createElement(
                  "p",
                  null,
                  "Welcome to your new Gatsby site."
                ),
                c.a.createElement("p", null, "Now go build something great."),
                c.a.createElement(
                  "div",
                  { style: { maxWidth: "300px", marginBottom: "1.45rem" } },
                  c.a.createElement(p, null)
                ),
                c.a.createElement(r.Link, { to: "/page-2/" }, "Go to page 2")
              );
        });
    },
    ezAz: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-2dd9bca6171d0770e578.js.map