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
    "Owner-operated residential plumbing in Southwest Washington and selected NE/SE Portland, Milwaukie, Clackamas, and Happy Valley areas.",
  alternates: {
    canonical: "/",
  },
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
      "Owner-operated residential plumbing serving Southwest Washington and selected NE/SE Portland, Milwaukie, Clackamas, and Happy Valley areas.",
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
      "Owner-operated residential plumbing serving Southwest Washington and selected NE/SE Portland, Milwaukie, Clackamas, and Happy Valley areas.",
    images: ["/images/shield-hero-plumbing.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
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
  priceRange: "$$",
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  }],
  founder: {
    "@type": "Person",
    name: "Will Mortensen",
  },
  areaServed: [
    { "@type": "Place", name: "Selected Northeast and Southeast Portland neighborhoods", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Milwaukie", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "Place", name: "Clackamas", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Happy Valley", containedInPlace: { "@type": "State", name: "Oregon" } },
    { "@type": "City", name: "Washougal", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Camas", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Vancouver", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "AdministrativeArea", name: "Skamania County", containedInPlace: { "@type": "State", name: "Washington" } },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Washougal",
    addressRegion: "WA",
    postalCode: "98671",
    addressCountry: "US",
  },
  knowsAbout: [
    "Residential plumbing repair",
    "Water heater replacement",
    "Fixture installation",
    "Leak repair",
    "Remodel plumbing",
  ],
  identifier: [{
    "@type": "PropertyValue",
    name: "Washington contractor license",
    value: "SHIELPL740L9",
  }, {
    "@type": "PropertyValue",
    name: "Oregon CCB license",
    value: "263396",
  }],
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
