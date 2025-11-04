// Create a class Employee with name and salary — add a method to display info.

class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    display(){
        console.log(`Employee name : ${this.name} , Employee salary : ${this.salary}`);
    }
}

emp1 = new Employee("Bala",40000);
emp2 = new Employee("Sana",50000);

emp1.display();
emp2.display()