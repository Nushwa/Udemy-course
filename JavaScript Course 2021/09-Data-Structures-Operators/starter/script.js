'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 object literal
    openingHours,
    order: function (starter, Main) {
        return [this.starterMenu[starter], this.mainMenu[Main]];
    },
    orderDeliver: function ({
        starterIndex = 1,
        mainIndex = 0,
        address,
        time = '00:40'
    }) {
        console.log(`Order recieved: menu as ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
    },

    //ES6 object literal
    orderPasta(ing1, ing2, ing3) {
        console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};

/*
//DESTRUCTURING OBJECT
const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories);

const { name: restaurantName } = restaurant;
console.log(restaurantName);
//DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//MUTATE VARIABLES (switch)

let a = 12;
let b = 23;
const ob = { a: 12, b: 15, c: 16 };

({ a, b } = ob);
console.log(a, b);

//nested objects
const { fri: { open, close } } = openingHours
console.log(open, close);

//function with a lot of parameters (order doesn't matter)
restaurant.orderDeliver({
    time: '22: 23 ',
    address: 'House 104, JT',
    Main: 2,
    starter: 1,
});

*/


//--------------DESTRUCTURING ARRAY--------------
/*
const arr = [3, 7, 2, 1];
const a = arr[0];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);

//Switching variables
[first, second] = [second, first]
console.log(first, second);
const [starter, mainm] = restaurant.order(2, 0)
console.log(starter + ' and ' + mainm);
//NESTED
const netes = [2, 4, [5, 6]];

const [i, , [j1, j2]] = netes;
console.log(i, j1, j2);

//DEFAULT VALUE
const [p = 1, q = 1, r = 1] = [4, 7];
console.log(p, q, r);
*/
//SPREAD AND COMPRESS
//--------------SPREAD OPERATORS--------------
/*
const arr = [4, 6, 2];

const newArray = [1, 2, ...arr];
console.log(newArray);


console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Lasagna'];
console.log(newMenu);
//copy array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);


//joinig 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
    // console.log(menu);

const ingr = [
    // prompt("Let's make pasta ingredient 1?"),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingr);

//Objects
const restaurantCope = {...restaurant };
restaurantCope.name = 'Lalaland';
console.log(restaurantCope.name);
console.log(restaurant.name);

*/

//--------------REST PATTERN--------------
/*

//spread becuase on right side =
const arr = [1, 2, ...[3, 4]];

////rest becuase on left side =
const [a, b, ...others] = [5, 6, 7, 8];
console.log(a, b, others);

const [pizza, pasta, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, pasta, otherFood);

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//Functions
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
}

add(2, 3);
add(5, 7, 2, 1); */
//SPREAD OPERATORS ->VALUES SEPERTED BY COMMAS
//REST OPERATORS ->VARIABLES SEPERATED BY COMMAS
/*
//short circuiting
console.log('' || 'Jonas');
console.log(3 || 7);
console.log('' && 'jonas');
//if function exits call it
console.log(restaurant.orderPasta && restaurant.orderPasta('mushrooms'))

restaurant.guestNums = 0
const guests = restaurant.guestNums || 10;
console.log(guests); */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//     console.log(`${i +1}: ${el}`)
// }

/*
//-----------------Optional Chaining-----------
if (restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

//with optional chaining
//to avoid errors
console.log(restaurant?.openingHours?.mon?.open)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days){
    // console.log(day);
    const op = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`${day} : ${op=='closed'? 'Closed': 'Opened'}`);

}

//on methods
//if it exists then log into the cousel
console.log(restaurant.order?.(0,1) ?? 'Method does exist');
console.log(restaurant.orderLasagne?.(0,1) ?? 'Method does not exist')
*/



/*
//PROPERTY NAMES
const pro = Object.keys(openingHours);
console.log(pro);

console.log('We are open on ' + pro.length + ' days: ');
//Looping objects
for(const day of  pro){
    console.log(day);
}
//PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

//NAMES + VALUES , FULL OBJECT
const obj = Object.entries(openingHours);
// console.log(obj);

//key = thur,sat /// value itself is an object
for(const [key, {open, close}] of obj){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

/*
//---------ES6 SETS---------
//to remove duplications
const orderSet = new Set(
    ['Pasta',
    'Pizza',
    'Pasta',
    ]
);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
console.log(orderSet);

orderSet.delete('Garlic Bread');
console.log(orderSet);

const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];

const staffUn = [...new Set(staff)];
console.log(staffUn);
console.log(new Set(['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter']).size);

*/

/*
//----------MAPS------------

const rest = new Map();
rest.set('Name', 'Italiano');
rest.set(1, 'Italy');
rest.set(2, 'Portugal');


rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'WE ARE OPEN :D')
    .set(false, 'We are closed :/')



const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.delete(2))

console.log(rest.set(document.querySelector('h1'), "Heading"));


const ques = new Map([
    ['question', 'Best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct Answer :D'],
    [false, 'Try Again :/'],
])

console.log(ques);

//Covert obj to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

console.log(ques.get('question'));

for (const [key, val] of ques) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${val}`);
}

const an = Number(prompt('Your Answer: '));

console.log(an);
console.log(ques.get(ques.get('correct') === an));

//convert map to array
console.log([...ques]);
*/

//---------STRINGS---------

const airline = 'TAP Air Portugal';
const plane = 'A351';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);


console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4)); //substring part of og string
console.log(airline.slice(0, -1));

const checkMiddleSeat = function (seat) {
    //B AND E ARE MIDDLE
    const lastchar = seat.slice(seat.lastIndexOf(' '));
    console.log(lastchar == 'B' || lastchar == 'C' ? 'Middle Seat' : 'Not the Middle Seat');
}


checkMiddleSeat('11B');
checkMiddleSeat('43C');
checkMiddleSeat('73A');

const ann = 'All passengers come to boarding door 23, boarding door 23'

console.log(ann.replaceAll('door', 'gate'));

const cap = function (name) {
    const ver = name.split(' ');
    const corr = [];

    for (const x of ver) {
        // corr.push(x[0].toUpperCase() + x.slice(1))
        corr.push(x.replace(x[0], x[0].toUpperCase()))
    }
    console.log(corr.join(' '));
}

cap('nushwa javed');

//PADDING

const msg = 'Go to gate 21';
console.log(msg.padStart(20, '*').padEnd(30, '*'));

const num = 2252434535;

const maskCreditCard = num + '';

const last = maskCreditCard.slice(-4);

const crnum = last.padStart(maskCreditCard.length, '*');

console.log(crnum);

const msg1 = 'Bad weather... All Departures Delayed.... ';
console.log(msg1.repeat(5));

