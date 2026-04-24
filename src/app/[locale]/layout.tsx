import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Mustapha Benaissa | Director & Cinematographer",
  description: "Mustapha Benaissa is a highly sought-after Director and Cinematographer based in Paris, specializing in commercial, narrative, and high-fashion visual storytelling.",
  keywords: ["Mustapha Benaissa", "Director", "Cinematographer", "DoP", "Director of Photography", "Paris", "Filmmaker", "Colorist", "Portfolio", "Commercial", "Narrative"],
  openGraph: {
    title: "Mustapha Benaissa | Director & Cinematographer",
    description: "Audiovisual Portfolio of Mustapha Benaissa, exploring cinematic storytelling through light, composition, and movement.",
    url: "https://benaissa.com",
    siteName: "Mustapha Benaissa Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800",
        width: 1200,
        height: 630,
        alt: "Mustapha Benaissa Cinematic Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustapha Benaissa | Director & Cinematographer",
    description: "Audiovisual Portfolio of Mustapha Benaissa, exploring cinematic storytelling.",
    images: ["https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"],
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Await the entire params object first
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable} dark`}>
      <body className="bg-[#050505] text-white selection:bg-white/10 selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
