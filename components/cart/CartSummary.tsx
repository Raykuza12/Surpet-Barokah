import Link from "next/link";

interface CartSummaryProps {
  items: {
    id: number;
    price: number;
    quantity: number;
  }[];
}

export default function CartSummary({ items }: CartSummaryProps) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 50000; // Biaya pengiriman tetap
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="bg-background-light rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">Ringkasan Belanja</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-foreground-muted">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-foreground-muted">
          <span>Pengiriman</span>
          <span>{formatPrice(shipping)}</span>
        </div>
        <div className="border-t border-background-dark pt-3">
          <div className="flex justify-between font-bold text-foreground">
            <span>Total</span> <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      <button className="w-full py-3 rounded-full bg-primary hover:bg-primary-dark text-foreground transition-colors duration-200">
        <Link href="./checkout">Proses Pembayaran</Link>
      </button>
    </div>
  );
}
