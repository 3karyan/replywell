"use client";

import { useState } from "react";
import { Accent, BookButton, Reveal, SectionLabel } from "./ui";
import { Plus } from "./icons";

const FAQS = [
  {
    q: "Will callers know they're talking to an AI?",
    a: "The voice is natural enough that most callers simply talk to it like a person. If someone asks, the agent is honest that it's an AI assistant for your company — and it can hand the call to a human at any point.",
  },
  {
    q: "Is it okay to call my old leads?",
    a: "We only reach out to people who previously inquired with your business, respect calling-hour rules, honor opt-outs instantly, and review your list with you before any campaign goes out. We'll walk through your specific situation on the strategy call.",
  },
  {
    q: "What happens with emergencies or complicated calls?",
    a: "You set the rules. Burst pipes, no-heat calls, big commercial jobs — the agent can live-transfer to your on-call tech or office with a summary, so nobody has to repeat themselves.",
  },
  {
    q: "Does it work with my CRM and calendar?",
    a: "Yes — Google Calendar, Outlook, and most popular home service CRMs and field-service tools. If you use something less common, we'll confirm compatibility on the call before you commit.",
  },
  {
    q: "How quickly can we launch?",
    a: "The full system is live within 30 days. Week one is the audit, week two we build and train, week three you go live — and from there we optimize every week.",
  },
  {
    q: "What does it cost?",
    a: "It depends on your call volume and which path fits you. We'll give you a straight number on the call — no long contracts disguised as onboarding fees.",
  },
  {
    q: "I'm not in HVAC or roofing. Can this work for me?",
    a: "We started with home services because missed calls cost them the most, but the system works for any business that runs on phone calls and appointments. Book a call and we'll tell you honestly if it's a fit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionLabel num="06">Questions</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[38px] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[50px]">
              Things owners want to know <Accent>first.</Accent>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[400px] text-[16px] leading-[1.65] text-ink-soft">
              Don&apos;t see your question? The fastest answer is a 15-minute call — we&apos;ll tell you
              whether this is a fit before either of us spends more time.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <BookButton className="mt-8" />
          </Reveal>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div
                  className={`rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen ? "border-ember/30 shadow-[0_20px_40px_-28px_rgba(14,26,43,0.35)]" : "border-line hover:border-ink/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-[16.5px] font-medium tracking-[-0.01em] text-ink">{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen ? "rotate-45 border-ember bg-ember text-white" : "border-line text-ink-soft"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-400 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-6 pb-6 pr-14 text-[15px] leading-[1.7] text-ink-soft">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
