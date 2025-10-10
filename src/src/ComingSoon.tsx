import { useTranslation } from "react-i18next";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Container } from "./components/ui";

export function ComingSoon() {
  const { t } = useTranslation();

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-grow">
        <section
          className="min-h-screen flex items-center"
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

              <nav className="pt-8" aria-label="Return navigation">
                <BackLink to="/">{t("comingSoon.backToHome")}</BackLink>
              </nav>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
