let selectCounter = document.querySelector(".coutdown")
let previousTimeBetweenDates

const countToDate = new Date().setHours(new Date().getHours() + 192)

setInterval(() => {
    const currentDate = new Date()
    const timeBeetüenDates = Math.ceil((countToDate - currentDate) / 1000)
    flipAllCards(timeBeetüenDates)
    previousTimeBetweenDates = timeBeetüenDates
}, 1000);

function pad(n) {
    return (n < 10 ? "0" + n : n)
}

function flipAllCards(time) {
    const days = Math.ceil(time / (60 * 60 * 24))
    let seconds = time % 60
    let minutes = Math.floor(time / 60) % 60
    let hours = Math.floor(time / 3600) % 24;
    if (seconds < 0) {
        seconds = 59;
    }
    flip(document.querySelector("[data-seconds-tens]"), pad(seconds))
    
}

function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top")
    const startNumber = parseInt(topHalf.textContent)
    if (newNumber === startNumber) return

    const bottomHalf = flipCard.querySelector(".bottom")
    const topFlip = document.createElement("div")
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement("div")
    bottomFlip.classList.add("bottom-flip")

    bottomHalf.textContent = startNumber
    topFlip.textContent = startNumber
    bottomFlip.textContent = newNumber
   

    topFlip.addEventListener("animationstart", e => {
        topHalf.textContent = newNumber
    })
    topFlip.addEventListener("animationend", e => {
        topFlip.remove()
    })
    bottomFlip.addEventListener("animationend", e => {
        bottomHalf.textContent = newNumber
        bottomFlip.remove()
    })
    flipCard.append(topFlip, bottomFlip)
}