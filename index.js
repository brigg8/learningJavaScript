// function = A section of reusabl;e code. 
// Declare code once, use it whenever you want. 
// Call the function to execute that code.

// function happyBirthday(username, age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday dear ${username}!`);
//     console.log("Happy birthday to you!");
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("Brandon", 25);
// happyBirthday("Spongebob", 30);
// happyBirthday("Patrick", 37);

function add(x, y){
    // let result = x + y;
    // return result;
    return x + y;
}

function subtract(x, y){
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
    // if(email.includes("@")) {
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("brandonriggione@fakegmail.com"));

