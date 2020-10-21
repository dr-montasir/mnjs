Back to [README](https://github.com/dr-montasir/mnjs/blob/master/README.md).

### Examples

```js
const { mnjs } = require(`mnjs`);

console.log(mnjs.abs(-3.6));  // 3.6

console.log(mnjs.subt(2, 5));  // -3

console.log(mnjs.sqr(2) + mnjs.sqrt(4));  // 6

console.log(mnjs.sqr(4) + mnjs.sqrt(4) / mnjs.pi);  // 16.63661977236754

console.log(mnjs.e);  // 2.71828

console.log(mnjs.pow(2, 4));  // 16

console.log(mnjs.pow(2, -2.5));  // 0.17677669529663687

console.log(mnjs.cbrt(8));  // 2

console.log(mnjs.sin(1));  // 0.8414709848078965
console.log(mnjs.sin.rad(1));  // 0.8414709848078965
mnjs.sin(1) === mnjs.sin.rad(1)  // true

console.log(mnjs.sin.deg(30));  // 0.5
mnjs.sin.deg(30) === Number(mnjs.sin(rad(30)).toFixed(5))  // true

console.log(mnjs.cos.deg(60));  // 0.5

console.log(mnjs.cos(0));  // 1
console.log(mnjs.cos.rad(0));  // 1
mnjs.cos(1) === mnjs.cos.rad(1)  // true

console.log(mnjs.tan.deg(45));  // 1

console.log(mnjs.tan(0.5));  // 0.5463024898437905
mnjs.tan(0.5) === mnjs.tan.rad(0.5)  // true

console.log(mnjs.tan.deg(90));  // Infinity

console.log(1 / mnjs.sin.deg(30));  // 2
console.log(mnjs.csc.deg(30));  // 2

(1 / mnjs.cos.deg(60)) === (mnjs.sec.deg(60)) // true
console.log(mnjs.sec.deg(60))  // 2

(1 / mnjs.tan.deg(45)) === (mnjs.cot.deg(45)) // true
console.log(mnjs.cot.deg(45));  // 1

console.log(mnjs.cot.deg(0));  // Infinity

console.log(mnjs.acsc(mnjs.csc(0.67)))  // 0.67

mnjs.asec.rad(1) === mnjs.asec(1)  // true
```

Back to [README](https://github.com/dr-montasir/mnjs/blob/master/README.md).