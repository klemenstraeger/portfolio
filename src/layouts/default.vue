<template>
  <div class="bg-gray-950 h-full w-full">
    <div
      class="fill-white/10 absolute h-[105vh] w-full lg:[mask-image:radial-gradient(white,transparent_70%)] hidden lg:block"
      :style="{
        backgroundImage: `url('bg.svg?inline')`,
        backgroundSize: '100vw 110vh',
      }"
    />
    <MobileDrawer />

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

<script setup lang="ts"></script>

<style></style>
