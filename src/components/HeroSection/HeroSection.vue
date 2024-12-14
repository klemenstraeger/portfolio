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
      <div class="text-white lg:text-2xl text-sm font-normal mt-6 lg:text-left">
        {{ $t("intro.intro1", [age]) }}

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
        <FlipWords
          :words="flipWords"
          letter-class="text-transparent bg-clip-text bg-gradient-to-l from-emerald-500 to-lime-600 font-bold italic"
          :duration="3000"
        />
      </div>

      <div
        class="mt-8 lg:mt-12 lg:gap-x-2 flex-col items-center justify-between lg:flex-row hidden lg:flex"
      >
        <GithubStats />
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
</template>

<script lang="ts" setup>
const active = ref(0);
const birthDate = new Date(1999, 6, 22); // 22 July 1999 (months are 0-indexed)

const age = computed(
  () =>
    new Date().getFullYear() -
    birthDate.getFullYear() -
    (new Date() <
    new Date(new Date().getFullYear(), birthDate.getMonth(), birthDate.getDate())
      ? 1
      : 0)
);

onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % 3;
  }, 3000);
});

const flipWords = ref([
  "Vue.js.",
  "Drum & Bass.",
  "Nuxt.js.",
  "Python.",
  "Typescript.",
  "Google Cloud.",
  "TailwindCSS.",
  "Pizza.",
  "FastAPI.",
  "Nitro.js.",
  "Supabase.",
  "Vercel.",
  "Apple.",
]);
// const keySkills = [
//   {
//     title: t("intro.keySkills.skill1"),
//     color: "border-pink-600",
//     shadowColor: "!shadow-pink-600",
//   },
//   {
//     title: t("intro.keySkills.skill2"),
//     color: "border-blue-600",
//     shadowColor: "!shadow-blue-600",
//   },
//   {
//     title: t("intro.keySkills.skill3"),
//     color: "border-emerald-600",
//     shadowColor: "shadow-emerald-600",
//   },
// ];
</script>

<style></style>
