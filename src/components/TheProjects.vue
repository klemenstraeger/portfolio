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
      { name: "Python" },
      { name: "TypeScript" },
      { name: "Nuxt 3" },
      { name: "TailwindCSS" },
      { name: "OpenAI" },
      { name: "Google Cloud" },
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
      { name: "Vue.js" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "Prisma" },
      { name: "Docker" },
      { name: "NGINX" },
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
      { name: "Nuxt 3" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "Prisma" },
      { name: "Supabase" },
      { name: "Docker" },
      { name: "Google Cloud" },
    ],
  },
]
</script>

<template>
  <div class="space-y-12">
    <UCard
      v-for="(project, index) in projects"
      :key="index"
      :ui="{ body: { padding: 'p-6 sm:p-8' } }"
    >
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-2xl lg:text-3xl font-bold text-primary">
          {{ project.title }}
        </h3>
        <UButton
          v-if="project.repo"
          :to="project.repo"
          target="_blank"
          icon="i-heroicons-code-bracket"
          variant="ghost"
          color="gray"
          size="lg"
        />
      </div>
      
      <div class="grid xl:grid-cols-2 gap-8">
        <div class="space-y-6">
          <p class="text-gray-300 text-base lg:text-lg leading-relaxed">
            {{ project.description }}
          </p>
          
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="tech in project.usedTechnologies"
              :key="tech.name"
              color="primary"
              variant="soft"
              size="md"
              class="px-3 py-1"
            >
              {{ tech.name }}
            </UBadge>
          </div>
        </div>
        
        <div class="space-y-4">
          <NuxtImg
            v-for="img in project.images.slice(0, 1)"
            :key="img"
            :alt="project.title"
            format="webp"
            loading="lazy"
            quality="100"
            class="rounded-lg w-full h-auto object-cover shadow-lg"
            :src="img"
          />
        </div>
      </div>
    </UCard>
  </div>
</template>
