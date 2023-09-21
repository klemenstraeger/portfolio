<template>
  <div
    class="h-[70vh] gap-y-10 mt-12 lg:mt-32 lg:grid-cols-2 lg:grid mx-4 flex flex-col justify-around"
  >
    <div class="h-fit">
      <div class="text-white font-bold lg:text-6xl flex lg:py-2 text-3xl">
        <div class="lg:py-4">Hi, I'm&nbsp;</div>
        <div class="w-max">
          <div
            class="animate-typing whitespace-nowrap lg:border-r-4 border-r-2 border-r-white lg:pr-6 text-transparent bg-clip-text bg-gradient-to-l from-emerald-500 to-lime-600 lg:py-4"
          >
            Klemens Träger
          </div>
        </div>
      </div>
      <div class="text-white lg:text-2xl text-base mt-6">
        I am a {{ new Date().getFullYear() - 2000 }} year old
        <span
          class="bg-gradient-to-r from-emerald-500 to-lime-600 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] w-max"
        >
          Business Informatics student
        </span>
        studying at the Hochschule für Technik und Wirtschaft (HTW) in Dresden.
      </div>
      <div class="mt-4 flex flex-col md:flex-row">
        <Tag v-for="skill in keySkills" :color="skill.color">{{ skill.title }}</Tag>
      </div>
    </div>
    <div class="lg:ml-auto">
      <nuxt-img
        src="/img/headshot.webp"
        class="rounded-full bg-white w-[70%] mx-auto lg:w-full md:mx-0"
        alt="Discover Nuxt 3"
      />
    </div>
  </div>
  <div class="flex flex-col gap-y-32">
    <CurriculiumVitae />
    <SkillsAndTechnologies />
    <Projects />
  </div>
  <TheNavigation />
</template>

<script setup lang="ts">
const keySkills = [
  {
    title: "Frontend Development",
    color: "pink-600",
  },
  {
    title: "Backend Development",
    color: "blue-600",
  },
  {
    title: "Fullstack Development",
    color: "emerald-600",
  },
];

useHead({
  title: `klemenstraeger.dev `,
});

useServerSeoMeta({
  title: "klemenstraeger.dev",
  ogTitle: "klemenstraeger.dev",
  description: "Portfolio of Klemens Traeger",
  ogDescription: "Portfolio of Klemens Traeger",
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
