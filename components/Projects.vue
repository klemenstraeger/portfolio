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
            <p class="text-white mt-4 font-semibold text-sm md:text-base">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap justify-stretch md:gap-2 mt-4">
              <div
                v-for="technologie in project.usedTechnologies"
                class="mr-2 center relative inline-block select-none whitespace-nowrap bg-gray-900 border-2 rounded-lg py-2 px-3.5 align-baseline mt-3 md:mt-0 text-lg font-bold leading-none text-white hover:translate-y-1 w-max transition duration-150 ease-in-out"
                :class="'border-' + technologie.color"
              >
                <div class="mt-px md:text-base text-sm flex items-center gap-2">
                  <Icon :name="technologie.icon"></Icon>
                  {{ technologie.name }}
                </div>
              </div>
            </div>
          </div>
          <n-carousel
            dot-placement="bottom"
            :centered-slides="true"
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
              v-for="img in project.images"
              class="md:w-full md:h-[400px] mt-4 rounded-md"
              fit="cover"
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
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
        color: "pink-600",
      },
      {
        name: "TailwindCSS",
        icon: "logos:tailwindcss-icon",
        color: "pink-600",
      },
      {
        name: "Chart.js",
        icon: "file-icons:chartjs",
        color: "pink-600",
      },
      {
        name: "PrimeVue",
        icon: "prime:prime",
        color: "pink-600",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        color: "pink-600",
      },

      {
        name: "Prisma",
        icon: "logos:prisma",
        color: "blue-600",
      },
      {
        name: "MSSQL",
        icon: "simple-icons:microsoftsqlserver",
        color: "blue-600",
      },
      {
        name: "Express",
        icon: "simple-icons:express",
        color: "blue-600",
      },
      {
        name: "Docker",
        icon: "logos:docker-icon",
        color: "white",
      },
      {
        name: "NGINX",
        icon: "logos:nginx",
        color: "white",
      },
    ],
  },
  {
    title: "EWO Ads Manager | 2022-2023",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    images: [
      "/img/ewo-login.png",
      "/img/ewo-budgetmanager.png",
      "/img/ewo-link-traffic.png",
    ],

    usedTechnologies: [
      {
        name: "Nuxt 3",
        icon: "logos:nuxt-icon",
        color: "pink-600",
      },
      {
        name: "TailwindCSS",
        icon: "logos:tailwindcss-icon",
        color: "pink-600",
      },
      {
        name: "PrimeVue",
        icon: "prime:prime",
        color: "pink-600",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        color: "pink-600",
      },
      {
        name: "Prisma",
        icon: "logos:prisma",
        color: "blue-600",
      },
      {
        name: "Supabase",
        icon: "logos:supabase-icon",
        color: "blue-600",
      },
      {
        name: "Docker",
        icon: "logos:docker-icon",
        color: "white",
      },
      {
        name: "Google Ads",
        icon: "logos:google-ads",
        color: "white",
      },
      {
        name: "Bing Ads",
        icon: "logos:bing",
        color: "white",
      },
      {
        name: "Google Cloud",
        icon: "logos:google-cloud",
        color: "white",
      },
    ],
  },
];
</script>

<style>
.n-carousel__arrow {
  background-color: rgba(107, 107, 107, 0.493) !important;
}
</style>
