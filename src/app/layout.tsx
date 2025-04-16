import "./globals.css";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";
import AOSInit from "./components/common/AOSInit";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

const relaway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={relaway.variable}>
        <AOSInit />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
