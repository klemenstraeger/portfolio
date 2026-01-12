<script setup lang="ts">
export interface CVEntry {
  title: string
  icon: string
  company: string
  timeFrame: string
  location: string
  keypoints: string[]
}

defineProps<{
  entry: CVEntry
}>()
</script>

<template>
  <div
    class="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden order-1 border-t-4 w-full md:w-5/12 lg:px-4 py-4 text-left rounded-b-lg border-t-primary-600"
  >
    <div class="border-b border-neutral-200 dark:border-neutral-800 p-4 lg:p-6">
      <div class="flex items-start justify-between">
        <div>
          <Chip>
            {{ $rt(entry.timeFrame) }}
          </Chip>
          <h2 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-2">
            {{ $rt(entry.title) }}
          </h2>
          <p class="text-neutral-700 dark:text-neutral-300 mt-1">
            {{ $rt(entry.company) }} - {{ $rt(entry.location) }}
          </p>
        </div>
      </div>
    </div>
    <div class="p-6">
      <div class="space-y-2">
        <!-- <p>{{ text }}</p> -->
        <ul class="list-disc list-inside text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
          <li v-for="(keypoint, index) in entry.keypoints" :key="index">
            {{ $rt(keypoint) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
