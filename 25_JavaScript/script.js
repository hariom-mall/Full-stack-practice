let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");

btn.addEventListener("click",function(){
    let color = generateColor();
    h1.innerHTML = color;
    div.style.backgroundColor = color;
});

function generateColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}