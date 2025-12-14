export default function Navbar() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <h1>🍬 Sweet Shop</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
