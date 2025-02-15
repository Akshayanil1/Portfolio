import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundGrid from '@/components/BackgroundGrid'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay Anilkumar - Portfolio",
  description: "Professional portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <BackgroundGrid />
        <div className="relative">
          {/* Ambient light effects */}
          <div className="fixed top-0 -left-96 w-96 h-96 bg-purple-500 opacity-30 blur-[200px] -z-10" />
          <div className="fixed top-96 -right-96 w-96 h-96 bg-blue-500 opacity-20 blur-[200px] -z-10" />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}