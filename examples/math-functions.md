Back to [README](https://github.com/dr-montasir/mnjs/blob/master/README.md).

### Examples

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

mnjs.ln2  // 0.693147180559945
mnjs.ln10  // 2.302585092994046

mnjs.log2e  // 1.4426950408889634
mnjs.log10e  // 0.434294481903252

mnjs.log1p(5)  // 1.791759469228055

mnjs.log(mnjs.e)  // 1

mnjs.hypot(4)  // 4
mnjs.hypot(3, 4)  // 5
mnjs.hypot(4, 2, 4)  // 6
mnjs.hypot(-3, -4)  // 5
mnjs.hypot(-4)  // 4
mnjs.sqrt(mnjs.add(mnjs.sqr(6), mnjs.sqr(8))) === mnjs.hypot(6, 8) // true

mnjs.fix(2.718281828459045, 2)  // 2.72

mnjs.inv(10)  // 0.1

mnjs.max(1, 10, 3, -2)	//	10

mnjs.min(5, 1, -3.2, 0.5, 3)	// -3.2

mnjs.pow(2, 4)  // 16

mnjs.pow(2, -2.5)  // 0.176776695296637

mnjs.cbrt(8)  // 2

mnjs.nrt(0.0001, 4)  // 0.1
mnjs.nrt(Infinity, Infinity)  // 1
mnjs.nrt(Infinity, Infinity) === mnjs.pow(Infinity, 1 /Infinity)  // true

mnjs.tau  // 6.283185307179586

mnjs.sin(1)  // 0.8414709848
mnjs.sin.rad(1)  // 0.8414709848
mnjs.sin(1) === mnjs.sin.rad(1)  // true

mnjs.sin.deg(30)  // 0.5
mnjs.sin.deg(30) === mnjs.sin(mnjs.dtr(30))  // true

mnjs.cos.deg(60)  // 0.5

mnjs.cos(0)  // 1
mnjs.cos.rad(0)  // 1
mnjs.cos(1) === mnjs.cos.rad(1)  // true

mnjs.tan.deg(45)  // 1

mnjs.tan(0.5)  // 0.5463024898
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
```

Back to [README](https://github.com/dr-montasir/mnjs/blob/master/README.md).