import { Trans, useTranslation } from "react-i18next";

import { PhoneFrame } from "./device-frame";
import {
  APP_STORE_URL,
  PRODUCT_HUNT_BADGE_URL,
  PRODUCT_HUNT_URL,
} from "../lib/constants";
import { CONTENT_WIDTH, Container } from "./ui";

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
          width={620}
          height={1392}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="block w-full h-auto"
        />
      </PhoneFrame>

      {/* Hidden below sm: at phone widths it would cover the map it is meant to
          sit beside, and the same offers appear in full further down the page.

          Three rows tall, so it is placed inside the phone's own height rather
          than hung off the bottom of it: overhanging on one edge reads as a
          callout, overhanging on two reads as a mistake. */}
      <img
        src="/app/offer-card.webp"
        alt={t("hero.offerAlt")}
        width={760}
        height={586}
        loading="eager"
        decoding="async"
        className="hidden sm:block absolute -left-10 bottom-10 w-52 lg:w-56 rounded-xl border border-gray-200 bg-white shadow-2xl"
      />
    </div>
  );
}

interface BadgeProps {
  href: string;
  src: string;
  alt: string;
  /** The asset's width at a 54px height, so its ratio is reserved on load. */
  width: number;
}

function Badge({ href, src, alt, width }: BadgeProps) {
  const { t } = useTranslation();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-lg transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600"
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={54}
        loading="eager"
        decoding="async"
        className="h-10 sm:h-[54px] w-auto"
      />
      <span className="sr-only"> ({t("opensInNewTab")})</span>
    </a>
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

            {/* The badges and the line under them are one unit, the download
                and what it costs, so they sit closer to each other than to
                the copy above. */}
            <div className="space-y-4">
              {/* One shared height so the two read as a pair. h-10 is Apple's
                  minimum on screen and keeps both on one line from a 360px
                  phone up; gap-4 at sm is the quarter-height clear space
                  Apple asks for around the badge. */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Badge
                  href={APP_STORE_URL}
                  src="/app-store-badge.svg"
                  alt={t("appStoreAlt")}
                  width={162}
                />
                <Badge
                  href={PRODUCT_HUNT_URL}
                  src={PRODUCT_HUNT_BADGE_URL}
                  alt={t("productHuntAlt")}
                  width={250}
                />
              </div>

              <p className="text-base text-gray-600">{t("hero.free")}</p>
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
