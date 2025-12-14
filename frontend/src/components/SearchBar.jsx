export default function SearchBar({ setFilters }) {
  return (
    <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow">
      <input
        placeholder="Search sweets..."
        className="flex-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
        onChange={(e) =>
          setFilters((f) => ({ ...f, name: e.target.value }))
        }
      />

      <button className="px-6 py-2 rounded-xl border border-lime-400 text-lime-500 hover:bg-lime-50">
        Filters
      </button>
    </div>
  );
}
