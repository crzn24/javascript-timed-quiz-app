// Hook to UI
var startBtn = document.querySelector("#startquiz");




// Visible timer
var timerEl = document.getElementById('countdown');





// // To hide all HTML elements
// window.onload = function() {
//    document.getElementById("hide").style.display = 'none';
// }






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

// if (endscreen.style.display === "none") {
//     endscreen.style.display = "block";
// } else {
//     endscreen.style.display = "none";
// }







// When clicking start quiz button, calls countdown function
startquiz.addEventListener("click", function () {
    countdown();
    var welcome = document.getElementById("welcome");
    welcome.style.display = "none";
})







