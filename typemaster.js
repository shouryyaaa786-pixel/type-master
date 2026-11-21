let text=document.querySelector(".input-para");

let btn=document.querySelector(".start");
let btn1=document.querySelector("#btn");

btn1.addEventListener("click",function(){
    text.hidden=!text.hidden;
});



function StartGame(){
    let para=text.value.trim();
    if(para.trim()===" "){
        alert("Enter a valid paragraph");
        return;
    }
    localStorage.setItem("paragraph",para);
    window.location.href="game.html";

}
// if(!para){
//     window.location.href="typemaster.html";
// }
btn.addEventListener("click",StartGame);

