<template>
  <div
    class="lg:h-[80vh] gap-y-10 mt-12 lg:mt-32 md:grid-cols-2 md:grid mx-4 flex flex-col justify-around lg:min-h-[50vh]"
  >
    <div class="h-fit flex-grow">
      <div class="text-white font-bold lg:text-4xl xl:text-5xl flex lg:py-2 text-2xl">
        <div class="lg:py-4">{{ $t("headline.IAm") }}&nbsp;</div>
        <div class="w-max">
          <div
            class="animate-typing whitespace-nowrap lg:border-r-4 border-r-2 border-r-white lg:pr-6 text-transparent bg-clip-text bg-gradient-to-l from-emerald-500 to-lime-600 lg:py-4"
          >
            Klemens Träger
          </div>
        </div>
      </div>
      <div
        class="text-white lg:text-2xl text-sm font-normal mt-6 text-justify lg:text-left"
      >
        {{ $t("intro.intro1", [new Date().getFullYear() - 2000]) }}

        <span
          class="bg-gradient-to-r from-emerald-500 to-lime-600 bg-bottom bg-no-repeat bg-[length:100%_4px] hover:bg-[length:100%_100%] transition-[background-size] w-max"
          >{{ $t("intro.intro2") }}</span
        >
        {{ $t("intro.intro3") }}
        <span
          class="bg-gradient-to-r from-emerald-500 to-lime-600 bg-bottom bg-no-repeat bg-[length:100%_4px] hover:bg-[length:100%_100%] transition-[background-size] w-max"
          >{{ $t("intro.intro4") }}</span
        >
        {{ $t("intro.intro5") }}
      </div>
      <div class="mt-8 lg:mt-12 lg:gap-x-2 flex flex-col items-center lg:flex-row">
        <Tag
          class="lg:hidden animate-jump animate-ease-in shadow-[0_0_0px_#10b981,inset_0_0_0px_#10b981,0_0_1px_#10b981,0_0_5px_#10b981,0_0_25px_#10b981]"
          size="large"
          :key="active"
          :class="keySkills[active].shadowColor"
          :border-color="keySkills[active].color"
          >{{ keySkills[active].title }}</Tag
        >
        <Tag
          class="hidden lg:block shadow-[0_0_0px_#10b981,inset_0_0_0px_#10b981,0_0_1px_#10b981,0_0_5px_#10b981,0_0_10px_#10b981]"
          :class="skill.shadowColor"
          v-for="skill in keySkills"
          :borderColor="skill.color"
          >{{ skill.title }}</Tag
        >
      </div>
    </div>
    <div class="md:ml-auto">
      <nuxt-img
        width="600"
        src="/img/headshot.webp"
        class="rounded-full bg-white mx-auto xl:w-full w-80 md:mx-0 z-50"
        alt="Discover Nuxt 3"
      />
    </div>
  </div>
  <div class="flex flex-col gap-y-32">
    <CurriculiumVitae />
    <SkillsAndTechnologies />
    <Projects />
  </div>
  <!-- <TheNavigation /> -->
</template>

<script setup lang="ts">
const { t } = useI18n();
const active = ref(0);
onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % 3;
  }, 3000);
});

const keySkills = [
  {
    title: t("intro.keySkills.skill1"),
    color: "border-pink-600",
    shadowColor: "!shadow-pink-600",
  },
  {
    title: t("intro.keySkills.skill2"),
    color: "border-blue-600",
    shadowColor: "!shadow-blue-600",
  },
  {
    title: t("intro.keySkills.skill3"),
    color: "border-emerald-600",
    shadowColor: "shadow-emerald-600",
  },
];

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
