// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const pressTalk = document.querySelectorAll("button");
  const faceImage = document.querySelector("img[alt='Smiling face']");

  const inputTxt = document.getElementById("text-to-speak");
  const voiceSelect = document.querySelector("select");

  // populate select with voice options
  function populateVoices(){
    if (typeof speechSynthesis === "undefined"){
      return;
    }
  }

  const voices = speechSynthesis.getVoices();

  for(let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if(voices[i].default){
      option.textContent += " - DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);

  }

  populateVoices();
  

  if (typeof speechSynthesis !== "undefined" && 
      speechSynthesis.onvoiceschanged !== undefined){
        speechSynthesis.onvoiceschanged = populateVoices;
      }

  window.addEventListener("load", function(){
    
    pressTalk[0].addEventListener("click", function(event){
      const synth = window.speechSynthesis;
      const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
      for(let i = 0; i < voices.length; i++){
        if(voices[i].name === selectedOption){
          utterThis.voice = voices[i];
        }
    
    
      }


    synth.speak(utterThis);

    utterThis.addEventListener('start', function(){
      if(synth.speaking){
        faceImage.src = "assets/images/smiling-open.png";
      }

    });

    utterThis.addEventListener('end', function(){
      faceImage.src = "assets/images/smiling.png";
    });

    
    

    }
    
    );
    
    //faceImage.src = "assets/images/smiling.png";
    

  }

  );

}