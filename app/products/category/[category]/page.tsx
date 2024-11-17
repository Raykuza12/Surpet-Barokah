import { Metadata } from "next";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilter from "@/components/products/ProductFilter";
import ProductSort from "@/components/products/ProductSort";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export const metadata: Metadata = {
  title: "Kategori Produk - Surpet Barokah",
  description: "Jelajahi koleksi furnitur kami berdasarkan kategori",
};

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
  // Tambahkan produk lainnya...
];

export default function CategoryPage({ params }: CategoryPageProps) {
  const decodedCategory = decodeURIComponent(params.category);
  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  const handleFilter = (category: string) => {
    // Implementasikan logika filter di sini jika diperlukan
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Kategori: {decodedCategory}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="lg:w-1/4">
            <ProductFilter onFilter={handleFilter} />
          </div>
          {/* Product List */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-foreground-muted">
                Menampilkan {categoryProducts.length} produk
              </p>
              <ProductSort />
            </div>
            <ProductGrid products={categoryProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
