!(function(e) {
  function t(t) {
    for (
      var n, o, s = t[0], f = t[1], p = t[2], u = 0, l = [];
      u < s.length;
      u++
    )
      (o = s[u]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && l.push(a[o][0]),
        (a[o] = 0);
    for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (e[n] = f[n]);
    for (i && i(t); l.length; ) l.shift()();
    return c.push.apply(c, p || []), r();
  }
  function r() {
    for (var e, t = 0; t < c.length; t++) {
      for (var r = c[t], n = !0, o = 1; o < r.length; o++) {
        var f = r[o];
        0 !== a[f] && (n = !1);
      }
      n && (c.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = { 10: 0 },
    a = { 10: 0 },
    c = [];
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
                    1: "293e9f4934948ca45027",
                    3: "31d6cfe0d16ae931b73c",
                    4: "31d6cfe0d16ae931b73c",
                    5: "31d6cfe0d16ae931b73c",
                    6: "31d6cfe0d16ae931b73c",
                    7: "31d6cfe0d16ae931b73c",
                    8: "31d6cfe0d16ae931b73c",
                    9: "31d6cfe0d16ae931b73c"
                  }[e] +
                  ".css",
                a = s.p + n,
                c = document.getElementsByTagName("link"),
                f = 0;
              f < c.length;
              f++
            ) {
              var p =
                (i = c[f]).getAttribute("data-href") || i.getAttribute("href");
              if ("stylesheet" === i.rel && (p === n || p === a)) return t();
            }
            var u = document.getElementsByTagName("style");
            for (f = 0; f < u.length; f++) {
              var i;
              if ((p = (i = u[f]).getAttribute("data-href")) === n || p === a)
                return t();
            }
            var l = document.createElement("link");
            (l.rel = "stylesheet"),
              (l.type = "text/css"),
              (l.onload = t),
              (l.onerror = function(t) {
                var n = (t && t.target && t.target.src) || a,
                  c = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                  );
                (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.request = n),
                  delete o[e],
                  l.parentNode.removeChild(l),
                  r(c);
              }),
              (l.href = a),
              document.getElementsByTagName("head")[0].appendChild(l);
          }).then(function() {
            o[e] = 0;
          }))
        );
    var r = a[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var n = new Promise(function(t, n) {
          r = a[e] = [t, n];
        });
        t.push((r[2] = n));
        var c,
          f = document.createElement("script");
        (f.charset = "utf-8"),
          (f.timeout = 120),
          s.nc && f.setAttribute("nonce", s.nc),
          (f.src = (function(e) {
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
                1: "a0c3ad6bdf7eaf913b13",
                3: "d98adca4dc288b567124",
                4: "21104d31485842fb60ec",
                5: "507304f8f2190b521f73",
                6: "a315a63018a025f6f789",
                7: "fdf08f2b55e824e1ab02",
                8: "2c5192a252f7f968fe5d",
                9: "524ec0a6f059660d6dfa"
              }[e] +
              ".js"
            );
          })(e));
        var p = new Error();
        c = function(t) {
          (f.onerror = f.onload = null), clearTimeout(u);
          var r = a[e];
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
            a[e] = void 0;
          }
        };
        var u = setTimeout(function() {
          c({ type: "timeout", target: f });
        }, 12e4);
        (f.onerror = f.onload = c), document.head.appendChild(f);
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
  var f = (window.webpackJsonp = window.webpackJsonp || []),
    p = f.push.bind(f);
  (f.push = t), (f = f.slice());
  for (var u = 0; u < f.length; u++) t(f[u]);
  var i = p;
  r();
})([]);
//# sourceMappingURL=webpack-runtime-1b07547db18bff08f93d.js.map
