### What is this?

MNJS: MATH NODE JS PACKAGE



### Installation

`npm i mnjs --save`



### Example

```js
const { mnjs } = require(`mnjs`);

console.log(mnjs.subt(2, 5));	// -3

console.log(mnjs.sqr(2) + mnjs.sqrt(4));	// 6

console.log(mnjs.sqr(4) + mnjs.sqrt(4) / mnjs.pi);	// 16.63661977236754

console.log(mnjs.e);	// 2.71828

console.log(mnjs.pow(2, 4));	// 16

console.log(mnjs.pow(2, -2.5));	// 0.17677669529663687

console.log(mnjs.cbrt(8));	// 2
```



### MNJS Object Keys

| Key  | Name                          | Value                                   |
| ---- | ----------------------------- | --------------------------------------- |
| add  | Addition                      | function:  add(num1, num2)              |
| cube | Cube (n)^3                    | function:  cube(num)                    |
| cbrt | Cube Root                     | function:  cbrt(num)                    |
| divi | Division                      | function:  divi(numerator, denominator) |
| e    | The Number e (Euler's number) | number:  2.71828                        |
| mult | Multiplication                | function:  mult(num1, num2)             |
| pi   | The Number pi (π)             | number:  3.14159265359                  |
| pow  | power                         | function:  power(num1, num2)            |
| sqr  | Square                        | function:  sqr(num)                     |
| sqrt | Square Root                   | function:  sqrt(num)                    |
| subt | Subtraction                   | function:  subt(num1, num2)             |
