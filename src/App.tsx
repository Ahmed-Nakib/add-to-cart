import { useState } from "react";
import Navbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import CartSection from "./component/CartSection";
import type { Product } from "./types/type";

function App() {
  const products: Product[] = [
    { id: 1, name: "Modern T-Shirt", price: 25 },
    { id: 2, name: "Stylish Hoodie", price: 40 },
    { id: 3, name: "Cool Sneakers", price: 60 },
    { id: 4, name: "Trendy Cap", price: 15 },
  ];

  const [cart, setCart] = useState<Product[]>([]);


  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: (item.quantity || 0) - 1 } : item
        )
        .filter((item) => (item.quantity || 0) > 0)
    );
  };


  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar cart={cart} />

     
     <div className="flex py-10 px-2.5 gap-3.5">
        <section className=" w-9/12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart}/>)}
      </section>

      
      <CartSection
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
      />
     </div>

    </div>
  );
}

export default App;
