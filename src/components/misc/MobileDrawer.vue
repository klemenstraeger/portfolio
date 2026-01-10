<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useAppStore } from "~/stores/app-store"

const appStore = useAppStore()

const { drawerOpen } = storeToRefs(appStore)

const isLocked = useScrollLock(document)

watch(drawerOpen, (value) => {
  isLocked.value = value
})

const links = [
  {
    name: "mdi:github",
    to: "https://github.com/klemenstraeger",
    target: "_blank",
    title: "Github",
  },
  {
    name: "mdi:linkedin",
    to: "https://www.linkedin.com/in/klemens-tr%C3%A4ger-003b68198/",
    target: "_blank",
    title: "LinkedIn",
  },
  {
    name: "ci:mail",
    to: "mailto:contact@klemenstraeger.dev",
    target: "_blank",
    title: "Mail",
  },
]
</script>

<template>
  <USlideover v-model="drawerOpen" side="right">
    <UCard 
      class="flex flex-col flex-1" 
      :ui="{ 
        body: { base: 'flex-1' }, 
        ring: '', 
        divide: 'divide-y divide-neutral-100 dark:divide-neutral-800',
        background: 'bg-white dark:bg-neutral-900'
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
            klemenstraeger.dev
          </h3>
          <button
            class="transition-all duration-200 hover:scale-110 hover:text-primary-400"
            @click="drawerOpen = false"
          >
            <Icon name="mdi:close" size="1.5rem" />
          </button>
        </div>
      </template>

      <div class="flex flex-col gap-4 p-4">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.to"
          :target="link.target"
          class="flex items-center gap-4 p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-200 hover:scale-[1.02]"
          @click="drawerOpen = false"
        >
          <Icon :name="link.name" size="1.5rem" class="text-primary-500" />
          <span class="text-lg font-medium">{{ link.title }}</span>
        </NuxtLink>
      </div>
    </UCard>
  </USlideover>
</template>
