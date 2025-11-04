// Create another class Manager that inherits from Employee and adds a department.

class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    display(){
        console.log(`Employee name : ${this.name} , Employee salary : ${this.salary}`);
    }
}

class Manager extends Employee{
    constructor (name,salary,department){
        super(name,salary);
        
        this.department = department;
    }
}

man1 = new Manager("Kala",60000,"HR")
console.log(man1.name);
console.log(man1.salary);
console.log(man1.department);


