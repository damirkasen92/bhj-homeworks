let cookie = document.getElementById("cookie"),
    cookieCount = document.getElementById("clicker__counter"),
    clickSpeed = document.getElementById("click__speed"),
    count = 0,
    started,
    timeout;

function counting() {
  clearTimeout(timeout);
  cookieCount.textContent++;
  count++;
  clickSpeed.textContent = clicksPerSecond(started, count).toFixed(2);
  timeout = setTimeout(click, 1000);
  changeSize();
}

function clicksPerSecond(sec, clicks) {
  return clicks / (new Date() - sec) * 1000;
}

function start() {
  started = new Date();
  count = 0;
  cookie.onclick = counting;
}

function changeSize() {
  if (cookieCount.textContent % 2 == 1) {  
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }  
}

function click() {
  cookie.onclick = start;
}  

click();