<template>
  <div class="marquee">
    <Vue3Marquee :clone="true">
      <img
        data-aos="fade-up"
        data-aos-delay="300"
        src="https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240a_logo_redbull.png"
        alt=""
        class="marquee_logo aos-init aos-animate"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="400"
        src="https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240b_logo_airbnb.png"
        alt=""
        class="marquee_logo aos-init aos-animate"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="500"
        src="https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240c_logo_sable.png"
        alt=""
        class="marquee_logo aos-init aos-animate"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="700"
        src="https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240e_logo_google.png"
        alt=""
        class="marquee_logo aos-init aos-animate"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="800"
        src="https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af55240f_logo_seen.png"
        alt=""
        class="marquee_logo aos-init aos-animate"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="900"
        src="https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552410_logo_disney.png"
        alt=""
        class="marquee_logo aos-init aos-animate"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="1000"
        src="https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552411_logo_sc-financial.png"
        alt=""
        class="marquee_logo aos-init aos-animate"
      />
      <img
        data-aos="fade-up"
        data-aos-delay="1100"
        src="https://assets-global.website-files.com/6584502438fea068af552349/6584502438fea068af552412_logo_prosody.png"
        alt=""
        class="marquee_logo aos-init aos-animate"
      />
    </Vue3Marquee>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { Vue3Marquee } from "vue3-marquee";

AOS.init();
</script>
<style scoped lang="scss">
.marquee_logo {
  height: 60px;
  margin: 0 15px;
}
</style>
