// Load window before executing functions
window.onload = function() {

// Declare global variables
var heroArray = ["superman", "batman", "rorschach", "sentry", "wolverine", "cyclops","polaris", "havok", "thor", "psylocke", "colossus"];
var winCounter;
var guessCounter;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var chosenHero ;
var userGuess ;
var heroStored = [];
var correctGuess;
var space;
var disguise;
var disguisedLetter;

// Set up a new match with a new random hero chosen

freshGame = function() {
    chosenHero = heroArray[Math.floor(Math.random() * heroArray.length)];
    chosenHero = chosenHero.replace(/\s/g, "-");
    console.log(chosenHero);

    // Reset win and guess counters to starting values in the html
    
    winCounter = 0;
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

        if (chosenHero[i] === "-") {
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

// Create keyup event function for registering userGuess. Only act upon alphabet characters

document.onkeyup = function(event) {
    var userGuess = event.key;
    // if (userGuess.toLowerCase() === userGuess.match("^[a-zA-Z]")) 
        for (var i = 0; i < chosenHero.length; i++) {
            var replaceLetter = document.getElementsByClassName("disguised-letter");
            if (chosenHero[i] === userGuess) {
                replaceLetter[i].innerHTML = userGuess;
                correctGuess += 1;
                alert(userGuess);
            // } else {
            //     document.getElementById("guessCounter").innerHTML = guessCounter;
            //     guessCounter -= 1;
            // }
        }
   
        } 
        var j = (chosenHero.indexOf(userGuess));
            if (j === -1) {
            document.getElementById("guessCounter").innerHTML = guessCounter;
            guessCounter -= 1;
        }
    
}

}

freshGame();
// disguisedHero();

disguisedHero();

}

