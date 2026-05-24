import { useTranslation } from "react-i18next";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { usePageTitle } from "./hooks/use-page-title";

export function NotFound() {
  const { t } = useTranslation();

  usePageTitle(t("pageTitles.notFound"));

  return (
    <>
      <SkipLink />

      <Header />

      <main id="main-content" className="flex-grow">
        <section
          className="min-h-screen flex items-center"
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
