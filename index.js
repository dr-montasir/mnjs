/*********************************************/
/*  Author : Montasir Mirghani               */
/*  Email  : contact@montasir.me             */
/*  GitHub : https://github.com/dr-montasir  */
/*********************************************/

// Mathematical constants

// The Number e (Euler's number) Function
const e = () => {
  return 2.71828;
};

// The Number Pi Function
const pi = () => {
  return 3.14159265358979;
};

// Mathematical units convert

// Radians to Degrees conversion
const deg = (angleRadians) => {
  return (angleRadians * 180 / pi());
};

// Degrees to Radians conversion
const rad = (angleDegrees) => {
  return (angleDegrees * pi() / 180);
};

// Mathematical functions

// The abs Function |-num| = num
const abs = (num) => {
  return Math.abs(num);
};

// Addition Function
const add = (num1, num2) => {
  return num1 + num2;
};

// The cos function (angle radians)
const cos = (angleRadians) => {
  return Math.cos(angleRadians);
};

// The cosDeg function (angle degrees)
const cosDeg = (angleDegrees) => {
   return Number((Math.cos(rad(angleDegrees))).toFixed(5));
};

// The cosRad function (angle radians)
const cosRad = (angleRadians) => {
   return cos(angleRadians);
};

// The sec function (angle radians)
const sec = (angleRadians) => {
  return 1 / cos(angleRadians);
};

// The cscDeg function (angle degrees)
const secDeg = (angleDegrees) => {
   return 1 / cosDeg(angleDegrees);
};

// The sinRad function (angle radians)
const secRad = (angleRadians) => {
  return 1 / cos(angleRadians);
};

// Cube Function
const cube = (num) => {
  return num * num * num;
};

// Cube Root Function
const cbrt = (num) => {
  return Math.cbrt(num);
};

// Division Function
const divi = (numerator, denominator) => {
  return numerator / denominator;
};

// Multiplication Function
const mult = (num1, num2) => {
  return num1 * num2;
};

// The Power Function
const pow = (num1, num2) => {
  return Math.pow(num1, num2);
};

// The sin function (angle radians)
const sin = (angleRadians) => {
  return Math.sin(angleRadians);
};

// The sinDeg function (angle degrees)
const sinDeg = (angleDegrees) => {
   return Number((Math.sin(rad(angleDegrees))).toFixed(5));
};

// The sinRad function (angle radians)
const sinRad = (angleRadians) => {
  return sin(angleRadians);
};

// The csc function (angle radians)
const csc = (angleRadians) => {
  return 1 / sin(angleRadians);
};

// The cscDeg function (angle degrees)
const cscDeg = (angleDegrees) => {
   return 1 / sinDeg(angleDegrees);
};

// The sinRad function (angle radians)
const cscRad = (angleRadians) => {
  return 1 / sin(angleRadians);
};

// Square Function
const sqr = (num) => {
  return num * num;
};

// Square Root Function
const sqrt = (num) => {
  return Math.sqrt(num);
};

// Subtraction Function
const subt = (num1, num2) => {
  return num1 - num2;
};

// The tan function (angle radians)
const tan = (angleRadians) => {
  return sin(angleRadians) / cos(angleRadians);
};

// The tanDeg function (angle degrees)
const tanDeg = (angleDegrees) => {
  return sinDeg(angleDegrees) / cosDeg(angleDegrees);
};

// The tanRad function (angle radians)
const tanRad = (angleRadians) => {
  return tan(angleRadians);
};

// The cot function (angle radians)
const cot = (angleRadians) => {
  return 1 / tan(angleRadians);
};

// The cotDeg function (angle degrees)
const cotDeg = (angleDegrees) => {
   return 1 / tanDeg(angleDegrees);
};

// The cotRad function (angle radians)
const cotRad = (angleRadians) => {
  return 1 / tan(angleRadians);
};

// mnjs main function
const mnjsFn = () => {
  const mnjs = {};

  // Mathematical constants
  mnjs.e         = e();    // The Number e (Euler's number)
  mnjs.pi        = pi();   // The Number Pi

  // Mathematical functions
  mnjs.abs       = abs;
  mnjs.add       = add;
  mnjs.cos       = cos;
  mnjs.cos.deg   = cosDeg;
  mnjs.cos.rad   = cosRad;
  mnjs.sec       = sec;
  mnjs.sec.deg   = secDeg;
  mnjs.sec.rad   = secRad;
  mnjs.cube      = cube;
  mnjs.cbrt      = cbrt;
  mnjs.deg       = deg;
  mnjs.divi      = divi;
  mnjs.mult      = mult;
  mnjs.pow       = pow;
  mnjs.rad       = rad;
  mnjs.sin       = sin;
  mnjs.sin.deg   = sinDeg;
  mnjs.sin.rad   = sinRad;
  mnjs.csc       = csc;
  mnjs.csc.deg   = cscDeg;
  mnjs.csc.rad   = cscRad;
  mnjs.sqr       = sqr;
  mnjs.sqrt      = sqrt;
  mnjs.subt      = subt;
  mnjs.tan       = tan;
  mnjs.tan.deg   = tanDeg;
  mnjs.tan.rad   = tanRad;
  mnjs.cot       = cot;
  mnjs.cot.deg   = cotDeg;
  mnjs.cot.rad   = cotRad;

  return mnjs;
};

const mnjs = mnjsFn();

module.exports.mnjs = mnjs;
