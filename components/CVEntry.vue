<template>
  <div
    class="order-1 w-full md:w-5/12 px-4 py-4 text-left rounded-b-lg border-t-emerald-600 border-t-4 p-4 sm:p-6 lg:p-8 bg-gray-900 z-20 hover:scale-105 transition duration-300 ease-in-out"
  >
    <div class="group relative">
      <div class="flex justify-between items-center mb-3">
        <div class="text-lg text-emerald-500">{{ props.timeFrame }}</div>
        <Icon :size="!isSm ? '2.5rem' : '2rem'" :name="props.icon as string" />
      </div>
      <h4 class="mb-3 font-bold md:text-2xl">
        {{ props.title }}
      </h4>

      <p
        class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
        v-html="props.text"
      ></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isSm = useMediaQuery("(min-width: 640px)");
//hallo
const props = defineProps({
  title: String,
  icon: String,
  text: String,
  timeFrame: String,
});
</script>

<style scoped></style>
