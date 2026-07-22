"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors ${
          scrolled || open
            ? "border-line bg-asphalt/95 backdrop-blur"
            : "border-transparent bg-asphalt/80 backdrop-blur"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="AOA Racing — home"
          >
            <Image
              src="/images/logo.png"
              alt="AOA Racing"
              width={168}
              height={46}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    active ? "text-paper" : "text-chrome hover:text-paper"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneTel}
              className="hidden items-center gap-2 font-mono text-[13px] text-chrome transition-colors hover:text-paper xl:flex"
            >
              <Phone size={14} className="text-accent" />
              {SITE.phoneDisplay}
            </a>
            <Link href="/track-days" className="btn-primary btn-sm hidden sm:inline-flex">
              Book a Track Day
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center border border-line text-paper lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-line bg-asphalt lg:hidden">
            <nav className="container-x flex flex-col py-3" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-line/60 py-4 font-display text-2xl uppercase tracking-wide text-paper"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 py-5">
                <Link href="/track-days" className="btn-primary w-full">
                  Book a Track Day
                </Link>
                <a href={SITE.phoneTel} className="btn-ghost w-full">
                  <Phone size={16} /> Call {SITE.phoneDisplay}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky mobile action bar — per framework: phone + high-intent
          action always reachable on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-asphalt/95 backdrop-blur sm:hidden">
        <a
          href={SITE.phoneTel}
          className="flex items-center justify-center gap-2 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-paper"
        >
          <Phone size={15} className="text-accent" /> Call the Shop
        </a>
        <Link
          href="/track-days"
          className="flex items-center justify-center bg-accent py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white"
        >
          Book a Track Day
        </Link>
      </div>
    </>
  );
}
