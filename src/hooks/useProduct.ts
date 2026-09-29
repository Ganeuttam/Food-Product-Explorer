import { useEffect, useState } from "react";
import {
  ApiError,
  getProductById,
} from "../services/api";
import type { Product } from "../types/product";

interface UseProductResult {
  product: Product | null;
  loading: boolean;
  error: string | null;
  notFound: boolean;
  retry: () => void;
}

export function useProduct(
  id: number | null,
): UseProductResult {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(id !== null);
  const [error, setError] = useState<string | null>(null);
  const [missing, setMissing] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (id === null) {
      setLoading(false);
      setProduct(null);
      setError(null);
      setMissing(true);
      return;
    }

    const controller = new AbortController();

    setLoading(true);
    setError(null);
    setMissing(false);
    setProduct(null);

    getProductById(id, controller.signal)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) {
          return;
        }

        if (
          err instanceof ApiError &&
          err.status === 404
        ) {
          setMissing(true);
        } else {
          setError("Unable to load product.");
        }

        setLoading(false);
      });

    return () => controller.abort();
  }, [id, reloadKey]);

  const retry = () => {
    setLoading(true);
    setError(null);
    setMissing(false);
    setReloadKey((key) => key + 1);
  };

  return {
    product,
    loading,
    error,
    notFound: id === null || missing,
    retry,
  };
}