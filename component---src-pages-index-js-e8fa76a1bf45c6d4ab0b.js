(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "+YAX": function(e, t, n) {
      var a = n("2nzh"),
        r = n("1PpB"),
        i = n("cqv3");
      e.exports = function(e) {
        return a(e) || r(e) || i();
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
          for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t];
          return n;
        }
      };
    },
    "6R51": function(e, t) {
      e.exports = function(e, t) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        ) {
          var n = [],
            a = !0,
            r = !1,
            i = void 0;
          try {
            for (
              var o, c = e[Symbol.iterator]();
              !(a = (o = c.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              a = !0
            );
          } catch (l) {
            (r = !0), (i = l);
          } finally {
            try {
              a || null == c.return || c.return();
            } finally {
              if (r) throw i;
            }
          }
          return n;
        }
      };
    },
    "7h0T": function(e, t, n) {
      var a = n("XKFU");
      a(a.S, "Number", {
        isNaN: function(e) {
          return e != e;
        }
      });
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
      var a = new RegExp("%[a-f0-9]{2}", "gi"),
        r = new RegExp("(%[a-f0-9]{2})+", "gi");
      function i(e, t) {
        try {
          return decodeURIComponent(e.join(""));
        } catch (r) {}
        if (1 === e.length) return e;
        t = t || 1;
        var n = e.slice(0, t),
          a = e.slice(t);
        return Array.prototype.concat.call([], i(n), i(a));
      }
      function o(e) {
        try {
          return decodeURIComponent(e);
        } catch (r) {
          for (var t = e.match(a), n = 1; n < t.length; n++)
            t = (e = i(t, n).join("")).match(a);
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
              var n = { "%FE%FF": "��", "%FF%FE": "��" }, a = r.exec(e);
              a;

            ) {
              try {
                n[a[0]] = decodeURIComponent(a[0]);
              } catch (t) {
                var i = o(a[0]);
                i !== a[0] && (n[a[0]] = i);
              }
              a = r.exec(e);
            }
            n["%C2"] = "�";
            for (var c = Object.keys(n), l = 0; l < c.length; l++) {
              var s = c[l];
              e = e.replace(new RegExp(s, "g"), n[s]);
            }
            return e;
          })(e);
        }
      };
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
    HsiO: function(e, t, n) {
      var a = n("Z6+o"),
        r = n("6R51"),
        i = n("UlM4");
      e.exports = function(e, t) {
        return a(e) || r(e, t) || i();
      };
    },
    OnBO: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACjUlEQVQ4y3VTXUsbURDNj/RJ6B/wP/RJn/JgMRqQRB8ULCiIohH6IklaECktYhK3xISsSTZfu5tkN/u9G3M6MyHSCl4YZu/dO2fOnJmbMk0TjuPAsiyxXq8n3vd9eJ73obmuK3Gz2UzuT6dT6LqOFAeyOY6HKIqgqiomkwnCMMTq33tjwPl8jsViIaDqSxv1ep3IaAzowjA8NJuBAHEA+yRJJOgjY2YM+Pr6+gbOiVJB4BNVE4+PVTQaz3LIgEEQCGNmyn5lfM53mNn7xf+IYUAMddRqNcnEQePxGMPhUGw0Gomug8FAPGtu27ZoyIsZxnEsxuepZYlTYteUDAzKgYWbG+TzeeRyOezu7mJzcxPr6+tIp9MCxCXz4uSMwYkURUGK6du2RSVMOZ9kYmbHx8col8vY29vDycmJAK+trWFjY+M/wG63i1ZLlW8GJUAX44lDOs6pESCLpMzT01McHh4ik8lge3sbBwcHODo6wvn5+VIv31syNHUCfKa4eAmYRCHGxgzFUhP9vk0lxwSoo1Kp4Pb2FjdU+tXVFS4vL1EoFPCkPGH8+w80bYiXGY1M1yKWoMoWS0B1MMKvegMIbWCRIKSmmKaBdrtNmVvieTY7nY40xiWJ4kYXd7VnfLmr4EdNw0sLaHcWQiT1XWng87d7VLQR1KEOnyTgIG7Qyljn5fA74kkZmTtecyo1SULR3rKoy5Y9w1eli0/XP5G5V+SS6/nynFh4HoWV5xHhGe1pmrDVDYO0N9Dv9amRA+m4NOVtMKNYfLVaRbFYlAZcXFyIhqVSSWaUz7a2tpDNZnF2dob9/X3Z7+zs4OHhgRnaBBSJdgnR5qDVQzeIwb/G5TNDZsejxU3g89UD4P1f/UwDKldtYIwAAAAASUVORK5CYII=","aspectRatio":1.4369747899159664,"src":"/static/a522318e5bbdf90b3675e545017242e5/a54c6/policy-online-privacy-design.png","srcSet":"/static/a522318e5bbdf90b3675e545017242e5/59beb/policy-online-privacy-design.png 200w,\\n/static/a522318e5bbdf90b3675e545017242e5/c0bbd/policy-online-privacy-design.png 400w,\\n/static/a522318e5bbdf90b3675e545017242e5/a54c6/policy-online-privacy-design.png 800w,\\n/static/a522318e5bbdf90b3675e545017242e5/6d3f1/policy-online-privacy-design.png 1026w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
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
    RXBc: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("q1tI"),
        r = n.n(a),
        i = n("Wbzz"),
        o = n("Bl7J"),
        c = n("ezAz"),
        l = n("9eSz"),
        s = n.n(l),
        u = function() {
          var e = c.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        d = n("vrFN"),
        p = n("ok1R"),
        f = n("rhny"),
        m = (n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("2Spj"), n("k1TG")),
        g = n("8o2o");
      var A = n("17x9"),
        b = n.n(A),
        h = n("TSYQ"),
        y = n.n(h),
        v = n("33Jr"),
        E = {
          active: b.a.bool,
          "aria-label": b.a.string,
          block: b.a.bool,
          color: b.a.string,
          disabled: b.a.bool,
          outline: b.a.bool,
          tag: v.c,
          innerRef: b.a.oneOfType([b.a.object, b.a.func, b.a.string]),
          onClick: b.a.func,
          size: b.a.string,
          children: b.a.node,
          className: b.a.string,
          cssModule: b.a.object,
          close: b.a.bool
        },
        w = (function(e) {
          var t, n;
          function a(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).onClick = n.onClick.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(n)
              )),
              n
            );
          }
          (n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var i = a.prototype;
          return (
            (i.onClick = function(e) {
              this.props.disabled
                ? e.preventDefault()
                : this.props.onClick && this.props.onClick(e);
            }),
            (i.render = function() {
              var e = this.props,
                t = e.active,
                n = e["aria-label"],
                a = e.block,
                i = e.className,
                o = e.close,
                c = e.cssModule,
                l = e.color,
                s = e.outline,
                u = e.size,
                d = e.tag,
                p = e.innerRef,
                f = Object(g.a)(e, [
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
              o &&
                void 0 === f.children &&
                (f.children = r.a.createElement(
                  "span",
                  { "aria-hidden": !0 },
                  "×"
                ));
              var A = "btn" + (s ? "-outline" : "") + "-" + l,
                b = Object(v.b)(
                  y()(
                    i,
                    { close: o },
                    o || "btn",
                    o || A,
                    !!u && "btn-" + u,
                    !!a && "btn-block",
                    { active: t, disabled: this.props.disabled }
                  ),
                  c
                );
              f.href && "button" === d && (d = "a");
              var h = o ? "Close" : null;
              return r.a.createElement(
                d,
                Object(m.a)(
                  { type: "button" === d && f.onClick ? "button" : void 0 },
                  f,
                  {
                    className: b,
                    ref: p,
                    onClick: this.onClick,
                    "aria-label": n || h
                  }
                )
              );
            }),
            a
          );
        })(r.a.Component);
      (w.propTypes = E),
        (w.defaultProps = { color: "secondary", tag: "button" });
      var R,
        N = w,
        I = function(e) {
          var t = e.selectedPolicy,
            n = e.policies,
            a = e.onClick;
          return r.a.createElement(
            r.a.Fragment,
            null,
            Object.keys(n).map(function(e) {
              return r.a.createElement(
                f.a,
                { key: "policy-select-button-" + e },
                r.a.createElement(
                  N,
                  {
                    color: t === e ? "primary" : "secondary",
                    onClick: function(t) {
                      return a(e);
                    },
                    size: "lg",
                    className: "w-100"
                  },
                  n[e].short
                )
              );
            })
          );
        },
        k =
          (((R = {}).SMART = {
            short: "SMART Act",
            long: "SMART Act (Social Media Addiction Reduction Technology)"
          }),
          (R.ONLINE_PRIVACY = {
            short: "Online Privacy Act",
            long: "The Online Privacy Act"
          }),
          (R.CORPA = {
            short: "CORPA",
            long: "COPRA (Consumer Online Privacy Rights Act)"
          }),
          R),
        O = n("qN1e"),
        S = function() {
          var e = O.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        C = n("OnBO"),
        x = function() {
          var e = C.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        T = n("lxgn"),
        M = function() {
          var e = T.data;
          return r.a.createElement(s.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        j =
          (n("pwFx"),
          function(e) {
            var t,
              n = e.selectedPolicy;
            return (
              "SMART" === n
                ? (t = r.a.createElement(S, null))
                : "ONLINE_PRIVACY" === n
                ? (t = r.a.createElement(x, null))
                : "CORPA" === n && (t = r.a.createElement(M, null)),
              r.a.createElement("div", { className: "m-3" }, t)
            );
          }),
        U = n("Aokb"),
        P = function(e) {
          var t = e.markdownRemark,
            n = (t.frontmatter, t.html);
          return r.a.createElement(
            "div",
            { className: "policy-about pt-3 pb-5" },
            r.a.createElement("div", {
              dangerouslySetInnerHTML: { __html: n }
            }),
            r.a.createElement(
              N,
              { block: !0, size: "lg", color: "link" },
              "See Full Bill"
            )
          );
        },
        V = function(e) {
          var t = U.data.markdownRemark;
          return r.a.createElement(P, { markdownRemark: t });
        },
        B = n("BPGI"),
        Y = function(e) {
          var t = B.data.markdownRemark;
          return r.a.createElement(P, { markdownRemark: t });
        },
        z = n("fcRk"),
        q = function(e) {
          var t = z.data.markdownRemark;
          return r.a.createElement(P, { markdownRemark: t });
        },
        F =
          (n("/ohh"),
          function(e) {
            var t = e.selectedPolicy;
            return "SMART" === t
              ? r.a.createElement(V, null)
              : "ONLINE_PRIVACY" === t
              ? r.a.createElement(Y, null)
              : "CORPA" === t
              ? r.a.createElement(q, null)
              : void 0;
          }),
        K = n("Z82V"),
        H = function(e) {
          var t = e.node,
            n = t.frontmatter,
            a = t.html;
          return r.a.createElement(
            "blockquote",
            { className: "blockquote text-center" },
            r.a.createElement("div", { className: "display-1" }, "🦊"),
            r.a.createElement("div", {
              dangerouslySetInnerHTML: { __html: a }
            }),
            r.a.createElement(
              "footer",
              { className: "blockquote-footer" },
              n.quotee
            )
          );
        },
        J = function(e) {
          var t = e.selectedPolicy,
            n = K.data;
          return r.a.createElement(
            p.a,
            { className: "pb-5" },
            n.allMarkdownRemark.edges
              .filter(function(e) {
                return e.node.frontmatter.policy === t;
              })
              .map(function(e) {
                return r.a.createElement(
                  f.a,
                  { sm: 4, key: t + "-" + e.node.frontmatter.quotee },
                  r.a.createElement(H, { node: e.node })
                );
              })
          );
        },
        X = function() {
          var e = Object(a.useState)("SMART"),
            t = e[0],
            n = e[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              p.a,
              { className: "py-5" },
              r.a.createElement(I, {
                selectedPolicy: t,
                policies: k,
                onClick: n
              })
            ),
            r.a.createElement(
              p.a,
              { className: "py-3" },
              r.a.createElement(
                f.a,
                null,
                r.a.createElement("h1", null, k[t].long)
              )
            ),
            r.a.createElement(
              p.a,
              { className: "pb-3" },
              r.a.createElement(
                f.a,
                { md: 6 },
                r.a.createElement(F, { selectedPolicy: t })
              ),
              r.a.createElement(
                f.a,
                { md: 6 },
                r.a.createElement(j, { selectedPolicy: t, policies: k })
              )
            ),
            r.a.createElement(J, { selectedPolicy: t })
          );
        },
        G = (n("KKXr"), n("OG14"), n("cr+I")),
        L = n.n(G);
      function W(e) {
        var t,
          n =
            ((t = "ft"),
            "undefined" != typeof window
              ? L.a.parse(window.location.search)[t]
              : "");
        return !!n && n.split(",").indexOf(e) > -1;
      }
      n("q4sD"),
        (t.default = function() {
          return W("PRIVACY_MATTERS_2020")
            ? r.a.createElement(o.a, null, r.a.createElement(X, null))
            : r.a.createElement(
                o.a,
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
    Z82V: function(e) {
      e.exports = JSON.parse(
        '{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"2eba466e-2d00-5231-9e92-8a4240f49186","frontmatter":{"quotee":"Dennis Jen, Engineer","policy":"SMART"},"html":"<p>This is a test of a quote.</p>"}}]}}}'
      );
    },
    cqv3: function(e, t) {
      e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      };
    },
    "cr+I": function(e, t, n) {
      "use strict";
      n("0l/t");
      var a = n("HsiO");
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
      var r = n("+YAX"),
        i = n("Pmem"),
        o = n("8jRI"),
        c = n("8yz6");
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
      function p(e, t) {
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
      function f(e, t) {
        var n = (function(e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function(e, n, a) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === a[e] && (a[e] = {}), (a[e][t[1]] = n))
                      : (a[e] = n);
                };
              case "bracket":
                return function(e, n, a) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== a[e]
                        ? (a[e] = [].concat(a[e], n))
                        : (a[e] = [n])
                      : (a[e] = n);
                };
              case "comma":
                return function(e, t, n) {
                  var a =
                    "string" == typeof t && t.split("").indexOf(",") > -1
                      ? t.split(",")
                      : t;
                  n[e] = a;
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
            var f = u.value,
              m = c(t.decode ? f.replace(/\+/g, " ") : f, "="),
              g = a(m, 2),
              A = g[0],
              b = g[1];
            (b = void 0 === b ? null : s(b, t)), n(s(A, t), b, r);
          }
        } catch (I) {
          (o = !0), (l = I);
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
            for (var w = 0, R = Object.keys(E); w < R.length; w++) {
              var N = R[w];
              E[N] = p(E[N], t);
            }
          else r[v] = p(E, t);
        }
        return !1 === t.sort
          ? r
          : (!0 === t.sort
              ? Object.keys(r).sort()
              : Object.keys(r).sort(t.sort)
            ).reduce(function(e, t) {
              var n = r[t];
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
      (t.extract = d),
        (t.parse = f),
        (t.stringify = function(e, t) {
          if (!e) return "";
          var n = (function(e) {
              switch (e.arrayFormat) {
                case "index":
                  return function(t) {
                    return function(n, a) {
                      var i = n.length;
                      return void 0 === a || (e.skipNull && null === a)
                        ? n
                        : [].concat(
                            r(n),
                            null === a
                              ? [[l(t, e), "[", i, "]"].join("")]
                              : [
                                  [l(t, e), "[", l(i, e), "]=", l(a, e)].join(
                                    ""
                                  )
                                ]
                          );
                    };
                  };
                case "bracket":
                  return function(t) {
                    return function(n, a) {
                      return void 0 === a || (e.skipNull && null === a)
                        ? n
                        : [].concat(
                            r(n),
                            null === a
                              ? [[l(t, e), "[]"].join("")]
                              : [[l(t, e), "[]=", l(a, e)].join("")]
                          );
                    };
                  };
                case "comma":
                  return function(t) {
                    return function(n, a) {
                      return null == a || 0 === a.length
                        ? n
                        : 0 === n.length
                        ? [[l(t, e), "=", l(a, e)].join("")]
                        : [[n, l(a, e)].join(",")];
                    };
                  };
                default:
                  return function(t) {
                    return function(n, a) {
                      return void 0 === a || (e.skipNull && null === a)
                        ? n
                        : [].concat(
                            r(n),
                            null === a
                              ? [l(t, e)]
                              : [[l(t, e), "=", l(a, e)].join("")]
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
            a = Object.assign({}, e);
          if (t.skipNull)
            for (var i = 0, o = Object.keys(a); i < o.length; i++) {
              var c = o[i];
              (void 0 !== a[c] && null !== a[c]) || delete a[c];
            }
          var s = Object.keys(a);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map(function(a) {
                var r = e[a];
                return void 0 === r
                  ? ""
                  : null === r
                  ? l(a, t)
                  : Array.isArray(r)
                  ? r.reduce(n(a), []).join("&")
                  : l(a, t) + "=" + l(r, t);
              })
              .filter(function(e) {
                return e.length > 0;
              })
              .join("&")
          );
        }),
        (t.parseUrl = function(e, t) {
          return { url: u(e).split("?")[0] || "", query: f(d(e), t) };
        }),
        (t.stringifyUrl = function(e, n) {
          var a = u(e.url).split("?")[0] || "",
            r = t.extract(e.url),
            i = t.parse(r),
            o = (function(e) {
              var t = "",
                n = e.indexOf("#");
              return -1 !== n && (t = e.slice(n)), t;
            })(e.url),
            c = Object.assign(i, e.query),
            l = t.stringify(c, n);
          return (
            l && (l = "?".concat(l)),
            ""
              .concat(a)
              .concat(l)
              .concat(o)
          );
        });
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
    xfY5: function(e, t, n) {
      "use strict";
      var a = n("dyZX"),
        r = n("aagx"),
        i = n("LZWt"),
        o = n("Xbzi"),
        c = n("apmT"),
        l = n("eeVq"),
        s = n("kJMx").f,
        u = n("EemH").f,
        d = n("hswa").f,
        p = n("qncB").trim,
        f = a.Number,
        m = f,
        g = f.prototype,
        A = "Number" == i(n("Kuth")(g)),
        b = "trim" in String.prototype,
        h = function(e) {
          var t = c(e, !1);
          if ("string" == typeof t && t.length > 2) {
            var n,
              a,
              r,
              i = (t = b ? t.trim() : p(t, 3)).charCodeAt(0);
            if (43 === i || 45 === i) {
              if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === i) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (a = 2), (r = 49);
                  break;
                case 79:
                case 111:
                  (a = 8), (r = 55);
                  break;
                default:
                  return +t;
              }
              for (var o, l = t.slice(2), s = 0, u = l.length; s < u; s++)
                if ((o = l.charCodeAt(s)) < 48 || o > r) return NaN;
              return parseInt(l, a);
            }
          }
          return +t;
        };
      if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
        f = function(e) {
          var t = arguments.length < 1 ? 0 : e,
            n = this;
          return n instanceof f &&
            (A
              ? l(function() {
                  g.valueOf.call(n);
                })
              : "Number" != i(n))
            ? o(new m(h(t)), n, f)
            : h(t);
        };
        for (
          var y,
            v = n("nh4g")
              ? s(m)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            E = 0;
          v.length > E;
          E++
        )
          r(m, (y = v[E])) && !r(f, y) && d(f, y, u(m, y));
        (f.prototype = g), (g.constructor = f), n("KroJ")(a, "Number", f);
      }
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-e8fa76a1bf45c6d4ab0b.js.map
