// app/products/page.tsx
"use client";
import ProductFilter from "@/components/products/ProductFilter";
import ProductGrid from "@/components/products/ProductGrid";
import SearchBar from "@/components/products/SearchBar";
import { useState } from "react";

// Dummy data produk
const products = [
  {
    id: 1,
    name: "Sofa Minimalis Modern",
    price: 2500000,
    category: "Sofa",
    image: "/images/products/sofa-minimalis.jpg",
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 2,
    name: "Kursi Makan Kayu Jati",
    price: 1500000,
    category: "Kursi",
    image: "/images/products/kursi-makan.jpg",
    rating: 4.8,
    reviews: 8,
  },
  {
    id: 3,
    name: "Meja Makan Kayu Jati",
    price: 2000000,
    category: "Meja",
    image: "/images/products/meja-makan.jpg",
    rating: 4.9,
    reviews: 10,
  },
  {
    id: 4,
    name: "Kursi Taman Minimalis",
    price: 1000000,
    category: "Kursi",
    image: "/images/products/kursi-taman.jpg",
    rating: 4.6,
    reviews: 15,
  },
  {
    id: 5,
    name: "Meja Belajar Kayu Jati",
    price: 3000000,
    category: "Meja",
    image: "/images/products/meja-belajar.jpg",
    rating: 4.7,
    reviews: 12,
  },
];

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (category: string) => {
    if (category === "Semua") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-primary">
        Daftar Produk
      </h1>

      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        {/* Sidebar Filter */}
        <div className="lg:w-1/4 border-r-2">
          <ProductFilter onFilter={handleFilter} />
        </div>

        {/* Product List */}
        <div className="lg:w-3/4">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-lg text-foreground-muted">
              Menampilkan {filteredProducts.length} produk
            </p>
          </div>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
