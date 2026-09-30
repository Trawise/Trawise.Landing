import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { LocaleLink } from "./locale-link";
import { HOST_APP_URL, SITE_CONFIG } from "../lib/constants";
import { localeFromPath, localePath, pathWithoutLocale } from "../lib/locales";
import { CONTENT_WIDTH, Container, buttonClass } from "./ui";

// Hidden below lg: in Spanish they wrap and crowd the logo even at md, and
// on a phone the sections are a short scroll away.
const SECTION_LINK_CLASS =
  "hidden lg:inline-block whitespace-nowrap py-2 font-medium text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline decoration-transparent underline-offset-4 hover:decoration-current focus:decoration-current";

interface SectionLinkProps {
  id: string;
  children: ReactNode;
}

/**
 * A link to a section of the home page, from any page.
 *
 * On the home page it is a plain fragment link: a router link to the hash the
 * URL already has is not a navigation, so a second click would do nothing.
 */
function SectionLink({ id, children }: SectionLinkProps) {
  const { pathname } = useLocation();

  if (pathWithoutLocale(pathname) === "/") {
    return (
      <a href={`#${id}`} className={SECTION_LINK_CLASS}>
        {children}
      </a>
    );
  }

  // Link rather than LocaleLink: that one would write "/sv/#id", not the
  // "/sv#id" the home page itself lives at.
  return (
    <Link
      to={`${localePath(localeFromPath(pathname), "/")}#${id}`}
      className={SECTION_LINK_CLASS}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        {/* The same measure the sections use, so the logo starts on the
            headline's left edge and the CTA ends on the hero image's right one. */}
        <div className={CONTENT_WIDTH}>
          {/* Explicit height rather than padding: --header-height in index.css
            must match it exactly (scroll-padding-top and the hero's viewport
            calc both depend on it), and deriving that from padding plus an
            inherited line-height is guesswork. */}
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            <LocaleLink
              to="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded"
              aria-label={t("navigation.goToHomepage")}
            >
              {/* 199x40 matches the asset's true 1123:226 ratio at h-10, so the
                reserved box is correct before the stylesheet applies. The logo
                steps down on phones: at h-10 it is 199px wide, which together
                with the CTA overflows a 320px viewport, and even h-8 leaves the
                CTA too little room there and wraps it onto two lines. */}
              <img
                src="/full-logo.png"
                alt={t("navigation.logoAlt", { name: SITE_CONFIG.name })}
                className="h-7 min-[360px]:h-8 sm:h-10 w-auto"
                width={199}
                height={40}
                loading="eager"
                decoding="async"
              />
            </LocaleLink>

            <nav
              aria-label={t("navigation.primary")}
              className="flex items-center gap-6"
            >
              <SectionLink id="how-it-works">
                {t("hero.seeHowItWorks")}
              </SectionLink>
              <SectionLink id="for-hosts">{t("hero.hostCta")}</SectionLink>
              <a
                href={HOST_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass(
                  "secondary",
                  "sm",
                  "whitespace-nowrap sm:px-6 sm:text-base",
                )}
              >
                {t("navigation.becomeHost")}
                <span className="sr-only"> ({t("opensInNewTab")})</span>
              </a>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
