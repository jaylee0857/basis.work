<template>
  <footer class="footer">
    <div class="container">
      <div class="row row-justify-center">
        <div class="col col-lg-3 col-md-12">
          <div class="footer_group cc-above">
            <h3 class="u-ts-6 u-text-secondary">Email us</h3>
            <ul role="list" class="footer_list">
              <li class="footer_list-item">
                <a
                  href="mailto:hello@basis.work"
                  class="footer_link w-inline-block"
                  ><div class="u-ts-3">Booking@shaochichan.com</div></a
                >
              </li>
            </ul>
          </div>
          <div class="footer_group">
            <h3 class="u-ts-6 u-text-secondary">Social</h3>
            <ul role="list" class="footer_list">
              <li class="footer_list-item">
                <a
                  href="https://www.facebook.com/skyart7325?mibextid=AEUHqQ"
                  target="_blank"
                  class="footer_link w-inline-block"
                  ><div class="u-ts-3">Instagram</div></a
                >
              </li>
              <li class="footer_list-item">
                <a
                  href="https://www.instagram.com/skyart7325?igsh=MW14ZG4zcmRvY3d4OA=="
                  target="_blank"
                  class="footer_link w-inline-block"
                  ><div class="u-ts-3">Instagram</div></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col col-lg-3 col-md-12">
          <div class="footer_group">
            <h3 class="u-ts-6 u-text-secondary">Navigation</h3>
            <ul role="list" class="footer_list">
              <li class="footer_list-item">
                <a
                  @click="goToAboutPage('/')"
                  class="footer_link w-inline-block"
                  ><div class="u-ts-3">Overview</div></a
                >
              </li>
              <li class="footer_list-item">
                <a
                  @click="goToAboutPage('/gallery')"
                  class="footer_link w-inline-block"
                  ><div class="u-ts-3">Gallery</div></a
                >
              </li>
              <li class="footer_list-item">
                <a
                  @click="goToAboutPage('/service')"
                  class="footer_link w-inline-block"
                  ><div class="u-ts-3">Service</div></a
                >
              </li>
              <li class="footer_list-item">
                <a
                  @click="goToAboutPage('/collation')"
                  aria-current="page"
                  class="footer_link w-inline-block w--current"
                  ><div class="u-ts-3">Collation</div></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col col-md-hide"></div>
        <div class="col col-lg-4 col-md-12 col-md-first">
          <a href="/" class="footer-wordmark w-inline-block"
            ><div class="wordmark w-embed">
              <img
                class="img-filter"
                :src="getImageUrl('logo.png')"
                alt=""
              /></div
          ></a>
        </div>
      </div>
      <div class="footer-copyright">
        <div data-copyright="">
          Copyright © <span data-dynamic="year">2024</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { getImageUrl } from "@/unit/getImageUrl";
import { useRouter } from "vue-router";
const router = useRouter();
const goToAboutPage = (path) => {
  router.push(path);
};
</script>
