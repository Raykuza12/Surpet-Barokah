import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan - Surpet Barokah",
  description: "Syarat dan ketentuan penggunaan layanan Surpet Barokah",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Image
            src="/images/terms-icon.svg"
            alt="Terms Icon"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Syarat & Ketentuan
          </h1>
          <p className="text-lg text-foreground-muted">
            Harap baca dengan seksama syarat dan ketentuan penggunaan layanan
            kami.
          </p>
        </div>

        <div className="bg-background-light rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            1. Ketentuan Umum
          </h2>
          <p className="text-foreground mb-4">
            Dengan mengakses dan menggunakan website Surpet Barokah, Anda
            menyetujui untuk terikat dengan syarat dan ketentuan ini. Jika Anda
            tidak menyetujui salah satu dari ketentuan ini, Anda tidak
            diperkenankan menggunakan layanan kami.
          </p>
        </div>

        <div className="bg-background-light rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            2. Akun Pengguna
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Anda harus berusia minimal 18 tahun untuk membuat akun</li>
            <li>Informasi akun harus akurat dan lengkap</li>
            <li>Anda bertanggung jawab atas keamanan password akun</li>
            <li>
              Kami berhak menonaktifkan akun yang melanggar ketentuan penggunaan
            </li>
          </ul>
        </div>

        <div className="bg-background-light rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            3. Pemesanan dan Pembayaran
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>
              Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan
            </li>
            <li>
              Pembayaran harus dilakukan sesuai dengan metode yang tersedia
            </li>
            <li>Pesanan akan diproses setelah pembayaran terverifikasi</li>
            <li>
              Kami berhak membatalkan pesanan yang dicurigai sebagai penipuan
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-background-light rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              4. Pengiriman
            </h2>
            <p className="text-foreground">
              Waktu pengiriman dapat bervariasi tergantung lokasi dan kondisi.
              Kami akan berusaha memberikan estimasi waktu pengiriman yang
              akurat, namun tidak bertanggung jawab atas keterlambatan di luar
              kendali kami.
            </p>
          </div>
          <div className="bg-background-light rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              5. Pengembalian
            </h2>
            <p className="text-foreground">
              Pengembalian produk dapat dilakukan dalam waktu 14 hari setelah
              penerimaan, dengan syarat produk dalam kondisi asli dan belum
              digunakan.
            </p>
          </div>
        </div>

        <div className="bg-background-light rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            6. Hak Kekayaan Intelektual
          </h2>
          <p className="text-foreground">
            Seluruh konten di website ini dilindungi hak cipta dan merupakan
            properti dari Surpet Barokah. Penggunaan tanpa izin dapat dikenakan
            sanksi hukum.
          </p>
        </div>

        <div className="bg-background-light rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Hubungi Kami
          </h2>
          <p className="text-foreground mb-4">
            Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan kami,
            silakan hubungi kami di:
          </p>
          <ul className="space-y-2 text-foreground">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              legal@surpetbarokah.com
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
