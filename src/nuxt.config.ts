import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@bg-dev/nuxt-naiveui",
    "@nuxt/image-edge",
    "@nuxtjs/robots",
    "nuxt-headlessui",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/eslint",
  ],

  i18n: {
    locales: [
      {
        file: "de-DE.json",
        code: "de",
      },
      {
        code: "en",
        file: "en.json",

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
  components: [
    {
      pathPrefix: false,
      path: "~/components",
    },
  ],
  devtools: {
    enabled: true,
  },

  typescript: {
    strict: true,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ["~~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
