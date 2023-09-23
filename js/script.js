const hour = document.querySelector(".h");
const min = document.querySelector(".m");
const sec = document.querySelector(".s");

const hoursNumber = document.querySelector(".hours");
const minutesNumber = document.querySelector(".minutes");

const inp = document.querySelector("#check");
const audio = document.querySelector("audio");

function clock() {
  let time = new Date();
  let second = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours = time.getHours() * 30;
  hour.style = `transform: rotate(${hours + minutes / 12}deg)`;
  min.style = `transform: rotate(${minutes}deg)`;
  sec.style = `transform: rotate(${second}deg)`;

  hoursNumber.textContent = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  minutesNumber.textContent = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  if (inp.checked) {
    audio.play();
  } else {
    audio.pause();
  }

  setTimeout(() => {
    clock();
  }, 1000);
}
clock();

const links = document.querySelectorAll(".tabsItem");
const tabs = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let x = 0; x < links.length; x++) {
      links[x].classList.remove("active");
      tabs[x].classList.remove("active");
    }
    links[i].classList.add("active");
    tabs[i].classList.add("active");
  });
}

const watchBtn = document.querySelector(".stopwatch__btn");
const secondWatch = document.querySelector(".stopwatch__seconds");
const minutesWatch = document.querySelector(".stopwatch__minutes");
const hoursWatch = document.queryCommandIndeterm(".stopwatch__hours");

watchBtn.addEventListener("click", function () {
  if (this.textContent == "start") {
    this.textContent = "stop";
    let i = 0;
    setTimeout(() => stopWatch(this, i), 1000);
  } else if (this.textContent == "stop") {
    this.textContent = "clear";
  } else {
    this.textContent = "start";
    secondWatch.textContent = 0;
    minutesNumber.textContent = 0;
    hoursWatch.textContent = 0;
  }
});
function stopWatch(el, i) {
  if (el.textContent == "stop") {
    if (i == 59) {
      i = 0;
      secondWatch.textContent = i;
      if (minutesWatch.textContent == 59) {
        minutesWatch.textContent = 0;
        hoursWatch.textContent++;
      } else {
        minutesWatch.textContent++;
      }
    } else {
      i++;
      secondWatch.textContent = i;
    }
    setTimeout(() => {
      stopWatch(el, i);
    }, 1000);
  }
}
