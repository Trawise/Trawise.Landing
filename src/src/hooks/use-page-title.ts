import { useEffect } from "react";

const SITE_NAME = "Trawise";
const DEFAULT_TITLE =
  "Trawise - Connect with Nearby Hosts and Find Budget-Friendly Stays";

/**
 * Sets document.title for the current page.
 *
 * - Call with a page-specific string to get "Page Name | Trawise".
 * - Call with no argument (or undefined) on the home page to restore the
 *   full default title from index.html.
 *
 * The title is updated on every render where `pageTitle` changes, so it
 * responds to i18n language switches automatically when the caller passes
 * a translated string from t().
 */
export function usePageTitle(pageTitle?: string): void {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : DEFAULT_TITLE;
  }, [pageTitle]);
}
