const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const color = document.getElementById("Any color")

red.addEventListener('click',function(){
    document.body.style.backgroundColor = 'red';
})

blue.addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue';
})

green.addEventListener('click',function(){
    document.body.style.backgroundColor = 'green';
})

color.addEventListener('click',function(){
    const color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    document.body.style.backgroundColor = color;
})
