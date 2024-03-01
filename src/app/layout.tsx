import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/navBar"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RESONANCE",
  description: "RESONANCE",
  icons: "/site img/favicon-icon.svg"
};

export default function RootLayout({
  children, 
  }: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-neutral-300"} >  
        <Nav />
        {children}
        </body>
    </html>
  );
}
