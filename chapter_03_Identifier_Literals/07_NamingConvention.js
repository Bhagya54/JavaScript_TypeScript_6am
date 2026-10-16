// 1. camelCase -> variables and functions (most common in JS)
var firstName = "Ravi";
var totalPrice = 250;
function getUserName() {
    return firstName;
}
console.log(firstName, totalPrice, getUserName());

// 2. PascalCase -> classes and constructor functions
class StudentDetails {
    constructor(name) {
        this.name = name;
    }
}
var student = new StudentDetails("Sita");
console.log(student.name);

// 3. UPPER_SNAKE_CASE -> constants that never change
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = "https://example.com/api";
console.log(MAX_LOGIN_ATTEMPTS, API_BASE_URL);

// 4. snake_case -> valid, but rarely used in JS (common in Python)
var user_age = 25;
console.log(user_age);

// 5. _leadingUnderscore -> "private" / internal use (by convention only)
var _secretKey = "abc123";
console.log(_secretKey);

// 6. $prefix -> DOM elements or library objects (jQuery style)
var $button = "button element";
console.log($button);

// 7. kebab-case -> NOT allowed for identifiers (- is the minus operator)
// var user-name = "Asha";   // SyntaxError
// kebab-case is used only for file names and CSS classes, e.g. "user-profile.js"

// 8. Boolean names -> start with is / has / can / should
var isLoggedIn = true;
var hasPermission = false;
var canEdit = true;
console.log(isLoggedIn, hasPermission, canEdit);
