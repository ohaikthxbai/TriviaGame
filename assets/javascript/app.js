/* 
PSEUDO..WOODO
create a trivia game object:
	what are its contents?
		a *set* of questions (how many? 5? 10? 20?!)
		multiple choice questions
		*right* answer (only one)
		*wrong* answers
		question *timer* (15? 30 secs?)
		game *timer*?
		*counters*:
			right
			wrong
		
		what else?
display an *introduction* to the game
have the user *start the game* by *pressing a button*
	randomly generate and display a question
	display the timer, counting down... 30 secs?
	(game timer) allow game to be played for x minutes. (2? 3? 5?) -- working
	ORRRRRRR add time for every correct answer. -- future goal
		when game timer's up, display *results*
			results:
				questions:
					# answered
					# correct
					# incorrect
					# skipped


*/

// when the web page is ready
//$(document).ready(function(){

// GAME ObJECT
// change this name once theme is determined
var trivialTrivia = {
    // key:value pairs

    // correct answer count
    qRight: 0,
    // wrong answer count
    qWrong: 0,
    // question counter
    qCount: 0,
    // unanswered question count
    qSkip: 0,
    // timer for each question
    qTimer: 0,
    tTimer: '',
    // array of questions
    qArray: [
        // each element in the array will be an object
        // containing the question, choices, and correct answer
        { // 1
            question: "Test Question",
            choices: ["zero", "one", "two", "three"],
            answer: 1
        },

        { // 2
            question: "Another Test Question",
            choices: ["zero", "one", "two", "three"],
            answer: 2
        },

        { // 3
            question: "This Test Question",
            choices: ["zero", "one", "two", "three"],
            answer: 0
        },

        { // 4
            question: "That Test Question",
            choices: ["zero", "one", "two", "three"],
            answer: 3
        },

        { // 5
            question: "Final Test Question",
            choices: ["zero", "one", "two", "three"],
            answer: 1
        },

    ]

}

// GLOBAL VARIABLE
var qRandom = trivialTrivia.qArray[Math.floor((Math.random() * trivialTrivia.qArray.length))];

// FUNCTIONS
// starting the game
var pressStart = function() {
    $(".pStart").on("click", function() {
        $(".gArea").empty();
        qDisplay();
		// start the timer for the game
    	tStart();
    });
}
// run it
pressStart();

// TIMER FUNCTIONS
// start the timer
var tStart = function() {
    // clear the timer area
    $(".timerArea").empty();
    // set the timer value
    trivialTrivia.qTimer = 45;
    // define the timer using setInterval
    trivialTrivia.tTimer = setInterval(tDecrease, 1000);
    //testing
    //console.log(trivialTrivia.tTimer);
    tDisplay();
}

// countdown the timer to zero
var tDecrease = function() {
    // decrement by 1
    trivialTrivia.qTimer--;
    // display the timer
    tDisplay();
    // stop the timer if it reachers zero
    if (trivialTrivia.qTimer === 0) {
        tStop();
        gameOver();
    }
}

// displaying the timer
var tDisplay = function() {
    // display timer on the DOM
    $(".timerArea").html(":" + trivialTrivia.qTimer);
    //testing
    //console.log(trivialTrivia.qTimer);
}

// stops the timer
var tStop = function() {
    // clears the timer
    clearInterval(trivialTrivia.tTimer);
}

// display the question and choices
var qDisplay = function() {
	$('.gArea').empty();
    // define random question
    qRandom = trivialTrivia.qArray[Math.floor((Math.random() * trivialTrivia.qArray.length))];
    // make div element
    var addDiv = $('<div>');
    // giving addDiv a class
    addDiv.addClass('gQuestion');
    // adding the text
    addDiv.text(qRandom.question);
    // add question to html
    $('.gArea').append(addDiv);

    // display the choices
    // interate through each choice and make a button for them
    for (i = 0; i < qRandom.choices.length; i++) {
        // declare and add element to html
        var addBtn = $("<div>")
        // add classes to the element
        addBtn.addClass("btn gChoices");
        addBtn.data("ntgr", i);
        addBtn.on("click", qCheck);
        // add text to the element
        addBtn.text(qRandom.choices[i]);
        // add it to the dom
        $(".gArea").append(addBtn);
    }
}

// checks the player's selection
var qCheck = function() {
	// check if the user's click matches the object answer value
    if ($(this).data("ntgr") === qRandom.answer) {
        correctQ();
        //console.log('right!');
    } else {
        incorrectQ();
        //console.log('wrong!');
    }
}

// what to do if the selection is right
var correctQ = function() {
	//increase counter
	trivialTrivia.qRight++;
	trivialTrivia.qCount++;
	//testing
	//console.log("Right!" + trivialTrivia.qRight);
	//clear the game area
	$(".gArea").empty();
	$(".gArea").append("Correct!");

	//display another random question
	setTimeout(function() {
            qDisplay();
        }, 3000);
}

// what to do if the selection is wrong
var incorrectQ = function() {
	trivialTrivia.qWrong++;
	trivialTrivia.qCount++;
	//console.log("Wrong!" + trivialTrivia.qWrong);
	$(".gArea").empty();
	$(".gArea").append("Wrong!");
	setTimeout(function() {
            qDisplay();
        }, 3500);
}

// game results screen
var gameOver = function() {
	$(".gArea").empty();
	$(".timerArea").empty();
	$(".gArea").append("Correct: " +trivialTrivia.qRight);
	$(".gArea").append("<br>Incorrect: " +trivialTrivia.qWrong);
	$(".gArea").append("<br>Questions Answered: " +trivialTrivia.qCount);
	$(".gArea").append("<br><button id='newGame'>Play Again?</button>");
	$("#newGame").on("click", function() {
		$("#newGame").hide();
		trivialTrivia.qRight = 0;
		trivialTrivia.qWrong = 0;
		trivialTrivia.qCount = 0;
		pressStart();		
	})
}
//testing
// var qRandom = trivialTrivia.qArray[Math.floor((Math.random() * trivialTrivia.qArray.length))];
// for (i = 0; i < qRandom.choices.length; i++) {
//     console.log(qRandom.choices[i]);
// }
//console.log(qRandom.question);
//qDisplay();
//pressStart();

//})
