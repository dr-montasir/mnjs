const E = 2.718281828459045,
  LN2 = Number(Math.LN2.toFixed(15)),
  LN10 = Number(Math.LN10.toFixed(15)),
  LOG2E = Number(Math.LOG2E.toFixed(15)),
  LOG10E = Number(Math.LOG10E.toFixed(15)),
  PI = 3.141592653589793,
  PHI = Number(((1 + Math.sqrt(5)) / 2).toFixed(15)),
  TAU = Number((2 * PI).toFixed(15)),
  ERRORS = {
    MNJS_1_1: { NO: "01 : 01", TEXT: "This function accepting either a number or an array. In the case of an array, all elements must be a number" },
    MNJS_1_2: { NO: "01 : 02", TEXT: "This function accepting either a string or an array. In the case of an array, all elements must be a string" },
    MNJS_1_3: { NO: "01 : 03", TEXT: "This function accepting two arguments of numbers, arrays, or one of them must be a number, and the other must be an array; In the case of arrays, all elements must be a number, the length of arrays must be equal" },
    MNJS_1_4: { NO: "01 : 04", TEXT: "The first parameter accepting either a number or an array. In the case of an array, all elements must be a number. The second parameter must be between 0 and 100" },
    MNJS_1_5: { NO: "01 : 05", TEXT: "This function accepts numeric arguments or one numeric array argument. (num1, num2, ..., num) => {} or ([num1, num2, ..., num]) => {}" },
    MNJS_2_1: { NO: "02 : 01", TEXT: "All parameters must be a number" },
    MNJS_2_2: { NO: "02 : 02", TEXT: "The step parameter must be a number" },
    MNJS_2_3: { NO: "02 : 03", TEXT: "The first and the second parameter should not be equal" },
    MNJS_2_4: { NO: "02 : 04", TEXT: "The step parameter should not be greater than the difference between the first and second parameter" },
    MNJS_2_5: { NO: "02 : 05", TEXT: "The step parameter should not be equal zero" },
    MNJS_2_6: { NO: "02 : 06", TEXT: "The sign of the step parameter must be positive" },
    MNJS_3_1: { NO: "03 : 01", TEXT: "The monolist function should take two parameters (value: number, size: natural number & greater than zero)" },
    MNJS_3_2: { NO: "03 : 02", TEXT: "All parameters must be a number (value: number, size: natural number & greater than zero)" },
  },
  range = (r, e, t) => {
    let o = [];
    if ("number" != typeof r || "number" != typeof e) throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_1.NO}: ${ERRORS.MNJS_2_1.TEXT}`);
    if ("string" == typeof t || "boolean" == typeof t) throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_2.NO}: ${ERRORS.MNJS_2_2.TEXT}`);
    if (r === e) throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_3.NO}: ${ERRORS.MNJS_2_3.TEXT}`);
    if (t > Math.abs(r - e)) throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_4.NO}: ${ERRORS.MNJS_2_4.TEXT}`);
    if (0 === t) throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_5.NO}: ${ERRORS.MNJS_2_5.TEXT}`);
    if (-1 === Math.sign(t)) throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_2_6.NO}: ${ERRORS.MNJS_2_6.TEXT}`);
    if ((t || (t = 1), r > e)) {
      for (let R = r; R >= e; R -= t) o.push(Number(R.toFixed(8)));
      return o;
    }
    if (r > e) {
      for (let R = r; R >= e; R -= t) o.push(Number(R.toFixed(8)));
      return o;
    }
    if (r < e) {
      for (let R = r; R <= e; R += t) o.push(Number(R.toFixed(8)));
      return o;
    }
  },
  monolist = (r, e) => {
    if ((!r && !e) || (r && 0 === e)) throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_3_1.NO}: ${ERRORS.MNJS_3_1.TEXT}`);
    if ("number" != typeof r || "number" != typeof e) throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_3_2.NO}: ${ERRORS.MNJS_3_2.TEXT}`);
    return Array(e).fill(r);
  },
  dtr = (r) => {
    if ("number" == typeof r) return Number(((r * Math.PI) / 180).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(((r * Math.PI) / 180).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  rtd = (r) => {
    if ("number" == typeof r) {
      let e = Number(((180 * r) / Math.PI).toFixed(8));
      return Number(e.toFixed(15));
    }
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) {
      return r.map((r) => Number(((180 * r) / Math.PI).toFixed(8))).map((r) => Number(r.toFixed(15)));
    }
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  nts = (r) => {
    if ("number" == typeof r) return String(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => String(r));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  stn = (r) => {
    if ("string" == typeof r) return Number(r);
    if (Array.isArray(r) && r.every((r) => "string" == typeof r)) return r.map((r) => Number(r));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_2.NO}: ${ERRORS.MNJS_1_2.TEXT}`);
  },
  abs = (r) => {
    if ("number" == typeof r) return Math.abs(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Math.abs(r));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  sign = (r) => {
    if ("number" == typeof r) return Math.sign(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Math.sign(r));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  add = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number((r + e).toFixed(15));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number((r + e).toFixed(15)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r + e).toFixed(15)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number((r + e[t]).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_3.NO}: ${ERRORS.MNJS_1_3.TEXT}`);
  },
  cube = (r) => {
    if ("number" == typeof r) return Number((r * r * r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r * r * r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  cbrt = (r) => {
    if ("number" == typeof r) return Number(Math.cbrt(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cbrt(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  divi = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number((r / e).toFixed(15));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number((r / e).toFixed(15)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r / e).toFixed(15)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number((r / e[t]).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_3.NO}: ${ERRORS.MNJS_1_3.TEXT}`);
  },
  fix = (r, e) => {
    if ("number" == typeof r && "number" == typeof e && e >= 0 && e <= 100) return Number(r.toFixed(e));
    if ("number" == typeof e && e >= 0 && e <= 100 && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(r.toFixed(e)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_4.NO}: ${ERRORS.MNJS_1_4.TEXT}`);
  },
  hypot = (...r) => {
    if (r.length > 0 && r.every((r) => "number" == typeof r)) return Number(Math.hypot(...r).toFixed(15));
    if (1 === r.length && r[0].length > 0 && Array.isArray(r[0]) && r[0].every((r) => "number" == typeof r)) return Number(Math.hypot(...r[0]).toFixed(15));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_5.NO}: ${ERRORS.MNJS_1_5.TEXT}`);
  },
  inv = (r) => {
    if ("number" == typeof r) return Number((1 / r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  log = (r) => {
    if ("number" == typeof r) return Number(Math.log(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.log(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  log2 = (r) => {
    if ("number" == typeof r) return Number(Math.log2(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.log2(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  log10 = (r) => {
    if ("number" == typeof r) return Number(Math.log10(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.log10(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  log1p = (r) => {
    if ("number" == typeof r) return Number(Math.log1p(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.log1p(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  max = (...r) => {
    if (r.length > 0 && r.every((r) => "number" == typeof r)) return Math.max(...r);
    if (1 === r.length && r[0].length > 0 && Array.isArray(r[0]) && r[0].every((r) => "number" == typeof r)) return Math.max(...r[0]);
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_5.NO}: ${ERRORS.MNJS_1_5.TEXT}`);
  },
  min = (...r) => {
    if (r.length > 0 && r.every((r) => "number" == typeof r)) return Math.min(...r);
    if (1 === r.length && r[0].length > 0 && Array.isArray(r[0]) && r[0].every((r) => "number" == typeof r)) return Math.min(...r[0]);
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_5.NO}: ${ERRORS.MNJS_1_5.TEXT}`);
  },
  mult = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number((r * e).toFixed(15));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number((r * e).toFixed(15)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r * e).toFixed(15)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number((r * e[t]).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_3.NO}: ${ERRORS.MNJS_1_3.TEXT}`);
  },
  nrt = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number(Math.pow(r, 1 / e).toFixed(15));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number(Math.pow(r, 1 / e).toFixed(15)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.pow(r, 1 / e).toFixed(15)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number(Math.pow(r, 1 / e[t]).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_3.NO}: ${ERRORS.MNJS_1_3.TEXT}`);
  },
  pow = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number(Math.pow(r, e).toFixed(15));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number(Math.pow(r, e).toFixed(15)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.pow(r, e).toFixed(15)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number(Math.pow(r, e[t]).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_3.NO}: ${ERRORS.MNJS_1_3.TEXT}`);
  },
  sqr = (r) => {
    if ("number" == typeof r) return Number((r * r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r * r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  sqrt = (r) => {
    if ("number" == typeof r) return Number(Math.sqrt(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sqrt(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  subt = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number((r - e).toFixed(15));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number((r - e).toFixed(15)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r - e).toFixed(15)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number((r - e[t]).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_3.NO}: ${ERRORS.MNJS_1_3.TEXT}`);
  },
  exp = (r) => {
    if ("number" == typeof r) return Number(Math.pow(E, r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.pow(E, r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  cos = (r) => {
    if ("number" == typeof r) return Number(Math.cos(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cos(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  cosDeg = (r) => {
    if ("number" == typeof r) return Number(Math.cos(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cos(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acos = (r) => {
    if ("number" == typeof r) return Number(Math.acos(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.acos(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acosDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acos(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acos(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  cosh = (r) => {
    if ("number" == typeof r) return Number(Math.cosh(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cosh(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  coshDeg = (r) => {
    if ("number" == typeof r) return Number(Math.cosh(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cosh(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acosh = (r) => {
    if ("number" == typeof r) return Number(Math.acosh(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.acosh(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acoshDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acosh(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acosh(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  sin = (r) => {
    if ("number" == typeof r) return Number(Math.sin(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sin(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  sinDeg = (r) => {
    if ("number" == typeof r) return Number(Math.sin(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sin(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  asin = (r) => {
    if ("number" == typeof r) return Number(Math.asin(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.asin(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  asinDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(asin(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(asin(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  sinh = (r) => {
    if ("number" == typeof r) return Number(Math.sinh(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sinh(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  sinhDeg = (r) => {
    if ("number" == typeof r) return Number(Math.sinh(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sinh(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  asinh = (r) => {
    if ("number" == typeof r) return Number(Math.asinh(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.asinh(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  asinhDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(asinh(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(asinh(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  tan = (r) => {
    if ("number" == typeof r) return Number((sin(r) / cos(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((sin(r) / cos(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  tanDeg = (r) => {
    if ("number" == typeof r) return Number(tan(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(tan(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  atan = (r) => {
    if ("number" == typeof r) return Number(Math.atan(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.atan(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  atanDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(atan(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(atan(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  tanh = (r) => {
    if ("number" == typeof r) return Number(Math.tanh(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.tanh(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  tanhDeg = (r) => {
    if ("number" == typeof r) return Number(Math.tanh(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.tanh(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  atanh = (r) => {
    if ("number" == typeof r) return Number(Math.atanh(r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.atanh(r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  atanhDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(Math.atanh(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(Math.atanh(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  csc = (r) => {
    if ("number" == typeof r) return Number((1 / sin(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / sin(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  cscDeg = (r) => {
    if ("number" == typeof r) return Number(csc(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(csc(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acsc = (r) => {
    if ("number" == typeof r) return Number(asin(1 / r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(asin(1 / r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acscDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(asin(1 / r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(asin(1 / r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  csch = (r) => {
    if ("number" == typeof r) return Number((1 / sinh(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / sinh(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  cschDeg = (r) => {
    if ("number" == typeof r) return Number(csch(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(csch(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acsch = (r) => {
    if ("number" == typeof r) return Number(asinh(1 / r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(asinh(1 / r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acschDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(asinh(1 / r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(asinh(1 / r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  sec = (r) => {
    if ("number" == typeof r) return Number((1 / cos(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / cos(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  secDeg = (r) => {
    if ("number" == typeof r) return Number(sec(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(sec(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  asec = (r) => {
    if ("number" == typeof r) return Number(acos(1 / r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(acos(1 / r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  asecDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acos(1 / r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acos(1 / r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  sech = (r) => {
    if ("number" == typeof r) return Number((1 / cosh(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / cosh(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  sechDeg = (r) => {
    if ("number" == typeof r) return Number(sech(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(sech(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  asech = (r) => {
    if ("number" == typeof r) return Number(acosh(1 / r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(acosh(1 / r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  asechDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acosh(1 / r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acosh(1 / r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  cot = (r) => {
    if ("number" == typeof r) return Number((cos(r) / sin(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((cos(r) / sin(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  cotDeg = (r) => {
    if ("number" == typeof r) return Number(cot(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(cot(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acot = (r) => {
    if ("number" == typeof r) return Number(atan(1 / r).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(atan(1 / r).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acotDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(atan(1 / r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(atan(1 / r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  coth = (r) => {
    if ("number" == typeof r) return Number((Math.cosh(r) / Math.sinh(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((Math.cosh(r) / Math.sinh(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  cothDeg = (r) => {
    if ("number" == typeof r) return Number(coth(dtr(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(coth(dtr(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acoth = (r) => {
    if ("number" == typeof r) return Number(((log((r + 1) / r) + log(r / (r - 1))) / 2).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(((log((r + 1) / r) + log(r / (r - 1))) / 2).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  acothDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acoth(r)).toFixed(15));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acoth(r)).toFixed(15)));
    throw new Error(`MNJS ERROR No. ${ERRORS.MNJS_1_1.NO}: ${ERRORS.MNJS_1_1.TEXT}`);
  },
  useMnjs = () => {
    const r = {};
    return (
      (r.e = E),
      (r.ln2 = LN2),
      (r.ln10 = LN10),
      (r.log2e = LOG2E),
      (r.log10e = LOG10E),
      (r.pi = PI),
      (r.phi = PHI),
      (r.tau = TAU),
      (r.dtr = dtr),
      (r.rtd = rtd),
      (r.nts = nts),
      (r.stn = stn),
      (r.range = range),
      (r.monolist = monolist),
      (r.abs = abs),
      (r.sign = sign),
      (r.add = add),
      (r.cube = cube),
      (r.cbrt = cbrt),
      (r.divi = divi),
      (r.exp = exp),
      (r.fix = fix),
      (r.hypot = hypot),
      (r.inv = inv),
      (r.log = log),
      (r.log2 = log2),
      (r.log10 = log10),
      (r.log1p = log1p),
      (r.max = max),
      (r.min = min),
      (r.mult = mult),
      (r.nrt = nrt),
      (r.pow = pow),
      (r.sqr = sqr),
      (r.sqrt = sqrt),
      (r.subt = subt),
      (r.cos = cos),
      (r.cos.rad = cos),
      (r.cos.deg = cosDeg),
      (r.acos = acos),
      (r.acos.rad = acos),
      (r.acos.deg = acosDeg),
      (r.cosh = cosh),
      (r.cosh.rad = cosh),
      (r.cosh.deg = coshDeg),
      (r.acosh = acosh),
      (r.acosh.rad = acosh),
      (r.acosh.deg = acoshDeg),
      (r.sin = sin),
      (r.sin.rad = sin),
      (r.sin.deg = sinDeg),
      (r.asin = asin),
      (r.asin.rad = asin),
      (r.asin.deg = asinDeg),
      (r.sinh = sinh),
      (r.sinh.rad = sinh),
      (r.sinh.deg = sinhDeg),
      (r.asinh = asinh),
      (r.asinh.rad = asinh),
      (r.asinh.deg = asinhDeg),
      (r.tan = tan),
      (r.tan.rad = tan),
      (r.tan.deg = tanDeg),
      (r.atan = atan),
      (r.atan.rad = atan),
      (r.atan.deg = atanDeg),
      (r.tanh = tanh),
      (r.tanh.rad = tanh),
      (r.tanh.deg = tanhDeg),
      (r.atanh = atanh),
      (r.atanh.rad = atanh),
      (r.atanh.deg = atanhDeg),
      (r.csc = csc),
      (r.csc.rad = csc),
      (r.csc.deg = cscDeg),
      (r.acsc = acsc),
      (r.acsc.rad = acsc),
      (r.acsc.deg = acscDeg),
      (r.csch = csch),
      (r.csch.rad = csch),
      (r.csch.deg = cschDeg),
      (r.acsch = acsch),
      (r.acsch.rad = acsch),
      (r.acsch.deg = acschDeg),
      (r.sec = sec),
      (r.sec.rad = sec),
      (r.sec.deg = secDeg),
      (r.asec = asec),
      (r.asec.rad = asec),
      (r.asec.deg = asecDeg),
      (r.sech = sech),
      (r.sech.rad = sech),
      (r.sech.deg = sechDeg),
      (r.asech = asech),
      (r.asech.rad = asech),
      (r.asech.deg = asechDeg),
      (r.cot = cot),
      (r.cot.rad = cot),
      (r.cot.deg = cotDeg),
      (r.acot = acot),
      (r.acot.rad = acot),
      (r.acot.deg = acotDeg),
      (r.coth = coth),
      (r.coth.rad = coth),
      (r.coth.deg = cothDeg),
      (r.acoth = acoth),
      (r.acoth.rad = acoth),
      (r.acoth.deg = acothDeg),
      r
    );
  },
  mnjs = useMnjs();
"undefined" == typeof window ? (module.exports.mnjs = mnjs) : (window.mnjs = mnjs);
