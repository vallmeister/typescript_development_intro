interface User {
    email : string;
    firstName : string;
    lastName : string;
}

/* Make some parameters optional */
interface FlexibleUser {
    email : string;
    firstName? : string;
    lastName? : string;
}

function profile(user : User) : string {
    return `Welcome, ${user.firstName} ${user.lastName}`;
}

function flexibleProfile(user : FlexibleUser) : string {
    return `Welcome, ${user.email}`;
}

var realUser = {
    email: 'test@test.com',
    firstName: 'Tiffany',
    lastName: 'Hudgens'
};

var realEmailUser = {
    email: 'email@test.com'
};

console.log(profile(realUser));
console.log(flexibleProfile(realEmailUser));
