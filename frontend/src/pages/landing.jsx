import { Link } from "react-router-dom";

export default function Landing() {
  return (
    // Outer container with background color and min-height
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--bakery-cream)" }}
    >
      {/* Navbar Container */}
      <nav className="p-4 md:p-6 flex justify-between items-center w-full">

        {/* Left Side: "Sweet Shop" Title/Logo */}
        <Link
          to="/" // Often the logo links to the home page
          className="text-xl font-bold flex items-center gap-2"
          style={{ color: "var(--bakery-caramel)" }}
        >
          {/* Using a simple emoji icon for the 'Sweet Shop' visual */}
          <span role="img" aria-label="sweet shop">🍰</span> Sweet Shop
        </Link>

        {/* Right Side: Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-medium text-gray-700 hover:text-black transition"
          >
            Home
          </Link>

          {/* This login button style is now a simple link with the caramel color, matching the image's top right */}
          <Link
            to="/login"
            className="font-semibold transition hover:opacity-80"
            style={{
              color: "var(--bakery-caramel)",
            }}
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section: Centered content */}
      <section className="flex flex-col items-center justify-center text-center flex-1 p-4">
        <span className="text-sm mb-3 text-gray-500">
          ✨ Freshly Baked Happiness
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Life is{" "}
          <span style={{ color: "var(--bakery-caramel)" }}>
            Sweeter
          </span>{" "}
          Here
        </h1>

        <p className="text-gray-600 max-w-xl mb-8">
          Discover delicious sweets inspired by warm bakery traditions.
        </p>

        {/* Buttons: Styles are SWAPPED to match the image: Start Shopping is outlined, Sign In is filled. */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2">

          {/* Start Shopping: Now the OUTLINED/SECONDARY button */}
          <Link
            to="/shop"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition hover:bg-white/60 hover:scale-[1.02]"
            style={{
              border: "2px solid var(--bakery-caramel)",
              color: "var(--bakery-caramel)",
            }}
          >
            Start Shopping
          </Link>

          {/* Sign In: Now the FILLED/PRIMARY button */}
          <Link
            to="/login"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-semibold shadow-lg transition hover:scale-105"
            style={{
              background:
                "linear-gradient(90deg, var(--bakery-caramel), var(--bakery-honey))",
            }}
          >
            Sign In
          </Link>
        </div>
      </section>
    </div>
  );
}