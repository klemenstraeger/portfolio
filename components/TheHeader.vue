<template>
  <div class="flex justify-between lg:py-12 py-4 mx-4 lg:mx-0 items-center">
    <div
      class="font-mono lg:font-semibold font-bold lg:text-4xl text-transparent text-base bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 py-2"
    >
      klemenstraeger.dev
    </div>
    <div class="flex gap-6">
      <NuxtLink to="https://github.com/klemenstraeger" target="_blank">
        <Icon
          name="mdi:github"
          color="white"
          :size="!isSm ? '2rem' : '3rem'"
          class="hover:scale-110 transition duration-150 ease-in-out"
        />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/klemens-tr%C3%A4ger-003b68198/"
        target="_blank"
      >
        <Icon
          name="mdi:linkedin"
          color="white"
          :size="!isSm ? '2rem' : '3rem'"
          class="hover:scale-110 transition duration-150 ease-in-out"
        />
      </NuxtLink>
      <NuxtLink href="mailto:contact@klemenstraeger.dev" target="_blank">
        <Icon
          name="ci:mail"
          color="white"
          :size="!isSm ? '2rem' : '3rem'"
          class="hover:scale-110 transition duration-150 ease-in-out"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const isSm = useMediaQuery("(min-width: 640px)");
</script>

<style scoped></style>
