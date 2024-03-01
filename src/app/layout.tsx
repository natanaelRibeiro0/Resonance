import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/navBar"
import "./globals.css";
import SideBar from "@/components/sideBar";

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
        <SideBar/>
        <Nav />
        {children}

        </body>
    </html>
  );
}
