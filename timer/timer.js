console.log("Hello world!");


const FULL_DASH_ARRAY = 283;
// Den orange ring tilføres
const COLOR_CODES = {
  info: {
    color: "orange"
  }
};
// Start tiden er 10sek og den gået tid er 0 og dette vil trækkes fra Time_limet
const TIME_LIMIT = 10;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
// Den orange ring tilføres
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">

<! ––Her er der lavet et SVG element ––>
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <! ––Her er der lavet en path som skal være med til at lave den ring, som ligger oven på den grønne ring ––>
        <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
   <! ––I denne span er der den resterende tid og her bruges formatTimeLeft ––>
   <span id="base-timer-label" class="base-timer__label">${formatTime(
     timeLeft
   )}</span>
 </div>
 `;


startTimer();
// Her tænker jeg der skal laves noget ift. den der zzz side
function onTimesUp() {
  // Move to a new location or you can do something else
      window.location.href = "../konfetti/konfetti.html";
}
// Her sættes intervalet der minstes hver sek. den tid der er tilbage. Der vises den nye timeLeft. Og tiden opdateres.
function startTimer() {
  timerInterval = setInterval(() => {
    // Den tid der er gået øges med 1
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    // Her opdateres tiden, så man kan se hvor meget der er tilbage ( lable opdateres)
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
      // Her divideres den resterende tiden med 60
  const minutes = Math.floor(time / 60);
      // Her bruges modulus operatoren så man kan se hvad der er tilbage
  let seconds = time % 60;
      // Hvis seconds er mindre end 10 så skal der tælles ned til 0
  if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    // outputtet er så i formatet MM:SS
  return `${minutes}:${seconds}`;
  }


// Finder ud af hvor hvilken brøkdel der er tilbage ( dividerer tiden der er tilbage med timeLimit)
function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  // rawTimeFraction tilføres da vi ikke vil have at der er et sek. tilsidst inden den når at slutte ringen
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
//Opdatere dasharry værdien
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
