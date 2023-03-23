// static methods and properties - lets you access methods and classes without making an instance of the class

type Employee = {
  name: string;
  id: number;
  position: string;
};

class Department {
  constructor(
    private readonly id: string,
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
