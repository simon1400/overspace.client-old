(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    205: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function() {
          return p;
        });
      var c = a(12),
        n = a(13),
        r = a(16),
        i = a(14),
        o = a(8),
        l = a(15),
        s = a(0),
        u = a.n(s),
        m = a(177),
        k = a(39),
        d = a(23),
        p = (function(e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(r.a)(this, Object(i.a)(t).call(this, e))).state = {
                projects: {}
              }),
              (a.getData = a.getData.bind(Object(o.a)(a))),
              a
            );
          }
          return (
            Object(l.a)(t, e),
            Object(n.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  d.a
                    .fetch(
                      '*[_type == "projects"] | order(short) {\n  _id,\n  title,\n  bigBlock,\n  "image": images[0].asset->url\n}[0...20]\n'
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
                  return (
                    console.log(e),
                    Object.keys(e).length
                      ? u.a.createElement(
                          k.a,
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
                                    className: "".concat(
                                      e.bigBlock
                                        ? " uk-width-1-2@s uk-width-1-1"
                                        : "uk-width-1-4@s uk-width-1-2",
                                      " "
                                    )
                                  },
                                  u.a.createElement(
                                    m.a,
                                    {
                                      to: "/projects/".concat(
                                        e.title.replace(/ /g, "_")
                                      )
                                    },
                                    u.a.createElement(
                                      "div",
                                      {
                                        className: "project-short-item uk-cover-container ".concat(
                                          e.bigBlock ? "project-short-big" : ""
                                        )
                                      },
                                      u.a.createElement("img", {
                                        src: ""
                                          .concat(e.image, "?w=")
                                          .concat(e.bigBlock ? "680" : "400"),
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
                            {
                              className: "uk-overlay-default uk-position-cover"
                            },
                            u.a.createElement(
                              "div",
                              { className: "uk-position-center" },
                              u.a.createElement("span", {
                                className: "uk-margin-small-right",
                                "uk-spinner": "ratio: 3"
                              })
                            )
                          )
                        )
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
    }
  }
]);
//# sourceMappingURL=homepage.829198bf.chunk.js.map
