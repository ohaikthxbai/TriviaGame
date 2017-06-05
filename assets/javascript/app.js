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
	// array of questions
	qArray: [
	// each element in the array will be an object
	// containing the question, choices, and correct answer
	{	// 1
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "one"
	},

	{	// 2
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "two"
	},

	{	// 3
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "zero"
	},	

	{	// 4
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "three"
	},

	{	// 5
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "one"
	},
/*
	{	// 6
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "one"
	},

	{	// 7
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "three"
	},

	{	// 8
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "zero"
	},	

	{	// 9
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "two"
	},

	{	// 10
		question: "Test Question",
		choices: ["zero", "one", "two", "three"],
		answer: "zero"
	}
*/
	]
}

// FUNCTIONS

// starting the game
var pressStart = function() {
	$(".pStart").on("click", function(){
		$(".gameArea").empty();
		qDisplay();
	});
}

// timer functions
// start the timer
var tStart = function() {
	// clear the timer area
	$(".timerArea").empty();
	// set the timer value
	trivialTrivia.qTimer = 20;
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
	$(".timerArea").html(": "trivialTrivia.qTimer + " seconds remaining");
	//testing
	//console.log(trivialTrivia.qTimer);
}

// stops the timer
var tStop = function() {
	// clears the timer
	clearInterval(trivialTrivia.tTimer);
}

// display the current question
var qDisplay = function() {
	// start the timer for the question
	tStart();


}

// checks the player's selection
var qCheck = function() {

}

//testing
//for (i = 0; i < trivialTrivia.qArray.length; i++)
//console.log(trivialTrivia.qArray[i]);
var qRandom = trivialTrivia.qArray[Math.floor((Math.random() * trivialTrivia.qArray.length))];
console.log(qRandom);

//})