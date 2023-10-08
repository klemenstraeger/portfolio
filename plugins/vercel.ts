import { inject } from "@vercel/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  inject();
  nuxtApp.provide("vercel", { inject });
});
