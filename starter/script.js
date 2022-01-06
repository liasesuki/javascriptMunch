/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Lia");
console.log(23);

let firstName = "Lia";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jones');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Sanchez';
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Lia';
const lastName = 'Sanchez';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x + 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operator
console.log(ageJonas > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara, averageAge);

//Coding Challenge #1

// const markMass = 78;
// const markHight = 1.69;
// const johnMass = 92;
// const johnHight = 1.95;

const markMass = 95;
const markHight = 1.88;
const johnMass = 85;
const johnHight = 1.76;

const markBMI = markMass / markHight ** 2;
const johnBMI = johnMass / (johnHight * johnHight);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

const firstName = 'Lia';
const job = 'gamer';
const birthYear = 1991;
const year = 2037

const lia = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(lia);

const liaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(liaNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, Wait another ${yearsLeft} years :)`);
}

// if else control structure
// if () {

// } else {

// }

const birthYear = 2012;

let century
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//Coding Challenge #2

const markMass = 78;
const markHight = 1.69;
const johnMass = 92;
const johnHight = 1.95;

// const markMass = 95;
// const markHight = 1.88;
// const johnMass = 85;
// const johnHight = 1.76;

const markBMI = markMass / markHight ** 2;
const johnBMI = johnMass / (johnHight * johnHight);
console.log(markBMI, johnBMI)

if (markBMI < johnBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
} else {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Lia'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also cool');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');

*/

