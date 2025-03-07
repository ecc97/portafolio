import type { Metadata } from "next";
import { inter } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Portfolio",
  },
  description: "Mi Portafolio personal de projectos web y desarrollo de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
