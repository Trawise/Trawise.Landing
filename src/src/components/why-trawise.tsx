import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { Section } from "./ui";

const POINT_KEYS = ["price", "fees"] as const;

// Keyed by the literal union rather than `string`, so a lookup can never be
// undefined and adding a point without an icon is a type error.
const POINT_ICONS: Record<(typeof POINT_KEYS)[number], ReactNode> = {
  price: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2v20M17 5.5C17 5.5 15 4 12 4S7 5.5 7 8s2.5 3.2 5 4 5 1.5 5 4-2 4-5 4-5-1.5-5-1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  fees: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5h16v14H4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 15l8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="9" cy="10" r="1.25" fill="currentColor" />
      <circle cx="15" cy="14" r="1.25" fill="currentColor" />
    </svg>
  ),
};

/** No numbers: there are none to show yet, and inventing them is fabrication. */
export function WhyTrawise() {
  const { t } = useTranslation();

  return (
    <Section labelledBy="why-heading">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
        <h2
          id="why-heading"
          className="font-extrabold text-3xl leading-tight md:text-4xl text-gray-900"
        >
          {t("why.title")}
        </h2>
        <p className="text-lg text-gray-600">{t("why.subtitle")}</p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none">
        {POINT_KEYS.map((key) => (
          <li
            key={key}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-4"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-600 text-white"
              aria-hidden="true"
            >
              {POINT_ICONS[key]}
            </div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              {t(`why.points.${key}.title`)}
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              {t(`why.points.${key}.description`)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
