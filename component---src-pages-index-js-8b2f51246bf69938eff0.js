(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "+YAX": function(e, t, r) {
      var a = r("2nzh"),
        n = r("1PpB"),
        i = r("cqv3");
      e.exports = function(e) {
        return a(e) || n(e) || i();
      };
    },
    "0mN4": function(e, t, r) {
      "use strict";
      r("OGtf")("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
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
          for (var t = 0, r = new Array(e.length); t < e.length; t++)
            r[t] = e[t];
          return r;
        }
      };
    },
    "6R51": function(e, t) {
      e.exports = function(e, t) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        ) {
          var r = [],
            a = !0,
            n = !1,
            i = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(a = (o = s.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              a = !0
            );
          } catch (l) {
            (n = !0), (i = l);
          } finally {
            try {
              a || null == s.return || s.return();
            } finally {
              if (n) throw i;
            }
          }
          return r;
        }
      };
    },
    "7h0T": function(e, t, r) {
      var a = r("XKFU");
      a(a.S, "Number", {
        isNaN: function(e) {
          return e != e;
        }
      });
    },
    "8jRI": function(e, t, r) {
      "use strict";
      r("pIFo"),
        r("rGqo"),
        r("yt8O"),
        r("Btvt"),
        r("RW0V"),
        r("SRfc"),
        r("Oyvg");
      var a = new RegExp("%[a-f0-9]{2}", "gi"),
        n = new RegExp("(%[a-f0-9]{2})+", "gi");
      function i(e, t) {
        try {
          return decodeURIComponent(e.join(""));
        } catch (n) {}
        if (1 === e.length) return e;
        t = t || 1;
        var r = e.slice(0, t),
          a = e.slice(t);
        return Array.prototype.concat.call([], i(r), i(a));
      }
      function o(e) {
        try {
          return decodeURIComponent(e);
        } catch (n) {
          for (var t = e.match(a), r = 1; r < t.length; r++)
            t = (e = i(t, r).join("")).match(a);
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
              var r = { "%FE%FF": "��", "%FF%FE": "��" }, a = n.exec(e);
              a;

            ) {
              try {
                r[a[0]] = decodeURIComponent(a[0]);
              } catch (t) {
                var i = o(a[0]);
                i !== a[0] && (r[a[0]] = i);
              }
              a = n.exec(e);
            }
            r["%C2"] = "�";
            for (var s = Object.keys(r), l = 0; l < s.length; l++) {
              var c = s[l];
              e = e.replace(new RegExp(c, "g"), r[c]);
            }
            return e;
          })(e);
        }
      };
    },
    "8yz6": function(e, t, r) {
      "use strict";
      r("V+eJ"),
        (e.exports = function(e, t) {
          if ("string" != typeof e || "string" != typeof t)
            throw new TypeError(
              "Expected the arguments to be of type `string`"
            );
          if ("" === t) return [e];
          var r = e.indexOf(t);
          return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
        });
    },
    "9eSz": function(e, t, r) {
      "use strict";
      r("rGqo"), r("yt8O"), r("Btvt"), r("XfO3"), r("EK0E"), r("0mN4");
      var a = r("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var n,
        i = a(r("v06X")),
        o = a(r("XEEL")),
        s = a(r("uDP2")),
        l = a(r("j8BX")),
        c = a(r("q1tI")),
        u = a(r("17x9")),
        d = function(e) {
          var t = (0, l.default)({}, e),
            r = t.resolutions,
            a = t.sizes,
            n = t.critical;
          return (
            r && ((t.fixed = r), delete t.resolutions),
            a && ((t.fluid = a), delete t.sizes),
            n && (t.loading = "eager"),
            t.fluid && (t.fluid = E([].concat(t.fluid))),
            t.fixed && (t.fixed = E([].concat(t.fixed))),
            t
          );
        },
        f = function(e) {
          var t = e.fluid,
            r = e.fixed;
          return ((t && t[0]) || (r && r[0])).src;
        },
        p = Object.create({}),
        m = function(e) {
          var t = d(e),
            r = f(t);
          return p[r] || !1;
        },
        g =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        h = "undefined" != typeof window,
        b = h && window.IntersectionObserver,
        y = new WeakMap();
      function v(e) {
        return e.map(function(e) {
          var t = e.src,
            r = e.srcSet,
            a = e.srcSetWebp,
            n = e.media,
            i = e.sizes;
          return c.default.createElement(
            c.default.Fragment,
            { key: t },
            a &&
              c.default.createElement("source", {
                type: "image/webp",
                media: n,
                srcSet: a,
                sizes: i
              }),
            c.default.createElement("source", { media: n, srcSet: r, sizes: i })
          );
        });
      }
      function E(e) {
        var t = [],
          r = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : r).push(e);
          }),
          [].concat(t, r)
        );
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            r = e.media,
            a = e.tracedSVG;
          return c.default.createElement("source", {
            key: t,
            media: r,
            srcSet: a
          });
        });
      }
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            r = e.media,
            a = e.base64;
          return c.default.createElement("source", {
            key: t,
            media: r,
            srcSet: a
          });
        });
      }
      function O(e, t) {
        var r = e.srcSet,
          a = e.srcSetWebp,
          n = e.media,
          i = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (n ? 'media="' + n + '" ' : "") +
          'srcset="' +
          (t ? a : r) +
          '" ' +
          (i ? 'sizes="' + i + '" ' : "") +
          "/>"
        );
      }
      var A = function(e, t) {
          var r =
            (void 0 === n &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (n = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (y.has(e.target)) {
                      var t = y.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (n.unobserve(e.target), y.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            n);
          return (
            r && (r.observe(e), y.set(e, t)),
            function() {
              r.unobserve(e), y.delete(e);
            }
          );
        },
        R = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            r = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            a = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            n = e.title ? 'title="' + e.title + '" ' : "",
            i = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            o = e.width ? 'width="' + e.width + '" ' : "",
            s = e.height ? 'height="' + e.height + '" ' : "",
            l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            c = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? O(e, !0) : "") + O(e);
              })
              .join("") +
            "<img " +
            c +
            o +
            s +
            r +
            a +
            t +
            i +
            n +
            l +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        N = function(e) {
          var t = e.src,
            r = e.imageVariants,
            a = e.generateSources,
            n = e.spreadProps,
            i = c.default.createElement(I, (0, l.default)({ src: t }, n));
          return r.length > 1
            ? c.default.createElement("picture", null, a(r), i)
            : i;
        },
        I = c.default.forwardRef(function(e, t) {
          var r = e.sizes,
            a = e.srcSet,
            n = e.src,
            i = e.style,
            o = e.onLoad,
            u = e.onError,
            d = e.loading,
            f = e.draggable,
            p = (0, s.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable"
            ]);
          return c.default.createElement(
            "img",
            (0, l.default)({ sizes: r, srcSet: a, src: n }, p, {
              onLoad: o,
              onError: u,
              ref: t,
              loading: d,
              draggable: f,
              style: (0, l.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                i
              )
            })
          );
        });
      I.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func
      };
      var x = (function(e) {
        function t(t) {
          var r;
          ((r = e.call(this, t) || this).seenBefore = h && m(t)),
            (r.isCritical = "eager" === t.loading || t.critical),
            (r.addNoScript = !(r.isCritical && !t.fadeIn)),
            (r.useIOSupport = !g && b && !r.isCritical && !r.seenBefore);
          var a = r.isCritical || (h && (g || !r.useIOSupport));
          return (
            (r.state = {
              isVisible: a,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !r.seenBefore && t.fadeIn
            }),
            (r.imageRef = c.default.createRef()),
            (r.handleImageLoaded = r.handleImageLoaded.bind((0, i.default)(r))),
            (r.handleRef = r.handleRef.bind((0, i.default)(r))),
            r
          );
        }
        (0, o.default)(t, e);
        var r = t.prototype;
        return (
          (r.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (r.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (r.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = A(e, function() {
                var e = m(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    return t.setState({
                      imgLoaded: e,
                      imgCached: !!t.imageRef.current.currentSrc
                    });
                  });
              }));
          }),
          (r.handleImageLoaded = function() {
            var e, t, r;
            (e = this.props),
              (t = d(e)),
              (r = f(t)),
              (p[r] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (r.render = function() {
            var e = d(this.props),
              t = e.title,
              r = e.alt,
              a = e.className,
              n = e.style,
              i = void 0 === n ? {} : n,
              o = e.imgStyle,
              s = void 0 === o ? {} : o,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              p = e.placeholderClassName,
              m = e.fluid,
              g = e.fixed,
              h = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              E = e.itemProp,
              O = e.loading,
              A = e.draggable,
              x = !1 === this.state.fadeIn || this.state.imgLoaded,
              k = !0 === this.state.fadeIn && !this.state.imgCached,
              C = (0, l.default)(
                {
                  opacity: x ? 1 : 0,
                  transition: k ? "opacity " + b + "ms" : "none"
                },
                s
              ),
              j = "boolean" == typeof h ? "lightgray" : h,
              T = { transitionDelay: b + "ms" },
              z = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                k && T,
                {},
                s,
                {},
                f
              ),
              P = {
                title: t,
                alt: this.state.isVisible ? "" : r,
                style: z,
                className: p,
                itemProp: E
              };
            if (m) {
              var L = m,
                V = L[0];
              return c.default.createElement(
                y,
                {
                  className: (a || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    i
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(V.srcSet)
                },
                c.default.createElement(y, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / V.aspectRatio + "%"
                  }
                }),
                j &&
                  c.default.createElement(y, {
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: j,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      k && T
                    )
                  }),
                V.base64 &&
                  c.default.createElement(N, {
                    src: V.base64,
                    spreadProps: P,
                    imageVariants: L,
                    generateSources: S
                  }),
                V.tracedSVG &&
                  c.default.createElement(N, {
                    src: V.tracedSVG,
                    spreadProps: P,
                    imageVariants: L,
                    generateSources: w
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    "picture",
                    null,
                    v(L),
                    c.default.createElement(I, {
                      alt: r,
                      title: t,
                      sizes: V.sizes,
                      src: V.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: V.srcSet,
                      style: C,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: E,
                      loading: O,
                      draggable: A
                    })
                  ),
                this.addNoScript &&
                  c.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: R(
                        (0, l.default)({ alt: r, title: t, loading: O }, V, {
                          imageVariants: L
                        })
                      )
                    }
                  })
              );
            }
            if (g) {
              var M = g,
                q = M[0],
                F = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: q.width,
                    height: q.height
                  },
                  i
                );
              return (
                "inherit" === i.display && delete F.display,
                c.default.createElement(
                  y,
                  {
                    className: (a || "") + " gatsby-image-wrapper",
                    style: F,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(q.srcSet)
                  },
                  j &&
                    c.default.createElement(y, {
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: j,
                          width: q.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: q.height
                        },
                        k && T
                      )
                    }),
                  q.base64 &&
                    c.default.createElement(N, {
                      src: q.base64,
                      spreadProps: P,
                      imageVariants: M,
                      generateSources: S
                    }),
                  q.tracedSVG &&
                    c.default.createElement(N, {
                      src: q.tracedSVG,
                      spreadProps: P,
                      imageVariants: M,
                      generateSources: w
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      "picture",
                      null,
                      v(M),
                      c.default.createElement(I, {
                        alt: r,
                        title: t,
                        width: q.width,
                        height: q.height,
                        sizes: q.sizes,
                        src: q.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: q.srcSet,
                        style: C,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: E,
                        loading: O,
                        draggable: A
                      })
                    ),
                  this.addNoScript &&
                    c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: R(
                          (0, l.default)({ alt: r, title: t, loading: O }, q, {
                            imageVariants: M
                          })
                        )
                      }
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(c.default.Component);
      x.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var k = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string
        }),
        C = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string
        });
      x.propTypes = {
        resolutions: k,
        sizes: C,
        fixed: u.default.oneOfType([k, u.default.arrayOf(k)]),
        fluid: u.default.oneOfType([C, u.default.arrayOf(C)]),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool
      };
      var j = x;
      t.default = j;
    },
    D4hK: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<ul>\\n<li>Duty of loyalty</li>\\n<li>Not engage in deceptive [or harmful] data practice</li>\\n<li>Right to [data] access and transparency</li>\\n<li>Right to delete</li>\\n<li>Right to correct inaccuracies</li>\\n<li>Right to controls</li>\\n<li>Data portability</li>\\n<li>Opt out of transfers</li>\\n<li>Right to data minimization</li>\\n<li>Right to data security</li>\\n<li>Civil rights</li>\\n<li>Protections, Algorithmic decision-making impact assessment</li>\\n<li>Prohibition on waiver of rights</li>\\n</ul>","frontmatter":{"title":"About CORPA"}}}}'
      );
    },
    HsiO: function(e, t, r) {
      var a = r("Z6+o"),
        n = r("6R51"),
        i = r("UlM4");
      e.exports = function(e, t) {
        return a(e) || n(e, t) || i();
      };
    },
    OGtf: function(e, t, r) {
      var a = r("XKFU"),
        n = r("eeVq"),
        i = r("vhPU"),
        o = /"/g,
        s = function(e, t, r, a) {
          var n = String(i(e)),
            s = "<" + t;
          return (
            "" !== r &&
              (s += " " + r + '="' + String(a).replace(o, "&quot;") + '"'),
            s + ">" + n + "</" + t + ">"
          );
        };
      e.exports = function(e, t) {
        var r = {};
        (r[e] = t(s)),
          a(
            a.P +
              a.F *
                n(function() {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            r
          );
      };
    },
    Pmem: function(e, t, r) {
      "use strict";
      r("a1Th"),
        r("h7Nl"),
        r("Btvt"),
        r("pIFo"),
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
    "Q/ty": function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<h2>Prohibited practices for social media companies:</h2>\\n<ul>\\n<li>Infinite scroll or auto refill</li>\\n<li>Elimination of natural stopping points</li>\\n<li>Autoplay</li>\\n<li>Badges or other awards linked to engagement with the platform</li>\\n</ul>\\n<h2>Requirements for social media companies:</h2>\\n<ul>\\n<li>Allows a user to set a time limit that blocks the user’s own access to that platform…</li>\\n<li>Automatically limits the amount of time that a user may spend on those platforms across all devices to 30 minutes a day</li>\\n</ul>\\n<h2>Requirements for data-operators (anyone who operates a website, online service, application or mobile application):</h2>\\n<ul>\\n<li>Neutral presentation</li>\\n<li>No pre-selected option</li>\\n</ul>\\n<h2>Powers of the (Federal Trade) Commission:</h2>\\n<ul>\\n<li>This Act and regulations prescribed under this Act shall be enforced by the Commission (FTC)</li>\\n</ul>","frontmatter":{"title":"SMART"}}}}'
      );
    },
    RXBc: function(e, t, r) {
      "use strict";
      r.r(t);
      var a = r("q1tI"),
        n = r.n(a),
        i = r("Wbzz"),
        o = r("Bl7J"),
        s = r("ezAz"),
        l = r("9eSz"),
        c = r.n(l),
        u = function() {
          var e = s.data;
          return n.a.createElement(c.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        d = r("vrFN"),
        f = (r("8+KV"), r("k1TG")),
        p = r("8o2o"),
        m = r("17x9"),
        g = r.n(m),
        h = r("TSYQ"),
        b = r.n(h),
        y = r("33Jr"),
        v = g.a.oneOfType([g.a.number, g.a.string]),
        E = {
          tag: y.c,
          noGutters: g.a.bool,
          className: g.a.string,
          cssModule: g.a.object,
          form: g.a.bool,
          xs: v,
          sm: v,
          md: v,
          lg: v,
          xl: v
        },
        w = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        S = function(e) {
          var t = e.className,
            r = e.cssModule,
            a = e.noGutters,
            i = e.tag,
            o = e.form,
            s = e.widths,
            l = Object(p.a)(e, [
              "className",
              "cssModule",
              "noGutters",
              "tag",
              "form",
              "widths"
            ]),
            c = [];
          s.forEach(function(t, r) {
            var a = e[t];
            if ((delete l[t], a)) {
              var n = !r;
              c.push(n ? "row-cols-" + a : "row-cols-" + t + "-" + a);
            }
          });
          var u = Object(y.b)(
            b()(t, a ? "no-gutters" : null, o ? "form-row" : "row", c),
            r
          );
          return n.a.createElement(i, Object(f.a)({}, l, { className: u }));
        };
      (S.propTypes = E), (S.defaultProps = w);
      var O = S,
        A = g.a.oneOfType([g.a.number, g.a.string]),
        R = g.a.oneOfType([
          g.a.bool,
          g.a.number,
          g.a.string,
          g.a.shape({
            size: g.a.oneOfType([g.a.bool, g.a.number, g.a.string]),
            order: A,
            offset: A
          })
        ]),
        N = {
          tag: y.c,
          xs: R,
          sm: R,
          md: R,
          lg: R,
          xl: R,
          className: g.a.string,
          cssModule: g.a.object,
          widths: g.a.array
        },
        I = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        x = function(e, t, r) {
          return !0 === r || "" === r
            ? e
              ? "col"
              : "col-" + t
            : "auto" === r
            ? e
              ? "col-auto"
              : "col-" + t + "-auto"
            : e
            ? "col-" + r
            : "col-" + t + "-" + r;
        },
        k = function(e) {
          var t = e.className,
            r = e.cssModule,
            a = e.widths,
            i = e.tag,
            o = Object(p.a)(e, ["className", "cssModule", "widths", "tag"]),
            s = [];
          a.forEach(function(t, a) {
            var n = e[t];
            if ((delete o[t], n || "" === n)) {
              var i = !a;
              if (Object(y.a)(n)) {
                var l,
                  c = i ? "-" : "-" + t + "-",
                  u = x(i, t, n.size);
                s.push(
                  Object(y.b)(
                    b()(
                      (((l = {})[u] = n.size || "" === n.size),
                      (l["order" + c + n.order] = n.order || 0 === n.order),
                      (l["offset" + c + n.offset] = n.offset || 0 === n.offset),
                      l)
                    ),
                    r
                  )
                );
              } else {
                var d = x(i, t, n);
                s.push(d);
              }
            }
          }),
            s.length || s.push("col");
          var l = Object(y.b)(b()(t, s), r);
          return n.a.createElement(i, Object(f.a)({}, o, { className: l }));
        };
      (k.propTypes = N), (k.defaultProps = I);
      var C = k;
      r("rGqo"), r("yt8O"), r("Btvt"), r("RW0V"), r("2Spj");
      var j = {
          active: g.a.bool,
          "aria-label": g.a.string,
          block: g.a.bool,
          color: g.a.string,
          disabled: g.a.bool,
          outline: g.a.bool,
          tag: y.c,
          innerRef: g.a.oneOfType([g.a.object, g.a.func, g.a.string]),
          onClick: g.a.func,
          size: g.a.string,
          children: g.a.node,
          className: g.a.string,
          cssModule: g.a.object,
          close: g.a.bool
        },
        T = (function(e) {
          var t, r;
          function a(t) {
            var r;
            return (
              ((r = e.call(this, t) || this).onClick = r.onClick.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(r)
              )),
              r
            );
          }
          (r = e),
            ((t = a).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = r);
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
                r = e["aria-label"],
                a = e.block,
                i = e.className,
                o = e.close,
                s = e.cssModule,
                l = e.color,
                c = e.outline,
                u = e.size,
                d = e.tag,
                m = e.innerRef,
                g = Object(p.a)(e, [
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
                void 0 === g.children &&
                (g.children = n.a.createElement(
                  "span",
                  { "aria-hidden": !0 },
                  "×"
                ));
              var h = "btn" + (c ? "-outline" : "") + "-" + l,
                v = Object(y.b)(
                  b()(
                    i,
                    { close: o },
                    o || "btn",
                    o || h,
                    !!u && "btn-" + u,
                    !!a && "btn-block",
                    { active: t, disabled: this.props.disabled }
                  ),
                  s
                );
              g.href && "button" === d && (d = "a");
              var E = o ? "Close" : null;
              return n.a.createElement(
                d,
                Object(f.a)(
                  { type: "button" === d && g.onClick ? "button" : void 0 },
                  g,
                  {
                    className: v,
                    ref: m,
                    onClick: this.onClick,
                    "aria-label": r || E
                  }
                )
              );
            }),
            a
          );
        })(n.a.Component);
      (T.propTypes = j),
        (T.defaultProps = { color: "secondary", tag: "button" });
      var z,
        P = T,
        L = function(e) {
          var t = e.selectedPolicy,
            r = e.policies,
            a = e.onClick;
          return n.a.createElement(
            O,
            null,
            Object.keys(r).map(function(e) {
              return n.a.createElement(
                C,
                { key: "policy-select-button-" + e },
                n.a.createElement(
                  P,
                  {
                    color: t === e ? "primary" : "secondary",
                    onClick: function(t) {
                      return a(e);
                    },
                    size: "lg",
                    className: "w-100"
                  },
                  r[e].short
                )
              );
            })
          );
        },
        V =
          (r("Pu03"),
          function(e) {
            return n.a.createElement(
              O,
              null,
              n.a.createElement(C, { xs: 12, className: "policy m-3" })
            );
          }),
        M = r("Q/ty"),
        q = function(e) {
          var t = e.markdownRemark,
            r = t.frontmatter,
            a = t.html;
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              O,
              null,
              n.a.createElement(C, null, n.a.createElement("h2", null, r.title))
            ),
            n.a.createElement(
              O,
              null,
              n.a.createElement(
                C,
                null,
                n.a.createElement("div", {
                  dangerouslySetInnerHTML: { __html: a }
                })
              )
            )
          );
        },
        F = function(e) {
          var t = M.data.markdownRemark;
          return n.a.createElement(q, { markdownRemark: t });
        },
        B = r("pmtx"),
        U = function(e) {
          var t = B.data.markdownRemark;
          return n.a.createElement(q, { markdownRemark: t });
        },
        W = r("D4hK"),
        G = function(e) {
          var t = W.data.markdownRemark;
          return n.a.createElement(q, { markdownRemark: t });
        },
        J =
          (((z = {}).SMART = {
            short: "SMART Act",
            long: "SMART Act (Social Media Addiction Reduction Technology)"
          }),
          (z.ONLINE_PRIVACY = {
            short: "Online Privacy Act",
            long: "The Online Privacy Act"
          }),
          (z.CORPA = {
            short: "CORPA",
            long: "COPRA (Consumer Online Privacy Rights Act)"
          }),
          z),
        K = function(e) {
          var t = e.selectedPolicy;
          return "SMART" === t
            ? n.a.createElement(F, null)
            : "ONLINE_PRIVACY" === t
            ? n.a.createElement(U, null)
            : "CORPA" === t
            ? n.a.createElement(G, null)
            : void 0;
        },
        X = function() {
          var e = Object(a.useState)("SMART"),
            t = e[0],
            r = e[1];
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              O,
              null,
              n.a.createElement(
                C,
                null,
                n.a.createElement("h1", null, J[t].long)
              )
            ),
            n.a.createElement(V, { selectedPolicy: t, policies: J }),
            n.a.createElement(L, {
              selectedPolicy: t,
              policies: J,
              onClick: r
            }),
            n.a.createElement(K, { selectedPolicy: t })
          );
        },
        H = (r("KKXr"), r("OG14"), r("cr+I")),
        Y = r.n(H);
      function D(e) {
        var t,
          r =
            ((t = "ft"),
            "undefined" != typeof window
              ? Y.a.parse(window.location.search)[t]
              : "");
        return !!r && r.split(",").indexOf(e) > -1;
      }
      r("q4sD"),
        (t.default = function() {
          return D("PRIVACY_MATTERS_2020")
            ? n.a.createElement(o.a, null, n.a.createElement(X, null))
            : n.a.createElement(
                o.a,
                null,
                n.a.createElement(d.a, { title: "Home" }),
                n.a.createElement("h1", null, "Hi people"),
                n.a.createElement(
                  "p",
                  null,
                  "Welcome to your new Gatsby site."
                ),
                n.a.createElement("p", null, "Now go build something great."),
                n.a.createElement(
                  "div",
                  { style: { maxWidth: "300px", marginBottom: "1.45rem" } },
                  n.a.createElement(u, null)
                ),
                n.a.createElement(i.Link, { to: "/page-2/" }, "Go to page 2")
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
    "cr+I": function(e, t, r) {
      "use strict";
      r("0l/t");
      var a = r("HsiO");
      r("rE2o"),
        r("ioFf"),
        r("DNiP"),
        r("hHhE"),
        r("91GP"),
        r("Tze0"),
        r("7h0T"),
        r("xfY5"),
        r("rGqo"),
        r("yt8O"),
        r("Btvt"),
        r("RW0V"),
        r("bWfx"),
        r("Vd3H"),
        r("LK8F"),
        r("KKXr"),
        r("V+eJ"),
        r("pIFo");
      var n = r("+YAX"),
        i = r("Pmem"),
        o = r("8jRI"),
        s = r("8yz6");
      function l(e, t) {
        return t.encode ? (t.strict ? i(e) : encodeURIComponent(e)) : e;
      }
      function c(e, t) {
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
      function p(e, t) {
        var r = (function(e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function(e, r, a) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === a[e] && (a[e] = {}), (a[e][t[1]] = r))
                      : (a[e] = r);
                };
              case "bracket":
                return function(e, r, a) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== a[e]
                        ? (a[e] = [].concat(a[e], r))
                        : (a[e] = [r])
                      : (a[e] = r);
                };
              case "comma":
                return function(e, t, r) {
                  var a =
                    "string" == typeof t && t.split("").indexOf(",") > -1
                      ? t.split(",")
                      : t;
                  r[e] = a;
                };
              default:
                return function(e, t, r) {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
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
          n = Object.create(null);
        if ("string" != typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
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
              m = s(t.decode ? p.replace(/\+/g, " ") : p, "="),
              g = a(m, 2),
              h = g[0],
              b = g[1];
            (b = void 0 === b ? null : c(b, t)), r(c(h, t), b, n);
          }
        } catch (R) {
          (o = !0), (l = R);
        } finally {
          try {
            i || null == d.return || d.return();
          } finally {
            if (o) throw l;
          }
        }
        for (var y = 0, v = Object.keys(n); y < v.length; y++) {
          var E = v[y],
            w = n[E];
          if ("object" == typeof w && null !== w)
            for (var S = 0, O = Object.keys(w); S < O.length; S++) {
              var A = O[S];
              w[A] = f(w[A], t);
            }
          else n[E] = f(w, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce(function(e, t) {
              var r = n[t];
              return (
                Boolean(r) && "object" == typeof r && !Array.isArray(r)
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
                    })(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = d),
        (t.parse = p),
        (t.stringify = function(e, t) {
          if (!e) return "";
          var r = (function(e) {
              switch (e.arrayFormat) {
                case "index":
                  return function(t) {
                    return function(r, a) {
                      var i = r.length;
                      return void 0 === a || (e.skipNull && null === a)
                        ? r
                        : [].concat(
                            n(r),
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
                    return function(r, a) {
                      return void 0 === a || (e.skipNull && null === a)
                        ? r
                        : [].concat(
                            n(r),
                            null === a
                              ? [[l(t, e), "[]"].join("")]
                              : [[l(t, e), "[]=", l(a, e)].join("")]
                          );
                    };
                  };
                case "comma":
                  return function(t) {
                    return function(r, a) {
                      return null == a || 0 === a.length
                        ? r
                        : 0 === r.length
                        ? [[l(t, e), "=", l(a, e)].join("")]
                        : [[r, l(a, e)].join(",")];
                    };
                  };
                default:
                  return function(t) {
                    return function(r, a) {
                      return void 0 === a || (e.skipNull && null === a)
                        ? r
                        : [].concat(
                            n(r),
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
              var s = o[i];
              (void 0 !== a[s] && null !== a[s]) || delete a[s];
            }
          var c = Object.keys(a);
          return (
            !1 !== t.sort && c.sort(t.sort),
            c
              .map(function(a) {
                var n = e[a];
                return void 0 === n
                  ? ""
                  : null === n
                  ? l(a, t)
                  : Array.isArray(n)
                  ? n.reduce(r(a), []).join("&")
                  : l(a, t) + "=" + l(n, t);
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
        (t.stringifyUrl = function(e, r) {
          var a = u(e.url).split("?")[0] || "",
            n = t.extract(e.url),
            i = t.parse(n),
            o = (function(e) {
              var t = "",
                r = e.indexOf("#");
              return -1 !== r && (t = e.slice(r)), t;
            })(e.url),
            s = Object.assign(i, e.query),
            l = t.stringify(s, r);
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
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'
      );
    },
    pmtx: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<ul>\\n<li>Creating User Rights – The bill grants every American the right to access, correct, or delete their data. It also creates new rights, like the right to impermanence, which lets users decide how long companies can keep their data.</li>\\n<li>Placing Clear Obligations on Companies – The bill minimizes the amount of data companies collect, process, disclose, and maintain, and bars companies from using data in discriminatory ways. Additionally, companies must receive consent from users in plain, simple language.</li>\\n<li>Establishing a Digital Privacy Agency (DPA) – The bill establishes an independent agency led by a Director that’s appointed by the President and confirmed by the Senate for a five-year term. The DPA will enforce privacy protections and investigate abuses.</li>\\n<li>Strengthening Enforcement – The bill empowers state attorneys general to enforce violations of the bill and allows individuals to appoint nonprofits to represent them in private class action lawsuits.</li>\\n</ul>","frontmatter":{"title":"About the Online Policy Act"}}}}'
      );
    },
    xfY5: function(e, t, r) {
      "use strict";
      var a = r("dyZX"),
        n = r("aagx"),
        i = r("LZWt"),
        o = r("Xbzi"),
        s = r("apmT"),
        l = r("eeVq"),
        c = r("kJMx").f,
        u = r("EemH").f,
        d = r("hswa").f,
        f = r("qncB").trim,
        p = a.Number,
        m = p,
        g = p.prototype,
        h = "Number" == i(r("Kuth")(g)),
        b = "trim" in String.prototype,
        y = function(e) {
          var t = s(e, !1);
          if ("string" == typeof t && t.length > 2) {
            var r,
              a,
              n,
              i = (t = b ? t.trim() : f(t, 3)).charCodeAt(0);
            if (43 === i || 45 === i) {
              if (88 === (r = t.charCodeAt(2)) || 120 === r) return NaN;
            } else if (48 === i) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (a = 2), (n = 49);
                  break;
                case 79:
                case 111:
                  (a = 8), (n = 55);
                  break;
                default:
                  return +t;
              }
              for (var o, l = t.slice(2), c = 0, u = l.length; c < u; c++)
                if ((o = l.charCodeAt(c)) < 48 || o > n) return NaN;
              return parseInt(l, a);
            }
          }
          return +t;
        };
      if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(e) {
          var t = arguments.length < 1 ? 0 : e,
            r = this;
          return r instanceof p &&
            (h
              ? l(function() {
                  g.valueOf.call(r);
                })
              : "Number" != i(r))
            ? o(new m(y(t)), r, p)
            : y(t);
        };
        for (
          var v,
            E = r("nh4g")
              ? c(m)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            w = 0;
          E.length > w;
          w++
        )
          n(m, (v = E[w])) && !n(p, v) && d(p, v, u(m, v));
        (p.prototype = g), (g.constructor = p), r("KroJ")(a, "Number", p);
      }
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-8b2f51246bf69938eff0.js.map
