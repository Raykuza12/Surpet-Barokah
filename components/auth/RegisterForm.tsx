"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { UseFormReturn } from "react-hook-form";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const [FormComponent, setFormComponent] = useState<React.ComponentType<{
    onSubmit: (data: RegisterFormInputs) => void;
  }> | null>(null);
  const [formMethods, setFormMethods] =
    useState<UseFormReturn<RegisterFormInputs> | null>(null);

  useEffect(() => {
    import("react-hook-form").then((mod) => {
      const { useForm } = mod;
      function FormComponentWrapper({
        onSubmit,
      }: {
        onSubmit: (data: RegisterFormInputs) => void;
      }) {
        const methods = useForm<RegisterFormInputs>();
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

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      const response = await axios.post("/api/auth/register", data);
      console.log("Registration successful:", response.data);
      // Handle successful registration
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration error
    }
  };

  if (!FormComponent) {
    return <div>Loading form...</div>;
  }

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground">Buat Akun Baru</h2>
        <p className="mt-2 text-foreground-muted">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-primary-light hover:text-primary">
            Login disini
          </Link>
        </p>
      </div>

      <FormComponent onSubmit={onSubmit} />

      {formMethods && (
        <>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              {...formMethods.register("name", {
                required: "Nama wajib diisi",
              })}
              className={`mt-1 block w-full px-4 py-3 rounded-lg bg-background-light border ${
                formMethods.formState.errors.name
                  ? "border-red-500"
                  : "border-background-darker"
              } text-foreground focus:outline-none focus:border-primary`}
            />
            {formMethods.formState.errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {formMethods.formState.errors.name.message}
              </p>
            )}
          </div>

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

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-foreground"
            >
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...formMethods.register("confirmPassword", {
                required: "Konfirmasi password wajib diisi",
                validate: (value: any) =>
                  value === formMethods.watch("password") ||
                  "Password tidak sama",
              })}
              className={`mt-1 block w-full px-4 py-3 rounded-lg bg-background-light border ${
                formMethods.formState.errors.confirmPassword
                  ? "border-red-500"
                  : "border-background-darker"
              } text-foreground focus:outline-none focus:border-primary`}
            />
            {formMethods.formState.errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {formMethods.formState.errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-full bg-primary hover:bg-primary-dark text-foreground font-semibold transition-all duration-300"
          >
            Daftar
          </button>
        </>
      )}
    </div>
  );
}
