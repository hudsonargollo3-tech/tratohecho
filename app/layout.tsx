import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend", display: "swap" });

export const metadata: Metadata = {
  title: "Trato Hecho — El CRM que vende por WhatsApp, con agentes de IA",
  description:
    "Trato Hecho es el sistema operativo de ventas para negocios de Bolivia: agentes de IA que atienden, califican y cierran ventas por WhatsApp, dentro de un CRM que corre en tu propio servidor. Sin mensualidad, sin funciones bloqueadas.",
  keywords: [
    "CRM WhatsApp Bolivia",
    "CRM Santa Cruz",
    "agentes de IA ventas",
    "CRM open source español",
    "atención al cliente WhatsApp",
  ],
  openGraph: {
    title: "Trato Hecho — El CRM que vende por WhatsApp",
    description:
      "Agentes de IA que atienden, califican y cierran ventas por WhatsApp. Hecho para negocios bolivianos.",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-BO" className={`${inter.variable} ${lexend.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
