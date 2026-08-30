import { useTranslation } from "react-i18next";

import { LocaleLink } from "./locale-link";
import { HOST_APP_URL, SITE_CONFIG } from "../lib/constants";
import { CONTENT_WIDTH, Container, buttonClass } from "./ui";

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
                steps down to h-8 on phones: at h-10 it is 199px wide, which
                together with the CTA overflows a 320px viewport. */}
              <img
                src="/full-logo.png"
                alt={t("navigation.logoAlt", { name: SITE_CONFIG.name })}
                className="h-8 sm:h-10 w-auto"
                width={199}
                height={40}
                loading="eager"
                decoding="async"
              />
            </LocaleLink>

            <nav aria-label={t("navigation.primary")}>
              <a
                href={HOST_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass(
                  "secondary",
                  "sm",
                  "sm:px-6 sm:text-base",
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
