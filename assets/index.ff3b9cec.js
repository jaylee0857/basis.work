var e,
  a,
  t,
  s,
  l,
  i,
  o,
  r = Object.defineProperty,
  n = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  d = Object.getOwnPropertySymbols,
  p = Object.prototype.hasOwnProperty,
  v = Object.prototype.propertyIsEnumerable,
  m = (e, a, t) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[a] = t),
  f = (e, a) => {
    for (var t in a || (a = {})) p.call(a, t) && m(e, t, a[t]);
    if (d) for (var t of d(a)) v.call(a, t) && m(e, t, a[t]);
    return e;
  },
  u = (e, a) => n(e, c(a));
import {
  o as g,
  c as y,
  a as b,
  n as h,
  u as w,
  F as _,
  b as x,
  r as k,
  d as j,
  w as C,
  e as q,
  f as S,
  g as z,
  h as O,
  i as T,
  j as A,
  k as E,
  l as B,
  m as L,
  p as I,
  q as P,
  s as M,
  t as D,
  v as F,
  x as U,
  y as V,
  S as H,
  z as N,
  A as X,
  B as R,
  C as Z,
  D as Y,
  E as W,
  G,
  H as K,
  I as $,
  J,
  T as Q,
  K as ee,
  L as ae,
  M as te,
  N as se,
  O as le,
  P as ie,
  Q as oe,
  R as re,
  U as ne,
  V as ce,
  W as de,
  X as pe,
  Y as ve,
  Z as me,
  _ as fe,
  $ as ue,
  a0 as ge,
  a1 as ye,
  a2 as be,
  a3 as he,
  a4 as we,
  a5 as _e,
  a6 as xe,
} from "./vendor.741a0b4d.js";
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
    ).href,
  je = { class: "icon" },
  Ce = { class: "svg_box" },
  qe = ["src"];
var Se = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [s, l] of a) t[s] = l;
  return t;
};
var ze = Se(
  {
    components: {
      Loading: {
        props: { mode: String },
        setup: (e) => (a, t) => (
          g(),
          y(
            _,
            null,
            [
              b("div", { class: h(["mask", e.mode]) }, null, 2),
              b(
                "div",
                { class: h(["bg", e.mode]) },
                [
                  b("div", je, [
                    b("div", Ce, [
                      b(
                        "img",
                        { src: w(ke)("favicon.png"), alt: "" },
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
          if (B(e.state.route.path)) return null;
          return L("layout-error")(I(["meta", "layout"], e.state.route));
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
          y(
            _,
            null,
            [
              (g(),
              z(T(s.layout), null, {
                default: O(() => [
                  A(o, null, {
                    default: O(({ Component: e }) => [(g(), z(T(e)))]),
                    _: 1,
                  }),
                ]),
                _: 1,
              })),
              A(r),
              s.isError || s.isShowLoading
                ? (g(), z(n, { key: 0, mode: s.mode }, null, 8, ["mode"]))
                : E("", !0),
            ],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-6ef0256d"],
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
  Te = {};
for (let Vo in Oe) {
  const e = Vo.replace("../locales/", "").toLowerCase().replace(".js", ""),
    [a, ...t] = e.split("/"),
    s = P(".", t),
    l = Oe[Vo].default;
  Te[a] = M((e, a) => D(e, { [`${s}.${a}`]: l[a] }), Te[a] || {}, F(l));
}
const Ae = (() => {
    var e, a, t, s;
    const l = U.get("locale");
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
  Ee = V.exports.createI18n({
    initLocale: Ae,
    fallbackLocale: null != (e = {}.VITE_DEFAULT_LANG) ? e : "zh-tw",
    messages: Te,
  });
var Be = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Ee }, Symbol.toStringTag, {
    value: "Module",
  })
);
(H.toast = function (e) {
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
      e.addEventListener("click", H.close);
    },
  });
}),
  (H.alert = function ({
    title: e,
    text: a,
    willClose: t = null,
    heightAuto: s = !1,
    html: l = !1,
    confirmButtonText: i = Ee.t("button.confirm"),
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
  (H.showLoading = function () {
    return this.fire({
      title: "winner winner chicken dinner",
      showConfirmButton: !1,
      customClass: "swal2-loading",
      showClass: { popup: "animate__animated animate__fadeIn" },
      hideClass: { popup: "animate__animated animate__fadeOut" },
      background: "transparent",
    });
  }),
  (H.confirm = function ({
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
const Le = H.mixin({
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
    const e = V.exports.useI18n(),
      a = k({}),
      t = (s, l = {}) => {
        const [i, ...o] = N(".", s);
        return i in a.value ? t(`${a.value[i]}.${P(".", o)}`, l) : e.t(s, l);
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
  Ue = ["onMouseenter", "onClick"],
  Ve = b("div", { class: "line" }, null, -1),
  He = { class: "list_style" },
  Ne = { class: "nav_link-top" },
  Xe = b(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Re = { class: "nav_link-title" },
  Ze = { class: "u-ts-3" },
  Ye = { class: "nav_link-p" },
  We = b(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Ge = b("div", { id: "pink_mask" }, null, -1),
  Ke = {
    props: ["isOpen"],
    emits: ["toggleOpen"],
    setup(e, { emit: a }) {
      const t = e,
        s = k(1),
        l = k(!0),
        i = X(),
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
        c = k(25);
      return (e, d) => (
        g(),
        y(
          "div",
          { class: h(["layout-deafult-header-nav", { active: t.isOpen }]) },
          [
            b("ul", null, [
              (g(!0),
              y(
                _,
                null,
                R(
                  o.value,
                  (e, l) => (
                    g(),
                    y(
                      "li",
                      {
                        key: e,
                        style: Z(`--i: ${e}`),
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
                        Ve,
                        b("div", He, [
                          b("div", Ne, [
                            Xe,
                            b("div", Re, [b("div", Ze, Y(e.title), 1)]),
                          ]),
                          b(
                            "div",
                            {
                              class: h([
                                "nav_link-btm",
                                { active: s.value === l },
                              ]),
                            },
                            [b("p", Ye, Y(e.content), 1), We],
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
              b(
                "div",
                {
                  class: "move-item",
                  style: Z({
                    left: "" + (l.value ? `calc(${w(r)}% - 4px)` : "auto"),
                    right: "" + (l.value ? "auto" : `calc(${w(n)}% - 4px)`),
                    width: `calc(${c.value}% + 8px)`,
                  }),
                },
                null,
                4
              ),
            ]),
            Ge,
          ],
          2
        )
      );
    },
  },
  $e = { key: 0 },
  Je = ["src"],
  Qe = ["src"],
  ea = [b("div", null, null, -1), b("div", null, null, -1)],
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
              y(
                _,
                null,
                [
                  b(
                    "div",
                    {
                      class: h(["layout-deafult-header", { active: a.value }]),
                    },
                    [
                      b(
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
                              y(
                                "img",
                                { key: 1, src: w(ke)("logo.png"), alt: "" },
                                null,
                                8,
                                Qe
                              ))
                            : (g(),
                              y("div", $e, [
                                b(
                                  "img",
                                  { src: w(ke)("logo.png"), alt: "" },
                                  null,
                                  8,
                                  Je
                                ),
                              ])),
                        ],
                        2
                      ),
                      b(
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
                      z(
                        Ke,
                        { key: 0, "is-open": a.value, onToggleOpen: t },
                        null,
                        8,
                        ["is-open"]
                      ))
                    : E("", !0),
                ],
                64
              )
            );
          },
        },
      },
      setup() {
        const { t: e } = Fe();
        return { t: e };
      },
    },
    [
      [
        "render",
        function (e, a, t, s, l, i) {
          const o = S("LayoutHeader");
          return (
            g(), y(_, null, [A(o), b("div", aa, [W(e.$slots, "default")])], 64)
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
      return g(), y("div", la, [W(e.$slots, "default")]);
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
for (let Vo in oa) {
  const e = Vo.replace("../layouts/", "").toLowerCase().replace(".vue", "");
  ra.push({ componentName: e, component: oa[Vo].default });
}
const na = {
  install: (e) => {
    ra.forEach((a) => {
      e.component(a.componentName, a.component);
    });
  },
};
const ca = {
    props: { title: {}, goBackButton: { type: Boolean, default: !1 } },
    setup() {
      const e = X();
      return {
        goBack: () => {
          e.options.history.state.back
            ? e.back()
            : e.push({ name: "default-path" });
        },
      };
    },
  },
  da = {
    class: "relative flex items-center justify-center text-36 h-24 w-full",
  },
  pa = { class: "font-bold" },
  va = { class: "absolute right-8 top-6" };
var ma = Se(ca, [
    [
      "render",
      function (e, a, t, s, l, i) {
        return (
          g(),
          y("div", da, [
            t.goBackButton
              ? (g(),
                y("div", {
                  key: 0,
                  class: "go-back absolute left-3 top-6",
                  onClick:
                    a[0] || (a[0] = (...e) => s.goBack && s.goBack(...e)),
                }))
              : E("", !0),
            b("div", pa, [
              W(e.$slots, "title", {}, () => [G(Y(t.title), 1)], !0),
            ]),
            b("div", va, [W(e.$slots, "actions", {}, void 0, !0)]),
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
const ua = () => K("popup-service");
const ga = {
    class: "popup-modal swal2-popup swal2-modal swal2-confirm",
    tabindex: "-1",
    style: { display: "grid" },
  },
  ya = { class: "swal2-title", style: { display: "block" } },
  ba = { class: "swal2-html-container", style: { display: "block" } },
  ha = { class: "swal2-actions", style: { display: "flex" } };
var wa = Se({}, [
  [
    "render",
    function (e, a) {
      return (
        g(),
        y("div", ga, [
          b("h2", ya, [W(e.$slots, "title")]),
          b("div", ba, [W(e.$slots, "content")]),
          b("div", ha, [W(e.$slots, "actions")]),
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
            n(), e && c("timer");
          }, a)));
      });
      const c = async (e) => {
          if (r) {
            if (!t.value.allowDismissWhenTimerRunning) return;
            n();
          }
          if (o.value && "onDismissed" in o.value) {
            const t = await o.value.onDismissed();
            t && (s({ isDismissed: !0, dismiss: e, result: t }), a.clear());
          } else s({ isDismissed: !0, dismiss: e }), a.clear();
        },
        d = async () => {
          t.value.allowOutsideClick && c("backdrop");
        },
        p = async () => {
          c("cancel");
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
        z(ee, { to: "body" }, [
          A(
            Q,
            { name: "popup", duration: "600" },
            {
              default: O(() => {
                var e;
                return [
                  w(t).$display
                    ? (g(),
                      y("div", _a, [
                        (g(),
                        z(
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
                          $(
                            {
                              title: O(() => [G(Y(w(t).title), 1)]),
                              content: O(() => [
                                w(t).component
                                  ? (g(),
                                    z(
                                      T(w(t).component),
                                      J(
                                        { key: 0, ref_key: "compRef", ref: o },
                                        w(t).props
                                      ),
                                      null,
                                      16
                                    ))
                                  : (g(), y("div", xa, Y(w(t).text), 1)),
                              ]),
                              actions: O(() => [
                                w(t).showCancelButton
                                  ? (g(),
                                    y(
                                      "button",
                                      {
                                        key: 0,
                                        type: "button",
                                        class: "cancel-button",
                                        onClick: p,
                                      },
                                      Y(w(t).cancelButtonText),
                                      1
                                    ))
                                  : E("", !0),
                                w(t).showConfirmButton
                                  ? (g(),
                                    y(
                                      "button",
                                      {
                                        key: 1,
                                        type: "button",
                                        class: "confirm-button",
                                        onClick: v,
                                      },
                                      Y(w(t).confirmButtonText),
                                      1
                                    ))
                                  : E("", !0),
                              ]),
                              _: 2,
                            },
                            [
                              w(t).timer && w(t).timerProgress
                                ? {
                                    name: "timer",
                                    fn: O(() => [
                                      b(
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
                    : E("", !0),
                ];
              }),
              _: 1,
            }
          ),
          A(
            Q,
            {
              name: "popup-backdrop",
              "enter-active-class": "animate__animated animate__fadeIn",
              "leave-active-class": "animate__animated animate__fadeOut",
            },
            {
              default: O(() => [
                w(t).$display
                  ? (g(),
                    y(
                      "div",
                      {
                        key: 0,
                        class: "popup-backdrop",
                        style: Z({ background: w(i) }),
                        onClick: d,
                      },
                      null,
                      4
                    ))
                  : E("", !0),
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
for (let Vo in Ca) {
  const e = Vo.replace("../components/", "").toLowerCase().replace(".vue", "");
  qa.push({ componentName: e, component: Ca[Vo].default });
}
const Sa = {
  install: (e) => {
    qa.forEach((a) => {
      e.component(a.componentName, a.component);
    });
  },
};
class za {
  constructor() {
    return H.mixin({
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
    this.provider = new za();
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
    confirmButtonText: i = Ee.t("button.confirm"),
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
    confirmButtonText: s = Ee.t("button.confirm"),
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
Oa.prototype.install = function (e) {
  const a = "alert-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Ta = new Oa(),
  Aa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, AlertService: Oa, default: Ta },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class Ea {
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
const Ba = {
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
  La = (e, { rejectNil: a, rejectEmpty: t }) =>
    M(
      (s, l) => {
        const i = e[l];
        return (a && B(i)) || (t && se(i)) ? s : le(l, i, s);
      },
      {},
      F(e)
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
              (e.params = La(e.params, { rejectNil: a, rejectEmpty: t })),
            e.data &&
              ((e.data = La(e.data, { rejectNil: a, rejectEmpty: t })), s))
          ) {
            const a = new FormData();
            ie((t) => {
              e.data[t] instanceof Array
                ? ie((e) => {
                    a.append(`${t}[]`, e);
                  }, e.data[t])
                : a.append(t, e.data[t]);
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
  Pa = te.create();
(Pa.defaults.baseURL = {}.VITE_REMOTE_API),
  (Pa.defaults.validateStatus = (e) => e >= 200 && e < 300);
const Ma = {
  async "read/marquee"() {
    const e = await Pa.get("/app/user/news", {
        params: { type: 1 },
        novalidate: !0,
        noredirect: !0,
      }),
      a = await Pa.get("/app/withdraw", { novalidate: !0, noredirect: !0 });
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
const Fa = {
  async "read/marquee"() {
    const e = await Pa.get("/app/user/news", {
        params: { type: 1 },
        novalidate: !0,
        noredirect: !0,
      }),
      a = await Pa.get("/app/withdraw", { novalidate: !0, noredirect: !0 });
    return { marquee: e.data, withdraw: a.data };
  },
};
const Ua = {
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
      { __proto__: null, default: Fa },
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
      { __proto__: null, default: Ua },
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
let Ha = {};
const Na = (e, a, t) => {
  const [s, ...l] = e;
  return l.length
    ? { [s]: { namespaced: !0, modules: Na(l, a, t) } }
    : { [s]: { namespaced: !0, [a]: t } };
};
for (let Vo in Va) {
  const e = Vo.replace("../store/", "")
    .toLowerCase()
    .replace(".js", "")
    .split("/");
  Ha = ne(Ha, Na(re(e), oe(e), Va[Vo].default));
}
var Xa = Ha;
const Ra = {},
  Za = function (e, a) {
    return a && 0 !== a.length
      ? Promise.all(
          a.map((e) => {
            if ((e = `./${e}`) in Ra) return;
            Ra[e] = !0;
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
  },
  Ya = { class: "footer" },
  Wa = { class: "container" },
  Ga = { class: "row row-justify-center" },
  Ka = b(
    "div",
    { class: "col col-lg-3 col-md-12" },
    [
      b("div", { class: "footer_group cc-above" }, [
        b("h3", { class: "u-ts-6 u-text-secondary" }, "Email us"),
        b("ul", { role: "list", class: "footer_list" }, [
          b("li", { class: "footer_list-item" }, [
            b(
              "a",
              {
                href: "mailto:hello@basis.work",
                class: "footer_link w-inline-block",
              },
              [b("div", { class: "u-ts-3" }, "hello@basis.work")]
            ),
          ]),
        ]),
      ]),
      b("div", { class: "footer_group" }, [
        b("h3", { class: "u-ts-6 u-text-secondary" }, "Social"),
        b("ul", { role: "list", class: "footer_list" }, [
          b("li", { class: "footer_list-item" }, [
            b(
              "a",
              {
                href: "https://www.instagram.com/basis.work/",
                target: "_blank",
                class: "footer_link w-inline-block",
              },
              [b("div", { class: "u-ts-3" }, "Instagram")]
            ),
          ]),
          b("li", { class: "footer_list-item" }, [
            b(
              "a",
              {
                href: "https://www.linkedin.com/company/basisstudio/",
                target: "_blank",
                class: "footer_link w-inline-block",
              },
              [b("div", { class: "u-ts-3" }, "Linkedin")]
            ),
          ]),
        ]),
      ]),
    ],
    -1
  ),
  $a = b(
    "div",
    { class: "col col-lg-3 col-md-12" },
    [
      b("div", { class: "footer_group" }, [
        b("h3", { class: "u-ts-6 u-text-secondary" }, "Navigation"),
        b("ul", { role: "list", class: "footer_list" }, [
          b("li", { class: "footer_list-item" }, [
            b("a", { href: "/", class: "footer_link w-inline-block" }, [
              b("div", { class: "u-ts-3" }, "Overview"),
            ]),
          ]),
          b("li", { class: "footer_list-item" }, [
            b("a", { href: "/cases", class: "footer_link w-inline-block" }, [
              b("div", { class: "u-ts-3" }, "Cases"),
            ]),
          ]),
          b("li", { class: "footer_list-item" }, [
            b("a", { href: "/about", class: "footer_link w-inline-block" }, [
              b("div", { class: "u-ts-3" }, "Services"),
            ]),
          ]),
          b("li", { class: "footer_list-item" }, [
            b(
              "a",
              { href: "/design-trial", class: "footer_link w-inline-block" },
              [b("div", { class: "u-ts-3" }, "Design Trial")]
            ),
          ]),
          b("li", { class: "footer_list-item" }, [
            b(
              "a",
              {
                href: "/fintech-design",
                "aria-current": "page",
                class: "footer_link w-inline-block w--current",
              },
              [b("div", { class: "u-ts-3" }, "Fintech Design")]
            ),
          ]),
        ]),
      ]),
    ],
    -1
  ),
  Ja = b("div", { class: "col col-md-hide" }, null, -1),
  Qa = { class: "col col-lg-4 col-md-12 col-md-first" },
  et = { href: "/", class: "footer-wordmark w-inline-block" },
  at = { class: "wordmark w-embed" },
  tt = ["src"],
  st = b(
    "div",
    { class: "footer-copyright" },
    [
      b("div", { "data-copyright": "" }, [
        G(" Copyright © "),
        b("span", { "data-dynamic": "year" }, "2024"),
      ]),
    ],
    -1
  ),
  lt = {
    setup: (e) => (e, a) => (
      g(),
      y("footer", Ya, [
        b("div", Wa, [
          b("div", Ga, [
            Ka,
            $a,
            Ja,
            b("div", Qa, [
              b("a", et, [
                b("div", at, [
                  b("img", { src: w(ke)("logo.png"), alt: "" }, null, 8, tt),
                ]),
              ]),
            ]),
          ]),
          st,
        ]),
      ])
    ),
  },
  it = {
    components: { Footer: lt },
    setup() {
      const { t: e } = Fe();
      return { t: e };
    },
  },
  ot = b(
    "header",
    { "data-mouse-class": "cc-icon", class: "header cc-large" },
    [
      b("div", { class: "nav_mode w-embed" }),
      b(
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
          b("img", {
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
          b(
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
              b("div", { class: "iframe-video_wrapper" }, [
                b("iframe", {
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
                b("div", { class: "iframe-video_blocker" }),
              ]),
            ]
          ),
        ]
      ),
      b("div", { class: "header-content_wrapper" }, [
        b("div", { class: "container" }, [
          b("div", { class: "row" }, [
            b(
              "div",
              {
                "data-animation-trigger": "transition",
                "data-animation-element": "group",
                class: "col col-lg-6 col-md-12",
              },
              [
                b("div", { class: "header-content_main" }, [
                  b("div", { class: "text-wrap-balance" }, [
                    b(
                      "h1",
                      {
                        "data-animation-element": "title",
                        class: "h4",
                        style: {},
                      },
                      [
                        b(
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
                            b(
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
                            b(
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
                            b(
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
                            b(
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
                        b(
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
                            b(
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
                            b(
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
                            b(
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
                        b(
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
                            b(
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
                            b(
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
                            b(
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
                            b(
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
                        b(
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
                            b(
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
                            b(
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
                            b(
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
                  b(
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
                      b("div", { class: "header-content_icon w-embed" }, [
                        b(
                          "svg",
                          {
                            width: "100%",
                            style: {},
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          [
                            b("path", {
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
      b("div", { "data-transition": "in", class: "header-trigger" }),
    ],
    -1
  ),
  rt = b("div", { class: "spacing" }, null, -1),
  nt = b(
    "section",
    { class: "section" },
    [
      b("div", { class: "section-title_component" }, [
        b("div", { class: "container" }, [
          b("div", { class: "section-title_wrapper" }, [
            b("div", { class: "section-title_dot", style: { opacity: "1" } }, [
              b("div", {
                class: "section-title_dot-fill",
                style: { width: "100%", height: "100%" },
              }),
            ]),
            b("div", { class: "u-overflow-hidden" }, [
              b(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [b("h2", { class: "u-ts-4" }, "Work with Basis")]
              ),
            ]),
          ]),
        ]),
      ]),
      b("div", { class: "container" }, [
        b("div", { class: "w-layout-grid pair-grid" }, [
          b(
            "div",
            { id: "w-node-e8a07e93-34f6-be32-54f2-b34bf2439e43-af55239f" },
            [
              b("div", { class: "case-details is-about" }, [
                b("div", { class: "u-ts-4" }, [
                  b("div", { class: "u-overflow-hidden" }, [
                    b(
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
                        b(
                          "h2",
                          { class: "u-ts-4 u-text-mid" },
                          "Project inquiries"
                        ),
                      ]
                    ),
                  ]),
                  b(
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
                b("div", { class: "u-ts-4" }, [
                  b("div", { class: "u-overflow-hidden" }, [
                    b(
                      "div",
                      {
                        class: "case-detail_title cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [b("h2", { class: "u-ts-4 u-text-mid" }, "Join the team")]
                    ),
                  ]),
                  b(
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
          b(
            "div",
            {
              id: "w-node-_2eada710-eca2-ae0e-be9f-54fbff32a11c-af55239f",
              class: "content",
            },
            [
              b(
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
                  b(
                    "p",
                    { class: "u-ts-1 u-mb-0" },
                    " Startups and enterprises hire us when they can’t afford to fail. As the technology of our world gets increasingly more complex, your brand and product are being asked to adapt to more situations, more platforms, more devices, and a more global audience than ever. That’s why you need the expertise of a studio that builds true systems: From the first touch of brand awareness to the product needs of your most engaged user, Basis sees it all as part of one holistic experience. "
                  ),
                ]
              ),
              b("div", { class: "btn-group" }, [
                b(
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
                    b(
                      "a",
                      {
                        href:
                          "https://calendly.com/basis-studio/30min?month=2024-02",
                        target: "_blank",
                        class: "btn w-inline-block",
                      },
                      [
                        b("div", { class: "btn-text-wrap" }, [
                          b("div", { class: "btn-text" }, "Start a project"),
                          b(
                            "div",
                            { class: "btn-text cc-bottom" },
                            "Start a project"
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
                b(
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
                    b(
                      "a",
                      {
                        href: "/design-trial",
                        class: "btn cc-secondary w-inline-block",
                      },
                      [
                        b("div", { class: "btn-text-wrap" }, [
                          b("div", { class: "btn-text" }, "Design trial"),
                          b(
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
        b("div", { class: "sticky-pair cc-far" }, [
          b("div", { class: "w-layout-grid pair-grid" }, [
            b("div", { class: "div-block" }, [
              b("div", { class: "card-wrapper cc-small" }, [
                b("div", { class: "card-animation cc-40" }, [
                  b(
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
                      b("div", { class: "card-image_wrapper" }, [
                        b("img", {
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
            b("div", { class: "card-wrapper cc-large" }, [
              b("div", { class: "card-animation cc-40" }, [
                b(
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
                    b("div", { class: "card-image_wrapper" }, [
                      b("img", {
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
            b(
              "div",
              {
                id: "w-node-ce72eb91-efb6-6f0b-43b7-a66f9003cbae-af55239f",
                class: "content",
              },
              [
                b(
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
                    b(
                      "p",
                      { class: "u-ts-1" },
                      " Whether it’s shaping a new venture 0 → 1, evolving an existing company 1 → N, or taking an industry leader from N → XYZ, Basis has a formula that delivers results in record time. Our team is respected for crafting world-class experiences through our signature Product and Brand Trials, led by Michal Škvarenina, the design director behind digital experiences for Google, Airbnb, Red Bull, Mastercard, PC Financial, and more. "
                    ),
                  ]
                ),
                b(
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
                    b(
                      "p",
                      { class: "u-ts-1" },
                      " When you want to build enduring digital products for an increasingly-digital future, first establish your Basis. "
                    ),
                  ]
                ),
                b("div", { class: "btn-group" }, [
                  b(
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
                      b(
                        "a",
                        {
                          href:
                            "https://calendly.com/basis-studio/30min?month=2024-02",
                          target: "_blank",
                          class: "btn w-inline-block",
                        },
                        [
                          b("div", { class: "btn-text-wrap" }, [
                            b("div", { class: "btn-text" }, "Start a project"),
                            b(
                              "div",
                              { class: "btn-text cc-bottom" },
                              "Start a project"
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  b(
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
                      b(
                        "a",
                        {
                          href: "/design-trial",
                          class: "btn cc-secondary w-inline-block",
                        },
                        [
                          b("div", { class: "btn-text-wrap" }, [
                            b("div", { class: "btn-text" }, "Design trial"),
                            b(
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
      b("div", { class: "u-mt-8-75", "data-v-57509004": "" }, [
        b("div", { class: "marquee", "data-v-57509004": "" }, [
          b("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            b(
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b(
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
                        b("img", {
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b(
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
                        b("img", {
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b(
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
                        b("img", {
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b(
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
                        b("img", {
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b(
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
                        b("img", {
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b(
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
                        b("img", {
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b(
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
                        b("img", {
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b(
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
                        b("img", {
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b(
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
                        b("img", {
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
          b("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            b(
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
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
          b("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            b(
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
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                b(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    b("img", {
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
  ct = b(
    "section",
    { class: "section" },
    [
      b("div", { class: "section-title_component" }, [
        b("div", { class: "container" }, [
          b("div", { class: "section-title_wrapper" }, [
            b("div", { class: "section-title_dot", style: { opacity: "1" } }),
            b("div", { class: "u-overflow-hidden" }, [
              b(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [b("h2", { class: "u-ts-4" }, "What we do")]
              ),
            ]),
          ]),
        ]),
      ]),
      b("div", { class: "container" }, [
        b("div", { "data-animation-element": "group", class: "row" }, [
          b("div", { class: "col col-lg-4 col-md-hide" }),
          b("div", { class: "col" }, [
            b("div", { class: "service-list" }, [
              b("div", { class: "logomark_component" }, [
                b(
                  "div",
                  {
                    class: "logomark w-embed",
                    style: {
                      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [
                    b(
                      "svg",
                      {
                        height: "100%",
                        style: {},
                        viewBox: "0 0 185 80",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      [
                        b("path", {
                          d:
                            "M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z",
                          fill: "currentColor",
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
              b("ul", { role: "list", class: "u-mt-3-5" }, [
                b("li", { class: "u-overflow-hidden" }, [
                  b(
                    "div",
                    {
                      class: "list-content cc-1",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [b("h3", { class: "u-tc-caps" }, "Research")]
                  ),
                ]),
                b("li", { class: "u-overflow-hidden" }, [
                  b(
                    "div",
                    {
                      class: "list-content cc-2",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [b("h3", { class: "u-tc-caps" }, "Brand Strategy")]
                  ),
                ]),
                b("li", { class: "u-overflow-hidden" }, [
                  b(
                    "div",
                    {
                      class: "list-content cc-3",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [b("h3", { class: "u-tc-caps" }, "Creative Direction")]
                  ),
                ]),
                b("li", { class: "u-overflow-hidden" }, [
                  b(
                    "div",
                    {
                      class: "list-content cc-4",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [b("h3", { class: "u-tc-caps" }, "Brand identity")]
                  ),
                ]),
                b("li", { class: "u-overflow-hidden" }, [
                  b(
                    "div",
                    {
                      class: "list-content cc-5",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [b("h3", { class: "u-tc-caps" }, "UX & UI Design")]
                  ),
                ]),
                b("li", { class: "u-overflow-hidden" }, [
                  b(
                    "div",
                    {
                      class: "list-content cc-6",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [b("h3", { class: "u-tc-caps" }, "Interaction Design")]
                  ),
                ]),
                b("li", { class: "u-overflow-hidden" }, [
                  b(
                    "div",
                    {
                      class: "list-content cc-7",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [b("h3", { class: "u-tc-caps" }, "Implementation")]
                  ),
                ]),
                b("li", { class: "u-overflow-hidden" }, [
                  b(
                    "div",
                    {
                      class: "list-content cc-8",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [b("h3", { class: "u-tc-caps" }, "Webflow Development")]
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
  dt = ce(
    '<section class="section"><div class="section-title_component"><div class="container"><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700"><div class="section-title_dot" style="opacity:1;"></div><div class="u-overflow-hidden"><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><h2 class="u-ts-4">Contact Us</h2></div></div></div></div></div><div class="container"><div class="w-layout-grid pair-grid"><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext"><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"><div style="position:relative;display:inline-block;"> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    1
  );
var pt = Se(it, [
    [
      "render",
      function (e, a, t, s, l, i) {
        const o = S("Footer");
        return g(), y(_, null, [ot, rt, nt, ct, dt, A(o)], 64);
      },
    ],
  ]),
  vt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: pt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const mt = {
    title: "pages.home.nav.about",
    setup() {
      const { t: e } = Fe();
      return { t: e };
    },
  },
  ft = { class: "about" },
  ut = [
    b(
      "div",
      { role: "listitem", class: "cases-item w-dyn-item" },
      [
        b(
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
            b("div", { class: "cases-assets" }, [
              b("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                loading: "lazy",
                alt: "",
                class: "cases-portrait",
              }),
              b("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                loading: "eager",
                alt: "",
                class: "cases-landscape",
              }),
              b("div", { class: "iframe-video_wrapper" }, [
                b("iframe", {
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
                b("div", { class: "iframe-video_blocker" }),
              ]),
            ]),
            b("div", { class: "cases-text" }, [
              b("div", { class: "u-ts-2" }, "Sable Brand"),
            ]),
          ]
        ),
        b("link", { rel: "prerender", href: "/cases/sable-brand" }),
        b(
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
            b("div", { class: "cases-assets" }, [
              b("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                loading: "lazy",
                alt: "",
                class: "cases-portrait w-condition-invisible",
              }),
              b("img", {
                src:
                  "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                loading: "lazy",
                alt: "",
                class: "cases-landscape w-condition-invisible",
              }),
              b("div", null, [
                b("div", { class: "iframe-video_wrapper" }, [
                  b("iframe", {
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
                  b("div", { class: "iframe-video_blocker" }),
                ]),
              ]),
            ]),
            b("div", { class: "cases-text" }, [
              b("div", { class: "cases-more" }, [
                b("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                  G(" Contact us"),
                  b("span", { class: "hide-tablet" }, " for more"),
                ]),
              ]),
              b("div", { class: "u-ts-2" }, "Sable Brand"),
            ]),
          ]
        ),
      ],
      -1
    ),
  ];
var gt = Se(mt, [
    [
      "render",
      function (e, a, t, s, l, i) {
        return g(), y("div", ft, ut);
      },
    ],
  ]),
  yt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const bt = {
    layout: "layout-demo",
    setup() {
      const e = ua(),
        { t: a, locale: t, setPrefix: s, change: l } = Fe();
      s({ $current: "pages.demo" });
      const i = X(),
        o = K("alert-service"),
        r = de({ current: t.value || "zh-tw" });
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
  ht = { class: "demo" },
  wt = { class: "demo-head" },
  _t = { class: "switch" },
  xt = b("input", { type: "checkbox", class: "cb" }, null, -1),
  kt = [
    b("span", { class: "left" }, "CN", -1),
    b("span", { class: "right" }, "En", -1),
  ],
  jt = { class: "demo-head-content" },
  Ct = { class: "demo-actions" },
  qt = { class: "radio-inputs" },
  St = b("input", { type: "radio", name: "radio", checked: "" }, null, -1),
  zt = { class: "name" },
  Ot = b("input", { type: "radio", name: "radio" }, null, -1),
  Tt = { class: "name" },
  At = b("input", { type: "radio", name: "radio" }, null, -1),
  Et = { class: "name" };
var Bt = Se(bt, [
    [
      "render",
      function (e, a, t, s, l, i) {
        return (
          g(),
          y("div", ht, [
            b("div", wt, [
              b("div", null, [
                b("label", _t, [
                  xt,
                  b(
                    "span",
                    {
                      class: "toggle",
                      onClick:
                        a[0] ||
                        (a[0] = (...e) => s.changeLang && s.changeLang(...e)),
                    },
                    kt
                  ),
                ]),
              ]),
              b("div", jt, "lang:" + Y(s.lang.current), 1),
            ]),
            b("div", Ct, [
              b("div", qt, [
                b(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[1] || (a[1] = (...e) => s.toHome && s.toHome(...e)),
                  },
                  [St, b("span", zt, Y(s.t("$current.router.link")), 1)]
                ),
                b(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[2] ||
                      (a[2] = (...e) => s.swalModal && s.swalModal(...e)),
                  },
                  [Ot, b("span", Tt, Y(s.t("$current.modal.swal")), 1)]
                ),
                b(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[3] ||
                      (a[3] = (...e) => s.popupModal && s.popupModal(...e)),
                  },
                  [At, b("span", Et, Y(s.t("$current.popup.use")), 1)]
                ),
              ]),
            ]),
          ])
        );
      },
    ],
  ]),
  Lt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Bt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const It = (e) =>
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
  Pt = {
    components: { Footer: lt },
    setup() {
      const { t: e } = Fe();
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
        { t: e, getVideoUrl: It }
      );
    },
  },
  Mt = { "data-mouse-class": "cc-icon", class: "header cc-large" },
  Dt = {
    class: "header-image_wrap",
    style: {
      transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)",
      "transform-style": "preserve-3d",
    },
  },
  Ft = {
    class: "header-image",
    style: {
      "will-change": "transform",
      transform: "translate3d(0px, -0.0648%, 0px)",
      "transform-style": "preserve-3d",
    },
  },
  Ut = { class: "iframe-video_wrapper" },
  Vt = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Ht = ["src"],
  Nt = G(" Your browser does not support the video tag. "),
  Xt = b("div", { class: "iframe-video_blocker" }, null, -1),
  Rt = ce(
    '<div class="header-content_wrapper"><div class="container"><div class="row"><div data-animation-trigger="transition" data-animation-element="group" class="col col-lg-6 col-md-12"><div class="header-content_main"><div class="text-wrap-balance"><h1 data-animation-element="title" class="h4" style=""><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> The </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> agency </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> for </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> the </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> next </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> generation </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> of </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> fintech. </div></div></h1></div><div class="header-content_cta" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;"><div class="header-content_icon w-embed"><svg width="100%" style="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4384 2.2207C10.6795 2.2207 10.875 2.40725 10.875 2.63737V16.1124L14.7524 12.404C14.8344 12.3252 14.946 12.2808 15.0624 12.2808C15.1788 12.2808 15.2904 12.3252 15.3724 12.404L15.9837 12.9957C16.0664 13.0739 16.1128 13.1804 16.1128 13.2915C16.1128 13.4026 16.0664 13.5091 15.9837 13.5874L10.6305 18.704C10.5078 18.8213 10.3413 18.8872 10.1677 18.8874H9.83581C9.66254 18.8854 9.49674 18.8198 9.37298 18.704L4.01978 13.5874C3.93712 13.5091 3.89062 13.4026 3.89062 13.2915C3.89062 13.1804 3.93712 13.0739 4.01978 12.9957L4.63981 12.404C4.72029 12.3256 4.83046 12.2815 4.94546 12.2815C5.06046 12.2815 5.17062 12.3256 5.2511 12.404L9.12846 16.1124V2.63737C9.12846 2.40725 9.32395 2.2207 9.5651 2.2207H10.4384Z" fill="black"></path></svg></div></div></div></div></div></div></div><div data-transition="in" class="header-trigger"></div>',
    2
  ),
  Zt = b("div", { class: "spacing" }, null, -1),
  Yt = b(
    "div",
    { class: "container" },
    [b("div", { class: "target_line" })],
    -1
  ),
  Wt = b(
    "section",
    { class: "section" },
    [
      b("div", { class: "section-title_component" }, [
        b("div", { class: "container" }, [
          b("div", { class: "section-title_wrapper" }, [
            b("div", { class: "section-title_dot", style: { opacity: "1" } }, [
              b("div", {
                class: "section-title_dot-fill",
                style: { width: "100%", height: "100%" },
              }),
            ]),
            b("div", { class: "u-overflow-hidden" }, [
              b(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [b("h2", { class: "u-ts-4" }, "Fintech Design Specialists")]
              ),
            ]),
          ]),
        ]),
      ]),
      b("div", { class: "container" }, [
        b("div", { class: "w-layout-grid pair-grid" }, [
          b(
            "div",
            {
              id: "w-node-_88e3e548-f2e0-1176-a852-0e15f232b846-af55239c",
              class: "content",
            },
            [
              b(
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
                  b(
                    "p",
                    { class: "u-ts-1 u-mb-0" },
                    " It’s an industry unlike any other. From credit cards to neobanks and personal finance apps, the whole array of fintech is a crowded, highly-regulated landscape that demands the attention of specialists. The world is going through a digital finance revolution—find your product's place in it with Basis. "
                  ),
                ]
              ),
            ]
          ),
        ]),
        b("div", { class: "sticky-pair cc-far" }, [
          b("div", { class: "w-layout-grid pair-grid" }, [
            b("div", { class: "div-block" }, [
              b("div", { class: "card-wrapper cc-small" }, [
                b("div", { class: "card-animation cc-40" }, [
                  b(
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
                      b("div", { class: "card-image_wrapper" }, [
                        b("div", { class: "iframe-video_wrapper" }, [
                          b("iframe", {
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
                          b("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      b("div", { class: "card-body" }, [
                        b("div", { class: "u-overflow-hidden" }, [
                          b(
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
                              b(
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
            b("div", { class: "card-wrapper cc-large" }, [
              b("div", { class: "card-animation cc-40" }, [
                b(
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
                    b("div", { class: "card-image_wrapper" }, [
                      b("div", { class: "iframe-video_wrapper" }, [
                        b("iframe", {
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
                        b("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    b("div", { class: "card-body" }, [
                      b("div", { class: "u-overflow-hidden" }, [
                        b(
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
                            b("div", { class: "card-large_text" }, [
                              b(
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
            b(
              "div",
              {
                id: "w-node-_197491fd-e75f-5caa-bd6c-f56fc5e78edc-af55239c",
                class: "content",
              },
              [
                b(
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
                    b(
                      "p",
                      { class: "u-ts-1" },
                      " After rebranding banks, producing sleek new cards, and seamlessly integrating those elements into cohesive, future-proof brands, Basis can deliver results in record time. Get started with our Fintech Trial and get design results for your most essential deliverables in three weeks. "
                    ),
                  ]
                ),
                b("div", { class: "btn-group" }, [
                  b(
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
                      b(
                        "a",
                        {
                          href: "mailto:hello@basis.work?subject=Enquiry",
                          class: "btn w-inline-block",
                        },
                        [
                          b("div", { class: "btn-text-wrap" }, [
                            b("div", { class: "btn-text" }, "Contact Us"),
                            b(
                              "div",
                              { class: "btn-text cc-bottom" },
                              "Contact Us"
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  b(
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
                      b(
                        "a",
                        {
                          href: "/design-trial",
                          class: "btn cc-secondary w-inline-block",
                        },
                        [
                          b("div", { class: "btn-text-wrap" }, [
                            b(
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
                            b(
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
  Gt = b(
    "div",
    { class: "container" },
    [b("div", { class: "target_line" })],
    -1
  ),
  Kt = b(
    "section",
    { class: "section" },
    [
      b("div", { class: "section-title_component" }, [
        b("div", { class: "container" }, [
          b("div", { class: "section-title_wrapper" }, [
            b("div", { class: "section-title_dot", style: { opacity: "1" } }),
            b("div", { class: "u-overflow-hidden" }, [
              b(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [b("h2", { class: "u-ts-4" }, "Fintech Capabilities")]
              ),
            ]),
          ]),
        ]),
      ]),
      b("div", { class: "container" }, [
        b("div", { class: "w-layout-grid pair-grid" }, [
          b(
            "div",
            {
              id: "w-node-b0cbec4a-56c8-e8e7-790a-68e14ee2ef27-af55239c",
              class: "service-list",
            },
            [
              b("div", { class: "service-list" }, [
                b("div", { class: "logomark_component" }, [
                  b(
                    "div",
                    {
                      class: "logomark w-embed",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [
                      b(
                        "svg",
                        {
                          height: "100%",
                          style: {},
                          viewBox: "0 0 185 80",
                          fill: "currentColor",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          b("path", {
                            d:
                              "M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z",
                            fill: "currentColor",
                          }),
                        ]
                      ),
                    ]
                  ),
                ]),
                b("ul", { role: "list", class: "u-mt-3-5" }, [
                  b("li", { class: "u-overflow-hidden" }, [
                    b(
                      "div",
                      {
                        class: "list-content cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [b("h3", { class: "u-tc-caps" }, "Digital Banking,")]
                    ),
                  ]),
                  b("li", { class: "u-overflow-hidden" }, [
                    b(
                      "div",
                      {
                        class: "list-content cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [b("h3", { class: "u-tc-caps" }, "Credit Card Designs,")]
                    ),
                  ]),
                  b("li", { class: "u-overflow-hidden" }, [
                    b(
                      "div",
                      {
                        class: "list-content cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [b("h3", { class: "u-tc-caps" }, "Digital Wallets,")]
                    ),
                  ]),
                  b("li", { class: "u-overflow-hidden" }, [
                    b(
                      "div",
                      {
                        class: "list-content cc-4",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [b("h3", { class: "u-tc-caps" }, "Payment Services,")]
                    ),
                  ]),
                  b("li", { class: "u-overflow-hidden" }, [
                    b(
                      "div",
                      {
                        class: "list-content cc-5",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [b("h3", { class: "u-tc-caps" }, "Card Packaging,")]
                    ),
                  ]),
                  b("li", { class: "u-overflow-hidden" }, [
                    b(
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
                        b(
                          "h3",
                          { class: "u-tc-caps" },
                          "Information Architecture,"
                        ),
                      ]
                    ),
                  ]),
                  b("li", { class: "u-overflow-hidden" }, [
                    b(
                      "div",
                      {
                        class: "list-content cc-7",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [b("h3", { class: "u-tc-caps" }, "Mobile Apps,")]
                    ),
                  ]),
                  b("li", { class: "u-overflow-hidden" }, [
                    b(
                      "div",
                      {
                        class: "list-content cc-8",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [b("h3", { class: "u-tc-caps" }, "Prototypes,")]
                    ),
                  ]),
                  b("li", { class: "u-overflow-hidden" }, [
                    b(
                      "div",
                      {
                        class: "list-content cc-9",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [b("h3", { class: "u-tc-caps" }, "Gamification.")]
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
  $t = b(
    "div",
    { class: "container" },
    [b("div", { class: "target_line" })],
    -1
  ),
  Jt = b(
    "section",
    { class: "section" },
    [
      b("div", { class: "section-title_component" }, [
        b("div", { class: "container" }, [
          b("div", { class: "section-title_wrapper" }, [
            b("div", { class: "section-title_dot", style: { opacity: "1" } }),
            b("div", { class: "u-overflow-hidden" }, [
              b(
                "div",
                {
                  class: "section-title_title",
                  style: {
                    transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                    "transform-style": "preserve-3d",
                  },
                },
                [b("h2", { class: "u-ts-4" }, "Fintech Work")]
              ),
            ]),
          ]),
        ]),
      ]),
      b("div", { class: "container" }, [
        b("div", { class: "row" }, [b("div", { class: "col" })]),
        b("div", { class: "w-dyn-list" }, [
          b("div", { role: "list", class: "row w-dyn-items" }, [
            b("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              b(
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
                  b(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-brand",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      b("div", { class: "cases-assets" }, [
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait w-condition-invisible",
                        }),
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape w-condition-invisible",
                        }),
                        b("div", null, [
                          b("div", { class: "iframe-video_wrapper" }, [
                            b("iframe", {
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
                            b("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]),
                      ]),
                      b("div", { class: "cases-text cc-auto" }, [
                        b("div", { class: "u-ts-2" }, "Sable Brand"),
                      ]),
                    ]
                  ),
                  b("link", { rel: "prerender", href: "/cases/sable-brand" }),
                  b(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      b("div", { class: "cases-assets" }, [
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        b("div", { class: "iframe-video_wrapper" }, [
                          b("iframe", {
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
                          b("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      b("div", { class: "cases-text" }, [
                        b("div", { class: "cases-more" }, [
                          b(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              G(" Contact us"),
                              b("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        b("div", { class: "u-ts-2" }, "Sable Brand"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            b("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              b(
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
                  b(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-website",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      b("div", { class: "cases-assets" }, [
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        b("div", { class: "w-condition-invisible" }, [
                          b("div", { class: "iframe-video_wrapper" }, [
                            b("iframe", {
                              class: "iframe-video_iframe",
                              width: "100%",
                              height: "100%",
                              style: { overflow: "hidden" },
                              frameborder: "0",
                              scrolling: "no",
                              allow: "fullscreen",
                              loading: "lazy",
                            }),
                            b("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]),
                      ]),
                      b("div", { class: "cases-text cc-auto" }, [
                        b("div", { class: "u-ts-2" }, "Sable Website"),
                      ]),
                    ]
                  ),
                  b("link", { rel: "prerender", href: "/cases/sable-website" }),
                  b(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      b("div", { class: "cases-assets" }, [
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        b("div", { class: "iframe-video_wrapper" }, [
                          b("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          b("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      b("div", { class: "cases-text" }, [
                        b("div", { class: "cases-more" }, [
                          b(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              G(" Contact us"),
                              b("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        b("div", { class: "u-ts-2" }, "Sable Website"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            b("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              b(
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
                  b(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/seen-brand",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      b("div", { class: "cases-assets" }, [
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait w-condition-invisible",
                        }),
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape w-condition-invisible",
                        }),
                        b("div", null, [
                          b("div", { class: "iframe-video_wrapper" }, [
                            b("iframe", {
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
                            b("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]),
                      ]),
                      b("div", { class: "cases-text cc-auto" }, [
                        b("div", { class: "u-ts-2" }, "Seen Brand"),
                      ]),
                    ]
                  ),
                  b("link", { rel: "prerender", href: "/cases/seen-brand" }),
                  b(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      b("div", { class: "cases-assets" }, [
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        b("div", { class: "iframe-video_wrapper" }, [
                          b("iframe", {
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
                          b("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      b("div", { class: "cases-text" }, [
                        b("div", { class: "cases-more" }, [
                          b(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              G(" Contact us"),
                              b("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        b("div", { class: "u-ts-2" }, "Seen Brand"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            b("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              b(
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
                  b(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-app",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      b("div", { class: "cases-assets" }, [
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        b("div", { class: "w-condition-invisible" }, [
                          b("div", { class: "iframe-video_wrapper" }, [
                            b("iframe", {
                              class: "iframe-video_iframe",
                              width: "100%",
                              height: "100%",
                              style: { overflow: "hidden" },
                              frameborder: "0",
                              scrolling: "no",
                              allow: "fullscreen",
                              loading: "lazy",
                            }),
                            b("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]),
                      ]),
                      b("div", { class: "cases-text cc-auto" }, [
                        b("div", { class: "u-ts-2" }, "Sable App"),
                      ]),
                    ]
                  ),
                  b("link", { rel: "prerender", href: "/cases/sable-app" }),
                  b(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      b("div", { class: "cases-assets" }, [
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-portrait",
                        }),
                        b("img", {
                          src:
                            "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                          loading: "lazy",
                          alt: "",
                          class: "cases-landscape",
                        }),
                        b("div", { class: "iframe-video_wrapper" }, [
                          b("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          b("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                      b("div", { class: "cases-text" }, [
                        b("div", { class: "cases-more" }, [
                          b(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              G(" Contact us"),
                              b("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        b("div", { class: "u-ts-2" }, "Sable App"),
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
  Qt = ce(
    '<div class="container"><div class="target_line"></div></div><section class="section"><div class="section-title_component"><div class="container"><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700"><div class="section-title_dot" style="opacity:1;"></div><div class="u-overflow-hidden"><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><h2 class="u-ts-4">Contact Us</h2></div></div></div></div></div><div class="container"><div class="w-layout-grid pair-grid"><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext"><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"><div style="position:relative;display:inline-block;"> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  ),
  es = { class: "pre-footer" },
  as = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  ts = { class: "iframe-video_wrapper" },
  ss = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  ls = ["src"],
  is = G(" Your browser does not support the video tag. "),
  os = b("div", { class: "iframe-video_blocker" }, null, -1),
  rs = ce(
    '<div class="pre-footer_gradient"></div><div class="marquee"><div class="marquee_content cc-text transparent" style="transform:translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;will-change:transform;"><div class="marquee_item cc-1 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-2 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-3 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div></div><div class="marquee_content cc-text transparent" style="transform:translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;will-change:transform;"><div class="marquee_item cc-1 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-2 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-3 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div></div></div><div class="pre-footer_button"><div class="btn cc-large-landscape"><div class="btn-text-wrap"><div class="btn-text cc-large-landscape">REad Next</div><div class="btn-text cc-bottom cc-large-landscape">Button</div></div></div></div>',
    3
  );
var ns = Se(Pt, [
    [
      "render",
      function (e, a, t, s, l, i) {
        const o = S("Footer");
        return (
          g(),
          y(
            _,
            null,
            [
              b("header", Mt, [
                b("div", Dt, [
                  b("div", Ft, [
                    b("div", Ut, [
                      b("video", Vt, [
                        b(
                          "source",
                          {
                            src: s.getVideoUrl("home/knife1-1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          Ht
                        ),
                        Nt,
                      ]),
                      Xt,
                    ]),
                  ]),
                ]),
                Rt,
              ]),
              Zt,
              Yt,
              Wt,
              Gt,
              Kt,
              $t,
              Jt,
              Qt,
              b("div", null, [
                b("aside", es, [
                  b("a", as, [
                    b("div", ts, [
                      b("video", ss, [
                        b(
                          "source",
                          {
                            src: s.getVideoUrl("home/knife1-1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          ls
                        ),
                        is,
                      ]),
                      os,
                    ]),
                    rs,
                  ]),
                ]),
              ]),
              A(o),
            ],
            64
          )
        );
      },
    ],
  ]),
  cs = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ns },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const ds = ["data-index"],
  ps = ["src"],
  vs = [
    ce(
      '<div class="btn-text-wrap"><div class="btn-text cc-scroll">請往下滑</div><div class="btn-text cc-bottom cc-scroll">請往下滑</div></div><div class="btn-icon cc-small w-embed"><svg width="100%" style="" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.30218 1.55469C7.47098 1.55469 7.60782 1.68527 7.60782 1.84635V11.2789L10.322 8.68302C10.3794 8.6278 10.4575 8.59675 10.539 8.59675C10.6205 8.59675 10.6986 8.6278 10.756 8.68302L11.1839 9.09719C11.2418 9.15195 11.2743 9.2265 11.2743 9.30427C11.2743 9.38204 11.2418 9.45659 11.1839 9.51135L7.43666 13.093C7.35076 13.1751 7.23423 13.2213 7.11267 13.2214H6.88038C6.75909 13.22 6.64303 13.174 6.5564 13.093L2.80916 9.51135C2.7513 9.45659 2.71875 9.38204 2.71875 9.30427C2.71875 9.2265 2.7513 9.15195 2.80916 9.09719L3.24318 8.68302C3.29952 8.62815 3.37663 8.59723 3.45713 8.59723C3.53763 8.59723 3.61475 8.62815 3.67109 8.68302L6.38523 11.2789V1.84635C6.38523 1.68527 6.52208 1.55469 6.69088 1.55469H7.30218Z" fill="currentColor"></path></svg></div>',
      2
    ),
  ];
const ms = {
  components: {
    Footer: lt,
    View: {
      setup(e) {
        const a = x(),
          t = de({ x: 0, y: 0 }),
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
              pe(() => {
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
          c = () => {
            n.value = window.innerWidth < 991;
          };
        return (
          q(() => {
            c(), window.addEventListener("resize", c), ve.init();
          }),
          (e, a) => (
            g(),
            y(
              _,
              null,
              [
                b(
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
                        y(
                          "div",
                          {
                            key: 0,
                            class: "view-wrap",
                            style: Z({
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
                            y(
                              _,
                              null,
                              R(
                                s.value,
                                (e, a) => (
                                  g(),
                                  y(
                                    "div",
                                    {
                                      class: "img-wrap home-hero_image-placer",
                                      key: e.url + a,
                                      style: Z({
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
                                      b(
                                        "img",
                                        {
                                          src: w(ke)(e.url),
                                          style: Z({
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
                                        ps
                                      ),
                                    ],
                                    12,
                                    ds
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          4
                        ))
                      : E("", !0),
                  ],
                  32
                ),
                b("div", { "data-reveal": "button", class: "home-hero_btn" }, [
                  b("div", { class: "btn-contain btn-contain-scroll" }, [
                    b(
                      "div",
                      { class: "btn-scroll w-inline-block", onClick: r },
                      vs
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
      { a: e, getVideoUrl: It, getImageUrl: ke }
    );
  },
};
ve.init();
const fs = (e) => (me("data-v-7e810c9c"), (e = e()), fe(), e),
  us = fs(() =>
    b("div", { class: "container" }, [b("div", { class: "target_line" })], -1)
  ),
  gs = { id: "studio", class: "section" },
  ys = ce(
    '<div class="section-title_component" data-v-7e810c9c><div class="container" data-v-7e810c9c><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-7e810c9c><div class="section-title_dot" style="opacity:1;" data-v-7e810c9c><div class="section-title_dot-fill" style="width:100%;height:100%;" data-v-7e810c9c></div></div><div class="u-overflow-hidden" data-v-7e810c9c><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><h2 class="u-ts-4" data-v-7e810c9c>詹紹綺人文藝術中心</h2></div></div></div></div></div><div class="container" data-v-7e810c9c><div class="w-layout-grid pair-grid" data-v-7e810c9c><div data-animation-element="group" id="w-node-_1d0de869-a418-1ffe-c192-cd0abecc9833-af552307" data-v-7e810c9c><h3 data-animation-element="title" style="" data-v-7e810c9c><div class="u-overflow-hidden" data-aos="fade-up" data-aos-duration="800" style="display:block;text-align:start;position:relative;" data-v-7e810c9c><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c> 位於25樓雲海之中的藝術與文化博物館， </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-aos="fade-up" data-aos-duration="700" data-v-7e810c9c><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c> 典藏冠軍高山茶、茶道具及名壺、雕塑、獨家出品普洱和單一純麥威士忌。 </div></div></h3><div class="btn-group" data-v-7e810c9c><div class="btn-item cc-1" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0px);opacity:1;" data-v-7e810c9c><a class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c> 館藏查詢 </div><div class="btn-text cc-bottom" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c> 館藏查詢 </div></div></a></div><div class="btn-item cc-2" data-aos="fade-up" data-aos-duration="3000" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0px);opacity:1;" data-v-7e810c9c><a href="/about" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c> 預約參觀 </div><div class="btn-text cc-bottom" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c> 預約參觀 </div></div></a></div></div></div></div></div>',
    2
  ),
  bs = { class: "u-mt-8-75" },
  hs = { class: "marquee" },
  ws = { class: "marquee_row w-dyn-list" },
  _s = {
    role: "list",
    class: "marquee_content w-dyn-items",
    style: {
      transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      "will-change": "transform",
    },
  },
  xs = { role: "listitem", class: "marquee_logo w-dyn-item" },
  ks = {
    class: "marquee_item cc-1",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  js = ["src"],
  Cs = { role: "listitem", class: "marquee_logo w-dyn-item" },
  qs = {
    class: "marquee_item cc-2",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ss = ["src"],
  zs = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Os = {
    class: "marquee_item cc-3",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ts = ["src"],
  As = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Es = {
    class: "marquee_item cc-4",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Bs = ["src"],
  Ls = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Is = {
    class: "marquee_item cc-5",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ps = ["src"],
  Ms = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Ds = {
    class: "marquee_item cc-6",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Fs = ["src"],
  Us = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Vs = {
    class: "marquee_item cc-7",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Hs = ["src"],
  Ns = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Xs = {
    class: "marquee_item cc-8",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Rs = ["src"],
  Zs = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Ys = {
    class: "marquee_item cc-9",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ws = ["src"],
  Gs = fs(() =>
    b("div", { class: "container" }, [b("div", { class: "target_line" })], -1)
  ),
  Ks = { class: "section" },
  $s = ce(
    '<div class="section-title_component" data-v-7e810c9c><div class="container" data-v-7e810c9c><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-7e810c9c><div class="section-title_dot" style="opacity:1;" data-v-7e810c9c><div class="section-title_dot-fill" style="width:100%;height:100%;" data-v-7e810c9c></div></div><div class="u-overflow-hidden" data-v-7e810c9c><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><h2 class="u-ts-4" data-v-7e810c9c>空間預約</h2></div></div></div></div></div>',
    1
  ),
  Js = { class: "container" },
  Qs = fs(() =>
    b(
      "div",
      { "data-animation-element": "group" },
      [
        b("h4", { "data-animation-element": "title", class: "h1", style: {} }, [
          b(
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
              b(
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
  el = { class: "sticky-pair" },
  al = { class: "w-layout-grid pair-grid" },
  tl = { id: "w-node-eb3e6ea8-5a10-d5fc-f561-3f621ba6f385-af552307" },
  sl = {
    id: "w-node-_137ddbb9-11b4-d169-f149-eca9f54873e8-af552307",
    class: "card-wrapper cc-small",
  },
  ll = {
    id: "w-node-a3cc95fc-d4f5-0398-7194-1e8506932d8d-af552307",
    class: "w-dyn-list",
  },
  il = { role: "list", class: "w-dyn-items" },
  ol = { role: "listitem", class: "w-dyn-item" },
  rl = { class: "card-wrapper cc-small" },
  nl = {
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
  dl = { class: "card-image_wrapper" },
  pl = { class: "iframe-video_wrapper" },
  vl = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  ml = ["src"],
  fl = G(" Your browser does not support the video tag. "),
  ul = fs(() => b("div", { class: "iframe-video_blocker" }, null, -1)),
  gl = fs(() =>
    b(
      "div",
      { class: "card-body", "data-aos": "fade-up", "data-aos-duration": "700" },
      [
        b("div", { class: "u-overflow-hidden" }, [
          b(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [b("h4", { class: "u-ts-4" }, "Skyart3725全景")]
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
  bl = { role: "list", class: "w-dyn-items" },
  hl = { role: "listitem", class: "w-dyn-item" },
  wl = { class: "card-wrapper cc-large" },
  _l = { class: "card-animation cc-40" },
  xl = {
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
  kl = { class: "card-image_wrapper" },
  jl = { class: "iframe-video_wrapper" },
  Cl = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  ql = ["src"],
  Sl = G(" Your browser does not support the video tag. "),
  zl = fs(() => b("div", { class: "iframe-video_blocker" }, null, -1)),
  Ol = ce(
    '<div class="card-body" data-aos="fade-up" data-aos-duration="700" data-v-7e810c9c><div class="u-overflow-hidden" data-v-7e810c9c><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-7e810c9c><div class="card-large_text" data-v-7e810c9c><h4 class="u-ts-4" data-v-7e810c9c>多功能茶席空間</h4></div></div></div></div>',
    1
  ),
  Tl = ce(
    '<div id="w-node-bc6d1a98-c4cb-3434-3589-47eddb3c03ed-af552307" class="content" data-v-7e810c9c><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-7e810c9c><p class="u-ts-3" data-aos="fade-up" data-aos-duration="700" data-v-7e810c9c> 博物館有三區專業茶道茶席空間，最多可以招待8-20位嘉賓，每區飲水與視聽設備其齊全，靜待您與好友在雲頂與大師名作間沏壺閱茗。 </p></div><div class="btn-group" data-v-7e810c9c><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><a href="/cases" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text" data-v-7e810c9c>空間介紹</div><div class="btn-text cc-bottom" data-v-7e810c9c>空間介紹</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text" data-v-7e810c9c>立即預約</div><div class="btn-text cc-bottom" data-v-7e810c9c>立即預約</div></div></a></div></div></div>',
    1
  ),
  Al = fs(() =>
    b("div", { class: "container" }, [b("div", { class: "target_line" })], -1)
  ),
  El = { class: "section" },
  Bl = ce(
    '<div class="section-title_component" data-v-7e810c9c><div class="container" data-v-7e810c9c><div class="section-title_wrapper" data-v-7e810c9c><div class="section-title_dot" style="opacity:1;" data-v-7e810c9c></div><div class="u-overflow-hidden" data-v-7e810c9c><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><h2 class="u-ts-4" data-v-7e810c9c>定香人文</h2></div></div></div></div></div>',
    1
  ),
  Ll = { class: "container" },
  Il = { class: "w-layout-grid pair-grid" },
  Pl = { id: "w-node-_6e6a6411-9d71-b91d-1723-e94f35341c18-af552307" },
  Ml = { class: "service-list" },
  Dl = { class: "logomark_component" },
  Fl = {
    class: "logomark w-embed",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ul = ["src"],
  Vl = fs(() =>
    b(
      "ul",
      { role: "list", class: "u-mt-3-5" },
      [
        b(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "150",
          },
          [
            b(
              "div",
              {
                class: "list-content cc-2",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [b("h3", { class: "u-tc-caps" }, "藝術品經紀")]
            ),
          ]
        ),
        b(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "200",
          },
          [
            b(
              "div",
              {
                class: "list-content cc-3",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [b("h3", { class: "u-tc-caps" }, "藝術品拍賣")]
            ),
          ]
        ),
        b(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "250",
          },
          [
            b(
              "div",
              {
                class: "list-content cc-4",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [b("h3", { class: "u-tc-caps" }, "台灣高山冠軍茶")]
            ),
          ]
        ),
        b(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "300",
          },
          [
            b(
              "div",
              {
                class: "list-content cc-5",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [b("h3", { class: "u-tc-caps" }, "雲南古樹普洱茶")]
            ),
          ]
        ),
        b(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "350",
          },
          [
            b(
              "div",
              {
                class: "list-content cc-6",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [b("h3", { class: "u-tc-caps" }, "精品咖啡")]
            ),
          ]
        ),
        b(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "400",
          },
          [
            b(
              "div",
              {
                class: "list-content cc-7",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [b("h3", { class: "u-tc-caps" }, "天幕茶碗")]
            ),
          ]
        ),
        b(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "450",
          },
          [
            b(
              "div",
              {
                class: "list-content cc-8",
                style: {
                  transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                  "transform-style": "preserve-3d",
                },
              },
              [b("h3", { class: "u-tc-caps" }, "典藏名酒")]
            ),
          ]
        ),
      ],
      -1
    )
  ),
  Hl = ce(
    '<div class="btn-group" data-v-7e810c9c><div class="btn-item cc-1" style="transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-7e810c9c><a href="/about" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text" data-v-7e810c9c>藝品介紹</div><div class="btn-text cc-bottom" data-v-7e810c9c>藝品介紹</div></div></a></div></div>',
    1
  ),
  Nl = fs(() =>
    b(
      "section",
      { class: "section cc-apps" },
      [
        b("div", { class: "container" }, [
          b("div", { class: "row" }, [
            b("div", { "data-animation-element": "group", class: "col" }, [
              b(
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
                  b(
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
                      b(
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
        b("div", { "data-apps": "component", class: "apps_component" }, [
          b("div", { class: "apps_media-wrapper" }, [
            b(
              "div",
              {
                "data-w-id": "9ec98ec5-fb8a-2716-02fa-7ef29f58135e",
                class: "apps_media-list",
              },
              [
                b(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "100",
                  },
                  [
                    b("img", {
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
                b(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "150",
                  },
                  [
                    b(
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
                        b("div", { role: "list", class: "w-dyn-items" }, [
                          b("div", { role: "listitem", class: "w-dyn-item" }, [
                            b(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/sable-app",
                                class: "apps_link w-inline-block",
                              },
                              [
                                b("img", {
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
                b(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "200",
                  },
                  [
                    b(
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
                        b("div", { role: "list", class: "w-dyn-items" }, [
                          b("div", { role: "listitem", class: "w-dyn-item" }, [
                            b(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/seen-app",
                                class: "apps_link w-inline-block",
                              },
                              [
                                b("img", {
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
                b(
                  "div",
                  {
                    class: "apps_asset-wrapper cc-watch",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "250",
                  },
                  [
                    b(
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
                        b("img", {
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
          b("div", { class: "apps_scroll" }, [
            b("div", { class: "mobile-scroll_cta" }, [
              b("div", { class: "mobile-scroll_icon w-embed" }, [
                b(
                  "svg",
                  {
                    width: "100%",
                    style: {},
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  [
                    b("path", {
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
  Xl = { class: "section" },
  Rl = { class: "container" },
  Zl = ce(
    '<div class="row" data-v-7e810c9c><div data-animation-element="group" class="col" data-v-7e810c9c><h3 data-animation-element="title" class="h1" style="" data-aos="fade-up" data-aos-duration="700" data-v-7e810c9c><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-7e810c9c><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c> 拍賣中心 </div></div></h3></div></div>',
    1
  ),
  Yl = { class: "sticky-pair" },
  Wl = { class: "w-layout-grid pair-grid is-leading" },
  Gl = {
    id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f41-af552307",
    class: "w-dyn-list",
  },
  Kl = { role: "list", class: "w-dyn-items" },
  $l = { role: "listitem", class: "w-dyn-item" },
  Jl = { class: "card-wrapper cc-large" },
  Ql = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  ei = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  ai = { class: "card-image_wrapper" },
  ti = { class: "iframe-video_wrapper" },
  si = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  li = ["src"],
  ii = G(" Your browser does not support the video tag. "),
  oi = fs(() => b("div", { class: "iframe-video_blocker" }, null, -1)),
  ri = ce(
    '<div class="card-body" data-v-7e810c9c><div class="u-overflow-hidden" data-v-7e810c9c><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-7e810c9c><div class="card-large_text" data-v-7e810c9c><h4 class="u-ts-4" data-v-7e810c9c>Skyart7325鑑賞中心</h4></div></div></div></div>',
    1
  ),
  ni = {
    id: "w-node-e23686ee-2a5d-d68e-2ddf-02d095aea2fe-af552307",
    class: "card-wrapper cc-small",
  },
  ci = {
    id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f3a-af552307",
    class: "w-dyn-list",
  },
  di = { role: "list", class: "w-dyn-items" },
  pi = { role: "listitem", class: "w-dyn-item" },
  vi = { class: "card-wrapper cc-small" },
  mi = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  fi = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  ui = { class: "card-image_wrapper" },
  gi = { class: "iframe-video_wrapper" },
  yi = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  bi = ["src"],
  hi = G(" Your browser does not support the video tag. "),
  wi = fs(() => b("div", { class: "iframe-video_blocker" }, null, -1)),
  _i = fs(() =>
    b(
      "div",
      { class: "card-body" },
      [
        b("div", { class: "u-overflow-hidden" }, [
          b(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [b("h4", { class: "u-ts-4" }, "Sable App")]
          ),
        ]),
      ],
      -1
    )
  ),
  xi = ce(
    '<div id="w-node-_591e678b-2794-a4c1-b9e4-4c34713bcb6d-af552307" class="content is-grid" data-v-7e810c9c><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-7e810c9c><p class="u-ts-3" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-v-7e810c9c> Basis knows fintech. We’ve developed a strong focus on design for financial services, like mobile apps, bank brands, and credit card design. Our programs are optimized for startups, allowing Basis to start small, work fast, and keep you ahead of your roadmap. When the most innovative companies want to cut through a highly-regulated, ever-changing financial world, they come to the experts. </p></div><div class="btn-group" data-v-7e810c9c><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><a href="/fintech-design" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text" data-v-7e810c9c>Fintech services</div><div class="btn-text cc-bottom" data-v-7e810c9c>Fintech services</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text" data-v-7e810c9c>Design trial</div><div class="btn-text cc-bottom" data-v-7e810c9c>Design trial</div></div></a></div></div></div>',
    1
  ),
  ki = { class: "section" },
  ji = { class: "container over-h" },
  Ci = ce(
    '<div class="row" data-v-7e810c9c><div data-animation-element="group" class="col" data-v-7e810c9c><h3 data-animation-element="title" class="h1" style="" data-aos="fade-up" data-aos-duration="1000" data-v-7e810c9c><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-7e810c9c><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c> Branding </div></div></h3></div></div>',
    1
  ),
  qi = { class: "sticky-pair" },
  Si = { class: "w-layout-grid pair-grid" },
  zi = { id: "w-node-dc0c39cf-ca9b-7980-3885-608a3bb047ce-af552307" },
  Oi = {
    id: "w-node-_22d42303-51c3-58a5-286f-187c6fce5e6a-af552307",
    class: "card-wrapper cc-small",
  },
  Ti = {
    id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192626-af552307",
    class: "w-dyn-list",
  },
  Ai = { role: "list", class: "w-dyn-items" },
  Ei = { role: "listitem", class: "w-dyn-item" },
  Bi = { class: "card-wrapper cc-small" },
  Li = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  Ii = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  Pi = { class: "card-image_wrapper" },
  Mi = { class: "iframe-video_wrapper" },
  Di = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Fi = ["src"],
  Ui = G(" Your browser does not support the video tag. "),
  Vi = fs(() => b("div", { class: "iframe-video_blocker" }, null, -1)),
  Hi = fs(() =>
    b(
      "div",
      { class: "card-body" },
      [
        b("div", { class: "u-overflow-hidden" }, [
          b(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [b("h4", { class: "u-ts-4" }, " Gaffa Brand & Website ")]
          ),
        ]),
      ],
      -1
    )
  ),
  Ni = {
    id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e19262d-af552307",
    class: "w-dyn-list",
  },
  Xi = { role: "list", class: "w-dyn-items" },
  Ri = { role: "listitem", class: "w-dyn-item" },
  Zi = { class: "card-wrapper cc-large" },
  Yi = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  },
  Wi = {
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
  $i = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Ji = ["src"],
  Qi = G(" Your browser does not support the video tag. "),
  eo = fs(() => b("div", { class: "iframe-video_blocker" }, null, -1)),
  ao = ce(
    '<div class="card-body" data-v-7e810c9c><div class="u-overflow-hidden" data-v-7e810c9c><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-7e810c9c><div class="card-large_text" data-v-7e810c9c><h4 class="u-ts-4" data-v-7e810c9c>Sable Brand</h4></div></div></div></div>',
    1
  ),
  to = ce(
    '<div id="w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192634-af552307" class="content is-grid" data-v-7e810c9c><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-7e810c9c><p class="u-ts-3" data-aos="fade-up" data-aos-duration="800" data-v-7e810c9c> Brand power: the multiple your customers will pay for your product, over that of your closest competition, because your name is on it. Basis drives brand power, because unlike other agencies that only focus on experience design or brand development, we seamlessly integrate both. When you start with Basis, we’ll build a brand book and product design kit that (finally) talk to each other. </p></div><div class="btn-group" data-v-7e810c9c><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><a href="/cases" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text" data-v-7e810c9c>View cases</div><div class="btn-text cc-bottom" data-v-7e810c9c>View cases</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c> Design trial </div><div class="btn-text cc-bottom" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c> Design trial </div></div></a></div></div></div>',
    1
  ),
  so = ce(
    '<section class="section" data-v-7e810c9c><div class="section-title_component" data-v-7e810c9c><div class="container" data-v-7e810c9c><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-7e810c9c><div class="section-title_dot" style="opacity:1;" data-v-7e810c9c></div><div class="u-overflow-hidden" data-v-7e810c9c><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><h2 class="u-ts-4" data-v-7e810c9c>Contact Us</h2></div></div></div></div></div><div class="container" data-v-7e810c9c><div class="w-layout-grid pair-grid" data-v-7e810c9c><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67" data-v-7e810c9c><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext" data-v-7e810c9c><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700" data-v-7e810c9c><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-7e810c9c><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-7e810c9c><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-7e810c9c><div style="position:relative;display:inline-block;" data-v-7e810c9c> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    1
  ),
  lo = { class: "pre-footer" },
  io = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  oo = { class: "iframe-video_wrapper" },
  ro = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  no = ["src"],
  co = G(" Your browser does not support the video tag. "),
  po = fs(() => b("div", { class: "iframe-video_blocker" }, null, -1)),
  vo = ce(
    '<div class="pre-footer_gradient" data-v-7e810c9c></div><div class="marquee" data-v-7e810c9c><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Case Studies </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Case Studies </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Case Studies </div></div></div><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Case Studies </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Case Studies </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Case Studies </div></div></div></div><div class="pre-footer_button" data-v-7e810c9c><div class="btn cc-large-landscape" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text cc-large-landscape" data-v-7e810c9c>REad Next</div><div class="btn-text cc-bottom cc-large-landscape" data-v-7e810c9c>Button</div></div></div></div>',
    3
  ),
  mo = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  fo = { class: "iframe-video_wrapper" },
  uo = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  go = ["src"],
  yo = G(" Your browser does not support the video tag. "),
  bo = fs(() => b("div", { class: "iframe-video_blocker" }, null, -1)),
  ho = ce(
    '<div class="pre-footer_gradient" data-v-7e810c9c></div><div class="marquee" data-v-7e810c9c><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-69%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Design Trial </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Design Trial </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Design Trial </div></div></div><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-69%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Design Trial </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Design Trial </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-7e810c9c><div class="h1" data-v-7e810c9c>Design Trial </div></div></div></div><div class="pre-footer_button" data-v-7e810c9c><div class="btn cc-large-landscape" data-v-7e810c9c><div class="btn-text-wrap" data-v-7e810c9c><div class="btn-text cc-large-landscape" data-v-7e810c9c>REad Next</div><div class="btn-text cc-bottom cc-large-landscape" data-v-7e810c9c>Button</div></div></div></div>',
    3
  );
var wo = Se(ms, [
    [
      "render",
      function (e, a, t, s, l, i) {
        const o = S("View"),
          r = S("Footer");
        return (
          g(),
          y(
            _,
            null,
            [
              A(o),
              us,
              b("section", gs, [
                ys,
                b("div", bs, [
                  b("div", hs, [
                    b("div", ws, [
                      b("div", _s, [
                        b("div", xs, [
                          b("div", ks, [
                            b(
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
                              js
                            ),
                          ]),
                        ]),
                        b("div", Cs, [
                          b("div", qs, [
                            b(
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
                              Ss
                            ),
                          ]),
                        ]),
                        b("div", zs, [
                          b("div", Os, [
                            b(
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
                              Ts
                            ),
                          ]),
                        ]),
                        b("div", As, [
                          b("div", Es, [
                            b(
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
                              Bs
                            ),
                          ]),
                        ]),
                        b("div", Ls, [
                          b("div", Is, [
                            b(
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
                              Ps
                            ),
                          ]),
                        ]),
                        b("div", Ms, [
                          b("div", Ds, [
                            b(
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
                              Fs
                            ),
                          ]),
                        ]),
                        b("div", Us, [
                          b("div", Vs, [
                            b(
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
                        b("div", Ns, [
                          b("div", Xs, [
                            b(
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
                              Rs
                            ),
                          ]),
                        ]),
                        b("div", Zs, [
                          b("div", Ys, [
                            b(
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
                              Ws
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              Gs,
              b("section", Ks, [
                $s,
                b("div", Js, [
                  Qs,
                  b("div", el, [
                    b("div", al, [
                      b("div", tl, [
                        b("div", sl, [
                          b("div", ll, [
                            b("div", il, [
                              b("div", ol, [
                                b("div", rl, [
                                  b("div", nl, [
                                    b("div", cl, [
                                      b("div", dl, [
                                        b("div", pl, [
                                          b("video", vl, [
                                            b(
                                              "source",
                                              {
                                                src: s.getVideoUrl(
                                                  "home/knife1-1.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              ml
                                            ),
                                            fl,
                                          ]),
                                          ul,
                                        ]),
                                      ]),
                                      gl,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      b("div", yl, [
                        b("div", bl, [
                          b("div", hl, [
                            b("div", wl, [
                              b("div", _l, [
                                b("div", xl, [
                                  b("div", kl, [
                                    b("div", jl, [
                                      b("video", Cl, [
                                        b(
                                          "source",
                                          {
                                            src: s.getVideoUrl(
                                              "home/knife1-2.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          ql
                                        ),
                                        Sl,
                                      ]),
                                      zl,
                                    ]),
                                  ]),
                                  Ol,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      Tl,
                    ]),
                  ]),
                ]),
              ]),
              Al,
              b("section", El, [
                Bl,
                b("div", Ll, [
                  b("div", Il, [
                    b("div", Pl, [
                      b("div", Ml, [
                        b("div", Dl, [
                          b("div", Fl, [
                            b(
                              "img",
                              { src: s.getImageUrl("logo.png"), alt: "" },
                              null,
                              8,
                              Ul
                            ),
                          ]),
                        ]),
                        Vl,
                        Hl,
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              Nl,
              b("section", Xl, [
                b("div", Rl, [
                  Zl,
                  b("div", Yl, [
                    b("div", Wl, [
                      b("div", Gl, [
                        b("div", Kl, [
                          b("div", $l, [
                            b("div", Jl, [
                              b("div", Ql, [
                                b("div", ei, [
                                  b("div", ai, [
                                    b("div", ti, [
                                      b("video", si, [
                                        b(
                                          "source",
                                          {
                                            src: s.getVideoUrl(
                                              "home/knife2-3.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          li
                                        ),
                                        ii,
                                      ]),
                                      oi,
                                    ]),
                                  ]),
                                  ri,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      b("div", null, [
                        b("div", ni, [
                          b("div", ci, [
                            b("div", di, [
                              b("div", pi, [
                                b("div", vi, [
                                  b("div", mi, [
                                    b("div", fi, [
                                      b("div", ui, [
                                        b("div", gi, [
                                          b("video", yi, [
                                            b(
                                              "source",
                                              {
                                                src: s.getVideoUrl(
                                                  "home/knife2-1.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              bi
                                            ),
                                            hi,
                                          ]),
                                          wi,
                                        ]),
                                      ]),
                                      _i,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      xi,
                    ]),
                  ]),
                ]),
              ]),
              b("section", ki, [
                b("div", ji, [
                  Ci,
                  b("div", qi, [
                    b("div", Si, [
                      b("div", zi, [
                        b("div", Oi, [
                          b("div", Ti, [
                            b("div", Ai, [
                              b("div", Ei, [
                                b("div", Bi, [
                                  b("div", Li, [
                                    b("div", Ii, [
                                      b("div", Pi, [
                                        b("div", Mi, [
                                          b("video", Di, [
                                            b(
                                              "source",
                                              {
                                                src: s.getVideoUrl(
                                                  "home/knife2-4.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              Fi
                                            ),
                                            Ui,
                                          ]),
                                          Vi,
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
                      b("div", Ni, [
                        b("div", Xi, [
                          b("div", Ri, [
                            b("div", Zi, [
                              b("div", Yi, [
                                b("div", Wi, [
                                  b("div", Gi, [
                                    b("div", Ki, [
                                      b("video", $i, [
                                        b(
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
                                        Qi,
                                      ]),
                                      eo,
                                    ]),
                                  ]),
                                  ao,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      to,
                    ]),
                  ]),
                ]),
              ]),
              so,
              b("div", null, [
                b("aside", lo, [
                  b("div", io, [
                    b("div", oo, [
                      b("video", ro, [
                        b(
                          "source",
                          {
                            src: s.getVideoUrl("home/buddha1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          no
                        ),
                        co,
                      ]),
                      po,
                    ]),
                    vo,
                  ]),
                  b("div", mo, [
                    b("div", fo, [
                      b("video", uo, [
                        b(
                          "source",
                          {
                            src: s.getVideoUrl("home/tea_1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          go
                        ),
                        yo,
                      ]),
                      bo,
                    ]),
                    ho,
                  ]),
                ]),
              ]),
              A(r),
            ],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-7e810c9c"],
  ]),
  _o = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: wo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const xo = {
    "../pages/about.vue": () =>
      Za(
        () =>
          Promise.resolve().then(function () {
            return vt;
          }),
        void 0
      ),
    "../pages/case.vue": () =>
      Za(
        () =>
          Promise.resolve().then(function () {
            return yt;
          }),
        void 0
      ),
    "../pages/demo.vue": () =>
      Za(
        () =>
          Promise.resolve().then(function () {
            return Lt;
          }),
        void 0
      ),
    "../pages/fintech-design.vue": () =>
      Za(
        () =>
          Promise.resolve().then(function () {
            return cs;
          }),
        void 0
      ),
    "../pages/index.vue": () =>
      Za(
        () =>
          Promise.resolve().then(function () {
            return _o;
          }),
        void 0
      ),
  },
  ko = {
    "../pages/about.vue": vt,
    "../pages/case.vue": yt,
    "../pages/demo.vue": Lt,
    "../pages/fintech-design.vue": cs,
    "../pages/index.vue": _o,
  },
  jo = [];
for (let Vo in xo) {
  let e = Vo.replace("../pages", "").toLowerCase().replace(".vue", "");
  (e = e.replace(/\/index$/, "")),
    (e = e.replace(/\/_+/g, "/:")),
    jo.push({
      path: e,
      name: e,
      meta: {
        layout: ko[Vo].default.layout || "layout-default",
        title:
          null != (t = null == (a = ko[Vo].default) ? void 0 : a.title)
            ? t
            : "app.project.title",
        header:
          null != (l = null == (s = ko[Vo].default) ? void 0 : s.header)
            ? l
            : "header-default",
        scroll:
          null != (o = null == (i = ko[Vo].default) ? void 0 : i.noScroll) && o,
      },
      component: xo[Vo],
    });
}
const Co = ue({
  history: ge("./"),
  routes:
    ((qo = { defaultPath: "/home" }),
    [
      {
        path: "/",
        name: "default-path",
        redirect: { name: D({ defaultPath: "/" }, qo).defaultPath },
      },
      ...jo,
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
var qo;
Co.beforeEach(async (e, a, t) => {
  t();
});
var So = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Co }, Symbol.toStringTag, {
    value: "Module",
  })
);
const zo = ye({ modules: Xa });
be(zo, Co);
var Oo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: zo }, Symbol.toStringTag, {
    value: "Module",
  })
);
const To = {
    use(e) {
      e.interceptors.response.use(
        async function (a) {
          if (100004 === a.data.code) {
            const t = e.get("/app/jwt-token", {
              params: { account: zo.state.auth.user.account },
            });
            1 === t.data.code && U.set("token", t.data.data.jwt_token, !0);
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
  Ao = {
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
                      (await zo.dispatch("auth/logout"),
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
class Bo {
  constructor() {
    (this.provider = new Ea({}.VITE_REMOTE_API)), this.init();
  }
  init() {
    this.provider.use({}, Ba, To, Ao, Eo, Ia);
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
Bo.prototype.install = function (e) {
  const a = "http-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Lo = new Bo(),
  Io = Object.freeze(
    Object.defineProperty(
      { __proto__: null, HttpService: Bo, default: Lo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class Po {
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
    return zo.state.app.popupState;
  }
  async modal(e = {}) {
    const {
      title: a,
      text: t,
      component: s = null,
      showCancelButton: l = !0,
      showConfirmButton: i = !0,
      confirmButtonText: o = Ee.t("button.confirm"),
      cancelButtonText: r = Ee.t("button.cancel"),
      allowOutsideClick: n = !0,
      props: c = {},
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
          props: c,
        })
      );
    });
  }
  clear() {
    zo.commit("app/clear/popup");
  }
}
Po.prototype.install = function (e) {
  const a = "popup-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Mo = new Po();
const Do = {
    "../services/alert-service.js": Aa,
    "../services/http-service.js": Io,
    "../services/i18n-service.js": Be,
    "../services/popup-service.js": Object.freeze(
      Object.defineProperty(
        { __proto__: null, PopupService: Po, default: Mo },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../services/router-service.js": So,
    "../services/storage-service.js": De,
    "../services/store-service.js": Oo,
  },
  Fo = {
    install: (e) => {
      for (let a in Do) e.use(Do[a].default);
    },
  };
const Uo = he(ze);
Uo.provide("$jQuery", we),
  Uo.provide("$swal", Le),
  Uo.provide("$storage", U),
  Uo.provide("$tabsslider", _e),
  Uo.use(na),
  Uo.use(Sa),
  Uo.use(xe, { loading: "", error: "" }),
  Uo.use(Fo),
  Uo.mount("#app");
