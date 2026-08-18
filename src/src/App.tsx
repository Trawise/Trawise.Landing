import { Trans, useTranslation } from "react-i18next";
import { DownloadButton } from "./components/download-buttons";
import { Footer } from "./components/footer";
import { ForHotels } from "./components/for-hotels";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { usePageMeta } from "./hooks/use-page-meta";

export function App() {
  const { t } = useTranslation();

  usePageMeta({ path: "/" });

  return (
    <>
      <SkipLink />

      <Header />

      <main id="main-content" className="grow">
        {/* min-h-viewport, not min-h-screen: the sticky header and the consent
            banner both eat into the visible area, and min-h-screen would
            overflow by their combined height — pushing the download buttons
            underneath the banner on a phone. */}
        <section
          className="relative flex items-center py-16 min-h-viewport"
          aria-labelledby="hero-heading"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1
                  id="hero-heading"
                  className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-gray-900"
                >
                  {/* The brand is interpolated, not welded to the end of the
                      sentence: a translation that does not finish on a
                      preposition would otherwise read as nonsense. */}
                  <Trans
                    i18nKey="hero.title"
                    components={{
                      brand: <span className="text-brand-600" />,
                    }}
                  />
                </h1>

                <p className="text-lg text-gray-600">{t("hero.description")}</p>

                <p className="text-base text-gray-500">{t("hero.free")}</p>

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
                {/* WebP first (67 kB vs 518 kB for the PNG) — this is the LCP
                    element, and index.html preloads the same WebP. width/height
                    are the true intrinsic pixels so the aspect-ratio hint
                    reserves the right box and contributes no CLS. */}
                <picture>
                  <source srcSet="/app-mockup.webp" type="image/webp" />
                  <img
                    src="/app-mockup.png"
                    alt={t("hero.mockupAlt")}
                    className="w-full h-auto max-w-xl"
                    loading="eager"
                    width={823}
                    height={752}
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
              </div>
            </div>
          </Container>

          <a
            href="#how-it-works"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
          >
            <span className="hidden sm:block text-base font-medium">
              {t("hero.scrollHint")}
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
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
            {/* The label is hidden below sm, so the link would otherwise be an
                icon with no accessible name on mobile. */}
            <span className="sr-only sm:hidden">{t("hero.scrollHint")}</span>
          </a>
        </section>

        <ForHotels />
      </main>

      <Footer />
    </>
  );
}
