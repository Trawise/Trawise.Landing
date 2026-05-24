import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import sv from "./locales/sv.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
  it: { translation: it },
  sv: { translation: sv },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  });

// Keep <html lang> in sync with the active language so screen readers and
// search engines always see the correct language code.
// Resources are synchronous so i18n is already initialized here; setting the
// attribute immediately handles the initial load, and the event handler covers
// all subsequent language switches.
document.documentElement.lang = i18n.language || "en";

i18n.on("languageChanged", (lng: string) => {
  document.documentElement.lang = lng;
});

export default i18n;
