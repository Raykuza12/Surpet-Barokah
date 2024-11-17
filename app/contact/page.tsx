import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Hubungi Kami
        </h1>
        <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
          Kami siap membantu Anda. Silakan hubungi kami melalui salah satu
          metode di bawah ini atau isi formulir kontak.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="bg-background-light p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Formulir Kontak
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full p-3 border border-foreground-muted rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
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
                required
                className="mt-1 block w-full p-3 border border-foreground-muted rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground"
              >
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                required
                className="mt-1 block w-full p-3 border border-foreground-muted rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground"
              >
                Pesan
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="mt-1 block w-full p-3 border border-foreground-muted rounded-md focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-foreground px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="space-y-8">
          <div className="bg-background-light p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Informasi Kontak
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-foreground-muted">
                  Jl. Contoh No. 123, Kota, Indonesia
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="text-foreground-muted">+62 812 3456 7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <Link
                  href="mailto:info@surpetbarokah.com"
                  className="text-foreground-muted hover:text-primary transition-colors"
                >
                  info@surpetbarokah.com
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-background-light p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Jam Operasional
            </h3>
            <ul className="space-y-2 text-foreground-muted">
              <li>Senin - Jumat: 09:00 - 18:00</li>
              <li>Sabtu: 09:00 - 15:00</li>
              <li>Minggu: Tutup</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
          Lokasi Kami
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.866339468768!2d107.90642757150934!3d-7.040669999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c9aaa1f58935%3A0xb0271f9f0a1fa82f!2sXW54%2BPVP%2C%20Jl.%20Kp.%20Ciburial%2C%20Ciherang%2C%20Kec.%20Nagreg%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040397!5e0!3m2!1sid!2sid!4v1730769594657!5m2!1sid!2sid"
            width="100%"
            height="100%"
          />
        </div>
      </section>
    </div>
  );
}
