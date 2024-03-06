<template>
  <View />
  <Marquee></Marquee>
  <Card></Card>
  <MouseBall></MouseBall>
  <Loading v-if="isError || isShowLoading" :mode="mode"></Loading>
  <Footer></Footer>
</template>
<script>
import { ref, watch } from "vue";
import Loading from "@/widgets/layout/loading.vue";
import Footer from "@/widgets/layout/footer.vue";
import Card from "@/widgets/design-trial/card.vue";
import Marquee from "@/widgets/layout/marquee.vue";
import View from "@/widgets/home/view.vue";
import MouseBall from "@/widgets/layout/mouse-ball.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { isNil, defaultTo, path } from "ramda";
// import pro168 from "@/assets/images/pro168_logo.png";
export default {
  components: {
    Loading,
    Footer,
    Card,
    Marquee,
    View,
    MouseBall,
  },
  setup() {
    const store = useStore(); //啟用vuex
    const isShowLoading = ref(false);
    const lastPage = ref("");
    /**
     * loading動畫模式
     * leave: 只有離開的動畫
     * enter: 進入及離開都有動畫
     * stop: 完全靜止 PS:發現寬度異常時變更
     */
    const mode = ref("leave");
    const isError = computed(() => {
      return mode.value === "stop";
    });
    const layout = computed(() => {
      /* 一開始都是 undefined */
      /* isNil為檢查空值，為null或undefined則return null */
      if (isNil(store.state.route.path)) return null;
      /* 拿設定的 layout，預設是 default-layout */
      const currentLayout = defaultTo("layout-error")(
        path(["meta", "layout"], store.state.route)
      );
      // defaulto的功用就是給預設值
      // 這邊的用法是先設定defaultTo預設值，
      // 緊接著馬上用設置好的預設值下去執行再return結果給變數
      // 所以才會是兩個（）（）分別代表執行了兩次fn，設置及使用
      // 分解大概長這樣：
      // const default = defaultTo("layout-error");
      // default(path(["meta", "layout"], store.state.route))
      return currentLayout;
    });

    watch(
      () => store.state.route,
      (currentPage) => {
        if (lastPage.value !== currentPage) {
          isShowLoading.value = true;
          setTimeout(() => {
            isShowLoading.value = false;
            mode.value = "enter";
          }, 4000);
        }
        lastPage.value = store.state.route.path;
      }
    );
    // 475 768 991
    onMounted(() => {
      console.log("index");
    });

    return {
      layout,
      isShowLoading,
      mode,
      isError,
    };
  },
};
</script>
