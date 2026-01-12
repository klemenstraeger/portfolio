<script setup lang="ts">
import { useAppStore } from "~/stores/app-store"

const appStore = useAppStore()

const links = [
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
  <div class="flex justify-between py-8 items-center">
    <NuxtLink to="/">
      <div class="font-mono font-bold text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
        klemenstraeger.dev
      </div>
    </NuxtLink>
    <div class="gap-4 items-center hidden lg:flex">
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        :target="link.target"
        class="text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:scale-110 hover:text-primary-400"
      >
        <Icon
          :name="link.name"
          size="2.5rem"
        />
      </NuxtLink>
    </div>

    <div class="lg:hidden">
      <button
        class="text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:scale-110 hover:text-primary-400"
        @click="appStore.drawerOpen = !appStore.drawerOpen"
      >
        <Icon
          name="tabler:menu"
          size="2rem"
        />
      </button>
    </div>
  </div>
</template>
