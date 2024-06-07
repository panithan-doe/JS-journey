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

// ---------------------------------------------
// display movements
const displayMovement = function (movements) {
  containerMovements.innerHTML = ''; // set text to empty
  // NOTE: like textContent but innerHTML is including HTML tags, textContent just text itself

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovement(account1.movements);

// Create Username

const createUsernames = function(accs) {
  
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');

  })

};
// console.log(createUsernames('Doe Panithan Jampahom'))

createUsernames(accounts)


// 

// ---------------------------------------------------

// const displayMovement = function(movements) {

//   containerMovements.innerHTML = '';

//   movements.forEach(function(movement, i) {
//     const type = movement > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//       <div class="movements__value">${movement}</div>
//     </div>
//     `

//     containerMovements.insertAdjacentHTML('afterbegin', html)
//   })

// }

// displayMovement(account1.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0)
// const withdrawals = movements.filter(mov => mov < 0)

// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

const arr = [200, -300, 10, -20, 1000]
const arrFiltered = arr.filter(function(a) {
  return a > 0
})

// arrFiltered = [200, 10, 1000]

// arrMaped = [210, -290, 20, -10, 1010]

console.log(arrFiltered);


// // for of
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}.`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// // for each
// movements.forEach(function (movement) {
//   console.log(movement + 1000000);
// });

// movements.forEach(function (mov, i, arr) {
//   console.log(mov, i, arr);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// console.log(currenciesUnique);

/////////////////////////////////////////////////

// // Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e']

// // slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));

// // join
// console.log(arr.join(' '))

// // at
// console.log(arr.at(-1));
// console.log(arr[-1]);

// console.log('doe'.at(0));
