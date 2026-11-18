let text=document.querySelector(".input-para");

let btn=document.querySelector(".start");
let btn1=document.querySelector("#btn");

btn1.addEventListener("click",function(){
    text.hidden=false;
});

btn.addEventListener("click",function(){
    console.log("clicked");
    window.location.href="game.html";
})