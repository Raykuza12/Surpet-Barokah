"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/Logo.svg"
              alt="Surpet Barokah Logo"
              width={60}
              height={60}
            />
          </Link>

          <div className="md:hidden flex items-center gap-2">
            {/* Cart Icon for Mobile */}
            <Link
              href="/cart"
              className="p-2 hover:bg-background-light rounded-full transition-colors ml-4"
            >
              <span className="sr-only">Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>

            {/* Hamburger Menu Icon for Mobile */}
            <button onClick={toggleMenu} className="focus:outline-none">
              <Bars3Icon className="h-6 w-6 text-foreground" />
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {[
              ["Produk", "/products"],
              ["Tentang Kami", "/about"],
              ["Blog", "/blog"],
              ["Kontak", "/contact"],
            ].map(([title, url]) => (
              <Link
                key={url}
                href={url}
                className="text-foreground hover:text-primary-light transition-colors duration-200 font-medium"
              >
                {title}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/cart"
              className="p-2 hover:bg-background-light rounded-full transition-colors"
            >
              <span className="sr-only">Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
            <Link
              href="/login"
              className="flex items-center px-6 py-2 rounded-full bg-primary hover:bg-primary-dark text-foreground transition-colors duration-200"
            >
              Masuk
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-light rounded-lg shadow-md p-4">
          {[
            ["Produk", "/products"],
            ["Tentang Kami", "/about"],
            ["Blog", "/blog"],
            ["Kontak", "/contact"],
          ].map(([title, url]) => (
            <Link
              key={url}
              href={url}
              className="block text-foreground hover:text-primary-light transition-colors duration-200 py-2"
            >
              {title}
            </Link>
          ))}
          <Link
            href="/login"
            className="block text-foreground hover:text-primary-light transition-colors duration-200 py-2"
          >
            Masuk
          </Link>
        </div>
      )}
    </header>
  );
}
