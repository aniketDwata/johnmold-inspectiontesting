import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "John Mold Inspection & Testing | Tarzana, CA",
    template: "%s | John Mold Inspection & Testing",
  },
  description:
    "Professional mold inspection and testing services in Tarzana and the greater Los Angeles area. Certified, reliable, and available for urgent inspections.",
  openGraph: {
    title: "John Mold Inspection & Testing",
    description:
      "Moisture detection, infrared inspection, surface samples, and air quality testing in Tarzana and Los Angeles.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
    </html>
  );
}
