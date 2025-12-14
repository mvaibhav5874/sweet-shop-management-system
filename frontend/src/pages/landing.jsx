import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-yellow-50">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-2 font-bold text-xl">
          🍬 Sweet Shop
        </div>

        <div className="flex items-center gap-6">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-600">
            Home
          </span>

          <Link to="/login" className="text-gray-700">
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-full bg-green-400 text-white font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-24">

        <span className="mb-4 px-4 py-2 rounded-full bg-pink-100 text-pink-500 text-sm font-semibold">
          ✨ Welcome to Sweet Shop
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
          Life is{" "}
          <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
            Sweeter
          </span>{" "}
          Here
        </h1>

        <p className="mt-6 max-w-2xl text-gray-600 text-lg">
          Discover a world of delightful confections. From classic chocolates to
          exotic candies, we have treats that will satisfy every sweet tooth.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex gap-6">
          <Link
            to="/login"
            className="px-8 py-4 rounded-full font-semibold
            bg-gradient-to-r from-green-400 to-yellow-300
            shadow-lg hover:opacity-90 transition"
          >
            Start Shopping →
          </Link>

          <Link
            to="/login"
            className="px-8 py-4 rounded-full border-2 border-green-400
            text-green-500 font-semibold hover:bg-green-50"
          >
            Sign In
          </Link>
        </div>
      </section>

    </div>
  );
}
