import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "@/styles/globals.css";

const comfortaa = Comfortaa({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  title: "Surpet Barokah - Kenyamanan Minimalis Setiap Hari",
  description:
    "Toko furniture online terpercaya dengan koleksi furnitur berkualitas untuk rumah anda",
  keywords: "furniture, mebel, kursi, meja, lemari, furnitur minimalis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${comfortaa.variable}`}>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
