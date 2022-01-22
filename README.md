## mnjs
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![mnjs version](https://img.shields.io/npm/v/mnjs.svg?style=flat-square)](https://www.npmjs.com/package/mnjs) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/mnjs.svg)]() [![npm](https://img.shields.io/npm/dt/mnjs.svg)]() [![npm](https://img.shields.io/npm/dm/mnjs.svg)]() [![](https://data.jsdelivr.com/v1/package/npm/mnjs/badge)](https://www.jsdelivr.com/package/npm/mnjs)

> MATH NODE JS (MNJS): A tiny math library for node.js & JavaScript on browser



## Installation

`npm i mnjs --save`

[![http://placehold.jp/24/cb0101/ffffff/280x45.png?text=npm%20i%20mnjs%20--save](http://placehold.jp/24/cb0101/ffffff/280x45.png?text=npm%20i%20mnjs%20--save)](https://www.npmjs.com/package/mnjs)

`yarn add mnjs`

[![http://placehold.jp/24/25799f/ffffff/280x45.png?text=yarn%20add%20mnjs](http://placehold.jp/24/25799f/ffffff/280x45.png?text=yarn%20add%20mnjs)](https://classic.yarnpkg.com/en/package/mnjs)

`<script src="https://cdn.jsdelivr.net/npm/mnjs/browser/index.js"></script>`

[![http://placehold.jp/24/bd483b/fec82f/785x45.png?text=%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fmnjs%22%3E%3C%2Fscript%3E](http://placehold.jp/24/bd483b/fec82f/785x45.png?text=%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fmnjs%2Fbrowser%2Findex.js%22%3E%3C%2Fscript%3E)](https://www.jsdelivr.com/package/npm/mnjs)



## Some of the solutions provided by the mnjs library

```js
// JavaScript
0.1 + 0.2 = 0.30000000000000004   // 0.1 + 0.2 === 0.3 returns false
0.2 + 0.7 = 0.8999999999999999    // 0.2 + 0.7 === 0.9 returns false
0.7 - 0.2 = 0.49999999999999994   // 0.7 - 0.2 === 0.5 returns false
0.1 * 0.2 = 0.020000000000000004  // 0.1 * 0.2 === 0.02 returns false
0.3 / 0.1 = 2.9999999999999996    // 0.3 / 0.1 === 3 returns false
1.2 % 0.5 = 0.19999999999999996   // 1.2 / 0.5 === 0.2 returns false

// MNJS library
mnjs.add(0.1, 0.2)   = 0.3      // mnjs.add(0.1, 0.2)  === 0.3 returns true
mnjs.add(0.2, 0.7)   = 0.9      // mnjs.add(0.2, 0.7)  === 0.9 returns true
mnjs.subt(0.7, 0.2)  = 0.5      // mnjs.subt(0.7, 0.2) === 0.5 returns true
mnjs.mult(0.1, 0.2)  = 0.02     // mnjs.mult(0.1, 0.2) === 0.02 returns true
mnjs.divi(0.3, 0.1)  = 3        // mnjs.divi(0.3, 0.1) === 3 returns true
mnjs.rem(1.2, 0.5)   = 0.2      // mnjs.rem(1.2, 0.5)  === 0.2 returns true
```

```html
<!-- html -->
<!DOCTYPE html>
<html>
  <head>
    <title>mnjs</title>
    <!--<script src="https://cdn.jsdelivr.net/npm/mnjs@3.0.0/browser/index.js"></script>-->
    <script src="https://cdn.jsdelivr.net/npm/mnjs/browser/index.js"></script>
    <!--                       This file is always minified ☝              -->
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

```js
// Next JS
// index.js
// npm install mnjs --save
import mnjs from 'mnjs';
import React from 'react';

const Home = () => {

  const price = 4.5 / 3;

  return (
    <div>
      <ul>
        <li>{mnjs.add([1,8], 1).[1]}</li>
        <li>{mnjs.fix(1, 2)}</li>
        <li>{mnjs.fix(mnjs.phi,2)}</li>
        <li>{mnjs.stn('8.00')}</li>
        <li>{mnjs.zeros(2,2)}</li>
        <li>{mnjs.zeros(2.1,2)}</li>
        <li>{mnjs.zeros(2.1440000000,2)}</li>
        <li>{mnjs.zeros(2.1440000000,5)}</li>
        <li>${mnjs.zeros(price,2)}</li>
        <li>
            <a
              className="App-link"
              href="https://www.npmjs.com/package/mnjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn MNJS (Math Node JS)
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
```

```js
// React JS
// App.js
// npm install mnjs --save
import {divi, zeros, stn, nts} from 'mnjs';
import logo from './logo.svg';
import './App.css';

function App() {
  const price = divi(4.2, 3);
  const priceWithFormat = zeros(price, 2);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <a
          className="App-link"
          href="https://www.npmjs.com/package/mnjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn MNJS (Math Node JS)
        </a>
        <h2>
          <p>${nts(0.00)}</p>
          Free $
          {
            zeros(stn('0.00'), 2)
          } <strike>${priceWithFormat}</strike>
        </h2>
        <small>Type: {typeof priceWithFormat}</small>
      </header>
    </div>
  );
}

export default App;
```

```js
// Node JS
// index.js
// npm install mnjs --save

// import mnjs from 'mnjs';
// console.log(mnjs.sin.deg(mnjs.range(0, 90, 30)));
// Or

import { sin, range } from 'mnjs';
console.log(sin.deg(range(0, 90, 30)));
```



## Examples

> Use `console.log()` to output the result.  `console.log(mnjs.abs(-3.6));  // 3.6`

```js
const mnjs = require(`mnjs`);

mnjs.abs(-3.6)  // 3.6

mnjs.subt(2, 5)  // -3

mnjs.sqr(2) + mnjs.sqrt(4)  // 6

mnjs.sqr(4) + mnjs.sqrt(4) / mnjs.pi  // 16.63661977236758

mnjs.e  // 2.718281828459045

mnjs.exp(1)  // 2.718281828459045

mnjs.exp(-1)  // 0.367879441171442

mnjs.exp(mnjs.pi / 3)  // 2.849653908226361

mnjs.log(10)  // 2.302585092994046

mnjs.ln2  // 0.693147180559945
mnjs.ln10  // 2.302585092994046

mnjs.log2e  // 1.442695040888963
mnjs.log10e  // 0.434294481903252

mnjs.log1p(5)  // 1.791759469228055

mnjs.log(mnjs.e)  // 1

mnjs.hypot(4)  // 4
mnjs.hypot([4])  // 4
mnjs.hypot(3, 4)  // 5
mnjs.hypot([3, 4])  // 5
mnjs.hypot(4, 2, 4)  // 6
mnjs.hypot([4, 2, 4])  // 6
mnjs.hypot([-3, -4])  // 5
mnjs.hypot(-3, -4)  // 5
mnjs.hypot([-4])  // 4
mnjs.hypot(-4)  // 4
mnjs.sqrt(mnjs.add(mnjs.sqr(6), mnjs.sqr(8))) === mnjs.hypot(6, 8) // true
mnjs.hypot([-3, -4], 1)  // Error: MNJS ERROR No. 01 : 05
mnjs.hypot([-3, -4], [1])  // Error: MNJS ERROR No. 01 : 05
mnjs.hypot([-3, -4, '1'])  // Error: MNJS ERROR No. 01 : 05

mnjs.fix(2.718281828459045, 2)  // 2.72 

mnjs.inv(10)  // 0.1

mnjs.ceil(1.1)  // 2
mnjs.ceil(-1.1) // -1
mnjs.ceil([-0.2, 0, 0.2]) // [-0, 0, 1]

mnjs.max(1, 10, 3, -2)  // 10
mnjs.max([1, 10, 3, -2])  // 10
mnjs.max(1, 10, 3, '')  // Error: MNJS ERROR No. 01 : 05

mnjs.min(5, 1, -3.2, 0.5, 3)  // -3.2
mnjs.min([5, 1, -3.2, 0.5, 3])  // -3.2
mnjs.min()  // Error: MNJS ERROR No. 01 : 05
mnjs.min([])  // Error: MNJS ERROR No. 01 : 05: This function accepts numeric arguments or one numeric array argument. (num1, num2, ..., num) => {} or ([num1, num2, ..., num]) => {}

mnjs.pow(2, 4)  // 16

mnjs.pow(2, -2.5)  // 0.176776695296637

mnjs.cbrt(8)  // 2

mnjs.nrt(0.0001, 4)  // 0.1
mnjs.nrt(Infinity, Infinity)  // 1
mnjs.nrt(Infinity, Infinity) === mnjs.pow(Infinity, 1 /Infinity)  // true

mnjs.tau  // 6.283185307179586

mnjs.sin(1)  // 0.841470984807897
mnjs.sin.rad(1)  // 0.841470984807897
mnjs.sin(1) === mnjs.sin.rad(1)  // true

mnjs.dtr(30)  // 0.523598775598299
mnjs.sin.deg(30)  // 0.5
mnjs.sin.deg(30) === mnjs.sin(mnjs.dtr(30))  // true

mnjs.cos.deg(60)  // 0.5
mnjs.cos(0)  // 1
mnjs.cos.rad(0)  // 1
mnjs.cos(1) === mnjs.cos.rad(1)  // true

mnjs.tan.deg(45)  // 1

mnjs.tan(0.5)  // 0.54630248984379
mnjs.tan(0.5) === mnjs.tan.rad(0.5)  // true

mnjs.tan.deg(90)  // -Infinity

1 / mnjs.sin.deg(30)  // 2
mnjs.csc.deg(30)  // 2

(1 / mnjs.cos.deg(60)) === (mnjs.sec.deg(60)) // true
console.log(mnjs.sec.deg(60))  // 2

(1 / mnjs.tan.deg(45)) === (mnjs.cot.deg(45)) // true
mnjs.cot.deg(45)  // 1

mnjs.cot.deg(0)  // Infinity

mnjs.acsc(mnjs.csc(0.67))  // 0.67

mnjs.asec.rad(1) === mnjs.asec(1)  // true

mnjs.stn("123") // 123
mnjs.nts(123) // "123"

/***** Matrices *****/
mnjs.range(1, 10, 1)   //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
mnjs.range(1, 10)      //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
mnjs.range(10, 1, 1)   //  [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
mnjs.range(10, 1)      //  [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
mnjs.range(1, 5, 0.5)  //  [ 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 ]
mnjs.range(1, 0, 0.2)  //  [ 1, 0.8, 0.6, 0.4, 0.2, 0 ]
mnjs.range(10, 1, 2)   //  [ 10, 8, 6, 4, 2 ]
mnjs.range(-20, 1, 0)  //  Error: MNJS ERROR No. 02 : 05: The step parameter should not be equal zero

mnjs.monolist(1, 5)    //  [ 1, 1, 1, 1, 1 ]
mnjs.monolist(0.5, 3)  //  [ 0.5, 0.5, 0.5 ]
mnjs.monolist(0, 5)    //  [ 0, 0, 0, 0, 0 ]
mnjs.monolist(-0.5, 3) //  [ -0.5, -0.5, -0.5 ]
mnjs.monolist(-1, 5)   //  [ -1, -1, -1, -1, -1 ]
mnjs.monolist(5, 1.1)  //  RangeError: Invalid array length

// Most of the MNJS functions return a number or an array of numbers

const myArray  = mnjs.range(0, 90, 30)
const errArray = [ 0, 30, '60', 90 ]

myArray                   //  [ 0, 30, 60, 90 ]
errArray                  //  [ 0, 30, '60', 90 ]

mnjs.cube(myArray)        // [ 0, 27000, 216000, 729000 ]

mnjs.sin.deg(myArray[1])  // 0.5
mnjs.sin.deg(myArray)     // [ 0, 0.5, 0.866025403784439, 1 ]

mnjs.abs(errArray)        // Error: MNJS ERROR No. 01: This function accepting either a number or an array.
                          // In the case of an array, all of its elements must be numbers.
mnjs.dtr(myArray)         // [ 0, 0.523598775598299, 1.047197551196598, 1.570796326794897 ]

// Note the result may change in some functions depending on the position of the arguments

mnjs.add(2, 2)            //  4
mnjs.add([0, 2], [4, 8])  //  [ 4, 10 ]
mnjs.add([4, 8], [0, 2])  //  [ 4, 10 ]
mnjs.add(2, [1, 2])       //  [ 3, 4 ]
mnjs.add([1, 2], 2)       //  [ 3, 4 ]
mnjs.subt(2, [1, 2])      //  [ 1, 0 ]
mnjs.subt([1, 2], 2)      //  [ -1, 0 ]
mnjs.subt([0, 2], [4, 8]) //  [ -4, -6 ]
mnjs.subt([4, 8], [0, 2]) //  [ 4, 6 ]
mnjs.mult(2, [1, 2])      //  [ 2, 4 ]
mnjs.mult([1, 2], 2)      //  [ 2, 4 ]
mnjs.divi(2, [1, 2])      //  [ 2, 1 ]
mnjs.divi([1, 2], 2)      //  [ 0.5, 1 ]
mnjs.divi([0, 2], [4, 8]) //  [ 0, 0.25 ]
mnjs.divi([4, 8], [0, 2]) //  [ Infinity, 4 ]
mnjs.add([2], [1, 2])     // Error: MNJS ERROR No. 01 : 03: This function accepting two arguments of numbers, arrays, or one of them must be a number, and the other must be an array; In the case of arrays, all elements must be a number, the length of arrays must be equal

mnjs.pow(4, [1, 2, 3])    //  [ 4, 16, 64 ]
mnjs.pow([1, 2, 3], 4)    //  [ 1, 16, 81 ]

mnjs.nrt(8, [1, 2, 3])    //  [ 8, 2.82842712474619, 2 ]
mnjs.nrt([1, 2, 3], 8)    //  [ 1, 1.090507732665258, 1.147202690439877 ]
mnjs.nrt([1, 3], [3, 1])  //  [ 1, 3 ]
mnjs.nrt([3, 1], [1, 3])  //  [ 3, 1 ]

mnjs.mult(0.2, [ 5, 10, 15])                   //  [ 1, 2, 3 ]
mnjs.mult(0.2, mnjs.range(5, 15, 5))           //  [ 1, 2, 3 ] 
mnjs.mult([0.2, 0.2, 0.2], [ 5, 10, 15])       //  [ 1, 2, 3 ] 
mnjs.mult(mnjs.monolist(0.2, 3), [5, 10, 15])  //  [ 1, 2, 3 ] 
mnjs.mult(0.2, [ 5, 10, 15])[1] === mnjs.mult(mnjs.monolist(0.2, 3), [5, 10, 15])[1] // true

mnjs.imul(0xffffffff, [1,2,3,4,5])             //  [ -1, -2, -3, -4, -5 ]
mnjs.rib(100000, 999999)                       //  returns random integer between two values, inclusive min and max value

// The change function replace x (number or numeric array element) with z if x = y
// mnjs.change(x=1, y=1, z=0)
mnjs.change(1, 1, 0)      //  returns 0
mnjs.change(1, NaN, 0)    //  returns 1
mnjs.change([1, NaN, 1, NaN], NaN, 0)    //  returns [1, 0, 1, 0]
```





## Demo Projects



___
### Svelte Demo Project [https://svelte-mnjs-chartjs.vercel.app]
___

[![https://raw.githubusercontent.com/dr-montasir/public/main/mnjs/images/svelte-mnjs-chartjs.png](https://raw.githubusercontent.com/dr-montasir/public/main/mnjs/images/svelte-mnjs-chartjs.png)](https://svelte-mnjs-chartjs.vercel.app)





---

### React Demo Project [https://react-mnjs-plotlyjs.vercel.app]

---

[![https://raw.githubusercontent.com/dr-montasir/public/main/mnjs/images/react-mnjs-plotlyjs.png](https://raw.githubusercontent.com/dr-montasir/public/main/mnjs/images/react-mnjs-plotlyjs.png)](https://react-mnjs-plotlyjs.vercel.app)



## MNJS Object Keys

| Key       | Definition                                                   | Value                                                        |
| :-------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| abs       | The absolute value of a number                               | function:  abs(num)                                          |
| add       | Addition                                                     | function:  add(num1, num2)                                   |
| acos      | Inverse cosine (in radians)                                  | function:  acos(num)                                         |
| acos.rad  | Inverse cosine (in radians)                                  | function:  acos.rad(num)                                     |
| acos.deg  | Inverse cosine (in degrees)                                  | function:  acos.deg(num)                                     |
| acosh     | Inverse hyperbolic cosine (in radians)                       | function:  acosh(num)                                        |
| acosh.rad | Inverse hyperbolic cosine (in radians)                       | function:  acosh.rad(num)                                    |
| acosh.deg | Inverse hyperbolic cosine (in degrees)                       | function:  acosh.deg(num)                                    |
| acot      | Inverse cotangent (in radians)                               | function:  acot(num)                                         |
| acot.rad  | Inverse cotangent (in radians)                               | function:  acot.rad(num)                                     |
| acot.deg  | Inverse cotangent (in degrees)                               | function:  acot.deg(num)                                     |
| acoth     | Inverse hyperbolic cotangent (in radians)                    | function:  acoth(num)                                        |
| acoth.rad | Inverse hyperbolic cotangent (in radians)                    | function:  acoth.rad(num)                                    |
| acoth.deg | Inverse hyperbolic cotangent (in degrees)                    | function:  acoth.deg(num)                                    |
| acsc      | Inverse cosecant (in radians)                                | function:  acsc(num)                                         |
| acsc.rad  | Inverse cosecant (in radians)                                | function:  acsc.rad(num)                                     |
| acsc.deg  | Inverse cosecant (in degrees)                                | function:  acsc.deg(num)                                     |
| acsch     | Inverse hyperbolic cosecant (in radians)                     | function:  acsch(num)                                        |
| acsch.rad | Inverse hyperbolic cosecant (in radians)                     | function:  acsch.rad(num)                                    |
| acsch.deg | Inverse hyperbolic cosecant (in degrees)                     | function:  acsch.deg(num)                                    |
| asec      | Inverse secant (in radians)                                  | function:  asec(num)                                         |
| asec.rad  | Inverse secant (in radians)                                  | function:  asec.rad(num)                                     |
| asec.deg  | Inverse secant (in degrees)                                  | function:  asec.deg(num)                                     |
| asech     | Inverse hyperbolic secant (in radians)                       | function:  asech(num)                                        |
| asech.rad | Inverse hyperbolic secant (in radians)                       | function:  asech.rad(num)                                    |
| asech.deg | Inverse hyperbolic secant (in degrees)                       | function:  asech.deg(num)                                    |
| asin      | Inverse sine (in radians)                                    | function:  asin(num)                                         |
| asin.rad  | Inverse sine (in radians)                                    | function:  asin.rad(num)                                     |
| asin.deg  | Inverse sine (in degrees)                                    | function:  asin.deg(num)                                     |
| asinh     | Inverse hyperbolic sine (in radians)                         | function:  asinh(num)                                        |
| asinh.rad | Inverse hyperbolic sine (in radians)                         | function:  asinh.rad(num)                                    |
| asinh.deg | Inverse hyperbolic sine (in degrees)                         | function:  asinh.deg(num)                                    |
| atan      | Inverse tangen (in radians)                                  | function:  atan(num)                                         |
| atan.rad  | Inverse tangen (in radians)                                  | function:  atan.rad(num)                                     |
| atan.deg  | Inverse tangen (in degrees)                                  | function:  atan.deg(num)                                     |
| atanh     | Inverse hyperbolic tangen (in radians)                       | function:  atanh(num)                                        |
| atanh.rad | Inverse hyperbolic tangen (in radians)                       | function:  atanh.rad(num)                                    |
| atanh.deg | Inverse hyperbolic tangen (in degrees)                       | function:  atanh.deg(num)                                    |
| ceil      | The ceil function returns the smallest integer greater than or equal to a number | function: ceil(num)                                          |
| change    | The change function replace x (number or numeric array element) with z if x = y | function: change(x, y, z)                                    |
| cos       | Cosine (in radians)                                          | function:  cos(angleRadians)                                 |
| cos.rad   | Cosine (in radians)                                          | function:  cos.rad(angleRadians)                             |
| cos.deg   | Cosine (in degrees)                                          | function:  cos.deg(angleDegrees)                             |
| cosh      | Hyperbolic cosine (in radians)                               | function:  cosh(angleRadians)                                |
| cosh.rad  | Hyperbolic cosine (in radians)                               | function:  cosh.rad(angleRadians)                            |
| cosh.deg  | Hyperbolic cosine (in degrees)                               | function:  cosh.deg(angleDegrees)                            |
| csc       | cosecant (or cosec)                                          | function:  csc(angleRadians)                                 |
| csc.rad   | cosecant (or cosec)                                          | function:  csc.rad(angleRadians)                             |
| csc.deg   | Cosecant (in degrees)                                        | function: csc.deg(angleDegrees)                              |
| csch      | Hyperbolic cosecant (or cosec)                               | function:  csch(angleRadians)                                |
| csch.rad  | Hyperbolic cosecant (or cosec)                               | function:  csch.rad(angleRadians)                            |
| csch.deg  | Hyperbolic cosecant (in degrees)                             | function: csch.deg(angleDegrees)                             |
| cube      | Cube (n)^3                                                   | function:  cube(num)                                         |
| cbrt      | Cube Root                                                    | function:  cbrt(num)                                         |
| cot       | Cotangent (or cotan or cotg or ctg or ctn). (in radians)     | function:  cot(angleRadians)                                 |
| cot.rad   | Cotangent (or cotan or cotg or ctg or ctn). (in radians)     | function:  cot.rad(angleRadians)                             |
| cot.deg   | Cotangent (in degrees)                                       | function:  cot.deg(angleDegrees)                             |
| coth      | Hyperbolic cotangent (or cotan or cotg or ctg or ctn). (in radians) | function:  coth(angleRadians)                                |
| coth.rad  | Hyperbolic cotangent (or cotan or cotg or ctg or ctn). (in radians) | function:  coth.rad(angleRadians)                            |
| coth.deg  | Hyperbolic cotangent (in degrees)                            | function:  coth.deg(angleDegrees)                            |
| dtr       | Degrees to Radians conversion                                | function: dtr(angleDegrees).  Result in radians              |
| divi      | Division                                                     | function:  divi(numerator, denominator)                      |
| e         | The Number e (Euler's number)                                | number: 2.718281828459045                                    |
| exp       | The power of e (Euler's number)                              | function: exp(power)                                         |
| expm1     | The expm1 function returns e^x - 1, where x is the argument, and e the base of the natural logarithms | function: expm1(power)                                       |
| fix       | Fix to the certain decimal point                             | function: fix(num, point)                                    |
| floor     | The floor function returns the largest integer less than or equal to a given number | function: floor(num)                                         |
| fround    | The fround function returns the nearest 32-bit single precision float representation of a Number | function: fround(num)                                        |
| hypot     | The square root of the sum of squares                        | function: hypot(num1, num2, ..., num) or function: hypot([num1, num2, ..., num]) |
| imul      | The imul function returns the result of the C-like 32-bit multiplication of the two parameters | function:  imul(num1, num2)                                  |
| inv       | The inverse of a number                                      | function: inv(num)                                           |
| ln2       | The natural logarithm of 2                                   | number: 0.693147180559945                                    |
| ln10      | The natural logarithm of 10                                  | number: 2.302585092994046                                    |
| log       | The Natural logarithm (base e) of a number                   | function: log(x) is equivalent to *ln(x)* in mathematics     |
| log1p     | The natural logarithm (base e) of 1 + a number               | function: log1p(x)                                           |
| log2      | The base 2 logarithm of a number                             | function: log2(x)                                            |
| log10     | The base 10 logarithm of a number                            | function: log10(x)                                           |
| log2e     | The base 2 logarithm of E                                    | number: 1.4426950408889634                                   |
| log10e    | The base 10 logarithm of E                                   | number: 0.434294481903252                                    |
| max       | Max function returns the largest-valued number               | function: max(num1, num2, ..., num) or max(array of numbers) |
| min       | Min function returns the lowest-valued number                | function: min(num1, num2, ..., num) or min(array of numbers) |
| monolist  | The monolist function returns an array of numbers of *equal values*, specifying the element's *value* and the *size* of the array. | function: monolist(value, size). It returns an array         |
| mult      | Multiplication                                               | function:  mult(num1, num2)                                  |
| nrt       | N Root                                                       | function:  nrt(num, root), when root=n={1,2,..}              |
| nts       | Number to String conversion                                  | function: nts(num). Result as string                         |
| pi        | The Number pi (π)                                            | number:  3.141592653589793                                   |
| phi       | The Golden Ratio (Phi)                                       | number:  1.618033988749895                                   |
| pow       | power                                                        | function:  pow(num, power)                                   |
| range     | The range function returns a sequence of numbers, starting from *start* value by default, and increments or decrements by *step* value, and stops before or in specified *end* value. | function: range(start, end, step). It returns an array       |
| rem       | The remainder function (%) returns the remainder or signed remainder of a division, after one number is divided by another (called the modulus of the operation) | function:  rem(num1, num2)                                   |
| rib       | The rib function returns a random integer between two values, inclusive min and max value | function:  rib(min, max)                                     |
| round     | The round function returns the value of a number rounded to the nearest integer | function: round(num)                                         |
| rtd       | Radians to Degrees conversion                                | function: rtd(angleRadians).  Result in degrees              |
| sec       | Secant (in radians)                                          | function:  sec(angleRadians)                                 |
| sec.rad   | Secant (in radians)                                          | function:  sec.rad(angleRadians)                             |
| sec.deg   | Secant (in degrees)                                          | function:  sec.deg(angleDegrees)                             |
| sech      | Hyperbolic secant (in radians)                               | function:  sech(angleRadians)                                |
| sech.rad  | Hyperbolic secant (in radians)                               | function:  sech.rad(angleRadians)                            |
| sech.deg  | Hyperbolic secant (in degrees)                               | function:  sech.deg(angleDegrees)                            |
| sign      | The sign function (+, -)                                     | function: sign(num). It returns  -1, -0, 0, 1                |
| sin       | Sine (in radians)                                            | function:  sin(angleRadians)                                 |
| sin.rad   | Sine (in radians)                                            | function:  sin.rad(angleRadians)                             |
| sin.deg   | Sine (in degrees)                                            | function:  sin.deg(angleDegrees)                             |
| sinh      | Hyperbolic sine (in radians)                                 | function:  sinh(angleRadians)                                |
| sinh.rad  | Hyperbolic sine (in radians)                                 | function:  sinh.rad(angleRadians)                            |
| sinh.deg  | Hyperbolic sine (in degrees)                                 | function:  sinh.deg(angleDegrees)                            |
| sqr       | Square                                                       | function:  sqr(num)                                          |
| sqrt      | Square Root                                                  | function:  sqrt(num)                                         |
| stn       | String to Number conversion                                  | function: stn(str). Result as number                         |
| subt      | Subtraction                                                  | function:  subt(num1, num2)                                  |
| sum       | The Sum Function, Also Called The Reducer Function. The final result of running the sum function across all elements of the array is a single value. The first argument should be one (numeric or empty) array and the second should be a number. | function: sum(Array, number) or sum(Array), number=0         |
| tan       | Tangent (in radians)                                         | function:  tan(angleRadians)                                 |
| tan.rad   | Tangent (in radians)                                         | function:  tan.rad(angleRadians)                             |
| tan.deg   | Tangen (in degrees)                                          | function:  tan.deg(angleDegrees)                             |
| tanh      | Hyperbolic tangent (in radians)                              | function:  tanh(angleRadians)                                |
| tanh.rad  | Hyperbolic tangent (in radians)                              | function:  tanh.rad(angleRadians)                            |
| tanh.deg  | Hyperbolic tangent (in degrees)                              | function:  tanh.deg(angleDegrees)                            |
| tau       | The tau constant (2 x pi)                                    | number:  6.283185307179586                                   |
| trunc     | Returns the integer part of a number                         | function:  trunc(num)                                        |
| zeros     | Add .00 to number                                            | function: zeros(num, point). Result as string                |



