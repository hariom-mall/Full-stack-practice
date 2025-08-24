let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Click me";
document.querySelector('body').append(input);
document.querySelector('body').append(btn);



input.setAttribute('placeholder', "username");
btn.setAttribute('id','btn');



let button = document.querySelector('#btn');
btn.style.color = "white";
btn.style.backgroundColor = "black";


let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";
h1.style.color = "purple";
document.querySelector('body').append(h1);



let para = document.createElement('p');
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(para);