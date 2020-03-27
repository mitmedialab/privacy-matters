(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "0+i1": function(e, A, a) {
      "use strict";
      var t = a("q1tI"),
        n = a.n(t),
        c = a("1Yj4");
      a("k9Ez");
      A.a = function(e) {
        var A = e.children;
        return n.a.createElement(
          "div",
          { className: "card-section" },
          n.a.createElement(c.a, null, n.a.createElement("main", null, A))
        );
      };
    },
    "3XHS": function(e, A, a) {
      "use strict";
      a.r(A);
      a("q4sD");
      var t = a("q1tI"),
        n = a.n(t),
        c = a("Bl7J"),
        l = a("ok1R"),
        r = a("rhny"),
        i = a("k1TG"),
        s = a("8o2o"),
        o = a("17x9"),
        m = a.n(o),
        E = a("TSYQ"),
        d = a.n(E),
        g = a("33Jr"),
        u = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        p = function(e) {
          var A = e.className,
            a = e.cssModule,
            t = e.tag,
            c = Object(s.a)(e, ["className", "cssModule", "tag"]),
            l = Object(g.j)(d()(A, "card-deck"), a);
          return n.a.createElement(t, Object(i.a)({}, c, { className: l }));
        };
      (p.propTypes = u), (p.defaultProps = { tag: "div" });
      var h = p,
        f = a("tel/"),
        j = a("9eSz"),
        Q = a.n(j),
        b = function() {
          var e = f.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(Q.a, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        },
        B = a("G7hR"),
        N = function() {
          var e = B.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(Q.a, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        },
        w = a("4Xwf"),
        v = function() {
          var e = w.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(Q.a, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        },
        C = a("GR/q"),
        x = function() {
          var e = C.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(Q.a, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        },
        M = function() {
          var e = f.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(Q.a, {
              fluid: e.placeholderImage.childImageSharp.fluid
            })
          );
        },
        D = (a("f3/d"), a("BLzl")),
        Y = {
          tag: g.n,
          className: m.a.string,
          cssModule: m.a.object,
          innerRef: m.a.oneOfType([m.a.object, m.a.string, m.a.func])
        },
        I = function(e) {
          var A = e.className,
            a = e.cssModule,
            t = e.innerRef,
            c = e.tag,
            l = Object(s.a)(e, ["className", "cssModule", "innerRef", "tag"]),
            r = Object(g.j)(d()(A, "card-body"), a);
          return n.a.createElement(
            c,
            Object(i.a)({}, l, { className: r, ref: t })
          );
        };
      (I.propTypes = Y), (I.defaultProps = { tag: "div" });
      var y = I,
        R = a("ChEw"),
        S = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        T = function(e) {
          var A = e.className,
            a = e.cssModule,
            t = e.tag,
            c = Object(s.a)(e, ["className", "cssModule", "tag"]),
            l = Object(g.j)(d()(A, "card-subtitle"), a);
          return n.a.createElement(t, Object(i.a)({}, c, { className: l }));
        };
      (T.propTypes = S), (T.defaultProps = { tag: "div" });
      var G = T,
        P = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        O = function(e) {
          var A = e.className,
            a = e.cssModule,
            t = e.tag,
            c = Object(s.a)(e, ["className", "cssModule", "tag"]),
            l = Object(g.j)(d()(A, "card-text"), a);
          return n.a.createElement(t, Object(i.a)({}, c, { className: l }));
        };
      (O.propTypes = P), (O.defaultProps = { tag: "p" });
      var F = O,
        U = a("DCcX"),
        k = a("vkoW"),
        z = a("CaDr"),
        J = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        H = function(e) {
          var A = e.className,
            a = e.cssModule,
            t = e.tag,
            c = Object(s.a)(e, ["className", "cssModule", "tag"]),
            l = Object(g.j)(d()(A, "modal-footer"), a);
          return n.a.createElement(t, Object(i.a)({}, c, { className: l }));
        };
      (H.propTypes = J), (H.defaultProps = { tag: "div" });
      var Z = H,
        W = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        X = function(e) {
          var A = e.className,
            a = e.cssModule,
            t = e.tag,
            c = Object(s.a)(e, ["className", "cssModule", "tag"]),
            l = Object(g.j)(d()(A, "card-footer"), a);
          return n.a.createElement(t, Object(i.a)({}, c, { className: l }));
        };
      (X.propTypes = W), (X.defaultProps = { tag: "div" });
      var L = X,
        V = function(e) {
          var A = e.image,
            a = e.name,
            c = e.role,
            i = e.affiliation,
            s = e.website,
            o = e.children,
            m = Object(t.useState)(!1),
            E = m[0],
            d = m[1],
            g = function() {
              return d(!E);
            };
          return n.a.createElement(
            D.a,
            { onClick: g },
            A,
            n.a.createElement(
              y,
              { className: "text-center pb-5" },
              n.a.createElement(R.a, { className: "py-3" }, a),
              n.a.createElement(G, null, c),
              n.a.createElement(F, null, n.a.createElement("i", null, i)),
              n.a.createElement(
                U.a,
                {
                  className: "profile-modal",
                  isOpen: E,
                  toggle: g,
                  centered: !0,
                  size: "lg"
                },
                n.a.createElement(k.a, { toggle: g }),
                n.a.createElement(
                  z.a,
                  null,
                  n.a.createElement(
                    l.a,
                    null,
                    n.a.createElement(
                      r.a,
                      { md: 4, className: "text-center" },
                      n.a.createElement("div", null, A),
                      n.a.createElement(
                        "div",
                        { className: "profile-meta" },
                        n.a.createElement(
                          "div",
                          { className: "profile-name" },
                          a
                        ),
                        n.a.createElement("div", null, c),
                        n.a.createElement(
                          "div",
                          null,
                          n.a.createElement("i", null, i)
                        )
                      )
                    ),
                    n.a.createElement(
                      r.a,
                      { md: 8 },
                      n.a.createElement("p", null, o),
                      n.a.createElement(
                        "p",
                        null,
                        n.a.createElement(
                          "a",
                          {
                            href: s,
                            rel: "noopener noreferrer",
                            target: "_blank"
                          },
                          "Website"
                        )
                      )
                    )
                  )
                ),
                n.a.createElement(
                  Z,
                  null,
                  n.a.createElement("div", { className: "animation" })
                )
              )
            ),
            n.a.createElement(L, null)
          );
        },
        K = function(e) {
          var A = e.image,
            a = e.name,
            t = e.role,
            c = e.affiliation;
          return n.a.createElement(
            D.a,
            { className: "advisor-profile" },
            A,
            n.a.createElement(
              y,
              { className: "text-center pb-5" },
              n.a.createElement(R.a, { className: "py-3" }, a),
              n.a.createElement(G, null, t),
              n.a.createElement(F, null, n.a.createElement("i", null, c))
            )
          );
        },
        q =
          (a("4GFT"),
          function(e) {
            return n.a.createElement(
              "div",
              { id: "about", className: "about" },
              n.a.createElement(
                l.a,
                null,
                n.a.createElement(
                  r.a,
                  { xs: 12 },
                  n.a.createElement(
                    "h1",
                    { className: "text-center" },
                    n.a.createElement(
                      "span",
                      { className: "half-highlight" },
                      "About"
                    )
                  )
                )
              ),
              n.a.createElement(
                l.a,
                { className: "justify-content-md-center" },
                n.a.createElement(
                  r.a,
                  { xs: 12, md: 9 },
                  n.a.createElement(
                    "p",
                    { className: "subheading-2" },
                    "Let’s Talk Privacy explores how the implementation of privacy and data governance policies might impact a variety of fields."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "There have been dozens of draft bills on privacy and data governance policies. How do these policies translate in practice? How they might affect us? We interviewed 41 people, including lawyers, designers, engineers, civil rights advocates, policymakers, and stewards of sensitive data: social workers, pediatricians, librarians. These conversations revealed 1) the diverse definitions and contexts of privacy 2) a variety of responses to recent data governance and privacy draft bills, and 3) the biggest privacy-related challenges (and possible ways to solve them) in different fields."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "We believe in transparency and in improving how we translate complex topics to the public. This project aims to better inform and engage everyday people -- the non-privacy related lawyers, technologists, researchers about some of the latest developments in policy. The project also aims to bring together cross-disciplinary insights to inform policymakers about how their bills can impact end users and people who manage sensitive data for a variety of marginalized and vulnerable communities."
                  ),
                  n.a.createElement(
                    "p",
                    null,
                    "This research reflects only a small portion of the diverse perspectives we can bring to data governance and policy making. We hope to spur more conversations, reveal new insights, and prompt positive action."
                  )
                )
              ),
              n.a.createElement(
                l.a,
                { className: "my-3" },
                n.a.createElement(
                  r.a,
                  { xs: 12 },
                  n.a.createElement(
                    "h2",
                    { className: "text-center" },
                    n.a.createElement(
                      "span",
                      { className: "half-highlight" },
                      "Team"
                    )
                  )
                ),
                n.a.createElement(
                  r.a,
                  { xs: 12, className: "py-4" },
                  n.a.createElement(
                    h,
                    null,
                    n.a.createElement(
                      V,
                      {
                        image: n.a.createElement(v, null),
                        name: "Stephanie Nguyen",
                        role: "Research Scientist",
                        affiliation: "MIT Media Lab / Center for Civic Media",
                        website: "https://www.stephanienguyen.co/"
                      },
                      "TBD"
                    ),
                    n.a.createElement(
                      V,
                      {
                        image: n.a.createElement(b, null),
                        name: "Anna Chung",
                        role: "Designer",
                        affiliation: "MIT Center for Civic Media",
                        website: "https://www.annawchung.com/"
                      },
                      "Anna is a UX designer and researcher at MIT’s Center for Civic Media. She has designed tools and visualizations for several social impact organizations, including the Design Studio for Social Intervention, Anti-Eviction Mapping Project, and 1001 Stories. She is passionate about using technology and design for public good."
                    ),
                    n.a.createElement(
                      V,
                      {
                        image: n.a.createElement(N, null),
                        name: "Dennis Jen",
                        role: "Lead Developer",
                        affiliation: "MIT Center for Civic Media",
                        website: "http://www.dennisjen.com"
                      },
                      "Dennis is a software developer at MIT's Center for Civic Media. He has an extensive background in building web application and visualization tools across a variety of industries, including genetics, oncology, neuroscience, and education technology. At the Center for Civic Media, he applies this background to developing technology for social good. When not hunched over a keyboard, he's often hunched over a pottery wheel or piano."
                    )
                  )
                )
              ),
              n.a.createElement(
                l.a,
                { className: "mb-5" },
                n.a.createElement(
                  r.a,
                  { sm: 8, xs: 12 },
                  n.a.createElement(
                    h,
                    null,
                    n.a.createElement(
                      V,
                      {
                        image: n.a.createElement(x, null),
                        name: "Pardis Emami Naeni",
                        role: "PhD candidate",
                        affiliation: "Carnegie Mellon University",
                        website: "https://www.cs.cmu.edu/~pemamina"
                      },
                      "Pardis is a final year PhD candidate of computer science at Carnegie Mellon University, where she is advised by Lorrie Cranor and Yuvraj Agarwal. Pardis is passionate about building usable tools to help people protect their privacy and security when interacting with Internet of Things (IoT) devices. During her PhD, Pardis developed a usable privacy and security label for smart devices to inform consumers’ IoT related purchase decisions. More information on this project can be found here:",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          href: "http://www.iotsecurityprivacy.org",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        },
                        "www.iotsecurityprivacy.org"
                      )
                    ),
                    n.a.createElement(
                      V,
                      {
                        image: n.a.createElement(M, null),
                        name: "Jasmine McNealy",
                        role: "Prof",
                        affiliation: "University of Florida",
                        website: ""
                      },
                      "TBD"
                    )
                  )
                )
              ),
              n.a.createElement(
                l.a,
                null,
                n.a.createElement(
                  r.a,
                  { xs: 12 },
                  n.a.createElement(
                    "h2",
                    { className: "text-center" },
                    n.a.createElement(
                      "span",
                      { className: "half-highlight" },
                      "Advisors"
                    )
                  )
                )
              ),
              n.a.createElement(
                l.a,
                { className: "mb-5" },
                n.a.createElement(
                  r.a,
                  { xs: 12 },
                  n.a.createElement(
                    h,
                    null,
                    n.a.createElement(K, {
                      image: n.a.createElement(v, null),
                      name: "Ethan Zuckerman",
                      role: "Director",
                      affiliation: "MIT Media Lab / Center for Civic Media"
                    }),
                    n.a.createElement(K, {
                      image: n.a.createElement(v, null),
                      name: "Emily Peterson Cassin",
                      role: "TBD",
                      affiliation: "Public Citizen"
                    }),
                    n.a.createElement(K, {
                      image: n.a.createElement(v, null),
                      name: "Najarian Peters",
                      role: "TBD",
                      affiliation: "Seton Hall"
                    })
                  )
                )
              ),
              n.a.createElement(
                l.a,
                { className: "mb-5" },
                n.a.createElement(
                  r.a,
                  { sm: 4, xs: 12 },
                  n.a.createElement(
                    h,
                    null,
                    n.a.createElement(K, {
                      image: n.a.createElement(v, null),
                      name: "Sydney Luken",
                      role: "TBD",
                      affiliation: "Georgetown Ethics Lab"
                    })
                  )
                )
              )
            );
          }),
        _ = a("2qpI"),
        $ = a("Wbzz"),
        ee = a("0+i1"),
        Ae =
          (a("91YG"),
          function(e) {
            return n.a.createElement(
              ee.a,
              null,
              n.a.createElement(
                l.a,
                { className: "my-5 contact-us" },
                n.a.createElement(
                  r.a,
                  { md: 8 },
                  n.a.createElement(
                    D.a,
                    { className: "p-5" },
                    n.a.createElement(
                      "h2",
                      null,
                      n.a.createElement(
                        "span",
                        { className: "half-highlight" },
                        "Lets talk privacy (and more)"
                      )
                    ),
                    n.a.createElement(
                      "p",
                      { className: "pt-2 pb-3 subheading-2" },
                      "Have thoughts on our research? ",
                      n.a.createElement("br", null),
                      "Interested in collaborating with us? ",
                      n.a.createElement("br", null),
                      "We want to hear from you!"
                    ),
                    n.a.createElement(
                      $.Link,
                      { className: "btn btn-secondary py-3" },
                      n.a.createElement(
                        "a",
                        {
                          href: "mailto:letstalkprivacy@media.mit.edu",
                          target: "_top"
                        },
                        "Shoot us an email"
                      )
                    )
                  )
                )
              )
            );
          }),
        ae = a("eKp/");
      A.default = function() {
        return Object(ae.b)(ae.a)
          ? n.a.createElement(
              "div",
              { className: "privacy-page" },
              n.a.createElement(_.a, { showHome: !0 }),
              n.a.createElement(c.a, null, n.a.createElement(q, null)),
              n.a.createElement(Ae, null),
              n.a.createElement(c.a, { footer: !0 })
            )
          : n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement("h1", null, "TBD")
            );
      };
    },
    "4Xwf": function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIEBgMF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAfSr0eUugRWZuIaIH//EAB0QAAIBBAMAAAAAAAAAAAAAAAEDAgAEEjMREyL/2gAIAQEAAQUCZLBaSYzq8acms6ng8xutzx6hr//EABURAQEAAAAAAAAAAAAAAAAAACBB/9oACAEDAQE/AYP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAhEAACAQEJAQAAAAAAAAAAAAAAAQISEBETMUFCUWFxgf/aAAgBAQAGPwKTKXJu9a2YayFRtQnyT+En2R8P/8QAHBAAAwEAAgMAAAAAAAAAAAAAAAERITFhQVGh/9oACAEBAAE/IZrylgirNNXUQ8fSm+xzPJS065U070KUusfIP//aAAwDAQACAAMAAAAQF8hA/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARQf/aAAgBAwEBPxASli//xAAWEQEBAQAAAAAAAAAAAAAAAAABESD/2gAIAQIBAT8QbTH/xAAgEAEBAAICAAcAAAAAAAAAAAABEQAhMVFBYZGhweHw/9oACAEBAAE/EGmx+3fB7uIUXVQxZ5I4i4uw4J2n4w1i0NxpU9MMokY6pc2LkQ9aMs6Ap4cfWOfn0Z//2Q==","aspectRatio":1,"src":"/static/e62b0e975a23e535728b1e0a6374594c/ca45b/team-steph.jpg","srcSet":"/static/e62b0e975a23e535728b1e0a6374594c/00e5e/team-steph.jpg 200w,\\n/static/e62b0e975a23e535728b1e0a6374594c/1a903/team-steph.jpg 400w,\\n/static/e62b0e975a23e535728b1e0a6374594c/ca45b/team-steph.jpg 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}}}'
      );
    },
    G7hR: function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQD/2gAMAwEAAhADEAAAAdeUxy2NEIuxlyAX/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAECAyEEEf/aAAgBAQABBQLR3JnVOyvjM3GddHz0aQnCbP/EABYRAQEBAAAAAAAAAAAAAAAAABEBIP/aAAgBAwEBPwEhj//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8BrLv/xAAfEAACAgIBBQAAAAAAAAAAAAAAAQIRMUESIWFyguH/2gAIAQEABj8CtRddzjKn4mBxdD1rB8PUl00ZaP/EABwQAQADAQEAAwAAAAAAAAAAAAEAESExQWGR4f/aAAgBAQABPyFQ5Q8bHT52MIn6lJPHItulB8JY4fUaU8m6uLR5hDKGf//aAAwDAQACAAMAAAAQqBDC/8QAGREBAAIDAAAAAAAAAAAAAAAAAAERIVFh/9oACAEDAQE/EJzFcbQ//8QAGREAAwADAAAAAAAAAAAAAAAAAAERMUFR/9oACAECAQE/EFaF9NoeT//EAB0QAQEAAgIDAQAAAAAAAAAAAAERACExUUFhkeH/2gAIAQEAAT8QCQSRIKQr1vFsXSguxr7MgbClRJMKEO60aYyC0jQjVTHiCO6CfcS1kCeEvD3hUGgpyMuQukURx+5//9k=","aspectRatio":1,"src":"/static/9a88a26bd36d5e513087c3f8e932dd73/ca45b/team-dennis.jpg","srcSet":"/static/9a88a26bd36d5e513087c3f8e932dd73/00e5e/team-dennis.jpg 200w,\\n/static/9a88a26bd36d5e513087c3f8e932dd73/1a903/team-dennis.jpg 400w,\\n/static/9a88a26bd36d5e513087c3f8e932dd73/ca45b/team-dennis.jpg 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}}}'
      );
    },
    "GR/q": function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABuh4kPSM1ZmUBCD//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMEABESEyT/2gAIAQEAAQUCsMUTm0TaxrDGWwT2JbVFkHosLsFt5//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ASE//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/AWOz/8QAHhAAAQMFAQEAAAAAAAAAAAAAAQACERIhMUFhAxD/2gAIAQEABj8CEZcYQJc5zdz8DLUTCg6VPoL8UdVWwsBf/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFREDH/2gAIAQEAAT8hv3VA8jbAAHk4bbBdxtZ4ziE1gMOxBuMEmiWDu3h8n//aAAwDAQACAAMAAAAQWAd9/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxAhIgxf/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8QCMX/xAAgEAEAAgICAQUAAAAAAAAAAAABABEhUTFBYXGRocHR/9oACAEBAAE/EBWjqN5fceKKl4ezSS2vZnKqouG+Ve/SODbYN0bNfMFZYyCspz3+QSSGNOTMXPDGSm08QyqgDQJ//9k=","aspectRatio":1,"src":"/static/bc0eb5baa3f30399533d2efccffc13a7/ca45b/team-pardis.jpg","srcSet":"/static/bc0eb5baa3f30399533d2efccffc13a7/00e5e/team-pardis.jpg 200w,\\n/static/bc0eb5baa3f30399533d2efccffc13a7/1a903/team-pardis.jpg 400w,\\n/static/bc0eb5baa3f30399533d2efccffc13a7/ca45b/team-pardis.jpg 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}}}'
      );
    },
    "tel/": function(e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIEBQED/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAG95VIjJ1Z0cotQAf/EABwQAAIBBQEAAAAAAAAAAAAAAAECAAMEERIiM//aAAgBAQABBQJjyH6JOWcCV2xN5QACXfroBP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABURAQEAAAAAAAAAAAAAAAAAABAB/9oACAECAQE/ASH/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIhETFxMv/aAAgBAQAGPwJ9HB0zRHF2RxtHpCoXBH//xAAbEAADAAMBAQAAAAAAAAAAAAAAAREhMUFRkf/aAAgBAQABPyFKheEb02pMrZiRXhXELZtq2aJ78SYJlZFUJF4IIuUmf//aAAwDAQACAAMAAAAQZze//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPxDgi4zf/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQIBAT8QTkREcZ//xAAcEAEBAAMAAwEAAAAAAAAAAAABEQAhYTFB0VH/2gAIAQEAAT8QWaUENVshgALWgNOJhwAi6zaE7uXz9x3ZKER+dywKFK7YOFqqbXuKGATp1+ZOKNo+0Fz/2Q==","aspectRatio":1,"src":"/static/cfa609e536a4a8009c8f43f14bbf8c9e/a9a06/team-anna.jpg","srcSet":"/static/cfa609e536a4a8009c8f43f14bbf8c9e/00e5e/team-anna.jpg 200w,\\n/static/cfa609e536a4a8009c8f43f14bbf8c9e/1a903/team-anna.jpg 400w,\\n/static/cfa609e536a4a8009c8f43f14bbf8c9e/a9a06/team-anna.jpg 528w","sizes":"(max-width: 528px) 100vw, 528px"}}}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-about-js-f16a2fa77dac925acb50.js.map
