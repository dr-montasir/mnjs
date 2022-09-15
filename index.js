'use strict';
/**
 * @package : MNJS MATH NODE JS
 * @version : 4.3.2
 * @author  : Montasir Mirghani
 * @npm     : https://www.npmjs.com/~dr-montasir
 * @gitHub  : https://github.com/dr-montasir
 */
/**
 * @license MIT License
 * @copyright Copyright (c) 2020 - 2022 Montasir Mirghani
 * @text Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/**
/**
 * @name MNJS ERRORS
 */
const ERRORS = {
		MNJS_0_1: 'NATIVE MATH ERROR No. 00 : 01: This function only accepts numbers',
		MNJS_0_2: 'NATIVE MATH ERROR No. 00 : 02: fact() argument must be natural number (ℕ0) between 0 and 170',
		MNJS_1_1: 'NATIVE MATH ERROR No. 01 : 01: This function accepting either a number or an array. In the case of an array, all elements must be a number',
		MNJS_1_2: 'NATIVE MATH ERROR No. 01 : 02: This function accepting either a string or an array. In the case of an array, all elements must be a string',
		MNJS_1_3:
			'NATIVE MATH ERROR No. 01 : 03: This function accepting two arguments of numbers, arrays, or one of them must be a number, and the other must be an array; In the case of arrays, all elements must be a number, the length of arrays must be equal',
		MNJS_1_4: 'NATIVE MATH ERROR No. 01 : 04: The first parameter accepting either a number or an array. In the case of an array, all elements must be a number. The second parameter must be between 0 and 100',
		MNJS_1_5: 'NATIVE MATH ERROR No. 01 : 05: This function accepts numeric arguments or one numeric array argument. (num1, num2, ..., num) => {} or ([num1, num2, ..., num]) => {}',
		MNJS_1_6:
			'NATIVE MATH ERROR No. 01 : 06: This function accepting two arguments. The first argument should be one (numeric or empty) array and the second should be a number. All next examples are valid: sum([num1, num2, ..., num_x]); sum([]); sum([num1, num2, ..., num_x], num); sum([], num)',
		MNJS_1_7: 'NATIVE MATH ERROR No. 01 : 07: This function accepting either a non-negative integer or an array. In the case of an array, all elements must be a non-negative integer',
		MNJS_2_1: 'NATIVE MATH ERROR No. 02 : 01: The step parameter should not be: 1/ null 2/ equal or less than zero. 3/ greater than the absolute difference between the first and second parameter',
		MNJS_2_2: 'NATIVE MATH ERROR No. 02 : 02: All parameters must be a number. The first and the second parameter should not be equal',
		MNJS_3_1: 'NATIVE MATH ERROR No. 03 : 01: The monolist function should take two numeric parameters (value: number, size: natural number & greater than zero)',
		MNJS_4_1:
			'NATIVE MATH ERROR No. 04 : 01: This function accepts three arguments. The first argument should be  a number or one (numeric or empty) array. The second and third arguments must be a number. What does the function do? f(x, y, z): Replace x (number or numeric array element) with z if x is ',
		MNJS_4_1_SUB_1: 'equal to y',
		MNJS_4_1_SUB_2: 'not equal to y',
		MNJS_4_1_SUB_3: 'greater than y',
		MNJS_4_1_SUB_4: 'less than y',
		MNJS_4_1_SUB_5: 'greater than or equal to y',
		MNJS_4_1_SUB_6: 'less than or equal to y',
		MNJS_5_1:
			'NATIVE MATH ERROR No. 05 : 01: This function accepts two arguments. The first argument should be  a number or one (numeric or empty) array. The second argument must be a number. What does the function do? f(x, y): Replace x (number or numeric array element) with y if x is ',
		MNJS_5_1_SUB_1: 'finity num',
		MNJS_5_1_SUB_2: 'infinity',
		MNJS_5_1_SUB_3: 'plus infinity',
		MNJS_5_1_SUB_4: 'minus infinity',
		MNJS_5_1_SUB_5: 'NAN'
	},
	/**
	 * Mathematical constants
	 */
	/**
	 * @name The Number e (Euler's number) @section Mathematical constants
	 * @origin Math.E
	 */
	E = 2.718281828459045,
	/**
	 * @name The Number Pi @section Mathematical constants
	 * @origin (21.991148575128552 / 7) = 3.141592653589793 = Math.PI
	 */
	PI = 3.141592653589793,
	/**
	 * @name The Golden Ratio (Phi) @section Mathematical constants
	 * @origin 1.618033988749895
	 */
	PHI = Number(((1 + Math.sqrt(5)) / 2).toFixed(15)),
	/**
	 * @name The tau constant @section Mathematical constants
	 * @description The circle constant representing the ratio between circumference and radius
	 */
	TAU = Number((2 * PI).toFixed(15)),
	/**
	 * @name The natural logarithm of 2 @section Mathematical constants
	 */
	LN2 = Number(Math.LN2.toFixed(15)),
	/**
	 * @name The natural logarithm of 10 @section Mathematical constants
	 */
	LN10 = Number(Math.LN10.toFixed(15)),
	/**
	 * @name The base 2 logarithm of E @section Mathematical constants
	 */
	LOG2E = Number(Math.LOG2E.toFixed(15)),
	/**
	 * @name The base 10 logarithm of E @section Mathematical constants
	 */
	LOG10E = Number(Math.LOG10E.toFixed(15)),
	/**
	 * MNJS customes functions
	 */
	/**
	 * @name mantissa (Decimal Part)
	 */
	mantissa = (r) => {
		return Number.isInteger(r) ? 0 : Number(r.toString().split('.')[1]);
	},
	/**
	 * @name ml10pow2, ml10pow3, ml10powx (mantissa, length, 10, pow, 2 => (r, e))
	 */
	ml10pow2 = (r, e) => {
		mantissa(r) === 0 ? (r = 0) : (r = String(mantissa(r)).length);
		mantissa(e) === 0 ? (e = 0) : (e = String(mantissa(e)).length);
		return Math.pow(10, r + e);
	},
	/**
	 * The MNJS functions
	 */
	/**
	 * @name abs0 function
	 * @description abs0 is the native function use to generate abs and sine functions
	 * @example abs0(-1, 0) => 1
	 */
	// abs0 = (r: number, e: number) => (r > e ? r - e : e - r),
	abs0 = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return r > e ? r - e : e - r;
		throw new Error(ERRORS.MNJS_0_1);
	},
	/**
	 * @name signx function
	 * @description signx is the native function use to generate sign function
	 * @example signx(9) => 1, signx(-9) => -1, signx(0) => 0, signx(NaN) => NaN
	 */
	signx = (r) => {
		if ('number' != typeof r) throw new Error(ERRORS.MNJS_0_1);
		return 0 === r || isNaN(r) ? r : r > 0 ? 1 : -1;
	},
	/**
	 * @name Factorial Function
	 * @description The native fact function use to generate native sine function
	 * @example fact(4) => 24, 4! = 4 × 3 × 2 × 1 = 24
	 */
	fact = (r) => {
		if (0 === r) return 1;
		if (r > 0 && r % 1 == 0) return r * fact(r - 1);
		throw new Error(ERRORS.MNJS_0_2);
	},
	/**
	 * @name degToRad
	 * @rule never fix or round
	 */
	degToRad = (r) => {
		return (r * PI) / 180;
	},
	/**
	 * @name radToDeg
	 * @rule fix and round (fround)
	 * @why check (Math.PI) / (x=1, .., 3, 6, 12) * 180 / Math.PI => 180, .., 59.99999999999999, .., ..
	 * @correction check Math.fround((Math.PI) / (x=1,2,3) * 180 / Math.PI)
	 */
	radToDeg = (r) => {
		return Math.fround((r * 180) / PI);
	},
	/**
	 * @name sineRad
	 * @rule sin.rad(number in rad: -∞*2π <= x <= ∞*2π) => (number: -1 <= x <= 1)
	 */
	sineRad = (r) => {
		return abs0(r, 0) <= 1e-8 ? r : Number(Math.sin(r).toFixed(15));
	},
	/**
	 * @name sineDeg
	 * @rule sin.deg(number in deg: -∞ <= x <= ∞) => (number: -1 <= x <= 1)
	 */
	sineDeg = (r) => {
		return abs0(degToRad(r), 0) <= degToRad(1e-8) ? degToRad(r) : Number(Math.sin(degToRad(r)).toFixed(15));
	},
	/**
	 * @name asineRad radAsin
	 * @rule rad.asin(number: -1 <= x <= 1) === asin(number: -1 <= x <= 1) => result in radian (number: -π/2 <= x <= π/2)
	 */
	asineRad = (r) => {
		return abs0(r, 0) <= 1e-8 ? r : Number(Math.asin(r).toFixed(15));
	},
	/**
	 * @name asineDeg
	 * @rule deg.asin(number: -1 <= x <= 1) => result in degree (number: -90 <= x <= 90)
	 */
	asineDeg = (r) => {
		return abs0(r, 0) <= 1e-8 ? radToDeg(r) : Number(radToDeg(Math.asin(r)).toFixed(15));
	},
	/**
	 * @name Hyperbolic sine (sinehRad)
	 */
	sinehRad = (r) => {
		return abs0(r, 0) <= 1e-8 ? r : Number(Math.sinh(r).toFixed(15));
	},
	/**
	 * @name Hyperbolic sineDeg (sinehDeg)
	 */
	sinehDeg = (r) => {
		return abs0(degToRad(r), 0) <= degToRad(1e-8) ? degToRad(r) : Number(Math.sinh(degToRad(r)).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic sine (asinehRad)
	 */
	asinehRad = (r) => {
		return abs0(r, 0) <= 1e-8 ? r : Number(Math.asinh(r).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic sineDeg (asinehDeg) deg.asinh(x)
	 */
	asinehDeg = (r) => {
		return abs0(r, 0) <= 1e-8 ? radToDeg(r) : Number(radToDeg(Math.asinh(r)).toFixed(15));
	},
	/**
	 * @name cosineRad
	 */
	cosineRad = (r) => {
		return abs0(r, 0) <= 1e-8 ? 1 : Number(Math.cos(r).toFixed(15));
	},
	/**
	 * @name cosineDeg
	 */
	cosineDeg = (r) => {
		return abs0(degToRad(r), 0) <= degToRad(1e-8) ? 1 : Number(Math.cos(degToRad(r)).toFixed(15));
	},
	/**
	 * @name acosineRad
	 */
	acosineRad = (r) => {
		return abs0(r, 0) <= 1e-8 ? PI / 2 : Number(Math.acos(r).toFixed(15));
	},
	/**
	 * @name acosineDeg
	 */
	acosineDeg = (r) => {
		return abs0(r, 0) <= 1e-8 ? 90 : Number(radToDeg(Math.acos(r)).toFixed(15));
	},
	/**
	 * @name Hyperbolic cosine (cosinehRad)
	 */
	cosinehRad = (r) => {
		return abs0(r, 0) <= 1e-8 ? 1 : Number(Math.cosh(r).toFixed(15));
	},
	/**
	 * @name Hyperbolic cosineDeg (cosinehDeg)
	 */
	cosinehDeg = (r) => {
		return abs0(degToRad(r), 0) <= degToRad(1e-8) ? 1 : Number(Math.cosh(degToRad(r)).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic cosine (acosinehRad)
	 * @note when r < 0, the function is returning NaN
	 */
	acosinehRad = (r) => {
		return Number(Math.acosh(r).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic cosine (acosinehDeg)
	 */
	acosinehDeg = (r) => {
		return Number(radToDeg(Math.acosh(r)).toFixed(15));
	},
	/**
	 * @name tangentRad
	 * @note tan(n*PI) = 0 where n = 0,1,2, ..., 10, if n = 11, 12, 13, ..., the function returns an incorrect result.
	 */
	tangentRad = (r) => {
		// convert any +r or -r angle to +r value from 0 to 2π.
		r = abs0(r % (2 * PI), 0);
		// return the sign of r
		r = r * signx(r);
		return abs0(r, 0) <= 1e-8 ? r : r % PI === PI / 2 ? Infinity : Number(Math.tan(r).toFixed(15));
	},
	/**
	 * @name tangentDeg
	 */
	tangentDeg = (r) => {
		// convert any +r or -r angle to +r value from 0 to 360.
		r = abs0(r % 360, 0);
		// return the sign of r
		r = r * signx(r);
		return abs0(degToRad(r), 0) <= degToRad(1e-8) ? degToRad(r) : r % 180 === 90 ? Infinity : Number(Math.tan(degToRad(r)).toFixed(15));
	},
	/**
	 * @name atangentRad
	 */
	atangentRad = (r) => {
		return abs0(r, 0) <= 1e-8 ? r : r === Infinity ? PI / 2 : Number(Math.atan(r).toFixed(15));
	},
	/**
	 * @name atangentDeg
	 * deg.atan()
	 */
	atangentDeg = (r) => {
		return abs0(r, 0) <= 1e-8 ? radToDeg(r) : r === Infinity ? 90 : Number(radToDeg(Math.atan(r)).toFixed(15));
	},
	/**
	 * @name Hyperbolic tangent (tangenthRad)
	 */
	tangenthRad = (r) => {
		return abs0(r, 0) <= 1e-8 ? r : Number(Math.tanh(r).toFixed(15));
	},
	/**
	 * @name Hyperbolic tangentDeg (tangenthDeg)
	 */
	tangenthDeg = (r) => {
		return abs0(degToRad(r), 0) <= degToRad(1e-8) ? r : Number(Math.tanh(degToRad(r)).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic tangent (atangenthRad)
	 */
	atangenthRad = (r) => {
		return Number(Math.atanh(r).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic tangent (atangenthDeg)
	 */
	atangenthDeg = (r) => {
		return Number(radToDeg(Math.atanh(r)).toFixed(15));
	},
	/**
	 * @name cotangentRad
	 */
	cotangentRad = (r) => {
		return Number((1 / Math.tan(r)).toFixed(15));
	},
	/**
	 * @name cotangentDeg
	 */
	cotangentDeg = (r) => {
		return Number((1 / Math.tan(degToRad(r))).toFixed(15));
	},
	/**
	 * @name acotangentRad
	 */
	acotangentRad = (r) => {
		return Number(Math.atan(1 / r).toFixed(15));
	},
	/**
	 * @name acotangentDeg
	 */
	acotangentDeg = (r) => {
		return Number(radToDeg(Math.atan(1 / r)).toFixed(15));
	},
	/**
	 * @name Hyperbolic cotangent (cotangenthRad)
	 */
	cotangenthRad = (r) => {
		return Number((1 / Math.tanh(r)).toFixed(15));
	},
	/**
	 * @name Hyperbolic cotangentDeg (cotangenthDeg)
	 */
	cotangenthDeg = (r) => {
		return Number((1 / Math.tanh(degToRad(r))).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic cotangent (acotangenthRad)
	 */
	acotangenthRad = (r) => {
		return Number((0.5 * Math.log((r + 1) / (r - 1))).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic cotangent (acotangenthDeg)
	 */
	acotangenthDeg = (r) => {
		return Number(radToDeg(0.5 * Math.log((r + 1) / (r - 1))).toFixed(15));
	},
	/**
	 * @name secantRad
	 */
	secantRad = (r) => {
		return Number((1 / Math.cos(r)).toFixed(15));
	},
	/**
	 * @name secantDeg
	 */
	secantDeg = (r) => {
		return Number((1 / Math.cos(degToRad(r))).toFixed(15));
	},
	/**
	 * @name asecantRad
	 */
	asecantRad = (r) => {
		return Number(Math.acos(1 / r).toFixed(15));
	},
	/**
	 * @name asecantDeg
	 */
	asecantDeg = (r) => {
		return Number(radToDeg(Math.acos(1 / r)).toFixed(15));
	},
	/**
	 * @name Hyperbolic secant (secanthRad)
	 */
	secanthRad = (r) => {
		return Number((2 / (Math.pow(E, r) + Math.pow(E, -r))).toFixed(15));
	},
	/**
	 * @name Hyperbolic secantDeg (secanthDeg)
	 */
	secanthDeg = (r) => {
		return Number((2 / (Math.pow(E, degToRad(r)) + Math.pow(E, -degToRad(r)))).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic secant (asecanthRad)
	 */
	asecanthRad = (r) => {
		return Number(Math.log(1 / r + Math.sqrt(1 / (r * r) - 1)).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic secant (asecanthDeg)
	 */
	asecanthDeg = (r) => {
		return Number(radToDeg(Math.log(1 / r + Math.sqrt(1 / (r * r) - 1))).toFixed(15));
	},
	/**
	 * @name cosecantRad
	 */
	cosecantRad = (r) => {
		return Number((1 / Math.sin(r)).toFixed(15));
	},
	/**
	 * @name cosecantDeg
	 */
	cosecantDeg = (r) => {
		return Number((1 / Math.sin(degToRad(r))).toFixed(15));
	},
	/**
	 * @name acosecantRad
	 */
	acosecantRad = (r) => {
		return Number(Math.asin(1 / r).toFixed(15));
	},
	/**
	 * @name acosecantDeg
	 */
	acosecantDeg = (r) => {
		return Number(radToDeg(Math.asin(1 / r)).toFixed(15));
	},
	/**
	 * @name Hyperbolic cosecant (cosecanthRad)
	 */
	cosecanthRad = (r) => {
		return Number((2 / (Math.pow(E, r) - Math.pow(E, -r))).toFixed(15));
	},
	/**
	 * @name Hyperbolic cosecantDeg (cosecanthDeg)
	 */
	cosecanthDeg = (r) => {
		return Number((2 / (Math.pow(E, degToRad(r)) - Math.pow(E, -degToRad(r)))).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic cosecant (acosecanthRad)
	 */
	acosecanthRad = (r) => {
		return Number(Math.log(1 / r + Math.sqrt(1 / (r * r) + 1)).toFixed(15));
	},
	/**
	 * @name Inverse hyperbolic secant (acosecanthDeg)
	 */
	acosecanthDeg = (r) => {
		return Number(radToDeg(Math.log(1 / r + Math.sqrt(1 / (r * r) + 1))).toFixed(15));
	},
	/**
	 * All mnjs functions
	 */
	/**
	 * @name The abs function |-x| = x
	 */
	abs = (r) => {
		if ('number' == typeof r) return abs0(r, 0);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => abs0(r, 0));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name The sign function
	 */
	sign = (r) => {
		if ('number' == typeof r) return signx(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => signx(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name The Range Function @section Matrices
	 * @usage range(start, end, step) => number[]
	 * @example range(0, 10, 2.5) => [0, 2.5, 5, 7.5, 10]
	 * range(10, 0, 2.5) => [10, 7.5, 5, 2.5, 0]
	 */
	range = (r, e, t) => {
		let n = [];
		if (t <= 0 || t > Math.abs(r - e)) throw new Error(ERRORS.MNJS_2_1);
		if ((t || (t = 1), 'number' == typeof r && 'number' == typeof e && 'number' == typeof t && r < e)) {
			for (let o = r; o <= e; o += t) n.push(Number(o.toFixed(7)));
			return n;
		}
		if ('number' == typeof r && 'number' == typeof e && 'number' == typeof t && r > e) {
			for (let o = r; o >= e; o -= t) n.push(Number(o.toFixed(7)));
			return n;
		}
		throw new Error(ERRORS.MNJS_2_2);
	},
	/**
	 * @name The MonoList Function @section Matrices
	 * @usage monolist(value, size) => number[]
	 * @example monolist(0.1, 3) => [0.1, 0.1, 0.1]
	 * monolist(-1, 4) => [-1, -1, -1, -1]
	 */
	monolist = (r, e) => {
		if (!r || !e || 'number' != typeof r || 'number' != typeof e || 0 === r || e < 1 || e % 1 != 0) throw new Error(ERRORS.MNJS_3_1);
		let n = Array(e).fill(r);
		return n;
	},
	/**
	 * @name Degree to Radian @section Mathematical units conversion
	 * @description Degree to Radian conversion. (x = angle in degrees). Result in radians
	 */
	dtr = (r) => {
		if ('number' == typeof r) return degToRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => degToRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name Radian to Degree @section Mathematical units conversion
	 * @description Radians to Degrees conversion. (x = angle in radians). Result in degrees
	 */
	rtd = (r) => {
		if ('number' == typeof r) return radToDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => radToDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name Number to String. Result as string
	 */
	nts = (r) => {
		if ('number' == typeof r) return String(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => String(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name String to Number. Result as number
	 */
	stn = (r) => {
		if ('string' == typeof r) return Number(r);
		if (Array.isArray(r) && r.every((r) => 'string' == typeof r)) return r.map((r) => Number(r));
		throw new Error(ERRORS.MNJS_1_2);
	},
	/**
	 * @name zeros. Add fraction digits
	 */
	zeros = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e && e >= 0 && e <= 100) return r.toLocaleString('en', { minimumFractionDigits: e });
		if ('number' == typeof e && e >= 0 && e <= 100 && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => r.toLocaleString('en', { minimumFractionDigits: e }));
		throw new Error(ERRORS.MNJS_1_4);
	},
	/**
	 * @name The change function
	 * @description change(x, y, z): Replace x (number or numeric array element) with z if x = y
	 * @example change(1, 1, 0) => 0
	 * change([0, NaN, 1, 2], 2, 0) => [0, NaN, 1, 0]
	 */
	change = (r, e, t) => {
		if ('number' == typeof r && 'number' == typeof e && 'number' == typeof t) return (r = r === e ? t : r);
		if ('number' == typeof e && 'number' == typeof t && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = r === e ? t : r));
		throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_1);
	},
	/**
	 * @name The change.isNotEqual function
	 * @description change.isNotEqual(x, y, z): Replace x (number or numeric array element) with z if x is not equal to y
	 */
	isNotEqual = (r, e, t) => {
		if ('number' == typeof r && 'number' == typeof e && 'number' == typeof t) return (r = r !== e ? t : r);
		if ('number' == typeof e && 'number' == typeof t && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = r !== e ? t : r));
		throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_2);
	},
	/**
	 * @name The change.isGreater function
	 * @description change.isGreater(x, y, z): Replace x (number or numeric array element) with z if x is greater than y
	 */
	isGreater = (r, e, t) => {
		if ('number' == typeof r && 'number' == typeof e && 'number' == typeof t) return (r = r > e ? t : r);
		if ('number' == typeof e && 'number' == typeof t && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = r > e ? t : r));
		throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_3);
	},
	/**
	 * @name The change.isLess function
	 * @description change.isLess(x, y, z): Replace x (number or numeric array element) with z if x is less than y
	 */
	isLess = (r, e, t) => {
		if ('number' == typeof r && 'number' == typeof e && 'number' == typeof t) return (r = r < e ? t : r);
		if ('number' == typeof e && 'number' == typeof t && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = r < e ? t : r));
		throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_4);
	},
	/**
	 * @name The change.isGreaterOrEqual function
	 * @description change.isGreaterOrEqual(x, y, z): Replace x (number or numeric array element) with z if x is greater than or equal y
	 */
	isGreaterOrEqual = (r, e, t) => {
		if ('number' == typeof r && 'number' == typeof e && 'number' == typeof t) return (r = r >= e ? t : r);
		if ('number' == typeof e && 'number' == typeof t && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = r >= e ? t : r));
		throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_5);
	},
	/**
	 * @name The change.isLessOrEqual function
	 * @description change.isLessOrEqual(x, y, z): Replace x (number or numeric array element) with z if x is less than or equal y
	 */
	isLessOrEqual = (r, e, t) => {
		if ('number' == typeof r && 'number' == typeof e && 'number' == typeof t) return (r = r <= e ? t : r);
		if ('number' == typeof e && 'number' == typeof t && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = r <= e ? t : r));
		throw new Error(ERRORS.MNJS_4_1 + ERRORS.MNJS_4_1_SUB_6);
	},
	/**
	 * @name The change.isFiniteNum function
	 * @description change.isFiniteNum(x, y): Replace x with y if x is finity number.
	 */
	isFiniteNum = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return (r = !0 === isFinite(r) ? e : r);
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = !0 === isFinite(r) ? e : r));
		throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_1);
	},
	/**
	 * @name The change.isInfinity function
	 * @description change.isInfinity(x, y): Replace x with y if x is infinity number.
	 */
	isInfinity = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return (r = r === 1 / 0 || r === -1 / 0 ? e : r);
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = r === 1 / 0 || r === -1 / 0 ? e : r));
		throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_2);
	},
	/**
	 * @name The change.isPlusInfinity function
	 * @description change.isPlusInfinity(x, y): Replace x with y if x is (+infinity) number.
	 */
	isPlusInfinity = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return (r = r === 1 / 0 ? e : r);
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = r === 1 / 0 ? e : r));
		throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_3);
	},
	/**
	 * @name The change.isMinusInfinity function
	 * @description change.isMinusInfinity(x, y): Replace x with y if x is (-infinity) number.
	 */
	isMinusInfinity = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return (r = r === -1 / 0 ? e : r);
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = r === -1 / 0 ? e : r));
		throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_4);
	},
	/**
	 * @name The change.isNAN function
	 * @description change.isNAN(x, y): Replace x with y if x is NAN.
	 */
	isNAN = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return (r = !0 === isNaN(r) ? e : r);
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r = !0 === isNaN(r) ? e : r));
		throw new Error(ERRORS.MNJS_5_1 + ERRORS.MNJS_5_1_SUB_5);
	},
	/**
	 * @name Addition Operation @section Mathematical operations
	 */
	add = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return (r * ml10pow2(e, r) + e * ml10pow2(e, r)) / ml10pow2(e, r);
		if ('number' == typeof r && Array.isArray(e) && e.every((r) => 'number' == typeof r)) return e.map((e) => (r * ml10pow2(e, r) + e * ml10pow2(e, r)) / ml10pow2(e, r));
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r * ml10pow2(e, r) + e * ml10pow2(e, r)) / ml10pow2(e, r));
		if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => 'number' == typeof r) && e.every((r) => 'number' == typeof r))
			return r.map((r, t) => (r * ml10pow2(e[t], r) + e[t] * ml10pow2(e[t], r)) / ml10pow2(e[t], r));
		throw new Error(ERRORS.MNJS_1_3);
	},
	/**
	 * @name Cube Function
	 */
	cube = (r) => {
		if ('number' == typeof r) return Number((r * r * r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number((r * r * r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name Cube Root Function
	 */
	cbrt = (r) => {
		if ('number' == typeof r) return Number(Math.cbrt(r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.cbrt(r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
 * @name Division Function. (r = numerator, e = denominator)
 * divi(0.4e-15, 1)
        0
        0.4e-15 / 1
        4e-16
 */
	divi = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return Number((r / e).toFixed(15));
		if ('number' == typeof r && Array.isArray(e) && e.every((r) => 'number' == typeof r)) return e.map((e) => Number((r / e).toFixed(15)));
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number((r / e).toFixed(15)));
		if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => 'number' == typeof r) && e.every((r) => 'number' == typeof r)) return r.map((r, t) => Number((r / e[t]).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_3);
	},
	/**
	 *
	 */
	fix = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e && e >= 0 && e <= 100) return Number(r.toFixed(e));
		if ('number' == typeof e && e >= 0 && e <= 100 && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(r.toFixed(e)));
		throw new Error(ERRORS.MNJS_1_4);
	},
	/**
	 * @name The hypot function
	 */
	hypot = (...r) => {
		if (r.length > 0 && r.every((r) => 'number' == typeof r)) return Number(Math.hypot(...r).toFixed(15));
		if (1 === r.length && r[0].length > 0 && Array.isArray(r[0]) && r[0].every((r) => 'number' == typeof r)) return Number(Math.hypot(...r[0]).toFixed(15));
		throw new Error(ERRORS.MNJS_1_5);
	},
	/**
	 * @name inv
	 */
	inv = (r) => {
		if ('number' == typeof r) return Number((1 / r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number((1 / r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name log
	 */
	log = (r) => {
		if ('number' == typeof r) return Number(Math.log(r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.log(r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name log2
	 */
	log2 = (r) => {
		if ('number' == typeof r) return Number(Math.log2(r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.log2(r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name log10
	 */
	log10 = (r) => {
		if ('number' == typeof r) return Number(Math.log10(r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.log10(r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name log1p
	 */
	log1p = (r) => {
		if ('number' == typeof r) return Number(Math.log1p(r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.log1p(r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name max
	 */
	max = (...r) => {
		if (r.length > 0 && r.every((r) => 'number' == typeof r)) return Math.max(...r);
		if (1 === r.length && r[0].length > 0 && Array.isArray(r[0]) && r[0].every((r) => 'number' == typeof r)) return Math.max(...r[0]);
		throw new Error(ERRORS.MNJS_1_5);
	},
	/**
	 * @name min
	 */
	min = (...r) => {
		if (r.length > 0 && r.every((r) => 'number' == typeof r)) return Math.min(...r);
		if (1 === r.length && r[0].length > 0 && Array.isArray(r[0]) && r[0].every((r) => 'number' == typeof r)) return Math.min(...r[0]);
		throw new Error(ERRORS.MNJS_1_5);
	},
	/**
	 * @name sum
	 */
	sum = (r, e) => {
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r) && ((e && 'number' == typeof e) || !e)) {
			return r.reduce((r, e) => Number((r + e).toFixed(15)), (e = e || 0));
		}
		throw new Error(ERRORS.MNJS_1_6);
	},
	/**
	 * @name mult
	 */
	mult = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return Number((r * e).toFixed(15));
		if ('number' == typeof r && Array.isArray(e) && e.every((r) => 'number' == typeof r)) return e.map((e) => Number((r * e).toFixed(15)));
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number((r * e).toFixed(15)));
		if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => 'number' == typeof r) && e.every((r) => 'number' == typeof r)) return r.map((r, t) => Number((r * e[t]).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_3);
	},
	/**
	 * @name nrt
	 */
	nrt = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return Number(Math.pow(r, 1 / e).toFixed(15));
		if ('number' == typeof r && Array.isArray(e) && e.every((r) => 'number' == typeof r)) return e.map((e) => Number(Math.pow(r, 1 / e).toFixed(15)));
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.pow(r, 1 / e).toFixed(15)));
		if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => 'number' == typeof r) && e.every((r) => 'number' == typeof r))
			return r.map((r, t) => Number(Math.pow(r, 1 / e[t]).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_3);
	},
	/**
	 * @name pow
	 */
	pow = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return Number(Math.pow(r, e).toFixed(15));
		if ('number' == typeof r && Array.isArray(e) && e.every((r) => 'number' == typeof r)) return e.map((e) => Number(Math.pow(r, e).toFixed(15)));
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.pow(r, e).toFixed(15)));
		if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => 'number' == typeof r) && e.every((r) => 'number' == typeof r))
			return r.map((r, t) => Number(Math.pow(r, e[t]).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_3);
	},
	/**
	 * @name sqr
	 */
	sqr = (r) => {
		if ('number' == typeof r) return Number((r * r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number((r * r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name sqrt
	 */
	sqrt = (r) => {
		if ('number' == typeof r) return Number(Math.sqrt(r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.sqrt(r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name subt
	 */
	subt = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return (r * ml10pow2(e, r) - e * ml10pow2(e, r)) / ml10pow2(e, r);
		if ('number' == typeof r && Array.isArray(e) && e.every((r) => 'number' == typeof r)) return e.map((e) => (r * ml10pow2(e, r) - e * ml10pow2(e, r)) / ml10pow2(e, r));
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => (r * ml10pow2(e, r) - e * ml10pow2(e, r)) / ml10pow2(e, r));
		if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => 'number' == typeof r) && e.every((r) => 'number' == typeof r))
			return r.map((r, t) => (r * ml10pow2(e[t], r) - e[t] * ml10pow2(e[t], r)) / ml10pow2(e[t], r));
		throw new Error(ERRORS.MNJS_1_3);
	},
	/**
	 * @name exp
	 */
	exp = (r) => {
		if ('number' == typeof r) return Number(Math.pow(E, r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.pow(E, r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name expm1
	 */
	expm1 = (r) => {
		if ('number' == typeof r) return Number(Math.expm1(r).toFixed(15));
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.expm1(r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name trunc
	 */
	trunc = (r) => {
		if ('number' == typeof r) return Math.trunc(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Math.trunc(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name
	 */
	imul = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return Number(Math.imul(r, e).toFixed(15));
		if ('number' == typeof r && Array.isArray(e) && e.every((r) => 'number' == typeof r)) return e.map((e) => Number(Math.imul(r, e).toFixed(15)));
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.imul(r, e).toFixed(15)));
		if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => 'number' == typeof r) && e.every((r) => 'number' == typeof r))
			return r.map((r, t) => Number(Math.imul(r, e[t]).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_3);
	},
	/**
	 * @name round
	 */
	round = (r) => {
		if ('number' == typeof r) return Math.round(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Math.round(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name fround
	 */
	fround = (r) => {
		if ('number' == typeof r) return Math.fround(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Math.fround(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name floor
	 */
	floor = (r) => {
		if ('number' == typeof r) return Math.floor(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Math.floor(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name rib
	 */
	rib = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return Number(Math.floor(Math.random() * (e + 1 - r) + r).toFixed(15));
		if ('number' == typeof r && Array.isArray(e) && e.every((r) => 'number' == typeof r)) return e.map((e) => Number(Math.floor(Math.random() * (e + 1 - r) + r).toFixed(15)));
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number(Math.floor(Math.random() * (e + 1 - r) + r).toFixed(15)));
		if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => 'number' == typeof r) && e.every((r) => 'number' == typeof r))
			return r.map((r, t) => Number(Math.floor(Math.random() * (e[t] + 1 - r) + r).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_3);
	},
	/**
	 * @name rem
	 */
	rem = (r, e) => {
		if ('number' == typeof r && 'number' == typeof e) return Number((r - Math.floor(r / e) * e).toFixed(15));
		if ('number' == typeof r && Array.isArray(e) && e.every((r) => 'number' == typeof r)) return e.map((e) => Number((r - Math.floor(r / e) * e).toFixed(15)));
		if ('number' == typeof e && Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Number((r - Math.floor(r / e) * e).toFixed(15)));
		if (Array.isArray(r) && Array.isArray(e) && r.length === e.length && r.every((r) => 'number' == typeof r) && e.every((r) => 'number' == typeof r))
			return r.map((r, t) => Number((r - Math.floor(r / e[t]) * e[t]).toFixed(15)));
		throw new Error(ERRORS.MNJS_1_3);
	},
	/**
	 * @name ceil
	 */
	ceil = (r) => {
		if ('number' == typeof r) return Math.ceil(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => Math.ceil(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * Doubly exponential sequences
	 */
	/**
	 * @name fermat number => 3, 5, 17, 257, 65537, ..., Infinity
	 * @equation F_{n}=2^{2^{n}}+1,}, where n is a non-negative integer
	 */
	fermat = (r) => {
		if ('number' == typeof r && r >= 0 && r % 1 == 0) return Math.pow(2, Math.pow(2, r)) + 1;
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r && r >= 0 && r % 1 == 0)) return r.map((r) => Math.pow(2, Math.pow(2, r)) + 1);
		throw new Error(ERRORS.MNJS_1_7);
	},
	/**
	 * Trigonometric functions
	 */
	/**
	 * @name sin
	 * @example sin(0.5235987755982988) = 0.5
	 */
	sin = (r) => {
		if ('number' == typeof r) return sineRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => sineRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name sinDeg
	 * @example math.sin.deg(30) = 0.5
	 */
	sinDeg = (r) => {
		if ('number' == typeof r) return sineDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => sineDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name asin
	 */
	asin = (r) => {
		if ('number' == typeof r) return asineRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => asineRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name asin.deg
	 */
	asinDeg = (r) => {
		if ('number' == typeof r) return asineDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => asineDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name sinh
	 */
	sinh = (r) => {
		if ('number' == typeof r) return sinehRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => sinehRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name sinh.deg
	 */
	sinhDeg = (r) => {
		if ('number' == typeof r) return sinehDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => sinehDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name asinh
	 */
	asinh = (r) => {
		if ('number' == typeof r) return asinehRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => asinehRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name asinh.deg
	 */
	asinhDeg = (r) => {
		if ('number' == typeof r) return asinehDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => asinehDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name cos
	 * @example math.cos(1.047197551196598) = 0.5
	 */
	cos = (r) => {
		if ('number' == typeof r) return cosineRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cosineRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name cos.deg
	 * @example math.cos.deg(60) = 0.5
	 */
	cosDeg = (r) => {
		if ('number' == typeof r) return cosineDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cosineDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acos
	 */
	acos = (r) => {
		if ('number' == typeof r) return acosineRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acosineRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acos.deg
	 */
	acosDeg = (r) => {
		if ('number' == typeof r) return acosineDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acosineDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name cosh
	 */
	cosh = (r) => {
		if ('number' == typeof r) return cosinehRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cosinehRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name cosh.deg
	 */
	coshDeg = (r) => {
		if ('number' == typeof r) return cosinehDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cosinehDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acosh
	 */
	acosh = (r) => {
		if ('number' == typeof r) return acosinehRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acosinehRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acosh.deg
	 */
	acoshDeg = (r) => {
		if ('number' == typeof r) return acosinehDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acosinehDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name tan
	 */
	tan = (r) => {
		if ('number' == typeof r) return tangentRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => tangentRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name tan.deg
	 */
	tanDeg = (r) => {
		if ('number' == typeof r) return tangentDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => tangentDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name atan
	 */
	atan = (r) => {
		if ('number' == typeof r) return atangentRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => atangentRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name atan.deg
	 */
	atanDeg = (r) => {
		if ('number' == typeof r) return atangentDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => atangentDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name tanh
	 */
	tanh = (r) => {
		if ('number' == typeof r) return tangenthRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => tangenthRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name tanh.deg
	 */
	tanhDeg = (r) => {
		if ('number' == typeof r) return tangenthDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => tangenthDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name atanh
	 */
	atanh = (r) => {
		if ('number' == typeof r) return atangenthRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => atangenthRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name atanh.deg
	 */
	atanhDeg = (r) => {
		if ('number' == typeof r) return atangenthDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => atangenthDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name cot
	 */
	cot = (r) => {
		if ('number' == typeof r) return cotangentRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cotangentRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name cot.deg
	 */
	cotDeg = (r) => {
		if ('number' == typeof r) return cotangentDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cotangentDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acot
	 */
	acot = (r) => {
		if ('number' == typeof r) return acotangentRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acotangentRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acot.deg
	 */
	acotDeg = (r) => {
		if ('number' == typeof r) return acotangentDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acotangentDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name coth
	 */
	coth = (r) => {
		if ('number' == typeof r) return cotangenthRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cotangenthRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name coth.deg
	 */
	cothDeg = (r) => {
		if ('number' == typeof r) return cotangenthDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cotangenthDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acoth
	 */
	acoth = (r) => {
		if ('number' == typeof r) return acotangenthRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acotangenthRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acoth.deg
	 */
	acothDeg = (r) => {
		if ('number' == typeof r) return acotangenthDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acotangenthDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name sec
	 */
	sec = (r) => {
		if ('number' == typeof r) return secantRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => secantRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name sec.deg
	 */
	secDeg = (r) => {
		if ('number' == typeof r) return secantDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => secantDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name asec
	 */
	asec = (r) => {
		if ('number' == typeof r) return asecantRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => asecantRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name asec.deg
	 */
	asecDeg = (r) => {
		if ('number' == typeof r) return asecantDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => asecantDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name sech
	 */
	sech = (r) => {
		if ('number' == typeof r) return secanthRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => secanthRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name sech.deg
	 */
	sechDeg = (r) => {
		if ('number' == typeof r) return secanthDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => secanthDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name asech
	 */
	asech = (r) => {
		if ('number' == typeof r) return asecanthRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => asecanthRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name asech.deg
	 */
	asechDeg = (r) => {
		if ('number' == typeof r) return asecanthDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => asecanthDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name csc
	 */
	csc = (r) => {
		if ('number' == typeof r) return cosecantRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cosecantRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name csc.deg
	 */
	cscDeg = (r) => {
		if ('number' == typeof r) return cosecantDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cosecantDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acsc
	 */
	acsc = (r) => {
		if ('number' == typeof r) return acosecantRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acosecantRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acsc.deg
	 */
	acscDeg = (r) => {
		if ('number' == typeof r) return acosecantDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acosecantDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name csch
	 */
	csch = (r) => {
		if ('number' == typeof r) return cosecanthRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cosecanthRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name csch.deg
	 */
	cschDeg = (r) => {
		if ('number' == typeof r) return cosecanthDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => cosecanthDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acsch
	 */
	acsch = (r) => {
		if ('number' == typeof r) return acosecanthRad(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acosecanthRad(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	/**
	 * @name acsch.deg
	 */
	acschDeg = (r) => {
		if ('number' == typeof r) return acosecanthDeg(r);
		if (Array.isArray(r) && r.every((r) => 'number' == typeof r)) return r.map((r) => acosecanthDeg(r));
		throw new Error(ERRORS.MNJS_1_1);
	},
	useMNJS = () => {
		let r = {};
		return (
			(r.e = E),
			(r.pi = PI),
			(r.phi = PHI),
			(r.tau = TAU),
			(r.ln2 = LN2),
			(r.ln10 = LN10),
			(r.log2e = LOG2E),
			(r.log10e = LOG10E),
			(r.abs0 = abs0),
			(r.signx = signx),
			(r.fact = fact),
			(r.degToRad = degToRad),
			(r.radToDeg = radToDeg),
			(r.sineRad = sineRad),
			(r.sineDeg = sineDeg),
			(r.asineRad = asineRad),
			(r.asineDeg = asineDeg),
			(r.sinehRad = sinehRad),
			(r.sinehDeg = sinehDeg),
			(r.asinehRad = asinehRad),
			(r.asinehDeg = asinehDeg),
			(r.cosineRad = cosineRad),
			(r.cosineDeg = cosineDeg),
			(r.acosineRad = acosineRad),
			(r.acosineDeg = acosineDeg),
			(r.cosinehRad = cosinehRad),
			(r.cosinehDeg = cosinehDeg),
			(r.acosinehRad = acosinehRad),
			(r.acosinehDeg = acosinehDeg),
			(r.tangentRad = tangentRad),
			(r.tangentDeg = tangentDeg),
			(r.atangentRad = atangentRad),
			(r.atangentDeg = atangentDeg),
			(r.tangenthRad = tangenthRad),
			(r.tangenthDeg = tangenthDeg),
			(r.atangenthRad = atangenthRad),
			(r.atangenthDeg = atangenthDeg),
			(r.cotangentRad = cotangentRad),
			(r.cotangentDeg = cotangentDeg),
			(r.acotangentRad = acotangentRad),
			(r.acotangentDeg = acotangentDeg),
			(r.cotangenthRad = cotangenthRad),
			(r.cotangenthDeg = cotangenthDeg),
			(r.acotangenthRad = acotangenthRad),
			(r.acotangenthDeg = acotangenthDeg),
			(r.secantRad = secantRad),
			(r.secantDeg = secantDeg),
			(r.asecantRad = asecantRad),
			(r.asecantDeg = asecantDeg),
			(r.secanthRad = secanthRad),
			(r.secanthDeg = secanthDeg),
			(r.asecanthRad = asecanthRad),
			(r.asecanthDeg = asecanthDeg),
			(r.cosecantRad = cosecantRad),
			(r.cosecantDeg = cosecantDeg),
			(r.acosecantRad = acosecantRad),
			(r.acosecantDeg = acosecantDeg),
			(r.cosecanthRad = cosecanthRad),
			(r.cosecanthDeg = cosecanthDeg),
			(r.acosecanthRad = acosecanthRad),
			(r.acosecanthDeg = acosecanthDeg),
			(r.abs = abs),
			(r.sign = sign),
			(r.range = range),
			(r.monolist = monolist),
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
			(r.add = add),
			(r.cube = cube),
			(r.cbrt = cbrt),
			(r.divi = divi),
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
			(r.exp = exp),
			(r.expm1 = expm1),
			(r.trunc = trunc),
			(r.imul = imul),
			(r.round = round),
			(r.fround = fround),
			(r.floor = floor),
			(r.rib = rib),
			(r.rem = rem),
			(r.ceil = ceil),
			(r.fermat = fermat),
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
			r
		);
	},
	mnjs = useMNJS();
'undefined' == typeof window ? ((module.exports.mnjs = mnjs), (module.exports = mnjs)) : 'object' == typeof module ? ((window.exports = mnjs), (module.exports = mnjs)) : (window.exports = mnjs);
