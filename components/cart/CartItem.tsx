"use client";

import Image from "next/image";
import { useState } from "react";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="bg-background-light rounded-xl p-4 shadow-md">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="relative w-24 h-24">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow">
          <h3 className="font-semibold text-foreground">{item.name}</h3>
          <p className="text-primary font-medium">{formatPrice(item.price)}</p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="p-1 rounded-full bg-background hover:bg-background-dark transition-colors"
            >
              <svg
                className="w-4 h-4 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="p-1 rounded-full bg-background hover:bg-background-dark transition-colors"
            >
              <svg
                className="w-4 h-4 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Remove Button */}
        <button className="text-foreground-muted hover:text-primary transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
