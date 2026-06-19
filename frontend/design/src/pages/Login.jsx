import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import { useAuthStore } from "../services/authStore";

const Login = () => {
  const navigate = useNavigate();

  const login = useAuthStore(
    (state) => state.login
  );

  const loading = useAuthStore(
    (state) => state.loading
  );

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black p-4">

        <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="text-gray-300 mt-2">
              Login to continue
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div className="bg-white/10 rounded-xl flex items-center px-4">
              <Mail
                className="text-gray-400"
                size={18}
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full bg-transparent p-4 text-white outline-none"
              />
            </div>

            <div className="bg-white/10 rounded-xl flex items-center px-4">
              <Lock
                className="text-gray-400"
                size={18}
              />

              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="w-full bg-transparent p-4 text-white outline-none"
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              {loading
                ? "Signing In..."
                : "Login"}
            </button>

          </form>

          <p className="text-center text-gray-300 mt-6">
            Don't have an account?

            <Link
              to="/register"
              className="ml-2 text-white font-semibold"
            >
              Register
            </Link>
          </p>

        </div>

      </div>
    </>
  );
};

export default Login;