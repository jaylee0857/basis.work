<template>
  {{ position }}
  <div class="view" @mousemove="moveView($event)">
    <div
      class="view-wrap"
      :style="{
        transform: `translate(${position.x}px,${position.y}px)`,
      }"
    >
      <img
        v-for="(item, index) in imagesOption"
        :key="item.url + index"
        :style="item.css"
        src="https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552351_home-hero-06.webp"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const position = reactive({
  x: 0,
  y: 0,
});

const moveView = (e) => {
  position.x = ((window.innerWidth - e.clientX) / 100) * 2;
  position.y = ((window.innerHeight - e.clientY) / 100) * 2;
};

const imagesOption = [
  {
    url:
      "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552351_home-hero-06.webp",
    css: {
      left: "35%",
      top: "50%",
      transform: "rotate3d(1, 2, 1, 45deg)",
    },
  },
  {
    url:
      "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552351_home-hero-06.webp",
    css: {
      left: "50%",
      top: "50%",
      transform: "rotate(0, 0),skew(0, 0)",
    },
  },
  {
    url:
      "https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552351_home-hero-06.webp",
    css: {
      left: "65%",
      top: "50%",
      transform: "rotate3d(-1, -2, -1, 45deg)",
    },
  },
];
</script>
