import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-secondary p-8 rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-4 text-background">
        Siap untuk Mempercantik Rumah Anda?
      </h2>
      <p className="text-xl mb-6 text-background">
        Temukan koleksi furnitur terbaik kami dan ubah ruangan Anda menjadi
        lebih nyaman dan stylish.
      </p>
      <Link
        href="/products"
        className="bg-primary text-foreground px-8 py-3 rounded-full font-bold hover:bg-opacity-90  transition-colors"
      >
        Mulai Belanja Sekarang
      </Link>
    </div>
  );
}
