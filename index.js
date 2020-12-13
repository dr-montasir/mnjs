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

// The number 10.
const NUM_10 = 10;

// The number 2.
const NUM_2 = 2;

// The number 1.
const NUM_1 = 1;

// The Number e (Euler's number). Math.E  
const E = 2.718281828459045;

// The natural logarithm of 2
const ln2 = Number(Math.LN2.toFixed(DIG_15));

// The natural logarithm of 10
const ln10 = Number(Math.LN10.toFixed(DIG_15));

// The base 2 logarithm of E
const log2e = Number(Math.LOG2E.toFixed(DIG_15));

// The base 10 logarithm of E
const log10e = Number(Math.LOG10E.toFixed(DIG_15));

// The Number Pi. Math.PI
const PI = 3.141592653589793;

// The Golden Ratio (Phi) 1.618033988749895
const PHI = Number(((1 + Math.sqrt(5)) / 2).toFixed(DIG_15));

//  The tau constant. The circle constant representing the ratio between circumference and radius
const tau = Number((2 * PI).toFixed(DIG_15));

// Mathematical units convert

// Degrees to Radians conversion. Result in radians
const dtr = (angleDegrees) => {
  return Number((angleDegrees * PI / DEG_180).toFixed(DIG_10));
};

// Radians to Degrees conversion. Result in degrees
const rtd = (angleRadians) => {
  return Number((angleRadians * DEG_180 / PI).toFixed(DIG_8));
};

// Mathematical functions

// The abs Function |-num| = num
const abs = (num) => {
  return Math.abs(num);
};

// Addition Function
const add = (num1, num2) => {
  return Number((num1 + num2).toFixed(DIG_15));
};

// Cube Function
const cube = (num) => {
  return Number((num * num * num).toFixed(DIG_15));
};

// Cube Root Function
const cbrt = (num) => {
  return Number(Math.cbrt(num).toFixed(DIG_15));
};

// Division Function
const divi = (numerator, denominator) => {
  return Number((numerator / denominator).toFixed(DIG_15));
};

// The Hypot Function
const hypot = (...values) => {
  return Number(Math.hypot(...values).toFixed(DIG_15));
};

// The Inverse Function
const inv = (num) => {
  return Number((1 / num).toFixed(DIG_15));
};

// The Natural logarithm (base e) of a number. (ln) in Math.
const log = (x) => {
  return Number(Math.log(x).toFixed(DIG_15));
};

// The base 2 logarithm of a number
const log2 = (x) => {
  return Number(Math.log2(x).toFixed(DIG_15));
};

// The base 10 logarithm of a number
const log10 = (x) => {
  return Number(Math.log10(x).toFixed(DIG_15));
};

// The natural logarithm (base e) of 1 + a number
const log1p = (x) => {
  return Number(Math.log1p(x).toFixed(DIG_15));
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
const sqr = (num) => {
  return Number((num * num).toFixed(DIG_15));
};

// Square Root Function
const sqrt = (num) => {
  return Number(Math.sqrt(num).toFixed(DIG_15));
};

// Subtraction Function
const subt = (num1, num2) => {
  return Number((num1 - num2).toFixed(DIG_15));
};

// Calculate exponential of a number. The power of e (Euler's number)
const exp = (power) => {
  return Number(Math.pow(E, power).toFixed(DIG_15));
};

// Trigonometric Functions

// The cos function (angle radians)
const cos = (angleRadians) => {
  return Number(Math.cos(angleRadians).toFixed(DIG_10));
};

// The cosDeg function (angle degrees)
const cosDeg = (angleDegrees) => {
  return Number((Math.cos(dtr(angleDegrees))).toFixed(DIG_10));
};

// The acos function (num)
const acos = (num) => {
  return Number(Math.acos(num).toFixed(DIG_10));
};

// The acosDeg function (num)
const acosDeg = (num) => {
  return Number((rtd(acos(num))).toFixed(DIG_10));
};

// The cosh function (angleRadians)
const cosh = (angleRadians) => {
  return Number(Math.cosh(angleRadians).toFixed(DIG_10));
};

// The coshDeg function (angle degrees)
const coshDeg = (angleDegrees) => {
  return Number((Math.cosh(dtr(angleDegrees))).toFixed(DIG_10));
};

// The acosh function (num)
const acosh = (num) => {
  return Number(Math.acosh(num).toFixed(DIG_10));
};

// The acoshDeg function (num)
const acoshDeg = (num) => {
  return Number((rtd(acosh(num))).toFixed(DIG_10));
};

// The sin function (angle radians)
const sin = (angleRadians) => {
  return Number(Math.sin(angleRadians).toFixed(DIG_10));
};

// The sinDeg function (angle degrees)
const sinDeg = (angleDegrees) => {
  return Number((Math.sin(dtr(angleDegrees))).toFixed(DIG_10));
};

// The asin function (num)
const asin = (num) => {
  return Number(Math.asin(num).toFixed(DIG_10));
};

// The asinDeg function (num)
const asinDeg = (num) => {
  return Number((rtd(asin(num))).toFixed(DIG_10));
};

// The sinh function (angleRadians)
const sinh = (angleRadians) => {
  return Number(Math.sinh(angleRadians).toFixed(DIG_10));
};

// The sinhDeg function (angle degrees)
const sinhDeg = (angleDegrees) => {
  return Number((Math.sinh(dtr(angleDegrees))).toFixed(DIG_10));
};

// The asinh function (num)
const asinh = (num) => {
  return Number(Math.asinh(num).toFixed(DIG_10));
};

// The asinhDeg function (num)
const asinhDeg = (num) => {
  return Number((rtd(asinh(num))).toFixed(DIG_10));
};

// The tan function (angle radians)
const tan = (angleRadians) => {
  return Number((sin(angleRadians) / cos(angleRadians)).toFixed(DIG_10));
};

// The tanDeg function (angle degrees)
const tanDeg = (angleDegrees) => {
  return Number((tan(dtr(angleDegrees))).toFixed(DIG_10));
};

// The atan function (num)
const atan = (num) => {
  return Number(Math.atan(num).toFixed(DIG_10));
};

// The atanDeg function (num)
const atanDeg = (num) => {
  return Number((rtd(atan(num))).toFixed(DIG_10));
};

// The tanh function (angleRadians)
const tanh = (angleRadians) => {
  return Number(Math.tanh(angleRadians).toFixed(DIG_10));
};

// The tanhDeg function (angle degrees)
const tanhDeg = (angleDegrees) => {
  return Number((Math.tanh(dtr(angleDegrees))).toFixed(DIG_10));
};

// The atanh function (num)
const atanh = (num) => {
  return Number(Math.atanh(num).toFixed(DIG_10));
};

// The atanhDeg function (num)
const atanhDeg = (num) => {
  return Number((rtd(Math.atanh(num))).toFixed(DIG_10));
};

// The csc function (angle radians)
const csc = (angleRadians) => {
  return Number((NUM_1 / sin(angleRadians)).toFixed(DIG_10));
};

// The cscDeg function (angle degrees)
const cscDeg = (angleDegrees) => {
  return Number((csc(dtr(angleDegrees))).toFixed(DIG_10));
};

// The acsc function (num)
const acsc = (num) => {
  return Number(asin((NUM_1 / num).toFixed(DIG_10)).toFixed(DIG_10));
};

// The acscDeg function (num)
const acscDeg = (num) => {
  return Number(rtd(asin((NUM_1 / num).toFixed(DIG_10))).toFixed(DIG_10));
};

// The csch function (angleRadians)
const csch = (angleRadians) => {
  return Number((NUM_1 / sinh(angleRadians)).toFixed(DIG_10));
};

// The cschDeg function (angle degrees)
const cschDeg = (angleDegrees) => {
  return Number((csch(dtr(angleDegrees))).toFixed(DIG_10));
};

// The acsch function (num)
const acsch = (num) => {
  return Number(asinh((NUM_1 / num).toFixed(DIG_10)).toFixed(DIG_10));
};

// The acschDeg function (num)
const acschDeg = (num) => {
  return Number(rtd(asinh((NUM_1 / num).toFixed(DIG_10))).toFixed(DIG_10));
};

// The sec function (angle radians)
const sec = (angleRadians) => {
  return Number((NUM_1 / cos(angleRadians)).toFixed(DIG_10));
};

// The secDeg function (angle degrees)
const secDeg = (angleDegrees) => {
  return Number((sec(dtr(angleDegrees))).toFixed(DIG_10));
};

// The asec function (num)
const asec = (num) => {
  return Number(acos((NUM_1 / num).toFixed(DIG_10)).toFixed(DIG_10));
};

// The asecDeg function (num)
const asecDeg = (num) => {
  return Number(rtd(acos((NUM_1 / num).toFixed(DIG_10))).toFixed(DIG_10));
};

// The sech function (angleRadians)
const sech = (angleRadians) => {
  return Number((NUM_1 / cosh(angleRadians)).toFixed(DIG_10));
};

// The sechDeg function (angle degrees)
const sechDeg = (angleDegrees) => {
  return Number((sech(dtr(angleDegrees))).toFixed(DIG_10));
};

// The asech function (num)
const asech = (num) => {
  return Number(acosh((NUM_1 / num).toFixed(DIG_10)).toFixed(DIG_10));
};

// The asechDeg function (num)
const asechDeg = (num) => {
  return Number(rtd(acosh((NUM_1 / num).toFixed(DIG_10))).toFixed(DIG_10));
};

// The cot function (angle radians)
const cot = (angleRadians) => {
  return Number((cos(angleRadians) / sin(angleRadians)).toFixed(DIG_10));
};

// The cotDeg function (angle degrees)
const cotDeg = (angleDegrees) => {
  return Number((cot(dtr(angleDegrees))).toFixed(DIG_10));
};

// The acot function (num)
const acot = (num) => {
  return Number(atan((NUM_1 / num).toFixed(DIG_10)).toFixed(DIG_10));
};

// The acotDeg function (num)
const acotDeg = (num) => {
  return Number(rtd(atan((NUM_1 / num).toFixed(DIG_10))).toFixed(DIG_10));
};

// The coth function (angleRadians)
const coth = (angleRadians) => {
  return Number((Math.cosh(angleRadians) / Math.sinh(angleRadians)).toFixed(DIG_10));
};

// The cothDeg function (angle degrees)
const cothDeg = (angleDegrees) => {
  return Number((coth(dtr(angleDegrees))).toFixed(DIG_10));
};

// The acoth function (num)
const acoth = (num) => {
  return Number(((log((num + NUM_1) / num) + log(num / (num - NUM_1))) / NUM_2).toFixed(DIG_10));
};

// The acothDeg function (num)
const acothDeg = (num) => {
  return Number(rtd(acoth(num)).toFixed(DIG_10));
};

// The main function of mnjs

// The useMnjs function
const useMnjs = () => {
  const mnjs  = {};

  // Mathematical constants
  mnjs.e         = E;      // The Number e (Euler's number)
  mnjs.ln2       = ln2;    // The natural logarithm of 2
  mnjs.ln10      = ln10;   // The natural logarithm of 10
  mnjs.log2e     = log2e;  // The base 2 logarithm of E
  mnjs.log10e    = log10e; // The base 10 logarithm of E
  mnjs.pi        = PI;     // The Number Pi
  mnjs.phi		   = PHI;    // The Golden Ratio (Phi)
  mnjs.tau       = tau;    // The tau constant

  // Mathematical units convert
  mnjs.dtr       = dtr;  // Deg to Rad. Result in radians
  mnjs.rtd       = rtd;  // Rad to Deg. Result in degrees

  // Mathematical functions
  mnjs.abs       = abs;
  mnjs.add       = add;
  mnjs.cube      = cube;
  mnjs.cbrt      = cbrt;
  mnjs.divi      = divi;
  mnjs.exp       = exp;
  mnjs.hypot     = hypot;
  mnjs.inv 		   = inv;
  mnjs.log       = log;
  mnjs.log2      = log2;
  mnjs.log10     = log10;
  mnjs.log1p     = log1p;
  mnjs.max       = max;
  mnjs.min       = min;
  mnjs.mult      = mult;
  mnjs.nrt       = nrt;
  mnjs.pow       = pow;
  mnjs.sqr       = sqr;
  mnjs.sqrt      = sqrt;
  mnjs.subt      = subt;

  // Trigonometric Functions
  mnjs.cos       = cos;
  mnjs.cos.rad   = cos;
  mnjs.cos.deg   = cosDeg;
  mnjs.acos      = acos;
  mnjs.acos.rad  = acos;
  mnjs.acos.deg  = acosDeg;
  mnjs.cosh      = cosh;
  mnjs.cosh.rad  = cosh;
  mnjs.cosh.deg  = coshDeg;
  mnjs.acosh     = acosh;
  mnjs.acosh.rad = acosh;
  mnjs.acosh.deg = acoshDeg;

  mnjs.sin       = sin;
  mnjs.sin.rad   = sin;
  mnjs.sin.deg   = sinDeg;
  mnjs.asin      = asin;
  mnjs.asin.rad  = asin;
  mnjs.asin.deg  = asinDeg;
  mnjs.sinh      = sinh;
  mnjs.sinh.rad  = sinh;
  mnjs.sinh.deg  = sinhDeg;
  mnjs.asinh     = asinh;
  mnjs.asinh.rad = asinh;
  mnjs.asinh.deg = asinhDeg;

  mnjs.tan       = tan;
  mnjs.tan.rad   = tan;
  mnjs.tan.deg   = tanDeg;
  mnjs.atan      = atan;
  mnjs.atan.rad  = atan;
  mnjs.atan.deg  = atanDeg;
  mnjs.tanh      = tanh;
  mnjs.tanh.rad  = tanh;
  mnjs.tanh.deg  = tanhDeg;
  mnjs.atanh     = atanh;
  mnjs.atanh.rad = atanh;
  mnjs.atanh.deg = atanhDeg;

  mnjs.csc       = csc;
  mnjs.csc.rad   = csc;
  mnjs.csc.deg   = cscDeg;
  mnjs.acsc      = acsc;
  mnjs.acsc.rad  = acsc;
  mnjs.acsc.deg  = acscDeg;
  mnjs.csch      = csch;
  mnjs.csch.rad  = csch;
  mnjs.csch.deg  = cschDeg;
  mnjs.acsch     = acsch;
  mnjs.acsch.rad = acsch;
  mnjs.acsch.deg = acschDeg;

  mnjs.sec       = sec;
  mnjs.sec.rad   = sec;
  mnjs.sec.deg   = secDeg;
  mnjs.asec      = asec;
  mnjs.asec.rad  = asec;
  mnjs.asec.deg  = asecDeg;
  mnjs.sech      = sech;
  mnjs.sech.rad  = sech;
  mnjs.sech.deg  = sechDeg;
  mnjs.asech     = asech;
  mnjs.asech.rad = asech;
  mnjs.asech.deg = asechDeg;

  mnjs.cot       = cot;
  mnjs.cot.rad   = cot;
  mnjs.cot.deg   = cotDeg;
  mnjs.acot      = acot;
  mnjs.acot.rad  = acot;
  mnjs.acot.deg  = acotDeg;
  mnjs.coth      = coth;
  mnjs.coth.rad  = coth;
  mnjs.coth.deg  = cothDeg;
  mnjs.acoth     = acoth;
  mnjs.acoth.rad = acoth;
  mnjs.acoth.deg = acothDeg;

  return mnjs;
};

const mnjs = useMnjs();

if (typeof window === `undefined`) {
  module.exports.mnjs = mnjs;
} else {
  window.mnjs = mnjs;
};
