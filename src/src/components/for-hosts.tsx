import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { BrowserFrame } from "./device-frame";
import { HOST_APP_URL, SITE_CONFIG } from "../lib/constants";
import { Section, SectionHeading, buttonClass } from "./ui";

const STEP_KEYS = ["register", "receive", "decide", "welcome"] as const;

const BENEFIT_KEYS = ["lastMinute", "reach", "team"] as const;

// Keyed by the literal union rather than `string`, so a lookup can never be
// undefined and adding a benefit without an icon is a type error.
const BENEFIT_ICONS: Record<(typeof BENEFIT_KEYS)[number], ReactNode> = {
  lastMinute: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  reach: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
  team: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3.25" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3.5 19a5.5 5.5 0 0 1 11 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 5.2a3.25 3.25 0 0 1 0 5.6M17.5 14.2a5.5 5.5 0 0 1 3 4.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

/** The hosts' half, on a dark ground so the two audiences are told apart. */
export function ForHosts() {
  const { t } = useTranslation();

  return (
    <Section id="for-hosts" tone="dark" labelledBy="for-hosts-heading">
      <SectionHeading
        id="for-hosts-heading"
        eyebrow={t("forHosts.eyebrow")}
        title={t("forHosts.title")}
        subtitle={t("forHosts.subtitle")}
        tone="dark"
      />

      <BrowserFrame url="host.trawise.org" tone="dark">
        <img
          src="/app/host-inbox.webp"
          alt={t("forHosts.inboxAlt")}
          width={1440}
          height={900}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto"
        />
      </BrowserFrame>

      <ol className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
        {STEP_KEYS.map((stepKey, index) => (
          <li
            key={stepKey}
            className="bg-white/5 border border-white/15 rounded-2xl p-6 space-y-4"
          >
            <div
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-gray-900 text-lg font-bold"
              aria-hidden="true"
            >
              {index + 1}
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
              {t(`forHosts.steps.${stepKey}.title`)}
            </h3>
            <p className="text-[15px] text-gray-300 leading-relaxed">
              {stepKey === "register" ? (
                <>
                  {t("forHosts.steps.register.descriptionBeforeEmail")}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-medium text-white underline underline-offset-2 decoration-gray-400 hover:decoration-current transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-700 rounded"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  {t("forHosts.steps.register.descriptionAfterEmail")}
                </>
              ) : (
                t(`forHosts.steps.${stepKey}.description`)
              )}
            </p>
          </li>
        ))}
      </ol>

      <h3 className="mt-16 mb-8 text-center text-2xl font-bold text-white tracking-tight">
        {t("forHosts.benefitsHeading")}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 list-none">
        {BENEFIT_KEYS.map((benefitKey) => (
          <li
            key={benefitKey}
            className="flex flex-col items-center text-center sm:items-start sm:text-left gap-3"
          >
            <div
              className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white"
              aria-hidden="true"
            >
              {BENEFIT_ICONS[benefitKey]}
            </div>
            <h4 className="text-lg font-bold text-white tracking-tight">
              {t(`forHosts.benefits.${benefitKey}.title`)}
            </h4>
            <p className="text-[15px] text-gray-300 leading-relaxed">
              {t(`forHosts.benefits.${benefitKey}.description`)}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-14 text-center">
        <a
          href={HOST_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass("inverse", "lg")}
        >
          {t("forHosts.cta")}
          <span className="sr-only"> ({t("opensInNewTab")})</span>
        </a>
      </div>
    </Section>
  );
}
