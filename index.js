let homeScore = document.getElementById("score-value-1")
let guestScore = document.getElementById("score-value-2")
let hcount = 0
let gcount = 0
// console.log("Home: " + homeScore.textContent)
// console.log("Guest: " + guestScore.textContent)
function plusOne(team) {
    if (team == "home") {
        let count = 0
        count += 1
        hcount += count
        homeScore.textContent = hcount
    }
    else {
        let count = 0
        count += 1
        gcount += count;
        guestScore.textContent = gcount
    }
}

function plusTwo(team) {
    if (team == "home") {
        let count = 0
        count += 2
        hcount += count
        homeScore.textContent = hcount
    }
    else {
        let count = 0
        count += 2
        gcount += count;
        guestScore.textContent = gcount
    }
}

function plusThree(team) {
    if (team == "home") {
        let count = 0
        count += 3
        hcount += count
        homeScore.textContent = hcount
    }
    else {
        let count = 0
        count += 3
        gcount += count;
        guestScore.textContent = gcount
    }
}

function refreshPage(){
    window.location.reload();
} 