// Slecting elements
const currentDate = document.getElementById("date");
const currentTime = document.getElementById("time");

const taskTimer = document.getElementById("task__timer");

const setTimerSection = document.getElementById("timer");
const taskMinutesInput = document.getElementById("timer__input-minutes");
const taskSecondsInput = document.getElementById("timer__input-seconds");
const setbtn = document.getElementById("timer__btn-set");

const startPausebtn = document.getElementById("task__btn-start-pause");
const stopbtn = document.getElementById("task__btn-stop");
const resetbtn = document.getElementById("task__btn-reset");

const bodyElement = document.querySelector(".special");


console.log(document.querySelector("input"))

let timer = 25;
let pauseTimer = 5;
let intervalStart = null;

const imagesArray = [
  "https://images.unsplash.com/photo-1561454260-8559bd155736?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80",
  "https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1587381420844-7bc5f4feec02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=991&q=80",
  "https://images.unsplash.com/photo-1562956509-4e2fbef3afcc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
];

// Background part
const changeBg = ()=>{

  let imageIndex = Math.floor(Math.random()*imagesArray.length);

  bodyElement.style.backgroundImage = `url('${imagesArray[imageIndex]}')`


}




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

  if ([...setTimerSection.classList].includes("hidden"))
    setTimerSection.classList.toggle("hidden");
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


changeBg();

setInterval(changeBg,60000)



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
