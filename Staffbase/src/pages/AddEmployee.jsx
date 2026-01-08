import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const { addEmployee } = useEmployees();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee({ name, role, email });
    navigate("/employees");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Employee</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Role"
          className="border p-2 w-full"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}
