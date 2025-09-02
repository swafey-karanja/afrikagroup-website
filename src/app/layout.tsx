import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/layout/Navbar";
import AnimatedCasinoBackground, {
  HeroContent,
} from "@/components/shared/background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iGaming Solutions",
  description: "Strategic solutions for iGaming growth and expansion",
};

// Define hero content for homepage
const homepageHero: HeroContent = {
  type: "text",
  title: "Africanising",
  highlightWord: "iGaming",
  description:
    "Strategic solutions for iGaming growth, optimization, and expansion.",
  subtitle: "Bringing next-level innovation to gaming, fintech & blockchain",
  showScrollIndicator: true,
  ctaButton: {
    text: "Get Started",
    href: "/contact",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Scrollable content container */}
          <div className="relative z-40" style={{ minHeight: "500vh" }}>
            <Navbar />
            <div
              className="relative z-30"
              style={{ marginTop: "100vh", marginBottom: "100vh" }}
            >
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
