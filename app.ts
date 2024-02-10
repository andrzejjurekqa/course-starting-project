interface Greetable {
    name: string;
    age: number;
    greet(phrase: string): void;
}

interface Goodbyeable {
    name: string;
    age: number;
    goodbye(phrase: string): void;
}

class Person implements Greetable, Goodbyeable {
    name: string;
    age: number;
    ditchAmount: string[];
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
let user1 = new Person('Dandrzej', 334, ['Monica', 'Jessica']);

user1.greet('Whaddaup');
user1.goodbye('Cya');
user1.printDitches();