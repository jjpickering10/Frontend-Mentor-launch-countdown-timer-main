const updateSeconds = document.getElementById("seconds-countdown");
const updateMinutes = document.getElementById("minutes-countdown");
const updateHours = document.getElementById("hours-countdown");
const updateDays = document.getElementById("days-countdown");

const flipSeconds = document.querySelector(".seconds");
const flipMinutes = document.querySelector(".minutes");
const flipHours = document.querySelector(".hours");
const flipDays = document.querySelector(".days");

let rotateSecond = 0;
let rotateMinute = 0;
let rotateHour = 0;
let rotateDay = 0;

let flipSecond;
let flipMinute;
let flipHour;
let flipDay;

let newTime = new Date("Thu Jun 27 2021 00:00:00").getTime();

function countDown() {
  const currentTime = new Date().getTime();
  const countdownTime = newTime - currentTime;
  if (countdownTime < 1000) {
    newTime += 1209600000;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countdownSeconds = Math.floor((countdownTime % minute) / second);
  const countdownMinutes = Math.floor((countdownTime % hour) / minute);
  const countdownHours = Math.floor((countdownTime % day) / hour);
  const countdownDays = Math.floor(countdownTime / day);

  updateSeconds.innerText = countdownSeconds;
  updateMinutes.innerText = countdownMinutes;
  updateHours.innerText = countdownHours;
  updateDays.innerText = countdownDays;

  if (flipSecond === countdownSeconds) {
    return;
  } else {
    rotateSecond += 360;
    flipSeconds.style.transform = `rotateX(${rotateSecond}deg)`;
  }

  if (flipMinute === countdownMinutes) {
    rotateMinute += 360;
    flipMinutes.style.transform = `rotateX(${rotateMinute}deg)`;
    flipMinute -= 1;
  } else if (countdownMinutes === 0) {
    flipMinute = 59;
  } else {
    flipMinute = countdownMinutes - 1;
  }

  if (flipHour === countdownHours) {
    rotateHour += 360;
    flipHours.style.transform = `rotateX(${rotateHour}deg)`;
    flipHour -= 1;
  } else if (countdownHours === 0) {
    flipHour = 23;
  } else {
    flipHour = countdownHours - 1;
  }

  if (flipDay === countdownDays) {
    rotateDay += 360;
    flipDays.style.transform = `rotateX(${rotateDay}deg)`;
    flipDay -= 1;
  } else {
    flipDay = countdownDays - 1;
  }
}

setInterval(countDown, 1000);
