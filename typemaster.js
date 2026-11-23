let text=document.querySelector(".input-para");

let btn=document.querySelector(".start");
let btn1=document.querySelector("#btn");
let apibtn=document.querySelector("#apibtn");


apibtn.addEventListener("click",async function(){
    try{
let response= await fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary");
if(!response.ok){
    throw new Error("paragraph not added");
}

let data= await response.json();
text.hidden=false;
text.value=data.extract;
}catch(error){
    console.log(error);
    alert("inable to get para");

}
});

btn1.addEventListener("click",function(){
    text.hidden=!text.hidden;
});
function formatpara(para){
    return para
    .trim()
    .replace(/([.,!?;:])\s*/g, "$1 ")
    .trim();
}



function StartGame(){
    let para=formatpara(text.value);

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

