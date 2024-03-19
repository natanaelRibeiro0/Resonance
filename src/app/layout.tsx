import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/NavBar"
import "./globals.css";
import SideBar from "@/components/SideBar";
import Footer from '../components/Footer';

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
      <body className={inter.className}>  
        <Nav></Nav>
        <SideBar></SideBar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
