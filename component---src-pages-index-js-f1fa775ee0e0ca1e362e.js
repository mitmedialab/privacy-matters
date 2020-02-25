(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    IRj2: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Let’s Talk Privacy"}}}}'
      );
    },
    RXBc: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t("IRj2"),
        l = t("q1tI"),
        c = t.n(l),
        s = t("Wbzz"),
        r = t("Bl7J"),
        i = t("ezAz"),
        o = t("9eSz"),
        d = t.n(o),
        m = function() {
          var e = i.data;
          return c.a.createElement(d.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        p = t("vrFN"),
        g = t("ok1R"),
        u = t("rhny"),
        f =
          (t("4GFT"),
          function(e) {
            return c.a.createElement(
              "div",
              { id: "about", className: "about" },
              c.a.createElement(
                g.a,
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
                g.a,
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
        h = t("1Yj4"),
        b = (t("rGqo"), t("yt8O"), t("Btvt"), t("RW0V"), t("BLzl")),
        E = t("ChEw"),
        v = t("eKp/"),
        y =
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
                    b.a,
                    { body: !0, className: "bill-card h-100" },
                    c.a.createElement(
                      E.a,
                      { className: "card-title" },
                      a[e].long
                    ),
                    c.a.createElement(
                      s.Link,
                      {
                        className: "mt-auto arrow text-right",
                        to: "/bill-" + e + "/?ft=" + v.a
                      },
                      "→ ",
                      c.a.createElement(
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
        w = t("ru7J"),
        A =
          (t("ExPc"),
          function(e) {
            var a = e.siteTitle;
            return c.a.createElement(
              "div",
              { className: "policy-toggle-background" },
              c.a.createElement(
                h.a,
                { fluid: !0 },
                c.a.createElement(
                  g.a,
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
                    )
                  )
                ),
                c.a.createElement(
                  g.a,
                  { className: "py-5" },
                  c.a.createElement(y, {
                    policies: w.d,
                    onClick: function(e) {
                      return console.log(e);
                    }
                  })
                )
              )
            );
          }),
        N = t("2qpI");
      t("q4sD"),
        (a.default = function() {
          var e = n.data;
          return Object(v.b)(v.a)
            ? c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(N.a, null),
                c.a.createElement(A, { siteTitle: e.site.siteMetadata.title }),
                c.a.createElement(
                  r.a,
                  { backgroundClass: "secondary-background" },
                  c.a.createElement(f, null)
                )
              )
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(p.a, { title: "Home" }),
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
//# sourceMappingURL=component---src-pages-index-js-f1fa775ee0e0ca1e362e.js.map
