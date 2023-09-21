let selectCounter = document.querySelector(".coutdown")



let randomData = 192545;

let dateobj = new Date().setHours(new Date().getHours() + 24);

// İlk olarak, 8 gün, 24 saat, 0 dakika, 59 saniye olarak başlatın
let seconds = 8 * 24 * 60 * 60 + 24 * 60 * 60 + 0;

let daysElement =document.querySelector("[data-days-tens]")
let hoursElement =document.querySelector("[data-hours]")
let minutesElement =document.querySelector("[data-minutes]")
let secondsElement =document.querySelector("[data-seconds]")
let days = 0
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
    
  
   
    daysElement.innerText = pad(days);
    hoursElement.innerText = pad(hours);
    minutesElement.innerText = pad(minutes);
    secondsElement.innerText = pad(remainingSeconds);


    if (seconds == 0) {
        clearInterval(countdownTimer);
    } else {
        seconds--;
    }
}

let countdownTimer = setInterval('startTimer()', 1000)