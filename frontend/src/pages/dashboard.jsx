import { useEffect, useState } from "react";
import api from "../services/api";
import SweetCard from "../components/SweetCard";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);

  const loadSweets = async () => {
    const res = await api.get("/sweets");
    setSweets(res.data);
  };

  useEffect(() => {
    loadSweets();
  }, []);

  return (
    <div>
      <h2>Sweets</h2>
      {sweets.map(s => (
        <SweetCard key={s._id} sweet={s} refresh={loadSweets} />
      ))}
    </div>
  );
}
