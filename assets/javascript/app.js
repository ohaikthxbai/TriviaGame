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
	(game timer) allow game to be played for x minutes. (2? 3? 5?)
	ORRRRRRR add time for ever correct answer. (hmmmm)
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
	qRight: 0,
	qWrong: 0,
	qCount: 0,
	qSkip: 0,
	qTotal: 0,
	gameTimer: 0,
	qTimer: 0,
	qArray: []
};

//})