import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { usePageMeta } from "./hooks/use-page-meta";

export function NotFound() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  // GitHub Pages serves this through 404.html, which still responds 200, so
  // noindex is the only signal telling crawlers not to index the URL.
  usePageMeta({
    title: t("pageTitles.notFound"),
    description: t("notFound.description"),
    path: pathname,
    noindex: true,
  });

  return (
    <>
      <SkipLink />

      <Header />

      <main id="main-content" className="grow">
        <section
          className="flex items-center py-16 min-h-viewport"
          aria-labelledby="error-heading"
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <h1
                  id="error-heading"
                  className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-gray-900"
                >
                  {t("notFound.title")}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t("notFound.description")}
                </p>
              </div>

              <div className="pt-8">
                <BackLink to="/">{t("notFound.backToHome")}</BackLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
