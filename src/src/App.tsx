// Components
import { DownloadButton } from './components/download-buttons'
import { Footer } from './components/footer'
import { Container } from './components/ui'

export function App() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 z-50 focus:z-50"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <section
          className="min-h-screen flex items-center"
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
                    Connect with Nearby Hosts and Find Budget-Friendly Stays on
                    Trawise
                  </h1>
                </header>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Trawise is a mobile travel application that connects travelers
                  with local accommodation hosts through a location-based request
                  system. Users can set their desired location and budget on an
                  interactive map, create accommodation requests with specific
                  dates and preferences, and receive responses from nearby hosts.
                </p>

                <div
                  className="flex flex-col md:flex-row gap-4"
                  role="group"
                  aria-label="Download the Trawise mobile app"
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

        <Footer />
      </main>
    </>
  )
}