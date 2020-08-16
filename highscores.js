var scoresListEl = document.querySelector("#scores-list")
var goBackEl = document.querySelector("#back")
var clearEl = document.querySelector("#clear")

var highScores = JSON.parse(window.localStorage.getItem("highscores"));

init()

function init() {

    for (var i = 0; i < highScores.length; i++) {
        var score = "Initials: " + highScores[i].initials + " " + "Score: " + highScores[i].score;

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        scoresListEl.appendChild(li);
    }
}

clearEl.addEventListener('click', function () {
    event.preventDefault();
    localStorage.clear();
    scoresListEl.innerHTML = ""
});

goBackEl.addEventListener('click', function () {
    event.preventDefault();
    window.location.href = "quiz.html"
});
