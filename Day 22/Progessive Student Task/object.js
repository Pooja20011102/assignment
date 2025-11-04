class Product {
      constructor(name, price, description) {
          this.name = name;
          this.price = price;
          this.description = description;
      }

      displayInfo() {
          return `${this.name} — Rs.${this.price} | ${this.description}`;
      }
  }

  // Derived class
  class DigitalProduct extends Product {
      constructor(name, price, description, fileSize, format, downloadLink) {
          super(name, price, description);
          this.fileSize = fileSize;
          this.format = format;
          this.downloadLink = downloadLink;
      }

      displayExtraFeatures() {
          return `File Size: ${this.fileSize}MB | Format: ${this.format} | Download: ${this.downloadLink}`;
      }
  }

  // Product objects
  const Products = [
      new Product("Television", 30000, "Watch TV Shows and movies"),
      new Product("Laptop", 50000, "Learn, play, and explore more"),
      new Product("Washing Machine", 40000, "Wash your clothes easily"),
      new DigitalProduct("E-Book", 500, "Learn JavaScript the easy way", 15, "PDF", "www.ebookstore.com/js"),
      new DigitalProduct("Music Album", 300, "Listen to your favorite songs", 120, "MP3", "www.musicstore.com/album")
  ];

  // Display all products
  function show() {
      let productList = document.getElementsByClassName("display")[0];
      productList.innerHTML = "";

      Products.forEach(p => {
          let li = document.createElement("li");
          li.innerText = p.displayInfo();
         
          productList.appendChild(li);
      });
  }

  // Display digital features only
  function showDigitalFeatures() {
      let productList = document.getElementsByClassName("display")[0];
      productList.innerHTML = "";

      Products.forEach(p => {
          if (p instanceof DigitalProduct) {
              let li = document.createElement("li");
              li.innerText = `${p.displayInfo()} — ${p.displayExtraFeatures()}`;
              productList.appendChild(li);
          }
      });
  }