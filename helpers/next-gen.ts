const userNick = 'Max';

let age = 30;

function add(a: number, b: number){
    return a + b;
}

if (age > 20) {
    var isOld = true;
    console.log(isOld);
}

 // blockscope means variable is available within block of code

 // arrow functions have implicit return statement for one 
 const add4 = (a: number, b: number = 1) => {
    return a + b;
 };

 const printStuff: (c: string | number) => void = output => console.log(output);

 const button = document.querySelector('button')
 if (button){
    button.addEventListener('click', event => console.log(event));
 }

 //default parameter has to be last
 printStuff(add4(5));

const hobbies2= ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

//instead of this: do spread
//activeHobbies.push(hobbies2[0]);

activeHobbies.push(...hobbies2);

console.log(activeHobbies);

const person1 = {
    nameFirst: 'Andrzej',
    age1: 31
};

//spread
const copiedPerson = { ...person1 };

const addNum = ( ...numbers: number[]) => {
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0) ;
} 

const addedNumbers = addNum(5, 6, 7, 8, 8 )
console.log(addedNumbers);

// extract by declaring value
const hobby1 = hobbies2[0];
const hobby2 = hobbies2[1];

// or extract by special syntax [] for arrays {} for objects
const [hobbiesA, hobbiesB, ...remainingHobbies] = hobbies2;
console.log(hobbies2);

// you can rename when extracting
const { nameFirst: userName1, age1 } = person1;

console.log(userName1, age1)
