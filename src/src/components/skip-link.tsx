import { useTranslation } from "react-i18next";

/**
 * Renders a "Skip to main content" link that sits just off the top of the
 * viewport and slides into view on keyboard focus (see .skip-link in
 * index.css). The target must have id="main-content" on the page.
 */
export function SkipLink() {
  const { t } = useTranslation();

  return (
    <a href="#main-content" className="skip-link">
      {t("skipToContent")}
    </a>
  );
}
