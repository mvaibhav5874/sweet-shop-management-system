export default function Navbar() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const user = localStorage.getItem("user");

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-lime-400 to-green-400 flex items-center justify-center">
            🍬
          </div>
          <span className="text-xl font-bold text-gray-800">
            Sweet Shop
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {user && (
            <span className="text-sm text-gray-600">
              {user}
            </span>
          )}

          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
