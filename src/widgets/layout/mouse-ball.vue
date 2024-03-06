<template>
  <div
    class="mouse_range"
    @mouseenter="ball_in"
    @mouseleave="ball_in"
    @mousemove="movement"
  >
    <div ref="ball" class="mouse_ball" :class="{ ball_in: isBallIn }">
      <span>READ</span>
      <span>NEXT</span>
    </div>
    <!-- {{ isBallIn }} -->
  </div>
</template>

<script setup>
/** components */
// import { useRoute, useRouter } from "vue-router";

import { ref } from "vue";
const isBallIn = ref(false);
const ball = ref(null);
const ball_in = () => {
  console.log("asd");
  isBallIn.value = !isBallIn.value;
};
const movement = (e) => {
  console.log(e.pageY);
  console.log(window.scrollY);
  ball.value.style.left = e.pageX + 10 + "px";
  ball.value.style.top = e.pageY - window.scrollY + 10 + "px";
};
</script>
<style lang="scss">
.mouse_range {
  position: relative;
  width: 100%;
  height: 300px; //暫定的寬高
  cursor: pointer;
  background-color: rgb(25, 25, 25);
  .mouse_ball {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    transition: 0.3s;
    text-align: center;
    width: 0;
    height: 0;
    border-radius: 100%;
    background-color: white;
    color: black;
    font-size: 12px;
    pointer-events: none;
    &.ball_in {
      display: flex;
      opacity: 1;
      width: 80px;
      height: 80px;
    }
  }
}
</style>
