// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = "23";
// if (x == 23) console.log(23);

// console.log();

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - what is the temp amplitude means? ans: the diff between min and max temp
// - how to compute the min and max temperature? ans: for loop the array and store the max/min to the different variables.
// - what's a sensor 'error' looks like? ans: undefinded

// 2. Breaking up into sub-problems
// - how to ignore error?
// - how to find max and min?
// - subtract min from max (amplitude)

// function findMin(arr) {}

// function findMax(arr) {
//   return max;
// }

// const findTempAmplitude = (arr) => {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") continue;

//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }

//   console.log(max, min);
//   return max - min;
// };

// // findTempAmplitude([3, 2, 5, 1, 4]);
// const amplitude = findTempAmplitude(temperatures);

// console.log(amplitude);

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         value: Number(prompt('Degree celsius:'))

//     }

//     debugger;
//     const kelvin = measurement.value + 273;

//     return kelvin;
// }

// console.log(measureKelvin());

// coding challenge #1

// 1. understand the problem
// - we have max temp forcasted each day, in array. (each value is already max temp)
// - the result is string
// - calculate by thermometer

// 2. break to sub-problems
// - create "printForecast" func
// - concat each temp value to each "day block".
// - push each "day block" to the new array
//

const printForecast = function (arr) {
  let result = "... ";
  
  for (let i = 0; i < arr.length; i++) {
    result += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log(result);
};


// printForecast([17, 21, 23])
printForecast([12, 5, -5, 0, 4])

