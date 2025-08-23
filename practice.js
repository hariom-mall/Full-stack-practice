// //Ques 1

// let arr = [1, 2, 5];

// let square = arr.map(num => num * num);

// let sum = square.reduce((acc, num) => acc + num);
// console.log(sum/arr.length);


// //Ques2

// let arr = [1, 2, 3, 4, 5];
// let increment = arr.map(num => num + 5);
// console.log(increment);


// //Ques3

// let arr = ['apple', 'banana', 'cherry'];
// let uppercased = arr.map((el)=>el.toUpperCase());
// console.log(uppercased);


// //ques4

// function doubleAndReturnArgs(arr, ...args){
//     let doubled = args.map(num => num * 2);
//     return arr.concat(doubled);
// }

// console.log(doubleAndReturnArgs([1,2,3],4,5)); // [1,2,3,8,10]


//ques5

function mergeObjects(obj1,obj2){
    return {...obj1, ...obj2};
}

const obj1 = {
    name : "hariom",
    age: "21",
};

const obj2 = {
    gender : "M",
    dob : "december",
};

const obj = mergeObjects(obj1,obj2);

console.log(obj);