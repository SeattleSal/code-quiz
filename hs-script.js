// js file for high-scores page
// when go to high-scores.html
//  if high-score array has values display in list each initial and score
// when Clear Highscores button is pressed,
//  clear high-scores array


// VARIABLES
// variables from high-scores.html
var highScoresEl = document.querySelector("#highScores");
var clearScoresButton = document.querySelector("#clear");
var highScoresString = localStorage.getItem("highScores");

// FUNCTIONS
// renderHighScores
// Retrieve the highScores stored in local storage and display
// TO DO - figure out how to get values out of JSON?!?!?!?
function renderHighScores() {

    // get initials and scores from local storage
    // console.log("HS String" + highScoresString + typeof(highScoresString));
    console.log(highScoresString);
    var highScoresObject = JSON.parse(highScoresString);
    console.log("obj " + highScoresObject);
    var initials;
    var score;
    var key = "initials";

    // how do i get lenght to loop and what if there is only one?
    // for all the initials and scores, render to screen
    // for (i = 0; i < highScoresObject.length; i++) {
    for(var key in highScoresObject) {
        initials = highScoresObject.initials;
        score = highScoresObject.score;
        console.log("HS Object" + highScoresObject + " " + typeof(highScoresObject));;
        console.log("Initial and score" + initials + " " + score);
    
        highScoresEl.textContent = " " + initials + " - " + score;

    }
    // console.log("Object stringify " + JSON.stringify(highScoresObject));


}

// TO DO - create clear initials and scores function

// FUNCTION CALLS
// Generate high scores page
// To do - should this be called 'init'???
renderHighScores();