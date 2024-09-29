type EmployeeType = {
    email: string;
    roles?: string[];
}

let data: {employees?: EmployeeType[]};

data = {
    employees: [
        {email: "test@example.com", roles: ["admin", "superAdmin"]},
        {email: "test2@example.com"},
        {email: "test2@example.com"},
    ]
}

// without chaining
// if (data && data.emloyees && data.emloyees.length > 0) {
    
// }

// // extra work because I do not know if I have access to the data points
// let formattedEmployees;

// if (data && data.emloyees) {
//     // no const
//     formattedEmployees = data.emloyees.map((employee: EmployeeType) => {
//         let roles;
//         if (employee.roles) {
//             roles = employee.roles.join(", ");
//         }
//         return `${employee.email.toUpperCase()} ${roles}`;
//     })
// }

// console.log(formattedEmployees)

// with chaining
const formattedEmployees = data?.employees?.map((employee: EmployeeType) => {
    const roles = employee.roles?.join(", ");
    return `${employee.email.toUpperCase()} ${roles}`;
})
console.log(formattedEmployees);
