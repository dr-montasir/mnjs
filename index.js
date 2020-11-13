/*********************************************/
/*  Author : Montasir Mirghani               */
/*  Email  : contact@montasir.me             */
/*  GitHub : https://github.com/dr-montasir  */
/*********************************************/

// Mathematical constants

// Angle (in degrees) of a straight line.
const DEG_180 = 180;

// The Number e (Euler's number) Function. Math.E  
const E = () => {
  return 2.718281828459045;
};

// The Number Pi Function. Math.PI
const PI = () => {
  return 3.141592653589793;
};

// Mathematical units convert

// Radians to Degrees conversion. Result in degrees
const rtd = (angleRadians) => {
  return (angleRadians * DEG_180 / PI());
};

// Degrees to Radians conversion. Result in radians
const dtr = (angleDegrees) => {
  return (angleDegrees * PI() / DEG_180);
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

// The Natural logarithm (base e) of a number
const log = (x) => {
  return Math.log(x);
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
  return num1 * num2;
};

// The Power Function
const pow = (num1, num2) => {
  return Math.pow(num1, num2);
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

// Trigonometric Functions

// The cos function (angle radians)
const cos = (angleRadians) => {
  return Math.cos(angleRadians);
};

// The cosDeg function (angle degrees)
const cosDeg = (angleDegrees) => {
  return Number((Math.cos(dtr(angleDegrees))).toFixed(5));
};

// The acos function (num)
const acos = (num) => {
  return Math.acos(num);
}

// The acosDeg function (num)
const acosDeg = (num) => {
  return Number((rtd(acos(num))).toFixed(5));
};

// The cosh function (angleRadians)
const cosh = (angleRadians) => {
  return Math.cosh(angleRadians);
};

// The sec function (angle radians)
const sec = (angleRadians) => {
  return 1 / cos(angleRadians);
};

// The cscDeg function (angle degrees)
const secDeg = (angleDegrees) => {
   return 1 / cosDeg(angleDegrees);
};

// The asec function (num)
const asec = (num) => {
  return acos(1 / num);
};

// The asecDeg function (num)
const asecDeg = (num) => {
  return Number((rtd(asec(num))).toFixed(5));
};

// The sin function (angle radians)
const sin = (angleRadians) => {
  return Math.sin(angleRadians);
};

// The sinDeg function (angle degrees)
const sinDeg = (angleDegrees) => {
   return Number((Math.sin(dtr(angleDegrees))).toFixed(5));
};

// The asin function (num)
const asin = (num) => {
  return Math.asin(num);
};

// The asinDeg function (num)
const asinDeg = (num) => {
  return Number((rtd(asin(num))).toFixed(5));
};

// The sinh function (angleRadians)
const sinh = (angleRadians) => {
  return Math.sinh(angleRadians);
};

// The csc function (angle radians)
const csc = (angleRadians) => {
  return 1 / sin(angleRadians);
};

// The cscDeg function (angle degrees)
const cscDeg = (angleDegrees) => {
   return 1 / sinDeg(angleDegrees);
};

// The acsc function (num)
const acsc = (num) => {
  return asin(1 / num);
};

// The acscDeg function (num)
const acscDeg = (num) => {
  return Number((rtd(acsc(num))).toFixed(5));
};

// The tan function (angle radians)
const tan = (angleRadians) => {
  return sin(angleRadians) / cos(angleRadians);
};

// The tanDeg function (angle degrees)
const tanDeg = (angleDegrees) => {
  return sinDeg(angleDegrees) / cosDeg(angleDegrees);
};

// The atan function (num)
const atan = (num) => {
  return Math.atan(num);
}

// The atanDeg function (num)
const atanDeg = (num) => {
  return Number((rtd(atan(num))).toFixed(5));
};

// The tanh function (angleRadians)
const tanh = (angleRadians) => {
  return Math.tanh(angleRadians);
};

// The cot function (angle radians)
const cot = (angleRadians) => {
  return 1 / tan(angleRadians);
};

// The cotDeg function (angle degrees)
const cotDeg = (angleDegrees) => {
   return 1 / tanDeg(angleDegrees);
};

// The acot function (num)
const acot = (num) => {
  return atan(1 / num);
};

// The acotDeg function (num)
const acotDeg = (num) => {
  return Number((rtd(acot(num))).toFixed(5));
};

// mnjs main function
const useMnjs = () => {
  const mnjs = {};

  // Mathematical constants
  mnjs.e         = E();    // The Number e (Euler's number)
  mnjs.pi        = PI();   // The Number Pi

  // Mathematical units convert
  mnjs.dtr       = dtr;  // Deg to Rad. Result in radians
  mnjs.rtd       = rtd;  // Rad to Deg. Result in degrees

  // Mathematical functions
  mnjs.abs       = abs;
  mnjs.add       = add;
  mnjs.cube      = cube;
  mnjs.cbrt      = cbrt;
  mnjs.divi      = divi;
  mnjs.log       = log;
  mnjs.max       = max;
  mnjs.min       = min;
  mnjs.mult      = mult;
  mnjs.pow       = pow;
  mnjs.sqr       = sqr;
  mnjs.sqrt      = sqrt;
  mnjs.subt      = subt;

  // Trigonometric Functions
  mnjs.cos       = cos;
  mnjs.cos.deg   = cosDeg;
  mnjs.cos.rad   = cos;
  mnjs.acos      = acos;
  mnjs.acos.deg  = acosDeg;
  mnjs.acos.rad  = acos;
  mnjs.cosh      = cosh;
  mnjs.sec       = sec;
  mnjs.sec.deg   = secDeg;
  mnjs.sec.rad   = sec;
  mnjs.asec      = asec;
  mnjs.asec.deg  = asecDeg;
  mnjs.asec.rad  = asec;
  mnjs.sin       = sin;
  mnjs.sin.deg   = sinDeg;
  mnjs.sin.rad   = sin;
  mnjs.asin      = asin;
  mnjs.asin.deg  = asinDeg;
  mnjs.asin.rad  = asin;
  mnjs.sinh      = sinh;
  mnjs.csc       = csc;
  mnjs.csc.deg   = cscDeg;
  mnjs.csc.rad   = csc;
  mnjs.acsc      = acsc;
  mnjs.acsc.deg  = acscDeg;
  mnjs.acsc.rad  = acsc;
   mnjs.tan       = tan;
  mnjs.tan.deg   = tanDeg;
  mnjs.tan.rad   = tan;
  mnjs.atan      = atan;
  mnjs.atan.deg  = atanDeg;
  mnjs.atan.rad  = atan;
  mnjs.tanh      = tanh;
  mnjs.cot       = cot;
  mnjs.cot.deg   = cotDeg;
  mnjs.cot.rad   = cot;
  mnjs.acot      = acot;
  mnjs.acot.deg  = acotDeg;
  mnjs.acot.rad  = acot;

  return mnjs;
};

const mnjs = useMnjs();

module.exports.mnjs = mnjs;
