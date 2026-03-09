import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SAFTY - Jus de Fruits Traditionnels du Monde | Saveurs Authentiques",
    template: "%s | SAFTY",
  },
  description:
    "SAFTY propose des jus de fruits traditionnels et régionaux de divers pays. Chaque jus représente les saveurs de son pays d'origine pour vous faire sentir chez vous, où que vous soyez.",
  keywords: [
    "jus de fruits",
    "jus traditionnels",
    "boissons du monde",
    "jus artisanaux",
    "fruits tropicaux",
    "saveurs authentiques",
    "jus naturels",
    "boissons régionales",
    "SAFTY",
    "jus exotiques",
    "fruit de la passion",
    "açaï",
    "hibiscus",
    "yuzu",
  ],
  authors: [{ name: "SAFTY" }],
  creator: "SAFTY",
  publisher: "SAFTY",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "SAFTY",
    title: "SAFTY - Jus de Fruits Traditionnels du Monde",
    description:
      "Découvrez des jus authentiques de chaque coin du monde. Un voyage gustatif pour se sentir chez soi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAFTY - Saveurs du Monde en Bouteille",
    description:
      "Jus de fruits traditionnels et régionaux. Chaque gorgée, un voyage.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
