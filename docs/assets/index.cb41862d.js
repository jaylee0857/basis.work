var e,
  a,
  s,
  t,
  i,
  l,
  o,
  r = Object.defineProperty,
  n = Object.defineProperties,
  d = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  p = Object.prototype.hasOwnProperty,
  v = Object.prototype.propertyIsEnumerable,
  m = (e, a, s) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[a] = s),
  f = (e, a) => {
    for (var s in a || (a = {})) p.call(a, s) && m(e, s, a[s]);
    if (c) for (var s of c(a)) v.call(a, s) && m(e, s, a[s]);
    return e;
  },
  u = (e, a) => n(e, d(a));
import {
  o as g,
  c as b,
  a as w,
  b as h,
  n as y,
  u as _,
  F as x,
  d as k,
  r as j,
  e as z,
  w as q,
  f as C,
  g as S,
  h as O,
  i as A,
  j as B,
  k as E,
  l as T,
  m as L,
  p as I,
  q as P,
  s as M,
  t as D,
  v as F,
  x as U,
  y as H,
  S as V,
  z as N,
  A as G,
  B as X,
  C as W,
  D as R,
  E as Y,
  G as Z,
  H as K,
  I as $,
  J,
  T as Q,
  K as ee,
  L as ae,
  M as se,
  N as te,
  O as ie,
  P as le,
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
  a2 as we,
  a3 as he,
  a4 as ye,
  a5 as _e,
  a6 as xe,
} from "./vendor.00fd3504.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      a(e);
    new MutationObserver((e) => {
      for (const s of e)
        if ("childList" === s.type)
          for (const e of s.addedNodes)
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
      "../assets/images/favicon.png":
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAIAAACTslUmAAAACXBIWXMAAAsSAAALEgHS3X78AAAKRklEQVR4nN1b7XmjvBJV9nn/iw5EB3grEFsB7kBxBXgrUFIBbAV4K8CpAFIBuAJIBUAF3B8nmSgSYBzb93nvPT/2A0tizmg0mhmJh3Ec2f8v/sFfbdvWdV2WZV3X2+0W/6Wf3t7e5vpzzn3f7/ve87wwDKkX0Pf96XSi/wZB4Pv+8Xjs+x4vGoYBPwkhfN9njL2+vi5LjJZ1XQ/DIKXEwzAMGWOQYbPZfKFX13UYhp7n4QXH49H3fXTwfR8Pgbquf//+zRiTUmIgz/No9IeHB7x+v9/7vg9lCSFM7aDl8Xjc7XZaa3qOoeq6htyMMfNXxliapsMwCCHCMGzb1uTQtu3z87PZOI7jp6cnz/PYOI5FURRFMa5DEASMsSiK3J8wdNd11nOlFH5qmgZPsiyDEO4gmBCllPU8iiKodU6woiiyLNNaQy9oyZqmEUKs5IZR5mjA/NwucRy7GuGcTzYGvTzPzYdVVXHOJ2lPAoOM48jyPGeMVVW1phsA9bi6n9Ru13WQzJIYnCd1xBizrAniCiHc9pOAvRRF8W7iWZat6bYscRAEriGAhvu8aRosMGtky4zHD0u+aA6qqvpCb/3aM/tzzs1XkklYzebUJ6XknJtPYPmmLpZHWAC6/EBnOMD12Gw2SZIMw+BuBm3b0r/3+z3EfXx8dAc5HA6Msb7vrefwrvhpu90yxpRSNEIYhpOjWRBCtG3LlFKWCtcjyzJYqda6aRrMHq1JcpgLRpUkCeecTBR2mCSJOYLlTtDGtN5JSCmVUgyO/nv0xnHsug6ri8A577qOuJGsc6CdRmuNf2ut4zjmnHPOXZuEuU5uKiaUUrTpM6XUSqc0iaZpkiSBcCbPs9zQFyZgQUo5JxL7ugN1XedOptb6kx6ksTzhN0Bejl3irqqqEkKY3CyPagFtxnHsuk5rPanHd3p5nkspSfFRFJ01ayCKosnJoT1qHbV3ULSglDq7AaAlrfwgCNx5LopCSvm56qqqiuMYPJVSa9bu3ALAwrvIlWN/WmnMa2wY0zbhVIqiiKIIDm2BpJRyIQKM43gyLnXRdR3iybMBFyaAFqqUcsH+4ziepgc0TQONBkGQZZlrMMv0VgIGNukhCRYrYDJeNYcFf1YUhdZ6ztzzPKdlKYSI4xjpRdd1QogFelVV5Xm+PP/jOEZRFMex2wauWCllupwgCLBLL/secm9JkjxEUfTy8sI5T9N0LhooyzJN05eXF/enOI7NiKdt27ZtKSXlnJdlaeZmjLHD4YB3mc+R4OJPSvmI1X6/3263eFFd1z9//tRaPz09ufLs9/s/f/5ABX3ff8kal91x13VJkiBQnNSCiSAItNaTi970YZOIoohmwF1dk7E4xIPTxg7HGMvz/EFrXZZlGIaUDh8OB4r65pCmKdJ2MPE8D+k2svuz3Q+HQ9u22+2273vMGJ6bFYDNZnM6nUanFHQ4HHa7XRRFx+PRfLjf7yE/ih2/fv1SSrEoirBMm6ahSArLbHnZTOZEK4EZWM7fML773Mo24edJ0RgQu6iUkllZTNM01JoxppTKsmySJ15/aSZFgPlN7sijkXC5P9EuYoWBcRzTUDY9y3Mi2DG9lpQyyzJTFMqIv0dvNHYF1wTIs7u9vkSSjEELlhg2vTkpsyyzokHMJ7YTNu+NqqqCZ1+IjEejiBJFkdlsMogxlw8Rm3RgcC2f9JZ9ZlEUSMwwousqgiCQHzDVIYQw92uYkyWNGU8jGOy6DlYXx7HWOooia8YQr8xNCXWXUjKY8jI90geEs3MNB0KIJEncUAG5jzufVtJo2QtNlFIK0eJy7oZggHMexzGzUmwX5Gzm3AAhSRKIshDywxonh+q6Ls9zilQ450KIIAiwDaI90p8FUTH5iGO11u/0JhdxVVVk62e5AbCK5cZVVQVBEATBnBbgNicNyq1WAVmWBUFgeikp5Sc9K0I1Pcrc8kUQ40pGOdjCtklZwuTI8HuT9KyZMD28lNIq22mtmVkUybKMYlb2kSvMiQghJoMmWpmwqzmecI9CCGsQGLm7W2D9Q6ewLIgqhHAbw8/ZJxWYrjiOz6bMiDzm3FdRFPT6hXwHhsq+Jm944ioF5oe4l1zoXNhk0xNCYE+bbA3PZuW4yz6JeGqtl2M3OAzGmFKKrCnPc3h/JFZWCH62nmDTOxt/mHEMNjoiDALYo9BmeSgXTdO4OeskrDW2lt7KShl897IEa6osmBbrIZXcoSNkzNAdc2r+q+hRaEvL9GyKPY5j13U4T0NIQUiSZGWhDf7DEhf03CobjlZWFm++0INiUF+gNQDjXhMuo9a9/q2WxNaEzB1XYeVfVHr7YpwmEzg9Mg+kHnNUV6ZFVVW5+xi2PirCQtFuEkjJ4Xpu4zjGcSyEYAuBvxm10LKO49hcM1RNc7sjyKK6gxsYmSVtQhAERVGQhVOJ4dIDsPczhuW8ZvzwaVaYi3SeDrLZR3EFg7p5w6TTwrQg5Vv2VZdO3TiOEqX3s/RMaZIkQfFiWRoCopaFMTGrGBmJiKUdrO2V7sqixxi7gJ4FWiEIPk0D1lpbqf2CEN8+XTw7MqNrO98AlTc9z9vv933fPz8/K6Vw5roSbduaJc3bw7wFciUwhxcZAmS4/tUuwOv9bP1sZXINHh8fOefPz89lWa5pv9ysLMuyLN2T94vwfeN04Xlemqa73e7x8bGu67PXEeiSwXa7tQryx+Px7e0tiqKLTH0C33Ytc1hTmzLtxwVKNd/wltbgUsofV+lmCjjZSNP0rF2hig5PS6ezSZK0bYtLd9cLc3t6YRgGQTAMQ5qmC83atj2dTkqpsiyfnp5ARimFqzC3wu3psY/bOsv0GGNKKWoDN3OTGTNxF3rww8MwLPhG3/cPhwO5HxwS3cSBm7gLPd/3EYuv3CHY/xY9xhgOetfTe319nSxOX4l70cM8WLfp5oAN8OYLr23bHzcflCClHIbBvCC4IAe7tWX2ff/29nZHeghE1tvnbQGV3cs42UdKsWb2YMOX3ildBpT7r6CH+Ma6H3I9hBC3zBgsQNz1If9KP7QSZVn6vn/H2QPWz8mVuc8k7k5vDWDGN6fX9/2/gh5m+LbGyRg7nU53pLfGqQArP466FEKIH3Aq99idQG8NSd/3EZGZ96iux3/DtawMG2Cft6XHyLXcw2tdBPrw7bbDvtO7+bK+dEx8bTIMww0Z3tc4L4pFfN/HgdHkJdTv4Z3e+jODiwBPuD6SRIp4Op1uMoHva34cR1xhwEW4a2pvJnBYx6a+0FsAulx0CjsJfIKXZdk/jLEwDP/+/bvb7Yg63axYiEWtz2oBXMtlRh3J+s51AX3fc86HYbjSz+Ger+d52+32ATqjy7rXjAsIITzPow+eOeebzcbUBa6EW73CMDwej9QriqK+7zebTd/3UJBr5JZ+6bL5nz9/GGN5nn/Sw1vTND0ej7c9suGce56Hj5/p620SCF+EM8Y8z/M8j2iT1bi6MKla0Qjd5w7DEC/6pEfAZX1XUKjHMleyxrqufd+/bUp6Pf4Dh5ybU5wY3ZkAAAAASUVORK5CYII=",
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
  ).href;
var je = (e, a) => {
  const s = e.__vccOpts || e;
  for (const [t, i] of a) s[t] = i;
  return s;
};
const ze = { class: "icon" },
  qe = { class: "svg_box" },
  Ce = ["src"];
var Se = je(
  {
    components: {
      Loading: je(
        {
          props: { mode: String },
          setup: (e) => (a, s) => (
            g(),
            b(
              x,
              null,
              [
                w(" {{ mode }} "),
                h("div", { class: y(["mask", e.mode]) }, null, 2),
                h(
                  "div",
                  { class: y(["bg", e.mode]) },
                  [
                    h("div", ze, [
                      h("div", qe, [
                        h(
                          "img",
                          { src: _(ke)("favicon.png"), alt: "" },
                          null,
                          8,
                          Ce
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
        [
          [
            "__file",
            "/Users/lishengjie/Documents/GitHub/basis.work/src/widgets/layout/loading.vue",
          ],
        ]
      ),
    },
    setup() {
      const e = k(),
        a = j(!1),
        s = j(""),
        t = j("leave"),
        i = z(() => "stop" === t.value),
        l = z(() => {
          if (T(e.state.route.path)) return null;
          return L("layout-error")(I(["meta", "layout"], e.state.route));
        });
      return (
        q(
          () => e.state.route,
          (i) => {
            s.value !== i &&
              ((a.value = !0),
              setTimeout(() => {
                (a.value = !1), (t.value = "enter");
              }, 3500)),
              (s.value = e.state.route.path);
          }
        ),
        q(a, (a) => {
          e.commit("app/systm/Loading", a);
        }),
        C(() => {
          window.addEventListener("resize", () => {});
        }),
        { layout: l, isShowLoading: a, mode: t, isError: i }
      );
    },
  },
  [
    [
      "render",
      function (e, a, s, t, i, l) {
        const o = S("router-view"),
          r = S("the-popup"),
          n = S("Loading");
        return (
          g(),
          b(
            x,
            null,
            [
              w(" 外層利用is載入layout "),
              (g(),
              O(B(t.layout), null, {
                default: A(() => [
                  w(
                    ' 內層利用router顯示 透過解構賦值 取得從router-view取得的component 在把Component用在:is＝"Component"身上'
                  ),
                  E(o, null, {
                    default: A(({ Component: e }) => [(g(), O(B(e)))]),
                    _: 1,
                  }),
                ]),
                _: 1,
              })),
              E(r),
              t.isError || t.isShowLoading
                ? (g(), O(n, { key: 0, mode: t.mode }, null, 8, ["mode"]))
                : w("v-if", !0),
            ],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-7ba5bd90"],
    ["__file", "/Users/lishengjie/Documents/GitHub/basis.work/src/App.vue"],
  ]
);
const Oe = {
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
  Ae = {};
for (let No in Oe) {
  const e = No.replace("../locales/", "").toLowerCase().replace(".js", ""),
    [a, ...s] = e.split("/"),
    t = P(".", s),
    i = Oe[No].default;
  Ae[a] = M((e, a) => D(e, { [`${t}.${a}`]: i[a] }), Ae[a] || {}, F(i));
}
const Be = (() => {
    var e, a, s, t;
    const i = U.get("locale");
    if (i) return i;
    let l =
      null !=
      (t =
        null !=
        (s = null == (e = navigator.language) ? void 0 : e.toLowerCase())
          ? s
          : null == (a = navigator.userLanguage)
          ? void 0
          : a.toLowerCase())
        ? t
        : null;
    return l
      ? (l.includes("ph")
          ? (l = "en-ph")
          : l.includes("zh")
          ? (l = "zh-tw")
          : l.includes("en") && (l = "en"),
        (l = l in Ae ? l : {}.VITE_LOCALE),
        l)
      : {}.VITE_LOCALE;
  })(),
  Ee = H.exports.createI18n({
    initLocale: Be,
    fallbackLocale: null != (e = {}.VITE_DEFAULT_LANG) ? e : "zh-tw",
    messages: Ae,
  });
var Te = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Ee }, Symbol.toStringTag, {
    value: "Module",
  })
);
(V.toast = function (e) {
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
      e.addEventListener("click", V.close);
    },
  });
}),
  (V.alert = function ({
    title: e,
    text: a,
    willClose: s = null,
    heightAuto: t = !1,
    html: i = !1,
    confirmButtonText: l = Ee.t("button.confirm"),
    style: o = "",
  }) {
    return this.fire({
      title: e,
      text: a,
      html: i,
      customClass: `swal2-alert ${o}`,
      heightAuto: t,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      willClose: s,
      confirmButtonText: l,
    });
  }),
  (V.showLoading = function () {
    return this.fire({
      title: "winner winner chicken dinner",
      showConfirmButton: !1,
      customClass: "swal2-loading",
      showClass: { popup: "animate__animated animate__fadeIn" },
      hideClass: { popup: "animate__animated animate__fadeOut" },
      background: "transparent",
    });
  }),
  (V.confirm = function ({
    title: e,
    text: a,
    html: s,
    confirmCallback: t = null,
    heightAuto: i = !1,
  }) {
    return this.fire({
      title: e,
      text: a,
      html: s,
      customClass: "swal2-confirm",
      heightAuto: i,
      showCancelButton: !0,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      preConfirm() {
        null == t || t();
      },
    });
  });
const Le = V.mixin({
  reverseButtons: !0,
  heightAuto: !1,
  focusConfirm: !1,
  allowOutsideClick: !1,
  allowEnterKey: !1,
  allowEscapeKey: !1,
  customClass: "swal2-wrap",
  confirmButtonText: Ee.t("button.confirm"),
  cancelButtonText: Ee.t("button.cancel"),
  didOpen(e) {
    const a = e.querySelector(".swal2-cancel");
    e.querySelector(".swal2-confirm").blur(), a.blur();
  },
});
class Ie {
  constructor() {
    return U;
  }
}
class Pe {
  constructor() {
    this.provider = new Ie();
  }
  destroy() {
    this.provider.clearAll();
  }
}
Pe.prototype.install = function (e) {
  const a = "storage-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Me = new Pe(),
  De = Object.freeze(
    Object.defineProperty(
      { __proto__: null, StorageService: Pe, default: Me },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Fe = () => {
    const e = H.exports.useI18n(),
      a = j({}),
      s = (t, i = {}) => {
        const [l, ...o] = N(".", t);
        return l in a.value ? s(`${a.value[l]}.${P(".", o)}`, i) : e.t(t, i);
      };
    return {
      locale: e.locale,
      change: (a) => {
        e.setLocale(a), Me.provider.set("locale", a);
      },
      setPrefix: (e) => {
        a.value = "string" == typeof e ? { $current: e } : f(f({}, a.value), e);
      },
      t: s,
      addMessages: e.addMessages,
    };
  },
  Ue = ["onMouseenter", "onClick"],
  He = h("div", { class: "line" }, null, -1),
  Ve = { class: "list_style" },
  Ne = { class: "nav_link-top" },
  Ge = h(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Xe = { class: "nav_link-title" },
  We = { class: "u-ts-3" },
  Re = { class: "nav_link-p" },
  Ye = h(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Ze = h("div", { id: "pink_mask" }, null, -1);
var Ke = je(
  {
    props: ["isOpen"],
    emits: ["toggleOpen"],
    setup(e, { emit: a }) {
      const s = e,
        t = j(1),
        i = j(!0),
        l = G(),
        o = j([
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
        r = z(() => 25 * t.value),
        n = z(() => {
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
        d = j(25);
      return (e, c) => (
        g(),
        b(
          "div",
          { class: y(["layout-deafult-header-nav", { active: s.isOpen }]) },
          [
            h("ul", null, [
              (g(!0),
              b(
                x,
                null,
                X(
                  o.value,
                  (e, i) => (
                    g(),
                    b(
                      "li",
                      {
                        key: e,
                        style: W(`--i: ${e}`),
                        onMouseenter: (e) =>
                          ((e) => {
                            t.value = e;
                          })(i),
                        onClick: (t) => {
                          return (
                            (i = e.path),
                            l.push(i),
                            void a("toggleOpen", s.isOpen)
                          );
                          var i;
                        },
                      },
                      [
                        He,
                        h("div", Ve, [
                          h("div", Ne, [
                            Ge,
                            h("div", Xe, [h("div", We, R(e.title), 1)]),
                          ]),
                          h(
                            "div",
                            {
                              class: y([
                                "nav_link-btm",
                                { active: t.value === i },
                              ]),
                            },
                            [h("p", Re, R(e.content), 1), Ye],
                            2
                          ),
                        ]),
                      ],
                      44,
                      Ue
                    )
                  )
                ),
                128
              )),
              h(
                "div",
                {
                  class: "move-item",
                  style: W({
                    left: "" + (i.value ? `calc(${_(r)}% - 4px)` : "auto"),
                    right: "" + (i.value ? "auto" : `calc(${_(n)}% - 4px)`),
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
  [
    [
      "__file",
      "/Users/lishengjie/Documents/GitHub/basis.work/src/widgets/layout/nav-bar.vue",
    ],
  ]
);
const $e = { key: 0 },
  Je = ["src"],
  Qe = ["src"],
  ea = [h("div", null, null, -1), h("div", null, null, -1)];
const aa = { class: "layout-deafult pb-32" };
var sa = je(
    {
      components: {
        LayoutHeader: je(
          {
            setup(e) {
              const a = j(!1),
                s = (e) => {
                  a.value = !e;
                };
              return (e, t) => {
                const i = S("router-link");
                return (
                  g(),
                  b(
                    x,
                    null,
                    [
                      h(
                        "div",
                        {
                          class: y([
                            "layout-deafult-header",
                            { active: a.value },
                          ]),
                        },
                        [
                          E(
                            i,
                            {
                              to: "/",
                              "aria-current": "page",
                              class: y([
                                "layout-deafult-header-logo",
                                { "layout-deafult-header-logo--open": a.value },
                              ]),
                              "aria-label": "home",
                            },
                            {
                              default: A(() => [
                                a.value
                                  ? (g(),
                                    b(
                                      "img",
                                      {
                                        key: 1,
                                        src: _(ke)("logo.png"),
                                        alt: "",
                                      },
                                      null,
                                      8,
                                      Qe
                                    ))
                                  : (g(),
                                    b("div", $e, [
                                      h(
                                        "img",
                                        { src: _(ke)("logo.png"), alt: "" },
                                        null,
                                        8,
                                        Je
                                      ),
                                    ])),
                              ]),
                              _: 1,
                            },
                            8,
                            ["class"]
                          ),
                          h(
                            "div",
                            {
                              class: y([
                                "layout-deafult-header-btn",
                                { "layout-deafult-header-btn--open": a.value },
                              ]),
                              onClick:
                                t[0] || (t[0] = (e) => (a.value = !a.value)),
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
                            Ke,
                            { key: 0, "is-open": a.value, onToggleOpen: s },
                            null,
                            8,
                            ["is-open"]
                          ))
                        : w("v-if", !0),
                    ],
                    64
                  )
                );
              };
            },
          },
          [
            [
              "__file",
              "/Users/lishengjie/Documents/GitHub/basis.work/src/widgets/layout/header.vue",
            ],
          ]
        ),
      },
      setup() {
        const { t: e } = Fe();
        return { t: e };
      },
    },
    [
      [
        "render",
        function (e, a, s, t, i, l) {
          const o = S("LayoutHeader");
          return (
            g(), b(x, null, [E(o), h("div", aa, [Y(e.$slots, "default")])], 64)
          );
        },
      ],
      [
        "__file",
        "/Users/lishengjie/Documents/GitHub/basis.work/src/layouts/layout-default.vue",
      ],
    ]
  ),
  ta = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: sa },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ia = { class: "layout-demo" };
var la = je({ setup() {} }, [
  [
    "render",
    function (e, a, s, t, i, l) {
      return g(), b("div", ia, [Y(e.$slots, "default")]);
    },
  ],
  [
    "__file",
    "/Users/lishengjie/Documents/GitHub/basis.work/src/layouts/layout-demo.vue",
  ],
]);
const oa = {
    "../layouts/layout-default.vue": ta,
    "../layouts/layout-demo.vue": Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: la },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
  },
  ra = [];
for (let No in oa) {
  const e = No.replace("../layouts/", "").toLowerCase().replace(".vue", "");
  ra.push({ componentName: e, component: oa[No].default });
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
      const e = G();
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
var ma = je(da, [
    [
      "render",
      function (e, a, s, t, i, l) {
        return (
          g(),
          b("div", ca, [
            s.goBackButton
              ? (g(),
                b("div", {
                  key: 0,
                  class: "go-back absolute left-3 top-6",
                  onClick:
                    a[0] || (a[0] = (...e) => t.goBack && t.goBack(...e)),
                }))
              : w("v-if", !0),
            h("div", pa, [
              Y(e.$slots, "title", {}, () => [Z(R(s.title), 1)], !0),
            ]),
            h("div", va, [Y(e.$slots, "actions", {}, void 0, !0)]),
          ])
        );
      },
    ],
    ["__scopeId", "data-v-4c72660e"],
    [
      "__file",
      "/Users/lishengjie/Documents/GitHub/basis.work/src/components/the-header.vue",
    ],
  ]),
  fa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ma },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ua = () => K("popup-service");
const ga = {
    class: "popup-modal swal2-popup swal2-modal swal2-confirm",
    tabindex: "-1",
    style: { display: "grid" },
  },
  ba = { class: "swal2-title", style: { display: "block" } },
  wa = { class: "swal2-html-container", style: { display: "block" } },
  ha = { class: "swal2-actions", style: { display: "flex" } };
var ya = je({}, [
  [
    "render",
    function (e, a) {
      return (
        g(),
        b("div", ga, [
          h("h2", ba, [Y(e.$slots, "title")]),
          h("div", wa, [Y(e.$slots, "content")]),
          h("div", ha, [Y(e.$slots, "actions")]),
        ])
      );
    },
  ],
  [
    "__file",
    "/Users/lishengjie/Documents/GitHub/basis.work/src/widgets/popup/modal.vue",
  ],
]);
const _a = {
    key: 0,
    class:
      "fixed z-[1041] inset-0 w-full h-full flex justify-center items-center pointer-events-none",
  },
  xa = { key: 1 },
  ka = ["data-timer", "data-end"];
var ja = je(
  {
    setup(e) {
      const a = ua(),
        s = z(() => a.state),
        t = (e) => {
          s.value.resolve(
            f(
              { isConfirmed: !1, isDismissed: !1, dismiss: null, result: null },
              e
            )
          );
        },
        i = z(() => (s.value.type, ae(ya))),
        l = z(() => s.value.BackdropStyle),
        o = j();
      let r = null;
      const n = () => {
        clearTimeout(r), (r = null);
      };
      q([() => s.value.autoClose, () => s.value.timer], ([e, a]) => {
        a &&
          (n(),
          (r = setTimeout(() => {
            n(), e && d("timer");
          }, a)));
      });
      const d = async (e) => {
          if (r) {
            if (!s.value.allowDismissWhenTimerRunning) return;
            n();
          }
          if (o.value && "onDismissed" in o.value) {
            const s = await o.value.onDismissed();
            s && (t({ isDismissed: !0, dismiss: e, result: s }), a.clear());
          } else t({ isDismissed: !0, dismiss: e }), a.clear();
        },
        c = async () => {
          s.value.allowOutsideClick && d("backdrop");
        },
        p = async () => {
          d("cancel");
        },
        v = async () => {
          if (r) {
            if (!s.value.allowConfirmWhenTimerRunning) return;
            n();
          }
          if (o.value && "onConfirmed" in o.value) {
            const e = await o.value.onConfirmed();
            e && (t({ isConfirmed: !0, result: e }), a.clear());
          } else t({ isConfirmed: !0 }), a.clear();
        };
      return (e, a) => (
        g(),
        O(ee, { to: "body" }, [
          E(
            Q,
            { name: "popup", duration: "600" },
            {
              default: A(() => {
                var e;
                return [
                  _(s).$display
                    ? (g(),
                      b("div", _a, [
                        (g(),
                        O(
                          B(_(i)),
                          {
                            class: y([
                              "popup__inner pointer-events-auto",
                              {
                                "no-enter-animation":
                                  null == (e = _(s))
                                    ? void 0
                                    : e.noEnterAnimation,
                              },
                            ]),
                          },
                          $(
                            {
                              title: A(() => [Z(R(_(s).title), 1)]),
                              content: A(() => [
                                _(s).component
                                  ? (g(),
                                    O(
                                      B(_(s).component),
                                      J(
                                        { key: 0, ref_key: "compRef", ref: o },
                                        _(s).props
                                      ),
                                      null,
                                      16
                                    ))
                                  : (g(), b("div", xa, R(_(s).text), 1)),
                              ]),
                              actions: A(() => [
                                _(s).showCancelButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 0,
                                        type: "button",
                                        class: "cancel-button",
                                        onClick: p,
                                      },
                                      R(_(s).cancelButtonText),
                                      1
                                    ))
                                  : w("v-if", !0),
                                _(s).showConfirmButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 1,
                                        type: "button",
                                        class: "confirm-button",
                                        onClick: v,
                                      },
                                      R(_(s).confirmButtonText),
                                      1
                                    ))
                                  : w("v-if", !0),
                              ]),
                              _: 2,
                            },
                            [
                              _(s).timer && _(s).timerProgress
                                ? {
                                    name: "timer",
                                    fn: A(() => [
                                      w(
                                        " Date.now() + state.timer 現在時間加上指定時間則為倒數結束時間 "
                                      ),
                                      h(
                                        "div",
                                        {
                                          class: "timer-progress",
                                          "data-timer": _(s).timer,
                                          "data-end": Date.now() + _(s).timer,
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
                    : w("v-if", !0),
                ];
              }),
              _: 1,
            }
          ),
          E(
            Q,
            {
              name: "popup-backdrop",
              "enter-active-class": "animate__animated animate__fadeIn",
              "leave-active-class": "animate__animated animate__fadeOut",
            },
            {
              default: A(() => [
                _(s).$display
                  ? (g(),
                    b(
                      "div",
                      {
                        key: 0,
                        class: "popup-backdrop",
                        style: W({ background: _(l) }),
                        onClick: c,
                      },
                      null,
                      4
                    ))
                  : w("v-if", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  },
  [
    ["__scopeId", "data-v-628f8c70"],
    [
      "__file",
      "/Users/lishengjie/Documents/GitHub/basis.work/src/components/the-popup.vue",
    ],
  ]
);
const za = {
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
for (let No in za) {
  const e = No.replace("../components/", "").toLowerCase().replace(".vue", "");
  qa.push({ componentName: e, component: za[No].default });
}
const Ca = {
  install: (e) => {
    qa.forEach((a) => {
      e.component(a.componentName, a.component);
    });
  },
};
class Sa {
  constructor() {
    return V.mixin({
      reverseButtons: !0,
      heightAuto: !1,
      focusConfirm: !1,
      allowOutsideClick: !1,
      allowEnterKey: !1,
      allowEscapeKey: !1,
      customClass: "swal2-wrap",
      confirmButtonText: Ee.t("button.confirm"),
      cancelButtonText: Ee.t("button.cancel"),
      didOpen(e) {
        const a = e.querySelector(".swal2-cancel");
        e.querySelector(".swal2-confirm").blur(), a.blur();
      },
    });
  }
}
class Oa {
  constructor() {
    this.provider = new Sa();
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
    willClose: s = null,
    heightAuto: t = !1,
    html: i = !1,
    confirmButtonText: l = Ee.t("button.confirm"),
    style: o = "",
  }) {
    return this.provider.fire({
      title: e,
      text: a,
      html: i,
      customClass: `swal2-alert ${o}`,
      heightAuto: t,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      willClose: s,
      confirmButtonText: l,
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
    html: s,
    confirmButtonText: t = Ee.t("button.confirm"),
    confirmCallback: i = null,
    heightAuto: l = !1,
  }) {
    return this.provider.fire({
      title: e,
      text: a,
      html: s,
      customClass: "swal2-confirm",
      confirmButtonText: t,
      heightAuto: l,
      showCancelButton: !0,
      showClass: { popup: "animate__animated animate__fadeInUp" },
      hideClass: { popup: "animate__animated animate__fadeOutDown" },
      preConfirm() {
        null == i || i();
      },
    });
  }
  close() {
    this.provider.close();
  }
}
Oa.prototype.install = function (e) {
  const a = "alert-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Aa = new Oa(),
  Ba = Object.freeze(
    Object.defineProperty(
      { __proto__: null, AlertService: Oa, default: Aa },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class Ea {
  constructor(e, a = {}) {
    this.instance = se.create(f({ baseURL: e }, a));
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
const Ta = {
    use(e) {
      e.interceptors.request.use(
        function (e) {
          return e;
        },
        function (e) {
          return e && e.response, Promise.reject(e);
        }
      ),
        e.interceptors.response.use(
          function (e) {
            return e;
          },
          function (e) {
            return e && e.response, Promise.reject(e);
          }
        );
    },
  },
  La = {
    use(e) {
      e.interceptors.request.use(
        function (e) {
          const a = U.get("token");
          return a && (e.headers.Authorization = `Bearer ${a}`), e;
        },
        function (e) {
          return Promise.reject(e);
        }
      );
    },
  },
  Ia = (e, { rejectNil: a, rejectEmpty: s }) =>
    M(
      (t, i) => {
        const l = e[i];
        return (a && T(l)) || (s && te(l)) ? t : ie(i, l, t);
      },
      {},
      F(e)
    ),
  Pa = {
    use(e) {
      e.interceptors.request.use(
        function (e) {
          const {
            rejectNil: a = !0,
            rejectEmpty: s = !1,
            isFormData: t = !1,
          } = e;
          if (
            (e.params &&
              (e.params = Ia(e.params, { rejectNil: a, rejectEmpty: s })),
            e.data &&
              ((e.data = Ia(e.data, { rejectNil: a, rejectEmpty: s })), t))
          ) {
            const a = new FormData();
            le((s) => {
              e.data[s] instanceof Array
                ? le((e) => {
                    a.append(`${s}[]`, e);
                  }, e.data[s])
                : a.append(s, e.data[s]);
            }, F(e.data)),
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
    e.popupState = u(f({}, a), { $display: !0, $timestamp: Date.now() });
  },
  "clear/popup"(e) {
    e.popupState = { $display: !1, $timestamp: -1 };
  },
  "systm/Loading"(e, a) {
    e.isLoading = a;
  },
};
const Ua = {
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
const Ha = {
  "set/popup"(e, a) {
    e.popupState = u(f({}, a), { $display: !0, $timestamp: Date.now() });
  },
  "clear/popup"(e) {
    e.popupState = { $display: !1, $timestamp: -1 };
  },
};
const Va = {
  "../store/app/actions.js": Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Da },
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
      { __proto__: null, default: Fa },
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
      { __proto__: null, default: Ua },
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
      { __proto__: null, default: Ha },
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
let Na = {};
const Ga = (e, a, s) => {
  const [t, ...i] = e;
  return i.length
    ? { [t]: { namespaced: !0, modules: Ga(i, a, s) } }
    : { [t]: { namespaced: !0, [a]: s } };
};
for (let No in Va) {
  const e = No.replace("../store/", "")
    .toLowerCase()
    .replace(".js", "")
    .split("/");
  Na = ne(Na, Ga(re(e), oe(e), Va[No].default));
}
var Xa = Na;
const Wa = {},
  Ra = function (e, a) {
    return a && 0 !== a.length
      ? Promise.all(
          a.map((e) => {
            if ((e = `./${e}`) in Wa) return;
            Wa[e] = !0;
            const a = e.endsWith(".css"),
              s = a ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${s}`)) return;
            const t = document.createElement("link");
            return (
              (t.rel = a ? "stylesheet" : "modulepreload"),
              a || ((t.as = "script"), (t.crossOrigin = "")),
              (t.href = e),
              document.head.appendChild(t),
              a
                ? new Promise((a, s) => {
                    t.addEventListener("load", a),
                      t.addEventListener("error", () =>
                        s(new Error(`Unable to preload CSS for ${e}`))
                      );
                  })
                : void 0
            );
          })
        ).then(() => e())
      : e();
  },
  Ya = { class: "footer" },
  Za = { class: "container" },
  Ka = { class: "row row-justify-center" },
  $a = h(
    "div",
    { class: "col col-lg-3 col-md-12" },
    [
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
    ],
    -1
  ),
  Ja = h(
    "div",
    { class: "col col-lg-3 col-md-12" },
    [
      h("div", { class: "footer_group" }, [
        h("h3", { class: "u-ts-6 u-text-secondary" }, "Navigation"),
        h("ul", { role: "list", class: "footer_list" }, [
          h("li", { class: "footer_list-item" }, [
            h("a", { href: "/", class: "footer_link w-inline-block" }, [
              h("div", { class: "u-ts-3" }, "Overview"),
            ]),
          ]),
          h("li", { class: "footer_list-item" }, [
            h("a", { href: "/cases", class: "footer_link w-inline-block" }, [
              h("div", { class: "u-ts-3" }, "Cases"),
            ]),
          ]),
          h("li", { class: "footer_list-item" }, [
            h("a", { href: "/about", class: "footer_link w-inline-block" }, [
              h("div", { class: "u-ts-3" }, "Services"),
            ]),
          ]),
          h("li", { class: "footer_list-item" }, [
            h(
              "a",
              { href: "/design-trial", class: "footer_link w-inline-block" },
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
    ],
    -1
  ),
  Qa = h("div", { class: "col col-md-hide" }, null, -1),
  es = { class: "col col-lg-4 col-md-12 col-md-first" },
  as = { href: "/", class: "footer-wordmark w-inline-block" },
  ss = { class: "wordmark w-embed" },
  ts = ["src"],
  is = h(
    "div",
    { class: "footer-copyright" },
    [
      h("div", { "data-copyright": "" }, [
        Z(" Copyright © "),
        h("span", { "data-dynamic": "year" }, "2024"),
      ]),
    ],
    -1
  );
var ls = je(
  {
    setup: (e) => (e, a) => (
      g(),
      b("footer", Ya, [
        h("div", Za, [
          h("div", Ka, [
            $a,
            Ja,
            Qa,
            h("div", es, [
              h("a", as, [
                h("div", ss, [
                  h("img", { src: _(ke)("logo.png"), alt: "" }, null, 8, ts),
                ]),
              ]),
            ]),
          ]),
          is,
        ]),
      ])
    ),
  },
  [
    [
      "__file",
      "/Users/lishengjie/Documents/GitHub/basis.work/src/widgets/layout/footer.vue",
    ],
  ]
);
const os = {
    components: { Footer: ls },
    setup() {
      const { t: e } = Fe();
      return (
        C(() => {
          de.init();
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
        { t: e }
      );
    },
  },
  rs = h(
    "header",
    { "data-mouse-class": "cc-icon", class: "header cc-large" },
    [
      h("div", { class: "nav_mode w-embed" }),
      h(
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
          h("img", {
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
          h(
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
                    "https://app.vidzflow.com/v/pp8Z52ZnCB?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&piv=true&bc=%234E5FFD&controls=false",
                  title: "Services 1",
                  loading: "lazy",
                }),
                h("div", { class: "iframe-video_blocker" }),
              ]),
            ]
          ),
        ]
      ),
      h("div", { class: "header-content_wrapper" }, [
        h("div", { class: "container" }, [
          h("div", { class: "row" }, [
            h(
              "div",
              {
                "data-animation-trigger": "transition",
                "data-animation-element": "group",
                class: "col col-lg-6 col-md-12",
              },
              [
                h("div", { class: "header-content_main" }, [
                  h(
                    "div",
                    {
                      class: "text-wrap-balance",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      h(
                        "h1",
                        {
                          "data-animation-element": "title",
                          class: "h4",
                          style: {},
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
                                " gets "
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
                                " you "
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
                                " closer "
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
                                " to "
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
                                " your "
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
                                " long-term "
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
                                " vision, "
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
                                " first "
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
                                " by "
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
                                " meeting "
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
                                " your "
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
                                " short-term "
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
                                " goals. "
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  h("div", { class: "header-content_cta" }, [
                    h("div", { class: "header-content_icon w-embed" }, [
                      h(
                        "svg",
                        {
                          width: "100%",
                          style: {},
                          viewBox: "0 0 20 20",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          h("path", {
                            d:
                              "M10.4384 2.2207C10.6795 2.2207 10.875 2.40725 10.875 2.63737V16.1124L14.7524 12.404C14.8344 12.3252 14.946 12.2808 15.0624 12.2808C15.1788 12.2808 15.2904 12.3252 15.3724 12.404L15.9837 12.9957C16.0664 13.0739 16.1128 13.1804 16.1128 13.2915C16.1128 13.4026 16.0664 13.5091 15.9837 13.5874L10.6305 18.704C10.5078 18.8213 10.3413 18.8872 10.1677 18.8874H9.83581C9.66254 18.8854 9.49674 18.8198 9.37298 18.704L4.01978 13.5874C3.93712 13.5091 3.89062 13.4026 3.89062 13.2915C3.89062 13.1804 3.93712 13.0739 4.01978 12.9957L4.63981 12.404C4.72029 12.3256 4.83046 12.2815 4.94546 12.2815C5.06046 12.2815 5.17062 12.3256 5.2511 12.404L9.12846 16.1124V2.63737C9.12846 2.40725 9.32395 2.2207 9.5651 2.2207H10.4384Z",
                            fill: "black",
                          }),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
      h("div", { "data-transition": "in", class: "header-trigger" }),
    ],
    -1
  ),
  ns = h("div", { class: "spacing" }, null, -1),
  ds = h(
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
                  [h("h2", { class: "u-ts-4" }, "Work with Basis")]
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
            { id: "w-node-e8a07e93-34f6-be32-54f2-b34bf2439e43-af55239f" },
            [
              h(
                "div",
                {
                  class: "case-details is-about",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  h("div", { class: "u-ts-4" }, [
                    h("div", { class: "u-overflow-hidden" }, [
                      h(
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
                          h(
                            "h2",
                            { class: "u-ts-4 u-text-mid" },
                            "Project inquiries"
                          ),
                        ]
                      ),
                    ]),
                    h(
                      "a",
                      {
                        href: "mailto:hello@basis.work",
                        class: "case-detail_item cc-1",
                      },
                      "hello@basis.work"
                    ),
                  ]),
                  h("div", { class: "u-ts-4" }, [
                    h("div", { class: "u-overflow-hidden" }, [
                      h(
                        "div",
                        {
                          class: "case-detail_title cc-2",
                          style: {
                            transform:
                              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                            "transform-style": "preserve-3d",
                          },
                        },
                        [
                          h(
                            "h2",
                            { class: "u-ts-4 u-text-mid" },
                            "Join the team"
                          ),
                        ]
                      ),
                    ]),
                    h(
                      "a",
                      {
                        href: "mailto:jobs@basis.work",
                        class: "case-detail_item cc-2",
                      },
                      "jobs@basis.work"
                    ),
                  ]),
                ]
              ),
            ]
          ),
          h(
            "div",
            {
              id: "w-node-_2eada710-eca2-ae0e-be9f-54fbff32a11c-af55239f",
              class: "content",
            },
            [
              h(
                "div",
                {
                  "data-animation-element": "paragraphs",
                  class: "content-p cc-1",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  h(
                    "p",
                    { class: "u-ts-1 u-mb-0" },
                    " Startups and enterprises hire us when they can’t afford to fail. As the technology of our world gets increasingly more complex, your brand and product are being asked to adapt to more situations, more platforms, more devices, and a more global audience than ever. That’s why you need the expertise of a studio that builds true systems: From the first touch of brand awareness to the product needs of your most engaged user, Basis sees it all as part of one holistic experience. "
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
                      transform: "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    h(
                      "a",
                      {
                        class: "btn w-inline-block",
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                      },
                      [
                        h("div", { class: "btn-text-wrap" }, [
                          h("div", { class: "btn-text" }, "Start a project"),
                          h(
                            "div",
                            { class: "btn-text cc-bottom" },
                            "Start a project"
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
                      transform: "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    h(
                      "a",
                      {
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
        h("div", { class: "sticky-pair cc-far" }, [
          h("div", { class: "w-layout-grid pair-grid" }, [
            h("div", { class: "div-block" }, [
              h(
                "div",
                {
                  class: "card-wrapper cc-small",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  h("div", { class: "card-animation cc-40" }, [
                    h(
                      "div",
                      {
                        "data-mouse-class": "cc-none",
                        class: "card",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                          opacity: "1",
                        },
                      },
                      [
                        h("div", { class: "card-image_wrapper" }, [
                          h("img", {
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
                ]
              ),
            ]),
            h(
              "div",
              {
                class: "card-wrapper cc-large",
                "data-aos": "fade-up",
                "data-aos-duration": "700",
              },
              [
                h("div", { class: "card-animation cc-40" }, [
                  h(
                    "div",
                    { "data-mouse-class": "cc-none", class: "card cc-large" },
                    [
                      h("div", { class: "card-image_wrapper" }, [
                        h("img", {
                          loading: "lazy",
                          sizes: "100vw",
                          srcset:
                            "\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02-p-500.jpg   500w,\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02-p-800.jpg   800w,\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02-p-1080.jpg 1080w,\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02-p-1600.jpg 1600w,\n                      https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02.webp       1818w\n                    ",
                          alt: "",
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af55235a_meet-bases-02.webp",
                          class: "card-image",
                        }),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
            h("div", { class: "content" }, [
              h(
                "div",
                {
                  "data-animation-element": "paragraphs",
                  class: "content-p cc-1",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  h(
                    "p",
                    { class: "u-ts-1" },
                    " Whether it’s shaping a new venture 0 → 1, evolving an existing company 1 → N, or taking an industry leader from N → XYZ, Basis has a formula that delivers results in record time. Our team is respected for crafting world-class experiences through our signature Product and Brand Trials, led by Michal Škvarenina, the design director behind digital experiences for Google, Airbnb, Red Bull, Mastercard, PC Financial, and more. "
                  ),
                ]
              ),
              h(
                "div",
                {
                  "data-animation-element": "paragraphs",
                  class: "content-p cc-2",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  h(
                    "p",
                    { class: "u-ts-1" },
                    " When you want to build enduring digital products for an increasingly-digital future, first establish your Basis. "
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
                      transform: "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    h(
                      "a",
                      {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        class: "btn w-inline-block",
                      },
                      [
                        h("div", { class: "btn-text-wrap" }, [
                          h("div", { class: "btn-text" }, "Start a project"),
                          h(
                            "div",
                            { class: "btn-text cc-bottom" },
                            "Start a project"
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
                      transform: "translate3d(0rem, 0px, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    h(
                      "a",
                      {
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
            ]),
          ]),
        ]),
      ]),
      h("div", { class: "u-mt-8-75", "data-v-57509004": "" }, [
        h("div", { class: "marquee", "data-v-57509004": "" }, [
          h("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            h(
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h(
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
                        h("img", {
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h(
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
                        h("img", {
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h(
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
                        h("img", {
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h(
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
                        h("img", {
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h(
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
                        h("img", {
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h(
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
                        h("img", {
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h(
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
                        h("img", {
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h(
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
                        h("img", {
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h(
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
                        h("img", {
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
          h("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            h(
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
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
          h("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            h(
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
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                h(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    h("img", {
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
  cs = h(
    "div",
    { class: "container" },
    [h("div", { class: "target_line" })],
    -1
  ),
  ps = h(
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
              h("div", { class: "section-title_dot", style: { opacity: "1" } }),
              h("div", { class: "u-overflow-hidden" }, [
                h("div", { class: "section-title_title" }, [
                  h("h2", { class: "u-ts-4" }, "What we do"),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
      h("div", { class: "container" }, [
        h("div", { "data-animation-element": "group", class: "row" }, [
          h("div", { class: "col col-lg-4 col-md-hide" }),
          h("div", { class: "col" }, [
            h("div", { class: "service-list" }, [
              h(
                "div",
                {
                  class: "logomark_component",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  h(
                    "div",
                    {
                      class: "logomark w-embed",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
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
                ]
              ),
              h("ul", { role: "list", class: "u-mt-3-5" }, [
                h(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
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
                      [h("h3", { class: "u-tc-caps" }, "Creative Direction")]
                    ),
                  ]
                ),
                h(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
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
                      [h("h3", { class: "u-tc-caps" }, "Interaction Design")]
                    ),
                  ]
                ),
                h(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
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
                      [h("h3", { class: "u-tc-caps" }, "Webflow Development")]
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
    -1
  ),
  vs = ce(
    '<div class="container"><div class="target_line"></div></div><section class="section"><div class="section-title_component"><div class="container"><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700"><div class="section-title_dot" style="opacity:1;"></div><div class="u-overflow-hidden"><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><h2 class="u-ts-4">Contact Us</h2></div></div></div></div></div><div class="container"><div class="w-layout-grid pair-grid"><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext"><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"><div style="position:relative;display:inline-block;"> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  );
var ms = je(os, [
    [
      "render",
      function (e, a, s, t, i, l) {
        const o = S("Footer");
        return (
          g(),
          b(
            x,
            null,
            [
              rs,
              w(" ------- "),
              ns,
              w(" ==== "),
              ds,
              w(" ==== "),
              cs,
              ps,
              w(" ==== "),
              vs,
              E(o),
            ],
            64
          )
        );
      },
    ],
    [
      "__file",
      "/Users/lishengjie/Documents/GitHub/basis.work/src/pages/about.vue",
    ],
  ]),
  fs = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ms },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const us = {
    title: "pages.home.nav.about",
    components: { Footer: ls },
    setup() {
      const { t: e } = Fe();
      return (
        C(() => {
          de.init(),
            (() => {
              let e = document.querySelector("#cases");
              e.addEventListener("wheel", (a) => {
                window.innerWidth > 991 &&
                  (a.preventDefault(), (e.scrollLeft += a.deltaY));
              });
            })();
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
        { t: e }
      );
    },
  },
  gs = ((e) => (pe("data-v-74f67db4"), (e = e()), ve(), e))(() =>
    h(
      "div",
      { id: "cases", class: "wrap" },
      [
        w(" pc "),
        h("div", { class: "cases-slider" }, [
          h("h1", { id: "case-title" }, "Cases"),
          h(
            "div",
            { role: "list", class: "cases-list w-dyn-items container" },
            [
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h("a", { class: "cases-card cc-immediate w-inline-block" }, [
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
                ]),
                h("link", { rel: "prerender" }),
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
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
                          Z(" Contact us"),
                          h("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      h("div", { class: "u-ts-2" }, "Sable Brand"),
                    ]),
                  ]
                ),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  h("div", { class: "cases-assets" }, [
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
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
                        loading: "lazy",
                      }),
                      h("div", { class: "iframe-video_blocker" }),
                    ]),
                  ]),
                  h("div", { class: "cases-text" }, [
                    h("div", { class: "u-ts-2" }, "Sable Website"),
                  ]),
                ]),
                h("link", { rel: "prerender" }),
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      h("div", { class: "w-condition-invisible" }, [
                        h("div", { class: "iframe-video_wrapper" }, [
                          h("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          h("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "cases-more" }, [
                        h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          Z(" Contact us"),
                          h("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      h("div", { class: "u-ts-2" }, "Sable Website"),
                    ]),
                  ]
                ),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  h("div", { class: "cases-assets" }, [
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
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
                          "https://app.vidzflow.com/v/XBaN1uMmvl?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                        title: "Seen 1",
                        loading: "lazy",
                      }),
                      h("div", { class: "iframe-video_blocker" }),
                    ]),
                  ]),
                  h("div", { class: "cases-text" }, [
                    h("div", { class: "u-ts-2" }, "Seen Brand"),
                  ]),
                ]),
                h("link", { rel: "prerender" }),
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait w-condition-invisible",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
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
                              "https://app.vidzflow.com/v/XBaN1uMmvl?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                            title: "Seen 1",
                            loading: "lazy",
                          }),
                          h("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "cases-more" }, [
                        h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          Z(" Contact us"),
                          h("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      h("div", { class: "u-ts-2" }, "Seen Brand"),
                    ]),
                  ]
                ),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c059ddfa369d3d815259b_google-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c059ddfa369d3d815258d_google-website-card-image-mobile.jpeg",
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
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "u-ts-2" }, "Google Website"),
                    ]),
                  ]
                ),
                h("link", { rel: "prerender" }),
                h("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  h("div", { class: "cases-assets" }, [
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c059ddfa369d3d815259b_google-website-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c059ddfa369d3d815258d_google-website-card-image-mobile.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    h("div", { class: "w-condition-invisible" }, [
                      h("div", { class: "iframe-video_wrapper" }, [
                        h("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                  ]),
                  h("div", { class: "cases-text" }, [
                    h("div", { class: "cases-more" }, [
                      h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                        Z(" Contact us"),
                        h("span", { class: "hide-tablet" }, " for more"),
                      ]),
                    ]),
                    h("div", { class: "u-ts-2" }, "Google Website"),
                  ]),
                ]),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  h("div", { class: "cases-assets" }, [
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop.jpg",
                      loading: "lazy",
                      alt: "",
                      sizes: "(max-width: 991px) 100vw, 23vw",
                      srcset:
                        "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop.jpg       652w\n                ",
                      class: "cases-portrait",
                    }),
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/65b7833c017d36c1b76d13d8_yoginess-website-card-image-mobile.jpg",
                      loading: "eager",
                      alt: "",
                      sizes:
                        "(max-width: 479px) 97vw, (max-width: 991px) 98vw, 100vw",
                      srcset:
                        "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7833c017d36c1b76d13d8_yoginess-website-card-image-mobile-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7833c017d36c1b76d13d8_yoginess-website-card-image-mobile.jpg       718w\n                ",
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
                        loading: "lazy",
                      }),
                      h("div", { class: "iframe-video_blocker" }),
                    ]),
                  ]),
                  h("div", { class: "cases-text" }, [
                    h("div", { class: "u-ts-2" }, "Yoginess Website"),
                  ]),
                ]),
                h("link", { rel: "prerender" }),
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "100vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop.jpg       652w\n                ",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b7833c017d36c1b76d13d8_yoginess-website-card-image-mobile.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "100vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7833c017d36c1b76d13d8_yoginess-website-card-image-mobile-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7833c017d36c1b76d13d8_yoginess-website-card-image-mobile.jpg       718w\n                ",
                        class: "cases-landscape",
                      }),
                      h("div", { class: "w-condition-invisible" }, [
                        h("div", { class: "iframe-video_wrapper" }, [
                          h("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          h("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "cases-more" }, [
                        h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          Z(" Contact us"),
                          h("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      h("div", { class: "u-ts-2" }, "Yoginess Website"),
                    ]),
                  ]
                ),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  h("div", { class: "cases-assets" }, [
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c060f54192514006e8a96_yoginess-brand-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c060f54192514006e8ac2_yoginess-brand-card-image-mobile.jpeg",
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
                          "https://app.vidzflow.com/v/XqnSO3RNUV?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                        title: "Yoginess 1",
                        loading: "lazy",
                      }),
                      h("div", { class: "iframe-video_blocker" }),
                    ]),
                  ]),
                  h("div", { class: "cases-text" }, [
                    h("div", { class: "u-ts-2" }, "Yoginess Brand"),
                  ]),
                ]),
                h("link", { rel: "prerender" }),
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060f54192514006e8a96_yoginess-brand-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait w-condition-invisible",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060f54192514006e8ac2_yoginess-brand-card-image-mobile.jpeg",
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
                              "https://app.vidzflow.com/v/XqnSO3RNUV?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                            title: "Yoginess 1",
                            loading: "lazy",
                          }),
                          h("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "cases-more" }, [
                        h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          Z(" Contact us"),
                          h("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      h("div", { class: "u-ts-2" }, "Yoginess Brand"),
                    ]),
                  ]
                ),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c059b2c206b9665872077_airbnb-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c059b2c206b966587207a_airbnb-website-card-image-mobile.jpeg",
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
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "u-ts-2" }, "Airbnb Website"),
                    ]),
                  ]
                ),
                h("link", { rel: "prerender" }),
                h("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  h("div", { class: "cases-assets" }, [
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c059b2c206b9665872077_airbnb-website-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c059b2c206b966587207a_airbnb-website-card-image-mobile.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    h("div", { class: "w-condition-invisible" }, [
                      h("div", { class: "iframe-video_wrapper" }, [
                        h("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                  ]),
                  h("div", { class: "cases-text" }, [
                    h("div", { class: "cases-more" }, [
                      h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                        Z(" Contact us"),
                        h("span", { class: "hide-tablet" }, " for more"),
                      ]),
                    ]),
                    h("div", { class: "u-ts-2" }, "Airbnb Website"),
                  ]),
                ]),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h(
                  "a",
                  {
                    href: "/cases/sable-app",
                    class: "cases-card cc-immediate w-inline-block",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
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
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "u-ts-2" }, "Sable App"),
                    ]),
                  ]
                ),
                h("link", { rel: "prerender", href: "/cases/sable-app" }),
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      h("div", { class: "w-condition-invisible" }, [
                        h("div", { class: "iframe-video_wrapper" }, [
                          h("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          h("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "cases-more" }, [
                        h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          Z(" Contact us"),
                          h("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      h("div", { class: "u-ts-2" }, "Sable App"),
                    ]),
                  ]
                ),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h(
                  "a",
                  {
                    href: "/cases/seen-website",
                    class: "cases-card cc-immediate w-inline-block",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06136822989dcad4c306_seen-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06126822989dcad4c2b7_seen-website-card-image-mobile.jpeg",
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
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "u-ts-2" }, "Seen Website"),
                    ]),
                  ]
                ),
                h("link", { rel: "prerender", href: "/cases/seen-website" }),
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06136822989dcad4c306_seen-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06126822989dcad4c2b7_seen-website-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      h("div", { class: "w-condition-invisible" }, [
                        h("div", { class: "iframe-video_wrapper" }, [
                          h("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          h("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "cases-more" }, [
                        h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          Z(" Contact us"),
                          h("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      h("div", { class: "u-ts-2" }, "Seen Website"),
                    ]),
                  ]
                ),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h(
                  "a",
                  {
                    href: "/cases/gaffa-brand-and-website",
                    class: "cases-card cc-immediate w-inline-block",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060c799046de5a4758ca_gaffa-brand-and-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060c799046de5a4758d0_gaffa-brand-and-website-card-image-mobile.jpeg",
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
                            "https://app.vidzflow.com/v/kSzWdGIKBr?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                          title: "Gaffa 2",
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "u-ts-2" }, "Gaffa Brand & Website"),
                    ]),
                  ]
                ),
                h("link", {
                  rel: "prerender",
                  href: "/cases/gaffa-brand-and-website",
                }),
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060c799046de5a4758ca_gaffa-brand-and-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait w-condition-invisible",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060c799046de5a4758d0_gaffa-brand-and-website-card-image-mobile.jpeg",
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
                              "https://app.vidzflow.com/v/kSzWdGIKBr?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                            title: "Gaffa 2",
                            loading: "lazy",
                          }),
                          h("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "cases-more" }, [
                        h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          Z(" Contact us"),
                          h("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      h("div", { class: "u-ts-2" }, "Gaffa Brand & Website"),
                    ]),
                  ]
                ),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h(
                  "a",
                  {
                    href: "/cases/seen-app",
                    class: "cases-card cc-immediate w-inline-block",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "(max-width: 991px) 100vw, 23vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop.jpg       652w\n                ",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b7832af68a6b0d31f2caec_seen-app-card-image-mobile.jpg",
                        loading: "eager",
                        alt: "",
                        sizes:
                          "(max-width: 479px) 97vw, (max-width: 991px) 98vw, 100vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7832af68a6b0d31f2caec_seen-app-card-image-mobile-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7832af68a6b0d31f2caec_seen-app-card-image-mobile.jpg       718w\n                ",
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
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "u-ts-2" }, "Seen App"),
                    ]),
                  ]
                ),
                h("link", { rel: "prerender", href: "/cases/seen-app" }),
                h(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "100vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop.jpg       652w\n                ",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b7832af68a6b0d31f2caec_seen-app-card-image-mobile.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "100vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7832af68a6b0d31f2caec_seen-app-card-image-mobile-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7832af68a6b0d31f2caec_seen-app-card-image-mobile.jpg       718w\n                ",
                        class: "cases-landscape",
                      }),
                      h("div", { class: "w-condition-invisible" }, [
                        h("div", { class: "iframe-video_wrapper" }, [
                          h("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          h("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "cases-more" }, [
                        h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          Z(" Contact us"),
                          h("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      h("div", { class: "u-ts-2" }, "Seen App"),
                    ]),
                  ]
                ),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h(
                  "a",
                  {
                    href: "/cases/pc-financial-app",
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05a12be233804d8b2f89_pc-financial-app-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05a12be233804d8b2f85_pc-financial-app-card-image-mobile.jpeg",
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
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "u-ts-2" }, "PC Financial App"),
                    ]),
                  ]
                ),
                h("link", {
                  rel: "prerender",
                  href: "/cases/pc-financial-app",
                }),
                h("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  h("div", { class: "cases-assets" }, [
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05a12be233804d8b2f89_pc-financial-app-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05a12be233804d8b2f85_pc-financial-app-card-image-mobile.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    h("div", { class: "w-condition-invisible" }, [
                      h("div", { class: "iframe-video_wrapper" }, [
                        h("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                  ]),
                  h("div", { class: "cases-text" }, [
                    h("div", { class: "cases-more" }, [
                      h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                        Z(" Contact us"),
                        h("span", { class: "hide-tablet" }, " for more"),
                      ]),
                    ]),
                    h("div", { class: "u-ts-2" }, "PC Financial App"),
                  ]),
                ]),
              ]),
              h("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                h(
                  "a",
                  {
                    href: "/cases/red-bull-app",
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    h("div", { class: "cases-assets" }, [
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05a4e59bf0c2c753f098_red-bull-app-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      h("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05a4e59bf0c2c753f09c_red-bull-app-card-image-mobile.jpeg",
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
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    h("div", { class: "cases-text" }, [
                      h("div", { class: "u-ts-2" }, "Red Bull App"),
                    ]),
                  ]
                ),
                h("link", { rel: "prerender", href: "/cases/red-bull-app" }),
                h("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  h("div", { class: "cases-assets" }, [
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05a4e59bf0c2c753f098_red-bull-app-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    h("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05a4e59bf0c2c753f09c_red-bull-app-card-image-mobile.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    h("div", { class: "w-condition-invisible" }, [
                      h("div", { class: "iframe-video_wrapper" }, [
                        h("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        h("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                  ]),
                  h("div", { class: "cases-text" }, [
                    h("div", { class: "cases-more" }, [
                      h("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                        Z(" Contact us"),
                        h("span", { class: "hide-tablet" }, " for more"),
                      ]),
                    ]),
                    h("div", { class: "u-ts-2" }, "Red Bull App"),
                  ]),
                ]),
              ]),
            ]
          ),
        ]),
        w(" card mobile"),
        w(
          ' <div role="listitem" class="cases-item w-dyn-item">\n      \n        href="/cases/sable-brand"\n        class="cases-card cc-immediate w-inline-block"\n        style="\n          transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)\n            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n          transform-style: preserve-3d;\n          opacity: 1;\n        "\n        ><div class="cases-assets">\n          <img\n            src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"\n            loading="lazy"\n            alt=""\n            class="cases-portrait"\n          /><img\n            src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"\n            loading="eager"\n            alt=""\n            class="cases-landscape"\n          />\n          <div class="iframe-video_wrapper">\n            <iframe\n              class="iframe-video_iframe"\n              width="100%"\n              height="100%"\n              style="overflow: hidden"\n              frameborder="0"\n              scrolling="no"\n              allow="fullscreen"\n              src="https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"\n              title="Sable 12"\n              loading="lazy"\n            ></iframe>\n            <div class="iframe-video_blocker"></div>\n          </div>\n        </div>\n        <div class="cases-text"><div class="u-ts-2">Sable Brand</div></div></a\n      ><link rel="prerender" href="/cases/sable-brand" /><a\n        data-mouse-text="Contact\n        class="cases-card cc-immediate w-inline-block w-condition-invisible"\n        style="\n          transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)\n            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n          transform-style: preserve-3d;\n          opacity: 1;\n        "\n        ><div class="cases-assets">\n          <img\n            src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"\n            loading="lazy"\n            alt=""\n            class="cases-portrait w-condition-invisible"\n          /><img\n            src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"\n            loading="lazy"\n            alt=""\n            class="cases-landscape w-condition-invisible"\n          />\n          <div>\n            <div class="iframe-video_wrapper">\n              <iframe\n                class="iframe-video_iframe"\n                width="100%"\n                height="100%"\n                style="overflow: hidden"\n                frameborder="0"\n                scrolling="no"\n                allow="fullscreen"\n                src="https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"\n                title="Sable 12"\n                loading="lazy"\n              ></iframe>\n              <div class="iframe-video_blocker"></div>\n            </div>\n          </div>\n        </div>\n        <div class="cases-text">\n          <div class="cases-more">\n            <div class="u-ts-6 u-tc-caps u-text-accent1">\n              Contact us<span class="hide-tablet"> for more</span>\n            </div>\n          </div>\n          <div class="u-ts-2">Sable Brand</div>\n        </div></a\n      >\n    </div> '
        ),
        w(" === "),
      ],
      -1
    )
  ),
  bs = ce(
    '<div class="container mobile-show" data-v-74f67db4><div class="target_line" data-v-74f67db4></div></div><section class="section mobile-show" data-v-74f67db4><div class="section-title_component" data-v-74f67db4><div class="container" data-v-74f67db4><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-74f67db4><div class="section-title_dot" style="opacity:1;" data-v-74f67db4></div><div class="u-overflow-hidden" data-v-74f67db4><div class="section-title_title" data-v-74f67db4><h2 class="u-ts-4" data-v-74f67db4>Contact Us</h2></div></div></div></div></div><div class="container" data-v-74f67db4><div class="w-layout-grid pair-grid" data-v-74f67db4><div data-v-74f67db4><div class="contact-cta w-richtext" data-v-74f67db4><h3 data-aos="fade-up" data-aos-duration="700" data-v-74f67db4><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-74f67db4><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-74f67db4> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-74f67db4> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-74f67db4> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-74f67db4> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-74f67db4> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-74f67db4><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-74f67db4><div style="position:relative;display:inline-block;" data-v-74f67db4> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  );
var ws = je(us, [
    [
      "render",
      function (e, a, s, t, i, l) {
        const o = S("Footer");
        return g(), b(x, null, [gs, bs, E(o, { class: "mobile-show" })], 64);
      },
    ],
    ["__scopeId", "data-v-74f67db4"],
    [
      "__file",
      "/Users/lishengjie/Documents/GitHub/basis.work/src/pages/case.vue",
    ],
  ]),
  hs = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ws },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ys = {
    layout: "layout-demo",
    setup() {
      const e = ua(),
        { t: a, locale: s, setPrefix: t, change: i } = Fe();
      t({ $current: "pages.demo" });
      const l = G(),
        o = K("alert-service"),
        r = me({ current: s.value || "zh-tw" });
      return (
        C(() => {}),
        {
          t: a,
          lang: r,
          toHome: () => {
            l.push("/home");
          },
          swalModal: () => {
            o.alert({
              title: a("$current.modal.swal.title"),
              text: a("$current.modal.swal"),
            });
          },
          changeLang: () => {
            const e = "zh-tw" === r.current ? "en" : "zh-tw";
            (r.current = e), i(e);
          },
          popupModal: async () => {
            await e.modal({ title: "popup", text: "this a popup" });
          },
        }
      );
    },
  },
  _s = { class: "demo" },
  xs = { class: "demo-head" },
  ks = { class: "switch" },
  js = h("input", { type: "checkbox", class: "cb" }, null, -1),
  zs = [
    h("span", { class: "left" }, "CN", -1),
    h("span", { class: "right" }, "En", -1),
  ],
  qs = { class: "demo-head-content" },
  Cs = { class: "demo-actions" },
  Ss = { class: "radio-inputs" },
  Os = h("input", { type: "radio", name: "radio", checked: "" }, null, -1),
  As = { class: "name" },
  Bs = h("input", { type: "radio", name: "radio" }, null, -1),
  Es = { class: "name" },
  Ts = h("input", { type: "radio", name: "radio" }, null, -1),
  Ls = { class: "name" };
var Is = je(ys, [
    [
      "render",
      function (e, a, s, t, i, l) {
        return (
          g(),
          b("div", _s, [
            h("div", xs, [
              h("div", null, [
                h("label", ks, [
                  js,
                  h(
                    "span",
                    {
                      class: "toggle",
                      onClick:
                        a[0] ||
                        (a[0] = (...e) => t.changeLang && t.changeLang(...e)),
                    },
                    zs
                  ),
                ]),
              ]),
              h("div", qs, "lang:" + R(t.lang.current), 1),
            ]),
            h("div", Cs, [
              h("div", Ss, [
                h(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[1] || (a[1] = (...e) => t.toHome && t.toHome(...e)),
                  },
                  [Os, h("span", As, R(t.t("$current.router.link")), 1)]
                ),
                h(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[2] ||
                      (a[2] = (...e) => t.swalModal && t.swalModal(...e)),
                  },
                  [Bs, h("span", Es, R(t.t("$current.modal.swal")), 1)]
                ),
                h(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[3] ||
                      (a[3] = (...e) => t.popupModal && t.popupModal(...e)),
                  },
                  [Ts, h("span", Ls, R(t.t("$current.popup.use")), 1)]
                ),
              ]),
            ]),
          ])
        );
      },
    ],
    [
      "__file",
      "/Users/lishengjie/Documents/GitHub/basis.work/src/pages/demo.vue",
    ],
  ]),
  Ps = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Is },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Ms = (e) =>
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
  Ds = {
    components: { Footer: ls },
    setup() {
      const { t: e } = Fe();
      return (
        C(() => {
          de.init();
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
        { t: e, getVideoUrl: Ms }
      );
    },
  },
  Fs = { "data-mouse-class": "cc-icon", class: "header cc-large" },
  Us = { class: "header-image_wrap" },
  Hs = { class: "header-image" },
  Vs = { class: "iframe-video_wrapper" },
  Ns = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Gs = ["src"],
  Xs = Z(" Your browser does not support the video tag. "),
  Ws = h("div", { class: "iframe-video_blocker" }, null, -1),
  Rs = ce(
    '<div class="header-content_wrapper"><div class="container"><div class="row"><div data-animation-trigger="transition" data-animation-element="group" class="col col-lg-6 col-md-12"><div class="header-content_main"><div class="text-wrap-balance" data-aos="fade-up" data-aos-duration="700"><h1 data-animation-element="title" class="h4"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> The </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> agency </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> for </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> the </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> next </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> generation </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> of </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> fintech. </div></div></h1></div><div class="header-content_cta" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;"><div class="header-content_icon w-embed"><svg width="100%" style="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4384 2.2207C10.6795 2.2207 10.875 2.40725 10.875 2.63737V16.1124L14.7524 12.404C14.8344 12.3252 14.946 12.2808 15.0624 12.2808C15.1788 12.2808 15.2904 12.3252 15.3724 12.404L15.9837 12.9957C16.0664 13.0739 16.1128 13.1804 16.1128 13.2915C16.1128 13.4026 16.0664 13.5091 15.9837 13.5874L10.6305 18.704C10.5078 18.8213 10.3413 18.8872 10.1677 18.8874H9.83581C9.66254 18.8854 9.49674 18.8198 9.37298 18.704L4.01978 13.5874C3.93712 13.5091 3.89062 13.4026 3.89062 13.2915C3.89062 13.1804 3.93712 13.0739 4.01978 12.9957L4.63981 12.404C4.72029 12.3256 4.83046 12.2815 4.94546 12.2815C5.06046 12.2815 5.17062 12.3256 5.2511 12.404L9.12846 16.1124V2.63737C9.12846 2.40725 9.32395 2.2207 9.5651 2.2207H10.4384Z" fill="black"></path></svg></div></div></div></div></div></div></div><div data-transition="in" class="header-trigger"></div>',
    2
  ),
  Ys = h("div", { class: "spacing" }, null, -1),
  Zs = h(
    "div",
    { class: "container" },
    [h("div", { class: "target_line" })],
    -1
  ),
  Ks = h(
    "section",
    { class: "section over-h" },
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
                  [h("h2", { class: "u-ts-4" }, "Fintech Design Specialists")]
                ),
              ]),
            ]
          ),
        ]),
      ]),
      h("div", { class: "container" }, [
        h(
          "div",
          {
            class: "w-layout-grid pair-grid",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
          },
          [
            h(
              "div",
              {
                id: "w-node-_88e3e548-f2e0-1176-a852-0e15f232b846-af55239c",
                class: "content",
              },
              [
                h(
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
                    h(
                      "p",
                      { class: "u-ts-1 u-mb-0" },
                      " It’s an industry unlike any other. From credit cards to neobanks and personal finance apps, the whole array of fintech is a crowded, highly-regulated landscape that demands the attention of specialists. The world is going through a digital finance revolution—find your product's place in it with Basis. "
                    ),
                  ]
                ),
              ]
            ),
          ]
        ),
        h("div", { class: "sticky-pair cc-far" }, [
          h("div", { class: "w-layout-grid pair-grid" }, [
            h("div", { class: "div-block" }, [
              h("div", { class: "card-wrapper cc-small" }, [
                h("div", { class: "card-animation cc-40" }, [
                  h(
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
                      h(
                        "div",
                        {
                          class: "card-image_wrapper",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
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
                                "https://app.vidzflow.com/v/h69w08i83W?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                              title: "Sable 1",
                              loading: "lazy",
                            }),
                            h("div", { class: "iframe-video_blocker" }),
                          ]),
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
                          h("div", { class: "u-overflow-hidden" }, [
                            h(
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
                                h(
                                  "h4",
                                  { class: "u-ts-4" },
                                  "In-app credit score"
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
            h("div", { class: "card-wrapper cc-large" }, [
              h("div", { class: "card-animation cc-40" }, [
                h(
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
                    h(
                      "div",
                      {
                        class: "card-image_wrapper",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
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
                              "https://app.vidzflow.com/v/NHDnlIjW0Q?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                            title: "Sable 4",
                            loading: "lazy",
                          }),
                          h("div", { class: "iframe-video_blocker" }),
                        ]),
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
                        h("div", { class: "u-overflow-hidden" }, [
                          h(
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
                              h("div", { class: "card-large_text" }, [
                                h(
                                  "h4",
                                  { class: "u-ts-4" },
                                  "Glow-in-the-dark credit card"
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
            h(
              "div",
              {
                id: "w-node-_197491fd-e75f-5caa-bd6c-f56fc5e78edc-af55239c",
                class: "content",
              },
              [
                h(
                  "div",
                  {
                    class: "content-p cc-1",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    h(
                      "p",
                      { class: "u-ts-1" },
                      " After rebranding banks, producing sleek new cards, and seamlessly integrating those elements into cohesive, future-proof brands, Basis can deliver results in record time. Get started with our Fintech Trial and get design results for your most essential deliverables in three weeks. "
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
                          "data-aos": "fade-left",
                          "data-aos-duration": "1000",
                          class: "btn w-inline-block",
                        },
                        [
                          h("div", { class: "btn-text-wrap" }, [
                            h("div", { class: "btn-text" }, "Contact Us"),
                            h(
                              "div",
                              { class: "btn-text cc-bottom" },
                              "Contact Us"
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
                              " Design Trial "
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
  $s = h(
    "div",
    { class: "container" },
    [h("div", { class: "target_line" })],
    -1
  ),
  Js = h(
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
                  [h("h2", { class: "u-ts-4" }, "Fintech Capabilities")]
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
              id: "w-node-b0cbec4a-56c8-e8e7-790a-68e14ee2ef27-af55239c",
              class: "service-list",
            },
            [
              h("div", { class: "service-list" }, [
                h(
                  "div",
                  {
                    class: "logomark_component",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    h(
                      "div",
                      {
                        class: "logomark w-embed",
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
                  ]
                ),
                h("ul", { role: "list", class: "u-mt-3-5" }, [
                  h(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
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
                        [h("h3", { class: "u-tc-caps" }, "Digital Banking,")]
                      ),
                    ]
                  ),
                  h(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
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
                        [
                          h(
                            "h3",
                            { class: "u-tc-caps" },
                            "Credit Card Designs,"
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
                        [h("h3", { class: "u-tc-caps" }, "Digital Wallets,")]
                      ),
                    ]
                  ),
                  h(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
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
                        [h("h3", { class: "u-tc-caps" }, "Payment Services,")]
                      ),
                    ]
                  ),
                  h(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
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
                        [h("h3", { class: "u-tc-caps" }, "Card Packaging,")]
                      ),
                    ]
                  ),
                  h(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
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
                            "Information Architecture,"
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
                        [h("h3", { class: "u-tc-caps" }, "Mobile Apps,")]
                      ),
                    ]
                  ),
                  h(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
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
                        [h("h3", { class: "u-tc-caps" }, "Prototypes,")]
                      ),
                    ]
                  ),
                  h(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      h(
                        "div",
                        {
                          class: "list-content cc-9",
                          style: {
                            transform:
                              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                            "transform-style": "preserve-3d",
                          },
                        },
                        [h("h3", { class: "u-tc-caps" }, "Gamification.")]
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
  ),
  Qs = h(
    "div",
    { class: "container" },
    [h("div", { class: "target_line" })],
    -1
  ),
  et = h(
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
                  [h("h2", { class: "u-ts-4" }, "Fintech Work")]
                ),
              ]),
            ]
          ),
        ]),
      ]),
      h("div", { class: "container" }, [
        h("div", { class: "row" }, [h("div", { class: "col" })]),
        h("div", { class: "w-dyn-list" }, [
          h("div", { role: "list", class: "row w-dyn-items" }, [
            h("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              h(
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
                  h(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-brand",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      h(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
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
                        ]
                      ),
                      h(
                        "div",
                        {
                          class: "cases-text cc-auto",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [h("div", { class: "u-ts-2" }, "Sable Brand")]
                      ),
                    ]
                  ),
                  h("link", { rel: "prerender", href: "/cases/sable-brand" }),
                  h(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      h(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
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
                            loading: "lazy",
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
                        ]
                      ),
                      h("div", { class: "cases-text" }, [
                        h("div", { class: "cases-more" }, [
                          h(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              Z(" Contact us"),
                              h("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        h("div", { class: "u-ts-2" }, "Sable Brand"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            h("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              h(
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
                  h(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-website",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      h(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape",
                          }),
                          h("div", { class: "w-condition-invisible" }, [
                            h("div", { class: "iframe-video_wrapper" }, [
                              h("iframe", {
                                class: "iframe-video_iframe",
                                width: "100%",
                                height: "100%",
                                style: { overflow: "hidden" },
                                frameborder: "0",
                                scrolling: "no",
                                allow: "fullscreen",
                                loading: "lazy",
                              }),
                              h("div", { class: "iframe-video_blocker" }),
                            ]),
                          ]),
                        ]
                      ),
                      h(
                        "div",
                        {
                          class: "cases-text cc-auto",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [h("div", { class: "u-ts-2" }, "Sable Website")]
                      ),
                    ]
                  ),
                  h("link", { rel: "prerender", href: "/cases/sable-website" }),
                  h(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      h(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                            loading: "lazy",
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
                              loading: "lazy",
                            }),
                            h("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]
                      ),
                      h("div", { class: "cases-text" }, [
                        h("div", { class: "cases-more" }, [
                          h(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              Z(" Contact us"),
                              h("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        h("div", { class: "u-ts-2" }, "Sable Website"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            h("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              h(
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
                  h(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/seen-brand",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      h(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait w-condition-invisible",
                          }),
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
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
                                  "https://app.vidzflow.com/v/XBaN1uMmvl?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                                title: "Seen 1",
                                loading: "lazy",
                              }),
                              h("div", { class: "iframe-video_blocker" }),
                            ]),
                          ]),
                        ]
                      ),
                      h(
                        "div",
                        {
                          class: "cases-text cc-auto",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [h("div", { class: "u-ts-2" }, "Seen Brand")]
                      ),
                    ]
                  ),
                  h("link", { rel: "prerender", href: "/cases/seen-brand" }),
                  h(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      h(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
                            loading: "lazy",
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
                                "https://app.vidzflow.com/v/XBaN1uMmvl?dq=1080&ap=true&muted=true&loop=true&ctp=false&bv=true&bc=%234E5FFD&controls=false",
                              title: "Seen 1",
                              loading: "lazy",
                            }),
                            h("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]
                      ),
                      h("div", { class: "cases-text" }, [
                        h("div", { class: "cases-more" }, [
                          h(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              Z(" Contact us"),
                              h("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        h("div", { class: "u-ts-2" }, "Seen Brand"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            h("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              h(
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
                  h(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-app",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      h(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape",
                          }),
                          h("div", { class: "w-condition-invisible" }, [
                            h("div", { class: "iframe-video_wrapper" }, [
                              h("iframe", {
                                class: "iframe-video_iframe",
                                width: "100%",
                                height: "100%",
                                style: { overflow: "hidden" },
                                frameborder: "0",
                                scrolling: "no",
                                allow: "fullscreen",
                                loading: "lazy",
                              }),
                              h("div", { class: "iframe-video_blocker" }),
                            ]),
                          ]),
                        ]
                      ),
                      h(
                        "div",
                        {
                          class: "cases-text cc-auto",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [h("div", { class: "u-ts-2" }, "Sable App")]
                      ),
                    ]
                  ),
                  h("link", { rel: "prerender", href: "/cases/sable-app" }),
                  h(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      h(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          h("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                            loading: "lazy",
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
                              loading: "lazy",
                            }),
                            h("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]
                      ),
                      h("div", { class: "cases-text" }, [
                        h("div", { class: "cases-more" }, [
                          h(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              Z(" Contact us"),
                              h("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        h("div", { class: "u-ts-2" }, "Sable App"),
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
  at = ce(
    '<div class="container"><div class="target_line"></div></div><section class="section"><div class="section-title_component"><div class="container"><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700"><div class="section-title_dot" style="opacity:1;"></div><div class="u-overflow-hidden"><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><h2 class="u-ts-4">Contact Us</h2></div></div></div></div></div><div class="container"><div class="w-layout-grid pair-grid"><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext"><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"><div style="position:relative;display:inline-block;"> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  ),
  st = { class: "pre-footer" },
  tt = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  it = { class: "iframe-video_wrapper" },
  lt = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  ot = ["src"],
  rt = Z(" Your browser does not support the video tag. "),
  nt = h("div", { class: "iframe-video_blocker" }, null, -1),
  dt = ce(
    '<div class="pre-footer_gradient"></div><div class="marquee"><div class="marquee_content cc-text transparent" style="transform:translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;will-change:transform;"><div class="marquee_item cc-1 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-2 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-3 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div></div><div class="marquee_content cc-text transparent" style="transform:translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;will-change:transform;"><div class="marquee_item cc-1 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-2 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-3 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div></div></div><div class="pre-footer_button"><div class="btn cc-large-landscape"><div class="btn-text-wrap"><div class="btn-text cc-large-landscape">REad Next</div><div class="btn-text cc-bottom cc-large-landscape">Button</div></div></div></div>',
    3
  );
var ct = je(Ds, [
    [
      "render",
      function (e, a, s, t, i, l) {
        const o = S("Footer");
        return (
          g(),
          b(
            x,
            null,
            [
              h("header", Fs, [
                h("div", Us, [
                  h("div", Hs, [
                    h("div", Vs, [
                      h("video", Ns, [
                        h(
                          "source",
                          {
                            src: t.getVideoUrl("home/knife1-1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          Gs
                        ),
                        Xs,
                      ]),
                      Ws,
                    ]),
                  ]),
                ]),
                Rs,
              ]),
              Ys,
              Zs,
              Ks,
              $s,
              Js,
              Qs,
              et,
              at,
              h("div", null, [
                h("aside", st, [
                  h("a", tt, [
                    h("div", it, [
                      h("video", lt, [
                        h(
                          "source",
                          {
                            src: t.getVideoUrl("home/knife1-1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          ot
                        ),
                        rt,
                      ]),
                      nt,
                    ]),
                    dt,
                  ]),
                ]),
              ]),
              E(o),
            ],
            64
          )
        );
      },
    ],
    [
      "__file",
      "/Users/lishengjie/Documents/GitHub/basis.work/src/pages/fintech-design.vue",
    ],
  ]),
  pt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ct },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const vt = ["data-index"],
  mt = ["src"],
  ft = [
    ce(
      '<div class="btn-text-wrap"><div class="btn-text cc-scroll">請往下滑</div><div class="btn-text cc-bottom cc-scroll">請往下滑</div></div><div class="btn-icon cc-small w-embed"><svg width="100%" style="" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.30218 1.55469C7.47098 1.55469 7.60782 1.68527 7.60782 1.84635V11.2789L10.322 8.68302C10.3794 8.6278 10.4575 8.59675 10.539 8.59675C10.6205 8.59675 10.6986 8.6278 10.756 8.68302L11.1839 9.09719C11.2418 9.15195 11.2743 9.2265 11.2743 9.30427C11.2743 9.38204 11.2418 9.45659 11.1839 9.51135L7.43666 13.093C7.35076 13.1751 7.23423 13.2213 7.11267 13.2214H6.88038C6.75909 13.22 6.64303 13.174 6.5564 13.093L2.80916 9.51135C2.7513 9.45659 2.71875 9.38204 2.71875 9.30427C2.71875 9.2265 2.7513 9.15195 2.80916 9.09719L3.24318 8.68302C3.29952 8.62815 3.37663 8.59723 3.45713 8.59723C3.53763 8.59723 3.61475 8.62815 3.67109 8.68302L6.38523 11.2789V1.84635C6.38523 1.68527 6.52208 1.55469 6.69088 1.55469H7.30218Z" fill="currentColor"></path></svg></div>',
      2
    ),
  ];
const ut = {
  components: {
    Footer: ls,
    View: je(
      {
        setup(e) {
          const a = k(),
            s = me({ x: 0, y: 0 }),
            t = j([
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
            i = j(!1),
            l = {
              rootMargin: "0px",
              threshold: Array(100)
                .fill()
                .map((e, a) => 0.01 * a),
            },
            o = new IntersectionObserver((e) => {
              e.forEach((e) => {
                var a, s;
                const { intersectionRatio: i, target: l } = e,
                  o = null == (a = l.dataset) ? void 0 : a.index;
                if ("img" === (null == (s = l.dataset) ? void 0 : s.item))
                  t.value[o].isEnter = !(i < 0.4);
                else
                  l.style.animation =
                    i < 0.6 ? "fadeOut 2s forwards" : "zoomIn 3.5s forwards";
              });
            }, l),
            r = () => {
              const e = document.getElementById("studio");
              if (e) {
                const a = e.offsetTop;
                window.scrollTo({ top: a, behavior: "smooth" });
              }
            };
          q(
            () => a.state.app.isLoading,
            (e) => {
              if (((i.value = !e), e)) {
                ((e) => {
                  for (const a of e) o.unobserve(a);
                })([
                  ...document.querySelectorAll(".img-wrap"),
                  document.querySelector(".btn-scroll"),
                ]);
              } else
                fe(() => {
                  ((e) => {
                    for (const a of e) o.observe(a);
                  })([
                    ...document.querySelectorAll(".img-wrap"),
                    document.querySelector(".btn-scroll"),
                  ]);
                });
            }
          );
          const n = j(!1),
            d = () => {
              n.value = window.innerWidth < 991;
            };
          return (
            C(() => {
              d(), window.addEventListener("resize", d), de.init();
            }),
            (e, a) => (
              g(),
              b(
                x,
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
                                t = window.innerHeight / 2;
                              (s.x = ((a - e.clientX) / 100) * 3),
                                (s.y = ((t - e.clientY) / 100) * 3);
                            }
                          })(e)),
                    },
                    [
                      i.value
                        ? (g(),
                          b(
                            "div",
                            {
                              key: 0,
                              class: "view-wrap",
                              style: W({
                                transform: `translate3d(${2 * _(s).x}px, ${
                                  _(s).y
                                }px, 0) rotateX(${-_(s).y / 2}deg) rotateY(${
                                  -_(s).x / 2
                                }deg)`,
                                transformOrigin: "center center",
                              }),
                            },
                            [
                              (g(!0),
                              b(
                                x,
                                null,
                                X(
                                  t.value,
                                  (e, a) => (
                                    g(),
                                    b(
                                      "div",
                                      {
                                        class:
                                          "img-wrap home-hero_image-placer",
                                        key: e.url + a,
                                        style: W({
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
                                            src: _(ke)(e.url),
                                            style: W({
                                              width: n.value
                                                ? e.css.m_width
                                                : e.css.width,
                                              height: n.value
                                                ? e.css.m_height
                                                : e.css.height,
                                              transform: `translate3d(${
                                                _(s).x / 2
                                              }px,${_(s).y / 2}px, 100px)`,
                                            }),
                                          },
                                          null,
                                          12,
                                          mt
                                        ),
                                      ],
                                      12,
                                      vt
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            4
                          ))
                        : w("v-if", !0),
                    ],
                    32
                  ),
                  h(
                    "div",
                    { "data-reveal": "button", class: "home-hero_btn" },
                    [
                      h("div", { class: "btn-contain btn-contain-scroll" }, [
                        h(
                          "div",
                          { class: "btn-scroll w-inline-block", onClick: r },
                          ft
                        ),
                      ]),
                    ]
                  ),
                ],
                64
              )
            )
          );
        },
      },
      [
        [
          "__file",
          "/Users/lishengjie/Documents/GitHub/basis.work/src/widgets/home/view.vue",
        ],
      ]
    ),
  },
  setup() {
    const e = j("");
    return (
      C(() => {
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
      { a: e, getVideoUrl: Ms, getImageUrl: ke }
    );
  },
};
de.init();
const gt = (e) => (pe("data-v-57509004"), (e = e()), ve(), e),
  bt = gt(() =>
    h("div", { class: "container" }, [h("div", { class: "target_line" })], -1)
  ),
  wt = { id: "studio", class: "section" },
  ht = ce(
    '<div class="section-title_component" data-v-57509004><div class="container" data-v-57509004><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-57509004><div class="section-title_dot" style="opacity:1;" data-v-57509004><div class="section-title_dot-fill" style="width:100%;height:100%;" data-v-57509004></div></div><div class="u-overflow-hidden" data-v-57509004><div class="section-title_title" data-v-57509004><h2 class="u-ts-4" data-v-57509004>詹紹綺人文藝術中心</h2></div></div></div></div></div><div class="container" data-v-57509004><div class="w-layout-grid pair-grid" data-v-57509004><div data-animation-element="group" id="w-node-_1d0de869-a418-1ffe-c192-cd0abecc9833-af552307" data-v-57509004><h3 data-animation-element="title" data-v-57509004><div class="u-overflow-hidden" data-aos="fade-up" data-aos-duration="800" style="display:block;text-align:start;position:relative;" data-v-57509004><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004> 位於25樓雲海之中的藝術與文化博物館， </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-aos="fade-up" data-aos-duration="700" data-v-57509004><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004> 典藏冠軍高山茶、茶道具及名壺、雕塑、獨家出品普洱和單一純麥威士忌。 </div></div>\x3c!-- &lt;div\n              class=&quot;u-overflow-hidden&quot;\n              style=&quot;display: block; text-align: start; position: relative&quot;\n              data-aos=&quot;fade-up&quot;\n              data-aos-duration=&quot;800&quot;\n            &gt;\n              &lt;div\n                style=&quot;\n                  position: relative;\n                  display: inline-block;\n                  translate: none;\n                  rotate: none;\n                  scale: none;\n                  transform: translate(0px, 0%);\n                &quot;\n              &gt;\n                products\n              &lt;/div&gt;\n              &lt;div\n                style=&quot;\n                  position: relative;\n                  display: inline-block;\n                  translate: none;\n                  rotate: none;\n                  scale: none;\n                  transform: translate(0px, 0%);\n                &quot;\n              &gt;\n                and\n              &lt;/div&gt;\n              &lt;div\n                style=&quot;\n                  position: relative;\n                  display: inline-block;\n                  translate: none;\n                  rotate: none;\n                  scale: none;\n                  transform: translate(0px, 0%);\n                &quot;\n              &gt;\n                their\n              &lt;/div&gt;\n            &lt;/div&gt;\n            &lt;div\n              class=&quot;u-overflow-hidden&quot;\n              style=&quot;display: block; text-align: start; position: relative&quot;\n              data-aos=&quot;fade-up&quot;\n              data-aos-duration=&quot;900&quot;\n            &gt;\n              &lt;div\n                style=&quot;\n                  position: relative;\n                  display: inline-block;\n                  translate: none;\n                  rotate: none;\n                  scale: none;\n                  transform: translate(0px, 0%);\n                &quot;\n              &gt;\n                brands\n              &lt;/div&gt;\n              &lt;div\n                style=&quot;\n                  position: relative;\n                  display: inline-block;\n                  translate: none;\n                  rotate: none;\n                  scale: none;\n                  transform: translate(0px, 0%);\n                &quot;\n              &gt;\n                through\n              &lt;/div&gt;\n            &lt;/div&gt;\n            &lt;div\n              class=&quot;u-overflow-hidden&quot;\n              style=&quot;display: block; text-align: start; position: relative&quot;\n              data-aos=&quot;fade-up&quot;\n              data-aos-duration=&quot;1000&quot;\n            &gt;\n              &lt;div\n                style=&quot;\n                  position: relative;\n                  display: inline-block;\n                  translate: none;\n                  rotate: none;\n                  scale: none;\n                  transform: translate(0px, 0%);\n                &quot;\n              &gt;\n                design.\n              &lt;/div&gt;\n            &lt;/div&gt; --\x3e</h3><div class="btn-group" data-v-57509004><div class="btn-item cc-1" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0px);opacity:1;" data-v-57509004><a class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text" data-v-57509004>館藏查詢</div><div class="btn-text cc-bottom" data-v-57509004>館藏查詢</div></div></a></div><div class="btn-item cc-2" data-aos="fade-up" data-aos-duration="3000" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0px);opacity:1;" data-v-57509004><a href="/about" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text" data-v-57509004>預約參觀</div><div class="btn-text cc-bottom" data-v-57509004>預約參觀</div></div></a></div></div></div></div></div>',
    2
  ),
  yt = { class: "u-mt-8-75" },
  _t = { class: "marquee" },
  xt = { class: "marquee_row w-dyn-list" },
  kt = {
    role: "list",
    class: "marquee_content w-dyn-items",
    style: {
      transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      "will-change": "transform",
    },
  },
  jt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  zt = {
    class: "marquee_item cc-1",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  qt = ["src"],
  Ct = { role: "listitem", class: "marquee_logo w-dyn-item" },
  St = {
    class: "marquee_item cc-2",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ot = ["src"],
  At = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Bt = {
    class: "marquee_item cc-3",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Et = ["src"],
  Tt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Lt = {
    class: "marquee_item cc-4",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  It = ["src"],
  Pt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Mt = {
    class: "marquee_item cc-5",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Dt = ["src"],
  Ft = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Ut = {
    class: "marquee_item cc-6",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ht = ["src"],
  Vt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Nt = {
    class: "marquee_item cc-7",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Gt = ["src"],
  Xt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Wt = {
    class: "marquee_item cc-8",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Rt = ["src"],
  Yt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Zt = {
    class: "marquee_item cc-9",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Kt = ["src"],
  $t = gt(() =>
    h("div", { class: "container" }, [h("div", { class: "target_line" })], -1)
  ),
  Jt = { class: "section" },
  Qt = ce(
    '<div class="section-title_component" data-v-57509004><div class="container" data-v-57509004><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-57509004><div class="section-title_dot" style="opacity:1;" data-v-57509004><div class="section-title_dot-fill" style="width:100%;height:100%;" data-v-57509004></div></div><div class="u-overflow-hidden" data-v-57509004><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><h2 class="u-ts-4" data-v-57509004>空間預約</h2></div></div></div></div></div>',
    1
  ),
  ei = { class: "container" },
  ai = gt(() =>
    h(
      "div",
      { "data-animation-element": "group" },
      [
        h("h4", { "data-animation-element": "title", class: "h1", style: {} }, [
          w(
            ' <div\n            data-aos="fade-up"\n            data-aos-duration="700"\n            class="u-overflow-hidden"\n            style="display: block; text-align: start; position: relative"\n          >\n            <div\n              style="\n                position: relative;\n                display: inline-block;\n                translate: none;\n                rotate: none;\n                scale: none;\n                transform: translate(0px, 0%);\n              "\n            >\n              詹紹綺人文藝術中心\n            </div>\n          </div> '
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
                " (Skyart7325)開放每日一組預約。 "
              ),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  si = { class: "sticky-pair" },
  ti = { class: "w-layout-grid pair-grid" },
  ii = { id: "w-node-eb3e6ea8-5a10-d5fc-f561-3f621ba6f385-af552307" },
  li = {
    id: "w-node-_137ddbb9-11b4-d169-f149-eca9f54873e8-af552307",
    class: "card-wrapper cc-small",
  },
  oi = {
    id: "w-node-a3cc95fc-d4f5-0398-7194-1e8506932d8d-af552307",
    class: "w-dyn-list",
  },
  ri = { role: "list", class: "w-dyn-items" },
  ni = { role: "listitem", class: "w-dyn-item" },
  di = { class: "card-wrapper cc-small" },
  ci = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  },
  pi = { "data-mouse-class": "cc-text", class: "card is-link w-inline-block" },
  vi = { class: "card-image_wrapper" },
  mi = { class: "iframe-video_wrapper" },
  fi = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  ui = ["src"],
  gi = Z(" Your browser does not support the video tag. "),
  bi = gt(() => h("div", { class: "iframe-video_blocker" }, null, -1)),
  wi = gt(() =>
    h(
      "div",
      { class: "card-body", "data-aos": "fade-up", "data-aos-duration": "700" },
      [
        h("div", { class: "u-overflow-hidden" }, [
          h("div", { class: "card-up" }, [
            h("h4", { class: "u-ts-4" }, "Skyart3725全景"),
          ]),
        ]),
      ],
      -1
    )
  ),
  hi = {
    id: "w-node-_814776c7-59e4-1835-d274-f4eed26bca88-af552307",
    class: "w-dyn-list",
  },
  yi = { role: "list", class: "w-dyn-items" },
  _i = { role: "listitem", class: "w-dyn-item" },
  xi = { class: "card-wrapper cc-large" },
  ki = { class: "card-animation cc-40" },
  ji = {
    "data-mouse-class": "cc-text",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
    class: "card is-link w-inline-block",
  },
  zi = { class: "card-image_wrapper" },
  qi = { class: "iframe-video_wrapper" },
  Ci = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Si = ["src"],
  Oi = Z(" Your browser does not support the video tag. "),
  Ai = gt(() => h("div", { class: "iframe-video_blocker" }, null, -1)),
  Bi = ce(
    '<div class="card-body" data-aos="fade-up" data-aos-duration="700" data-v-57509004><div class="u-overflow-hidden" data-v-57509004><div class="card-up" data-v-57509004><div class="card-large_text" data-v-57509004><h4 class="u-ts-4" data-v-57509004>多功能茶席空間</h4></div></div></div></div>',
    1
  ),
  Ei = ce(
    '<div id="w-node-bc6d1a98-c4cb-3434-3589-47eddb3c03ed-af552307" class="content" data-v-57509004><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-57509004><p class="u-ts-3" data-aos="fade-up" data-aos-duration="700" data-v-57509004> 博物館有三區專業茶道茶席空間，最多可以招待8-20位嘉賓，每區飲水與視聽設備其齊全，靜待您與好友在雲頂與大師名作間沏壺閱茗。 </p></div><div class="btn-group" data-v-57509004><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><a href="/cases" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text" data-v-57509004>空間介紹</div><div class="btn-text cc-bottom" data-v-57509004>空間介紹</div></div></a></div><div class="btn-item cc-2" data-v-57509004><a class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text" data-v-57509004>立即預約</div><div class="btn-text cc-bottom" data-v-57509004>立即預約</div></div></a></div></div></div>',
    1
  ),
  Ti = gt(() =>
    h("div", { class: "container" }, [h("div", { class: "target_line" })], -1)
  ),
  Li = { class: "section" },
  Ii = ce(
    '<div class="section-title_component" data-v-57509004><div class="container" data-v-57509004><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-57509004><div class="section-title_dot" data-v-57509004></div><div class="u-overflow-hidden" data-v-57509004><div class="section-title_title" data-v-57509004><h2 class="u-ts-4" data-v-57509004>定香人文</h2></div></div></div></div></div>',
    1
  ),
  Pi = { class: "container" },
  Mi = { class: "w-layout-grid pair-grid" },
  Di = { id: "w-node-_6e6a6411-9d71-b91d-1723-e94f35341c18-af552307" },
  Fi = { class: "service-list" },
  Ui = { class: "logomark_component" },
  Hi = {
    class: "logomark w-embed",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  },
  Vi = ["src"],
  Ni = gt(() =>
    h(
      "ul",
      { role: "list", class: "u-mt-3-5" },
      [
        w(
          ' <li\n                class="u-overflow-hidden"\n                data-aos="fade-up"\n                data-aos-duration="700"\n                data-aos-delay="100"\n              >\n                <div\n                  class="list-content cc-1"\n                  style="\n                    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1)\n                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n                    transform-style: preserve-3d;\n                  "\n                >\n                  <h3 class="u-tc-caps">定香人文</h3>\n                </div>\n              </li> '
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
            h("div", { class: "list-content cc-2" }, [
              h("h3", { class: "u-tc-caps" }, "藝術品經紀"),
            ]),
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
            h("div", { class: "list-content cc-3" }, [
              h("h3", { class: "u-tc-caps" }, "藝術品拍賣"),
            ]),
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
            h("div", { class: "list-content cc-4" }, [
              h("h3", { class: "u-tc-caps" }, "台灣高山冠軍茶"),
            ]),
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
            h("div", { class: "list-content cc-5" }, [
              h("h3", { class: "u-tc-caps" }, "雲南古樹普洱茶"),
            ]),
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
            h("div", { class: "list-content cc-6" }, [
              h("h3", { class: "u-tc-caps" }, "精品咖啡"),
            ]),
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
            h("div", { class: "list-content cc-7" }, [
              h("h3", { class: "u-tc-caps" }, "天幕茶碗"),
            ]),
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
            h("div", { class: "list-content cc-8" }, [
              h("h3", { class: "u-tc-caps" }, "典藏名酒"),
            ]),
          ]
        ),
      ],
      -1
    )
  ),
  Gi = ce(
    '<div class="btn-group" data-v-57509004><div class="btn-item cc-1" data-v-57509004><a href="/about" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text" data-v-57509004>藝品介紹</div><div class="btn-text cc-bottom" data-v-57509004>藝品介紹</div></div></a></div></div>',
    1
  ),
  Xi = gt(() =>
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
                        " 館藏特約藝術家 "
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
  Wi = { class: "section" },
  Ri = { class: "container" },
  Yi = ce(
    '<div class="row" data-v-57509004><div data-animation-element="group" class="col" data-v-57509004><h3 data-animation-element="title" class="h1" style="" data-aos="fade-up" data-aos-duration="700" data-v-57509004><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-57509004><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004> 拍賣中心 </div></div>\x3c!-- &lt;div\n              class=&quot;u-overflow-hidden&quot;\n              style=&quot;display: block; text-align: start; position: relative&quot;\n            &gt;\n              &lt;div\n                style=&quot;\n                  position: relative;\n                  display: inline-block;\n                  translate: none;\n                  rotate: none;\n                  scale: none;\n                  transform: translate(0px, 0%);\n                &quot;\n              &gt;\n                Design\n              &lt;/div&gt;\n            &lt;/div&gt; --\x3e</h3></div></div>',
    1
  ),
  Zi = { class: "sticky-pair" },
  Ki = { class: "w-layout-grid pair-grid is-leading" },
  $i = {
    id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f41-af552307",
    class: "w-dyn-list",
  },
  Ji = { role: "list", class: "w-dyn-items" },
  Qi = { role: "listitem", class: "w-dyn-item" },
  el = { class: "card-wrapper cc-large" },
  al = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  sl = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  tl = { class: "card-image_wrapper" },
  il = { class: "iframe-video_wrapper" },
  ll = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  ol = ["src"],
  rl = Z(" Your browser does not support the video tag. "),
  nl = gt(() => h("div", { class: "iframe-video_blocker" }, null, -1)),
  dl = ce(
    '<div class="card-body" data-v-57509004><div class="u-overflow-hidden" data-v-57509004><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-57509004><div class="card-large_text" data-v-57509004><h4 class="u-ts-4" data-v-57509004>Skyart7325鑑賞中心</h4></div></div></div></div>',
    1
  ),
  cl = {
    id: "w-node-e23686ee-2a5d-d68e-2ddf-02d095aea2fe-af552307",
    class: "card-wrapper cc-small",
  },
  pl = {
    id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f3a-af552307",
    class: "w-dyn-list",
  },
  vl = { role: "list", class: "w-dyn-items" },
  ml = { role: "listitem", class: "w-dyn-item" },
  fl = { class: "card-wrapper cc-small" },
  ul = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  gl = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  bl = { class: "card-image_wrapper" },
  wl = { class: "iframe-video_wrapper" },
  hl = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  yl = ["src"],
  _l = Z(" Your browser does not support the video tag. "),
  xl = gt(() => h("div", { class: "iframe-video_blocker" }, null, -1)),
  kl = gt(() =>
    h(
      "div",
      { class: "card-body" },
      [
        h("div", { class: "u-overflow-hidden" }, [
          h(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [h("h4", { class: "u-ts-4" }, "Sable App")]
          ),
        ]),
      ],
      -1
    )
  ),
  jl = ce(
    '<div id="w-node-_591e678b-2794-a4c1-b9e4-4c34713bcb6d-af552307" class="content is-grid" data-v-57509004><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-57509004><p class="u-ts-3" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-v-57509004> Basis knows fintech. We’ve developed a strong focus on design for financial services, like mobile apps, bank brands, and credit card design. Our programs are optimized for startups, allowing Basis to start small, work fast, and keep you ahead of your roadmap. When the most innovative companies want to cut through a highly-regulated, ever-changing financial world, they come to the experts. </p></div><div class="btn-group" data-v-57509004><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><a href="/fintech-design" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text" data-v-57509004>Fintech services</div><div class="btn-text cc-bottom" data-v-57509004>Fintech services</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text" data-v-57509004>Design trial</div><div class="btn-text cc-bottom" data-v-57509004>Design trial</div></div></a></div></div></div>',
    1
  ),
  zl = { class: "section" },
  ql = { class: "container over-h" },
  Cl = ce(
    '<div class="row" data-v-57509004><div data-animation-element="group" class="col" data-v-57509004><h3 data-animation-element="title" class="h1" style="" data-aos="fade-up" data-aos-duration="1000" data-v-57509004><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-57509004><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004> Branding </div></div></h3></div></div>',
    1
  ),
  Sl = { class: "sticky-pair" },
  Ol = { class: "w-layout-grid pair-grid" },
  Al = { id: "w-node-dc0c39cf-ca9b-7980-3885-608a3bb047ce-af552307" },
  Bl = {
    id: "w-node-_22d42303-51c3-58a5-286f-187c6fce5e6a-af552307",
    class: "card-wrapper cc-small",
  },
  El = {
    id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192626-af552307",
    class: "w-dyn-list",
  },
  Tl = { role: "list", class: "w-dyn-items" },
  Ll = { role: "listitem", class: "w-dyn-item" },
  Il = { class: "card-wrapper cc-small" },
  Pl = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  Ml = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  Dl = { class: "card-image_wrapper" },
  Fl = { class: "iframe-video_wrapper" },
  Ul = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Hl = ["src"],
  Vl = Z(" Your browser does not support the video tag. "),
  Nl = gt(() => h("div", { class: "iframe-video_blocker" }, null, -1)),
  Gl = gt(() =>
    h(
      "div",
      { class: "card-body" },
      [
        h("div", { class: "u-overflow-hidden" }, [
          h(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [h("h4", { class: "u-ts-4" }, " Gaffa Brand & Website ")]
          ),
        ]),
      ],
      -1
    )
  ),
  Xl = {
    id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e19262d-af552307",
    class: "w-dyn-list",
  },
  Wl = { role: "list", class: "w-dyn-items" },
  Rl = { role: "listitem", class: "w-dyn-item" },
  Yl = { class: "card-wrapper cc-large" },
  Zl = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  },
  Kl = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  $l = { class: "card-image_wrapper" },
  Jl = { class: "iframe-video_wrapper" },
  Ql = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  eo = ["src"],
  ao = Z(" Your browser does not support the video tag. "),
  so = gt(() => h("div", { class: "iframe-video_blocker" }, null, -1)),
  to = ce(
    '<div class="card-body" data-v-57509004><div class="u-overflow-hidden" data-v-57509004><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-57509004><div class="card-large_text" data-v-57509004><h4 class="u-ts-4" data-v-57509004>Sable Brand</h4></div></div></div></div>',
    1
  ),
  io = ce(
    '<div id="w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192634-af552307" class="content is-grid" data-v-57509004><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-57509004><p class="u-ts-3" data-aos="fade-up" data-aos-duration="800" data-v-57509004> Brand power: the multiple your customers will pay for your product, over that of your closest competition, because your name is on it. Basis drives brand power, because unlike other agencies that only focus on experience design or brand development, we seamlessly integrate both. When you start with Basis, we’ll build a brand book and product design kit that (finally) talk to each other. </p></div><div class="btn-group" data-v-57509004><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><a href="/cases" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text" data-v-57509004>View cases</div><div class="btn-text cc-bottom" data-v-57509004>View cases</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004> Design trial </div><div class="btn-text cc-bottom" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004> Design trial </div></div></a></div></div></div>',
    1
  ),
  lo = ce(
    '<div class="container" data-v-57509004><div class="target_line" data-v-57509004></div></div><section class="section" data-v-57509004><div class="section-title_component" data-v-57509004><div class="container" data-v-57509004><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-57509004><div class="section-title_dot" style="opacity:1;" data-v-57509004></div><div class="u-overflow-hidden" data-v-57509004><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><h2 class="u-ts-4" data-v-57509004>Contact Us</h2></div></div></div></div></div><div class="container" data-v-57509004><div class="w-layout-grid pair-grid" data-v-57509004><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67" data-v-57509004><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext" data-v-57509004><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700" data-v-57509004><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-57509004><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-57509004><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-57509004><div style="position:relative;display:inline-block;" data-v-57509004> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  ),
  oo = { class: "pre-footer" },
  ro = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  no = { class: "iframe-video_wrapper" },
  co = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  po = ["src"],
  vo = Z(" Your browser does not support the video tag. "),
  mo = gt(() => h("div", { class: "iframe-video_blocker" }, null, -1)),
  fo = ce(
    '<div class="pre-footer_gradient" data-v-57509004></div><div class="marquee" data-v-57509004><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Case Studies </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Case Studies </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Case Studies </div></div></div><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Case Studies </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Case Studies </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Case Studies </div></div></div></div><div class="pre-footer_button" data-v-57509004><div class="btn cc-large-landscape" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text cc-large-landscape" data-v-57509004>REad Next</div><div class="btn-text cc-bottom cc-large-landscape" data-v-57509004>Button</div></div></div></div>',
    3
  ),
  uo = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  go = { class: "iframe-video_wrapper" },
  bo = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  wo = ["src"],
  ho = Z(" Your browser does not support the video tag. "),
  yo = gt(() => h("div", { class: "iframe-video_blocker" }, null, -1)),
  _o = ce(
    '<div class="pre-footer_gradient" data-v-57509004></div><div class="marquee" data-v-57509004><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-69%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Design Trial </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Design Trial </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Design Trial </div></div></div><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-69%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Design Trial </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Design Trial </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-57509004><div class="h1" data-v-57509004>Design Trial </div></div></div></div><div class="pre-footer_button" data-v-57509004><div class="btn cc-large-landscape" data-v-57509004><div class="btn-text-wrap" data-v-57509004><div class="btn-text cc-large-landscape" data-v-57509004>REad Next</div><div class="btn-text cc-bottom cc-large-landscape" data-v-57509004>Button</div></div></div></div>',
    3
  );
var xo = je(ut, [
    [
      "render",
      function (e, a, s, t, i, l) {
        const o = S("View"),
          r = S("Footer");
        return (
          g(),
          b(
            x,
            null,
            [
              E(o),
              w(" ------ "),
              bt,
              h("section", wt, [
                ht,
                h("div", yt, [
                  h("div", _t, [
                    h("div", xt, [
                      h("div", kt, [
                        h("div", jt, [
                          h("div", zt, [
                            h(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "300",
                                src: t.getImageUrl("home/img/1.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              qt
                            ),
                          ]),
                        ]),
                        h("div", Ct, [
                          h("div", St, [
                            h(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "400",
                                src: t.getImageUrl("home/img/2.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Ot
                            ),
                          ]),
                        ]),
                        h("div", At, [
                          h("div", Bt, [
                            h(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500",
                                src: t.getImageUrl("home/img/3.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Et
                            ),
                          ]),
                        ]),
                        h("div", Tt, [
                          h("div", Lt, [
                            h(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "600",
                                src: t.getImageUrl("home/img/4.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              It
                            ),
                          ]),
                        ]),
                        h("div", Pt, [
                          h("div", Mt, [
                            h(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "700",
                                src: t.getImageUrl("home/img/5.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Dt
                            ),
                          ]),
                        ]),
                        h("div", Ft, [
                          h("div", Ut, [
                            h(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "800",
                                src: t.getImageUrl("home/img/6.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Ht
                            ),
                          ]),
                        ]),
                        h("div", Vt, [
                          h("div", Nt, [
                            h(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "900",
                                src: t.getImageUrl("home/img/7.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Gt
                            ),
                          ]),
                        ]),
                        h("div", Xt, [
                          h("div", Wt, [
                            h(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "1000",
                                src: t.getImageUrl("home/img/8.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Rt
                            ),
                          ]),
                        ]),
                        h("div", Yt, [
                          h("div", Zt, [
                            h(
                              "img",
                              {
                                loading: "eager",
                                "data-aos": "fade-up",
                                "data-aos-delay": "1100",
                                src: t.getImageUrl("home/img/9.jpg"),
                                alt: "",
                                class: "marquee_logo",
                              },
                              null,
                              8,
                              Kt
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              w(" ------ "),
              $t,
              h("section", Jt, [
                Qt,
                h("div", ei, [
                  ai,
                  h("div", si, [
                    h("div", ti, [
                      h("div", ii, [
                        h("div", li, [
                          h("div", oi, [
                            h("div", ri, [
                              h("div", ni, [
                                h("div", di, [
                                  h("div", ci, [
                                    h("div", pi, [
                                      h("div", vi, [
                                        h("div", mi, [
                                          h("video", fi, [
                                            h(
                                              "source",
                                              {
                                                src: t.getVideoUrl(
                                                  "home/knife1-1.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              ui
                                            ),
                                            gi,
                                          ]),
                                          bi,
                                        ]),
                                      ]),
                                      wi,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      h("div", hi, [
                        h("div", yi, [
                          h("div", _i, [
                            h("div", xi, [
                              h("div", ki, [
                                h("div", ji, [
                                  h("div", zi, [
                                    h("div", qi, [
                                      h("video", Ci, [
                                        h(
                                          "source",
                                          {
                                            src: t.getVideoUrl(
                                              "home/knife1-2.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          Si
                                        ),
                                        Oi,
                                      ]),
                                      Ai,
                                    ]),
                                  ]),
                                  Bi,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      Ei,
                    ]),
                  ]),
                ]),
              ]),
              w(" -- "),
              Ti,
              h("section", Li, [
                Ii,
                h("div", Pi, [
                  h("div", Mi, [
                    h("div", Di, [
                      h("div", Fi, [
                        h("div", Ui, [
                          h("div", Hi, [
                            h(
                              "img",
                              { src: t.getImageUrl("logo.png"), alt: "" },
                              null,
                              8,
                              Vi
                            ),
                          ]),
                        ]),
                        Ni,
                        Gi,
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              w(" --- "),
              Xi,
              w(" -- "),
              h("section", Wi, [
                h("div", Ri, [
                  Yi,
                  h("div", Zi, [
                    h("div", Ki, [
                      h("div", $i, [
                        h("div", Ji, [
                          h("div", Qi, [
                            h("div", el, [
                              h("div", al, [
                                h("div", sl, [
                                  h("div", tl, [
                                    h("div", il, [
                                      h("video", ll, [
                                        h(
                                          "source",
                                          {
                                            src: t.getVideoUrl(
                                              "home/knife2-3.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          ol
                                        ),
                                        rl,
                                      ]),
                                      nl,
                                    ]),
                                  ]),
                                  dl,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      h("div", null, [
                        h("div", cl, [
                          h("div", pl, [
                            h("div", vl, [
                              h("div", ml, [
                                h("div", fl, [
                                  h("div", ul, [
                                    h("div", gl, [
                                      h("div", bl, [
                                        h("div", wl, [
                                          h("video", hl, [
                                            h(
                                              "source",
                                              {
                                                src: t.getVideoUrl(
                                                  "home/knife2-1.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              yl
                                            ),
                                            _l,
                                          ]),
                                          xl,
                                        ]),
                                      ]),
                                      kl,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      jl,
                    ]),
                  ]),
                ]),
              ]),
              w(" --- "),
              h("section", zl, [
                h("div", ql, [
                  Cl,
                  h("div", Sl, [
                    h("div", Ol, [
                      h("div", Al, [
                        h("div", Bl, [
                          h("div", El, [
                            h("div", Tl, [
                              h("div", Ll, [
                                h("div", Il, [
                                  h("div", Pl, [
                                    h("div", Ml, [
                                      h("div", Dl, [
                                        h("div", Fl, [
                                          h("video", Ul, [
                                            h(
                                              "source",
                                              {
                                                src: t.getVideoUrl(
                                                  "home/knife2-4.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              Hl
                                            ),
                                            Vl,
                                          ]),
                                          Nl,
                                        ]),
                                      ]),
                                      Gl,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      h("div", Xl, [
                        h("div", Wl, [
                          h("div", Rl, [
                            h("div", Yl, [
                              h("div", Zl, [
                                h("div", Kl, [
                                  h("div", $l, [
                                    h("div", Jl, [
                                      h("video", Ql, [
                                        h(
                                          "source",
                                          {
                                            src: t.getVideoUrl(
                                              "home/knife1-2.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          eo
                                        ),
                                        ao,
                                      ]),
                                      so,
                                    ]),
                                  ]),
                                  to,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      io,
                    ]),
                  ]),
                ]),
              ]),
              w(" -- "),
              lo,
              w(" --- "),
              h("div", null, [
                h("aside", oo, [
                  h("div", ro, [
                    h("div", no, [
                      h("video", co, [
                        h(
                          "source",
                          {
                            src: t.getVideoUrl("home/buddha1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          po
                        ),
                        vo,
                      ]),
                      mo,
                    ]),
                    fo,
                  ]),
                  h("div", uo, [
                    h("div", go, [
                      h("video", bo, [
                        h(
                          "source",
                          {
                            src: t.getVideoUrl("home/tea_1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          wo
                        ),
                        ho,
                      ]),
                      yo,
                    ]),
                    _o,
                  ]),
                ]),
              ]),
              E(r),
            ],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-57509004"],
    [
      "__file",
      "/Users/lishengjie/Documents/GitHub/basis.work/src/pages/index.vue",
    ],
  ]),
  ko = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const jo = {
    "../pages/about.vue": () =>
      Ra(
        () =>
          Promise.resolve().then(function () {
            return fs;
          }),
        void 0
      ),
    "../pages/case.vue": () =>
      Ra(
        () =>
          Promise.resolve().then(function () {
            return hs;
          }),
        void 0
      ),
    "../pages/demo.vue": () =>
      Ra(
        () =>
          Promise.resolve().then(function () {
            return Ps;
          }),
        void 0
      ),
    "../pages/fintech-design.vue": () =>
      Ra(
        () =>
          Promise.resolve().then(function () {
            return pt;
          }),
        void 0
      ),
    "../pages/index.vue": () =>
      Ra(
        () =>
          Promise.resolve().then(function () {
            return ko;
          }),
        void 0
      ),
  },
  zo = {
    "../pages/about.vue": fs,
    "../pages/case.vue": hs,
    "../pages/demo.vue": Ps,
    "../pages/fintech-design.vue": pt,
    "../pages/index.vue": ko,
  },
  qo = [];
for (let No in jo) {
  let e = No.replace("../pages", "").toLowerCase().replace(".vue", "");
  (e = e.replace(/\/index$/, "")),
    (e = e.replace(/\/_+/g, "/:")),
    qo.push({
      path: e,
      name: e,
      meta: {
        layout: zo[No].default.layout || "layout-default",
        title:
          null != (s = null == (a = zo[No].default) ? void 0 : a.title)
            ? s
            : "app.project.title",
        header:
          null != (i = null == (t = zo[No].default) ? void 0 : t.header)
            ? i
            : "header-default",
        scroll:
          null != (o = null == (l = zo[No].default) ? void 0 : l.noScroll) && o,
      },
      component: jo[No],
    });
}
const Co = ue({
  history: ge("./"),
  routes:
    ((So = { defaultPath: "/home" }),
    [
      {
        path: "/",
        name: "default-path",
        redirect: { name: D({ defaultPath: "/" }, So).defaultPath },
      },
      ...qo,
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
Co.beforeEach(async (e, a, s) => {
  s();
});
var Oo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Co }, Symbol.toStringTag, {
    value: "Module",
  })
);
const Ao = be({ modules: Xa });
we(Ao, Co);
var Bo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Ao }, Symbol.toStringTag, {
    value: "Module",
  })
);
const Eo = {
    use(e) {
      e.interceptors.response.use(
        async function (a) {
          if (100004 === a.data.code) {
            const s = e.get("/app/jwt-token", {
              params: { account: Ao.state.auth.user.account },
            });
            1 === s.data.code && U.set("token", s.data.data.jwt_token, !0);
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
  To = {
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
                  const { isConfirmed: e } = await Le.alert({
                    title: `Error(${a.code})`,
                    text: Ee.t(`error.code.${a.code}`),
                  });
                  return (
                    e &&
                      (await Ao.dispatch("auth/logout"),
                      await Co.replace("/login"),
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
  Lo = {
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
                await Le.alert({
                  title: `Error(${a.code})`,
                  text: Ee.t(`error.code.${a.code}`),
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
class Io {
  constructor() {
    (this.provider = new Ea({}.VITE_REMOTE_API)), this.init();
  }
  init() {
    this.provider.use(Ta, La, Eo, To, Lo, Pa);
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
Io.prototype.install = function (e) {
  const a = "http-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Po = new Io(),
  Mo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, HttpService: Io, default: Po },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class Do {
  constructor() {
    this.initStates = {
      type: "Modal",
      resolve: () => {},
      title: null,
      text: null,
      component: null,
      showCancelButton: !1,
      showConfirmButton: !1,
      confirmButtonText: Ee.t("button.confirm"),
      cancelButtonText: Ee.t("button.cancel"),
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
    return Ao.state.app.popupState;
  }
  async modal(e = {}) {
    const {
      title: a,
      text: s,
      component: t = null,
      showCancelButton: i = !0,
      showConfirmButton: l = !0,
      confirmButtonText: o = Ee.t("button.confirm"),
      cancelButtonText: r = Ee.t("button.cancel"),
      allowOutsideClick: n = !0,
      props: d = {},
    } = e;
    return new Promise((e) => {
      Ao.commit(
        "app/set/popup",
        u(f({}, this.initStates), {
          type: "Modal",
          resolve: e,
          title: a,
          text: s,
          component: t ? ae(t) : null,
          showCancelButton: i,
          showConfirmButton: l,
          confirmButtonText: o,
          cancelButtonText: r,
          allowOutsideClick: n,
          props: d,
        })
      );
    });
  }
  clear() {
    Ao.commit("app/clear/popup");
  }
}
Do.prototype.install = function (e) {
  const a = "popup-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Fo = new Do();
const Uo = {
    "../services/alert-service.js": Ba,
    "../services/http-service.js": Mo,
    "../services/i18n-service.js": Te,
    "../services/popup-service.js": Object.freeze(
      Object.defineProperty(
        { __proto__: null, PopupService: Do, default: Fo },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../services/router-service.js": Oo,
    "../services/storage-service.js": De,
    "../services/store-service.js": Bo,
  },
  Ho = {
    install: (e) => {
      for (let a in Uo) e.use(Uo[a].default);
    },
  };
const Vo = he(Se);
Vo.provide("$jQuery", ye),
  Vo.provide("$swal", Le),
  Vo.provide("$storage", U),
  Vo.provide("$tabsslider", _e),
  Vo.use(na),
  Vo.use(Ca),
  Vo.use(xe, { loading: "", error: "" }),
  Vo.use(Ho),
  Vo.mount("#app");