// Load window before executing functions
window.onload = function() {

// Declare global variables
var heroArray = ["superman", "batman", "rorschach", "sentry", "wolverine", "cyclops","polaris", "havok", "thor", "psylocke", "colossus"];
var winCounter = 0;
var guessCounter; // Number of guesses remaining
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var chosenHero; // Word to be guessed
var userGuess; // User key input
var heroStored = []; // Stored array of correct word's letters
var incorrectGuesses; // Ul for storing bad guesses to show to user
var badGuess; // Incorrect guess
var correctGuess = 0;
var space;
var disguise;
var disguisedLetter;

// Set up a new match with a new random hero chosen

firstGame = function() {
    chosenHero = heroArray[Math.floor(Math.random() * heroArray.length)];
    chosenHero = chosenHero.replace(/\s/g, "-");
    console.log(chosenHero);

    // Reset win and guess counters to starting values in the html
    
    correctGuess = 0;
    guessCounter = 10; 
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("guessCounter").innerHTML = guessCounter;
}

// Replace the chosenHero with underscores and place it in the #heroCol div

disguisedHero = function() {
    heroHolder = document.getElementById("heroCol");
    disguise = document.createElement("ul");

    for (var i = 0; i < chosenHero.length; i++) {
        disguise.setAttribute("id", "my-hero");
        disguisedLetter = document.createElement("li");
        disguisedLetter.setAttribute("class", "disguised-letter");

        if (chosenHero[i] === " ") {
            disguisedLetter.innerHTML = "-";
            space = 1;
        } else {
            disguisedLetter.innerHTML = "_";
        }

        // Store the letters from the chosenHero as an array. Use to compare later for win/lose eval
        
        heroStored.push(disguisedLetter);
// Add the chosen hero name, now translated into an ul of underscores, within the #heroCol div
        
        heroHolder.appendChild(disguise);
        disguise.appendChild(disguisedLetter);
    }
}
// Create keyup event function for registering userGuess. (Only act upon alphabet characters is future goal.)

document.onkeyup = function(event) {
        userGuess = event.key;
    // Compare userGuess to the chosenHero and place any replace correlating underscores with matches 
        for (var i = 0; i < chosenHero.length; i++) {
            var replaceLetter = document.getElementsByClassName("disguised-letter");
            if (chosenHero[i] === userGuess) {
                replaceLetter[i].innerHTML = userGuess.toUpperCase();
                correctGuess += 1;
                console.log(correctGuess);
                nextMatch();
        }
   
        } 
        var j = (chosenHero.indexOf(userGuess));
            if (j === -1) {         
            guessCounter -= 1;
            document.getElementById("guessCounter").innerHTML = guessCounter;
            incorrectGuesses = document.getElementById("letters-guessed");
            badGuess = document.createElement("li");
            badGuess.innerHTML = userGuess.toUpperCase();
            incorrectGuesses.appendChild(badGuess);
            // Now reset for the next match
            nextMatch();
        }
    
}
// Create a function to start the next match upon winning or losing
nextMatch = function(){
    if (guessCounter < 1) {
        alert("Match lost! Try again.");
        disguise.parentNode.removeChild(disguise);
        firstGame();
        disguisedHero();
        while (incorrectGuesses.hasChildNodes()) {
            incorrectGuesses.removeChild(incorrectGuesses.firstChild);
        }
        while (heroStored.length) {
            heroStored.pop();
        }
        
    }
    
    if (correctGuess === heroStored.length) {
        alert("You win!");
        winCounter += 1;
        disguise.parentNode.removeChild(disguise);
        firstGame();
        disguisedHero();
        while (incorrectGuesses.hasChildNodes()) {
            incorrectGuesses.removeChild(incorrectGuesses.firstChild);
        }
        while (heroStored.length) {
            heroStored.pop();
        }
    }
}


firstGame();

disguisedHero();



}

