

import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../tracking/Tracking";
import { useCartStore } from "../services/cartStore";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const addToCart =
    useCartStore((state) => state.addToCart);

  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart(product);
    trackEvent("add_to_cart", {
      pid: product.id,
      name: product.name,
      price: product.discountPrice,
    });

    window.dispatchEvent(
      new CustomEvent("cart-added")
    );
  };

  return (
    <article
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold line-clamp-1">
          {product.name}
        </h3>

        <p className="text-gray-500">
          {product.brand}
        </p>

        <div className="flex justify-between items-center mt-3">
          <div>
            <span className="font-bold">
              ₹{product.discountPrice}
            </span>

            <span className="ml-2 line-through text-gray-400">
              ₹{product.price}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-3 py-2 rounded-lg text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default memo(ProductCard);