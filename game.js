let para=localStorage.getItem("paragraph");
let characters=para.split("");

let text=document.querySelector(".text");

text.innerHTML="";

characters.forEach(function(char){
    let span=document.createElement("span");

    span.textContent=char;
    text.appendChild(span);
});