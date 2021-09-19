'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


//CREATING USERNAMES
const createUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map((name) => name[0]
    ).join('');
  })

};

createUsernames(accounts);
console.log(accounts);

//Display the deposits and withdrawals
const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = ' ';

  const movs = sort ? movements.slice().sort((a, b) =>
    a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
}


//Calculate Balance and Display the total balance
const calcBal = ((acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
})


//DISPLAY SUMMARY

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)

  const outcome = account.movements
    .filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outcome)}€`;


  const interest = account.movements
    .filter(mov => mov > 0).map(deposit =>
      deposit * account.interestRate / 100).reduce((acc, interest) =>
        acc + interest, 0);

  labelSumInterest.textContent = `${interest}€`;
}

const updateUI = function (acc) {

  //display movements

  displayMovements(acc.movements);
  //display balance

  calcBal(acc);

  //display summary
  calcDisplaySummary(acc);
}
//EVENT LISTENER

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username ===
    inputLoginUsername.value);

  console.log(currentAccount);

  //if account exits?.
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and welcome text
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`;


    //CLEAR INPUT FEILDS
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(acc =>
    acc.username === inputTransferTo.value);

  console.log(amount);
  console.log(recieverAccount);

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
  //implement validity
  if (amount > 0
    && recieverAccount
    && currentAccount.balance >= amount
    && recieverAccount?.username !== currentAccount.username
  ) {
    //doing the interface
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

//Loan functionality
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 &&
    currentAccount.movements.some(mov =>
      mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});


//Close account('
btnClose.addEventListener('click', function (e) {
  e.preventDefault();


  if (inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin) {

    //delete user from data
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    accounts.splice(index, 1);
  }

  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();

  //hide UI
  containerApp.style.opacity = 0;
});

let sorted = false; //set false 
//SORT 
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  //if sorted is false then make it true
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c'];
console.log(arr.slice(1));
console.log(arr);
console.log(arr.splice(1));
console.log(arr);
let arr2 = ['e', 't', 'y'];
const letters = arr.concat(arr2);

console.log(letters.join('-'));
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
///////////////////////FOR EACH

for (const movement of movements) {
  if (movement > 0) {
    console.log(`your deposited ${movement}`);
  }
  else
    console.log(`you withdraw ${Math.abs(movement)}`);
}

console.log("------FOR EACH------------")
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : you deposited ${movement}`);
  }
  else
    console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
})
*/

/*
//-------------MAP FILTER REDUCE-------------
const usd = 1.1;
const arr = movements.map((mov) => mov * usd)

// console.log(arr);
// console.log(movements);

const el = movements.map((mov, i) =>
  `Movement ${i + 1} : you ${mov > 0 ? `deposited` : `withdraw`} ${Math.abs(mov)}`
);

console.log(el);
*/

/*
const dep = movements.filter(function (mov) {
  return mov > 0;
})

console.log(movements);
console.log(dep);


const depo = [];
for (const mov of movements) {
  if (mov > 0)
    depo.push(mov);
}

console.log(depo);

const withdrawals = movements.filter((mov) => mov < 0)

console.log(withdrawals);
*/
/*
//Maximum val of movements array

const max = movements.reduce(function (acc, mov) {
  if (acc > mov)
    return acc;
  else
    return mov;

}, movements[0]);

console.log(movements);
console.log(max);
*/