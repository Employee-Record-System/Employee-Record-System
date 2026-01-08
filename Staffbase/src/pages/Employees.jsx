import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";

export default function Employees() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { employees } = useEmployees();

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>

        <button
          onClick={() => navigate("/employees/add")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Employee
        </button>
      </div>

      <input
        type="text"
        placeholder="Search employee..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="bg-white shadow rounded">
        {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            onClick={() => navigate(`/employees/${emp.id}`)}
            className="p-4 border-b flex justify-between cursor-pointer hover:bg-gray-100"
          >
            <div>
              <p className="font-semibold">{emp.name}</p>
              <p className="text-sm text-gray-600">{emp.role}</p>
            </div>
            <p className="text-sm">{emp.email}</p>
          </div>
        ))}

        {filteredEmployees.length === 0 && (
          <p className="p-4 text-center text-gray-500">
            No employees found
          </p>
        )}
      </div>
    </div>
  );
}

