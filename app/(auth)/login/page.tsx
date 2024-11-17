import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import AuthLayout from "@/components/layout/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-center text-foreground">
          Login ke Akun Anda
        </h1>
        <LoginForm />
      </div>
    </AuthLayout>
  );
}
