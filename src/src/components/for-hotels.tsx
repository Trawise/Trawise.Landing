import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { HOST_APP_URL, SITE_CONFIG } from "../lib/constants";
import { Container, buttonClass } from "./ui";

const STEP_KEYS = ["step1", "step2", "step3", "step4"] as const;

const BENEFIT_KEYS = ["benefit1", "benefit2", "benefit3"] as const;

// Keyed by the literal union rather than `string`, so a lookup can never be
// undefined and adding a benefit key without an icon is a type error.
const BENEFIT_ICONS: Record<(typeof BENEFIT_KEYS)[number], ReactNode> = {
  benefit1: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  benefit2: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5L5 19M9 6.5C9 7.88071 7.88071 9 6.5 9C5.11929 9 4 7.88071 4 6.5C4 5.11929 5.11929 4 6.5 4C7.88071 4 9 5.11929 9 6.5ZM20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  benefit3: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 5.5L5 9.5H2.5C2.22386 9.5 2 9.72386 2 10V14C2 14.2761 2.22386 14.5 2.5 14.5H5L11 18.5V5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 8.5C15.7797 9.32601 16.25 10.4241 16.25 11.625C16.25 12.8259 15.7797 13.924 15 14.75M18 5.5C19.5215 6.99806 20.5 9.10214 20.5 11.5C20.5 13.8979 19.5215 15.9981 18 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export function ForHotels() {
  const { t } = useTranslation();

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gray-50"
      aria-labelledby="for-hotels-heading"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          {/* brand-600, not brand-500: at 14px this is body-size text, and
              brand-500 on gray-50 is only 4.27:1 — short of AA's 4.5. */}
          <span className="inline-block text-sm font-semibold text-brand-600 uppercase tracking-wide">
            {t("forHotels.eyebrow")}
          </span>
          <h2
            id="for-hotels-heading"
            className="font-extrabold text-3xl leading-tight md:text-4xl text-gray-900"
          >
            {t("forHotels.title")}
          </h2>
          <p className="text-lg text-gray-600">{t("forHotels.subtitle")}</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
          {STEP_KEYS.map((stepKey, index) => (
            <li
              key={stepKey}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 space-y-4 transition-all duration-200 hover:shadow-lg hover:border-brand-100 hover:-translate-y-1"
            >
              {/* Gradient starts at brand-600, not brand-500: the number is
                  18px bold — just under AA's 18.66px large-text threshold — so
                  it needs 4.5:1, and white on brand-500 is only 4.47:1. */}
              <div
                className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-brand-600 to-brand-700 text-white text-lg font-bold shadow-md shadow-brand-600/20"
                aria-hidden="true"
              >
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
                {t(`forHotels.steps.${stepKey}.title`)}
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {stepKey === "step1" ? (
                  <>
                    {t("forHotels.steps.step1.descriptionBeforeEmail")}
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2 decoration-gray-400 hover:decoration-current transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    {t("forHotels.steps.step1.descriptionAfterEmail")}
                  </>
                ) : (
                  t(`forHotels.steps.${stepKey}.description`)
                )}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 md:p-10">
          <h3 className="text-center text-2xl font-bold text-white tracking-tight mb-8">
            {t("forHotels.benefitsHeading")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFIT_KEYS.map((benefitKey) => (
              <div
                key={benefitKey}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center md:items-start md:text-left gap-3 backdrop-blur-sm"
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/15 text-white"
                  aria-hidden="true"
                >
                  {BENEFIT_ICONS[benefitKey]}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {t(`forHotels.benefits.${benefitKey}.title`)}
                  </h4>
                  <p className="text-[15px] text-slate-300 leading-relaxed">
                    {t(`forHotels.benefits.${benefitKey}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          {/* brand-600 rather than brand-500: white on brand-500 is 4.47:1,
              just short of AA's 4.5 for this button's 16px text. */}
          <a
            href={HOST_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("primary", "lg")}
          >
            {t("forHotels.cta")}
            <span className="sr-only"> ({t("opensInNewTab")})</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
