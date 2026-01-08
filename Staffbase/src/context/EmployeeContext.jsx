import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

const initialEmployees = [
  { id: 1, name: "Rathan", role: "Developer", email: "rathan@company.com" },
  { id: 2, name: "Swetha", role: "HR Manager", email: "swetha@company.com" },
  { id: 3, name: "Rahul Kumar", role: "Designer", email: "rahul@company.com" },
];

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
  };

  const getEmployeeById = (id) =>
    employees.find((emp) => emp.id === Number(id));

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, getEmployeeById }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmployeeContext);
}
