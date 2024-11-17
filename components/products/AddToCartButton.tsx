// components/products/AddToCartButton.tsx
"use client";

import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon as ShoppingCartSolidIcon } from "@heroicons/react/24/solid";

interface AddToCartButtonProps {
  productId: number;
  selectedSize: {
    name: string;
    price: number;
  };
  selectedColor: string;
}

export default function AddToCartButton({
  productId,
  selectedSize,
  selectedColor,
}: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Logika untuk menambahkan produk ke keranjang
    const productToAdd = {
      id: productId,
      size: selectedSize.name,
      price: selectedSize.price,
      color: selectedColor,
    };

    console.log("Menambahkan produk ke keranjang:", productToAdd);

    setIsAdded(true);
    // Reset status setelah beberapa detik
    setTimeout(() => setIsAdded(false), 1500);
    // Tambahkan logika lain seperti mengupdate state keranjang
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`p-2 rounded-full transition-all duration-200 ${
        isAdded
          ? "bg-green-500 text-white"
          : "bg-background-light hover:bg-primary text-foreground hover:text-background"
      }`}
      aria-label={
        isAdded ? "Ditambahkan ke Keranjang" : "Tambahkan ke Keranjang"
      }
    >
      {isAdded ? (
        <ShoppingCartSolidIcon className="h-6 w-6" />
      ) : (
        <ShoppingCartIcon className="h-6 w-6" />
      )}
    </button>
  );
}
