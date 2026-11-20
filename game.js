let para=localStorage.getItem("paragraph");
if(!para){
    window.location.href = "typemaster.html";
}
let characters=para?para.split(""):[];


let text=document.querySelector(".text");
let mis=document.querySelector(".mistake");
let wordpm=document.querySelector(".wpm");
let acc=document.querySelector(".accuracy");
let tmr=document.querySelector(".timer");
let mbtn=document.querySelector(".mmenu");
let pse=document.querySelector(".pause");

mbtn.addEventListener("click",function(){
    window.location.href="typemaster.html";
    // localStorage.removeItem("paragraph");
})
text.innerHTML="";

characters.forEach(function(char){
    let span=document.createElement("span");

    span.textContent=char;
    text.appendChild(span);
});



let curridx=0;
let mistake=0;
let charcnt=0


let stime=null;


let accuracy= 100

 setInterval(function(){

    if(stime===null)return;
        let second=(Date.now()-stime)/1000;
        if(second>0){
        let wpm=(charcnt*60)/(5*second);
        wordpm.textContent=Math.round(wpm);
        }
        tmr.textContent=((Date.now()-stime)/1000).toFixed(1);

    },1000);

window.addEventListener("keydown",function(dets){

    if(stime===null){
        stime=Date.now();
    }

    if(dets.key.length !==1) return;

if(curridx >= characters.length) return;
// ctime=Date.now();
//    seconds=((ctime-stime)/1000);
//    minutes=seconds/60


    // if(dets.key=="CapsLock"||dets.key=="NumLock"){

    // }

    else if(dets.key!=characters[curridx]){
       
            mistake++;
            mis.textContent=mistake;
        console.log("mistake");
        accuracy=(charcnt/(charcnt+mistake)*100);

        
    }
    
    else{
        text.children[curridx].style.color="green";
        curridx++;
        charcnt++;
        

accuracy=(charcnt/(charcnt+mistake)*100);
        // wpm=(charcnt/(5*minutes))


    }

   

acc.textContent=accuracy.toFixed(2) + "%";
    // wordpm.textContent=wpm;
    // console.log(charcnt);
    // console.log(dets.key);
     console.log(characters[curridx]);
    //  console.log(seconds);
    //  console.log(wpm);
    

})



