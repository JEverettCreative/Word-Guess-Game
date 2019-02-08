// // Initializing global variables for page as an object

// var guessGame = {
//     heroArray: ["Superman", "Batman", "Rorschach", "Sentry", "Wolverine", "Cyclops","Polaris", "Havok", "Thor", "Psylocke", "Colossus"],
//     winCounter: 0,
//     guessCounter: 12,
//     chosenHero: this.heroArray[Math.floor(Math.random() * this.heroArray.length)],
// // Creating functions within the object to be called throughout

// // Load a random word from the array
//     chooseHero: function() {
//         // var chosenHero = this.heroArray[Math.floor(Math.random() * this.heroArray.length)];
        
//         chosenHero = chosenHero.replace(/\s/g, "-");

//         // document.getElementById("heroBlank").innerHTML = chosenHero;
//     },

//     disguisedHero: function() {
//         wordHolder = document.getElementById("heroBlank");
//         correct = document.createElement("ul");

//         for (i = 0; i < this.chosenHero.length; i++) {
//             correct.setAttribute("id", "my-hero");
//             guess = document.createElement("li");
//             guess.setAttribute("class", "guess");
//             if (chosenHero[i] === "-") {
//                 guess.innerHTML = "-";
//                 space = 1;
//               } else {
//                 guess.innerHTML = "_";
//               }
//         }
//     },
// };


// onload = guessGame.chooseHero();

// // var heroArray = ["Superman", "Batman", "Rorschach", "Sentry", "Wolverine", "Cyclops","Polaris", "Havok", "Thor", "Psylocke", "Colossus"];

// // function myFunction() {
// //  heroArray[Math.floor(Math.random() * heroArray.length)];
// // };
// console.log(guessGame.disguisedHero());

// console.log(myFunction());
// Load window before executing functions
window.onload = function() {

// Declare global variables
var heroArray = ["Superman", "Batman", "Rorschach", "Sentry", "Wolverine", "Cyclops","Polaris", "Havok", "Thor", "Psylocke", "Colossus"];
var winCounter = 0;
var guessCounter = 10;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var chosenHero ;
var userGuess ;
var previousGuess = [];
var space ;

// Set up a new match with a new random hero chosen

freshGame = function() {
    chosenHero = heroArray[Math.floor(Math.random() * heroArray.length)];
    chosenHero = chosenHero.replace(/\s/gi, "-");
    console.log(chosenHero);
    guessCounter = 10;
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

        heroHolder.appendChild(disguise);
        disguise.appendChild(disguisedLetter);
    }
}

freshGame();
// disguisedHero();

console.log(disguisedHero());
};

