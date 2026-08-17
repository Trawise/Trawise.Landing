import { useTranslation } from "react-i18next";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { usePageMeta } from "./hooks/use-page-meta";

export function ComingSoon() {
  const { t } = useTranslation();

  // noindex: a placeholder page carries no search value and would compete
  // with the homepage for app-download queries.
  usePageMeta({
    title: t("pageTitles.comingSoon"),
    path: "/coming-soon",
    noindex: true,
  });

  return (
    <>
      <SkipLink />

      <Header />

      <main id="main-content" className="grow">
        <section
          className="flex items-center py-16 min-h-viewport"
          aria-labelledby="coming-soon-heading"
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <h1
                  id="coming-soon-heading"
                  className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-gray-900"
                >
                  {t("comingSoon.title")}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t("comingSoon.description")}
                </p>
              </div>

              <div className="pt-8">
                <BackLink to="/">{t("comingSoon.backToHome")}</BackLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
