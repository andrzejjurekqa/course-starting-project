//GENERICS - Array
const names: Array<string> = ['Manuel', 'Samuel'];

console.log(names[0].split(' '));

//GENERICS - Promise knows which type it returns, even when called in a later function
const promise: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Done');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
})

//GENERIC Function
//function merge<T, U>(objA: T, objB: string | number): object; - overloading
function mergeObject<T extends Object, U extends Object >(objA: T, objB: U) {
    return Object.assign(objA, objB) as Object;
}

console.log(mergeObject({name: 'Andrzej'}, {age: 30}))

const merged = mergeObject({name: 'Andrzej', hobbies: ['Sport', 'Drining']}, 30) //as {name: string, age: number}; - casting

console.log(merged);

interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] /*Tulpe, array with specific amount of arguments*/ {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got ' + element.length + ' value';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' values';
    }
    return [element, descriptionText];
}

console.log(countAndPrint(['sports', 'cooking']));

function extractAndConvert<O extends object, U extends keyof O>(obj: O, key: U) {
    return 'Value ' + obj[key];
}

console.log(extractAndConvert({name: 'Andrzej', age: 30}, 'name'));

class StorageWarehouse<S extends string | number | boolean> {
    private data: S[] = [];
    addItem(item: S) {
        this.data.push(item);
    }
    removeItem(item: S) {
        if(this.data.indexOf(item) === -1){
            return
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}

const textStorage = new StorageWarehouse<string>();
textStorage.addItem('Truck');
textStorage.addItem('Car');
textStorage.addItem('Hans');
textStorage.removeItem('Truck');
console.log(textStorage.getItems());

const numberStorage = new StorageWarehouse<number | string>();
numberStorage.addItem(123);
numberStorage.addItem(111);
numberStorage.addItem('Hans');
numberStorage.removeItem(123);
console.log(numberStorage.getItems());

const booleanStorage = new StorageWarehouse<boolean>();
booleanStorage.addItem(true);
booleanStorage.addItem(false);
booleanStorage.addItem(false);
booleanStorage.removeItem(false);
console.log(booleanStorage.getItems());

// const objStorage = new StorageWarehouse<object>();
// objStorage.addItem({number: '123'});
// objStorage.addItem({number: '111'});
// objStorage.addItem({number: '122'});
// objStorage.removeItem({number: '123'});
// console.log(objStorage.getItems());


//BONUS GENERICS

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}
function createCourseGoal(
    title: string,
    description: string,
    date: Date  
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names2: Readonly<[string, 'String']> = ['Max', 'String'];
//names2.push('Manny') readonly cannot modify

//Generics vs union types
//1. lot more to write
//2. you have to specify more in union types
//3. Generics help you create data structures that work together, wrap values of a broad variety of types 