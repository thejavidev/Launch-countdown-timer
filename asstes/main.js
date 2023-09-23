let selectCounter = document.querySelector(".coutdown")


const countToDate = new Date().setHours(new Date().getHours() + 192)

setInterval(() => {
    const currentDate = new Date()
    const timeBeetüenDates = Math.ceil((countToDate - currentDate) / 1000)
    flipAllCards(timeBeetüenDates,currentDate)

}, 1000);

function pad(n) {
    return (n < 10 ? "0" + n : n)
}
let previousDay = -1;

function flipAllCards(time,currentDate) {
    const days = Math.ceil(time / (60 * 60 * 24))
    let seconds = time % 60
    let minutes = Math.floor(time / 60) % 60
    let hours = Math.floor(time / 3600) % 24;

    const cureentDay =currentDate.getDate();
    if(cureentDay !== previousDay ){
        previousDay =cureentDay
        flip(document.querySelector("[data-days]"), days)
    }

    if (seconds < 0) {
        seconds = 59;
    }
    flip(document.querySelector("[data-seconds]"), seconds)

    flip(document.querySelector("[data-minutes]"), pad(minutes))

    flip(document.querySelector("[data-hours]"), pad(hours))

  

}

function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top");
    const startNumber = parseInt(topHalf.innerText)
    if (newNumber === startNumber) return

    const bottomHalf = flipCard.querySelector(".bottom");

    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    bottomHalf.textContent = pad(startNumber);
    topFlip.textContent = pad(startNumber);
    bottomFlip.textContent = pad(newNumber);

    topFlip.addEventListener("animationstart", e => {
        topHalf.textContent = pad(newNumber);
    })
    topFlip.addEventListener("animationend", e => {
        topFlip.remove()
    })
    bottomFlip.addEventListener("animationend", e => {
        bottomHalf.textContent = pad(newNumber);
        bottomFlip.remove()
    })


    flipCard.append(topFlip, bottomFlip)

}