<template>
  <div id="skills" class="min-h-[50vh] mx-4 md:mx-0">
    <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div
        v-for="(skill, index) in skills"
        :key="skill.title"
        ref="skillElements"
        class="relative block border-r-slate-800 border-b-slate-800 border border-l-slate-800 rounded-b-lg border-t-4 p-4 sm:p-6 lg:p-8 bg-slate-900 hover:scale-105 transition-transform duration-500 ease-in-out opacity-0"
        :class="['border-' + skill.color, 'slide-in-element']"
        :style="{
          '--slide-delay': `${index * 100}ms`,
        }"
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
            />
            {{ skill.title }}
          </h3>
        </div>

        <p class="my-2 font-medium text-white">
          {{ skill.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const { t } = useI18n();

const skillElements = ref<HTMLElement[]>([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    }
  );

  skillElements.value.forEach((element) => {
    if (element) {
      observer.observe(element);
    }
  });
});

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

<style scoped>
.slide-in-element {
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: var(--slide-delay);
}

.slide-in-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
