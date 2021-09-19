/*let firstNaame = 'Nushwa';
console.log(firstNaame);

let myFirstJob = 'Progrmmer';
let myCurrentJob = 'Teacher';

const country = "Pakistan";
const continent = 'Asia';
let population = 216;


// console.log(country);
// console.log(typeof country)
// console.log(continent);
// console.log(population);
// console.log(typeof population)

const isIsland = false;
const language = 'Urdu';
// console.log(typeof isIsland)
// console.log(typeof language)

const currYear = 2021;

const ageNushwa = currYear - 2001;
const ageSarah = currYear - 1990;
// console.log(ageNushwa * 2, ageSarah * 2 ** 3);
//2 to the power of 3
const isFullAge = ageSarah >= 18;
// console.log(isFullAge);

console.log(population);
population++;
console.log(population / 2);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
const avgPopulation = 33;
console.log((population / 2) < avgPopulation);



//CODING CHALLANGE 1
const massMark = 78;
const massJohn = 92;
const heightJohn = 1.95;
const heightMark = 1.69;

const markBMI = massMark / (heightMark * heightMark);
const johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI)
    console.log(`Mark's BMI(${markBMI}) is higher than John(${johnBMI})`);
else
    console.log(`John's BMI(${johnBMI}) is higher than Mark(${markBMI})`);

//----END----


const firstName = 'Nushwa';
const job = 'Teacher';
const birthYear = 2001;
const year = 2020

const nushwa = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
// console.log(nushwa);

const nushwaNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}`;
console.log(nushwaNew);

console.log(`Hello im nushwa`);
console.log(`Newline
Hi`);

let description = country + " is in Asia, and it's " + population + " million people speak " + language;
console.log(description);

description = `${country} is in Asia, and its ${population} million people speak ${language}`;

//Decision making
const Age = 19;
const yearsLeft = 18 - Age;
if (Age >= 18)
    console.log("You can take the driver's liscense now 🚗"); //win + .
else {
    console.log(`You can take the driver's liscenese in ${yearsLeft} years`);
}

const birhtYear = 2001;
let century;
if (birhtYear <= 2000)
    century = 20;
else
    century = 21;

console.log(century);

if (population > 33) {
    console.log(`${country}'s population is above  avergae`);
} else {
    console.log(`${country}'s population is ${population/2} million below average`);
}
const input = '1991';
console.log(Number(input) + 18, input);
console.log(input + 18); */

const la = 18;
if (la == 18)
    console.log('18!!');

//let num = prompt("Enter a number: ");
//console.log(num);

// let numNeighbours = Number(prompt("How many neighbour countires does your country have?"));

// if (numNeighbours === 1) {
//     console.log(`Only 1 border`);
// } else if (numNeighbours > 1) console.log(`More than 1 borders`);
// else
//     console.log(`No Borders`);
const speaksEnglish = true;
const less50M = true;
const isIsland = false;

if (speaksEnglish && less50M && !isIsland)
    console.log('You should live in Porugal');
else
    console.log('Portugal does not meet your criteria');

//CODING CHALLENGE 3
/*
const Dolphins = (97 + 112 + 80) / 3;
const Koalas = (109 + 95 + 50) / 3;

console.log(Dolphins, Koalas);
if (Dolphins >= 100 && Dolphins > Koalas)
    console.log(`Dolphins is the winner`);
else if (Koalas >= 100 && Koalas > Dolphins)
    console.log('Koalas is the winner');
else if (Dolphins === Koalas && Dolphins >= 100 && Koalas >= 100)
    console.log(`It's a Draw`);
else
    console.log(`No trophy`);

//----END
*/

/*
//switch
const language = prompt('Enter your language');
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd Place in number of native speakers');
        break;
    case 'english':
        console.log('3rd Place');
        break;
    case 'hindi':
        console.log('4th Place');
        break;
    case 'arabic':
        console.log('5th Place');
        break;
    default:
        console.log('Great language too :D');
}
*/

// const age = 19;
// age >= 18 ? console.log(`You're an adult.`) :
//     console.log(`You're not an adult`);

// const pop = 120 / 2;
// const avgPop = pop > 33 ? `Portugal's population is above average.` : `Portugal's population is below average.`;
// console.log(avgPop);


//CODING CHALLENGE 4
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip} `);