import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">StaffBase</h2>

      <nav className="space-y-3">
        <Link to="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
        <Link to="/employees" className="block hover:text-blue-400">
          Employees
        </Link>
        <Link to="/profile" className="block hover:text-blue-400">
          My Profile
        </Link>
        <Link to="/settings" className="block hover:text-blue-400">
          Settings
        </Link>
      </nav>
    </div>
  );
}
