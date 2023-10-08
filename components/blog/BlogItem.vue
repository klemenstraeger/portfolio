<template>
  <div
    class="order-1 px-4 py-4 text-left rounded-b-lg border-t-emerald-600 border-t-4 p-4 sm:p-6 lg:p-8 bg-gray-900 z-20 flex flex-col gap-8"
  >
    <div class="group relative">
      <div class="flex justify-between items-center mb-3">
        <div class="text-lg text-emerald-500"></div>
      </div>
      <h4 class="mb-3 font-bold md:text-3xl text-white">Das ist ein blog</h4>
      <div class="flex items-start">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas soluta
          voluptatibus iusto nam quae modi officiis eveniet sed velit blanditiis quos,
          tempore cupiditate laudantium sit, non rerum voluptas eius!
        </div>
        <nuxt-img class="w-[200px] flex-grow" src="/img/placeholder.png"></nuxt-img>
      </div>
    </div>
    <div class="flex justify-between">
      <div></div>
      <Tag size="small">Test</Tag>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
