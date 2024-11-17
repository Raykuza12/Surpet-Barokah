// components/products/ProductReviews.tsx
"use client";
import { useState } from "react";

interface Review {
  id: number;
  name: string;
  comment: string;
}

export default function ProductReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = { id: reviews.length + 1, name, comment };
    setReviews([...reviews, newReview]);
    setName("");
    setComment("");
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Ulasan Produk</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Anda"
          className="border rounded-lg p-2 mr-2"
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Tulis ulasan..."
          className="border rounded-lg p-2 mr-2"
          required
        />
        <button type="submit" className="bg-primary text-white rounded-lg p-2">
          Kirim Ulasan
        </button>
      </form>

      <div>
        {reviews.map((review) => (
          <div key={review.id} className="border p-2 mb-2 rounded">
            <strong>{review.name}</strong>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
