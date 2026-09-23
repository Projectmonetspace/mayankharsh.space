import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { site } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mayank Harsh — Creative Direction & Social Storytelling",
    template: "%s | Mayank Harsh",
  },
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: "Mayank Harsh — Creative Direction & Social Storytelling",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mayank Harsh — Creative direction and social storytelling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Harsh — Creative Direction & Social Storytelling",
    description: site.description,
    images: ["/opengraph-image"],
  },
  applicationName: site.name,
  manifest: "/site.webmanifest",
  icons: { icon: "/icon", apple: "/apple-icon" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0d",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
