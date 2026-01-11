// array = a variable like structure that can hold
// more than 1 value

let fruits = ["apple", "orange", "banna"];

// fruits.push("coconut");
// // push add things to end of array
// fruits[0] = "coconut";
// console.log(fruits);

// fruits.pop();
// // gets ride of the last element in the array
// console.log(fruits);

// fruits.unshift("mango");
// //adds element to beggining
// console.log(fruits);
// fruits.shift();
// // gets ride of the first element in an array
// console.log(fruits);

// let numOfFruits = fruits.length;
// // Gets the length of an array
// console.log(numOfFruits);

// let index = fruits.indexOf("apple");
// // indexOf finds the index of element. If the element is not there it returns -1
// console.log(index);

// for(let i = 0; i < fruits.length; i++) {
//     console.log(i);
//     console.log(fruits[i]);
// }

// for(let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }

// Enhanced for loop for arrays below:

// for(let fruit of fruits) {
//     console.log(fruit);
// }

fruits.sort().reverse();

for(let fruit of fruits) {
    console.log(fruit);
}