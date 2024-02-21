/**
 * A high order function is a function that can return another function, or you can pass a function as an argument
 * 
 * A callback function is a function passed into another function as an argument, which is then invoked inside the
 * outer function to complete some kind of routine or action
 */
var dbQuery = function() : void {
    setTimeout(() => {
        console.log('Query results');
    }, 3000);
}

/* Higher order function */
function loadPage(q: () => void) {
    console.log("Header");
    /* Callback */
    q();
    console.log("Sidebar");
    console.log("Footer");
}

loadPage(dbQuery);
