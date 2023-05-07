// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById("horn-select");
  const hornImage = document.querySelector("main img[alt='No image selected']");

  const volumeControl = document.getElementById("volume");
  const volumeSymbol = document.querySelector("main img[alt='Volume level 2']");
  const audio = document.querySelectorAll("audio");

  let audioElement = new Audio(audio.src);

  const playSound = document.querySelectorAll("button");
  
  const jsConfetti = new JSConfetti();

  selectHorn.addEventListener("change", function(event){
    switch(event.target.value){
      case 'air-horn':
        hornImage.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
        break;
      case 'car-horn':
        hornImage.src = "assets/images/car-horn.svg";
        audio.src = "assets/audio/car-horn.mp3";
        break;
      case 'party-horn':
        hornImage.src = "assets/images/party-horn.svg";
        audio.src="assets/audio/party-horn.mp3";
        break;
    }
  } 
  );

  volumeControl.addEventListener("change", function(event){
    if((event.target.value < 33) && (event.target.value > 1)){
      audio.volume = (event.target.value /100);
      volumeSymbol.src = "assets/icons/volume-level-1.svg";
    }
    else if((event.target.value > 33) && (event.target.value < 67)){
      audio.volume = (event.target.value/100);
      audioElement.volume = (event.target.value/100);
    }
    else if ((event.target.value > 67)){
      audio.volume = (event.target.value /100);
      volumeSymbol.src = "assets/icons/volume-level-3.svg";
    }
    else if(event.target.value == 0){
      audio.volume = 0;
      volumeSymbol.src = "assets/icons/volume-level-0.svg";
    }

  }

  );

playSound[0].addEventListener("click", function(event){
  console.log(audio.src);
  console.log(audio.volume);
  console.log(audioElement.volume);

  audioElement = new Audio(audio.src);
  // default audio volume
  if(audio.volume !== undefined){
    audioElement.volume = audio.volume; 
  }
  else{
    audio.volume = .5;
    audioElement.volume = audio.volume;
  }
  if(audio.src == "assets/audio/party-horn.mp3"){
    audioElement.play();

    jsConfetti.addConfetti();
  }
  else{
    audioElement.play();
  }
  

}
);


  


}