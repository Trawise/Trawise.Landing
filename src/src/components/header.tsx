import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HOST_APP_URL, SITE_CONFIG } from "../lib/constants";
import { Container } from "./ui";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        {/* Explicit height rather than padding: --header-height in index.css
            must match it exactly (scroll-padding-top and the hero's viewport
            calc both depend on it), and deriving that from padding plus an
            inherited line-height is guesswork. */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded"
            aria-label={t("navigation.goToHomepage")}
          >
            {/* 199x40 matches the asset's true 1123:226 ratio at h-10, so the
                reserved box is correct before the stylesheet applies. The
                logo steps down to h-8 on phones: at h-10 it is 199px wide,
                which together with the CTA overflows a 320px viewport. */}
            <img
              src="/full-logo.png"
              alt={t("navigation.logoAlt", { name: SITE_CONFIG.name })}
              className="h-8 sm:h-10 w-auto"
              width={199}
              height={40}
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav aria-label={t("navigation.primary")}>
            <a
              href={HOST_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-2.5 bg-white border-2 border-gray-200 text-gray-900 text-sm sm:text-base font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 focus:border-brand-500"
            >
              {t("navigation.becomeHost")}
              <span className="sr-only"> ({t("opensInNewTab")})</span>
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
