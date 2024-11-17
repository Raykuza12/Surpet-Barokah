export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Pesanan Saya</h1>
      <div className="bg-background-light rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-background-dark text-foreground">
            <tr>
              <th className="px-6 py-3 text-left">No. Pesanan</th>
              <th className="px-6 py-3 text-left">Tanggal</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-background-dark">
            <tr>
              <td className="px-6 py-4">#ORD001</td>
              <td className="px-6 py-4">2024-01-20</td>
              <td className="px-6 py-4">Rp 1.500.000</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Selesai
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-primary hover:text-primary-dark">
                  Detail
                </button>
              </td>
            </tr>
            {/* Add more order rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
