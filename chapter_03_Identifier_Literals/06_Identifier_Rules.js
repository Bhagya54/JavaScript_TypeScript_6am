// Rule 1: Must start with a letter, _ or $
var city = "Hyderabad";
var _count = 5;
var $price = 100;
console.log(city, _count, $price);

// Rule 2: Cannot start with a digit
// var 1user = "Ram";   // SyntaxError: Invalid or unexpected token
var user1 = "Ram";
console.log(user1);

// Rule 3: After the first character, may contain letters, digits, _ or $
var user_2$name = "Sita";
console.log(user_2$name);

// Rule 4: No spaces allowed
// var first name = "Ravi";   // SyntaxError: Unexpected identifier
var firstName = "Ravi";
console.log(firstName);

// Rule 5: No special characters other than _ and $
// var user-name = "Asha";   // SyntaxError (- is the minus operator)
// var user@mail = "a@b.com"; // SyntaxError: Invalid or unexpected token
var user_name = "Asha";
console.log(user_name);

// Rule 6: Cannot be a reserved keyword
// var let = 10;      // SyntaxError: let is disallowed as a lexically bound name
// var class = "A";   // SyntaxError: Unexpected token 'class'
var className = "A";
console.log(className);

// Rule 7: Case-sensitive
var age = 25;
var Age = 30;
console.log(age, Age); // 25 30 -> two different variables

// Rule 8: Unicode letters are allowed
var café = "coffee";
var π = 3.14;
console.log(café, π);

// Rule 9: No length limit
var thisIsAVeryLongVariableNameButStillPerfectlyValidInJavaScript = true;
console.log(thisIsAVeryLongVariableNameButStillPerfectlyValidInJavaScript);
