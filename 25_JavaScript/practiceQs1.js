let h1 = document.querySelector("h1");

h1.addEventListener("mouseout",function(){
    this.style.color = "blue";
});

let inp = document.querySelector("input");

inp.addEventListener("keypress", function(){
    console.log("A key was pressed!");
});

let img = document.querySelector("img");

img.addEventListener("load",function(){
    alert("Image Loaded!");
});


window.addEventListener("scroll",function(){
    console.log("Scrolled!");
});