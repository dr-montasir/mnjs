/*********************************************/
/*  Author : Montasir Mirghani               */
/*  Email  : contact@montasir.me             */
/*  GitHub : https://github.com/dr-montasir  */                    //
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

// Mathematical functions

// Addition Function
const add = (num1, num2) => {
  return num1 + num2;
};

// The cos function (angle degrees)
const cos = (angleDegrees) => {
  return Number((Math.cos(angleDegrees * pi() / 180)).toFixed(5));
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

// The sin function (angle degrees)
const sin = (angleDegrees) => {
  return Number((Math.sin(angleDegrees * pi() / 180)).toFixed(5));
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

// The tan function (angle degrees)
const tan = (angleDegrees) => {
  return sin(angleDegrees) / cos(angleDegrees);
};

// mnjs main function
const mnjsFn = () => {
  const mnjs = {};

  // Mathematical constants
  mnjs.e     = e();    // The Number e (Euler's number)
  mnjs.pi    = pi();   // The Number Pi

  // Mathematical functions
  mnjs.add   = add;
  mnjs.cos   = cos;
  mnjs.cube  = cube;
  mnjs.cbrt  = cbrt;
  mnjs.divi  = divi;
  mnjs.mult  = mult;
  mnjs.pow   = pow;
  mnjs.sin   = sin;
  mnjs.sqr   = sqr;
  mnjs.sqrt  = sqrt;
  mnjs.subt  = subt;
  mnjs.tan   = tan;

  return mnjs;
};

const mnjs = mnjsFn();

module.exports.mnjs = mnjs;
