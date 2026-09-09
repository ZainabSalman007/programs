const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;

function start() {
    if (timer === null) {
        startTime = Date.now() - elapsedTime;

        timer = setInterval(updateDisplay, 10);
    }
}

function stop() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
        elapsedTime = Date.now() - startTime;
    }
}

function reset() {
    clearInterval(timer);
    timer = null;
    startTime = 0;
    elapsedTime = 0;

    display.textContent = "00:00:00:00";
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}