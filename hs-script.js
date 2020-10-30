// js file for high-scores page
// when go to high-scores.html
//  if high-score array has values display in list each initial and score
// when Clear Highscores button is pressed,
//  clear high-scores array


// VARIABLES
// variables from high-scores.html
var highScoresEl = document.querySelector("#highScores");
var clearScoresButton = document.querySelector("#clear");

// FUNCTIONS
// renderHighScores
// Retrieve the highScores stored in local storage and display
// TO DO - figure out how to get values out of JSON?!?!?!?
// THIS IS BROKEN!!!
function renderHighScores() {

    if (localStorage.getItem("highScores") === null) {
        console.log("No scores stored");
    }
    else {
        console.log("high scores are stored");
        var x = localStorage.getItem("highScores");
        console.log(x);
        // var highScoresStored = JSON.parse(localStorage.getItem("highScores"));
        // console.log("obj " + highScoresStored);

        // for(var key in highScoresStored) {
        //    console.log(highScoresStored.initials + " " + highScoresStored.score);
    //     initials = highScoresObject.initials;
    //     score = highScoresObject.score;
    //     console.log("HS Object" + highScoresObject + " " + typeof(highScoresObject));;
    //     console.log("Initial and score" + initials + " " + score);
    
    //     highScoresEl.textContent = " " + initials + " - " + score;

        // }
    }

    // get initials and scores from local storage
    // console.log("HS String" + highScoresString + typeof(highScoresString));
    // console.log(highScoresString);
    // console.log("type of " + typeof(highScoreString));
    // var highScoresObject = JSON.parse("["+highScoresString+"]");
    // console.log("type? " + typeof(highScoresStored));
    // var initials;
    // var score;
    // var key = "initials";

    // console.log("initials?" + highScoresStored.initials);

    // how do i get lenght to loop and what if there is only one?
    // for all the initials and scores, render to screen
    // for (i = 0; i < highScoresObject.length; i++) {

    // console.log("Object stringify " + JSON.stringify(highScoresObject));


}

// TO DO - create clear initials and scores function

// FUNCTION CALLS
// Generate high scores page
// To do - should this be called 'init'???
renderHighScores();