// Create a class Student with constructor and display() method — make 3 students.

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

student1 = new Students("Vimal","8",90);
student2 = new Students("Amar","10",79);
student3 = new Students("Kamala","7",82);

student1.display();
student2.display();
student3.display();