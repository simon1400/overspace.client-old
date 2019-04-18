(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    202: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function() {
          return p;
        });
      var n = a(11),
        c = a(12),
        r = a(15),
        i = a(13),
        s = a(21),
        l = a(14),
        o = a(1),
        u = a.n(o),
        m = a(177),
        d = a(39),
        k = a(38),
        p = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(r.a)(this, Object(i.a)(t).call(this, e))).state = {
                projects: {}
              }),
              (a.getData = a.getData.bind(Object(s.a)(a))),
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
                      '*[_type == "projects"] {\n  _id,\n  title,\n  slug,\n  "image": images[0].asset->url\n}[0...20]\n'
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
//# sourceMappingURL=homepage.c084fdf2.chunk.js.map
