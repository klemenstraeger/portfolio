<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<template>
  <section>
    <h3 class="lg:text-5xl text-2xl mx-4 md:mx-0 text-white font-bold mb-4 lg:mb-12">
      {{ title }}
    </h3>
    <slot />
  </section>
</template>

<style></style>
