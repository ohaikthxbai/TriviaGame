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
	(game timer) allow game to be played for x minutes. (2? 3? 5?) -- future goal
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

// defining the trivia game object
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
	//current question
	qCurrent: -1,
	// array of questions
	qArray: [
	// each element in the array will be an object
	// containing the question, choices, and correct answer
	{	// 1
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: 1
	},

	{	// 2
		question: "Another Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: 2
	},

	{	// 3
		question: "This Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: 0
	},	

	{	// 4
		question: "That Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: 3
	},

	{	// 5
		question: "Final Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: 1
	},

	]
}
// random looking like it's not working
//var qRandom = trivialTrivia.qArray[Math.floor((Math.random() * trivialTrivia.qArray.length))];

// FUNCTIONS

// starting the game
var pressStart = function() {
	$(".pStart").on("click", function(){
		$(".gArea").empty();
		qDisplay();
	});
}

// TIMER FUNCTIONS
// start the timer
var tStart = function() {
	// clear the timer area
	$(".timerArea").empty();
	// set the timer value
	trivialTrivia.qTimer = 90;
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
	if(trivialTrivia.qTimer === 0) {
		tStop();
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
	// start the timer for the question
	tStart();
	// define random question
	var qRandom = trivialTrivia.qArray[Math.floor((Math.random() * trivialTrivia.qArray.length))];
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
	for (i = 0; i < qRandom.choices.length; i++){
		// declare and add element to html
        var addBtn = $("<div>")
        // add classes to the element
        addBtn.addClass("btn options");
        //addBtn.data("num", i); 
        //addBtn.on("click", compare);
        // add text to the element
        addBtn.text(qRandom.choices[i]);
        // add it to the dom
        $(".gArea").append(addBtn);
    }
	//testing
	//console.log(qRandom.question)
}

// checks the player's selection
var qCheck = function() {

}

//testing
var qRandom = trivialTrivia.qArray[Math.floor((Math.random() * trivialTrivia.qArray.length))];
for (i = 0; i < qRandom.choices.length; i++) {
console.log(qRandom.choices[i]);
}
//console.log(qRandom.question);
//qDisplay();
pressStart();

//})