let timer; // Variable to store the interval
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    const startStopButton = document.getElementById('startStop');

    if (startStopButton.textContent === 'Start') {
        startStopButton.textContent = 'Stop';
        timer = setInterval(updateTime, 1000);
    } else {
        startStopButton.textContent = 'Start';
        clearInterval(timer);
    }
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTime();
    document.getElementById('startStop').textContent = 'Start';
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('display').textContent = timeString;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}
