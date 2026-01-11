<script lang="ts" setup>
defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  body: { type: String, required: true },
})
</script>

<template>
  <figure
    class="group relative w-64 cursor-pointer overflow-hidden rounded-2xl border border-slate-700/50 p-5 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 hover:scale-105"
  >
    <!-- Hover glow effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div class="relative z-10">
      <div class="flex flex-row items-center gap-3">
        <NuxtImg 
          :src="img" 
          class="rounded-full ring-2 ring-slate-700 group-hover:ring-emerald-500/50 transition-all duration-300" 
          width="40" 
          height="40" 
          alt="" 
        />
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
            {{ name }}
          </span>
          <p class="text-xs font-light text-white/60">
            {{ username }}
          </p>
        </div>
      </div>
      <blockquote class="mt-3 text-sm text-white/70 leading-relaxed">
        {{ body }}
      </blockquote>
    </div>
  </figure>
</template>
