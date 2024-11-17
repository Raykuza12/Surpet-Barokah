import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <Image
        src="/images/hero-background.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background-darker/80 to-background/50" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Kenyamanan Minimalis{" "}
            <span className="text-primary-light">Setiap Hari</span>
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed">
            Temukan furnitur berkualitas untuk menghadirkan keindahan dan
            kenyamanan di setiap sudut rumah Anda.
          </p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 rounded-full bg-primary hover:bg-primary-dark text-foreground font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Lihat Koleksi
              <svg
                className="w-5 h-5 ml-2"
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
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
