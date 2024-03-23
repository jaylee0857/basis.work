<template>
  <!-- 外層利用is載入layout -->
  <component :is="layout">
    <!-- 內層利用router顯示 透過解構賦值 取得從router-view取得的component 在把Component用在:is＝"Component"身上-->
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </component>
  <the-popup />
  <LoadPercent v-if="showFirstLoad" @loaded="firstloaded" />
  <Loading v-else-if="isError || isShowLoading" :mode="mode"></Loading>
</template>

<script>
import { ref, watch } from "vue";
import Loading from "@/widgets/layout/loading.vue";
import LoadPercent from "@/widgets/layout/loadpercent.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { isNil, defaultTo, path } from "ramda";
import { useRouter } from "vue-router";
// import { loadIframe } from "@/unit/loadIframes";
// import pro168 from "@/assets/images/pro168_logo.png";
export default {
  components: {
    Loading,
    LoadPercent,
  },
  setup() {
    const store = useStore(); //啟用vuex
    const router = useRouter();
    const isShowLoading = ref(false);
    const showFirstLoad = ref(true);
    // const lastPage = ref("");
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

    const firstloaded = () => {
      showFirstLoad.value = false;
      store.commit("app/systm/firstLoading", false);
      console.log("firstLoead");
    };

    // const loadIframes = async () => {
    //   const iframes = document.querySelectorAll("iframe");
    //   if (iframes.length <= 0) return;
    //   for (const iframe of iframes) {
    //     /** 有資料才載 沒資料直接過 */
    //     if (iframe.src !== "") {
    //       await loadIframe(iframe);
    //     }
    //   }
    // };

    router.beforeResolve(async () => {
      isShowLoading.value = true;
      // await loadIframes();
      // console.log("iframe載入完成");
      /** 這邊需等iframe載入完成 */
      setTimeout(() => {
        isShowLoading.value = false;
        mode.value = "enter";
      }, 3500);
    });

    watch(isShowLoading, (isLoading) => {
      store.commit("app/systm/Loading", isLoading);
    });
    // 475 768 991
    onMounted(() => {
      window.addEventListener("resize", () => {
        console.log(window.innerWidth);
        // if (
        //   window.innerWidth === 991 ||
        //   window.innerWidth === 768 ||
        //   window.innerWidth === 475
        // ) {
        //   mode.value = "stop";
        // }
      });
      // computeSize();
      // window.addEventListener("resize", computeSize);
    });

    return {
      mode,
      layout,
      isError,
      showFirstLoad,
      isShowLoading,
      firstloaded,
    };
  },
};
</script>
<style lang="scss" scoped>
// .loading-wrap {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   img {
//     width: 45%;
//   }
// }
</style>
