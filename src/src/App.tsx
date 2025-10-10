import { useTranslation } from "react-i18next";
import { DownloadButton } from "./components/download-buttons";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Container } from "./components/ui";

export function App() {
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
          className="min-h-screen flex items-center py-16"
          aria-labelledby="hero-heading"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <header>
                  <h1
                    id="hero-heading"
                    className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-gray-900"
                  >
                    {t("hero.title")}{" "}
                    <span className="text-indigo-500">Trawise</span>
                  </h1>
                </header>

                <p className="text-lg text-gray-600">{t("hero.description")}</p>

                <div
                  className="flex flex-col md:flex-row gap-4"
                  role="group"
                  aria-label={t("hero.downloadApp")}
                >
                  <DownloadButton store="playStore" />
                  <DownloadButton store="appStore" />
                </div>
              </div>

              <aside className="flex justify-center lg:justify-end">
                <img
                  src="app-mockup.png"
                  alt="Trawise mobile app mockup showing the interface for connecting with hosts"
                  className="w-full h-auto max-w-xl"
                  loading="eager"
                  width={600}
                  height={800}
                  fetchPriority="high"
                />
              </aside>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
