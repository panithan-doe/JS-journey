# JS-journey
This is my github for archive my journey of "JavaScript" to be a great Dev! This is the result by learning from the course "The complete JavaScript Course" by " " 

<ins>Note</ins> : to find the unfinished contents, press the `Ctrl + F` and type `unfinished`

list of contents
1. What is JavaScript



## What is JavaScript
JavaScript (JS) is the most use language for developer. Great for front-end but it also use for back-end. 
For front-end, on dynamic effects web browser, React, Angular and Vue is 100% based on JS. For back-end, on web sever will use node.js. This contents focus on front-end. JS can build anything whether Native mobile apps and Native desktop apps. It's very <ins>mind-blowing</ins> 


# Section 1

## Commands & Functions
- `alert()` : to alert on the web page.
- `console.log()` : print to the console (if in console on browser, no need it).
- `// comment` : comment in line.
- `/* comment */` : comment in multiple lines.

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
   use `\n` and `\n\` to the new line
   ```javascript
   console.log('String\nis\neasy')
   ```
   ```javascript
   console.log('String\n\
   is\n\
   easy')
   ```
