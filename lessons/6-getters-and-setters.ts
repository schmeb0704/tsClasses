// getters and setters

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
  } // called as a property, not a method

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

IT.addEmployees({ name: 'Sean', id: 4, position: 'dev' });

// ACCOUNTING.addReport('FS as of 02/28/2023');
IT.getEmployees();
console.log(HR.candidateList);
HR.addCandidte = 'Ben';
console.log(HR.candidateList);
HR.addEmployees({ name: 'Sean', id: 4, position: 'dev' });

// console.log(ACCOUNTING.mostRecentReport);
