// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@bg-dev/nuxt-naiveui",
    "@nuxt/image-edge",
    "@nuxtjs/robots",
    "nuxt-headlessui",
    "@pinia/nuxt",
  ],

  nitro: {
    preset: "vercel-edge",
    prerender: {
      crawlLinks: true,
    },
  },

  devtools: {
    enabled: true,
  },
});
