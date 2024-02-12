//advanced concepts
//Intersection types (intersection, not combine) 
// type guards idea of chekcing if proerty exists before using it
// discriminated unions
// type casting / function overload

type Admin = {
    name: string;
    priviledges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const emploeeElevated: ElevatedEmployee = {
    name: 'Andrzej',
    priviledges: ['all the privs'],
    startDate: new Date()
}

const emploeeStandard: Employee = {
    name: 'Daniel',
    startDate: new Date()
}

type StringNumber = string | number;
type StringBoolean = string | boolean;

type Universal = StringNumber & StringBoolean;

let univer1: Universal = 'sasdas';


// OVERLOADS
function newAdd(n1: number, m1: number): number
function newAdd(n1: string, m1: string): string
function newAdd(n1: number, m1: string): string
function newAdd(n1: string, m1: number): string

function newAdd(n1: StringNumber, m1: StringNumber) {
    if (typeof n1 === 'string' || typeof m1 ==='string') {
        return n1.toString() + m1.toString();
    }
    return n1 + m1;
}


let result1 = newAdd('Monica', 'Dominika');
console.log(result1.split(' '));

//OPTIONAL CHAINING - put the ? after fetching data from somewhere
const fetchedUserData = {
    id: 'u1',
    name: 'Andrzej',
    job: { title: 'CEO', description: 'Blow and Hookers' }
}

console.log(fetchedUserData?.job.title);


//Nullish coalescing - you might not now you're gonna get null after fetching use two ?? for Default value
const userInput = null;

const storedData = userInput ?? 'DEFAULT';
console.log(storedData);



type UnknownEmployee = Employee | Admin;

function printImpEmp(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if('priviledges' in emp) {
        console.log('Priviledges: ' + emp.priviledges);
    }
    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

console.log(printImpEmp(emploeeElevated));
console.log(printImpEmp(emploeeStandard));

class Car {
    drive() {
        console.log('driving sedan husein');
    }
}

class Truck {
    drive() {
        console.log('Trucking...')
    }
    loadCargo(amount: number){
        console.log('Loading Cargo ' + amount + 'kg')
    }
}

type Vehicle = Car | Truck;

const v1 = new Car;
const v2 = new Truck;

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        console.log(vehicle.loadCargo(100));
    }
}

console.log(useVehicle(v1));
console.log(useVehicle(v2));

//alternative
function useVehicle1(vehicle: Vehicle){
    vehicle.drive();
    if (vehicle instanceof Truck) {
        console.log(vehicle.loadCargo(100));
    }
}

console.log(useVehicle1(v1));
console.log(useVehicle1(v2));


//Discriminating union: extra property
interface Bird {
    type: 'bird',
    flyingSpeed: number
}

class Sparrow implements Bird {
    type: 'bird';
    flyingSpeed: number;    
    
    constructor(n: 'bird', m: number) {
        this.type = 'bird';
        this.flyingSpeed = m;
    }
}

interface LandMammal {
    type: 'land mammal',
    runningSpeed: number
}

class Rhino implements LandMammal {
    type: 'land mammal';
    runningSpeed: number;    
    
    constructor(n: 'land mammal', m: number) {
        this.type = 'land mammal';
        this.runningSpeed = m;
    }
}

interface OceanMammal {
    type: 'ocean mammal',
    swimmingSpeed: number
}


type Animal = Bird | LandMammal | OceanMammal;

function speedAnimal(animal: Animal) {
    let speed;
    let moving;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            moving = 'Flying';
            break;
        case 'land mammal':
            speed = animal.runningSpeed;
            moving = 'Runnning';
            break;
        case 'ocean mammal':
            speed = animal.swimmingSpeed;
            moving = 'Swimming';
            break;
    }
    console.log(moving + ' with speed... ' + speed + ' km/h')
}

let littleSparrow = new Sparrow ('bird', 40);
let bigRhino = new Rhino ('land mammal', 80);

console.log(speedAnimal(littleSparrow));
console.log(speedAnimal(bigRhino));

console.log(speedAnimal({type: 'bird', flyingSpeed: 30}));

const paragraph = document.querySelector('p');
//smililar syntax exists in React projects, so not use it if there's React jsx syntax
const inputtext = <HTMLInputElement>document.getElementById("input");
inputtext.value = 'Hi here!';

//use this one when JSX syntax is in play
const inputtext1 = document.getElementById("input2") as HTMLInputElement;

// ! this marks never null

inputtext1.value = 'Hi there!';

const inputtext2 = document.getElementById("input3")

if(inputtext2) {
    (inputtext2 as HTMLInputElement).value = "Hi somewhere";
}

//index types, adds flexibility [key]:
interface ErrorContainer {
    // { email: 'Not a valid email' or maybe username is not valid?
    [key: string | number]: string | number;
}

const errorBug: ErrorContainer = {
    email: 'Not a valid email',
    password: 12341
};


