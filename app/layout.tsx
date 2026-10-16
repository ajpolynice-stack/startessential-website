import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import HighLevelChatWidget from "@/components/HighLevelChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Essential Solutions | Keep working. We'll handle the follow-up.",
  description: "AI-powered answering, booking, and follow-up for busy service businesses. Never miss an opportunity to connect with a customer.",
  openGraph: {
    title: "Essential Solutions — Keep working. We'll handle the follow-up.",
    description: "AI answering, smart bookings, and automated follow-up for service businesses.",
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/essential-logo.webp", width: 1212, height: 371, alt: "Essential Solutions" }],
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<HighLevelChatWidget /></body></html>;
}
