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
    <nav className="flex items-center gap-3" aria-label="Language selection">
      {LANGUAGES.map((lang, index) => (
        <Fragment key={lang.code}>
          {index > 0 && (
            <span className="text-gray-400" aria-hidden="true">
              •
            </span>
          )}
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded underline decoration-transparent hover:decoration-current focus:decoration-current ${
              active === lang.code
                ? "text-gray-900 font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label={`Switch to ${t(lang.labelKey)}`}
            aria-current={active === lang.code ? true : undefined}
          >
            {t(lang.labelKey)}
          </button>
        </Fragment>
      ))}
    </nav>
  );
}
