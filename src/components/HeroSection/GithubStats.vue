<script setup>
import { GitCommit, Github, GitPullRequest } from "lucide-vue-next"
import colors from "tailwindcss/colors"

const { data } = await useLazyAsyncData(
  "github-stats",
  () => $fetch("/api/github/stats"),
  { server: false },
)
const { t } = useI18n()

const stats = computed(() => {
  return [
    {
      title: "Commits",
      value: data.value?.totalCommits.lastYear,
      description: t("heroSection.ghCommits", { year: new Date().getFullYear() }),
      icon: GitCommit,
      iconColor: "text-emerald-500",
      valueColor: "text-lime-600",
      isHovered: false,
    },
    {
      title: "Pull Requests",
      value: data.value?.totalPRs,
      description: t("heroSection.ghPullRequests", { year: new Date().getFullYear() }),

      icon: GitPullRequest,
      iconColor: "text-emerald-500",
      valueColor: "text-lime-600",
      isHovered: false,
    },
    {
      title: "Repositories",
      value: data.value?.totalRepos,
      description: t("heroSection.ghRepos"),
      icon: Github,
      iconColor: "text-emerald-500",
      valueColor: "text-lime-600",
      isHovered: false,
    },
  ]
})
</script>

<template>
  <div class="grid gap-4 w-full md:grid-cols-2 lg:grid-cols-3 mt-6">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="bg-slate-900 border border-[#30363d] rounded-lg p-4 relative hover:scale-105 transition-all duration-300 ease-in-out"
      @mouseenter="stat.isHovered = true"
      @mouseleave="stat.isHovered = false"
    >
      <BorderBeam
        v-if="stat.isHovered"
        :size="100"
        :duration="3"
        :delay="0"
        :border-width="2"
        :color-from="colors.emerald[500]"
        :color-to="colors.lime[600]"
      />
      <div class="flex items-center justify-between pb-2">
        <h3 class="text-sm font-medium text-gray-300">
          {{ stat.title }}
        </h3>
        <component :is="stat.icon" class="h-4 w-4" :class="stat.iconColor" />
      </div>
      <div class="text-2xl font-bold" :class="[stat.valueColor]">
        <NumberTicker
          :delay="Math.random() * 500"
          :duration="Math.random() * 5000"
          :decimal-places="0"
          :value="stat.value"
        />
      </div>
      <p class="text-xs text-gray-400">
        {{ stat.description }}
      </p>
    </div>
  </div>
</template>
