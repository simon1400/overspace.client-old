(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    173: function(e, t, n) {},
    174: function(e, t, n) {},
    175: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        c = n.n(a),
        i = n(37),
        r = n(36),
        o = n(10),
        l = n.n(o),
        u = n(61),
        s = n(21),
        m = n(9),
        d = n(63),
        p = n(6),
        h = n(22),
        f = (n(30), { isAuthenticated: !1, currentUser: {} }),
        b = { currentProfile: {} },
        g = Object(m.c)({
          auth: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : f,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "auth/AUTHENTICATE":
                return Object(h.a)({}, e, { isAuthenticated: t.authenticated });
              case "auth/SET_CURRENT_USER":
                return Object(h.a)({}, e, { currentUser: t.user });
              default:
                return e;
            }
          },
          profile: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : b,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "auth/SET_CURRENT_PROFILE":
                return Object(h.a)({}, e, { currentProfile: t.profile });
              default:
                return e;
            }
          }
        }),
        v = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        E = (n(88), n(12)),
        w = n(13),
        y = n(15),
        j = n(14),
        O = n(16),
        k = n(20),
        _ = n(8),
        T = n(177),
        x = n(178),
        N = n(64),
        D = n.n(N),
        M = n(65),
        C = n.n(M),
        S = n(23),
        A = [
          { to: "/", text: "Projects", active: !1 },
          { to: "/about", text: "About", active: !1 },
          { to: "/news", text: "News", active: !1 },
          { to: "/contact", text: "Contact", active: !1 }
        ],
        P = (function(e) {
          function t(e) {
            var n;
            return (
              Object(E.a)(this, t),
              ((n = Object(y.a)(this, Object(j.a)(t).call(this, e))).state = {
                soc: {},
                activeIndex: 0,
                activeMenu: !1
              }),
              (n.getData = n.getData.bind(Object(_.a)(n))),
              (n.activeMenu = n.activeMenu.bind(Object(_.a)(n))),
              (n.menuToggle = n.menuToggle.bind(Object(_.a)(n))),
              n
            );
          }
          return (
            Object(O.a)(t, e),
            Object(w.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  S.a
                    .fetch(
                      '*[_type == "settings"] {\n  _id,\n  soc,\n  name\n}[0...1]\n'
                    )
                    .then(this.getData)
                    .catch(function(e) {
                      return console.log(e);
                    });
                  var e = this.props.location.pathname;
                  A.map(function(t) {
                    return e === t.to ? (t.active = !0) : (t.active = !1);
                  });
                  var t = (function(e, t) {
                    for (var n = 0; n < t.length; n++)
                      if (t[n].active === e) return n;
                  })(!0, A);
                  this.setState({ activeIndex: t });
                }
              },
              {
                key: "getData",
                value: function(e) {
                  this.setState({ soc: e[0] });
                }
              },
              {
                key: "activeMenu",
                value: function(e, t) {
                  this.setState({ activeIndex: t, activeMenu: !1 });
                }
              },
              {
                key: "menuToggle",
                value: function() {
                  this.setState({ activeMenu: !this.state.activeMenu });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state.soc.soc;
                  return c.a.createElement(
                    "header",
                    null,
                    c.a.createElement(
                      "div",
                      { className: "uk-container" },
                      c.a.createElement(
                        "div",
                        { className: "uk-grid", "uk-grid": "true" },
                        c.a.createElement(
                          "div",
                          {
                            className:
                              "uk-width-1-5@m uk-width-1-2@s uk-width-2-3"
                          },
                          c.a.createElement(
                            "div",
                            { className: "logo" },
                            c.a.createElement(
                              "a",
                              { href: "/" },
                              0 === this.state.activeIndex
                                ? c.a.createElement(
                                    "h1",
                                    null,
                                    " ",
                                    this.state.soc.name,
                                    " "
                                  )
                                : this.state.soc.name
                            )
                          )
                        ),
                        c.a.createElement(
                          "div",
                          {
                            className:
                              "uk-width-4-5@m uk-width-1-2@s uk-width-1-3"
                          },
                          c.a.createElement(
                            "nav",
                            {
                              className: this.state.activeMenu
                                ? "active_mnu_mobile"
                                : ""
                            },
                            c.a.createElement(
                              "ul",
                              null,
                              A.map(function(t, n) {
                                return c.a.createElement(
                                  "li",
                                  { key: n },
                                  c.a.createElement(
                                    T.a,
                                    {
                                      to: t.to,
                                      className:
                                        e.state.activeIndex === n
                                          ? "active_mnu"
                                          : "",
                                      onClick: function(t) {
                                        return e.activeMenu(t, n);
                                      }
                                    },
                                    t.text
                                  )
                                );
                              })
                            ),
                            c.a.createElement(
                              "ul",
                              { className: "soc-icons" },
                              t
                                ? c.a.createElement(
                                    "li",
                                    null,
                                    c.a.createElement(
                                      "a",
                                      { href: t.facebook, target: "_blank" },
                                      c.a.createElement("img", {
                                        src: C.a,
                                        alt: "Facebook"
                                      })
                                    )
                                  )
                                : "",
                              t
                                ? c.a.createElement(
                                    "li",
                                    null,
                                    c.a.createElement(
                                      "a",
                                      { href: "mailto:".concat(t.email) },
                                      c.a.createElement("img", {
                                        src: D.a,
                                        alt: "Email"
                                      })
                                    )
                                  )
                                : ""
                            )
                          ),
                          c.a.createElement(
                            "button",
                            {
                              className: "hamburger hamburger--spring uk-align-right ".concat(
                                this.state.activeMenu ? "is-active" : ""
                              ),
                              type: "button",
                              onClick: this.menuToggle
                            },
                            c.a.createElement(
                              "span",
                              { className: "hamburger-box" },
                              c.a.createElement("span", {
                                className: "hamburger-inner"
                              })
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(a.Component),
        R = Object(x.a)(function(e) {
          return c.a.createElement(P, e);
        }),
        X = n(179),
        I = n(180),
        U = n(39),
        F = function() {
          return c.a.createElement(
            U.a,
            {
              id: "not-found",
              title: "Not Found",
              description: "This is embarrassing.",
              noCrawl: !0
            },
            c.a.createElement("p", null, "Super embarrassing.")
          );
        },
        L = l()({
          loader: function() {
            return n.e(2).then(n.bind(null, 205));
          },
          loading: function() {
            return null;
          },
          modules: ["homepage"]
        }),
        J = l()({
          loader: function() {
            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 206));
          },
          loading: function() {
            return null;
          },
          modules: ["about"]
        }),
        q = l()({
          loader: function() {
            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 207));
          },
          loading: function() {
            return null;
          },
          modules: ["project"]
        }),
        z = l()({
          loader: function() {
            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 208));
          },
          loading: function() {
            return null;
          },
          modules: ["contact"]
        }),
        H = l()({
          loader: function() {
            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 209));
          },
          loading: function() {
            return null;
          },
          modules: ["news"]
        }),
        W = function() {
          return c.a.createElement(
            X.a,
            null,
            c.a.createElement(I.a, { exact: !0, path: "/", component: L }),
            c.a.createElement(I.a, {
              exact: !0,
              path: "/projects/:url",
              component: q
            }),
            c.a.createElement(I.a, { exact: !0, path: "/about", component: J }),
            c.a.createElement(I.a, {
              exact: !0,
              path: "/contact",
              component: z
            }),
            c.a.createElement(I.a, { exact: !0, path: "/news", component: H }),
            c.a.createElement(I.a, { component: F })
          );
        },
        B = (n(173),
        (function(e) {
          function t() {
            return (
              Object(E.a)(this, t),
              Object(y.a)(this, Object(j.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(O.a)(t, e),
            Object(w.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { id: "app" },
                    c.a.createElement(R, {
                      isAuthenticated: this.props.isAuthenticated,
                      current: this.props.location.pathname
                    }),
                    c.a.createElement("main", null, c.a.createElement(W, null))
                  );
                }
              }
            ]),
            t
          );
        })(a.Component)),
        G = Object(k.a)(B),
        K = (n(174),
        (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = v ? Object(p.c)({ initialEntries: [e] }) : Object(p.a)(),
            n = [d.a, Object(s.routerMiddleware)(t)],
            a = m.d.apply(void 0, [m.a.apply(void 0, n)].concat([])),
            c = v ? {} : window.__PRELOADED_STATE__;
          return (
            v || delete window.__PRELOADED_STATE__,
            {
              store: Object(m.e)(Object(s.connectRouter)(t)(g), c, a),
              history: t
            }
          );
        })()),
        Q = K.store,
        V = K.history,
        Y = c.a.createElement(
          r.Provider,
          { store: Q },
          c.a.createElement(
            s.ConnectedRouter,
            { history: V },
            c.a.createElement(
              u.Frontload,
              { noServerRender: !0 },
              c.a.createElement(G, null)
            )
          )
        ),
        Z = document.querySelector("#root");
      !0 === Z.hasChildNodes()
        ? l.a.preloadReady().then(function() {
            Object(i.hydrate)(Y, Z);
          })
        : Object(i.render)(Y, Z);
    },
    23: function(e, t, n) {
      "use strict";
      var a = n(66),
        c = n.n(a);
      t.a = c()({ projectId: "it6hje6w", dataset: "production", useCdn: !0 });
    },
    39: function(e, t, n) {
      "use strict";
      var a = n(68),
        c = n(12),
        i = n(13),
        r = n(15),
        o = n(14),
        l = n(8),
        u = n(16),
        s = n(0),
        m = n.n(s),
        d = n(20),
        p = n(67),
        h = n.n(p),
        f = n(23),
        b = "http://overspace.hardart.cz",
        g = (function(e) {
          function t(e) {
            var n;
            return (
              Object(c.a)(this, t),
              ((n = Object(r.a)(this, Object(o.a)(t).call(this, e))).state = {
                defaultTitle: "Overspace",
                defaultDescription: "Overspace"
              }),
              (n.getData = n.getData.bind(Object(l.a)(n))),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  f.a
                    .fetch(
                      '*[_type == "settings"] {\n  _id,\n  title,\n  description\n}[0...1]\n'
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
                  this.setState({
                    defaultTitle: e[0].title,
                    defaultDescription: e[0].description
                  });
                }
              },
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    c = e.image,
                    i = e.contentType,
                    r = e.twitter,
                    o = e.noCrawl,
                    l = e.published,
                    u = e.updated,
                    s = e.category,
                    m = e.tags,
                    d = n
                      ? (n + " | " + this.state.defaultTitle).substring(0, 60)
                      : this.state.defaultTitle,
                    p = a ? a.substring(0, 155) : this.state.defaultDescription,
                    h = c ? "".concat(b).concat(c) : "",
                    f = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: p },
                      { itemprop: "image", content: h },
                      { name: "description", content: p },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: "@cereallarceny" },
                      { name: "twitter:title", content: d },
                      { name: "twitter:description", content: p },
                      {
                        name: "twitter:creator",
                        content: r || "@cereallarceny"
                      },
                      { name: "twitter:image:src", content: h },
                      { property: "og:title", content: d },
                      { property: "og:type", content: i || "website" },
                      { property: "og:url", content: b + t },
                      { property: "og:image", content: h },
                      { property: "og:description", content: p },
                      {
                        property: "og:site_name",
                        content: this.state.defaultTitle
                      },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    o &&
                      f.push({ name: "robots", content: "noindex, nofollow" }),
                    l && f.push({ name: "article:published_time", content: l }),
                    u && f.push({ name: "article:modified_time", content: u }),
                    s && f.push({ name: "article:section", content: s }),
                    m && f.push({ name: "article:tag", content: m }),
                    f
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.id,
                    c = e.className,
                    i = Object(a.a)(e, ["children", "id", "className"]);
                  return m.a.createElement(
                    "div",
                    { id: n, className: c },
                    m.a.createElement(h.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          i.schema || "WebPage"
                        )
                      },
                      title: i.title
                        ? i.title + " | " + this.state.defaultTitle
                        : this.state.defaultTitle,
                      link: [
                        {
                          rel: "canonical",
                          href: b + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(i, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      t.a = Object(d.a)(g);
    },
    64: function(e, t, n) {
      e.exports = n.p + "static/media/mail.60d343db.svg";
    },
    65: function(e, t, n) {
      e.exports = n.p + "static/media/facebook.97af77a1.svg";
    },
    70: function(e, t, n) {
      e.exports = n(175);
    }
  },
  [[70, 5, 6]]
]);
//# sourceMappingURL=main.f02a1a64.chunk.js.map
