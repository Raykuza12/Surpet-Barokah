// components/layout/AppLayout.tsx
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
