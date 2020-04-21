
//computer choices for words
var destinations = ["naples","budapest","bali","waco","singapore","tokyo","chicago", "london","prague","positano","dubai", "maldives"]

//choose word randomly
var computerGuess = destinations[Math.floor(Math.random() * destinations.length)];
var underscore = [];
var rightLetter =[];
var wrongLetter =[];


console.log(computerGuess);

//create underscores based on length of word
var generateUnderscore = function(){
    for (var i=0; i<computerGuess.length; i++){
        underscore.push('_'); 
    }
    return underscore;
}
console.log(generateUnderscore());
//user guess
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(computerGuess.indexOf(userGuess));

//if userGuess letter that is correct
    if ((computerGuess.indexOf(userGuess) > -1)){
//add to the right letter array
        rightLetter.push(userGuess);
        console.log(rightLetter);
    }
    else {
        wrongLetter.push(userGuess);
        console.log(wrongLetter);
        }
};
//check if value is true


//is true, push to right array
//if false, push to wrong array


//max number of guesses
const maxGuess=10



//at max guesses, restarts for a new word
//resetGame()






