## mnjs
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![mnjs version](https://img.shields.io/npm/v/mnjs.svg?style=flat-square)](https://www.npmjs.com/package/mnjs) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/mnjs.svg)]() [![npm](https://img.shields.io/npm/dt/mnjs.svg)]() [![npm](https://img.shields.io/npm/dm/mnjs.svg)]() [![](https://data.jsdelivr.com/v1/package/npm/mnjs/badge)](https://www.jsdelivr.com/package/npm/mnjs)

> MATH NODE JS (MNJS): A tiny math library for node.js & JavaScript on browser



## Installation

`npm i mnjs --save`

[![http://placehold.jp/24/cb0101/ffffff/280x45.png?text=npm%20i%20mnjs%20--save](http://placehold.jp/24/cb0101/ffffff/280x45.png?text=npm%20i%20mnjs%20--save)](https://www.npmjs.com/package/mnjs)

`yarn add mnjs`

[![http://placehold.jp/24/25799f/ffffff/280x45.png?text=yarn%20add%20mnjs](http://placehold.jp/24/25799f/ffffff/280x45.png?text=yarn%20add%20mnjs)](https://classic.yarnpkg.com/en/package/mnjs)

`<script src="https://cdn.jsdelivr.net/npm/mnjs"></script>`

[![http://placehold.jp/24/bd483b/fec82f/705x45.png?text=%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fmnjs%22%3E%3C%2Fscript%3E](http://placehold.jp/24/bd483b/fec82f/705x45.png?text=%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fmnjs%22%3E%3C%2Fscript%3E)](https://www.jsdelivr.com/package/npm/mnjs)



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

```html
<!DOCTYPE html>
<html>
  <head>
    <title>mnjs</title>
    <!--<script src="https://cdn.jsdelivr.net/npm/mnjs@1.2.0/index.js"></script>-->
    <script src="https://cdn.jsdelivr.net/npm/mnjs"></script>
    <!--          This file is always minified ☝         -->
  </head>
  <body>
    <script>
      let myNumber = 0.1;
      const myCube = mnjs.cube(myNumber);
      // mnjs.cube(0.1) returns 0.001
      console.log(
        `(${myNumber})^3 returns ${myCube} in mnjs library`
      );
      // Math.pow(0.1, 3) or (0.1 * 0.1 * 0.1) returns 0.0010000000000000002
      console.log(
        `(${myNumber})^3 returns ${Math.pow(myNumber, 3)} in JavaScript`
      );
    </script>
  </body>
</html>
```



## Examples

> Use `console.log()` to output the result.  `console.log(mnjs.abs(-3.6));  // 3.6`

```js
const { mnjs } = require(`mnjs`);

mnjs.abs(-3.6)  // 3.6

mnjs.subt(2, 5)  // -3

mnjs.sqr(2) + mnjs.sqrt(4)  // 6

mnjs.sqr(4) + mnjs.sqrt(4) / mnjs.pi  // 16.63661977236758

mnjs.e  // 2.718281828459045

mnjs.exp(1)  // 2.718281828459045

mnjs.exp(-1)  // 0.367879441171442

mnjs.exp(mnjs.pi / 3)  // 2.849653908226361

mnjs.log(10)  // 2.302585092994046

mnjs.log(mnjs.e)  // 1

mnjs.hypot(4)  // 4
mnjs.hypot(3, 4)  // 5
mnjs.hypot(4, 2, 4)  // 6
mnjs.hypot(-3, -4)  // 5
mnjs.hypot(-4)  // 4
mnjs.sqrt(mnjs.add(mnjs.sqr(6), mnjs.sqr(8))) === mnjs.hypot(6, 8) // true

mnjs.fix(2.718281828459045, 2)  // 2.72 

mnjs.inv(10)  // 0.1

mnjs.max(1, 10, 3, -2)  // 10

mnjs.min(5, 1, -3.2, 0.5, 3)  // -3.2

mnjs.pow(2, 4)  // 16

mnjs.pow(2, -2.5)  // 0.176776695296637

mnjs.cbrt(8)  // 2

mnjs.nrt(0.0001, 4)  // 0.1
mnjs.nrt(Infinity, Infinity)  // 1
mnjs.nrt(Infinity, Infinity) === mnjs.pow(Infinity, 1 /Infinity)  // true

mnjs.sin(1)  // 0.8414709848
mnjs.sin.rad(1)  // 0.8414709848
mnjs.sin(1) === mnjs.sin.rad(1)  // true

mnjs.dtr(30)  // 0.5235987756
mnjs.sin.deg(30)  // 0.5
mnjs.sin.deg(30) === Number(mnjs.sin(mnjs.dtr(30)))  // true

mnjs.cos.deg(60)  // 0.5

mnjs.cos(0)  // 1
mnjs.cos.rad(0)  // 1
mnjs.cos(1) === mnjs.cos.rad(1)  // true

mnjs.tan.deg(45)  // 1

mnjs.tan(0.5)  // 0.5463024898
mnjs.tan(0.5) === mnjs.tan.rad(0.5)  // true

mnjs.tan.deg(90)  // -Infinity
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
| e       | The Number e (Euler's number)                  | number:  2.718281828459045                               |
| exp     | The power of e (Euler's number)                | function: exp(power)                                     |
| fix     | Fix to the certain decimal point               | function: fix(num, point)                                |
| hypot   | The square root of the sum of squares          | function: hypot(num1, num2, ...)                         |
| inv     | The inverse of a number                        | function: inv(num)                                       |
| log     | The Natural logarithm (base e) of a number     | function: log(x) is equivalent to *ln(x)* in mathematics |
| max     | Max function returns the largest-valued number | function: max(num1, num2, ...)                           |
| min     | Min function returns the lowest-valued number  | function: max(num1, num2, ...)                           |
| mult    | Multiplication                                 | function:  mult(num1, num2)                              |
| nrt     | N Root                                         | function:  nrt(num, root), when root=n={1,2,..}          |
| pi      | The Number pi (π)                              | number:  3.141592653589793                               |
| phi     | The Golden Ratio (Phi)                         | number:  1.618033988749895                               |
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