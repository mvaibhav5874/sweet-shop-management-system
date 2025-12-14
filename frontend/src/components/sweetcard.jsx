import api from "../services/api";

export default function SweetCard({ sweet, refresh }) {
  const purchase = async () => {
    await api.post(`/sweets/${sweet._id}/purchase`);
    refresh();
  };

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-5">
      <div className="h-36 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
        📦
      </div>

      <h3 className="font-semibold text-lg">{sweet.name}</h3>
      <p className="text-sm text-gray-500">{sweet.category}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-lg font-bold text-green-500">
          ₹{sweet.price}
        </span>
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
          {sweet.quantity} left
        </span>
      </div>

      <button
        disabled={sweet.quantity === 0}
        onClick={purchase}
        className="w-full mt-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-lime-400 to-yellow-300 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
    </div>
  );
}
