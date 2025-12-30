let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value = ""; //empty input

});

// does not work for dynamically created elements

// let delBtns = document.querySelectorAll(".delete");
// for(let delBtn of delBtns){
//     delBtn.addEventListener("click", function(){ 
//         let par = this.parentElement;
//         par.remove();
//     });
// }


// event delegation

ul.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }   
});
