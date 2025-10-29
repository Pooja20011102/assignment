// Grading system

let mark = 70;

let grade;

if (mark>=90){
    grade = "A"
    
}
else if(mark>=80 && mark<90){
    grade = "B"
}

else if(mark>=70 && mark<80){
    grade = "C"
}

else{
    grade = "F"
}

console.log(`Grade is ${grade}`);
