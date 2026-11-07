import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Clube Smart Caxias | Assistência Técnica e Acessórios para Celulares",
  description:
    "Assistência técnica especializada e vitrine de smartphones e acessórios em Caxias do Sul. Av. Rio Branco, 639. Peça seu orçamento pelo WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
