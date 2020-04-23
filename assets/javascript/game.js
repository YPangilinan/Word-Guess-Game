//computer choices for words
var destinations = ["naples","budapest","bali","waco","singapore","tokyo", "london","prague", "dubai", "maldives"];
var hints = ["The city in Italy that created pizza.", "A place in Hungary that George Ezra also made a song about.", "One of the Indonesian Islands.", "City in Texas made famous by the show 'Fixer Upper'.","The country that 'Crazy Rich Asians' takes place in.",
"The most famous city in Japan.", "The city Queen Elizabeth and her royal corgi's reside.","A city in the Czech Republic that looks like a fairytale cover.", "A city in the UAE known for luxury shopping.", "An expensive island located in south asia."];

//global variables

var computerGuess = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];


//counter variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;



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
        document.getElementById("image").src = "assets/images/naples.jpg";
    }

    else if (computerGuess === destinations[1]){
        document.getElementById("hints").innerHTML = " " + hints[1];
        document.getElementById("image").src = "assets/images/budapest.jpg";
    }
    else if (computerGuess === destinations[2]){
        document.getElementById("hints").innerHTML = " " + hints[2];
        document.getElementById("image").src = "assets/images/bali.jpg";
    }
    else if (computerGuess === destinations[3]){
        document.getElementById("hints").innerHTML = " " + hints[3];
        document.getElementById("image").src = "assets/images/waco.jpg";
    }
    else if (computerGuess === destinations[4]){
        document.getElementById("hints").innerHTML = " " + hints[4];
        document.getElementById("image").src = "assets/images/crazyrich.jpg";
    }
    else if (computerGuess === destinations[5]){
        document.getElementById("hints").innerHTML = " " + hints[5];
        document.getElementById("image").src = "assets/images/tokyo.jpg";
    }
    else if (computerGuess === destinations[6]){
        document.getElementById("hints").innerHTML = " " + hints[6];
        document.getElementById("image").src = "assets/images/corgi.jpg";
    }
    else if (computerGuess === destinations[7]){
        document.getElementById("hints").innerHTML = " " + hints[7];
        document.getElementById("image").src = "assets/images/prague.jpg";
    }
    else if (computerGuess === destinations[8]){
        document.getElementById("hints").innerHTML = " " + hints[8];
        document.getElementById("image").src = "assets/images/dubai.jpg";
    }
    else if (computerGuess === destinations[9]){
        document.getElementById("hints").innerHTML = " " + hints[9];
        document.getElementById("image").src = "assets/images/maldives.jpg";
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
        alert ("great job guessing where I want to go!");
        Reset();
        document.getElementById("rightGuess").innerHTML = wins;
    } else if (guessesRemaining === 0){
        losses++;
        alert ("aw darn. guess you're staying inside!");
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


