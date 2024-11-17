import ProductCard from "@/components/products/ProductCard";

// Dummy data produk terkait
const relatedProducts = [
  {
    id: 3,
    name: "Meja Makan Kayu Jati",
    price: 3000000,
    image: "/images/products/meja-makan.jpg",
    rating: 4.7,
    reviews: 10,
  },
  {
    id: 4,
    name: "Kursi Santai",
    price: 1200000,
    image: "/images/products/kursi-santai.jpg",
    rating: 4.6,
    reviews: 5,
  },
  // Tambahkan produk terkait lainnya...
];

interface RelatedProductsProps {
  currentProductId: number;
}

export default function RelatedProducts({
  currentProductId,
}: RelatedProductsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {relatedProducts
        .filter((product) => product.id !== currentProductId)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
