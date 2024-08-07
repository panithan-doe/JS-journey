# JS-journey
This is my github for archive my journey of "JavaScript" to be a great Dev! This is the result by learning from the course "The complete JavaScript Course" by " " 

<ins>Note</ins> : to find the unfinished contents, press the `Ctrl + F` and type `unfinished`

list of contents
1. What is JavaScript

# Section 1 : Welcome

## What is JavaScript
JavaScript (JS) is the most use language for developer. Great for front-end but it also use for back-end. 
For front-end, on dynamic effects web browser, React, Angular and Vue is 100% based on JS. For back-end, on web sever will use node.js. This contents focus on front-end. JS can build anything whether Native mobile apps and Native desktop apps. It's very <ins>mind-blowing</ins> 


# Section 2 : JavaScript Fundamental Part1

## Commands & Functions
- `alert()` : to alert on the web page.
- `console.log()` : print to the console (if in console on browser, no need it).
- `// comment` : comment in line.
- `/* comment */` : comment in multiple lines.
- `prompt()` : to alert input box on the web page.

## Data Types

## declaration
`let` can change the value <br>
`const` **cannot** change the value, need to initialize <br>
`var` can change the value, [unfinished] <br>

<ins>Note</ins> : this is not <ins>mandatory</ins> (บังคับ) to declare but it's a terrible idea if you're not declare it :weary:. why? [unfinished]

- Primative
  1. Number : `let age = 23` (JavaScript call integer and decimal as 'Number'.)
  2. String : `let firstName = 'Doe'`
  3. Boolean : `let fullAge = 'true'`
  4. Undefined : `let children`
  5. Null : empty value 
  6. Symbol (ES2015) : unique and cannot be changed *[Not useful for now]*
  7. BigInt : larger integers than the Number
 
  <ins>Note</ins> : JavaScript is <ins>*dynamic typing</ins> -> do not have to manually define the data type of value.
- Object

## String
concatinate 
1. ```javascript
   const doe = "I'm " + firstName + ", a " + (year-birthYear) + " years old " + job + "!"
2. ```javascript
   const doeNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!
   ```
   use  ``` ` ` ``` , use `${}` to contain the value and variable
3. multiline string <br>
   use `\n` and `\n\` to the new line <br>
   ```javascript
   console.log('String\nis\neasy')
   ```
   ```javascript
   console.log('String\n\
   is\n\
   easy')
   ```

## Conversion & Coercion
```javascript
// Conversion
const x = '1998'
x = Number(x)

// Coercion (convert behind the scene)
console.log('I am ' + 21 + ' years old.')
```
<ins>Note</ins> : if you use `-`, `*`, `/` operator. it will be convert to number
```javascript
console.log('21' - '1')

// the result will be 20, number type.
```
<ins>Note</ins> : **NaN** (not a number) is actually a number! you can remember it as **invalid number**. 


## Equality Operators (== vs ===)

== (loose)
```javascript
'18' == 18`
// true
```
=== (strict)
```javascript
'18' === 18
// false
```

<ins>Note</ins> avoid `==` (loose), always use `===` (strict). this will help you to find bugs! <br><br>

because we use `===`. 

```javascript
const num = prompt('Enter number:')
// input 23 
// type of num will be String ('23')
// num === 23 will be false

// this is a bug
```
so you need to conversion:
```javascript
const number = Number(prompt('Enter number:'))
// input 23
// type of num will be Number (23)
// num === 23 will be true
```

## Logical Operators
- and `&&`
- or `||`
- not `!`

## Switch statement
example:
```javascript
const day = 'tuesday'

switch(day) {
    case 'monday': 
        console.log('this is monday😒')
        break;
    case 'tuesday': // day === 'tuesday'
        console.log('this is tuesday😤')
        break;
    case 'wednesday':
        console.log('this is wednesday🙁')
        break;
    case 'thursday':
        console.log('this is thursday😶')
        break;
    case 'friday':
        console.log('this is friday😍')
        console.log('wowwoowo!')
        break;
    case 'saturday':
    case 'sunday':
        console.log('this is ' + day + '🥰')
        console.log('enjoy the weekend!')
        break;
    default:
        console.log('not a valid day!')
}

// output is "this is tuesday😤"
```

<ins>Note</ins> : don't forget to add `break`

```javascript
case 'tuesday':
        console.log('this is tuesday😤')
        // no break;

// the output will also do the next case :
// "this is tuesday😤"
// "this is wednesday🙁" --> next case was executed
```

the next case will execute and chain next, next, next ... until found `break` or `default` case

## Statement & Expression

**expression** : a piece of code that produce the value itself. <br>
- `3+4` <br>
- `1991` <br>
- `true && false && !false`

**statement** : a bigger piece of code that execute and no produce the value itself.
- ```javascript
  if (23 > 1) {
    console.log('fuyohh!')
  }
  ```

## (Ternary) Conditional Operator (?)
use `?` for condition. <br>
`[condition] ? [if part] : [else part]`
```javascript
const age = 23
age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink milk🥛')
```
you can also store the value from `?` condition into the variable <br>
```javascript
const age = 23
const drink = age >= 18 ? 'wine pls🍷' : 'milk pls🥛'
console.log(drink)
```
this will store `'wine pls🍷'` into `drink` variable.


## JavaScript Released: ES5, ES6+ and ESNext

- 1995 : very first version of JavaScript, called 'Mocha'.
- 1996 : rename to 'LiveScript' and then **'JavaScript'** in sequence. use **Java** in the name because this time has the hottest language is **Java** but nothing to do with Java (just for marketing).
- 1997 : ES1 (ECMAScript 1).
- 2009 : ES5 (ECMAScript 5) is released with lots of great new features.
- 2015 : ES6/ES2015 (ECMAScript2015) was released: **biggest update to the language ever!**
- 2016 : Release of ES2016/ES2017/ES2018/ES2019/ES2020/.../ES2999 😅

<ins>Note</ins> : the code of JavaScript written backward in 1997 is still work on the modern JavaScript engine! (ก็คือการเขียนแบบเก่ายังสามารถรันได้กับ engine ปัจจุบัน). this is the reason why the old website keepworking forever. <br>
<ins>Note</ins> : ES5 is fully supported in all browsers. ES6+ can use most features in production with **transpiling** and **polyfilling** <br>


### during development 
use the latest Google Chrome!
### during production
use **Babel** to transplie and polyfill your code (convert most modern JS to ES5). but this course no need to use it.

## The section 2 was is done!



# Section 3 : JavaScript Fundamental Part2

We will learn the ***functions***, ***objects*** and ***loops*** in this section.

## Strict mode
use `'use strict'` at the first line of entire code. <br>
`'use strict'` help us to find the bugs easier!

```javascript
'use strict';

let hasDriversLicense = false;
hasDriverLicense = true; // this will occur error on the console!
```
the error is that you forgot the `'s'` in the `hasDriversLicense`, if you're not use `'use strict'`, the error will invisible to find.


## Functions
declare `function` at the first part of function.

```javascript
function printHaiyah() {
  console.log('Haiyahhh!')
}
```

if you call this function `printHaiyahh()`, the result will be `Haiyahhh!` on the console.

- pass the data to the function.
```javascript
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
}
```
- return the value of function.
```javascript
function add(val1, val2) {
    return val1 + val2
}
```


## Function declaration vs Function expression
- function declaration
```javascript
function calAge (birthYear) {
    return 2024 - birthYear
}

// const age = calAge (2002)
```
- function expression
```javascript
const calAge = function(birthYear) {
    return 2024 - birthYear
}

// const age = calAge(2002)
```

## Arrow function (=>)
shorter and faster to write!

`<function_name> = [parameter(s)] => [return value]`

```javascript
const calAge = birthYear => 2024 - birthYear

// const age = calAge(2002)
```
if it have more calculation inside, use `{}` :
```javascript
const yearUntilRetirement = birthYear => {
    const age = 2024 - birthYear
    const retirement = 60 - age
    return retirement    // need to use return statement
}

```

more examples

```javascript
const add = (value1, value2) => value1 + value2
```

```javascript
const printFuyohhh = () => {
  console.log('Fuyohhh!')
}
```

<br><br><br>
[unfinish]
<br><br><br>

# Section 4: Dev skills & Editor setup 
## Problem Solving
**Example** <br>
"We need a function that reverses whatever we pass into it."
<br>
there are 4 steps to solve any problems.
1. Make sure you 100% understand the problem. -> ask the right question to the problem.
    - what does "whatever" means in this problem? we think it should be strings, numbers, and arrays.
    - what to do if sonething else is passed in?
    - what should be returned?
    - How to recognize whether the argument is a number, a string, or an array?
2. Devide and conquer -> break a big problem to smaller sub-problems.
    - sub-problem 1 is check if argument is a number, a string, or an array.
    - implement reversing a number.
    - implement reversing a string.
    - implement reversing an array.
3. Research
    - Google it! like Stack Overflow, chatgpt, etc...
    - ex. "how to check if input is a number?"
4. Write pseudo-code (for bigger problems)

## Debugging (Fixing error)
1. Using `console.log` to find the bugs.
   - use `console.log()` in each line that we wonder there is a bug.
2. Using 'breakpoint'.
   - first, open the console and click "source". <br> 
     ![image](https://github.com/panithan-doe/JS-journey/assets/117891598/ef55a246-5100-40c2-8760-dc4261e7f89e)

   - click on your file. (script.js) <br>
     ![image](https://github.com/panithan-doe/JS-journey/assets/117891598/b80ab4a1-e83c-4ee9-946f-724fb20d89ff)
     
   - click to mark breakpoint. <br>
     ![image](https://github.com/panithan-doe/JS-journey/assets/117891598/2897d1ee-f54c-4626-ba4f-3134a839504e)
     
   - on the right of the console will show this part that show the current value. <br>
     ![image](https://github.com/panithan-doe/JS-journey/assets/117891598/d05d841c-a92f-4060-bf5b-d61d0e1572c1)
     
   - click the arrow to see the next execution line. <br>
     ![image](https://github.com/panithan-doe/JS-journey/assets/117891598/9a0ab55d-fc23-41ba-9c25-abb779cb9f2a)


   you can use `debugger` statement to mark the breakpoint too. it will automatically open the debugging panel on the browser when you run. <br>
   ![image](https://github.com/panithan-doe/JS-journey/assets/117891598/43be7d47-3fcc-44ab-9803-5f6093a0aa88)



useful command <br>
- `console.warn()`: notify the warning value to the console. <br>
- `console.error()`: notify the error value to the console. <br>
- `console.table()`: showing the object in table form.


# Section 5: DOM and Events Fundamentals

**What is DOM:** DOM is like the tree of html file.
```javascript
<html> <!-- Root Element -->
  
  <head> 
    <title>My title</title>
  </head>
  
  <body>
    <a href="test.html">My link</a>
    <h1>My header</h1>
  </body>
  
</html>
```

![image](https://github.com/panithan-doe/JS-journey/assets/117891598/60ceb624-32eb-42a3-b29f-d8e3ce350ea8)

### manipulating command
- `document.querySelector('[className|idName|...]')` <br>
- document.querySelector()`.textContent` : to access the text content. <br>
- document.querySelector()`.value` : to access the value. <br>
- document.querySelector()`.style` `.[backgroundColor]` : to change the CSS style. <br>

- document.querySelector()`.addEventListener` (`[Event (ex. click)]`, function() { *do something...* ] })


เพิ่มเติม: inclusive คือนับตัวเริ่มและตัวท้าย (1-10 -> 1, 2, ..., 10) exclusive คือไม่นับตัวเริ่มและตัวท้าย (1-10 -> 2, 3, ..., 9)

- `document.querySelectorAll('[className|idName|...]')` : เลือกคลาสที่มีชื่อนี้ทั้งหมด

เพิ่มเติม : Modal คือ page element ที่ popup ออกมาจากหน้าจอ

- document.querySelector`.classList` `.remove([className1, className2, ...])` : remove the class on element.

#### keydown, keypress, keyup
- document.addEventListener(`keydown`) : execute when the key was hit (a time).
- document.addEventListener(`keypress`) : execute when the key was pressed (continuous).
- document.addEventListener(`keyup`) : execute when the key was released (a time).
- use exception (`e`) to recieve the key element.
```javascript
document.addEventListener('keydown', function (e) {
  console.log(e.key + ' was pressed');
  if (e.key === 'Escape') {
    closeModal()
  } 
  // closeModal()
})
```

- document.querySelection().`add`(`[className]`) : add class to the element.
- document.querySelection().`remove`(`[className]`) : remove class of the element.
- document.getElementById(`idName`) : work the same as `querySelection` but doesn't need to type `#`

- `toggle`
  ```javascript
  player0El.classList.toggle('player--active')
  ```
  if `player0E1` have class name `player--active`, it will add `player--active` class to `player0E1`. If not, it will remove `player--active` instead.

# Section 6 : How JavaScript works behind the scene

## Programming paradigm
in this section focus on 3 paradigm.
- **procedural** : the language focus on linear calculation.
- **OOP** : the language focus on object creating.
- **functional** : the language focus on function creating.

JavaScript can do all of that! <br>

**Object** inherit methods from prototype. ex. **Array** <br>
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/28cad455-ce85-4bf1-bb6b-9ecdb1817ed9)

## JavaScript is a **First-class function**
- functions are treated as variables. 
- functions can pass into functions
  ![image](https://github.com/panithan-doe/JS-journey/assets/117891598/d5bf42d9-ad9c-4b28-8c1b-1049aa4bdcb6)

## JavaScript is Dynamically-typed language
- ex.
  ```javascript
  let x = 10;
  x = 'Jonas'
  // change the type of x from 'Number' to 'String'
  ```

![image](https://github.com/panithan-doe/JS-journey/assets/117891598/e1618918-a822-42c3-85f6-b6dda849c5ba)

## JavaScript Engines
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/bc183109-135d-4a52-9be8-11ebb7428f4b)

![image](https://github.com/panithan-doe/JS-journey/assets/117891598/dc3d6dc4-ca73-4547-af10-61ed496ca410)

<br><br><br>
## Compilation vs Interpretation
Compilation : execute the whole file in once.<br>
Interpretation : execute line by line.<br> 

![image](https://github.com/panithan-doe/JS-journey/assets/117891598/b73e4155-470c-4a1b-a676-902940b25e2d)

~~JavaScript is Interpretatoin~~
**No! modern JavaScript now use a mix between Compilation and Interpretation**, called **Just-in-time**
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/1b5bdbf4-7b1d-4868-8530-2039fa0824ee)
This a lot faster than Interpretation.

... [unfinished]

# Section 7 : Data Structures and Modern Operators

## Destructuring an Array

Switching variable trick <br>
```
let [x, y] = [2, 3];
```

in normal way:
```javascript
const temp = x;
x = y;
y = temp;
```

using trick :
```javascript
[x, y] = [y, x]
```

access the array in array:
```javascript
const nested = [2, 4, [5, 6]];
const [i, ,[j, k]] = nested;
// i = 2, j = 5, k = 6
```

define the default value:
```javascript
const [p, q, r] = [8, 9]
// p = 8, q = 9, r = undefined
```
```javascript
const [p=1, q=1, r=1] = [8, 9]
// p = 8, q = 9, r = 1
```

## Destructuring an Object

```javascript
const restaurant = {
  name: "Nescafe",
  location: "Huataphan",
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
}
```
restaurant.name = "Nescafe" <br>
restaurant.location = "Huataphan" <br>
restaurant.categories: = ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
```javascript
const {
  name,
  categories
} = restaurant
```
name = "Nescafe" <br>
categories: = ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
```javascript
const {
  location: loc,        // change the name "location" to "loc"
  categories: tags      // change the name "categories" to "tags"
} = restaurant
```
loc = "Huataphan" <br>
tags = ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] <br>

<br>

define the default value:
```javascript
const {
  menu = [],  // it does not have "menu" in restaurant, so create "menu" and start with []
  starterMenu: starters = [] // change the name "starterMenu" to starters, and set default to []

} = restaurant
```

to re-assign variable
```javascript
let a = 111
let b = 999
const obj = {a: 7, b: 10, c: 12}
{a, b} = obj  // error here
```
it will occur error, because when we use `{` `}`, JS expected the code block. so you need to use `(` `)`
```javascript
let a = 111
let b = 999
const obj = {a: 7, b: 10, c: 12};  // and do not foget ';' in front of '('
({a, b} = obj)  // use the '(' ')'

// a = 7, b = 10
```

## Spread operator (...)
```javascript
const arr = [7, 8, 9]
```
to add all elements of `arr` to the new array, the basic way is
```javascript
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// badNewArr = [1, 2, 7, 8, 9]
```
but we have the better way to do this by using `...`
```javascript
const newArr = [1, 2, ...arr]
// newArr = [1, 2, 7, 8, 9]
```
so the `...` is use to get all elements in the array
```javascript
console.log(arr)
// [7, 8, 9]

console.log(...arr)
// 7, 8, 9
```
Spread operator can also use with Iterator:**arrays, strings, maps and sets**.
for example:
```javascript
const str = "Hello"
console.log(...str)

// H e l l o 
```
but spread operator in ESC2018 is also work with **objects**! even though objects are not iterables <br>
create a new object relate to existing object
```javascript
const restaurant {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  // ...
}
```
adding new attributes (foundedIn and founder)
```javascript
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
```
you can also copy the existing object
```javascript
const restaurantCopy = {...restaurant}
```
<br><br>
from the above. we use `...` to spread the elements. but you can use it to get the "rest" elements. <br>
- if `...` is write on the right of `=` : spread
  ```javascript
  const arr1 = [3, 4]
  const arr2 = [1, 2, ...arr1] 
  //                   ^ 
  // arr2 = [1, 2, 3, 4]
  ```
- if `...` is write on the left of `=` : rest 
  ```javascript
  const [a, b, ...others] = [1, 2, 3, 4, 5] /// ... is on the left of =
  //            ^
  // others = [3, 4, 5]
  ```
- rest arguments
  ```javascript
  const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  console.log(add(2, 3));          // 5
  console.log(add(2, 2, 2));       // 6
  console.log(add(1, 2, 3, 5, 7)); // 18
  ```

[unfinished]

# Section 8 : A Closer Look at Functions 
[unfinished]

# Section 9 : Working With Arrays
## Array Methods
```javascript
let arr = ['a', 'b', 'c', 'd', 'e']
```
- `slice(start, end)`
  ```javascript
  arr.slice(2)    // ['c', 'd', 'e']
  arr.slice(2, 4) // ['c', 'd']
  arr.slice(-2)   // ['d', 'e']
  ```
- `splice(start, deleteAmount, item1, item2, ...)` : to remove elements and replace it to which one was removed.
  ```javascript
  const array = [3, 5, 2, 12, 7];
  const removedElements1 = array.splice(1, 2, 9, 11);  // remove index 1, 2 and replace by 9, 11
  
  console.log(removedElements); // [5, 2] (removed elements : ตัวที่ลบ) 
  console.log(array); // [3, 9, 11, 12, 7] (modified array with new elements added : array หลังลบ)

  ``` 
- `reverse()`  
- `concat()` 
- `join()` : join the elements with specific characters, return string

## For Of (it's in some section but we will talk about it in this section)
```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
```

```javascript
for (const movement of movements) {
  // ...
}
```

## ForEach
do the function to the elements 
```javascript
movements.forEach(function(movement) {
  // ...
})

// add function to each movement
```
you also know there are three argumants in function <br>
`function(element, [index], [entire])`
```javascript
movements.forEach(function(mov, i, arr) {
  console.log(mov, i, arr);
})
```
**<ins>Note<ins>** : you cannot use `break` operator on `forEach`

## Data transformations : map, filter, reduce
there are 3 important and popular array methods

```javascript
const arr = [200, -300, 10, -20, 1000]
```

1. `map` : apply the callback function to all element, also return the value (the advantage of map)
```javascript
const arrMaped = arr.map(function(cur, i, arr) {
  return cur + 10;
})

// arrMaped = [210, -290, 20, -10, 1010]
```
<ins>**NOTE**</ins> : work the same as `forEach`, but `forEach` is not return the value

2. `filter` : 
```javascript
const arrFiltered = arr.filter(function(cur, i, arr) {
  return cur > 0;
})

// arrFiltered = [200, 10, 1000]
```
3. `reduce` : return a single value
```javascript
const arrReduced = arr.reduce(function(acc, cur, i, arr) {
  return acc + cur;
}, 0)  // 0 is initial accumulator value.

// arrReduced = 890
```
<ins>**NOTE**</ins> : you can see `acc` is the first parameter, which is accumulate (ตัวสะสม). and the `reduce(callfunc, init_acc)` have 2 parameters.

## The find Method
`find()` : return the first element that is true with the conditions
```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0)

// firstWithdrawal = -400
```
<ins>**NOTE**</ins> : the ENTER button will work as click event when the cursor is in the fields.

## The findIndex Method
`findIndex()` : return the index of the element that is true with the conditions
```javascript
const index = accounts.findIndex(acc => acc.username === currentAccount.username)
```
this is similar to `indexOf()` method but it can use with only the value 
```javascript
const arr = [2, 3, 5, 7, 9]
arr.indexOf(5)  // 2
```

## some and every
- `some()` : to check "any" element which true in that conditions (is in)
  ```javascript
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  movements.some(mov => mov > 300);  // true
  movements.some(mov => mov > 5000);  // false
  ```


  we have `includes()` method which work similar to `some()` :
  ```javascript
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  movements.includes(200)  // true
  movements.includes(999)  // false
  
  ```
  so, `includes()` will check using the value only but `some()` will check using the conditions

- `every()` : to check "every" element which true in that conditions
  ```javascript
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  movements.every(mov => mov > 0);  // false
  movements.every(mov => mov < 1000000);  // true
  ```

## flat and flatMap
to flat the arrays in arrays (nested array) 
- `flat()` :
  ```javascript
  const arr = [[[1, 2], 3], [[4, 5], 6], 7, 8]
  arr.flat();   // [[1, 2], 3, [4, 5], 6, 7, 8]
  arr.flat(2);  // [1, 2, 3, 4, 5, 6, 7, 8]
  ```
  you can use it in chaining, for example :
  ```javascript
  /*
  account1 = {
    movements: [30, 20, -10]
  }
  account2 = {
    movements: [50, 50, 50]
  }
  account3 = {
    movements: [40, -20, -20]
  }
  accounts = [account1, account2, account3]
  
  */

  const overallBalance = accounts
    .map(acc => acc.movements)          // [[30, 20, -10], [50, 50, 50], [40, -20, -20]]
    .flat()                             // [30, 20, -10, 50, 50, 50, 40, -20, -20]
    .reduce((acc, mov) => acc + mov);   // 190

  // overallBalance = 190
  ```
  we can also use the `flatMap()` to wrap the `map()` and `flat()` methods together
- `flatMap()` :
  ```javascript
  const overallBalance2 = accounts
    .flatMap(acc => acc.movements)      // [30, 20, -10, 50, 50, 50, 40, -20, -20]
    .reduce((acc, mov) => acc + mov);   // 190

  // overallBalance = 190
  ```

## Sorting Array
`sort()` : to sort the array (*mutate) 
<ins>**NOTE**</ins> : the `sort()` method will convert the elements to string before sort!
```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort()  // [-130, -400, -650, 1300, 200, 3000, 450, 70]
```
as you can see. even the type of value is `number`. but the array after sort was sorted by `string`, it's not correct. so use this below.
```javascript
// Ascending
movements.sort((a, b) => {
  if (a > b) return 1
  if (a < b) return -1
})
```
return < 0 : a, b <br>
return > 0 : b, a
```javascript
// Ascending 
movements.sort((a, b) => a - b)
console.log(movements);

// Decending
movements.sort((a, b) => b - a)
```
## More Ways of Creating and Filling Arrays
we know how to create the array with `new Array()` but it have some weird behaviors if we have 1 element 
```
// Normal
const a = new Array(1, 2, 3, 4, 5, 6)  // [1, 2, 3, 4, 5, 6]

// With 1 element
const x = new Array(7)  // [empty × 7]
```
you can see the `x` array will be an empty array with size `7` 
- `filling(value, [start], [end])` : to fill the value to array (*mutate)
  ```javascript
  x.fill(6)  // [6, 6, 6, 6, 6, 6, 6]  
  ```
  ```javascript
  x.fill(6, 3, 5)  // [empty × 3, 6, 6, empty × 2]
  ```
  ```javascript
  a.fill(13, 3)  // [1, 2, 3, 13, 13, 13]
  ```
creating array by `from(object, callbackfunc())` : 
```javascript
const y = Array.from({length: 7}, () => 1)
// y = [1, 1, 1, 1, 1, 1, 1]
```
```javascript
const y = Array.from({length: 7}, (cur, i) => i + 1)
// y = [1, 2, 3, 4, 5, 6, 7]
```
<ins>**NOTE**</ins> : we can change `cur` to `_` that we will throwaway that parameter (it's unnecessary to use)
```javascript
// from Bankist project
const movementsUI = Array.from(document.querySelectorAll('.movements__value'), (mov) => Number(mov.textContent.replace('€', '')))

// movementsUI = [1300, 70, -130, -650, 3000, -400, 450, 200]
```

[unfinished]


# Section 10 : Numbers, Dates, Intl and Timers


## Numbers
### Converting and Checking Numbers
string to number 
- `Number('23')`
- `+'23'`

`parseInt()` : to get the "integer" number from string
- `parseInt('30px')` => 30
- `parseInt('25r')` => 25
- `parseInt('e5')`* : => NaN
`parseFloat()` : to get the "floating" number from string
- `parseFloat('0.33p')` => 0.33
- `parseFloat('e11.20')`* => NaN
- `parseFloat('1.44.221')` => 1.44

*<ins>**NOTE**</ins> : you cannot use with string which have number after string <br>
`isNaN()` : to check is the value "NaN" (Not a Number)
- `Number.isNaN(20)` => false
- `Number.isNaN(+'20X')` => true
- `Number.isNaN(20 / 0)` => false

another methods : `isInteger()` : check is integer number, `isFinite()` : check is infinity value (ex. 23/0)

### Math and Rounding
- `Math.sqrt()` : square root
- `Math.max([array])` : find maximum
- `Math.min([array])` : find minimum
- `Math.PI` : 3.141592653589793

Rounding integers
- `Math.trunc()` : removing any decimal part (rounding)
- `Math.round()` : rounding to nearest integer (23.3 => 23 , 23.9 => 24)
- `Math.ceil()` : rounded up (23.2 => 24)
- `Math.floor()` : rounded down (23.9 => 23)

Rounding decimals
- `([number]).toFixed([digits])` : rounding decimal <br>
  * `(23.345).toFixed(2)` => 23.35 <br>
  * ```javascript
    const price = 198.92165
    price.toFixed(3) // 198.922
    ```
  <ins>note</ins> : keep in mind that `toFixed()` will return `string`

### Numeric Seperators
use `_` to make your numeric value more readable
```javascript
const num = 230_000_000
console.log(num)  // 230000000
```

### Working with BigInt
in JS, the number that more than `9007199254740991` is not safe (not correctly) then use `BigInt()` and `n` to the number. for examples
```javascript
const huge1 = 2343241325431324321232435234n
const huge2 = BigInt(432432)  // working correct with not huge number
```
NOTE : for the huge number. `BigInt([hugeNumber])` is not correct, so use `[hugeNumber]n` instead 
```javascript
const huge = 435453243524352345234532454n
const num = 23

// console.log(huge * num)  =>  error!, use the below
console.log(huge * BigInt(num))
```
strict equation is not work😣
```javascript
// strict
23n === 23  // false

// loose
23n == 23  // true
```
WARNING : the `Math` operators is not work with bigint
- `Math.sqrt(16n)` => error!
bigint cut off the decimal part when divisions
```javascript
10n / 3n  // 3n
10 / 3    // 3.3333333333333335
 
```

## Date

### Let's get to know about Time Zone and UTC
โลกของเราประกอบด้วยเส้น longitude 360 เส้น (ถ้าผ่าตรงกลางโลก
จะอยู่ซีกซ้าย 180 เส้น (-180 องศา)
และซีกขวาอีก 180 เส้น (+180 องศา)) 
<br>the central longitude (0 degree longitude) is Greenwich, London, England. <br>
โลกเรากำหนดให้กรีนิช ลอนดอน สหราชอาณาจักร คือเวลาที่ 0 หรือ **UTC (Universal Time Coordinated) 0** (UTC 0)
<br>ทุก ๆ ลองจิจูดที่เพิ่มขึ้น 15 องศา หรือ 15 เส้น (ทั้งซ้าย และขวา) จากลองจิจูดที่ 0
จะถูกบวกหรือลบเวลาเพิ่มเข้าไปครั้งละ 1 ชั่วโมง<br>

<ins>note</ins> : 15 มาจาก 360/24 (โลกเรามี 24 ชั่วโมง) <br>

longitude ไทยจะอยู่ที่ประมาณ +100 องศา จะได้ 100/15 ~= 6.66667

<ins>**ตัวอย่าง**</ins> เวลาที่ กรีนิช ลอนดอน สหราชอาณาจักร หรือ เวลา UTC คือ 12:00 น. (คิดแบบ 24 ชั่วโมง) <br>
=> เวลาในประเทศไทยซึ่งเป็น UTC+7 (ณ เวลาเดียวกัน) จะเท่ากับ 12:00 น. บวกไปอีก 7 ชั่วโมง ซึ่งก็คือ 19:00 น.


### Create a date
```javascript
const now = new Date()
console.log(now)  // current time
console.log(new Date('December 24, 2015'))
console.log(new Date(2037, 10, 19, 15, 23, 5))  // years 2037, months 10, days 19, hours 15, minutes 23, seconds 5
console.log(new Date(2037, 10, 31))  // 10 is november, which have 30 days => the result will be 1, december instead
```

### get Methods
- `getFullYear()` : get year
- `getMonth()` : get month
- `getDate()` : get day of month
- `getDay()` : get day of week
- `getHours()` : get hours
- `getMinutes()` : get minutes
- `getSeconds()` : get seconds
- `getISOString()` : get ISO standard string 
 <ins>note</ins> ISO คือ มาตรฐานการนำเสนอตามปฏิทินและเวลา <br>
 `movementsDates` in Bankist project is ISO
- `getTime()` : get timestamp (millisecond)
- `Date().now()` : get current timestamp

### set Methods
- `setFullYear()` : set year
- `setMonth()` : set month
- `setDate()` : set day of month
<br>.
<br>.
<br>.

use `string.padStart([maxDigits], [number])` to add `number` at the front of string to complete `maxDigits` digits
```javascript
const now = new Date()

const day = `${now.getDate()}`.padStart(2, 0)          // 02
const month = `${now.getMonth() + 1}`.padStart(2, 0)   // 08
const year = now.getFullYear()                         // 2037

//  02/08/2037
//  ^  ^          add 0 to complete 2 digits
```

### Operation With Dates
how to substract days
```javascript

// const date = new Date(2024, 6, 18)
const calcDaysPassed = (day1, day2) =>
  Math.round(Math.abs(day2 - day1) / (1000 * 60 * 60 * 24));  // the day1 and day2 are in millisecond unit, so divided by (1000 * 60 * 60 * 24) to calculate in day unit

const daysPassed = calcDaysPassed(new Date(), date)

// if (daysPassed === 0) console.log(`Today`)
// if (daysPassed === 1) console.log(`Yesterday`)
// if (daysPassed <= 7) console.log(`${daysPassed} days ago`)

// const day = `${date.getDate()}`.padStart(2, 0);
// const month = `${date.getMonth() + 1}`.padStart(2, 0);
// const year = date.getFullYear();
// console.log(`${day}/${month}/${year}`)
```

### Internationalizing Dates (Intl)
```javascript
const now = new Date()
labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now)
```
using options to display in different format
```javascript
const now = new Date()

const options = {
  hour: 'numeric',  
  minute: 'numeric',
  day: 'numeric',
  month: 'long',  // January, Febuary, ...
  year: 'numeric',
  weekday: 'long',  // Sunday, Monday, ...
};  // <---

// numeric => ex. 1, 2, 3, ...
// long => ex. Sunday, Monday, ..., January, Febuary, ...

labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now)
```
display it dynamically using `navigator.language`. the language is according to your browser 
```javascript
const now = new Date()

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

const locale = navigator.language  // <---

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)
                                                        // ^
```

### Internationalizing Numbers (Intl)
to format the number values, speed unit like `mph`, temperature like celsius
```javascript
const num = 3243243.23

const options = {
  style: 'unit',
  unit: 'mile-per-hour',  // default is "," or "." whatever to number value

};

console.log(new Intl.NumberFormat('en-US').format(num));
// 3,243,243.23

console.log(new Intl.NumberFormat('de-DE').format(num));
// 3.243.243,23

console.log(new Intl.NumberFormat('en-US', options).format(num));
// 3,243,243.23 mph
```

[unfinished]

# Section 11 : Advanced DOM and Events

[unfinished]

# Section 12 : Opject-Oriented Programming (OOP)

[unfinished]

### Abstract
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/67fdea23-a7a9-416f-a97d-e97b080cc7f6)
: no details about each methods, there are just the method name 

### Encapsulation
: to keep some proporties and methods private (cannot access outside the class)
: some methods can be exposed as a public interface which we called API

### Polymorphism
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/a23f6ab3-ca5c-4d33-ac27-b2a6e07a3d24)
: method ที่มีชื่อเหมือนกันแต่ทำงานต่างกันจาก class ที่ inherit มา

### Instance
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/2d9afa46-0d92-4698-8074-ff55cb755200)
: object ที่สร้างขึ้นจาก class ทำให้สามารถใช้งาน method ต่าง ๆ ได้

### Prototype
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/88be1d77-fd59-4f16-b298-bf2a789bfae7)
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/f54669ab-2cbe-4751-96bf-1baf7f44db78)
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/9e8d802f-b097-444e-871f-141f7b37ad98)

<br> <ins>note</ins> : the prototype properties is not in object itself.
![image](https://github.com/panithan-doe/JS-journey/assets/117891598/af374024-ce67-46be-a88c-a99c1ae93671)

you cannot see `calcAge()`, but you can see it in `__proto__`

### Using `class`
```javascript
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }

  // Methods will be added into .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
}
```

### Getter & Setter
- `getter`
  ```javascript
  get latest() {
    return this.movements.slice(-1).pop();
  }
  ```
- `setter`
