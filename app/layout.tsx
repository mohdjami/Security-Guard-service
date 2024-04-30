import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import { BsArrow90DegDown } from "react-icons/bs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eagle View Security",
  description: "Security for the Eagle View Security",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
        <About />
      </body>
      <BsArrow90DegDown />
    </html>
  );
}
