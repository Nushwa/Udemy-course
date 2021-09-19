'use strict';


const Person = function (name, birthYear) {
    //instance properties
    this.name = name;
    this.birthYear = birthYear;

    //DONT DO THIS
    // this.calAge = function () {
    //     console.log(2021 - this.birthYear);
    // }
}

const nush = new Person('Nushwa', 2001);
console.log(nush);

//1. Empty object {} is creted
//2. function is called this -> new empty object {}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 1999);
console.log(matilda);

console.log(nush instanceof Person);

//////////////Prototypes////////////////////
Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
};
console.log(Person.prototype);
//NOTE Person prototype is for its objects not the Person

// nush.calcAge();
// matilda.calcAge();

// console.log(nush.__proto__);

// console.log(Person.prototype.isPrototypeOf(nush));

Person.prototype.species = 'Homo Sapiens';
// console.log(nush, matilda);
// console.log(nush.hasOwnProperty('species'));

// console.log(nush.__proto__.__proto__); //object

// console.dir(Person.prototype.constructor);

const arr = [4, 7, 2, 1, 8];
// console.log(arr.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
}

// console.log(arr.unique());



//CLASSES

//class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.name = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2021 - this.birthYear);
    }

    get age() {
        return 2021 - this.birthYear;
    }

    //set property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }

    get fullName() {
        return this._fullName;
    }
    //static method
    static hey() {
        console.log('Hey there  🖐');
    }
}

PersonCl.hey();
const Jessi = new PersonCl('Jessica', 2000);

/*
console.log(Jessi);
Jessi.calcAge();
console.log(Jessi.__proto__)

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.name}`);
}
Jessi.greet();
*/

const walter = new PersonCl('Walter White', 1994);
console.log(walter)


const account = {
    owner: 'Nushwa',
    movemements: [300, 50, 1300, 600],

    get latest() {
        return this.movemements.slice(-1).pop();
    },

    set latest(mov) {
        this.movemements.push(mov);
    },


}

// console.log(account.latest);
// account.latest = 50;
// console.log(account);

// console.log(Jessi.age);

// console.log(Jessi);

const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear);
    },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 1999;
steven.calcAge();

/////////INHERITANCE/////////////
const Student = function (name, birthYear, course) {
    Person.call(this, name, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.name} and I study ${this.course}`);

};

const mike = new Student('Mike Williams', 2001, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__.__);