import { Link } from "react-router-dom";
import { ShoppingCart, BarChart3 } from "lucide-react";
import { useAuthStore } from "../services/authStore";

const Navbar = () => {
  const user = useAuthStore(
    (state) => state.user
  );

  const logout = useAuthStore(
    (state) => state.logout
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold tracking-wide"
        >
          CasualFunnel
        </Link>

        <div className="hidden md:flex gap-8">
          <Link
            to="/"
            className="hover:text-pink-500 transition"
          >
            Home
          </Link>

          {user && (
            <Link
              to="/analytics"
              className="hover:text-pink-500 transition flex items-center gap-2"
            >
              <BarChart3 size={18} />
              Analytics
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">

          <Link to="/cart">
            <ShoppingCart
              size={22}
              className="cursor-pointer"
            />
          </Link>

          {user ? (
            <>
              <span className="hidden md:block text-sm font-medium">
                Hi, {user.name}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Register
                </button>
              </Link>

              <Link to="/login">
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Login
                </button>
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;