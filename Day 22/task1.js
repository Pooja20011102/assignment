// Create an object book with title, author, and pages.

class book{
    constructor (title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

let book1 = new book("maths","sara","100") //object
console.log(book1.author);
console.log(book1.pages);

