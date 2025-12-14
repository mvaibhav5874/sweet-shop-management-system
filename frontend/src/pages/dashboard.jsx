import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import SweetCard from "../components/SweetCard";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    api.get("/sweets").then((res) => setSweets(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-bakery-cream">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-extrabold text-bakery-chocolate mb-6">
          Shop Sweets
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sweets.map((sweet) => (
            <SweetCard key={sweet._id} sweet={sweet} />
          ))}
        </div>
      </div>
    </div>
  );
}
