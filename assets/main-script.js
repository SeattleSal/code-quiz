// index.html for quiz game

// VARIABLES
// grab html elements needed 
var startButton = document.querySelector("#start");
var mainEl = document.querySelector("main");
var timeEl = document.querySelector("#timeLeft");

// create variables to keep track of quiz functions
var timeRemaining = 0;
var score = 0; 
var startTime = 75; 
var questionEl;
var answerList;
var result;

// storage for questions, possible answers and correct answer
var questionsAndAnswers = [
    {   
        question: "Who wrote the Wizard of Oz books?", 
        possibleAnswers: ['Lewis Carroll', 'Roald Dahl', 'L. Frank Baum'], 
        rightAnswer: 'L. Frank Baum'
    },
    {
        question: "How many Oz books are there?",
        possibleAnswers: ['8', '20', '14'],
        rightAnswer: '14'

    },
    {   
        question: "When was the first Oz book written?", 
        possibleAnswers: ['1910', '1900', '1896'], 
        rightAnswer: '1900'
    },
    {
        question: "What did the Lion want to ask for from the Wizard?",
        possibleAnswers: ['Courage', 'A haircut', 'A heart'],
        rightAnswer: 'Courage'

    },
    {
        question: "What did the Tin Man want to ask for from the Wizard?",
        possibleAnswers: ['A brain', 'A heart', 'Oil Can'],
        rightAnswer: 'A heart'

    },
    {
        question: "What did the Scarecrow want to ask for from the Wizard?",
        possibleAnswers: ['More straw', 'A brain', 'A heart'],
        rightAnswer: 'A brain'

    },
    {
        question: "Dorothy and her friends fall asleep in a field of what kind of flower?",
        possibleAnswers: ['Roses', 'Daisies', 'Poppies'],
        rightAnswer: 'Poppies'

    },
    {
        question: "What color are Dorothy's shoes in the book?",
        possibleAnswers: ['Ruby', 'Gold', 'Silver'],
        rightAnswer: 'Silver'

    },
    {
        question: "How does Dorothy defeat the Wicked Witch of the West?",
        possibleAnswers: ['A pail of water', 'Winged Monkeys', 'Dropping a house on her'],
        rightAnswer: 'A pail of water'
    },
    {
        question: "As Dorothy leaves Oz, whom did Dorothy say she’d miss most of all?",
        possibleAnswers: ['Tin Man', 'Scarecrow', 'Lion'],
        rightAnswer: 'Scarecrow'
    }
] 

// FUNCTIONS
// startQuiz - one by one display each question and possible answers
function startQuiz() {
    var questionIndex = 0;

    // start the timer
    startTimer();

    // crete elements for question (h2), list of answers (ol) and results once answered
    questionEl = document.createElement("h2");
    answerList = document.createElement("ol");
    result = document.createElement("p");

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
    var result;

    // game continues until all questions have been displayed OR time has run out
    if(questionIndex >= questionsAndAnswers.length || timeRemaining <= 0) {
        clearInterval(interval);
        renderFinalScore();
        return;
    }

    // for the number of questions, display question and answers
    questionEl.innerText = questionsAndAnswers[questionIndex].question;
    mainEl.appendChild(questionEl);

        // create list of buttons with possible answers for each question
        for (var i = 0; i < 3; i++) {
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
        resultEl = document.createElement("p");
        mainEl.appendChild(resultEl);

        // When a answer button is clicked...
        answerList.addEventListener("click", function(event) {
            event.preventDefault();
            var element = event.target;
                    
            // If button is clicked, chheck if answwer is correct or wrong
            if (element.matches("button") === true) {
                // Get its data-index value from the button
                var answer = element.textContent;
                if(answer === questionsAndAnswers[questionIndex].rightAnswer){
                    resultEl.innerText = "Correct!";
                    score++;
                } else {
                    resultEl.innerText = "Wrong!";
                    timeRemaining -= 10;
                }

                questionIndex++;
                // display if answer was right or wrong for 1 second before proceeding to next question
                setTimeout(function() {
                    renderQuestions(questionIndex);
                }, 1000);
            }

        }, {once: true}); // only attach listener once
}

// startTimer
function startTimer(){
    timeRemaining = startTime;
    interval = setInterval(function() {
        if (timeRemaining > 0) {
            // decrement by 1 second every second until time is up
            timeRemaining--;
            renderTime();
        } else {
            // time is up, stop interval (clearInterval) and call function to render final score page 
            clearInterval(interval);
            timeRemaining = 0;
            renderFinalScore();
        }
    }, 1000);
}

// renderTime
// print seconds on index.html in timer section
function renderTime() {
    timeEl.textContent = timeRemaining;
}

// renderFinalScore
// create layout of game over and final score
function renderFinalScore() {
    // clear page
    mainEl.innerHTML = "";
    score = timeRemaining;

    // create html elements for game over page
    var h1El = document.createElement('h1');
    h1El.textContent = "All done!";
    mainEl.appendChild(h1El);

    var pEl = document.createElement('p');
    var lineBreakEl = document.createElement('br');
    pEl.textContent = "Your final score is: " + score;
    mainEl.appendChild(pEl, lineBreakEl);

    var formEl = document.createElement("FORM");
    var labelEl = document.createElement("label");
    var inputEl = document.createElement('input');
    formEl.setAttribute('id', 'form');
    labelEl.innerHTML = "Enter Initials: ";
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "initials");
    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
    mainEl.appendChild(formEl);

    var buttonEl = document.createElement('button');
    buttonEl.id = "submitID";
    buttonEl.textContent = "Submit";
    mainEl.appendChild(buttonEl);

    // when submit is pushed capture initials and put into temp storage
    buttonEl.addEventListener('click', function(e) {
        e.preventDefault(); 

        // get inputted initials and store with score in local storage
        var newInitials = inputEl.value;
        var myObject = {
            initials: newInitials, 
            score: score};
        
        // get local storage
        if (localStorage.getItem("highScores") === null) {
            localStorage.setItem("highScores", JSON.stringify(myObject));
        } else {
            // if scores are already stored, retrieve them first then add to them before storing to local
            var hs = localStorage.getItem("highScores");
            var hsObject = JSON.parse(hs);
            var array = [];

            if(hsObject.length) {
                hsObject.map(item => array.push(item))
            } else {
                array.push(hsObject);
            }

            array.push(myObject);
            storedString = JSON.stringify(array);
            localStorage.setItem("highScores", storedString);
        }

        // navigate to high scores page
        window.location.href = "high-scores.html";
    })
}

// LISTENERS
// start quiz when user clicks Start button
startButton.addEventListener("click", startQuiz);


