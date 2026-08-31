import { useTranslation } from "react-i18next";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { SITE_CONFIG } from "./lib/constants";
import { usePageMeta } from "./hooks/use-page-meta";

export function DeleteAccount() {
  const { t } = useTranslation();

  // noindex: an account-deletion form is a support destination reached from
  // inside the app, not a search-result landing page.
  usePageMeta({
    title: t("pageTitles.deleteAccount"),
    description: t("deleteAccount.introMessage"),
    path: "/delete-account",
    noindex: true,
  });

  return (
    <>
      <SkipLink />

      <Header />

      <main id="main-content" className="grow">
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {t("deleteAccount.title")}
                </h1>
              </header>

              <div>
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
                          className="text-brand-600 hover:text-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline underline-offset-2 decoration-gray-400 hover:decoration-current focus:decoration-current"
                        >
                          {SITE_CONFIG.email}
                        </a>
                      </p>
                    </div>
                  </section>
                </div>

                <div className="pt-8">
                  <BackLink to="/">{t("deleteAccount.backToHome")}</BackLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
