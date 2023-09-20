let selectCounter = document.querySelector(".coutdown")
let randomData = 192545;


let dateobj = new Date('December 15, 2055');
let fulldata = dateobj.getFullYear();
let seconds = randomData;


function startTimer() {

    let days = Math.floor(seconds / 24 / 60 / 60);
    let hoursLeft = Math.floor((seconds) - (days * 86400))
    let hours = Math.floor(hoursLeft / 3600);
    let minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
    let minutes = Math.floor(minutesLeft / 60);
    let remainingSeconds = seconds % 60;

    function pad(n) {
        return (n < 10 ? "0" + n : n)
    }
    selectCounter.innerHTML = `
        <div class="days">
            <div class="number">
                ${pad(days)}
                <span class="left"></span>
                <span class="right"></span>
            </div>
            <div class="title">
                days
            </div>
            </div>
        <div class="hours">
            <div class="number">
                ${pad(hours)}
                <span class="left"></span>
                <span class="right"></span>
            </div>
            <div class="title">
                hours
            </div>
        </div>
        <div class="minutes">
            <div class="number">
                ${pad(minutes)}
                <span class="left"></span>
                <span class="right"></span>
            </div>
            <div class="title">
                minutes
            </div>
        </div>
        <div class="seconds">
            <div class="number">
                ${pad(remainingSeconds)}
                <span class="left"></span>
                <span class="right"></span>
            </div>
            <div class="title">
                seconds
            </div>
        </div>
    `
    if (seconds == 0) {
        clearInterval(countdownTimer);
    } else {
        seconds--;
    }
}

let countdownTimer = setInterval('startTimer()', 1000)