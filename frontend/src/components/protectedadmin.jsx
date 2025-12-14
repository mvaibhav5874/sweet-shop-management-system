export default function ProtectedAdmin({ children }) {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    window.location.href = "/dashboard";
    return null;
  }

  return children;
}