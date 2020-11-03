// VARIABLES
// variables from high-scores.html
var highScoresEl = document.querySelector("#highScores");
var clearScoresButton = document.querySelector("#clear");

// FUNCTIONS
// renderHighScores
// Retrieve the highScores stored in local storage and display
function renderHighScores() {

    // if no scores are stored in local storage, show no scores stored message
    if (localStorage.getItem("highScores") === null) {
        highScoresEl.textContent = "No scores stored.";
    }
    // if scores are stored, display the scores in a list
    else {
        // retrieve scores from local storage
        var hs = localStorage.getItem("highScores");
        var hsObject = JSON.parse(hs);

        // create list elements
        var listEl = document.createElement('ol');
        listEl.classList.add('final-score');
        highScoresEl.appendChild(listEl);
        var liEl;
        
        if (hsObject.length) {
            // sort in order of score
            hsObject.sort(function(a,b) {
                return b.score - a.score;
            })
            // print to screen
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