!(function(e) {
  function t(t) {
    for (
      var n, o, s = t[0], d = t[1], p = t[2], u = 0, l = [];
      u < s.length;
      u++
    )
      (o = s[u]),
        Object.prototype.hasOwnProperty.call(c, o) && c[o] && l.push(c[o][0]),
        (c[o] = 0);
    for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n]);
    for (i && i(t); l.length; ) l.shift()();
    return a.push.apply(a, p || []), r();
  }
  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, o = 1; o < r.length; o++) {
        var d = r[o];
        0 !== c[d] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = { 10: 0 },
    c = { 10: 0 },
    a = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.e = function(e) {
    var t = [];
    o[e]
      ? t.push(o[e])
      : 0 !== o[e] &&
        { 1: 1 }[e] &&
        t.push(
          (o[e] = new Promise(function(t, r) {
            for (
              var n =
                  ({
                    1: "styles",
                    3: "component---src-pages-404-js",
                    4: "component---src-pages-about-js",
                    5: "component---src-pages-bill-copra-js",
                    6: "component---src-pages-bill-opa-js",
                    7: "component---src-pages-bill-smart-js",
                    8: "component---src-pages-index-js",
                    9: "component---src-pages-research-js"
                  }[e] || e) +
                  "." +
                  {
                    1: "cf19925ad9e3d4ef0179",
                    3: "31d6cfe0d16ae931b73c",
                    4: "31d6cfe0d16ae931b73c",
                    5: "31d6cfe0d16ae931b73c",
                    6: "31d6cfe0d16ae931b73c",
                    7: "31d6cfe0d16ae931b73c",
                    8: "31d6cfe0d16ae931b73c",
                    9: "31d6cfe0d16ae931b73c"
                  }[e] +
                  ".css",
                c = s.p + n,
                a = document.getElementsByTagName("link"),
                d = 0;
              d < a.length;
              d++
            ) {
              var p =
                (i = a[d]).getAttribute("data-href") || i.getAttribute("href");
              if ("stylesheet" === i.rel && (p === n || p === c)) return t();
            }
            var u = document.getElementsByTagName("style");
            for (d = 0; d < u.length; d++) {
              var i;
              if ((p = (i = u[d]).getAttribute("data-href")) === n || p === c)
                return t();
            }
            var l = document.createElement("link");
            (l.rel = "stylesheet"),
              (l.type = "text/css"),
              (l.onload = t),
              (l.onerror = function(t) {
                var n = (t && t.target && t.target.src) || c,
                  a = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                  );
                (a.code = "CSS_CHUNK_LOAD_FAILED"),
                  (a.request = n),
                  delete o[e],
                  l.parentNode.removeChild(l),
                  r(a);
              }),
              (l.href = c),
              document.getElementsByTagName("head")[0].appendChild(l);
          }).then(function() {
            o[e] = 0;
          }))
        );
    var r = c[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var n = new Promise(function(t, n) {
          r = c[e] = [t, n];
        });
        t.push((r[2] = n));
        var a,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          s.nc && d.setAttribute("nonce", s.nc),
          (d.src = (function(e) {
            return (
              s.p +
              "" +
              ({
                1: "styles",
                3: "component---src-pages-404-js",
                4: "component---src-pages-about-js",
                5: "component---src-pages-bill-copra-js",
                6: "component---src-pages-bill-opa-js",
                7: "component---src-pages-bill-smart-js",
                8: "component---src-pages-index-js",
                9: "component---src-pages-research-js"
              }[e] || e) +
              "-" +
              {
                1: "3eb08573d7118bff0c78",
                3: "d98adca4dc288b567124",
                4: "62f4bd33121a5db345ac",
                5: "8e892248d46ced5d801d",
                6: "c5552014dee3fb14b9b8",
                7: "dbb95d0a40c8f2766276",
                8: "cc1359ccb39ad20df2bc",
                9: "cf7974ddcccd656822ea"
              }[e] +
              ".js"
            );
          })(e));
        var p = new Error();
        a = function(t) {
          (d.onerror = d.onload = null), clearTimeout(u);
          var r = c[e];
          if (0 !== r) {
            if (r) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (p.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")"),
                (p.name = "ChunkLoadError"),
                (p.type = n),
                (p.request = o),
                r[1](p);
            }
            c[e] = void 0;
          }
        };
        var u = setTimeout(function() {
          a({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = a), document.head.appendChild(d);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = n),
    (s.d = function(e, t, r) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (s.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/"),
    (s.oe = function(e) {
      throw (console.error(e), e);
    });
  var d = (window.webpackJsonp = window.webpackJsonp || []),
    p = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var u = 0; u < d.length; u++) t(d[u]);
  var i = p;
  r();
})([]);
//# sourceMappingURL=webpack-runtime-716abb04dc1e317e244e.js.map