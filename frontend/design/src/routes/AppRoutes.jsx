import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Analytics from "../pages/AnalyticalPages";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Home = lazy(() =>
  import("../pages/Home")
);

// const ProductDetails = lazy(() =>
//   import("../pages/ProductDetails")
// );

const Cart = lazy(() =>
  import("../pages/Cart")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;