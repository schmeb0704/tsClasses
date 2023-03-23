// abstract classes - use this when you want all sub classes to have a certain method or property, but can't make a general one because the implementation of that method is dependent on the sub class. Abstract classes cannot be instantiated, so you'll have to extend it to a subclass

type Employee = {
  name: string;
  id: number;
  position: string;
};

abstract class Department {
  constructor(
    protected readonly id: string,
    public name: string,
    protected employees: Employee[] = []
  ) {}

  getEmployees() {
    console.log(this.employees);
  }

  addEmployees(employee: Employee) {
    this.employees.push(employee);
  }

  static createEmployee(employee: Employee) {
    return employee;
  }

  abstract describe(): void;
}

class ITDepartment extends Department {
  admins: Employee[];
  constructor(id: string, admins: Employee[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  addAdmins(admin: Employee) {
    this.admins.push(admin);
  }

  getEmployees() {
    if (this.employees.length > 1) {
      console.log(this.employees);
    } else {
      console.log(
        "There's only one employee, you probably know them anyway..."
      );
    }
  }

  describe(): void {
    console.log(`this is the ${this.name} department. ID - ${this.id}`);
  }
}

class HRDepartment extends Department {
  get candidateList() {
    return { number: this.candidates.length, applicants: this.candidates };
  }

  set addCandidte(candidate: string) {
    this.candidates.push(candidate);
  }

  constructor(id: string, private candidates: string[] = []) {
    super(id, 'HR');
  }

  fetchCandidates() {
    console.log('List of employment candidates: ', this.candidates);
  }

  addEmployees(employee: Employee) {
    if (employee.name === 'Sean') {
      console.log('This person is already in another department!');
    } else {
      this.employees.push(employee);
    }
  }

  describe(): void {
    console.log(`We are the ${this.name} department. ID - ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }

  describe(): void {
    console.log(`this is the ${this.name} department. ID - ${this.id}`);
  }
}

const IT = new ITDepartment('2it', []);
const HR = new HRDepartment('3hr');
const ACCOUNTING = new AccountingDepartment('4acc');

const emp1 = Department.createEmployee({
  name: 'Aether',
  id: 123,
  position: 'traveller',
});

console.log(emp1);

// const dept = new Department // error because Department is now an abstract class

HR.describe(); // describe is now forced to be in each subclass, with different implementations for each class
IT.describe();
ACCOUNTING.describe();
