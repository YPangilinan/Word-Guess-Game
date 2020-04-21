
//computer choices for words
var destinations = ["naples","budapest","bali","waco","singapore","tokyo","chicago", "london","prague","positano","dubai", "maldives"]

//max number of guesses
const maxGuess=10

//variables for all other elements of the game
var guessedLetters = []
var guessedWord = []
var matchedWord
var numGuess
var wins = 0

//at max guesses, restarts for a new word
resetGame()

//starter code from rock, paper, scissors game

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var guessedLetters = event.key;
  
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerChoices = destinations[Math.floor(Math.random() * destinations.length)]}

        //after user presses a key, need a for loop to search for letter
        for (var i=0, j=matchedWord.length; i<j; i++){
            if (letter === matchedWord[i]){
                guessedWord[i] = letter
            }
        }





