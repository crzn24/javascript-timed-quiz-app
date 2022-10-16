var timerEl = document.getElementById('countdown');









function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval)
            displayMessage();

            timerEl.textContent = "";
        }

    }, 1000);
}





countdown()





