<script setup lang="ts">
const colorMode = useColorMode()

colorMode.preference = 'dark'
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
