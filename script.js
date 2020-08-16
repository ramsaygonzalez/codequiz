var welcomeEl = document.querySelector("#welcome-message");
var secondsDisplayEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-quiz");
var questionsEl = document.querySelector("#questions")
var questionEl = document.querySelector("#question")
var quizEndEl = document.querySelector("#end-quiz")
var ans1 = document.querySelector("#a")
var ans2 = document.querySelector("#b")
var ans3 = document.querySelector("#c")
var ans4 = document.querySelector("#d")
var quizEndEl = document.querySelector("#end-quiz")
var scoreEl = document.querySelector("#score")
var initialsEl = document.querySelector("#initials")

var sec = 120;
var elapsedTime;

var currentQuestion = 0;

// var highScores = [];

startBtn.addEventListener('click', function () {
    event.preventDefault();
    welcomeEl.style.display = "none";
    startTimer()
    loadQuestion()
});


function answerSelect(val) {
    if (currentQuestion < 4) {
        console.log(currentQuestion)
        if (val !== questions[currentQuestion].correctAnswer) {
            console.log(val)
            console.log(questions[currentQuestion].correctAnswer)
            sec -= 10;

            if (sec < 0) {
                sec = 0;
                secondsDisplayEl.style.display = "none"
                questionsEl.style.display = "none";
                quizEndEl.style.display = "block";
            }
            secondsDisplayEl.textContent = sec;
            console.log("wrong")
            currentQuestion++;
            loadQuestion()

            // need to add alert to user
        } else {
            console.log(val)
            console.log(questions[currentQuestion].correctAnswer)
            console.log("correct")
            currentQuestion++;
            loadQuestion()

            // need to add alert to user
        }
    } else {
        console.log("test over")
        elapsedTime = sec
        secondsDisplayEl.style.display = "none"
        questionsEl.style.display = "none";
        scoreEl.textContent = "Final Score: " + elapsedTime;
        quizEndEl.style.display = "block";
        console.log(elapsedTime)
    }

};

function startTimer() {
    var timer = setInterval(function () {
        sec--;
        secondsDisplayEl.innerHTML = sec;
        if (sec < 0) {
            clearInterval(timer);
            secondsDisplayEl.innerHTML = "Times Up!"
            questionsEl.style.display = "none";
            quizEndEl.style.display = "block";
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

// When form is submitted...
quizEndEl.addEventListener("submit", function (event) {
    event.preventDefault();

    var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var score = {
        score: elapsedTime,
        initials: initialsEl.value.trim()
    };

    highScores.push(score);
    window.localStorage.setItem("highscores", JSON.stringify(highScores));

    // Return to start page
    window.location.href = "quiz.html"
});