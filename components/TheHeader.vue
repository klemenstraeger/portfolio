<template>
  <div class="flex justify-between lg:py-12 py-4 mx-4 lg:mx-0 items-center">
    <NuxtLink to="/">
      <div
        class="font-mono lg:font-semibold font-bold lg:text-4xl text-transparent text-base bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 py-2"
      >
        klemenstraeger.dev
      </div>
    </NuxtLink>
    <div class="lg:gap-6 gap-2 items-center hidden lg:flex">
      <NuxtLink :to="link.to" v-for="link in links" :target="link.target">
        <Icon
          :name="link.name"
          :size="!isSm ? '2rem' : '2.5rem'"
          class="hover:scale-110 transition duration-150 ease-in-out hover:!text-emerald-500 text-white"
        />
      </NuxtLink>
    </div>
    <div class="lg:hidden">
      <Icon
        name="ic:outline-menu"
        size="2rem"
        class="hover:scale-110 transition duration-150 ease-in-out hover:!text-emerald-500 text-white"
        @click="appStore.drawerOpen = !appStore.drawerOpen"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app-store";

const isSm = useMediaQuery("(min-width: 640px)");

const appStore = useAppStore();

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
];
</script>

<style scoped></style>
