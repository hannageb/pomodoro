
let timer;
let workCount = 0
let minutes = 25;
let seconds = 0;
let isPaused = false;
const alarmSound = document.createElement("audio");
alarmSound.src = "src/assets/alarm-sound.mp3";

function startTimer(){
  timer = setInterval(updateTimer, 1000)
  console.log("Timer Started!")
  workCount++;
}
/**
if (workCount % 4 === 0){
  function startBreak(){
    timer = setInterval(updateTimer, 1000)
  }
}
 */

function updateTimer(){
  const timerElement = document.getElementById("timer")
  timerElement.textContent = `${String(minutes)}:${String(seconds)}`
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    alarmSound.play();
  } else if (!isPaused){
    if (seconds > 0){
      seconds--;
    } else{
      seconds = 59;
      minutes--;
    }
  }
}

function pauseTimer(){
  const pauseButton = document.querySelector('pause');
  console.log("Timer Paused!")
  isPaused = !isPaused;
  if (isPaused){
    clearInterval(timer);
    pauseButton.textContent = 'Resume';
  } else {
    startTimer();
    pauseButton.textContent = 'Pause';
  }
}

function resetTimer(){
  const timerElement = document.getElementById("timer")
  const pauseButton = document.querySelector('pause');
  console.log("Timer Reset!")
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    isPaused = false;
    timerElement.textContent = `${String(minutes)} : ${String(seconds)}`
    pauseButton.textContent = 'Pause';
    startTimer()
}

