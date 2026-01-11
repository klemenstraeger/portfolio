<script setup lang="ts">
const { t } = useI18n()

const projects = [
  {
    title: t("projects.entry0.title"),
    description: t("projects.entry0.text"),
    images: [
      "img/login.png",
      "img/start-seite.png",
      "img/upload_done.png",
      "img/mapping_ergebnisse_done.png",
    ],
    usedTechnologies: [
      {
        name: "Python",
        icon: "logos:python",
        color: "border-blue-600",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        color: "border-blue-600",
      },
      {
        name: "Nuxt 3",
        icon: "logos:nuxt-icon",
        color: "border-pink-600",
      },
      {
        name: "TailwindCSS",
        icon: "logos:tailwindcss-icon",
        color: "border-pink-600",
      },
      {
        name: "Chart.js",
        icon: "file-icons:chartjs",
        color: "border-pink-600",
      },
      {
        name: "PrimeVue",
        icon: "prime:prime",
        color: "border-pink-600",
      },
      {
        name: "Nitro.js",
        icon: "unjs:nitro",
        color: "border-pink-600",
      },
      {
        name: "OpenAI",
        icon: "logos:openai-icon",
        color: "border-emerald-600",
      },
      {
        name: "Google Cloud",
        icon: "logos:google-cloud",
        color: "border-emerald-600",
      },
    ],
  },
  {
    title: t("projects.entry1.title"),
    description: t("projects.entry1.text"),
    repo: "https://github.com/htw-dresden-ps23/trommelhelden-web-frontend",
    images: [
      "/img/trommelhelden.png",
      "img/trommelhelden-create-data.png",
      "img/trommelhelden-dashboard.png",
      "img/trommelhelden-order-overview.png",
      "img/trommelhelden-master-data.png",
    ],
    usedTechnologies: [
      {
        name: "Vue.js",
        icon: "logos:vue",
        color: "border-pink-600",
      },
      {
        name: "TailwindCSS",
        icon: "logos:tailwindcss-icon",
        color: "border-pink-600",
      },
      {
        name: "Chart.js",
        icon: "file-icons:chartjs",
        color: "border-pink-600",
      },
      {
        name: "PrimeVue",
        icon: "prime:prime",
        color: "border-pink-600",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        color: "border-blue-600",
      },

      {
        name: "Prisma",
        icon: "logos:prisma",
        color: "border-blue-600",
      },
      {
        name: "MSSQL",
        icon: "simple-icons:microsoftsqlserver",
        color: "border-blue-600",
      },
      {
        name: "Express",
        icon: "simple-icons:express",
        color: "border-blue-600",
      },
      {
        name: "Docker",
        icon: "logos:docker-icon",
        color: "border-blue-600",
      },
      {
        name: "NGINX",
        icon: "logos:nginx",
        color: "border-blue-600",
      },
    ],
  },
  {
    title: t("projects.entry2.title"),
    description: t("projects.entry2.text"),
    images: [
      "/img/ewo-login.png",
      "/img/ewo-budgetmanager.png",
      "/img/ewo-link-traffic.png",
    ],

    usedTechnologies: [
      {
        name: "Nuxt 3",
        icon: "logos:nuxt-icon",
        color: "border-pink-600",
      },
      {
        name: "TailwindCSS",
        icon: "logos:tailwindcss-icon",
        color: "border-pink-600",
      },
      {
        name: "PrimeVue",
        icon: "prime:prime",
        color: "border-pink-600",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        color: "border-pink-600",
      },
      {
        name: "Prisma",
        icon: "logos:prisma",
        color: "border-blue-600",
      },
      {
        name: "Supabase",
        icon: "logos:supabase-icon",
        color: "border-blue-600",
      },
      {
        name: "Docker",
        icon: "logos:docker-icon",
        color: "border-blue-600",
      },
      {
        name: "Google Ads",
        icon: "logos:google-ads",
        color: "border-blue-600",
      },
      {
        name: "Bing Ads",
        icon: "logos:bing",
        color: "border-blue-600",
      },
      {
        name: "Google Cloud",
        icon: "logos:google-cloud",
        color: "border-emerald-600",
      },
    ],
  },
]
</script>

<template>
  <div id="projects" class="min-h-[50vh] mx-4 md:mx-0">
    <div class="flex flex-col gap-12">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="group relative block rounded-2xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-[1.02] overflow-hidden"
      >
        <!-- Animated background gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <!-- Content -->
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-6">
            <h1 class="text-emerald-400 text-xl md:text-3xl font-bold group-hover:text-emerald-300 transition-colors duration-300">
              {{ project.title }}
            </h1>
            <NuxtLink v-if="project.repo" :href="project.repo" target="_blank">
              <Icon class="text-white text-3xl hover:text-emerald-400 hover:scale-110 transition-all duration-300" name="mdi:github" />
            </NuxtLink>
          </div>
          
          <div class="grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-12 gap-y-6">
            <div class="w-full space-y-4 lg:row-start-1">
              <p class="text-white/80 font-light text-sm md:text-base text-left leading-relaxed">
                {{ project.description }}
              </p>
            </div>
            
            <n-carousel
              dot-placement="bottom"
              draggable
              autoplay
              :show-dots="false"
              :interval="index * 1000 + 5000"
              class="rounded-xl img-carousel lg:row-span-2 xl:col-start-2 overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
              keyboard
            >
              <nuxt-img
                v-for="img in project.images"
                :key="img"
                :alt="project.title"
                format="webp"
                loading="lazy"
                quality="100"
                class="mt-4 rounded-xl !w-full md:h-[400px] object-contain xl:object-scale-down hover:scale-105 transition-transform duration-500"
                :src="img"
              />
            </n-carousel>
            
            <div class="flex flex-wrap md:gap-3 gap-2 mt-4 xl:row-start-2 h-fit justify-self-end">
              <Tag
                v-for="technologie in project.usedTechnologies"
                :key="technologie.name"
                :icon="technologie.icon"
                :border-color="technologie.color"
                class="h-fit hover:scale-110 transition-transform duration-300"
              >
                {{ technologie.name }}
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.n-carousel__arrow {
  background-color: rgba(107, 107, 107, 0.493) !important;
}
</style>
