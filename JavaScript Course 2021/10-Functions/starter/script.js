'use strict';
/*
//Default parameters
const bookings = [];
const createBooking = function (
    //ES6
    flightNo, numPass = 1, price = 199 * numPass
) {
    // numPass = numPass || 1; //short circuiting
    // price = price || 199;

    const booking = {
        flightNo,
        numPass,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('ABR124', undefined, 100);*/

/*
//-----------Value vs reference function-------
//JS does not have functions that pare passed by reference

const flight = 'AB5334';
const nushwa = {
    name: 'Nushwa Javed',
    passport: 23423523,
};

const checkIn = function (flightNo, pass) {
    flightNo = 'HD324'
    pass.name = 'Mrs.' + pass.name;

    if (pass.passport === 23423523) {
        alert('Check-in');
    }
    else
        alert('Wrong passport');
}

checkIn(flight, nushwa);
console.log(flight);
console.log(nushwa);

*/
/*
//----HIGHER ORDER FUNCTIONS------
const oneWord = (str) => {
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = (str) => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//higher order
const transformer = (st, fn) => {
    console.log(`Orignal String: ${st}`);

    console.log(`Transformed String: ${fn(st)}`);
}

//callback is really important part in JS
transformer('JS is the best', upperFirstWord);
transformer('JS is the best', oneWord);

//abstraction ^^^
*/

/*
//Function return functions

const greet = function (gr) {
    return function (name) {
        console.log(`${gr} ${name}`);
    }
}

const greetHEy = greet('Hey');

greetHEy('Jonas');
greetHEy('Nuhswa');

greet('Hello')('Nushwa');

const grt = (st) => name => console.log(`${st} ${name}`);

grt('GoodBye')('Nushwa'); */
/*

//-------FUNCTION METHODS-----------------
const luf = {
    airline: 'PIA',
    code: 'LH',
    bookings: [],
    book(no, psn) {
        console.log(`${psn} booked a seat on ${this.airline} flight ${this.code} ${no}`);
        this.bookings.push({ flight: `${this.code} ${no}`, psn });
    }
}

luf.book(124, 'Nushwa Javed');
console.log(luf)
const cr = {
    airline: 'euro',
    code: 'PH',
    bookings: []
}

const book = luf.book;
//5-11:30
//4-11:30

// book(23, 'Nushwa');

//CALL METHOD
book.call(luf, 13, 'Ahmed Shahzad');
console.log(luf);

book.call(cr, 26, 'Sarah Williams')
console.log(cr);

const swiss = {
    airline: 'Swiss AirLines',
    code: 'AL14',
    bookings: [],
}

book.call(swiss, 120, 'Mary Cooper');

//APPLY METHOD
//does not list of arguments but array
//old JS
const flightData = [234, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//BIND METHOD
//does not call function but returns new function
// book.call(cr, 26, 'Sarah Williams')
const bookCR = book.bind(cr);
bookCR(104, 'Steven Williams');

const bookCR23 = book.bind(cr, 23);
bookCR23('Jonas Thomsan');
bookCR23('Lara Jean');
console.log(cr);

//With Event Listeners
luf.planes = 300;
luf.buyPlane = function () {
    console.log(this);


    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener
    ('click', luf.buyPlane.bind(luf));

//partial application
const addsTax = (rate, val) => val = val + val * rate;

console.log(addsTax(0.1, 200));

const addVAT = addsTax.bind(null, 0.23);
//addVAT = val=> val + val * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

//challenge
const Tax = function (rate) {
    return function (val) {
        return val + val * rate;
    }
}

const addVAT2 = Tax(0.23);
console.log(addVAT2(100));
console.log(addVAT2(14));


*/


//--------CLOSURES-----------
//happens automaticaaly -- recognize it
const secureBooking = function () {
    let passCount = 0;

    return function () {
        passCount++;
        console.log(`${passCount} passengers`);
    }
}

//execution is gone so call stack don't have it after this line
const booker = secureBooking();

//closure makes function remember all the 
//variables that existed at function's birthplace
booker();
booker();
booker();

console.dir(booker);

let f;
const g = function () {
    const a = 2;
    f = function () {
        console.log(a * 2);
    }
}

g();
f();
