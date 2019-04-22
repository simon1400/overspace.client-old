(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    204: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function() {
          return p;
        });
      var n = a(12),
        c = a(13),
        r = a(16),
        s = a(14),
        i = a(8),
        l = a(15),
        o = a(0),
        u = a.n(o),
        m = a(178),
        d = a(39),
        k = a(23),
        p = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(r.a)(this, Object(s.a)(t).call(this, e))).state = {
                projects: {}
              }),
              (a.getData = a.getData.bind(Object(i.a)(a))),
              a
            );
          }
          return (
            Object(l.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  k.a
                    .fetch(
                      '*[_type == "projects"] | order(short) {\n  _id,\n  title,\n  slug,\n  "image": images[0].asset->url\n}[0...20]\n'
                    )
                    .then(this.getData)
                    .catch(function(e) {
                      return console.log(e);
                    });
                }
              },
              {
                key: "getData",
                value: function(e) {
                  this.setState({ projects: e });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.projects;
                  return Object.keys(e).length
                    ? u.a.createElement(
                        d.a,
                        { id: "projects" },
                        u.a.createElement(
                          "div",
                          { className: "uk-container" },
                          u.a.createElement(
                            "div",
                            {
                              className: "uk-grid",
                              "uk-grid": "true",
                              "uk-scrollspy":
                                "target: > div; cls:uk-animation-slide-bottom-small; delay: 400"
                            },
                            e.map(function(e, t) {
                              return u.a.createElement(
                                "div",
                                {
                                  key: t,
                                  className: "uk-width-1-4@s uk-width-1-2"
                                },
                                u.a.createElement(
                                  m.a,
                                  { to: "/projects/".concat(e.slug.current) },
                                  u.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "project-short-item uk-cover-container"
                                    },
                                    u.a.createElement("img", {
                                      src: "".concat(e.image, "?w=400&h=400"),
                                      alt: e.title,
                                      "uk-cover": "true"
                                    }),
                                    u.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "uk-position-cover uk-overlay uk-flex uk-flex-center uk-flex-middle uk-text-center"
                                      },
                                      u.a.createElement(
                                        "h2",
                                        { className: "head" },
                                        e.title
                                      )
                                    )
                                  )
                                )
                              );
                            })
                          )
                        )
                      )
                    : u.a.createElement(
                        "div",
                        { className: "preloader uk-inline" },
                        u.a.createElement(
                          "div",
                          { className: "uk-overlay-default uk-position-cover" },
                          u.a.createElement(
                            "div",
                            { className: "uk-position-center" },
                            u.a.createElement("span", {
                              className: "uk-margin-small-right",
                              "uk-spinner": "ratio: 3"
                            })
                          )
                        )
                      );
                }
              }
            ]),
            t
          );
        })(o.Component);
    }
  }
]);
//# sourceMappingURL=homepage.453aea3f.chunk.js.map
