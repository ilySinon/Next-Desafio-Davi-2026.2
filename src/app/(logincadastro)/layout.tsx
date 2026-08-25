import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  weight:"400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loja Tricolor",
  description: "Loja de vendas de produtos do Fluminense",
};

export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${anton.variable} antialiased`}>
      {children}
    </div>
  );
}