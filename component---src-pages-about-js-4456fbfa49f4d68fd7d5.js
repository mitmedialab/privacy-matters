(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "0+i1": function(A, e, a) {
      "use strict";
      var t = a("q1tI"),
        n = a.n(t),
        c = a("1Yj4");
      a("k9Ez");
      e.a = function(A) {
        var e = A.children;
        return n.a.createElement(
          "div",
          { className: "card-section" },
          n.a.createElement(c.a, null, n.a.createElement("main", null, e))
        );
      };
    },
    "3XHS": function(A, e, a) {
      "use strict";
      a.r(e);
      a("q4sD");
      var t = a("q1tI"),
        n = a.n(t),
        c = a("Bl7J"),
        r = a("ok1R"),
        i = a("rhny"),
        l = a("k1TG"),
        s = a("8o2o"),
        o = a("17x9"),
        m = a.n(o),
        E = a("TSYQ"),
        d = a.n(E),
        g = a("33Jr"),
        p = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        h = function(A) {
          var e = A.className,
            a = A.cssModule,
            t = A.tag,
            c = Object(s.a)(A, ["className", "cssModule", "tag"]),
            r = Object(g.j)(d()(e, "card-deck"), a);
          return n.a.createElement(t, Object(l.a)({}, c, { className: r }));
        };
      (h.propTypes = p), (h.defaultProps = { tag: "div" });
      var u = h,
        f = a("tel/"),
        Q = a("9eSz"),
        j = a.n(Q),
        B = function() {
          var A = f.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(j.a, {
              fluid: A.placeholderImage.childImageSharp.fluid
            })
          );
        },
        b = a("G7hR"),
        N = function() {
          var A = b.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(j.a, {
              fluid: A.placeholderImage.childImageSharp.fluid
            })
          );
        },
        w = a("4Xwf"),
        v = function() {
          var A = w.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(j.a, {
              fluid: A.placeholderImage.childImageSharp.fluid
            })
          );
        },
        x = a("GR/q"),
        C = function() {
          var A = x.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(j.a, {
              fluid: A.placeholderImage.childImageSharp.fluid
            })
          );
        },
        D = a("pkDn"),
        Y = function() {
          var A = D.data;
          return n.a.createElement(
            "div",
            { className: "jumbotron-image" },
            n.a.createElement(j.a, {
              fluid: A.placeholderImage.childImageSharp.fluid
            })
          );
        },
        I = (a("f3/d"), a("BLzl")),
        R = {
          tag: g.n,
          className: m.a.string,
          cssModule: m.a.object,
          innerRef: m.a.oneOfType([m.a.object, m.a.string, m.a.func])
        },
        M = function(A) {
          var e = A.className,
            a = A.cssModule,
            t = A.innerRef,
            c = A.tag,
            r = Object(s.a)(A, ["className", "cssModule", "innerRef", "tag"]),
            i = Object(g.j)(d()(e, "card-body"), a);
          return n.a.createElement(
            c,
            Object(l.a)({}, r, { className: i, ref: t })
          );
        };
      (M.propTypes = R), (M.defaultProps = { tag: "div" });
      var y = M,
        S = a("ChEw"),
        T = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        G = function(A) {
          var e = A.className,
            a = A.cssModule,
            t = A.tag,
            c = Object(s.a)(A, ["className", "cssModule", "tag"]),
            r = Object(g.j)(d()(e, "card-subtitle"), a);
          return n.a.createElement(t, Object(l.a)({}, c, { className: r }));
        };
      (G.propTypes = T), (G.defaultProps = { tag: "div" });
      var P = G,
        F = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        O = function(A) {
          var e = A.className,
            a = A.cssModule,
            t = A.tag,
            c = Object(s.a)(A, ["className", "cssModule", "tag"]),
            r = Object(g.j)(d()(e, "card-text"), a);
          return n.a.createElement(t, Object(l.a)({}, c, { className: r }));
        };
      (O.propTypes = F), (O.defaultProps = { tag: "p" });
      var k = O,
        U = a("DCcX"),
        z = a("vkoW"),
        J = a("CaDr"),
        H = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        W = function(A) {
          var e = A.className,
            a = A.cssModule,
            t = A.tag,
            c = Object(s.a)(A, ["className", "cssModule", "tag"]),
            r = Object(g.j)(d()(e, "modal-footer"), a);
          return n.a.createElement(t, Object(l.a)({}, c, { className: r }));
        };
      (W.propTypes = H), (W.defaultProps = { tag: "div" });
      var X = W,
        L = { tag: g.n, className: m.a.string, cssModule: m.a.object },
        Z = function(A) {
          var e = A.className,
            a = A.cssModule,
            t = A.tag,
            c = Object(s.a)(A, ["className", "cssModule", "tag"]),
            r = Object(g.j)(d()(e, "card-footer"), a);
          return n.a.createElement(t, Object(l.a)({}, c, { className: r }));
        };
      (Z.propTypes = L), (Z.defaultProps = { tag: "div" });
      var V = Z,
        K = function(A) {
          var e = A.image,
            a = A.name,
            c = A.role,
            l = A.affiliation,
            s = A.website,
            o = A.children,
            m = Object(t.useState)(!1),
            E = m[0],
            d = m[1],
            g = function() {
              return d(!E);
            };
          return n.a.createElement(
            I.a,
            {
              onClick: g,
              className: "team-profile",
              tabindex: "0",
              role: "button"
            },
            e,
            n.a.createElement(
              y,
              { className: "text-center pb-5" },
              n.a.createElement(S.a, { className: "py-3" }, a),
              n.a.createElement(P, null, c),
              n.a.createElement(k, null, n.a.createElement("i", null, l)),
              n.a.createElement(
                U.a,
                {
                  className: "profile-modal",
                  isOpen: E,
                  toggle: g,
                  centered: !0,
                  size: "lg"
                },
                n.a.createElement(z.a, { toggle: g }),
                n.a.createElement(
                  J.a,
                  null,
                  n.a.createElement(
                    r.a,
                    null,
                    n.a.createElement(
                      i.a,
                      { md: 4, className: "text-center" },
                      n.a.createElement("div", null, e),
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
                          n.a.createElement("i", null, l)
                        )
                      )
                    ),
                    n.a.createElement(
                      i.a,
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
                  X,
                  null,
                  n.a.createElement("div", { className: "animation" })
                )
              )
            ),
            n.a.createElement(V, null)
          );
        },
        q = function(A) {
          var e = A.image,
            a = A.name,
            t = A.role,
            c = A.affiliation;
          return n.a.createElement(
            I.a,
            { className: "advisor-profile" },
            e,
            n.a.createElement(
              y,
              { className: "text-center pb-5" },
              n.a.createElement(S.a, { className: "py-3" }, a),
              n.a.createElement(P, null, t),
              n.a.createElement(k, null, n.a.createElement("i", null, c))
            )
          );
        },
        _ =
          (a("4GFT"),
          function(A) {
            return n.a.createElement(
              "div",
              { id: "about", className: "about" },
              n.a.createElement(
                r.a,
                null,
                n.a.createElement(
                  i.a,
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
                r.a,
                { className: "justify-content-md-center" },
                n.a.createElement(
                  i.a,
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
                r.a,
                { className: "my-3" },
                n.a.createElement(
                  i.a,
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
                  i.a,
                  { xs: 12, className: "py-4" },
                  n.a.createElement(
                    u,
                    null,
                    n.a.createElement(
                      K,
                      {
                        image: n.a.createElement(B, null),
                        name: "Anna Chung",
                        role: "Designer",
                        affiliation: "MIT Center for Civic Media",
                        website: "https://www.annawchung.com/"
                      },
                      "Anna is a UX designer and researcher at MIT’s Center for Civic Media. She has designed tools and visualizations for several social impact organizations, including the Design Studio for Social Intervention, Anti-Eviction Mapping Project, and 1001 Stories. She is passionate about using technology and design for public good."
                    ),
                    n.a.createElement(
                      K,
                      {
                        image: n.a.createElement(N, null),
                        name: "Dennis Jen",
                        role: "Lead Developer",
                        affiliation: "MIT Center for Civic Media",
                        website: "http://www.dennisjen.com"
                      },
                      "Dennis is a software developer at MIT's Center for Civic Media. He has an extensive background in building web application and visualization tools across a variety of industries, including genetics, oncology, neuroscience, and education technology. At the Center for Civic Media, he applies this background to developing technology for social good. When not hunched over a keyboard, he's often hunched over a pottery wheel or piano."
                    ),
                    n.a.createElement(
                      K,
                      {
                        image: n.a.createElement(C, null),
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
                    )
                  )
                )
              ),
              n.a.createElement(
                r.a,
                { className: "mb-5" },
                n.a.createElement(
                  i.a,
                  { sm: 8, xs: 12 },
                  n.a.createElement(
                    u,
                    null,
                    n.a.createElement(
                      K,
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
                      K,
                      {
                        image: n.a.createElement(Y, null),
                        name: "Jasmine McNealy",
                        role: "Associate Professor",
                        affiliation: "University of Florida",
                        website: "http://jasminemcnealy.com"
                      },
                      "Jasmine is an Associate Professor of Telecommunication at the University of Florida, where she teaches courses on regulation. She researches media, technology, and law with an emphasis on privacy, surveillance and data governance. She is also the Associate Director of the Marion B. Brechner First Amendment Project at UF, and a Faculty Associate at Harvard University’s Berkman Klein Center for Internet & Society."
                    )
                  )
                )
              ),
              n.a.createElement(
                r.a,
                null,
                n.a.createElement(
                  i.a,
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
                r.a,
                { className: "mb-5" },
                n.a.createElement(
                  i.a,
                  { xs: 12 },
                  n.a.createElement(
                    u,
                    null,
                    n.a.createElement(q, {
                      image: n.a.createElement(v, null),
                      name: "Ethan Zuckerman",
                      role: "Director",
                      affiliation: "MIT Media Lab / Center for Civic Media"
                    }),
                    n.a.createElement(q, {
                      image: n.a.createElement(v, null),
                      name: "Emily Peterson Cassin",
                      role: "TBD",
                      affiliation: "Public Citizen"
                    }),
                    n.a.createElement(q, {
                      image: n.a.createElement(v, null),
                      name: "Najarian Peters",
                      role: "TBD",
                      affiliation: "Seton Hall"
                    })
                  )
                )
              ),
              n.a.createElement(
                r.a,
                { className: "mb-5" },
                n.a.createElement(
                  i.a,
                  { sm: 4, xs: 12 },
                  n.a.createElement(
                    u,
                    null,
                    n.a.createElement(q, {
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
        $ = a("2qpI"),
        AA = a("Wbzz"),
        eA = a("0+i1"),
        aA =
          (a("91YG"),
          function(A) {
            return n.a.createElement(
              eA.a,
              null,
              n.a.createElement(
                r.a,
                { className: "my-5 contact-us" },
                n.a.createElement(
                  i.a,
                  { md: 8 },
                  n.a.createElement(
                    I.a,
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
                      AA.Link,
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
        tA = a("eKp/");
      e.default = function() {
        return Object(tA.b)(tA.a)
          ? n.a.createElement(
              "div",
              { className: "privacy-page" },
              n.a.createElement($.a, { showHome: !0 }),
              n.a.createElement(c.a, null, n.a.createElement(_, null)),
              n.a.createElement(aA, null),
              n.a.createElement(c.a, { footer: !0 })
            )
          : n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement("h1", null, "TBD")
            );
      };
    },
    "4Xwf": function(A) {
      A.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIEBgMF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAfSr0eUugRWZuIaIH//EAB0QAAIBBAMAAAAAAAAAAAAAAAEDAgAEEjMREyL/2gAIAQEAAQUCZLBaSYzq8acms6ng8xutzx6hr//EABURAQEAAAAAAAAAAAAAAAAAACBB/9oACAEDAQE/AYP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAhEAACAQEJAQAAAAAAAAAAAAAAAQISEBETMUFCUWFxgf/aAAgBAQAGPwKTKXJu9a2YayFRtQnyT+En2R8P/8QAHBAAAwEAAgMAAAAAAAAAAAAAAAERITFhQVGh/9oACAEBAAE/IZrylgirNNXUQ8fSm+xzPJS065U070KUusfIP//aAAwDAQACAAMAAAAQF8hA/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARQf/aAAgBAwEBPxASli//xAAWEQEBAQAAAAAAAAAAAAAAAAABESD/2gAIAQIBAT8QbTH/xAAgEAEBAAICAAcAAAAAAAAAAAABEQAhMVFBYZGhweHw/9oACAEBAAE/EGmx+3fB7uIUXVQxZ5I4i4uw4J2n4w1i0NxpU9MMokY6pc2LkQ9aMs6Ap4cfWOfn0Z//2Q==","aspectRatio":1,"src":"/static/e62b0e975a23e535728b1e0a6374594c/ca45b/team-steph.jpg","srcSet":"/static/e62b0e975a23e535728b1e0a6374594c/00e5e/team-steph.jpg 200w,\\n/static/e62b0e975a23e535728b1e0a6374594c/1a903/team-steph.jpg 400w,\\n/static/e62b0e975a23e535728b1e0a6374594c/ca45b/team-steph.jpg 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}}}'
      );
    },
    G7hR: function(A) {
      A.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQD/2gAMAwEAAhADEAAAAdeUxy2NEIuxlyAX/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAECAyEEEf/aAAgBAQABBQLR3JnVOyvjM3GddHz0aQnCbP/EABYRAQEBAAAAAAAAAAAAAAAAABEBIP/aAAgBAwEBPwEhj//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8BrLv/xAAfEAACAgIBBQAAAAAAAAAAAAAAAQIRMUESIWFyguH/2gAIAQEABj8CtRddzjKn4mBxdD1rB8PUl00ZaP/EABwQAQADAQEAAwAAAAAAAAAAAAEAESExQWGR4f/aAAgBAQABPyFQ5Q8bHT52MIn6lJPHItulB8JY4fUaU8m6uLR5hDKGf//aAAwDAQACAAMAAAAQqBDC/8QAGREBAAIDAAAAAAAAAAAAAAAAAAERIVFh/9oACAEDAQE/EJzFcbQ//8QAGREAAwADAAAAAAAAAAAAAAAAAAERMUFR/9oACAECAQE/EFaF9NoeT//EAB0QAQEAAgIDAQAAAAAAAAAAAAERACExUUFhkeH/2gAIAQEAAT8QCQSRIKQr1vFsXSguxr7MgbClRJMKEO60aYyC0jQjVTHiCO6CfcS1kCeEvD3hUGgpyMuQukURx+5//9k=","aspectRatio":1,"src":"/static/9a88a26bd36d5e513087c3f8e932dd73/ca45b/team-dennis.jpg","srcSet":"/static/9a88a26bd36d5e513087c3f8e932dd73/00e5e/team-dennis.jpg 200w,\\n/static/9a88a26bd36d5e513087c3f8e932dd73/1a903/team-dennis.jpg 400w,\\n/static/9a88a26bd36d5e513087c3f8e932dd73/ca45b/team-dennis.jpg 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}}}'
      );
    },
    "GR/q": function(A) {
      A.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABuh4kPSM1ZmUBCD//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMEABESEyT/2gAIAQEAAQUCsMUTm0TaxrDGWwT2JbVFkHosLsFt5//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ASE//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/AWOz/8QAHhAAAQMFAQEAAAAAAAAAAAAAAQACERIhMUFhAxD/2gAIAQEABj8CEZcYQJc5zdz8DLUTCg6VPoL8UdVWwsBf/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFREDH/2gAIAQEAAT8hv3VA8jbAAHk4bbBdxtZ4ziE1gMOxBuMEmiWDu3h8n//aAAwDAQACAAMAAAAQWAd9/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxAhIgxf/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8QCMX/xAAgEAEAAgICAQUAAAAAAAAAAAABABEhUTFBYXGRocHR/9oACAEBAAE/EBWjqN5fceKKl4ezSS2vZnKqouG+Ve/SODbYN0bNfMFZYyCspz3+QSSGNOTMXPDGSm08QyqgDQJ//9k=","aspectRatio":1,"src":"/static/bc0eb5baa3f30399533d2efccffc13a7/ca45b/team-pardis.jpg","srcSet":"/static/bc0eb5baa3f30399533d2efccffc13a7/00e5e/team-pardis.jpg 200w,\\n/static/bc0eb5baa3f30399533d2efccffc13a7/1a903/team-pardis.jpg 400w,\\n/static/bc0eb5baa3f30399533d2efccffc13a7/ca45b/team-pardis.jpg 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}}}'
      );
    },
    pkDn: function(A) {
      A.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAY9y6CpKSOX0BWsI/wD/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMEEiERMv/aAAgBAQABBQKtmQ72RTeynKbyjdx6nan3VTxmIP8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAARBB/9oACAEDAQE/AQmT/8QAFxEAAwEAAAAAAAAAAAAAAAAAABARIf/aAAgBAgEBPwGlJq//xAAaEAEAAwEBAQAAAAAAAAAAAAABAAIREhAi/9oACAEBAAY/AgJ10WmISk+DWLk23v8A/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFBYXH/2gAIAQEAAT8ho4bLzG4CeHI5CT2F3UWxJ5RLo0TLLNb+Re01NUoPJXhn/9oADAMBAAIAAwAAABD4DwP/xAAWEQEBAQAAAAAAAAAAAAAAAAABABD/2gAIAQMBAT8QBFghTH//xAAXEQEBAQEAAAAAAAAAAAAAAAABABAh/9oACAECAQE/EFCEqAjmf//EAB0QAQEBAQACAwEAAAAAAAAAAAERACExQVGBscH/2gAIAQEAAT8QAuCK9rJuA9kZemHaj8y4yDiL7dSDxcIK38MQDg4ETjmRHlQPg7wz83sAl1Swn93/2Q==","aspectRatio":1,"src":"/static/528f6706300f7eec4e108268ea7cbfdd/58d6d/team-jasmine.jpg","srcSet":"/static/528f6706300f7eec4e108268ea7cbfdd/00e5e/team-jasmine.jpg 200w,\\n/static/528f6706300f7eec4e108268ea7cbfdd/58d6d/team-jasmine.jpg 300w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}'
      );
    },
    "tel/": function(A) {
      A.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIEBQED/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAG95VIjJ1Z0cotQAf/EABwQAAIBBQEAAAAAAAAAAAAAAAECAAMEERIiM//aAAgBAQABBQJjyH6JOWcCV2xN5QACXfroBP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABURAQEAAAAAAAAAAAAAAAAAABAB/9oACAECAQE/ASH/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIhETFxMv/aAAgBAQAGPwJ9HB0zRHF2RxtHpCoXBH//xAAbEAADAAMBAQAAAAAAAAAAAAAAAREhMUFRkf/aAAgBAQABPyFKheEb02pMrZiRXhXELZtq2aJ78SYJlZFUJF4IIuUmf//aAAwDAQACAAMAAAAQZze//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPxDgi4zf/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQIBAT8QTkREcZ//xAAcEAEBAAMAAwEAAAAAAAAAAAABEQAhYTFB0VH/2gAIAQEAAT8QWaUENVshgALWgNOJhwAi6zaE7uXz9x3ZKER+dywKFK7YOFqqbXuKGATp1+ZOKNo+0Fz/2Q==","aspectRatio":1,"src":"/static/cfa609e536a4a8009c8f43f14bbf8c9e/a9a06/team-anna.jpg","srcSet":"/static/cfa609e536a4a8009c8f43f14bbf8c9e/00e5e/team-anna.jpg 200w,\\n/static/cfa609e536a4a8009c8f43f14bbf8c9e/1a903/team-anna.jpg 400w,\\n/static/cfa609e536a4a8009c8f43f14bbf8c9e/a9a06/team-anna.jpg 528w","sizes":"(max-width: 528px) 100vw, 528px"}}}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-about-js-4456fbfa49f4d68fd7d5.js.map
