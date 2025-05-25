<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

</script>

<template>
  <div class="dark:bg-gray-95  h-full w-full">
    <div class="relative h-full w-full bg-white">
      <div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
    <!-- <div
      class="dark:fill-white/10 fill-gray-400/10 absolute h-[105vh] w-full lg:[mask-image:radial-gradient(white,transparent_70%)] hidden lg:block"
      :style="{
        backgroundImage: `url('bg.svg?inline')`,
        backgroundSize: '100vw 110vh',
      }"
    /> -->
    <TheMobileDrawer />
    <SpeedInsights />
    <div class="z-10 relative">
      <div class="container mx-auto min-h-screen md:px-4 xl:px-0">
        <TheHeader />
        <slot />
      </div>
      <n-back-top class="z-10" />
      <TheFooter />
    </div>
  </div>
</template>

<style></style>
