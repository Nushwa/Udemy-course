
let JuliaDog = [3, 5, 2, 12, 7];
let KateDog = [4, 1, 15, 8, 3];

checkDogs = (dogsJulia, dogsKate) => {
    corrected = dogsJulia.slice();
    corrected.splice(0, 1);
    corrected.splice(-2);
    console.log(corrected);

    const arr = corrected.concat(dogsKate);
    console.log(arr);

    arr.forEach(function (dog, i) {
        if (dog >= 3)
            console.log(`Dog Number ${i + 1} is an adult and is ${dog} years old`);

        else
            console.log(`Dog Number ${i + 1} is still a puppy`);
    })
}

// checkDogs(JuliaDog, KateDog);


//-------------MAP FILTER REDUCE-------------
/*
const calcAverageAge = function (ages) {
    const humanAges = ages.map
        (age => (age <= 2 ?
            2 * age :
            16 + age * 4));

    console.log(humanAges);
    // const fl = ages.filter(() => humanAge > 18, 0)

    // const av = ages.reduce(function (acc, age) {
    //     let avg = acc + age;
    //     avg /= age.length;
    //     return avg;
    // })

    const adult = humanAges.filter(age => age >= 18);
    console.log(adult);

    const average = adult.reduce((acc, age) => acc + age, 0) / adult.length;
    return average;

}

const calcAverageAge1 = function (ages) {
    const humanAge1 = ages
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

    return humanAge1;
}

const a1 = calcAverageAge([5, 2, 4, 1, 15, 8, 3]);
console.log(a1);

console.log(calcAverageAge1([5, 2, 4, 1, 15, 8, 3]))*/


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
})

console.log(dogs);

const SarahDog = dogs.find(dog => dog.owners.includes
    ('Sarah'));
console.log(SarahDog);
console.log(`Sarah's Dog is eating ${SarahDog.curFood > SarahDog.recommendedFood ? 'too much' : 'less'} `);


//3
const EatMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).map(dog => dog.owners).flat();
console.log(EatMuch);

const EatLess = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(EatLess);

//4
console.log(`${EatMuch.join(' and ')} dogs eat too much`);
console.log(`${EatLess.join(' and ')} dogs eat too little`);

//5
const am1 = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(am1);

//6

const am2 = dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.10;

console.log(dogs.some(am2));
//7
console.log(dogs.filter(am2));

//8

const sortt = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(sortt);