import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section id="products" className="py-20 bg-gray-50 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}