// LECTURE: Values and Variables

const country = "Colombia";
const continent = "America";
const population = 51;

// console.log(country);
// console.log(continent);
// console.log(population);

// LECTURE: Data Types

const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// LECTURE: let, const and var

language = 'Spanish';
// isIsland = true

// LECTURE: Basic Operators

// console.log(population / 2);
// console.log(++population);
// console.log(population++);
// console.log(population > 6);
// console.log(population < 33);

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

// console.log(description)

// LECTURE: Strings and Template Literals

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(description)

// LECTURE: Taking Decisions: if / else Statements

let average;
if (population > 33) {
    average = 'above';
} else {
    average = 'below';
}

// console.log(`${country}'s population is ${average} average`);

// if (population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33 - population} millon below the average`);
// }

// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // 617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// LECTURE: Equality Operators: == vs. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// }

// LECTURE: Logical Operators

if (language === 'English'
    && population < 50
    && isIsland === false) { // or !isIsland
    console.log(`Sara should come to ${country}`);
} else {
    console.log(`Sara shouldn't come to ${country}`);
}

