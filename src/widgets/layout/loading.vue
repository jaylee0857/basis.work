<template>
  <!-- {{ mode }} -->
  <div class="bg" :class="mode">
    <div class="icon">
      <div class="svg_box">
        <svg
          height="100%"
          style=""
          viewBox="0 0 185 80"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M99.7044 37.5233H153.037C191.13 37.5233 194.697 0 166.289 0H56.1904L0 80H124.808C162.901 80 166.468 42.4767 138.06 42.4767H96.2268L75.0995 72.5634H68.8476L89.9749 42.4767H35.7471L39.231 37.5168H93.4589L114.586 7.43022H120.838L99.7108 37.5168L99.7044 37.5233Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const { mode } = defineProps({
  mode: String,
});
</script>
