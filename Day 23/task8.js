function add(){
    let a = document.getElementById("ul");
    let b = document.createElement("li");
    b.innerText = prompt();
    a.appendChild(b);
}

function remove(){
    let a = document.getElementById("ul");
    
    if (a.firstElementChild) {  // check if there’s at least one list item
        a.removeChild(a.firstElementChild);
    } else {
        alert("No items to remove!");
    }
}