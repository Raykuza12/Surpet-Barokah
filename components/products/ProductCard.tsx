import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-full max-w-sm bg-background-light rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            {product.name}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-foreground-muted"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-foreground-muted">
              ({product.reviews} ulasan)
            </span>
          </div>
          <div className="space-y-4">
            <span className="block text-lg font-bold text-primary">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(product.price)}
            </span>
            <button className="w-full px-4 py-2 bg-primary text-foreground rounded-full hover:bg-primary-dark transition-colors">
              Lihat Detail
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
