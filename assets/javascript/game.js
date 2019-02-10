// Load window before executing functions
window.onload = function() {

// Global variables
var heroArray = ["superman", "batman", "rorschach", "sentry", "wolverine", "cyclops",
        "polaris", "havok", "thor", "psylocke", "colossus", "flash", "nightwing", 
        "comedian", "deadpool"];
var winCounter = 0; // Number of user wins
var guessCounter; // Number of guesses remaining
var chosenHero; // Word to be guessed
var userGuess; // User key input
var incorrectGuesses; // List for storing wrong guesses made by user
var badGuess; // Incorrect guess to go in above list
var alreadyGuessed = [];
var correctGuess = 0; // Counter for each correct guessed, used for scoring
var disguise; // List to place hidden word on viewport as "_"
var disguisedLetter; // Letters of chosenHero converted to "_"

// Set up a new match with a new random hero chosen
initializeGame = function() {
    chosenHero = heroArray[Math.floor(Math.random() * heroArray.length)];
    chosenHero = chosenHero.replace(/\s/g, "-");
    console.log(chosenHero);

    // Reset win and guess counters to starting values in the html
    
    correctGuess = 0;
    guessCounter = 10; 
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("guessCounter").innerHTML = guessCounter; 
    // Clear array of guesses  
    alreadyGuessed = [];
}

// Replace the chosenHero with underscores and place it in the #heroCol div
disguisedHero = function() {

    // Target the heroCol div and create a list named disguise for the choseHero
    heroHolder = document.getElementById("heroCol");
    disguise = document.createElement("ul");
    
 // Create a new ul for badGuess to go into during game, assign attr, place in div guessedCol
    guessHolder = document.getElementById("guessed-Col");
    incorrectGuesses = document.createElement("ul")
    incorrectGuesses.setAttribute("id", "incorrect-guessed");
    guessHolder.appendChild(incorrectGuesses);

    for (var i = 0; i < chosenHero.length; i++) {
        disguise.setAttribute("id", "my-hero");
        disguisedLetter = document.createElement("li");
        disguisedLetter.setAttribute("class", "disguised-letter");

        if (chosenHero[i] === " ") {
            disguisedLetter.innerHTML = "-";
        } else {
            disguisedLetter.innerHTML = "_";
        }

// Add the chosen hero name, now translated into an ul of underscores, within the #heroCol div       
        heroHolder.appendChild(disguise);
        disguise.appendChild(disguisedLetter);
    }
}

// Create keyup event that only acts upon alphabetic keyCodes
document.onkeyup = function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
        userGuess = event.key;

        // Check to make sure the userGuess has NOT been used already before proceeding
        if (alreadyGuessed.indexOf(userGuess) === -1) {
        // Compare userGuess to the chosenHero and replace correlating underscores with matches 
        for (var i = 0; i < chosenHero.length; i++) {
            var replaceLetter = document.getElementsByClassName("disguised-letter");
            
            if (chosenHero[i] === userGuess) {
                replaceLetter[i].innerHTML = userGuess.toUpperCase();
                // Add guess to array of previous guesses
                alreadyGuessed.push(userGuess);
                correctGuess += 1;
                console.log(correctGuess);
               // Check to see if need reset for the next match
                
        }
    }
     
        // Find incorrect guesses and add them to that ul and the array alreadyGuessed
        var j = (chosenHero.indexOf(userGuess));
            if (j === -1) {         
            guessCounter -= 1;
            document.getElementById("guessCounter").innerHTML = guessCounter;

            badGuess = document.createElement("li");
            badGuess.innerHTML = userGuess.toUpperCase();
            incorrectGuesses.appendChild(badGuess);
            // Add guess to array of previous guesses
            alreadyGuessed.push(userGuess);
            // Check to see if need reset for the next match
            nextMatch();
        }
        }   
        nextMatch();
    }
}
// Create a function to start the next match upon winning or losing
nextMatch = function(){
    // If user runs out of guesses, initiate game loss and reset
    if (guessCounter < 1) {
        alert("Match lost! Try again.");
        // Clear the existing chosenHero from html for reset
        disguise.parentNode.removeChild(disguise);
        // Clear existing bad guesses and the ul to make room for new one on html reset
        incorrectGuesses.parentNode.removeChild(incorrectGuesses);
        initializeGame();
        disguisedHero(); 
    }

    // Scoring process for a win.
    if (correctGuess === chosenHero.length) {
        // If the counter of correctGuess reaches a number equal to the length of the chosenHero, intiate win and reset
        alert("You win!");
        winCounter += 1;
        disguise.parentNode.removeChild(disguise);
        incorrectGuesses.parentNode.removeChild(incorrectGuesses);
        initializeGame();
        disguisedHero();
    }
}


initializeGame();

disguisedHero();



}

