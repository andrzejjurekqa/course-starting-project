function add(n1 : number, n2 : number, printResult: boolean, resultPhrase: string) {
    if (typeof n1 === 'number' && typeof n1 === 'number') {
        const result = n1 + n2;
        if(printResult) {
            console.log(resultPhrase + result);
        } else {
            return n1 + n2;
        }
    } else {
        throw new Error ('Numbers pls')
    }
}

const number1 = 12;
const number2 = 2.8;

const printResult = true;
const resultPhrase = 'The answer is ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result)