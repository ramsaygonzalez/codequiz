var welcomeEl = document.querySelector("#welcome-message");
var secondsDisplayEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-quiz");
var questionsEl = document.querySelector("#questions")
var questionEl = document.querySelector("#question")
var ans1 = document.querySelector("#a")
var ans2 = document.querySelector("#b")
var ans3 = document.querySelector("#c")
var ans4 = document.querySelector("#d")
var quizEndEl = document.querySelector("#end-quiz")

var sec = 80;
var currentQuestion = 0;

startBtn.addEventListener('click', function () {
    event.preventDefault();
    welcomeEl.style.display = "none";
    loadQuestion()
    startTimer()
});


function answerSelect(val) {

    if (val !== questions[currentQuestion].correctAnswer) {
        console.log(val)
        console.log(questions[currentQuestion].correctAnswer)
        sec -= 10;

        if (sec < 0) {
            sec = 0; S
        }

        secondsDisplayEl.textContent = sec;

        console.log("wrong")
        // need to add alert to user
    } else {
        console.log(val)
        console.log(questions[currentQuestion].correctAnswer)
        console.log("correct")
        // need to add alert to user
    }
};


function startTimer() {
    var timer = setInterval(function () {
        sec--;
        secondsDisplayEl.innerHTML = sec;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}


function loadQuestion() {
    questionsEl.style.display = "block";
    var question = questions[currentQuestion]
    var correctAnswer = question.correctAnswer

    console.log(question)
    console.log(correctAnswer)

    questionEl.textContent = question.question
    ans1.textContent = "a. " + question.answers.a
    ans1.setAttribute("value", question.answers.a)

    ans2.textContent = "b. " + question.answers.b
    ans2.setAttribute("value", question.answers.b)

    ans3.textContent = "c. " + question.answers.c
    ans3.setAttribute("value", question.answers.c)

    ans4.textContent = "d. " + question.answers.d
    ans4.setAttribute("value", question.answers.d)

}

