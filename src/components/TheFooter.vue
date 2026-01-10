<script setup lang="ts"></script>

<template>
  <div class="flex py-24 justify-center flex-col items-center gap-4 text-neutral-400">
    <div>Klemens Träger 🪄 Dresden, {{ new Date().getFullYear() }}</div>

    <NuxtLink href="https://nuxt.com/" target="_blank" class="flex items-center gap-2 hover:text-primary transition-colors">
      <span>built with</span>
      <UIcon name="i-heroicons-sparkles" class="w-5 h-5" />
      <span>Nuxt</span>
    </NuxtLink>
  </div>
</template>
