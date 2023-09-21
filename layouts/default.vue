<template>
  <div class="bg-gray-950">
    <div class="container mx-auto min-h-screen">
      <TheHeader />

      <slot></slot>
    </div>
    <n-back-top />
    <TheFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
