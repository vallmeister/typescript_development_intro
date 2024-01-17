// functions have access to any public variables in the outer scope
function nameFunction(name) {
    var n = name;
    function printName() {
        console.log(n);
    }
    printName();
}
nameFunction('Jordan');
// The inner functions maintain access to the outer scope even 
// AFTER the values are returtned!
function otherNameFunction(name) {
    var n = name;
    return function () {
        console.log(n);
    };
}
var nameAgain = otherNameFunction('Tiffany');
nameAgain();
// Encapsulate function into a JavaScript object
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
//# sourceMappingURL=019_closure_introduction.js.map