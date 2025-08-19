const arrayAverage = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

let arr = [1, 2, 3, 4, 5];
console.log(arrayAverage(arr));

//ques2
const isEven = (n) => (n % 2 === 0);

let input=prompt("Enter a number to check if it's even or odd:");
console.log(isEven(input) ? "Even" : "Odd");

//ques3

const object = {
    message : "Hello, World!",

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);  //this = window as it is treated as function and not method whose scope is global

//ques4

let length = 4;   //defined with let and hence not treated as global

function callback() {
    console.log(this.length); // window.length = 0 {predefined}
}

const object1 = {
    length: 5,
    method(callback) {
        callback();
    },
};

object1.method(callback);
