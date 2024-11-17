import { Metadata } from "next";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

export const metadata: Metadata = {
  title: "Checkout - Surpet Barokah",
  description: "Proses pembayaran untuk pesanan Anda di Surpet Barokah",
};

// Dummy data untuk item pesanan
const orderItems = [
  {
    id: 1,
    name: "Kursi Minimalis Modern",
    price: 1500000,
    quantity: 2,
    image: "/images/products/kursi-minimalis.jpg",
  },
  {
    id: 2,
    name: "Meja Makan Kayu Jati",
    price: 3000000,
    quantity: 1,
    image: "/images/products/meja-makan.jpg",
  },
];

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div>
          <CheckoutForm />
        </div>

        {/* Order Summary */}
        <div>
          <OrderSummary items={orderItems} />
        </div>
      </div>
    </div>
  );
}
