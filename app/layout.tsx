import type { Metadata } from "next";
import { League_Spartan, Montserrat, Satisfy, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  display: "swap",
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dimas Alif Rayhan — Business Process & IT",
  description:
    "Business Process & IT professional at Ocean Network Express. I turn manual operations into automated workflows through process design, low-code/no-code tooling, and data analytics.",
  keywords: [
    "Dimas Alif Rayhan",
    "Business Process Management",
    "Process Automation",
    "AppScript",
    "AppSheet",
    "Low-Code",
    "No-Code",
    "Data Analytics",
    "SQL",
    "Looker Studio",
    "Ocean Network Express",
  ],
  authors: [{ name: "Dimas Alif Rayhan" }],
  openGraph: {
    title: "Dimas Alif Rayhan — Business Process & IT",
    description:
      "Building automations and analytics that cut manual work, surface insight, and unlock measurable operational impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${leagueSpartan.variable} ${satisfy.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
