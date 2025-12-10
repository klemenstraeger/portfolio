<script setup lang="ts">
const projects = useProjects()
</script>

<template>
  <section id="projects" class="min-h-[50vh] mx-4 md:mx-0">
    <div class="flex flex-col gap-12">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :interval="5000 + index * 1000"
      />
    </div>
  </section>
</template>
