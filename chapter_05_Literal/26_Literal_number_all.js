// 1. Integer (decimal)
let integer = 42;
let negative = -100;
let zero = 0;
let negativeZero = -0;
console.log(integer, negative, zero, negativeZero); // 42 -100 0 -0

// 2. Floating point (decimal with fraction)
let float = 3.14;
let leadingDot = .5;   // same as 0.5
let trailingDot = 5.;  // same as 5
console.log(float, leadingDot, trailingDot); // 3.14 0.5 5

// 3. Exponential (scientific) notation
let big = 1.5e6;    // 1.5 * 10^6
let small = 2e-3;   // 2 * 10^-3
let upperE = 3E2;   // E or e both work
console.log(big, small, upperE); // 1500000 0.002 300

// 4. Hexadecimal (base 16) - prefix 0x or 0X
let hex = 0xFF;
let hexUpper = 0XA1;
console.log(hex, hexUpper); // 255 161

// 5. Octal (base 8) - prefix 0o or 0O
let octal = 0o77;
let octalUpper = 0O17;
console.log(octal, octalUpper); // 63 15

// 6. Binary (base 2) - prefix 0b or 0B
let binary = 0b1010;
let binaryUpper = 0B1111;
console.log(binary, binaryUpper); // 10 15

// 7. Numeric separators (underscore for readability, ES2021)
let million = 1_000_000;
let hexSep = 0xFF_FF;
let binSep = 0b1010_0001;
let floatSep = 1_000.000_1;
console.log(million, hexSep, binSep, floatSep); // 1000000 65535 161 1000.0001

// 8. BigInt - suffix n (for integers beyond Number.MAX_SAFE_INTEGER)
let bigInt = 12345678901234567890n;
let bigHex = 0xFFn;
let bigOctal = 0o77n;
let bigBinary = 0b1010n;
console.log(bigInt, bigHex, bigOctal, bigBinary); // 12345678901234567890n 255n 63n 10n
console.log(typeof bigInt); // bigint

// 9. Special number values (not literals, but global Number values)
let inf = Infinity;
let negInf = -Infinity;
let notANumber = NaN;
console.log(inf, negInf, notANumber); // Infinity -Infinity NaN
console.log(typeof NaN); // number

// 10. Number limits
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE);        // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);        // 5e-324
console.log(Number.EPSILON);          // 2.220446049250313e-16

// 11. Legacy octal (leading 0) - works only in non-strict mode, avoid it
// let legacyOctal = 077; // 63 in sloppy mode, SyntaxError in strict mode

console.log(typeof integer, typeof hex, typeof float); // number number number
