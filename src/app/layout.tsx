import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gonzalo Córdova — Senior Software Engineer",
  description:
    "Arquitecto de sistemas escalables e interfaces de alta precisión. Trabajo en la intersección entre ingeniería robusta y experiencia sensorial pulida.",
  openGraph: {
    title: "Gonzalo Córdova — Senior Software Engineer",
    description: "Productos digitales de alto impacto técnico y estético.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-[#F7F6F2] text-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}
