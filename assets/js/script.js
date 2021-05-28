// Array of questions.
var quizQuestions = [
    {
        question: "Commonly used data type DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans", 
        choiceC: "alerts", 
        choiceD: "numbers",
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____:",
        choiceA: "quotes", 
        choiceB: "curly brackets", 
        choiceC: "parenthesis",
        choiceD: "square brackets",
        answer: "parenthesis"
    },
    {
        question: "Arrays in a JavaScript can be used to store:",
        choiceA: "numbers and strings", 
        choiceB: "other arrays", 
        choiceC: "booleans", 
        choiceD: "all of the above",
        answer: "all of the above"
    },
    {
        question: "String values muse be enclosed within ______ when being assigned to variables.",
        choiceA: "commas", 
        choiceB: "curly brackets", 
        choiceC: "quotes", 
        choiceD: "parenthesis",
        answer: "quotes"
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
var buttonA = document.getElementById("btn0");
var buttonB = document.getElementById("btn1");
var buttonC = document.getElementById("btn2");
var buttonD = document.getElementById("btn3");

buttonA.addEventListener("click",checkAnswer)
buttonB.addEventListener("click", checkAnswer)
buttonC.addEventListener("click", checkAnswer)
buttonD.addEventListener("click", checkAnswer)
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
            alert("Quiz Over!")
            //quizOver();
        }
    }, 1000);
    
}

function firstScreen() {
    var container = document.querySelector(".container");
    var choices = document.querySelector("#questionSection");
    var score = document.getElementById("score")
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
function score(event) {

}

function checkAnswer(event){
    console.log(event.target.textContent)
    var correct = quizQuestions[questionNumber].answer;
    var userAns = event.target.textContent
    console.log(correct)
     if (userAns === correct && questionNumber !== finalQuestion){
        score++;
        alert("Correct!");
        questionNumber++;
        firstScreen();
    } else if (userAns !== correct && questionNumber !== finalQuestion){
        alert("Incorrect.")
        questionNumber++;
        firstScreen();  
        timeSet.innerHTML = -10;
     }
}
