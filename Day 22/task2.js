// Add a method describe() that prints the book details.

class book{
    constructor (title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    describe(){
        console.log(`Book title is ${this.title} and author is ${this.author} and the number of pages is ${this.pages}`)
    }
}



let book1 = new book("maths","Sara","100")
book1.describe();