import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Layout/NavBar"
import "./globals.css";
import SideBar from "@/components/Layout/SideBar";
import Footer from '../components/Layout/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RESONANCE",
  description: "RESONANCE",
  icons: "/siteImg/favicon-icon.svg"
};

export default function RootLayout({
  children, 
  }: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>  
        <Nav></Nav>
        <SideBar></SideBar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
