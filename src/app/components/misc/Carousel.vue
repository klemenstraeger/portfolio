<script setup>
import Autoplay from "embla-carousel-autoplay";
import emblaCarouselVue from "embla-carousel-vue";

const [emblaRef] = emblaCarouselVue({ }, [Autoplay()])
</script>

<template>
  <div ref="emblaRef" class="overflow-hidden">
    <div class="flex">
      <slot class="flex-[0_0_100%] min-w-0" />
    </div>
  </div>
</template>
