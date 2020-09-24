//Questions
var current = 0;
var questions = [
    {
        question: "How do you do",
        answers: 
            ["Good", "Bad", "Okay", "Great"],
        correct: "Good"
    },
    {
        question: "How do you do",
        answers: 
            ["Good", "Bad", "Okay", "Great"],
        correct: "Okay"
    }
]
//user click a answer and then you c heck is answer = questions[current].correct
var startButton = document.querySelector("#startBtn")



function startQuiz(){
    console.log("quiz started")
}

startButton.addEventListener("click",startQuiz)