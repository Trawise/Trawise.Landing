import { useTranslation } from "react-i18next";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Container } from "./components/ui";
import { SITE_CONFIG } from "./lib/constants";

export function DeleteAccount() {
  const { t } = useTranslation();

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-grow">
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {t("deleteAccount.title")}
                </h1>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8">
                  {t("deleteAccount.introMessage")}
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {t("deleteAccount.viaAppSettings.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {t("deleteAccount.viaAppSettings.description")}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      {t("deleteAccount.requestHere.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t("deleteAccount.requestHere.description")}
                    </p>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <p className="text-gray-700">
                        <strong>
                          {t("deleteAccount.contactInfo.emailLabel")}:
                        </strong>{" "}
                        <a
                          href={`mailto:${SITE_CONFIG.email}`}
                          className="text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded underline decoration-transparent hover:decoration-current focus:decoration-current"
                        >
                          {SITE_CONFIG.email}
                        </a>
                      </p>
                    </div>
                  </section>
                </div>

                <nav className="pt-8" aria-label="Return navigation">
                  <BackLink to="/">{t("deleteAccount.backToHome")}</BackLink>
                </nav>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
