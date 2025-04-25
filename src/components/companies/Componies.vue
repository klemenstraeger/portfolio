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
    src: "https://osp.my.onetrust.eu/cdn/cookies/logos/42600428-c0bd-4483-9cee-b81bfc62e42a/390ca807-c198-4a14-833f-ece2f6776be2/dfa0ca10-4d30-418f-a16e-27f2728ad98c/Logo-OSP_ohne_R.png",
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
