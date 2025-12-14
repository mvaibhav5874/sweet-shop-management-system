export default function SearchBar({ setFilters }) {
  return (
    <div className="card">
      <input placeholder="Name" onChange={e => setFilters(f => ({ ...f, name: e.target.value }))} />
      <input placeholder="Category" onChange={e => setFilters(f => ({ ...f, category: e.target.value }))} />
      <input placeholder="Min Price" type="number" onChange={e => setFilters(f => ({ ...f, minPrice: e.target.value }))} />
      <input placeholder="Max Price" type="number" onChange={e => setFilters(f => ({ ...f, maxPrice: e.target.value }))} />
    </div>
  );
}
