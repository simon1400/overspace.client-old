(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    181: function(t, e, n) {
      t.exports = n.p + "static/media/right.2c668718.svg";
    },
    182: function(t, e, n) {
      t.exports = n.p + "static/media/left.7504f3d2.svg";
    },
    200: function(t, e, n) {
      t.exports = n(201).default;
    },
    201: function(t, e, n) {
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
        i = (a = n(202)) && a.__esModule ? a : { default: a };
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
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(t, a.key, a);
        }
      }
      var l = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
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
                  if (-1 === l.indexOf(t))
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
            ]) && c(e.prototype, n),
            a && c(e, a),
            t
          );
        })();
    },
    202: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function(t) {
          var e = o({}, t || {}),
            n = e.source;
          delete e.source;
          var r = (0, a.default)(n);
          if (!r) return null;
          var c = (0, i.default)(r.asset._ref || r.asset._id),
            s = {
              left: Math.round(r.crop.left * c.width),
              top: Math.round(r.crop.top * c.height)
            };
          (s.width = Math.round(c.width - r.crop.right * c.width - s.left)),
            (s.height = Math.round(
              c.height - r.crop.bottom * c.height - s.top
            ));
          var u = (r.hotspot.height * c.height) / 2,
            h = (r.hotspot.width * c.width) / 2,
            f = r.hotspot.x * c.width,
            d = r.hotspot.y * c.height,
            p = { left: f - h, top: d - u, right: f + h, bottom: d + u };
          (e.asset = c),
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
                      c = o * r,
                      l = a.top,
                      s = (i.right - i.left) / 2 + i.left,
                      u = s - c / 2;
                    return (
                      u < a.left
                        ? (u = a.left)
                        : u + c > a.left + a.width &&
                          (u = a.left + a.width - c),
                      (n.rect = {
                        left: Math.round(u),
                        top: Math.round(l),
                        width: Math.round(c),
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
              (l.forEach(function(e) {
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
                          var o, c = t[Symbol.iterator]();
                          !(a = (o = c.next()).done) &&
                          (n.push(o.value), !e || n.length !== e);
                          a = !0
                        );
                      } catch (l) {
                        (i = !0), (r = l);
                      } finally {
                        try {
                          a || null == c.return || c.return();
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
                  c = r[1];
                "undefined" !== typeof t[o]
                  ? i.push("".concat(c, "=").concat(encodeURIComponent(t[o])))
                  : "undefined" !== typeof t[c] &&
                    i.push("".concat(c, "=").concat(encodeURIComponent(t[c])));
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
      var a = r(n(203)),
        i = r(n(204));
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
              c(t, e, n[e]);
            });
        }
        return t;
      }
      function c(t, e, n) {
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
      var l = [
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
    203: function(t, e, n) {
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
    204: function(t, e, n) {
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
                var o, c = t[Symbol.iterator]();
                !(a = (o = c.next()).done) &&
                (n.push(o.value), !e || n.length !== e);
                a = !0
              );
            } catch (l) {
              (i = !0), (r = l);
            } finally {
              try {
                a || null == c.return || c.return();
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
          var c = a(r.split("x"), 2),
            l = c[0],
            s = c[1],
            u = +l,
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
    207: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return E;
        });
      var a = n(12),
        i = n(13),
        r = n(16),
        o = n(14),
        c = n(8),
        l = n(15),
        s = n(0),
        u = n.n(s),
        h = n(39),
        f = n(183),
        d = n.n(f),
        p = n(23),
        m = n(200),
        v = n.n(m),
        g = n(181),
        y = n.n(g),
        k = n(182),
        w = n.n(k),
        b = v()(p.a);
      var E = (function(t) {
        function e(t) {
          var n;
          return (
            Object(a.a)(this, e),
            ((n = Object(r.a)(this, Object(o.a)(e).call(this, t))).state = {
              data: []
            }),
            (n.getData = n.getData.bind(Object(c.a)(n))),
            n
          );
        }
        return (
          Object(l.a)(e, t),
          Object(i.a)(e, [
            {
              key: "componentDidMount",
              value: function() {
                p.a
                  .fetch(
                    '*[_type == "projects" && title == $slug] {\n  _id,\n  title,\n  content,\n  images\n}[0...1]\n',
                    { slug: this.props.match.params.url.replace(/_/g, " ") }
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
                        id: "project",
                        title: t.title,
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
                                      src: ((n = t), b.image(n))
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
                                    "uk-position-center-left uk-position-small",
                                  href: "#",
                                  "uk-slidenav-previous": "true",
                                  "uk-slideshow-item": "previous"
                                },
                                u.a.createElement("img", {
                                  src: w.a,
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
                                  src: y.a,
                                  alt: "Right"
                                })
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
                                "h1",
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
    },
    208: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return k;
        });
      var a = n(12),
        i = n(13),
        r = n(16),
        o = n(14),
        c = n(8),
        l = n(15),
        s = n(0),
        u = n.n(s),
        h = n(39),
        f = n(183),
        d = n.n(f),
        p = n(23),
        m = n(181),
        v = n.n(m),
        g = n(182),
        y = n.n(g),
        k = (function(t) {
          function e(t) {
            var n;
            return (
              Object(a.a)(this, e),
              ((n = Object(r.a)(this, Object(o.a)(e).call(this, t))).state = {
                data: []
              }),
              (n.getData = n.getData.bind(Object(c.a)(n))),
              n
            );
          }
          return (
            Object(l.a)(e, t),
            Object(i.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  p.a
                    .fetch(
                      '*[_type == "contacts"] | order(short) {\n  _id,\n  title,\n  content,\n  "images": images[].asset->url\n}[0...3]\n'
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
                        { id: "contacts", title: "Contacts" },
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
                                          "uk-position-center-left uk-position-small",
                                        href: "#",
                                        "uk-slidenav-previous": "true",
                                        "uk-slideshow-item": "previous"
                                      },
                                      u.a.createElement("img", {
                                        src: y.a,
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
    },
    209: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function() {
          return k;
        });
      var a = n(12),
        i = n(13),
        r = n(16),
        o = n(14),
        c = n(8),
        l = n(15),
        s = n(0),
        u = n.n(s),
        h = n(39),
        f = n(183),
        d = n.n(f),
        p = n(23),
        m = n(181),
        v = n.n(m),
        g = n(182),
        y = n.n(g),
        k = (function(t) {
          function e(t) {
            var n;
            return (
              Object(a.a)(this, e),
              ((n = Object(r.a)(this, Object(o.a)(e).call(this, t))).state = {
                data: []
              }),
              (n.getData = n.getData.bind(Object(c.a)(n))),
              n
            );
          }
          return (
            Object(l.a)(e, t),
            Object(i.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  p.a
                    .fetch(
                      '*[_type == "news"] | order(short) {\n  _id,\n  title,\n  content,\n  "images": images[].asset->url\n}[0...3]\n'
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
                        { id: "news", title: "News" },
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
                                          "uk-position-center-left uk-position-small",
                                        href: "#",
                                        "uk-slidenav-previous": "true",
                                        "uk-slideshow-item": "previous"
                                      },
                                      u.a.createElement("img", {
                                        src: y.a,
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
                                      "h1",
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
//# sourceMappingURL=profile.9aec19d6.chunk.js.map
