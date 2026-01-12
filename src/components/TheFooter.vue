<script setup lang="ts"></script>

<template>
  <div class="flex py-24 justify-center flex-col items-center gap-4 text-neutral-400 dark:text-neutral-500">
    <div class="text-center">Klemens Träger 🪄 Dresden, {{ new Date().getFullYear() }}</div>

    <NuxtLink 
      href="https://nuxt.com/" 
      target="_blank" 
      class="flex items-center gap-2 hover:text-primary-400 transition-all duration-200 hover:scale-105"
    >
      <span>built with</span>
      <Icon name="logos:nuxt-icon" size="1.25rem" />
      <span class="font-semibold">Nuxt</span>
    </NuxtLink>
  </div>
</template>
