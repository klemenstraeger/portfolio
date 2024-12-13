<template>
  <div v-show="drawerOpen" class="fixed inset-0 z-50 backdrop-blur-sm"/>

  <!-- drawer component -->
  <div
    id="drawer-right-example"
    class="fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform w-80 bg-gray-800 flex flex-col justify-center border-l border-emerald-500"
    tabindex="-1"
    aria-labelledby="drawer-right-label"
    :class="{
      'translate-x-100': drawerOpen,
      'translate-x-full': !drawerOpen,
    }"
  >
    <Icon
      name="mdi:close"
      size="24"
      class="absolute text-white top-4 right-4 cursor-pointer"
      @click="drawerOpen = false"
    />
    <div
      class="font-mono lg:font-semibold font-bold lg:text-4xl text-transparent text-lg bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 py-2 absolute top-2 left-4"
    >
      klemenstraeger.dev
    </div>
    <div class="flex flex-col mt-24">
      <div
        v-for="link in links"
        :key="link.name"
        class="bg-gray-900 py-8 px-4 w-full text-3xl flex border-y border-emerald-500"
      >
        <NuxtLink
          :to="link.to"
          :target="link.target"
          class="text-white flex items-center gap-2"
          @click="drawerOpen = false"
        >
          <Icon
            :name="link.name"
            size="24"
            class="hover:scale-110 transition duration-150 ease-in-out hover:!text-emerald-500 text-white text-left"
          />
          <div>{{ link.title }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/stores/app-store";

const appStore = useAppStore();

const { drawerOpen } = storeToRefs(appStore);

const isLocked = useScrollLock(document);

watch(drawerOpen, (value) => {
  isLocked.value = value;
});

const links = [
  //   {
  //     name: "ic:outline-article",
  //     to: "/blog",
  //     target: "",
  //     title: "Blog",
  //   },
  {
    name: "mdi:github",
    to: "https://github.com/klemenstraeger",
    target: "_blank",
    title: "Github",
  },
  {
    name: "mdi:linkedin",
    to: "https://www.linkedin.com/in/klemens-tr%C3%A4ger-003b68198/",
    target: "_blank",
    title: "LinkedIn",
  },
  {
    name: "ci:mail",
    to: "mailto:contact@klemenstraeger.dev",
    target: "_blank",
    title: "Mail",
  },
];
</script>

<style scoped></style>
