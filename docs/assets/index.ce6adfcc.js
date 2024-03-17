var e,
  a,
  s,
  t,
  i,
  l,
  o,
  r = Object.defineProperty,
  d = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  p = Object.prototype.hasOwnProperty,
  v = Object.prototype.propertyIsEnumerable,
  m = (e, a, s) =>
    a in e
      ? r(e, a, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[a] = s),
  f = (e, a) => {
    for (var s in a || (a = {})) p.call(a, s) && m(e, s, a[s]);
    if (n) for (var s of n(a)) v.call(a, s) && m(e, s, a[s]);
    return e;
  },
  u = (e, a) => d(e, c(a));
import {
  o as g,
  c as b,
  a as w,
  n as h,
  u as y,
  F as _,
  b as x,
  r as k,
  d as j,
  w as z,
  e as C,
  f as S,
  g as q,
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
  y as V,
  S as H,
  z as N,
  A as W,
  B as R,
  C as X,
  D as Y,
  E as Z,
  G,
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
  U as de,
  V as ce,
  W as ne,
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
} from "./vendor.fc0dc942.js";
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
    ).href,
  je = { class: "icon" },
  ze = { class: "svg_box" },
  Ce = ["src"];
var Se = (e, a) => {
  const s = e.__vccOpts || e;
  for (const [t, i] of a) s[t] = i;
  return s;
};
var qe = Se(
  {
    components: {
      Loading: {
        props: { mode: String },
        setup: (e) => (a, s) => (
          g(),
          b(
            _,
            null,
            [
              w("div", { class: h(["mask", e.mode]) }, null, 2),
              w(
                "div",
                { class: h(["bg", e.mode]) },
                [
                  w("div", je, [
                    w("div", ze, [
                      w(
                        "img",
                        { src: y(ke)("favicon.png"), alt: "" },
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
    },
    setup() {
      const e = x(),
        a = k(!1),
        s = k(""),
        t = k("leave"),
        i = j(() => "stop" === t.value),
        l = j(() => {
          if (T(e.state.route.path)) return null;
          return L("layout-error")(I(["meta", "layout"], e.state.route));
        });
      return (
        z(
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
        z(a, (a) => {
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
          d = S("Loading");
        return (
          g(),
          b(
            _,
            null,
            [
              (g(),
              q(A(t.layout), null, {
                default: O(() => [
                  B(o, null, {
                    default: O(({ Component: e }) => [(g(), q(A(e)))]),
                    _: 1,
                  }),
                ]),
                _: 1,
              })),
              B(r),
              t.isError || t.isShowLoading
                ? (g(), q(d, { key: 0, mode: t.mode }, null, 8, ["mode"]))
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
  Ae = {};
for (let Ho in Oe) {
  const e = Ho.replace("../locales/", "").toLowerCase().replace(".js", ""),
    [a, ...s] = e.split("/"),
    t = P(".", s),
    i = Oe[Ho].default;
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
  Ee = V.exports.createI18n({
    initLocale: Be,
    fallbackLocale: null != (e = {}.VITE_DEFAULT_LANG) ? e : "zh-tw",
    messages: Ae,
  });
var Te = Object.freeze(
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
  Ve = w("div", { class: "line" }, null, -1),
  He = { class: "list_style" },
  Ne = { class: "nav_link-top" },
  We = w(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Re = { class: "nav_link-title" },
  Xe = { class: "u-ts-3" },
  Ye = { class: "nav_link-p" },
  Ze = w(
    "div",
    {
      class: "nav_link-spacer cc-1",
      style: { height: "0em", width: "185.172px" },
    },
    null,
    -1
  ),
  Ge = w("div", { id: "pink_mask" }, null, -1),
  Ke = {
    props: ["isOpen"],
    emits: ["toggleOpen"],
    setup(e, { emit: a }) {
      const s = e,
        t = k(1),
        i = k(!0),
        l = W(),
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
        r = j(() => 25 * t.value),
        d = j(() => {
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
        c = k(25);
      return (e, n) => (
        g(),
        b(
          "div",
          { class: h(["layout-deafult-header-nav", { active: s.isOpen }]) },
          [
            w("ul", null, [
              (g(!0),
              b(
                _,
                null,
                R(
                  o.value,
                  (e, i) => (
                    g(),
                    b(
                      "li",
                      {
                        key: e,
                        style: X(`--i: ${e}`),
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
                        Ve,
                        w("div", He, [
                          w("div", Ne, [
                            We,
                            w("div", Re, [w("div", Xe, Y(e.title), 1)]),
                          ]),
                          w(
                            "div",
                            {
                              class: h([
                                "nav_link-btm",
                                { active: t.value === i },
                              ]),
                            },
                            [w("p", Ye, Y(e.content), 1), Ze],
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
              w(
                "div",
                {
                  class: "move-item",
                  style: X({
                    left: "" + (i.value ? `calc(${y(r)}% - 4px)` : "auto"),
                    right: "" + (i.value ? "auto" : `calc(${y(d)}% - 4px)`),
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
  ea = [w("div", null, null, -1), w("div", null, null, -1)],
  aa = { class: "layout-deafult pb-32" };
var sa = Se(
    {
      components: {
        LayoutHeader: {
          setup(e) {
            const a = k(!1),
              s = (e) => {
                a.value = !e;
              };
            return (e, t) => {
              const i = S("router-link");
              return (
                g(),
                b(
                  _,
                  null,
                  [
                    w(
                      "div",
                      {
                        class: h([
                          "layout-deafult-header",
                          { active: a.value },
                        ]),
                      },
                      [
                        B(
                          i,
                          {
                            to: "/",
                            "aria-current": "page",
                            class: h([
                              "layout-deafult-header-logo",
                              { "layout-deafult-header-logo--open": a.value },
                            ]),
                            "aria-label": "home",
                          },
                          {
                            default: O(() => [
                              a.value
                                ? (g(),
                                  b(
                                    "img",
                                    { key: 1, src: y(ke)("logo.png"), alt: "" },
                                    null,
                                    8,
                                    Qe
                                  ))
                                : (g(),
                                  b("div", $e, [
                                    w(
                                      "img",
                                      { src: y(ke)("logo.png"), alt: "" },
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
                        w(
                          "div",
                          {
                            class: h([
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
                        q(
                          Ke,
                          { key: 0, "is-open": a.value, onToggleOpen: s },
                          null,
                          8,
                          ["is-open"]
                        ))
                      : E("", !0),
                  ],
                  64
                )
              );
            };
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
        function (e, a, s, t, i, l) {
          const o = S("LayoutHeader");
          return (
            g(), b(_, null, [B(o), w("div", aa, [Z(e.$slots, "default")])], 64)
          );
        },
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
var la = Se({ setup() {} }, [
  [
    "render",
    function (e, a, s, t, i, l) {
      return g(), b("div", ia, [Z(e.$slots, "default")]);
    },
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
for (let Ho in oa) {
  const e = Ho.replace("../layouts/", "").toLowerCase().replace(".vue", "");
  ra.push({ componentName: e, component: oa[Ho].default });
}
const da = {
  install: (e) => {
    ra.forEach((a) => {
      e.component(a.componentName, a.component);
    });
  },
};
const ca = {
    props: { title: {}, goBackButton: { type: Boolean, default: !1 } },
    setup() {
      const e = W();
      return {
        goBack: () => {
          e.options.history.state.back
            ? e.back()
            : e.push({ name: "default-path" });
        },
      };
    },
  },
  na = {
    class: "relative flex items-center justify-center text-36 h-24 w-full",
  },
  pa = { class: "font-bold" },
  va = { class: "absolute right-8 top-6" };
var ma = Se(ca, [
    [
      "render",
      function (e, a, s, t, i, l) {
        return (
          g(),
          b("div", na, [
            s.goBackButton
              ? (g(),
                b("div", {
                  key: 0,
                  class: "go-back absolute left-3 top-6",
                  onClick:
                    a[0] || (a[0] = (...e) => t.goBack && t.goBack(...e)),
                }))
              : E("", !0),
            w("div", pa, [
              Z(e.$slots, "title", {}, () => [G(Y(s.title), 1)], !0),
            ]),
            w("div", va, [Z(e.$slots, "actions", {}, void 0, !0)]),
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
  ba = { class: "swal2-title", style: { display: "block" } },
  wa = { class: "swal2-html-container", style: { display: "block" } },
  ha = { class: "swal2-actions", style: { display: "flex" } };
var ya = Se({}, [
  [
    "render",
    function (e, a) {
      return (
        g(),
        b("div", ga, [
          w("h2", ba, [Z(e.$slots, "title")]),
          w("div", wa, [Z(e.$slots, "content")]),
          w("div", ha, [Z(e.$slots, "actions")]),
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
        s = j(() => a.state),
        t = (e) => {
          s.value.resolve(
            f(
              { isConfirmed: !1, isDismissed: !1, dismiss: null, result: null },
              e
            )
          );
        },
        i = j(() => (s.value.type, ae(ya))),
        l = j(() => s.value.BackdropStyle),
        o = k();
      let r = null;
      const d = () => {
        clearTimeout(r), (r = null);
      };
      z([() => s.value.autoClose, () => s.value.timer], ([e, a]) => {
        a &&
          (d(),
          (r = setTimeout(() => {
            d(), e && c("timer");
          }, a)));
      });
      const c = async (e) => {
          if (r) {
            if (!s.value.allowDismissWhenTimerRunning) return;
            d();
          }
          if (o.value && "onDismissed" in o.value) {
            const s = await o.value.onDismissed();
            s && (t({ isDismissed: !0, dismiss: e, result: s }), a.clear());
          } else t({ isDismissed: !0, dismiss: e }), a.clear();
        },
        n = async () => {
          s.value.allowOutsideClick && c("backdrop");
        },
        p = async () => {
          c("cancel");
        },
        v = async () => {
          if (r) {
            if (!s.value.allowConfirmWhenTimerRunning) return;
            d();
          }
          if (o.value && "onConfirmed" in o.value) {
            const e = await o.value.onConfirmed();
            e && (t({ isConfirmed: !0, result: e }), a.clear());
          } else t({ isConfirmed: !0 }), a.clear();
        };
      return (e, a) => (
        g(),
        q(ee, { to: "body" }, [
          B(
            Q,
            { name: "popup", duration: "600" },
            {
              default: O(() => {
                var e;
                return [
                  y(s).$display
                    ? (g(),
                      b("div", _a, [
                        (g(),
                        q(
                          A(y(i)),
                          {
                            class: h([
                              "popup__inner pointer-events-auto",
                              {
                                "no-enter-animation":
                                  null == (e = y(s))
                                    ? void 0
                                    : e.noEnterAnimation,
                              },
                            ]),
                          },
                          $(
                            {
                              title: O(() => [G(Y(y(s).title), 1)]),
                              content: O(() => [
                                y(s).component
                                  ? (g(),
                                    q(
                                      A(y(s).component),
                                      J(
                                        { key: 0, ref_key: "compRef", ref: o },
                                        y(s).props
                                      ),
                                      null,
                                      16
                                    ))
                                  : (g(), b("div", xa, Y(y(s).text), 1)),
                              ]),
                              actions: O(() => [
                                y(s).showCancelButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 0,
                                        type: "button",
                                        class: "cancel-button",
                                        onClick: p,
                                      },
                                      Y(y(s).cancelButtonText),
                                      1
                                    ))
                                  : E("", !0),
                                y(s).showConfirmButton
                                  ? (g(),
                                    b(
                                      "button",
                                      {
                                        key: 1,
                                        type: "button",
                                        class: "confirm-button",
                                        onClick: v,
                                      },
                                      Y(y(s).confirmButtonText),
                                      1
                                    ))
                                  : E("", !0),
                              ]),
                              _: 2,
                            },
                            [
                              y(s).timer && y(s).timerProgress
                                ? {
                                    name: "timer",
                                    fn: O(() => [
                                      w(
                                        "div",
                                        {
                                          class: "timer-progress",
                                          "data-timer": y(s).timer,
                                          "data-end": Date.now() + y(s).timer,
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
          B(
            Q,
            {
              name: "popup-backdrop",
              "enter-active-class": "animate__animated animate__fadeIn",
              "leave-active-class": "animate__animated animate__fadeOut",
            },
            {
              default: O(() => [
                y(s).$display
                  ? (g(),
                    b(
                      "div",
                      {
                        key: 0,
                        class: "popup-backdrop",
                        style: X({ background: y(l) }),
                        onClick: n,
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
  Ca = [];
for (let Ho in za) {
  const e = Ho.replace("../components/", "").toLowerCase().replace(".vue", "");
  Ca.push({ componentName: e, component: za[Ho].default });
}
const Sa = {
  install: (e) => {
    Ca.forEach((a) => {
      e.component(a.componentName, a.component);
    });
  },
};
class qa {
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
    this.provider = new qa();
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
          const a = U.get("token");
          return a && (e.headers.Authorization = `Bearer ${a}`), e;
        },
        function (e) {
          return Promise.reject(e);
        }
      );
    },
  },
  La = (e, { rejectNil: a, rejectEmpty: s }) =>
    M(
      (t, i) => {
        const l = e[i];
        return (a && T(l)) || (s && te(l)) ? t : ie(i, l, t);
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
            rejectEmpty: s = !1,
            isFormData: t = !1,
          } = e;
          if (
            (e.params &&
              (e.params = La(e.params, { rejectNil: a, rejectEmpty: s })),
            e.data &&
              ((e.data = La(e.data, { rejectNil: a, rejectEmpty: s })), t))
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
  Pa = se.create();
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
const Na = (e, a, s) => {
  const [t, ...i] = e;
  return i.length
    ? { [t]: { namespaced: !0, modules: Na(i, a, s) } }
    : { [t]: { namespaced: !0, [a]: s } };
};
for (let Ho in Va) {
  const e = Ho.replace("../store/", "")
    .toLowerCase()
    .replace(".js", "")
    .split("/");
  Ha = de(Ha, Na(re(e), oe(e), Va[Ho].default));
}
var Wa = Ha;
const Ra = {},
  Xa = function (e, a) {
    return a && 0 !== a.length
      ? Promise.all(
          a.map((e) => {
            if ((e = `./${e}`) in Ra) return;
            Ra[e] = !0;
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
  Ga = { class: "row row-justify-center" },
  Ka = w(
    "div",
    { class: "col col-lg-3 col-md-12" },
    [
      w("div", { class: "footer_group cc-above" }, [
        w("h3", { class: "u-ts-6 u-text-secondary" }, "Email us"),
        w("ul", { role: "list", class: "footer_list" }, [
          w("li", { class: "footer_list-item" }, [
            w(
              "a",
              {
                href: "mailto:hello@basis.work",
                class: "footer_link w-inline-block",
              },
              [w("div", { class: "u-ts-3" }, "hello@basis.work")]
            ),
          ]),
        ]),
      ]),
      w("div", { class: "footer_group" }, [
        w("h3", { class: "u-ts-6 u-text-secondary" }, "Social"),
        w("ul", { role: "list", class: "footer_list" }, [
          w("li", { class: "footer_list-item" }, [
            w(
              "a",
              {
                href: "https://www.instagram.com/basis.work/",
                target: "_blank",
                class: "footer_link w-inline-block",
              },
              [w("div", { class: "u-ts-3" }, "Instagram")]
            ),
          ]),
          w("li", { class: "footer_list-item" }, [
            w(
              "a",
              {
                href: "https://www.linkedin.com/company/basisstudio/",
                target: "_blank",
                class: "footer_link w-inline-block",
              },
              [w("div", { class: "u-ts-3" }, "Linkedin")]
            ),
          ]),
        ]),
      ]),
    ],
    -1
  ),
  $a = w(
    "div",
    { class: "col col-lg-3 col-md-12" },
    [
      w("div", { class: "footer_group" }, [
        w("h3", { class: "u-ts-6 u-text-secondary" }, "Navigation"),
        w("ul", { role: "list", class: "footer_list" }, [
          w("li", { class: "footer_list-item" }, [
            w("a", { href: "/", class: "footer_link w-inline-block" }, [
              w("div", { class: "u-ts-3" }, "Overview"),
            ]),
          ]),
          w("li", { class: "footer_list-item" }, [
            w("a", { href: "/cases", class: "footer_link w-inline-block" }, [
              w("div", { class: "u-ts-3" }, "Cases"),
            ]),
          ]),
          w("li", { class: "footer_list-item" }, [
            w("a", { href: "/about", class: "footer_link w-inline-block" }, [
              w("div", { class: "u-ts-3" }, "Services"),
            ]),
          ]),
          w("li", { class: "footer_list-item" }, [
            w(
              "a",
              { href: "/design-trial", class: "footer_link w-inline-block" },
              [w("div", { class: "u-ts-3" }, "Design Trial")]
            ),
          ]),
          w("li", { class: "footer_list-item" }, [
            w(
              "a",
              {
                href: "/fintech-design",
                "aria-current": "page",
                class: "footer_link w-inline-block w--current",
              },
              [w("div", { class: "u-ts-3" }, "Fintech Design")]
            ),
          ]),
        ]),
      ]),
    ],
    -1
  ),
  Ja = w("div", { class: "col col-md-hide" }, null, -1),
  Qa = { class: "col col-lg-4 col-md-12 col-md-first" },
  es = { href: "/", class: "footer-wordmark w-inline-block" },
  as = { class: "wordmark w-embed" },
  ss = ["src"],
  ts = w(
    "div",
    { class: "footer-copyright" },
    [
      w("div", { "data-copyright": "" }, [
        G(" Copyright © "),
        w("span", { "data-dynamic": "year" }, "2024"),
      ]),
    ],
    -1
  ),
  is = {
    setup: (e) => (e, a) => (
      g(),
      b("footer", Ya, [
        w("div", Za, [
          w("div", Ga, [
            Ka,
            $a,
            Ja,
            w("div", Qa, [
              w("a", es, [
                w("div", as, [
                  w("img", { src: y(ke)("logo.png"), alt: "" }, null, 8, ss),
                ]),
              ]),
            ]),
          ]),
          ts,
        ]),
      ])
    ),
  };
const ls = {
    components: { Footer: is },
    setup() {
      const { t: e } = Fe();
      return (
        C(() => {
          ce.init();
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
  os = w(
    "header",
    { "data-mouse-class": "cc-icon", class: "header cc-large" },
    [
      w("div", { class: "nav_mode w-embed" }),
      w(
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
          w("img", {
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
          w(
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
              w("div", { class: "iframe-video_wrapper" }, [
                w("iframe", {
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
                w("div", { class: "iframe-video_blocker" }),
              ]),
            ]
          ),
        ]
      ),
      w("div", { class: "header-content_wrapper" }, [
        w("div", { class: "container" }, [
          w("div", { class: "row" }, [
            w(
              "div",
              {
                "data-animation-trigger": "transition",
                "data-animation-element": "group",
                class: "col col-lg-6 col-md-12",
              },
              [
                w("div", { class: "header-content_main" }, [
                  w(
                    "div",
                    {
                      class: "text-wrap-balance",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
                        "h1",
                        {
                          "data-animation-element": "title",
                          class: "h4",
                          style: {},
                        },
                        [
                          w(
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
                              w(
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
                              w(
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
                              w(
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
                              w(
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
                          w(
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
                              w(
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
                              w(
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
                              w(
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
                          w(
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
                              w(
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
                              w(
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
                              w(
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
                              w(
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
                          w(
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
                              w(
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
                              w(
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
                              w(
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
                  w("div", { class: "header-content_cta" }, [
                    w("div", { class: "header-content_icon w-embed" }, [
                      w(
                        "svg",
                        {
                          width: "100%",
                          style: {},
                          viewBox: "0 0 20 20",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          w("path", {
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
      w("div", { "data-transition": "in", class: "header-trigger" }),
    ],
    -1
  ),
  rs = w("div", { class: "spacing" }, null, -1),
  ds = w(
    "section",
    { class: "section" },
    [
      w("div", { class: "section-title_component" }, [
        w("div", { class: "container" }, [
          w(
            "div",
            {
              class: "section-title_wrapper",
              "data-aos": "fade-up",
              "data-aos-duration": "700",
            },
            [
              w(
                "div",
                { class: "section-title_dot", style: { opacity: "1" } },
                [
                  w("div", {
                    class: "section-title_dot-fill",
                    style: { width: "100%", height: "100%" },
                  }),
                ]
              ),
              w("div", { class: "u-overflow-hidden" }, [
                w(
                  "div",
                  {
                    class: "section-title_title",
                    style: {
                      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [w("h2", { class: "u-ts-4" }, "Work with Basis")]
                ),
              ]),
            ]
          ),
        ]),
      ]),
      w("div", { class: "container" }, [
        w("div", { class: "w-layout-grid pair-grid" }, [
          w(
            "div",
            { id: "w-node-e8a07e93-34f6-be32-54f2-b34bf2439e43-af55239f" },
            [
              w(
                "div",
                {
                  class: "case-details is-about",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  w("div", { class: "u-ts-4" }, [
                    w("div", { class: "u-overflow-hidden" }, [
                      w(
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
                          w(
                            "h2",
                            { class: "u-ts-4 u-text-mid" },
                            "Project inquiries"
                          ),
                        ]
                      ),
                    ]),
                    w(
                      "a",
                      {
                        href: "mailto:hello@basis.work",
                        class: "case-detail_item cc-1",
                      },
                      "hello@basis.work"
                    ),
                  ]),
                  w("div", { class: "u-ts-4" }, [
                    w("div", { class: "u-overflow-hidden" }, [
                      w(
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
                          w(
                            "h2",
                            { class: "u-ts-4 u-text-mid" },
                            "Join the team"
                          ),
                        ]
                      ),
                    ]),
                    w(
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
          w(
            "div",
            {
              id: "w-node-_2eada710-eca2-ae0e-be9f-54fbff32a11c-af55239f",
              class: "content",
            },
            [
              w(
                "div",
                {
                  "data-animation-element": "paragraphs",
                  class: "content-p cc-1",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  w(
                    "p",
                    { class: "u-ts-1 u-mb-0" },
                    " Startups and enterprises hire us when they can’t afford to fail. As the technology of our world gets increasingly more complex, your brand and product are being asked to adapt to more situations, more platforms, more devices, and a more global audience than ever. That’s why you need the expertise of a studio that builds true systems: From the first touch of brand awareness to the product needs of your most engaged user, Basis sees it all as part of one holistic experience. "
                  ),
                ]
              ),
              w("div", { class: "btn-group" }, [
                w(
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
                    w(
                      "a",
                      {
                        class: "btn w-inline-block",
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                      },
                      [
                        w("div", { class: "btn-text-wrap" }, [
                          w("div", { class: "btn-text" }, "Start a project"),
                          w(
                            "div",
                            { class: "btn-text cc-bottom" },
                            "Start a project"
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
                w(
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
                    w(
                      "a",
                      {
                        class: "btn cc-secondary w-inline-block",
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                      },
                      [
                        w("div", { class: "btn-text-wrap" }, [
                          w("div", { class: "btn-text" }, "Design trial"),
                          w(
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
        w("div", { class: "sticky-pair cc-far" }, [
          w("div", { class: "w-layout-grid pair-grid" }, [
            w("div", { class: "div-block" }, [
              w(
                "div",
                {
                  class: "card-wrapper cc-small",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  w("div", { class: "card-animation cc-40" }, [
                    w(
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
                        w("div", { class: "card-image_wrapper" }, [
                          w("img", {
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
            w(
              "div",
              {
                class: "card-wrapper cc-large",
                "data-aos": "fade-up",
                "data-aos-duration": "700",
              },
              [
                w("div", { class: "card-animation cc-40" }, [
                  w(
                    "div",
                    { "data-mouse-class": "cc-none", class: "card cc-large" },
                    [
                      w("div", { class: "card-image_wrapper" }, [
                        w("img", {
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
            w("div", { class: "content" }, [
              w(
                "div",
                {
                  "data-animation-element": "paragraphs",
                  class: "content-p cc-1",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  w(
                    "p",
                    { class: "u-ts-1" },
                    " Whether it’s shaping a new venture 0 → 1, evolving an existing company 1 → N, or taking an industry leader from N → XYZ, Basis has a formula that delivers results in record time. Our team is respected for crafting world-class experiences through our signature Product and Brand Trials, led by Michal Škvarenina, the design director behind digital experiences for Google, Airbnb, Red Bull, Mastercard, PC Financial, and more. "
                  ),
                ]
              ),
              w(
                "div",
                {
                  "data-animation-element": "paragraphs",
                  class: "content-p cc-2",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  w(
                    "p",
                    { class: "u-ts-1" },
                    " When you want to build enduring digital products for an increasingly-digital future, first establish your Basis. "
                  ),
                ]
              ),
              w("div", { class: "btn-group" }, [
                w(
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
                    w(
                      "a",
                      {
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        class: "btn w-inline-block",
                      },
                      [
                        w("div", { class: "btn-text-wrap" }, [
                          w("div", { class: "btn-text" }, "Start a project"),
                          w(
                            "div",
                            { class: "btn-text cc-bottom" },
                            "Start a project"
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
                w(
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
                    w(
                      "a",
                      {
                        class: "btn cc-secondary w-inline-block",
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                      },
                      [
                        w("div", { class: "btn-text-wrap" }, [
                          w("div", { class: "btn-text" }, "Design trial"),
                          w(
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
      w("div", { class: "u-mt-8-75", "data-v-57509004": "" }, [
        w("div", { class: "marquee", "data-v-57509004": "" }, [
          w("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            w(
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w(
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
                        w("img", {
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w(
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
                        w("img", {
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w(
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
                        w("img", {
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w(
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
                        w("img", {
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w(
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
                        w("img", {
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w(
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
                        w("img", {
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w(
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
                        w("img", {
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w(
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
                        w("img", {
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w(
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
                        w("img", {
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
          w("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            w(
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
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
          w("div", { class: "marquee_row w-dyn-list", "data-v-57509004": "" }, [
            w(
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
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240d_logo_mastercard.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
                      loading: "eager",
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png",
                      alt: "",
                      class: "marquee_logo",
                      "data-v-57509004": "",
                    }),
                  ]
                ),
                w(
                  "div",
                  {
                    role: "listitem",
                    class: "marquee_logo w-dyn-item",
                    "data-v-57509004": "",
                  },
                  [
                    w("img", {
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
  cs = w(
    "div",
    { class: "container" },
    [w("div", { class: "target_line" })],
    -1
  ),
  ns = w(
    "section",
    { class: "section" },
    [
      w("div", { class: "section-title_component" }, [
        w("div", { class: "container" }, [
          w(
            "div",
            {
              class: "section-title_wrapper",
              "data-aos": "fade-up",
              "data-aos-duration": "700",
            },
            [
              w("div", { class: "section-title_dot", style: { opacity: "1" } }),
              w("div", { class: "u-overflow-hidden" }, [
                w("div", { class: "section-title_title" }, [
                  w("h2", { class: "u-ts-4" }, "What we do"),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
      w("div", { class: "container" }, [
        w("div", { "data-animation-element": "group", class: "row" }, [
          w("div", { class: "col col-lg-4 col-md-hide" }),
          w("div", { class: "col" }, [
            w("div", { class: "service-list" }, [
              w(
                "div",
                {
                  class: "logomark_component",
                  "data-aos": "fade-up",
                  "data-aos-duration": "700",
                },
                [
                  w(
                    "div",
                    {
                      class: "logomark w-embed",
                      style: {
                        transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                        "transform-style": "preserve-3d",
                      },
                    },
                    [
                      w(
                        "svg",
                        {
                          height: "100%",
                          style: {},
                          viewBox: "0 0 185 80",
                          fill: "currentColor",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        [
                          w("path", {
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
              w("ul", { role: "list", class: "u-mt-3-5" }, [
                w(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
                      "div",
                      {
                        class: "list-content cc-1",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [w("h3", { class: "u-tc-caps" }, "Research")]
                    ),
                  ]
                ),
                w(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
                      "div",
                      {
                        class: "list-content cc-2",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [w("h3", { class: "u-tc-caps" }, "Brand Strategy")]
                    ),
                  ]
                ),
                w(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
                      "div",
                      {
                        class: "list-content cc-3",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [w("h3", { class: "u-tc-caps" }, "Creative Direction")]
                    ),
                  ]
                ),
                w(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
                      "div",
                      {
                        class: "list-content cc-4",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [w("h3", { class: "u-tc-caps" }, "Brand identity")]
                    ),
                  ]
                ),
                w(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
                      "div",
                      {
                        class: "list-content cc-5",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [w("h3", { class: "u-tc-caps" }, "UX & UI Design")]
                    ),
                  ]
                ),
                w(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
                      "div",
                      {
                        class: "list-content cc-6",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [w("h3", { class: "u-tc-caps" }, "Interaction Design")]
                    ),
                  ]
                ),
                w(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
                      "div",
                      {
                        class: "list-content cc-7",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [w("h3", { class: "u-tc-caps" }, "Implementation")]
                    ),
                  ]
                ),
                w(
                  "li",
                  {
                    class: "u-overflow-hidden",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
                      "div",
                      {
                        class: "list-content cc-8",
                        style: {
                          transform:
                            "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                          "transform-style": "preserve-3d",
                        },
                      },
                      [w("h3", { class: "u-tc-caps" }, "Webflow Development")]
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
  ps = ne(
    '<div class="container"><div class="target_line"></div></div><section class="section"><div class="section-title_component"><div class="container"><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700"><div class="section-title_dot" style="opacity:1;"></div><div class="u-overflow-hidden"><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><h2 class="u-ts-4">Contact Us</h2></div></div></div></div></div><div class="container"><div class="w-layout-grid pair-grid"><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext"><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"><div style="position:relative;display:inline-block;"> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  );
var vs = Se(ls, [
    [
      "render",
      function (e, a, s, t, i, l) {
        const o = S("Footer");
        return g(), b(_, null, [os, rs, ds, cs, ns, ps, B(o)], 64);
      },
    ],
  ]),
  ms = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vs },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const fs = {
    title: "pages.home.nav.about",
    components: { Footer: is },
    setup() {
      const { t: e } = Fe();
      return (
        C(() => {
          ce.init(),
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
  us = ((e) => (pe("data-v-1e533af6"), (e = e()), ve(), e))(() =>
    w(
      "div",
      { id: "cases", class: "wrap" },
      [
        w("div", { class: "cases-slider" }, [
          w("h1", { id: "case-title" }, "Cases"),
          w(
            "div",
            { role: "list", class: "cases-list w-dyn-items container" },
            [
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  w("div", { class: "cases-assets" }, [
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                      loading: "eager",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    w("div", { class: "iframe-video_wrapper" }, [
                      w("iframe", {
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
                      w("div", { class: "iframe-video_blocker" }),
                    ]),
                  ]),
                  w("div", { class: "cases-text" }, [
                    w("div", { class: "u-ts-2" }, "Sable Brand"),
                  ]),
                ]),
                w("link", { rel: "prerender" }),
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait w-condition-invisible",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape w-condition-invisible",
                      }),
                      w("div", null, [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
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
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "cases-more" }, [
                        w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          G(" Contact us"),
                          w("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      w("div", { class: "u-ts-2" }, "Sable Brand"),
                    ]),
                  ]
                ),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  w("div", { class: "cases-assets" }, [
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                      loading: "eager",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    w("div", { class: "iframe-video_wrapper" }, [
                      w("iframe", {
                        class: "iframe-video_iframe",
                        width: "100%",
                        height: "100%",
                        style: { overflow: "hidden" },
                        frameborder: "0",
                        scrolling: "no",
                        allow: "fullscreen",
                        loading: "lazy",
                      }),
                      w("div", { class: "iframe-video_blocker" }),
                    ]),
                  ]),
                  w("div", { class: "cases-text" }, [
                    w("div", { class: "u-ts-2" }, "Sable Website"),
                  ]),
                ]),
                w("link", { rel: "prerender" }),
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "w-condition-invisible" }, [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "cases-more" }, [
                        w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          G(" Contact us"),
                          w("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      w("div", { class: "u-ts-2" }, "Sable Website"),
                    ]),
                  ]
                ),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  w("div", { class: "cases-assets" }, [
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
                      loading: "eager",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    w("div", { class: "iframe-video_wrapper" }, [
                      w("iframe", {
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
                      w("div", { class: "iframe-video_blocker" }),
                    ]),
                  ]),
                  w("div", { class: "cases-text" }, [
                    w("div", { class: "u-ts-2" }, "Seen Brand"),
                  ]),
                ]),
                w("link", { rel: "prerender" }),
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait w-condition-invisible",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape w-condition-invisible",
                      }),
                      w("div", null, [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
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
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "cases-more" }, [
                        w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          G(" Contact us"),
                          w("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      w("div", { class: "u-ts-2" }, "Seen Brand"),
                    ]),
                  ]
                ),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c059ddfa369d3d815259b_google-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c059ddfa369d3d815258d_google-website-card-image-mobile.jpeg",
                        loading: "eager",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "u-ts-2" }, "Google Website"),
                    ]),
                  ]
                ),
                w("link", { rel: "prerender" }),
                w("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  w("div", { class: "cases-assets" }, [
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c059ddfa369d3d815259b_google-website-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c059ddfa369d3d815258d_google-website-card-image-mobile.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    w("div", { class: "w-condition-invisible" }, [
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                  ]),
                  w("div", { class: "cases-text" }, [
                    w("div", { class: "cases-more" }, [
                      w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                        G(" Contact us"),
                        w("span", { class: "hide-tablet" }, " for more"),
                      ]),
                    ]),
                    w("div", { class: "u-ts-2" }, "Google Website"),
                  ]),
                ]),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  w("div", { class: "cases-assets" }, [
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop.jpg",
                      loading: "lazy",
                      alt: "",
                      sizes: "(max-width: 991px) 100vw, 23vw",
                      srcset:
                        "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop.jpg       652w\n                ",
                      class: "cases-portrait",
                    }),
                    w("img", {
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
                    w("div", { class: "iframe-video_wrapper" }, [
                      w("iframe", {
                        class: "iframe-video_iframe",
                        width: "100%",
                        height: "100%",
                        style: { overflow: "hidden" },
                        frameborder: "0",
                        scrolling: "no",
                        allow: "fullscreen",
                        loading: "lazy",
                      }),
                      w("div", { class: "iframe-video_blocker" }),
                    ]),
                  ]),
                  w("div", { class: "cases-text" }, [
                    w("div", { class: "u-ts-2" }, "Yoginess Website"),
                  ]),
                ]),
                w("link", { rel: "prerender" }),
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "100vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783388d56c18890761b05_yoginess-website-card-image-desktop.jpg       652w\n                ",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b7833c017d36c1b76d13d8_yoginess-website-card-image-mobile.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "100vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7833c017d36c1b76d13d8_yoginess-website-card-image-mobile-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7833c017d36c1b76d13d8_yoginess-website-card-image-mobile.jpg       718w\n                ",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "w-condition-invisible" }, [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "cases-more" }, [
                        w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          G(" Contact us"),
                          w("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      w("div", { class: "u-ts-2" }, "Yoginess Website"),
                    ]),
                  ]
                ),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  w("div", { class: "cases-assets" }, [
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c060f54192514006e8a96_yoginess-brand-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c060f54192514006e8ac2_yoginess-brand-card-image-mobile.jpeg",
                      loading: "eager",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    w("div", { class: "iframe-video_wrapper" }, [
                      w("iframe", {
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
                      w("div", { class: "iframe-video_blocker" }),
                    ]),
                  ]),
                  w("div", { class: "cases-text" }, [
                    w("div", { class: "u-ts-2" }, "Yoginess Brand"),
                  ]),
                ]),
                w("link", { rel: "prerender" }),
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060f54192514006e8a96_yoginess-brand-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait w-condition-invisible",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060f54192514006e8ac2_yoginess-brand-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape w-condition-invisible",
                      }),
                      w("div", null, [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
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
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "cases-more" }, [
                        w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          G(" Contact us"),
                          w("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      w("div", { class: "u-ts-2" }, "Yoginess Brand"),
                    ]),
                  ]
                ),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c059b2c206b9665872077_airbnb-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c059b2c206b966587207a_airbnb-website-card-image-mobile.jpeg",
                        loading: "eager",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "u-ts-2" }, "Airbnb Website"),
                    ]),
                  ]
                ),
                w("link", { rel: "prerender" }),
                w("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  w("div", { class: "cases-assets" }, [
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c059b2c206b9665872077_airbnb-website-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c059b2c206b966587207a_airbnb-website-card-image-mobile.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    w("div", { class: "w-condition-invisible" }, [
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                  ]),
                  w("div", { class: "cases-text" }, [
                    w("div", { class: "cases-more" }, [
                      w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                        G(" Contact us"),
                        w("span", { class: "hide-tablet" }, " for more"),
                      ]),
                    ]),
                    w("div", { class: "u-ts-2" }, "Airbnb Website"),
                  ]),
                ]),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w(
                  "a",
                  {
                    href: "/cases/sable-app",
                    class: "cases-card cc-immediate w-inline-block",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                        loading: "eager",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "u-ts-2" }, "Sable App"),
                    ]),
                  ]
                ),
                w("link", { rel: "prerender", href: "/cases/sable-app" }),
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "w-condition-invisible" }, [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "cases-more" }, [
                        w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          G(" Contact us"),
                          w("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      w("div", { class: "u-ts-2" }, "Sable App"),
                    ]),
                  ]
                ),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w(
                  "a",
                  {
                    href: "/cases/seen-website",
                    class: "cases-card cc-immediate w-inline-block",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06136822989dcad4c306_seen-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06126822989dcad4c2b7_seen-website-card-image-mobile.jpeg",
                        loading: "eager",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "u-ts-2" }, "Seen Website"),
                    ]),
                  ]
                ),
                w("link", { rel: "prerender", href: "/cases/seen-website" }),
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06136822989dcad4c306_seen-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c06126822989dcad4c2b7_seen-website-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "w-condition-invisible" }, [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "cases-more" }, [
                        w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          G(" Contact us"),
                          w("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      w("div", { class: "u-ts-2" }, "Seen Website"),
                    ]),
                  ]
                ),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w(
                  "a",
                  {
                    href: "/cases/gaffa-brand-and-website",
                    class: "cases-card cc-immediate w-inline-block",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060c799046de5a4758ca_gaffa-brand-and-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060c799046de5a4758d0_gaffa-brand-and-website-card-image-mobile.jpeg",
                        loading: "eager",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
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
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "u-ts-2" }, "Gaffa Brand & Website"),
                    ]),
                  ]
                ),
                w("link", {
                  rel: "prerender",
                  href: "/cases/gaffa-brand-and-website",
                }),
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060c799046de5a4758ca_gaffa-brand-and-website-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait w-condition-invisible",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c060c799046de5a4758d0_gaffa-brand-and-website-card-image-mobile.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-landscape w-condition-invisible",
                      }),
                      w("div", null, [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
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
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "cases-more" }, [
                        w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          G(" Contact us"),
                          w("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      w("div", { class: "u-ts-2" }, "Gaffa Brand & Website"),
                    ]),
                  ]
                ),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w(
                  "a",
                  {
                    href: "/cases/seen-app",
                    class: "cases-card cc-immediate w-inline-block",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "(max-width: 991px) 100vw, 23vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop.jpg       652w\n                ",
                        class: "cases-portrait",
                      }),
                      w("img", {
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
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "u-ts-2" }, "Seen App"),
                    ]),
                  ]
                ),
                w("link", { rel: "prerender", href: "/cases/seen-app" }),
                w(
                  "a",
                  {
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "100vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b783257a29dbaf17b966f2_seen-app-card-image-desktop.jpg       652w\n                ",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/65b7832af68a6b0d31f2caec_seen-app-card-image-mobile.jpg",
                        loading: "lazy",
                        alt: "",
                        sizes: "100vw",
                        srcset:
                          "\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7832af68a6b0d31f2caec_seen-app-card-image-mobile-p-500.jpg 500w,\n                  https://assets-global.website-files.com/6584502438fea068af552349/65b7832af68a6b0d31f2caec_seen-app-card-image-mobile.jpg       718w\n                ",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "w-condition-invisible" }, [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
                            class: "iframe-video_iframe",
                            width: "100%",
                            height: "100%",
                            style: { overflow: "hidden" },
                            frameborder: "0",
                            scrolling: "no",
                            allow: "fullscreen",
                            loading: "lazy",
                          }),
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "cases-more" }, [
                        w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                          G(" Contact us"),
                          w("span", { class: "hide-tablet" }, " for more"),
                        ]),
                      ]),
                      w("div", { class: "u-ts-2" }, "Seen App"),
                    ]),
                  ]
                ),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w(
                  "a",
                  {
                    href: "/cases/pc-financial-app",
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05a12be233804d8b2f89_pc-financial-app-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05a12be233804d8b2f85_pc-financial-app-card-image-mobile.jpeg",
                        loading: "eager",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "u-ts-2" }, "PC Financial App"),
                    ]),
                  ]
                ),
                w("link", {
                  rel: "prerender",
                  href: "/cases/pc-financial-app",
                }),
                w("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  w("div", { class: "cases-assets" }, [
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05a12be233804d8b2f89_pc-financial-app-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05a12be233804d8b2f85_pc-financial-app-card-image-mobile.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    w("div", { class: "w-condition-invisible" }, [
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                  ]),
                  w("div", { class: "cases-text" }, [
                    w("div", { class: "cases-more" }, [
                      w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                        G(" Contact us"),
                        w("span", { class: "hide-tablet" }, " for more"),
                      ]),
                    ]),
                    w("div", { class: "u-ts-2" }, "PC Financial App"),
                  ]),
                ]),
              ]),
              w("div", { role: "listitem", class: "cases-item w-dyn-item" }, [
                w(
                  "a",
                  {
                    href: "/cases/red-bull-app",
                    class:
                      "cases-card cc-immediate w-inline-block w-condition-invisible",
                  },
                  [
                    w("div", { class: "cases-assets" }, [
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05a4e59bf0c2c753f098_red-bull-app-card-image-desktop.jpeg",
                        loading: "lazy",
                        alt: "",
                        class: "cases-portrait",
                      }),
                      w("img", {
                        src:
                          "https://assets-global.website-files.com/6584502438fea068af552349/659c05a4e59bf0c2c753f09c_red-bull-app-card-image-mobile.jpeg",
                        loading: "eager",
                        alt: "",
                        class: "cases-landscape",
                      }),
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                    w("div", { class: "cases-text" }, [
                      w("div", { class: "u-ts-2" }, "Red Bull App"),
                    ]),
                  ]
                ),
                w("link", { rel: "prerender", href: "/cases/red-bull-app" }),
                w("a", { class: "cases-card cc-immediate w-inline-block" }, [
                  w("div", { class: "cases-assets" }, [
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05a4e59bf0c2c753f098_red-bull-app-card-image-desktop.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-portrait",
                    }),
                    w("img", {
                      src:
                        "https://assets-global.website-files.com/6584502438fea068af552349/659c05a4e59bf0c2c753f09c_red-bull-app-card-image-mobile.jpeg",
                      loading: "lazy",
                      alt: "",
                      class: "cases-landscape",
                    }),
                    w("div", { class: "w-condition-invisible" }, [
                      w("div", { class: "iframe-video_wrapper" }, [
                        w("iframe", {
                          class: "iframe-video_iframe",
                          width: "100%",
                          height: "100%",
                          style: { overflow: "hidden" },
                          frameborder: "0",
                          scrolling: "no",
                          allow: "fullscreen",
                          loading: "lazy",
                        }),
                        w("div", { class: "iframe-video_blocker" }),
                      ]),
                    ]),
                  ]),
                  w("div", { class: "cases-text" }, [
                    w("div", { class: "cases-more" }, [
                      w("div", { class: "u-ts-6 u-tc-caps u-text-accent1" }, [
                        G(" Contact us"),
                        w("span", { class: "hide-tablet" }, " for more"),
                      ]),
                    ]),
                    w("div", { class: "u-ts-2" }, "Red Bull App"),
                  ]),
                ]),
              ]),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  gs = ne(
    '<div class="container mobile-show" data-v-1e533af6><div class="target_line" data-v-1e533af6></div></div><section class="section mobile-show" data-v-1e533af6><div class="section-title_component" data-v-1e533af6><div class="container" data-v-1e533af6><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-1e533af6><div class="section-title_dot" style="opacity:1;" data-v-1e533af6></div><div class="u-overflow-hidden" data-v-1e533af6><div class="section-title_title" data-v-1e533af6><h2 class="u-ts-4" data-v-1e533af6>Contact Us</h2></div></div></div></div></div><div class="container" data-v-1e533af6><div class="w-layout-grid pair-grid" data-v-1e533af6><div data-v-1e533af6><div class="contact-cta w-richtext" data-v-1e533af6><h3 data-aos="fade-up" data-aos-duration="700" data-v-1e533af6><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-1e533af6><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-1e533af6> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-1e533af6> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-1e533af6> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-1e533af6> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-1e533af6> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-1e533af6><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-1e533af6><div style="position:relative;display:inline-block;" data-v-1e533af6> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  );
var bs = Se(fs, [
    [
      "render",
      function (e, a, s, t, i, l) {
        const o = S("Footer");
        return g(), b(_, null, [us, gs, B(o, { class: "mobile-show" })], 64);
      },
    ],
    ["__scopeId", "data-v-1e533af6"],
  ]),
  ws = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: bs },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const hs = {
    layout: "layout-demo",
    setup() {
      const e = ua(),
        { t: a, locale: s, setPrefix: t, change: i } = Fe();
      t({ $current: "pages.demo" });
      const l = W(),
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
  ys = { class: "demo" },
  _s = { class: "demo-head" },
  xs = { class: "switch" },
  ks = w("input", { type: "checkbox", class: "cb" }, null, -1),
  js = [
    w("span", { class: "left" }, "CN", -1),
    w("span", { class: "right" }, "En", -1),
  ],
  zs = { class: "demo-head-content" },
  Cs = { class: "demo-actions" },
  Ss = { class: "radio-inputs" },
  qs = w("input", { type: "radio", name: "radio", checked: "" }, null, -1),
  Os = { class: "name" },
  As = w("input", { type: "radio", name: "radio" }, null, -1),
  Bs = { class: "name" },
  Es = w("input", { type: "radio", name: "radio" }, null, -1),
  Ts = { class: "name" };
var Ls = Se(hs, [
    [
      "render",
      function (e, a, s, t, i, l) {
        return (
          g(),
          b("div", ys, [
            w("div", _s, [
              w("div", null, [
                w("label", xs, [
                  ks,
                  w(
                    "span",
                    {
                      class: "toggle",
                      onClick:
                        a[0] ||
                        (a[0] = (...e) => t.changeLang && t.changeLang(...e)),
                    },
                    js
                  ),
                ]),
              ]),
              w("div", zs, "lang:" + Y(t.lang.current), 1),
            ]),
            w("div", Cs, [
              w("div", Ss, [
                w(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[1] || (a[1] = (...e) => t.toHome && t.toHome(...e)),
                  },
                  [qs, w("span", Os, Y(t.t("$current.router.link")), 1)]
                ),
                w(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[2] ||
                      (a[2] = (...e) => t.swalModal && t.swalModal(...e)),
                  },
                  [As, w("span", Bs, Y(t.t("$current.modal.swal")), 1)]
                ),
                w(
                  "label",
                  {
                    class: "radio",
                    onClick:
                      a[3] ||
                      (a[3] = (...e) => t.popupModal && t.popupModal(...e)),
                  },
                  [Es, w("span", Ts, Y(t.t("$current.popup.use")), 1)]
                ),
              ]),
            ]),
          ])
        );
      },
    ],
  ]),
  Is = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ls },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Ps = (e) =>
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
  Ms = {
    components: { Footer: is },
    setup() {
      const { t: e } = Fe();
      return (
        C(() => {
          ce.init();
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
        { t: e, getVideoUrl: Ps }
      );
    },
  },
  Ds = { "data-mouse-class": "cc-icon", class: "header cc-large" },
  Fs = { class: "header-image_wrap" },
  Us = { class: "header-image" },
  Vs = { class: "iframe-video_wrapper" },
  Hs = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Ns = ["src"],
  Ws = G(" Your browser does not support the video tag. "),
  Rs = w("div", { class: "iframe-video_blocker" }, null, -1),
  Xs = ne(
    '<div class="header-content_wrapper"><div class="container"><div class="row"><div data-animation-trigger="transition" data-animation-element="group" class="col col-lg-6 col-md-12"><div class="header-content_main"><div class="text-wrap-balance" data-aos="fade-up" data-aos-duration="700"><h1 data-animation-element="title" class="h4"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> The </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> agency </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> for </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> the </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> next </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> generation </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> of </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> fintech. </div></div></h1></div><div class="header-content_cta" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;"><div class="header-content_icon w-embed"><svg width="100%" style="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4384 2.2207C10.6795 2.2207 10.875 2.40725 10.875 2.63737V16.1124L14.7524 12.404C14.8344 12.3252 14.946 12.2808 15.0624 12.2808C15.1788 12.2808 15.2904 12.3252 15.3724 12.404L15.9837 12.9957C16.0664 13.0739 16.1128 13.1804 16.1128 13.2915C16.1128 13.4026 16.0664 13.5091 15.9837 13.5874L10.6305 18.704C10.5078 18.8213 10.3413 18.8872 10.1677 18.8874H9.83581C9.66254 18.8854 9.49674 18.8198 9.37298 18.704L4.01978 13.5874C3.93712 13.5091 3.89062 13.4026 3.89062 13.2915C3.89062 13.1804 3.93712 13.0739 4.01978 12.9957L4.63981 12.404C4.72029 12.3256 4.83046 12.2815 4.94546 12.2815C5.06046 12.2815 5.17062 12.3256 5.2511 12.404L9.12846 16.1124V2.63737C9.12846 2.40725 9.32395 2.2207 9.5651 2.2207H10.4384Z" fill="black"></path></svg></div></div></div></div></div></div></div><div data-transition="in" class="header-trigger"></div>',
    2
  ),
  Ys = w("div", { class: "spacing" }, null, -1),
  Zs = w(
    "div",
    { class: "container" },
    [w("div", { class: "target_line" })],
    -1
  ),
  Gs = w(
    "section",
    { class: "section over-h" },
    [
      w("div", { class: "section-title_component" }, [
        w("div", { class: "container" }, [
          w(
            "div",
            {
              class: "section-title_wrapper",
              "data-aos": "fade-up",
              "data-aos-duration": "700",
            },
            [
              w(
                "div",
                { class: "section-title_dot", style: { opacity: "1" } },
                [
                  w("div", {
                    class: "section-title_dot-fill",
                    style: { width: "100%", height: "100%" },
                  }),
                ]
              ),
              w("div", { class: "u-overflow-hidden" }, [
                w(
                  "div",
                  {
                    class: "section-title_title",
                    style: {
                      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [w("h2", { class: "u-ts-4" }, "Fintech Design Specialists")]
                ),
              ]),
            ]
          ),
        ]),
      ]),
      w("div", { class: "container" }, [
        w(
          "div",
          {
            class: "w-layout-grid pair-grid",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
          },
          [
            w(
              "div",
              {
                id: "w-node-_88e3e548-f2e0-1176-a852-0e15f232b846-af55239c",
                class: "content",
              },
              [
                w(
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
                    w(
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
        w("div", { class: "sticky-pair cc-far" }, [
          w("div", { class: "w-layout-grid pair-grid" }, [
            w("div", { class: "div-block" }, [
              w("div", { class: "card-wrapper cc-small" }, [
                w("div", { class: "card-animation cc-40" }, [
                  w(
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
                      w(
                        "div",
                        {
                          class: "card-image_wrapper",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("div", { class: "iframe-video_wrapper" }, [
                            w("iframe", {
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
                            w("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]
                      ),
                      w(
                        "div",
                        {
                          class: "card-body",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("div", { class: "u-overflow-hidden" }, [
                            w(
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
                                w(
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
            w("div", { class: "card-wrapper cc-large" }, [
              w("div", { class: "card-animation cc-40" }, [
                w(
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
                    w(
                      "div",
                      {
                        class: "card-image_wrapper",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                      },
                      [
                        w("div", { class: "iframe-video_wrapper" }, [
                          w("iframe", {
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
                          w("div", { class: "iframe-video_blocker" }),
                        ]),
                      ]
                    ),
                    w(
                      "div",
                      {
                        class: "card-body",
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                      },
                      [
                        w("div", { class: "u-overflow-hidden" }, [
                          w(
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
                              w("div", { class: "card-large_text" }, [
                                w(
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
            w(
              "div",
              {
                id: "w-node-_197491fd-e75f-5caa-bd6c-f56fc5e78edc-af55239c",
                class: "content",
              },
              [
                w(
                  "div",
                  {
                    class: "content-p cc-1",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
                      "p",
                      { class: "u-ts-1" },
                      " After rebranding banks, producing sleek new cards, and seamlessly integrating those elements into cohesive, future-proof brands, Basis can deliver results in record time. Get started with our Fintech Trial and get design results for your most essential deliverables in three weeks. "
                    ),
                  ]
                ),
                w("div", { class: "btn-group" }, [
                  w(
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
                      w(
                        "a",
                        {
                          "data-aos": "fade-left",
                          "data-aos-duration": "1000",
                          class: "btn w-inline-block",
                        },
                        [
                          w("div", { class: "btn-text-wrap" }, [
                            w("div", { class: "btn-text" }, "Contact Us"),
                            w(
                              "div",
                              { class: "btn-text cc-bottom" },
                              "Contact Us"
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  w(
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
                      w(
                        "a",
                        {
                          class: "btn cc-secondary w-inline-block",
                          "data-aos": "fade-left",
                          "data-aos-duration": "1000",
                        },
                        [
                          w("div", { class: "btn-text-wrap" }, [
                            w(
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
                            w(
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
  Ks = w(
    "div",
    { class: "container" },
    [w("div", { class: "target_line" })],
    -1
  ),
  $s = w(
    "section",
    { class: "section" },
    [
      w("div", { class: "section-title_component" }, [
        w("div", { class: "container" }, [
          w(
            "div",
            {
              class: "section-title_wrapper",
              "data-aos": "fade-up",
              "data-aos-duration": "700",
            },
            [
              w("div", { class: "section-title_dot", style: { opacity: "1" } }),
              w("div", { class: "u-overflow-hidden" }, [
                w(
                  "div",
                  {
                    class: "section-title_title",
                    style: {
                      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [w("h2", { class: "u-ts-4" }, "Fintech Capabilities")]
                ),
              ]),
            ]
          ),
        ]),
      ]),
      w("div", { class: "container" }, [
        w("div", { class: "w-layout-grid pair-grid" }, [
          w(
            "div",
            {
              id: "w-node-b0cbec4a-56c8-e8e7-790a-68e14ee2ef27-af55239c",
              class: "service-list",
            },
            [
              w("div", { class: "service-list" }, [
                w(
                  "div",
                  {
                    class: "logomark_component",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                  },
                  [
                    w(
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
                        w(
                          "svg",
                          {
                            height: "100%",
                            style: {},
                            viewBox: "0 0 185 80",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          [
                            w("path", {
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
                w("ul", { role: "list", class: "u-mt-3-5" }, [
                  w(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "list-content cc-1",
                          style: {
                            transform:
                              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                            "transform-style": "preserve-3d",
                          },
                        },
                        [w("h3", { class: "u-tc-caps" }, "Digital Banking,")]
                      ),
                    ]
                  ),
                  w(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
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
                          w(
                            "h3",
                            { class: "u-tc-caps" },
                            "Credit Card Designs,"
                          ),
                        ]
                      ),
                    ]
                  ),
                  w(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "list-content cc-3",
                          style: {
                            transform:
                              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                            "transform-style": "preserve-3d",
                          },
                        },
                        [w("h3", { class: "u-tc-caps" }, "Digital Wallets,")]
                      ),
                    ]
                  ),
                  w(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "list-content cc-4",
                          style: {
                            transform:
                              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                            "transform-style": "preserve-3d",
                          },
                        },
                        [w("h3", { class: "u-tc-caps" }, "Payment Services,")]
                      ),
                    ]
                  ),
                  w(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "list-content cc-5",
                          style: {
                            transform:
                              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                            "transform-style": "preserve-3d",
                          },
                        },
                        [w("h3", { class: "u-tc-caps" }, "Card Packaging,")]
                      ),
                    ]
                  ),
                  w(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
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
                          w(
                            "h3",
                            { class: "u-tc-caps" },
                            "Information Architecture,"
                          ),
                        ]
                      ),
                    ]
                  ),
                  w(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "list-content cc-7",
                          style: {
                            transform:
                              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                            "transform-style": "preserve-3d",
                          },
                        },
                        [w("h3", { class: "u-tc-caps" }, "Mobile Apps,")]
                      ),
                    ]
                  ),
                  w(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "list-content cc-8",
                          style: {
                            transform:
                              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                            "transform-style": "preserve-3d",
                          },
                        },
                        [w("h3", { class: "u-tc-caps" }, "Prototypes,")]
                      ),
                    ]
                  ),
                  w(
                    "li",
                    {
                      class: "u-overflow-hidden",
                      "data-aos": "fade-up",
                      "data-aos-duration": "700",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "list-content cc-9",
                          style: {
                            transform:
                              "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                            "transform-style": "preserve-3d",
                          },
                        },
                        [w("h3", { class: "u-tc-caps" }, "Gamification.")]
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
  Js = w(
    "div",
    { class: "container" },
    [w("div", { class: "target_line" })],
    -1
  ),
  Qs = w(
    "section",
    { class: "section" },
    [
      w("div", { class: "section-title_component" }, [
        w("div", { class: "container" }, [
          w(
            "div",
            {
              class: "section-title_wrapper",
              "data-aos": "fade-up",
              "data-aos-duration": "700",
            },
            [
              w("div", { class: "section-title_dot", style: { opacity: "1" } }),
              w("div", { class: "u-overflow-hidden" }, [
                w(
                  "div",
                  {
                    class: "section-title_title",
                    style: {
                      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
                      "transform-style": "preserve-3d",
                    },
                  },
                  [w("h2", { class: "u-ts-4" }, "Fintech Work")]
                ),
              ]),
            ]
          ),
        ]),
      ]),
      w("div", { class: "container" }, [
        w("div", { class: "row" }, [w("div", { class: "col" })]),
        w("div", { class: "w-dyn-list" }, [
          w("div", { role: "list", class: "row w-dyn-items" }, [
            w("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              w(
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
                  w(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-brand",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait w-condition-invisible",
                          }),
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape w-condition-invisible",
                          }),
                          w("div", null, [
                            w("div", { class: "iframe-video_wrapper" }, [
                              w("iframe", {
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
                              w("div", { class: "iframe-video_blocker" }),
                            ]),
                          ]),
                        ]
                      ),
                      w(
                        "div",
                        {
                          class: "cases-text cc-auto",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [w("div", { class: "u-ts-2" }, "Sable Brand")]
                      ),
                    ]
                  ),
                  w("link", { rel: "prerender", href: "/cases/sable-brand" }),
                  w(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape",
                          }),
                          w("div", { class: "iframe-video_wrapper" }, [
                            w("iframe", {
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
                            w("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]
                      ),
                      w("div", { class: "cases-text" }, [
                        w("div", { class: "cases-more" }, [
                          w(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              G(" Contact us"),
                              w("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        w("div", { class: "u-ts-2" }, "Sable Brand"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            w("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              w(
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
                  w(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-website",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape",
                          }),
                          w("div", { class: "w-condition-invisible" }, [
                            w("div", { class: "iframe-video_wrapper" }, [
                              w("iframe", {
                                class: "iframe-video_iframe",
                                width: "100%",
                                height: "100%",
                                style: { overflow: "hidden" },
                                frameborder: "0",
                                scrolling: "no",
                                allow: "fullscreen",
                                loading: "lazy",
                              }),
                              w("div", { class: "iframe-video_blocker" }),
                            ]),
                          ]),
                        ]
                      ),
                      w(
                        "div",
                        {
                          class: "cases-text cc-auto",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [w("div", { class: "u-ts-2" }, "Sable Website")]
                      ),
                    ]
                  ),
                  w("link", { rel: "prerender", href: "/cases/sable-website" }),
                  w(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb98e7_sable-website-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c0606ca89b57014cb9903_sable-website-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape",
                          }),
                          w("div", { class: "iframe-video_wrapper" }, [
                            w("iframe", {
                              class: "iframe-video_iframe",
                              width: "100%",
                              height: "100%",
                              style: { overflow: "hidden" },
                              frameborder: "0",
                              scrolling: "no",
                              allow: "fullscreen",
                              loading: "lazy",
                            }),
                            w("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]
                      ),
                      w("div", { class: "cases-text" }, [
                        w("div", { class: "cases-more" }, [
                          w(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              G(" Contact us"),
                              w("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        w("div", { class: "u-ts-2" }, "Sable Website"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            w("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              w(
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
                  w(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/seen-brand",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait w-condition-invisible",
                          }),
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape w-condition-invisible",
                          }),
                          w("div", null, [
                            w("div", { class: "iframe-video_wrapper" }, [
                              w("iframe", {
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
                              w("div", { class: "iframe-video_blocker" }),
                            ]),
                          ]),
                        ]
                      ),
                      w(
                        "div",
                        {
                          class: "cases-text cc-auto",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [w("div", { class: "u-ts-2" }, "Seen Brand")]
                      ),
                    ]
                  ),
                  w("link", { rel: "prerender", href: "/cases/seen-brand" }),
                  w(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a8348a_seen-brand-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f3258f562682a834cc_seen-brand-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape",
                          }),
                          w("div", { class: "iframe-video_wrapper" }, [
                            w("iframe", {
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
                            w("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]
                      ),
                      w("div", { class: "cases-text" }, [
                        w("div", { class: "cases-more" }, [
                          w(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              G(" Contact us"),
                              w("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        w("div", { class: "u-ts-2" }, "Seen Brand"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            w("div", { role: "listitem", class: "col col-md-12 w-dyn-item" }, [
              w(
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
                  w(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "/cases/sable-app",
                      class: "cases-card cc-auto w-inline-block",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape",
                          }),
                          w("div", { class: "w-condition-invisible" }, [
                            w("div", { class: "iframe-video_wrapper" }, [
                              w("iframe", {
                                class: "iframe-video_iframe",
                                width: "100%",
                                height: "100%",
                                style: { overflow: "hidden" },
                                frameborder: "0",
                                scrolling: "no",
                                allow: "fullscreen",
                                loading: "lazy",
                              }),
                              w("div", { class: "iframe-video_blocker" }),
                            ]),
                          ]),
                        ]
                      ),
                      w(
                        "div",
                        {
                          class: "cases-text cc-auto",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [w("div", { class: "u-ts-2" }, "Sable App")]
                      ),
                    ]
                  ),
                  w("link", { rel: "prerender", href: "/cases/sable-app" }),
                  w(
                    "a",
                    {
                      "data-mouse-class": "cc-text",
                      href: "mailto:hello@basis.work?subject=Enquiry",
                      class:
                        "cases-card cc-auto w-inline-block w-condition-invisible",
                    },
                    [
                      w(
                        "div",
                        {
                          class: "cases-assets",
                          "data-aos": "fade-up",
                          "data-aos-duration": "700",
                        },
                        [
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a40b8_sable-app-card-image-desktop.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-portrait",
                          }),
                          w("img", {
                            src:
                              "https://assets-global.website-files.com/6584502438fea068af552349/659c05f88a1a481cbc7a4099_sable-app-card-image-mobile.jpeg",
                            loading: "lazy",
                            alt: "",
                            class: "cases-landscape",
                          }),
                          w("div", { class: "iframe-video_wrapper" }, [
                            w("iframe", {
                              class: "iframe-video_iframe",
                              width: "100%",
                              height: "100%",
                              style: { overflow: "hidden" },
                              frameborder: "0",
                              scrolling: "no",
                              allow: "fullscreen",
                              loading: "lazy",
                            }),
                            w("div", { class: "iframe-video_blocker" }),
                          ]),
                        ]
                      ),
                      w("div", { class: "cases-text" }, [
                        w("div", { class: "cases-more" }, [
                          w(
                            "div",
                            { class: "u-ts-6 u-tc-caps u-text-accent1" },
                            [
                              G(" Contact us"),
                              w("span", { class: "hide-tablet" }, " for more"),
                            ]
                          ),
                        ]),
                        w("div", { class: "u-ts-2" }, "Sable App"),
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
  et = ne(
    '<div class="container"><div class="target_line"></div></div><section class="section"><div class="section-title_component"><div class="container"><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700"><div class="section-title_dot" style="opacity:1;"></div><div class="u-overflow-hidden"><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><h2 class="u-ts-4">Contact Us</h2></div></div></div></div></div><div class="container"><div class="w-layout-grid pair-grid"><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext"><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700"><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;"><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);"><div style="position:relative;display:inline-block;"> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  ),
  at = { class: "pre-footer" },
  st = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  tt = { class: "iframe-video_wrapper" },
  it = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  lt = ["src"],
  ot = G(" Your browser does not support the video tag. "),
  rt = w("div", { class: "iframe-video_blocker" }, null, -1),
  dt = ne(
    '<div class="pre-footer_gradient"></div><div class="marquee"><div class="marquee_content cc-text transparent" style="transform:translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;will-change:transform;"><div class="marquee_item cc-1 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-2 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-3 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div></div><div class="marquee_content cc-text transparent" style="transform:translate3d(-53.25%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;will-change:transform;"><div class="marquee_item cc-1 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-2 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div><div class="marquee_item cc-3 transparent" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;"><div class="h1">Design Trial </div></div></div></div><div class="pre-footer_button"><div class="btn cc-large-landscape"><div class="btn-text-wrap"><div class="btn-text cc-large-landscape">REad Next</div><div class="btn-text cc-bottom cc-large-landscape">Button</div></div></div></div>',
    3
  );
var ct = Se(Ms, [
    [
      "render",
      function (e, a, s, t, i, l) {
        const o = S("Footer");
        return (
          g(),
          b(
            _,
            null,
            [
              w("header", Ds, [
                w("div", Fs, [
                  w("div", Us, [
                    w("div", Vs, [
                      w("video", Hs, [
                        w(
                          "source",
                          {
                            src: t.getVideoUrl("home/knife1-1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          Ns
                        ),
                        Ws,
                      ]),
                      Rs,
                    ]),
                  ]),
                ]),
                Xs,
              ]),
              Ys,
              Zs,
              Gs,
              Ks,
              $s,
              Js,
              Qs,
              et,
              w("div", null, [
                w("aside", at, [
                  w("a", st, [
                    w("div", tt, [
                      w("video", it, [
                        w(
                          "source",
                          {
                            src: t.getVideoUrl("home/knife1-1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          lt
                        ),
                        ot,
                      ]),
                      rt,
                    ]),
                    dt,
                  ]),
                ]),
              ]),
              B(o),
            ],
            64
          )
        );
      },
    ],
  ]),
  nt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ct },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const pt = ["data-index"],
  vt = ["src"],
  mt = [
    ne(
      '<div class="btn-text-wrap"><div class="btn-text cc-scroll">請往下滑</div><div class="btn-text cc-bottom cc-scroll">請往下滑</div></div><div class="btn-icon cc-small w-embed"><svg width="100%" style="" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.30218 1.55469C7.47098 1.55469 7.60782 1.68527 7.60782 1.84635V11.2789L10.322 8.68302C10.3794 8.6278 10.4575 8.59675 10.539 8.59675C10.6205 8.59675 10.6986 8.6278 10.756 8.68302L11.1839 9.09719C11.2418 9.15195 11.2743 9.2265 11.2743 9.30427C11.2743 9.38204 11.2418 9.45659 11.1839 9.51135L7.43666 13.093C7.35076 13.1751 7.23423 13.2213 7.11267 13.2214H6.88038C6.75909 13.22 6.64303 13.174 6.5564 13.093L2.80916 9.51135C2.7513 9.45659 2.71875 9.38204 2.71875 9.30427C2.71875 9.2265 2.7513 9.15195 2.80916 9.09719L3.24318 8.68302C3.29952 8.62815 3.37663 8.59723 3.45713 8.59723C3.53763 8.59723 3.61475 8.62815 3.67109 8.68302L6.38523 11.2789V1.84635C6.38523 1.68527 6.52208 1.55469 6.69088 1.55469H7.30218Z" fill="currentColor"></path></svg></div>',
      2
    ),
  ];
const ft = {
  components: {
    Footer: is,
    View: {
      setup(e) {
        const a = x(),
          s = me({ x: 0, y: 0 }),
          t = k([
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
          i = k(!1),
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
        z(
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
        const d = k(!1),
          c = () => {
            d.value = window.innerWidth < 991;
          };
        return (
          C(() => {
            c(), window.addEventListener("resize", c), ce.init();
          }),
          (e, a) => (
            g(),
            b(
              _,
              null,
              [
                w(
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
                            style: X({
                              transform: `translate3d(${2 * y(s).x}px, ${
                                y(s).y
                              }px, 0) rotateX(${-y(s).y / 2}deg) rotateY(${
                                -y(s).x / 2
                              }deg)`,
                              transformOrigin: "center center",
                            }),
                          },
                          [
                            (g(!0),
                            b(
                              _,
                              null,
                              R(
                                t.value,
                                (e, a) => (
                                  g(),
                                  b(
                                    "div",
                                    {
                                      class: "img-wrap home-hero_image-placer",
                                      key: e.url + a,
                                      style: X({
                                        left: d.value ? "unset" : e.css.left,
                                        right: d.value
                                          ? e.css.m_right
                                          : "unset",
                                        top: d.value ? e.css.m_top : e.css.top,
                                        animation: e.isEnter
                                          ? e.css.enterAnimation
                                          : e.css.leaveAnimation,
                                      }),
                                      "data-index": a,
                                      "data-item": "img",
                                    },
                                    [
                                      w(
                                        "img",
                                        {
                                          src: y(ke)(e.url),
                                          style: X({
                                            width: d.value
                                              ? e.css.m_width
                                              : e.css.width,
                                            height: d.value
                                              ? e.css.m_height
                                              : e.css.height,
                                            transform: `translate3d(${
                                              y(s).x / 2
                                            }px,${y(s).y / 2}px, 100px)`,
                                          }),
                                        },
                                        null,
                                        12,
                                        vt
                                      ),
                                    ],
                                    12,
                                    pt
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
                w("div", { "data-reveal": "button", class: "home-hero_btn" }, [
                  w("div", { class: "btn-contain btn-contain-scroll" }, [
                    w(
                      "div",
                      { class: "btn-scroll w-inline-block", onClick: r },
                      mt
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
      { a: e, getVideoUrl: Ps, getImageUrl: ke }
    );
  },
};
ce.init();
const ut = (e) => (pe("data-v-a392040e"), (e = e()), ve(), e),
  gt = ut(() =>
    w("div", { class: "container" }, [w("div", { class: "target_line" })], -1)
  ),
  bt = { id: "studio", class: "section" },
  wt = ne(
    '<div class="section-title_component" data-v-a392040e><div class="container" data-v-a392040e><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-a392040e><div class="section-title_dot" style="opacity:1;" data-v-a392040e><div class="section-title_dot-fill" style="width:100%;height:100%;" data-v-a392040e></div></div><div class="u-overflow-hidden" data-v-a392040e><div class="section-title_title" data-v-a392040e><h2 class="u-ts-4" data-v-a392040e>詹紹綺人文藝術中心</h2></div></div></div></div></div><div class="container" data-v-a392040e><div class="w-layout-grid pair-grid" data-v-a392040e><div data-animation-element="group" id="w-node-_1d0de869-a418-1ffe-c192-cd0abecc9833-af552307" data-v-a392040e><h3 data-animation-element="title" data-v-a392040e><div class="u-overflow-hidden" data-aos="fade-up" data-aos-duration="800" style="display:block;text-align:start;position:relative;" data-v-a392040e><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e> 位於25樓雲海之中的藝術與文化博物館， </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-aos="fade-up" data-aos-duration="700" data-v-a392040e><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e> 典藏冠軍高山茶、茶道具及名壺、雕塑、獨家出品普洱和單一純麥威士忌。 </div></div></h3><div class="btn-group" data-v-a392040e><div class="btn-item cc-1" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0px);opacity:1;" data-v-a392040e><a class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text" data-v-a392040e>館藏查詢</div><div class="btn-text cc-bottom" data-v-a392040e>館藏查詢</div></div></a></div><div class="btn-item cc-2" data-aos="fade-up" data-aos-duration="3000" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0px);opacity:1;" data-v-a392040e><a href="/about" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text" data-v-a392040e>預約參觀</div><div class="btn-text cc-bottom" data-v-a392040e>預約參觀</div></div></a></div></div></div></div></div>',
    2
  ),
  ht = { class: "u-mt-8-75" },
  yt = { class: "marquee" },
  _t = { class: "marquee_row w-dyn-list" },
  xt = {
    role: "list",
    class: "marquee_content w-dyn-items",
    style: {
      transform: "translate3d(-4.75%, 0px, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      "will-change": "transform",
    },
  },
  kt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  jt = {
    class: "marquee_item cc-1",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  zt = ["src"],
  Ct = { role: "listitem", class: "marquee_logo w-dyn-item" },
  St = {
    class: "marquee_item cc-2",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  qt = ["src"],
  Ot = { role: "listitem", class: "marquee_logo w-dyn-item" },
  At = {
    class: "marquee_item cc-3",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Bt = ["src"],
  Et = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Tt = {
    class: "marquee_item cc-4",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Lt = ["src"],
  It = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Pt = {
    class: "marquee_item cc-5",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Mt = ["src"],
  Dt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Ft = {
    class: "marquee_item cc-6",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Ut = ["src"],
  Vt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Ht = {
    class: "marquee_item cc-7",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Nt = ["src"],
  Wt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Rt = {
    class: "marquee_item cc-8",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Xt = ["src"],
  Yt = { role: "listitem", class: "marquee_logo w-dyn-item" },
  Zt = {
    class: "marquee_item cc-9",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
    },
  },
  Gt = ["src"],
  Kt = ut(() =>
    w("div", { class: "container" }, [w("div", { class: "target_line" })], -1)
  ),
  $t = { class: "section" },
  Jt = ne(
    '<div class="section-title_component" data-v-a392040e><div class="container" data-v-a392040e><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-a392040e><div class="section-title_dot" style="opacity:1;" data-v-a392040e><div class="section-title_dot-fill" style="width:100%;height:100%;" data-v-a392040e></div></div><div class="u-overflow-hidden" data-v-a392040e><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><h2 class="u-ts-4" data-v-a392040e>空間預約</h2></div></div></div></div></div>',
    1
  ),
  Qt = { class: "container" },
  ei = ut(() =>
    w(
      "div",
      { "data-animation-element": "group" },
      [
        w("h4", { "data-animation-element": "title", class: "h1", style: {} }, [
          w(
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
              w(
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
  ai = { class: "sticky-pair" },
  si = { class: "w-layout-grid pair-grid" },
  ti = { id: "w-node-eb3e6ea8-5a10-d5fc-f561-3f621ba6f385-af552307" },
  ii = {
    id: "w-node-_137ddbb9-11b4-d169-f149-eca9f54873e8-af552307",
    class: "card-wrapper cc-small",
  },
  li = {
    id: "w-node-a3cc95fc-d4f5-0398-7194-1e8506932d8d-af552307",
    class: "w-dyn-list",
  },
  oi = { role: "list", class: "w-dyn-items" },
  ri = { role: "listitem", class: "w-dyn-item" },
  di = { class: "card-wrapper cc-small" },
  ci = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  },
  ni = { "data-mouse-class": "cc-text", class: "card is-link w-inline-block" },
  pi = { class: "card-image_wrapper" },
  vi = { class: "iframe-video_wrapper" },
  mi = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  fi = ["src"],
  ui = G(" Your browser does not support the video tag. "),
  gi = ut(() => w("div", { class: "iframe-video_blocker" }, null, -1)),
  bi = ut(() =>
    w(
      "div",
      { class: "card-body", "data-aos": "fade-up", "data-aos-duration": "700" },
      [
        w("div", { class: "u-overflow-hidden" }, [
          w("div", { class: "card-up" }, [
            w("h4", { class: "u-ts-4" }, "Skyart3725全景"),
          ]),
        ]),
      ],
      -1
    )
  ),
  wi = {
    id: "w-node-_814776c7-59e4-1835-d274-f4eed26bca88-af552307",
    class: "w-dyn-list",
  },
  hi = { role: "list", class: "w-dyn-items" },
  yi = { role: "listitem", class: "w-dyn-item" },
  _i = { class: "card-wrapper cc-large" },
  xi = { class: "card-animation cc-40" },
  ki = {
    "data-mouse-class": "cc-text",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
    class: "card is-link w-inline-block",
  },
  ji = { class: "card-image_wrapper" },
  zi = { class: "iframe-video_wrapper" },
  Ci = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Si = ["src"],
  qi = G(" Your browser does not support the video tag. "),
  Oi = ut(() => w("div", { class: "iframe-video_blocker" }, null, -1)),
  Ai = ne(
    '<div class="card-body" data-aos="fade-up" data-aos-duration="700" data-v-a392040e><div class="u-overflow-hidden" data-v-a392040e><div class="card-up" data-v-a392040e><div class="card-large_text" data-v-a392040e><h4 class="u-ts-4" data-v-a392040e>多功能茶席空間</h4></div></div></div></div>',
    1
  ),
  Bi = ne(
    '<div id="w-node-bc6d1a98-c4cb-3434-3589-47eddb3c03ed-af552307" class="content" data-v-a392040e><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-a392040e><p class="u-ts-3" data-aos="fade-up" data-aos-duration="700" data-v-a392040e> 博物館有三區專業茶道茶席空間，最多可以招待8-20位嘉賓，每區飲水與視聽設備其齊全，靜待您與好友在雲頂與大師名作間沏壺閱茗。 </p></div><div class="btn-group" data-v-a392040e><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><a href="/cases" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text" data-v-a392040e>空間介紹</div><div class="btn-text cc-bottom" data-v-a392040e>空間介紹</div></div></a></div><div class="btn-item cc-2" data-v-a392040e><a class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text" data-v-a392040e>立即預約</div><div class="btn-text cc-bottom" data-v-a392040e>立即預約</div></div></a></div></div></div>',
    1
  ),
  Ei = ut(() =>
    w("div", { class: "container" }, [w("div", { class: "target_line" })], -1)
  ),
  Ti = { class: "section" },
  Li = ne(
    '<div class="section-title_component" data-v-a392040e><div class="container" data-v-a392040e><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-a392040e><div class="section-title_dot" data-v-a392040e></div><div class="u-overflow-hidden" data-v-a392040e><div class="section-title_title" data-v-a392040e><h2 class="u-ts-4" data-v-a392040e>定香人文</h2></div></div></div></div></div>',
    1
  ),
  Ii = { class: "container" },
  Pi = { class: "w-layout-grid pair-grid" },
  Mi = { id: "w-node-_6e6a6411-9d71-b91d-1723-e94f35341c18-af552307" },
  Di = { class: "service-list" },
  Fi = { class: "logomark_component" },
  Ui = {
    class: "logomark w-embed",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  },
  Vi = ["src"],
  Hi = ut(() =>
    w(
      "ul",
      { role: "list", class: "u-mt-3-5" },
      [
        w(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "150",
          },
          [
            w("div", { class: "list-content cc-2" }, [
              w("h3", { class: "u-tc-caps" }, "藝術品經紀"),
            ]),
          ]
        ),
        w(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "200",
          },
          [
            w("div", { class: "list-content cc-3" }, [
              w("h3", { class: "u-tc-caps" }, "藝術品拍賣"),
            ]),
          ]
        ),
        w(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "250",
          },
          [
            w("div", { class: "list-content cc-4" }, [
              w("h3", { class: "u-tc-caps" }, "台灣高山冠軍茶"),
            ]),
          ]
        ),
        w(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "300",
          },
          [
            w("div", { class: "list-content cc-5" }, [
              w("h3", { class: "u-tc-caps" }, "雲南古樹普洱茶"),
            ]),
          ]
        ),
        w(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "350",
          },
          [
            w("div", { class: "list-content cc-6" }, [
              w("h3", { class: "u-tc-caps" }, "精品咖啡"),
            ]),
          ]
        ),
        w(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "400",
          },
          [
            w("div", { class: "list-content cc-7" }, [
              w("h3", { class: "u-tc-caps" }, "天幕茶碗"),
            ]),
          ]
        ),
        w(
          "li",
          {
            class: "u-overflow-hidden",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            "data-aos-delay": "450",
          },
          [
            w("div", { class: "list-content cc-8" }, [
              w("h3", { class: "u-tc-caps" }, "典藏名酒"),
            ]),
          ]
        ),
      ],
      -1
    )
  ),
  Ni = ne(
    '<div class="btn-group" data-v-a392040e><div class="btn-item cc-1" data-v-a392040e><a href="/about" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text" data-v-a392040e>藝品介紹</div><div class="btn-text cc-bottom" data-v-a392040e>藝品介紹</div></div></a></div></div>',
    1
  ),
  Wi = ut(() =>
    w(
      "section",
      { class: "section cc-apps" },
      [
        w("div", { class: "container" }, [
          w("div", { class: "row" }, [
            w("div", { "data-animation-element": "group", class: "col" }, [
              w(
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
                  w(
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
                      w(
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
        w("div", { "data-apps": "component", class: "apps_component" }, [
          w("div", { class: "apps_media-wrapper" }, [
            w(
              "div",
              {
                "data-w-id": "9ec98ec5-fb8a-2716-02fa-7ef29f58135e",
                class: "apps_media-list",
              },
              [
                w(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "100",
                  },
                  [
                    w("img", {
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
                w(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "150",
                  },
                  [
                    w(
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
                        w("div", { role: "list", class: "w-dyn-items" }, [
                          w("div", { role: "listitem", class: "w-dyn-item" }, [
                            w(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/sable-app",
                                class: "apps_link w-inline-block",
                              },
                              [
                                w("img", {
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
                w(
                  "div",
                  {
                    class: "apps_asset-wrapper",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "200",
                  },
                  [
                    w(
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
                        w("div", { role: "list", class: "w-dyn-items" }, [
                          w("div", { role: "listitem", class: "w-dyn-item" }, [
                            w(
                              "a",
                              {
                                "data-mouse-class": "cc-text",
                                href: "/cases/seen-app",
                                class: "apps_link w-inline-block",
                              },
                              [
                                w("img", {
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
                w(
                  "div",
                  {
                    class: "apps_asset-wrapper cc-watch",
                    "data-aos": "fade-up",
                    "data-aos-duration": "700",
                    "data-aos-delay": "250",
                  },
                  [
                    w(
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
                        w("img", {
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
          w("div", { class: "apps_scroll" }, [
            w("div", { class: "mobile-scroll_cta" }, [
              w("div", { class: "mobile-scroll_icon w-embed" }, [
                w(
                  "svg",
                  {
                    width: "100%",
                    style: {},
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  [
                    w("path", {
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
  Ri = { class: "section" },
  Xi = { class: "container" },
  Yi = ne(
    '<div class="row" data-v-a392040e><div data-animation-element="group" class="col" data-v-a392040e><h3 data-animation-element="title" class="h1" style="" data-aos="fade-up" data-aos-duration="700" data-v-a392040e><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-a392040e><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e> 拍賣中心 </div></div></h3></div></div>',
    1
  ),
  Zi = { class: "sticky-pair" },
  Gi = { class: "w-layout-grid pair-grid is-leading" },
  Ki = {
    id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f41-af552307",
    class: "w-dyn-list",
  },
  $i = { role: "list", class: "w-dyn-items" },
  Ji = { role: "listitem", class: "w-dyn-item" },
  Qi = { class: "card-wrapper cc-large" },
  el = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  al = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  sl = { class: "card-image_wrapper" },
  tl = { class: "iframe-video_wrapper" },
  il = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  ll = ["src"],
  ol = G(" Your browser does not support the video tag. "),
  rl = ut(() => w("div", { class: "iframe-video_blocker" }, null, -1)),
  dl = ne(
    '<div class="card-body" data-v-a392040e><div class="u-overflow-hidden" data-v-a392040e><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-a392040e><div class="card-large_text" data-v-a392040e><h4 class="u-ts-4" data-v-a392040e>Skyart7325鑑賞中心</h4></div></div></div></div>',
    1
  ),
  cl = {
    id: "w-node-e23686ee-2a5d-d68e-2ddf-02d095aea2fe-af552307",
    class: "card-wrapper cc-small",
  },
  nl = {
    id: "w-node-_7d3ac6c1-4372-cef1-d4e6-455aa4f75f3a-af552307",
    class: "w-dyn-list",
  },
  pl = { role: "list", class: "w-dyn-items" },
  vl = { role: "listitem", class: "w-dyn-item" },
  ml = { class: "card-wrapper cc-small" },
  fl = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  ul = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  gl = { class: "card-image_wrapper" },
  bl = { class: "iframe-video_wrapper" },
  wl = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  hl = ["src"],
  yl = G(" Your browser does not support the video tag. "),
  _l = ut(() => w("div", { class: "iframe-video_blocker" }, null, -1)),
  xl = ut(() =>
    w(
      "div",
      { class: "card-body" },
      [
        w("div", { class: "u-overflow-hidden" }, [
          w(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [w("h4", { class: "u-ts-4" }, "Sable App")]
          ),
        ]),
      ],
      -1
    )
  ),
  kl = ne(
    '<div id="w-node-_591e678b-2794-a4c1-b9e4-4c34713bcb6d-af552307" class="content is-grid" data-v-a392040e><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-a392040e><p class="u-ts-3" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" data-v-a392040e> Basis knows fintech. We’ve developed a strong focus on design for financial services, like mobile apps, bank brands, and credit card design. Our programs are optimized for startups, allowing Basis to start small, work fast, and keep you ahead of your roadmap. When the most innovative companies want to cut through a highly-regulated, ever-changing financial world, they come to the experts. </p></div><div class="btn-group" data-v-a392040e><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><a href="/fintech-design" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text" data-v-a392040e>Fintech services</div><div class="btn-text cc-bottom" data-v-a392040e>Fintech services</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text" data-v-a392040e>Design trial</div><div class="btn-text cc-bottom" data-v-a392040e>Design trial</div></div></a></div></div></div>',
    1
  ),
  jl = { class: "section" },
  zl = { class: "container over-h" },
  Cl = ne(
    '<div class="row" data-v-a392040e><div data-animation-element="group" class="col" data-v-a392040e><h3 data-animation-element="title" class="h1" style="" data-aos="fade-up" data-aos-duration="1000" data-v-a392040e><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-a392040e><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e> Branding </div></div></h3></div></div>',
    1
  ),
  Sl = { class: "sticky-pair" },
  ql = { class: "w-layout-grid pair-grid" },
  Ol = { id: "w-node-dc0c39cf-ca9b-7980-3885-608a3bb047ce-af552307" },
  Al = {
    id: "w-node-_22d42303-51c3-58a5-286f-187c6fce5e6a-af552307",
    class: "card-wrapper cc-small",
  },
  Bl = {
    id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192626-af552307",
    class: "w-dyn-list",
  },
  El = { role: "list", class: "w-dyn-items" },
  Tl = { role: "listitem", class: "w-dyn-item" },
  Ll = { class: "card-wrapper cc-small" },
  Il = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "800",
  },
  Pl = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  Ml = { class: "card-image_wrapper" },
  Dl = { class: "iframe-video_wrapper" },
  Fl = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Ul = ["src"],
  Vl = G(" Your browser does not support the video tag. "),
  Hl = ut(() => w("div", { class: "iframe-video_blocker" }, null, -1)),
  Nl = ut(() =>
    w(
      "div",
      { class: "card-body" },
      [
        w("div", { class: "u-overflow-hidden" }, [
          w(
            "div",
            {
              class: "card-up",
              style: {
                transform: "translate3d(0px, 0%, 0px)",
                "transform-style": "preserve-3d",
              },
            },
            [w("h4", { class: "u-ts-4" }, " Gaffa Brand & Website ")]
          ),
        ]),
      ],
      -1
    )
  ),
  Wl = {
    id: "w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e19262d-af552307",
    class: "w-dyn-list",
  },
  Rl = { role: "list", class: "w-dyn-items" },
  Xl = { role: "listitem", class: "w-dyn-item" },
  Yl = { class: "card-wrapper cc-large" },
  Zl = {
    class: "card-animation cc-40",
    "data-aos": "fade-up",
    "data-aos-duration": "700",
  },
  Gl = {
    "data-mouse-class": "cc-text",
    class: "card is-link w-inline-block",
    style: {
      transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1)",
      "transform-style": "preserve-3d",
      opacity: "1",
    },
  },
  Kl = { class: "card-image_wrapper" },
  $l = { class: "iframe-video_wrapper" },
  Jl = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  Ql = ["src"],
  eo = G(" Your browser does not support the video tag. "),
  ao = ut(() => w("div", { class: "iframe-video_blocker" }, null, -1)),
  so = ne(
    '<div class="card-body" data-v-a392040e><div class="u-overflow-hidden" data-v-a392040e><div class="card-up" style="transform:translate3d(0px, 0%, 0px);transform-style:preserve-3d;" data-v-a392040e><div class="card-large_text" data-v-a392040e><h4 class="u-ts-4" data-v-a392040e>Sable Brand</h4></div></div></div></div>',
    1
  ),
  to = ne(
    '<div id="w-node-_89920a87-4a2e-ae77-8f7f-dd8d1e192634-af552307" class="content is-grid" data-v-a392040e><div class="content-p cc-1" style="transform:translate3d(0px, 0rem, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;opacity:1;" data-v-a392040e><p class="u-ts-3" data-aos="fade-up" data-aos-duration="800" data-v-a392040e> Brand power: the multiple your customers will pay for your product, over that of your closest competition, because your name is on it. Basis drives brand power, because unlike other agencies that only focus on experience design or brand development, we seamlessly integrate both. When you start with Basis, we’ll build a brand book and product design kit that (finally) talk to each other. </p></div><div class="btn-group" data-v-a392040e><div class="btn-item cc-1" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><a href="/cases" class="btn w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text" data-v-a392040e>View cases</div><div class="btn-text cc-bottom" data-v-a392040e>View cases</div></div></a></div><div class="btn-item cc-2" style="opacity:1;transform:translate3d(0rem, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><a href="/design-trial" class="btn cc-secondary w-inline-block" data-aos="fade-left" data-aos-duration="1000" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e> Design trial </div><div class="btn-text cc-bottom" style="transform:translate3d(0%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e> Design trial </div></div></a></div></div></div>',
    1
  ),
  io = ne(
    '<div class="container" data-v-a392040e><div class="target_line" data-v-a392040e></div></div><section class="section" data-v-a392040e><div class="section-title_component" data-v-a392040e><div class="container" data-v-a392040e><div class="section-title_wrapper" data-aos="fade-up" data-aos-duration="700" data-v-a392040e><div class="section-title_dot" style="opacity:1;" data-v-a392040e></div><div class="u-overflow-hidden" data-v-a392040e><div class="section-title_title" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><h2 class="u-ts-4" data-v-a392040e>Contact Us</h2></div></div></div></div></div><div class="container" data-v-a392040e><div class="w-layout-grid pair-grid" data-v-a392040e><div data-animation-element="group" id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67" data-v-a392040e><div data-animation-element="rich-text" id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67" class="contact-cta w-richtext" data-v-a392040e><h3 data-animation-element="title" style="" data-aos="fade-up" data-aos-duration="700" data-v-a392040e><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-a392040e><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e> Have </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e> a </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e> project </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e> in </div><div style="position:relative;display:inline-block;translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e> mind? </div></div><div class="u-overflow-hidden" style="display:block;text-align:start;position:relative;" data-v-a392040e><a data-aos="fade-up" data-aos-duration="700" href="mailto:hello@basis.work" style="translate:none;rotate:none;scale:none;transform:translate(0px, 0%);" data-v-a392040e><div style="position:relative;display:inline-block;" data-v-a392040e> hello@basis.work </div></a></div></h3></div></div></div></div></section>',
    2
  ),
  lo = { class: "pre-footer" },
  oo = {
    "data-mouse-text": "Read Next",
    "data-mouse-class": "cc-text",
    class: "section cc-pre-footer w-inline-block",
  },
  ro = { class: "iframe-video_wrapper" },
  co = {
    class: "video-cover",
    width: "100%",
    height: "100%",
    autoplay: "",
    loop: "",
    muted: "",
  },
  no = ["src"],
  po = G(" Your browser does not support the video tag. "),
  vo = ut(() => w("div", { class: "iframe-video_blocker" }, null, -1)),
  mo = ne(
    '<div class="pre-footer_gradient" data-v-a392040e></div><div class="marquee" data-v-a392040e><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Case Studies </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Case Studies </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Case Studies </div></div></div><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-71.505%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Case Studies </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Case Studies </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Case Studies </div></div></div></div><div class="pre-footer_button" data-v-a392040e><div class="btn cc-large-landscape" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text cc-large-landscape" data-v-a392040e>REad Next</div><div class="btn-text cc-bottom cc-large-landscape" data-v-a392040e>Button</div></div></div></div>',
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
  wo = G(" Your browser does not support the video tag. "),
  ho = ut(() => w("div", { class: "iframe-video_blocker" }, null, -1)),
  yo = ne(
    '<div class="pre-footer_gradient" data-v-a392040e></div><div class="marquee" data-v-a392040e><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-69%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Design Trial </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Design Trial </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Design Trial </div></div></div><div class="marquee_content cc-text transparent" style="will-change:transform;transform:translate3d(-69%, 0px, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="marquee_item cc-1" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Design Trial </div></div><div class="marquee_item cc-2" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Design Trial </div></div><div class="marquee_item cc-3" style="transform:translate3d(0px, 0%, 0px) scale3d(1, 1, 1);transform-style:preserve-3d;" data-v-a392040e><div class="h1" data-v-a392040e>Design Trial </div></div></div></div><div class="pre-footer_button" data-v-a392040e><div class="btn cc-large-landscape" data-v-a392040e><div class="btn-text-wrap" data-v-a392040e><div class="btn-text cc-large-landscape" data-v-a392040e>REad Next</div><div class="btn-text cc-bottom cc-large-landscape" data-v-a392040e>Button</div></div></div></div>',
    3
  );
var _o = Se(ft, [
    [
      "render",
      function (e, a, s, t, i, l) {
        const o = S("View"),
          r = S("Footer");
        return (
          g(),
          b(
            _,
            null,
            [
              B(o),
              gt,
              w("section", bt, [
                wt,
                w("div", ht, [
                  w("div", yt, [
                    w("div", _t, [
                      w("div", xt, [
                        w("div", kt, [
                          w("div", jt, [
                            w(
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
                              zt
                            ),
                          ]),
                        ]),
                        w("div", Ct, [
                          w("div", St, [
                            w(
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
                              qt
                            ),
                          ]),
                        ]),
                        w("div", Ot, [
                          w("div", At, [
                            w(
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
                              Bt
                            ),
                          ]),
                        ]),
                        w("div", Et, [
                          w("div", Tt, [
                            w(
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
                              Lt
                            ),
                          ]),
                        ]),
                        w("div", It, [
                          w("div", Pt, [
                            w(
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
                              Mt
                            ),
                          ]),
                        ]),
                        w("div", Dt, [
                          w("div", Ft, [
                            w(
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
                              Ut
                            ),
                          ]),
                        ]),
                        w("div", Vt, [
                          w("div", Ht, [
                            w(
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
                              Nt
                            ),
                          ]),
                        ]),
                        w("div", Wt, [
                          w("div", Rt, [
                            w(
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
                              Xt
                            ),
                          ]),
                        ]),
                        w("div", Yt, [
                          w("div", Zt, [
                            w(
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
                              Gt
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              Kt,
              w("section", $t, [
                Jt,
                w("div", Qt, [
                  ei,
                  w("div", ai, [
                    w("div", si, [
                      w("div", ti, [
                        w("div", ii, [
                          w("div", li, [
                            w("div", oi, [
                              w("div", ri, [
                                w("div", di, [
                                  w("div", ci, [
                                    w("div", ni, [
                                      w("div", pi, [
                                        w("div", vi, [
                                          w("video", mi, [
                                            w(
                                              "source",
                                              {
                                                src: t.getVideoUrl(
                                                  "home/knife1-1.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              fi
                                            ),
                                            ui,
                                          ]),
                                          gi,
                                        ]),
                                      ]),
                                      bi,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      w("div", wi, [
                        w("div", hi, [
                          w("div", yi, [
                            w("div", _i, [
                              w("div", xi, [
                                w("div", ki, [
                                  w("div", ji, [
                                    w("div", zi, [
                                      w("video", Ci, [
                                        w(
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
                                        qi,
                                      ]),
                                      Oi,
                                    ]),
                                  ]),
                                  Ai,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      Bi,
                    ]),
                  ]),
                ]),
              ]),
              Ei,
              w("section", Ti, [
                Li,
                w("div", Ii, [
                  w("div", Pi, [
                    w("div", Mi, [
                      w("div", Di, [
                        w("div", Fi, [
                          w("div", Ui, [
                            w(
                              "img",
                              { src: t.getImageUrl("logo.png"), alt: "" },
                              null,
                              8,
                              Vi
                            ),
                          ]),
                        ]),
                        Hi,
                        Ni,
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              Wi,
              w("section", Ri, [
                w("div", Xi, [
                  Yi,
                  w("div", Zi, [
                    w("div", Gi, [
                      w("div", Ki, [
                        w("div", $i, [
                          w("div", Ji, [
                            w("div", Qi, [
                              w("div", el, [
                                w("div", al, [
                                  w("div", sl, [
                                    w("div", tl, [
                                      w("video", il, [
                                        w(
                                          "source",
                                          {
                                            src: t.getVideoUrl(
                                              "home/knife2-3.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          ll
                                        ),
                                        ol,
                                      ]),
                                      rl,
                                    ]),
                                  ]),
                                  dl,
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      w("div", null, [
                        w("div", cl, [
                          w("div", nl, [
                            w("div", pl, [
                              w("div", vl, [
                                w("div", ml, [
                                  w("div", fl, [
                                    w("div", ul, [
                                      w("div", gl, [
                                        w("div", bl, [
                                          w("video", wl, [
                                            w(
                                              "source",
                                              {
                                                src: t.getVideoUrl(
                                                  "home/knife2-1.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              hl
                                            ),
                                            yl,
                                          ]),
                                          _l,
                                        ]),
                                      ]),
                                      xl,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      kl,
                    ]),
                  ]),
                ]),
              ]),
              w("section", jl, [
                w("div", zl, [
                  Cl,
                  w("div", Sl, [
                    w("div", ql, [
                      w("div", Ol, [
                        w("div", Al, [
                          w("div", Bl, [
                            w("div", El, [
                              w("div", Tl, [
                                w("div", Ll, [
                                  w("div", Il, [
                                    w("div", Pl, [
                                      w("div", Ml, [
                                        w("div", Dl, [
                                          w("video", Fl, [
                                            w(
                                              "source",
                                              {
                                                src: t.getVideoUrl(
                                                  "home/knife2-4.mp4"
                                                ),
                                                type: "video/mp4",
                                              },
                                              null,
                                              8,
                                              Ul
                                            ),
                                            Vl,
                                          ]),
                                          Hl,
                                        ]),
                                      ]),
                                      Nl,
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                      w("div", Wl, [
                        w("div", Rl, [
                          w("div", Xl, [
                            w("div", Yl, [
                              w("div", Zl, [
                                w("div", Gl, [
                                  w("div", Kl, [
                                    w("div", $l, [
                                      w("video", Jl, [
                                        w(
                                          "source",
                                          {
                                            src: t.getVideoUrl(
                                              "home/knife1-2.mp4"
                                            ),
                                            type: "video/mp4",
                                          },
                                          null,
                                          8,
                                          Ql
                                        ),
                                        eo,
                                      ]),
                                      ao,
                                    ]),
                                  ]),
                                  so,
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
              io,
              w("div", null, [
                w("aside", lo, [
                  w("div", oo, [
                    w("div", ro, [
                      w("video", co, [
                        w(
                          "source",
                          {
                            src: t.getVideoUrl("home/buddha1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          no
                        ),
                        po,
                      ]),
                      vo,
                    ]),
                    mo,
                  ]),
                  w("div", fo, [
                    w("div", uo, [
                      w("video", go, [
                        w(
                          "source",
                          {
                            src: t.getVideoUrl("home/tea_1.mp4"),
                            type: "video/mp4",
                          },
                          null,
                          8,
                          bo
                        ),
                        wo,
                      ]),
                      ho,
                    ]),
                    yo,
                  ]),
                ]),
              ]),
              B(r),
            ],
            64
          )
        );
      },
    ],
    ["__scopeId", "data-v-a392040e"],
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
      Xa(
        () =>
          Promise.resolve().then(function () {
            return ms;
          }),
        void 0
      ),
    "../pages/case.vue": () =>
      Xa(
        () =>
          Promise.resolve().then(function () {
            return ws;
          }),
        void 0
      ),
    "../pages/demo.vue": () =>
      Xa(
        () =>
          Promise.resolve().then(function () {
            return Is;
          }),
        void 0
      ),
    "../pages/fintech-design.vue": () =>
      Xa(
        () =>
          Promise.resolve().then(function () {
            return nt;
          }),
        void 0
      ),
    "../pages/index.vue": () =>
      Xa(
        () =>
          Promise.resolve().then(function () {
            return xo;
          }),
        void 0
      ),
  },
  jo = {
    "../pages/about.vue": ms,
    "../pages/case.vue": ws,
    "../pages/demo.vue": Is,
    "../pages/fintech-design.vue": nt,
    "../pages/index.vue": xo,
  },
  zo = [];
for (let Ho in ko) {
  let e = Ho.replace("../pages", "").toLowerCase().replace(".vue", "");
  (e = e.replace(/\/index$/, "")),
    (e = e.replace(/\/_+/g, "/:")),
    zo.push({
      path: e,
      name: e,
      meta: {
        layout: jo[Ho].default.layout || "layout-default",
        title:
          null != (s = null == (a = jo[Ho].default) ? void 0 : a.title)
            ? s
            : "app.project.title",
        header:
          null != (i = null == (t = jo[Ho].default) ? void 0 : t.header)
            ? i
            : "header-default",
        scroll:
          null != (o = null == (l = jo[Ho].default) ? void 0 : l.noScroll) && o,
      },
      component: ko[Ho],
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
      ...zo,
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
var qo = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Co }, Symbol.toStringTag, {
    value: "Module",
  })
);
const Oo = be({ modules: Wa });
we(Oo, Co);
var Ao = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Oo }, Symbol.toStringTag, {
    value: "Module",
  })
);
const Bo = {
    use(e) {
      e.interceptors.response.use(
        async function (a) {
          if (100004 === a.data.code) {
            const s = e.get("/app/jwt-token", {
              params: { account: Oo.state.auth.user.account },
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
  Eo = {
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
                      (await Oo.dispatch("auth/logout"),
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
  To = {
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
class Lo {
  constructor() {
    (this.provider = new Ea({}.VITE_REMOTE_API)), this.init();
  }
  init() {
    this.provider.use({}, Ta, Bo, Eo, To, Ia);
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
Lo.prototype.install = function (e) {
  const a = "http-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Io = new Lo(),
  Po = Object.freeze(
    Object.defineProperty(
      { __proto__: null, HttpService: Lo, default: Io },
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
    return Oo.state.app.popupState;
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
      allowOutsideClick: d = !0,
      props: c = {},
    } = e;
    return new Promise((e) => {
      Oo.commit(
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
          allowOutsideClick: d,
          props: c,
        })
      );
    });
  }
  clear() {
    Oo.commit("app/clear/popup");
  }
}
Mo.prototype.install = function (e) {
  const a = "popup-service";
  (e.config.globalProperties[a] = this), e.provide(a, this);
};
var Do = new Mo();
const Fo = {
    "../services/alert-service.js": Ba,
    "../services/http-service.js": Po,
    "../services/i18n-service.js": Te,
    "../services/popup-service.js": Object.freeze(
      Object.defineProperty(
        { __proto__: null, PopupService: Mo, default: Do },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    "../services/router-service.js": qo,
    "../services/storage-service.js": De,
    "../services/store-service.js": Ao,
  },
  Uo = {
    install: (e) => {
      for (let a in Fo) e.use(Fo[a].default);
    },
  };
const Vo = he(qe);
Vo.provide("$jQuery", ye),
  Vo.provide("$swal", Le),
  Vo.provide("$storage", U),
  Vo.provide("$tabsslider", _e),
  Vo.use(da),
  Vo.use(Sa),
  Vo.use(xe, { loading: "", error: "" }),
  Vo.use(Uo),
  Vo.mount("#app");
