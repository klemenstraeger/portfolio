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
    class="bg-slate-900 border border-slate-800 overflow-hidden order-1 border-t-4 w-full md:w-5/12 lg:px-4 py-4 text-left rounded-b-lg border-t-emerald-600"
  >
    <div class="border-b border-slate-800 p-4 lg:p-6">
      <div class="flex items-start justify-between">
        <div>
          <Chip>
            {{ $rt(entry.timeFrame) }}
          </Chip>
          <h2 class="text-xl font-semibold text-slate-100 mt-2">
            {{ $rt(entry.title) }}
          </h2>
          <p class="text-white mt-1">
            {{ $rt(entry.company) }} - {{ $rt(entry.location) }}
          </p>
        </div>
      </div>
    </div>
    <div class="p-6">
      <div class="space-y-2 text-white">
        <!-- <p>{{ text }}</p> -->
        <ul class="list-disc list-inside text-sm space-y-1 text-slate-400">
          <li v-for="(keypoint, index) in entry.keypoints" :key="index">
            {{ $rt(keypoint) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
