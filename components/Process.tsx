import { Accent, Reveal, SectionLabel } from "./ui";

const weeks = [
  {
    week: "Week 01",
    phase: "Audit",
    title: "Call & lead audit",
    body: "We listen to your calls, map your services, pricing and service area, and pull every dead lead and old estimate out of your CRM.",
  },
  {
    week: "Week 02",
    phase: "Build",
    title: "Build & train your AI",
    body: "Scripts written in your voice, agent trained on your business, calendar and CRM wired in. You test it before a single customer hears it.",
  },
  {
    week: "Week 03",
    phase: "Launch",
    title: "Go live",
    body: "Inbound calls route to your agent and reactivation campaigns start dialing. First booked jobs typically land this week.",
    highlight: true,
  },
  {
    week: "Week 04 → ∞",
    phase: "Optimize",
    title: "Optimize & scale",
    body: "Weekly call reviews, script tuning and new campaigns — seasonal pushes, maintenance plans, review requests. You get a dedicated point of contact.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-line bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <SectionLabel num="03">Process</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-[640px] text-[38px] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[54px]">
            Thirty days to a <Accent>fully-running</Accent> system.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Horizontal rail (desktop) */}
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-ink/15 lg:block" />
          {/* Vertical rail (mobile) */}
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-ink/15 lg:hidden" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {weeks.map((w, i) => (
              <Reveal key={w.week} delay={i * 120}>
                <div className="group relative pl-10 lg:pl-0">
                  <span
                    className={`absolute left-0 top-0 grid h-[15px] w-[15px] place-items-center rounded-full border-2 transition-transform duration-300 group-hover:scale-125 lg:relative ${
                      w.highlight
                        ? "border-ember bg-ember shadow-[0_0_0_6px_rgba(232,89,12,0.18)]"
                        : i === 0
                          ? "border-ink bg-ink"
                          : "border-ink bg-cream"
                    }`}
                  />
                  <div
                    className={`font-mono text-[11px] uppercase tracking-[0.2em] lg:mt-8 ${
                      w.highlight ? "text-ember-600" : "text-ink/60"
                    }`}
                  >
                    {w.week} · {w.phase}
                  </div>
                  <h3 className="mt-3 text-[22px] font-medium tracking-[-0.02em]">{w.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-soft">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
