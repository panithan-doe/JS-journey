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
