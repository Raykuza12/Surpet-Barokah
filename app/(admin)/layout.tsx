// app/(admin)/layout.tsx
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
  title: "Admin Dashboard - Surpet Barokah",
  description: "Admin dashboard untuk mengelola toko online Surpet Barokah",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
