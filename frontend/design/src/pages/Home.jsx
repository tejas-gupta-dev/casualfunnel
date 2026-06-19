import { lazy, Suspense, useEffect } from "react";
import Navbar from "../components/Navbar";
import {trackEvent} from "../tracking/Tracking"
import CartBar from "../components/CartBar";

const Hero = lazy(() =>
  import("../components/Hero")
);

const ProductGrid = lazy(() =>
  import("../components/ProductGrid")
);

const Home = () => {
  useEffect(() => {
    trackEvent("page_view", {
      page: "home",
    });
  }, []);


  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="h-[80vh] animate-pulse bg-gray-100" />
        }
      >
        <Hero />
      </Suspense>

      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto p-8">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-80 bg-slate-900 animate-pulse rounded-xl"
                />
              ))}
            </div>
          </div>
        }
      >
        <ProductGrid />
      </Suspense>

      <CartBar />
    </>
  );
};

export default Home;