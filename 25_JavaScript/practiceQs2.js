let btn = document.createElement("button");
btn.innerHTML = "Click to change color";

let body = document.querySelector("body");
body.appendChild(btn);

btn.addEventListener("click",function(){
    this.style.backgroundColor = "green";
})