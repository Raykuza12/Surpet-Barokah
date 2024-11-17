import Image from "next/image";
import Link from "next/link";

// Tipe data untuk artikel blog
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  imageUrl: string;
  category: string;
}

// Data dummy untuk artikel blog
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Tips Memilih Furniture yang Tepat untuk Ruang Tamu",
    excerpt:
      "Panduan lengkap memilih furniture yang sesuai dengan ruang tamu Anda...",
    slug: "tips-memilih-furniture-ruang-tamu",
    date: "20 Jan 2024",
    imageUrl: "/images/blog/furniture-tips.jpg",
    category: "Tips & Tricks",
  },
  {
    id: "2",
    title: "Tren Desain Interior 2024",
    excerpt:
      "Simak tren desain interior terbaru yang akan populer di tahun 2024...",
    slug: "tren-desain-interior-2024",
    date: "18 Jan 2024",
    imageUrl: "/images/blog/interior-trends.jpg",
    category: "Design Trends",
  },
  // Tambahkan artikel blog lainnya
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog & Artikel</h1>

      {/* Featured Post */}
      <div className="mb-12">
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <Image
            src={blogPosts[0].imageUrl}
            alt={blogPosts[0].title}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-darker/80 to-transparent" />
          <div className="absolute bottom-0 p-8">
            <span className="bg-primary text-foreground px-4 py-1 rounded-full text-sm mb-4 inline-block">
              {blogPosts[0].category}
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {blogPosts[0].title}
            </h2>
            <p className="text-foreground-muted mb-4">{blogPosts[0].excerpt}</p>
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="inline-flex items-center text-primary-light hover:text-primary"
            >
              Baca Selengkapnya
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="bg-background-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <span className="text-primary text-sm">{post.category}</span>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-foreground-muted mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground-muted">
                  {post.date}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary-dark"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
