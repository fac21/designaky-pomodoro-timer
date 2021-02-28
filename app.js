// Slecting elements
const currentDate = document.getElementById("date");
const currentTime = document.getElementById("time");

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
  currentDate.innerText = `${cDate.getDate()} ${
    monthsLong[cDate.getMonth()]
  } ${cDate.getFullYear()}`;
  currentTime.innerText = `${cDate.getHours()}:${cDate.getMinutes()}:${cDate.getSeconds()}`;
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
