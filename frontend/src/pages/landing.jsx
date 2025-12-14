import { Link } from "react-router-dom";

export default function Landing() {
  return (
      <div className="min-h-screen bg-bakery-cream flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-6">
          <div className="text-2xl font-heading text-bakery-caramel font-bold">
            🍰 Sweet Shop
          </div>

          <div className="flex gap-8 items-center">
            <Link to="/" className="text-bakery-dark font-medium">
              Home
            </Link>

            <Link
                to="/login"
                className="px-6 py-2 rounded-full border-2 border-bakery-caramel text-bakery-caramel"
            >
              Login
            </Link>

            <Link
                to="/register"
                className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-bakery-caramel to-bakery-honey"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <span className="mb-6 px-6 py-2 rounded-full bg-white shadow text-bakery-caramel">
          ✨ Artisan Confectionery Since 1985
        </span>

          <h1 className="text-6xl font-heading text-bakery-dark mb-6">
            The Art of{" "}
            <span className="text-bakery-caramel underline decoration-bakery-honey">
            Sweet
          </span>{" "}
            Making
          </h1>

          <p className="max-w-2xl text-lg text-gray-600 mb-12">
            Discover handcrafted confections made with time-honored recipes
            and the finest ingredients.
          </p>

          <div className="flex gap-8">
            <Link
                to="/shop"
                className="px-10 py-4 rounded-2xl text-white text-lg font-semibold bg-gradient-to-r from-bakery-caramel to-bakery-honey shadow-xl"
            >
              Explore Our Shop →
            </Link>

            <Link
                to="/login"
                className="px-10 py-4 rounded-2xl border-2 border-bakery-caramel text-bakery-caramel text-lg font-semibold"
            >
              Sign In
            </Link>
          </div>
        </section>
      </div>
  );
}
