function profile(user) {
    return "Welcome, ".concat(user.firstName, " ").concat(user.lastName);
}
function flexibleProfile(user) {
    return "Welcome, ".concat(user.email);
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
//# sourceMappingURL=023_interfaces.js.map