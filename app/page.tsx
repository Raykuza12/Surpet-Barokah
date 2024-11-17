import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import AppLayout from "@/components/layout/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-16">
        {/* Hero Section */}
        <Hero />

        {/* Categories Section */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Kategori Produk
          </h2>
          <Categories />
        </section>

        {/* Featured Products Section */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Produk Unggulan
          </h2>
          <FeaturedProducts />
        </section>

        {/* Testimonials Section */}
        <section className="bg-background-light py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Apa Kata Pelanggan Kami
            </h2>
            <Testimonials />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-4 mb-16">
          <CallToAction />
        </section>
      </div>
    </AppLayout>
  );
}
