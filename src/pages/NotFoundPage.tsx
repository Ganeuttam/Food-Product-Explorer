import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="state">
      <h1>Page not found</h1>
      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/products" className="btn">
        Go to products
      </Link>
    </div>
  );
}