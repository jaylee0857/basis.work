<template>
  <section class="section">
    <div class="section-title_component">
      <div class="container">
        <div
          class="section-title_wrapper"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div class="section-title_dot" style="opacity: 1"></div>
          <div class="u-overflow-hidden">
            <div class="section-title_title">
              <h2 class="u-ts-4">{{ t("$current.us.title") }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="w-layout-grid pair-grid">
        <div
          data-animation-element="group"
          id="w-node-_3e0e1f08-4b6f-3e81-4a33-02d9666e49b3-18e0cb67"
        >
          <div
            data-animation-element="rich-text"
            id="w-node-_68ddbddb-36c1-db22-2449-1d3e6f681a07-18e0cb67"
            class="contact-cta w-richtext"
          >
            <h3
              data-animation-element="title"
              style=""
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div
                class="u-overflow-hidden mb-6"
                style="display: block; text-align: start; position: relative"
              >
                <div
                  style="
                    position: relative;
                    display: inline-block;
                    translate: none;
                    rotate: none;
                    scale: none;
                    transform: translate(0px, 0%);
                  "
                >
                  {{ t("$current.us.reserve") }}
                </div>
              </div>
              <div
                class="u-overflow-hidden"
                style="display: block; text-align: start; position: relative"
              >
                <a
                  data-aos="fade-up"
                  data-aos-duration="700"
                  style="
                    translate: none;
                    rotate: none;
                    scale: none;
                    transform: translate(0px, 0%);
                  "
                >
                  <div
                    style="
                      position: relative;
                      display: inline-block;
                      overflow: hidden;
                    "
                  >
                    Book@shaochichan.com
                  </div>
                </a>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { useI18n } from "@/hooks/use-i18n";
const { t, setPrefix } = useI18n();
setPrefix({
  $current: "pages.index",
});
AOS.init();
</script>
<style scoped lang="scss">
.marquee_logo {
  height: 60px;
  margin: 0 15px;
}
</style>
