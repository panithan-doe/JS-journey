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
...
