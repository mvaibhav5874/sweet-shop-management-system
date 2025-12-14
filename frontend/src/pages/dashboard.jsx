import { useEffect, useState } from "react";
import api from "../services/api";
import SweetCard from "../components/SweetCard";
import SearchBar from "../components/SearchBar";
import AdminSweetForm from "../components/AdminSweetForm";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [filters, setFilters] = useState({});
  const role = localStorage.getItem("role");

  const loadSweets = async () => {
    const res = await api.get("/sweets/search", { params: filters });
    setSweets(res.data);
  };

  useEffect(() => {
    loadSweets();
  }, [filters]);

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">
        {/* Hero */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome to the Sweet Shop
          </h1>
          <p className="text-gray-500 mt-2">
            Discover delicious treats for every craving
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <SearchBar setFilters={setFilters} />

          {role === "admin" && (
            <AdminSweetForm refresh={loadSweets} />
          )}

          {sweets.length === 0 ? (
            <div className="text-center text-gray-500 mt-12">
              No sweets found 🍩
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {sweets.map((s) => (
                <SweetCard
                  key={s._id}
                  sweet={s}
                  refresh={loadSweets}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
