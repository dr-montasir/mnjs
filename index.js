const E = 2.718281828459045,
  LN2 = Number(Math.LN2.toFixed(14)),
  LN10 = Number(Math.LN10.toFixed(14)),
  LOG2E = Number(Math.LOG2E.toFixed(14)),
  LOG10E = Number(Math.LOG10E.toFixed(14)),
  PI = 3.141592653589793,
  PHI = Number(((1 + Math.sqrt(5)) / 2).toFixed(14)),
  TAU = Number((2 * PI).toFixed(14)),
  ERRORS = {
    MNJS_1_1: "MNJS ERROR No. 01 : 01: This function accepting either a number or an array. In the case of an array, all elements must be a number",
    MNJS_1_2: "MNJS ERROR No. 01 : 02: This function accepting either a string or an array. In the case of an array, all elements must be a string",
    MNJS_1_3:
      "MNJS ERROR No. 01 : 03: This function accepting two arguments of numbers, arrays, or one of them must be a number, and the other must be an array; In the case of arrays, all elements must be a number, the length of arrays must be equal",
    MNJS_1_4: "MNJS ERROR No. 01 : 04: The first parameter accepting either a number or an array. In the case of an array, all elements must be a number. The second parameter must be between 0 and 100",
    MNJS_1_5: "MNJS ERROR No. 01 : 05: This function accepts numeric arguments or one numeric array argument. (num1, num2, ..., num) => {} or ([num1, num2, ..., num]) => {}",
    MNJS_1_6:
      "MNJS ERROR No. 01 : 06: This function accepting two arguments. The first argument should be one (numeric or empty) array and the second should be a number. All next examples are valid: sum([num1, num2, ..., num_x]); sum([]); sum([num1, num2, ..., num_x], num); sum([], num)",
    MNJS_2_1: "MNJS ERROR No. 02 : 01: All parameters must be a number",
    MNJS_2_2: "MNJS ERROR No. 02 : 02: The step parameter must be a number",
    MNJS_2_3: "MNJS ERROR No. 02 : 03: The first and the second parameter should not be equal",
    MNJS_2_4: "MNJS ERROR No. 02 : 04: The step parameter should not be greater than the difference between the first and second parameter",
    MNJS_2_5: "MNJS ERROR No. 02 : 05: The step parameter should not be equal zero",
    MNJS_2_6: "MNJS ERROR No. 02 : 06: The sign of the step parameter must be positive",
    MNJS_3_1: "MNJS ERROR No. 03 : 01: The monolist function should take two numeric parameters (value: number, size: natural number & greater than zero)",
    MNJS_4_1:
      "MNJS ERROR No. 04 : 01: This function accepts three arguments. The first argument should be  a number or one (numeric or empty) array. The second and third arguments must be a number. What does the function do? f(x, y, z): Replace x (number or numeric array element) with z if x is ",
    MNJS_4_1_SUB_1: "equal to y",
    MNJS_4_1_SUB_2: "not equal to y",
    MNJS_4_1_SUB_3: "greater than y",
    MNJS_4_1_SUB_4: "less than y",
    MNJS_4_1_SUB_5: "greater than or equal to y",
    MNJS_4_1_SUB_6: "less than or equal to y",
    MNJS_5_1:
      "MNJS ERROR No. 05 : 01: This function accepts two arguments. The first argument should be  a number or one (numeric or empty) array. The second argument must be a number. What does the function do? f(x, y): Replace x (number or numeric array element) with y if x is ",
    MNJS_5_1_SUB_1: "finity num",
    MNJS_5_1_SUB_2: "infinity",
    MNJS_5_1_SUB_3: "plus infinity",
    MNJS_5_1_SUB_4: "minus infinity",
    MNJS_5_1_SUB_5: "NAN",
  },
  range = (r, e, t) => {
    let n = [];
    if ("number" != typeof r || "number" != typeof e) throw new Error(ERRORS.MNJS_2_1);
    if ("string" == typeof t || "boolean" == typeof t) throw new Error(ERRORS.MNJS_2_2);
    if (r === e) throw new Error(ERRORS.MNJS_2_3);
    if (t > Math.abs(r - e)) throw new Error(ERRORS.MNJS_2_4);
    if (0 === t) throw new Error(ERRORS.MNJS_2_5);
    if (-1 === Math.sign(t)) throw new Error(ERRORS.MNJS_2_6);
    if ((t || (t = 1), r > e)) {
      for (let o = r; o >= e; o -= t) n.push(Number(o.toFixed(7)));
      return n;
    }
    if (r < e) {
      for (let o = r; o <= e; o += t) n.push(Number(o.toFixed(7)));
      return n;
    }
  },
  monolist = (r, e) => {
    if (!r || !e || "number" != typeof r || "number" != typeof e || 0 === r || e < 1 || e % 1 != 0) throw new Error(ERRORS.MNJS_3_1);
    let n = Array(e).fill(r);
    return n;
  },
  dtr = (r) => {
    if ("number" == typeof r) return Number(((r * Math.PI) / 180).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(((r * Math.PI) / 180).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  rtd = (r) => {
    if ("number" == typeof r) {
      let e = Number(((180 * r) / Math.PI).toFixed(7));
      return Number(e.toFixed(14));
    }
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) {
      return r.map((r) => Number(((180 * r) / Math.PI).toFixed(7))).map((r) => Number(r.toFixed(14)));
    }
    throw new Error(ERRORS.MNJS_1_1);
  },
  nts = (r) => {
    if ("number" == typeof r) return String(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => String(r));
    throw new Error(ERRORS.MNJS_1_1);
  },
  stn = (r) => {
    if ("string" == typeof r) return Number(r);
    if (Array.isArray(r) && r.every((r) => "string" == typeof r)) return r.map((r) => Number(r));
    throw new Error(ERRORS.MNJS_1_2);
  },
  zeros = (r, e) => {
    if ("number" == typeof r && "number" == typeof e && e >= 0 && e <= 100) {
      return Number(r.toFixed(e)).toLocaleString("en", { useGrouping: !1, minimumFractionDigits: e });
    }
    if ("number" == typeof e && e >= 0 && e <= 100 && Array.isArray(r) && r.every((r) => "number" == typeof r)) {
      return r.map((r) => Number(r.toFixed(e))).toLocaleString("en", { useGrouping: !1, minimumFractionDigits: e });
    }
    throw new Error(ERRORS.MNJS_1_4);
  },
  change = (r, e, t) => {
    if ("number" == typeof r && "number" == typeof e && "number" == typeof t) return (r = r === e ? t : r);
    if ("number" == typeof e && "number" == typeof t && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = r === e ? t : r));
    throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_1);
  },
  isNotEqual = (r, e, t) => {
    if ("number" == typeof r && "number" == typeof e && "number" == typeof t) return (r = r !== e ? t : r);
    if ("number" == typeof e && "number" == typeof t && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = r !== e ? t : r));
    throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_2);
  },
  isGreater = (r, e, t) => {
    if ("number" == typeof r && "number" == typeof e && "number" == typeof t) return (r = r > e ? t : r);
    if ("number" == typeof e && "number" == typeof t && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = r > e ? t : r));
    throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_3);
  },
  isLess = (r, e, t) => {
    if ("number" == typeof r && "number" == typeof e && "number" == typeof t) return (r = r < e ? t : r);
    if ("number" == typeof e && "number" == typeof t && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = r < e ? t : r));
    throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_4);
  },
  isGreaterOrEqual = (r, e, t) => {
    if ("number" == typeof r && "number" == typeof e && "number" == typeof t) return (r = r >= e ? t : r);
    if ("number" == typeof e && "number" == typeof t && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = r >= e ? t : r));
    throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_5);
  },
  isLessOrEqual = (r, e, t) => {
    if ("number" == typeof r && "number" == typeof e && "number" == typeof t) return (r = r <= e ? t : r);
    if ("number" == typeof e && "number" == typeof t && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = r <= e ? t : r));
    throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_6);
  },
  isFiniteNum = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return (r = !0 === isFinite(r) ? e : r);
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = !0 === isFinite(r) ? e : r));
    throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_1);
  },
  isInfinity = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return (r = r === 1 / 0 || r === -1 / 0 ? e : r);
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = r === 1 / 0 || r === -1 / 0 ? e : r));
    throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_2);
  },
  isPlusInfinity = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return (r = r === 1 / 0 ? e : r);
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = r === 1 / 0 ? e : r));
    throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_3);
  },
  isMinusInfinity = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return (r = r === -1 / 0 ? e : r);
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = r === -1 / 0 ? e : r));
    throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_4);
  },
  isNAN = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return (r = !0 === isNaN(r) ? e : r);
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => (r = !0 === isNaN(r) ? e : r));
    throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_5);
  },
  abs = (r) => {
    if ("number" == typeof r) return Math.abs(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Math.abs(r));
    throw new Error(ERRORS.MNJS_1_1);
  },
  sign = (r) => {
    if ("number" == typeof r) return Math.sign(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Math.sign(r));
    throw new Error(ERRORS.MNJS_1_1);
  },
  add = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number((r + e).toFixed(14));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number((r + e).toFixed(14)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r + e).toFixed(14)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number((r + e[t]).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_3);
  },
  cube = (r) => {
    if ("number" == typeof r) return Number((r * r * r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r * r * r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  cbrt = (r) => {
    if ("number" == typeof r) return Number(Math.cbrt(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cbrt(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  divi = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number((r / e).toFixed(14));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number((r / e).toFixed(14)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r / e).toFixed(14)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number((r / e[t]).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_3);
  },
  fix = (r, e) => {
    if ("number" == typeof r && "number" == typeof e && e >= 0 && e <= 100) return Number(r.toFixed(e));
    if ("number" == typeof e && e >= 0 && e <= 100 && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(r.toFixed(e)));
    throw new Error(ERRORS.MNJS_1_4);
  },
  hypot = (...r) => {
    if (r.length > 0 && r.every((r) => "number" == typeof r)) return Number(Math.hypot(...r).toFixed(14));
    if (1 === r.length && r[0].length > 0 && Array.isArray(r[0]) && r[0].every((r) => "number" == typeof r)) return Number(Math.hypot(...r[0]).toFixed(14));
    throw new Error(ERRORS.MNJS_1_5);
  },
  inv = (r) => {
    if ("number" == typeof r) return Number((1 / r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  log = (r) => {
    if ("number" == typeof r) return Number(Math.log(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.log(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  log2 = (r) => {
    if ("number" == typeof r) return Number(Math.log2(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.log2(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  log10 = (r) => {
    if ("number" == typeof r) return Number(Math.log10(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.log10(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  log1p = (r) => {
    if ("number" == typeof r) return Number(Math.log1p(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.log1p(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  max = (...r) => {
    if (r.length > 0 && r.every((r) => "number" == typeof r)) return Math.max(...r);
    if (1 === r.length && r[0].length > 0 && Array.isArray(r[0]) && r[0].every((r) => "number" == typeof r)) return Math.max(...r[0]);
    throw new Error(ERRORS.MNJS_1_5);
  },
  min = (...r) => {
    if (r.length > 0 && r.every((r) => "number" == typeof r)) return Math.min(...r);
    if (1 === r.length && r[0].length > 0 && Array.isArray(r[0]) && r[0].every((r) => "number" == typeof r)) return Math.min(...r[0]);
    throw new Error(ERRORS.MNJS_1_5);
  },
  sum = (r, e) => {
    if (Array.isArray(r) && r.every((r) => "number" == typeof r) && ((e && "number" == typeof e) || !e)) {
      return r.reduce((r, e) => Number((r + e).toFixed(14)), (e = e || 0));
    }
    throw new Error(ERRORS.MNJS_1_6);
  },
  mult = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number((r * e).toFixed(14));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number((r * e).toFixed(14)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r * e).toFixed(14)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number((r * e[t]).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_3);
  },
  nrt = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number(Math.pow(r, 1 / e).toFixed(14));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number(Math.pow(r, 1 / e).toFixed(14)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.pow(r, 1 / e).toFixed(14)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number(Math.pow(r, 1 / e[t]).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_3);
  },
  pow = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number(Math.pow(r, e).toFixed(14));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number(Math.pow(r, e).toFixed(14)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.pow(r, e).toFixed(14)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number(Math.pow(r, e[t]).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_3);
  },
  sqr = (r) => {
    if ("number" == typeof r) return Number((r * r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r * r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  sqrt = (r) => {
    if ("number" == typeof r) return Number(Math.sqrt(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sqrt(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  subt = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number((r - e).toFixed(14));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number((r - e).toFixed(14)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r - e).toFixed(14)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number((r - e[t]).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_3);
  },
  exp = (r) => {
    if ("number" == typeof r) return Number(Math.pow(E, r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.pow(E, r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  expm1 = (r) => {
    if ("number" == typeof r) return Number(Math.expm1(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.expm1(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  trunc = (r) => {
    if ("number" == typeof r) return Math.trunc(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Math.trunc(r));
    throw new Error(ERRORS.MNJS_1_1);
  },
  imul = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number(Math.imul(r, e).toFixed(14));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number(Math.imul(r, e).toFixed(14)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.imul(r, e).toFixed(14)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number(Math.imul(r, e[t]).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_3);
  },
  round = (r) => {
    if ("number" == typeof r) return Math.round(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Math.round(r));
    throw new Error(ERRORS.MNJS_1_1);
  },
  fround = (r) => {
    if ("number" == typeof r) return Math.fround(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Math.fround(r));
    throw new Error(ERRORS.MNJS_1_1);
  },
  floor = (r) => {
    if ("number" == typeof r) return Math.floor(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Math.floor(r));
    throw new Error(ERRORS.MNJS_1_1);
  },
  rib = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number(Math.floor(Math.random() * (e + 1 - r) + r).toFixed(14));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number(Math.floor(Math.random() * (e + 1 - r) + r).toFixed(14)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.floor(Math.random() * (e + 1 - r) + r).toFixed(14)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r))
      return r.map((r, t) => Number(Math.floor(Math.random() * (e[t] + 1 - r) + r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_3);
  },
  rem = (r, e) => {
    if ("number" == typeof r && "number" == typeof e) return Number((r - Math.floor(r / e) * e).toFixed(14));
    if ("number" == typeof r && Array.isArray(e) && e.every((r) => "number" == typeof r)) return e.map((e) => Number((r - Math.floor(r / e) * e).toFixed(14)));
    if ("number" == typeof e && Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((r - Math.floor(r / e) * e).toFixed(14)));
    if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => "number" == typeof r) && e.every((r) => "number" == typeof r)) return r.map((r, t) => Number((r - Math.floor(r / e[t]) * e[t]).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_3);
  },
  ceil = (r) => {
    if ("number" == typeof r) return Math.ceil(r);
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Math.ceil(r));
    throw new Error(ERRORS.MNJS_1_1);
  },
  cos = (r) => {
    if ("number" == typeof r) return Number(Math.cos(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cos(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  cosDeg = (r) => {
    if ("number" == typeof r) return Number(Math.cos(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cos(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acos = (r) => {
    if ("number" == typeof r) return Number(Math.acos(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.acos(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acosDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acos(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acos(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  cosh = (r) => {
    if ("number" == typeof r) return Number(Math.cosh(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cosh(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  coshDeg = (r) => {
    if ("number" == typeof r) return Number(Math.cosh(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.cosh(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acosh = (r) => {
    if ("number" == typeof r) return Number(Math.acosh(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.acosh(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acoshDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acosh(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acosh(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  sin = (r) => {
    if ("number" == typeof r) return Number(Math.sin(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sin(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  sinDeg = (r) => {
    if ("number" == typeof r) return Number(Math.sin(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sin(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  asin = (r) => {
    if ("number" == typeof r) return Number(Math.asin(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.asin(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  asinDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(asin(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(asin(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  sinh = (r) => {
    if ("number" == typeof r) return Number(Math.sinh(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sinh(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  sinhDeg = (r) => {
    if ("number" == typeof r) return Number(Math.sinh(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.sinh(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  asinh = (r) => {
    if ("number" == typeof r) return Number(Math.asinh(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.asinh(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  asinhDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(asinh(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(asinh(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  tan = (r) => {
    if ("number" == typeof r) return Number((sin(r) / cos(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((sin(r) / cos(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  tanDeg = (r) => {
    if ("number" == typeof r) return Number(tan(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(tan(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  atan = (r) => {
    if ("number" == typeof r) return Number(Math.atan(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.atan(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  atanDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(atan(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(atan(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  tanh = (r) => {
    if ("number" == typeof r) return Number(Math.tanh(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.tanh(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  tanhDeg = (r) => {
    if ("number" == typeof r) return Number(Math.tanh(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.tanh(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  atanh = (r) => {
    if ("number" == typeof r) return Number(Math.atanh(r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(Math.atanh(r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  atanhDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(Math.atanh(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(Math.atanh(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  csc = (r) => {
    if ("number" == typeof r) return Number((1 / sin(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / sin(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  cscDeg = (r) => {
    if ("number" == typeof r) return Number(csc(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(csc(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acsc = (r) => {
    if ("number" == typeof r) return Number(asin(1 / r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(asin(1 / r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acscDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(asin(1 / r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(asin(1 / r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  csch = (r) => {
    if ("number" == typeof r) return Number((1 / sinh(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / sinh(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  cschDeg = (r) => {
    if ("number" == typeof r) return Number(csch(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(csch(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acsch = (r) => {
    if ("number" == typeof r) return Number(asinh(1 / r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(asinh(1 / r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acschDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(asinh(1 / r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(asinh(1 / r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  sec = (r) => {
    if ("number" == typeof r) return Number((1 / cos(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / cos(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  secDeg = (r) => {
    if ("number" == typeof r) return Number(sec(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(sec(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  asec = (r) => {
    if ("number" == typeof r) return Number(acos(1 / r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(acos(1 / r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  asecDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acos(1 / r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acos(1 / r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  sech = (r) => {
    if ("number" == typeof r) return Number((1 / cosh(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((1 / cosh(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  sechDeg = (r) => {
    if ("number" == typeof r) return Number(sech(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(sech(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  asech = (r) => {
    if ("number" == typeof r) return Number(acosh(1 / r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(acosh(1 / r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  asechDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acosh(1 / r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acosh(1 / r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  cot = (r) => {
    if ("number" == typeof r) return Number((cos(r) / sin(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((cos(r) / sin(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  cotDeg = (r) => {
    if ("number" == typeof r) return Number(cot(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(cot(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acot = (r) => {
    if ("number" == typeof r) return Number(atan(1 / r).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(atan(1 / r).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acotDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(atan(1 / r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(atan(1 / r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  coth = (r) => {
    if ("number" == typeof r) return Number((Math.cosh(r) / Math.sinh(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number((Math.cosh(r) / Math.sinh(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  cothDeg = (r) => {
    if ("number" == typeof r) return Number(coth(dtr(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(coth(dtr(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acoth = (r) => {
    if ("number" == typeof r) return Number(((log((r + 1) / r) + log(r / (r - 1))) / 2).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(((log((r + 1) / r) + log(r / (r - 1))) / 2).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
  },
  acothDeg = (r) => {
    if ("number" == typeof r) return Number(rtd(acoth(r)).toFixed(14));
    if (Array.isArray(r) && r.every((r) => "number" == typeof r)) return r.map((r) => Number(rtd(acoth(r)).toFixed(14)));
    throw new Error(ERRORS.MNJS_1_1);
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
      (r.zeros = zeros),
      (r.change = change),
      (r.change.isEqual = change),
      (r.change.isNotEqual = isNotEqual),
      (r.change.isGreater = isGreater),
      (r.change.isLess = isLess),
      (r.change.isGreaterOrEqual = isGreaterOrEqual),
      (r.change.isLessOrEqual = isLessOrEqual),
      (r.change.isFiniteNum = isFiniteNum),
      (r.change.isInfinity = isInfinity),
      (r.change.isPlusInfinity = isPlusInfinity),
      (r.change.isMinusInfinity = isMinusInfinity),
      (r.change.isNAN = isNAN),
      (r.range = range),
      (r.monolist = monolist),
      (r.abs = abs),
      (r.sign = sign),
      (r.add = add),
      (r.cube = cube),
      (r.cbrt = cbrt),
      (r.ceil = ceil),
      (r.divi = divi),
      (r.exp = exp),
      (r.expm1 = expm1),
      (r.trunc = trunc),
      (r.imul = imul),
      (r.round = round),
      (r.fround = fround),
      (r.floor = floor),
      (r.rib = rib),
      (r.fix = fix),
      (r.hypot = hypot),
      (r.inv = inv),
      (r.log = log),
      (r.log2 = log2),
      (r.log10 = log10),
      (r.log1p = log1p),
      (r.max = max),
      (r.min = min),
      (r.sum = sum),
      (r.mult = mult),
      (r.nrt = nrt),
      (r.pow = pow),
      (r.sqr = sqr),
      (r.sqrt = sqrt),
      (r.subt = subt),
      (r.rem = rem),
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
  };
var mnjs = useMnjs();
"undefined" == typeof window ? ((module.exports.mnjs = mnjs), (module.exports = mnjs)) : "object" == typeof module ? ((window.mnjs = mnjs), (module.exports = mnjs)) : (window.mnjs = mnjs);
