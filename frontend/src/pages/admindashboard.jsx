import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import AdminSweetForm from "../components/AdminSweetForm";
import AdminSweetCard from "../components/AdminSweetCard";

export default function AdminDashboard() {
  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadSweets = async () => {
    try {
      const res = await api.get("/sweets");
      console.log("SWEETS FROM API:", res.data); // 🔍 debug
      setSweets(res.data || []);
    } catch (err) {
      console.error("Failed to load sweets", err);
      setSweets([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSweets();
  }, []);

  // ✅ SAFE calculations
  const totalProducts = sweets.length;
  const inventory = sweets.reduce(
    (sum, s) => sum + Number(s.quantity || 0),
    0
  );
  const outOfStock = sweets.filter(
    (s) => Number(s.quantity) === 0
  ).length;
  const categories = new Set(
    sweets.map((s) => s.category)
  ).size;

  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            Sweet Shop Admin
          </h1>
          <p className="text-center text-gray-500 mt-2 mb-10">
            Manage your inventory and keep customers happy
          </p>

          {/* LOADING STATE */}
          {loading && (
            <div className="text-center text-gray-500">
              Loading stats...
            </div>
          )}

          {/* STATS */}
          {!loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <StatCard
                title="Total Products"
                value={totalProducts}
                bg="bg-green-50"
                icon="📦"
              />
              <StatCard
                title="Inventory"
                value={inventory}
                bg="bg-pink-50"
                icon="📊"
              />
              <StatCard
                title="Out of Stock"
                value={outOfStock}
                bg="bg-yellow-50"
                icon="🚫"
              />
              <StatCard
                title="Categories"
                value={categories}
                bg="bg-gray-100"
                icon="🏷️"
              />
            </div>
          )}

          {/* STICKY ADD BUTTON */}
          <div className="flex justify-end sticky top-6 z-20 mb-6">
            <a
              href="#add-sweet"
              className="px-6 py-3 rounded-xl font-semibold
              bg-gradient-to-r from-green-400 to-yellow-300
              shadow-lg hover:opacity-90 transition"
            >
              ➕ Add New Sweet
            </a>
          </div>

          {/* ADD FORM */}
          <AdminSweetForm refresh={loadSweets} />

          {/* SWEET LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {sweets.map((sweet) => (
              <AdminSweetCard
                key={sweet._id}
                sweet={sweet}
                refresh={loadSweets}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

/* =======================
   STAT CARD
======================= */
function StatCard({ title, value, bg, icon }) {
  return (
    <div className={`${bg} rounded-2xl p-6 flex items-center gap-4`}>
      <div className="text-3xl">{icon}</div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          {value}
        </h2>
        <p className="text-gray-600 text-sm">
          {title}
        </p>
      </div>
    </div>
  );
}
