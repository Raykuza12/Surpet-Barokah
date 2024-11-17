"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { UseFormReturn } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [FormComponent, setFormComponent] = useState<React.ComponentType<{
    onSubmit: (data: LoginFormInputs) => void;
  }> | null>(null);
  const [formMethods, setFormMethods] =
    useState<UseFormReturn<LoginFormInputs> | null>(null);

  useEffect(() => {
    import("react-hook-form").then((mod) => {
      const { useForm } = mod;
      function FormComponentWrapper({
        onSubmit,
      }: {
        onSubmit: (data: LoginFormInputs) => void;
      }) {
        const methods = useForm<LoginFormInputs>();
        setFormMethods(methods);
        return (
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
            {/* Form fields go here */}
          </form>
        );
      }
      setFormComponent(() => FormComponentWrapper);
    });
  }, []);

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axios.post("/api/auth/login", data);
      console.log("Login successful:", response.data);
      // Handle successful login
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error
    }
  };

  if (!FormComponent) {
    return <div>Loading form...</div>;
  }

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <p className="mt-2 text-foreground-muted">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="text-primary-light hover:text-primary"
          >
            Daftar disini
          </Link>
        </p>
      </div>

      <FormComponent onSubmit={onSubmit} />

      {formMethods && (
        <>
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
              {...formMethods.register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email tidak valid",
                },
              })}
              className={`mt-1 block w-full px-4 py-3 rounded-lg bg-background-light border ${
                formMethods.formState.errors.email
                  ? "border-red-500"
                  : "border-background-darker"
              } text-foreground focus:outline-none focus:border-primary`}
            />
            {formMethods.formState.errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {formMethods.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...formMethods.register("password", {
                required: "Password wajib diisi",
                minLength: {
                  value: 6,
                  message: "Password minimal 6 karakter",
                },
              })}
              className={`mt-1 block w-full px-4 py-3 rounded-lg bg-background-light border ${
                formMethods.formState.errors.password
                  ? "border-red-500"
                  : "border-background-darker"
              } text-foreground focus:outline-none focus:border-primary`}
            />
            {formMethods.formState.errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {formMethods.formState.errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-background-darker text-primary focus:ring-primary"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-foreground-muted"
              >
                Ingat saya
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-primary-light hover:text-primary"
            >
              Lupa password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-full bg-primary hover:bg-primary-dark text-foreground font-semibold transition-all duration-300"
          >
            Masuk
          </button>
          <button
            type="button" // Ubah type menjadi "button" agar tidak mengirimkan form
            className="w-full flex justify-center py-3 px-4 rounded-full bg-secondary hover:bg-secondary-dark text-background font-semibold transition-all duration-300"
            onClick={() => (window.location.href = "/")} // Ganti dengan path home Anda
          >
            Kembali
          </button>
        </>
      )}
    </div>
  );
}
