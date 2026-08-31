import { useCallback, useRef, useState, type KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";

import { PhoneFrame } from "./device-frame";
import { Section, SectionHeading } from "./ui";

/** Each step and the screen that proves it. */
const STEPS = [
  { key: "ask", src: "/app/step-when.webp" },
  { key: "answers", src: "/app/step-answers.webp" },
  { key: "book", src: "/app/step-book.webp" },
] as const;

// Every phone asset is a whole 1080x2424 screen scaled down, so they all share
// the device's own proportions and one pair of intrinsic dimensions describes
// them all.
const SHOT_WIDTH = 620;
const SHOT_HEIGHT = 1392;

/** How far a horizontal drag must travel before it counts as a swipe, in px. */
const SWIPE_THRESHOLD = 40;

/**
 * Where a screen sits in the deck, by its distance from the one on show.
 * Everything past the peeking card parks in the peek's place at zero opacity,
 * so it fades in there rather than arriving from somewhere else.
 */
function deckPosition(offset: number): string {
  if (offset === 0)
    return "z-20 opacity-100 translate-x-0 translate-y-0 scale-100";
  if (offset === 1)
    return "z-10 opacity-40 translate-x-12 translate-y-6 scale-90";
  return "z-0 opacity-0 translate-x-12 translate-y-6 scale-90";
}

interface ArrowButtonProps {
  direction: "left" | "right";
  label: string;
  onClick: () => void;
}

function ArrowButton({ direction, label, onClick }: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/**
 * A deck of app screens with the copy beside it changing with the one on show.
 * Dots are a tab set and the copy blocks their panels, so every description
 * stays in the DOM for a crawler and for find-on-page. It does not autoplay.
 */
export function HowItWorks() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dragStart = useRef<number | null>(null);

  // Moving focus with the selection is what the tab pattern requires: the dots
  // are one stop in the tab order, and the arrow keys move within them.
  const select = useCallback((index: number, focus = false) => {
    const next = (index + STEPS.length) % STEPS.length;
    setActive(next);
    if (focus) dotRefs.current[next]?.focus();
  }, []);

  const onDotKeyDown = (event: KeyboardEvent, index: number) => {
    const moves: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: STEPS.length - 1,
    };
    const target = moves[event.key];
    if (target === undefined) return;
    event.preventDefault();
    select(target, true);
  };

  return (
    <Section id="how-it-works" tone="muted" labelledBy="how-it-works-heading">
      <SectionHeading
        id="how-it-works-heading"
        eyebrow={t("travellers.eyebrow")}
        title={t("travellers.title")}
        subtitle={t("travellers.subtitle")}
      />

      {/* Column sized to the deck, not to half the width, or the phone floats
          with a gap wider than the gutter. It leads here and trails in the
          hero, so the two sections do not repeat one arrangement. */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Right padding reserves the room the peeking card needs. It is
                translated 48px out and scaled to 0.9, so it reaches about 37px
                past the phone; without the reserve it escaped the auto-sized column and
                the page scrolled sideways from lg up. Only from lg: stacked, the
                column is full width and already has the room, and the padding
                would just push the phone off centre. The controls sit
                inside this box too, so they stay centred on the phone rather
                than on the padded column. */}
          <div className="flex flex-col items-center lg:pr-10">
            {/* Fixed aspect with the screens placed inside it, so switching
                moves cards in place instead of reflowing the section. */}
            <div
              // A definite width, not w-full+max-w: the column is auto-sized, so a
              // percentage width would resolve against the widest sibling — the
              // control row — and shrink the phone to fit its own buttons.
              className="relative w-56 sm:w-64 lg:w-72 touch-pan-y"
              style={{ aspectRatio: `${SHOT_WIDTH} / ${SHOT_HEIGHT}` }}
              onPointerDown={(event) => {
                dragStart.current = event.clientX;
              }}
              onPointerUp={(event) => {
                const start = dragStart.current;
                dragStart.current = null;
                if (start === null) return;
                const travelled = event.clientX - start;
                if (Math.abs(travelled) < SWIPE_THRESHOLD) return;
                select(active + (travelled < 0 ? 1 : -1));
              }}
            >
              {STEPS.map(({ key, src }, index) => {
                const offset = (index - active + STEPS.length) % STEPS.length;

                return (
                  <div
                    key={key}
                    className={`absolute inset-0 transition-all duration-300 ease-out motion-reduce:transition-none ${deckPosition(offset)}`}
                    // Only the screen on show describes itself; the card behind
                    // is decoration and would otherwise be read out too.
                    aria-hidden={offset !== 0}
                  >
                    <PhoneFrame>
                      <img
                        src={src}
                        alt={t(`travellers.steps.${key}.imageAlt`)}
                        width={SHOT_WIDTH}
                        height={SHOT_HEIGHT}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="block w-full h-auto"
                      />
                    </PhoneFrame>
                  </div>
                );
              })}
            </div>

            {/* Under the deck, not flanking it: flanking needs ~100px clear
                either side, which a phone viewport does not have. */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <ArrowButton
                direction="left"
                label={t("travellers.previous")}
                onClick={() => select(active - 1)}
              />

              <div
                role="tablist"
                aria-label={t("travellers.tablist")}
                className="flex items-center gap-2"
              >
                {STEPS.map(({ key }, index) => {
                  const selected = index === active;

                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      id={`step-dot-${key}`}
                      aria-selected={selected}
                      aria-controls={`step-panel-${key}`}
                      tabIndex={selected ? 0 : -1}
                      // The step's own title, not "screenshot 2" — a dot should
                      // say where it goes.
                      aria-label={t(`travellers.steps.${key}.title`)}
                      ref={(node) => {
                        dotRefs.current[index] = node;
                      }}
                      onClick={() => select(index)}
                      onKeyDown={(event) => onDotKeyDown(event, index)}
                      // Padded to a 44px target while the mark itself stays 10px:
                      // a 10px tap target fails WCAG 2.5.8 on a phone.
                      className="group p-4 -m-2 focus:outline-none"
                    >
                      <span
                        className={`block h-2.5 rounded-full transition-all group-focus-visible:ring-2 group-focus-visible:ring-brand-600 group-focus-visible:ring-offset-2 ${
                          selected
                            ? "w-8 bg-brand-600"
                            : "w-2.5 bg-gray-300 group-hover:bg-gray-400"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <ArrowButton
                direction="right"
                label={t("travellers.next")}
                onClick={() => select(active + 1)}
              />
            </div>
          </div>
        </div>

        {/* Stacked in one grid cell so the column is always as tall as the
            longest description and changing step cannot resize the section.
            `invisible` leaves the accessibility tree but keeps the height. */}
        <div className="grid">
          {STEPS.map(({ key }, index) => (
            <div
              key={key}
              role="tabpanel"
              id={`step-panel-${key}`}
              aria-labelledby={`step-dot-${key}`}
              aria-hidden={index !== active}
              className={`col-start-1 row-start-1 space-y-4 text-center lg:text-left transition-opacity duration-300 motion-reduce:transition-none ${
                index === active
                  ? "opacity-100"
                  : "invisible opacity-0 pointer-events-none"
              }`}
            >
              <div
                className="flex items-center justify-center w-11 h-11 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-brand-600 to-brand-700 text-white text-lg font-bold shadow-md shadow-brand-600/20"
                aria-hidden="true"
              >
                {index + 1}
              </div>
              <h3 className="font-bold text-2xl md:text-3xl text-gray-900 tracking-tight leading-snug">
                {t(`travellers.steps.${key}.title`)}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t(`travellers.steps.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
