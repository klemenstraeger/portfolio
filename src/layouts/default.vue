<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div>
    <UContainer class="pt-10">
      <MobileDrawer />
      <SpeedInsights />
      <TheHeader />
      <slot />
      <TheFooter />
    </UContainer>
  </div>
</template>
