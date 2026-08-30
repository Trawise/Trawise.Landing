import { Footer } from "./components/footer";
import { ForHosts } from "./components/for-hosts";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { Questions } from "./components/questions";
import { SkipLink } from "./components/skip-link";
import { WhyTrawise } from "./components/why-trawise";
import { usePageMeta } from "./hooks/use-page-meta";

export function App() {
  usePageMeta({ path: "/" });

  return (
    <>
      <SkipLink />

      <Header />

      {/* Traveller first, then hosts: the headline addresses a traveller, and a
          visitor who arrives from a traveller-facing ad has to meet their own
          half of the product before anybody asks them to register a hotel. */}
      <main id="main-content" className="grow">
        <Hero />
        <HowItWorks />
        <WhyTrawise />
        <ForHosts />
        <Questions />
      </main>

      <Footer />
    </>
  );
}
