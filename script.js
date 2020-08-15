var welcomeEl = document.querySelector("#welcome-message");
var secondsDisplayEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-quiz");
var quesitionsEl = document.querySelector("#questions")
var quizEndEl = document.querySelector("#end-quiz")
var h3El = document.createElement("h3");
var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var q1El = document.createElement("button");
var q2El = document.createElement("button");
var q3El = document.createElement("button");
var q4El = document.createElement("button");


var sec = 80;
var currentQuestion = 0;


startBtn.addEventListener('click', function () {
    event.preventDefault();
    startTimer();
    welcomeEl.style.display = "none";
    loadQuestion()
});

function startTimer() {
    var timer = setInterval(function () {
        sec--;
        secondsDisplayEl.innerHTML = sec;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
// // document.getElementById('incorrect').addEventListener('click', function () {
// //     sec -= 5;
// //     document.getElementById('timer').innerHTML = sec;
// });

function loadQuestion() {
    var question = questions[currentQuestion]
    console.log(question)
    h3El.textContent = question.question
    q1El.textContent = "a. " + question.answers.a
    q2El.textContent = "b. " + question.answers.b
    q3El.textContent = "c. " + question.answers.c
    q4El.textContent = "d. " + question.answers.d

    li1.appendChild(q1El)
    li2.appendChild(q2El)
    li3.appendChild(q3El)
    li4.appendChild(q4El)
    listEl.appendChild(li1)
    listEl.appendChild(li2)
    listEl.appendChild(li3)
    listEl.appendChild(li4)
    quesitionsEl.appendChild(h3El)
    quesitionsEl.appendChild(listEl)

    // quesitionsEl.appendChild(h3El)
    // quesitionsEl.appendChild(h3El)
    // quesitionsEl.appendChild(q1El)
    // quesitionsEl.appendChild(q2El)
    // quesitionsEl.appendChild(q3El)
    // quesitionsEl.appendChild(q4El)
    //h3 -question
    //li - choices buttons

}