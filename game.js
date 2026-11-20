let para=localStorage.getItem("paragraph");
let characters=para.split("");

let text=document.querySelector(".text");
let mis=document.querySelector(".mistake");
let wordpm=document.querySelector(".wpm");
let acc=document.querySelector(".accuracy");
let tmr=document.querySelector(".timer");

text.innerHTML="";

characters.forEach(function(char){
    let span=document.createElement("span");

    span.textContent=char;
    text.appendChild(span);
});

let curridx=0;
let mistake=0;
let charcnt=0


let stime=Date.now();
let ctime=Date.now();

let accuracy= charcnt===0?100:(charcnt/(charcnt+mistake)*100);

window.addEventListener("keydown",function(dets){
// ctime=Date.now();
//    seconds=((ctime-stime)/1000);
//    minutes=seconds/60


    if(dets.key=="CapsLock"||dets.key=="NumLock"){

    }

    else if(dets.key!=characters[curridx]){
       
            mistake++;
            mis.textContent=mistake;
        console.log("mistake");
        accuracy=(charcnt/(charcnt+mistake)*100);

        
    }
    
    else{
        curridx++;
        charcnt++;

        // wpm=(charcnt/(5*minutes))


    }

    this.setInterval(function(){
        let second=(Date.now()-stime)/1000;
        let wpm=(charcnt*60)/(5*second);
        wordpm.textContent=Math.round(wpm);
        tmr.textContent=((Date.now()-stime)/1000).toFixed(1);

    },1000);

acc.textContent=accuracy.toFixed(2) + "%";
    // wordpm.textContent=wpm;
    // console.log(charcnt);
    // console.log(dets.key);
     console.log(characters[curridx]);
    //  console.log(seconds);
    //  console.log(wpm);
    

})



