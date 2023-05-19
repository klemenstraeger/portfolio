<template>
  <div class="container mx-auto">
    <div class="flex justify-between lg:py-12 py-4 mx-4 lg:mx-0 items-center">
      <div
        class="font-mono lg:font-semibold font-bold lg:text-4xl text-transparent text-base bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 py-2"
      >
        klemenstraeger.dev
      </div>
      <div class="flex gap-6">
        <NuxtLink to="https://github.com/klemenstraeger" target="_blank">
          <Icon
            name="mdi:github"
            color="white"
            :size="!isSm ? '2rem' : '3rem'"
            class="hover:scale-110 transition duration-150 ease-in-out"
          />
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/klemens-tr%C3%A4ger-003b68198/"
          target="_blank"
        >
          <Icon
            name="mdi:linkedin"
            color="white"
            :size="!isSm ? '2rem' : '3rem'"
            class="hover:scale-110 transition duration-150 ease-in-out"
          />
        </NuxtLink>
        <NuxtLink to="https://github.com/klemenstraeger" target="_blank">
          <Icon
            name="ci:mail"
            color="white"
            :size="!isSm ? '2rem' : '3rem'"
            class="hover:scale-110 transition duration-150 ease-in-out"
          />
        </NuxtLink>
      </div>
    </div>
    <div
      class="lg:h-[70vh] h-[100vh] lg:mt-32 lg:grid-cols-2 lg:grid mx-4 flex flex-col justify-around"
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
          from Dresden. I'm studying at the HTW Dresden and currently working as a working
          student at Energiewerk Ost GmbH.
        </div>
        <div class="mt-4 flex flex-col md:flex-row">
          <div
            v-for="skill in keySkills"
            class="mr-2 center relative inline-block select-none whitespace-nowrap bg-gray-900 border-2 rounded-lg py-2 px-3.5 align-baseline mt-3 md:mt-0 text-lg font-bold leading-none text-white hover:translate-y-1 w-max"
            :class="skill.color"
          >
            <div class="mt-px text-sm">{{ skill.title }}</div>
          </div>
        </div>
      </div>
      <div class="lg:ml-auto">
        <img
          src="~/assets/img/headshot.webp"
          class="rounded-full bg-white w-[70%] mx-auto lg:w-full md:mx-0"
          alt="Discover Nuxt 3"
        />
      </div>
    </div>
    <div class="min-h-[50vh] mt-12 md:mt-0" id="cv">
      <section>
        <h3 class="lg:text-5xl text-3xl mx-4 md:mx-0 text-white font-semibold">
          Curriculm Vitae
        </h3>
        <div class="bg-black text-white lg:py-8">
          <div class="container mx-auto">
            <div class="sticky">
              <div class="container mx-auto w-full h-full">
                <div class="relative wrap overflow-hidden p-10 h-full">
                  <div
                    class="border-2 border-red absolute h-full border-emerald-500 rounded-[1%] border-solid left-2/4"
                  ></div>
                  <div
                    class="border-2 border-red absolute h-full border-emerald-500 rounded-[1%] border-solid left-2/4"
                  ></div>
                  <div
                    class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                  >
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-emerald-500">10/2019 - now</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        Studies in business informatics
                      </h4>
                      <p
                        class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                      >
                        Studies in business informatics (diploma) at the University of
                        Applied Science Dresden (HTW) <br />
                        expected graduation in 2023
                      </p>
                    </div>
                  </div>
                  <div
                    class="mb-8 flex justify-between items-center w-full right-timeline"
                  >
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-left">
                      <p class="mb-3 text-base text-emerald-500">09/2021 - 02/2022</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        Internship front/backend developer
                      </h4>
                      <p
                        class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                      >
                        • Shopware 6 Pluginentwicklung mit Vue.js <br />• Shopware Shop
                        Anpassung und Template Umsetzung <br />• Entwicklung interner
                        Tools mit Vue.js und PHP WEBneo GmbH, Dresden
                      </p>
                    </div>
                  </div>
                  <div
                    class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                  >
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-emerald-500">10 May, 2021</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">
                        Working student markting
                      </h4>
                      <p
                        class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-right"
                      >
                        Energiewerk Ost GmbH, Höckendorf
                      </p>
                    </div>
                  </div>

                  <div
                    class="mb-8 flex justify-between items-center w-full right-timeline"
                  >
                    <div class="order-1 w-5/12"></div>
                    <div class="order-1 w-5/12 px-1 py-4 text-left">
                      <p class="mb-3 text-base text-emerald-500">08/2010 - 06/2018</p>
                      <h4 class="mb-3 font-bold text-lg md:text-2xl">Abitur</h4>
                      <p
                        class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                      >
                        "Glückauf"-Gymnasium Dippoldiswalde
                        <br />
                        final grade 2.7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="min-h-[50vh] mx-4 md:mx-0" id="skills">
      <div class="ml-auto lg:text-5xl text-3xl text-white font-semibold">
        Skills & Technologies
      </div>

      <div class="grid gap-6 lg:my-12 my-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div
          class="relative block rounded-b-lg border-t-4 p-4 sm:p-6 lg:p-8 bg-gray-900"
          :class="skill.color"
          v-for="skill in skills"
        >
          <div class="gap-4">
            <h3
              class="lg:text-3xl text-lg font-bold text-white sm:text-4xl flex items-center"
            >
              <Icon
                :name="skill.icon"
                color="white"
                size="3rem"
                class="hover:scale-110 transition duration-150 ease-in-out mr-4"
              />{{ skill.title }}
            </h3>
          </div>

          <p class="my-2 font-medium text-gray-500">
            {{ skill.text }}
          </p>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="transition-all duration-1000 ease-in-out bg-blue-600 h-2.5 rounded-full"
              :style="'width:' + skill.skillLevel + '%'"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-[50vh] mx-4 md:mx-0" id="projects">
      <div class="ml-auto lg:text-5xl text-3xl text-white font-semibold">Projects</div>
    </div>
    <div class="text-white flex py-24 justify-center">Made with ♥️ in Dresden, 2023</div>
  </div>
</template>

<script setup lang="ts">
const isSm = useMediaQuery("(min-width: 640px)");

const keySkills = [
  {
    title: "Frontend Development",
    color: "border-pink-600",
  },
  {
    title: "Backend Development",
    color: "border-blue-600",
  },
  {
    title: "Cloud Engineering",
    color: "border-emerald-600",
  },
];

const skills = [
  {
    title: "Vue",
    icon: "logos:vue",
    text: "Go-to Frontend Framework, used in most of my projects",
    color: "border-pink-600",
    skillLevel: 80,
  },

  {
    title: "Nuxt",
    icon: "logos:nuxt-icon",
    text: "Currently learning and adapting to my projects",
    color: "border-pink-600",
    skillLevel: 70,
  },
  {
    title: "TailwindCSS",
    icon: "logos:tailwindcss-icon",
    text: "Basic knowledge",
    color: "border-pink-600",
    skillLevel: 60,
  },
  {
    title: "TypeScript ",
    icon: "logos:typescript-icon",
    text: "Advanced knowledge ",
    color: "border-blue-600",
    skillLevel: 60,
  },
  {
    title: "Docker ",
    icon: "logos:docker-icon",
    text: "Basic knowledge",
    color: "border-blue-600",
    skillLevel: 60,
  },
  {
    title: "NodeJs ",
    icon: "logos:nodejs-icon",
    text: "Basic knowledge",
    color: "border-blue-600",
    skillLevel: 50,
  },
  {
    title: "SQL",
    icon: "logos:postgresql",
    text: "Basic knowledge",
    color: "border-blue-600",
    skillLevel: 50,
  },
  {
    title: "Google Cloud ",
    icon: "logos:google-cloud",
    text: "basic knowledge",
    color: "border-blue-600",
    skillLevel: 50,
  },
  {
    title: "Git",
    icon: "mdi:git",
    text: "basic knowledge in git and github",
    color: "white",
    skillLevel: 40,
  },
];
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
