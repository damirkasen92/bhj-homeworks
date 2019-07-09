let container = document.getElementById('game'),
    wordElement = container.querySelector('.word'),
    winsElement = container.querySelector('.status__wins'),
    lossElement = container.querySelector('.status__loss'),
    timerElement = container.querySelector('.status__timer'),
    currentSymbol,
    inSymbol,
    timeOut,
    interval;

reset();

registerEvents();

function reset() {
    setNewWord();
    winsElement.textContent = 0;
    lossElement.textContent = 0;
}    

function registerEvents() {
    currentSymbol = container.querySelector('.symbol_current');
    inSymbol = document.onkeypress = (event) => {
        if (event.key.toLowerCase().charCodeAt(0) === currentSymbol.textContent.toLowerCase().charCodeAt(0)) { 
            success();
        } else {
            fail();
        }
    };
}

function success() {
    currentSymbol.classList.add('symbol_correct');
    currentSymbol = currentSymbol.nextElementSibling;
    if (currentSymbol !== null) {
        return;
    }

    if (++winsElement.textContent === 10) {
        alert('Победа!');
        reset();
    }
    setNewWord();
}

function fail() {
    if (++lossElement.textContent === 5) {
        alert('Вы проиграли!');
        reset();
    }
    setNewWord();
}

function setNewWord() {
    const word = getWord();
    clearInterval(interval);
    timeOut = word.length;
    timerElement.textContent = timeOut;
    renderWord(word);
    timer(timeOut);
}

function getWord() {
    const words = [
        'bob тест',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
}

function renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    wordElement.innerHTML = html;
    
    currentSymbol = wordElement.querySelector('.symbol_current');
}

function timer(n) {
    interval = setInterval(() => {
        n--;
        timerElement.textContent = n;
        if (n === 0) {
            fail();
        }
    }, 1000);
}