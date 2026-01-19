const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

//with button in index.html being before image src
// myBtn.addEventListener("click", event => {
//     if(myImg.style.display === "none"){
//         myImg.style.display = "block";
//         myBtn.textContent = "Hide";

//     }
//     else{
//         myImg.style.display = "none";
//         myBtn.textContent = "Show";
//     }
// });

//with button in index.html being after image src and want to reserve space
//                       change it to visibility
myBtn.addEventListener("click", event => {
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myBtn.textContent = "Hide";

    }
    else{
        myImg.style.visibility = "hidden";
        myBtn.textContent = "Show";
    }
});