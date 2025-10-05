import type { Product } from "../types/type";


interface CartSectionProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  totalPrice: number;
}

const CartSection = ({ cart, addToCart, removeFromCart, totalPrice }: CartSectionProps) => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty!</p>
      ) : (
        <div className="space-y-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span className="text-gray-800 font-medium">
                {item.name} × {item.quantity}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                >
                  −
                </button>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="text-right font-semibold text-lg mt-4">
            Total: ${totalPrice}
          </div>
        </div>
      )}
    </section>
  );
};

export default CartSection;
