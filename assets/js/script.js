// Hook to UI
var startBtn = document.querySelector("#startquiz");



// Visible timer
var timerEl = document.getElementById('countdown');


// Questions
var q1 = document.getElementById("question1");
var q2 = document.getElementById("question2");
var q3 = document.getElementById("question3");
var q4 = document.getElementById("question4");
var q5 = document.getElementById("question5");

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


    
    q1.style.display = "block";
    if (q1)


})







