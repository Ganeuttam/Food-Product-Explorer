import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/products" className="logo">
            Food Product Explorer
          </Link>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}