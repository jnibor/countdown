const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

// making const of chosen date - it is a string
const newYears = "1 Jan 2023";


function countdown() {
    
    const currentDate = new Date()
    
// making chosen date as a date
    const newYearsDate = new Date(newYears)
    
// converting miliseconds to seconds and calculating intervals
    
    const totalSeconds = (newYearsDate - currentDate) / 1000
    const secs = Math.floor(totalSeconds % 60)
    const mins = Math.floor(totalSeconds / 60 % 60)
    const hours = Math.floor(totalSeconds / 3600 % 60)
    const days = Math.floor(totalSeconds / 3600 / 24)
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;
} 

setInterval(countdown, 1000)