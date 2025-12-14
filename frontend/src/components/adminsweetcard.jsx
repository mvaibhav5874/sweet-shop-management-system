import api from "../services/api";

export default function AdminSweetCard({ sweet, refresh }) {
  const remove = async () => {
    if (!window.confirm("Delete this sweet?")) return;
    await api.delete(`/sweets/${sweet._id}`);
    refresh();
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
        {sweet.category}
      </span>

      <h3 className="font-semibold text-lg mt-3">{sweet.name}</h3>
      <p className="text-gray-500 text-sm">{sweet.description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-green-500 font-bold">${sweet.price}</span>
        <span className="text-sm text-gray-500">{sweet.quantity} left</span>
      </div>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 border border-green-400 text-green-500 py-2 rounded-lg">
          Edit
        </button>
        <button
          onClick={remove}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
