import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://shieldplumbingllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shield Plumbing | Residential Plumber in Washougal, WA",
    template: "%s | Shield Plumbing",
  },
  description:
    "Shield Plumbing provides trusted residential plumbing repairs, installations, and replacements in Washougal, Camas, and Vancouver, WA. Owner-operated.",
  applicationName: "Shield Plumbing",
  category: "Residential plumbing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Shield Plumbing",
    title: "Shield Plumbing | Residential Plumber in Washougal, WA",
    description:
      "Owner-operated residential plumbing serving Washougal, Camas, Vancouver, and surrounding Southwest Washington communities.",
    images: [
      {
        url: "/images/shield-hero-plumbing.png",
        width: 1536,
        height: 1024,
        alt: "Shield Plumbing residential plumbing service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shield Plumbing | Residential Plumber in Washougal, WA",
    description:
      "Owner-operated residential plumbing serving Washougal, Camas, Vancouver, and surrounding Southwest Washington communities.",
    images: ["/images/shield-hero-plumbing.png"],
  },
  icons: {
    icon: "/brand/shield-icon.png",
    shortcut: "/brand/shield-icon.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": `${siteUrl}/#business`,
  name: "Shield Plumbing LLC",
  alternateName: "Shield Plumbing",
  url: siteUrl,
  telephone: "+1-360-335-3905",
  email: "info@shieldplumbingllc.com",
  image: `${siteUrl}/brand/shield-plumbing-horizontal.png`,
  logo: `${siteUrl}/brand/shield-icon.png`,
  founder: {
    "@type": "Person",
    name: "Will Mortensen",
  },
  areaServed: [
    { "@type": "City", name: "Washougal", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Camas", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Vancouver", containedInPlace: { "@type": "State", name: "Washington" } },
  ],
  knowsAbout: [
    "Residential plumbing repair",
    "Water heater replacement",
    "Fixture installation",
    "Leak repair",
    "Remodel plumbing",
  ],
  identifier: {
    "@type": "PropertyValue",
    name: "Washington contractor license",
    value: "SHIELPL740L9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
