//Decorators - before class gets instantiated
//add to 

function Logger (logString: string){
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function<T extends {new(...args: any[]): {name: string}}>(originalContr: T) {
        return class extends originalContr {
            constructor(..._args: any[]) {
                super();
                console.log('Rendering Template');
                const hookElement = document.getElementById(hookId);
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h1')!.textContent= this.name;
                }    
            }
        };
    }
}

@Logger('Logging - Person')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Andrzej';

    constructor() {
        console.log('Logging person object...');
    }
}

const pers = new Person();
console.log(pers);

@Logger('Registering - Person')
class Person2 {
    name = 'Baba';

    constructor() {
        console.log('Registering person object...');
    }
}

const pers2 = new Person2();
console.log(pers2);


// ----

function Log(targer: any, propertyName: string | Symbol) {
    console.log('Property decorator')
    console.log(targer, propertyName)
}

function Log2(targer: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(targer);
    console.log(name);
    console.log(descriptor);

}

function Log3(targer: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(targer);
    console.log(name);
    console.log(descriptor);
}

function Log4(targer: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(targer);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        }
        throw new Error ('Invalid price');
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this.price * 23 + this.price;
    }
}

//Decorators run without instantiating, but when you define the class
//hey are not event listeners
//function that executes when code is working
//some decorators can return something inside of it, methods and accessors