function fullName (first, last) {
    return first + " " + last;
}

// arrow version:
var fullName2 = (first, last) => {
    return first + " " + last;
}

console.log(fullName('Jordan', 'Hudgens'));

function gradeGenerator (grade : number) : string {
    if (grade < 60) {
        return 'F';
    } else if (grade >= 60 && grade < 70) {
        return 'D';
    } else if (grade >= 70 && grade < 80) {
        return 'C';
    } else if (grade >= 80 && grade < 90) {
        return 'B';
    } else {
        return 'A';
    }
}
var gradeGeneratorArrow = (grade : number) : string => {
    if (grade < 60) {
        return 'F';
    } else if (grade >= 60 && grade < 70) {
        return 'D';
    } else if (grade >= 70 && grade < 80) {
        return 'C';
    } else if (grade >= 80 && grade < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

console.log(gradeGenerator(45));
console.log(gradeGenerator(100));
console.log(gradeGenerator(80));

console.log(gradeGeneratorArrow(45));
