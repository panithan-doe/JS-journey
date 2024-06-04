'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '20:00',
    address = '-',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    // ing means ingredient
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(...otherIngredients);
  },
};

restaurant.orderPizza('mushrooms', 'onion', 'olives');

// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// console.log(add(2, 3));
// console.log(add(2, 2, 2));
// console.log(add(1, 2, 3, 5, 7));

// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(others);

// const ingredients = [prompt('Let\'s make pasta! Ingredients 1?'), prompt(`Ingredients 2?`), prompt(`Ingredients 3?`)]

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])

// restaurant.orderPasta(...ingredients)

// Object
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}

// // console.log(newRestaurant);
// const restaurantCopy = {...restaurant}
// console.log(restaurant);
// console.log(restaurantCopy);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(restaurant.mainMenu);
// console.log(mainMenuCopy);

// // join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu);

// // iterables: arrays, strings, maps, sets. NOT objects
// const str = "Hello"
// console.log(...str);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Huataphan',
//   mainIndex: 2,
//   starterIndex: 2,
// }); // from this, we only pass in 1 object. not 4 arguments

// restaurant.orderDelivery({
//   address: 'Nhong Khon',
//   starterIndex: 2,
// })

// restaurant.orderDelivery({
//   starterIndex: 2,
//   mainIndex: 1,
//   time: '21:10',
//   address: 'Amnatcharoen'
// })

// const {
//   name: restaurantName, // change the name "name" to "restaurantName"
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// // console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// let a = 111;
// let b = 999;
// const obj = { a: 7, b: 10, c: 12 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = hours;
// console.log(o, c);

// const arr = [2,3,4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(a,b,c);

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// let [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)
// // [starter, mainCourse] = [mainCourse, starter]

// const nested = [2, 4, [5, 6]];

// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

// const [p, q, r] = [8, 9]

// console.log('print in javascript');
