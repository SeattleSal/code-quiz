// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// compare answer user chose to answer in questions array
// if answer is a match
//  ALERT correct and ????
// if answer is not a match
//  ALERT wrong! and subtract from time
// IF timer == 0 OR all questions are answered
//  then show All Done and score and text box for initials
// when initials are added and SUBMIT button is pressed
//  then go to high-scores.html


// VARIABLES
// grab elements needed such as start button
var startButton = document.querySelector("#start");
var mainEl = document.querySelector("main");
var timeEl = document.querySelector("#timeLeft");

// other variables for quiz functions
var timeRemaining = 0;
var score = 0; // do i need this variable?
var startTime = 10; // 30 seconds for testing, switch to 75

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
        question: "The Invisible Man , a classic science fiction novel, was written by what author?",
        possibleAnswers: ['Robert Louis Stevenson', 'H. G. Wells', 'Oscar Wilde'],
        rightAnswer: 'H. G. Wells'

    },
    {
        question: "In The Wizard of Oz, the Tin Man wanted to see the Wizard about getting..?",
        possibleAnswers: ['A brain', 'A heart', 'Oil Can'],
        rightAnswer: 'A heart'

    },
    {
        question: "Don Quixote was written in which language?",
        possibleAnswers: ['Spanish', 'Greek', 'Italian'],
        rightAnswer: 'Spanish'

    },
    {
        question: "Who is the heroine of Nathaniel Hawthorne’s The Scarlet Letter?",
        possibleAnswers: ['Anne Hutchinson', 'Hester Prynne', 'Emily Shelby'],
        rightAnswer: 'Hester Prynne'

    }
] 

// TO DO - should these variables and functions be inside one large function??
var questionEl;
var answerList;

// FUNCTIONS
// startQuiz - one by one, display each question and possible answers
function startQuiz() {
    var questionIndex = 0;
    console.log("starting the quiz!");

    // start the timer
    startTimer();
    console.log("Question #" + questionIndex);

    // crete elements for question (h1) and list of answers (ol)
    questionEl = document.createElement("h1");
    answerList = document.createElement("ol");

    // render Questions and answers
    renderQuestions(questionIndex);
}

// renderQuestions - render question and answers on main page
function renderQuestions(questionIndex) {
    // clear main and other elements displayed for each new question and answers
    mainEl.innerHTML = "";
    questionEl.innerText = "";
    answerList.innerText = "";
    var liEl;
    var button;
    // console.log("clear main" + mainEl);

    // for the number of questions, display question and answers
    if(questionIndex < 5){
        questionEl.innerText = questionsAndAnswers[questionIndex].question;
        mainEl.appendChild(questionEl);

        // create list of buttons with possible answers for each question
        for (var i = 0; i < questionsAndAnswers[questionIndex].possibleAnswers.length; i++) {
            // create <li> element with a data-index
            liEl = document.createElement("li");
            liEl.setAttribute("data-index", i);

            // create button in the list
            button = document.createElement("button");
            button.textContent = questionsAndAnswers[questionIndex].possibleAnswers[i];
            liEl.appendChild(button);
            answerList.appendChild(liEl);
        }
        mainEl.appendChild(answerList);

        // When a element inside of the answers is clicked...
        answerList.addEventListener("click", function(event) {
            var element = event.target;
            event.preventDefault();
        
            // If that element is a button...
            // TO DO - check if answer is correct and change score, right now any button moves forward no difference
            if (element.matches("button") === true) {
                // Get its data-index value from the button
                var index = element.parentElement.getAttribute("data-index");
                //  answerList.splice(index, 1);
                console.log("button was pushed!" + index);
                questionIndex++;
                renderQuestions(questionIndex);
                // is answer correct? if so, print 'correct'; else print 'wrong', go to next question
            }
        });
    } else { // reached end of questions
        timeRemaining = 0;
        renderFinalScore(); // is this line redundant with code in startTimer?
    }
}

// startTimer
function startTimer(){
    // console.log("Starting timer!");
    timeRemaining = startTime;
    //setTime();
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
       secondsElapsed variable which is used to check if the time is up */
    interval = setInterval(function() {
        if (timeRemaining > 0) {
            // decrement by 1 second every second until time is up
            timeRemaining--;
            renderTime();
        } else {
            // stop interval (clearInterval) and call function to render final score page 
            clearInterval(interval);
            renderFinalScore();
        }
    }, 1000);
}

// renderFinalScore
// create layout of game over and final score
// TO DO - there has to be a shorter way to to all this...
function renderFinalScore() {
    // clear page
    mainEl.innerHTML = "";

    // create html elements for game over page
    var h1El = document.createElement('h1');
    h1El.textContent = "All done!";
    mainEl.appendChild(h1El);

    var pEl = document.createElement('p');
    var lineBreakEl = document.createElement('br');
    pEl.textContent = "Your final score is: " + score;
    mainEl.appendChild(pEl, lineBreakEl);

    var pEl2 = document.createElement('p');
    pEl2.textContent = "Enter initials: ";
    mainEl.appendChild(pEl2);

    var inputEl = document.createElement('input');
    inputEl.type = "text";
    mainEl.appendChild(inputEl);

    var buttonEl = document.createElement('button');
    buttonEl.id = "submitID";
    buttonEl.textContent = "Submit";
    mainEl.appendChild(buttonEl);

    // when submit is pushed capture initials and put into temp storage
    buttonEl.addEventListener('click', function(e) {
        console.log("submit has been clicked!");
        e.preventDefault(); // do I need this?

        // get inputted initials and store with score in local storage
        var initials = inputEl.value;

        // TO DO: get any values already stored in local storage
        // TO DO: add on current values to local storage string
        // then set new string to local storage
        var myObject = {"initials": initials, "score": score};
        var myObjectText = JSON.stringify(myObject);
        console.log("myobjecttext " + myObjectText);
        localStorage.setItem("highScores", myObjectText);

        // navigate to high scores page
        // window.location.href = "high-scores.html";

    }
    )
}

// renderTime
// print seconds on index.html in timer section
function renderTime() {
    timeEl.textContent = timeRemaining;
}

// LISTENERS
startButton.addEventListener("click", startQuiz);


