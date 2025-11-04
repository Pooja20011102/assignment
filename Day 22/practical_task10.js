// Use prototypes to add a new method to all Student objects dynamically.

class Students{
    constructor(name,grade,marks){
        this.name = name;
        this.grade = grade;
        this.marks = marks
    }
    display(){
        console.log(`${this.name} of ${this.grade}th grade has secured ${this.marks} marks.`);
    }
}

Students.prototype.assignGrade = function(){
    if (this.marks >= 90){
        console.log("Grade A");
    }
    else if(this.marks >=70 && this.marks < 90){
        console.log("Grade B");
    }
    else if (this.marks>=50 && this.marks < 70){
        console.log("Grade C");
    }
    else{
        console.log("Grade F");
    }
}

student1 = new Students("Banu","10",78);
student1.display();
student1.assignGrade();