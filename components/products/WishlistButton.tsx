"use client";

import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

interface WishlistButtonProps {
  productId: number;
}

export default function WishlistButton({ productId }: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleWishlist = () => {
    // Logika untuk menambahkan/menghapus dari wishlist
    setIsInWishlist(!isInWishlist);
    // Tambahkan logika lain seperti mengupdate state wishlist atau mengirim ke server
  };

  return (
    <button
      onClick={handleWishlist}
      className="p-2 rounded-full bg-background-light hover:bg-primary text-foreground hover:text-background transition-colors"
      aria-label={
        isInWishlist ? "Hapus dari Wishlist" : "Tambahkan ke Wishlist"
      }
    >
      {isInWishlist ? (
        <HeartSolidIcon className="h-6 w-6 text-primary" />
      ) : (
        <HeartIcon className="h-6 w-6" />
      )}
    </button>
  );
}
