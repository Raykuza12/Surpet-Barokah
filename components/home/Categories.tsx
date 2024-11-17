import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Kursi",
    image: "/images/categories/chairs.jpg",
    slug: "chairs",
    description: "Koleksi kursi modern dan nyaman",
  },
  // ... tambahkan kategori lainnya
];

export default function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          href={`/categories/${category.slug}`}
          key={category.slug}
          className="group"
        >
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-darker/90 to-transparent group-hover:from-primary-darker/90 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-foreground text-xl font-bold mb-2">
                {category.name}
              </h3>
              <p className="text-foreground-muted text-sm">
                {category.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
