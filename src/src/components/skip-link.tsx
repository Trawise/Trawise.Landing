import { useTranslation } from "react-i18next";

/**
 * Renders a visually hidden "Skip to main content" link that becomes
 * visible on keyboard focus. Translates its label via i18n.
 * The target must have id="main-content" on the page.
 */
export function SkipLink() {
  const { t } = useTranslation();

  return (
    <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
      {t("skipToContent")}
    </a>
  );
}
