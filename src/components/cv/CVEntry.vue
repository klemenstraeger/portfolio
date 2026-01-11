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
    class="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/50 overflow-hidden order-1 w-full md:w-5/12 lg:px-4 py-4 text-left rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:scale-[1.02] relative"
  >
    <!-- Top accent border -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-lime-600" />
    
    <!-- Hover glow effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div class="relative border-b border-slate-700/50 p-4 lg:p-6">
      <div class="flex items-start justify-between">
        <div>
          <Chip class="group-hover:scale-105 transition-transform duration-300">
            {{ $rt(entry.timeFrame) }}
          </Chip>
          <h2 class="text-xl font-semibold text-emerald-400 mt-3 group-hover:text-emerald-300 transition-colors duration-300">
            {{ $rt(entry.title) }}
          </h2>
          <p class="text-white/80 mt-2 font-light">
            {{ $rt(entry.company) }} · {{ $rt(entry.location) }}
          </p>
        </div>
      </div>
    </div>
    
    <div class="relative p-6">
      <div class="space-y-2 text-white/80">
        <ul class="list-none text-sm space-y-2">
          <li 
            v-for="(keypoint, index) in entry.keypoints" 
            :key="index"
            class="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300"
            :style="{ transitionDelay: `${index * 50}ms` }"
          >
            <span class="text-emerald-500 mt-1">▸</span>
            <span>{{ $rt(keypoint) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
