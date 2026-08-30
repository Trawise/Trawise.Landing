import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { LocaleLink } from "./locale-link";
import { HOST_APP_URL, SITE_CONFIG } from "../lib/constants";
import { useCookieConsent } from "../hooks/use-cookie-consent";
import { CONTENT_WIDTH, Container } from "./ui";
import { LanguageSwitcher } from "./language-switcher";

// Shared by the footer links and the cookie-settings button so they stay
// visually identical — the button must not read as a different kind of control.
const LINK_CLASS =
  "text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline decoration-transparent hover:decoration-current focus:decoration-current";

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
        {title}
      </h2>
      {/* A list, not a bare stack of anchors: a screen reader announces how many
          links the group holds before reading them. */}
      <ul className="space-y-3 list-none">{children}</ul>
    </div>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const { reopen } = useCookieConsent();

  return (
    <footer className="bg-gray-50 py-16">
      <Container>
        <div className={CONTENT_WIDTH}>
          {/* Columns rather than one bullet-separated row: nine links on a single
            line wrapped into an unreadable ribbon on anything narrower than a
            laptop, and gave a visitor no clue which of them were meant for
            them. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
              <img
                src="/full-logo.png"
                alt={t("navigation.logoAlt", { name: SITE_CONFIG.name })}
                className="h-6 w-auto"
                width={119}
                height={24}
                loading="lazy"
                decoding="async"
              />
              <p className="text-gray-600 max-w-sm">
                {t("footer.description")}.
              </p>
            </div>

            {/* One "Trawise" column rather than a travellers one and a hosts one:
              with the in-page section links gone each of those held a single
              link, and a heading over one link is a heading that earns nothing. */}
            <FooterColumn title={SITE_CONFIG.name}>
              <li>
                <LocaleLink to="/faq" className={LINK_CLASS}>
                  {t("navigation.faq")}
                </LocaleLink>
              </li>
              <li>
                <a
                  href={HOST_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASS}
                >
                  {t("footer.hostDashboard")}
                  <span className="sr-only"> ({t("opensInNewTab")})</span>
                </a>
              </li>
              <li>
                <LocaleLink to="/delete-account" className={LINK_CLASS}>
                  {t("footer.deleteAccount")}
                </LocaleLink>
              </li>
            </FooterColumn>

            <FooterColumn title={t("footer.legal")}>
              <li>
                <LocaleLink to="/terms" className={LINK_CLASS}>
                  {t("navigation.termsOfService")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink to="/privacy-policy" className={LINK_CLASS}>
                  {t("navigation.privacyPolicy")}
                </LocaleLink>
              </li>
              <li>
                {/* GDPR: withdrawing consent must be as easy as granting it, so
                  the banner has to be reachable again after the first choice. */}
                <button type="button" onClick={reopen} className={LINK_CLASS}>
                  {t("navigation.cookieSettings")}
                </button>
              </li>
            </FooterColumn>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                {t("footer.contactUs")}
              </h2>
              <address className="space-y-3 not-italic text-gray-600">
                {/* py-1 lifts this standalone link to a 24px target height; it is
                  not inline in a sentence, so WCAG 2.5.8's inline exception
                  does not cover it. */}
                <div>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className={`${LINK_CLASS} py-1`}
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div>{SITE_CONFIG.location}</div>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-gray-500 order-2 md:order-1">
                &copy; {new Date().getFullYear()} {SITE_CONFIG.name}.{" "}
                {t("footer.allRightsReserved")}.
              </p>

              {/* The language switcher sits outside the nav landmarks above: it is
                a preference control, not site navigation. */}
              <div className="order-1 md:order-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
