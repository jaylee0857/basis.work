<template>
  <div class="loadpercent" :style="{ animation: animationStyle }">
    <div class="loadpercent-percent">{{ `${options.animationPercent} %` }}</div>
    <img :src="getImageUrl('logo_icon.png')" alt="" />
    <div class="loadpercent-mask" :style="{ left: options.position }"></div>
  </div>
</template>

<script setup>
import { getImageUrl } from "@/unit/getImageUrl";
import { computed, reactive, watch, defineEmits, ref } from "vue";
import { inject } from "vue";
import { loadImage } from "@/unit/loadImage";
import { loadIframe } from "@/unit/loadIframes";
import calculateTotalPercentage from "@/unit/calculateTotalPercentage";
import expandNumberToArray from "@/unit/expandNumberToArray";

const emit = defineEmits(["loaded"]);

const images = inject("imageUrls");
/** 一筆的%數 */
const percentage = (1 / images.length) * 100;
const options = reactive({
  imagesLoadPercent: 0,
  iframeLoadPercent: 0,
  animaionLoad: 0,
  loadPercent: computed(() =>
    calculateTotalPercentage([
      options.imagesLoadPercent,
      options.animaionLoad,
      options.iframeLoadPercent,
    ])
  ),
  animationPercent: 0,
  position: computed(() => `${options.animationPercent - 100}%`),
});
const animationStyle = ref("");

const leaveAnimation = () => {
  const animationSeconds = 2;
  animationStyle.value = `prelude ${animationSeconds}s forwards`;
  setTimeout(() => {
    emit("loaded");
  }, animationSeconds * 1000);
};

// const isAnimation = ref(false);

const preloadImages = async () => {
  /** 這邊等待圖片載入完成後 關閉loading頁面 重新顯示一次動畫 */
  for (const img of images) {
    const currentPercent = options.imagesLoadPercent + Math.ceil(percentage);
    options.imagesLoadPercent = Math.min(currentPercent, 100);
    await loadImage(img);
  }
};

const preloadIframe = async () => {
  const iframes = document.querySelectorAll("iframe");
  const iframePercentage = (1 / iframes.length) * 100;
  if (iframes.length <= 0) return options.iframeLoadPercent === 100;
  for (const iframe of iframes) {
    const currentPercent =
      options.iframeLoadPercent + Math.ceil(iframePercentage);
    /** 有資料才載 沒資料直接過 */
    if (iframe.src !== "") {
      await loadIframe(iframe);
    }
    // eslint-disable-next-line require-atomic-updates
    options.iframeLoadPercent = Math.min(currentPercent, 100);
  }
};

const init = async () => {
  await preloadImages();
  await preloadIframe();
  // options.animaionLoad = 40;
  // await sleep(0);
  /**
   * NOTE:
   * amnimation是一個範例 後面如果有其他加載百分比 也是同個操作
   * loadPercent是總百分比，其他百分比搭配calculateTotalPercentage算出總百分比
   */
  options.animaionLoad = 100;
  // console.log(options.loadPercent, "loadPercent");
};

watch(
  () => options.loadPercent,
  (newValue, oldValue) => {
    const length = newValue - oldValue;
    const numbs = expandNumberToArray(length);
    // console.log(numbs, "numbers");
    let delay = 0; // 初始化延迟
    for (const [index, num] of numbs.entries()) {
      setTimeout(() => {
        /** NOTE: 這邊硬解 當index為最後一個時直接跳100% */
        options.animationPercent += num;
        if (newValue === 100) {
          const lastIndex = numbs.length - 1;
          const isLast = index === lastIndex;
          if (isLast) options.animationPercent = 100;
        }
        if (options.animationPercent === 100) {
          setTimeout(() => {
            // 在這裡放置需要暫停半秒後執行的程式碼
            console.log("暫停半秒後執行");
            leaveAnimation();
          }, 500); // 500 毫秒等於半秒
        }
      }, delay);
      delay += 100; // 增加延迟，以实现逐步更新的效果
    }
  }
);

init();
</script>
