// Addition Function
const add = (num1, num2) => {
  return num1 + num2;
};

// Subtraction Function
const subt = (num1, num2) => {
  return num1 - num2;
};

// Multiplication Function
const mult = (num1, num2) => {
  return num1 * num2;
};

// Division Function
const divi = (numerator, denominator) => {
  return numerator / denominator;
};

// Square Function
const sqr = (num) => {
  return num * num;
};

// Square Root Function
const sqrt = (num) => {
  return Math.sqrt(num);
};

// mnjs main function
const mnjsFn = () => {
  const mnjs = {};

  mnjs.add = add;
  mnjs.subt = subt;
  mnjs.mult = mult;
  mnjs.divi = divi;
  mnjs.sqr = sqr;
  mnjs.sqrt = sqrt;
  // The Number pi
  mnjs.pi = 3.14159265359;
  // The Number e (Euler's number)
  mnjs.e = 2.71828;

  return mnjs;
};

const mnjs = mnjsFn();

module.exports.mnjs = mnjs;
