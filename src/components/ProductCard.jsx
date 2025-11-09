export default function ProductCard({ product }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:scale-[1.02] transition cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      </div>
    );
  }