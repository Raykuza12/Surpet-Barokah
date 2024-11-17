import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - Surpet Barokah",
  description:
    "Kebijakan privasi Surpet Barokah untuk melindungi data pengguna",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Image
            src="/images/privacy-icon.svg" // Pastikan untuk menambahkan ikon yang sesuai
            alt="Privacy Icon"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Kebijakan Privasi
          </h1>
          <p className="text-lg text-foreground-muted">
            Kami menghargai privasi Anda dan berkomitmen untuk melindungi
            informasi pribadi Anda.
          </p>
        </div>

        <div className="bg-background-light rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Informasi yang Kami Kumpulkan
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Nama lengkap</li>
            <li>Alamat email</li>
            <li>Nomor telepon</li>
            <li>Alamat pengiriman</li>
            <li>
              Informasi pembayaran (diproses secara aman oleh penyedia layanan
              pembayaran pihak ketiga)
            </li>
          </ul>
        </div>

        <div className="bg-background-light rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Bagaimana Kami Menggunakan Informasi Anda
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Memproses pesanan dan pengiriman produk</li>
            <li>
              Berkomunikasi dengan Anda tentang pesanan, produk, dan promosi
            </li>
            <li>Meningkatkan layanan dan pengalaman berbelanja kami</li>
            <li>Mendeteksi dan mencegah penipuan</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-background-light rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Keamanan Data
            </h2>
            <p className="text-foreground">
              Kami mengimplementasikan langkah-langkah keamanan yang tepat untuk
              melindungi informasi pribadi Anda dari akses yang tidak sah,
              perubahan, pengungkapan, atau penghancuran yang tidak sah.
            </p>
          </div>
          <div className="bg-background-light rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Berbagi Informasi
            </h2>
            <p className="text-foreground">
              Kami tidak menjual atau menyewakan informasi pribadi Anda kepada
              pihak ketiga. Kami hanya membagikan informasi Anda dengan pihak
              ketiga yang membantu kami dalam operasi bisnis kami.
            </p>
          </div>
        </div>

        <div className="bg-background-light rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Hak Anda</h2>
          <p className="text-foreground mb-4">
            Anda memiliki hak untuk mengakses, memperbarui, atau menghapus
            informasi pribadi Anda yang kami miliki. Jika Anda ingin menggunakan
            hak ini, silakan hubungi kami.
          </p>
          <button className="bg-primary text-foreground px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
            Hubungi Kami
          </button>
        </div>

        <div className="bg-background-light rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Hubungi Kami
          </h2>
          <p className="text-foreground mb-2">
            Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan
            Privasi kami, silakan hubungi kami di:
          </p>
          <ul className="space-y-2 text-foreground">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              privacy@surpetbarokah.com
            </li>
            <li>
              <span className="font-semibold">Telepon:</span> +62 812 3456 7890
            </li>
            <li>
              <span className="font-semibold">Alamat:</span> Jl. Contoh No. 123,
              Kota, Indonesia
            </li>
          </ul>
        </div>

        <div className="text-center mt-12 text-foreground-muted">
          <p>Terakhir diperbarui: 1 Juni 2023</p>
        </div>
      </div>
    </div>
  );
}
