// components/AuthLayout.tsx
import React from "react";
import "@/styles/globals.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-background-light rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
