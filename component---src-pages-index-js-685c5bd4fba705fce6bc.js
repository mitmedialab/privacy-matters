(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "+YAX": function(e, t, a) {
      var n = a("2nzh"),
        r = a("1PpB"),
        c = a("cqv3");
      e.exports = function(e) {
        return n(e) || r(e) || c();
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
            c = void 0;
          try {
            for (
              var o, i = e[Symbol.iterator]();
              !(n = (o = i.next()).done) &&
              (a.push(o.value), !t || a.length !== t);
              n = !0
            );
          } catch (l) {
            (r = !0), (c = l);
          } finally {
            try {
              n || null == i.return || i.return();
            } finally {
              if (r) throw c;
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
      function c(e, t) {
        try {
          return decodeURIComponent(e.join(""));
        } catch (r) {}
        if (1 === e.length) return e;
        t = t || 1;
        var a = e.slice(0, t),
          n = e.slice(t);
        return Array.prototype.concat.call([], c(a), c(n));
      }
      function o(e) {
        try {
          return decodeURIComponent(e);
        } catch (r) {
          for (var t = e.match(n), a = 1; a < t.length; a++)
            t = (e = c(t, a).join("")).match(n);
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
                var c = o(n[0]);
                c !== n[0] && (a[n[0]] = c);
              }
              n = r.exec(e);
            }
            a["%C2"] = "�";
            for (var i = Object.keys(a), l = 0; l < i.length; l++) {
              var s = i[l];
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
        '{"data":{"markdownRemark":{"html":"<h2>Bans infinite scroll, autoplay, and other addictive features on social media</h2>\\n<h2>Requires choice parity for consent</h2>\\n<h2>Gives the FTC and HHS authority to ban other similar practices</h2>\\n<h2>Gives users power to monitor and control their use time on social media</h2>","frontmatter":{"title":"SMART"}}}}'
      );
    },
    BPGI: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<h2>Creating User Rights</h2>\\n<h2>Placing Clear Obligations on Companies</h2>\\n<h2>Establishing a Digital Privacy Agency (DPA)</h2>\\n<h2>Strengthening Enforcement</h2>","frontmatter":{"title":"About the Online Policy Act"}}}}'
      );
    },
    HsiO: function(e, t, a) {
      var n = a("Z6+o"),
        r = a("6R51"),
        c = a("UlM4");
      e.exports = function(e, t) {
        return n(e) || r(e, t) || c();
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
        c = a("Wbzz"),
        o = a("Bl7J"),
        i = a("ezAz"),
        l = a("9eSz"),
        s = a.n(l),
        u = function() {
          var e = i.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        d = a("vrFN"),
        f = (a("rGqo"), a("yt8O"), a("Btvt"), a("RW0V"), a("ok1R")),
        m = a("rhny"),
        p = a("k1TG"),
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
        N = function(e) {
          var t = e.className,
            a = e.cssModule,
            n = e.color,
            c = e.body,
            o = e.inverse,
            i = e.outline,
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
                !!c && "card-body",
                !!n && (i ? "border" : "bg") + "-" + n
              ),
              a
            );
          return r.a.createElement(
            l,
            Object(p.a)({}, u, { className: d, ref: s })
          );
        };
      (N.propTypes = E), (N.defaultProps = { tag: "div" });
      var w = N,
        R = { tag: v.c, className: b.a.string, cssModule: b.a.object },
        O = function(e) {
          var t = e.className,
            a = e.cssModule,
            n = e.tag,
            c = Object(g.a)(e, ["className", "cssModule", "tag"]),
            o = Object(v.b)(y()(t, "card-title"), a);
          return r.a.createElement(n, Object(p.a)({}, c, { className: o }));
        };
      (O.propTypes = R), (O.defaultProps = { tag: "div" });
      var I = O,
        S = { tag: v.c, className: b.a.string, cssModule: b.a.object },
        x = function(e) {
          var t = e.className,
            a = e.cssModule,
            n = e.tag,
            c = Object(g.a)(e, ["className", "cssModule", "tag"]),
            o = Object(v.b)(y()(t, "card-text"), a);
          return r.a.createElement(n, Object(p.a)({}, c, { className: o }));
        };
      (x.propTypes = S), (x.defaultProps = { tag: "p" });
      var k,
        C = x,
        M = a("sOKU"),
        T = a("qN1e"),
        j = function() {
          var e = T.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        P = a("OnBO"),
        U = function() {
          var e = P.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        V = a("lxgn"),
        B = function() {
          var e = V.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        Y =
          (((k = {}).SMART = {
            short: "SMART Act",
            long: "Social Media Addiction Reduction Technology Act (SMART)",
            summary:
              "Bans dark patterns + addictive features and raises user awareness on social media."
          }),
          (k.ONLINE_PRIVACY = {
            short: "OPA",
            long: "Online Privacy Act (OPA)",
            summary:
              "Creates user data rights and strengthens enforcement with a Digital Privacy Agency and state level attorneys."
          }),
          (k.CORPA = {
            short: "CORPA",
            long: "Consumer Online Privacy Rights Act (COPRA)",
            summary:
              "Codifies privacy as a right and creates a private right of action to enforce privacy rights and enforce oversight of platforms."
          }),
          k),
        q =
          (a("WfgN"),
          function(e) {
            var t,
              a = e.policies,
              n = e.onClick,
              c =
                (((t = {}).SMART = r.a.createElement(j, null)),
                (t.ONLINE_PRIVACY = r.a.createElement(U, null)),
                (t.CORPA = r.a.createElement(B, null)),
                t);
            return r.a.createElement(
              r.a.Fragment,
              null,
              Object.keys(a).map(function(e) {
                return r.a.createElement(
                  m.a,
                  {
                    key: "policy-select-button-" + e,
                    md: 4,
                    sm: 12,
                    className: "pb-3"
                  },
                  r.a.createElement(
                    w,
                    { body: !0, className: "bill-card h-100" },
                    c[e],
                    r.a.createElement(
                      I,
                      { className: "card-title" },
                      a[e].long
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
                        className: "w-100 mt-auto"
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
                (((t = {}).SMART = r.a.createElement(j, null)),
                (t.ONLINE_PRIVACY = r.a.createElement(U, null)),
                (t.CORPA = r.a.createElement(B, null)),
                t);
            return r.a.createElement(
              "div",
              { className: "my-3" },
              r.a.createElement(
                "h3",
                { className: "mb-5" },
                "How might a social media platform look like if this bill were passed?"
              ),
              n[a]
            );
          }),
        H = a("Aokb"),
        L = function(e) {
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
        K = function(e) {
          var t = H.data.markdownRemark;
          return r.a.createElement(L, {
            markdownRemark: t,
            fullPolicyLink:
              "https://www.hawley.senate.gov/sites/default/files/2019-07/Social-Media-Addiction-Reduction-Technology-Act.pdf"
          });
        },
        z = a("BPGI"),
        J = function(e) {
          var t = z.data.markdownRemark;
          return r.a.createElement(L, {
            markdownRemark: t,
            fullPolicyLink:
              "https://eshoo.house.gov/sites/eshoo.house.gov/files/migrated/wp-content/uploads/2019/11/Bill-Text-Online-Privacy-Act-Eshoo-Lofgren.pdf"
          });
        },
        G = a("fcRk"),
        X = function(e) {
          var t = G.data.markdownRemark;
          return r.a.createElement(L, {
            markdownRemark: t,
            fullPolicyLink:
              "https://www.cantwell.senate.gov/imo/media/doc/COPRA%20Bill%20Text.pdf"
          });
        },
        W =
          (a("/ohh"),
          function(e) {
            var t = e.selectedPolicy;
            return "SMART" === t
              ? r.a.createElement(K, null)
              : "ONLINE_PRIVACY" === t
              ? r.a.createElement(J, null)
              : "CORPA" === t
              ? r.a.createElement(X, null)
              : void 0;
          }),
        Q = a("eSms"),
        D =
          (a("oJSB"),
          function(e) {
            var t = e.node,
              a = t.frontmatter,
              n = t.html;
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                m.a,
                { className: "quote-prompt my-3", xs: 12 },
                r.a.createElement("div", null, a.prompt)
              ),
              r.a.createElement(
                m.a,
                { xs: 12 },
                r.a.createElement(
                  f.a,
                  null,
                  r.a.createElement(
                    m.a,
                    { xs: 3 },
                    r.a.createElement(
                      "div",
                      { className: "text-center display-1" },
                      "🦊"
                    )
                  ),
                  r.a.createElement(
                    m.a,
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
            a = Q.data;
          return r.a.createElement(
            r.a.Fragment,
            null,
            a.allMarkdownRemark.edges
              .filter(function(e) {
                return e.node.frontmatter.policy === t;
              })
              .map(function(e) {
                return r.a.createElement(D, {
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
                f.a,
                { className: "py-3" },
                r.a.createElement(m.a, null, r.a.createElement("h1", null, a))
              ),
              r.a.createElement(
                f.a,
                { className: "pb-3" },
                r.a.createElement(
                  m.a,
                  { md: 3 },
                  r.a.createElement(W, { selectedPolicy: n })
                ),
                r.a.createElement(
                  m.a,
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
              f.a,
              { className: "py-5" },
              r.a.createElement(q, {
                policies: Y,
                onClick: function(e) {
                  return Object(_.a)(t[e]);
                }
              })
            ),
            Object.keys(Y).map(function(e) {
              return r.a.createElement($, {
                key: "policy-layout-" + e,
                title: Y[e].long,
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
                r.a.createElement(c.Link, { to: "/page-2/" }, "Go to page 2")
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
        c = a("Pmem"),
        o = a("8jRI"),
        i = a("8yz6");
      function l(e, t) {
        return t.encode ? (t.strict ? c(e) : encodeURIComponent(e)) : e;
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
      function f(e, t) {
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
      function m(e, t) {
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
        var c = !0,
          o = !1,
          l = void 0;
        try {
          for (
            var u, d = e.split("&")[Symbol.iterator]();
            !(c = (u = d.next()).done);
            c = !0
          ) {
            var m = u.value,
              p = i(t.decode ? m.replace(/\+/g, " ") : m, "="),
              g = n(p, 2),
              A = g[0],
              b = g[1];
            (b = void 0 === b ? null : s(b, t)), a(s(A, t), b, r);
          }
        } catch (O) {
          (o = !0), (l = O);
        } finally {
          try {
            c || null == d.return || d.return();
          } finally {
            if (o) throw l;
          }
        }
        for (var h = 0, y = Object.keys(r); h < y.length; h++) {
          var v = y[h],
            E = r[v];
          if ("object" == typeof E && null !== E)
            for (var N = 0, w = Object.keys(E); N < w.length; N++) {
              var R = w[N];
              E[R] = f(E[R], t);
            }
          else r[v] = f(E, t);
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
        (t.parse = m),
        (t.stringify = function(e, t) {
          if (!e) return "";
          var a = (function(e) {
              switch (e.arrayFormat) {
                case "index":
                  return function(t) {
                    return function(a, n) {
                      var c = a.length;
                      return void 0 === n || (e.skipNull && null === n)
                        ? a
                        : [].concat(
                            r(a),
                            null === n
                              ? [[l(t, e), "[", c, "]"].join("")]
                              : [
                                  [l(t, e), "[", l(c, e), "]=", l(n, e)].join(
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
            for (var c = 0, o = Object.keys(n); c < o.length; c++) {
              var i = o[c];
              (void 0 !== n[i] && null !== n[i]) || delete n[i];
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
          return { url: u(e).split("?")[0] || "", query: m(d(e), t) };
        }),
        (t.stringifyUrl = function(e, a) {
          var n = u(e.url).split("?")[0] || "",
            r = t.extract(e.url),
            c = t.parse(r),
            o = (function(e) {
              var t = "",
                a = e.indexOf("#");
              return -1 !== a && (t = e.slice(a)), t;
            })(e.url),
            i = Object.assign(c, e.query),
            l = t.stringify(i, a);
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
        '{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"c1300853-83f0-5ac8-ad4c-a659385bb318","frontmatter":{"quotee":"Name, Lawyer","policy":"SMART","prompt":"How did a lawyer respond?"},"html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"}},{"node":{"id":"99c29eac-d1ed-5636-9336-8398e6705b3a","frontmatter":{"quotee":"Name, Designer","policy":"CORPA","prompt":"How did a designer respond?"},"html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"}},{"node":{"id":"5c468cd4-4576-5182-bd6f-6fa7a389e164","frontmatter":{"quotee":"Name, Researcher","policy":"ONLINE_PRIVACY","prompt":"How did a researcher respond?"},"html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"}}]}}}'
      );
    },
    ezAz: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'
      );
    },
    fcRk: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<h2>Codifies privacy as a right</h2>\\n<h2>Creates new enforcement powers for the FTC to take action against unlawful discrimination</h2>\\n<h2>Empowers consumers with a strong private right of action</h2>\\n<h2>Creates accountability requirements so that senior executives take responsibility for decisions that impact privacy and risk penalties when they fall short</h2>\\n<h2>Gives states the authority to fully enforce COPRA</h2>","frontmatter":{"title":"About CORPA"}}}}'
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
        c = a("LZWt"),
        o = a("Xbzi"),
        i = a("apmT"),
        l = a("eeVq"),
        s = a("kJMx").f,
        u = a("EemH").f,
        d = a("hswa").f,
        f = a("qncB").trim,
        m = n.Number,
        p = m,
        g = m.prototype,
        A = "Number" == c(a("Kuth")(g)),
        b = "trim" in String.prototype,
        h = function(e) {
          var t = i(e, !1);
          if ("string" == typeof t && t.length > 2) {
            var a,
              n,
              r,
              c = (t = b ? t.trim() : f(t, 3)).charCodeAt(0);
            if (43 === c || 45 === c) {
              if (88 === (a = t.charCodeAt(2)) || 120 === a) return NaN;
            } else if (48 === c) {
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
      if (!m(" 0o1") || !m("0b1") || m("+0x1")) {
        m = function(e) {
          var t = arguments.length < 1 ? 0 : e,
            a = this;
          return a instanceof m &&
            (A
              ? l(function() {
                  g.valueOf.call(a);
                })
              : "Number" != c(a))
            ? o(new p(h(t)), a, m)
            : h(t);
        };
        for (
          var y,
            v = a("nh4g")
              ? s(p)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            E = 0;
          v.length > E;
          E++
        )
          r(p, (y = v[E])) && !r(m, y) && d(m, y, u(p, y));
        (m.prototype = g), (g.constructor = m), a("KroJ")(n, "Number", m);
      }
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-685c5bd4fba705fce6bc.js.map
