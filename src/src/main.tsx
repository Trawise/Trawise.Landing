import { StrictMode, Suspense, lazy, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ErrorBoundary } from "./components/error-boundary";
import { App } from "./App.tsx";
import { CookieBanner } from "./components/cookie-banner.tsx";
import { LocaleRoute } from "./components/locale-route.tsx";
import "./i18n";
import "./index.css";

// The landing page is what almost every visitor requests, so it stays in the
// entry chunk. The secondary routes are split out — the privacy policy alone is
// a few hundred lines of static prose that no first-time visitor downloads.
const ComingSoon = lazy(() =>
  import("./ComingSoon.tsx").then((m) => ({ default: m.ComingSoon })),
);
const DeleteAccount = lazy(() =>
  import("./DeleteAccount.tsx").then((m) => ({ default: m.DeleteAccount })),
);
const Faq = lazy(() => import("./Faq.tsx").then((m) => ({ default: m.Faq })));
const NotFound = lazy(() =>
  import("./NotFound.tsx").then((m) => ({ default: m.NotFound })),
);
const PrivacyPolicy = lazy(() =>
  import("./PrivacyPolicy.tsx").then((m) => ({ default: m.PrivacyPolicy })),
);
const TermsOfService = lazy(() =>
  import("./TermsOfService.tsx").then((m) => ({ default: m.TermsOfService })),
);

/**
 * React Router keeps the previous scroll offset across navigations, so
 * following a footer link from the bottom of a long page would open the next
 * one already scrolled down. Hash links are left alone — those are in-page
 * anchors that the browser positions itself.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename="/">
        <ScrollToTop />
        {/* The fallback reserves a viewport-height box so the footer does not
            flash upward while a route chunk loads. */}
        <Suspense
          fallback={<div className="grow min-h-[50dvh]" aria-hidden="true" />}
        >
          <Routes>
            {/* Each language gets its own path, and the same tree hangs off
                both the bare root and the prefixed one. */}
            {["/", "/:lang"].map((prefix) => (
              <Route
                key={prefix}
                path={prefix}
                element={
                  <LocaleRoute>
                    <Outlet />
                  </LocaleRoute>
                }
              >
                <Route index element={<App />} />
                <Route path="faq" element={<Faq />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
                <Route path="coming-soon" element={<ComingSoon />} />
                <Route path="delete-account" element={<DeleteAccount />} />
              </Route>
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {/* Outside Routes, so it survives a navigation; inside the router, so
            the link in it routes. */}
        <CookieBanner />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
