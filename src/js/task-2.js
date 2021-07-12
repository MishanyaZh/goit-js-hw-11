import '../sass/main.css';
import Swal from 'sweetalert2';

const inputDataSelector = document.querySelector('#date-selector');
const startCountdown = document.querySelector('[data-start]');

startCountdown.addEventListener('click', startTimer);

inputDataSelector.addEventListener('change', isDateInTheFuture);

startCountdown.disabled = true;

function startTimer(evt) {

    startCountdown.disabled = true;
    const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const selectDate = Date.parse(inputDataSelector.value);
        const deltaTime = selectDate - currentTime;
        convertMs(deltaTime);

    }, 1000);
}

function isDateInTheFuture(evt) {

    if (Date.parse(inputDataSelector.value) >= Date.now() ) {
        startCountdown.disabled = false;
        return;
    } Swal.fire({
        icon: 'error',
        text:'Please choose a date in the future'})
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    const daysRef = document.querySelector('[data-days]');
    const hoursRef = document.querySelector('[data-hours]');
    const minutesRef = document.querySelector('[data-minutes]');
    const secondsRef = document.querySelector('[data-seconds]');

    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minutesRef.textContent = `${minutes}`;
    secondsRef.textContent = `${seconds}`;

    return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}