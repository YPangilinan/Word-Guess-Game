//computer choices for words
var destinations = ["naples","budapest","bali","waco","singapore","tokyo", "london","prague", "dubai", "maldives"];
var hints = ["The place that created pizza", "A place in Hungary that George Ezra also made a song about", "One of the Indonesian Islands", "City in Texas made famous by the show 'Fixer Upper'","The city that 'Crazy Rich Asians' takes place in",
"The most famous city in Japan", "Where Queen Elizabeth and her corgi's reside","A city in the Czech Republic that looks like a fairytale cover", "A city in the UAE known for luxury shopping", "An expensive island located in south asia"];

//global variables

var computerGuess = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];


//counter variables
var wins = 0;
var losses = 0;
var guessesRemaining = 15;



//game function

function Game() {
    //computer chooses random word from destinations array
    computerGuess = destinations[Math.floor(Math.random() * destinations.length)];

    //split words into separate array and store in a different array
    lettersOfWord = computerGuess.split("");

    //need the length of each word for the correct underscore display
    blanks = lettersOfWord.length;

    //for loop to give underscores for each letter in the array
    for (var i=0; i < blanks; i++){
        blanksAndCorrect.push("_");
    }

    //updating the DOM with underscores
    document.getElementById("underscores").innerHTML = " " + blanksAndCorrect.join(" ");

    console.log(computerGuess);

    if (computerGuess === destinations[0]){
        document.getElementById("hints").innerHTML = " " + hints[0];
    }

    else if (computerGuess === destinations[1]){
        document.getElementById("hints").innerHTML = " " + hints[1];
    }
    else if (computerGuess === destinations[2]){
        document.getElementById("hints").innerHTML = " " + hints[2];
    }
    else if (computerGuess === destinations[3]){
        document.getElementById("hints").innerHTML = " " + hints[3];
    }
    else if (computerGuess === destinations[4]){
        document.getElementById("hints").innerHTML = " " + hints[4];
    }
    else if (computerGuess === destinations[5]){
        document.getElementById("hints").innerHTML = " " + hints[5];
    }
    else if (computerGuess === destinations[6]){
        document.getElementById("hints").innerHTML = " " + hints[6];
    }
    else if (computerGuess === destinations[7]){
        document.getElementById("hints").innerHTML = " " + hints[7];
    }
    else if (computerGuess === destinations[8]){
        document.getElementById("hints").innerHTML = " " + hints[8];
    }
    else if (computerGuess === destinations[9]){
        document.getElementById("hints").innerHTML = " " + hints[9];
    }

}

//game reset function

function Reset() {
    guessesRemaining = 15;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//if/else to check if letter appears in the computerGuess
function checkLetters(letter){
    var letterInWord = false;
    for (var i =0; i<blanks; i++){
        if (computerGuess[i] == letter){
            letterInWord = true;
        }
    }
  //loss
    if (letterInWord){
        for (var i=0; i<blanks; i++){
            if(computerGuess[i] == letter){
                blanksAndCorrect[i] = letter;
            }
        }
    }  

    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
}

//completed game function

function complete(){
    if (lettersOfWord.toString() == blanksAndCorrect.toString()){
        wins++;
        Reset();
        document.getElementById("rightGuess").innerHTML = wins;
    } else if (guessesRemaining === 0){
        losses++;
        Reset();
        document.getElementById("losses").innerHTML = losses;
    }

    document.getElementById("underscores").innerHTML = blanksAndCorrect.join(" ");
    document.getElementById("numberofGuesses").innerHTML = " " + guessesRemaining;

}

//call game

Game()

document.onkeyup = function(event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();

    document.getElementById("wrongGuess").innerHTML = " " + wrongGuess.join(" ");

}


