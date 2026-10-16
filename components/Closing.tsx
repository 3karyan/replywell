import { CONTACT_EMAIL, BOOKING_URL, NAV_LINKS } from "@/lib/site";
import { Accent, BookButton, Logo, Reveal } from "./ui";
import { Clock, Flag, Shield, Trend } from "./icons";

const points = [
  { icon: Clock, title: "Fifteen minutes", sub: "A working session, not a sales pitch." },
  { icon: Trend, title: "Missed-revenue estimate", sub: "What unanswered calls cost you today." },
  { icon: Shield, title: "You own everything", sub: "Numbers, scripts, recordings, data." },
  { icon: Flag, title: "Live in 30 days", sub: "Typical timeline from kickoff." },
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(232,89,12,0.22),transparent_65%)]" />
      <div className="relative mx-auto max-w-[1000px] px-5 py-24 text-center sm:px-8 md:py-32">
        <Reveal>
          <div className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#ff9a5c]">
            <span className="h-px w-6 bg-ember/70" /> The next step
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-6 max-w-[780px] text-[40px] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[60px]">
            Let&apos;s find the jobs you&apos;re <Accent dark>already losing.</Accent>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.65] text-white/60">
            We&apos;ll look at your call volume, your lead list and your calendar — and tell you honestly
            whether ReplyWell is a fit. If it isn&apos;t, we&apos;ll tell you what to do instead.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-14 grid overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] text-left backdrop-blur md:grid-cols-[1.3fr_1fr]">
            <div className="grid sm:grid-cols-2">
              {points.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex gap-3 border-b border-white/[0.07] p-5 sm:[&:nth-child(odd)]:border-r">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-ember/30 bg-ember/10 text-[#ff9a5c]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[14.5px] font-medium">{title}</div>
                    <div className="mt-0.5 text-[12.5px] text-white/50">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-4 border-t border-white/10 p-7 md:border-l md:border-t-0">
              <BookButton variant="ember" size="lg" className="w-full">
                Book a strategy call
              </BookButton>
              <div className="flex flex-wrap items-center justify-center gap-x-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                <span className="text-mint">● Open slots this week</span> · No card · No commitment
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#070e1a] pb-28 text-white/70">
      <div className="mx-auto max-w-[1200px] px-5 pt-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-[300px] text-[14px] leading-[1.65] text-white/50">
              AI voice agents for home service businesses. Every call answered, every lead followed up,
              every job booked.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#ff9a5c]">Contact</div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 block text-[14px] text-white/80 hover:text-white">
              {CONTACT_EMAIL}
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-2 block text-[14px] text-white/80 hover:text-white">
              Book a strategy call →
            </a>
          </div>
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#ff9a5c]">Explore</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-[14px] text-white/70 hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} ReplyWell. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy policy</a>
            <a href="/terms" className="hover:text-white">Terms of service</a>
          </div>
        </div>
        <p className="mt-6 max-w-[900px] text-[11.5px] leading-[1.6] text-white/30">
          Results vary by business, market and call volume. Testimonials and figures shown on this site
          are illustrative until replaced with verified client results.
        </p>
      </div>
    </footer>
  );
}
