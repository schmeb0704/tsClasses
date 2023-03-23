type Employee = {
  name: string;
  id: number;
  position: string;
};

class Department {
  // short hand initialization. just go directly to the constructor function

  constructor(
    private readonly id: string, // makes this property readonly. cannot be touched afterwards
    public name: string,
    public employees: Employee[] = []
  ) {}

  getEmployees() {
    console.log(this.employees);
  }

  addEmployees(employee: Employee) {
    this.employees.push(employee);
  }
}

const HR = new Department('1hr', 'Human Resources', []);

HR.getEmployees();
HR.addEmployees({ name: 'Sean', id: 4, position: 'Dev' });
HR.getEmployees();
