// Slecting elements
const currentDate = document.getElementById("date");
const currentTime = document.getElementById("time");

const taskTimer = document.getElementById("timer");

const setTimerSection = document.getElementById("set--timer-section");
const taskMinutesInput = document.getElementById("task--minutes--input");
const taskSecondsInput = document.getElementById("task--seconds--input");
const setbtn = document.getElementById("set--btn");

const startPausebtn = document.getElementById("start--pause--btn");
const stopbtn = document.getElementById("stop--btn");
const resetbtn = document.getElementById("reset--btn");

let timer = 25;
let pauseTimer = 5;
let intervalStart = null;

// Date section and time

const getTime = () => {
  const cDate = new Date();
  const monthsLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (currentDate.innerText === "") {
    currentDate.innerText = `${cDate.getDate()} ${
      monthsLong[cDate.getMonth()]
    } ${cDate.getFullYear()}`;
  }

  currentTime.innerText = `${formatTime(cDate.getHours())}:${formatTime(
    cDate.getMinutes()
  )}:${formatTime(cDate.getSeconds())}`;
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

getTime();
setInterval(getTime, 1000);

// Countdown

const countdown = () => {
  let pomotimer = timer * 60 - 1;
  let timeMin = Math.floor(pomotimer / 60);
  let timeSec = Math.floor(pomotimer % 60);

  taskTimer.innerText = `${formatTime(timeMin)}:${formatTime(timeSec)}`;
  timer = pomotimer / 60;

  return timer;
};

const startPauseFunction = (event) => {
  // Change The if statement with the check
  if (intervalStart === null) {
    countdown();
    intervalStart = setInterval(countdown, 1000);
    startPausebtn.innerHTML = "Pause";
  } else {
    resetTaskInterval();
    intervalStart = null;
  }
};

const stopTimer = () => {
  timer = 5;
  resetTaskInterval();
  taskTimer.innerText = `${formatTime(timer)}:${"00"}`;
};

const resetTimer = (event) => {
  resetTaskInterval();
  // if the target id is equal to reset change reset
  if (event.target.id === "reset--btn") {
    timer = 25;
    taskTimer.innerText = `${timer}:${"00"}`;
  }

  if([...setTimerSection.classList].includes('hidden'))setTimerSection.classList.toggle("hidden");
  
};

const resetTaskInterval = () => {
  startPausebtn.innerHTML = "Start";
  clearInterval(intervalStart);
  intervalStart = null;
};

const setTimer = () => {
  let minutes = taskMinutesInput.value;
  let seconds = taskSecondsInput.value;

  timer = minutes * 60 + seconds;
  taskSecondsInput.value = "";
  taskMinutesInput.value = "";
  timer = timer <= 0 ? 25 * 60 : timer > 3600 ? 3600 : timer;

  let timeMin = Math.floor(timer / 60);
  let timeSec = Math.floor(timer % 60);

  taskTimer.innerText = `${formatTime(timeMin)}:${formatTime(timeSec)}`;
  timer = timer / 60;

  setTimerSection.classList.toggle("hidden");

  resetTaskInterval();
};

setbtn.addEventListener("click", setTimer);

startPausebtn.addEventListener("click", startPauseFunction);
stopbtn.addEventListener("click", stopTimer);
resetbtn.addEventListener("click", resetTimer);

/*
const playSound = () => {
  if (soundList[code]) {
    audiOutput.src = `./Project03/${soundList[code]}.wav`;
    audiOutput.currentTime = 0;
    audiOutput.play();
    findFromCode(code);
  }
};
*/
