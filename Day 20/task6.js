// Write a function that takes marks and returns the grade (A, B, C).

function getGrade(mark){
    if (mark>=80){
        return "A";
    }
    else if (mark<80 && mark>=60){
        return "B";
    }
    else if (mark<60 && mark>=40){
        return "C";
    }
    return "F"
}

console.log(getGrade(92));
console.log(getGrade(74));
console.log(getGrade(55));

//Anonymous function

const grade = (mark) => {
     if (mark>=80){
        return "A";
    }
    else if (mark<80 && mark>=60){
        return "B";
    }
    else if (mark<60 && mark>=40){
        return "C";
    }
    return "F"
}

console.log(grade(98));



