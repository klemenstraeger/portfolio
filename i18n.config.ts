import de from "./locales/de-DE.json";
import en from "./locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    "en-US": en,
    "de-DE": de,
  },
}));
