<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div>
    <MobileDrawer />
    <UContainer class="pt-10">
      <SpeedInsights />
      <TheHeader />
      <slot />
      <TheFooter />
    </UContainer>
  </div>
</template>
