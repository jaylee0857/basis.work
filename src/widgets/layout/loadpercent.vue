<template>
  <div class="loadpercent" :style="{ animation: animationStyle }">
    <div class="loadpercent-percent">{{ `${options.animationPercent}%` }}</div>
    <img :src="getImageUrl('favicon.png')" alt="" />
    <div class="loadpercent-mask" :style="{ left: options.position }"></div>
  </div>
</template>

<script setup>
import { getImageUrl } from "@/unit/getImageUrl";
import { computed, reactive, watch, defineEmits, ref } from "vue";
import { inject } from "vue";
import { loadImage } from "@/unit/loadImage";
import calculateTotalPercentage from "@/unit/calculateTotalPercentage";
import expandNumberToArray from "@/unit/expandNumberToArray";

const emit = defineEmits(["loaded"]);

const images = inject("imageUrls");
/** 一筆的%數 */
const percentage = (1 / images.length) * 100;
const options = reactive({
  imagesLoadPercent: 0,
  animaionLoad: 0,
  loadPercent: computed(() =>
    calculateTotalPercentage([options.imagesLoadPercent, options.animaionLoad])
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

const init = async () => {
  await preloadImages();
  // options.animaionLoad = 40;
  // await sleep(0);
  /**
   * NOTE:
   * amnimation是一個範例 後面如果有其他加載百分比 也是同個操作
   * loadPercent是總百分比，其他百分比搭配calculateTotalPercentage算出總百分比
   */
  options.animaionLoad = 100;
};

watch(
  () => options.loadPercent,
  (newValue, oldValue) => {
    const length = newValue - oldValue;
    const numbs = expandNumberToArray(length);
    let delay = 0; // 初始化延迟
    for (const num of numbs) {
      setTimeout(() => {
        options.animationPercent += num;
        if (options.animationPercent === 100) {
          leaveAnimation();
        }
      }, delay);
      delay += 100; // 增加延迟，以实现逐步更新的效果
    }
  }
);

init();
</script>
