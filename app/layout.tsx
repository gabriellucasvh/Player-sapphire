import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Cookie } from 'next/font/google'

const cookie = Cookie({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cookie',
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sapphire",
  description: "O melhor player de músicas do mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cookie.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
