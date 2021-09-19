'use strict';

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    console.log(`${this.make} is going at ${this.speed += 10} km/h`);

}

Car.prototype.brake = function () {
    console.log(`${this.make} is going at ${this.speed -= 5} km/h`);
}

const bmw = new Car('BMW', 120);
const mer = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();

mer.accelerate();
mer.brake();


const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    console.log(`${this.make} is going at ${this.speed += 20} km/h with a charge of ${this.charge -= 1}%`);

}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(sp) {
        this.speed = sp * 1.6;
    }

    accelerate() {
        console.log(`${this.make} is going at ${this.speed += 10} km/h`);
    }

    brake() {
        console.log(`${this.make} is going at ${this.speed -= 5} km/h`);
    }
}

const ford = new CarCl('Ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        console.log(`${this.make} is going at ${this.speed += 20} km/h with a charge of ${this.charge -= 1}%`);
        return this;
    }


}
const riv = new EVCl('Rivian', 120, 23);
console.log(riv);

riv.accelerate().chargeBattery(90).brake();

console.log(riv.speedUS);

