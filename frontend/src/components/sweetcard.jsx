import api from "../services/api";

export default function SweetCard({ sweet, refresh }) {
  const role = localStorage.getItem("role");

 const purchase = async () => {
  await api.post(`/sweets/${sweet._id}/purchase`);
  if (onPurchase) onPurchase();
  refresh();
};

  const remove = async () => {
  const ok = window.confirm("Are you sure you want to delete this sweet?");
  if (!ok) return;

  await api.delete(`/sweets/${sweet._id}`);
  refresh();
};

  return (
    <div className="card">
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>

      <button
        className="primary"
        disabled={sweet.quantity === 0}
        onClick={purchase}
      >
        Purchase
      </button>

      {role === "admin" && (
        <button className="danger" onClick={remove}>
          Delete
        </button>
      )}
    </div>
  );
}
