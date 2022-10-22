////////// Hook to UI (DOM hooks) /////////////
var startBtn = document.querySelector("#startquiz");
var timerEl = document.getElementById("countdown");
var score = document.querySelector("#finalscore");

var questionContainer = document.querySelector(".question-container");
var questionEl = document.querySelector(".question");
var choicesArea = document.querySelector(".choices-area");
var choice = document.querySelector("#choice");

var choiceA = document.getElementById("choice-a");
var choiceB = document.getElementById("choice-b");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");


///////// State variables? /////////////////


////////////// START QUIZ function //////////////
// When clicking start quiz button, calls countdown function, makes welcome screen disappear
startBtn.addEventListener("click", function () {
    console.log("button was clicked");
    startQuiz();
  var welcome = document.getElementById("welcome");
  welcome.style.display = "none";
//   countdown();
//   newQuestion();
  
});


/////////////// Questions /////////////////////
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["alerts", "strings", "booleans", "numbers"],
    answer: "alerts",
  },

  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["square brackets", "curly brackets", "parentheses", "quotes"],
    answer: "parentheses",
  },

  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "booleans",
      "other arrays",
      "numbers and strings",
      "all of the above",
    ],
    answer: "all of the above",
  },

  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["curly brackets", "commas", "quotes", "parentheses"],
    answer: "quotes",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["terminal/bash", "console.log", "JavaScript", "for loops"],
    answer: "console.log",
  },
];

//////////// Display questions functions and Timer ///////////////////
// function displayQuestion() {
//   var randomQuestion = Math.floor(Math.random() * questions.length);
//   randomQuestion.display = "block";
// }
// // Questions and choices for loop suggested by TA ////
// questionEl.textContent = questions[0].question;
// for (let i = 0; i < questions[0].choices.length; i++) {
//   console.log(questions[0].choices[i]);
//   var choiceButton = document.createElement("button");

//   choiceButton.innerHTML = questions[0].choices[i];
//   console.log(choiceButton);
//   choicesArea.appendChild(choiceButton);
// }



var time = 60;
var remainingTime = "";
var valId;

var currentQuestionIndex = 0

function startQuiz() {
    remainingTime = time;
    valId = setInterval(countdown, 1000);
    timerEl.textContent = time;
    console.log("hello");
    currentQuestionIndex++;
    newQuestion();
}

function newQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choiceA.textContent = questions[currentQuestionIndex].choices[0];
  choiceB.textContent = questions[currentQuestionIndex].choices[1];
  choiceC.textContent = questions[currentQuestionIndex].choices[2];
  choiceD.textContent = questions[currentQuestionIndex].choices[3];
}



/////////// Countdown timer funtion //////////////////
var countdown = function () {
  
    time--;
    timerEl.textContent = "Time: " + time;

    if (time === 0) {
      clearInterval(timeInterval);
      displayMessage();
    }
  
}



// Listens for clicks in question 1 container
// questionContainer1.addEventListener("click", function (event) {
//   var element = event.target;

//   // Check if the clicked element was a button
//   if (element.matches("button")) {
//     // Get the current value of the image's data-state attribute
//     var status = element.getAttribute("data-status");

//     if (status === "correct") {
//       // There are two different ways this attribute can be set
//       element.dataset.state = "animate";
//       element.setAttribute("data-state", "animate");
//       document.getElementById("status").innerHTML = "Correct!";
//     } else {
//       element.dataset.status = "incorrect";
//       document.getElementById("status").innerHTML = "Incorrect!";
//     }
//   }
// });


function checkAnswer(selectedAnswer) {
    var correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        alert("Correct!")
    } else {
        alert("Incorrect!");
    };
    if (currentQuestionIndex === questions.length -1) {
        alert("You are done!")
    } else {
        currentQuestionIndex++;
        newQuestion();
    }
}

//////////// Event Listeners for choices buttons ///////////
choiceA.addEventListener("click", function(){
    checkAnswer(choiceA.textContent);
 });

 choiceB.addEventListener("click", function(){
    checkAnswer(choiceB.textContent);
 });

 choiceC.addEventListener("click", function(){
    checkAnswer(choiceC.textContent);
 });

 choiceD.addEventListener("click", function(){
    checkAnswer(choiceD.textContent);
 });

//////////// End screen function /////////////////
function displayMessage() {
  var endscreen = document.getElementById("endscreen");
  endscreen.style.display = "block";
  score.displayMessage("Your final score is " + score + ".");
}
