import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    { label: "Profil", href: "/profile", icon: "user" },
    { label: "Pesanan", href: "/orders", icon: "shopping-bag" },
    { label: "Wishlist", href: "/wishlist", icon: "heart" },
  ];

  return (
    <aside className="w-64 bg-background-dark text-foreground min-h-screen p-6">
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-primary-light">Dashboard</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 rounded- md hover:bg-background-light transition-colors"
            >
              <span className={`icon-${item.icon}`}></span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
