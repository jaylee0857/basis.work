<template>
  <div class="layout-deafult-header-nav" :class="{ active: props.isOpen }">
    <ul>
      <li
        v-for="(item, index) in menu"
        :key="item"
        :style="`--i: ${item}`"
        @mouseenter="enterIndex(index)"
        @click="goToAboutPage(item.path)"
      >
        <div class="line"></div>
        <div class="list_style">
          <div class="nav_link-top">
            <div
              class="nav_link-spacer cc-1"
              style="height: 0em; width: 185.172px"
            ></div>
            <div class="nav_link-title">
              <div class="u-ts-3">{{ item.title }}</div>
            </div>
          </div>
          <div class="nav_link-btm" :class="{ active: activeIndex === index }">
            <p class="nav_link-p">
              {{ item.content }}
            </p>
            <div
              class="nav_link-spacer cc-1"
              style="height: 0em; width: 185.172px"
            ></div>
          </div>
        </div>
      </li>
      <div
        class="move-item"
        :style="{
          left: `${isLeft ? `calc(${moveLeft}% - 4px)` : 'auto'}`,
          right: `${isLeft ? 'auto' : `calc(${moveRight}% - 4px)`}`,
          width: `calc(${mvoeWidth}% + 8px)`,
        }"
      ></div>
    </ul>
    <div id="pink_mask"></div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const activeIndex = ref(1);

const isLeft = ref(true);
const router = useRouter();
const props = defineProps(["isOpen"]);
const emits = defineEmits(["toggleOpen"]);
// const isMove = ref(false);
const menu = ref([
  {
    title: "Overview",
    content:
      "Meet Basis. We increase the value of digital products and their brands through design",
    path: "/", // 添加路径属性
  },
  {
    title: "Cases",
    content:
      "See our past work, ranging from the largest brands in the world to fast-moving startups.",
    path: "/case", // 添加路径属性
  },
  {
    title: "Fintech Design",
    content:
      "See why Basis specializes in product and brand design for innovative financial technology companies.",
    path: "/fintech-design", // 添加路径属性
  },
  {
    title: "About & Contact",
    content:
      "Meet Basis. We increase the value of digital products and their brands through design",
    path: "/about", // 添加路径属性
  },
]);

const moveLeft = computed(() => activeIndex.value * 25);

const moveRight = computed(() => {
  switch (activeIndex.value) {
    case 1:
      return 50;
    case 2:
      return 25;
    case 3:
      return 0;
    default:
      return 75;
  }
});

const mvoeWidth = ref(25);

const goToAboutPage = (path) => {
  router.push(path);
  emits("toggleOpen", props.isOpen);
};

/** NOTE:絲滑操作 */
// const enterIndex = (index) => {
//   if (isMove.value) {
//     return;
//   }
//   isMove.value = true;
//   isLeft.value = index < activeIndex.value;
//   mvoeWidth.value = 30;
//   setTimeout(() => {
//     activeIndex.value = index;
//   }, 10);
//   setTimeout(() => {
//     mvoeWidth.value = 25;
//     isMove.value = false;
//   }, 200);
// };

const enterIndex = (index) => {
  activeIndex.value = index;
  console.log(index);
};
</script>
