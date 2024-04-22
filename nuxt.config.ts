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
    "@nuxtjs/i18n",
  ],

  nitro: {
    preset: "vercel-edge",
    prerender: {
      crawlLinks: true,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: [
      {
        code: "en",
      },
      {
        code: "de-DE",
      },
    ],
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false,
    },
  },

  devtools: {
    enabled: true,
  },
});
