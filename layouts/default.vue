<template>
  <div class="bg-gray-950 h-full w-full">
    <div
      class="fill-white/10 absolute h-[105vh] w-full lg:[mask-image:radial-gradient(white,transparent_85%)] hidden lg:block"
      :style="{ backgroundImage: `url(${imagePath})`, backgroundSize: '100vw 110vh' }"
    ></div>
    <MobileDrawer />

    <div class="z-10 relative">
      <div class="container mx-auto min-h-screen">
        <TheHeader />
        <slot></slot>
      </div>
      <n-back-top class="z-10" />
      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import imagePath from "@/assets/bg.svg";
</script>

<style scoped></style>
