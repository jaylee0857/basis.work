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
                  ><div class="u-ts-3">hello@basis.work</div></a
                >
              </li>
            </ul>
          </div>
          <div class="footer_group">
            <h3 class="u-ts-6 u-text-secondary">Social</h3>
            <ul role="list" class="footer_list">
              <li class="footer_list-item">
                <a
                  href="https://www.instagram.com/basis.work/"
                  target="_blank"
                  class="footer_link w-inline-block"
                  ><div class="u-ts-3">Instagram</div></a
                >
              </li>
              <li class="footer_list-item">
                <a
                  href="https://www.linkedin.com/company/basisstudio/"
                  target="_blank"
                  class="footer_link w-inline-block"
                  ><div class="u-ts-3">Linkedin</div></a
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
                <a href="/" class="footer_link w-inline-block"
                  ><div class="u-ts-3">Overview</div></a
                >
              </li>
              <li class="footer_list-item">
                <a href="/cases" class="footer_link w-inline-block"
                  ><div class="u-ts-3">Cases</div></a
                >
              </li>
              <li class="footer_list-item">
                <a href="/about" class="footer_link w-inline-block"
                  ><div class="u-ts-3">Services</div></a
                >
              </li>
              <li class="footer_list-item">
                <a href="/design-trial" class="footer_link w-inline-block"
                  ><div class="u-ts-3">Design Trial</div></a
                >
              </li>
              <li class="footer_list-item">
                <a
                  href="/fintech-design"
                  aria-current="page"
                  class="footer_link w-inline-block w--current"
                  ><div class="u-ts-3">Fintech Design</div></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col col-md-hide"></div>
        <div class="col col-lg-4 col-md-12 col-md-first">
          <a href="/" class="footer-wordmark w-inline-block"
            ><div class="wordmark w-embed">
              <img :src="getImageUrl('logo.png')" alt="" /></div
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
</script>

<style lang="scss" scoped>
.footer_list-item {
  a {
    color: black !important;
  }
}
</style>
