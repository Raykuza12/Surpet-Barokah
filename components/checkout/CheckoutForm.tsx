"use client";

import { useState } from "react";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-foreground-muted mb-1"
        >
          Nama Lengkap
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-background-dark rounded-md focus:ring-primary focus:border-primary text-background"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground-muted mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-background-dark rounded-md focus:ring-primary focus:border-primary text-background"
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-foreground-muted mb-1"
        >
          Alamat
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-2 border border-background-dark rounded-md focus:ring-primary focus:border-primary text-background"
        ></textarea>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-foreground-muted mb-1"
          >
            Kota
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-background-dark rounded-md focus:ring-primary focus:border-primary text-background"
          />
        </div>
        <div>
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium text-foreground-muted mb-1"
          >
            Kode Pos
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-background-dark rounded-md focus:ring-primary focus:border-primary text-background"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground-muted mb-1"
        >
          Nomor Telepon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-background-dark rounded-md focus:ring-primary focus:border-primary text-background"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-full bg-primary hover:bg-primary-dark text-foreground transition-colors duration-200"
      >
        Lanjutkan ke Pembayaran
      </button>
    </form>
  );
}
