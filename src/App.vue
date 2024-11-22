<script setup>
import { onMounted } from "vue";
import startRain from "@/assets/rain.js";

onMounted(() => {
  startRain();
});

document.addEventListener("mousemove", e => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: ${(e.clientX - window.innerWidth / 2) * .005}deg;
    --move-y: ${(e.clientY - window.innerHeight / 2) * .005}deg;
    `
  })
})
</script>

<template>
  <div
      style="
        --logo-size: calc(var(--index) * 7.8);
        height: var(--logo-size);
        width: calc(var(--index) * 7.8);
        top: calc(var(--index) * 2.8);
        left: calc(50% - calc(var(--logo-size) / 2))
      "
      class="bg-[url('/img/logo.svg')] bg-no-repeat absolute z-10">
  </div>

  <section style="perspective: 1000px" class="layers overflow-hidden will-change-transform">
    <div style="transform-style: preserve-3d; transform: rotateX(var(--move-y)) rotateY(var(--move-x)); transition: var(--transition)" class="layers__container h-[100vh] min-h-[500px]">
      <div style="transform: translateZ(-35px) scale(1.06)" class="layers__item bg-[url('/img/layer-1.jpg')]"></div>
      <div style="transform: translateZ(110px) scale(.88)" class="layers__item bg-[url('/img/layer-2.png')]"></div>
      <div style="transform: translateZ(250px) scale(1);  margin-top: calc(var(--index) * 2.5); " class="layers__item flex items-center justify-center text-center ">
        <div>
          <h1 style="font-size: calc(var(--index) * 2.9); letter-spacing: calc(var(--index) * -.15);" class="uppercase leading-[1em]">
            natural forest <span class="block">html / css</span>
          </h1>
          <p style="font-size: calc(var(--index) * .73)" class="font-merriweather">
            creating a beautiful 3D website with a 'lens effect'
          </p>
          <button
              style="
              font-size: calc(var(--index) * .71);
              letter-spacing: -.02vw;
              padding: calc(var(--index) * .2) calc(var(--index) * .4);
              margin-top: calc(var(--index) * 1.5);
              font-family: Arial,serif
              "
              class="border-2 outline-none rounded-full border-white uppercase">
            Start learning
          </button>
        </div>
      </div>
      <div style="transform: translateZ(300px) scale(.9)" class="layers__item">
        <canvas class="rain"></canvas>
      </div>
      <div style="transform: translateZ(380px) scale(.9)" class="layers__item bg-[url('/img/layer-5.png')]"></div>
      <div style="transform: translateZ(420px)" class="layers__item bg-[url('/img/layer-6.png')]"></div>
    </div>
  </section>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .layers__item {
    position: absolute;
    inset: -5vw;
    background-size: cover;
    background-position: center;
  }
</style>