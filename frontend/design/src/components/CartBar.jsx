import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../services/cartStore";

const CartBar = () => {
  const navigate = useNavigate();

  const cartItems =
    useCartStore((state) => state.cartItems);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShow(true);

      
    };

    window.addEventListener(
      "cart-added",
      handler
    );

    return () =>
      window.removeEventListener(
        "cart-added",
        handler
      );
  }, []);

  if (!show || cartItems.length === 0)
    return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white z-50 shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          {cartItems.length} item
          {cartItems.length > 1 ? "s" : ""}
          {" "}added to cart
        </div>

        <button
          onClick={() => navigate("/cart")}
          className="bg-white text-black px-5 py-2 rounded-lg font-medium"
        >
          View Cart
        </button>

      </div>

    </div>
  );
};

export default CartBar;