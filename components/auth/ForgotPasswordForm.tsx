"use client";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";

interface ForgotPasswordFormInputs {
  email: string;
}

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputs>();

  const onSubmit = async (data: ForgotPasswordFormInputs) => {
    try {
      const response = await axios.post("/api/auth/forgot-password", data);
      console.log("Password reset email sent:", response.data);
      // Handle successful submission
    } catch (error) {
      console.error("Failed to send password reset email:", error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email wajib diisi",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email tidak valid",
            },
          })}
          className={`mt-1 block w-full px-4 py-3 rounded-lg bg-background-light border ${
            errors.email ? "border-red-500" : "border-background-darker"
          } text-foreground focus:outline-none focus:border-primary`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 rounded-full bg-primary hover:bg-primary-dark text-foreground font-semibold transition-all duration-300"
      >
        Kirim Link Reset Password
      </button>

      <div className="text-center">
        <Link
          href="/login"
          className="text-sm text-primary-light hover:text-primary"
        >
          Kembali ke halaman login
        </Link>
      </div>
    </form>
  );
}
