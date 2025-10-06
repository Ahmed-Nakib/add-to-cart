import type { Product } from "../types/type";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 flex flex-col items-center hover:shadow-xl transition duration-300 ease-in-out border border-gray-100">
      <h1 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {product.name}
      </h1>
      <p className="text-indigo-600 font-bold text-xl mb-3">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-transform hover:scale-105"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
