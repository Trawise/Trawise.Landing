import { useTranslation } from "react-i18next";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { usePageMeta } from "./hooks/use-page-meta";
import { useStructuredData } from "./hooks/use-structured-data";

interface Entry {
  id: string;
  question: string;
  answer: string;
}

/**
 * English only for now, like the legal pages: the answers are still settling,
 * and a translation of copy that is about to change is a translation that goes
 * stale. The page chrome is localised.
 */
const ENTRIES: Entry[] = [
  {
    id: "what-is-trawise",
    question: "What is Trawise?",
    answer:
      "Trawise is a marketplace that works in reverse. Instead of scrolling through listings, you say where you want to stay, when, for how many people and what you can pay per night. Hotels, guesthouses and hosts near that spot see your request and reply with what they can offer.",
  },
  {
    id: "how-it-works",
    question: "How does it work for travellers?",
    answer:
      "Drop a pin on the map, choose your dates, your budget and who is coming, and send the request. Every place within your chosen radius that can host your party sees it, and can accept your budget, propose a different nightly price, or pass. You compare the real answers and book the one you want.",
  },
  {
    id: "cost",
    question: "What does it cost?",
    answer:
      "Trawise is free to use and takes no cut of your stay. You pay the place directly.",
  },
  {
    id: "counter-offer",
    question: "What is a counter-offer?",
    answer:
      "A place that cannot take your budget can reply with a nightly price of its own. That is a counter-offer. You can book it, turn it down, or keep waiting for other replies — turning a price down leaves the conversation open, and the place can offer another.",
  },
  {
    id: "address",
    question: "When do I get the address and the host's contact details?",
    answer:
      "Before you book, a listing shows its town, its photos and where it sits on the map. The exact street address and the host's email and telephone number are shared once your stay there is booked.",
  },
  {
    id: "payment",
    question: "How do I pay?",
    answer:
      "You pay the place on arrival, with whichever methods it accepts — each listing says which ones. Trawise never handles your money and never charges a booking fee.",
  },
  {
    id: "flexible-dates",
    question: "What does date flexibility do?",
    answer:
      "It widens who hears you. Saying you can move a few days either side means a place whose calendar clashes only at the edges of your dates still sees your request and can offer you the nights it has free.",
  },
  {
    id: "change-request",
    question: "Can I change or cancel my request?",
    answer:
      "You can edit a request while no place has answered it; after that the terms a host replied to would change underneath them, so it is fixed. A request can be cancelled at any time before it is booked, and the places holding a room for you are told.",
  },
  {
    id: "cancel-booking",
    question: "Can I cancel after booking?",
    answer:
      "Yes, and so can the place. Either side can cancel a confirmed booking with a reason, and the other side is notified.",
  },
  {
    id: "who-sees-request",
    question: "Who can see my request?",
    answer:
      "Only published listings inside the area you chose that can sleep your party on your dates. Your request is not public, it is not indexed, and no place sees your email address or telephone number.",
  },
  {
    id: "reviews",
    question: "How do reviews work?",
    answer:
      "After the stay, both sides can review each other. Neither review is published until the other one is written, or until two weeks have passed — so nobody is writing an answer to what has already been said about them.",
  },
  {
    id: "languages",
    question: "Which languages does Trawise speak?",
    answer:
      "English, Swedish, Italian and Spanish, in the apps and in the mail we send you.",
  },
  {
    id: "become-host",
    question: "I have rooms to fill. How do I join?",
    answer:
      "Create a host account on the dashboard at host.trawise.org, add your place and publish it. It is free for hosts, and requests from nearby travellers start arriving as soon as the listing is live.",
  },
];

export function Faq() {
  const { t } = useTranslation();

  usePageMeta({
    title: t("pageTitles.faq"),
    path: "/faq",
  });

  // A FAQPage graph is what puts these answers in a search result rather than
  // only on the page.
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ENTRIES.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  });

  return (
    <>
      <SkipLink />

      <Header />

      <main id="main-content" className="grow">
        <section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <header className="mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {t("faq.title")}
                </h1>
                <p className="text-lg text-gray-600">{t("faq.subtitle")}</p>
              </header>

              {/* A description list, not an accordion: twelve short answers
                  are quicker to read open than to click open, and the page
                  stays searchable with the browser's own find. */}
              <dl className="divide-y divide-gray-200">
                {ENTRIES.map(({ id, question, answer }) => (
                  <div key={id} className="py-6">
                    <dt>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {question}
                      </h2>
                    </dt>
                    <dd className="mt-3 text-gray-700 leading-relaxed">
                      {answer}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12">
                <BackLink to="/">{t("faq.backToHome")}</BackLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
