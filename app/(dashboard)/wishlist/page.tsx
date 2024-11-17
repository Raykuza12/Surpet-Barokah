import Image from "next/image";

export default function WishlistPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Wishlist Item */}
        <div className="bg-background-light rounded-lg shadow overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/images/product-placeholder.jpg"
              alt="Product"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Nama Produk</h3>
            <p className="text-primary font-bold mb-4">Rp 500.000</p>
            <div className="flex space-x-2">
              <button className="flex-1 bg-primary text-foreground px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                Tambah ke Keranjang
              </button>
              <button className="p-2 text-red-500 hover:bg-red-50 rounded-md">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Add more wishlist items as needed */}
      </div>
    </div>
  );
}
