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
    icon: "i-heroicons-code-bracket",
    to: "https://github.com/klemenstraeger",
    target: "_blank",
    title: "Github",
  },
  {
    icon: "i-heroicons-user-group",
    to: "https://www.linkedin.com/in/klemens-tr%C3%A4ger-003b68198/",
    target: "_blank",
    title: "LinkedIn",
  },
  {
    icon: "i-heroicons-envelope",
    to: "mailto:contact@klemenstraeger.dev",
    target: "_blank",
    title: "Mail",
  },
]
</script>

<template>
  <USlideover v-model="drawerOpen" side="right">
    <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-neutral-100 dark:divide-neutral-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-primary">
            klemenstraeger.dev
          </h3>
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-heroicons-x-mark"
            @click="drawerOpen = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-4 p-4">
        <UButton
          v-for="link in links"
          :key="link.icon"
          :to="link.to"
          :target="link.target"
          :icon="link.icon"
          size="xl"
          variant="soft"
          block
          @click="drawerOpen = false"
        >
          {{ link.title }}
        </UButton>
      </div>
    </UCard>
  </USlideover>
</template>
