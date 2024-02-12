//Decorators - before class gets instantiated

function Logger (logString: string){
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        console.log('Rendering Template');
        const hookElement = document.getElementById(hookId);
        const p = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1')!.textContent= p.name;
        }
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