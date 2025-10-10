import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./locales/en.json";
import es from "./locales/es.json";
import se from "./locales/se.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  se: {
    translation: se,
  },
};

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language
    debug: false, // Set to true for development

    // Language detection options
    detection: {
      order: ["localStorage", "navigator", "htmlTag"], // Check localStorage first, then browser language
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"], // Cache the selected language
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
