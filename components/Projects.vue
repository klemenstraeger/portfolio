<template>
  <div class="min-h-[50vh] mx-4 md:mx-0" id="projects">
    <div class="ml-auto lg:text-5xl mb-4 lg:mb-8 text-3xl text-white font-semibold">
      {{ $t("projects.header") }}
    </div>
    <div class="flex flex-col gap-12">
      <div
        class="relative block rounded-lg p-4 sm:p-6 lg:p-8 bg-gray-900"
        v-for="(project, index) in projects"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-emerald-500 text-xl md:text-3xl font-extrabold">
            {{ project.title }}
          </h1>
          <NuxtLink :href="project.repo" target="_blank" v-if="project.repo"
            ><Icon class="text-white text-3xl" name="mdi:github"></Icon
          ></NuxtLink>
        </div>
        <div class="grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-12">
          <div class="w-full space-y-4 lg:row-start-1">
            <p class="text-white mt-4 font-normal text-sm md:text-base text-left">
              {{ project.description }}
            </p>
          </div>
          <n-carousel
            dot-placement="bottom"
            draggable
            autoplay
            :show-dots="false"
            :interval="index * 1000 + 5000"
            class="rounded-md img-carousel lg:row-span-2 xl:col-start-2"
            keyboard
          >
            <nuxt-img
              :alt="project.title"
              format="webp"
              loading="lazy"
              quality="100"
              v-for="img in project.images"
              class="mt-4 rounded-md !w-full md:h-[400px] object-contain xl:object-scale-down"
              :src="img"
            />
          </n-carousel>
          <div class="flex flex-wrap md:gap-3 mt-4 xl:row-start-2 h-fit justify-self-end">
            <Tag
              :icon="technologie.icon"
              :border-color="technologie.color"
              v-for="technologie in project.usedTechnologies"
              class="h-fit"
            >
              {{ technologie.name }}</Tag
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

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
];
const test = "test";
</script>

<style>
.n-carousel__arrow {
  background-color: rgba(107, 107, 107, 0.493) !important;
}
</style>
