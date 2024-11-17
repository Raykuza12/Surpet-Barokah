import ProductCard from "@/components/products/ProductCard";

interface ProductGridProps {
  products: {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
  }[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
