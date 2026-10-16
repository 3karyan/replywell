"use client";

import { useEffect, useState } from "react";
import { Check } from "./icons";

// Demo transcript. `at` = second of the call when the line appears.
const SCRIPT = [
  { at: 1, who: "caller", text: "Hi — my AC stopped blowing cold air this afternoon." },
  { at: 4, who: "agent", text: "Sorry to hear that, let's get someone out to you. What's the address?" },
  { at: 8, who: "caller", text: "4120 Maple Ridge Drive." },
  { at: 10, who: "agent", text: "Got it, you're in our service area. I have tomorrow at 9 AM or 1 PM — which works better?" },
  { at: 15, who: "caller", text: "9 AM is perfect." },
] as const;

const BOOKED_AT = 17;
const LOOP_AT = 26;

const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function LiveCall() {
  const [t, setT] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setT((v) => (v >= LOOP_AT ? 0 : v + 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const lines = SCRIPT.filter((l) => t >= l.at);
  const booked = t >= BOOKED_AT;
  const speaking = !booked && lines.length > 0 && lines[lines.length - 1].who === "agent";

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="absolute -inset-6 rounded-[44px] bg-[radial-gradient(circle,rgba(232,89,12,0.25),transparent_70%)] blur-2xl" />
      <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-b from-[#14223a] to-[#0c1627] p-3 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.8)]">
        <div className="rounded-[28px] bg-[#0b1526] px-5 pb-5 pt-4">
          <div className="mx-auto h-6 w-24 rounded-full bg-black/60" />

          {/* Header */}
          <div className="mt-5 flex flex-col items-center text-center">
            <div className="relative">
              <span className={`absolute inset-0 rounded-full bg-ember/50 ${speaking ? "animate-ping-soft" : ""}`} />
              <div className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#ff9a5c] to-ember-600 font-serif text-[26px] italic text-white">
                A
              </div>
            </div>
            <div className="mt-3 text-[17px] font-medium">Ava · ReplyWell AI</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff9a5c]/80">
              Inbound · Summit Heating &amp; Air
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-[0.15em] text-white/80">
              <span className={`h-1.5 w-1.5 rounded-full ${booked ? "bg-mint" : "animate-pulse bg-red-500"}`} />
              {booked ? "WRAPPING UP" : "LIVE"} · <span className="tabular-nums">{fmt(t)}</span>
            </div>

            {/* Waveform */}
            <div className="mt-4 flex h-8 items-center gap-[3px]">
              {Array.from({ length: 28 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-[3px] rounded-full ${speaking ? "animate-wave bg-[#ff9a5c]" : "bg-white/20"}`}
                  style={{
                    height: 6 + ((i * 37) % 22),
                    animationDelay: `${(i % 7) * 0.08}s`,
                    transform: speaking ? undefined : "scaleY(0.35)",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="my-4 h-px bg-white/[0.07]" />

          {/* Transcript */}
          <div className="flex h-[290px] flex-col justify-end gap-2.5 overflow-hidden">
            {lines.map((l) => (
              <div
                key={l.at}
                className={`animate-msg-in max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                  l.who === "caller"
                    ? "self-end rounded-br-md bg-white/[0.07]"
                    : "self-start rounded-bl-md border border-ember/20 bg-ember/[0.12]"
                }`}
              >
                <div className={`font-mono text-[9.5px] uppercase tracking-[0.18em] ${l.who === "caller" ? "text-white/40" : "text-[#ff9a5c]/80"}`}>
                  {l.who === "caller" ? "Caller" : "Ava · AI"}
                </div>
                <div className="mt-1 text-[13.5px] leading-snug text-white/90">{l.text}</div>
              </div>
            ))}

            {booked && (
              <div className="animate-msg-in mt-1 flex items-center gap-3 rounded-2xl border border-mint/30 bg-mint/10 px-4 py-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint text-night">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[14px] font-medium text-white">✓ Appointment booked</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                    Tue · 9:00 AM · AC diagnostic · SMS sent
                  </div>
                </div>
              </div>
            )}

            {lines.length === 0 && (
              <div className="self-center pb-24 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
                Incoming call…
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
