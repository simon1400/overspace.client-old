(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    182: function(t, e, r) {
      "use strict";
      var n = r(0),
        i = r(1),
        o = r(183),
        a = r(198),
        l = a.serializers,
        u = a.serializeSpan,
        s = a.renderProps,
        c = o.getImageUrl,
        f = o.blocksToNodes,
        h = o.mergeSerializers,
        p = n.createElement,
        d = function t(e) {
          var r = h(t.defaultSerializers, e.serializers),
            n = Object.assign({}, s, e, {
              serializers: r,
              blocks: e.blocks || []
            });
          return f(p, n, l, u);
        };
      (d.defaultSerializers = l),
        (d.getImageUrl = c),
        (d.propTypes = {
          className: i.string,
          renderContainerOnSingleChild: i.bool,
          projectId: i.string,
          dataset: i.string,
          imageOptions: i.object,
          serializers: i.shape({
            types: i.object,
            marks: i.object,
            list: i.func,
            listItem: i.func,
            block: i.func,
            span: i.func
          }),
          blocks: i.oneOfType([
            i.arrayOf(i.shape({ _type: i.string.isRequired })),
            i.shape({ _type: i.string.isRequired })
          ]).isRequired
        }),
        (d.defaultProps = {
          renderContainerOnSingleChild: !1,
          serializers: {},
          imageOptions: {}
        }),
        (t.exports = d);
    },
    183: function(t, e, r) {
      t.exports = r(186);
    },
    184: function(t, e, r) {
      "use strict";
      var n = r(188),
        i = r(189),
        o = r(2),
        a = encodeURIComponent,
        l =
          "You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see " +
          n("block-content-image-materializing");
      t.exports = function(t) {
        var e = t.node,
          r = t.options,
          n = r.projectId,
          u = r.dataset,
          s = e.asset;
        if (!s)
          throw new Error("Image does not have required `asset` property");
        if (s.url)
          return (
            s.url +
            (function(t) {
              var e = t.imageOptions,
                r = Object.keys(e);
              return r.length
                ? "?" +
                    r
                      .map(function(t) {
                        return a(t) + "=" + a(e[t]);
                      })
                      .join("&")
                : "";
            })(r)
          );
        if (!n || !u) throw new Error(l);
        if (!s._ref)
          throw new Error(
            "Invalid image reference in block, no `_ref` found on `asset`"
          );
        return i(o({ projectId: n, dataset: u }, r.imageOptions || {}))
          .image(e)
          .toString();
      };
    },
    185: function(t, e, r) {
      "use strict";
      var n =
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
              },
        i = r(2);
      t.exports = function(t, e) {
        return Object.keys(t).reduce(function(r, o) {
          var a = n(t[o]);
          return (
            (r[o] =
              "function" === a
                ? "undefined" !== typeof e[o]
                  ? e[o]
                  : t[o]
                : "object" === a
                  ? i({}, t[o], e[o])
                  : "undefined" === typeof e[o]
                    ? t[o]
                    : e[o]),
            r
          );
        }, {});
      };
    },
    186: function(t, e, r) {
      "use strict";
      var n = r(187),
        i = r(194),
        o = r(184),
        a = r(185);
      t.exports = {
        blocksToNodes: function(t, e, r, o) {
          if (r) return i(t, e, r, o);
          var a = n(t);
          return i(t, e, a.defaultSerializers, a.serializeSpan);
        },
        getSerializers: n,
        getImageUrl: o,
        mergeSerializers: a
      };
    },
    187: function(t, e, r) {
      "use strict";
      var n = r(2),
        i = r(184);
      t.exports = function(t, e) {
        var r = e || { useDashedStyles: !1 };
        function o(e, r) {
          return t(e, null, r.children);
        }
        return {
          defaultSerializers: {
            types: {
              block: function(e) {
                var r = e.node.style || "normal";
                return /^h\d/.test(r)
                  ? t(r, null, e.children)
                  : t(
                      "blockquote" === r ? "blockquote" : "p",
                      null,
                      e.children
                    );
              },
              image: function(e) {
                if (!e.node.asset) return null;
                var r = t("img", { src: i(e) });
                return e.isInline ? r : t("figure", null, r);
              }
            },
            marks: {
              strong: o.bind(null, "strong"),
              em: o.bind(null, "em"),
              code: o.bind(null, "code"),
              underline: function(e) {
                var n = r.useDashedStyles
                  ? { "text-decoration": "underline" }
                  : { textDecoration: "underline" };
                return t("span", { style: n }, e.children);
              },
              "strike-through": function(e) {
                return t("del", null, e.children);
              },
              link: function(e) {
                return t("a", { href: e.mark.href }, e.children);
              }
            },
            list: function(e) {
              var r = "bullet" === e.type ? "ul" : "ol";
              return t(r, null, e.children);
            },
            listItem: function(e) {
              var r =
                e.node.style && "normal" !== e.node.style
                  ? t(e.serializers.types.block, e, e.children)
                  : e.children;
              return t("li", null, r);
            },
            block: function(e) {
              var r = e.node,
                n = e.serializers,
                i = e.options,
                o = e.isInline,
                a = e.children,
                l = r._type,
                u = n.types[l];
              if (!u)
                throw new Error(
                  'Unknown block type "' +
                    l +
                    '", please specify a serializer for it in the `serializers.types` prop'
                );
              return t(u, { node: r, options: i, isInline: o }, a);
            },
            span: function(e) {
              var r = e.node,
                n = r.mark,
                i = r.children,
                o = "string" === typeof n ? n : n._type,
                a = e.serializers.marks[o];
              return a
                ? t(a, e.node, i)
                : (console.warn(
                    'Unknown mark type "' +
                      o +
                      '", please specify a serializer for it in the `serializers.marks` prop'
                  ),
                  t(e.serializers.markFallback, null, i));
            },
            hardBreak: function() {
              return t("br");
            },
            container: "div",
            markFallback: "span",
            text: void 0,
            empty: ""
          },
          serializeSpan: function(e, r, i, o) {
            if ("\n" === e && r.hardBreak)
              return t(r.hardBreak, { key: "hb-" + i });
            if ("string" === typeof e)
              return r.text ? t(r.text, { key: "text-" + i }, e) : e;
            var a = void 0;
            e.children &&
              (a = {
                children: e.children.map(function(t, r) {
                  return o.serializeNode(t, r, e.children, !0);
                })
              });
            var l = n({}, e, a);
            return t(r.span, {
              key: e._key || "span-" + i,
              node: l,
              serializers: r
            });
          }
        };
      };
    },
    188: function(t, e) {
      t.exports = function(t) {
        return "https://docs.sanity.io/help/" + t;
      };
    },
    189: function(t, e, r) {
      t.exports = r(190).default;
    },
    190: function(t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function(t) {
          if (t && "object" === o(t.clientConfig))
            return new c(null, {
              baseUrl: t.clientConfig.apiHost.replace(
                /^https:\/\/api\./,
                "https://cdn."
              ),
              projectId: t.clientConfig.projectId,
              dataset: t.clientConfig.dataset
            });
          return new c(null, t);
        });
      var n,
        i = (n = r(191)) && n.__esModule ? n : { default: n };
      function o(t) {
        return (o =
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
      function a(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = r),
          t
        );
      }
      function l(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      var u = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
        s = [
          "top",
          "bottom",
          "left",
          "right",
          "center",
          "focalpoint",
          "entropy"
        ],
        c = (function() {
          function t(e, r) {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.options = e
                ? (function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(r).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                              r,
                              t
                            ).enumerable;
                          })
                        )),
                        n.forEach(function(e) {
                          a(t, e, r[e]);
                        });
                    }
                    return t;
                  })({}, e.options || {}, r || {})
                : r || {});
          }
          var e, r, n;
          return (
            (e = t),
            (r = [
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
                value: function(t, e, r, n) {
                  return this.withOptions({
                    rect: { left: t, top: e, width: r, height: n }
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
                  if (-1 === u.indexOf(t))
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
            ]) && l(e.prototype, r),
            n && l(e, n),
            t
          );
        })();
    },
    191: function(t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function(t) {
          var e = a({}, t || {}),
            r = e.source;
          delete e.source;
          var o = (0, n.default)(r);
          if (!o) return null;
          var l = (0, i.default)(o.asset._ref),
            s = {
              left: Math.round(o.crop.left * l.width),
              top: Math.round(o.crop.top * l.height)
            };
          (s.width = Math.round(l.width - o.crop.right * l.width - s.left)),
            (s.height = Math.round(
              l.height - o.crop.bottom * l.height - s.top
            ));
          var c = (o.hotspot.height * l.height) / 2,
            f = (o.hotspot.width * l.width) / 2,
            h = o.hotspot.x * l.width,
            p = o.hotspot.y * l.height,
            d = { left: h - f, top: p - c, right: h + f, bottom: p + f };
          (e.asset = l),
            e.rect ||
              e.focalPoint ||
              e.ignoreImageParams ||
              e.crop ||
              (e = a(
                {},
                e,
                (function(t, e) {
                  var r = { width: e.width, height: e.height };
                  if (!e.width || !e.height) return (r.rect = t.crop), r;
                  var n = t.crop,
                    i = t.hotspot,
                    o = e.width / e.height;
                  if (n.width / n.height > o) {
                    var a = n.height,
                      l = a * o,
                      u = n.top,
                      s = (i.right - i.left) / 2 + i.left,
                      c = s - l / 2;
                    return (
                      c < n.left
                        ? (c = n.left)
                        : c + l > n.left + n.width &&
                          (c = n.left + n.width - l),
                      (r.rect = {
                        left: Math.round(c),
                        top: Math.round(u),
                        width: Math.round(l),
                        height: Math.round(a)
                      }),
                      r
                    );
                  }
                  var f = n.width,
                    h = f / o,
                    p = n.left,
                    d = (i.bottom - i.top) / 2 + i.top - h / 2;
                  d < n.top
                    ? (d = n.top)
                    : d + h > n.top + n.height && (d = n.top + n.height - h);
                  return (
                    (r.rect = {
                      left: Math.max(0, Math.floor(p)),
                      top: Math.max(0, Math.floor(d)),
                      width: Math.round(f),
                      height: Math.round(h)
                    }),
                    r
                  );
                })({ crop: s, hotspot: d }, e)
              ));
          return (function(t) {
            var e = t.baseUrl || "https://cdn.sanity.io",
              r = ""
                .concat(t.asset.id, "-")
                .concat(t.asset.width, "x")
                .concat(t.asset.height, ".")
                .concat(t.asset.format),
              n = ""
                .concat(e, "/images/")
                .concat(t.projectId, "/")
                .concat(t.dataset, "/")
                .concat(r),
              i = [];
            if (t.rect) {
              var o =
                0 != t.rect.left ||
                0 != t.rect.top ||
                t.rect.height != t.asset.height ||
                t.rect.width != t.asset.width;
              o &&
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
              (u.forEach(function(e) {
                var r,
                  n,
                  o = ((n = 2),
                  (function(t) {
                    if (Array.isArray(t)) return t;
                  })((r = e)) ||
                    (function(t, e) {
                      var r = [],
                        n = !0,
                        i = !1,
                        o = void 0;
                      try {
                        for (
                          var a, l = t[Symbol.iterator]();
                          !(n = (a = l.next()).done) &&
                          (r.push(a.value), !e || r.length !== e);
                          n = !0
                        );
                      } catch (u) {
                        (i = !0), (o = u);
                      } finally {
                        try {
                          n || null == l.return || l.return();
                        } finally {
                          if (i) throw o;
                        }
                      }
                      return r;
                    })(r, n) ||
                    (function() {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    })()),
                  a = o[0],
                  l = o[1];
                "undefined" !== typeof t[a]
                  ? i.push("".concat(l, "=").concat(encodeURIComponent(t[a])))
                  : "undefined" !== typeof t[l] &&
                    i.push("".concat(l, "=").concat(encodeURIComponent(t[l])));
              }),
              0 === i.length)
            )
              return n;
            return "".concat(n, "?").concat(i.join("&"));
          })(e);
        }),
        Object.defineProperty(e, "parseSource", {
          enumerable: !0,
          get: function() {
            return n.default;
          }
        });
      var n = o(r(192)),
        i = o(r(193));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function(e) {
              l(t, e, r[e]);
            });
        }
        return t;
      }
      function l(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = r),
          t
        );
      }
      var u = [
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
        ["crop", "crop"]
      ];
    },
    192: function(t, e, r) {
      "use strict";
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = r),
          t
        );
      }
      function i(t) {
        return (i =
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
      function o(t) {
        var e = t.split("/").slice(-1);
        return "image-".concat(e[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function(t) {
          if (!t) return null;
          var e;
          if (
            "string" === typeof t &&
            ((r = t), /^https?:\/\//.test("".concat(r)))
          )
            e = { asset: { _ref: o(t) } };
          else if ("string" === typeof t) e = { asset: { _ref: t } };
          else if ("string" === typeof t._ref) e = { asset: t };
          else if (t._id) e = { asset: { _ref: t._id } };
          else if (t.asset && t.asset.url && !t.asset._ref)
            e = { asset: { _ref: o(t.asset.url) } };
          else {
            if ("object" !== i(t.asset)) return null;
            e = t;
          }
          var r;
          t.crop && (e.crop = t.crop);
          t.hotspot && (e.hotspot = t.hotspot);
          return (function(t) {
            if (t.crop && t.hotspot) return t;
            return (function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                  i = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(r).filter(function(t) {
                      return Object.getOwnPropertyDescriptor(r, t).enumerable;
                    })
                  )),
                  i.forEach(function(e) {
                    n(t, e, r[e]);
                  });
              }
              return t;
            })(
              {
                crop: { left: 0, top: 0, bottom: 0, right: 0 },
                hotspot: { x: 0.5, y: 0.5, height: 1, width: 1 }
              },
              t
            );
          })(e);
        });
    },
    193: function(t, e, r) {
      "use strict";
      function n(t, e) {
        return (
          (function(t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function(t, e) {
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, l = t[Symbol.iterator]();
                !(n = (a = l.next()).done) &&
                (r.push(a.value), !e || r.length !== e);
                n = !0
              );
            } catch (u) {
              (i = !0), (o = u);
            } finally {
              try {
                n || null == l.return || l.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
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
          var e = n(t.split("-"), 4),
            r = e[1],
            o = e[2],
            a = e[3];
          if (!r || !o || !a)
            throw new Error(
              "Malformed asset _ref '"
                .concat(t, "'. Expected an id like \"")
                .concat(i, '".')
            );
          var l = n(o.split("x"), 2),
            u = l[0],
            s = l[1],
            c = +u,
            f = +s;
          if (!isFinite(c) || !isFinite(f))
            throw new Error(
              "Malformed asset _ref '"
                .concat(t, "'. Expected an id like \"")
                .concat(i, '".')
            );
          return { id: r, width: c, height: f, format: a };
        });
      var i = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
    },
    194: function(t, e, r) {
      "use strict";
      var n = r(2),
        i = r(195),
        o = r(196),
        a = r(197),
        l = r(185),
        u = ["projectId", "dataset", "imageOptions"],
        s = function(t) {
          return "undefined" !== typeof t;
        },
        c = { imageOptions: {} };
      function f(t) {
        return "block" === t._type && t.listItem;
      }
      t.exports = function(t, e, r, h) {
        var p = n({}, c, e),
          d = Array.isArray(p.blocks) ? p.blocks : [p.blocks],
          y = a(d),
          m = o(y, p.listNestMode),
          v = l(r, p.serializers || {}),
          g = u.reduce(function(t, e) {
            var r = p[e];
            return s(r) && (t[e] = r), t;
          }, {});
        function b(e, r, n, o) {
          return "list" === (a = e)._type && a.listItem
            ? (function(e) {
                var r = e.listItem,
                  n = e.level,
                  i = e._key,
                  o = e.children.map(b);
                return t(v.list, { key: i, level: n, type: r, options: g }, o);
              })(e)
            : f(e)
              ? (function(e, r) {
                  var n = e._key,
                    o = i(e).map(b);
                  return t(
                    v.listItem,
                    { node: e, serializers: v, index: r, key: n, options: g },
                    o
                  );
                })(
                  e,
                  (function(t, e) {
                    for (var r = 0, n = 0; n < e.length; n++) {
                      if (e[n] === t) return r;
                      f(e[n]) && r++;
                    }
                    return r;
                  })(e, n)
                )
              : (function(t) {
                  return "string" === typeof t || t.marks || "span" === t._type;
                })(e)
                ? h(e, v, r, { serializeNode: b })
                : (function(e, r, n) {
                    var o = i(e).map(function(t, e, r) {
                        return b(t, e, r, !0);
                      }),
                      a = {
                        key: e._key || "block-" + r,
                        node: e,
                        isInline: n,
                        serializers: v,
                        options: g
                      };
                    return t(v.block, a, o);
                  })(e, r, o);
          var a;
        }
        var k = Boolean(p.renderContainerOnSingleChild),
          w = m.map(b);
        if (k || w.length > 1) {
          var O = p.className ? { className: p.className } : {};
          return t(v.container, O, w);
        }
        return w[0]
          ? w[0]
          : "function" === typeof v.empty
            ? t(v.empty)
            : v.empty;
      };
    },
    195: function(t, e, r) {
      "use strict";
      var n = ["strong", "em", "code", "underline", "strike-through"];
      function i(t, e, r) {
        if (!t.marks || 0 === t.marks.length) return t.marks || [];
        var i = t.marks.reduce(function(t, n) {
            t[n] = t[n] ? t[n] + 1 : 1;
            for (var i = e + 1; i < r.length; i++) {
              var o = r[i];
              if (
                !o.marks ||
                !Array.isArray(o.marks) ||
                -1 === o.marks.indexOf(n)
              )
                break;
              t[n]++;
            }
            return t;
          }, {}),
          o = function(t, e, r) {
            var i = t[e] || 0,
              o = t[r] || 0;
            if (i !== o) return o - i;
            var a = n.indexOf(e),
              l = n.indexOf(r);
            if (a !== l) return a - l;
            if (e < r) return -1;
            if (e > r) return 1;
            return 0;
          }.bind(null, i);
        return t.marks.slice().sort(o);
      }
      t.exports = function(t) {
        var e = t.children,
          r = t.markDefs;
        if (!e || !e.length) return [];
        var n = e.map(i),
          o = { _type: "span", children: [] },
          a = [o];
        return (
          e.forEach(function(t, e) {
            var i = n[e];
            if (i) {
              var o = 1;
              if (a.length > 1)
                for (; o < a.length; o++) {
                  var l = a[o].markKey,
                    u = i.indexOf(l);
                  if (-1 === u) break;
                  i.splice(u, 1);
                }
              var s,
                c = (function(t) {
                  for (var e = t.length - 1; e >= 0; e--) {
                    var r = t[e];
                    if ("span" === r._type && r.children) return r;
                  }
                })((a = a.slice(0, o)));
              if (
                (i.forEach(function(e) {
                  var n = {
                    _type: "span",
                    _key: t._key,
                    children: [],
                    mark:
                      r.find(function(t) {
                        return t._key === e;
                      }) || e,
                    markKey: e
                  };
                  c.children.push(n), a.push(n), (c = n);
                }),
                "span" !== (s = t)._type ||
                  "string" !== typeof s.text ||
                  (!Array.isArray(s.marks) && "undefined" !== typeof s.marks))
              )
                c.children = c.children.concat(t);
              else {
                for (var f = t.text.split("\n"), h = f.length; h-- > 1; )
                  f.splice(h, 0, "\n");
                c.children = c.children.concat(f);
              }
            } else a[a.length - 1].children.push(t);
          }),
          o.children
        );
      };
    },
    196: function(t, e, r) {
      "use strict";
      var n = r(2);
      function i(t) {
        return Boolean(t.listItem);
      }
      function o(t, e) {
        return t.level === e.level && t.listItem === e.listItem;
      }
      function a(t) {
        return {
          _type: "list",
          _key: t._key + "-parent",
          level: t.level,
          listItem: t.listItem,
          children: [t]
        };
      }
      function l(t) {
        return t.children && t.children[t.children.length - 1];
      }
      function u(t, e) {
        var r = "string" === typeof e.listItem;
        if (
          "list" === t._type &&
          t.level === e.level &&
          r &&
          t.listItem === e.listItem
        )
          return t;
        var n = l(t);
        return !!n && u(n, e);
      }
      t.exports = function(t) {
        for (
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "html",
            r = [],
            s = void 0,
            c = 0;
          c < t.length;
          c++
        ) {
          var f = t[c];
          if (i(f))
            if (s)
              if (o(f, s)) s.children.push(f);
              else if (f.level > s.level) {
                var h = a(f);
                if ("html" === e) {
                  var p = l(s),
                    d = n({}, p, { children: p.children.concat(h) });
                  s.children[s.children.length - 1] = d;
                } else s.children.push(h);
                s = h;
              } else if (f.level < s.level) {
                var y = u(r[r.length - 1], f);
                if (y) {
                  (s = y).children.push(f);
                  continue;
                }
                (s = a(f)), r.push(s);
              } else if (f.listItem === s.listItem)
                console.warn("Unknown state encountered for block", f),
                  r.push(f);
              else {
                var m = u(r[r.length - 1], { level: f.level });
                if (m && m.listItem === f.listItem) {
                  (s = m).children.push(f);
                  continue;
                }
                (s = a(f)), r.push(s);
              }
            else (s = a(f)), r.push(s);
          else r.push(f), (s = null);
        }
        return r;
      };
    },
    197: function(t, e, r) {
      "use strict";
      var n = r(2);
      function i(t) {
        var e = 0,
          r = t.length;
        if (0 === r) return e;
        for (var n = 0; n < r; n++)
          (e = (e << 5) - e + t.charCodeAt(n)), (e &= e);
        return e;
      }
      t.exports = function(t) {
        return t.map(function(t) {
          return t._key
            ? t
            : n(
                {
                  _key: ((e = t),
                  i(JSON.stringify(e))
                    .toString(36)
                    .replace(/[^A-Za-z0-9]/g, ""))
                },
                t
              );
          var e;
        });
      };
    },
    198: function(t, e, r) {
      "use strict";
      var n = r(0),
        i = (0, r(183).getSerializers)(n.createElement),
        o = i.defaultSerializers,
        a = i.serializeSpan;
      t.exports = {
        serializeSpan: a,
        serializers: o,
        renderProps: { nestMarks: !0 }
      };
    }
  }
]);
//# sourceMappingURL=0.23fcc71b.chunk.js.map
