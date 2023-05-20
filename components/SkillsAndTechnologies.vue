<template>
  <div class="min-h-[50vh] mx-4 md:mx-0" id="skills">
    <div class="ml-auto lg:text-5xl text-3xl text-white font-semibold">
      Skills & Technologies
    </div>

    <div class="grid gap-6 lg:my-12 my-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div
        class="relative block rounded-b-lg border-t-4 p-4 sm:p-6 lg:p-8 bg-gray-900 hover:scale-105 transition-transform duration-500 ease-in-out"
        :class="'border-' + skill.color"
        v-for="skill in skills"
      >
        <div class="gap-4">
          <h3
            class="lg:text-3xl text-lg font-bold text-white sm:text-4xl flex items-center"
          >
            <Icon
              :name="skill.icon"
              color="white"
              size="3rem"
              class="hover:scale-110 transition duration-150 ease-in-out mr-4"
            />{{ skill.title }}
          </h3>
        </div>

        <p class="my-2 font-medium text-gray-500">
          {{ skill.text }}
        </p>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="bg-blue-700 h-2.5 rounded-full loader"
            :style="'width:' + skill.skillLevel + '%'"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  {
    title: "Vue",
    icon: "logos:vue",
    text: "Go-to Frontend Framework, used in most of my projects",
    color: "pink-600",
    skillLevel: 80,
  },

  {
    title: "Nuxt",
    icon: "logos:nuxt-icon",
    text: "Currently learning and adapting to my projects",
    color: "pink-600",
    skillLevel: 70,
  },
  {
    title: "TailwindCSS",
    icon: "logos:tailwindcss-icon",
    text: "Basic knowledge",
    color: "pink-600",
    skillLevel: 50,
  },
  {
    title: "TypeScript ",
    icon: "logos:typescript-icon",
    text: "Advanced knowledge ",
    color: "blue-600",
    skillLevel: 70,
  },
  {
    title: "Docker ",
    icon: "logos:docker-icon",
    text: "Basic knowledge",
    color: "blue-600",
    skillLevel: 50,
  },
  {
    title: "Node.js ",
    icon: "logos:nodejs-icon",
    text: "Basic knowledge",
    color: "blue-600",
    skillLevel: 50,
  },
  {
    title: "SQL",
    icon: "logos:postgresql",
    text: "Basic knowledge",
    color: "blue-600",
    skillLevel: 50,
  },
  {
    title: "Google Cloud ",
    icon: "logos:google-cloud",
    text: "Basic knowledge",
    color: "blue-600",
    skillLevel: 50,
  },
  {
    title: "Git",
    icon: "mdi:git",
    text: "Basic knowledge in Git and Github",
    color: "white",
    skillLevel: 40,
  },
];
</script>

<style scoped></style>
