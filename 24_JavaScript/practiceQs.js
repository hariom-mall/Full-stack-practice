let p = document.createElement('p');
p.innerText = "Hey, I'm red!";
document.querySelector("body").append(p);
p.classList.add("red");




let h3 = document.createElement("h3");
h3.innerText = "Hey I'm blue!";
document.querySelector("body").append(h3);
h3.classList.add("blue");



let div = document.createElement("div");
let h1 = document.createElement("h1");
let para = document.createElement("p");

h1.innerText = "I'm in a div";
para.innerText = "ME TOO!";
    

div.classList.add("box");

div.append(h1);
h1.classList.add("red");
div.append(para);
para.classList.add("blue");

document.querySelector("body").append(div);



