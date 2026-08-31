import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { localeFromPath } from "../lib/locales";

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

// The URL decides the language, and it has to decide it before the first paint:
// the detector starts from localStorage or the browser, which would show a
// visitor opening /sv a frame of English before LocaleRoute corrects it.
// Resources are synchronous, so this switch takes effect immediately.
const urlLocale = localeFromPath(window.location.pathname);

if (i18n.resolvedLanguage !== urlLocale) {
  void i18n.changeLanguage(urlLocale);
}

// Keep <html lang> in sync with the active language so screen readers and
// search engines always see the correct language code. Setting it here handles
// the initial load; the event handler covers every later switch.
//
// resolvedLanguage, not language: the detector reports the raw browser tag
// (e.g. "en-US" or "sv-SE") while the bundle actually rendered is the base
// language it resolved to. Declaring "en-US" while serving the "en" resources
// would announce a locale the site does not ship.
function syncHtmlLang(): void {
  document.documentElement.lang =
    i18n.resolvedLanguage || i18n.language || "en";
}

syncHtmlLang();
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
