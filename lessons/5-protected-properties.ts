// inheritance

type Employee = {
  name: string;
  id: number;
  position: string;
};

class Department {
  constructor(
    private readonly id: string,
    public name: string,
    protected employees: Employee[] = [] // is like private, but you can access it from classes that extends this class
  ) {}

  getEmployees() {
    console.log(this.employees);
  }

  addEmployees(employee: Employee) {
    this.employees.push(employee);
  }
}

class ITDepartment extends Department {
  admins: Employee[];
  constructor(id: string, admins: Employee[]) {
    super(id, 'IT'); // takes base constructor, must use first before any "this" references
    this.admins = admins;
  }

  addAdmins(admin: Employee) {
    this.admins.push(admin);
  }
}

class HRDepartment extends Department {
  constructor(id: string, public candidates: string[] = []) {
    super(id, 'HR');
  }

  addCandidates(candidate: string) {
    this.candidates.push(candidate);
  }

  fetchCandidates() {
    console.log('List of employment candidates: ', this.candidates);
  }

  ownAddEmployees(employee: Employee) {
    if (employee.name === 'Sean') {
      console.log('This person is already in another department!');
    } else {
      this.employees.push(employee);
    }
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }
}

const IT = new ITDepartment('2it', []);
const HR = new HRDepartment('3hr');
const ACCOUNTING = new AccountingDepartment('4acc');

IT.addEmployees({ name: 'Sean', id: 4, position: 'dev' });
IT.addAdmins({ name: 'Jess', id: 25, position: 'Senior Dev' });

HR.addCandidates('Sean');
HR.fetchCandidates();
HR.ownAddEmployees({ name: 'Sean', id: 4, position: 'Admin' });
HR.ownAddEmployees({ name: 'Cher', id: 4, position: 'Admin' });
HR.getEmployees();

ACCOUNTING.addEmployees({ name: 'Sean', id: 0, position: 'Comptroller' });

ACCOUNTING.addReport('FS report as of 02-28-2023');
ACCOUNTING.addReport('FS report as of 01-31-2023');
ACCOUNTING.addReport('FS report as of 12-31-2022');

console.log('IT Admins: ', IT.admins);
IT.getEmployees();
console.log(ACCOUNTING);
ACCOUNTING.printReports();
