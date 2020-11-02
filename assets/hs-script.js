// VARIABLES
// variables from high-scores.html
var highScoresEl = document.querySelector("#highScores");
var clearScoresButton = document.querySelector("#clear");

// FUNCTIONS
// renderHighScores
// Retrieve the highScores stored in local storage and display
function renderHighScores() {

    // if no scores are stored, show no scores stored message
    if (localStorage.getItem("highScores") === null) {
        highScoresEl.textContent = "No scores stored.";
    }
    // if scores are stored, display the scores in a list
    else {
        // there are scores stored
        var hs = localStorage.getItem("highScores");
        var hsObject = JSON.parse(hs);
        var array = [];

        // create list elements
        var listEl = document.createElement('ol');
        listEl.classList.add('final-score');
        highScoresEl.appendChild(listEl);
        var liEl;
        
        if (hsObject.length) {
            for(var x in hsObject) {
                liEl = document.createElement("li");
                liEl.innerHTML = `Initials: ${hsObject[x].initials} Score: ${hsObject[x].score}`;
                listEl.appendChild(liEl);
            }
        } else {
            liEl = document.createElement("li");
            liEl.innerHTML = `Initials: ${hsObject.initials} \t Score: ${hsObject.score}`;
            listEl.appendChild(liEl);
        }
    }
}

// FUNCTION CALLS
// clearScores when "Clear Scores" button is clicked
clearScoresButton.addEventListener('click', function(e){
    localStorage.clear();
    renderHighScores();
})

// Generate high scores page
renderHighScores();