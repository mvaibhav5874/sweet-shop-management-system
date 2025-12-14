import { useEffect, useState } from "react";
import api from "../services/api";
import SweetCard from "../components/SweetCard";
import SearchBar from "../components/SearchBar";
import AdminSweetForm from "../components/AdminSweetForm";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [filters, setFilters] = useState({});
  const [toast, setToast] = useState("");
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
      <Toast message={toast} />

      <div className="container">
        <h2>Sweets</h2>

        <SearchBar setFilters={setFilters} />

        {role === "admin" && (
          <AdminSweetForm
              refresh={loadSweets}
                  onSuccess={() => {
                    setToast("Sweet added successfully!");
                    setTimeout(() => setToast(""), 3000);
                  }}
          />
        )}

        {sweets.length === 0 ? (
          <div className="empty">
            <h3>No sweets found 🍩</h3>
            <p>Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid">
            {sweets.map((s) => (
              <SweetCard
                key={s._id}
                sweet={s}
                refresh={loadSweets}
                onPurchase={() => {
                  setToast("Purchase successful!");
                  setTimeout(() => setToast(""), 3000);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
