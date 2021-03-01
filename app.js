// Slecting elements
const currentDate = document.getElementById("date");
const currentTime = document.getElementById("time");

const taskTimer = document.getElementById("task--timer");
const startPausebtn = document.getElementById("start--pause--btn");
const stopbtn = document.getElementById("reset--btn");

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

// Countdown

let timer = 25;
let intervalStart = null;

const countdown = () => {
  timer = timer * 60 - 1;
  let timeMin = Math.floor(timer / 60);
  let timeSec = Math.floor(timer % 60);

  taskTimer.innerText = `${formatTime(timeMin)}:${formatTime(timeSec)}`;
  console.log(timeMin, timeSec);
  timer = timer / 60;

  return timer;
};

const startPauseFunction = (event) => {
  // Change The if statement with the check
  if (intervalStart === null) {
    intervalStart = setInterval(countdown, 1000);
    startPausebtn.innerHTML = "Pause";
  } else {
    resetTimer(event);
    clearInterval(intervalStart);
    startPausebtn.innerHTML = "Start";
    intervalStart = null;
  }
};

const resetTimer = (event) => {
  clearInterval(intervalStart);
  startPausebtn.innerHTML = "Start";
  intervalStart = null;
// if the target id is equal to reset change reset
  if (event.target.id === "reset--btn") {
    timer = 25;
    taskTimer.innerText = `${timer}:${"00"}`;
  }
};

startPausebtn.addEventListener("click", startPauseFunction);
stopbtn.addEventListener("click", resetTimer);
