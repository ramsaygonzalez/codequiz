var secondsDisplay = document.querySelector("#timer");
var startBtn = document.querySelector("#start-quiz");
var quesitionsEl = document.querySelector("#questions")
var quizEndEl = document.querySelector("#end-quiz")


var sec = 80;
var currentQuesition = 0;


startBtn.addEventListener('click', function () {
    startTimer();

});


function startTimer() {
    var timer = setInterval(function () {
        sec--;
        secondsDisplay.innerHTML = sec;
        if (sec < 0) {
            clearInterval(timer);

        }
    }, 1000);
}
document.getElementById('incorrect').addEventListener('click', function () {
    sec -= 5;
    document.getElementById('timer').innerHTML = sec;
});

