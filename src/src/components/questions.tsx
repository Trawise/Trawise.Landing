import { useTranslation } from "react-i18next";

import { LocaleLink } from "./locale-link";
import { Section, buttonClass } from "./ui";

/**
 * A pointer to the FAQ, not a copy: repeating the answers would put the same
 * prose on two indexed URLs, and the FAQ is English only.
 */
export function Questions() {
  const { t } = useTranslation();

  return (
    <Section labelledBy="questions-heading">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2
          id="questions-heading"
          className="font-extrabold text-3xl leading-tight md:text-4xl text-gray-900"
        >
          {t("questions.title")}
        </h2>
        <p className="text-lg text-gray-600">{t("questions.description")}</p>
        <div className="pt-2">
          <LocaleLink to="/faq" className={buttonClass("primary", "lg")}>
            {t("questions.cta")}
          </LocaleLink>
        </div>
      </div>
    </Section>
  );
}
