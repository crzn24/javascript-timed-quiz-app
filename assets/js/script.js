// Hook to UI
var startBtn = document.querySelector("#startquiz");



// Visible timer
var timerEl = document.getElementById('countdown');




// Countdown timer funtion
function countdown() {
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval)
            displayMessage();
        }
    }, 1000);
}




// End screen function
function displayMessage() {
    var endscreen = document.getElementById("endscreen");
    endscreen.style.display = "block";
}




// When clicking start quiz button, calls countdown function, makes welcome screen disappear
startquiz.addEventListener("click", function () {
    countdown();
    var welcome = document.getElementById("welcome");
    welcome.style.display = "none";

    // var q1 = 
})







