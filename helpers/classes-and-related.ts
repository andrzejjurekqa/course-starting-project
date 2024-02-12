//Object oriented programming - real-life entities objects
//productlist - object - could have everything to manage it

//objects are concrete things to store data, methods
//classes are blueprints for objects, how they should look like


abstract class Department {
    //name: string;
    employees: string[] = [];
    static fiscalYear = 2020;
    //private id: string;

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
        // this.id =  m;
    }
    abstract describe(this: Department): void;
    //console.log('Department ' + this.id.toString() + ' ' + this.name.toString());

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmpInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name: string) {
        return { name: name };
    }
}

class ITDepartment extends Department {
    constructor(id: string, name: string, private admins: string[]){
        super(id, 'IT');
    }
    describe() {
        console.log('Department ' + this.name + ' ' + this.id);
    }
}

class Hr extends Department {
    private lastReport: string;
    private static instance: Hr;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report');
    }
    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Give me a report dumbass');
        }
        this.addReports(value);
    }

    private constructor(id: string, private reports: string[]){
        super(id, 'HR')
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (Hr.instance) {
            return this.instance;
        }
        this.instance = new Hr('A1', ['dildo report', 'micro report']);
        return this.instance;
    }
    describe() {
        console.log('Department ' + this.name + ' ' + this.id);
    }
    addReports(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports(){
        console.log(this.reports);
    }
}

class TestDepartment extends ITDepartment {
    constructor(id: string, name: string, admins: string[]) {
        super(id, 'QA', admins);
    }
    describe() {
        console.log('Department ' + this.name + ' ' + this.id);
    }
}

//Accounting and Finances could not be valid anymore, due to abstract nature of Department
//only new classes work, they are based on the original, but implementation
// of the abstract made them invalid

// const accounting = new Department('1', 'Accounting');
// accounting.addEmployee('Andrzej');
// accounting.addEmployee('Daniel');

// const finances  = new Department('2', 'Finances');
// finances.addEmployee('Dominik');
// finances.addEmployee('Sabathiel');

const interpart = new ITDepartment('3', 'IT', ['Manique']);
interpart.addEmployee('Manique');
interpart.addEmployee('Danique');

const hrdep = Hr.getInstance();
hrdep.addEmployee('Piston');

const testdep = new TestDepartment('5', 'QA Assurance', ['Danny']);
testdep.addEmployee('Bigga');

hrdep.describe();
// finances.describe();
// finances.printEmpInfo();
interpart.describe();
interpart.printEmpInfo();
testdep.describe();
testdep.printEmpInfo();

console.log(hrdep.mostRecentReport);
console.log(hrdep);

hrdep.describe();
hrdep.printEmpInfo();
hrdep.addReports('finance reports');
hrdep.addReports('dido reports');
hrdep.getReports();

console.log(hrdep.mostRecentReport);

// pointing at method
// const accountingCopy = { name: 'Finances', describe: accounting.describe};

// accountingCopy.describe();

//Private and Public Access modifiers
//Private means that the property can be accessed from inside class
//  accounting.employees[2] = 'Anna';

// Inheritance - classes can inherit data from other classes, 
// classes that inherited properties can modify them, but then the original one will have to be removed