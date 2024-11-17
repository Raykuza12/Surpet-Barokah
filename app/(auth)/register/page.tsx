import React from "react";
import RegisterForm from "@/components/auth/RegisterForm";
import AuthLayout from "@/components/layout/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="space-y-8">
        <RegisterForm />
      </div>
    </AuthLayout>
  );
}
