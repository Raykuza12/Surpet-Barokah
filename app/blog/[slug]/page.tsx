import Image from "next/image";
import Link from "next/link";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostParams) {
  // Dalam implementasi nyata, Anda akan mengambil data berdasarkan slug
  const post = {
    title: "Tips Memilih Furniture yang Tepat untuk Ruang Tamu",
    date: "20 Jan 2024",
    author: "John Doe",
    category: "Tips & Tricks",
    imageUrl: "/images/blog/furniture-tips.jpg",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h2>Subtitle 1</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h2>Subtitle 2</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    `,
  };

  return (
    <article className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/blog" className="text-primary hover:text-primary-dark">
              Blog
            </Link>
          </li>
          <li>
            <span className="text-foreground-muted mx-2">/</span>
          </li>
          <li className="text-foreground-muted">{post.title}</li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="bg-primary text-foreground px-4 py-1 rounded-full text-sm">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-foreground-muted">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Article Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Back to Blog Link */}
      <div className="mt-12">
        <Link href="/blog" className="text-primary hover:text-primary-dark">
          &larr; Kembali ke Blog
        </Link>
      </div>
    </article>
  );
}
