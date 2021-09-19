'use strict';

//FUNCTIONS
function logger() {
    console.log('My name is Nushwa');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}


fruitProcessor(5, 7)

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const Pak = describeCountry('Pakistan', 210, 'Islamabad');
const Finland = describeCountry('Finland', 6, 'Helsinki');

// console.log(Pak, Finland);

function calcAge(birthYear) {
    return 2021 - birthYear;
}

const calcAge1 = function(birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge1(2001);
const age1 = calcAge(2003);

// console.log(age1, age2);

function percentageofWorld1(population) {
    return population / 7900 * 100;
}

const china = percentageofWorld1(1441);
const pak = percentageofWorld1(210);
console.log(china, pak);


const percentageofWorld2 = function(population) {
    return population / 7900 * 100;
}

const china2 = percentageofWorld2(1441);
//Arrow Function
const percentageofWorld3 = population => population / 7900 * 100;

const la = percentageofWorld3(210);
console.log(la);

//Function calling other function
function describePopulation(country, population) {
    const per = percentageofWorld3(population);
    return `${country} has ${population} million people, which is about ${per} of the world`;
}

//console.log(describePopulation('Pakistan', 210));
//console.log(describePopulation('China', 1441));


//CODING CHALLENGE 1
/*
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


function checkWinner(avgDol, avgKoal) {

    if (avgDol >= 2 * avgKoal)
        console.log(`Dolphins win (${avgDol} vs ${avgKoal} )`);
    else if (avgKoal >= 2 * avgDol)
        console.log(`Koalas win (${avgKoal} vs ${avgDol})`);
    else
        console.log("No team wins");
}

let avgDolp = calcAverage(85, 54, 41);
let avgKoala = calcAverage(23, 34, 27);

console.log(avgDolp, avgKoala);

checkWinner(avgDolp, avgKoala);
*/
/*
//ARRAY

const friends = ['Urwa', 'Somia', 'Maryam'];
console.log(friends);

const years = new Array(1999, 2001, 2003);
console.log(friends[0]);

//Excerise
const calAge = function(birthYear) {
    return 2021 - birthYear;
}

const age11 = calcAge(years[0]);
const age21 = calcAge(years[1]);
const age31 = calcAge(years[2]);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);

const populations = [210, 1441, 70, 38];

if (populations.length === 4)
    console.log('true');
else {
    console.log('false');
}


const percentages = [percentageofWorld2(populations[0]), percentageofWorld1(populations[1]),
    percentageofWorld2(populations[2])
];
console.log(percentages); */


/*
const friends = ['Urwa', 'Somia', 'Maryam'];
friends.push('Jay');
console.log(friends);
friends.unshift('John'); //add at 0 index
console.log(friends);

friends.pop();
friends.shift(); //remove 1st element
console.log(friends.indexOf('Somia'))

console.log(friends.includes('Somia'));
*/


//Ex
/*const neighbours = ['China', 'India', 'Iran', 'Afghanistan'];
neighbours.push('Utopia');
neighbours.pop();
console.log('Neighbours are: ' +
    neighbours);
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

const chinaind = neighbours.indexOf('China')
neighbours[chinaind] = 'Republic of China';
console.log(neighbours); */


/*
function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip;
}
const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]),
    calcTip(bills[1]), calcTip(bills[2])
];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

//OBJECTS

const jonas = {
    firstName: 'Jonas',
    lastName: 'Knight',
    birthYear: 2001,
    job: 'Teacher',
    friends: ['Urwa', 'Somia', 'Maryam'],
    hasDriversLicense: true,
    // calcAge1: function() {
    //     return 2021 - this.birthYear;
    // }

    calcAge1: function() {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${jonas.firstName} is a ${jonas.calcAge1()} year old ${jonas.job}, he has ${this.hasDriversLicense? 'a' : 'no'} driver's license`;
    }
};

// console.log(jonas.lastName);
// const nameKey = 'Name';

// console.log(jonas['first' + nameKey]);

/*const question = prompt('What do you want to know about Jonas? firstName, lastName, age, job and friends');


if (jonas[question]) {
    console.log(jonas[question]);
} else {
    console.log("Wrong Request!");
}
*/

const myCountry = {
    country: 'Pakistan',
    capital: 'Islamabad',
    language: 'Urdu',
    Population: 210,
    neighbours: ['China', 'India', 'Iran']
}

// console.log(`${myCountry.country} has ${myCountry.Population} million finnish speaking people, ${myCountry.neighbours.length} neighboring countires and a capital called ${myCountry.capital}`);
// myCountry.Population += 2;
// console.log(myCountry.Population);
// myCountry['Population'] -= 2;
// console.log(myCountry.Population);

// console.log(jonas.calcAge1());
// console.log(jonas.age);

// console.log(jonas.getSummary());

//CODING CHALLENGE 3
/*
const Mark = {
    fullName: 'Mark Miller',
    Mass: 78,
    Height: 1.69,
    calcMarkBMI: function() {
        return this.Mass / (this.Height * this.Height);
    }
};

const John = {
    fullName: 'John Smith',
    Mass: 92,
    Height: 1.95,
    calcJohnBMI: function() {
        return this.Mass / (this.Height * this.Height);
    }
};

if (Mark.calcMarkBMI() > John.calcJohnBMI()) {
    console.log(`Mark's BMI (${Mark.calcMarkBMI()})  is hight than John's (${John.calcJohnBMI()})`)
} else {
    console.log(`John's BMI (${John.calcJohnBMI()})  is hight than Mark's (${Mark.calcMarkBMI()}) `)
} */

//LOOPS
// for (let i = 1; i <= 10; i++) {
//     console.log('Lifting weights repetition ' + i);
// }

const Nushwa = [
    'Nushwa',
    'Javed',
    19,
    'Student'
];

for (let i = 0; i < Nushwa.length; i++) {
    console.log(Nushwa[i], typeof Nushwa[i])
}

const years = [2001, 1999, 2002];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
// console.log(ages);

const populations = [210, 1441, 70, 38];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2[i] = percentageofWorld1(populations[i]);
}
console.log(percentages2);



const percentages = [percentageofWorld2(populations[0]), percentageofWorld1(populations[1]),
    percentageofWorld2(populations[2])
];
console.log(percentages);
/*
const listofNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listofNeighbours.length; i++) {
    for (let j = 0; j < listofNeighbours[i].length; j++) {
        console.log('Neighbour: ' + listofNeighbours[i][j]);
    }
} */
//CODING CHALLENGE 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);
const tips = [];
const total = [];

function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip;
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    total[i] = bills[i] + tips[i];
}
console.log('Tips: ' + tips);
console.log('Total  ' +
    total);

function calcAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;

}
console.log(calcAvg(total));