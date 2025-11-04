// Create a base class Shape and a subclass Circle that calculates area.

class Shape{
    constructor(name){
        this.name = name;
    }
}

class Circle extends Shape{
    constructor(name,radius){
        super(name);
        this.radius = radius;
    }
    area(){
       const area = Math.PI * this.radius * this.radius;
       console.log(`${this.name} has area of ${area.toFixed(2)} sq.cm`);
    }
}

circle1 = new Circle("Circle",7);
circle1.area();