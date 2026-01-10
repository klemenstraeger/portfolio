<script setup lang="ts">
import { useAppStore } from "~/stores/app-store"

const appStore = useAppStore()

const links = [
  {
    icon: "i-heroicons-code-bracket",
    to: "https://github.com/klemenstraeger",
    target: "_blank",
  },
  {
    icon: "i-heroicons-user-group",
    to: "https://www.linkedin.com/in/klemens-tr%C3%A4ger-003b68198/",
    target: "_blank",
  },
  {
    icon: "i-heroicons-envelope",
    to: "mailto:contact@klemenstraeger.dev",
    target: "_blank",
  },
]
</script>

<template>
  <div class="flex justify-between py-8 items-center">
    <NuxtLink to="/">
      <div class="font-mono font-bold text-xl lg:text-2xl text-primary">
        klemenstraeger.dev
      </div>
    </NuxtLink>
    <div class="gap-4 items-center hidden lg:flex">
      <UButton
        v-for="link in links"
        :key="link.icon"
        :to="link.to"
        :target="link.target"
        variant="ghost"
        color="neutral"
        :icon="link.icon"
        size="lg"
      />
    </div>

    <div class="lg:hidden">
      <UButton
        icon="i-heroicons-bars-3"
        variant="ghost"
        color="neutral"
        size="lg"
        @click="appStore.drawerOpen = !appStore.drawerOpen"
      />
    </div>
  </div>
</template>
