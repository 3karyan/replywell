import { Accent, BookButton, Reveal, SectionLabel } from "./ui";
import { Brain, Calendar, Transfer, Wave } from "./icons";
import LiveCall from "./LiveCall";

const features = [
  { icon: Wave, title: "Sounds human", body: "Natural voice, real pauses, handles interruptions. Callers talk to it like they would your best CSR." },
  { icon: Brain, title: "Knows your business", body: "Trained on your services, pricing ranges, service area, warranties and FAQs — in your words." },
  { icon: Calendar, title: "Books in real time", body: "Checks live availability, books the slot, and texts a confirmation before the call even ends." },
  { icon: Transfer, title: "Hands off when it matters", body: "Burst pipe or big commercial job? It live-transfers to your on-call tech with a full summary." },
];

export default function Agent() {
  return (
    <section id="agent" className="relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(232,89,12,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(56,104,190,0.18),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <SectionLabel num="02" dark>AI Voice Agent</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[38px] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[54px]">
              The front desk that <Accent dark>never</Accent> clocks out.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.65] text-white/65">
              Every call gets answered — in under a second, day or night. Your agent is trained on your
              services and pricing, qualifies the caller, and books the job. It confirms, it reminds,
              it follows up.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={200 + i * 80} className="h-full">
                <div className="group h-full rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-ember/30 hover:bg-white/[0.06]">
                  <f.icon className="h-5 w-5 text-[#ff9a5c]" />
                  <h3 className="mt-4 text-[17px] font-medium tracking-[-0.01em]">{f.title}</h3>
                  <div className="my-3 h-px w-6 bg-ember/60 transition-all duration-500 group-hover:w-12" />
                  <p className="text-[14px] leading-[1.6] text-white/55">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-10 flex flex-wrap gap-3">
              <BookButton variant="ember">Book a call</BookButton>
              <a
                href="#process"
                className="inline-flex h-12 items-center rounded-xl border border-white/15 px-6 text-[14px] font-medium text-white/85 transition-all hover:border-white/35 hover:bg-white/5"
              >
                How we deploy it
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <LiveCall />
        </Reveal>
      </div>
    </section>
  );
}
