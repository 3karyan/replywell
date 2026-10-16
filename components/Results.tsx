"use client";

import { useState } from "react";
import { Accent, Reveal, SectionLabel } from "./ui";

// ⚠️ PLACEHOLDER TESTIMONIALS — replace every entry with real client results
// (and real names, with permission) before launch.
type Cat = "speed" | "reactivation" | "booked" | "revenue";

const TESTIMONIALS: { name: string; role: string; quote: string; metric: string; detail: string; cat: Cat }[] = [
  { name: "[Client name]", role: "HVAC owner, Phoenix", cat: "booked", quote: "Placeholder — e.g. the AI booked jobs over a holiday weekend while the office was closed.", metric: "[XX] jobs", detail: "first weekend" },
  { name: "[Client name]", role: "Roofing contractor, Dallas", cat: "reactivation", quote: "Placeholder — e.g. called through an old estimate list and turned dead quotes into signed roofs.", metric: "[XX] revived", detail: "old estimates" },
  { name: "[Client name]", role: "Remodeling, Denver", cat: "speed", quote: "Placeholder — e.g. first booked appointment within days of going live.", metric: "1st booking", detail: "day [X]" },
  { name: "[Client name]", role: "Plumbing, Atlanta", cat: "booked", quote: "Placeholder — e.g. after-hours emergency calls now get answered and dispatched instead of going to voicemail.", metric: "[XX]% answered", detail: "after hours" },
  { name: "[Client name]", role: "HVAC, Tampa", cat: "revenue", quote: "Placeholder — e.g. added revenue in the first 90 days from calls that used to be missed.", metric: "+$[XX]K", detail: "90 days" },
  { name: "[Client name]", role: "Roofing, Charlotte", cat: "speed", quote: "Placeholder — e.g. storm season call spike handled without hiring another CSR.", metric: "[XXX] calls", detail: "storm week" },
  { name: "[Client name]", role: "Remodeling, Austin", cat: "reactivation", quote: "Placeholder — e.g. reactivation campaign paid for the program in the first month.", metric: "[X]× ROI", detail: "month 1" },
  { name: "[Client name]", role: "Electrical, Nashville", cat: "booked", quote: "Placeholder — e.g. the qualification step means the team only drives out to real jobs.", metric: "[XX] appts", detail: "qualified" },
  { name: "[Client name]", role: "HVAC, Columbus", cat: "revenue", quote: "Placeholder — e.g. maintenance-plan renewals booked automatically by the agent.", metric: "+$[XX]K", detail: "renewals" },
  { name: "[Client name]", role: "Landscaping, Raleigh", cat: "speed", quote: "Placeholder — e.g. response time went from hours to seconds.", metric: "<1s", detail: "pickup" },
  { name: "[Client name]", role: "Windows & doors, Boise", cat: "reactivation", quote: "Placeholder — e.g. leads from two years ago came back and booked consultations.", metric: "[XX] consults", detail: "from old leads" },
  { name: "[Client name]", role: "Roofing, Kansas City", cat: "revenue", quote: "Placeholder — e.g. clean unit economics on cost per booked inspection.", metric: "$[XX]", detail: "per booked job" },
];

const FILTERS: { key: "all" | Cat; label: string }[] = [
  { key: "all", label: "All results" },
  { key: "speed", label: "Speed to lead" },
  { key: "reactivation", label: "Reactivation" },
  { key: "booked", label: "Booked jobs" },
  { key: "revenue", label: "Revenue" },
];

const CAT_LABEL: Record<Cat, string> = {
  speed: "Speed",
  reactivation: "Reactivation",
  booked: "Booked",
  revenue: "Revenue",
};

export default function Results() {
  const [active, setActive] = useState<"all" | Cat>("all");
  const shown = TESTIMONIALS.filter((t) => active === "all" || t.cat === active);

  return (
    <section id="results" className="border-b border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <SectionLabel num="05">Wall of Results</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-[640px] text-[38px] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[54px]">
            What owners <Accent>actually</Accent> say.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-dashed border-ember/40 bg-ember-50 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ember-600">
            ⚠ Placeholder testimonials — replace with real client results
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-300 ${
                  active === f.key
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-white text-ink-soft hover:border-ink/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {shown.map((t, i) => (
            <article
              key={t.role}
              className="animate-msg-in group mb-4 break-inside-avoid rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/30 hover:shadow-[0_24px_50px_-28px_rgba(14,26,43,0.35)]"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-[14.5px] text-ink">
                  <span className="font-medium">{t.name}</span> <span className="text-muted">· {t.role}</span>
                </div>
                <span className="shrink-0 rounded-full bg-ember-50 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ember-600">
                  {CAT_LABEL[t.cat]}
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-[1.6] text-ink-soft">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.14em]">
                <span className="font-semibold text-ink">{t.metric}</span>
                <span className="text-muted">· {t.detail}</span>
                <span className="ml-auto rounded border border-dashed border-muted/40 px-1.5 py-0.5 text-[9px] text-muted">
                  Placeholder
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
