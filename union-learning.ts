enum Role {ADMIN, read_only, author};

const person = 
{
// //     name: string;
// //     age: number;
// // } = {
    name: 'Andrzej',
    age: 31,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'driver'],
    profile: Role.ADMIN
};

person.role.push('admin');
//person.role.push = (10, 'dadmin');

let activities : string[];
activities = ['Drinking']

console.log(person.name); 

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}

for (const roles of person.role) {
    console.log(roles);
}

//console.log(person.profile.toString());

// Type Alias you can declare new type
type AnyNameCombinable = number | string;
type LiteralAsTextorNumber = 'as-number' | 'as-text';

// use Union Type and literal
function combine(
    n1: AnyNameCombinable, 
    n2: AnyNameCombinable, 
    resultConv: LiteralAsTextorNumber) {
    let result;
    if (typeof n1 === 'number' && typeof n1 === 'number' || resultConv === 'as-number' ) {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + ' and ' + n2.toString();
    }
    if (resultConv === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}

const combineAge = combine(30, 23, 'as-number');
console.log(combineAge);

const combineStringAge = combine('30', '23', 'as-number');
console.log(combineStringAge);

const combineName = combine('Max', 'Anna', 'as-text');
console.log(combineName);
