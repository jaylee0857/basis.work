<template>
  <div class="layout-deafult-header" :class="{ active: isOpen }">
    <div
      href="/"
      aria-current="page"
      class="layout-deafult-header-logo"
      :class="{ 'layout-deafult-header-logo--open': isOpen }"
      aria-label="home"
    >
      <div v-if="!isOpen">
        <svg
          width="100%"
          style=""
          viewBox="0 0 678 88"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M134.299 43.7526C143.563 41.1205 148.255 33.7208 148.255 23.5684C148.255 9.02438 138.288 0 119.207 0H0V88.0232H119.2C139.424 88.0232 149.256 78.2468 149.256 63.3197C149.256 53.1601 144.131 46.0158 134.299 43.7597V43.7526ZM27.9189 22.0572H113.933C118.774 22.0572 120.343 23.9373 120.343 27.4492C120.343 30.961 118.774 32.9688 113.933 32.9688H27.9189V22.0643V22.0572ZM114.934 65.817H27.9189V54.9125H114.934C119.775 54.9125 121.479 56.9132 121.479 60.3044C121.479 63.9369 119.775 65.8241 114.934 65.8241V65.817Z"
            fill="#ffffff"
          ></path>
          <path
            d="M444.552 33.4796L356.409 32.2238C351.851 32.2238 349.565 30.2161 349.565 27.0802C349.565 24.1998 351.702 22.3197 356.259 22.3197H434.863C438.284 22.3197 442.274 23.9515 442.699 28.336H473.607C472.606 12.1602 458.65 0 437.432 0H351.993C332.06 0 319.517 11.4082 319.517 27.584C319.517 43.7597 331.769 54.1676 351.418 54.5436L439.136 55.5439C443.693 55.6716 445.688 57.6723 445.688 60.5598C445.688 63.4473 443.835 65.6964 439.136 65.6964H358.68C354.691 65.6964 350.708 63.8163 349.849 59.4247H319.084C319.794 75.7282 334.751 88.0161 356.401 88.0161H443.97C464.336 88.0161 475.871 76.4802 475.871 60.5598C475.871 44.6395 464.762 33.8485 444.538 33.4725L444.552 33.4796Z"
            fill="#ffffff"
          ></path>
          <path d="M512.021 0H482.967V88.0232H512.021V0Z" fill="#ffffff"></path>
          <path
            d="M645.914 33.4796L557.77 32.2238C553.213 32.2238 550.927 30.2161 550.927 27.0802C550.927 24.1998 553.064 22.3197 557.621 22.3197H636.224C639.646 22.3197 643.635 23.9515 644.061 28.336H674.969C673.975 12.1602 660.012 0 638.794 0H553.355C533.422 0 520.879 11.4082 520.879 27.584C520.879 43.7597 533.131 54.1676 552.78 54.5436L640.498 55.5439C645.055 55.6716 647.05 57.6723 647.05 60.5598C647.05 63.4473 645.197 65.6964 640.498 65.6964H560.042C556.053 65.6964 552.07 63.8163 551.211 59.4247H520.446C521.156 75.7282 536.105 88.0161 557.763 88.0161H645.332C665.698 88.0161 677.233 76.4802 677.233 60.5598C677.233 44.6395 666.131 33.8485 645.9 33.4725L645.914 33.4796Z"
            fill="#ffffff"
          ></path>
          <path
            d="M215.059 0L145.272 88.0232H177.607L195.005 65.7389H276.214L293.662 88.0232H326.99L257.786 0H215.059ZM211.63 44.4479L235.567 13.792L259.56 44.4479H211.63Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <svg
        v-else
        height="100%"
        viewBox="0 0 185 80"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z"
          fill="#000000"
        ></path>
      </svg>
    </div>
    <div
      class="layout-deafult-header-btn"
      :class="{ 'layout-deafult-header-btn--open': isOpen }"
      @click="isOpen = !isOpen"
    >
      <div></div>
      <div></div>
    </div>
  </div>
  <Nav v-if="isOpen" :is-open="isOpen" @toggle-open="getToggleOpen" />
</template>

<script setup>
/** components */
import Nav from "@/widgets/layout/nav-bar.vue";
// import { useRoute, useRouter } from "vue-router";

import { ref } from "vue";

const isOpen = ref(false);
const getToggleOpen = (boolean) => {
  isOpen.value = !boolean;
};
// const lang = computed(() => {
//   const fullName = locale.value;
//   switch (fullName) {
//     case "en":
//       return "EN";
//     case "zh-tw":
//       return "CN";
//   }
// });
// const title = computed(() => t(route.meta.title ?? ""));
</script>
