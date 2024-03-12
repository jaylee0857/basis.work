<template>
  <!-- {{ mode }} -->
  <div class="mask" :class="mode"></div>
  <div class="bg" :class="mode">
    <div class="icon">
      <div class="svg_box">
        <img :src="getImageUrl('logo.png')" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getImageUrl } from "@/unit/getImageUrl";
const { mode } = defineProps({
  mode: String,
});
</script>
