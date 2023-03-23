"use strict";
class Department {
    constructor(id, name, employees = []) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    getEmployees() {
        console.log(this.employees);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
}
const HR = new Department('1hr', 'Human Resources', []);
HR.getEmployees();
HR.addEmployees({ name: 'Sean', id: 4, position: 'Dev' });
HR.getEmployees();
