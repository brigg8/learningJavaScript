// variable scope = where a variable is recongnized
// and accessible (local vs global)

// Local variable is only accessible in the function.
// Global is outside of functions
// When looking for a variable called by a function it will look local first and if it doesnt find it locally it will look globally outside the function.
let x = 3;
function1();
function2();
function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

