(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    205: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function() {
          return k;
        });
      var n = a(12),
        i = a(13),
        l = a(16),
        s = a(14),
        r = a(8),
        c = a(15),
        o = a(0),
        u = a.n(o),
        m = a(39),
        d = a(182),
        h = a.n(d),
        v = a(23),
        k = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(l.a)(this, Object(s.a)(t).call(this, e))).state = {
                data: []
              }),
              (a.getData = a.getData.bind(Object(r.a)(a))),
              a
            );
          }
          return (
            Object(c.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  v.a
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
                                          "uk-position-center-left uk-position-small uk-hidden-hover",
                                        href: "#",
                                        "uk-slidenav-previous": "true",
                                        "uk-slideshow-item": "previous"
                                      },
                                      u.a.createElement(
                                        "svg",
                                        {
                                          style: {
                                            width: "30px",
                                            height: "30px"
                                          },
                                          "aria-hidden": "true",
                                          focusable: "false",
                                          "data-prefix": "fal",
                                          "data-icon": "chevron-left",
                                          className:
                                            "svg-inline--fa fa-chevron-left fa-w-8",
                                          role: "img",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 256 512"
                                        },
                                        u.a.createElement("path", {
                                          fill: "currentColor",
                                          d:
                                            "M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                                        })
                                      )
                                    ),
                                    u.a.createElement(
                                      "a",
                                      {
                                        className:
                                          "uk-position-center-right uk-position-small uk-hidden-hover",
                                        href: "#",
                                        "uk-slidenav-next": "true",
                                        "uk-slideshow-item": "next"
                                      },
                                      u.a.createElement(
                                        "svg",
                                        {
                                          style: {
                                            width: "30px",
                                            height: "30px"
                                          },
                                          "aria-hidden": "true",
                                          focusable: "false",
                                          "data-prefix": "fal",
                                          "data-icon": "chevron-right",
                                          className:
                                            "svg-inline--fa fa-chevron-right fa-w-8",
                                          role: "img",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 256 512"
                                        },
                                        u.a.createElement("path", {
                                          fill: "currentColor",
                                          d:
                                            "M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                                        })
                                      )
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
                                    u.a.createElement(h.a, {
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
//# sourceMappingURL=about.9ad091ef.chunk.js.map
