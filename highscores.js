var scoresListEl = document.querySelector("#scores-list")

var highScores = JSON.parse(window.localStorage.getItem("highscores"));

init()

function init() {
   
    // Render a new li for each todo
    for (var i = 0; i < highScores.length; i++) {
        var score = "Initials: " + highScores[i].initials + " " + "Score: " + highScores[i].score;

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        scoresListEl.appendChild(li);
    }
}

