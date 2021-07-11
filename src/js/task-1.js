import '../sass/main.css';

// В HTML есть кнопки Start, Stop, <body>
const startBtnRef = document.querySelector(".start-btn");
const stopBtnRef = document.querySelector(".stop-btn");
const bodyRef = document.querySelector('body');

// после нажатия кнопки Start раз в секунду меняет цвет фона <body>
startBtnRef.addEventListener('click', start);
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
stopBtnRef.addEventListener('click', stop);

let intervalId = null;
let isActive = false;

function start(evt) {

    if (isActive) {
        return;
    }
// Start была не активна.
    startBtnRef.disabled = true;
    isActive = true;

    intervalId = setInterval(() => {
        // function Change body color
        bodyChangeColor();
    }, 1000);
}

function stop(evt) {
    clearInterval(intervalId);
    intervalId = null;
    isActive = false;
    startBtnRef.disabled = false;
}

function bodyChangeColor() {
    bodyRef.style.backgroundColor = getRandomHexColor();
}

// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}