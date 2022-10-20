////////// Hook to UI (DOM hooks) /////////////
var startBtn = document.querySelector("#startquiz");
var timerEl = document.getElementById('countdown');
var score = document.querySelector("#finalscore");

///////// State variables /////////////////


// Questions
var q1 = document.getElementById("question1");
var q2 = document.getElementById("question2");
var q3 = document.getElementById("question3");
var q4 = document.getElementById("question4");
var q5 = document.getElementById("question5");

// Question 1 Buttons
var q1yes = document.getElementById("q1correct");
var q1no = document.getElementById("q1incorrect");

// Countdown timer funtion
function countdown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}







////////////// Start Quiz function //////////////
// When clicking start quiz button, calls countdown function, makes welcome screen disappear
startquiz.addEventListener("click", function () {
    countdown();
    var welcome = document.getElementById("welcome");
    welcome.style.display = "none";


    
    q1.style.display = "block";
    if (q1yes.addEventListener("click", function () {
        document.getElementById("status").innerHTML = "Correct!";
    } 
    ));
    


})





//////////// End screen function /////////////////
function displayMessage() {
    var endscreen = document.getElementById("endscreen");
    endscreen.style.display = "block";
    score.displayMessage("Your final score is " + score + ".");
}


