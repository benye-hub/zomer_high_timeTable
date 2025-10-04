
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import InstallHint from "@/components/install-hint";

export const metadata: Metadata = {
  title: "מערכת שעות זומר",
  description: "ניווט קל במערכת השעות שלך.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest-v5.json" />
        <meta name="apple-mobile-web-app-title" content="מערכת זומר" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <InstallHint />
      </body>
    </html>
  );
}
