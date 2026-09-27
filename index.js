const timeDisplay = document.getElementById("time-display");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let elapsedTime = 0;
let timerInterval = null;

function startStopwatch() {
    if (timerInterval !== null) {
        return;
    }

    const startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10);

    updateButtons();
}

function stopStopwatch() {
    if (timerInterval === null) {
        return;
    }

    clearInterval(timerInterval);
    timerInterval = null;

    updateButtons();
}

function resetStopwatch() {
    if (timerInterval !== null) {
        return;
    }

    elapsedTime = 0;
    updateDisplay();
    updateButtons();
}

function updateDisplay() {
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    timeDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function updateButtons() {
    const isRunning = timerInterval !== null;

    startButton.disabled = isRunning;
    stopButton.disabled = !isRunning;
    resetButton.disabled = isRunning;
}

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);

updateDisplay();
updateButtons();
