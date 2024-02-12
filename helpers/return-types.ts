function add2(n1: number, n2: number){
    return n1 + n2;
}

function printResult2(num: number): void {
    console.log('Result ' + num);
}

printResult2(add2(5, 12));

//let someValue: undefined;


//defining function type
let combineValues: (a1: number, b1: number) => number;

combineValues = add2;

console.log(combineValues(8, 9));

//void
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result)
})

let userInput: unknown;
let userName: string;

userInput = 4;
userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}


//Never return type, different from void, because it will never return
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occured', 500);