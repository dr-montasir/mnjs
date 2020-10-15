### What is this?

MNJS: MATH NODE JS PACKAGE



### Installation

`npm i mnjs --save`



### Example

```js
const { mnjs } = require(`mnjs`);

console.log(mnjs.subt(2, 5));            			// -3

console.log(mnjs.sqr(2) + mnjs.sqrt(4));            // 6

console.log(mnjs.sqr(4) + mnjs.sqrt(4) / mnjs.pi);  // 16.63661977236754

console.log(mnjs.e);  								// 2.71828
```



### MNJS Object Keys

| Key  | Name                          | Value                                   |
| ---- | ----------------------------- | --------------------------------------- |
| add  | Addition                      | function:  add(num1, num2)              |
| subt | Subtraction                   | function:  subt(num1, num2)             |
| mult | Multiplication                | function:  mult(num1, num2)             |
| divi | Division                      | function:  divi(numerator, denominator) |
| e    | The Number e (Euler's number) | 2.71828                                 |
| pi   | The Number pi (π)             | 3.14159265359                           |
| sqr  | Square                        | function:  sqr(num)                     |
| sqrt | Square Root                   | function:  sqrt(num)                    |

