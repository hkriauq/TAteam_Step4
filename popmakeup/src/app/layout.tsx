import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header";


export const metadata: Metadata = {
  title: "PopMakeUp app",
  description: "PopMakeUp app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
       <Header />
        {children}
      </body>
    </html>
  );
}
