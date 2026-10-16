"use client";

import { useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "@/lib/site";
import { ArrowRight } from "./icons";

/** Fades + lifts its children into view the first time they scroll on screen. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionLabel({
  num,
  children,
  dark = false,
}: {
  num: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] ${
        dark ? "text-ember-100/80" : "text-ember-600"
      }`}
    >
      <span className={`h-px w-6 ${dark ? "bg-ember/70" : "bg-ember/60"}`} />
      <span>
        {num} <span className="opacity-50">/</span> {children}
      </span>
    </div>
  );
}

/** The italic serif accent words inside headlines. */
export function Accent({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <em
      className={`font-serif font-normal italic tracking-[-0.01em] ${
        dark ? "text-[#ff9a5c]" : "text-ember"
      } pr-[0.04em] text-[1.08em] leading-[0.9]`}
    >
      {children}
    </em>
  );
}

type BtnVariant = "ink" | "ember" | "ghost-dark" | "ghost";

export function BookButton({
  children = "Book a call",
  variant = "ink",
  size = "md",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: BtnVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-10 px-4 text-[13px]",
    md: "h-12 px-6 text-[14px]",
    lg: "h-14 px-7 text-[15px]",
  };
  const variants: Record<BtnVariant, string> = {
    ink: "bg-ink text-white shadow-[0_10px_30px_-12px_rgba(14,26,43,0.55)] hover:bg-[#16263d]",
    ember:
      "bg-ember text-white shadow-[0_12px_32px_-12px_rgba(232,89,12,0.7)] hover:bg-ember-600",
    "ghost-dark": "border border-white/15 text-white/90 hover:border-white/35 hover:bg-white/5",
    ghost: "border border-line bg-white text-ink hover:border-ink/30",
  };
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="ReplyWell home">
      <span className="relative grid h-9 w-9 place-items-center rounded-[10px] bg-gradient-to-br from-[#ff8a3d] to-ember-600 shadow-[0_6px_18px_-6px_rgba(232,89,12,0.8)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M5 10v4M9 7v10M13 9v6M17 6v12M21 11v2" />
        </svg>
      </span>
      <span className={`text-[21px] font-semibold tracking-[-0.03em] ${dark ? "text-white" : "text-ink"}`}>
        Reply<span className="text-ember">Well</span>
      </span>
    </a>
  );
}
