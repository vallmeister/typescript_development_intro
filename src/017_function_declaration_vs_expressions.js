// Function declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Jordan', 'Hudgens'));
console.log(otherFullName('Jordan', 'Hudgens'));
console.log(thirdFullName('Jordan', 'Hudgens'));
//# sourceMappingURL=017_function_declaration_vs_expressions.js.map