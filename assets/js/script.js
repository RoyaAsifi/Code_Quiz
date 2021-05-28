// Array of questions.
var quizQuestions = [
    {
        question: "Commonly used data type DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans", 
        choiceC: "alerts", 
        choiceD: "numbers",
        answer: "c. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____:",
        choiceA: "quotes", 
        choiceB: "curly brackets", 
        choiceC: "parenthesis",
        choiceD: "square brackets",
        answer: "c. parenthesis"
    },
    {
        question: "Arrays in a JavaScript can be used to store:",
        choiceA: "numbers and strings", 
        choiceB: "other arrays", 
        choiceC: "booleans", 
        choiceD: "all of the above",
        answer: "d. all of the above"
    },
    {
        question: "String values muse be enclosed within ______ when being assigned to variables.",
        choiceA: "commas", 
        choiceB: "curly brackets", 
        choiceC: "quotes", 
        choiceD: "parenthesis",
        answer: "c. quotes"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript", 
        choiceB: "terminal/bash", 
        choiceC: "for loops", 
        choiceD: "console.log",
        answer: "d. console.log"
    }
];

// Variables for the timer.
var timeDisplay = document.querySelector("topBar");
var timer = document.getElementById("timer");
var countdown = document.getElementById("timeLeft");
var timeLeft = 0;
var timeSet;
var quizTime = 0;

// Variables for start button.
var startBtn = document.querySelector("#startButton");
var questionNumber = 0
var finalQuestion = quizQuestions.length
var currentQuestion = 0
var correct;
var buttonA = document.getElementById("btn0");
var buttonB = document.getElementById("btn1");
var buttonC = document.getElementById("btn2");
var buttonD = document.getElementById("btn3");

startBtn.addEventListener("click", startQuiz) 

function startQuiz () {
    console.log("Quiz has started")
    timeLeft = 100
    startTimer();
    firstScreen();
}

function startTimer() {

    timeSet=setInterval(() => {
        timer.innerHTML = timeLeft;
        if (timeLeft !==0) {
            timeLeft--
            timer.innerHTML = timeLeft;
        }
        else {
            clearInterval(timeSet)
            console.log("times up")
            //quizOver();
        }
    }, 1000);
    
}

function firstScreen() {
    var container = document.querySelector(".container");
    var choices = document.querySelector("#questionSection");
    container.style.visibility = "hidden";
    score.style.visibility = "hidden";
    if (questionNumber === finalQuestion){
        return score();
    }
    var currentQuestion = quizQuestions[questionNumber];
    const questionP = document.querySelector("#questionTitle");
  //   console.log(currentQuestion.question);
  questionP.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
}

function checkAnswer(answer){
    correct = quizQuestions[currentQuestion].correctAnswer;

    if (answer === correct && currentQuestion !== finalQuestion){
        score++;
        alert("Correct!");
        currentQuestion++;
        generateQuizQuestion();
    }else if (answer !== correct && currentQuestion !== finalQuestion){
        alert("Incorrect.")
        currentQuestion++;
        firstScreen();  
    }
}
