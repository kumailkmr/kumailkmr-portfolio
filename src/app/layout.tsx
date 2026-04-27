import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { BackToTop } from "@/components/shared/BackToTop";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { PortfolioIntroAnimation } from "@/components/shared/PortfolioIntroAnimation";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kumail Kmr | Next.js Developer & AI Automation Specialist",
  description:
    "Freelance web developer from Srinagar, Kashmir. Specializing in Next.js, TypeScript, and AI automation. Helping businesses automate, scale, and grow 24/7. Get in touch for a free strategy call.",
  keywords: [
    "Kumail Kmr",
    "kumailkmr",
    "Next.js developer India",
    "TypeScript developer",
    "freelance web developer Kashmir",
    "AI automation specialist",
    "web developer Srinagar",
    "SaaS developer India",
    "React developer India",
    "web developer India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <PortfolioIntroAnimation />
          <Navbar />
          <main className="pt-20 pb-28 md:pb-0">{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CustomCursor />
          <Toaster position="top-right" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
