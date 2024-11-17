"use client";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { ArrowLeftIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// Dummy data untuk cart items
const cartItems = [
  {
    id: 1,
    name: "Kursi Minimalis Modern",
    price: 1500000,
    quantity: 2,
    image: "/images/products/kursi-minimalis.jpg",
  },
  {
    id: 2,
    name: "Meja Makan Kayu Jati",
    price: 3000000,
    quantity: 1,
    image: "/images/products/meja-makan.jpg",
  },
];

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center mb-8">
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 transition-all duration-300"
          onClick={() => window.history.back()} // Kembali ke halaman sebelumnya
        >
          <ArrowLeftIcon className="h-6 w-6 text-primary " />
        </button>
        <h1 className="text-4xl font-bold ml-4">Keranjang Belanja</h1>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary items={cartItems} />
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-foreground-muted text-xl mb-4">
            Keranjang belanja Anda kosong
          </p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-foreground transition-colors duration-200"
          >
            Mulai Belanja
          </Link>
        </div>
      )}
    </div>
  );
}
