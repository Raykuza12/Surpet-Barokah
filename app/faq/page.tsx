import { Metadata } from "next";
import FAQAccordion from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ - Surpet Barokah",
  description:
    "Pertanyaan yang sering diajukan tentang produk dan layanan Surpet Barokah",
};

const faqItems = [
  {
    question: "Bagaimana cara memesan produk di Surpet Barokah?",
    answer:
      "Anda dapat memesan produk kami dengan mengunjungi halaman produk, memilih item yang Anda inginkan, dan menambahkannya ke keranjang belanja. Setelah itu, ikuti proses checkout untuk menyelesaikan pemesanan Anda.",
  },
  {
    question: "Berapa lama waktu pengiriman produk?",
    answer:
      "Waktu pengiriman bervariasi tergantung lokasi Anda. Untuk pengiriman dalam kota biasanya memakan waktu 1-3 hari kerja, sementara untuk luar kota bisa 3-7 hari kerja.",
  },
  {
    question: "Apakah ada garansi untuk produk Surpet Barokah?",
    answer:
      "Ya, kami memberikan garansi untuk setiap produk kami. Garansi mencakup cacat produksi dan berlaku selama 1 tahun sejak tanggal pembelian.",
  },
  {
    question: "Bagaimana jika saya ingin mengembalikan atau menukar produk?",
    answer:
      "Kami menerima pengembalian dan penukaran produk dalam waktu 14 hari setelah penerimaan, asalkan produk masih dalam kondisi asli dan belum digunakan. Silakan hubungi layanan pelanggan kami untuk proses lebih lanjut.",
  },
  {
    question: "Apakah Surpet Barokah menyediakan layanan perakitan furnitur?",
    answer:
      "Ya, kami menyediakan layanan perakitan untuk sebagian besar produk kami. Layanan ini tersedia dengan biaya tambahan dan dapat dipilih saat proses checkout.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto">
        <FAQAccordion items={faqItems} />
      </div>
    </div>
  );
}
