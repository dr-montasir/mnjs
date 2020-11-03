### What is this?

MNJS: MATH NODE JS PACKAGE



### Installation

`npm i mnjs --save`



### Example

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

mnjs.pow(2, 4);  // 16

mnjs.pow(2, -2.5);  // 0.17677669529663687

mnjs.cbrt(8);  // 2

mnjs.sin(1);  // 0.8414709848078965
mnjs.sin.rad(1);  // 0.8414709848078965
mnjs.sin(1) === mnjs.sin.rad(1)  // true

mnjs.sin.deg(30);  // 0.5
mnjs.sin.deg(30) === Number(mnjs.sin(rad(30)).toFixed(5))  // true

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



### MNJS Object Keys

| Key     | Name                                       | Value                                                    |
| ------- | ------------------------------------------ | :------------------------------------------------------- |
| abs     | The absolute value of a number             | function:  abs(num)                                      |
| add     | Addition                                   | function:  add(num1, num2)                               |
| cos     | Cosine (in radians)                        | function:  cos(angleRadians)                             |
| cos.deg | Cosine (in degrees)                        | function:  cos.deg(angleDegrees)                         |
| cos.rad | Cosine (in radians)                        | function:  cos.rad(angleRadians)                         |
| csc     | Cosecant (or cosec)                        | function:  csc(angleRadians)                             |
| csc.deg | Cosecant (in degrees)                      | function: csc.deg(angleDegrees)                          |
| csc.rad | Cosecant (in radians)                      | function:  csc.rad(angleRadians)                         |
| cube    | Cube (n)^3                                 | function:  cube(num)                                     |
| cbrt    | Cube Root                                  | function:  cbrt(num)                                     |
| deg     | Radians to Degrees conversion              | function: deg(angleRadians).  Result in degrees          |
| divi    | Division                                   | function:  divi(numerator, denominator)                  |
| e       | The Number e (Euler's number)              | number:  2.71828                                         |
| log     | The Natural logarithm (base e) of a number | function: log(x) is equivalent to *ln(x)* in mathematics |
| mult    | Multiplication                             | function:  mult(num1, num2)                              |
| pi      | The Number pi (π)                          | number:  3.14159265358979                                |
| pow     | power                                      | function:  power(num1, num2)                             |
| rad     | Degrees to Radians conversion              | function: rad(angleDegrees).  Result in radians          |
| sin     | Sine (in radians)                          | function:  sin(angleRadians)                             |
| sin.deg | Sine (in degrees)                          | function:  sin.deg(angleDegrees)                         |
| sin.rad | Sine (in radians)                          | function:  sin.rad(angleRadians)                         |
| sqr     | Square                                     | function:  sqr(num)                                      |
| sqrt    | Square Root                                | function:  sqrt(num)                                     |
| subt    | Subtraction                                | function:  subt(num1, num2)                              |
| tan     | Tangent (in radians)                       | function:  tan(angleRadians)                             |
| tan.deg | Tangen (in degrees)                        | function:  tan.deg(angleDegrees)                         |
| tan.rad | Tangen (in radians)                        | function:  tan.rad(angleRadians)                         |

##### For all objects keys, click at this 👉 [link.](https://github.com/dr-montasir/mnjs/blob/master/object-keys/obj-keys.md)