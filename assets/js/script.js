////////// Hook to UI (DOM hooks) /////////////
var startBtn = document.querySelector("#startquiz");
var timerEl = document.getElementById("countdown");
var score = document.querySelector("#finalscore");

var questionContainer = document.querySelector(".question-container");
var questionEl = document.querySelector(".question");
var choicesArea = document.querySelector(".choices-area");
var choice = document.querySelector("#choice");

///////// State variables? /////////////////

// Questions
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["alerts", "strings", "booleans", "numbers"],
    answer: 0,
  },

  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["square brackets", "curly brackets", "parentheses", "quotes"],
    answer: 2,
  },

  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "booleans",
      "other arrays",
      "numbers and strings",
      "all of the above",
    ],
    answer: 3,
  },

  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["curly brackets", "commas", "quotes", "parentheses"],
    answer: 2,
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["terminal/bash", "console.log", "JavaScript", "for loops"],
    answer: 1,
  },
];

questionEl.textContent = questions[0].question;
for (let i = 0; i < questions[0].choices.length; i++) {
  console.log(questions[0].choices[i]);
  var choiceButton = document.createElement("button");

  choiceButton.innerHTML = questions[0].choices[i];
  console.log(choiceButton);
  choicesArea.appendChild(choiceButton);
}

// var q1 = document.getElementById("question1");
// var q2 = document.getElementById("question2");
// var q3 = document.getElementById("question3");
// var q4 = document.getElementById("question4");
// var q5 = document.getElementById("question5");
// var questions = [q1, q2, q3, q4, q5];

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

///////// Display question functions ///////////////

function displayQuestion() {
  var randomQuestion = Math.floor(Math.random() * questions.length);
  randomQuestion.display = "block";
}

function newQuestion() {
  const questionsLeft = questions[Math.floor(Math.random() * questions.length)];
  asking = questionsLeft;
  questionEl.innerHTML = asking;
}

////////////// START QUIZ function //////////////
// When clicking start quiz button, calls countdown function, makes welcome screen disappear
startquiz.addEventListener("click", function () {
  var welcome = document.getElementById("welcome");
  welcome.style.display = "none";
  countdown();
  displayQuestion();
});

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

//////////// End screen function /////////////////
function displayMessage() {
  var endscreen = document.getElementById("endscreen");
  endscreen.style.display = "block";
  score.displayMessage("Your final score is " + score + ".");
}
