<script setup lang="ts">
import { onMounted, ref } from "vue"

const { t } = useI18n()

const skillElements = ref<HTMLElement[]>([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-visible")
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    },
  )

  skillElements.value.forEach((element) => {
    if (element) {
      observer.observe(element)
    }
  })
})

const skills = [
  {
    title: t("skillAndTechnologies.skills.entry1.title"),
    icon: "i-heroicons-code-bracket",
    text: t("skillAndTechnologies.skills.entry1.text"),
    color: "primary",
    skillLevel: 80,
  },
  {
    title: t("skillAndTechnologies.skills.entry2.title"),
    icon: "i-heroicons-sparkles",
    text: t("skillAndTechnologies.skills.entry2.text"),
    color: "primary",
    skillLevel: 70,
  },
  {
    title: t("skillAndTechnologies.skills.entry3.title"),
    icon: "i-heroicons-swatch",
    text: t("skillAndTechnologies.skills.entry3.text"),
    color: "cyan",
    skillLevel: 50,
  },
  {
    title: t("skillAndTechnologies.skills.entry4.title"),
    icon: "i-heroicons-code-bracket-square",
    text: t("skillAndTechnologies.skills.entry4.text"),
    color: "blue",
    skillLevel: 70,
  },
  {
    title: t("skillAndTechnologies.skills.entry10.title"),
    icon: "i-heroicons-command-line",
    text: t("skillAndTechnologies.skills.entry10.text"),
    color: "blue",
    skillLevel: 70,
  },
  {
    title: t("skillAndTechnologies.skills.entry5.title"),
    icon: "i-heroicons-cube",
    text: t("skillAndTechnologies.skills.entry6.text"),
    color: "blue",
    skillLevel: 50,
  },
  {
    title: t("skillAndTechnologies.skills.entry7.title"),
    icon: "i-heroicons-server",
    text: t("skillAndTechnologies.skills.entry7.text"),
    color: "green",
    skillLevel: 50,
  },
  {
    title: t("skillAndTechnologies.skills.entry8.title"),
    icon: "i-heroicons-circle-stack",
    text: t("skillAndTechnologies.skills.entry8.text"),
    color: "blue",
    skillLevel: 50,
  },
  {
    title: t("skillAndTechnologies.skills.entry9.title"),
    icon: "i-heroicons-cloud",
    text: t("skillAndTechnologies.skills.entry9.text"),
    color: "blue",
    skillLevel: 50,
  },
  {
    title: "Git",
    icon: "i-heroicons-document-duplicate",
    text: "Basic knowledge in Git and Github",
    color: "orange",
    skillLevel: 40,
  },
]
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    <UCard
      v-for="(skill, index) in skills"
      :key="skill.title"
      ref="skillElements"
      class="hover:scale-105 transition-all duration-500 ease-in-out opacity-0 slide-in-element"
      :style="{
        '--slide-delay': `${index * 100}ms`,
      }"
      :ui="{
        body: { padding: 'p-6' },
      }"
    >
      <div class="flex items-center gap-4 mb-4">
        <UIcon
          :name="skill.icon"
          class="w-12 h-12 text-primary"
        />
        <h3 class="text-xl lg:text-2xl font-bold">
          {{ skill.title }}
        </h3>
      </div>
      
      <p class="text-gray-300">
        {{ skill.text }}
      </p>
    </UCard>
  </div>
</template>

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
