<template>
  <div
    class="order-1 w-5/12 px-1 py-4 text-left rounded-b-lg border-t-emerald-600 border-t-4 p-4 sm:p-6 lg:p-8 bg-gray-900"
  >
    <div class="group relative">
      <div class="flex justify-between items-center">
        <p class="mb-3 text-lg text-emerald-500">{{ props.timeFrame }}</p>
        <Icon size="3rem" :name="props.icon as string" />
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
const props = defineProps({
  title: String,
  icon: String,
  text: String,
  timeFrame: String,
});
</script>

<style scoped></style>
