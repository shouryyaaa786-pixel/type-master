let text=document.querySelector(".input-para");

let btn=document.querySelector(".start");
let btn1=document.querySelector("#btn");

btn1.addEventListener("click",function(){
    text.hidden=!text.hidden;
});

btn.addEventListener("click",function(){
    console.log("clicked");
    window.location.href="game.html";
});

function StartGame(){
    let para=text.value;
    localStorage.setItem("paragraph",para);
    window.location.href="game.html";

}
if(!para){
    window.location.href="typemaster.html";
}
btn.addEventListener("click",StartGame);

