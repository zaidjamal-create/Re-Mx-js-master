window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});


  var sounds = [
   "./sounds/sound1.mp3",
    "./sounds/sound2.mp3",
    "./sounds/sound3.mp3",
    "./sounds/sound4.mp3",
    "./sounds/sound5.mp3",
    "./sounds/sound6.mp3",
    "./sounds/sound7.mp3"];

    function playstick(){

    var soundfile = sounds[Math.floor(Math.random()*sounds.length)];
    var stick = new Audio(soundfile);
    stick.play();
    }

    document.querySelector("#play-stick").addEventListener('click',playstick);

