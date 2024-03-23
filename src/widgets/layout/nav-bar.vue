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
        @click="changeLang"
        :style="{
          left: `${isLeft ? `calc(${moveLeft}% - 4px)` : 'auto'}`,
          right: `${isLeft ? 'auto' : `calc(${moveRight}% - 4px)`}`,
          width: `calc(${mvoeWidth}% + 8px)`,
        }"
      ></div>
    </ul>
    <div class="position">
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
    <div id="pink_mask"></div>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "@/hooks/use-i18n";

const activeIndex = ref(1);
const langSwitch = ref(false);

const isLeft = ref(true);
const router = useRouter();
const props = defineProps(["isOpen"]);
const emits = defineEmits(["toggleOpen"]);
// const isMove = ref(false);
const { locale, change } = useI18n();

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
const menu = ref([
  {
    title: "Overview",
    content:
      "Meet Basis. We increase the value of digital products and their brands through design",
    path: "/", // 添加路径属性
  },
  {
    title: "Gallery",
    content:
      "See our past work, ranging from the largest brands in the world to fast-moving startups.",
    path: "/gallery", // 添加路径属性
  },
  {
    title: "Service",
    content:
      "See why Basis specializes in product and brand design for innovative financial technology companies.",
    path: "/service", // 添加路径属性
  },
  {
    title: "Collation",
    content:
      "Meet Basis. We increase the value of digital products and their brands through design",
    path: "/collation", // 添加路径属性
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
<style scoped>
.position {
  position: fixed;
  display: flex;
  justify-content: center;
  margin: 30px 0;
  display: none;
}
@media screen and (max-width: 991px) {
  .position {
    /* position: relative; */
    padding-bottom: 32px;
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
