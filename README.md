# JavaScript & TypeScript

Practice code for learning JavaScript and TypeScript, organized by chapter.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

Verify setup:

```bash
node chapter_01_Basics/03_JS_Verify_Setup.js
```

## Structure

| Chapter | Topics |
|---------|--------|
| [chapter_01_Basics](chapter_01_Basics/) | `console.log`, `let` variables, block scope, loops, functions, `process.platform` / `process.arch`, hot code |
| [chapter_02_JavaScriptBasics](chapter_02_JavaScriptBasics/) | Identifiers, literals, operators, statements |
| [chapter_03_Identifier_Literals](chapter_03_Identifier_Literals/) | Identifier rules, naming conventions, comments, keywords |
| [chapter_04_Var_Let_Const_Scope](chapter_04_Var_Let_Const_Scope/) | `var` / `let` / `const`, function vs block scope, hoisting, TDZ |
| [chapter_05_Literal](chapter_05_Literal/) | Literals, `typeof`, `null` vs `undefined`, number literals, string literals, template literals |
| [chapter_06_Operators](chapter_06_Operators/) | Assignment, arithmetic, modulus, exponentiation, compound assignment, comparison |

### chapter_01_Basics

- `01_Basics.js` — Hello world and first variable
- `02_JS.js` — Block scope with `let`, `for` loop, function hoisting
- `03_JS_Verify_Setup.js` — Print OS platform and CPU architecture to verify Node install
- `04_HotCode.js` — Function called in a loop (hot code optimized by the engine)

### chapter_02_JavaScriptBasics

- `05_JSBasics.js` — Parts of a statement: identifier, literal, operator, `;`

### chapter_03_Identifier_Literals

- `06_Identifier_Rules.js` — Rules for valid identifiers
- `07_NamingConvention.js` — camelCase, PascalCase, and other conventions
- `08_comments.js` — Single-line and multi-line comments
- `Identifier_Rules.html` / `keywords.html` — Reference pages for identifier rules and reserved keywords
- `VSCode_Shortcuts.md` — VS Code keyboard shortcuts (Windows & Mac)

### chapter_04_Var_Let_Const_Scope

- `09_var_let_const.js` — Redeclaration and reassignment with `var`, `let`, `const`
- `10_function.js` — Defining and calling functions
- `11_var_explained.js` / `14_var_functionscope.js` — `var` is function-scoped
- `12_let_explained.js` / `15_let_block_scoped.js` — `let` is block-scoped
- `13_const_explianed.js` — `const` cannot be redeclared or reassigned
- `16_Hoisting.js` / `17_Hoisting_var_function.js` — `var` hoisting (initialized as `undefined`)
- `19_let_hoisting_block.js` / `20_let_const_var_hoisting.js` / `21_Jr_Qa.js` — `let` / `const` hoisting and the temporal dead zone

### chapter_05_Literal

- `22_Literals.js` — Literal types and `typeof`
- `23_nullVsUndefined.js` — Differences between `null` and `undefined`
- `24_null.js` — `typeof` of `null`, `undefined`, and empty string
- `25_Literal_Number.js` / `26_Literal_number_all.js` — Number literals: integer, float, exponential, hex, octal, binary, numeric separators, BigInt, `Infinity` / `NaN`, number limits
- `27_string_literal.js` — Single vs double quoted strings and escaping quotes
- `28_Template_Literal.js` — Template literals with `${}` for API URLs, locators, and logs
- `29_backtick_double_single.js` — Backtick vs single vs double quotes: interpolation, expressions, multi-line strings

### chapter_06_Operators

- `30_Assignment_Operator.js` — Assignment with `=`
- `31_Arithmetic_Operator.js` — `+`, `-`, `*`, `/`, `%`
- `32_Modulus.js` — Remainder with `%` and even/odd check
- `33_Exponential.js` — Exponentiation with `**`
- `34_Compound_Operator.js` — `+=`, `-=`, `*=`, `/=`, `%=`
- `35_Comparision_Operator.js` — `<`, `>=`, `<=`

## Running

```bash
node chapter_01_Basics/01_Basics.js
```
