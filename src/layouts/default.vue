<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div class="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 h-full w-full relative overflow-hidden">
    <!-- Animated grid background -->
    <div
      class="fill-white/5 absolute h-[105vh] w-full lg:[mask-image:radial-gradient(white,transparent_70%)] hidden lg:block"
      :style="{
        backgroundImage: `url('bg.svg?inline')`,
        backgroundSize: '100vw 110vh',
      }"
    />
    
    <!-- Floating gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float-1" />
      <div class="absolute top-3/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-float-2" />
      <div class="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-3" />
    </div>
    
    <MobileDrawer />
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

<style scoped>
@keyframes float-1 {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(30px, -30px);
  }
  66% {
    transform: translate(-20px, 20px);
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(-40px, 30px);
  }
  66% {
    transform: translate(30px, -20px);
  }
}

@keyframes float-3 {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(25px, 25px);
  }
}

.animate-float-1 {
  animation: float-1 20s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 25s ease-in-out infinite;
}

.animate-float-3 {
  animation: float-3 18s ease-in-out infinite;
}
</style>
