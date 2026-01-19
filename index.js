// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);
//                 .addEventListener(event, anonymous function);
//                 .addEventListener(event, arrow function);

              

const myBox = document.getElementById("myBox");
// ------- EXAMPLE 1 -------
// myBox.addEventListener(event, callback);

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕"
// }
// myBox.addEventListener("click", changeColor);

// ------- EXAMPLE 2 -------
// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕"
// });

// ------- EXAMPLE 3 -------

// myBox.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕"
// });

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it! 😅"
// });

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click Me 😁"
// });



const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", (event) => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕"
});

myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 😅"
}); 

myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😁"
});