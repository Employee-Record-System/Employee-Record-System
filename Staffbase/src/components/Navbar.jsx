import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="font-semibold">Dashboard</h1>

      <button
        onClick={handleLogout}
        className="border px-3 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}
