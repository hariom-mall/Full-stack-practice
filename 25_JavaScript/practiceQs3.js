let inp = document.querySelector("input");

let h1 = document.querySelector("h1");

inp.addEventListener("input",function(){
    let filtered = inp.value.replace(/[^a-zA-Z ]/g, "");
    h1.innerText = filtered;
})