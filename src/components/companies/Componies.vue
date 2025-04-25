<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"

const isSm = ref<boolean>(false)

onMounted(() => {
  isSm.value = useBreakpoints(breakpointsTailwind).smallerOrEqual("sm").value
})

const companieLogos = [
  {
    src: "https://www.ofenseite.com/bilder/intern/shoplogo/ofenseite_logo_300px.webp",
    active: false,
  },
  {
    src: "https://www.webneo.de/wp-content/uploads/2023/08/wbn_logo_responsive_rgb.svg",
    active: false,
  },
  {
    src: "https://www.og1o.com/_assets/625e2d6cb54141905b51c20d13baa45b/Images/oneo-logo.svg",
    active: false,
  },
]
</script>

<template>
  <Marquee v-if="isSm" pause-on-hover class="[--duration:20s] w-full">
    <div
      v-for="companie in companieLogos"
      :key="companie.src"
      class="flex items-center justify-center"
    >
      <NuxtImg
        class="h-28 w-40 mx-6 object-contain"
        :class="companie.active ? '' : 'grayscale'"
        :src="companie.src"
      />
    </div>
  </Marquee>
  <div v-else class="grid grid-cols-3 w-full">
    <div
      v-for="companie in companieLogos"
      :key="companie.src"
      class="flex items-center justify-center"
    >
      <NuxtImg
        class="w-48 hover:scale-110 hover:grayscale-0 transition-transform duration-300 cursor-pointer"
        :class="companie.active ? '' : 'grayscale'"
        :src="companie.src"
      />
    </div>
  </div>
</template>

<style></style>
