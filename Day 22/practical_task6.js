// Create a class Product with name and price, and a method discountedPrice().

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    discountedPrice(n){
        return this.price - (n/100)*this.price;
    }
}

product1 = new Product("Laptop",40000);
let price_after_discount = product1.discountedPrice(20);
console.log(price_after_discount);
