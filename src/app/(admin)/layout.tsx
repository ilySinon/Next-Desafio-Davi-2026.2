import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "../globals.css";
import { SidebarAdmin } from "../../components/sidebar";
import Footer from "../../components/Footer";
import { Sidebar } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loja Tricolor",
  description: "Loja de vendas de produtos do Fluminense",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${anton.variable} antialiased flex bg-(--var-Creme) min-h-screen`}>
      <SidebarAdmin />
      <div className="flex-1 flex flex-col w-full lg:pl-24">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}