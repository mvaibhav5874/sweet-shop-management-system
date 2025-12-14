import { useState } from "react";
import api from "../services/api";

export default function AdminSweetForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    category: "Candy",
    price: "",
    quantity: "",
    description: ""
  });

  const submit = async () => {
    await api.post("/sweets", form);
    setForm({ name:"", category:"Candy", price:"", quantity:"", description:"" });
    refresh();
  };

  return (
      <div
          id="add-sweet"
          className="mt-8
          border-2 border-dashed border-green-300
          rounded-2xl p-8 bg-green-50/30
          scroll-mt-32"
      >

        <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
          <span className="text-green-500 text-2xl">＋</span>
          Add New Sweet
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Sweet Name">
            <input
                className="input"
                placeholder="Delicious Candy"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
            />
          </Field>

          <Field label="Category">
            <select
                className="input"
                value={form.category}
                onChange={e => setForm({...form, category: e.target.value})}
            >
              <option>Candy</option>
              <option>Chocolate</option>
              <option>Lollipop</option>
              <option>Gummy</option>
            </select>
          </Field>

          <Field label="Price ($)">
            <input
                type="number"
                className="input"
                placeholder="2.99"
                value={form.price}
                onChange={e => setForm({...form, price: e.target.value})}
            />
          </Field>

          <Field label="Quantity in Stock">
            <input
                type="number"
                className="input"
                placeholder="100"
                value={form.quantity}
                onChange={e => setForm({...form, quantity: e.target.value})}
            />
          </Field>
        </div>

        <Field label="Description (optional)" className="mt-6">
        <textarea
            className="input h-24"
            placeholder="A delightful treat that melts in your mouth..."
            value={form.description}
            onChange={e => setForm({...form, description: e.target.value})}
        />
        </Field>

        <button
            onClick={submit}
            className="w-full mt-8 py-4 rounded-xl font-bold
        bg-gradient-to-r from-green-400 to-yellow-300
        hover:opacity-90 transition"
        >
          Add Sweet
        </button>
      </div>
  );
}

function Field({label, children, className}) {
  return (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}
