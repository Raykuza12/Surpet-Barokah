// components/products/SearchBar.tsx
"use client";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Impor ikon pencarian

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex items-center ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari produk..."
        className="border rounded-lg p-2 text-background"
      />
      <button
        type="submit"
        className="bg-primary text-white rounded-lg p-2 ml-2 flex items-center justify-center"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />{" "}
        {/* Ganti teks dengan ikon */}
      </button>
    </form>
  );
}
