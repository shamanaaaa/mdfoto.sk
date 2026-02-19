import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MDFOTO – Fotograf Nitra | Majka Domanová",
    template: "%s | MDFOTO",
  },
  description:
    "Profesionálne rodinné fotenie, novorodenecké fotenie a tehotenské fotenie v Nitre a okolí. Majka Domanová – prirodzené, hravé a nezabudnuteľné fotografie.",
  keywords: [
    "fotenie Nitra",
    "rodinné fotenie",
    "novorodenecké fotenie",
    "tehotenské fotenie",
    "detské fotenie",
    "Majka Domanová",
    "mdfoto",
    "fotograf Nitra",
  ],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://mdfoto.sk",
    siteName: "MDFOTO",
    title: "MDFOTO – Fotograf Nitra | Majka Domanová",
    description:
      "Profesionálne rodinné fotenie, novorodenecké fotenie a tehotenské fotenie v Nitre a okolí.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
