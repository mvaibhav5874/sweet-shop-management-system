import { useState } from "react";
import api from "../services/api";

export default function AdminSweetForm({ refresh, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: ""
  });

  const submit = async () => {
    await api.post("/sweets", form);

    // ✅ show success toast if provided
    if (onSuccess) onSuccess();

    // reset form
    setForm({
      name: "",
      category: "",
      price: "",
      quantity: ""
    });

    refresh();
  };

  return (
    <div className="card form-card">
      <h3>Add Sweet (Admin)</h3>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <input
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        placeholder="Quantity"
        type="number"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
      />

      <button className="primary" onClick={submit}>
        Add
      </button>
    </div>
  );
}
