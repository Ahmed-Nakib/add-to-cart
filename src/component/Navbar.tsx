import type { Product } from "../types/type";

interface NavbarProps {
  cart: Product[];
}

const Navbar = ({ cart }: NavbarProps) => {
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <nav className="bg-indigo-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">🛍️ React Cart</h1>
      <div className="bg-white text-indigo-600 font-semibold rounded-full px-5 py-1 shadow">
        Cart: {totalItems} items
      </div>
    </nav>
  );
};

export default Navbar;
