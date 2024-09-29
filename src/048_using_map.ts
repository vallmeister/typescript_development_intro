const familyNames = ["Jordan", "Tiffany", "Kristine"];

let capitalizedNames: string[] = [];

for (var i = 0; i < familyNames.length; i++) {
    capitalizedNames.push(familyNames[i].toUpperCase());
}

console.log(capitalizedNames);

// using map
const capitalizedNames = familyNames.map((name: string) => name.toUpperCase());
console.log(capitalizedNames);

// map has to have return type
const capitalizedNames = familyNames.map((name: string) => {
    return name.toUpperCase();
});
console.log(capitalizedNames);

const capitalizedNames = familyNames.map((name: string) => {
    if (name === "Tiffany") {
        return name.toUpperCase();
    } else {
        return name.toLowerCase();
    }
});
console.log(capitalizedNames);
