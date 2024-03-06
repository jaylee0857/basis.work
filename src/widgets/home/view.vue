<template>
  <div class="view" @mousemove="moveView($event)">
    <div
      class="view-wrap"
      :style="{
        transform: `translate(${position.x}px,${position.y}px)`,
      }"
    >
      <div
        class="img-wrap"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="6000"
        data-aos-offset="0"
        v-for="(item, index) in imagesOption"
        :key="item.url + index"
        :style="{
          left: item.css.left,
          top: item.css.top,
        }"
      >
        <img
          src="https://assets-global.website-files.com/6584502438fea068af552308/6584502438fea068af552351_home-hero-06.webp"
          :style="{ transform: item.css.transform }"
        />
      </div>
    </div>
  </div>
  <div
    data-reveal="button"
    data-w-id="bd3a87c2-42b9-9228-51b3-47079bdaecb9"
    class="home-hero_btn"
  >
    <div class="btn-contain">
      <a href="#studio" class="btn-scroll w-inline-block"
        ><div class="btn-text-wrap">
          <div class="btn-text cc-scroll">Scroll</div>
          <div class="btn-text cc-bottom cc-scroll">Scroll</div>
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
          </svg></div
      ></a>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
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
      top: "20%",
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
      top: "70%",
      transform: "rotate3d(-1, -2, -1, 45deg)",
    },
  },
];
AOS.init();
</script>
