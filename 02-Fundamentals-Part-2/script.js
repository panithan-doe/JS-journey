// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive.')

// const interface = 'audio'


// function printHaiyah() {
//     console.log('Haiyahhh!')
// }

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)

// }

// fruitProcessor('terwe', 'oooo')



// function calAge1(birthYear) {
//     return 2024 - birthYear;
// }

// const age1 = calAge1(2002);
// console.log(age1)

// const calAge = function (birthYear) {
//     return 2024 - birthYear
// }

// const add = function(val1, val2) {
//     return val1 + val2;    
// } 

// const result = add(2, 3)


// const calAge = birthYear => 2024 - birthYear

// const age = calAge(2002)

// console.log(age)




// const multiply = (num1, num2) => num1 * num2;

// const result = multiply(5, 3);
// console.log(result);


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }



// const friends = ['Jade', 'Panitan', 'Nichakan']
// console.log(friends)

// const friends = new Array('Jade', 'Panitan', 'Nichakan')
// console.log(friends)
// // console.log(friends.length)

// friends[0] = 'Jone'
// console.log(friends)

// const numbers = ['one', 'two', 3, friends]
// console.log(numbers)

// console.log(friends)
// friends.shift()
// console.log(friends)
// friends.unshift(23)

// friends.includes('Panitan')
// // true

// friends.includes('Justin')
// // false


// function calcTip(bill) {
    
//     return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2
    
// }

// const calcTotal = (bill, tip) => bill + tip;


// const bills = [125, 555, 44]
// const tips = new Array(calcTip(125), calcTip(555), calcTip(44))

// const totals = [ calcTotal(bills[0], calcTip(125)), calcTotal(bills[1], calcTip(555)), calcTotal(bills[2], calcTip(44)) ]

// console.log(totals)


// Objects


// const doeArray = [
//     'Doe',
//     'Panitan',
//     21,
//     'Student',
//     ['Nichakan', 'Jade', 'Khaiman']
// ]

// const dog = { 
//     name: 'Boe',
//     breed: 'Corki',
//     height: 0.86, 
//     age: 2,
//     bark: function (barkText) {
//         console.log(`Boe is making noise🐶...\n${barkText}!!`)
//     }
    
// };

const dog = { 
    name: 'Boe',
    breed: 'Corki',
    height: 0.86, 
    age: 2,
    // --- this is method ---
    bark: function (barkText) {
        console.log(`Boe is making noise🐶...\n${barkText}!!`)
    }
    // ----------------------
};


// const interestIn = prompt('What do you interest about doe?')

// // interestIn == undefined ? console.log(`Doe's ${interestIn} is ${doe[interestIn]}!`) : console.log(`Doe is not have the info about ${interestIn}`)

// if (doe[interestIn]) console.log(`Doe's ${interestIn} is ${doe[interestIn]}!`)
// else console.log(`Doe is not have the infomation about ${interestIn}🙁`)

// console.log(doe.calAge(2002))
dog.bark('Fuyoh')
dog['bark']('Haiyah')

