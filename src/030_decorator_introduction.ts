class Post {
    @processOne()
    @processTwo()
    someFunction() {
        console.log('Function has been called');
    }
}

function processOne() {
    console.log("processOne has run");
    return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
        console.log("processOne has been called");
    }
}

function processTwo() {
    console.log("processTwo has run");
    return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
        console.log("processTwo has been called");
    }
}

class RealPost {
    @processOne()
    delete() {}
}

// processOne has run
// processTwo has run
// processTwo has been called
// processOne has been called
// Why?
