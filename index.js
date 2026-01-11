// spread operator = ... allows an iterable such as an
// array or string to be expanded
// into seprate elements
// (unpacks the elements)

// let numbers = [1,2,3,4,5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log(max)
// console.log(min);

// let username = "Brandon Riggione";
// let letters = [...username].join("-")

// console.log(letters);

let fruits = ["apple", "orange", "banna"];
let vegtables = ["carrots", "celary", "potatoes"];
let foods = [...fruits, ...vegtables, "eggs", "milk"];
console.log(fruits);
console.log(foods) ;


