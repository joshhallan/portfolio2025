import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Global/NavBar/NavBar";
import Footer from "@/components/Global/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josh Allan | Lead Technical Developer & Frontend Specialist",
  description:
    "Josh Allan's professional portfolio showcasing 10+ years of expertise in React, Angular, NextJS and AWS developing high-performance solutions.",
  keywords: [
    "Josh Allan",
    "Frontend Developer",
    "React",
    "Angular",
    "NextJS",
    "AWS",
    "Technical Lead",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-mesh`}>
        <NavBar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
