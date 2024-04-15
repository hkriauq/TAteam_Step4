import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layouts/Header";
import { AppProvider } from "@/context/AppContext";



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
    <html lang="ja" style={{ backgroundColor: "var(--sub3)"}}>
      <body>
        <AppProvider>
          <Header />
            {children}
        </AppProvider>
      </body>
    </html>
  );
}
