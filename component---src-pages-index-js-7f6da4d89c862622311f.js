(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "+YAX": function(e, t, a) {
      var n = a("2nzh"),
        r = a("1PpB"),
        i = a("cqv3");
      e.exports = function(e) {
        return n(e) || r(e) || i();
      };
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
    "2nzh": function(e, t) {
      e.exports = function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, a = new Array(e.length); t < e.length; t++)
            a[t] = e[t];
          return a;
        }
      };
    },
    "6R51": function(e, t) {
      e.exports = function(e, t) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        ) {
          var a = [],
            n = !0,
            r = !1,
            i = void 0;
          try {
            for (
              var o, c = e[Symbol.iterator]();
              !(n = (o = c.next()).done) &&
              (a.push(o.value), !t || a.length !== t);
              n = !0
            );
          } catch (l) {
            (r = !0), (i = l);
          } finally {
            try {
              n || null == c.return || c.return();
            } finally {
              if (r) throw i;
            }
          }
          return a;
        }
      };
    },
    "7h0T": function(e, t, a) {
      var n = a("XKFU");
      n(n.S, "Number", {
        isNaN: function(e) {
          return e != e;
        }
      });
    },
    "8jRI": function(e, t, a) {
      "use strict";
      a("pIFo"),
        a("rGqo"),
        a("yt8O"),
        a("Btvt"),
        a("RW0V"),
        a("SRfc"),
        a("Oyvg");
      var n = new RegExp("%[a-f0-9]{2}", "gi"),
        r = new RegExp("(%[a-f0-9]{2})+", "gi");
      function i(e, t) {
        try {
          return decodeURIComponent(e.join(""));
        } catch (r) {}
        if (1 === e.length) return e;
        t = t || 1;
        var a = e.slice(0, t),
          n = e.slice(t);
        return Array.prototype.concat.call([], i(a), i(n));
      }
      function o(e) {
        try {
          return decodeURIComponent(e);
        } catch (r) {
          for (var t = e.match(n), a = 1; a < t.length; a++)
            t = (e = i(t, a).join("")).match(n);
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
              var a = { "%FE%FF": "��", "%FF%FE": "��" }, n = r.exec(e);
              n;

            ) {
              try {
                a[n[0]] = decodeURIComponent(n[0]);
              } catch (t) {
                var i = o(n[0]);
                i !== n[0] && (a[n[0]] = i);
              }
              n = r.exec(e);
            }
            a["%C2"] = "�";
            for (var c = Object.keys(a), l = 0; l < c.length; l++) {
              var s = c[l];
              e = e.replace(new RegExp(s, "g"), a[s]);
            }
            return e;
          })(e);
        }
      };
    },
    "8yz6": function(e, t, a) {
      "use strict";
      a("V+eJ"),
        (e.exports = function(e, t) {
          if ("string" != typeof e || "string" != typeof t)
            throw new TypeError(
              "Expected the arguments to be of type `string`"
            );
          if ("" === t) return [e];
          var a = e.indexOf(t);
          return -1 === a ? [e] : [e.slice(0, a), e.slice(a + t.length)];
        });
    },
    Aokb: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<h2>Prohibited practices for social media companies:</h2>\\n<ul>\\n<li>Infinite scroll or auto refill</li>\\n<li>Elimination of natural stopping points</li>\\n<li>Autoplay</li>\\n<li>Badges or other awards linked to engagement with the platform</li>\\n</ul>\\n<h2>Requirements for social media companies:</h2>\\n<ul>\\n<li>Allows a user to set a time limit that blocks the user’s own access to that platform…</li>\\n<li>Automatically limits the amount of time that a user may spend on those platforms across all devices to 30 minutes a day</li>\\n</ul>\\n<h2>Requirements for data-operators (anyone who operates a website, online service, application or mobile application):</h2>\\n<ul>\\n<li>Neutral presentation</li>\\n<li>No pre-selected option</li>\\n</ul>\\n<h2>Powers of the (Federal Trade) Commission:</h2>\\n<ul>\\n<li>This Act and regulations prescribed under this Act shall be enforced by the Commission (FTC)</li>\\n</ul>","frontmatter":{"title":"SMART"}}}}'
      );
    },
    BPGI: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<ul>\\n<li>Creating User Rights – The bill grants every American the right to access, correct, or delete their data. It also creates new rights, like the right to impermanence, which lets users decide how long companies can keep their data.</li>\\n<li>Placing Clear Obligations on Companies – The bill minimizes the amount of data companies collect, process, disclose, and maintain, and bars companies from using data in discriminatory ways. Additionally, companies must receive consent from users in plain, simple language.</li>\\n<li>Establishing a Digital Privacy Agency (DPA) – The bill establishes an independent agency led by a Director that’s appointed by the President and confirmed by the Senate for a five-year term. The DPA will enforce privacy protections and investigate abuses.</li>\\n<li>Strengthening Enforcement – The bill empowers state attorneys general to enforce violations of the bill and allows individuals to appoint nonprofits to represent them in private class action lawsuits.</li>\\n</ul>","frontmatter":{"title":"About the Online Policy Act"}}}}'
      );
    },
    HsiO: function(e, t, a) {
      var n = a("Z6+o"),
        r = a("6R51"),
        i = a("UlM4");
      e.exports = function(e, t) {
        return n(e) || r(e, t) || i();
      };
    },
    OnBO: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACjUlEQVQ4y3VTXUsbURDNj/RJ6B/wP/RJn/JgMRqQRB8ULCiIohH6IklaECktYhK3xISsSTZfu5tkN/u9G3M6MyHSCl4YZu/dO2fOnJmbMk0TjuPAsiyxXq8n3vd9eJ73obmuK3Gz2UzuT6dT6LqOFAeyOY6HKIqgqiomkwnCMMTq33tjwPl8jsViIaDqSxv1ep3IaAzowjA8NJuBAHEA+yRJJOgjY2YM+Pr6+gbOiVJB4BNVE4+PVTQaz3LIgEEQCGNmyn5lfM53mNn7xf+IYUAMddRqNcnEQePxGMPhUGw0Gomug8FAPGtu27ZoyIsZxnEsxuepZYlTYteUDAzKgYWbG+TzeeRyOezu7mJzcxPr6+tIp9MCxCXz4uSMwYkURUGK6du2RSVMOZ9kYmbHx8col8vY29vDycmJAK+trWFjY+M/wG63i1ZLlW8GJUAX44lDOs6pESCLpMzT01McHh4ik8lge3sbBwcHODo6wvn5+VIv31syNHUCfKa4eAmYRCHGxgzFUhP9vk0lxwSoo1Kp4Pb2FjdU+tXVFS4vL1EoFPCkPGH8+w80bYiXGY1M1yKWoMoWS0B1MMKvegMIbWCRIKSmmKaBdrtNmVvieTY7nY40xiWJ4kYXd7VnfLmr4EdNw0sLaHcWQiT1XWng87d7VLQR1KEOnyTgIG7Qyljn5fA74kkZmTtecyo1SULR3rKoy5Y9w1eli0/XP5G5V+SS6/nynFh4HoWV5xHhGe1pmrDVDYO0N9Dv9amRA+m4NOVtMKNYfLVaRbFYlAZcXFyIhqVSSWaUz7a2tpDNZnF2dob9/X3Z7+zs4OHhgRnaBBSJdgnR5qDVQzeIwb/G5TNDZsejxU3g89UD4P1f/UwDKldtYIwAAAAASUVORK5CYII=","aspectRatio":1.4369747899159664,"src":"/static/a522318e5bbdf90b3675e545017242e5/a54c6/policy-online-privacy-design.png","srcSet":"/static/a522318e5bbdf90b3675e545017242e5/59beb/policy-online-privacy-design.png 200w,\\n/static/a522318e5bbdf90b3675e545017242e5/c0bbd/policy-online-privacy-design.png 400w,\\n/static/a522318e5bbdf90b3675e545017242e5/a54c6/policy-online-privacy-design.png 800w,\\n/static/a522318e5bbdf90b3675e545017242e5/6d3f1/policy-online-privacy-design.png 1026w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    Pmem: function(e, t, a) {
      "use strict";
      a("a1Th"),
        a("h7Nl"),
        a("Btvt"),
        a("pIFo"),
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
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("q1tI"),
        r = a.n(n),
        i = a("Wbzz"),
        o = a("Bl7J"),
        c = a("ezAz"),
        l = a("9eSz"),
        s = a.n(l),
        u = function() {
          var e = c.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        d = a("vrFN"),
        m = (a("rGqo"), a("yt8O"), a("Btvt"), a("RW0V"), a("ok1R")),
        p = a("rhny"),
        f = a("k1TG"),
        g = a("8o2o"),
        A = a("17x9"),
        b = a.n(A),
        h = a("TSYQ"),
        y = a.n(h),
        v = a("33Jr"),
        E = {
          tag: v.c,
          inverse: b.a.bool,
          color: b.a.string,
          body: b.a.bool,
          outline: b.a.bool,
          className: b.a.string,
          cssModule: b.a.object,
          innerRef: b.a.oneOfType([b.a.object, b.a.string, b.a.func])
        },
        w = function(e) {
          var t = e.className,
            a = e.cssModule,
            n = e.color,
            i = e.body,
            o = e.inverse,
            c = e.outline,
            l = e.tag,
            s = e.innerRef,
            u = Object(g.a)(e, [
              "className",
              "cssModule",
              "color",
              "body",
              "inverse",
              "outline",
              "tag",
              "innerRef"
            ]),
            d = Object(v.b)(
              y()(
                t,
                "card",
                !!o && "text-white",
                !!i && "card-body",
                !!n && (c ? "border" : "bg") + "-" + n
              ),
              a
            );
          return r.a.createElement(
            l,
            Object(f.a)({}, u, { className: d, ref: s })
          );
        };
      (w.propTypes = E), (w.defaultProps = { tag: "div" });
      var N = w,
        R = { tag: v.c, className: b.a.string, cssModule: b.a.object },
        O = function(e) {
          var t = e.className,
            a = e.cssModule,
            n = e.tag,
            i = Object(g.a)(e, ["className", "cssModule", "tag"]),
            o = Object(v.b)(y()(t, "card-title"), a);
          return r.a.createElement(n, Object(f.a)({}, i, { className: o }));
        };
      (O.propTypes = R), (O.defaultProps = { tag: "div" });
      var I = O,
        S = { tag: v.c, className: b.a.string, cssModule: b.a.object },
        x = function(e) {
          var t = e.className,
            a = e.cssModule,
            n = e.tag,
            i = Object(g.a)(e, ["className", "cssModule", "tag"]),
            o = Object(v.b)(y()(t, "card-text"), a);
          return r.a.createElement(n, Object(f.a)({}, i, { className: o }));
        };
      (x.propTypes = S), (x.defaultProps = { tag: "p" });
      var k,
        C = x,
        M = a("sOKU"),
        T = a("qN1e"),
        P = function() {
          var e = T.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        j = a("OnBO"),
        q = function() {
          var e = j.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        U = a("lxgn"),
        V = function() {
          var e = U.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        B =
          (((k = {}).SMART = {
            short: "SMART Act",
            long: "SMART Act (Social Media Addiction Reduction Technology)",
            summary:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }),
          (k.ONLINE_PRIVACY = {
            short: "Online Privacy Act",
            long: "The Online Privacy Act",
            summary:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          }),
          (k.CORPA = {
            short: "CORPA",
            long: "COPRA (Consumer Online Privacy Rights Act)",
            summary:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "
          }),
          k),
        Y =
          (a("WfgN"),
          function(e) {
            var t,
              a = e.policies,
              n = e.onClick,
              i =
                (((t = {}).SMART = r.a.createElement(P, null)),
                (t.ONLINE_PRIVACY = r.a.createElement(q, null)),
                (t.CORPA = r.a.createElement(V, null)),
                t);
            return r.a.createElement(
              r.a.Fragment,
              null,
              Object.keys(a).map(function(e) {
                return r.a.createElement(
                  p.a,
                  {
                    key: "policy-select-button-" + e,
                    md: 4,
                    sm: 12,
                    className: "pb-3"
                  },
                  r.a.createElement(
                    N,
                    { body: !0, className: "h-100" },
                    i[e],
                    r.a.createElement(
                      I,
                      { className: "display-4" },
                      a[e].short
                    ),
                    r.a.createElement(C, null, a[e].summary),
                    r.a.createElement(
                      M.a,
                      {
                        color: "primary",
                        onClick: function(t) {
                          return n(e);
                        },
                        size: "lg",
                        className: "w-100"
                      },
                      "Explore the bill"
                    )
                  )
                );
              })
            );
          }),
        F =
          (a("pwFx"),
          function(e) {
            var t,
              a = e.selectedPolicy,
              n =
                (((t = {}).SMART = r.a.createElement(P, null)),
                (t.ONLINE_PRIVACY = r.a.createElement(q, null)),
                (t.CORPA = r.a.createElement(V, null)),
                t);
            return r.a.createElement(
              "div",
              { className: "m-3" },
              r.a.createElement(
                "h3",
                { className: "mb-5" },
                "How might a social media platform look like if this bill were passed?"
              ),
              n[a]
            );
          }),
        K = a("Aokb"),
        z = function(e) {
          var t = e.fullPolicyLink,
            a = e.markdownRemark.html;
          return r.a.createElement(
            "div",
            { className: "policy-about pt-3 pb-5" },
            r.a.createElement("div", {
              dangerouslySetInnerHTML: { __html: a }
            }),
            r.a.createElement(
              "div",
              { className: "text-center" },
              r.a.createElement(
                "a",
                { href: t, rel: "noopener noreferrer", target: "_blank" },
                "See full text"
              )
            )
          );
        },
        H = function(e) {
          var t = K.data.markdownRemark;
          return r.a.createElement(z, {
            markdownRemark: t,
            fullPolicyLink:
              "https://www.hawley.senate.gov/sites/default/files/2019-07/Social-Media-Addiction-Reduction-Technology-Act.pdf"
          });
        },
        L = a("BPGI"),
        J = function(e) {
          var t = L.data.markdownRemark;
          return r.a.createElement(z, {
            markdownRemark: t,
            fullPolicyLink:
              "https://eshoo.house.gov/sites/eshoo.house.gov/files/migrated/wp-content/uploads/2019/11/Bill-Text-Online-Privacy-Act-Eshoo-Lofgren.pdf"
          });
        },
        X = a("fcRk"),
        W = function(e) {
          var t = X.data.markdownRemark;
          return r.a.createElement(z, {
            markdownRemark: t,
            fullPolicyLink:
              "https://www.cantwell.senate.gov/imo/media/doc/COPRA%20Bill%20Text.pdf"
          });
        },
        G =
          (a("/ohh"),
          function(e) {
            var t = e.selectedPolicy;
            return "SMART" === t
              ? r.a.createElement(H, null)
              : "ONLINE_PRIVACY" === t
              ? r.a.createElement(J, null)
              : "CORPA" === t
              ? r.a.createElement(W, null)
              : void 0;
          }),
        D = a("eSms"),
        Q =
          (a("oJSB"),
          function(e) {
            var t = e.node,
              a = t.frontmatter,
              n = t.html;
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                p.a,
                { className: "quote-prompt my-3", xs: 12 },
                r.a.createElement("div", null, a.prompt)
              ),
              r.a.createElement(
                p.a,
                { xs: 12 },
                r.a.createElement(
                  m.a,
                  null,
                  r.a.createElement(
                    p.a,
                    { xs: 3 },
                    r.a.createElement(
                      "div",
                      { className: "text-center display-1" },
                      "🦊"
                    )
                  ),
                  r.a.createElement(
                    p.a,
                    { xs: 9 },
                    r.a.createElement(
                      "blockquote",
                      { className: "blockquote" },
                      r.a.createElement("div", {
                        dangerouslySetInnerHTML: { __html: n }
                      }),
                      r.a.createElement(
                        "footer",
                        { className: "blockquote-footer" },
                        a.quotee
                      )
                    )
                  )
                )
              )
            );
          }),
        Z = function(e) {
          var t = e.selectedPolicy,
            a = D.data;
          return r.a.createElement(
            r.a.Fragment,
            null,
            a.allMarkdownRemark.edges
              .filter(function(e) {
                return e.node.frontmatter.policy === t;
              })
              .map(function(e) {
                return r.a.createElement(Q, {
                  key: t + "-" + e.node.frontmatter.quotee,
                  node: e.node
                });
              })
          );
        },
        _ = a("EXIE"),
        $ =
          (a("v31m"),
          r.a.forwardRef(function(e, t) {
            var a = e.title,
              n = e.policy;
            return r.a.createElement(
              "div",
              { ref: t },
              r.a.createElement(
                m.a,
                { className: "py-3" },
                r.a.createElement(p.a, null, r.a.createElement("h1", null, a))
              ),
              r.a.createElement(
                m.a,
                { className: "pb-3" },
                r.a.createElement(
                  p.a,
                  { md: 3 },
                  r.a.createElement(G, { selectedPolicy: n })
                ),
                r.a.createElement(
                  p.a,
                  { md: 9 },
                  r.a.createElement(F, { selectedPolicy: n }),
                  r.a.createElement(Z, { selectedPolicy: n })
                )
              )
            );
          })),
        ee = function() {
          var e,
            t =
              (((e = {}).SMART = r.a.createRef()),
              (e.ONLINE_PRIVACY = r.a.createRef()),
              (e.CORPA = r.a.createRef()),
              e);
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              m.a,
              { className: "py-5 min-full-height" },
              r.a.createElement(Y, {
                policies: B,
                onClick: function(e) {
                  return Object(_.a)(t[e]);
                }
              })
            ),
            Object.keys(B).map(function(e) {
              return r.a.createElement($, {
                key: "policy-layout-" + e,
                title: B[e].long,
                policy: e,
                ref: t[e],
                className: "py-5"
              });
            })
          );
        },
        te = (a("KKXr"), a("OG14"), a("cr+I")),
        ae = a.n(te);
      function ne(e) {
        var t,
          a =
            ((t = "ft"),
            "undefined" != typeof window
              ? ae.a.parse(window.location.search)[t]
              : "");
        return !!a && a.split(",").indexOf(e) > -1;
      }
      a("q4sD"),
        (t.default = function() {
          return ne("PRIVACY_MATTERS_2020")
            ? r.a.createElement(o.a, null, r.a.createElement(ee, null))
            : r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(d.a, { title: "Home" }),
                r.a.createElement("h1", null, "Hi people"),
                r.a.createElement(
                  "p",
                  null,
                  "Welcome to your new Gatsby site."
                ),
                r.a.createElement("p", null, "Now go build something great."),
                r.a.createElement(
                  "div",
                  { style: { maxWidth: "300px", marginBottom: "1.45rem" } },
                  r.a.createElement(u, null)
                ),
                r.a.createElement(i.Link, { to: "/page-2/" }, "Go to page 2")
              );
        });
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
    cqv3: function(e, t) {
      e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      };
    },
    "cr+I": function(e, t, a) {
      "use strict";
      a("0l/t");
      var n = a("HsiO");
      a("rE2o"),
        a("ioFf"),
        a("DNiP"),
        a("hHhE"),
        a("91GP"),
        a("Tze0"),
        a("7h0T"),
        a("xfY5"),
        a("rGqo"),
        a("yt8O"),
        a("Btvt"),
        a("RW0V"),
        a("bWfx"),
        a("Vd3H"),
        a("LK8F"),
        a("KKXr"),
        a("V+eJ"),
        a("pIFo");
      var r = a("+YAX"),
        i = a("Pmem"),
        o = a("8jRI"),
        c = a("8yz6");
      function l(e, t) {
        return t.encode ? (t.strict ? i(e) : encodeURIComponent(e)) : e;
      }
      function s(e, t) {
        return t.decode ? o(e) : e;
      }
      function u(e) {
        var t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function d(e) {
        var t = (e = u(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function m(e, t) {
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
        var a = (function(e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function(e, a, n) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = a))
                      : (n[e] = a);
                };
              case "bracket":
                return function(e, a, n) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], a))
                        : (n[e] = [a])
                      : (n[e] = a);
                };
              case "comma":
                return function(e, t, a) {
                  var n =
                    "string" == typeof t && t.split("").indexOf(",") > -1
                      ? t.split(",")
                      : t;
                  a[e] = n;
                };
              default:
                return function(e, t, a) {
                  void 0 !== a[e] ? (a[e] = [].concat(a[e], t)) : (a[e] = t);
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
          r = Object.create(null);
        if ("string" != typeof e) return r;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
        var i = !0,
          o = !1,
          l = void 0;
        try {
          for (
            var u, d = e.split("&")[Symbol.iterator]();
            !(i = (u = d.next()).done);
            i = !0
          ) {
            var p = u.value,
              f = c(t.decode ? p.replace(/\+/g, " ") : p, "="),
              g = n(f, 2),
              A = g[0],
              b = g[1];
            (b = void 0 === b ? null : s(b, t)), a(s(A, t), b, r);
          }
        } catch (O) {
          (o = !0), (l = O);
        } finally {
          try {
            i || null == d.return || d.return();
          } finally {
            if (o) throw l;
          }
        }
        for (var h = 0, y = Object.keys(r); h < y.length; h++) {
          var v = y[h],
            E = r[v];
          if ("object" == typeof E && null !== E)
            for (var w = 0, N = Object.keys(E); w < N.length; w++) {
              var R = N[w];
              E[R] = m(E[R], t);
            }
          else r[v] = m(E, t);
        }
        return !1 === t.sort
          ? r
          : (!0 === t.sort
              ? Object.keys(r).sort()
              : Object.keys(r).sort(t.sort)
            ).reduce(function(e, t) {
              var a = r[t];
              return (
                Boolean(a) && "object" == typeof a && !Array.isArray(a)
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
                    })(a))
                  : (e[t] = a),
                e
              );
            }, Object.create(null));
      }
      (t.extract = d),
        (t.parse = p),
        (t.stringify = function(e, t) {
          if (!e) return "";
          var a = (function(e) {
              switch (e.arrayFormat) {
                case "index":
                  return function(t) {
                    return function(a, n) {
                      var i = a.length;
                      return void 0 === n || (e.skipNull && null === n)
                        ? a
                        : [].concat(
                            r(a),
                            null === n
                              ? [[l(t, e), "[", i, "]"].join("")]
                              : [
                                  [l(t, e), "[", l(i, e), "]=", l(n, e)].join(
                                    ""
                                  )
                                ]
                          );
                    };
                  };
                case "bracket":
                  return function(t) {
                    return function(a, n) {
                      return void 0 === n || (e.skipNull && null === n)
                        ? a
                        : [].concat(
                            r(a),
                            null === n
                              ? [[l(t, e), "[]"].join("")]
                              : [[l(t, e), "[]=", l(n, e)].join("")]
                          );
                    };
                  };
                case "comma":
                  return function(t) {
                    return function(a, n) {
                      return null == n || 0 === n.length
                        ? a
                        : 0 === a.length
                        ? [[l(t, e), "=", l(n, e)].join("")]
                        : [[a, l(n, e)].join(",")];
                    };
                  };
                default:
                  return function(t) {
                    return function(a, n) {
                      return void 0 === n || (e.skipNull && null === n)
                        ? a
                        : [].concat(
                            r(a),
                            null === n
                              ? [l(t, e)]
                              : [[l(t, e), "=", l(n, e)].join("")]
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
            n = Object.assign({}, e);
          if (t.skipNull)
            for (var i = 0, o = Object.keys(n); i < o.length; i++) {
              var c = o[i];
              (void 0 !== n[c] && null !== n[c]) || delete n[c];
            }
          var s = Object.keys(n);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map(function(n) {
                var r = e[n];
                return void 0 === r
                  ? ""
                  : null === r
                  ? l(n, t)
                  : Array.isArray(r)
                  ? r.reduce(a(n), []).join("&")
                  : l(n, t) + "=" + l(r, t);
              })
              .filter(function(e) {
                return e.length > 0;
              })
              .join("&")
          );
        }),
        (t.parseUrl = function(e, t) {
          return { url: u(e).split("?")[0] || "", query: p(d(e), t) };
        }),
        (t.stringifyUrl = function(e, a) {
          var n = u(e.url).split("?")[0] || "",
            r = t.extract(e.url),
            i = t.parse(r),
            o = (function(e) {
              var t = "",
                a = e.indexOf("#");
              return -1 !== a && (t = e.slice(a)), t;
            })(e.url),
            c = Object.assign(i, e.query),
            l = t.stringify(c, a);
          return (
            l && (l = "?".concat(l)),
            ""
              .concat(n)
              .concat(l)
              .concat(o)
          );
        });
    },
    eSms: function(e) {
      e.exports = JSON.parse(
        '{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"2eba466e-2d00-5231-9e92-8a4240f49186","frontmatter":{"quotee":"Dennis, Engineer","policy":"SMART","prompt":"How did a lawyer respond?"},"html":"<p>This is a test of a quote. Does it work?</p>"}}]}}}'
      );
    },
    ezAz: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'
      );
    },
    fcRk: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<ul>\\n<li>\\n<p>Duty of loyalty</p>\\n<ul>\\n<li>Not engage in deceptive [or harmful] data practice</li>\\n</ul>\\n</li>\\n<li>Right to [data] access and transparency</li>\\n<li>Right to delete</li>\\n<li>Right to correct inaccuracies</li>\\n<li>Right to controls</li>\\n<li>Data portability</li>\\n<li>Opt out of transfers</li>\\n<li>Right to data minimization</li>\\n<li>Right to data security</li>\\n<li>Civil rights</li>\\n<li>Protections, Algorithmic decision-making impact assessment</li>\\n<li>Prohibition on waiver of rights</li>\\n</ul>","frontmatter":{"title":"About CORPA"}}}}'
      );
    },
    lxgn: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y52UaU/iUBSG+/9/iAkxgWBilKUjLa2AxILKIgKKC7uyqUFlOdPnkEvGr9PkzblnX8FyHEc8z5Ns1pNMxhHHcUOaUd51s8pDXdfd8/igx0/h+3J2lhE7bYvl++eSzxfk4qKoRqenCcm6nlxeBsrvEjjqAG/bfyQdOp6f5yQISmoH9T1fMqGNValUpd1uS6vVCtGWu7s7pb/R+sVjf3vbUDQajdCnqTbNZlOsz89P+Z9vNptJtVqVTqcjm816L7dGo5HM53NZLBZKp9OpUjCZTNSRpB8fH4r393fFcrlUHh3vp6cnqVQqYvX7fRkOh4rBYKAKkvCmhefnZ1mv17JarcJKNur8+voq4/FYXl5e1O77+1uSyaREo9FdwF6vp4put6stPDw86CzL5bIGJUm9XtcKsKWLt7c3wZfgJOEyYrHYrmUUDJpMKL++vrQtWjbtEwSe0dAmeqrkTeUEPD4+FovKyB4EQXg+ebm+vlYeCh4fH7ViApAQyjKQ0Q0dUG0ul9sFpAWENzc3cnV1pW8CwgMCmOHzZkkEw49TYcboOfBEIiEWyzAt8aYtM0OcTfXMcbvd6oKwZXbmQ06wg4ODXYXMgrKhZsPISWD0BKcSkhMMnnkC5IVCQTetMzRgy7QApaJaraaVUhGD//n50YXBA3yQcVK2bcvR0ZFYtIgRGakS3sA4Iv8XVM5lADrC11yBxaD5uDHuiLLJdnJyIqVSSflUKhX+IaQVxWJRDg8PJRKJSDwe181yr/ufHjPgIxNbYyGAuzSHfn9/v5ebUQAj5xfDSFjOXwQciGfh2OGAAAAAAElFTkSuQmCC","aspectRatio":1.2805662805662805,"src":"/static/6a8a44a313f9ceabfb07b66d02e3e501/a54c6/policy-corpa-design.png","srcSet":"/static/6a8a44a313f9ceabfb07b66d02e3e501/59beb/policy-corpa-design.png 200w,\\n/static/6a8a44a313f9ceabfb07b66d02e3e501/c0bbd/policy-corpa-design.png 400w,\\n/static/6a8a44a313f9ceabfb07b66d02e3e501/a54c6/policy-corpa-design.png 800w,\\n/static/6a8a44a313f9ceabfb07b66d02e3e501/c35de/policy-corpa-design.png 995w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    qN1e: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACH0lEQVQ4y11TxwpqQQz1v/wG8Qvc+Q8uRARBwYIIgoiCW0Gw7RRBt5aFiAXE3nvvNY+TR3z6AiF35iZnzslkFI/Hg/b7PR0OB9put9Rut6nX63EcDAbU6XSo0WhwHI/H1Gq1eB//+/0+LRYLrt3tdlyvOJ/PtNlseAMu4MfjkV2+EeGn04kj8uDfNcBR4OP5fHLicrmk1WpF0+mURqMRM5pMJhyxhg+HQ5rNZpy3Xq8/zLAGhgKnw7CYz+ecBMnNZpO92+1yrNVqLL3RaDIoDhcCYIZaqGVAMISBOnoCVgAFI/yDv99ver1eHLFG72VP7Hq9/gWURCTBRQIOuFwu3EPsoT1QIN9iqP0BFIbfhqRKpUKRSITy+TzLxToej1O5XOaDhcgPoJyEgkQiQel0mmMymaRYLEYej4dB4cFgkEKhEFWrVWb+PxEGhCxYKpUinU5HTqeT7HY7mc1mMhgMZDKZKBAIkNvtJq1WS+FwmC8JF4FLAUuAg+UPYCaTIZvNxsV+v59cLhepVCpSKpWk0WhIrVaTXq9nxrlc7jMuuDi05Ha70f1+/wcIqVarlXw+H4M6HA6KRqMsH3LBrF6vc//wUjBmMHk9AIT/AApDgEJ6oVBgWTLgmD8BkumQV4RL+rkU9NBoNJLX62W5FouFm49Tv58XZMpgwzC3eNMA/DCEdrAolUoMUiwWKZvNcn9kJjF/4pAMINShHjm4GLD/A6Zh8S7oWLr1AAAAAElFTkSuQmCC","aspectRatio":1.399449035812672,"src":"/static/cca8bf92213dc2861d73487e05cd756f/a54c6/policy-smart-design.png","srcSet":"/static/cca8bf92213dc2861d73487e05cd756f/59beb/policy-smart-design.png 200w,\\n/static/cca8bf92213dc2861d73487e05cd756f/c0bbd/policy-smart-design.png 400w,\\n/static/cca8bf92213dc2861d73487e05cd756f/a54c6/policy-smart-design.png 800w,\\n/static/cca8bf92213dc2861d73487e05cd756f/d37a8/policy-smart-design.png 1016w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    xfY5: function(e, t, a) {
      "use strict";
      var n = a("dyZX"),
        r = a("aagx"),
        i = a("LZWt"),
        o = a("Xbzi"),
        c = a("apmT"),
        l = a("eeVq"),
        s = a("kJMx").f,
        u = a("EemH").f,
        d = a("hswa").f,
        m = a("qncB").trim,
        p = n.Number,
        f = p,
        g = p.prototype,
        A = "Number" == i(a("Kuth")(g)),
        b = "trim" in String.prototype,
        h = function(e) {
          var t = c(e, !1);
          if ("string" == typeof t && t.length > 2) {
            var a,
              n,
              r,
              i = (t = b ? t.trim() : m(t, 3)).charCodeAt(0);
            if (43 === i || 45 === i) {
              if (88 === (a = t.charCodeAt(2)) || 120 === a) return NaN;
            } else if (48 === i) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (n = 2), (r = 49);
                  break;
                case 79:
                case 111:
                  (n = 8), (r = 55);
                  break;
                default:
                  return +t;
              }
              for (var o, l = t.slice(2), s = 0, u = l.length; s < u; s++)
                if ((o = l.charCodeAt(s)) < 48 || o > r) return NaN;
              return parseInt(l, n);
            }
          }
          return +t;
        };
      if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(e) {
          var t = arguments.length < 1 ? 0 : e,
            a = this;
          return a instanceof p &&
            (A
              ? l(function() {
                  g.valueOf.call(a);
                })
              : "Number" != i(a))
            ? o(new f(h(t)), a, p)
            : h(t);
        };
        for (
          var y,
            v = a("nh4g")
              ? s(f)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            E = 0;
          v.length > E;
          E++
        )
          r(f, (y = v[E])) && !r(p, y) && d(p, y, u(f, y));
        (p.prototype = g), (g.constructor = p), a("KroJ")(n, "Number", p);
      }
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-7f6da4d89c862622311f.js.map