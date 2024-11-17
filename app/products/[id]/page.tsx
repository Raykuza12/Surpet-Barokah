"use client";
import { Metadata } from "next";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import AddToCartButton from "@/components/products/AddToCartButton";
import WishlistButton from "@/components/products/WishlistButton";
import RelatedProducts from "@/components/products/RelatedProducts";
import Link from "next/link";
import { useState } from "react";
import ProductOptions from "@/components/products/ProductOptions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Dummy data produk (dalam implementasi nyata, data akan diambil dari API/database)
const product = {
  id: 1,
  name: "Sofa Minimalis Modern",
  basePrice: 2500000,
  description:
    "Sofa minimalis modern dengan bahan berkualitas tinggi. Nyaman dan cocok untuk ruang tamu Anda.",
  features: ["Bahan: Kain premium", "Rangka: Kayu jati solid"],
  images: [
    "/images/products/sofa-1.jpg",
    "/images/products/sofa-2.jpg",
    "/images/products/sofa-3.jpg",
  ],
  colors: ["#ff0000", "#00ff00", "#0000ff"],
  sizes: [
    { name: "S", price: 2500000 },
    { name: "M", price: 3000000 },
    { name: "L", price: 3500000 },
  ],
  stock: 5,
  rating: 4.5,
  reviews: 12,
};

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleOptionsChange = (
    color: string,
    size: { name: string; price: number }
  ) => {
    setSelectedColor(color);
    setSelectedSize(size);
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-background-light rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative h-24 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${product.name} - view ${index + 2}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">
              {product.name}
            </h1>

            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-foreground">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(selectedSize.price)}
              </div>
              <div className="flex items-center bg-background px-3 py-1 rounded-full">
                <StarIcon className="h-5 w-5 text-primary mr-1" />
                <span className="font-semibold text-foreground">
                  {product.rating}
                </span>
                <span className="text-sm text-foreground-muted ml-1">
                  ({product.reviews} ulasan)
                </span>
              </div>
            </div>

            <p className="text-foreground-muted">{product.description}</p>

            {/* Product Options */}
            <ProductOptions
              colors={product.colors}
              sizes={product.sizes}
              onOptionsChange={handleOptionsChange}
            />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Fitur Produk
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-foreground-muted"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between py-4 border-t border-background-dark">
              <div className="text-foreground-muted">
                Stok:{" "}
                <span className="font-semibold text-foreground">
                  {product.stock} tersedia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                {/* Buy Now Button */}
                <Link
                  href={`/checkout?product=${product.id}`}
                  className="px-6 py-2 bg-primary text-foreground rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center"
                >
                  Beli Sekarang
                </Link>
                {/* Icon Buttons */}
                <div className="flex space-x-2">
                  <AddToCartButton
                    productId={product.id}
                    selectedSize={selectedSize}
                    selectedColor={selectedColor}
                  />
                  <WishlistButton productId={product.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">Produk Lain</h2>
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}
