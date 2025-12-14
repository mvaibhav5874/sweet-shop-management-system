import api from "../services/api";

export default function SweetCard({ sweet, refresh }) {
  const purchase = async () => {
    await api.post(`/sweets/${sweet._id}/purchase`);
    refresh();
  };

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>
      <button disabled={sweet.quantity === 0} onClick={purchase}>
        Purchase
      </button>
    </div>
  );
}
