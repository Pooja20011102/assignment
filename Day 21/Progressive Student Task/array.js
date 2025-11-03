 let flowers = ["Rose","chrysanthemum","Marigold","Lotus","All flowers"]

 let prices = [100,150,200, 500,600,200]

 function show(){
      let flowerList = document.getElementsByClassName("flowers")[0];
    flowerList.innerHTML = ""; // clear old list

    flowers.forEach(function(flower) {
        let a = document.createElement("li");
        a.innerText = flower;
        flowerList.append(a);
    })
 }
 function filter(){
    let flowerList = document.querySelector(".filter");
    flowerList.innerHTML = ""
    let filtered = flowers.map((flower, index) => ({ name: flower, price: prices[index] })) .filter(item => item.price < 500);
     filtered.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} — ₹${item.price}`;
        flowerList.append(li);
    });
 }

const sum  = prices.reduce((acc,x) => acc+x,0);
document.getElementById("res").innerText = sum;