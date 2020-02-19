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
        r = t("ok1R"),
        s = t("Wbzz"),
        o = t("Bl7J"),
        i = t("ezAz"),
        d = t("9eSz"),
        p = t.n(d),
        m = function() {
          var e = i.data;
          return c.a.createElement(p.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        u = t("vrFN"),
        b = t("rhny"),
        g = function(e) {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              r.a,
              null,
              c.a.createElement(
                b.a,
                { xs: 12 },
                c.a.createElement("h2", null, "About")
              )
            ),
            c.a.createElement(
              r.a,
              null,
              c.a.createElement(
                b.a,
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
        },
        f = (t("rGqo"), t("yt8O"), t("Btvt"), t("RW0V"), t("k1TG")),
        v = t("8o2o"),
        h = t("17x9"),
        y = t.n(h),
        E = t("TSYQ"),
        N = t.n(E),
        w = t("33Jr"),
        A = {
          tag: w.c,
          inverse: y.a.bool,
          color: y.a.string,
          body: y.a.bool,
          outline: y.a.bool,
          className: y.a.string,
          cssModule: y.a.object,
          innerRef: y.a.oneOfType([y.a.object, y.a.string, y.a.func])
        },
        x = function(e) {
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
            p = Object(w.b)(
              N()(
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
            Object(f.a)({}, d, { className: p, ref: i })
          );
        };
      (x.propTypes = A), (x.defaultProps = { tag: "div" });
      var k = x,
        j = { tag: w.c, className: y.a.string, cssModule: y.a.object },
        C = function(e) {
          var a = e.className,
            t = e.cssModule,
            n = e.tag,
            l = Object(v.a)(e, ["className", "cssModule", "tag"]),
            r = Object(w.b)(N()(a, "card-title"), t);
          return c.a.createElement(n, Object(f.a)({}, l, { className: r }));
        };
      (C.propTypes = j), (C.defaultProps = { tag: "div" });
      var O = C,
        R =
          (t("WfgN"),
          function(e) {
            var a = e.policies;
            return c.a.createElement(
              c.a.Fragment,
              null,
              Object.keys(a).map(function(e) {
                return c.a.createElement(
                  b.a,
                  {
                    key: "policy-select-button-" + e,
                    md: 4,
                    sm: 12,
                    className: "pb-3"
                  },
                  c.a.createElement(
                    k,
                    { body: !0, className: "bill-card h-100" },
                    c.a.createElement(
                      O,
                      { className: "card-title" },
                      a[e].long
                    ),
                    c.a.createElement(
                      s.Link,
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
        z = t("1Yj4");
      t("2Spj");
      var M = {
          active: y.a.bool,
          "aria-label": y.a.string,
          block: y.a.bool,
          color: y.a.string,
          disabled: y.a.bool,
          outline: y.a.bool,
          tag: w.c,
          innerRef: y.a.oneOfType([y.a.object, y.a.func, y.a.string]),
          onClick: y.a.func,
          size: y.a.string,
          children: y.a.node,
          className: y.a.string,
          cssModule: y.a.object,
          close: y.a.bool
        },
        T = (function(e) {
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
                u = Object(v.a)(e, [
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
                void 0 === u.children &&
                (u.children = c.a.createElement(
                  "span",
                  { "aria-hidden": !0 },
                  "×"
                ));
              var b = "btn" + (i ? "-outline" : "") + "-" + o,
                g = Object(w.b)(
                  N()(
                    l,
                    { close: r },
                    r || "btn",
                    r || b,
                    !!d && "btn-" + d,
                    !!n && "btn-block",
                    { active: a, disabled: this.props.disabled }
                  ),
                  s
                );
              u.href && "button" === p && (p = "a");
              var h = r ? "Close" : null;
              return c.a.createElement(
                p,
                Object(f.a)(
                  { type: "button" === p && u.onClick ? "button" : void 0 },
                  u,
                  {
                    className: g,
                    ref: m,
                    onClick: this.onClick,
                    "aria-label": t || h
                  }
                )
              );
            }),
            n
          );
        })(c.a.Component);
      (T.propTypes = M),
        (T.defaultProps = { color: "secondary", tag: "button" });
      var S = T,
        W =
          (t("ExPc"),
          function(e) {
            var a = e.siteTitle,
              t = e.onClick;
            return c.a.createElement(
              z.a,
              { fluid: !0 },
              c.a.createElement(
                r.a,
                {
                  className: "p-5 align-middle text-center pm-jumbotron d-flex"
                },
                c.a.createElement(
                  b.a,
                  { sm: 6, className: "d-flex flex-column" },
                  c.a.createElement(
                    "div",
                    null,
                    c.a.createElement("h1", null, a)
                  )
                ),
                c.a.createElement(
                  b.a,
                  { sm: 6, className: "d-flex flex-column" },
                  c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(
                      "p",
                      { className: "mt-3 text-left description" },
                      "Exploring how data privacy policies translates into design and practice for librarians, pediatricians, lawyers, designers, engineers, philosophers, etc."
                    )
                  ),
                  c.a.createElement(S, { onClick: t }, "Explore privacy bills")
                )
              )
            );
          }),
        I = t("ru7J"),
        J = t("eKp/");
      t("q4sD"),
        (a.default = function() {
          var e = n.data;
          return Object(J.b)(J.a)
            ? c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(W, { siteTitle: e.site.siteMetadata.title }),
                c.a.createElement(
                  o.a,
                  null,
                  c.a.createElement(
                    r.a,
                    { className: "py-5" },
                    c.a.createElement(R, {
                      policies: I.d,
                      onClick: function(e) {
                        return console.log(e);
                      }
                    })
                  ),
                  c.a.createElement(g, null)
                )
              )
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(u.a, { title: "Home" }),
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
                  c.a.createElement(m, null)
                ),
                c.a.createElement(s.Link, { to: "/page-2/" }, "Go to page 2")
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
//# sourceMappingURL=component---src-pages-index-js-811e302f31e25ace3111.js.map
