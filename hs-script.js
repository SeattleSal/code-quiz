// js file for high-scores page

// VARIABLES
// variables from high-scores.html
var highScoresEl = document.querySelector("#highScores");
var clearScoresButton = document.querySelector("#clear");
var highScoresObject = localStorage.getItem("highScores");

// FUNCTIONS
// renderHighScores
// Retrieve the highScores stored in local storage and display
// TO DO - figure out how to get values out of JSON?!?!?!?
function renderHighScores() {


    highScoresEl.textContent = highScoresObject;
    console.log("Object stringify " + JSON.stringify(highScoresObject));


}

// FUNCTION CALLS
// Generate high scores page
// TO DO - either this works or the listener works, how do i get both to work?
renderHighScores();