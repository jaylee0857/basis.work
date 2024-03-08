var e,
  a,
  t,
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
  f = (e, a, t) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[a] = t),
  m = (e, a) => {
    for (var t in a || (a = {})) p.call(a, t) && f(e, t, a[t]);
    if (d) for (var t of d(a)) u.call(a, t) && f(e, t, a[t]);
    return e;
  },
  v = (e, a) => n(e, c(a));
import {
  o as g,
  c as b,
  a as h,
  n as y,
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
  m as z,
  q as T,
  s as M,
  t as I,
  v as V,
  x as D,
  S as F,
  y as U,
  z as Q,
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
  L as ae,
  M as te,
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
  a2 as he,
  a3 as ye,
  a4 as we,
  a5 as _e,
  a6 as xe,
  a7 as Ce,
} from "./vendor.912ced2f.js";
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
const Ae = [
  h(
    "div",
    { class: "icon" },
    [
      h("div", { class: "svg_box" }, [
        h(
          "svg",
          {
            height: "100%",
            style: {},
            viewBox: "0 0 185 80",
            fill: "black",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            h("path", {
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
var ke = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [s, l] of a) t[s] = l;
  return t;
};
var je = ke(
  {
    components: {
      Loading: {
        props: { mode: String },
        setup: (e) => (a, t) => (
          g(),
          b(
            w,
            null,
            [
              h("div", { class: y(["mask", e.mode]) }, null, 2),
              h("div", { class: y(["bg", e.mode]) }, Ae, 2),
            ],
            64
          )
        ),
      },
    },
    setup() {
      const e = _(),
        a = x(!1),
        t = x(""),
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
            t.value !== l &&
              ((a.value = !0),
              setTimeout(() => {
                (a.value = !1), (s.value = "enter");
              }, 2800)),
              (t.value = e.state.route.path);
          }
        ),
        A(a, (a) => {
          e.commit("app/systm/Loading", a);
        }),
        k(() => {
          window.addEventListener("resize", () => {});
        }),
        { layout: o, isShowLoading: a, mode: s, isError: l }
      );
    },
  },
  [
    [
      "render",
      function (e, a, t, s, l, o) {
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
for (let Ss in Se) {
  const e = Ss.replace("../locales/", "").toLowerCase().replace(".js", ""),
    [a, ...t] = e.split("/"),
    s = z(".", t),
    l = Se[Ss].default;
  Oe[a] = T((e, a) => M(e, { [`${s}.${a}`]: l[a] }), Oe[a] || {}, I(l));
}
const Ee = (() => {
    var e, a, t, s;
    const l = V.get("locale");
    if (l) return l;
    let o =
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
    confirmButtonText: o = Le.t("button.confirm"),
    style: i = "",
  }) {
    return this.fire({
      title: e,
      text: a,
      html: l,
      customClass: `swal2-alert ${i}`,
      heightAuto: s,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      willClose: t,
      confirmButtonText: o,
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
const Be = F.mixin({
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
    const a = e.querySelector(".swal2-cancel");
    e.querySelector(".swal2-confirm").blur(), a.blur();
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
  const a = "storage-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var ze = new Pe(),
  Te = Object.freeze(
    Object.defineProperty(
      { __proto__: null, StorageService: Pe, default: ze },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Me = () => {
    const e = D.exports.useI18n(),
      a = x({}),
      t = (s, l = {}) => {
        const [o, ...i] = U(".", s);
        return o in a.value ? t(`${a.value[o]}.${z(".", i)}`, l) : e.t(s, l);
      };
    return {
      locale: e.locale,
      change: (a) => {
        e.setLocale(a), ze.provider.set("locale", a);
      },
      setPrefix: (e) => {
        a.value = "string" == typeof e ? { $current: e } : m(m({}, a.value), e);
      },
      t: t,
      addMessages: e.addMessages,
    };
  },
  Ie = { class: "layout-deafult-header-nav" },
  Ve = ["onMouseenter"],
  De = h("div", { class: "line" }, null, -1),
  Fe = { class: "list_style" },
  Ue = { class: "nav_link-top" },
  Qe = h(
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
  Ne = h(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Ye = h("div", { id: "pink_mask" }, null, -1),
  Ke = {
    setup(e) {
      const a = x(1),
        t = x(!0),
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
        l = C(() => 25 * a.value),
        o = C(() => {
          switch (a.value) {
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
          h("ul", null, [
            (g(!0),
            b(
              w,
              null,
              Q(
                s.value,
                (e, t) => (
                  g(),
                  b(
                    "li",
                    {
                      key: e,
                      style: R(`--i: ${e}`),
                      onMouseenter: (e) =>
                        ((e) => {
                          a.value = e;
                        })(t),
                    },
                    [
                      De,
                      h("div", Fe, [
                        h("div", Ue, [
                          Qe,
                          h("div", Re, [h("div", We, W(e.title), 1)]),
                        ]),
                        h(
                          "div",
                          {
                            class: y([
                              "nav_link-btm",
                              { active: a.value === t },
                            ]),
                          },
                          [h("p", Ze, W(e.content), 1), Ne],
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
            h(
              "div",
              {
                class: "move-item",
                style: R({
                  left: "" + (t.value ? `calc(${Z(l)}% - 4px)` : "auto"),
                  right: "" + (t.value ? "auto" : `calc(${Z(o)}% - 4px)`),
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
  ea = [
    h(
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
  aa = [h("div", null, null, -1), h("div", null, null, -1)],
  ta = { class: "layout-deafult pb-32" };
var sa = ke(
    {
      components: {
        LayoutHeader: {
          setup(e) {
            const a = x(!1);
            return (e, t) => (
              g(),
              b(
                w,
                null,
                [
                  h("div", Xe, [
                    h(
                      "div",
                      {
                        href: "/",
                        "aria-current": "page",
                        class: y([
                          "layout-deafult-header-logo",
                          { "layout-deafult-header-logo--open": a.value },
                        ]),
                        "aria-label": "home",
                      },
                      [
                        a.value
                          ? (g(), b("svg", Je, ea))
                          : (g(), b("div", $e, Ge)),
                      ],
                      2
                    ),
                    h(
                      "div",
                      {
                        class: y([
                          "layout-deafult-header-btn",
                          { "layout-deafult-header-btn--open": a.value },
                        ]),
                        onClick: t[0] || (t[0] = (e) => (a.value = !a.value)),
                      },
                      aa,
                      2
                    ),
                  ]),
                  a.value ? (g(), S(Ke, { key: 0 })) : q("", !0),
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
        function (e, a, t, s, l, o) {
          const i = j("LayoutHeader");
          return (
            g(), b(w, null, [L(i), h("div", ta, [Y(e.$slots, "default")])], 64)
          );
        },
      ],
    ]
  ),
  la = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: sa },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const oa = { class: "layout-demo" };
var ia = ke({ setup() {} }, [
  [
    "render",
    function (e, a, t, s, l, o) {
      return g(), b("div", oa, [Y(e.$slots, "default")]);
    },
  ],
]);
const ra = {
    "../layouts/layout-default.vue": la,
    "../layouts/layout-demo.vue": Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: ia },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
  },
  na = [];
for (let Ss in ra) {
  const e = Ss.replace("../layouts/", "").toLowerCase().replace(".vue", "");
  na.push({ componentName: e, component: ra[Ss].default });
}
const ca = {
  install: (e) => {
    na.forEach((a) => {
      e.component(a.componentName, a.component);
    });
  },
};
const da = {
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
  pa = {
    class: "relative flex items-center justify-center text-36 h-24 w-full",
  },
  ua = { class: "font-bold" },
  fa = { class: "absolute right-8 top-6" };
var ma = ke(da, [
    [
      "render",
      function (e, a, t, s, l, o) {
        return (
          g(),
          b("div", pa, [
            t.goBackButton
              ? (g(),
                b("div", {
                  key: 0,
                  class: "go-back absolute left-3 top-6",
                  onClick:
                    a[0] || (a[0] = (...e) => s.goBack && s.goBack(...e)),
                }))
              : q("", !0),
            h("div", ua, [
              Y(e.$slots, "title", {}, () => [X(W(t.title), 1)], !0),
            ]),
            h("div", fa, [Y(e.$slots, "actions", {}, void 0, !0)]),
          ])
        );
      },
    ],
    ["__scopeId", "data-v-50981458"],
  ]),
  va = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ma },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ga = () => $("popup-service");
const ba = {
    class: "popup-modal swal2-popup swal2-modal swal2-confirm",
    tabindex: "-1",
    style: { display: "grid" },
  },
  ha = { class: "swal2-title", style: { display: "block" } },
  ya = { class: "swal2-html-container", style: { display: "block" } },
  wa = { class: "swal2-actions", style: { display: "flex" } };
var _a = ke({}, [
  [
    "render",
    function (e, a) {
      return (
        g(),
        b("div", ba, [
          h("h2", ha, [Y(e.$slots, "title")]),
          h("div", ya, [Y(e.$slots, "content")]),
          h("div", wa, [Y(e.$slots, "actions")]),
        ])
      );
    },
  ],
]);
const xa = {
    key: 0,
    class:
      "fixed z-[1041] inset-0 w-full h-full flex justify-center items-center pointer-events-none",
  },
  Ca = { key: 1 },
  Aa = ["data-timer", "data-end"];
var ka = ke(
  {
    setup(e) {
      const a = ga(),
        t = C(() => a.state),
        s = (e) => {
          t.value.resolve(
            m(
              { isConfirmed: !1, isDismissed: !1, dismiss: null, result: null },
              e
            )
          );
        },
        l = C(() => (t.value.type, te(_a))),
        o = C(() => t.value.BackdropStyle),
        i = x();
      let r = null;
      const n = () => {
        clearTimeout(r), (r = null);
      };
      A([() => t.value.autoClose, () => t.value.timer], ([e, a]) => {
        a &&
          (n(),
          (r = setTimeout(() => {
            n(), e && c("timer");
          }, a)));
      });
      const c = async (e) => {
          if (r) {
            if (!t.value.allowDismissWhenTimerRunning) return;
            n();
          }
          if (i.value && "onDismissed" in i.value) {
            const t = await i.value.onDismissed();
            t && (s({ isDismissed: !0, dismiss: e, result: t }), a.clear());
          } else s({ isDismissed: !0, dismiss: e }), a.clear();
        },
        d = async () => {
          t.value.allowOutsideClick && c("backdrop");
        },
        p = async () => {
          c("cancel");
        },
        u = async () => {
          if (r) {
            if (!t.value.allowConfirmWhenTimerRunning) return;
            n();
          }
          if (i.value && "onConfirmed" in i.value) {
            const e = await i.value.onConfirmed();
            e && (s({ isConfirmed: !0, result: e }), a.clear());
          } else s({ isConfirmed: !0 }), a.clear();
        };
      return (e, a) => (
        g(),
        S(ae, { to: "body" }, [
          L(
            ee,
            { name: "popup", duration: "600" },
            {
              default: O(() => {
                var e;
                return [
                  Z(t).$display
                    ? (g(),
                      b("div", xa, [
                        (g(),
                        S(
                          E(Z(l)),
                          {
                            class: y([
                              "popup__inner pointer-events-auto",
                              {
                                "no-enter-animation":
                                  null == (e = Z(t))
                                    ? void 0
                                    : e.noEnterAnimation,
                              },
                            ]),
                          },
                          G(
                            {
                              title: O(() => [X(W(Z(t).title), 1)]),
                              content: O(() => [
                                Z(t).component
                                  ? (g(),
                                    S(
                                      E(Z(t).component),
                                      J(
                                        { key: 0, ref_key: "compRef", ref: i },
                                        Z(t).props
                                      ),
                                      null,
                                      16
                                    ))
                                  : (g(), b("div", Ca, W(Z(t).text), 1)),
                              ]),
                              actions: O(() => [
                                Z(t).showCancelButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 0,
                                        type: "button",
                                        class: "cancel-button",
                                        onClick: p,
                                      },
                                      W(Z(t).cancelButtonText),
                                      1
                                    ))
                                  : q("", !0),
                                Z(t).showConfirmButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 1,
                                        type: "button",
                                        class: "confirm-button",
                                        onClick: u,
                                      },
                                      W(Z(t).confirmButtonText),
                                      1
                                    ))
                                  : q("", !0),
                              ]),
                              _: 2,
                            },
                            [
                              Z(t).timer && Z(t).timerProgress
                                ? {
                                    name: "timer",
                                    fn: O(() => [
                                      h(
                                        "div",
                                        {
                                          class: "timer-progress",
                                          "data-timer": Z(t).timer,
                                          "data-end": Date.now() + Z(t).timer,
                                        },
                                        null,
                                        8,
                                        Aa
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
                Z(t).$display
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
const ja = {
    "../components/the-header.vue": va,
    "../components/the-popup.vue": Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: ka },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
  },
  Sa = [];
for (let Ss in ja) {
  const e = Ss.replace("../components/", "").toLowerCase().replace(".vue", "");
  Sa.push({ componentName: e, component: ja[Ss].default });
}
const Oa = {
  install: (e) => {
    Sa.forEach((a) => {
      e.component(a.componentName, a.component);
    });
  },
};
class Ea {
  constructor() {
    return F.mixin({
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
        const a = e.querySelector(".swal2-cancel");
        e.querySelector(".swal2-confirm").blur(), a.blur();
      },
    });
  }
}
class La {
  constructor() {
    this.provider = new Ea();
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
    confirmButtonText: o = Le.t("button.confirm"),
    style: i = "",
  }) {
    return this.provider.fire({
      title: e,
      text: a,
      html: l,
      customClass: `swal2-alert ${i}`,
      heightAuto: s,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      willClose: t,
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
    text: a,
    html: t,
    confirmButtonText: s = Le.t("button.confirm"),
    confirmCallback: l = null,
    heightAuto: o = !1,
  }) {
    return this.provider.fire({
      title: e,
      text: a,
      html: t,
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
La.prototype.install = function (e) {
  const a = "alert-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var qa = new La(),
  Ba = Object.freeze(
    Object.defineProperty(
      { __proto__: null, AlertService: La, default: qa },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class Ha {
  constructor(e, a = {}) {
    this.instance = se.create(m({ baseURL: e }, a));
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
const Pa = {
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
  za = (e, { rejectNil: a, rejectEmpty: t }) =>
    T(
      (s, l) => {
        const o = e[l];
        return (a && B(o)) || (t && le(o)) ? s : oe(l, o, s);
      },
      {},
      I(e)
    ),
  Ta = {
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
              (e.params = za(e.params, { rejectNil: a, rejectEmpty: t })),
            e.data &&
              ((e.data = za(e.data, { rejectNil: a, rejectEmpty: t })), s))
          ) {
            const a = new FormData();
            ie((t) => {
              e.data[t] instanceof Array
                ? ie((e) => {
                    a.append(`${t}[]`, e);
                  }, e.data[t])
                : a.append(t, e.data[t]);
            }, I(e.data)),
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
  Ma = se.create();
(Ma.defaults.baseURL = {}.VITE_REMOTE_API),
  (Ma.defaults.validateStatus = (e) => e >= 200 && e < 300);
const Ia = {
  async "read/marquee"() {
    const e = await Ma.get("/app/user/news", {
        params: { type: 1 },
        novalidate: !0,
        noredirect: !0,
      }),
      a = await Ma.get("/app/withdraw", { novalidate: !0, noredirect: !0 });
    return { marquee: e.data, withdraw: a.data };
  },
};
const Va = {
  "set/popup"(e, a) {
    e.popupState = v(m({}, a), { $display: !0, $timestamp: Date.now() });
  },
  "clear/popup"(e) {
    e.popupState = { $display: !1, $timestamp: -1 };
  },
  "systm/Loading"(e, a) {
    e.isLoading = a;
  },
};
const Da = {
  async "read/marquee"() {
    const e = await Ma.get("/app/user/news", {
        params: { type: 1 },
        novalidate: !0,
        noredirect: !0,
      }),
      a = await Ma.get("/app/withdraw", { novalidate: !0, noredirect: !0 });
    return { marquee: e.data, withdraw: a.data };
  },
};
const Fa = {
  "set/popup"(e, a) {
    e.popupState = v(m({}, a), { $display: !0, $timestamp: Date.now() });
  },
  "clear/popup"(e) {
    e.popupState = { $display: !1, $timestamp: -1 };
  },
};
const Ua = {
  "../store/app/actions.js": Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ia },
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
      { __proto__: null, default: Va },
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
      { __proto__: null, default: Da },
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
      { __proto__: null, default: Fa },
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
let Qa = {};
const Ra = (e, a, t) => {
  const [s, ...l] = e;
  return l.length
    ? { [s]: { namespaced: !0, modules: Ra(l, a, t) } }
    : { [s]: { namespaced: !0, [a]: t } };
};
for (let Ss in Ua) {
  const e = Ss.replace("../store/", "")
    .toLowerCase()
    .replace(".js", "")
    .split("/");
  Qa = ce(Qa, Ra(ne(e), re(e), Ua[Ss].default));
}
var Wa = Qa;
const Za = {},
  Na = function (e, a) {
    return a && 0 !== a.length
      ? Promise.all(
          a.map((e) => {
            if ((e = `./${e}`) in Za) return;
            Za[e] = !0;
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
var Ya = "./assets/about-cover2.291fc507.webp";
const Ka = {
    title: "pages.home.nav.about",
    setup() {
      const { t: e } = Me();
      return { t: e };
    },
  },
  Xa = { class: "about" },
  $a = h("img", { class: "about-cover", src: Ya, alt: "" }, null, -1),
  Ga = { class: "about-subtitle" },
  Ja = { class: "about-content" },
  et = { class: "label" },
  at = X(": ");
var tt = ke(Ka, [
    [
      "render",
      function (e, a, t, s, l, o) {
        return (
          g(),
          b("div", Xa, [
            $a,
            h("h1", Ga, W(s.t("pages.about.title")), 1),
            h("div", Ja, [
              h("h2", null, W(s.t("pages.about.content.title.1")) + ":", 1),
              h("p", null, W(s.t("pages.about.content.text.1")), 1),
              h("h2", null, W(s.t("pages.about.content.title.2")) + ":", 1),
              h("ul", null, [
                (g(),
                b(
                  w,
                  null,
                  Q(5, (e) =>
                    h("li", { key: e }, [
                      X(W(e) + ". ", 1),
                      h(
                        "span",
                        et,
                        W(s.t(`pages.about.content.list.title.${e}`)),
                        1
                      ),
                      at,
                      h(
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
              h("p", null, W(s.t("pages.about.content.text.3")), 1),
            ]),
          ])
        );
      },
    ],
  ]),
  st = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const lt = {
    title: "pages.home.nav.about",
    setup() {
      const { t: e } = Me();
      return { t: e };
    },
  },
  ot = { class: "about" },
  it = [
    h(
      "div",
      { role: "listitem", class: "cases-item w-dyn-item" },
      [
        h(
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
            h("div", { class: "cases-assets" }, [
              h("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                loading: "lazy",
                alt: "",
                class: "cases-portrait",
              }),
              h("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                loading: "eager",
                alt: "",
                class: "cases-landscape",
              }),
              h("div", { class: "iframe-video_wrapper" }, [
                h("iframe", {
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
                h("div", { class: "iframe-video_blocker" }),
              ]),
            ]),
            h("div", { class: "cases-text" }, [
              h("div", { class: "u-ts-2" }, "Sable Brand"),
            ]),
          ]
        ),
        h("link", { rel: "prerender", href: "/cases/sable-brand" }),
        h(
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
            h("div", { class: "cases-assets" }, [
              h("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                loading: "lazy",
                alt: "",
                class: "cases-portrait w-condition-invisible",
              }),
              h("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                loading: "lazy",
                alt: "",
                class: "cases-landscape w-condition-invisible",
              }),
              h("div", null, [
                h("div", { class: "iframe-video_wrapper" }, [
                  h("iframe", {
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
                  h("div", { class: "iframe-video_blocker" }),
                ]),
              ]),
            ]),
            h("div", { class: "cases-text" }, [
              h("div", { class: "cases-more" }, [
                h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                  X(" Contact us"),
                  h("span", { class: "hide-tablet" }, " for more"),
                ]),
              ]),
              h("div", { class: "u-ts-2" }, "Sable Brand"),
            ]),
          ]
        ),
      ],
      -1
    ),
  ];
var rt = ke(lt, [
    [
      "render",
      function (e, a, t, s, l, o) {
        return g(), b("div", ot, it);
      },
    ],
  ]),
  nt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ct = {
    layout: "layout-demo",
    setup() {
      const e = ga(),
        { t: a, locale: t, setPrefix: s, change: l } = Me();
      s({ $current: "pages.demo" });
      const o = K(),
        i = $("alert-service"),
        r = de({ current: t.value || "zh-tw" });
      return (
        k(() => {}),
        {
          t: a,
          lang: r,
          toHome: () => {
            o.push("/home");
          },
          swalModal: () => {
            i.alert({
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
  dt = { class: "demo" },
  pt = { class: "demo-head" },
  ut = { class: "switch" },
  ft = h("input", { type: "checkbox", class: "cb" }, null, -1),
  mt = [
    h("span", { class: "left" }, "CN", -1),
    h("span", { class: "right" }, "En", -1),
  ],
  vt = { class: "demo-head-content" },
  gt = { class: "demo-actions" },
  bt = { class: "radio-inputs" },
  ht = h("input", { type: "radio", name: "radio", checked: "" }, null, -1),
  yt = { class: "name" },
  wt = h("input", { type: "radio", name: "radio" }, null, -1),
  _t = { class: "name" },
  xt = h("input", { type: "radio", name: "radio" }, null, -1),
  Ct = { class: "name" };
var At = ke(ct, [
    [
      "render",
      function (e, a, t, s, l, o) {
        return (
          g(),
          b("div", dt, [
            h("div", pt, [
              h("div", null, [
                h("label", ut, [
                  ft,
                  h(
                    "span",
                    {
                      class: "toggle",
                      onClick:
                        a[0] ||
                        (a[0] = (...e) => s.changeLang && s.changeLang(...e)),
                    },
                    mt
                  ),
                ]),
              ]),
              h("div", vt, "lang:" + W(s.lang.current), 1),
            ]),
            h("div", gt, [
              h("div", bt, [
                h(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[1] || (a[1] = (...e) => s.toHome && s.toHome(...e)),
                  },
                  [ht, h("span", yt, W(s.t("$current.router.link")), 1)]
                ),
                h(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[2] ||
                      (a[2] = (...e) => s.swalModal && s.swalModal(...e)),
                  },
                  [wt, h("span", _t, W(s.t("$current.modal.swal")), 1)]
                ),
                h(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[3] ||
                      (a[3] = (...e) => s.popupModal && s.popupModal(...e)),
                  },
                  [xt, h("span", Ct, W(s.t("$current.popup.use")), 1)]
                ),
              ]),
            ]),
          ])
        );
      },
    ],
  ]),
  kt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: At },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAACgCAYAAAAFOewUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANMSURBVHgB7VqLkSIhEG23NoANQSPQEDQCNQMz0AzUCDQDNQLNQDNQI9AMNAOOx9kcMI0w3me3bnlV1roIb5pm5nXTDK1WK0VE6ng8KsZgMDBtsc9+v7d933UDNZtN6nQ6xOh2u97/jPv9Tsvl0m+EBaPRSOXgcrlULHgDiTaZXoUhaLfbWZ0xhQpgVi7Y4bfbzbaRqgHtbKWd67V5BKfTSRyIK8LRuPp2u/V+e3enM5lMSJOYZcTSYs7X69W0AYvFouLwhjHjAXSez+dmADvs4+OD+v0+aQsMaQiP4BW80W+iEBSC70hwOBxoOBzax9tAJQAF1jqh9GNtBAV/3RhCMQWazWZKC4sdBEVy5bxCgEEQTR6ED76jzRXRKAGbiEE6+jwdJBJAbd255UK0YL1e17dA8gGiNMiyCFwgWoEMgSR7FWKAXzCYyfA3eR/EgKgUWlLiQiEoBH+DAFlabfBjCU3Esx4C8o52lrqooKBT2AEBhR46yVIHxRYJwqSb9wbT6dQjhLxlJdu4EgWZOb6jbbfb2bboKuhOJmdGqsvg796+Qbo6mx/6RNryWAK3MzyPjqFfWJ1FH9AjkPCWbzwee4NZ1nXK77VbAniY7wXX8wwQS4GlyHohKASfQQAl0rqRVqQYokWYfzYFCbaCgbmlIFZxrLY9KX1RqhQGaAdRCgi+vV6PxClI9ZEcfP4q1JZ1+AExkuNkiQuFoBD8IYJ3qfF8PleL8A50FvdLgELtR22ZqxmUoYmVKaDOjvoyrqB+5pH2I+nmF3QiKtsxB/Keyt0CWCeivMEJNXJmCpwFcLbuwotM+JEH8R4JSbZbVwsTcUsQpvF8JOBWb8I+QFHlQlAIvgqBVaRWq5U9SIuPPZO1BKhWvIKiB4XgOxLgiKxSNlWZ4JBPwfl7FgFCPjlJFkI+I2sK4fsYYoaSOpiC2UgykDO4dUbvpCt2lvQM4uYb2QjqizmvVyR371yQjpFZAveMLfbBFMNXKLxl5DO2FBmyNpHABZ/+cZYWI6hkqihzbDYbU5h238WIgplQCk+ZjqXG6rivm2TVUEAM50k3W5QAg5DWpu5Qj4BNrHM3WoK6tzCjxMZC8J8QWEEJK5U5QICxz0Kj0aC6QIngBxgHF93HsIfgAAAAAElFTkSuQmCC",
  St =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAA2CAYAAADEWrcYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAV9SURBVHgB7ZndceM2EMcXsp1Hmw8n596CVHBOBaIrOLkCyxVEruCoCiJXIKWCOBVIV4GVCqzHzNkzpp/PJm6XACQIBPVp8UAPfjMYUsASJPcPLBYUAMAXCHjNAZaxOv8KAW8RqoQZ5TECglDeIyAI5T33EITyHg5BqFrAIQhVCzgEoWoBhyBULeAQhPIOXlIXhPIIEoM76jkEobyBHB+E8hzt+CCUx5iO31SoAQQq4Ql2EypQAWewm1A7E0Uf4pOTpigpTycnp/+QDVTE8fHpF7o3HaFCoqjZwfdM6GjWN7BMsFxb9hzLCIpCTbGcq2NVRDgW2kKwUVVOY0wk5rEqhIBLfE96x0uzvqGOQyxX1jUcfoJQ+KBDxuBqXsS1vhc5rYoZxVh2I49wAx7SheKasyr07YwZ7uypLts/chn2cpsRvFPo3ZQPFt7x0LLrQx5eFtJrDnJG2bNnqur2Tpr+P0Uhv2Io+AxyDXUSISCfPyVKbPis2xKbddi0H+PZ6IIpbEDDUZdg6Vl1HMpDXyWgQCd2XRSd3ssFvjnA8pcQR09Y7ulIv+d2UaSSAd2ubQaGs2eUjWjZV7ODbXdmP/Tb1Y+0z6PEyHg2eub74+Nf/zT6y6MI/ozlu8JCZCGRXItxAusLtXeUA2I6x3ViYrdjXRtL16o7jyQcHXOnkoDIsulQGzriDNaAhEYH0t7Qtj8j5+OgaRft2Ug/uwHHda+P9x3DGpBICZQLZS+cHPYulOA0+mQ5beOxiw4wR/TfjosidPgYhTiXBW4Y+x5TGMJrB/p5pU12oWx0PxE6fqTCUSk0oufZnriVfXz/nfoDFVGEEAPdDw0OIztM8bwnr6H75/emEIkD62CskySYJUgwmdcdjPO+YflnniGsn0xsxYp9kphP/Q/J4nUy3FH4WNUvOrlfbJ+HGrNvV7ije6i6u2I/eWKj++mqe9/O6z5y1zV23TqJQ6KOdpjrqKOZu3NwJxP7IJUhTvTS9HHsMmCM/VdybTw/PSiIlKYPQ3QKrQ1nKilJXJ3grMB2OShxtjzTWma2Z9krjX6aGVGWsU/SjrXUs/1LiU/x3sW6MuzsjjlsOJaWo/4Z5JR9U2iKk/M2uSbLxFNJb1yfLXGKfocl4e7QaGMtfMYWrEZdk01gR0yRaAYlVjsH9xpEIzeGPYj0toipHne0VpSkyrkz0fHT8n4Ose1VnTNcj7KymZuve+pUz6zfYEe0SO9QoJwxqLU2y47ouPD5i9YkDGM6Uyt1PM1CDIu501F4FPsxsW0cg4BmUEyZJzb17L3RkkFTgERyCUSjq+4CAa1h6NwxSGd1cS2JGg2RZ3VZ1mjh+qLT9qlrzTKh7AzXGdp75fse+g3wgtcdcmwlsVvo93MthrKPIc8ejzB7bPbkzG6ob5HwGevQ/mFlOCSREquOBBpDzQXSMHZwJcRrPuDkvoh1ZL0wbNj1qoUcBad9DSUQlEDFUoCjBRshfiERL5T9GDO8nvpgyuX+ikKvMOwFDYwYVmB/cdACfbLqp+AWiIPnkPNRKHNfNEPum+CPNP12u15fDx1zP2M20cx5fv52sWj/mKj9zsRlz9hLGzaEBKLOKv/AWiVyk9w8W7Z5XfZZaN4P9UF9uT8HFe0JeW/Ykm0FEvBOMEWbb1xP15ph+0ZndxRLXSHOtVmlkUAjbOlnlDohv7GJDiYWFP44zAam8EIkgnbP684g11/ttYa+Jhj/VZll503oW7GYbkimsNkMcn2lqBXyO9prgqe48RSUHGEm+9Lf5f+mt2bbGURlCIFKCALVgG0E6kOgUjYVKIFA5XBHXRDIc4JAnhME8pwgkOfEEATymksoihME8owgUA0IAtWAIFANCALVgCBQDUgg4DU/AFoAB+sZHzH0AAAAAElFTkSuQmCC",
  Ot =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAKjCAYAAAA6d64BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIFSURBVHgB7ZoxUsMwEEU/CQWl6ejwDQg3SG4AN/ANgBPgG5CSDnMC4ASBCrpQ0uGSLtBBFfQtK5YUEwcmZGTYN7MZ6xMTabWrSBt3ARwou1e2pexOGcbKpqVFG+WFYb+jXl7hMSrf9WyEWNlQWQ+togvd9QtlH8qeKJrBTfCVP2wi+5apEegH+vUYgrBGInPB0E6gU500p/rAT/Xieggv1fkJKXTehAsHdwSdiG/K0uZE9gWI0CAwxujcF+j4OkfIXEFHMZOgPvgdRFhCcHYG9GkfemXgH64RMgyFxWuhgwhLCHY45PRpjCocHiEIgiAIgcIvrVPofQw5lJ3BSgRno7ip7ATVzuAWrcFUjHiY2Fb2QLG5YmQP36kYzY7VpmKUIGRMVWFctn9aVcjQlgIiZ4tVvNgIGbyuT1ANP+7AqsGY25yjBsp/yMbQ/6QgceaEiyO7PjKCPbhi+LH17rh29lN4LiSsSwfnghi6ODxzQYYq1Qvs2e/5s19fHO5DDz1Fq2BmJ9A+yZVlUlJbvcCvxktluwj90Fxb7VmcDTLZ3xUYDjfK9qCdnEMQBEEQ2kZsNxLobcKZEf70j9NzHcvw346RQltZXwHAvjU8pDj8O0JLi8Oc/eJhEuieDiQcViLMPVTC9cc4OZiCCEvh7NRO2X7nS/Na6CDCEkJutYuHSiJUu5z8E0pVtJZRO+HCAAAAAElFTkSuQmCC",
  Et = "./assets/img_wing.20892ae6.svg";
const Lt = (e) =>
    new URL(
      {
        "../assets/images/icon_back.svg": "./assets/icon_back.556b6f96.svg",
        "../assets/images/loading.gif": "./assets/loading.afec609f.gif",
        "../assets/images/home/bg-left-bottom.png": jt,
        "../assets/images/home/bg-left-top.png": St,
        "../assets/images/home/bg-line.png": Ot,
        "../assets/images/home/bg-master.png":
          "./assets/bg-master.fc851c4f.png",
        "../assets/images/home/person.png": "./assets/person.7b1a05ef.png",
        "../assets/images/profile/about-cover.webp":
          "./assets/about-cover.a0e8683c.webp",
        "../assets/images/profile/about-cover2.webp": Ya,
        "../assets/images/svg/apple.svg": "./assets/apple.0fa4e673.svg",
        "../assets/images/svg/as.svg": "./assets/as.a4b9ab96.svg",
        "../assets/images/svg/home-2.svg": "./assets/home-2.0c0430d4.svg",
        "../assets/images/svg/img_wing.svg": Et,
        "../assets/images/svg/paypal.svg": "./assets/paypal.245a62e2.svg",
        "../assets/images/svg/story.svg": "./assets/story.a2e17494.svg",
        "../assets/images/svg/world_2.svg": "./assets/world_2.5efbb68e.svg",
        "../assets/images/svg/world_2_light.svg":
          "./assets/world_2_light.01526311.svg",
      }[`../assets/images/${e}`],
      self.location
    ).href,
  qt = {};
async function Bt(e) {
  const a = e.map((e) =>
    (async function (e) {
      if (qt[e]) return qt[e];
      let a;
      const t = new Promise((t) => {
        (a = new Image()),
          (a.onload = () => {
            t(a), (qt[e] = a);
          }),
          (a.src = e);
      });
      return await t, a;
    })(e)
  );
  return await Promise.all(a);
}
const Ht = {
    setup() {
      const { t: e, setPrefix: a } = Me(),
        t = K(),
        s = pe(),
        l = x(!0);
      a({ $current: "pages.home" });
      return (
        (async () => {
          const e = [
            Lt("home/person.png"),
            Lt("home/bg-master.png"),
            Lt("home/bg-left-top.png"),
            Lt("home/bg-left-bottom.png"),
            Lt("profile/about-cover2.webp"),
            Lt("svg/img_wing.svg"),
          ];
          qa.showLoading(),
            await Bt(e),
            qa.close(),
            (l.value = !1),
            ue(() => {
              l.value = !0;
            });
        })(),
        {
          t: e,
          changePage: (e = "/home") => {
            s.path === e && t.go(0), t.push(e);
          },
          router: t,
        }
      );
    },
  },
  Pt = { class: "home" },
  zt = N(
    '<div class="home-bg-middle"></div><div class="home-bg-accessory"><div><img src="' +
      Et +
      '" alt=""><img src="' +
      Et +
      '" alt=""></div><div><img src="' +
      Et +
      '" alt=""><img src="' +
      Et +
      '" alt=""></div></div><img class="home-bg-person" src="./assets/person.7b1a05ef.png" alt=""><img class="home-bg-line" src="' +
      Ot +
      '" alt=""><img class="home-bg-left-icon" src="' +
      St +
      '" alt=""><img class="home-bg-left-string" src="' +
      jt +
      '" alt=""><div class="home-nav"><div class="home-nav-shape"></div><svg class="home-nav-svg" width="75" height="75"><polygon points="0,0 60,0 0,75" fill="white"></polygon></svg></div>',
    7
  ),
  Tt = { class: "home-nav-link" },
  Mt = { href: "https://github.com/chiyum/chiyum", target: "_blank" };
var It = ke(Ht, [
    [
      "render",
      function (e, a, t, s, l, o) {
        return (
          g(),
          b("div", Pt, [
            zt,
            h("ul", Tt, [
              h(
                "li",
                { onClick: a[0] || (a[0] = (e) => s.changePage("/about")) },
                W(s.t("$current.nav.about")),
                1
              ),
              h(
                "li",
                { onClick: a[1] || (a[1] = (e) => s.changePage("/home")) },
                W(s.t("$current.nav.home")),
                1
              ),
              h("li", null, [h("a", Mt, W(s.t("$current.nav.more")), 1)]),
            ]),
          ])
        );
      },
    ],
  ]),
  Vt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: It },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Dt = {},
  Ft = { class: "footer" },
  Ut = [
    h(
      "div",
      { class: "container" },
      [
        h("div", { class: "row row-justify-center" }, [
          h("div", { class: "col col-lg-3 col-md-12" }, [
            h("div", { class: "footer_group cc-above" }, [
              h("h3", { class: "u-ts-6 u-text-secondary" }, "Email us"),
              h("ul", { role: "list", class: "footer_list" }, [
                h("li", { class: "footer_list-item" }, [
                  h(
                    "a",
                    {
                      href: "mailto:hello@basis.work",
                      class: "footer_link w-inline-block",
                    },
                    [h("div", { class: "u-ts-3" }, "hello@basis.work")]
                  ),
                ]),
              ]),
            ]),
            h("div", { class: "footer_group" }, [
              h("h3", { class: "u-ts-6 u-text-secondary" }, "Social"),
              h("ul", { role: "list", class: "footer_list" }, [
                h("li", { class: "footer_list-item" }, [
                  h(
                    "a",
                    {
                      href: "https://www.instagram.com/basis.work/",
                      target: "_blank",
                      class: "footer_link w-inline-block",
                    },
                    [h("div", { class: "u-ts-3" }, "Instagram")]
                  ),
                ]),
                h("li", { class: "footer_list-item" }, [
                  h(
                    "a",
                    {
                      href: "https://www.linkedin.com/company/basisstudio/",
                      target: "_blank",
                      class: "footer_link w-inline-block",
                    },
                    [h("div", { class: "u-ts-3" }, "Linkedin")]
                  ),
                ]),
              ]),
            ]),
          ]),
          h("div", { class: "col col-lg-3 col-md-12" }, [
            h("div", { class: "footer_group" }, [
              h("h3", { class: "u-ts-6 u-text-secondary" }, "Navigation"),
              h("ul", { role: "list", class: "footer_list" }, [
                h("li", { class: "footer_list-item" }, [
                  h("a", { href: "/", class: "footer_link w-inline-block" }, [
                    h("div", { class: "u-ts-3" }, "Overview"),
                  ]),
                ]),
                h("li", { class: "footer_list-item" }, [
                  h(
                    "a",
                    { href: "/cases", class: "footer_link w-inline-block" },
                    [h("div", { class: "u-ts-3" }, "Cases")]
                  ),
                ]),
                h("li", { class: "footer_list-item" }, [
                  h(
                    "a",
                    { href: "/about", class: "footer_link w-inline-block" },
                    [h("div", { class: "u-ts-3" }, "Services")]
                  ),
                ]),
                h("li", { class: "footer_list-item" }, [
                  h(
                    "a",
                    {
                      href: "/design-trial",
                      class: "footer_link w-inline-block",
                    },
                    [h("div", { class: "u-ts-3" }, "Design Trial")]
                  ),
                ]),
                h("li", { class: "footer_list-item" }, [
                  h(
                    "a",
                    {
                      href: "/fintech-design",
                      "aria-current": "page",
                      class: "footer_link w-inline-block w--current",
                    },
                    [h("div", { class: "u-ts-3" }, "Fintech Design")]
                  ),
                ]),
              ]),
            ]),
          ]),
          h("div", { class: "col col-md-hide" }),
          h("div", { class: "col col-lg-4 col-md-12 col-md-first" }, [
            h("a", { href: "/", class: "footer-wordmark w-inline-block" }, [
              h("div", { class: "wordmark w-embed" }, [
                h(
                  "svg",
                  {
                    width: "100%",
                    style: {},
                    viewBox: "0 0 678 88",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  [
                    h("path", {
                      d:
                        "M134.299 43.7526C143.563 41.1205 148.255 33.7208 148.255 23.5684C148.255 9.02438 138.288 0 119.207 0H0V88.0232H119.2C139.424 88.0232 149.256 78.2468 149.256 63.3197C149.256 53.1601 144.131 46.0158 134.299 43.7597V43.7526ZM27.9189 22.0572H113.933C118.774 22.0572 120.343 23.9373 120.343 27.4492C120.343 30.961 118.774 32.9688 113.933 32.9688H27.9189V22.0643V22.0572ZM114.934 65.817H27.9189V54.9125H114.934C119.775 54.9125 121.479 56.9132 121.479 60.3044C121.479 63.9369 119.775 65.8241 114.934 65.8241V65.817Z",
                      fill: "currentColor",
                    }),
                    h("path", {
                      d:
                        "M444.552 33.4796L356.409 32.2238C351.851 32.2238 349.565 30.2161 349.565 27.0802C349.565 24.1998 351.702 22.3197 356.259 22.3197H434.863C438.284 22.3197 442.274 23.9515 442.699 28.336H473.607C472.606 12.1602 458.65 0 437.432 0H351.993C332.06 0 319.517 11.4082 319.517 27.584C319.517 43.7597 331.769 54.1676 351.418 54.5436L439.136 55.5439C443.693 55.6716 445.688 57.6723 445.688 60.5598C445.688 63.4473 443.835 65.6964 439.136 65.6964H358.68C354.691 65.6964 350.708 63.8163 349.849 59.4247H319.084C319.794 75.7282 334.751 88.0161 356.401 88.0161H443.97C464.336 88.0161 475.871 76.4802 475.871 60.5598C475.871 44.6395 464.762 33.8485 444.538 33.4725L444.552 33.4796Z",
                      fill: "currentColor",
                    }),
                    h("path", {
                      d: "M512.021 0H482.967V88.0232H512.021V0Z",
                      fill: "currentColor",
                    }),
                    h("path", {
                      d:
                        "M645.914 33.4796L557.77 32.2238C553.213 32.2238 550.927 30.2161 550.927 27.0802C550.927 24.1998 553.064 22.3197 557.621 22.3197H636.224C639.646 22.3197 643.635 23.9515 644.061 28.336H674.969C673.975 12.1602 660.012 0 638.794 0H553.355C533.422 0 520.879 11.4082 520.879 27.584C520.879 43.7597 533.131 54.1676 552.78 54.5436L640.498 55.5439C645.055 55.6716 647.05 57.6723 647.05 60.5598C647.05 63.4473 645.197 65.6964 640.498 65.6964H560.042C556.053 65.6964 552.07 63.8163 551.211 59.4247H520.446C521.156 75.7282 536.105 88.0161 557.763 88.0161H645.332C665.698 88.0161 677.233 76.4802 677.233 60.5598C677.233 44.6395 666.131 33.8485 645.9 33.4725L645.914 33.4796Z",
                      fill: "currentColor",
                    }),
                    h("path", {
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
        h("div", { class: "footer-copyright" }, [
          h("div", { "data-copyright": "" }, [
            X(" Copyright © "),
            h("span", { "data-dynamic": "year" }, "2024"),
          ]),
        ]),
      ],
      -1
    ),
  ];
var Qt = ke(Dt, [
  [
    "render",
    function (e, a) {
      return g(), b("footer", Ft, Ut);
    },
  ],
]);
const Rt = ["data-index"],
  Wt = ["src"],
  Zt = [
    N(
      '<div class="btn-text-wrap" data-v-4ebeca6f><div class="btn-text cc-scroll" data-v-4ebeca6f>Scroll</div><div class="btn-text cc-bottom cc-scroll" data-v-4ebeca6f>Scroll</div></div><div class="btn-icon cc-small w-embed" data-v-4ebeca6f><svg width="100%" style="" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-4ebeca6f><path d="M7.30218 1.55469C7.47098 1.55469 7.60782 1.68527 7.60782 1.84635V11.2789L10.322 8.68302C10.3794 8.6278 10.4575 8.59675 10.539 8.59675C10.6205 8.59675 10.6986 8.6278 10.756 8.68302L11.1839 9.09719C11.2418 9.15195 11.2743 9.2265 11.2743 9.30427C11.2743 9.38204 11.2418 9.45659 11.1839 9.51135L7.43666 13.093C7.35076 13.1751 7.23423 13.2213 7.11267 13.2214H6.88038C6.75909 13.22 6.64303 13.174 6.5564 13.093L2.80916 9.51135C2.7513 9.45659 2.71875 9.38204 2.71875 9.30427C2.71875 9.2265 2.7513 9.15195 2.80916 9.09719L3.24318 8.68302C3.29952 8.62815 3.37663 8.59723 3.45713 8.59723C3.53763 8.59723 3.61475 8.62815 3.67109 8.68302L6.38523 11.2789V1.84635C6.38523 1.68527 6.52208 1.55469 6.69088 1.55469H7.30218Z" fill="currentColor" data-v-4ebeca6f></path></svg></div>',
      2
    ),
  ];
const Nt = {
  components: {
    Footer: Qt,
    View: ke(
      {
        setup(e) {
          const a = _(),
            t = de({ x: 0, y: 0 }),
            s = x([
              {
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552350_home-hero-08.webp",
                css: {
                  left: "-5%",
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
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552341_home-hero-01.webp",
                css: {
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
                url:
                  "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552342_home-hero-09.webp",
                css: {
                  left: "31%",
                  top: "45%",
                  m_right: "80%",
                  m_top: "57%",
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
                  left: "31%",
                  top: "72%",
                  m_right: "80%",
                  m_top: "78%",
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
                  left: "40%",
                  top: "10%",
                  m_right: "55%",
                  m_top: "30%",
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
                  left: "51%",
                  top: "27%",
                  m_right: "30%",
                  m_top: "46%",
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
                  left: "63%",
                  top: "63%",
                  m_right: "8%",
                  m_top: "70%",
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
                  left: "68%",
                  top: "12%",
                  m_right: "0%",
                  m_top: "13%",
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
                  left: "83%",
                  top: "33%",
                  m_right: "-22%",
                  m_top: "29%",
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
            l = x(!1),
            o = {
              rootMargin: "0px",
              threshold: Array(100)
                .fill()
                .map((e, a) => 0.01 * a),
            },
            i = new IntersectionObserver((e) => {
              e.forEach((e) => {
                var a, t;
                const { intersectionRatio: l, target: o } = e,
                  i = null == (a = o.dataset) ? void 0 : a.index;
                if ("img" === (null == (t = o.dataset) ? void 0 : t.item))
                  s.value[i].isEnter = !(l < 0.3);
                else
                  o.style.animation =
                    l < 1 ? "fadeOut 2s forwards" : "zoomIn 3.5s forwards";
              });
            }, o),
            r = () => {
              const e = document.getElementById("studio");
              if (e) {
                const a = e.offsetTop;
                window.scrollTo({ top: a, behavior: "smooth" });
              }
            };
          A(
            () => a.state.app.isLoading,
            (e) => {
              if (((l.value = !e), e)) {
                ((e) => {
                  for (const a of e) i.unobserve(a);
                })([
                  ...document.querySelectorAll(".img-wrap"),
                  document.querySelector(".btn-contain-scroll"),
                ]);
              } else
                ue(() => {
                  ((e) => {
                    for (const a of e) i.observe(a);
                  })([
                    ...document.querySelectorAll(".img-wrap"),
                    document.querySelector(".btn-contain-scroll"),
                  ]);
                });
            }
          );
          const n = x(!1),
            c = () => {
              n.value = window.innerWidth < 991;
            };
          return (
            k(() => {
              c(), window.addEventListener("resize", c), fe.init();
            }),
            (e, a) => (
              g(),
              b(
                w,
                null,
                [
                  h(
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
                              (t.x = ((a - e.clientX) / 100) * 10),
                                (t.y = ((s - e.clientY) / 100) * 10);
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
                                transform: `translate3d(${Z(t).x}px, ${
                                  Z(t).y
                                }px, 0) rotateX(${Z(t).x / 5}deg) rotateY(${
                                  Z(t).y / 8
                                }deg)`,
                                transformOrigin: "center center",
                              }),
                            },
                            [
                              (g(!0),
                              b(
                                w,
                                null,
                                Q(
                                  s.value,
                                  (e, a) => (
                                    g(),
                                    b(
                                      "div",
                                      {
                                        class:
                                          "img-wrap home-hero_image-placer",
                                        key: e.url + a,
                                        style: R({
                                          left: n.value ? "unset" : e.css.left,
                                          right: n.value
                                            ? e.css.m_right
                                            : "unset",
                                          top: n.value
                                            ? e.css.m_top
                                            : e.css.top,
                                          animation: e.isEnter
                                            ? e.css.enterAnimation
                                            : e.css.leaveAnimation,
                                        }),
                                        "data-index": a,
                                        "data-item": "img",
                                      },
                                      [
                                        h(
                                          "img",
                                          {
                                            src: e.url,
                                            style: R({
                                              transform: `translate3d(${
                                                Z(t).x / 2
                                              }px,${Z(t).y / 2}px, 100px)`,
                                            }),
                                          },
                                          null,
                                          12,
                                          Wt
                                        ),
                                      ],
                                      12,
                                      Rt
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
                  h(
                    "div",
                    { "data-reveal": "button", class: "home-hero_btn" },
                    [
                      h(
                        "div",
                        { class: "btn-contain btn-contain-scroll op0" },
                        [
                          h(
                            "div",
                            { class: "btn-scroll w-inline-block", onClick: r },
                            Zt
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
      [["__scopeId", "data-v-4ebeca6f"]]
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
        document.querySelectorAll(".target_line").forEach((a) => {
          e.observe(a);
        });
      }),
      { a: e }
    );
  },
};
fe.init();
const Yt = (e) => (me("data-v-764ed4b3"), (e = e()), ve(), e),
  Kt = Yt(() =>
    h("div", { class: "container" }, [h("div", { class: "target_line" })], -1)
  ),
  Xt = Yt(() =>
    h(
      "section",
      { id: "studio", class: "section" },
      [
        h("div", { class: "section-title_component" }, [
          h("div", { class: "container" }, [
            h(
              "div",
              {
                class: "section-title_wrapper",
                "data-aos": "fade-up",
                "data-aos-duration": "700",
              },
              [
                h(
                  "div",
                  { class: "section-title_dot", style: { opacity: "1" } },
                  [
                    h("div", {
                      class: "section-title_dot-fill",
                      style: { width: "100%", height: "100%" },
                    }),
                  ]
                ),
                h("div", { class: "u-overflow-hidden" }, [
                  h(
                    "div",
                    {
                      class: "section-title_title",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [h("h2", { class: "u-ts-4" }, "About Basis")]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
        h("div", { class: "container" }, [
          h("div", { class: "w-layout-grid pair-grid" }, [
            h(
              "div",
              {
                "data-animation-element": "group",
                id: "w-node-_1d0de869-a418-1ffe-c192-cd0abecc9833-af552307",
              },
              [
                h("h3", { "data-animation-element": "title", style: {} }, [
                  h(
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
                      h(
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
                      h(
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
                      h(
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
                  h(
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
                      h(
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
                      h(
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
                  h(
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
                      h(
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
                      h(
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
                      h(
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
                  h(
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
                      h(
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
                      h(
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
                  h(
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
                      h(
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
                h("div", { class: "btn-group" }, [
                  h(
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
                      h(
                        "a",
                        {
                          href: "/cases",
                          class: "btn w-inline-block",
                          "data-aos": "fade-left",
                          "data-aos-duration": "1000",
                        },
                        [
                          h("div", { class: "btn-text-wrap" }, [
                            h(
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
                            h(
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
                  h(
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
                      h(
                        "a",
                        {
                          href: "/about",
                          class: "btn cc-secondary w-inline-block",
                          "data-aos": "fade-left",
                          "data-aos-duration": "1000",
                        },
                        [
                          h("div", { class: "btn-text-wrap" }, [
                            h(
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
                            h(
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
        h("div", { class: "u-mt-8-75" }, [
          h("div", { class: "marquee" }, [
            h("div", { class: "marquee_row w-dyn-list" }, [
              h(
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h(
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
                          h("img", {
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h(
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
                          h("img", {
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h(
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
                          h("img", {
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h(
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
                          h("img", {
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h(
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
                          h("img", {
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h(
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
                          h("img", {
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h(
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
                          h("img", {
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h(
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
                          h("img", {
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h(
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
                          h("img", {
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
            h("div", { class: "marquee_row w-dyn-list" }, [
              h(
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
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
            h("div", { class: "marquee_row w-dyn-list" }, [
              h(
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
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
                        loading: "eager",
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                        alt: "",
                        class: "marquee_logo",
                      }),
                    ]
                  ),
                  h(
                    "div",
                    { role: "listitem", class: "marquee_logo w-dyn-item" },
                    [
                      h("img", {
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
  $t = Yt(() =>
    h("div", { class: "container" }, [h("div", { class: "target_line" })], -1)
  ),
  Gt = Yt(() =>
    h(
      "section",
      { class: "section" },
      [
        h("div", { class: "section-title_component" }, [
          h("div", { class: "container" }, [
            h(
              "div",
              {
                class: "section-title_wrapper",
                "data-aos": "fade-up",
                "data-aos-duration": "700",
              },
              [
                h(
                  "div",
                  { class: "section-title_dot", style: { opacity: "1" } },
                  [
                    h("div", {
                      class: "section-title_dot-fill",
                      style: { width: "100%", height: "100%" },
                    }),
                  ]
                ),
                h("div", { class: "u-overflow-hidden" }, [
                  h(
                    "div",
                    {
                      class: "section-title_title",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [h("h2", { class: "u-ts-4" }, "What We Do")]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
        h("div", { class: "container" }, [
          h("div", { "data-animation-element": "group" }, [
            h(
              "h3",
              { "data-animation-element": "title", class: "h1", style: {} },
              [
                h(
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
                    h(
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
                h(
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
                    h(
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
          h("div", { class: "sticky-pair" }, [
            h("div", { class: "w-layout-grid pair-grid" }, [
              h(
                "div",
                { id: "w-node-eb3e6ea8-5a10-d5fc-f561-3f621ba6f385-af552307" },
                [
                  h(
                    "div",
                    {
                      id:
                        "w-node-_137ddbb9-11b4-d169-f149-eca9f54873e8-af552307",
                      class: "card-wrapper cc-small",
                    },
                    [
                      h(
                        "div",
                        {
                          id:
                            "w-node-a3cc95fc-d4f5-0398-7194-1e8506932d8d-af552307",
                          class: "w-dyn-list",
                        },
                        [
                          h("div", { role: "list", class: "w-dyn-items" }, [
                            h(
                              "div",
                              { role: "listitem", class: "w-dyn-item" },
                              [
                                h("div", { class: "card-wrapper cc-small" }, [
                                  h(
                                    "div",
                                    {
                                      class: "card-animation cc-40",
                                      "data-aos": "fade-up",
                                      "data-aos-duration": "700",
                                    },
                                    [
                                      h(
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
                                          h(
                                            "div",
                                            { class: "card-image_wrapper" },
                                            [
                                              h(
                                                "div",
                                                {
                                                  class: "iframe-video_wrapper",
                                                },
                                                [
                                                  h("iframe", {
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
                                                  h("div", {
                                                    class:
                                                      "iframe-video_blocker",
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                          h(
                                            "div",
                                            {
                                              class: "card-body",
                                              "data-aos": "fade-up",
                                              "data-aos-duration": "700",
                                            },
                                            [
                                              h(
                                                "div",
                                                { class: "u-overflow-hidden" },
                                                [
                                                  h(
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
                                                      h(
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
              h(
                "div",
                {
                  id: "w-node-_814776c7-59e4-1835-d274-f4eed26bca88-af552307",
                  class: "w-dyn-list",
                },
                [
                  h("div", { role: "list", class: "w-dyn-items" }, [
                    h("div", { role: "listitem", class: "w-dyn-item" }, [
                      h("div", { class: "card-wrapper cc-large" }, [
                        h("div", { class: "card-animation cc-40" }, [
                          h(
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
                              h("div", { class: "card-image_wrapper" }, [
                                h("div", { class: "iframe-video_wrapper" }, [
                                  h("iframe", {
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
                                  h("div", { class: "iframe-video_blocker" }),
                                ]),
                              ]),
                              h(
                                "div",
                                {
                                  class: "card-body",
                                  "data-aos": "fade-up",
                                  "data-aos-duration": "700",
                                },
                                [
                                  h("div", { class: "u-overflow-hidden" }, [
                                    h(
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
                                        h("div", { class: "card-large_text" }, [
                                          h(
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
              h(
                "div",
                {
                  id: "w-node-bc6d1a98-c4cb-3434-3589-47eddb3c03ed-af552307",
                  class: "content",
                },
                [
                  h(
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
                      h(
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
                  h("div", { class: "btn-group" }, [
                    h(
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
                        h(
                          "a",
                          {
                            href: "/cases",
                            class: "btn w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            h("div", { class: "btn-text-wrap" }, [
                              h("div", { class: "btn-text" }, "View cases"),
                              h(
                                "div",
                                { class: "btn-text cc-bottom" },
                                "View cases"
                              ),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    h(
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
                        h(
                          "a",
                          {
                            href: "/design-trial",
                            class: "btn cc-secondary w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            h("div", { class: "btn-text-wrap" }, [
                              h("div", { class: "btn-text" }, "Design trial"),
                              h(
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
  Jt = Yt(() =>
    h("div", { class: "container" }, [h("div", { class: "target_line" })], -1)
  ),
  es = Yt(() =>
    h(
      "section",
      { class: "section" },
      [
        h("div", { class: "section-title_component" }, [
          h("div", { class: "container" }, [
            h("div", { class: "section-title_wrapper" }, [
              h("div", { class: "section-title_dot", style: { opacity: "1" } }),
              h("div", { class: "u-overflow-hidden" }, [
                h(
                  "div",
                  {
                    class: "section-title_title",
                    style: {
                      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [h("h2", { class: "u-ts-4" }, "Capabilities")]
                ),
              ]),
            ]),
          ]),
        ]),
        h("div", { class: "container" }, [
          h("div", { class: "w-layout-grid pair-grid" }, [
            h(
              "div",
              { id: "w-node-_6e6a6411-9d71-b91d-1723-e94f35341c18-af552307" },
              [
                h("div", { class: "service-list" }, [
                  h("div", { class: "logomark_component" }, [
                    h(
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
                        h(
                          "svg",
                          {
                            height: "100%",
                            style: {},
                            viewBox: "0 0 185 80",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          [
                            h("path", {
                              d:
                                "M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z",
                              fill: "currentColor",
                            }),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  h("ul", { role: "list", class: "u-mt-3-5" }, [
                    h(
                      "li",
                      {
                        class: "u-overflow-hidden",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        "data-aos-delay": "100",
                      },
                      [
                        h(
                          "div",
                          {
                            class: "list-content cc-1",
                            style: {
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [h("h3", { class: "u-tc-caps" }, "Research")]
                        ),
                      ]
                    ),
                    h(
                      "li",
                      {
                        class: "u-overflow-hidden",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        "data-aos-delay": "150",
                      },
                      [
                        h(
                          "div",
                          {
                            class: "list-content cc-2",
                            style: {
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [h("h3", { class: "u-tc-caps" }, "Brand Strategy")]
                        ),
                      ]
                    ),
                    h(
                      "li",
                      {
                        class: "u-overflow-hidden",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        "data-aos-delay": "200",
                      },
                      [
                        h(
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
                            h(
                              "h3",
                              { class: "u-tc-caps" },
                              "Creative Direction"
                            ),
                          ]
                        ),
                      ]
                    ),
                    h(
                      "li",
                      {
                        class: "u-overflow-hidden",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        "data-aos-delay": "250",
                      },
                      [
                        h(
                          "div",
                          {
                            class: "list-content cc-4",
                            style: {
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [h("h3", { class: "u-tc-caps" }, "Brand identity")]
                        ),
                      ]
                    ),
                    h(
                      "li",
                      {
                        class: "u-overflow-hidden",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        "data-aos-delay": "300",
                      },
                      [
                        h(
                          "div",
                          {
                            class: "list-content cc-5",
                            style: {
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [h("h3", { class: "u-tc-caps" }, "UX & UI Design")]
                        ),
                      ]
                    ),
                    h(
                      "li",
                      {
                        class: "u-overflow-hidden",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        "data-aos-delay": "350",
                      },
                      [
                        h(
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
                            h(
                              "h3",
                              { class: "u-tc-caps" },
                              "Interaction Design"
                            ),
                          ]
                        ),
                      ]
                    ),
                    h(
                      "li",
                      {
                        class: "u-overflow-hidden",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        "data-aos-delay": "400",
                      },
                      [
                        h(
                          "div",
                          {
                            class: "list-content cc-7",
                            style: {
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                              "transform-style": "preserve-3d",
                            },
                          },
                          [h("h3", { class: "u-tc-caps" }, "Implementation")]
                        ),
                      ]
                    ),
                    h(
                      "li",
                      {
                        class: "u-overflow-hidden",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        "data-aos-delay": "450",
                      },
                      [
                        h(
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
                            h(
                              "h3",
                              { class: "u-tc-caps" },
                              "Webflow Development"
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  h("div", { class: "btn-group" }, [
                    h(
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
                        h(
                          "a",
                          {
                            href: "/about",
                            class: "btn cc-secondary w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            h("div", { class: "btn-text-wrap" }, [
                              h("div", { class: "btn-text" }, "Our services"),
                              h(
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
  as = Yt(() =>
    h(
      "section",
      { class: "section cc-apps" },
      [
        h("div", { class: "container" }, [
          h("div", { class: "row" }, [
            h("div", { "data-animation-element": "group", class: "col" }, [
              h(
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
                  h(
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
                      h(
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
        h("div", { "data-apps": "component", class: "apps_component" }, [
          h("div", { class: "apps_media-wrapper" }, [
            h(
              "div",
              {
                "data-w-id": "9ec98ec5-fb8a-2716-02fa-7ef29f58135e",
                class: "apps_media-list",
              },
              [
                h(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "100",
                  },
                  [
                    h("img", {
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
                h(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "150",
                  },
                  [
                    h(
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
                        h("div", { role: "list", class: "w-dyn-items" }, [
                          h("div", { role: "listitem", class: "w-dyn-item" }, [
                            h(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/sable-app",
                                class: "apps_link w-inline-block",
                              },
                              [
                                h("img", {
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
                h(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "200",
                  },
                  [
                    h(
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
                        h("div", { role: "list", class: "w-dyn-items" }, [
                          h("div", { role: "listitem", class: "w-dyn-item" }, [
                            h(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/seen-app",
                                class: "apps_link w-inline-block",
                              },
                              [
                                h("img", {
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
                h(
                  "div",
                  {
                    class: "apps_asset-wrapper cc-watch",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "250",
                  },
                  [
                    h(
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
                        h("img", {
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
          h("div", { class: "apps_scroll" }, [
            h("div", { class: "mobile-scroll_cta" }, [
              h("div", { class: "mobile-scroll_icon w-embed" }, [
                h(
                  "svg",
                  {
                    width: "100%",
                    style: {},
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  [
                    h("path", {
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
  ts = Yt(() =>
    h(
      "section",
      { class: "section cc-fd" },
      [
        h("div", { class: "container" }, [
          h("div", { class: "row" }, [
            h("div", { "data-animation-element": "group", class: "col" }, [
              h(
                "h3",
                {
                  "data-animation-element": "title",
                  class: "h1",
                  style: {},
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  h(
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
                      h(
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
                  h(
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
                      h(
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
          h("div", { class: "sticky-pair" }, [
            h("div", { class: "w-layout-grid pair-grid is-leading" }, [
              h(
                "div",
                {
                  id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f41-af552307",
                  class: "w-dyn-list",
                },
                [
                  h("div", { role: "list", class: "w-dyn-items" }, [
                    h("div", { role: "listitem", class: "w-dyn-item" }, [
                      h("div", { class: "card-wrapper cc-large" }, [
                        h(
                          "div",
                          {
                            class: "card-animation cc-40",
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                          },
                          [
                            h(
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
                                h("div", { class: "card-image_wrapper" }, [
                                  h("div", { class: "iframe-video_wrapper" }, [
                                    h("iframe", {
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
                                    h("div", { class: "iframe-video_blocker" }),
                                  ]),
                                ]),
                                h("div", { class: "card-body" }, [
                                  h("div", { class: "u-overflow-hidden" }, [
                                    h(
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
                                        h("div", { class: "card-large_text" }, [
                                          h(
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
              h("div", null, [
                h(
                  "div",
                  {
                    id: "w-node-e23686ee-2a5d-d68e-2ddf-02d095aea2fe-af552307",
                    class: "card-wrapper cc-small",
                  },
                  [
                    h(
                      "div",
                      {
                        id:
                          "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f3a-af552307",
                        class: "w-dyn-list",
                      },
                      [
                        h("div", { role: "list", class: "w-dyn-items" }, [
                          h("div", { role: "listitem", class: "w-dyn-item" }, [
                            h("div", { class: "card-wrapper cc-small" }, [
                              h(
                                "div",
                                {
                                  class: "card-animation cc-40",
                                  "data-aos": "fade-up",
                                  "data-aos-duration": "800",
                                },
                                [
                                  h(
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
                                      h(
                                        "div",
                                        { class: "card-image_wrapper" },
                                        [
                                          h(
                                            "div",
                                            { class: "iframe-video_wrapper" },
                                            [
                                              h("iframe", {
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
                                              h("div", {
                                                class: "iframe-video_blocker",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      h("div", { class: "card-body" }, [
                                        h(
                                          "div",
                                          { class: "u-overflow-hidden" },
                                          [
                                            h(
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
                                                h(
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
              h(
                "div",
                {
                  id: "w-node-_591e678b-2794-a4c1-b9e4-4c34713bcb6d-af552307",
                  class: "content is-grid",
                },
                [
                  h(
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
                      h(
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
                  h("div", { class: "btn-group" }, [
                    h(
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
                        h(
                          "a",
                          {
                            href: "/fintech-design",
                            class: "btn w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            h("div", { class: "btn-text-wrap" }, [
                              h(
                                "div",
                                { class: "btn-text" },
                                "Fintech services"
                              ),
                              h(
                                "div",
                                { class: "btn-text cc-bottom" },
                                "Fintech services"
                              ),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    h(
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
                        h(
                          "a",
                          {
                            href: "/design-trial",
                            class: "btn cc-secondary w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            h("div", { class: "btn-text-wrap" }, [
                              h("div", { class: "btn-text" }, "Design trial"),
                              h(
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
  ss = Yt(() =>
    h(
      "section",
      { class: "section" },
      [
        h("div", { class: "container" }, [
          h("div", { class: "row" }, [
            h("div", { "data-animation-element": "group", class: "col" }, [
              h(
                "h3",
                {
                  "data-animation-element": "title",
                  class: "h1",
                  style: {},
                  "data-aos": "fade-up",
                  "data-aos-duration": "1000",
                },
                [
                  h(
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
                      h(
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
          h("div", { class: "sticky-pair" }, [
            h("div", { class: "w-layout-grid pair-grid" }, [
              h(
                "div",
                { id: "w-node-dc0c39cf-ca9b-7980-3885-608a3bb047ce-af552307" },
                [
                  h(
                    "div",
                    {
                      id:
                        "w-node-_22d42303-51c3-58a5-286f-187c6fce5e6a-af552307",
                      class: "card-wrapper cc-small",
                    },
                    [
                      h(
                        "div",
                        {
                          id:
                            "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192626-af552307",
                          class: "w-dyn-list",
                        },
                        [
                          h("div", { role: "list", class: "w-dyn-items" }, [
                            h(
                              "div",
                              { role: "listitem", class: "w-dyn-item" },
                              [
                                h("div", { class: "card-wrapper cc-small" }, [
                                  h(
                                    "div",
                                    {
                                      class: "card-animation cc-40",
                                      "data-aos": "fade-up",
                                      "data-aos-duration": "800",
                                    },
                                    [
                                      h(
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
                                          h(
                                            "div",
                                            { class: "card-image_wrapper" },
                                            [
                                              h(
                                                "div",
                                                {
                                                  class: "iframe-video_wrapper",
                                                },
                                                [
                                                  h("iframe", {
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
                                                  h("div", {
                                                    class:
                                                      "iframe-video_blocker",
                                                  }),
                                                ]
                                              ),
                                            ]
                                          ),
                                          h("div", { class: "card-body" }, [
                                            h(
                                              "div",
                                              { class: "u-overflow-hidden" },
                                              [
                                                h(
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
                                                    h(
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
              h(
                "div",
                {
                  id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e19262d-af552307",
                  class: "w-dyn-list",
                },
                [
                  h("div", { role: "list", class: "w-dyn-items" }, [
                    h("div", { role: "listitem", class: "w-dyn-item" }, [
                      h("div", { class: "card-wrapper cc-large" }, [
                        h(
                          "div",
                          {
                            class: "card-animation cc-40",
                            "data-aos": "fade-up",
                            "data-aos-duration": "700",
                          },
                          [
                            h(
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
                                h("div", { class: "card-image_wrapper" }, [
                                  h("div", { class: "iframe-video_wrapper" }, [
                                    h("iframe", {
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
                                    h("div", { class: "iframe-video_blocker" }),
                                  ]),
                                ]),
                                h("div", { class: "card-body" }, [
                                  h("div", { class: "u-overflow-hidden" }, [
                                    h(
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
                                        h("div", { class: "card-large_text" }, [
                                          h(
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
              h(
                "div",
                {
                  id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192634-af552307",
                  class: "content is-grid",
                },
                [
                  h(
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
                      h(
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
                  h("div", { class: "btn-group" }, [
                    h(
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
                        h(
                          "a",
                          {
                            href: "/cases",
                            class: "btn w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            h("div", { class: "btn-text-wrap" }, [
                              h("div", { class: "btn-text" }, "View cases"),
                              h(
                                "div",
                                { class: "btn-text cc-bottom" },
                                "View cases"
                              ),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    h(
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
                        h(
                          "a",
                          {
                            href: "/design-trial",
                            class: "btn cc-secondary w-inline-block",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                          },
                          [
                            h("div", { class: "btn-text-wrap" }, [
                              h(
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
                              h(
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
  ls = N(
    '<section class="section" data-v-764ed4b3><div class="section-title_component" data-v-764ed4b3><div class="container" data-v-764ed4b3><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-764ed4b3><div class="section-title_dot" style="opacity:1;" data-v-764ed4b3></div><div class="u-overflow-hidden" data-v-764ed4b3><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-764ed4b3><h2 class="u-ts-4" data-v-764ed4b3>Contact Us</h2></div></div></div></div></div><div class="container" data-v-764ed4b3><div class="w-layout-grid pair-grid" data-v-764ed4b3><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67" data-v-764ed4b3><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext" data-v-764ed4b3><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700" data-v-764ed4b3><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-764ed4b3><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-764ed4b3><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-764ed4b3><div style="position:relative;display:inline-block;" data-v-764ed4b3> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    1
  ),
  os = Yt(() =>
    h(
      "div",
      null,
      [
        h("aside", { class: "pre-footer" }, [
          h(
            "a",
            {
              "data-mouse-text": "Read Next",
              "data-mouse-class": "cc-text",
              href: "/cases",
              class: "section cc-pre-footer w-inline-block",
            },
            [
              h("div", { class: "iframe-video_wrapper" }, [
                h("iframe", {
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
                h("div", { class: "iframe-video_blocker" }),
              ]),
              h("div", { class: "pre-footer_gradient" }),
              h("div", { class: "marquee" }, [
                h(
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
                    h(
                      "div",
                      {
                        class: "marquee_item cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Case Studies ")]
                    ),
                    h(
                      "div",
                      {
                        class: "marquee_item cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Case Studies ")]
                    ),
                    h(
                      "div",
                      {
                        class: "marquee_item cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Case Studies ")]
                    ),
                  ]
                ),
                h(
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
                    h(
                      "div",
                      {
                        class: "marquee_item cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Case Studies ")]
                    ),
                    h(
                      "div",
                      {
                        class: "marquee_item cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Case Studies ")]
                    ),
                    h(
                      "div",
                      {
                        class: "marquee_item cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Case Studies ")]
                    ),
                  ]
                ),
              ]),
              h("div", { class: "pre-footer_button" }, [
                h("div", { class: "btn cc-large-landscape" }, [
                  h("div", { class: "btn-text-wrap" }, [
                    h(
                      "div",
                      { class: "btn-text cc-large-landscape" },
                      "REad Next"
                    ),
                    h(
                      "div",
                      { class: "btn-text cc-bottom cc-large-landscape" },
                      "Button"
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
          h(
            "a",
            {
              "data-mouse-text": "Read Next",
              "data-mouse-class": "cc-text",
              href: "/design-trial",
              class: "section cc-pre-footer w-inline-block",
            },
            [
              h("div", { class: "iframe-video_wrapper" }, [
                h("iframe", {
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
                h("div", { class: "iframe-video_blocker" }),
              ]),
              h("div", { class: "pre-footer_gradient" }),
              h("div", { class: "marquee" }, [
                h(
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
                    h(
                      "div",
                      {
                        class: "marquee_item cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Design Trial ")]
                    ),
                    h(
                      "div",
                      {
                        class: "marquee_item cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Design Trial ")]
                    ),
                    h(
                      "div",
                      {
                        class: "marquee_item cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Design Trial ")]
                    ),
                  ]
                ),
                h(
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
                    h(
                      "div",
                      {
                        class: "marquee_item cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Design Trial ")]
                    ),
                    h(
                      "div",
                      {
                        class: "marquee_item cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Design Trial ")]
                    ),
                    h(
                      "div",
                      {
                        class: "marquee_item cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [h("div", { class: "h1" }, "Design Trial ")]
                    ),
                  ]
                ),
              ]),
              h("div", { class: "pre-footer_button" }, [
                h("div", { class: "btn cc-large-landscape" }, [
                  h("div", { class: "btn-text-wrap" }, [
                    h(
                      "div",
                      { class: "btn-text cc-large-landscape" },
                      "REad Next"
                    ),
                    h(
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
var is = ke(Nt, [
    [
      "render",
      function (e, a, t, s, l, o) {
        const i = j("View"),
          r = j("Footer");
        return (
          g(),
          b(
            w,
            null,
            [L(i), Kt, Xt, $t, Gt, Jt, es, as, ts, ss, ls, os, L(r)],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-764ed4b3"],
  ]),
  rs = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: is },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ns = {
    "../pages/about.vue": () =>
      Na(
        () =>
          Promise.resolve().then(function () {
            return st;
          }),
        void 0
      ),
    "../pages/case.vue": () =>
      Na(
        () =>
          Promise.resolve().then(function () {
            return nt;
          }),
        void 0
      ),
    "../pages/demo.vue": () =>
      Na(
        () =>
          Promise.resolve().then(function () {
            return kt;
          }),
        void 0
      ),
    "../pages/home.vue": () =>
      Na(
        () =>
          Promise.resolve().then(function () {
            return Vt;
          }),
        void 0
      ),
    "../pages/index.vue": () =>
      Na(
        () =>
          Promise.resolve().then(function () {
            return rs;
          }),
        void 0
      ),
  },
  cs = {
    "../pages/about.vue": st,
    "../pages/case.vue": nt,
    "../pages/demo.vue": kt,
    "../pages/home.vue": Vt,
    "../pages/index.vue": rs,
  },
  ds = [];
for (let Ss in ns) {
  let e = Ss.replace("../pages", "").toLowerCase().replace(".vue", "");
  (e = e.replace(/\/index$/, "")),
    (e = e.replace(/\/_+/g, "/:")),
    ds.push({
      path: e,
      name: e,
      meta: {
        layout: cs[Ss].default.layout || "layout-default",
        title:
          null != (t = null == (a = cs[Ss].default) ? void 0 : a.title)
            ? t
            : "app.project.title",
        header:
          null != (l = null == (s = cs[Ss].default) ? void 0 : s.header)
            ? l
            : "header-default",
        scroll:
          null != (i = null == (o = cs[Ss].default) ? void 0 : o.noScroll) && i,
      },
      component: ns[Ss],
    });
}
const ps = ge({
  history: be("./"),
  routes:
    ((us = { defaultPath: "/home" }),
    [
      {
        path: "/",
        name: "default-path",
        redirect: { name: M({ defaultPath: "/" }, us).defaultPath },
      },
      ...ds,
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
var us;
ps.beforeEach(async (e, a, t) => {
  t();
});
var fs = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ps }, Symbol.toStringTag, {
    value: "Module",
  })
);
const ms = he({ modules: Wa });
ye(ms, ps);
var vs = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ms }, Symbol.toStringTag, {
    value: "Module",
  })
);
const gs = {
    use(e) {
      e.interceptors.response.use(
        async function (a) {
          if (100004 === a.data.code) {
            const t = e.get("/app/jwt-token", {
              params: { account: ms.state.auth.user.account },
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
  bs = {
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
                  const { isConfirmed: e } = await Be.alert({
                    title: `Error(${a.code})`,
                    text: Le.t(`error.code.${a.code}`),
                  });
                  return (
                    e &&
                      (await ms.dispatch("auth/logout"),
                      await ps.replace("/login"),
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
  hs = {
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
                await Be.alert({
                  title: `Error(${a.code})`,
                  text: Le.t(`error.code.${a.code}`),
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
class ys {
  constructor() {
    (this.provider = new Ha({}.VITE_REMOTE_API)), this.init();
  }
  init() {
    this.provider.use({}, Pa, gs, bs, hs, Ta);
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
ys.prototype.install = function (e) {
  const a = "http-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var ws = new ys(),
  _s = Object.freeze(
    Object.defineProperty(
      { __proto__: null, HttpService: ys, default: ws },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class xs {
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
    return ms.state.app.popupState;
  }
  async modal(e = {}) {
    const {
      title: a,
      text: t,
      component: s = null,
      showCancelButton: l = !0,
      showConfirmButton: o = !0,
      confirmButtonText: i = Le.t("button.confirm"),
      cancelButtonText: r = Le.t("button.cancel"),
      allowOutsideClick: n = !0,
      props: c = {},
    } = e;
    return new Promise((e) => {
      ms.commit(
        "app/set/popup",
        v(m({}, this.initStates), {
          type: "Modal",
          resolve: e,
          title: a,
          text: t,
          component: s ? te(s) : null,
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
    ms.commit("app/clear/popup");
  }
}
xs.prototype.install = function (e) {
  const a = "popup-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Cs = new xs();
const As = {
    "../services/alert-service.js": Ba,
    "../services/http-service.js": _s,
    "../services/i18n-service.js": qe,
    "../services/popup-service.js": Object.freeze(
      Object.defineProperty(
        { __proto__: null, PopupService: xs, default: Cs },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../services/router-service.js": fs,
    "../services/storage-service.js": Te,
    "../services/store-service.js": vs,
  },
  ks = {
    install: (e) => {
      for (let a in As) e.use(As[a].default);
    },
  };
const js = we(je);
js.provide("$jQuery", _e),
  js.provide("$swal", Be),
  js.provide("$storage", V),
  js.provide("$tabsslider", xe),
  js.use(ca),
  js.use(Oa),
  js.use(Ce, { loading: "", error: "" }),
  js.use(ks),
  js.mount("#app");
