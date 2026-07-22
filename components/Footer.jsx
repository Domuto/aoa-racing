import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

const POLICY_LINKS = [
  { label: "Policies & Waiver", href: "/policies" },
  { label: "Cancellation Policy", href: "/policies#cancellation" },
  { label: "Privacy & Terms", href: "/policies#privacy" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="mt-4">
      <div className="kerb" aria-hidden="true" />
      <div className="border-t border-line bg-panel">
        <div className="container-x grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div>
            <Image
              src="/images/logo.png"
              alt="AOA Racing"
              width={184}
              height={52}
              className="h-10 w-auto"
            />
            <address className="mt-5 space-y-2 not-italic text-sm text-chrome">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-paper"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {SITE.address.line1}, {SITE.address.line2}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </a>
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-2 font-mono hover:text-paper"
              >
                <Phone size={15} className="shrink-0 text-accent" />
                {SITE.phoneDisplay}
              </a>
            </address>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="AOA Racing on Instagram"
                className="flex h-10 w-10 items-center justify-center border border-line text-chrome transition-colors hover:border-chrome hover:text-paper"
              >
                <Instagram size={17} />
              </a>
              <a
                href={SITE.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="AOA Racing on Facebook"
                className="flex h-10 w-10 items-center justify-center border border-line text-chrome transition-colors hover:border-chrome hover:text-paper"
              >
                <Facebook size={17} />
              </a>
              <a
                href={SITE.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="AOA Racing on YouTube"
                className="flex h-10 w-10 items-center justify-center border border-line text-chrome transition-colors hover:border-chrome hover:text-paper"
              >
                <Youtube size={17} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="tt-label mb-4">Explore</p>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-chrome transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book */}
          <div>
            <p className="tt-label mb-4">Get on Track</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/track-days" className="text-chrome hover:text-paper">
                  Upcoming Track Days
                </Link>
              </li>
              <li>
                <Link href="/shop/quote" className="text-chrome hover:text-paper">
                  Request a Shop Quote
                </Link>
              </li>
              <li>
                <Link href="/race-team" className="text-chrome hover:text-paper">
                  Explore Race Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/race-team#inquiries"
                  className="text-chrome hover:text-paper"
                >
                  Request Sponsorship Information
                </Link>
              </li>
            </ul>
            <Link href="/track-days" className="btn-primary btn-sm mt-5">
              Book a Track Day
            </Link>
          </div>

          {/* Policies */}
          <div>
            <p className="tt-label mb-4">The Fine Print</p>
            <ul className="space-y-2.5">
              {POLICY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-chrome transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[11px] leading-relaxed text-chrome/70">
              {SITE.hours}
            </p>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="container-x flex flex-col gap-2 py-5 pb-24 font-mono text-[11px] uppercase tracking-[0.16em] text-chrome/70 sm:flex-row sm:items-center sm:justify-between sm:pb-5">
            <p>© {new Date().getFullYear()} AOA Racing. All rights reserved.</p>
            <p>Kennesaw, Georgia — built for the Southeast track community</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
