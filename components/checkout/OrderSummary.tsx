import Image from "next/image";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSummaryProps {
  items: OrderItem[];
}

export default function OrderSummary({ items }: OrderSummaryProps) {
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
      <h2 className="text-xl font-bold mb-4">Ringkasan Pesanan</h2>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-medium text-foreground">{item.name}</h3>
              <p className="text-sm text-foreground-muted">
                {item.quantity} x {formatPrice(item.price)}
              </p>
            </div>
            <p className="font-medium text-foreground">
              {formatPrice(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border-t border-background-dark pt-3">
        <div className="flex justify-between text-foreground-muted">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-foreground-muted">
          <span>Pengiriman</span>
          <span>{formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between font-bold text-foreground">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}
