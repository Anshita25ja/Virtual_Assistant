let text_written = document.getElementById("text");
let mic_on = document.getElementById("on");
let mic_off = document.getElementById("off");
// let back = document.getElementById("pause");
// let song_on = document.getElementById("play");
let mainpage=document.getElementById("mainpage");
let video1=document.getElementById("video1");
// let video2=document.getElementById("video2");


let cnt = 0;
//speech to text

speech_to_text = () => {
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  let recognization = new SpeechRecognition();
  recognization.start();

  // convert voice to speech
  recognization.onresult = (e) => {
    var transcript = e.results[0][0].transcript;
    //insert into textarea
    text_written.value = transcript;
  };


  //after the mic start
  recognization.onstart = () => {
    text_written.innerHTML = "Listening...";
    mic_on.style.color = "red";
    mic_on.style.border = "1px solid red";
  }
}
function Text_to_Speech(txt) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[4];
  msg.volume = 1; // From 0 to 1
  msg.rate = 1; // From 0.1 to 10
  //  msg.pitch = 0.2; // From 0 to 2
  msg.pitch = 0.7; // From 0 to 2
  msg.text = txt;
  msg.lang = "En";
  speechSynthesis.speak(msg);
};

let Main = () => {
  let input_value = text_written.value;

  if (input_value == "Listening...") {
      Text_to_Speech("Please say something");
      // input_value= "     ";

    if (cnt < 1) {
      Both();
      cnt++;
    }
    else {
      cnt = 0;
    }
  }

  else if (true) {
    if (input_value.includes("search Google") == true) {
      let main_text = input_value.slice(6);
      window.open(`https://www.google.com/search?q=${main_text}`);
      Text_to_Speech(main_text);
      text_written.value = "     ";
 }
    else if (input_value.includes("open YouTube") == true) {
      let main_text = input_value.slice(4);
      window.open(`https://www.youtube.com/watch?v=${main_text}`);
      Text_to_Speech(main_text);
      text_written.value = "     ";

    }
    else if (input_value.includes("open my playlist") == true) {
      window.open(`song.html`);

    }
  

    else {
      Text_to_Speech(input_value);
      setTimeout(() => {
        text_written.value = "     ";

      }, 10000);

    }
  }
}


mic_on.addEventListener('click', on);
function on(){
  let power_on = new Audio('Songs/on.mp3');
  power_on.play();
}




mic_off.addEventListener('click', off);
function off() 
{     
   let power_off = new Audio('Songs/off.mp3');
power_off.play();

  if (text_written.value) {
    text_written.value = "     ";
    text_written.value = "Stop"; 
   }
  else {
    text_written.value = "Stop";
  }
  setTimeout(() => {
    
    text_written.value = "     ";
  }, 2000);

  }






let Both = () => {
 
  
speech_to_text();
setTimeout(() => {

    Main();
  }, 7000);

};



function speech(){
    Main();
 }



