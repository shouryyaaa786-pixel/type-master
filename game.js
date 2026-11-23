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
let rbox=document.querySelector(".result")
let ispaused=false;
let elapsed=0;
let nextq=document.querySelector(".nq");
let re=document.querySelector(".restart")
const getRandomImage = () => `https://picsum.photos/1920/1080?random=${Date.now()}`;

document.body.style.backgroundImage=`url(${getRandomImage()})`;
document.body.style.backgroundSize="fill";
document.body.style.backgroundPosition="";
document.body.style.backgroundRepeat="no-repeat";
mbtn.addEventListener("click",function(){
    window.location.href="typemaster.html";
    // localStorage.removeItem("paragraph");
})
// text.innerHTML="";

function formatpara(para){
    return para
    .trim()
    .replace(/([.,!?;:])\s*/g, "$1 ")
    .trim();
}

characters.forEach(function(char){
    let span=document.createElement("span");

    span.textContent=char;
    text.appendChild(span);
});

nextq.addEventListener("click",async function(){

    try{
        let response= await fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary")

        if(!response.ok){
            throw new Error("Failed to fetch quote");
        }

        let data=await response.json();
        let para = formatpara(data.extract);

        localStorage.setItem("paragraph",para);
        window.location.reload();
    }catch(error){
        console.log(error);
        alert("unable to get next quote");
    }

});

function completion(){

   
  
    pauseTimer();
    stime=null;
    ispaused=true;
    rbox.hidden=false;

    rbox.textContent=`
     
        Test Completed!
        WPM: ${Math.round(wpm)}
        Time: ${second.toFixed(1)} seconds
        Accuracy: ${accuracy.toFixed(2)}%
        Mistakes: ${mistake}`;
        pse.disabled=true;
    console.log("complete");


}

function pauseTimer(){
    if(stime===null)return;
   
    elapsed+=(Date.now()-stime)/1000;
    stime=null;
     clearInterval(timer);


    
}

function resumeTimer(){
    stime=Date.now();
    startTimer();

}
pse.addEventListener("click",function(){
    if(ispaused===false){
        ispaused=true;
        pauseTimer();
        pse.textContent="resume";
    }
    else{
        ispaused=false;
        resumeTimer();
        pse.textContent="pause";

    }
});

let curridx=0;
let mistake=0;
let charcnt=0
let second=0;
let wpm=0;

let stime=null;


let accuracy= 100
let timer=0;
function startTimer(){
    if(curridx >= characters.length) return;

    clearInterval(timer);
  timer=setInterval(function(){

    if(stime===null)return;
        second=elapsed+(Date.now()-stime)/1000;
        if(second>0){
         wpm=(charcnt*60)/(5*second);
        wordpm.textContent="WPM:- "+Math.round(wpm);
        }
        tmr.textContent= "Time:- "+second.toFixed(1);

    },100);
}




window.addEventListener("keydown",function(dets){
if(ispaused===true){return}
   

    if(dets.key.length !==1) return;
    if(stime===null){
        stime=Date.now();
        startTimer();
    };

if(curridx >= characters.length) return;
 
// ctime=Date.now();
//    seconds=((ctime-stime)/1000);
//    minutes=seconds/60


    // if(dets.key=="CapsLock"||dets.key=="NumLock"){

    // }

    else if(dets.key!=characters[curridx]){
       
            mistake++;
            mis.textContent="Mistakes:- "+mistake;
        console.log("mistake");
        accuracy=(charcnt/(charcnt+mistake)*100);

        
    }
    
    else{
         
        text.children[curridx].style.color="white";
        curridx++;
        charcnt++;
         

accuracy=(charcnt/(charcnt+mistake)*100);
        // wpm=(charcnt/(5*minutes))


    }

   

acc.textContent="Accuracy:-"+accuracy.toFixed(2) + "%";

    if(curridx===characters.length){
    completion();
 }
   
    // wordpm.textContent=wpm;
    //  console.log(charcnt);
    // console.log(dets.key);
    //  console.log(characters[curridx]);
//     console.log("Pressed:", JSON.stringify(dets.key));
// console.log("Expected:", JSON.stringify(characters[curridx]));
    //  console.log(seconds);
    //  console.log(wpm);
    

});
re.addEventListener("click",function(){
    window.location.reload();
})



