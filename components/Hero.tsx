import { Accent, BookButton, Reveal } from "./ui";
import { Calendar, Clock, Home, PhoneIn, PhoneOut, Plug, Shield, Wave } from "./icons";

const stats = [
  { value: "24/7", label: "Calls answered, nights & weekends" },
  { value: "<1s", label: "Average pickup time" },
  { value: "30", sup: "days", label: "From kickoff to live system" },
];

const badges = [
  { icon: Home, label: "Built for home services" },
  { icon: Calendar, label: "Google & Outlook calendars" },
  { icon: Plug, label: "CRM integrations" },
  { icon: Shield, label: "Consent-first outreach" },
  { icon: Clock, label: "Live in 30 days" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Backdrop */}
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(232,89,12,0.14),transparent_65%)]" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-20 pt-12 sm:px-8 md:pt-16 lg:grid-cols-[1.08fr_1fr] lg:gap-16 lg:pb-28">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-ember/20 bg-ember-50 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ember-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-soft absolute inset-0 rounded-full bg-ember" />
                <span className="relative h-2 w-2 rounded-full bg-ember" />
              </span>
              AI voice agents for home services
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-[44px] font-medium leading-[1.02] tracking-[-0.045em] text-ink sm:text-[60px] lg:text-[70px]">
              Turn missed calls into <Accent>booked jobs.</Accent>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.65] text-ink-soft sm:text-[18px]">
              ReplyWell installs AI voice agents that call your dead leads, answer every inbound call
              24/7, qualify prospects, and book appointments straight onto your calendar — so your
              team can focus on the work.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <BookButton size="lg">Book a strategy call</BookButton>
              <a href="#agent" className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft hover:text-ink">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white transition-colors group-hover:border-ember/40">
                  <Wave className="h-4 w-4 text-ember" />
                </span>
                See a live call
              </a>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={300 + i * 80}>
                <div className="h-full rounded-2xl border border-line bg-white px-3 py-5 text-center shadow-[0_1px_0_rgba(14,26,43,0.03),0_12px_30px_-20px_rgba(14,26,43,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(14,26,43,0.3)] sm:px-5 sm:py-6">
                  <div className="text-[30px] font-medium leading-none tracking-[-0.04em] text-ink sm:text-[40px]">
                    {s.value}
                    {s.sup && <span className="ml-1 align-top font-sans text-[12px] text-ember sm:text-[13px]">{s.sup}</span>}
                  </div>
                  <div className="mt-3 text-[11.5px] leading-snug text-muted sm:text-[12.5px]">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="min-w-0">
          <HeroVisual />
        </Reveal>
      </div>

      {/* Trust badges */}
      <div className="relative border-y border-line bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 sm:px-8">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-[14px] font-medium text-ink-soft">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ember-50 text-ember">
                <Icon className="h-4 w-4" />
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const bars = [10, 22, 34, 18, 40, 28, 46, 24, 36, 16, 30, 44, 20, 32, 12];
  return (
    <div className="relative mx-auto aspect-[4/5.2] sm:aspect-[4/4.4] w-full max-w-[540px] overflow-hidden rounded-[28px] bg-night shadow-[0_40px_80px_-30px_rgba(10,19,34,0.6)]">
      {/* glows & rings */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(232,89,12,0.28),transparent_55%)]" />
      {[220, 320, 430, 560].map((s) => (
        <div
          key={s}
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
          style={{ width: s, height: s }}
        />
      ))}

      {/* Voice orb */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-36 w-36 sm:h-40 sm:w-40">
          <span className="animate-ping-soft absolute inset-0 rounded-full bg-ember/40" />
          <span className="animate-ping-soft absolute inset-0 rounded-full bg-ember/30 [animation-delay:1.2s]" />
          <div className="relative grid h-full w-full place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffb27a,#e8590c_55%,#7a2a03)] shadow-[0_0_80px_rgba(232,89,12,0.55)]">
            <div className="flex h-12 items-center gap-[3px]">
              {bars.slice(0, 9).map((h, i) => (
                <span
                  key={i}
                  className="animate-wave w-[4px] rounded-full bg-white/90"
                  style={{ height: h, animationDelay: `${i * 0.09}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <Chip className="left-4 top-5 sm:left-6 sm:top-7" delay="0s" icon={<PhoneIn className="h-4 w-4" />} tone="mint" title="Inbound call answered" sub="2:14 AM · 0.8s pickup" />
      <Chip className="right-4 top-[63%] sm:right-5" delay="1.5s" icon={<PhoneOut className="h-4 w-4" />} tone="ember" title="Old lead re-engaged" sub="Estimate from 14 mo ago" />
      <Chip className="bottom-6 left-4 sm:bottom-8 sm:left-6" delay="3s" icon={<Calendar className="h-4 w-4" />} tone="mint" title="Appointment booked" sub="Tue 9:00 AM · AC tune-up" />

      {/* Bottom waveform strip */}
      <div className="absolute bottom-0 right-0 hidden items-end gap-[3px] p-6 opacity-40 sm:flex">
        {bars.map((h, i) => (
          <span key={i} className="animate-wave w-[3px] rounded-full bg-ember" style={{ height: h / 1.6, animationDelay: `${i * 0.07}s` }} />
        ))}
      </div>
    </div>
  );
}

function Chip({
  className,
  delay,
  icon,
  title,
  sub,
  tone,
}: {
  className: string;
  delay: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  tone: "mint" | "ember";
}) {
  return (
    <div className={`animate-float absolute ${className}`} style={{ animationDelay: delay }}>
      <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-3.5 py-3 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.5)] backdrop-blur">
        <span
          className={`grid h-9 w-9 place-items-center rounded-xl ${
            tone === "mint" ? "bg-emerald-50 text-emerald-600" : "bg-ember-50 text-ember"
          }`}
        >
          {icon}
        </span>
        <div>
          <div className="text-[13.5px] font-medium text-ink">{title}</div>
          <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{sub}</div>
        </div>
      </div>
    </div>
  );
}
