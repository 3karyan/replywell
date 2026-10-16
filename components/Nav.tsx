"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { BookButton, Logo } from "./ui";
import { Close, Menu } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[14px] text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ember after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <BookButton size="sm" className="hidden sm:inline-flex" />
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-5 pb-5 pt-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] text-ink-soft hover:bg-cream"
              >
                {l.label}
              </a>
            ))}
            <BookButton className="mt-2 w-full" />
          </nav>
        </div>
      </div>
    </header>
  );
}
