// components/products/ProductFilter.tsx
"use client";
import { useState } from "react";

const categories = ["Semua", "Sofa", "Kursi", "Meja", "Lemari", "Tempat Tidur"];

export default function ProductFilter({
  onFilter,
}: {
  onFilter: (category: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Kategori</h3>
      {categories.map((category) => (
        <label key={category} className="flex items-center gap-2">
          <input
            type="radio"
            name="category"
            value={category}
            checked={selectedCategory === category}
            onChange={() => handleFilterChange(category)}
            className="form-radio text-primary"
          />
          {category}
        </label>
      ))}
    </div>
  );
}
