const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const WelcomeMessage = document.querySelector("#Welcome")

if (isMorning) {

    WelcomeMessage.textContent = "It is the morning"

}

if (isAfternoon) {

    WelcomeMessage.textContent = "It is the afternoon"

}

if (isEvening) {

    WelcomeMessage.textContent = "It is the evening"

}


console.log(WelcomeMessage)

localStorage.setItem("It's a secret to everybody.", "+100 Rupees")