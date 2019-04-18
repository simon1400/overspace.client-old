(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    197: function(t, e, n) {
      t.exports = n(198).default;
    },
    198: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function(t) {
          if (t && "object" === r(t.clientConfig))
            return new h(null, {
              baseUrl: t.clientConfig.apiHost.replace(
                /^https:\/\/api\./,
                "https://cdn."
              ),
              projectId: t.clientConfig.projectId,
              dataset: t.clientConfig.dataset
            });
          return new h(null, t);
        });
      var a,
        i = (a = n(199)) && a.__esModule ? a : { default: a };
      function r(t) {
        return (r =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      function l(t, e) {
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(t, a.key, a);
        }
      }
      var c = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
        s = [
          "top",
          "bottom",
          "left",
          "right",
          "center",
          "focalpoint",
          "entropy"
        ],
        u = ["format"],
        h = (function() {
          function t(e, n) {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.options = e
                ? (function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                        a = Object.keys(n);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                          Object.getOwnPropertySymbols(n).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                              n,
                              t
                            ).enumerable;
                          })
                        )),
                        a.forEach(function(e) {
                          o(t, e, n[e]);
                        });
                    }
                    return t;
                  })({}, e.options || {}, n || {})
                : n || {});
          }
          var e, n, a;
          return (
            (e = t),
            (n = [
              {
                key: "withOptions",
                value: function(e) {
                  return new t(this, e);
                }
              },
              {
                key: "image",
                value: function(t) {
                  return this.withOptions({ source: t });
                }
              },
              {
                key: "dataset",
                value: function(t) {
                  return this.withOptions({ dataset: t });
                }
              },
              {
                key: "projectId",
                value: function(t) {
                  return this.withOptions({ projectId: t });
                }
              },
              {
                key: "bg",
                value: function(t) {
                  return this.withOptions({ bg: t });
                }
              },
              {
                key: "width",
                value: function(t) {
                  return this.withOptions({ width: t });
                }
              },
              {
                key: "height",
                value: function(t) {
                  return this.withOptions({ height: t });
                }
              },
              {
                key: "focalPoint",
                value: function(t, e) {
                  return this.withOptions({ focalPoint: { x: t, y: e } });
                }
              },
              {
                key: "maxWidth",
                value: function(t) {
                  return this.withOptions({ maxWidth: t });
                }
              },
              {
                key: "minWidth",
                value: function(t) {
                  return this.withOptions({ minWidth: t });
                }
              },
              {
                key: "maxHeight",
                value: function(t) {
                  return this.withOptions({ maxHeight: t });
                }
              },
              {
                key: "minHeight",
                value: function(t) {
                  return this.withOptions({ minHeight: t });
                }
              },
              {
                key: "size",
                value: function(t, e) {
                  return this.withOptions({ width: t, height: e });
                }
              },
              {
                key: "blur",
                value: function(t) {
                  return this.withOptions({ blur: t });
                }
              },
              {
                key: "sharpen",
                value: function(t) {
                  return this.withOptions({ sharpen: t });
                }
              },
              {
                key: "rect",
                value: function(t, e, n, a) {
                  return this.withOptions({
                    rect: { left: t, top: e, width: n, height: a }
                  });
                }
              },
              {
                key: "format",
                value: function(t) {
                  return this.withOptions({ format: t });
                }
              },
              {
                key: "invert",
                value: function(t) {
                  return this.withOptions({ invert: t });
                }
              },
              {
                key: "orientation",
                value: function(t) {
                  return this.withOptions({ orientation: t });
                }
              },
              {
                key: "quality",
                value: function(t) {
                  return this.withOptions({ quality: t });
                }
              },
              {
                key: "forceDownload",
                value: function(t) {
                  return this.withOptions({ download: t });
                }
              },
              {
                key: "flipHorizontal",
                value: function() {
                  return this.withOptions({ flipHorizontal: !0 });
                }
              },
              {
                key: "flipVertical",
                value: function() {
                  return this.withOptions({ flipVertical: !0 });
                }
              },
              {
                key: "ignoreImageParams",
                value: function() {
                  return this.withOptions({ ignoreImageParams: !0 });
                }
              },
              {
                key: "fit",
                value: function(t) {
                  if (-1 === c.indexOf(t))
                    throw new Error('Invalid fit mode "'.concat(t, '"'));
                  return this.withOptions({ fit: t });
                }
              },
              {
                key: "crop",
                value: function(t) {
                  if (-1 === s.indexOf(t))
                    throw new Error('Invalid crop mode "'.concat(t, '"'));
                  return this.withOptions({ crop: t });
                }
              },
              {
                key: "auto",
                value: function(t) {
                  if (-1 === u.indexOf(t))
                    throw new Error('Invalid auto mode "'.concat(t, '"'));
                  return this.withOptions({ auto: t });
                }
              },
              {
                key: "url",
                value: function() {
                  return (0, i.default)(this.options);
                }
              },
              {
                key: "toString",
                value: function() {
                  return this.url();
                }
              }
            ]) && l(e.prototype, n),
            a && l(e, a),
            t
          );
        })();
    },
    199: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function(t) {
          var e = o({}, t || {}),
            n = e.source;
          delete e.source;
          var r = (0, a.default)(n);
          if (!r) return null;
          var l = (0, i.default)(r.asset._ref || r.asset._id),
            s = {
              left: Math.round(r.crop.left * l.width),
              top: Math.round(r.crop.top * l.height)
            };
          (s.width = Math.round(l.width - r.crop.right * l.width - s.left)),
            (s.height = Math.round(
              l.height - r.crop.bottom * l.height - s.top
            ));
          var u = (r.hotspot.height * l.height) / 2,
            h = (r.hotspot.width * l.width) / 2,
            f = r.hotspot.x * l.width,
            d = r.hotspot.y * l.height,
            p = { left: f - h, top: d - u, right: f + h, bottom: d + u };
          (e.asset = l),
            e.rect ||
              e.focalPoint ||
              e.ignoreImageParams ||
              e.crop ||
              (e = o(
                {},
                e,
                (function(t, e) {
                  var n = { width: e.width, height: e.height };
                  if (!e.width || !e.height) return (n.rect = t.crop), n;
                  var a = t.crop,
                    i = t.hotspot,
                    r = e.width / e.height;
                  if (a.width / a.height > r) {
                    var o = a.height,
                      l = o * r,
                      c = a.top,
                      s = (i.right - i.left) / 2 + i.left,
                      u = s - l / 2;
                    return (
                      u < a.left
                        ? (u = a.left)
                        : u + l > a.left + a.width &&
                          (u = a.left + a.width - l),
                      (n.rect = {
                        left: Math.round(u),
                        top: Math.round(c),
                        width: Math.round(l),
                        height: Math.round(o)
                      }),
                      n
                    );
                  }
                  var h = a.width,
                    f = h / r,
                    d = a.left,
                    p = (i.bottom - i.top) / 2 + i.top - f / 2;
                  p < a.top
                    ? (p = a.top)
                    : p + f > a.top + a.height && (p = a.top + a.height - f);
                  return (
                    (n.rect = {
                      left: Math.max(0, Math.floor(d)),
                      top: Math.max(0, Math.floor(p)),
                      width: Math.round(h),
                      height: Math.round(f)
                    }),
                    n
                  );
                })({ crop: s, hotspot: p }, e)
              ));
          return (function(t) {
            var e = t.baseUrl || "https://cdn.sanity.io",
              n = ""
                .concat(t.asset.id, "-")
                .concat(t.asset.width, "x")
                .concat(t.asset.height, ".")
                .concat(t.asset.format),
              a = ""
                .concat(e, "/images/")
                .concat(t.projectId, "/")
                .concat(t.dataset, "/")
                .concat(n),
              i = [];
            if (t.rect) {
              var r =
                0 != t.rect.left ||
                0 != t.rect.top ||
                t.rect.height != t.asset.height ||
                t.rect.width != t.asset.width;
              r &&
                i.push(
                  "rect="
                    .concat(t.rect.left, ",")
                    .concat(t.rect.top, ",")
                    .concat(t.rect.width, ",")
                    .concat(t.rect.height)
                );
            }
            t.bg && i.push("bg=".concat(t.bg));
            t.focalPoint &&
              (i.push("fp-x=".concat(t.focalPoint.x)),
              i.push("fp-x=".concat(t.focalPoint.y)));
            (t.flipHorizontal || t.flipVertical) &&
              i.push(
                "flip="
                  .concat(t.flipHorizontal ? "h" : "")
                  .concat(t.flipVertical ? "v" : "")
              );
            if (
              (c.forEach(function(e) {
                var n,
                  a,
                  r = ((a = 2),
                  (function(t) {
                    if (Array.isArray(t)) return t;
                  })((n = e)) ||
                    (function(t, e) {
                      var n = [],
                        a = !0,
                        i = !1,
                        r = void 0;
                      try {
                        for (
                          var o, l = t[Symbol.iterator]();
                          !(a = (o = l.next()).done) &&
                          (n.push(o.value), !e || n.length !== e);
                          a = !0
                        );
                      } catch (c) {
                        (i = !0), (r = c);
                      } finally {
                        try {
                          a || null == l.return || l.return();
                        } finally {
                          if (i) throw r;
                        }
                      }
                      return n;
                    })(n, a) ||
                    (function() {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    })()),
                  o = r[0],
                  l = r[1];
                "undefined" !== typeof t[o]
                  ? i.push("".concat(l, "=").concat(encodeURIComponent(t[o])))
                  : "undefined" !== typeof t[l] &&
                    i.push("".concat(l, "=").concat(encodeURIComponent(t[l])));
              }),
              0 === i.length)
            )
              return a;
            return "".concat(a, "?").concat(i.join("&"));
          })(e);
        }),
        Object.defineProperty(e, "parseSource", {
          enumerable: !0,
          get: function() {
            return a.default;
          }
        });
      var a = r(n(200)),
        i = r(n(201));
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            a.forEach(function(e) {
              l(t, e, n[e]);
            });
        }
        return t;
      }
      function l(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = n),
          t
        );
      }
      var c = [
        ["width", "w"],
        ["height", "h"],
        ["format", "fm"],
        ["download", "dl"],
        ["blur", "blur"],
        ["sharpen", "sharp"],
        ["invert", "invert"],
        ["orientation", "or"],
        ["minHeight", "min-h"],
        ["maxHeight", "max-h"],
        ["minWidth", "min-w"],
        ["maxWidth", "max-w"],
        ["quality", "q"],
        ["fit", "fit"],
        ["crop", "crop"],
        ["auto", "auto"]
      ];
    },
    200: function(t, e, n) {
      "use strict";
      function a(t) {
        return (a =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t) {
        var e = t.split("/").slice(-1);
        return "image-".concat(e[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function(t) {
          if (!t) return null;
          var e;
          if (
            "string" === typeof t &&
            ((n = t), /^https?:\/\//.test("".concat(n)))
          )
            e = { asset: { _ref: i(t) } };
          else if ("string" === typeof t) e = { asset: { _ref: t } };
          else if ("string" === typeof t._ref) e = { asset: t };
          else if (t._id) e = { asset: { _ref: t._id } };
          else if (t.asset && t.asset.url && !t.asset._ref)
            e = { asset: { _ref: i(t.asset.url) } };
          else {
            if ("object" !== a(t.asset)) return null;
            e = t;
          }
          var n;
          t.crop && (e.crop = t.crop);
          t.hotspot && (e.hotspot = t.hotspot);
          return (function(t) {
            if (t.crop && t.hotspot) return t;
            var e = Object.assign({}, t);
            e.crop || (e.crop = { left: 0, top: 0, bottom: 0, right: 0 });
            e.hotspot || (e.hotspot = { x: 0.5, y: 0.5, height: 1, width: 1 });
            return e;
          })(e);
        });
    },
    201: function(t, e, n) {
      "use strict";
      function a(t, e) {
        return (
          (function(t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function(t, e) {
            var n = [],
              a = !0,
              i = !1,
              r = void 0;
            try {
              for (
                var o, l = t[Symbol.iterator]();
                !(a = (o = l.next()).done) &&
                (n.push(o.value), !e || n.length !== e);
                a = !0
              );
            } catch (c) {
              (i = !0), (r = c);
            } finally {
              try {
                a || null == l.return || l.return();
              } finally {
                if (i) throw r;
              }
            }
            return n;
          })(t, e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function(t) {
          var e = a(t.split("-"), 4),
            n = e[1],
            r = e[2],
            o = e[3];
          if (!n || !r || !o)
            throw new Error(
              "Malformed asset _ref '"
                .concat(t, "'. Expected an id like \"")
                .concat(i, '".')
            );
          var l = a(r.split("x"), 2),
            c = l[0],
            s = l[1],
            u = +c,
            h = +s;
          if (!isFinite(u) || !isFinite(h))
            throw new Error(
              "Malformed asset _ref '"
                .concat(t, "'. Expected an id like \"")
                .concat(i, '".')
            );
          return { id: n, width: u, height: h, format: o };
        });
      var i = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
    },
    204: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return g;
        });
      var a = n(11),
        i = n(12),
        r = n(15),
        o = n(13),
        l = n(21),
        c = n(14),
        s = n(1),
        u = n.n(s),
        h = n(39),
        f = n(180),
        d = n.n(f),
        p = n(38),
        m = n(197),
        v = n.n(m)()(p.a);
      var g = (function(t) {
        function e(t) {
          var n;
          return (
            Object(a.a)(this, e),
            ((n = Object(r.a)(this, Object(o.a)(e).call(this, t))).state = {
              data: []
            }),
            (n.getData = n.getData.bind(Object(l.a)(n))),
            n
          );
        }
        return (
          Object(c.a)(e, t),
          Object(i.a)(e, [
            {
              key: "componentDidMount",
              value: function() {
                p.a
                  .fetch(
                    '*[_type == "projects" && slug.current == $slug] {\n  _id,\n  title,\n  slug,\n  content,\n  images\n}[0...1]\n',
                    { slug: this.props.match.params.url }
                  )
                  .then(this.getData)
                  .catch(function(t) {
                    return console.log(t);
                  });
              }
            },
            {
              key: "getData",
              value: function(t) {
                this.setState({ data: t[0] });
              }
            },
            {
              key: "render",
              value: function() {
                var t = this.state.data;
                return Object.keys(t).length
                  ? u.a.createElement(
                      h.a,
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
                            className:
                              "uk-grid uk-child-width-1-2@m uk-child-width-1-1",
                            "uk-grid": "true",
                            "uk-scrollspy":
                              "target: > div; cls:uk-animation-fade; delay: 400"
                          },
                          u.a.createElement(
                            "div",
                            null,
                            u.a.createElement(
                              "div",
                              {
                                className:
                                  "uk-position-relative uk-visible-toggle uk-light product-slider",
                                tabIndex: "-1",
                                "uk-slideshow": "ratio: 1:1"
                              },
                              u.a.createElement(
                                "ul",
                                { className: "uk-slideshow-items" },
                                t.images.map(function(t, e) {
                                  return u.a.createElement(
                                    "li",
                                    { key: e },
                                    u.a.createElement("img", {
                                      src: ((n = t), v.image(n))
                                        .width(700)
                                        .height(700)
                                        .url(),
                                      alt: "",
                                      "uk-cover": "true"
                                    })
                                  );
                                  var n;
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
                                    style: { width: "30px", height: "30px" },
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fal",
                                    "data-icon": "chevron-left",
                                    class:
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
                                    style: { width: "30px", height: "30px" },
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fal",
                                    "data-icon": "chevron-right",
                                    class:
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
                            )
                          ),
                          u.a.createElement(
                            "div",
                            null,
                            u.a.createElement(
                              "div",
                              { className: "product-content content" },
                              u.a.createElement(
                                "h2",
                                { className: "head" },
                                t.title
                              ),
                              u.a.createElement(d.a, { blocks: t.content })
                            )
                          )
                        )
                      )
                    )
                  : u.a.createElement(
                      "div",
                      { class: "preloader uk-inline" },
                      u.a.createElement(
                        "div",
                        { class: "uk-overlay-default uk-position-cover" },
                        u.a.createElement(
                          "div",
                          { class: "uk-position-center" },
                          u.a.createElement("span", {
                            class: "uk-margin-small-right",
                            "uk-spinner": "ratio: 3"
                          })
                        )
                      )
                    );
              }
            }
          ]),
          e
        );
      })(s.Component);
    },
    205: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return m;
        });
      var a = n(11),
        i = n(12),
        r = n(15),
        o = n(13),
        l = n(21),
        c = n(14),
        s = n(1),
        u = n.n(s),
        h = n(39),
        f = n(180),
        d = n.n(f),
        p = n(38),
        m = (function(t) {
          function e(t) {
            var n;
            return (
              Object(a.a)(this, e),
              ((n = Object(r.a)(this, Object(o.a)(e).call(this, t))).state = {
                data: []
              }),
              (n.getData = n.getData.bind(Object(l.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(e, t),
            Object(i.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  p.a
                    .fetch(
                      '*[_type == "contacts"] {\n  _id,\n  title,\n  content,\n  "images": images[].asset->url\n}[0...3]\n'
                    )
                    .then(this.getData)
                    .catch(function(t) {
                      return console.log(t);
                    });
                }
              },
              {
                key: "getData",
                value: function(t) {
                  this.setState({ data: t });
                }
              },
              {
                key: "render",
                value: function() {
                  var t = this.state.data;
                  return (
                    console.log(t),
                    Object.keys(t).length
                      ? u.a.createElement(
                          h.a,
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
                                className:
                                  "uk-grid uk-child-width-1-2@s uk-child-width-1-1",
                                "uk-grid": "true",
                                "uk-scrollspy":
                                  "target: > div; cls:uk-animation-slide-bottom-small; delay: 400"
                              },
                              t.map(function(t, e) {
                                return u.a.createElement(
                                  "div",
                                  { key: e },
                                  u.a.createElement(
                                    "div",
                                    { className: "contact-item" },
                                    u.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "uk-position-relative uk-visible-toggle uk-light",
                                        tabIndex: "-1",
                                        "uk-slideshow": "ratio: 7:4"
                                      },
                                      u.a.createElement(
                                        "ul",
                                        { className: "uk-slideshow-items" },
                                        t.images.map(function(t, e) {
                                          return u.a.createElement(
                                            "li",
                                            { key: e },
                                            u.a.createElement("img", {
                                              src: t,
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
                                        t.title
                                      ),
                                      u.a.createElement(d.a, {
                                        blocks: t.content
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
            e
          );
        })(s.Component);
    },
    206: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return m;
        });
      var a = n(11),
        i = n(12),
        r = n(15),
        o = n(13),
        l = n(21),
        c = n(14),
        s = n(1),
        u = n.n(s),
        h = n(39),
        f = n(180),
        d = n.n(f),
        p = n(38),
        m = (function(t) {
          function e(t) {
            var n;
            return (
              Object(a.a)(this, e),
              ((n = Object(r.a)(this, Object(o.a)(e).call(this, t))).state = {
                data: []
              }),
              (n.getData = n.getData.bind(Object(l.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(e, t),
            Object(i.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  p.a
                    .fetch(
                      '*[_type == "news"] {\n  _id,\n  title,\n  content,\n  "images": images[].asset->url\n}[0...3]\n'
                    )
                    .then(this.getData)
                    .catch(function(t) {
                      return console.log(t);
                    });
                }
              },
              {
                key: "getData",
                value: function(t) {
                  this.setState({ data: t });
                }
              },
              {
                key: "render",
                value: function() {
                  var t = this.state.data;
                  return Object.keys(t).length
                    ? u.a.createElement(
                        h.a,
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
                            t.map(function(t, e) {
                              return u.a.createElement(
                                "div",
                                { key: e },
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
                                      t.images.map(function(t, e) {
                                        return u.a.createElement(
                                          "li",
                                          { key: e },
                                          u.a.createElement("img", {
                                            src: t,
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
                                      t.title
                                    ),
                                    u.a.createElement(d.a, {
                                      blocks: t.content
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
            e
          );
        })(s.Component);
    }
  }
]);
//# sourceMappingURL=profile.c25dacf3.chunk.js.map
