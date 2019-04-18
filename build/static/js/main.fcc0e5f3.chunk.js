(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    173: function(e, t, n) {},
    174: function(e, t, n) {},
    175: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        r = n.n(a),
        c = n(36),
        o = n(35),
        i = n(9),
        l = n.n(i),
        s = n(61),
        u = n(19),
        m = n(8),
        p = n(63),
        d = n(6),
        h = n(20),
        b = (n(28), { isAuthenticated: !1, currentUser: {} }),
        g = { currentProfile: {} },
        f = Object(m.c)({
          auth: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : b,
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
                  : g,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "auth/SET_CURRENT_PROFILE":
                return Object(h.a)({}, e, { currentProfile: t.profile });
              default:
                return e;
            }
          }
        }),
        E = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        y = (n(88), n(11)),
        w = n(12),
        v = n(15),
        j = n(13),
        O = n(14),
        _ = n(34),
        k = n(21),
        N = n(177),
        T = n(64),
        x = n.n(T),
        A = n(65),
        C = n.n(A),
        P = n(38),
        R = [
          { to: "/", text: "Projects" },
          { to: "/about", text: "About" },
          { to: "/news", text: "News" },
          { to: "/contact", text: "Contact" }
        ],
        S = (function(e) {
          function t(e) {
            var n;
            return (
              Object(y.a)(this, t),
              ((n = Object(v.a)(this, Object(j.a)(t).call(this, e))).state = {
                soc: {}
              }),
              (n.getData = n.getData.bind(Object(k.a)(n))),
              n
            );
          }
          return (
            Object(O.a)(t, e),
            Object(w.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  P.a
                    .fetch(
                      '*[_type == "settings"] {\n  _id,\n  soc\n}[0...1]\n'
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
                  this.setState({ soc: e[0] });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.soc.soc;
                  return r.a.createElement(
                    "header",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "uk-container" },
                      r.a.createElement(
                        "div",
                        { className: "uk-grid", "uk-grid": "true" },
                        r.a.createElement(
                          "div",
                          { className: "uk-width-1-5" },
                          r.a.createElement(
                            "div",
                            { className: "logo" },
                            r.a.createElement("a", { href: "/" }, "Overspace")
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "uk-width-4-5" },
                          r.a.createElement(
                            "nav",
                            null,
                            r.a.createElement(
                              "ul",
                              null,
                              R.map(function(e, t) {
                                return r.a.createElement(
                                  "li",
                                  { key: t },
                                  r.a.createElement(N.a, { to: e.to }, e.text)
                                );
                              })
                            ),
                            r.a.createElement(
                              "ul",
                              { className: "soc-icons" },
                              e
                                ? r.a.createElement(
                                    "li",
                                    null,
                                    r.a.createElement(
                                      "a",
                                      { href: e.facebook },
                                      r.a.createElement("img", {
                                        src: C.a,
                                        alt: "Facebook"
                                      })
                                    )
                                  )
                                : "",
                              e
                                ? r.a.createElement(
                                    "li",
                                    null,
                                    r.a.createElement(
                                      "a",
                                      { href: "mailto:".concat(e.email) },
                                      r.a.createElement("img", {
                                        src: x.a,
                                        alt: "Email"
                                      })
                                    )
                                  )
                                : ""
                            )
                          ),
                          r.a.createElement(
                            "button",
                            {
                              className:
                                "hamburger hamburger--spring uk-align-right",
                              type: "button"
                            },
                            r.a.createElement(
                              "span",
                              { className: "hamburger-box" },
                              r.a.createElement("span", {
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
        D = n(178),
        M = n(179),
        X = n(39),
        U = function() {
          return r.a.createElement(
            X.a,
            {
              id: "not-found",
              title: "Not Found",
              description: "This is embarrassing.",
              noCrawl: !0
            },
            r.a.createElement("p", null, "Super embarrassing.")
          );
        },
        W = l()({
          loader: function() {
            return n.e(2).then(n.bind(null, 202));
          },
          loading: function() {
            return null;
          },
          modules: ["homepage"]
        }),
        F = l()({
          loader: function() {
            return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 203));
          },
          loading: function() {
            return null;
          },
          modules: ["about"]
        }),
        I = l()({
          loader: function() {
            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 204));
          },
          loading: function() {
            return null;
          },
          modules: ["project"]
        }),
        L = l()({
          loader: function() {
            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 205));
          },
          loading: function() {
            return null;
          },
          modules: ["contact"]
        }),
        q = l()({
          loader: function() {
            return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 206));
          },
          loading: function() {
            return null;
          },
          modules: ["news"]
        }),
        J = function() {
          return r.a.createElement(
            D.a,
            null,
            r.a.createElement(M.a, { exact: !0, path: "/", component: W }),
            r.a.createElement(M.a, {
              exact: !0,
              path: "/projects/:url",
              component: I
            }),
            r.a.createElement(M.a, { exact: !0, path: "/about", component: F }),
            r.a.createElement(M.a, {
              exact: !0,
              path: "/contact",
              component: L
            }),
            r.a.createElement(M.a, { exact: !0, path: "/news", component: q }),
            r.a.createElement(M.a, { component: U })
          );
        },
        H = (n(173),
        (function(e) {
          function t() {
            return (
              Object(y.a)(this, t),
              Object(v.a)(this, Object(j.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(O.a)(t, e),
            Object(w.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    { id: "app" },
                    r.a.createElement(S, {
                      isAuthenticated: this.props.isAuthenticated,
                      current: this.props.location.pathname
                    }),
                    r.a.createElement("main", null, r.a.createElement(J, null))
                  );
                }
              }
            ]),
            t
          );
        })(a.Component)),
        z = Object(_.a)(H),
        B = (n(174),
        (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = E ? Object(d.c)({ initialEntries: [e] }) : Object(d.a)(),
            n = [p.a, Object(u.routerMiddleware)(t)],
            a = m.d.apply(void 0, [m.a.apply(void 0, n)].concat([])),
            r = E ? {} : window.__PRELOADED_STATE__;
          return (
            E || delete window.__PRELOADED_STATE__,
            {
              store: Object(m.e)(Object(u.connectRouter)(t)(f), r, a),
              history: t
            }
          );
        })()),
        G = B.store,
        K = B.history,
        Q = r.a.createElement(
          o.Provider,
          { store: G },
          r.a.createElement(
            u.ConnectedRouter,
            { history: K },
            r.a.createElement(
              s.Frontload,
              { noServerRender: !0 },
              r.a.createElement(z, null)
            )
          )
        ),
        V = document.querySelector("#root");
      !0 === V.hasChildNodes()
        ? l.a.preloadReady().then(function() {
            Object(c.hydrate)(Q, V);
          })
        : Object(c.render)(Q, V);
    },
    38: function(e, t, n) {
      "use strict";
      var a = n(66),
        r = n.n(a);
      t.a = r()({ projectId: "it6hje6w", dataset: "production", useCdn: !0 });
    },
    39: function(e, t, n) {
      "use strict";
      var a = n(68),
        r = n(11),
        c = n(12),
        o = n(15),
        i = n(13),
        l = n(14),
        s = n(1),
        u = n.n(s),
        m = n(34),
        p = n(67),
        d = n.n(p),
        h = "https://cra-ssr.herokuapp.com",
        b = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(t, e),
            Object(c.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    r = e.image,
                    c = e.contentType,
                    o = e.twitter,
                    i = e.noCrawl,
                    l = e.published,
                    s = e.updated,
                    u = e.category,
                    m = e.tags,
                    p = n
                      ? (n + " | My Website").substring(0, 60)
                      : "My Website",
                    d = a
                      ? a.substring(0, 155)
                      : "This is a really awesome website where we can render on the server. Supa cool.",
                    b = r ? "".concat(h).concat(r) : "",
                    g = [
                      { itemprop: "name", content: p },
                      { itemprop: "description", content: d },
                      { itemprop: "image", content: b },
                      { name: "description", content: d },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: "@cereallarceny" },
                      { name: "twitter:title", content: p },
                      { name: "twitter:description", content: d },
                      {
                        name: "twitter:creator",
                        content: o || "@cereallarceny"
                      },
                      { name: "twitter:image:src", content: b },
                      { property: "og:title", content: p },
                      { property: "og:type", content: c || "website" },
                      { property: "og:url", content: h + t },
                      { property: "og:image", content: b },
                      { property: "og:description", content: d },
                      { property: "og:site_name", content: "My Website" },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    i &&
                      g.push({ name: "robots", content: "noindex, nofollow" }),
                    l && g.push({ name: "article:published_time", content: l }),
                    s && g.push({ name: "article:modified_time", content: s }),
                    u && g.push({ name: "article:section", content: u }),
                    m && g.push({ name: "article:tag", content: m }),
                    g
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.id,
                    r = e.className,
                    c = Object(a.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: n, className: r },
                    u.a.createElement(d.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          c.schema || "WebPage"
                        )
                      },
                      title: c.title ? c.title + " | My Website" : "My Website",
                      link: [
                        {
                          rel: "canonical",
                          href: h + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(c, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      t.a = Object(m.a)(b);
    },
    64: function(e, t, n) {
      e.exports = n.p + "static/media/envelope-regular.1a9020c3.svg";
    },
    65: function(e, t, n) {
      e.exports = n.p + "static/media/facebook-square-brands.3c1db105.svg";
    },
    70: function(e, t, n) {
      e.exports = n(175);
    }
  },
  [[70, 5, 6]]
]);
//# sourceMappingURL=main.fcc0e5f3.chunk.js.map
