<template>
  <div class="about">
    <div role="listitem" class="cases-item w-dyn-item">
      <a
        data-mouse-class="cc-text"
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
        data-mouse-text="Contact Us"
        data-mouse-class="cc-text"
        href="mailto:hello@basis.work?subject=Enquiry"
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
    </div>
  </div>
</template>

<script>
import { useI18n } from "@/hooks/use-i18n";

export default {
  title: "pages.home.nav.about",
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>
