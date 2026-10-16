import { Accent, BookButton, Reveal, SectionLabel } from "./ui";
import { Check } from "./icons";

const offers = [
  {
    path: "Path 01 · Reactivate",
    title: "Wake up your",
    accent: "dead leads.",
    body: "A done-for-you campaign that calls every old lead and unsold estimate in your CRM and books the ones ready to move — revenue you already paid to generate.",
    bestFor: "Contractors sitting on a big lead list",
    items: [
      "Full CRM lead audit & cleanup",
      "AI calling campaign on old leads & estimates",
      "Custom scripts + objection handling",
      "Appointments booked to your calendar",
      "Call recordings & results report",
    ],
    dark: false,
  },
  {
    path: "Path 02 · Full System",
    title: "Never miss",
    accent: "another call.",
    body: "The complete ReplyWell system: a 24/7 inbound AI receptionist, qualification, booking and ongoing reactivation — installed, trained and managed for you.",
    bestFor: "Busy shops that can't answer every call",
    items: [
      "Everything in Reactivate",
      "24/7 inbound AI receptionist",
      "Qualification + live transfer for emergencies",
      "Calendar & CRM integration",
      "SMS confirmations & reminders",
      "Monthly optimization + dedicated manager",
    ],
    dark: true,
  },
];

export default function Offers() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <SectionLabel num="04">Programs</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 text-[38px] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[54px]">
            Two ways in. <Accent>One full calendar.</Accent>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {offers.map((o, i) => (
            <Reveal key={o.path} delay={i * 120} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-[26px] p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10 ${
                  o.dark
                    ? "bg-night text-white shadow-[0_40px_80px_-35px_rgba(10,19,34,0.7)] hover:shadow-[0_50px_90px_-35px_rgba(232,89,12,0.45)]"
                    : "border border-line bg-white hover:shadow-[0_30px_60px_-30px_rgba(14,26,43,0.3)]"
                }`}
              >
                {o.dark && (
                  <>
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[26px]">
                      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(232,89,12,0.35),transparent_65%)]" />
                    </div>
                    <span className="absolute -top-3.5 right-8 rounded-full bg-ember px-3.5 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_-8px_rgba(232,89,12,0.8)]">
                      Most popular
                    </span>
                  </>
                )}
                <div className="relative flex h-full flex-col">
                  <div className={`font-mono text-[11px] uppercase tracking-[0.22em] ${o.dark ? "text-[#ff9a5c]" : "text-ember-600"}`}>
                    {o.path}
                  </div>
                  <h3 className="mt-5 text-[34px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[40px]">
                    {o.title} <Accent dark={o.dark}>{o.accent}</Accent>
                  </h3>
                  <p className={`mt-5 max-w-[460px] text-[15.5px] leading-[1.65] ${o.dark ? "text-white/65" : "text-ink-soft"}`}>
                    {o.body}
                  </p>

                  <div className={`mt-7 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-y py-4 ${o.dark ? "border-white/10" : "border-line"}`}>
                    <span className={`font-mono text-[10.5px] uppercase tracking-[0.2em] ${o.dark ? "text-white/45" : "text-muted"}`}>Best for</span>
                    <span className="text-[15px]">{o.bestFor}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {o.items.map((it) => (
                      <li key={it} className={`flex items-start gap-3 text-[14.5px] ${o.dark ? "text-white/80" : "text-ink-soft"}`}>
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${o.dark ? "text-[#ff9a5c]" : "text-ember"}`} />
                        {it}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-9">
                    <BookButton variant={o.dark ? "ember" : "ink"}>Book a discovery call</BookButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
