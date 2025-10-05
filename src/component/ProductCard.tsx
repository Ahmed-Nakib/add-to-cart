import type { Product } from "../types/type";


interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center space-y-3">
        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold">
          {product.name.charAt(0)}
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 text-sm">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg mt-2 font-medium transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
