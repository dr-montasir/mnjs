## mnjs
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![mnjs version](https://img.shields.io/npm/v/mnjs.svg?style=flat-square)](https://www.npmjs.com/package/mnjs) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/mnjs.svg)]() [![npm](https://img.shields.io/npm/dt/mnjs.svg)]() [![npm](https://img.shields.io/npm/dm/mnjs.svg)]()

> MATH NODE.JS (MNJS): A tiny math library for node.js



## Installation

`npm i mnjs --save`

[![https://nodei.co/npm/mnjs.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/mnjs.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/mnjs)



## Some of the solutions provided by the mnjs library

```js
// JavaScript
0.1 + 0.2 = 0.30000000000000004		// 0.1 + 0.2 === 0.3 returns false
0.2 + 0.7 = 0.8999999999999999		// 0.2 + 0.7 === 0.9 returns false
0.7 - 0.2 = 0.49999999999999994		// 0.7 - 0.2 === 0.5 returns false
0.1 * 0.2 = 0.020000000000000004	// 0.1 * 0.2 === 0.02 returns false
0.3 / 0.1 = 2.9999999999999996		// 0.3 / 0.1 === 3 returns false

// MNJS library
mnjs.add(0.1, 0.2)   = 0.3			// mnjs.add(0.1, 0.2)  === 0.3 returns true
mnjs.add(0.2, 0.7)   = 0.9			// mnjs.add(0.2, 0.7)  === 0.9 returns true
mnjs.subt(0.7, 0.2)  = 0.5			// mnjs.subt(0.7, 0.2) === 0.5 returns true
mnjs.mult(0.1, 0.2)  = 0.02			// mnjs.mult(0.1, 0.2) === 0.02 returns true
mnjs.divi(0.3, 0.1)  = 3 			// mnjs.divi(0.3, 0.1) === 3 returns true
```



## Examples

> Use `console.log()` to output the result.  `console.log(mnjs.abs(-3.6));  // 3.6`

```js
const { mnjs } = require(`mnjs`);

mnjs.abs(-3.6);  // 3.6

mnjs.subt(2, 5);  // -3

mnjs.sqr(2) + mnjs.sqrt(4);  // 6

mnjs.sqr(4) + mnjs.sqrt(4) / mnjs.pi;  // 16.63661977236754

mnjs.e;  // 2.718281828459045

mnjs.log(10)  // 2.302585092994046

mnjs.log(mnjs.e);  // 1

mnjs.max(1, 10, 3, -2)  // 10

mnjs.min(5, 1, -3.2, 0.5, 3)  // -3.2

mnjs.pow(2, 4);  // 16

mnjs.pow(2, -2.5);  // 0.176776695296637

mnjs.cbrt(8);  // 2

mnjs.nrt(0.0001, 4)  // 0.1
mnjs.nrt(Infinity, Infinity)  // 1
mnjs.nrt(Infinity, Infinity) === mnjs.pow(Infinity, 1 /Infinity)  // true

mnjs.sin(1);  // 0.8414709848078965
mnjs.sin.rad(1);  // 0.8414709848078965
mnjs.sin(1) === mnjs.sin.rad(1)  // true

mnjs.sin.deg(30);  // 0.5
mnjs.sin.deg(30) === Number(mnjs.sin(dtr(30)).toFixed(5))  // true

mnjs.cos.deg(60);  // 0.5

mnjs.cos(0);  // 1
mnjs.cos.rad(0);  // 1
mnjs.cos(1) === mnjs.cos.rad(1)  // true

mnjs.tan.deg(45);  // 1

mnjs.tan(0.5);  // 0.5463024898437905
mnjs.tan(0.5) === mnjs.tan.rad(0.5)  // true

mnjs.tan.deg(90);  // Infinity
```

##### For more examples, click at this 👉 [link.](https://github.com/dr-montasir/mnjs/blob/master/examples/math-functions.md)



## MNJS Object Keys

| Key     | Name                                           | Value                                                    |
| ------- | ---------------------------------------------- | :------------------------------------------------------- |
| abs     | The absolute value of a number                 | function:  abs(num)                                      |
| add     | Addition                                       | function:  add(num1, num2)                               |
| cos     | Cosine (in radians)                            | function:  cos(angleRadians)                             |
| cos.deg | Cosine (in degrees)                            | function:  cos.deg(angleDegrees)                         |
| cos.rad | Cosine (in radians)                            | function:  cos.rad(angleRadians)                         |
| csc     | Cosecant (or cosec)                            | function:  csc(angleRadians)                             |
| csc.deg | Cosecant (in degrees)                          | function: csc.deg(angleDegrees)                          |
| csc.rad | Cosecant (in radians)                          | function:  csc.rad(angleRadians)                         |
| cube    | Cube (n)^3                                     | function:  cube(num)                                     |
| cbrt    | Cube Root                                      | function:  cbrt(num)                                     |
| dtr     | Degrees to Radians conversion                  | function: dtr(angleDegrees).  Result in radians          |
| divi    | Division                                       | function:  divi(numerator, denominator)                  |
| e       | The Number e (Euler's number)                  | number:  2.71828                                         |
| log     | The Natural logarithm (base e) of a number     | function: log(x) is equivalent to *ln(x)* in mathematics |
| max     | Max function returns the largest-valued number | function: max(num1, num2, ...)                           |
| min     | Min function returns the lowest-valued number  | function: max(num1, num2, ...)                           |
| mult    | Multiplication                                 | function:  mult(num1, num2)                              |
| nrt     | N Root                                         | function:  nrt(num, root), when root=n={1,2,..}          |
| pi      | The Number pi (π)                              | number:  3.14159265358979                                |
| pow     | power                                          | function:  pow(num, power)                               |
| rtd     | Radians to Degrees conversion                  | function: rtd(angleRadians).  Result in degrees          |
| sin     | Sine (in radians)                              | function:  sin(angleRadians)                             |
| sin.deg | Sine (in degrees)                              | function:  sin.deg(angleDegrees)                         |
| sin.rad | Sine (in radians)                              | function:  sin.rad(angleRadians)                         |
| sqr     | Square                                         | function:  sqr(num)                                      |
| sqrt    | Square Root                                    | function:  sqrt(num)                                     |
| subt    | Subtraction                                    | function:  subt(num1, num2)                              |
| tan     | Tangent (in radians)                           | function:  tan(angleRadians)                             |
| tan.deg | Tangen (in degrees)                            | function:  tan.deg(angleDegrees)                         |
| tan.rad | Tangen (in radians)                            | function:  tan.rad(angleRadians)                         |

##### For all objects keys, click at this 👉 [link.](https://github.com/dr-montasir/mnjs/blob/master/object-keys/obj-keys.md)