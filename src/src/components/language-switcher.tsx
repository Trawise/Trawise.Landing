import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import {
  LOCALES,
  type Locale,
  localePath,
  pathWithoutLocale,
} from "../lib/locales";
import { Separator } from "./ui";

/** Derived from LOCALES, so a new language cannot be routed but unlisted. */
const LABEL_KEYS: Record<Locale, string> = {
  en: "languages.english",
  es: "languages.spanish",
  it: "languages.italian",
  sv: "languages.swedish",
};

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Changing language changes the URL: the prefix is what a crawler indexes
  // and what a visitor can share.
  const switchTo = (locale: Locale) => {
    navigate(localePath(locale, pathWithoutLocale(pathname) || "/"));
  };

  // resolvedLanguage normalises variants like "sv-SE" → "sv" so the active
  // state check matches our resource keys correctly.
  const active = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div
      className="flex items-center gap-3"
      role="group"
      aria-label={t("languages.groupLabel")}
    >
      {LOCALES.map((locale, index) => (
        <Fragment key={locale}>
          {index > 0 && <Separator />}
          <button
            type="button"
            onClick={() => switchTo(locale)}
            className={`transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline decoration-transparent hover:decoration-current focus:decoration-current ${
              active === locale
                ? "text-gray-900 font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
            // The language name itself always stays in its own language, but
            // the surrounding phrase is translated — otherwise a Swedish
            // visitor hears an English sentence read out by their screen reader.
            aria-label={t("languages.switchTo", {
              language: t(LABEL_KEYS[locale]),
            })}
            aria-current={active === locale ? true : undefined}
          >
            {t(LABEL_KEYS[locale])}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
