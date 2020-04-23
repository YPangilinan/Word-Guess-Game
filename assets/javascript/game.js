//computer choices for words
var destinations = ["naples","budapest","bali","waco","singapore","tokyo", "london","prague", "dubai", "maldives"];
var hints = ["The city in Italy that created pizza.", "A place in Hungary that George Ezra also made a song about.", "One of the Indonesian Islands.", "City in Texas made famous by the show 'Fixer Upper'.","The country that 'Crazy Rich Asians' takes place in.",
"The most famous city in Japan.", "The city Queen Elizabeth and her royal corgi's reside.","A city in the Czech Republic that looks like a fairytale cover.", "A city in the UAE known for luxury shopping.", "An expensive island located in south asia."];

//global variables

var computerGuess = "";
var letters = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];


//counter variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;


//start game function

function wordGuess() {
    //computer chooses random word from destinations array
    computerGuess = destinations[Math.floor(Math.random() * destinations.length)];

    //split words into separate array and store in a different array
    letters = computerGuess.split("");

    //need the length of each word for the correct underscore display
    blanks = letters.length;

    //for loop to give underscores for each letter in the array
    for (var i=0; i < blanks; i++){
        blanksAndCorrect.push("_");
    }

    //updating the DOM with underscores of correct length
    document.getElementById("underscores").innerHTML = " " + blanksAndCorrect.join(" ");

    // console.log(computerGuess);

    //if/else statements to give hints to users that includes pictures of each place

    //naples
    if (computerGuess === destinations[0]){
        document.getElementById("hints").innerHTML = " " + hints[0];
        document.getElementById("image").src = "assets/images/naples.jpg";
    }
    //budapest
    else if (computerGuess === destinations[1]){
        document.getElementById("hints").innerHTML = " " + hints[1];
        document.getElementById("image").src = "assets/images/budapest.jpg";
    }
    //bali
    else if (computerGuess === destinations[2]){
        document.getElementById("hints").innerHTML = " " + hints[2];
        document.getElementById("image").src = "assets/images/bali.jpg";
    }
    //waco
    else if (computerGuess === destinations[3]){
        document.getElementById("hints").innerHTML = " " + hints[3];
        document.getElementById("image").src = "assets/images/waco.jpg";
    }
    //singapore
    else if (computerGuess === destinations[4]){
        document.getElementById("hints").innerHTML = " " + hints[4];
        document.getElementById("image").src = "assets/images/crazyrich.jpg";
    }
    //tokyo
    else if (computerGuess === destinations[5]){
        document.getElementById("hints").innerHTML = " " + hints[5];
        document.getElementById("image").src = "assets/images/tokyo.jpg";
    }
    //london
    else if (computerGuess === destinations[6]){
        document.getElementById("hints").innerHTML = " " + hints[6];
        document.getElementById("image").src = "assets/images/corgi.jpg";
    }
    //prague
    else if (computerGuess === destinations[7]){
        document.getElementById("hints").innerHTML = " " + hints[7];
        document.getElementById("image").src = "assets/images/prague.jpg";
    }
    //dubai
    else if (computerGuess === destinations[8]){
        document.getElementById("hints").innerHTML = " " + hints[8];
        document.getElementById("image").src = "assets/images/dubai.jpg";
    }
    //maldives
    else if (computerGuess === destinations[9]){
        document.getElementById("hints").innerHTML = " " + hints[9];
        document.getElementById("image").src = "assets/images/maldives.jpg";
    }

}
//call game function

wordGuess()

document.onkeyup = function(event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();


}
//if/else to check if letter appears in the computerGuess
function checkLetters(letter){
    var letterInWord = false;

    //win if letter appears in the array
    for (var i =0; i<blanks; i++){
        if (computerGuess[i] == letter){
            letterInWord = true;
        }
    }
  //loss logic if letter does not appear in the array
    if (letterInWord){
        for (var i=0; i<blanks; i++){
            if(computerGuess[i] == letter){
                blanksAndCorrect[i] = letter;
            }
        }
    }  

    //wrong letter choices get added to wrong guess array and will show letters guessed on the screen.
    //decrease the guesses remaining each time the user guesses.
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
}


//game completion function

function complete(){
    if (letters.toString() == blanksAndCorrect.toString()){
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

//game reset function after every win/loss

function Reset() {
    wrongGuess = [];
    blanksAndCorrect = [];
    guessesRemaining = 10;
    wordGuess()
}


//adding to the DOM
    document.getElementById("underscores").innerHTML = blanksAndCorrect.join(" ");
    document.getElementById("numberofGuesses").innerHTML = " " + guessesRemaining;
    document.getElementById("wrongGuess").innerHTML = " " + wrongGuess.join(" ");

}




