import { useTranslation } from "react-i18next";
import { LocaleLink } from "./components/locale-link";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { SITE_CONFIG } from "./lib/constants";
import { usePageMeta } from "./hooks/use-page-meta";
import { useStructuredData } from "./hooks/use-structured-data";

interface Entry {
  id: string;
  question: string;
  answer: string;
}

interface Group {
  id: string;
  title: string;
  entries: Entry[];
}

/**
 * English only for now, like the legal pages: the answers are still settling,
 * and a translation of copy that is about to change is a translation that goes
 * stale. The page chrome is localised.
 */
const GROUPS: Group[] = [
  {
    id: "about",
    title: "About Trawise",
    entries: [
      {
        id: "what-is-trawise",
        question: "What is Trawise?",
        answer:
          "Trawise is a marketplace that works in reverse. Instead of scrolling through listings, you say where you want to stay, when, for how many people and what you can pay per night. Hotels, guesthouses and hosts near that spot see your request and reply with what they can offer.",
      },
      {
        id: "cost",
        question: "What does it cost?",
        answer:
          "Trawise is free to use and takes no cut of your stay. You pay the place directly.",
      },
      {
        id: "difference",
        question: "How is that different from a booking site?",
        answer:
          "On a booking site you search what is published and take the price you find. Here the places come to you: they see a real request with a real budget and decide whether they can fill those nights, which is how a room that would otherwise sit empty ends up within reach.",
      },
      {
        id: "languages",
        question: "Which languages does Trawise speak?",
        answer:
          "English, Swedish, Italian and Spanish, in the apps and in the mail we send you. The terms, the privacy policy and this page are in English only, so their meaning does not drift between translations.",
      },
    ],
  },
  {
    id: "requests",
    title: "Posting a request",
    entries: [
      {
        id: "how-it-works",
        question: "How do I post one?",
        answer:
          "Drop a pin on the map or name an area, choose your dates, your nightly budget and who is coming, and send it. Every published place inside that area that can sleep your party on those dates sees it, and can accept your budget, propose a different nightly price, or pass.",
      },
      {
        id: "limits",
        question: "How many requests can I have open, and how long can a stay be?",
        answer:
          "Twenty open requests at once, and up to ninety nights per stay. Longer than that stops being a stay and starts being a tenancy, which is a different thing entirely.",
      },
      {
        id: "who-sees-request",
        question: "Who can see my request?",
        answer:
          "Only published listings inside the area you chose that can sleep your party on your dates. They see your dates, your party, your budget, the name on your profile, when you joined and your rating as a traveller. They do not see your email address, and we do not ask you for a telephone number to pass on. Your request is not public and it is not indexed by search engines.",
      },
      {
        id: "change-request",
        question: "Can I change or cancel my request?",
        answer:
          "You can edit it while no place has answered. After that the terms a host replied to would change underneath them, so they are fixed — cancel and post a new one instead. A request can be cancelled at any time before it is booked, and the places holding a room for you are told.",
      },
      {
        id: "no-answers",
        question: "What if nobody answers?",
        answer:
          "A request stays open until the first night of the stay and then closes on its own. Three days before that we send a reminder, so there is time to widen the area, raise the budget, or make other plans.",
      },
    ],
  },
  {
    id: "offers",
    title: "Offers and booking",
    entries: [
      {
        id: "counter-offer",
        question: "What is a counter-offer?",
        answer:
          "A place that cannot take your budget can reply with a nightly price of its own. That is a counter-offer, and it is one round: you book it or you turn it down. Turning it down leaves the conversation open, so the place can come back with another price, but you cannot counter a counter.",
      },
      {
        id: "one-place",
        question: "Can I book more than one place from the same request?",
        answer:
          "No — one request, one stay. Booking a place declines the other offers on that request, and those places are told, so nobody is holding a room for you that you are not going to take.",
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
          "You pay the place directly, with whichever methods it accepts — each listing says which ones. Trawise never handles your money, holds no deposit and charges no booking fee.",
      },
      {
        id: "cancel-booking",
        question: "Can I cancel after booking?",
        answer:
          "Yes, and so can the place. Either side can cancel a confirmed booking with a reason, and the other side is notified. What that means for any deposit or cancellation terms is between you and the place, since Trawise holds no money either way.",
      },
    ],
  },
  {
    id: "after",
    title: "After the stay",
    entries: [
      {
        id: "reviews",
        question: "How do reviews work?",
        answer:
          "Both sides can review each other. Neither review is published until the other one is written, or until two weeks have passed — so nobody is writing an answer to what has already been said about them. You can correct your own review for two days after writing it.",
      },
      {
        id: "safety",
        question: "Do you check the places and the people?",
        answer:
          "No. We do not inspect places or verify identities, so read the listing, use the chat to ask what you need to know, and use your judgement as you would anywhere else. Where someone is at risk, contact the emergency services first.",
      },
      {
        id: "report",
        question: "Something looks wrong. How do I report it?",
        answer: `Write to ${SITE_CONFIG.email} with what you saw and where. We look into what we are told about, and can remove content or restrict an account where our terms have been broken.`,
      },
    ],
  },
  {
    id: "hosting",
    title: "Hosting",
    entries: [
      {
        id: "become-host",
        question: "I have rooms to fill. How do I join?",
        answer:
          "Create a host account on the dashboard at host.trawise.org, add your place and publish it. Requests from nearby travellers start arriving as soon as the listing is live.",
      },
      {
        id: "which-requests",
        question: "Which requests will I see?",
        answer:
          "The ones pinned inside an area that covers you, for dates you have rooms free, for a party your rooms can sleep.",
      },
      {
        id: "host-team",
        question: "Can my colleagues use the same account?",
        answer:
          "They should not — invite them instead. A place belongs to an organisation, and you invite colleagues into it by email with a role that decides what they can do: manage the listing, answer requests, reply to messages. Everyone on the team sees the conversations for the listings they have access to.",
      },
      {
        id: "host-privacy",
        question: "What do travellers see about my place before they book?",
        answer:
          "Its name, description, photos, house rules, facilities, town and position on the map. The street address and your contact details stay hidden until a stay there is booked.",
      },
    ],
  },
  {
    id: "account",
    title: "Your account and your data",
    entries: [
      {
        id: "notifications",
        question: "Can I control the emails and notifications?",
        answer:
          "Yes. Offers, messages and reminders can each be switched on or off for email and for push, separately, in Settings. Account mail is not a preference and is always sent: a confirmation code, a password reset, an invitation to join an organisation.",
      },
      {
        id: "my-data",
        question: "Can I get a copy of my data?",
        answer:
          "Settings, then Download my data, in either app. You get a file with your profile, your notification settings, your requests and the offers on them, the messages you wrote, the reviews you wrote and received, and your organisation memberships. Messages you received are left out, because the other half of a conversation is someone else's data.",
      },
      {
        id: "delete-account",
        question: "How do I delete my account?",
        answer:
          "Settings, then Delete account, confirmed with your password. Your name, email address and password are removed, your sign-in stops working and your push tokens are deleted. Stays, messages and reviews stay on the other party's record with nothing left in them that identifies you — leaving should not rewrite someone else's history. It cannot be undone, and the last owner of an organisation has to hand it over first.",
      },
      {
        id: "contact",
        question: "Something else?",
        answer: `Write to ${SITE_CONFIG.email}.`,
      },
    ],
  },
];

const ALL_ENTRIES = GROUPS.flatMap((group) => group.entries);

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
    mainEntity: ALL_ENTRIES.map(({ question, answer }) => ({
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

              {/* A description list, not an accordion: short answers are
                  quicker to read open than to click open, and the page
                  stays searchable with the browser's own find. */}
              <div className="space-y-12">
                {GROUPS.map(({ id, title, entries }) => (
                  <section key={id} aria-labelledby={`faq-${id}`}>
                    <h2
                      id={`faq-${id}`}
                      className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-200"
                    >
                      {title}
                    </h2>

                    <dl className="divide-y divide-gray-200">
                      {entries.map((entry) => (
                        <div key={entry.id} className="py-6">
                          <dt>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {entry.question}
                            </h3>
                          </dt>
                          <dd className="mt-3 text-gray-700 leading-relaxed">
                            {entry.answer}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}
              </div>

              <p className="mt-12 text-gray-700 leading-relaxed">
                The rules of using Trawise are in the{" "}
                <LocaleLink
                  to="/terms"
                  className="text-brand-600 hover:text-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline underline-offset-2 decoration-gray-400 hover:decoration-current focus:decoration-current"
                >
                  Terms of Service
                </LocaleLink>
                , and what we do with your data is in the{" "}
                <LocaleLink
                  to="/privacy-policy"
                  className="text-brand-600 hover:text-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline underline-offset-2 decoration-gray-400 hover:decoration-current focus:decoration-current"
                >
                  Privacy Policy
                </LocaleLink>
                .
              </p>

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
