
//computer choices for words
var destinations = ["naples","budapest","bali","waco","singapore","tokyo","chicago", "london","prague","positano","dubai", "maldives"]

//choose word randomly
var computerGuess = destinations[Math.floor(Math.random() * destinations.length)];
var underscore = []

//create underscores based on length of word
var generateUnderscore = function(){
    for (var i=0; i<computerGuess.length; i++){
        underscore.push('_'); 
    }
    return underscore;
}

//user guess
//check if value is true
//is true, push to right array
//if false, push to wrong array


//max number of guesses
const maxGuess=10



//at max guesses, restarts for a new word
//resetGame()






