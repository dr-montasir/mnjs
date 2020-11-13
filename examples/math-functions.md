Back to [README](https://github.com/dr-montasir/mnjs/blob/master/README.md).

### Examples

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

mnjs.max(1, 10, 3, -2)	//	10

mnjs.min(5, 1, -3.2, 0.5, 3)	// -3.2

mnjs.pow(2, 4);  // 16

mnjs.pow(2, -2.5);  // 0.17677669529663687

mnjs.cbrt(8);  // 2

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

1 / mnjs.sin.deg(30);  // 2
console.log(mnjs.csc.deg(30));  // 2

(1 / mnjs.cos.deg(60)) === (mnjs.sec.deg(60)) // true
console.log(mnjs.sec.deg(60))  // 2

(1 / mnjs.tan.deg(45)) === (mnjs.cot.deg(45)) // true
mnjs.cot.deg(45);  // 1

mnjs.cot.deg(0);  // Infinity

mnjs.acsc(mnjs.csc(0.67))  // 0.67

mnjs.asec.rad(1) === mnjs.asec(1)  // true
```

Back to [README](https://github.com/dr-montasir/mnjs/blob/master/README.md).