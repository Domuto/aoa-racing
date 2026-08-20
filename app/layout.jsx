import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { SITE } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://aoaracing.com"),
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  title: {
    default: "AOA Racing — Track Days, Performance Shop & Race Team | Marietta, GA",
    template: "%s | AOA Racing",
  },
  description: SITE.description,
  openGraph: {
    title: "AOA Racing — Drive Faster. Race Smarter.",
    description: SITE.description,
    url: "https://aoaracing.com",
    siteName: "AOA Racing",
    images: [
      {
        url: "/images/logo.png",
        alt: "AOA Racing logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AOA Racing — Drive Faster. Race Smarter.",
    description: SITE.description,
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
