(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "0mN4": function(e, t, a) {
      "use strict";
      a("OGtf")("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
    },
    "9eSz": function(e, t, a) {
      "use strict";
      a("rGqo"), a("yt8O"), a("Btvt"), a("XfO3"), a("EK0E"), a("0mN4");
      var r = a("5NKs");
      (t.__esModule = !0), (t.default = void 0);
      var i,
        s = r(a("v06X")),
        n = r(a("XEEL")),
        o = r(a("uDP2")),
        d = r(a("j8BX")),
        l = r(a("q1tI")),
        c = r(a("17x9")),
        u = function(e) {
          var t = (0, d.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            i = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            i && (t.loading = "eager"),
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
        g = Object.create({}),
        p = function(e) {
          var t = u(e),
            a = f(t);
          return g[a] || !1;
        },
        m =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        h = "undefined" != typeof window,
        b = h && window.IntersectionObserver,
        y = new WeakMap();
      function S(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            i = e.media,
            s = e.sizes;
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            r &&
              l.default.createElement("source", {
                type: "image/webp",
                media: i,
                srcSet: r,
                sizes: s
              }),
            l.default.createElement("source", { media: i, srcSet: a, sizes: s })
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
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG;
          return l.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return l.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function z(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          i = e.media,
          s = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (i ? 'media="' + i + '" ' : "") +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (s ? 'sizes="' + s + '" ' : "") +
          "/>"
        );
      }
      var I = function(e, t) {
          var a =
            (void 0 === i &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (y.has(e.target)) {
                      var t = y.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), y.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            i);
          return (
            a && (a.observe(e), y.set(e, t)),
            function() {
              a.unobserve(e), y.delete(e);
            }
          );
        },
        L = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            n = e.width ? 'width="' + e.width + '" ' : "",
            o = e.height ? 'height="' + e.height + '" ' : "",
            d = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            l = e.loading ? 'loading="' + e.loading + '" ' : "",
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? z(e, !0) : "") + z(e);
              })
              .join("") +
            "<img " +
            l +
            n +
            o +
            a +
            r +
            t +
            s +
            i +
            d +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        O = function(e) {
          var t = e.src,
            a = e.imageVariants,
            r = e.generateSources,
            i = e.spreadProps,
            s = l.default.createElement(R, (0, d.default)({ src: t }, i));
          return a.length > 1
            ? l.default.createElement("picture", null, r(a), s)
            : s;
        },
        R = l.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            s = e.style,
            n = e.onLoad,
            c = e.onError,
            u = e.loading,
            f = e.draggable,
            g = (0, o.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable"
            ]);
          return l.default.createElement(
            "img",
            (0, d.default)({ sizes: a, srcSet: r, src: i }, g, {
              onLoad: n,
              onError: c,
              ref: t,
              loading: u,
              draggable: f,
              style: (0, d.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                s
              )
            })
          );
        });
      R.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func
      };
      var A = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = h && p(t)),
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
            (a.imageRef = l.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, s.default)(a))),
            (a.handleRef = a.handleRef.bind((0, s.default)(a))),
            a
          );
        }
        (0, n.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: p(this.props) }),
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
              (this.cleanUpListeners = I(e, function() {
                var e = p(t.props);
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
              (t = u(e)),
              (a = f(t)),
              (g[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              s = void 0 === i ? {} : i,
              n = e.imgStyle,
              o = void 0 === n ? {} : n,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              g = e.placeholderClassName,
              p = e.fluid,
              m = e.fixed,
              h = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              v = e.itemProp,
              z = e.loading,
              I = e.draggable,
              A = !1 === this.state.fadeIn || this.state.imgLoaded,
              V = !0 === this.state.fadeIn && !this.state.imgCached,
              N = (0, d.default)(
                {
                  opacity: A ? 1 : 0,
                  transition: V ? "opacity " + b + "ms" : "none"
                },
                o
              ),
              C = "boolean" == typeof h ? "lightgray" : h,
              x = { transitionDelay: b + "ms" },
              W = (0, d.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                V && x,
                {},
                o,
                {},
                f
              ),
              q = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: W,
                className: g,
                itemProp: v
              };
            if (p) {
              var T = p,
                P = T[0];
              return l.default.createElement(
                y,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, d.default)(
                    { position: "relative", overflow: "hidden" },
                    s
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(P.srcSet)
                },
                l.default.createElement(y, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / P.aspectRatio + "%"
                  }
                }),
                C &&
                  l.default.createElement(y, {
                    title: t,
                    style: (0, d.default)(
                      {
                        backgroundColor: C,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      V && x
                    )
                  }),
                P.base64 &&
                  l.default.createElement(O, {
                    src: P.base64,
                    spreadProps: q,
                    imageVariants: T,
                    generateSources: w
                  }),
                P.tracedSVG &&
                  l.default.createElement(O, {
                    src: P.tracedSVG,
                    spreadProps: q,
                    imageVariants: T,
                    generateSources: E
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    "picture",
                    null,
                    S(T),
                    l.default.createElement(R, {
                      alt: a,
                      title: t,
                      sizes: P.sizes,
                      src: P.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: P.srcSet,
                      style: N,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: z,
                      draggable: I
                    })
                  ),
                this.addNoScript &&
                  l.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: L(
                        (0, d.default)({ alt: a, title: t, loading: z }, P, {
                          imageVariants: T
                        })
                      )
                    }
                  })
              );
            }
            if (m) {
              var B = m,
                M = B[0],
                j = (0, d.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: M.width,
                    height: M.height
                  },
                  s
                );
              return (
                "inherit" === s.display && delete j.display,
                l.default.createElement(
                  y,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: j,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(M.srcSet)
                  },
                  C &&
                    l.default.createElement(y, {
                      title: t,
                      style: (0, d.default)(
                        {
                          backgroundColor: C,
                          width: M.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: M.height
                        },
                        V && x
                      )
                    }),
                  M.base64 &&
                    l.default.createElement(O, {
                      src: M.base64,
                      spreadProps: q,
                      imageVariants: B,
                      generateSources: w
                    }),
                  M.tracedSVG &&
                    l.default.createElement(O, {
                      src: M.tracedSVG,
                      spreadProps: q,
                      imageVariants: B,
                      generateSources: E
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      "picture",
                      null,
                      S(B),
                      l.default.createElement(R, {
                        alt: a,
                        title: t,
                        width: M.width,
                        height: M.height,
                        sizes: M.sizes,
                        src: M.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: M.srcSet,
                        style: N,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: z,
                        draggable: I
                      })
                    ),
                  this.addNoScript &&
                    l.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: L(
                          (0, d.default)({ alt: a, title: t, loading: z }, M, {
                            imageVariants: B
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
      })(l.default.Component);
      A.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var V = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string
        }),
        N = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string
        });
      A.propTypes = {
        resolutions: V,
        sizes: N,
        fixed: c.default.oneOfType([V, c.default.arrayOf(V)]),
        fluid: c.default.oneOfType([N, c.default.arrayOf(N)]),
        fadeIn: c.default.bool,
        durationFadeIn: c.default.number,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
        loading: c.default.oneOf(["auto", "lazy", "eager"]),
        draggable: c.default.bool
      };
      var C = A;
      t.default = C;
    },
    OGtf: function(e, t, a) {
      var r = a("XKFU"),
        i = a("eeVq"),
        s = a("vhPU"),
        n = /"/g,
        o = function(e, t, a, r) {
          var i = String(s(e)),
            o = "<" + t;
          return (
            "" !== a &&
              (o += " " + a + '="' + String(r).replace(n, "&quot;") + '"'),
            o + ">" + i + "</" + t + ">"
          );
        };
      e.exports = function(e, t) {
        var a = {};
        (a[e] = t(o)),
          r(
            r.P +
              r.F *
                i(function() {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            a
          );
      };
    },
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("q1tI"),
        i = a.n(r),
        s = a("Wbzz"),
        n = a("Bl7J"),
        o = a("ezAz"),
        d = a("9eSz"),
        l = a.n(d),
        c = function() {
          var e = o.data;
          return i.a.createElement(l.a, {
            fluid: e.placeholderImage.childImageSharp.fluid
          });
        },
        u = a("vrFN");
      t.default = function() {
        return i.a.createElement(
          n.a,
          null,
          i.a.createElement(u.a, { title: "Home" }),
          i.a.createElement("h1", null, "Hi people"),
          i.a.createElement("p", null, "Welcome to your new Gatsby site."),
          i.a.createElement("p", null, "Now go build something great."),
          i.a.createElement(
            "div",
            { style: { maxWidth: "300px", marginBottom: "1.45rem" } },
            i.a.createElement(c, null)
          ),
          i.a.createElement(s.Link, { to: "/page-2/" }, "Go to page 2")
        );
      };
    },
    ezAz: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png","srcSet":"/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/19787/gatsby-astronaut.png 75w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/59d48/gatsby-astronaut.png 150w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6a2b/gatsby-astronaut.png 300w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/eea35/gatsby-astronaut.png 450w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/78d2a/gatsby-astronaut.png 600w,\\n/privacy-matters/static/6d91c86c0fde632ba4cd01062fd9ccfa/a54c6/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-5c979629acd072a70c83.js.map
