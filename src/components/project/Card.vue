<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  project: {
    title: string
    description: string
    images: string[]
    repo?: string
    usedTechnologies: { name: string, icon: string, color: string }[]
  }
  interval: number
}>()
</script>

<template>
  <article class="relative block rounded-lg p-4 sm:p-6 lg:p-8 bg-slate-900">
    <header class="flex items-center justify-between">
      <h2 class="text-emerald-500 text-xl md:text-3xl font-extrabold">
        {{ project.title }}
      </h2>
      <NuxtLink
        v-if="project.repo"
        :to="project.repo"
        target="_blank"
        aria-label="View source on GitHub"
      >
        <Icon name="mdi:github" class="text-white text-3xl" />
      </NuxtLink>
    </header>

    <div class="mt-4 grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-12">
      <!-- Description -->
      <div class="xl:row-start-1 space-y-4">
        <p class="text-white font-normal text-sm md:text-base text-left">
          {{ project.description }}
        </p>
      </div>

      <!-- Image Carousel -->
      <MiscCarousel
        class="rounded-md img-carousel lg:row-span-2 xl:col-start-2"
        dot-placement="bottom"
        draggable
        autoplay
        :interval="interval"
        :show-dots="false"
        keyboard
      >
        <nuxt-img
          v-for="(src, idx) in project.images"
          :key="`${project.title}-${idx}`"
          :src="src"
          :alt="`${project.title} screenshot ${idx + 1}`"
          format="webp"
          loading="lazy"
          quality="100"
          class="mt-4 rounded w-full object-contain lg:h-[400px] xl:object-scale-down"
        />
      </MiscCarousel>

      <!-- Technology Tags -->
      <div class="xl:row-start-2 flex flex-wrap gap-3 mt-4 justify-self-end">
        <Tag
          v-for="tech in project.usedTechnologies"
          :key="tech.name"
          :icon="tech.icon"
          :border-color="tech.color"
          class="h-fit"
        >
          {{ tech.name }}
        </Tag>
      </div>
    </div>
  </article>
</template>
