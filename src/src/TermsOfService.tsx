import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { LocaleLink } from "./components/locale-link";
import { BackLink } from "./components/back-link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SkipLink } from "./components/skip-link";
import { Container } from "./components/ui";
import { HOST_APP_URL, SITE_CONFIG } from "./lib/constants";
import { usePageMeta } from "./hooks/use-page-meta";

const LINK_CLASS =
  "text-brand-600 hover:text-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 rounded underline underline-offset-2 decoration-gray-400 hover:decoration-current focus:decoration-current";

const Email = () => (
  <a href={`mailto:${SITE_CONFIG.email}`} className={LINK_CLASS}>
    {SITE_CONFIG.email}
  </a>
);

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="space-y-4 text-gray-700 leading-relaxed">
    <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
    {children}
  </section>
);

const Part = ({ title }: { title: string }) => (
  <h2 className="text-3xl font-bold text-gray-900 pt-4 border-t border-gray-200">
    {title}
  </h2>
);

const List = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc list-inside space-y-2">{children}</ul>
);

export function TermsOfService() {
  const { t } = useTranslation();

  usePageMeta({
    title: t("pageTitles.termsOfService"),
    description: t("pageDescriptions.termsOfService"),
    path: "/terms",
    localised: false,
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
                  {t("termsOfService.title")}
                </h1>
                <p className="text-gray-600">
                  {t("termsOfService.lastUpdated")}
                </p>
              </header>

              {/* English only, so the legal meaning cannot drift between
                  translations. */}
              <div className="space-y-10">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    These Terms govern your use of Trawise ("we"): the mobile
                    apps, the host dashboard at{" "}
                    <a
                      href={HOST_APP_URL}
                      className={LINK_CLASS}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      host.trawise.org
                    </a>{" "}
                    and this website (together, the "Service"). By creating an
                    account or using the Service you agree to them.
                  </p>
                  <p>
                    A <strong>traveller</strong> posts a request for somewhere
                    to stay. A <strong>place</strong> is an accommodation listed
                    on the Service, managed by the organisation that added it.
                    Sections 2 to 4 apply to travellers, 5 to 7 to places, and
                    the rest to everyone.
                  </p>
                </div>

                <Section title="1. Our role">
                  <p>
                    Trawise is a marketplace that works in reverse: a traveller
                    posts a request, and nearby places answer with offers. We
                    provide the platform for that exchange. We are not a party
                    to any booking and not a travel agency or accommodation
                    provider. A stay agreed through the Service is a contract
                    between the traveller and the place. We take no payment for
                    stays, hold no deposits, and do not guarantee that a place
                    is available, accurately described, lawfully operated or
                    suitable for you.
                  </p>
                </Section>

                <Part title="Travellers" />

                <Section title="2. Requests">
                  <p>
                    A request is an invitation for places to respond; posting
                    one commits you to nothing. It must describe a stay you
                    actually want, because places answer on the dates, party
                    and budget you post. You may change a request until a place
                    has answered it, and cancel one that is not booked at any
                    time.
                  </p>
                </Section>

                <Section title="3. Offers and bookings">
                  <p>
                    An offer is a genuine proposal to host you on the stated
                    dates at the stated price. A booking exists once you accept
                    an offer through the Service; from then on your agreement is
                    with the place.
                  </p>
                  <p>
                    Either side may cancel a confirmed booking through the
                    Service, giving a reason, and the other side is told at
                    once. A cancelled booking closes the request.
                  </p>
                  <p>
                    Payment, deposits, taxes, house rules and cancellation terms
                    are matters between you and the place. We do not collect,
                    hold, refund or mediate money.
                  </p>
                </Section>

                <Section title="4. Your responsibilities as a traveller">
                  <List>
                    <li>Honour a booking, or cancel it as soon as you know you cannot.</li>
                    <li>Follow the house rules and the law where you stay.</li>
                    <li>
                      Answer for the people you bring and for any damage during
                      the stay.
                    </li>
                    <li>
                      Satisfy yourself about a place before you book. We do not
                      inspect places, and a listing is not our endorsement.
                    </li>
                  </List>
                </Section>

                <Part title="Places" />

                <Section title="5. Listing a place">
                  <p>By listing a place you confirm that:</p>
                  <List>
                    <li>
                      you are entitled to offer it, and doing so complies with
                      the law, your lease, your building rules and any
                      registration, licensing or tax obligation;
                    </li>
                    <li>
                      the listing, its photographs, capacity, facilities, house
                      rules, prices and availability are accurate and kept
                      current;
                    </li>
                    <li>
                      the contact details you publish are yours to publish.
                    </li>
                  </List>
                  <p>
                    Your legal obligations are yours. We give no tax, licensing
                    or regulatory advice.
                  </p>
                </Section>

                <Section title="6. Answering requests">
                  <p>
                    An offer is a commitment. Offer only a stay you can deliver
                    at a price you will honour, and honour a booking once it is
                    confirmed, or cancel it through the Service, with the
                    reason, the moment you know you cannot. Quoted prices must
                    be complete: anything a traveller will pay belongs in the
                    offer or the listing, not on arrival. You must not
                    discriminate on any ground protected by law.
                  </p>
                </Section>

                <Section title="7. Organisations">
                  <p>
                    A place belongs to the organisation that added it, not to
                    the person who created the account. You are responsible for
                    the colleagues you invite and for removing their access when
                    they leave. Anyone acting for an organisation confirms they
                    are authorised to accept these Terms on its behalf.
                  </p>
                  <p>
                    A traveller's details reach you so you can answer their
                    request and host their stay. Use them for that only and
                    handle them under data protection law; for that use you are
                    the controller.
                  </p>
                </Section>

                <Part title="Everyone" />

                <Section title="8. Your account">
                  <List>
                    <li>Give accurate details and keep them current.</li>
                    <li>Confirm your email address; the account is not usable until you do.</li>
                    <li>Keep your password to yourself. You answer for what is done through your account.</li>
                    <li>One person, one account.</li>
                  </List>
                </Section>

                <Section title="9. Content">
                  <p>
                    You keep ownership of what you submit and grant us a
                    non-exclusive, worldwide, royalty-free licence to host,
                    store, reproduce and display it to operate and promote the
                    Service. You confirm you hold the rights to do so. We may
                    remove content that breaches these Terms.
                  </p>
                </Section>

                <Section title="10. Messages">
                  <p>
                    Messages between a traveller and a place are readable by the
                    members of the organisation with access to that listing, and
                    by us where needed to look into a problem, enforce these
                    Terms or comply with the law. Keep them to the stay and do
                    not send payment credentials.
                  </p>
                </Section>

                <Section title="11. Reviews">
                  <p>
                    A review may only be written by someone who completed the
                    stay it describes and must reflect a genuine experience.
                    Neither side sees the other's review before writing its
                    own. Offering anything in exchange for a review, or for its
                    removal, is a breach. We do not edit reviews and do not
                    remove one because its subject dislikes it, but we may
                    remove one that breaches these Terms.
                  </p>
                </Section>

                <Section title="12. Acceptable use">
                  <p>You must not:</p>
                  <List>
                    <li>
                      post anything unlawful, fraudulent, misleading, harassing,
                      hateful or infringing;
                    </li>
                    <li>
                      impersonate anyone, or misrepresent who is offering or
                      requesting a stay;
                    </li>
                    <li>
                      take a conversation off the Service to avoid these Terms,
                      or solicit users for another service;
                    </li>
                    <li>
                      use another user's details for anything but the stay they
                      relate to;
                    </li>
                    <li>
                      scrape, probe, overload, reverse engineer or interfere
                      with the Service, or reach it through anything other than
                      our own apps and dashboard;
                    </li>
                    <li>
                      upload malicious code or images you do not hold the
                      rights to.
                    </li>
                  </List>
                </Section>

                <Section title="13. Reporting a problem">
                  <p>
                    If a listing, message, review or account breaks these Terms
                    or the law, write to <Email /> and say what and where. We
                    look into every report and may remove content or restrict
                    an account. Reporting in bad faith is itself a breach. Where
                    someone is at risk, contact the emergency services.
                  </p>
                </Section>

                <Section title="14. The Service and the apps">
                  <p>
                    We may change, suspend or discontinue any part of the
                    Service, and it may set limits on use; the apps state those
                    where they apply. You have a personal, non-transferable,
                    revocable licence to use the apps on devices you control.
                    The apps update themselves so that everyone runs a version
                    we can support. App store terms apply to the download; the
                    stores are not parties to these Terms. Maps and place search
                    are provided by Google under Google's terms.
                  </p>
                </Section>

                <Section title="15. Leaving and suspension">
                  <p>
                    You may delete your account at any time from Settings in
                    either app. Deletion anonymises it: your profile details are
                    removed and your sign-in stops working, while stays,
                    messages and reviews remain on the other party's record with
                    nothing that identifies you. It cannot be undone. The last
                    owner of an organisation hands it over first; places belong
                    to their organisation.
                  </p>
                  <p>
                    We may suspend or close an account that breaches these
                    Terms, harms another user, or where the law requires it, and
                    will say why where it is reasonable to do so.
                  </p>
                </Section>

                <Section title="16. Liability">
                  <p>
                    The Service is provided as it is. We do not verify every
                    user or inspect the places listed, and make no warranty
                    about their conduct, safety or legality. To the extent the
                    law allows, we are not liable for indirect or consequential
                    loss, or for any dispute, injury or loss arising from a stay
                    agreed through the Service. Nothing here limits liability
                    that cannot lawfully be limited or removes your statutory
                    rights as a consumer.
                  </p>
                </Section>

                <Section title="17. Privacy and changes">
                  <p>
                    Our{" "}
                    <LocaleLink to="/privacy-policy" className={LINK_CLASS}>
                      Privacy Policy
                    </LocaleLink>{" "}
                    forms part of these Terms. We may revise the Terms; the
                    current version is always here and linked from the apps,
                    dated at the top. Where a change materially affects you, we
                    give reasonable notice first, and continued use after that
                    is acceptance.
                  </p>
                </Section>

                <Section title="18. Governing law">
                  <p>
                    These Terms are governed by the law of Sweden, and Swedish
                    courts have jurisdiction. A consumer resident elsewhere in
                    the EU keeps the mandatory protections of their own country
                    and may bring proceedings there. A dispute about a stay is
                    between the traveller and the place; a dispute with us
                    starts with an email to <Email />.
                  </p>
                </Section>

                <Section title="19. General">
                  <p>
                    These Terms and the Privacy Policy are the whole agreement
                    about the Service. If a provision is unenforceable, the rest
                    stands; not enforcing one is not a waiver. You may not
                    transfer your rights; we may transfer ours if the Service is
                    sold or merged. The English text governs.
                  </p>
                </Section>

                <Section title="20. Contact">
                  <p>
                    <Email />
                    <br />
                    {SITE_CONFIG.name}, {SITE_CONFIG.location}
                  </p>
                </Section>

                <p className="text-gray-700 leading-relaxed">
                  How the product works, step by step, is in the{" "}
                  <LocaleLink to="/faq" className={LINK_CLASS}>
                    FAQ
                  </LocaleLink>
                  .
                </p>
              </div>

              <div className="mt-12">
                <BackLink to="/">{t("termsOfService.backToHome")}</BackLink>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
