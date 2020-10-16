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

// mnjs main function
const mnjsFn = () => {
  const mnjs = {};

  mnjs.add = add;
  mnjs.cube = cube;
  mnjs.cbrt = cbrt;
  mnjs.divi = divi;
  mnjs.e = 2.71828;  // The Number e (Euler's number)
  mnjs.mult = mult;
  mnjs.pi = 3.14159265359;  // The Number pi
  mnjs.pow = pow;
  mnjs.sqr = sqr;
  mnjs.sqrt = sqrt;
  mnjs.subt = subt;

  return mnjs;
};

const mnjs = mnjsFn();

module.exports.mnjs = mnjs;
