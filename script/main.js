let yearSpan = document.getElementById("yearSpan")
let ageSpan = document.getElementById("age")
const currentYear = new Date().getFullYear();
const currentAge = currentYear - 1997

function updateYear() {
    yearSpan.innerHTML = currentYear;
}

function updateAge() {
    ageSpan.innerHTML = currentAge
}

updateYear()
updateAge()