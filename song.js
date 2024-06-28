let s=document.querySelectorAll(".songs");
let play=document.getElementById("play");
let pause=document.getElementById("pause");
let progress=document.getElementById("progress");
let range=document.querySelector("#range");
let minutes=document.getElementById("minute");
let sec=document.getElementById("sec");
let beat=new Audio('Songs/audio1.mp3');
// console.log(s);

s.forEach(function(item){

   item.addEventListener("click",function(){
    //change song
    // console.log(item);
    item.classList.add("sss1");
    let s2=" ";
    beat.pause();

s2=document.querySelector(".sss1").textContent;

console.log(s2);

let array=["Ram Siya Ram - Adipurush 320 Kbps","Namo Namo - Kedarnath 320 Kbps","Sandese Aate Hain - Border 320 Kbps","Jal Rahin Hain - Baahubali - 320 Kbps","Huppa Huiya - Adipurush 320 Kbps","Aarambh - Gulaal 320 Kbps","Deva Shree Ganesha - Agneepath 320 Kbps","Jai Hanuman- Maruti Mera Dosst 320 Kbps","Udd Jaa Kaale Kaava - Gadar 2 320 Kbps","Ram Siya Ram - Adipurush 320 Kbps.mp3"];
array.forEach(function(ii){

if(ii===s2){
    item.classList.remove("sss1");

     beat.src=`Songs/${s2}.mp3`;
    
    if(beat.paused){
       
        play.style.display="none";
        pause.style.display="block";
        beat.play();
    }//if
    else{
        beat.pause();
    }//else
  
play.addEventListener("click",function(){
    beat.play();


   play.style.display="none";
pause.style.display="block";

})//play


pause.addEventListener("click",function(){
    beat.pause();
 play.style.display="block";
pause.style.display="none";
})//pause

range.addEventListener('timeupdate',()=>{
    console.log("ran");
})


}//if

})//array
   })//item
})//s
beat.addEventListener('timeupdate',()=>{
   progress.value=Math.floor(beat.currentTime*100/beat.duration);
   sec.innerText=progress.value%60;
   minutes.innerText="0"+Math.round(progress.value/60);
console.log( minutes.innerText)
})
progress.addEventListener('click',()=>{
    beat.currentTime=Math.floor(progress.value*beat.duration/100)
    console.log(progress.value)
   console.log(beat.currentTime)
   console.log(beat.duration)
})
