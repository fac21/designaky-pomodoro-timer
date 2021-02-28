// Slecting elements
const currentDate = document.getElementById("date");
const currentTime = document.getElementById("time");

const startPausebtn = document.getElementById("pause--btn");

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

const countdown = () => console.log("Hello");

const startPauseFunction = () => {
  if (startPausebtn.innerHTML === "Start") {
    let intervalStart = setInterval(countdown, 1000);
    startPausebtn.innerHTML = "Pause";
  } else {
    clearInterval(intervalStart);
    startPausebtn.innerHTML = "Start";
  }
};

startPausebtn.addEventListener("click", startPauseFunction);
