<template>
  <div
    class="layout-deafult-header"
    :class="{ active: isOpen, offtop: scrolledPastThreshold }"
  >
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
    <div v-show="isOpen" class="position">
      <div class="switch">
        <input
          id="language-toggle"
          class="check-toggle check-toggle-round-flat"
          type="checkbox"
        />
        <label for="language-toggle" @click="changeLang"></label>
        <span class="on">TW</span>
        <span class="off">CN</span>
      </div>
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
import { getImageUrl } from "@/unit/getImageUrl";
import Nav from "@/widgets/layout/nav-bar.vue";
// import { useRoute, useRouter } from "vue-router";

import { ref, onMounted, reactive } from "vue";
import { useI18n } from "@/hooks/use-i18n";
const { locale, change } = useI18n();
const langSwitch = ref(false);

const lang = reactive({
  current: locale.value || "zh-tw",
});
if (locale.value !== "zh-tw") langSwitch.value = true;
console.log("預設", locale.value);
const changeLang = () => {
  const changed = lang.current === "zh-tw" ? "zh-cn" : "zh-tw";
  lang.current = changed;
  change(changed);
  console.log("asd", locale);

  // lang.current = changed;
  // storage.set("locale", changed);
};
const isOpen = ref(false);
const getToggleOpen = (boolean) => {
  isOpen.value = !boolean;
};
const scrolledPastThreshold = ref(false);

const handleScroll = () => {
  if (window.pageYOffset > 100) {
    scrolledPastThreshold.value = true;
  } else {
    scrolledPastThreshold.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
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
<style scoped>
.position {
  right: 0;
}
@media screen and (max-width: 991px) {
  .position {
    /* position: relative; */
  }
}
.switch > span {
  position: absolute;
  top: 14px;
  pointer-events: none;
  font-family: "Helvetica", Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked ~ .off {
  color: #f36f25;
}

input.check-toggle-round-flat:checked ~ .on {
  color: #fff;
}

.switch > span.on {
  left: 0;
  padding-left: 2px;
  color: #f36f25;
}

.switch > span.off {
  right: 0;
  padding-right: 4px;
  color: #fff;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}
.check-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat + label {
  padding: 2px;
  width: 97px;
  height: 40px;
  background-color: #f36f25;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:before,
input.check-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat + label:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
  background-color: #f36f25;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:after {
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: 48px;
  background-color: #fff;
  -webkit-border-radius: 52px;
  -moz-border-radius: 52px;
  -ms-border-radius: 52px;
  -o-border-radius: 52px;
  border-radius: 52px;
  -webkit-transition: margin 0.2s;
  -moz-transition: margin 0.2s;
  -o-transition: margin 0.2s;
  transition: margin 0.2s;
}

input.check-toggle-round-flat:checked + label:after {
  margin-left: 44px;
}
</style>
