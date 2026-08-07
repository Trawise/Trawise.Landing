import { useTranslation } from "react-i18next";
import { DownloadButton } from "./components/download-buttons";
import { Footer } from "./components/footer";
import { ForHotels } from "./components/for-hotels";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { usePageTitle } from "./hooks/use-page-title";

export function App() {
  const { t } = useTranslation();

  usePageTitle(t("pageTitles.home"));

  return (
    <>
      <SkipLink />

      <Header />

      <main id="main-content" className="flex-grow">
        <section
          className="relative min-h-screen flex items-center py-16"
          aria-labelledby="hero-heading"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1
                  id="hero-heading"
                  className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-gray-900"
                >
                  {t("hero.title")}{" "}
                  <span className="text-indigo-500">Trawise</span>
                </h1>

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

              <div className="flex justify-center lg:justify-end">
                <img
                  src="/app-mockup.png"
                  alt="Trawise mobile app mockup showing the interface for connecting with hosts"
                  className="w-full h-auto max-w-xl"
                  loading="eager"
                  width={600}
                  height={800}
                  fetchPriority="high"
                />
              </div>
            </div>
          </Container>

          <a
            href="#for-hotels-heading"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label={t("hero.scrollHint")}
          >
            <span className="hidden sm:block text-base font-medium">
              {t("hero.scrollHint")}
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>

        <ForHotels />
      </main>

      <Footer />
    </>
  );
}
