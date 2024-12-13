<template>
  <div class="space-y-14 lg:space-y-0">
    <HeroSection />
    <div class="flex flex-col gap-y-14 xl:gap-y-20">
      <Section :title="$t('cv.header')">
        <CurriculiumVitae />
      </Section>
      <Section :title="$t('companies.header')">
        <Componies />
      </Section>
      <Section :title="$t('skillAndTechnologies.header')">
        <SkillsAndTechnologies />
      </Section>

      <Section :title="$t('projects.header')">
        <TheProjects />
      </Section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: `klemenstraeger.dev `,
});

useServerSeoMeta({
  title: "klemenstraeger.dev",
  ogTitle: "klemenstraeger.dev",
  description: t("seoServerMeta.description"),
  ogDescription: t("seoServerMeta.ogDescription"),
  ogImage: "img/headshot.webp",
});
</script>

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
