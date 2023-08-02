// Function to create binary elements
function createBinary() {
    const binary = document.createElement("div");
    binary.classList.add("binary");
    binary.textContent = Math.random() < 0.5 ? "0" : "1";

    // Random position and animation delay
    const randomX = Math.random() * 100;
    const randomDuration = 2 + Math.random() * 25;

    binary.style.left = `${randomX}%`;
    binary.style.animationDuration = `${randomDuration}s`;

    document.getElementById("binary-rain").appendChild(binary);
}

// Generate binary elements every 100ms
setInterval(createBinary, 100);
let days = 1;
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateTimer() {
  const timerElement = document.getElementsByClassName("timer")[0];

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    // Timer reached 0, show the ransomware message and stop the interval
    clearInterval(timerInterval);
    showRansomwareMessage();
  } else {
    if (seconds <= 0) {
      if (minutes <= 0) {
        if (hours <= 0) {
          if (days > 0) {
            days--;
            hours = 23;
            minutes = 59;
            seconds = 59;
          }
        } else {
          hours--;
          minutes = 59;
          seconds = 59;
        }
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    // Format the timer and update the timer element
    const formattedTimer = `${days}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    timerElement.textContent = formattedTimer;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
const timerInterval = setInterval(updateTimer, 1000);


function openPopup() {
    const popupWidth = 2000;
      const popupHeight = 1000;
      const randomX = Math.floor(Math.random() * (window.innerWidth - popupWidth));
      const randomY = Math.floor(Math.random() * (window.innerHeight - popupHeight));

      const features = `width=${popupWidth},height=${popupHeight},left=${randomX},top=${randomY}`;
      window.open('test.html', '_blank', features);
}