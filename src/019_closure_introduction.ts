// functions have access to any public variables in the outer scope

function nameFunction(name : string) : void{
    var n : string = name;

    function printName() {
        console.log(n);
    }

    printName();
}

nameFunction('Jordan');

// The inner functions maintain access to the outer scope even 
// AFTER the values are returtned!
function otherNameFunction(name : string) {
    var n : string = name;

    return function() {
        console.log(n);
    }
}

var nameAgain = otherNameFunction('Tiffany');
nameAgain();

// Encapsulate function into a JavaScript object
function lineup() {
    var nowBatting : number = 1;

    return {
        nextBatter() { nowBatting++; },
        currentBatter() { return nowBatting }
    }
}
let batters = lineup();

console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
// Closures work like functions

let pitchers = lineup();
console.log(pitchers.currentBatter());
