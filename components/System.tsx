import { Accent, Reveal, SectionLabel } from "./ui";
import { Calendar, Filter, PhoneIn, PhoneOut } from "./icons";

const services = [
  {
    icon: PhoneOut,
    title: "Dead lead reactivation",
    body: "Your CRM is full of people who already raised their hand. Our agent calls every old estimate, unbooked quote and cold lead — naturally — and turns them back into jobs.",
    points: ["Calls aged leads & old estimates", "Handles objections & reschedules", "Hot replies routed to your team"],
  },
  {
    icon: PhoneIn,
    title: "24/7 inbound AI receptionist",
    body: "Every call answered on the first ring — 2 AM emergencies, Saturday storms, the lunch rush. Trained on your services, service area and pricing.",
    points: ["Answers in under a second", "Emergency triage & live transfer", "Recordings + call summaries"],
  },
  {
    icon: Filter,
    title: "Lead qualification",
    body: "Asks your questions the way your best CSR would: job type, address, timeline, budget, homeowner or renter. Only real opportunities reach your calendar.",
    points: ["Custom qualification scripts", "Service-area & job-size filters", "Lead details pushed to your CRM"],
  },
  {
    icon: Calendar,
    title: "Appointment setting",
    body: "Books straight onto your calendar using real availability — no back-and-forth, no double-booking. Confirmations and reminders so homeowners actually show.",
    points: ["Google, Outlook & CRM calendars", "SMS confirmations + reminders", "No-show follow-up"],
  },
];

export default function System() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <SectionLabel num="01">The System</SectionLabel>
        </Reveal>
        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal delay={80}>
            <h2 className="max-w-[640px] text-[38px] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[54px]">
              Four systems, <Accent>one pipeline.</Accent>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-[380px] text-[16px] leading-[1.65] text-ink-soft">
              Each piece works on its own. Together they make sure no lead — new or old — slips
              through the cracks.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="h-full">
              <article className="group relative flex h-full flex-col rounded-[22px] border border-line bg-white/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/25 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(14,26,43,0.35)]">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-ember-50 px-2.5 py-1 font-mono text-[10.5px] tracking-[0.15em] text-ember-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" /> 0{i + 1}
                </span>
                <span className="mt-8 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-paper text-ink transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-[21px] font-medium leading-tight tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-soft">{s.body}</p>
                <ul className="mt-auto pt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 border-t border-line py-2.5 text-[13.5px] text-ink-soft">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
