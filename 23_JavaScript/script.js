// let arr = [10,20,30];
// let ans = arr.every(num => num % 10 == 0);
// console.log(ans); 

let arr2 = [40, 10, 60];
let ans2 = arr2.reduce((acc, num) => {
    if(acc > num){
        return num;
    }
    return acc;
});
console.log(ans2);