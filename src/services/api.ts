import type { Product, ProductsResponse } from "../types/product";

const BASE_URL = "https://dummyjson.com";
const FOOD_CATEGORY = "groceries";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function request<T>(
  path: string,
  signal?: AbortSignal,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, { signal });

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
    );
  }

  const data: T = await response.json();
  return data;
}

export async function getProducts(
  signal?: AbortSignal,
): Promise<Product[]> {
  const data = await request<ProductsResponse>(
    "/products?limit=0",
    signal,
  );

  // DummyJSON's main products endpoint contains many categories.
  // This project is a FOOD Product Explorer, so only grocery products
  // are displayed in the application.
  return data.products.filter(
    (product) => product.category === FOOD_CATEGORY,
  );
}

export async function getProductById(
  id: number,
  signal?: AbortSignal,
): Promise<Product> {
  const product = await request<Product>(
    `/products/${id}`,
    signal,
  );

  // Prevent non-food products from appearing if someone manually
  // enters an ID such as /products/1.
  if (product.category !== FOOD_CATEGORY) {
    throw new ApiError("Food product not found", 404);
  }

  return product;
}