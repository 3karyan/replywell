import { Accent, BookButton, Reveal } from "./ui";
import { Play } from "./icons";

// To add your real video later, replace the placeholder <div> in the player
// with an <iframe> (YouTube/Vimeo/Loom embed) or a <video> tag.

export default function Video() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ember-600">
              <span className="h-px w-6 bg-ember/60" /> Watch first · 2 min
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[36px] font-medium leading-[1.05] tracking-[-0.04em] sm:text-[48px]">
              See how it books jobs <Accent>while you sleep.</Accent>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[480px] text-[17px] leading-[1.65] text-ink-soft">
              A short walkthrough from our founder — what we install in the first 30 days, how the AI
              handles real calls, and exactly how contractors use it to fill their schedule.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <ul className="mt-7 space-y-3">
              {[
                "A real inbound call, start to booked appointment",
                "How dead-lead reactivation campaigns work",
                "What separates shops that scale vs. stall",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-ink-soft">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={280}>
            <BookButton className="mt-9">Book a discovery call</BookButton>
          </Reveal>
        </div>

        <Reveal delay={150} className="min-w-0">
          <div className="group overflow-hidden rounded-[22px] border border-ink/10 bg-night shadow-[0_40px_80px_-35px_rgba(10,19,34,0.6)] transition-transform duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/50">
                ReplyWell · Founder walkthrough
              </span>
            </div>
            {/* VIDEO PLACEHOLDER */}
            <div className="relative aspect-video bg-[radial-gradient(circle_at_30%_20%,rgba(232,89,12,0.35),transparent_55%),linear-gradient(135deg,#0f1c31,#0a1322)]">
              <div className="dot-grid absolute inset-0 opacity-40 invert" />
              <div className="absolute inset-0 grid place-items-center">
                <button
                  type="button"
                  aria-label="Play founder walkthrough (coming soon)"
                  className="relative grid h-20 w-20 place-items-center rounded-full bg-white/95 text-ember shadow-[0_20px_50px_-10px_rgba(232,89,12,0.7)] transition-transform duration-300 group-hover:scale-110"
                >
                  <span className="animate-ping-soft absolute inset-0 rounded-full bg-white/40" />
                  <Play className="relative ml-1 h-8 w-8" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <div className="font-serif text-[22px] italic text-white sm:text-[28px]">Founder walkthrough</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">Video placeholder · coming soon</div>
                </div>
                <span className="rounded-md bg-black/40 px-2 py-1 font-mono text-[11px] text-white/80">2:00</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">
            <span className="rounded-full bg-ember-100 px-2.5 py-1 font-semibold text-ember-600">Featured</span>
            From the founder · How home service businesses scale
          </div>
        </Reveal>
      </div>
    </section>
  );
}
