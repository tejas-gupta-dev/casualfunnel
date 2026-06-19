import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useCartStore } from "../services/CartStore";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../tracking/Tracking";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    addToCart,
  } = useCartStore();

  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.discountPrice * item.quantity,
    0
  );
  
  useEffect(() => {
    trackEvent("cart_view");
  }, []);

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500">
            Add some products to continue shopping.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white rounded-xl shadow">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-6 border-b"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-36 object-cover rounded-lg"
                />

                <div className="flex-1">

                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.brand}
                  </p>

                  <div className="mt-2">
                    <span className="font-bold text-lg">
                      ₹{item.discountPrice}
                    </span>

                    <span className="line-through text-gray-400 ml-2">
                      ₹{item.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="w-8 h-8 rounded bg-gray-200"
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        addToCart(item)
                      }
                      className="w-8 h-8 rounded bg-gray-200"
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

          <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-24">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Items</span>
                <span>
                  {cartItems.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>
                  ₹{subtotal}
                </span>
              </div>

            </div>

            <button onClick={ ()=>{
              trackEvent('order-placed');
              navigate(`/`);
            } }
              className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
            >
              Checkout
            </button>

          </div>

        </div>
      </div>
    </>
  );
};

export default Cart;
