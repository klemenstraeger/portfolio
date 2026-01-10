<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: `klemenstraeger.dev `,
})

useSeoMeta({
  title: "klemenstraeger.dev",
  ogTitle: "klemenstraeger.dev",
  description: t("seoServerMeta.description"),
  ogDescription: t("seoServerMeta.ogDescription"),
  ogImage: "img/headshot.webp",
})
</script>

<template>
  <div class="space-y-14 lg:space-y-20 py-8">
    <HeroSection />
    
    <UContainer>
      <div class="space-y-20">
        <div>
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-primary">
            {{ $t('cv.header') }}
          </h2>
          <CurriculiumVitae />
        </div>
        
        <div>
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-primary">
            {{ $t('companies.header') }}
          </h2>
          <Componies />
        </div>
        
        <div>
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-primary">
            {{ $t('skillAndTechnologies.header') }}
          </h2>
          <SkillsAndTechnologies />
        </div>

        <div>
          <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-primary">
            {{ $t('projects.header') }}
          </h2>
          <TheProjects />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style>
.will-change-transform {
  will-change: transform;
}

.cursor::after {
  display: block;
  content: "";
  position: absolute;
  width: 4px;
  height: 100%;
  background-color: #fff;
  animation: cursor 0.6s linear infinite alternate;
  will-change: opacity;
}

@keyframes cursor {
  0%,
  40% {
    opacity: 1;
  }

  60%,
  100% {
    opacity: 0;
  }
}
</style>
