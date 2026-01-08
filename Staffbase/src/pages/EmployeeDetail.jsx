import { useParams, useNavigate } from "react-router-dom";

const employeesData = [
  { id: 1, name: "John Doe", role: "Developer", email: "john@company.com" },
  { id: 2, name: "Jane Smith", role: "HR Manager", email: "jane@company.com" },
  { id: 3, name: "Rahul Kumar", role: "Designer", email: "rahul@company.com" },
];

export default function EmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = employeesData.find(
    (emp) => emp.id === Number(id)
  );

  if (!employee) {
    return <p>Employee not found</p>;
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-2">{employee.name}</h1>
      <p className="text-gray-700">Role: {employee.role}</p>
      <p className="text-gray-700">Email: {employee.email}</p>
    </div>
  );
}
