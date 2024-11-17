import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami - Surpet Barokah",
  description: "Mengenal lebih dekat tentang Surpet Barokah dan visi kami",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Tentang Surpet Barokah
        </h1>
        <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
          Kami adalah perusahaan furnitur yang berkomitmen untuk menghadirkan
          kenyamanan dan keindahan ke dalam rumah Anda.
        </p>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">Cerita Kami</h2>
          <p className="text-foreground-muted">
            Surpet Barokah didirikan pada tahun 2010 dengan visi untuk
            menciptakan furnitur berkualitas tinggi yang tidak hanya indah
            dipandang, tetapi juga nyaman digunakan. Kami memulai perjalanan
            kami dari sebuah bengkel kecil dan kini telah berkembang menjadi
            salah satu produsen furnitur terkemuka di Indonesia.
          </p>
          <p className="text-foreground-muted">
            Setiap produk kami adalah hasil dari dedikasi, keahlian, dan
            perhatian terhadap detail. Kami bangga dapat menjadi bagian dari
            rumah-rumah di seluruh Indonesia, membantu menciptakan ruang yang
            nyaman dan penuh inspirasi bagi keluarga.
          </p>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden">
          <Image
            src="/images/about/our-story.jpg"
            alt="Cerita Surpet Barokah"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="bg-background-light p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Visi dan Misi
        </h2>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-primary">Visi</h3>
          <p className="text-foreground-muted">
            Menjadi perusahaan furnitur terkemuka yang dikenal karena kualitas
            dan inovasi, serta memberikan dampak positif bagi masyarakat dan
            lingkungan.
          </p>
          <h3 className="text-2xl font-semibold text-primary">Misi</h3>
          <ul className="list-disc list-inside text-foreground-muted">
            <li>
              Menyediakan produk furnitur berkualitas tinggi dan desain yang
              inovatif.
            </li>
            <li>Memberikan pelayanan pelanggan yang ramah dan profesional.</li>
            <li>
              Berkomitmen terhadap keberlanjutan dan penggunaan material ramah
              lingkungan.
            </li>
            <li>Memberdayakan karyawan dan mendukung perkembangan mereka.</li>
          </ul>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-background-light p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Nilai-Nilai Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Kualitas",
              description:
                "Kami berkomitmen untuk menghasilkan produk berkualitas tinggi tanpa kompromi.",
              icon: "🌟",
            },
            {
              title: "Inovasi",
              description:
                "Kami terus berinovasi dalam desain dan teknologi untuk memenuhi kebutuhan pelanggan.",
              icon: "💡",
            },
            {
              title: "Keberlanjutan",
              description:
                "Kami peduli terhadap lingkungan dan berusaha untuk menggunakan material yang ramah lingkungan.",
              icon: "🌿",
            },
          ].map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-4xl">{value.icon}</div>
              <h3 className="text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-foreground-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Tim Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Budi Santoso",
              role: "Founder & CEO",
              image: "/images/team/budi-santoso.jpg",
            },
            {
              name: "Siti Rahayu",
              role: "Head of Design",
              image: "/images/team/siti-rahayu.jpg",
            },
            {
              name: "Agus Pratama",
              role: "Production Manager",
              image: "/images/team/agus-pratama.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-background-light p-6 rounded-xl shadow-lg text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-foreground-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-foreground p-12 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          Siap untuk Mempercantik Rumah Anda?
        </h2>
        <p className="text-xl mb-8">
          Jelajahi koleksi furnitur kami dan temukan piece sempurna untuk rumah
          Anda.
        </p>
        <Link
          href="/products"
          className="bg-foreground text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors"
        >
          Lihat Koleksi Kami
        </Link>
      </section>
    </div>
  );
}
