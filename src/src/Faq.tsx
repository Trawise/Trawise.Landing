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

const LINK_CLASS =
  "text-brand-600 hover:text-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline underline-offset-2 decoration-gray-400 hover:decoration-current focus:decoration-current";

// English only, like the legal pages, so the answers cannot drift between
// translations. The page chrome is localised.
const GROUPS: Group[] = [
  {
    id: "about",
    title: "About Trawise",
    entries: [
      {
        id: "what-is-trawise",
        question: "What is Trawise?",
        answer:
          "A marketplace that works in reverse. You say where you want to stay, when, for how many people and what you can pay per night. Places near that spot see the request and answer with what they can offer.",
      },
      {
        id: "difference",
        question: "How is that different from a booking site?",
        answer:
          "A booking site shows you what is published and you take the price you find. Here the places come to you: they see a real request with a real budget and decide whether they can fill those nights.",
      },
      {
        id: "languages",
        question: "Which languages does Trawise speak?",
        answer:
          "English, Swedish, Italian and Spanish, in the apps and in the mail we send. The terms, the privacy policy and this page are in English only.",
      },
    ],
  },
  {
    id: "requests",
    title: "Your request",
    entries: [
      {
        id: "how-to-post",
        question: "How do I post one?",
        answer:
          "Drop a pin or name an area, choose your dates, your nightly budget and who is coming, and send it. Every published place inside that area that can sleep your party on those dates sees it and can accept your budget, propose a different nightly price, or pass.",
      },
      {
        id: "limits",
        question: "How many requests can I have open, and how long can a stay be?",
        answer: "Twenty open requests at once, and up to ninety nights per stay.",
      },
      {
        id: "who-sees",
        question: "Who can see my request?",
        answer:
          "Only published places inside the area you chose that can sleep your party on your dates. They see your dates, your party, your budget, your profile name, when you joined and your rating as a traveller. They do not see your email address, and we never ask for a telephone number. Requests are not public and are not indexed by search engines.",
      },
      {
        id: "change-or-cancel",
        question: "Can I change or cancel my request?",
        answer:
          "You can edit it until a place has answered. After that the terms are fixed, because a place replied to them; cancel and post a new one instead. A request that is not booked can be cancelled at any time, and the places holding a room for you are told.",
      },
      {
        id: "no-answers",
        question: "What if nobody answers?",
        answer:
          "A request stays open until the first night of the stay, then closes on its own. Three days before that we remind you, so there is time to widen the area or raise the budget.",
      },
    ],
  },
  {
    id: "booking",
    title: "Offers and booking",
    entries: [
      {
        id: "counter-offer",
        question: "What is a counter-offer?",
        answer:
          "A place that cannot take your budget can reply with a nightly price of its own. You book it or turn it down. Turning it down leaves the conversation open, so the place can come back with another price, but you cannot counter a counter.",
      },
      {
        id: "one-stay",
        question: "Can I book more than one place from the same request?",
        answer:
          "No. One request, one stay. Booking a place declines the other offers on that request, and those places are told.",
      },
      {
        id: "contact-details",
        question: "When do I get the address and the host's contact details?",
        answer:
          "Before you book, a place shows its town, its photos and its position on the map. The street address and the host's email and telephone are shared once your stay there is booked.",
      },
      {
        id: "payment",
        question: "How do I pay?",
        answer:
          "You pay the place directly, with whichever methods it accepts; each listing says which. Trawise does not handle the payment, so deposits and refunds are between you and the place.",
      },
      {
        id: "cancel-booking",
        question: "Can a booking be cancelled?",
        answer:
          "Yes, by either side, with a reason. The other side is told at once. A cancelled booking closes the request, so post a new one if you still need the nights. What a cancellation means for a deposit is between you and the place.",
      },
    ],
  },
  {
    id: "trust",
    title: "Trust and safety",
    entries: [
      {
        id: "reviews",
        question: "How do reviews work?",
        answer:
          "Both sides can review each other after a stay. Neither review is published until the other is written or two weeks have passed, so nobody writes an answer to what was said about them. You can correct your own review for two days.",
      },
      {
        id: "verification",
        question: "Do you check the places and the people?",
        answer:
          "No. We do not inspect places or verify identities. Read the listing, ask in the chat, and use your judgement as you would anywhere else. Where someone is at risk, contact the emergency services first.",
      },
      {
        id: "report",
        question: "Something looks wrong. How do I report it?",
        answer: `Write to ${SITE_CONFIG.email} with what you saw and where. We look into every report and can remove content or restrict an account where our terms were broken.`,
      },
    ],
  },
  {
    id: "hosts",
    title: "For hosts",
    entries: [
      {
        id: "host-join",
        question: "I have rooms to fill. How do I join?",
        answer:
          "Create a host account on the dashboard at host.trawise.org, add your place and publish it. Requests from nearby travellers arrive as soon as the listing is live.",
      },
      {
        id: "host-requests",
        question: "Which requests will I see?",
        answer:
          "The ones pinned inside an area that covers you, for dates you have rooms free, for a party your rooms can sleep.",
      },
      {
        id: "host-team",
        question: "Can my colleagues use the same account?",
        answer:
          "Invite them instead. A place belongs to an organisation, and you invite colleagues by email with a role that decides what they can do. Everyone on the team sees the conversations for the listings they have access to.",
      },
      {
        id: "host-cancel",
        question: "Can I cancel a confirmed stay?",
        answer:
          "Yes, with a reason, from the request on the dashboard. Anyone on your team who may answer requests for the place can do it, and the traveller is told at once. Their request stays closed rather than reopening to other places.",
      },
      {
        id: "currency-and-rooms",
        question: "Can I change the currency or remove a room type later?",
        answer:
          "The currency locks once the place has answered a request or a room type carries a price, because amounts already written are in it. A room type that has been offered to a traveller cannot be deleted, and a published place keeps at least one; rename it or reduce its quantity instead.",
      },
      {
        id: "host-privacy",
        question: "What do travellers see about my place before they book?",
        answer:
          "Its name, description, photos, house rules, facilities, town and position on the map. The street address and your contact details stay hidden until a stay is booked.",
      },
    ],
  },
  {
    id: "account",
    title: "Your account",
    entries: [
      {
        id: "notifications",
        question: "Can I control the emails and notifications?",
        answer:
          "Yes. Offers, messages and reminders can each be switched on or off for email and for push in Settings. Everything the Service tells you is also listed under the bell in either app. Account mail is always sent: a confirmation code, a password reset, an invitation to join an organisation.",
      },
      {
        id: "data-export",
        question: "Can I get a copy of my data?",
        answer:
          "Settings, then Download my data, in either app. The file holds your profile, notification settings and devices, your requests and the offers on them, your bookings, the messages you wrote, the reviews you wrote and received, the notifications you were sent, anything you reported, and your organisation memberships. Messages you received are left out: they are the other person's data.",
      },
      {
        id: "delete-account",
        question: "How do I delete my account?",
        answer:
          "Settings, then Delete account, confirmed with your password. Your name, email address, password and devices are removed and your sign-in stops working. Stays, messages and reviews stay on the other party's record with nothing in them that identifies you. It cannot be undone, and the last owner of an organisation hands it over first.",
      },
      {
        id: "something-else",
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
    description: t("faq.subtitle"),
    path: "/faq",
    localised: false,
  });

  // A FAQPage graph is what puts these answers in a search result.
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

              {/* Open answers rather than an accordion: quicker to read and
                  searchable with the browser's own find. */}
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
                <LocaleLink to="/terms" className={LINK_CLASS}>
                  Terms of Service
                </LocaleLink>
                , and what we do with your data is in the{" "}
                <LocaleLink to="/privacy-policy" className={LINK_CLASS}>
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
