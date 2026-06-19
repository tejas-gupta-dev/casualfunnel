import { useEffect, useState } from "react";
import { getProducts } from "../services/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchProducts = async () => {
      try {
        const data = await getProducts();

        if (mounted) {
          setProducts(data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, []);

  return { products, loading };
};