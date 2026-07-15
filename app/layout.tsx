import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shieldplumbingllc.com"),
  title: {
    default: "Shield Plumbing | Residential Plumbing Service",
    template: "%s | Shield Plumbing",
  },
  description:
    "Owner-operated residential plumbing serving Washougal, Camas, Vancouver, and surrounding Southwest Washington communities.",
  icons: {
    icon: "/brand/shield-icon.png",
    shortcut: "/brand/shield-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
