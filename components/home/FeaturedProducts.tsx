import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Sofa Minimalis",
    price: "Rp 2.500.000",
    image: "/images/products/sofa.jpg",
    category: "Sofa",
  },
  // ... tambahkan produk lainnya
];

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="group"
        >
          <div className="bg-background-light rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-foreground text-sm rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-foreground text-lg font-semibold mb-2">
                {product.name}
              </h3>
              <p className="text-primary-light font-bold">{product.price}</p>
              <button className="mt-4 w-full py-2 bg-background hover:bg-background-dark text-foreground rounded-lg transition-colors duration-300">
                Lihat Detail
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
