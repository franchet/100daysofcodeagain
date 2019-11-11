let timer;
let sec = 0;
let min = 0;
let hour = 0;

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let timerElement = document.getElementById("timer");



startBtn.addEventListener("click", function() {
    timer = setInterval(TimerHandler, 1000);
    resetBtn.disabled = true;
});

pauseBtn.addEventListener("click", function() {
    timer = clearInterval(timer);
    resetBtn.disabled = false;
});

resetBtn.addEventListener("click", function() {
    timer = clearInterval(timer);
    resetBtn.disabled = true;
    sec = 0;
    min = 0;
    hour = 0;
    timerElement.innerHTML = "00:00:00";

});



function TimerHandler() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min == 0;
        hour++;
    }

    displayTime();
}

function displayTime() {
    let secPretty = sec;
    let minPretty = min;
    let hourPretty = hour;

    if (sec < 10) {
        secPretty = "0" + sec;
    }

    if (min < 10) {
        minPretty = "0" + min;
    }

    if (hour < 10) {
        hourPretty = "0" + hour;
    }

    timerElement.innerHTML = hourPretty + ":" + minPretty + ":" + secPretty;
}