//Object oriented programming - real-life entities objects
//productlist - object - could have everything to manage it

//objects are concrete things to store data, methods
//classes are blueprints for objects, how they should look like


class Department {
    //name: string;
    private employees: string[] = [];
    //private id: string;

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
        // this.id =  m;
    }
    describe(this: Department) {
        console.log('Department ' + this.id.toString() + ' ' + this.name.toString());
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmpInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('1', 'Accounting');
accounting.addEmployee('Andrzej');
accounting.addEmployee('Daniel');

const finances  = new Department('2', 'Finances')
finances.addEmployee('Dominik');
finances.addEmployee('Sabathiel');

accounting.describe();
accounting.printEmpInfo();
finances.describe();
finances.printEmpInfo();
// pointing at method
// const accountingCopy = { name: 'Finances', describe: accounting.describe};

// accountingCopy.describe();


//Private and Public Access modifiers
//Private means that the property can be accessed from inside class
//  accounting.employees[2] = 'Anna';