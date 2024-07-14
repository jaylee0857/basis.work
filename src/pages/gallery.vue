<template>
  <div id="cases" class="wrap">
    <!-- pc -->
    <div class="cases-slider">
      <h1 id="case-title">Gallery</h1>
      <div role="list" class="cases-list w-dyn-items container">
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <!-- <img
                src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"
                loading="eager"
                alt=""
                class="cases-landscape"
              /> -->
              <div class="iframe-video_wrapper">
                <iframe
                  class="iframe-video_iframe"
                  width="100%"
                  height="100%"
                  src="https://app.vidzflow.com/v/g9XwDuXxnj?dq=576&ap=true&muted=true&loop=true&ctp=true&bv=false&piv=false&bc=%234E5FFD&controls=play-large%2Cplay%2Cprogress%2Ccurrent-time%2Cmute%2Cvolume%2Csettings%2Cfullscreen"
                  title="C0084"
                  style="aspect-ratio: 1.77777778; overflow: hidden"
                  frameborder="0"
                  scrolling="no"
                  allow="fullscreen"
                ></iframe>
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g1") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g2.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g2.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g2") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g3.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g3.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g3") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g4.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g4.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g4") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <!-- <img
                src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"
                loading="eager"
                alt=""
                class="cases-landscape"
              /> -->
              <div class="iframe-video_wrapper">
                <iframe
                  class="iframe-video_iframe"
                  width="100%"
                  height="100%"
                  src="https://app.vidzflow.com/v/B8VWeYDzBp?dq=576&ap=true&muted=true&loop=true&ctp=true&bv=false&piv=false&bc=%234E5FFD&controls=play-large%2Cplay%2Cprogress%2Ccurrent-time%2Cmute%2Cvolume%2Csettings%2Cfullscreen"
                  title="C0075"
                  style="aspect-ratio: 1.77777778; overflow: hidden"
                  frameborder="0"
                  scrolling="no"
                  allow="fullscreen"
                ></iframe>
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g5") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g6.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g6.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g6") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <!-- <img
                src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"
                loading="eager"
                alt=""
                class="cases-landscape"
              /> -->

              <div class="iframe-video_wrapper">
                <iframe
                  class="iframe-video_iframe"
                  width="100%"
                  height="100%"
                  src="https://app.vidzflow.com/v/RYnx2mTnRD?dq=576&ap=true&muted=true&loop=true&ctp=true&bv=false&piv=false&bc=%234E5FFD&controls=play-large%2Cplay%2Cprogress%2Ccurrent-time%2Cmute%2Cvolume%2Csettings%2Cfullscreen"
                  title="C0074"
                  style="aspect-ratio: 1.77777778; overflow: hidden"
                  frameborder="0"
                  scrolling="no"
                  allow="fullscreen"
                ></iframe>
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g7") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g8.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g8.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g8") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g9.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g9.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g9") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <!-- <img
                src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"
                loading="eager"
                alt=""
                class="cases-landscape"
              /> -->
              <div class="iframe-video_wrapper">
                <iframe
                  class="iframe-video_iframe"
                  width="100%"
                  height="100%"
                  src="https://app.vidzflow.com/v/gdi5fIV5zR?dq=576&ap=true&muted=true&loop=true&ctp=true&bv=false&piv=false&bc=%234E5FFD&controls=play-large%2Cplay%2Cprogress%2Ccurrent-time%2Cmute%2Cvolume%2Csettings%2Cfullscreen"
                  title="C0056"
                  style="aspect-ratio: 1.77777778; overflow: hidden"
                  frameborder="0"
                  scrolling="no"
                  allow="fullscreen"
                ></iframe>
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g10") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g11.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g11.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g11") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g12.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g12.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g12") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g13.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g13.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g13") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g14.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g14.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g14") }}</div>
            </div></a
          >
        </div>
        <div role="listitem" class="cases-item w-dyn-item">
          <a class="cases-card cc-immediate w-inline-block"
            ><div class="cases-assets">
              <img
                :src="getImageUrl('gallery/g15.jpg')"
                loading="lazy"
                alt=""
                class="cases-portrait"
              /><img
                :src="getImageUrl('gallery/g15.jpg')"
                loading="eager"
                alt=""
                class="cases-landscape"
              />
              <div class="iframe-video_wrapper">
                <div class="iframe-video_blocker"></div>
              </div>
            </div>
            <div class="cases-text">
              <div class="u-ts-2">{{ t("$current.item.g15") }}</div>
            </div></a
          >
        </div>
      </div>
    </div>

    <!-- card mobile-->
    <!-- <div role="listitem" class="cases-item w-dyn-item">
      
        href="/cases/sable-brand"
        class="cases-card cc-immediate w-inline-block"
        style="
          transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          transform-style: preserve-3d;
          opacity: 1;
        "
        ><div class="cases-assets">
          <img
            src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"
            loading="lazy"
            alt=""
            class="cases-portrait"
          /><img
            src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"
            loading="eager"
            alt=""
            class="cases-landscape"
          />
          <div class="iframe-video_wrapper">
            <iframe
              class="iframe-video_iframe"
              width="100%"
              height="100%"
              style="overflow: hidden"
              frameborder="0"
              scrolling="no"
              allow="fullscreen"
              src="https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"
              title="Sable 12"
              loading="lazy"
            ></iframe>
            <div class="iframe-video_blocker"></div>
          </div>
        </div>
        <div class="cases-text"><div class="u-ts-2">Sable Brand</div></div></a
      ><link rel="prerender" href="/cases/sable-brand" /><a
        data-mouse-text="Contact
        class="cases-card cc-immediate w-inline-block w-condition-invisible"
        style="
          transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          transform-style: preserve-3d;
          opacity: 1;
        "
        ><div class="cases-assets">
          <img
            src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac028b_sable-brand-card-image-desktop.jpeg"
            loading="lazy"
            alt=""
            class="cases-portrait w-condition-invisible"
          /><img
            src="https://assets-global.website-files.com/6584502438fea068af552349/659c06018a35c585faac023c_sable-brand-card-image-mobile.jpeg"
            loading="lazy"
            alt=""
            class="cases-landscape w-condition-invisible"
          />
          <div>
            <div class="iframe-video_wrapper">
              <iframe
                class="iframe-video_iframe"
                width="100%"
                height="100%"
                style="overflow: hidden"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                src="https://app.vidzflow.com/v/UGKXt1XIZz?dq=1080&amp;ap=true&amp;muted=true&amp;loop=true&amp;ctp=false&amp;bv=true&amp;bc=%234E5FFD&amp;controls=false"
                title="Sable 12"
                loading="lazy"
              ></iframe>
              <div class="iframe-video_blocker"></div>
            </div>
          </div>
        </div>
        <div class="cases-text">
          <div class="cases-more">
            <div class="u-ts-6 u-tc-caps u-text-accent1">
              Contact us<span class="hide-tablet"> for more</span>
            </div>
          </div>
          <div class="u-ts-2">Sable Brand</div>
        </div></a
      >
    </div> -->
    <!-- === -->
  </div>
  <div class="container mobile-show">
    <div class="target_line"></div>
  </div>
  <template class="mobile-show">
    <ContactUs></ContactUs>
  </template>
  <!-- <section class="section mobile-show">
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
              <h2 class="u-ts-4">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="w-layout-grid pair-grid">
        <div>
          <div class="contact-cta w-richtext">
            <h3 data-aos="fade-up" data-aos-duration="700">
              <div
                class="u-overflow-hidden"
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
                  Have
                </div>
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
                  a
                </div>
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
                  project
                </div>
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
                  in
                </div>
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
                  mind?
                </div>
              </div>
              <div
                class="u-overflow-hidden"
                style="display: block; text-align: start; position: relative"
              >
                <a
                  data-aos="fade-up"
                  data-aos-duration="700"
                  href="mailto:hello@basis.work"
                  style="
                    translate: none;
                    rotate: none;
                    scale: none;
                    transform: translate(0px, 0%);
                  "
                  ><div style="position: relative; display: inline-block">
                    hello@basis.work
                  </div></a
                >
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <Footer class="mobile-show"></Footer>
</template>

<script>
import { useI18n } from "@/hooks/use-i18n";
import Footer from "@/widgets/layout/footer.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";
import { getImageUrl } from "@/unit/getImageUrl";
import ContactUs from "@/widgets/layout/contact-us.vue";

export default {
  title: "pages.home.nav.about",
  components: {
    Footer,
    ContactUs,
  },
  setup() {
    const { t, setPrefix } = useI18n();
    setPrefix({
      $current: "pages.gallery",
    });
    const horizontal_movement = () => {
      let cases = document.querySelector("#cases");
      cases.addEventListener("wheel", (event) => {
        // event.preventDefault();
        // cases.scrollLeft += event.deltaY;
        if (window.innerWidth > 991) {
          event.preventDefault();
          cases.scrollLeft += event.deltaY;
        }
      });
    };
    onMounted(() => {
      AOS.init();
      horizontal_movement();
      console.log("index");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      });

      // 獲取所有目標元素並設置觀察
      const targets = document.querySelectorAll(".target_line");
      targets.forEach((target) => {
        observer.observe(target);
      });
    });
    return {
      t,
      getImageUrl,
    };
  },
};
</script>
<style scoped lang="scss">
.wrap {
  height: calc(96vh - 52px);
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 991px) {
    height: auto;
    overflow: auto;
  }
  #case-title {
    width: 42vw;
    padding-bottom: 10%;
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
    text-align: center;
    @media (max-width: 991px) {
      padding-left: 15px;
    }
  }
  .cases-slider {
    padding-bottom: 80px;
    @media (max-width: 991px) {
      display: block;
    }
  }
  .cases-item {
    background-color: var(--swatch--orange);
  }
  .cases-list {
    @media (max-width: 991px) {
      padding: 0 15px;
      margin: 0;
    }
  }
}
.mobile-show {
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
}
</style>
