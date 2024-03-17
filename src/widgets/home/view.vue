<template>
  <div class="view" @mousemove="moveView($event)">
    <div
      class="view-wrap"
      v-if="isShowComponent"
      :style="{
        transform: `translate3d(${position.x * 2}px, ${
          position.y
        }px, 0) rotateX(${-position.y / 2}deg) rotateY(${-position.x / 2}deg)`,
        transformOrigin: 'center center', // 注意驼峰命名
      }"
    >
      <div
        class="img-wrap home-hero_image-placer"
        v-for="(item, index) in imagesOption"
        :key="item.url + index"
        :style="{
          width: isMobile ? item.css.m_width : '',
          height: isMobile ? item.css.m_height : '',
          left: isMobile ? 'unset' : item.css.left,
          right: isMobile ? item.css.m_right : 'unset',
          top: isMobile ? item.css.m_top : item.css.top,
          transform: isMobile ? item.css.transform : '',
          animation: item.isEnter
            ? item.css.enterAnimation
            : item.css.leaveAnimation,
        }"
        :data-index="index"
        :data-item="'img'"
      >
        <img
          :src="getImageUrl(item.url)"
          :style="{
            width: isMobile ? item.css.m_width : item.css.width,
            height: isMobile ? item.css.m_height : item.css.height,
            transform: `translate3d(${position.x / 2}px,${
              position.y / 2
            }px, 100px)`,
          }"
        />
      </div>
    </div>
  </div>
  <div data-reveal="button" class="home-hero_btn">
    <div class="btn-contain btn-contain-scroll">
      <div class="btn-scroll w-inline-block" @click="scrollDown">
        <div class="btn-text-wrap">
          <div class="btn-text cc-scroll">請往下滑</div>
          <div class="btn-text cc-bottom cc-scroll">請往下滑</div>
        </div>
        <div class="btn-icon cc-small w-embed">
          <svg
            width="100%"
            style=""
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.30218 1.55469C7.47098 1.55469 7.60782 1.68527 7.60782 1.84635V11.2789L10.322 8.68302C10.3794 8.6278 10.4575 8.59675 10.539 8.59675C10.6205 8.59675 10.6986 8.6278 10.756 8.68302L11.1839 9.09719C11.2418 9.15195 11.2743 9.2265 11.2743 9.30427C11.2743 9.38204 11.2418 9.45659 11.1839 9.51135L7.43666 13.093C7.35076 13.1751 7.23423 13.2213 7.11267 13.2214H6.88038C6.75909 13.22 6.64303 13.174 6.5564 13.093L2.80916 9.51135C2.7513 9.45659 2.71875 9.38204 2.71875 9.30427C2.71875 9.2265 2.7513 9.15195 2.80916 9.09719L3.24318 8.68302C3.29952 8.62815 3.37663 8.59723 3.45713 8.59723C3.53763 8.59723 3.61475 8.62815 3.67109 8.68302L6.38523 11.2789V1.84635C6.38523 1.68527 6.52208 1.55469 6.69088 1.55469H7.30218Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import AOS from "aos";
import "aos/dist/aos.css";
import { getImageUrl } from "@/unit/getImageUrl";
const store = useStore();

/**
 *  parallax
 *  @desc 視差特效
 *  @param { object } position 視差x,y軸
 *  @param { array } imagesOption 視差圖檔設定檔
 *  @param { function } moveView 視差x,y軸設定function
 */
const position = reactive({
  x: 0,
  y: 0,
});
const imagesOption = ref([
  {
    url: "home/opening/1.jpg",
    css: {
      width: "17vw",
      height: "20.2vw",
      left: "1%",
      top: "60%",
      m_right: "3000px",
      m_top: "0%",
      transform: "",
      enterAnimation: "zoomIn 2.5s forwards",
      leaveAnimation: "fadeOut 1s forwards",
    },
    isEnter: true,
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
    isEnter: true,
  },
  {
    url: "home/opening/3.jpg",
    css: {
      width: "21.3vw",
      height: "16.6vw",
      m_width: "46vw",
      m_height: "34vw",
      left: "22%",
      top: "45%",
      m_right: "77%",
      m_top: "47%",
      transform: "translate3d(1px, 2px, 1px)",
      enterAnimation: "zoomIn 3.5s forwards",
      leaveAnimation: "fadeOut 1s forwards",
    },
    isEnter: true,
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
      m_right: "71%",
      m_top: "73%",
      transform: "translate3d(1px, 2px, 1px)",
      enterAnimation: "zoomIn 2s forwards",
      leaveAnimation: "fadeOut 1s forwards",
    },
    isEnter: true,
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
      m_top: "10%",
      transform: "translate3d(1px, 2px, 1px)",
      enterAnimation: "zoomIn 1s forwards",
      leaveAnimation: "fadeOut 1s forwards",
    },
    isEnter: true,
  },
  {
    url: "home/opening/6.jpg",
    css: {
      width: "21.1vw",
      height: "26.3vw",
      m_width: "43.5vw",
      m_height: "54vw",
      left: "51%",
      top: "27%",
      m_right: "25%",
      m_top: "39%",
      transform: "translate3d(1px, 2px, 1px)",
      enterAnimation: "zoomIn 2.5s forwards",
      leaveAnimation: "fadeOut 1s forwards",
    },
    isEnter: true,
  },
  {
    url: "home/opening/7.jpg",
    css: {
      width: "18.1vw",
      height: "21.8vw",
      m_width: "35.5vw",
      m_height: "43vw",
      left: "63%",
      top: "74%",
      m_right: "8%",
      m_top: "70%",
      transform: "translate3d(1px, 2px, 1px)",
      enterAnimation: "zoomIn 3s forwards",
      leaveAnimation: "fadeOut 1s forwards",
    },
    isEnter: true,
  },
  {
    url: "home/opening/8.jpg",
    css: {
      width: "18.3vw",
      height: "14.6vw",
      m_width: "253px",
      m_height: "196px",
      left: "70%",
      top: "-4%",
      m_right: "57%",
      m_top: "17%",
      transform: "translate3d(1px, 2px, 1px)",
      enterAnimation: "zoomIn 3.5s forwards",
      leaveAnimation: "fadeOut 1s forwards",
    },
    isEnter: true,
  },
  {
    url: "home/opening/9.jpg",
    css: {
      width: "22.8vw",
      height: "22vw",
      m_width: "40vw",
      m_height: "41vw",
      left: "83%",
      top: "33%",
      m_right: "-15%",
      m_top: "30%",
      transform: "scale(0.7)",
      enterAnimation: "zoomIn 2s forwards",
      leaveAnimation: "fadeOut 1s forwards",
      objectAposition: "right",
    },
    isEnter: true,
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
    isEnter: true,
  },
]);

const moveView = (e) => {
  // 检查窗口宽度是否小于576
  if (window.innerWidth > 576) {
    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;

    position.x = ((windowCenterX - e.clientX) / 100) * 3;
    position.y = ((windowCenterY - e.clientY) / 100) * 3;

    // 在窗口宽度小于576时执行的操作
    // console.log(position.x);
    // console.log(position.y);
  }
};

/**
 * observer
 * @desc 元素監聽淡出淡入
 * @param { boolean } isShowComponent parallax dom顯示與否
 * @param { object } options IntersectionObserver 設定檔
 * @param { function } callback IntersectionObserver 監聽到後執行的對應功能
 */

const isShowComponent = ref(false);

const options = {
  //   root: document.querySelector("body"),
  rootMargin: "0px",
  threshold: Array(100)
    .fill()
    .map((val, idx) => idx * 0.01),
};

const callback = (entries) => {
  entries.forEach((entry) => {
    const { intersectionRatio, target } = entry;
    const index = target.dataset?.index;
    const itemName = target.dataset?.item;
    console.log(itemName);
    switch (itemName) {
      case "img":
        imagesOption.value[index].isEnter =
          intersectionRatio < 0.4 ? false : true;
        console.log(target.dataset?.index, "index");
        console.log(intersectionRatio);
        break;

      default:
        target.style.animation =
          intersectionRatio < 0.6
            ? "fadeOut 2s forwards"
            : "zoomIn 3.5s forwards";
        break;
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const domScrollObserver = (doms) => {
  for (const target of doms) {
    observer.observe(target);
  }
};

const domScrollUnoberser = (doms) => {
  for (const target of doms) {
    observer.unobserve(target);
  }
};

// 滚动到 studio 元素的方法
const scrollDown = () => {
  const studioElement = document.getElementById("studio");
  if (studioElement) {
    const studioDistanceToTop = studioElement.offsetTop;
    window.scrollTo({
      top: studioDistanceToTop,
      behavior: "smooth",
    });
  } else {
    console.error("Studio element not found");
  }
};

watch(
  () => store.state.app.isLoading,
  (isLoading) => {
    isShowComponent.value = !isLoading;
    if (isLoading) {
      const imgsDom = document.querySelectorAll(".img-wrap");
      const scrollBtnDom = document.querySelector(".btn-scroll");
      const doms = [...imgsDom, scrollBtnDom];
      domScrollUnoberser(doms);
    } else {
      /** 這邊使用nextTick等待Component的dom掛載完成後才抓取 否則會抓到空值 */
      nextTick(() => {
        const imgsDom = document.querySelectorAll(".img-wrap");
        const scrollBtnDom = document.querySelector(".btn-scroll");
        const doms = [...imgsDom, scrollBtnDom];
        domScrollObserver(doms);
      });
    }
  }
);
const isMobile = ref(false);

const checkScreenWidth = () => {
  isMobile.value = window.innerWidth < 991;
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
  AOS.init();
});
</script>
