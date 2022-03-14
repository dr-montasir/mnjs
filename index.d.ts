/**
 * @package : MNJS MATH NODE JS
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
declare const ERRORS: {
		MNJS_0_1: string;
		MNJS_0_2: string;
		MNJS_1_1: string;
		MNJS_1_2: string;
		MNJS_1_3: string;
		MNJS_1_4: string;
		MNJS_1_5: string;
		MNJS_1_6: string;
		MNJS_2_1: string;
		MNJS_2_2: string;
		MNJS_3_1: string;
		MNJS_4_1: string;
		MNJS_4_1_SUB_1: string;
		MNJS_4_1_SUB_2: string;
		MNJS_4_1_SUB_3: string;
		MNJS_4_1_SUB_4: string;
		MNJS_4_1_SUB_5: string;
		MNJS_4_1_SUB_6: string;
		MNJS_5_1: string;
		MNJS_5_1_SUB_1: string;
		MNJS_5_1_SUB_2: string;
		MNJS_5_1_SUB_3: string;
		MNJS_5_1_SUB_4: string;
		MNJS_5_1_SUB_5: string;
	},
	/**
	 * Mathematical constants
	 */
	/**
	 * @name The Number e (Euler's number) @section Mathematical constants
	 * @origin Math.E
	 */
	E: number,
	/**
	 * @name The Number Pi @section Mathematical constants
	 * @origin (21.991148575128552 / 7) = 3.141592653589793 = Math.PI
	 */
	PI: number,
	/**
	 * @name The Golden Ratio (Phi) @section Mathematical constants
	 * @origin 1.618033988749895
	 */
	PHI: number,
	/**
	 * @name The tau constant @section Mathematical constants
	 * @description The circle constant representing the ratio between circumference and radius
	 */
	TAU: number,
	/**
	 * @name The natural logarithm of 2 @section Mathematical constants
	 */
	LN2: number,
	/**
	 * @name The natural logarithm of 10 @section Mathematical constants
	 */
	LN10: number,
	/**
	 * @name The base 2 logarithm of E @section Mathematical constants
	 */
	LOG2E: number,
	/**
	 * @name The base 10 logarithm of E @section Mathematical constants
	 */
	LOG10E: number,
	/**
	 * The MNJS functions
	 */
	/**
	 * @name abs0 function
	 * @description abs0 is the native function use to generate abs and sine functions
	 * @example abs0(-1, 0) => 1
	 */
	abs0: (r: number, e: number) => number,
	/**
	 * @name signx function
	 * @description signx is the native function use to generate sign function
	 * @example signx(9) => 1, signx(-9) => -1, signx(0) => 0, signx(NaN) => NaN
	 */
	signx: (r: number) => number,
	/**
	 * @name Factorial Function
	 * @description The native fact function use to generate native sine function
	 * @example fact(4) => 24, 4! = 4 × 3 × 2 × 1 = 24
	 */
	fact: (r: number) => any,
	/**
	 * @name degToRad
	 * @rule never fix or round
	 */
	degToRad: (r: number) => number,
	/**
	 * @name radToDeg
	 * @rule fix and round (fround)
	 * @why check (Math.PI) / (x=1, .., 3, 6, 12) * 180 / Math.PI => 180, .., 59.99999999999999, .., ..
	 * @correction check Math.fround((Math.PI) / (x=1,2,3) * 180 / Math.PI)
	 */
	radToDeg: (r: number) => number,
	/**
	 * @name Sine function
	 * @description sine is the native function use to generate (sin, cos, tan, ..) functions
	 */
	sine: (r: number) => number,
	/**
	 * @name sineRad
	 * @rule (0 < r < π/2), (π/2 < r < π), (2π < r < 3π/2), (3π/2 < r < 2π) => +, +, -, -
	 */
	sineRad: (r: number) => number,
	/**
	 * @name sineDeg
	 * @rule (0 < r < 90), (90 < r < 180), (180 < r < 270), (270 < r < 360) => +, +, -, -
	 */
	sineDeg: (r: number) => any,
	/**
	 * @name asine
	 */
	asine: (r: number) => number,
	/**
	 * @name asineRad
	 */
	asineRad: (r: number) => number,
	/**
	 * @name asineDeg
	 */
	asineDeg: (r: number) => number,
	/**
	 * @name Hyperbolic sine (sineh)
	 */
	sineh: (r: number) => number,
	/**
	 * @name Hyperbolic sine (sinehRad)
	 */
	sinehRad: (r: number) => number,
	/**
	 * @name Hyperbolic sineDeg (sinehDeg)
	 */
	sinehDeg: (r: number) => number,
	/**
	 * @name Inverse hyperbolic sine (asineh)
	 */
	asineh: (r: number) => number,
	/**
	 * @name Inverse hyperbolic sine (asinehRad)
	 */
	asinehRad: (r: number) => number,
	/**
	 * @name Inverse hyperbolic sineDeg (asinehDeg)
	 */
	asinehDeg: (r: number) => number,
	/**
	 * @name cosine
	 */
	cosine: (r: number) => number,
	/**
	 * @name cosineRad
	 */
	cosineRad: (r: number) => number,
	/**
	 * @name cosineDeg
	 */
	cosineDeg: (r: number) => number,
	/**
	 * @name acosine
	 */
	acosine: (r: number) => number,
	/**
	 * @name acosineRad
	 */
	acosineRad: (r: number) => number,
	/**
	 * @name acosineDeg
	 */
	acosineDeg: (r: number) => number,
	/**
	 * @name Hyperbolic cosine (cosineh)
	 */
	cosineh: (r: number) => number,
	/**
	 * @name Hyperbolic cosine (cosinehRad)
	 */
	cosinehRad: (r: number) => number,
	/**
	 * @name Hyperbolic cosineDeg (cosinehDeg)
	 */
	cosinehDeg: (r: number) => number,
	/**
	 * @name Inverse hyperbolic cosine (acosineh)
	 */
	acosineh: (r: number) => number,
	/**
	 * @name Inverse hyperbolic cosine (acosinehRad)
	 */
	acosinehRad: (r: number) => number,
	/**
	 * @name Inverse hyperbolic cosine (acosinehDeg)
	 */
	acosinehDeg: (r: number) => number,
	/**
	 * @name tangentRad
	 */
	tangentRad: (r: number) => number,
	/**
	 * @name tangentDeg
	 */
	tangentDeg: (r: number) => number,
	/**
	 * @name atangent
	 */
	atangent: (r: number) => number,
	/**
	 * @name atangentRad
	 */
	atangentRad: (r: number) => number,
	/**
	 * @name atangentDeg
	 */
	atangentDeg: (r: number) => number,
	/**
	 * @name Hyperbolic tangent (tangenth)
	 */
	tangenth: (r: number) => number,
	/**
	 * @name Hyperbolic tangent (tangenthRad)
	 */
	tangenthRad: (r: number) => number,
	/**
	 * @name Hyperbolic tangentDeg (tangenthDeg)
	 */
	tangenthDeg: (r: number) => number,
	/**
	 * @name Inverse hyperbolic tangent (atangenth)
	 */
	atangenth: (r: number) => number,
	/**
	 * @name Inverse hyperbolic tangent (atangenthRad)
	 */
	atangenthRad: (r: number) => number,
	/**
	 * @name Inverse hyperbolic tangent (atangenthDeg)
	 */
	atangenthDeg: (r: number) => number,
	/**
	 * @name cotangentRad
	 */
	cotangentRad: (r: number) => number,
	/**
	 * @name cotangentDeg
	 */
	cotangentDeg: (r: number) => number,
	/**
	 * @name acotangent
	 */
	acotangent: (r: number) => number,
	/**
	 * @name acotangentRad
	 */
	acotangentRad: (r: number) => number,
	/**
	 * @name acotangentDeg
	 */
	acotangentDeg: (r: number) => number,
	/**
	 * @name Hyperbolic cotangent (cotangenth)
	 */
	cotangenth: (r: number) => number,
	/**
	 * @name Hyperbolic cotangent (cotangenthRad)
	 */
	cotangenthRad: (r: number) => number,
	/**
	 * @name Hyperbolic cotangentDeg (cotangenthDeg)
	 */
	cotangenthDeg: (r: number) => number,
	/**
	 * @name Inverse hyperbolic cotangent (acotangenth)
	 */
	acotangenth: (r: number) => number,
	/**
	 * @name Inverse hyperbolic cotangent (acotangenthRad)
	 */
	acotangenthRad: (r: number) => number,
	/**
	 * @name Inverse hyperbolic cotangent (acotangenthDeg)
	 */
	acotangenthDeg: (r: number) => number,
	/**
	 * @name secant
	 */
	secant: (r: number) => number,
	/**
	 * @name secantRad
	 */
	secantRad: (r: number) => number,
	/**
	 * @name secantDeg
	 */
	secantDeg: (r: number) => number,
	/**
	 * @name asecant
	 */
	asecant: (r: number) => number,
	/**
	 * @name asecantRad
	 */
	asecantRad: (r: number) => number,
	/**
	 * @name asecantDeg
	 */
	asecantDeg: (r: number) => number,
	/**
	 * @name Hyperbolic secant (secanth)
	 */
	secanth: (r: number) => number,
	/**
	 * @name Hyperbolic secant (secanthRad)
	 */
	secanthRad: (r: number) => number,
	/**
	 * @name Hyperbolic secantDeg (secanthDeg)
	 */
	secanthDeg: (r: number) => number,
	/**
	 * @name Inverse hyperbolic secant (asecanth)
	 */
	asecanth: (r: number) => number,
	/**
	 * @name Inverse hyperbolic secant (asecanthRad)
	 */
	asecanthRad: (r: number) => number,
	/**
	 * @name Inverse hyperbolic secant (asecanthDeg)
	 */
	asecanthDeg: (r: number) => number,
	/**
	 * @name cosecant
	 */
	cosecant: (r: number) => number,
	/**
	 * @name cosecantRad
	 */
	cosecantRad: (r: number) => number,
	/**
	 * @name cosecantDeg
	 */
	cosecantDeg: (r: number) => number,
	/**
	 * @name acosecant
	 */
	acosecant: (r: number) => number,
	/**
	 * @name acosecantRad
	 */
	acosecantRad: (r: number) => number,
	/**
	 * @name acosecantDeg
	 */
	acosecantDeg: (r: number) => number,
	/**
	 * @name Hyperbolic cosecant (cosecanth)
	 */
	cosecanth: (r: number) => number,
	/**
	 * @name Hyperbolic cosecant (cosecanthRad)
	 */
	cosecanthRad: (r: number) => number,
	/**
	 * @name Hyperbolic cosecantDeg (cosecanthDeg)
	 */
	cosecanthDeg: (r: number) => number,
	/**
	 * @name Inverse hyperbolic cosecant (acosecanth)
	 */
	acosecanth: (r: number) => number,
	/**
	 * @name Inverse hyperbolic cosecant (acosecanthRad)
	 */
	acosecanthRad: (r: number) => number,
	/**
	 * @name Inverse hyperbolic secant (acosecanthDeg)
	 */
	acosecanthDeg: (r: number) => number,
	/**
	 * All mnjs functions
	 */
	/**
	 * @name The abs function |-x| = x
	 */
	abs: (r: number | number[]) => number | number[],
	/**
	 * @name The sign function
	 */
	sign: (r: number | number[]) => number | number[],
	/**
	 * @name The Range Function @section Matrices
	 * @usage range(start, end, step) => number[]
	 * @example range(0, 10, 2.5) => [0, 2.5, 5, 7.5, 10]
	 * range(10, 0, 2.5) => [10, 7.5, 5, 2.5, 0]
	 */
	range: (r: number, e: number, t: number) => number[],
	/**
	 * @name The MonoList Function @section Matrices
	 * @usage monolist(value, size) => number[]
	 * @example monolist(0.1, 3) => [0.1, 0.1, 0.1]
	 * monolist(-1, 4) => [-1, -1, -1, -1]
	 */
	monolist: (r: number, e: number) => number[],
	/**
	 * @name Degree to Radian @section Mathematical units conversion
	 * @description Degree to Radian conversion. (x = angle in degrees). Result in radians
	 */
	dtr: (r: number | number[]) => number | number[],
	/**
	 * @name Radian to Degree @section Mathematical units conversion
	 * @description Radians to Degrees conversion. (x = angle in radians). Result in degrees
	 */
	rtd: (r: number | number[]) => number | number[],
	/**
	 * @name Number to String. Result as string
	 */
	nts: (r: number | string | any[]) => string | string[],
	/**
	 * @name String to Number. Result as number
	 */
	stn: (r: string | number | any[]) => number | number[],
	/**
	 * @name zeros. Add fraction digits
	 */
	zeros: (r: number | number[], e: number) => string | string[],
	/**
	 * @name The change function
	 * @description change(x, y, z): Replace x (number or numeric array element) with z if x = y
	 * @example change(1, 1, 0) => 0
	 * change([0, NaN, 1, 2], 2, 0) => [0, NaN, 1, 0]
	 */
	change: (r: number | number[], e: number, t: number) => number | number[],
	/**
	 * @name The change.isNotEqual function
	 * @description change.isNotEqual(x, y, z): Replace x (number or numeric array element) with z if x is not equal to y
	 */
	isNotEqual: (r: number | number[], e: number, t: number) => number | number[],
	/**
	 * @name The change.isGreater function
	 * @description change.isGreater(x, y, z): Replace x (number or numeric array element) with z if x is greater than y
	 */
	isGreater: (r: number | number[], e: number, t: number) => number | number[],
	/**
	 * @name The change.isLess function
	 * @description change.isLess(x, y, z): Replace x (number or numeric array element) with z if x is less than y
	 */
	isLess: (r: number | number[], e: number, t: number) => number | number[],
	/**
	 * @name The change.isGreaterOrEqual function
	 * @description change.isGreaterOrEqual(x, y, z): Replace x (number or numeric array element) with z if x is greater than or equal y
	 */
	isGreaterOrEqual: (r: number | number[], e: number, t: number) => number | number[],
	/**
	 * @name The change.isLessOrEqual function
	 * @description change.isLessOrEqual(x, y, z): Replace x (number or numeric array element) with z if x is less than or equal y
	 */
	isLessOrEqual: (r: number | number[], e: number, t: number) => number | number[],
	/**
	 * @name The change.isFiniteNum function
	 * @description change.isFiniteNum(x, y): Replace x with y if x is finity number.
	 */
	isFiniteNum: (r: number | number[], e: number) => number | number[],
	/**
	 * @name The change.isInfinity function
	 * @description change.isInfinity(x, y): Replace x with y if x is infinity number.
	 */
	isInfinity: (r: number | number[], e: number) => number | number[],
	/**
	 * @name The change.isPlusInfinity function
	 * @description change.isPlusInfinity(x, y): Replace x with y if x is (+infinity) number.
	 */
	isPlusInfinity: (r: number | number[], e: number) => number | number[],
	/**
	 * @name The change.isMinusInfinity function
	 * @description change.isMinusInfinity(x, y): Replace x with y if x is (-infinity) number.
	 */
	isMinusInfinity: (r: number | number[], e: number) => number | number[],
	/**
	 * @name The change.isNAN function
	 * @description change.isNAN(x, y): Replace x with y if x is NAN.
	 */
	isNAN: (r: number | number[], e: number) => number | number[],
	/**
	 * @name Addition Operation @section Mathematical operations
	 */
	add: (r: number | any[], e: number | any[]) => number | number[],
	/**
	 * @name Cube Function
	 */
	cube: (r: number | number[]) => number | number[],
	/**
	 * @name Cube Root Function
	 */
	cbrt: (r: number | number[]) => number | number[],
	/**
	 * @name Division Function. (r = numerator, e = denominator)
	 */
	divi: (r: number | any[], e: number | any[]) => number | number[],
	/**
	 *
	 */
	fix: (r: number | any[], e: number) => number | number[],
	/**
	 * @name The hypot function
	 */
	hypot: (...r: any[]) => number,
	/**
	 * @name inv
	 */
	inv: (r: number | number[]) => number | number[],
	/**
	 * @name log
	 */
	log: (r: number | number[]) => number | number[],
	/**
	 * @name log2
	 */
	log2: (r: number | number[]) => number | number[],
	/**
	 * @name log10
	 */
	log10: (r: number | number[]) => number | number[],
	/**
	 * @name log1p
	 */
	log1p: (r: number | number[]) => number | number[],
	/**
	 * @name max
	 */
	max: (...r: any[]) => number,
	/**
	 * @name min
	 */
	min: (...r: any[]) => number,
	/**
	 * @name sum
	 */
	sum: (r: number[], e: number) => number,
	/**
	 * @name mult
	 */
	mult: (r: number | any[], e: number | any[]) => number | number[],
	/**
	 * @name nrt
	 */
	nrt: (r: number | any[], e: number | any[]) => number | number[],
	/**
	 * @name pow
	 */
	pow: (r: number | any[], e: number | any[]) => number | number[],
	/**
	 * @name sqr
	 */
	sqr: (r: number | number[]) => number | number[],
	/**
	 * @name sqrt
	 */
	sqrt: (r: number | number[]) => number | number[],
	/**
	 * @name subt
	 */
	subt: (r: number | any[], e: number | any[]) => number | number[],
	/**
	 * @name exp
	 */
	exp: (r: number | number[]) => number | number[],
	/**
	 * @name expm1
	 */
	expm1: (r: number | number[]) => number | number[],
	/**
	 * @name trunc
	 */
	trunc: (r: number | number[]) => number | number[],
	/**
	 * @name
	 */
	imul: (r: number | any[], e: number | any[]) => number | number[],
	/**
	 * @name round
	 */
	round: (r: number | number[]) => number | number[],
	/**
	 * @name fround
	 */
	fround: (r: number | number[]) => number | number[],
	/**
	 * @name floor
	 */
	floor: (r: number | number[]) => number | number[],
	/**
	 * @name rib
	 */
	rib: (r: number | any[], e: number | any[]) => number | number[],
	/**
	 * @name rem
	 */
	rem: (r: number | any[], e: number | any[]) => number | number[],
	/**
	 * @name ceil
	 */
	ceil: (r: number | number[]) => number | number[],
	/**
	 * @name sin
	 * @example math.sin(0.523598775598299) = 0.5
	 */
	sin: (r: number | number[]) => number | number[],
	/**
	 * @name sinDeg
	 * @example math.sin.deg(30) = 0.5
	 */
	sinDeg: (r: number | number[]) => any,
	/**
	 * @name asin
	 */
	asin: (r: number | number[]) => number | number[],
	/**
	 * @name asin.deg
	 */
	asinDeg: (r: number | number[]) => number | number[],
	/**
	 * @name sinh
	 */
	sinh: (r: number | number[]) => number | number[],
	/**
	 * @name sinh.deg
	 */
	sinhDeg: (r: number | number[]) => number | number[],
	/**
	 * @name asinh
	 */
	asinh: (r: number | number[]) => number | number[],
	/**
	 * @name asinh.deg
	 */
	asinhDeg: (r: number | number[]) => number | number[],
	/**
	 * @name cos
	 * @example math.cos(1.047197551196598) = 0.5
	 */
	cos: (r: number | number[]) => number | number[],
	/**
	 * @name cos.deg
	 * @example math.cos.deg(60) = 0.5
	 */
	cosDeg: (r: number | number[]) => number | number[],
	/**
	 * @name acos
	 */
	acos: (r: number | number[]) => number | number[],
	/**
	 * @name acos.deg
	 */
	acosDeg: (r: number | number[]) => number | number[],
	/**
	 * @name cosh
	 */
	cosh: (r: number | number[]) => number | number[],
	/**
	 * @name cosh.deg
	 */
	coshDeg: (r: number | number[]) => number | number[],
	/**
	 * @name acosh
	 */
	acosh: (r: number | number[]) => number | number[],
	/**
	 * @name acosh.deg
	 */
	acoshDeg: (r: number | number[]) => number | number[],
	/**
	 * @name tan
	 */
	tan: (r: number | number[]) => number | number[],
	/**
	 * @name tan.deg
	 */
	tanDeg: (r: number | number[]) => number | number[],
	/**
	 * @name atan
	 */
	atan: (r: number | number[]) => number | number[],
	/**
	 * @name atan.deg
	 */
	atanDeg: (r: number | number[]) => number | number[],
	/**
	 * @name tanh
	 */
	tanh: (r: number | number[]) => number | number[],
	/**
	 * @name tanh.deg
	 */
	tanhDeg: (r: number | number[]) => number | number[],
	/**
	 * @name atanh
	 */
	atanh: (r: number | number[]) => number | number[],
	/**
	 * @name atanh.deg
	 */
	atanhDeg: (r: number | number[]) => number | number[],
	/**
	 * @name cot
	 */
	cot: (r: number | number[]) => number | number[],
	/**
	 * @name cot.deg
	 */
	cotDeg: (r: number | number[]) => number | number[],
	/**
	 * @name acot
	 */
	acot: (r: number | number[]) => number | number[],
	/**
	 * @name acot.deg
	 */
	acotDeg: (r: number | number[]) => number | number[],
	/**
	 * @name coth
	 */
	coth: (r: number | number[]) => number | number[],
	/**
	 * @name coth.deg
	 */
	cothDeg: (r: number | number[]) => number | number[],
	/**
	 * @name acoth
	 */
	acoth: (r: number | number[]) => number | number[],
	/**
	 * @name acoth.deg
	 */
	acothDeg: (r: number | number[]) => number | number[],
	/**
	 * @name sec
	 */
	sec: (r: number | number[]) => number | number[],
	/**
	 * @name sec.deg
	 */
	secDeg: (r: number | number[]) => number | number[],
	/**
	 * @name asec
	 */
	asec: (r: number | number[]) => number | number[],
	/**
	 * @name asec.deg
	 */
	asecDeg: (r: number | number[]) => number | number[],
	/**
	 * @name sech
	 */
	sech: (r: number | number[]) => number | number[],
	/**
	 * @name sech.deg
	 */
	sechDeg: (r: number | number[]) => number | number[],
	/**
	 * @name asech
	 */
	asech: (r: number | number[]) => number | number[],
	/**
	 * @name asech.deg
	 */
	asechDeg: (r: number | number[]) => number | number[],
	/**
	 * @name csc
	 */
	csc: (r: number | number[]) => number | number[],
	/**
	 * @name csc.deg
	 */
	cscDeg: (r: number | number[]) => number | number[],
	/**
	 * @name acsc
	 */
	acsc: (r: number | number[]) => number | number[],
	/**
	 * @name acsc.deg
	 */
	acscDeg: (r: number | number[]) => number | number[],
	/**
	 * @name csch
	 */
	csch: (r: number | number[]) => number | number[],
	/**
	 * @name csch.deg
	 */
	cschDeg: (r: number | number[]) => number | number[],
	/**
	 * @name acsch
	 */
	acsch: (r: number | number[]) => number | number[],
	/**
	 * @name acsch.deg
	 */
	acschDeg: (r: number | number[]) => number | number[],
	useMNJS: () => object,
	mnjs: object;
