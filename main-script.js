// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


// when start button is pushed,
// then start timer at 75 seconds and present question with options
// when answer BUTTON is clicked
// compare answer user chose to answer in questions array
// if answer is a match
//  ALERT correct and ????
// if answer is not a match
//  ALERT wrong! and subtract from time
// IF timer == 0 OR all questions are answered
//  then show All Done and score and text box for initials
// when initials are added and SUBMIT button is pressed
//  then go to high-scores.html

// when go to high-scores.html
//  if high-score array has values display in list each initial and score
// when Go Back button is pressed
//  display index.html
// when Clear Highscores button is pressed,
//  clear high-scores array

// VARIABLES
// grab elements needed such as start button
var startButton = document.querySelector("#start");
var mainEl = document.querySelector("main");
var timeEl = document.querySelector("#timeLeft");

// other variables for quiz functions
var timeRemaining = 0;
var score = 0; // do i need this variable?
var questionIndex = 0;

// TO DO: need variable for high scores, local storage?
var highScoresObject = { 'playser1': 1, 'player2': 2, 'player3': 3 };

// storage for questions, possible answers and correct answer
var questionsAndAnswers = [
    {   
        question: "what?", 
        possibleAnswers: ['yes', 'no', 'maybe'], 
        rightAnswer: "yes"
    },
    {
        question: "how?",
        possibleAnswers: ['work', 'faith', 'luck'],
        rightAnswer: 'work'

    },
    {
        question: "when?",
        possibleAnswers: ['now', 'tomorrow', 'never'],
        rightAnswer: 'now'

    }
] 

// TO DO - should these variables and functions be inside one large function??
var questionEl;
var answerList;
// console.log(questionsAndAnswers);

// FUNCTIONS
// startQuiz
// one by one, display each question and possible answers
function startQuiz() {
    console.log("starting the quiz!");
    startTimer();
    // clear main section
    mainEl.innerHTML = "";

    // create ORDERED LIST of potential answers as buttons
    questionEl = document.createElement("h1");
    answerList = document.createElement("ol");
    var liEl;
    var button;

    // add question to h1 and display
    questionEl.innerText = questionsAndAnswers[questionIndex].question;
    mainEl.appendChild(questionEl);

    // create list of buttons with possible answers
    console.log(questionsAndAnswers[questionIndex].possibleAnswers.length);
    for (var i = 0; i < questionsAndAnswers[questionIndex].possibleAnswers.length; i++) {
        // create <li> element with a data-index
        liEl = document.createElement("li");
        liEl.setAttribute("data-index", i);

        // create button in the list
        button = document.createElement("button");
        // TO DO - use .textContent instead of .innerHTML?
        button.textContent = questionsAndAnswers[questionIndex].possibleAnswers[i];
        
        liEl.appendChild(button);
        answerList.appendChild(liEl);
    }
    mainEl.appendChild(answerList);

    // When a element inside of the answers is clicked...
    answerList.addEventListener("click", function(event) {
        var element = event.target;
    
        // If that element is a button...
        if (element.matches("button") === true) {
            // Get its data-index value and remove the todo element from the list
            var index = element.parentElement.getAttribute("data-index");
            //  answerList.splice(index, 1);
            console.log("button was pushed!" + index);
        }
    });

    // set high scores into local storage
    localStorage.setItem("highScores", JSON.stringify(highScoresObject));
}

// startTimer
function startTimer(){
    console.log("Starting timer!");
    // TO DO - change time to 75 before submitting
    timeRemaining = 30;
    //setTime();

    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
       secondsElapsed variable which is used to check if the time is up */
    interval = setInterval(function() {
        if (timeRemaining > 0) {
            timeRemaining--;
        
            // So renderTime() is called here once every second.
            renderTime();
            console.log("Time: " + timeRemaining);
        } else {
            // this.clearInterval;
            alert("Game Over!");
            // TO DO add display of final score
        }
    }, 1000);
}

// renderTime
// print seconds on index.html in timer section
function renderTime() {
    timeEl.textContent = timeRemaining;
}


// LISTENERS
startButton.addEventListener("click", startQuiz);


