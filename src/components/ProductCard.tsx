import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import {
  formatCategory,
  formatPrice,
  formatRating,
} from "../utils/format";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <div className="product-card-body">
        <h2>{product.title}</h2>

        <span className="badge">
          {formatCategory(product.category)}
        </span>

        <div className="product-meta">
          <span className="price">
            {formatPrice(product.price)}
          </span>

          <span className="rating">
            ★ {formatRating(product.rating)}
          </span>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="btn"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}