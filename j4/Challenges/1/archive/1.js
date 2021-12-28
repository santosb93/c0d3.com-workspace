const containerWatch = document.querySelector(".container--watch");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const day = document.querySelector(".day");
const optionsDate = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
const optionsWeekday = {
  weekday: "long",
};
const optionsTime = {
  hour12: false,
};
let thisSecond = 0;
let clicked = false;

/**
 * Add event listener to the watch. If the watch time window is clicked it will take
 * the full screen of the watch
 */
containerWatch.addEventListener("click", () => {
  if (!clicked) {
    containerWatch.classList.remove("unclicked");
    containerWatch.classList.add("clicked");
    clicked = true;
  } else {
    containerWatch.classList.remove("clicked");
    containerWatch.classList.add("unclicked");
    clicked = false;
  }
});

/**
 * This function gets the time
 */
const getTime = () => {
  const thisDate = new Date();
  let thisTime = `${thisDate.getHours() % 12}:`;
  if (parseInt(thisDate.getMinutes()) < 10) thisTime += `0`;
  time.innerText = thisTime + `${thisDate.getMinutes()}`;

  day.innerText = thisDate.toLocaleString("en-US", optionsWeekday);
  date.innerText = thisDate.toLocaleString("en-US", optionsDate);
  thisSecond = thisDate.getSeconds();
};

//getTime when the program is run
getTime();

//update the time every minute
setInterval(getTime, 1000 * (60 - thisSecond));
