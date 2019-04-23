(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    181: function(e, t, a) {
      e.exports = a.p + "static/media/right.2c668718.svg";
    },
    182: function(e, t, a) {
      e.exports = a.p + "static/media/left.7504f3d2.svg";
    },
    206: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function() {
          return E;
        });
      var n = a(12),
        i = a(13),
        s = a(16),
        l = a(14),
        c = a(8),
        r = a(15),
        o = a(0),
        u = a.n(o),
        m = a(39),
        d = a(183),
        k = a.n(d),
        h = a(23),
        p = a(181),
        v = a.n(p),
        g = a(182),
        f = a.n(g),
        E = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(s.a)(this, Object(l.a)(t).call(this, e))).state = {
                data: []
              }),
              (a.getData = a.getData.bind(Object(c.a)(a))),
              a
            );
          }
          return (
            Object(r.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  h.a
                    .fetch(
                      '*[_type == "about"] | order(short) {\n  _id,\n  title,\n  content,\n  "images": images[].asset->url\n}[0...3]\n'
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
                  this.setState({ data: e });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.data;
                  return Object.keys(e).length
                    ? u.a.createElement(
                        m.a,
                        {
                          id: "about",
                          title: "About",
                          description: "This is about really cool stuff."
                        },
                        u.a.createElement(
                          "div",
                          { className: "uk-container" },
                          u.a.createElement(
                            "div",
                            {
                              className: "uk-grid uk-child-width-1-1",
                              "uk-grid": "true",
                              "uk-scrollspy":
                                "target: > div; cls:uk-animation-slide-bottom-small; delay: 400"
                            },
                            e.map(function(e, t) {
                              return u.a.createElement(
                                "div",
                                { key: t },
                                u.a.createElement(
                                  "div",
                                  { className: "news-item" },
                                  u.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "uk-position-relative uk-visible-toggle uk-light",
                                      tabIndex: "-1",
                                      "uk-slideshow": "ratio: 7:3"
                                    },
                                    u.a.createElement(
                                      "ul",
                                      { className: "uk-slideshow-items" },
                                      e.images.map(function(e, t) {
                                        return u.a.createElement(
                                          "li",
                                          { key: t },
                                          u.a.createElement("img", {
                                            src: e,
                                            alt: "",
                                            "uk-cover": "true"
                                          })
                                        );
                                      })
                                    ),
                                    u.a.createElement(
                                      "a",
                                      {
                                        className:
                                          "uk-position-center-left uk-position-small",
                                        href: "#",
                                        "uk-slidenav-previous": "true",
                                        "uk-slideshow-item": "previous"
                                      },
                                      u.a.createElement("img", {
                                        src: f.a,
                                        alt: "Left"
                                      })
                                    ),
                                    u.a.createElement(
                                      "a",
                                      {
                                        className:
                                          "uk-position-center-right uk-position-small",
                                        href: "#",
                                        "uk-slidenav-next": "true",
                                        "uk-slideshow-item": "next"
                                      },
                                      u.a.createElement("img", {
                                        src: v.a,
                                        alt: "Right"
                                      })
                                    )
                                  ),
                                  u.a.createElement(
                                    "div",
                                    { className: "content" },
                                    u.a.createElement(
                                      "h2",
                                      { className: "head" },
                                      e.title
                                    ),
                                    u.a.createElement(k.a, {
                                      blocks: e.content
                                    })
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
//# sourceMappingURL=about.c671a25e.chunk.js.map
