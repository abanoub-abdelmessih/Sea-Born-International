import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sea Born International | Global Freight & Logistics Solutions",
    template: "%s | Sea Born International",
  },
  description:
    "Sea Born International is a leading freight forwarding and logistics company in Egypt, offering sea freight, air freight, door-to-door container transportation, and customs clearance services worldwide.",
  keywords: [
    "freight forwarding",
    "sea freight",
    "air freight",
    "logistics",
    "shipping company Egypt",
    "customs clearance",
    "FCL",
    "LCL",
    "container shipping",
    "door to door delivery",
    "Alexandria shipping",
    "Egypt logistics",
    "international freight",
    "cargo transportation",
  ],
  authors: [{ name: "Sea Born International" }],
  creator: "Sea Born International",
  publisher: "Sea Born International",
  metadataBase: new URL("https://sea-born-international.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sea-born-international.vercel.app",
    siteName: "Sea Born International",
    title: "Sea Born International | Global Freight & Logistics Solutions",
    description:
      "Your trusted partner for sea freight, air freight, and logistics solutions in Egypt and worldwide. Professional customs clearance and door-to-door delivery services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sea Born International - Freight & Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sea Born International | Global Freight & Logistics",
    description:
      "Leading freight forwarding company in Egypt. Sea freight, air freight, customs clearance & logistics solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "Logistics & Transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-Montserrat antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
