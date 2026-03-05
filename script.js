const sounds = ["applause", "boo", "gasp", "tada", "victory"];
const buttonsContainer = document.getElementById("buttons");

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

// Create audio elements
sounds.forEach(sound => {
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

// Create sound buttons
sounds.forEach(sound => {
  const button = document.createElement("button");
  button.innerText = sound;
  button.className = "btn";

  button.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  buttonsContainer.appendChild(button);
});

// Create stop button (WITHOUT btn class)
const stopButton = document.createElement("button");
stopButton.innerText = "Stop";
stopButton.className = "stop";

stopButton.addEventListener("click", stopSounds);

buttonsContainer.appendChild(stopButton);