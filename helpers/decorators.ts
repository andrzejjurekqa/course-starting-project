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

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator')
    console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);

}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target);
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

function Autobind(_: any, _2: string | Symbol | number, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptpor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptpor;
}

class Printer {
    message = 'This works';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}
const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

//Decorators run without instantiating, but when you define the class
//hey are not event listeners
//function that executes when code is working
//some decorators can return something inside of it, methods and accessors
interface ValidatorConfig {
    [property: string]:{
        [validatableProp: string]: string[] 
    }
}

const registeredValidators: ValidatorConfig  = {};

function IsRequired(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name], 
        [propName]: ['required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name], 
        [propName]: ['positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        console.log(prop)
        for (const validator of objValidatorConfig[prop]) {
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @IsRequired
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', event => {
    event.preventDefault();

    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;
    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
      }
      console.log(createdCourse);
})