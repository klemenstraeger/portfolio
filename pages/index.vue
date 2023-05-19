<template>
  <div class="container mx-auto">
    <div class="flex justify-between py-12 items-center">
      <div
        class="font-mono font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 py-2"
      >
        klemenstraeger.dev
      </div>
      <div class="flex gap-6">
        <NuxtLink to="https://github.com/klemenstraeger" target="_blank">
          <Icon
            name="mdi:github"
            color="white"
            size="3rem"
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
            size="3rem"
            class="hover:scale-110 transition duration-150 ease-in-out"
          />
        </NuxtLink>
        <NuxtLink to="https://github.com/klemenstraeger" target="_blank">
          <Icon
            name="ci:mail"
            color="white"
            size="3rem"
            class="hover:scale-110 transition duration-150 ease-in-out"
          />
        </NuxtLink>
      </div>
    </div>
    <div class="h-[70vh] mt-32 grid grid-cols-2">
      <div>
        <div class="text-white font-bold text-6xl flex py-2">
          <div class="py-4">Hi, I'm &nbsp;</div>
          <div class="w-max">
            <div
              class="animate-typing whitespace-nowrap border-r-4 border-r-white pr-6 text-transparent bg-clip-text bg-gradient-to-l from-emerald-500 to-lime-600 py-4"
            >
              Klemens Träger
            </div>
          </div>
        </div>
        <div class="text-white text-2xl mt-6">
          I am a
          <span
            class="bg-gradient-to-r bg-gradient-to-r from-emerald-500 to-lime-600 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] w-max"
          >
            Business informatics student
          </span>
          from Dresdent with a passion for both front-end and back-end development.
        </div>
      </div>
      <div class="ml-auto">
        <img
          src="~/assets/img/headshot.webp"
          class="rounded-full bg-white"
          alt="Discover Nuxt 3"
        />
      </div>
    </div>
    <div class="min-h-[50vh]" id="cv">
      <section>
        <h3 class="text-5xl text-white font-semibold">Curriculm Vitae</h3>
        <div class="bg-black text-white py-8">
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
    <div class="min-h-[50vh]" id="skills">
      <div class="ml-auto text-5xl text-white font-semibold">Skills</div>

      <div class="grid-cols-3 grid gap-6 my-12">
        <div
          class="relative block rounded-b-lg border-t-4 p-4 sm:p-6 lg:p-8 bg-gray-900"
          :class="skill.color"
          v-for="skill in skills"
        >
          <div class="gap-4">
            <h3 class="text-3xl font-bold text-white sm:text-4xl flex items-center">
              <Icon
                :name="skill.icon"
                color="white"
                size="3rem"
                class="hover:scale-110 transition duration-150 ease-in-out mr-4"
              />{{ skill.title }}
            </h3>
          </div>

          <p class="mt-4 font-medium text-gray-500">
            {{ skill.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="min-h-[50vh]" id="projects">
      <div class="ml-auto text-5xl text-white font-semibold">Projects</div>
    </div>
    <div class="text-white flex py-24 justify-center">Made with ♥️ in Dresden, 2023</div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  {
    title: "Vue",
    icon: "logos:vue",
    text: "Advanced knowledge in Git and Github",
    color: "border-pink-600",
  },

  {
    title: "Nuxt",
    icon: "logos:nuxt-icon",
    text: "Advanced knowledge in Git and Github",
    color: "border-pink-600",
  },
  {
    title: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    text: "Advanced knowledge in Git and Github",
    color: "border-pink-600",
  },
  {
    title: "TypeScript ",
    icon: "logos:typescript-icon",
    text: "Advanced knowledge in Git and Github",
    color: "border-blue-600",
  },
  {
    title: "Docker ",
    icon: "logos:docker-icon",
    text: "Advanced knowledge in Git and Github",
    color: "border-blue-600",
  },
  {
    title: "NodeJs ",
    icon: "logos:nodejs-icon",
    text: "Advanced knowledge in Git and Github",
    color: "border-blue-600",
  },
  {
    title: "SQL ",
    icon: "logos:postgresql",
    text: "Advanced knowledge in Git and Github",
    color: "border-blue-600",
  },
  {
    title: "Google Cloud ",
    icon: "logos:google-cloud",
    text: "Advanced knowledge in Git and Github",
    color: "border-blue-600",
  },
  {
    title: "Git",
    icon: "mdi:git",
    text: "Advanced knowledge in Git and Github",
    color: "white",
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
