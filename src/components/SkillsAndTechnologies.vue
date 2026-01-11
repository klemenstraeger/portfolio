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
]
</script>

<template>
  <div id="skills" class="min-h-[50vh] mx-4 md:mx-0">
    <div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div
        v-for="(skill, index) in skills"
        :key="skill.title"
        ref="skillElements"
        class="group relative block border-slate-700/50 border rounded-2xl p-6 sm:p-7 lg:p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:scale-[1.05] hover:shadow-2xl transition-all duration-500 ease-out opacity-0 slide-in-element overflow-hidden"
        :class="[`hover:shadow-${skill.color}`]"
        :style="{
          '--slide-delay': `${index * 100}ms`,
          borderTopWidth: '3px',
          borderTopColor: `var(--tw-gradient-from)`,
        }"
      >
        <!-- Animated gradient border top -->
        <div 
          class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          :class="[`from-${skill.color}`, `to-${skill.color}/50`]"
        />
        
        <!-- Subtle background glow on hover -->
        <div 
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          :class="[`bg-${skill.color}/10`]"
        />
        
        <div class="relative z-10 gap-4">
          <div class="flex items-center mb-4">
            <Icon
              :name="skill.icon"
              color="white"
              size="3rem"
              class="group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out mr-4"
            />
            <h3 class="text-2xl lg:text-3xl font-bold text-white">
              {{ skill.title }}
            </h3>
          </div>
        </div>

        <p class="relative z-10 mt-3 font-light text-white/80 text-sm leading-relaxed">
          {{ skill.text }}
        </p>
        
        <!-- Skill level indicator (optional visual) -->
        <div class="relative z-10 mt-4 w-full h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
          <div 
            class="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r"
            :class="[`from-${skill.color}`, `to-${skill.color}/70`, 'group-hover:shadow-lg']"
            :style="{ 
              width: `${skill.skillLevel}%`,
              transitionDelay: `${index * 50}ms`
            }"
          />
        </div>
      </div>
    </div>
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
