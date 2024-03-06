<template>
  <div class="layout-deafult-header-nav">
    <ul>
      <li
        v-for="(item, index) in 4"
        :key="item"
        :style="`--i: ${item}`"
        @mouseenter="enterIndex(index)"
      >
        <div class="line"></div>
        <div class="content">{{ item }}</div>
      </li>
      <!-- <li style="--i: 2">
        <div class="line"></div>
        <div class="background"></div>
        <div class="content">2</div>
      </li>
      <li style="--i: 3">
        <div class="line"></div>
        <div class="background"></div>
        <div class="content">3</div>
      </li>
      <li style="--i: 4">
        <div class="line"></div>
        <div class="background"></div>
        <div class="content">4</div>
      </li>
      <li style="--i: 5">
        <div class="line"></div>
        <div class="background"></div>
        <div class="content">5</div>
      </li> -->
      <div
        class="move-item"
        :style="{
          left: `${isLeft ? `calc(${moveLeft}% - 4px)` : 'auto'}`,
          right: `${isLeft ? 'auto' : `calc(${moveRight}% - 4px)`}`,
          width: `calc(${mvoeWidth}% + 8px)`,
        }"
      ></div>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const activeIndex = ref(1);

const isLeft = ref(true);

const isMove = ref(false);

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

const enterIndex = (index) => {
  if (isMove.value) return;
  isMove.value = true;
  isLeft.value = index < activeIndex.value;
  mvoeWidth.value = 30;
  setTimeout(() => {
    activeIndex.value = index;
  }, 10);
  setTimeout(() => {
    mvoeWidth.value = 25;
    isMove.value = false;
  }, 200);
};
</script>
