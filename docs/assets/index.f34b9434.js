var e,
  a,
  t,
  s,
  l,
  i,
  o,
  r = Object.defineProperty,
  n = Object.defineProperties,
  d = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  p = Object.prototype.hasOwnProperty,
  v = Object.prototype.propertyIsEnumerable,
  m = (e, a, t) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[a] = t),
  f = (e, a) => {
    for (var t in a || (a = {})) p.call(a, t) && m(e, t, a[t]);
    if (c) for (var t of c(a)) v.call(a, t) && m(e, t, a[t]);
    return e;
  },
  u = (e, a) => n(e, d(a));
import {
  o as g,
  c as b,
  a as y,
  n as h,
  u as w,
  F as _,
  b as x,
  r as k,
  d as j,
  w as C,
  e as q,
  f as S,
  g as O,
  h as z,
  i as T,
  j as L,
  k as B,
  l as E,
  m as P,
  p as I,
  q as A,
  s as M,
  t as D,
  v as $,
  x as V,
  y as U,
  S as F,
  z as H,
  A as R,
  B as N,
  C as W,
  D as X,
  E as Y,
  G as Z,
  H as G,
  I as K,
  J as Q,
  T as J,
  K as ee,
  L as ae,
  M as te,
  N as se,
  O as le,
  P as ie,
  Q as oe,
  R as re,
  U as ne,
  V as de,
  W as ce,
  X as pe,
  Y as ve,
  Z as me,
  _ as fe,
  $ as ue,
  a0 as ge,
  a1 as be,
  a2 as ye,
  a3 as he,
  a4 as we,
  a5 as _e,
  a6 as xe,
} from "./vendor.4fa19e74.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      a(e);
    new MutationObserver((e) => {
      for (const t of e)
        if ("childList" === t.type)
          for (const e of t.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && a(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function a(e) {
    if (e.ep) return;
    e.ep = !0;
    const a = (function (e) {
      const a = {};
      return (
        e.integrity && (a.integrity = e.integrity),
        e.referrerpolicy && (a.referrerPolicy = e.referrerpolicy),
        "use-credentials" === e.crossorigin
          ? (a.credentials = "include")
          : "anonymous" === e.crossorigin
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
        a
      );
    })(e);
    fetch(e.href, a);
  }
})();
const ke = (e) =>
    new URL(
      {
        "../assets/images/icon_back.svg": "./assets/icon_back.556b6f96.svg",
        "../assets/images/loading.gif": "./assets/loading.afec609f.gif",
        "../assets/images/logo.png": "./assets/logo.f0ed8cf7.png",
        "../assets/images/profile/about-cover.webp":
          "./assets/about-cover.a0e8683c.webp",
        "../assets/images/profile/about-cover2.webp":
          "./assets/about-cover2.291fc507.webp",
        "../assets/images/svg/apple.svg": "./assets/apple.0fa4e673.svg",
        "../assets/images/svg/as.svg": "./assets/as.a4b9ab96.svg",
        "../assets/images/svg/home-2.svg": "./assets/home-2.0c0430d4.svg",
        "../assets/images/svg/img_wing.svg": "./assets/img_wing.20892ae6.svg",
        "../assets/images/svg/paypal.svg": "./assets/paypal.245a62e2.svg",
        "../assets/images/svg/story.svg": "./assets/story.a2e17494.svg",
        "../assets/images/svg/world_2.svg": "./assets/world_2.5efbb68e.svg",
        "../assets/images/svg/world_2_light.svg":
          "./assets/world_2_light.01526311.svg",
        "../assets/images/home/img/1.jpg": "./assets/1.f5fa3065.jpg",
        "../assets/images/home/img/10.jpg": "./assets/10.19f04185.jpg",
        "../assets/images/home/img/11.jpg": "./assets/11.122377c1.jpg",
        "../assets/images/home/img/2.jpg": "./assets/2.cd10f399.jpg",
        "../assets/images/home/img/3.jpg": "./assets/3.a76b71ea.jpg",
        "../assets/images/home/img/4.jpg": "./assets/4.466d6924.jpg",
        "../assets/images/home/img/5.jpg": "./assets/5.885e98b9.jpg",
        "../assets/images/home/img/6.jpg": "./assets/6.695b9060.jpg",
        "../assets/images/home/img/7.jpg": "./assets/7.88fc33dc.jpg",
        "../assets/images/home/img/8.jpg": "./assets/8.c441e28b.jpg",
        "../assets/images/home/img/9.jpg": "./assets/9.0bf97b8e.jpg",
        "../assets/images/home/opening/1.jpg": "./assets/1.0f6439d0.jpg",
        "../assets/images/home/opening/10.jpg": "./assets/10.3214ef96.jpg",
        "../assets/images/home/opening/2.jpg": "./assets/2.2ca9db58.jpg",
        "../assets/images/home/opening/3.jpg": "./assets/3.4e9daa42.jpg",
        "../assets/images/home/opening/4.jpg": "./assets/4.7c3a17d2.jpg",
        "../assets/images/home/opening/5.jpg": "./assets/5.1afa2bd3.jpg",
        "../assets/images/home/opening/6.jpg": "./assets/6.872f3318.jpg",
        "../assets/images/home/opening/7.jpg": "./assets/7.8d695fe6.jpg",
        "../assets/images/home/opening/8.jpg": "./assets/8.107a61ce.jpg",
        "../assets/images/home/opening/9.jpg": "./assets/9.e0cc08c9.jpg",
      }[`../assets/images/${e}`],
      self.location
    ).href,
  je = { class: "icon" },
  Ce = { class: "svg_box" },
  qe = ["src"];
var Se = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [s, l] of a) t[s] = l;
  return t;
};
var Oe = Se(
  {
    components: {
      Loading: {
        props: { mode: String },
        setup: (e) => (a, t) => (
          g(),
          b(
            _,
            null,
            [
              y("div", { class: h(["mask", e.mode]) }, null, 2),
              y(
                "div",
                { class: h(["bg", e.mode]) },
                [
                  y("div", je, [
                    y("div", Ce, [
                      y(
                        "img",
                        { src: w(ke)("logo.png"), alt: "" },
                        null,
                        8,
                        qe
                      ),
                    ]),
                  ]),
                ],
                2
              ),
            ],
            64
          )
        ),
      },
    },
    setup() {
      const e = x(),
        a = k(!1),
        t = k(""),
        s = k("leave"),
        l = j(() => "stop" === s.value),
        i = j(() => {
          if (E(e.state.route.path)) return null;
          return P("layout-error")(I(["meta", "layout"], e.state.route));
        });
      return (
        C(
          () => e.state.route,
          (l) => {
            t.value !== l &&
              ((a.value = !0),
              setTimeout(() => {
                (a.value = !1), (s.value = "enter");
              }, 3500)),
              (t.value = e.state.route.path);
          }
        ),
        C(a, (a) => {
          e.commit("app/systm/Loading", a);
        }),
        q(() => {
          window.addEventListener("resize", () => {});
        }),
        { layout: i, isShowLoading: a, mode: s, isError: l }
      );
    },
  },
  [
    [
      "render",
      function (e, a, t, s, l, i) {
        const o = S("router-view"),
          r = S("the-popup"),
          n = S("Loading");
        return (
          g(),
          b(
            _,
            null,
            [
              (g(),
              O(T(s.layout), null, {
                default: z(() => [
                  L(o, null, {
                    default: z(({ Component: e }) => [(g(), O(T(e)))]),
                    _: 1,
                  }),
                ]),
                _: 1,
              })),
              L(r),
              s.isError || s.isShowLoading
                ? (g(), O(n, { key: 0, mode: s.mode }, null, 8, ["mode"]))
                : B("", !0),
            ],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-6ef0256d"],
  ]
);
const ze = {
    "../locales/en/app.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            lang: "English",
            login: "Login Page",
            back: "Back",
            "project.title": "Project",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../locales/en/button.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            confirm: "Confirm",
            accept: "I accept the terms in the license agreement",
            cancel: "Cancel",
            back: "Feedback",
            logout: "Log out",
            remove: "Erase",
            finish: "Complete",
            "got.it": "Understood",
            submit: "Send",
            outsideclose: "Click around to close",
            to: "Go now",
            count: "計算",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../locales/zh-tw/app.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            lang: "中文",
            login: "登入頁",
            back: "返回",
            "project.title": "Project",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../locales/zh-tw/button.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            confirm: "確認",
            accept: "本人已詳細閱讀上述規範",
            cancel: "取消",
            back: "返回",
            logout: "登出",
            remove: "刪除",
            finish: "完成",
            "got.it": "知道了",
            submit: "送出",
            outsideclose: "點擊周圍關閉",
            to: "立刻前往",
            count: "計算",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../locales/en/pages/about.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            title: "A Simple Introduction to the Project",
            "content.title.1": "Introduction",
            "content.text.1":
              "This is a modern front-end open-source project built with Vue 3 and Vite. The project is dedicated to providing an efficient and lightweight development experience, while maintaining sufficient flexibility to adapt to a variety of application scenarios.",
            "content.title.2": "Features",
            "content.list.1":
              "Combines Vue 3's reactive programming model with Vite's fast cold start and Hot Module Replacement (HMR) capabilities.",
            "content.list.2":
              "Provides an easy-to-use modal component with multiple customization options, suitable for various interaction scenarios.",
            "content.list.3":
              "Automatically generates routing configurations through the file structure, simplifying the routing setup process.",
            "content.list.4":
              "Built-in internationalization support, facilitating multi-language expansion and management.",
            "content.list.5":
              "Utilizes Vuex for state management, making data flow clearer and easier to maintain.",
            "content.text.3":
              "This project is an ideal choice for developers who wish to quickly build modern Vue 3 applications.",
            "content.list.title.1": "Vue 3 and Vite Integration",
            "content.list.title.2": "Packaged Modal System",
            "content.list.title.3": "Automated Routing",
            "content.list.title.4": "i18n Multilingual Support",
            "content.list.title.5": "Vuex Integration",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../locales/en/pages/demo.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            title: "Example",
            "router.link": "Go to Home",
            "modal.swal": "sweetAlert Modal",
            "modal.swal.title": "Title",
            "popup.title": "popup Component",
            "popup.text": "This is a custom popup modal component",
            "popup.use": "Custom Popup",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../locales/en/pages/home.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            title: "Home",
            "nav.home": "Home",
            "nav.more": "Learn More",
            "nav.about": "About the Project",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../locales/zh-tw/pages/about.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            title: "專案簡單的介紹",
            "content.title.1": "簡介",
            "content.text.1":
              "這是一個現代化的前端開源專案，使用Vue 3和Vite構建。專案致力於提供高效、輕量級的開發體驗，同時保持足夠的靈活性以適應各種應用場景。",
            "content.title.2": "特色",
            "content.list.1":
              "結合了Vue 3的響應式編程模型和Vite的快速冷啟動、熱模塊更換（HMR）能力。",
            "content.list.2":
              "提供易於使用的彈窗組件，支持多種定制選項，適用於各種交互場景。",
            "content.list.3":
              "透過文件結構自動生成路由配置，簡化路由設定流程。",
            "content.list.4": "內建國際化支持，方便進行多語言擴展和管理。",
            "content.list.5":
              "利用Vuex進行狀態管理，使得數據流更加清晰和易於維護。",
            "content.text.3":
              "這個專案是適合希望快速搭建現代化Vue 3應用的開發者的理想選擇。",
            "content.list.title.1": "Vue 3和Vite集成",
            "content.list.title.2": "封裝好的彈窗系統",
            "content.list.title.3": "自動化路由",
            "content.list.title.4": "i18n多國語系支持",
            "content.list.title.5": "Vuex集成",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../locales/zh-tw/pages/demo.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            title: "範例",
            "router.link": "前往首頁",
            "modal.swal": "sweetAlert彈窗",
            "modal.swal.title": "標題",
            "popup.title": "popup 元件",
            "popup.text": "這是個自定義彈窗元件",
            "popup.use": "自定義彈窗",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../locales/zh-tw/pages/home.js": Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          default: {
            title: "首頁",
            "nav.home": "首頁",
            "nav.more": "瞭解更多",
            "nav.about": "關於專案",
          },
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
  },
  Te = {};
for (let Fo in ze) {
  const e = Fo.replace("../locales/", "").toLowerCase().replace(".js", ""),
    [a, ...t] = e.split("/"),
    s = A(".", t),
    l = ze[Fo].default;
  Te[a] = M((e, a) => D(e, { [`${s}.${a}`]: l[a] }), Te[a] || {}, $(l));
}
const Le = (() => {
    var e, a, t, s;
    const l = V.get("locale");
    if (l) return l;
    let i =
      null !=
      (s =
        null !=
        (t = null == (e = navigator.language) ? void 0 : e.toLowerCase())
          ? t
          : null == (a = navigator.userLanguage)
          ? void 0
          : a.toLowerCase())
        ? s
        : null;
    return i
      ? (i.includes("ph")
          ? (i = "en-ph")
          : i.includes("zh")
          ? (i = "zh-tw")
          : i.includes("en") && (i = "en"),
        (i = i in Te ? i : {}.VITE_LOCALE),
        i)
      : {}.VITE_LOCALE;
  })(),
  Be = U.exports.createI18n({
    initLocale: Le,
    fallbackLocale: null != (e = {}.VITE_DEFAULT_LANG) ? e : "zh-tw",
    messages: Te,
  });
var Ee = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Be }, Symbol.toStringTag, {
    value: "Module",
  })
);
(F.toast = function (e) {
  return this.fire({
    title: e,
    toast: !0,
    showConfirmButton: !1,
    customClass: "swal2-toast",
    showClass: { popup: "animate__animated animate__fadeInUp" },
    hideClass: { popup: "animate__animated animate__fadeOutDown" },
    timer: 2e3,
    background: "transparent",
    didOpen: (e) => {
      e.addEventListener("click", F.close);
    },
  });
}),
  (F.alert = function ({
    title: e,
    text: a,
    willClose: t = null,
    heightAuto: s = !1,
    html: l = !1,
    confirmButtonText: i = Be.t("button.confirm"),
    style: o = "",
  }) {
    return this.fire({
      title: e,
      text: a,
      html: l,
      customClass: `swal2-alert ${o}`,
      heightAuto: s,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      willClose: t,
      confirmButtonText: i,
    });
  }),
  (F.showLoading = function () {
    return this.fire({
      title: "winner winner chicken dinner",
      showConfirmButton: !1,
      customClass: "swal2-loading",
      showClass: { popup: "animate__animated animate__fadeIn" },
      hideClass: { popup: "animate__animated animate__fadeOut" },
      background: "transparent",
    });
  }),
  (F.confirm = function ({
    title: e,
    text: a,
    html: t,
    confirmCallback: s = null,
    heightAuto: l = !1,
  }) {
    return this.fire({
      title: e,
      text: a,
      html: t,
      customClass: "swal2-confirm",
      heightAuto: l,
      showCancelButton: !0,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      preConfirm() {
        null == s || s();
      },
    });
  });
const Pe = F.mixin({
  reverseButtons: !0,
  heightAuto: !1,
  focusConfirm: !1,
  allowOutsideClick: !1,
  allowEnterKey: !1,
  allowEscapeKey: !1,
  customClass: "swal2-wrap",
  confirmButtonText: Be.t("button.confirm"),
  cancelButtonText: Be.t("button.cancel"),
  didOpen(e) {
    const a = e.querySelector(".swal2-cancel");
    e.querySelector(".swal2-confirm").blur(), a.blur();
  },
});
class Ie {
  constructor() {
    return V;
  }
}
class Ae {
  constructor() {
    this.provider = new Ie();
  }
  destroy() {
    this.provider.clearAll();
  }
}
Ae.prototype.install = function (e) {
  const a = "storage-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Me = new Ae(),
  De = Object.freeze(
    Object.defineProperty(
      { __proto__: null, StorageService: Ae, default: Me },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const $e = () => {
    const e = U.exports.useI18n(),
      a = k({}),
      t = (s, l = {}) => {
        const [i, ...o] = H(".", s);
        return i in a.value ? t(`${a.value[i]}.${A(".", o)}`, l) : e.t(s, l);
      };
    return {
      locale: e.locale,
      change: (a) => {
        e.setLocale(a), Me.provider.set("locale", a);
      },
      setPrefix: (e) => {
        a.value = "string" == typeof e ? { $current: e } : f(f({}, a.value), e);
      },
      t: t,
      addMessages: e.addMessages,
    };
  },
  Ve = ["onMouseenter", "onClick"],
  Ue = y("div", { class: "line" }, null, -1),
  Fe = { class: "list_style" },
  He = { class: "nav_link-top" },
  Re = y(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Ne = { class: "nav_link-title" },
  We = { class: "u-ts-3" },
  Xe = { class: "nav_link-p" },
  Ye = y(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Ze = y("div", { id: "pink_mask" }, null, -1),
  Ge = {
    props: ["isOpen"],
    emits: ["toggleOpen"],
    setup(e, { emit: a }) {
      const t = e,
        s = k(1),
        l = k(!0),
        i = R(),
        o = k([
          {
            title: "Overview",
            content:
              "Meet Basis. We increase the value of digital products and their brands through design",
            path: "/",
          },
          {
            title: "Cases",
            content:
              "See our past work, ranging from the largest brands in the world to fast-moving startups.",
            path: "/case",
          },
          {
            title: "Fintech Design",
            content:
              "See why Basis specializes in product and brand design for innovative financial technology companies.",
            path: "/fintech-design",
          },
          {
            title: "About & Contact",
            content:
              "Meet Basis. We increase the value of digital products and their brands through design",
            path: "/about",
          },
        ]),
        r = j(() => 25 * s.value),
        n = j(() => {
          switch (s.value) {
            case 1:
              return 50;
            case 2:
              return 25;
            case 3:
              return 0;
            default:
              return 75;
          }
        }),
        d = k(25);
      return (e, c) => (
        g(),
        b(
          "div",
          { class: h(["layout-deafult-header-nav", { active: t.isOpen }]) },
          [
            y("ul", null, [
              (g(!0),
              b(
                _,
                null,
                N(
                  o.value,
                  (e, l) => (
                    g(),
                    b(
                      "li",
                      {
                        key: e,
                        style: W(`--i: ${e}`),
                        onMouseenter: (e) =>
                          ((e) => {
                            s.value = e;
                          })(l),
                        onClick: (s) => {
                          return (
                            (l = e.path),
                            i.push(l),
                            void a("toggleOpen", t.isOpen)
                          );
                          var l;
                        },
                      },
                      [
                        Ue,
                        y("div", Fe, [
                          y("div", He, [
                            Re,
                            y("div", Ne, [y("div", We, X(e.title), 1)]),
                          ]),
                          y(
                            "div",
                            {
                              class: h([
                                "nav_link-btm",
                                { active: s.value === l },
                              ]),
                            },
                            [y("p", Xe, X(e.content), 1), Ye],
                            2
                          ),
                        ]),
                      ],
                      44,
                      Ve
                    )
                  )
                ),
                128
              )),
              y(
                "div",
                {
                  class: "move-item",
                  style: W({
                    left: "" + (l.value ? `calc(${w(r)}% - 4px)` : "auto"),
                    right: "" + (l.value ? "auto" : `calc(${w(n)}% - 4px)`),
                    width: `calc(${d.value}% + 8px)`,
                  }),
                },
                null,
                4
              ),
            ]),
            Ze,
          ],
          2
        )
      );
    },
  },
  Ke = { key: 0 },
  Qe = ["src"],
  Je = ["src"],
  ea = [y("div", null, null, -1), y("div", null, null, -1)],
  aa = { class: "layout-deafult pb-32" };
var ta = Se(
    {
      components: {
        LayoutHeader: {
          setup(e) {
            const a = k(!1),
              t = (e) => {
                a.value = !e;
              };
            return (e, s) => (
              g(),
              b(
                _,
                null,
                [
                  y(
                    "div",
                    {
                      class: h(["layout-deafult-header", { active: a.value }]),
                    },
                    [
                      y(
                        "div",
                        {
                          href: "/",
                          "aria-current": "page",
                          class: h([
                            "layout-deafult-header-logo",
                            { "layout-deafult-header-logo--open": a.value },
                          ]),
                          "aria-label": "home",
                        },
                        [
                          a.value
                            ? (g(),
                              b(
                                "img",
                                { key: 1, src: w(ke)("logo.png"), alt: "" },
                                null,
                                8,
                                Je
                              ))
                            : (g(),
                              b("div", Ke, [
                                y(
                                  "img",
                                  { src: w(ke)("logo.png"), alt: "" },
                                  null,
                                  8,
                                  Qe
                                ),
                              ])),
                        ],
                        2
                      ),
                      y(
                        "div",
                        {
                          class: h([
                            "layout-deafult-header-btn",
                            { "layout-deafult-header-btn--open": a.value },
                          ]),
                          onClick: s[0] || (s[0] = (e) => (a.value = !a.value)),
                        },
                        ea,
                        2
                      ),
                    ],
                    2
                  ),
                  a.value
                    ? (g(),
                      O(
                        Ge,
                        { key: 0, "is-open": a.value, onToggleOpen: t },
                        null,
                        8,
                        ["is-open"]
                      ))
                    : B("", !0),
                ],
                64
              )
            );
          },
        },
      },
      setup() {
        const { t: e } = $e();
        return { t: e };
      },
    },
    [
      [
        "render",
        function (e, a, t, s, l, i) {
          const o = S("LayoutHeader");
          return (
            g(), b(_, null, [L(o), y("div", aa, [Y(e.$slots, "default")])], 64)
          );
        },
      ],
    ]
  ),
  sa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ta },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const la = { class: "layout-demo" };
var ia = Se({ setup() {} }, [
  [
    "render",
    function (e, a, t, s, l, i) {
      return g(), b("div", la, [Y(e.$slots, "default")]);
    },
  ],
]);
const oa = {
    "../layouts/layout-default.vue": sa,
    "../layouts/layout-demo.vue": Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: ia },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
  },
  ra = [];
for (let Fo in oa) {
  const e = Fo.replace("../layouts/", "").toLowerCase().replace(".vue", "");
  ra.push({ componentName: e, component: oa[Fo].default });
}
const na = {
  install: (e) => {
    ra.forEach((a) => {
      e.component(a.componentName, a.component);
    });
  },
};
const da = {
    props: { title: {}, goBackButton: { type: Boolean, default: !1 } },
    setup() {
      const e = R();
      return {
        goBack: () => {
          e.options.history.state.back
            ? e.back()
            : e.push({ name: "default-path" });
        },
      };
    },
  },
  ca = {
    class: "relative flex items-center justify-center text-36 h-24 w-full",
  },
  pa = { class: "font-bold" },
  va = { class: "absolute right-8 top-6" };
var ma = Se(da, [
    [
      "render",
      function (e, a, t, s, l, i) {
        return (
          g(),
          b("div", ca, [
            t.goBackButton
              ? (g(),
                b("div", {
                  key: 0,
                  class: "go-back absolute left-3 top-6",
                  onClick:
                    a[0] || (a[0] = (...e) => s.goBack && s.goBack(...e)),
                }))
              : B("", !0),
            y("div", pa, [
              Y(e.$slots, "title", {}, () => [Z(X(t.title), 1)], !0),
            ]),
            y("div", va, [Y(e.$slots, "actions", {}, void 0, !0)]),
          ])
        );
      },
    ],
    ["__scopeId", "data-v-50981458"],
  ]),
  fa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ma },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ua = () => G("popup-service");
const ga = {
    class: "popup-modal swal2-popup swal2-modal swal2-confirm",
    tabindex: "-1",
    style: { display: "grid" },
  },
  ba = { class: "swal2-title", style: { display: "block" } },
  ya = { class: "swal2-html-container", style: { display: "block" } },
  ha = { class: "swal2-actions", style: { display: "flex" } };
var wa = Se({}, [
  [
    "render",
    function (e, a) {
      return (
        g(),
        b("div", ga, [
          y("h2", ba, [Y(e.$slots, "title")]),
          y("div", ya, [Y(e.$slots, "content")]),
          y("div", ha, [Y(e.$slots, "actions")]),
        ])
      );
    },
  ],
]);
const _a = {
    key: 0,
    class:
      "fixed z-[1041] inset-0 w-full h-full flex justify-center items-center pointer-events-none",
  },
  xa = { key: 1 },
  ka = ["data-timer", "data-end"];
var ja = Se(
  {
    setup(e) {
      const a = ua(),
        t = j(() => a.state),
        s = (e) => {
          t.value.resolve(
            f(
              { isConfirmed: !1, isDismissed: !1, dismiss: null, result: null },
              e
            )
          );
        },
        l = j(() => (t.value.type, ae(wa))),
        i = j(() => t.value.BackdropStyle),
        o = k();
      let r = null;
      const n = () => {
        clearTimeout(r), (r = null);
      };
      C([() => t.value.autoClose, () => t.value.timer], ([e, a]) => {
        a &&
          (n(),
          (r = setTimeout(() => {
            n(), e && d("timer");
          }, a)));
      });
      const d = async (e) => {
          if (r) {
            if (!t.value.allowDismissWhenTimerRunning) return;
            n();
          }
          if (o.value && "onDismissed" in o.value) {
            const t = await o.value.onDismissed();
            t && (s({ isDismissed: !0, dismiss: e, result: t }), a.clear());
          } else s({ isDismissed: !0, dismiss: e }), a.clear();
        },
        c = async () => {
          t.value.allowOutsideClick && d("backdrop");
        },
        p = async () => {
          d("cancel");
        },
        v = async () => {
          if (r) {
            if (!t.value.allowConfirmWhenTimerRunning) return;
            n();
          }
          if (o.value && "onConfirmed" in o.value) {
            const e = await o.value.onConfirmed();
            e && (s({ isConfirmed: !0, result: e }), a.clear());
          } else s({ isConfirmed: !0 }), a.clear();
        };
      return (e, a) => (
        g(),
        O(ee, { to: "body" }, [
          L(
            J,
            { name: "popup", duration: "600" },
            {
              default: z(() => {
                var e;
                return [
                  w(t).$display
                    ? (g(),
                      b("div", _a, [
                        (g(),
                        O(
                          T(w(l)),
                          {
                            class: h([
                              "popup__inner pointer-events-auto",
                              {
                                "no-enter-animation":
                                  null == (e = w(t))
                                    ? void 0
                                    : e.noEnterAnimation,
                              },
                            ]),
                          },
                          K(
                            {
                              title: z(() => [Z(X(w(t).title), 1)]),
                              content: z(() => [
                                w(t).component
                                  ? (g(),
                                    O(
                                      T(w(t).component),
                                      Q(
                                        { key: 0, ref_key: "compRef", ref: o },
                                        w(t).props
                                      ),
                                      null,
                                      16
                                    ))
                                  : (g(), b("div", xa, X(w(t).text), 1)),
                              ]),
                              actions: z(() => [
                                w(t).showCancelButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 0,
                                        type: "button",
                                        class: "cancel-button",
                                        onClick: p,
                                      },
                                      X(w(t).cancelButtonText),
                                      1
                                    ))
                                  : B("", !0),
                                w(t).showConfirmButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 1,
                                        type: "button",
                                        class: "confirm-button",
                                        onClick: v,
                                      },
                                      X(w(t).confirmButtonText),
                                      1
                                    ))
                                  : B("", !0),
                              ]),
                              _: 2,
                            },
                            [
                              w(t).timer && w(t).timerProgress
                                ? {
                                    name: "timer",
                                    fn: z(() => [
                                      y(
                                        "div",
                                        {
                                          class: "timer-progress",
                                          "data-timer": w(t).timer,
                                          "data-end": Date.now() + w(t).timer,
                                        },
                                        null,
                                        8,
                                        ka
                                      ),
                                    ]),
                                  }
                                : void 0,
                            ]
                          ),
                          1032,
                          ["class"]
                        )),
                      ]))
                    : B("", !0),
                ];
              }),
              _: 1,
            }
          ),
          L(
            J,
            {
              name: "popup-backdrop",
              "enter-active-class": "animate__animated animate__fadeIn",
              "leave-active-class": "animate__animated animate__fadeOut",
            },
            {
              default: z(() => [
                w(t).$display
                  ? (g(),
                    b(
                      "div",
                      {
                        key: 0,
                        class: "popup-backdrop",
                        style: W({ background: w(i) }),
                        onClick: c,
                      },
                      null,
                      4
                    ))
                  : B("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  },
  [["__scopeId", "data-v-aca526dc"]]
);
const Ca = {
    "../components/the-header.vue": fa,
    "../components/the-popup.vue": Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: ja },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
  },
  qa = [];
for (let Fo in Ca) {
  const e = Fo.replace("../components/", "").toLowerCase().replace(".vue", "");
  qa.push({ componentName: e, component: Ca[Fo].default });
}
const Sa = {
  install: (e) => {
    qa.forEach((a) => {
      e.component(a.componentName, a.component);
    });
  },
};
class Oa {
  constructor() {
    return F.mixin({
      reverseButtons: !0,
      heightAuto: !1,
      focusConfirm: !1,
      allowOutsideClick: !1,
      allowEnterKey: !1,
      allowEscapeKey: !1,
      customClass: "swal2-wrap",
      confirmButtonText: Be.t("button.confirm"),
      cancelButtonText: Be.t("button.cancel"),
      didOpen(e) {
        const a = e.querySelector(".swal2-cancel");
        e.querySelector(".swal2-confirm").blur(), a.blur();
      },
    });
  }
}
class za {
  constructor() {
    this.provider = new Oa();
  }
  toast(e) {
    return this.provider.fire({
      title: e,
      toast: !0,
      showConfirmButton: !1,
      customClass: "swal2-toast",
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      timer: 2e3,
      background: "transparent",
      didOpen: (e) => {
        e.addEventListener("click", this.provider.close);
      },
    });
  }
  alert({
    title: e,
    text: a,
    willClose: t = null,
    heightAuto: s = !1,
    html: l = !1,
    confirmButtonText: i = Be.t("button.confirm"),
    style: o = "",
  }) {
    return this.provider.fire({
      title: e,
      text: a,
      html: l,
      customClass: `swal2-alert ${o}`,
      heightAuto: s,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      willClose: t,
      confirmButtonText: i,
    });
  }
  showLoading() {
    return this.provider.fire({
      showConfirmButton: !1,
      html:
        '<div class="loader">\n      <svg viewBox="0 0 80 80">\n          <circle id="test" cx="40" cy="40" r="32"></circle>\n      </svg>\n  </div>\n\n  <div class="loader triangle">\n      <svg viewBox="0 0 86 80">\n          <polygon points="43 8 79 72 7 72"></polygon>\n      </svg>\n  </div>\n\n  <div class="loader">\n      <svg viewBox="0 0 80 80">\n          <rect x="8" y="8" width="64" height="64"></rect>\n      </svg>\n  </div>',
      customClass: "swal2-loading",
      showClass: { popup: "animate__animated animate__fadeIn" },
      hideClass: { popup: "animate__animated animate__fadeOut" },
      background: "none",
      backdrop: "#ffffff",
    });
  }
  confirm({
    title: e,
    text: a,
    html: t,
    confirmButtonText: s = Be.t("button.confirm"),
    confirmCallback: l = null,
    heightAuto: i = !1,
  }) {
    return this.provider.fire({
      title: e,
      text: a,
      html: t,
      customClass: "swal2-confirm",
      confirmButtonText: s,
      heightAuto: i,
      showCancelButton: !0,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      preConfirm() {
        null == l || l();
      },
    });
  }
  close() {
    this.provider.close();
  }
}
za.prototype.install = function (e) {
  const a = "alert-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Ta = new za(),
  La = Object.freeze(
    Object.defineProperty(
      { __proto__: null, AlertService: za, default: Ta },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class Ba {
  constructor(e, a = {}) {
    this.instance = te.create(f({ baseURL: e }, a));
  }
  init() {
    this.instance.defaults.validateStatus = (e) => e >= 200 && e < 300;
  }
  use(...e) {
    e.forEach((e) => {
      var a;
      null == (a = e.use) || a.call(e, this.instance);
    });
  }
}
const Ea = {
    use(e) {
      e.interceptors.request.use(
        function (e) {
          const a = V.get("token");
          return a && (e.headers.Authorization = `Bearer ${a}`), e;
        },
        function (e) {
          return Promise.reject(e);
        }
      );
    },
  },
  Pa = (e, { rejectNil: a, rejectEmpty: t }) =>
    M(
      (s, l) => {
        const i = e[l];
        return (a && E(i)) || (t && se(i)) ? s : le(l, i, s);
      },
      {},
      $(e)
    ),
  Ia = {
    use(e) {
      e.interceptors.request.use(
        function (e) {
          const {
            rejectNil: a = !0,
            rejectEmpty: t = !1,
            isFormData: s = !1,
          } = e;
          if (
            (e.params &&
              (e.params = Pa(e.params, { rejectNil: a, rejectEmpty: t })),
            e.data &&
              ((e.data = Pa(e.data, { rejectNil: a, rejectEmpty: t })), s))
          ) {
            const a = new FormData();
            ie((t) => {
              e.data[t] instanceof Array
                ? ie((e) => {
                    a.append(`${t}[]`, e);
                  }, e.data[t])
                : a.append(t, e.data[t]);
            }, $(e.data)),
              (e.data = a);
          }
          return e;
        },
        function (e) {
          return Promise.reject(e);
        }
      ),
        e.interceptors.response.use(
          async function (e) {
            return e.data;
          },
          function (e) {
            return Promise.reject(e);
          }
        );
    },
  },
  Aa = te.create();
(Aa.defaults.baseURL = {}.VITE_REMOTE_API),
  (Aa.defaults.validateStatus = (e) => e >= 200 && e < 300);
const Ma = {
  async "read/marquee"() {
    const e = await Aa.get("/app/user/news", {
        params: { type: 1 },
        novalidate: !0,
        noredirect: !0,
      }),
      a = await Aa.get("/app/withdraw", { novalidate: !0, noredirect: !0 });
    return { marquee: e.data, withdraw: a.data };
  },
};
const Da = {
  "set/popup"(e, a) {
    e.popupState = u(f({}, a), { $display: !0, $timestamp: Date.now() });
  },
  "clear/popup"(e) {
    e.popupState = { $display: !1, $timestamp: -1 };
  },
  "systm/Loading"(e, a) {
    e.isLoading = a;
  },
};
const $a = {
  async "read/marquee"() {
    const e = await Aa.get("/app/user/news", {
        params: { type: 1 },
        novalidate: !0,
        noredirect: !0,
      }),
      a = await Aa.get("/app/withdraw", { novalidate: !0, noredirect: !0 });
    return { marquee: e.data, withdraw: a.data };
  },
};
const Va = {
  "set/popup"(e, a) {
    e.popupState = u(f({}, a), { $display: !0, $timestamp: Date.now() });
  },
  "clear/popup"(e) {
    e.popupState = { $display: !1, $timestamp: -1 };
  },
};
const Ua = {
  "../store/app/actions.js": Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ma },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/app/getters.js": Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          isTip: (e) => (a) => -1 !== e.tips.findIndex((e) => e.type === a),
          getTypeFirstItem: (e) => (a) => e.tips.find((e) => e.type === a),
          getHadValueTypeFirstItem: (e) => (a) =>
            e.tips.find((e) => e.type === a && "" !== e.msg),
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/app/mutations.js": Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Da },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/app/state.js": Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: () => ({
          marquee: [],
          popupState: { $display: !1, $timestamp: -1 },
          tips: [],
          isLoading: !0,
        }),
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/auth/actions.js": Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $a },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/auth/getters.js": Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          isTip: (e) => (a) => -1 !== e.tips.findIndex((e) => e.type === a),
          getTypeFirstItem: (e) => (a) => e.tips.find((e) => e.type === a),
          getHadValueTypeFirstItem: (e) => (a) =>
            e.tips.find((e) => e.type === a && "" !== e.msg),
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/auth/mutations.js": Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Va },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/auth/state.js": Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: () => ({
          marquee: [],
          popupState: { $display: !1, $timestamp: -1 },
          tips: [],
        }),
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
};
let Fa = {};
const Ha = (e, a, t) => {
  const [s, ...l] = e;
  return l.length
    ? { [s]: { namespaced: !0, modules: Ha(l, a, t) } }
    : { [s]: { namespaced: !0, [a]: t } };
};
for (let Fo in Ua) {
  const e = Fo.replace("../store/", "")
    .toLowerCase()
    .replace(".js", "")
    .split("/");
  Fa = ne(Fa, Ha(re(e), oe(e), Ua[Fo].default));
}
var Ra = Fa;
const Na = {},
  Wa = function (e, a) {
    return a && 0 !== a.length
      ? Promise.all(
          a.map((e) => {
            if ((e = `./${e}`) in Na) return;
            Na[e] = !0;
            const a = e.endsWith(".css"),
              t = a ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${t}`)) return;
            const s = document.createElement("link");
            return (
              (s.rel = a ? "stylesheet" : "modulepreload"),
              a || ((s.as = "script"), (s.crossOrigin = "")),
              (s.href = e),
              document.head.appendChild(s),
              a
                ? new Promise((a, t) => {
                    s.addEventListener("load", a),
                      s.addEventListener("error", () =>
                        t(new Error(`Unable to preload CSS for ${e}`))
                      );
                  })
                : void 0
            );
          })
        ).then(() => e())
      : e();
  };
const Xa = (e) => (de("data-v-7daf12f0"), (e = e()), ce(), e),
  Ya = { class: "footer" },
  Za = { class: "container" },
  Ga = { class: "row row-justify-center" },
  Ka = Xa(() =>
    y(
      "div",
      { class: "col col-lg-3 col-md-12" },
      [
        y("div", { class: "footer_group cc-above" }, [
          y("h3", { class: "u-ts-6 u-text-secondary" }, "Email us"),
          y("ul", { role: "list", class: "footer_list" }, [
            y("li", { class: "footer_list-item" }, [
              y(
                "a",
                {
                  href: "mailto:hello@basis.work",
                  class: "footer_link w-inline-block",
                },
                [y("div", { class: "u-ts-3" }, "hello@basis.work")]
              ),
            ]),
          ]),
        ]),
        y("div", { class: "footer_group" }, [
          y("h3", { class: "u-ts-6 u-text-secondary" }, "Social"),
          y("ul", { role: "list", class: "footer_list" }, [
            y("li", { class: "footer_list-item" }, [
              y(
                "a",
                {
                  href: "https://www.instagram.com/basis.work/",
                  target: "_blank",
                  class: "footer_link w-inline-block",
                },
                [y("div", { class: "u-ts-3" }, "Instagram")]
              ),
            ]),
            y("li", { class: "footer_list-item" }, [
              y(
                "a",
                {
                  href: "https://www.linkedin.com/company/basisstudio/",
                  target: "_blank",
                  class: "footer_link w-inline-block",
                },
                [y("div", { class: "u-ts-3" }, "Linkedin")]
              ),
            ]),
          ]),
        ]),
      ],
      -1
    )
  ),
  Qa = Xa(() =>
    y(
      "div",
      { class: "col col-lg-3 col-md-12" },
      [
        y("div", { class: "footer_group" }, [
          y("h3", { class: "u-ts-6 u-text-secondary" }, "Navigation"),
          y("ul", { role: "list", class: "footer_list" }, [
            y("li", { class: "footer_list-item" }, [
              y("a", { href: "/", class: "footer_link w-inline-block" }, [
                y("div", { class: "u-ts-3" }, "Overview"),
              ]),
            ]),
            y("li", { class: "footer_list-item" }, [
              y("a", { href: "/cases", class: "footer_link w-inline-block" }, [
                y("div", { class: "u-ts-3" }, "Cases"),
              ]),
            ]),
            y("li", { class: "footer_list-item" }, [
              y("a", { href: "/about", class: "footer_link w-inline-block" }, [
                y("div", { class: "u-ts-3" }, "Services"),
              ]),
            ]),
            y("li", { class: "footer_list-item" }, [
              y(
                "a",
                { href: "/design-trial", class: "footer_link w-inline-block" },
                [y("div", { class: "u-ts-3" }, "Design Trial")]
              ),
            ]),
            y("li", { class: "footer_list-item" }, [
              y(
                "a",
                {
                  href: "/fintech-design",
                  "aria-current": "page",
                  class: "footer_link w-inline-block w--current",
                },
                [y("div", { class: "u-ts-3" }, "Fintech Design")]
              ),
            ]),
          ]),
        ]),
      ],
      -1
    )
  ),
  Ja = Xa(() => y("div", { class: "col col-md-hide" }, null, -1)),
  et = { class: "col col-lg-4 col-md-12 col-md-first" },
  at = { href: "/", class: "footer-wordmark w-inline-block" },
  tt = { class: "wordmark w-embed" },
  st = ["src"],
  lt = Xa(() =>
    y(
      "div",
      { class: "footer-copyright" },
      [
        y("div", { "data-copyright": "" }, [
          Z(" Copyright © "),
          y("span", { "data-dynamic": "year" }, "2024"),
        ]),
      ],
      -1
    )
  );
var it = Se(
  {
    setup: (e) => (e, a) => (
      g(),
      b("footer", Ya, [
        y("div", Za, [
          y("div", Ga, [
            Ka,
            Qa,
            Ja,
            y("div", et, [
              y("a", at, [
                y("div", tt, [
                  y("img", { src: w(ke)("logo.png"), alt: "" }, null, 8, st),
                ]),
              ]),
            ]),
          ]),
          lt,
        ]),
      ])
    ),
  },
  [["__scopeId", "data-v-7daf12f0"]]
);
const ot = {
    components: { Footer: it },
    setup() {
      const { t: e } = $e();
      return { t: e };
    },
  },
  rt = y(
    "header",
    { "data-mouse-class": "cc-icon", class: "header cc-large" },
    [
      y("div", { class: "nav_mode w-embed" }),
      y(
        "div",
        {
          class: "header-image_wrap",
          style: {
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)",
            "transform-style": "preserve-3d",
          },
        },
        [
          y("img", {
            src:
              "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55233c_hero_fintech-design.webp",
            loading: "eager",
            alt: "",
            sizes: "100vw",
            srcset:
              "\n          https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55233c_hero_fintech-design-p-500.jpg   500w,\n          https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55233c_hero_fintech-design-p-800.jpg   800w,\n          https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55233c_hero_fintech-design-p-1080.jpg 1080w,\n          https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55233c_hero_fintech-design-p-1600.jpg 1600w,\n          https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55233c_hero_fintech-design-p-2000.jpg 2000w,\n          https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55233c_hero_fintech-design-p-2600.jpg 2600w,\n          https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55233c_hero_fintech-design.webp       3200w\n        ",
            class: "header-image",
            style: {
              "will-change": "transform",
              transform:
                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)",
              "transform-style": "preserve-3d",
            },
          }),
          y(
            "div",
            {
              class: "header-image",
              style: {
                "will-change": "transform",
                transform:
                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)",
                "transform-style": "preserve-3d",
              },
            },
            [
              y("div", { class: "iframe-video_wrapper" }, [
                y("iframe", {
                  class: "iframe-video_iframe",
                  width: "100%",
                  height: "100%",
                  style: { overflow: "hidden" },
                  frameborder: "0",
                  scrolling: "no",
                  allow: "fullscreen",
                  src:
                    "https://app.vidzflow.com/v/pp8Z52ZnCB?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&piv=true&bc=%234E5FFD&controls=false",
                  title: "Services 1",
                  loading: "lazy",
                }),
                y("div", { class: "iframe-video_blocker" }),
              ]),
            ]
          ),
        ]
      ),
      y("div", { class: "header-content_wrapper" }, [
        y("div", { class: "container" }, [
          y("div", { class: "row" }, [
            y(
              "div",
              {
                "data-animation-trigger": "transition",
                "data-animation-element": "group",
                class: "col col-lg-6 col-md-12",
              },
              [
                y("div", { class: "header-content_main" }, [
                  y("div", { class: "text-wrap-balance" }, [
                    y(
                      "h1",
                      {
                        "data-animation-element": "title",
                        class: "h4",
                        style: {},
                      },
                      [
                        y(
                          "div",
                          {
                            class: "u-overflow-hidden",
                            style: {
                              display: "block",
                              "text-align": "start",
                              position: "relative",
                            },
                          },
                          [
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " Basis "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " gets "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " you "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " closer "
                            ),
                          ]
                        ),
                        y(
                          "div",
                          {
                            class: "u-overflow-hidden",
                            style: {
                              display: "block",
                              "text-align": "start",
                              position: "relative",
                            },
                          },
                          [
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " to "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " your "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " long-term "
                            ),
                          ]
                        ),
                        y(
                          "div",
                          {
                            class: "u-overflow-hidden",
                            style: {
                              display: "block",
                              "text-align": "start",
                              position: "relative",
                            },
                          },
                          [
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " vision, "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " first "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " by "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " meeting "
                            ),
                          ]
                        ),
                        y(
                          "div",
                          {
                            class: "u-overflow-hidden",
                            style: {
                              display: "block",
                              "text-align": "start",
                              position: "relative",
                            },
                          },
                          [
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " your "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " short-term "
                            ),
                            y(
                              "div",
                              {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0%)",
                                },
                              },
                              " goals. "
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  y(
                    "div",
                    {
                      class: "header-content_cta",
                      style: {
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                        opacity: "1",
                      },
                    },
                    [
                      y("div", { class: "header-content_icon w-embed" }, [
                        y(
                          "svg",
                          {
                            width: "100%",
                            style: {},
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          [
                            y("path", {
                              d:
                                "M10.4384 2.2207C10.6795 2.2207 10.875 2.40725 10.875 2.63737V16.1124L14.7524 12.404C14.8344 12.3252 14.946 12.2808 15.0624 12.2808C15.1788 12.2808 15.2904 12.3252 15.3724 12.404L15.9837 12.9957C16.0664 13.0739 16.1128 13.1804 16.1128 13.2915C16.1128 13.4026 16.0664 13.5091 15.9837 13.5874L10.6305 18.704C10.5078 18.8213 10.3413 18.8872 10.1677 18.8874H9.83581C9.66254 18.8854 9.49674 18.8198 9.37298 18.704L4.01978 13.5874C3.93712 13.5091 3.89062 13.4026 3.89062 13.2915C3.89062 13.1804 3.93712 13.0739 4.01978 12.9957L4.63981 12.404C4.72029 12.3256 4.83046 12.2815 4.94546 12.2815C5.06046 12.2815 5.17062 12.3256 5.2511 12.404L9.12846 16.1124V2.63737C9.12846 2.40725 9.32395 2.2207 9.5651 2.2207H10.4384Z",
                              fill: "black",
                            }),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
      y("div", { "data-transition": "in", class: "header-trigger" }),
    ],
    -1
  ),
  nt = y("div", { class: "spacing" }, null, -1),
  dt = y(
    "section",
    { class: "section" },
    [
      y("div", { class: "section-title_component" }, [
        y("div", { class: "container" }, [
          y("div", { class: "section-title_wrapper" }, [
            y("div", { class: "section-title_dot", style: { opacity: "1" } }, [
              y("div", {
                class: "section-title_dot-fill",
                style: { width: "100%", height: "100%" },
              }),
            ]),
            y("div", { class: "u-overflow-hidden" }, [
              y(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [y("h2", { class: "u-ts-4" }, "Work with Basis")]
              ),
            ]),
          ]),
        ]),
      ]),
      y("div", { class: "container" }, [
        y("div", { class: "w-layout-grid pair-grid" }, [
          y(
            "div",
            { id: "w-node-e8a07e93-34f6-be32-54f2-b34bf2439e43-af55239f" },
            [
              y("div", { class: "case-details is-about" }, [
                y("div", { class: "u-ts-4" }, [
                  y("div", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "case-detail_title cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y(
                          "h2",
                          { class: "u-ts-4 u-text-mid" },
                          "Project inquiries"
                        ),
                      ]
                    ),
                  ]),
                  y(
                    "a",
                    {
                      href: "mailto:hello@basis.work",
                      class: "case-detail_item cc-1",
                      style: {
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                        opacity: "1",
                      },
                    },
                    "hello@basis.work"
                  ),
                ]),
                y("div", { class: "u-ts-4" }, [
                  y("div", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "case-detail_title cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("h2", { class: "u-ts-4 u-text-mid" }, "Join the team")]
                    ),
                  ]),
                  y(
                    "a",
                    {
                      href: "mailto:jobs@basis.work",
                      class: "case-detail_item cc-2",
                      style: {
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                        opacity: "1",
                      },
                    },
                    "jobs@basis.work"
                  ),
                ]),
              ]),
            ]
          ),
          y(
            "div",
            {
              id: "w-node-_2eada710-eca2-ae0e-be9f-54fbff32a11c-af55239f",
              class: "content",
            },
            [
              y(
                "div",
                {
                  "data-animation-element": "paragraphs",
                  class: "content-p cc-1",
                  style: {
                    transform: "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                    opacity: "1",
                  },
                },
                [
                  y(
                    "p",
                    { class: "u-ts-1 u-mb-0" },
                    " Startups and enterprises hire us when they can’t afford to fail. As the technology of our world gets increasingly more complex, your brand and product are being asked to adapt to more situations, more platforms, more devices, and a more global audience than ever. That’s why you need the expertise of a studio that builds true systems: From the first touch of brand awareness to the product needs of your most engaged user, Basis sees it all as part of one holistic experience. "
                  ),
                ]
              ),
              y("div", { class: "btn-group" }, [
                y(
                  "div",
                  {
                    class: "btn-item cc-1",
                    style: {
                      opacity: "1",
                      transform: "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    y(
                      "a",
                      {
                        href:
                          "https://calendly.com/basis-studio/30min?month=2024-02",
                        target: "_blank",
                        class: "btn w-inline-block",
                      },
                      [
                        y("div", { class: "btn-text-wrap" }, [
                          y("div", { class: "btn-text" }, "Start a project"),
                          y(
                            "div",
                            { class: "btn-text cc-bottom" },
                            "Start a project"
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    class: "btn-item cc-2",
                    style: {
                      opacity: "1",
                      transform: "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    y(
                      "a",
                      {
                        href: "/design-trial",
                        class: "btn cc-secondary w-inline-block",
                      },
                      [
                        y("div", { class: "btn-text-wrap" }, [
                          y("div", { class: "btn-text" }, "Design trial"),
                          y(
                            "div",
                            { class: "btn-text cc-bottom" },
                            "Design trial"
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          ),
        ]),
        y("div", { class: "sticky-pair cc-far" }, [
          y("div", { class: "w-layout-grid pair-grid" }, [
            y("div", { class: "div-block" }, [
              y("div", { class: "card-wrapper cc-small" }, [
                y("div", { class: "card-animation cc-40" }, [
                  y(
                    "div",
                    {
                      "data-mouse-class": "cc-none",
                      class: "card",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                        opacity: "1",
                      },
                    },
                    [
                      y("div", { class: "card-image_wrapper" }, [
                        y("img", {
                          loading: "lazy",
                          sizes: "100vw",
                          srcset:
                            "\n                        https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552359_meet-bases-01-p-500.jpg 500w,\n                        https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552359_meet-bases-01.webp      886w\n                      ",
                          alt: "",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552359_meet-bases-01.webp",
                          class: "card-image",
                          style: {
                            "will-change": "transform",
                            transform: "translate3d(0px, -20%, 0px)",
                            "transform-style": "preserve-3d",
                          },
                        }),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
            y("div", { class: "card-wrapper cc-large" }, [
              y("div", { class: "card-animation cc-40" }, [
                y(
                  "div",
                  {
                    "data-mouse-class": "cc-none",
                    class: "card cc-large",
                    style: {
                      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                      opacity: "1",
                    },
                  },
                  [
                    y("div", { class: "card-image_wrapper" }, [
                      y("img", {
                        loading: "lazy",
                        sizes: "100vw",
                        srcset:
                          "\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02-p-500.jpg   500w,\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02-p-800.jpg   800w,\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02-p-1080.jpg 1080w,\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02-p-1600.jpg 1600w,\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02.webp       1818w\n                    ",
                        alt: "",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02.webp",
                        class: "card-image",
                        style: {
                          "will-change": "transform",
                          transform: "translate3d(0px, -20%, 0px)",
                          "transform-style": "preserve-3d",
                        },
                      }),
                    ]),
                  ]
                ),
              ]),
            ]),
            y(
              "div",
              {
                id: "w-node-ce72eb91-efb6-6f0b-43b7-a66f9003cbae-af55239f",
                class: "content",
              },
              [
                y(
                  "div",
                  {
                    "data-animation-element": "paragraphs",
                    class: "content-p cc-1",
                    style: {
                      transform: "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                      opacity: "1",
                    },
                  },
                  [
                    y(
                      "p",
                      { class: "u-ts-1" },
                      " Whether it’s shaping a new venture 0 → 1, evolving an existing company 1 → N, or taking an industry leader from N → XYZ, Basis has a formula that delivers results in record time. Our team is respected for crafting world-class experiences through our signature Product and Brand Trials, led by Michal Škvarenina, the design director behind digital experiences for Google, Airbnb, Red Bull, Mastercard, PC Financial, and more. "
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    "data-animation-element": "paragraphs",
                    class: "content-p cc-2",
                    style: {
                      transform: "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                      opacity: "1",
                    },
                  },
                  [
                    y(
                      "p",
                      { class: "u-ts-1" },
                      " When you want to build enduring digital products for an increasingly-digital future, first establish your Basis. "
                    ),
                  ]
                ),
                y("div", { class: "btn-group" }, [
                  y(
                    "div",
                    {
                      class: "btn-item cc-1",
                      style: {
                        opacity: "1",
                        transform:
                          "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [
                      y(
                        "a",
                        {
                          href:
                            "https://calendly.com/basis-studio/30min?month=2024-02",
                          target: "_blank",
                          class: "btn w-inline-block",
                        },
                        [
                          y("div", { class: "btn-text-wrap" }, [
                            y("div", { class: "btn-text" }, "Start a project"),
                            y(
                              "div",
                              { class: "btn-text cc-bottom" },
                              "Start a project"
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    {
                      class: "btn-item cc-2",
                      style: {
                        opacity: "1",
                        transform:
                          "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [
                      y(
                        "a",
                        {
                          href: "/design-trial",
                          class: "btn cc-secondary w-inline-block",
                        },
                        [
                          y("div", { class: "btn-text-wrap" }, [
                            y("div", { class: "btn-text" }, "Design trial"),
                            y(
                              "div",
                              { class: "btn-text cc-bottom" },
                              "Design trial"
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
      y("div", { class: "u-mt-8-75", "data-v-57509004": "" }, [
        y("div", { class: "marquee", "data-v-57509004": "" }, [
          y("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            y(
              "div",
              {
                role: "list",
                class: "marquee_content w-dyn-items",
                "data-v-57509004": "",
                style: {
                  transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                  "will-change": "transform",
                },
              },
              [
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-1",
                        "data-v-57509004": "",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          loading: "eager",
                          "data-aos": "fade-up",
                          "data-aos-delay": "300",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                          alt: "",
                          class: "marquee_logo aos-init aos-animate",
                          "data-v-57509004": "",
                        }),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-2",
                        "data-v-57509004": "",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          loading: "eager",
                          "data-aos": "fade-up",
                          "data-aos-delay": "400",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                          alt: "",
                          class: "marquee_logo aos-init aos-animate",
                          "data-v-57509004": "",
                        }),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-3",
                        "data-v-57509004": "",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          loading: "eager",
                          "data-aos": "fade-up",
                          "data-aos-delay": "500",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                          alt: "",
                          class: "marquee_logo aos-init aos-animate",
                          "data-v-57509004": "",
                        }),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-4",
                        "data-v-57509004": "",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          loading: "eager",
                          "data-aos": "fade-up",
                          "data-aos-delay": "600",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                          alt: "",
                          class: "marquee_logo aos-init aos-animate",
                          "data-v-57509004": "",
                        }),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-5",
                        "data-v-57509004": "",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          loading: "eager",
                          "data-aos": "fade-up",
                          "data-aos-delay": "700",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                          alt: "",
                          class: "marquee_logo aos-init aos-animate",
                          "data-v-57509004": "",
                        }),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-6",
                        "data-v-57509004": "",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          loading: "eager",
                          "data-aos": "fade-up",
                          "data-aos-delay": "800",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                          alt: "",
                          class: "marquee_logo aos-init aos-animate",
                          "data-v-57509004": "",
                        }),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-7",
                        "data-v-57509004": "",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          loading: "eager",
                          "data-aos": "fade-up",
                          "data-aos-delay": "900",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                          alt: "",
                          class: "marquee_logo aos-init aos-animate",
                          "data-v-57509004": "",
                        }),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-8",
                        "data-v-57509004": "",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          loading: "eager",
                          "data-aos": "fade-up",
                          "data-aos-delay": "1000",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                          alt: "",
                          class: "marquee_logo aos-init aos-animate",
                          "data-v-57509004": "",
                        }),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-9",
                        "data-v-57509004": "",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          loading: "eager",
                          "data-aos": "fade-up",
                          "data-aos-delay": "1100",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552412_logo_prosody.png",
                          alt: "",
                          class: "marquee_logo aos-init aos-animate",
                          "data-v-57509004": "",
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
          y("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            y(
              "div",
              {
                role: "list",
                class: "marquee_content w-dyn-items",
                "data-v-57509004": "",
                style: {
                  transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                  "will-change": "transform",
                },
              },
              [
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552412_logo_prosody.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
              ]
            ),
          ]),
          y("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            y(
              "div",
              {
                role: "list",
                class: "marquee_content w-dyn-items",
                "data-v-57509004": "",
                style: {
                  transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                  "will-change": "transform",
                },
              },
              [
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    y("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552412_logo_prosody.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
              ]
            ),
          ]),
        ]),
      ]),
    ],
    -1
  ),
  ct = y(
    "section",
    { class: "section" },
    [
      y("div", { class: "section-title_component" }, [
        y("div", { class: "container" }, [
          y("div", { class: "section-title_wrapper" }, [
            y("div", { class: "section-title_dot", style: { opacity: "1" } }),
            y("div", { class: "u-overflow-hidden" }, [
              y(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [y("h2", { class: "u-ts-4" }, "What we do")]
              ),
            ]),
          ]),
        ]),
      ]),
      y("div", { class: "container" }, [
        y("div", { "data-animation-element": "group", class: "row" }, [
          y("div", { class: "col col-lg-4 col-md-hide" }),
          y("div", { class: "col" }, [
            y("div", { class: "service-list" }, [
              y("div", { class: "logomark_component" }, [
                y(
                  "div",
                  {
                    class: "logomark w-embed",
                    style: {
                      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    y(
                      "svg",
                      {
                        height: "100%",
                        style: {},
                        viewBox: "0 0 185 80",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      [
                        y("path", {
                          d:
                            "M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z",
                          fill: "currentColor",
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
              y("ul", { role: "list", class: "u-mt-3-5" }, [
                y("li", { class: "u-overflow-hidden" }, [
                  y(
                    "div",
                    {
                      class: "list-content cc-1",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [y("h3", { class: "u-tc-caps" }, "Research")]
                  ),
                ]),
                y("li", { class: "u-overflow-hidden" }, [
                  y(
                    "div",
                    {
                      class: "list-content cc-2",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [y("h3", { class: "u-tc-caps" }, "Brand Strategy")]
                  ),
                ]),
                y("li", { class: "u-overflow-hidden" }, [
                  y(
                    "div",
                    {
                      class: "list-content cc-3",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [y("h3", { class: "u-tc-caps" }, "Creative Direction")]
                  ),
                ]),
                y("li", { class: "u-overflow-hidden" }, [
                  y(
                    "div",
                    {
                      class: "list-content cc-4",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [y("h3", { class: "u-tc-caps" }, "Brand identity")]
                  ),
                ]),
                y("li", { class: "u-overflow-hidden" }, [
                  y(
                    "div",
                    {
                      class: "list-content cc-5",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [y("h3", { class: "u-tc-caps" }, "UX & UI Design")]
                  ),
                ]),
                y("li", { class: "u-overflow-hidden" }, [
                  y(
                    "div",
                    {
                      class: "list-content cc-6",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [y("h3", { class: "u-tc-caps" }, "Interaction Design")]
                  ),
                ]),
                y("li", { class: "u-overflow-hidden" }, [
                  y(
                    "div",
                    {
                      class: "list-content cc-7",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [y("h3", { class: "u-tc-caps" }, "Implementation")]
                  ),
                ]),
                y("li", { class: "u-overflow-hidden" }, [
                  y(
                    "div",
                    {
                      class: "list-content cc-8",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [y("h3", { class: "u-tc-caps" }, "Webflow Development")]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
    -1
  ),
  pt = pe(
    '<section class="section"><div class="section-title_component"><div class="container"><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700"><div class="section-title_dot" style="opacity:1;"></div><div class="u-overflow-hidden"><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><h2 class="u-ts-4">Contact Us</h2></div></div></div></div></div><div class="container"><div class="w-layout-grid pair-grid"><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext"><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"><div style="position:relative;display:inline-block;"> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    1
  );
var vt = Se(ot, [
    [
      "render",
      function (e, a, t, s, l, i) {
        const o = S("Footer");
        return g(), b(_, null, [rt, nt, dt, ct, pt, L(o)], 64);
      },
    ],
  ]),
  mt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ft = {
    title: "pages.home.nav.about",
    setup() {
      const { t: e } = $e();
      return { t: e };
    },
  },
  ut = { class: "about" },
  gt = [
    y(
      "div",
      { role: "listitem", class: "cases-item w-dyn-item" },
      [
        y(
          "a",
          {
            "data-mouse-class": "cc-text",
            href: "/cases/sable-brand",
            class: "cases-card cc-immediate w-inline-block",
            style: {
              transform:
                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)",
              "transform-style": "preserve-3d",
              opacity: "1",
            },
          },
          [
            y("div", { class: "cases-assets" }, [
              y("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                loading: "lazy",
                alt: "",
                class: "cases-portrait",
              }),
              y("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                loading: "eager",
                alt: "",
                class: "cases-landscape",
              }),
              y("div", { class: "iframe-video_wrapper" }, [
                y("iframe", {
                  class: "iframe-video_iframe",
                  width: "100%",
                  height: "100%",
                  style: { overflow: "hidden" },
                  frameborder: "0",
                  scrolling: "no",
                  allow: "fullscreen",
                  src:
                    "https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                  title: "Sable 12",
                  loading: "lazy",
                }),
                y("div", { class: "iframe-video_blocker" }),
              ]),
            ]),
            y("div", { class: "cases-text" }, [
              y("div", { class: "u-ts-2" }, "Sable Brand"),
            ]),
          ]
        ),
        y("link", { rel: "prerender", href: "/cases/sable-brand" }),
        y(
          "a",
          {
            "data-mouse-text": "Contact Us",
            "data-mouse-class": "cc-text",
            href: "mailto:hello@basis.work?subject=Enquiry",
            class:
              "cases-card cc-immediate w-inline-block w-condition-invisible",
            style: {
              transform:
                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)",
              "transform-style": "preserve-3d",
              opacity: "1",
            },
          },
          [
            y("div", { class: "cases-assets" }, [
              y("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                loading: "lazy",
                alt: "",
                class: "cases-portrait w-condition-invisible",
              }),
              y("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                loading: "lazy",
                alt: "",
                class: "cases-landscape w-condition-invisible",
              }),
              y("div", null, [
                y("div", { class: "iframe-video_wrapper" }, [
                  y("iframe", {
                    class: "iframe-video_iframe",
                    width: "100%",
                    height: "100%",
                    style: { overflow: "hidden" },
                    frameborder: "0",
                    scrolling: "no",
                    allow: "fullscreen",
                    src:
                      "https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                    title: "Sable 12",
                    loading: "lazy",
                  }),
                  y("div", { class: "iframe-video_blocker" }),
                ]),
              ]),
            ]),
            y("div", { class: "cases-text" }, [
              y("div", { class: "cases-more" }, [
                y("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                  Z(" Contact us"),
                  y("span", { class: "hide-tablet" }, " for more"),
                ]),
              ]),
              y("div", { class: "u-ts-2" }, "Sable Brand"),
            ]),
          ]
        ),
      ],
      -1
    ),
  ];
var bt = Se(ft, [
    [
      "render",
      function (e, a, t, s, l, i) {
        return g(), b("div", ut, gt);
      },
    ],
  ]),
  yt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: bt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ht = {
    layout: "layout-demo",
    setup() {
      const e = ua(),
        { t: a, locale: t, setPrefix: s, change: l } = $e();
      s({ $current: "pages.demo" });
      const i = R(),
        o = G("alert-service"),
        r = ve({ current: t.value || "zh-tw" });
      return (
        q(() => {}),
        {
          t: a,
          lang: r,
          toHome: () => {
            i.push("/home");
          },
          swalModal: () => {
            o.alert({
              title: a("$current.modal.swal.title"),
              text: a("$current.modal.swal"),
            });
          },
          changeLang: () => {
            const e = "zh-tw" === r.current ? "en" : "zh-tw";
            (r.current = e), l(e);
          },
          popupModal: async () => {
            await e.modal({ title: "popup", text: "this a popup" });
          },
        }
      );
    },
  },
  wt = { class: "demo" },
  _t = { class: "demo-head" },
  xt = { class: "switch" },
  kt = y("input", { type: "checkbox", class: "cb" }, null, -1),
  jt = [
    y("span", { class: "left" }, "CN", -1),
    y("span", { class: "right" }, "En", -1),
  ],
  Ct = { class: "demo-head-content" },
  qt = { class: "demo-actions" },
  St = { class: "radio-inputs" },
  Ot = y("input", { type: "radio", name: "radio", checked: "" }, null, -1),
  zt = { class: "name" },
  Tt = y("input", { type: "radio", name: "radio" }, null, -1),
  Lt = { class: "name" },
  Bt = y("input", { type: "radio", name: "radio" }, null, -1),
  Et = { class: "name" };
var Pt = Se(ht, [
    [
      "render",
      function (e, a, t, s, l, i) {
        return (
          g(),
          b("div", wt, [
            y("div", _t, [
              y("div", null, [
                y("label", xt, [
                  kt,
                  y(
                    "span",
                    {
                      class: "toggle",
                      onClick:
                        a[0] ||
                        (a[0] = (...e) => s.changeLang && s.changeLang(...e)),
                    },
                    jt
                  ),
                ]),
              ]),
              y("div", Ct, "lang:" + X(s.lang.current), 1),
            ]),
            y("div", qt, [
              y("div", St, [
                y(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[1] || (a[1] = (...e) => s.toHome && s.toHome(...e)),
                  },
                  [Ot, y("span", zt, X(s.t("$current.router.link")), 1)]
                ),
                y(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[2] ||
                      (a[2] = (...e) => s.swalModal && s.swalModal(...e)),
                  },
                  [Tt, y("span", Lt, X(s.t("$current.modal.swal")), 1)]
                ),
                y(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[3] ||
                      (a[3] = (...e) => s.popupModal && s.popupModal(...e)),
                  },
                  [Bt, y("span", Et, X(s.t("$current.popup.use")), 1)]
                ),
              ]),
            ]),
          ])
        );
      },
    ],
  ]),
  It = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const At = (e) =>
    new URL(
      {
        "../assets/video/home/buddha1.mp4": "./assets/buddha1.67a44e84.mp4",
        "../assets/video/home/knife1-1.mp4": "./assets/knife1-1.b68125a7.mp4",
        "../assets/video/home/knife1-2.mp4": "./assets/knife1-2.5bc3c5fd.mp4",
        "../assets/video/home/knife2-1.mp4": "./assets/knife2-1.1510456d.mp4",
        "../assets/video/home/knife2-3.mp4": "./assets/knife2-3.db814c22.mp4",
        "../assets/video/home/knife2-4.mp4": "./assets/knife2-4.0d587ad1.mp4",
        "../assets/video/home/tea_1.mp4": "./assets/tea_1.8e120b16.mp4",
      }[`../assets/video/${e}`],
      self.location
    ).href,
  Mt = {
    components: { Footer: it },
    setup() {
      const { t: e } = $e();
      return (
        q(() => {
          const e = new IntersectionObserver((e) => {
            e.forEach((e) => {
              e.isIntersecting
                ? e.target.classList.add("active")
                : e.target.classList.remove("active");
            });
          });
          document.querySelectorAll(".target_line").forEach((a) => {
            e.observe(a);
          });
        }),
        { t: e, getVideoUrl: At }
      );
    },
  },
  Dt = { "data-mouse-class": "cc-icon", class: "header cc-large" },
  $t = {
    class: "header-image_wrap",
    style: {
      transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)",
      "transform-style": "preserve-3d",
    },
  },
  Vt = {
    class: "header-image",
    style: {
      "will-change": "transform",
      transform: "translate3d(0px, -0.0648%, 0px)",
      "transform-style": "preserve-3d",
    },
  },
  Ut = { class: "iframe-video_wrapper" },
  Ft = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Ht = ["src"],
  Rt = Z(" Your browser does not support the video tag. "),
  Nt = y("div", { class: "iframe-video_blocker" }, null, -1),
  Wt = pe(
    '<div class="header-content_wrapper"><div class="container"><div class="row"><div data-animation-trigger="transition" data-animation-element="group" class="col col-lg-6 col-md-12"><div class="header-content_main"><div class="text-wrap-balance"><h1 data-animation-element="title" class="h4" style=""><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> The </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> agency </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> for </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> the </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> next </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> generation </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> of </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> fintech. </div></div></h1></div><div class="header-content_cta" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;"><div class="header-content_icon w-embed"><svg width="100%" style="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4384 2.2207C10.6795 2.2207 10.875 2.40725 10.875 2.63737V16.1124L14.7524 12.404C14.8344 12.3252 14.946 12.2808 15.0624 12.2808C15.1788 12.2808 15.2904 12.3252 15.3724 12.404L15.9837 12.9957C16.0664 13.0739 16.1128 13.1804 16.1128 13.2915C16.1128 13.4026 16.0664 13.5091 15.9837 13.5874L10.6305 18.704C10.5078 18.8213 10.3413 18.8872 10.1677 18.8874H9.83581C9.66254 18.8854 9.49674 18.8198 9.37298 18.704L4.01978 13.5874C3.93712 13.5091 3.89062 13.4026 3.89062 13.2915C3.89062 13.1804 3.93712 13.0739 4.01978 12.9957L4.63981 12.404C4.72029 12.3256 4.83046 12.2815 4.94546 12.2815C5.06046 12.2815 5.17062 12.3256 5.2511 12.404L9.12846 16.1124V2.63737C9.12846 2.40725 9.32395 2.2207 9.5651 2.2207H10.4384Z" fill="black"></path></svg></div></div></div></div></div></div></div><div data-transition="in" class="header-trigger"></div>',
    2
  ),
  Xt = y("div", { class: "spacing" }, null, -1),
  Yt = y(
    "div",
    { class: "container" },
    [y("div", { class: "target_line" })],
    -1
  ),
  Zt = y(
    "section",
    { class: "section" },
    [
      y("div", { class: "section-title_component" }, [
        y("div", { class: "container" }, [
          y("div", { class: "section-title_wrapper" }, [
            y("div", { class: "section-title_dot", style: { opacity: "1" } }, [
              y("div", {
                class: "section-title_dot-fill",
                style: { width: "100%", height: "100%" },
              }),
            ]),
            y("div", { class: "u-overflow-hidden" }, [
              y(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [y("h2", { class: "u-ts-4" }, "Fintech Design Specialists")]
              ),
            ]),
          ]),
        ]),
      ]),
      y("div", { class: "container" }, [
        y("div", { class: "w-layout-grid pair-grid" }, [
          y(
            "div",
            {
              id: "w-node-_88e3e548-f2e0-1176-a852-0e15f232b846-af55239c",
              class: "content",
            },
            [
              y(
                "div",
                {
                  class: "content-p cc-1",
                  style: {
                    transform: "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                    opacity: "1",
                  },
                },
                [
                  y(
                    "p",
                    { class: "u-ts-1 u-mb-0" },
                    " It’s an industry unlike any other. From credit cards to neobanks and personal finance apps, the whole array of fintech is a crowded, highly-regulated landscape that demands the attention of specialists. The world is going through a digital finance revolution—find your product's place in it with Basis. "
                  ),
                ]
              ),
            ]
          ),
        ]),
        y("div", { class: "sticky-pair cc-far" }, [
          y("div", { class: "w-layout-grid pair-grid" }, [
            y("div", { class: "div-block" }, [
              y("div", { class: "card-wrapper cc-small" }, [
                y("div", { class: "card-animation cc-40" }, [
                  y(
                    "div",
                    {
                      "data-mouse-class": "cc-none",
                      class: "card",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                        opacity: "1",
                      },
                    },
                    [
                      y("div", { class: "card-image_wrapper" }, [
                        y("div", { class: "iframe-video_wrapper" }, [
                          y("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            src:
                              "https://app.vidzflow.com/v/h69w08i83W?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                            title: "Sable 1",
                            loading: "lazy",
                          }),
                          y("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      y("div", { class: "card-body" }, [
                        y("div", { class: "u-overflow-hidden" }, [
                          y(
                            "div",
                            {
                              class: "card-up",
                              style: {
                                transform:
                                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                                "transform-style": "preserve-3d",
                              },
                            },
                            [
                              y(
                                "h4",
                                { class: "u-ts-4" },
                                "In-app credit score"
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
            y("div", { class: "card-wrapper cc-large" }, [
              y("div", { class: "card-animation cc-40" }, [
                y(
                  "div",
                  {
                    "data-mouse-class": "cc-none",
                    class: "card cc-large",
                    style: {
                      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                      opacity: "1",
                    },
                  },
                  [
                    y("div", { class: "card-image_wrapper" }, [
                      y("div", { class: "iframe-video_wrapper" }, [
                        y("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          src:
                            "https://app.vidzflow.com/v/NHDnlIjW0Q?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                          title: "Sable 4",
                          loading: "lazy",
                        }),
                        y("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    y("div", { class: "card-body" }, [
                      y("div", { class: "u-overflow-hidden" }, [
                        y(
                          "div",
                          {
                            class: "card-up",
                            style: {
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [
                            y("div", { class: "card-large_text" }, [
                              y(
                                "h4",
                                { class: "u-ts-4" },
                                "Glow-in-the-dark credit card"
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
            y(
              "div",
              {
                id: "w-node-_197491fd-e75f-5caa-bd6c-f56fc5e78edc-af55239c",
                class: "content",
              },
              [
                y(
                  "div",
                  {
                    class: "content-p cc-1",
                    style: {
                      transform: "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                      opacity: "1",
                    },
                  },
                  [
                    y(
                      "p",
                      { class: "u-ts-1" },
                      " After rebranding banks, producing sleek new cards, and seamlessly integrating those elements into cohesive, future-proof brands, Basis can deliver results in record time. Get started with our Fintech Trial and get design results for your most essential deliverables in three weeks. "
                    ),
                  ]
                ),
                y("div", { class: "btn-group" }, [
                  y(
                    "div",
                    {
                      class: "btn-item cc-1",
                      style: {
                        opacity: "1",
                        transform:
                          "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [
                      y(
                        "a",
                        {
                          href: "mailto:hello@basis.work?subject=Enquiry",
                          class: "btn w-inline-block",
                        },
                        [
                          y("div", { class: "btn-text-wrap" }, [
                            y("div", { class: "btn-text" }, "Contact Us"),
                            y(
                              "div",
                              { class: "btn-text cc-bottom" },
                              "Contact Us"
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    {
                      class: "btn-item cc-2",
                      style: {
                        opacity: "1",
                        transform:
                          "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [
                      y(
                        "a",
                        {
                          href: "/design-trial",
                          class: "btn cc-secondary w-inline-block",
                        },
                        [
                          y("div", { class: "btn-text-wrap" }, [
                            y(
                              "div",
                              {
                                class: "btn-text",
                                style: {
                                  transform:
                                    "translate3d(0%, 0px, 0px) scale3d(1, 1, 1)",
                                  "transform-style": "preserve-3d",
                                },
                              },
                              " Design Trial "
                            ),
                            y(
                              "div",
                              {
                                class: "btn-text cc-bottom",
                                style: {
                                  transform:
                                    "translate3d(0%, 0px, 0px) scale3d(1, 1, 1)",
                                  "transform-style": "preserve-3d",
                                },
                              },
                              " Design Trial "
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
    ],
    -1
  ),
  Gt = y(
    "div",
    { class: "container" },
    [y("div", { class: "target_line" })],
    -1
  ),
  Kt = y(
    "section",
    { class: "section" },
    [
      y("div", { class: "section-title_component" }, [
        y("div", { class: "container" }, [
          y("div", { class: "section-title_wrapper" }, [
            y("div", { class: "section-title_dot", style: { opacity: "1" } }),
            y("div", { class: "u-overflow-hidden" }, [
              y(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [y("h2", { class: "u-ts-4" }, "Fintech Capabilities")]
              ),
            ]),
          ]),
        ]),
      ]),
      y("div", { class: "container" }, [
        y("div", { class: "w-layout-grid pair-grid" }, [
          y(
            "div",
            {
              id: "w-node-b0cbec4a-56c8-e8e7-790a-68e14ee2ef27-af55239c",
              class: "service-list",
            },
            [
              y("div", { class: "service-list" }, [
                y("div", { class: "logomark_component" }, [
                  y(
                    "div",
                    {
                      class: "logomark w-embed",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [
                      y(
                        "svg",
                        {
                          height: "100%",
                          style: {},
                          viewBox: "0 0 185 80",
                          fill: "currentColor",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          y("path", {
                            d:
                              "M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z",
                            fill: "currentColor",
                          }),
                        ]
                      ),
                    ]
                  ),
                ]),
                y("ul", { role: "list", class: "u-mt-3-5" }, [
                  y("li", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "list-content cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("h3", { class: "u-tc-caps" }, "Digital Banking,")]
                    ),
                  ]),
                  y("li", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "list-content cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("h3", { class: "u-tc-caps" }, "Credit Card Designs,")]
                    ),
                  ]),
                  y("li", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "list-content cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("h3", { class: "u-tc-caps" }, "Digital Wallets,")]
                    ),
                  ]),
                  y("li", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "list-content cc-4",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("h3", { class: "u-tc-caps" }, "Payment Services,")]
                    ),
                  ]),
                  y("li", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "list-content cc-5",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("h3", { class: "u-tc-caps" }, "Card Packaging,")]
                    ),
                  ]),
                  y("li", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "list-content cc-6",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y(
                          "h3",
                          { class: "u-tc-caps" },
                          "Information Architecture,"
                        ),
                      ]
                    ),
                  ]),
                  y("li", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "list-content cc-7",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("h3", { class: "u-tc-caps" }, "Mobile Apps,")]
                    ),
                  ]),
                  y("li", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "list-content cc-8",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("h3", { class: "u-tc-caps" }, "Prototypes,")]
                    ),
                  ]),
                  y("li", { class: "u-overflow-hidden" }, [
                    y(
                      "div",
                      {
                        class: "list-content cc-9",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("h3", { class: "u-tc-caps" }, "Gamification.")]
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
    ],
    -1
  ),
  Qt = y(
    "div",
    { class: "container" },
    [y("div", { class: "target_line" })],
    -1
  ),
  Jt = y(
    "section",
    { class: "section" },
    [
      y("div", { class: "section-title_component" }, [
        y("div", { class: "container" }, [
          y("div", { class: "section-title_wrapper" }, [
            y("div", { class: "section-title_dot", style: { opacity: "1" } }),
            y("div", { class: "u-overflow-hidden" }, [
              y(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [y("h2", { class: "u-ts-4" }, "Fintech Work")]
              ),
            ]),
          ]),
        ]),
      ]),
      y("div", { class: "container" }, [
        y("div", { class: "row" }, [y("div", { class: "col" })]),
        y("div", { class: "w-dyn-list" }, [
          y("div", { role: "list", class: "row w-dyn-items" }, [
            y("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              y(
                "div",
                {
                  "data-w-id": "ca292e3d-cff1-64ba-f24a-14ac357cf62c",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    opacity: "1",
                    "transform-style": "preserve-3d",
                  },
                  class: "cases-auto",
                },
                [
                  y(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-brand",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      y("div", { class: "cases-assets" }, [
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait w-condition-invisible",
                        }),
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape w-condition-invisible",
                        }),
                        y("div", null, [
                          y("div", { class: "iframe-video_wrapper" }, [
                            y("iframe", {
                              class: "iframe-video_iframe",
                              width: "100%",
                              height: "100%",
                              style: { overflow: "hidden" },
                              frameborder: "0",
                              scrolling: "no",
                              allow: "fullscreen",
                              src:
                                "https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                              title: "Sable 12",
                              loading: "lazy",
                            }),
                            y("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]),
                      ]),
                      y("div", { class: "cases-text cc-auto" }, [
                        y("div", { class: "u-ts-2" }, "Sable Brand"),
                      ]),
                    ]
                  ),
                  y("link", { rel: "prerender", href: "/cases/sable-brand" }),
                  y(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      y("div", { class: "cases-assets" }, [
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        y("div", { class: "iframe-video_wrapper" }, [
                          y("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            src:
                              "https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                            title: "Sable 12",
                            loading: "lazy",
                          }),
                          y("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      y("div", { class: "cases-text" }, [
                        y("div", { class: "cases-more" }, [
                          y(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              Z(" Contact us"),
                              y("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        y("div", { class: "u-ts-2" }, "Sable Brand"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            y("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              y(
                "div",
                {
                  "data-w-id": "ca292e3d-cff1-64ba-f24a-14ac357cf62c",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    opacity: "1",
                    "transform-style": "preserve-3d",
                  },
                  class: "cases-auto",
                },
                [
                  y(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-website",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      y("div", { class: "cases-assets" }, [
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        y("div", { class: "w-condition-invisible" }, [
                          y("div", { class: "iframe-video_wrapper" }, [
                            y("iframe", {
                              class: "iframe-video_iframe",
                              width: "100%",
                              height: "100%",
                              style: { overflow: "hidden" },
                              frameborder: "0",
                              scrolling: "no",
                              allow: "fullscreen",
                              loading: "lazy",
                            }),
                            y("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]),
                      ]),
                      y("div", { class: "cases-text cc-auto" }, [
                        y("div", { class: "u-ts-2" }, "Sable Website"),
                      ]),
                    ]
                  ),
                  y("link", { rel: "prerender", href: "/cases/sable-website" }),
                  y(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      y("div", { class: "cases-assets" }, [
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        y("div", { class: "iframe-video_wrapper" }, [
                          y("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          y("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      y("div", { class: "cases-text" }, [
                        y("div", { class: "cases-more" }, [
                          y(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              Z(" Contact us"),
                              y("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        y("div", { class: "u-ts-2" }, "Sable Website"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            y("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              y(
                "div",
                {
                  "data-w-id": "ca292e3d-cff1-64ba-f24a-14ac357cf62c",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    opacity: "1",
                    "transform-style": "preserve-3d",
                  },
                  class: "cases-auto",
                },
                [
                  y(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/seen-brand",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      y("div", { class: "cases-assets" }, [
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait w-condition-invisible",
                        }),
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape w-condition-invisible",
                        }),
                        y("div", null, [
                          y("div", { class: "iframe-video_wrapper" }, [
                            y("iframe", {
                              class: "iframe-video_iframe",
                              width: "100%",
                              height: "100%",
                              style: { overflow: "hidden" },
                              frameborder: "0",
                              scrolling: "no",
                              allow: "fullscreen",
                              src:
                                "https://app.vidzflow.com/v/XBaN1uMmvl?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                              title: "Seen 1",
                              loading: "lazy",
                            }),
                            y("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]),
                      ]),
                      y("div", { class: "cases-text cc-auto" }, [
                        y("div", { class: "u-ts-2" }, "Seen Brand"),
                      ]),
                    ]
                  ),
                  y("link", { rel: "prerender", href: "/cases/seen-brand" }),
                  y(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      y("div", { class: "cases-assets" }, [
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        y("div", { class: "iframe-video_wrapper" }, [
                          y("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            src:
                              "https://app.vidzflow.com/v/XBaN1uMmvl?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                            title: "Seen 1",
                            loading: "lazy",
                          }),
                          y("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      y("div", { class: "cases-text" }, [
                        y("div", { class: "cases-more" }, [
                          y(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              Z(" Contact us"),
                              y("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        y("div", { class: "u-ts-2" }, "Seen Brand"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            y("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              y(
                "div",
                {
                  "data-w-id": "ca292e3d-cff1-64ba-f24a-14ac357cf62c",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    opacity: "1",
                    "transform-style": "preserve-3d",
                  },
                  class: "cases-auto",
                },
                [
                  y(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-app",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      y("div", { class: "cases-assets" }, [
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        y("div", { class: "w-condition-invisible" }, [
                          y("div", { class: "iframe-video_wrapper" }, [
                            y("iframe", {
                              class: "iframe-video_iframe",
                              width: "100%",
                              height: "100%",
                              style: { overflow: "hidden" },
                              frameborder: "0",
                              scrolling: "no",
                              allow: "fullscreen",
                              loading: "lazy",
                            }),
                            y("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]),
                      ]),
                      y("div", { class: "cases-text cc-auto" }, [
                        y("div", { class: "u-ts-2" }, "Sable App"),
                      ]),
                    ]
                  ),
                  y("link", { rel: "prerender", href: "/cases/sable-app" }),
                  y(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      y("div", { class: "cases-assets" }, [
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        y("div", { class: "iframe-video_wrapper" }, [
                          y("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          y("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      y("div", { class: "cases-text" }, [
                        y("div", { class: "cases-more" }, [
                          y(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              Z(" Contact us"),
                              y("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        y("div", { class: "u-ts-2" }, "Sable App"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ],
    -1
  ),
  es = pe(
    '<div class="container"><div class="target_line"></div></div><section class="section"><div class="section-title_component"><div class="container"><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700"><div class="section-title_dot" style="opacity:1;"></div><div class="u-overflow-hidden"><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><h2 class="u-ts-4">Contact Us</h2></div></div></div></div></div><div class="container"><div class="w-layout-grid pair-grid"><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext"><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"><div style="position:relative;display:inline-block;"> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  ),
  as = { class: "pre-footer" },
  ts = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  ss = { class: "iframe-video_wrapper" },
  ls = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  is = ["src"],
  os = Z(" Your browser does not support the video tag. "),
  rs = y("div", { class: "iframe-video_blocker" }, null, -1),
  ns = pe(
    '<div class="pre-footer_gradient"></div><div class="marquee"><div class="marquee_content cc-text transparent" style="transform:translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;will-change:transform;"><div class="marquee_item cc-1 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-2 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-3 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div></div><div class="marquee_content cc-text transparent" style="transform:translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;will-change:transform;"><div class="marquee_item cc-1 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-2 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-3 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div></div></div><div class="pre-footer_button"><div class="btn cc-large-landscape"><div class="btn-text-wrap"><div class="btn-text cc-large-landscape">REad Next</div><div class="btn-text cc-bottom cc-large-landscape">Button</div></div></div></div>',
    3
  );
var ds = Se(Mt, [
    [
      "render",
      function (e, a, t, s, l, i) {
        const o = S("Footer");
        return (
          g(),
          b(
            _,
            null,
            [
              y("header", Dt, [
                y("div", $t, [
                  y("div", Vt, [
                    y("div", Ut, [
                      y("video", Ft, [
                        y(
                          "source",
                          {
                            src: s.getVideoUrl("home/knife1-1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          Ht
                        ),
                        Rt,
                      ]),
                      Nt,
                    ]),
                  ]),
                ]),
                Wt,
              ]),
              Xt,
              Yt,
              Zt,
              Gt,
              Kt,
              Qt,
              Jt,
              es,
              y("div", null, [
                y("aside", as, [
                  y("a", ts, [
                    y("div", ss, [
                      y("video", ls, [
                        y(
                          "source",
                          {
                            src: s.getVideoUrl("home/knife1-1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          is
                        ),
                        os,
                      ]),
                      rs,
                    ]),
                    ns,
                  ]),
                ]),
              ]),
              L(o),
            ],
            64
          )
        );
      },
    ],
  ]),
  cs = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ds },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ps = ["data-index"],
  vs = ["src"],
  ms = [
    pe(
      '<div class="btn-text-wrap"><div class="btn-text cc-scroll">請往下滑</div><div class="btn-text cc-bottom cc-scroll">請往下滑</div></div><div class="btn-icon cc-small w-embed"><svg width="100%" style="" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.30218 1.55469C7.47098 1.55469 7.60782 1.68527 7.60782 1.84635V11.2789L10.322 8.68302C10.3794 8.6278 10.4575 8.59675 10.539 8.59675C10.6205 8.59675 10.6986 8.6278 10.756 8.68302L11.1839 9.09719C11.2418 9.15195 11.2743 9.2265 11.2743 9.30427C11.2743 9.38204 11.2418 9.45659 11.1839 9.51135L7.43666 13.093C7.35076 13.1751 7.23423 13.2213 7.11267 13.2214H6.88038C6.75909 13.22 6.64303 13.174 6.5564 13.093L2.80916 9.51135C2.7513 9.45659 2.71875 9.38204 2.71875 9.30427C2.71875 9.2265 2.7513 9.15195 2.80916 9.09719L3.24318 8.68302C3.29952 8.62815 3.37663 8.59723 3.45713 8.59723C3.53763 8.59723 3.61475 8.62815 3.67109 8.68302L6.38523 11.2789V1.84635C6.38523 1.68527 6.52208 1.55469 6.69088 1.55469H7.30218Z" fill="currentColor"></path></svg></div>',
      2
    ),
  ];
const fs = {
  components: {
    Footer: it,
    View: {
      setup(e) {
        const a = x(),
          t = ve({ x: 0, y: 0 }),
          s = k([
            {
              url: "home/opening/1.jpg",
              css: {
                width: "17vw",
                height: "20.2vw",
                left: "1%",
                top: "60%",
                m_right: "3000px",
                m_top: "0%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 2.5s forwards",
                leaveAnimation: "fadeOut 1s forwards",
              },
              isEnter: !0,
            },
            {
              url: "home/opening/2.jpg",
              css: {
                width: "16.5vw",
                height: "21.3vw",
                left: "11%",
                top: "10%",
                m_right: "3000px",
                m_top: "0%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 1.5s forwards",
                leaveAnimation: "fadeOut 1s forwards",
              },
              isEnter: !0,
            },
            {
              url: "home/opening/3.jpg",
              css: {
                width: "21.3vw",
                height: "16.6vw",
                m_width: "55.9vw",
                m_height: "42.5vw",
                left: "22%",
                top: "45%",
                m_right: "71%",
                m_top: "44%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 3.5s forwards",
                leaveAnimation: "fadeOut 1s forwards",
              },
              isEnter: !0,
            },
            {
              url: "home/opening/4.jpg",
              css: {
                width: "15.5vw",
                height: "16.6vw",
                m_width: "42.5vw",
                m_height: "42.5vw",
                left: "31%",
                top: "72%",
                m_right: "73%",
                m_top: "80%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 2s forwards",
                leaveAnimation: "fadeOut 1s forwards",
              },
              isEnter: !0,
            },
            {
              url: "home/opening/5.jpg",
              css: {
                width: "24vw",
                height: "19.6vw",
                m_width: "34vw",
                m_height: "34vw",
                left: "33%",
                top: "-1%",
                m_right: "-2%",
                m_top: "1%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 1s forwards",
                leaveAnimation: "fadeOut 1s forwards",
              },
              isEnter: !0,
            },
            {
              url: "home/opening/6.jpg",
              css: {
                width: "21.1vw",
                height: "26.3vw",
                m_width: "25.5vw",
                m_height: "33vw",
                left: "51%",
                top: "27%",
                m_right: "15%",
                m_top: "39%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 2.5s forwards",
                leaveAnimation: "fadeOut 1s forwards",
              },
              isEnter: !0,
            },
            {
              url: "home/opening/7.jpg",
              css: {
                width: "18.1vw",
                height: "21.8vw",
                m_width: "43.5vw",
                m_height: "50vw",
                left: "63%",
                top: "74%",
                m_right: "8%",
                m_top: "70%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 3s forwards",
                leaveAnimation: "fadeOut 1s forwards",
              },
              isEnter: !0,
            },
            {
              url: "home/opening/8.jpg",
              css: {
                width: "18.3vw",
                height: "14.6vw",
                m_width: "46.1vw",
                m_height: "35.7vw",
                left: "70%",
                top: "-4%",
                m_right: "57%",
                m_top: "15%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 3.5s forwards",
                leaveAnimation: "fadeOut 1s forwards",
              },
              isEnter: !0,
            },
            {
              url: "home/opening/9.jpg",
              css: {
                width: "22.8vw",
                height: "22vw",
                m_width: "36vw",
                m_height: "20vw",
                left: "83%",
                top: "33%",
                m_right: "-10%",
                m_top: "25%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 2s forwards",
                leaveAnimation: "fadeOut 1s forwards",
                objectAposition: "right",
              },
              isEnter: !0,
            },
            {
              url: "home/opening/10.jpg",
              css: {
                width: "21.3vw",
                height: "16.6vw",
                left: "86%",
                top: "69%",
                m_right: "30000px",
                m_top: "0%",
                transform: "translate3d(1px, 2px, 1px)",
                enterAnimation: "zoomIn 1.5s forwards",
                leaveAnimation: "fadeOut 1s forwards",
              },
              isEnter: !0,
            },
          ]),
          l = k(!1),
          i = {
            rootMargin: "0px",
            threshold: Array(100)
              .fill()
              .map((e, a) => 0.01 * a),
          },
          o = new IntersectionObserver((e) => {
            e.forEach((e) => {
              var a, t;
              const { intersectionRatio: l, target: i } = e,
                o = null == (a = i.dataset) ? void 0 : a.index;
              if ("img" === (null == (t = i.dataset) ? void 0 : t.item))
                s.value[o].isEnter = !(l < 0.4);
              else
                i.style.animation =
                  l < 0.6 ? "fadeOut 2s forwards" : "zoomIn 3.5s forwards";
            });
          }, i),
          r = () => {
            const e = document.getElementById("studio");
            if (e) {
              const a = e.offsetTop;
              window.scrollTo({ top: a, behavior: "smooth" });
            }
          };
        C(
          () => a.state.app.isLoading,
          (e) => {
            if (((l.value = !e), e)) {
              ((e) => {
                for (const a of e) o.unobserve(a);
              })([
                ...document.querySelectorAll(".img-wrap"),
                document.querySelector(".btn-scroll"),
              ]);
            } else
              me(() => {
                ((e) => {
                  for (const a of e) o.observe(a);
                })([
                  ...document.querySelectorAll(".img-wrap"),
                  document.querySelector(".btn-scroll"),
                ]);
              });
          }
        );
        const n = k(!1),
          d = () => {
            n.value = window.innerWidth < 991;
          };
        return (
          q(() => {
            d(), window.addEventListener("resize", d), fe.init();
          }),
          (e, a) => (
            g(),
            b(
              _,
              null,
              [
                y(
                  "div",
                  {
                    class: "view",
                    onMousemove:
                      a[0] ||
                      (a[0] = (e) =>
                        ((e) => {
                          if (window.innerWidth > 576) {
                            const a = window.innerWidth / 2,
                              s = window.innerHeight / 2;
                            (t.x = ((a - e.clientX) / 100) * 3),
                              (t.y = ((s - e.clientY) / 100) * 3);
                          }
                        })(e)),
                  },
                  [
                    l.value
                      ? (g(),
                        b(
                          "div",
                          {
                            key: 0,
                            class: "view-wrap",
                            style: W({
                              transform: `translate3d(${2 * w(t).x}px, ${
                                w(t).y
                              }px, 0) rotateX(${-w(t).y / 2}deg) rotateY(${
                                -w(t).x / 2
                              }deg)`,
                              transformOrigin: "center center",
                            }),
                          },
                          [
                            (g(!0),
                            b(
                              _,
                              null,
                              N(
                                s.value,
                                (e, a) => (
                                  g(),
                                  b(
                                    "div",
                                    {
                                      class: "img-wrap home-hero_image-placer",
                                      key: e.url + a,
                                      style: W({
                                        left: n.value ? "unset" : e.css.left,
                                        right: n.value
                                          ? e.css.m_right
                                          : "unset",
                                        top: n.value ? e.css.m_top : e.css.top,
                                        animation: e.isEnter
                                          ? e.css.enterAnimation
                                          : e.css.leaveAnimation,
                                      }),
                                      "data-index": a,
                                      "data-item": "img",
                                    },
                                    [
                                      y(
                                        "img",
                                        {
                                          src: w(ke)(e.url),
                                          style: W({
                                            width: n.value
                                              ? e.css.m_width
                                              : e.css.width,
                                            height: n.value
                                              ? e.css.m_height
                                              : e.css.height,
                                            transform: `translate3d(${
                                              w(t).x / 2
                                            }px,${w(t).y / 2}px, 100px)`,
                                          }),
                                        },
                                        null,
                                        12,
                                        vs
                                      ),
                                    ],
                                    12,
                                    ps
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          4
                        ))
                      : B("", !0),
                  ],
                  32
                ),
                y("div", { "data-reveal": "button", class: "home-hero_btn" }, [
                  y("div", { class: "btn-contain btn-contain-scroll" }, [
                    y(
                      "div",
                      { class: "btn-scroll w-inline-block", onClick: r },
                      ms
                    ),
                  ]),
                ]),
              ],
              64
            )
          )
        );
      },
    },
  },
  setup() {
    const e = k("");
    return (
      q(() => {
        document.querySelectorAll(".video-cover").forEach((e) => {
          e.play();
        });
        const e = new IntersectionObserver((e) => {
          e.forEach((e) => {
            e.isIntersecting
              ? e.target.classList.add("active")
              : e.target.classList.remove("active");
          });
        });
        document.querySelectorAll(".target_line").forEach((a) => {
          e.observe(a);
        });
      }),
      { a: e, getVideoUrl: At, getImageUrl: ke }
    );
  },
};
fe.init();
const us = (e) => (de("data-v-4bd0ac2f"), (e = e()), ce(), e),
  gs = us(() =>
    y("div", { class: "container" }, [y("div", { class: "target_line" })], -1)
  ),
  bs = { id: "studio", class: "section" },
  ys = pe(
    '<div class="section-title_component" data-v-4bd0ac2f><div class="container" data-v-4bd0ac2f><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-4bd0ac2f><div class="section-title_dot" style="opacity:1;" data-v-4bd0ac2f><div class="section-title_dot-fill" style="width:100%;height:100%;" data-v-4bd0ac2f></div></div><div class="u-overflow-hidden" data-v-4bd0ac2f><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><h2 class="u-ts-4" data-v-4bd0ac2f>詹紹綺人文藝術中心</h2></div></div></div></div></div><div class="container" data-v-4bd0ac2f><div class="w-layout-grid pair-grid" data-v-4bd0ac2f><div data-animation-element="group" id="w-node-_1d0de869-a418-1ffe-c192-cd0abecc9833-af552307" data-v-4bd0ac2f><h3 data-animation-element="title" style="" data-v-4bd0ac2f><div class="u-overflow-hidden" data-aos="fade-up" data-aos-duration="800" style="display:block;text-align:start;position:relative;" data-v-4bd0ac2f><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> 位於25樓雲海之中的藝術與文化博物館， </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-aos="fade-up" data-aos-duration="700" data-v-4bd0ac2f><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> 典藏冠軍高山茶、茶道具及名壺、雕塑、獨家出品普洱和單一純麥威士忌。 </div></div></h3><div class="btn-group" data-v-4bd0ac2f><div class="btn-item cc-1" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0px);opacity:1;" data-v-4bd0ac2f><a class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f> 館藏查詢 </div><div class="btn-text cc-bottom" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f> 館藏查詢 </div></div></a></div><div class="btn-item cc-2" data-aos="fade-up" data-aos-duration="3000" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0px);opacity:1;" data-v-4bd0ac2f><a href="/about" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f> 預約參觀 </div><div class="btn-text cc-bottom" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f> 預約參觀 </div></div></a></div></div></div></div></div>',
    2
  ),
  hs = { class: "u-mt-8-75" },
  ws = { class: "marquee" },
  _s = { class: "marquee_row w-dyn-list" },
  xs = {
    role: "list",
    class: "marquee_content w-dyn-items",
    style: {
      transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      "will-change": "transform",
    },
  },
  ks = { role: "listitem", class: "marquee_logo w-dyn-item" },
  js = {
    class: "marquee_item cc-1",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Cs = ["src"],
  qs = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Ss = {
    class: "marquee_item cc-2",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Os = ["src"],
  zs = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Ts = {
    class: "marquee_item cc-3",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ls = ["src"],
  Bs = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Es = {
    class: "marquee_item cc-4",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ps = ["src"],
  Is = { role: "listitem", class: "marquee_logo w-dyn-item" },
  As = {
    class: "marquee_item cc-5",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ms = ["src"],
  Ds = { role: "listitem", class: "marquee_logo w-dyn-item" },
  $s = {
    class: "marquee_item cc-6",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Vs = ["src"],
  Us = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Fs = {
    class: "marquee_item cc-7",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Hs = ["src"],
  Rs = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Ns = {
    class: "marquee_item cc-8",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ws = ["src"],
  Xs = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Ys = {
    class: "marquee_item cc-9",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Zs = ["src"],
  Gs = us(() =>
    y("div", { class: "container" }, [y("div", { class: "target_line" })], -1)
  ),
  Ks = { class: "section" },
  Qs = pe(
    '<div class="section-title_component" data-v-4bd0ac2f><div class="container" data-v-4bd0ac2f><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-4bd0ac2f><div class="section-title_dot" style="opacity:1;" data-v-4bd0ac2f><div class="section-title_dot-fill" style="width:100%;height:100%;" data-v-4bd0ac2f></div></div><div class="u-overflow-hidden" data-v-4bd0ac2f><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><h2 class="u-ts-4" data-v-4bd0ac2f>空間預約</h2></div></div></div></div></div>',
    1
  ),
  Js = { class: "container" },
  el = pe(
    '<div data-animation-element="group" data-v-4bd0ac2f><h3 data-animation-element="title" class="h1" style="" data-v-4bd0ac2f><div data-aos="fade-up" data-aos-duration="700" class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-4bd0ac2f><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> 詹紹綺人文藝術中心 </div></div><div class="u-overflow-hidden" data-aos="fade-up" data-aos-duration="700" style="display:block;text-align:start;position:relative;" data-v-4bd0ac2f><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> (Skyart7325)開放每日一組預約。 </div></div></h3></div>',
    1
  ),
  al = { class: "sticky-pair" },
  tl = { class: "w-layout-grid pair-grid" },
  sl = { id: "w-node-eb3e6ea8-5a10-d5fc-f561-3f621ba6f385-af552307" },
  ll = {
    id: "w-node-_137ddbb9-11b4-d169-f149-eca9f54873e8-af552307",
    class: "card-wrapper cc-small",
  },
  il = {
    id: "w-node-a3cc95fc-d4f5-0398-7194-1e8506932d8d-af552307",
    class: "w-dyn-list",
  },
  ol = { role: "list", class: "w-dyn-items" },
  rl = { role: "listitem", class: "w-dyn-item" },
  nl = { class: "card-wrapper cc-small" },
  dl = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  },
  cl = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  pl = { class: "card-image_wrapper" },
  vl = { class: "iframe-video_wrapper" },
  ml = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  fl = ["src"],
  ul = Z(" Your browser does not support the video tag. "),
  gl = us(() => y("div", { class: "iframe-video_blocker" }, null, -1)),
  bl = us(() =>
    y(
      "div",
      { class: "card-body", "data-aos": "fade-up", "data-aos-duration": "700" },
      [
        y("div", { class: "u-overflow-hidden" }, [
          y(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [y("h4", { class: "u-ts-4" }, "Skyart3725全景")]
          ),
        ]),
      ],
      -1
    )
  ),
  yl = {
    id: "w-node-_814776c7-59e4-1835-d274-f4eed26bca88-af552307",
    class: "w-dyn-list",
  },
  hl = { role: "list", class: "w-dyn-items" },
  wl = { role: "listitem", class: "w-dyn-item" },
  _l = { class: "card-wrapper cc-large" },
  xl = { class: "card-animation cc-40" },
  kl = {
    "data-mouse-class": "cc-text",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  jl = { class: "card-image_wrapper" },
  Cl = { class: "iframe-video_wrapper" },
  ql = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Sl = ["src"],
  Ol = Z(" Your browser does not support the video tag. "),
  zl = us(() => y("div", { class: "iframe-video_blocker" }, null, -1)),
  Tl = pe(
    '<div class="card-body" data-aos="fade-up" data-aos-duration="700" data-v-4bd0ac2f><div class="u-overflow-hidden" data-v-4bd0ac2f><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="card-large_text" data-v-4bd0ac2f><h4 class="u-ts-4" data-v-4bd0ac2f>多功能茶席空間</h4></div></div></div></div>',
    1
  ),
  Ll = pe(
    '<div id="w-node-bc6d1a98-c4cb-3434-3589-47eddb3c03ed-af552307" class="content" data-v-4bd0ac2f><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-4bd0ac2f><p class="u-ts-3" data-aos="fade-up" data-aos-duration="700" data-v-4bd0ac2f> 博物館有三區專業茶道茶席空間，最多可以招待8-20位嘉賓，每區飲水與視聽設備其齊全，靜待您與好友在雲頂與大師名作間沏壺閱茗。 </p></div><div class="btn-group" data-v-4bd0ac2f><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><a href="/cases" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text" data-v-4bd0ac2f>空間介紹</div><div class="btn-text cc-bottom" data-v-4bd0ac2f>空間介紹</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text" data-v-4bd0ac2f>立即預約</div><div class="btn-text cc-bottom" data-v-4bd0ac2f>立即預約</div></div></a></div></div></div>',
    1
  ),
  Bl = us(() =>
    y("div", { class: "container" }, [y("div", { class: "target_line" })], -1)
  ),
  El = { class: "section" },
  Pl = pe(
    '<div class="section-title_component" data-v-4bd0ac2f><div class="container" data-v-4bd0ac2f><div class="section-title_wrapper" data-v-4bd0ac2f><div class="section-title_dot" style="opacity:1;" data-v-4bd0ac2f></div><div class="u-overflow-hidden" data-v-4bd0ac2f><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><h2 class="u-ts-4" data-v-4bd0ac2f>Capabilities</h2></div></div></div></div></div>',
    1
  ),
  Il = { class: "container" },
  Al = { class: "w-layout-grid pair-grid" },
  Ml = { id: "w-node-_6e6a6411-9d71-b91d-1723-e94f35341c18-af552307" },
  Dl = { class: "service-list" },
  $l = { class: "logomark_component" },
  Vl = {
    class: "logomark w-embed",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ul = ["src"],
  Fl = us(() =>
    y(
      "ul",
      { role: "list", class: "u-mt-3-5" },
      [
        y(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "100",
          },
          [
            y(
              "div",
              {
                class: "list-content cc-1",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [y("h3", { class: "u-tc-caps" }, "定香人文")]
            ),
          ]
        ),
        y(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "150",
          },
          [
            y(
              "div",
              {
                class: "list-content cc-2",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [y("h3", { class: "u-tc-caps" }, "藝術品經紀")]
            ),
          ]
        ),
        y(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "200",
          },
          [
            y(
              "div",
              {
                class: "list-content cc-3",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [y("h3", { class: "u-tc-caps" }, "藝術品拍賣")]
            ),
          ]
        ),
        y(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "250",
          },
          [
            y(
              "div",
              {
                class: "list-content cc-4",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [y("h3", { class: "u-tc-caps" }, "台灣高山冠軍茶")]
            ),
          ]
        ),
        y(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "300",
          },
          [
            y(
              "div",
              {
                class: "list-content cc-5",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [y("h3", { class: "u-tc-caps" }, "雲南古樹普洱茶")]
            ),
          ]
        ),
        y(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "350",
          },
          [
            y(
              "div",
              {
                class: "list-content cc-6",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [y("h3", { class: "u-tc-caps" }, "精品咖啡")]
            ),
          ]
        ),
        y(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "400",
          },
          [
            y(
              "div",
              {
                class: "list-content cc-7",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [y("h3", { class: "u-tc-caps" }, "天幕茶碗")]
            ),
          ]
        ),
        y(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "450",
          },
          [
            y(
              "div",
              {
                class: "list-content cc-8",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [y("h3", { class: "u-tc-caps" }, "典藏名酒")]
            ),
          ]
        ),
      ],
      -1
    )
  ),
  Hl = pe(
    '<div class="btn-group" data-v-4bd0ac2f><div class="btn-item cc-1" style="transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-4bd0ac2f><a href="/about" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text" data-v-4bd0ac2f>藝品介紹</div><div class="btn-text cc-bottom" data-v-4bd0ac2f>藝品介紹</div></div></a></div></div>',
    1
  ),
  Rl = us(() =>
    y(
      "section",
      { class: "section" },
      [
        y("div", { class: "container" }, [
          y("div", { class: "row" }, [
            y("div", { "data-animation-element": "group", class: "col" }, [
              y(
                "h3",
                {
                  "data-animation-element": "title",
                  class: "h1",
                  style: {},
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                  "data-aos-delay": "600",
                },
                [
                  y(
                    "div",
                    {
                      class: "u-overflow-hidden",
                      style: {
                        display: "block",
                        "text-align": "start",
                        position: "relative",
                      },
                    },
                    [
                      y(
                        "div",
                        {
                          style: {
                            position: "relative",
                            display: "inline-block",
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0%)",
                          },
                        },
                        " 館藏特約藝術家 "
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
        y("div", { "data-apps": "component", class: "apps_component" }, [
          y("div", { class: "apps_media-wrapper" }, [
            y(
              "div",
              {
                "data-w-id": "9ec98ec5-fb8a-2716-02fa-7ef29f58135e",
                class: "apps_media-list",
              },
              [
                y(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "100",
                  },
                  [
                    y("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552308/65b7816c849994bfdb8d18b4_apps-mockup.png",
                      loading: "lazy",
                      "data-w-id": "4712a24f-d922-c9f3-e8a3-7b35338a5a7d",
                      sizes:
                        "(max-width: 479px) 80vw, (max-width: 767px) 232px, 24vw",
                      alt: "",
                      srcset:
                        "\n                https://assets-global.website-files.com/6584502438fea068af552308/65b7816c849994bfdb8d18b4_apps-mockup-p-500.png 500w,\n                https://assets-global.website-files.com/6584502438fea068af552308/65b7816c849994bfdb8d18b4_apps-mockup.png       750w\n              ",
                      class: "apps_asset cc-1",
                    }),
                  ]
                ),
                y(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "150",
                  },
                  [
                    y(
                      "div",
                      {
                        "data-w-id": "2aa36fa9-41c0-5a43-aa83-b39188bc3c2b",
                        class: "apps_asset cc-2 w-dyn-list",
                        style: {
                          transform:
                            "translate3d(0px, 20%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("div", { role: "list", class: "w-dyn-items" }, [
                          y("div", { role: "listitem", class: "w-dyn-item" }, [
                            y(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/sable-app",
                                class: "apps_link w-inline-block",
                              },
                              [
                                y("img", {
                                  alt: "",
                                  loading: "lazy",
                                  src:
                                    "https://assets-global.website-files.com/6584502438fea068af552349/65bcdadf450f31de60d06dc6_apps-sable.png",
                                  sizes:
                                    "(max-width: 479px) 80vw, (max-width: 767px) 232px, 24vw",
                                  srcset:
                                    "\n                        https://assets-global.website-files.com/6584502438fea068af552349/65bcdadf450f31de60d06dc6_apps-sable-p-500.png 500w,\n                        https://assets-global.website-files.com/6584502438fea068af552349/65bcdadf450f31de60d06dc6_apps-sable.png       750w\n                      ",
                                }),
                              ]
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "200",
                  },
                  [
                    y(
                      "div",
                      {
                        "data-w-id": "736ca15f-35ee-0e1c-219c-8c920cdd4f00",
                        class: "apps_asset cc-3 w-dyn-list",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("div", { role: "list", class: "w-dyn-items" }, [
                          y("div", { role: "listitem", class: "w-dyn-item" }, [
                            y(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/seen-app",
                                class: "apps_link w-inline-block",
                              },
                              [
                                y("img", {
                                  alt: "",
                                  loading: "lazy",
                                  src:
                                    "https://assets-global.website-files.com/6584502438fea068af552349/65b7815b96bdc600e01bd174_apps-seen.png",
                                  sizes:
                                    "(max-width: 479px) 80vw, (max-width: 767px) 232px, 24vw",
                                  srcset:
                                    "\n                        https://assets-global.website-files.com/6584502438fea068af552349/65b7815b96bdc600e01bd174_apps-seen-p-500.png 500w,\n                        https://assets-global.website-files.com/6584502438fea068af552349/65b7815b96bdc600e01bd174_apps-seen.png       750w\n                      ",
                                }),
                              ]
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    class: "apps_asset-wrapper cc-watch",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "250",
                  },
                  [
                    y(
                      "div",
                      {
                        "data-w-id": "c91f325d-7e75-3988-4f22-39b9870c8ae8",
                        class: "apps_asset cc-4",
                        style: {
                          transform:
                            "translate3d(0px, 5%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [
                        y("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552308/65b7816baa315cc23e4af8c8_apps-watch.png",
                          loading: "eager",
                          alt: "",
                          class: "apps_watch",
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
          y("div", { class: "apps_scroll" }, [
            y("div", { class: "mobile-scroll_cta" }, [
              y("div", { class: "mobile-scroll_icon w-embed" }, [
                y(
                  "svg",
                  {
                    width: "100%",
                    style: {},
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  [
                    y("path", {
                      d:
                        "M2.66406 11.4786C2.66406 11.1893 2.88792 10.9547 3.16406 10.9547L19.3341 10.9547L14.8841 6.30185C14.7894 6.20346 14.7362 6.06954 14.7362 5.92983C14.7362 5.79012 14.7894 5.6562 14.8841 5.55781L15.5941 4.82426C15.6879 4.72507 15.8157 4.66927 15.9491 4.66927C16.0824 4.66927 16.2102 4.72507 16.3041 4.82426L22.4441 11.2481C22.5848 11.3953 22.6639 11.5951 22.6641 11.8035L22.6641 12.2017C22.6618 12.4096 22.5829 12.6086 22.4441 12.7571L16.3041 19.1809C16.2102 19.2801 16.0824 19.3359 15.9491 19.3359C15.8157 19.3359 15.6879 19.2801 15.5941 19.1809L14.8841 18.4369C14.79 18.3403 14.737 18.2081 14.737 18.0701C14.737 17.9321 14.79 17.7999 14.8841 17.7034L19.3341 13.0505L3.16406 13.0505C2.88792 13.0505 2.66406 12.816 2.66406 12.5266L2.66406 11.4786Z",
                      fill: "currentColor",
                    }),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ],
      -1
    )
  ),
  Nl = { class: "section" },
  Wl = { class: "container" },
  Xl = pe(
    '<div class="row" data-v-4bd0ac2f><div data-animation-element="group" class="col" data-v-4bd0ac2f><h3 data-animation-element="title" class="h1" style="" data-aos="fade-up" data-aos-duration="700" data-v-4bd0ac2f><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-4bd0ac2f><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> 拍賣中心 </div></div></h3></div></div>',
    1
  ),
  Yl = { class: "sticky-pair" },
  Zl = { class: "w-layout-grid pair-grid is-leading" },
  Gl = {
    id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f41-af552307",
    class: "w-dyn-list",
  },
  Kl = { role: "list", class: "w-dyn-items" },
  Ql = { role: "listitem", class: "w-dyn-item" },
  Jl = { class: "card-wrapper cc-large" },
  ei = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  ai = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  ti = { class: "card-image_wrapper" },
  si = { class: "iframe-video_wrapper" },
  li = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  ii = ["src"],
  oi = Z(" Your browser does not support the video tag. "),
  ri = us(() => y("div", { class: "iframe-video_blocker" }, null, -1)),
  ni = pe(
    '<div class="card-body" data-v-4bd0ac2f><div class="u-overflow-hidden" data-v-4bd0ac2f><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="card-large_text" data-v-4bd0ac2f><h4 class="u-ts-4" data-v-4bd0ac2f>Skyart7325鑑賞中心</h4></div></div></div></div>',
    1
  ),
  di = {
    id: "w-node-e23686ee-2a5d-d68e-2ddf-02d095aea2fe-af552307",
    class: "card-wrapper cc-small",
  },
  ci = {
    id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f3a-af552307",
    class: "w-dyn-list",
  },
  pi = { role: "list", class: "w-dyn-items" },
  vi = { role: "listitem", class: "w-dyn-item" },
  mi = { class: "card-wrapper cc-small" },
  fi = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  ui = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  gi = { class: "card-image_wrapper" },
  bi = { class: "iframe-video_wrapper" },
  yi = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  hi = ["src"],
  wi = Z(" Your browser does not support the video tag. "),
  _i = us(() => y("div", { class: "iframe-video_blocker" }, null, -1)),
  xi = us(() =>
    y(
      "div",
      { class: "card-body" },
      [
        y("div", { class: "u-overflow-hidden" }, [
          y(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [y("h4", { class: "u-ts-4" }, "Sable App")]
          ),
        ]),
      ],
      -1
    )
  ),
  ki = pe(
    '<div id="w-node-_591e678b-2794-a4c1-b9e4-4c34713bcb6d-af552307" class="content is-grid" data-v-4bd0ac2f><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-4bd0ac2f><p class="u-ts-3" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-v-4bd0ac2f> Basis knows fintech. We’ve developed a strong focus on design for financial services, like mobile apps, bank brands, and credit card design. Our programs are optimized for startups, allowing Basis to start small, work fast, and keep you ahead of your roadmap. When the most innovative companies want to cut through a highly-regulated, ever-changing financial world, they come to the experts. </p></div><div class="btn-group" data-v-4bd0ac2f><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><a href="/fintech-design" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text" data-v-4bd0ac2f>Fintech services</div><div class="btn-text cc-bottom" data-v-4bd0ac2f>Fintech services</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text" data-v-4bd0ac2f>Design trial</div><div class="btn-text cc-bottom" data-v-4bd0ac2f>Design trial</div></div></a></div></div></div>',
    1
  ),
  ji = { class: "section" },
  Ci = { class: "container" },
  qi = pe(
    '<div class="row" data-v-4bd0ac2f><div data-animation-element="group" class="col" data-v-4bd0ac2f><h3 data-animation-element="title" class="h1" style="" data-aos="fade-up" data-aos-duration="1000" data-v-4bd0ac2f><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-4bd0ac2f><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> Branding </div></div></h3></div></div>',
    1
  ),
  Si = { class: "sticky-pair" },
  Oi = { class: "w-layout-grid pair-grid" },
  zi = { id: "w-node-dc0c39cf-ca9b-7980-3885-608a3bb047ce-af552307" },
  Ti = {
    id: "w-node-_22d42303-51c3-58a5-286f-187c6fce5e6a-af552307",
    class: "card-wrapper cc-small",
  },
  Li = {
    id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192626-af552307",
    class: "w-dyn-list",
  },
  Bi = { role: "list", class: "w-dyn-items" },
  Ei = { role: "listitem", class: "w-dyn-item" },
  Pi = { class: "card-wrapper cc-small" },
  Ii = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  Ai = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  Mi = { class: "card-image_wrapper" },
  Di = { class: "iframe-video_wrapper" },
  $i = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Vi = ["src"],
  Ui = Z(" Your browser does not support the video tag. "),
  Fi = us(() => y("div", { class: "iframe-video_blocker" }, null, -1)),
  Hi = us(() =>
    y(
      "div",
      { class: "card-body" },
      [
        y("div", { class: "u-overflow-hidden" }, [
          y(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [y("h4", { class: "u-ts-4" }, " Gaffa Brand & Website ")]
          ),
        ]),
      ],
      -1
    )
  ),
  Ri = {
    id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e19262d-af552307",
    class: "w-dyn-list",
  },
  Ni = { role: "list", class: "w-dyn-items" },
  Wi = { role: "listitem", class: "w-dyn-item" },
  Xi = { class: "card-wrapper cc-large" },
  Yi = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  },
  Zi = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  Gi = { class: "card-image_wrapper" },
  Ki = { class: "iframe-video_wrapper" },
  Qi = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Ji = ["src"],
  eo = Z(" Your browser does not support the video tag. "),
  ao = us(() => y("div", { class: "iframe-video_blocker" }, null, -1)),
  to = pe(
    '<div class="card-body" data-v-4bd0ac2f><div class="u-overflow-hidden" data-v-4bd0ac2f><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="card-large_text" data-v-4bd0ac2f><h4 class="u-ts-4" data-v-4bd0ac2f>Sable Brand</h4></div></div></div></div>',
    1
  ),
  so = pe(
    '<div id="w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192634-af552307" class="content is-grid" data-v-4bd0ac2f><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-4bd0ac2f><p class="u-ts-3" data-aos="fade-up" data-aos-duration="800" data-v-4bd0ac2f> Brand power: the multiple your customers will pay for your product, over that of your closest competition, because your name is on it. Basis drives brand power, because unlike other agencies that only focus on experience design or brand development, we seamlessly integrate both. When you start with Basis, we’ll build a brand book and product design kit that (finally) talk to each other. </p></div><div class="btn-group" data-v-4bd0ac2f><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><a href="/cases" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text" data-v-4bd0ac2f>View cases</div><div class="btn-text cc-bottom" data-v-4bd0ac2f>View cases</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f> Design trial </div><div class="btn-text cc-bottom" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f> Design trial </div></div></a></div></div></div>',
    1
  ),
  lo = pe(
    '<section class="section" data-v-4bd0ac2f><div class="section-title_component" data-v-4bd0ac2f><div class="container" data-v-4bd0ac2f><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-4bd0ac2f><div class="section-title_dot" style="opacity:1;" data-v-4bd0ac2f></div><div class="u-overflow-hidden" data-v-4bd0ac2f><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><h2 class="u-ts-4" data-v-4bd0ac2f>Contact Us</h2></div></div></div></div></div><div class="container" data-v-4bd0ac2f><div class="w-layout-grid pair-grid" data-v-4bd0ac2f><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67" data-v-4bd0ac2f><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext" data-v-4bd0ac2f><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700" data-v-4bd0ac2f><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-4bd0ac2f><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-4bd0ac2f><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-4bd0ac2f><div style="position:relative;display:inline-block;" data-v-4bd0ac2f> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    1
  ),
  io = { class: "pre-footer" },
  oo = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  ro = { class: "iframe-video_wrapper" },
  no = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  co = ["src"],
  po = Z(" Your browser does not support the video tag. "),
  vo = us(() => y("div", { class: "iframe-video_blocker" }, null, -1)),
  mo = pe(
    '<div class="pre-footer_gradient" data-v-4bd0ac2f></div><div class="marquee" data-v-4bd0ac2f><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Case Studies </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Case Studies </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Case Studies </div></div></div><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Case Studies </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Case Studies </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Case Studies </div></div></div></div><div class="pre-footer_button" data-v-4bd0ac2f><div class="btn cc-large-landscape" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text cc-large-landscape" data-v-4bd0ac2f>REad Next</div><div class="btn-text cc-bottom cc-large-landscape" data-v-4bd0ac2f>Button</div></div></div></div>',
    3
  ),
  fo = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  uo = { class: "iframe-video_wrapper" },
  go = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  bo = ["src"],
  yo = Z(" Your browser does not support the video tag. "),
  ho = us(() => y("div", { class: "iframe-video_blocker" }, null, -1)),
  wo = pe(
    '<div class="pre-footer_gradient" data-v-4bd0ac2f></div><div class="marquee" data-v-4bd0ac2f><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-69%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Design Trial </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Design Trial </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Design Trial </div></div></div><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-69%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Design Trial </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Design Trial </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-4bd0ac2f><div class="h1" data-v-4bd0ac2f>Design Trial </div></div></div></div><div class="pre-footer_button" data-v-4bd0ac2f><div class="btn cc-large-landscape" data-v-4bd0ac2f><div class="btn-text-wrap" data-v-4bd0ac2f><div class="btn-text cc-large-landscape" data-v-4bd0ac2f>REad Next</div><div class="btn-text cc-bottom cc-large-landscape" data-v-4bd0ac2f>Button</div></div></div></div>',
    3
  );
var _o = Se(fs, [
    [
      "render",
      function (e, a, t, s, l, i) {
        const o = S("View"),
          r = S("Footer");
        return (
          g(),
          b(
            _,
            null,
            [
              L(o),
              gs,
              y("section", bs, [
                ys,
                y("div", hs, [
                  y("div", ws, [
                    y("div", _s, [
                      y("div", xs, [
                        y("div", ks, [
                          y("div", js, [
                            y(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "300",
                                src: s.getImageUrl("home/img/1.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Cs
                            ),
                          ]),
                        ]),
                        y("div", qs, [
                          y("div", Ss, [
                            y(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "400",
                                src: s.getImageUrl("home/img/2.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Os
                            ),
                          ]),
                        ]),
                        y("div", zs, [
                          y("div", Ts, [
                            y(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500",
                                src: s.getImageUrl("home/img/3.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Ls
                            ),
                          ]),
                        ]),
                        y("div", Bs, [
                          y("div", Es, [
                            y(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "600",
                                src: s.getImageUrl("home/img/4.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Ps
                            ),
                          ]),
                        ]),
                        y("div", Is, [
                          y("div", As, [
                            y(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "700",
                                src: s.getImageUrl("home/img/5.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Ms
                            ),
                          ]),
                        ]),
                        y("div", Ds, [
                          y("div", $s, [
                            y(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "800",
                                src: s.getImageUrl("home/img/6.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Vs
                            ),
                          ]),
                        ]),
                        y("div", Us, [
                          y("div", Fs, [
                            y(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "900",
                                src: s.getImageUrl("home/img/6.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Hs
                            ),
                          ]),
                        ]),
                        y("div", Rs, [
                          y("div", Ns, [
                            y(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "1000",
                                src: s.getImageUrl("home/img/7.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Ws
                            ),
                          ]),
                        ]),
                        y("div", Xs, [
                          y("div", Ys, [
                            y(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "1100",
                                src: s.getImageUrl("home/img/8.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Zs
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              Gs,
              y("section", Ks, [
                Qs,
                y("div", Js, [
                  el,
                  y("div", al, [
                    y("div", tl, [
                      y("div", sl, [
                        y("div", ll, [
                          y("div", il, [
                            y("div", ol, [
                              y("div", rl, [
                                y("div", nl, [
                                  y("div", dl, [
                                    y("div", cl, [
                                      y("div", pl, [
                                        y("div", vl, [
                                          y("video", ml, [
                                            y(
                                              "source",
                                              {
                                                src: s.getVideoUrl(
                                                  "home/knife1-1.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              fl
                                            ),
                                            ul,
                                          ]),
                                          gl,
                                        ]),
                                      ]),
                                      bl,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      y("div", yl, [
                        y("div", hl, [
                          y("div", wl, [
                            y("div", _l, [
                              y("div", xl, [
                                y("div", kl, [
                                  y("div", jl, [
                                    y("div", Cl, [
                                      y("video", ql, [
                                        y(
                                          "source",
                                          {
                                            src: s.getVideoUrl(
                                              "home/knife1-2.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          Sl
                                        ),
                                        Ol,
                                      ]),
                                      zl,
                                    ]),
                                  ]),
                                  Tl,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      Ll,
                    ]),
                  ]),
                ]),
              ]),
              Bl,
              y("section", El, [
                Pl,
                y("div", Il, [
                  y("div", Al, [
                    y("div", Ml, [
                      y("div", Dl, [
                        y("div", $l, [
                          y("div", Vl, [
                            y(
                              "img",
                              { src: s.getImageUrl("logo.png"), alt: "" },
                              null,
                              8,
                              Ul
                            ),
                          ]),
                        ]),
                        Fl,
                        Hl,
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              Rl,
              y("section", Nl, [
                y("div", Wl, [
                  Xl,
                  y("div", Yl, [
                    y("div", Zl, [
                      y("div", Gl, [
                        y("div", Kl, [
                          y("div", Ql, [
                            y("div", Jl, [
                              y("div", ei, [
                                y("div", ai, [
                                  y("div", ti, [
                                    y("div", si, [
                                      y("video", li, [
                                        y(
                                          "source",
                                          {
                                            src: s.getVideoUrl(
                                              "home/knife2-3.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          ii
                                        ),
                                        oi,
                                      ]),
                                      ri,
                                    ]),
                                  ]),
                                  ni,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      y("div", null, [
                        y("div", di, [
                          y("div", ci, [
                            y("div", pi, [
                              y("div", vi, [
                                y("div", mi, [
                                  y("div", fi, [
                                    y("div", ui, [
                                      y("div", gi, [
                                        y("div", bi, [
                                          y("video", yi, [
                                            y(
                                              "source",
                                              {
                                                src: s.getVideoUrl(
                                                  "home/knife2-1.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              hi
                                            ),
                                            wi,
                                          ]),
                                          _i,
                                        ]),
                                      ]),
                                      xi,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      ki,
                    ]),
                  ]),
                ]),
              ]),
              y("section", ji, [
                y("div", Ci, [
                  qi,
                  y("div", Si, [
                    y("div", Oi, [
                      y("div", zi, [
                        y("div", Ti, [
                          y("div", Li, [
                            y("div", Bi, [
                              y("div", Ei, [
                                y("div", Pi, [
                                  y("div", Ii, [
                                    y("div", Ai, [
                                      y("div", Mi, [
                                        y("div", Di, [
                                          y("video", $i, [
                                            y(
                                              "source",
                                              {
                                                src: s.getVideoUrl(
                                                  "home/knife2-4.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              Vi
                                            ),
                                            Ui,
                                          ]),
                                          Fi,
                                        ]),
                                      ]),
                                      Hi,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      y("div", Ri, [
                        y("div", Ni, [
                          y("div", Wi, [
                            y("div", Xi, [
                              y("div", Yi, [
                                y("div", Zi, [
                                  y("div", Gi, [
                                    y("div", Ki, [
                                      y("video", Qi, [
                                        y(
                                          "source",
                                          {
                                            src: s.getVideoUrl(
                                              "home/knife1-2.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          Ji
                                        ),
                                        eo,
                                      ]),
                                      ao,
                                    ]),
                                  ]),
                                  to,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      so,
                    ]),
                  ]),
                ]),
              ]),
              lo,
              y("div", null, [
                y("aside", io, [
                  y("div", oo, [
                    y("div", ro, [
                      y("video", no, [
                        y(
                          "source",
                          {
                            src: s.getVideoUrl("home/buddha1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          co
                        ),
                        po,
                      ]),
                      vo,
                    ]),
                    mo,
                  ]),
                  y("div", fo, [
                    y("div", uo, [
                      y("video", go, [
                        y(
                          "source",
                          {
                            src: s.getVideoUrl("home/tea_1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          bo
                        ),
                        yo,
                      ]),
                      ho,
                    ]),
                    wo,
                  ]),
                ]),
              ]),
              L(r),
            ],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-4bd0ac2f"],
  ]),
  xo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _o },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ko = {
    "../pages/about.vue": () =>
      Wa(
        () =>
          Promise.resolve().then(function () {
            return mt;
          }),
        void 0
      ),
    "../pages/case.vue": () =>
      Wa(
        () =>
          Promise.resolve().then(function () {
            return yt;
          }),
        void 0
      ),
    "../pages/demo.vue": () =>
      Wa(
        () =>
          Promise.resolve().then(function () {
            return It;
          }),
        void 0
      ),
    "../pages/fintech-design.vue": () =>
      Wa(
        () =>
          Promise.resolve().then(function () {
            return cs;
          }),
        void 0
      ),
    "../pages/index.vue": () =>
      Wa(
        () =>
          Promise.resolve().then(function () {
            return xo;
          }),
        void 0
      ),
  },
  jo = {
    "../pages/about.vue": mt,
    "../pages/case.vue": yt,
    "../pages/demo.vue": It,
    "../pages/fintech-design.vue": cs,
    "../pages/index.vue": xo,
  },
  Co = [];
for (let Fo in ko) {
  let e = Fo.replace("../pages", "").toLowerCase().replace(".vue", "");
  (e = e.replace(/\/index$/, "")),
    (e = e.replace(/\/_+/g, "/:")),
    Co.push({
      path: e,
      name: e,
      meta: {
        layout: jo[Fo].default.layout || "layout-default",
        title:
          null != (t = null == (a = jo[Fo].default) ? void 0 : a.title)
            ? t
            : "app.project.title",
        header:
          null != (l = null == (s = jo[Fo].default) ? void 0 : s.header)
            ? l
            : "header-default",
        scroll:
          null != (o = null == (i = jo[Fo].default) ? void 0 : i.noScroll) && o,
      },
      component: ko[Fo],
    });
}
const qo = ue({
  history: ge("./"),
  routes:
    ((So = { defaultPath: "/home" }),
    [
      {
        path: "/",
        name: "default-path",
        redirect: { name: D({ defaultPath: "/" }, So).defaultPath },
      },
      ...Co,
      {
        path: "/404",
        name: "not-found",
        meta: { layout: "layout-error" },
        component: { template: null },
      },
      {
        path: "/:pathMatch(.*)*",
        name: "not-match",
        redirect: { name: "not-found" },
      },
    ]),
  scrollBehavior: () => ({ top: 0 }),
});
var So;
qo.beforeEach(async (e, a, t) => {
  t();
});
var Oo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: qo }, Symbol.toStringTag, {
    value: "Module",
  })
);
const zo = be({ modules: Ra });
ye(zo, qo);
var To = Object.freeze(
  Object.defineProperty({ __proto__: null, default: zo }, Symbol.toStringTag, {
    value: "Module",
  })
);
const Lo = {
    use(e) {
      e.interceptors.response.use(
        async function (a) {
          if (100004 === a.data.code) {
            const t = e.get("/app/jwt-token", {
              params: { account: zo.state.auth.user.account },
            });
            1 === t.data.code && V.set("token", t.data.data.jwt_token, !0);
            return await e.request(a.config);
          }
          return a;
        },
        function (e) {
          return Promise.reject(e);
        }
      );
    },
  },
  Bo = {
    use(e) {
      (window.isAlert = !1),
        e.interceptors.response.use(
          async function (e) {
            const { noredirect: a = !1 } = e.config;
            if (!a && !window.isAlert) {
              const a = e.data;
              switch (a.code) {
                case 0:
                case 100002:
                case 200001:
                case 200002:
                case 200003:
                case 200004:
                case 200005: {
                  const { isConfirmed: e } = await Pe.alert({
                    title: `Error(${a.code})`,
                    text: Be.t(`error.code.${a.code}`),
                  });
                  return (
                    e &&
                      (await zo.dispatch("auth/logout"),
                      await qo.replace("/login"),
                      (window.isAlert = !1)),
                    Promise.reject(`Error: ${a.code}`)
                  );
                }
              }
            }
            return e;
          },
          function (e) {
            return Promise.reject(e);
          }
        );
    },
  },
  Eo = {
    use(e) {
      e.interceptors.response.use(
        async function (e) {
          const { novalidate: a = !1 } = e.config;
          if (!a) {
            const a = e.data;
            switch (a.code) {
              case 1e5:
              case 100001:
              case 100003:
                await Pe.alert({
                  title: `Error(${a.code})`,
                  text: Be.t(`error.code.${a.code}`),
                });
            }
          }
          return e;
        },
        function (e) {
          return Promise.reject(e);
        }
      );
    },
  };
class Po {
  constructor() {
    (this.provider = new Ba({}.VITE_REMOTE_API)), this.init();
  }
  init() {
    this.provider.use({}, Ea, Lo, Bo, Eo, Ia);
  }
  get get() {
    return this.provider.instance.get;
  }
  get post() {
    return this.provider.instance.post;
  }
  get put() {
    return this.provider.instance.put;
  }
  get delete() {
    return this.provider.instance.delete;
  }
}
Po.prototype.install = function (e) {
  const a = "http-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Io = new Po(),
  Ao = Object.freeze(
    Object.defineProperty(
      { __proto__: null, HttpService: Po, default: Io },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class Mo {
  constructor() {
    this.initStates = {
      type: "Modal",
      resolve: () => {},
      title: null,
      text: null,
      component: null,
      showCancelButton: !1,
      showConfirmButton: !1,
      confirmButtonText: Be.t("button.confirm"),
      cancelButtonText: Be.t("button.cancel"),
      allowOutsideClick: !0,
      props: {},
      timer: null,
      timerProgress: !1,
      autoClose: !1,
      allowConfirmWhenTimerRunning: !1,
      allowDismissWhenTimerRunning: !1,
      BackdropStyle: "rgba(0, 0, 0, 0.6)",
    };
  }
  get state() {
    return zo.state.app.popupState;
  }
  async modal(e = {}) {
    const {
      title: a,
      text: t,
      component: s = null,
      showCancelButton: l = !0,
      showConfirmButton: i = !0,
      confirmButtonText: o = Be.t("button.confirm"),
      cancelButtonText: r = Be.t("button.cancel"),
      allowOutsideClick: n = !0,
      props: d = {},
    } = e;
    return new Promise((e) => {
      zo.commit(
        "app/set/popup",
        u(f({}, this.initStates), {
          type: "Modal",
          resolve: e,
          title: a,
          text: t,
          component: s ? ae(s) : null,
          showCancelButton: l,
          showConfirmButton: i,
          confirmButtonText: o,
          cancelButtonText: r,
          allowOutsideClick: n,
          props: d,
        })
      );
    });
  }
  clear() {
    zo.commit("app/clear/popup");
  }
}
Mo.prototype.install = function (e) {
  const a = "popup-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Do = new Mo();
const $o = {
    "../services/alert-service.js": La,
    "../services/http-service.js": Ao,
    "../services/i18n-service.js": Ee,
    "../services/popup-service.js": Object.freeze(
      Object.defineProperty(
        { __proto__: null, PopupService: Mo, default: Do },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../services/router-service.js": Oo,
    "../services/storage-service.js": De,
    "../services/store-service.js": To,
  },
  Vo = {
    install: (e) => {
      for (let a in $o) e.use($o[a].default);
    },
  };
const Uo = he(Oe);
Uo.provide("$jQuery", we),
  Uo.provide("$swal", Pe),
  Uo.provide("$storage", V),
  Uo.provide("$tabsslider", _e),
  Uo.use(na),
  Uo.use(Sa),
  Uo.use(xe, { loading: "", error: "" }),
  Uo.use(Vo),
  Uo.mount("#app");
