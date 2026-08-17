import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", labelKey: "languages.english" },
  { code: "es", labelKey: "languages.spanish" },
  { code: "sv", labelKey: "languages.swedish" },
  { code: "it", labelKey: "languages.italian" },
] as const;

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  // resolvedLanguage normalises variants like "sv-SE" → "sv" so the active
  // state check matches our resource keys correctly.
  const active = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div className="flex items-center gap-3" role="group" aria-label={t("languages.groupLabel")}>
      {LANGUAGES.map((lang, index) => (
        <Fragment key={lang.code}>
          {index > 0 && (
            <span className="text-gray-400" aria-hidden="true">
              •
            </span>
          )}
          <button
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline decoration-transparent hover:decoration-current focus:decoration-current ${
              active === lang.code
                ? "text-gray-900 font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
            // The language name itself always stays in its own language, but
            // the surrounding phrase is translated — otherwise a Swedish
            // visitor hears an English sentence read out by their screen reader.
            aria-label={t("languages.switchTo", { language: t(lang.labelKey) })}
            aria-current={active === lang.code ? true : undefined}
          >
            {t(lang.labelKey)}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
