import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: "en", label: t("languages.english") },
    { code: "es", label: t("languages.spanish") },
    { code: "se", label: t("languages.swedish") },
  ];

  return (
    <nav className="flex items-center gap-3" aria-label="Language selection">
      {languages.map((lang, index) => (
        <>
          {index > 0 && (
            <span
              key={`separator-${lang.code}`}
              className="text-gray-400"
              aria-hidden="true"
            >
              •
            </span>
          )}
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded underline decoration-transparent hover:decoration-current focus:decoration-current ${
              i18n.language === lang.code
                ? "text-gray-900 font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label={`Switch to ${lang.label}`}
            aria-current={i18n.language === lang.code ? "true" : undefined}
          >
            {lang.label}
          </button>
        </>
      ))}
    </nav>
  );
}
