import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/error-boundary";
import { App } from "./App.tsx";
import { ComingSoon } from "./ComingSoon.tsx";
import { DeleteAccount } from "./DeleteAccount.tsx";
import { NotFound } from "./NotFound.tsx";
import { PrivacyPolicy } from "./PrivacyPolicy.tsx";
import { CookieBanner } from "./components/cookie-banner.tsx";
import "./i18n";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Cookie consent banner — rendered outside Routes so it persists
            across all pages, but inside BrowserRouter so Link works. */}
        <CookieBanner />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
