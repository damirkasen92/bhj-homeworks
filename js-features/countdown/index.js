let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const countdown = () => {  
  if (seconds.textContent == 0) {
    if (minutes.textContent == 0) {
      if (hours.textContent == 0) {
        alert("Вы победили в конкурсе!");
        let link = document.getElementById("downloadImg");
        link.click();
        clearInterval(countInterval);
        return;
      }
      hours.textContent--;
      minutes.textContent = 60;

      if (hours.textContent < 10) hours.textContent = "0" + hours.textContent;
    }
    minutes.textContent--;
    seconds.textContent = 59;

    if (minutes.textContent < 10) minutes.textContent = "0" + minutes.textContent;

  } else {
    seconds.textContent--;

    if (seconds.textContent < 10) seconds.textContent = "0" + seconds.textContent;
  }
}

const countInterval = setInterval(countdown, 1000);