(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "+YAX": function(e, t, a) {
      var r = a("2nzh"),
        n = a("1PpB"),
        i = a("cqv3");
      e.exports = function(e) {
        return r(e) || n(e) || i();
      };
    },
    "0mN4": function(e, t, a) {
      "use strict";
      a("OGtf")("fixed", function(e) {
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
            r = !0,
            n = !1,
            i = void 0;
          try {
            for (
              var o, l = e[Symbol.iterator]();
              !(r = (o = l.next()).done) &&
              (a.push(o.value), !t || a.length !== t);
              r = !0
            );
          } catch (s) {
            (n = !0), (i = s);
          } finally {
            try {
              r || null == l.return || l.return();
            } finally {
              if (n) throw i;
            }
          }
          return a;
        }
      };
    },
    "7h0T": function(e, t, a) {
      var r = a("XKFU");
      r(r.S, "Number", {
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
      var r = new RegExp("%[a-f0-9]{2}", "gi"),
        n = new RegExp("(%[a-f0-9]{2})+", "gi");
      function i(e, t) {
        try {
          return decodeURIComponent(e.join(""));
        } catch (n) {}
        if (1 === e.length) return e;
        t = t || 1;
        var a = e.slice(0, t),
          r = e.slice(t);
        return Array.prototype.concat.call([], i(a), i(r));
      }
      function o(e) {
        try {
          return decodeURIComponent(e);
        } catch (n) {
          for (var t = e.match(r), a = 1; a < t.length; a++)
            t = (e = i(t, a).join("")).match(r);
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
              var a = { "%FE%FF": "��", "%FF%FE": "��" }, r = n.exec(e);
              r;

            ) {
              try {
                a[r[0]] = decodeURIComponent(r[0]);
              } catch (t) {
                var i = o(r[0]);
                i !== r[0] && (a[r[0]] = i);
              }
              r = n.exec(e);
            }
            a["%C2"] = "�";
            for (var l = Object.keys(a), s = 0; s < l.length; s++) {
              var c = l[s];
              e = e.replace(new RegExp(c, "g"), a[c]);
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
    "9eSz": function(e, t, a) {
      "use strict";
      a("rGqo"), a("yt8O"), a("Btvt"), a("XfO3"), a("EK0E"), a("0mN4");
      var r = a("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var n,
        i = r(a("v06X")),
        o = r(a("XEEL")),
        l = r(a("uDP2")),
        s = r(a("j8BX")),
        c = r(a("q1tI")),
        u = r(a("17x9")),
        d = function(e) {
          var t = (0, s.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            n = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            n && (t.loading = "eager"),
            t.fluid && (t.fluid = v([].concat(t.fluid))),
            t.fixed && (t.fixed = v([].concat(t.fixed))),
            t
          );
        },
        f = function(e) {
          var t = e.fluid,
            a = e.fixed;
          return ((t && t[0]) || (a && a[0])).src;
        },
        p = Object.create({}),
        g = function(e) {
          var t = d(e),
            a = f(t);
          return p[a] || !1;
        },
        m =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        h = "undefined" != typeof window,
        b = h && window.IntersectionObserver,
        y = new WeakMap();
      function A(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            n = e.media,
            i = e.sizes;
          return c.default.createElement(
            c.default.Fragment,
            { key: t },
            r &&
              c.default.createElement("source", {
                type: "image/webp",
                media: n,
                srcSet: r,
                sizes: i
              }),
            c.default.createElement("source", { media: n, srcSet: a, sizes: i })
          );
        });
      }
      function v(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG;
          return c.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return c.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function S(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          n = e.media,
          i = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (n ? 'media="' + n + '" ' : "") +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (i ? 'sizes="' + i + '" ' : "") +
          "/>"
        );
      }
      var O = function(e, t) {
          var a =
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
            a && (a.observe(e), y.set(e, t)),
            function() {
              a.unobserve(e), y.delete(e);
            }
          );
        },
        R = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            n = e.title ? 'title="' + e.title + '" ' : "",
            i = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            o = e.width ? 'width="' + e.width + '" ' : "",
            l = e.height ? 'height="' + e.height + '" ' : "",
            s = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            c = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? S(e, !0) : "") + S(e);
              })
              .join("") +
            "<img " +
            c +
            o +
            l +
            a +
            r +
            t +
            i +
            n +
            s +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        I = function(e) {
          var t = e.src,
            a = e.imageVariants,
            r = e.generateSources,
            n = e.spreadProps,
            i = c.default.createElement(N, (0, s.default)({ src: t }, n));
          return a.length > 1
            ? c.default.createElement("picture", null, r(a), i)
            : i;
        },
        N = c.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            n = e.src,
            i = e.style,
            o = e.onLoad,
            u = e.onError,
            d = e.loading,
            f = e.draggable,
            p = (0, l.default)(e, [
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
            (0, s.default)({ sizes: a, srcSet: r, src: n }, p, {
              onLoad: o,
              onError: u,
              ref: t,
              loading: d,
              draggable: f,
              style: (0, s.default)(
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
      N.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func
      };
      var C = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = h && g(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !m && b && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (h && (m || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn
            }),
            (a.imageRef = c.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, i.default)(a))),
            (a.handleRef = a.handleRef.bind((0, i.default)(a))),
            a
          );
        }
        (0, o.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: g(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = O(e, function() {
                var e = g(t.props);
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
          (a.handleImageLoaded = function() {
            var e, t, a;
            (e = this.props),
              (t = d(e)),
              (a = f(t)),
              (p[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = d(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              n = e.style,
              i = void 0 === n ? {} : n,
              o = e.imgStyle,
              l = void 0 === o ? {} : o,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              p = e.placeholderClassName,
              g = e.fluid,
              m = e.fixed,
              h = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              v = e.itemProp,
              S = e.loading,
              O = e.draggable,
              C = !1 === this.state.fadeIn || this.state.imgLoaded,
              x = !0 === this.state.fadeIn && !this.state.imgCached,
              k = (0, s.default)(
                {
                  opacity: C ? 1 : 0,
                  transition: x ? "opacity " + b + "ms" : "none"
                },
                l
              ),
              T = "boolean" == typeof h ? "lightgray" : h,
              j = { transitionDelay: b + "ms" },
              V = (0, s.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                x && j,
                {},
                l,
                {},
                f
              ),
              M = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: V,
                className: p,
                itemProp: v
              };
            if (g) {
              var z = g,
                L = z[0];
              return c.default.createElement(
                y,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, s.default)(
                    { position: "relative", overflow: "hidden" },
                    i
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(L.srcSet)
                },
                c.default.createElement(y, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / L.aspectRatio + "%"
                  }
                }),
                T &&
                  c.default.createElement(y, {
                    title: t,
                    style: (0, s.default)(
                      {
                        backgroundColor: T,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      x && j
                    )
                  }),
                L.base64 &&
                  c.default.createElement(I, {
                    src: L.base64,
                    spreadProps: M,
                    imageVariants: z,
                    generateSources: E
                  }),
                L.tracedSVG &&
                  c.default.createElement(I, {
                    src: L.tracedSVG,
                    spreadProps: M,
                    imageVariants: z,
                    generateSources: w
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    "picture",
                    null,
                    A(z),
                    c.default.createElement(N, {
                      alt: a,
                      title: t,
                      sizes: L.sizes,
                      src: L.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: L.srcSet,
                      style: k,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: S,
                      draggable: O
                    })
                  ),
                this.addNoScript &&
                  c.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: R(
                        (0, s.default)({ alt: a, title: t, loading: S }, L, {
                          imageVariants: z
                        })
                      )
                    }
                  })
              );
            }
            if (m) {
              var P = m,
                U = P[0],
                B = (0, s.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: U.width,
                    height: U.height
                  },
                  i
                );
              return (
                "inherit" === i.display && delete B.display,
                c.default.createElement(
                  y,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: B,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(U.srcSet)
                  },
                  T &&
                    c.default.createElement(y, {
                      title: t,
                      style: (0, s.default)(
                        {
                          backgroundColor: T,
                          width: U.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: U.height
                        },
                        x && j
                      )
                    }),
                  U.base64 &&
                    c.default.createElement(I, {
                      src: U.base64,
                      spreadProps: M,
                      imageVariants: P,
                      generateSources: E
                    }),
                  U.tracedSVG &&
                    c.default.createElement(I, {
                      src: U.tracedSVG,
                      spreadProps: M,
                      imageVariants: P,
                      generateSources: w
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      "picture",
                      null,
                      A(P),
                      c.default.createElement(N, {
                        alt: a,
                        title: t,
                        width: U.width,
                        height: U.height,
                        sizes: U.sizes,
                        src: U.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: U.srcSet,
                        style: k,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: S,
                        draggable: O
                      })
                    ),
                  this.addNoScript &&
                    c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: R(
                          (0, s.default)({ alt: a, title: t, loading: S }, U, {
                            imageVariants: P
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
      C.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var x = u.default.shape({
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
        k = u.default.shape({
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
      C.propTypes = {
        resolutions: x,
        sizes: k,
        fixed: u.default.oneOfType([x, u.default.arrayOf(x)]),
        fluid: u.default.oneOfType([k, u.default.arrayOf(k)]),
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
      var T = C;
      t.default = T;
    },
    CV6x: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACjUlEQVQ4y3VTXUsbURDNj/RJ6B/wP/RJn/JgMRqQRB8ULCiIohH6IklaECktYhK3xISsSTZfu5tkN/u9G3M6MyHSCl4YZu/dO2fOnJmbMk0TjuPAsiyxXq8n3vd9eJ73obmuK3Gz2UzuT6dT6LqOFAeyOY6HKIqgqiomkwnCMMTq33tjwPl8jsViIaDqSxv1ep3IaAzowjA8NJuBAHEA+yRJJOgjY2YM+Pr6+gbOiVJB4BNVE4+PVTQaz3LIgEEQCGNmyn5lfM53mNn7xf+IYUAMddRqNcnEQePxGMPhUGw0Gomug8FAPGtu27ZoyIsZxnEsxuepZYlTYteUDAzKgYWbG+TzeeRyOezu7mJzcxPr6+tIp9MCxCXz4uSMwYkURUGK6du2RSVMOZ9kYmbHx8col8vY29vDycmJAK+trWFjY+M/wG63i1ZLlW8GJUAX44lDOs6pESCLpMzT01McHh4ik8lge3sbBwcHODo6wvn5+VIv31syNHUCfKa4eAmYRCHGxgzFUhP9vk0lxwSoo1Kp4Pb2FjdU+tXVFS4vL1EoFPCkPGH8+w80bYiXGY1M1yKWoMoWS0B1MMKvegMIbWCRIKSmmKaBdrtNmVvieTY7nY40xiWJ4kYXd7VnfLmr4EdNw0sLaHcWQiT1XWng87d7VLQR1KEOnyTgIG7Qyljn5fA74kkZmTtecyo1SULR3rKoy5Y9w1eli0/XP5G5V+SS6/nynFh4HoWV5xHhGe1pmrDVDYO0N9Dv9amRA+m4NOVtMKNYfLVaRbFYlAZcXFyIhqVSSWaUz7a2tpDNZnF2dob9/X3Z7+zs4OHhgRnaBBSJdgnR5qDVQzeIwb/G5TNDZsejxU3g89UD4P1f/UwDKldtYIwAAAAASUVORK5CYII=","aspectRatio":1.4369747899159664,"src":"/static/a522318e5bbdf90b3675e545017242e5/a54c6/policy-online-privacy-design.png","srcSet":"/static/a522318e5bbdf90b3675e545017242e5/59beb/policy-online-privacy-design.png 200w,\\n/static/a522318e5bbdf90b3675e545017242e5/c0bbd/policy-online-privacy-design.png 400w,\\n/static/a522318e5bbdf90b3675e545017242e5/a54c6/policy-online-privacy-design.png 800w,\\n/static/a522318e5bbdf90b3675e545017242e5/6d3f1/policy-online-privacy-design.png 1026w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    D4hK: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<ul>\\n<li>Duty of loyalty</li>\\n<li>Not engage in deceptive [or harmful] data practice</li>\\n<li>Right to [data] access and transparency</li>\\n<li>Right to delete</li>\\n<li>Right to correct inaccuracies</li>\\n<li>Right to controls</li>\\n<li>Data portability</li>\\n<li>Opt out of transfers</li>\\n<li>Right to data minimization</li>\\n<li>Right to data security</li>\\n<li>Civil rights</li>\\n<li>Protections, Algorithmic decision-making impact assessment</li>\\n<li>Prohibition on waiver of rights</li>\\n</ul>","frontmatter":{"title":"About CORPA"}}}}'
      );
    },
    HsiO: function(e, t, a) {
      var r = a("Z6+o"),
        n = a("6R51"),
        i = a("UlM4");
      e.exports = function(e, t) {
        return r(e) || n(e, t) || i();
      };
    },
    OGtf: function(e, t, a) {
      var r = a("XKFU"),
        n = a("eeVq"),
        i = a("vhPU"),
        o = /"/g,
        l = function(e, t, a, r) {
          var n = String(i(e)),
            l = "<" + t;
          return (
            "" !== a &&
              (l += " " + a + '="' + String(r).replace(o, "&quot;") + '"'),
            l + ">" + n + "</" + t + ">"
          );
        };
      e.exports = function(e, t) {
        var a = {};
        (a[e] = t(l)),
          r(
            r.P +
              r.F *
                n(function() {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            a
          );
      };
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
    "Q/ty": function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<h2>Prohibited practices for social media companies:</h2>\\n<ul>\\n<li>Infinite scroll or auto refill</li>\\n<li>Elimination of natural stopping points</li>\\n<li>Autoplay</li>\\n<li>Badges or other awards linked to engagement with the platform</li>\\n</ul>\\n<h2>Requirements for social media companies:</h2>\\n<ul>\\n<li>Allows a user to set a time limit that blocks the user’s own access to that platform…</li>\\n<li>Automatically limits the amount of time that a user may spend on those platforms across all devices to 30 minutes a day</li>\\n</ul>\\n<h2>Requirements for data-operators (anyone who operates a website, online service, application or mobile application):</h2>\\n<ul>\\n<li>Neutral presentation</li>\\n<li>No pre-selected option</li>\\n</ul>\\n<h2>Powers of the (Federal Trade) Commission:</h2>\\n<ul>\\n<li>This Act and regulations prescribed under this Act shall be enforced by the Commission (FTC)</li>\\n</ul>","frontmatter":{"title":"SMART"}}}}'
      );
    },
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("q1tI"),
        n = a.n(r),
        i = a("Wbzz"),
        o = a("Bl7J"),
        l = a("ezAz"),
        s = a("9eSz"),
        c = a.n(s),
        u = function() {
          var e = l.data;
          return n.a.createElement(c.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        d = a("vrFN"),
        f = (a("8+KV"), a("k1TG")),
        p = a("8o2o"),
        g = a("17x9"),
        m = a.n(g),
        h = a("TSYQ"),
        b = a.n(h),
        y = a("33Jr"),
        A = m.a.oneOfType([m.a.number, m.a.string]),
        v = {
          tag: y.c,
          noGutters: m.a.bool,
          className: m.a.string,
          cssModule: m.a.object,
          form: m.a.bool,
          xs: A,
          sm: A,
          md: A,
          lg: A,
          xl: A
        },
        w = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        E = function(e) {
          var t = e.className,
            a = e.cssModule,
            r = e.noGutters,
            i = e.tag,
            o = e.form,
            l = e.widths,
            s = Object(p.a)(e, [
              "className",
              "cssModule",
              "noGutters",
              "tag",
              "form",
              "widths"
            ]),
            c = [];
          l.forEach(function(t, a) {
            var r = e[t];
            if ((delete s[t], r)) {
              var n = !a;
              c.push(n ? "row-cols-" + r : "row-cols-" + t + "-" + r);
            }
          });
          var u = Object(y.b)(
            b()(t, r ? "no-gutters" : null, o ? "form-row" : "row", c),
            a
          );
          return n.a.createElement(i, Object(f.a)({}, s, { className: u }));
        };
      (E.propTypes = v), (E.defaultProps = w);
      var S = E,
        O = m.a.oneOfType([m.a.number, m.a.string]),
        R = m.a.oneOfType([
          m.a.bool,
          m.a.number,
          m.a.string,
          m.a.shape({
            size: m.a.oneOfType([m.a.bool, m.a.number, m.a.string]),
            order: O,
            offset: O
          })
        ]),
        I = {
          tag: y.c,
          xs: R,
          sm: R,
          md: R,
          lg: R,
          xl: R,
          className: m.a.string,
          cssModule: m.a.object,
          widths: m.a.array
        },
        N = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        C = function(e, t, a) {
          return !0 === a || "" === a
            ? e
              ? "col"
              : "col-" + t
            : "auto" === a
            ? e
              ? "col-auto"
              : "col-" + t + "-auto"
            : e
            ? "col-" + a
            : "col-" + t + "-" + a;
        },
        x = function(e) {
          var t = e.className,
            a = e.cssModule,
            r = e.widths,
            i = e.tag,
            o = Object(p.a)(e, ["className", "cssModule", "widths", "tag"]),
            l = [];
          r.forEach(function(t, r) {
            var n = e[t];
            if ((delete o[t], n || "" === n)) {
              var i = !r;
              if (Object(y.a)(n)) {
                var s,
                  c = i ? "-" : "-" + t + "-",
                  u = C(i, t, n.size);
                l.push(
                  Object(y.b)(
                    b()(
                      (((s = {})[u] = n.size || "" === n.size),
                      (s["order" + c + n.order] = n.order || 0 === n.order),
                      (s["offset" + c + n.offset] = n.offset || 0 === n.offset),
                      s)
                    ),
                    a
                  )
                );
              } else {
                var d = C(i, t, n);
                l.push(d);
              }
            }
          }),
            l.length || l.push("col");
          var s = Object(y.b)(b()(t, l), a);
          return n.a.createElement(i, Object(f.a)({}, o, { className: s }));
        };
      (x.propTypes = I), (x.defaultProps = N);
      var k = x;
      a("rGqo"), a("yt8O"), a("Btvt"), a("RW0V"), a("2Spj");
      var T = {
          active: m.a.bool,
          "aria-label": m.a.string,
          block: m.a.bool,
          color: m.a.string,
          disabled: m.a.bool,
          outline: m.a.bool,
          tag: y.c,
          innerRef: m.a.oneOfType([m.a.object, m.a.func, m.a.string]),
          onClick: m.a.func,
          size: m.a.string,
          children: m.a.node,
          className: m.a.string,
          cssModule: m.a.object,
          close: m.a.bool
        },
        j = (function(e) {
          var t, a;
          function r(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).onClick = a.onClick.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(a)
              )),
              a
            );
          }
          (a = e),
            ((t = r).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a);
          var i = r.prototype;
          return (
            (i.onClick = function(e) {
              this.props.disabled
                ? e.preventDefault()
                : this.props.onClick && this.props.onClick(e);
            }),
            (i.render = function() {
              var e = this.props,
                t = e.active,
                a = e["aria-label"],
                r = e.block,
                i = e.className,
                o = e.close,
                l = e.cssModule,
                s = e.color,
                c = e.outline,
                u = e.size,
                d = e.tag,
                g = e.innerRef,
                m = Object(p.a)(e, [
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
                void 0 === m.children &&
                (m.children = n.a.createElement(
                  "span",
                  { "aria-hidden": !0 },
                  "×"
                ));
              var h = "btn" + (c ? "-outline" : "") + "-" + s,
                A = Object(y.b)(
                  b()(
                    i,
                    { close: o },
                    o || "btn",
                    o || h,
                    !!u && "btn-" + u,
                    !!r && "btn-block",
                    { active: t, disabled: this.props.disabled }
                  ),
                  l
                );
              m.href && "button" === d && (d = "a");
              var v = o ? "Close" : null;
              return n.a.createElement(
                d,
                Object(f.a)(
                  { type: "button" === d && m.onClick ? "button" : void 0 },
                  m,
                  {
                    className: A,
                    ref: g,
                    onClick: this.onClick,
                    "aria-label": a || v
                  }
                )
              );
            }),
            r
          );
        })(n.a.Component);
      (j.propTypes = T),
        (j.defaultProps = { color: "secondary", tag: "button" });
      var V,
        M = j,
        z = function(e) {
          var t = e.selectedPolicy,
            a = e.policies,
            r = e.onClick;
          return n.a.createElement(
            S,
            null,
            Object.keys(a).map(function(e) {
              return n.a.createElement(
                k,
                { key: "policy-select-button-" + e },
                n.a.createElement(
                  M,
                  {
                    color: t === e ? "primary" : "secondary",
                    onClick: function(t) {
                      return r(e);
                    },
                    size: "lg",
                    className: "w-100"
                  },
                  a[e].short
                )
              );
            })
          );
        },
        L =
          (((V = {}).SMART = {
            short: "SMART Act",
            long: "SMART Act (Social Media Addiction Reduction Technology)"
          }),
          (V.ONLINE_PRIVACY = {
            short: "Online Privacy Act",
            long: "The Online Privacy Act"
          }),
          (V.CORPA = {
            short: "CORPA",
            long: "COPRA (Consumer Online Privacy Rights Act)"
          }),
          V),
        P = a("qN1e"),
        U = function() {
          var e = P.data;
          return n.a.createElement(c.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        B = a("CV6x"),
        q = function() {
          var e = B.data;
          return n.a.createElement(c.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        F = a("lxgn"),
        Y = function() {
          var e = F.data;
          return n.a.createElement(c.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        K =
          (a("pwFx"),
          function(e) {
            var t,
              a = e.selectedPolicy;
            return (
              "SMART" === a
                ? (t = n.a.createElement(U, null))
                : "ONLINE_PRIVACY" === a
                ? (t = n.a.createElement(q, null))
                : "CORPA" === a && (t = n.a.createElement(Y, null)),
              n.a.createElement(
                S,
                null,
                n.a.createElement(k, { xs: 12, className: "m-3" }, t)
              )
            );
          }),
        G = a("Q/ty"),
        H = function(e) {
          var t = e.markdownRemark,
            a = t.frontmatter,
            r = t.html;
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              S,
              null,
              n.a.createElement(k, null, n.a.createElement("h2", null, a.title))
            ),
            n.a.createElement(
              S,
              null,
              n.a.createElement(
                k,
                null,
                n.a.createElement("div", {
                  dangerouslySetInnerHTML: { __html: r }
                })
              )
            )
          );
        },
        W = function(e) {
          var t = G.data.markdownRemark;
          return n.a.createElement(H, { markdownRemark: t });
        },
        X = a("pmtx"),
        J = function(e) {
          var t = X.data.markdownRemark;
          return n.a.createElement(H, { markdownRemark: t });
        },
        D = a("D4hK"),
        Q = function(e) {
          var t = D.data.markdownRemark;
          return n.a.createElement(H, { markdownRemark: t });
        },
        Z = function(e) {
          var t = e.selectedPolicy;
          return "SMART" === t
            ? n.a.createElement(W, null)
            : "ONLINE_PRIVACY" === t
            ? n.a.createElement(J, null)
            : "CORPA" === t
            ? n.a.createElement(Q, null)
            : void 0;
        },
        _ = function() {
          var e = Object(r.useState)("SMART"),
            t = e[0],
            a = e[1];
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              S,
              null,
              n.a.createElement(
                k,
                null,
                n.a.createElement("h1", null, L[t].long)
              )
            ),
            n.a.createElement(K, { selectedPolicy: t, policies: L }),
            n.a.createElement(z, {
              selectedPolicy: t,
              policies: L,
              onClick: a
            }),
            n.a.createElement(Z, { selectedPolicy: t })
          );
        },
        $ = (a("KKXr"), a("OG14"), a("cr+I")),
        ee = a.n($);
      function te(e) {
        var t,
          a =
            ((t = "ft"),
            "undefined" != typeof window
              ? ee.a.parse(window.location.search)[t]
              : "");
        return !!a && a.split(",").indexOf(e) > -1;
      }
      a("q4sD"),
        (t.default = function() {
          return te("PRIVACY_MATTERS_2020")
            ? n.a.createElement(o.a, null, n.a.createElement(_, null))
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
    "cr+I": function(e, t, a) {
      "use strict";
      a("0l/t");
      var r = a("HsiO");
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
      var n = a("+YAX"),
        i = a("Pmem"),
        o = a("8jRI"),
        l = a("8yz6");
      function s(e, t) {
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
        var a = (function(e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function(e, a, r) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = a))
                      : (r[e] = a);
                };
              case "bracket":
                return function(e, a, r) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== r[e]
                        ? (r[e] = [].concat(r[e], a))
                        : (r[e] = [a])
                      : (r[e] = a);
                };
              case "comma":
                return function(e, t, a) {
                  var r =
                    "string" == typeof t && t.split("").indexOf(",") > -1
                      ? t.split(",")
                      : t;
                  a[e] = r;
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
          n = Object.create(null);
        if ("string" != typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        var i = !0,
          o = !1,
          s = void 0;
        try {
          for (
            var u, d = e.split("&")[Symbol.iterator]();
            !(i = (u = d.next()).done);
            i = !0
          ) {
            var p = u.value,
              g = l(t.decode ? p.replace(/\+/g, " ") : p, "="),
              m = r(g, 2),
              h = m[0],
              b = m[1];
            (b = void 0 === b ? null : c(b, t)), a(c(h, t), b, n);
          }
        } catch (R) {
          (o = !0), (s = R);
        } finally {
          try {
            i || null == d.return || d.return();
          } finally {
            if (o) throw s;
          }
        }
        for (var y = 0, A = Object.keys(n); y < A.length; y++) {
          var v = A[y],
            w = n[v];
          if ("object" == typeof w && null !== w)
            for (var E = 0, S = Object.keys(w); E < S.length; E++) {
              var O = S[E];
              w[O] = f(w[O], t);
            }
          else n[v] = f(w, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce(function(e, t) {
              var a = n[t];
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
                    return function(a, r) {
                      var i = a.length;
                      return void 0 === r || (e.skipNull && null === r)
                        ? a
                        : [].concat(
                            n(a),
                            null === r
                              ? [[s(t, e), "[", i, "]"].join("")]
                              : [
                                  [s(t, e), "[", s(i, e), "]=", s(r, e)].join(
                                    ""
                                  )
                                ]
                          );
                    };
                  };
                case "bracket":
                  return function(t) {
                    return function(a, r) {
                      return void 0 === r || (e.skipNull && null === r)
                        ? a
                        : [].concat(
                            n(a),
                            null === r
                              ? [[s(t, e), "[]"].join("")]
                              : [[s(t, e), "[]=", s(r, e)].join("")]
                          );
                    };
                  };
                case "comma":
                  return function(t) {
                    return function(a, r) {
                      return null == r || 0 === r.length
                        ? a
                        : 0 === a.length
                        ? [[s(t, e), "=", s(r, e)].join("")]
                        : [[a, s(r, e)].join(",")];
                    };
                  };
                default:
                  return function(t) {
                    return function(a, r) {
                      return void 0 === r || (e.skipNull && null === r)
                        ? a
                        : [].concat(
                            n(a),
                            null === r
                              ? [s(t, e)]
                              : [[s(t, e), "=", s(r, e)].join("")]
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
            r = Object.assign({}, e);
          if (t.skipNull)
            for (var i = 0, o = Object.keys(r); i < o.length; i++) {
              var l = o[i];
              (void 0 !== r[l] && null !== r[l]) || delete r[l];
            }
          var c = Object.keys(r);
          return (
            !1 !== t.sort && c.sort(t.sort),
            c
              .map(function(r) {
                var n = e[r];
                return void 0 === n
                  ? ""
                  : null === n
                  ? s(r, t)
                  : Array.isArray(n)
                  ? n.reduce(a(r), []).join("&")
                  : s(r, t) + "=" + s(n, t);
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
          var r = u(e.url).split("?")[0] || "",
            n = t.extract(e.url),
            i = t.parse(n),
            o = (function(e) {
              var t = "",
                a = e.indexOf("#");
              return -1 !== a && (t = e.slice(a)), t;
            })(e.url),
            l = Object.assign(i, e.query),
            s = t.stringify(l, a);
          return (
            s && (s = "?".concat(s)),
            ""
              .concat(r)
              .concat(s)
              .concat(o)
          );
        });
    },
    ezAz: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'
      );
    },
    lxgn: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y52UaU/iUBSG+/9/iAkxgWBilKUjLa2AxILKIgKKC7uyqUFlOdPnkEvGr9PkzblnX8FyHEc8z5Ns1pNMxhHHcUOaUd51s8pDXdfd8/igx0/h+3J2lhE7bYvl++eSzxfk4qKoRqenCcm6nlxeBsrvEjjqAG/bfyQdOp6f5yQISmoH9T1fMqGNValUpd1uS6vVCtGWu7s7pb/R+sVjf3vbUDQajdCnqTbNZlOsz89P+Z9vNptJtVqVTqcjm816L7dGo5HM53NZLBZKp9OpUjCZTNSRpB8fH4r393fFcrlUHh3vp6cnqVQqYvX7fRkOh4rBYKAKkvCmhefnZ1mv17JarcJKNur8+voq4/FYXl5e1O77+1uSyaREo9FdwF6vp4put6stPDw86CzL5bIGJUm9XtcKsKWLt7c3wZfgJOEyYrHYrmUUDJpMKL++vrQtWjbtEwSe0dAmeqrkTeUEPD4+FovKyB4EQXg+ebm+vlYeCh4fH7ViApAQyjKQ0Q0dUG0ul9sFpAWENzc3cnV1pW8CwgMCmOHzZkkEw49TYcboOfBEIiEWyzAt8aYtM0OcTfXMcbvd6oKwZXbmQ06wg4ODXYXMgrKhZsPISWD0BKcSkhMMnnkC5IVCQTetMzRgy7QApaJaraaVUhGD//n50YXBA3yQcVK2bcvR0ZFYtIgRGakS3sA4Iv8XVM5lADrC11yBxaD5uDHuiLLJdnJyIqVSSflUKhX+IaQVxWJRDg8PJRKJSDwe181yr/ufHjPgIxNbYyGAuzSHfn9/v5ebUQAj5xfDSFjOXwQciGfh2OGAAAAAAElFTkSuQmCC","aspectRatio":1.2805662805662805,"src":"/static/6a8a44a313f9ceabfb07b66d02e3e501/a54c6/policy-corpa-design.png","srcSet":"/static/6a8a44a313f9ceabfb07b66d02e3e501/59beb/policy-corpa-design.png 200w,\\n/static/6a8a44a313f9ceabfb07b66d02e3e501/c0bbd/policy-corpa-design.png 400w,\\n/static/6a8a44a313f9ceabfb07b66d02e3e501/a54c6/policy-corpa-design.png 800w,\\n/static/6a8a44a313f9ceabfb07b66d02e3e501/c35de/policy-corpa-design.png 995w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    pmtx: function(e) {
      e.exports = JSON.parse(
        '{"data":{"markdownRemark":{"html":"<ul>\\n<li>Creating User Rights – The bill grants every American the right to access, correct, or delete their data. It also creates new rights, like the right to impermanence, which lets users decide how long companies can keep their data.</li>\\n<li>Placing Clear Obligations on Companies – The bill minimizes the amount of data companies collect, process, disclose, and maintain, and bars companies from using data in discriminatory ways. Additionally, companies must receive consent from users in plain, simple language.</li>\\n<li>Establishing a Digital Privacy Agency (DPA) – The bill establishes an independent agency led by a Director that’s appointed by the President and confirmed by the Senate for a five-year term. The DPA will enforce privacy protections and investigate abuses.</li>\\n<li>Strengthening Enforcement – The bill empowers state attorneys general to enforce violations of the bill and allows individuals to appoint nonprofits to represent them in private class action lawsuits.</li>\\n</ul>","frontmatter":{"title":"About the Online Policy Act"}}}}'
      );
    },
    qN1e: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACH0lEQVQ4y11TxwpqQQz1v/wG8Qvc+Q8uRARBwYIIgoiCW0Gw7RRBt5aFiAXE3nvvNY+TR3z6AiF35iZnzslkFI/Hg/b7PR0OB9put9Rut6nX63EcDAbU6XSo0WhwHI/H1Gq1eB//+/0+LRYLrt3tdlyvOJ/PtNlseAMu4MfjkV2+EeGn04kj8uDfNcBR4OP5fHLicrmk1WpF0+mURqMRM5pMJhyxhg+HQ5rNZpy3Xq8/zLAGhgKnw7CYz+ecBMnNZpO92+1yrNVqLL3RaDIoDhcCYIZaqGVAMISBOnoCVgAFI/yDv99ver1eHLFG72VP7Hq9/gWURCTBRQIOuFwu3EPsoT1QIN9iqP0BFIbfhqRKpUKRSITy+TzLxToej1O5XOaDhcgPoJyEgkQiQel0mmMymaRYLEYej4dB4cFgkEKhEFWrVWb+PxEGhCxYKpUinU5HTqeT7HY7mc1mMhgMZDKZKBAIkNvtJq1WS+FwmC8JF4FLAUuAg+UPYCaTIZvNxsV+v59cLhepVCpSKpWk0WhIrVaTXq9nxrlc7jMuuDi05Ha70f1+/wcIqVarlXw+H4M6HA6KRqMsH3LBrF6vc//wUjBmMHk9AIT/AApDgEJ6oVBgWTLgmD8BkumQV4RL+rkU9NBoNJLX62W5FouFm49Tv58XZMpgwzC3eNMA/DCEdrAolUoMUiwWKZvNcn9kJjF/4pAMINShHjm4GLD/A6Zh8S7oWLr1AAAAAElFTkSuQmCC","aspectRatio":1.399449035812672,"src":"/static/cca8bf92213dc2861d73487e05cd756f/a54c6/policy-smart-design.png","srcSet":"/static/cca8bf92213dc2861d73487e05cd756f/59beb/policy-smart-design.png 200w,\\n/static/cca8bf92213dc2861d73487e05cd756f/c0bbd/policy-smart-design.png 400w,\\n/static/cca8bf92213dc2861d73487e05cd756f/a54c6/policy-smart-design.png 800w,\\n/static/cca8bf92213dc2861d73487e05cd756f/d37a8/policy-smart-design.png 1016w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}'
      );
    },
    xfY5: function(e, t, a) {
      "use strict";
      var r = a("dyZX"),
        n = a("aagx"),
        i = a("LZWt"),
        o = a("Xbzi"),
        l = a("apmT"),
        s = a("eeVq"),
        c = a("kJMx").f,
        u = a("EemH").f,
        d = a("hswa").f,
        f = a("qncB").trim,
        p = r.Number,
        g = p,
        m = p.prototype,
        h = "Number" == i(a("Kuth")(m)),
        b = "trim" in String.prototype,
        y = function(e) {
          var t = l(e, !1);
          if ("string" == typeof t && t.length > 2) {
            var a,
              r,
              n,
              i = (t = b ? t.trim() : f(t, 3)).charCodeAt(0);
            if (43 === i || 45 === i) {
              if (88 === (a = t.charCodeAt(2)) || 120 === a) return NaN;
            } else if (48 === i) {
              switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (n = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (n = 55);
                  break;
                default:
                  return +t;
              }
              for (var o, s = t.slice(2), c = 0, u = s.length; c < u; c++)
                if ((o = s.charCodeAt(c)) < 48 || o > n) return NaN;
              return parseInt(s, r);
            }
          }
          return +t;
        };
      if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(e) {
          var t = arguments.length < 1 ? 0 : e,
            a = this;
          return a instanceof p &&
            (h
              ? s(function() {
                  m.valueOf.call(a);
                })
              : "Number" != i(a))
            ? o(new g(y(t)), a, p)
            : y(t);
        };
        for (
          var A,
            v = a("nh4g")
              ? c(g)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            w = 0;
          v.length > w;
          w++
        )
          n(g, (A = v[w])) && !n(p, A) && d(p, A, u(g, A));
        (p.prototype = m), (m.constructor = p), a("KroJ")(r, "Number", p);
      }
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-e40c43c457f18e1d4fe2.js.map
