import { employees } from "./employees";

export function EmployeeList() {
  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li>
            name: {employee.name}, level: {employee.level}, dept:
            {employee.dept}, designation : {employee.designation}, salary :
            {employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}
