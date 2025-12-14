import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--bakery-cream)" }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="font-bold text-xl">
          🍰 Sweet Shop
        </div>

        <div className="flex gap-8 items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-black font-medium"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="px-5 py-2 rounded-full font-medium"
            style={{
              border: "2px solid var(--bakery-caramel)",
              color: "var(--bakery-caramel)",
            }}
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center flex-1">
        <span className="text-sm mb-3 text-gray-500">
          ✨ Freshly Baked Happiness
        </span>

        <h1 className="text-5xl font-extrabold mb-4">
          Life is{" "}
          <span style={{ color: "var(--bakery-caramel)" }}>
            Sweeter
          </span>{" "}
          Here
        </h1>

        <p className="text-gray-600 max-w-xl mb-8">
          Discover delicious sweets inspired by warm bakery traditions.
        </p>

        <div className="flex gap-5">
          <Link
            to="/shop"
            className="px-8 py-3 rounded-full text-white font-semibold shadow-lg transition hover:scale-105"
            style={{
              background:
                "linear-gradient(90deg, var(--bakery-caramel), var(--bakery-honey))",
            }}
          >
            Start Shopping →
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 rounded-full font-medium transition hover:bg-white/50"
            style={{
              border: "2px solid var(--bakery-caramel)",
              color: "var(--bakery-caramel)",
            }}
          >
            Sign In
          </Link>
        </div>
      </section>
    </div>
  );
}
