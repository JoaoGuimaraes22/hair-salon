import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bella — Salão de Beleza, Carcavelos",
  description: "Salão de beleza em Carcavelos. Especialistas em coloração, madeixas e tratamentos capilares.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
