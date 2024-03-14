<template>
  <div class="layout-deafult-header" :class="{ active: isOpen }">
    <router-link
      to="/"
      aria-current="page"
      class="layout-deafult-header-logo"
      :class="{ 'layout-deafult-header-logo--open': isOpen }"
      aria-label="home"
    >
      <div v-if="!isOpen">
        <img :src="getImageUrl('logo.png')" alt="" />
      </div>
      <img v-else :src="getImageUrl('logo.png')" alt="" />
    </router-link>
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
import { getImageUrl } from "@/unit/getImageUrl";
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
