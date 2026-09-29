import type { Product, ProductFilters } from "../types/product";

export function filterProducts(
  products: Product[],
  filters: ProductFilters,
): Product[] {
  const query = filters.query.trim().toLowerCase();

  return products.filter((product) => {
    const matchesTitle = product.title
      .toLowerCase()
      .includes(query);

    const matchesCategory =
      filters.category === "all" ||
      product.category === filters.category;

    const matchesRating =
      product.rating >= filters.minRating;

    return matchesTitle && matchesCategory && matchesRating;
  });
}

export function getCategories(products: Product[]): string[] {
  return [
    ...new Set(products.map((product) => product.category)),
  ].sort();
}