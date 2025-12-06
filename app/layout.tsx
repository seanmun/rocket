import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SwipeNavigation } from "@/components/swipe-navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rocket Pool Tour | Professional Billiards League",
  description: "The future of competitive pool. Fast-paced, offense-driven professional billiards featuring the revolutionary Rocket Run-Out© format.",
  keywords: ["pool", "billiards", "professional pool", "Rocket Pool Tour", "Rodney Morris", "Rocket Run-Out"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <SwipeNavigation>
          {children}
        </SwipeNavigation>
      </body>
    </html>
  );
}
