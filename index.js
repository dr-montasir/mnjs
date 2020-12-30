/*********************************************/
/*  Author : Montasir Mirghani               */
/*  Email  : contact@montasir.me             */
/*  GitHub : https://github.com/dr-montasir  */
/*********************************************/

// Mathematical constants

// Angle (in degrees) of a straight line.
const DEG_180 = 180;

// 15 digits after the decimal place.
const DIG_15 = 15;

// 10 digits after the decimal place.
const DIG_10 = 10;

// 8 digits after the decimal place.
const DIG_8 = 8;

// The number 2.
const NUM_2 = 2;

// The number 1.
const NUM_1 = 1;

// The Number e (Euler's number). Math.E  
const E = 2.718281828459045;

// The natural logarithm of 2
const LN2 = Number(Math.LN2.toFixed(DIG_15));

// The natural logarithm of 10
const LN10 = Number(Math.LN10.toFixed(DIG_15));

// The base 2 logarithm of E
const LOG2E = Number(Math.LOG2E.toFixed(DIG_15));

// The base 10 logarithm of E
const LOG10E = Number(Math.LOG10E.toFixed(DIG_15));

// The Number Pi. Math.PI
const PI = 3.141592653589793;

// The Golden Ratio (Phi) 1.618033988749895
const PHI = Number(((1 + Math.sqrt(5)) / 2).toFixed(DIG_15));

//  The tau constant. The circle constant representing the ratio between circumference and radius
const TAU = Number((2 * PI).toFixed(DIG_15));

// Throw errors

const ERRORS = {
  MNJS_1: {
    NO: "01",
    TEXT: `This function accepting either a number or an array. In the case of an array, all of its elements must be numbers.`
  },
  MNJS_2_1: {
    NO: "02 : 01",
    TEXT: `All parameters must be a number`
  },
  MNJS_2_2: {
    NO: "02 : 02",
    TEXT: `The step parameter must be a number`
  },
  MNJS_2_3: {
    NO: "02 : 03",
    TEXT: `The first and the second parameter should not be equal`
  },
  MNJS_2_4: {
    NO: "02 : 04",
    TEXT: `The step parameter should not be greater than the difference between the first and second parameter`
  },
  MNJS_2_5: {
    NO: "02 : 05",
    TEXT: `The step parameter should not be equal zero`
  },
  MNJS_2_6: {
    NO: "02 : 06",
    TEXT: `The sign of the step parameter must be positive`
  },
  MNJS_3_1: {
    NO: "03 : 01",
    TEXT: `The monolist function should take two parameters (value: number, size: natural number & greater than zero).`
  },
  MNJS_3_2: {
    NO: "03 : 02",
    TEXT: `All parameters must be a number (value: number, size: natural number & greater than zero).`
  }
};

// Matrices

// The Range Function
const range = (start, end, step) => {
  let array = [];
  if (typeof start !== "number" || typeof end !== "number") {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_1.NO}: ${ERRORS.MNJS_2_1.TEXT}`);
  };
  if (typeof step === "string" || typeof step === "boolean") {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_2.NO}: ${ERRORS.MNJS_2_2.TEXT}`);
  };
  if (start === end) {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_3.NO}: ${ERRORS.MNJS_2_3.TEXT}`);
  };
  if (step >  Math.abs(start - end)) {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_4.NO}: ${ERRORS.MNJS_2_4.TEXT}`);
  };
  if (step === 0) {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_5.NO}: ${ERRORS.MNJS_2_5.TEXT}`);
  };
  if (Math.sign(step) === -1) {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_6.NO}: ${ERRORS.MNJS_2_6.TEXT}`);
  };
  if (!step) {
    step = 1;
  };
  if (start > end) {
    for(let i = start; i >= end; i = i - step){
     array.push(Number(i.toFixed(DIG_10)));
    }
    return array;
  };
  if (start > end) {
    for(let i = start; i >= end; i = i - step){
     array.push(Number(i.toFixed(DIG_10)));
    }
    return array;
  };
  if (start < end) {
    for(let i = start; i <= end; i = i + step){
     array.push(Number(i.toFixed(DIG_10)));
    }
    return array;
  };
};

// The MonoList Function
const monolist = (value, size) => {
  if (!value && !size || value && size === 0) {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_3_1.NO}: ${ERRORS.MNJS_3_1.TEXT}`);
  } else if (typeof value !== "number" || typeof size !== "number") {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_3_2.NO}: ${ERRORS.MNJS_3_2.TEXT}`);
  } else {
    return Array(size).fill(value);
  };
};

// Mathematical units convert

// The dtr Function (x = angle in degrees). Degrees to Radians conversion. Result in radians
const dtr = (x) => {
  return Number((x * PI / DEG_180).toFixed(DIG_10));
};

// The rtd Function (x = angle in radians). Radians to Degrees conversion. Result in degrees
const rtd = (x) => {
  return Number((x * DEG_180 / PI).toFixed(DIG_8));
};

// Number to String. Result as string
const nts = (num) => {
	return String(num);
};

// String to Number. Result as number
const stn = (str) => {
	return Number(str);
};

// Mathematical functions

// The abs Function |-x| = x

const abs = (x) => {
  if (typeof x === "number") {
    return Math.abs(x);
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Math.abs(x));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// Addition Function
const add = (num1, num2) => {
  return Number((num1 + num2).toFixed(DIG_15));
};

// Cube Function
const cube = (x) => {
  if (typeof x === "number") {
    return Number((x * x * x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((x * x * x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// Cube Root Function
const cbrt = (x) => {
  if (typeof x === "number") {
    return Number(Math.cbrt(x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.cbrt(x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// Division Function
const divi = (numerator, denominator) => {
  return Number((numerator / denominator).toFixed(DIG_15));
};

// Fix to the certain decimal point.
const fix = (value, point) => {
  return Number(value.toFixed(point));
};

// The Hypot Function
const hypot = (...values) => {
  return Number(Math.hypot(...values).toFixed(DIG_15));
};

// The Inverse Function
const inv = (x) => {
  if (typeof x === "number") {
    return Number((1 / x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((1 / x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The Natural logarithm (base e) of a number. (ln) in Math.
const log = (x) => {
  if (typeof x === "number") {
    return Number(Math.log(x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.log(x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The base 2 logarithm of a number
const log2 = (x) => {
  if (typeof x === "number") {
    return Number(Math.log2(x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.log2(x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The base 10 logarithm of a number
const log10 = (x) => {
  if (typeof x === "number") {
    return Number(Math.log10(x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.log10(x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The natural logarithm (base e) of 1 + a number
const log1p = (x) => {
  if (typeof x === "number") {
    return Number(Math.log1p(x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.log1p(x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The max function returns the largest of the zero or more numbers
const max = (...values) => {
  return Math.max(...values);
};

// The min function returns the lowest-valued number
const min = (...values) => {
  return Math.min(...values);
};

// Multiplication Function
const mult = (num1, num2) => {
  return Number((num1 * num2).toFixed(DIG_15));
};

// N Root Function. root = (1, 2, ..., n)
const nrt = (num, root) => {
  return Number(Math.pow(num, NUM_1/root).toFixed(DIG_15));
};

// The Power Function
const pow = (num, power) => {
  return Number(Math.pow(num, power).toFixed(DIG_15));
};

// Square Function
const sqr = (x) => {
  if (typeof x === "number") {
    return Number((x * x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((x * x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// Square Root Function
const sqrt = (x) => {
  if (typeof x === "number") {
    return Number(Math.sqrt(x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.sqrt(x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// Subtraction Function
const subt = (num1, num2) => {
  return Number((num1 - num2).toFixed(DIG_15));
};

// Calculate exponential of a number. The power of e (Euler's number)
const exp = (x) => {
  if (typeof x === "number") {
    return Number(Math.pow(E, x).toFixed(DIG_15));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.pow(E, x).toFixed(DIG_15)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// Trigonometric Functions

// The cos function (x = angle in radians)
const cos = (x) => {
  if (typeof x === "number") {
    return Number(Math.cos(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.cos(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The cosDeg function (x = angle in degrees)
const cosDeg = (x) => {
  if (typeof x === "number") {
    return Number((Math.cos(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((Math.cos(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acos function (x)
const acos = (x) => {
  if (typeof x === "number") {
    return Number(Math.acos(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.acos(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acosDeg function (x)
const acosDeg = (x) => {
  if (typeof x === "number") {
    return Number((rtd(acos(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((rtd(acos(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The cosh function (x = angle in radians)
const cosh = (x) => {
  if (typeof x === "number") {
    return Number(Math.cosh(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.cosh(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The coshDeg function (x = angle in degrees)
const coshDeg = (x) => {
  if (typeof x === "number") {
    return Number((Math.cosh(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((Math.cosh(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acosh function (x)
const acosh = (x) => {
  if (typeof x === "number") {
    return Number(Math.acosh(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.acosh(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acoshDeg function (x)
const acoshDeg = (x) => {
  if (typeof x === "number") {
    return Number((rtd(acosh(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((rtd(acosh(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The sin function (x = angle in radians)
const sin = (x) => {
  if (typeof x === "number") {
    return Number(Math.sin(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.sin(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The sinDeg function (x = angle in degrees)
const sinDeg = (x) => {
  if (typeof x === "number") {
    return Number((Math.sin(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((Math.sin(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The asin function (x)
const asin = (x) => {
  if (typeof x === "number") {
    return Number(Math.asin(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.asin(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The asinDeg function (x)
const asinDeg = (x) => {
  if (typeof x === "number") {
    return Number((rtd(asin(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((rtd(asin(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The sinh function (x = angle in radians)
const sinh = (x) => {
  if (typeof x === "number") {
    return Number(Math.sinh(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.sinh(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The sinhDeg function (x = angle in degrees)
const sinhDeg = (x) => {
  if (typeof x === "number") {
    return Number((Math.sinh(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((Math.sinh(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The asinh function (x)
const asinh = (x) => {
  if (typeof x === "number") {
    return Number(Math.asinh(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.asinh(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The asinhDeg function (x)
const asinhDeg = (x) => {
  if (typeof x === "number") {
    return Number((rtd(asinh(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((rtd(asinh(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The tan function (x = angle in radians)
const tan = (x) => {
  if (typeof x === "number") {
    return Number((sin(x) / cos(x)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((sin(x) / cos(x)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The tanDeg function (x = angle in degrees)
const tanDeg = (x) => {
  if (typeof x === "number") {
    return Number((tan(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((tan(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The atan function (x)
const atan = (x) => {
  if (typeof x === "number") {
    return Number(Math.atan(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.atan(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The atanDeg function (x)
const atanDeg = (x) => {
  if (typeof x === "number") {
    return Number((rtd(atan(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((rtd(atan(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The tanh function (x = angle in radians)
const tanh = (x) => {
  if (typeof x === "number") {
    return Number(Math.tanh(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.tanh(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The tanhDeg function (x = angle in degrees)
const tanhDeg = (x) => {
  if (typeof x === "number") {
    return Number((Math.tanh(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((Math.tanh(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The atanh function (x)
const atanh = (x) => {
  if (typeof x === "number") {
    return Number(Math.atanh(x).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(Math.atanh(x).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The atanhDeg function (x)
const atanhDeg = (x) => {
  if (typeof x === "number") {
    return Number((rtd(Math.atanh(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((rtd(Math.atanh(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The csc function (x = angle in radians)
const csc = (x) => {
  if (typeof x === "number") {
    return Number((NUM_1 / sin(x)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((NUM_1 / sin(x)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The cscDeg function (x = angle in degrees)
const cscDeg = (x) => {
  if (typeof x === "number") {
    return Number((csc(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((csc(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acsc function (x)
const acsc = (x) => {
  if (typeof x === "number") {
    return Number(asin((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(asin((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acscDeg function (x)
const acscDeg = (x) => {
  if (typeof x === "number") {
    return Number(rtd(asin((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(rtd(asin((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The csch function (x = angle in radians)
const csch = (x) => {
  if (typeof x === "number") {
    return Number((NUM_1 / sinh(x)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((NUM_1 / sinh(x)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The cschDeg function (x = angle in degrees)
const cschDeg = (x) => {
  if (typeof x === "number") {
    return Number((csch(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((csch(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acsch function (x)
const acsch = (x) => {
  if (typeof x === "number") {
    return Number(asinh((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(asinh((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acschDeg function (x)
const acschDeg = (x) => {
  if (typeof x === "number") {
    return Number(rtd(asinh((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(rtd(asinh((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The sec function (x = angle in radians)
const sec = (x) => {
  if (typeof x === "number") {
    return Number((NUM_1 / cos(x)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((NUM_1 / cos(x)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The secDeg function (x = angle in degrees)
const secDeg = (x) => {
  if (typeof x === "number") {
    return Number((sec(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((sec(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The asec function (x)
const asec = (x) => {
  if (typeof x === "number") {
    return Number(acos((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(acos((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The asecDeg function (x)
const asecDeg = (x) => {
  if (typeof x === "number") {
    return Number(rtd(acos((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(rtd(acos((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The sech function (x = angle in radians)
const sech = (x) => {
  if (typeof x === "number") {
    return Number((NUM_1 / cosh(x)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((NUM_1 / cosh(x)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The sechDeg function (x = angle in degrees)
const sechDeg = (x) => {
  if (typeof x === "number") {
    return Number((sech(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((sech(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The asech function (x)
const asech = (x) => {
  if (typeof x === "number") {
    return Number(acosh((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(acosh((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The asechDeg function (x)
const asechDeg = (x) => {
  if (typeof x === "number") {
    return Number(rtd(acosh((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(rtd(acosh((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The cot function (x = angle in radians)
const cot = (x) => {
  if (typeof x === "number") {
    return Number((cos(x) / sin(x)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((cos(x) / sin(x)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The cotDeg function (x = angle in degrees)
const cotDeg = (x) => {
  if (typeof x === "number") {
    return Number((cot(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((cot(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acot function (x)
const acot = (x) => {
  if (typeof x === "number") {
    return Number(atan((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(atan((NUM_1 / x).toFixed(DIG_10)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acotDeg function (x)
const acotDeg = (x) => {
  if (typeof x === "number") {
    return Number(rtd(atan((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(rtd(atan((NUM_1 / x).toFixed(DIG_10))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The coth function (x = angle in radians)
const coth = (x) => {
  if (typeof x === "number") {
    return Number((Math.cosh(x) / Math.sinh(x)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((Math.cosh(x) / Math.sinh(x)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The cothDeg function (x = angle in degrees)
const cothDeg = (x) => {
  if (typeof x === "number") {
    return Number((coth(dtr(x))).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number((coth(dtr(x))).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acoth function (x)
const acoth = (x) => {
  if (typeof x === "number") {
    return Number(((log((x + NUM_1) / x) + log(x / (x - NUM_1))) / NUM_2).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(((log((x + NUM_1) / x) + log(x / (x - NUM_1))) / NUM_2).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The acothDeg function (x)
const acothDeg = (x) => {
  if (typeof x === "number") {
    return Number(rtd(acoth(x)).toFixed(DIG_10));
  } else if (typeof x === "object" && x.every(x => typeof x === "number")) {
    return x.map(x => Number(rtd(acoth(x)).toFixed(DIG_10)));
  } else {
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1.NO}: ${ERRORS.MNJS_1.TEXT}`);
  };
};

// The main function of mnjs

// The useMnjs function
const useMnjs = () => {
  const mnjs  = {};

  // Mathematical constants
  mnjs.e					= E;      // The Number e (Euler's number)
  mnjs.ln2				= LN2;    // The natural logarithm of 2
  mnjs.ln10				= LN10;   // The natural logarithm of 10
  mnjs.log2e			= LOG2E;  // The base 2 logarithm of E
  mnjs.log10e			= LOG10E; // The base 10 logarithm of E
  mnjs.pi					= PI;     // The Number Pi
  mnjs.phi				= PHI;    // The Golden Ratio (Phi)
  mnjs.tau				= TAU;    // The tau constant

  // Mathematical units convert
  mnjs.dtr				= dtr;  // Deg to Rad. Result in radians
  mnjs.rtd				= rtd;  // Rad to Deg. Result in degrees
  mnjs.nts				= nts;  // Number to String. Result as string
  mnjs.stn				= stn;  // String to Number. Result as number

  // Matrices
  mnjs.range			= range;
  mnjs.monolist   = monolist;

  // Mathematical functions
  mnjs.abs				= abs;
  mnjs.add				= add;
  mnjs.cube				= cube;
  mnjs.cbrt				= cbrt;
  mnjs.divi				= divi;
  mnjs.exp				= exp;
  mnjs.fix				= fix;
  mnjs.hypot			= hypot;
  mnjs.inv				= inv;
  mnjs.log				= log;
  mnjs.log2				= log2;
  mnjs.log10			= log10;
  mnjs.log1p			= log1p;
  mnjs.max				= max;
  mnjs.min				= min;
  mnjs.mult				= mult;
  mnjs.nrt				= nrt;
  mnjs.pow				= pow;
  mnjs.sqr				= sqr;
  mnjs.sqrt				= sqrt;
  mnjs.subt				= subt;

  // Trigonometric Functions
  mnjs.cos				= cos;
  mnjs.cos.rad		= cos;
  mnjs.cos.deg		= cosDeg;
  mnjs.acos				= acos;
  mnjs.acos.rad		= acos;
  mnjs.acos.deg		= acosDeg;
  mnjs.cosh				= cosh;
  mnjs.cosh.rad		= cosh;
  mnjs.cosh.deg		= coshDeg;
  mnjs.acosh			= acosh;
  mnjs.acosh.rad	= acosh;
  mnjs.acosh.deg	= acoshDeg;

  mnjs.sin				= sin;
  mnjs.sin.rad		= sin;
  mnjs.sin.deg		= sinDeg;
  mnjs.asin				= asin;
  mnjs.asin.rad		= asin;
  mnjs.asin.deg		= asinDeg;
  mnjs.sinh				= sinh;
  mnjs.sinh.rad		= sinh;
  mnjs.sinh.deg		= sinhDeg;
  mnjs.asinh			= asinh;
  mnjs.asinh.rad	= asinh;
  mnjs.asinh.deg	= asinhDeg;

  mnjs.tan				= tan;
  mnjs.tan.rad		= tan;
  mnjs.tan.deg		= tanDeg;
  mnjs.atan				= atan;
  mnjs.atan.rad		= atan;
  mnjs.atan.deg		= atanDeg;
  mnjs.tanh				= tanh;
  mnjs.tanh.rad		= tanh;
  mnjs.tanh.deg		= tanhDeg;
  mnjs.atanh			= atanh;
  mnjs.atanh.rad	= atanh;
  mnjs.atanh.deg	= atanhDeg;

  mnjs.csc				= csc;
  mnjs.csc.rad		= csc;
  mnjs.csc.deg		= cscDeg;
  mnjs.acsc				= acsc;
  mnjs.acsc.rad		= acsc;
  mnjs.acsc.deg		= acscDeg;
  mnjs.csch				= csch;
  mnjs.csch.rad		= csch;
  mnjs.csch.deg		= cschDeg;
  mnjs.acsch			= acsch;
  mnjs.acsch.rad	= acsch;
  mnjs.acsch.deg	= acschDeg;

  mnjs.sec				= sec;
  mnjs.sec.rad		= sec;
  mnjs.sec.deg		= secDeg;
  mnjs.asec				= asec;
  mnjs.asec.rad		= asec;
  mnjs.asec.deg		= asecDeg;
  mnjs.sech				= sech;
  mnjs.sech.rad		= sech;
  mnjs.sech.deg		= sechDeg;
  mnjs.asech			= asech;
  mnjs.asech.rad	= asech;
  mnjs.asech.deg	= asechDeg;

  mnjs.cot				= cot;
  mnjs.cot.rad		= cot;
  mnjs.cot.deg		= cotDeg;
  mnjs.acot				= acot;
  mnjs.acot.rad		= acot;
  mnjs.acot.deg		= acotDeg;
  mnjs.coth				= coth;
  mnjs.coth.rad		= coth;
  mnjs.coth.deg		= cothDeg;
  mnjs.acoth			= acoth;
  mnjs.acoth.rad	= acoth;
  mnjs.acoth.deg	= acothDeg;

  return mnjs;
};

const mnjs = useMnjs();

if (typeof window === `undefined`) {
  module.exports.mnjs = mnjs;
} else {
  window.mnjs = mnjs;
};
