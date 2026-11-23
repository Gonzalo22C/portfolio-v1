import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio | Developer & Designer",
  description: "Portafolio profesional con estética minimalista futurista inspirada en Apple VisionOS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#070709] text-[#F5F5F7] antialiased selection:bg-[#0A84FF]/25 selection:text-[#F5F5F7]">
        {children}
      </body>
    </html>
  );
}
