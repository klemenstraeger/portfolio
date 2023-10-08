<template>
  <div class="min-h-[50vh] mx-4 md:mx-0" id="projects">
    <div class="ml-auto lg:text-5xl mb-12 text-3xl text-white font-semibold">
      Projects
    </div>

    <div class="flex flex-col gap-12">
      <div
        class="relative block rounded-lg p-4 sm:p-6 lg:p-8 bg-gray-900"
        v-for="project in projects"
      >
        <h1 class="text-emerald-500 text-xl md:text-3xl font-extrabold">
          {{ project.title }}
        </h1>
        <div class="grid md:grid-cols-2">
          <div class="md:w-3/4 w-full">
            <p class="text-white mt-4 font-normal text-sm md:text-base text-left">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap justify-stretch md:gap-3 mt-4">
              <Tag
                :icon="technologie.icon"
                :border-color="technologie.color"
                v-for="technologie in project.usedTechnologies"
              >
                {{ technologie.name }}</Tag
              >
            </div>
          </div>
          <n-carousel
            dot-placement="bottom"
            show-arrow
            draggable
            autoplay
            :show-dots="false"
            class="rounded-md img-carousel"
            keyboard
          >
            <nuxt-img
              :alt="project.title"
              format="webp"
              loading="lazy"
              quality="100"
              v-for="img in project.images"
              class="mt-4 rounded-md !w-full md:h-[400px] object-cover"
              :src="img"
            />
          </n-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Trommelhelden DB | 2023",
    description:
      "During our 7th semester, my fellow students and I embarked on the mandatory project of developing Trommelhelden DB Webfrontend, a comprehensive full-stack web application designed to facilitate CRUD operations. This project provided us the liberty to handpick our technology stack, which created an exciting platform to explore, assimilate, and apply a wide range of technologies. We further enriched the application by incorporating a feature to generate random seed data, enhancing its testing and demonstration capabilities.",
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
    title: "EWO Ads Manager | 2021-2023",
    description: `
EWO Adsmanager is a Nuxt 3 web application, which initially started as a Google Apps Script, designed to optimize Google/Bing ads management, reporting, and keyword seeding. At its core, the BudgetManager service facilitates strategic ad budget planning based on seasonal demand and provides key statistics for each budget period. The TrafficReport service delivers insightful data on both paid and organic traffic at link and product group levels. Finally, the KeywordSeeding service generates new negative keywords based on the previous day's search terms, refining ad targeting and boosting campaign performance. `,
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
