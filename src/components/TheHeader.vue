<script setup lang="ts">
import { useAppStore } from "~/stores/app-store"

const isSm = useMediaQuery("(min-width: 640px)")

const appStore = useAppStore()

const links = [
  // {
  //   name: "ic:outline-article",
  //   to: "/blog",
  //   target: "",
  // },
  {
    name: "mdi:github",
    to: "https://github.com/klemenstraeger",
    target: "_blank",
  },
  {
    name: "mdi:linkedin",
    to: "https://www.linkedin.com/in/klemens-tr%C3%A4ger-003b68198/",
    target: "_blank",
  },
  {
    name: "ci:mail",
    to: "mailto:contact@klemenstraeger.dev",
    target: "_blank",
  },
]
</script>

<template>
  <div class="flex justify-between lg:py-12 py-6 mx-4 lg:mx-0 items-center backdrop-blur-sm sticky top-0 z-50 -mx-4 px-4 lg:px-0 bg-gray-950/80">
    <NuxtLink to="/" class="group">
      <div
        class="font-mono lg:font-semibold font-bold lg:text-4xl text-transparent text-base bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-500 to-emerald-600 py-2 hover:scale-105 transition-transform duration-300 bg-[length:200%_auto] hover:bg-right-bottom animate-gradient-x"
      >
        klemenstraeger.dev
      </div>
    </NuxtLink>
    <div class="lg:gap-6 gap-4 items-center hidden lg:flex">
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        :target="link.target"
        class="group relative"
      >
        <div class="absolute inset-0 bg-emerald-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Icon
          :name="link.name"
          :size="!isSm ? '2rem' : '2.5rem'"
          class="relative hover:scale-125 transition-all duration-300 ease-out hover:!text-emerald-400 text-white hover:rotate-6"
        />
      </NuxtLink>
    </div>

    <div class="lg:hidden">
      <Icon
        name="tabler:menu"
        size="2rem"
        class="hover:scale-110 transition duration-150 ease-in-out hover:!text-emerald-400 text-white"
        @click="appStore.drawerOpen = !appStore.drawerOpen"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}
</style>
