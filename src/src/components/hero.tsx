import { Trans, useTranslation } from "react-i18next";

import { PhoneFrame } from "./device-frame";
import { CONTENT_WIDTH, Container, buttonClass } from "./ui";

/**
 * The phone the hero opens on, with the payoff — two real offers — floated over
 * its lower edge.
 */
function HeroDevice() {
  const { t } = useTranslation();

  return (
    <div className="relative w-56 sm:w-64 lg:w-72">
      <PhoneFrame>
        <img
          src="/app/map.webp"
          alt={t("hero.mapAlt")}
          width={720}
          height={1392}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="block w-full h-auto"
        />
      </PhoneFrame>

      {/* Hidden below sm: at phone widths it would cover the map it is meant to
          sit beside, and the same offers appear in full further down the page. */}
      <img
        src="/app/offer-card.webp"
        alt={t("hero.offerAlt")}
        width={760}
        height={338}
        loading="eager"
        decoding="async"
        className="hidden sm:block absolute -left-10 -bottom-6 w-56 lg:w-60 rounded-xl border border-gray-200 bg-white shadow-2xl"
      />
    </div>
  );
}

export function Hero() {
  const { t } = useTranslation();

  return (
    // min-h-viewport, not min-h-screen: the sticky header and the consent
    // banner both eat into the visible area, and min-h-screen would overflow by
    // their combined height — pushing the buttons underneath the banner.
    <section
      className="flex items-center py-12 md:py-16 min-h-viewport bg-white"
      aria-labelledby="hero-heading"
    >
      <Container>
        <div
          className={`grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center ${CONTENT_WIDTH}`}
        >
          <div className="space-y-6 md:space-y-8">
            <h1
              id="hero-heading"
              className="font-extrabold text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-900"
            >
              {/* The brand is interpolated, not welded to the end of the
                  sentence: a translation that does not finish on a preposition
                  would otherwise read as nonsense. */}
              <Trans
                i18nKey="hero.title"
                components={{ brand: <span className="text-brand-600" /> }}
              />
            </h1>

            <p className="text-base md:text-lg text-gray-600">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#how-it-works" className={buttonClass("primary", "lg")}>
                {t("hero.seeHowItWorks")}
              </a>
              <a href="#for-hosts" className={buttonClass("secondary", "lg")}>
                {t("hero.hostCta")}
              </a>
            </div>

            <div className="space-y-1">
              <p className="text-base text-gray-600">{t("hero.free")}</p>
              {/* Said plainly rather than shown as store badges: the app is in
                  neither store yet, and both stores require their own artwork
                  for a link that actually resolves to a listing. */}
              <p className="text-sm text-gray-500">{t("hero.storeNote")}</p>
            </div>
          </div>

          <div className="flex justify-center">
            <HeroDevice />
          </div>
        </div>
      </Container>
    </section>
  );
}
