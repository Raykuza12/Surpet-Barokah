export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>
      <div className="bg-background-light p-6 rounded-lg shadow">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nama</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Masukkan nama"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                placeholder="Masukkan email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                No. Telepon
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md"
                placeholder="Masukkan no. telepon"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Alamat</label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                placeholder="Masukkan alamat"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-foreground px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
}
