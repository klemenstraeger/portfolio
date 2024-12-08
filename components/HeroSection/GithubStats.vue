<template>
  <div class="grid gap-4 w-full md:grid-cols-2 lg:grid-cols-3 mt-6">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="bg-slate-900 border border-[#30363d] rounded-lg p-4"
    >
      <div class="flex items-center justify-between pb-2">
        <h3 class="text-sm font-medium text-gray-300">{{ stat.title }}</h3>
        <component :is="stat.icon" class="h-4 w-4" :class="stat.iconColor" />
      </div>
      <div :class="['text-2xl font-bold', stat.valueColor]">
        <NumberTicker
          :delay="Math.random() * 500"
          :duration="Math.random() * 5000"
          :decimal-places="0"
          :value="stat.value"
        />
      </div>
      <p class="text-xs text-gray-400">{{ stat.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { GitBranch, GitCommit, GitPullRequest, Github } from "lucide-vue-next";

const { data, pending, error, refresh } = useLazyFetch("/api/github/stats");
const { t } = useI18n();

const stats = ref([
  {
    title: "Commits",
    value: data.value?.totalCommits.lastYear,
    description: t("heroSection.ghCommits", { year: new Date().getFullYear() }),
    icon: GitCommit,
    iconColor: "text-emerald-500",
    valueColor: "text-lime-600",
  },
  {
    title: "Pull Requests",
    value: data.value?.totalPRs,
    description: t("heroSection.ghPullRequests", { year: new Date().getFullYear() }),

    icon: GitPullRequest,
    iconColor: "text-emerald-500",
    valueColor: "text-lime-600",
  },
  {
    title: "Repositories",
    value: data.value?.totalRepos,
    description: t("heroSection.ghRepos"),
    icon: Github,
    iconColor: "text-emerald-500",
    valueColor: "text-lime-600",
  },
]);
</script>
