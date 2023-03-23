// public and private classes

class Employee {
  name: string;
  position: string;
  department: Department;

  constructor(name: string, position: string, department: Department) {
    (this.name = name),
      (this.position = position),
      (this.department = department);
  }

  introduce(this: Employee) {
    console.log(
      `Hi, my name is ${this.name}, I am the ${this.position} of ${this.department.name}`
    );
  }
}

class Department {
  name: string;
  private employees: string[] = []; // with private, you can only access within the class

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    // the parameter tells TS and JS to only execute this method if the one who calls it is an instance of Department
    console.log(`Department: ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');
const accountingCopy = { describe: accounting.describe };

const emp1 = new Employee('Sean', 'Admin', new Department('HR'));

//accountingCopy.describe(); // the result of this is Department: undefined because accounting.describe is referring to the name of that it was assigned, however, in this example, describe is called by accounting copy, which has no name. so name is undefined.

emp1.introduce();
// const emp2 = emp1.introduce;

// emp2(); // this is undefined

accounting.addEmployee('Sean');
accounting.addEmployee('Ben');
accounting.employees; // you cannot access this because this is private
// accounting.addEmployee(emp1); // not string so error

accounting.printEmployeeInformation();
