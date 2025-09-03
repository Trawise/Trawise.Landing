// Components
import { Footer } from "./components/footer";
import { Container } from "./components/ui";
import { BackLink } from "./components/back-link";

export function ComingSoon() {
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
          aria-labelledby="coming-soon-heading"
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="text-center space-y-6">
                <h1
                  id="coming-soon-heading"
                  className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl text-gray-900"
                >
                  Coming Soon to Your App Store
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  We're putting the finishing touches on the Trawise mobile app.
                  Soon you'll be able to connect with nearby hosts and find
                  budget-friendly stays right from your smartphone.
                </p>
              </div>

              <nav className="pt-8" aria-label="Return navigation">
                <BackLink to="/">Back to Home</BackLink>
              </nav>
            </div>
          </Container>
        </section>

        <Footer />
      </main>
    </>
  );
}
