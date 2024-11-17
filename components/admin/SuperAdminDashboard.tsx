// components/admin/SuperAdminDashboard.tsx

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

interface Product {
  id: number;
  name: string;
  stock: number;
  price: number;
  status: "available" | "out_of_stock";
}

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Dummy data untuk contoh
  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "staff",
      status: "active",
    },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Sofa Minimalis",
      stock: 10,
      price: 2500000,
      status: "available",
    },
    {
      id: 2,
      name: "Meja Makan",
      stock: 0,
      price: 1500000,
      status: "out_of_stock",
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-background-dark text-foreground p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">Super Admin</h1>
        </div>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activeTab === "dashboard"
                ? "bg-primary text-foreground"
                : "hover:bg-background-darker"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activeTab === "users"
                ? "bg-primary text-foreground"
                : "hover:bg-background-darker"
            }`}
          >
            Manajemen Pengguna
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activeTab === "products"
                ? "bg-primary text-foreground"
                : "hover:bg-background-darker"
            }`}
          >
            Manajemen Produk
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activeTab === "settings"
                ? "bg-primary text-foreground"
                : "hover:bg-background-darker"
            }`}
          >
            Pengaturan
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Total Pengguna</h3>
                <p className="text-3xl font-bold text-primary">
                  {users.length}
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Total Produk</h3>
                <p className="text-3xl font-bold text-primary">
                  {products.length}
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Pendapatan</h3>
                <p className="text-3xl font-bold text-primary">Rp 15.000.000</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manajemen Pengguna</h2>
              <button className="bg-primary text-foreground px-4 py-2 rounded-lg hover:bg-primary-dark">
                Tambah Pengguna
              </button>
            </div>
            <div className="bg-background rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-background-dark text-foreground">
                  <tr>
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">Nama</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Role</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-t border-background-darker"
                    >
                      <td className="px-6 py-4">{user.id}</td>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.role}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            user.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-primary hover:text-primary-dark mr-2">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manajemen Produk</h2>
              <button className="bg-primary text-foreground px-4 py-2 rounded-lg hover:bg-primary-dark">
                Tambah Produk
              </button>
            </div>
            <div className="bg-background rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-background-dark text-foreground">
                  <tr>
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">Nama</th>
                    <th className="px-6 py-3 text-left">Stok</th>
                    <th className="px-6 py-3 text-left">Harga</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-t border-background-darker"
                    >
                      <td className="px-6 py-4">{product.id}</td>
                      <td className="px-6 py-4">{product.name}</td>
                      <td className="px-6 py-4">{product.stock}</td>
                      <td className="px-6 py-4">
                        Rp {product.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            product.status === "available"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-primary hover:text-primary-dark mr-2">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Pengaturan</h2>
            {/* Konten pengaturan bisa ditambahkan di sini */}
            <p>Pengaturan akan ditambahkan di sini.</p>
          </div>
        )}
      </div>
    </>
  );
}
