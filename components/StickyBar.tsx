"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/site";
import { ArrowRight, Close } from "./icons";

export default function StickyBar() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !show) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-24px)] max-w-[560px] sm:bottom-6"
      style={{ animation: "slide-up 0.5s cubic-bezier(0.2,0.7,0.2,1) both" }}
    >
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-night/95 py-2 pl-5 pr-2 text-white shadow-[0_20px_50px_-15px_rgba(10,19,34,0.6)] backdrop-blur">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping-soft absolute inset-0 rounded-full bg-mint" />
          <span className="relative h-2 w-2 rounded-full bg-mint" />
        </span>
        <p className="min-w-0 flex-1 truncate text-[13.5px]">
          <span className="font-medium">Ready to grow?</span>
          <span className="hidden text-white/60 sm:inline"> Book a 15-min strategy call.</span>
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-ember px-4 text-[13px] font-medium transition-colors hover:bg-ember-600"
        >
          Book a call
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white/50 hover:bg-white/10 hover:text-white"
        >
          <Close className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
