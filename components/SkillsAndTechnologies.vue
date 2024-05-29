<template>
  <div class="min-h-[50vh] mx-4 md:mx-0" id="skills">
    <h1 class="ml-auto lg:text-5xl text-3xl text-white font-semibold mb-4 lg:mb-6">
      {{ $t("skillAndTechnologies.header") }}
    </h1>

    <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
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
        <!-- <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="bg-blue-700 h-2.5 rounded-full loader"
            :style="'width:' + skill.skillLevel + '%'"
          ></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const skills = [
  {
    title: t("skillAndTechnologies.skills.entry1.title"),
    icon: "logos:vue",
    text: t("skillAndTechnologies.skills.entry1.text"),
    color: "pink-600",
    skillLevel: 80,
  },

  {
    title: t("skillAndTechnologies.skills.entry2.title"),
    icon: "logos:nuxt-icon",
    text: t("skillAndTechnologies.skills.entry2.text"),
    color: "pink-600",
    skillLevel: 70,
  },
  {
    title: t("skillAndTechnologies.skills.entry3.title"),
    icon: "logos:tailwindcss-icon",
    text: t("skillAndTechnologies.skills.entry3.text"),
    color: "pink-600",
    skillLevel: 50,
  },
  {
    title: t("skillAndTechnologies.skills.entry4.title"),
    icon: "logos:typescript-icon",
    text: t("skillAndTechnologies.skills.entry4.text"),
    color: "blue-600",
    skillLevel: 70,
  },
  {
    title: t("skillAndTechnologies.skills.entry10.title"),
    icon: "logos:python",
    text: t("skillAndTechnologies.skills.entry10.text"),
    color: "blue-600",
    skillLevel: 70,
  },
  {
    title: t("skillAndTechnologies.skills.entry5.title"),
    icon: "logos:docker-icon",
    text: t("skillAndTechnologies.skills.entry6.text"),
    color: "blue-600",
    skillLevel: 50,
  },
  {
    title: t("skillAndTechnologies.skills.entry7.title"),
    icon: "logos:nodejs-icon",
    text: t("skillAndTechnologies.skills.entry7.text"),
    color: "blue-600",
    skillLevel: 50,
  },
  {
    title: t("skillAndTechnologies.skills.entry8.title"),
    icon: "logos:postgresql",
    text: t("skillAndTechnologies.skills.entry8.text"),
    color: "blue-600",
    skillLevel: 50,
  },
  {
    title: t("skillAndTechnologies.skills.entry9.title"),
    icon: "logos:google-cloud",
    text: t("skillAndTechnologies.skills.entry9.text"),
    color: "emerald-600",
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
