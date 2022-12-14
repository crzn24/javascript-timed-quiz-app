////////// Hook to UI (DOM hooks) /////////////
var startBtn = document.querySelector("#startquiz");
var timerEl = document.getElementById("countdown");
var scoreFinal = document.querySelector("#finalscore");
var initialsInput = document.getElementById("initials-input");
var submitBtn = document.getElementById("submit");
var highScores = document.getElementById("high-scores");

var questionContainer = document.querySelector(".question-container");
var questionEl = document.querySelector(".question");
var choicesArea = document.querySelector(".choices-area");
var choice = document.querySelector("#choice");

// var choiceAbtn = document.createElement("button");
// var choiceBbtn = document.createElement("button");
// var choiceCbtn = document.createElement("button");
// var choiceDbtn = document.createElement("button");

var choiceA = document.getElementById("choice-a");
var choiceB = document.getElementById("choice-b");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");

///////// State variables /////////////////
var score = 0;
var scoreRecall = localStorage.getItem("score");



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

//////////// End screen function /////////////////
function displayMessage() {
    var endscreen = document.getElementById("endscreen");
    endscreen.style.display = "block";
    alert("Your final score is " + score + ".");
  }

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
//
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

var currentQuestionIndex = -1;

function newQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choiceA.textContent = questions[currentQuestionIndex].choices[0];
  choiceB.textContent = questions[currentQuestionIndex].choices[1];
  choiceC.textContent = questions[currentQuestionIndex].choices[2];
  choiceD.textContent = questions[currentQuestionIndex].choices[3];
}

function startQuiz() {
  remainingTime = time;
  valId = setInterval(countdown, 1000);
  timerEl.textContent = time;
  console.log("hello");
  currentQuestionIndex++;
//   choiceA.appendChild(choiceAbtn);
  newQuestion();
}



/////////// Countdown timer funtion //////////////////
var countdown = function () {
  time--;
  timerEl.textContent = "Time: " + time + " seconds left.";

  if (time === 0) {
    clearInterval(valId);
    displayMessage();
  }
};

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


///// Checks for incorrect or correct answers and gives new questions if available /////
function checkAnswer(selectedAnswer) {
  var correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedAnswer === correctAnswer) {
    alert("Correct!");
    score++;
  } else {
    alert("Incorrect!");
    time -= 10;
  }
  if (currentQuestionIndex === questions.length - 1) {
    alert("You are done!");
    clearInterval(valId);
    displayMessage();
    
  } else {
    currentQuestionIndex++;
    newQuestion();
  }
}

//////////// Event Listeners for choices buttons ///////////
choiceA.addEventListener("click", function () {
  checkAnswer(choiceA.textContent);
});

choiceB.addEventListener("click", function () {
  checkAnswer(choiceB.textContent);
});

choiceC.addEventListener("click", function () {
  checkAnswer(choiceC.textContent);
});

choiceD.addEventListener("click", function () {
  checkAnswer(choiceD.textContent);
});


//////////// High Scores and Logging Scores //////////
var storedScores = document.getElementById("stored-scores");
var clearScoresBtn = document.createElement("button");
clearScoresBtn.innerHTML = "Clear High Scores";
var clearScoresEl = document.getElementById("clear-scores");
var highScoresTitle = document.getElementById("highscore-title");


/// Array for previous high scores ///
// var previousScores = [

// ]
var previousScores = JSON.parse(window.localStorage.getItem('loggedScore'));



submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("i need scores");
   

    var loggedScore = {
        initials: initialsInput.value,
        highscore: score,
    }
    
    /**
     *  [
     *      {
     *          "initials":"",
     *          "hightscore": 15
     *      }
     * 
     *      {}
     *  ]
     */
    
    var previous = window.localStorage.getItem("loggedScore");

    if (previous != undefined) {
        var updatedScores = JSON.parse(previous);
        updatedScores.push(score);
        window.localStorage.setItem("loggedScore", JSON.stringify(loggedScore));
    }
    //display high scores next?
});


/// Retrieves previous high scores ///

function viewHighscores() {
    storedScores.textContent = previousScores;
}

/// When clicking button to view high scores ///
highScores.addEventListener("click", function() {
    console.log("who got the high score?")
    viewHighscores();
    clearScoresEl.appendChild(clearScoresBtn);
});


clearScoresBtn.addEventListener("click", function() {
    console.log("Delete!");
    localStorage.clear();
});