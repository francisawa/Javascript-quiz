//Questions
var questions = [
    {
        prompt: "JavaScript is …",
        answers: [
            "subjective",
            "objective",
            "evil",
            "object based"
        ],
        correct: "object based"
    },

    { 
        prompt: "var obj1 = {}; var obj2 = {}; What is the value of (obj1 === obj2)",
        answers:[
            "true",
            "false",
            "tralse",
            "none"
        ],
        correct: "false"
    },

    {
        prompt: "What does the following expression return? 1 + 5 + ” bottles of milk”",
        answers: [
            '15 bottles of milk',
            '6 bottles of milk',
            'undefined. An exception is thrown',
            '5 bottles of milk'
        ],
        correct: '6 bottles of milk'
    },

    {
        prompt: 'How do you create an object in JavaScript?',
        answers:[
            'var obj = {};',
            'function Foo() {} var obj = new Foo();',
            'All of these work.',
            'var obj = new Object()'
        ],
        correct: 'All of these work.'
    },

    {
        prompt: "What is the result of the following statement: typeof “x”;",
        answers: [
            'character',
            '[object String]',
            'Throws error “ReferenceError: x is not defined',
            'string',
        ],
        correct: 'string'
    }

// {prompt: Primitive types are passed by :
// answers:
//   [ A. Value,
//    B. Pointer,
//    C. Reference,]
// Ans: A
// }

// prompt: {Which is not a primitive data type in JavaScript?
//   [A. boolean,
//    B. number,
//    C. string,
//    D. character]
// Ans: D}
// {
// {prompt: Which of these is a correct method to create a new array?
// answers:
// [ A. var myArray = ();,
//   B. var myArray = [];,
//   C. var myArray = new Array[];,
//   D. var myArray = {};,
//   E. var myArray = array();]
// Ans: B 
// }
    
]
//Global Variables
var questionIndex = 0;
var time = 60;
var timerFunction;
//user click a answer and then you c heck is answer = questions[current].correct
var startButton = document.querySelector("#startBtn")
var submitButton = document.querySelector("#submitBtn")
var startOverButton = document.querySelector("#startOver")

var startGameEl = document.querySelector("#startGame")
var questionPartEl = document.querySelector("#questionPart")
var gameOverEl = document.querySelector("#gameOver")
var highScorePageEl = document.querySelector("#highScorePage")

var questionsEl = document.querySelector("#question")
var answersEl = document.querySelector("#answers")
var timeEl = document.querySelector("#time")

var finalScore = document.querySelector("#finalScore")
var initialsEl = document.querySelector("#initials")
var highScoresEl = document.querySelector("#highscores")

function startQuiz(){
    console.log("quiz started")
    startGameEl.classList.add("hidden")
    questionPartEl.classList.remove("hidden")

    timerFunction = setInterval(countDown, 1000)
    timeEl.textContent = time
    startQuestions()
}

function countDown(){
time--
timeEl.textContent = time
if (time === 0){ 
gameOver()
}
}


function startQuestions(){
    var letterArray = ["(A)","(B)","(C)","(D)"]
    var currentQuestion = questions[questionIndex].prompt
    var currentAnswers = questions[questionIndex].answers

    questionsEl.textContent = currentQuestion
    answersEl.innerHTML = ""

    for (var i=0; i < currentAnswers.length; i++){
        var choice = document.createElement("button")
        choice.setAttribute("value", currentAnswers[i])
        choice.setAttribute("class", "choice")
        choice.textContent = letterArray[i] + " " + currentAnswers[i]
        choice.onclick = clickedQuestion
        answersEl.appendChild(choice)
    }
}

function clickedQuestion(){
    var currentCorrect = questions[questionIndex].correct
    var that = this;
    if(this.value !== currentCorrect){
        that.classList.add("Wrong")
        time -= 10
        timeEl.textContent = time
    }
    that.classList.add("Correct")
    //check if correct
    questionIndex++
    
    //add check to see if game is over
   if(questionIndex === questions.length){
     gameOver()  
   }
   startQuestions()
  
}

function gameOver(){
   clearInterval(timerFunction)
   questionPartEl.classList.add("hidden")
   gameOverEl.classList.remove("hidden")
   finalScore.textContent = time
}

function highScore(){
    gameOverEl.classList.add("hidden")
    highScorePageEl.classList.remove("hidden")

    var initials = initialsEl.value.trim()
    // var playerScore = {score: time, initials: initials}
    var playerScore = initials +"-"+time 
    console.log(playerScore)
    highScoresEl.textContent = playerScore
}

function startOver() {
    highScorePageEl.classList.add("hidden")
    startGameEl.classList.remove("hidden")
    time = 60
}

startButton.addEventListener("click",startQuiz)
submitButton.addEventListener("click",highScore)
startOverButton.addEventListener("click",startOver)