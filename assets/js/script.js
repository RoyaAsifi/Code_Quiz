// Array of questions.
const questions = [
    {
        question: "Commonly used data type DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____:",
        choices: ["a. quotes", "b. curly brackets", "c. parenthesis", "d. square brackets"],
        answer: "c. parenthesis"
    },
    {
        question: "Arrays in a JavaScript can be used to store:",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d. all of the above"
    },
    {
        question: "String values muse be enclosed within ______ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        choices: ["a. JavaScript", "b. terminal/bash", "c. for loops", "d. console.log"],
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
    var container= document.querySelectorAll(".container");
    var choices= document.querySelectorAll("#questionSection");
    //quiz(questionNumber);

}
