//type CustomAddFunc = (a: number, b: number) => number;

//you can define anonymous method inside the interface
interface CustomAddFunc {
    (a: number, b: number): number;
}

let displaySmth: CustomAddFunc;

displaySmth = (n1: number, m1: number) => {
    return n1 + m1;
} 

interface Greetable extends Named {
    name: string;
    age: number;
    greet(phrase: string): void;
}

interface Named {
    name: string;
    //if parameter is optional
    outputName?: string;
}

interface Goodbyeable {
    age: number;
    goodbye(phrase: string): void;
}

class Person implements Greetable, Goodbyeable {
    name: string;
    age: number;
    ditchAmount: string[];
    outputName?: string;
    constructor(n: string, m: number, d: string[]) {
        this.name = n;
        this.age = m;
        this.ditchAmount = d;

    }
    greet(phrase: string) {
        if (this.age > 25){
            console.log(phrase + ' old bitch')
        } else {
            console.log(phrase + ' ' + this.name);
        }
    }
    goodbye(phrase: string) {
        if (this.age > 25){
            console.log(phrase + ' old bitch')
        } else {
            console.log(phrase + ' ' + this.name);
        }
    }
    printDitches(ditchAmount: string[] = ['Monica', 'Jessica'])  {
        for (var val of ditchAmount) {
            console.log(val)
        }
    }
};

//let user1: Greetable;
let user1 = new Person('Dandrzej', 334, ['Denise', 'Patrice']);

user1.greet('Whaddaup');
user1.goodbye('Cya');
user1.printDitches();