var e,
  t,
  a,
  s,
  l,
  o,
  i,
  r = Object.defineProperty,
  n = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  d = Object.getOwnPropertySymbols,
  p = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  f = (e, t, a) =>
    t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a),
  m = (e, t) => {
    for (var a in t || (t = {})) p.call(t, a) && f(e, a, t[a]);
    if (d) for (var a of d(t)) u.call(t, a) && f(e, a, t[a]);
    return e;
  },
  v = (e, t) => n(e, c(t));
import {
  o as g,
  c as b,
  a as y,
  n as h,
  F as w,
  u as _,
  r as x,
  b as C,
  w as A,
  d as k,
  e as j,
  f as S,
  g as O,
  h as E,
  i as L,
  j as q,
  k as B,
  l as H,
  p as P,
  m as T,
  q as z,
  s as M,
  t as I,
  v as V,
  x as D,
  S as Q,
  y as U,
  z as F,
  A as R,
  B as W,
  C as Z,
  D as N,
  E as Y,
  G as K,
  H as X,
  I as $,
  J as G,
  K as J,
  T as ee,
  L as te,
  M as ae,
  N as se,
  O as le,
  P as oe,
  Q as ie,
  R as re,
  U as ne,
  V as ce,
  W as de,
  X as pe,
  Y as ue,
  Z as fe,
  _ as me,
  $ as ve,
  a0 as ge,
  a1 as be,
  a2 as ye,
  a3 as he,
  a4 as we,
  a5 as _e,
  a6 as xe,
  a7 as Ce,
} from "./vendor.912ced2f.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const a of e)
        if ("childList" === a.type)
          for (const e of a.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        "use-credentials" === e.crossorigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossorigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const Ae = [
  y(
    "div",
    { class: "icon" },
    [
      y("div", { class: "svg_box" }, [
        y(
          "svg",
          {
            height: "100%",
            style: {},
            viewBox: "0 0 185 80",
            fill: "black",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            y("path", {
              d:
                "M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z",
              fill: "black",
            }),
          ]
        ),
      ]),
    ],
    -1
  ),
];
var ke = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [s, l] of t) a[s] = l;
  return a;
};
var je = ke(
  {
    components: {
      Loading: {
        props: { mode: String },
        setup: (e) => (t, a) => (
          g(),
          b(
            w,
            null,
            [
              y("div", { class: h(["mask", e.mode]) }, null, 2),
              y("div", { class: h(["bg", e.mode]) }, Ae, 2),
            ],
            64
          )
        ),
      },
    },
    setup() {
      const e = _(),
        t = x(!1),
        a = x(""),
        s = x("leave"),
        l = C(() => "stop" === s.value),
        o = C(() => {
          if (B(e.state.route.path)) return null;
          return H("layout-error")(P(["meta", "layout"], e.state.route));
        });
      return (
        A(
          () => e.state.route,
          (l) => {
            a.value !== l &&
              ((t.value = !0),
              setTimeout(() => {
                (t.value = !1), (s.value = "enter");
              }, 2800)),
              (a.value = e.state.route.path);
          }
        ),
        A(t, (t) => {
          e.commit("app/systm/Loading", t);
        }),
        k(() => {
          window.addEventListener("resize", () => {});
        }),
        { layout: o, isShowLoading: t, mode: s, isError: l }
      );
    },
  },
  [
    [
      "render",
      function (e, t, a, s, l, o) {
        const i = j("router-view"),
          r = j("the-popup"),
          n = j("Loading");
        return (
          g(),
          b(
            w,
            null,
            [
              (g(),
              S(E(s.layout), null, {
                default: O(() => [
                  L(i, null, {
                    default: O(({ Component: e }) => [(g(), S(E(e)))]),
                    _: 1,
                  }),
                ]),
                _: 1,
              })),
              L(r),
              s.isError || s.isShowLoading
                ? (g(), S(n, { key: 0, mode: s.mode }, null, 8, ["mode"]))
                : q("", !0),
            ],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-59044151"],
  ]
);
const Se = {
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
  Oe = {};
for (let xs in Se) {
  const e = xs.replace("../locales/", "").toLowerCase().replace(".js", ""),
    [t, ...a] = e.split("/"),
    s = T(".", a),
    l = Se[xs].default;
  Oe[t] = z((e, t) => M(e, { [`${s}.${t}`]: l[t] }), Oe[t] || {}, I(l));
}
const Ee = (() => {
    var e, t, a, s;
    const l = V.get("locale");
    if (l) return l;
    let o =
      null !=
      (s =
        null !=
        (a = null == (e = navigator.language) ? void 0 : e.toLowerCase())
          ? a
          : null == (t = navigator.userLanguage)
          ? void 0
          : t.toLowerCase())
        ? s
        : null;
    return o
      ? (o.includes("ph")
          ? (o = "en-ph")
          : o.includes("zh")
          ? (o = "zh-tw")
          : o.includes("en") && (o = "en"),
        (o = o in Oe ? o : {}.VITE_LOCALE),
        o)
      : {}.VITE_LOCALE;
  })(),
  Le = D.exports.createI18n({
    initLocale: Ee,
    fallbackLocale: null != (e = {}.VITE_DEFAULT_LANG) ? e : "zh-tw",
    messages: Oe,
  });
var qe = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Le }, Symbol.toStringTag, {
    value: "Module",
  })
);
(Q.toast = function (e) {
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
      e.addEventListener("click", Q.close);
    },
  });
}),
  (Q.alert = function ({
    title: e,
    text: t,
    willClose: a = null,
    heightAuto: s = !1,
    html: l = !1,
    confirmButtonText: o = Le.t("button.confirm"),
    style: i = "",
  }) {
    return this.fire({
      title: e,
      text: t,
      html: l,
      customClass: `swal2-alert ${i}`,
      heightAuto: s,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      willClose: a,
      confirmButtonText: o,
    });
  }),
  (Q.showLoading = function () {
    return this.fire({
      title: "winner winner chicken dinner",
      showConfirmButton: !1,
      customClass: "swal2-loading",
      showClass: { popup: "animate__animated animate__fadeIn" },
      hideClass: { popup: "animate__animated animate__fadeOut" },
      background: "transparent",
    });
  }),
  (Q.confirm = function ({
    title: e,
    text: t,
    html: a,
    confirmCallback: s = null,
    heightAuto: l = !1,
  }) {
    return this.fire({
      title: e,
      text: t,
      html: a,
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
const Be = Q.mixin({
  reverseButtons: !0,
  heightAuto: !1,
  focusConfirm: !1,
  allowOutsideClick: !1,
  allowEnterKey: !1,
  allowEscapeKey: !1,
  customClass: "swal2-wrap",
  confirmButtonText: Le.t("button.confirm"),
  cancelButtonText: Le.t("button.cancel"),
  didOpen(e) {
    const t = e.querySelector(".swal2-cancel");
    e.querySelector(".swal2-confirm").blur(), t.blur();
  },
});
class He {
  constructor() {
    return V;
  }
}
class Pe {
  constructor() {
    this.provider = new He();
  }
  destroy() {
    this.provider.clearAll();
  }
}
Pe.prototype.install = function (e) {
  const t = "storage-service";
  (e.config.globalProperties[t] = this), e.provide(t, this);
};
var Te = new Pe(),
  ze = Object.freeze(
    Object.defineProperty(
      { __proto__: null, StorageService: Pe, default: Te },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Me = () => {
    const e = D.exports.useI18n(),
      t = x({}),
      a = (s, l = {}) => {
        const [o, ...i] = U(".", s);
        return o in t.value ? a(`${t.value[o]}.${T(".", i)}`, l) : e.t(s, l);
      };
    return {
      locale: e.locale,
      change: (t) => {
        e.setLocale(t), Te.provider.set("locale", t);
      },
      setPrefix: (e) => {
        t.value = "string" == typeof e ? { $current: e } : m(m({}, t.value), e);
      },
      t: a,
      addMessages: e.addMessages,
    };
  },
  Ie = { class: "layout-deafult-header-nav" },
  Ve = ["onMouseenter"],
  De = y("div", { class: "line" }, null, -1),
  Qe = { class: "list_style" },
  Ue = { class: "nav_link-top" },
  Fe = y(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Re = { class: "nav_link-title" },
  We = { class: "u-ts-3" },
  Ze = { class: "nav_link-p" },
  Ne = y(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Ye = y("div", { id: "pink_mask" }, null, -1),
  Ke = {
    setup(e) {
      const t = x(1),
        a = x(!0),
        s = x([
          {
            title: "Overview",
            content:
              "Meet Basis. We increase the value of digital products and their brands through design",
          },
          {
            title: "Cases",
            content:
              "See our past work, ranging from the largest brands in the world to fast-moving startups.",
          },
          {
            title: "Fintech Design",
            content:
              "See why Basis specializes in product and brand design for innovative financial technology companies.",
          },
          {
            title: "About & Contact",
            content:
              "Meet Basis. We increase the value of digital products and their brands through design",
          },
        ]),
        l = C(() => 25 * t.value),
        o = C(() => {
          switch (t.value) {
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
        i = x(25);
      return (e, r) => (
        g(),
        b("div", Ie, [
          y("ul", null, [
            (g(!0),
            b(
              w,
              null,
              F(
                s.value,
                (e, a) => (
                  g(),
                  b(
                    "li",
                    {
                      key: e,
                      style: R(`--i: ${e}`),
                      onMouseenter: (e) =>
                        ((e) => {
                          t.value = e;
                        })(a),
                    },
                    [
                      De,
                      y("div", Qe, [
                        y("div", Ue, [
                          Fe,
                          y("div", Re, [y("div", We, W(e.title), 1)]),
                        ]),
                        y(
                          "div",
                          {
                            class: h([
                              "nav_link-btm",
                              { active: t.value === a },
                            ]),
                          },
                          [y("p", Ze, W(e.content), 1), Ne],
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
                style: R({
                  left: "" + (a.value ? `calc(${Z(l)}% - 4px)` : "auto"),
                  right: "" + (a.value ? "auto" : `calc(${Z(o)}% - 4px)`),
                  width: `calc(${i.value}% + 8px)`,
                }),
              },
              null,
              4
            ),
          ]),
          Ye,
        ])
      );
    },
  },
  Xe = { class: "layout-deafult-header" },
  $e = { key: 0 },
  Ge = [
    N(
      '<svg width="100%" style="" viewBox="0 0 678 88" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M134.299 43.7526C143.563 41.1205 148.255 33.7208 148.255 23.5684C148.255 9.02438 138.288 0 119.207 0H0V88.0232H119.2C139.424 88.0232 149.256 78.2468 149.256 63.3197C149.256 53.1601 144.131 46.0158 134.299 43.7597V43.7526ZM27.9189 22.0572H113.933C118.774 22.0572 120.343 23.9373 120.343 27.4492C120.343 30.961 118.774 32.9688 113.933 32.9688H27.9189V22.0643V22.0572ZM114.934 65.817H27.9189V54.9125H114.934C119.775 54.9125 121.479 56.9132 121.479 60.3044C121.479 63.9369 119.775 65.8241 114.934 65.8241V65.817Z" fill="#ffffff"></path><path d="M444.552 33.4796L356.409 32.2238C351.851 32.2238 349.565 30.2161 349.565 27.0802C349.565 24.1998 351.702 22.3197 356.259 22.3197H434.863C438.284 22.3197 442.274 23.9515 442.699 28.336H473.607C472.606 12.1602 458.65 0 437.432 0H351.993C332.06 0 319.517 11.4082 319.517 27.584C319.517 43.7597 331.769 54.1676 351.418 54.5436L439.136 55.5439C443.693 55.6716 445.688 57.6723 445.688 60.5598C445.688 63.4473 443.835 65.6964 439.136 65.6964H358.68C354.691 65.6964 350.708 63.8163 349.849 59.4247H319.084C319.794 75.7282 334.751 88.0161 356.401 88.0161H443.97C464.336 88.0161 475.871 76.4802 475.871 60.5598C475.871 44.6395 464.762 33.8485 444.538 33.4725L444.552 33.4796Z" fill="#ffffff"></path><path d="M512.021 0H482.967V88.0232H512.021V0Z" fill="#ffffff"></path><path d="M645.914 33.4796L557.77 32.2238C553.213 32.2238 550.927 30.2161 550.927 27.0802C550.927 24.1998 553.064 22.3197 557.621 22.3197H636.224C639.646 22.3197 643.635 23.9515 644.061 28.336H674.969C673.975 12.1602 660.012 0 638.794 0H553.355C533.422 0 520.879 11.4082 520.879 27.584C520.879 43.7597 533.131 54.1676 552.78 54.5436L640.498 55.5439C645.055 55.6716 647.05 57.6723 647.05 60.5598C647.05 63.4473 645.197 65.6964 640.498 65.6964H560.042C556.053 65.6964 552.07 63.8163 551.211 59.4247H520.446C521.156 75.7282 536.105 88.0161 557.763 88.0161H645.332C665.698 88.0161 677.233 76.4802 677.233 60.5598C677.233 44.6395 666.131 33.8485 645.9 33.4725L645.914 33.4796Z" fill="#ffffff"></path><path d="M215.059 0L145.272 88.0232H177.607L195.005 65.7389H276.214L293.662 88.0232H326.99L257.786 0H215.059ZM211.63 44.4479L235.567 13.792L259.56 44.4479H211.63Z" fill="#ffffff"></path></svg>',
      1
    ),
  ],
  Je = {
    key: 1,
    height: "100%",
    viewBox: "0 0 185 80",
    fill: "#000000",
    xmlns: "http://www.w3.org/2000/svg",
  },
  et = [
    y(
      "path",
      {
        d:
          "M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z",
        fill: "#000000",
      },
      null,
      -1
    ),
  ],
  tt = [y("div", null, null, -1), y("div", null, null, -1)],
  at = { class: "layout-deafult pb-32" };
var st = ke(
    {
      components: {
        LayoutHeader: {
          setup(e) {
            const t = x(!1);
            return (e, a) => (
              g(),
              b(
                w,
                null,
                [
                  y("div", Xe, [
                    y(
                      "div",
                      {
                        href: "/",
                        "aria-current": "page",
                        class: h([
                          "layout-deafult-header-logo",
                          { "layout-deafult-header-logo--open": t.value },
                        ]),
                        "aria-label": "home",
                      },
                      [
                        t.value
                          ? (g(), b("svg", Je, et))
                          : (g(), b("div", $e, Ge)),
                      ],
                      2
                    ),
                    y(
                      "div",
                      {
                        class: h([
                          "layout-deafult-header-btn",
                          { "layout-deafult-header-btn--open": t.value },
                        ]),
                        onClick: a[0] || (a[0] = (e) => (t.value = !t.value)),
                      },
                      tt,
                      2
                    ),
                  ]),
                  t.value ? (g(), S(Ke, { key: 0 })) : q("", !0),
                ],
                64
              )
            );
          },
        },
      },
      setup() {
        const { t: e } = Me();
        return { t: e };
      },
    },
    [
      [
        "render",
        function (e, t, a, s, l, o) {
          const i = j("LayoutHeader");
          return (
            g(), b(w, null, [L(i), y("div", at, [Y(e.$slots, "default")])], 64)
          );
        },
      ],
    ]
  ),
  lt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: st },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ot = { class: "layout-demo" };
var it = ke({ setup() {} }, [
  [
    "render",
    function (e, t, a, s, l, o) {
      return g(), b("div", ot, [Y(e.$slots, "default")]);
    },
  ],
]);
const rt = {
    "../layouts/layout-default.vue": lt,
    "../layouts/layout-demo.vue": Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: it },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
  },
  nt = [];
for (let xs in rt) {
  const e = xs.replace("../layouts/", "").toLowerCase().replace(".vue", "");
  nt.push({ componentName: e, component: rt[xs].default });
}
const ct = {
  install: (e) => {
    nt.forEach((t) => {
      e.component(t.componentName, t.component);
    });
  },
};
const dt = {
    props: { title: {}, goBackButton: { type: Boolean, default: !1 } },
    setup() {
      const e = K();
      return {
        goBack: () => {
          e.options.history.state.back
            ? e.back()
            : e.push({ name: "default-path" });
        },
      };
    },
  },
  pt = {
    class: "relative flex items-center justify-center text-36 h-24 w-full",
  },
  ut = { class: "font-bold" },
  ft = { class: "absolute right-8 top-6" };
var mt = ke(dt, [
    [
      "render",
      function (e, t, a, s, l, o) {
        return (
          g(),
          b("div", pt, [
            a.goBackButton
              ? (g(),
                b("div", {
                  key: 0,
                  class: "go-back absolute left-3 top-6",
                  onClick:
                    t[0] || (t[0] = (...e) => s.goBack && s.goBack(...e)),
                }))
              : q("", !0),
            y("div", ut, [
              Y(e.$slots, "title", {}, () => [X(W(a.title), 1)], !0),
            ]),
            y("div", ft, [Y(e.$slots, "actions", {}, void 0, !0)]),
          ])
        );
      },
    ],
    ["__scopeId", "data-v-50981458"],
  ]),
  vt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const gt = () => $("popup-service");
const bt = {
    class: "popup-modal swal2-popup swal2-modal swal2-confirm",
    tabindex: "-1",
    style: { display: "grid" },
  },
  yt = { class: "swal2-title", style: { display: "block" } },
  ht = { class: "swal2-html-container", style: { display: "block" } },
  wt = { class: "swal2-actions", style: { display: "flex" } };
var _t = ke({}, [
  [
    "render",
    function (e, t) {
      return (
        g(),
        b("div", bt, [
          y("h2", yt, [Y(e.$slots, "title")]),
          y("div", ht, [Y(e.$slots, "content")]),
          y("div", wt, [Y(e.$slots, "actions")]),
        ])
      );
    },
  ],
]);
const xt = {
    key: 0,
    class:
      "fixed z-[1041] inset-0 w-full h-full flex justify-center items-center pointer-events-none",
  },
  Ct = { key: 1 },
  At = ["data-timer", "data-end"];
var kt = ke(
  {
    setup(e) {
      const t = gt(),
        a = C(() => t.state),
        s = (e) => {
          a.value.resolve(
            m(
              { isConfirmed: !1, isDismissed: !1, dismiss: null, result: null },
              e
            )
          );
        },
        l = C(() => (a.value.type, ae(_t))),
        o = C(() => a.value.BackdropStyle),
        i = x();
      let r = null;
      const n = () => {
        clearTimeout(r), (r = null);
      };
      A([() => a.value.autoClose, () => a.value.timer], ([e, t]) => {
        t &&
          (n(),
          (r = setTimeout(() => {
            n(), e && c("timer");
          }, t)));
      });
      const c = async (e) => {
          if (r) {
            if (!a.value.allowDismissWhenTimerRunning) return;
            n();
          }
          if (i.value && "onDismissed" in i.value) {
            const a = await i.value.onDismissed();
            a && (s({ isDismissed: !0, dismiss: e, result: a }), t.clear());
          } else s({ isDismissed: !0, dismiss: e }), t.clear();
        },
        d = async () => {
          a.value.allowOutsideClick && c("backdrop");
        },
        p = async () => {
          c("cancel");
        },
        u = async () => {
          if (r) {
            if (!a.value.allowConfirmWhenTimerRunning) return;
            n();
          }
          if (i.value && "onConfirmed" in i.value) {
            const e = await i.value.onConfirmed();
            e && (s({ isConfirmed: !0, result: e }), t.clear());
          } else s({ isConfirmed: !0 }), t.clear();
        };
      return (e, t) => (
        g(),
        S(te, { to: "body" }, [
          L(
            ee,
            { name: "popup", duration: "600" },
            {
              default: O(() => {
                var e;
                return [
                  Z(a).$display
                    ? (g(),
                      b("div", xt, [
                        (g(),
                        S(
                          E(Z(l)),
                          {
                            class: h([
                              "popup__inner pointer-events-auto",
                              {
                                "no-enter-animation":
                                  null == (e = Z(a))
                                    ? void 0
                                    : e.noEnterAnimation,
                              },
                            ]),
                          },
                          G(
                            {
                              title: O(() => [X(W(Z(a).title), 1)]),
                              content: O(() => [
                                Z(a).component
                                  ? (g(),
                                    S(
                                      E(Z(a).component),
                                      J(
                                        { key: 0, ref_key: "compRef", ref: i },
                                        Z(a).props
                                      ),
                                      null,
                                      16
                                    ))
                                  : (g(), b("div", Ct, W(Z(a).text), 1)),
                              ]),
                              actions: O(() => [
                                Z(a).showCancelButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 0,
                                        type: "button",
                                        class: "cancel-button",
                                        onClick: p,
                                      },
                                      W(Z(a).cancelButtonText),
                                      1
                                    ))
                                  : q("", !0),
                                Z(a).showConfirmButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 1,
                                        type: "button",
                                        class: "confirm-button",
                                        onClick: u,
                                      },
                                      W(Z(a).confirmButtonText),
                                      1
                                    ))
                                  : q("", !0),
                              ]),
                              _: 2,
                            },
                            [
                              Z(a).timer && Z(a).timerProgress
                                ? {
                                    name: "timer",
                                    fn: O(() => [
                                      y(
                                        "div",
                                        {
                                          class: "timer-progress",
                                          "data-timer": Z(a).timer,
                                          "data-end": Date.now() + Z(a).timer,
                                        },
                                        null,
                                        8,
                                        At
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
                    : q("", !0),
                ];
              }),
              _: 1,
            }
          ),
          L(
            ee,
            {
              name: "popup-backdrop",
              "enter-active-class": "animate__animated animate__fadeIn",
              "leave-active-class": "animate__animated animate__fadeOut",
            },
            {
              default: O(() => [
                Z(a).$display
                  ? (g(),
                    b(
                      "div",
                      {
                        key: 0,
                        class: "popup-backdrop",
                        style: R({ background: Z(o) }),
                        onClick: d,
                      },
                      null,
                      4
                    ))
                  : q("", !0),
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
const jt = {
    "../components/the-header.vue": vt,
    "../components/the-popup.vue": Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: kt },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
  },
  St = [];
for (let xs in jt) {
  const e = xs.replace("../components/", "").toLowerCase().replace(".vue", "");
  St.push({ componentName: e, component: jt[xs].default });
}
const Ot = {
  install: (e) => {
    St.forEach((t) => {
      e.component(t.componentName, t.component);
    });
  },
};
class Et {
  constructor() {
    return Q.mixin({
      reverseButtons: !0,
      heightAuto: !1,
      focusConfirm: !1,
      allowOutsideClick: !1,
      allowEnterKey: !1,
      allowEscapeKey: !1,
      customClass: "swal2-wrap",
      confirmButtonText: Le.t("button.confirm"),
      cancelButtonText: Le.t("button.cancel"),
      didOpen(e) {
        const t = e.querySelector(".swal2-cancel");
        e.querySelector(".swal2-confirm").blur(), t.blur();
      },
    });
  }
}
class Lt {
  constructor() {
    this.provider = new Et();
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
    text: t,
    willClose: a = null,
    heightAuto: s = !1,
    html: l = !1,
    confirmButtonText: o = Le.t("button.confirm"),
    style: i = "",
  }) {
    return this.provider.fire({
      title: e,
      text: t,
      html: l,
      customClass: `swal2-alert ${i}`,
      heightAuto: s,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      willClose: a,
      confirmButtonText: o,
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
    text: t,
    html: a,
    confirmButtonText: s = Le.t("button.confirm"),
    confirmCallback: l = null,
    heightAuto: o = !1,
  }) {
    return this.provider.fire({
      title: e,
      text: t,
      html: a,
      customClass: "swal2-confirm",
      confirmButtonText: s,
      heightAuto: o,
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
Lt.prototype.install = function (e) {
  const t = "alert-service";
  (e.config.globalProperties[t] = this), e.provide(t, this);
};
var qt = new Lt(),
  Bt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, AlertService: Lt, default: qt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class Ht {
  constructor(e, t = {}) {
    this.instance = se.create(m({ baseURL: e }, t));
  }
  init() {
    this.instance.defaults.validateStatus = (e) => e >= 200 && e < 300;
  }
  use(...e) {
    e.forEach((e) => {
      var t;
      null == (t = e.use) || t.call(e, this.instance);
    });
  }
}
const Pt = {
    use(e) {
      e.interceptors.request.use(
        function (e) {
          const t = V.get("token");
          return t && (e.headers.Authorization = `Bearer ${t}`), e;
        },
        function (e) {
          return Promise.reject(e);
        }
      );
    },
  },
  Tt = (e, { rejectNil: t, rejectEmpty: a }) =>
    z(
      (s, l) => {
        const o = e[l];
        return (t && B(o)) || (a && le(o)) ? s : oe(l, o, s);
      },
      {},
      I(e)
    ),
  zt = {
    use(e) {
      e.interceptors.request.use(
        function (e) {
          const {
            rejectNil: t = !0,
            rejectEmpty: a = !1,
            isFormData: s = !1,
          } = e;
          if (
            (e.params &&
              (e.params = Tt(e.params, { rejectNil: t, rejectEmpty: a })),
            e.data &&
              ((e.data = Tt(e.data, { rejectNil: t, rejectEmpty: a })), s))
          ) {
            const t = new FormData();
            ie((a) => {
              e.data[a] instanceof Array
                ? ie((e) => {
                    t.append(`${a}[]`, e);
                  }, e.data[a])
                : t.append(a, e.data[a]);
            }, I(e.data)),
              (e.data = t);
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
  Mt = se.create();
(Mt.defaults.baseURL = {}.VITE_REMOTE_API),
  (Mt.defaults.validateStatus = (e) => e >= 200 && e < 300);
const It = {
  async "read/marquee"() {
    const e = await Mt.get("/app/user/news", {
        params: { type: 1 },
        novalidate: !0,
        noredirect: !0,
      }),
      t = await Mt.get("/app/withdraw", { novalidate: !0, noredirect: !0 });
    return { marquee: e.data, withdraw: t.data };
  },
};
const Vt = {
  "set/popup"(e, t) {
    e.popupState = v(m({}, t), { $display: !0, $timestamp: Date.now() });
  },
  "clear/popup"(e) {
    e.popupState = { $display: !1, $timestamp: -1 };
  },
  "systm/Loading"(e, t) {
    e.isLoading = t;
  },
};
const Dt = {
  async "read/marquee"() {
    const e = await Mt.get("/app/user/news", {
        params: { type: 1 },
        novalidate: !0,
        noredirect: !0,
      }),
      t = await Mt.get("/app/withdraw", { novalidate: !0, noredirect: !0 });
    return { marquee: e.data, withdraw: t.data };
  },
};
const Qt = {
  "set/popup"(e, t) {
    e.popupState = v(m({}, t), { $display: !0, $timestamp: Date.now() });
  },
  "clear/popup"(e) {
    e.popupState = { $display: !1, $timestamp: -1 };
  },
};
const Ut = {
  "../store/app/actions.js": Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: It },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/app/getters.js": Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          isTip: (e) => (t) => -1 !== e.tips.findIndex((e) => e.type === t),
          getTypeFirstItem: (e) => (t) => e.tips.find((e) => e.type === t),
          getHadValueTypeFirstItem: (e) => (t) =>
            e.tips.find((e) => e.type === t && "" !== e.msg),
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/app/mutations.js": Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vt },
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
      { __proto__: null, default: Dt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/auth/getters.js": Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: {
          isTip: (e) => (t) => -1 !== e.tips.findIndex((e) => e.type === t),
          getTypeFirstItem: (e) => (t) => e.tips.find((e) => e.type === t),
          getHadValueTypeFirstItem: (e) => (t) =>
            e.tips.find((e) => e.type === t && "" !== e.msg),
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  "../store/auth/mutations.js": Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Qt },
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
let Ft = {};
const Rt = (e, t, a) => {
  const [s, ...l] = e;
  return l.length
    ? { [s]: { namespaced: !0, modules: Rt(l, t, a) } }
    : { [s]: { namespaced: !0, [t]: a } };
};
for (let xs in Ut) {
  const e = xs
    .replace("../store/", "")
    .toLowerCase()
    .replace(".js", "")
    .split("/");
  Ft = ce(Ft, Rt(ne(e), re(e), Ut[xs].default));
}
var Wt = Ft;
const Zt = {},
  Nt = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if ((e = `./${e}`) in Zt) return;
            Zt[e] = !0;
            const t = e.endsWith(".css"),
              a = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${a}`)) return;
            const s = document.createElement("link");
            return (
              (s.rel = t ? "stylesheet" : "modulepreload"),
              t || ((s.as = "script"), (s.crossOrigin = "")),
              (s.href = e),
              document.head.appendChild(s),
              t
                ? new Promise((t, a) => {
                    s.addEventListener("load", t),
                      s.addEventListener("error", () =>
                        a(new Error(`Unable to preload CSS for ${e}`))
                      );
                  })
                : void 0
            );
          })
        ).then(() => e())
      : e();
  };
var Yt = "./assets/about-cover2.291fc507.webp";
const Kt = {
    title: "pages.home.nav.about",
    setup() {
      const { t: e } = Me();
      return { t: e };
    },
  },
  Xt = { class: "about" },
  $t = y("img", { class: "about-cover", src: Yt, alt: "" }, null, -1),
  Gt = { class: "about-subtitle" },
  Jt = { class: "about-content" },
  ea = { class: "label" },
  ta = X(": ");
var aa = ke(Kt, [
    [
      "render",
      function (e, t, a, s, l, o) {
        return (
          g(),
          b("div", Xt, [
            $t,
            y("h1", Gt, W(s.t("pages.about.title")), 1),
            y("div", Jt, [
              y("h2", null, W(s.t("pages.about.content.title.1")) + ":", 1),
              y("p", null, W(s.t("pages.about.content.text.1")), 1),
              y("h2", null, W(s.t("pages.about.content.title.2")) + ":", 1),
              y("ul", null, [
                (g(),
                b(
                  w,
                  null,
                  F(5, (e) =>
                    y("li", { key: e }, [
                      X(W(e) + ". ", 1),
                      y(
                        "span",
                        ea,
                        W(s.t(`pages.about.content.list.title.${e}`)),
                        1
                      ),
                      ta,
                      y(
                        "span",
                        null,
                        W(s.t(`pages.about.content.list.${e}`)),
                        1
                      ),
                    ])
                  ),
                  64
                )),
              ]),
              y("p", null, W(s.t("pages.about.content.text.3")), 1),
            ]),
          ])
        );
      },
    ],
  ]),
  sa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: aa },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const la = {
    layout: "layout-demo",
    setup() {
      const e = gt(),
        { t: t, locale: a, setPrefix: s, change: l } = Me();
      s({ $current: "pages.demo" });
      const o = K(),
        i = $("alert-service"),
        r = de({ current: a.value || "zh-tw" });
      return (
        k(() => {}),
        {
          t: t,
          lang: r,
          toHome: () => {
            o.push("/home");
          },
          swalModal: () => {
            i.alert({
              title: t("$current.modal.swal.title"),
              text: t("$current.modal.swal"),
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
  oa = { class: "demo" },
  ia = { class: "demo-head" },
  ra = { class: "switch" },
  na = y("input", { type: "checkbox", class: "cb" }, null, -1),
  ca = [
    y("span", { class: "left" }, "CN", -1),
    y("span", { class: "right" }, "En", -1),
  ],
  da = { class: "demo-head-content" },
  pa = { class: "demo-actions" },
  ua = { class: "radio-inputs" },
  fa = y("input", { type: "radio", name: "radio", checked: "" }, null, -1),
  ma = { class: "name" },
  va = y("input", { type: "radio", name: "radio" }, null, -1),
  ga = { class: "name" },
  ba = y("input", { type: "radio", name: "radio" }, null, -1),
  ya = { class: "name" };
var ha = ke(la, [
    [
      "render",
      function (e, t, a, s, l, o) {
        return (
          g(),
          b("div", oa, [
            y("div", ia, [
              y("div", null, [
                y("label", ra, [
                  na,
                  y(
                    "span",
                    {
                      class: "toggle",
                      onClick:
                        t[0] ||
                        (t[0] = (...e) => s.changeLang && s.changeLang(...e)),
                    },
                    ca
                  ),
                ]),
              ]),
              y("div", da, "lang:" + W(s.lang.current), 1),
            ]),
            y("div", pa, [
              y("div", ua, [
                y(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      t[1] || (t[1] = (...e) => s.toHome && s.toHome(...e)),
                  },
                  [fa, y("span", ma, W(s.t("$current.router.link")), 1)]
                ),
                y(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      t[2] ||
                      (t[2] = (...e) => s.swalModal && s.swalModal(...e)),
                  },
                  [va, y("span", ga, W(s.t("$current.modal.swal")), 1)]
                ),
                y(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      t[3] ||
                      (t[3] = (...e) => s.popupModal && s.popupModal(...e)),
                  },
                  [ba, y("span", ya, W(s.t("$current.popup.use")), 1)]
                ),
              ]),
            ]),
          ])
        );
      },
    ],
  ]),
  wa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ha },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _a =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAACgCAYAAAAFOewUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANMSURBVHgB7VqLkSIhEG23NoANQSPQEDQCNQMz0AzUCDQDNQLNQDNQI9AMNAOOx9kcMI0w3me3bnlV1roIb5pm5nXTDK1WK0VE6ng8KsZgMDBtsc9+v7d933UDNZtN6nQ6xOh2u97/jPv9Tsvl0m+EBaPRSOXgcrlULHgDiTaZXoUhaLfbWZ0xhQpgVi7Y4bfbzbaRqgHtbKWd67V5BKfTSRyIK8LRuPp2u/V+e3enM5lMSJOYZcTSYs7X69W0AYvFouLwhjHjAXSez+dmADvs4+OD+v0+aQsMaQiP4BW80W+iEBSC70hwOBxoOBzax9tAJQAF1jqh9GNtBAV/3RhCMQWazWZKC4sdBEVy5bxCgEEQTR6ED76jzRXRKAGbiEE6+jwdJBJAbd255UK0YL1e17dA8gGiNMiyCFwgWoEMgSR7FWKAXzCYyfA3eR/EgKgUWlLiQiEoBH+DAFlabfBjCU3Esx4C8o52lrqooKBT2AEBhR46yVIHxRYJwqSb9wbT6dQjhLxlJdu4EgWZOb6jbbfb2bboKuhOJmdGqsvg796+Qbo6mx/6RNryWAK3MzyPjqFfWJ1FH9AjkPCWbzwee4NZ1nXK77VbAniY7wXX8wwQS4GlyHohKASfQQAl0rqRVqQYokWYfzYFCbaCgbmlIFZxrLY9KX1RqhQGaAdRCgi+vV6PxClI9ZEcfP4q1JZ1+AExkuNkiQuFoBD8IYJ3qfF8PleL8A50FvdLgELtR22ZqxmUoYmVKaDOjvoyrqB+5pH2I+nmF3QiKtsxB/Keyt0CWCeivMEJNXJmCpwFcLbuwotM+JEH8R4JSbZbVwsTcUsQpvF8JOBWb8I+QFHlQlAIvgqBVaRWq5U9SIuPPZO1BKhWvIKiB4XgOxLgiKxSNlWZ4JBPwfl7FgFCPjlJFkI+I2sK4fsYYoaSOpiC2UgykDO4dUbvpCt2lvQM4uYb2QjqizmvVyR371yQjpFZAveMLfbBFMNXKLxl5DO2FBmyNpHABZ/+cZYWI6hkqihzbDYbU5h238WIgplQCk+ZjqXG6rivm2TVUEAM50k3W5QAg5DWpu5Qj4BNrHM3WoK6tzCjxMZC8J8QWEEJK5U5QICxz0Kj0aC6QIngBxgHF93HsIfgAAAAAElFTkSuQmCC",
  xa =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAA2CAYAAADEWrcYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAV9SURBVHgB7ZndceM2EMcXsp1Hmw8n596CVHBOBaIrOLkCyxVEruCoCiJXIKWCOBVIV4GVCqzHzNkzpp/PJm6XACQIBPVp8UAPfjMYUsASJPcPLBYUAMAXCHjNAZaxOv8KAW8RqoQZ5TECglDeIyAI5T33EITyHg5BqFrAIQhVCzgEoWoBhyBULeAQhPIOXlIXhPIIEoM76jkEobyBHB+E8hzt+CCUx5iO31SoAQQq4Ql2EypQAWewm1A7E0Uf4pOTpigpTycnp/+QDVTE8fHpF7o3HaFCoqjZwfdM6GjWN7BMsFxb9hzLCIpCTbGcq2NVRDgW2kKwUVVOY0wk5rEqhIBLfE96x0uzvqGOQyxX1jUcfoJQ+KBDxuBqXsS1vhc5rYoZxVh2I49wAx7SheKasyr07YwZ7uypLts/chn2cpsRvFPo3ZQPFt7x0LLrQx5eFtJrDnJG2bNnqur2Tpr+P0Uhv2Io+AxyDXUSISCfPyVKbPis2xKbddi0H+PZ6IIpbEDDUZdg6Vl1HMpDXyWgQCd2XRSd3ssFvjnA8pcQR09Y7ulIv+d2UaSSAd2ubQaGs2eUjWjZV7ODbXdmP/Tb1Y+0z6PEyHg2eub74+Nf/zT6y6MI/ozlu8JCZCGRXItxAusLtXeUA2I6x3ViYrdjXRtL16o7jyQcHXOnkoDIsulQGzriDNaAhEYH0t7Qtj8j5+OgaRft2Ug/uwHHda+P9x3DGpBICZQLZS+cHPYulOA0+mQ5beOxiw4wR/TfjosidPgYhTiXBW4Y+x5TGMJrB/p5pU12oWx0PxE6fqTCUSk0oufZnriVfXz/nfoDFVGEEAPdDw0OIztM8bwnr6H75/emEIkD62CskySYJUgwmdcdjPO+YflnniGsn0xsxYp9kphP/Q/J4nUy3FH4WNUvOrlfbJ+HGrNvV7ije6i6u2I/eWKj++mqe9/O6z5y1zV23TqJQ6KOdpjrqKOZu3NwJxP7IJUhTvTS9HHsMmCM/VdybTw/PSiIlKYPQ3QKrQ1nKilJXJ3grMB2OShxtjzTWma2Z9krjX6aGVGWsU/SjrXUs/1LiU/x3sW6MuzsjjlsOJaWo/4Z5JR9U2iKk/M2uSbLxFNJb1yfLXGKfocl4e7QaGMtfMYWrEZdk01gR0yRaAYlVjsH9xpEIzeGPYj0toipHne0VpSkyrkz0fHT8n4Ose1VnTNcj7KymZuve+pUz6zfYEe0SO9QoJwxqLU2y47ouPD5i9YkDGM6Uyt1PM1CDIu501F4FPsxsW0cg4BmUEyZJzb17L3RkkFTgERyCUSjq+4CAa1h6NwxSGd1cS2JGg2RZ3VZ1mjh+qLT9qlrzTKh7AzXGdp75fse+g3wgtcdcmwlsVvo93MthrKPIc8ejzB7bPbkzG6ob5HwGevQ/mFlOCSREquOBBpDzQXSMHZwJcRrPuDkvoh1ZL0wbNj1qoUcBad9DSUQlEDFUoCjBRshfiERL5T9GDO8nvpgyuX+ikKvMOwFDYwYVmB/cdACfbLqp+AWiIPnkPNRKHNfNEPum+CPNP12u15fDx1zP2M20cx5fv52sWj/mKj9zsRlz9hLGzaEBKLOKv/AWiVyk9w8W7Z5XfZZaN4P9UF9uT8HFe0JeW/Ykm0FEvBOMEWbb1xP15ph+0ZndxRLXSHOtVmlkUAjbOlnlDohv7GJDiYWFP44zAam8EIkgnbP684g11/ttYa+Jhj/VZll503oW7GYbkimsNkMcn2lqBXyO9prgqe48RSUHGEm+9Lf5f+mt2bbGURlCIFKCALVgG0E6kOgUjYVKIFA5XBHXRDIc4JAnhME8pwgkOfEEATymksoihME8owgUA0IAtWAIFANCALVgCBQDUgg4DU/AFoAB+sZHzH0AAAAAElFTkSuQmCC",
  Ca =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAKjCAYAAAA6d64BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIFSURBVHgB7ZoxUsMwEEU/CQWl6ejwDQg3SG4AN/ANgBPgG5CSDnMC4ASBCrpQ0uGSLtBBFfQtK5YUEwcmZGTYN7MZ6xMTabWrSBt3ARwou1e2pexOGcbKpqVFG+WFYb+jXl7hMSrf9WyEWNlQWQ+togvd9QtlH8qeKJrBTfCVP2wi+5apEegH+vUYgrBGInPB0E6gU500p/rAT/Xieggv1fkJKXTehAsHdwSdiG/K0uZE9gWI0CAwxujcF+j4OkfIXEFHMZOgPvgdRFhCcHYG9GkfemXgH64RMgyFxWuhgwhLCHY45PRpjCocHiEIgiAIgcIvrVPofQw5lJ3BSgRno7ip7ATVzuAWrcFUjHiY2Fb2QLG5YmQP36kYzY7VpmKUIGRMVWFctn9aVcjQlgIiZ4tVvNgIGbyuT1ANP+7AqsGY25yjBsp/yMbQ/6QgceaEiyO7PjKCPbhi+LH17rh29lN4LiSsSwfnghi6ODxzQYYq1Qvs2e/5s19fHO5DDz1Fq2BmJ9A+yZVlUlJbvcCvxktluwj90Fxb7VmcDTLZ3xUYDjfK9qCdnEMQBEEQ2kZsNxLobcKZEf70j9NzHcvw346RQltZXwHAvjU8pDj8O0JLi8Oc/eJhEuieDiQcViLMPVTC9cc4OZiCCEvh7NRO2X7nS/Na6CDCEkJutYuHSiJUu5z8E0pVtJZRO+HCAAAAAElFTkSuQmCC",
  Aa = "./assets/img_wing.20892ae6.svg";
const ka = (e) =>
    new URL(
      {
        "../assets/images/icon_back.svg": "./assets/icon_back.556b6f96.svg",
        "../assets/images/loading.gif": "./assets/loading.afec609f.gif",
        "../assets/images/home/bg-left-bottom.png": _a,
        "../assets/images/home/bg-left-top.png": xa,
        "../assets/images/home/bg-line.png": Ca,
        "../assets/images/home/bg-master.png":
          "./assets/bg-master.fc851c4f.png",
        "../assets/images/home/person.png": "./assets/person.7b1a05ef.png",
        "../assets/images/profile/about-cover.webp":
          "./assets/about-cover.a0e8683c.webp",
        "../assets/images/profile/about-cover2.webp": Yt,
        "../assets/images/svg/apple.svg": "./assets/apple.0fa4e673.svg",
        "../assets/images/svg/as.svg": "./assets/as.a4b9ab96.svg",
        "../assets/images/svg/home-2.svg": "./assets/home-2.0c0430d4.svg",
        "../assets/images/svg/img_wing.svg": Aa,
        "../assets/images/svg/paypal.svg": "./assets/paypal.245a62e2.svg",
        "../assets/images/svg/story.svg": "./assets/story.a2e17494.svg",
        "../assets/images/svg/world_2.svg": "./assets/world_2.5efbb68e.svg",
        "../assets/images/svg/world_2_light.svg":
          "./assets/world_2_light.01526311.svg",
      }[`../assets/images/${e}`],
      self.location
    ).href,
  ja = {};
async function Sa(e) {
  const t = e.map((e) =>
    (async function (e) {
      if (ja[e]) return ja[e];
      let t;
      const a = new Promise((a) => {
        (t = new Image()),
          (t.onload = () => {
            a(t), (ja[e] = t);
          }),
          (t.src = e);
      });
      return await a, t;
    })(e)
  );
  return await Promise.all(t);
}
const Oa = {
    setup() {
      const { t: e, setPrefix: t } = Me(),
        a = K(),
        s = pe(),
        l = x(!0);
      t({ $current: "pages.home" });
      return (
        (async () => {
          const e = [
            ka("home/person.png"),
            ka("home/bg-master.png"),
            ka("home/bg-left-top.png"),
            ka("home/bg-left-bottom.png"),
            ka("profile/about-cover2.webp"),
            ka("svg/img_wing.svg"),
          ];
          qt.showLoading(),
            await Sa(e),
            qt.close(),
            (l.value = !1),
            ue(() => {
              l.value = !0;
            });
        })(),
        {
          t: e,
          changePage: (e = "/home") => {
            s.path === e && a.go(0), a.push(e);
          },
          router: a,
        }
      );
    },
  },
  Ea = { class: "home" },
  La = N(
    '<div class="home-bg-middle"></div><div class="home-bg-accessory"><div><img src="' +
      Aa +
      '" alt=""><img src="' +
      Aa +
      '" alt=""></div><div><img src="' +
      Aa +
      '" alt=""><img src="' +
      Aa +
      '" alt=""></div></div><img class="home-bg-person" src="./assets/person.7b1a05ef.png" alt=""><img class="home-bg-line" src="' +
      Ca +
      '" alt=""><img class="home-bg-left-icon" src="' +
      xa +
      '" alt=""><img class="home-bg-left-string" src="' +
      _a +
      '" alt=""><div class="home-nav"><div class="home-nav-shape"></div><svg class="home-nav-svg" width="75" height="75"><polygon points="0,0 60,0 0,75" fill="white"></polygon></svg></div>',
    7
  ),
  qa = { class: "home-nav-link" },
  Ba = { href: "https://github.com/chiyum/chiyum", target: "_blank" };
var Ha = ke(Oa, [
    [
      "render",
      function (e, t, a, s, l, o) {
        return (
          g(),
          b("div", Ea, [
            La,
            y("ul", qa, [
              y(
                "li",
                { onClick: t[0] || (t[0] = (e) => s.changePage("/about")) },
                W(s.t("$current.nav.about")),
                1
              ),
              y(
                "li",
                { onClick: t[1] || (t[1] = (e) => s.changePage("/home")) },
                W(s.t("$current.nav.home")),
                1
              ),
              y("li", null, [y("a", Ba, W(s.t("$current.nav.more")), 1)]),
            ]),
          ])
        );
      },
    ],
  ]),
  Pa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ha },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Ta = {},
  za = { class: "footer" },
  Ma = [
    y(
      "div",
      { class: "container" },
      [
        y("div", { class: "row row-justify-center" }, [
          y("div", { class: "col col-lg-3 col-md-12" }, [
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
          ]),
          y("div", { class: "col col-lg-3 col-md-12" }, [
            y("div", { class: "footer_group" }, [
              y("h3", { class: "u-ts-6 u-text-secondary" }, "Navigation"),
              y("ul", { role: "list", class: "footer_list" }, [
                y("li", { class: "footer_list-item" }, [
                  y("a", { href: "/", class: "footer_link w-inline-block" }, [
                    y("div", { class: "u-ts-3" }, "Overview"),
                  ]),
                ]),
                y("li", { class: "footer_list-item" }, [
                  y(
                    "a",
                    { href: "/cases", class: "footer_link w-inline-block" },
                    [y("div", { class: "u-ts-3" }, "Cases")]
                  ),
                ]),
                y("li", { class: "footer_list-item" }, [
                  y(
                    "a",
                    { href: "/about", class: "footer_link w-inline-block" },
                    [y("div", { class: "u-ts-3" }, "Services")]
                  ),
                ]),
                y("li", { class: "footer_list-item" }, [
                  y(
                    "a",
                    {
                      href: "/design-trial",
                      class: "footer_link w-inline-block",
                    },
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
          ]),
          y("div", { class: "col col-md-hide" }),
          y("div", { class: "col col-lg-4 col-md-12 col-md-first" }, [
            y("a", { href: "/", class: "footer-wordmark w-inline-block" }, [
              y("div", { class: "wordmark w-embed" }, [
                y(
                  "svg",
                  {
                    width: "100%",
                    style: {},
                    viewBox: "0 0 678 88",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  [
                    y("path", {
                      d:
                        "M134.299 43.7526C143.563 41.1205 148.255 33.7208 148.255 23.5684C148.255 9.02438 138.288 0 119.207 0H0V88.0232H119.2C139.424 88.0232 149.256 78.2468 149.256 63.3197C149.256 53.1601 144.131 46.0158 134.299 43.7597V43.7526ZM27.9189 22.0572H113.933C118.774 22.0572 120.343 23.9373 120.343 27.4492C120.343 30.961 118.774 32.9688 113.933 32.9688H27.9189V22.0643V22.0572ZM114.934 65.817H27.9189V54.9125H114.934C119.775 54.9125 121.479 56.9132 121.479 60.3044C121.479 63.9369 119.775 65.8241 114.934 65.8241V65.817Z",
                      fill: "currentColor",
                    }),
                    y("path", {
                      d:
                        "M444.552 33.4796L356.409 32.2238C351.851 32.2238 349.565 30.2161 349.565 27.0802C349.565 24.1998 351.702 22.3197 356.259 22.3197H434.863C438.284 22.3197 442.274 23.9515 442.699 28.336H473.607C472.606 12.1602 458.65 0 437.432 0H351.993C332.06 0 319.517 11.4082 319.517 27.584C319.517 43.7597 331.769 54.1676 351.418 54.5436L439.136 55.5439C443.693 55.6716 445.688 57.6723 445.688 60.5598C445.688 63.4473 443.835 65.6964 439.136 65.6964H358.68C354.691 65.6964 350.708 63.8163 349.849 59.4247H319.084C319.794 75.7282 334.751 88.0161 356.401 88.0161H443.97C464.336 88.0161 475.871 76.4802 475.871 60.5598C475.871 44.6395 464.762 33.8485 444.538 33.4725L444.552 33.4796Z",
                      fill: "currentColor",
                    }),
                    y("path", {
                      d: "M512.021 0H482.967V88.0232H512.021V0Z",
                      fill: "currentColor",
                    }),
                    y("path", {
                      d:
                        "M645.914 33.4796L557.77 32.2238C553.213 32.2238 550.927 30.2161 550.927 27.0802C550.927 24.1998 553.064 22.3197 557.621 22.3197H636.224C639.646 22.3197 643.635 23.9515 644.061 28.336H674.969C673.975 12.1602 660.012 0 638.794 0H553.355C533.422 0 520.879 11.4082 520.879 27.584C520.879 43.7597 533.131 54.1676 552.78 54.5436L640.498 55.5439C645.055 55.6716 647.05 57.6723 647.05 60.5598C647.05 63.4473 645.197 65.6964 640.498 65.6964H560.042C556.053 65.6964 552.07 63.8163 551.211 59.4247H520.446C521.156 75.7282 536.105 88.0161 557.763 88.0161H645.332C665.698 88.0161 677.233 76.4802 677.233 60.5598C677.233 44.6395 666.131 33.8485 645.9 33.4725L645.914 33.4796Z",
                      fill: "currentColor",
                    }),
                    y("path", {
                      d:
                        "M215.059 0L145.272 88.0232H177.607L195.005 65.7389H276.214L293.662 88.0232H326.99L257.786 0H215.059ZM211.63 44.4479L235.567 13.792L259.56 44.4479H211.63Z",
                      fill: "currentColor",
                    }),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
        y("div", { class: "footer-copyright" }, [
          y("div", { "data-copyright": "" }, [
            X(" Copyright © "),
            y("span", { "data-dynamic": "year" }, "2024"),
          ]),
        ]),
      ],
      -1
    ),
  ];
var Ia = ke(Ta, [
  [
    "render",
    function (e, t) {
      return g(), b("footer", za, Ma);
    },
  ],
]);
const Va = ["data-index"],
  Da = ["src"],
  Qa = [
    N(
      '<div class="btn-text-wrap" data-v-57918575><div class="btn-text cc-scroll" data-v-57918575>Scroll</div><div class="btn-text cc-bottom cc-scroll" data-v-57918575>Scroll</div></div><div class="btn-icon cc-small w-embed" data-v-57918575><svg width="100%" style="" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-57918575><path d="M7.30218 1.55469C7.47098 1.55469 7.60782 1.68527 7.60782 1.84635V11.2789L10.322 8.68302C10.3794 8.6278 10.4575 8.59675 10.539 8.59675C10.6205 8.59675 10.6986 8.6278 10.756 8.68302L11.1839 9.09719C11.2418 9.15195 11.2743 9.2265 11.2743 9.30427C11.2743 9.38204 11.2418 9.45659 11.1839 9.51135L7.43666 13.093C7.35076 13.1751 7.23423 13.2213 7.11267 13.2214H6.88038C6.75909 13.22 6.64303 13.174 6.5564 13.093L2.80916 9.51135C2.7513 9.45659 2.71875 9.38204 2.71875 9.30427C2.71875 9.2265 2.7513 9.15195 2.80916 9.09719L3.24318 8.68302C3.29952 8.62815 3.37663 8.59723 3.45713 8.59723C3.53763 8.59723 3.61475 8.62815 3.67109 8.68302L6.38523 11.2789V1.84635C6.38523 1.68527 6.52208 1.55469 6.69088 1.55469H7.30218Z" fill="currentColor" data-v-57918575></path></svg></div>',
      2
    ),
  ];
const Ua = {
  components: {
    Footer: Ia,
    View: ke(
      {
        setup(e) {
          const t = _(),
            a = de({ x: 0, y: 0 }),
            s = x([
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552350_home-hero-08.webp",
                css: {
                  left: "-5%",
                  top: "20%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 2.5s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552341_home-hero-01.webp",
                css: {
                  left: "10%",
                  top: "50%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 1.5s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552342_home-hero-09.webp",
                css: {
                  left: "20%",
                  top: "15%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 3.5s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552355_home-hero-13.webp",
                css: {
                  left: "33%",
                  top: "47%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 2s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552340_home-hero-02.webp",
                css: {
                  left: "30%",
                  top: "80%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 1s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552352_home-hero-05.webp",
                css: {
                  left: "50%",
                  top: "5%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 2.5s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552356_home-hero-14.webp",
                css: {
                  left: "75%",
                  top: "30%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 3s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552343_home-hero-03.webp",
                css: {
                  left: "55%",
                  top: "60%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 3.5s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552351_home-hero-06.webp",
                css: {
                  left: "65%",
                  top: "70%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 2s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235b_home-seen.webp",
                css: {
                  left: "85%",
                  top: "10%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 1.5s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55233e_home-hero-07.webp",
                css: {
                  left: "85%",
                  top: "70%",
                  transform: "translate3d(1px, 2px, 1px)",
                  enterAnimation: "zoomIn 2.5s forwards",
                  leaveAnimation: "fadeOut 1s forwards",
                },
                isEnter: !0,
              },
            ]),
            l = x(!1),
            o = {
              rootMargin: "0px",
              threshold: Array(100)
                .fill()
                .map((e, t) => 0.01 * t),
            },
            i = new IntersectionObserver((e) => {
              e.forEach((e) => {
                var t, a;
                const { intersectionRatio: l, target: o } = e,
                  i = null == (t = o.dataset) ? void 0 : t.index;
                if ("img" === (null == (a = o.dataset) ? void 0 : a.item))
                  s.value[i].isEnter = !(l < 0.5);
                else
                  o.style.animation =
                    l < 1 ? "fadeOut 2s forwards" : "zoomIn 3.5s forwards";
              });
            }, o),
            r = () => {
              const e = document.getElementById("studio");
              if (e) {
                const t = e.offsetTop;
                window.scrollTo({ top: t, behavior: "smooth" });
              }
            };
          return (
            A(
              () => t.state.app.isLoading,
              (e) => {
                if (((l.value = !e), e)) {
                  ((e) => {
                    for (const t of e) i.unobserve(t);
                  })([
                    ...document.querySelectorAll(".img-wrap"),
                    document.querySelector(".btn-contain-scroll"),
                  ]);
                } else
                  ue(() => {
                    ((e) => {
                      for (const t of e) i.observe(t);
                    })([
                      ...document.querySelectorAll(".img-wrap"),
                      document.querySelector(".btn-contain-scroll"),
                    ]);
                  });
              }
            ),
            k(() => {
              fe.init();
            }),
            (e, t) => (
              g(),
              b(
                w,
                null,
                [
                  y(
                    "div",
                    {
                      class: "view",
                      onMousemove:
                        t[0] ||
                        (t[0] = (e) =>
                          ((e) => {
                            if (window.innerWidth > 576) {
                              const t = window.innerWidth / 2,
                                s = window.innerHeight / 2;
                              (a.x = ((t - e.clientX) / 100) * 10),
                                (a.y = ((s - e.clientY) / 100) * 10);
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
                              style: R({
                                transform: `translate3d(${Z(a).x}px, ${
                                  Z(a).y
                                }px, 0) rotateX(${Z(a).x / 5}deg) rotateY(${
                                  Z(a).y / 8
                                }deg)`,
                                transformOrigin: "center center",
                              }),
                            },
                            [
                              (g(!0),
                              b(
                                w,
                                null,
                                F(
                                  s.value,
                                  (e, t) => (
                                    g(),
                                    b(
                                      "div",
                                      {
                                        class:
                                          "img-wrap home-hero_image-placer",
                                        key: e.url + t,
                                        style: R({
                                          left: e.css.left,
                                          top: e.css.top,
                                          animation: e.isEnter
                                            ? e.css.enterAnimation
                                            : e.css.leaveAnimation,
                                        }),
                                        "data-index": t,
                                        "data-item": "img",
                                      },
                                      [
                                        y(
                                          "img",
                                          {
                                            src: e.url,
                                            style: R({
                                              transform: `translate3d(${
                                                Z(a).x / 2
                                              }px,${Z(a).y / 2}px, 1px)`,
                                            }),
                                          },
                                          null,
                                          12,
                                          Da
                                        ),
                                      ],
                                      12,
                                      Va
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            4
                          ))
                        : q("", !0),
                    ],
                    32
                  ),
                  y(
                    "div",
                    { "data-reveal": "button", class: "home-hero_btn" },
                    [
                      y(
                        "div",
                        { class: "btn-contain btn-contain-scroll op0" },
                        [
                          y(
                            "div",
                            { class: "btn-scroll w-inline-block", onClick: r },
                            Qa
                          ),
                        ]
                      ),
                    ]
                  ),
                ],
                64
              )
            )
          );
        },
      },
      [["__scopeId", "data-v-57918575"]]
    ),
  },
  setup() {
    const e = x("");
    return (
      k(() => {
        const e = new IntersectionObserver((e) => {
          e.forEach((e) => {
            e.isIntersecting
              ? e.target.classList.add("active")
              : e.target.classList.remove("active");
          });
        });
        document.querySelectorAll(".target_line").forEach((t) => {
          e.observe(t);
        });
      }),
      { a: e }
    );
  },
};
fe.init();
const Fa = (e) => (me("data-v-764ed4b3"), (e = e()), ve(), e),
  Ra = Fa(() =>
    y("div", { class: "container" }, [y("div", { class: "target_line" })], -1)
  ),
  Wa = Fa(() =>
    y(
      "section",
      { id: "studio", class: "section" },
      [
        y("div", { class: "section-title_component" }, [
          y("div", { class: "container" }, [
            y(
              "div",
              {
                class: "section-title_wrapper",
                "data-aos": "fade-up",
                "data-aos-duration": "700",
              },
              [
                y(
                  "div",
                  { class: "section-title_dot", style: { opacity: "1" } },
                  [
                    y("div", {
                      class: "section-title_dot-fill",
                      style: { width: "100%", height: "100%" },
                    }),
                  ]
                ),
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
                    [y("h2", { class: "u-ts-4" }, "About Basis")]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
        y("div", { class: "container" }, [
          y("div", { class: "w-layout-grid pair-grid" }, [
            y(
              "div",
              {
                "data-animation-element": "group",
                id: "w-node-_1d0de869-a418-1ffe-c192-cd0abecc9833-af552307",
              },
              [
                y("h3", { "data-animation-element": "title", style: {} }, [
                  y(
                    "div",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "800",
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
                        " increases "
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
                        " the "
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
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
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
                        " value "
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
                        " digital "
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
                      "data-aos": "fade-up",
                      "data-aos-duration": "800",
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
                        " products "
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
                        " and "
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
                        " their "
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
                      "data-aos": "fade-up",
                      "data-aos-duration": "900",
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
                        " brands "
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
                        " through "
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
                      "data-aos": "fade-up",
                      "data-aos-duration": "1000",
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
                        " design. "
                      ),
                    ]
                  ),
                ]),
                y("div", { class: "btn-group" }, [
                  y(
                    "div",
                    {
                      class: "btn-item cc-1",
                      style: {
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      },
                    },
                    [
                      y(
                        "a",
                        {
                          href: "/cases",
                          class: "btn w-inline-block",
                          "data-aos": "fade-left",
                          "data-aos-duration": "1000",
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
                              " View cases "
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
                              " View cases "
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
                      "data-aos": "fade-up",
                      "data-aos-duration": "3000",
                      style: {
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      },
                    },
                    [
                      y(
                        "a",
                        {
                          href: "/about",
                          class: "btn cc-secondary w-inline-block",
                          "data-aos": "fade-left",
                          "data-aos-duration": "1000",
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
                              " About us "
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
                              " About us "
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
        y("div", { class: "u-mt-8-75" }, [
          y("div", { class: "marquee" }, [
            y("div", { class: "marquee_row w-dyn-list" }, [
              y(
                "div",
                {
                  role: "list",
                  class: "marquee_content w-dyn-items",
                  style: {
                    transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                    "will-change": "transform",
                  },
                },
                [
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y(
                        "div",
                        {
                          class: "marquee_item cc-1",
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
                            class: "marquee_logo",
                          }),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y(
                        "div",
                        {
                          class: "marquee_item cc-2",
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
                            class: "marquee_logo",
                          }),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y(
                        "div",
                        {
                          class: "marquee_item cc-3",
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
                            class: "marquee_logo",
                          }),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y(
                        "div",
                        {
                          class: "marquee_item cc-4",
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
                            class: "marquee_logo",
                          }),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y(
                        "div",
                        {
                          class: "marquee_item cc-5",
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
                            class: "marquee_logo",
                          }),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y(
                        "div",
                        {
                          class: "marquee_item cc-6",
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
                            class: "marquee_logo",
                          }),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y(
                        "div",
                        {
                          class: "marquee_item cc-7",
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
                            class: "marquee_logo",
                          }),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y(
                        "div",
                        {
                          class: "marquee_item cc-8",
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
                            class: "marquee_logo",
                          }),
                        ]
                      ),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y(
                        "div",
                        {
                          class: "marquee_item cc-9",
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
                            class: "marquee_logo",
                          }),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]),
            y("div", { class: "marquee_row w-dyn-list" }, [
              y(
                "div",
                {
                  role: "list",
                  class: "marquee_content w-dyn-items",
                  style: {
                    transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                    "will-change": "transform",
                  },
                },
                [
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552412_logo_prosody.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                ]
              ),
            ]),
            y("div", { class: "marquee_row w-dyn-list" }, [
              y(
                "div",
                {
                  role: "list",
                  class: "marquee_content w-dyn-items",
                  style: {
                    transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                    "will-change": "transform",
                  },
                },
                [
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  y(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      y("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552412_logo_prosody.png",
                        alt: "",
                        class: "marquee_logo",
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
    )
  ),
  Za = Fa(() =>
    y("div", { class: "container" }, [y("div", { class: "target_line" })], -1)
  ),
  Na = Fa(() =>
    y(
      "section",
      { class: "section" },
      [
        y("div", { class: "section-title_component" }, [
          y("div", { class: "container" }, [
            y(
              "div",
              {
                class: "section-title_wrapper",
                "data-aos": "fade-up",
                "data-aos-duration": "700",
              },
              [
                y(
                  "div",
                  { class: "section-title_dot", style: { opacity: "1" } },
                  [
                    y("div", {
                      class: "section-title_dot-fill",
                      style: { width: "100%", height: "100%" },
                    }),
                  ]
                ),
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
                    [y("h2", { class: "u-ts-4" }, "What We Do")]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
        y("div", { class: "container" }, [
          y("div", { "data-animation-element": "group" }, [
            y(
              "h3",
              { "data-animation-element": "title", class: "h1", style: {} },
              [
                y(
                  "div",
                  {
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
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
                      " Digital "
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
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
                      " Products "
                    ),
                  ]
                ),
              ]
            ),
          ]),
          y("div", { class: "sticky-pair" }, [
            y("div", { class: "w-layout-grid pair-grid" }, [
              y(
                "div",
                { id: "w-node-eb3e6ea8-5a10-d5fc-f561-3f621ba6f385-af552307" },
                [
                  y(
                    "div",
                    {
                      id:
                        "w-node-_137ddbb9-11b4-d169-f149-eca9f54873e8-af552307",
                      class: "card-wrapper cc-small",
                    },
                    [
                      y(
                        "div",
                        {
                          id:
                            "w-node-a3cc95fc-d4f5-0398-7194-1e8506932d8d-af552307",
                          class: "w-dyn-list",
                        },
                        [
                          y("div", { role: "list", class: "w-dyn-items" }, [
                            y(
                              "div",
                              { role: "listitem", class: "w-dyn-item" },
                              [
                                y("div", { class: "card-wrapper cc-small" }, [
                                  y(
                                    "div",
                                    {
                                      class: "card-animation cc-40",
                                      "data-aos": "fade-up",
                                      "data-aos-duration": "700",
                                    },
                                    [
                                      y(
                                        "a",
                                        {
                                          "data-mouse-class": "cc-text",
                                          href: "/cases/yoginess-brand",
                                          class: "card is-link w-inline-block",
                                          style: {
                                            transform:
                                              "translate3d(0px, 0%, 0px)",
                                            "transform-style": "preserve-3d",
                                            opacity: "1",
                                          },
                                        },
                                        [
                                          y(
                                            "div",
                                            { class: "card-image_wrapper" },
                                            [
                                              y(
                                                "div",
                                                {
                                                  class: "iframe-video_wrapper",
                                                },
                                                [
                                                  y("iframe", {
                                                    class:
                                                      "iframe-video_iframe",
                                                    width: "100%",
                                                    height: "100%",
                                                    style: {
                                                      overflow: "hidden",
                                                    },
                                                    frameborder: "0",
                                                    scrolling: "no",
                                                    allow: "fullscreen",
                                                    src:
                                                      "https://app.vidzflow.com/v/XqnSO3RNUV?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                                                    title: "Yoginess 1",
                                                    loading: "lazy",
                                                  }),
                                                  y("div", {
                                                    class:
                                                      "iframe-video_blocker",
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                          y(
                                            "div",
                                            {
                                              class: "card-body",
                                              "data-aos": "fade-up",
                                              "data-aos-duration": "700",
                                            },
                                            [
                                              y(
                                                "div",
                                                { class: "u-overflow-hidden" },
                                                [
                                                  y(
                                                    "div",
                                                    {
                                                      class: "card-up",
                                                      style: {
                                                        transform:
                                                          "translate3d(0px, 0%, 0px)",
                                                        "transform-style":
                                                          "preserve-3d",
                                                      },
                                                    },
                                                    [
                                                      y(
                                                        "h4",
                                                        { class: "u-ts-4" },
                                                        "Yoginess Brand"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
              y(
                "div",
                {
                  id: "w-node-_814776c7-59e4-1835-d274-f4eed26bca88-af552307",
                  class: "w-dyn-list",
                },
                [
                  y("div", { role: "list", class: "w-dyn-items" }, [
                    y("div", { role: "listitem", class: "w-dyn-item" }, [
                      y("div", { class: "card-wrapper cc-large" }, [
                        y("div", { class: "card-animation cc-40" }, [
                          y(
                            "a",
                            {
                              "data-mouse-class": "cc-text",
                              "data-aos": "fade-up",
                              "data-aos-duration": "700",
                              href: "/cases/sable-app",
                              class: "card is-link w-inline-block",
                              style: {
                                transform:
                                  "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
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
                                      "https://app.vidzflow.com/v/Fpm2N6tlSr?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                                    title: "Sable 9",
                                    loading: "lazy",
                                  }),
                                  y("div", { class: "iframe-video_blocker" }),
                                ]),
                              ]),
                              y(
                                "div",
                                {
                                  class: "card-body",
                                  "data-aos": "fade-up",
                                  "data-aos-duration": "700",
                                },
                                [
                                  y("div", { class: "u-overflow-hidden" }, [
                                    y(
                                      "div",
                                      {
                                        class: "card-up",
                                        style: {
                                          transform:
                                            "translate3d(0px, 0%, 0px)",
                                          "transform-style": "preserve-3d",
                                        },
                                      },
                                      [
                                        y("div", { class: "card-large_text" }, [
                                          y(
                                            "h4",
                                            { class: "u-ts-4" },
                                            "Sable App"
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              y(
                "div",
                {
                  id: "w-node-bc6d1a98-c4cb-3434-3589-47eddb3c03ed-af552307",
                  class: "content",
                },
                [
                  y(
                    "div",
                    {
                      class: "content-p cc-1",
                      style: {
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                        opacity: "1",
                      },
                    },
                    [
                      y(
                        "p",
                        {
                          class: "u-ts-3",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        " We help companies grow by harnessing the power of narrative, design, and technology. From new ventures to industry leaders, Basis believes that starting small and establishing core principles creates better design systems for digital products and their brands. "
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
                            href: "/cases",
                            class: "btn w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            y("div", { class: "btn-text-wrap" }, [
                              y("div", { class: "btn-text" }, "View cases"),
                              y(
                                "div",
                                { class: "btn-text cc-bottom" },
                                "View cases"
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
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
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
      ],
      -1
    )
  ),
  Ya = Fa(() =>
    y("div", { class: "container" }, [y("div", { class: "target_line" })], -1)
  ),
  Ka = Fa(() =>
    y(
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
                  [y("h2", { class: "u-ts-4" }, "Capabilities")]
                ),
              ]),
            ]),
          ]),
        ]),
        y("div", { class: "container" }, [
          y("div", { class: "w-layout-grid pair-grid" }, [
            y(
              "div",
              { id: "w-node-_6e6a6411-9d71-b91d-1723-e94f35341c18-af552307" },
              [
                y("div", { class: "service-list" }, [
                  y("div", { class: "logomark_component" }, [
                    y(
                      "div",
                      {
                        class: "logomark w-embed",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
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
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [y("h3", { class: "u-tc-caps" }, "Research")]
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
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [y("h3", { class: "u-tc-caps" }, "Brand Strategy")]
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
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [
                            y(
                              "h3",
                              { class: "u-tc-caps" },
                              "Creative Direction"
                            ),
                          ]
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
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [y("h3", { class: "u-tc-caps" }, "Brand identity")]
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
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [y("h3", { class: "u-tc-caps" }, "UX & UI Design")]
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
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [
                            y(
                              "h3",
                              { class: "u-tc-caps" },
                              "Interaction Design"
                            ),
                          ]
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
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [y("h3", { class: "u-tc-caps" }, "Implementation")]
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
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [
                            y(
                              "h3",
                              { class: "u-tc-caps" },
                              "Webflow Development"
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  y("div", { class: "btn-group" }, [
                    y(
                      "div",
                      {
                        class: "btn-item cc-1",
                        style: {
                          transform:
                            "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                          opacity: "1",
                        },
                      },
                      [
                        y(
                          "a",
                          {
                            href: "/about",
                            class: "btn cc-secondary w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            y("div", { class: "btn-text-wrap" }, [
                              y("div", { class: "btn-text" }, "Our services"),
                              y(
                                "div",
                                { class: "btn-text cc-bottom" },
                                "Our services"
                              ),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
          ]),
        ]),
      ],
      -1
    )
  ),
  Xa = Fa(() =>
    y(
      "section",
      { class: "section cc-apps" },
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
                        " Apps "
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
                      style: {
                        transform:
                          "translate3d(0px, 10%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
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
  $a = Fa(() =>
    y(
      "section",
      { class: "section cc-fd" },
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
                        " Fintech "
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
                        " Design "
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
          y("div", { class: "sticky-pair" }, [
            y("div", { class: "w-layout-grid pair-grid is-leading" }, [
              y(
                "div",
                {
                  id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f41-af552307",
                  class: "w-dyn-list",
                },
                [
                  y("div", { role: "list", class: "w-dyn-items" }, [
                    y("div", { role: "listitem", class: "w-dyn-item" }, [
                      y("div", { class: "card-wrapper cc-large" }, [
                        y(
                          "div",
                          {
                            class: "card-animation cc-40",
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                          },
                          [
                            y(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/seen-brand",
                                class: "card is-link w-inline-block",
                                style: {
                                  transform:
                                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
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
                                        "https://app.vidzflow.com/v/NUxOAlqRFn?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&piv=true&bc=%234E5FFD&controls=false",
                                      title: "Seen 1",
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
                                            "translate3d(0px, 0%, 0px)",
                                          "transform-style": "preserve-3d",
                                        },
                                      },
                                      [
                                        y("div", { class: "card-large_text" }, [
                                          y(
                                            "h4",
                                            { class: "u-ts-4" },
                                            "Seen Brand"
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
              y("div", null, [
                y(
                  "div",
                  {
                    id: "w-node-e23686ee-2a5d-d68e-2ddf-02d095aea2fe-af552307",
                    class: "card-wrapper cc-small",
                  },
                  [
                    y(
                      "div",
                      {
                        id:
                          "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f3a-af552307",
                        class: "w-dyn-list",
                      },
                      [
                        y("div", { role: "list", class: "w-dyn-items" }, [
                          y("div", { role: "listitem", class: "w-dyn-item" }, [
                            y("div", { class: "card-wrapper cc-small" }, [
                              y(
                                "div",
                                {
                                  class: "card-animation cc-40",
                                  "data-aos": "fade-up",
                                  "data-aos-duration": "800",
                                },
                                [
                                  y(
                                    "a",
                                    {
                                      "data-mouse-class": "cc-text",
                                      href: "/cases/sable-app",
                                      class: "card is-link w-inline-block",
                                      style: {
                                        transform: "translate3d(0px, 0%, 0px)",
                                        "transform-style": "preserve-3d",
                                        opacity: "1",
                                      },
                                    },
                                    [
                                      y(
                                        "div",
                                        { class: "card-image_wrapper" },
                                        [
                                          y(
                                            "div",
                                            { class: "iframe-video_wrapper" },
                                            [
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
                                              y("div", {
                                                class: "iframe-video_blocker",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      y("div", { class: "card-body" }, [
                                        y(
                                          "div",
                                          { class: "u-overflow-hidden" },
                                          [
                                            y(
                                              "div",
                                              {
                                                class: "card-up",
                                                style: {
                                                  transform:
                                                    "translate3d(0px, 0%, 0px)",
                                                  "transform-style":
                                                    "preserve-3d",
                                                },
                                              },
                                              [
                                                y(
                                                  "h4",
                                                  { class: "u-ts-4" },
                                                  "Sable App"
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
              y(
                "div",
                {
                  id: "w-node-_591e678b-2794-a4c1-b9e4-4c34713bcb6d-af552307",
                  class: "content is-grid",
                },
                [
                  y(
                    "div",
                    {
                      class: "content-p cc-1",
                      style: {
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                        opacity: "1",
                      },
                    },
                    [
                      y(
                        "p",
                        {
                          class: "u-ts-3",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                          "data-aos-delay": "200",
                        },
                        " Basis knows fintech. We’ve developed a strong focus on design for financial services, like mobile apps, bank brands, and credit card design. Our programs are optimized for startups, allowing Basis to start small, work fast, and keep you ahead of your roadmap. When the most innovative companies want to cut through a highly-regulated, ever-changing financial world, they come to the experts. "
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
                            href: "/fintech-design",
                            class: "btn w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            y("div", { class: "btn-text-wrap" }, [
                              y(
                                "div",
                                { class: "btn-text" },
                                "Fintech services"
                              ),
                              y(
                                "div",
                                { class: "btn-text cc-bottom" },
                                "Fintech services"
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
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
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
      ],
      -1
    )
  ),
  Ga = Fa(() =>
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
                  "data-aos-duration": "1000",
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
                        " Branding "
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
          y("div", { class: "sticky-pair" }, [
            y("div", { class: "w-layout-grid pair-grid" }, [
              y(
                "div",
                { id: "w-node-dc0c39cf-ca9b-7980-3885-608a3bb047ce-af552307" },
                [
                  y(
                    "div",
                    {
                      id:
                        "w-node-_22d42303-51c3-58a5-286f-187c6fce5e6a-af552307",
                      class: "card-wrapper cc-small",
                    },
                    [
                      y(
                        "div",
                        {
                          id:
                            "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192626-af552307",
                          class: "w-dyn-list",
                        },
                        [
                          y("div", { role: "list", class: "w-dyn-items" }, [
                            y(
                              "div",
                              { role: "listitem", class: "w-dyn-item" },
                              [
                                y("div", { class: "card-wrapper cc-small" }, [
                                  y(
                                    "div",
                                    {
                                      class: "card-animation cc-40",
                                      "data-aos": "fade-up",
                                      "data-aos-duration": "800",
                                    },
                                    [
                                      y(
                                        "a",
                                        {
                                          "data-mouse-class": "cc-text",
                                          href:
                                            "/cases/gaffa-brand-and-website",
                                          class: "card is-link w-inline-block",
                                          style: {
                                            transform:
                                              "translate3d(0px, 0%, 0px)",
                                            "transform-style": "preserve-3d",
                                            opacity: "1",
                                          },
                                        },
                                        [
                                          y(
                                            "div",
                                            { class: "card-image_wrapper" },
                                            [
                                              y(
                                                "div",
                                                {
                                                  class: "iframe-video_wrapper",
                                                },
                                                [
                                                  y("iframe", {
                                                    class:
                                                      "iframe-video_iframe",
                                                    width: "100%",
                                                    height: "100%",
                                                    style: {
                                                      overflow: "hidden",
                                                    },
                                                    frameborder: "0",
                                                    scrolling: "no",
                                                    allow: "fullscreen",
                                                    src:
                                                      "https://app.vidzflow.com/v/wqEi0zfmTg?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                                                    title: "Gaffa 1",
                                                    loading: "lazy",
                                                  }),
                                                  y("div", {
                                                    class:
                                                      "iframe-video_blocker",
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                          y("div", { class: "card-body" }, [
                                            y(
                                              "div",
                                              { class: "u-overflow-hidden" },
                                              [
                                                y(
                                                  "div",
                                                  {
                                                    class: "card-up",
                                                    style: {
                                                      transform:
                                                        "translate3d(0px, 0%, 0px)",
                                                      "transform-style":
                                                        "preserve-3d",
                                                    },
                                                  },
                                                  [
                                                    y(
                                                      "h4",
                                                      { class: "u-ts-4" },
                                                      " Gaffa Brand & Website "
                                                    ),
                                                  ]
                                                ),
                                              ]
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
                        ]
                      ),
                    ]
                  ),
                ]
              ),
              y(
                "div",
                {
                  id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e19262d-af552307",
                  class: "w-dyn-list",
                },
                [
                  y("div", { role: "list", class: "w-dyn-items" }, [
                    y("div", { role: "listitem", class: "w-dyn-item" }, [
                      y("div", { class: "card-wrapper cc-large" }, [
                        y(
                          "div",
                          {
                            class: "card-animation cc-40",
                            "data-aos": "fade-up",
                            "data-aos-duration": "700",
                          },
                          [
                            y(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/sable-brand",
                                class: "card is-link w-inline-block",
                                style: {
                                  transform:
                                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
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
                                        "https://app.vidzflow.com/v/haxQWmbFQh?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                                      title: "Sable 10",
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
                                            "translate3d(0px, 0%, 0px)",
                                          "transform-style": "preserve-3d",
                                        },
                                      },
                                      [
                                        y("div", { class: "card-large_text" }, [
                                          y(
                                            "h4",
                                            { class: "u-ts-4" },
                                            "Sable Brand"
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
              y(
                "div",
                {
                  id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192634-af552307",
                  class: "content is-grid",
                },
                [
                  y(
                    "div",
                    {
                      class: "content-p cc-1",
                      style: {
                        transform:
                          "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                        opacity: "1",
                      },
                    },
                    [
                      y(
                        "p",
                        {
                          class: "u-ts-3",
                          "data-aos": "fade-up",
                          "data-aos-duration": "800",
                        },
                        " Brand power: the multiple your customers will pay for your product, over that of your closest competition, because your name is on it. Basis drives brand power, because unlike other agencies that only focus on experience design or brand development, we seamlessly integrate both. When you start with Basis, we’ll build a brand book and product design kit that (finally) talk to each other. "
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
                            href: "/cases",
                            class: "btn w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            y("div", { class: "btn-text-wrap" }, [
                              y("div", { class: "btn-text" }, "View cases"),
                              y(
                                "div",
                                { class: "btn-text cc-bottom" },
                                "View cases"
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
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
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
                                " Design trial "
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
                                " Design trial "
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
    )
  ),
  Ja = N(
    '<section class="section" data-v-764ed4b3><div class="section-title_component" data-v-764ed4b3><div class="container" data-v-764ed4b3><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-764ed4b3><div class="section-title_dot" style="opacity:1;" data-v-764ed4b3></div><div class="u-overflow-hidden" data-v-764ed4b3><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-764ed4b3><h2 class="u-ts-4" data-v-764ed4b3>Contact Us</h2></div></div></div></div></div><div class="container" data-v-764ed4b3><div class="w-layout-grid pair-grid" data-v-764ed4b3><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67" data-v-764ed4b3><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext" data-v-764ed4b3><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700" data-v-764ed4b3><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-764ed4b3><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-764ed4b3><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3><div style="position:relative;display:inline-block;" data-v-764ed4b3> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    1
  ),
  es = Fa(() =>
    y(
      "div",
      null,
      [
        y("aside", { class: "pre-footer" }, [
          y(
            "a",
            {
              "data-mouse-text": "Read Next",
              "data-mouse-class": "cc-text",
              href: "/cases",
              class: "section cc-pre-footer w-inline-block",
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
                    "https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                  title: "Sable 12",
                  loading: "lazy",
                }),
                y("div", { class: "iframe-video_blocker" }),
              ]),
              y("div", { class: "pre-footer_gradient" }),
              y("div", { class: "marquee" }, [
                y(
                  "div",
                  {
                    class: "marquee_content cc-text transparent",
                    style: {
                      "will-change": "transform",
                      transform:
                        "translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Case Studies ")]
                    ),
                    y(
                      "div",
                      {
                        class: "marquee_item cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Case Studies ")]
                    ),
                    y(
                      "div",
                      {
                        class: "marquee_item cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Case Studies ")]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    class: "marquee_content cc-text transparent",
                    style: {
                      "will-change": "transform",
                      transform:
                        "translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Case Studies ")]
                    ),
                    y(
                      "div",
                      {
                        class: "marquee_item cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Case Studies ")]
                    ),
                    y(
                      "div",
                      {
                        class: "marquee_item cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Case Studies ")]
                    ),
                  ]
                ),
              ]),
              y("div", { class: "pre-footer_button" }, [
                y("div", { class: "btn cc-large-landscape" }, [
                  y("div", { class: "btn-text-wrap" }, [
                    y(
                      "div",
                      { class: "btn-text cc-large-landscape" },
                      "REad Next"
                    ),
                    y(
                      "div",
                      { class: "btn-text cc-bottom cc-large-landscape" },
                      "Button"
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
          y(
            "a",
            {
              "data-mouse-text": "Read Next",
              "data-mouse-class": "cc-text",
              href: "/design-trial",
              class: "section cc-pre-footer w-inline-block",
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
                    "https://app.vidzflow.com/v/B3TEbIzupw?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                  title: "Trial 1",
                  loading: "lazy",
                }),
                y("div", { class: "iframe-video_blocker" }),
              ]),
              y("div", { class: "pre-footer_gradient" }),
              y("div", { class: "marquee" }, [
                y(
                  "div",
                  {
                    class: "marquee_content cc-text transparent",
                    style: {
                      "will-change": "transform",
                      transform: "translate3d(-69%, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Design Trial ")]
                    ),
                    y(
                      "div",
                      {
                        class: "marquee_item cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Design Trial ")]
                    ),
                    y(
                      "div",
                      {
                        class: "marquee_item cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Design Trial ")]
                    ),
                  ]
                ),
                y(
                  "div",
                  {
                    class: "marquee_content cc-text transparent",
                    style: {
                      "will-change": "transform",
                      transform: "translate3d(-69%, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    y(
                      "div",
                      {
                        class: "marquee_item cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Design Trial ")]
                    ),
                    y(
                      "div",
                      {
                        class: "marquee_item cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Design Trial ")]
                    ),
                    y(
                      "div",
                      {
                        class: "marquee_item cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [y("div", { class: "h1" }, "Design Trial ")]
                    ),
                  ]
                ),
              ]),
              y("div", { class: "pre-footer_button" }, [
                y("div", { class: "btn cc-large-landscape" }, [
                  y("div", { class: "btn-text-wrap" }, [
                    y(
                      "div",
                      { class: "btn-text cc-large-landscape" },
                      "REad Next"
                    ),
                    y(
                      "div",
                      { class: "btn-text cc-bottom cc-large-landscape" },
                      "Button"
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
        ]),
      ],
      -1
    )
  );
var ts = ke(Ua, [
    [
      "render",
      function (e, t, a, s, l, o) {
        const i = j("View"),
          r = j("Footer");
        return (
          g(),
          b(
            w,
            null,
            [L(i), Ra, Wa, Za, Na, Ya, Ka, Xa, $a, Ga, Ja, es, L(r)],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-764ed4b3"],
  ]),
  as = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ts },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ss = {
    "../pages/about.vue": () =>
      Nt(
        () =>
          Promise.resolve().then(function () {
            return sa;
          }),
        void 0
      ),
    "../pages/demo.vue": () =>
      Nt(
        () =>
          Promise.resolve().then(function () {
            return wa;
          }),
        void 0
      ),
    "../pages/home.vue": () =>
      Nt(
        () =>
          Promise.resolve().then(function () {
            return Pa;
          }),
        void 0
      ),
    "../pages/index.vue": () =>
      Nt(
        () =>
          Promise.resolve().then(function () {
            return as;
          }),
        void 0
      ),
  },
  ls = {
    "../pages/about.vue": sa,
    "../pages/demo.vue": wa,
    "../pages/home.vue": Pa,
    "../pages/index.vue": as,
  },
  os = [];
for (let xs in ss) {
  let e = xs.replace("../pages", "").toLowerCase().replace(".vue", "");
  (e = e.replace(/\/index$/, "")),
    (e = e.replace(/\/_+/g, "/:")),
    os.push({
      path: e,
      name: e,
      meta: {
        layout: ls[xs].default.layout || "layout-default",
        title:
          null != (a = null == (t = ls[xs].default) ? void 0 : t.title)
            ? a
            : "app.project.title",
        header:
          null != (l = null == (s = ls[xs].default) ? void 0 : s.header)
            ? l
            : "header-default",
        scroll:
          null != (i = null == (o = ls[xs].default) ? void 0 : o.noScroll) && i,
      },
      component: ss[xs],
    });
}
const is = ge({
  history: be("./"),
  routes:
    ((rs = { defaultPath: "/home" }),
    [
      {
        path: "/",
        name: "default-path",
        redirect: { name: M({ defaultPath: "/" }, rs).defaultPath },
      },
      ...os,
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
var rs;
is.beforeEach(async (e, t, a) => {
  a();
});
var ns = Object.freeze(
  Object.defineProperty({ __proto__: null, default: is }, Symbol.toStringTag, {
    value: "Module",
  })
);
const cs = ye({ modules: Wt });
he(cs, is);
var ds = Object.freeze(
  Object.defineProperty({ __proto__: null, default: cs }, Symbol.toStringTag, {
    value: "Module",
  })
);
const ps = {
    use(e) {
      e.interceptors.response.use(
        async function (t) {
          if (100004 === t.data.code) {
            const a = e.get("/app/jwt-token", {
              params: { account: cs.state.auth.user.account },
            });
            1 === a.data.code && V.set("token", a.data.data.jwt_token, !0);
            return await e.request(t.config);
          }
          return t;
        },
        function (e) {
          return Promise.reject(e);
        }
      );
    },
  },
  us = {
    use(e) {
      (window.isAlert = !1),
        e.interceptors.response.use(
          async function (e) {
            const { noredirect: t = !1 } = e.config;
            if (!t && !window.isAlert) {
              const t = e.data;
              switch (t.code) {
                case 0:
                case 100002:
                case 200001:
                case 200002:
                case 200003:
                case 200004:
                case 200005: {
                  const { isConfirmed: e } = await Be.alert({
                    title: `Error(${t.code})`,
                    text: Le.t(`error.code.${t.code}`),
                  });
                  return (
                    e &&
                      (await cs.dispatch("auth/logout"),
                      await is.replace("/login"),
                      (window.isAlert = !1)),
                    Promise.reject(`Error: ${t.code}`)
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
  fs = {
    use(e) {
      e.interceptors.response.use(
        async function (e) {
          const { novalidate: t = !1 } = e.config;
          if (!t) {
            const t = e.data;
            switch (t.code) {
              case 1e5:
              case 100001:
              case 100003:
                await Be.alert({
                  title: `Error(${t.code})`,
                  text: Le.t(`error.code.${t.code}`),
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
class ms {
  constructor() {
    (this.provider = new Ht({}.VITE_REMOTE_API)), this.init();
  }
  init() {
    this.provider.use({}, Pt, ps, us, fs, zt);
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
ms.prototype.install = function (e) {
  const t = "http-service";
  (e.config.globalProperties[t] = this), e.provide(t, this);
};
var vs = new ms(),
  gs = Object.freeze(
    Object.defineProperty(
      { __proto__: null, HttpService: ms, default: vs },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class bs {
  constructor() {
    this.initStates = {
      type: "Modal",
      resolve: () => {},
      title: null,
      text: null,
      component: null,
      showCancelButton: !1,
      showConfirmButton: !1,
      confirmButtonText: Le.t("button.confirm"),
      cancelButtonText: Le.t("button.cancel"),
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
    return cs.state.app.popupState;
  }
  async modal(e = {}) {
    const {
      title: t,
      text: a,
      component: s = null,
      showCancelButton: l = !0,
      showConfirmButton: o = !0,
      confirmButtonText: i = Le.t("button.confirm"),
      cancelButtonText: r = Le.t("button.cancel"),
      allowOutsideClick: n = !0,
      props: c = {},
    } = e;
    return new Promise((e) => {
      cs.commit(
        "app/set/popup",
        v(m({}, this.initStates), {
          type: "Modal",
          resolve: e,
          title: t,
          text: a,
          component: s ? ae(s) : null,
          showCancelButton: l,
          showConfirmButton: o,
          confirmButtonText: i,
          cancelButtonText: r,
          allowOutsideClick: n,
          props: c,
        })
      );
    });
  }
  clear() {
    cs.commit("app/clear/popup");
  }
}
bs.prototype.install = function (e) {
  const t = "popup-service";
  (e.config.globalProperties[t] = this), e.provide(t, this);
};
var ys = new bs();
const hs = {
    "../services/alert-service.js": Bt,
    "../services/http-service.js": gs,
    "../services/i18n-service.js": qe,
    "../services/popup-service.js": Object.freeze(
      Object.defineProperty(
        { __proto__: null, PopupService: bs, default: ys },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../services/router-service.js": ns,
    "../services/storage-service.js": ze,
    "../services/store-service.js": ds,
  },
  ws = {
    install: (e) => {
      for (let t in hs) e.use(hs[t].default);
    },
  };
const _s = we(je);
_s.provide("$jQuery", _e),
  _s.provide("$swal", Be),
  _s.provide("$storage", V),
  _s.provide("$tabsslider", xe),
  _s.use(ct),
  _s.use(Ot),
  _s.use(Ce, { loading: "", error: "" }),
  _s.use(ws),
  _s.mount("#app");
