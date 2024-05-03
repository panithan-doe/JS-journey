// let js = 'amazing';

// if (js === 'amazing') alert ('JavaScript is FUN!');


// console.log(40 + 8 + 23 - 10);

/*console.log(true)
let isStudent = true;
console.log(isStudent);

let year;

console.log(typeof isStudent)
console.log(typeof 23)
console.log(typeof 'Doe')
console.log(typeof year)
console.log(typeof null)
*/

// let age = 30;
// age = 31;
// // yes

// const birth = 1991;
// // birth = 1992;
// // no

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3);

const firstName = 'Jonas';
const lastName = 'Schemaeiei';

console.log(firstName + ' ' + lastName);


console.log(ageJonas > ageSarah);
console.log(firstName > lastName);
*/


// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y)

// let markMass = 95;
// let markHeight = 1.88;

// let johnHeight = 85;
// let johnMass = 1.76;

// let markBMI = markMass / markHeight**2;
// let johnBMI = johnMass / johnHeight**2;

// let markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI)


// const firstName = 'Doe'
// const job = 'student'
// const birthYear = 2010
// const year = 2024

// const doe = "I'm " + firstName + ", a " + (year-birthYear) + " years old " + job + "!"

// console.log(doe)



// const doeNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`

// console.log(doeNew)

// console.log('String\n\
// is\n\
// easy')

// const age = 13
// const isOldEnough = age >= 18

// if (isOldEnough) {
//     console.log('You can start driving license!')
// } else {
//     const yearLeft = 18-age;
//     console.log(`You are too young! Wait another ${yearLeft} years old.`)
// }

// const inputYear = '1991'
// console.log(inputYear + 18)

// console.log(String(23), 23)
// console.log('I am ' + 21 + ' years old.')
// console.log('21'-'1')


// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean('Doe'))
// console.log(Boolean({}))
// console.log(Boolean(-1))


// const money = 0;

// if (money) {
//     console.log('')
// } else {
//     console.log('money is equal to 0')
// }

// const age = 18;
// if (age === 18) console.log('You just became an adult!')


// const inputNumber = Number(prompt('Enter your fav number.'))

// console.log(typeof inputNumber)

// if (inputNumber === 20) console.log('Yesss')
// else console.log('Nooo')


// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision)

// console.log('😊')


// const day = 'tuesday'

// switch(day) {
//     case 'monday':
//         console.log('this is monday😒')
//         break;
//     case 'tuesday':
//         console.log('this is tuesday😤')
//         break;
//     case 'wednesday':
//         console.log('this is wednesday🙁')
//         break;
//     case 'thursday':
//         console.log('this is thursday😶')
//         break;
//     case 'friday':
//         console.log('this is friday😍')
//         console.log('wowwoowo!')
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('this is ' + day + '🥰')
//         console.log('enjoy the weekend!')
//         break;
//     default:
//         console.log('not a valid day!')
// }

// const age = 23
// age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink milk🥛')


function add(n) {
    var x = 5 + add.arguments[0];
    return x;

}

console.log(add(10))